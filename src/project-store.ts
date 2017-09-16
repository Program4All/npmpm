
import * as  fs from 'fs'
import * as path from 'path'
import * as mobx from 'mobx'

type JsonBaseValueType = string | null | boolean | number

class ProjectStore {

  @mobx.observable private project_path: string = ''
  @mobx.observable private package_json_path: string = ''
  @mobx.observable private package_json_string: string = ''
  @mobx.observable private package_json: [string, JsonBaseValueType][] = []

  package_json_watcher: fs.FSWatcher
  deps_watcher: fs.FSWatcher

  _lock: boolean = true // 标记运行状态的
  lock() { this._lock = true }
  unlock() { this._lock = false }

  inLock<A, R>(fn: (...arg: A[]) => R) {
    return (...args: A[]): R => {
      this.lock()
      const result = fn(...args)
      this.unlock()
      return result
    }
  }

  @this.inLock
  clear() {
  }

  init() {
  }

}