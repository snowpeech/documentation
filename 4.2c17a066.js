/*! For license information please see 4.2c17a066.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(e,t,n){"use strict";var r=n(0),o=n(373);t.a=function(){return Object(r.useContext)(o.a)}},288:function(e,t,n){"use strict";var r=n(0);t.a=function(e){void 0===e&&(e=!0),Object(r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},289:function(e,t,n){"use strict";var r=n(256),o=n(270),a=n(263),c=n(262);t.a=function(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=e.themeConfig.navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(o.a)().isDarkTheme,u=l.href||t,d={};l.target?d={target:l.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var h=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(a.a)(h),logoAlt:l.alt}}},291:function(e,t,n){"use strict";var r=n(12),o=n(24),a=n(312),c="".endsWith;r(r.P+r.F*n(313)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),i=void 0===n?r:Math.min(o(n),r),l=String(e);return c?c.call(t,l,i):t.slice(i-l.length,i)===l}})},292:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(256),c=n(148),i=n.n(c);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,n=void 0===t?{}:t,c=n.id,l=n.content,s=n.backgroundColor,u=n.textColor,d=Object(r.useState)(!0),h=d[0],f=d[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&f(!1)}),[]),!l||h?null:o.a.createElement("div",{className:i.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},o.a.createElement("div",{className:i.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),o.a.createElement("button",{type:"button",className:i.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),f(!0)},"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},293:function(e,t,n){"use strict";var r=n(0);r.PureComponent},294:function(e,t,n){"use strict";n(64),n(27),n(19),n(20),n(80);var r=n(0),o=n.n(r),a=n(253),c=n.n(a),i=n(256),l=n(300);n(149);t.a=function(e){var t=Object(r.useState)(!1),a=t[0],s=t[1],u=Object(r.useRef)(null),d=Object(i.a)().siteConfig,h=(void 0===d?{}:d).themeConfig.algolia,f=Object(l.c)();var p=function(e){void 0===e&&(e=!0),a||Promise.all([n.e(102).then(n.t.bind(null,409,7)),n.e(66).then(n.t.bind(null,454,7))]).then((function(t){var n=t[0].default;s(!0),window.docsearch=n,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:function(e,t,n){var r=document.createElement("a");r.href=n.url;var o="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;f.push(o)}}),e&&u.current.focus()}(e)}))},g=Object(r.useCallback)((function(){p(),a&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(r.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(r.useCallback)((function(e){var t="mouseover"!==e.type;p(t)}));return o.a.createElement("div",{className:"navbar__search",key:"search-box"},o.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),o.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:v,ref:u}))}},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=h(a),i=h(n(253)),l=h(n(15)),s=h(n(395)),u=h(n(396)),d=n(397);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),a=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",r({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(a.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},297:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(95),n(296),function(){var e=Object(r.useState)({}),t=e[0],n=e[1],o=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var r=localStorage.key(t);if(r.startsWith("docusaurus.tab."))e[r.substring("docusaurus.tab.".length)]=localStorage.getItem(r)}n(e)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),o(e,t)}}}),c=n(338);t.a=function(e){var t=a(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return o.a.createElement(c.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)}},298:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(256),c="",i="dark",l=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,n=Object(r.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):c),o=n[0],l=n[1],s=Object(r.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[l]),u=Object(r.useCallback)((function(){l(c),s(c)}),[]),d=Object(r.useCallback)((function(){l(i),s(i)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",o)}),[o]),Object(r.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&l(e)}catch(n){console.error(n)}}),[l]),Object(r.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?i:c)}))}),[]),{isDarkTheme:o===i,setLightTheme:u,setDarkTheme:d}},s=n(373);t.a=function(e){var t=l(),n=t.isDarkTheme,r=t.setLightTheme,a=t.setDarkTheme;return o.a.createElement(s.a.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:a}},e.children)}},299:function(e,t,n){"use strict";var r=n(0),o=n(300);var a=function(e){var t=Object(r.useState)(e),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e=function(){return o(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,o]};t.a=function(e){var t=Object(r.useState)(!0),n=t[0],c=t[1],i=Object(r.useState)(!1),l=i[0],s=i[1],u=Object(r.useState)(0),d=u[0],h=u[1],f=Object(r.useState)(0),p=f[0],g=f[1],v=Object(r.useCallback)((function(e){null!==e&&g(e.getBoundingClientRect().height)}),[]),b=Object(o.d)(),m=a(b.hash),k=m[0],w=m[1],y=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&c(!0),!(e<p)){if(l)return s(!1),c(!1),void h(e);var t=document.documentElement.scrollHeight-p,n=window.innerHeight;d&&e>=d?c(!1):e+n<t&&c(!0),h(e)}};return Object(r.useEffect)((function(){if(e)return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[d,p]),Object(r.useEffect)((function(){e&&(c(!0),w(b.hash))}),[b]),Object(r.useEffect)((function(){e&&k&&s(!0)}),[k]),{navbarRef:v,isNavbarVisible:n}}},300:function(e,t,n){"use strict";var r=n(39);n.d(t,"a",(function(){return r.c})),n.d(t,"b",(function(){return r.d})),n.d(t,"c",(function(){return r.e})),n.d(t,"d",(function(){return r.f}))},338:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},373:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=o},393:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return E}));var r=window.document,o=window.Math,a=window.HTMLElement,c=window.XMLHttpRequest,i=function(e){return function(t,n,r){var o=e.createElement(t);if(n)for(var a in n){var c=n[a];null!=c&&(null!=o[a]?o[a]=c:o.setAttribute(a,c))}if(r)for(var i=0,l=r.length;i<l;i++){var s=r[i];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},l=i(r),s=function(e,t){return{}.hasOwnProperty.call(e,t)},u=c&&c.prototype&&"withCredentials"in c.prototype,d=u&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,h=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},f=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},p={light:".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},g=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+p[s(p,t)?t:e]+"}"},v=function(e){if(null==e)return p.light;var t=function(e,t,n,r){null==t&&(t="&"),null==n&&(n="="),null==r&&(r=window.decodeURIComponent);for(var o={},a=e.split(t),c=0,i=a.length;c<i;++c){var l=a[c];if(""!==l){var s=l.split(n);o[r(s[0])]=null!=s[1]?r(s.slice(1).join(n)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return p[s(p,t["no-preference"])?t["no-preference"]:"light"]+g("light",t.light)+g("dark",t.dark)},b={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},m={},k=function(e,t){var n=m[e]||(m[e]=[]);if(!(n.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete m[e];t=n.shift();)t.apply(null,arguments)}));if(u){var o=new c;h(o,"abort",r),h(o,"error",r),h(o,"load",(function(){var e;try{e=JSON.parse(o.responseText)}catch(t){return void r(t)}r(200!==o.status,e)})),o.open("GET",e),o.send()}else{var a=this||window;a._=function(e){a._=null,r(200!==e.meta.status,e.data)};var l=i(a.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};h(l,"load",s),h(l,"error",s),l.readyState&&function(e,t,n){var r=function(o){if(t.test(e.readyState))return f(e,"readystatechange",r),n(o)};h(e,"readystatechange",r)}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},w=function(e,t,n){var r=i(e.ownerDocument),o=e.appendChild(r("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+v(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.ownerDocument.createTextNode(a));var c,l,u=r("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(c=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,c=(""+c).toLowerCase().replace(/^octicon-/,""),s(b,c)||(c="mark-github"),'<svg viewBox="0 0 '+b[c].width+" "+b[c].height+'" class="octicon octicon-'+c+'" style="width: '+l*b[c].width/b[c].height+"px; height: "+l+'px;" aria-hidden="true">'+b[c].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",r("span",{},[t["data-text"]||""])]),d=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[u])),h=u.hostname.split(".").reverse();if(""===h[0]&&h.shift(),"com"!==h[0]||"github"!==h[1])return u.href="#",u.target="_self",void n(d);var f=h.length,p=(" /"+u.pathname).split(/\/+/);if(((2===f||3===f&&"gist"===h[2])&&"archive"===p[3]||2===f&&"releases"===p[3]&&"download"===p[4]||3===f&&"codeload"===h[2])&&(u.target="_top"),/^true$/i.test(t["data-show-count"])&&2===f){var g,m;if(!p[2]&&p[1])g=m="followers";else if(!p[3]&&p[2])m="stargazers_count",g="stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void n(d);m="open_issues_count",g="issues"}else m="forks_count",g="network/members";else m="subscribers_count",g="watchers";var w=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];k.call(this,"https://api.github.com"+w,(function(e,t){if(!e){var o=t[m];d.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+g,target:"_blank",rel:"noopener","aria-label":o+" "+m.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}n(d)}))}else n(d)},y=window.devicePixelRatio||1,C=function(e){return(y>1?o.ceil(o.round(e*y)/y*2)/2:o.ceil(e))||0},x=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},E=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},n=["icon","color-scheme","text","size","show-count"],r=0,o=n.length;r<o;r++){var a="data-"+n[r];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),d){var n=l("span",{title:e.title||void 0});w(n.attachShadow({mode:"closed"}),e,(function(){t(n)}))}else{var a=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});x(a,[0,0]),a.style.border="none";var c=function(){var n,i=a.contentWindow;try{n=i.document.body}catch(l){return void r.body.appendChild(a.parentNode.removeChild(a))}f(a,"load",c),w.call(i,n,e,(function(n){var r=function(e){var t=e.offsetWidth,n=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=o.max(t,C(r.width)),n=o.max(n,C(r.height))}return[t,n]}(n);a.parentNode.removeChild(a),function(e,t,n){var r=function(o){return f(e,t,r),n(o)};h(e,t,r)}(a,"load",(function(){x(a,r)})),a.src="https://unpkg.com/github-buttons@2.7.0/dist/buttons.html#"+(a.name=function(e,t,n,r){null==t&&(t="&"),null==n&&(n="="),null==r&&(r=window.encodeURIComponent);var o=[];for(var a in e){var c=e[a];null!=c&&o.push(r(a)+n+r(c))}return o.join(t)}(e)),t(a)}))};h(a,"load",c),r.body.appendChild(a)}}},395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("title",null,"switch-check"),a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("title",null,"switch-x"),a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}}}]);