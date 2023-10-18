import { getCurrentInstance } from 'vue'
import PlusProComponents from 'plus-pro-components'
import ElementPlus from 'element-plus'

const version = '2.3.4'

const createLink = (resolve, reject, href) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.addEventListener('load', resolve)
  link.addEventListener('error', reject)
  document.body.append(link)
}

let installed = false
await loadStyle()
await loadEPStyle()

export function setupPlusProComponents() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(PlusProComponents)
  instance.appContext.app.use(ElementPlus)
  installed = true
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    createLink(resolve, reject, 'https://unpkg.com/plus-pro-components/index.css')
  })
}

export function loadEPStyle() {
  return new Promise((resolve, reject) => {
    createLink(resolve, reject, `https://unpkg.com/element-plus@${version}/dist/index.css`)
  })
}
