/*! For license information please see 2e312db4.0065178d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(329)),o=n(383),c={last_modified_on:"2020-04-22",title:"Project Templates",description:"Use Project Templates to move blazingly fast"},l={id:"using-qovery/integration/project-templates",title:"Project Templates",description:"Use Project Templates to move blazingly fast",source:"@site/docs/using-qovery/integration/project-templates.md",permalink:"/docs/using-qovery/integration/project-templates",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/project-templates.md",sidebar:"docs",previous:{title:"Integration",permalink:"/docs/using-qovery/integration"},next:{title:"IDE Plugins",permalink:"/docs/using-qovery/integration/ide-plugins"}},s=[{value:"Template",id:"template",children:[{value:"List",id:"list",children:[]},{value:"Use",id:"use",children:[]}]},{value:"Contributions",id:"contributions",children:[]},{value:"Final word",id:"final-word",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Templates are pre-configured ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfiles")," and ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")," configs that allow you to bootstrap a new application quickly."),Object(i.b)("h2",{id:"template"},"Template"),Object(i.b)("h3",{id:"list"},"List"),Object(i.b)("p",null,"You can list all available templates with the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery template list\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="All templates available"',title:'"All',templates:!0,'available"':!0}),"NAME   | DESCRIPTION\nhasura | Hasura is a production-ready GraphQL backend\ngatsby | Gatsby is a fast modern site generator for React\n...\n")),Object(i.b)("h3",{id:"use"},"Use"),Object(i.b)("p",null,"To use one of them, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir my_hasura_application\ncd my_hasura_application\ngit init\n\nqovery init -t hasura\n")),Object(i.b)(o.a,{mdxType:"CodeExplanation"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The mkdir command creates a new directory for your application"),Object(i.b)("li",{parentName:"ul"},"The cd command moves you to your newly created directory"),Object(i.b)("li",{parentName:"ul"},"The git init command initializes a new Git repository in the current directory"),Object(i.b)("li",{parentName:"ul"},"The qovery init command configures Hasura"))),Object(i.b)("h2",{id:"contributions"},"Contributions"),Object(i.b)("p",null,"Any idea of a new template? ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/qovery/qovery-templates"}),"Contributions are welcomed"),"."),Object(i.b)("h2",{id:"final-word"},"Final word"),Object(i.b)("p",null,"Now, all you have to do is to commit and publish your repository to Github, Gitlab, or Bitbucket, to deploy your application!"))}p.isMDXComponent=!0},328:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},330:function(e,t,n){"use strict";n(335);var r=n(0),a=n.n(r),i=n(328),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),t)}},335:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(339)}),n(75)("fill")},339:function(e,t,n){"use strict";var r=n(27),a=n(76),i=n(25);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},383:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(330),n(141);t.a=function(e){var t=e.children,n=Object(r.useState)(!1),i=n[0],o=n[1];return i?a.a.createElement("div",{className:"code-explanation code-explanation--expanded"},t,a.a.createElement("div",{className:"code-explanation--toggle",onClick:function(){return o(!i)}},a.a.createElement("i",{className:"feather icon-arrow-up-circle"})," hide")):a.a.createElement("div",{className:"code-explanation code-explanation--collapsed"},a.a.createElement("div",{className:"code-explanation--toggle",onClick:function(){return o(!i)}},a.a.createElement("i",{className:"feather icon-info"})," explain this command"))}}}]);