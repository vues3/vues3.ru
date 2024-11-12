import{shallowRef as mt,inject as z,unref as K,shallowReactive as gt,nextTick as vt,defineComponent as Ge,reactive as yt,computed as N,h as Ke,provide as fe,ref as Rt,watch as qe,getCurrentInstance as Et,watchEffect as _t}from"vue";import{s as bt}from"./vue-Cow_pXkh.js";/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $=typeof document<"u";function Ue(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ue(e.default)}const C=Object.assign;function de(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const X=()=>{},I=Array.isArray,Fe=/#/g,Pt=/&/g,Ct=/\//g,kt=/=/g,St=/\?/g,We=/\+/g,At=/%5B/g,xt=/%5D/g,Qe=/%5E/g,Ot=/%60/g,Ye=/%7B/g,It=/%7C/g,Xe=/%7D/g,Tt=/%20/g;function Re(e){return encodeURI(""+e).replace(It,"|").replace(At,"[").replace(xt,"]")}function Mt(e){return Re(e).replace(Ye,"{").replace(Xe,"}").replace(Qe,"^")}function me(e){return Re(e).replace(We,"%2B").replace(Tt,"+").replace(Fe,"%23").replace(Pt,"%26").replace(Ot,"`").replace(Ye,"{").replace(Xe,"}").replace(Qe,"^")}function Nt(e){return me(e).replace(kt,"%3D")}function Lt(e){return Re(e).replace(Fe,"%23").replace(St,"%3F")}function $t(e){return e==null?"":Lt(e).replace(Ct,"%2F")}function q(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const jt=/\/$/,Bt=e=>e.replace(jt,"");function he(e,t,n="/"){let r,o={},f="",h="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),f=t.slice(c+1,m>-1?m:t.length),o=e(f)),m>-1&&(r=r||t.slice(0,m),h=t.slice(m,t.length)),r=zt(r??t,n),{fullPath:r+(f&&"?")+f+h,path:r,query:o,hash:q(h)}}function Dt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ht(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&H(t.matched[r],n.matched[o])&&Ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function H(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vt(e[n],t[n]))return!1;return!0}function Vt(e,t){return I(e)?Ae(e,t):I(t)?Ae(t,e):e===t}function Ae(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function zt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let f=n.length-1,h,m;for(h=0;h<r.length;h++)if(m=r[h],m!==".")if(m==="..")f>1&&f--;else break;return n.slice(0,f).join("/")+"/"+r.slice(h).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var J;(function(e){e.pop="pop",e.push="push"})(J||(J={}));var Z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Z||(Z={}));function Gt(e){if(!e)if($){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bt(e)}const Kt=/^[^#]+#/;function qt(e,t){return e.replace(Kt,"#")+t}function Ut(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const re=()=>({left:window.scrollX,top:window.scrollY});function Ft(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ut(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xe(e,t){return(history.state?history.state.position-t:-1)+e}const ge=new Map;function Wt(e,t){ge.set(e,t)}function Qt(e){const t=ge.get(e);return ge.delete(e),t}let Yt=()=>location.protocol+"//"+location.host;function Je(e,t){const{pathname:n,search:r,hash:o}=t,f=e.indexOf("#");if(f>-1){let m=o.includes(e.slice(f))?e.slice(f).length:1,c=o.slice(m);return c[0]!=="/"&&(c="/"+c),Se(c,"")}return Se(n,e)+r+o}function Xt(e,t,n,r){let o=[],f=[],h=null;const m=({state:a})=>{const u=Je(e,location),R=n.value,_=t.value;let P=0;if(a){if(n.value=u,t.value=a,h&&h===R){h=null;return}P=_?a.position-_.position:0}else r(u);o.forEach(S=>{S(n.value,R,{delta:P,type:J.pop,direction:P?P>0?Z.forward:Z.back:Z.unknown})})};function c(){h=n.value}function d(a){o.push(a);const u=()=>{const R=o.indexOf(a);R>-1&&o.splice(R,1)};return f.push(u),u}function l(){const{history:a}=window;a.state&&a.replaceState(C({},a.state,{scroll:re()}),"")}function s(){for(const a of f)a();f=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:d,destroy:s}}function Oe(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?re():null}}function Zt(e){const{history:t,location:n}=window,r={value:Je(e,n)},o={value:t.state};o.value||f(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function f(c,d,l){const s=e.indexOf("#"),a=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+c:Yt()+e+c;try{t[l?"replaceState":"pushState"](d,"",a),o.value=d}catch(u){console.error(u),n[l?"replace":"assign"](a)}}function h(c,d){const l=C({},t.state,Oe(o.value.back,c,o.value.forward,!0),d,{position:o.value.position});f(c,l,!0),r.value=c}function m(c,d){const l=C({},o.value,t.state,{forward:c,scroll:re()});f(l.current,l,!0);const s=C({},Oe(r.value,c,null),{position:l.position+1},d);f(c,s,!1),r.value=c}return{location:r,state:o,push:m,replace:h}}function jn(e){e=Gt(e);const t=Zt(e),n=Xt(e,t.state,t.location,t.replace);function r(f,h=!0){h||n.pauseListeners(),history.go(f)}const o=C({location:"",base:e,go:r,createHref:qt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function et(e){return typeof e=="string"||e&&typeof e=="object"}function tt(e){return typeof e=="string"||typeof e=="symbol"}const nt=Symbol("");var Ie;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ie||(Ie={}));function U(e,t){return C(new Error,{type:e,[nt]:!0},t)}function L(e,t){return e instanceof Error&&nt in e&&(t==null||!!(e.type&t))}const Te="[^/]+?",Jt={sensitive:!1,strict:!1,start:!0,end:!0},en=/[.+*?^${}()[\]/\\]/g;function tn(e,t){const n=C({},Jt,t),r=[];let o=n.start?"^":"";const f=[];for(const d of e){const l=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let s=0;s<d.length;s++){const a=d[s];let u=40+(n.sensitive?.25:0);if(a.type===0)s||(o+="/"),o+=a.value.replace(en,"\\$&"),u+=40;else if(a.type===1){const{value:R,repeatable:_,optional:P,regexp:S}=a;f.push({name:R,repeatable:_,optional:P});const b=S||Te;if(b!==Te){u+=10;try{new RegExp(`(${b})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${b}): `+M.message)}}let w=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;s||(w=P&&d.length<2?`(?:/${w})`:"/"+w),P&&(w+="?"),o+=w,u+=20,P&&(u+=-8),_&&(u+=-20),b===".*"&&(u+=-50)}l.push(u)}r.push(l)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function m(d){const l=d.match(h),s={};if(!l)return null;for(let a=1;a<l.length;a++){const u=l[a]||"",R=f[a-1];s[R.name]=u&&R.repeatable?u.split("/"):u}return s}function c(d){let l="",s=!1;for(const a of e){(!s||!l.endsWith("/"))&&(l+="/"),s=!1;for(const u of a)if(u.type===0)l+=u.value;else if(u.type===1){const{value:R,repeatable:_,optional:P}=u,S=R in d?d[R]:"";if(I(S)&&!_)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const b=I(S)?S.join("/"):S;if(!b)if(P)a.length<2&&(l.endsWith("/")?l=l.slice(0,-1):s=!0);else throw new Error(`Missing required param "${R}"`);l+=b}}return l||"/"}return{re:h,score:r,keys:f,parse:m,stringify:c}}function nn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function rt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const f=nn(r[n],o[n]);if(f)return f;n++}if(Math.abs(o.length-r.length)===1){if(Me(r))return 1;if(Me(o))return-1}return o.length-r.length}function Me(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const rn={type:0,value:""},on=/[a-zA-Z0-9_]/;function sn(e){if(!e)return[[]];if(e==="/")return[[rn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${d}": ${u}`)}let n=0,r=n;const o=[];let f;function h(){f&&o.push(f),f=[]}let m=0,c,d="",l="";function s(){d&&(n===0?f.push({type:0,value:d}):n===1||n===2||n===3?(f.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),f.push({type:1,value:d,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function a(){d+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(d&&s(),h()):c===":"?(s(),n=1):a();break;case 4:a(),n=r;break;case 1:c==="("?n=2:on.test(c)?a():(s(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:s(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),s(),h(),o}function an(e,t,n){const r=tn(sn(e.path),n),o=C(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function cn(e,t){const n=[],r=new Map;t=$e({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function f(s,a,u){const R=!u,_=ln(s);_.aliasOf=u&&u.record;const P=$e(t,s),S=[_];if("alias"in s){const M=typeof s.alias=="string"?[s.alias]:s.alias;for(const V of M)S.push(C({},_,{components:u?u.record.components:_.components,path:V,aliasOf:u?u.record:_}))}let b,w;for(const M of S){const{path:V}=M;if(a&&V[0]!=="/"){const j=a.record.path,T=j[j.length-1]==="/"?"":"/";M.path=a.record.path+(V&&T+V)}if(b=an(M,a,P),u?u.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),R&&s.name&&!Le(b)&&h(s.name)),ot(b)&&c(b),_.children){const j=_.children;for(let T=0;T<j.length;T++)f(j[T],b,u&&u.children[T])}u=u||b}return w?()=>{h(w)}:X}function h(s){if(tt(s)){const a=r.get(s);a&&(r.delete(s),n.splice(n.indexOf(a),1),a.children.forEach(h),a.alias.forEach(h))}else{const a=n.indexOf(s);a>-1&&(n.splice(a,1),s.record.name&&r.delete(s.record.name),s.children.forEach(h),s.alias.forEach(h))}}function m(){return n}function c(s){const a=dn(s,n);n.splice(a,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function d(s,a){let u,R={},_,P;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw U(1,{location:s});P=u.record.name,R=C(Ne(a.params,u.keys.filter(w=>!w.optional).concat(u.parent?u.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),s.params&&Ne(s.params,u.keys.map(w=>w.name))),_=u.stringify(R)}else if(s.path!=null)_=s.path,u=n.find(w=>w.re.test(_)),u&&(R=u.parse(_),P=u.record.name);else{if(u=a.name?r.get(a.name):n.find(w=>w.re.test(a.path)),!u)throw U(1,{location:s,currentLocation:a});P=u.record.name,R=C({},a.params,s.params),_=u.stringify(R)}const S=[];let b=u;for(;b;)S.unshift(b.record),b=b.parent;return{name:P,path:_,params:R,matched:S,meta:fn(S)}}e.forEach(s=>f(s));function l(){n.length=0,r.clear()}return{addRoute:f,resolve:d,removeRoute:h,clearRoutes:l,getRoutes:m,getRecordMatcher:o}}function Ne(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ln(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:un(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function un(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fn(e){return e.reduce((t,n)=>C(t,n.meta),{})}function $e(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function dn(e,t){let n=0,r=t.length;for(;n!==r;){const f=n+r>>1;rt(e,t[f])<0?r=f:n=f+1}const o=hn(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function hn(e){let t=e;for(;t=t.parent;)if(ot(t)&&rt(e,t)===0)return t}function ot({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const f=r[o].replace(We," "),h=f.indexOf("="),m=q(h<0?f:f.slice(0,h)),c=h<0?null:q(f.slice(h+1));if(m in t){let d=t[m];I(d)||(d=t[m]=[d]),d.push(c)}else t[m]=c}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=Nt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(f=>f&&me(f)):[r&&me(r)]).forEach(f=>{f!==void 0&&(t+=(t.length?"&":"")+n,f!=null&&(t+="="+f))})}return t}function mn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const gn=Symbol(""),Be=Symbol(""),oe=Symbol(""),Ee=Symbol(""),ve=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function D(e,t,n,r,o,f=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((m,c)=>{const d=a=>{a===!1?c(U(4,{from:n,to:t})):a instanceof Error?c(a):et(a)?c(U(2,{from:t,to:a})):(h&&r.enterCallbacks[o]===h&&typeof a=="function"&&h.push(a),m())},l=f(()=>e.call(r&&r.instances[o],t,n,d));let s=Promise.resolve(l);e.length<3&&(s=s.then(d)),s.catch(a=>c(a))})}function pe(e,t,n,r,o=f=>f()){const f=[];for(const h of e)for(const m in h.components){let c=h.components[m];if(!(t!=="beforeRouteEnter"&&!h.instances[m]))if(Ue(c)){const l=(c.__vccOpts||c)[t];l&&f.push(D(l,n,r,h,m,o))}else{let d=c();f.push(()=>d.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${m}" at "${h.path}"`);const s=wt(l)?l.default:l;h.mods[m]=l,h.components[m]=s;const u=(s.__vccOpts||s)[t];return u&&D(u,n,r,h,m,o)()}))}}return f}function De(e){const t=z(oe),n=z(Ee),r=N(()=>{const c=K(e.to);return t.resolve(c)}),o=N(()=>{const{matched:c}=r.value,{length:d}=c,l=c[d-1],s=n.matched;if(!l||!s.length)return-1;const a=s.findIndex(H.bind(null,l));if(a>-1)return a;const u=He(c[d-2]);return d>1&&He(l)===u&&s[s.length-1].path!==u?s.findIndex(H.bind(null,c[d-2])):a}),f=N(()=>o.value>-1&&En(n.params,r.value.params)),h=N(()=>o.value>-1&&o.value===n.matched.length-1&&Ze(n.params,r.value.params));function m(c={}){return Rn(c)?t[K(e.replace)?"replace":"push"](K(e.to)).catch(X):Promise.resolve()}if($){const c=Et();if(c){const d={route:r.value,isActive:f.value,isExactActive:h.value,error:null};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(d),_t(()=>{d.route=r.value,d.isActive=f.value,d.isExactActive=h.value,d.error=et(K(e.to))?null:'Invalid "to" value'},{flush:"post"})}}return{route:r,href:N(()=>r.value.href),isActive:f,isExactActive:h,navigate:m}}const vn=Ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:De,setup(e,{slots:t}){const n=yt(De(e)),{options:r}=z(oe),o=N(()=>({[Ve(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ve(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const f=t.default&&t.default(n);return e.custom?f:Ke("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},f)}}}),yn=vn;function Rn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function En(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((f,h)=>f!==o[h]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ve=(e,t,n)=>e??t??n,_n=Ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(ve),o=N(()=>e.route||r.value),f=z(Be,0),h=N(()=>{let d=K(f);const{matched:l}=o.value;let s;for(;(s=l[d])&&!s.components;)d++;return d}),m=N(()=>o.value.matched[h.value]);fe(Be,N(()=>h.value+1)),fe(gn,m),fe(ve,o);const c=Rt();return qe(()=>[c.value,m.value,e.name],([d,l,s],[a,u,R])=>{l&&(l.instances[s]=d,u&&u!==l&&d&&d===a&&(l.leaveGuards.size||(l.leaveGuards=u.leaveGuards),l.updateGuards.size||(l.updateGuards=u.updateGuards))),d&&l&&(!u||!H(l,u)||!a)&&(l.enterCallbacks[s]||[]).forEach(_=>_(d))},{flush:"post"}),()=>{const d=o.value,l=e.name,s=m.value,a=s&&s.components[l];if(!a)return ze(n.default,{Component:a,route:d});const u=s.props[l],R=u?u===!0?d.params:typeof u=="function"?u(d):u:null,P=Ke(a,C({},R,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(s.instances[l]=null)},ref:c}));if($&&P.ref){const S={depth:h.value,name:s.name,path:s.path,meta:s.meta};(I(P.ref)?P.ref.map(w=>w.i):[P.ref.i]).forEach(w=>{w.__vrv_devtools=S})}return ze(n.default,{Component:P,route:d})||P}}});function ze(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const bn=_n;function Y(e,t){const n=C({},e,{matched:e.matched.map(r=>Mn(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function ne(e){return{_custom:{display:e}}}let wn=0;function Pn(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=wn++;bt({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((l,s)=>{l.instanceData&&l.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Y(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:l,componentInstance:s})=>{if(s.__vrv_devtools){const a=s.__vrv_devtools;l.tags.push({label:(a.name?`${a.name.toString()}: `:"")+a.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:st})}I(s.__vrl_devtools)&&(s.__devtoolsApi=o,s.__vrl_devtools.forEach(a=>{let u=a.route.path,R=ct,_="",P=0;a.error?(u=a.error,R=xn,P=On):a.isExactActive?(R=it,_="This is exactly active"):a.isActive&&(R=at,_="This link is active"),l.tags.push({label:u,textColor:P,tooltip:_,backgroundColor:R})}))}),qe(t.currentRoute,()=>{c(),o.notifyComponentUpdate(),o.sendInspectorTree(m),o.sendInspectorState(m)});const f="router:navigations:"+r;o.addTimelineLayer({id:f,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((l,s)=>{o.addTimelineEvent({layerId:f,event:{title:"Error during Navigation",subtitle:s.fullPath,logType:"error",time:o.now(),data:{error:l},groupId:s.meta.__navigationId}})});let h=0;t.beforeEach((l,s)=>{const a={guard:ne("beforeEach"),from:Y(s,"Current Location during this navigation"),to:Y(l,"Target location")};Object.defineProperty(l.meta,"__navigationId",{value:h++}),o.addTimelineEvent({layerId:f,event:{time:o.now(),title:"Start of navigation",subtitle:l.fullPath,data:a,groupId:l.meta.__navigationId}})}),t.afterEach((l,s,a)=>{const u={guard:ne("afterEach")};a?(u.failure={_custom:{type:Error,readOnly:!0,display:a?a.message:"",tooltip:"Navigation Failure",value:a}},u.status=ne("❌")):u.status=ne("✅"),u.from=Y(s,"Current Location during this navigation"),u.to=Y(l,"Target location"),o.addTimelineEvent({layerId:f,event:{title:"End of navigation",subtitle:l.fullPath,time:o.now(),data:u,logType:a?"warning":"default",groupId:l.meta.__navigationId}})});const m="router-inspector:"+r;o.addInspector({id:m,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!d)return;const l=d;let s=n.getRoutes().filter(a=>!a.parent||!a.parent.record.components);s.forEach(ft),l.filter&&(s=s.filter(a=>ye(a,l.filter.toLowerCase()))),s.forEach(a=>ut(a,t.currentRoute.value)),l.rootNodes=s.map(lt)}let d;o.on.getInspectorTree(l=>{d=l,l.app===e&&l.inspectorId===m&&c()}),o.on.getInspectorState(l=>{if(l.app===e&&l.inspectorId===m){const a=n.getRoutes().find(u=>u.record.__vd_id===l.nodeId);a&&(l.state={options:kn(a)})}}),o.sendInspectorTree(m),o.sendInspectorState(m)})}function Cn(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function kn(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${Cn(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const st=15485081,at=2450411,it=8702998,Sn=2282478,ct=16486972,An=6710886,xn=16704226,On=12131356;function lt(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Sn}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:ct}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:st}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:it}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:at}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:An});let r=n.__vd_id;return r==null&&(r=String(In++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(lt)}}let In=0;const Tn=/^\/(.*)\/([a-z]*)$/;function ut(e,t){const n=t.matched.length&&H(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>H(r,e.record))),e.children.forEach(r=>ut(r,t))}function ft(e){e.__vd_match=!1,e.children.forEach(ft)}function ye(e,t){const n=String(e.re).match(Tn);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(h=>ye(h,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),f=q(o);return!t.startsWith("/")&&(f.includes(t)||o.includes(t))||f.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(h=>ye(h,t))}function Mn(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function Bn(e){const t=cn(e.routes,e),n=e.parseQuery||pn,r=e.stringifyQuery||je,o=e.history,f=Q(),h=Q(),m=Q(),c=mt(B);let d=B;$&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=de.bind(null,i=>""+i),s=de.bind(null,$t),a=de.bind(null,q);function u(i,g){let p,v;return tt(i)?(p=t.getRecordMatcher(i),v=g):v=i,t.addRoute(v,p)}function R(i){const g=t.getRecordMatcher(i);g&&t.removeRoute(g)}function _(){return t.getRoutes().map(i=>i.record)}function P(i){return!!t.getRecordMatcher(i)}function S(i,g){if(g=C({},g||c.value),typeof i=="string"){const y=he(n,i,g.path),x=t.resolve({path:y.path},g),W=o.createHref(y.fullPath);return C(y,x,{params:a(x.params),hash:q(y.hash),redirectedFrom:void 0,href:W})}let p;if(i.path!=null)p=C({},i,{path:he(n,i.path,g.path).path});else{const y=C({},i.params);for(const x in y)y[x]==null&&delete y[x];p=C({},i,{params:s(y)}),g.params=s(g.params)}const v=t.resolve(p,g),k=i.hash||"";v.params=l(a(v.params));const A=Dt(r,C({},i,{hash:Mt(k),path:v.path})),E=o.createHref(A);return C({fullPath:A,hash:k,query:r===je?mn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:E})}function b(i){return typeof i=="string"?he(n,i,c.value.path):C({},i)}function w(i,g){if(d!==i)return U(8,{from:g,to:i})}function M(i){return T(i)}function V(i){return M(C(b(i),{replace:!0}))}function j(i){const g=i.matched[i.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(i):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=b(v):{path:v},v.params={}),C({query:i.query,hash:i.hash,params:v.path!=null?{}:i.params},v)}}function T(i,g){const p=d=S(i),v=c.value,k=i.state,A=i.force,E=i.replace===!0,y=j(p);if(y)return T(C(b(y),{state:typeof y=="object"?C({},k,y.state):k,force:A,replace:E}),g||p);const x=p;x.redirectedFrom=g;let W;return!A&&Ht(r,v,p)&&(W=U(16,{to:x,from:v}),Ce(v,v,!0,!1)),(W?Promise.resolve(W):_e(x,v)).catch(O=>L(O)?L(O,2)?O:ce(O):ie(O,x,v)).then(O=>{if(O){if(L(O,2))return T(C({replace:E},b(O.to),{state:typeof O.to=="object"?C({},k,O.to.state):k,force:A}),g||x)}else O=we(x,v,!0,E,k);return be(x,v,O),O})}function dt(i,g){const p=w(i,g);return p?Promise.reject(p):Promise.resolve()}function se(i){const g=te.values().next().value;return g&&typeof g.runWithContext=="function"?g.runWithContext(i):i()}function _e(i,g){let p;const[v,k,A]=Nn(i,g);p=pe(v.reverse(),"beforeRouteLeave",i,g);for(const y of v)y.leaveGuards.forEach(x=>{p.push(D(x,i,g))});const E=dt.bind(null,i,g);return p.push(E),G(p).then(()=>{p=[];for(const y of f.list())p.push(D(y,i,g));return p.push(E),G(p)}).then(()=>{p=pe(k,"beforeRouteUpdate",i,g);for(const y of k)y.updateGuards.forEach(x=>{p.push(D(x,i,g))});return p.push(E),G(p)}).then(()=>{p=[];for(const y of A)if(y.beforeEnter)if(I(y.beforeEnter))for(const x of y.beforeEnter)p.push(D(x,i,g));else p.push(D(y.beforeEnter,i,g));return p.push(E),G(p)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),p=pe(A,"beforeRouteEnter",i,g,se),p.push(E),G(p))).then(()=>{p=[];for(const y of h.list())p.push(D(y,i,g));return p.push(E),G(p)}).catch(y=>L(y,8)?y:Promise.reject(y))}function be(i,g,p){m.list().forEach(v=>se(()=>v(i,g,p)))}function we(i,g,p,v,k){const A=w(i,g);if(A)return A;const E=g===B,y=$?history.state:{};p&&(v||E?o.replace(i.fullPath,C({scroll:E&&y&&y.scroll},k)):o.push(i.fullPath,k)),c.value=i,Ce(i,g,p,E),ce()}let F;function ht(){F||(F=o.listen((i,g,p)=>{if(!ke.listening)return;const v=S(i),k=j(v);if(k){T(C(k,{replace:!0}),v).catch(X);return}d=v;const A=c.value;$&&Wt(xe(A.fullPath,p.delta),re()),_e(v,A).catch(E=>L(E,12)?E:L(E,2)?(T(E.to,v).then(y=>{L(y,20)&&!p.delta&&p.type===J.pop&&o.go(-1,!1)}).catch(X),Promise.reject()):(p.delta&&o.go(-p.delta,!1),ie(E,v,A))).then(E=>{E=E||we(v,A,!1),E&&(p.delta&&!L(E,8)?o.go(-p.delta,!1):p.type===J.pop&&L(E,20)&&o.go(-1,!1)),be(v,A,E)}).catch(X)}))}let ae=Q(),Pe=Q(),ee;function ie(i,g,p){ce(i);const v=Pe.list();return v.length?v.forEach(k=>k(i,g,p)):console.error(i),Promise.reject(i)}function pt(){return ee&&c.value!==B?Promise.resolve():new Promise((i,g)=>{ae.add([i,g])})}function ce(i){return ee||(ee=!i,ht(),ae.list().forEach(([g,p])=>i?p(i):g()),ae.reset()),i}function Ce(i,g,p,v){const{scrollBehavior:k}=e;if(!$||!k)return Promise.resolve();const A=!p&&Qt(xe(i.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return vt().then(()=>k(i,g,A)).then(E=>E&&Ft(E)).catch(E=>ie(E,i,g))}const le=i=>o.go(i);let ue;const te=new Set,ke={currentRoute:c,listening:!0,addRoute:u,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:_,resolve:S,options:e,push:M,replace:V,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:f.add,beforeResolve:h.add,afterEach:m.add,onError:Pe.add,isReady:pt,install(i){const g=this;i.component("RouterLink",yn),i.component("RouterView",bn),i.config.globalProperties.$router=g,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>K(c)}),$&&!ue&&c.value===B&&(ue=!0,M(o.location).catch(k=>{}));const p={};for(const k in B)Object.defineProperty(p,k,{get:()=>c.value[k],enumerable:!0});i.provide(oe,g),i.provide(Ee,gt(p)),i.provide(ve,c);const v=i.unmount;te.add(i),i.unmount=function(){te.delete(i),te.size<1&&(d=B,F&&F(),F=null,c.value=B,ue=!1,ee=!1),v()},$&&Pn(i,g,t)}};function G(i){return i.reduce((g,p)=>g.then(()=>se(p)),Promise.resolve())}return ke}function Nn(e,t){const n=[],r=[],o=[],f=Math.max(t.matched.length,e.matched.length);for(let h=0;h<f;h++){const m=t.matched[h];m&&(e.matched.find(d=>H(d,m))?r.push(m):n.push(m));const c=e.matched[h];c&&(t.matched.find(d=>H(d,c))||o.push(c))}return[n,r,o]}function Dn(){return z(oe)}function Hn(e){return z(Ee)}export{Bn as a,Dn as b,jn as c,Hn as u};
