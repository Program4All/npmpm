

import * as React from 'react'
import { Store, Project } from '../store'
import { observer } from 'mobx-react'
import { action, observable, autorun } from 'mobx'
import { Router, Route, Link } from 'react-router-dom'
import * as fs from 'fs'
import * as path from 'path'

interface Opts {
  package_json: any
}

{/* .filter(key => ['scripts', 'dependencies', 'devDependencies'].indexOf(key) < 0) */ }
export default observer(({ package_json }: Opts) => {

  const type = 'dependencies'
  const deps = Object.assign({}, package_json['dependencies'], package_json['devDependencies'])

  return <div>
    {/* <div className="tab-group" style={{ position: 'absolute', width: '100%', top: '0' }}>
      <div className="tab-item"> <span className="icon"></span> 普通依赖 </div>
      <div className="tab-item"> <span className="icon"></span> 开发依赖 </div>
    </div> */}
    <table className="table-striped">
      <thead><tr>
        <th>包名</th>
        <th>依赖版本</th>
      </tr></thead>
      <tbody>
        {
          Object.keys(deps)
            .map(key =>
              <tr key={key}>
                <td>{key}</td>
                <td>{deps[key]}</td>
              </tr>
            )
        }
      </tbody>
    </table>
  </div>
})