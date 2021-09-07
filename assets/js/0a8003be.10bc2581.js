"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98],{82883:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={},p="Profiling",u={unversionedId:"profiling",id:"profiling",isDocsHomePage:!1,title:"Profiling",description:"Profiling is disabled by default.",source:"@site/external/wasp/documentation/docs/profiling.md",sourceDirName:".",slug:"/profiling",permalink:"/wasp/profiling",tags:[],version:"current",frontMatter:{}},s=[{value:"Notes",id:"notes",children:[]}],c={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"profiling"},"Profiling"),(0,a.kt)("p",null,"Profiling is disabled by default."),(0,a.kt)("p",null,"Running a node with ",(0,a.kt)("inlineCode",{parentName:"p"},"profiling.enabled = true")," (in config.json or via command line) will spawn a pprof server running on ",(0,a.kt)("inlineCode",{parentName:"p"},"profiling.bindAddress")," (",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:6060")," by default)."),(0,a.kt)("p",null,"By accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<profiling.bindAddress>/debug/pprof/")," there are some profiles available, but the best way to visualize this data is using ",(0,a.kt)("inlineCode",{parentName:"p"},"go tool"),". (requires ",(0,a.kt)("inlineCode",{parentName:"p"},"graphviz")," installed)"),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go tool pprof -http=:8080 http://localhost:6060/debug/pprof/<heap, profile?seconds=30, block, mutex>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O trace.out http://localhost:6060/debug/pprof/trace?seconds=5\ngo tool trace trace.out\n")),(0,a.kt)("p",null,"(for the above we need to manually download the trace profile from the pprof page, not sure if there is an automatic way) hint: use ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," to see keyboard shortcuts when on the trace page."),(0,a.kt)("p",null,"Upon node shutdown there will be some profile files available on ",(0,a.kt)("inlineCode",{parentName:"p"},"./profiles"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"block.pprof"),(0,a.kt)("li",{parentName:"ul"},"cpu.pprof"),(0,a.kt)("li",{parentName:"ul"},"goroutine.pprof"),(0,a.kt)("li",{parentName:"ul"},"mem.pprof"),(0,a.kt)("li",{parentName:"ul"},"mutex.pprof"),(0,a.kt)("li",{parentName:"ul"},"thread.pprof"),(0,a.kt)("li",{parentName:"ul"},"trace.pprof")),(0,a.kt)("p",null,"These profiles can be explored in the same way as the pprof server resources (using ",(0,a.kt)("inlineCode",{parentName:"p"},"go tool"),")."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Profiling has a negative impact on performance. Use when in need."),(0,a.kt)("li",{parentName:"ul"},"Profiles may have no content if the node is not shutdown gracefully. (to use in tests, the test should fails via assertions, not via ",(0,a.kt)("inlineCode",{parentName:"li"},"-timeout")," parameter)")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);