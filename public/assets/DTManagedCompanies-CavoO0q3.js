import{r as c,j as e,N as i,M as r,G as m,Q as d,T as p}from"./createReactComponent-CTa0ICdI.js";import{O as u,J as x,F as h,v as j,X as g,K as b}from"./app-B_Z13nOW.js";import{M as y}from"./index-BA-WadA8.js";import{a as C}from"./index.tags-BMl43ewZ.js";import{t as D}from"./dateFormating-b7MTPZXO.js";import{I}from"./IconExternalLink-C9IKUlwJ.js";import{B as M}from"./icon-white-DmkG9gB2.js";const o=b(),f=[o.accessor("name",{header:"Nama",cell:a=>{const{color:t,icon:s}=h[a.row.original.type];return e.jsxs(r,{spacing:"3",children:[e.jsx(m,{rounded:"md",border:"2px solid",borderColor:t+".200",color:t+".500",p:"2",children:e.jsx(d,{as:s,boxSize:"18px"})}),e.jsx(p,{children:a.getValue()})]})},meta:{sortable:!0}}),o.accessor("type",{header:"Jenis ",cell:a=>e.jsx(C,{value:a.getValue()}),meta:{sortable:!0}}),o.accessor("createdAt",{id:"createdAt",header:"Dibuat Pada",cell:a=>D(a.getValue()),meta:{sortable:!0}}),o.accessor("companyId",{header:"Aksi",cell:a=>e.jsxs(r,{children:[e.jsx(j,{to:"/companies/"+a.getValue(),children:e.jsx(M,{colorScheme:"blue",size:"sm",leftIcon:e.jsx(I,{size:"16"}),children:"Detail"})}),e.jsx(g,{size:"sm",companyId:a.row.original.companyId})]})})];function A({data:a,...t}){const[s,n]=c.useState(null),l=s==null||s.length>0;return e.jsxs(i,{...t,children:[l&&e.jsx(y,{data:[],companiesData:s||[],as:s==null?u:void 0}),e.jsx(x,{mt:"4",apiUrl:`/users/${a.userId}/companies`,columns:f,setDataContext:n,emptyMsg:["Belum ada Node","Tambahkan Node sekarang"],hiddenPagination:!0})]})}export{A as M};