import{version as pe,nextTick as ue,unref as J,inject as de,ref as j,watchEffect as Z,watch as ye,getCurrentInstance as ge,onBeforeUnmount as z,onDeactivated as me,onActivated as he,defineComponent as be}from"vue";import{c as ve}from"./hookable-B8xFkYCm.js";const ke=new Set(["title","titleTemplate","script","style","noscript"]),C=new Set(["base","meta","link","style","script","noscript"]),Te=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),_e=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),X=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Pe=typeof window<"u";function x(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function L(e){if(e._h)return e._h;if(e._d)return x(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return x(t)}function Q(e,t){const n=[],r=t.resolveKeyData||(s=>s.key),o=t.resolveValueData||(s=>s.value);for(const[s,i]of Object.entries(e))n.push(...(Array.isArray(i)?i:[i]).map(a=>{const c={key:s,value:a},f=o(c);return typeof f=="object"?Q(f,t):Array.isArray(f)?f:{[typeof t.key=="function"?t.key(c):t.key]:r(c),[typeof t.value=="function"?t.value(c):t.value]:f}}).flat());return n}function Y(e,t){return Object.entries(e).map(([n,r])=>{if(typeof r=="object"&&(r=Y(r,t)),t.resolve){const o=t.resolve({key:n,value:r});if(typeof o<"u")return o}return typeof r=="number"&&(r=r.toString()),typeof r=="string"&&t.wrapValue&&(r=r.replace(new RegExp(t.wrapValue,"g"),`\\${t.wrapValue}`),r=`${t.wrapValue}${r}${t.wrapValue}`),`${n}${t.keyValueSeparator||""}${r}`}).join(t.entrySeparator||"")}const h=e=>({keyValue:e,metaKey:"property"}),O=e=>({keyValue:e}),D={appleItunesApp:{unpack:{entrySeparator:", ",resolve({key:e,value:t}){return`${v(e)}=${t}`}}},articleExpirationTime:h("article:expiration_time"),articleModifiedTime:h("article:modified_time"),articlePublishedTime:h("article:published_time"),bookReleaseDate:h("book:release_date"),charset:{metaKey:"charset"},contentSecurityPolicy:{unpack:{entrySeparator:"; ",resolve({key:e,value:t}){return`${v(e)} ${t}`}},metaKey:"http-equiv"},contentType:{metaKey:"http-equiv"},defaultStyle:{metaKey:"http-equiv"},fbAppId:h("fb:app_id"),msapplicationConfig:O("msapplication-Config"),msapplicationTileColor:O("msapplication-TileColor"),msapplicationTileImage:O("msapplication-TileImage"),ogAudioSecureUrl:h("og:audio:secure_url"),ogAudioUrl:h("og:audio"),ogImageSecureUrl:h("og:image:secure_url"),ogImageUrl:h("og:image"),ogSiteName:h("og:site_name"),ogVideoSecureUrl:h("og:video:secure_url"),ogVideoUrl:h("og:video"),profileFirstName:h("profile:first_name"),profileLastName:h("profile:last_name"),profileUsername:h("profile:username"),refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve({key:e,value:t}){if(e==="seconds")return`${t}`}}},robots:{unpack:{entrySeparator:", ",resolve({key:e,value:t}){return typeof t=="boolean"?`${v(e)}`:`${v(e)}:${t}`}}},xUaCompatible:{metaKey:"http-equiv"}},ee=new Set(["og","book","article","profile"]);function te(e){var r;const t=v(e),n=t.indexOf(":");return ee.has(t.substring(0,n))?"property":((r=D[e])==null?void 0:r.metaKey)||"name"}function we(e){var t;return((t=D[e])==null?void 0:t.keyValue)||v(e)}function v(e){const t=e.replace(/([A-Z])/g,"-$1").toLowerCase(),n=t.indexOf("-"),r=t.substring(0,n);return r==="twitter"||ee.has(r)?e.replace(/([A-Z])/g,":$1").toLowerCase():t}function E(e){if(Array.isArray(e))return e.map(n=>E(n));if(typeof e!="object"||Array.isArray(e))return e;const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[v(n)]=E(e[n]));return t}function Ae(e,t){const n=D[t];return t==="refresh"?`${e.seconds};url=${e.url}`:Y(E(e),{keyValueSeparator:"=",entrySeparator:", ",resolve({value:r,key:o}){if(r===null)return"";if(typeof r=="boolean")return`${o}`},...n==null?void 0:n.unpack})}const ne=new Set(["og:image","og:video","og:audio","twitter:image"]);function re(e){const t={};for(const n in e){if(!Object.prototype.hasOwnProperty.call(e,n))continue;const r=e[n];String(r)!=="false"&&n&&(t[n]=r)}return t}function I(e,t){const n=re(t),r=v(e),o=te(r);if(ne.has(r)){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[`${e}${i==="url"?"":`${i[0].toUpperCase()}${i.slice(1)}`}`]=n[i]);return U(s).sort((i,a)=>{var c,f;return(((c=i[o])==null?void 0:c.length)||0)-(((f=a[o])==null?void 0:f.length)||0)})}return[{[o]:r,...n}]}function U(e){const t=[],n={};for(const o in e){if(!Object.prototype.hasOwnProperty.call(e,o))continue;const s=e[o];if(!Array.isArray(s)){if(typeof s=="object"&&s){if(ne.has(v(o))){t.push(...I(o,s));continue}n[o]=re(s)}else n[o]=s;continue}for(const i of s)t.push(...typeof i=="string"?U({[o]:i}):I(o,i))}const r=Q(n,{key({key:o}){return te(o)},value({key:o}){return o==="charset"?"charset":"content"},resolveKeyData({key:o}){return we(o)},resolveValueData({value:o,key:s}){return o===null?"_null":typeof o=="object"?Ae(o,s):typeof o=="number"?o.toString():o}});return[...t,...r].map(o=>(o.content==="_null"&&(o.content=null),o))}function He(e,t){return e instanceof Promise?e.then(t):t(e)}function K(e,t,n,r){const o=r||se(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(o instanceof Promise)return o.then(i=>K(e,t,n,i));const s={tag:e,props:o};for(const i of X){const a=s.props[i]!==void 0?s.props[i]:n[i];a!==void 0&&((!(i==="innerHTML"||i==="textContent"||i==="children")||ke.has(s.tag))&&(s[i==="children"?"innerHTML":i]=a),delete s.props[i])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(i=>({...s,props:{...s.props,content:i}})):s}function Se(e,t){var r;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,o])=>o).map(([o,s])=>e==="style"?`${o}:${s}`:o)),(r=String(Array.isArray(t)?t.join(n):t))==null?void 0:r.split(n).filter(o=>!!o.trim()).join(n)}function oe(e,t,n,r){for(let o=r;o<n.length;o+=1){const s=n[o];if(s==="class"||s==="style"){e[s]=Se(s,e[s]);continue}if(e[s]instanceof Promise)return e[s].then(i=>(e[s]=i,oe(e,t,n,o)));if(!t&&!X.has(s)){const i=String(e[s]),a=s.startsWith("data-");i==="true"||i===""?e[s]=a?"true":!0:e[s]||(a&&i==="false"?e[s]="false":delete e[s])}}}function se(e,t=!1){const n=oe(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const Ce=10;function ie(e,t,n){for(let r=n;r<t.length;r+=1){const o=t[r];if(o instanceof Promise)return o.then(s=>(t[r]=s,ie(e,t,r)));Array.isArray(o)?e.push(...o):e.push(o)}}function xe(e){const t=[],n=e.resolvedInput;for(const o in n){if(!Object.prototype.hasOwnProperty.call(n,o))continue;const s=n[o];if(!(s===void 0||!Te.has(o))){if(Array.isArray(s)){for(const i of s)t.push(K(o,i,e));continue}t.push(K(o,s,e))}}if(t.length===0)return[];const r=[];return He(ie(r,t,0),()=>r.map((o,s)=>(o._e=e._i,e.mode&&(o._m=e.mode),o._p=(e._i<<Ce)+s,o)))}const V=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),R={base:-10,title:10},W={critical:-80,high:-10,low:20};function $(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in R&&(n=R[e.tag]),t&&t in W?n+W[t]:n}const $e=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Me=["name","property","http-equiv"];function ae(e){const{props:t,tag:n}=e;if(_e.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const r of Me)if(t[r]!==void 0)return`${n}:${r}:${t[r]}`;return!1}const T="%separator";function Oe(e,t){var r;let n;if(t==="s"||t==="pageTitle")n=e.pageTitle;else if(t.includes(".")){const o=t.indexOf(".");n=(r=e[t.substring(0,o)])==null?void 0:r[t.substring(o+1)]}else n=e[t];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const je=new RegExp(`${T}(?:\\s*${T})*`,"g");function S(e,t,n){if(typeof e!="string"||!e.includes("%"))return e;let r=e;try{r=decodeURI(e)}catch{}const o=r.match(/%\w+(?:\.\w+)?/g);if(!o)return e;const s=e.includes(T);return e=e.replace(/%\w+(?:\.\w+)?/g,i=>{if(i===T||!o.includes(i))return i;const a=Oe(t,i.slice(1));return a!==void 0?a:i}).trim(),s&&(e.endsWith(T)&&(e=e.slice(0,-T.length)),e.startsWith(T)&&(e=e.slice(T.length)),e=e.replace(je,n).trim()),e}function q(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Le(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const r={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async o=>{var k;const s=(await e.resolveTags()).map(l=>({tag:l,id:C.has(l.tag)?L(l):l.tag,shouldRender:!0}));let i=e._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const l=new Set;for(const p of["body","head"]){const u=(k=n[p])==null?void 0:k.children;for(const g of u){const y=g.tagName.toLowerCase();if(!C.has(y))continue;const b={tag:y,props:await se(g.getAttributeNames().reduce((w,H)=>({...w,[H]:g.getAttribute(H)}),{})),innerHTML:g.innerHTML},_=ae(b);let m=_,A=1;for(;m&&l.has(m);)m=`${_}:${A++}`;m&&(b._d=m,l.add(m)),i.elMap[g.getAttribute("data-hid")||L(b)]=g}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function a(l,p,u){const g=`${l}:${p}`;i.sideEffects[g]=u,delete i.pendingSideEffects[g]}function c({id:l,$el:p,tag:u}){const g=u.tag.endsWith("Attrs");if(i.elMap[l]=p,g||(u.textContent&&u.textContent!==p.textContent&&(p.textContent=u.textContent),u.innerHTML&&u.innerHTML!==p.innerHTML&&(p.innerHTML=u.innerHTML),a(l,"el",()=>{var y;(y=i.elMap[l])==null||y.remove(),delete i.elMap[l]})),u._eventHandlers)for(const y in u._eventHandlers)Object.prototype.hasOwnProperty.call(u._eventHandlers,y)&&p.getAttribute(`data-${y}`)!==""&&((u.tag==="bodyAttrs"?n.defaultView:p).addEventListener(y.substring(2),u._eventHandlers[y].bind(p)),p.setAttribute(`data-${y}`,""));for(const y in u.props){if(!Object.prototype.hasOwnProperty.call(u.props,y))continue;const b=u.props[y],_=`attr:${y}`;if(y==="class"){if(!b)continue;for(const m of b.split(" "))g&&a(l,`${_}:${m}`,()=>p.classList.remove(m)),!p.classList.contains(m)&&p.classList.add(m)}else if(y==="style"){if(!b)continue;for(const m of b.split(";")){const A=m.indexOf(":"),w=m.substring(0,A).trim(),H=m.substring(A+1).trim();a(l,`${_}:${w}`,()=>{p.style.removeProperty(w)}),p.style.setProperty(w,H)}}else p.getAttribute(y)!==b&&p.setAttribute(y,b===!0?"":String(b)),g&&a(l,_,()=>p.removeAttribute(y))}}const f=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const l of s){const{tag:p,shouldRender:u,id:g}=l;if(u){if(p.tag==="title"){n.title=p.textContent;continue}l.$el=l.$el||i.elMap[g],l.$el?c(l):C.has(p.tag)&&f.push(l)}}for(const l of f){const p=l.tag.tagPosition||"head";l.$el=n.createElement(l.tag.tag),c(l),d[p]=d[p]||n.createDocumentFragment(),d[p].appendChild(l.$el)}for(const l of s)await e.hooks.callHook("dom:renderTag",l,n,a);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const l in i.pendingSideEffects)i.pendingSideEffects[l]();e._dom=i,await e.hooks.callHook("dom:rendered",{renders:s}),o()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Ee(e,t={}){const n=t.delayFn||(r=>setTimeout(r,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(r=>n(()=>Le(e,t).then(()=>{delete e._domDebouncedUpdatePromise,r()})))}function Ke(e){return t=>{var r,o;const n=((o=(r=t.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:o.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":s=>{Ee(s,e)}}}}}const De=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Ue={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=ae(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const r of e.tags){const o=(r.key?`${r.tag}:${r.key}`:r._d)||L(r),s=t[o];if(s){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&De.has(r.tag)&&(a="merge"),a==="merge"){const c=s.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),t[o].props={...c,...r.props};continue}else if(r._e===s._e){s._duped=s._duped||[],r._d=`${s._d}:${s._duped.length+1}`,s._duped.push(r);continue}else if($(r)>$(s))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&C.has(r.tag)){delete t[o];continue}t[o]=r}const n=[];for(const r in t){const o=t[r],s=o._duped;n.push(o),s&&(delete o._duped,n.push(...s))}e.tags=n,e.tags=e.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Ie=new Set(["script","link","bodyAttrs"]),Ve=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!Ie.has(n.tag))continue;const r=n.props;for(const o in r){if(o[0]!=="o"||o[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,o))continue;const s=r[o];typeof s=="function"&&(e.ssr&&V.has(o)?r[o]=`this.dataset.${o}fired = true`:delete r[o],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[o]=s)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||x(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var o,s;const r=t==null?void 0:t.dataset;if(r)for(const i in r){if(!i.endsWith("fired"))continue;const a=i.slice(0,-5);V.has(a)&&((s=(o=n._eventHandlers)==null?void 0:o[a])==null||s.call(t,new Event(a.substring(2))))}}}}),Re=new Set(["link","style","script","noscript"]),We={hooks:{"tag:normalise":({tag:e})=>{e.key&&Re.has(e.tag)&&(e.props["data-hid"]=e._h=x(e.key))}}},qe={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const r of e.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(t[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Ne={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:o}of $e){if(!n.tagPriority.startsWith(r))continue;const s=n.tagPriority.substring(r.length),i=(t=e.tags.find(a=>a._d===s))==null?void 0:t._p;if(i!==void 0){n._p=i+o;break}}e.tags.sort((n,r)=>{const o=$(n),s=$(r);return o<s?-1:o>s?1:n._p-r._p})}}},Fe={meta:"content",link:"href",htmlAttrs:"lang"},Be=["innerHTML","textContent"],Ge=e=>({hooks:{"tags:resolve":t=>{var i;const{tags:n}=t;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=t.tags.splice(a,1)[0].props,a-=1);const o=r||{},s=o.separator||"|";delete o.separator,o.pageTitle=S(o.pageTitle||((i=n.find(a=>a.tag==="title"))==null?void 0:i.textContent)||"",o,s);for(const a of n){if(a.processTemplateParams===!1)continue;const c=Fe[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=S(a.props[c],o,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const f of Be)typeof a[f]=="string"&&(a[f]=S(a[f],o,s))}e._templateParams=o,e._separator=s},"tags:afterResolve":({tags:t})=>{let n;for(let r=0;r<t.length;r+=1){const o=t[r];o.tag==="title"&&o.processTemplateParams!==!1&&(n=o)}n!=null&&n.textContent&&(n.textContent=S(n.textContent,e._templateParams,e._separator))}}}),Je={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,r;for(let o=0;o<t.length;o+=1){const s=t[o];s.tag==="title"?n=s:s.tag==="titleTemplate"&&(r=s)}if(r&&n){const o=q(r.textContent,n.textContent);o!==null?n.textContent=o||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(r){const o=q(r.textContent);o!==null&&(r.textContent=o,r.tag="title",r=void 0)}r&&e.tags.splice(e.tags.indexOf(r),1)}}},Ze={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let ce;function ze(e={}){const t=Xe(e);return t.use(Ke()),ce=t}function N(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Xe(e={}){const t=ve();t.addHooks(e.hooks||{}),e.document=e.document||(Pe?document:void 0);const n=!e.document,r=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let o=0,s=[];const i=[],a={plugins:i,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return s},use(c){const f=typeof c=="function"?c(a):c;(!f.key||!i.some(d=>d.key===f.key))&&(i.push(f),N(f.mode,n)&&t.addHooks(f.hooks||{}))},push(c,f){f==null||delete f.head;const d={_i:o++,input:c,...f};return N(d.mode,n)&&(s.push(d),r()),{dispose(){s=s.filter(k=>k._i!==d._i),r()},patch(k){for(const l of s)l._i===d._i&&(l.input=d.input=k);r()}}},async resolveTags(){const c={tags:[],entries:[...s]};await t.callHook("entries:resolve",c);for(const f of c.entries){const d=f.resolvedInput||f.input;if(f.resolvedInput=await(f.transform?f.transform(d):d),f.resolvedInput)for(const k of await xe(f)){const l={tag:k,entry:f,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",l),c.tags.push(l.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[Ue,qe,Ve,We,Ne,Ge,Je,Ze,...(e==null?void 0:e.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function Qe(){return ce}const P=pe[0]==="3";function Ye(e){return typeof e=="function"?e():J(e)}function M(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=Ye(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>M(n));if(typeof t=="object"){const n={};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=J(t[r]);continue}n[r]=M(t[r])}return n}return t}const et={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=M(t.input)}}},le="usehead";function tt(e){return{install(n){P&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(le,e))}}.install}function at(e={}){e.domDelayFn=e.domDelayFn||(n=>ue(()=>setTimeout(()=>n(),0)));const t=ze(e);return t.use(et),t.install=tt(t),t}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B="__unhead_injection_handler__";function fe(){if(B in F)return F[B]();const e=de(le);return e||Qe()}function nt(e,t={}){const n=t.head||fe();if(n)return n.ssr?n.push(e,t):rt(n,e,t)}function rt(e,t,n={}){const r=j(!1),o=j({});Z(()=>{o.value=r.value?{}:M(t)});const s=e.push(o.value,n);return ye(o,a=>{s.patch(a)}),ge()&&(z(()=>{s.dispose()}),me(()=>{r.value=!0}),he(()=>{r.value=!1})),s}function ct(e,t){const{title:n,titleTemplate:r,...o}=e;return nt({title:n,titleTemplate:r,_flatMeta:o},{...t,transform(s){const i=U({...s._flatMeta});return delete s._flatMeta,{...s,meta:i}}})}function G(e,t){const n=P?e.type:e.tag,r=n==="html"?"htmlAttrs":n==="body"?"bodyAttrs":n;if(typeof r!="string"||!(r in t))return;const o=P?e:e.data,s=(P?e.props:o.attrs)||{};if(P||(o.staticClass&&(s.class=o.staticClass),o.staticStyle&&(s.style=Object.entries(o.staticStyle).map(([i,a])=>`${i}:${a}`).join(";"))),e.children){const i=P?"children":"text";s.children=Array.isArray(e.children)?e.children[0][i]:e[i]}Array.isArray(t[r])?t[r].push(s):r==="title"?t.title=s.children:t[r]=s}function ot(e){const t={title:void 0,htmlAttrs:void 0,bodyAttrs:void 0,base:void 0,meta:[],link:[],style:[],script:[],noscript:[]};for(const n of e)if(typeof n.type=="symbol"&&Array.isArray(n.children))for(const r of n.children)G(r,t);else G(n,t);return t}const lt=be({name:"Head",setup(e,{slots:t}){const n=fe(),r=j({}),o=n.push(r);return z(()=>{o.dispose()}),()=>(Z(()=>{t.default&&o.patch(ot(t.default()))}),null)}});export{lt as H,ct as a,at as c,nt as u};