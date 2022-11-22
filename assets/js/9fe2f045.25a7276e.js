"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},108:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={id:"jvm",title:"JVM Metrics"},l=void 0,o={unversionedId:"datatypes/metrics/jvm",id:"datatypes/metrics/jvm",title:"JVM Metrics",description:"ZIO has built-in support for collecting JVM Metrics. These metrics are a direct port of the JVM metrics provided by the Prometheus Java Hotspot library and compatible with that library.",source:"@site/docs/datatypes/metrics/jvm.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/jvm",permalink:"/next/datatypes/metrics/jvm",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/jvm.md",tags:[],version:"current",frontMatter:{id:"jvm",title:"JVM Metrics"},sidebar:"datatypes-sidebar",previous:{title:"MetricLabel",permalink:"/next/datatypes/metrics/metriclabel"},next:{title:"Introduction",permalink:"/next/datatypes/test/"}},m=[{value:"Collecting Metrics",id:"collecting-metrics",children:[{value:"Collecting Inside a ZIO Application",id:"collecting-inside-a-zio-application",children:[],level:3},{value:"Collecting as a Sidecar to a ZIO Application",id:"collecting-as-a-sidecar-to-a-zio-application",children:[],level:3}],level:2}],s={toc:m};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO has built-in support for collecting JVM Metrics. These metrics are a direct port of the JVM metrics provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/client_java/tree/master/simpleclient_hotspot"},"Prometheus Java Hotspot library")," and compatible with that library."),(0,i.kt)("p",null,"There are five categories of JVM metrics. Let's look at them one by one:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Buffer Pools",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_buffer_pool_used_bytes")," \u2014 Used bytes of a given JVM buffer pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_buffer_pool_capacity_bytes")," \u2014 Bytes capacity of a given JVM buffer pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_buffer_pool_used_buffers")," \u2014 Used buffers of a given JVM buffer pool."))),(0,i.kt)("li",{parentName:"ul"},"Class Loading",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_classes_loaded")," \u2014 The number of classes that are currently loaded in the JVM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_classes_loaded_total")," \u2014 The total number of classes that have been loaded since the JVM has started execution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_classes_unloaded_total")," \u2014 The total number of classes that have been unloaded since the JVM has started\nexecution"))),(0,i.kt)("li",{parentName:"ul"},"Garbage Collector",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_gc_collection_seconds_sum")," \u2014 Time spent in a given JVM garbage collector in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_gc_collection_seconds_count")))),(0,i.kt)("li",{parentName:"ul"},"Memory Allocation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_pool_allocated_bytes_total")," \u2014 Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously."))),(0,i.kt)("li",{parentName:"ul"},"Memory Pools",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_bytes_used")," \u2014 Used bytes of a given JVM memory area."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_bytes_committed")," \u2014 Committed (bytes) of a given JVM memory area."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_bytes_max")," \u2014 Max (bytes) of a given JVM memory area."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_bytes_init")," \u2014 Initial bytes of a given JVM memory area."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_pool_bytes_used")," \u2014 Used bytes of a given JVM memory pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_pool_bytes_committed")," \u2014 Committed bytes of a given JVM memory pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_pool_bytes_max")," \u2014 Max bytes of a given JVM memory pool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_memory_pool_bytes_init")," \u2014 Initial bytes of a given JVM memory pool."))),(0,i.kt)("li",{parentName:"ul"},"Standard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_cpu_seconds_total")," \u2014 Total user and system CPU time spent in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_start_time_seconds")," \u2014 Start time of the process since unix epoch in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_open_fds")," \u2014 Number of open file descriptors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_max_fds")," \u2014 Maximum number of open file descriptors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_virtual_memory_bytes")," \u2014 Virtual memory size in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_resident_memory_bytes")," \u2014 Resident memory size in bytes."))),(0,i.kt)("li",{parentName:"ul"},"Thread",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_current")," \u2014 Current thread count of a JVM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_daemon")," \u2014 Daemon thread count of a JVM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_peak")," \u2014 Peak thread count of a JVM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_started_total")," \u2014 Started thread count of a JVM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_deadlocked")," \u2014 Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_deadlocked_monitor")," \u2014 Cycles of JVM-threads that are in deadlock waiting to acquire object monitors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_threads_state")," \u2014 Current count of threads by state."))),(0,i.kt)("li",{parentName:"ul"},"Version Info",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jvm_info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," \u2014 java.runtime.version "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vendor")," \u2014 java.vm.vendor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"runtime")," \u2014 java.runtime.name")))))),(0,i.kt)("h2",{id:"collecting-metrics"},"Collecting Metrics"),(0,i.kt)("h3",{id:"collecting-inside-a-zio-application"},"Collecting Inside a ZIO Application"),(0,i.kt)("p",null,"JVM Metrics are collection of the following ZIO services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BufferPools"),(0,i.kt)("li",{parentName:"ul"},"ClassLoading"),(0,i.kt)("li",{parentName:"ul"},"GarbageCollector"),(0,i.kt)("li",{parentName:"ul"},"MemoryAllocation"),(0,i.kt)("li",{parentName:"ul"},"MemoryPools"),(0,i.kt)("li",{parentName:"ul"},"Standard"),(0,i.kt)("li",{parentName:"ul"},"Thread"),(0,i.kt)("li",{parentName:"ul"},"VersionInfo")),(0,i.kt)("p",null,"We can access any of them from the environment and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"collectMetrics")," operation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"This method of collecting metrics is not idiomatic. It's for educational purposes or rare cases where we need to gather metrics within our main logic. In most cases, ",(0,i.kt)("a",{parentName:"p",href:"#collecting-as-a-sidecar-to-a-zio-application"},"we collect metrics without involving the core application logic"),"."),(0,i.kt)("h3",{id:"collecting-as-a-sidecar-to-a-zio-application"},"Collecting as a Sidecar to a ZIO Application"),(0,i.kt)("p",null,"ZIO JVM metrics have built-in applications that collect the JVM metrics. They can be composed with other ZIO applications as a ",(0,i.kt)("em",{parentName:"p"},"sidecar"),". By doing so, we are able to collect JVM metrics without modifying our main ZIO application. They will be executed as a daemon alongside the main app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}p.isMDXComponent=!0}}]);