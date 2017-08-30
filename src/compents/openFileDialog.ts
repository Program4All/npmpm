let _el: null | HTMLInputElement = null

const getElement = (): HTMLInputElement => {
  const el = document.createElement('input')
  el.type = 'file'
  el.style.display = 'none'
  document.body.appendChild(el)
  if (_el) { _el.remove() }
  _el = el
  return el
}

export default (opts: any = {}) => {
  const dialog_element = getElement()

  for (const key of Object.getOwnPropertyNames(opts)) {
    (<any>dialog_element)[key] = opts[key]
  }

  dialog_element.click()

  return new Promise<any>(resolve => {
    const el = dialog_element as HTMLInputElement & { oncancel: Function }
    el.onchange = () => resolve(el.value)
    el.oncancel = () => resolve(null)
  })
}