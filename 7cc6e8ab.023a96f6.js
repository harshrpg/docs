(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(145)),i={id:"framework",title:"Smart Contract Framework",sidebar_label:"Framework"},c={id:"framework",isDocsHomePage:!1,title:"Smart Contract Framework",description:"Overview",source:"@site/docs/contractFramework.md",permalink:"/docs/docs/framework",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/contractFramework.md",sidebar_label:"Framework",sidebar:"someSidebar",previous:{title:"The Math Behind PMM",permalink:"/docs/docs/math"},next:{title:"User Guide",permalink:"/docs/docs/contractUseGuide"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Core",id:"core",children:[]},{value:"Entrance",id:"entrance",children:[]},{value:"Helper",id:"helper",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"DODO is built with a set of smart contracts. The following figure shows the framework of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DODOEX/dodo-smart-contract"}),"these contracts")," and how they interact with each other in the DODO architecture."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_framework.jpeg",alt:null}))),Object(o.b)("h2",{id:"core"},"Core"),Object(o.b)("p",null,"The core part of the DODO framework, which contains all the data and logic of DODO, consists of a set of DODO Proxy contracts and a singular DODO Implementation contract. Each trading pair binds with an independent ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Proxy")," contract (e.g. WETH-USDC, DAI-USDT, etc.), which is a transparent proxy that only stores states and metadata. All underlying logic lies in the ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Implementation")," contract."),Object(o.b)("p",null,"For convenience's sake, we will call the transparent proxy ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair")," and the logic implementation ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Template"),". Users should interact with ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair")," directly or through ",Object(o.b)("inlineCode",{parentName:"p"},"Helper"),"."),Object(o.b)("h2",{id:"entrance"},"Entrance"),Object(o.b)("p",null,"DODO is an open-source contract, and the DODO team welcomes forks. However, it is important to note that the operation of ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair")," is highly dependent on oracles and parameter fine-tuning, and a misconfigured ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair")," could potentially cause significant losses for users. Therefore, we deployed an entrance contract to help blockchain developers navigate these obstacles. All ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair"),"s registered in this contract have been rigorously tested and audited, as the DODO team believes the safety of DODO users is of utmost importance. Developers should only look for the entrance called ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Zoo")," when developing upon DODO. Even if the ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Template")," is upgraded, ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Zoo")," will remain unchanged. "),Object(o.b)("h2",{id:"helper"},"Helper"),Object(o.b)("p",null,"There are a lot of tedious tasks that can be packaged using contracts to make them easy to use and understand. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"DODO ETH Proxy")," shown in the figure above helps users convert between ETH and WETH and interact with ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair"),". This way, the underlying complexity with WETH is abstracted away from users, effectively protecting them - users do and should only care about directly buying or selling ETH on DODO. There are many such contracts, such as arbitrage and route, which we collectively call ",Object(o.b)("inlineCode",{parentName:"p"},"Helper"),". We invite the community to help develop more helper contracts and we are willing to provide guidance and support."))}p.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),O=n,b=d["".concat(i,".").concat(O)]||d[O]||u[O]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);