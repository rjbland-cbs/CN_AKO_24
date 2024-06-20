"use strict";(self.webpackChunkAngularCliApplication=self.webpackChunkAngularCliApplication||[]).push([[429],{7435:(ce,Te,_e)=>{_e(8583),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(ve){let te=this;do{if(Element.prototype.matches.call(te,ve))return te;te=null!=te?te.parentElement||te.parentNode:null}while(null!==te&&1===te.nodeType);return null}),Element.prototype.remove||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},8583:()=>{
/**
       * @license Angular v15.1.0-next.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
!function(t){const n=t.performance;function i(M){n&&n.mark&&n.mark(M)}function o(M,T){n&&n.measure&&n.measure(M,T)}i("Zone");const c=t.__Zone_symbol_prefix||"__zone_symbol__";function a(M){return c+M}const y=!0===t[a("forceDuplicateZoneCheck")];if(t.Zone){if(y||"function"!=typeof t.Zone.__symbol__)throw new Error("Zone already loaded.");return t.Zone}let d=(()=>{class M{constructor(e,r){this._parent=e,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(t.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=M.current;for(;e.parent;)e=e.parent;return e}static get current(){return U.zone}static get currentTask(){return oe}static __load_patch(e,r,k=!1){if(se.hasOwnProperty(e)){if(!k&&y)throw Error("Already loaded patch: "+e)}else if(!t["__Zone_disable_"+e]){const C="Zone:"+e;i(C),se[e]=r(t,M,z),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(e){const r=this.getZoneWith(e);if(r)return r._properties[e]}getZoneWith(e){let r=this;for(;r;){if(r._properties.hasOwnProperty(e))return r;r=r._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,r){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const k=this._zoneDelegate.intercept(this,e,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(e,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,e,r,k,C)}finally{U=U.parent}}runGuarded(e,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,e,r,k,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{U=U.parent}}runTask(e,r,k){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===x&&(e.type===Q||e.type===w))return;const C=e.state!=E;C&&e._transitionTo(E,A),e.runCount++;const $=oe;oe=e,U={parent:U,zone:this};try{e.type==w&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{e.state!==x&&e.state!==h&&(e.type==Q||e.data&&e.data.isPeriodic?C&&e._transitionTo(A,E):(e.runCount=0,this._updateTaskCount(e,-1),C&&e._transitionTo(x,E,x))),U=U.parent,oe=$}}scheduleTask(e){if(e.zone&&e.zone!==this){let k=this;for(;k;){if(k===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);k=k.parent}}e._transitionTo(X,x);const r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(k){throw e._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==X&&e._transitionTo(A,X),e}scheduleMicroTask(e,r,k,C){return this.scheduleTask(new m(I,e,r,k,C,void 0))}scheduleMacroTask(e,r,k,C,$){return this.scheduleTask(new m(w,e,r,k,C,$))}scheduleEventTask(e,r,k,C,$){return this.scheduleTask(new m(Q,e,r,k,C,$))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===A||e.state===E){e._transitionTo(G,A,E);try{this._zoneDelegate.cancelTask(this,e)}catch(r){throw e._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(e,-1),e._transitionTo(x,G),e.runCount=0,e}}_updateTaskCount(e,r){const k=e._zoneDelegates;-1==r&&(e._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(e.type,r)}}return M.__symbol__=a,M})();const P={name:"",onHasTask:(M,T,e,r)=>M.hasTask(e,r),onScheduleTask:(M,T,e,r)=>M.scheduleTask(e,r),onInvokeTask:(M,T,e,r,k,C)=>M.invokeTask(e,r,k,C),onCancelTask:(M,T,e,r)=>M.cancelTask(e,r)};class v{constructor(T,e,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=e,this._forkZS=r&&(r&&r.onFork?r:e._forkZS),this._forkDlgt=r&&(r.onFork?e:e._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:e._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:e._interceptZS),this._interceptDlgt=r&&(r.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:e._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:e._invokeZS),this._invokeDlgt=r&&(r.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:e._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:e._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:e._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:e._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:e._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:e._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:e._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:e._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||e&&e._hasTaskZS)&&(this._hasTaskZS=k?r:P,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}fork(T,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,e):new d(T,e)}intercept(T,e,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,e,r):e}invoke(T,e,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,e,r,k,C):e.apply(r,k)}handleError(T,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,e)}scheduleTask(T,e){let r=e;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,e),r||(r=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=I)throw new Error("Task is missing scheduleFn.");R(e)}return r}invokeTask(T,e,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,e,r,k):e.callback.apply(r,k)}cancelTask(T,e){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");r=e.cancelFn(e)}return r}hasTask(T,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,e)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,e){const r=this._taskCounts,k=r[T],C=r[T]=k+e;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class m{constructor(T,e,r,k,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=e,this.data=k,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===Q&&k&&k.useG?m.invokeTask:function(){return m.invokeTask.call(t,l,this,arguments)}}static invokeTask(T,e,r){T||(T=this),ee++;try{return T.runCount++,T.zone.runTask(T,e,r)}finally{1==ee&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(T,e,r){if(this._state!==e&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const L=a("setTimeout"),Z=a("Promise"),N=a("then");let J,B=[],H=!1;function q(M){if(J||t[Z]&&(J=t[Z].resolve(0)),J){let T=J[N];T||(T=J.then),T.call(J,M)}else t[L](M,0)}function R(M){0===ee&&0===B.length&&q(_),M&&B.push(M)}function _(){if(!H){for(H=!0;B.length;){const M=B;B=[];for(let T=0;T<M.length;T++){const e=M[T];try{e.zone.runTask(e,null,null)}catch(r){z.onUnhandledError(r)}}}z.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",X="scheduling",A="scheduled",E="running",G="canceling",h="unknown",I="microTask",w="macroTask",Q="eventTask",se={},z={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new d(null,null)},oe=null,ee=0;function W(){}o("Zone","Zone"),t.Zone=d}(typeof window<"u"&&window||typeof self<"u"&&self||global);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ce=Object.getOwnPropertyDescriptor,Te=Object.defineProperty,_e=Object.getPrototypeOf,ke=Object.create,Ve=Array.prototype.slice,ve="addEventListener",te="removeEventListener",Ze=Zone.__symbol__(ve),Ne=Zone.__symbol__(te),ae="true",le="false",be=Zone.__symbol__("");function Ie(t,n){return Zone.current.wrap(t,n)}function Me(t,n,i,o,c){return Zone.current.scheduleMacroTask(t,n,i,o,c)}const j=Zone.__symbol__,Re=typeof window<"u",pe=Re?window:void 0,Y=Re&&pe||"object"==typeof self&&self||global;function Le(t,n){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=Ie(t[i],n+"_"+i));return t}function Fe(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),Ae=!Ce&&!Be&&!(!Re||!pe.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Be&&!(!Re||!pe.HTMLElement),Se={},We=function(t){if(!(t=t||Y.event))return;let n=Se[t.type];n||(n=Se[t.type]=j("ON_PROPERTY"+t.type));const i=this||t.target||Y,o=i[n];let c;if(Ae&&i===pe&&"error"===t.type){const a=t;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),!0===c&&t.preventDefault()}else c=o&&o.apply(this,arguments),null!=c&&!c&&t.preventDefault();return c};function qe(t,n,i){let o=ce(t,n);if(!o&&i&&ce(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=j("on"+n+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let P=Se[d];P||(P=Se[d]=j("ON_PROPERTY"+d)),o.set=function(v){let m=this;!m&&t===Y&&(m=Y),m&&("function"==typeof m[P]&&m.removeEventListener(d,We),y&&y.call(m,null),m[P]=v,"function"==typeof v&&m.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&t===Y&&(v=Y),!v)return null;const m=v[P];if(m)return m;if(a){let L=a.call(this);if(L)return o.set.call(this,L),"function"==typeof v.removeAttribute&&v.removeAttribute(n),L}return null},Te(t,n,o),t[c]=!0}function Xe(t,n,i){if(n)for(let o=0;o<n.length;o++)qe(t,"on"+n[o],i);else{const o=[];for(const c in t)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)qe(t,o[c],i)}}const re=j("originalInstance");function Pe(t){const n=Y[t];if(!n)return;Y[j(t)]=n,Y[t]=function(){const c=Le(arguments,t);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},fe(Y[t],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===t&&"responseBlob"===o||function(c){"function"==typeof i[c]?Y[t].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:Te(Y[t].prototype,c,{set:function(a){"function"==typeof a?(this[re][c]=Ie(a,t+"."+c),fe(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(Y[t][o]=n[o])}function ue(t,n,i){let o=t;for(;o&&!o.hasOwnProperty(n);)o=_e(o);!o&&t[n]&&(o=t);const c=j(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&ce(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},fe(o[n],a)}return a}function lt(t,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=ue(t,n,a=>function(y,d){const P=i(y,d);return P.cbIdx>=0&&"function"==typeof d[P.cbIdx]?Me(P.name,d[P.cbIdx],P,c):a.apply(y,d)})}function fe(t,n){t[j("OriginalDelegate")]=n}let ze=!1,je=!1;function ft(){if(ze)return je;ze=!0;try{const t=pe.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(je=!0)}catch{}return je}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Zone.__load_patch("ZoneAwarePromise",(t,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],P=!0===t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),m=y("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch{}}function B(l){return l&&l.then}function H(l){return l}function J(l){return e.reject(l)}const q=y("state"),R=y("value"),_=y("finally"),K=y("parentPromiseValue"),x=y("parentPromiseState"),A=null,E=!0,G=!1;function I(l,u){return s=>{try{z(l,u,s)}catch(f){z(l,!1,f)}}}const w=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},se=y("currentTaskTrace");function z(l,u,s){const f=w();if(l===s)throw new TypeError("Promise resolved with itself");if(l[q]===A){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(b){return f(()=>{z(l,!1,b)})(),l}if(u!==G&&s instanceof e&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==A)oe(s),z(l,s[q],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(b){f(()=>{z(l,!1,b)})()}else{l[q]=u;const b=l[R];if(l[R]=s,l[_]===_&&u===E&&(l[q]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const p=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;p&&c(s,se,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<b.length;)ee(l,b[p++],b[p++],b[p++],b[p++]);if(0==b.length&&u==G){l[q]=0;let p=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(S){p=S}P&&(p.throwOriginal=!0),p.rejection=s,p.promise=l,p.zone=n.current,p.task=n.currentTask,d.push(p),i.scheduleMicroTask()}}}return l}const U=y("rejectionHandledHandler");function oe(l){if(0===l[q]){try{const u=n[U];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch{}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){oe(l);const b=l[q],p=b?"function"==typeof f?f:H:"function"==typeof g?g:J;u.scheduleMicroTask("Promise.then",()=>{try{const S=l[R],D=!!s&&_===s[_];D&&(s[K]=S,s[x]=b);const O=u.run(p,void 0,D&&p!==J&&p!==H?[]:[S]);z(s,!0,O)}catch(S){z(s,!1,S)}},s)}const M=function(){},T=t.AggregateError;class e{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return z(new this(null),E,u)}static reject(u){return z(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let p of u)f++,s.push(e.resolve(p))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const b=[];return new e((p,S)=>{for(let D=0;D<s.length;D++)s[D].then(O=>{g||(g=!0,p(O))},O=>{b.push(O),f--,0===f&&(g=!0,S(new T(b,"All promises were rejected")))})})}static race(u){let s,f,g=new this((S,D)=>{s=S,f=D});function b(S){s(S)}function p(S){f(S)}for(let S of u)B(S)||(S=this.resolve(S)),S.then(b,p);return g}static all(u){return e.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof e?this:e).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,b=new this((O,V)=>{f=O,g=V}),p=2,S=0;const D=[];for(let O of u){B(O)||(O=this.resolve(O));const V=S;try{O.then(F=>{D[V]=s?s.thenCallback(F):F,p--,0===p&&f(D)},F=>{s?(D[V]=s.errorCallback(F),p--,0===p&&f(D)):g(F)})}catch(F){g(F)}p++,S++}return p-=2,0===p&&f(D),b}constructor(u){const s=this;if(!(s instanceof e))throw new Error("Must be an instanceof Promise.");s[q]=A,s[R]=[];try{const f=w();u&&u(f(I(s,E)),f(I(s,G)))}catch(f){z(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return e}then(u,s){var f;let g=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||e);const b=new g(M),p=n.current;return this[q]==A?this[R].push(p,b,u,s):ee(this,p,b,u,s),b}catch(u){return this.then(null,u)}finally(u){var s;let f=null===(s=this.constructor)||void 0===s?void 0:s[Symbol.species];(!f||"function"!=typeof f)&&(f=e);const g=new f(M);g[_]=_;const b=n.current;return this[q]==A?this[R].push(b,g,u,u):ee(this,b,g,u,u),g}}e.resolve=e.resolve,e.reject=e.reject,e.race=e.race,e.all=e.all;const r=t[v]=t.Promise;t.Promise=e;const k=y("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[m]=f,l.prototype.then=function(g,b){return new e((S,D)=>{f.call(this,S,D)}).then(g,b)},l[k]=!0}return i.patchThen=C,r&&(C(r),ue(t,"fetch",l=>function $(l){return function(u,s){let f=l.apply(u,s);if(f instanceof e)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,e}),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("toString",t=>{const n=Function.prototype.toString,i=j("OriginalDelegate"),o=j("Promise"),c=j("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const m=t[o];if(m)return n.call(m)}if(this===Error){const m=t[c];if(m)return n.call(m)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ye=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{ye=!1}const ht={useG:!0},ne={},Ye={},$e=new RegExp("^"+be+"(\\w+)(true|false)$"),Ke=j("propagationStopped");function Je(t,n){const i=(n?n(t):t)+le,o=(n?n(t):t)+ae,c=be+i,a=be+o;ne[t]={},ne[t][le]=c,ne[t][ae]=a}function dt(t,n,i,o){const c=o&&o.add||ve,a=o&&o.rm||te,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",P=j(c),v="."+c+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let X;"object"==typeof x&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(E){X=E}const A=R.options;return A&&"object"==typeof A&&A.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,A),X};function N(R,_,K){if(!(_=_||t.event))return;const x=R||_.target||t,X=x[ne[_.type][K?ae:le]];if(X){const A=[];if(1===X.length){const E=Z(X[0],x,_);E&&A.push(E)}else{const E=X.slice();for(let G=0;G<E.length&&(!_||!0!==_[Ke]);G++){const h=Z(E[G],x,_);h&&A.push(h)}}if(1===A.length)throw A[0];for(let E=0;E<A.length;E++){const G=A[E];n.nativeScheduleMicroTask(()=>{throw G})}}}const B=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function J(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let X=!0;_&&void 0!==_.chkDup&&(X=_.chkDup);let A=!1;_&&void 0!==_.rt&&(A=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=_e(E);if(!E&&R[c]&&(E=R),!E||E[P])return!1;const G=_&&_.eventNameToString,h={},I=E[P]=E[c],w=E[j(a)]=E[a],Q=E[j(y)]=E[y],se=E[j(d)]=E[d];let z;function U(s,f){return!ye&&"object"==typeof s&&s?!!s.capture:ye&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}_&&_.prepend&&(z=E[j(_.prepend)]=E[_.prepend]);const e=K?function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:B,h.options)}:function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=ne[s.eventName];let g;f&&(g=f[s.capture?ae:le]);const b=g&&s.target[g];if(b)for(let p=0;p<b.length;p++)if(b[p]===s){b.splice(p,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return w.call(s.target,s.eventName,s.capture?H:B,s.options)}:function(s){return w.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[j("UNPATCHED_EVENTS")],l=t[j("PASSIVE_EVENTS")],u=function(s,f,g,b,p=!1,S=!1){return function(){const D=this||t;let O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let V=arguments[1];if(!V)return s.apply(this,arguments);if(Ce&&"uncaughtException"===O)return s.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;const he=ye&&!!l&&-1!==l.indexOf(O),ie=U(arguments[2],he);if($)for(let Ee=0;Ee<$.length;Ee++)if(O===$[Ee])return he?s.call(D,O,V,ie):s.apply(this,arguments);const xe=!!ie&&("boolean"==typeof ie||ie.capture),nt=!(!ie||"object"!=typeof ie)&&ie.once,gt=Zone.current;let Ge=ne[O];Ge||(Je(O,G),Ge=ne[O]);const rt=Ge[xe?ae:le];let Oe,ge=D[rt],ot=!1;if(ge){if(ot=!0,X)for(let Ee=0;Ee<ge.length;Ee++)if(C(ge[Ee],V))return}else ge=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Oe=it[O]),Oe||(Oe=st+f+(G?G(O):O)),h.options=ie,nt&&(h.options.once=!1),h.target=D,h.capture=xe,h.eventName=O,h.isExisting=ot;const we=K?ht:void 0;we&&(we.taskData=h);const de=gt.scheduleEventTask(Oe,V,we,g,b);return h.target=null,we&&(we.taskData=null),nt&&(ie.once=!0),!ye&&"boolean"==typeof de.options||(de.options=ie),de.target=D,de.capture=xe,de.eventName=O,F&&(de.originalDelegate=V),S?ge.unshift(de):ge.push(de),p?D:void 0}};return E[c]=u(I,v,e,r,A),z&&(E.prependListener=u(z,".prependListener:",function(s){return z.call(h.target,h.eventName,s.invoke,h.options)},r,A,!0)),E[a]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],b=!!g&&("boolean"==typeof g||g.capture),p=arguments[1];if(!p)return w.apply(this,arguments);if(x&&!x(w,p,s,arguments))return;const S=ne[f];let D;S&&(D=S[b?ae:le]);const O=D&&s[D];if(O)for(let V=0;V<O.length;V++){const F=O[V];if(C(F,p))return O.splice(V,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,s[D]=null,"string"==typeof f)&&(s[be+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),A?s:void 0}return w.apply(this,arguments)},E[y]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],b=Qe(s,G?G(f):f);for(let p=0;p<b.length;p++){const S=b[p];g.push(S.originalDelegate?S.originalDelegate:S.callback)}return g},E[d]=function(){const s=this||t;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ne[f];if(g){const S=s[g[le]],D=s[g[ae]];if(S){const O=S.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(D){const O=D.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const g=Object.keys(s);for(let b=0;b<g.length;b++){const S=$e.exec(g[b]);let D=S&&S[1];D&&"removeListener"!==D&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(A)return this},fe(E[c],I),fe(E[a],w),se&&fe(E[d],se),Q&&fe(E[y],Q),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=J(i[R],o);return q}function Qe(t,n){if(!n){const a=[];for(let y in t){const d=$e.exec(y);let P=d&&d[1];if(P&&(!n||P===n)){const v=t[y];if(v)for(let m=0;m<v.length;m++)a.push(v[m])}}return a}let i=ne[n];i||(Je(n),i=ne[n]);const o=t[i[le]],c=t[i[ae]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(t,n){const i=t.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Ke]=!0,o&&o.apply(c,a)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Et(t,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,P,v){return P&&P.prototype&&c.forEach(function(m){const L=`${i}.${o}::`+m,Z=P.prototype;try{if(Z.hasOwnProperty(m)){const N=t.ObjectGetOwnPropertyDescriptor(Z,m);N&&N.value?(N.value=t.wrapWithCurrentZone(N.value,L),t._redefineProperty(P.prototype,m,N)):Z[m]&&(Z[m]=t.wrapWithCurrentZone(Z[m],L))}else Z[m]&&(Z[m]=t.wrapWithCurrentZone(Z[m],L))}catch{}}),y.call(n,d,P,v)},t.attachOriginToPatched(n[o],y)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function et(t,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===t);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(t,n,i,o){t&&Xe(t,et(t,n,i),o)}function He(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("util",(t,n,i)=>{const o=He(t);i.patchOnProperties=Xe,i.patchMethod=ue,i.bindArguments=Le,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");t[a]&&(t[c]=t[a]),t[c]&&(n[c]=n[a]=t[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=Te,i.ObjectGetOwnPropertyDescriptor=ce,i.ObjectCreate=ke,i.ArraySlice=Ve,i.patchClass=Pe,i.wrapWithCurrentZone=Ie,i.filterProperties=et,i.attachOriginToPatched=fe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:Ce,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:be,ADD_EVENT_LISTENER_STR:ve,REMOVE_EVENT_LISTENER_STR:te})});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const De=j("zoneTask");function me(t,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=c.apply(t,m.args),v}function P(v){return a.call(t,v.data.handleId)}c=ue(t,n+=o,v=>function(m,L){if("function"==typeof L[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?L[1]||0:void 0,args:L},N=L[0];L[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete y[Z.handleId]:Z.handleId&&(Z.handleId[De]=null))}};const B=Me(n,L[0],Z,d,P);if(!B)return B;const H=B.data.handleId;return"number"==typeof H?y[H]=B:H&&(H[De]=B),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(B.ref=H.ref.bind(H),B.unref=H.unref.bind(H)),"number"==typeof H||H?H:B}return v.apply(t,L)}),a=ue(t,i,v=>function(m,L){const Z=L[0];let N;"number"==typeof Z?N=y[Z]:(N=Z&&Z[De],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete y[Z]:Z&&(Z[De]=null),N.zone.cancelTask(N)):v.apply(t,L)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("legacy",t=>{const n=t[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(t,n,i)=>{i.patchMethod(t,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",t=>{const n="set",i="clear";me(t,n,i,"Timeout"),me(t,n,i,"Interval"),me(t,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",t=>{me(t,"request","cancel","AnimationFrame"),me(t,"mozRequest","mozCancel","AnimationFrame"),me(t,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(t,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ue(t,i[o],(a,y,d)=>function(P,v){return n.current.run(a,t,v,d)})}),Zone.__load_patch("EventTarget",(t,n,i)=>{(function mt(t,n){n.patchEventPrototype(t,n)})(t,i),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yt(t,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let P=0;P<i.length;P++){const v=i[P],Z=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=t.EventTarget;d&&d.prototype&&n.patchEventTarget(t,n,[d&&d.prototype])}(t,i);const o=t.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(t,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(t,n,i)=>{Pe("MutationObserver"),Pe("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(t,n,i)=>{Pe("IntersectionObserver")}),Zone.__load_patch("FileReader",(t,n,i)=>{Pe("FileReader")}),Zone.__load_patch("on_property",(t,n,i)=>{!function Tt(t,n){if(Ce&&!Ue||Zone[t.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const t=pe.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),_e(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,t)}),Zone.__load_patch("customElements",(t,n,i)=>{!function pt(t,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&t.customElements&&"customElements"in t&&n.patchCallbacks(n,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(t,i)}),Zone.__load_patch("XHR",(t,n)=>{!function P(v){const m=v.XMLHttpRequest;if(!m)return;const L=m.prototype;let N=L[Ze],B=L[Ne];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[Ze],B=I[Ne]}}const H="readystatechange",J="scheduled";function q(h){const I=h.data,w=I.target;w[a]=!1,w[d]=!1;const Q=w[c];N||(N=w[Ze],B=w[Ne]),Q&&B.call(w,H,Q);const se=w[c]=()=>{if(w.readyState===w.DONE)if(!I.aborted&&w[a]&&h.state===J){const U=w[n.__symbol__("loadfalse")];if(0!==w.status&&U&&U.length>0){const oe=h.invoke;h.invoke=function(){const ee=w[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!I.aborted&&h.state===J&&oe.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&!1===w[a]&&(w[d]=!0)};return N.call(w,H,se),w[i]||(w[i]=h),E.apply(w,I.args),w[a]=!0,h}function R(){}function _(h){const I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}const K=ue(L,"open",()=>function(h,I){return h[o]=0==I[2],h[y]=I[1],K.apply(h,I)}),X=j("fetchTaskAborting"),A=j("fetchTaskScheduling"),E=ue(L,"send",()=>function(h,I){if(!0===n.current[A]||h[o])return E.apply(h,I);{const w={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=Me("XMLHttpRequest.send",R,w,q,_);h&&!0===h[d]&&!w.aborted&&Q.state===J&&Q.invoke()}}),G=ue(L,"abort",()=>function(h,I){const w=function Z(h){return h[i]}(h);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===n.current[X])return G.apply(h,I)})}(t);const i=j("xhrTask"),o=j("xhrSync"),c=j("xhrListener"),a=j("xhrScheduled"),y=j("xhrURL"),d=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&function at(t,n){const i=t.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=t[c];if(a){if(!Fe(ce(t,c)))continue;t[c]=(d=>{const P=function(){return d.apply(this,Le(arguments,i+"."+c))};return fe(P,d),P})(a)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(t,n)=>{function i(o){return function(c){Qe(t,o).forEach(y=>{const d=t.PromiseRejectionEvent;if(d){const P=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(P)}})}}t.PromiseRejectionEvent&&(n[j("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[j("rejectionHandledHandler")]=i("rejectionhandled"))})}},ce=>{ce(ce.s=7435)}]);