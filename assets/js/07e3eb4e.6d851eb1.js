"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7102],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1903:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={id:"usecases_index",title:"Summary"},i=void 0,o={unversionedId:"usecases/usecases_index",id:"version-1.x/usecases/usecases_index",title:"Summary",description:"The ZIO library lets you easily solve problems in a variety of areas, including:",source:"@site/versioned_docs/version-1.x/usecases/index.md",sourceDirName:"usecases",slug:"/usecases/",permalink:"/version-1.x/usecases/",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/usecases/index.md",tags:[],version:"1.x",frontMatter:{id:"usecases_index",title:"Summary"},sidebar:"usecases-sidebar",next:{title:"Asynchronous",permalink:"/version-1.x/usecases/usecases_asynchronous"}},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ZIO library lets you easily solve problems in a variety of areas, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_asynchronous"},(0,a.kt)("strong",{parentName:"a"},"Asynchronous Programming"))," \u2014 Write asynchronous code as easily as synchronous code, handling all errors and never leaking resources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_concurrency"},(0,a.kt)("strong",{parentName:"a"},"Concurrent Programming"))," \u2014 Write concurrent code that scales easily, without locks or deadlocks, with maximal laziness and resource safety."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_parallelism"},(0,a.kt)("strong",{parentName:"a"},"Parallelism"))," \u2014 Trivially partition work among many parallel fibers to make short work of CPU-intensive processing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_queueing"},(0,a.kt)("strong",{parentName:"a"},"Queueing"))," \u2014 Build work processing flows and ration scarce resources with powerful asynchronous queues."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_retrying"},(0,a.kt)("strong",{parentName:"a"},"Retrying"))," \u2014 Create and test robust retry strategies that make your application resilient to transient failures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_scheduling"},(0,a.kt)("strong",{parentName:"a"},"Scheduling"))," \u2014 Schedule repeating work, like report generation or email notifications, using flexible, composable schedules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_streaming"},(0,a.kt)("strong",{parentName:"a"},"Streaming"))," \u2014 Handle huge or infinite amounts of data in constant heap space with efficient, lazy, concurrent streams."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/version-1.x/usecases/usecases_testing"},(0,a.kt)("strong",{parentName:"a"},"Testing"))," - Easily test effectual programs with powerful combinators, built-in property based testing, and seamless mocking capabilities.")),(0,a.kt)("p",null,"Explore the pages above and learn how the simple, powerful building blocks in ZIO help you solve problems in these critical areas."))}u.isMDXComponent=!0}}]);