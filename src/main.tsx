

import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from './compents/App'
import { Store } from './store'
declare const nw: any

const store = new Store('projects')
;(window as any).store = store

const win = nw.Window.get()
win.on('close', () => {
  if (store.running_task_count > 0) {
    confirm('还有任务正在执行, 确定关闭吗') ? win.close(true) : void(0)
  } else {
    win.close(true)
  }
})

ReactDom.render(
  <App store={store} />,
  document.getElementById('app')
)