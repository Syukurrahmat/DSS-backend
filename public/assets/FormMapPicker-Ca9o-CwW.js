import{j as a}from"./createReactComponent-BjMSnX4u.js";import{R as l}from"./RequiredIndicator-vpk6RQqX.js";import{M as m}from"./index-CmYfqyqM.js";import{F as p,c as s,h as e,e as d,C as x}from"./axios-DSJo49NX.js";import{F as c,b as j}from"./index.esm-C4YBZUZR.js";import{H as h}from"./icon-CgCgY_AD.js";function C({errors:o,touched:i,values:r,setFieldValue:t}){return a.jsxs(p,{isInvalid:!!o&&i,children:[a.jsxs(c,{children:["Koordinat Node ",a.jsx(l,{})]}),a.jsxs(h,{w:"full",children:[a.jsxs(s,{w:"full",children:[a.jsx(e,{children:"Masukkan Latitude"}),a.jsx(d,{mt:"2",type:"number",value:r[0],onChange:n=>t("coordinate",[n.target.value,r[1]])})]}),a.jsxs(s,{w:"full",children:[a.jsx(e,{children:"Masukkan langitude"}),a.jsx(d,{mt:"2",type:"number",value:r[1],onChange:n=>t("coordinate",[r[0],n.target.value])})]})]}),a.jsx(e,{children:"Geser peta dan paskan penanda ke titik yang dimaksud"}),a.jsx(m,{mt:"3",data:[],outline:o&&i?"2px solid":"",outlineColor:"#E53E3E",isEditing:{coordinate:r.filter(n=>n).length?r:x,onChange:n=>t("coordinate",[n.lat,n.lng])}}),a.jsx(j,{children:o})]})}export{C as F};
