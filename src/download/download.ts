/* eslint-disable @typescript-eslint/ban-ts-comment */
import { saveAs } from 'file-saver'

import type { ReplStore } from '@vue/repl'

// @ts-ignore *
import index from './template/index.html?raw'
// @ts-ignore *
import main from './template/main.js?raw'
// @ts-ignore *
import pkg from './template/package.json?raw'
// @ts-ignore *
import config from './template/vite.config.js?raw'
// @ts-ignore *
import readme from './template/README.md?raw'

export async function downloadProject(store: ReplStore) {
  if (!confirm('Download project files?')) {
    return
  }

  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()

  // basic structure
  zip.file('index.html', index)
  zip.file('package.json', pkg)
  zip.file('vite.config.js', config)
  zip.file('README.md', readme)

  // project src
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const src = zip.folder('src')!
  src.file('main.js', main)

  const files = store.getFiles()
  for (const file in files) {
    if (file !== 'import-map.json') {
      src.file(file, files[file])
    } else {
      zip.file(file, files[file])
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'vue-project.zip')
}
