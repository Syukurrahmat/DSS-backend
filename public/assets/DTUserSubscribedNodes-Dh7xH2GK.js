import{r,j as e,L as f}from"./createReactComponent-WPW12zrK.js";import{E as g,u as x,O as h,J as N,m as C,e as k}from"./app-BIM-v5sX.js";import{g as y}from"./commonColumn--eBGv61s.js";import{M as D}from"./index-_9iesu2c.js";import{u as U}from"./common.utils-BDtzQ6xa.js";function L({data:i,mutate:a,...u}){const[t,m]=r.useState(null),o=U(),d=g(),{user:c}=x(),s=`/users/${i.userId}/nodes`,l=b=>{d({title:"Hapus Pengikuti Node",message:"Anda yakin hendak menghapus node ini dari daftar langganan",confirmButtonColor:"red",onConfirm:()=>C.delete(`${s}/${b}`).then(()=>{o.success("Node berhasil di-unsubcribe"),k(n=>typeof n=="string"&&n.startsWith(s)),a&&a()}).catch(()=>{o.success("Node berhasil di-unsubcribe")})})},p=r.useMemo(()=>y(c.role,l),[]);return e.jsxs(f,{...u,children:[e.jsx(D,{data:t||[],as:t==null?h:void 0}),e.jsx(N,{mt:"4",apiUrl:s,columns:p,setDataContext:m,emptyMsg:["Belum ada Node","Tambahkan Node sekarang"],hiddenPagination:!0})]})}export{L as U};
