<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
import type { SFCOptions } from '@vue/repl'
import { Repl, ReplStore, compileFile, File } from '@vue/repl'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Monaco from '@vue/repl/monaco-editor'
import { ref, watchEffect, onMounted } from 'vue'
import Header from './Header.vue'

// template
import mainTemplate from './template/main.vue?raw'
import AppTemplate from './template/welcome.vue?raw'
import PlusProComponentsTemplate from './template/plus-pro-components.js?raw'

import { atou } from './utils'

const CDN = 'https://unpkg.com'
const MAIN_FILE = 'src/PlaygroundMain.vue'
const APP_FILE = 'src/App.vue'
const PPC_FILE = 'src/plus-pro-components.js'

const version = '2.3.4'

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}
window.addEventListener('resize', setVH)
setVH()

const useDevMode = ref(false)
const useSSRMode = ref(false)

let hash = location.hash.slice(1)
if (hash.startsWith('__DEV__')) {
  hash = hash.slice(7)
  useDevMode.value = true
}
if (hash.startsWith('__SSR__')) {
  hash = hash.slice(7)
  useSSRMode.value = true
}

const defaultVueRuntimeURL = CDN + `/@vue/runtime-dom/dist/runtime-dom.esm-browser.js`
const defaultVueServerRendererURL =
  CDN + `/@vue/server-renderer/dist/server-renderer.esm-browser.js`

const store = new ReplStore({
  serializedState: hash,
  defaultVueRuntimeURL,
  defaultVueServerRendererURL
})

store.setImportMap({
  imports: {
    ...store.getImportMap().imports,
    'element-plus': CDN + `/element-plus@${version}/dist/index.full.mjs`,
    'plus-pro-components': CDN + `/plus-pro-components/index.mjs`,
    '@element-plus/icons-vue': CDN + `/@element-plus/icons-vue/dist/index.js`
  }
})

let Template = AppTemplate

if (location.hash.slice(1)) {
  const res = atou(location.hash.slice(1))
  const data = JSON.parse(res)
  Template = data['App.vue']
}

store
  .setFiles({
    ...store.getFiles(),
    [APP_FILE]: Template,
    [MAIN_FILE]: mainTemplate,
    [PPC_FILE]: PlusProComponentsTemplate
  })
  .then(() => {
    store.state.mainFile = MAIN_FILE
    store.state.files[MAIN_FILE].hidden = true
    store.state.files[PPC_FILE].hidden = true
  })

// enable experimental features
const sfcOptions: SFCOptions = {
  script: {
    inlineTemplate: !useDevMode.value,
    isProd: !useDevMode.value,
    reactivityTransform: true,
    defineModel: true
  },
  style: {
    isProd: !useDevMode.value
  },
  template: {
    isProd: !useDevMode.value
  }
}

// persist state
watchEffect(() => {
  const newHash = store
    .serialize()
    .replace(/^#/, useSSRMode.value ? `#__SSR__` : `#`)
    .replace(/^#/, useDevMode.value ? `#__DEV__` : `#`)
  history.replaceState({}, '', newHash)
})

function toggleDevMode() {
  const dev = (useDevMode.value = !useDevMode.value)
  sfcOptions.script!.inlineTemplate =
    sfcOptions.script!.isProd =
    sfcOptions.template!.isProd =
    sfcOptions.style!.isProd =
      !dev
  store.setFiles(store.getFiles())
}

function toggleSSR() {
  useSSRMode.value = !useSSRMode.value
  store.setFiles(store.getFiles())
}

const theme = ref<'dark' | 'light'>('dark')
function toggleTheme(isDark: boolean) {
  theme.value = isDark ? 'dark' : 'light'
}

//  修改版本
const changePPCVersion = (v: string = 'latest') => {
  const current = CDN + `/plus-pro-components@${v}`

  const link = current + `/index.css`
  const code = PlusProComponentsTemplate.replace(CDN + '/plus-pro-components/index.css', link)
  const file = new File(PPC_FILE, code, import.meta.env.DEV)
  store.state.files[PPC_FILE] = file
  compileFile(store, file).then((errs: any) => (store.state.errors = errs))

  store.setImportMap({
    imports: {
      ...store.getImportMap().imports,
      'plus-pro-components': current + `/index.mjs`
    }
  })

  const url = `${location.origin}${location.pathname}#${store.serialize()}`
  history.replaceState({}, '', url)
}

onMounted(() => {
  const cls = document.documentElement.classList
  toggleTheme(cls.contains('dark'))
})
</script>

<template>
  <Header
    :store="store"
    :dev="useDevMode"
    :ssr="useSSRMode"
    @toggle-theme="toggleTheme"
    @toggle-dev="toggleDevMode"
    @toggle-ssr="toggleSSR"
    @changePPCVersion="changePPCVersion"
  />
  <Repl
    :theme="theme"
    :editor="Monaco"
    :ssr="useSSRMode"
    :store="store"
    :show-compile-output="true"
    :auto-resize="true"
    :sfc-options="sfcOptions"
    :clear-console="false"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
  />
</template>

<style>
.dark {
  color-scheme: dark;
}

body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  height: calc(var(--vh) - var(--nav-height)) !important;
}

.active .indicator {
  background-color: #0072ff !important;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}

.file-selector.has-import-map .add {
  display: none !important;
}
</style>
