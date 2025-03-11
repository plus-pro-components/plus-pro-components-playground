import{_ as Fe,F as Re,o as P,c as V,a as ie,b as v,d as ae,m as Ie,r as A,u as De,e as Pe,f as Oe,t as q,n as we,g as Ue,h as Ve,i as Ne,j as He,w as re,k as x,l as M,p as Be,R as Ge,q as Ke,s as ye,v as qe,x as We,y as Je,z as Ye,A as Ze}from"./vendor-91e629a3.js";import"./__commonjsHelpers__-6f6aee75.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Qe="/logo.png",Xe=`<!DOCTYPE html>\r
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
`;async function on(e){if(!confirm("Download project files?"))return;const{default:t}=await Fe(()=>import("./jszip.min-026bf99e.js").then(u=>u.j),["assets/jszip.min-026bf99e.js","assets/__commonjsHelpers__-6f6aee75.js","assets/vendor-91e629a3.js"]),n=new t;n.file("index.html",Xe),n.file("package.json",nn),n.file("vite.config.js",tn),n.file("README.md",rn);const r=n.folder("src");r.file("main.js",en);const o=e.getFiles();for(const u in o)u!=="import-map.json"?r.file(u,o[u]):n.file(u,o[u]);const c=await n.generateAsync({type:"blob"});Re.saveAs(c,"vue-project.zip")}const E=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},sn={},an={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ln=ie('<path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),cn=[ln];function un(e,t){return P(),V("svg",an,cn)}const pn=E(sn,[["render",un],["__file","Sun.vue"]]),fn={},dn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},vn=v("path",{fill:"currentColor",d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),mn=[vn];function hn(e,t){return P(),V("svg",dn,mn)}const gn=E(fn,[["render",hn],["__file","Moon.vue"]]),_n={},wn={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},yn=ie('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),Cn=[yn];function kn(e,t){return P(),V("svg",wn,Cn)}const Pn=E(_n,[["render",kn],["__file","Share.vue"]]),Vn={},Sn={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24",fill:"currentColor"},xn=ie('<g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g>',1),bn=[xn];function $n(e,t){return P(),V("svg",Sn,bn)}const Mn=E(Vn,[["render",$n],["__file","Download.vue"]]),En={},jn={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24",fill:"currentColor"},An=v("path",{d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1),zn=[An];function Tn(e,t){return P(),V("svg",jn,zn)}const Ln=E(En,[["render",Tn],["__file","GitHub.vue"]]),Fn={class:"number"},Rn={key:0},In=v("a",null,"loading versions...",-1),Dn=[In],On=["onClick"],Un=ae({__name:"VersionSelect",props:Ie({pkg:{},label:{}},{modelValue:{}}),emits:["update:modelValue"],setup(e){const t=e,n=A(!1),r=A(),o=De(e,"modelValue");async function c(){n.value=!n.value,r.value||(r.value=await u())}async function u(){const f=await fetch(`https://data.jsdelivr.com/v1/package/npm/${t.pkg}`),{versions:l}=await f.json();if(t.pkg==="vue"){let s=l[0].includes("-");const i=[];for(const d of l)if(d.includes("-")?s&&i.push(d):(i.push(d),s=!1),i.length>=30||d==="3.0.10")break;return i}else{if(t.pkg==="typescript")return l.filter(s=>!s.includes("dev")&&!s.includes("insiders"));if(t.pkg==="plus-pro-components")return l.filter(s=>!s.includes("alpha"))}return l}function a(f){o.value=f,n.value=!1}return Pe(()=>{window.addEventListener("click",()=>{n.value=!1}),window.addEventListener("blur",()=>{var f;((f=document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&(n.value=!1)})}),(f,l)=>(P(),V("div",{class:"version",onClick:l[1]||(l[1]=re(()=>{},["stop"]))},[v("span",{class:we(["active-version",t.pkg]),onClick:c},[Oe(q(f.label)+" ",1),v("span",Fn,q(o.value),1)],2),v("ul",{class:we(["versions",{expanded:n.value}])},[r.value?Ue("",!0):(P(),V("li",Rn,Dn)),(P(!0),V(Ve,null,Ne(r.value,s=>(P(),V("li",{key:s},[v("a",{onClick:i=>a(s)},"v"+q(s),9,On)]))),128)),v("div",{onClick:l[0]||(l[0]=s=>n.value=!1)},[He(f.$slots,"default")])],2)]))}});const X=E(Un,[["__file","VersionSelect.vue"]]),Nn=v("h1",null,[v("img",{alt:"logo",src:Qe}),v("span",null,"PlusProComponents SFC Playground")],-1),Hn={class:"links"},Bn=v("li",null,[v("a",{href:"https://app.netlify.com/sites/vue-sfc-playground/deploys",target:"_blank"},"Commits History")],-1),Gn={href:"https://github.com/plus-pro-components/plus-pro-components-playground",target:"_blank",title:"View on GitHub",class:"github"},ee="latest",Kn=ae({__name:"Header",props:{store:{},dev:{type:Boolean},ssr:{type:Boolean}},emits:["toggle-theme","toggle-ssr","toggle-dev","changePPCVersion"],setup(e,{emit:t}){const n=e,{store:r}=n,o=A(`@${ee}`),c=A("latest");function u(i){t("changePPCVersion",i),r.state.dependencyVersion={"plus-pro-components":i},c.value=i}async function a(i){o.value="loading...",await r.setVueVersion(i),o.value=`v${i}`}function f(){r.resetVueVersion(),o.value=`@${ee}`}async function l(i){if(i.metaKey){window.location.href="http://localhost:5173/"+window.location.hash;return}await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")}function s(){const i=document.documentElement.classList;i.toggle("dark"),localStorage.setItem("vue-sfc-playground-prefer-dark",String(i.contains("dark"))),t("toggle-theme",i.contains("dark"))}return(i,d)=>(P(),V("nav",null,[Nn,v("div",Hn,[x(X,{"model-value":c.value,pkg:"plus-pro-components",label:"PlusProComponents Version","onUpdate:modelValue":u},null,8,["model-value"]),x(X,{modelValue:M(r).state.typescriptVersion,"onUpdate:modelValue":d[0]||(d[0]=S=>M(r).state.typescriptVersion=S),pkg:"typescript",label:"TypeScript Version"},null,8,["modelValue"]),x(X,{"model-value":o.value,pkg:"vue",label:"Vue Version","onUpdate:modelValue":a},{default:Be(()=>[v("li",null,[v("a",{onClick:f},"This Commit ("+q(ee)+")")]),Bn]),_:1},8,["model-value"]),v("button",{title:"Toggle dark mode",class:"toggle-dark",onClick:s},[x(pn,{class:"light"}),x(gn,{class:"dark"})]),v("button",{title:"Copy sharable URL",class:"share",onClick:l},[x(Pn)]),v("button",{title:"Download project files",class:"download",onClick:d[1]||(d[1]=S=>M(on)(M(r)))},[x(Mn)]),v("a",Gn,[x(Ln)])])]))}});const qn=E(Kn,[["__file","Header.vue"]]),Wn=`<script setup>
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
import type { OptionsRow } from 'plus-pro-components'
import { PlusRadio } from 'plus-pro-components'

type State = {
  options: OptionsRow[]
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
`,Ce=`import { getCurrentInstance } from 'vue'
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
    createLink(resolve, reject, \`https://unpkg.com/element-plus@\${version}/dist/index.css\`)
  })
}
`;var h=Uint8Array,F=Uint16Array,Yn=Int32Array,Se=new h([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xe=new h([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zn=new h([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),be=function(e,t){for(var n=new F(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var o=new Yn(n[30]),r=1;r<30;++r)for(var c=n[r];c<n[r+1];++c)o[c]=c-n[r]<<5|r;return{b:n,r:o}},$e=be(Se,2),Me=$e.b,Qn=$e.r;Me[28]=258,Qn[258]=28;var Xn=be(xe,0),et=Xn.b,oe=new F(32768);for(var p=0;p<32768;++p){var b=(p&43690)>>1|(p&21845)<<1;b=(b&52428)>>2|(b&13107)<<2,b=(b&61680)>>4|(b&3855)<<4,oe[p]=((b&65280)>>8|(b&255)<<8)>>1}var H=function(e,t,n){for(var r=e.length,o=0,c=new F(t);o<r;++o)e[o]&&++c[e[o]-1];var u=new F(t);for(o=1;o<t;++o)u[o]=u[o-1]+c[o-1]<<1;var a;if(n){a=new F(1<<t);var f=15-t;for(o=0;o<r;++o)if(e[o])for(var l=o<<4|e[o],s=t-e[o],i=u[e[o]-1]++<<s,d=i|(1<<s)-1;i<=d;++i)a[oe[i]>>f]=l}else for(a=new F(r),o=0;o<r;++o)e[o]&&(a[o]=oe[u[e[o]-1]++]>>15-e[o]);return a},B=new h(288);for(var p=0;p<144;++p)B[p]=8;for(var p=144;p<256;++p)B[p]=9;for(var p=256;p<280;++p)B[p]=7;for(var p=280;p<288;++p)B[p]=8;var Ee=new h(32);for(var p=0;p<32;++p)Ee[p]=5;var nt=H(B,9,1),tt=H(Ee,5,1),ne=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},k=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},te=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},rt=function(e){return(e+7)/8|0},le=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new h(n-t);return r.set(e.subarray(t,n)),r},ot=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,t,n){var r=new Error(t||ot[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,y),!n)throw r;return r},st=function(e,t,n,r){var o=e.length,c=r?r.length:0;if(!o||t.f&&!t.l)return n||new h(0);var u=!n||t.i!=2,a=t.i;n||(n=new h(o*3));var f=function(he){var ge=n.length;if(he>ge){var _e=new h(Math.max(ge*2,he));_e.set(n),n=_e}},l=t.f||0,s=t.p||0,i=t.b||0,d=t.l,S=t.d,j=t.m,m=t.n,g=o*8;do{if(!d){l=k(e,s,1);var R=k(e,s+1,3);if(s+=3,R)if(R==1)d=nt,S=tt,j=9,m=5;else if(R==2){var D=k(e,s,31)+257,ce=k(e,s+10,15)+4,ue=D+k(e,s+5,31)+1;s+=14;for(var O=new h(ue),W=new h(19),w=0;w<ce;++w)W[Zn[w]]=k(e,s+w*3,7);s+=ce*3;for(var pe=ne(W),je=(1<<pe)-1,Ae=H(W,pe,1),w=0;w<ue;){var fe=Ae[k(e,s,je)];s+=fe&15;var _=fe>>4;if(_<16)O[w++]=_;else{var T=0,G=0;for(_==16?(G=3+k(e,s,3),s+=2,T=O[w-1]):_==17?(G=3+k(e,s,7),s+=3):_==18&&(G=11+k(e,s,127),s+=7);G--;)O[w++]=T}}var de=O.subarray(0,D),C=O.subarray(D);j=ne(de),m=ne(C),d=H(de,j,1),S=H(C,m,1)}else y(1);else{var _=rt(s)+4,z=e[_-4]|e[_-3]<<8,I=_+z;if(I>o){a&&y(0);break}u&&f(i+z),n.set(e.subarray(_,I),i),t.b=i+=z,t.p=s=I*8,t.f=l;continue}if(s>g){a&&y(0);break}}u&&f(i+131072);for(var ze=(1<<j)-1,Te=(1<<m)-1,J=s;;J=s){var T=d[te(e,s)&ze],L=T>>4;if(s+=T&15,s>g){a&&y(0);break}if(T||y(2),L<256)n[i++]=L;else if(L==256){J=s,d=null;break}else{var ve=L-254;if(L>264){var w=L-257,U=Se[w];ve=k(e,s,(1<<U)-1)+Me[w],s+=U}var Y=S[te(e,s)&Te],Z=Y>>4;Y||y(3),s+=Y&15;var C=et[Z];if(Z>3){var U=xe[Z];C+=te(e,s)&(1<<U)-1,s+=U}if(s>g){a&&y(0);break}u&&f(i+131072);var Q=i+ve;if(i<C){var me=c-C,Le=Math.min(C,Q);for(me+i<0&&y(3);i<Le;++i)n[i]=r[me+i]}for(;i<Q;i+=4)n[i]=n[i-C],n[i+1]=n[i+1-C],n[i+2]=n[i+2-C],n[i+3]=n[i+3-C];i=Q}}t.l=d,t.p=J,t.b=i,t.f=l,d&&(l=1,t.m=j,t.d=S,t.n=m)}while(!l);return i==n.length?n:le(n,0,i)},it=new h(0),at=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&y(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&y(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function lt(e,t){return st(e.subarray(at(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var ke=typeof TextEncoder<"u"&&new TextEncoder,se=typeof TextDecoder<"u"&&new TextDecoder,ct=0;try{se.decode(it,{stream:!0}),ct=1}catch{}var ut=function(e){for(var t="",n=0;;){var r=e[n++],o=(r>127)+(r>223)+(r>239);if(n+o>e.length)return{s:t,r:le(e,n-1)};o?o==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):o&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function pt(e,t){if(t){for(var n=new h(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(ke)return ke.encode(e);for(var o=e.length,c=new h(e.length+(e.length>>1)),u=0,a=function(s){c[u++]=s},r=0;r<o;++r){if(u+5>c.length){var f=new h(u+8+(o-r<<1));f.set(c),c=f}var l=e.charCodeAt(r);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return le(c,0,u)}function ft(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(se)return se.decode(e);var o=ut(e),c=o.s,n=o.r;return n.length&&y(8),c}}function dt(e){const t=atob(e);if(t.startsWith("xÚ")){const n=pt(t,!0),r=lt(n);return ft(r)}return decodeURIComponent(escape(t))}const $="https://unpkg.com",K="src/PlaygroundMain.vue",vt="src/App.vue",N="src/plus-pro-components.js",mt="2.3.4",ht=ae({__name:"App",setup(e){const t=()=>{document.documentElement.style.setProperty("--vh",window.innerHeight+"px")};window.addEventListener("resize",t),t();const n=A(!1),r=A(!1);let o=location.hash.slice(1);o.startsWith("__DEV__")&&(o=o.slice(7),n.value=!0),o.startsWith("__SSR__")&&(o=o.slice(7),r.value=!0);const c=$+"/@vue/runtime-dom/dist/runtime-dom.esm-browser.js",u=$+"/@vue/server-renderer/dist/server-renderer.esm-browser.js",a=new Ge({serializedState:o,defaultVueRuntimeURL:c,defaultVueServerRendererURL:u});a.setImportMap({imports:{...a.getImportMap().imports,"element-plus":$+`/element-plus@${mt}/dist/index.full.mjs`,"plus-pro-components":$+"/plus-pro-components/index.mjs","@element-plus/icons-vue":$+"/@element-plus/icons-vue/dist/index.js","lodash-es":$+"/lodash-es@4.17.21/lodash.js"}});let f=Jn;if(location.hash.slice(1)){const m=dt(location.hash.slice(1));f=JSON.parse(m)["App.vue"]}a.setFiles({...a.getFiles(),[vt]:f,[K]:Wn,[N]:Ce}).then(()=>{a.state.mainFile=K,a.state.files[K].hidden=!0,a.state.files[N].hidden=!0});const l={script:{inlineTemplate:!n.value,isProd:!n.value,reactivityTransform:!0,defineModel:!0},style:{isProd:!n.value},template:{isProd:!n.value}};Ke(()=>{const m=a.serialize().replace(/^#/,r.value?"#__SSR__":"#").replace(/^#/,n.value?"#__DEV__":"#");history.replaceState({},"",m)});function s(){const m=n.value=!n.value;l.script.inlineTemplate=l.script.isProd=l.template.isProd=l.style.isProd=!m,a.setFiles(a.getFiles())}function i(){r.value=!r.value,a.setFiles(a.getFiles())}const d=A("dark");function S(m){d.value=m?"dark":"light"}const j=(m="latest")=>{const g=$+`/plus-pro-components@${m}`,R=g+"/index.css",_=Ce.replace($+"/plus-pro-components/index.css",R),z=new Ye(N,_,!1);a.state.files[N]=z,qe(a,z).then(D=>a.state.errors=D),a.setImportMap({imports:{...a.getImportMap().imports,"plus-pro-components":g+"/index.mjs"}}),a.state.files[K].hidden=!0,a.state.files[N].hidden=!0;const I=`${location.origin}${location.pathname}#${a.serialize()}`;history.replaceState({},"",I)};return Pe(()=>{const m=document.documentElement.classList;S(m.contains("dark"))}),(m,g)=>(P(),V(Ve,null,[x(qn,{store:M(a),dev:n.value,ssr:r.value,onToggleTheme:S,onToggleDev:s,onToggleSsr:i,onChangePPCVersion:j},null,8,["store","dev","ssr"]),x(M(Je),{theme:d.value,editor:M(We),ssr:r.value,store:M(a),"show-compile-output":!0,"auto-resize":!0,"sfc-options":l,"clear-console":!1,onKeydown:[g[0]||(g[0]=ye(re(()=>{},["ctrl","prevent"]),["s"])),g[1]||(g[1]=ye(re(()=>{},["meta","prevent"]),["s"]))]},null,8,["theme","editor","ssr","store"])],64))}});const gt=E(ht,[["__file","App.vue"]]);window.VUE_DEVTOOLS_CONFIG={defaultSelectedAppId:"repl"};Ze(gt).mount("#app");
