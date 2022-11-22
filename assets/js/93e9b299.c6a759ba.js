"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6250:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"random",title:"Random"},i=void 0,s={unversionedId:"datatypes/contextual/services/random",id:"datatypes/contextual/services/random",title:"Random",description:"Random service provides utilities to generate random numbers. It's a functional wrapper of scala.util.Random. This service contains various different pseudo-random generators like nextInt, nextBoolean and nextDouble. Each random number generator functions return a URIO[Random, T] value.",source:"@site/docs/datatypes/contextual/services/random.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/random",permalink:"/next/datatypes/contextual/services/random",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/services/random.md",tags:[],version:"current",frontMatter:{id:"random",title:"Random"},sidebar:"datatypes-sidebar",previous:{title:"Clock",permalink:"/next/datatypes/contextual/services/clock"},next:{title:"System",permalink:"/next/datatypes/contextual/services/system"}},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Random service provides utilities to generate random numbers. It's a functional wrapper of ",(0,a.kt)("inlineCode",{parentName:"p"},"scala.util.Random"),". This service contains various different pseudo-random generators like ",(0,a.kt)("inlineCode",{parentName:"p"},"nextInt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBoolean")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nextDouble"),". Each random number generator functions return a ",(0,a.kt)("inlineCode",{parentName:"p"},"URIO[Random, T]")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  randomInt    <- Random.nextInt\n  _            <- Console.printLine(s"A random Int: $randomInt")\n  randomChar   <- Random.nextPrintableChar\n  _            <- Console.printLine(s"A random Char: $randomChar")\n  randomDouble <- Random.nextDoubleBetween(1.0, 5.0)\n  _            <- Console.printLine(s"A random double between 1.0 and 5.0: $randomDouble")\n} yield ()\n')),(0,a.kt)("p",null,"Random service has a ",(0,a.kt)("inlineCode",{parentName:"p"},"setSeed")," which helps us to alter the state of the random generator. It is useful for setting up a test version of Random service when we need to reproduce always the same sequence of numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  _        <- Random.setSeed(0)\n  nextInts <- (Random.nextInt zip Random.nextInt)\n} yield assert(nextInts == (-1155484576,-723955400))\n")),(0,a.kt)("p",null,"Also, it has a utility to shuffle a list and to generate random samples from Gaussian distribution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shuffle")," - Takes a list as an input and shuffles it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nextGaussian"),' \u2014 Returns the next pseudorandom, Gaussian ("normally") distributed double value with mean 0.0 and standard deviation 1.0.')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),":"),(0,a.kt)("p",{parentName:"blockquote"},"Random numbers that are generated via Random service are not cryptographically strong. Therefore it's not safe to use the ZIO Random service for security domains where a high level of security and randomness is required, such as password generation.")))}u.isMDXComponent=!0}}]);