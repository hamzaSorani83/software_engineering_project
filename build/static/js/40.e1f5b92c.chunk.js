"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[40],{5315:function(e,s,a){a.d(s,{Z:function(){return i}});a(2791);var r=a(8820),n=a(6036),d=a(184);var t=function(e){var s=e.editItem,a=e.handleEdit,t=e.handleDelete;return(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"flex gap-x-2 items-center justify-center text-2xl w-full h-full",children:[(0,d.jsx)("button",{onClick:function(){return a(s)},children:(0,d.jsx)(n.UsQ,{className:"text-primary-500 action-edit"})}),(0,d.jsx)("button",{onClick:function(){return t(s.id)},children:(0,d.jsx)(r.VPh,{className:"text-red-500"})})]})})};var i=function(e){var s=e.withoutActions,a=e.pagesCount,r=e.currPage,n=e.headData,i=e.bodyData,c=e.renderHead,l=e.renderBody,o=e.setPage,u=e.handleEdit,h=e.handleDelete,x=Array.from(Array(a).keys());return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"table-wrapper",children:(0,d.jsxs)("table",{children:[n&&c?(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[n.map((function(e,s){return c(e,s)})),(0,d.jsx)("th",{children:"actions"})]})}):null,i&&l?(0,d.jsx)("tbody",{children:i.map((function(e,a){return l(e,a,void 0,s?void 0:(0,d.jsx)(t,{editItem:e,handleEdit:u,handleDelete:h}))}))}):null]})}),(0,d.jsx)("div",{className:"table__pagination",children:x.map((function(e){return(0,d.jsx)("div",{className:"table__pagination-item ".concat(r===e?"active":""),onClick:function(){return o(e)},children:e+1},e)}))})]})}},8040:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});a(2791);var r=a(3496),n=a(1087),d=a(184),t=function(e){var s=e.type,a=e.content;return(0,d.jsx)("span",{className:"badge badge-".concat(s),children:a})};function i(e){var s=e.Icon,a=e.count,r=e.title;return(0,d.jsxs)("div",{className:"status-card ",children:[(0,d.jsx)("div",{className:"status-card__icon",children:(0,d.jsx)(s,{})}),(0,d.jsxs)("div",{className:"status-card__info",children:[(0,d.jsx)("h4",{children:a}),(0,d.jsx)("span",{children:r})]})]})}var c=a(8820),l=a(9126),o=a(7692),u=a(5315),h={series:[{name:"Online Customers",data:[40,70,20,90,36,80,109,100]},{name:"Store Customers",data:[40,30,70,80,40,16,40,20]}],options:{chart:{background:"transparent"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},x={head:["user","total orders","total spending"],body:[{username:"john doe",order:"490",price:"$15,870"},{username:"frank iva",order:"250",price:"$12,251"},{username:"anthony baker",order:"120",price:"$10,840"},{username:"frank iva",order:"110",price:"$9,251"},{username:"anthony baker",order:"80",price:"$8,840"}]},j=function(e,s){return(0,d.jsx)("th",{children:e},s)},p=function(e,s){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.username}),(0,d.jsx)("td",{children:e.order}),(0,d.jsx)("td",{children:e.price})]},s)},m={header:["order id","user","total price","date","status"],body:[{id:"#OD1711",user:"john doe",date:"17 Jun 2021",price:"$900",status:"shipping"},{id:"#OD1712",user:"frank iva",date:"1 Jun 2021",price:"$400",status:"paid"},{id:"#OD1713",user:"anthony baker",date:"27 Jun 2021",price:"$200",status:"pending"},{id:"#OD1712",user:"frank iva",date:"1 Jun 2021",price:"$400",status:"paid"},{id:"#OD1713",user:"anthony baker",date:"27 Jun 2021",price:"$200",status:"refund"}]},v=[{Icon:c.SLZ,count:"1,995",title:"Total sales"},{Icon:l.s7u,count:"2,001",title:"Daily visits"},{Icon:c.$0k,count:"2,632",title:"Total income"},{Icon:o.zb0,count:"1,711",title:"Total orders"}],f={shipping:"primary",pending:"warning",paid:"success",refund:"danger"},b=function(e,s){return(0,d.jsx)("th",{children:e},s)},g=function(e,s){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.id}),(0,d.jsx)("td",{children:e.user}),(0,d.jsx)("td",{children:e.price}),(0,d.jsx)("td",{children:e.date}),(0,d.jsx)("td",{children:(0,d.jsx)(t,{type:f[e.status],content:e.status})})]},s)};function y(){return(0,d.jsxs)("div",{className:"dashboard",children:[(0,d.jsx)("h2",{className:"page-header",children:" Dashboard "}),(0,d.jsxs)("div",{className:"grid grid-cols-12 gap-x-6",children:[(0,d.jsx)("div",{className:"lg:col-span-6 md:col-span-12 sm:col-span-12",children:(0,d.jsx)("div",{className:"grid grid-cols-12 gap-x-6",children:v.map((function(e,s){return(0,d.jsx)("div",{className:"col-span-6",children:(0,d.jsx)(i,{Icon:e.Icon,count:e.count,title:e.title})},s)}))})}),(0,d.jsx)("div",{className:"lg:col-span-6 md:col-span-12 sm:col-12",children:(0,d.jsx)("div",{className:"card full-height",children:(0,d.jsx)(r.Z,{options:h.options,series:h.series,height:"100%",type:"line"})})}),(0,d.jsx)("div",{className:"lg:col-span-4 md:col-span-4 sm:col-span-12 ",children:(0,d.jsxs)("div",{className:"card ",children:[(0,d.jsx)("div",{className:"card__header",children:(0,d.jsx)("h3",{children:"top customers"})}),(0,d.jsx)("div",{className:"card__body",children:(0,d.jsx)(u.Z,{headData:x.head,renderHead:j,bodyData:x.body,renderBody:p})}),(0,d.jsx)("div",{className:"card__footer",children:(0,d.jsx)(n.rU,{to:"/",children:"view all"})})]})}),(0,d.jsx)("div",{className:"lg:col-span-8 md:col-span-8 sm:col-span-12 ",children:(0,d.jsxs)("div",{className:"card ",children:[(0,d.jsx)("div",{className:"card__header",children:(0,d.jsx)("h3",{children:"latest orders"})}),(0,d.jsx)("div",{className:"card__body",children:(0,d.jsx)(u.Z,{headData:m.head,renderHead:b,bodyData:m.body,renderBody:g})}),(0,d.jsx)("div",{className:"card__footer",children:(0,d.jsx)(n.rU,{to:"/",children:"view all"})})]})})]})]})}}}]);
//# sourceMappingURL=40.e1f5b92c.chunk.js.map