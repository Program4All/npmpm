
import { observable, autorun, computed, action, ObservableMap, extendObservable } from 'mobx'
import { readFileSync, writeFileSync } from 'fs'
import * as path from 'path'

const object2entries = (object: any) => Object.keys(object).map(key => [key, object[key]])

class ProjectStore {

  @observable root_path: string = ''
  @observable props: Map<string, any> = new Map()
  @observable scripts: Map<string, string> = new Map()
  @observable deps: Map<string, [string, string]> = new Map()
  @observable dev_deps: Map<string, [string, string]> = new Map()

  constructor(root_path: string) {
    this.root_path = root_path
    const package_json = JSON.parse(readFileSync(path.join(root_path, 'package.json'), 'utf-8'))
    for (const [key, value] of object2entries(package_json)){
      // ({
      //   'scripts':
      // }[key] || () => {})
      // if ([, 'dependencies', 'devDependencies'].indexOf(key) < 0) {
      // } else {
      // }
    }
  }

}