"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2542:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"ref",title:"Ref"},o=void 0,l={unversionedId:"datatypes/concurrency/ref",id:"version-1.x/datatypes/concurrency/ref",title:"Ref",description:"Ref[A] models a mutable reference to a value of type A in which we can store immutable data. The two basic operations are set, which fills the Ref with a new value, and get, which retrieves its current content. All operations on a Ref are atomic and thread-safe, providing a reliable foundation for synchronizing concurrent programs.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/ref.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/ref",permalink:"/version-1.x/datatypes/concurrency/ref",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/ref.md",tags:[],version:"1.x",frontMatter:{id:"ref",title:"Ref"},sidebar:"datatypes-sidebar",previous:{title:"ZRef",permalink:"/version-1.x/datatypes/concurrency/zref"},next:{title:"ZRefM",permalink:"/version-1.x/datatypes/concurrency/zrefm"}},p=[{value:"Concurrent Stateful Application",id:"concurrent-stateful-application",children:[],level:2},{value:"Operations",id:"operations",children:[{value:"make",id:"make",children:[],level:3},{value:"get",id:"get",children:[],level:3},{value:"set",id:"set",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"modify",id:"modify",children:[],level:3}],level:2},{value:"AtomicReference in Java",id:"atomicreference-in-java",children:[],level:2},{value:"Ref vs. State Monad",id:"ref-vs-state-monad",children:[{value:"Concurrency",id:"concurrency",children:[],level:3},{value:"Error Handling",id:"error-handling",children:[],level:3}],level:2},{value:"State Transformers",id:"state-transformers",children:[],level:2},{value:"Building more sophisticated concurrency primitives",id:"building-more-sophisticated-concurrency-primitives",children:[],level:2},{value:"Polymorphic <code>Ref</code>s",id:"polymorphic-refs",children:[],level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref[A]")," models a ",(0,r.kt)("strong",{parentName:"p"},"mutable reference")," to a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," in which we can store ",(0,r.kt)("strong",{parentName:"p"},"immutable")," data. The two basic operations are ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),", which fills the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," with a new value, and ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),", which retrieves its current content. All operations on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," are atomic and thread-safe, providing a reliable foundation for synchronizing concurrent programs."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is ZIO's analog to something like a State Monad in more Haskell-Oriented FP. We don't need State Monad in ZIO, because we have ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s. ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s allow us to get and set state, or update it."),(0,r.kt)("p",null,"When we write stateful applications, we need some mechanism to manage our state. We need a way to update the in-memory state in a functional way. So this is why we need ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Purely Functional and Referential Transparent"),(0,r.kt)("li",{parentName:"ul"},"Concurrent-Safe and Lock-free"),(0,r.kt)("li",{parentName:"ul"},"Update and Modify atomically")),(0,r.kt)("h2",{id:"concurrent-stateful-application"},"Concurrent Stateful Application"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Ref"),"s are building blocks for writing concurrent stateful applications"),". Without ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," or something equivalently, we can't do that. Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. So ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s can update the state in an atomic way, consistent and isolated from all other concurrent updates."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Ref"),"s are concurrent-safe"),". we can share the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," among many fibers. All of them can update ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," concurrently. We don't have to worry about race conditions. Even we have ten thousand fibers all updating the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," as long as they are using atomic update and modify functions, we will have zero race conditions. "),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," has lots of operations. Here we are going to introduce the most important and common ones. Also, note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," has many type parameters. Basically, all of these type parameters on ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," are useful for the more advanced operators. So as a not advanced user, don't worry about them."),(0,r.kt)("h3",{id:"make"},"make"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is never empty and it always contains something. We can create ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," by providing the initial value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),",  which is a constructor of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," data type. We should pass an ",(0,r.kt)("strong",{parentName:"p"},"immutable value")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to the constructor, and it returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO[Ref[A]]")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def make[A](a: A): UIO[Ref[A]]\n")),(0,r.kt)("p",null,"As we can see, the output is wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO"),", which means creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is effectful. Whenever we ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),", we are doing some effectful operation, this is why their output is wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO"),". It helps the API remain referential transparent."),(0,r.kt)("p",null,"Let's create some ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s from immutable values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val counterRef = Ref.make(0)\n// counterRef: UIO[Ref[Int]] = zio.ZIO$EffectTotal@4929494b\nval stringRef = Ref.make("initial") \n// stringRef: UIO[Ref[String]] = zio.ZIO$EffectTotal@7836e7cc \n\nsealed trait State\ncase object Active  extends State\ncase object Changed extends State\ncase object Closed  extends State\n\nval stateRef = Ref.make(Active) \n// stateRef: UIO[Ref[Active.type]] = zio.ZIO$EffectTotal@7cbfde91\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Warning")),":  "),(0,r.kt)("p",{parentName:"blockquote"},"The big mistake to creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is trying to store mutable data inside it. It doesn't work. The only way to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is to store ",(0,r.kt)("strong",{parentName:"p"},"immutable data")," inside it, otherwise, it does not provide us atomic guarantees, and we can have collisions and race conditions. ")),(0,r.kt)("p",null,"As we mentioned above, we shouldn't create ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," from a mutable variable. The following snippet compiles, but it leads us to race conditions due to improper use of ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// Compiles but don't work properly\nvar init = 0\n// init: Int = 0\nval counterRef = Ref.make(init)\n// counterRef: UIO[Ref[Int]] = zio.ZIO$EffectTotal@591a1eda\n")),(0,r.kt)("p",null,"So we should change the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," to be immutable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val init = 0\n// init: Int = 0\nval counterRef = Ref.make(init)\n// counterRef: UIO[Ref[Int]] = zio.ZIO$EffectTotal@3e3d36a1\n")),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method returns the current value of the reference. Its return type is ",(0,r.kt)("inlineCode",{parentName:"p"},"IO[EB, B]"),". Which ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," is the value type of returning effect and in the failure case, ",(0,r.kt)("inlineCode",{parentName:"p"},"EB")," is the error type of that effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def get: IO[EB, B]\n")),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," are effectful, we can chain them together with flatMap. In the following example, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"initial")," value, and then we acquire the current state with the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Ref.make("initial")\n   .flatMap(_.get)\n   .flatMap(current => putStrLn(s"current value of ref: $current"))\n')),(0,r.kt)("p",null,"We can use syntactic sugar representation of flatMap series with for-comprehension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  ref   <- Ref.make("initial")\n  value <- ref.get\n} yield assert(value == "initial")\n')),(0,r.kt)("p",null,"Note that, there is no way to access the shared state outside the monadic operations."),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," method atomically writes a new value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  ref   <- Ref.make("initial")\n  _     <- ref.set("update")\n  value <- ref.get\n} yield assert(value == "update")\n')),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", we can atomically update the state of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," with a given ",(0,r.kt)("strong",{parentName:"p"},"pure")," function. A function that we pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," needs to be a pure function, it needs to be deterministic and free of side effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def update(f: A => A): IO[E, Unit]\n")),(0,r.kt)("p",null,"Assume we have a counter, we can increase its value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val counterInitial = 0\nfor {\n  counterRef <- Ref.make(counterInitial)\n  _          <- counterRef.update(_ + 1)\n  value <- counterRef.get\n} yield assert(value == 1)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note")),":  "),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," is not the composition of ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),", this composition is not concurrently safe. So whenever we need to update our state, we should not compose ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," to manage our state in a concurrent environment. Instead, we should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," operation which modifies its ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," atomically. ")),(0,r.kt)("p",null,"The following snippet is not concurrent safe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Unsafe State Management\nobject UnsafeCountRequests extends zio.App {\n  import zio.console._\n\n  def request(counter: Ref[Int]) = for {\n    current <- counter.get\n    _ <- counter.set(current + 1)\n  } yield ()\n\n  private val initial = 0\n  private val program =\n    for {\n      ref <- Ref.make(initial)\n      _ <- request(ref) zipPar request(ref)\n      rn <- ref.get\n      _ <- putStrLn(s"total requests performed: $rn")\n    } yield ()\n\n  override def run(args: List[String]) = program.exitCode\n}\n')),(0,r.kt)("p",null,"The above snippet doesn't behave deterministically. This program sometimes print 2 and sometime print 1. So let's fix that issue by using ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," which behaves atomically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Unsafe State Management\nobject CountRequests extends zio.App {\n  import zio.console._\n\n  def request(counter: Ref[Int]): ZIO[Console, Nothing, Unit] = {\n    for {\n      _ <- counter.update(_ + 1)\n      reqNumber <- counter.get\n      _ <- putStrLn(s"request number: $reqNumber").orDie\n    } yield ()\n  }\n\n  private val initial = 0\n  private val program =\n    for {\n      ref <- Ref.make(initial)\n      _ <- request(ref) zipPar request(ref)\n      rn <- ref.get\n      _ <- putStrLn(s"total requests performed: $rn").orDie\n    } yield ()\n\n  override def run(args: List[String]) = program.exitCode\n}\n')),(0,r.kt)("p",null,"Here is another use case of ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," to write ",(0,r.kt)("inlineCode",{parentName:"p"},"repeat")," combinator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def repeat[E, A](n: Int)(io: IO[E, A]): IO[E, Unit] =\n  Ref.make(0).flatMap { iRef =>\n    def loop: IO[E, Unit] = iRef.get.flatMap { i =>\n      if (i < n)\n        io *> iRef.update(_ + 1) *> loop\n      else\n        IO.unit\n    }\n    loop\n  }\n")),(0,r.kt)("h3",{id:"modify"},"modify"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modify")," is a more powerful version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),". It atomically modifies its ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," with the given function and, also computes a return value. The function that we pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," needs to be a pure function; it needs to be deterministic and free of side effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def modify[B](f: A => (B, A)): IO[E, B]\n")),(0,r.kt)("p",null,"Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"CountRequest")," example. What if we want to log the number of each request, inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," function? Let's see what happen if we write that function with the composition of ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Unsafe in Concurrent Environment\ndef request(counter: Ref[Int]) = {\n  for {\n    _  <- counter.update(_ + 1)\n    rn <- counter.get\n    _  <- putStrLn(s"request number received: $rn")\n  } yield ()\n}\n')),(0,r.kt)("p",null,"What happens if between running the update and get, another update in another fiber performed? This function doesn't perform in a deterministic fashion in concurrent environments. So we need a way to perform ",(0,r.kt)("strong",{parentName:"p"},"get and set and get")," atomically. This is why we need the ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," method. Let's fix the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," function to do that atomically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Safe in Concurrent Environment\ndef request(counter: Ref[Int]) = {\n  for {\n    rn <- counter.modify(c => (c + 1, c + 1))\n    _  <- putStrLn(s"request number received: $rn")\n  } yield ()\n}\n')),(0,r.kt)("h2",{id:"atomicreference-in-java"},"AtomicReference in Java"),(0,r.kt)("p",null,"For Java programmers, we can think of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," as an AtomicReference. Java has a ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.atomic")," package and that package contains ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicReference"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicLong"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicBoolean")," and so forth. We can think of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," as being an ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicReference"),". It has roughly the same power, the same guarantees, and the same limitations. It packages it up in a higher-level context and of course, makes it ZIO friendly. "),(0,r.kt)("h2",{id:"ref-vs-state-monad"},"Ref vs. State Monad"),(0,r.kt)("p",null,"Basically ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," allows us to have all the power of State Monad inside ZIO. State Monad lacks two important features that we use in real-life application development:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Concurrency Support"),(0,r.kt)("li",{parentName:"ol"},"Error Handling")),(0,r.kt)("h3",{id:"concurrency"},"Concurrency"),(0,r.kt)("p",null,"State Monad is its effect system that only includes state. It allows us to do pure stateful computations. We can only get, set and update related computations to managing the state. State Monad updates its state with series of stateful computations sequentially, but ",(0,r.kt)("strong",{parentName:"p"},"we can't use the State Monad to do async or concurrent computations"),". But ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s have great support on concurrent and async programming."),(0,r.kt)("h3",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"In real-life applications, we need error handling. In most real-life stateful applications, we will involve some database IO and API calls and or some concurrent and sync stuff that it can fail in different ways along the path of execution. So besides the state management, we need a way to do error handling. The State Monad doesn't have the ability to model error management. "),(0,r.kt)("p",null,"We can combine State Monad and Either Monad with StateT monad transformer, but it imposes massive performance overhead. It doesn't buy us anything that we can't do with a Ref. So it is an anti-pattern. In the ZIO model, errors are encoded in effects and Ref utilizes that. So besides state management, we have the ability to error-handling without any further work."),(0,r.kt)("h2",{id:"state-transformers"},"State Transformers"),(0,r.kt)("p",null,"Those who live on the dark side of mutation sometimes have it easy; they can add state everywhere like it's Christmas. Behold:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'var idCounter = 0\ndef freshVar: String = {\n  idCounter += 1\n  s"var${idCounter}"\n}\nval v1 = freshVar\nval v2 = freshVar\nval v3 = freshVar\n')),(0,r.kt)("p",null,"As functional programmers, we know better and have captured state mutation in the form of functions of type ",(0,r.kt)("inlineCode",{parentName:"p"},"S => (A, S)"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," provides such an encoding, with ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," being the type of the value, and ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," embodying the state mutation function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Ref.make(0).flatMap { idCounter =>\n  def freshVar: UIO[String] =\n    idCounter.modify(cpt => (s"var${cpt + 1}", cpt + 1))\n\n  for {\n    v1 <- freshVar\n    v2 <- freshVar\n    v3 <- freshVar\n  } yield ()\n}\n')),(0,r.kt)("h2",{id:"building-more-sophisticated-concurrency-primitives"},"Building more sophisticated concurrency primitives"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," is low-level enough that it can serve as the foundation for other concurrency data types."),(0,r.kt)("p",null,"Semaphores are a classic abstract data type for controlling access to shared resources. They are defined as a triple S = (v, P, V) where v is the number of units of the resource that are currently available, and P and V are operations that respectively decrement and increment v; P will only complete when v is non-negative and must wait if it isn't."),(0,r.kt)("p",null,"Well, with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),"s, that's easy to do! The only difficulty is in ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),", where we must fail and retry when either ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," is negative or its value has changed between the moment we read it and the moment we try to update it. A naive implementation could look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait S {\n  def P: UIO[Unit]\n  def V: UIO[Unit]\n}\n\nobject S {\n  def apply(v: Long): UIO[S] =\n    Ref.make(v).map { vref =>\n      new S {\n        def V = vref.update(_ + 1).unit\n\n        def P = (vref.get.flatMap { v =>\n          if (v < 0)\n            IO.fail(())\n          else\n            vref.modify(v0 => if (v0 == v) (true, v - 1) else (false, v)).flatMap {\n              case false => IO.fail(())\n              case true  => IO.unit\n            }\n        } <> P).unit\n      }\n    }\n}\n")),(0,r.kt)("p",null,"Let's rock these crocodile boots we found the other day at the market and test our semaphore at the night club, yee-haw:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.duration.Duration\nimport zio.clock._\nimport zio.console._\nimport zio.random._\n\nval party = for {\n  dancefloor <- S(10)\n  dancers <- ZIO.foreachPar(1 to 100) { i =>\n    dancefloor.P *> nextDouble.map(d => Duration.fromNanos((d * 1000000).round)).flatMap { d =>\n      putStrLn(s"${i} checking my boots") *> sleep(d) *> putStrLn(s"${i} dancing like it\'s 99")\n    } *> dancefloor.V\n  }\n} yield ()\n')),(0,r.kt)("p",null,"It goes without saying you should take a look at ZIO's own ",(0,r.kt)("inlineCode",{parentName:"p"},"Semaphore"),", it does all this and more without wasting all those CPU cycles while waiting."),(0,r.kt)("h2",{id:"polymorphic-refs"},"Polymorphic ",(0,r.kt)("inlineCode",{parentName:"h2"},"Ref"),"s"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ref[A]")," is actually a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef[Nothing, Nothing, A, A]"),". The type signature of ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZRef[+EA, +EB, -A, +B]\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," is a polymorphic, purely functional description of a mutable reference. The fundamental operations of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," takes a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and sets the reference to a new value, potentially failing with an error of type ",(0,r.kt)("inlineCode",{parentName:"p"},"EA"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," gets the current value of the reference and returns a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", potentially failing with an error of type ",(0,r.kt)("inlineCode",{parentName:"p"},"EB"),"."),(0,r.kt)("p",null,"When the error and value types of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," are unified, that is, it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef[E, E, A, A]"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," also supports atomic ",(0,r.kt)("inlineCode",{parentName:"p"},"modify")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," operations as discussed above."),(0,r.kt)("p",null,"A simple use case is passing out read-only or write-only views of a reference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  ref       <- Ref.make(false)\n  readOnly  = ref.readOnly\n  writeOnly = ref.writeOnly\n  _         <- writeOnly.set(true)\n  value     <- readOnly.get\n} yield value\n")))}d.isMDXComponent=!0}}]);