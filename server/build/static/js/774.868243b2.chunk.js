"use strict";(self.webpackChunkazw_meet=self.webpackChunkazw_meet||[]).push([[774],{9530:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(1940),a=t(184);const i=e=>(0,a.jsx)(n.Z,{open:e.isOpen,style:{maxWidth:null===e||void 0===e?void 0:e.maxWidth,margin:"0 auto"},fullWidth:!0,children:e.children})},1640:(e,r,t)=>{function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,{Z:()=>N});var a=t(3366),i=t(7462),s=t(2791),o=t(8182),c=t(767),l=(t(76),t(2110),t(1346));function d(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.O)(r)}var u=function(){var e=d.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var h=t(4036),m=t(551),v=t(5432),f=t(6597);function k(e){return(0,f.Z)("MuiCircularProgress",e)}(0,t(208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,y,g,x,S=t(184);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let w,b,P,C;const M=44,D=u(w||(w=p||(p=n(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),j=u(b||(b=y||(y=n(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),z=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r["color".concat((0,h.Z)(t.color))]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:t.palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&d(P||(P=g||(g=n(["\n      animation: "," 1.4s linear infinite;\n    "]))),D)})),O=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),_=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r["circle".concat((0,h.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&d(C||(C=x||(x=n(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),j)})),N=s.forwardRef((function(e,r){const t=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:l=!1,size:d=40,style:u,thickness:v=3.6,value:f=0,variant:p="indeterminate"}=t,y=(0,a.Z)(t,Z),g=(0,i.Z)({},t,{color:s,disableShrink:l,size:d,thickness:v,value:f,variant:p}),x=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,i={root:["root",t,"color".concat((0,h.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,h.Z)(t)),a&&"circleDisableShrink"]};return(0,c.Z)(i,k,r)})(g),w={},b={},P={};if("determinate"===p){const e=2*Math.PI*((M-v)/2);w.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(f),w.strokeDashoffset="".concat(((100-f)/100*e).toFixed(3),"px"),b.transform="rotate(-90deg)"}return(0,S.jsx)(z,(0,i.Z)({className:(0,o.Z)(x.root,n),style:(0,i.Z)({width:d,height:d},b,u),ownerState:g,ref:r,role:"progressbar"},P,y,{children:(0,S.jsx)(O,{className:x.svg,ownerState:g,viewBox:"".concat(22," ").concat(22," ").concat(M," ").concat(M),children:(0,S.jsx)(_,{className:x.circle,style:w,ownerState:g,cx:M,cy:M,r:(M-v)/2,fill:"none",strokeWidth:v})})}))}))}}]);
//# sourceMappingURL=774.868243b2.chunk.js.map