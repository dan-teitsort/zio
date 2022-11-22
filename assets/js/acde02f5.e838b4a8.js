"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4041:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"index",title:"Summary"},o=void 0,l={unversionedId:"datatypes/core/index",id:"version-1.x/datatypes/core/index",title:"Summary",description:"- ZIO \u2014 A ZIO is a value that models an effectful program, which might fail or succeed.",source:"@site/versioned_docs/version-1.x/datatypes/core/index.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/",permalink:"/version-1.x/datatypes/core/",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Summary"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/version-1.x/datatypes/"},next:{title:"ZIO",permalink:"/version-1.x/datatypes/core/zio"}},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/zio"},"ZIO"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO")," is a value that models an effectful program, which might fail or succeed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/uio"},"UIO"))," \u2014 An ",(0,a.kt)("inlineCode",{parentName:"li"},"UIO[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/urio"},"URIO"))," \u2014 An ",(0,a.kt)("inlineCode",{parentName:"li"},"URIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/task"},"Task"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"Task[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/rio"},"RIO"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"RIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/io"},"IO"))," \u2014 An ",(0,a.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/exit"},"Exit"))," \u2014 An ",(0,a.kt)("inlineCode",{parentName:"li"},"Exit[E, A]")," describes the result of executing an ",(0,a.kt)("inlineCode",{parentName:"li"},"IO")," value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/cause"},"Cause"))," - ",(0,a.kt)("inlineCode",{parentName:"li"},"Cause[E]")," is a description of a full story of a fiber failure. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/core/runtime"},"Runtime"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,a.kt)("inlineCode",{parentName:"li"},"R"),".")))}c.isMDXComponent=!0}}]);