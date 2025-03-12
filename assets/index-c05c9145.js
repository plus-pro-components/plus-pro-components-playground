import{_ as Ie,F as De,o as x,c as S,a as ie,b as v,d as ce,m as Oe,r as z,u as Ue,e as xe,f as Ne,t as W,n as ye,g as He,h as Se,i as Be,j as Ge,w as se,k as E,l as Ke,p as O,R as qe,q as We,s as Ce,v as ke,x as Je,y as Ye,z as Ve,A as Ze}from"./vendor-45ad7262.js";import"./__commonjsHelpers__-6f6aee75.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Qe="/logo.png",Xe=`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <link rel="icon" href="/favicon.ico" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>Vite App</title>\r
  </head>\r
  <body>\r
    <div id="app"></div>\r
    <script type="module" src="/src/main.js"><\/script>\r
  </body>\r
</html>\r
`,en=`import { createApp } from 'vue'\r
import App from './App.vue'\r
\r
createApp(App).mount('#app')\r
`,nn=`{\r
  "name": "vite-vue-starter",\r
  "version": "0.0.0",\r
  "scripts": {\r
    "dev": "vite",\r
    "build": "vite build",\r
    "serve": "vite preview"\r
  },\r
  "dependencies": {\r
    "vue": "^3.3.0"\r
  },\r
  "devDependencies": {\r
    "@vitejs/plugin-vue": "^4.3.4",\r
    "vite": "^4.4.9"\r
  }\r
}\r
`,tn=`import { defineConfig } from 'vite'\r
import vue from '@vitejs/plugin-vue'\r
\r
// https://vitejs.dev/config/\r
export default defineConfig({\r
  plugins: [vue()]\r
})\r
`,rn=`# Vite Vue Starter\r
\r
This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.\r
\r
To start:\r
\r
\`\`\`sh\r
npm install\r
npm run dev\r
\r
# if using yarn:\r
yarn\r
yarn dev\r
\`\`\`\r
`;async function on(e){if(!confirm("Download project files?"))return;const{default:t}=await Ie(()=>import("./jszip.min-2df6057c.js").then(u=>u.j),["assets/jszip.min-2df6057c.js","assets/__commonjsHelpers__-6f6aee75.js","assets/vendor-45ad7262.js"]),n=new t;n.file("index.html",Xe),n.file("package.json",nn),n.file("vite.config.js",tn),n.file("README.md",rn);const r=n.folder("src");r.file("main.js",en);const o=e.getFiles();for(const u in o)u!=="import-map.json"?r.file(u,o[u]):n.file(u,o[u]);const c=await n.generateAsync({type:"blob"});De.saveAs(c,"vue-project.zip")}const T=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},sn={},ln={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},an=ie('<path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),cn=[an];function un(e,t){return x(),S("svg",ln,cn)}const pn=T(sn,[["render",un],["__file","Sun.vue"]]),dn={},fn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},vn=v("path",{fill:"currentColor",d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),mn=[vn];function hn(e,t){return x(),S("svg",fn,mn)}const gn=T(dn,[["render",hn],["__file","Moon.vue"]]),_n={},wn={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},yn=ie('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),Cn=[yn];function kn(e,t){return x(),S("svg",wn,Cn)}const Vn=T(_n,[["render",kn],["__file","Share.vue"]]),Pn={},xn={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24",fill:"currentColor"},Sn=ie('<g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g>',1),bn=[Sn];function $n(e,t){return x(),S("svg",xn,bn)}const En=T(Pn,[["render",$n],["__file","Download.vue"]]),Mn={},jn={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24",fill:"currentColor"},An=v("path",{d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1),zn=[An];function Tn(e,t){return x(),S("svg",jn,zn)}const Ln=T(Mn,[["render",Tn],["__file","GitHub.vue"]]),Rn={class:"number"},Fn={key:0},In=v("a",null,"loading versions...",-1),Dn=[In],On=["onClick"],Un=ce({__name:"VersionSelect",props:Oe({pkg:{},label:{}},{modelValue:{}}),emits:["update:modelValue"],setup(e){const t=e,n=z(!1),r=z(),o=Ue(e,"modelValue");async function c(){n.value=!n.value,r.value||(r.value=await u())}async function u(){const f=await fetch(`https://data.jsdelivr.com/v1/package/npm/${t.pkg}`),{versions:a}=await f.json();if(t.pkg==="vue"){let l=a[0].includes("-");const i=[];for(const m of a)if(m.includes("-")?l&&i.push(m):(i.push(m),l=!1),i.length>=30||m==="3.0.10")break;return i}else{if(t.pkg==="element-plus")return a.filter(l=>!l.includes("alpha")&&!l.includes("beta"));if(t.pkg==="plus-pro-components")return a.filter(l=>!l.includes("alpha")&&!l.includes("beta"))}return a}function s(f){o.value=f,n.value=!1}return xe(()=>{window.addEventListener("click",()=>{n.value=!1}),window.addEventListener("blur",()=>{var f;((f=document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&(n.value=!1)})}),(f,a)=>(x(),S("div",{class:"version",onClick:a[1]||(a[1]=se(()=>{},["stop"]))},[v("span",{class:ye(["active-version",t.pkg]),onClick:c},[Ne(W(f.label)+" ",1),v("span",Rn,W(o.value),1)],2),v("ul",{class:ye(["versions",{expanded:n.value}])},[r.value?He("",!0):(x(),S("li",Fn,Dn)),(x(!0),S(Se,null,Be(r.value,l=>(x(),S("li",{key:l},[v("a",{onClick:i=>s(l)},"v"+W(l),9,On)]))),128)),v("div",{onClick:a[0]||(a[0]=l=>n.value=!1)},[Ge(f.$slots,"default")])],2)]))}});const ee=T(Un,[["__file","VersionSelect.vue"]]),Nn=v("h1",null,[v("img",{alt:"logo",src:Qe}),v("span",null,"PlusProComponents SFC Playground")],-1),Hn={class:"links"},Bn=v("li",null,[v("a",{href:"https://app.netlify.com/sites/vue-sfc-playground/deploys",target:"_blank"},"Commits History")],-1),Gn={href:"https://github.com/plus-pro-components/plus-pro-components-playground",target:"_blank",title:"View on GitHub",class:"github"},ne="latest",Kn=ce({__name:"Header",props:{store:{},dev:{type:Boolean},ssr:{type:Boolean}},emits:["toggle-theme","toggle-ssr","toggle-dev","changePPCVersion","changeElVersion"],setup(e,{emit:t}){const n=e,{store:r}=n,o=z(`@${ne}`),c=z("latest"),u=z("latest");function s(p){t("changePPCVersion",p),r.state.dependencyVersion={"plus-pro-components":p},c.value=p}function f(p){t("changeElVersion",p),r.state.dependencyVersion={"element-plus":p},u.value=p}async function a(p){o.value="loading...",await r.setVueVersion(p),o.value=`v${p}`}function l(){r.resetVueVersion(),o.value=`@${ne}`}async function i(p){if(p.metaKey){window.location.href="http://localhost:5173/"+window.location.hash;return}await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")}function m(){const p=document.documentElement.classList;p.toggle("dark"),localStorage.setItem("vue-sfc-playground-prefer-dark",String(p.contains("dark"))),t("toggle-theme",p.contains("dark"))}return(p,y)=>(x(),S("nav",null,[Nn,v("div",Hn,[E(ee,{"model-value":c.value,pkg:"plus-pro-components",label:"plus-pro-components Version","onUpdate:modelValue":s},null,8,["model-value"]),E(ee,{modelValue:u.value,"onUpdate:modelValue":[y[0]||(y[0]=b=>u.value=b),f],pkg:"element-plus",label:"element-plus Version"},null,8,["modelValue"]),E(ee,{"model-value":o.value,pkg:"vue",label:"Vue Version","onUpdate:modelValue":a},{default:Ke(()=>[v("li",null,[v("a",{onClick:l},"This Commit ("+W(ne)+")")]),Bn]),_:1},8,["model-value"]),v("button",{title:"Toggle dark mode",class:"toggle-dark",onClick:m},[E(pn,{class:"light"}),E(gn,{class:"dark"})]),v("button",{title:"Copy sharable URL",class:"share",onClick:i},[E(Vn)]),v("button",{title:"Download project files",class:"download",onClick:y[1]||(y[1]=b=>O(on)(O(r)))},[E(En)]),v("a",Gn,[E(Ln)])])]))}});const qn=T(Kn,[["__file","Header.vue"]]),Wn=`<script setup>
import App from './App.vue'
import { setupPlusProComponents } from './plus-pro-components.js'
setupPlusProComponents()
<\/script>

<template>
  <App />
</template>
`,Jn=`<template>
  <h3>PlusRadio 再次点击可以取消</h3>
  <PlusRadio v-model="state.value" :options="state.options" size="large" @change="change" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { OptionsRow, RecordType } from 'plus-pro-components'
import { PlusRadio } from 'plus-pro-components'

type State = {
  options: OptionsRow<RecordType>[]
  value: number
}

const state = reactive<State>({
  options: [
    { label: '选项一', value: 1 },
    { label: '选项二', value: 2 }
  ],
  value: 1
})

const change = (val: number) => {
  console.log(val, 'change')
}
<\/script>
`,te=`import { getCurrentInstance } from 'vue'
import PlusProComponents from 'plus-pro-components'
import ElementPlus from 'element-plus'

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
    createLink(resolve, reject, \`https://unpkg.com/element-plus/dist/index.css\`)
  })
}
`;var _=Uint8Array,U=Uint16Array,Yn=Int32Array,be=new _([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$e=new _([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zn=new _([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ee=function(e,t){for(var n=new U(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var o=new Yn(n[30]),r=1;r<30;++r)for(var c=n[r];c<n[r+1];++c)o[c]=c-n[r]<<5|r;return{b:n,r:o}},Me=Ee(be,2),je=Me.b,Qn=Me.r;je[28]=258,Qn[258]=28;var Xn=Ee($e,0),et=Xn.b,le=new U(32768);for(var d=0;d<32768;++d){var j=(d&43690)>>1|(d&21845)<<1;j=(j&52428)>>2|(j&13107)<<2,j=(j&61680)>>4|(j&3855)<<4,le[d]=((j&65280)>>8|(j&255)<<8)>>1}var G=function(e,t,n){for(var r=e.length,o=0,c=new U(t);o<r;++o)e[o]&&++c[e[o]-1];var u=new U(t);for(o=1;o<t;++o)u[o]=u[o-1]+c[o-1]<<1;var s;if(n){s=new U(1<<t);var f=15-t;for(o=0;o<r;++o)if(e[o])for(var a=o<<4|e[o],l=t-e[o],i=u[e[o]-1]++<<l,m=i|(1<<l)-1;i<=m;++i)s[le[i]>>f]=a}else for(s=new U(r),o=0;o<r;++o)e[o]&&(s[o]=le[u[e[o]-1]++]>>15-e[o]);return s},K=new _(288);for(var d=0;d<144;++d)K[d]=8;for(var d=144;d<256;++d)K[d]=9;for(var d=256;d<280;++d)K[d]=7;for(var d=280;d<288;++d)K[d]=8;var Ae=new _(32);for(var d=0;d<32;++d)Ae[d]=5;var nt=G(K,9,1),tt=G(Ae,5,1),re=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},P=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},oe=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},rt=function(e){return(e+7)/8|0},ue=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new _(n-t);return r.set(e.subarray(t,n)),r},ot=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=function(e,t,n){var r=new Error(t||ot[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,k),!n)throw r;return r},st=function(e,t,n,r){var o=e.length,c=r?r.length:0;if(!o||t.f&&!t.l)return n||new _(0);var u=!n||t.i!=2,s=t.i;n||(n=new _(o*3));var f=function(ge){var _e=n.length;if(ge>_e){var we=new _(Math.max(_e*2,ge));we.set(n),n=we}},a=t.f||0,l=t.p||0,i=t.b||0,m=t.l,p=t.d,y=t.m,b=t.n,h=o*8;do{if(!m){a=P(e,l,1);var g=P(e,l+1,3);if(l+=3,g)if(g==1)m=nt,p=tt,y=9,b=5;else if(g==2){var R=P(e,l,31)+257,F=P(e,l+10,15)+4,pe=R+P(e,l+5,31)+1;l+=14;for(var N=new _(pe),J=new _(19),C=0;C<F;++C)J[Zn[C]]=P(e,l+C*3,7);l+=F*3;for(var de=re(J),ze=(1<<de)-1,Te=G(J,de,1),C=0;C<pe;){var fe=Te[P(e,l,ze)];l+=fe&15;var w=fe>>4;if(w<16)N[C++]=w;else{var I=0,q=0;for(w==16?(q=3+P(e,l,3),l+=2,I=N[C-1]):w==17?(q=3+P(e,l,7),l+=3):w==18&&(q=11+P(e,l,127),l+=7);q--;)N[C++]=I}}var ve=N.subarray(0,R),V=N.subarray(R);y=re(ve),b=re(V),m=G(ve,y,1),p=G(V,b,1)}else k(1);else{var w=rt(l)+4,L=e[w-4]|e[w-3]<<8,M=w+L;if(M>o){s&&k(0);break}u&&f(i+L),n.set(e.subarray(w,M),i),t.b=i+=L,t.p=l=M*8,t.f=a;continue}if(l>h){s&&k(0);break}}u&&f(i+131072);for(var Le=(1<<y)-1,Re=(1<<b)-1,Y=l;;Y=l){var I=m[oe(e,l)&Le],D=I>>4;if(l+=I&15,l>h){s&&k(0);break}if(I||k(2),D<256)n[i++]=D;else if(D==256){Y=l,m=null;break}else{var me=D-254;if(D>264){var C=D-257,H=be[C];me=P(e,l,(1<<H)-1)+je[C],l+=H}var Z=p[oe(e,l)&Re],Q=Z>>4;Z||k(3),l+=Z&15;var V=et[Q];if(Q>3){var H=$e[Q];V+=oe(e,l)&(1<<H)-1,l+=H}if(l>h){s&&k(0);break}u&&f(i+131072);var X=i+me;if(i<V){var he=c-V,Fe=Math.min(V,X);for(he+i<0&&k(3);i<Fe;++i)n[i]=r[he+i]}for(;i<X;i+=4)n[i]=n[i-V],n[i+1]=n[i+1-V],n[i+2]=n[i+2-V],n[i+3]=n[i+3-V];i=X}}t.l=m,t.p=Y,t.b=i,t.f=a,m&&(a=1,t.m=y,t.d=p,t.n=b)}while(!a);return i==n.length?n:ue(n,0,i)},lt=new _(0),at=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&k(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&k(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function it(e,t){return st(e.subarray(at(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Pe=typeof TextEncoder<"u"&&new TextEncoder,ae=typeof TextDecoder<"u"&&new TextDecoder,ct=0;try{ae.decode(lt,{stream:!0}),ct=1}catch{}var ut=function(e){for(var t="",n=0;;){var r=e[n++],o=(r>127)+(r>223)+(r>239);if(n+o>e.length)return{s:t,r:ue(e,n-1)};o?o==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):o&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function pt(e,t){if(t){for(var n=new _(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Pe)return Pe.encode(e);for(var o=e.length,c=new _(e.length+(e.length>>1)),u=0,s=function(l){c[u++]=l},r=0;r<o;++r){if(u+5>c.length){var f=new _(u+8+(o-r<<1));f.set(c),c=f}var a=e.charCodeAt(r);a<128||t?s(a):a<2048?(s(192|a>>6),s(128|a&63)):a>55295&&a<57344?(a=65536+(a&1047552)|e.charCodeAt(++r)&1023,s(240|a>>18),s(128|a>>12&63),s(128|a>>6&63),s(128|a&63)):(s(224|a>>12),s(128|a>>6&63),s(128|a&63))}return ue(c,0,u)}function dt(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(ae)return ae.decode(e);var o=ut(e),c=o.s,n=o.r;return n.length&&k(8),c}}function ft(e){const t=atob(e);if(t.startsWith("xÚ")){const n=pt(t,!0),r=it(n);return dt(r)}return decodeURIComponent(escape(t))}const $="https://unpkg.com",B="src/PlaygroundMain.vue",vt="src/App.vue",A="src/plus-pro-components.js",mt=ce({__name:"App",setup(e){const t=()=>{document.documentElement.style.setProperty("--vh",window.innerHeight+"px")};window.addEventListener("resize",t),t();const n=z(!1),r=z(!1);let o=location.hash.slice(1);o.startsWith("__DEV__")&&(o=o.slice(7),n.value=!0),o.startsWith("__SSR__")&&(o=o.slice(7),r.value=!0);const c=$+"/@vue/runtime-dom/dist/runtime-dom.esm-browser.js",u=$+"/@vue/server-renderer/dist/server-renderer.esm-browser.js",s=new qe({serializedState:o,defaultVueRuntimeURL:c,defaultVueServerRendererURL:u});s.setImportMap({imports:{...s.getImportMap().imports,"element-plus":$+"/element-plus/dist/index.full.mjs","plus-pro-components":$+"/plus-pro-components/index.mjs","@element-plus/icons-vue":$+"/@element-plus/icons-vue/dist/index.js","lodash-es":$+"/lodash-es@4.17.21/lodash.js"}});let f=Jn;if(location.hash.slice(1)){const h=ft(location.hash.slice(1));f=JSON.parse(h)["App.vue"]}s.setFiles({...s.getFiles(),[vt]:f,[B]:Wn,[A]:te}).then(()=>{s.state.mainFile=B,s.state.files[B].hidden=!0,s.state.files[A].hidden=!0});const a={script:{inlineTemplate:!n.value,isProd:!n.value,reactivityTransform:!0,defineModel:!0},style:{isProd:!n.value},template:{isProd:!n.value}};We(()=>{const h=s.serialize().replace(/^#/,r.value?"#__SSR__":"#").replace(/^#/,n.value?"#__DEV__":"#");history.replaceState({},"",h)});function l(){const h=n.value=!n.value;a.script.inlineTemplate=a.script.isProd=a.template.isProd=a.style.isProd=!h,s.setFiles(s.getFiles())}function i(){r.value=!r.value,s.setFiles(s.getFiles())}const m=z("dark");function p(h){m.value=h?"dark":"light"}const y=(h="latest")=>{const g=$+`/plus-pro-components@${h}`,w=g+"/index.css",L=te.replace($+"/plus-pro-components/index.css",w),M=new Ve(A,L,!1);s.state.files[A]=M,ke(s,M).then(F=>s.state.errors=F),s.setImportMap({imports:{...s.getImportMap().imports,"plus-pro-components":g+"/index.mjs"}}),s.state.files[B].hidden=!0,s.state.files[A].hidden=!0;const R=`${location.origin}${location.pathname}#${s.serialize()}`;history.replaceState({},"",R)},b=(h="latest")=>{const g=$+`/element-plus@${h}`,w=g+"/dist/index.css",L=te.replace($+"/element-plus/dist/index.css",w),M=new Ve(A,L,!1);s.state.files[A]=M,ke(s,M).then(F=>s.state.errors=F),s.setImportMap({imports:{...s.getImportMap().imports,"element-plus":g+"/dist/index.full.mjs"}}),s.state.files[B].hidden=!0,s.state.files[A].hidden=!0;const R=`${location.origin}${location.pathname}#${s.serialize()}`;history.replaceState({},"",R)};return xe(()=>{const h=document.documentElement.classList;p(h.contains("dark"))}),(h,g)=>(x(),S(Se,null,[E(qn,{store:O(s),dev:n.value,ssr:r.value,onToggleTheme:p,onToggleDev:l,onToggleSsr:i,onChangePPCVersion:y,onChangeElVersion:b},null,8,["store","dev","ssr"]),E(O(Ye),{theme:m.value,editor:O(Je),ssr:r.value,store:O(s),"show-compile-output":!0,"auto-resize":!0,"sfc-options":a,"clear-console":!1,onKeydown:[g[0]||(g[0]=Ce(se(()=>{},["ctrl","prevent"]),["s"])),g[1]||(g[1]=Ce(se(()=>{},["meta","prevent"]),["s"]))]},null,8,["theme","editor","ssr","store"])],64))}});const ht=T(mt,[["__file","App.vue"]]);window.VUE_DEVTOOLS_CONFIG={defaultSelectedAppId:"repl"};Ze(ht).mount("#app");
