import{c as $}from"./ajv-Cz01fV_p.js";var T={exports:{}};(function(ee,V){(function(S,_){_(V)})($,function(S){const j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=new Uint8Array(64),B=new Uint8Array(128);for(let t=0;t<j.length;t++){const n=j.charCodeAt(t);w[t]=n,B[n]=t}function u(t,n){let e=0,o=0,s=0;do{const d=t.next();s=B[d],e|=(s&31)<<o,o+=5}while(s&32);const c=e&1;return e>>>=1,c&&(e=-2147483648|-e),n+e}function i(t,n,e){let o=n-e;o=o<0?-o<<1|1:o<<1;do{let s=o&31;o>>>=5,o>0&&(s|=32),t.write(w[s])}while(o>0);return n}function I(t,n){return t.pos>=n?!1:t.peek()!==44}const D=1024*16,M=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(t){return Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString()}}:{decode(t){let n="";for(let e=0;e<t.length;e++)n+=String.fromCharCode(t[e]);return n}};class A{constructor(){this.pos=0,this.out="",this.buffer=new Uint8Array(D)}write(n){const{buffer:e}=this;e[this.pos++]=n,this.pos===D&&(this.out+=M.decode(e),this.pos=0)}flush(){const{buffer:n,out:e,pos:o}=this;return o>0?e+M.decode(n.subarray(0,o)):e}}class R{constructor(n){this.pos=0,this.buffer=n}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(n){const{buffer:e,pos:o}=this,s=e.indexOf(n,o);return s===-1?e.length:s}}const N=[];function W(t){const{length:n}=t,e=new R(t),o=[],s=[];let c=0;for(;e.pos<n;e.pos++){c=u(e,c);const d=u(e,0);if(!I(e,n)){const p=s.pop();p[2]=c,p[3]=d;continue}const r=u(e,0),f=u(e,0)&1?[c,d,0,0,r,u(e,0)]:[c,d,0,0,r];let g=N;if(I(e,n)){g=[];do{const p=u(e,0);g.push(p)}while(I(e,n))}f.vars=g,o.push(f),s.push(f)}return o}function Y(t){const n=new A;for(let e=0;e<t.length;)e=U(t,e,n,[0]);return n.flush()}function U(t,n,e,o){const s=t[n],{0:c,1:d,2:r,3:a,4:h,vars:f}=s;n>0&&e.write(44),o[0]=i(e,c,o[0]),i(e,d,0),i(e,h,0);const g=s.length===6?1:0;i(e,g,0),s.length===6&&i(e,s[5],0);for(const p of f)i(e,p,0);for(n++;n<t.length;){const p=t[n],{0:l,1:m}=p;if(l>r||l===r&&m>=a)break;n=U(t,n,e,o)}return e.write(44),o[0]=i(e,r,o[0]),i(e,a,0),n}function z(t){const{length:n}=t,e=new R(t),o=[],s=[];let c=0,d=0,r=0,a=0,h=0,f=0,g=0,p=0;do{const l=e.indexOf(";");let m=0;for(;e.pos<l;e.pos++){if(m=u(e,m),!I(e,l)){const b=s.pop();b[2]=c,b[3]=m;continue}const C=u(e,0),k=C&1,v=C&2,O=C&4;let q=null,G=N,L;if(k){const b=u(e,d);r=u(e,d===b?r:0),d=b,L=[c,m,0,0,b,r]}else L=[c,m,0,0];if(L.isScope=!!O,v){const b=a,x=h;a=u(e,a);const y=b===a;h=u(e,y?h:0),f=u(e,y&&x===h?f:0),q=[a,h,f]}if(L.callsite=q,I(e,l)){G=[];do{g=c,p=m;const b=u(e,0);let x;if(b<-1){x=[[u(e,0)]];for(let y=-1;y>b;y--){const X=g;g=u(e,g),p=u(e,g===X?p:0);const Z=u(e,0);x.push([Z,g,p])}}else x=[[b]];G.push(x)}while(I(e,l))}L.bindings=G,o.push(L),s.push(L)}c++,e.pos=l+1}while(e.pos<n);return o}function F(t){if(t.length===0)return"";const n=new A;for(let e=0;e<t.length;)e=E(t,e,n,[0,0,0,0,0,0,0]);return n.flush()}function E(t,n,e,o){const s=t[n],{0:c,1:d,2:r,3:a,isScope:h,callsite:f,bindings:g}=s;o[0]<c?(P(e,o[0],c),o[0]=c,o[1]=0):n>0&&e.write(44),o[1]=i(e,s[1],o[1]);const p=(s.length===6?1:0)|(f?2:0)|(h?4:0);if(i(e,p,0),s.length===6){const{4:l,5:m}=s;l!==o[2]&&(o[3]=0),o[2]=i(e,l,o[2]),o[3]=i(e,m,o[3])}if(f){const{0:l,1:m,2:C}=s.callsite;l!==o[4]?(o[5]=0,o[6]=0):m!==o[5]&&(o[6]=0),o[4]=i(e,l,o[4]),o[5]=i(e,m,o[5]),o[6]=i(e,C,o[6])}if(g)for(const l of g){l.length>1&&i(e,-l.length,0);const m=l[0][0];i(e,m,0);let C=c,k=d;for(let v=1;v<l.length;v++){const O=l[v];C=i(e,O[1],C),k=i(e,O[2],k),i(e,O[0],0)}}for(n++;n<t.length;){const l=t[n],{0:m,1:C}=l;if(m>r||m===r&&C>=a)break;n=E(t,n,e,o)}return o[0]<r?(P(e,o[0],r),o[0]=r,o[1]=0):e.write(44),o[1]=i(e,a,o[1]),n}function P(t,n,e){do t.write(59);while(++n<e)}function H(t){const{length:n}=t,e=new R(t),o=[];let s=0,c=0,d=0,r=0,a=0;do{const h=e.indexOf(";"),f=[];let g=!0,p=0;for(s=0;e.pos<h;){let l;s=u(e,s),s<p&&(g=!1),p=s,I(e,h)?(c=u(e,c),d=u(e,d),r=u(e,r),I(e,h)?(a=u(e,a),l=[s,c,d,r,a]):l=[s,c,d,r]):l=[s],f.push(l),e.pos++}g||J(f),o.push(f),e.pos=h+1}while(e.pos<=n);return o}function J(t){t.sort(K)}function K(t,n){return t[0]-n[0]}function Q(t){const n=new A;let e=0,o=0,s=0,c=0;for(let d=0;d<t.length;d++){const r=t[d];if(d>0&&n.write(59),r.length===0)continue;let a=0;for(let h=0;h<r.length;h++){const f=r[h];h>0&&n.write(44),a=i(n,f[0],a),f.length!==1&&(e=i(n,f[1],e),o=i(n,f[2],o),s=i(n,f[3],s),f.length!==4&&(c=i(n,f[4],c)))}}return n.flush()}S.decode=H,S.decodeGeneratedRanges=z,S.decodeOriginalScopes=W,S.encode=Q,S.encodeGeneratedRanges=F,S.encodeOriginalScopes=Y,Object.defineProperty(S,"__esModule",{value:!0})})})(T,T.exports);var te=T.exports;export{te as s};
