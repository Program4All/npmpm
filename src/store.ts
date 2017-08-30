
import { observable, autorun, computed, action, ObservableMap, extendObservable } from 'mobx'
import { ChildProcess } from 'child_process'
import { v4 as uuid } from 'uuid'
import * as os from 'os'

export interface Task {
  is_running: boolean
  process: ChildProcess | null
  outputs: string[]
}

export interface Project {
  name: string
  path: string
  last_open: number
  tasks: Map<string, Task>
}

export class Store {

  @observable filter: string = ''
  @observable PATH: string = ''
  projects: ObservableMap<Project>
  store_key: string

  @computed
  get running_task_count() {
    return this.projects
      .values()
      .map(project => [...project.tasks.values()].filter(({ is_running }) => is_running).length)
      .reduce((l, r) => l + r, 0)
  }

  @computed
  get filter_regexp() {
    return new RegExp(this.filter, 'i')
  }

  @computed
  get filtered_projects(): [string, Project][] {
    return (
      this.projects.entries()
        .sort(([, p1], [, p2]) => p2.last_open - p1.last_open)
        .filter(([, project]) => this.filter_regexp.test(project.name) || this.filter_regexp.test(project.path))
    )
  }

  constructor(store_key: string) {
    this.store_key = store_key
    this.PATH = localStorage.getItem('PATH') || (<any>{
      'darwin': '/usr/local/bin:/usr/local/lib/node_modules/npm/bin/',
      'win32': '',
      'linux': ''
    })[os.platform()] || ''

    const projects = new Map<string, Project>(
      (JSON.parse(localStorage.getItem(store_key) || '[]')).map(([id, project]: any) => [id, { ...project, tasks: new Map() }])
    )
    extendObservable(this, { projects })
    autorun(() => localStorage.setItem(store_key, 
      JSON.stringify(this.projects.entries().map(([id, project]) => [id, { ...project, tasks: undefined }]))
    ))
    autorun(() => localStorage.setItem('PATH', this.PATH))
  }

  @action
  setProject({ name = '未命名', path }: Pick<Project, 'name' | 'path'>) {
    const project = [...this.projects.values()].find(({ path: _path }) => path === _path)
    if (project) {
      project.name = name
    } else {
      this.projects.set(uuid(), { name, path, last_open: Date.now(), tasks: new Map() })
    }
  }

  @action
  removeProject(id: string) {
    this.projects.delete(id)
  }
}