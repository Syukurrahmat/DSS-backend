import{N as i,j as e,ab as x,ac as p,ae as u,ad as h,U as m}from"./font-CsN-AIjb.js";import{z as d,I as j,w as v}from"./app-Dr_tcMC0.js";import{I as f}from"./IconCirclePlus-D7eqtt7O.js";import{B as t}from"./logo-white-DQaj3O9T.js";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var I=i("outline","layout-navbar-expand","IconLayoutNavbarExpand",[["path",{d:"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M4 9h16",key:"svg-1"}],["path",{d:"M10 14l2 2l2 -2",key:"svg-2"}]]);const z=({title:o,description:l,detailPageURL:a,onCreateAgain:n,itemName:s,...r})=>{const c=d();return e.jsxs(x,{mt:"10",px:"6",py:"10",rounded:"lg",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:"2",...r,children:[e.jsx(p,{boxSize:"50px",mr:0}),e.jsx(u,{fontSize:"xl",children:o}),e.jsx(h,{maxW:"lg",whiteSpace:"pre-line",children:l}),e.jsxs(m,{mt:"4",wrap:"wrap",justify:"center",children:[e.jsx(t,{leftIcon:e.jsx(j,{size:"20"}),colorScheme:"blue",variant:"outline",children:"Kembali",onClick:()=>c(-1)}),e.jsx(t,{leftIcon:e.jsx(f,{size:"20"}),colorScheme:"blue",children:"Buat lagi",onClick:n}),!!a&&!!s&&r.status==="success"&&e.jsx(v,{to:a,children:e.jsx(t,{leftIcon:e.jsx(I,{size:"20"}),colorScheme:"blue",children:"Lihat "+s,onClick:n})})]})]})};export{z as B};
