import{K as O,r as p,j as a,L as t,V as R,N as $,M as F,T as B,E as J}from"./createReactComponent-FtTA4e6D.js";import{D as Q,T as X,u as V,H as A,m as U,e as Y,d as Z,M as _,g as aa,h as ea,i as sa,j as na,k as oa,o as ia,b as ta,f as ra,L as da,E as ca,q as la,V as ma,v as ua}from"./app-CLYuP7ne.js";import{a as pa,b as ha,D as xa}from"./DeleteReourceButton-CQxbwcof.js";import{H as ga}from"./HeadingWithIcon-CLqvmxIt.js";import{S as P}from"./SectionTitle-D1xUC7KE.js";import{T as W}from"./TagWithIcon-CY9bsLZA.js";import{E as ja,U as fa}from"./EditInMapInputGroup-D-SnjakA.js";import{t as ba}from"./dateFormating-Uo1TV2BL.js";import{g as ya,a as Ia}from"./commonColumn-BHULZb4N.js";import{M as Sa}from"./index-C6zMlMRi.js";import{N as Ca}from"./AddNodeSubscription-C0OI9GHp.js";import{u as q,a as ka,c as va}from"./common.utils-kkfCXngb.js";import{I as Ma}from"./IconUsersGroup-Bda-S3Sa.js";import{I as Na}from"./IconBuilding-C02X3QOU.js";import{I as w}from"./IconCirclePlus-CpKX4OQO.js";import{I as Pa}from"./IconTrees-vQvTazU5.js";import{H as h}from"./icon-YHQJKk2E.js";import{B as S,F as E,c as Ba}from"./icon-white-DqAPk9SI.js";import{n as Da,b as Ea,d as Ta}from"./validator.utils-DUg1lA69.js";import{u as La,c as Fa,F as T,b as L}from"./index.esm-zRqew_b8.js";import{T as H}from"./chunk-4IH3O7BJ---OhjwZF.js";import{I as Ua}from"./IconCalendar-BhVoDxjT.js";import{I as za}from"./IconEdit-DqAZl4Q2.js";import"./chunk-4YMKQ5D4-C_TT1UYd.js";import"./GMapsButton-BjQ5pRao.js";import"./chunk-K7XRJ7NL-Bl4F_wdC.js";import"./index.tags-xwOAZuEP.js";import"./IconTrash-ZpHJsk0k.js";import"./IconExternalLink-DZvfj5am.js";import"./chunk-4FCEGNGT-Ce-wxqbP.js";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $a=O("outline","tag","IconTag",[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Aa=O("outline","user-heart","IconUserHeart",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h.5",key:"svg-1"}],["path",{d:"M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",key:"svg-2"}]]);function Wa(r){const{data:s,mutate:d}=r,{companyId:e}=s,[c,n]=p.useState(null),[x,C]=p.useState(!1),[g,k]=p.useState(!1),[i,l]=p.useState(s.coordinate),j=Q(),o=X(),m=q(),{user:f,roleIs:v,roleIsNot:b}=V(),D=`/companies/${e}`,u=`/companies/${e}/nodes`,M=`/companies/${e}/private-nodes`,y=N=>{j({title:"Hapus Pengikuti Node",message:"Anda yakin hendak menghapus node ini dari daftar langganan",confirmButtonColor:"red",onConfirm:()=>U.delete(`${u}/${N}`).then(()=>{m.success("Node berhasil di-unsubcribe"),Y(z=>typeof z=="string"&&z.startsWith(u))}).catch(()=>{m.success("Node gagal di-unsubcribe")})})},I=async()=>{C(!0),U.patch(D,{coordinate:i}).then(()=>{m.success("Lokasi Perusahaan berhasil diperbarui"),d({...s,coordinate:i})}).catch(()=>{m.error("Lokasi Perusahaan gagal diperbarui")}).finally(()=>{k(!1),C(!1)})},G=p.useMemo(()=>ya(f.role,y),[]),K=p.useMemo(()=>Ia(),[]);return a.jsxs(a.Fragment,{children:[a.jsx(P,{IconEl:Ma,children:"Lokasi Perusahaan dan Node yang dikuti"}),a.jsxs(t,{children:[a.jsx(ja,{canEdit:b(["gov","regular"]),coordinate:s.coordinate,isEditingState:[g,k],editedCoordinateState:[i,l],isSubmiting:x,handleSubmitEditedCoordinate:I}),a.jsx(Sa,{w:"full",mt:"4",h:"300px",companiesData:[s],data:c||[],outline:g?"3px solid":"",outlineColor:"orange.300",isEditing:g?{coordinate:i||s.coordinate,onChange:N=>l([N.lat,N.lng])}:void 0})]}),a.jsxs(R,{align:"start",spacing:"6",mt:"6",children:[a.jsxs(t,{w:"full",children:[a.jsxs(h,{justify:"space-between",mb:"4",align:"start",w:"full",children:[a.jsxs(t,{children:[a.jsxs(h,{mb:"1",children:[a.jsx($,{as:Na,boxSize:"20px"}),a.jsx(F,{size:"md",fontWeight:"600",children:"Node Privat"})]}),a.jsx(B,{children:"Daftar node yang terpasang dilingkungan perusahaan Anda"})]}),v(["admin","manager"])&&a.jsx(S,{leftIcon:a.jsx(w,{size:"18"}),colorScheme:"blue",children:"Tambah Node Private",onClick:()=>o("./create-node",{state:{company:{name:s.name,companyId:s.companyId,type:s.type}}})})]}),a.jsx(A,{apiUrl:M,columns:K,emptyMsg:["Belum ada Node","Tambahkan Node sekarang"],hiddenPagination:!0})]}),a.jsxs(t,{w:"full",children:[a.jsxs(h,{justify:"space-between",mb:"4",align:"start",w:"full",children:[a.jsxs(t,{children:[a.jsxs(h,{mb:"1",children:[a.jsx($,{as:Pa,boxSize:"20px"}),a.jsx(F,{size:"md",fontWeight:"600",children:"Node Publik"})]}),a.jsx(B,{children:"Daftar node publik yang diikuti perusahaan ini"})]}),v(["admin","manager"])&&a.jsx(Ca,{subsInfo:{type:"company",companyData:s},children:a.jsx(S,{leftIcon:a.jsx(w,{size:"18"}),colorScheme:"blue",children:"Tambah Node Publik"})})]}),a.jsx(A,{apiUrl:u,columns:G,setDataContext:n,emptyMsg:["Belum ada Node","Tambahkan Node sekarang"],hiddenPagination:!0})]})]})]})}function wa({data:r,mutate:s,...d}){const{isOpen:e,onOpen:c,onClose:n}=Z(),x=q(),{name:C,description:g,address:k}=r,i={name:C,description:g,address:k},{handleChange:l,values:j,errors:o,handleSubmit:m,handleBlur:f,resetForm:v,touched:b,isSubmitting:D,setSubmitting:u}=La({initialValues:i,validationSchema:Fa().shape({name:Da.required("Wajib diisi"),address:Ea.required("Wajib diisi"),description:Ta.required("Wajib diisi")}),onSubmit:M=>{ka(M);const y=va(i,M);if(Object.keys(y).length===0){x.opss("Belum ada yang disunting"),u(!1);return}U.patch(`/companies/${r.companyId}`,{...y}).then(()=>{x.success("Berhasil Memperharui data"),s(I=>I&&{...I,...y})}).catch(()=>{x.error("Gagal Memperharui data")}).finally(()=>{u(!1),n()})}});return a.jsxs(a.Fragment,{children:[a.jsx(S,{onClick:c,...d}),a.jsxs(_,{size:"lg",autoFocus:!1,isOpen:e,onClose:n,onCloseComplete:v,closeOnOverlayClick:!1,children:[a.jsx(aa,{}),a.jsx(ea,{children:a.jsxs("form",{onSubmit:m,className:"my-form",children:[a.jsx(sa,{children:"Sunting Profil"}),a.jsx(na,{children:a.jsxs(R,{mx:"auto",spacing:"2",maxW:"container.sm",children:[a.jsxs(E,{isInvalid:!!o.name&&b.name,children:[a.jsx(T,{children:"Nama"}),a.jsx(Ba,{id:"name",name:"name",placeholder:"Misal : Suparna",onChange:l,onBlur:f,value:j.name}),a.jsx(L,{children:o.name})]}),a.jsxs(E,{isInvalid:!!o.address&&b.address,children:[a.jsx(T,{children:"Alamat"}),a.jsx(H,{id:"address",name:"address",placeholder:"Masukkan Alamat Tempat tinggal Pengguna",onChange:l,onBlur:f,value:j.address}),a.jsx(L,{children:o.address})]}),a.jsxs(E,{isInvalid:!!o.description&&b.description,children:[a.jsx(T,{children:"Description"}),a.jsx(H,{id:"description",name:"description",placeholder:"Opsional",onChange:l,onBlur:f,value:j.description}),a.jsx(L,{children:o.description})]})]})}),a.jsxs(oa,{children:[a.jsx(S,{variant:"ghost",onClick:n,children:"Batal"}),a.jsx(S,{isLoading:D,type:"submit",colorScheme:"blue",ml:3,children:"Submit"})]})]})})]})]})}function je(){const{id:r}=ia(),{user:s,roleIs:d}=V(),{data:e,mutate:c,error:n}=ta(`/companies/${r}`,ra);if(n)throw n;return e?a.jsxs(t,{children:[a.jsx(ga,{Icon:a.jsx(Aa,{}),text:"Detail Perusahaan"}),a.jsxs(J,{mt:"8",maxW:"container.md",children:[a.jsxs(h,{justify:"space-between",children:[a.jsxs(t,{children:[a.jsx(F,{fontSize:"3xl",children:e.name}),a.jsxs(h,{mt:"2",children:[a.jsx(W,{icon:Ua,colorScheme:"blue",children:`Dibuat pada ${ba(e.createdAt)}`}),a.jsx(W,{icon:$a,colorScheme:ca[e.type].color,textTransform:"capitalize",children:e.type})]}),["admin","gov"].includes(s.role)&&a.jsx(fa,{mt:"3",data:e.manager,label:"manager"})]}),a.jsx(la,{}),a.jsx(ma,{alignSelf:"start",companyId:e.companyId}),d(["admin","manager"])&&a.jsx(wa,{data:e,mutate:c,colorScheme:"blue",alignSelf:"start",leftIcon:a.jsx(za,{size:"16"}),children:"Sunting Perusahaan"})]}),a.jsx(P,{IconEl:pa,children:"Alamat"}),a.jsx(B,{children:e.address}),a.jsx(P,{IconEl:ha,children:"Deskripsi Perusahaan"}),a.jsx(B,{children:e.description}),a.jsx(Wa,{data:e,mutate:c}),d(["admin","manager"])&&a.jsxs(a.Fragment,{children:[a.jsx(P,{IconEl:ua,children:"Lainnya"}),a.jsx(xa,{resource:"Perusahaan",name:e.name,colorScheme:"red",deleteApiUrl:"/companies/"+e.companyId,redirectPath:"/companies"})]})]})]}):a.jsx(da,{})}export{je as default};