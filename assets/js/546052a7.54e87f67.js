"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),v=n,h=m["".concat(p,".").concat(v)]||m[v]||u[v]||r;return a?i.createElement(h,l(l({ref:t},c),{},{components:a})):i.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}v.displayName="MDXCreateElement"},492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const r={id:"communicating-with-avail",title:"Communicating With Avail Examples",sidebar_label:"Communicating With Avail",sidebar_position:1,description:"Examples of how to communicate with Avail",keywords:["docs","avail","examples"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/using-avail/communicating-with-avail"},l="Communicating With Avail",o={unversionedId:"using-avail/core-sdks-and-apis/communicating-with-avail",id:"using-avail/core-sdks-and-apis/communicating-with-avail",title:"Communicating With Avail Examples",description:"Examples of how to communicate with Avail",source:"@site/docs/using-avail/core-sdks-and-apis/communicating-with-avail.md",sourceDirName:"using-avail/core-sdks-and-apis",slug:"/using-avail/communicating-with-avail",permalink:"/using-avail/communicating-with-avail",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"communicating-with-avail",title:"Communicating With Avail Examples",sidebar_label:"Communicating With Avail",sidebar_position:1,description:"Examples of how to communicate with Avail",keywords:["docs","avail","examples"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/using-avail/communicating-with-avail"},sidebar:"defaultSidebar",previous:{title:"Smart Contract Rollups",permalink:"/using-avail/smart-contract-rollups"},next:{title:"Light client overview",permalink:"/using-avail/core-sdks-and-apis/avail-light-client-overview"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"communicating-with-avail"},"Communicating With Avail"),(0,n.kt)("p",null,"The API provides application developers the ability to query a node and interact with the Avail.\nHere you will find a list of examples in ",(0,n.kt)("inlineCode",{parentName:"p"},"Javascript/Typescript"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Rust")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Go")," that show\nthe basics of connecting to a local node, retrieving data from the node/chain and executing transactions on the chain."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For the following examples, you need to run a local node or update a configuration to match the running network.\nDetail instructions on how to run examples can be found in the Avail repository\nfor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/blob/develop/examples/ts/README.md"},"Typescript"),"\nfor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/blob/develop/examples/go/README.md"},"Go"),"\nfor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/blob/develop/avail-subxt/examples/README.md"},"Rust"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of Javascript/Typescript can be found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Avail"),"\ngithub ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/tree/develop/examples/ts"},"repository"),"\nand, there are also examples written in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/tree/develop/examples/go"},"Go"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/tree/develop/avail-subxt/examples"},"Rust"),"."),(0,n.kt)("p",null,"Some of the examples that show communication with Avail by submitting transactions and rpc calls:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Submitting a blob of data\ntransaction ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/data_submit.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Dispatching data root\ntransaction ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/dispatch_data_root.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Creating application key transaction ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/app_id.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Creating a simple transfer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/transfer.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Query data proof ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof_data.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Query proof ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Query app data ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/query_app_data.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Listening to a new\nblocks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/listen_new_blocks.ts"},"example"),"."),(0,n.kt)("li",{parentName:"ul"},"Getting chain and node\ninformation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/tree/develop/examples/ts/src/connect.ts"},"example"),".")))}u.isMDXComponent=!0}}]);