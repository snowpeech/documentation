(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{277:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var o=t(1),r=t(9),c=(t(0),t(313)),i={last_modified_on:"2020-10-01",title:"Cloud Account",description:"Understand the concept of Cloud Accounts in Qovery"},a={id:"main-concepts/business/cloud-account",title:"Cloud Account",description:"Understand the concept of Cloud Accounts in Qovery",source:"@site/docs/main-concepts/business/cloud-account.md",permalink:"/docs/main-concepts/business/cloud-account",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts/business/cloud-account.md",sidebar:"docs",previous:{title:"Organization",permalink:"/docs/main-concepts/business/organization"},next:{title:"Build Platform",permalink:"/docs/main-concepts/business/build-platform"}},u=[{value:"Deploy on your own Cloud Account",id:"deploy-on-your-own-cloud-account",children:[]},{value:"Real multi-cloud in action",id:"real-multi-cloud-in-action",children:[]}],l={rightToc:u};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"deploy-on-your-own-cloud-account"},"Deploy on your own Cloud Account"),Object(c.b)("p",null,"Qovery has taken provider-agnostic approach to the cloud. Our Engine is designed to support any cloud provider. What it means to you, is that you can deploy your projects using multiple cloud accounts,\nfrom multiple cloud providers."),Object(c.b)("img",{src:"/img/providers.png"}),Object(c.b)("h3",{id:"real-multi-cloud-in-action"},"Real multi-cloud in action"),Object(c.b)("p",null,"Do you want to have a reliable production environment but also save money on staging platforms which are not crucial?\nNo problem! You can deploy your reliable production system on AWS, and to save resources, deploy other non-production\nenvironments using one of cheaper cloud providers. Qovery brings you a real multi-cloud capabilities which are fully transparent for\napplication developers."),Object(c.b)("p",null,"All you need to do to benefit from cloud-agnostic deployments is to have an account on a ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/business/cloud-account/"}),"supported cloud provider"),"."),Object(c.b)("p",null,"Read more about ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/business/cloud-account/"}),"Cloud Account")))}s.isMDXComponent=!0},313:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return t?r.a.createElement(m,a({ref:n},l,{components:t})):r.a.createElement(m,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=b;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);