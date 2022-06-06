"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[869],{4330:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(8855);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6233:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(1528),a=r(2854),o=(r(8855),r(4330)),c=["components"],i={sidebar_position:3},s="useContract",u={unversionedId:"hooks/contract",id:"hooks/contract",title:"useContract",description:"Hook to build a Contract instance from its ABI and address.",source:"@site/docs/hooks/contract.md",sourceDirName:"hooks",slug:"/hooks/contract",permalink:"/starknet-react/hooks/contract",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/hooks/contract.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useStarknetBlock",permalink:"/starknet-react/hooks/block"},next:{title:"useStarknetCall",permalink:"/starknet-react/hooks/call"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecontract"},"useContract"),(0,o.kt)("p",null,"Hook to build a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," instance from its ABI and address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useContract } from '@starknet-react/core'\n\nconst { contract } = useContract({ abi, address })\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  abi?: Abi\n  address?: string\n}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"Abi")," is from starknet.js."),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  contract?: ContractInterface\n}\n")),(0,o.kt)("p",null,"A contract is returned only if both ",(0,o.kt)("inlineCode",{parentName:"p"},"abi")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," are defined."))}f.isMDXComponent=!0}}]);