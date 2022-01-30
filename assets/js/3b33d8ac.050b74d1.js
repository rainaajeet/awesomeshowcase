"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30585],{16655:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["create channel","read channel","write channel","example"]},c="Create Channel",s={unversionedId:"examples/create-channel",id:"examples/create-channel",title:"Create Channel",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",source:"@site/external/integration-services/documentation/docs/examples/create-channel.md",sourceDirName:"examples",slug:"/examples/create-channel",permalink:"/integration-services/examples/create-channel",editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/examples/create-channel.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["create channel","read channel","write channel","example"]},sidebar:"docs",previous:{title:"Trusted Authorities",permalink:"/integration-services/examples/trusted-authorities"},next:{title:"Authorize Channel",permalink:"/integration-services/examples/authorize-to-channel"}},p=[{value:"Create Channel",id:"create-channel-1",children:[],level:2},{value:"Write on a Channel",id:"write-on-a-channel",children:[],level:2},{value:"Read from a Channel",id:"read-from-a-channel",children:[],level:2}],h={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-channel"},"Create Channel"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/node/examples/5-CreateChannel.ts"},"example-5"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,i.kt)("a",{parentName:"p",href:"how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creates a channel."),(0,i.kt)("li",{parentName:"ol"},"Writes data on the channel."),(0,i.kt)("li",{parentName:"ol"},"Reads data from the channel")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-5\n")),(0,i.kt)("h2",{id:"create-channel-1"},"Create Channel"),(0,i.kt)("p",null,"You can create a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// The owner creates a channel where he/she want to publish data of type 'example-data'.\nconst { channelAddress } = await ownerClient.create({\n    topics: [{ type: 'example-data', source: 'data-creator' }]\n});\n")),(0,i.kt)("h2",{id:"write-on-a-channel"},"Write on a Channel"),(0,i.kt)("p",null,"You can write on a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await channel.write(channelAddress, {\n    type: 'log',\n    created: new Date().toISOString(),\n    payload: {\n        log: `This is log file ...`\n    }\n});\n")),(0,i.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,i.kt)("p",null,"You can read from a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const channelData = await channel.read(channelAddress);\nconsole.log('Read from channel:');\nchannelData.forEach((data) => {\n    console.log(data.log);\n});\n")))}u.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);