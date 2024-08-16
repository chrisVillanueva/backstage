/*! For license information please see 076fa75c.08421745.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[322843],{119510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(824246),o=n(511151);const i={id:"index",title:"Frontend System Architecture",sidebar_label:"Overview",description:"The structure and architecture of the new Frontend System"},s=void 0,a={id:"frontend-system/architecture/index",title:"Frontend System Architecture",description:"The structure and architecture of the new Frontend System",source:"@site/../docs/frontend-system/architecture/00-index.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/index",permalink:"/docs/frontend-system/architecture/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/00-index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Frontend System Architecture",sidebar_label:"Overview",description:"The structure and architecture of the new Frontend System"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/frontend-system/"},next:{title:"App",permalink:"/docs/frontend-system/architecture/app"}},u={},c=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"App",id:"app",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Extension Overrides",id:"extension-overrides",level:3},{value:"Utility APIs",id:"utility-apis",level:3},{value:"Routes",id:"routes",level:3},{value:"Package structure",id:"package-structure",level:2}];function l(e){const t={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"building-blocks",children:"Building Blocks"}),"\n",(0,r.jsx)(t.p,{children:"This section introduces the high-level building blocks upon which this new\nsystem is built. Most of these concepts exist in our current system too, although\nin some cases you need to squint quite a lot to see the similarity."}),"\n",(0,r.jsx)(t.p,{children:"Regardless of whether you are setting up your own backstage instance,\ndeveloping plugins, or extending plugins with new features, it is\nimportant to understand these concepts."}),"\n",(0,r.jsx)(t.p,{children:"The diagram below provides an overview of the different building blocks, and the other blocks that each of them interact with."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"frontend system building blocks diagram",src:n(951480).Z+"",width:"582",height:"432"})}),"\n",(0,r.jsx)(t.h3,{id:"app",children:"App"}),"\n",(0,r.jsx)(t.p,{children:"This is the app instance itself that you create and use as the root of your Backstage frontend application. It does not have any direct functionality in and of itself, but is simply responsible for wiring things together."}),"\n",(0,r.jsx)(t.h3,{id:"extensions",children:"Extensions"}),"\n",(0,r.jsx)(t.p,{children:"Extensions are the building blocks that build out both the visual and non-visual structure of the application. There are both built-in extensions provided by the app itself, as well as extensions provided by plugins. Each extension is attached to a parent with which it shares data, and can have any number of children of its own. It is up to the app to wire together all extensions into a single tree known as the app extension tree. It is from this structure that the entire app can then be instantiated and rendered."}),"\n",(0,r.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,r.jsx)(t.p,{children:"Plugins provide the actual features inside an app. The size of a plugin can range from a tiny component to an entire new system in which other plugins can be composed and integrated. Plugins can be completely standalone, or build on top of each other to extend existing plugins and augment their features. Plugins can communicate with each other by composing their extensions, or by sharing Utility APIs and routes."}),"\n",(0,r.jsx)(t.h3,{id:"extension-overrides",children:"Extension Overrides"}),"\n",(0,r.jsx)(t.p,{children:"In addition to the built-in extensions and extensions provided by plugins, it is also possible to install extension overrides. This is a collection of extensions with high priority that can replace existing extensions. They can for example be used to override an individual extension provided by a plugin, or install a completely new extension, such as a new app theme."}),"\n",(0,r.jsx)(t.h3,{id:"utility-apis",children:"Utility APIs"}),"\n",(0,r.jsx)(t.p,{children:"Utility APIs provide functionality that makes it easier to build plugins, make it possible for plugins to share functionality with other plugins, as well as serve as a customization point for integrators to change the behavior of the app. Each Utility API is defined by a TypeScript interface as well as a reference used to access the implementations. The implementations of Utility APIs are defined by extensions that are provided and can be overridden the same as any other extension."}),"\n",(0,r.jsx)(t.h3,{id:"routes",children:"Routes"}),"\n",(0,r.jsx)(t.p,{children:"The Backstage routing system adds a layer of indirection that makes it possible for plugins to route to each other's extensions without explicit knowledge of what URL paths the extension are rendered at or if they even exist at all. It makes it possible for plugins to share routes with each other and dynamically generate concrete links at runtime. It is the responsibility of the app to resolve these links to actual URLs, but it is also possible for integrators to define their own route bindings that decide how the links should be resolved. The routing system also lets plugins define internal routes, aiding in the linking to different content in the same plugin."}),"\n",(0,r.jsx)(t.h2,{id:"package-structure",children:"Package structure"}),"\n",(0,r.jsx)(t.p,{children:"TODO"})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},951480:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-building-blocks.drawio-60c70e802a66efd9181cb07ea38aa410.svg"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var x=v.prototype=new g;x.constructor=v,y(x,b.prototype),x.isPureReactComponent=!0;var _=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+R(u,0):i,_(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),O(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",_(e))for(var c=0;c<e.length;c++){var l=i+R(a=e[c],c);u+=O(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=O(a=a.value,t,o,l=i+R(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)w.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);