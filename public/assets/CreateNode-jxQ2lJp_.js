import{r as k,j as a,a0 as y,W as Q,Y as d,G as W,I as D,U as M,V as X}from"./font-5Mxaz-3e.js";import{B as w}from"./BigAlert-BSe31967.js";import{u as Z,s as aa,p as ea,a2 as sa,m as ia,C as na,K as ta,a3 as oa,x as ra}from"./app-DYChiyhM.js";import{F as da}from"./FormMapPicker-QkrL3ySl.js";import{R as g}from"./RequiredIndicator-CZ0U0vjk.js";import{S as la}from"./Sdd-CIm5sbkA.js";import{u as ca,a as ma}from"./common.utils-28SvxYlP.js";import{n as V,d as E,b as pa}from"./validator.utils-CftwUUTS.js";import{u as ua,F as l,b,c as $,f as z,e as ha,d as xa}from"./index.esm-RWPM2pE6.js";import{I as ja}from"./IconInfoCircle-Bc7REsKt.js";import{T as ga,a as ba,b as fa}from"./chunk-4YMKQ5D4-DA2V1YAZ.js";import{T as Ia,a as Na}from"./chunk-IAXSQ4X2-D5Bt3YnL.js";import{D as ka}from"./logo-Byq_-Epn.js";import{F as c,c as q,B as ya}from"./logo-white-CsuGh6aO.js";import{T as L}from"./chunk-4IH3O7BJ-Ckr7B5YK.js";import"./IconCirclePlus-BHNZ_8Qf.js";import"./index-BbXyb5rb.js";import"./dateFormating-uitVsAGu.js";import"./TagWithIcon-D2AD1She.js";const Sa=$().shape({name:V.required("Wajib diisi"),description:E.required("Wajib diisi"),address:pa.required("Wajib diisi"),instalationDate:z().nullable(),coordinate:ha().test("","Anda Belum menentukan titik koordinat",m=>m&&m.filter(f=>f).length==2)}),va=$().shape({companyId:xa().required("Wajib diisi"),name:V.required("Wajib diisi"),description:E.required("Wajib diisi"),instalationDate:z().nullable()});function Oa(){var T;const{roleIs:m}=Z(),f=aa(),R=ca(),S=!ea("/nodes/create"),v=!S&&m("admin"),[o,U]=k.useState(v?0:1),[H,I]=k.useState(),e=(T=f.state)==null?void 0:T.company;if(S&&!e)return a.jsx(sa,{to:"..",relative:"path"});const O=o?va:Sa,{handleChange:p,handleBlur:u,values:_,touched:h,status:r,setStatus:B,setFieldValue:N,setFieldError:G,resetForm:C,setSubmitting:K,isSubmitting:Y,errors:i,handleSubmit:J}=ua({initialValues:{name:"",description:"",address:"",instalationDate:"",coordinate:[NaN,NaN],companyId:(e==null?void 0:e.companyId)||NaN},validationSchema:O,onSubmit:s=>{let t={};if(o){const{coordinate:n,address:x,...j}=s;t=j}else{const{companyId:n,...x}=s;t=x}ia.post("/nodes",ma(t)).then(({data:n})=>{B({created:!0,nodeId:n.data.nodeId})}).catch(n=>{var A,P;if(((A=n.response)==null?void 0:A.status)!==400)return B({created:!1});const[x,j]=((P=n.response)==null?void 0:P.data.message)||[];G(x,j),R.error(j||"Ada yang salah")}).finally(()=>K(!1))}});k.useEffect(()=>{N("companyId",(e==null?void 0:e.companyId)||NaN)},[]);const F=[{icon:oa,name:"Node Publik",note:"Membuat node Publik yang dapat digunakan oeh semua user"},{icon:ra,name:"Node Private",note:"Membuat node private hanya suatu perusahaan spesifik"}];return a.jsxs(y,{children:[a.jsx(Q,{size:"lg",children:"Buat Node"}),a.jsx(d,{color:"dimmed",children:"Buat node untuk menambah akurasi sistem"}),a.jsxs(W,{maxW:"container.md",mt:"4",px:"0",children:[r===void 0&&v&&a.jsxs(ga,{index:o,onChange:U,variant:"soft-rounded",colorScheme:"blue",children:[a.jsx(Ia,{gap:"4",children:F.map(({name:s,icon:t},n)=>a.jsxs(Na,{rounded:"md",children:[a.jsx(D,{as:t,boxSize:"20px"}),a.jsx(d,{ml:"2",children:s})]},n))}),a.jsx(ka,{mt:"2",border:"1px solid",borderColor:"gray.400"}),a.jsx(ba,{children:F.map(({note:s},t)=>a.jsxs(fa,{px:"0",as:M,align:"start",spacing:"1",children:[a.jsx(D,{as:ja,boxSize:"20px",mt:"2px"}),a.jsx(d,{ml:"2",children:s})]},t))})]}),r===void 0?a.jsx(W,{maxW:"container.sm",px:"0",children:a.jsx("form",{onSubmit:J,className:"my-form",children:a.jsxs(X,{mx:"auto",spacing:"2",maxW:"container.sm",children:[o&&(e?a.jsxs(y,{alignSelf:"start",children:[a.jsx(d,{fontWeight:"600",children:"Buat Node Untuk Perusahaan"}),a.jsxs(M,{mt:"2",spacing:"3",shadow:"xs",p:"3",bg:"white",rounded:"md",children:[a.jsx(na,{type:e.type,size:"24px"}),a.jsxs(y,{children:[a.jsx(d,{fontWeight:"600",pr:"2",children:e.name}),a.jsx(d,{children:ta[e.type].name})]})]})]}):a.jsxs(c,{children:[a.jsxs(l,{children:["Pilih Perusahaan ",a.jsx(g,{})]}),a.jsx(la,{_value:H,_onChange:s=>{I(s),N("companyId",s==null?void 0:s.companyId)}}),a.jsx(b,{children:i.companyId})]})),a.jsxs(c,{isInvalid:!!i.name&&h.name,children:[a.jsxs(l,{children:["Nama Node ",a.jsx(g,{})]}),a.jsx(q,{id:"name",name:"name",placeholder:"Misal : Belakang rumah pak Subegja",onChange:p,onBlur:u}),a.jsx(b,{children:i.name})]}),a.jsxs(c,{isInvalid:!!i.description&&h.description,children:[a.jsxs(l,{children:["Deskripsi node ",a.jsx(g,{})]}),a.jsx(L,{id:"description",name:"description",placeholder:"Masukkan deskripsi node, singkat saja",onChange:p,onBlur:u}),a.jsx(b,{children:i.description})]}),!o&&a.jsx(a.Fragment,{children:a.jsxs(c,{isInvalid:!!i.address&&h.address,children:[a.jsxs(l,{children:["Alamat node ",a.jsx(g,{})]}),a.jsx(L,{id:"address",name:"address",placeholder:"Masukkan Alamat Node berada",onChange:p,onBlur:u}),a.jsx(b,{children:i.address})]})}),a.jsxs(c,{children:[a.jsx(l,{children:"Tanggal Instalasi"}),a.jsx(q,{w:"fit-content",type:"date",id:"instalationDate",name:"instalationDate",onChange:p,onBlur:u})]}),!o&&a.jsx(da,{errors:i.coordinate,touched:h.coordinate,values:_.coordinate,setFieldValue:N}),a.jsx(ya,{isLoading:Y,w:"full",mt:"4",colorScheme:"green",type:"submit",children:"Buat Node"})]})})}):r.created?a.jsx(w,{status:"success",title:"Node berhasil dibuat",description:"Node siap untuk digunakan dalam sistem Anda",onCreateAgain:()=>{C(),I(void 0)},itemName:"node",detailPageURL:`/nodes/${r==null?void 0:r.nodeId}`}):a.jsx(w,{status:"warning",title:"Node gagal didaftarkan",description:"Ada yang salah. Hubungi Administrator",onCreateAgain:()=>{C(),I(void 0)}})]})]})}export{Oa as default};