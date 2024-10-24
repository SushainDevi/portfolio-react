import{r as n,j as e}from"./jsx-runtime-DexIYAB0.js";import{a as D,t as F,T as Q,G as X,b as ee}from"./image-CPJH_dU8.js";import{E as te}from"./error-CXeg-k70.js";import{V as se}from"./visually-hidden-D_-SAMRB.js";import{c as ne,B as G,I as T,g as ae,b as oe,m as q,a as re,n as ie,t as R}from"./heading-BXSx-d1o.js";import{u as le}from"./useScrollToHash-BPPBGPYf.js";import{u as ce}from"./useWindowSize-mzNSXuUf.js";import{c as v}from"./config-jEIqSiHV.js";import{q as me,u as J,t as he,v as ue,w as de,L as S,x as V,c as fe,y as ge,M as W,z as Z,O as pe,S as U,b as ve}from"./components-b58Lx-Xn.js";import"./decoder-text-DiXhz2P5.js";import"./use-spring-CWVv0Hwz.js";import"./index-CsU7Rzbt.js";/**
 * @remix-run/react v2.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let O="positions";function Y({getKey:t,...s}){let{isSpaMode:a}=me(),i=J(),o=he();ue({getKey:t,storageKey:O});let l=n.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(a)return null;let m=((r,p)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let k=JSON.parse(sessionStorage.getItem(r)||"{}")[p||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(x){console.error(x),sessionStorage.removeItem(r)}}).toString();return n.createElement("script",de({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(O)}, ${JSON.stringify(l)})`}}))}const xe="_monogram_1jhi1_3",_e="_highlight_1jhi1_13",A={monogram:xe,highlight:_e},be=n.forwardRef(({highlight:t,className:s,...a},i)=>{const l=`${n.useId()}monogram-clip`;return e.jsxs("svg",{"aria-hidden":!0,className:ne(A.monogram,s),width:"48",height:"29",viewBox:"0 0 48 29",ref:i,...a,children:[e.jsx("defs",{children:e.jsx("clipPath",{id:l,children:e.jsx("path",{d:"M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z"})})}),e.jsx("rect",{clipPath:`url(#${l})`,width:"100%",height:"100%"}),t&&e.jsx("g",{clipPath:`url(#${l})`,children:e.jsx("rect",{className:A.highlight,width:"100%",height:"100%"})})]})}),je="_toggle_h91zx_3",ke="_inner_h91zx_33",ye="_icon_h91zx_49",N={toggle:je,inner:ke,icon:ye},Ne=({menuOpen:t,...s})=>e.jsx(G,{iconOnly:!0,className:N.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:N.inner,children:[e.jsx(T,{className:N.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(T,{className:N.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),we="_toggle_y3n84_3",Le="_circle_y3n84_57",Se="_mask_y3n84_107",Te="_path_y3n84_143",_={toggle:we,circle:Le,mask:Se,path:Te},H=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=D(),o=`${a}theme-toggle-mask`;return e.jsx(G,{iconOnly:!0,className:_.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:_.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:_.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:_.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:_.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:_.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},z=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Contact",pathname:"/contact"}],Ie=[{label:"linkdin",url:`https://bsky.app/profile/${v.bluesky}`,icon:"linkdin"},{label:"Figma",url:`https://www.figma.com/${v.figma}`,icon:"figma"},{label:"Github",url:`https://github.com/${v.github}`,icon:"github"}],Me="_navbar_1qbli_3",$e="_logo_1qbli_53",Ce="_nav_1qbli_3",Ee="_navList_1qbli_101",qe="_navLink_1qbli_117",Re="_navIcons_1qbli_203",Oe="_navIconLink_1qbli_251",Ae="_navIcon_1qbli_203",He="_mobileNav_1qbli_293",ze="_mobileNavLink_1qbli_353",f={navbar:Me,logo:$e,nav:Ce,navList:Ee,navLink:qe,navIcons:Re,navIconLink:Oe,navIcon:Ae,mobileNav:He,mobileNavLink:ze},Pe=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[o,l]=n.useState(),{theme:m}=D(),r=J(),p=ce(),x=n.useRef(),k=p.width<=ae.mobile||p.height<=696,I=le();n.useEffect(()=>{s(`${r.pathname}${r.hash}`)},[r]),n.useEffect(()=>{!o||r.pathname!=="/"||(s(`${r.pathname}${o}`),I(o,()=>l(null)))},[r.pathname,I,o]),n.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let b=[],j=[];const K=(d,g,u)=>!(d.bottom-u<g.top||d.top-u>g.bottom),E=()=>{for(const d of j)d.element.dataset.theme=""},w=()=>{const d=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!d)return;b=Array.from(d).map(u=>({element:u,top:u.offsetTop,bottom:u.offsetTop+u.offsetHeight}));const{scrollY:g}=window;E();for(const u of b)if(!(u.top-g>y||u.bottom-g<0))for(const L of j)K(u,L,g)?L.element.dataset.theme=h:L.element.dataset.theme=""};return m==="light"&&(j=Array.from(c).map(d=>{const g=d.getBoundingClientRect();return{element:d,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",w),w()),()=>{document.removeEventListener("scroll",w),E()}},[m,p,r.key]);const M=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},$=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&r.pathname==="/"&&(l(`#${h}`),c.preventDefault())},C=c=>{$(c),a&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:x,children:[e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${v.name}, ${v.role}`,onClick:C,children:e.jsx(be,{highlight:!0})}),e.jsx(Ne,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:z.map(({label:c,pathname:h})=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":M(h),onClick:$,children:c},c))}),e.jsx(P,{desktop:!0})]}),e.jsx(oe,{unmount:!0,in:a,timeout:q(R.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":c,ref:h,children:[z.map(({label:y,pathname:b},j)=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:b,className:f.mobileNavLink,"data-visible":c,"aria-current":M(b),onClick:C,style:re({transitionDelay:ie(Number(q(R.base.durationS))+j*50)}),children:y},y)),e.jsx(P,{}),e.jsx(H,{isMobile:!0})]})}),!k&&e.jsx(H,{"data-navbar-item":!0})]})},P=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Ie.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(T,{className:f.navIcon,icon:i})},s))}),Be="_progress_brpaj_3",De={progress:Be};function Fe(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:o}=V(),l=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),n.useEffect(()=>{if(!l.current)return;const r=new AbortController;return o!=="idle"?s(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(p=>p.finished)).then(()=>{r.signal.aborted||s(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:De.progress,"data-status":o,"data-visible":a,"data-complete":t,ref:l})}const Ge="_container_1g4r3_3",Je="_skip_1g4r3_23",B={container:Ge,skip:Je};const at=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:ee,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function ot(){var l;let{canonicalUrl:t,theme:s}=fe();const a=ge(),{state:i}=V();(l=a.formData)!=null&&l.has("theme")&&(s=a.formData.get("theme"));function o(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${v.ascii}
`,`Taking a peek huh? Check out the source code: ${v.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(Z,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(Q,{theme:s,toggleTheme:o,children:[e.jsx(Fe,{}),e.jsx(se,{showOnFocus:!0,as:"a",className:B.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Pe,{}),e.jsx("main",{id:"main-content",className:B.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(Y,{}),e.jsx(U,{})]})]})}function rt(){const t=ve();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(Z,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(te,{error:t}),e.jsx(Y,{}),e.jsx(U,{})]})]})}export{rt as ErrorBoundary,ot as default,at as links};