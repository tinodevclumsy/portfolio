"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[993],{7334:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(7294),o=n(4160),i=n(394);const r=i.default.header.withConfig({displayName:"StyledHeader",componentId:"sc-17yhskk-0"})(["position:fixed;top:0;left:0;width:100%;z-index:100;background-color:transparent;-webkit-transition:0.3s ease-in-out all;transition:0.3s ease-in-out all;"," @media (max-width:768px){","}"],(e=>e.$sticky&&(0,i.css)(["background-color:var(--background);-webkit-box-shadow:0 0 7px 2px rgba(0,0,0,0.1);box-shadow:0 0 7px 2px rgba(0,0,0,0.1);"])),(e=>e.open&&(0,i.css)(["background-color:transparent !important;-webkit-box-shadow:none !important;box-shadow:none !important;"]))),l=i.default.div.withConfig({displayName:"StyledHeader__HeaderContainer",componentId:"sc-17yhskk-1"})(["height:100px;z-index:100;"]),s=i.default.ul.withConfig({displayName:"StyledHeader__Menu",componentId:"sc-17yhskk-2"})(["@media (max-width:768px){display:flex;position:absolute;top:100%;right:0;flex-direction:column;text-align:right;transform:translateX(100%);-webkit-transition:0.2s ease-in-out all;transition:0.2s ease-in-out all;","}"],(e=>e.open&&(0,i.css)(["transform:translateX(0);"]))),c=i.default.a.withConfig({displayName:"StyledHeader__MenuItem",componentId:"sc-17yhskk-3"})(['position:relative;display:inline-block;&:hover{&::before{width:100%;}}&:before{height:2px;content:"";position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:0;background:var(--primary);-webkit-transition:0.2s ease-in-out all;transition:0.2s ease-in-out all;}']),d=i.default.div.withConfig({displayName:"StyledHeader__HeaderOverlay",componentId:"sc-17yhskk-4"})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;transition:background 0.3s;@media (max-width:768px){","}"],(e=>e.open&&(0,i.css)(["background-color:rgba(0,0,0,0.5);z-index:1;"])));var m=n(7814),p=n(9417);const u=i.default.a.withConfig({displayName:"TheHeader__Logo",componentId:"sc-6kh03-0"})(["font-family:var(--font);color:#fff;"]);var f=()=>{const{site:e}=(0,o.K2)("845761813"),t=(0,a.useMemo)((()=>e.siteMetadata.menuLinks),[e.siteMetadata.menuLinks]),{0:n,1:i}=(0,a.useState)(!1),{0:f,1:h}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=()=>{requestAnimationFrame((()=>{const e=window.scrollY||document.documentElement.scrollTop;i(e>0)}))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),a.createElement(a.Fragment,null,a.createElement(r,{$sticky:n,open:f},a.createElement(l,{className:"container flex justify-between items-center relative"},a.createElement("div",null,a.createElement(u,{href:"/"},"SEUNGJUN LEE.")),a.createElement("div",{className:"flex items-center"},a.createElement(m.G,{onClick:()=>h((e=>!e)),className:"block cursor-pointer md:hidden",icon:p.xiG,size:"lg"}),a.createElement(s,{className:"menu--list-top flex md:block",open:f},t.map(((e,t)=>a.createElement("li",{key:t,className:"menu--item inline-block mx-3.5"},a.createElement(c,{className:"py-5 text-white uppercase",href:e.link,onClick:()=>h(!1)},e.name)))))))),a.createElement(d,{open:f}))};const h=()=>a.createElement("footer",{className:"pb-2"},a.createElement("div",{className:"container"},a.createElement("p",{style:{fontSize:"12px",opacity:"0.5"}},"Copyright © 2023 Designed and Developed by SEUNGJUN LEE.")));var b=a.memo(h);const y=i.default.div.withConfig({displayName:"TheLayout__Container",componentId:"sc-1d0nf4y-0"})(["background-color:var(--background);"]);var x=e=>{let{children:t}=e;return a.createElement(y,{className:"relative z-0 layout"},a.createElement(f,null),a.createElement("div",{className:"content"},t),a.createElement(b,null))}},2055:function(e,t,n){const a=n(394).default.h2.withConfig({displayName:"Title",componentId:"sc-pfktuy-0"})(['position:relative;margin-bottom:50px;font-weight:700;font-family:var(--font);text-align:center;text-transform:uppercase;&::before{content:"";width:25px;height:5px;background-color:var(--primary);position:absolute;top:-20px;left:50%;transform:translateX(-50%);border-radius:3px;}']);t.Z=a},297:function(e,t,n){const a=(0,n(394).createGlobalStyle)(["*{font-family:'Montserrat',sans-serif;}:root{--primary:#e7c2bf;--secondary:#bc9534;--background:#1e2f56;--font:'Playfair Display',serif;}.primary-text{color:var(--primary);}.container{width:100%;max-width:1280px;padding:0 15px;margin:auto;}.transition{-webkit-transition:0.2s ease-in-out all;transition:0.2s ease-in-out all;}html{position:relative;font-size:16px;scroll-behavior:smooth;background-color:var(--background);color:#FFFFE0;overflow-x:hidden;}body{position:relative;overflow-x:hidden;}a{text-decoration:none !important;color:#000;cursor:pointer;}p{line-height:1.8em;}ol,ul{list-style:none;padding-left:0;list-style-type:none;}"]);t.Z=a},3123:function(e,t,n){n.r(t);var a=n(7294),o=n(297),i=n(7334),r=n(394),l=n(2055);const s=r.default.section.withConfig({displayName:"project-detail-template__Container",componentId:"sc-1lze8fw-0"})(["margin:150px 0 75px 0;"]),c=r.default.div.withConfig({displayName:"project-detail-template__StyledContent",componentId:"sc-1lze8fw-1"})(['h3{position:relative;margin:30px 0 15px;font-weight:600;&::before{content:"";width:15px;height:3px;background-color:var(--primary);position:absolute;top:-10px;left:0;border-radius:3px;}}a{color:var(--secondary);}.thumbnail{margin-bottom:30px;}ul li{position:relative;list-style-type:none;padding-left:20px;&::before{content:"•";position:absolute;top:0;left:-0;}}']);t.default=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:r,html:d}=n,{title:m}=r;return a.createElement(i.Z,null,a.createElement(o.Z,null),a.createElement(s,null,a.createElement("div",{className:"container"},a.createElement(l.Z,{className:"text-4xl"},m),a.createElement(c,{dangerouslySetInnerHTML:{__html:d}}))))}}}]);
//# sourceMappingURL=component---src-templates-project-detail-template-js-e6d859fbd18862c0a3ca.js.map