const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SingleView-CMTquoxf.js","assets/unocss-DhDxn2Xm.js","assets/ofetch-CHtvfWky.js","assets/destr-CVtkxrq9.js","assets/ufo-CsG24Xhf.js","assets/magic-string-BDwwGany.js","assets/jridgewell-DKRDenmA.js","assets/ajv-Ay3qaTcV.js","assets/fast-deep-equal-DhA4GXGS.js","assets/json-schema-traverse-DW8_mBst.js","assets/fast-uri-WMTOr92D.js","assets/unocss-DVpSmXhq.css","assets/ajv-keywords-CoX1zOMH.js","assets/uuid-random-DGdR0eZw.js","assets/iconify-DZNnka9g.js","assets/unhead-DyRpM8pl.js","assets/hookable-B8xFkYCm.js","assets/vue-router-l9xZ5e8S.js","assets/vue-Cow_pXkh.js","assets/vueuse-BVORxzrM.js","assets/vue3-sfc-loader-DxcuOqa0.js","assets/MultiView-Dk3plc96.js","assets/NotFoundView-CiDzbWvC.js"])))=>i.map(i=>d[i]);
import{p as ae,a as ie,b as ce,c as le,i as pe,_ as j}from"./unocss-DhDxn2Xm.js";import{A as ue}from"./ajv-Ay3qaTcV.js";import{d as G}from"./ajv-keywords-CoX1zOMH.js";import{u as de}from"./uuid-random-DGdR0eZw.js";import*as J from"vue";import{reactive as me,computed as $,watch as P,defineComponent as fe,ref as D,resolveComponent as ge,openBlock as O,createBlock as k,withCtx as ye,resolveDynamicComponent as he,createApp as ve,nextTick as $e}from"vue";import{i as L,g as T,l as q}from"./iconify-DZNnka9g.js";import{u as B,a as F,c as we}from"./unhead-DyRpM8pl.js";import{u as W,c as be,a as _e}from"./vue-router-l9xZ5e8S.js";import{u as je}from"./vueuse-BVORxzrM.js";import{i as Pe}from"./vue3-sfc-loader-DxcuOqa0.js";import"./ofetch-CHtvfWky.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-BDwwGany.js";import"./jridgewell-DKRDenmA.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Po=!0,xe=!0,Se=!0,Ae=!0,Ce=!0,M=!0,Re="no-cache",Ee="smooth",Ie=0,De=0,xo=.1,Oe=async e=>(await fetch(e)).text(),ke="urn:jsonschema:component",Le=!1,Te={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},qe="object",Be={$id:ke,additionalProperties:Le,properties:Te,type:qe},Fe="urn:jsonschema:config",We=!1,Me={expanded:{default:[],items:{type:"string"},type:"array"},selected:{type:"string"},tab:{default:"wysiwyg",enum:["wysiwyg","template","script","style"],type:"string"}},Ue="object",He={$id:Fe,additionalProperties:We,properties:Me,type:Ue},Ke="urn:jsonschema:credentials",U=!0,Ne={properties:{accessKeyId:{default:null,nullable:U,type:"string"},Bucket:{default:"",type:"string"},endpoint:{default:"",type:"string"},region:{default:"",type:"string"},secretAccessKey:{default:null,nullable:U,type:"string"}},type:"object"},Ve="object",ze={$id:Ke,additionalProperties:Ne,type:Ve},Ge="urn:jsonschema:data",Je={$ref:"urn:jsonschema:page"},Qe="array",Xe={$id:Ge,items:Je,type:Qe},Ye="urn:jsonschema:importmap",Ze=!1,et={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},tt="object",ot={$id:Ye,additionalProperties:Ze,properties:et,type:tt},nt="urn:jsonschema:page",st=!1,u=!0,rt="uuid",at={id:rt},it={default:[],items:{$ref:"#"},type:"array"},ct={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:u,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:u,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:u,type:"string"},icon:{default:null,nullable:u,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:u,type:"string"},loc:{default:null,nullable:u,type:"string"},name:{default:null,nullable:u,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:u,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:u,type:"string"}},lt="object",pt={$id:nt,additionalProperties:st,dynamicDefaults:at,properties:{children:it,...ct},type:lt};G.DEFAULTS.uuid=()=>()=>de();const ut={esm:Ce},dt=[He,ze,pt,Xe,Be,ot],mt=[G()],y=new ue({code:ut,coerceTypes:Se,keywords:mt,removeAdditional:Ae,schemas:dt,useDefaults:xe});y.getSchema("urn:jsonschema:page");y.getSchema("urn:jsonschema:config");const ft=y.getSchema("urn:jsonschema:component");y.getSchema("urn:jsonschema:credentials");const gt=y.getSchema("urn:jsonschema:data");y.getSchema("urn:jsonschema:importmap");const Q=e=>e.flatMap(t=>[t,...Q(t.children??[])]),yt={get(){return this.siblings.findIndex(({id:e})=>this.id===e)}},ht={get(){return this.siblings[this.index-1]}},vt={get(){return this.siblings[this.index+1]}},$t={get(){return this.children?.filter(({enabled:e})=>e)}},wt={get(){return this.siblings.filter(({enabled:e})=>e)}},bt={get(){return this.$siblings.findIndex(({id:e})=>this.id===e)}},_t={get(){return this.$siblings[this.$index-1]}},jt={get(){return this.$siblings[this.$index+1]}},Pt={get(){const e=[this];for(;e[0].parent;)e.unshift(e[0].parent);return e}},xt={get(){return this.branch.slice(1).map(({name:e})=>e?.replaceAll(" ","_")??"-").join("/")}},St={get(){return(this.loc?.replaceAll(" ","_")??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},At={get(){return this.icon&&`i-${this.icon}`}},Ct={get(){return this.header??this.name}},w=me([]),Rt={get(){return w[0]}},X=(e,t={value:void 0})=>{e.value.forEach(n=>{Object.defineProperties(n,{$children:$t,$index:bt,$next:jt,$prev:_t,$siblings:wt,branch:Pt,i:At,index:yt,next:vt,parent:t,path:xt,prev:ht,root:Rt,siblings:e,title:Ct,to:St}),X({configurable:M,value:n.children??[]},{configurable:M,value:n})})},H=()=>Q(w),f=$(()=>H().map(e=>(Reflect.defineProperty(e,"pages",{get:H}),e))),Et=e=>Object.fromEntries(e.map(t=>[t.toLowerCase().replaceAll(" ","_"),t]));P(w,e=>{gt(e),X({value:e})});const It="https://unpkg.com/",Dt=[ae(),ie(),ce({cdn:It})],K={presets:Dt},Ot=fe({__name:"App",setup(e,{expose:t}){t();const n=W(),r=$(()=>f.value[0]),o=$(()=>f.value.find(({id:l})=>l===n.name)),s=$(()=>o.value?.to===void 0?void 0:`${window.location.origin}${o.value.to==="/"?"":o.value.to.replace(/"/g,"&quot;")}`),a=()=>o.value?.images.map(({alt:l,url:m})=>({alt:l?.replace(/"/g,"&quot;"),url:m?`${window.location.origin}${m}`:""})),i=D(),c=[[i,"icon","icon"],[s,"canonical"]].map(([l,m,_])=>({href:l,key:_,rel:m}));B({link:c});const d=()=>o.value?.title.replace(/"/g,"&quot;")??"",p=()=>o.value?.title.replace(/"/g,"&quot;")??"",b=()=>o.value?.description?.replace(/"/g,"&quot;")??"",A=()=>o.value?.description?.replace(/"/g,"&quot;")??"",C=()=>o.value?.type,R=s,E=()=>o.value?.keywords.join().replace(/"/g,"&quot;");F({description:b,keywords:E,ogDescription:A,ogImage:a,ogTitle:p,ogType:C,ogUrl:R,title:d}),P(o,async l=>{let m="/favicon.ico";if(l?.icon){const _=L(l?.icon)?T(l?.icon):await q(l?.icon);if(_){const{body:te,height:oe,left:ne,top:se,width:re}=_;m=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ne.toString()} ${se.toString()} ${re.toString()} ${oe.toString()}">${te}</svg>`}}i.value=m});const I={route:n,the:r,a:o,canonical:s,ogImage:a,favicon:i,link:c,title:d,ogTitle:p,description:b,ogDescription:A,ogType:C,ogUrl:R,keywords:E,get getIcon(){return T},get iconExists(){return L},get loadIcon(){return q},get useHead(){return B},get useSeoMeta(){return F},get pages(){return f},computed:$,ref:D,watch:P,get useRoute(){return W}};return Object.defineProperty(I,"__isScriptSetup",{enumerable:!1,value:!0}),I}});function kt(e,t,n,r,o,s){const a=ge("router-view");return O(),k(a,null,{default:ye(({Component:i})=>[(O(),k(he(i),{the:r.the},null,8,["the"]))]),_:1})}const Lt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Tt=Lt(Ot,[["render",kt],["__file","App.vue"]]),{computed:h,defineAsyncComponent:qt,markRaw:Bt,ref:Y}=J,Ft={vue:J},Wt=(e,t)=>{const{refPath:n}=e,{getPathname:r,pathResolve:o}=t,s=o(e,t),a=s.toString(),i=r(a).split(".").pop()??"",c=i&&`.${i}`;return{getContent:async()=>{if(n&&!(a.startsWith("./")||a.startsWith("../")||a.startsWith("/")&&!a.startsWith("//")))return c===".css"?{type:c}:{getContentData:()=>import(a)};const p=await t.getFile(s);return typeof p=="string"||p instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(p),type:c}:p},id:a,path:s}},Mt=async(e,t,n,r)=>{switch(e){case".css":return r.addStyle(await(await fetch(n)).text(),void 0),null;case void 0:return t(!1);default:return}},Ut=(e,...t)=>{window.console[e](...t.map(n=>decodeURIComponent(n)))},Ht=(e,t)=>{je(e,{id:t})},So=({path:e,scoped:t,setup:n,sfc:r})=>{const o=async()=>{const{script:s,style:a,template:i}=await r,c=s&&`<script${n?" setup":""}>${s}<\/script>`,d=i&&`<template>${i}</template>`,p=a&&`<style${t?" scoped":""}>${a}</style>`;return`${c}${d}${p}`};return qt(async()=>Pe(`${f.value[0].name??""}${e&&"/"}${e}.vue`,{addStyle:Ht,getFile:o,getResource:Wt,handleModule:Mt,log:Ut,moduleCache:Ft}))},Kt={async get(){if(!this.buffer){const e=await fetch(`/pages/${this.id??""}.json`,{cache:Re}),t=Bt(e.ok?await e.json():{});ft(t),Reflect.defineProperty(this,"buffer",{value:t})}return this.buffer}},Nt=be("/"),Vt=[],N=Y(!0);let x;const zt=(e,t,n)=>x&&x(e,t,n),v=_e({history:Nt,routes:Vt,scrollBehavior:zt});v.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const S=h(()=>f.value.find(({id:e})=>e===v.currentRoute.value.name)),Gt={get(){return S.value}},Z=e=>{e.forEach(t=>{Object.defineProperties(t,{current:Gt,sfc:Kt}),t.children&&Z(t.children)})},g=h(()=>v.currentRoute.value.path==="/"?S.value?.children?.[0]:S.value),Jt=h(()=>g.value?.siblings??[]),Qt=h(()=>Jt.value.filter(({enabled:e})=>e)),Xt=()=>{let e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),reject:t,resolve:e}},Yt=h(()=>!g.value||g.value.parent?.along),ee=h(()=>Object.fromEntries((Yt.value?Qt.value:[g.value]).map(({id:e})=>[e,Xt()]))),V=Y(!0),Zt=({extractAll:e,toggleObserver:t})=>{const n=async()=>{V.value=!0,t(!1),await Promise.all(Object.values(ee.value).map(({promise:r})=>r)),await e(),t(!0),V.value=!1};return x=async({name:r},o,s)=>new Promise(a=>{r?n().then(()=>{const i=`#${String(r)}`;a(N.value&&{behavior:Ee,...s??(g.value?.parent?.along&&g.value.index?{el:i}:{left:De,top:Ie})}),N.value=!0},()=>{a(!1)}):a(!1)}),t(!0),!1},Ao=({id:e}={})=>{ee.value[e]?.resolve(void 0)};(async()=>{const e=await fetch("/fonts.json"),t=Et(e.ok?await e.json():[]);K.presets.push(le({customFetch:Oe,fonts:t})),pe({defaults:K,ready:Zt,rootElement:()=>document.getElementById("app")})})().catch(()=>{});window.console.info("⛵","vueS3","ver:3.26.14","https://vues3.com");const z=await fetch("/index.json");w.push(z.ok?(await z.json())[0]:{});Z(w);window.app=ve(Tt);window.app.use(we());await $e();{const e=(n,r,o)=>[{component:n,name:r,path:o}],t=()=>j(()=>import("./SingleView-CMTquoxf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));f.value.forEach(({along:n,id:r,loc:o,parent:s,path:a})=>{const i=(o?.replaceAll(" ","_")??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),c=e(s?.along??n?()=>j(()=>import("./MultiView-Dk3plc96.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20])):t,r,""),d=a.replace(/^\/?/,"/").replace(/\/?$/,"/");v.addRoute({path:d,...o&&{alias:i},children:c,component:t})})}const eo="/:pathMatch(.*)*",to=()=>j(()=>import("./NotFoundView-CiDzbWvC.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20])),oo="404";v.addRoute({component:to,name:oo,path:eo});window.app.use(v);window.app.mount("#app");export{Qt as $,Lt as _,xo as a,Ee as b,Po as d,So as g,V as p,Ao as r,N as s,g as t};