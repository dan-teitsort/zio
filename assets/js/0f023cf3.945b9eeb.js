"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9263:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"stm",slug:"stm.md",title:"STM"},i=void 0,s={unversionedId:"datatypes/stm/stm",id:"datatypes/stm/stm",title:"STM",description:"An STM[E, A] represents an effect that can be performed transactionally resulting in a failure E or a success A. There is a more powerful variant ZSTM[R, E, A] which supports an environment type R like ZIO[R, E, A].",source:"@site/docs/datatypes/stm/stm.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/stm.md",permalink:"/next/datatypes/stm/stm.md",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/stm/stm.md",tags:[],version:"current",frontMatter:{id:"stm",slug:"stm.md",title:"STM"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/stm/"},next:{title:"TArray",permalink:"/next/datatypes/stm/tarray"}},l=[{value:"Errors",id:"errors",children:[],level:2},{value:"<code>retry</code>",id:"retry",children:[],level:2},{value:"Composing alternatives",id:"composing-alternatives",children:[],level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"STM[E, A]")," represents an effect that can be performed transactionally resulting in a failure ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," or a success ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),". There is a more powerful variant ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSTM[R, E, A]")," which supports an environment type ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSTM")," variant) data-type is ",(0,r.kt)("em",{parentName:"p"},"not")," as powerful as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," datatype as it does not allow you to perform arbitrary effects. These are because actions inside STM actions can be executed an arbitrary amount of times (and rolled-back as well). Only STM actions and pure computation may be performed inside a memory transaction. "),(0,r.kt)("p",null,"No STM actions can be performed outside a transaction, so you cannot accidentally read or write a transactional data structure outside the protection of ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.atomically")," (or without explicitly ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"ting the transaction). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\ndef transferMoney(from: TRef[Long], to: TRef[Long], amount: Long): STM[String, Long] =\n  for {\n    senderBal <- from.get\n    _         <- if (senderBal < amount) STM.fail("Not enough money")\n                 else STM.unit\n    _         <- from.update(existing => existing - amount)\n    _         <- to.update(existing => existing + amount)\n    recvBal   <- to.get\n  } yield recvBal\n\nval program: IO[String, Long] = for {\n  sndAcc  <- STM.atomically(TRef.make(1000L))\n  rcvAcc  <- STM.atomically(TRef.make(0L))\n  recvAmt <- STM.atomically(transferMoney(sndAcc, rcvAcc, 500L))\n} yield recvAmt\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transferMoney")," describes an atomic transfer process between a sender and a receiver. The transaction will fail if the sender does not have enough of money in their account. This means that individual accounts will be debited and credited atomically. If the transaction fails in the middle, the entire process will be rolled back, and it will appear that  nothing has happened."),(0,r.kt)("p",null,"Here, we see that ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," effects compose using a for-comprehension and that wrapping an ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," effect with ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.atomically")," (or calling ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," on any STM effect) turns the ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," effect into a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect which can be executed. "),(0,r.kt)("p",null,"STM transactions compose sequentially. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.atomically")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"), the programmer identifies atomic transaction in the sense that the entire set of operations within ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.atomically")," appears to take place indivisibly."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"STM")," supports errors just like ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," via the error channel. In ",(0,r.kt)("inlineCode",{parentName:"p"},"transferMoney"),", we saw an example of an error (",(0,r.kt)("inlineCode",{parentName:"p"},"STM.fail"),"). "),(0,r.kt)("p",null,"Errors in ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," have abort semantics: if an atomic transaction encounters an error, the transaction is rolled back with no effect."),(0,r.kt)("h2",{id:"retry"},(0,r.kt)("inlineCode",{parentName:"h2"},"retry")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"STM.retry")," is central to making transactions composable when they may block. For example, if we wanted to ensure that the money transfer took place when the sender had enough of money (instead of failing right away), we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.retry")," instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def transferMoneyNoMatterWhat(from: TRef[Long], to: TRef[Long], amount: Long): STM[String, Long] =\n  for {\n    senderBal <- from.get\n    _         <- if (senderBal < amount) STM.retry else STM.unit\n    _         <- from.update(existing => existing - amount)\n    _         <- to.update(existing => existing + amount)\n    recvBal   <- to.get\n  } yield recvBal\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"STM.retry")," will abort and retry the entire transaction until it succeeds (instead of failing like the previous example)."),(0,r.kt)("p",null,"Note that the transaction will only be retried when one of the underlying transactional data structures have been changed."),(0,r.kt)("p",null,"There are many other variants of the ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.retry")," combinator like ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.check")," so rather than writing ",(0,r.kt)("inlineCode",{parentName:"p"},"if (senderBal < amount) STM.retry else STM.unit"),", you can replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"STM.check(senderBal < amount)"),"."),(0,r.kt)("h2",{id:"composing-alternatives"},"Composing alternatives"),(0,r.kt)("p",null,"STM transactions compose sequentially so that both STM effects are executed. However, STM transactions can also compose transactions as alternatives so that only one STM effect is executed by making use of ",(0,r.kt)("inlineCode",{parentName:"p"},"orTry")," on STM effects. "),(0,r.kt)("p",null,"Provided we have two STM effects ",(0,r.kt)("inlineCode",{parentName:"p"},"sA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sB"),", you can express that you would like to compose the two using ",(0,r.kt)("inlineCode",{parentName:"p"},"sA orTry sB"),". The transaction would first attempt to run ",(0,r.kt)("inlineCode",{parentName:"p"},"sA")," and if it retries then ",(0,r.kt)("inlineCode",{parentName:"p"},"sA")," is abandoned with no effect and then ",(0,r.kt)("inlineCode",{parentName:"p"},"sB")," runs. Now if ",(0,r.kt)("inlineCode",{parentName:"p"},"sB")," also retries then the entire call retries. However, it waits for the transactional data structures to change that are involved in either ",(0,r.kt)("inlineCode",{parentName:"p"},"sA")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sB"),". "),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"orTry")," is an elegant technique that can be used to determine whether or not an STM transaction needs to block. For example, we can take ",(0,r.kt)("inlineCode",{parentName:"p"},"transferMoneyNoMatterWhat")," and turn it into an STM transaction that will fail immediately if the sender does not have enough of money instead of retrying by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def transferMoneyFailFast(from: TRef[Long], to: TRef[Long], amount: Long): STM[String, Long] =\n    transferMoneyNoMatterWhat(from, to, amount) orTry STM.fail("Sender does not have enough of money")\n')),(0,r.kt)("p",null,"This will cause the transfer to fail immediately if the sender does not have money because of the semantics of ",(0,r.kt)("inlineCode",{parentName:"p"},"orTry"),"."))}c.isMDXComponent=!0}}]);