"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8610],{41714:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(67294);var a=t(86010),n=t(95999),o=t(88824),r=t(10833),l=t(35281),i=t(39960),c=t(40245),d=t(99703),u=t(90197),p=t(79985),m=t(85893);function h(e){const s=function(){const{selectMessage:e}=(0,o.c)();return s=>e(s,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:s}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:s(e.count),tagName:e.label})}function g(e){let{tag:s}=e;const t=h(s);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:t}),(0,m.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function x(e){let{tag:s,items:t,sidebar:a,listMetadata:o}=e;const r=h(s);return(0,m.jsxs)(c.Z,{sidebar:a,children:[(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)("h1",{children:r}),(0,m.jsx)(i.Z,{href:s.allTagsPath,children:(0,m.jsx)(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(p.Z,{items:t}),(0,m.jsx)(d.Z,{metadata:o})]})}function j(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(g,{...e}),(0,m.jsx)(x,{...e})]})}},25784:(e,s,t)=>{t.d(s,{Z:()=>p});var a=t(92949),n=t(67294),o=t(52695),r=t(19604);const l={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"};var i=t(52263),c=t(85893);function d(){const e=(0,n.useRef)(null),{code:s,updateCode:t}=(0,o.m4)(),{sandpack:i}=(0,o.X3)();(0,n.useEffect)((()=>{const s=()=>{null!==e.current&&e.current.layout({})};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}}),[]);const{colorMode:d}=(0,a.I)();return(0,c.jsx)("div",{className:l.editorWrapper,children:(0,c.jsx)(r.ZP,{defaultLanguage:"javascript",value:s,defaultValue:s,defaultPath:"inmemory://model//src/index.ts",onChange:e=>{t(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:s=>{e.current=s},theme:"dark"===d?"vs-dark":"light"},i.activeFile)})}function u(e){const{code:s}=(0,o.m4)(),{sandpack:t}=(0,o.X3)(),[a,r]=(0,n.useState)(!1);(0,n.useEffect)((()=>(e.onCodeChanged?.(s),()=>{e.onCodeChanged?.(void 0)})));return(0,c.jsxs)(o.sp,{className:`${l[e.mode]} ${a?l.showOutput:""}`,children:[(0,c.jsx)(d,{}),(0,c.jsxs)("div",{className:l.previewWrapper,children:[(0,c.jsx)(o.Gj,{showOpenInCodeSandbox:!0,className:l.sandpackPreview}),null===t.bundlerState&&(0,c.jsx)("div",{className:l.sandpackLoadingOverlay})]}),(0,c.jsx)("button",{onClick:()=>{r(!a)},children:a?"Show Code":"Show Output"})]})}function p(e){const s=e.mode??"example";(0,n.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===s&&null!==e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}),[s]);const{siteConfig:t}=(0,i.Z)(),{colorMode:r}=(0,a.I)();return(0,c.jsx)(o.oT,{template:"vanilla-ts",theme:r,files:{"/src/index.ts":e.code},customSetup:{},options:{classes:{"sp-wrapper":l.spWrapper,"sp-layout":l.spLayout},externalResources:["https://beta.pixijs.com/playground.css",`https://pixijs.download/${t.customFields?.PIXI_VERSION}/pixi.min.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/graphics-extras.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/math-extras.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/webworker.js`]},children:(0,c.jsx)(u,{mode:s,onCodeChanged:e.onCodeChanged})})}},40245:(e,s,t)=>{t.d(s,{Z:()=>l});var a=t(86010),n=t(71732),o=t(36624),r=t(85893);function l(e){const{sidebar:s,toc:t,children:l,...i}=e,c=s&&s.items.length>0;return(0,r.jsx)(n.Z,{...i,children:(0,r.jsx)("div",{className:"container margin-vert--lg",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(o.Z,{sidebar:s}),(0,r.jsx)("main",{className:(0,a.Z)("col",{"col--7":c&&t,"col--9":c&&!t,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),t&&(0,r.jsx)("div",{className:"col col--2",children:t})]})})})}},79972:(e,s,t)=>{t.d(s,{Z:()=>u});var a=t(86010),n=t(9460),o=t(15289),r=t(79224),l=t(99714),i=t(12046);const c="card_Yae6";var d=t(85893);function u(e){let{children:s,className:t}=e;const u=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--md"}();return(0,d.jsxs)(o.Z,{className:(0,a.Z)(u,t,c),children:[(0,d.jsx)(r.Z,{}),(0,d.jsx)(l.Z,{children:s}),(0,d.jsx)(i.Z,{})]})}},25889:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(90814),n=t(25784);const o="playgroundCodeBlock_UB3Y";var r=t(72389),l=t(85893);function i(e){const s=(0,r.Z)();return e.playground&&s?(0,l.jsx)("div",{className:o,children:(0,l.jsx)(n.Z,{code:e.children})}):(0,l.jsx)(a.Z,{...e})}}}]);