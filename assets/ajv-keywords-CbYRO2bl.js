import{g as j}from"./ajv-BS_TGhCq.js";var i={exports:{}},p;function S(){return p||(p=1,function(d,s){Object.defineProperty(s,"__esModule",{value:!0});const a={},u={timestamp:()=>()=>Date.now(),datetime:()=>()=>new Date().toISOString(),date:()=>()=>new Date().toISOString().slice(0,10),time:()=>()=>new Date().toISOString().slice(11),random:()=>()=>Math.random(),randomint:e=>{var t;const n=(t=e==null?void 0:e.max)!==null&&t!==void 0?t:2;return()=>Math.floor(Math.random()*n)},seq:e=>{var t;const n=(t=e==null?void 0:e.name)!==null&&t!==void 0?t:"";return a[n]||(a[n]=0),()=>a[n]++}},f=Object.assign(m,{DEFAULTS:u});function m(){return{keyword:"dynamicDefaults",type:"object",schemaType:["string","object"],modifying:!0,valid:!0,compile(e,t,n){if(!n.opts.useDefaults||n.compositeRule)return()=>!0;const l={};for(const r in e)l[r]=y(e[r]);const g=n.opts.useDefaults==="empty";return r=>{for(const o in e)(r[o]===void 0||g&&(r[o]===null||r[o]===""))&&(r[o]=l[o]());return!0}},metaSchema:{type:"object",additionalProperties:{anyOf:[{type:"string"},{type:"object",additionalProperties:!1,required:["func","args"],properties:{func:{type:"string"},args:{type:"object"}}}]}}}}function y(e){return typeof e=="object"?D(e):v(e)}function D({func:e,args:t}){const n=u[e];return c(e,n),n(t)}function v(e=""){const t=u[e];return c(e,t),t()}function c(e,t){if(!t)throw new Error(`invalid "dynamicDefaults" keyword property value: ${e}`)}s.default=f,d.exports=f}(i,i.exports)),i.exports}var b=S();const w=j(b);export{w as d};