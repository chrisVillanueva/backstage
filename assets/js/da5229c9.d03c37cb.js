/*! For license information please see da5229c9.d03c37cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[484731],{509695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(824246),r=n(511151);const a={id:"threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage."},s=void 0,i={id:"overview/threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage.",source:"@site/../docs/overview/threat-model.md",sourceDirName:"overview",slug:"/overview/threat-model",permalink:"/docs/overview/threat-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/threat-model.md",tags:[],version:"current",frontMatter:{id:"threat-model",title:"Backstage Threat Model",description:"A document describing the threat model for Backstage."},sidebar:"docs",previous:{title:"Release & Versioning Policy",permalink:"/docs/overview/versioning-policy"},next:{title:"Support and community",permalink:"/docs/overview/support"}},c={},l=[{value:"Trust Model",id:"trust-model",level:2},{value:"Operator Responsibilities",id:"operator-responsibilities",level:2},{value:"Common Backend Configuration",id:"common-backend-configuration",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Scaffolder",id:"scaffolder",level:2},{value:"TechDocs",id:"techdocs",level:2},{value:"Proxy",id:"proxy",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The threat model outlines key security considerations of Backstage for operators, developers and security researchers. This is a living document and will evolve and be expanded alongside the Backstage project as relevant."}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/security",children:"Security Policy and Advisories"})," in the Backstage GitHub repository for details on reporting security vulnerabilities and advisories on fixed security flaws."]}),"\n",(0,o.jsx)(t.h2,{id:"trust-model",children:"Trust Model"}),"\n",(0,o.jsx)(t.p,{children:"The Backstage trust model is divided into three groups with different trust levels."}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.strong,{children:"internal user"})," is an authenticated user that generally belongs to the organization of a particular Backstage deployment. These users are trusted to the extent that they are not expected to compromise the availability of Backstage, but they are not trusted to not compromise data confidentiality or integrity."]}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.strong,{children:"operator"})," is a user responsible for configuring and maintaining an instance of Backstage. Operators are fully trusted, since they operate the system and database and therefore have root access to the host system. Additional measures can be taken by adopters of Backstage in order to restrict or observe the access of this group, but that falls outside of the current scope of Backstage."]}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.strong,{children:"builder"})," is an internal or external code contributor and end up having a similar level of access as operators. When installing Backstage plugins you should vet them just like any other package from an external source. While it\u2019s possible to limit the impact of for example a supply chain attack by splitting the deployment into separate services with different plugins, the Backstage project itself does not aim to prevent these kinds of attacks or in any other way sandbox or limit the access of plugins."]}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.strong,{children:"external user"})," is a user that does not belong to the other two groups, for example a malicious actor outside of the organization. The security model of Backstage currently assumes that this group does not have any direct access to Backstage, and it is the responsibility of each adopter of Backstage to make sure this is the case."]}),"\n",(0,o.jsx)(t.h2,{id:"operator-responsibilities",children:"Operator Responsibilities"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This section assumes that you are using the\n",(0,o.jsx)(t.a,{href:"/docs/backend-system/",children:"new backend system"})," and at least Backstage release ",(0,o.jsx)(t.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". Before that Backstage did not come with built-in protection against unauthorized access and you were required to deploy it in a protected environment."]})}),"\n",(0,o.jsx)(t.p,{children:"Backstage is primarily designed to be deployed in a protected environment rather than being exposed to the public internet. From a confidentiality and integrity perspective, Backstage is designed to protect against unauthorized access to data and to ensure that data is not tampered with. However, Backstage does not provide more than rudimentary protection against denial of service attacks, and it is the responsibility of the operator to ensure that the Backstage deployment is protected against such attacks. A common and recommended way to protect a Backstage deployment from unauthorized access is to deploy it behind an authenticating proxy such as AWS\u2019s ALB, GCP\u2019s IAP, or Cloudflare Access."}),"\n",(0,o.jsxs)(t.p,{children:["Users that are signed-in in to Backstage generally have full access to all information and actions. If more fine-grained control is required, the ",(0,o.jsx)(t.a,{href:"/docs/permissions/overview",children:"permissions system"})," should be enabled and configured to restrict access as necessary."]}),"\n",(0,o.jsx)(t.p,{children:"An operator is responsible for protecting the integrity of configuration files as it may otherwise be possible to introduce vulnerable configurations, as well as the confidentiality of configured secrets related to Backstage as these typically include authentication details to third party systems."}),"\n",(0,o.jsx)(t.p,{children:"The operator is ultimately responsible for auditing usage of internal and external plugins as these run on the host system and have access to configuration and secrets. When installing plugins from sources like NPM, you should vet these in the same way that you would vet any other package installed from that source."}),"\n",(0,o.jsxs)(t.p,{children:["The operator is also responsible for maintaining the resolved NPM dependencies of their Backstage project. This involves ensuring that ",(0,o.jsx)(t.code,{children:"yarn.lock"})," receives updated versions of packages that have vulnerabilities, when those fixed versions are in range of what the Backstage packages request in their respective ",(0,o.jsx)(t.code,{children:"package.json"})," files. This is commonly done by employing automated tooling such as ",(0,o.jsx)(t.a,{href:"https://dependabot.com/",children:"Dependabot"}),", ",(0,o.jsx)(t.a,{href:"https://snyk.io/",children:"Snyk"}),", and/or ",(0,o.jsx)(t.a,{href:"https://docs.renovatebot.com/",children:"Renovate"})," on your own repository. When fixed versions exist that are ",(0,o.jsx)(t.em,{children:"not"})," in range of what Backstage packages request, or when larger operations such as switching out an entire dependency for another one is required, maintainers collaborate with contributors to try to address those dependency declarations in the main project as soon as possible."]}),"\n",(0,o.jsxs)(t.p,{children:["The built-in protection against unauthorized access does not by default include protection of the frontend bundle. The frontend bundle includes all the code of your frontend plugins and code in minified form, as well as any other frontend resources like images, fonts, etc. If this is a concern, you can use the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/enable-public-entry/",children:"experimental public entry point"})," to create two separate frontend builds, where authenticated users only have access to the full one."]}),"\n",(0,o.jsx)(t.h2,{id:"common-backend-configuration",children:"Common Backend Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["There are many common facilities that are configured centrally and available to all Backstage backend plugins. For example there is a ",(0,o.jsx)(t.code,{children:"DatabaseManager"})," that provides access to a SQL database, ",(0,o.jsx)(t.code,{children:"SchedulerService"})," for scheduling long-running tasks, ",(0,o.jsx)(t.code,{children:"Logger"})," as a general logging facility, and ",(0,o.jsx)(t.code,{children:"UrlReader"})," for reading content from external sources. These are all configured either directly in code, or within the ",(0,o.jsx)(t.code,{children:"backend"})," block of the static configuration. The appropriate care needs to be taken to ensure that any secrets remain confidential and no malicious configuration is injected."]}),"\n",(0,o.jsxs)(t.p,{children:["In a typical Backstage setup, there is no boundary between plugins that run on the same host. Likewise, there is no boundary between plugins that share the same database access. Any plugin that is running on a host that has access to the logical database of any other plugin should be considered to have full access to that other plugin. For example, even if you deploy the ",(0,o.jsx)(t.code,{children:"auth"})," and ",(0,o.jsx)(t.code,{children:"catalog"})," plugins on separate hosts with separate configuration and credentials, the ",(0,o.jsx)(t.code,{children:"catalog"})," plugin is still considered to have full access to the ",(0,o.jsx)(t.code,{children:"auth"})," plugin as long as the ",(0,o.jsx)(t.code,{children:"catalog"})," plugin has access to the ",(0,o.jsx)(t.code,{children:"auth"})," plugin's logical database. The only way to create a boundary between the two plugins is to deploy them in such a way that they do not have access to each others\u2019 database. This applies to the database facility as well as any other shared resources, such as the cache."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"UrlReader"})," facility is of particular interest for a secure Backstage configuration. In particular the ",(0,o.jsx)(t.code,{children:"backend.reading.allow"})," configuration lists the hosts that you trust the backend to be able to read content from on behalf of users. It is extremely important that this list does not, for example, allow access to instance metadata endpoints of cloud providers, or other endpoints that your Backstage instance may have access to which contain sensitive information. In general it is recommended to keep the list minimal and only allow reading from required endpoints. The same concerns apply to custom implementations of the ",(0,o.jsx)(t.code,{children:"UrlReader"})," interface, if you need to implement these through code."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that the ",(0,o.jsx)(t.code,{children:"UrlReader"})," system operates with a service context and is not integrated with the Backstage permission system or other external access control mechanisms. This means users of your Backstage instance may be able to read external content which that individual should not have access to. For example, the ",(0,o.jsx)(t.code,{children:"$text"})," placeholder in a ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," can be used to read contents from a source such as a GitHub repository that the user does not have direct access too. If this is a concern it is recommended to either disable or replace the resolvers in the catalog placeholder processor and similar features in any other plugin."]}),"\n",(0,o.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(t.p,{children:["Backstage provides authentication of users through the ",(0,o.jsx)(t.code,{children:"auth"})," plugin, which primarily acts as an authorization server for different OAuth 2.0 provider integrations. These integrations can both serve the purpose of signing users into Backstage, as well as providing delegated access to external resources, and are all subject to the common concerns of implementing secure OAuth 2.0 authorization servers. All auth provider integrations are disabled by default, and need to be enabled through configuration in order to be used. For each Backstage installation it is recommended to only enable the minimal set of providers that are in use by that instance."]}),"\n",(0,o.jsxs)(t.p,{children:["In order to use an auth provider to sign in users into Backstage, it needs to be configured with an ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver",children:"Identity resolver"}),", which is a custom callback implemented in code. The identity resolver is a sensitive part of configuring Backstage and it is important that it always resolves user identities correctly, based on information provided by the authentication provider. There are a number of built-in identity resolvers that can simplify configuration, and it is important that these all resolve users in a secure way, regardless of how they are used."]}),"\n",(0,o.jsxs)(t.p,{children:["Backstage also supports authentication through an authenticating reverse proxy such as ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/elasticloadbalancing/application-load-balancer/",children:"AWS ALB"}),", where the user identity is read from the incoming proxied decorated request. The following proxy auth providers verify the signature of incoming requests, and are therefore safe to deploy with direct access by users: ",(0,o.jsx)(t.code,{children:"awsAlb"}),", ",(0,o.jsx)(t.code,{children:"cfAccess"}),", and ",(0,o.jsx)(t.code,{children:"gcpIap"}),". Providers like ",(0,o.jsx)(t.code,{children:"oauth2Proxy"})," do not verify the incoming request and can therefore be spoofed by a malicious internal user to supply the ",(0,o.jsx)(t.code,{children:"auth"})," backend with forged identity information. It\u2019s therefore highly recommended to restrict access to the ",(0,o.jsx)(t.code,{children:"oauth2Proxy"})," endpoints, or use a different provider."]}),"\n",(0,o.jsxs)(t.p,{children:["As part of signing in with an identity resolver, a Backstage Token is issued containing the resolved user identity. The tokens are asymmetrically signed JSON Web Tokens, with the public keys available to any service that wishes to verify a token. The signing keys are rotated continuously and are unique to each installation of Backstage, meaning that Backstage Tokens are not shared across installations. The token contains claims for the user identity and ownership information, which can be used to determine what Backstage resources are owned by that user or group. It is important that this token can not be forged outside of the ",(0,o.jsx)(t.code,{children:"auth"})," plugin, with the exception of other plugins deployed in the same backend service or sharing the same database. For a high-security deployment, the ",(0,o.jsx)(t.code,{children:"auth"})," backend should therefore be deployed in a separate service with its own database."]}),"\n",(0,o.jsx)(t.p,{children:"The token is used to prove the identity of the user within the Backstage system, and is used throughout Backstage plugins to control access. It is important that the ownership resolution logic is consistent across the entire Backstage ecosystem, with no possibility of misinterpreting the ownership information."}),"\n",(0,o.jsxs)(t.p,{children:["One of the claims in a user token is the User Identity Proof or ",(0,o.jsx)(t.code,{children:"uip"}),". This is an additional signature of the token that allows for offline token transformation. By replacing the original signature with the ",(0,o.jsx)(t.code,{children:"uip"})," the token is still proof of a user identity, but it no longer acts as a full access token and will be rejected by most plugin endpoints. Plugins can explicitly allow use of this limited token where required, but this should only be used when necessary when a full token is not available, and ideally just for read-only access. Use-cases for limited users tokens include cookie authentication of static assets, storage of user identity proofs in a database, and similar."]}),"\n",(0,o.jsxs)(t.p,{children:["The communication across backend plugins uses a similar authentication scheme to the user authentication. Each backend plugin generates and publishes its own set of keys that it uses to sign its tokens, and the public keys are shared with all other plugins for verification. The expected location of each plugin's published JWKS is determined by the ",(0,o.jsx)(t.code,{children:"DiscoveryService"})," implementation in the backend, which means that it is vital for any custom implementation of that service to be careful with user input. The tokens signed by each plugin contain both the source and target plugin ID, which means that the token can not be reused to access other plugins."]}),"\n",(0,o.jsxs)(t.p,{children:["When forwarding a user identity in a call across backend plugins only the limited user token with ",(0,o.jsx)(t.code,{children:"uip"})," is used, wrapped in a new service token that is signed by the calling plugin. This means that the receiving plugin can trust the user identity, but it is not able to make further calls on behalf of the user except for with the plugins that it is authorized to call. That is except for any endpoints in other plugins that accept limited user tokens, which is a reason to avoid accepting them when possible."]}),"\n",(0,o.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,o.jsxs)(t.p,{children:["Operators should configure ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/configuration#catalog-rules",children:"catalog rules"})," to limit the allowed entity kinds that users can define. In general it is best to restrict definition of User, Group, and Template entities so that internal users cannot register additional ones. Template entities define actions that are executed on the backend hosts, and while the goal is for these actions to be secure regardless of input, it is still a more sensitive context and it is recommended that you protect it with additional checks. It is very important to not allow registration of User and Group entities if you ingest and rely on these as organizational data in your catalog. Doing so could otherwise open up for the ability to impersonate users and confuse group membership information. You should always ingest organizational data using a statically configured catalog location or an entity provider reading from a trusted source. The entities emitted directly by an entity provider are always trusted and rules are not applied to them, but any entities produced further down the chain are still subject to the rules."]}),"\n",(0,o.jsx)(t.p,{children:"The Catalog does not aim to protect against resource exhaustion attacks in its default setup. If you need to prevent your internal users from being able to register large amounts of entities, then it is recommended to disable entity registration and use a different approach for discovering entities. One way to mitigate any resource exhaustion attacks is to only allow the catalog to read from trusted SCM sources that have an audit trail. Catalog currently lacks limits for entity hierarchy depth and entity size, which we hope to address in the future."}),"\n",(0,o.jsxs)(t.p,{children:["By default all internal users are allowed to create and delete entities. If this does not fit your organization's needs it is recommended to enable and configure the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"permission"})," system to restrict these operations."]}),"\n",(0,o.jsx)(t.h2,{id:"scaffolder",children:"Scaffolder"}),"\n",(0,o.jsxs)(t.p,{children:["By default, Scaffolding jobs execute directly on the host machine, including any actions defined in the template. Because the Scaffolder templates are considered a more sensitive area it is recommended to control access to create and update templates to trusted parties. Template execution is intended to be secure regardless of input, but we still recommend this additional layer of protection. The string templating is executed in a ",(0,o.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm",children:"node VM sandbox"})," to mitigate the possibility of remote code execution attacks."]}),"\n",(0,o.jsx)(t.p,{children:"The Scaffolder often has elevated permissions to for example create repositories in a Github organization. The operator should therefore be cautious of Scaffolder Templates that for example delete or update existing resources as the user input is typically user defined and can therefore delete or modify resources maliciously or by mistake."}),"\n",(0,o.jsx)(t.p,{children:"One strategy that allows you to reduce the access that the Scaffolder service has is to rely on user credentials when executing actions. For example, a GitHub App integration could be configured with read-only permissions, with a separate user OAuth token used to create repositories. This requires that your users have access to create repositories in the first place."}),"\n",(0,o.jsx)(t.p,{children:"The operator should audit installed scaffolding actions just like any other plugin package. It is also important to verify that installed actions fall in line with your own security requirements, as some actions might be intended for more relaxed environments."}),"\n",(0,o.jsxs)(t.p,{children:["By default all internal users are allowed to execute templates in the scaffolder. If this does not fit your organization's needs it is recommended to enable and configure the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"permission"})," system to restrict these operations."]}),"\n",(0,o.jsx)(t.h2,{id:"techdocs",children:"TechDocs"}),"\n",(0,o.jsxs)(t.p,{children:["TechDocs' backend can be broadly configured in two ways. The default is when ",(0,o.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(t.code,{children:"local"}),", in which documentation is generated on-demand and stored locally by the TechDocs backend. When ",(0,o.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(t.code,{children:"external"})," instead, documentation is assumed to be generated by an external process (e.g. in a CI/CD pipeline), and merely read from a configured external storage provider."]}),"\n",(0,o.jsx)(t.p,{children:"When documentation is generated locally, integrators are responsible for ensuring secure configuration of file system permissions in the location where generated assets are stored. When documentation is generated externally, integrators are responsible for access control and permissioning between the external process that generates the documentation, the storage provider where documentation assets are published, and the TechDocs backend."}),"\n",(0,o.jsx)(t.p,{children:"Regardless of backend configuration, the TechDocs frontend does not trust the generated HTML of any documentation sites and therefore applies a strict sanitization process before rendering out any content to users."}),"\n",(0,o.jsx)(t.p,{children:"By default, all TechDocs documentation is visible to all Backstage users. Access can be restricted to TechDocs sites by configuring view permissions for the Catalog."}),"\n",(0,o.jsx)(t.h2,{id:"proxy",children:"Proxy"}),"\n",(0,o.jsx)(t.p,{children:"The proxy backend acts as a utility for frontend plugins to access remote services that may not be set up to receive traffic directly from the Backstage frontend. Typical reasons for this would be that the upstream service does not provide the appropriate CORS headers or does not serve its content over HTTPS."}),"\n",(0,o.jsxs)(t.p,{children:["The proxy entries are configured through static configuration. Each entry has a mount path and an upstream target, and also supports other options such as limiting the allowed methods, or injecting additional headers. It is recommended to avoid injecting authentication headers for upstream services, as this is a risky way to decorate requests with credentials. Anyone with access to your Backstage deployment will be able to make requests to the upstream service using the injected credentials. It is recommended that you instead create a backend plugin that forwards individual requests to the upstream service in a secure way. In case you do end up injecting credentials into upstream requests, be sure that you are not exposing any sensitive information or actions. You should also restrict the access as much as possible, for example using the ",(0,o.jsx)(t.code,{children:"allowedMethods"})," option to limit the methods that can be used, and using tokens with the minimum required authorization scope."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,m(x,y.prototype),x.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,o){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!T.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,r,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return s=s(c=e),e=""===a?"."+C(c,0):a,k(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),I(s,t,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",k(e))for(var l=0;l<e.length;l++){var d=a+C(i=e[l],l);c+=I(i,t,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=I(i=i.value,t,r,d=a+C(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function A(e,t,n){if(null==e)return e;var o=[],r=0;return I(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},O={transition:null},P={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:O,ReactCurrentOwner:j};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=s,t.PureComponent=v,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!T.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:r,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=B,t.createFactory=function(e){var t=B.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return E.current.useCallback(e,t)},t.useContext=function(e){return E.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return E.current.useDeferredValue(e)},t.useEffect=function(e,t){return E.current.useEffect(e,t)},t.useId=function(){return E.current.useId()},t.useImperativeHandle=function(e,t,n){return E.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.current.useMemo(e,t)},t.useReducer=function(e,t,n){return E.current.useReducer(e,t,n)},t.useRef=function(e){return E.current.useRef(e)},t.useState=function(e){return E.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(667294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);