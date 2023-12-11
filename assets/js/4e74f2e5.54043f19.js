"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[5787],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(o),c=a,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=o[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9541:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=o(7462),a=(o(7294),o(3905));const i={id:"nomination-pools",title:"How to Create Nomination Pools on Avail",sidebar_label:"Nomination Pools",description:"Learn how to create and join nomination pools on the Goldberg testnet.",keywords:["docs","avail","explorer","nomination","nominate","pools","stake"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,l={unversionedId:"about/nomination-pools",id:"about/nomination-pools",title:"How to Create Nomination Pools on Avail",description:"Learn how to create and join nomination pools on the Goldberg testnet.",source:"@site/docs/about/nomination-pools.md",sourceDirName:"about",slug:"/about/nomination-pools",permalink:"/about/nomination-pools",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/nomination-pools.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1701382248,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{id:"nomination-pools",title:"How to Create Nomination Pools on Avail",sidebar_label:"Nomination Pools",description:"Learn how to create and join nomination pools on the Goldberg testnet.",keywords:["docs","avail","explorer","nomination","nominate","pools","stake"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Balance Transfers",permalink:"/about/balance-transfers"},next:{title:"Operate a Node",permalink:"/category/operate-a-node"}},s={},m=[{value:"What Are Nomination Pools?",id:"what-are-nomination-pools",level:2},{value:"Features",id:"features",level:3},{value:"Key Considerations",id:"key-considerations",level:3},{value:"Components",id:"components",level:3},{value:"Member Lifecycle",id:"member-lifecycle",level:3},{value:"Limitations",id:"limitations",level:3},{value:"States of a Pool",id:"states-of-a-pool",level:3},{value:"Roles within a Pool",id:"roles-within-a-pool",level:3},{value:"Create a Pool",id:"create-a-pool",level:2},{value:"Commission Rate",id:"commission-rate",level:3},{value:"Max Commission",id:"max-commission",level:3},{value:"Change Rate",id:"change-rate",level:3},{value:"Administrative Transparency",id:"administrative-transparency",level:3},{value:"Unbonding Process",id:"unbonding-process",level:3},{value:"Automatic Rewards Withdrawal",id:"automatic-rewards-withdrawal",level:3},{value:"Considerations for Pool Exit",id:"considerations-for-pool-exit",level:3},{value:"Administrative Notes",id:"administrative-notes",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-are-nomination-pools"},"What Are Nomination Pools?"),(0,a.kt)("p",null,"Nomination pools are a critical feature in Avail's consensus system, akin to those in ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-nomination-pools"},(0,a.kt)("ins",null,"Polkadot and Substrate")),", They allow users to combine their stakes, effectively acting as a single nominator. This approach addresses the limitations of individual small stakes and ensures more efficient participation in the staking process."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Pool Mechanics"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accessibility"),": Open to all users, with no minimum stake requirement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Member Capacity"),": Each pool can accommodate a large number of members, ensuring wide participation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reward System"),": Rewards are distributed pro-rata but are not guaranteed if the pool's total stake is insufficient.")),(0,a.kt)("h3",{id:"key-considerations"},"Key Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nominating vs. Joining Pools"),": Understand the differences between direct staking and pool participation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restrictions"),": Bonded tokens in pools cannot be used for governance activities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support Channels"),": Avail provides dedicated channels for queries and developer support regarding nomination pools.")),(0,a.kt)("h3",{id:"components"},"Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bonded Pool"),": Manages actively staked funds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reward Pool"),": Tracks earned rewards."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unbonding Sub Pools"),": Handles various unbonding phases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Members"),": Individuals contributing to the pools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Points System"),": A measure of a member's share in the pool.")),(0,a.kt)("h3",{id:"member-lifecycle"},"Member Lifecycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Joining"),": Members can join a pool by contributing funds."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Claiming Rewards"),": Members claim their share of rewards based on their stake in the pool."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Unbonding and Withdrawal"),": Members can unbond and withdraw their funds, following a set duration.")),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Voting Restrictions"),": Funds in nomination pools cannot be used for voting in governance matters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pool Switching"),": To switch pools, members must unbond all funds, subject to a waiting period."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Pool Administration"),(0,a.kt)("h3",{id:"states-of-a-pool"},"States of a Pool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open"),": The pool is active and open for anyone to join."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blocked"),": The pool is currently not accepting new members."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Destroying"),": The pool is being decommissioned. In this state, no actions can revert the pool back to a previous state, and it is on the path to be fully removed. Members can unbond their stakes without restrictions during this phase.")),(0,a.kt)("h3",{id:"roles-within-a-pool"},"Roles within a Pool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Depositor"),": The creator and initial member of the pool. The depositor has the authority to manage the pool but is also the last to leave, ensuring the pool is properly dismantled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nominator"),": Responsible for selecting validators for the pool to nominate. This role is pivotal in steering the direction and performance of the pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bouncer"),": Has the power to change the state of the pool, including initiating the transition to a Blocked or Destroying state. They can also remove members from the pool if necessary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Root"),": This is the highest administrative level within the pool with the ability to manage all other roles and perform any related administrative actions.")),(0,a.kt)("p",null,"Each role is integral to the efficient operation and governance of the nomination pool. Clear understanding and execution of these roles ensure the pool operates smoothly and aligns with the members' collective objectives.")),(0,a.kt)("h2",{id:"create-a-pool"},"Create a Pool"),(0,a.kt)("p",null,'Nomination pool activites are performed under "Staking".'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to 'Network' and select 'Staking' on the navbar."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"By default, the Staking UI defaults to the Overview page, which shows you the number of validators, nomination pools, and other relevant staking statistics.")),(0,a.kt)("img",{src:"/img/nomination-pools/1.png",width:"200%",height:"200%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under 'Staking', select 'Pools'. Here, you will see the ",(0,a.kt)("a",{parentName:"p",href:"https://goldberg.avail.tools/#/staking/pools"},(0,a.kt)("ins",null,"Staking Pool Dashboard")),", which shows a list of active pools, their state, points, claimable rewards, and other details."),(0,a.kt)("img",{src:"/img/nomination-pools/2.png",width:"200%",height:"200%"}),(0,a.kt)("admonition",{parentName:"li",title:"Joining a pool",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To join a pool, click the 'Join' button next to the pool you're interested in and follow the prompts."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under the 'Pools' section, click on '+ Add pool' on the right-hand side to create a new nomination pool."),(0,a.kt)("img",{src:"/img/nomination-pools/3.png",width:"200%",height:"200%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the initial value, description, and pool ID in the provided fields. Select 'Create' once complete."),(0,a.kt)("img",{src:"/img/nomination-pools/4.png",width:"200%",height:"200%"}),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The 'pool id' field is a unique identifier for your pool.\nIn the 'description' field, provide a name for your pool. This metadata will serve as the name of your pool and be visible to other users who may wish to join."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify the transaction details and click on 'Sign and Submit' to proceed with the creation of your nomination pool."),(0,a.kt)("img",{src:"/img/nomination-pools/5.png",width:"200%",height:"200%"}))),(0,a.kt)("p",null,'You should see your pool in the list of "All pool" and under the "Own pools" tab.'),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Setting Pool Commissions"),(0,a.kt)("p",null,"As the pool administrator on Avail, you have the capability to establish commission rates that affect the staking rewards distribution. These are the steps and parameters to configure your pool's commissions:"),(0,a.kt)("h3",{id:"commission-rate"},"Commission Rate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function"),": Establish the starting or adjusted commission rate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameter"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"newCommission")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Range"),": From 0% to 10%, decided via governance referendum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Usage"),": This is the percentage of rewards taken as commission. Specify the recipient account for this commission.")),(0,a.kt)("h3",{id:"max-commission"},"Max Commission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function"),": Set the upper limit for the pool's commission rate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameter"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"maxCommission")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Note"),": Once set, you can only lower this rate, not increase it.")),(0,a.kt)("h3",{id:"change-rate"},"Change Rate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function"),": Determine the maximum increase allowed per commission update."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameter"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"maxIncrease")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Additional Setting"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"minDelay"),", the minimum number of blocks after the last commission change before a new update is permitted. Once set, this can only be increased.")),(0,a.kt)("h3",{id:"administrative-transparency"},"Administrative Transparency"),(0,a.kt)("p",null,"The decision to set Max Commission and Change Rate is at the discretion of the pool admin. These settings are not obligatory but are recommended for clarity and transparency with pool members."),(0,a.kt)("p",null,"When setting these parameters, balance the need to incentivize pool operation with the rewards expectations of your members. Clear communication regarding commission changes is essential to maintain trust within your pool community.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Exiting a Nomination Pool"),(0,a.kt)("p",null,"Members of a nomination pool on Avail have the flexibility to leave the pool at any time through a process called unbonding. Here's how it works:"),(0,a.kt)("h3",{id:"unbonding-process"},"Unbonding Process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Initiation"),": A member initiates unbonding by choosing to unbond either a portion or all of their staked funds from the pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Duration"),": Once the unbonding request is made, it enters a cooldown period. The exact duration of this period is specific to Avail and may differ from other platforms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Withdrawal"),": Following the end of the unbonding period, the member is eligible to withdraw their funds by executing the ",(0,a.kt)("inlineCode",{parentName:"li"},"withdrawUnbonded")," operation.")),(0,a.kt)("h3",{id:"automatic-rewards-withdrawal"},"Automatic Rewards Withdrawal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger"),": Any modification to a member's bonded balance\u2014such as through unbonding\u2014automatically prompts the withdrawal of accumulated rewards."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Effect"),": The withdrawn rewards are based on the member's stake before the unbonding transaction. This ensures that members receive the rewards they are entitled to up to the point of their unbonding.")),(0,a.kt)("h3",{id:"considerations-for-pool-exit"},"Considerations for Pool Exit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exiting the pool ends the member's current staking relationship with that pool."),(0,a.kt)("li",{parentName:"ul"},"Members are free to join another pool after withdrawing their funds, subject to Avail's staking rules and timelines.")),(0,a.kt)("h3",{id:"administrative-notes"},"Administrative Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pool admins should provide members with clear instructions on the unbonding and withdrawal process, including any platform-specific timelines or conditions."),(0,a.kt)("li",{parentName:"ul"},"It is advisable to keep members informed about the status of their unbonding requests and any actions they need to take to complete the withdrawal."))))}u.isMDXComponent=!0}}]);