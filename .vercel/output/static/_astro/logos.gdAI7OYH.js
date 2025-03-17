import{j as n,c as Q}from"./utils.Ch1JaNiN.js";import{r as U,g as V}from"./index.BM9YtLjs.js";var b={},L;function Y(){if(L)return b;L=1;function c(s){if(typeof window>"u")return;const m=document.createElement("style");return m.setAttribute("type","text/css"),m.innerHTML=s,document.head.appendChild(m),s}Object.defineProperty(b,"__esModule",{value:!0});var e=U();function j(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var t=j(e);c(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const h=e.forwardRef(function({style:m={},className:B="",autoFill:d=!1,play:u=!0,pauseOnHover:N=!1,pauseOnClick:R=!1,direction:r="left",speed:p=50,delay:k=0,loop:q=0,gradient:I=!1,gradientColor:S="white",gradientWidth:v=200,onFinish:O,onCycleComplete:X,onMount:z,children:x},T){const[E,Z]=e.useState(0),[w,F]=e.useState(0),[y,$]=e.useState(1),[M,G]=e.useState(!1),H=e.useRef(null),o=T||H,f=e.useRef(null),g=e.useCallback(()=>{if(f.current&&o.current){const a=o.current.getBoundingClientRect(),_=f.current.getBoundingClientRect();let i=a.width,l=_.width;(r==="up"||r==="down")&&(i=a.height,l=_.height),$(d&&i&&l&&l<i?Math.ceil(i/l):1),Z(i),F(l)}},[d,o,r]);e.useEffect(()=>{if(M&&(g(),f.current&&o.current)){const a=new ResizeObserver(()=>g());return a.observe(o.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[g,o,M]),e.useEffect(()=>{g()},[g,x]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const A=e.useMemo(()=>d?w*y/p:w<E?E/p:w/p,[d,E,w,y,p]),J=e.useMemo(()=>Object.assign(Object.assign({},m),{"--pause-on-hover":!u||N?"paused":"running","--pause-on-click":!u||N&&!R||R?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[m,u,N,R,r]),K=e.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof v=="number"?`${v}px`:v}),[S,v]),D=e.useMemo(()=>({"--play":u?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${k}s`,"--iteration-count":q?`${q}`:"infinite","--min-width":d?"auto":"100%"}),[u,r,A,k,q,d]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),W=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,i)=>t.default.createElement(e.Fragment,{key:i},e.Children.map(x,l=>t.default.createElement("div",{style:C,className:"rfm-child"},l)))),[C,x]);return M?t.default.createElement("div",{ref:o,style:J,className:"rfm-marquee-container "+B},I&&t.default.createElement("div",{style:K,className:"rfm-overlay"}),t.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:X,onAnimationEnd:O},t.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(x,a=>t.default.createElement("div",{style:C,className:"rfm-child"},a))),W(y-1)),t.default.createElement("div",{className:"rfm-marquee",style:D},W(y))):null});return b.default=h,b}var ee=Y();const te=V(ee),ae=()=>{const c=[{name:"Mercury",logo:"/logos/mercury.svg",width:143,height:26,href:"https://mercury.com"},{name:"Watershed",logo:"/logos/watershed.svg",width:154,height:31,href:"https://watershed.com"},{name:"Retool",logo:"/logos/retool.svg",width:113,height:22,href:"https://retool.com"},{name:"Descript",logo:"/logos/descript.svg",width:112,height:27,href:"https://descript.com"}],e=[{name:"Perplexity",logo:"/logos/perplexity.svg",width:141,height:32,href:"https://perplexity.com"},{name:"Monzo",logo:"/logos/monzo.svg",width:104,height:18,href:"https://monzo.com"},{name:"Ramp",logo:"/logos/ramp.svg",width:105,height:28,href:"https://ramp.com"},{name:"Raycast",logo:"/logos/raycast.svg",width:128,height:33,href:"https://raycast.com"},{name:"Arc",logo:"/logos/arc.svg",width:90,height:28,href:"https://arc.com"}];return n.jsx("section",{className:"pb-28 lg:pb-32",children:n.jsxs("div",{className:"container space-y-10 lg:space-y-16",children:[n.jsx("div",{className:"text-center",children:n.jsxs("h2",{className:"mb-4 text-balance text-xl font-bold md:text-2xl lg:text-3xl",children:["Powering the world's best product teams.",n.jsx("br",{className:"max-md:hidden"}),n.jsx("span",{className:"text-muted-foreground",children:"From next-gen startups to established enterprises."})]})}),n.jsxs("div",{className:"flex w-full flex-col items-center gap-8",children:[n.jsx(P,{companies:c,gridClassName:"grid-cols-4"}),n.jsx(P,{companies:e,gridClassName:"grid-cols-5",direction:"right"})]})]})})},P=({companies:c,gridClassName:e,direction:j})=>n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"hidden md:block",children:n.jsx("div",{className:Q("grid items-center justify-items-center gap-x-20 lg:gap-x-28",e),children:c.map((t,h)=>n.jsx("a",{href:t.href,target:"_blank",children:n.jsx("img",{src:t.logo,alt:`${t.name} logo`,width:t.width,height:t.height,className:"object-contain transition-opacity hover:opacity-70"})},h))})}),n.jsx("div",{className:"md:hidden",children:n.jsx(te,{direction:j,pauseOnHover:!0,children:c.map((t,h)=>n.jsx("a",{href:t.href,target:"_blank",className:"mx-8 inline-block transition-opacity hover:opacity-70",children:n.jsx("img",{src:t.logo,alt:`${t.name} logo`,width:t.width,height:t.height,className:"object-contain"})},h))})})]});export{ae as Logos};
