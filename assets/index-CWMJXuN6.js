const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SingleView-CGgNRmxR.js","./unocss-Dac0g9vD.js","./ofetch-DfaEl5Lr.js","./destr-CVtkxrq9.js","./ufo-CsG24Xhf.js","./magic-string-l2mojYcN.js","./jridgewell-CS0TOL6_.js","./ajv-DVT_ztRr.js","./fast-deep-equal-DhA4GXGS.js","./json-schema-traverse-DW8_mBst.js","./fast-uri-DiSllsZr.js","./unocss-DaoZmw1x.css","./ajv-keywords-fgJOexQU.js","./uuid-random-C5LgB_p5.js","./iconify-DZNnka9g.js","./unhead-CEwDqR4t.js","./hookable-B8xFkYCm.js","./vue-router-DgSFFxGk.js","./vue-Cow_pXkh.js","./vueuse-Bs6x0GOr.js","./vue3-sfc-loader-CoUr1SK8.js","./MultiView-1l4WX1lC.js","./NotFoundView-B5wWPxwx.js"])))=>i.map(i=>d[i]);
import{p as st,a as rt,b as it,c as at,d as ct,_ as A,e as lt,i as pt}from"./unocss-Dac0g9vD.js";import{A as ut}from"./ajv-DVT_ztRr.js";import{d as q}from"./ajv-keywords-fgJOexQU.js";import{u as dt}from"./uuid-random-C5LgB_p5.js";import*as z from"vue";import{reactive as mt,watch as I,computed as j,defineComponent as ft,ref as D,resolveComponent as gt,openBlock as O,createBlock as k,withCtx as yt,resolveDynamicComponent as ht,createApp as $t,readonly as G,nextTick as vt}from"vue";import{i as L,g as T,l as U}from"./iconify-DZNnka9g.js";import{u as B,a as F,c as wt}from"./unhead-CEwDqR4t.js";import{u as M,c as bt,a as _t}from"./vue-router-DgSFFxGk.js";import{u as jt}from"./vueuse-Bs6x0GOr.js";import{i as Pt}from"./vue3-sfc-loader-CoUr1SK8.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-l2mojYcN.js";import"./jridgewell-CS0TOL6_.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}})();const oo=!0,xt=!0,St=!0,Rt=!0,At=!0,W=!0,It="no-cache",Ct="smooth",Et=0,Dt=0,no=.1,Ot=async t=>(await fetch(t)).text(),kt="urn:jsonschema:component",Lt=!1,Tt={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Ut="object",Bt={$id:kt,additionalProperties:Lt,properties:Tt,type:Ut},Ft="urn:jsonschema:credentials",w=!0,Mt={properties:{accessKeyId:{default:null,nullable:w,type:"string"},Bucket:{default:null,nullable:w,type:"string"},domain:{default:null,nullable:w,type:"string"},endpoint:{default:null,nullable:w,type:"string"},region:{default:null,nullable:w,type:"string"},secretAccessKey:{default:null,nullable:w,type:"string"}},type:"object"},Wt="object",Ht={$id:Ft,additionalProperties:Mt,type:Wt},Kt="urn:jsonschema:data",Nt={$ref:"urn:jsonschema:page"},Vt="array",qt={$id:Kt,items:Nt,type:Vt},zt="urn:jsonschema:importmap",Gt=!1,Jt={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Qt="object",Xt={$id:zt,additionalProperties:Gt,properties:Jt,type:Qt},Yt="urn:jsonschema:page",Zt=!1,g=!0,te="uuid",ee={id:te},oe={default:[],items:{$ref:"#"},type:"array"},ne={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:g,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:g,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:g,type:"string"},icon:{default:null,nullable:g,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:g,type:"string"},loc:{default:null,nullable:g,type:"string"},name:{default:null,nullable:g,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:g,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:g,type:"string"}},se="object",re={$id:Yt,additionalProperties:Zt,dynamicDefaults:ee,properties:{children:oe,...ne},type:se};q.DEFAULTS.uuid=()=>()=>dt();const ie={esm:At},ae=[Ht,re,qt,Bt,Xt],ce=[q()],x=new ut({code:ie,coerceTypes:St,keywords:ce,removeAdditional:Rt,schemas:ae,useDefaults:xt});x.getSchema("urn:jsonschema:page");const le=x.getSchema("urn:jsonschema:component");x.getSchema("urn:jsonschema:credentials");const pe=x.getSchema("urn:jsonschema:data");x.getSchema("urn:jsonschema:importmap");const P=mt([]);{const t={get(){return P[0]}},e={get(){return this.siblings.findIndex(({id:a})=>this.id===a)}},c={get(){return this.siblings[this.index-1]}},s={get(){return this.siblings[this.index+1]}},n={get(){var a;return(a=this.children)==null?void 0:a.filter(({enabled:o})=>o)}},i={get(){return this.siblings.filter(({enabled:a})=>a)}},r={get(){return this.$siblings.findIndex(({id:a})=>this.id===a)}},l={get(){return this.$siblings[this.$index-1]}},p={get(){return this.$siblings[this.$index+1]}},m={get(){const a=[this];for(;a[0].parent;)a.unshift(a[0].parent);return a}},u={get(){return this.branch.slice(1).map(({name:a})=>a??"-").join("/").replaceAll(" ","_")}},f={get(){var a;return(((a=this.loc)==null?void 0:a.replaceAll(" ","_"))??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},$={get(){return this.icon&&`i-${this.icon}`}},v={get(){return this.header??this.name}},_=(a,o={value:void 0})=>{a.value.forEach(d=>{Object.defineProperties(d,{$children:n,$index:r,$next:p,$prev:l,$siblings:i,branch:m,i:$,index:e,next:s,parent:o,path:u,prev:c,root:t,siblings:a,title:v,to:f}),_({configurable:W,value:d.children??[]},{configurable:W,value:d})})};I(P,a=>{pe(a),_({value:a})})}const J=t=>t.flatMap(e=>[e,...J(e.children??[])]),b=j(()=>J(P)),ue=t=>Object.fromEntries(t.map(e=>[e.toLowerCase().replaceAll(" ","_"),e])),de="https://unpkg.com/",me=[st(),rt(),it({cdn:de}),at(),ct()],H={presets:me},fe=ft({__name:"App",setup(t,{expose:e}){e();const c=M(),s=j(()=>b.value.find(({id:o})=>o===c.name)),n=j(()=>{var o;return((o=s.value)==null?void 0:o.to)===void 0?void 0:`${window.location.origin}${s.value.to==="/"?"":s.value.to}`}),i=()=>{var o;return(o=s.value)==null?void 0:o.images.filter(({url:d})=>d).map(({alt:d,url:y})=>({alt:d,url:y?`${window.location.origin}${y}`:""}))},r=D(),l=[[r,"icon","icon"],[n,"canonical"]].map(([o,d,y])=>({href:o,key:y,rel:d}));B({link:l});const p=()=>{var o;return((o=s.value)==null?void 0:o.title)??""},m=()=>{var o;return(o=s.value)==null?void 0:o.title},u=()=>{var o;return(o=s.value)==null?void 0:o.description},f=()=>{var o;return(o=s.value)==null?void 0:o.description},$=()=>{var o;return(o=s.value)==null?void 0:o.type},v=n,_=()=>{var o;return(o=s.value)==null?void 0:o.keywords.join()};F({description:u,keywords:_,ogDescription:f,ogImage:i,ogTitle:m,ogType:$,ogUrl:v,title:p}),I(s,async o=>{let d="/favicon.ico";if(o!=null&&o.icon){const y=L(o==null?void 0:o.icon)?T(o==null?void 0:o.icon):await U(o==null?void 0:o.icon);if(y){const{body:Z,height:tt,left:et,top:ot,width:nt}=y;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${et.toString()} ${ot.toString()} ${nt.toString()} ${tt.toString()}">${Z}</svg>`}}r.value=d});const a={route:c,a:s,canonical:n,ogImage:i,favicon:r,link:l,title:p,ogTitle:m,description:u,ogDescription:f,ogType:$,ogUrl:v,keywords:_,get getIcon(){return T},get iconExists(){return L},get loadIcon(){return U},get useHead(){return B},get useSeoMeta(){return F},get pages(){return b},computed:j,ref:D,watch:I,get useRoute(){return M}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function ge(t,e,c,s,n,i){const r=gt("router-view");return O(),k(r,null,{default:yt(({Component:l})=>[(O(),k(ht(l),{id:s.pages[0].id},null,8,["id"]))]),_:1})}const ye=(t,e)=>{const c=t.__vccOpts||t;for(const[s,n]of e)c[s]=n;return c},he=ye(fe,[["render",ge],["__file","App.vue"]]),{computed:R,defineAsyncComponent:$e,markRaw:ve,ref:Q}=z,S=new Map,we=()=>{let t,e;return{promise:new Promise((s,n)=>{t=s,e=n}),reject:e,resolve:t}},be={vue:z},_e=(t,e)=>{const{refPath:c}=t,{getPathname:s,pathResolve:n}=e,i=n(t,e),r=i.toString(),l=s(r).split(".").pop()??"",p=l&&`.${l}`;return{getContent:async()=>{if(c&&!(r.startsWith("./")||r.startsWith("../")||r.startsWith("/")&&!r.startsWith("//")))return p===".css"?{type:p}:{getContentData:()=>import(r)};const u=await e.getFile(i);return typeof u=="string"||u instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(u),type:p}:u},id:r,path:i}},je=async(t,e,c,s)=>{switch(t){case".css":return s.addStyle(await(await fetch(c)).text(),void 0),null;case void 0:return e(!1);default:return}},Pe=(t,...e)=>{window.console[t](...e.map(c=>decodeURIComponent(c)))},xe=(t,e)=>{jt(t,{id:e})},so=({id:t,path:e,scoped:c,setup:s,sfc:n})=>{S.set(t,we());const i=async()=>{const{script:r,style:l,template:p}=await n,m=r&&`<script${s?" setup":""}>${r}<\/script>`,u=p&&`<template>${p}</template>`,f=l&&`<style${c?" scoped":""}>${l}</style>`;return`${m}${u}${f}`};return $e(async()=>Pt(`${b.value[0].name??""}${e&&"/"}${e}.vue`,{addStyle:xe,getFile:i,getResource:_e,handleModule:je,log:Pe,moduleCache:be}))},Se={async get(){if(!this.buffer){const t=await fetch(`pages/${this.id??""}.json`,{cache:It}),e=ve(t.ok?await t.json():{});le(e),Reflect.defineProperty(this,"buffer",{value:e})}return this.buffer}},{pathname:Re}=new URL(document.baseURI),Ae=bt(Re),Ie=[],K=Q(!0);let C;const Ce=(t,e,c)=>C&&C(t,e,c),h=_t({history:Ae,routes:Ie,scrollBehavior:Ce});h.beforeEach(({path:t})=>t!==decodeURI(t)?decodeURI(t):void 0);const N=R(()=>b.value.find(({id:t})=>t===h.currentRoute.value.name)),X=t=>{t.forEach(e=>{Object.defineProperties(e,{sfc:Se}),e.children&&X(e.children)})},E=R(()=>{var t,e;return h.currentRoute.value.path==="/"?(e=(t=N.value)==null?void 0:t.$children)==null?void 0:e[0]:N.value}),Ee=R(()=>{var t;return((t=E.value)==null?void 0:t.siblings)??[]}),ro=R(()=>Ee.value.filter(({enabled:t})=>t)),V=Q(!0),De=({extractAll:t,toggleObserver:e})=>{const c=async()=>{V.value=!0,e(!1);{const[{promise:s}]=S.values();await s}await Promise.all([...S.values()].map(({promise:s})=>s)),await t(),e(!0),V.value=!1};C=async({name:s})=>new Promise(n=>{s?c().then(()=>{var r,l;const i=`#${String(s)}`;n(K.value&&{behavior:Ct,...(l=(r=E.value)==null?void 0:r.parent)!=null&&l.along&&E.value.index?{el:i}:{left:Dt,top:Et}}),K.value=!0},()=>{n(!1)}):n(!1)})},io=({id:t}={})=>{var e;(e=S.get(t))==null||e.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.29.0","https://vues3.com");window.app=$t(he);window.app.use(wt());const Oe=j(()=>h.currentRoute.value.name);window.app.provide("id",G(Oe));const ke=(async()=>{const t=await fetch("index.json");P.push(t.ok?(await t.json())[0]:{}),X(P),await vt(),window.app.provide("pages",G(Object.fromEntries(b.value.map(n=>[n.id,n]))));{const n=(r,l,p)=>[{component:r,name:l,path:p}],i=()=>A(()=>import("./SingleView-CGgNRmxR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url);b.value.forEach(({along:r,id:l,loc:p,parent:m,path:u})=>{const f=((p==null?void 0:p.replaceAll(" ","_"))??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),$=n((m==null?void 0:m.along)??r?()=>A(()=>import("./MultiView-1l4WX1lC.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20]),import.meta.url):i,l,""),v=u.replace(/^\/?/,"/").replace(/\/?$/,"/");h.addRoute({path:v,...p&&{alias:f},children:$,component:i})})}const e="/:pathMatch(.*)*",c=()=>A(()=>import("./NotFoundView-B5wWPxwx.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]),import.meta.url);h.addRoute({component:c,name:"404",path:e})})(),Y=()=>document.getElementById("app"),Le=async t=>{const{toggleObserver:e}=t;return De(t),await ke,window.app.use(h),window.app.mount(Y()),e(!0),!1};(async()=>{const t=await fetch("fonts.json"),e=ue(t.ok?await t.json():[]);H.presets.push(lt({customFetch:Ot,fonts:e})),pt({defaults:H,ready:Le,rootElement:Y})})().catch(()=>{});export{ro as $,ye as _,no as a,Ct as b,V as c,oo as d,so as g,S as p,io as r,K as s,E as t};
