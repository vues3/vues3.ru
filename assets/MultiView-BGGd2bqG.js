import{defineComponent as $,ref as g,computed as l,watch as _,openBlock as u,createElementBlock as v,Fragment as B,renderList as j,normalizeClass as A,createBlock as I,resolveDynamicComponent as R}from"vue";import{u as h,$ as c,g as b,a as w,b as k,d as M,c as y,e as C,p as S,r as z,s as V,t as x,_ as D}from"./index-DpQSGNGY.js";const F=$({__name:"MultiView",setup(E,{expose:i}){i();const o=g([]),r=h(),a=l(()=>Object.fromEntries(c.value.map(e=>[e.id,b(e)]))),d=({id:e})=>a.value[e],t=l(()=>new Map(c.value.map(({id:e})=>[e,!1]))),p=()=>{const e=[...t.value.entries()].find(([,n])=>n)?.[0];!S.value&&e&&e!==x.value?.id&&(V.value=!1,r.push({name:e}).catch(()=>{}))};w(window,{behavior:y,onStop:p});const f=([{isIntersecting:e,target:{id:n}}])=>{t.value.set(n,e)},s=[];_(o,e=>{s.forEach(n=>{n()}),s.length=0,e.forEach(n=>{const{stop:O}=k(n,f,{threshold:C});s.push(O)})},{deep:M});const m={refs:o,router:r,templates:a,template:d,intersecting:t,onStop:p,callback:f,stops:s,get useIntersectionObserver(){return k},get useScroll(){return w},get behavior(){return y},get deep(){return M},get threshold(){return C},computed:l,ref:g,watch:_,get useRouter(){return h},get $siblings(){return c},get getAsyncComponent(){return b},get paused(){return S},get resolve(){return z},get scroll(){return V},get that(){return x}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),L=["id","role"];function P(E,i,o,r,a,d){return u(!0),v(B,null,j(r.$siblings,t=>(u(),v("div",{class:A(t.class),id:t.id,key:t.id,role:t.id===r.that?.id?"main":void 0,ref_for:!0,ref:"refs","un-cloak":""},[(u(),I(R(r.template(t)),{the:t,onVnodeMounted:()=>{r.resolve(t)}},null,8,["the","onVnodeMounted"]))],10,L))),128)}const H=D(F,[["render",P],["__file","MultiView.vue"]]);export{H as default};