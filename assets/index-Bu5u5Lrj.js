const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SingleView-CFfgqoLP.js","./unocss-wdJ5ViKv.js","./ofetch-DfaEl5Lr.js","./destr-CVtkxrq9.js","./ufo-CsG24Xhf.js","./magic-string-CUto1T76.js","./jridgewell-9KHfGwW6.js","./unocss-DaoZmw1x.css","./ajv-BS_TGhCq.js","./fast-deep-equal-C148XJoK.js","./json-schema-traverse-B8kO9W2y.js","./fast-uri-IWLU8Qy7.js","./ajv-keywords-CbYRO2bl.js","./uuid-random-sjnZL2g3.js","./iconify-DZNnka9g.js","./unhead-CEwDqR4t.js","./hookable-B8xFkYCm.js","./vue-router-Db1rCyv1.js","./vue-Cow_pXkh.js","./vueuse-Bs6x0GOr.js","./vue3-sfc-loader-CoUr1SK8.js","./MultiView-us6RN9Fj.js","./NotFoundView-D8tKLNTL.js"])))=>i.map(i=>d[i]);
import{p as ie,a as ae,b as ce,c as le,d as pe,_ as R,e as ue,i as de}from"./unocss-wdJ5ViKv.js";import{A as me}from"./ajv-BS_TGhCq.js";import{d as z}from"./ajv-keywords-CbYRO2bl.js";import{u as G}from"./uuid-random-sjnZL2g3.js";import*as J from"vue";import{reactive as Q,watch as P,computed as _,defineComponent as ge,ref as C,resolveComponent as fe,openBlock as L,createBlock as k,withCtx as ye,resolveDynamicComponent as he,createApp as ve,readonly as X,nextTick as we}from"vue";import{i as T,g as U,l as M}from"./iconify-DZNnka9g.js";import{u as B,a as F,c as $e}from"./unhead-CEwDqR4t.js";import{u as H,c as be,a as _e}from"./vue-router-Db1rCyv1.js";import{u as je}from"./vueuse-Bs6x0GOr.js";import{i as xe}from"./vue3-sfc-loader-CoUr1SK8.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-CUto1T76.js";import"./jridgewell-9KHfGwW6.js";import"./fast-deep-equal-C148XJoK.js";import"./json-schema-traverse-B8kO9W2y.js";import"./fast-uri-IWLU8Qy7.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const zt=!0,Se=!0,Ae=!0,Ie=!0,Re=!0,W=!0,Pe="smooth",Ee=0,Oe=0,Gt=.1,De=async e=>(await fetch(e)).text(),Ce="urn:jsonschema:credentials",b=!0,Le={properties:{accessKeyId:{default:null,nullable:b,type:"string"},Bucket:{default:null,nullable:b,type:"string"},domain:{default:null,nullable:b,type:"string"},endpoint:{default:null,nullable:b,type:"string"},region:{default:null,nullable:b,type:"string"},secretAccessKey:{default:null,nullable:b,type:"string"}},type:"object"},ke="object",Te={$id:Ce,additionalProperties:Le,type:ke},Ue="urn:jsonschema:data",Me={$ref:"urn:jsonschema:page"},Be="array",Fe={$id:Ue,items:Me,type:Be},He="urn:jsonschema:importmap",We=!1,Ke={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Ve="object",qe={$id:He,additionalProperties:We,properties:Ke,type:Ve},Ne="urn:jsonschema:page",ze=!1,d=!0,Ge="uuid",Je={id:Ge},Qe={default:[],items:{$ref:"#"},type:"array"},Xe={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:d,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:d,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:d,type:"string"},icon:{default:null,nullable:d,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:d,type:"string"},loc:{default:null,nullable:d,type:"string"},name:{default:null,nullable:d,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:d,type:"number"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:d,type:"string"}},Ye="object",Ze={$id:Ne,additionalProperties:ze,dynamicDefaults:Je,properties:{children:Qe,...Xe},type:Ye};z.DEFAULTS.uuid=()=>()=>G();const et={esm:Re},tt=[Te,Ze,Fe,qe],ot=[z()],A=new me({code:et,coerceTypes:Ae,keywords:ot,removeAdditional:Ie,schemas:tt,useDefaults:Se});A.getSchema("urn:jsonschema:page");A.getSchema("urn:jsonschema:credentials");const st=A.getSchema("urn:jsonschema:data"),nt=A.getSchema("urn:jsonschema:importmap"),E=Q({}),x=Q([]);{const e={get(){return x[0]}},t={get(){return this.siblings.findIndex(({id:i})=>this.id===i)}},a={get(){return this.siblings[this.index-1]}},o={get(){return this.siblings[this.index+1]}},r={get(){var i;return(i=this.children)==null?void 0:i.filter(({enabled:s})=>s)}},n={get(){return this.siblings.filter(({enabled:i})=>i)}},c={get(){return this.$siblings.findIndex(({id:i})=>this.id===i)}},l={get(){return this.$siblings[this.$index-1]}},m={get(){return this.$siblings[this.$index+1]}},u={get(){const i=[this];for(;i[0].parent;)i.unshift(i[0].parent);return i}},g={get(){return this.branch.slice(1).map(({name:i})=>i??"-").join("/").replaceAll(" ","_")}},v={get(){var i;return(((i=this.loc)==null?void 0:i.replaceAll(" ","_"))??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},w={get(){return this.icon&&`i-${this.icon}`}},$={get(){return this.header??this.name}},f=(i,s={value:void 0})=>{i.value.forEach(p=>{Object.defineProperties(p,{$children:r,$index:c,$next:m,$prev:l,$siblings:n,branch:u,i:w,index:t,next:o,parent:s,path:g,prev:a,root:e,siblings:i,title:$,to:v}),f({configurable:W,value:p.children??[]},{configurable:W,value:p})})};P(x,i=>{st(i),f({value:i})})}const Y=e=>e.flatMap(t=>[t,...Y(t.children??[])]),j=_(()=>Y(x)),rt=e=>Object.fromEntries(e.map(t=>[t.toLowerCase().replaceAll(" ","_"),t])),it="https://unpkg.com/",at=[ie(),ae(),ce({cdn:it}),le(),pe()],K={presets:at},ct=ge({__name:"App",setup(e,{expose:t}){t();const a=H(),o=_(()=>j.value.find(({id:s})=>s===a.name)),r=_(()=>{var s;return((s=o.value)==null?void 0:s.to)===void 0?void 0:`${window.location.origin}${o.value.to==="/"?"":o.value.to}`}),n=()=>{var s;return(s=o.value)==null?void 0:s.images.filter(({url:p})=>p).map(({alt:p,url:y})=>({alt:p,url:y?`${window.location.origin}/${y}`:""}))},c=C(),l=[[c,"icon","icon"],[r,"canonical"]].map(([s,p,y])=>({href:s,key:y,rel:p}));B({link:l});const m=()=>{var s;return((s=o.value)==null?void 0:s.title)??""},u=()=>{var s;return(s=o.value)==null?void 0:s.title},g=()=>{var s;return(s=o.value)==null?void 0:s.description},v=()=>{var s;return(s=o.value)==null?void 0:s.description},w=()=>{var s;return(s=o.value)==null?void 0:s.type},$=r,f=()=>{var s;return(s=o.value)==null?void 0:s.keywords.join()};F({description:g,keywords:f,ogDescription:v,ogImage:n,ogTitle:u,ogType:w,ogUrl:$,title:m}),P(o,async s=>{let p="/favicon.ico";if(s!=null&&s.icon){const y=T(s.icon)?U(s.icon):await M(s.icon);if(y){const{body:te,height:oe,left:se,top:ne,width:re}=y;p=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${se.toString()} ${ne.toString()} ${re.toString()} ${oe.toString()}">${te}</svg>`}}c.value=p});const i={route:a,a:o,canonical:r,ogImage:n,favicon:c,link:l,title:m,ogTitle:u,description:g,ogDescription:v,ogType:w,ogUrl:$,keywords:f,get getIcon(){return U},get iconExists(){return T},get loadIcon(){return M},get useHead(){return B},get useSeoMeta(){return F},get pages(){return j},computed:_,ref:C,watch:P,get useRoute(){return H}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function lt(e,t,a,o,r,n){const c=fe("router-view");return L(),k(c,null,{default:ye(({Component:l})=>[(L(),k(he(l),{id:o.pages[0].id},null,8,["id"]))]),_:1})}const pt=(e,t)=>{const a=e.__vccOpts||e;for(const[o,r]of t)a[o]=r;return a},ut=pt(ct,[["render",lt],["__file","App.vue"]]),{computed:I,defineAsyncComponent:dt,ref:Z}=J,S=new Map,mt=()=>{let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),reject:t,resolve:e}},gt={vue:J},ft=async(e,t,a,o)=>{switch(e){case".css":return o.addStyle(await t(!1),a.toString()),null;case"js":return t(!1);default:return}},yt=(e,...t)=>{window.console[e](...t.map(a=>decodeURIComponent(a)))},ht=(e,t)=>{je(e,{id:t})},Jt=({id:e})=>{const t=`${e??G()}.vue`;S.set(e,mt());const a=async o=>{const{imports:r}=E;switch(!0){case o===t:return(await fetch(`./pages/${o}`)).text();case Object.keys(r).some(n=>o.startsWith(n)):return{getContentData:()=>import(o),type:"js"};default:{const n=o.split("/").pop();return(await fetch(n===(n==null?void 0:n.split(".").pop())?`${o}.js`:o)).text()}}};return dt(async()=>xe(t,{addStyle:ht,getFile:a,handleModule:ft,log:yt,moduleCache:gt}))},{pathname:vt}=new URL(document.baseURI),wt=be(vt),$t=[],V=Z(!0);let O;const bt=(e,t,a)=>O&&O(e,t,a),h=_e({history:wt,routes:$t,scrollBehavior:bt});h.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const q=I(()=>j.value.find(({id:e})=>e===h.currentRoute.value.name)),D=I(()=>{var e,t;return h.currentRoute.value.path==="/"?(t=(e=q.value)==null?void 0:e.$children)==null?void 0:t[0]:q.value}),_t=I(()=>{var e;return((e=D.value)==null?void 0:e.siblings)??[]}),Qt=I(()=>_t.value.filter(({enabled:e})=>e)),N=Z(!0),jt=({extractAll:e,toggleObserver:t})=>{const a=async()=>{N.value=!0,t(!1);{const[{promise:o}]=S.values();await o}await Promise.all([...S.values()].map(({promise:o})=>o)),await e(),t(!0),N.value=!1};O=async({name:o})=>new Promise(r=>{o?a().then(()=>{var c,l;const n=`#${String(o)}`;r(V.value&&{behavior:Pe,...(l=(c=D.value)==null?void 0:c.parent)!=null&&l.along&&D.value.index?{el:n}:{left:Oe,top:Ee}}),V.value=!0},()=>{r(!1)}):r(!1)})},Xt=({id:e}={})=>{var t;(t=S.get(e))==null||t.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.29.2","https://vues3.com");window.app=ve(ut);window.app.use($e());const xt=_(()=>h.currentRoute.value.name);window.app.provide("id",X(xt));const St=(async()=>{const[{imports:e},[t]]=await Promise.all(["index.importmap","index.json"].map(async(n,c)=>{const l=await fetch(n);return(l.ok?l:new Response(c?"[{}]":"{}")).json()}));E.imports=e,nt(E),x.push(t),await we(),window.app.provide("pages",X(Object.fromEntries(j.value.map(n=>[n.id,n]))));{const n=(l,m,u)=>[{component:l,name:m,path:u}],c=()=>R(()=>import("./SingleView-CFfgqoLP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url);j.value.forEach(({along:l,id:m,loc:u,parent:g,path:v})=>{const w=((u==null?void 0:u.replaceAll(" ","_"))??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),$=n((g==null?void 0:g.along)??l?()=>R(()=>import("./MultiView-us6RN9Fj.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20]),import.meta.url):c,m,""),f=v.replace(/^\/?/,"/").replace(/\/?$/,"/");h.addRoute({path:f,...u&&{alias:w},children:$,component:c})})}const a="/:pathMatch(.*)*",o=()=>R(()=>import("./NotFoundView-D8tKLNTL.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]),import.meta.url);h.addRoute({component:o,name:"404",path:a})})(),ee=()=>document.getElementById("app"),At=async e=>{const{toggleObserver:t}=e;return jt(e),await St,window.app.use(h),window.app.mount(ee()),t(!0),!1};(async()=>{const e=await fetch("fonts.json"),t=rt(await(e.ok?e:new Response("[]")).json());K.presets.push(ue({customFetch:De,fonts:t})),await de({defaults:K,ready:At,rootElement:ee})})().catch(()=>{});export{Qt as $,pt as _,Gt as a,Pe as b,N as c,zt as d,Jt as g,S as p,Xt as r,V as s,D as t};