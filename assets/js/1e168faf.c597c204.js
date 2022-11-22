"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2025:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"tref",title:"TRef"},o=void 0,l={unversionedId:"datatypes/stm/tref",id:"version-1.x/datatypes/stm/tref",title:"TRef",description:"A TRef[A] is a mutable reference to an immutable value, which can participate in transactions in STM. The mutable reference can be retrieved and set from within transactions, with strong guarantees for atomicity, consistency, and isolation from other transactions.",source:"@site/versioned_docs/version-1.x/datatypes/stm/tref.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tref",permalink:"/version-1.x/datatypes/stm/tref",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/tref.md",tags:[],version:"1.x",frontMatter:{id:"tref",title:"TRef"},sidebar:"datatypes-sidebar",previous:{title:"TMap",permalink:"/version-1.x/datatypes/stm/tmap"},next:{title:"TPriorityQueue",permalink:"/version-1.x/datatypes/stm/tpriorityqueue"}},s=[{value:"Create a TRef",id:"create-a-tref",children:[],level:2},{value:"Retrieve the value out of a TRef",id:"retrieve-the-value-out-of-a-tref",children:[],level:2},{value:"Set a value to a TRef",id:"set-a-value-to-a-tref",children:[],level:2},{value:"Update the value of the TRef",id:"update-the-value-of-the-tref",children:[],level:2},{value:"Modify the value of the TRef",id:"modify-the-value-of-the-tref",children:[],level:2},{value:"Example usage",id:"example-usage",children:[],level:2},{value:"ZTRef",id:"ztref",children:[],level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef[A]")," is a mutable reference to an immutable value, which can participate in transactions in STM. The mutable reference can be retrieved and set from within transactions, with strong guarantees for atomicity, consistency, and isolation from other transactions."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TRef")," provides the low-level machinery to create transactions from modifications of STM memory."),(0,r.kt)("h2",{id:"create-a-tref"},"Create a TRef"),(0,r.kt)("p",null,"Creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef")," inside a transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval createTRef: STM[Nothing, TRef[Int]] = TRef.make(10)\n")),(0,r.kt)("p",null,"Or creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef")," inside a transaction, and immediately committing the transaction, which allows you to store and pass along the reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval commitTRef: UIO[TRef[Int]] = TRef.makeCommit(10)\n")),(0,r.kt)("h2",{id:"retrieve-the-value-out-of-a-tref"},"Retrieve the value out of a TRef"),(0,r.kt)("p",null,"Retrieving the value in a single transaction: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval retrieveSingle: UIO[Int] = (for {\n  tRef <- TRef.make(10)\n  value <- tRef.get\n} yield value).commit\n")),(0,r.kt)("p",null,"Or on multiple transactional statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval retrieveMultiple: UIO[Int] = for {\n  tRef <- TRef.makeCommit(10)\n  value <- tRef.get.commit\n} yield value\n")),(0,r.kt)("h2",{id:"set-a-value-to-a-tref"},"Set a value to a TRef"),(0,r.kt)("p",null,"Setting the value overwrites the existing content of a reference."),(0,r.kt)("p",null,"Setting the value in a single transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval setSingle: UIO[Int] = (for {\n  tRef <- TRef.make(10)\n  _ <- tRef.set(20)\n  nValue <- tRef.get\n} yield nValue).commit\n")),(0,r.kt)("p",null,"Or on multiple transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval setMultiple: UIO[Int] = for {\n  tRef <- TRef.makeCommit(10)\n  nValue <- tRef.set(20).flatMap(_ => tRef.get).commit\n} yield nValue\n")),(0,r.kt)("h2",{id:"update-the-value-of-the-tref"},"Update the value of the TRef"),(0,r.kt)("p",null,"The update function ",(0,r.kt)("inlineCode",{parentName:"p"},"A => A")," allows computing a new value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef")," using the old value."),(0,r.kt)("p",null,"Updating the value in a single transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval updateSingle: UIO[Int] = (for {\n  tRef <- TRef.make(10)\n  nValue <- tRef.updateAndGet(_ + 20)\n} yield nValue).commit\n")),(0,r.kt)("p",null,"Or on multiple transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval updateMultiple: UIO[Int] = for {\n  tRef <- TRef.makeCommit(10)\n  nValue <- tRef.updateAndGet(_ + 20).commit\n} yield nValue\n")),(0,r.kt)("h2",{id:"modify-the-value-of-the-tref"},"Modify the value of the TRef"),(0,r.kt)("p",null,"The modify function ",(0,r.kt)("inlineCode",{parentName:"p"},"A => (B, A): B")," works similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", but allows extracting some information (the ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),") out of the update operation. "),(0,r.kt)("p",null,"Modify the value in a single transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval modifySingle: UIO[(String, Int)] = (for {\n  tRef <- TRef.make(10)\n  mValue <- tRef.modify(v => ("Zee-Oh", v + 10))\n  nValue <- tRef.get\n} yield (mValue, nValue)).commit\n')),(0,r.kt)("p",null,"Or on multiple transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval modifyMultiple: UIO[(String, Int)] = for {\n  tRef <- TRef.makeCommit(10)\n  tuple2 <- tRef.modify(v => ("Zee-Oh", v + 10)).zip(tRef.get).commit\n} yield tuple2\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Here is a scenario where we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef")," to hand-off a value between two ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber"),"s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\ndef transfer(tSender: TRef[Int],\n             tReceiver: TRef[Int],\n             amount: Int): UIO[Int] = {\n  STM.atomically {\n    for {\n      _ <- tSender.get.retryUntil(_ >= amount)\n      _ <- tSender.update(_ - amount)\n      nAmount <- tReceiver.updateAndGet(_ + amount)\n    } yield nAmount\n  }\n}\n\nval transferredMoney: UIO[String] = for {\n  tSender <- TRef.makeCommit(50)\n  tReceiver <- TRef.makeCommit(100)\n  _ <- transfer(tSender, tReceiver, 50).fork\n  _ <- tSender.get.retryUntil(_ == 0).commit\n  tuple2 <- tSender.get.zip(tReceiver.get).commit\n  (senderBalance, receiverBalance) = tuple2\n} yield s"sender: $senderBalance & receiver: $receiverBalance"\n')),(0,r.kt)("p",null,"In this example, we create and commit two transactional references for the sender and receiver to be able to extract their value.\nOn the following step, we create an atomic transactional that updates both accounts only when there is sufficient balance available in the sender account. In the end, we fork to run asynchronously.\nOn the running fiber, we suspend until the sender balance suffers changes, in this case, to reach ",(0,r.kt)("inlineCode",{parentName:"p"},"zero"),". Finally, we extract the new values out of the accounts and combine them in one result. "),(0,r.kt)("h2",{id:"ztref"},"ZTRef"),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref[A]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TRef[A]")," is actually a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZTRef[+EA, +EB, -A, +B]"),", a polymorphic, transactional reference and supports all the transformations that ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRef")," does. For more discussion regarding polymorphic references see the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/concurrency/ref"},(0,r.kt)("inlineCode",{parentName:"a"},"ZRef")),"."))}m.isMDXComponent=!0}}]);