"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8021:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={id:"exit",title:"Exit"},o=void 0,s={unversionedId:"datatypes/core/exit",id:"version-1.x/datatypes/core/exit",title:"Exit",description:"An Exit[E, A] value describes how fibers end life. It has two possible values:",source:"@site/versioned_docs/version-1.x/datatypes/core/exit.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/exit",permalink:"/version-1.x/datatypes/core/exit",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/exit.md",tags:[],version:"1.x",frontMatter:{id:"exit",title:"Exit"},sidebar:"datatypes-sidebar",previous:{title:"IO",permalink:"/version-1.x/datatypes/core/io"},next:{title:"Cause",permalink:"/version-1.x/datatypes/core/cause"}},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Exit[E, A]")," value describes how fibers end life. It has two possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Exit.Success")," contain a success value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Exit.Failure")," contains a failure ",(0,i.kt)("a",{parentName:"li",href:"/version-1.x/datatypes/core/cause"},"Cause")," of type ",(0,i.kt)("inlineCode",{parentName:"li"},"E"),".")),(0,i.kt)("p",null,"We can call ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," on our effect to determine the Success or Failure of our fiber:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nfor {\n  successExit <- ZIO.succeed(1).run\n  _ <- successExit match {\n    case Exit.Success(value) =>\n      putStrLn(s"exited with success value: ${value}")\n    case Exit.Failure(cause) =>\n      putStrLn(s"exited with failure state: $cause")\n  }\n} yield ()\n')))}p.isMDXComponent=!0}}]);