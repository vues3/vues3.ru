import{defineComponent as u,computed as o,onUpdated as s,openBlock as a,createElementBlock as _,normalizeClass as v,createBlock as h,resolveDynamicComponent as f,createCommentVNode as g}from"vue";import{t as l,g as c,r as d,_ as C}from"./index-NugfG-EF.js";import"./unocss-Drz-2FwI.js";import"./ofetch-CHtvfWky.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-DOefOKWI.js";import"./jridgewell-BjTMB11I.js";import"./ajv-Cz01fV_p.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./ajv-keywords-CNZ6qVQV.js";import"./uuid-random-00aD__ZV.js";import"./iconify-DZNnka9g.js";import"./unhead-DyRpM8pl.js";import"./hookable-B8xFkYCm.js";import"./vue-router-DgSFFxGk.js";import"./vue-Cow_pXkh.js";import"./vueuse-B28Glbfg.js";import"./vue3-sfc-loader-DxcuOqa0.js";const k=u({__name:"SingleView",props:{the:{}},setup(n,{expose:t}){t();const r=n,e=o(()=>r.the??l.value),i=o(()=>e.value?.id),m=o(()=>e.value&&c(e.value));s(()=>{d(e.value)});const p={props:r,the:e,id:i,is:m,computed:o,onUpdated:s,get getAsyncComponent(){return c},get resolve(){return d},get that(){return l}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),y=["id"];function S(n,t,r,e,i,m){return e.the?.enabled?(a(),_("div",{key:0,class:v(e.the?.class),id:e.id,"un-cloak":""},[(a(),h(f(e.is),{the:e.the,onVnodeMounted:t[0]||(t[0]=()=>{e.resolve(e.the)})},null,8,["the"]))],10,y)):g("",!0)}const K=C(k,[["render",S],["__file","SingleView.vue"]]);export{K as default};