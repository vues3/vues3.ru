const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SingleView-osSx1Tbk.js","assets/unocss-Sc4JooVO.js","assets/ofetch-C2qHvINx.js","assets/destr-CVtkxrq9.js","assets/ufo-CsG24Xhf.js","assets/magic-string-Ci9uVji-.js","assets/jridgewell-BQ5JxrZg.js","assets/ajv-B9jPN_u1.js","assets/fast-deep-equal-DhA4GXGS.js","assets/json-schema-traverse-DW8_mBst.js","assets/fast-uri-WMTOr92D.js","assets/unocss-DVpSmXhq.css","assets/ajv-keywords-C7uUwL6G.js","assets/uuid-random-BBDbE0jX.js","assets/iconify-DZNnka9g.js","assets/unhead-DyRpM8pl.js","assets/hookable-B8xFkYCm.js","assets/vue-router-DgSFFxGk.js","assets/vue-Cow_pXkh.js","assets/vueuse-B28Glbfg.js","assets/vue3-sfc-loader-DxcuOqa0.js","assets/MultiView-HiMYTtkN.js","assets/NotFoundView-BgtocM-T.js"])))=>i.map(i=>d[i]);
import{p as se,a as re,b as ie,c as ae,i as ce,_ as A}from"./unocss-Sc4JooVO.js";import{A as le}from"./ajv-B9jPN_u1.js";import{d as z}from"./ajv-keywords-C7uUwL6G.js";import{u as pe}from"./uuid-random-BBDbE0jX.js";import*as G from"vue";import{reactive as ue,watch as C,computed as _,defineComponent as de,ref as I,resolveComponent as me,openBlock as D,createBlock as O,withCtx as fe,resolveDynamicComponent as ge,createApp as ye,nextTick as he,readonly as J}from"vue";import{i as k,g as L,l as T}from"./iconify-DZNnka9g.js";import{u as B,a as F,c as ve}from"./unhead-DyRpM8pl.js";import{u as W,c as $e,a as we}from"./vue-router-DgSFFxGk.js";import{u as be}from"./vueuse-B28Glbfg.js";import{i as _e}from"./vue3-sfc-loader-DxcuOqa0.js";import"./ofetch-C2qHvINx.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-Ci9uVji-.js";import"./jridgewell-BQ5JxrZg.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const ao=!0,je=!0,Pe=!0,xe=!0,Se=!0,M=!0,Ae="no-cache",Ce="smooth",Ee=0,Re=0,co=.1,Ie=async e=>(await fetch(e)).text(),De="urn:jsonschema:component",Oe=!1,ke={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Le="object",Te={$id:De,additionalProperties:Oe,properties:ke,type:Le},Be="urn:jsonschema:config",Fe=!1,We={expanded:{default:[],items:{type:"string"},type:"array"},selected:{type:"string"},tab:{default:"wysiwyg",enum:["wysiwyg","template","script","style"],type:"string"}},Me="object",Ue={$id:Be,additionalProperties:Fe,properties:We,type:Me},He="urn:jsonschema:credentials",U=!0,Ke={properties:{accessKeyId:{default:null,nullable:U,type:"string"},Bucket:{default:"",type:"string"},endpoint:{default:"",type:"string"},region:{default:"",type:"string"},secretAccessKey:{default:null,nullable:U,type:"string"}},type:"object"},Ne="object",Ve={$id:He,additionalProperties:Ke,type:Ne},qe="urn:jsonschema:data",ze={$ref:"urn:jsonschema:page"},Ge="array",Je={$id:qe,items:ze,type:Ge},Qe="urn:jsonschema:importmap",Xe=!1,Ye={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Ze="object",et={$id:Qe,additionalProperties:Xe,properties:Ye,type:Ze},tt="urn:jsonschema:page",ot=!1,f=!0,nt="uuid",st={id:nt},rt={default:[],items:{$ref:"#"},type:"array"},it={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:f,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:f,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:f,type:"string"},icon:{default:null,nullable:f,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:f,type:"string"},loc:{default:null,nullable:f,type:"string"},name:{default:null,nullable:f,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:f,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:f,type:"string"}},at="object",ct={$id:tt,additionalProperties:ot,dynamicDefaults:st,properties:{children:rt,...it},type:at};z.DEFAULTS.uuid=()=>()=>pe();const lt={esm:Se},pt=[Ue,Ve,ct,Je,Te,et],ut=[z()],$=new le({code:lt,coerceTypes:Pe,keywords:ut,removeAdditional:xe,schemas:pt,useDefaults:je});$.getSchema("urn:jsonschema:page");$.getSchema("urn:jsonschema:config");const dt=$.getSchema("urn:jsonschema:component");$.getSchema("urn:jsonschema:credentials");const mt=$.getSchema("urn:jsonschema:data");$.getSchema("urn:jsonschema:importmap");const j=ue([]);{const e={get(){return j[0]}},t={get(){return this.siblings.findIndex(({id:a})=>this.id===a)}},s={get(){return this.siblings[this.index-1]}},o={get(){return this.siblings[this.index+1]}},n={get(){return this.children?.filter(({enabled:a})=>a)}},r={get(){return this.siblings.filter(({enabled:a})=>a)}},i={get(){return this.$siblings.findIndex(({id:a})=>this.id===a)}},c={get(){return this.$siblings[this.$index-1]}},l={get(){return this.$siblings[this.$index+1]}},m={get(){const a=[this];for(;a[0].parent;)a.unshift(a[0].parent);return a}},u={get(){return this.branch.slice(1).map(({name:a})=>a??"-").join("/").replaceAll(" ","_")}},h={get(){return(this.loc?.replaceAll(" ","_")??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},P={get(){return this.icon&&`i-${this.icon}`}},x={get(){return this.header??this.name}},b=(a,p={value:void 0})=>{a.value.forEach(d=>{Object.defineProperties(d,{$children:n,$index:i,$next:l,$prev:c,$siblings:r,branch:m,i:P,index:t,next:o,parent:p,path:u,prev:s,root:e,siblings:a,title:x,to:h}),b({configurable:M,value:d.children??[]},{configurable:M,value:d})})};C(j,a=>{mt(a),b({value:a})})}const Q=e=>e.flatMap(t=>[t,...Q(t.children??[])]),g=_(()=>Q(j)),ft=e=>Object.fromEntries(e.map(t=>[t.toLowerCase().replaceAll(" ","_"),t])),gt="https://unpkg.com/",yt=[se(),re(),ie({cdn:gt})],H={presets:yt},ht=de({__name:"App",setup(e,{expose:t}){t();const s=W(),o=_(()=>g.value.find(({id:p})=>p===s.name)),n=_(()=>o.value?.to===void 0?void 0:`${window.location.origin}${o.value.to==="/"?"":o.value.to}`),r=()=>o.value?.images.map(({alt:p,url:d})=>({alt:p,url:d?`${window.location.origin}${d}`:""})),i=I(),c=[[i,"icon","icon"],[n,"canonical"]].map(([p,d,S])=>({href:p,key:S,rel:d}));B({link:c});const l=()=>o.value?.title??"",m=()=>o.value?.title??"",u=()=>o.value?.description??"",h=()=>o.value?.description??"",P=()=>o.value?.type,x=n,b=()=>o.value?.keywords.join();F({description:u,keywords:b,ogDescription:h,ogImage:r,ogTitle:m,ogType:P,ogUrl:x,title:l}),C(o,async p=>{let d="/favicon.ico";if(p?.icon){const S=k(p?.icon)?L(p?.icon):await T(p?.icon);if(S){const{body:Z,height:ee,left:te,top:oe,width:ne}=S;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${te.toString()} ${oe.toString()} ${ne.toString()} ${ee.toString()}">${Z}</svg>`}}i.value=d});const a={route:s,a:o,canonical:n,ogImage:r,favicon:i,link:c,title:l,ogTitle:m,description:u,ogDescription:h,ogType:P,ogUrl:x,keywords:b,get getIcon(){return L},get iconExists(){return k},get loadIcon(){return T},get useHead(){return B},get useSeoMeta(){return F},get pages(){return g},computed:_,ref:I,watch:C,get useRoute(){return W}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function vt(e,t,s,o,n,r){const i=me("router-view");return D(),O(i,null,{default:fe(({Component:c})=>[(D(),O(ge(c),{id:o.pages[0].id},null,8,["id"]))]),_:1})}const $t=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s},wt=$t(ht,[["render",vt],["__file","App.vue"]]),{computed:w,defineAsyncComponent:bt,markRaw:_t,ref:X}=G,jt={vue:G},Pt=(e,t)=>{const{refPath:s}=e,{getPathname:o,pathResolve:n}=t,r=n(e,t),i=r.toString(),c=o(i).split(".").pop()??"",l=c&&`.${c}`;return{getContent:async()=>{if(s&&!(i.startsWith("./")||i.startsWith("../")||i.startsWith("/")&&!i.startsWith("//")))return l===".css"?{type:l}:{getContentData:()=>import(i)};const u=await t.getFile(r);return typeof u=="string"||u instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(u),type:l}:u},id:i,path:r}},xt=async(e,t,s,o)=>{switch(e){case".css":return o.addStyle(await(await fetch(s)).text(),void 0),null;case void 0:return t(!1);default:return}},St=(e,...t)=>{window.console[e](...t.map(s=>decodeURIComponent(s)))},At=(e,t)=>{be(e,{id:t})},lo=({path:e,scoped:t,setup:s,sfc:o})=>{const n=async()=>{const{script:r,style:i,template:c}=await o,l=r&&`<script${s?" setup":""}>${r}<\/script>`,m=c&&`<template>${c}</template>`,u=i&&`<style${t?" scoped":""}>${i}</style>`;return`${l}${m}${u}`};return bt(async()=>_e(`${g.value[0].name??""}${e&&"/"}${e}.vue`,{addStyle:At,getFile:n,getResource:Pt,handleModule:xt,log:St,moduleCache:jt}))},Ct={async get(){if(!this.buffer){const e=await fetch(`/pages/${this.id??""}.json`,{cache:Ae}),t=_t(e.ok?await e.json():{});dt(t),Reflect.defineProperty(this,"buffer",{value:t})}return this.buffer}},Et=$e("/"),Rt=[],K=X(!0);let E;const It=(e,t,s)=>E&&E(e,t,s),y=we({history:Et,routes:Rt,scrollBehavior:It});y.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const N=w(()=>g.value.find(({id:e})=>e===y.currentRoute.value.name)),Y=e=>{e.forEach(t=>{Object.defineProperties(t,{sfc:Ct}),t.children&&Y(t.children)})},v=w(()=>y.currentRoute.value.path==="/"?N.value?.children?.[0]:N.value),Dt=w(()=>v.value?.siblings??[]),Ot=w(()=>Dt.value.filter(({enabled:e})=>e)),kt=()=>{let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),reject:t,resolve:e}},Lt=w(()=>!v.value||v.value.parent?.along),R=w(()=>Object.fromEntries([...Lt.value?Ot.value:[v.value],g.value[0]].map(({id:e})=>[e,kt()]))),V=X(!0),Tt=({extractAll:e,toggleObserver:t})=>{const s=async()=>{console.log(1),V.value=!0,console.log(2),t(!1),console.log(3,Object.values(R.value).map(({promise:o})=>o)),await Promise.all(Object.values(R.value).map(({promise:o})=>o)),console.log(4),await e(),console.log(5),t(!0),console.log(6),V.value=!1};return E=async({name:o})=>new Promise(n=>{o?s().then(()=>{const r=`#${String(o)}`;n(K.value&&{behavior:Ce,...v.value?.parent?.along&&v.value.index?{el:r}:{left:Re,top:Ee}}),K.value=!0},()=>{n(!1)}):n(!1)}),t(!0),!1},po=({id:e}={})=>{R.value[e]?.resolve(void 0)};(async()=>{const e=await fetch("/fonts.json"),t=ft(e.ok?await e.json():[]);H.presets.push(ae({customFetch:Ie,fonts:t})),ce({defaults:H,ready:Tt,rootElement:()=>document.getElementById("app")})})().catch(()=>{});window.console.info("⛵","vueS3","ver:3.27.2","https://vues3.com");const q=await fetch("/index.json");j.push(q.ok?(await q.json())[0]:{});Y(j);window.app=ye(wt);window.app.use(ve());await he();window.app.provide("pages",J(Object.fromEntries(g.value.map(e=>[e.id,e]))));{const e=(s,o,n)=>[{component:s,name:o,path:n}],t=()=>A(()=>import("./SingleView-osSx1Tbk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));g.value.forEach(({along:s,id:o,loc:n,parent:r,path:i})=>{const c=(n?.replaceAll(" ","_")??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),l=e(r?.along??s?()=>A(()=>import("./MultiView-HiMYTtkN.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20])):t,o,""),m=i.replace(/^\/?/,"/").replace(/\/?$/,"/");y.addRoute({path:m,...n&&{alias:c},children:l,component:t})})}const Bt="/:pathMatch(.*)*",Ft=()=>A(()=>import("./NotFoundView-BgtocM-T.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20])),Wt="404";y.addRoute({component:Ft,name:Wt,path:Bt});const Mt=_(()=>y.currentRoute.value.name);window.app.provide("id",J(Mt));window.app.use(y);window.app.mount("#app");export{Ot as $,$t as _,co as a,Ce as b,ao as d,lo as g,V as p,po as r,K as s,v as t};
