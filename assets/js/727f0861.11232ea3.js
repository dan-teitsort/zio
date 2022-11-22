"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8035:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"index",title:"Introduction"},i=void 0,s={unversionedId:"datatypes/contextual/services/index",id:"datatypes/contextual/services/index",title:"Introduction",description:"ZIO already provides four build-in services:",source:"@site/docs/datatypes/contextual/services/index.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/",permalink:"/next/datatypes/contextual/services/",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/services/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"TaskLayer",permalink:"/next/datatypes/contextual/tasklayer"},next:{title:"Console",permalink:"/next/datatypes/contextual/services/console"}},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO already provides four build-in services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/services/console"},"Console"))," \u2014 Operations for reading/writing strings from/to the standard input, output, and error console."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/services/clock"},"Clock"))," \u2014 Contains some functionality related to time and scheduling."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/services/random"},"Random"))," \u2014 Provides utilities to generate random numbers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/services/system"},"System"))," \u2014 Contains several useful functions related to system environments and properties.")),(0,o.kt)("p",null,"When we use these services we don't need to provide their corresponding environment explicitly. ZIO provides built-in live version of ZIO services to our effects, so we do not need to provide them manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val myApp: ZIO[Any, IOException, Unit] = \n    for {\n      date <- Clock.currentDateTime\n      _    <- ZIO.logInfo(s"Application started at $date")\n      _    <- Console.print("Enter your name: ")\n      name <- Console.readLine\n      _    <- Console.printLine(s"Hello, $name!")\n    } yield ()\n\n  def run = myApp\n}\n')))}p.isMDXComponent=!0}}]);