/*! For license information please see 0a851b39.c63a54ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[569753],{273112:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-catalog-backend.urlreaderprocessor._constructor_",title:"UrlReaderProcessor.(constructor)",description:"API reference for UrlReaderProcessor.(constructor)"},u=void 0,s={id:"reference/plugin-catalog-backend.urlreaderprocessor._constructor_",title:"UrlReaderProcessor.(constructor)",description:"API reference for UrlReaderProcessor.(constructor)",source:"@site/../docs/reference/plugin-catalog-backend.urlreaderprocessor._constructor_.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.urlreaderprocessor._constructor_",permalink:"/docs/reference/plugin-catalog-backend.urlreaderprocessor._constructor_",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.urlreaderprocessor._constructor_.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.urlreaderprocessor._constructor_",title:"UrlReaderProcessor.(constructor)",description:"API reference for UrlReaderProcessor.(constructor)"}},a={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.urlreaderprocessor",children:(0,n.jsx)(r.code,{children:"UrlReaderProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.urlreaderprocessor._constructor_",children:(0,n.jsx)(r.code,{children:"(constructor)"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,n.jsx)(r.code,{children:"UrlReaderProcessor"})," class"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"constructor(options: {\n        reader: UrlReaderService;\n        logger: LoggerService;\n    });\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ reader: ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; logger: ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),(0,n.jsx)(r.td,{})]})})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(e,r,t){this.props=e,this.context=r,this.refs=_,this.updater=t||y}function b(){}function g(e,r,t){this.props=e,this.context=r,this.refs=_,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=g.prototype=new b;v.constructor=g,h(v,m.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},u=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)x.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:u,ref:s,props:c,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return u=u(a=e),e=""===c?"."+w(a,0):c,j(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(u,r,o,"",(function(e){return e}))):null!=u&&(P(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),r.push(u)),1;if(a=0,c=""===c?".":c+":",j(e))for(var i=0;i<e.length;i++){var l=c+w(s=e[i],i);a+=C(s,r,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)a+=C(s=s.value,r,o,l=c+w(s,i++),u);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},I={transition:null},T={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=u,r.PureComponent=g,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in r)x.call(r,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==a?a[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){a=Array(i);for(var l=0;l<i;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return U.current.useCallback(e,r)},r.useContext=function(e){return U.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return U.current.useDeferredValue(e)},r.useEffect=function(e,r){return U.current.useEffect(e,r)},r.useId=function(){return U.current.useId()},r.useImperativeHandle=function(e,r,t){return U.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return U.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return U.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return U.current.useMemo(e,r)},r.useReducer=function(e,r,t){return U.current.useReducer(e,r,t)},r.useRef=function(e){return U.current.useRef(e)},r.useState=function(e){return U.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return U.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return U.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>u});var n=t(667294);const o={},c=n.createContext(o);function u(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);