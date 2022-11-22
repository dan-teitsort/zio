"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,y=c["".concat(l,".").concat(u)]||c[u]||s[u]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9282:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"trandom",title:"TRandom"},i=void 0,p={unversionedId:"datatypes/stm/trandom",id:"datatypes/stm/trandom",title:"TRandom",description:"TRandom is a random service like Random that provides utilities to generate random numbers, but they can participate in STM transactions.",source:"@site/docs/datatypes/stm/trandom.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/trandom",permalink:"/next/datatypes/stm/trandom",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/stm/trandom.md",tags:[],version:"current",frontMatter:{id:"trandom",title:"TRandom"},sidebar:"datatypes-sidebar",previous:{title:"TArray",permalink:"/next/datatypes/stm/tarray"},next:{title:"TSet",permalink:"/next/datatypes/stm/tset"}},l=[],d={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," is a random service like ",(0,a.kt)("a",{parentName:"p",href:"/next/datatypes/contextual/services/random"},"Random")," that provides utilities to generate random numbers, but they can participate in STM transactions."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," service is the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Random")," service. There are no differences in operations, but all return types are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"STM")," world rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," world:"),(0,a.kt)("p",null,"| Function      | Input Type    | Output Type                   |\n|---------------+---------------+-------------------------------|\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBoolean")," |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Boolean]"),"     |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBytes"),"   | ",(0,a.kt)("inlineCode",{parentName:"p"},"length: Int")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Chunk[Byte]]")," |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextDouble"),"  |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Double]"),"      |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextInt"),"     |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Int]"),"         |\n| ...           | ...           | ...                           |"),(0,a.kt)("p",null,"When we use operations of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," service, they add ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," dependency on our ",(0,a.kt)("inlineCode",{parentName:"p"},"STM")," data type. After committing all the transactions, we can ",(0,a.kt)("inlineCode",{parentName:"p"},"inject"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"provide")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," implementation into our effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"myApp.provide(Random.live >>> TRandom.live)\n")))}m.isMDXComponent=!0}}]);