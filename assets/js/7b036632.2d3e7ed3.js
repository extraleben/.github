"use strict";(self.webpackChunkextraleben_games=self.webpackChunkextraleben_games||[]).push([[3832],{4937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var i=n(4848),a=n(8453),o=n(7293),s=n(4586);function r(e){const{siteConfig:{customFields:{gameData:{platforms:t,usks:n,genres:a}},themeConfig:{navbar:{logo:o}}}}=(0,s.A)(),r={marginBottom:0,listStyle:"none",paddingLeft:0},{tags:l}=e.frontMatter;let d={usk:-1,genres:[],platforms:[],extraleben:-1};const c=[{id:"usk",prefix:"USK",addValue:(e,t)=>Number(e),options:n},{id:"extraleben",prefix:"Extraleben:",addValue:(e,t)=>Number(e),options:[0,1,2,3,4,5]},{id:"genres",prefix:"Genre:",options:a,addValue:(e,t)=>(void 0===t&&(t=[]),console.log(e,t),[...t,e])},{id:"platforms",prefix:"Plattform:",options:t,addValue:(e,t)=>(void 0===t&&(t=[]),[...t,e])}].map((e=>{let{id:t,prefix:n,options:i,...a}=e;return{id:t,regex:new RegExp(`^${n} (${i.join("|")})$`),...a}}));e:for(let i of l){console.log(i);for(let{id:e,regex:t,addValue:n}of c){const a=t.exec(i);if(null!==a){d[e]=n(a[1],d[e]);continue e}}}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("aside",{style:{float:"right"},children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{colSpan:2,children:"Schnell\xfcbersicht"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"USK"}),(0,i.jsx)("td",{children:(0,i.jsxs)("a",{href:`https://usk.de/alle-lexikonbegriffe/usk-ab-${d.usk}-jahren/`,target:"_blank",children:["Freigegeben ab ",d.usk," Jahren"]})})]}),d.extraleben>-1&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Extraleben"}),(0,i.jsx)("td",{children:new Array(5).fill(null).map(((e,t)=>(0,i.jsx)("img",{src:`/${o.src}`,alt:o.alt,width:"25rem",style:{marginRight:"5px",filter:`saturate(${d.extraleben>t?1:0})`}})))})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Genres"}),(0,i.jsx)("td",{children:d.genres?.length?(0,i.jsx)("ul",{style:r,children:d.genres.map((e=>(0,i.jsx)("li",{children:e})))}):"Keine Genres"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Plattformen"}),(0,i.jsx)("td",{children:d.platforms?.length?(0,i.jsx)("ul",{style:r,children:d.platforms.map((e=>(0,i.jsx)("li",{children:e})))}):"Keine Plattformen"})]}),e.spieleratgeberId&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,children:(0,i.jsx)("a",{href:`https://spieleratgeber-nrw.de/spiel/${e.spieleratgeberId}/`,target:"_blank",children:"P\xe4dagogische Einsch\xe4tzung beim Spieleratgeber NRW"})})})]})]})})})}function l(e){let{id:t,timeCode:n=0}=e,a=`https://youtu.be/${t}`;return n&&(a+=`?t=${n}`),(0,i.jsx)("div",{children:(0,i.jsxs)("a",{href:a,children:[(0,i.jsx)("img",{src:`https://i3.ytimg.com/vi/${t}/maxresdefault.jpg`}),(0,i.jsx)("div",{children:a})]})})}const d={tags:["USK 12","Genre: Rollenspiel","Genre: Action-Adventure","Plattform: Steam","Extraleben: 4"]},c="Hogwarts Legacy",m={id:"spiele/hogwarts-legacy/index",title:"Hogwarts Legacy",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",source:"@site/docs/spiele/hogwarts-legacy/index.mdx",sourceDirName:"spiele/hogwarts-legacy",slug:"/spiele/hogwarts-legacy/",permalink:"/spiele/hogwarts-legacy/",draft:!1,unlisted:!1,tags:[{label:"USK 12",permalink:"/tags/usk-12"},{label:"Genre: Rollenspiel",permalink:"/tags/genre-rollenspiel"},{label:"Genre: Action-Adventure",permalink:"/tags/genre-action-adventure"},{label:"Plattform: Steam",permalink:"/tags/plattform-steam"},{label:"Extraleben: 4",permalink:"/tags/extraleben-4"}],version:"current",frontMatter:{tags:["USK 12","Genre: Rollenspiel","Genre: Action-Adventure","Plattform: Steam","Extraleben: 4"]},sidebar:"sidebar",previous:{title:"Spiele",permalink:"/category/spiele"}},u={},p=[];function h(e){const t={h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"hogwarts-legacy",children:"Hogwarts Legacy"}),"\n",(0,i.jsx)(r,{spieleratgeberId:"hogwarts-legacy",frontMatter:d}),"\n",(0,i.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),"\n",(0,i.jsx)(t.p,{children:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."}),"\n",(0,i.jsx)(o.A,{type:"note",icon:"",title:"Hier geht's zum Stream:",children:(0,i.jsx)(l,{id:"AicH7xEGE_0",timeCode:2724})}),"\n",(0,i.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7293:(e,t,n)=>{n.d(t,{A:()=>z});var i=n(6540),a=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var s=n(4164),r=n(1312),l=n(7559);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:t,className:n,children:i}=e;return(0,a.jsx)("div",{className:(0,s.A)(l.G.common.admonition,l.G.common.admonitionType(t),d.admonition,n),children:i})}function m(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:d.admonitionHeading,children:[(0,a.jsx)("span",{className:d.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:d.admonitionContent,children:t}):null}function p(e){const{type:t,icon:n,title:i,children:o,className:s}=e;return(0,a.jsxs)(c,{type:t,className:s,children:[(0,a.jsx)(m,{title:i,icon:n}),(0,a.jsx)(u,{children:o})]})}function h(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,a.jsx)(h,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,a.jsx)(p,{...g,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,a.jsx)(f,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(p,{...j,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,a.jsx)(p,{...y,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,a.jsx)(L,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const S={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const C={...{note:x,tip:v,info:k,warning:function(e){return(0,a.jsx)(p,{...w,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(p,{...N,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(x,{title:"secondary",...e}),important:e=>(0,a.jsx)(k,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(p,{...S,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function z(e){const t=o(e),n=(i=t.type,C[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),C.info));var i;return(0,a.jsx)(n,{...t})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);