/*! For license information please see efee3184.9e010a0a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983410],{160095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(824246),s=t(511151);const i={id:"naming-patterns",title:"Frontend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the frontend system"},a=void 0,o={id:"frontend-system/architecture/naming-patterns",title:"Frontend System Naming Patterns",description:"Naming patterns in the frontend system",source:"@site/../docs/frontend-system/architecture/50-naming-patterns.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/naming-patterns",permalink:"/docs/frontend-system/architecture/naming-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/50-naming-patterns.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"naming-patterns",title:"Frontend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the frontend system"},sidebar:"docs",previous:{title:"Routes",permalink:"/docs/frontend-system/architecture/routes"},next:{title:"Migrations",permalink:"/docs/frontend-system/architecture/migrations"}},c={},l=[{value:"Plugins",id:"plugins",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Extension Data",id:"extension-data",level:2},{value:"Standalone Extension Data",id:"standalone-extension-data",level:4},{value:"Grouped Extension Data",id:"grouped-extension-data",level:4},{value:"Extension Creator Extension Data",id:"extension-creator-extension-data",level:4},{value:"Extension Inputs",id:"extension-inputs",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These are the naming patterns to adhere to within the frontend system. They help us keep exports and IDs consistent across packages and make it easier to understand the usage and intent of exports and IDs."}),"\n",(0,r.jsx)(n.p,{children:"As a rule, all names should be camel case, with the exceptions of plugin and extension IDs, which should use kebab case."}),"\n",(0,r.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'<id>'"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'catalog'"}),", ",(0,r.jsx)(n.code,{children:"'user-settings'"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Symbol"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<id>Plugin"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"catalogPlugin"}),", ",(0,r.jsx)(n.code,{children:"userSettingsPlugin"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// This declaration is only for internal usage in tests. This could also be a direct default export.\nexport const userSettingsPlugin = createFrontendPlugin({\n  id: 'user-settings',\n  ...\n})\n\n// The plugin instance should be the default export of the package, typically this is placed in src/index.ts\nexport { userSettingsPlugin as default } from './plugin';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that while we use this naming pattern for the plugin instance this is only for internal usage within the package. Plugins are always exported as the default export of the plugin package."}),"\n",(0,r.jsx)(n.h2,{id:"extensions",children:"Extensions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blueprint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<Kind>Blueprint"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"PageBlueprint"}),", ",(0,r.jsx)(n.code,{children:"EntityCardBlueprint"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[<kind>:]<namespace>[/<name>]"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'core.nav'"}),", ",(0,r.jsx)(n.code,{children:"'page:user-settings'"}),", ",(0,r.jsx)(n.code,{children:"'entity-card:catalog/about'"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Symbol"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<namespace>[<Name>][<Kind>]"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"coreNav"}),", ",(0,r.jsx)(n.code,{children:"userSettingsPage"}),", ",(0,r.jsx)(n.code,{children:"catalogAboutEntityCard"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["When you create a new extension you never provide the ID directly. Instead, you indirectly or directly provide the kind, namespace, and name parts that make up the ID. The kind is always provided by the extension blueprint, the only exception is if you use ",(0,r.jsx)(n.code,{children:"createExtension"})," directly. Any extension that is provided by a plugin will by default have its namespace set to the plugin ID, so you generally only need to provide an explicit namespace if you want to override an existing extension. The name is also optional, and primarily used to distinguish between multiple extensions of the same kind and namespace. If a plugin doesn't need to distinguish between different extensions of the same kind, the name can be omitted."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// This is an extension blueprint that is used to create an extension of the 'page' kind.\nexport const PageBlueprint = createExtensionBlueprint({\n  kind: 'page',\n  // ...\n});\n\n// The namespace is inferred from the plugin ID, in this case 'catalog'\n// The final ID for this extension will be 'page:catalog/entity'\nconst catalogEntityPage = PageBlueprint.make({\n  name: 'entity',\n  // ...\n});\n\n// The name is omitted, because the catalog plugin only provides a single extension of this kind\n// The final ID for this extension will be 'search-result-list-item:catalog'\nconst catalogSearchResultListItem = SearchResultListItemBlueprint.make({\n  // ...\n});\n\n// Note that the extensions themselves are not exported, only the plugin instance\nexport const catalogPlugin = createFrontendPlugin({\n  id: 'catalog',\n  extensions: [catalogEntityPage, catalogSearchResultListItem /* ... */],\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extension-data",children:"Extension Data"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Interface"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<Name>ExtensionData"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SearchResultItemExtensionData"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Standalone Reference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<name>ExtensionDataRef"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"searchResultItemExtensionDataRef"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Standalone ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<namespace>.<name>"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'search.search-result-item'"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Grouped Reference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<group>ExtensionData.<name>"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"coreExtensionData.reactElement"}),", ",(0,r.jsx)(n.code,{children:"catalogFilterExtensionData.functionFilter"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Grouped ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<group>.<name>"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'core.react-element'"}),", ",(0,r.jsx)(n.code,{children:"'catalog-filter.function-filter'"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Creator Reference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"create<Kind>Extension.<name>DataRef"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"createGraphiQLEndpointExtension.endpointDataRef"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Creator ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<namespace>.<kind>.<name>"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'graphiql.graphiql-endpoint.endpoint'"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Extension data references can be defined in a couple of different ways, depending on the intended usage, all of which are covered below."}),"\n",(0,r.jsx)(n.h4,{id:"standalone-extension-data",children:"Standalone Extension Data"}),"\n",(0,r.jsx)(n.p,{children:"The most simple way of defining extension data is a standalone reference. This is useful when you want to export a single reference that isn't closely tied to a specific kind of extension. Because this creates an extra export for each reference, the two other ways of defining extension data are preferred when possible."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// A separate named type declaration is only needed for bespoke complex extension data types\nexport interface SearchResultItemExtensionData {\n  /* ... */\n}\n\nexport const searchResultItemExtensionDataRef =\n  createExtensionDataRef<SearchResultItemExtensionData>().with({\n    id: 'search.search-result-item',\n  });\n"})}),"\n",(0,r.jsx)(n.h4,{id:"grouped-extension-data",children:"Grouped Extension Data"}),"\n",(0,r.jsx)(n.p,{children:"This way of defining extension data is similar to the standalone way, but it used when you want to export multiple pieces of grouped extension data for general use. This avoids separate exports and helps make related extension data references easier to discover. The name of the group should generally by the same as the namespace of the exporting package, typically the plugin ID. If the group needs to be more specific it should be prefixed with the namespace."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const coreExtensionData = {\n  reactElement: createExtensionDataRef<ReactElement>().with({\n    id: 'core.react-element',\n  }),\n  routePath: createExtensionDataRef<string>().with({\n    id: 'core.route-path',\n  }),\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"extension-creator-extension-data",children:"Extension Creator Extension Data"}),"\n",(0,r.jsx)(n.p,{children:"This is a convenient way of defining extension data when that data is only meant to be produced by a specific extension creator. It avoids additional exports and clearly signals that this piece of data belongs to this particular kind of extension."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export function createGraphiQLEndpointExtension(options) {\n  /* ... */\n}\n\n// Use a TypeScript namespace to merge the extension data references with the extension creator\nexport namespace createGraphiQLEndpointExtension {\n  export const endpointDataRef = createExtensionDataRef</* ... */>().with({\n    id: 'graphiql.graphiql-endpoint.endpoint',\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extension-inputs",children:"Extension Inputs"}),"\n",(0,r.jsx)(n.p,{children:"Extension inputs do not have naming patterns for all types of input, but there are some specific use-cases where we encourage using a recognizable input name."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"children"})}),(0,r.jsxs)(n.td,{children:["An extension input that accepts ",(0,r.jsx)(n.code,{children:"coreExtensionData.reactElement"})," data and nothing else, used in a way that is equivalent of the ",(0,r.jsx)(n.code,{children:"children"})," property in React."]})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var r=t(827378),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function j(){}function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var b=g.prototype=new j;b.constructor=g,x(b,y.prototype),b.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var s,i={},a=null,o=null;if(null!=n)for(s in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(a=""+n.key),n)E.call(n,s)&&!_.hasOwnProperty(s)&&(i[s]=n[s]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===i[s]&&(i[s]=c[s]);return{$$typeof:t,type:e,key:a,ref:o,props:i,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var D=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,s,i,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+R(c,0):i,v(a)?(s="",null!=e&&(s=e.replace(D,"$&/")+"/"),P(a,n,s,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(D,"$&/")+"/")+e)),n.push(a)),1;if(c=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var d=i+R(o=e[l],l);c+=P(o,n,s,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)c+=P(o=o.value,n,s,d=i+R(o,l++),a);else if("object"===o)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,n,t){if(null==e)return e;var r=[],s=0;return P(e,r,"","",(function(e){return n.call(t,e,s++)})),r}function C(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},N={transition:null},$={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:N,ReactCurrentOwner:w};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=s,n.Profiler=a,n.PureComponent=g,n.StrictMode=i,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,o=w.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)E.call(n,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}return{$$typeof:t,type:e.type,key:i,ref:a,props:s,_owner:o}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=N.transition;N.transition={};try{e()}finally{N.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return T.current.useCallback(e,n)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,n){return T.current.useEffect(e,n)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,n,t){return T.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return T.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return T.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return T.current.useMemo(e,n)},n.useReducer=function(e,n,t){return T.current.useReducer(e,n,t)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return T.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(667294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);