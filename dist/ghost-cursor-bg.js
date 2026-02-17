var Kf={exports:{}},Do={};var v0;function fS(){if(v0)return Do;v0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var x0;function hS(){return x0||(x0=1,Kf.exports=fS()),Kf.exports}var A_=hS(),Qf={exports:{}},re={};var S0;function dS(){if(S0)return re;S0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,tt,mt){this.props=U,this.context=tt,this.refs=y,this.updater=mt||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function O(U,tt,mt){this.props=U,this.context=tt,this.refs=y,this.updater=mt||R}var L=O.prototype=new F;L.constructor=O,C(L,x.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(U,tt,mt){var Rt=mt.ref;return{$$typeof:o,type:U,key:tt,ref:Rt!==void 0?Rt:null,props:mt}}function w(U,tt){return A(U.type,tt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function st(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(mt){return tt[mt]})}var at=/\/+/g;function dt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?st(""+U.key):tt.toString(36)}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,tt,mt,Rt,It){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var et=!1;if(U===null)et=!0;else switch($){case"bigint":case"string":case"number":et=!0;break;case"object":switch(U.$$typeof){case o:case e:et=!0;break;case _:return et=U._init,N(et(U._payload),tt,mt,Rt,It)}}if(et)return It=It(U),et=Rt===""?"."+dt(U,0):Rt,B(It)?(mt="",et!=null&&(mt=et.replace(at,"$&/")+"/"),N(It,tt,mt,"",function(At){return At})):It!=null&&(X(It)&&(It=w(It,mt+(It.key==null||U&&U.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+et)),tt.push(It)),1;et=0;var Ct=Rt===""?".":Rt+":";if(B(U))for(var Ht=0;Ht<U.length;Ht++)Rt=U[Ht],$=Ct+dt(Rt,Ht),et+=N(Rt,tt,mt,$,It);else if(Ht=E(U),typeof Ht=="function")for(U=Ht.call(U),Ht=0;!(Rt=U.next()).done;)Rt=Rt.value,$=Ct+dt(Rt,Ht++),et+=N(Rt,tt,mt,$,It);else if($==="object"){if(typeof U.then=="function")return N(ct(U),tt,mt,Rt,It);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return et}function H(U,tt,mt){if(U==null)return U;var Rt=[],It=0;return N(U,Rt,"","",function($){return tt.call(mt,$,It++)}),Rt}function J(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(mt){(U._status===0||U._status===-1)&&(U._status=1,U._result=mt)},function(mt){(U._status===0||U._status===-1)&&(U._status=2,U._result=mt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var Mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:H,forEach:function(U,tt,mt){H(U,function(){tt.apply(this,arguments)},mt)},count:function(U){var tt=0;return H(U,function(){tt++}),tt},toArray:function(U){return H(U,function(tt){return tt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=v,re.Children=xt,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,tt,mt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=C({},U.props),It=U.key;if(tt!=null)for($ in tt.key!==void 0&&(It=""+tt.key),tt)!j.call(tt,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&tt.ref===void 0||(Rt[$]=tt[$]);var $=arguments.length-2;if($===1)Rt.children=mt;else if(1<$){for(var et=Array($),Ct=0;Ct<$;Ct++)et[Ct]=arguments[Ct+2];Rt.children=et}return A(U.type,It,Rt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,tt,mt){var Rt,It={},$=null;if(tt!=null)for(Rt in tt.key!==void 0&&($=""+tt.key),tt)j.call(tt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=tt[Rt]);var et=arguments.length-2;if(et===1)It.children=mt;else if(1<et){for(var Ct=Array(et),Ht=0;Ht<et;Ht++)Ct[Ht]=arguments[Ht+2];It.children=Ct}if(U&&U.defaultProps)for(Rt in et=U.defaultProps,et)It[Rt]===void 0&&(It[Rt]=et[Rt]);return A(U,$,It)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=X,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:J}},re.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},re.startTransition=function(U){var tt=P.T,mt={};P.T=mt;try{var Rt=U(),It=P.S;It!==null&&It(mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,Mt)}catch($){Mt($)}finally{tt!==null&&mt.types!==null&&(tt.types=mt.types),P.T=tt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(U){return P.H.use(U)},re.useActionState=function(U,tt,mt){return P.H.useActionState(U,tt,mt)},re.useCallback=function(U,tt){return P.H.useCallback(U,tt)},re.useContext=function(U){return P.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,tt){return P.H.useDeferredValue(U,tt)},re.useEffect=function(U,tt){return P.H.useEffect(U,tt)},re.useEffectEvent=function(U){return P.H.useEffectEvent(U)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(U,tt,mt){return P.H.useImperativeHandle(U,tt,mt)},re.useInsertionEffect=function(U,tt){return P.H.useInsertionEffect(U,tt)},re.useLayoutEffect=function(U,tt){return P.H.useLayoutEffect(U,tt)},re.useMemo=function(U,tt){return P.H.useMemo(U,tt)},re.useOptimistic=function(U,tt){return P.H.useOptimistic(U,tt)},re.useReducer=function(U,tt,mt){return P.H.useReducer(U,tt,mt)},re.useRef=function(U){return P.H.useRef(U)},re.useState=function(U){return P.H.useState(U)},re.useSyncExternalStore=function(U,tt,mt){return P.H.useSyncExternalStore(U,tt,mt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.4",re}var M0;function Ad(){return M0||(M0=1,Qf.exports=dS()),Qf.exports}var We=Ad(),Jf={exports:{}},Uo={},$f={exports:{}},th={};var y0;function pS(){return y0||(y0=1,(function(o){function e(N,H){var J=N.length;N.push(H);t:for(;0<J;){var Mt=J-1>>>1,xt=N[Mt];if(0<l(xt,H))N[Mt]=H,N[J]=xt,J=Mt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var H=N[0],J=N.pop();if(J!==H){N[0]=J;t:for(var Mt=0,xt=N.length,U=xt>>>1;Mt<U;){var tt=2*(Mt+1)-1,mt=N[tt],Rt=tt+1,It=N[Rt];if(0>l(mt,J))Rt<xt&&0>l(It,mt)?(N[Mt]=It,N[Rt]=J,Mt=Rt):(N[Mt]=mt,N[tt]=J,Mt=tt);else if(Rt<xt&&0>l(It,J))N[Mt]=It,N[Rt]=J,Mt=Rt;else break t}}return H}function l(N,H){var J=N.sortIndex-H.sortIndex;return J!==0?J:N.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,E=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=N)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function B(N){if(C=!1,L(N),!R)if(i(m)!==null)R=!0,I||(I=!0,st());else{var H=i(p);H!==null&&ct(B,H.startTime-N)}}var I=!1,P=-1,j=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<j)}function X(){if(y=!1,I){var N=o.unstable_now();A=N;var H=!0;try{t:{R=!1,C&&(C=!1,F(P),P=-1),E=!0;var J=S;try{e:{for(L(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,S=v.priorityLevel;var xt=Mt(v.expirationTime<=N);if(N=o.unstable_now(),typeof xt=="function"){v.callback=xt,L(N),H=!0;break e}v===i(m)&&r(m),L(N)}else r(m);v=i(m)}if(v!==null)H=!0;else{var U=i(p);U!==null&&ct(B,U.startTime-N),H=!1}}break t}finally{v=null,S=J,E=!1}H=void 0}}finally{H?st():I=!1}}}var st;if(typeof O=="function")st=function(){O(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=X,st=function(){dt.postMessage(null)}}else st=function(){x(X,0)};function ct(N,H){P=x(function(){N(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(N){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var J=S;S=H;try{return N()}finally{S=J}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=S;S=N;try{return H()}finally{S=J}},o.unstable_scheduleCallback=function(N,H,J){var Mt=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Mt+J:Mt):J=Mt,N){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=J+xt,N={id:_++,callback:H,priorityLevel:N,startTime:J,expirationTime:xt,sortIndex:-1},J>Mt?(N.sortIndex=J,e(p,N),i(m)===null&&N===i(p)&&(C?(F(P),P=-1):C=!0,ct(B,J-Mt))):(N.sortIndex=xt,e(m,N),R||E||(R=!0,I||(I=!0,st()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var H=S;return function(){var J=S;S=H;try{return N.apply(this,arguments)}finally{S=J}}}})(th)),th}var E0;function mS(){return E0||(E0=1,$f.exports=pS()),$f.exports}var eh={exports:{}},Dn={};var T0;function gS(){if(T0)return Dn;T0=1;var o=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var b0;function _S(){if(b0)return eh.exports;b0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=gS(),eh.exports}var A0;function vS(){if(A0)return Uo;A0=1;var o=mS(),e=Ad(),i=_S();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case O:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ct=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function U(t){return{current:t}}function tt(t){0>xt||(t.current=Mt[xt],Mt[xt]=null,xt--)}function mt(t,n){xt++,Mt[xt]=t.current,t.current=n}var Rt=U(null),It=U(null),$=U(null),et=U(null);function Ct(t,n){switch(mt($,n),mt(It,t),mt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gg(n),t=Vg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Rt),mt(Rt,t)}function Ht(){tt(Rt),tt(It),tt($)}function At(t){t.memoizedState!==null&&mt(et,t);var n=Rt.current,a=Vg(n,t.type);n!==a&&(mt(It,t),mt(Rt,a))}function le(t){It.current===t&&(tt(Rt),tt(It)),et.current===t&&(tt(et),Ao._currentValue=J)}var Ze,pe;function he(t){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+t+pe}var Me=!1;function ee(t,n){if(!t||Me)return"";Me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(lt){it=lt}t.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var z=g.split(`
`),Q=T.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===Q.length)for(s=z.length-1,u=Q.length-1;1<=s&&0<=u&&z[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==Q[u]){var ht=`
`+z[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{Me=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?he(a):""}function je(t,n){switch(t.tag){case 26:case 27:case 5:return he(t.type);case 16:return he("Lazy");case 13:return t.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return he("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=je(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Xe=Object.prototype.hasOwnProperty,me=o.unstable_scheduleCallback,Te=o.unstable_cancelCallback,Vt=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Tt=o.unstable_IdlePriority,Pt=o.log,Xt=o.unstable_setDisableYieldValue,St=null,Et=null;function Lt(t){if(typeof Pt=="function"&&Xt(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(St,t)}catch{}}var Ut=Math.clz32?Math.clz32:k,wt=Math.log,ue=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(wt(t)/ue|0)|0}var Ot=256,bt=262144,zt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=yt(s):(g&=T,g!==0?u=yt(g):a||(a=T&~t,a!==0&&(u=yt(a))))):(T=s&~f,T!==0?u=yt(T):g!==0?u=yt(g):a||(a=s&~t,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Ut(a),gt=1<<ht;T[ht]=0,z[ht]=-1;var it=Q[ht];if(it!==null)for(Q[ht]=null,ht=0;ht<it.length;ht++){var lt=it[ht];lt!==null&&(lt.lane&=-536870913)}a&=~gt}s!==0&&Jo(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Jo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ut(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Bs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ut(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function wr(t,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Is(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:f0(t.type))}function Di(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ii=Math.random().toString(36).slice(2),an="__reactFiber$"+ii,_n="__reactProps$"+ii,_i="__reactContainer$"+ii,Ur="__reactEvents$"+ii,Lr="__reactListeners$"+ii,$o="__reactHandles$"+ii,Hs="__reactResources$"+ii,$a="__reactMarker$"+ii;function Gs(t){delete t[an],delete t[_n],delete t[Ur],delete t[Lr],delete t[$o]}function va(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jg(t);t!==null;){if(a=t[an])return a;t=jg(t)}return n}t=a,a=t.parentNode}return null}function xa(t){if(t=t[an]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function tr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Sa(t){var n=t[Hs];return n||(n=t[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[$a]=!0}var q=new Set,ot={};function nt(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(ot[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Ft={};function kt(t){return Xe.call(Ft,t)?!0:Xe.call(Gt,t)?!1:Nt.test(t)?Ft[t]=!0:(Gt[t]=!0,!1)}function Yt(t,n,a){if(kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Zt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=De(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Ne(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=De(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function ie(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,$t(n)):a!=null?xn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$t(T):t.removeAttribute("name")}function ki(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ke(t)}function xn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ai(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pe(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Nr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&yn(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(t){return lv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var qu=null;function Yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Or=null,Pr=null;function Hd(t){var n=xa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[_n]||null;if(!u)throw Error(r(90));vn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ne(s)}break t;case"textarea":Pe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(t,!!a.multiple,n,!1)}}}var Zu=!1;function Gd(t,n,a){if(Zu)return t(n,a);Zu=!0;try{var s=t(n);return s}finally{if(Zu=!1,(Or!==null||Pr!==null)&&(Gl(),Or&&(n=Or,t=Pr,Pr=Or=null,Hd(n),t)))for(n=0;n<t.length;n++)Hd(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(qi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{ju=!1}var Ma=null,Ku=null,el=null;function Vd(){if(el)return el;var t,n=Ku,a=n.length,s,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return el=u.slice(t,1<s?1-s:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Xd(){return!1}function zn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:Xd,this.isPropagationStopped=Xd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=zn(er),ks=v({},er,{view:0,detail:0}),uv=zn(ks),Qu,Ju,Ws,rl=v({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Qu=t.screenX-Ws.screenX,Ju=t.screenY-Ws.screenY):Ju=Qu=0,Ws=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),kd=zn(rl),cv=v({},rl,{dataTransfer:0}),fv=zn(cv),hv=v({},ks,{relatedTarget:0}),$u=zn(hv),dv=v({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=zn(dv),mv=v({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gv=zn(mv),_v=v({},er,{data:0}),Wd=zn(_v),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Sv[t])?!!n[t]:!1}function tc(){return Mv}var yv=v({},ks,{key:function(t){if(t.key){var n=vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ev=zn(yv),Tv=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=zn(Tv),bv=v({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Av=zn(bv),Rv=v({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=zn(Rv),wv=v({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=zn(wv),Uv=v({},er,{newState:0,oldState:0}),Lv=zn(Uv),Nv=[9,13,27,32],ec=qi&&"CompositionEvent"in window,qs=null;qi&&"documentMode"in document&&(qs=document.documentMode);var Ov=qi&&"TextEvent"in window&&!qs,Yd=qi&&(!ec||qs&&8<qs&&11>=qs),Zd=" ",jd=!1;function Kd(t,n){switch(t){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Pv(t,n){switch(t){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(jd=!0,Zd);case"textInput":return t=n.data,t===Zd&&jd?null:t;default:return null}}function Fv(t,n){if(Fr)return t==="compositionend"||!ec&&Kd(t,n)?(t=Vd(),el=Ku=Ma=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yd&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bv[t.type]:n==="textarea"}function $d(t,n,a,s){Or?Pr?Pr.push(s):Pr=[s]:Or=s,n=Zl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ys=null,Zs=null;function zv(t){Pg(t,0)}function sl(t){var n=tr(t);if(Ne(n))return t}function tp(t,n){if(t==="change")return n}var ep=!1;if(qi){var nc;if(qi){var ic="oninput"in document;if(!ic){var np=document.createElement("div");np.setAttribute("oninput","return;"),ic=typeof np.oninput=="function"}nc=ic}else nc=!1;ep=nc&&(!document.documentMode||9<document.documentMode)}function ip(){Ys&&(Ys.detachEvent("onpropertychange",ap),Zs=Ys=null)}function ap(t){if(t.propertyName==="value"&&sl(Zs)){var n=[];$d(n,Zs,t,Yu(t)),Gd(zv,n)}}function Iv(t,n,a){t==="focusin"?(ip(),Ys=n,Zs=a,Ys.attachEvent("onpropertychange",ap)):t==="focusout"&&ip()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Zs)}function Gv(t,n){if(t==="click")return sl(n)}function Vv(t,n){if(t==="input"||t==="change")return sl(n)}function Xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:Xv;function js(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Xe.call(n,u)||!qn(t[u],n[u]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,n){var a=rp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function ac(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var kv=qi&&"documentMode"in document&&11>=document.documentMode,Br=null,rc=null,Ks=null,sc=!1;function up(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||Br==null||Br!==Kt(s)||(s=Br,"selectionStart"in s&&ac(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ks&&js(Ks,s)||(Ks=s,s=Zl(rc,"onSelect"),0<s.length&&(n=new al("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Br)))}function nr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},oc={},cp={};qi&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function ir(t){if(oc[t])return oc[t];if(!zr[t])return t;var n=zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cp)return oc[t]=n[a];return t}var fp=ir("animationend"),hp=ir("animationiteration"),dp=ir("animationstart"),Wv=ir("transitionrun"),qv=ir("transitionstart"),Yv=ir("transitioncancel"),pp=ir("transitionend"),mp=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function xi(t,n){mp.set(t,n),nt(n,[t])}var ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Ir=0,uc=0;function ll(){for(var t=Ir,n=uc=Ir=0;n<t;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&gp(a,u,f)}}function ul(t,n,a,s){ri[Ir++]=t,ri[Ir++]=n,ri[Ir++]=a,ri[Ir++]=s,uc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function cc(t,n,a,s){return ul(t,n,a,s),cl(t)}function ar(t,n){return ul(t,null,null,n),cl(t)}function gp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ut(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<xo)throw xo=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hr={};function Zv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new Zv(t,n,a,s)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function fl(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")fc(t)&&(g=1);else if(typeof t=="string")g=$x(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=Yn(31,a,n,u),t.elementType=A,t.lanes=f,t;case C:return rr(a.children,u,f,n);case y:g=8,u|=24;break;case x:return t=Yn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=Yn(13,a,n,u),t.elementType=B,t.lanes=f,t;case I:return t=Yn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case F:g=9;break t;case L:g=11;break t;case P:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function rr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function hc(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function vp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function dc(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},xp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Gr=[],Vr=0,hl=null,Qs=0,oi=[],li=0,ya=null,Ui=1,Li="";function Zi(t,n){Gr[Vr++]=Qs,Gr[Vr++]=hl,hl=t,Qs=n}function Sp(t,n,a){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ya,ya=t;var s=Ui;t=Li;var u=32-Ut(s)-1;s&=~(1<<u),a+=1;var f=32-Ut(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ui=1<<32-Ut(n)+u|a<<u|s,Li=f+t}else Ui=1<<f|a<<u|s,Li=t}function pc(t){t.return!==null&&(Zi(t,1),Sp(t,1,0))}function mc(t){for(;t===hl;)hl=Gr[--Vr],Gr[Vr]=null,Qs=Gr[--Vr],Gr[Vr]=null;for(;t===ya;)ya=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function Mp(t,n){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ya,Ui=n.id,Li=n.overflow,ya=t}var En=null,qe=null,ye=!1,Ea=null,ui=!1,gc=Error(r(519));function Ta(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(si(n,t)),gc}function yp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[_n]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)_e(Mo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),ki(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Sn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ig(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ta(t,!0)}function Ep(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:En=En.return}}function Xr(t){if(t!==En)return!1;if(!ye)return Ep(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ta(t),Ep(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=Zg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=Zg(t)}else n===27?(n=qe,za(t.type)?(t=Hf,Hf=null,qe=t):qe=n):qe=En?fi(t.stateNode.nextSibling):null;return!0}function sr(){qe=En=null,ye=!1}function _c(){var t=Ea;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Ea=null),t}function Js(t){Ea===null?Ea=[t]:Ea.push(t)}var vc=U(null),or=null,ji=null;function ba(t,n,a){mt(vc,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=vc.current,tt(vc)}function xc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Sc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),xc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function kr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;qn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===et.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}u=u.return}t!==null&&Sc(n,t,a,s),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Tp(or,t)}function pl(t,n){return or===null&&lr(t),Tp(t,n)}function Tp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Kv=o.unstable_scheduleCallback,Qv=o.unstable_NormalPriority,rn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mc(){return{controller:new jv,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&Kv(Qv,function(){t.controller.abort()})}var to=null,yc=0,Wr=0,qr=null;function Jv(t,n){if(to===null){var a=to=[];yc=0,Wr=Af(),qr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yc++,n.then(bp,bp),n}function bp(){if(--yc===0&&to!==null){qr!==null&&(qr.status="fulfilled");var t=to;to=null,Wr=0,qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $v(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ap=N.S;N.S=function(t,n){ug=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jv(t,n),Ap!==null&&Ap(t,n)};var ur=U(null);function Ec(){var t=ur.current;return t!==null?t:Ve.pooledCache}function ml(t,n){n===null?mt(ur,ur.current):mt(ur,n.pool)}function Rp(){var t=Ec();return t===null?null:{parent:rn._currentValue,pool:t}}var Yr=Error(r(460)),Tc=Error(r(474)),gl=Error(r(542)),_l={then:function(){}};function Cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Up(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Up(t),t}throw fr=n,Yr}}function cr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,Yr):a}}var fr=null;function Dp(){if(fr===null)throw Error(r(459));var t=fr;return fr=null,t}function Up(t){if(t===Yr||t===gl)throw Error(r(483))}var Zr=null,eo=0;function vl(t){var n=eo;return eo+=1,Zr===null&&(Zr=[]),wp(Zr,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lp(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Yi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,K,pt){return V===null||V.tag!==6?(V=hc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function z(Y,V,K,pt){var Qt=K.type;return Qt===C?ht(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&cr(Qt)===V.type)?(V=u(V,K.props),no(V,K),V.return=Y,V):(V=fl(K.type,K.key,K.props,null,Y.mode,pt),no(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=dc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function ht(Y,V,K,pt,Qt){return V===null||V.tag!==7?(V=rr(K,Y.mode,pt,Qt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function gt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=hc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=fl(V.type,V.key,V.props,null,Y.mode,K),no(K,V),K.return=Y,K;case R:return V=dc(V,Y.mode,K),V.return=Y,V;case j:return V=cr(V),gt(Y,V,K)}if(ct(V)||st(V))return V=rr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,vl(V),K);if(V.$$typeof===O)return gt(Y,pl(Y,V),K);xl(Y,V)}return null}function it(Y,V,K,pt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:T(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?z(Y,V,K,pt):null;case R:return K.key===Qt?Q(Y,V,K,pt):null;case j:return K=cr(K),it(Y,V,K,pt)}if(ct(K)||st(K))return Qt!==null?null:ht(Y,V,K,pt,null);if(typeof K.then=="function")return it(Y,V,vl(K),pt);if(K.$$typeof===O)return it(Y,V,pl(Y,K),pt);xl(Y,K)}return null}function lt(Y,V,K,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(V,Y,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?K:pt.key)||null,z(V,Y,pt,Qt);case R:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Qt);case j:return pt=cr(pt),lt(Y,V,K,pt,Qt)}if(ct(pt)||st(pt))return Y=Y.get(K)||null,ht(V,Y,pt,Qt,null);if(typeof pt.then=="function")return lt(Y,V,K,vl(pt),Qt);if(pt.$$typeof===O)return lt(Y,V,K,pl(V,pt),Qt);xl(V,pt)}return null}function Wt(Y,V,K,pt){for(var Qt=null,Re=null,jt=V,ce=V=0,xe=null;jt!==null&&ce<K.length;ce++){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Ce=it(Y,jt,K[ce],pt);if(Ce===null){jt===null&&(jt=xe);break}t&&jt&&Ce.alternate===null&&n(Y,jt),V=f(Ce,V,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,jt=xe}if(ce===K.length)return a(Y,jt),ye&&Zi(Y,ce),Qt;if(jt===null){for(;ce<K.length;ce++)jt=gt(Y,K[ce],pt),jt!==null&&(V=f(jt,V,ce),Re===null?Qt=jt:Re.sibling=jt,Re=jt);return ye&&Zi(Y,ce),Qt}for(jt=s(jt);ce<K.length;ce++)xe=lt(jt,Y,ce,K[ce],pt),xe!==null&&(t&&xe.alternate!==null&&jt.delete(xe.key===null?ce:xe.key),V=f(xe,V,ce),Re===null?Qt=xe:Re.sibling=xe,Re=xe);return t&&jt.forEach(function(Xa){return n(Y,Xa)}),ye&&Zi(Y,ce),Qt}function te(Y,V,K,pt){if(K==null)throw Error(r(151));for(var Qt=null,Re=null,jt=V,ce=V=0,xe=null,Ce=K.next();jt!==null&&!Ce.done;ce++,Ce=K.next()){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Xa=it(Y,jt,Ce.value,pt);if(Xa===null){jt===null&&(jt=xe);break}t&&jt&&Xa.alternate===null&&n(Y,jt),V=f(Xa,V,ce),Re===null?Qt=Xa:Re.sibling=Xa,Re=Xa,jt=xe}if(Ce.done)return a(Y,jt),ye&&Zi(Y,ce),Qt;if(jt===null){for(;!Ce.done;ce++,Ce=K.next())Ce=gt(Y,Ce.value,pt),Ce!==null&&(V=f(Ce,V,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return ye&&Zi(Y,ce),Qt}for(jt=s(jt);!Ce.done;ce++,Ce=K.next())Ce=lt(jt,Y,ce,Ce.value,pt),Ce!==null&&(t&&Ce.alternate!==null&&jt.delete(Ce.key===null?ce:Ce.key),V=f(Ce,V,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return t&&jt.forEach(function(cS){return n(Y,cS)}),ye&&Zi(Y,ce),Qt}function Ge(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(Y,V.sibling),pt=u(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&cr(Qt)===V.type){a(Y,V.sibling),pt=u(V,K.props),no(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===C?(pt=rr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=fl(K.type,K.key,K.props,null,Y.mode,pt),no(pt,K),pt.return=Y,Y=pt)}return g(Y);case R:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=u(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=dc(K,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case j:return K=cr(K),Ge(Y,V,K,pt)}if(ct(K))return Wt(Y,V,K,pt);if(st(K)){if(Qt=st(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),te(Y,V,K,pt)}if(typeof K.then=="function")return Ge(Y,V,vl(K),pt);if(K.$$typeof===O)return Ge(Y,V,pl(Y,K),pt);xl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=hc(K,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,V)}return function(Y,V,K,pt){try{eo=0;var Qt=Ge(Y,V,K,pt);return Zr=null,Qt}catch(jt){if(jt===Yr||jt===gl)throw jt;var Re=Yn(29,jt,null,Y.mode);return Re.lanes=pt,Re.return=Y,Re}}}var hr=Lp(!0),Np=Lp(!1),Aa=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=cl(t),gp(t,null,a),n}return ul(t,s,n,a),cl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bs(t,a)}}function Rc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cc=!1;function ao(){if(Cc){var t=qr;if(t!==null)throw t}}function ro(t,n,a,s){Cc=!1;var u=t.updateQueue;Aa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,Q=z.next;z.next=null,g===null?f=Q:g.next=Q,g=z;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==g&&(T===null?ht.firstBaseUpdate=Q:T.next=Q,ht.lastBaseUpdate=z))}if(f!==null){var gt=u.baseState;g=0,ht=Q=z=null,T=f;do{var it=T.lane&-536870913,lt=it!==T.lane;if(lt?(ve&it)===it:(s&it)===it){it!==0&&it===Wr&&(Cc=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Wt=t,te=T;it=n;var Ge=a;switch(te.tag){case 1:if(Wt=te.payload,typeof Wt=="function"){gt=Wt.call(Ge,gt,it);break t}gt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=te.payload,it=typeof Wt=="function"?Wt.call(Ge,gt,it):Wt,it==null)break t;gt=v({},gt,it);break t;case 2:Aa=!0}}it=T.callback,it!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(Q=ht=lt,z=gt):ht=ht.next=lt,g|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(z=gt),u.baseState=z,u.firstBaseUpdate=Q,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Na|=g,t.lanes=g,t.memoizedState=gt}}function Op(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Op(a[t],n)}var jr=U(null),Sl=U(0);function Fp(t,n){t=ra,mt(Sl,t),mt(jr,n),ra=t|n.baseLanes}function wc(){mt(Sl,ra),mt(jr,jr.current)}function Dc(){ra=Sl.current,tt(jr),tt(Sl)}var Zn=U(null),ci=null;function wa(t){var n=t.alternate;mt(tn,tn.current&1),mt(Zn,t),ci===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(ci=t)}function Uc(t){mt(tn,tn.current),mt(Zn,t),ci===null&&(ci=t)}function Bp(t){t.tag===22?(mt(tn,tn.current),mt(Zn,t),ci===null&&(ci=t)):Da()}function Da(){mt(tn,tn.current),mt(Zn,Zn.current)}function jn(t){tt(Zn),ci===t&&(ci=null),tt(tn)}var tn=U(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,oe=null,Ie=null,sn=null,yl=!1,Kr=!1,dr=!1,El=0,so=0,Qr=null,tx=0;function Je(){throw Error(r(321))}function Lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Nc(t,n,a,s,u,f){return Qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Sm:Zc,dr=!1,f=a(s,u),dr=!1,Kr&&(f=Ip(n,a,s,u)),zp(t),f}function zp(t){N.H=uo;var n=Ie!==null&&Ie.next!==null;if(Qi=0,sn=Ie=oe=null,yl=!1,so=0,Qr=null,n)throw Error(r(300));t===null||on||(t=t.dependencies,t!==null&&dl(t)&&(on=!0))}function Ip(t,n,a,s){oe=t;var u=0;do{if(Kr&&(Qr=null),so=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,sn=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Mm,f=n(a,s)}while(Kr);return f}function ex(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(oe.flags|=1024),n}function Oc(){var t=El!==0;return El=0,t}function Pc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fc(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}Qi=0,sn=Ie=oe=null,Kr=!1,so=El=0,Qr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?oe.memoizedState=sn=t:sn=sn.next=t,sn}function en(){if(Ie===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=sn===null?oe.memoizedState:sn.next;if(n!==null)sn=n,Ie=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},sn===null?oe.memoizedState=sn=t:sn=sn.next=t}return sn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,Qr===null&&(Qr=[]),t=wp(Qr,t,n),n=oe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Sm:Zc),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===O)return Tn(t)}throw Error(r(438,String(t)))}function Bc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=en();return zc(n,Ie,t)}function zc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,z=null,Q=n,ht=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(ve&gt)===gt:(Qi&gt)===gt){var it=Q.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===Wr&&(ht=!0);else if((Qi&it)===it){Q=Q.next,it===Wr&&(ht=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(T=z=gt,g=f):z=z.next=gt,oe.lanes|=it,Na|=it;gt=Q.action,dr&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else it={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(T=z=it,g=f):z=z.next=it,oe.lanes|=gt,Na|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?g=f:z.next=T,!qn(f,t.memoizedState)&&(on=!0,ht&&(a=qr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ic(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(t,n,a){var s=oe,u=en(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!qn((Ie||u).memoizedState,a);if(g&&(u.memoizedState=a,on=!0),u=u.queue,Vc(Xp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Jr(9,{destroy:void 0},Vp.bind(null,s,u,a,n),null),Ve===null)throw Error(r(349));f||(Qi&127)!==0||Gp(s,n,a)}return a}function Gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Tl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vp(t,n,a,s){n.value=a,n.getSnapshot=s,kp(n)&&Wp(t)}function Xp(t,n,a){return a(function(){kp(n)&&Wp(t)})}function kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Wp(t){var n=ar(t,2);n!==null&&Xn(n,t,2)}function Hc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),dr){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function qp(t,n,a,s){return t.baseState=a,zc(t,Ie,typeof s=="function"?s:Ji)}function nx(t,n,a,s,u){if(wl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var T=a(u,s),z=N.S;z!==null&&z(g,T),Zp(t,n,T)}catch(Q){Gc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,s),Zp(t,n,f)}catch(Q){Gc(t,n,Q)}}function Zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){jp(t,n,s)},function(s){return Gc(t,n,s)}):jp(t,n,a)}function jp(t,n,a){n.status="fulfilled",n.value=a,Kp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Yp(t,a)))}function Gc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}t.action=null}function Kp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qp(t,n){return n}function Jp(t,n){if(ye){var a=Ve.formState;if(a!==null){t:{var s=oe;if(ye){if(qe){e:{for(var u=qe,f=ui;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=fi(u.nextSibling),s=u.data==="F!";break t}}Ta(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,oe,s),s.dispatch=a,s=Hc(!1),f=Yc.bind(null,oe,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=nx.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function $p(t){var n=en();return tm(n,Ie,t)}function tm(t,n,a){if(n=zc(t,n,Qp)[0],t=Al(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=oo(n)}catch(g){throw g===Yr?gl:g}else s=n;n=en();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Jr(9,{destroy:void 0},ix.bind(null,u,a),null)),[s,f,t]}function ix(t,n){t.action=n}function em(t){var n=en(),a=Ie;if(a!==null)return tm(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Jr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Tl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function nm(){return en().memoizedState}function Rl(t,n,a,s){var u=On();oe.flags|=t,u.memoizedState=Jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cl(t,n,a,s){var u=en();s=s===void 0?null:s;var f=u.memoizedState.inst;Ie!==null&&s!==null&&Lc(s,Ie.memoizedState.deps)?u.memoizedState=Jr(n,f,a,s):(oe.flags|=t,u.memoizedState=Jr(1|n,f,a,s))}function im(t,n){Rl(8390656,8,t,n)}function Vc(t,n){Cl(2048,8,t,n)}function ax(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Tl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function am(t){var n=en().memoizedState;return ax({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function rm(t,n){return Cl(4,2,t,n)}function sm(t,n){return Cl(4,4,t,n)}function om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lm(t,n,a){a=a!=null?a.concat([t]):null,Cl(4,4,om.bind(null,n,t),a)}function Xc(){}function um(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function cm(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lc(n,s[1]))return s[0];if(s=t(),dr){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[s,n],s}function kc(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=fg(),oe.lanes|=t,Na|=t,a)}function fm(t,n,a,s){return qn(a,n)?a:jr.current!==null?(t=kc(t,a,s),qn(t,n)||(on=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(ve&261930)===0?(on=!0,t.memoizedState=a):(t=fg(),oe.lanes|=t,Na|=t,n)}function hm(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var g=N.T,T={};N.T=T,Yc(t,!1,n,a);try{var z=u(),Q=N.S;if(Q!==null&&Q(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=$v(z,s);lo(t,n,ht,Jn(t))}else lo(t,n,s,Jn(t))}catch(gt){lo(t,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{H.p=f,g!==null&&T.types!==null&&(g.types=T.types),N.T=g}}function rx(){}function Wc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=dm(t).queue;hm(t,u,n,J,a===null?rx:function(){return pm(t),a(s)})}function dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function pm(t){var n=dm(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},Jn())}function qc(){return Tn(Ao)}function mm(){return en().memoizedState}function gm(){return en().memoizedState}function sx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ra(a);var s=Ca(n,t,a);s!==null&&(Xn(s,n,a),io(s,n,a)),n={cache:Mc()},t.payload=n;return}n=n.return}}function ox(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?vm(n,a):(a=cc(t,n,a,s),a!==null&&(Xn(a,t,s),xm(a,n,s)))}function _m(t,n,a){var s=Jn();lo(t,n,a,s)}function lo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))vm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,g))return ul(t,n,u,0),Ve===null&&ll(),!1}catch{}if(a=cc(t,n,u,s),a!==null)return Xn(a,t,s),xm(a,n,s),!0}return!1}function Yc(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(r(479))}else n=cc(t,a,s,2),n!==null&&Xn(n,t,2)}function wl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function vm(t,n){Kr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bs(t,a)}}var uo={readContext:Tn,use:bl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};uo.useEffectEvent=Je;var Sm={readContext:Tn,use:bl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Rl(4194308,4,om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Rl(4194308,4,t,n)},useInsertionEffect:function(t,n){Rl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(dr){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(dr){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=ox.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Hc(t);var n=t.queue,a=_m.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xc,useDeferredValue:function(t,n){var a=On();return kc(a,t,n)},useTransition:function(){var t=Hc(!1);return t=hm.bind(null,oe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=On();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||Gp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,im(Xp.bind(null,s,f,t),[t]),s.flags|=2048,Jr(9,{destroy:void 0},Vp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ve.identifierPrefix;if(ye){var a=Li,s=Ui;a=(s&~(1<<32-Ut(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qc,useFormState:Jp,useActionState:Jp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bc,useCacheRefresh:function(){return On().memoizedState=sx.bind(null,oe)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zc={readContext:Tn,use:bl,useCallback:um,useContext:Tn,useEffect:Vc,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Al,useRef:nm,useState:function(){return Al(Ji)},useDebugValue:Xc,useDeferredValue:function(t,n){var a=en();return fm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Al(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:qc,useFormState:$p,useActionState:$p,useOptimistic:function(t,n){var a=en();return qp(a,Ie,t,n)},useMemoCache:Bc,useCacheRefresh:gm};Zc.useEffectEvent=am;var Mm={readContext:Tn,use:bl,useCallback:um,useContext:Tn,useEffect:Vc,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:cm,useReducer:Ic,useRef:nm,useState:function(){return Ic(Ji)},useDebugValue:Xc,useDeferredValue:function(t,n){var a=en();return Ie===null?kc(a,t,n):fm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Ic(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:qc,useFormState:em,useActionState:em,useOptimistic:function(t,n){var a=en();return Ie!==null?qp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bc,useCacheRefresh:gm};Mm.useEffectEvent=am;function jc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Kc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=Ra(s);u.payload=n,a!=null&&(u.callback=a),n=Ca(t,u,s),n!==null&&(Xn(n,t,s),io(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=Ra(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ca(t,u,s),n!==null&&(Xn(n,t,s),io(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=Ra(a);s.tag=2,n!=null&&(s.callback=n),n=Ca(t,s,a),n!==null&&(Xn(n,t,a),io(n,t,a))}};function ym(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!js(a,s)||!js(u,f):!0}function Em(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Kc.enqueueReplaceState(n,n.state,null)}function pr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Tm(t){ol(t)}function bm(t){console.error(t)}function Am(t){ol(t)}function Dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Rm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qc(t,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(t,n)},a}function Cm(t){return t=Ra(t),t.tag=3,t}function wm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Rm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Rm(n,a,s),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function lx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Vl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,u)),!1;case 22:return a.flags|=65536,s===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,u)),!1}throw Error(r(435,a.tag))}return Ef(t,s,u),Vl(),!1}if(ye)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==gc&&(t=Error(r(422),{cause:s}),Js(si(t,a)))):(s!==gc&&(n=Error(r(423),{cause:s}),Js(si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=si(s,a),u=Qc(t.stateNode,s,u),Rc(t,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),vo===null?vo=[f]:vo.push(f),$e!==4&&($e=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Qc(a.stateNode,s,t),Rc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Oa===null||!Oa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Cm(u),wm(u,t,a,s),Rc(a,u),!1}a=a.return}while(a!==null);return!1}var Jc=Error(r(461)),on=!1;function bn(t,n,a,s){n.child=t===null?Np(n,null,a,s):hr(n,t.child,a,s)}function Dm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return lr(n),s=Nc(t,n,a,g,f,u),T=Oc(),t!==null&&!on?(Pc(t,n,u),$i(t,n,u)):(ye&&T&&pc(n),n.flags|=1,bn(t,n,s,u),n.child)}function Um(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lm(t,n,f,s,u)):(t=fl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(g,s)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=Yi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Lm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(js(f,s)&&t.ref===n.ref)if(on=!1,n.pendingProps=s=f,of(t,u))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,$i(t,n,u)}return $c(t,n,a,s,u)}function Nm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Om(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Fp(n,f):wc(),Bp(n);else return s=n.lanes=536870912,Om(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ml(n,f.cachePool),Fp(n,f),Da(),n.memoizedState=null):(t!==null&&ml(n,null),wc(),Da());return bn(t,n,u,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Om(t,n,a,s,u){var f=Ec();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ml(n,null),wc(),Bp(n),t!==null&&kr(t,n,s,!0),n.childLanes=u,null}function Ul(t,n){return n=Nl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Pm(t,n,a){return hr(n,t.child,null,a),t=Ul(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function ux(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(s.mode==="hidden")return t=Ul(n,s),n.lanes=536870912,co(null,t);if(Uc(n),(t=qe)?(t=Yg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,En=n,qe=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Ul(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Uc(n),u)if(n.flags&256)n.flags&=-257,n=Pm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||kr(t,n,a,!1),u=(a&t.childLanes)!==0,on||u){if(s=Ve,s!==null&&(g=wr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ar(t,g),Xn(s,t,g),Jc;Vl(),n=Pm(t,n,a)}else t=f.treeContext,qe=fi(g.nextSibling),En=n,ye=!0,Ea=null,ui=!1,t!==null&&Mp(n,t),n=Ul(n,s),n.flags|=4096;return n}return t=Yi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $c(t,n,a,s,u){return lr(n),a=Nc(t,n,a,s,void 0,u),s=Oc(),t!==null&&!on?(Pc(t,n,u),$i(t,n,u)):(ye&&s&&pc(n),n.flags|=1,bn(t,n,a,u),n.child)}function Fm(t,n,a,s,u,f){return lr(n),n.updateQueue=null,a=Ip(n,s,a,u),zp(t),s=Oc(),t!==null&&!on?(Pc(t,n,f),$i(t,n,f)):(ye&&s&&pc(n),n.flags|=1,bn(t,n,a,f),n.child)}function Bm(t,n,a,s,u){if(lr(n),n.stateNode===null){var f=Hr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Kc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Hr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(jc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Kc.enqueueReplaceState(f,f.state,null),ro(n,s,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,z=pr(a,T);f.props=z;var Q=f.context,ht=a.contextType;g=Hr,typeof ht=="object"&&ht!==null&&(g=Tn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&Em(n,f,s,g),Aa=!1;var it=n.memoizedState;f.state=it,ro(n,s,f,u),ao(),Q=n.memoizedState,T||it!==Q||Aa?(typeof gt=="function"&&(jc(n,a,gt,s),Q=n.memoizedState),(z=Aa||ym(n,a,z,s,it,Q,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ac(t,n),g=n.memoizedProps,ht=pr(a,g),f.props=ht,gt=n.pendingProps,it=f.context,Q=a.contextType,z=Hr,typeof Q=="object"&&Q!==null&&(z=Tn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||it!==z)&&Em(n,f,s,z),Aa=!1,it=n.memoizedState,f.state=it,ro(n,s,f,u),ao();var lt=n.memoizedState;g!==gt||it!==lt||Aa||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof T=="function"&&(jc(n,a,T,s),lt=n.memoizedState),(ht=Aa||ym(n,a,ht,s,it,lt,z)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=z,s=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ll(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=hr(n,t.child,null,u),n.child=hr(n,null,a,u)):bn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=$i(t,n,u),t}function zm(t,n,a,s){return sr(),n.flags|=256,bn(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Rp()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Im(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?wa(n):Da(),(t=qe)?(t=Yg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ya!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,En=n,qe=null)):t=null,t===null)throw Ta(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Da(),u=n.mode,T=Nl({mode:"hidden",children:T},u),s=rr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,co(null,s)):(wa(n),af(n,T))}var z=t.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Da(),n.child=t.child,n.flags|=128,n=null):(Da(),T=s.fallback,u=n.mode,s=Nl({mode:"visible",children:s.children},u),T=rr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,n=co(null,s));else if(wa(n),If(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Js({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(on||kr(t,n,a,!1),g=(a&t.childLanes)!==0,on||g){if(g=Ve,g!==null&&(s=wr(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,ar(t,s),Xn(g,t,s),Jc;zf(T)||Vl(),n=rf(t,n,a)}else zf(T)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,qe=fi(T.nextSibling),En=n,ye=!0,Ea=null,ui=!1,t!==null&&Mp(n,t),n=af(n,s.children),n.flags|=4096);return n}return u?(Da(),T=s.fallback,u=n.mode,z=t.child,Q=z.sibling,s=Yi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,Q!==null?T=Yi(Q,T):(T=rr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,co(null,s),s=n.child,T=t.child.memoizedState,T===null?T=ef(a):(u=T.cachePool,u!==null?(z=rn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Rp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=nf(t,g,a),n.memoizedState=tf,co(t.child,s)):(wa(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return hr(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Hm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xc(t.return,n,a)}function sf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Gm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,mt(tn,g),bn(t,n,s,a),s=ye?Qs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,a,n);else if(t.tag===19)Hm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(kr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function cx(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ba(n,rn,t.memoizedState.cache),sr();break;case 27:case 5:At(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Im(t,n,a):(wa(n),t=$i(t,n,a),t!==null?t.sibling:null);wa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(kr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Gm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Nm(t,n,a,n.pendingProps);case 24:ba(n,rn,t.memoizedState.cache)}return $i(t,n,a)}function Vm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!of(t,a)&&(n.flags&128)===0)return on=!1,cx(t,n,a);on=(t.flags&131072)!==0}else on=!1,ye&&(n.flags&1048576)!==0&&Sp(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=cr(n.elementType),n.type=t,typeof t=="function")fc(t)?(s=pr(t,s),n.tag=1,n=Bm(null,n,t,s,a)):(n.tag=0,n=$c(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Dm(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=Um(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return $c(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=pr(s,n.pendingProps),Bm(t,n,s,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Ac(t,n),ro(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ba(n,rn,s),s!==f.cache&&Sc(n,[rn],a,!0),ao(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zm(t,n,s,a);break t}else if(s!==u){u=si(Error(r(424)),n),Js(u),n=zm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=fi(t.firstChild),En=n,ye=!0,Ea=null,ui=!0,a=Np(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sr(),s===u){n=$i(t,n,a);break t}bn(t,n,s,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,s=jl($.current).createElement(a),s[an]=n,s[_n]=t,An(s,a,t),b(s),n.stateNode=s):n.memoizedState=$g(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return At(n),t===null&&ye&&(s=n.stateNode=Kg(n.type,n.pendingProps,$.current),En=n,ui=!0,u=qe,za(n.type)?(Hf=u,qe=fi(s.firstChild)):qe=u),bn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=s=qe)&&(s=Hx(s,n.type,n.pendingProps,ui),s!==null?(n.stateNode=s,En=n,qe=fi(s.firstChild),ui=!1,u=!0):u=!1),u||Ta(n)),At(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Pf(u,f)?s=null:g!==null&&Pf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Nc(t,n,ex,null,null,a),Ao._currentValue=u),Ll(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&ye&&((t=a=qe)&&(a=Gx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,En=n,qe=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Im(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=hr(n,null,s,a):bn(t,n,s,a),n.child;case 11:return Dm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ba(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,lr(n),u=Tn(u),s=s(u),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Um(t,n,n.type,n.pendingProps,a);case 15:return Lm(t,n,n.type,n.pendingProps,a);case 19:return Gm(t,n,a);case 31:return ux(t,n,a);case 22:return Nm(t,n,a,n.pendingProps);case 24:return lr(n),s=Tn(rn),t===null?(u=Ec(),u===null&&(u=Ve,f=Mc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},bc(n),ba(n,rn,u)):((t.lanes&a)!==0&&(Ac(t,n),ro(n,null,null,a),ao()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ba(n,rn,s)):(s=f.cache,ba(n,rn,s),s!==u.cache&&Sc(n,[rn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function lf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(mg())t.flags|=8192;else throw fr=_l,Tc}else t.flags&=-16777217}function Xm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a0(n))if(mg())t.flags|=8192;else throw fr=_l,Tc}function Ol(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,ns|=n)}function fo(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function fx(t,n,a){var s=n.pendingProps;switch(mc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(rn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xr(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_c())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ta(n),f!==null?(Ye(n),Xm(n,f)):(Ye(n),lf(n,u,null,s,a))):f?f!==t.memoizedState?(ta(n),Ye(n),Xm(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ta(n),Ye(n),lf(n,u,t,s,a)),null;case 27:if(le(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=Rt.current,Xr(n)?yp(n):(t=Kg(u,s,a),n.stateNode=t,ta(n))}return Ye(n),null;case 5:if(le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(f=Rt.current,Xr(n))yp(n);else{var g=jl($.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[an]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ta(n)}}return Ye(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,Xr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=En,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ig(t.nodeValue,a)),t||Ta(n,!0)}else t=jl(t).createTextNode(s),t[an]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Xr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Xr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Ye(n),null);case 4:return Ht(),t===null&&Df(n.stateNode.containerInfo),Ye(n),null;case 10:return Ki(n.type),Ye(n),null;case 19:if(tt(tn),s=n.memoizedState,s===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)fo(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,fo(s,!1),t=f.updateQueue,n.updateQueue=t,Ol(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_p(a,t),a=a.sibling;return mt(tn,tn.current&1|2),ye&&Zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Il&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ol(n,t),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ye)return Ye(n),null}else 2*M()-s.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=tn.current,mt(tn,u?a&1|2:a&1),ye&&Zi(n,s.treeForkCount),t):(Ye(n),null);case 22:case 23:return jn(n),Dc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&tt(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(rn),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hx(t,n){switch(mc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(rn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(tn),null;case 4:return Ht(),null;case 10:return Ki(n.type),null;case 22:case 23:return jn(n),Dc(),t!==null&&tt(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(rn),null;case 25:return null;default:return null}}function km(t,n){switch(mc(n),n.tag){case 3:Ki(rn),Ht();break;case 26:case 27:case 5:le(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt(tn);break;case 10:Ki(n.type);break;case 22:case 23:jn(n),Dc(),t!==null&&tt(ur);break;case 24:Ki(rn)}}function ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Be(n,n.return,T)}}function Ua(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var z=a,Q=T;try{Q()}catch(ht){Be(u,z,ht)}}}s=s.next}while(s!==f)}}catch(ht){Be(n,n.return,ht)}}function Wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Pp(n,a)}catch(s){Be(t,t.return,s)}}}function qm(t,n,a){a.props=pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Be(t,n,u)}}function Ni(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function Ym(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function uf(t,n,a){try{var s=t.stateNode;Ox(s,t.type,a,n),s[_n]=n}catch(u){Be(t,t.return,u)}}function Zm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Pl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Pl(t,n,a),t=t.sibling;t!==null;)Pl(t,n,a),t=t.sibling}function jm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,s,a),n[an]=t,n[_n]=a}catch(f){Be(t,t.return,f)}}var ea=!1,ln=!1,hf=!1,Km=typeof WeakSet=="function"?WeakSet:Set,mn=null;function dx(t,n){if(t=t.containerInfo,Nf=nu,t=lp(t),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,z=-1,Q=0,ht=0,gt=t,it=null;e:for(;;){for(var lt;gt!==a||u!==0&&gt.nodeType!==3||(T=g+u),gt!==f||s!==0&&gt.nodeType!==3||(z=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===t)break e;if(it===a&&++Q===u&&(T=g),it===f&&++ht===s&&(z=g),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},nu=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=pr(a.type,u);t=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Qm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),s&4&&ho(5,a);break;case 1:if(ia(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&Wm(a),s&512&&po(a,a.return);break;case 3:if(ia(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&jm(a);case 26:case 5:ia(t,a),n===null&&s&4&&Ym(a),s&512&&po(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),s&4&&tg(t,a);break;case 13:ia(t,a),s&4&&eg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=yx.bind(null,a),Vx(t,a))));break;case 22:if(s=a.memoizedState!==null||ea,!s){n=n!==null&&n.memoizedState!==null||ln,u=ea;var f=ln;ea=s,(ln=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ea=u,ln=f}break;case 30:break;default:ia(t,a)}}function Jm(t){var n=t.alternate;n!==null&&(t.alternate=null,Jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Gs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,In=!1;function na(t,n,a){for(a=a.child;a!==null;)$m(t,n,a),a=a.sibling}function $m(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:ln||Ni(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ni(a,n);var s=Qe,u=In;za(a.type)&&(Qe=a.stateNode,In=!1),na(t,n,a),Eo(a.stateNode),Qe=s,In=u;break;case 5:ln||Ni(a,n);case 6:if(s=Qe,u=In,Qe=null,na(t,n,a),Qe=s,In=u,Qe!==null)if(In)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(In?(t=Qe,Wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),cs(t)):Wg(Qe,a.stateNode));break;case 4:s=Qe,u=In,Qe=a.stateNode.containerInfo,In=!0,na(t,n,a),Qe=s,In=u;break;case 0:case 11:case 14:case 15:Ua(2,a,n),ln||Ua(4,a,n),na(t,n,a);break;case 1:ln||(Ni(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&qm(a,n,s)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,na(t,n,a),ln=s;break;default:na(t,n,a)}}function tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{cs(t)}catch(a){Be(n,n.return,a)}}}function eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{cs(t)}catch(a){Be(n,n.return,a)}}function px(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Km),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Km),n;default:throw Error(r(435,t.tag))}}function Fl(t,n){var a=px(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Ex.bind(null,t,s);s.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(za(T.type)){Qe=T.stateNode,In=!1;break t}break;case 5:Qe=T.stateNode,In=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(Qe===null)throw Error(r(160));$m(f,g,u),Qe=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ng(n,t),n=n.sibling}var Si=null;function ng(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(Ua(3,t,t.return),ho(3,t),Ua(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(ln||a===null||Ni(a,a.return)),s&64&&ea&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Si;if(Hn(n,t),Gn(t),s&512&&(ln||a===null||Ni(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[$a]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,s,a),f[an]=t,b(f),s=f;break t;case"link":var g=n0("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),An(f,s,a),u.head.appendChild(f);break;case"meta":if(g=n0("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),An(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,b(f),s=f}t.stateNode=s}else i0(u,t.type,t.stateNode);else t.stateNode=e0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?i0(u,t.type,t.stateNode):e0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(ln||a===null||Ni(a,a.return)),a!==null&&s&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(ln||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{fn(u,"")}catch(Wt){Be(t,t.return,Wt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,uf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(hf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Wt){Be(t,t.return,Wt)}}break;case 3:if(Jl=null,u=Si,Si=Kl(n.containerInfo),Hn(n,t),Si=u,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(n.containerInfo)}catch(Wt){Be(t,t.return,Wt)}hf&&(hf=!1,ig(t));break;case 4:s=Si,Si=Kl(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=ea,ht=ln;if(ea=Q||u,ln=ht||z,Hn(n,t),ln=ht,ea=Q,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ea||ln||mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=z.stateNode;var gt=z.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Wt){Be(z,z.return,Wt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Wt){Be(z,z.return,Wt)}}}else if(n.tag===18){if(a===null){z=n;try{var lt=z.stateNode;u?qg(lt,!0):qg(z.stateNode,!1)}catch(Wt){Be(z,z.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Fl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Zm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=cf(t);Pl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var T=cf(t);Pl(t,T,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=cf(t);ff(t,Q,z);break;default:throw Error(r(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(t,n.alternate,n),n=n.sibling}function mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),mr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),mr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ni(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),ho(4,f);break;case 1:if(aa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Be(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Op(z[u],T)}catch(Q){Be(s,s.return,Q)}}a&&g&64&&Wm(f),po(f,f.return);break;case 27:jm(f);case 26:case 5:aa(u,f,a),a&&s===null&&g&4&&Ym(f),po(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&g&4&&tg(u,f);break;case 13:aa(u,f,a),a&&g&4&&eg(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),po(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$s(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ag(t,n,a,s),n=n.sibling}function ag(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),u&2048&&ho(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(u&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Be(n,n.return,z)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):mo(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,$r(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(g,n);break;case 24:Mi(t,n,a,s),u&2048&&pf(n.alternate,n);break;default:Mi(t,n,a,s)}}function $r(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,z=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:$r(f,g,T,z,u),ho(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?$r(f,g,T,z,u):mo(f,g):(ht._visibility|=2,$r(f,g,T,z,u)),u&&Q&2048&&df(g.alternate,g);break;case 24:$r(f,g,T,z,u),u&&Q&2048&&pf(g.alternate,g);break;default:$r(f,g,T,z,u)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:mo(a,s),u&2048&&df(s.alternate,s);break;case 24:mo(a,s),u&2048&&pf(s.alternate,s);break;default:mo(a,s)}n=n.sibling}}var go=8192;function ts(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)rg(t,n,a),t=t.sibling}function rg(t,n,a){switch(t.tag){case 26:ts(t,n,a),t.flags&go&&t.memoizedState!==null&&tS(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ts(t,n,a);break;case 3:case 4:var s=Si;Si=Kl(t.stateNode.containerInfo),ts(t,n,a),Si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,ts(t,n,a),go=s):ts(t,n,a));break;default:ts(t,n,a)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,lg(s,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)og(t),t=t.sibling}function og(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):_o(t);break;default:_o(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,lg(s,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function lg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$s(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var u=s.sibling,f=s.return;if(Jm(s),s===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var mx={getCacheForType:function(t){var n=Tn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(rn).controller.signal}},gx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ve=null,ge=null,ve=0,Fe=0,Kn=null,La=!1,es=!1,mf=!1,ra=0,$e=0,Na=0,gr=0,gf=0,Qn=0,ns=0,vo=null,Vn=null,_f=!1,zl=0,ug=0,Il=1/0,Hl=null,Oa=null,hn=0,Pa=null,is=null,sa=0,vf=0,xf=null,cg=null,xo=0,Sf=null;function Jn(){return(Le&2)!==0&&ve!==0?ve&-ve:N.T!==null?Af():Is()}function fg(){if(Qn===0)if((ve&536870912)===0||ye){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Qn=t}else Qn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Qn}function Xn(t,n,a){(t===Ve&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(as(t,0),Fa(t,ve,Qn,!1)),wn(t,a),((Le&2)===0||t!==Ve)&&(t===Ve&&((Le&2)===0&&(gr|=a),$e===4&&Fa(t,ve,Qn,!1)),Oi(t))}function hg(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Dt(t,n),u=s?xx(t,n):yf(t,n,!0),f=s;do{if(u===0){es&&!s&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!_x(a)){u=yf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=vo;var z=T.current.memoizedState.isDehydrated;if(z&&(as(T,g).flags|=256),g=yf(T,g,!1),g!==2){if(mf&&!z){T.errorRecoveryDisabledLanes|=f,gr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){as(t,0),Fa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Qn,!La);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=zl+300-M(),10<u)){if(Fa(s,n,Qn,!La),_t(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=Xg(dg.bind(null,s,a,Vn,Hl,_f,n,Qn,gr,ns,La,f,"Throttled",-0,0),u);break t}dg(s,a,Vn,Hl,_f,n,Qn,gr,ns,La,f,null,-0,0)}}break}while(!0);Oi(t)}function dg(t,n,a,s,u,f,g,T,z,Q,ht,gt,it,lt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},rg(n,f,gt);var Wt=(f&62914560)===f?zl-M():(f&4194048)===f?ug-M():0;if(Wt=eS(gt,Wt),Wt!==null){sa=f,t.cancelPendingCommit=Wt(Mg.bind(null,t,n,f,a,s,u,g,T,z,ht,gt,null,it,lt)),Fa(t,f,g,!Q);return}}Mg(t,n,f,a,s,u,g,T,z)}function _x(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,s){n&=~gf,n&=~gr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ut(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Jo(t,a,n)}function Gl(){return(Le&6)===0?(So(0),!1):!0}function Mf(){if(ge!==null){if(Fe===0)var t=ge.return;else t=ge,ji=or=null,Fc(t),Zr=null,eo=0,t=ge;for(;t!==null;)km(t.alternate,t),t=t.return;ge=null}}function as(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Bx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Mf(),Ve=t,ge=a=Yi(t.current,null),ve=n,Fe=0,Kn=null,La=!1,es=Dt(t,n),mf=!1,ns=Qn=gf=gr=Na=$e=0,Vn=vo=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ut(s),f=1<<u;n|=t[u],s&=~f}return ra=n,ll(),a}function pg(t,n){oe=null,N.H=uo,n===Yr||n===gl?(n=Dp(),Fe=3):n===Tc?(n=Dp(),Fe=4):Fe=n===Jc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ge===null&&($e=1,Dl(t,si(n,t.current)))}function mg(){var t=Zn.current;return t===null?!0:(ve&4194048)===ve?ci===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ci:!1}function gg(){var t=N.H;return N.H=uo,t===null?uo:t}function _g(){var t=N.A;return N.A=mx,t}function Vl(){$e=4,La||(ve&4194048)!==ve&&Zn.current!==null||(es=!0),(Na&134217727)===0&&(gr&134217727)===0||Ve===null||Fa(Ve,ve,Qn,!1)}function yf(t,n,a){var s=Le;Le|=2;var u=gg(),f=_g();(Ve!==t||ve!==n)&&(Hl=null,as(t,n)),n=!1;var g=$e;t:do try{if(Fe!==0&&ge!==null){var T=ge,z=Kn;switch(Fe){case 8:Mf(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Fe;if(Fe=0,Kn=null,rs(t,T,z,Q),a&&es){g=0;break t}break;default:Q=Fe,Fe=0,Kn=null,rs(t,T,z,Q)}}vx(),g=$e;break}catch(ht){pg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,ji=or=null,Le=s,N.H=u,N.A=f,ge===null&&(Ve=null,ve=0,ll()),g}function vx(){for(;ge!==null;)vg(ge)}function xx(t,n){var a=Le;Le|=2;var s=gg(),u=_g();Ve!==t||ve!==n?(Hl=null,Il=M()+500,as(t,n)):es=Dt(t,n);t:do try{if(Fe!==0&&ge!==null){n=ge;var f=Kn;e:switch(Fe){case 1:Fe=0,Kn=null,rs(t,n,f,1);break;case 2:case 9:if(Cp(f)){Fe=0,Kn=null,xg(n);break}n=function(){Fe!==2&&Fe!==9||Ve!==t||(Fe=7),Oi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Cp(f)?(Fe=0,Kn=null,xg(n)):(Fe=0,Kn=null,rs(t,n,f,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var T=ge;if(g?a0(g):T.stateNode.complete){Fe=0,Kn=null;var z=T.sibling;if(z!==null)ge=z;else{var Q=T.return;Q!==null?(ge=Q,Xl(Q)):ge=null}break e}}Fe=0,Kn=null,rs(t,n,f,5);break;case 6:Fe=0,Kn=null,rs(t,n,f,6);break;case 8:Mf(),$e=6;break t;default:throw Error(r(462))}}Sx();break}catch(ht){pg(t,ht)}while(!0);return ji=or=null,N.H=s,N.A=u,Le=a,ge!==null?0:(Ve=null,ve=0,ll(),$e)}function Sx(){for(;ge!==null&&!Vt();)vg(ge)}function vg(t){var n=Vm(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Xl(t):ge=n}function xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fc(n);default:km(a,n),n=ge=_p(n,ra),n=Vm(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Xl(t):ge=n}function rs(t,n,a,s){ji=or=null,Fc(n),Zr=null,eo=0;var u=n.return;try{if(lx(t,u,n,a,ve)){$e=1,Dl(t,si(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;$e=1,Dl(t,si(a,t.current)),ge=null;return}n.flags&32768?(ye||s===1?t=!0:es||(ve&536870912)!==0?t=!1:(La=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Sg(n,La);return}t=n.return;var a=fx(n.alternate,n,ra);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);$e===0&&($e=5)}function Sg(t,n){do{var a=hx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);$e=6,ge=null}function Mg(t,n,a,s,u,f,g,T,z){t.cancelPendingCommit=null;do kl();while(hn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uc,gi(t,a,f,g,T,z),t===Ve&&(ge=Ve=null,ve=0),is=n,Pa=t,sa=a,vf=f,xf=u,cg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Tx(ut,function(){return Ag(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=H.p,H.p=2,g=Le,Le|=4;try{dx(t,n,a)}finally{Le=g,H.p=u,N.T=s}}hn=1,yg(),Eg(),Tg()}}function yg(){if(hn===1){hn=0;var t=Pa,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=H.p;H.p=2;var u=Le;Le|=4;try{ng(n,t);var f=Of,g=lp(t.containerInfo),T=f.focusedElem,z=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&op(T.ownerDocument.documentElement,T)){if(z!==null&&ac(T)){var Q=z.start,ht=z.end;if(ht===void 0&&(ht=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ht,T.value.length);else{var gt=T.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Wt=T.textContent.length,te=Math.min(z.start,Wt),Ge=z.end===void 0?te:Math.min(z.end,Wt);!lt.extend&&te>Ge&&(g=Ge,Ge=te,te=g);var Y=sp(T,te),V=sp(T,Ge);if(Y&&V&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(Y.node,Y.offset),lt.removeAllRanges(),te>Ge?(lt.addRange(K),lt.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),lt.addRange(K))}}}}for(gt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}nu=!!Nf,Of=Nf=null}finally{Le=u,H.p=s,N.T=a}}t.current=n,hn=2}}function Eg(){if(hn===2){hn=0;var t=Pa,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=H.p;H.p=2;var u=Le;Le|=4;try{Qm(t,n.alternate,n)}finally{Le=u,H.p=s,N.T=a}}hn=3}}function Tg(){if(hn===4||hn===3){hn=0,D();var t=Pa,n=is,a=sa,s=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,is=Pa=null,bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Oa=null),Dr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=H.p,H.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{N.T=n,H.p=u}}(sa&3)!==0&&kl(),Oi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Sf?xo++:(xo=0,Sf=t):xo=0,So(0)}}function bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function kl(){return yg(),Eg(),Tg(),Ag()}function Ag(){if(hn!==5)return!1;var t=Pa,n=vf;vf=0;var a=Dr(sa),s=N.T,u=H.p;try{H.p=32>a?32:a,N.T=null,a=xf,xf=null;var f=Pa,g=sa;if(hn=0,is=Pa=null,sa=0,(Le&6)!==0)throw Error(r(331));var T=Le;if(Le|=4,og(f.current),ag(f,f.current,g,a),Le=T,So(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{H.p=u,N.T=s,bg(t,n)}}function Rg(t,n,a){n=si(a,n),n=Qc(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(wn(t,2),Oi(t))}function Be(t,n,a){if(t.tag===3)Rg(t,t,a);else for(;n!==null;){if(n.tag===3){Rg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))){t=si(a,t),a=Cm(2),s=Ca(n,a,2),s!==null&&(wm(a,s,n,t),wn(s,2),Oi(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new gx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(mf=!0,u.add(a),t=Mx.bind(null,t,n,a),n.then(t,t))}function Mx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&($e===4||$e===3&&(ve&62914560)===ve&&300>M()-zl?(Le&2)===0&&as(t,0):gf|=a,ns===ve&&(ns=0)),Oi(t)}function Cg(t,n){n===0&&(n=Oe()),t=ar(t,n),t!==null&&(wn(t,n),Oi(t))}function yx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(t,a)}function Ex(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Cg(t,a)}function Tx(t,n){return me(t,n)}var Wl=null,ss=null,Tf=!1,ql=!1,bf=!1,Ba=0;function Oi(t){t!==ss&&t.next===null&&(ss===null?Wl=ss=t:ss=ss.next=t),ql=!0,Tf||(Tf=!0,Ax())}function So(t,n){if(!bf&&ql){bf=!0;do for(var a=!1,s=Wl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ut(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(s,f))}else f=ve,f=_t(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,Lg(s,f));s=s.next}while(a);bf=!1}}function bx(){wg()}function wg(){ql=Tf=!1;var t=0;Ba!==0&&Fx()&&(t=Ba);for(var n=M(),a=null,s=Wl;s!==null;){var u=s.next,f=Dg(s,n);f===0?(s.next=null,a===null?Wl=u:a.next=u,u===null&&(ss=a)):(a=s,(t!==0||(f&3)!==0)&&(ql=!0)),s=u}hn!==0&&hn!==5||So(t),Ba!==0&&(Ba=0)}function Dg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ut(f),T=1<<g,z=u[g];z===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ne(T,n)):z<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=ve,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Te(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Te(s),Dr(a)){case 2:case 8:a=vt;break;case 32:a=ut;break;case 268435456:a=Tt;break;default:a=ut}return s=Ug.bind(null,t),a=me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Te(s),t.callbackPriority=2,t.callbackNode=null,2}function Ug(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var s=ve;return s=_t(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(hg(t,s,n),Dg(t,M()),t.callbackNode!=null&&t.callbackNode===a?Ug.bind(null,t):null)}function Lg(t,n){if(kl())return null;hg(t,n,!0)}function Ax(){zx(function(){(Le&6)!==0?me(ft,bx):wg()})}function Af(){if(Ba===0){var t=Wr;t===0&&(t=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Ba=t}return Ba}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tl(""+t)}function Og(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Rx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ng((u[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?Ng(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new al("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var z=g?Og(u,g):new FormData(u);Wc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=g?Og(u,g):new FormData(u),Wc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Rf=0;Rf<lc.length;Rf++){var Cf=lc[Rf],Cx=Cf.toLowerCase(),wx=Cf[0].toUpperCase()+Cf.slice(1);xi(Cx,"on"+wx)}xi(fp,"onAnimationEnd"),xi(hp,"onAnimationIteration"),xi(dp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Wv,"onTransitionRun"),xi(qv,"onTransitionStart"),xi(Yv,"onTransitionCancel"),xi(pp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Pg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],z=T.instance,Q=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){ol(ht)}u.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(T=s[g],z=T.instance,Q=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){ol(ht)}u.currentTarget=null,f=z}}}}function _e(t,n){var a=n[Ur];a===void 0&&(a=n[Ur]=new Set);var s=t+"__bubble";a.has(s)||(Fg(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),Fg(a,t,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[Yl]){t[Yl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,wf("selectionchange",!1,n))}}function Fg(t,n,a,s){switch(f0(n)){case 2:var u=aS;break;case 8:u=rS;break;default:u=Wf}a=u.bind(null,n,a,t),u=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=va(T),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Gd(function(){var Q=f,ht=Yu(a),gt=[];t:{var it=mp.get(t);if(it!==void 0){var lt=al,Wt=t;switch(t){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":lt=Ev;break;case"focusin":Wt="focus",lt=$u;break;case"focusout":Wt="blur",lt=$u;break;case"beforeblur":case"afterblur":lt=$u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Av;break;case fp:case hp:case dp:lt=pv;break;case pp:lt=Cv;break;case"scroll":case"scrollend":lt=uv;break;case"wheel":lt=Dv;break;case"copy":case"cut":case"paste":lt=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=qd;break;case"toggle":case"beforetoggle":lt=Lv}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),Y=te?it!==null?it+"Capture":null:it;te=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Vs(V,Y),pt!=null&&te.push(yo(V,pt,K))),Ge)break;V=V.return}0<te.length&&(it=new lt(it,Wt,null,a,ht),gt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",it&&a!==qu&&(Wt=a.relatedTarget||a.fromElement)&&(va(Wt)||Wt[_i]))break t;if((lt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=Q,Wt=Wt?va(Wt):null,Wt!==null&&(Ge=c(Wt),te=Wt.tag,Wt!==Ge||te!==5&&te!==27&&te!==6)&&(Wt=null)):(lt=null,Wt=Q),lt!==Wt)){if(te=kd,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=qd,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ge=lt==null?it:tr(lt),K=Wt==null?it:tr(Wt),it=new te(pt,V+"leave",lt,a,ht),it.target=Ge,it.relatedTarget=K,pt=null,va(ht)===Q&&(te=new te(Y,V+"enter",Wt,a,ht),te.target=K,te.relatedTarget=Ge,pt=te),Ge=pt,lt&&Wt)e:{for(te=Ux,Y=lt,V=Wt,K=0,pt=Y;pt;pt=te(pt))K++;pt=0;for(var Qt=V;Qt;Qt=te(Qt))pt++;for(;0<K-pt;)Y=te(Y),K--;for(;0<pt-K;)V=te(V),pt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;lt!==null&&Bg(gt,it,lt,te,!1),Wt!==null&&Ge!==null&&Bg(gt,Ge,Wt,te,!0)}}t:{if(it=Q?tr(Q):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Re=tp;else if(Jd(it))if(ep)Re=Vv;else{Re=Hv;var jt=Iv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?Q&&vi(Q.elementType)&&(Re=tp):Re=Gv;if(Re&&(Re=Re(t,Q))){$d(gt,Re,a,ht);break t}jt&&jt(t,it,Q),t==="focusout"&&Q&&it.type==="number"&&Q.memoizedProps.value!=null&&xn(it,"number",it.value)}switch(jt=Q?tr(Q):window,t){case"focusin":(Jd(jt)||jt.contentEditable==="true")&&(Br=jt,rc=Q,Ks=null);break;case"focusout":Ks=rc=Br=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,up(gt,a,ht);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":up(gt,a,ht)}var ce;if(ec)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Fr?Kd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Yd&&a.locale!=="ko"&&(Fr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Fr&&(ce=Vd()):(Ma=ht,Ku="value"in Ma?Ma.value:Ma.textContent,Fr=!0)),jt=Zl(Q,xe),0<jt.length&&(xe=new Wd(xe,t,null,a,ht),gt.push({event:xe,listeners:jt}),ce?xe.data=ce:(ce=Qd(a),ce!==null&&(xe.data=ce)))),(ce=Ov?Pv(t,a):Fv(t,a))&&(xe=Zl(Q,"onBeforeInput"),0<xe.length&&(jt=new Wd("onBeforeInput","beforeinput",null,a,ht),gt.push({event:jt,listeners:xe}),jt.data=ce)),Rx(gt,t,Q,a,ht)}Pg(gt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(t,a),u!=null&&s.unshift(yo(t,u,f)),u=Vs(t,n),u!=null&&s.push(yo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Ux(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,z=T.alternate,Q=T.stateNode;if(T=T.tag,z!==null&&z===s)break;T!==5&&T!==26&&T!==27||Q===null||(z=Q,u?(Q=Vs(a,f),Q!=null&&g.unshift(yo(a,Q,z))):u||(Q=Vs(a,f),Q!=null&&g.push(yo(a,Q,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Lx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Nx,"")}function Ig(t,n){return n=zg(n),zg(t)===n}function He(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Nr(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=tl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=tl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=tl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),Yt(t,"popover",s);break;case"xlinkActuate":Zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Zt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Zt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Zt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Zt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Yt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ov.get(a)||a,Yt(t,a,s))}}function Lf(t,n,a,s,u,f){switch(a){case"style":Nr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?fn(t,s):(typeof s=="number"||typeof s=="bigint")&&fn(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Yt(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=g=u=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":g=ht;break;case"checked":z=ht;break;case"defaultChecked":Q=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:He(t,n,s,ht,a,null)}}ki(t,f,T,z,Q,g,u,!1);return;case"select":_e("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:He(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ai(t,!!s,n,!1):a!=null&&ai(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:He(t,n,g,T,a,null)}Sn(t,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,z,s,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<Mo.length;s++)_e(Mo[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,Q,s,a,null)}return;default:if(vi(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Lf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&He(t,n,T,s,a,null))}function Ox(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,z=null,Q=null,ht=null;for(lt in a){var gt=a[lt];if(a.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:s.hasOwnProperty(lt)||He(t,n,lt,null,s,gt)}}for(var it in s){var lt=s[it];if(gt=a[it],s.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":f=lt;break;case"name":u=lt;break;case"checked":Q=lt;break;case"defaultChecked":ht=lt;break;case"value":g=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==gt&&He(t,n,it,lt,s,gt)}}vn(t,g,T,z,Q,ht,f,u);return;case"select":lt=g=T=it=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:s.hasOwnProperty(f)||He(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==z&&He(t,n,u,f,s,z)}n=T,a=g,s=lt,it!=null?ai(t,!!a,it,!1):!!s!=!!a&&(n!=null?ai(t,!!a,n,!0):ai(t,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&He(t,n,g,u,s,f)}Pe(t,it,lt);return;case"option":for(var Wt in a)it=a[Wt],a.hasOwnProperty(Wt)&&it!=null&&!s.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:He(t,n,Wt,null,s,it));for(z in s)it=s[z],lt=a[z],s.hasOwnProperty(z)&&it!==lt&&(it!=null||lt!=null)&&(z==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":He(t,n,z,it,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!s.hasOwnProperty(te)&&He(t,n,te,null,s,it);for(Q in s)if(it=s[Q],lt=a[Q],s.hasOwnProperty(Q)&&it!==lt&&(it!=null||lt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:He(t,n,Q,it,s,lt)}return;default:if(vi(n)){for(var Ge in a)it=a[Ge],a.hasOwnProperty(Ge)&&it!==void 0&&!s.hasOwnProperty(Ge)&&Lf(t,n,Ge,void 0,s,it);for(ht in s)it=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||it===lt||it===void 0&&lt===void 0||Lf(t,n,ht,it,s,lt);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&He(t,n,Y,null,s,it);for(gt in s)it=s[gt],lt=a[gt],!s.hasOwnProperty(gt)||it===lt||it==null&&lt==null||He(t,n,gt,it,s,lt)}function Hg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Px(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&Hg(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],Q=z.startTime;if(Q>T)break;var ht=z.transferSize,gt=z.initiatorType;ht&&Hg(gt)&&(z=z.responseEnd,g+=ht*(z<T?1:(T-Q)/(z-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function Gg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Fx(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Ix)}:Xg;function Ix(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function Wg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),cs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[$a]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Eo(t.ownerDocument.body);a=u}while(a);cs(n)}function qg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Hx(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$a])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function Gx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Yg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function zf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function Zg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Kg(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Gs(t)}var hi=new Map,Qg=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=H.d;H.d={f:Xx,r:kx,D:Wx,C:qx,L:Yx,m:Zx,X:Kx,S:jx,M:Qx};function Xx(){var t=oa.f(),n=Gl();return t||n}function kx(t){var n=xa(t);n!==null&&n.tag===5&&n.type==="form"?pm(n):oa.r(t)}var os=typeof document>"u"?null:document;function Jg(t,n,a){var s=os;if(s&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Qg.has(u)||(Qg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),An(n,"link",t),b(n),s.head.appendChild(n)))}}function Wx(t){oa.D(t),Jg("dns-prefetch",t,null)}function qx(t,n){oa.C(t,n),Jg("preconnect",t,n)}function Yx(t,n,a){oa.L(t,n,a);var s=os;if(s&&t&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(t)+'"]';var f=u;switch(n){case"style":f=ls(t);break;case"script":f=us(t)}hi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(bo(f))||(n=s.createElement("link"),An(n,"link",t),b(n),s.head.appendChild(n)))}}function Zx(t,n){oa.m(t,n);var a=os;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(t)}if(!hi.has(f)&&(t=v({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}s=a.createElement("link"),An(s,"link",t),b(s),a.head.appendChild(s)}}}function jx(t,n,a){oa.S(t,n,a);var s=os;if(s&&t){var u=Sa(s).hoistableStyles,f=ls(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(To(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&Gf(t,a);var z=g=s.createElement("link");b(z),An(z,"link",t),z._p=new Promise(function(Q,ht){z.onload=Q,z.onerror=ht}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ql(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function Kx(t,n){oa.X(t,n);var a=os;if(a&&t){var s=Sa(a).hoistableScripts,u=us(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0},n),(n=hi.get(u))&&Vf(t,n),f=a.createElement("script"),b(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Qx(t,n){oa.M(t,n);var a=os;if(a&&t){var s=Sa(a).hoistableScripts,u=us(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&Vf(t,n),f=a.createElement("script"),b(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function $g(t,n,a,s){var u=(u=$.current)?Kl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=Sa(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ls(a.href);var f=Sa(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(To(t)))&&!f._p&&(g.instance=f,g.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||Jx(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=Sa(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ls(t){return'href="'+ie(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function t0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Jx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),b(n),t.head.appendChild(n))}function us(t){return'[src="'+ie(t)+'"]'}function bo(t){return"script[async]"+t}function e0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,b(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),b(s),An(s,"style",u),Ql(s,a.precedence,t),n.instance=s;case"stylesheet":u=ls(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,b(f),f;s=t0(a),(u=hi.get(u))&&Gf(s,u),f=(t.ownerDocument||t).createElement("link"),b(f);var g=f;return g._p=new Promise(function(T,z){g.onload=T,g.onerror=z}),An(f,"link",s),n.state.loading|=4,Ql(f,a.precedence,t),n.instance=f;case"script":return f=us(a.src),(u=t.querySelector(bo(f)))?(n.instance=u,b(u),u):(s=a,(u=hi.get(f))&&(s=v({},a),Vf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),b(u),An(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ql(s,a.precedence,t));return n.instance}function Ql(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Jl=null;function n0(t,n,a){if(Jl===null){var s=new Map,u=Jl=new Map;u.set(a,s)}else u=Jl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[$a]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function i0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function $x(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function a0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ls(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=$l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,s=t0(s),(u=hi.get(u))&&Gf(s,u),f=f.createElement("link"),b(f);var g=f;g._p=new Promise(function(T,z){g.onload=T,g.onerror=z}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function eS(t,n){return t.stylesheets&&t.count===0&&eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*Px());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tu=null;function eu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tu=new Map,n.forEach(nS,t),tu=null,$l.call(t))}function nS(t,n){if(!(n.state.loading&4)){var a=tu.get(t);if(a)var s=a.get(null);else{a=new Map,tu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=$l.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function iS(t,n,a,s,u,f,g,T,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function r0(t,n,a,s,u,f,g,T,z,Q,ht,gt){return t=new iS(t,n,a,g,z,Q,ht,gt,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Mc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bc(f),t}function s0(t){return t?(t=Hr,t):Hr}function o0(t,n,a,s,u,f){u=s0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ra(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ca(t,s,n),a!==null&&(Xn(a,t,n),io(a,t,n))}function l0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){l0(t,n),(t=t.alternate)&&l0(t,n)}function u0(t){if(t.tag===13||t.tag===31){var n=ar(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function c0(t){if(t.tag===13||t.tag===31){var n=Jn();n=zs(n);var a=ar(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var nu=!0;function aS(t,n,a,s){var u=N.T;N.T=null;var f=H.p;try{H.p=2,Wf(t,n,a,s)}finally{H.p=f,N.T=u}}function rS(t,n,a,s){var u=N.T;N.T=null;var f=H.p;try{H.p=8,Wf(t,n,a,s)}finally{H.p=f,N.T=u}}function Wf(t,n,a,s){if(nu){var u=qf(s);if(u===null)Uf(t,n,s,iu,a),h0(t,s);else if(oS(u,t,n,a,s))s.stopPropagation();else if(h0(t,s),n&4&&-1<sS.indexOf(t)){for(;u!==null;){var f=xa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var z=1<<31-Ut(g);T.entanglements[1]|=z,g&=~z}Oi(f),(Le&6)===0&&(Il=M()+500,So(0))}}break;case 31:case 13:T=ar(f,2),T!==null&&Xn(T,f,2),Gl(),kf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,iu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=Yu(t),Yf(t)}var iu=null;function Yf(t){if(iu=null,t=va(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return iu=t,null}function f0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ft:return 2;case vt:return 8;case ut:case qt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ia=null,Ha=null,Ga=null,Ro=new Map,Co=new Map,Va=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h0(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=xa(n),n!==null&&u0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function oS(t,n,a,s,u){switch(n){case"focusin":return Ia=wo(Ia,t,n,a,s,u),!0;case"dragenter":return Ha=wo(Ha,t,n,a,s,u),!0;case"mouseover":return Ga=wo(Ga,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ro.set(f,wo(Ro.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,wo(Co.get(f)||null,t,n,a,s,u)),!0}return!1}function d0(t){var n=va(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){c0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){c0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qu=s,a.target.dispatchEvent(s),qu=null}else return n=xa(a),n!==null&&u0(n),t.blockedOn=a,!1;n.shift()}return!0}function p0(t,n,a){au(t)&&a.delete(n)}function lS(){Zf=!1,Ia!==null&&au(Ia)&&(Ia=null),Ha!==null&&au(Ha)&&(Ha=null),Ga!==null&&au(Ga)&&(Ga=null),Ro.forEach(p0),Co.forEach(p0)}function ru(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,lS)))}var su=null;function m0(t){su!==t&&(su=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){su===t&&(su=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=xa(a);f!==null&&(t.splice(n,3),n-=3,Wc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function cs(t){function n(z){return ru(z,t)}Ia!==null&&ru(Ia,t),Ha!==null&&ru(Ha,t),Ga!==null&&ru(Ga,t),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Va.length;a++){var s=Va[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[_n]||null;if(typeof f=="function")g||m0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[_n]||null)T=g.formAction;else if(Yf(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),m0(a)}}}function g0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jf(t){this._internalRoot=t}ou.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();o0(a,s,t,n,null,null)},ou.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;o0(t.current,2,null,t,null,null),Gl(),n[_i]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var n=Is();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,t),a===0&&d0(t)}};var _0=e.version;if(_0!=="19.2.4")throw Error(r(527,_0,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var uS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{St=lu.inject(uS),Et=lu}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Tm,f=bm,g=Am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=r0(t,1,!1,null,null,a,s,null,u,f,g,g0),t[_i]=n.current,Df(t),new jf(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Tm,g=bm,T=Am,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=r0(t,1,!0,n,a??null,s,u,z,f,g,T,g0),n.context=s0(null),a=n.current,s=Jn(),s=zs(s),u=Ra(s),u.callback=null,Ca(a,u,s),a=s,n.current.lanes=a,wn(n,a),Oi(n),t[_i]=n.current,Df(t),new ou(n)},Uo.version="19.2.4",Uo}var R0;function xS(){if(R0)return Jf.exports;R0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=vS(),Jf.exports}var SS=xS();const Rd="182",MS=0,C0=1,yS=2,Du=1,ES=2,zo=3,Ja=0,kn=1,da=2,Ii=0,As=1,Uh=2,w0=3,D0=4,TS=5,Tr=100,bS=101,AS=102,RS=103,CS=104,wS=200,DS=201,US=202,LS=203,Lh=204,Nh=205,NS=206,OS=207,PS=208,FS=209,BS=210,zS=211,IS=212,HS=213,GS=214,Oh=0,Ph=1,Fh=2,Cs=3,Bh=4,zh=5,Ih=6,Hh=7,R_=0,VS=1,XS=2,Hi=0,C_=1,w_=2,D_=3,U_=4,L_=5,N_=6,O_=7,P_=300,Cr=301,ws=302,Gh=303,Vh=304,Gu=306,Xh=1e3,pa=1001,kh=1002,Rn=1003,kS=1004,uu=1005,Nn=1006,nh=1007,Ar=1008,mi=1009,F_=1010,B_=1011,Vo=1012,Cd=1013,Vi=1014,Bi=1015,ei=1016,wd=1017,Dd=1018,Xo=1020,z_=35902,I_=35899,H_=1021,G_=1022,Ri=1023,ga=1026,Rr=1027,V_=1028,Ud=1029,Ds=1030,Ld=1031,Nd=1033,Uu=33776,Lu=33777,Nu=33778,Ou=33779,Wh=35840,qh=35841,Yh=35842,Zh=35843,jh=36196,Kh=37492,Qh=37496,Jh=37488,$h=37489,td=37490,ed=37491,nd=37808,id=37809,ad=37810,rd=37811,sd=37812,od=37813,ld=37814,ud=37815,cd=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,gd=36492,_d=36494,vd=36495,xd=36283,Sd=36284,Md=36285,yd=36286,WS=3200,qS=0,YS=1,Ka="",pi="srgb",Us="srgb-linear",Bu="linear",ze="srgb",fs=7680,U0=519,ZS=512,jS=513,KS=514,Od=515,QS=516,JS=517,Pd=518,$S=519,L0=35044,N0="300 es",zi=2e3,zu=2001;function X_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Iu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tM(){const o=Iu("canvas");return o.style.display="block",o}const O0={};function P0(...o){const e="THREE."+o.shift();console.log(e,...o)}function ae(...o){const e="THREE."+o.shift();console.warn(e,...o)}function we(...o){const e="THREE."+o.shift();console.error(e,...o)}function ko(...o){const e=o.join(" ");e in O0||(O0[e]=!0,ae(...o))}function eM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Os{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let F0=1234567;const Ho=Math.PI/180,Wo=180/Math.PI;function Ps(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function Fd(o,e){return(o%e+e)%e}function nM(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function iM(o,e,i){return o!==e?(i-o)/(e-o):0}function Go(o,e,i){return(1-i)*o+i*e}function aM(o,e,i,r){return Go(o,e,1-Math.exp(-i*r))}function rM(o,e=1){return e-Math.abs(Fd(o,e*2)-e)}function sM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function oM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function lM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function uM(o,e){return o+Math.random()*(e-o)}function cM(o){return o*(.5-Math.random())}function fM(o){o!==void 0&&(F0=o);let e=F0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(o){return o*Ho}function dM(o){return o*Wo}function pM(o){return(o&o-1)===0&&o!==0}function mM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _M(o,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((e+r)/2),_=h((e+r)/2),v=c((e-r)/2),S=h((e-r)/2),E=c((r-e)/2),R=h((r-e)/2);switch(l){case"XYX":o.set(d*_,m*v,m*S,d*p);break;case"YZY":o.set(m*S,d*_,m*v,d*p);break;case"ZXZ":o.set(m*v,m*S,d*_,d*p);break;case"XZX":o.set(d*_,m*R,m*E,d*p);break;case"YXY":o.set(m*E,d*_,m*R,d*p);break;case"ZYZ":o.set(m*R,m*E,d*_,d*p);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function bs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const B0={DEG2RAD:Ho,RAD2DEG:Wo,generateUUID:Ps,clamp:Se,euclideanModulo:Fd,mapLinear:nM,inverseLerp:iM,lerp:Go,damp:aM,pingpong:rM,smoothstep:sM,smootherstep:oM,randInt:lM,randFloat:uM,randFloatSpread:cM,seededRandom:fM,degToRad:hM,radToDeg:dM,isPowerOfTwo:pM,ceilPowerOfTwo:mM,floorPowerOfTwo:gM,setQuaternionFromProperEuler:_M,normalize:Pn,denormalize:bs};class se{constructor(e=0,i=0){se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3],S=c[h+0],E=c[h+1],R=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=C;return}if(v!==C||m!==S||p!==E||_!==R){let y=m*S+p*E+_*R+v*C;y<0&&(S=-S,E=-E,R=-R,C=-C,y=-y);let x=1-d;if(y<.9995){const F=Math.acos(y),O=Math.sin(F);x=Math.sin(x*F)/O,d=Math.sin(d*F)/O,m=m*x+S*d,p=p*x+E*d,_=_*x+R*d,v=v*x+C*d}else{m=m*x+S*d,p=p*x+E*d,_=_*x+R*d,v=v*x+C*d;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[h],S=c[h+1],E=c[h+2],R=c[h+3];return e[i]=d*R+_*v+m*E-p*S,e[i+1]=m*R+_*S+p*v-d*E,e[i+2]=p*R+_*E+d*S-m*v,e[i+3]=_*R-d*v-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(c/2),S=m(r/2),E=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=S*_*v+p*E*R,this._y=p*E*v-S*_*R,this._z=p*_*R+S*E*v,this._w=p*_*v-S*E*R;break;case"YXZ":this._x=S*_*v+p*E*R,this._y=p*E*v-S*_*R,this._z=p*_*R-S*E*v,this._w=p*_*v+S*E*R;break;case"ZXY":this._x=S*_*v-p*E*R,this._y=p*E*v+S*_*R,this._z=p*_*R+S*E*v,this._w=p*_*v-S*E*R;break;case"ZYX":this._x=S*_*v-p*E*R,this._y=p*E*v+S*_*R,this._z=p*_*R-S*E*v,this._w=p*_*v+S*E*R;break;case"YZX":this._x=S*_*v+p*E*R,this._y=p*E*v+S*_*R,this._z=p*_*R-S*E*v,this._w=p*_*v-S*E*R;break;case"XZY":this._x=S*_*v-p*E*R,this._y=p*E*v-S*_*R,this._z=p*_*R+S*E*v,this._w=p*_*v+S*E*R;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=r+d+v;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(r>d&&r>v){const E=2*Math.sqrt(1+r-d-v);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-r-v);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+v-r-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(z0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(z0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new rt,z0=new Yo;class fe{constructor(e,i,r,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],S=r[2],E=r[5],R=r[8],C=l[0],y=l[3],x=l[6],F=l[1],O=l[4],L=l[7],B=l[2],I=l[5],P=l[8];return c[0]=h*C+d*F+m*B,c[3]=h*y+d*O+m*I,c[6]=h*x+d*L+m*P,c[1]=p*C+_*F+v*B,c[4]=p*y+_*O+v*I,c[7]=p*x+_*L+v*P,c[2]=S*C+E*F+R*B,c[5]=S*y+E*O+R*I,c[8]=S*x+E*L+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,S=d*m-_*c,E=p*c-h*m,R=i*v+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=v*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new fe,I0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Bu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:I0,fromXYZ:H0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:I0,fromXYZ:H0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Ae=vM();function ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class xM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=Iu("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Iu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class Bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(rh(l[h].image)):c.push(rh(l[h]))}else c=rh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let MM=0;const sh=new rt;class Bn extends Os{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=pa,l=pa,c=Nn,h=Ar,d=Ri,m=mi,p=Bn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ps(),this.name="",this.source=new Bd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xh:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xh:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=P_;Bn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],S=m[1],E=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(E+1)/2,B=(x+1)/2,I=(_+S)/4,P=(v+C)/4,j=(R+y)/4;return O>L&&O>B?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=I/r,c=P/r):L>B?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=I/l,c=j/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=P/c,l=j/c),this.set(r,l,c,i),this}let F=Math.sqrt((y-R)*(y-R)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(F)<.001&&(F=1),this.x=(y-R)/F,this.y=(v-C)/F,this.z=(S-_)/F,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Os{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Bd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends yM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class k_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),fu.subVectors(this.max,Lo),ds.subVectors(e.a,Lo),ps.subVectors(e.b,Lo),ms.subVectors(e.c,Lo),ka.subVectors(ps,ds),Wa.subVectors(ms,ps),_r.subVectors(ds,ms);let i=[0,-ka.z,ka.y,0,-Wa.z,Wa.y,0,-_r.z,_r.y,ka.z,0,-ka.x,Wa.z,0,-Wa.x,_r.z,0,-_r.x,-ka.y,ka.x,0,-Wa.y,Wa.x,0,-_r.y,_r.x,0];return!oh(i,ds,ps,ms,fu)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,ds,ps,ms,fu))?!1:(hu.crossVectors(ka,Wa),i=[hu.x,hu.y,hu.z],oh(i,ds,ps,ms,fu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],yi=new rt,cu=new Zo,ds=new rt,ps=new rt,ms=new rt,ka=new rt,Wa=new rt,_r=new rt,Lo=new rt,fu=new rt,hu=new rt,vr=new rt;function oh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){vr.fromArray(o,c);const d=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=e.dot(vr),p=i.dot(vr),_=r.dot(vr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const TM=new Zo,No=new rt,lh=new rt;class zd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):TM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(lh)),this.expandByPoint(No.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new rt,uh=new rt,du=new rt,qa=new rt,ch=new rt,pu=new rt,fh=new rt;class bM{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){uh.copy(e).add(i).multiplyScalar(.5),du.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(uh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(du),d=qa.dot(this.direction),m=-qa.dot(du),p=qa.lengthSq(),_=Math.abs(1-h*h);let v,S,E,R;if(_>0)if(v=h*m-d,S=h*d-m,R=c*_,v>=0)if(S>=-R)if(S<=R){const C=1/_;v*=C,S*=C,E=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;else S<=-R?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+S*(S+2*m)+p):S<=R?(v=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),E=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(uh).addScaledVector(du,S),E}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,r,l,c){ch.subVectors(i,e),pu.subVectors(r,e),fh.crossVectors(ch,pu);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;qa.subVectors(this.origin,e);const m=d*this.direction.dot(pu.crossVectors(qa,pu));if(m<0)return null;const p=d*this.direction.dot(ch.cross(qa));if(p<0||m+p>h)return null;const _=-d*qa.dot(fh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,c,h,d,m,p,_,v,S,E,R,C,y){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,v,S,E,R,C,y)}set(e,i,r,l,c,h,d,m,p,_,v,S,E,R,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=S,x[3]=E,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),c=1/gs.setFromMatrixColumn(e,1).length(),h=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*_,E=h*v,R=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,E=m*v,R=p*_,C=p*v;i[0]=S+C*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=E*d-R,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,E=m*v,R=p*_,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,E=h*v,R=d*_,C=d*v;i[0]=m*_,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*_,i[4]=C-S*v,i[8]=R*v+E,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*v+R,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+C,i[5]=h*_,i[9]=E*v-R,i[2]=R*v-E,i[6]=d*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AM,e,RM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ya.crossVectors(r,$n),Ya.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ya.crossVectors(r,$n)),Ya.normalize(),mu.crossVectors($n,Ya),l[0]=Ya.x,l[4]=mu.x,l[8]=$n.x,l[1]=Ya.y,l[5]=mu.y,l[9]=$n.y,l[2]=Ya.z,l[6]=mu.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],S=r[9],E=r[13],R=r[2],C=r[6],y=r[10],x=r[14],F=r[3],O=r[7],L=r[11],B=r[15],I=l[0],P=l[4],j=l[8],A=l[12],w=l[1],X=l[5],st=l[9],at=l[13],dt=l[2],ct=l[6],N=l[10],H=l[14],J=l[3],Mt=l[7],xt=l[11],U=l[15];return c[0]=h*I+d*w+m*dt+p*J,c[4]=h*P+d*X+m*ct+p*Mt,c[8]=h*j+d*st+m*N+p*xt,c[12]=h*A+d*at+m*H+p*U,c[1]=_*I+v*w+S*dt+E*J,c[5]=_*P+v*X+S*ct+E*Mt,c[9]=_*j+v*st+S*N+E*xt,c[13]=_*A+v*at+S*H+E*U,c[2]=R*I+C*w+y*dt+x*J,c[6]=R*P+C*X+y*ct+x*Mt,c[10]=R*j+C*st+y*N+x*xt,c[14]=R*A+C*at+y*H+x*U,c[3]=F*I+O*w+L*dt+B*J,c[7]=F*P+O*X+L*ct+B*Mt,c[11]=F*j+O*st+L*N+B*xt,c[15]=F*A+O*at+L*H+B*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],S=e[10],E=e[14],R=e[3],C=e[7],y=e[11],x=e[15],F=m*E-p*S,O=d*E-p*v,L=d*S-m*v,B=h*E-p*_,I=h*S-m*_,P=h*v-d*_;return i*(C*F-y*O+x*L)-r*(R*F-y*B+x*I)+l*(R*O-C*B+x*P)-c*(R*L-C*I+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],S=e[10],E=e[11],R=e[12],C=e[13],y=e[14],x=e[15],F=v*y*p-C*S*p+C*m*E-d*y*E-v*m*x+d*S*x,O=R*S*p-_*y*p-R*m*E+h*y*E+_*m*x-h*S*x,L=_*C*p-R*v*p+R*d*E-h*C*E-_*d*x+h*v*x,B=R*v*m-_*C*m-R*d*S+h*C*S+_*d*y-h*v*y,I=i*F+r*O+l*L+c*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=F*P,e[1]=(C*S*c-v*y*c-C*l*E+r*y*E+v*l*x-r*S*x)*P,e[2]=(d*y*c-C*m*c+C*l*p-r*y*p-d*l*x+r*m*x)*P,e[3]=(v*m*c-d*S*c-v*l*p+r*S*p+d*l*E-r*m*E)*P,e[4]=O*P,e[5]=(_*y*c-R*S*c+R*l*E-i*y*E-_*l*x+i*S*x)*P,e[6]=(R*m*c-h*y*c-R*l*p+i*y*p+h*l*x-i*m*x)*P,e[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*E+i*m*E)*P,e[8]=L*P,e[9]=(R*v*c-_*C*c-R*r*E+i*C*E+_*r*x-i*v*x)*P,e[10]=(h*C*c-R*d*c+R*r*p-i*C*p-h*r*x+i*d*x)*P,e[11]=(_*d*c-h*v*c-_*r*p+i*v*p+h*r*E-i*d*E)*P,e[12]=B*P,e[13]=(_*C*l-R*v*l+R*r*S-i*C*S-_*r*y+i*v*y)*P,e[14]=(R*d*l-h*C*l-R*r*m+i*C*m+h*r*y-i*d*y)*P,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,S=c*p,E=c*_,R=c*v,C=h*_,y=h*v,x=d*v,F=m*p,O=m*_,L=m*v,B=r.x,I=r.y,P=r.z;return l[0]=(1-(C+x))*B,l[1]=(E+L)*B,l[2]=(R-O)*B,l[3]=0,l[4]=(E-L)*I,l[5]=(1-(S+x))*I,l[6]=(y+F)*I,l[7]=0,l[8]=(R+O)*P,l[9]=(y-F)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=gs.set(l[0],l[1],l[2]).length();const h=gs.set(l[4],l[5],l[6]).length(),d=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ei.copy(this);const p=1/c,_=1/h,v=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=zi,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(m)R=c/(h-c),C=h*c/(h-c);else if(d===zi)R=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===zu)R=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=zi,m=!1){const p=this.elements,_=2/(i-e),v=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(m)R=1/(h-c),C=h/(h-c);else if(d===zi)R=-2/(h-c),C=-(h+c)/(h-c);else if(d===zu)R=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new rt,Ei=new cn,AM=new rt(0,0,0),RM=new rt(1,1,1),Ya=new rt,mu=new rt,$n=new rt,G0=new cn,V0=new Yo;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return V0.setFromEuler(this),this.setFromQuaternion(V0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CM=0;const X0=new rt,_s=new Yo,ca=new cn,gu=new rt,Oo=new rt,wM=new rt,DM=new Yo,k0=new rt(1,0,0),W0=new rt(0,1,0),q0=new rt(0,0,1),Y0={type:"added"},UM={type:"removed"},vs={type:"childadded",child:null},hh={type:"childremoved",child:null};class ni extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new rt,i=new _a,r=new Yo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new fe}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(k0,e)}rotateY(e){return this.rotateOnAxis(W0,e)}rotateZ(e){return this.rotateOnAxis(q0,e)}translateOnAxis(e,i){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(k0,e)}translateY(e){return this.translateOnAxis(W0,e)}translateZ(e){return this.translateOnAxis(q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gu.copy(e):gu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Oo,gu,this.up):ca.lookAt(gu,Oo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ca),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Y0),vs.child=e,this.dispatchEvent(vs),vs.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(UM),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Y0),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),S=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new rt(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new rt,fa=new rt,dh=new rt,ha=new rt,xs=new rt,Ss=new rt,Z0=new rt,ph=new rt,mh=new rt,gh=new rt,_h=new nn,vh=new nn,xh=new nn;class Ai{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ti.subVectors(l,i),fa.subVectors(r,i),dh.subVectors(e,i);const h=Ti.dot(Ti),d=Ti.dot(fa),m=Ti.dot(dh),p=fa.dot(fa),_=fa.dot(dh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,E=(p*m-d*_)*S,R=(h*_-d*m)*S;return c.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(d,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(_h,c.x),h.addScaledVector(vh,c.y),h.addScaledVector(xh,c.z),h}static isFrontFacing(e,i,r,l){return Ti.subVectors(r,i),fa.subVectors(e,i),Ti.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;xs.subVectors(l,r),Ss.subVectors(c,r),ph.subVectors(e,r);const m=xs.dot(ph),p=Ss.dot(ph);if(m<=0&&p<=0)return i.copy(r);mh.subVectors(e,l);const _=xs.dot(mh),v=Ss.dot(mh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(xs,h);gh.subVectors(e,c);const E=xs.dot(gh),R=Ss.dot(gh);if(R>=0&&E<=R)return i.copy(c);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(Ss,d);const y=_*R-E*v;if(y<=0&&v-_>=0&&E-R>=0)return Z0.subVectors(c,l),d=(v-_)/(v-_+(E-R)),i.copy(l).addScaledVector(Z0,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(r).addScaledVector(xs,h).addScaledVector(Ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ee{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=Fd(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Sh(h,c,e+1/3),this.g=Sh(h,c,e),this.b=Sh(h,c,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=q_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ae.workingToColorSpace(Ln.copy(this),e),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=pi){Ae.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(_u);const r=Go(Za.h,_u.h,i),l=Go(Za.s,_u.s,i),c=Go(Za.l,_u.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ee;Ee.NAMES=q_;let LM=0;class Vu extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=As,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Id extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new rt,vu=new se;let NM=0;class Gi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=L0,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(e),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),c=Pn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L0&&(e.usage=this.usage),e}}class Y_ extends Gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Z_ extends Gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ci extends Gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let OM=0;const di=new cn,Mh=new ni,Ms=new rt,ti=new Zo,Po=new Zo,gn=new rt;class Xi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?Z_:Y_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ti.min,Po.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Po.max),ti.expandByPoint(gn)):(ti.expandByPoint(Po.min),ti.expandByPoint(Po.max))}ti.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)gn.fromBufferAttribute(d,p),m&&(Ms.fromBufferAttribute(e,p),gn.add(Ms)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new rt,m[j]=new rt;const p=new rt,_=new rt,v=new rt,S=new se,E=new se,R=new se,C=new rt,y=new rt;function x(j,A,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,A),v.fromBufferAttribute(r,w),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,A),R.fromBufferAttribute(c,w),_.sub(p),v.sub(p),E.sub(S),R.sub(S);const X=1/(E.x*R.y-R.x*E.y);isFinite(X)&&(C.copy(_).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(X),y.copy(v).multiplyScalar(E.x).addScaledVector(_,-R.x).multiplyScalar(X),d[j].add(C),d[A].add(C),d[w].add(C),m[j].add(y),m[A].add(y),m[w].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let j=0,A=F.length;j<A;++j){const w=F[j],X=w.start,st=w.count;for(let at=X,dt=X+st;at<dt;at+=3)x(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const O=new rt,L=new rt,B=new rt,I=new rt;function P(j){B.fromBufferAttribute(l,j),I.copy(B);const A=d[j];O.copy(A),O.sub(B.multiplyScalar(B.dot(A))).normalize(),L.crossVectors(I,A);const X=L.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,X)}for(let j=0,A=F.length;j<A;++j){const w=F[j],X=w.start,st=w.count;for(let at=X,dt=X+st;at<dt;at+=3)P(e.getX(at+0)),P(e.getX(at+1)),P(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,_=new rt,v=new rt;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let E=0,R=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*_;for(let x=0;x<_;x++)S[R++]=p[E++]}return new Gi(S,_,v)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],E=e(S,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const E=p[v];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let S=0,E=v.length;S<E;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new cn,xr=new bM,xu=new zd,K0=new rt,Su=new rt,Mu=new rt,yu=new rt,yh=new rt,Eu=new rt,Q0=new rt,Tu=new rt;class wi extends ni{constructor(e=new Xi,i=new Id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(yh.fromBufferAttribute(v,e),h?Eu.addScaledVector(yh,_):Eu.addScaledVector(yh.sub(i),_))}i.add(Eu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(c),xr.copy(e.ray).recast(e.near),!(xu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(xu,K0)===null||xr.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(j0.copy(c).invert(),xr.copy(e.ray).applyMatrix4(j0),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],F=Math.max(y.start,E.start),O=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let L=F,B=O;L<B;L+=3){const I=d.getX(L),P=d.getX(L+1),j=d.getX(L+2);l=bu(this,x,e,r,p,_,v,I,P,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const F=d.getX(y),O=d.getX(y+1),L=d.getX(y+2);l=bu(this,h,e,r,p,_,v,F,O,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],F=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let L=F,B=O;L<B;L+=3){const I=L,P=L+1,j=L+2;l=bu(this,x,e,r,p,_,v,I,P,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const F=y,O=y+1,L=y+2;l=bu(this,h,e,r,p,_,v,F,O,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function PM(o,e,i,r,l,c,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ja,d),m===null)return null;Tu.copy(d),Tu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tu);return p<i.near||p>i.far?null:{distance:p,point:Tu.clone(),object:o}}function bu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Su),o.getVertexPosition(m,Mu),o.getVertexPosition(p,yu);const _=PM(o,e,i,r,Su,Mu,yu,Q0);if(_){const v=new rt;Ai.getBarycoord(Q0,Su,Mu,yu,v),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,v,new se)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,v,new se)),h&&(_.normal=Ai.getInterpolatedAttribute(h,d,m,p,v,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};Ai.getNormal(Su,Mu,yu,S.normal),_.face=S,_.barycoord=v}return _}class jo extends Xi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,h,c,0),R("z","y","x",1,-1,r,i,-e,h,c,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(v,2));function R(C,y,x,F,O,L,B,I,P,j,A){const w=L/P,X=B/j,st=L/2,at=B/2,dt=I/2,ct=P+1,N=j+1;let H=0,J=0;const Mt=new rt;for(let xt=0;xt<N;xt++){const U=xt*X-at;for(let tt=0;tt<ct;tt++){const mt=tt*w-st;Mt[C]=mt*F,Mt[y]=U*O,Mt[x]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[x]=I>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(tt/P),v.push(1-xt/j),H+=1}}for(let xt=0;xt<j;xt++)for(let U=0;U<P;U++){const tt=S+U+ct*xt,mt=S+U+ct*(xt+1),Rt=S+(U+1)+ct*(xt+1),It=S+(U+1)+ct*xt;m.push(tt,mt,It),m.push(mt,Rt,It),J+=6}d.addGroup(E,J,A),E+=J,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(o){const e={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)e[l]=r[l]}return e}function FM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function j_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Hu={clone:Ls,merge:Fn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class K_ extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new rt,J0=new se,$0=new se;class bi extends K_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,J0,$0),i.subVectors($0,J0)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ho*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Es=1;class IM extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(ys,Es,e,i);l.layers=this.layers,this.add(l);const c=new bi(ys,Es,e,i);c.layers=this.layers,this.add(c);const h=new bi(ys,Es,e,i);h.layers=this.layers,this.add(h);const d=new bi(ys,Es,e,i);d.layers=this.layers,this.add(d);const m=new bi(ys,Es,e,i);m.layers=this.layers,this.add(m);const p=new bi(ys,Es,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Q_ extends Bn{constructor(e=[],i=Cr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J_ extends Wn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Q_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),c=new Cn({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ii});c.uniforms.tEquirect.value=i;const h=new wi(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Nn),new IM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Au extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Au;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class GM extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class VM extends Bn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=Rn,_=Rn,v,S){super(null,h,d,m,p,_,l,c,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new rt,XM=new rt,kM=new fe;class Er{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Th.subVectors(r,i).cross(XM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kM.getNormalMatrix(e),l=this.coplanarPoint(Th).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new zd,WM=new se(.5,.5),Ru=new rt;class $_{constructor(e=new Er,i=new Er,r=new Er,l=new Er,c=new Er,h=new Er){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=zi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],S=c[6],E=c[7],R=c[8],C=c[9],y=c[10],x=c[11],F=c[12],O=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-h,E-_,x-R,B-F).normalize(),l[1].setComponents(p+h,E+_,x+R,B+F).normalize(),l[2].setComponents(p+d,E+v,x+C,B+O).normalize(),l[3].setComponents(p-d,E-v,x-C,B-O).normalize(),r)l[4].setComponents(m,S,y,L).normalize(),l[5].setComponents(p-m,E-S,x-y,B-L).normalize();else if(l[4].setComponents(p-m,E-S,x-y,B-L).normalize(),i===zi)l[5].setComponents(p+m,E+S,x+y,B+L).normalize();else if(i===zu)l[5].setComponents(m,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const i=WM.distanceTo(e.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ru.x=l.normal.x>0?e.max.x:e.min.x,Ru.y=l.normal.y>0?e.max.y:e.min.y,Ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends Bn{constructor(e,i,r=Vi,l,c,h,d=Rn,m=Rn,p,_=ga,v=1){if(_!==ga&&_!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qM extends qo{constructor(e,i=Vi,r=Cr,l,c,h=Rn,d=Rn,m,p=ga){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Xi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,S=i/m,E=[],R=[],C=[],y=[];for(let x=0;x<_;x++){const F=x*S-h;for(let O=0;O<p;O++){const L=O*v-c;R.push(L,-F,0),C.push(0,0,1),y.push(O/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<d;F++){const O=F+p*x,L=F+p*(x+1),B=F+1+p*(x+1),I=F+1+p*x;E.push(O,L,I),E.push(L,B,I)}this.setIndex(E),this.setAttribute("position",new Ci(R,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class YM extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZM extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xu extends K_{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KM extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class QM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function t_(o,e,i,r){const l=JM(r);switch(i){case H_:return o*e;case V_:return o*e/l.components*l.byteLength;case Ud:return o*e/l.components*l.byteLength;case Ds:return o*e*2/l.components*l.byteLength;case Ld:return o*e*2/l.components*l.byteLength;case G_:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Nd:return o*e*4/l.components*l.byteLength;case Uu:case Lu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Ou:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(o,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(e,8)/2;case jh:case Kh:case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qh:case td:case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gd:case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(o){switch(o){case mi:case F_:return{byteLength:1,components:1};case Vo:case B_:case ei:return{byteLength:2,components:1};case wd:case Dd:return{byteLength:2,components:4};case Vi:case Cd:case Bi:return{byteLength:4,components:1};case z_:case I_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);function ev(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function $M(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<v.length;E++){const R=v[S],C=v[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,v[S]=C)}v.length=S+1;for(let E=0,R=v.length;E<R;E++){const C=v[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ST=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:ty,alphahash_pars_fragment:ey,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ay,alphatest_pars_fragment:ry,aomap_fragment:sy,aomap_pars_fragment:oy,batching_pars_vertex:ly,batching_vertex:uy,begin_vertex:cy,beginnormal_vertex:fy,bsdfs:hy,iridescence_fragment:dy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:_y,clipping_planes_vertex:vy,color_fragment:xy,color_pars_fragment:Sy,color_pars_vertex:My,color_vertex:yy,common:Ey,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:by,displacementmap_pars_vertex:Ay,displacementmap_vertex:Ry,emissivemap_fragment:Cy,emissivemap_pars_fragment:wy,colorspace_fragment:Dy,colorspace_pars_fragment:Uy,envmap_fragment:Ly,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Oy,envmap_pars_vertex:Py,envmap_physical_pars_fragment:qy,envmap_vertex:Fy,fog_vertex:By,fog_pars_vertex:zy,fog_fragment:Iy,fog_pars_fragment:Hy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:ky,lights_pars_begin:Wy,lights_toon_fragment:Yy,lights_toon_pars_fragment:Zy,lights_phong_fragment:jy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Qy,lights_physical_pars_fragment:Jy,lights_fragment_begin:$y,lights_fragment_maps:tE,lights_fragment_end:eE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphinstance_vertex:hE,morphcolor_vertex:dE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:AE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:wE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:LE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:FE,shadowmap_vertex:BE,shadowmask_pars_fragment:zE,skinbase_vertex:IE,skinning_pars_vertex:HE,skinning_vertex:GE,skinnormal_vertex:VE,specularmap_fragment:XE,specularmap_pars_fragment:kE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:ZE,uv_pars_fragment:jE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:$E,background_frag:tT,backgroundCube_vert:eT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:aT,depth_vert:rT,depth_frag:sT,distance_vert:oT,distance_frag:lT,equirect_vert:uT,equirect_frag:cT,linedashed_vert:fT,linedashed_frag:hT,meshbasic_vert:dT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:_T,meshmatcap_frag:vT,meshnormal_vert:xT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:yT,meshphysical_vert:ET,meshphysical_frag:TT,meshtoon_vert:bT,meshtoon_frag:AT,points_vert:RT,points_frag:CT,shadow_vert:wT,shadow_frag:DT,sprite_vert:UT,sprite_frag:LT},Bt={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ee(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Fn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Fn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ee(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Fn([Bt.points,Bt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Fn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Fn([Bt.common,Bt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Fn([Bt.sprite,Bt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Fn([Bt.common,Bt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Fn([Bt.lights,Bt.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Cu={r:0,b:0,g:0},Mr=new _a,NT=new cn;function OT(o,e,i,r,l,c,h){const d=new Ee(0);let m=c===!0?0:1,p,_,v=null,S=0,E=null;function R(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function C(O){let L=!1;const B=R(O);B===null?x(d,m):B&&B.isColor&&(x(B,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,L){const B=R(L);B&&(B.isCubeTexture||B.mapping===Gu)?(_===void 0&&(_=new wi(new jo(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ls(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Mr.copy(L.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(Mr)),_.material.toneMapped=Ae.getTransfer(B.colorSpace)!==ze,(v!==B||S!==B.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,v=B,S=B.version,E=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new wi(new Ko(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ls(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(B.colorSpace)!==ze,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||S!==B.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,S=B.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,L){O.getRGB(Cu,j_(o)),r.buffers.color.setClear(Cu.r,Cu.g,Cu.b,L,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(d,m)},render:C,addToRenderList:y,dispose:F}}function PT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(w,X,st,at,dt){let ct=!1;const N=v(at,st,X);c!==N&&(c=N,p(c.object)),ct=E(w,at,st,dt),ct&&R(w,at,st,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,L(w,X,st,at),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function v(w,X,st){const at=st.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let ct=dt[X.id];ct===void 0&&(ct={},dt[X.id]=ct);let N=ct[at];return N===void 0&&(N=S(m()),ct[at]=N),N}function S(w){const X=[],st=[],at=[];for(let dt=0;dt<i;dt++)X[dt]=0,st[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:at,object:w,attributes:{},index:null}}function E(w,X,st,at){const dt=c.attributes,ct=X.attributes;let N=0;const H=st.getAttributes();for(const J in H)if(H[J].location>=0){const xt=dt[J];let U=ct[J];if(U===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==at}function R(w,X,st,at){const dt={},ct=X.attributes;let N=0;const H=st.getAttributes();for(const J in H)if(H[J].location>=0){let xt=ct[J];xt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),dt[J]=U,N++}c.attributes=dt,c.attributesNum=N,c.index=at}function C(){const w=c.newAttributes;for(let X=0,st=w.length;X<st;X++)w[X]=0}function y(w){x(w,0)}function x(w,X){const st=c.newAttributes,at=c.enabledAttributes,dt=c.attributeDivisors;st[w]=1,at[w]===0&&(o.enableVertexAttribArray(w),at[w]=1),dt[w]!==X&&(o.vertexAttribDivisor(w,X),dt[w]=X)}function F(){const w=c.newAttributes,X=c.enabledAttributes;for(let st=0,at=X.length;st<at;st++)X[st]!==w[st]&&(o.disableVertexAttribArray(st),X[st]=0)}function O(w,X,st,at,dt,ct,N){N===!0?o.vertexAttribIPointer(w,X,st,dt,ct):o.vertexAttribPointer(w,X,st,at,dt,ct)}function L(w,X,st,at){C();const dt=at.attributes,ct=st.getAttributes(),N=X.defaultAttributeValues;for(const H in ct){const J=ct[H];if(J.location>=0){let Mt=dt[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const xt=Mt.normalized,U=Mt.itemSize,tt=e.get(Mt);if(tt===void 0)continue;const mt=tt.buffer,Rt=tt.type,It=tt.bytesPerElement,$=Rt===o.INT||Rt===o.UNSIGNED_INT||Mt.gpuType===Cd;if(Mt.isInterleavedBufferAttribute){const et=Mt.data,Ct=et.stride,Ht=Mt.offset;if(et.isInstancedInterleavedBuffer){for(let At=0;At<J.locationSize;At++)x(J.location+At,et.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<J.locationSize;At++)y(J.location+At);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let At=0;At<J.locationSize;At++)O(J.location+At,U/J.locationSize,Rt,xt,Ct*It,(Ht+U/J.locationSize*At)*It,$)}else{if(Mt.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)x(J.location+et,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let et=0;et<J.locationSize;et++)y(J.location+et);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let et=0;et<J.locationSize;et++)O(J.location+et,U/J.locationSize,Rt,xt,U*It,U/J.locationSize*et*It,$)}}else if(N!==void 0){const xt=N[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(J.location,xt);break;case 3:o.vertexAttrib3fv(J.location,xt);break;case 4:o.vertexAttrib4fv(J.location,xt);break;default:o.vertexAttrib1fv(J.location,xt)}}}}F()}function B(){j();for(const w in r){const X=r[w];for(const st in X){const at=X[st];for(const dt in at)_(at[dt].object),delete at[dt];delete X[st]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const st in X){const at=X[st];for(const dt in at)_(at[dt].object),delete at[dt];delete X[st]}delete r[w.id]}function P(w){for(const X in r){const st=r[X];if(st[w.id]===void 0)continue;const at=st[w.id];for(const dt in at)_(at[dt].object),delete at[dt];delete st[w.id]}}function j(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:F}}function FT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let E=0;for(let R=0;R<v;R++)E+=_[R];i.update(E,r,1)}function m(p,_,v,S){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],_[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,v);let R=0;for(let C=0;C<v;C++)R+=_[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ri&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bi&&!j)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ae("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:L,maxSamples:B,samples:I}}function zT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Er,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const E=v.length!==0||S||r!==0||l;return l=S,r=v.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,E){const R=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||R===null||R.length===0||c&&!y)c?_(null):p();else{const F=c?0:r,O=F*4;let L=x.clippingState||null;m.value=L,L=_(R,S,O,E);for(let B=0;B!==O;++B)L[B]=i[B];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,E,R){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=E+C*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,L=E;O!==C;++O,L+=4)h.copy(v[O]).applyMatrix4(F,d),h.normal.toArray(y,L),y[L+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function IT(o){let e=new WeakMap;function i(h,d){return d===Gh?h.mapping=Cr:d===Vh&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new J_(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Qa=4,e_=[.125,.215,.35,.446,.526,.582],br=20,HT=256,Fo=new Xu,n_=new Ee;let bh=null,Ah=0,Rh=0,Ch=!1;const GT=new rt;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=GT}=c;bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ei,format:Ri,colorSpace:Us,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VT(c)),this._blurMaterial=kT(c,e,i),this._ggxMaterial=XT(c,e,i)}return l}_compileMaterial(e){const i=new wi(new Xi,e);this._renderer.compile(i,Fo)}_sceneToCubeUV(e,i,r,l,c){const m=new bi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,E=v.toneMapping;v.getClearColor(n_),v.toneMapping=Hi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new jo,new Id({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,x=!0):(y.color.copy(n_),x=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const B=this._cubeSize;Ts(l,L*B,O>2?B:0,B,B),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=E,v.autoClear=S,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Cr||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Fo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=0+p*1.25,E=v*S,{_lodMax:R}=this,C=this._sizeLods[r],y=3*C*(r>R-Qa?r-R+Qa:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,Ts(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Fo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-r,Ts(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Fo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*br-1),C=c/R,y=isFinite(c)?1+Math.floor(_*C):br;y>br&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const x=[];let F=0;for(let P=0;P<br;++P){const j=P/C,A=Math.exp(-j*j/2);x.push(A),P===0?F+=A:P<y&&(F+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-r;const L=this._sizeLods[l],B=3*L*(l>O-Qa?l-O+Qa:0),I=4*(this._cubeSize-L);Ts(i,B,I,3*L,2*L),m.setRenderTarget(i),m.render(v,Fo)}}function VT(o){const e=[],i=[],r=[];let l=o;const c=o-Qa+1+e_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Qa?m=e_[h-o+Qa-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],E=6,R=6,C=3,y=2,x=1,F=new Float32Array(C*R*E),O=new Float32Array(y*R*E),L=new Float32Array(x*R*E);for(let I=0;I<E;I++){const P=I%3*2/3-1,j=I>2?0:-1,A=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];F.set(A,C*R*I),O.set(S,y*R*I);const w=[I,I,I,I,I,I];L.set(w,x*R*I)}const B=new Xi;B.setAttribute("position",new Gi(F,C)),B.setAttribute("uv",new Gi(O,y)),B.setAttribute("faceIndex",new Gi(L,x)),r.push(new wi(B,null)),l>Qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function a_(o,e,i){const r=new Wn(o,e,i);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function XT(o,e,i){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function kT(o,e,i){const r=new Float32Array(br),l=new rt(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function r_(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function s_(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,_=m===Cr||m===ws;if(p||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new i_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new i_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function qT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ko("WebGLRenderer: "+r+" extension not supported."),l}}}function YT(o,e,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(v){const S=[],E=v.index,R=v.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let O=0,L=F.length;O<L;O+=3){const B=F[O+0],I=F[O+1],P=F[O+2];S.push(B,I,I,P,P,B)}}else if(R!==void 0){const F=R.array;C=R.version;for(let O=0,L=F.length/3-1;O<L;O+=3){const B=O+0,I=O+1,P=O+2;S.push(B,I,I,P,P,B)}}else return;const y=new(X_(S)?Z_:Y_)(S,1);y.version=C;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function _(v){const S=c.get(v);if(S){const E=v.index;E!==null&&S.version<E.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function ZT(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(r,E,c,S*h),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,c,S*h,R),i.update(E,r,R))}function _(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,R);let y=0;for(let x=0;x<R;x++)y+=E[x];i.update(y,r,1)}function v(S,E,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,C,0,R);let x=0;for(let F=0;F<R;F++)x+=E[F]*C[F];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function jT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:we("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function KT(o,e,i){const r=new WeakMap,l=new nn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let B=d.attributes.position.count*L,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const P=new Float32Array(B*I*4*v),j=new k_(P,B,I,v);j.type=Bi,j.needsUpdate=!0;const A=L*4;for(let X=0;X<v;X++){const st=x[X],at=F[X],dt=O[X],ct=B*I*4*X;for(let N=0;N<st.count;N++){const H=N*A;R===!0&&(l.fromBufferAttribute(st,N),P[ct+H+0]=l.x,P[ct+H+1]=l.y,P[ct+H+2]=l.z,P[ct+H+3]=0),C===!0&&(l.fromBufferAttribute(at,N),P[ct+H+4]=l.x,P[ct+H+5]=l.y,P[ct+H+6]=l.z,P[ct+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,N),P[ct+H+8]=l.x,P[ct+H+9]=l.y,P[ct+H+10]=l.z,P[ct+H+11]=dt.itemSize===4?l.w:1)}}S={count:v,texture:j,size:new se(B,I)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function QT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const JT={[C_]:"LINEAR_TONE_MAPPING",[w_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[U_]:"ACES_FILMIC_TONE_MAPPING",[N_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[L_]:"CUSTOM_TONE_MAPPING"};function $T(o,e,i,r,l){const c=new Wn(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Wn(e,i,{type:ei,depthBuffer:!1,stencilBuffer:!1}),d=new Xi;d.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const m=new YM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new wi(d,m),_=new Xu(-1,1,1,-1,0,1);let v=null,S=null,E=!1,R,C=null,y=[],x=!1;this.setSize=function(F,O){c.setSize(F,O),h.setSize(F,O);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(F,O)}},this.setEffects=function(F){y=F,x=y.length>0&&y[0].isRenderPass===!0;const O=c.width,L=c.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(O,L)}},this.begin=function(F,O){if(E||F.toneMapping===Hi&&y.length===0)return!1;if(C=O,O!==null){const L=O.width,B=O.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return x===!1&&F.setRenderTarget(c),R=F.toneMapping,F.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(F,O){F.toneMapping=R,E=!0;let L=c,B=h;for(let I=0;I<y.length;I++){const P=y[I];if(P.enabled!==!1&&(P.render(F,B,L,O),P.needsSwap!==!1)){const j=L;L=B,B=j}}if(v!==F.outputColorSpace||S!==F.toneMapping){v=F.outputColorSpace,S=F.toneMapping,m.defines={},Ae.getTransfer(v)===ze&&(m.defines.SRGB_TRANSFER="");const I=JT[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,F.setRenderTarget(C),F.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const nv=new Bn,Ed=new qo(1,1),iv=new k_,av=new EM,rv=new Q_,o_=[],l_=[],u_=new Float32Array(16),c_=new Float32Array(9),f_=new Float32Array(4);function Fs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=o_[l];if(c===void 0&&(c=new Float32Array(l),o_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Wu(o,e){let i=l_[e];i===void 0&&(i=new Int32Array(e),l_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function ab(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;f_.set(r),o.uniformMatrix2fv(this.addr,!1,f_),pn(i,r)}}function rb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;c_.set(r),o.uniformMatrix3fv(this.addr,!1,c_),pn(i,r)}}function sb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),pn(i,r)}}function ob(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function fb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function mb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ed.compareFunction=i.isReversedDepthBuffer()?Pd:Od,c=Ed):c=nv,i.setTexture2D(e||c,l)}function gb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||av,l)}function _b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||rv,l)}function vb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||iv,l)}function xb(o){switch(o){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return ub;case 35669:case 35673:return cb;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}function Sb(o,e){o.uniform1fv(this.addr,e)}function Mb(o,e){const i=Fs(e,this.size,2);o.uniform2fv(this.addr,i)}function yb(o,e){const i=Fs(e,this.size,3);o.uniform3fv(this.addr,i)}function Eb(o,e){const i=Fs(e,this.size,4);o.uniform4fv(this.addr,i)}function Tb(o,e){const i=Fs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function bb(o,e){const i=Fs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Ab(o,e){const i=Fs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Rb(o,e){o.uniform1iv(this.addr,e)}function Cb(o,e){o.uniform2iv(this.addr,e)}function wb(o,e){o.uniform3iv(this.addr,e)}function Db(o,e){o.uniform4iv(this.addr,e)}function Ub(o,e){o.uniform1uiv(this.addr,e)}function Lb(o,e){o.uniform2uiv(this.addr,e)}function Nb(o,e){o.uniform3uiv(this.addr,e)}function Ob(o,e){o.uniform4uiv(this.addr,e)}function Pb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ed:h=nv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function Fb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||av,c[h])}function Bb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||rv,c[h])}function zb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||iv,c[h])}function Ib(o){switch(o){case 5126:return Sb;case 35664:return Mb;case 35665:return yb;case 35666:return Eb;case 35674:return Tb;case 35675:return bb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return wb;case 35669:case 35673:return Db;case 5125:return Ub;case 36294:return Lb;case 36295:return Nb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return zb}}class Hb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=xb(i.type)}}class Gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ib(i.type)}}class Vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function h_(o,e){o.seq.push(e),o.map[e.id]=e}function Xb(o,e,i){const r=o.name,l=r.length;for(wh.lastIndex=0;;){const c=wh.exec(r),h=wh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){h_(i,p===void 0?new Hb(d,o,e):new Gb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Vb(d),h_(i,v)),i=v}}}class Pu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);Xb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function d_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const kb=37297;let Wb=0;function qb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const p_=new fe;function Yb(o){Ae._getMatrix(p_,Ae.workingColorSpace,o);const e=`mat3( ${p_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Bu:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function m_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+qb(o.getShaderSource(e),d)}else return c}function Zb(o,e){const i=Yb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jb={[C_]:"Linear",[w_]:"Reinhard",[D_]:"Cineon",[U_]:"ACESFilmic",[N_]:"AgX",[O_]:"Neutral",[L_]:"Custom"};function Kb(o,e){const i=jb[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wu=new rt;function Qb(){Ae.getLuminanceCoefficients(wu);const o=wu.x.toFixed(4),e=wu.y.toFixed(4),i=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function $b(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function t1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Io(o){return o!==""}function g_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(e1,i1)}const n1=new Map;function i1(o,e){let i=de[e];if(i===void 0){const r=n1.get(e);if(r!==void 0)i=de[r],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(i)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(o){return o.replace(a1,r1)}function r1(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function x_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const s1={[Du]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function o1(o){return s1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l1={[Cr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function u1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":l1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const c1={[ws]:"ENVMAP_MODE_REFRACTION"};function f1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":c1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h1={[R_]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[XS]:"ENVMAP_BLENDING_ADD"};function d1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":h1[o.combine]||"ENVMAP_BLENDING_NONE"}function p1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function m1(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=o1(i),p=u1(i),_=f1(i),v=d1(i),S=p1(i),E=Jb(i),R=$b(c),C=l.createProgram();let y,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),x.length>0&&(x+=`
`)):(y=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),x=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?de.tonemapping_pars_fragment:"",i.toneMapping!==Hi?Kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Zb("linearToOutputTexel",i.outputColorSpace),Qb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Td(h),h=g_(h,i),h=__(h,i),d=Td(d),d=g_(d,i),d=__(d,i),h=v_(h),d=v_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=F+y+h,L=F+x+d,B=d_(l,l.VERTEX_SHADER,O),I=d_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(X){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(B)||"",dt=l.getShaderInfoLog(I)||"",ct=st.trim(),N=at.trim(),H=dt.trim();let J=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,I);else{const xt=m_(l,B,"vertex"),U=m_(l,I,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ct+`
`+xt+`
`+U)}else ct!==""?ae("WebGLProgram: Program Info Log:",ct):(N===""||H==="")&&(Mt=!1);Mt&&(X.diagnostics={runnable:J,programLog:ct,vertexShader:{log:N,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(B),l.deleteShader(I),j=new Pu(l,C),A=t1(l,C)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,kb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=I,this}let g1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new v1(e),i.set(e,r)),r}}class v1{constructor(e){this.id=g1++,this.code=e,this.usedTimes=0}}function x1(o,e,i,r,l,c,h){const d=new W_,m=new _1,p=new Set,_=[],v=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,X,st,at){const dt=st.fog,ct=at.geometry,N=A.isMeshStandardMaterial?st.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||N),J=H&&H.mapping===Gu?H.image.height:null,Mt=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&ae("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,U=xt!==void 0?xt.length:0;let tt=0;ct.morphAttributes.position!==void 0&&(tt=1),ct.morphAttributes.normal!==void 0&&(tt=2),ct.morphAttributes.color!==void 0&&(tt=3);let mt,Rt,It,$;if(Mt){const be=Fi[Mt];mt=be.vertexShader,Rt=be.fragmentShader}else mt=A.vertexShader,Rt=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),$=m.getFragmentShaderID(A);const et=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Ht=at.isInstancedMesh===!0,At=at.isBatchedMesh===!0,le=!!A.map,Ze=!!A.matcap,pe=!!H,he=!!A.aoMap,Me=!!A.lightMap,ee=!!A.bumpMap,je=!!A.normalMap,G=!!A.displacementMap,Xe=!!A.emissiveMap,me=!!A.metalnessMap,Te=!!A.roughnessMap,Vt=A.anisotropy>0,D=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,ft=A.sheen>0,vt=A.transmission>0,ut=Vt&&!!A.anisotropyMap,qt=D&&!!A.clearcoatMap,Tt=D&&!!A.clearcoatNormalMap,Pt=D&&!!A.clearcoatRoughnessMap,Xt=W&&!!A.iridescenceMap,St=W&&!!A.iridescenceThicknessMap,Et=ft&&!!A.sheenColorMap,Lt=ft&&!!A.sheenRoughnessMap,Ut=!!A.specularMap,wt=!!A.specularColorMap,ue=!!A.specularIntensityMap,k=vt&&!!A.transmissionMap,Ot=vt&&!!A.thicknessMap,bt=!!A.gradientMap,zt=!!A.alphaMap,yt=A.alphaTest>0,_t=!!A.alphaHash,Dt=!!A.extensions;let ne=Hi;A.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:mt,fragmentShader:Rt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:$,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:At,batchingColor:At&&at._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&at.instanceColor!==null,instancingMorph:Ht&&at.morphTexture!==null,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Us,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:Ze,envMap:pe,envMapMode:pe&&H.mapping,envMapCubeUVHeight:J,aoMap:he,lightMap:Me,bumpMap:ee,normalMap:je,displacementMap:G,emissiveMap:Xe,normalMapObjectSpace:je&&A.normalMapType===YS,normalMapTangentSpace:je&&A.normalMapType===qS,metalnessMap:me,roughnessMap:Te,anisotropy:Vt,anisotropyMap:ut,clearcoat:D,clearcoatMap:qt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Pt,dispersion:M,iridescence:W,iridescenceMap:Xt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Et,sheenRoughnessMap:Lt,specularMap:Ut,specularColorMap:wt,specularIntensityMap:ue,transmission:vt,transmissionMap:k,thicknessMap:Ot,gradientMap:bt,opaque:A.transparent===!1&&A.blending===As&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:yt,alphaHash:_t,combine:A.combine,mapUv:le&&C(A.map.channel),aoMapUv:he&&C(A.aoMap.channel),lightMapUv:Me&&C(A.lightMap.channel),bumpMapUv:ee&&C(A.bumpMap.channel),normalMapUv:je&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:Xe&&C(A.emissiveMap.channel),metalnessMapUv:me&&C(A.metalnessMap.channel),roughnessMapUv:Te&&C(A.roughnessMap.channel),anisotropyMapUv:ut&&C(A.anisotropyMap.channel),clearcoatMapUv:qt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&C(A.sheenRoughnessMap.channel),specularMapUv:Ut&&C(A.specularMap.channel),specularColorMapUv:wt&&C(A.specularColorMap.channel),specularIntensityMapUv:ue&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Ot&&C(A.thicknessMap.channel),alphaMapUv:zt&&C(A.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(je||Vt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(le||zt),fog:!!dt,useFog:A.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===ze,decodeVideoTextureEmissive:Xe&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===ze,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===da,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Dt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&A.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)w.push(X),w.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(F(w,A),O(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function F(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function O(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function L(A){const w=R[A.type];let X;if(w){const st=Fi[w];X=Hu.clone(st.uniforms)}else X=A.uniforms;return X}function B(A,w){let X=v.get(w);return X!==void 0?++X.usedTimes:(X=new m1(o,w,A,c),_.push(X),v.set(w,X)),X}function I(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),v.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:B,releaseProgram:I,releaseShaderCache:P,programs:_,dispose:j}}function S1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function M1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function S_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function M_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,E,R,C,y){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:S,material:E,groupOrder:R,renderOrder:v.renderOrder,z:C,group:y},o[e]=x):(x.id=v.id,x.object=v,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=v.renderOrder,x.z=C,x.group=y),e++,x}function d(v,S,E,R,C,y){const x=h(v,S,E,R,C,y);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(v,S,E,R,C,y){const x=h(v,S,E,R,C,y);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,S){i.length>1&&i.sort(v||M1),r.length>1&&r.sort(S||S_),l.length>1&&l.sort(S||S_)}function _(){for(let v=e,S=o.length;v<S;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function y1(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new M_,o.set(r,[h])):l>=c.length?(h=new M_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function E1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ee};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function T1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let b1=0;function A1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function R1(o){const e=new E1,i=T1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new cn,h=new cn;function d(p){let _=0,v=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let E=0,R=0,C=0,y=0,x=0,F=0,O=0,L=0,B=0,I=0,P=0;p.sort(A1);for(let A=0,w=p.length;A<w;A++){const X=p[A],st=X.color,at=X.intensity,dt=X.distance;let ct=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ds?ct=X.shadow.map.texture:ct=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=st.r*at,v+=st.g*at,S+=st.b*at;else if(X.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(X.sh.coefficients[N],at);P++}else if(X.isDirectionalLight){const N=e.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,J=i.get(X);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[E]=J,r.directionalShadowMap[E]=ct,r.directionalShadowMatrix[E]=X.shadow.matrix,F++}r.directional[E]=N,E++}else if(X.isSpotLight){const N=e.get(X);N.position.setFromMatrixPosition(X.matrixWorld),N.color.copy(st).multiplyScalar(at),N.distance=dt,N.coneCos=Math.cos(X.angle),N.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),N.decay=X.decay,r.spot[C]=N;const H=X.shadow;if(X.map&&(r.spotLightMap[B]=X.map,B++,H.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[C]=H.matrix,X.castShadow){const J=i.get(X);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[C]=J,r.spotShadowMap[C]=ct,L++}C++}else if(X.isRectAreaLight){const N=e.get(X);N.color.copy(st).multiplyScalar(at),N.halfWidth.set(X.width*.5,0,0),N.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=N,y++}else if(X.isPointLight){const N=e.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),N.distance=X.distance,N.decay=X.decay,X.castShadow){const H=X.shadow,J=i.get(X);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[R]=J,r.pointShadowMap[R]=ct,r.pointShadowMatrix[R]=X.shadow.matrix,O++}r.point[R]=N,R++}else if(X.isHemisphereLight){const N=e.get(X);N.skyColor.copy(X.color).multiplyScalar(at),N.groundColor.copy(X.groundColor).multiplyScalar(at),r.hemi[x]=N,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==E||j.pointLength!==R||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==F||j.numPointShadows!==O||j.numSpotShadows!==L||j.numSpotMaps!==B||j.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,j.directionalLength=E,j.pointLength=R,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=F,j.numPointShadows=O,j.numSpotShadows=L,j.numSpotMaps=B,j.numLightProbes=P,r.version=b1++)}function m(p,_){let v=0,S=0,E=0,R=0,C=0;const y=_.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const O=p[x];if(O.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),v++}else if(O.isSpotLight){const L=r.spot[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function y_(o){const e=new R1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function C1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new y_(o),e.set(l,[d])):c>=h.length?(d=new y_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U1=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],L1=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],E_=new cn,Bo=new rt,Dh=new rt;function N1(o,e,i){let r=new $_;const l=new se,c=new se,h=new nn,d=new ZM,m=new jM,p={},_=i.maxTextureSize,v={[Ja]:kn,[kn]:Ja,[da]:da},S=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:w1,fragmentShader:D1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Xi;R.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new wi(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let x=this.type;this.render=function(I,P,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===ES&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Du);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ii),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ct=>ct.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ct=I.length;dt<ct;dt++){const N=I[dt],H=N.shadow;if(H===void 0){ae("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const J=H.getFrameExtents();if(l.multiply(J),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===zo){if(N.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wn(l.x,l.y,{format:Ds,type:ei,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new qo(l.x,l.y,Bi),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=ga,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{N.isPointLight?(H.map=new J_(l.x),H.map.depthTexture=new qM(l.x,Vi)):(H.map=new Wn(l.x,l.y),H.map.depthTexture=new qo(l.x,l.y,Vi)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=ga;const xt=o.state.buffers.depth.getReversed();this.type===Du?(H.map.depthTexture.compareFunction=xt?Pd:Od,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(xt);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),st.viewport(h)}if(N.isPointLight){const U=H.camera,tt=H.matrix,mt=N.distance||U.far;mt!==U.far&&(U.far=mt,U.updateProjectionMatrix()),Bo.setFromMatrixPosition(N.matrixWorld),U.position.copy(Bo),Dh.copy(U.position),Dh.add(U1[xt]),U.up.copy(L1[xt]),U.lookAt(Dh),U.updateMatrixWorld(),tt.makeTranslation(-Bo.x,-Bo.y,-Bo.z),E_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(E_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(N);r=H.getFrustum(),L(P,j,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===zo&&F(H,j),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,X)};function F(I,P){const j=e.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wn(l.x,l.y,{format:Ds,type:ei})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,j,S,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,j,E,C,null)}function O(I,P,j,A){let w=null;const X=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)w=X;else if(w=j.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const st=w.uuid,at=P.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ct=dt[at];ct===void 0&&(ct=w.clone(),dt[at]=ct,P.addEventListener("dispose",B)),w=ct}if(w.visible=P.visible,w.wireframe=P.wireframe,A===zo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:v[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=o.properties.get(w);st.light=j}return w}function L(I,P,j,A,w){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===zo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const at=e.update(I),dt=I.material;if(Array.isArray(dt)){const ct=at.groups;for(let N=0,H=ct.length;N<H;N++){const J=ct[N],Mt=dt[J.materialIndex];if(Mt&&Mt.visible){const xt=O(I,Mt,A,w);I.onBeforeShadow(o,I,P,j,at,xt,J),o.renderBufferDirect(j,null,at,xt,I,J),I.onAfterShadow(o,I,P,j,at,xt,J)}}}else if(dt.visible){const ct=O(I,dt,A,w);I.onBeforeShadow(o,I,P,j,at,ct,null),o.renderBufferDirect(j,null,at,ct,I,null),I.onAfterShadow(o,I,P,j,at,ct,null)}}const st=I.children;for(let at=0,dt=st.length;at<dt;at++)L(st[at],P,j,A,w)}function B(I){I.target.removeEventListener("dispose",B);for(const j in p){const A=p[j],w=I.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const O1={[Oh]:Ph,[Fh]:Ih,[Bh]:Hh,[Cs]:zh,[Ph]:Oh,[Ih]:Fh,[Hh]:Bh,[zh]:Cs};function P1(o,e){function i(){let k=!1;const Ot=new nn;let bt=null;const zt=new nn(0,0,0,0);return{setMask:function(yt){bt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),bt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,_t,Dt,ne,Oe){Oe===!0&&(yt*=ne,_t*=ne,Dt*=ne),Ot.set(yt,_t,Dt,ne),zt.equals(Ot)===!1&&(o.clearColor(yt,_t,Dt,ne),zt.copy(Ot))},reset:function(){k=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Ot=!1,bt=null,zt=null,yt=null;return{setReversed:function(_t){if(Ot!==_t){const Dt=e.get("EXT_clip_control");_t?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=_t;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Ot},setTest:function(_t){_t?et(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ot&&(_t=O1[_t]),zt!==_t){switch(_t){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Bh:o.depthFunc(o.EQUAL);break;case zh:o.depthFunc(o.GEQUAL);break;case Ih:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){yt!==_t&&(Ot&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){k=!1,bt=null,zt=null,yt=null,Ot=!1}}}function l(){let k=!1,Ot=null,bt=null,zt=null,yt=null,_t=null,Dt=null,ne=null,Oe=null;return{setTest:function(be){k||(be?et(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(be){Ot!==be&&!k&&(o.stencilMask(be),Ot=be)},setFunc:function(be,wn,gi){(bt!==be||zt!==wn||yt!==gi)&&(o.stencilFunc(be,wn,gi),bt=be,zt=wn,yt=gi)},setOp:function(be,wn,gi){(_t!==be||Dt!==wn||ne!==gi)&&(o.stencilOp(be,wn,gi),_t=be,Dt=wn,ne=gi)},setLocked:function(be){k=be},setClear:function(be){Oe!==be&&(o.clearStencil(be),Oe=be)},reset:function(){k=!1,Ot=null,bt=null,zt=null,yt=null,_t=null,Dt=null,ne=null,Oe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,F=null,O=null,L=null,B=null,I=null,P=new Ee(0,0,0),j=0,A=!1,w=null,X=null,st=null,at=null,dt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=H>=2);let Mt=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),mt=new nn().fromArray(U),Rt=new nn().fromArray(tt);function It(k,Ot,bt,zt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Dt=0;Dt<bt;Dt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Ot+Dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const $={};$[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),et(o.DEPTH_TEST),h.setFunc(Cs),ee(!1),je(C0),et(o.CULL_FACE),he(Ii);function et(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Ht(k,Ot){return v[k]!==Ot?(o.bindFramebuffer(k,Ot),v[k]=Ot,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ot),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function At(k,Ot){let bt=E,zt=!1;if(k){bt=S.get(Ot),bt===void 0&&(bt=[],S.set(Ot,bt));const yt=k.textures;if(bt.length!==yt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Dt=yt.length;_t<Dt;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=yt.length,zt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(bt)}function le(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Ze={[Tr]:o.FUNC_ADD,[bS]:o.FUNC_SUBTRACT,[AS]:o.FUNC_REVERSE_SUBTRACT};Ze[RS]=o.MIN,Ze[CS]=o.MAX;const pe={[wS]:o.ZERO,[DS]:o.ONE,[US]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[BS]:o.SRC_ALPHA_SATURATE,[PS]:o.DST_COLOR,[NS]:o.DST_ALPHA,[LS]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[OS]:o.ONE_MINUS_DST_ALPHA,[zS]:o.CONSTANT_COLOR,[IS]:o.ONE_MINUS_CONSTANT_COLOR,[HS]:o.CONSTANT_ALPHA,[GS]:o.ONE_MINUS_CONSTANT_ALPHA};function he(k,Ot,bt,zt,yt,_t,Dt,ne,Oe,be){if(k===Ii){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(et(o.BLEND),C=!0),k!==TS){if(k!==y||be!==A){if((x!==Tr||L!==Tr)&&(o.blendEquation(o.FUNC_ADD),x=Tr,L=Tr),be)switch(k){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFunc(o.ONE,o.ONE);break;case w0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:we("WebGLState: Invalid blending: ",k);break}else switch(k){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case w0:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D0:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",k);break}F=null,O=null,B=null,I=null,P.set(0,0,0),j=0,y=k,A=be}return}yt=yt||Ot,_t=_t||bt,Dt=Dt||zt,(Ot!==x||yt!==L)&&(o.blendEquationSeparate(Ze[Ot],Ze[yt]),x=Ot,L=yt),(bt!==F||zt!==O||_t!==B||Dt!==I)&&(o.blendFuncSeparate(pe[bt],pe[zt],pe[_t],pe[Dt]),F=bt,O=zt,B=_t,I=Dt),(ne.equals(P)===!1||Oe!==j)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),P.copy(ne),j=Oe),y=k,A=!1}function Me(k,Ot){k.side===da?Ct(o.CULL_FACE):et(o.CULL_FACE);let bt=k.side===kn;Ot&&(bt=!bt),ee(bt),k.blending===As&&k.transparent===!1?he(Ii):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function je(k){k!==MS?(et(o.CULL_FACE),k!==X&&(k===C0?o.cullFace(o.BACK):k===yS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),X=k}function G(k){k!==st&&(N&&o.lineWidth(k),st=k)}function Xe(k,Ot,bt){k?(et(o.POLYGON_OFFSET_FILL),(at!==Ot||dt!==bt)&&(o.polygonOffset(Ot,bt),at=Ot,dt=bt)):Ct(o.POLYGON_OFFSET_FILL)}function me(k){k?et(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Te(k){k===void 0&&(k=o.TEXTURE0+ct-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function Vt(k,Ot,bt){bt===void 0&&(Mt===null?bt=o.TEXTURE0+ct-1:bt=Mt);let zt=xt[bt];zt===void 0&&(zt={type:void 0,texture:void 0},xt[bt]=zt),(zt.type!==k||zt.texture!==Ot)&&(Mt!==bt&&(o.activeTexture(bt),Mt=bt),o.bindTexture(k,Ot||$[k]),zt.type=k,zt.texture=Ot)}function D(){const k=xt[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Tt(){try{o.texStorage2D(...arguments)}catch(k){we("WebGLState:",k)}}function Pt(){try{o.texStorage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Xt(){try{o.texImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function St(){try{o.texImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Et(k){mt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function Lt(k){Rt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Rt.copy(k))}function Ut(k,Ot){let bt=p.get(Ot);bt===void 0&&(bt=new WeakMap,p.set(Ot,bt));let zt=bt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ot,k.name),bt.set(k,zt))}function wt(k,Ot){const zt=p.get(Ot).get(k);m.get(Ot)!==zt&&(o.uniformBlockBinding(Ot,zt,k.__bindingPointIndex),m.set(Ot,zt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,xt={},v={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,F=null,O=null,L=null,B=null,I=null,P=new Ee(0,0,0),j=0,A=!1,w=null,X=null,st=null,at=null,dt=null,mt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:et,disable:Ct,bindFramebuffer:Ht,drawBuffers:At,useProgram:le,setBlending:he,setMaterial:Me,setFlipSided:ee,setCullFace:je,setLineWidth:G,setPolygonOffset:Xe,setScissorTest:me,activeTexture:Te,bindTexture:Vt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:Xt,texImage3D:St,updateUBOMapping:Ut,uniformBlockBinding:wt,texStorage2D:Tt,texStorage3D:Pt,texSubImage2D:ft,texSubImage3D:vt,compressedTexSubImage2D:ut,compressedTexSubImage3D:qt,scissor:Et,viewport:Lt,reset:ue}}function F1(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,_=new WeakMap;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return E?new OffscreenCanvas(D,M):Iu("canvas")}function C(D,M,W){let ft=1;const vt=Vt(D);if((vt.width>W||vt.height>W)&&(ft=W/Math.max(vt.width,vt.height)),ft<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(ft*vt.width),qt=Math.floor(ft*vt.height);v===void 0&&(v=R(ut,qt));const Tt=M?R(ut,qt):v;return Tt.width=ut,Tt.height=qt,Tt.getContext("2d").drawImage(D,0,0,ut,qt),ae("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+qt+")."),Tt}else return"data"in D&&ae("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,M,W,ft,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=M;if(M===o.RED&&(W===o.FLOAT&&(ut=o.R32F),W===o.HALF_FLOAT&&(ut=o.R16F),W===o.UNSIGNED_BYTE&&(ut=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.R8UI),W===o.UNSIGNED_SHORT&&(ut=o.R16UI),W===o.UNSIGNED_INT&&(ut=o.R32UI),W===o.BYTE&&(ut=o.R8I),W===o.SHORT&&(ut=o.R16I),W===o.INT&&(ut=o.R32I)),M===o.RG&&(W===o.FLOAT&&(ut=o.RG32F),W===o.HALF_FLOAT&&(ut=o.RG16F),W===o.UNSIGNED_BYTE&&(ut=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RG8UI),W===o.UNSIGNED_SHORT&&(ut=o.RG16UI),W===o.UNSIGNED_INT&&(ut=o.RG32UI),W===o.BYTE&&(ut=o.RG8I),W===o.SHORT&&(ut=o.RG16I),W===o.INT&&(ut=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),W===o.UNSIGNED_INT&&(ut=o.RGB32UI),W===o.BYTE&&(ut=o.RGB8I),W===o.SHORT&&(ut=o.RGB16I),W===o.INT&&(ut=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),W===o.UNSIGNED_INT&&(ut=o.RGBA32UI),W===o.BYTE&&(ut=o.RGBA8I),W===o.SHORT&&(ut=o.RGBA16I),W===o.INT&&(ut=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),M===o.RGBA){const qt=vt?Bu:Ae.getTransfer(ft);W===o.FLOAT&&(ut=o.RGBA32F),W===o.HALF_FLOAT&&(ut=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ut=qt===ze?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function L(D,M){let W;return D?M===null||M===Vi||M===Xo?W=o.DEPTH24_STENCIL8:M===Bi?W=o.DEPTH32F_STENCIL8:M===Vo&&(W=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===Xo?W=o.DEPTH_COMPONENT24:M===Bi?W=o.DEPTH_COMPONENT32F:M===Vo&&(W=o.DEPTH_COMPONENT16),W}function B(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function I(D){const M=D.target;M.removeEventListener("dispose",I),j(M),M.isVideoTexture&&_.delete(M)}function P(D){const M=D.target;M.removeEventListener("dispose",P),w(M)}function j(D){const M=r.get(D);if(M.__webglInit===void 0)return;const W=D.source,ft=S.get(W);if(ft){const vt=ft[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(D),Object.keys(ft).length===0&&S.delete(W)}r.remove(D)}function A(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const W=D.source,ft=S.get(W);delete ft[M.__cacheKey],h.memory.textures--}function w(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(M.__webglFramebuffer[ft]))for(let vt=0;vt<M.__webglFramebuffer[ft].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ft][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ft]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ft])}else{if(Array.isArray(M.__webglFramebuffer))for(let ft=0;ft<M.__webglFramebuffer.length;ft++)o.deleteFramebuffer(M.__webglFramebuffer[ft]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ft=0;ft<M.__webglColorRenderbuffer.length;ft++)M.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ft]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=D.textures;for(let ft=0,vt=W.length;ft<vt;ft++){const ut=r.get(W[ft]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(W[ft])}r.remove(D)}let X=0;function st(){X=0}function at(){const D=X;return D>=l.maxTextures&&ae("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function dt(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ct(D,M){const W=r.get(D);if(D.isVideoTexture&&me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ft=D.image;if(ft===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,D,M);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function N(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){$(W,D,M);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){$(W,D,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function J(D,M){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){et(W,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const Mt={[Xh]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[kh]:o.MIRRORED_REPEAT},xt={[Rn]:o.NEAREST,[kS]:o.NEAREST_MIPMAP_NEAREST,[uu]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[Ar]:o.LINEAR_MIPMAP_LINEAR},U={[ZS]:o.NEVER,[$S]:o.ALWAYS,[jS]:o.LESS,[Od]:o.LEQUAL,[KS]:o.EQUAL,[Pd]:o.GEQUAL,[QS]:o.GREATER,[JS]:o.NOTEQUAL};function tt(D,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===nh||M.magFilter===uu||M.magFilter===Ar||M.minFilter===Nn||M.minFilter===nh||M.minFilter===uu||M.minFilter===Ar)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==uu&&M.minFilter!==Ar||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function mt(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",I));const ft=M.source;let vt=S.get(ft);vt===void 0&&(vt={},S.set(ft,vt));const ut=dt(M);if(ut!==D.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[ut].usedTimes++;const qt=vt[D.__cacheKey];qt!==void 0&&(vt[D.__cacheKey].usedTimes--,qt.usedTimes===0&&A(M)),D.__cacheKey=ut,D.__webglTexture=vt[ut].texture}return W}function Rt(D,M,W){return Math.floor(Math.floor(D/W)/M)}function It(D,M,W,ft){const ut=D.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ft,M.data);else{ut.sort((St,Et)=>St.start-Et.start);let qt=0;for(let St=1;St<ut.length;St++){const Et=ut[qt],Lt=ut[St],Ut=Et.start+Et.count,wt=Rt(Lt.start,M.width,4),ue=Rt(Et.start,M.width,4);Lt.start<=Ut+1&&wt===ue&&Rt(Lt.start+Lt.count-1,M.width,4)===wt?Et.count=Math.max(Et.count,Lt.start+Lt.count-Et.start):(++qt,ut[qt]=Lt)}ut.length=qt+1;const Tt=o.getParameter(o.UNPACK_ROW_LENGTH),Pt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let St=0,Et=ut.length;St<Et;St++){const Lt=ut[St],Ut=Math.floor(Lt.start/4),wt=Math.ceil(Lt.count/4),ue=Ut%M.width,k=Math.floor(Ut/M.width),Ot=wt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ue,k,Ot,bt,W,ft,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Tt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Pt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function $(D,M,W){let ft=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ft=o.TEXTURE_3D);const vt=mt(D,M),ut=M.source;i.bindTexture(ft,D.__webglTexture,o.TEXTURE0+W);const qt=r.get(ut);if(ut.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Tt=Ae.getPrimaries(Ae.workingColorSpace),Pt=M.colorSpace===Ka?null:Ae.getPrimaries(M.colorSpace),Xt=M.colorSpace===Ka||Tt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let St=C(M.image,!1,l.maxTextureSize);St=Te(M,St);const Et=c.convert(M.format,M.colorSpace),Lt=c.convert(M.type);let Ut=O(M.internalFormat,Et,Lt,M.colorSpace,M.isVideoTexture);tt(ft,M);let wt;const ue=M.mipmaps,k=M.isVideoTexture!==!0,Ot=qt.__version===void 0||vt===!0,bt=ut.dataReady,zt=B(M,St);if(M.isDepthTexture)Ut=L(M.format===Rr,M.type),Ot&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ut,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Ut,St.width,St.height,0,Et,Lt,null));else if(M.isDataTexture)if(ue.length>0){k&&Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ut,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)wt=ue[yt],k?bt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,Et,Lt,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Ut,wt.width,wt.height,0,Et,Lt,wt.data);M.generateMipmaps=!1}else k?(Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ut,St.width,St.height),bt&&It(M,St,Et,Lt)):i.texImage2D(o.TEXTURE_2D,0,Ut,St.width,St.height,0,Et,Lt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ut,ue[0].width,ue[0].height,St.depth);for(let yt=0,_t=ue.length;yt<_t;yt++)if(wt=ue[yt],M.format!==Ri)if(Et!==null)if(k){if(bt)if(M.layerUpdates.size>0){const Dt=t_(wt.width,wt.height,M.format,M.type);for(const ne of M.layerUpdates){const Oe=wt.data.subarray(ne*Dt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Dt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,wt.width,wt.height,1,Et,Oe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,St.depth,Et,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Ut,wt.width,wt.height,St.depth,0,wt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,St.depth,Et,Lt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Ut,wt.width,wt.height,St.depth,0,Et,Lt,wt.data)}else{k&&Ot&&i.texStorage2D(o.TEXTURE_2D,zt,Ut,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)wt=ue[yt],M.format!==Ri?Et!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,Et,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Ut,wt.width,wt.height,0,wt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,Et,Lt,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Ut,wt.width,wt.height,0,Et,Lt,wt.data)}else if(M.isDataArrayTexture)if(k){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ut,St.width,St.height,St.depth),bt)if(M.layerUpdates.size>0){const yt=t_(St.width,St.height,M.format,M.type);for(const _t of M.layerUpdates){const Dt=St.data.subarray(_t*yt/St.data.BYTES_PER_ELEMENT,(_t+1)*yt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Et,Lt,Dt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Et,Lt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,St.width,St.height,St.depth,0,Et,Lt,St.data);else if(M.isData3DTexture)k?(Ot&&i.texStorage3D(o.TEXTURE_3D,zt,Ut,St.width,St.height,St.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Et,Lt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,St.width,St.height,St.depth,0,Et,Lt,St.data);else if(M.isFramebufferTexture){if(Ot)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Ut,St.width,St.height);else{let yt=St.width,_t=St.height;for(let Dt=0;Dt<zt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Ut,yt,_t,0,Et,Lt,null),yt>>=1,_t>>=1}}else if(ue.length>0){if(k&&Ot){const yt=Vt(ue[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ut,yt.width,yt.height)}for(let yt=0,_t=ue.length;yt<_t;yt++)wt=ue[yt],k?bt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Et,Lt,wt):i.texImage2D(o.TEXTURE_2D,yt,Ut,Et,Lt,wt);M.generateMipmaps=!1}else if(k){if(Ot){const yt=Vt(St);i.texStorage2D(o.TEXTURE_2D,zt,Ut,yt.width,yt.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Lt,St)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Et,Lt,St);y(M)&&x(ft),qt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function et(D,M,W){if(M.image.length!==6)return;const ft=mt(D,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const ut=r.get(vt);if(vt.version!==ut.__version||ft===!0){i.activeTexture(o.TEXTURE0+W);const qt=Ae.getPrimaries(Ae.workingColorSpace),Tt=M.colorSpace===Ka?null:Ae.getPrimaries(M.colorSpace),Pt=M.colorSpace===Ka||qt===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!Xt&&!St?Et[_t]=C(M.image[_t],!0,l.maxCubemapSize):Et[_t]=St?M.image[_t].image:M.image[_t],Et[_t]=Te(M,Et[_t]);const Lt=Et[0],Ut=c.convert(M.format,M.colorSpace),wt=c.convert(M.type),ue=O(M.internalFormat,Ut,wt,M.colorSpace),k=M.isVideoTexture!==!0,Ot=ut.__version===void 0||ft===!0,bt=vt.dataReady;let zt=B(M,Lt);tt(o.TEXTURE_CUBE_MAP,M);let yt;if(Xt){k&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ue,Lt.width,Lt.height);for(let _t=0;_t<6;_t++){yt=Et[_t].mipmaps;for(let Dt=0;Dt<yt.length;Dt++){const ne=yt[Dt];M.format!==Ri?Ut!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,ne.width,ne.height,Ut,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,ue,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,ne.width,ne.height,Ut,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,ue,ne.width,ne.height,0,Ut,wt,ne.data)}}}else{if(yt=M.mipmaps,k&&Ot){yt.length>0&&zt++;const _t=Vt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ut,wt,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Et[_t].width,Et[_t].height,0,Ut,wt,Et[_t].data);for(let Dt=0;Dt<yt.length;Dt++){const Oe=yt[Dt].image[_t].image;k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Oe.width,Oe.height,Ut,wt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,ue,Oe.width,Oe.height,0,Ut,wt,Oe.data)}}else{k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut,wt,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Ut,wt,Et[_t]);for(let Dt=0;Dt<yt.length;Dt++){const ne=yt[Dt];k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Ut,wt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,ue,Ut,wt,ne.image[_t])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ut.__version=vt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ct(D,M,W,ft,vt,ut){const qt=c.convert(W.format,W.colorSpace),Tt=c.convert(W.type),Pt=O(W.internalFormat,qt,Tt,W.colorSpace),Xt=r.get(M),St=r.get(W);if(St.__renderTarget=M,!Xt.__hasExternalTextures){const Et=Math.max(1,M.width>>ut),Lt=Math.max(1,M.height>>ut);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ut,Pt,Et,Lt,M.depth,0,qt,Tt,null):i.texImage2D(vt,ut,Pt,Et,Lt,0,qt,Tt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Xe(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,vt,St.__webglTexture,0,G(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,vt,St.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(D,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const ft=M.depthTexture,vt=ft&&ft.isDepthTexture?ft.type:null,ut=L(M.stencilBuffer,vt),qt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xe(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),ut,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),ut,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ut,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const ft=M.textures;for(let vt=0;vt<ft.length;vt++){const ut=ft[vt],qt=c.convert(ut.format,ut.colorSpace),Tt=c.convert(ut.type),Pt=O(ut.internalFormat,qt,Tt,ut.colorSpace);Xe(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),Pt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),Pt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(D,M,W){const ft=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Xt=c.convert(M.depthTexture.format),St=c.convert(M.depthTexture.type);let Et;M.depthTexture.format===ga?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Rr&&(Et=o.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Et,M.width,M.height,0,Xt,St,null)}}else ct(M.depthTexture,0);const ut=vt.__webglTexture,qt=G(M),Tt=ft?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Pt=M.depthTexture.format===Rr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===ga)Xe(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Pt,Tt,ut,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,Pt,Tt,ut,0);else if(M.depthTexture.format===Rr)Xe(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Pt,Tt,ut,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,Pt,Tt,ut,0);else throw new Error("Unknown depthTexture format")}function le(D){const M=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ft=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ft){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ft.removeEventListener("dispose",vt)};ft.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ft}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ft=0;ft<6;ft++)At(M.__webglFramebuffer[ft],D,ft);else{const ft=D.texture.mipmaps;ft&&ft.length>0?At(M.__webglFramebuffer[0],D,0):At(M.__webglFramebuffer,D,0)}else if(W){M.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ft]),M.__webglDepthbuffer[ft]===void 0)M.__webglDepthbuffer[ft]=o.createRenderbuffer(),Ht(M.__webglDepthbuffer[ft],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}else{const ft=D.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ht(M.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(D,M,W){const ft=r.get(D);M!==void 0&&Ct(ft.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&le(D)}function pe(D){const M=D.texture,W=r.get(D),ft=r.get(M);D.addEventListener("dispose",P);const vt=D.textures,ut=D.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=M.version,h.memory.textures++),ut){W.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Tt]=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)W.__webglFramebuffer[Tt][Pt]=o.createFramebuffer()}else W.__webglFramebuffer[Tt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Tt=0;Tt<M.mipmaps.length;Tt++)W.__webglFramebuffer[Tt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Tt=0,Pt=vt.length;Tt<Pt;Tt++){const Xt=r.get(vt[Tt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Xe(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Tt=0;Tt<vt.length;Tt++){const Pt=vt[Tt];W.__webglColorRenderbuffer[Tt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Tt]);const Xt=c.convert(Pt.format,Pt.colorSpace),St=c.convert(Pt.type),Et=O(Pt.internalFormat,Xt,St,Pt.colorSpace,D.isXRRenderTarget===!0),Lt=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,Et,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Tt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M);for(let Tt=0;Tt<6;Tt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Ct(W.__webglFramebuffer[Tt][Pt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Pt);else Ct(W.__webglFramebuffer[Tt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Tt=0,Pt=vt.length;Tt<Pt;Tt++){const Xt=vt[Tt],St=r.get(Xt);let Et=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,St.__webglTexture),tt(Et,Xt),Ct(W.__webglFramebuffer,D,Xt,o.COLOR_ATTACHMENT0+Tt,Et,0),y(Xt)&&x(Et)}i.unbindTexture()}else{let Tt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Tt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,ft.__webglTexture),tt(Tt,M),M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Ct(W.__webglFramebuffer[Pt],D,M,o.COLOR_ATTACHMENT0,Tt,Pt);else Ct(W.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Tt,0);y(M)&&x(Tt),i.unbindTexture()}D.depthBuffer&&le(D)}function he(D){const M=D.textures;for(let W=0,ft=M.length;W<ft;W++){const vt=M[W];if(y(vt)){const ut=F(D),qt=r.get(vt).__webglTexture;i.bindTexture(ut,qt),x(ut),i.unbindTexture()}}}const Me=[],ee=[];function je(D){if(D.samples>0){if(Xe(D)===!1){const M=D.textures,W=D.width,ft=D.height;let vt=o.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(D),Tt=M.length>1;if(Tt)for(let Xt=0;Xt<M.length;Xt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Pt=D.texture.mipmaps;Pt&&Pt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Xt=0;Xt<M.length;Xt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Tt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);const St=r.get(M[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,W,ft,0,0,W,ft,vt,o.NEAREST),m===!0&&(Me.length=0,ee.length=0,Me.push(o.COLOR_ATTACHMENT0+Xt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Me.push(ut),ee.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Me))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Tt)for(let Xt=0;Xt<M.length;Xt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Xt]);const St=r.get(M[Xt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Xe(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(D){const M=h.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function Te(D,M){const W=D.colorSpace,ft=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Us&&W!==Ka&&(Ae.getTransfer(W)===ze?(ft!==Ri||vt!==mi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",W)),M}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ct,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Ze,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function B1(o,e){function i(r,l=Ka){let c;const h=Ae.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===wd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===I_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===F_)return o.BYTE;if(r===B_)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Cd)return o.INT;if(r===Vi)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===ei)return o.HALF_FLOAT;if(r===H_)return o.ALPHA;if(r===G_)return o.RGB;if(r===Ri)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===Rr)return o.DEPTH_STENCIL;if(r===V_)return o.RED;if(r===Ud)return o.RED_INTEGER;if(r===Ds)return o.RG;if(r===Ld)return o.RG_INTEGER;if(r===Nd)return o.RGBA_INTEGER;if(r===Uu||r===Lu||r===Nu||r===Ou)if(h===ze)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===Zh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===jh||r===Kh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Jh)return c.COMPRESSED_R11_EAC;if(r===$h)return c.COMPRESSED_SIGNED_R11_EAC;if(r===td)return c.COMPRESSED_RG11_EAC;if(r===ed)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===md)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gd||r===_d||r===vd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===gd)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xd||r===Sd||r===Md||r===yd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===xd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new tv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Cn({vertexShader:z1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Ko(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends Os{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new H1,x={},F=i.getContextAttributes();let O=null,L=null;const B=[],I=[],P=new se;let j=null;const A=new bi;A.viewport=new nn;const w=new bi;w.viewport=new nn;const X=[A,w],st=new KM;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=B[$];return et===void 0&&(et=new Eh,B[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=B[$];return et===void 0&&(et=new Eh,B[$]=et),et.getGripSpace()},this.getHand=function($){let et=B[$];return et===void 0&&(et=new Eh,B[$]=et),et.getHandSpace()};function ct($){const et=I.indexOf($.inputSource);if(et===-1)return;const Ct=B[et];Ct!==void 0&&(Ct.update($.inputSource,$.frame,p||h),Ct.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",H);for(let $=0;$<B.length;$++){const et=I[$];et!==null&&(I[$]=null,B[$].disconnect(et))}at=null,dt=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(O),E=null,S=null,v=null,l=null,L=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",N),l.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ht=null,At=null;F.depth&&(At=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=F.stencil?Rr:ga,Ht=F.stencil?Xo:Vi);const le={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};v=this.getBinding(),S=v.createProjectionLayer(le),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Wn(S.textureWidth,S.textureHeight,{format:Ri,type:mi,depthTexture:new qo(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Wn(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H($){for(let et=0;et<$.removed.length;et++){const Ct=$.removed[et],Ht=I.indexOf(Ct);Ht>=0&&(I[Ht]=null,B[Ht].disconnect(Ct))}for(let et=0;et<$.added.length;et++){const Ct=$.added[et];let Ht=I.indexOf(Ct);if(Ht===-1){for(let le=0;le<B.length;le++)if(le>=I.length){I.push(Ct),Ht=le;break}else if(I[le]===null){I[le]=Ct,Ht=le;break}if(Ht===-1)break}const At=B[Ht];At&&At.connect(Ct)}}const J=new rt,Mt=new rt;function xt($,et,Ct){J.setFromMatrixPosition(et.matrixWorld),Mt.setFromMatrixPosition(Ct.matrixWorld);const Ht=J.distanceTo(Mt),At=et.projectionMatrix.elements,le=Ct.projectionMatrix.elements,Ze=At[14]/(At[10]-1),pe=At[14]/(At[10]+1),he=(At[9]+1)/At[5],Me=(At[9]-1)/At[5],ee=(At[8]-1)/At[0],je=(le[8]+1)/le[0],G=Ze*ee,Xe=Ze*je,me=Ht/(-ee+je),Te=me*-ee;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Vt=Ze+me,D=pe+me,M=G-Te,W=Xe+(Ht-Te),ft=he*pe/D*Vt,vt=Me*pe/D*Vt;$.projectionMatrix.makePerspective(M,W,ft,vt,Vt,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let et=$.near,Ct=$.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),st.near=w.near=A.near=et,st.far=w.far=A.far=Ct,(at!==st.near||dt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,dt=st.far),st.layers.mask=$.layers.mask|6,A.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const Ht=$.parent,At=st.cameras;U(st,Ht);for(let le=0;le<At.length;le++)U(At[le],Ht);At.length===2?xt(st,A,w):st.projectionMatrix.copy(A.projectionMatrix),tt($,st,Ht)};function tt($,et,Ct){Ct===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(Ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(st)},this.getCameraTexture=function($){return x[$]};let mt=null;function Rt($,et){if(_=et.getViewerPose(p||h),R=et,_!==null){const Ct=_.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let Ht=!1;Ct.length!==st.cameras.length&&(st.cameras.length=0,Ht=!0);for(let pe=0;pe<Ct.length;pe++){const he=Ct[pe];let Me=null;if(E!==null)Me=E.getViewport(he);else{const je=v.getViewSubImage(S,he);Me=je.viewport,pe===0&&(e.setRenderTargetTextures(L,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(L))}let ee=X[pe];ee===void 0&&(ee=new bi,ee.layers.enable(pe),ee.viewport=new nn,X[pe]=ee),ee.matrix.fromArray(he.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(he.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Me.x,Me.y,Me.width,Me.height),pe===0&&(st.matrix.copy(ee.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Ht===!0&&st.cameras.push(ee)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const pe=v.getDepthInformation(Ct[0]);pe&&pe.isValid&&pe.texture&&y.init(pe,l.renderState)}if(At&&At.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let pe=0;pe<Ct.length;pe++){const he=Ct[pe].camera;if(he){let Me=x[he];Me||(Me=new tv,x[he]=Me);const ee=v.getCameraImage(he);Me.sourceTexture=ee}}}}for(let Ct=0;Ct<B.length;Ct++){const Ht=I[Ct],At=B[Ct];Ht!==null&&At!==void 0&&At.update(Ht,et,p||h)}mt&&mt($,et),et.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:et}),R=null}const It=new ev;It.setAnimationLoop(Rt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const yr=new _a,V1=new cn;function X1(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,j_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,F,O,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),R(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,F,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=e.get(x),O=F.envMap,L=F.envMapRotation;O&&(y.envMap.value=O,yr.copy(L),yr.x*=-1,yr.y*=-1,yr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(yr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,F,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const F=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function k1(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,O){const L=O.program;r.uniformBlockBinding(F,L)}function p(F,O){let L=l[F.id];L===void 0&&(R(F),L=_(F),l[F.id]=L,F.addEventListener("dispose",y));const B=O.program;r.updateUBOMapping(F,B);const I=e.render.frame;c[F.id]!==I&&(S(F),c[F.id]=I)}function _(F){const O=v();F.__bindingPointIndex=O;const L=o.createBuffer(),B=F.__size,I=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,B,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const O=l[F.id],L=F.uniforms,B=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,P=L.length;I<P;I++){const j=Array.isArray(L[I])?L[I]:[L[I]];for(let A=0,w=j.length;A<w;A++){const X=j[A];if(E(X,I,A,B)===!0){const st=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let dt=0;for(let ct=0;ct<at.length;ct++){const N=at[ct],H=C(N);typeof N=="number"||typeof N=="boolean"?(X.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,st+dt,X.__data)):N.isMatrix3?(X.__data[0]=N.elements[0],X.__data[1]=N.elements[1],X.__data[2]=N.elements[2],X.__data[3]=0,X.__data[4]=N.elements[3],X.__data[5]=N.elements[4],X.__data[6]=N.elements[5],X.__data[7]=0,X.__data[8]=N.elements[6],X.__data[9]=N.elements[7],X.__data[10]=N.elements[8],X.__data[11]=0):(N.toArray(X.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,O,L,B){const I=F.value,P=O+"_"+L;if(B[P]===void 0)return typeof I=="number"||typeof I=="boolean"?B[P]=I:B[P]=I.clone(),!0;{const j=B[P];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return B[P]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function R(F){const O=F.uniforms;let L=0;const B=16;for(let P=0,j=O.length;P<j;P++){const A=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,X=A.length;w<X;w++){const st=A[w],at=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ct=at.length;dt<ct;dt++){const N=at[dt],H=C(N),J=L%B,Mt=J%H.boundary,xt=J+Mt;L+=Mt,xt!==0&&B-xt<H.storage&&(L+=B-xt),st.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=L,L+=H.storage}}}const I=L%B;return I>0&&(L+=B-I),F.__size=L,F.__cache={},this}function C(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",F),O}function y(F){const O=F.target;O.removeEventListener("dispose",y);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const W1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function q1(){return Pi===null&&(Pi=new VM(W1,16,16,Ds,ei),Pi.name="DFG_LUT",Pi.minFilter=Nn,Pi.magFilter=Nn,Pi.wrapS=pa,Pi.wrapT=pa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Y1{constructor(e={}){const{canvas:i=tM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:E=mi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=h;const C=E,y=new Set([Nd,Ld,Ud]),x=new Set([mi,Vi,Vo,Xo,wd,Dd]),F=new Uint32Array(4),O=new Int32Array(4);let L=null,B=null;const I=[],P=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=pi;let X=0,st=0,at=null,dt=-1,ct=null;const N=new nn,H=new nn;let J=null;const Mt=new Ee(0);let xt=0,U=i.width,tt=i.height,mt=1,Rt=null,It=null;const $=new nn(0,0,U,tt),et=new nn(0,0,U,tt);let Ct=!1;const Ht=new $_;let At=!1,le=!1;const Ze=new cn,pe=new rt,he=new nn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function je(){return at===null?mt:1}let G=r;function Xe(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Oe,!1),i.addEventListener("webglcontextcreationerror",be,!1),G===null){const q="webgl2";if(G=Xe(q,b),G===null)throw Xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw we("WebGLRenderer: "+b.message),b}let me,Te,Vt,D,M,W,ft,vt,ut,qt,Tt,Pt,Xt,St,Et,Lt,Ut,wt,ue,k,Ot,bt,zt,yt;function _t(){me=new qT(G),me.init(),bt=new B1(G,me),Te=new BT(G,me,e,bt),Vt=new P1(G,me),Te.reversedDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),D=new jT(G),M=new S1,W=new F1(G,me,Vt,M,Te,bt,D),ft=new IT(A),vt=new WT(A),ut=new $M(G),zt=new PT(G,ut),qt=new YT(G,ut,D,zt),Tt=new QT(G,qt,ut,D),ue=new KT(G,Te,W),Lt=new zT(M),Pt=new x1(A,ft,vt,me,Te,zt,Lt),Xt=new X1(A,M),St=new y1,Et=new C1(me),wt=new OT(A,ft,vt,Vt,Tt,R,m),Ut=new N1(A,Tt,Te),yt=new k1(G,D,Te,Vt),k=new FT(G,me,D),Ot=new ZT(G,me,D),D.programs=Pt.programs,A.capabilities=Te,A.extensions=me,A.properties=M,A.renderLists=St,A.shadowMap=Ut,A.state=Vt,A.info=D}_t(),C!==mi&&(j=new $T(C,i.width,i.height,l,c));const Dt=new G1(A,G);this.xr=Dt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(U,tt,!1))},this.getSize=function(b){return b.set(U,tt)},this.setSize=function(b,q,ot=!0){if(Dt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,tt=q,i.width=Math.floor(b*mt),i.height=Math.floor(q*mt),ot===!0&&(i.style.width=b+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*mt,tt*mt).floor()},this.setDrawingBufferSize=function(b,q,ot){U=b,tt=q,mt=ot,i.width=Math.floor(b*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,q,ot,nt){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,q,ot,nt),Vt.viewport(N.copy($).multiplyScalar(mt).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,q,ot,nt){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,q,ot,nt),Vt.scissor(H.copy(et).multiplyScalar(mt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){Vt.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){Rt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ot=!0){let nt=0;if(b){let Z=!1;if(at!==null){const Nt=at.texture.format;Z=y.has(Nt)}if(Z){const Nt=at.texture.type,Gt=x.has(Nt),Ft=wt.getClearColor(),kt=wt.getClearAlpha(),Yt=Ft.r,Jt=Ft.g,Zt=Ft.b;Gt?(F[0]=Yt,F[1]=Jt,F[2]=Zt,F[3]=kt,G.clearBufferuiv(G.COLOR,0,F)):(O[0]=Yt,O[1]=Jt,O[2]=Zt,O[3]=kt,G.clearBufferiv(G.COLOR,0,O))}else nt|=G.COLOR_BUFFER_BIT}q&&(nt|=G.DEPTH_BUFFER_BIT),ot&&(nt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Oe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),wt.dispose(),St.dispose(),Et.dispose(),M.dispose(),ft.dispose(),vt.dispose(),Tt.dispose(),zt.dispose(),yt.dispose(),Pt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Dr),Dt.removeEventListener("sessionend",Is),Di.stop()};function ne(b){b.preventDefault(),P0("WebGLRenderer: Context Lost."),w=!0}function Oe(){P0("WebGLRenderer: Context Restored."),w=!1;const b=D.autoReset,q=Ut.enabled,ot=Ut.autoUpdate,nt=Ut.needsUpdate,Z=Ut.type;_t(),D.autoReset=b,Ut.enabled=q,Ut.autoUpdate=ot,Ut.needsUpdate=nt,Ut.type=Z}function be(b){we("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wn(b){const q=b.target;q.removeEventListener("dispose",wn),gi(q)}function gi(b){Jo(b),M.remove(b)}function Jo(b){const q=M.get(b).programs;q!==void 0&&(q.forEach(function(ot){Pt.releaseProgram(ot)}),b.isShaderMaterial&&Pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ot,nt,Z,Nt){q===null&&(q=Me);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=$a(b,q,ot,nt,Z);Vt.setMaterial(nt,Gt);let kt=ot.index,Yt=1;if(nt.wireframe===!0){if(kt=qt.getWireframeAttribute(ot),kt===void 0)return;Yt=2}const Jt=ot.drawRange,Zt=ot.attributes.position;let $t=Jt.start*Yt,De=(Jt.start+Jt.count)*Yt;Nt!==null&&($t=Math.max($t,Nt.start*Yt),De=Math.min(De,(Nt.start+Nt.count)*Yt)),kt!==null?($t=Math.max($t,0),De=Math.min(De,kt.count)):Zt!=null&&($t=Math.max($t,0),De=Math.min(De,Zt.count));const Ke=De-$t;if(Ke<0||Ke===1/0)return;zt.setup(Z,nt,Ft,ot,kt);let ke,Ne=k;if(kt!==null&&(ke=ut.get(kt),Ne=Ot,Ne.setIndex(ke)),Z.isMesh)nt.wireframe===!0?(Vt.setLineWidth(nt.wireframeLinewidth*je()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=nt.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*je()),Z.isLineSegments?Ne.setMode(G.LINES):Z.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else Z.isPoints?Ne.setMode(G.POINTS):Z.isSprite&&Ne.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,ie=Z._multiDrawCount,vn=kt?ut.get(kt).bytesPerElement:1,ki=M.get(nt).currentProgram.getUniforms();for(let xn=0;xn<ie;xn++)ki.setValue(G,"_gl_DrawID",xn),Ne.render(Kt[xn]/vn,Ue[xn])}else if(Z.isInstancedMesh)Ne.renderInstances($t,Ke,Z.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ue=Math.min(ot.instanceCount,Kt);Ne.renderInstances($t,Ke,Ue)}else Ne.render($t,Ke)};function Bs(b,q,ot){b.transparent===!0&&b.side===da&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Lr(b,q,ot),b.side=Ja,b.needsUpdate=!0,Lr(b,q,ot),b.side=da):Lr(b,q,ot)}this.compile=function(b,q,ot=null){ot===null&&(ot=b),B=Et.get(ot),B.init(q),P.push(B),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),b!==ot&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),B.setupLights();const nt=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Nt=Z.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Ft=Nt[Gt];Bs(Ft,ot,Z),nt.add(Ft)}else Bs(Nt,ot,Z),nt.add(Nt)}),B=P.pop(),nt},this.compileAsync=function(b,q,ot=null){const nt=this.compile(b,q,ot);return new Promise(Z=>{function Nt(){if(nt.forEach(function(Gt){M.get(Gt).currentProgram.isReady()&&nt.delete(Gt)}),nt.size===0){Z(b);return}setTimeout(Nt,10)}me.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let wr=null;function zs(b){wr&&wr(b)}function Dr(){Di.stop()}function Is(){Di.start()}const Di=new ev;Di.setAnimationLoop(zs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){wr=b,Dt.setAnimationLoop(b),b===null?Di.stop():Di.start()},Dt.addEventListener("sessionstart",Dr),Dt.addEventListener("sessionend",Is),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ot=Dt.enabled===!0&&Dt.isPresenting===!0,nt=j!==null&&(at===null||ot)&&j.begin(A,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,at),B=Et.get(b,P.length),B.init(q),P.push(B),Ze.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ht.setFromProjectionMatrix(Ze,zi,q.reversedDepth),le=this.localClippingEnabled,At=Lt.init(this.clippingPlanes,le),L=St.get(b,I.length),L.init(),I.push(L),Dt.enabled===!0&&Dt.isPresenting===!0){const Gt=A.xr.getDepthSensingMesh();Gt!==null&&ii(Gt,q,-1/0,A.sortObjects)}ii(b,q,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Rt,It),ee=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ee&&wt.addToRenderList(L,b),this.info.render.frame++,At===!0&&Lt.beginShadows();const Z=B.state.shadowsArray;if(Ut.render(Z,b,q),At===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&j.hasRenderPass())===!1){const Gt=L.opaque,Ft=L.transmissive;if(B.setupLights(),q.isArrayCamera){const kt=q.cameras;if(Ft.length>0)for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){const Zt=kt[Yt];_n(Gt,Ft,b,Zt)}ee&&wt.render(b);for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){const Zt=kt[Yt];an(L,b,Zt,Zt.viewport)}}else Ft.length>0&&_n(Gt,Ft,b,q),ee&&wt.render(b),an(L,b,q)}at!==null&&st===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),nt&&j.end(A),b.isScene===!0&&b.onAfterRender(A,b,q),zt.resetDefaultState(),dt=-1,ct=null,P.pop(),P.length>0?(B=P[P.length-1],At===!0&&Lt.setGlobalState(A.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function ii(b,q,ot,nt){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ot=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)B.pushLight(b),b.castShadow&&B.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ht.intersectsSprite(b)){nt&&he.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ze);const Gt=Tt.update(b),Ft=b.material;Ft.visible&&L.push(b,Gt,Ft,ot,he.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ht.intersectsObject(b))){const Gt=Tt.update(b),Ft=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),he.copy(b.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),he.copy(Gt.boundingSphere.center)),he.applyMatrix4(b.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ft)){const kt=Gt.groups;for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){const Zt=kt[Yt],$t=Ft[Zt.materialIndex];$t&&$t.visible&&L.push(b,Gt,$t,ot,he.z,Zt)}}else Ft.visible&&L.push(b,Gt,Ft,ot,he.z,null)}}const Nt=b.children;for(let Gt=0,Ft=Nt.length;Gt<Ft;Gt++)ii(Nt[Gt],q,ot,nt)}function an(b,q,ot,nt){const{opaque:Z,transmissive:Nt,transparent:Gt}=b;B.setupLightsView(ot),At===!0&&Lt.setGlobalState(A.clippingPlanes,ot),nt&&Vt.viewport(N.copy(nt)),Z.length>0&&_i(Z,q,ot),Nt.length>0&&_i(Nt,q,ot),Gt.length>0&&_i(Gt,q,ot),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function _n(b,q,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[nt.id]===void 0){const $t=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[nt.id]=new Wn(1,1,{generateMipmaps:!0,type:$t?ei:mi,minFilter:Ar,samples:Te.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Nt=B.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||N;Nt.setSize(Gt.z*A.transmissionResolutionScale,Gt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),kt=A.getActiveCubeFace(),Yt=A.getActiveMipmapLevel();A.setRenderTarget(Nt),A.getClearColor(Mt),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),ee&&wt.render(ot);const Jt=A.toneMapping;A.toneMapping=Hi;const Zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),B.setupLightsView(nt),At===!0&&Lt.setGlobalState(A.clippingPlanes,nt),_i(b,ot,nt),W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt),me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Ke=q.length;De<Ke;De++){const ke=q[De],{object:Ne,geometry:Kt,material:Ue,group:ie}=ke;if(Ue.side===da&&Ne.layers.test(nt.layers)){const vn=Ue.side;Ue.side=kn,Ue.needsUpdate=!0,Ur(Ne,ot,nt,Kt,Ue,ie),Ue.side=vn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt))}A.setRenderTarget(Ft,kt,Yt),A.setClearColor(Mt,xt),Zt!==void 0&&(nt.viewport=Zt),A.toneMapping=Jt}function _i(b,q,ot){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Nt=b.length;Z<Nt;Z++){const Gt=b[Z],{object:Ft,geometry:kt,group:Yt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),Ft.layers.test(ot.layers)&&Ur(Ft,q,ot,kt,Jt,Yt)}}function Ur(b,q,ot,nt,Z,Nt){b.onBeforeRender(A,q,ot,nt,Z,Nt),b.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(A,q,ot,nt,b,Nt),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,A.renderBufferDirect(ot,q,nt,Z,b,Nt),Z.side=Ja,Z.needsUpdate=!0,A.renderBufferDirect(ot,q,nt,Z,b,Nt),Z.side=da):A.renderBufferDirect(ot,q,nt,Z,b,Nt),b.onAfterRender(A,q,ot,nt,Z,Nt)}function Lr(b,q,ot){q.isScene!==!0&&(q=Me);const nt=M.get(b),Z=B.state.lights,Nt=B.state.shadowsArray,Gt=Z.state.version,Ft=Pt.getParameters(b,Z.state,Nt,q,ot),kt=Pt.getProgramCacheKey(Ft);let Yt=nt.programs;nt.environment=b.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(b.isMeshStandardMaterial?vt:ft).get(b.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",wn),Yt=new Map,nt.programs=Yt);let Jt=Yt.get(kt);if(Jt!==void 0){if(nt.currentProgram===Jt&&nt.lightsStateVersion===Gt)return Hs(b,Ft),Jt}else Ft.uniforms=Pt.getUniforms(b),b.onBeforeCompile(Ft,A),Jt=Pt.acquireProgram(Ft,kt),Yt.set(kt,Jt),nt.uniforms=Ft.uniforms;const Zt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=Lt.uniform),Hs(b,Ft),nt.needsLights=va(b),nt.lightsStateVersion=Gt,nt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=Jt,nt.uniformsList=null,Jt}function $o(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Pu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Hs(b,q){const ot=M.get(b);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function $a(b,q,ot,nt,Z){q.isScene!==!0&&(q=Me),W.resetTextureUnits();const Nt=q.fog,Gt=nt.isMeshStandardMaterial?q.environment:null,Ft=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Us,kt=(nt.isMeshStandardMaterial?vt:ft).get(nt.envMap||Gt),Yt=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!ot.morphAttributes.position,$t=!!ot.morphAttributes.normal,De=!!ot.morphAttributes.color;let Ke=Hi;nt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ke=A.toneMapping);const ke=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ne=ke!==void 0?ke.length:0,Kt=M.get(nt),Ue=B.state.lights;if(At===!0&&(le===!0||b!==ct)){const Mn=b===ct&&nt.id===dt;Lt.setState(nt,b,Mn)}let ie=!1;nt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Ft||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==kt||nt.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Lt.numPlanes||Kt.numIntersection!==Lt.numIntersection)||Kt.vertexAlphas!==Yt||Kt.vertexTangents!==Jt||Kt.morphTargets!==Zt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Ke||Kt.morphTargetsCount!==Ne)&&(ie=!0):(ie=!0,Kt.__version=nt.version);let vn=Kt.currentProgram;ie===!0&&(vn=Lr(nt,q,Z));let ki=!1,xn=!1,ai=!1;const Pe=vn.getUniforms(),Sn=Kt.uniforms;if(Vt.useProgram(vn.program)&&(ki=!0,xn=!0,ai=!0),nt.id!==dt&&(dt=nt.id,xn=!0),ki||ct!==b){Vt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",b.projectionMatrix),Pe.setValue(G,"viewMatrix",b.matrixWorldInverse);const yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(G,pe.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ct!==b&&(ct=b,xn=!0,ai=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,W),Ue.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,W),Ue.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,W)),Z.isSkinnedMesh){Pe.setOptional(G,Z,"bindMatrix"),Pe.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pe.setValue(G,"boneTexture",Mn.boneTexture,W))}Z.isBatchedMesh&&(Pe.setOptional(G,Z,"batchingTexture"),Pe.setValue(G,"batchingTexture",Z._matricesTexture,W),Pe.setOptional(G,Z,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Pe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const fn=ot.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ue.update(Z,ot,vn),(xn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Pe.setValue(G,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Sn.envMap.value=kt,Sn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=q1()),xn&&(Pe.setValue(G,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&Gs(Sn,ai),Nt&&nt.fog===!0&&Xt.refreshFogUniforms(Sn,Nt),Xt.refreshMaterialUniforms(Sn,nt,mt,tt,B.state.transmissionRenderTarget[b.id]),Pu.upload(G,$o(Kt),Sn,W)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Pu.upload(G,$o(Kt),Sn,W),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(G,"center",Z.center),Pe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(G,"normalMatrix",Z.normalMatrix),Pe.setValue(G,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Mn=nt.uniformsGroups;for(let yn=0,Nr=Mn.length;yn<Nr;yn++){const vi=Mn[yn];yt.update(vi,vn),yt.bind(vi,vn)}}return vn}function Gs(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function va(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,q,ot){const nt=M.get(b);nt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),M.get(b.texture).__webglTexture=q,M.get(b.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ot=M.get(b);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const xa=G.createFramebuffer();this.setRenderTarget=function(b,q=0,ot=0){at=b,X=q,st=ot;let nt=null,Z=!1,Nt=!1;if(b){const Ft=M.get(b);if(Ft.__useDefaultFramebuffer!==void 0){Vt.bindFramebuffer(G.FRAMEBUFFER,Ft.__webglFramebuffer),N.copy(b.viewport),H.copy(b.scissor),J=b.scissorTest,Vt.viewport(N),Vt.scissor(H),Vt.setScissorTest(J),dt=-1;return}else if(Ft.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Ft.__hasExternalTextures)W.rebindTextures(b,M.get(b.texture).__webglTexture,M.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(Ft.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);const Yt=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?nt=Yt[q][ot]:nt=Yt[q],Z=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?nt=M.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?nt=Yt[ot]:nt=Yt,N.copy(b.viewport),H.copy(b.scissor),J=b.scissorTest}else N.copy($).multiplyScalar(mt).floor(),H.copy(et).multiplyScalar(mt).floor(),J=Ct;if(ot!==0&&(nt=xa),Vt.bindFramebuffer(G.FRAMEBUFFER,nt)&&Vt.drawBuffers(b,nt),Vt.viewport(N),Vt.scissor(H),Vt.setScissorTest(J),Z){const Ft=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,ot)}else if(Nt){const Ft=q;for(let kt=0;kt<b.textures.length;kt++){const Yt=M.get(b.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,ot,Ft)}}else if(b!==null&&ot!==0){const Ft=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,ot)}dt=-1},this.readRenderTargetPixels=function(b,q,ot,nt,Z,Nt,Gt,Ft=0){if(!(b&&b.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Gt!==void 0&&(kt=kt[Gt]),kt){Vt.bindFramebuffer(G.FRAMEBUFFER,kt);try{const Yt=b.textures[Ft],Jt=Yt.format,Zt=Yt.type;if(!Te.textureFormatReadable(Jt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Zt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-nt&&ot>=0&&ot<=b.height-Z&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(q,ot,nt,Z,bt.convert(Jt),bt.convert(Zt),Nt))}finally{const Yt=at!==null?M.get(at).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(b,q,ot,nt,Z,Nt,Gt,Ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Gt!==void 0&&(kt=kt[Gt]),kt)if(q>=0&&q<=b.width-nt&&ot>=0&&ot<=b.height-Z){Vt.bindFramebuffer(G.FRAMEBUFFER,kt);const Yt=b.textures[Ft],Jt=Yt.format,Zt=Yt.type;if(!Te.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ft),G.readPixels(q,ot,nt,Z,bt.convert(Jt),bt.convert(Zt),0);const De=at!==null?M.get(at).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,De);const Ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await eM(G,Ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer($t),G.deleteSync(Ke),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ot=0){const nt=Math.pow(2,-ot),Z=Math.floor(b.image.width*nt),Nt=Math.floor(b.image.height*nt),Gt=q!==null?q.x:0,Ft=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Gt,Ft,Z,Nt),Vt.unbindTexture()};const tr=G.createFramebuffer(),Sa=G.createFramebuffer();this.copyTextureToTexture=function(b,q,ot=null,nt=null,Z=0,Nt=null){Nt===null&&(Z!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Z,Z=0):Nt=0);let Gt,Ft,kt,Yt,Jt,Zt,$t,De,Ke;const ke=b.isCompressedTexture?b.mipmaps[Nt]:b.image;if(ot!==null)Gt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,Jt=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const fn=Math.pow(2,-Z);Gt=Math.floor(ke.width*fn),Ft=Math.floor(ke.height*fn),b.isDataArrayTexture?kt=ke.depth:b.isData3DTexture?kt=Math.floor(ke.depth*fn):kt=1,Yt=0,Jt=0,Zt=0}nt!==null?($t=nt.x,De=nt.y,Ke=nt.z):($t=0,De=0,Ke=0);const Ne=bt.convert(q.format),Kt=bt.convert(q.type);let Ue;q.isData3DTexture?(W.setTexture3D(q,0),Ue=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ue=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ie=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ai=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zt);const Pe=b.isDataArrayTexture||b.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const fn=M.get(b),Mn=M.get(q),yn=M.get(fn.__renderTarget),Nr=M.get(Mn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let vi=0;vi<kt;vi++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(b).__webglTexture,Z,Zt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Nt,Ke+vi)),G.blitFramebuffer(Yt,Jt,Gt,Ft,$t,De,Gt,Ft,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||M.has(b)){const fn=M.get(b),Mn=M.get(q);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,tr),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Sa);for(let yn=0;yn<kt;yn++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,Zt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Nt,Ke+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Nt),Z!==0?G.blitFramebuffer(Yt,Jt,Gt,Ft,$t,De,Gt,Ft,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Ue,Nt,$t,De,Ke+yn,Yt,Jt,Gt,Ft):G.copyTexSubImage2D(Ue,Nt,$t,De,Yt,Jt,Gt,Ft);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Ue,Nt,$t,De,Ke,Gt,Ft,kt,Ne,Kt,ke.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Nt,$t,De,Ke,Gt,Ft,kt,Ne,ke.data):G.texSubImage3D(Ue,Nt,$t,De,Ke,Gt,Ft,kt,Ne,Kt,ke):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,$t,De,Gt,Ft,Ne,Kt,ke.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,$t,De,ke.width,ke.height,Ne,ke.data):G.texSubImage2D(G.TEXTURE_2D,Nt,$t,De,Gt,Ft,Ne,Kt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),Nt===0&&q.generateMipmaps&&G.generateMipmap(Ue),Vt.unbindTexture()},this.initRenderTarget=function(b){M.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),Vt.unbindTexture()},this.resetState=function(){X=0,st=0,at=null,Vt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Fu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Z1=new Xu(-1,1,1,-1,0,1);class j1 extends Xi{constructor(){super(),this.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ci([0,2,0,0,2,0],2))}}const K1=new j1;class sv{constructor(e){this._mesh=new wi(K1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bd extends Qo{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hu.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new sv(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class T_ extends Qo{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class Q1 extends Qo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class J1{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new se);this._width=r.width,this._height=r.height,i=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bd(Fu),this.copyPass.material.blending=Ii,this.clock=new QM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),h.needsSwap){if(r){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}T_!==void 0&&(h instanceof T_?r=!0:h instanceof Q1&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $1 extends Qo{constructor(e,i,r=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const tA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ns extends Qo{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(c,h,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new Wn(c,h,{type:ei});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const S=new Wn(c,h,{type:ei});S.texture.name="UnrealBloomPass.v"+_,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),c=Math.round(c/2),h=Math.round(h/2)}const d=tA;this.highPassUniforms=Hu.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new se(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new rt(1,1,1),new rt(1,1,1),new rt(1,1,1),new rt(1,1,1),new rt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hu.clone(Fu.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:Fu.vertexShader,fragmentShader:Fu.fragmentShader,premultipliedAlpha:!0,blending:Uh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new Id,this._fsQuad=new sv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new se(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[],r=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(r*r))/r);return new Cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ns.BlurDirectionX=new se(1,0);Ns.BlurDirectionY=new se(0,1);const eA=({className:o,style:e,trailLength:i=50,inertia:r=.5,grainIntensity:l=.05,bloomStrength:c=.1,bloomRadius:h=1,bloomThreshold:d=.025,brightness:m=1,color:p="#B19EEF",mixBlendMode:_="screen",edgeIntensity:v=0,maxDevicePixelRatio:S=.5,targetPixels:E,fadeDelayMs:R,fadeDurationMs:C,zIndex:y=10})=>{const x=We.useRef(null),F=We.useRef(null),O=We.useRef(null),L=We.useRef(null),B=We.useRef(null),I=We.useRef(null),P=We.useRef([]),j=We.useRef(0),A=We.useRef(null),w=We.useRef(null),X=We.useRef(new se(.5,.5)),st=We.useRef(new se(0,0)),at=We.useRef(1),dt=We.useRef(typeof performance<"u"?performance.now():Date.now()),ct=We.useRef(!1),N=We.useRef(!1),H=We.useMemo(()=>typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),[]),J=E??(H?9e5:13e5),Mt=R??(H?500:1e3),xt=C??(H?1e3:1500),U=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,tt=`
    uniform float iTime;
    uniform vec3  iResolution;
    uniform vec2  iMouse;
    uniform vec2  iPrevMouse[MAX_TRAIL_LENGTH];
    uniform float iOpacity;
    uniform float iScale;
    uniform vec3  iBaseColor;
    uniform float iBrightness;
    uniform float iEdgeIntensity;
    varying vec2  vUv;

    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7))) * 43758.5453123); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      f *= f * (3. - 2. * f);
      return mix(mix(hash(i + vec2(0.,0.)), hash(i + vec2(1.,0.)), f.x),
                 mix(hash(i + vec2(0.,1.)), hash(i + vec2(1.,1.)), f.x), f.y);
    }
    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for(int i=0;i<5;i++){
        v += a * noise(p);
        p = m * p * 2.0;
        a *= 0.5;
      }
      return v;
    }
    vec3 tint1(vec3 base){ return mix(base, vec3(1.0), 0.15); }
    vec3 tint2(vec3 base){ return mix(base, vec3(0.8, 0.9, 1.0), 0.25); }

    vec4 blob(vec2 p, vec2 mousePos, float intensity, float activity) {
      vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2,1.3) + iTime * 0.1));
      vec2 r = vec2(fbm(p * iScale + q * 1.5 + iTime * 0.15), fbm(p * iScale + q * 1.5 + vec2(8.3,2.8) + iTime * 0.15));

      float smoke = fbm(p * iScale + r * 0.8);
      float radius = 0.5 + 0.3 * (1.0 / iScale);
      float distFactor = 1.0 - smoothstep(0.0, radius * activity, length(p - mousePos));
      float alpha = pow(smoke, 2.5) * distFactor;

      vec3 c1 = tint1(iBaseColor);
      vec3 c2 = tint2(iBaseColor);
      vec3 color = mix(c1, c2, sin(iTime * 0.5) * 0.5 + 0.5);

      return vec4(color * alpha * intensity, alpha * intensity);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
      vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);

      vec3 colorAcc = vec3(0.0);
      float alphaAcc = 0.0;

      vec4 b = blob(uv, mouse, 1.0, iOpacity);
      colorAcc += b.rgb;
      alphaAcc += b.a;

      for (int i = 0; i < MAX_TRAIL_LENGTH; i++) {
        vec2 pm = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        float t = 1.0 - float(i) / float(MAX_TRAIL_LENGTH);
        t = pow(t, 2.0);
        if (t > 0.01) {
          vec4 bt = blob(uv, pm, t * 0.8, iOpacity);
          colorAcc += bt.rgb;
          alphaAcc += bt.a;
        }
      }

      colorAcc *= iBrightness;

      vec2 uv01 = gl_FragCoord.xy / iResolution.xy;
      float edgeDist = min(min(uv01.x, 1.0 - uv01.x), min(uv01.y, 1.0 - uv01.y));
      float distFromEdge = clamp(edgeDist * 2.0, 0.0, 1.0);
      float k = clamp(iEdgeIntensity, 0.0, 1.0);
      float edgeMask = mix(1.0 - k, 1.0, distFromEdge);

      float outAlpha = clamp(alphaAcc * iOpacity * edgeMask, 0.0, 1.0);
      gl_FragColor = vec4(colorAcc, outAlpha);
    }
  `,mt=We.useMemo(()=>({uniforms:{tDiffuse:{value:null},iTime:{value:0},intensity:{value:l}},vertexShader:`
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float iTime;
        uniform float intensity;
        varying vec2 vUv;

        float hash1(float n){ return fract(sin(n)*43758.5453); }

        void main(){
          vec4 color = texture2D(tDiffuse, vUv);
          float n = hash1(vUv.x*1000.0 + vUv.y*2000.0 + iTime) * 2.0 - 1.0;
          color.rgb += n * intensity * color.rgb;
          gl_FragColor = color;
        }
      `}),[l]),Rt=We.useMemo(()=>new bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tDiffuse;
          varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tDiffuse, vUv);
            float a = max(c.a, 1e-5);
            vec3 straight = c.rgb / a;
            gl_FragColor = vec4(clamp(straight, 0.0, 1.0), c.a);
          }
        `}),[]);function It(et,Ct){const At=Math.min(Math.max(1,et),Math.max(1,Ct));return Math.max(.5,Math.min(2,At/600))}We.useEffect(()=>{const et=x.current,Ct=et?.parentElement;if(!et||!Ct)return;const Ht=Ct.style.position;(!Ht||Ht==="static")&&(Ct.style.position="relative");const At=new Y1({antialias:!H,alpha:!0,depth:!1,stencil:!1,powerPreference:H?"low-power":"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1});At.setClearColor(0,0),F.current=At,At.domElement.style.position="absolute",At.domElement.style.top="0",At.domElement.style.left="0",At.domElement.style.width="100vw",At.domElement.style.height="100vh",At.domElement.style.minWidth="100vw",At.domElement.style.minHeight="100vh",At.domElement.style.pointerEvents="none",_?At.domElement.style.mixBlendMode=String(_):At.domElement.style.removeProperty("mix-blend-mode"),et.appendChild(At.domElement),et.style.position="fixed",et.style.top="0",et.style.left="0",et.style.width="100vw",et.style.height="100vh",et.style.minWidth="100vw",et.style.minHeight="100vh",et.style.pointerEvents="none";const le=new GM,Ze=new Xu(-1,1,1,-1,0,1),pe=new Ko(2,2),he=Math.max(1,Math.floor(i));P.current=Array.from({length:he},()=>new se(.5,.5)),j.current=0;const Me=new Ee(p),ee=new Cn({defines:{MAX_TRAIL_LENGTH:he},uniforms:{iTime:{value:0},iResolution:{value:new rt(1,1,1)},iMouse:{value:new se(.5,.5)},iPrevMouse:{value:P.current.map(Tt=>Tt.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new rt(Me.r,Me.g,Me.b)},iBrightness:{value:m},iEdgeIntensity:{value:v}},vertexShader:U,fragmentShader:tt,transparent:!0,depthTest:!1,depthWrite:!1});L.current=ee;const je=new wi(pe,ee);le.add(je);const G=new J1(At);O.current=G;const Xe=new $1(le,Ze);G.addPass(Xe);const me=new Ns(new se(1,1),c,h,d);B.current=me,G.addPass(me);const Te=new bd(mt);I.current=Te,G.addPass(Te),G.addPass(Rt);const Vt=()=>{const Tt=Math.max(1,Math.floor(window.innerWidth??document.documentElement.clientWidth)),Pt=Math.max(1,Math.floor(window.innerHeight??document.documentElement.clientHeight)),Xt=Math.min(typeof window<"u"&&window.devicePixelRatio||1,S),St=Tt*Pt*Xt*Xt,Et=St<=J?1:Math.max(.5,Math.min(1,Math.sqrt(J/Math.max(1,St)))),Lt=Xt*Et;At.setPixelRatio(Lt),At.setSize(Tt,Pt,!1),G.setPixelRatio?.(Lt),G.setSize(Tt,Pt);const Ut=Math.max(1,Math.floor(Tt*Lt)),wt=Math.max(1,Math.floor(Pt*Lt));ee.uniforms.iResolution.value.set(Ut,wt,1),ee.uniforms.iScale.value=It(Tt,Pt),me.setSize(Ut,wt)};Vt();const D=new ResizeObserver(Vt);w.current=D,D.observe(Ct),D.observe(et),window.addEventListener("resize",Vt);const M=typeof performance<"u"?performance.now():Date.now(),W=()=>{const Tt=performance.now(),Pt=(Tt-M)/1e3,Xt=L.current,St=O.current;if(!Xt||!St)return;if(ct.current)st.current.set(X.current.x-Xt.uniforms.iMouse.value.x,X.current.y-Xt.uniforms.iMouse.value.y),Xt.uniforms.iMouse.value.copy(X.current),at.current=1;else{st.current.multiplyScalar(r),st.current.lengthSq()>1e-6&&Xt.uniforms.iMouse.value.add(st.current);const Ut=Tt-dt.current;if(Ut>Mt){const wt=Math.min(1,(Ut-Mt)/xt);at.current=Math.max(0,1-wt)}}const Et=P.current.length;j.current=(j.current+1)%Et,P.current[j.current].copy(Xt.uniforms.iMouse.value);const Lt=Xt.uniforms.iPrevMouse.value;for(let Ut=0;Ut<Et;Ut++){const wt=(j.current-Ut+Et)%Et;Lt[Ut].copy(P.current[wt])}if(Xt.uniforms.iOpacity.value=at.current,Xt.uniforms.iTime.value=Pt,I.current?.uniforms?.iTime&&(I.current.uniforms.iTime.value=Pt),St.render(),!ct.current&&at.current<=.001){N.current=!1,A.current=null;return}A.current=requestAnimationFrame(W)},ft=()=>{N.current||(N.current=!0,A.current=requestAnimationFrame(W))},vt=Tt=>{const Pt=Ct.getBoundingClientRect(),Xt=B0.clamp((Tt.clientX-Pt.left)/Math.max(1,Pt.width),0,1),St=B0.clamp(1-(Tt.clientY-Pt.top)/Math.max(1,Pt.height),0,1);X.current.set(Xt,St),ct.current=!0,dt.current=performance.now(),ft()},ut=()=>{ct.current=!0,ft()},qt=()=>{ct.current=!1,dt.current=performance.now(),ft()};return document.addEventListener("pointermove",vt,{passive:!0}),document.addEventListener("pointerenter",ut,{passive:!0}),document.addEventListener("pointerleave",qt,{passive:!0}),ft(),()=>{A.current&&cancelAnimationFrame(A.current),N.current=!1,A.current=null,document.removeEventListener("pointermove",vt),document.removeEventListener("pointerenter",ut),document.removeEventListener("pointerleave",qt),w.current?.disconnect(),window.removeEventListener("resize",Vt),le.clear(),pe.dispose(),ee.dispose(),G.dispose(),At.dispose(),At.domElement&&At.domElement.parentElement&&At.domElement.parentElement.removeChild(At.domElement),(!Ht||Ht==="static")&&(Ct.style.position=Ht)}},[i,r,l,c,h,d,J,Mt,xt,H,p,m,_,v]),We.useEffect(()=>{if(L.current){const et=new Ee(p);L.current.uniforms.iBaseColor.value.set(et.r,et.g,et.b)}},[p]),We.useEffect(()=>{L.current&&(L.current.uniforms.iBrightness.value=m)},[m]),We.useEffect(()=>{L.current&&(L.current.uniforms.iEdgeIntensity.value=v)},[v]),We.useEffect(()=>{I.current?.uniforms?.intensity&&(I.current.uniforms.intensity.value=l)},[l]),We.useEffect(()=>{const et=F.current?.domElement;et&&(_?et.style.mixBlendMode=String(_):et.style.removeProperty("mix-blend-mode"))},[_]);const $=We.useMemo(()=>({zIndex:y,...e}),[y,e]);return A_.jsx("div",{ref:x,className:`ghost-cursor ${o??""}`,style:$})},b_=document.getElementById("ghost-cursor-root");b_&&SS.createRoot(b_).render(A_.jsx(eA,{color:"#B19EEF",brightness:2,edgeIntensity:0,trailLength:50,inertia:.5,grainIntensity:.05,bloomStrength:.1,bloomRadius:1,bloomThreshold:.025,fadeDelayMs:1e3,fadeDurationMs:1500,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",minWidth:"100%",minHeight:"100%",zIndex:0,pointerEvents:"none"}}));
