(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{83041:function(e,t,n){Promise.resolve().then(n.bind(n,64404)),Promise.resolve().then(n.bind(n,27640)),Promise.resolve().then(n.bind(n,90239)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,84080,23)),Promise.resolve().then(n.t.bind(n,16305,23)),Promise.resolve().then(n.bind(n,82650)),Promise.resolve().then(n.bind(n,50558)),Promise.resolve().then(n.bind(n,40289)),Promise.resolve().then(n.t.bind(n,28840,23)),Promise.resolve().then(n.bind(n,22810))},90239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),i=n(2265);t.default=function(e){let{html:t,height:n=null,width:a=null,children:o,dataNtpc:s=""}=e;return(0,i.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,r.jsxs)(r.Fragment,{children:[o,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})}},64404:function(e,t,n){"use strict";var r;let i;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=n(57437),o=n(2265),s=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===i&&(i=n),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,a.jsx)(s.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===i){console.warn("@next/third-parties: GA has not been initialized");return}window[i]?window[i].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(i," does not exist"))}},27640:function(e,t,n){"use strict";var r;let i;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=n(57437),o=n(2265),s=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:c,dataLayer:l}=e;void 0===i&&(i=n);let d="dataLayer"!==n?"&l=".concat(n):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(l?"w[l].push(".concat(JSON.stringify(l),")"):"","\n      })(window,'").concat(n,"');")}}),(0,a.jsx)(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(r?"&gtm_auth=".concat(r):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===i){console.warn("@next/third-parties: GTM has not been initialized");return}window[i]?window[i].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(i," does not exist"))}},78030:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2265);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:l="",children:d,iconNode:u,...f}=e;return(0,r.createElement)("svg",{ref:t,...o,width:i,height:i,stroke:n,strokeWidth:c?24*Number(s)/Number(i):s,className:a("lucide",l),...f},[...u.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(d)?d:[d]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,o)=>{let{className:c,...l}=n;return(0,r.createElement)(s,{ref:o,iconNode:t,className:a("lucide-".concat(i(e)),c),...l})});return n.displayName="".concat(e),n}},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.a}});var r=n(84080),i=n.n(r),a={};for(var o in r)"default"!==o&&(a[o]=(function(e){return r[e]}).bind(0,o));n.d(t,a)},82650:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return a}});var r=n(57437),i=n(80473);function a(e){let{children:t,...n}=e;return(0,r.jsx)(i.f,{...n,children:t})}},50558:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(57437),i=n(78030);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),o=(0,i.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);var s=n(80473),c=n(2265),l=function(){let{resolvedTheme:e,setTheme:t}=(0,s.F)(),n="dark"===e?"light":"dark",[i,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{l(!0)},[]),(0,r.jsxs)("button",{type:"button","aria-label":i?"Switch to ".concat(n," theme"):"Toggle theme",className:"group rounded-full bg-white/50 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",onClick:()=>t(n),children:[(0,r.jsx)(a,{className:"h-6 w-6 fill-zinc-80 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-zinc-50 [@media(prefers-color-scheme:dark)]:stroke-zinc-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-zinc-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-600"}),(0,r.jsx)(o,{className:"hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-zinc-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-zinc-500"})]})}},40289:function(e,t,n){"use strict";n.d(t,{Dipsyland:function(){return a}});var r=n(57437),i=n(2265);n(35662);let a=()=>{let[{x:e,y:t,w:n},a]=(0,i.useReducer)((e,t)=>({...e,...t}),{x:0,y:0,w:0,h:0}),o=(0,i.useRef)(null),s=(0,i.useRef)(null),c=(0,i.useRef)(null),l=(0,i.useRef)(null),d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=o.current;if(null===e)return;let t=()=>{let{innerWidth:e,innerHeight:t}=window;a({w:e,h:t})},n=t=>{let{screenY:n}=t,{clientWidth:r,clientHeight:i}=e;a({y:-n/i/2,w:r,h:i})};return window.addEventListener("resize",t),window.addEventListener("mousemove",n),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("mousemove",n)}},[]),(0,r.jsx)("div",{className:"dipsyland root-el relative",children:(0,r.jsxs)("div",{className:"container-el fixed w-full overflow-hidden",ref:o,children:[(0,r.jsx)("div",{className:"background-img sky",ref:s}),(0,r.jsx)("div",{className:"background-img cloud",ref:c,style:{marginLeft:"".concat(5*e-n,"px"),bottom:"".concat(10*t-50,"px")}}),(0,r.jsx)("div",{className:"background-img city",ref:l,style:{marginLeft:"".concat(40*e-n,"px"),bottom:"".concat(50*t-50,"px")}}),(0,r.jsx)("div",{className:"background-img grass",ref:d,style:{marginLeft:"".concat(80*e-n,"px"),bottom:"".concat(100*t-50,"px")}})]})})}},22810:function(e,t,n){"use strict";n.d(t,{SvgLink:function(){return c}});var r=n(57437),i=n(2265);n(70039);let a=e=>{let{alwaysShow:t,title:n,children:a}=e,[o,s]=(0,i.useState)(null!=t&&t);return(0,r.jsxs)("div",{className:"tooltip-root",onMouseOver:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:[(0,r.jsx)("div",{className:"title",style:{opacity:"".concat(o?1:0)},children:n}),a]})};var o=n(66648),s=n(80473);let c=e=>{let{title:t,href:n,icon:i}=e,{resolvedTheme:c}=(0,s.F)();return(0,r.jsx)(a,{title:t,children:(0,r.jsx)("a",{href:n,children:(0,r.jsx)(o.default,{width:32,height:32,src:"dark"!==c?"/svg/".concat(i,".svg"):"/svg/dark/".concat(i,".svg"),alt:"icon"})})})}},16305:function(){},35662:function(){},28840:function(){},70039:function(){}},function(e){e.O(0,[9156,6523,231,7053,5223,2971,7023,1744],function(){return e(e.s=83041)}),_N_E=e.O()}]);