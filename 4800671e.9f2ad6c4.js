/*! For license information please see 4800671e.9f2ad6c4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(256)),i=n(273),c=n(264),l=(n(259),{last_modified_on:"2020-04-22",$schema:"/.meta/.schemas/guides.json",title:"Use application template",description:"How to deploy any application in 10 seconds by using qovery template",series_position:5,author_github:"https://github.com/evoxmusic",tags:["type: guide"]}),s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Use application template",description:"How to deploy any application in 10 seconds by using qovery template",permalink:"/guides/getting-started/application-template",readingTime:"3 min read",seriesPosition:5,source:"@site/guides/getting-started/application-template.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Use application template",truncated:!1,prevItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"},nextItem:{title:"Customizing routes",permalink:"/guides/advanced/customizing-routing"}},u=[{value:"Tutorial",id:"tutorial",children:[{value:"Choose your template",id:"choose-your-template",children:[]},{value:"Use it",id:"use-it",children:[]},{value:"Deploy",id:"deploy",children:[]}]},{value:"What to do if a template...",id:"what-to-do-if-a-template",children:[{value:"Does not work",id:"does-not-work",children:[]},{value:"Does not exist",id:"does-not-exist",children:[]},{value:"Could be improved",id:"could-be-improved",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creating a Dockerfile is sometimes tedious, to facilitate the deployment of the most popular languages and frameworks, Qovery provides official templates. The ",Object(o.b)("inlineCode",{parentName:"p"},"qovery init -t <template name>")," generate a ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," files."),Object(o.b)(c.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Qovery CLI")))),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"choose-your-template"},"Choose your template"),Object(o.b)("p",null,"You can list all available templates with the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery template list\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="All templates available"',title:'"All',templates:!0,'available"':!0}),"NAME   | DESCRIPTION\nhasura | Hasura is a production-ready GraphQL backend\ngatsby | Gatsby is a fast modern site generator for React\n...\n"))),Object(o.b)("li",null,Object(o.b)("h3",{id:"use-it"},"Use it"),Object(o.b)("p",null,"To use a template it's as easy as executing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery init -t <template name>\n")),Object(o.b)("p",null,"Then an interactive prompt will ask you couple of questions to generate the proper configuration.")),Object(o.b)("li",null,Object(o.b)("h3",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"To deploy your application you have to commit and push your project with the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," generated by the Qovery CLI."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ git add .qovery.yml Dockerfile\n$ git commit -m "Add .qovery.yml and Dockerfile"\n$ git push -u origin master\n')),Object(o.b)("p",null,"You can check the progress of your application deployment with ",Object(o.b)("inlineCode",{parentName:"p"},"qovery status --watch")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qovery status --watch\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Deployment progression"',title:'"Deployment','progression"':!0})," 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588|  [0s:0s]\n\nYour environment is ready!\n\n-- status output --\n\nBRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS                        | DATABASES\nmaster      | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | simple-example-node-with-postgresql | my-postgresql-3498225\n\nAPPLICATION NAME                    | STATUS  | DATABASES\nsimple-example-node-with-postgresql | running | my-postgresql-3498225\n\nDATABASE NAME         | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-3498225 | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | simple-example-node-with-postgresql\n"))))),Object(o.b)("h2",{id:"what-to-do-if-a-template"},"What to do if a template..."),Object(o.b)("h3",{id:"does-not-work"},"Does not work"),Object(o.b)("p",null,"Unwanted behaviour can happens, if a template is not working as expected, please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/qovery/documentation/issues"}),"open an issue"),". If you can fix it, you can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/qovery/documentation"}),"make a Pull Request")," as well. We love contributors, and we know how to thanks them :)"),Object(o.b)("h3",{id:"does-not-exist"},"Does not exist"),Object(o.b)("p",null,"We are sorry to know that you didn't find the template of your dream. You can contribute by opening an issue or submitting a Pull Request."),Object(o.b)("h3",{id:"could-be-improved"},"Could be improved"),Object(o.b)("p",null,"You can improve a template by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/qovery/documentation"}),"submitting a Pull Request"),"."))}d.isMDXComponent=!0},255:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},259:function(e,t,n){"use strict";n(260);var r=n(0),a=n.n(r),o=n(255),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},260:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(265)}),n(75)("fill")},263:function(e,t,n){var r=n(27).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},264:function(e,t,n){"use strict";n(263);var r=n(0),a=n.n(r),o=n(259);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},265:function(e,t,n){"use strict";var r=n(25),a=n(76),o=n(24);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},267:function(e,t,n){"use strict";var r=n(275),a=n(53);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},273:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(255),n(267)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),p=u[0],d=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},275:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);