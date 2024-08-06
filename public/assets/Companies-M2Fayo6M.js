import{j as e,H as x,C as t,T as n}from"./createReactComponent-m2GCamtz.js";import{u as I,k as u,p as y,L as T,r as w,G as C,v as o,U as D,F as S,H as V,C as H,V as L,J as U}from"./app-BlQRCkbL.js";import{M as F}from"./index-Dt6lv0Jl.js";import{a as G}from"./index.tags-vBYpzwqj.js";import{H as M}from"./HeadingWithIcon-DsJVocdS.js";import{S as i}from"./StatWithIcon-D4cwuTU-.js";import{u as v}from"./useHashBasedTabsIndex-Dzc-MKf8.js";import{t as z}from"./dateFormating-CjiM6gKV.js";import{I as A}from"./IconUsersGroup-D7nlVQeI.js";import{I as k}from"./IconPlus-Bm6anzmS.js";import{G as W}from"./chunk-JARCRF6W-CeVJ6vdb.js";import{F as c}from"./chunk-KRPLQIP4-1nj_ibqy.js";import{I as B}from"./IconExternalLink-pP3M5HlB.js";import{T as P,a as E,b as m,c as J,d as p}from"./chunk-IAXSQ4X2-BWbuaJl8.js";import{A as N}from"./chunk-V7PAE35Z-BuEgg6Tf.js";import"./TagWithIcon-BmQxVHBm.js";import"./index-B4MCLp8v.js";const s=U(),R=[s.accessor("name",{header:"Nama",cell:a=>e.jsxs(x,{spacing:"3",children:[e.jsx(H,{type:a.row.original.type}),e.jsx(n,{children:a.getValue()})]}),meta:{sortable:!0}}),s.accessor("type",{header:"Jenis ",cell:a=>e.jsx(G,{value:a.getValue()}),meta:{sortable:!0}}),s.accessor("address",{header:"Alamat",cell:a=>e.jsx(n,{noOfLines:2,whiteSpace:"wrap",children:a.getValue()})}),s.accessor("manager",{header:"Manager",cell:a=>e.jsx(o,{to:"../users/"+a.getValue().userId,children:e.jsx(t,{size:"sm",py:"5",variant:"outline",w:"full",justifyContent:"left",leftIcon:e.jsx(N,{size:"sm",name:a.getValue().name}),children:a.getValue().name})})}),s.accessor("createdAt",{header:"Dibuat pada",cell:a=>z(a.getValue()),meta:{sortable:!0}}),s.accessor("companyId",{header:"Aksi",cell:a=>e.jsx(o,{to:"/companies/"+a.getValue(),children:e.jsx(t,{colorScheme:"blue",size:"sm",leftIcon:e.jsx(B,{size:"16"}),children:"Detail"})})})];function ce(){const[a,d]=v(["list","map"]),{roleIs:h}=I(),{data:r}=u("/companies/summary",y);return r?e.jsxs(c,{gap:"2",flexDir:"column",children:[e.jsxs(x,{w:"full",spacing:"4",align:"start",children:[e.jsx(M,{Icon:e.jsx(A,{}),text:"Daftar Usaha"}),e.jsx(w,{}),e.jsx(C,{_onSubmit:null,w:"200px",bg:"white",placeholder:"Cari .."}),h("admin")&&e.jsx(o,{to:"./create",children:e.jsx(t,{leftIcon:e.jsx(k,{size:"20px"}),colorScheme:"green",children:"Tambah Usaha"})})]}),e.jsxs(c,{gap:"3",direction:["column","row"],justify:"space-between",flexWrap:"wrap",children:[e.jsx(i,{flex:"1 0 180px",icon:D,count:r.all,label:"Total Usaha",variant:"solid"}),e.jsx(W,{gap:"3",flex:"20 0 0px",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",children:r.type.map((l,f)=>{const{color:j,name:g,icon:b}=S[l.value];return e.jsx(i,{flex:"1 0 180px",icon:b,count:l.count,label:g,color:j},f)})})]}),e.jsxs(P,{display:"flex",flexDir:"column",flexGrow:"1",index:a,onChange:d,isLazy:!0,children:[e.jsxs(E,{children:[e.jsx(m,{children:"Daftar Usaha"}),e.jsx(m,{children:"Lihat Dalam Maps"})]}),e.jsxs(J,{flexGrow:"1",children:[e.jsx(p,{px:"0",children:e.jsx(V,{flexGrow:"1",apiUrl:"/companies",columns:R})}),e.jsx(p,{px:"0",h:"100%",children:e.jsx(O,{})})]})]})]}):e.jsx(T,{})}function O(){const{data:a}=u("/companies?all=true",L);return a?e.jsx(F,{h:"100%",minH:"350px",scrollWheelZoom:!1,data:a.result}):"loading slurr"}export{ce as default};