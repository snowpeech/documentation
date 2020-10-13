/*! For license information please see cb2208c1.680e82e2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{284:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),i=(r(0),r(331)),a=r(332),s=r(387),c={last_modified_on:"2020-09-02",title:"How Qovery works?",description:"Insights about the way Qovery does its job."},l={id:"getting-started/how-qovery-works",title:"How Qovery works?",description:"Insights about the way Qovery does its job.",source:"@site/docs/getting-started/how-qovery-works.md",permalink:"/docs/getting-started/how-qovery-works",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/getting-started/how-qovery-works.md",sidebar:"docs",previous:{title:"What is Qovery?",permalink:"/docs/getting-started/what-is-qovery"},next:{title:"Quick Start Guide",permalink:"/docs/getting-started/quickstart"}},u=[{value:"Observing your Git repositories",id:"observing-your-git-repositories",children:[]},{value:"Integrating Git and CI/CD",id:"integrating-git-and-cicd",children:[]},{value:"Deploying applications on Kubernetes clusters",id:"deploying-applications-on-kubernetes-clusters",children:[]},{value:"Integrating &amp; Provisioning Cloud Infrastructure",id:"integrating--provisioning-cloud-infrastructure",children:[]},{value:"Replicating your projects",id:"replicating-your-projects",children:[]},{value:"Integrating other 3rd-Party services",id:"integrating-other-3rd-party-services",children:[]},{value:"Managing your organization <BusinessBadge />",id:"managing-your-organization",children:[]},{value:"Deploying on multiple clouds <BusinessBadge />",id:"deploying-on-multiple-clouds",children:[]}],p={rightToc:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document presents a high-level overview of how Qovery operates. We believe knowing these facts may help you understand Qovery and the power it brings for software development teams."),Object(i.b)("h2",{id:"observing-your-git-repositories"},"Observing your Git repositories"),Object(i.b)("p",null,"Qovery reacts to events in your Git repositories, like new commits, pull requests, or adding new branches.\nWhen it detects a Qovery configuration in your repository, it puts your application into a ",Object(i.b)("strong",{parentName:"p"},"CI/CD pipeline"),"."),Object(i.b)("h2",{id:"integrating-git-and-cicd"},"Integrating Git and CI/CD"),Object(i.b)("p",null,"You don't need to set up your CI/CD (Continuous Integration and Continuous Deployment) pipeline. In response to Git events, we clone your repository and put it in the pipeline.\nWe use a ",Object(i.b)("strong",{parentName:"p"},"Dockerfile")," from your repository to build a Docker image of your application. We also check the infrastructure requirements\nof your application using a simple ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")," config file."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)(s.a,{mdxType:"BusinessBadge"})," If you are a business user you can use your own solution to build and store Docker images"),Object(i.b)("h2",{id:"deploying-applications-on-kubernetes-clusters"},"Deploying applications on Kubernetes clusters"),Object(i.b)("p",null,"After building a Docker image of your application, we make it accessible by deploying it on Kubernetes clusters."),Object(i.b)("h2",{id:"integrating--provisioning-cloud-infrastructure"},"Integrating & Provisioning Cloud Infrastructure"),Object(i.b)("p",null,"We make sure all databases, storage, and message brokers your application requirements are provisioned and configured. If something is missing,\nwe provision it quickly and make it accessible to your application without any additional work from your side. To achieve it, we use managed services from many major cloud providers (like AWS, Azure, MongoDB Atlas, and others) - that's why our platform is so reliable."),Object(i.b)("h2",{id:"replicating-your-projects"},"Replicating your projects"),Object(i.b)("p",null,"One of the most powerful features of Qovery is ",Object(i.b)("strong",{parentName:"p"},"Environments"),". When we detect a new branch in one of your applications, we deliver a complete copy of your production environment (apps, databases, and services) so you can test new features quickly and adequately before going to production."),Object(i.b)("h2",{id:"integrating-other-3rd-party-services"},"Integrating other 3rd-Party services"),Object(i.b)("p",null,"We make sure that using and integrating all popular cloud services (e.g., Datadog) is smooth and seamless for all your applications on Qovery."),Object(i.b)("h2",{id:"managing-your-organization"},"Managing your organization ",Object(i.b)(s.a,{mdxType:"BusinessBadge"})),Object(i.b)("p",null,"Qovery allows you to define fine-grained rules that mirror the way your company operates. Create teams, assign roles, split responsibilities\nand enforce company-wide rules, all in one place."),Object(i.b)("h2",{id:"deploying-on-multiple-clouds"},"Deploying on multiple clouds ",Object(i.b)(s.a,{mdxType:"BusinessBadge"})),Object(i.b)("p",null,"Have you thought multi-cloud is a myth? Not with Qovery. Qovery Business allows your organization to run your production environments on very reliable clouds and at the same time\nuse cheaper cloud providers for your development environments."))}d.isMDXComponent=!0},330:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,y=p["".concat(a,".").concat(g)]||p[g]||d[g]||i;return r?o.a.createElement(y,s({ref:t},l,{components:r})):o.a.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},332:function(e,t,r){"use strict";r(337);var n=r(0),o=r.n(n),i=r(330),a=r.n(i);r(131);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,i=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:a()(r,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&o.a.createElement("i",{className:a()("feather","icon-"+(i||c))}),t)}},337:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(341)}),r(75)("fill")},341:function(e,t,r){"use strict";var n=r(27),o=r(76),i=r(26);e.exports=function(e){for(var t=n(this),r=i(t.length),a=arguments.length,s=o(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,l=void 0===c?r:o(c,r);l>s;)t[s++]=e;return t}},387:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){return o.a.createElement("span",{className:"badge badge--primary"},"BUSINESS ",o.a.createElement("i",{className:"feather icon-star"}))}}}]);