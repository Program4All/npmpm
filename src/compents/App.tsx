
import * as React from 'react'
import { Store } from '../store'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import openFileDialog from './openFileDialog'

import HomePage from './HomePage'
import ProjectPage from './ProjectPage'

import * as fs from 'fs'
import * as path from 'path'

const go = (path: string) => { location.hash = '#' + path }

interface Opts {
  store: Store
}

const openProject = async (store: Store) => {
  const project_path = await openFileDialog({ nwdirectory: true })
  if (project_path) {
    const package_json_path = path.join(project_path, 'package.json')
    try {
      const package_json = JSON.parse(fs.readFileSync(package_json_path, 'utf-8'))
      store.setProject({ name: package_json.name, path: project_path })
    } catch (err) {
      alert('不能打开项目: ' + JSON.stringify(err))
    }
  }
}

export default observer(({ store }: Opts) =>
  <Router>
      <div className="window">

        <header className="toolbar">

          <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default" onClick={() => go('/')}>
                <span className="icon icon-home icon-text" ></span>
                主页
              </button>
              <Route path="/project/:project_id" component={({match}: any) => {
                const project = store.projects.get(match.params.project_id)
                return <button className="btn btn-default">
                  <span className="icon icon-right-open icon-text"></span>
                  {project ? project.name : '未知错误'}
                </button>
              }
              } />
            </div>

            <button className="btn btn-default pull-right" onClick={() => openProject(store)}>
              <span className="icon icon-plus"></span>
              添加
            </button>
          </div>
        </header>

        <div className="window-content">
          <Switch>
            <Route path="/project/:project_id" component={({match}: any) => <ProjectPage match={match} id={match.params.project_id} store={store} />} />
            <Route component={() => <HomePage store={store} />}></Route>
          </Switch>
        </div>

        <footer className="toolbar toolbar-footer">
          <h1 className="title pull-right">
            {/* 就绪 {store.tasks.size} */}
            {store.running_task_count > 0 ? `还有${store.running_task_count}个任务正在执行` : `就绪`}
            <span className="icon icon-leaf icon-text"></span>
          </h1>
          <button className="btn btn-mini btn-default pull-left" onClick={() => {
            const result = prompt('配置 PATH 环境变量', store.PATH)
            if (result) { store.PATH = result }
          }}>
            <span className="icon icon-cog"></span>
          </button>
        </footer>

      </div>
  </Router>
)