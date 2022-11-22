"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2531],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),v=o,m=u["".concat(c,".").concat(v)]||u[v]||d[v]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9442:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={id:"index",title:"Introduction"},s=void 0,a={unversionedId:"services/index",id:"version-1.x/services/index",title:"Introduction",description:"ZIO already provided 5 build-in services, when we use these services we don't need to provide their corresponding environment explicitly. The ZEnv environment is a type alias for all of these services and will be provided by ZIO to our effects:",source:"@site/versioned_docs/version-1.x/services/index.md",sourceDirName:"services",slug:"/services/",permalink:"/version-1.x/services/",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Introduction"},sidebar:"services-sidebar",next:{title:"Console",permalink:"/version-1.x/services/console"}},c=[],l={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO already provided 5 build-in services, when we use these services we don't need to provide their corresponding environment explicitly. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnv")," environment is a type alias for all of these services and will be provided by ZIO to our effects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/services/console"},"Console"))," \u2014 Operations for reading/writing strings from/to the standard input, output, and error console."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/services/clock"},"Clock"))," \u2014 Contains some functionality related to time and scheduling. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/services/random"},"Random"))," \u2014 Provides utilities to generate random numbers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/services/blocking"},"Blocking"))," \u2014 Provides access to a thread pool that can be used for performing blocking operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/services/system"},"System"))," \u2014 Contains several useful functions related to system environments and properties.")))}p.isMDXComponent=!0}}]);