(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{4025:function(e,l,t){"use strict";t.d(l,{Code:function(){return a}});var n=t(7437),r=t(2265),i=e=>{let l=document.createElement("textarea");l.value=e,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)};let a=e=>{let l=(0,r.useRef)(null);return(0,n.jsx)("code",{ref:l,onClick:()=>{var e,t,n,r,a;null!==l.current&&(null!==(n=null===(t=window)||void 0===t?void 0:null===(e=t.getSelection())||void 0===e?void 0:e.toString())&&void 0!==n?n:"")===""&&i(null!==(a=null===(r=l.current)||void 0===r?void 0:r.innerText)&&void 0!==a?a:"")},title:"Click to copy",...e})}},3530:function(e,l,t){"use strict";t.d(l,{Works:function(){return C}});var n=t(7437),r=t(2265),i=t(5527);i.twf="#2070e4",t(5035);var a=t(4697);let s=e=>{let{tag:l,removable:t=!1,onClick:r}=e;return(0,n.jsx)("a",{className:"tag bg-tag hover:bg-tag-hover",onClick:r,title:t?"Toggle to remove this filter":"Toggle to add this filter",children:(0,n.jsxs)("div",{className:"flex items-center align-center justify-center",children:[l in i&&(0,n.jsx)("div",{className:"color rounded-full",style:{backgroundColor:i[l]}}),(0,n.jsx)("div",{children:l}),t&&(0,n.jsx)("div",{className:"cross",children:(0,n.jsx)(a.Z,{size:"sm"})})]})})};t(8452);var c=t(9424);t(2873);let o=(0,r.forwardRef)(function(e,l){let{href:t}=e;return(0,n.jsx)("div",{className:"live-root",ref:l,children:(0,n.jsxs)("a",{className:"live",href:t,children:[(0,n.jsx)("div",{className:"triangle"}),(0,n.jsx)("div",{className:"gradient"}),(0,n.jsx)("div",{className:"text",children:"Live"})]})})}),d=e=>e.replace(/\W+/g,"-").replace(/-$/,"");var u=t(2958),v=t(674);let m=(0,r.forwardRef)(function(e,l){var t,r,i,a;let{work:m,onTagClick:h,category:f}=e;return(0,n.jsxs)(c.E.div,{className:"rect shadow-hover",id:m.title,layoutId:m.title,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.3},children:[(0,n.jsxs)("div",{className:"work-ripple-outside",children:[(0,n.jsx)(c.E.h5,{className:"title",children:(0,n.jsx)(c.E.a,{className:"title prevent-ripple-full-screen",href:null!==(i=null!==(r=m.titleLink)&&void 0!==r?r:m.url)&&void 0!==i?i:"/posts/".concat(d(m.title)),children:m.title})}),(0,n.jsx)(c.E.small,{className:"prevent-ripple-full-screen",onClick:()=>{h(m.time)},children:(0,n.jsx)("i",{children:m.time})}),!m.time&&(0,n.jsx)(c.E.small,{className:"prevent-ripple-full-screen",children:(0,n.jsx)("i",{children:m.date&&(0,u.WU)((0,v.D)(m.date),"LLLL d, yyyy")})}),(0,n.jsxs)("div",{className:"brief",children:[(0,n.jsx)("span",{children:(null!==(a=m.brief)&&void 0!==a?a:"")+" "}),"story"in m&&"more"in m?(0,n.jsx)("a",{className:"title",href:"/posts/".concat(m.title),children:"more"}):null]}),(0,n.jsx)("div",{className:"tags prevent-ripple-full-screen",children:null===(t=m.tags)||void 0===t?void 0:t.map(e=>(0,n.jsx)(s,{tag:e,onClick:()=>{h(e)}},e))})]}),void 0!==m.liveLink&&(0,n.jsx)(o,{href:m.liveLink})]})});var h=t(1682),f=t(4875),p=t(5424),x=t(5082),j=t(9012),g=t(174);t(7395),t(9347),t(6458);var N=t(4025);let k=e=>{let{children:l}=e,t=l.replace(/^(```.+)( showLineNumbers)$/gm,"$1 showLineNumbers").replace(/(\S)\n/gm,"$1  \n");return(0,n.jsx)(h.U,{className:"markdown",remarkPlugins:[f.Z,x.Z],rehypePlugins:[g.Z,j.Z,p.Z],components:{code:N.Code},children:t})};t(7446),t(7024);let w=e=>{let{availables:l,value:t,onChange:i,tagGraph:a}=e,[c,o]=(0,r.useState)(""),[d,u]=(0,r.useState)(0),[v,m]=(0,r.useState)(!1),h=(0,r.useRef)(null),f=(0,r.useRef)(null),p=(0,r.useMemo)(()=>{let e=l.filter(e=>!t.includes(e)),n=void 0===a?e:t.reduce((e,l)=>e.filter(e=>{var t;return null===(t=a[l])||void 0===t?void 0:t.has(e)}),e);if(""===c)return n;{let e=new RegExp("^".concat(c.toLowerCase()));return n.filter(l=>l.toLowerCase().match(e))}},[l,t,c,a]),x=e=>{i(t.filter(l=>l!==e)),null!==h.current&&h.current.focus()},j=e=>{var l;let n=null===(l=e.match(/^(.+)[\s,]*$/g))||void 0===l?void 0:l[0];void 0===n||t.includes(n)||i([...t,n]),o(""),u(0),null!=h.current&&h.current.focus()},g=v&&p.length>0;return(0,n.jsxs)("div",{className:"input-root",children:[(0,n.jsxs)("div",{className:"input-field-root ".concat(g?"auto":""," ").concat(v?"active":""," shadow-hover"),children:[t.map(e=>(0,n.jsx)(s,{tag:e,onClick:()=>{x(e)},removable:!0},e)),(0,n.jsx)("label",{className:"input-field",children:(0,n.jsx)("input",{onBlur:()=>{m(!1)},onFocus:()=>{m(!0)},onInput:()=>{","===c[c.length-1]&&j(c)},onKeyDown:e=>{switch(e.key){case"Tab":case"Enter":e.preventDefault(),p.length>d?j(p[d]):j(c);break;case"Backspace":""===c&&(t.pop(),i([...t]));break;case"ArrowUp":u(e=>(e-1+p.length)%p.length),null!=f.current&&(f.current.scrollTop=30*Math.max(0,d-3)),e.preventDefault();break;case"ArrowDown":u(e=>(e+1)%p.length),null!=f.current&&(f.current.scrollTop=30*Math.max(0,d-3)),e.preventDefault();break;case"Escape":null!=h.current&&h.current.blur()}},ref:h,value:c,onChange:e=>{o(e.target.value)}})})]}),(0,n.jsx)("div",{className:"autofill-root",style:{display:g?"block":"none"},children:(0,n.jsx)("div",{className:"autofill-container",ref:f,children:p.map((e,l)=>(0,n.jsx)("div",{className:"autofill-item ".concat(l===d?"active":""),onMouseDown:e=>{e.preventDefault()},onClick:()=>{j(e)},children:e},e))})})]})};var y=t(161);let b=e=>"object"==typeof e&&null!==e&&"tagName"in e&&(null==e?void 0:e.tagName)==="A";function C(e){let{allWorks:l,category:t,defaultFilters:i,meta:a}=e,[s,c]=(0,r.useState)(i),o=(0,r.useMemo)(()=>0===s.length?l:l.filter(e=>{let{tags:l=[],time:t,title:n}=e,r=l.concat([t,n]).filter(e=>e).map(e=>e.toLowerCase());return s.filter(e=>r.includes(e.toLowerCase())).length===s.length}),[l,s]),u=(0,r.useMemo)(()=>t[0].toUpperCase()+t.substring(1),[]),v=(0,r.useMemo)(()=>l.map(e=>{let{title:l,time:t,tags:n=[]}=e;return n.concat(t,l)}).flat().filter(e=>void 0!==e).sort().filter((e,l,t)=>""!==e&&t.indexOf(e)===l),[l]),h=function(e){let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l&&c([]),""===e||s.includes(e)||c([...s,e])},f=o.reduce((e,l)=>{var t,n;return null!==(n=null===(t=l.tags)||void 0===t?void 0:t.reduce((e,t)=>{var n,r,i,a;return{...e,[t]:new Set(Array.from(null!==(n=e[t])&&void 0!==n?n:[]).concat(null!==(r=l.tags)&&void 0!==r?r:[]).concat([l.title])),[l.title]:new Set(Array.from(null!==(i=e[t])&&void 0!==i?i:[]).concat(null!==(a=l.tags)&&void 0!==a?a:[]).concat([l.title]))}},e))&&void 0!==n?n:e},{});return(0,n.jsx)("div",{className:"works card",children:(0,n.jsx)("div",{className:"container-el",children:(0,n.jsxs)("div",{className:"my-work",children:[(0,n.jsxs)("h1",{children:["My ",u]}),(0,n.jsx)("div",{className:"description",onClick:e=>{let{target:l}=e;if(b(l)){let e=l.innerText;"all"!==e?h(e,!0):h("",!0)}},children:(0,n.jsx)(k,{children:a.description})}),(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsx)("div",{className:"label",children:"Filter:"}),(0,n.jsx)(w,{availables:v,value:s,onChange:c,tagGraph:f})]}),(0,n.jsxs)("div",{className:"works",children:[(0,n.jsx)(y.M,{children:o.map(e=>(0,n.jsx)(m,{work:e,onTagClick:h,category:t},d(e.title)))}),(0,n.jsx)("div",{className:"placeholder"}),(0,n.jsx)("div",{className:"placeholder"})]})]})})})}},7024:function(){},2873:function(){},9347:function(){},5035:function(){},8452:function(){},7446:function(){}}]);