import{defineComponent as $,ref as g,computed as a,watch as _,openBlock as l,createElementBlock as v,Fragment as B,renderList as j,normalizeClass as A,createBlock as I,resolveDynamicComponent as R}from"vue";import{a as b,b as h}from"./vueuse-BVORxzrM.js";import{$ as u,g as w,d as k,b as M,a as y,p as C,r as z,s as S,t as V,_ as D}from"./index-CkkNBBVi.js";import{b as x}from"./vue-router-oGFSbWVo.js";import"./unocss-D35o3_UT.js";import"./ofetch-CHtvfWky.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-Ci9uVji-.js";import"./jridgewell-BQ5JxrZg.js";import"./ajv-B9jPN_u1.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./ajv-keywords-C7uUwL6G.js";import"./uuid-random-BBDbE0jX.js";import"./iconify-DZNnka9g.js";import"./unhead-DyRpM8pl.js";import"./hookable-B8xFkYCm.js";import"./vue3-sfc-loader-DxcuOqa0.js";const F=$({__name:"MultiView",setup(E,{expose:p}){p();const s=g([]),r=x(),i=a(()=>Object.fromEntries(u.value.map(e=>[e.id,w(e)]))),c=({id:e})=>i.value[e],t=a(()=>new Map(u.value.map(({id:e})=>[e,!1]))),m=()=>{const e=[...t.value.entries()].find(([,o])=>o)?.[0];!C.value&&e&&e!==V.value?.id&&(S.value=!1,r.push({name:e}).catch(()=>{}))};b(window,{behavior:M,onStop:m});const d=([{isIntersecting:e,target:{id:o}}])=>{t.value.set(o,e)},n=[];_(s,e=>{n.forEach(o=>{o()}),n.length=0,e.forEach(o=>{const{stop:O}=h(o,d,{threshold:y});n.push(O)})},{deep:k});const f={refs:s,router:r,templates:i,template:c,intersecting:t,onStop:m,callback:d,stops:n,get useIntersectionObserver(){return h},get useScroll(){return b},get behavior(){return M},get deep(){return k},get threshold(){return y},computed:a,ref:g,watch:_,get useRouter(){return x},get $siblings(){return u},get getAsyncComponent(){return w},get paused(){return C},get resolve(){return z},get scroll(){return S},get that(){return V}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),L=["id","role"];function P(E,p,s,r,i,c){return l(!0),v(B,null,j(r.$siblings,t=>(l(),v("div",{class:A(t.class),id:t.id,key:t.id,role:t.id===r.that?.id?"main":void 0,ref_for:!0,ref:"refs","un-cloak":""},[(l(),I(R(r.template(t)),{the:t,onVnodeMounted:()=>{r.resolve(t)}},null,8,["the","onVnodeMounted"]))],10,L))),128)}const ae=D(F,[["render",P],["__file","MultiView.vue"]]);export{ae as default};