var U={exports:{}},k,$;function b(){return $||($=1,k={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}}),k}var x,L;function D(){if(L)return x;L=1;const{HEX:y}=b();function q(i){if(I(i,".")<3)return{host:i,isIPV4:!1};const u=i.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[r]=u;return r?{host:g(r,"."),isIPV4:!0}:{host:i,isIPV4:!1}}function o(i,u=!1){let r="",s=!0;for(const e of i){if(y[e]===void 0)return;e!=="0"&&s===!0&&(s=!1),s||(r+=e)}return u&&r.length===0&&(r="0"),r}function z(i){let u=0;const r={error:!1,address:"",zone:""},s=[],e=[];let t=!1,n=!1,c=!1;function a(){if(e.length){if(t===!1){const f=o(e);if(f!==void 0)s.push(f);else return r.error=!0,!1}e.length=0}return!0}for(let f=0;f<i.length;f++){const d=i[f];if(!(d==="["||d==="]"))if(d===":"){if(n===!0&&(c=!0),!a())break;if(u++,s.push(":"),u>7){r.error=!0;break}f-1>=0&&i[f-1]===":"&&(n=!0);continue}else if(d==="%"){if(!a())break;t=!0}else{e.push(d);continue}}return e.length&&(t?r.zone=e.join(""):c?s.push(e.join("")):s.push(o(e))),r.address=s.join(""),r}function l(i,u={}){if(I(i,":")<2)return{host:i,isIPV6:!1};const r=z(i);if(r.error)return{host:i,isIPV6:!1};{let s=r.address,e=r.address;return r.zone&&(s+="%"+r.zone,e+="%25"+r.zone),{host:s,escapedHost:e,isIPV6:!0}}}function g(i,u){let r="",s=!0;const e=i.length;for(let t=0;t<e;t++){const n=i[t];n==="0"&&s?(t+1<=e&&i[t+1]===u||t+1===e)&&(r+=n,s=!1):(n===u?s=!0:s=!1,r+=n)}return r}function I(i,u){let r=0;for(let s=0;s<i.length;s++)i[s]===u&&r++;return r}const S=/^\.\.?\//u,m=/^\/\.(?:\/|$)/u,P=/^\/\.\.(?:\/|$)/u,h=/^\/?(?:.|\n)*?(?=\/|$)/u;function E(i){const u=[];for(;i.length;)if(i.match(S))i=i.replace(S,"");else if(i.match(m))i=i.replace(m,"/");else if(i.match(P))i=i.replace(P,"/"),u.pop();else if(i==="."||i==="..")i="";else{const r=i.match(h);if(r){const s=r[0];i=i.slice(s.length),u.push(s)}else throw new Error("Unexpected dot segment condition")}return u.join("")}function H(i,u){const r=u!==!0?escape:unescape;return i.scheme!==void 0&&(i.scheme=r(i.scheme)),i.userinfo!==void 0&&(i.userinfo=r(i.userinfo)),i.host!==void 0&&(i.host=r(i.host)),i.path!==void 0&&(i.path=r(i.path)),i.query!==void 0&&(i.query=r(i.query)),i.fragment!==void 0&&(i.fragment=r(i.fragment)),i}function p(i,u){const r=[];if(i.userinfo!==void 0&&(r.push(i.userinfo),r.push("@")),i.host!==void 0){let s=unescape(i.host);const e=q(s);if(e.isIPV4)s=e.host;else{const t=l(e.host,{isIPV4:!1});t.isIPV6===!0?s=`[${t.escapedHost}]`:s=i.host}r.push(s)}return(typeof i.port=="number"||typeof i.port=="string")&&(r.push(":"),r.push(String(i.port))),r.length?r.join(""):void 0}return x={recomposeAuthority:p,normalizeComponentEncoding:H,removeDotSegments:E,normalizeIPv4:q,normalizeIPv6:l,stringArrayToHexStripped:o},x}var V,N;function T(){if(N)return V;N=1;const y=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,q=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function o(e){return typeof e.secure=="boolean"?e.secure:String(e.scheme).toLowerCase()==="wss"}function z(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function l(e){const t=String(e.scheme).toLowerCase()==="https";return(e.port===(t?443:80)||e.port==="")&&(e.port=void 0),e.path||(e.path="/"),e}function g(e){return e.secure=o(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e}function I(e){if((e.port===(o(e)?443:80)||e.port==="")&&(e.port=void 0),typeof e.secure=="boolean"&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){const[t,n]=e.resourceName.split("?");e.path=t&&t!=="/"?t:void 0,e.query=n,e.resourceName=void 0}return e.fragment=void 0,e}function S(e,t){if(!e.path)return e.error="URN can not be parsed",e;const n=e.path.match(q);if(n){const c=t.scheme||e.scheme||"urn";e.nid=n[1].toLowerCase(),e.nss=n[2];const a=`${c}:${t.nid||e.nid}`,f=s[a];e.path=void 0,f&&(e=f.parse(e,t))}else e.error=e.error||"URN can not be parsed.";return e}function m(e,t){const n=t.scheme||e.scheme||"urn",c=e.nid.toLowerCase(),a=`${n}:${t.nid||c}`,f=s[a];f&&(e=f.serialize(e,t));const d=e,R=e.nss;return d.path=`${c||t.nid}:${R}`,t.skipEscape=!0,d}function P(e,t){const n=e;return n.uuid=n.nss,n.nss=void 0,!t.tolerant&&(!n.uuid||!y.test(n.uuid))&&(n.error=n.error||"UUID is not valid."),n}function h(e){const t=e;return t.nss=(e.uuid||"").toLowerCase(),t}const E={scheme:"http",domainHost:!0,parse:z,serialize:l},H={scheme:"https",domainHost:E.domainHost,parse:z,serialize:l},p={scheme:"ws",domainHost:!0,parse:g,serialize:I},i={scheme:"wss",domainHost:p.domainHost,parse:p.parse,serialize:p.serialize},s={http:E,https:H,ws:p,wss:i,urn:{scheme:"urn",parse:S,serialize:m,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:P,serialize:h,skipNormalize:!0}};return V=s,V}var j;function O(){if(j)return U.exports;j=1;const{normalizeIPv6:y,normalizeIPv4:q,removeDotSegments:o,recomposeAuthority:z,normalizeComponentEncoding:l}=D(),g=T();function I(r,s){return typeof r=="string"?r=h(i(r,s),s):typeof r=="object"&&(r=i(h(r,s),s)),r}function S(r,s,e){const t=Object.assign({scheme:"null"},e),n=m(i(r,t),i(s,t),t,!0);return h(n,{...t,skipEscape:!0})}function m(r,s,e,t){const n={};return t||(r=i(h(r,e),e),s=i(h(s,e),e)),e=e||{},!e.tolerant&&s.scheme?(n.scheme=s.scheme,n.userinfo=s.userinfo,n.host=s.host,n.port=s.port,n.path=o(s.path||""),n.query=s.query):(s.userinfo!==void 0||s.host!==void 0||s.port!==void 0?(n.userinfo=s.userinfo,n.host=s.host,n.port=s.port,n.path=o(s.path||""),n.query=s.query):(s.path?(s.path.charAt(0)==="/"?n.path=o(s.path):((r.userinfo!==void 0||r.host!==void 0||r.port!==void 0)&&!r.path?n.path="/"+s.path:r.path?n.path=r.path.slice(0,r.path.lastIndexOf("/")+1)+s.path:n.path=s.path,n.path=o(n.path)),n.query=s.query):(n.path=r.path,s.query!==void 0?n.query=s.query:n.query=r.query),n.userinfo=r.userinfo,n.host=r.host,n.port=r.port),n.scheme=r.scheme),n.fragment=s.fragment,n}function P(r,s,e){return typeof r=="string"?(r=unescape(r),r=h(l(i(r,e),!0),{...e,skipEscape:!0})):typeof r=="object"&&(r=h(l(r,!0),{...e,skipEscape:!0})),typeof s=="string"?(s=unescape(s),s=h(l(i(s,e),!0),{...e,skipEscape:!0})):typeof s=="object"&&(s=h(l(s,!0),{...e,skipEscape:!0})),r.toLowerCase()===s.toLowerCase()}function h(r,s){const e={host:r.host,scheme:r.scheme,userinfo:r.userinfo,port:r.port,path:r.path,query:r.query,nid:r.nid,nss:r.nss,uuid:r.uuid,fragment:r.fragment,reference:r.reference,resourceName:r.resourceName,secure:r.secure,error:""},t=Object.assign({},s),n=[],c=g[(t.scheme||e.scheme||"").toLowerCase()];c&&c.serialize&&c.serialize(e,t),e.path!==void 0&&(t.skipEscape?e.path=unescape(e.path):(e.path=escape(e.path),e.scheme!==void 0&&(e.path=e.path.split("%3A").join(":")))),t.reference!=="suffix"&&e.scheme&&n.push(e.scheme,":");const a=z(e,t);if(a!==void 0&&(t.reference!=="suffix"&&n.push("//"),n.push(a),e.path&&e.path.charAt(0)!=="/"&&n.push("/")),e.path!==void 0){let f=e.path;!t.absolutePath&&(!c||!c.absolutePath)&&(f=o(f)),a===void 0&&(f=f.replace(/^\/\//u,"/%2F")),n.push(f)}return e.query!==void 0&&n.push("?",e.query),e.fragment!==void 0&&n.push("#",e.fragment),n.join("")}const E=Array.from({length:127},(r,s)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(s)));function H(r){let s=0;for(let e=0,t=r.length;e<t;++e)if(s=r.charCodeAt(e),s>126||E[s])return!0;return!1}const p=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function i(r,s){const e=Object.assign({},s),t={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},n=r.indexOf("%")!==-1;let c=!1;e.reference==="suffix"&&(r=(e.scheme?e.scheme+":":"")+"//"+r);const a=r.match(p);if(a){if(t.scheme=a[1],t.userinfo=a[3],t.host=a[4],t.port=parseInt(a[5],10),t.path=a[6]||"",t.query=a[7],t.fragment=a[8],isNaN(t.port)&&(t.port=a[5]),t.host){const d=q(t.host);if(d.isIPV4===!1){const R=y(d.host,{isIPV4:!1});t.host=R.host.toLowerCase(),c=R.isIPV6}else t.host=d.host,c=!0}t.scheme===void 0&&t.userinfo===void 0&&t.host===void 0&&t.port===void 0&&!t.path&&t.query===void 0?t.reference="same-document":t.scheme===void 0?t.reference="relative":t.fragment===void 0?t.reference="absolute":t.reference="uri",e.reference&&e.reference!=="suffix"&&e.reference!==t.reference&&(t.error=t.error||"URI is not a "+e.reference+" reference.");const f=g[(e.scheme||t.scheme||"").toLowerCase()];if(!e.unicodeSupport&&(!f||!f.unicodeSupport)&&t.host&&(e.domainHost||f&&f.domainHost)&&c===!1&&H(t.host))try{t.host=URL.domainToASCII(t.host.toLowerCase())}catch(d){t.error=t.error||"Host's domain name can not be converted to ASCII: "+d}(!f||f&&!f.skipNormalize)&&(n&&t.scheme!==void 0&&(t.scheme=unescape(t.scheme)),n&&t.host!==void 0&&(t.host=unescape(t.host)),t.path!==void 0&&t.path.length&&(t.path=escape(unescape(t.path))),t.fragment!==void 0&&t.fragment.length&&(t.fragment=encodeURI(decodeURIComponent(t.fragment)))),f&&f.parse&&f.parse(t,e)}else t.error=t.error||"URI can not be parsed.";return t}const u={SCHEMES:g,normalize:I,resolve:S,resolveComponents:m,equal:P,serialize:h,parse:i};return U.exports=u,U.exports.default=u,U.exports.fastUri=u,U.exports}export{O as r};
