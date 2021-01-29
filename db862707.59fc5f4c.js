/*! For license information please see db862707.59fc5f4c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{301:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(333)),i=r(336),c={last_modified_on:"2020-10-04",title:"Gitlab CI",description:"Learn how to configure and plug your Gitlab CI account"},u={id:"using-qovery/configuration/business/build-platform/gitlab-ci",title:"Gitlab CI",description:"Learn how to configure and plug your Gitlab CI account",source:"@site/docs/using-qovery/configuration/business/build-platform/gitlab-ci.md",permalink:"/docs/using-qovery/configuration/business/build-platform/gitlab-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/build-platform/gitlab-ci.md",sidebar:"docs",previous:{title:"Qovery CI",permalink:"/docs/using-qovery/configuration/business/build-platform/qovery-ci"},next:{title:"Circle CI",permalink:"/docs/using-qovery/configuration/business/build-platform/circle-ci"}},s=[{value:"Available Build platforms",id:"available-build-platforms",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Gitlab CI is coming soon (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/40-gitlab-ci"}),"see when"),"). Vote ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/40-gitlab-ci"}),"here")," to make it happen faster."),Object(o.b)("h2",{id:"available-build-platforms"},"Available Build platforms"),Object(o.b)(i.a,{to:"/docs/using-qovery/configuration/business/build-platform/qovery-ci",mdxType:"Jump"},"Qovery CI"))}p.isMDXComponent=!0},332:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},333:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(m,c({ref:t},s,{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},334:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(39),c=r(337),u=r(24),s=r.n(u);t.a=function(e){var t,r=e.to,u=e.href,l=r||u,p=Object(c.a)(l),f=Object(a.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(l),function(){b&&t&&t.disconnect()}}),[l,b,p]),l&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;b&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object(n.a)({},e,{href:l}))}},336:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(334),i=r(332),c=r.n(i);r(131);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+s,r),b=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},b):a.a.createElement(o.a,{to:p,className:f},b)}},337:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);