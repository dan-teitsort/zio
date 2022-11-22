"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9623],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>w});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(r),w=o,d=m["".concat(l,".").concat(w)]||m[w]||s[w]||i;return r?n.createElement(d,a(a({ref:e},u),{},{components:r})):n.createElement(d,a({ref:e},u))}));function w(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8990:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={id:"with-twitter",title:"How to Interop with Twitter?"},a=void 0,p={unversionedId:"howto/interop/with-twitter",id:"howto/interop/with-twitter",title:"How to Interop with Twitter?",description:"interop-twitter module provides capability to convert Twitter Future into ZIO Task.",source:"@site/docs/howto/interop/with-twitter.md",sourceDirName:"howto/interop",slug:"/howto/interop/with-twitter",permalink:"/next/howto/interop/with-twitter",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/howto/interop/with-twitter.md",tags:[],version:"current",frontMatter:{id:"with-twitter",title:"How to Interop with Twitter?"},sidebar:"howto-sidebar",previous:{title:"How to Interop with Reactive Streams?",permalink:"/next/howto/interop/with-reactive-streams"},next:{title:"How to Interop with Guava?",permalink:"/next/howto/interop/with-guava"}},l=[{value:"Example",id:"example",children:[],level:3}],c={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-twitter"},(0,o.kt)("inlineCode",{parentName:"a"},"interop-twitter"))," module provides capability to convert ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.github.io/util/docs/com/twitter/util/Future.html"},"Twitter ",(0,o.kt)("inlineCode",{parentName:"a"},"Future"))," into ZIO ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.twitter.util.Future\nimport zio.{ App, Task }\nimport zio.Console._\nimport zio.interop.twitter._\n\nobject Example extends App {\n  def run(args: List[String]) = {\n    val program =\n      for {\n        _        <- printLine("Hello! What is your name?")\n        name     <- readLine\n        greeting <- Task.fromTwitterFuture(Task(greet(name)))\n        _        <- printLine(greeting)\n      } yield ()\n\n    program.exitCode\n  }\n\n  private def greet(name: String): Future[String] = Future.value(s"Hello, $name!")\n}\n')))}u.isMDXComponent=!0}}]);