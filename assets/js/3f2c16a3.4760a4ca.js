"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},999:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"urio",title:"URIO"},i=void 0,p={unversionedId:"datatypes/core/urio",id:"version-1.x/datatypes/core/urio",title:"URIO",description:"URIO[R, A] is a type alias for ZIO[R, Nothing, A], which represents an effect that requires an R, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/core/urio.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/urio",permalink:"/version-1.x/datatypes/core/urio",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/urio.md",tags:[],version:"1.x",frontMatter:{id:"urio",title:"URIO"},sidebar:"datatypes-sidebar",previous:{title:"UIO",permalink:"/version-1.x/datatypes/core/uio"},next:{title:"Task",permalink:"/version-1.x/datatypes/core/task"}},s=[],l={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URIO[R, A]")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, A]"),", which represents an effect that requires an ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),", and cannot fail, but can succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,r.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,r.kt)("p",null,"Let's see how the ",(0,r.kt)("inlineCode",{parentName:"p"},"URIO")," type alias is defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type URIO[-R, +A] = ZIO[R, Nothing, A]\n")),(0,r.kt)("p",null,"So the ",(0,r.kt)("inlineCode",{parentName:"p"},"URIO")," just equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," which requires ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," and cannot fail because in the Scala the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, we can't create an instance of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),". It succeeds with ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"In following example, the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"putStrLn")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"URIO[Console, Unit]")," which means, it requires ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," service as an environment, and it succeeds with ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def putStrLn(line: => String): ZIO[Console, IOException, Unit] =\n  ZIO.accessM(_.get putStrLn line)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,r.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,r.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}c.isMDXComponent=!0}}]);