"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6342],{91262:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(72389),s=t(85893);function o(e){let{children:n,fallback:t}=e;return(0,a.Z)()?(0,s.jsx)(s.Fragment,{children:n?.()}):t??null}},25784:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(92949),s=t(67294),o=t(52695),r=t(19604);const i={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"};var l=t(52263),d=t(85893);function p(){const e=(0,s.useRef)(null),{code:n,updateCode:t}=(0,o.m4)(),{sandpack:l}=(0,o.X3)();(0,s.useEffect)((()=>{const n=()=>{null!==e.current&&e.current.layout({})};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]);const{colorMode:p}=(0,a.I)();return(0,d.jsx)("div",{className:i.editorWrapper,children:(0,d.jsx)(r.ZP,{defaultLanguage:"javascript",value:n,defaultValue:n,defaultPath:"inmemory://model//src/index.ts",onChange:e=>{t(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:n=>{e.current=n},theme:"dark"===p?"vs-dark":"light"},l.activeFile)})}function c(e){const{code:n}=(0,o.m4)(),{sandpack:t}=(0,o.X3)(),[a,r]=(0,s.useState)(!1);(0,s.useEffect)((()=>(e.onCodeChanged?.(n),()=>{e.onCodeChanged?.(void 0)})));return(0,d.jsxs)(o.sp,{className:`${i[e.mode]} ${a?i.showOutput:""}`,children:[(0,d.jsx)(p,{}),(0,d.jsxs)("div",{className:i.previewWrapper,children:[(0,d.jsx)(o.Gj,{showOpenInCodeSandbox:!0,className:i.sandpackPreview}),null===t.bundlerState&&(0,d.jsx)("div",{className:i.sandpackLoadingOverlay})]}),(0,d.jsx)("button",{onClick:()=>{r(!a)},children:a?"Show Code":"Show Output"})]})}function u(e){const n=e.mode??"example";(0,s.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===n&&null!==e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}),[n]);const{siteConfig:t}=(0,l.Z)(),{colorMode:r}=(0,a.I)();return(0,d.jsx)(o.oT,{template:"vanilla-ts",theme:r,files:{"/src/index.ts":e.code},customSetup:{},options:{classes:{"sp-wrapper":i.spWrapper,"sp-layout":i.spLayout},externalResources:["https://beta.pixijs.com/playground.css",`https://pixijs.download/${t.customFields?.PIXI_VERSION}/pixi.min.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/graphics-extras.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/math-extras.js`,`https://pixijs.download/${t.customFields?.PIXI_VERSION}/packages/webworker.js`]},children:(0,d.jsx)(c,{mode:n,onCodeChanged:e.onCodeChanged})})}},34281:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var a=t(71732),s=t(91262),o=t(25784);const r="wrapper_vN_r";var i=t(85893);function l(){return(0,i.jsx)(a.Z,{title:"Playground",noFooter:!0,wrapperClassName:r,children:(0,i.jsx)(s.Z,{children:()=>{const e=function(){if(""!==location.hash)try{return JSON.parse(atob(location.hash.substring(1)))}catch{}}()?.code??"const app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://beta.pixijs.com/assets/bunny.png');\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n\napp.stage.addChild(bunny);\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    bunny.rotation += 0.1 * delta;\n});";return(0,i.jsx)(o.Z,{mode:"fullscreen",code:e,onCodeChanged:function(e){void 0!==e?function(e){const n=JSON.stringify(e);history.replaceState(null,"",`#${btoa(n)}`)}({code:e}):history.replaceState(null,"",location.pathname+location.search)}})}})})}}}]);