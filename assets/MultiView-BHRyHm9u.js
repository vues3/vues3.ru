import{defineComponent as I,ref as d,computed as f,watch as k,onUnmounted as y,openBlock as g,createElementBlock as S,Fragment as L,renderList as T,normalizeClass as U,createBlock as X,resolveDynamicComponent as Y}from"vue";import{a as $,b as C}from"./vueuse-Bs6x0GOr.js";import{$ as s,g as V,d as x,b as E,a as O,p as B,r as q,s as j,t as A,_ as G}from"./index-Cu_YpYgE.js";import{b as P}from"./vue-router-DgSFFxGk.js";import"./unocss-BkcBwv3F.js";import"./ofetch-CwKPICM-.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-CTxECtaK.js";import"./jridgewell-CS0TOL6_.js";import"./ajv-DVT_ztRr.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./ajv-keywords-fgJOexQU.js";import"./uuid-random-C5LgB_p5.js";import"./iconify-DZNnka9g.js";import"./unhead-12oOAFTY.js";import"./hookable-B8xFkYCm.js";import"./vue3-sfc-loader-CoUr1SK8.js";import"./vue-Cow_pXkh.js";const H=I({__name:"MultiView",setup(R,{expose:v}){v();const a=d([]),o=P(),l=f(()=>Object.fromEntries(s.value.map(e=>[e.id,V(e)]))),_=({id:e})=>l.value[e],t=f(()=>new Map(s.value.map(({id:e})=>[e,!1]))),n=d(new Map(t.value)),h=()=>{var e,r;if(!B.value&&A.value&&s.value.length){const{scrollX:u,scrollY:z}=window,[p]=s.value,{root:M}=p,{$children:[{id:D}]=[{}]}=M,F=!Math.floor(u)&&!Math.floor(z)&&p.id===D?M.id:((e=[...t.value.entries()].find(([,m])=>m))==null?void 0:e[0])??((r=[...n.value.entries()].find(([,m])=>m))==null?void 0:r[0])??p.id;j.value=!1,o.push({name:F}).catch(()=>{})}};$(window,{behavior:E,onStop:h});const b=([{isIntersecting:e,target:{id:r}}])=>{console.log({id:r,isIntersecting:e}),n.value=new Map(t.value),t.value.set(r,e)},i=[],c=()=>{i.forEach(e=>{e()}),i.length=0};k(a,async e=>{c(),await new Promise(r=>{setTimeout(r,1e3)}),e.forEach(r=>{const{stop:u}=C(r,b,{threshold:O});i.push(u)})},{deep:x}),y(()=>{c()});const w={refs:a,router:o,templates:l,template:_,intersecting:t,$intersecting:n,onStop:h,callback:b,stops:i,clearStops:c,get useIntersectionObserver(){return C},get useScroll(){return $},get behavior(){return E},get deep(){return x},get threshold(){return O},computed:f,onUnmounted:y,ref:d,watch:k,get useRouter(){return P},get $siblings(){return s},get getAsyncComponent(){return V},get paused(){return B},get resolve(){return q},get scroll(){return j},get that(){return A}};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),J=["id","role"];function K(R,v,a,o,l,_){return g(!0),S(L,null,T(o.$siblings,t=>{var n;return g(),S("div",{class:U(t.class),id:t.id,key:t.id,role:t.id===((n=o.that)==null?void 0:n.id)?"main":void 0,ref_for:!0,ref:"refs","un-cloak":""},[(g(),X(Y(o.template(t)),{id:t.id,onVnodeMounted:()=>{console.log("resolve",t),o.resolve(t)}},null,8,["id","onVnodeMounted"]))],10,J)}),128)}const _e=G(H,[["render",K],["__file","MultiView.vue"]]);export{_e as default};