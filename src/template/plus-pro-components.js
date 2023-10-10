import { getCurrentInstance } from 'vue'
import PlusProComponents from 'plus-pro-components'

alert('100')

let installed = false
await loadStyle()

export function setupPlusProComponents() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(PlusProComponents)
  installed = true
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const styles = [
      'https://unpkg.com/plus-pro-components/index.css',
      'https://unpkg.com/element-plus/dist/index.css'
    ]

    for (let index = 0; index < styles.length; index++) {
      const item = styles[index]
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = item
      link.addEventListener('load', resolve)
      link.addEventListener('error', reject)
      document.body.append(link)
    }
  })
}
