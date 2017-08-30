

import * as React from 'react'
import { Store, Project, Task } from '../store'
import { observer } from 'mobx-react'
import { action, observable, autorun } from 'mobx'
import { Router, Route, Link } from 'react-router-dom'
import * as fs from 'fs'
import * as path from 'path'
import * as child_process from 'child_process'
import * as os from 'os'

declare const TextDecoder: any

interface Opts {
  task_name: string
  task_command: string
  task: Task
  project: Project
  store: Store
}

const run = action((task_name: string, task: Task, project: Project, store: Store) => {
  const process = child_process.spawn('npm', ['run', task_name], {
    cwd: project.path, shell: true, env: { PATH: global.process.env.PATH + ':' + store.PATH }
  })
  task.is_running = true

  task.outputs.push(`npm run ${task_name} ${new Date().toLocaleString()}`)
  process.stdout.on('data', (data: string) =>
    task.outputs.push(...new TextDecoder("utf-8").decode(data).split(os.EOL))
  )

  process.stderr.on('data', (data: string) =>
    task.outputs.push(...new TextDecoder("utf-8").decode(data).split(os.EOL)) 
  )

  process.on('close', (code) => {
    task.outputs.push(`Child exited with code ${code}. ${new Date().toLocaleString()}`)
    task.is_running = false
  })

  task.process = process
})

const stop = action((task: Task) => {
  if (task.process)
    task.process.kill()
})

export default observer(({ task_name, task_command, task, project, store }: Opts) =>
  <div style={{ height: '100%', overflow: 'auto', backgroundColor: '#333', color: '#FFF' }}>
    <div style={{ position: 'absolute', width: '100%', color: '#FFF', top: '0', background: '#666' }}>
      <div>{task_name} || {task_command}</div>
      {
        task.is_running
          ? <div>正在执行 || <button className="btn btn-mini btn-default" onClick={() => stop(task)}>中止</button></div>
          : <div>已停止 || <button className="btn btn-mini btn-default" onClick={() => run(task_name, task, project, store)}>开始</button></div>
      }

    </div>
    <table className="table" style={{ marginTop: '40px' }}>
      <tbody style={{ backgroundColor: '#333', color: '#FFF' }}>
        {task.outputs.slice(-2000).map((line, index) => <tr key={index}><td>{line}</td></tr>)}
      </tbody>
    </table>
  </div>
)