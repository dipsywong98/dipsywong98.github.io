(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7301],{65077:function(e,t,n){Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,32741)),Promise.resolve().then(n.bind(n,52137)),Promise.resolve().then(n.bind(n,50316)),Promise.resolve().then(n.bind(n,97001))},32741:function(e,t,n){"use strict";n.d(t,{Code:function(){return o}});var r=n(57437);n(2265);var l=n(87188);let o=e=>(0,r.jsx)(l.C,{children:t=>(0,r.jsx)("code",{...t,...e})})},87188:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(2265),l=e=>{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};let o=e=>{let{children:t}=e,n=(0,r.useRef)(null);return t({ref:n,onClick:()=>{var e,t,r,o,u;null!==n.current&&(null!==(r=null===(t=window)||void 0===t?void 0:null===(e=t.getSelection())||void 0===e?void 0:e.toString())&&void 0!==r?r:"")===""&&l(null!==(u=null===(o=n.current)||void 0===o?void 0:o.innerText)&&void 0!==u?u:"")},title:"Click to copy"})}},52137:function(e,t,n){"use strict";n.d(t,{CodeBlock:function(){return s}});var r=n(57437),l=n(2265);let o=async e=>{let{code:t,language:r}=e,{getHighlighter:l}=await Promise.all([n.e(3067),n.e(3506)]).then(n.bind(n,19434));return(await l({themes:["one-dark-pro"],langs:[r]})).codeToHtml(t,{lang:r,themes:{dark:"one-dark-pro",light:"one-dark-pro"}})};var u=n(87188),i=n(50316);let a=e=>["string","number"].includes(typeof e)?e:e instanceof Array?e.map(a).join(""):"object"==typeof e&&e?a(e.props.children):void 0,s=e=>{let{children:t,language:n}=e,[s,d]=(0,l.useState)(""),{interpolate:c}=(0,i.useWidgetValues)(),f=c(a(t));return(0,l.useEffect)(()=>{o({code:f,language:n}).then(e=>{d(e)}).catch(console.error)},[f]),(0,r.jsx)(u.C,{children:e=>""===s?(0,r.jsx)("pre",{className:"codeblock-loading",children:(0,r.jsx)("code",{...e,children:f.split("\n").map((e,t)=>(0,r.jsx)("span",{className:"line",children:e},t))})}):(0,r.jsx)("div",{...e,dangerouslySetInnerHTML:{__html:s}})})}},50316:function(e,t,n){"use strict";n.r(t),n.d(t,{WidgetValue:function(){return c},WidgetsRoot:function(){return s},useWidgetValues:function(){return d}});var r,l,o=n(57437),u=n(2265),i=n(27266);let a=(0,u.createContext)({getValues:()=>({}),getDebouncedValues:()=>({}),getValue:()=>"",getDebouncedValue:()=>"",setValue:()=>{},resetAllValues:()=>{},interpolate:e=>e});(r=l||(l={})).SET_VALUE="SET_VALUE",r.RESET_ALL_VALUES="RESET_ALL_VALUES";let s=e=>{let[t,n]=(0,u.useReducer)((e,t)=>{switch(t.type){case"SET_VALUE":return{...e,[t.payload.valueName]:t.payload.value};case"RESET_ALL_VALUES":return{}}},e.defaultValues),[r]=(0,i.Nr)(t,300),l={...e,value:{getValues:()=>Object.freeze(t),getValue:e=>{var n;return null!==(n=t[e])&&void 0!==n?n:""},setValue:(e,t)=>n({type:"SET_VALUE",payload:{valueName:e,value:t}}),resetAllValues:()=>n({type:"RESET_ALL_VALUES"}),interpolate:e=>Object.entries(r).reduce((e,t)=>{let[n,r]=t;return e.replaceAll("%[".concat(n,"]%"),r)},e),getDebouncedValues:()=>Object.freeze(r),getDebouncedValue:e=>{var t;return null!==(t=r[e])&&void 0!==t?t:""}}};return(0,o.jsx)(a.Provider,{...l})},d=()=>(0,u.useContext)(a),c=e=>{let{name:t}=e,{getValue:n}=d();return n(t)}},97001:function(e,t,n){"use strict";n.d(t,{WidgetInput:function(){return s}});var r=n(57437),l=n(2265),o=n(98591),u=n(24516);let i=l.forwardRef((e,t)=>{let{className:n,type:l,...i}=e;return(0,r.jsx)("input",{type:l,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.m6)((0,o.W)(t))}("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...i})});i.displayName="Input";var a=n(50316);let s=e=>{var t;let{name:n,...l}=e,{getValue:o,setValue:u}=(0,a.useWidgetValues)();return(0,r.jsx)(i,{value:null!==(t=o(n))&&void 0!==t?t:"",onChange:e=>{let{target:t}=e;return u(n,t.value)},placeholder:n,...l})}}},function(e){e.O(0,[8173,231,1068,2971,7023,1744],function(){return e(e.s=65077)}),_N_E=e.O()}]);