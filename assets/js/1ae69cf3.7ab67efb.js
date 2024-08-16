/*! For license information please see 1ae69cf3.7ab67efb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[355032],{795433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(824246),o=n(511151);const a={id:"collators",title:"Collators",description:"Indexing you Backstage content with Collators"},c=void 0,s={id:"features/search/collators",title:"Collators",description:"Indexing you Backstage content with Collators",source:"@site/../docs/features/search/collators.md",sourceDirName:"features/search",slug:"/features/search/collators",permalink:"/docs/features/search/collators",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/collators.md",tags:[],version:"current",frontMatter:{id:"collators",title:"Collators",description:"Indexing you Backstage content with Collators"},sidebar:"docs",previous:{title:"Search Engines",permalink:"/docs/features/search/search-engines"},next:{title:"How-To guides",permalink:"/docs/features/search/how-to-guides"}},l={},i=[{value:"Catalog",id:"catalog",level:2},{value:"Configuring the Catalog Collator",id:"configuring-the-catalog-collator",level:3},{value:"TechDocs",id:"techdocs",level:2},{value:"Configuring the TechDocs Collator",id:"configuring-the-techdocs-collator",level:3},{value:"Community Collators",id:"community-collators",level:2},{value:"Custom Collators",id:"custom-collators",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backstage includes 2 ",(0,r.jsx)(t.a,{href:"/docs/features/search/concepts#collators",children:"collators"})," out of the box for the ",(0,r.jsx)(t.a,{href:"#catalog",children:"Catalog"})," and ",(0,r.jsx)(t.a,{href:"#techdocs",children:"TechDocs"}),". There's also some from the ",(0,r.jsx)(t.a,{href:"#community-collators",children:"Backstage Community"})," too!"]}),"\n",(0,r.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsx)(t.p,{children:"The Catalog collator will index all the Entities in your Catalog. It is installed by default but if you need to add it manually here's how."}),"\n",(0,r.jsx)(t.p,{children:"First we add the plugin into your backend app:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-catalog\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then add the following line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend/alpha'));\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-catalog/alpha'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"configuring-the-catalog-collator",children:"Configuring the Catalog Collator"}),"\n",(0,r.jsx)(t.p,{children:"The default schedule for the Catalog Collator is to run every 10 minutes, you can provide your own schedule by adding it to your config:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml',children:'search:\n  collators:\n    catalog:\n      schedule: # same options as in TaskScheduleDefinition\n        # supports cron, ISO duration, "human duration" as used in code\n        initialDelay: { seconds: 90 }\n        # supports cron, ISO duration, "human duration" as used in code\n        frequency: { hours: 6 }\n        # supports ISO duration, "human duration" as used in code\n        timeout: { minutes: 3 }\n'})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs",children:"TechDocs"}),"\n",(0,r.jsx)(t.p,{children:"The TechDocs collator will index all the TechDocs in your Catalog. It is installed by default but if you need to add it manually here's how."}),"\n",(0,r.jsx)(t.p,{children:"First we add the plugin into your backend app:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-techdocs\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then add the following line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend/alpha'));\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-techdocs/alpha'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"configuring-the-techdocs-collator",children:"Configuring the TechDocs Collator"}),"\n",(0,r.jsx)(t.p,{children:"The default schedule for the TechDocs Collator is to run every 10 minutes, you can provide your own schedule by adding it to your config:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml',children:'search:\n  collators:\n    techdocs:\n      schedule: # same options as in TaskScheduleDefinition\n        # supports cron, ISO duration, "human duration" as used in code\n        initialDelay: { seconds: 90 }\n        # supports cron, ISO duration, "human duration" as used in code\n        frequency: { hours: 6 }\n        # supports ISO duration, "human duration" as used in code\n        timeout: { minutes: 3 }\n'})}),"\n",(0,r.jsx)(t.h2,{id:"community-collators",children:"Community Collators"}),"\n",(0,r.jsx)(t.p,{children:"Here are some of the known Search Collators available in from the Backstage Community:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/search-backend-module-explore",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})}),": will index content from the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/explore/plugins/explore",children:"Explore plugin"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/search-backend-module-stack-overflow-collator",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-stack-overflow-collator"})}),": will index content from Stack Overflow."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/search-backend-module-adr",children:(0,r.jsx)(t.code,{children:"@backstage-community/search-backend-module-adr"})}),": will index content from the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/adr",children:"ADR plugin"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"custom-collators",children:"Custom Collators"}),"\n",(0,r.jsxs)(t.p,{children:["To create your own collators/decorators modules, please use the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d7f955f300893f50c4882ea8f5c09aa42dfaacfd/plugins/search-backend-module-catalog/src/alpha.ts#L49",children:"searchModuleCatalogCollator"})," as an example, we recommend that modules are separated by plugin packages (e.g. ",(0,r.jsx)(t.code,{children:"search-backend-module-<plugin-id>"}),"). You can also find the available search engines and collator/decorator modules documentation in the Alpha API reports."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,u=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=k.prototype=new b;x.constructor=k,m(x,y.prototype),x.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,a={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var i=Array(l),u=0;u<l;u++)i[u]=arguments[u+2];a.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:c,ref:s,props:a,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,a,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return c=c(l=e),e=""===a?"."+O(l,0):a,v(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),T(c,t,o,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(l=0,a=""===a?".":a+":",v(e))for(var i=0;i<e.length;i++){var u=a+O(s=e[i],i);l+=T(s,t,o,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),i=0;!(s=e.next()).done;)l+=T(s=s.value,t,o,u=a+O(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null},P={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:D,ReactCurrentOwner:_};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=c,t.PureComponent=k,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)j.call(t,i)&&!C.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){l=Array(i);for(var u=0;u<i;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:a,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(667294);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);