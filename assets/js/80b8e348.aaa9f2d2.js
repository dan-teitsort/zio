"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4918:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"zio-http",title:"ZIO HTTP"},a=void 0,l={unversionedId:"resources/ecosystem/community/zio-http",id:"resources/ecosystem/community/zio-http",title:"ZIO HTTP",description:"ZIO HTTP is a scala library to write HTTP applications.",source:"@site/docs/resources/ecosystem/community/zio-http.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-http",permalink:"/next/resources/ecosystem/community/zio-http",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-http.md",tags:[],version:"current",frontMatter:{id:"zio-http",title:"ZIO HTTP"},sidebar:"resources-sidebar",previous:{title:"ZIO gRPC",permalink:"/next/resources/ecosystem/community/zio-grpc"},next:{title:"ZIO K8s",permalink:"/next/resources/ecosystem/community/zio-k8s"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/dream11/zio-http"},"ZIO HTTP")," is a scala library to write HTTP applications."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ZIO HTTP is a Scala library for building HTTP applications. It is powered by ZIO and netty and aims at being the defacto solution for writing, highly scalable, and performant web applications using idiomatic scala."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following lines in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.d11" %% "zhttp"      % "1.0.0.0-RC13"\nlibraryDependencies += "io.d11" %% "zhttp-test" % "1.0.0.0-RC13" % Test\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zhttp.service.Server\nimport zio._\n\nobject ZIOHTTPExample extends zio.App {\n\n  // Create HTTP route\n  val app: HttpApp[Any, Nothing] = HttpApp.collect {\n    case Method.GET -> Root / "text" => Response.text("Hello World!")\n    case Method.GET -> Root / "json" => Response.jsonString("""{"greetings": "Hello World!"}""")\n  }\n\n  // Run it like any simple app\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app.silent).exitCode\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=dVggks9_1Qk&t=257s"},"ZIO World - ZIO HTTP")," by Tushar Mathur (March 2020) \u2014 At ZIO World Tushar Mathur unveiled a new open-source library 'ZIO HTTP' that gives you better performance than Vert.x, but with pure functional Scala and native ZIO integration.")))}p.isMDXComponent=!0}}]);