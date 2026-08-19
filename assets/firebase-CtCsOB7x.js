import{o as AI,R as Hu}from"./vendor-D0vgXbu1.js";const RI=()=>{};var Nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},PI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,w=l&63;u||(w=64,o||(g=64)),r.push(t[d],t[p],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):PI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||p==null)throw new bI;const g=i<<2|c>>4;if(r.push(g),l!==64){const w=c<<4&240|l>>2;if(r.push(w),p!==64){const P=l<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SI=function(n){const e=Dp(n);return kp.encodeByteArray(e,!0)},ma=function(n){return SI(n).replace(/\./g,"")},Op=function(n){try{return kp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=()=>Lp().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process>"u"||typeof Nd>"u")return;const n=Nd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Op(n[1]);return e&&JSON.parse(e)},Ka=()=>{try{return RI()||VI()||CI()||xI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mp=n=>{var e,t;return(t=(e=Ka())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Fp=n=>{const e=Mp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Up=()=>{var n;return(n=Ka())==null?void 0:n.config},Bp=n=>{var e;return(e=Ka())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ma(JSON.stringify(t)),ma(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function jp(){var e;const n=(e=Ka())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zp(){return!jp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gp(){return!jp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Kp(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="FirebaseError";class $t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=FI,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new $t(s,c,r)}}function UI(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),c=e[o];r+=n.substring(t,s)+(c!=null?String(c):`<${o}?>`),t=i+1}return r}catch{return n}}function BI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Dd(i)&&Dd(o)){if(!wt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Dd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ei(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qI(n,e){const t=new $I(n,e);return t.subscribe.bind(t)}class $I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xc),s.error===void 0&&(s.error=Xc),s.complete===void 0&&(s.complete=Xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wa(n){return(await fetch(n,{credentials:"include"})).ok}class Ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KI(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GI(n){return n===ar?void 0:n}function KI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const HI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},QI=ne.INFO,JI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},YI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ZI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",kd="0.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Qu("@firebase/app"),ew="@firebase/app-compat",tw="@firebase/analytics-compat",nw="@firebase/analytics",rw="@firebase/app-check-compat",sw="@firebase/app-check",iw="@firebase/auth",ow="@firebase/auth-compat",aw="@firebase/database",cw="@firebase/data-connect",uw="@firebase/database-compat",lw="@firebase/functions",hw="@firebase/functions-compat",dw="@firebase/installations",fw="@firebase/installations-compat",pw="@firebase/messaging",mw="@firebase/messaging-compat",gw="@firebase/performance",_w="@firebase/performance-compat",yw="@firebase/remote-config",Iw="@firebase/remote-config-compat",ww="@firebase/storage",Tw="@firebase/storage-compat",Ew="@firebase/firestore",vw="@firebase/ai",Aw="@firebase/firestore-compat",Rw="firebase",Pw="12.17.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="[DEFAULT]",bw={[fu]:"fire-core",[ew]:"fire-core-compat",[nw]:"fire-analytics",[tw]:"fire-analytics-compat",[sw]:"fire-app-check",[rw]:"fire-app-check-compat",[iw]:"fire-auth",[ow]:"fire-auth-compat",[aw]:"fire-rtdb",[cw]:"fire-data-connect",[uw]:"fire-rtdb-compat",[lw]:"fire-fn",[hw]:"fire-fn-compat",[dw]:"fire-iid",[fw]:"fire-iid-compat",[pw]:"fire-fcm",[mw]:"fire-fcm-compat",[gw]:"fire-perf",[_w]:"fire-perf-compat",[yw]:"fire-rc",[Iw]:"fire-rc-compat",[ww]:"fire-gcs",[Tw]:"fire-gcs-compat",[Ew]:"fire-fst",[Aw]:"fire-fst-compat",[vw]:"fire-vertex","fire-js":"fire-js",[Rw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,Sw=new Map,pu=new Map;function Od(n,e){try{n.container.addComponent(e)}catch(t){en.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wr(n){const e=n.name;if(pu.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,n);for(const t of qi.values())Od(t,n);for(const t of Sw.values())Od(t,n);return!0}function Os(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vw(n,e,t=ga){Os(n,e).clearInstance(t)}function ut(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new so("app","Firebase",Cw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Pw;function Nw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ga,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=Up()),!t)throw Wt.create("no-options");const i=qi.get(s);if(i)if(wt(t,i.options)){if(wt(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Wt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new WI(s);for(const u of pu.values())o.addComponent(u);const c=new xw(t,r,o);return qi.set(s,c),c}function Ju(n=ga){const e=qi.get(n);if(!e&&n===ga&&Up())return Nw();if(!e)throw Wt.create("no-app",{appName:n});return e}function lC(){return Array.from(qi.values())}function Nt(n,e,t){let r=bw[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(o.join(" "));return}wr(new Ln(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebase-heartbeat-database",kw=1,$i="firebase-heartbeat-store";let Zc=null;function Wp(){return Zc||(Zc=AI(Dw,kw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($i)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Zc}async function Ow(n){try{const t=(await Wp()).transaction($i),r=await t.objectStore($i).get(Hp(n));return await t.done,r}catch(e){if(e instanceof $t)en.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(t.message)}}}async function Ld(n,e){try{const r=(await Wp()).transaction($i,"readwrite");await r.objectStore($i).put(e,Hp(n)),await r.done}catch(t){if(t instanceof $t)en.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});en.warn(r.message)}}}function Hp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=1024,Mw=30;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Md();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Mw){const o=qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Md(),{heartbeatsToSend:r,unsentEntries:s}=Uw(this._heartbeatsCache.heartbeats),i=ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return en.warn(t),""}}}function Md(){return new Date().toISOString().substring(0,10)}function Uw(n,e=Lw){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Fd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Bw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kp()?MI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ow(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fd(n){return ma(JSON.stringify({version:2,heartbeats:n})).length}function qw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n){wr(new Ln("platform-logger",e=>new XI(e),"PRIVATE")),wr(new Ln("heartbeat",e=>new Fw(e),"PRIVATE")),Nt(fu,kd,n),Nt(fu,kd,"esm2020"),Nt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$w("");var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,Qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(A,v,V){for(var y=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)y[Xe-2]=arguments[Xe];return _.prototype[v].apply(A,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,I){I||(I=0);const A=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)A[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;v<16;++v)A[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],v=T.g[2];let V=T.g[3],y;y=_+(V^I&(v^V))+A[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(v^_&(I^v))+A[1]+3905402710&4294967295,V=_+(y<<12&4294967295|y>>>20),y=v+(I^V&(_^I))+A[2]+606105819&4294967295,v=V+(y<<17&4294967295|y>>>15),y=I+(_^v&(V^_))+A[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(V^I&(v^V))+A[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(v^_&(I^v))+A[5]+1200080426&4294967295,V=_+(y<<12&4294967295|y>>>20),y=v+(I^V&(_^I))+A[6]+2821735955&4294967295,v=V+(y<<17&4294967295|y>>>15),y=I+(_^v&(V^_))+A[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(V^I&(v^V))+A[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(v^_&(I^v))+A[9]+2336552879&4294967295,V=_+(y<<12&4294967295|y>>>20),y=v+(I^V&(_^I))+A[10]+4294925233&4294967295,v=V+(y<<17&4294967295|y>>>15),y=I+(_^v&(V^_))+A[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(V^I&(v^V))+A[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(v^_&(I^v))+A[13]+4254626195&4294967295,V=_+(y<<12&4294967295|y>>>20),y=v+(I^V&(_^I))+A[14]+2792965006&4294967295,v=V+(y<<17&4294967295|y>>>15),y=I+(_^v&(V^_))+A[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^V&(I^v))+A[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^v&(_^I))+A[6]+3225465664&4294967295,V=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(V^_))+A[11]+643717713&4294967295,v=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(v^V))+A[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^V&(I^v))+A[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^v&(_^I))+A[10]+38016083&4294967295,V=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(V^_))+A[15]+3634488961&4294967295,v=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(v^V))+A[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^V&(I^v))+A[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^v&(_^I))+A[14]+3275163606&4294967295,V=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(V^_))+A[3]+4107603335&4294967295,v=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(v^V))+A[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^V&(I^v))+A[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^v&(_^I))+A[2]+4243563512&4294967295,V=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(V^_))+A[7]+1735328473&4294967295,v=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(v^V))+A[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^V)+A[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^v)+A[8]+2272392833&4294967295,V=_+(y<<11&4294967295|y>>>21),y=v+(V^_^I)+A[11]+1839030562&4294967295,v=V+(y<<16&4294967295|y>>>16),y=I+(v^V^_)+A[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^V)+A[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^v)+A[4]+1272893353&4294967295,V=_+(y<<11&4294967295|y>>>21),y=v+(V^_^I)+A[7]+4139469664&4294967295,v=V+(y<<16&4294967295|y>>>16),y=I+(v^V^_)+A[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^V)+A[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^v)+A[0]+3936430074&4294967295,V=_+(y<<11&4294967295|y>>>21),y=v+(V^_^I)+A[3]+3572445317&4294967295,v=V+(y<<16&4294967295|y>>>16),y=I+(v^V^_)+A[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^V)+A[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^v)+A[12]+3873151461&4294967295,V=_+(y<<11&4294967295|y>>>21),y=v+(V^_^I)+A[15]+530742520&4294967295,v=V+(y<<16&4294967295|y>>>16),y=I+(v^V^_)+A[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~V))+A[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~v))+A[7]+1126891415&4294967295,V=_+(y<<10&4294967295|y>>>22),y=v+(_^(V|~I))+A[14]+2878612391&4294967295,v=V+(y<<15&4294967295|y>>>17),y=I+(V^(v|~_))+A[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~V))+A[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~v))+A[3]+2399980690&4294967295,V=_+(y<<10&4294967295|y>>>22),y=v+(_^(V|~I))+A[10]+4293915773&4294967295,v=V+(y<<15&4294967295|y>>>17),y=I+(V^(v|~_))+A[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~V))+A[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~v))+A[15]+4264355552&4294967295,V=_+(y<<10&4294967295|y>>>22),y=v+(_^(V|~I))+A[6]+2734768916&4294967295,v=V+(y<<15&4294967295|y>>>17),y=I+(V^(v|~_))+A[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~V))+A[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~v))+A[11]+3174756917&4294967295,V=_+(y<<10&4294967295|y>>>22),y=v+(_^(V|~I))+A[2]+718787259&4294967295,v=V+(y<<15&4294967295|y>>>17),y=I+(V^(v|~_))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+V&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,A=this.C;let v=this.h,V=0;for(;V<_;){if(v==0)for(;V<=I;)s(this,T,V),V+=this.blockSize;if(typeof T=="string"){for(;V<_;)if(A[v++]=T.charCodeAt(V++),v==this.blockSize){s(this,A),v=0;break}}else for(;V<_;)if(A[v++]=T[V++],v==this.blockSize){s(this,A),v=0;break}}this.h=v,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)T[_++]=this.g[I]>>>A&255;return T};function i(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let A=!0;for(let v=T.length-1;v>=0;v--){const V=T[v]|0;A&&V==_||(I[v]=V,A=!1)}this.g=I}var c={};function u(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(l(-T));const _=[];let I=1;for(let A=0;T>=I;A++)_[A]=T/I|0,I*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=l(Math.pow(_,8));let A=p;for(let V=0;V<T.length;V+=8){var v=Math.min(8,T.length-V);const y=parseInt(T.substring(V,V+v),_);v<8?(v=l(Math.pow(_,v)),A=A.j(v).add(l(y))):(A=A.j(I),A=A.add(l(y)))}return A}var p=u(0),g=u(1),w=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-N(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);T+=(A>=0?A:4294967296+A)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(k(this))return"-"+N(this).toString(T);const _=l(Math.pow(T,6));var I=this;let A="";for(;;){const v=Y(I,_).g;I=q(I,v.j(_));let V=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=v,P(I))return V+A;for(;V.length<6;)V="0"+V;A=V+A}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=q(this,T),k(T)?-1:P(T)?0:1};function N(T){const _=T.g.length,I=[];for(let A=0;A<_;A++)I[A]=~T.g[A];return new o(I,~T.h).add(g)}n.abs=function(){return k(this)?N(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let A=0;for(let v=0;v<=_;v++){let V=A+(this.i(v)&65535)+(T.i(v)&65535),y=(V>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);A=y>>>16,V&=65535,y&=65535,I[v]=y<<16|V}return new o(I,I[I.length-1]&-2147483648?-1:0)};function q(T,_){return T.add(N(_))}n.j=function(T){if(P(this)||P(T))return p;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(this.l(w)<0&&T.l(w)<0)return l(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let v=0;v<T.g.length;v++){const V=this.i(A)>>>16,y=this.i(A)&65535,Xe=T.i(v)>>>16,tr=T.i(v)&65535;I[2*A+2*v]+=y*tr,G(I,2*A+2*v),I[2*A+2*v+1]+=V*tr,G(I,2*A+2*v+1),I[2*A+2*v+1]+=y*Xe,G(I,2*A+2*v+1),I[2*A+2*v+2]+=V*Xe,G(I,2*A+2*v+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function G(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function j(T,_){this.g=T,this.h=_}function Y(T,_){if(P(_))throw Error("division by zero");if(P(T))return new j(p,p);if(k(T))return _=Y(N(T),_),new j(N(_.g),N(_.h));if(k(_))return _=Y(T,N(_)),new j(N(_.g),_.h);if(T.g.length>30){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=_;A.l(T)<=0;)I=Z(I),A=Z(A);var v=te(I,1),V=te(A,1);for(A=te(A,2),I=te(I,2);!P(A);){var y=V.add(A);y.l(T)<=0&&(v=v.add(I),V=y),A=te(A,1),I=te(I,1)}return _=q(T,v.j(_)),new j(v,_)}for(v=p;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),V=l(I),y=V.j(_);k(y)||y.l(T)>0;)I-=A,V=l(I),y=V.j(_);P(V)&&(V=g),v=v.add(V),T=q(T,y)}return new j(v,T)}n.B=function(T){return Y(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)&T.i(A);return new o(I,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)|T.i(A);return new o(I,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)^T.i(A);return new o(I,this.h^T.h)};function Z(T){const _=T.g.length+1,I=[];for(let A=0;A<_;A++)I[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(I,T.h)}function te(T,_){const I=_>>5;_%=32;const A=T.g.length-I,v=[];for(let V=0;V<A;V++)v[V]=_>0?T.i(V+I)>>>_|T.i(V+I+1)<<32-_:T.i(V+I);return new o(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Nn=o}).apply(typeof Ud<"u"?Ud:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jp,vi,Yp,ta,mu,Xp,Zp,em;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in f))break e;f=f[b]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&f.push([m,h[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function l(a,h,f){return l=u,l.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,b,C){for(var B=Array(arguments.length-2),X=2;X<arguments.length;X++)B[X-2]=arguments[X];return h.prototype[b].apply(m,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function P(a,h){for(let m=1;m<arguments.length;m++){const b=arguments[m];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const C=b.length||0;a.length=f+C;for(let B=0;B<C;B++)a[f+B]=b[B]}else a.push(b)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function q(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class G{constructor(){this.h=this.g=null}add(h,f){const m=j.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var j=new k(()=>new Y,a=>a.reset());class Y{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,te=!1,T=new G,_=()=>{const a=Promise.resolve(void 0);Z=()=>{a.then(I)}};function I(){for(var a;a=q();){try{a.h.call(a.g)}catch(f){N(f)}var h=j;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}te=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Xe(a,h){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Xe,v),Xe.prototype.init=function(a,h){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Xe.Z.h.call(this)},Xe.prototype.h=function(){Xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tr="closure_listenable_"+(Math.random()*1e6|0),Ky=0;function Wy(a,h,f,m,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=b,this.key=++Ky,this.da=this.fa=!1}function So(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vo(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function Hy(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function xh(a){const h={};for(const f in a)h[f]=a[f];return h}const Nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dh(a,h){let f,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(f in m)a[f]=m[f];for(let C=0;C<Nh.length;C++)f=Nh[C],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function Co(a){this.src=a,this.g={},this.h=0}Co.prototype.add=function(a,h,f,m,b){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const B=Vc(a,h,m,b);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new Wy(h,this.src,C,!!m,b),h.fa=f,a.push(h)),h};function Sc(a,h){const f=h.type;if(f in a.g){var m=a.g[f],b=Array.prototype.indexOf.call(m,h,void 0),C;(C=b>=0)&&Array.prototype.splice.call(m,b,1),C&&(So(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vc(a,h,f,m){for(let b=0;b<a.length;++b){const C=a[b];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==m)return b}return-1}var Cc="closure_lm_"+(Math.random()*1e6|0),xc={};function kh(a,h,f,m,b){if(Array.isArray(h)){for(let C=0;C<h.length;C++)kh(a,h[C],f,m,b);return null}return f=Mh(f),a&&a[tr]?a.J(h,f,c(m)?!!m.capture:!1,b):Qy(a,h,f,!1,m,b)}function Qy(a,h,f,m,b,C){if(!h)throw Error("Invalid event type");const B=c(b)?!!b.capture:!!b;let X=Dc(a);if(X||(a[Cc]=X=new Co(a)),f=X.add(h,f,m,B,C),f.proxy)return f;if(m=Jy(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)V||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),m,b);else if(a.attachEvent)a.attachEvent(Lh(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Jy(){function a(f){return h.call(a.src,a.listener,f)}const h=Yy;return a}function Oh(a,h,f,m,b){if(Array.isArray(h))for(var C=0;C<h.length;C++)Oh(a,h[C],f,m,b);else m=c(m)?!!m.capture:!!m,f=Mh(f),a&&a[tr]?(a=a.i,C=String(h).toString(),C in a.g&&(h=a.g[C],f=Vc(h,f,m,b),f>-1&&(So(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[C],a.h--)))):a&&(a=Dc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vc(h,f,m,b)),(f=a>-1?h[a]:null)&&Nc(f))}function Nc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tr])Sc(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(Lh(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Dc(h))?(Sc(f,a),f.h==0&&(f.src=null,h[Cc]=null)):So(a)}}}function Lh(a){return a in xc?xc[a]:xc[a]="on"+a}function Yy(a,h){if(a.da)a=!0;else{h=new Xe(h,this);const f=a.listener,m=a.ha||a.src;a.fa&&Nc(a),a=f.call(m,h)}return a}function Dc(a){return a=a[Cc],a instanceof Co?a:null}var kc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mh(a){return typeof a=="function"?a:(a[kc]||(a[kc]=function(h){return a.handleEvent(h)}),a[kc])}function qe(){A.call(this),this.i=new Co(this),this.M=this,this.G=null}p(qe,A),qe.prototype[tr]=!0,qe.prototype.removeEventListener=function(a,h,f,m){Oh(this,a,h,f,m)};function Qe(a,h){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new v(h,a);else if(h instanceof v)h.target=h.target||a;else{var b=h;h=new v(m,a),Dh(h,b)}b=!0;let C,B;if(f)for(B=f.length-1;B>=0;B--)C=h.g=f[B],b=xo(C,m,!0,h)&&b;if(C=h.g=a,b=xo(C,m,!0,h)&&b,b=xo(C,m,!1,h)&&b,f)for(B=0;B<f.length;B++)C=h.g=f[B],b=xo(C,m,!1,h)&&b}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let m=0;m<f.length;m++)So(f[m]);delete a.g[h],a.h--}}this.G=null},qe.prototype.J=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},qe.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function xo(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let C=0;C<h.length;++C){const B=h[C];if(B&&!B.da&&B.capture==f){const X=B.listener,Se=B.ha||B.src;B.fa&&Sc(a.i,B),b=X.call(Se,m)!==!1&&b}}return b&&!m.defaultPrevented}function Xy(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Fh(a){a.g=Xy(()=>{a.g=null,a.i&&(a.i=!1,Fh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Zy extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(a){A.call(this),this.h=a,this.g={}}p(Zs,A);var Uh=[];function Bh(a){Vo(a.g,function(h,f){this.g.hasOwnProperty(f)&&Nc(h)},a),a.g={}}Zs.prototype.N=function(){Zs.Z.N.call(this),Bh(this)},Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oc=o.JSON.stringify,eI=o.JSON.parse,tI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qh(){}function $h(){}var ei={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Lc(){v.call(this,"d")}p(Lc,v);function Mc(){v.call(this,"c")}p(Mc,v);var nr={},jh=null;function No(){return jh=jh||new qe}nr.Ia="serverreachability";function zh(a){v.call(this,nr.Ia,a)}p(zh,v);function ti(a){const h=No();Qe(h,new zh(h))}nr.STAT_EVENT="statevent";function Gh(a,h){v.call(this,nr.STAT_EVENT,a),this.stat=h}p(Gh,v);function Je(a){const h=No();Qe(h,new Gh(h,a))}nr.Ja="timingevent";function Kh(a,h){v.call(this,nr.Ja,a),this.size=h}p(Kh,v);function ni(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ri(){this.g=!0}ri.prototype.ua=function(){this.g=!1};function nI(a,h,f,m,b,C){a.info(function(){if(a.g)if(C){var B="",X=C.split("&");for(let he=0;he<X.length;he++){var Se=X[he].split("=");if(Se.length>1){const ke=Se[0];Se=Se[1];const At=ke.split("_");B=At.length>=2&&At[1]=="type"?B+(ke+"="+Se+"&"):B+(ke+"=redacted&")}}}else B=null;else B=C;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+h+`
`+f+`
`+B})}function rI(a,h,f,m,b,C,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+h+`
`+f+`
`+C+" "+B})}function jr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+iI(a,f)+(m?" "+m:"")})}function sI(a,h){a.info(function(){return"TIMEOUT: "+h})}ri.prototype.info=function(){};function iI(a,h){if(!a.g)return h;if(!h)return null;try{const C=JSON.parse(h);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var f=C[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var b=m[0];if(b!="noop"&&b!="stop"&&b!="close")for(let B=1;B<m.length;B++)m[B]=""}}}}return Oc(C)}catch{return h}}var Do={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hh;function Fc(){}p(Fc,qh),Fc.prototype.g=function(){return new XMLHttpRequest},Hh=new Fc;function si(a){return encodeURIComponent(String(a))}function oI(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function dn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.S=m||1,this.V=new Zs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qh}function Qh(){this.i=null,this.g="",this.h=!1}var Jh={},Uc={};function Bc(a,h,f){a.M=1,a.A=Oo(vt(h)),a.u=f,a.R=!0,Yh(a,null)}function Yh(a,h){a.F=Date.now(),ko(a),a.B=vt(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),ld(f.i,"t",m),a.C=0,f=a.j.L,a.h=new Qh,a.g=Sd(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Zy(l(a.Y,a,a.g),a.P)),h=a.V,f=a.g,m=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Uh[0]=b.toString()),b=Uh);for(let C=0;C<b.length;C++){const B=kh(f,b[C],m||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?xh(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ti(),nI(a.i,a.v,a.B,a.l,a.S,a.u)}dn.prototype.ba=function(a){a=a.target;const h=this.O;h&&mn(a)==3?h.j():this.Y(a)},dn.prototype.Y=function(a){try{if(a==this.g)e:{const X=mn(this.g),Se=this.g.ya(),he=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||_d(this.g)))){this.K||X!=4||Se==7||(Se==8||he<=0?ti(3):ti(2)),qc(this);var h=this.g.ca();this.X=h;var f=aI(this);if(this.o=h==200,rI(this.i,this.v,this.B,this.l,this.S,X,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,b=this.g;if((m=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var C=m;break t}}C=null}if(a=C)jr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$c(this,a);else{this.o=!1,this.m=3,Je(12),rr(this),ii(this);break e}}if(this.R){a=!0;let ke;for(;!this.K&&this.C<f.length;)if(ke=cI(this,f),ke==Uc){X==4&&(this.m=4,Je(14),a=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==Jh){this.m=4,Je(15),jr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else jr(this.i,this.l,ke,null),$c(this,ke);if(Xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||f.length!=0||this.h.h||(this.m=1,Je(16),a=!1),this.o=this.o&&a,!a)jr(this.i,this.l,f,"[Invalid Chunked Response]"),rr(this),ii(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Jc(B),B.P=!0,Je(11))}}else jr(this.i,this.l,f,null),$c(this,f);X==4&&rr(this),this.o&&!this.K&&(X==4?Ad(this.j,this):(this.o=!1,ko(this)))}else EI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Je(12)):(this.m=0,Je(13)),rr(this),ii(this)}}}catch{}finally{}};function aI(a){if(!Xh(a))return a.g.la();const h=_d(a.g);if(h==="")return"";let f="";const m=h.length,b=mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return rr(a),ii(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<m;C++)a.h.h=!0,f+=a.h.i.decode(h[C],{stream:!(b&&C==m-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Xh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cI(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Uc:(f=Number(h.substring(f,m)),isNaN(f)?Jh:(m+=1,m+f>h.length?Uc:(h=h.slice(m,m+f),a.C=m+f,h)))}dn.prototype.cancel=function(){this.K=!0,rr(this)};function ko(a){a.T=Date.now()+a.H,Zh(a,a.H)}function Zh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ni(l(a.aa,a),h)}function qc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sI(this.i,this.B),this.M!=2&&(ti(),Je(17)),rr(this),this.m=2,ii(this)):Zh(this,this.T-a)};function ii(a){a.j.I==0||a.K||Ad(a.j,a)}function rr(a){qc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Bh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function $c(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||jc(f.h,a))){if(!a.L&&jc(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Bo(f),Fo(f);else break e;Qc(f),Je(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ni(l(f.Va,f),6e3));nd(f.h)<=1&&f.ta&&(f.ta=void 0)}else ir(f,11)}else if((a.L||f.g==a)&&Bo(f),!y(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let he=b[h];const ke=he[0];if(!(ke<=f.K))if(f.K=ke,he=he[1],f.I==2)if(he[0]=="c"){f.M=he[1],f.ba=he[2];const At=he[3];At!=null&&(f.ka=At,f.j.info("VER="+f.ka));const or=he[4];or!=null&&(f.za=or,f.j.info("SVER="+f.za));const gn=he[5];gn!=null&&typeof gn=="number"&&gn>0&&(m=1.5*gn,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const _n=a.g;if(_n){const $o=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($o){var C=m.h;C.g||$o.indexOf("spdy")==-1&&$o.indexOf("quic")==-1&&$o.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(zc(C,C.h),C.h=null))}if(m.G){const Yc=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Yc&&(m.wa=Yc,me(m.J,m.G,Yc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var B=a;if(m.na=bd(m,m.L?m.ba:null,m.W),B.L){rd(m.h,B);var X=B,Se=m.O;Se&&(X.H=Se),X.D&&(qc(X),ko(X)),m.g=B}else Ed(m);f.i.length>0&&Uo(f)}else he[0]!="stop"&&he[0]!="close"||ir(f,7);else f.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?ir(f,7):Hc(f):he[0]!="noop"&&f.l&&f.l.qa(he),f.A=0)}}ti(4)}catch{}}var uI=class{constructor(a,h){this.g=a,this.map=h}};function ed(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function td(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nd(a){return a.h?1:a.g?a.g.size:0}function jc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function zc(a,h){a.g?a.g.add(h):a.h=h}function rd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ed.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return w(a.i)}var id=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let b,C=null;m>=0?(b=a[f].substring(0,m),C=a[f].substring(m+1)):b=a[f],h(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function fn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof fn?(this.l=a.l,oi(this,a.j),this.o=a.o,this.g=a.g,ai(this,a.u),this.h=a.h,Gc(this,hd(a.i)),this.m=a.m):a&&(h=String(a).match(id))?(this.l=!1,oi(this,h[1]||"",!0),this.o=ci(h[2]||""),this.g=ci(h[3]||"",!0),ai(this,h[4]),this.h=ci(h[5]||"",!0),Gc(this,h[6]||"",!0),this.m=ci(h[7]||"")):(this.l=!1,this.i=new li(null,this.l))}fn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ui(h,od,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ui(h,od,!0),"@"),a.push(si(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ui(f,f.charAt(0)=="/"?fI:dI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ui(f,mI)),a.join("")},fn.prototype.resolve=function(a){const h=vt(this);let f=!!a.j;f?oi(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var m=a.h;if(f)ai(h,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var b=h.h.lastIndexOf("/");b!=-1&&(m=h.h.slice(0,b+1)+m)}if(b=m,b==".."||b==".")m="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){m=b.lastIndexOf("/",0)==0,b=b.split("/");const C=[];for(let B=0;B<b.length;){const X=b[B++];X=="."?m&&B==b.length&&C.push(""):X==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&B==b.length&&C.push("")):(C.push(X),m=!0)}m=C.join("/")}else m=b}return f?h.h=m:f=a.i.toString()!=="",f?Gc(h,hd(a.i)):f=!!a.m,f&&(h.m=a.m),h};function vt(a){return new fn(a)}function oi(a,h,f){a.j=f?ci(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ai(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Gc(a,h,f){h instanceof li?(a.i=h,gI(a.i,a.l)):(f||(h=ui(h,pI)),a.i=new li(h,a.l))}function me(a,h,f){a.i.set(h,f)}function Oo(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ci(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,hI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var od=/[#\/\?@]/g,dI=/[#\?:]/g,fI=/[#\?]/g,pI=/[#\?@]/g,mI=/#/g;function li(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&lI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=li.prototype,n.add=function(a,h){sr(this),this.i=null,a=zr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ad(a,h){sr(a),h=zr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cd(a,h){return sr(a),h=zr(a,h),a.g.has(h)}n.forEach=function(a,h){sr(this),this.g.forEach(function(f,m){f.forEach(function(b){a.call(h,b,m,this)},this)},this)};function ud(a,h){sr(a);let f=[];if(typeof h=="string")cd(a,h)&&(f=f.concat(a.g.get(zr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return sr(this),this.i=null,a=zr(this,a),cd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=ud(this,a),a.length>0?String(a[0]):h):h};function ld(a,h,f){ad(a,h),f.length>0&&(a.i=null,a.g.set(zr(a,h),w(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var f=h[m];const b=si(f);f=ud(this,f);for(let C=0;C<f.length;C++){let B=b;f[C]!==""&&(B+="="+si(f[C])),a.push(B)}}return this.i=a.join("&")};function hd(a){const h=new li;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function zr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function gI(a,h){h&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(f,m){const b=m.toLowerCase();m!=b&&(ad(this,m),ld(this,b,f))},a)),a.j=h}function _I(a,h){const f=new ri;if(o.Image){const m=new Image;m.onload=d(pn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=d(pn,f,"TestLoadImage: error",!1,h,m),m.onabort=d(pn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=d(pn,f,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function yI(a,h){const f=new ri,m=new AbortController,b=setTimeout(()=>{m.abort(),pn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(b),C.ok?pn(f,"TestPingServer: ok",!0,h):pn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),pn(f,"TestPingServer: error",!1,h)})}function pn(a,h,f,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(f)}catch{}}function II(){this.g=new tI}function Kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Kc,qh),Kc.prototype.g=function(){return new Lo(this.i,this.h)};function Lo(a,h){qe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Lo,qe),n=Lo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,di(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?hi(this):di(this),this.readyState==3&&dd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,hi(this))},n.Na=function(a){this.g&&(this.response=a,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,di(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function di(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fd(a){let h="";return Vo(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Wc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=fd(f),typeof a=="string"?f!=null&&si(f):me(a,h,f))}function we(a){qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,qe);var wI=/^https?$/i,TI=["POST","PUT"];n=we.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hh.g(),this.g.onreadystatechange=g(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(C){pd(this,C);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)f.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())f.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(TI,h,void 0)>=0)||m||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){pd(this,C)}};function pd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,md(a),Mo(a)}function md(a){a.A||(a.A=!0,Qe(a,"complete"),Qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Qe(this,"complete"),Qe(this,"abort"),Mo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mo(this,!0)),we.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gd(this):this.Xa())},n.Xa=function(){gd(this)};function gd(a){if(a.h&&typeof i<"u"){if(a.v&&mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Qe(a,"readystatechange"),mn(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=C===0){let B=String(a.D).match(id)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),m=!wI.test(B?B.toLowerCase():"")}f=m}if(f)Qe(a,"complete"),Qe(a,"success");else{a.o=6;try{var b=mn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",md(a)}}finally{Mo(a)}}}}function Mo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Qe(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return mn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),eI(h)}};function _d(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function EI(a){const h={};a=(a.g&&mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var f=oI(a[m]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[b]||[];h[b]=C,C.push(f)}Hy(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function yd(a){this.za=0,this.i=[],this.j=new ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fi("baseRetryDelayMs",5e3,a),this.Za=fi("retryDelaySeedMs",1e4,a),this.Ta=fi("forwardChannelMaxRetries",2,a),this.va=fi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ed(a&&a.concurrentRequestLimit),this.Ba=new II,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,m){Je(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=bd(this,null,this.W),Uo(this)};function Hc(a){if(Id(a),a.I==3){var h=a.V++,f=vt(a.J);if(me(f,"SID",a.M),me(f,"RID",h),me(f,"TYPE","terminate"),pi(a,f),h=new dn(a,a.j,h),h.M=2,h.A=Oo(vt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Sd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ko(h)}Pd(a)}function Fo(a){a.g&&(Jc(a),a.g.cancel(),a.g=null)}function Id(a){Fo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Uo(a){if(!td(a.h)&&!a.m){a.m=!0;var h=a.Ea;Z||_(),te||(Z(),te=!0),T.add(h,a),a.D=0}}function vI(a,h){return nd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ni(l(a.Ea,a,h),Rd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new dn(this,this.j,a);let C=this.o;if(this.U&&(C?(C=xh(C),Dh(C,this.U)):C=this.U),this.u!==null||this.R||(b.J=C,C=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Td(this,b,h),f=vt(this.J),me(f,"RID",a),me(f,"CVER",22),this.G&&me(f,"X-HTTP-Session-Id",this.G),pi(this,f),C&&(this.R?h="headers="+si(fd(C))+"&"+h:this.u&&Wc(f,this.u,C)),zc(this.h,b),this.Ra&&me(f,"TYPE","init"),this.S?(me(f,"$req",h),me(f,"SID","null"),b.U=!0,Bc(b,f,null)):Bc(b,f,h),this.I=2}}else this.I==3&&(a?wd(this,a):this.i.length==0||td(this.h)||wd(this))};function wd(a,h){var f;h?f=h.l:f=a.V++;const m=vt(a.J);me(m,"SID",a.M),me(m,"RID",f),me(m,"AID",a.K),pi(a,m),a.u&&a.o&&Wc(m,a.u,a.o),f=new dn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Td(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),zc(a.h,f),Bc(f,m,h)}function pi(a,h){a.H&&Vo(a.H,function(f,m){me(h,m,f)}),a.l&&Vo({},function(f,m){me(h,m,f)})}function Td(a,h,f){f=Math.min(a.i.length,f);const m=a.l?l(a.l.Ka,a.l,a):null;e:{var b=a.i;let X=-1;for(;;){const Se=["count="+f];X==-1?f>0?(X=b[0].g,Se.push("ofs="+X)):X=0:Se.push("ofs="+X);let he=!0;for(let ke=0;ke<f;ke++){var C=b[ke].g;const At=b[ke].map;if(C-=X,C<0)X=Math.max(0,b[ke].g-100),he=!1;else try{C="req"+C+"_"||"";try{var B=At instanceof Map?At:Object.entries(At);for(const[or,gn]of B){let _n=gn;c(gn)&&(_n=Oc(gn)),Se.push(C+or+"="+encodeURIComponent(_n))}}catch(or){throw Se.push(C+"type="+encodeURIComponent("_badmap")),or}}catch{m&&m(At)}}if(he){B=Se.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function Ed(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Z||_(),te||(Z(),te=!0),T.add(h,a),a.A=0}}function Qc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ni(l(a.Da,a),Rd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,vd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ni(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Je(10),Fo(this),vd(this))};function Jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vd(a){a.g=new dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=vt(a.na);me(h,"RID","rpc"),me(h,"SID",a.M),me(h,"AID",a.K),me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(h,"TO",a.ia),me(h,"TYPE","xmlhttp"),pi(a,h),a.u&&a.o&&Wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Oo(vt(h)),f.u=null,f.R=!0,Yh(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Fo(this),Qc(this),Je(19))};function Bo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ad(a,h){var f=null;if(a.g==h){Bo(a),Jc(a),a.g=null;var m=2}else if(jc(a.h,h))f=h.G,rd(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;m=No(),Qe(m,new Kh(m,f)),Uo(a)}else Ed(a);else if(b=h.m,b==3||b==0&&h.X>0||!(m==1&&vI(a,h)||m==2&&Qc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),b){case 1:ir(a,5);break;case 4:ir(a,10);break;case 3:ir(a,6);break;default:ir(a,2)}}}function Rd(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ir(a,h){if(a.j.info("Error code "+h),h==2){var f=l(a.bb,a),m=a.Ua;const b=!m;m=new fn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oi(m,"https"),Oo(m),b?_I(m.toString(),f):yI(m.toString(),f)}else Je(2);a.I=0,a.l&&a.l.pa(h),Pd(a),Id(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Pd(a){if(a.I=0,a.ja=[],a.l){const h=sd(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function bd(a,h,f){var m=f instanceof fn?vt(f):new fn(f);if(m.g!="")h&&(m.g=h+"."+m.g),ai(m,m.u);else{var b=o.location;m=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const C=new fn(null);m&&oi(C,m),h&&(C.g=h),b&&ai(C,b),f&&(C.h=f),m=C}return f=a.G,h=a.wa,f&&h&&me(m,f,h),me(m,"VER",a.ka),pi(a,m),m}function Sd(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new Kc({ab:f})):new we(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vd(){}n=Vd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qo(){}qo.prototype.g=function(a,h){return new ot(a,h)};function ot(a,h){qe.call(this),this.g=new yd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Gr(this)}p(ot,qe),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Hc(this.g)},ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Oc(a),a=f);h.i.push(new uI(h.Ya++,a)),h.I==3&&Uo(h)},ot.prototype.N=function(){this.g.l=null,delete this.j,Hc(this.g),delete this.g,ot.Z.N.call(this)};function Cd(a){Lc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Cd,Lc);function xd(){Mc.call(this),this.status=1}p(xd,Mc);function Gr(a){this.g=a}p(Gr,Vd),Gr.prototype.ra=function(){Qe(this.g,"a")},Gr.prototype.qa=function(a){Qe(this.g,new Cd(a))},Gr.prototype.pa=function(a){Qe(this.g,new xd)},Gr.prototype.oa=function(){Qe(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,em=function(){return new qo},Zp=function(){return No()},Xp=nr,mu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,ta=Do,Wh.COMPLETE="complete",Yp=Wh,$h.EventType=ei,ei.OPEN="a",ei.CLOSE="b",ei.ERROR="c",ei.MESSAGE="d",qe.prototype.listen=qe.prototype.J,vi=$h,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,Jp=we}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="12.17.0";function jw(n){Ls=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Qu("@firebase/firestore");function Zr(){return Mn.logLevel}function zw(n){Mn.setLogLevel(n)}function O(n,...e){if(Mn.logLevel<=ne.DEBUG){const t=e.map(Yu);Mn.debug(`Firestore (${Ls}): ${n}`,...t)}}function Te(n,...e){if(Mn.logLevel<=ne.ERROR){const t=e.map(Yu);Mn.error(`Firestore (${Ls}): ${n}`,...t)}}function xe(n,...e){if(Mn.logLevel<=ne.WARN){const t=e.map(Yu);Mn.warn(`Firestore (${Ls}): ${n}`,...t)}}function Yu(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,tm(n,r,t)}function tm(n,e,t){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Te(r),new Error(r)}function L(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||tm(e,s,r)}function Gw(n,e){n||$(57014,e)}function U(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Kw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function gu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return eu(s)===eu(i)?W(s,i):eu(s)?1:-1}return W(n.length,e.length)}const Ww=55296,Hw=57343;function eu(n){const e=n.charCodeAt(0);return e>=Ww&&e<=Hw}function ls(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function nm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=s??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ue(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bd(this.data.getIterator())}getIteratorFrom(e){return new Bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Kr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends $t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="__name__";class Rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Rt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return W(e.length,t.length)}static compareSegments(e,t){const r=Rt.isNumericId(e),s=Rt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Rt.extractNumericId(e).compare(Rt.extractNumericId(t)):gu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class J extends Rt{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Qw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Ee=class es extends Rt{construct(e,t,r){return new es(e,t,r)}static isValidIdentifier(e){return Qw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),es.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bt}static keyField(){return new es([bt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new es(t)}static emptyPath(){return new es([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new et([])}unionWith(e){let t=new ae(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xu(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function rm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(J.fromString(e))}static fromName(e){return new M(J.fromString(e).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e,t){if(!t)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sm(n,e,t,r){if(e===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qd(n){if(!M.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $d(n){if(M.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function ee(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qa(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function im(n,e){if(e<=0)throw new D(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function kr(n,e){if(!oo(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=-62135596800,zd=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*zd);return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jd)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zd}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kr(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Pe("string",ie._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new om("Invalid base64 string: "+i):i}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const Yw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(n){if(L(!!n,39018),typeof n=="string"){let e=0;const t=Yw.exec(n);if(L(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="server_timestamp",cm="__type__",um="__previous_value__",lm="__local_write_time__";function ao(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cm])==null?void 0:r.stringValue)===am}function co(n){const e=n.mapValue.fields[um];return ao(e)?co(e):e}function hs(n){const e=tn(n.mapValue.fields[lm].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,r,s,i,o,c,u,l,d,p,g,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=p,this._customHeaders=g,this.grpcFlowControlWindow=w}}const ji="(default)";class Fn{constructor(e,t){this.projectId=e,this.database=t||ji}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database===ji}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}function Zw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=-1;function uo(n){return n==null}function ds(n){return n===0&&1/n==-1/0}function hm(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function eT(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="__type__",dm="__max__",Cn={mapValue:{fields:{__type__:{stringValue:dm}}}},tl="__vector__",Tr="value",Dt={nullValue:"NULL_VALUE"},st={booleanValue:!0},Me={booleanValue:!1};function be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ao(n)?4:fm(n)?9007199254740991:vr(n)?10:11:$(28295,{value:n})}function pt(n,e,t){if(n===e)return!0;const r=be(n);if(r!==be(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hs(n).isEqual(hs(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=tn(i.timestampValue),u=tn(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return nn(i.bytesValue).isEqual(nn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return fe(i.geoPointValue.latitude)===fe(o.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o,c){if("integerValue"in i&&"integerValue"in o)return fe(i.integerValue)===fe(o.integerValue);let u,l;if("doubleValue"in i&&"doubleValue"in o)u=fe(i.doubleValue),l=fe(o.doubleValue);else{if(!(c!=null&&c.t))return!1;u=fe(i.integerValue??i.doubleValue),l=fe(o.integerValue??o.doubleValue)}return u===l?!!(c!=null&&c.i)||ds(u)===ds(l):!!(c===void 0||c.o)&&isNaN(u)&&isNaN(l)})(n,e,t);case 9:return ls(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>pt(s,i,t)));case 10:case 11:return(function(i,o,c){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(_a(u)!==_a(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!pt(u[d],l[d],c)))return!1;return!0})(n,e,t);default:return $(52216,{left:n})}}function zi(n,e){return(n.values||[]).find((t=>pt(t,e)))!==void 0}function We(n,e){if(n===e)return 0;const t=be(n),r=be(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=fe(i.integerValue||i.doubleValue),u=fe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Gd(n.timestampValue,e.timestampValue);case 4:return Gd(hs(n),hs(e));case 5:return gu(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=nn(i),u=nn(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=W(c[l],u[l]);if(d!==0)return d}return W(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=W(fe(i.latitude),fe(o.latitude));return c!==0?c:W(fe(i.longitude),fe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Kd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,w,P,k;const c=i.fields||{},u=o.fields||{},l=(g=c[Tr])==null?void 0:g.arrayValue,d=(w=u[Tr])==null?void 0:w.arrayValue,p=W(((P=l==null?void 0:l.values)==null?void 0:P.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Kd(l,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Cn.mapValue&&o===Cn.mapValue)return 0;if(i===Cn.mapValue)return 1;if(o===Cn.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=gu(u[p],d[p]);if(g!==0)return g;const w=We(c[u[p]],l[d[p]]);if(w!==0)return w}return W(u.length,d.length)})(n.mapValue,e.mapValue);default:throw $(23264,{u:t})}}function Gd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=tn(n),r=tn(e),s=W(t.seconds,r.seconds);return s!==0?s:W(t.nanos,r.nanos)}function Kd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=We(t[s],r[s]);if(i!==void 0&&i!==0)return i}return W(t.length,r.length)}function fs(n){return _u(n)}function _u(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=tn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return nn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return M.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=_u(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_u(t.fields[o])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function na(n){switch(be(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=co(n);return e?16+na(e):16;case 5:return 2*n.stringValue.length;case 6:return nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+na(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Hn(r.fields,((i,o)=>{s+=i.length+na(o)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function Er(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function St(n){return!!n&&"integerValue"in n}function mr(n){return!!n&&"doubleValue"in n}function Un(n){return St(n)||mr(n)}function Bn(n){return!!n&&"arrayValue"in n}function lt(n){return!!n&&"nullValue"in n}function it(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function vr(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[el])==null?void 0:r.stringValue)===tl}function yu(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Tr])==null?void 0:t.arrayValue}function bi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Hn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=bi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bi(n.arrayValue.values[t]);return e}return{...n}}function fm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dm}const pm={mapValue:{fields:{[el]:{stringValue:tl},[Tr]:{arrayValue:{}}}}};function tT(n){return"nullValue"in n?Dt:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Er(Fn.empty(),M.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?vr(n)?pm:{mapValue:{}}:$(35942,{value:n})}function nT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Er(Fn.empty(),M.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?pm:"mapValue"in n?vr(n)?{mapValue:{}}:Cn:$(61959,{value:n})}function Wd(n,e){const t=We(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Hd(n,e){const t=We(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=bi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Hn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ve(bi(this.value))}}function mm(n){const e=[];return Hn(n.fields,((t,r)=>{const s=new Ee([t]);if(_r(r)){const i=mm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(e)?"-0":e}}function nl(n){return{integerValue:""+n}}function Ms(n,e,t){return hm(e)?nl(e):Ja(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this._=void 0}}function rT(n,e,t){return n instanceof ps?(function(s,i){const o={fields:{[cm]:{stringValue:am},[lm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ao(i)&&(i=co(i)),i&&(o.fields[um]=i),{mapValue:o}})(t,e):n instanceof Ar?_m(n,e):n instanceof Rr?ym(n,e):n instanceof Pr?(function(s,i){const o=gm(s,i),c=ya(o)+ya(s.l);return St(o)&&St(s.l)?nl(c):Ja(s.serializer,c)})(n,e):n instanceof ms?(function(s,i){return Qd(s,i,Math.min)})(n,e):n instanceof gs?(function(s,i){return Qd(s,i,Math.max)})(n,e):void 0}function sT(n,e,t){return n instanceof Ar?_m(n,e):n instanceof Rr?ym(n,e):t}function gm(n,e){return n instanceof Pr?Un(e)?e:{integerValue:0}:null}class ps extends Ya{}class Ar extends Ya{constructor(e){super(),this.elements=e}}function _m(n,e){const t=Im(e);for(const r of n.elements)t.some((s=>pt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Rr extends Ya{constructor(e){super(),this.elements=e}}function ym(n,e){let t=Im(e);for(const r of n.elements)t=t.filter((s=>!pt(s,r)));return{arrayValue:{values:t}}}class rl extends Ya{constructor(e,t){super(),this.serializer=e,this.l=t}}class Pr extends rl{}class ms extends rl{}class gs extends rl{}function Qd(n,e,t){if(!Un(e))return n.l;const r=t(ya(e),ya(n.l));return St(e)&&St(n.l)?nl(r):Ja(n.serializer,r)}function ya(n){return fe(n.integerValue||n.doubleValue)}function Im(n){return Bn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.field=e,this.transform=t}}function iT(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ar&&s instanceof Ar||r instanceof Rr&&s instanceof Rr?ls(r.elements,s.elements,pt):r instanceof Pr&&s instanceof Pr||r instanceof ms&&s instanceof ms||r instanceof gs&&s instanceof gs?pt(r.l,s.l):r instanceof ps&&s instanceof ps})(n.transform,e.transform)}class oT{constructor(e,t){this.version=e,this.transformResults=t}}class _e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xa{}function wm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Us(n.key,_e.none()):new Fs(n.key,n.data,_e.none());{const t=n.data,r=Ve.empty();let s=new ae(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new an(n.key,r,new et(s.toArray()),_e.none())}}function aT(n,e,t){n instanceof Fs?(function(s,i,o){const c=s.value.clone(),u=Yd(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof an?(function(s,i,o){if(!ra(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Yd(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Tm(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Si(n,e,t,r){return n instanceof Fs?(function(i,o,c,u){if(!ra(i.precondition,o))return c;const l=i.value.clone(),d=Xd(i.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof an?(function(i,o,c,u){if(!ra(i.precondition,o))return c;const l=Xd(i.fieldTransforms,u,o),d=o.data;return d.setAll(Tm(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return ra(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function cT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=gm(r.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,i))}return t||null}function Jd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,((i,o)=>iT(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fs extends Xa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends Xa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Yd(n,e,t){const r=new Map;L(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,sT(o,c,t[s]))}return r}function Xd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,rT(i,o,e))}return r}class Us extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sl extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.position=e,this.inclusive=t}}function Zd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),t.key):r=We(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ef(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{}class re extends vm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new uT(e,t,r):t==="array-contains"?new dT(e,r):t==="in"?new Vm(e,r):t==="not-in"?new fT(e,r):t==="array-contains-any"?new pT(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lT(e,r):new hT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(We(t,this.value)):t!==null&&be(this.value)===be(t)&&this.matchesComparison(We(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends vm{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new ue(e,t)}matches(e){return _s(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function _s(n){return n.op==="and"}function Iu(n){return n.op==="or"}function il(n){return Am(n)&&_s(n)}function Am(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function wu(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+fs(n.value);if(il(n))return n.filters.map((e=>wu(e))).join(",");{const e=n.filters.map((t=>wu(t))).join(",");return`${n.op}(${e})`}}function Rm(n,e){return n instanceof re?(function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&pt(r.value,s.value)})(n,e):n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Rm(o,s.filters[c])),!0):!1})(n,e):void $(19439)}function Pm(n,e){const t=n.filters.concat(e);return ue.create(t,n.op)}function bm(n){return n instanceof re?(function(t){return`${t.field.canonicalString()} ${t.op} ${fs(t.value)}`})(n):n instanceof ue?(function(t){return t.op.toString()+" {"+t.getFilters().map(bm).join(" ,")+"}"})(n):"Filter"}class uT extends re{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class lT extends re{constructor(e,t){super(e,"in",t),this.keys=Sm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hT extends re{constructor(e,t){super(e,"not-in",t),this.keys=Sm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>M.fromName(r.referenceValue)))}class dT extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bn(t)&&zi(t.arrayValue,this.value)}}class Vm extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zi(this.value.arrayValue,t)}}class fT extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zi(this.value.arrayValue,t)}}class pT extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>zi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function mT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ie(0,0))}static max(){return new z(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ge(e,0,z.min(),z.min(),z.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,s){return new ge(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new ge(e,2,t,z.min(),z.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,z.min(),z.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=-1;class Is{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Tu(n){return n.fields.find((e=>e.kind===2))}function cr(n){return n.fields.filter((e=>e.kind!==2))}function gT(n,e){let t=W(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=_T(n.fields[r],e.fields[r]),t!==0)return t;return W(n.fields.length,e.fields.length)}Is.UNKNOWN_ID=-1;class yr{constructor(e,t){this.fieldPath=e,this.kind=t}}function _T(n,e){const t=Ee.comparator(n.fieldPath,e.fieldPath);return t!==0?t:W(n.kind,e.kind)}class ws{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ws(0,ht.min())}}function Cm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new ht(s,M.empty(),e)}function xm(n){return new ht(n.readTime,n.key,ys)}class ht{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ht(z.min(),M.empty(),ys)}static max(){return new ht(z.max(),M.empty(),ys)}}function ol(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.R=null}}function Eu(n,e=null,t=[],r=[],s=null,i=null,o=null){return new yT(n,e,t,r,s,i,o)}function Ia(n){const e=U(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>wu(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>fs(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>fs(r))).join(",")),e.R=t}return e.R}function al(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Rm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ef(n.startAt,e.startAt)&&ef(n.endAt,e.endAt)}function Kt(n){return!!n.isCorePipeline}function cl(n){return!!n.path&&M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function wa(n,e){return n.filters.filter((t=>t instanceof re&&t.field.isEqual(e)))}function tf(n,e,t){let r=Dt,s=!0;for(const i of wa(n,e)){let o=Dt,c=!0;switch(i.op){case"<":case"<=":o=tT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Dt}Wd({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Wd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function nf(n,e,t){let r=Cn,s=!0;for(const i of wa(n,e)){let o=Cn,c=!0;switch(i.op){case">=":case">":o=nT(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Cn}Hd({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Hd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function Nm(n,e,t,r,s,i,o,c){return new cn(n,e,t,r,s,i,o,c)}function Bs(n){return new cn(n)}function rf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function IT(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ul(n){return n.collectionGroup!==null}function ss(n){const e=U(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(Ee.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(c=c.add(l.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new Gi(i,r))})),t.has(Ee.keyField().canonicalString())||e.I.push(new Gi(Ee.keyField(),r))}return e.I}function Ge(n){const e=U(n);return e.A||(e.A=km(e,ss(n))),e.A}function Dm(n){const e=U(n);return e.V||(e.V=km(e,n.explicitOrderBy)),e.V}function km(n,e){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)}));const t=n.endAt?new qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qn(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vu(n,e){const t=n.filters.concat([e]);return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wT(n,e){const t=n.explicitOrderBy.concat([e]);return new cn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ta(n,e,t){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function TT(n,e){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,e,n.endAt)}function ET(n,e){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,e)}function Om(n,e){return al(Ge(n),Ge(e))&&n.limitType===e.limitType}function Vi(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>bm(s))).join(", ")}]`),uo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>fs(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>fs(s))).join(",")),`Target(${r})`})(Ge(n))}; limitType=${n.limitType})`}function Za(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,u){const l=Zd(o,c,u);return o.inclusive?l<=0:l<0})(r.startAt,ss(r),s)||r.endAt&&!(function(o,c,u){const l=Zd(o,c,u);return o.inclusive?l>=0:l>0})(r.endAt,ss(r),s))})(n,e)}function ec(n){return(e,t)=>{let r=!1;for(const s of ss(n)){const i=vT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vT(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):(function(i,o,c){const u=o.data.field(i),l=c.data.field(i);return u!==null&&l!==null?We(u,l):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,se;function Lm(n){switch(n){case S.OK:return $(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Mm(n){if(n===void 0)return Te("GRPC error has no .code"),S.UNKNOWN;switch(n){case Ae.OK:return S.OK;case Ae.CANCELLED:return S.CANCELLED;case Ae.UNKNOWN:return S.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return S.INTERNAL;case Ae.UNAVAILABLE:return S.UNAVAILABLE;case Ae.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ae.NOT_FOUND:return S.NOT_FOUND;case Ae.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ae.ABORTED:return S.ABORTED;case Ae.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ae.DATA_LOSS:return S.DATA_LOSS;default:return $(39323,{code:n})}}(se=Ae||(Ae={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return rm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new de(M.comparator);function Re(){return RT}const Fm=new de(M.comparator);function lr(...n){let e=Fm;for(const t of n)e=e.insert(t.key,t);return e}function Um(n){let e=Fm;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ft(){return Ci()}function Bm(){return Ci()}function Ci(){return new un((n=>n.toString()),((n,e)=>n.isEqual(e)))}const PT=new de(M.comparator),bT=new ae(M.comparator);function Q(...n){let e=bT;for(const t of n)e=e.add(t);return e}const ST=new ae(W);function ll(){return ST}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi=null;function VT(n){if(xi)throw new Error("a TestingHooksSpi instance is already set");xi=n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Nn([4294967295,4294967295],0);function sf(n){const e=qm().encode(n),t=new Qp;return t.update(e),new Uint8Array(t.digest())}function of(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nn([t,r],0),new Nn([s,i],0)]}class hl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ai(`Invalid padding: ${t}`);if(r<0)throw new Ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ai(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ai(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Nn.fromNumber(this.m)}v(e,t,r){let s=e.add(t.multiply(Nn.fromNumber(r)));return s.compare(CT)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=sf(e),[r,s]=of(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);if(!this.S(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hl(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.m===0)return;const t=sf(e),[r,s]=of(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qs(z.min(),s,new de(W),Re(),Re(),Q())}}class lo{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new lo(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class $m{constructor(e,t){this.targetId=e,this.O=t}}class jm{constructor(e,t,r=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class af{constructor(e){this.targetId=e,this.M=0,this.N=cf(),this.L=pe.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=Q(),t=Q(),r=Q();return this.N.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}})),new lo(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=cf()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,L(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const mi="WatchChangeAggregator";class xT{constructor(e){this.Z=e,this.X=new Map,this.ee=Re(),this.te=Go(),this.ne=Re(),this.re=Go(),this.ie=new de(W)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,(t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:$(56790,{state:e.state})}else O(mi,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach(((r,s)=>{this.ue(s)&&t(s)}))}le(e){var t;return Kt(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:cl(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new M(Kt(i)?J.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,ge.newNoDocument(o,z.min()))}else L(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const c=this.Pe(e),u=c?this.Re(c,e,o):1;if(u!==0){this.ce(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,l)}xi==null||xi.Ie((function(d,p,g,w,P){var q,G,j;const k={localCacheCount:d,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},N=p.unchangedNames;return N&&(k.bloomFilter={applied:P===0,hashCount:(N==null?void 0:N.hashCount)??0,bitmapLength:((G=(q=N==null?void 0:N.bits)==null?void 0:q.bitmap)==null?void 0:G.length)??0,padding:((j=N==null?void 0:N.bits)==null?void 0:j.padding)??0,mightContain:Y=>(w==null?void 0:w.mightContain(Y))??!1}),k})(o,e.O,this.Z.Ae(),c,u))}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=nn(r).toUint8Array()}catch(u){if(u instanceof om)return xe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new hl(o,s,i)}catch(u){return xe(u instanceof Ai?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.m===0?null:c}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Z.Ae(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.oe(t,i,null),s++)})),s}de(e){const t=new Map;this.X.forEach(((i,o)=>{const c=this.he(o);if(c){if(i.current&&this.le(c.target)){const u=Kt(c.target)?J.fromString(c.target.getPipelineDocuments()[0]):c.target.path,l=new M(u);this.fe(l).has(o)||this.me(o,l)||this.oe(o,l,ge.newNoDocument(l,e))}i.q&&(t.set(o,i.K()),i.W())}}));let r=Q();this.re.forEach(((i,o)=>{let c=!0;o.forEachWhile((u=>{const l=this.he(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ee.forEach(((i,o)=>o.setReadTime(e))),this.ne.forEach(((i,o)=>o.setReadTime(e)));const s=new qs(e,t,this.ie,this.ee,this.ne,r);return this.ee=Re(),this.te=Go(),this.ne=Re(),this.re=Go(),this.ie=new de(W),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void O(mi,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),Kt(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(Kt(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):O(mi,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(O(mi,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new af(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new ae(W),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new ae(W),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||O(mi,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new af(e)),this.Z.getRemoteKeysForTarget(e).forEach((t=>{this.oe(e,t,null)}))}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Go(){return new de(M.comparator)}function cf(){return new de(M.comparator)}const NT={asc:"ASCENDING",desc:"DESCENDING"},DT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kT={and:"AND",or:"OR"};class OT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Au(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function Ts(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dl(n){const e=tn(n);return new ie(e.seconds,e.nanos)}function zm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ia(n,e){return Ts(n,e.toTimestamp())}function ve(n){return L(!!n,49232),z.fromTimestamp(dl(n))}function fl(n,e){return Ru(n,e).canonicalString()}function Ru(n,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Gm(n){const e=J.fromString(n);return L(tg(e),10190,{key:e.toString()}),e}function Es(n,e){return fl(n.databaseId,e.path)}function kt(n,e){const t=Gm(e);if(t.get(1)!==n.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Hm(t))}function Km(n,e){return fl(n.databaseId,e)}function Wm(n){const e=Gm(n);return e.length===4?J.emptyPath():Hm(e)}function Pu(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hm(n){return L(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function uf(n,e,t){return{name:Es(n,e),fields:t.value.mapValue.fields}}function tc(n,e,t){const r=kt(n,e.name),s=ve(e.updateTime),i=e.createTime?ve(e.createTime):z.min(),o=new Ve({mapValue:{fields:e.fields}}),c=ge.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function LT(n,e){return"found"in e?(function(r,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=kt(r,s.found.name),o=ve(s.found.updateTime),c=s.found.createTime?ve(s.found.createTime):z.min(),u=new Ve({mapValue:{fields:s.found.fields}});return ge.newFoundDocument(i,o,c,u)})(n,e):"missing"in e?(function(r,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=kt(r,s.missing),o=ve(s.readTime);return ge.newNoDocument(i,o)})(n,e):$(7234,{result:e})}function MT(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(l,d){return l.useProto3Json?(L(d===void 0||typeof d=="string",58123),pe.fromBase64String(d||"")):(L(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),pe.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(l){const d=l.code===void 0?S.UNKNOWN:Mm(l.code);return new D(d,l.message||"")})(o);t=new jm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kt(n,r.document.name),i=ve(r.document.updateTime),o=r.document.createTime?ve(r.document.createTime):z.min(),c=new Ve({mapValue:{fields:r.document.fields}}),u=ge.newFoundDocument(s,i,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new sa(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kt(n,r.document),i=r.readTime?ve(r.readTime):z.min(),o=ge.newNoDocument(s,i),c=r.removedTargetIds||[];t=new sa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kt(n,r.document),i=r.removedTargetIds||[];t=new sa([],i,s,null)}else{if(!("filter"in e))return $(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AT(s,i),c=r.targetId;t=new $m(c,o)}}return t}function Ki(n,e){let t;if(e instanceof Fs)t={update:uf(n,e.key,e.value)};else if(e instanceof Us)t={delete:Es(n,e.key)};else if(e instanceof an)t={update:uf(n,e.key,e.data),updateMask:jT(e.fieldMask)};else{if(!(e instanceof sl))return $(16599,{we:e.type});t={verify:Es(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ps)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pr)return{fieldPath:o.field.canonicalString(),increment:c.l};if(c instanceof ms)return{fieldPath:o.field.canonicalString(),minimum:c.l};if(c instanceof gs)return{fieldPath:o.field.canonicalString(),maximum:c.l};throw $(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ia(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)})(n,e.precondition)),t}function bu(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?_e.updateTime(ve(i.updateTime)):i.exists!==void 0?_e.exists(i.exists):_e.none()})(e.currentDocument):_e.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let u=null;if("setToServerValue"in c)L(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new ps;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new Ar(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new Rr(d)}else"increment"in c?u=new Pr(o,c.increment):"minimum"in c?u=new ms(o,c.minimum):"maximum"in c?u=new gs(o,c.maximum):$(16584,{proto:c});const l=Ee.fromServerFormat(c.fieldPath);return new Or(l,u)})(n,s))):[];if(e.update){e.update.name;const s=kt(n,e.update.name),i=new Ve({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new et(l.map((d=>Ee.fromServerFormat(d))))})(e.updateMask);return new an(s,i,o,t,r)}return new Fs(s,i,t,r)}if(e.delete){const s=kt(n,e.delete);return new Us(s,t)}if(e.verify){const s=kt(n,e.verify);return new sl(s,t)}return $(1463,{proto:e})}function FT(n,e){return n&&n.length>0?(L(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?ve(s.updateTime):ve(i);return o.isEqual(z.min())&&(o=ve(i)),new oT(o,s.transformResults||[])})(t,e)))):[]}function Qm(n,e){return{documents:[Km(n,e.path)]}}function nc(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Km(n,s);const i=(function(l){if(l.length!==0)return eg(ue.create(l,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(l){if(l.length!==0)return l.map((d=>(function(g){return{field:vn(g.field),direction:BT(g.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Au(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{be:t,parent:s}}function Jm(n,e,t,r){const{be:s,parent:i}=nc(n,e),o={},c=[];let u=0;return t.forEach((l=>{const d=r?l.alias:"aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?c.push({alias:d,count:{}}):l.aggregateType==="avg"?c.push({alias:d,avg:{field:vn(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:d,sum:{field:vn(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},ve:o,parent:i}}function Ym(n){let e=Wm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){L(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const g=Zm(p);return g instanceof ue&&il(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((g=>(function(P){return new Gi(ts(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,uo(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(p){const g=!!p.before,w=p.values||[];return new qn(w,g)})(t.startAt));let l=null;return t.endAt&&(l=(function(p){const g=!p.before,w=p.values||[];return new qn(w,g)})(t.endAt)),Nm(e,s,o,i,c,"F",u,l)}function UT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xm(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function Zm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ts(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return re.create(ts(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ue.create(t.compositeFilter.filters.map((r=>Zm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function BT(n){return NT[n]}function qT(n){return DT[n]}function $T(n){return kT[n]}function vn(n){return{fieldPath:n.canonicalString()}}function ts(n){return Ee.fromServerFormat(n.fieldPath)}function eg(n){return n instanceof re?(function(t){if(t.op==="=="){if(it(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(it(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:qT(t.op),value:t.value}}})(n):n instanceof ue?(function(t){const r=t.getFilters().map((s=>eg(s)));return r.length===1?r[0]:{compositeFilter:{op:$T(t.op),filters:r}}})(n):$(54877,{filter:n})}function jT(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ng(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Wi(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function rg(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return new OT(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(pe.fromBase64String(e))}catch(t){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kr(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:Pe("string",Ze._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function sg(){return new Mr(bt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yt._jsonSchemaVersion}}static fromJSON(e){if(kr(e,yt._jsonSchema))return new yt(e.latitude,e.longitude)}}yt._jsonSchemaVersion="firestore/geoPoint/1.0",yt._jsonSchema={type:Pe("string",yt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class og{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Le.UNAUTHENTICATED)))}shutdown(){}}class zT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class GT{constructor(e){this.Se=e,this.currentUser=Le.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Fe;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Fe,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.Se.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.Se.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fe)}}),0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.De!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(L(typeof r.accessToken=="string",31837,{Fe:r}),new ig(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{Oe:e}),new Le(e)}}class KT{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class WT{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new KT(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable((()=>t(Le.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Su{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HT{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,ut(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){L(this.xe===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.$e)return Promise.resolve(new Su(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Su(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}class QT{getToken(){return Promise.resolve(new Su(""))}invalidateToken(){}start(e,t){}shutdown(){}}function ag(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="ConnectivityMonitor";class hf{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){O(lf,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){O(lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=null;function Vu(){return Ko===null?Ko=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ko++,"0x"+Ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="RestConnection",YT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class XT{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===ji?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=Vu(),c=this.nt(e,t.toUriEncodedString());O(tu,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:l}=new URL(c),d=Nr(l);return this.it(e,c,u,r,d).then((p=>(O(tu,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw xe(tu,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=YT[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection",gi=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class is extends XT{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!is.gt){const e=Zp();gi(e,Xp.STAT_EVENT,(t=>{t.stat===mu.PROXY?O($e,"STAT_EVENT: detected buffering proxy"):t.stat===mu.NOPROXY&&O($e,"STAT_EVENT: detected no buffering proxy")})),is.gt=!0}}it(e,t,r,s,i){const o=Vu();return new Promise(((c,u)=>{const l=new Jp;l.setWithCredentials(!0),l.listenOnce(Yp.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case ta.NO_ERROR:const p=l.getResponseJson();O($e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ta.TIMEOUT:O($e,`RPC '${e}' ${o} timed out`),u(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const g=l.getStatus();if(O($e,`RPC '${e}' ${o} failed with status:`,g,"response text:",l.getResponseText()),g>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const k=(function(q){const G=q.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN})(P.status);u(new D(k,P.message))}else u(new D(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new D(S.UNAVAILABLE,"Connection failed."));break;default:$(9055,{yt:e,streamId:o,wt:l.getLastErrorCode(),bt:l.getLastError()})}}finally{O($e,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);O($e,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",d,r,15)}))}vt(e,t,r){const s=Vu(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.rt(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");O($e,`Creating RPC '${e}' stream ${s}: ${l}`,c);const d=o.createWebChannel(l,c);this.St(d);let p=!1,g=!1;const w=new ZT({_t:P=>{g?O($e,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(O($e,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),O($e,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},ot:()=>d.close()});return gi(d,vi.EventType.OPEN,(()=>{g||(O($e,`RPC '${e}' stream ${s} transport opened.`),w.Rt())})),gi(d,vi.EventType.CLOSE,(()=>{g||(g=!0,O($e,`RPC '${e}' stream ${s} transport closed`),w.At(),this.Dt(d))})),gi(d,vi.EventType.ERROR,(P=>{g||(g=!0,xe($e,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),w.At(new D(S.UNAVAILABLE,"The operation could not be completed")))})),gi(d,vi.EventType.MESSAGE,(P=>{var k;if(!g){const N=P.data[0];L(!!N,16349);const q=N,G=(q==null?void 0:q.error)||((k=q[0])==null?void 0:k.error);if(G){O($e,`RPC '${e}' stream ${s} received error:`,G);const j=G.status;let Y=(function(T){const _=Ae[T];if(_!==void 0)return Mm(_)})(j),Z=G.message;j==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&xe(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Y===void 0&&(Y=S.INTERNAL,Z="Unknown error status: "+j+" with message "+G.message),g=!0,w.At(new D(Y,Z)),d.close()}else O($e,`RPC '${e}' stream ${s} received:`,N),w.Vt(N)}})),is.ft(),setTimeout((()=>{w.It()}),0),w}terminate(){this.dt.forEach((e=>e.close())),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter((t=>t===e))}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return em()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){return new is(n)}is.gt=!1;class pl{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,(()=>(this.Lt=Date.now(),e()))),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="PersistentStream";class cg{constructor(e,t,r,s,i,o,c,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new pl(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,(()=>this.en())))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Te(t.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Wt===t&&this.an(r,s)}),(r=>{e((()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)}))}))}an(e,t){const r=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut((()=>{r((()=>this.listener.ut()))})),this.stream.lt((()=>{r((()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,(()=>(this.Jt()&&(this.state=3),Promise.resolve()))),this.listener.lt())))})),this.stream.ht((s=>{r((()=>this.un(s)))})),this.stream.onMessage((s=>{r((()=>++this.zt==1?this.En(s):this.onNext(s)))}))}Yt(){this.state=5,this.jt.Ut((async()=>{this.state=0,this.start()}))}un(e){return O(df,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget((()=>this.Wt===e?t():(O(df,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tE extends cg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=MT(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?ve(o.readTime):z.min()})(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=Pu(this.serializer),t.addTarget=(function(i,o){let c;const u=o.target;if(c=Kt(u)?{pipelineQuery:Xm(i,u)}:cl(u)?{documents:Qm(i,u)}:{query:nc(i,u).be},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zm(i,o.resumeToken);const l=Au(i,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=Ts(i,o.snapshotVersion.toTimestamp());const l=Au(i,o.expectedCount);l!==null&&(c.expectedCount=l)}return c})(this.serializer,e);const r=UT(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=Pu(this.serializer),t.removeTarget=e,this.tn(t)}}class nE extends cg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.vt("Write",e,t)}En(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=FT(e.writeResults,e.commitTime),r=ve(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=Pu(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Ki(this.serializer,r)))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{}class sE extends rE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.tt(e,Ru(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())}))}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.st(e,Ru(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())}))}terminate(){this.fn=!0,this.connection.terminate()}}function iE(n,e,t,r){return new sE(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="ComponentProvider",ff=new Map;function aE(n,e,t,r,s){return new Xw(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ag(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ug=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(ug,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}tt.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==lg)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(u=>r(u)))})),o=!0,i===s&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((s=>s?R.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next((d=>{o[l]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new R(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="SimpleDb";class rc{static open(e,t,r,s){try{return new rc(t,e.transaction(s,r))}catch(i){throw new Ni(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.wn=new Fe,this.transaction.oncomplete=()=>{this.wn.resolve()},this.transaction.onabort=()=>{t.error?this.wn.reject(new Ni(e,t.error)):this.wn.resolve()},this.transaction.onerror=r=>{const s=ml(r.target.error);this.wn.reject(new Ni(e,s))}}get bn(){return this.wn.promise}abort(e){e&&this.wn.reject(e),this.aborted||(O(ct,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}vn(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new uE(t)}}class Ot{static delete(e){return O(ct,"Removing database:",e),hr(Lp().indexedDB.deleteDatabase(e)).toPromise()}static Je(){if(!Kp())return!1;if(Ot.Sn())return!0;const e=Ce(),t=Ot.Dn(e),r=0<t&&t<10,s=dg(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static Sn(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static xn(e,t){return e.store(t)}static Dn(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.Cn=r,this.Fn=null,Ot.Dn(Ce())===12.2&&Te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async On(e){return this.db||(O(ct,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Ni(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new D(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ni(e,o))},s.onupgradeneeded=i=>{O(ct,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Cn.Mn(o,s.transaction,i.oldVersion,this.version).next((()=>{O(ct,"Database upgrade to version "+this.version+" complete")}))}}))),this.Nn&&(this.db.onversionchange=t=>this.Nn(t)),this.db}Ln(e){this.Nn=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.On(e);const c=rc.open(this.db,e,i?"readonly":"readwrite",r),u=s(c).next((l=>(c.vn(),l))).catch((l=>(c.abort(l),R.reject(l)))).toPromise();return u.catch((()=>{})),await c.bn,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(O(ct,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function dg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class cE{constructor(e){this.Bn=e,this.Un=!1,this.kn=null}get isDone(){return this.Un}get qn(){return this.kn}set cursor(e){this.Bn=e}done(){this.Un=!0}$n(e){this.kn=e}delete(){return hr(this.Bn.delete())}}class Ni extends D{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Jn(n){return n.name==="IndexedDbTransactionError"}class uE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(O(ct,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(O(ct,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hr(r)}add(e){return O(ct,"ADD",this.store.name,e,e),hr(this.store.add(e))}get(e){return hr(this.store.get(e)).next((t=>(t===void 0&&(t=null),O(ct,"GET",this.store.name,e,t),t)))}delete(e){return O(ct,"DELETE",this.store.name,e),hr(this.store.delete(e))}count(){return O(ct,"COUNT",this.store.name),hr(this.store.count())}Kn(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R(((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(r),o=[];return this.Wn(i,((c,u)=>{o.push(u)})).next((()=>o))}}Qn(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}Gn(e,t){O(ct,"DELETE ALL",this.store.name);const r=this.options(e,t);r.zn=!1;const s=this.cursor(r);return this.Wn(s,((i,o,c)=>c.delete()))}jn(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Wn(s,t)}Hn(e){const t=this.cursor({});return new R(((r,s)=>{t.onerror=i=>{const o=ml(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}Wn(e,t){const r=[];return new R(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new cE(c),l=t(c.primaryKey,c.value,u);if(l instanceof R){const d=l.catch((p=>(u.done(),R.reject(p))));r.push(d)}u.isDone?s():u.qn===null?c.continue():c.continue(u.qn)}})).next((()=>R.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.zn?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hr(n){return new R(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=ml(r.target.error);t(s)}}))}let mf=!1;function ml(n){const e=Ot.Dn(Ce());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mf||(mf=!0,setTimeout((()=>{throw r}),0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LruGarbageCollector",fg=1048576;function _f([n,e],[t,r]){const s=W(n,t);return s===0?W(e,r):s}class lE{constructor(e){this.Jn=e,this.buffer=new ae(_f),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_f(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){O(gf,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jn(t)?O(gf,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.tr(3e5)}))}}class hE{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(tt.yn);const r=new lE(t);return this.nr.forEachTarget(e,(s=>r.Xn(s.sequenceNumber))).next((()=>this.nr.ir(e,(s=>r.Xn(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(pf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pf):this.sr(e,t)))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(l=Date.now(),Zr()<=ne.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function mg(n,e){return new hE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firestore.googleapis.com",yf=!0;class If{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gg,this.ssl=yf}else this.host=e.host,this.ssl=e.ssl??yf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=ug;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fg)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(sm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ag(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new D(S.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const c of i)if(r[c]!==s[c])return!1;return!0})(this._customHeaders,e._customHeaders)}}let ho=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new og;switch(r.type){case"firstParty":return new WT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ff.get(t);r&&(O(oE,"Removing Datastore"),ff.delete(t),r.terminate())})(this),Promise.resolve()}};function _g(n,e,t,r={}){var l;n=ee(n,ho);const s=Nr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Wa(`https://${c}`),i.host!==gg&&i.host!==c&&xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!wt(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Le.MOCK_USER;else{d=$p(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Le(g)}n._authCredentials=new zT(new ig(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ne(this.firestore,e,this._query)}}class oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oe(this.firestore,e,this._key)}toJSON(){return{type:oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(kr(t,oe._jsonSchema))return new oe(e,r||null,new M(J.fromString(t.referencePath)))}}oe._jsonSchemaVersion="firestore/documentReference/1.0",oe._jsonSchema={type:Pe("string",oe._jsonSchemaVersion),referencePath:Pe("string")};class It extends Ne{constructor(e,t,r){super(e,t,Bs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oe(this.firestore,null,new M(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function dE(n,e,...t){if(n=ce(n),Zu("collection","path",e),n instanceof ho){const r=J.fromString(e,...t);return $d(r),new It(n,null,r)}{if(!(n instanceof oe||n instanceof It))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return $d(r),new It(n.firestore,null,r)}}function fE(n,e){if(n=ee(n,ho),Zu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ne(n,null,(function(r){return new cn(J.emptyPath(),r)})(e))}function yg(n,e,...t){if(n=ce(n),arguments.length===1&&(e=Ha.newId()),Zu("doc","path",e),n instanceof ho){const r=J.fromString(e,...t);return qd(r),new oe(n,null,new M(r))}{if(!(n instanceof oe||n instanceof It))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return qd(r),new oe(n.firestore,n instanceof It?n.converter:null,new M(r))}}function pE(n,e){return n=ce(n),e=ce(e),(n instanceof oe||n instanceof It)&&(e instanceof oe||e instanceof It)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function gl(n,e){return n=ce(n),e=ce(e),n instanceof Ne&&e instanceof Ne&&n.firestore===e.firestore&&Om(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kr(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ye(e.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Pe("string",Ye._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=/^__.*__$/;class gE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fs(e,this.data,t,this.fieldTransforms)}}class Ig{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new an(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:n})}}class sc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new sc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ea(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(wg(this.dataSource)&&mE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class _E{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Lr(e)}createContext(e,t,r,s=!1){return new sc({dataSource:e,methodName:t,targetDoc:r,path:Ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fr(n){const e=n._freezeSettings(),t=Lr(n._databaseId);return new _E(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ic(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Rl("Data must be an object, but it was:",o,r);const c=vg(r,o);let u,l;if(i.merge)u=new et(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Tt(e,p,t);if(!o.contains(g))throw new D(S.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Rg(d,g)||d.push(g)}u=new et(d),l=o.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,l=o.fieldTransforms;return new gE(new Ve(c),u,l)}class fo extends jt{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fo}}function Tg(n,e,t){return new sc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _l extends jt{_toFieldTransform(e){return new Or(e.path,new ps)}isEqual(e){return e instanceof _l}}class yl extends jt{constructor(e,t){super(e),this._r=t}_toFieldTransform(e){const t=Tg(this,e,!0),r=this._r.map((i=>Ft(i,t))),s=new Ar(r);return new Or(e.path,s)}isEqual(e){return e instanceof yl&&wt(this._r,e._r)}}class Il extends jt{constructor(e,t){super(e),this._r=t}_toFieldTransform(e){const t=Tg(this,e,!0),r=this._r.map((i=>Ft(i,t))),s=new Rr(r);return new Or(e.path,s)}isEqual(e){return e instanceof Il&&wt(this._r,e._r)}}class wl extends jt{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=new Pr(e.serializer,Ms(e.serializer,this.ar));return new Or(e.path,t)}isEqual(e){return e instanceof wl&&(this.ar===e.ar||Number.isNaN(this.ar)&&Number.isNaN(e.ar))}}class Tl extends jt{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=new ms(e.serializer,Ms(e.serializer,this.ar));return new Or(e.path,t)}isEqual(e){return e instanceof Tl&&(this.ar===e.ar||Number.isNaN(this.ar)&&Number.isNaN(e.ar))}}class El extends jt{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=new gs(e.serializer,Ms(e.serializer,this.ar));return new Or(e.path,t)}isEqual(e){return e instanceof El&&(this.ar===e.ar||Number.isNaN(this.ar)&&Number.isNaN(e.ar))}}function vl(n,e,t,r){const s=n.createContext(1,e,t);Rl("Data must be an object, but it was:",s,r);const i=[],o=Ve.empty();Hn(r,((u,l)=>{const d=Pl(e,u,t);l=ce(l);const p=s.childContextForFieldPath(d);if(l instanceof fo)i.push(d);else{const g=Ft(l,p);g!=null&&(i.push(d),o.set(d,g))}}));const c=new et(i);return new Ig(o,c,s.fieldTransforms)}function Al(n,e,t,r,s,i){const o=n.createContext(1,e,t),c=[Tt(e,r,t)],u=[s];if(i.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Tt(e,i[g])),u.push(i[g+1]);const l=[],d=Ve.empty();for(let g=c.length-1;g>=0;--g)if(!Rg(l,c[g])){const w=c[g];let P=u[g];P=ce(P);const k=o.childContextForFieldPath(w);if(P instanceof fo)l.push(w);else{const N=Ft(P,k);N!=null&&(l.push(w),d.set(w,N))}}const p=new et(l);return new Ig(d,p,o.fieldTransforms)}function Eg(n,e,t,r=!1){return Ft(t,n.createContext(r?4:3,e))}function Ft(n,e,t){if(Ag(n=ce(n)))return Rl("Unsupported field value:",e,n),vg(n,e);if(n instanceof jt)return(function(s,i){if(!wg(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let c=0;for(const u of s){let l=Ft(u,i.childContextForArray(c));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),c++}return{arrayValue:{values:o}}})(n,e)}return(function(s,i,o){if((s=ce(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ms(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ie.fromDate(s);return{timestampValue:Ts(i.serializer,c)}}if(s instanceof ie){const c=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ts(i.serializer,c)}}if(s instanceof yt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:zm(i.serializer,s._byteString)};if(s instanceof oe){const c=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(c))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:fl(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ye)return(function(u,l){const d=u instanceof Ye?u.toArray():u;return{mapValue:{fields:{[el]:{stringValue:tl},[Tr]:{arrayValue:{values:d.map((g=>{if(typeof g!="number")throw l.createError("VectorValues must only contain numeric values.");return Ja(l.serializer,g)}))}}}}}})(s,i);if(ng(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Qa(s)}`)})(n,e)}function vg(n,e){const t={};return rm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(n,((r,s)=>{const i=Ft(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Ag(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof yt||n instanceof Ze||n instanceof oe||n instanceof jt||n instanceof Ye||ng(n))}function Rl(n,e,t){if(!Ag(t)||!oo(t)){const r=Qa(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Tt(n,e,t){if((e=ce(e))instanceof Mr)return e._internalPath;if(typeof e=="string")return Pl(n,e);throw Ea("Field path arguments must be of type string or ",n,!1,void 0,t)}const yE=new RegExp("[~\\*/\\[\\]]");function Pl(n,e,t){if(e.search(yE)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mr(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ea(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new D(S.INVALID_ARGUMENT,c+n+u)}function Rg(n,e){return n.some((t=>t.isEqual(e)))}function Pg(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=Ve.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let c;i.nestedOptions&&oo(o)?c={mapValue:{fields:new He(i.nestedOptions).getOptionsProto(t,o)}}:o&&(c=Ft(o,t)??void 0),c&&r.set(Ee.fromServerFormat(i.serverName),c)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Xu(r,((o,c)=>[Ee.fromServerFormat(c),o!==void 0?Ft(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!oo(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){return new fo("deleteField")}function TE(){return new _l("serverTimestamp")}function EE(...n){return new yl("arrayUnion",n)}function vE(...n){return new Il("arrayRemove",n)}function AE(n){return new wl("increment",n)}function RE(n){return new Tl("minimum",n)}function PE(n){return new El("maximum",n)}function bg(n){return new Ye(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n){let e;return n instanceof Ur?n:(e=oo(n)?xE(n):n instanceof Array?NE(n):Sg(n,void 0),e)}function nu(n){if(n instanceof Ur)return n;if(n instanceof Ye)return Hi(n);if(Array.isArray(n))return Hi(bg(n));throw new Error("Unsupported value: "+typeof n)}function bl(n){return eT(n)?oa(n):F(n)}class Ur{constructor(){this._protoValueType="ProtoValue"}add(e){return new x("add",[this,F(e)],"add")}asBoolean(){if(this instanceof $n)return this;if(this instanceof qr)return new Cg(this);if(this instanceof Br)return new CE(this);if(this instanceof x)return new Vg(this);throw new D("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new x("subtract",[this,F(e)],"subtract")}multiply(e){return new x("multiply",[this,F(e)],"multiply")}divide(e){return new x("divide",[this,F(e)],"divide")}mod(e){return new x("mod",[this,F(e)],"mod")}equal(e){return new x("equal",[this,F(e)],"equal").asBoolean()}notEqual(e){return new x("not_equal",[this,F(e)],"notEqual").asBoolean()}lessThan(e){return new x("less_than",[this,F(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new x("less_than_or_equal",[this,F(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new x("greater_than",[this,F(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new x("greater_than_or_equal",[this,F(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>F(s)));return new x("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new x("array_contains",[this,F(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ri(e.map(F),"arrayContainsAll"):e;return new x("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ri(e.map(F),"arrayContainsAny"):e;return new x("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new x("array_reverse",[this])}arrayLength(){return new x("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ri(e.map(F),"equalAny"):e;return new x("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ri(e.map(F),"notEqualAny"):e;return new x("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new x("exists",[this],"exists").asBoolean()}charLength(){return new x("char_length",[this],"charLength")}like(e){return new x("like",[this,F(e)],"like").asBoolean()}regexContains(e){return new x("regex_contains",[this,F(e)],"regexContains").asBoolean()}regexFind(e){return new x("regex_find",[this,F(e)],"regexFind")}regexFindAll(e){return new x("regex_find_all",[this,F(e)],"regexFindAll")}regexMatch(e){return new x("regex_match",[this,F(e)],"regexMatch").asBoolean()}stringContains(e){return new x("string_contains",[this,F(e)],"stringContains").asBoolean()}startsWith(e){return new x("starts_with",[this,F(e)],"startsWith").asBoolean()}endsWith(e){return new x("ends_with",[this,F(e)],"endsWith").asBoolean()}toLower(){return new x("to_lower",[this],"toLower")}toUpper(){return new x("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(F(e)),new x("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(F(e)),new x("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(F(e)),new x("rtrim",t,"rtrim")}type(){return new x("type",[this])}isType(e){return new x("is_type",[this,Hi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(F);return new x("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new x("string_index_of",[this,F(e)],"stringIndexOf")}stringRepeat(e){return new x("string_repeat",[this,F(e)],"stringRepeat")}stringReplaceAll(e,t){return new x("string_replace_all",[this,F(e),F(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new x("string_replace_one",[this,F(e),F(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(F);return new x("concat",[this,...r],"concat")}reverse(){return new x("reverse",[this],"reverse")}arrayFilter(e,t){return new x("array_filter",[this,F(e),t],"arrayFilter")}arrayTransform(e,t){return new x("array_transform",[this,F(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new x("array_transform",[this,F(e),F(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,F(e)];return t!==void 0&&r.push(F(t)),new x("array_slice",r,"arraySlice")}arrayFirst(){return new x("array_first",[this],"arrayFirst")}arrayFirstN(e){return new x("array_first_n",[this,F(e)],"arrayFirstN")}arrayLast(){return new x("array_last",[this],"arrayLast")}arrayLastN(e){return new x("array_last_n",[this,F(e)],"arrayLastN")}arrayMaximum(){return new x("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new x("maximum_n",[this,F(e)],"arrayMaximumN")}arrayMinimum(){return new x("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new x("minimum_n",[this,F(e)],"arrayMinimumN")}arrayIndexOf(e){return new x("array_index_of",[this,F(e),F("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new x("array_index_of",[this,F(e),F("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new x("array_index_of_all",[this,F(e)],"arrayIndexOfAll")}byteLength(){return new x("byte_length",[this],"byteLength")}ceil(){return new x("ceil",[this])}floor(){return new x("floor",[this])}abs(){return new x("abs",[this])}exp(){return new x("exp",[this])}mapGet(e){return new x("map_get",[this,Hi(e)],"mapGet")}mapSet(e,t,...r){const s=[this,F(e),F(t),...r.map(F)];return new x("map_set",s,"mapSet")}mapKeys(){return new x("map_keys",[this],"mapKeys")}mapValues(){return new x("map_values",[this],"mapValues")}mapEntries(){return new x("map_entries",[this],"mapEntries")}getField(e){return new x("get_field",[this,F(e)],"get_field")}count(){return at._create("count",[this],"count")}sum(){return at._create("sum",[this],"sum")}average(){return at._create("average",[this],"average")}minimum(){return at._create("minimum",[this],"minimum")}maximum(){return at._create("maximum",[this],"maximum")}first(){return at._create("first",[this],"first")}last(){return at._create("last",[this],"last")}arrayAgg(){return at._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return at._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return at._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new x("maximum",[this,...r.map(F)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new x("minimum",[this,...r.map(F)],"minimum")}vectorLength(){return new x("vector_length",[this],"vectorLength")}cosineDistance(e){return new x("cosine_distance",[this,nu(e)],"cosineDistance")}dotProduct(e){return new x("dot_product",[this,nu(e)],"dotProduct")}euclideanDistance(e){return new x("euclidean_distance",[this,nu(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new x("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new x("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new x("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new x("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new x("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new x("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new x("timestamp_add",[this,F(e),F(t)],"timestampAdd")}timestampSubtract(e,t){return new x("timestamp_subtract",[this,F(e),F(t)],"timestampSubtract")}timestampDiff(e,t){return new x("timestamp_diff",[this,bl(e),F(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,F(e)];return t&&r.push(F(t)),new x("timestamp_extract",r,"timestampExtract")}documentId(){return new x("document_id",[this],"documentId")}parent(){return new x("parent",[this],"parent")}substring(e,t){const r=F(e);return new x("substring",t===void 0?[this,r]:[this,r,F(t)],"substring")}arrayGet(e){return new x("array_get",[this,F(e)],"arrayGet")}isError(){return new x("is_error",[this],"isError").asBoolean()}ifError(e){const t=new x("if_error",[this,F(e)],"ifError");return e instanceof $n?t.asBoolean():t}isAbsent(){return new x("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new x("map_remove",[this,F(e)],"mapRemove")}mapMerge(e,...t){const r=F(e),s=t.map(F);return new x("map_merge",[this,r,...s],"mapMerge")}pow(e){return new x("pow",[this,F(e)])}trunc(e){return e===void 0?new x("trunc",[this]):new x("trunc",[this,F(e)],"trunc")}round(e){return e===void 0?new x("round",[this]):new x("round",[this,F(e)],"round")}collectionId(){return new x("collection_id",[this])}length(){return new x("length",[this])}ln(){return new x("ln",[this])}sqrt(){return new x("sqrt",[this])}stringReverse(){return new x("string_reverse",[this])}ifAbsent(e){return new x("if_absent",[this,F(e)],"ifAbsent")}ifNull(e){return new x("if_null",[this,F(e)],"ifNull")}coalesce(e,...t){return new x("coalesce",[this,F(e),...t.map(F)],"coalesce")}join(e){return new x("join",[this,F(e)],"join")}log10(){return new x("log10",[this])}arraySum(){return new x("sum",[this])}split(e){return new x("split",[this,F(e)])}timestampTruncate(e,t){const r=[this,F(e)];return t&&r.push(F(t)),new x("timestamp_trunc",r)}ascending(){return DE(this)}descending(){return kE(this)}as(e){return new SE(this,e,"as")}}class at{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new at(e,t);return s._methodName=r,s}as(e){return new bE(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class bE{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class SE{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ri extends Ur{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map((t=>t._toProto(e)))}}}_readUserData(e){this.ur.forEach((t=>t._readUserData(e)))}}class Br extends Ur{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new x("geo_distance",[this,F(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function oa(n){return VE(n,"field")}function VE(n,e){return new Br(typeof n=="string"?bt===n?sg()._internalPath:Tt("field",n):n._internalPath,e)}class qr extends Ur{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new qr(e,void 0);return t._protoValue=e,t}_toProto(e){return L(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,IE(this._protoValue)||(this._protoValue=Ft(this.value,e))}}function Hi(n,e){return Sg(n,"constant")}function Sg(n,e){const t=new qr(n,e);return typeof n=="boolean"?new Cg(t):t}class x extends Ur{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new He({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class $n extends Ur{get _methodName(){return this._expr._methodName}countIf(){return at._create("count_if",[this],"countIf")}not(){return new x("not",[this],"not").asBoolean()}conditional(e,t){return new x("conditional",[this,e,t],"conditional")}ifError(e){const t=F(e),r=new x("if_error",[this,t],"ifError");return t instanceof $n?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Vg extends $n{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Cg extends $n{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class CE extends $n{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function xE(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Hi(r)),t.push(F(s))}return new x("map",t,"map")}function NE(n){return(function(t,r){return new x("array",t.map((s=>F(s))),r)})(n,"array")}function DE(n){return new Sl(bl(n),"ascending","ascending")}function kE(n){return new Sl(bl(n),"descending","descending")}class Sl{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:rg(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class xg extends dt{get _name(){return"add_fields"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Wi(e,this.fields)]}}_readUserData(e){super._readUserData(e),zn(this.fields,e)}}class Ng extends dt{get _name(){return"aggregate"}get _optionsUtil(){return new He({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Wi(e,this.accumulators),Wi(e,this.groups)]}}_readUserData(e){super._readUserData(e),zn(this.groups,e),zn(this.accumulators,e)}}class Dg extends dt{get _name(){return"distinct"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Wi(e,this.groups)]}}_readUserData(e){super._readUserData(e),zn(this.groups,e)}}class po extends dt{get _name(){return"collection"}get _optionsUtil(){return new He({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class mo extends dt{get _name(){return"collection_group"}get _optionsUtil(){return new He({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class oc extends dt{get _name(){return"database"}get _optionsUtil(){return new He({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class ac extends dt{get _name(){return"documents"}get _optionsUtil(){return new He({})}constructor(e,t){if(super(t),!e||e.length===0)throw new D(S.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new D(S.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class go extends dt{get _name(){return"where"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),zn(this.condition,e)}}class jn extends dt{get _name(){return"limit"}get _optionsUtil(){return new He({})}constructor(e,t){L(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Ms(e,this.limit)]}}}class wf extends dt{get _name(){return"offset"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Ms(e,this.offset)]}}}class OE extends dt{get _name(){return"select"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Wi(e,this.selections)]}}_readUserData(e){super._readUserData(e),zn(this.selections,e)}}class Vt extends dt{get _name(){return"sort"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),zn(this.orderings,e)}}class Vl extends dt{get _name(){return"replace_with"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),rg(Vl.Pr)]}}_readUserData(e){super._readUserData(e),zn(this.map,e)}}Vl.Pr="full_replace";function zn(n,e){return Pg(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Ar(e,t){const r=this.userDataReader.createContext(3,e);return Pg(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.Ar("where",e),t.push(new go(e,{})),new Di(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new jn(e,{})),new Di(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new Vt(this.Ar("sort",e.orderings),{})):r.push(new Vt(this.Ar("sort",[e,...t]),{})),new Di(this._db,this.userDataReader,this._userDataWriter,r)}Vr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class E{constructor(e,t){this.type=e,this.value=t}static dr(){return new E("ERROR",void 0)}static mr(){return new E("UNSET",void 0)}static pr(){return new E("NULL",Dt)}static newValue(e){return lt(e)?new E("NULL",Dt):(function(r){return!!r&&"booleanValue"in r})(e)?new E("BOOLEAN",e):St(e)?new E("INT",e):mr(e)?new E("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new E("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new E("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new E("BYTES",e):e.referenceValue?new E("REFERENCE",e):e.geoPointValue?new E("GEO_POINT",e):Bn(e)?new E("ARRAY",e):vr(e)?new E("VECTOR",e):_r(e)?new E("MAP",e):new E("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function ki(n){if(!n.gr())return n.value}function kg(n){return n instanceof $n?n._expr:n}function K(n){if((n=kg(n))instanceof Br)return new LE(n);if(n instanceof qr)return new ME(n);if(n instanceof Ri)return new FE(n);if(n instanceof x){if(n.name==="add")return new qE(n);if(n.name==="subtract")return new $E(n);if(n.name==="multiply")return new jE(n);if(n.name==="divide")return new zE(n);if(n.name==="mod")return new GE(n);if(n.name==="and")return new KE(n);if(n.name==="equal")return new sv(n);if(n.name==="not_equal")return new iv(n);if(n.name==="less_than")return new ov(n);if(n.name==="less_than_or_equal")return new av(n);if(n.name==="greater_than")return new cv(n);if(n.name==="greater_than_or_equal")return new uv(n);if(n.name==="array_concat")return new lv(n);if(n.name==="array_reverse")return new hv(n);if(n.name==="array_contains")return new dv(n);if(n.name==="array_contains_all")return new fv(n);if(n.name==="array_contains_any")return new pv(n);if(n.name==="array_length")return new mv(n);if(n.name==="array_element")return new gv(n);if(n.name==="equal_any")return new Og(n);if(n.name==="not_equal_any")return new HE(n);if(n.name==="is_nan")return new QE(n);if(n.name==="is_not_nan")return new JE(n);if(n.name==="is_null")return new YE(n);if(n.name==="is_not_null")return new XE(n);if(n.name==="is_error")return new ZE(n);if(n.name==="exists")return new ev(n);if(n.name==="not")return new cc(n);if(n.name==="or")return new WE(n);if(n.name==="xor")return new Cl(n);if(n.name==="conditional")return new tv(n);if(n.name==="maximum")return new nv(n);if(n.name==="minimum")return new rv(n);if(n.name==="reverse")return new _v(n);if(n.name==="replace_first")return new yv(n);if(n.name==="replace_all")return new Iv(n);if(n.name==="char_length")return new wv(n);if(n.name==="byte_length")return new Tv(n);if(n.name==="like")return new Ev(n);if(n.name==="regex_contains")return new vv(n);if(n.name==="regex_match")return new Av(n);if(n.name==="string_contains")return new Rv(n);if(n.name==="starts_with")return new Pv(n);if(n.name==="ends_with")return new bv(n);if(n.name==="to_lower")return new Sv(n);if(n.name==="to_upper")return new Vv(n);if(n.name==="trim")return new Cv(n);if(n.name==="string_concat")return new xv(n);if(n.name==="map_get")return new Nv(n);if(n.name==="cosine_distance")return new Dv(n);if(n.name==="dot_product")return new kv(n);if(n.name==="euclidean_distance")return new Ov(n);if(n.name==="vector_length")return new Lv(n);if(n.name==="unix_micros_to_timestamp")return new qv(n);if(n.name==="timestamp_to_unix_micros")return new zv(n);if(n.name==="unix_millis_to_timestamp")return new $v(n);if(n.name==="timestamp_to_unix_millis")return new Gv(n);if(n.name==="unix_seconds_to_timestamp")return new jv(n);if(n.name==="timestamp_to_unix_seconds")return new Kv(n);if(n.name==="timestamp_add")return new Wv(n);if(n.name==="timestamp_subtract")return new Hv(n)}throw new Error(`Unknown Expr : ${n}`)}class LE{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===bt)return E.newValue({referenceValue:Es(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return E.newValue({timestampValue:ia(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return E.newValue({timestampValue:ia(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?ao(r)?E.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:ia(i.serializer,z.fromTimestamp(hs(o)))};if(i.serverTimestampBehavior==="previous"){const c=co(o);if(c)return c}return{nullValue:"NULL_VALUE"}})(e,r)):E.newValue(r):E.mr()}}class ME{constructor(e){this.expr=e}evaluate(e,t){return E.newValue(this.expr._getValue())}}class FE{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map((s=>K(s).evaluate(e,t)));return r.some((s=>s.gr()))?E.dr():E.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function Be(n){return mr(n)?Number(n.doubleValue):Number(n.integerValue)}function Ut(n){return BigInt(n.integerValue)}const UE=BigInt("0x7fffffffffffffff"),BE=-BigInt("0x8000000000000000");class _o{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length>=2,24778);const r=K(this.expr.params[0]).evaluate(e,t),s=K(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const c=K(o).evaluate(e,t);i=this.wr(i,c)}return i}wr(e,t){if(e.gr()||t.gr())return E.dr();if(e.yr()||t.yr())return E.pr();const r=e.value,s=t.value;if(!mr(r)&&!St(r)||!mr(s)&&!St(s))return E.dr();if(mr(r)||mr(s)){const i=this.br(r,s);return i?E.newValue(i):E.dr()}if(St(r)&&St(s)){const i=this.vr(r,s);return i===void 0?E.dr():typeof i=="number"?E.newValue({doubleValue:i}):i<BE||i>UE?E.dr():E.newValue({integerValue:`${i}`})}return E.dr()}}function rn(n,e){return be(n)!==be(e)?"TYPE_MISMATCH":it(n)||it(e)?"NOT_EQ":lt(n)&&lt(e)?"EQ":lt(n)||lt(e)?"NULL":Bn(n)&&Bn(e)?(function(r,s){var o,c,u;if(((o=r.values)==null?void 0:o.length)!==((c=s.values)==null?void 0:c.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((u=r.values)==null?void 0:u.length)??0);l++){const d=r.values[l],p=s.values[l];switch(rn(d,p)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:$(44609,{Sr:d,Dr:p})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):vr(n)&&vr(e)||_r(n)&&_r(e)?(function(r,s){const i=r.fields||{},o=s.fields||{};if(_a(i)!==_a(o))return"NOT_EQ";let c=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(rn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return pt(r,s,{o:!1,t:!0,i:!0})})(n,e)?"EQ":"NOT_EQ"}class qE extends _o{vr(e,t){return Ut(e)+Ut(t)}br(e,t){return{doubleValue:Be(e)+Be(t)}}}class $E extends _o{constructor(e){super(e),this.expr=e}vr(e,t){return Ut(e)-Ut(t)}br(e,t){return{doubleValue:Be(e)-Be(t)}}}class jE extends _o{constructor(e){super(e),this.expr=e}vr(e,t){return Ut(e)*Ut(t)}br(e,t){return{doubleValue:Be(e)*Be(t)}}}class zE extends _o{constructor(e){super(e),this.expr=e}vr(e,t){const r=Ut(t);if(r!==BigInt(0))return Ut(e)/r}br(e,t){const r=Be(t);return r===0?{doubleValue:ds(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Be(e)/r}}}class GE extends _o{constructor(e){super(e),this.expr=e}vr(e,t){const r=Ut(t);if(r!==BigInt(0))return Ut(e)%r}br(e,t){const r=Be(t);if(r!==0)return{doubleValue:Be(e)%r}}}class KE{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const c=K(o).evaluate(e,t);switch(c.type){case"BOOLEAN":if(!((i=c.value)!=null&&i.booleanValue))return E.newValue(Me);break;case"NULL":s=!0;break;default:r=!0}}return r?E.dr():s?E.pr():E.newValue(st)}}class cc{constructor(e){this.expr=e}evaluate(e,t){var s;L(this.expr.params.length===1,9634);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return E.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return E.pr();default:return E.dr()}}}class WE{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const c=K(o).evaluate(e,t);switch(c.type){case"BOOLEAN":if((i=c.value)!=null&&i.booleanValue)return E.newValue(st);break;case"NULL":s=!0;break;default:r=!0}}return r?E.dr():s?E.pr():E.newValue(Me)}}class Cl{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const c=K(o).evaluate(e,t);switch(c.type){case"BOOLEAN":r=Cl.xor(r,!!((i=c.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return E.dr()}}return s?E.pr():E.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Og{constructor(e){this.expr=e}evaluate(e,t){var o,c;L(this.expr.params.length===2,55094);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();for(const u of((c=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:c.values)??[])switch(lt(s.value)&&lt(u)?"EQ":rn(s.value,u)){case"EQ":return E.newValue(st);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44608,{value:s.value,candidate:u})}return r?E.pr():E.newValue(Me)}}class HE{constructor(e){this.expr=e}evaluate(e,t){return new cc(new x("not",[new x("equal_any",this.expr.params)])).evaluate(e,t)}}class QE{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===1,23322);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return E.newValue(Me);case"DOUBLE":return E.newValue({booleanValue:isNaN(Be(r.value))});case"NULL":return E.pr();default:return E.dr()}}}class JE{constructor(e){this.expr=e}evaluate(e,t){return L(this.expr.params.length===1,50406),new cc(new x("not",[new x("is_nan",this.expr.params)])).evaluate(e,t)}}class YE{constructor(e){this.expr=e}evaluate(e,t){switch(L(this.expr.params.length===1,23123),K(this.expr.params[0]).evaluate(e,t).type){case"NULL":return E.newValue(st);case"UNSET":case"ERROR":return E.dr();default:return E.newValue(Me)}}}class XE{constructor(e){this.expr=e}evaluate(e,t){return L(this.expr.params.length===1,23167),new cc(new x("not",[new x("is_null",this.expr.params)])).evaluate(e,t)}}class ZE{constructor(e){this.expr=e}evaluate(e,t){return L(this.expr.params.length===1,5228),K(this.expr.params[0]).evaluate(e,t).type==="ERROR"?E.newValue(st):E.newValue(Me)}}class ev{constructor(e){this.expr=e}evaluate(e,t){switch(L(this.expr.params.length===1,6877),K(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return E.dr();case"UNSET":return E.newValue(Me);default:return E.newValue(st)}}}class tv{constructor(e){this.expr=e}evaluate(e,t){var s;L(this.expr.params.length===3,11706);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?K(this.expr.params[1]).evaluate(e,t):K(this.expr.params[2]).evaluate(e,t);case"NULL":return K(this.expr.params[2]).evaluate(e,t);default:return E.dr()}}}class nv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>K(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||We(i.value,s.value)>0?i:s}return s===void 0?E.pr():s}}class rv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>K(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||We(i.value,s.value)<0?i:s}return s===void 0?E.pr():s}}class $s{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return E.dr()}const s=K(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return E.dr()}return this.Cr(r,s)}}class sv extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return E.newValue(st);if(e.yr()||t.yr()||it(e.value)||it(t.value)||be(e.value)!==be(t.value))return E.newValue(Me);switch(rn(e.value,t.value)){case"EQ":return E.newValue(st);case"NOT_EQ":return E.newValue(Me);case"NULL":return E.pr();default:$(44615,{left:e,right:t})}}}class iv extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){switch(rn(e.value,t.value)){case"EQ":return E.newValue(Me);case"NOT_EQ":case"TYPE_MISMATCH":return E.newValue(st);case"NULL":return E.pr();default:$(44614,{left:e,right:t})}}}class ov extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||it(e.value)||it(t.value)?E.newValue(Me):E.newValue({booleanValue:We(e.value,t.value)<0})}}class av extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||it(e.value)||it(t.value)?E.newValue(Me):rn(e.value,t.value)==="EQ"?E.newValue(st):E.newValue({booleanValue:We(e.value,t.value)<0})}}class cv extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||it(e.value)||it(t.value)?E.newValue(Me):E.newValue({booleanValue:We(e.value,t.value)>0})}}class uv extends $s{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||it(e.value)||it(t.value)?E.newValue(Me):rn(e.value,t.value)==="EQ"?E.newValue(st):E.newValue({booleanValue:We(e.value,t.value)>0})}}class lv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class hv{constructor(e){this.expr=e}evaluate(e,t){var s;L(this.expr.params.length===1,216);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return E.newValue({arrayValue:{values:[...i].reverse()}})}default:return E.dr()}}}class dv{constructor(e){this.expr=e}evaluate(e,t){return L(this.expr.params.length===2,52884),new Og(new x("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class fv{constructor(e){this.expr=e}evaluate(e,t){var u,l,d,p;L(this.expr.params.length===2,1392);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],c=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const g of o){let w=!1;r=!1;for(const P of c){switch(lt(g)&&lt(P)?"EQ":rn(g,P)){case"EQ":w=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44613,{value:P,search:g})}if(w)break}if(!w)return E.newValue(Me)}return E.newValue(st)}}class pv{constructor(e){this.expr=e}evaluate(e,t){var u,l,d,p;L(this.expr.params.length===2,2680);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],c=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const g of c)for(const w of o)switch(lt(g)&&lt(w)?"EQ":rn(g,w)){case"EQ":return E.newValue(st);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(60403,{value:g,search:w})}return r?E.pr():E.newValue(Me)}}class mv{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;L(this.expr.params.length===1,38605);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"ARRAY":return E.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return E.dr()}}}class gv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _v{constructor(e){this.expr=e}evaluate(e,t){var s,i;L(this.expr.params.length===1,1508);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const c=pe.fromBase64String(o).toUint8Array();return c.reverse(),E.newValue({bytesValue:pe.fromUint8Array(c).toBase64()})}return E.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,c=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(c,(l=>l.segment)).reverse();return E.newValue({stringValue:u.join("")})}default:return E.dr()}}}class yv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Iv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class wv{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===1,19400);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"STRING":{const s=(function(o){let c=0;for(let u=0;u<o.length;u++){const l=o.codePointAt(u);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const d=o.codePointAt(u+1);d!==void 0&&d>=56320&&d<=57343?(c+=1,u++):c+=1}else c+=1;else c+=1;else{if(!(l<=1114111))return;c+=1,u++}}return c})(r.value.stringValue);return s===void 0?E.dr():E.newValue({integerValue:s})}default:return E.dr()}}}class Tv{constructor(e){this.expr=e}evaluate(e,t){var s,i;L(this.expr.params.length===1,8486);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?E.newValue({integerValue:pe.fromBase64String(o).toUint8Array().length}):E.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(u){let l=0;for(let d=0;d<u.length;d++){const p=u.codePointAt(d);if(p===void 0)return;if(p>=55296&&p<=57343){if(!(p<=56319))return;{const g=u.codePointAt(d+1);if(g===void 0||!(g>=56320&&g<=57343))return;l+=4,d++}}else if(p<=127)l+=1;else if(p<=2047)l+=2;else if(p<=65535)l+=3;else{if(!(p<=1114111))return;l+=4,d++}}return l})((i=r.value)==null?void 0:i.stringValue);return o===void 0?E.dr():E.newValue({integerValue:o})}case"NULL":return E.pr();default:return E.dr()}}}class js{constructor(e){this.expr=e}evaluate(e,t){var o,c;L(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return E.dr()}return r?E.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(c=i.value)==null?void 0:c.stringValue)}}class Ev extends js{Fr(e,t){try{const r=(function(o){let c="";for(let u=0;u<o.length;u++){const l=o.charAt(u);switch(l){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+l;break;default:c+=l}}return"^"+c+"$"})(t),s=Hu.compile(r);return E.newValue({booleanValue:s.matches(e)})}catch(r){return xe(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),E.dr()}}}class vv extends js{Fr(e,t){try{const r=Hu.compile(t);return E.newValue({booleanValue:r.test(e)})}catch{return xe(`Invalid regex pattern found in regex_contains: ${t}, returning error`),E.dr()}}}class Av extends js{Fr(e,t){try{return E.newValue({booleanValue:Hu.compile(t).matches(e)})}catch{return xe(`Invalid regex pattern found in regex_match: ${t}, returning error`),E.dr()}}}class Rv extends js{Fr(e,t){return E.newValue({booleanValue:e.includes(t)})}}class Pv extends js{Fr(e,t){return E.newValue({booleanValue:e.startsWith(t)})}}class bv extends js{Fr(e,t){return E.newValue({booleanValue:e.endsWith(t)})}}class Sv{constructor(e){this.expr=e}evaluate(e,t){var s,i;L(this.expr.params.length===1,29079);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return E.pr();default:return E.dr()}}}class Vv{constructor(e){this.expr=e}evaluate(e,t){var s,i;L(this.expr.params.length===1,60487);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return E.pr();default:return E.dr()}}}class Cv{constructor(e){this.expr=e}evaluate(e,t){var s,i;L(this.expr.params.length===1,28544);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return E.pr();default:return E.dr()}}}class xv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((o=>K(o).evaluate(e,t)));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return E.dr()}return i?E.pr():E.newValue({stringValue:s})}}class Nv{constructor(e){this.expr=e}evaluate(e,t){var o,c,u,l;L(this.expr.params.length===2,4483);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return E.mr();case"MAP":break;default:return E.dr()}const s=K(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return E.dr();const i=(l=(c=(o=r.value)==null?void 0:o.mapValue)==null?void 0:c.fields)==null?void 0:l[(u=s.value)==null?void 0:u.stringValue];return i===void 0?E.mr():E.newValue(i)}}class xl{constructor(e){this.expr=e}evaluate(e,t){var l,d;L(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const o=yu(s.value),c=yu(i.value);if(o===void 0||c===void 0||((l=o.values)==null?void 0:l.length)!==((d=c.values)==null?void 0:d.length))return E.dr();const u=this.Or(o,c);return u===void 0||isNaN(u)?E.dr():E.newValue({doubleValue:u})}}class Dv extends xl{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,c=0;for(let l=0;l<r.length;l++){if(!Un(r[l])||!Un(s[l]))return;const d=Be(r[l]),p=Be(s[l]);i+=d*p,o+=d*d,c+=p*p}const u=Math.sqrt(o)*Math.sqrt(c);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class kv extends xl{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Un(r[o])||!Un(s[o]))return;i+=Be(r[o])*Be(s[o])}return i}}class Ov extends xl{Or(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Un(r[o])||!Un(s[o]))return;const c=Be(r[o]),u=Be(s[o]);i+=Math.pow(c-u,2)}return Math.sqrt(i)}}class Lv{constructor(e){this.expr=e}evaluate(e,t){var s;L(this.expr.params.length===1,39044);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=yu(r.value);return E.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return E.pr();default:return E.dr()}}}const Qi=BigInt(-62135596800),Ji=BigInt(253402300799),va=BigInt(1e3),kn=BigInt(1e6),Mv=Qi*va,Fv=Ji*va+BigInt(999),Uv=Qi*kn,Bv=Ji*kn+BigInt(999999);function Nl(n){return n>=Uv&&n<=Bv}function Lg(n){return n>=Qi&&n<=Ji}function Yi(n,e){const t=BigInt(n);return!(t<Qi||t>Ji)&&!(e<0||e>=1e9)&&(t!==Qi||e===0)&&!(t===Ji&&e>999999999)}function Mg(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Dl(n){return BigInt(n.seconds)*kn+BigInt(Math.trunc(n.nanoseconds/1e3))}class kl{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return E.pr();default:return E.dr()}}}class qv extends kl{toTimestamp(e){if(!Nl(e))return E.dr();let t=Number(e/kn),r=Number(e%kn*BigInt(1e3));const s=Mg(t,r);return t=s.seconds,r=s.nanos,Yi(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.dr()}}class $v extends kl{toTimestamp(e){if(!(function(o){return o>=Mv&&o<=Fv})(e))return E.dr();let t=Number(e/va),r=Number(e%va*BigInt(1e6));const s=Mg(t,r);return t=s.seconds,r=s.nanos,Yi(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.dr()}}class jv extends kl{toTimestamp(e){if(!Lg(e))return E.dr();const t=Number(e);return E.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ol{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=K(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return E.pr();default:return E.dr()}const s=dl(r.value.timestampValue);return Yi(s.seconds,s.nanoseconds)?this.Mr(s):E.dr()}}class zv extends Ol{Mr(e){const t=Dl(e);return Nl(t)?E.newValue({integerValue:`${t.toString()}`}):E.dr()}}class Gv extends Ol{Mr(e){const t=Dl(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?E.newValue({integerValue:r.toString()}):E.newValue({integerValue:(r-BigInt(1)).toString()})}}class Kv extends Ol{Mr(e){const t=BigInt(e.seconds);return Lg(t)?E.newValue({integerValue:t.toString()}):E.dr()}}class Fg{constructor(e){this.expr=e}evaluate(e,t){L(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return E.dr()}const i=K(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(G){switch(G){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return E.dr();break;case"NULL":r=!0;break;default:return E.dr()}const c=K(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const u=BigInt(c.value.integerValue);let l;try{switch(o){case"microsecond":l=u;break;case"millisecond":l=u*BigInt(1e3);break;case"second":l=u*BigInt(1e6);break;case"minute":l=u*BigInt(6e7);break;case"hour":l=u*BigInt(36e8);break;case"day":l=u*BigInt(864e8);break;default:return E.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&l/u!==BigInt(this.Nr(o)))return E.dr()}catch(q){return xe(`Error during timestamp arithmetic: ${q}`),E.dr()}const d=dl(s.value.timestampValue);if(!Yi(d.seconds,d.nanoseconds))return E.dr();const p=Dl(d),g=this.Lr(p,l);if(!Nl(g))return E.dr();const w=Number(g/kn),P=g%kn,k=Number((P<0?P+kn:P)*BigInt(1e3)),N=P<0?w-1:w;return Yi(N,k)?E.newValue({timestampValue:{seconds:N,nanos:k}}):E.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Wv extends Fg{Lr(e,t){return e+t}}class Hv extends Fg{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class ze{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return yo(this)}getPipelineCollectionGroup(){return Ll(this)}getPipelineCollectionId(){return Ug(this)}getPipelineDocuments(){return Aa(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==Dg.name&&s._name!==Ng.name||(r="keyless"),s._name===OE.name&&r==="exact"&&(r="augmented"),s._name===xg.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return Yt(this)}}function Yt(n){const e=n.stages[0];return e instanceof po||e instanceof mo||e instanceof oc||e instanceof ac?e._name:"unknown"}function yo(n){if(Yt(n)==="collection")return n.stages[0].Er}function Ll(n){if(Yt(n)==="collection_group")return n.stages[0].collectionId}function Ug(n){switch(Yt(n)){case"collection":return J.fromString(yo(n)).lastSegment();case"collection_group":return Ll(n);default:return}}function Aa(n){if(Yt(n)==="documents")return n.stages[0].hr}function Xi(n){if((n=kg(n))instanceof Br)return`fld(${n.fieldName})`;if(n instanceof qr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof oe?`ref(${t.path})`:t instanceof Ye?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof x)return`fn(${n.name},[${n.params.map(Xi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(Xi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Qv(n){if(n instanceof xg)return`${n._name}(${Wo(n.fields)})`;if(n instanceof Ng){let e=`${n._name}(${Wo(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Wo(n.groups)})`),e}if(n instanceof Dg)return`${n._name}(${Wo(n.groups)})`;if(n instanceof po)return`${n._name}(${n.Er})`;if(n instanceof mo)return`${n._name}(${n.collectionId})`;if(n instanceof oc)return`${n._name}()`;if(n instanceof ac)return`${n._name}(${n.hr.sort()})`;if(n instanceof go)return`${n._name}(${Xi(n.condition)})`;if(n instanceof jn)return`${n._name}(${n.limit})`;if(n instanceof Vt)return`${n._name}(${(function(t){return t.map((r=>`${Xi(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Wo(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Xi(t)}`)).join(",")}`}function Xt(n){return n.stages.map((e=>Qv(e))).join("|")}function Bg(n,e){return Xt(n)===Xt(e)}function Ie(n){return n instanceof ze}function Tf(n){return Ie(n)?Xt(n):Vi(n)}function qg(n){return Ie(n)?Xt(n):(function(t){return`${Ia(Ge(t))}|lt:${t.limitType}`})(n)}function uc(n,e){return n instanceof ze&&e instanceof ze?Bg(n,e):!(n instanceof ze&&!(e instanceof ze)||!(n instanceof ze)&&e instanceof ze)&&Om(n,e)}function lc(n){return Kt(n)?Xt(n):Ia(n)}function Ml(n,e){return n instanceof ze&&e instanceof ze?Bg(n,e):!(n instanceof ze&&!(e instanceof ze)||!(n instanceof ze)&&e instanceof ze)&&al(n,e)}function Jv(n,e){const t=(function(s){let i=!1;const o=[];for(const c of s)if(c instanceof Vt)if(i=!0,c.orderings.some((u=>u.expr instanceof Br&&u.expr.fieldName===bt)))o.push(c);else{const u=c.orderings.map((l=>l));u.push(oa(bt).ascending()),o.push(new Vt(u,{}))}else c instanceof jn&&(i||(o.push(new Vt([oa(bt).ascending()],{})),i=!0)),o.push(c);return i||o.push(new Vt([oa(bt).ascending()],{})),o})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new ze(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Si(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Si(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Bm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=wm(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Q())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,((t,r)=>Jd(t,r)))&&ls(this.baseMutations,e.baseMutations,((t,r)=>Jd(t,r)))}}class Ul{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){L(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=(function(){return PT})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ul(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="";function Ke(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ef(e)),e=Yv(n.get(t),e);return Ef(e)}function Yv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ra:t+="";break;default:t+=i}}return t}function Ef(n){return n+Ra+""}function Ct(n){const e=n.length;if(L(e>=2,64408,{path:n}),e===2)return L(n.charAt(0)===Ra&&n.charAt(1)==="",56145,{path:n}),J.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Ra,i);switch((o<0||o>t)&&$(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),r.push(u);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:$(61167,{path:n})}i=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="remoteDocuments",Io="owner",Wr="owner",Zi="mutationQueues",Xv="userId",mt="mutations",vf="batchId",gr="userMutationsIndex",Af=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,e){return[n,Ke(e)]}function $g(n,e,t){return[n,Ke(e),t]}const Zv={},vs="documentMutations",Pa="remoteDocumentsV14",eA=["prefixPath","collectionGroup","readTime","documentId"],ca="documentKeyIndex",tA=["prefixPath","collectionGroup","documentId"],jg="collectionGroupIndex",nA=["collectionGroup","readTime","prefixPath","documentId"],eo="remoteDocumentGlobal",Cu="remoteDocumentGlobalKey",As="targets",zg="queryTargetsIndex",rA=["canonicalId","targetId"],Rs="targetDocuments",sA=["targetId","path"],Bl="documentTargetsIndex",iA=["path","targetId"],ba="targetGlobalKey",Ir="targetGlobal",to="collectionParents",oA=["collectionId","parent"],Ps="clientMetadata",aA="clientId",hc="bundles",cA="bundleId",dc="namedQueries",uA="name",ql="indexConfiguration",lA="indexId",xu="collectionGroupIndex",hA="collectionGroup",Oi="indexState",dA=["indexId","uid"],Gg="sequenceNumberIndex",fA=["uid","sequenceNumber"],Li="indexEntries",pA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Kg="documentKeyIndex",mA=["indexId","uid","orderedDocumentKey"],fc="documentOverlays",gA=["userId","collectionPath","documentId"],Nu="collectionPathOverlayIndex",_A=["userId","collectionPath","largestBatchId"],Wg="collectionGroupOverlayIndex",yA=["userId","collectionGroup","largestBatchId"],$l="globals",IA="name",Hg=[Zi,mt,vs,ur,As,Io,Ir,Rs,Ps,eo,to,hc,dc],wA=[...Hg,fc],Qg=[Zi,mt,vs,Pa,As,Io,Ir,Rs,Ps,eo,to,hc,dc,fc],Jg=Qg,jl=[...Jg,ql,Oi,Li],TA=jl,Yg=[...jl,$l],EA=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){const r=n.store(mt),s=n.store(vs),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.jn({range:o},((d,p,g)=>(c++,g.delete())));i.push(u.next((()=>{L(c===1,47070,{batchId:t.batchId})})));const l=[];for(const d of t.mutations){const p=$g(e,d.key.path,t.batchId);i.push(s.delete(p)),l.push(d.key)}return R.waitFor(i).next((()=>l))}function Sa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw $(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends hg{constructor(e,t){super(),this.kr=e,this.currentSequenceNumber=t}}function De(n,e){const t=U(n);return Ot.xn(t.kr,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,r,s,i=z.min(),o=z.min(),c=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.qr=e}}function vA(n,e){let t;if(e.document)t=tc(n.qr,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),s=Sr(e.noDocument.readTime);t=ge.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $(56709);{const r=M.fromSegments(e.unknownDocument.path),s=Sr(e.unknownDocument.version);t=ge.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ie(s[0],s[1]);return z.fromTimestamp(i)})(e.readTime)),t}function Rf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Va(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:Es(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ts(i,o.version.toTimestamp()),createTime:Ts(i,o.createTime.toTimestamp())}})(n.qr,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:br(e.version)};else{if(!e.isUnknownDocument())return $(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:br(e.version)}}return r}function Va(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function br(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Sr(n){const e=new ie(n.seconds,n.nanoseconds);return z.fromTimestamp(e)}function dr(n,e){const t=(e.baseMutations||[]).map((i=>bu(n.qr,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>bu(n.qr,i))),s=ie.fromMillis(e.localWriteTimeMs);return new Fl(e.batchId,s,t,r)}function Pi(n,e){const t=Sr(e.readTime),r=e.lastLimboFreeSnapshotVersion!==void 0?Sr(e.lastLimboFreeSnapshotVersion):z.min();let s;return s=(function(o){return o.structuredPipeline!==void 0})(e.query)?(function(o,c){var d,p;const u=o.structuredPipeline;L((((d=u==null?void 0:u.pipeline)==null?void 0:d.stages)??[]).length>0,1845);const l=(p=u==null?void 0:u.pipeline)==null?void 0:p.stages.map(AA);return new ze(c,l)})(e.query,n.qr):(function(o){return o.documents!==void 0})(e.query)?(function(o){const c=o.documents.length;return L(c===1,1966,{count:c}),Ge(Bs(Wm(o.documents[0])))})(e.query):(function(o){return Ge(Ym(o))})(e.query),new xt(s,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,r,pe.fromBase64String(e.resumeToken))}function e_(n,e){const t=br(e.snapshotVersion),r=br(e.lastLimboFreeSnapshotVersion);let s;s=Kt(e.target)?Xm(n.qr,e.target):cl(e.target)?Qm(n.qr,e.target):nc(n.qr,e.target).be;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:lc(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function pc(n){const e=Ym({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ta(e,e.limit,"L"):e}function Ho(n,e){return new zl(e.largestBatchId,bu(n.qr,e.overlayMutation))}function Pf(n,e){const t=e.path.lastSegment();return[n,Ke(e.path.popLast()),t]}function bf(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:br(r.readTime),documentKey:Ke(r.documentKey.path),largestBatchId:r.largestBatchId}}function AA(n){switch(n.name){case"collection":return new po(n.args[0].referenceValue,{});case"collection_group":return new mo(n.args[1].stringValue,{});case"database":return new oc({});case"documents":return new ac(n.args.map((e=>e.referenceValue)),{});case"where":return new go(ku(n.args[0]),{});case"limit":{const e=n.args[0].integerValue??n.args[0].doubleValue;return new jn(typeof e=="number"?e:Number(e),{})}case"sort":return new Vt(n.args.map((e=>(function(r){var i,o;const s=(i=r.mapValue)==null?void 0:i.fields;return new Sl(ku(s.expression),(o=s.direction)==null?void 0:o.stringValue,"orderingFromProto")})(e))),{});default:throw new Error(`Stage type: ${n.name} not supported.`)}}function ku(n){return n.fieldReferenceValue?new Br(Tt("_exprFromProto",n.fieldReferenceValue),"_exprFromProto"):n.functionValue?(function(t){var r;return new x(t.functionValue.name,((r=t.functionValue.args)==null?void 0:r.map(ku))||[])})(n):qr._fromProto(n)}class mc{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.$r={}}static Kr(e,t,r,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new mc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return yn(e).jn({index:gr,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=ns(e),o=yn(e);return o.add({}).next((c=>{L(typeof c=="number",49019);const u=new Fl(c,t,r,s),l=(function(w,P,k){const N=k.baseMutations.map((G=>Ki(w.qr,G))),q=k.mutations.map((G=>Ki(w.qr,G)));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:N,mutations:q}})(this.serializer,this.userId,u),d=[];let p=new ae(((g,w)=>W(g.canonicalString(),w.canonicalString())));for(const g of s){const w=$g(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),d.push(o.put(l)),d.push(i.put(w,Zv))}return p.forEach((g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.$r[c]=u.keys()})),R.waitFor(d).next((()=>u))}))}lookupMutationBatch(e,t){return yn(e).get(t).next((r=>r?(L(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),dr(this.serializer,r)):null))}Wr(e,t){return this.$r[t]?R.resolve(this.$r[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.$r[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return yn(e).jn({index:gr,range:s},((o,c,u)=>{c.userId===this.userId&&(L(c.batchId>=r,47524,{Qr:r}),i=dr(this.serializer,c)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Dn;return yn(e).jn({index:gr,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Dn],[this.userId,Number.POSITIVE_INFINITY]);return yn(e).Kn(gr,t).next((r=>r.map((s=>dr(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=aa(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ns(e).jn({range:s},((o,c,u)=>{const[l,d,p]=o,g=Ct(d);if(l===this.userId&&t.path.isEqual(g))return yn(e).get(p).next((w=>{if(!w)throw $(61480,{Gr:o,batchId:p});L(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),i.push(dr(this.serializer,w))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(W);const s=[];return t.forEach((i=>{const o=aa(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=ns(e).jn({range:c},((l,d,p)=>{const[g,w,P]=l,k=Ct(w);g===this.userId&&i.path.isEqual(k)?r=r.add(P):p.done()}));s.push(u)})),R.waitFor(s).next((()=>this.zr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=aa(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ae(W);return ns(e).jn({range:o},((u,l,d)=>{const[p,g,w]=u,P=Ct(g);p===this.userId&&r.isPrefixOf(P)?P.length===s&&(c=c.add(w)):d.done()})).next((()=>this.zr(e,c)))}zr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(yn(e).get(i).next((o=>{if(o===null)throw $(35274,{batchId:i});L(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(dr(this.serializer,o))})))})),R.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return Xg(e.kr,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.jr(t.batchId)})),R.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}jr(e){delete this.$r[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return ns(e).jn({range:r},((i,o,c)=>{if(i[0]===this.userId){const u=Ct(i[1]);s.push(u)}else c.done()})).next((()=>{L(s.length===0,56720,{Hr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return t_(e,this.userId,t)}Jr(e){return n_(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Dn,lastStreamToken:""}))}}function t_(n,e,t){const r=aa(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ns(n).jn({range:i,zn:!0},((c,u,l)=>{const[d,p,g]=c;d===e&&p===s&&(o=!0),l.done()})).next((()=>o))}function yn(n){return De(n,mt)}function ns(n){return De(n,vs)}function n_(n){return De(n,Zi)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{getBundleMetadata(e,t){return Sf(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:Sr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return Sf(e).put((function(s){return{bundleId:s.id,createTime:br(ve(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Vf(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:pc(i.bundledQuery),readTime:Sr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return Vf(e).put((function(s){return{name:s.name,readTime:br(ve(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Sf(n){return De(n,hc)}function Vf(n){return De(n,dc)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.serializer=e,this.userId=t}static Kr(e,t){const r=t.uid||"";return new gc(e,r)}getOverlay(e,t){return Hr(e).get(Pf(this.userId,t)).next((r=>r?Ho(this.serializer,r):null))}getOverlays(e,t){const r=ft();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=ft();return Hr(e).jn(((s,i)=>{const o=Ho(this.serializer,i);o.largestBatchId>t&&r.set(o.getKey(),o)})).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const c=new zl(t,o);s.push(this.Yr(e,c))})),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(Ke(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Hr(e).Gn(Nu,c))})),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=ft(),i=Ke(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Hr(e).Kn(Nu,o).next((c=>{for(const u of c){const l=Ho(this.serializer,u);s.set(l.getKey(),l)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=ft();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hr(e).jn({index:Wg,range:c},((u,l,d)=>{const p=Ho(this.serializer,l);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()})).next((()=>i))}Yr(e,t){return Hr(e).put((function(s,i,o){const[c,u,l]=Pf(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ki(s.qr,o.mutation)}})(this.serializer,this.userId,t))}}function Hr(n){return De(n,fc)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{Zr(e){return De(e,$l)}getSessionToken(e){return this.Zr(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?pe.fromUint8Array(r):pe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Zr(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){}Xr(e,t){this.ei(e,t),t.ti()}ei(e,t){if("nullValue"in e)this.ni(t,5);else if("booleanValue"in e)this.ni(t,10),t.ri(e.booleanValue?1:0);else if("integerValue"in e)this.ni(t,15),t.ri(fe(e.integerValue));else if("doubleValue"in e){const r=fe(e.doubleValue);isNaN(r)?this.ni(t,13):(this.ni(t,15),ds(r)?t.ri(0):t.ri(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ni(t,20),typeof r=="string"&&(r=tn(r)),t.ii(`${r.seconds||""}`),t.ri(r.nanos||0)}else if("stringValue"in e)this.si(e.stringValue,t),this._i(t);else if("bytesValue"in e)this.ni(t,30),t.oi(nn(e.bytesValue)),this._i(t);else if("referenceValue"in e)this.ai(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ni(t,45),t.ri(r.latitude||0),t.ri(r.longitude||0)}else"mapValue"in e?fm(e)?this.ni(t,Number.MAX_SAFE_INTEGER):vr(e)?this.ui(e.mapValue,t):(this.ci(e.mapValue,t),this._i(t)):"arrayValue"in e?(this.li(e.arrayValue,t),this._i(t)):$(19022,{Ei:e})}si(e,t){this.ni(t,25),this.hi(e,t)}hi(e,t){t.ii(e)}ci(e,t){const r=e.fields||{};this.ni(t,55);for(const s of Object.keys(r))this.si(s,t),this.ei(r[s],t)}ui(e,t){var o,c;const r=e.fields||{};this.ni(t,53);const s=Tr,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.ni(t,15),t.ri(fe(i)),this.si(s,t),this.ei(r[s],t)}li(e,t){const r=e.values||[];this.ni(t,50);for(const s of r)this.ei(s,t)}ai(e,t){this.ni(t,37),M.fromName(e).path.forEach((r=>{this.ni(t,60),this.hi(r,t)}))}ni(e,t){e.ri(t)}_i(e){e.ri(2)}}fr.Ti=new fr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=255;function bA(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Cf(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=bA(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class SA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Pi(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ri(r.value),r=t.next();this.Ii()}Ai(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Vi(r.value),r=t.next();this.di()}fi(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ri(r);else if(r<2048)this.Ri(960|r>>>6),this.Ri(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ri(480|r>>>12),this.Ri(128|63&r>>>6),this.Ri(128|63&r);else{const s=t.codePointAt(0);this.Ri(240|s>>>18),this.Ri(128|63&s>>>12),this.Ri(128|63&s>>>6),this.Ri(128|63&s)}}this.Ii()}mi(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Vi(r);else if(r<2048)this.Vi(960|r>>>6),this.Vi(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Vi(480|r>>>12),this.Vi(128|63&r>>>6),this.Vi(128|63&r);else{const s=t.codePointAt(0);this.Vi(240|s>>>18),this.Vi(128|63&s>>>12),this.Vi(128|63&s>>>6),this.Vi(128|63&s)}}this.di()}pi(e){const t=this.gi(e),r=Cf(t);this.yi(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}wi(e){const t=this.gi(e),r=Cf(t);this.yi(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}bi(){this.Si(Qr),this.Si(255)}Di(){this.xi(Qr),this.xi(255)}reset(){this.position=0}seed(e){this.yi(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ci(){return this.buffer.slice(0,this.position)}gi(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ri(e){const t=255&e;t===0?(this.Si(0),this.Si(255)):t===Qr?(this.Si(Qr),this.Si(0)):this.Si(t)}Vi(e){const t=255&e;t===0?(this.xi(0),this.xi(255)):t===Qr?(this.xi(Qr),this.xi(0)):this.xi(e)}Ii(){this.Si(0),this.Si(1)}di(){this.xi(0),this.xi(1)}Si(e){this.yi(1),this.buffer[this.position++]=e}xi(e){this.yi(1),this.buffer[this.position++]=~e}yi(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class VA{constructor(e){this.Fi=e}oi(e){this.Fi.Pi(e)}ii(e){this.Fi.fi(e)}ri(e){this.Fi.pi(e)}ti(){this.Fi.bi()}}class CA{constructor(e){this.Fi=e}oi(e){this.Fi.Ai(e)}ii(e){this.Fi.mi(e)}ri(e){this.Fi.wi(e)}ti(){this.Fi.Di()}}class _i{constructor(){this.Fi=new SA,this.ascending=new VA(this.Fi),this.descending=new CA(this.Fi)}seed(e){this.Fi.seed(e)}Oi(e){return e===0?this.ascending:this.descending}Ci(){return this.Fi.Ci()}reset(){this.Fi.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,r,s){this.Mi=e,this.Ni=t,this.Li=r,this.Bi=s}Ui(){const e=this.Bi.length,t=e===0||this.Bi[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.Bi,0),t!==e?r.set([0],this.Bi.length):++r[r.length-1],new pr(this.Mi,this.Ni,this.Li,r)}ki(e,t,r){return{indexId:this.Mi,uid:e,arrayValue:ua(this.Li),directionalValue:ua(this.Bi),orderedDocumentKey:ua(t),documentKey:r.path.toArray()}}qi(e,t,r){const s=this.ki(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function In(n,e){let t=n.Mi-e.Mi;return t!==0?t:(t=xf(n.Li,e.Li),t!==0?t:(t=xf(n.Bi,e.Bi),t!==0?t:M.comparator(n.Ni,e.Ni)))}function xf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function ua(n){return Gp()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function Nf(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class Df{constructor(e){this.$i=new ae(((t,r)=>Ee.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ki=e.orderBy,this.Wi=[];for(const t of e.filters){const r=t;r.isInequality()?this.$i=this.$i.add(r):this.Wi.push(r)}}get Qi(){return this.$i.size>1}Gi(e){if(L(e.collectionGroup===this.collectionId,49279),this.Qi)return!1;const t=Tu(e);if(t!==void 0&&!this.zi(t))return!1;const r=cr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.zi(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.$i.size>0){const c=this.$i.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=r[i];if(!this.ji(c,u)||!this.Hi(this.Ki[o++],u))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.Ki.length||!this.Hi(this.Ki[o++],c))return!1}return!0}Ji(){if(this.Qi)return null;let e=new ae(Ee.comparator);const t=[];for(const r of this.Wi)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new yr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new yr(r.field,0))}for(const r of this.Ki)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new yr(r.field,r.dir==="asc"?0:1)));return new Is(Is.UNKNOWN_ID,this.collectionId,t,ws.empty())}zi(e){for(const t of this.Wi)if(this.ji(t,e))return!0;return!1}ji(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Hi(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){var t,r;if(L(n instanceof re||n instanceof ue,20012),n instanceof re){if(n instanceof Vm){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((i=>re.create(n.field,"==",i))))||[];return ue.create(s,"or")}return n}const e=n.filters.map((s=>r_(s)));return ue.create(e,n.op)}function xA(n){if(n.getFilters().length===0)return[];const e=Mu(r_(n));return L(s_(e),7391),Ou(e)||Lu(e)?[e]:e.getFilters()}function Ou(n){return n instanceof re}function Lu(n){return n instanceof ue&&il(n)}function s_(n){return Ou(n)||Lu(n)||(function(t){if(t instanceof ue&&Iu(t)){for(const r of t.getFilters())if(!Ou(r)&&!Lu(r))return!1;return!0}return!1})(n)}function Mu(n){if(L(n instanceof re||n instanceof ue,34018),n instanceof re)return n;if(n.filters.length===1)return Mu(n.filters[0]);const e=n.filters.map((r=>Mu(r)));let t=ue.create(e,n.op);return t=Ca(t),s_(t)?t:(L(t instanceof ue,64498),L(_s(t),40251),L(t.filters.length>1,57927),t.filters.reduce(((r,s)=>Gl(r,s))))}function Gl(n,e){let t;return L(n instanceof re||n instanceof ue,38388),L(e instanceof re||e instanceof ue,25473),t=n instanceof re?e instanceof re?(function(s,i){return ue.create([s,i],"and")})(n,e):kf(n,e):e instanceof re?kf(e,n):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),_s(s)&&_s(i))return Pm(s,i.getFilters());const o=Iu(s)?s:i,c=Iu(s)?i:s,u=o.filters.map((l=>Gl(l,c)));return ue.create(u,"or")})(n,e),Ca(t)}function kf(n,e){if(_s(e))return Pm(e,n.getFilters());{const t=e.filters.map((r=>Gl(n,r)));return ue.create(t,"or")}}function Ca(n){if(L(n instanceof re||n instanceof ue,11850),n instanceof re)return n;const e=n.getFilters();if(e.length===1)return Ca(e[0]);if(Am(n))return n;const t=e.map((s=>Ca(s))),r=[];return t.forEach((s=>{s instanceof re?r.push(s):s instanceof ue&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:ue.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.Yi=new Kl}addToCollectionParentIndex(e,t){return this.Yi.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(ht.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(ht.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Kl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ae(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ae(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="IndexedDbIndexManager",Qo=new Uint8Array(0);class DA{constructor(e,t){this.databaseId=t,this.Zi=new Kl,this.Xi=new un((r=>Ia(r)),((r,s)=>al(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Zi.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Zi.add(t)}));const i={collectionId:r,parent:Ke(s)};return Lf(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[nm(t),""],!1,!0);return Lf(e).Kn(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Ct(o.parent))}return r}))}addFieldIndex(e,t){const r=yi(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Yr(e);return i.next((c=>{o.put(bf(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=yi(e),s=Yr(e),i=Jr(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=yi(e),r=Jr(e),s=Yr(e);return t.Gn().next((()=>r.Gn())).next((()=>s.Gn()))}createTargetIndexes(e,t){return R.forEach(this.es(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new Df(r).Ji();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=Jr(e);let s=!0;const i=new Map;return R.forEach(this.es(t),(o=>this.ts(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=Q();const c=[];return R.forEach(i,((u,l)=>{O(Of,`Using index ${(function(j){return`id=${j.indexId}|cg=${j.collectionGroup}|f=${j.fields.map((Y=>`${Y.fieldPath}:${Y.kind}`)).join(",")}`})(u)} to execute ${Ia(t)}`);const d=(function(j,Y){const Z=Tu(Y);if(Z===void 0)return null;for(const te of wa(j,Z.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null})(l,u),p=(function(j,Y){const Z=new Map;for(const te of cr(Y))for(const T of wa(j,te.fieldPath))switch(T.op){case"==":case"in":Z.set(te.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Z.set(te.fieldPath.canonicalString(),T.value),Array.from(Z.values())}return null})(l,u),g=(function(j,Y){const Z=[];let te=!0;for(const T of cr(Y)){const _=T.kind===0?tf(j,T.fieldPath,j.startAt):nf(j,T.fieldPath,j.startAt);Z.push(_.value),te&&(te=_.inclusive)}return new qn(Z,te)})(l,u),w=(function(j,Y){const Z=[];let te=!0;for(const T of cr(Y)){const _=T.kind===0?nf(j,T.fieldPath,j.endAt):tf(j,T.fieldPath,j.endAt);Z.push(_.value),te&&(te=_.inclusive)}return new qn(Z,te)})(l,u),P=this.ns(u,l,g),k=this.ns(u,l,w),N=this.rs(u,l,p),q=this.ss(u.indexId,d,P,g.inclusive,k,w.inclusive,N);return R.forEach(q,(G=>r.Qn(G,t.limit).next((j=>{j.forEach((Y=>{const Z=M.fromSegments(Y.documentKey);o.has(Z)||(o=o.add(Z),c.push(Z))}))}))))})).next((()=>c))}return R.resolve(null)}))}es(e){let t=this.Xi.get(e);return t||(e.filters.length===0?t=[e]:t=xA(ue.create(e.filters,"and")).map((r=>Eu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Xi.set(e,t),t)}ss(e,t,r,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,i.length),l=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const g=t?this._s(t[p/l]):Qo,w=this.us(e,g,r[p%l],s),P=this.cs(e,g,i[p%l],o),k=c.map((N=>this.us(e,g,N,!0)));d.push(...this.createRange(w,P,k))}return d}us(e,t,r,s){const i=new pr(e,M.empty(),t,r);return s?i:i.Ui()}cs(e,t,r,s){const i=new pr(e,M.empty(),t,r);return s?i.Ui():i}ts(e,t){const r=new Df(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)r.Gi(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const s=this.es(t);return R.forEach(s,(i=>this.ts(e,i).next((o=>{o?r!==0&&o.fields.length<(function(u){let l=new ae(Ee.comparator),d=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:l=l.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(l=l.add(p.field));return l.size+(d?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}ls(e,t){const r=new _i;for(const s of cr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Oi(s.kind);fr.Ti.Xr(i,o)}return r.Ci()}_s(e){const t=new _i;return fr.Ti.Xr(e,t.Oi(0)),t.Ci()}Es(e,t){const r=new _i;return fr.Ti.Xr(Er(this.databaseId,t),r.Oi((function(i){const o=cr(i);return o.length===0?0:o[o.length-1].kind})(e))),r.Ci()}rs(e,t,r){if(r===null)return[];let s=[];s.push(new _i);let i=0;for(const o of cr(e)){const c=r[i++];for(const u of s)if(this.hs(t,o.fieldPath)&&Bn(c))s=this.Ts(s,o,c);else{const l=u.Oi(o.kind);fr.Ti.Xr(c,l)}}return this.Ps(s)}ns(e,t,r){return this.rs(e,t,r.position)}Ps(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ci();return t}Ts(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const u=new _i;u.seed(c.Ci()),fr.Ti.Xr(o,u.Oi(t.kind)),i.push(u)}return i}hs(e,t){return!!e.filters.find((r=>r instanceof re&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=yi(e),s=Yr(e);return(t?r.Kn(xu,IDBKeyRange.bound(t,t)):r.Kn()).next((i=>{const o=[];return R.forEach(i,(c=>s.get([c.indexId,this.uid]).next((u=>{o.push((function(d,p){const g=p?new ws(p.sequenceNumber,new ht(Sr(p.readTime),new M(Ct(p.documentKey)),p.largestBatchId)):ws.empty(),w=d.fields.map((([P,k])=>new yr(Ee.fromServerFormat(P),k)));return new Is(d.indexId,d.collectionGroup,w,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=yi(e),i=Yr(e);return this.Rs(e).next((o=>s.Kn(xu,IDBKeyRange.bound(t,t)).next((c=>R.forEach(c,(u=>i.put(bf(u.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(r.set(s.collectionGroup,c),R.forEach(c,(u=>this.Is(e,s,u).next((l=>{const d=this.As(i,u);return l.isEqual(d)?R.resolve():this.Vs(e,i,u,l,d)})))))))}))}ds(e,t,r,s){return Jr(e).put(s.ki(this.uid,this.Es(r,t.key),t.key))}fs(e,t,r,s){return Jr(e).delete(s.qi(this.uid,this.Es(r,t.key),t.key))}Is(e,t,r){const s=Jr(e);let i=new ae(In);return s.jn({index:Kg,range:IDBKeyRange.only([r.indexId,this.uid,ua(this.Es(r,t))])},((o,c)=>{i=i.add(new pr(r.indexId,t,Nf(c.arrayValue),Nf(c.directionalValue)))})).next((()=>i))}As(e,t){let r=new ae(In);const s=this.ls(t,e);if(s==null)return r;const i=Tu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Bn(o))for(const c of o.arrayValue.values||[])r=r.add(new pr(t.indexId,e.key,this._s(c),s))}else r=r.add(new pr(t.indexId,e.key,Qo,s));return r}Vs(e,t,r,s,i){O(Of,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,d,p,g){const w=u.getIterator(),P=l.getIterator();let k=Kr(w),N=Kr(P);for(;k||N;){let q=!1,G=!1;if(k&&N){const j=d(k,N);j<0?G=!0:j>0&&(q=!0)}else k!=null?G=!0:q=!0;q?(p(N),N=Kr(P)):G?(g(k),k=Kr(w)):(k=Kr(w),N=Kr(P))}})(s,i,In,(c=>{o.push(this.ds(e,t,r,c))}),(c=>{o.push(this.fs(e,t,r,c))})),R.waitFor(o)}Rs(e){let t=1;return Yr(e).jn({index:Gg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>In(o,c))).filter(((o,c,u)=>!c||In(o,u[c-1])!==0));const s=[];s.push(e);for(const o of r){const c=In(o,e),u=In(o,t);if(c===0)s[0]=e.Ui();else if(c>0&&u<0)s.push(o),s.push(o.Ui());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.ps(s[o],s[o+1]))return[];const c=s[o].qi(this.uid,Qo,M.empty()),u=s[o+1].qi(this.uid,Qo,M.empty());i.push(IDBKeyRange.bound(c,u))}return i}ps(e,t){return In(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Mf)}getMinOffset(e,t){return R.mapArray(this.es(t),(r=>this.ts(e,r).next((s=>s||$(44426))))).next(Mf)}}function Lf(n){return De(n,to)}function Jr(n){return De(n,Li)}function yi(n){return De(n,ql)}function Yr(n){return De(n,Oi)}function Mf(n){L(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;ol(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ht(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new sn(0)}static ws(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.bs(e).next((t=>{const r=new sn(t.highestTargetId);return t.highestTargetId=r.next(),this.vs(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bs(e).next((t=>z.fromTimestamp(new ie(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bs(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.bs(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.vs(e,s))))}addTargetData(e,t){return this.Ss(e,t).next((()=>this.bs(e).next((r=>(r.targetCount+=1,this.Ds(t,r),this.vs(e,r))))))}updateTargetData(e,t){return this.Ss(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Xr(e).delete(t.targetId))).next((()=>this.bs(e))).next((r=>(L(r.targetCount>0,8065),r.targetCount-=1,this.vs(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return Xr(e).jn(((o,c)=>{const u=Pi(this.serializer,c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>R.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Xr(e).jn(((r,s)=>{const i=Pi(this.serializer,s);t(i)}))}bs(e){return Ff(e).get(ba).next((t=>(L(t!==null,2888),t)))}vs(e,t){return Ff(e).put(ba,t)}Ss(e,t){return Xr(e).put(e_(this.serializer,t))}Ds(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.bs(e).next((t=>t.targetCount))}getTargetData(e,t){const r=lc(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Xr(e).jn({range:s,index:zg},((o,c,u)=>{const l=Pi(this.serializer,c);Ml(t,l.target)&&(i=l,u.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=An(e);return t.forEach((o=>{const c=Ke(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))})),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=An(e);return R.forEach(t,(i=>{const o=Ke(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=An(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=An(e);let i=Q();return s.jn({range:r,zn:!0},((o,c,u)=>{const l=Ct(o[1]),d=new M(l);i=i.add(d)})).next((()=>i))}containsKey(e,t){const r=Ke(t.path),s=IDBKeyRange.bound([r],[nm(r)],!1,!0);let i=0;return An(e).jn({index:Bl,zn:!0,range:s},(([o,c],u,l)=>{o!==0&&(i++,l.done())})).next((()=>i>0))}ge(e,t){return Xr(e).get(t).next((r=>r?Pi(this.serializer,r):null))}}function Xr(n){return De(n,As)}function Ff(n){return De(n,Ir)}function An(n){return De(n,Rs)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.db=e,this.garbageCollector=mg(this,t)}rr(e){const t=this.xs(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}xs(e){let t=0;return this.ir(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ir(e,t){return this.Cs(e,((r,s)=>t(s)))}addReference(e,t,r){return Jo(e,r)}removeReference(e,t,r){return Jo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Jo(e,t)}Fs(e,t){return(function(s,i){let o=!1;return n_(s).Hn((c=>t_(s,c,i).next((u=>(u&&(o=!0),R.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Cs(e,((o,c)=>{if(c<=t){const u=this.Fs(e,o).next((l=>{if(!l)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,z.min()),An(e).delete((function(p){return[0,Ke(p.path)]})(o)))))}));s.push(u)}})).next((()=>R.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Jo(e,t)}Cs(e,t){const r=An(e);let s,i=tt.yn;return r.jn({index:Bl},(([o,c],{path:u,sequenceNumber:l})=>{o===0?(i!==tt.yn&&t(new M(Ct(s)),i),i=l,s=u):i=tt.yn})).next((()=>{i!==tt.yn&&t(new M(Ct(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Jo(n,e){return An(n).put((function(r,s){return{targetId:0,path:Ke(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}// Copyright 2024 Google LLC* @license
function i_(n,e){var r;let t=e;for(const s of n.stages)t=LA({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function _c(n,e){return i_(n,[e]).length>0}function o_(n,e){return Ie(n)?_c(n,e):Za(n,e)}function LA(n,e,t){if(e instanceof po)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===i.Er))})(0,e,t);if(e instanceof go)return(function(s,i,o){return o.filter((c=>{const u=ki(K(i.condition).evaluate(s,c));return u!==void 0&&pt(u,st)}))})(n,e,t);if(e instanceof mo)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof oc)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()))})(0,0,t);if(e instanceof ac)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&i.Tr.has(c.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof jn)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof Vt)return(function(s,i,o){const c=i.orderings.map((u=>({Os:K(u.expr),direction:u.direction})));return[...o].sort(((u,l)=>{for(const{Os:d,direction:p}of c){const g=ki(d.evaluate(s,u)),w=ki(d.evaluate(s,l)),P=We(g??Dt,w??Dt);if(P!==0)return p==="ascending"?P:-P}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function xa(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Vt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=ki(K(s.expr).evaluate({serializer:n.serializer},t)),o=ki(K(s.expr).evaluate({serializer:n.serializer},r)),c=We(i||Dt,o||Dt);if(c!==0)return s.direction==="ascending"?c:-c}return 0}}function ru(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof jn)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.changes=new un((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return wn(e).put(r)}removeEntry(e,t,r){return wn(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Va(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Ms(e,r))))}getEntry(e,t){let r=ge.newInvalidDocument(t);return wn(e).jn({index:ca,range:IDBKeyRange.only(Ii(t))},((s,i)=>{r=this.Ns(t,i)})).next((()=>r))}Ls(e,t){let r={size:0,document:ge.newInvalidDocument(t)};return wn(e).jn({index:ca,range:IDBKeyRange.only(Ii(t))},((s,i)=>{r={document:this.Ns(t,i),size:Sa(i)}})).next((()=>r))}getEntries(e,t){let r=Re();return this.Bs(e,t,((s,i)=>{const o=this.Ns(s,i);r=r.insert(s,o)})).next((()=>r))}getAllEntries(e){let t=Re();return wn(e).jn(((r,s)=>{const i=this.Ns(M.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);t=t.insert(i.key,i)})).next((()=>t))}Us(e,t){let r=Re(),s=new de(M.comparator);return this.Bs(e,t,((i,o)=>{const c=this.Ns(i,o);r=r.insert(i,c),s=s.insert(i,Sa(o))})).next((()=>({documents:r,ks:s})))}Bs(e,t,r){if(t.isEmpty())return R.resolve();let s=new ae(qf);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Ii(s.first()),Ii(s.last())),o=s.getIterator();let c=o.getNext();return wn(e).jn({index:ca,range:i},((u,l,d)=>{const p=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&qf(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?d.$n(Ii(c)):d.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=Ie(t)?J.fromString(yo(t)):t.path,c=[o.popLast().toArray(),o.lastSegment(),Va(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return wn(e).Kn(IDBKeyRange.bound(c,u,!0)).next((l=>{i==null||i.incrementDocumentReadCount(l.length);let d=Re();for(const p of l){const g=this.Ns(M.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(o_(t,g)||s.has(g.key))&&(d=d.insert(g.key,g))}return d}))}getAllFromCollectionGroup(e,t,r,s){let i=Re();const o=Bf(t,r),c=Bf(t,ht.max());return wn(e).jn({index:jg,range:IDBKeyRange.bound(o,c,!0)},((u,l,d)=>{const p=this.Ns(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(p.key,p),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new FA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Uf(e).get(Cu).next((t=>(L(!!t,20021),t)))}Ms(e,t){return Uf(e).put(Cu,t)}Ns(e,t){if(t){const r=vA(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return ge.newInvalidDocument(e)}}function c_(n){return new MA(n)}class FA extends a_{constructor(e,t){super(),this.qs=e,this.trackRemovals=t,this.$s=new un((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ae(((i,o)=>W(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.$s.get(i);if(t.push(this.qs.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=Rf(this.qs.serializer,o);s=s.add(i.path.popLast());const l=Sa(u);r+=l-c.size,t.push(this.qs.addEntry(e,i,u))}else if(r-=c.size,this.trackRemovals){const u=Rf(this.qs.serializer,o.convertToNoDocument(z.min()));t.push(this.qs.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.qs.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.qs.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.qs.Ls(e,t).next((r=>(this.$s.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.qs.Us(e,t).next((({documents:r,ks:s})=>(s.forEach(((i,o)=>{this.$s.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function Uf(n){return De(n,eo)}function wn(n){return De(n,Pa)}function Ii(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Bf(n,e){const t=e.documentKey.path.toArray();return[n,Va(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function qf(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=W(t[i],r[i]),s)return s;return s=W(t.length,r.length),s||(s=W(t[t.length-2],r[r.length-2]),s||W(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Si(r.mutation,s,et.empty(),ie.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Q()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Q()){const s=ft();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=lr();return i.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=ft();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Q())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=Re();const o=Ci(),c=(function(){return Ci()})();return t.forEach(((u,l)=>{const d=r.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof an)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Si(d.mutation,l,d.mutation.getFieldMask(),ie.now())):o.set(l.key,et.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((l,d)=>o.set(l,d))),t.forEach(((l,d)=>c.set(l,new UA(d,o.get(l)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ci();let s=new de(((o,c)=>o-c)),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||et.empty();d=c.applyToLocalView(l,d),r.set(u,d);const p=(s.get(c.batchId)||Q()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,p=Bm();d.forEach((g=>{if(!i.has(g)){const w=wm(t.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return R.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return Ie(t)?this.getDocumentsMatchingPipeline(e,t,r,s):IT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ul(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(ft());let c=ys,u=i;return o.next((l=>R.forEach(l,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?R.resolve():this.remoteDocumentCache.getEntry(e,d).next((g=>{u=u.insert(d,g)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,u,l,Q()))).next((d=>({batchId:c,changes:Um(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((r=>{let s=lr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=lr();return this.indexManager.getCollectionParents(e,i).next((c=>R.forEach(c,(u=>{const l=(function(p,g){return new cn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(c=>Za(t,c)))))}getDocumentsMatchingPipeline(e,t,r,s){if(Yt(t)==="collection_group"){const i=Ll(t);let o=lr();return this.indexManager.getCollectionParents(e,i).next((c=>R.forEach(c,(u=>{const l=(function(p,g){const w=p.stages.map((P=>P instanceof mo?new po(g.canonicalString(),{}):P));return new ze(p.serializer,w)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,l,r,s).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((o=>{switch(i=o,Yt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let c=Q();for(const u of Aa(t))c=c.add(M.fromPath(u));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new D("invalid-argument",`Invalid pipeline source to execute offline: ${Xt(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(c=>_c(t,c)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,o)=>{const c=o.getKey();t.get(c)===null&&(t=t.insert(c,ge.newInvalidDocument(c)))}));let s=lr();return t.forEach(((i,o)=>{const c=e.get(i);c!==void 0&&Si(c.mutation,o,et.empty(),ie.now()),r(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,r){switch(Yt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,J.fromString(yo(t)),r);case"collection_group":throw new D("invalid-argument",`Unexpected collection group pipeline: ${Xt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Aa(t).map((s=>M.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new D("invalid-argument",`Failed to get overlays for pipeline: ${Xt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return R.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ve(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(s){return{name:s.name,query:pc(s.bundledQuery),readTime:ve(s.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.overlays=new de(M.comparator),this.Qs=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ft();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=ft();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),R.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Yr(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qs.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Qs.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=ft(),i=t.length+1,o=new M(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=i.get(l.largestBatchId);d===null&&(d=ft(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=ft(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,d)=>c.set(l,d))),!(c.size()>=s)););return R.resolve(c)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qs.get(s.largestBatchId).delete(r.key);this.Qs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zl(t,r));let i=this.Qs.get(t);i===void 0&&(i=Q(),this.Qs.set(t,i)),this.Qs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Gs=new ae(Oe.zs),this.js=new ae(Oe.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Ys(new Oe(e,t))}Zs(e,t){e.forEach((r=>this.removeReference(r,t)))}Xs(e){const t=new M(new J([])),r=new Oe(t,e),s=new Oe(t,e+1),i=[];return this.js.forEachInRange([r,s],(o=>{this.Ys(o),i.push(o.key)})),i}e_(){this.Gs.forEach((e=>this.Ys(e)))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new M(new J([])),r=new Oe(t,e),s=new Oe(t,e+1);let i=Q();return this.js.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Oe(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return M.comparator(e.key,t.key)||W(e.n_,t.n_)}static Hs(e,t){return W(e.n_,t.n_)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new ae(Oe.zs)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fl(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.r_=this.r_.add(new Oe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Dn:this.Qr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),s=new Oe(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],(o=>{const c=this.i_(o.n_);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(W);return t.forEach((s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],(c=>{r=r.add(c.n_)}))})),R.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new M(i),0);let c=new ae(W);return this.r_.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(c=c.add(u.n_)),!0)}),o),R.resolve(this.__(c))}__(e){const t=[];return e.forEach((r=>{const s=this.i_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){L(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return R.forEach(t.mutations,(s=>{const i=new Oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.r_=r}))}jr(e){}containsKey(e,t){const r=new Oe(t,0),s=this.r_.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.a_=e,this.docs=(function(){return new de(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let r=Re();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))})),R.resolve(r)}getAllEntries(e){let t=Re();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),R.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ie(t)?(i=J.fromString(yo(t)),o=d=>_c(t,d)):(i=t.path,o=d=>Za(t,d));let c=Re();const u=new M(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!i.isPrefixOf(d.path))break;d.path.length>i.length+1||ol(xm(p),r)<=0||(s.has(p.key)||o(p))&&(c=c.insert(p.key,p.mutableCopy()))}return R.resolve(c)}getAllFromCollectionGroup(e,t,r,s){$(9500)}u_(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new GA(this)}getSize(e){return R.resolve(this.size)}}class GA extends a_{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.persistence=e,this.c_=new un((t=>lc(t)),Ml),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.l_=0,this.E_=new Wl,this.targetCount=0,this.h_=sn.ys()}forEachTarget(e,t){return this.c_.forEach(((r,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),R.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Ss(t),R.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.T_={},this.overlays={},this.P_=new tt(0),this.R_=!1,this.R_=!0,this.I_=new $A,this.referenceDelegate=e(this),this.A_=new KA(this),this.indexManager=new NA,this.remoteDocumentCache=(function(s){return new zA(s)})((r=>this.referenceDelegate.V_(r))),this.serializer=new Zg(t),this.d_=new BA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new jA(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new WA(this.P_.next());return this.referenceDelegate.f_(),r(s).next((i=>this.referenceDelegate.m_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}p_(e,t){return R.or(Object.values(this.T_).map((r=>()=>r.containsKey(e,t))))}}class WA extends hg{constructor(e){super(),this.currentSequenceNumber=e}}class yc{constructor(e){this.persistence=e,this.g_=new Wl,this.y_=null}static w_(e){return new yc(e)}get b_(){if(this.y_)return this.y_;throw $(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),R.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach((s=>this.b_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.b_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.b_,(r=>{const s=M.fromPath(r);return this.v_(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.y_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())}))}V_(e){return 0}v_(e,t){return R.or([()=>R.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class Na{constructor(e,t){this.persistence=e,this.S_=new un((r=>Ke(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=mg(this,t)}static w_(e,t){return new Na(e,t)}f_(){}m_(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}xs(e){let t=0;return this.ir(e,(r=>{t++})).next((()=>t))}ir(e,t){return R.forEach(this.S_,((r,s)=>this.Fs(e,r,s).next((i=>i?R.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,(o=>this.Fs(e,o,t).next((c=>{c||(r++,i.removeEntry(o,z.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),R.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=na(e.data.value)),t}Fs(e,t,r){return R.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.serializer=e}Mn(e,t,r,s){const i=new rc("createOrUpgrade",t);r<1&&s>=1&&((function(u){u.createObjectStore(Io)})(e),(function(u){u.createObjectStore(Zi,{keyPath:Xv}),u.createObjectStore(mt,{keyPath:vf,autoIncrement:!0}).createIndex(gr,Af,{unique:!0}),u.createObjectStore(vs)})(e),$f(e),(function(u){u.createObjectStore(ur)})(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&((function(u){u.deleteObjectStore(Rs),u.deleteObjectStore(As),u.deleteObjectStore(Ir)})(e),$f(e)),o=o.next((()=>(function(u){const l=u.store(Ir),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return l.put(ba,d)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(u,l){return l.store(mt).Kn().next((p=>{u.deleteObjectStore(mt),u.createObjectStore(mt,{keyPath:vf,autoIncrement:!0}).createIndex(gr,Af,{unique:!0});const g=l.store(mt),w=p.map((P=>g.put(P)));return R.waitFor(w)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(Ps,{keyPath:aA})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.D_(i)))),r<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(eo)})(e),this.x_(i))))),r<7&&s>=7&&(o=o.next((()=>this.C_(i)))),r<8&&s>=8&&(o=o.next((()=>this.F_(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.O_(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(hc,{keyPath:cA})})(e),(function(u){u.createObjectStore(dc,{keyPath:uA})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(fc,{keyPath:gA});l.createIndex(Nu,_A,{unique:!1}),l.createIndex(Wg,yA,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(Pa,{keyPath:eA});l.createIndex(ca,tA),l.createIndex(jg,nA)})(e))).next((()=>this.M_(e,i))).next((()=>e.deleteObjectStore(ur)))),r<14&&s>=14&&(o=o.next((()=>this.N_(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(ql,{keyPath:lA,autoIncrement:!0}).createIndex(xu,hA,{unique:!1}),u.createObjectStore(Oi,{keyPath:dA}).createIndex(Gg,fA,{unique:!1}),u.createObjectStore(Li,{keyPath:pA}).createIndex(Kg,mA,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(Oi).clear()})).next((()=>{t.objectStore(Li).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore($l,{keyPath:IA})})(e)}))),r<18&&s>=18&&Gp()&&(o=o.next((()=>{t.objectStore(Oi).clear()})).next((()=>{t.objectStore(Li).clear()}))),o}x_(e){let t=0;return e.store(ur).jn(((r,s)=>{t+=Sa(s)})).next((()=>{const r={byteSize:t};return e.store(eo).put(Cu,r)}))}D_(e){const t=e.store(Zi),r=e.store(mt);return t.Kn().next((s=>R.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Dn],[i.userId,i.lastAcknowledgedBatchId]);return r.Kn(gr,o).next((c=>R.forEach(c,(u=>{L(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=dr(this.serializer,u);return Xg(e,i.userId,l).next((()=>{}))}))))}))))}C_(e){const t=e.store(Rs),r=e.store(ur);return e.store(Ir).get(ba).next((s=>{const i=[];return r.jn(((o,c)=>{const u=new J(o),l=(function(p){return[0,Ke(p)]})(u);i.push(t.get(l).next((d=>d?R.resolve():(p=>t.put({targetId:0,path:Ke(p),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>R.waitFor(i)))}))}F_(e,t){e.createObjectStore(to,{keyPath:oA});const r=t.store(to),s=new Kl,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Ke(u)})}};return t.store(ur).jn({zn:!0},((o,c)=>{const u=new J(o);return i(u.popLast())})).next((()=>t.store(vs).jn({zn:!0},(([o,c,u],l)=>{const d=Ct(c);return i(d.popLast())}))))}O_(e){const t=e.store(As);return t.jn(((r,s)=>{const i=Pi(this.serializer,s),o=e_(this.serializer,i);return t.put(o)}))}M_(e,t){const r=t.store(ur),s=[];return r.jn(((i,o)=>{const c=t.store(Pa),u=(function(p){return p.document?new M(J.fromString(p.document.name).popFirst(5)):p.noDocument?M.fromSegments(p.noDocument.path):p.unknownDocument?M.fromSegments(p.unknownDocument.path):$(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(l))})).next((()=>R.waitFor(s)))}N_(e,t){const r=t.store(mt),s=c_(this.serializer),i=new Hl(yc.w_,this.serializer.qr);return r.Kn().next((o=>{const c=new Map;return o.forEach((u=>{let l=c.get(u.userId)??Q();dr(this.serializer,u).keys().forEach((d=>l=l.add(d))),c.set(u.userId,l)})),R.forEach(c,((u,l)=>{const d=new Le(l),p=gc.Kr(this.serializer,d),g=i.getIndexManager(d),w=mc.Kr(d,this.serializer,g,i.referenceDelegate);return new u_(s,w,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Du(t,tt.yn),u).next()}))}))}}function $f(n){n.createObjectStore(Rs,{keyPath:sA}).createIndex(Bl,iA,{unique:!0}),n.createObjectStore(As,{keyPath:"targetId"}).createIndex(zg,rA,{unique:!0}),n.createObjectStore(Ir)}const Tn="IndexedDbPersistence",su=18e5,iu=5e3,ou="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",l_="main";class Ql{constructor(e,t,r,s,i,o,c,u,l,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.xt=i,this.window=o,this.document=c,this.L_=l,this.B_=d,this.U_=p,this.P_=null,this.R_=!1,this.isPrimary=!1,this.networkEnabled=!0,this.k_=null,this.inForeground=!1,this.q_=null,this.K_=null,this.W_=Number.NEGATIVE_INFINITY,this.Q_=g=>Promise.resolve(),!Ql.Je())throw new D(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OA(this,s),this.G_=t+l_,this.serializer=new Zg(u),this.z_=new Ot(this.G_,this.U_,new HA(this.serializer)),this.I_=new PA,this.A_=new kA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=c_(this.serializer),this.d_=new RA,this.window&&this.window.localStorage?this.j_=this.window.localStorage:(this.j_=null,d===!1&&Te(Tn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.H_().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ou);return this.J_(),this.Y_(),this.Z_(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.A_.getHighestSequenceNumber(e)))})).then((e=>{this.P_=new tt(e,this.L_)})).then((()=>{this.R_=!0})).catch((e=>(this.z_&&this.z_.close(),Promise.reject(e))))}X_(e){return this.Q_=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.z_.Ln((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xt.enqueueAndForget((async()=>{this.started&&await this.H_()})))}H_(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Yo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.eo(e).next((t=>{t||(this.isPrimary=!1,this.xt.enqueueRetryable((()=>this.Q_(!1))))}))})).next((()=>this.no(e))).next((t=>this.isPrimary&&!t?this.ro(e).next((()=>!1)):!!t&&this.io(e).next((()=>!0)))))).catch((e=>{if(Jn(e))return O(Tn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O(Tn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.xt.enqueueRetryable((()=>this.Q_(e))),this.isPrimary=e}))}eo(e){return wi(e).get(Wr).next((t=>R.resolve(this.so(t))))}_o(e){return Yo(e).delete(this.clientId)}async oo(){if(this.isPrimary&&!this.ao(this.W_,su)){this.W_=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=De(t,Ps);return r.Kn().next((s=>{const i=this.uo(s,su),o=s.filter((c=>i.indexOf(c)===-1));return R.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.j_)for(const t of e)this.j_.removeItem(this.co(t.clientId))}}Z_(){this.K_=this.xt.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.H_().then((()=>this.oo())).then((()=>this.Z_()))))}so(e){return!!e&&e.ownerId===this.clientId}no(e){return this.B_?R.resolve(!0):wi(e).get(Wr).next((t=>{if(t!==null&&this.ao(t.leaseTimestampMs,iu)&&!this.lo(t.ownerId)){if(this.so(t)&&this.networkEnabled)return!0;if(!this.so(t)){if(!t.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ou);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yo(e).Kn().next((r=>this.uo(r,iu).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&O(Tn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.R_=!1,this.Eo(),this.K_&&(this.K_.cancel(),this.K_=null),this.ho(),this.To(),await this.z_.runTransaction("shutdown","readwrite",[Io,Ps],(e=>{const t=new Du(e,tt.yn);return this.ro(t).next((()=>this._o(t)))})),this.z_.close(),this.Po()}uo(e,t){return e.filter((r=>this.ao(r.updateTimeMs,t)&&!this.lo(r.clientId)))}Ro(){return this.runTransaction("getActiveClients","readonly",(e=>Yo(e).Kn().next((t=>this.uo(t,su).map((r=>r.clientId))))))}get started(){return this.R_}getGlobalsCache(){return this.I_}getMutationQueue(e,t){return mc.Kr(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new DA(e,this.serializer.qr.databaseId)}getDocumentOverlayCache(e){return gc.Kr(this.serializer,e)}getBundleCache(){return this.d_}runTransaction(e,t,r){O(Tn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?EA:u===17?Yg:u===16?TA:u===15?jl:u===14?Jg:u===13?Qg:u===12?wA:u===11?Hg:void $(60245)})(this.U_);let o;return this.z_.runTransaction(e,s,i,(c=>(o=new Du(c,this.P_?this.P_.next():tt.yn),t==="readwrite-primary"?this.eo(o).next((u=>!!u||this.no(o))).next((u=>{if(!u)throw Te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xt.enqueueRetryable((()=>this.Q_(!1))),new D(S.FAILED_PRECONDITION,lg);return r(o)})).next((u=>this.io(o).next((()=>u)))):this.Io(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Io(e){return wi(e).get(Wr).next((t=>{if(t!==null&&this.ao(t.leaseTimestampMs,iu)&&!this.lo(t.ownerId)&&!this.so(t)&&!(this.B_||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(S.FAILED_PRECONDITION,ou)}))}io(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wi(e).put(Wr,t)}static Je(){return Ot.Je()}ro(e){const t=wi(e);return t.get(Wr).next((r=>this.so(r)?(O(Tn,"Releasing primary lease."),t.delete(Wr)):R.resolve()))}ao(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Te(`Detected an update time that is in the future: ${e} > ${r}`),!1))}J_(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.q_=()=>{this.xt.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.H_())))},this.document.addEventListener("visibilitychange",this.q_),this.inForeground=this.document.visibilityState==="visible")}ho(){this.q_&&(this.document.removeEventListener("visibilitychange",this.q_),this.q_=null)}Y_(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.k_=()=>{this.Eo();const t=/(?:Version|Mobile)\/1[456]/;zp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xt.enterRestrictedMode(!0),this.xt.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.k_))}To(){this.k_&&(this.window.removeEventListener("pagehide",this.k_),this.k_=null)}lo(e){var t;try{const r=((t=this.j_)==null?void 0:t.getItem(this.co(e)))!==null;return O(Tn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Te(Tn,"Failed to get zombied client id.",r),!1}}Eo(){if(this.j_)try{this.j_.setItem(this.co(this.clientId),String(Date.now()))}catch(e){Te("Failed to set zombie client id.",e)}}Po(){if(this.j_)try{this.j_.removeItem(this.co(this.clientId))}catch{}}co(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wi(n){return De(n,Io)}function Yo(n){return De(n,Ps)}function Jl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n,e){return M.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=(function(){return zp()?8:dg(Ce())>0?6:4})()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.So(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new JA;return this.Do(e,t,o).next((c=>{if(i.result=c,this.po)return this.xo(e,t,o,c.size)}))})).next((()=>i.result))}xo(e,t,r,s){return Ie(t)?R.resolve():r.documentReadCount<this.yo?(Zr()<=ne.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Vi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),R.resolve()):(Zr()<=ne.DEBUG&&O("QueryEngine","Query:",Vi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(Zr()<=ne.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Vi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):R.resolve())}vo(e,t){if(Ie(t))return R.resolve(null);let r=t;if(rf(r))return R.resolve(null);let s=Ge(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=Ta(r,null,"F"),s=Ge(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const c=Q(...o);return this.bo.getDocuments(e,c).next((u=>this.indexManager.getMinOffset(e,s).next((l=>{const d=this.Co(r,u);return this.Fo(r,d,c,l.readTime)?this.vo(e,Ta(r,null,"F")):this.Oo(e,d,r,l)}))))})))))}So(e,t,r,s){return(Ie(t)?(function(o){for(const c of o.stages){if(c instanceof jn||c instanceof wf)return!1;if(c instanceof go){if(c.condition instanceof Vg&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof Br&&c.condition._expr.params[0].fieldName===bt)continue;return!1}}return!0})(t):rf(t))||s.isEqual(z.min())?R.resolve(null):this.bo.getDocuments(e,r).next((i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?R.resolve(null):(Zr()<=ne.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tf(t)),this.Oo(e,o,t,Cm(s,ys)).next((c=>c)))}))}Co(e,t){let r,s;return Ie(e)?(r=new ae(QA),s=i=>_c(e,i)):(r=new ae(ec(e)),s=i=>Za(e,i)),t.forEach(((i,o)=>{s(o)&&(r=r.add(o))})),r}Fo(e,t,r,s){if(Ie(e))return(function(c){return c.stages.some((u=>u instanceof jn||u instanceof wf))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return Zr()<=ne.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Tf(t)),this.bo.getDocumentsMatchingQuery(e,t,ht.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="LocalStore",YA=3e8;class XA{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new de(W),this.Lo=new un((i=>lc(i)),Ml),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new u_(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.No)))}}function d_(n,e,t,r){return new XA(n,e,t,r)}async function f_(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let u=Q();for(const l of s){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of i){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((l=>({qo:l,removedBatchIds:o,addedBatchIds:c})))}))}))}function ZA(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return(function(c,u,l,d){const p=l.batch,g=p.keys();let w=R.resolve();return g.forEach((P=>{w=w.next((()=>d.getEntry(u,P))).next((k=>{const N=l.docVersions.get(P);L(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,l),k.isValidDocument()&&(k.setReadTime(l.commitVersion),d.addEntry(k)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=Q();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function p_(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.A_.getLastRemoteSnapshotVersion(t)))}function eR(n,e){const t=U(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const c=[];e.targetChanges.forEach(((d,p)=>{const g=s.get(p);if(!g)return;c.push(t.A_.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.A_.addMatchingKeys(i,d.addedDocuments,p))));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(pe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),(function(k,N,q){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=YA?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(g,w,d)&&c.push(t.A_.updateTargetData(i,w))}));let u=Re(),l=Q();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(m_(i,o,e.documentUpdates).next((d=>{u=d.$o,l=d.Ko}))),!r.isEqual(z.min())){const d=t.A_.getLastRemoteSnapshotVersion(i).next((p=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return R.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,l))).next((()=>u))})).then((i=>(t.No=s,i)))}function m_(n,e,t){let r=Q(),s=Q();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Re();return t.forEach(((c,u)=>{const l=i.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):O(Xl,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)})),{$o:o,Ko:s}}))}function tR(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Dn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bs(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.A_.getTargetData(r,e).next((i=>i?(s=i,R.resolve(s)):t.A_.allocateTargetId(r).next((o=>(s=new xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r}))}async function Ss(n,e,t){const r=U(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Jn(o))throw o;O(Xl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Da(n,e,t){const r=U(n);let s=z.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,d){const p=U(u),g=p.Lo.get(d);return g!==void 0?R.resolve(p.No.get(g)):p.A_.getTargetData(l,d)})(r,o,Ie(e)?e:Ge(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,c.targetId).next((u=>{i=u}))})).next((()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:Q()))).next((c=>(__(r,c),{documents:c,Wo:i})))))}function g_(n,e){const t=U(n),r=U(t.A_),s=t.No.get(e);return s?Promise.resolve(s.target??null):t.persistence.runTransaction("Get target data","readonly",(i=>r.ge(i,e).next((o=>(o==null?void 0:o.target)??null))))}function Fu(n,e){const t=U(n),r=t.Bo.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Uo.getAllFromCollectionGroup(s,e,Cm(r,ys),Number.MAX_SAFE_INTEGER))).then((s=>(__(t,s),s)))}function __(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||z.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)}))}async function nR(n,e,t,r){const s=U(n);let i=Q(),o=Re();for(const l of t){const d=e.Qo(l.metadata.name);l.document&&(i=i.add(d));const p=e.Go(l);p.setReadTime(e.zo(l.metadata.readTime)),o=o.insert(d,p)}const c=s.Uo.newChangeBuffer({trackRemovals:!0}),u=await bs(s,(function(d){return Ge(Bs(J.fromString(`__bundle__/docs/${d}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(l=>m_(l,c,o).next((d=>(c.apply(l),d))).next((d=>s.A_.removeMatchingKeysForTargetId(l,u.targetId).next((()=>s.A_.addMatchingKeys(l,i,u.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(l,d.$o,d.Ko))).next((()=>d.$o))))))}async function rR(n,e,t=Q()){const r=await bs(n,Ge(pc(e.bundledQuery))),s=U(n);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=ve(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.d_.saveNamedQuery(i,e);const c=r.withResumeToken(pe.EMPTY_BYTE_STRING,o);return s.No=s.No.insert(c.targetId,c),s.A_.updateTargetData(i,c).next((()=>s.A_.removeMatchingKeysForTargetId(i,r.targetId))).next((()=>s.A_.addMatchingKeys(i,t,r.targetId))).next((()=>s.d_.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.jo=e,this.byteLength=t}Ho(){return"metadata"in this.jo}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve()))))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Te(t),this.Zo=!1):O("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="RemoteStore";class iR{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new sn(1e3),this.ua=new sn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke((o=>{r.enqueueAndForget((async()=>{Yn(this)&&(O(Bt,"Restarting streams for network reachability change."),await(async function(u){const l=U(u);l.ca.add(4),await zs(l),l.ha.set("Unknown"),l.ca.delete(4),await wo(l)})(this))}))})),this.ha=new sR(r,s)}}async function wo(n){if(Yn(n))for(const e of n.la)await e(!0)}async function zs(n){for(const e of n.la)await e(!1)}function Uu(n,e){return n._a.get(e)||void 0}function Ic(n,e){const t=U(n),r=Uu(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=(function(c,u){const l=Uu(c,u);l!==void 0&&c.oa.delete(l);const d=(function(g,w){return w%2!=0?g.ua.next():g.aa.next()})(c,u);return c._a.set(u,d),c.oa.set(d,u),d})(t,e.targetId);O(Bt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new xt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),th(t)?eh(t):Ks(t).Jt()&&Zl(t,i)}function Vs(n,e){const t=U(n),r=Ks(t),s=Uu(t,e);O(Bt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&I_(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Yn(t)&&t.ha.set("Unknown"))}function Zl(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void O(Bt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ks(n).Tn(e)}function I_(n,e){n.Ta.H(e),Ks(n).Pn(e)}function eh(n){n.Ta=new xT({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):Q()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),Ks(n).start(),n.ha.Xo()}function th(n){return Yn(n)&&!Ks(n).Ht()&&n.sa.size>0}function Yn(n){return U(n).ca.size===0}function w_(n){n.Ta=void 0}async function oR(n){n.ha.set("Online")}async function aR(n){n.sa.forEach(((e,t)=>{Zl(n,e)}))}async function cR(n,e){w_(n),th(n)?(n.ha.na(e),eh(n)):n.ha.set("Unknown")}async function uR(n,e,t){if(n.ha.set("Online"),e instanceof jm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.sa.has(c)){const u=s.oa.get(c);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(c)),s.sa.delete(c)}s.Ta.removeTarget(c)}})(n,e)}catch(r){O(Bt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ka(n,r)}else if(e instanceof sa?n.Ta.se(e):e instanceof $m?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(z.min()))try{const r=await p_(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.Ta.de(o);c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.sa.get(d);p&&i.sa.set(d,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const p=i.sa.get(l);if(!p)return;i.sa.set(l,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),I_(i,l);const g=new xt(p.target,l,d,p.sequenceNumber);Zl(i,g)}));const u=(function(d,p){const g=new Map;p.targetChanges.forEach(((P,k)=>{const N=d.oa.get(k);N!==void 0&&g.set(N,P)}));let w=new de(W);return p.targetMismatches.forEach(((P,k)=>{const N=d.oa.get(P);N!==void 0&&(w=w.insert(N,k))})),new qs(p.snapshotVersion,g,w,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){O(Bt,"Failed to raise snapshot:",r),await ka(n,r)}}async function ka(n,e,t){if(!Jn(e))throw e;n.ca.add(1),await zs(n),n.ha.set("Offline"),t||(t=()=>p_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(Bt,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await wo(n)}))}function T_(n,e){return e().catch((t=>ka(n,t,e)))}async function Gs(n){const e=U(n),t=Gn(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:Dn;for(;lR(e);)try{const s=await tR(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,hR(e,s)}catch(s){await ka(e,s)}E_(e)&&v_(e)}function lR(n){return Yn(n)&&n.ia.length<10}function hR(n,e){n.ia.push(e);const t=Gn(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function E_(n){return Yn(n)&&!Gn(n).Ht()&&n.ia.length>0}function v_(n){Gn(n).start()}async function dR(n){Gn(n).dn()}async function fR(n){const e=Gn(n);for(const t of n.ia)e.In(t.mutations)}async function pR(n,e,t){const r=n.ia.shift(),s=Ul.from(r,e,t);await T_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Gs(n)}async function mR(n,e){e&&Gn(n).Rn&&await(async function(r,s){if((function(o){return Lm(o)&&o!==S.ABORTED})(s.code)){const i=r.ia.shift();Gn(r).Zt(),await T_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Gs(r)}})(n,e),E_(n)&&v_(n)}async function zf(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),O(Bt,"RemoteStore received new credentials");const r=Yn(t);t.ca.add(3),await zs(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await wo(t)}async function Bu(n,e){const t=U(n);e?(t.ca.delete(2),await wo(t)):e||(t.ca.add(2),await zs(t),t.ha.set("Unknown"))}function Ks(n){return n.Pa||(n.Pa=(function(t,r,s){const i=U(t);return i.mn(),new tE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ut:oR.bind(null,n),lt:aR.bind(null,n),ht:cR.bind(null,n),hn:uR.bind(null,n)}),n.la.push((async e=>{e?(n.Pa.Zt(),th(n)?eh(n):n.ha.set("Unknown")):(await n.Pa.stop(),w_(n))}))),n.Pa}function Gn(n){return n.Ra||(n.Ra=(function(t,r,s){const i=U(t);return i.mn(),new nE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:dR.bind(null,n),ht:mR.bind(null,n),An:fR.bind(null,n),Vn:pR.bind(null,n)}),n.la.push((async e=>{e?(n.Ra.Zt(),await Gs(n)):(await n.Ra.stop(),n.ia.length>0&&(O(Bt,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Te("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new nh(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ws(n,e){if(Te("AsyncQueue",`${e}: ${n}`),Jn(n))return new D(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t){this.Va=e,this.serializer=t,this.metadata=new Fe,this.buffer=new Uint8Array,this.da=(function(){return new TextDecoder("utf-8")})(),this.fa().then((r=>{r&&r.Ho()?this.metadata.resolve(r.jo.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.jo)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Va.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.fa()}async fa(){const e=await this.pa();if(e===null)return null;const t=this.da.decode(e),r=Number(t);isNaN(r)&&this.ga(`length string (${t}) is not valid number`);const s=await this.ya(r);return new y_(JSON.parse(s),e.length+r)}wa(){return this.buffer.findIndex((e=>e===123))}async pa(){for(;this.wa()<0&&!await this.ba(););if(this.buffer.length===0)return null;const e=this.wa();e<0&&this.ga("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ya(e){for(;this.buffer.length<e;)await this.ba()&&this.ga("Reached the end of bundle when more is expected.");const t=this.da.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ga(e){throw this.Va.cancel(),new Error(`Invalid bundle format: ${e}`)}async ba(){const e=await this.Va.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.ma();if(!r||!r.Ho())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.jo)}`);this.metadata=r;do r=this.ma(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}va(){return this.elements}ma(){if(this.cursor===this.bundleData.length)return null;const e=this.pa(),t=this.ya(e);return new y_(JSON.parse(t),e)}ya(e){if(this.cursor+e>this.bundleData.length)throw new D(S.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}pa(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}const Mi="IndexBackfiller";class yR{constructor(e,t){this.asyncQueue=e,this.Sa=t,this.task=null}start(){this.Da(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Da(e){O(Mi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.Sa.xa();O(Mi,`Documents written: ${t}`)}catch(t){Jn(t)?O(Mi,"Ignoring IndexedDB error during index backfill: ",t):await Qn(t)}await this.Da(6e4)}))}}class IR{constructor(e,t){this.localStore=e,this.persistence=t}async xa(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.Ca(t,e)))}Ca(e,t){const r=new Set;let s=t,i=!0;return R.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return O(Mi,`Processing collection: ${o}`),this.Fa(e,o,s).next((c=>{s-=c,r.add(o)}));i=!1})))).next((()=>t-s))}Fa(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.Oa(s,i))).next((c=>(O(Mi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}Oa(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=xm(i);ol(o,r)>0&&(r=o)})),new ht(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firestore_clients";function Gf(n,e){return`${A_}_${n}_${e}`}const R_="firestore_mutations";function Kf(n,e,t){let r=`${R_}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const P_="firestore_targets";function au(n,e){return`${P_}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="SharedClientState";class Oa{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ma(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new D(s.error.code,s.error.message))),o?new Oa(e,t,s.state,i):(Te(Pt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Na(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ma(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new D(r.error.code,r.error.message))),i?new Fi(e,r.state,s):(Te(Pt,`Failed to parse target state for ID '${e}': ${t}`),null)}Na(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class La{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ma(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=ll();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=hm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new La(e,i):(Te(Pt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class rh{constructor(e,t){this.clientId=e,this.onlineState=t}static Ma(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new rh(t.clientId,t.onlineState):(Te(Pt,`Failed to parse online state: ${e}`),null)}}class qu{constructor(){this.activeTargetIds=ll()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cu{constructor(e,t,r,s,i){this.window=e,this.xt=t,this.persistenceKey=r,this.Ua=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ka=this.qa.bind(this),this.$a=new de(W),this.started=!1,this.Ka=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Wa=Gf(this.persistenceKey,this.Ua),this.Qa=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.$a=this.$a.insert(this.Ua,new qu),this.Ga=new RegExp(`^${A_}_${o}_([^_]*)$`),this.za=new RegExp(`^${R_}_${o}_(\\d+)(?:_(.*))?$`),this.ja=new RegExp(`^${P_}_${o}_(\\d+)$`),this.Ha=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.Ja=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.ka)}static Je(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ro();for(const r of e){if(r===this.Ua)continue;const s=this.getItem(Gf(this.persistenceKey,r));if(s){const i=La.Ma(r,s);i&&(this.$a=this.$a.insert(i.clientId,i))}}this.Ya();const t=this.storage.getItem(this.Ha);if(t){const r=this.Za(t);r&&this.Xa(r)}for(const r of this.Ka)this.qa(r);this.Ka=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qa,JSON.stringify(e))}getAllActiveQueryTargets(){return this.eu(this.$a)}isActiveQueryTarget(e){let t=!1;return this.$a.forEach(((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.tu(e,"pending")}updateMutationState(e,t,r){this.tu(e,t,r),this.nu(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(au(this.persistenceKey,e));if(s){const i=Fi.Ma(e,s);i&&(r=i.state)}}return t&&this.ru.La(e),this.Ya(),r}removeLocalQueryTarget(e){this.ru.Ba(e),this.Ya()}isLocalQueryTarget(e){return this.ru.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(au(this.persistenceKey,e))}updateQueryState(e,t,r){this.iu(e,t,r)}handleUserChange(e,t,r){t.forEach((s=>{this.nu(s)})),this.currentUser=e,r.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.su(e)}notifyBundleLoaded(e){this._u(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ka),this.removeItem(this.Wa),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O(Pt,"READ",e,t),t}setItem(e,t){O(Pt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){O(Pt,"REMOVE",e),this.storage.removeItem(e)}qa(e){const t=e;if(t.storageArea===this.storage){if(O(Pt,"EVENT",t.key,t.newValue),t.key===this.Wa)return void Te("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.xt.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.Ga.test(t.key)){if(t.newValue==null){const r=this.ou(t.key);return this.au(r,null)}{const r=this.uu(t.key,t.newValue);if(r)return this.au(r.clientId,r)}}else if(this.za.test(t.key)){if(t.newValue!==null){const r=this.cu(t.key,t.newValue);if(r)return this.lu(r)}}else if(this.ja.test(t.key)){if(t.newValue!==null){const r=this.Eu(t.key,t.newValue);if(r)return this.hu(r)}}else if(t.key===this.Ha){if(t.newValue!==null){const r=this.Za(t.newValue);if(r)return this.Xa(r)}}else if(t.key===this.Qa){const r=(function(i){let o=tt.yn;if(i!=null)try{const c=JSON.parse(i);L(typeof c=="number",30636,{Tu:i}),o=c}catch(c){Te(Pt,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);r!==tt.yn&&this.sequenceNumberHandler(r)}else if(t.key===this.Ja){const r=this.Pu(t.newValue);await Promise.all(r.map((s=>this.syncEngine.Ru(s))))}}}else this.Ka.push(t)}))}}get ru(){return this.$a.get(this.Ua)}Ya(){this.setItem(this.Wa,this.ru.Na())}tu(e,t,r){const s=new Oa(this.currentUser,e,t,r),i=Kf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Na())}nu(e){const t=Kf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}su(e){const t={clientId:this.Ua,onlineState:e};this.storage.setItem(this.Ha,JSON.stringify(t))}iu(e,t,r){const s=au(this.persistenceKey,e),i=new Fi(e,t,r);this.setItem(s,i.Na())}_u(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ja,t)}ou(e){const t=this.Ga.exec(e);return t?t[1]:null}uu(e,t){const r=this.ou(e);return La.Ma(r,t)}cu(e,t){const r=this.za.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Oa.Ma(new Le(i),s,t)}Eu(e,t){const r=this.ja.exec(e),s=Number(r[1]);return Fi.Ma(s,t)}Za(e){return rh.Ma(e)}Pu(e){return JSON.parse(e)}async lu(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Iu(e.batchId,e.state,e.error);O(Pt,`Ignoring mutation for non-active user ${e.user.uid}`)}hu(e){return this.syncEngine.Au(e.targetId,e.state,e.error)}au(e,t){const r=t?this.$a.insert(e,t):this.$a.remove(e),s=this.eu(this.$a),i=this.eu(r),o=[],c=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||c.push(u)})),this.syncEngine.Vu(o,c).then((()=>{this.$a=r}))}Xa(e){this.$a.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}eu(e){let t=ll();return e.forEach(((r,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class b_{constructor(){this.du=new qu,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new qu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof window<"u"?window:null}function la(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static emptySet(e){return new On(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=lr(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new On;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.mu=new de(M.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):$(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Vr{constructor(e,t,r,s,i,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Vr(e,t,On.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some((e=>e.vu()))}}class TR{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,r){const s=U(t),i=s.queries;s.queries=Hf(),i.forEach(((o,c)=>{for(const u of c.wu)u.onError(r)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Hf(){return new un((n=>qg(n)),uc)}async function sh(n,e){const t=U(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(r=2):(i=new wR,r=e.vu()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Ws(o,`Initialization of query '${Ie(e.query)?Xt(e.query):Vi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&oh(t)}async function ih(n,e){const t=U(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ER(n,e){const t=U(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.wu)c.xu(s)&&(r=!0);o.yu=s}}r&&oh(t)}function vR(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function oh(n){n.Su.forEach((e=>{e.next()}))}var $u;(function(n){n.Default="default",n.Cache="cache"})($u||($u={}));class ah{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==$u.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.serializer=e}Qo(e){return kt(this.serializer,e)}Go(e){return e.metadata.exists?tc(this.serializer,e.document,!1):ge.newNoDocument(this.Qo(e.metadata.name),this.zo(e.metadata.readTime))}zo(e){return ve(e)}}class ch{constructor(e,t){this.Bu=e,this.serializer=t,this.Uu=[],this.ku=[],this.collectionGroups=new Set,this.progress=V_(e)}get queries(){return this.Uu}get documents(){return this.ku}qu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.jo.namedQuery)this.Uu.push(e.jo.namedQuery);else if(e.jo.documentMetadata){this.ku.push({metadata:e.jo.documentMetadata}),e.jo.documentMetadata.exists||++t;const r=J.fromString(e.jo.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.jo.document&&(this.ku[this.ku.length-1].document=e.jo.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}$u(e){const t=new Map,r=new Qf(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Qo(s.metadata.name);for(const o of s.metadata.queries){const c=(t.get(o)||Q()).add(i);t.set(o,c)}}return t}async Ku(e){const t=await nR(e,new Qf(this.serializer),this.ku,this.Bu.id),r=this.$u(this.documents);for(const s of this.Uu)await rR(e,s,r.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Qu:t}}}function V_(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.key=e}}class x_{constructor(e){this.key=e}}class N_{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=Q(),this.mutatedKeys=Q(),this.Hu=Ie(e)?xa(e):ec(e),this.Ju=new On(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new Wf,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const[u,l]=this.ec(this.query,s);e.inorderTraversal(((p,g)=>{const w=s.get(p),P=o_(this.query,g)?g:null,k=!!w&&this.mutatedKeys.has(w.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let q=!1;w&&P?w.data.isEqual(P.data)?k!==N&&(r.track({type:3,doc:P}),q=!0):this.tc(w,P)||(r.track({type:2,doc:P}),q=!0,(u&&this.Hu(P,u)>0||l&&this.Hu(P,l)<0)&&(c=!0)):!w&&P?(r.track({type:0,doc:P}),q=!0):w&&!P&&(r.track({type:1,doc:w}),q=!0,(u||l)&&(c=!0)),q&&(P?(o=o.add(P),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}));const d=this.nc(this.query);if(d)if(Ie(this.query)){const p=[];o.forEach((P=>p.push(P)));const g=i_(this.query,p);let w=new On(xa(this.query));for(const P of g)w=w.add(P);o.forEach((P=>{w.has(P.key)||(i=i.delete(P.key),r.track({type:1,doc:P}))})),o=w}else{const p=this.rc(this.query);for(;o.size>d;){const g=p==="F"?o.last():o.first();o=o.delete(g.key),i=i.delete(g.key),r.track({type:1,doc:g})}}return{Ju:o,Xu:r,Fo:c,mutatedKeys:i}}nc(e){var t;return Ie(e)?(t=ru(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Ie(e)){const t=ru(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var r;if(Ie(e)){const s=(r=ru(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort(((d,p)=>(function(w,P){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{ye:N})}};return k(w)-k(P)})(d.type,p.type)||this.Hu(d.doc,p.doc))),this.sc(r),s=s??!1;const c=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,l=u!==this.zu;return this.zu=u,o.length!==0||l?{snapshot:new Vr(this.query,e.Ju,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:c}:{oc:c}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Wf,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach((t=>this.Gu=this.Gu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Gu=this.Gu.delete(t))),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=Q(),this.Ju.forEach((r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))}));const t=[];return e.forEach((r=>{this.ju.has(r)||t.push(new x_(r))})),this.ju.forEach((r=>{e.has(r)||t.push(new C_(r))})),t}uc(e){this.Gu=e.Wo,this.ju=Q();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return Vr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const Xn="SyncEngine";class AR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class RR{constructor(e){this.key=e,this.lc=!1}}class PR{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new un((c=>qg(c)),uc),this.Tc=new Map,this.Pc=new Set,this.Rc=new de(M.comparator),this.Ic=new Map,this.Ac=new Wl,this.Vc={},this.dc=new Map,this.fc=sn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function bR(n,e,t=!0){const r=Tc(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await D_(r,e,t,!0),s}async function SR(n,e){const t=Tc(n);await D_(t,e,!0,!1)}async function D_(n,e,t,r){const s=await bs(n.localStore,Ie(e)?e:Ge(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await uh(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ic(n.remoteStore,s),c}async function uh(n,e,t,r,s){n.gc=(p,g,w)=>(async function(k,N,q,G){let j=N.view.Zu(q);j.Fo&&(j=await Da(k.localStore,N.query,!1).then((({documents:T})=>N.view.Zu(T,j))));const Y=G&&G.targetChanges.get(N.targetId),Z=G&&G.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(j,k.isPrimaryClient,Y,Z);return ju(k,N.targetId,te.oc),te.snapshot})(n,p,g,w);const i=await Da(n.localStore,e,!0),o=new N_(e,i.Wo),c=o.Zu(i.documents),u=lo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(c,n.isPrimaryClient,u);ju(n,t,l.oc);const d=new AR(e,t,o);return n.hc.set(e,d),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),l.snapshot}async function VR(n,e,t){const r=U(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter((o=>!uc(o,e)))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Vs(r.remoteStore,s.targetId),Cs(r,s.targetId)})).catch(Qn)):(Cs(r,s.targetId),await Ss(r.localStore,s.targetId,!0))}async function CR(n,e){const t=U(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vs(t.remoteStore,r.targetId))}async function xR(n,e,t){const r=fh(n);try{const s=await(function(o,c){const u=U(o),l=ie.now(),d=c.reduce(((w,P)=>w.add(P.key)),Q());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let P=Re(),k=Q();return u.Uo.getEntries(w,d).next((N=>{P=N,P.forEach(((q,G)=>{G.isValidDocument()||(k=k.add(q))}))})).next((()=>u.localDocuments.getOverlayedDocuments(w,P))).next((N=>{p=N;const q=[];for(const G of c){const j=cT(G,p.get(G.key).overlayedDocument);j!=null&&q.push(new an(G.key,j,mm(j.value.mapValue),_e.exists(!0)))}return u.mutationQueue.addMutationBatch(w,l,q,c)})).next((N=>{g=N;const q=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(w,N.batchId,q)}))})).then((()=>({batchId:g.batchId,changes:Um(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,u){let l=o.Vc[o.currentUser.toKey()];l||(l=new de(W)),l=l.insert(c,u),o.Vc[o.currentUser.toKey()]=l})(r,s.batchId,t),await ln(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=Ws(s,"Failed to persist write");t.reject(i)}}async function k_(n,e){const t=U(n);try{const r=await eR(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Ic.get(i);o&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?L(o.lc,14607):s.removedDocuments.size>0&&(L(o.lc,42227),o.lc=!1))})),await ln(t,r,e)}catch(r){await Qn(r)}}function Jf(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach(((i,o)=>{const c=o.view.Du(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const u=U(o);u.onlineState=c;let l=!1;u.queries.forEach(((d,p)=>{for(const g of p.wu)g.Du(c)&&(l=!0)})),l&&oh(u)})(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NR(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new de(M.comparator);o=o.insert(i,ge.newNoDocument(i,z.min()));const c=Q().add(i),u=new qs(z.min(),new Map,new de(W),o,Re(),c);await k_(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),dh(r)}else await Ss(r.localStore,e,!1).then((()=>Cs(r,e,t))).catch(Qn)}async function DR(n,e){const t=U(n),r=e.batch.batchId;try{const s=await ZA(t.localStore,e);hh(t,r,null),lh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ln(t,s)}catch(s){await Qn(s)}}async function kR(n,e,t){const r=U(n);try{const s=await(function(o,c){const u=U(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next((p=>(L(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(l,p)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>u.localDocuments.getDocuments(l,d)))}))})(r.localStore,e);hh(r,e,t),lh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ln(r,s)}catch(s){await Qn(s)}}async function OR(n,e){const t=U(n);Yn(t.remoteStore)||O(Xn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const c=U(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(r===Dn)return void e.resolve();const s=t.dc.get(r)||[];s.push(e),t.dc.set(r,s)}catch(r){const s=Ws(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function lh(n,e){(n.dc.get(e)||[]).forEach((t=>{t.resolve()})),n.dc.delete(e)}function hh(n,e,t){const r=U(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function Cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach((r=>{n.Ac.containsKey(r)||O_(n,r)}))}function O_(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Vs(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),dh(n))}function ju(n,e,t){for(const r of t)r instanceof C_?(n.Ac.addReference(r.key,e),LR(n,r)):r instanceof x_?(O(Xn,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||O_(n,r.key)):$(19791,{wc:r})}function LR(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(O(Xn,"New document in limbo: "+t),n.Pc.add(r),dh(n))}function dh(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new M(J.fromString(e)),r=n.fc.next();n.Ic.set(r,new RR(t)),n.Rc=n.Rc.insert(t,r),Ic(n.remoteStore,new xt(Ge(Bs(t.path)),r,"TargetPurposeLimboResolution",tt.yn))}}async function ln(n,e,t){const r=U(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach(((c,u)=>{o.push(r.gc(u,e,t).then((l=>{var d;if((l||t)&&r.isPrimaryClient){const p=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(l){s.push(l);const p=Yl.fo(u.targetId,l);i.push(p)}})))})),await Promise.all(o),r.Ec.hn(s),await(async function(u,l){const d=U(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>R.forEach(l,(g=>R.forEach(g.Ao,(w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w))).next((()=>R.forEach(g.Vo,(w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))))))}catch(p){if(!Jn(p))throw p;O(Xl,"Failed to update sequence numbers: "+p)}for(const p of l){const g=p.targetId;if(!p.fromCache){const w=d.No.get(g),P=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(P);d.No=d.No.insert(g,k)}}})(r.localStore,i))}async function MR(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){O(Xn,"User change. New user:",e.toKey());const r=await f_(t.localStore,e);t.currentUser=e,(function(i,o){i.dc.forEach((c=>{c.forEach((u=>{u.reject(new D(S.CANCELLED,o))}))})),i.dc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ln(t,r.qo)}}function FR(n,e){const t=U(n),r=t.Ic.get(e);if(r&&r.lc)return Q().add(r.key);{let s=Q();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const c=t.hc.get(o);s=s.unionWith(c.view.Yu)}return s}}async function UR(n,e){const t=U(n),r=await Da(t.localStore,e.query,!0),s=e.view.uc(r);return t.isPrimaryClient&&ju(t,e.targetId,s.oc),s}async function BR(n,e){const t=U(n);return Fu(t.localStore,e).then((r=>ln(t,r)))}async function qR(n,e,t,r){const s=U(n),i=await(function(c,u){const l=U(c),d=U(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(p=>d.Wr(p,u).next((g=>g?l.localDocuments.getDocuments(p,g):R.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Gs(s.remoteStore):t==="acknowledged"||t==="rejected"?(hh(s,e,r||null),lh(s,e),(function(c,u){U(U(c).mutationQueue).jr(u)})(s.localStore,e)):$(6720,"Unknown batchState",{bc:t}),await ln(s,i)):O(Xn,"Cannot apply mutation batch with id: "+e)}async function $R(n,e){const t=U(n);if(Tc(t),fh(t),e===!0&&t.mc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Yf(t,r.toArray());t.mc=!0,await Bu(t.remoteStore,!0);for(const i of s)Ic(t.remoteStore,i)}else if(e===!1&&t.mc!==!1){const r=[];let s=Promise.resolve();t.Tc.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then((()=>(Cs(t,o),Ss(t.localStore,o,!0)))),Vs(t.remoteStore,o)})),await s,await Yf(t,r),(function(o){const c=U(o);c.Ic.forEach(((u,l)=>{Vs(c.remoteStore,l)})),c.Ac.e_(),c.Ic=new Map,c.Rc=new de(M.comparator)})(t),t.mc=!1,await Bu(t.remoteStore,!1)}}async function Yf(n,e,t){const r=U(n),s=[],i=[];for(const o of e){let c;const u=r.Tc.get(o);if(u&&u.length!==0){c=await bs(r.localStore,Ie(u[0])?u[0]:Ge(u[0]));for(const l of u){const d=r.hc.get(l),p=await UR(r,d);p.snapshot&&i.push(p.snapshot)}}else{const l=await g_(r.localStore,o);c=await bs(r.localStore,l),await uh(r,L_(l),o,!1,c.resumeToken)}s.push(c)}return r.Ec.hn(i),s}function L_(n){return Kt(n)?n:Nm(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function jR(n){return(function(t){return U(U(t).persistence).Ro()})(U(n).localStore)}async function zR(n,e,t,r){const s=U(n);if(s.mc)return void O(Xn,"Ignoring unexpected query state notification.");const i=s.Tc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{let o;if(Ie(i[0]))switch(Yt(i[0])){case"collection_group":case"collection":o=await Fu(s.localStore,Ug(i[0]));break;case"documents":o=await(function(l,d){const p=U(l),g=Q(...Aa(d).map((w=>M.fromPath(w))));return p.persistence.runTransaction("Get documents for pipeline","readonly",(w=>p.Uo.getEntries(w,g))).then((w=>w))})(s.localStore,i[0]);break;default:xe(""),o=lr()}else o=await Fu(s.localStore,(function(l){return l.collectionGroup||(l.path.length%2==1?l.path.lastSegment():l.path.get(l.path.length-2))})(i[0]));const c=qs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pe.EMPTY_BYTE_STRING);await ln(s,o,c);break}case"rejected":await Ss(s.localStore,e,!0),Cs(s,e,r);break;default:$(64155,t)}}async function GR(n,e,t){const r=Tc(n);if(r.mc){for(const s of e){if(r.Tc.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){O(Xn,"Adding an already active target "+s);continue}const i=await g_(r.localStore,s),o=await bs(r.localStore,i);await uh(r,L_(i),o.targetId,!1,o.resumeToken),Ic(r.remoteStore,o)}for(const s of t)r.Tc.has(s)&&await Ss(r.localStore,s,!1).then((()=>{Vs(r.remoteStore,s),Cs(r,s)})).catch(Qn)}}function Tc(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NR.bind(null,e),e.Ec.hn=ER.bind(null,e.eventManager),e.Ec.yc=vR.bind(null,e.eventManager),e}function fh(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kR.bind(null,e),e}function KR(n,e,t){const r=U(n);(async function(i,o,c){try{const u=await o.getMetadata();if(await(function(w,P){const k=U(w),N=ve(P.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",(q=>k.d_.getBundleMetadata(q,P.id))).then((q=>!!q&&q.createTime.compareTo(N)>=0))})(i.localStore,u))return await o.close(),c._completeWith((function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(V_(u));const l=new ch(u,o.serializer);let d=await o.ma();for(;d;){const g=await l.qu(d);g&&c._updateProgress(g),d=await o.ma()}const p=await l.Ku(i.localStore);return await ln(i,p.Qu,void 0),await(function(w,P){const k=U(w);return k.persistence.runTransaction("Save bundle","readwrite",(N=>k.d_.saveBundleMetadata(N,P)))})(i.localStore,u),c._completeWith(p.progress),Promise.resolve(p.Wu)}catch(u){return xe(Xn,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(r,e,t).then((s=>{r.sharedClientState.notifyBundleLoaded(s)}))}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lr(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return d_(this.persistence,new h_,e.initialUser,this.serializer)}Sc(e){return new Hl(yc.w_,this.serializer)}vc(e){return new b_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class ph extends xs{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){L(this.persistence.referenceDelegate instanceof Na,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pg(r,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Hl((r=>Na.w_(r,t)),this.serializer)}}class mh extends xs{constructor(e,t,r){super(),this.Fc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Fc.initialize(this,e),await fh(this.Fc.syncEngine),await Gs(this.Fc.remoteStore),await this.persistence.X_((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Dc(e){return d_(this.persistence,new h_,e.initialUser,this.serializer)}xc(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new pg(r,e.asyncQueue,t)}Cc(e,t){const r=new IR(t,this.persistence);return new yR(e.asyncQueue,r)}Sc(e){const t=Jl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Ql(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,S_(),la(),this.serializer,this.sharedClientState,!!this.forceOwnership)}vc(e){return new b_}}class M_ extends mh{constructor(e,t){super(e,t,!1),this.Fc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Fc.syncEngine;this.sharedClientState instanceof cu&&(this.sharedClientState.syncEngine={Iu:qR.bind(null,t),Au:zR.bind(null,t),Vu:GR.bind(null,t),Ro:jR.bind(null,t),Ru:BR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.X_((async r=>{await $R(this.Fc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}vc(e){const t=S_();if(!cu.Je(t))throw new D(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new cu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Kn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MR.bind(null,this.syncEngine),await Bu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TR})()}createDatastore(e){const t=Lr(e.databaseInfo.databaseId),r=eE(e.databaseInfo);return iE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new iR(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Jf(this.syncEngine,t,0)),(function(){return hf.Je()?new hf:new JT})())}createSyncEngine(e,t){return(function(s,i,o,c,u,l,d){const p=new PR(s,i,o,c,u,l);return d&&(p.mc=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=U(s);O(Bt,"RemoteStore shutting down."),i.ca.add(5),await zs(i),i.Ea.shutdown(),i.ha.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Kn.provider={build:()=>new Kn};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WR=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=U(s),c={documents:i.map((p=>Es(o.serializer,p)))},u=await o.st("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),c,i.length),l=new Map;u.forEach((p=>{const g=LT(o.serializer,p);l.set(g.key.toString(),g)}));const d=[];return i.forEach((p=>{const g=l.get(p.toString());L(!!g,55234,{key:p}),d.push(g)})),d})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Us(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=M.fromPath(r);this.mutations.push(new sl(s,this.precondition(s)))})),await(async function(r,s){const i=U(r),o={writes:s.map((c=>Ki(i.serializer,c)))};await i.tt("Commit",i.serializer.databaseId,J.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw $(50498,{Oc:e.constructor.name});t=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?_e.exists(!1):_e.updateTime(t):_e.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new D(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(t)}return _e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Mc=r.maxAttempts,this.jt=new pl(this.asyncQueue,"transaction_retry")}Nc(){this.Mc-=1,this.Lc()}Lc(){this.jt.Ut((async()=>{const e=new WR(this.datastore),t=this.Bc(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Uc(s)}))))})).catch((r=>{this.Uc(r)}))}))}Bc(e){try{const t=this.updateFunction(e);return!uo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Mc>0&&this.kc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Lm(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="FirestoreClient";class QR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{O(Wn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(O(Wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ws(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function uu(n,e){n.asyncQueue.verifyOperationInProgress(),O(Wn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await f_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Xf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gh(n);O(Wn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>zf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>zf(e.remoteStore,s))),n._onlineComponents=e}async function gh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Wn,"Using user provided OfflineComponentProvider");try{await uu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;xe("Error using user provided cache. Falling back to memory cache: "+t),await uu(n,new xs)}}else O(Wn,"Using default OfflineComponentProvider"),await uu(n,new ph(void 0));return n._offlineComponents}async function Ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Wn,"Using user provided OnlineComponentProvider"),await Xf(n,n._uninitializedComponentsProvider._online)):(O(Wn,"Using default OnlineComponentProvider"),await Xf(n,new Kn))),n._onlineComponents}function F_(n){return gh(n).then((e=>e.persistence))}function Hs(n){return gh(n).then((e=>e.localStore))}function U_(n){return Ec(n).then((e=>e.remoteStore))}function _h(n){return Ec(n).then((e=>e.syncEngine))}function B_(n){return Ec(n).then((e=>e.datastore))}async function Ns(n){const e=await Ec(n),t=e.eventManager;return t.onListen=bR.bind(null,e.syncEngine),t.onUnlisten=VR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CR.bind(null,e.syncEngine),t}function JR(n){return n.asyncQueue.enqueue((async()=>{const e=await F_(n),t=await U_(n);return e.setNetworkEnabled(!0),(function(s){const i=U(s);return i.ca.delete(0),wo(i)})(t)}))}function YR(n){return n.asyncQueue.enqueue((async()=>{const e=await F_(n),t=await U_(n);return e.setNetworkEnabled(!1),(async function(s){const i=U(s);i.ca.add(0),await zs(i),i.ha.set("Offline")})(t)}))}function XR(n,e,t,r){const s=new wc(r),i=new ah(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>sh(await Ns(n),i))),()=>{s.Aa(),n.asyncQueue.enqueueAndForget((async()=>ih(await Ns(n),i)))}}function ZR(n,e){const t=new Fe;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await(function(l,d){const p=U(l);return p.persistence.runTransaction("read document","readonly",(g=>p.localDocuments.getDocument(g,d)))})(s,i);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new D(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Ws(c,`Failed to get document '${i} from cache`);o.reject(u)}})(await Hs(n),e,t))),t.promise}function q_(n,e,t={}){const r=new Fe;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const d=new wc({next:g=>{d.Aa(),o.enqueueAndForget((()=>ih(i,p)));const w=g.docs.has(c);!w&&g.fromCache?l.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?l.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new ah(Bs(c.path),d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return sh(i,p)})(await Ns(n),n.asyncQueue,e,t,r))),r.promise}function eP(n,e){const t=new Fe;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await Da(s,i,!0),u=new N_(i,c.Wo),l=u.Zu(c.documents),d=u.applyChanges(l,!1);o.resolve(d.snapshot)}catch(c){const u=Ws(c,`Failed to execute query '${i} against cache`);o.reject(u)}})(await Hs(n),e,t))),t.promise}function $_(n,e,t={}){const r=new Fe;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const d=new wc({next:g=>{d.Aa(),o.enqueueAndForget((()=>ih(i,p))),g.fromCache&&u.source==="server"?l.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new ah(c instanceof Di?Jv(c):c,d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return sh(i,p)})(await Ns(n),n.asyncQueue,e,t,r))),r.promise}function tP(n,e,t){const r=new Fe;return n.asyncQueue.enqueueAndForget((async()=>{try{const s=await B_(n);r.resolve((async function(o,c,u){var k;const l=U(o),{request:d,ve:p,parent:g}=Jm(l.serializer,Dm(c),u);l.connection.Ye||delete d.parent;const w=(await l.st("RunAggregationQuery",l.serializer.databaseId,g,d,1)).filter((N=>!!N.result));L(w.length===1,64727);const P=(k=w[0].result)==null?void 0:k.aggregateFields;return Object.keys(P).reduce(((N,q)=>(N[p[q]]=P[q],N)),{})})(s,e,t))}catch(s){r.reject(s)}})),r.promise}function nP(n,e){const t=new Fe;return n.asyncQueue.enqueueAndForget((async()=>xR(await _h(n),e,t))),t.promise}function rP(n,e){const t=new wc(e);return n.asyncQueue.enqueueAndForget((async()=>(function(s,i){U(s).Su.add(i),i.next()})(await Ns(n),t))),()=>{t.Aa(),n.asyncQueue.enqueueAndForget((async()=>(function(s,i){U(s).Su.delete(i)})(await Ns(n),t)))}}function sP(n,e,t){const r=new Fe;return n.asyncQueue.enqueueAndForget((async()=>{const s=await B_(n);new HR(n.asyncQueue,s,t,e,r).Nc()})),r.promise}function iP(n,e,t,r){const s=(function(o,c){let u;return u=typeof o=="string"?qm().encode(o):o,(function(d,p){return new gR(d,p)})((function(d,p){if(d instanceof Uint8Array)return jf(d,p);if(d instanceof ArrayBuffer)return jf(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,Lr(e));n.asyncQueue.enqueueAndForget((async()=>{KR(await _h(n),s,r)}))}function oP(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){const i=U(r);return i.persistence.runTransaction("Get named query","readonly",(o=>i.d_.getNamedQuery(o,s)))})(await Hs(n),e)))}function j_(n,e){return(function(r,s){return new _R(r,s)})(n,e)}function aP(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,s){const i=U(r),o=i.indexManager,c=[];return i.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(p,g,w,P,k){p=[...p],g=[...g],p.sort(w),g.sort(w);const N=p.length,q=g.length;let G=0,j=0;for(;G<q&&j<N;){const Y=w(p[j],g[G]);Y<0?k(p[j++]):Y>0?P(g[G++]):(G++,j++)}for(;G<q;)P(g[G++]);for(;j<N;)k(p[j++])})(l,s,gT,(d=>{c.push(o.addFieldIndex(u,d))}),(d=>{c.push(o.deleteFieldIndex(u,d))})))).next((()=>R.waitFor(c)))))})(await Hs(n),e)))}function cP(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){U(r).Mo.po=s})(await Hs(n),e)))}function uP(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=U(t),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Hs(n))))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="AsyncQueue";class ep{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new pl(this,"async_queue_retry"),this.Yc=()=>{const r=la();r&&O(Zf,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Zc=e;const t=la();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=la();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise((()=>{}));const t=new Fe;return this.el((()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Wc.push(e),this.tl())))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!Jn(e))throw e;O(Zf,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut((()=>this.tl()))}}el(e){const t=this.Zc.then((()=>(this.jc=!0,e().catch((r=>{throw this.zc=r,this.jc=!1,Te("INTERNAL UNHANDLED ERROR: ",tp(r)),r})).then((r=>(this.jc=!1,r))))));return this.Zc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=nh.createAndSchedule(this,e,t,r,(i=>this.nl(i)));return this.Gc.push(s),s}Xc(){this.zc&&$(47125,{rl:tp(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then((()=>{this.Gc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()}))}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function tp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this._progressObserver={},this._taskCompletionResolver=new Fe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=-1;class le extends ho{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ep,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ep(e),this._firestoreClient=void 0,await e}}}function hP(n,e,t){t||(t=ji);const r=Os(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(wt(i,e))return s;throw new D(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fg)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Nr(e.host)&&Wa(e.host),r.initialize({options:e,instanceIdentifier:t})}function dP(n,e){const t=typeof n=="object"?n:Ju(),r=typeof n=="string"?n:e||ji,s=Os(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fp("firestore");i&&_g(s,...i)}return s}function ye(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||G_(n),n._firestoreClient}function G_(n){var r,s,i,o;const e=n._freezeSettings(),t=aE(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new QR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}function fP(n,e){xe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return K_(n,Kn.provider,{build:r=>new mh(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function pP(n){xe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();K_(n,Kn.provider,{build:t=>new M_(t,e.cacheSizeBytes)})}function K_(n,e,t){if((n=ee(n,le))._firestoreClient||n._terminated)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new D(S.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},G_(n)}function mP(n){if(n._initialized&&!n._terminated)throw new D(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Fe;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!Ot.Je())return Promise.resolve();const s=r+l_;await Ot.delete(s)})(Jl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function gP(n){return(function(t){const r=new Fe;return t.asyncQueue.enqueueAndForget((async()=>OR(await _h(t),r))),r.promise})(ye(n=ee(n,le)))}function _P(n){return JR(ye(n=ee(n,le)))}function yP(n){return YR(ye(n=ee(n,le)))}function IP(n){return Vw(n.app,"firestore",n._databaseId.database),n._delete()}function zu(n,e){const t=ye(n=ee(n,le)),r=new z_;return iP(t,n._databaseId,e,r),r}function W_(n,e){return oP(ye(n=ee(n,le)),e).then((t=>t?new Ne(n,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{convertValue(e,t="none"){switch(be(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Hn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Tr].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>fe(o.doubleValue)));return new Ye(t)}convertGeoPoint(e){return new yt(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=co(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const t=tn(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);L(tg(r),9688,{name:e});const s=new Fn(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||Te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends yh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){var r;const e=ye(ee(n.firestore,le)),t=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return t===void 0?null:nc(t,Ge(n._query)).be}function TP(n,e){var i;const t=Xu(e,((o,c)=>new Em(c,o.aggregateType,o._internalFieldPath))),r=ye(ee(n.firestore,le)),s=(i=r._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:Jm(s,Dm(n._query),t,!0).request}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}const np="@firebase/firestore",rp="4.17.0";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class H_{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Ve({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Tt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},EP=class extends no{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ih{}class Qs extends Ih{}function vP(n,e,...t){let r=[];e instanceof Ih&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((u=>u instanceof $r)).length,c=i.filter((u=>u instanceof Js)).length;if(o>1||o>0&&c>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Js extends Qs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Js(e,t,r)}_apply(e){const t=this._parse(e);return Y_(e._query,t),new Ne(e.firestore,e.converter,vu(e._query,t))}_parse(e){const t=Fr(e.firestore);return(function(i,o,c,u,l,d,p){let g;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ip(p,d);const P=[];for(const k of p)P.push(sp(u,i,k));g={arrayValue:{values:P}}}else g=sp(u,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ip(p,d),g=Eg(c,o,p,d==="in"||d==="not-in");return re.create(l,d,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function AP(n,e,t){const r=e,s=Tt("where",n);return Js._create(s,r,t)}class $r extends Ih{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $r(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)Y_(o,u),o=vu(o,u)})(e._query,t),new Ne(e.firestore,e.converter,vu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function RP(...n){return n.forEach((e=>X_("or",e))),$r._create("or",n)}function PP(...n){return n.forEach((e=>X_("and",e))),$r._create("and",n)}class vc extends Qs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vc(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gi(i,o)})(e._query,this._field,this._direction);return new Ne(e.firestore,e.converter,wT(e._query,t))}}function bP(n,e="asc"){const t=e,r=Tt("orderBy",n);return vc._create(r,t)}class To extends Qs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new To(e,t,r)}_apply(e){return new Ne(e.firestore,e.converter,Ta(e._query,this._limit,this._limitType))}}function SP(n){return im("limit",n),To._create("limit",n,"F")}function VP(n){return im("limitToLast",n),To._create("limitToLast",n,"L")}class Eo extends Qs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Eo(e,t,r)}_apply(e){const t=J_(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,TT(e._query,t))}}function CP(...n){return Eo._create("startAt",n,!0)}function xP(...n){return Eo._create("startAfter",n,!1)}class vo extends Qs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new vo(e,t,r)}_apply(e){const t=J_(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,ET(e._query,t))}}function NP(...n){return vo._create("endBefore",n,!1)}function DP(...n){return vo._create("endAt",n,!0)}function J_(n,e,t,r){if(t[0]=ce(t[0]),t[0]instanceof no)return(function(i,o,c,u,l){if(!u)throw new D(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of ss(i))if(p.field.isKeyField())d.push(Er(o,u.key));else{const g=u.data.field(p.field);if(ao(g))throw new D(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=p.field.canonicalString();throw new D(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(g)}return new qn(d,l)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Fr(n.firestore);return(function(o,c,u,l,d,p){const g=o.explicitOrderBy;if(d.length>g.length)throw new D(S.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let P=0;P<d.length;P++){const k=d[P];if(g[P].field.isKeyField()){if(typeof k!="string")throw new D(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof k}`);if(!ul(o)&&k.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(J.fromString(k));if(!M.isDocumentKey(N))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const q=new M(N);w.push(Er(c,q))}else{const N=Eg(u,l,k);w.push(N)}}return new qn(w,p)})(n._query,n.firestore._databaseId,s,e,t,r)}}function sp(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ul(e)&&t.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!M.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Er(n,new M(r))}if(t instanceof oe)return Er(n,t._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(t)}.`)}function ip(n,e){if(!Array.isArray(n)||n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Y_(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function X_(n,e){if(!(e instanceof Js||e instanceof $r))throw new D(S.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function Ac(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class wh extends yh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n){return new Ds("sum",Tt("sum",n))}function OP(n){return new Ds("avg",Tt("average",n))}function Z_(){return new Ds("count")}function LP(n,e){var t,r;return n instanceof Ds&&e instanceof Ds&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function MP(n,e){return gl(n.query,e.query)&&wt(n.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n){return ey(n,{count:Z_()})}function ey(n,e){const t=ee(n.firestore,le),r=ye(t),s=Xu(e,((i,o)=>new Em(o,i.aggregateType,i._internalFieldPath)));return tP(r,n._query,s).then((i=>(function(c,u,l){const d=new Zn(c);return new H_(u,d,l)})(t,n,i)))}class UP{constructor(e){this.kind="memory",this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new ph(void 0)}}toJSON(){return{kind:this.kind}}}class BP{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ty(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class qP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=xs.provider}toJSON(){return{kind:this.kind}}}class $P{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new ph(e)}}toJSON(){return{kind:this.kind}}}function jP(){return new qP}function zP(n){return new $P(n==null?void 0:n.cacheSizeBytes)}function GP(n){return new UP(n)}function KP(n){return new BP(n)}class WP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider={build:t=>new mh(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class HP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Kn.provider,this._offlineComponentProvider={build:t=>new M_(t,e==null?void 0:e.cacheSizeBytes)}}}function ty(n){return new WP(n==null?void 0:n.forceOwnership)}function QP(){return new HP}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="NOT SUPPORTED";class Ht{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nt extends no{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tt("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=nt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function JP(n,e,t){if(kr(e,nt._jsonSchema)){if(e.bundle===ny)throw new D(S.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Lr(n._databaseId),s=j_(e.bundle,r),i=s.va(),o=new ch(s.getMetadata(),r);for(const d of i)o.qu(d);const c=o.documents;if(c.length!==1)throw new D(S.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=tc(r,c[0].document),l=new M(J.fromString(e.bundleName));return new nt(n,new wh(n),l,u,new Ht(!1,!1),t||null)}}nt._jsonSchemaVersion="firestore/documentSnapshot/1.0",nt._jsonSchema={type:Pe("string",nt._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Ui extends nt{data(e={}){return super.data(e)}}class rt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ht(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ui(this._firestore,this._userDataWriter,r.key,r,new Ht(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{Ie(s._snapshot.query)?xa(s._snapshot.query):ec(s.query._query);const u=new Ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ht(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ht(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:XP(c.type),doc:u,oldIndex:l,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YP(n,e,t){if(kr(e,rt._jsonSchema)){if(e.bundle===ny)throw new D(S.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Lr(n._databaseId),s=j_(e.bundle,r),i=s.va(),o=new ch(s.getMetadata(),r);for(const w of i)o.qu(w);if(o.queries.length!==1)throw new D(S.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=pc(o.queries[0].bundledQuery),u=Ie(c)?xa(c):ec(c),l=o.documents;let d=new On(u);l.map((w=>{const P=tc(r,w.document);d=d.add(P)}));const p=Vr.fromInitialDocuments(c,d,Q(),!1,!1),g=new Ne(n,t||null,c);return new rt(n,new wh(n),g,p)}}function XP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}function ZP(n,e){return n instanceof nt&&e instanceof nt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof rt&&e instanceof rt&&n._firestore===e._firestore&&gl(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt._jsonSchemaVersion="firestore/querySnapshot/1.0",rt._jsonSchema={type:Pe("string",rt._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};const eb={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fr(e)}set(e,t,r){this._verifyNotCommitted();const s=xn(e,this._firestore),i=Ac(s.converter,t,r),o=ic(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,_e.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=xn(e,this._firestore);let o;return o=typeof(t=ce(t))=="string"||t instanceof Mr?Al(this._dataReader,"WriteBatch.update",i._key,t,r,s):vl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=xn(e,this._firestore);return this._mutations=this._mutations.concat(new Us(t._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xn(n,e){if((n=ce(n)).firestore!==e)throw new D(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tb=class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Fr(e)}get(e){const t=xn(e,this._firestore),r=new wh(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return $(24041);const i=s[0];if(i.isFoundDocument())return new no(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new no(this._firestore,r,t._key,null,t.converter);throw $(18433,{doc:i})}))}set(e,t,r){const s=xn(e,this._firestore),i=Ac(s.converter,t,r),o=ic(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=xn(e,this._firestore);let o;return o=typeof(t=ce(t))=="string"||t instanceof Mr?Al(this._dataReader,"Transaction.update",i._key,t,r,s):vl(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=xn(e,this._firestore);return this._transaction.delete(t._key),this}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends tb{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=xn(e,this._firestore),r=new Zn(this._firestore);return super.get(e).then((s=>new nt(this._firestore,r,t._key,s._document,new Ht(!1,!1),t.converter)))}}function nb(n,e,t){n=ee(n,le);const r={...eb,...t};(function(o){if(o.maxAttempts<1)throw new D(S.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=ye(n);return sP(s,(i=>e(new sy(n,i))),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(n){n=ee(n,oe);const e=ee(n.firestore,le),t=ye(e);return q_(t,n._key).then((r=>Th(e,n,r)))}function sb(n){n=ee(n,oe);const e=ee(n.firestore,le),t=ye(e),r=new Zn(e);return ZR(t,n._key).then((s=>new nt(e,r,n._key,s,new Ht(s!==null&&s.hasLocalMutations,!0),n.converter)))}function ib(n){n=ee(n,oe);const e=ee(n.firestore,le),t=ye(e);return q_(t,n._key,{source:"server"}).then((r=>Th(e,n,r)))}function ob(n){n=ee(n,Ne);const e=ee(n.firestore,le),t=ye(e),r=new Zn(e);return Q_(n._query),$_(t,n._query).then((s=>new rt(e,r,n,s)))}function ab(n){n=ee(n,Ne);const e=ee(n.firestore,le),t=ye(e),r=new Zn(e);return eP(t,n._query).then((s=>new rt(e,r,n,s)))}function cb(n){n=ee(n,Ne);const e=ee(n.firestore,le),t=ye(e),r=new Zn(e);return $_(t,n._query,{source:"server"}).then((s=>new rt(e,r,n,s)))}function ub(n,e,t){n=ee(n,oe);const r=ee(n.firestore,le),s=Ac(n.converter,e,t),i=Fr(r);return Ys(r,[ic(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,_e.none())])}function lb(n,e,t,...r){n=ee(n,oe);const s=ee(n.firestore,le),i=Fr(s);let o;return o=typeof(e=ce(e))=="string"||e instanceof Mr?Al(i,"updateDoc",n._key,e,t,r):vl(i,"updateDoc",n._key,e),Ys(s,[o.toMutation(n._key,_e.exists(!0))])}function hb(n){return Ys(ee(n.firestore,le),[new Us(n._key,_e.none())])}function db(n,e){const t=ee(n.firestore,le),r=yg(n),s=Ac(n.converter,e),i=Fr(n.firestore);return Ys(t,[ic(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,_e.exists(!1))]).then((()=>r))}function Gu(n,...e){var l,d,p;n=ce(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||os(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(os(e[r])){const g=e[r];e[r]=(l=g.next)==null?void 0:l.bind(g),e[r+1]=(d=g.error)==null?void 0:d.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(n instanceof oe)o=ee(n.firestore,le),c=Bs(n._key.path),i={next:g=>{e[r]&&e[r](Th(o,n,g))},error:e[r+1],complete:e[r+2]};else{const g=ee(n,Ne);o=ee(g.firestore,le),c=g._query;const w=new Zn(o);i={next:P=>{e[r]&&e[r](new rt(o,w,g,P))},error:e[r+1],complete:e[r+2]},Q_(n._query)}const u=ye(o);return XR(u,c,s,i)}function fb(n,e,...t){const r=ce(n),s=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const p of d){if(!(p in u)){l.error=`snapshotJson missing required field: ${p}`;break}const g=u[p];if(typeof g!="string"){l.error=`snapshotJson field '${p}' must be a string.`;break}if(g.length===0){l.error=`snapshotJson field '${p}' cannot be an empty string.`;break}p==="bundle"?l.bundle=g:p==="bundleName"?l.bundleName=g:p==="bundleSource"&&(l.bundleSource=g)}return l})(e);if(s.error)throw new D(S.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||os(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&os(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,g,w){let P,k=!1;return zu(l,d.bundle).then((()=>W_(l,d.bundleName))).then((q=>{q&&!k&&(w&&q.withConverter(w),P=Gu(q,p||{},g))})).catch((q=>(g.error&&g.error(q),()=>{}))),()=>{k||(k=!0,P&&P())}})(r,s,i,c,t[o])}if(s.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&os(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,g,w){let P,k=!1;return zu(l,d.bundle).then((()=>{if(!k){const q=new oe(l,w||null,M.fromPath(d.bundleName));P=Gu(q,p||{},g)}})).catch((q=>(g.error&&g.error(q),()=>{}))),()=>{k||(k=!0,P&&P())}})(r,s,i,c,t[o])}throw new D(S.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function pb(n,e){n=ee(n,le);const t=ye(n),r=os(e)?e:{next:e};return rP(t,r)}function Ys(n,e){const t=ye(n);return nP(t,e)}function Th(n,e,t){const r=t.docs.get(e._key),s=new Zn(n);return new nt(n,s,e._key,r,new Ht(t.hasPendingWrites,t.fromCache),e.converter)}function mb(n){return n=ee(n,le),ye(n),new ry(n,(e=>Ys(n,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e){n=ee(n,le);const t=ye(n);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return xe("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(i){const o=typeof i=="string"?(function(l){try{return JSON.parse(l)}catch(d){throw new D(S.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}})(i):i,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=op(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=op(p,"fieldPath"),w=Pl("setIndexConfiguration",g);p.arrayConfig==="CONTAINS"?d.push(new yr(w,2)):p.order==="ASCENDING"?d.push(new yr(w,0)):p.order==="DESCENDING"&&d.push(new yr(w,1))}c.push(new Is(Is.UNKNOWN_ID,l,d,ws.empty()))}return c})(e);return aP(t,r)}function op(n,e){if(typeof n[e]!="string")throw new D(S.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function _b(n){var s;n=ee(n,le);const e=ap.get(n);if(e)return e;if(((s=ye(n)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const r=new iy(n);return ap.set(n,r),r}function yb(n){oy(n,!0)}function Ib(n){oy(n,!1)}function wb(n){const e=ye(n._firestore);uP(e).then((t=>O("deleting all persistent cache indexes succeeded"))).catch((t=>xe("deleting all persistent cache indexes failed",t)))}function oy(n,e){const t=ye(n._firestore);cP(t,e).then((r=>O(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((r=>xe(`setting persistent cache index auto creation isEnabled=${e} failed`,r)))}const ap=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Eh.instance.onExistenceFilterMismatch(e)}}class Eh{constructor(){this.i=new Map}static get instance(){return Xo||(Xo=new Eh,VT(Xo)),Xo}Ie(e){this.i.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.i;return r.set(t,e),()=>r.delete(t)}}let Xo=null;(function(e,t=!0){jw(Dr),wr(new Ln("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new le(new GT(r.getProvider("auth-internal")),new HT(o,r.getProvider("app-check-internal")),Zw(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Nt(np,rp,e),Nt(np,rp,"esm2020")})();const _C=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:yh,AggregateField:Ds,AggregateQuerySnapshot:H_,Bytes:Ze,CACHE_SIZE_UNLIMITED:lP,CollectionReference:It,DocumentReference:oe,DocumentSnapshot:nt,FieldPath:Mr,FieldValue:jt,Firestore:le,FirestoreError:D,GeoPoint:yt,LoadBundleTask:z_,PersistentCacheIndexManager:iy,Query:Ne,QueryCompositeFilterConstraint:$r,QueryConstraint:Qs,QueryDocumentSnapshot:Ui,QueryEndAtConstraint:vo,QueryFieldFilterConstraint:Js,QueryLimitConstraint:To,QueryOrderByConstraint:vc,QuerySnapshot:rt,QueryStartAtConstraint:Eo,SnapshotMetadata:Ht,Timestamp:ie,Transaction:sy,VectorValue:Ye,WriteBatch:ry,_AutoId:Ha,_ByteString:pe,_DatabaseId:Fn,_DocumentKey:M,_EmptyAppCheckTokenProvider:QT,_EmptyAuthCredentialsProvider:og,_FieldPath:Ee,_TestingHooks:Tb,_cast:ee,_debugAssert:Gw,_internalAggregationQueryToProtoRunAggregationQueryRequest:TP,_internalQueryToProtoQueryTarget:wP,_isBase64Available:Jw,_logWarn:xe,_validateIsNotUsedTogether:sm,addDoc:db,aggregateFieldEqual:LP,aggregateQuerySnapshotEqual:MP,and:PP,arrayRemove:vE,arrayUnion:EE,average:OP,clearIndexedDbPersistence:mP,collection:dE,collectionGroup:fE,connectFirestoreEmulator:_g,count:Z_,deleteAllPersistentCacheIndexes:wb,deleteDoc:hb,deleteField:wE,disableNetwork:yP,disablePersistentCacheIndexAutoCreation:Ib,doc:yg,documentId:sg,documentSnapshotFromJSON:JP,enableIndexedDbPersistence:fP,enableMultiTabIndexedDbPersistence:pP,enableNetwork:_P,enablePersistentCacheIndexAutoCreation:yb,endAt:DP,endBefore:NP,ensureFirestoreConfigured:ye,executeWrite:Ys,getAggregateFromServer:ey,getCountFromServer:FP,getDoc:rb,getDocFromCache:sb,getDocFromServer:ib,getDocs:ob,getDocsFromCache:ab,getDocsFromServer:cb,getFirestore:dP,getPersistentCacheIndexManager:_b,increment:AE,initializeFirestore:hP,limit:SP,limitToLast:VP,loadBundle:zu,maximum:PE,memoryEagerGarbageCollector:jP,memoryLocalCache:GP,memoryLruGarbageCollector:zP,minimum:RE,namedQuery:W_,onSnapshot:Gu,onSnapshotResume:fb,onSnapshotsInSync:pb,or:RP,orderBy:bP,persistentLocalCache:KP,persistentMultipleTabManager:QP,persistentSingleTabManager:ty,query:vP,queryEqual:gl,querySnapshotFromJSON:YP,refEqual:pE,runTransaction:nb,serverTimestamp:TE,setDoc:ub,setIndexConfiguration:gb,setLogLevel:zw,snapshotEqual:ZP,startAfter:xP,startAt:CP,sum:kP,terminate:IP,updateDoc:lb,vector:bg,waitForPendingWrites:gP,where:AP,writeBatch:mb},Symbol.toStringTag,{value:"Module"}));var Eb="firebase",vb="12.17.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Eb,vb,"app");function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ab=ay,cy=new so("auth","Firebase",ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Qu("@firebase/auth");function uy(n,...e){Ma.logLevel<=ne.WARN&&Ma.warn(`Auth (${Dr}): ${n}`,...e)}function ha(n,...e){Ma.logLevel<=ne.ERROR&&Ma.error(`Auth (${Dr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,...e){throw vh(n,...e)}function Lt(n,...e){return vh(n,...e)}function ly(n,e,t){const r={...Ab(),[e]:t};return new so("auth","Firebase",r).create(e,{appName:n.name})}function Zt(n){return ly(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return cy.create(n,...e)}function H(n,e,...t){if(!n)throw vh(e,...t)}function Qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ha(e),new Error(e)}function on(n,e){n||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Rb(){return cp()==="http:"||cp()==="https:"}function cp(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rb()||kI()||"connection"in navigator)?navigator.onLine:!0}function bb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=NI()||OI()}get(){return Pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cb=new Ao(3e4,6e4);function hn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function zt(n,e,t,r,s={}){return dy(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...i};return DI()||(l.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Nr(n.emulatorConfig.host)&&(l.credentials="include"),hy.fetch()(await fy(n,n.config.apiHost,t,c),l)})}async function dy(n,e,t){n._canInitEmulator=!1;const r={...Sb,...e};try{const s=new Nb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Zo(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Zo(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ly(n,d,l);Et(n,d)}}catch(s){if(s instanceof $t)throw s;Et(n,"network-request-failed",{message:String(s)})}}async function Ro(n,e,t,r,s={}){const i=await zt(n,e,t,r,s);return"mfaPendingCredential"in i&&Et(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function fy(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Ah(n.config,s):`${n.config.apiScheme}://${s}`;return Vb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function xb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Cb.get())})}}function Zo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Lt(n,e,r);return s.customData._tokenResponse=t,s}function up(n){return n!==void 0&&n.enterprise!==void 0}class Db{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kb(n,e){return zt(n,"GET","/v2/recaptchaConfig",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(n,e){return zt(n,"POST","/v1/accounts:delete",e)}async function Fa(n,e){return zt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lb(n,e=!1){const t=ce(n),r=await t.getIdToken(e),s=Rh(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bi(lu(s.auth_time)),issuedAtTime:Bi(lu(s.iat)),expirationTime:Bi(lu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lu(n){return Number(n)*1e3}function Rh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=Op(t);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lp(n){const e=Rh(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $t&&Mb(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Mb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ks(n,Fa(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?py(s.providerUserInfo):[],o=Bb(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Wu(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,d)}async function Ub(n){const e=ce(n);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bb(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function py(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(n,e){const t=await dy(n,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await fy(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Nr(n.emulatorConfig.host)&&(u.credentials="include"),hy.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $b(n,e){return zt(n,"POST","/v2/accounts:revokeToken",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=lp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qb(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new as;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Fb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lb(this,e)}reload(){return Ub(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await ks(this,Ob(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:w,providerData:P,stsTokenManager:k}=t;H(p&&k,e,"internal-error");const N=as.fromJSON(this.name,k);H(typeof p=="string",e,"internal-error"),En(r,e.name),En(s,e.name),H(typeof g=="boolean",e,"internal-error"),H(typeof w=="boolean",e,"internal-error"),En(i,e.name),En(o,e.name),En(c,e.name),En(u,e.name),En(l,e.name),En(d,e.name);const q=new gt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:l,lastLoginAt:d});return P&&Array.isArray(P)&&(q.providerData=P.map(G=>({...G}))),u&&(q._redirectEventId=u),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new as;s.updateFromServerResponse(t);const i=new gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ua(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?py(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new as;c.updateFromIdToken(r);const u=new gt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;function Jt(n){on(n instanceof Function,"Expected a class definition");let e=hp.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}my.type="NONE";const dp=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n,e,t){return`firebase:${n}:${e}:${t}`}class cs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=da(this.userKey,s.apiKey,i),this.fullPersistenceKey=da("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Fa(this.auth,{idToken:e}).catch(()=>{});return t?gt._fromGetAccountInfoResponse(this.auth,t,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cs(Jt(dp),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Jt(dp);const o=da(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){let p;if(typeof d=="string"){const g=await Fa(e,{idToken:d}).catch(()=>{});if(!g)break;p=await gt._fromGetAccountInfoResponse(e,g,d)}else p=gt._fromJSON(e,d);l!==i&&(c=p),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new cs(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ty(e))return"Blackberry";if(Ey(e))return"Webos";if(_y(e))return"Safari";if((e.includes("chrome/")||yy(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(n=Ce()){return/firefox\//i.test(n)}function _y(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yy(n=Ce()){return/crios\//i.test(n)}function Iy(n=Ce()){return/iemobile/i.test(n)}function wy(n=Ce()){return/android/i.test(n)}function Ty(n=Ce()){return/blackberry/i.test(n)}function Ey(n=Ce()){return/webos/i.test(n)}function Ph(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jb(n=Ce()){var e;return Ph(n)&&!!((e=window.navigator)!=null&&e.standalone)}function zb(){return LI()&&document.documentMode===10}function vy(n=Ce()){return Ph(n)||wy(n)||Ey(n)||Ty(n)||/windows phone/i.test(n)||Iy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e=[]){let t;switch(n){case"Browser":t=fp(Ce());break;case"Worker":t=`${fp(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,e={}){return zt(n,"GET","/v2/passwordPolicy",hn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=6;class Hb{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Wb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pp(this),this.idTokenSubscription=new pp(this),this.beforeStateQueue=new Gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fa(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(Zt(this));const t=e?ce(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kb(this),t=new Hb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $b(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&uy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function er(n){return ce(n)}class pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jb(n){Rc=n}function Ry(n){return Rc.loadJS(n)}function Yb(){return Rc.recaptchaEnterpriseScript}function Xb(){return Rc.gapiScript}function Zb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eS{constructor(){this.enterprise=new tS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="recaptcha-enterprise",Py="NO_RECAPTCHA",mp="onFirebaseAuthREInstanceReady";class Rn{constructor(e){this.type=nS,this.auth=er(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{kb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Db(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;up(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Py)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async c=>{if(!t&&up(window.grecaptcha)&&Rn.scriptInjectionDeferred)await Rn.scriptInjectionDeferred.promise,s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Yb();u.length!==0&&(u+=c+`&onload=${mp}`),Rn.scriptInjectionDeferred=new qp,window[mp]=()=>{var l;(l=Rn.scriptInjectionDeferred)==null||l.resolve()},Ry(u).then(()=>{var l;return(l=Rn.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}Rn.scriptInjectionDeferred=null;async function gp(n,e,t,r=!1,s=!1){const i=new Rn(n);let o;if(s)o=Py;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ba(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gp(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gp(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(n,e){const t=Os(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(wt(i,e??{}))return s;Et(s,"already-initialized")}return t.initialize({options:e})}function sS(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iS(n,e,t){const r=er(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=by(e),{host:o,port:c}=oS(e),u=c===null?"":`:${c}`,l={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(wt(l,r.config.emulator)&&wt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Nr(o)?Wa(`${i}//${o}${u}`):aS()}function by(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function oS(n){const e=by(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_p(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_p(o)}}}function _p(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,t){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function cS(n,e){return zt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(n,e){return Ro(n,"POST","/v1/accounts:signInWithPassword",hn(n,e))}async function lS(n,e){return zt(n,"POST","/v1/accounts:sendOobCode",hn(n,e))}async function hS(n,e){return lS(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(n,e){return Ro(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}async function fS(n,e){return Ro(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends bh{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ro(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ro(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,t,"signInWithPassword",uS);case"emailLink":return dS(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,r,"signUpPassword",cS);case"emailLink":return fS(e,{idToken:t,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n,e){return Ro(n,"POST","/v1/accounts:signInWithIdp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="http://localhost";class Cr extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return us(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,us(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,us(e,t)}buildRequest(){const e={requestUri:pS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=io(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gS(n){const e=Ti(Ei(n)).link,t=e?Ti(Ei(e)).deep_link_id:null,r=Ti(Ei(n)).deep_link_id;return(r?Ti(Ei(r)).link:null)||r||t||e||n}class Sh{constructor(e){const t=Ti(Ei(e)),r=t.apiKey??null,s=t.oobCode??null,i=mS(t.mode??null);H(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=gS(e);try{return new Sh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,t){return ro._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Sh.parseLink(t);return H(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Po{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return bn.credential(t,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Po{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Po{constructor(){super("twitter.com")}static credential(e,t){return Cr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(n,e){return Ro(n,"POST","/v1/accounts:signUp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await gt._fromIdTokenResponse(e,r,s),o=yp(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=yp(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function yp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends $t{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qa(e,t,r,s)}}function Vy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(n,i,e,r):i})}async function yS(n,e,t=!1){const r=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(n,e,t=!1){const{auth:r}=n;if(ut(r.app))return Promise.reject(Zt(r));const s="reauthenticate";try{const i=await ks(n,Vy(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Rh(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),xr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(n,e,t=!1){if(ut(n.app))return Promise.reject(Zt(n));const r="signIn",s=await Vy(n,r,e),i=await xr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function wS(n,e){return Cy(er(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n){const e=er(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yC(n,e,t){const r=er(n);await Ba(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hS)}async function IC(n,e,t){if(ut(n.app))return Promise.reject(Zt(n));const r=er(n),o=await Ba(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_S).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xy(n),u}),c=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function wC(n,e,t){return ut(n.app)?Promise.reject(Zt(n)):wS(ce(n),Xs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xy(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(n,e){return zt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ce(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ks(r,TS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ES(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function vS(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function EC(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function vC(n){return ce(n).signOut()}const $a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1e3,RS=10;class Dy extends Ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RS):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dy.type="LOCAL";const PS=Dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends Ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ky.type="SESSION";const Oy=ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,i)),u=await bS(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const l=Vh("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function VS(n){Mt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function CS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function NS(){return Ly()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebaseLocalStorageDb",DS=1,ja="firebaseLocalStorage",Fy="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(n,e){return n.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function kS(){const n=indexedDB.deleteDatabase(My);return new bo(n).toPromise()}function Uy(){const n=indexedDB.open(My,DS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ja,{keyPath:Fy})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await kS(),e(await Uy()))})})}async function Ip(n,e,t){const r=bc(n,!0).put({[Fy]:e,value:t});return new bo(r).toPromise()}async function OS(n,e){const t=bc(n,!1).get(e),r=await new bo(t).toPromise();return r===void 0?null:r.value}function wp(n,e){const t=bc(n,!0).delete(e);return new bo(t).toPromise()}const LS=800,MS=3;class By{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Uy(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||t++>MS)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(NS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await CS(),!this.activeServiceWorker)return;this.sender=new SS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ip(e,$a,"1"),await wp(e,$a)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ip(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>OS(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(s=>{const i=bc(s,!1).getAll();return new bo(i).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isHiding||uy(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}By.type="LOCAL";const FS=By;new Ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n,e){return e?Jt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,t){return us(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BS(n){return Cy(n.auth,new Ch(n),n.bypassAuthState)}function qS(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),IS(t,new Ch(n),n.bypassAuthState)}async function $S(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),yS(t,new Ch(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BS;case"linkViaPopup":case"linkViaRedirect":return $S;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:Et(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Ao(2e3,1e4);class rs extends qy{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jS.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="pendingRedirect",fa=new Map;class GS extends qy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const r=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(n,e){const t=QS(e),r=HS(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function WS(n,e){fa.set(n._key(),e)}function HS(n){return Jt(n._redirectPersistence)}function QS(n){return da(zS,n.config.apiKey,n.name)}async function JS(n,e,t=!1){if(ut(n.app))return Promise.reject(Zt(n));const r=er(n),s=US(r,e),o=await new GS(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=600*1e3;class XS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$y(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $y({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $y(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(n,e={}){return zt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nV=/^https?/;async function rV(n){if(n.config.emulator)return;const{authorizedDomains:e}=await eV(n);for(const t of e)try{if(sV(t))return}catch{}Et(n,"unauthorized-domain")}function sV(n){const e=Ku(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!nV.test(t))return!1;if(tV.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=new Ao(3e4,6e4);function Ep(){const n=Mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oV(n){return new Promise((e,t)=>{var s,i,o;function r(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),t(Lt(n,"network-request-failed"))},timeout:iV.get()})}if((i=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)r();else{const c=Zb("iframefcb");return Mt()[c]=()=>{gapi.load?r():t(Lt(n,"network-request-failed"))},Ry(`${Xb()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw pa=null,e})}let pa=null;function aV(n){return pa=pa||oV(n),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new Ao(5e3,15e3),uV="__/auth/iframe",lV="emulator/auth/iframe",hV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fV(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ah(e,lV):`https://${n.config.authDomain}/${uV}`,r={apiKey:e.apiKey,appName:n.name,v:Dr},s=dV.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${io(r).slice(1)}`}async function pV(n){const e=await aV(n),t=Mt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:fV(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(n,"network-request-failed"),c=Mt().setTimeout(()=>{i(o)},cV.get());function u(){Mt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gV=500,_V=600,yV="_blank",IV="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wV(n,e,t,r=gV,s=_V){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...mV,width:r.toString(),height:s.toString(),top:i,left:o},l=Ce().toLowerCase();t&&(c=yy(l)?yV:t),gy(l)&&(e=e||IV,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,P])=>`${g}${w}=${P},`,"");if(jb(l)&&c!=="_self")return TV(e||"",c),new vp(null);const p=window.open(e||"",c,d);H(p,n,"popup-blocked");try{p.focus()}catch{}return new vp(p)}function TV(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="__/auth/handler",vV="emulator/auth/handler",AV=encodeURIComponent("fac");async function Ap(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Sy){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Po){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),l=u?`#${AV}=${encodeURIComponent(u)}`:"";return`${RV(n)}?${io(c).slice(1)}${l}`}function RV({config:n}){return n.emulator?Ah(n,vV):`https://${n.authDomain}/${EV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="webStorageSupport";class PV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oy,this._completeRedirectFn=JS,this._overrideRedirectResult=WS}async _openPopup(e,t,r,s){var o;on((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ap(e,t,r,Ku(),s);return wV(e,i,Vh())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ap(e,t,r,Ku(),s);return VS(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await pV(e),r=new XS(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hu,{type:hu},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[hu];i!==void 0&&t(!!i),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vy()||_y()||Ph()}}const bV=PV;var Rp="@firebase/auth",Pp="1.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CV(n){wr(new Ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ay(n)},l=new Qb(r,s,i,u);return sS(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wr(new Ln("auth-internal",e=>{const t=er(e.getProvider("auth").getImmediate());return(r=>new SV(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Rp,Pp,VV(n)),Nt(Rp,Pp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV=300,NV=Bp("authIdTokenMaxAge")||xV;let bp=null;const DV=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>NV)return;const s=t==null?void 0:t.token;bp!==s&&(bp=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AC(n=Ju()){const e=Os(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rS(n,{popupRedirectResolver:bV,persistence:[FS,PS,Oy]}),r=Bp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=DV(i.toString());vS(t,o,()=>o(t.currentUser)),ES(t,c=>o(c))}}const s=Mp("auth");return s&&iS(t,`http://${s}`),t}function kV(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Jb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",kV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CV("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firebasestorage.googleapis.com",OV="storageBucket",LV=120*1e3,MV=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends $t{constructor(e,t,r=0){super(du(e),`Firebase Storage: ${t} (${du(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qt||(qt={}));function du(n){return"storage/"+n}function FV(){const n="An unknown error occurred, please check the error payload for server response.";return new Gt(qt.UNKNOWN,n)}function UV(){return new Gt(qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BV(){return new Gt(qt.CANCELED,"User canceled the upload/download.")}function qV(n){return new Gt(qt.INVALID_URL,"Invalid URL '"+n+"'.")}function $V(n){return new Gt(qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Sp(n){return new Gt(qt.INVALID_ARGUMENT,n)}function zy(){return new Gt(qt.APP_DELETED,"The Firebase app was deleted.")}function jV(n){return new Gt(qt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=_t.makeFromUrl(e,t)}catch{return new _t(e,"")}if(r.path==="")return r;throw $V(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function l(Y){Y.path_=decodeURIComponent(Y.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},k=t===jy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",q=new RegExp(`^https?://${k}/${s}/${N}`,"i"),j=[{regex:c,indices:u,postModify:i},{regex:w,indices:P,postModify:l},{regex:q,indices:{bucket:1,path:2},postModify:l}];for(let Y=0;Y<j.length;Y++){const Z=j[Y],te=Z.regex.exec(e);if(te){const T=te[Z.indices.bucket];let _=te[Z.indices.path];_||(_=""),r=new _t(T,_),Z.postModify(r);break}}if(r==null)throw qV(e);return r}}class zV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let l=!1;function d(...N){l||(l=!0,e.apply(null,N))}function p(N){s=setTimeout(()=>{s=null,n(w,u())},N)}function g(){i&&clearTimeout(i)}function w(N,...q){if(l){g();return}if(N){g(),d.call(null,N,...q);return}if(u()||o){g(),d.call(null,N,...q);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let P=!1;function k(N){P||(P=!0,g(),!l&&(s!==null?(N||(c=2),clearTimeout(s),p(0)):N||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},t),k}function KV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(n){return n!==void 0}function Vp(n,e,t,r){if(r<e)throw Sp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sp(`Invalid value for '${n}'. Expected ${t} or less.`)}function HV(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var za;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(za||(za={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e,t,r,s,i,o,c,u,l,d,p,g=!0,w=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,k)=>{this.resolve_=P,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ea(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===za.NO_ERROR,u=i.getStatus();if(!c||QV(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===za.ABORT;r(!1,new ea(!1,null,d));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new ea(l,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());WV(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=FV();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?zy():BV();o(u)}else{const u=UV();o(u)}};this.canceled_?t(!1,new ea(!1,null,!0)):this.backoffId_=GV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ea{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function YV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function XV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function eC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tC(n,e,t,r,s,i,o=!0,c=!1){const u=HV(n.urlParams),l=n.url+u,d=Object.assign({},n.headers);return ZV(d,e),YV(d,t),XV(d,i),eC(d,r),new JV(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function rC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this._service=e,t instanceof _t?this._location=t:this._location=_t.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ga(e,t)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rC(this._location.path)}get storage(){return this._service}get parent(){const e=nC(this._location.path);if(e===null)return null;const t=new _t(this._location.bucket,e);return new Ga(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw jV(e)}}function Cp(n,e){const t=e==null?void 0:e[OV];return t==null?null:_t.makeFromBucketSpec(t,n)}function sC(n,e,t,r={}){n.host=`${e}:${t}`;const s=Nr(e);s&&Wa(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:$p(i,n.app.options.projectId))}class iC{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=jy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LV,this._maxUploadRetryTime=MV,this._requests=new Set,s!=null?this._bucket=_t.makeFromBucketSpec(s,this._host):this._bucket=Cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=Cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ga(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new zV(zy());{const o=tC(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const xp="@firebase/storage",Np="0.14.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="storage";function RC(n=Ju(),e){n=ce(n);const r=Os(n,Gy).getImmediate({identifier:e}),s=Fp("storage");return s&&oC(r,...s),r}function oC(n,e,t,r={}){sC(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new iC(t,r,s,e,Dr)}function cC(){wr(new Ln(Gy,aC,"PUBLIC").setMultipleInstances(!0)),Nt(xp,Np,""),Nt(xp,Np,"esm2020")}cC();export{IC as A,TC as B,wC as C,mb as D,EE as E,vE as F,hb as G,VP as H,FP as I,_C as J,ie as T,AC as a,RC as b,hP as c,dP as d,db as e,dE as f,lC as g,ob as h,Nw as i,TE as j,rb as k,yg as l,GP as m,SP as n,Gu as o,bP as p,vP as q,nb as r,zw as s,ub as t,lb as u,AE as v,AP as w,EC as x,yC as y,vC as z};
