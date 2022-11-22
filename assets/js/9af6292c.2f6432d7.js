"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4800],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,v=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return n?t.createElement(v,a(a({ref:r},u),{},{components:n})):t.createElement(v,a({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2111:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(7462),i=(n(7294),n(3905));const o={id:"supervisor",title:"Supervisor"},a=void 0,s={unversionedId:"datatypes/misc/supervisor",id:"version-1.x/datatypes/misc/supervisor",title:"Supervisor",description:"A Supervisor[A] is allowed to supervise the launching and termination of fibers, producing some visible value of type A from the supervision.",source:"@site/versioned_docs/version-1.x/datatypes/misc/supervisor.md",sourceDirName:"datatypes/misc",slug:"/datatypes/misc/supervisor",permalink:"/version-1.x/datatypes/misc/supervisor",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/misc/supervisor.md",tags:[],version:"1.x",frontMatter:{id:"supervisor",title:"Supervisor"},sidebar:"datatypes-sidebar",previous:{title:"Schedule",permalink:"/version-1.x/datatypes/misc/schedule"}},l=[{value:"Creation",id:"creation",children:[{value:"track",id:"track",children:[],level:3},{value:"fibersIn",id:"fibersin",children:[],level:3}],level:2},{value:"Supervising",id:"supervising",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:l};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Supervisor[A]")," is allowed to supervise the launching and termination of fibers, producing some visible value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," from the supervision."),(0,i.kt)("h2",{id:"creation"},"Creation"),(0,i.kt)("h3",{id:"track"},"track"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," creates a new supervisor that tracks children in a set. It takes a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"weak")," parameter as input, which indicates whether track children in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Weakset")," or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val supervisor = Supervisor.track(true)\n// supervisor: zio.package.UIO[Supervisor[zio.Chunk[zio.Fiber.Runtime[Any, Any]]]] = zio.ZIO$EffectTotal@4606558\n")),(0,i.kt)("p",null,"We can periodically, report the status of the fibers of our program with the help of the Supervisor."),(0,i.kt)("h3",{id:"fibersin"},"fibersIn"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fibersIn")," creates a new supervisor with an initial sorted set of fibers."),(0,i.kt)("p",null,"In the following example we are creating a new supervisor from an initial set of fibers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def fiberListSupervisor = for { \n  ref <- Ref.make(SortedSet.from(fibers))\n  s <- Supervisor.fibersIn(ref)\n} yield (s)\n")),(0,i.kt)("h2",{id:"supervising"},"Supervising"),(0,i.kt)("p",null,"Whenever we need to supervise a ZIO effect, we can call ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#supervised")," function, ",(0,i.kt)("inlineCode",{parentName:"p"},"supervised")," takes a supervisor and return another effect. The behavior of children fibers is reported to the provided supervisor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val supervised = supervisor.flatMap(s => fib(20).supervised(s))\n")),(0,i.kt)("p",null,"Now we can access all information of children fibers through the supervisor."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the following example we are going to periodically monitor the number of fibers throughout our application life cycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'object SupervisorExample extends zio.App {\n  import zio.duration._\n\n  val program = for {\n    supervisor <- Supervisor.track(true)\n    fiber <- fib(20).supervised(supervisor).fork\n    policy = Schedule\n      .spaced(500.milliseconds)\n      .whileInputM[Any, Unit](_ => fiber.status.map(x => !x.isDone))\n    logger <- monitorFibers(supervisor)\n      .repeat(policy).fork\n    _ <- logger.join\n    result <- fiber.join\n    _ <- putStrLn(s"fibonacci result: $result")\n  } yield ()\n\n  def monitorFibers(supervisor: Supervisor[Chunk[Fiber.Runtime[Any, Any]]]) = for {\n    length <- supervisor.value.map(_.length)\n    _ <- putStrLn(s"number of fibers: $length")\n  } yield ()\n\n  def fib(n: Int): ZIO[Clock, Nothing, Int] =\n    if (n <= 1) {\n      ZIO.succeed(1)\n    } else {\n      for {\n        _ <- sleep(500.milliseconds)\n        fiber1 <- fib(n - 2).fork\n        fiber2 <- fib(n - 1).fork\n        v2 <- fiber2.join\n        v1 <- fiber1.join\n      } yield v1 + v2\n    }\n\n  override def run(args: List[String]) = program.exitCode\n}\n')))}u.isMDXComponent=!0}}]);