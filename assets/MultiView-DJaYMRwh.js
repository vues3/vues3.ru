import{defineComponent as I,ref as d,computed as f,watch as $,onUnmounted as C,openBlock as g,createElementBlock as V,Fragment as L,renderList as T,normalizeClass as U,createBlock as X,resolveDynamicComponent as Y}from"vue";import{a as x,b as E}from"./vueuse-Bs6x0GOr.js";import{$ as s,g as O,d as B,b as j,a as A,p as P,r as q,s as R,t as z,_ as G}from"./index-DEBqXskm.js";import{b as D}from"./vue-router-DgSFFxGk.js";import"./unocss-BkcBwv3F.js";import"./ofetch-CwKPICM-.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-CTxECtaK.js";import"./jridgewell-CS0TOL6_.js";import"./ajv-DVT_ztRr.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./ajv-keywords-fgJOexQU.js";import"./uuid-random-C5LgB_p5.js";import"./iconify-DZNnka9g.js";import"./unhead-12oOAFTY.js";import"./hookable-B8xFkYCm.js";import"./vue3-sfc-loader-CoUr1SK8.js";import"./vue-Cow_pXkh.js";const H=I({__name:"MultiView",setup(F,{expose:v}){v();const c=d([]),r=D(),u=f(()=>Object.fromEntries(s.value.map(e=>[e.id,O(e)]))),_=({id:e})=>u.value[e],t=f(()=>new Map(s.value.map(({id:e})=>[e,!1]))),n=d(new Map(t.value)),h=()=>{var e,o;if(console.log("onStop"),!P.value&&z.value&&s.value.length){const{scrollX:i,scrollY:M}=window,[l]=s.value,{root:S}=l,{$children:[{id:k}]=[{}]}=S,y=!Math.floor(i)&&!Math.floor(M)&&l.id===k?S.id:((e=[...t.value.entries()].find(([,m])=>m))==null?void 0:e[0])??((o=[...n.value.entries()].find(([,m])=>m))==null?void 0:o[0])??l.id;console.log(!Math.floor(i)&&!Math.floor(M)&&l.id===k,{name:y}),R.value=!1,r.push({name:y}).catch(()=>{})}};x(window,{behavior:j,onStop:h});const b=([{isIntersecting:e,target:{id:o}}])=>{console.log({id:o,isIntersecting:e}),n.value=new Map(t.value),t.value.set(o,e)},a=[],p=()=>{a.forEach(e=>{e()}),a.length=0};$(c,async e=>{p(),await new Promise(o=>{setTimeout(o)}),e.forEach(o=>{const{stop:i}=E(o,b,{threshold:A});a.push(i)})},{deep:B}),C(()=>{p()});const w={refs:c,router:r,templates:u,template:_,intersecting:t,$intersecting:n,onStop:h,callback:b,stops:a,clearStops:p,get useIntersectionObserver(){return E},get useScroll(){return x},get behavior(){return j},get deep(){return B},get threshold(){return A},computed:f,onUnmounted:C,ref:d,watch:$,get useRouter(){return D},get $siblings(){return s},get getAsyncComponent(){return O},get paused(){return P},get resolve(){return q},get scroll(){return R},get that(){return z}};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),J=["id","role"];function K(F,v,c,r,u,_){return g(!0),V(L,null,T(r.$siblings,t=>{var n;return g(),V("div",{class:U(t.class),id:t.id,key:t.id,role:t.id===((n=r.that)==null?void 0:n.id)?"main":void 0,ref_for:!0,ref:"refs","un-cloak":""},[(g(),X(Y(r.template(t)),{id:t.id,onVnodeMounted:()=>{console.log("resolve",t),r.resolve(t)}},null,8,["id","onVnodeMounted"]))],10,J)}),128)}const _e=G(H,[["render",K],["__file","MultiView.vue"]]);export{_e as default};
