"use strict";(self.webpackChunkazw_meet=self.webpackChunkazw_meet||[]).push([[538],{8538:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var n=t(364),a=t(6871),i=(t(9076),t(1640)),o=t(2325),s=t(6803),c=t(184);const l=(0,n.$j)((e=>{var r;return{loading:null===(r=e.shared)||void 0===r?void 0:r.loading}}),(e=>({startLoading:()=>e({type:s.s5}),activateUser:(r,t)=>e((0,o.Ot)({activation_token:r,history:t}))})))((e=>{const{activation_token:r}=(0,a.UO)(),t=(0,a.s0)(),{loading:n}=e,{startLoading:o,activateUser:s}=e;return(0,c.jsxs)("div",{className:"activate__account",id:n?"formSubmitting":"",children:[(0,c.jsx)("h1",{children:"Click on the button below to verify your account"}),n&&(0,c.jsx)(i.Z,{style:{position:"absolute",marginLeft:"1%"}}),(0,c.jsx)("button",{type:"button",onClick:()=>{o(),s(r,t)},children:"Verify"})]})}))},1640:(e,r,t)=>{function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,{Z:()=>N});var a=t(3366),i=t(7462),o=t(2791),s=t(8182),c=t(767),l=(t(76),t(2110),t(1346));function d(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.O)(r)}var u=function(){var e=d.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var v=t(4036),h=t(551),m=t(5432),f=t(6597);function k(e){return(0,f.Z)("MuiCircularProgress",e)}(0,t(208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,y,g,b,x=t(184);const S=["className","color","disableShrink","size","style","thickness","value","variant"];let w,Z,C,P;const j=44,_=u(w||(w=p||(p=n(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),M=u(Z||(Z=y||(y=n(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r["color".concat((0,v.Z)(t.color))]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:t.palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&d(C||(C=g||(g=n(["\n      animation: "," 1.4s linear infinite;\n    "]))),_)})),O=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),z=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r["circle".concat((0,v.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&d(P||(P=b||(b=n(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),M)})),N=o.forwardRef((function(e,r){const t=(0,h.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:o="primary",disableShrink:l=!1,size:d=40,style:u,thickness:m=3.6,value:f=0,variant:p="indeterminate"}=t,y=(0,a.Z)(t,S),g=(0,i.Z)({},t,{color:o,disableShrink:l,size:d,thickness:m,value:f,variant:p}),b=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,i={root:["root",t,"color".concat((0,v.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,v.Z)(t)),a&&"circleDisableShrink"]};return(0,c.Z)(i,k,r)})(g),w={},Z={},C={};if("determinate"===p){const e=2*Math.PI*((j-m)/2);w.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(f),w.strokeDashoffset="".concat(((100-f)/100*e).toFixed(3),"px"),Z.transform="rotate(-90deg)"}return(0,x.jsx)(D,(0,i.Z)({className:(0,s.Z)(b.root,n),style:(0,i.Z)({width:d,height:d},Z,u),ownerState:g,ref:r,role:"progressbar"},C,y,{children:(0,x.jsx)(O,{className:b.svg,ownerState:g,viewBox:"".concat(22," ").concat(22," ").concat(j," ").concat(j),children:(0,x.jsx)(z,{className:b.circle,style:w,ownerState:g,cx:j,cy:j,r:(j-m)/2,fill:"none",strokeWidth:m})})}))}))},9076:()=>{}}]);
//# sourceMappingURL=538.dd59cffc.chunk.js.map