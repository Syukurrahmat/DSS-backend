import{j as e,M as x,T as l}from"./createReactComponent-CTa0ICdI.js";import{V as T,u as y,b as u,f as d,L as w,q as C,H as S,v as t,G as V,F as D,J as v,C as H,A as L,K as M}from"./app-B_Z13nOW.js";import{M as G}from"./index-BA-WadA8.js";import{a as P}from"./index.tags-BMl43ewZ.js";import{H as z}from"./HeadingWithIcon-D2dFdTXW.js";import{S as i}from"./StatWithIcon-CqUgXY0l.js";import{t as A}from"./dateFormating-b7MTPZXO.js";import{I as F}from"./IconUsersGroup-CMwRIobE.js";import{I as W}from"./IconPlus-Rmn2fZV2.js";import{I as k}from"./IconExternalLink-C9IKUlwJ.js";import{F as c}from"./chunk-KRPLQIP4-noB-ZVK0.js";import{B as o}from"./icon-white-DmkG9gB2.js";import{G as B}from"./chunk-JARCRF6W-CMtdO6Jo.js";import{T as U,a as E,b as m}from"./chunk-4YMKQ5D4-DYkDvR0m.js";import{T as J,a as p}from"./chunk-IAXSQ4X2-DpX_T3X7.js";import"./icon-BHz-Vl6Z.js";import"./TagWithIcon-xFUgUEwJ.js";const s=M(),N=[s.accessor("name",{header:"Nama",cell:a=>e.jsxs(x,{spacing:"3",children:[e.jsx(H,{type:a.row.original.type}),e.jsx(l,{children:a.getValue()})]}),meta:{sortable:!0}}),s.accessor("type",{header:"Jenis ",cell:a=>e.jsx(P,{value:a.getValue()}),meta:{sortable:!0}}),s.accessor("address",{header:"Alamat",cell:a=>e.jsx(l,{noOfLines:2,whiteSpace:"wrap",children:a.getValue()})}),s.accessor("manager",{header:"Manager",cell:a=>e.jsx(t,{to:"../users/"+a.getValue().userId,children:e.jsx(o,{size:"sm",py:"5",variant:"outline",w:"full",justifyContent:"left",leftIcon:e.jsx(L,{size:"sm",name:a.getValue().name}),children:a.getValue().name})})}),s.accessor("createdAt",{header:"Dibuat pada",cell:a=>A(a.getValue()),meta:{sortable:!0}}),s.accessor("companyId",{header:"Aksi",cell:a=>e.jsx(t,{to:"/companies/"+a.getValue(),children:e.jsx(o,{colorScheme:"blue",size:"sm",leftIcon:e.jsx(k,{size:"16"}),children:"Detail"})})})];function ie(){const[a,h]=T(["list","map"]),{roleIs:f}=y(),{data:r}=u("/companies/overview",d);return r?e.jsxs(c,{gap:"2",flexDir:"column",children:[e.jsxs(x,{w:"full",spacing:"4",align:"start",children:[e.jsx(z,{Icon:e.jsx(F,{}),text:"Daftar Perusahaan"}),e.jsx(C,{}),e.jsx(S,{_onSubmit:null,w:"200px",bg:"white",placeholder:"Cari .."}),f("admin")&&e.jsx(t,{to:"./create",children:e.jsx(o,{leftIcon:e.jsx(W,{size:"20px"}),colorScheme:"green",children:"Tambah Perusahaan"})})]}),e.jsxs(c,{gap:"3",direction:["column","row"],justify:"space-between",flexWrap:"wrap",children:[e.jsx(i,{flex:"1 0 180px",icon:V,count:r.all,label:"Total Perusahaan",variant:"solid"}),e.jsx(B,{gap:"3",flex:"20 0 0px",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",children:r.type.map((n,j)=>{const{color:g,name:b,icon:I}=D[n.value];return e.jsx(i,{flex:"1 0 180px",icon:I,count:n.count,label:b,color:g},j)})})]}),e.jsxs(U,{display:"flex",flexDir:"column",flexGrow:"1",index:a,onChange:h,isLazy:!0,children:[e.jsxs(J,{children:[e.jsx(p,{children:"Daftar Perusahaan"}),e.jsx(p,{children:"Lihat Dalam Maps"})]}),e.jsxs(E,{flexGrow:"1",children:[e.jsx(m,{px:"0",children:e.jsx(v,{flexGrow:"1",apiUrl:"/companies",columns:N})}),e.jsx(m,{px:"0",h:"100%",children:e.jsx(R,{})})]})]})]}):e.jsx(w,{})}function R(){const{data:a}=u("/companies?all=true",d);return a?e.jsx(G,{h:"100%",minH:"350px",scrollWheelZoom:!1,data:a.rows}):"loading slurr"}export{ie as default};