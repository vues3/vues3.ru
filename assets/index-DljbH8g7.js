const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SingleView-Dxoxr5lA.js","assets/unocss-BkcBwv3F.js","assets/ofetch-CwKPICM-.js","assets/destr-CVtkxrq9.js","assets/ufo-CsG24Xhf.js","assets/magic-string-CTxECtaK.js","assets/jridgewell-CS0TOL6_.js","assets/ajv-DVT_ztRr.js","assets/fast-deep-equal-DhA4GXGS.js","assets/json-schema-traverse-DW8_mBst.js","assets/fast-uri-DiSllsZr.js","assets/unocss-Bp7TQC5E.css","assets/ajv-keywords-fgJOexQU.js","assets/uuid-random-C5LgB_p5.js","assets/iconify-DZNnka9g.js","assets/unhead-12oOAFTY.js","assets/hookable-B8xFkYCm.js","assets/vue-router-DgSFFxGk.js","assets/vue-Cow_pXkh.js","assets/vueuse-Bs6x0GOr.js","assets/vue3-sfc-loader-CoUr1SK8.js","assets/MultiView-zbDaAE1l.js","assets/NotFoundView-BJEHGshn.js"])))=>i.map(i=>d[i]);
import{p as st,a as rt,b as it,c as at,d as ct,_ as A,e as lt,i as pt}from"./unocss-BkcBwv3F.js";import{A as ut}from"./ajv-DVT_ztRr.js";import{d as V}from"./ajv-keywords-fgJOexQU.js";import{u as dt}from"./uuid-random-C5LgB_p5.js";import*as q from"vue";import{reactive as mt,watch as R,computed as P,defineComponent as ft,ref as E,resolveComponent as gt,openBlock as I,createBlock as O,withCtx as yt,resolveDynamicComponent as ht,createApp as vt,readonly as z,nextTick as $t}from"vue";import{i as D,g as k,l as T}from"./iconify-DZNnka9g.js";import{u as L,a as B,c as wt}from"./unhead-12oOAFTY.js";import{u as F,c as bt,a as _t}from"./vue-router-DgSFFxGk.js";import{u as jt}from"./vueuse-Bs6x0GOr.js";import{i as Pt}from"./vue3-sfc-loader-CoUr1SK8.js";import"./ofetch-CwKPICM-.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-CTxECtaK.js";import"./jridgewell-CS0TOL6_.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const no=!0,xt=!0,St=!0,At=!0,Rt=!0,W=!0,Ct="no-cache",Et="smooth",It=0,Ot=0,so=.1,Dt=async t=>(await fetch(t)).text(),kt="urn:jsonschema:component",Tt=!1,Lt={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Bt="object",Ft={$id:kt,additionalProperties:Tt,properties:Lt,type:Bt},Wt="urn:jsonschema:credentials",M=!0,Mt={properties:{accessKeyId:{default:null,nullable:M,type:"string"},Bucket:{default:"",type:"string"},endpoint:{default:"",type:"string"},region:{default:"",type:"string"},secretAccessKey:{default:null,nullable:M,type:"string"}},type:"object"},Ut="object",Ht={$id:Wt,additionalProperties:Mt,type:Ut},Kt="urn:jsonschema:data",Nt={$ref:"urn:jsonschema:page"},Vt="array",qt={$id:Kt,items:Nt,type:Vt},zt="urn:jsonschema:importmap",Gt=!1,Jt={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Qt="object",Xt={$id:zt,additionalProperties:Gt,properties:Jt,type:Qt},Yt="urn:jsonschema:page",Zt=!1,f=!0,te="uuid",ee={id:te},oe={default:[],items:{$ref:"#"},type:"array"},ne={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:f,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:f,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:f,type:"string"},icon:{default:null,nullable:f,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:f,type:"string"},loc:{default:null,nullable:f,type:"string"},name:{default:null,nullable:f,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:f,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:f,type:"string"}},se="object",re={$id:Yt,additionalProperties:Zt,dynamicDefaults:ee,properties:{children:oe,...ne},type:se};V.DEFAULTS.uuid=()=>()=>dt();const ie={esm:Rt},ae=[Ht,re,qt,Ft,Xt],ce=[V()],S=new ut({code:ie,coerceTypes:St,keywords:ce,removeAdditional:At,schemas:ae,useDefaults:xt});S.getSchema("urn:jsonschema:page");const le=S.getSchema("urn:jsonschema:component");S.getSchema("urn:jsonschema:credentials");const pe=S.getSchema("urn:jsonschema:data");S.getSchema("urn:jsonschema:importmap");const x=mt([]);{const t={get(){return x[0]}},e={get(){return this.siblings.findIndex(({id:a})=>this.id===a)}},c={get(){return this.siblings[this.index-1]}},s={get(){return this.siblings[this.index+1]}},n={get(){var a;return(a=this.children)==null?void 0:a.filter(({enabled:o})=>o)}},r={get(){return this.siblings.filter(({enabled:a})=>a)}},i={get(){return this.$siblings.findIndex(({id:a})=>this.id===a)}},l={get(){return this.$siblings[this.$index-1]}},p={get(){return this.$siblings[this.$index+1]}},m={get(){const a=[this];for(;a[0].parent;)a.unshift(a[0].parent);return a}},u={get(){return this.branch.slice(1).map(({name:a})=>a??"-").join("/").replaceAll(" ","_")}},g={get(){var a;return(((a=this.loc)==null?void 0:a.replaceAll(" ","_"))??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},$={get(){return this.icon&&`i-${this.icon}`}},w={get(){return this.header??this.name}},j=(a,o={value:void 0})=>{a.value.forEach(d=>{Object.defineProperties(d,{$children:n,$index:i,$next:p,$prev:l,$siblings:r,branch:m,i:$,index:e,next:s,parent:o,path:u,prev:c,root:t,siblings:a,title:w,to:g}),j({configurable:W,value:d.children??[]},{configurable:W,value:d})})};R(x,a=>{pe(a),j({value:a})})}const G=t=>t.flatMap(e=>[e,...G(e.children??[])]),h=P(()=>G(x)),ue=t=>Object.fromEntries(t.map(e=>[e.toLowerCase().replaceAll(" ","_"),e])),de="https://unpkg.com/",me=[st(),rt(),it({cdn:de}),at(),ct()],U={presets:me},fe=ft({__name:"App",setup(t,{expose:e}){e();const c=F(),s=P(()=>h.value.find(({id:o})=>o===c.name)),n=P(()=>{var o;return((o=s.value)==null?void 0:o.to)===void 0?void 0:`${window.location.origin}${s.value.to==="/"?"":s.value.to}`}),r=()=>{var o;return(o=s.value)==null?void 0:o.images.filter(({url:d})=>d).map(({alt:d,url:y})=>({alt:d,url:y?`${window.location.origin}${y}`:""}))},i=E(),l=[[i,"icon","icon"],[n,"canonical"]].map(([o,d,y])=>({href:o,key:y,rel:d}));L({link:l});const p=()=>{var o;return((o=s.value)==null?void 0:o.title)??""},m=()=>{var o;return(o=s.value)==null?void 0:o.title},u=()=>{var o;return(o=s.value)==null?void 0:o.description},g=()=>{var o;return(o=s.value)==null?void 0:o.description},$=()=>{var o;return(o=s.value)==null?void 0:o.type},w=n,j=()=>{var o;return(o=s.value)==null?void 0:o.keywords.join()};B({description:u,keywords:j,ogDescription:g,ogImage:r,ogTitle:m,ogType:$,ogUrl:w,title:p}),R(s,async o=>{let d="/favicon.ico";if(o!=null&&o.icon){const y=D(o==null?void 0:o.icon)?k(o==null?void 0:o.icon):await T(o==null?void 0:o.icon);if(y){const{body:Z,height:tt,left:et,top:ot,width:nt}=y;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${et.toString()} ${ot.toString()} ${nt.toString()} ${tt.toString()}">${Z}</svg>`}}i.value=d});const a={route:c,a:s,canonical:n,ogImage:r,favicon:i,link:l,title:p,ogTitle:m,description:u,ogDescription:g,ogType:$,ogUrl:w,keywords:j,get getIcon(){return k},get iconExists(){return D},get loadIcon(){return T},get useHead(){return L},get useSeoMeta(){return B},get pages(){return h},computed:P,ref:E,watch:R,get useRoute(){return F}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function ge(t,e,c,s,n,r){const i=gt("router-view");return I(),O(i,null,{default:yt(({Component:l})=>[(I(),O(ht(l),{id:s.pages[0].id},null,8,["id"]))]),_:1})}const ye=(t,e)=>{const c=t.__vccOpts||t;for(const[s,n]of e)c[s]=n;return c},he=ye(fe,[["render",ge],["__file","App.vue"]]),{computed:_,defineAsyncComponent:ve,markRaw:$e,ref:J}=q,we={vue:q},be=(t,e)=>{const{refPath:c}=t,{getPathname:s,pathResolve:n}=e,r=n(t,e),i=r.toString(),l=s(i).split(".").pop()??"",p=l&&`.${l}`;return{getContent:async()=>{if(c&&!(i.startsWith("./")||i.startsWith("../")||i.startsWith("/")&&!i.startsWith("//")))return p===".css"?{type:p}:{getContentData:()=>import(i)};const u=await e.getFile(r);return typeof u=="string"||u instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(u),type:p}:u},id:i,path:r}},_e=async(t,e,c,s)=>{switch(t){case".css":return s.addStyle(await(await fetch(c)).text(),void 0),null;case void 0:return e(!1);default:return}},je=(t,...e)=>{window.console[t](...e.map(c=>decodeURIComponent(c)))},Pe=(t,e)=>{jt(t,{id:e})},ro=({path:t,scoped:e,setup:c,sfc:s})=>{const n=async()=>{const{script:r,style:i,template:l}=await s,p=r&&`<script${c?" setup":""}>${r}<\/script>`,m=l&&`<template>${l}</template>`,u=i&&`<style${e?" scoped":""}>${i}</style>`;return`${p}${m}${u}`};return ve(async()=>Pt(`${h.value[0].name??""}${t&&"/"}${t}.vue`,{addStyle:Pe,getFile:n,getResource:be,handleModule:_e,log:je,moduleCache:we}))},xe={async get(){if(!this.buffer){const t=await fetch(`/pages/${this.id??""}.json`,{cache:Ct}),e=$e(t.ok?await t.json():{});le(e),Reflect.defineProperty(this,"buffer",{value:e})}return this.buffer}},Se=bt("/"),Ae=[],H=J(!0);let C;const Re=(t,e,c)=>C&&C(t,e,c),v=_t({history:Se,routes:Ae,scrollBehavior:Re});v.beforeEach(({path:t})=>t!==decodeURI(t)?decodeURI(t):void 0);const K=_(()=>h.value.find(({id:t})=>t===v.currentRoute.value.name)),Q=t=>{t.forEach(e=>{Object.defineProperties(e,{sfc:xe}),e.children&&Q(e.children)})},b=_(()=>{var t,e;return v.currentRoute.value.path==="/"?(e=(t=K.value)==null?void 0:t.$children)==null?void 0:e[0]:K.value}),Ce=_(()=>{var t;return((t=b.value)==null?void 0:t.siblings)??[]}),Ee=_(()=>Ce.value.filter(({enabled:t})=>t)),Ie=()=>{let t,e;return{promise:new Promise((s,n)=>{t=s,e=n}),reject:e,resolve:t}},Oe=_(()=>{var t;return!b.value||((t=b.value.parent)==null?void 0:t.along)}),X=_(()=>Object.fromEntries([...Oe.value?Ee.value:[b.value],h.value[0]].map(({id:t})=>[t,Ie()]))),N=J(!0),De=({extractAll:t,toggleObserver:e})=>{const c=async()=>{N.value=!0,e(!1),await Promise.all(Object.values(X.value).map(({promise:s})=>s)),await t(),e(!0),N.value=!1};C=async({name:s})=>new Promise(n=>{s?c().then(()=>{var i,l;const r=`#${String(s)}`;n(H.value&&{behavior:Et,...(l=(i=b.value)==null?void 0:i.parent)!=null&&l.along&&b.value.index?{el:r}:{left:Ot,top:It}}),H.value=!0},()=>{n(!1)}):n(!1)})},io=({id:t}={})=>{var e;(e=X.value[t])==null||e.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.27.12","https://vues3.com");window.app=vt(he);window.app.use(wt());const ke=P(()=>v.currentRoute.value.name);window.app.provide("id",z(ke));const Te=(async()=>{const t=await fetch("/index.json");x.push(t.ok?(await t.json())[0]:{}),Q(x),await $t(),window.app.provide("pages",z(Object.fromEntries(h.value.map(n=>[n.id,n]))));{const n=(i,l,p)=>[{component:i,name:l,path:p}],r=()=>A(()=>import("./SingleView-Dxoxr5lA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));h.value.forEach(({along:i,id:l,loc:p,parent:m,path:u})=>{const g=((p==null?void 0:p.replaceAll(" ","_"))??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),$=n((m==null?void 0:m.along)??i?()=>A(()=>import("./MultiView-zbDaAE1l.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20])):r,l,""),w=u.replace(/^\/?/,"/").replace(/\/?$/,"/");v.addRoute({path:w,...p&&{alias:g},children:$,component:r})})}const e="/:pathMatch(.*)*",c=()=>A(()=>import("./NotFoundView-BJEHGshn.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]));v.addRoute({component:c,name:"404",path:e})})(),Y=()=>document.getElementById("app"),Le=async t=>{const{toggleObserver:e}=t;return De(t),await Te,window.app.use(v),window.app.mount(Y()),e(!0),!1};(async()=>{const t=await fetch("/fonts.json"),e=ue(t.ok?await t.json():[]);U.presets.push(lt({customFetch:Dt,fonts:e})),pt({defaults:U,ready:Le,rootElement:Y})})().catch(()=>{});export{Ee as $,ye as _,so as a,Et as b,N as c,no as d,ro as g,X as p,io as r,H as s,b as t};