
import * as React from 'react'
import { Store, Project } from '../store'
import { observer } from 'mobx-react'
import { action, observable, autorun } from 'mobx'
import { Router, Route, Link } from 'react-router-dom'
import * as fs from 'fs'
import * as path from 'path'

declare const nw: any

interface Opts {
  package_json: any
}

export default observer(({ package_json }: Opts) =>
  <table className="table-striped">
    <thead><tr>
      <th>属性</th>
      <th>值</th>
      {/* <th>
        <button className="btn btn-mini btn-default pull-right" onClick={action(() => {
          const key = prompt('请输入添加的属性名')
          if (key) { package_json.content[key] = '' }
        })}>
          <span className="icon icon-plus"></span>
        </button>
      </th> */}
    </tr></thead>
    <tbody>
      {
        Object.keys(package_json)
          .filter(key => ['scripts', 'dependencies', 'devDependencies'].indexOf(key) < 0)
          .map(key =>
            <tr key={key} onContextMenu={(event) => {
              event.preventDefault()
              const menu = new nw.Menu()
              menu.append(new nw.MenuItem({ label: '删除', click: action(() => { package_json[key] }) }));
              menu.append(new nw.MenuItem({ label: '修改' }));
              menu.append(new nw.MenuItem({ type: 'separator' }));
              menu.append(new nw.MenuItem({ label: '添加新属性' }));
              menu.popup(event.clientX, event.clientY)
            }}>
              <td>{key}</td>
              <td>{JSON.stringify(package_json[key])}</td>
              {/* <td>
                <div className="btn-group pull-right">
                  <button className="btn btn-mini btn-default">
                    <span className="icon icon-pencil"></span>
                  </button>
                  <button className="btn btn-mini btn-default">
                    <span className="icon icon-cancel"></span>
                  </button>
                </div>
              </td> */}
            </tr>
          )
      }
    </tbody>
  </table>
)