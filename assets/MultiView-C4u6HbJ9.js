import{defineComponent as D,ref as m,computed as d,watch as M,openBlock as f,createElementBlock as k,Fragment as F,renderList as L,normalizeClass as P,createBlock as X,resolveDynamicComponent as Y}from"vue";import{a as $,b as y}from"./vueuse-Bs6x0GOr.js";import{$ as s,g as C,d as S,b as V,a as x,p as E,r as q,s as O,t as B,_ as G}from"./index-B5AophFn.js";import{b as j}from"./vue-router-DgSFFxGk.js";import"./unocss-BkcBwv3F.js";import"./ofetch-CwKPICM-.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-CTxECtaK.js";import"./jridgewell-CS0TOL6_.js";import"./ajv-DVT_ztRr.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./ajv-keywords-fgJOexQU.js";import"./uuid-random-C5LgB_p5.js";import"./iconify-DZNnka9g.js";import"./unhead-12oOAFTY.js";import"./hookable-B8xFkYCm.js";import"./vue3-sfc-loader-CoUr1SK8.js";import"./vue-Cow_pXkh.js";const H=D({__name:"MultiView",setup(A,{expose:g}){g();const a=m([]),o=j(),l=d(()=>Object.fromEntries(s.value.map(t=>[t.id,C(t)]))),v=({id:t})=>l.value[t],e=d(()=>new Map(s.value.map(({id:t})=>[t,!1]))),n=m(new Map(e.value)),_=()=>{var t,r;if(console.log({$intersecting:n,intersecting:e}),!E.value&&B.value&&s.value.length){const{scrollX:c,scrollY:I}=window,[u]=s.value,{root:w}=u,{$children:[{id:R}]=[{}]}=w,z=!Math.floor(c)&&!Math.floor(I)&&u.id===R?w.id:((t=[...e.value.entries()].find(([,p])=>p))==null?void 0:t[0])??((r=[...n.value.entries()].find(([,p])=>p))==null?void 0:r[0])??u.id;O.value=!1,o.push({name:z}).catch(()=>{})}};$(window,{behavior:V,onStop:_});const h=([{isIntersecting:t,target:{id:r}}])=>{n.value=new Map(e.value),e.value.set(r,t)},i=[];M(a,t=>{i.forEach(r=>{r()}),i.length=0,t.forEach(r=>{const{stop:c}=y(r,h,{threshold:x});i.push(c)})},{deep:S});const b={refs:a,router:o,templates:l,template:v,intersecting:e,$intersecting:n,onStop:_,callback:h,stops:i,get useIntersectionObserver(){return y},get useScroll(){return $},get behavior(){return V},get deep(){return S},get threshold(){return x},computed:d,ref:m,watch:M,get useRouter(){return j},get $siblings(){return s},get getAsyncComponent(){return C},get paused(){return E},get resolve(){return q},get scroll(){return O},get that(){return B}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),J=["id","role"];function K(A,g,a,o,l,v){return f(!0),k(F,null,L(o.$siblings,e=>{var n;return f(),k("div",{class:P(e.class),id:e.id,key:e.id,role:e.id===((n=o.that)==null?void 0:n.id)?"main":void 0,ref_for:!0,ref:"refs","un-cloak":""},[(f(),X(Y(o.template(e)),{id:e.id,onVnodeMounted:()=>{o.resolve(e)}},null,8,["id","onVnodeMounted"]))],10,J)}),128)}const ge=G(H,[["render",K],["__file","MultiView.vue"]]);export{ge as default};
