"use strict";(self.webpackChunkazw_meet=self.webpackChunkazw_meet||[]).push([[647],{9647:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var n=a(2791),r=a(364),l=a(1640),t=a(4874),i=a(6871),o=a(9530),d=a(6803),u=a(2325),m=a(184);const h=(0,r.$j)((e=>{var s,a,n;return{loading:null===(s=e.shared)||void 0===s?void 0:s.loading,changePasswordForm:null===(a=e.auth)||void 0===a?void 0:a.changePasswordForm,userId:null===(n=e.auth.user)||void 0===n?void 0:n.id}}),(e=>({startLoading:()=>e({type:d.s5}),changeUserPassword:(s,a,n,r)=>e((0,u.s4)(s,a,n,r)),closeChangePassword:()=>e({type:d.VH})})))((e=>{const s=(0,i.s0)(),{loading:a,changePasswordForm:r,userId:d}=e,{startLoading:u,changeUserPassword:h,closeChangePassword:c}=e,[p,w]=(0,n.useState)({current_password:"",new_password:"",confirm_new_password:""}),{current_password:g,new_password:v,confirm_new_password:x}=p,_=()=>{(0,t.Zn)(p)},j=e=>{w({...p,[e.target.name]:e.target.value})};return(0,m.jsx)(o.Z,{isOpen:r,children:(0,m.jsxs)("form",{className:"dialog",id:a?"formSubmitting":"",children:[(0,m.jsx)("h3",{children:"Change your password here"}),(0,m.jsxs)("div",{className:"dialog__rowSingleItem",children:[(0,m.jsx)("label",{htmlFor:"",children:"Old Password"}),(0,m.jsx)("input",{type:"password",name:"current_password",value:g,onChange:j})]}),a&&(0,m.jsx)(l.Z,{style:{position:"absolute",marginLeft:"40%"}}),(0,m.jsxs)("div",{className:"dialog__rowSingleItem",children:[(0,m.jsx)("label",{htmlFor:"",children:"New Password"}),(0,m.jsx)("input",{type:"password",name:"new_password",value:v,onChange:j})]}),(0,m.jsxs)("div",{className:"dialog__rowSingleItem",children:[(0,m.jsx)("label",{htmlFor:"",children:"Confirm New Password"}),(0,m.jsx)("input",{type:"password",name:"confirm_new_password",value:x,onChange:j})]}),(0,m.jsxs)("div",{className:"form__Buttons",children:[(0,m.jsx)("button",{type:"button",onClick:()=>{_(),c()},children:"Close"}),(0,m.jsx)("button",{type:"submit",onClick:e=>{if(e.preventDefault(),(0,t.WW)(p))return window.alert("All fields are required");u(),h(p,d,s,_)},children:"Submit"})]})]})})})),c=(0,r.$j)((e=>{var s,a,n,r,l,t,i;return{first_name:null===(s=e.auth.user)||void 0===s?void 0:s.first_name,last_name:null===(a=e.auth.user)||void 0===a?void 0:a.last_name,username:null===(n=e.auth.user)||void 0===n?void 0:n.username,email:null===(r=e.auth.user)||void 0===r?void 0:r.email,bio:null===(l=e.auth.user)||void 0===l?void 0:l.bio,userId:null===(t=e.auth.user)||void 0===t?void 0:t.id,loading:null===(i=e.shared)||void 0===i?void 0:i.loading}}),(e=>({startLoading:()=>e({type:d.s5}),updateUser:(s,a)=>e((0,u.sC)(s,a)),openChangePassword:()=>e({type:d.dH})})))((e=>{const{first_name:s,last_name:a,username:r,email:i,bio:o,userId:d,loading:u}=e,{startLoading:c,updateUser:p,openChangePassword:w}=e,[g,v]=(0,n.useState)({});(0,n.useEffect)((()=>{v({first_name:s,last_name:a,username:r,email:i,bio:o})}),[s,a,i,r,o]);const x=e=>{v({...g,[e.target.name]:e.target.value})};return(0,m.jsxs)("div",{className:"profile",id:u?"formSubmitting":"",children:[(0,m.jsx)("h2",{children:"Profile Details"}),(0,m.jsxs)("div",{className:"profile__row",children:[(0,m.jsxs)("span",{children:[(0,m.jsx)("label",{htmlFor:"",children:"First Name"}),(0,m.jsx)("input",{type:"text",name:"first_name",value:g.first_name,onChange:x})]}),(0,m.jsxs)("span",{children:[(0,m.jsx)("label",{htmlFor:"",children:"Last Name"}),(0,m.jsx)("input",{type:"text",name:"last_name",value:g.last_name,onChange:x})]})]}),u&&(0,m.jsx)(l.Z,{style:{position:"absolute",marginLeft:"30%"}}),(0,m.jsxs)("div",{className:"profile__row",children:[(0,m.jsxs)("span",{children:[(0,m.jsx)("label",{htmlFor:"",children:"Username"}),(0,m.jsx)("input",{type:"text",name:"username",value:g.username,onChange:x})]}),(0,m.jsxs)("span",{children:[(0,m.jsx)("label",{htmlFor:"",children:"Email"}),(0,m.jsx)("input",{type:"email",name:"email",value:g.email,onChange:x})]})]}),(0,m.jsxs)("div",{className:"profile__rowSingleItem",children:[(0,m.jsx)("label",{htmlFor:"",children:"Bio"}),(0,m.jsx)("textarea",{name:"bio",value:g.bio,onChange:x})]}),(0,m.jsxs)("div",{className:"profile__Buttons",children:[(0,m.jsx)("button",{type:"button",className:"change__password",onClick:w,children:"Change Password"}),(0,m.jsx)("button",{type:"submit",className:"update",onClick:e=>{if(e.preventDefault(),(0,t.WW)(g))return window.alert("Fill all fields to update your profile");c(),p(g,d)},children:"Update Profile"})]}),(0,m.jsx)(h,{})]})}))},4874:(e,s,a)=>{a.d(s,{WW:()=>n,Zn:()=>r});const n=e=>{for(const s in e)if(""==="".concat(e[s]))return!0;return!1},r=e=>{for(const s in e)e[s]=""}}}]);
//# sourceMappingURL=647.683b48b1.chunk.js.map