(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9142:function(e,l,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,6068,23)),Promise.resolve().then(t.t.bind(t,5714,23)),Promise.resolve().then(t.bind(t,3633)),Promise.resolve().then(t.bind(t,5458))},3633:function(e,l,t){"use strict";t.d(l,{ToolTip:function(){return i}});var n=t(7437),r=t(2265);t(39);let i=e=>{let{alwaysShow:l,title:t,children:i}=e,[s,a]=(0,r.useState)(null!=l&&l);return(0,n.jsxs)("div",{className:"tooltip-root",onMouseOver:()=>{a(!0)},onMouseLeave:()=>{a(!1)},children:[(0,n.jsx)("div",{className:"title",style:{opacity:"".concat(s?1:0)},children:t}),i]})}},5458:function(e,l,t){"use strict";t.d(l,{Works:function(){return b}});var n=t(7437),r=t(2265),i=t(5527);i.twf="#2070e4",t(5035);var s=t(4697);let a=e=>{let{tag:l,removable:t=!1,onClick:r}=e;return(0,n.jsx)("a",{className:"tag bg-tag hover:bg-tag-hover",onClick:r,title:t?"Toggle to remove this filter":"Toggle to add this filter",children:(0,n.jsxs)("div",{className:"flex items-center align-center justify-center",children:[l in i&&(0,n.jsx)("div",{className:"color rounded-full",style:{backgroundColor:i[l]}}),(0,n.jsx)("div",{children:l}),t&&(0,n.jsx)("div",{className:"cross",children:(0,n.jsx)(s.Z,{size:"sm"})})]})})};t(8452);var o=t(9424);t(2873);let c=(0,r.forwardRef)(function(e,l){let{href:t}=e;return(0,n.jsx)("div",{className:"live-root",ref:l,children:(0,n.jsxs)("a",{className:"live",href:t,children:[(0,n.jsx)("div",{className:"triangle"}),(0,n.jsx)("div",{className:"gradient"}),(0,n.jsx)("div",{className:"text",children:"Live"})]})})}),u=(0,r.forwardRef)(function(e,l){var t,r;let{work:i,onTagClick:s,category:u}=e;return(0,n.jsxs)(o.E.div,{className:"rect shadow-hover",id:i.id,layoutId:i.id,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.3},children:[(0,n.jsxs)("div",{className:"work-ripple-outside",children:[(0,n.jsx)(o.E.h5,{className:"title",children:(0,n.jsx)(o.E.a,{className:"title prevent-ripple-full-screen",href:"/posts/".concat(i.title),children:i.title})}),(0,n.jsx)(o.E.small,{className:"prevent-ripple-full-screen",onClick:()=>{s(i.time)},children:(0,n.jsx)("i",{children:i.time})}),(0,n.jsxs)("div",{className:"brief",children:[(0,n.jsx)("span",{children:(null!==(r=i.brief)&&void 0!==r?r:"")+" "}),"story"in i&&"more"in i?(0,n.jsx)("a",{className:"title",href:"/posts/".concat(i.title),children:"more"}):null]}),(0,n.jsx)("div",{className:"tags prevent-ripple-full-screen",children:null===(t=i.tags)||void 0===t?void 0:t.map(e=>(0,n.jsx)(a,{tag:e,onClick:()=>{s(e)}},e))})]}),void 0!==i.liveLink&&(0,n.jsx)(c,{href:i.liveLink})]})});var d=t(1682),v=t(4875),m=t(5424),h=t(5082),f=t(9012),p=t(174);t(7395),t(9347),t(6458);var x=e=>{let l=document.createElement("textarea");l.value=e,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)};let j=e=>{let l=(0,r.useRef)(null);return(0,n.jsx)("code",{ref:l,onClick:()=>{var e,t,n,r,i;null!==l.current&&(null!==(n=null===(t=window)||void 0===t?void 0:null===(e=t.getSelection())||void 0===e?void 0:e.toString())&&void 0!==n?n:"")===""&&x(null!==(i=null===(r=l.current)||void 0===r?void 0:r.innerText)&&void 0!==i?i:"")},...e})},g=e=>{let{children:l}=e,t=l.replace(/^(```.+)( showLineNumbers)$/gm,"$1 showLineNumbers").replace(/(\S)\n/gm,"$1  \n");return(0,n.jsx)(d.U,{className:"markdown",remarkPlugins:[v.Z,h.Z],rehypePlugins:[p.Z,f.Z,m.Z],components:{code:j},children:t})};t(7446),t(7024);let N=e=>{let{availables:l,value:t,onChange:i,tagGraph:s}=e,[o,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(0),[v,m]=(0,r.useState)(!1),h=(0,r.useRef)(null),f=(0,r.useRef)(null),p=(0,r.useMemo)(()=>{let e=l.filter(e=>!t.includes(e)),n=void 0===s?e:t.reduce((e,l)=>e.filter(e=>{var t;return null===(t=s[l])||void 0===t?void 0:t.has(e)}),e);if(""===o)return n;{let e=new RegExp("^".concat(o.toLowerCase()));return n.filter(l=>l.toLowerCase().match(e))}},[l,t,o,s]),x=e=>{i(t.filter(l=>l!==e)),null!==h.current&&h.current.focus()},j=e=>{var l;let n=null===(l=e.match(/^(.+)[\s,]*$/g))||void 0===l?void 0:l[0];void 0===n||t.includes(n)||i([...t,n]),c(""),d(0),null!=h.current&&h.current.focus()},g=v&&p.length>0;return(0,n.jsxs)("div",{className:"input-root",children:[(0,n.jsxs)("div",{className:"input-field-root ".concat(g?"auto":""," ").concat(v?"active":""," shadow-hover"),children:[t.map(e=>(0,n.jsx)(a,{tag:e,onClick:()=>{x(e)},removable:!0},e)),(0,n.jsx)("label",{className:"input-field",children:(0,n.jsx)("input",{onBlur:()=>{m(!1)},onFocus:()=>{m(!0)},onInput:()=>{","===o[o.length-1]&&j(o)},onKeyDown:e=>{switch(e.key){case"Tab":case"Enter":e.preventDefault(),p.length>u?j(p[u]):j(o);break;case"Backspace":""===o&&(t.pop(),i([...t]));break;case"ArrowUp":d(e=>(e-1+p.length)%p.length),null!=f.current&&(f.current.scrollTop=30*Math.max(0,u-3)),e.preventDefault();break;case"ArrowDown":d(e=>(e+1)%p.length),null!=f.current&&(f.current.scrollTop=30*Math.max(0,u-3)),e.preventDefault();break;case"Escape":null!=h.current&&h.current.blur()}},ref:h,value:o,onChange:e=>{c(e.target.value)}})})]}),(0,n.jsx)("div",{className:"autofill-root",style:{display:g?"block":"none"},children:(0,n.jsx)("div",{className:"autofill-container",ref:f,children:p.map((e,l)=>(0,n.jsx)("div",{className:"autofill-item ".concat(l===u?"active":""),onMouseDown:e=>{e.preventDefault()},onClick:()=>{j(e)},children:e},e))})})]})};var k=t(161);let w=e=>"object"==typeof e&&null!==e&&"tagName"in e&&(null==e?void 0:e.tagName)==="A";function b(e){let{allWorks:l,category:t,defaultFilters:i,meta:s}=e,[a,o]=(0,r.useState)(i),c=(0,r.useMemo)(()=>0===a.length?l:l.filter(e=>{let{tags:l=[],time:t,title:n}=e,r=l.concat([t,n]).filter(e=>e).map(e=>e.toLowerCase());return a.filter(e=>r.includes(e.toLowerCase())).length===a.length}),[l,a]),d=(0,r.useMemo)(()=>t[0].toUpperCase()+t.substring(1),[]),v=(0,r.useMemo)(()=>l.map(e=>{let{title:l,time:t,tags:n=[]}=e;return n.concat(t,l)}).flat().filter(e=>void 0!==e).sort().filter((e,l,t)=>""!==e&&t.indexOf(e)===l),[l]),m=function(e){let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l&&o([]),""===e||a.includes(e)||o([...a,e])},h=c.reduce((e,l)=>{var t,n;return null!==(n=null===(t=l.tags)||void 0===t?void 0:t.reduce((e,t)=>{var n,r,i,s;return{...e,[t]:new Set(Array.from(null!==(n=e[t])&&void 0!==n?n:[]).concat(null!==(r=l.tags)&&void 0!==r?r:[]).concat([l.title])),[l.title]:new Set(Array.from(null!==(i=e[t])&&void 0!==i?i:[]).concat(null!==(s=l.tags)&&void 0!==s?s:[]).concat([l.title]))}},e))&&void 0!==n?n:e},{});return(0,n.jsx)("div",{className:"works card",children:(0,n.jsx)("div",{className:"container-el",children:(0,n.jsxs)("div",{className:"my-work",children:[(0,n.jsxs)("h1",{children:["My ",d]}),(0,n.jsx)("div",{className:"description",onClick:e=>{let{target:l}=e;if(w(l)){let e=l.innerText;"all"!==e?m(e,!0):m("",!0)}},children:(0,n.jsx)(g,{children:s.description})}),(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsx)("div",{className:"label",children:"Filter:"}),(0,n.jsx)(N,{availables:v,value:a,onChange:o,tagGraph:h})]}),(0,n.jsxs)("div",{className:"works",children:[(0,n.jsx)(k.M,{children:c.map(e=>(0,n.jsx)(u,{work:e,onTagClick:m,category:t},e.id))}),(0,n.jsx)("div",{className:"placeholder"}),(0,n.jsx)("div",{className:"placeholder"})]})]})})})}},7024:function(){},2873:function(){},9347:function(){},6068:function(){},5714:function(){},5035:function(){},39:function(){},8452:function(){},7446:function(){}},function(e){e.O(0,[454,156,523,954,173,544,971,23,744],function(){return e(e.s=9142)}),_N_E=e.O()}]);