var m={exports:{}};const N={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};var j={HEX:N};const{HEX:b}=j;function H(e){if(U(e,".")<3)return{host:e,isIPV4:!1};const t=e.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[r]=t;return r?{host:T(r,"."),isIPV4:!0}:{host:e,isIPV4:!1}}function y(e,t=!1){let r="",s=!0;for(const f of e){if(b[f]===void 0)return;f!=="0"&&s===!0&&(s=!1),s||(r+=f)}return t&&r.length===0&&(r="0"),r}function D(e){let t=0;const r={error:!1,address:"",zone:""},s=[],f=[];let n=!1,i=!1,u=!1;function o(){if(f.length){if(n===!1){const a=y(f);if(a!==void 0)s.push(a);else return r.error=!0,!1}f.length=0}return!0}for(let a=0;a<e.length;a++){const d=e[a];if(!(d==="["||d==="]"))if(d===":"){if(i===!0&&(u=!0),!o())break;if(t++,s.push(":"),t>7){r.error=!0;break}a-1>=0&&e[a-1]===":"&&(i=!0);continue}else if(d==="%"){if(!o())break;n=!0}else{f.push(d);continue}}return f.length&&(n?r.zone=f.join(""):u?s.push(f.join("")):s.push(y(f))),r.address=s.join(""),r}function $(e,t={}){if(U(e,":")<2)return{host:e,isIPV6:!1};const r=D(e);if(r.error)return{host:e,isIPV6:!1};{let s=r.address,f=r.address;return r.zone&&(s+="%"+r.zone,f+="%25"+r.zone),{host:s,escapedHost:f,isIPV6:!0}}}function T(e,t){let r="",s=!0;const f=e.length;for(let n=0;n<f;n++){const i=e[n];i==="0"&&s?(n+1<=f&&e[n+1]===t||n+1===f)&&(r+=i,s=!1):(i===t?s=!0:s=!1,r+=i)}return r}function U(e,t){let r=0;for(let s=0;s<e.length;s++)e[s]===t&&r++;return r}const P=/^\.\.?\//u,q=/^\/\.(?:\/|$)/u,E=/^\/\.\.(?:\/|$)/u,O=/^\/?(?:.|\n)*?(?=\/|$)/u;function A(e){const t=[];for(;e.length;)if(e.match(P))e=e.replace(P,"");else if(e.match(q))e=e.replace(q,"/");else if(e.match(E))e=e.replace(E,"/"),t.pop();else if(e==="."||e==="..")e="";else{const r=e.match(O);if(r){const s=r[0];e=e.slice(s.length),t.push(s)}else throw new Error("Unexpected dot segment condition")}return t.join("")}function _(e,t){const r=t!==!0?escape:unescape;return e.scheme!==void 0&&(e.scheme=r(e.scheme)),e.userinfo!==void 0&&(e.userinfo=r(e.userinfo)),e.host!==void 0&&(e.host=r(e.host)),e.path!==void 0&&(e.path=r(e.path)),e.query!==void 0&&(e.query=r(e.query)),e.fragment!==void 0&&(e.fragment=r(e.fragment)),e}function X(e,t){const r=[];if(e.userinfo!==void 0&&(r.push(e.userinfo),r.push("@")),e.host!==void 0){let s=unescape(e.host);const f=H(s);if(f.isIPV4)s=f.host;else{const n=$(f.host,{isIPV4:!1});n.isIPV6===!0?s=`[${n.escapedHost}]`:s=e.host}r.push(s)}return(typeof e.port=="number"||typeof e.port=="string")&&(r.push(":"),r.push(String(e.port))),r.length?r.join(""):void 0}var F={recomposeAuthority:X,normalizeComponentEncoding:_,removeDotSegments:A,normalizeIPv4:H,normalizeIPv6:$,stringArrayToHexStripped:y};const G=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,M=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function k(e){return typeof e.secure=="boolean"?e.secure:String(e.scheme).toLowerCase()==="wss"}function x(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function R(e){const t=String(e.scheme).toLowerCase()==="https";return(e.port===(t?443:80)||e.port==="")&&(e.port=void 0),e.path||(e.path="/"),e}function Z(e){return e.secure=k(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e}function w(e){if((e.port===(k(e)?443:80)||e.port==="")&&(e.port=void 0),typeof e.secure=="boolean"&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){const[t,r]=e.resourceName.split("?");e.path=t&&t!=="/"?t:void 0,e.query=r,e.resourceName=void 0}return e.fragment=void 0,e}function v(e,t){if(!e.path)return e.error="URN can not be parsed",e;const r=e.path.match(M);if(r){const s=t.scheme||e.scheme||"urn";e.nid=r[1].toLowerCase(),e.nss=r[2];const f=`${s}:${t.nid||e.nid}`,n=z[f];e.path=void 0,n&&(e=n.parse(e,t))}else e.error=e.error||"URN can not be parsed.";return e}function J(e,t){const r=t.scheme||e.scheme||"urn",s=e.nid.toLowerCase(),f=`${r}:${t.nid||s}`,n=z[f];n&&(e=n.serialize(e,t));const i=e,u=e.nss;return i.path=`${s||t.nid}:${u}`,t.skipEscape=!0,i}function K(e,t){const r=e;return r.uuid=r.nss,r.nss=void 0,!t.tolerant&&(!r.uuid||!G.test(r.uuid))&&(r.error=r.error||"UUID is not valid."),r}function Q(e){const t=e;return t.nss=(e.uuid||"").toLowerCase(),t}const V={scheme:"http",domainHost:!0,parse:x,serialize:R},W={scheme:"https",domainHost:V.domainHost,parse:x,serialize:R},g={scheme:"ws",domainHost:!0,parse:Z,serialize:w},Y={scheme:"wss",domainHost:g.domainHost,parse:g.parse,serialize:g.serialize},B={scheme:"urn",parse:v,serialize:J,skipNormalize:!0},C={scheme:"urn:uuid",parse:K,serialize:Q,skipNormalize:!0},z={http:V,https:W,ws:g,wss:Y,urn:B,"urn:uuid":C};var ee=z;const{normalizeIPv6:re,normalizeIPv4:se,removeDotSegments:l,recomposeAuthority:te,normalizeComponentEncoding:p}=F,I=ee;function fe(e,t){return typeof e=="string"?e=c(h(e,t),t):typeof e=="object"&&(e=h(c(e,t),t)),e}function ne(e,t,r){const s=Object.assign({scheme:"null"},r),f=L(h(e,s),h(t,s),s,!0);return c(f,{...s,skipEscape:!0})}function L(e,t,r,s){const f={};return s||(e=h(c(e,r),r),t=h(c(t,r),r)),r=r||{},!r.tolerant&&t.scheme?(f.scheme=t.scheme,f.userinfo=t.userinfo,f.host=t.host,f.port=t.port,f.path=l(t.path||""),f.query=t.query):(t.userinfo!==void 0||t.host!==void 0||t.port!==void 0?(f.userinfo=t.userinfo,f.host=t.host,f.port=t.port,f.path=l(t.path||""),f.query=t.query):(t.path?(t.path.charAt(0)==="/"?f.path=l(t.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?f.path="/"+t.path:e.path?f.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+t.path:f.path=t.path,f.path=l(f.path)),f.query=t.query):(f.path=e.path,t.query!==void 0?f.query=t.query:f.query=e.query),f.userinfo=e.userinfo,f.host=e.host,f.port=e.port),f.scheme=e.scheme),f.fragment=t.fragment,f}function ie(e,t,r){return typeof e=="string"?(e=unescape(e),e=c(p(h(e,r),!0),{...r,skipEscape:!0})):typeof e=="object"&&(e=c(p(e,!0),{...r,skipEscape:!0})),typeof t=="string"?(t=unescape(t),t=c(p(h(t,r),!0),{...r,skipEscape:!0})):typeof t=="object"&&(t=c(p(t,!0),{...r,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()}function c(e,t){const r={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:""},s=Object.assign({},t),f=[],n=I[(s.scheme||r.scheme||"").toLowerCase()];n&&n.serialize&&n.serialize(r,s),r.path!==void 0&&(s.skipEscape?r.path=unescape(r.path):(r.path=escape(r.path),r.scheme!==void 0&&(r.path=r.path.split("%3A").join(":")))),s.reference!=="suffix"&&r.scheme&&(f.push(r.scheme),f.push(":"));const i=te(r,s);if(i!==void 0&&(s.reference!=="suffix"&&f.push("//"),f.push(i),r.path&&r.path.charAt(0)!=="/"&&f.push("/")),r.path!==void 0){let u=r.path;!s.absolutePath&&(!n||!n.absolutePath)&&(u=l(u)),i===void 0&&(u=u.replace(/^\/\//u,"/%2F")),f.push(u)}return r.query!==void 0&&(f.push("?"),f.push(r.query)),r.fragment!==void 0&&(f.push("#"),f.push(r.fragment)),f.join("")}const ue=Array.from({length:127},(e,t)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(t)));function ae(e){let t=0;for(let r=0,s=e.length;r<s;++r)if(t=e.charCodeAt(r),t>126||ue[t])return!0;return!1}const ce=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function h(e,t){const r=Object.assign({},t),s={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},f=e.indexOf("%")!==-1;let n=!1;r.reference==="suffix"&&(e=(r.scheme?r.scheme+":":"")+"//"+e);const i=e.match(ce);if(i){if(s.scheme=i[1],s.userinfo=i[3],s.host=i[4],s.port=parseInt(i[5],10),s.path=i[6]||"",s.query=i[7],s.fragment=i[8],isNaN(s.port)&&(s.port=i[5]),s.host){const o=se(s.host);if(o.isIPV4===!1){const a=re(o.host,{isIPV4:!1});s.host=a.host.toLowerCase(),n=a.isIPV6}else s.host=o.host,n=!0}s.scheme===void 0&&s.userinfo===void 0&&s.host===void 0&&s.port===void 0&&!s.path&&s.query===void 0?s.reference="same-document":s.scheme===void 0?s.reference="relative":s.fragment===void 0?s.reference="absolute":s.reference="uri",r.reference&&r.reference!=="suffix"&&r.reference!==s.reference&&(s.error=s.error||"URI is not a "+r.reference+" reference.");const u=I[(r.scheme||s.scheme||"").toLowerCase()];if(!r.unicodeSupport&&(!u||!u.unicodeSupport)&&s.host&&(r.domainHost||u&&u.domainHost)&&n===!1&&ae(s.host))try{s.host=URL.domainToASCII(s.host.toLowerCase())}catch(o){s.error=s.error||"Host's domain name can not be converted to ASCII: "+o}(!u||u&&!u.skipNormalize)&&(f&&s.scheme!==void 0&&(s.scheme=unescape(s.scheme)),f&&s.userinfo!==void 0&&(s.userinfo=unescape(s.userinfo)),f&&s.host!==void 0&&(s.host=unescape(s.host)),s.path!==void 0&&s.path.length&&(s.path=escape(unescape(s.path))),s.fragment!==void 0&&s.fragment.length&&(s.fragment=encodeURI(decodeURIComponent(s.fragment)))),u&&u.parse&&u.parse(s,r)}else s.error=s.error||"URI can not be parsed.";return s}const S={SCHEMES:I,normalize:fe,resolve:ne,resolveComponents:L,equal:ie,serialize:c,parse:h};m.exports=S;m.exports.default=S;m.exports.fastUri=S;var he=m.exports;export{he as f};