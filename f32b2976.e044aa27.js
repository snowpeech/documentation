/*! For license information please see f32b2976.e044aa27.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{314:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(1),o=t(9),i=(t(0),t(331)),a=t(334),c={last_modified_on:"2020-10-04",title:"Monitoring",description:"Learn how to configure your Monitoring provider in Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/configuration/business/monitoring",title:"Monitoring",description:"Learn how to configure your Monitoring provider in Qovery",source:"@site/docs/using-qovery/configuration/business/monitoring.md",permalink:"/docs/using-qovery/configuration/business/monitoring",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/monitoring.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"External Service",permalink:"/docs/using-qovery/configuration/business/external-service"},next:{title:"Datadog",permalink:"/docs/using-qovery/configuration/business/monitoring/datadog"}},s=[{value:"FAQ",id:"faq",children:[{value:"I don&#39;t find my Monitoring provider, what should I do?",id:"i-dont-find-my-monitoring-provider-what-should-i-do",children:[]}]}],l={rightToc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"/docs/using-qovery/configuration/business/monitoring/datadog",mdxType:"Jump"},"Datadog"),Object(i.b)(a.a,{to:"/docs/using-qovery/configuration/business/monitoring/new-relic",mdxType:"Jump"},"New Relic"),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"i-dont-find-my-monitoring-provider-what-should-i-do"},"I don't find my Monitoring provider, what should I do?"),Object(i.b)("p",null,"Your Monitoring provider is probably going to be supported in the near future. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"Contact us")," to see how we can help you."))}d.isMDXComponent=!0},330:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},331:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,m=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return t?o.a.createElement(m,c({ref:n},s,{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},332:function(e,n,t){"use strict";var r=t(1),o=t(0),i=t.n(o),a=t(39),c=t(335),u=t(24),s=t.n(u);n.a=function(e){var n,t=e.to,u=e.href,l=t||u,d=Object(c.a)(l),f=Object(o.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!p&&d&&window.docusaurus.prefetch(l),function(){p&&n&&n.disconnect()}}),[l,p,d]),l&&d?i.a.createElement(a.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var t,r;p&&e&&d&&(t=e,r=function(){window.docusaurus.prefetch(l)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())}))}))).observe(t))},to:l})):i.a.createElement("a",Object(r.a)({},e,{href:l}))}},334:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(332),a=t(330),c=t.n(a);t(132);n.a=function(e){var n=e.children,t=e.className,r=e.badge,a=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,d=e.to,f=c()("jump-to","jump-to--"+s,t),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},a&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+a})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",n),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:d,target:l,className:f},p):o.a.createElement(i.a,{to:d,className:f},p)}},335:function(e,n,t){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}t.d(n,"a",(function(){return r}))}}]);