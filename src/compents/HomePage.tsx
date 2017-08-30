
import * as React from 'react'
import { Store, Project } from '../store'
import { observer } from 'mobx-react'
import { action } from 'mobx'
const open = require('open')

interface Opts { store: Store }

interface ItemOpts { store: Store, id: string, project: Project }

const go = (path: string) => { location.hash = '#' + path }

const Item = observer(({ store, id, project }: ItemOpts) =>
  <li className="list-group-item">
    <div className="media-object pull-right btn-group">
      <button className="btn btn-default" onClick={() => open(project.path)}>
        <span className="icon icon-folder" style={{ textOverflow: 'unset' }}></span>
      </button>
      <button className="btn btn-default" onClick={() => confirm(`是否删除项目: ${project.name}`) ? store.removeProject(id) : void (0)}>
        <span className="icon icon-cancel-circled"></span>
      </button>
    </div>
    <div className="media-body" onClick={() => {
      go(`/project/${id}`)
      action(() => { project.last_open = Date.now() })()
    }}>
      <strong>{project.name} {(() => {
        const running_count = [...project.tasks.values()].filter(({ is_running }) => is_running).length
        return running_count > 0 ? `(${running_count}个任务正在执行)` : ''
      })()
      }</strong>
      <p>{project.path} | {new Date(project.last_open).toLocaleString()}</p>
    </div>
  </li>
)

export default observer(({ store }: Opts) =>
  <ul className="list-group">

    <li className="list-group-header">
      <input className="form-control" type="text" placeholder="搜索项目" value={store.filter} onChange={
        e => { store.filter = e.target ? e.target.value : '' }
      } />
    </li>

    {store.filtered_projects.map(([id, project]) => <Item key={id} store={store} id={id} project={project} />)}

  </ul>
)
