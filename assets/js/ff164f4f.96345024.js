"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},927:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const o={id:"tpromise",title:"TPromise"},a=void 0,s={unversionedId:"datatypes/stm/tpromise",id:"version-1.x/datatypes/stm/tpromise",title:"TPromise",description:"TPromise is a mutable reference that can be set exactly once and can participate in transactions in STM.",source:"@site/versioned_docs/version-1.x/datatypes/stm/tpromise.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tpromise",permalink:"/version-1.x/datatypes/stm/tpromise",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/tpromise.md",tags:[],version:"1.x",frontMatter:{id:"tpromise",title:"TPromise"},sidebar:"datatypes-sidebar",previous:{title:"TPriorityQueue",permalink:"/version-1.x/datatypes/stm/tpriorityqueue"},next:{title:"TQueue",permalink:"/version-1.x/datatypes/stm/tqueue"}},m=[{value:"Create a TPromise",id:"create-a-tpromise",children:[],level:2},{value:"Complete a TPromise",id:"complete-a-tpromise",children:[],level:2},{value:"Retrieve the value of a TPromise",id:"retrieve-the-value-of-a-tpromise",children:[],level:2}],l={toc:m};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TPromise")," is a mutable reference that can be set exactly once and can participate in transactions in STM."),(0,i.kt)("h2",{id:"create-a-tpromise"},"Create a TPromise"),(0,i.kt)("p",null,"Creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPromise"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tPromise: STM[Nothing, TPromise[String, Int]] = TPromise.make[String, Int]\n")),(0,i.kt)("h2",{id:"complete-a-tpromise"},"Complete a TPromise"),(0,i.kt)("p",null,"In order to successfully complete a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPromise"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tPromiseSucceed: UIO[TPromise[String, Int]] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.succeed(0).commit\n} yield tPromise\n")),(0,i.kt)("p",null,"In order to fail a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPromise")," use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tPromiseFail: UIO[TPromise[String, Int]] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.fail("failed").commit\n} yield tPromise\n')),(0,i.kt)("p",null,"Alternatively, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"done")," combinator and complete the promise by passing it ",(0,i.kt)("inlineCode",{parentName:"p"},"Either[E, A]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tPromiseDoneSucceed: UIO[TPromise[String, Int]] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.done(Right(0)).commit\n} yield tPromise\n\nval tPromiseDoneFail: UIO[TPromise[String, Int]] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.done(Left("failed")).commit\n} yield tPromise\n')),(0,i.kt)("p",null,"Once the value is set, any following attempts to set it will result in ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h2",{id:"retrieve-the-value-of-a-tpromise"},"Retrieve the value of a TPromise"),(0,i.kt)("p",null,"Returns the result if the promise has already been completed or a ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," otherwise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tPromiseOptionValue: UIO[Option[Either[String, Int]]] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.succeed(0).commit\n  res      <- tPromise.poll.commit\n} yield res\n")),(0,i.kt)("p",null,"Alternatively, you can wait for the promise to be completed and return the value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tPromiseValue: IO[String, Int] = for {\n  tPromise <- TPromise.make[String, Int].commit\n  _        <- tPromise.succeed(0).commit\n  res      <- tPromise.await.commit\n} yield res\n")))}p.isMDXComponent=!0}}]);