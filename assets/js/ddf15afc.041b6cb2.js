"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7054],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(n),f=r,u=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return n?a.createElement(u,l(l({ref:e},d),{},{components:n})):a.createElement(u,l({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2176:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"from-cats-efect",title:"How to Migrate from Cats Effect to ZIO?"},l=void 0,i={unversionedId:"howto/migrate/from-cats-efect",id:"howto/migrate/from-cats-efect",title:"How to Migrate from Cats Effect to ZIO?",description:"Cats IO[A] can be easily replaced with ZIO's Task[A] (an alias for ZIO[Any, Throwable, A]).",source:"@site/docs/howto/migrate/from-cats-efect.md",sourceDirName:"howto/migrate",slug:"/howto/migrate/from-cats-efect",permalink:"/next/howto/migrate/from-cats-efect",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/howto/migrate/from-cats-efect.md",tags:[],version:"current",frontMatter:{id:"from-cats-efect",title:"How to Migrate from Cats Effect to ZIO?"}},p=[{value:"Methods on cats.FlatMap.Ops",id:"methods-on-catsflatmapops",children:[],level:3},{value:"TODO",id:"todo",children:[],level:3}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cats ",(0,r.kt)("inlineCode",{parentName:"p"},"IO[A]")," can be easily replaced with ZIO's ",(0,r.kt)("inlineCode",{parentName:"p"},"Task[A]")," (an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Throwable, A]"),").\nTranslation should be relatively straightfoward. Below, you'll find tables showing the ZIO equivalents of\nvarious ",(0,r.kt)("inlineCode",{parentName:"p"},"cats.*"),"'s methods."),(0,r.kt)("h3",{id:"methods-on-catsflatmapops"},"Methods on cats.FlatMap.Ops"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"cats"),(0,r.kt)("th",{parentName:"tr",align:null},"ZIO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatMap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatMap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatten")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatten"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"productREval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zipRight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"productLEval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zipLeft"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mproduct")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zipPar"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatTap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tap"))))),(0,r.kt)("h3",{id:"todo"},"TODO"),(0,r.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);