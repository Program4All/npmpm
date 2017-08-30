
import * as React from 'react'
import { Store, Project, Task } from '../store'
import { observer } from 'mobx-react'
import { action, observable, autorun } from 'mobx'
import { Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import * as fs from 'fs'
import * as path from 'path'

import InfoPage from './InfoPage'
import DepPage from './DepPage'
import TaskPage from './TaskPage'

interface Opts { store: Store, id: string, match: any}
const go = (path: string) => { location.hash = '#' + path }

export default observer(({ store, id, match }: Opts) => {
  const project = store.projects.get(id)
  if (!project) {
    alert('未找到项目')
    go('/')
    return <div>404</div>
  }

  let package_json: any
  try {
    package_json = JSON.parse(fs.readFileSync(path.join(project.path, 'package.json'), 'utf-8'))
  } catch (err) {
    confirm(`项目 ${id} 不可读，是否删除`) ? store.removeProject(id) : void (0)
    go('/')
    return <div>404</div>
  }

  const scripts = package_json.scripts || {}

  return <div className="pane-group">
    <div className="pane-sm sidebar" style={{ overflow: 'auto' }}>

      <nav className="nav-group">
        <h5 className="nav-group-title">基本</h5>

        <NavLink exact className="nav-group-item" to={match.url}>
          属性
        </NavLink>
        <NavLink className="nav-group-item" to={match.url+ '/deps'}>
          依赖
        </NavLink>
        {/* <span className="nav-group-item">
          任务
        </span> */}
      </nav>

      {/* <nav className="nav-group">
        <h5 className="nav-group-title">基本任务</h5>
        <a className="nav-group-item">
          安装
        </a>
      </nav> */}

      <nav className="nav-group">
        <h5 className="nav-group-title">任务</h5>
        {
          Object.keys(scripts).map(task_name => {
            const task = project.tasks.get(task_name)
            return <NavLink key={task_name} className="nav-group-item" to={match.url + '/task/' + task_name.replace(':', '-')}>
            {task_name}{ task && task.is_running ? '(执行中)' : ''}
            </NavLink>
          })
        }
        {/* <a className="nav-group-item">
          安装依赖
        </a> */}
      </nav>

    </div>

    <div className="pane">
      <Switch>
        {/* <Route path="/project/:project_id" component={({ match }: any) => <ProjectPage id={match.params.project_id} store={store} />} />
        <Route component={() => <HomePage store={store} />}></Route> */}

        <Route path={match.url + '/deps'} component={() => <DepPage package_json={package_json} />} />
        <Route path={match.url + '/task/:task_name'} component={({ match }: any) => {
          const task_name: string = match.params.task_name.replace('-', ':')
          let task = project.tasks.get(task_name)
          if (!task) {
            project.tasks.set(task_name, { is_running: false, process: null, outputs: [] })
          }
          task = project.tasks.get(task_name) as Task
          return <TaskPage task_name={task_name} task_command={scripts[task_name]} task={task} project={project} store={store}/>
        }} />
        <Route path={match.url} component={() => <InfoPage package_json={package_json} />} />
      </Switch>
    </div>
  </div>
})
