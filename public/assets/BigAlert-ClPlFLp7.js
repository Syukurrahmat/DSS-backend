import{K as i,j as e,a3 as x,a5 as h,a9 as u,a6 as p,H as m,C as t}from"./createReactComponent-m2GCamtz.js";import{W as d,I as j,v}from"./app-BlQRCkbL.js";import{I}from"./IconCirclePlus-D9W8Q483.js";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=i("outline","layout-navbar-expand","IconLayoutNavbarExpand",[["path",{d:"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M4 9h16",key:"svg-1"}],["path",{d:"M10 14l2 2l2 -2",key:"svg-2"}]]);const y=({title:o,description:r,detailPageURL:a,onCreateAgain:n,itemName:s,...l})=>{const c=d();return e.jsxs(x,{mt:"10",px:"6",py:"10",rounded:"lg",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:"2",...l,children:[e.jsx(h,{boxSize:"50px",mr:0}),e.jsx(u,{fontSize:"xl",children:o}),e.jsx(p,{maxW:"lg",whiteSpace:"pre-line",children:r}),e.jsxs(m,{mt:"4",children:[e.jsx(t,{leftIcon:e.jsx(j,{size:"20"}),colorScheme:"blue",variant:"outline",children:"Kembali",onClick:()=>c(-1)}),e.jsx(t,{leftIcon:e.jsx(I,{size:"20"}),colorScheme:"blue",children:"Buat lagi",onClick:n}),!!a&&!!s&&l.status==="success"&&e.jsx(v,{to:a,children:e.jsx(t,{leftIcon:e.jsx(f,{size:"20"}),colorScheme:"blue",children:"Lihat "+s,onClick:n})})]})]})};export{y as B};