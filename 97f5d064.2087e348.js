/*! For license information please see 97f5d064.2087e348.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{248:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return b}));var a=o(1),n=o(9),r=(o(0),o(336)),i=o(338),c=(o(343),o(339)),l={last_modified_on:"2021-01-31",$schema:"/.meta/.schemas/guides.json",title:"Zero to Hero - How to deploy your app on AWS in 30 minutes",description:"Step-by-step guide on how to deploy your app on AWS in 30 minutes. No AWS knowledge required.",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Zero to Hero - How to deploy your app on AWS in 30 minutes",description:"Step-by-step guide on how to deploy your app on AWS in 30 minutes. No AWS knowledge required.",permalink:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes",readingTime:"6 min read",source:"@site/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Zero to Hero - How to deploy your app on AWS in 30 minutes",truncated:!1,prevItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"}},p=[{value:"Before you start",id:"before-you-start",children:[{value:"Why you should use AWS",id:"why-you-should-use-aws",children:[]},{value:"Why you should not use AWS",id:"why-you-should-not-use-aws",children:[]}]},{value:"Step-by-step tutorial",id:"step-by-step-tutorial",children:[{value:"Create an account on AWS",id:"create-an-account-on-aws",children:[]},{value:"Install Qovery on AWS",id:"install-qovery-on-aws",children:[]},{value:"Deploy your application",id:"deploy-your-application",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],u={rightToc:p};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com?ref=qovery"}),"Amazon Web Services")," (AWS) is a platform that offers flexible, reliable, and scalable Cloud computing solutions. The platform is developed with a combination of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings. In 2021, thousands of companies host their apps on AWS. In 2006, AWS was composed of only 3 services (SQS, S3, EC2) that were simple to use. In 2021, more than 200 services and 2000 features exist, and deploying your app can take days."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," provides a state of the art Continuous Deployment platform in 30 minutes instead of 18 months to build it yourself.")),Object(r.b)("p",null,"In this tutorial, I will explain step by step how to deploy your app on AWS in 30 minutes. No AWS/infrastructure/Cloud knowledge required - no kidding!"),Object(r.b)("h2",{id:"before-you-start"},"Before you start"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"This tutorial is perfect for:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Junior/experienced/expert developer."),Object(r.b)("li",{parentName:"ul"},"Lead developer and CTO."),Object(r.b)("li",{parentName:"ul"},"Anybody interested into deploying apps on AWS in the simplest way.")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"If you have any question or suggestion on this tutorial, please contact me via ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.qovery.com/contact"}),"this form")," or ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://discord.qovery.com"}),"Discord")," :)")),Object(r.b)("h3",{id:"why-you-should-use-aws"},"Why you should use AWS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You need to focus on what you are building."),Object(r.b)("li",{parentName:"ul"},"You need to speed up your Go-To-Market and Product Market Fit."),Object(r.b)("li",{parentName:"ul"},"You plan to be the next unicorn \ud83e\udd84 ;)")),Object(r.b)("h3",{id:"why-you-should-not-use-aws"},"Why you should not use AWS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are building a side project."),Object(r.b)("li",{parentName:"ul"},"You are looking for a cheap hosting provider."),Object(r.b)("li",{parentName:"ul"},"You dislike Amazon.")),Object(r.b)("p",null,"Let's start!"),Object(r.b)("h2",{id:"step-by-step-tutorial"},"Step-by-step tutorial"),Object(r.b)("h3",{id:"create-an-account-on-aws"},"Create an account on AWS"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you already have an AWS account, you can go to the next point.")),Object(r.b)("p",null,"Before creating an AWS account, I'd recommend contacting AWS to see if you are eligible to free credits. AWS provides up to $100k of credits for 12 to 24 months. Which is convenient to have at the beginning of a project. If you know that you are not eligible, you can create your account by clicking on the top right button ",Object(r.b)("inlineCode",{parentName:"p"},"Create an AWS Account")," of their ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com?ref=qovery"}),"main page"),"."),Object(r.b)("img",{src:"/img/aws-create-an-account.jpg",alt:"Create an account on AWS"}),Object(r.b)("h3",{id:"install-qovery-on-aws"},"Install Qovery on AWS"),Object(r.b)("p",null,"To deploy your apps on your AWS account, we'll use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery"),'. Qovery is a Continuous Deployment platform that makes app deployment on AWS very simple (see "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/what-is-qovery/"}),"What is Qovery"),'"). The installation of Qovery on your AWS account takes approximately 30 minutes. Then you\'re ready to deploy your apps "a la" Heroku like.'),Object(r.b)("h4",{id:"get-your-aws-api-keys"},"Get your AWS API keys"),Object(r.b)("p",null,"To install Qovery on your AWS account, the ",Object(r.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"access key id")," are required. Here is a comprehensive ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/business/cloud-account/amazon-web-services/#connect-your-aws-account"}),"step-by-step guide")," on how to generate your ",Object(r.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"access key id"),". If you already have those keys, then you can go to the next point."),Object(r.b)("h4",{id:"connect-to-qovery"},"Connect to Qovery"),Object(r.b)("p",null,"Using Qovery is as simple as connect with your ",Object(r.b)("em",{parentName:"p"},"Github")," or ",Object(r.b)("em",{parentName:"p"},"Gitlab")," account on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"console.qovery.com"),"."),Object(r.b)("p",null,"-> ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Connect to Qovery")),Object(r.b)("h4",{id:"create-your-organization"},"Create your Organization"),Object(r.b)("p",null,"The concept of an organization is similar to the Organization on GitHub (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/main-concepts/business/organization/"}),"read more"),"). It's good practice to name your organization like your Company or project. You can be part of multiple organizations. Then you can give permissions to teammates to get access to your organization and then collaborate."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"By default, you have access to the ",Object(r.b)("inlineCode",{parentName:"p"},"QoveryCommunity")," organization which is free hosting for individual developers.")),Object(r.b)("p",null,"Create an Organization by clicking on the top right dropdown menu."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_create_organization_dropdown.svg",alt:"Qovery - Create an Organization - dropdown"})),Object(r.b)("p",null,"Then give a name and a logo (optional) to your organization."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_create_organization.svg",alt:"Qovery - Create an Organization"})),Object(r.b)("h4",{id:"launch-the-qovery-installation"},"Launch the Qovery installation"),Object(r.b)("p",null,"Select your Cloud provider where you want to use Qovery and insert the required Credentials."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_select_cloud_provider.svg",alt:"Qovery - Select your Cloud provider"})),Object(r.b)("p",null,"Select the closest region from your users to have the best latency."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_select_cloud_provider_region.svg",alt:"Qovery - Select your Cloud provider region"})),Object(r.b)("p",null,"Congrats! Qovery will be installed within 30 minutes \ud83c\udf89. In the meantime, you can take a look at what happens on your AWS account - an EKS is spawning with Qovery."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_installation_waiting_state.svg",alt:"Qovery - Qovery installation is in progress"})),Object(r.b)("h3",{id:"deploy-your-application"},"Deploy your application"),Object(r.b)("p",null,"Once Qovery is installed on your AWS account, you have the possibility to create a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/main-concepts/project/"}),"project"),". A project contains multiple apps on different environments (production, staging, dev). Learn more on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/main-concepts/project/"}),"project")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment")," concepts."),Object(r.b)("h4",{id:"create-a-project"},"Create a project"),Object(r.b)("p",null,"Give a name to your project. ",Object(r.b)("strong",{parentName:"p"},"Pro-tips:")," ",Object(r.b)("em",{parentName:"p"},"In my ",Object(r.b)("inlineCode",{parentName:"em"},"Qovery")," organization I have a project ",Object(r.b)("inlineCode",{parentName:"em"},"ProductAnalytics")," and a project ",Object(r.b)("inlineCode",{parentName:"em"},"Application"),". If you don't plan to have multiple projects, then give the name of your app.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_create_project.png",alt:"Qovery - create a project"})),Object(r.b)("h4",{id:"deploy-your-app"},"Deploy your app"),Object(r.b)("p",null,"To deploy your app on AWS with Qovery, it is as simple as selecting your Github or Gitlab repository. Nothing more :)\nEverything is configured for you, even the SSL/TLS and your domain."),Object(r.b)("p",null,"Select the repository of the app you want to deploy."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_deploy_app_1.png",alt:"Qovery - select the repository of your app"})),Object(r.b)("p",null,"Give a name to your app."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_deploy_app_2.png",alt:"Qovery - give a name to your app"})),Object(r.b)("p",null,"Optional: You can deploy a database or attach a storage to your app in one-click."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_deploy_app_3.png",alt:"Qovery - deploy a database or attach a storage to your app"})),Object(r.b)("p",null,'Then deploy your app by clicking on "Deploy".'),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_deploy_app_4.png",alt:"Qovery - deploy your app"})),Object(r.b)("p",null,"Your app is deployed and ready to be used by your users. And all of that from your AWS account! \ud83c\udf89"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_deploy_app_5.png",alt:"Qovery - the app is deployed"})),Object(r.b)("p",null,"If you need to add another app to your project, you just need to repeat the latest steps \ud83d\ude0e."),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)("p",null,"Now you can see how you can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/adding-a-database/"}),"add a database")," to your app or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"set up your domain"),"."),Object(r.b)(c.a,{to:"/guides/getting-started/adding-a-database",mdxType:"Jump"},"Add a database"),Object(r.b)(c.a,{to:"/guides/getting-started/setting-custom-domain",mdxType:"Jump"},"Set up your domain"))}b.isMDXComponent=!0},335:function(e,t,o){var a;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)o.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},336:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return y}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,y=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return o?n.a.createElement(y,c({ref:t},s,{components:o})):n.a.createElement(y,c({ref:t},s))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},337:function(e,t,o){"use strict";var a=o(1),n=o(0),r=o.n(n),i=o(39),c=o(340),l=o(24),s=o.n(l);t.a=function(e){var t,o=e.to,l=e.href,p=o||l,u=Object(c.a)(p),b=Object(n.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?r.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var o,a;d&&e&&u&&(o=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){o===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(o),t.disconnect(),a())}))}))).observe(o))},to:p})):r.a.createElement("a",Object(a.a)({},e,{href:p}))}},338:function(e,t,o){"use strict";o(342);var a=o(0),n=o.n(a),r=o(335),i=o.n(r);o(132);t.a=function(e){var t=e.children,o=e.classNames,a=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return n.a.createElement("div",{className:i()(o,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&n.a.createElement("i",{className:i()("feather","icon-"+(r||l))}),t)}},339:function(e,t,o){"use strict";var a=o(0),n=o.n(a),r=o(337),i=o(335),c=o.n(i);o(131);t.a=function(e){var t=e.children,o=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,p=e.target,u=e.to,b=c()("jump-to","jump-to--"+s,o),d=n.a.createElement("div",{className:"jump-to--inner"},n.a.createElement("div",{className:"jump-to--inner-2"},i&&n.a.createElement("div",{className:"jump-to--left"},n.a.createElement("i",{className:"feather icon-"+i})),n.a.createElement("div",{className:"jump-to--main"},a?n.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),n.a.createElement("div",{className:"jump-to--right"},n.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return p?n.a.createElement("a",{href:u,target:p,className:b},d):n.a.createElement(r.a,{to:u,className:b},d)}},340:function(e,t,o){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}o.d(t,"a",(function(){return a}))},341:function(e,t,o){var a=o(25).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||o(10)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},342:function(e,t,o){var a=o(12);a(a.P,"Array",{fill:o(345)}),o(75)("fill")},343:function(e,t,o){"use strict";o(341);var a=o(0),n=o.n(a),r=o(338);t.a=function(e){var t=e.children,o=e.name;return n.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},n.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",o||"page"," assumes the following:"),t)}},345:function(e,t,o){"use strict";var a=o(27),n=o(76),r=o(26);e.exports=function(e){for(var t=a(this),o=r(t.length),i=arguments.length,c=n(i>1?arguments[1]:void 0,o),l=i>2?arguments[2]:void 0,s=void 0===l?o:n(l,o);s>c;)t[c++]=e;return t}}}]);