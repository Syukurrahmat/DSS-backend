import{r as j,$ as X,j as e,A as ee,m as ae,c as se,K as G,H as y,F as L,L as F,N as f,C as D,I as te,Q as V,a0 as ne,T as C,D as A,V as O,Z as I,a1 as re,a2 as oe,a3 as ie,a4 as le,a5 as ce,a6 as de,M as Y}from"./createReactComponent-m2GCamtz.js";import{M as $,a as ue}from"./index-Dt6lv0Jl.js";import{w as W,T as M,R as me,a as he,u as q,b as E,c as xe,m as pe,M as ge,d as je,e as fe,f as ye,g as be,h as ve,S as Ce,C as ke,i as Se,j as N,k as z,l as we,n as Ie,p as Me,I as Re,o as Be}from"./app-BlQRCkbL.js";import{R as T}from"./RequiredIndicator-DdPXie2d.js";import{R as H,I as Te,a as Fe}from"./ReportCard-70O10eF9.js";import{T as De}from"./dateFormating-CjiM6gKV.js";import{u as Ae}from"./useApiResponseToast-CR3ZylCY.js";import{t as Oe,a as Ee}from"./common.utils-BXgvsAbj.js";import{u as Ne}from"./formik.esm-X4pWCQgU.js";import{c as Pe,a as Le,d as Ye,e as We,F as R,b as B}from"./index.esm-DXWgZSHY.js";import{F as Q}from"./chunk-KRPLQIP4-1nj_ibqy.js";import{M as ze}from"./chunk-4FCEGNGT-DqvOsicM.js";import{T as He}from"./chunk-4IH3O7BJ-BSUfzZnZ.js";import{A as Ue}from"./chunk-V7PAE35Z-BuEgg6Tf.js";import{S as U}from"./chunk-VTV6N5LE-DsG3bonO.js";import{C as _e,b as Ge}from"./chunk-YQO7BFFX-BRJMp5Lc.js";import"./index.tags-vBYpzwqj.js";import"./TagWithIcon-BmQxVHBm.js";import"./IconMapPin-CWtp4fMu.js";var Ve=a=>a!=null&&parseInt(a.toString(),10)>0,_={exit:{height:{duration:.2,ease:M.ease},opacity:{duration:.3,ease:M.ease}},enter:{height:{duration:.3,ease:M.ease},opacity:{duration:.4,ease:M.ease}}},$e={exit:({animateOpacity:a,startingHeight:r,transition:o,transitionEnd:t,delay:s})=>{var n;return{...a&&{opacity:Ve(r)?1:0},height:r,transitionEnd:t==null?void 0:t.exit,transition:(n=o==null?void 0:o.exit)!=null?n:W.exit(_.exit,s)}},enter:({animateOpacity:a,endingHeight:r,transition:o,transitionEnd:t,delay:s})=>{var n;return{...a&&{opacity:1},height:r,transitionEnd:t==null?void 0:t.enter,transition:(n=o==null?void 0:o.enter)!=null?n:W.enter(_.enter,s)}}},K=j.forwardRef((a,r)=>{const{in:o,unmountOnExit:t,animateOpacity:s=!0,startingHeight:n=0,endingHeight:c="auto",style:i,className:u,transition:h,transitionEnd:x,...p}=a,[g,m]=j.useState(!1);j.useEffect(()=>{const l=setTimeout(()=>{m(!0)});return()=>clearTimeout(l)},[]),X({condition:Number(n)>0&&!!t,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const k=parseFloat(n.toString())>0,d={startingHeight:n,endingHeight:c,animateOpacity:s,transition:g?h:{enter:{duration:0}},transitionEnd:{enter:x==null?void 0:x.enter,exit:t?x==null?void 0:x.exit:{...x==null?void 0:x.exit,display:k?"block":"none"}}},b=t?o:!0,S=o||t?"enter":"exit";return e.jsx(ee,{initial:!1,custom:d,children:b&&e.jsx(ae.div,{ref:r,...p,className:se("chakra-collapse",u),style:{overflow:"hidden",display:"block",...i},custom:d,variants:$e,initial:t?"exit":!1,animate:S,exit:"exit"})})});K.displayName="Collapse";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe=G("outline","camera-plus","IconCameraPlus",[["path",{d:"M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5",key:"svg-0"}],["path",{d:"M16 19h6",key:"svg-1"}],["path",{d:"M19 16v6",key:"svg-2"}],["path",{d:"M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qe=G("outline","mood-neutral","IconMoodNeutral",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}]]);function Ke({rating:a,setRating:r}){const[o,t]=j.useState(0),s=o||a;let n=["Buruk sekali","Buruk","Biasa aja","Bagus","Bagus sekali"];return e.jsxs(y,{mx:"auto",w:"fit-content",children:[e.jsx(L,{border:"1px solid",borderColor:"gray.300",rounded:"lg",p:"2",children:e.jsx(F,{as:s?H[s-1].icon:Qe,color:s?H[s-1].color:"gray.400",boxSize:"50px"})}),e.jsxs(f,{children:[e.jsx(De,{children:s?n[s-1]:"Pilih Berapa Bintang"}),e.jsx(me,{onChange:c=>r(Number(c)),value:a.toString(),children:e.jsx(y,{spacing:"0",children:[...Array(5)].map((c,i)=>e.jsxs(L,{as:"label",p:"2",onMouseEnter:()=>t(i+1),onMouseLeave:()=>t(0),cursor:"pointer",children:[e.jsx(he,{display:"none",value:(i+1).toString()},i),e.jsx(F,{as:Te,boxSize:"25px",color:i+1<=(o||a)?"yellow.400":"gray.300"})]},i))})})]})]})}function Ze({values:a,onChange:r,...o}){const t=a.filter(s=>s);return e.jsxs(f,{...o,children:[e.jsx(Q,{gap:"3",flexWrap:"wrap",children:a.map((s,n)=>e.jsxs(f,{position:"relative",flexGrow:"1",flexShrink:"0",w:"100px",h:"100px",children:[e.jsxs(D,{p:"0",w:"full",h:"full",as:"label",variant:"outline",overflow:"hidden",cursor:"pointer",children:[s?e.jsx(te,{objectFit:"cover",src:URL.createObjectURL(s)}):e.jsx(F,{as:qe,boxSize:"30px",color:"gray.400"}),e.jsx(V,{type:"file",accept:"image/*",display:"none",onChange:c=>{r((()=>{let i=[...a];return c.target.files&&(i[n]=c.target.files[0]),i})())}})]}),s&&e.jsx(ne,{size:"sm",onClick:()=>{r((()=>{let c=[...a];return c[n]=null,c})())},bg:"gray.300",position:"absolute",top:"10px",right:"10px"})]},n))}),e.jsx(C,{mt:"2",fontSize:"sm",children:t.length?t.length+" Foto ditambahkan":"Belum ada foto yang ditambahkan"})]})}function Je(){const{user:a}=q(),{isOpen:r,onOpen:o,onClose:t}=E(),{apiResponseToast:s}=Ae(),{handleChange:n,handleBlur:c,isSubmitting:i,values:u,setFieldValue:h,setSubmitting:x,resetForm:p,touched:g,errors:m,handleSubmit:k}=Ne({initialValues:{message:"",rating:0,coordinate:[],images:[null,null,null]},validationSchema:Pe().shape({message:Le().max(255,"Terlalu Panjang").required("Wajib Diisi"),rating:Ye().required("Wajib Diisi"),coordinate:We().test("","Anda Belum menentukan titik koordinat",d=>d&&d.filter(b=>b).length==2)}),onSubmit:async d=>{const b=await Promise.all(d.images.filter(l=>l).map(l=>Oe(l))),S=Ee({...d,images:b});xe.post(A+"/reports",S).then(({data:l})=>{s(l,{onSuccess(){pe(w=>typeof w=="string"&&w.startsWith(A+"/reports"),null,{revalidate:!0}),t()}}),x(!1),p()})}});return e.jsxs(e.Fragment,{children:[e.jsxs(y,{rounded:"md",bg:"white",w:"full",color:"gray.500",justifyContent:"start",cursor:"pointer",onClick:o,children:[e.jsx(Ue,{boxSize:"37px",name:a.name,src:a.profilePicture}),e.jsx(f,{fontWeight:"400",border:"1px solid",borderColor:"gray.300",px:"4",py:"2",w:"full",rounded:"full",children:"Buat Aduan"})]}),e.jsx(ge,{size:"2xl",isOpen:r,onClose:t,scrollBehavior:"inside",closeOnEsc:!1,children:e.jsxs("form",{onSubmit:k,children:[e.jsx(je,{}),e.jsxs(fe,{children:[e.jsx(ye,{borderBottom:"1px solid",borderColor:"gray.200",children:"Posting Aduan"}),e.jsx(ze,{}),e.jsx(be,{children:e.jsxs(O,{mx:"auto",spacing:"2",maxW:"container.sm",mt:"4",children:[e.jsxs(I,{isInvalid:!!m.message&&g.message,children:[e.jsxs(R,{children:["Tuis Pesan ",e.jsx(T,{})]}),e.jsx(He,{id:"message",name:"message",placeholder:"Tulis kuaitas udara yang anda rasakan saat ini",onChange:n,onBlur:c}),e.jsx(B,{children:m.message})]}),e.jsxs(I,{isInvalid:!!m.rating&&g.rating,children:[e.jsxs(R,{children:["Pilih Bintang ",e.jsx(T,{})]}),e.jsx(Ke,{rating:u.rating,setRating:d=>h("rating",d),size:2}),e.jsx(B,{children:m.rating})]}),e.jsxs(I,{isInvalid:!!m.coordinate&&g.coordinate,children:[e.jsxs(R,{children:["Lokasi ",e.jsx(T,{})]}),e.jsx(re,{children:"Geser peta dan paskan penanda ke titik yang dimaksud"}),e.jsx($,{scrollWheelZoom:!1,mt:"3",data:[],outline:m.coordinate&&g.coordinate?"2px solid":"",outlineColor:"#E53E3E",isEditing:{coordinate:oe,onChange:d=>h("coordinate",[d.lat,d.lng])}}),e.jsx(B,{children:m.coordinate})]}),e.jsxs(I,{isInvalid:!!m.images&&g.images,children:[e.jsx(R,{children:"Foto"}),e.jsx(Ze,{values:u.images,onChange:d=>h("images",d)}),e.jsx(B,{children:m.images})]})]})}),e.jsxs(ve,{borderTop:"1px solid",borderColor:"gray.200",children:[e.jsx(D,{onClick:()=>{p(),t()},children:"Batal"}),e.jsx(D,{colorScheme:"blue",ml:3,type:"submit",isLoading:i,children:"Kirim"})]})]})]})})]})}const Z=[{distance:250,label:"250 m"},{distance:500,label:"500 m"},{distance:1e3,label:"1 km"},{distance:2500,label:"2,5 km"}];function Xe({isOpen:a,distanceState:r,role:o,companyState:t}){const[s,n]=t,[c,i]=r;return e.jsx(f,{w:"full",children:e.jsx(K,{in:a,animateOpacity:!0,children:e.jsxs(y,{spacing:"3",mt:"4",children:[e.jsxs(f,{as:"label",flexGrow:"1",children:[e.jsx(C,{mb:"1",children:"Usaha"}),e.jsx(Ce,{w:"200px",fontWeight:"400",itemName:"Usaha",hiddenTitleButton:!0,apiUrl:"/me/companies"+(o=="manager"?"":"?all=true"),selectValue:s,selectOnChange:n,hiddenSearchInput:!0,borderColor:"gray.200",color:"gray.700",displayRow:u=>e.jsxs(y,{children:[e.jsx(ke,{bg:"white",type:u.type}),e.jsx(C,{children:(u==null?void 0:u.name)||"Node yang Anda ikuti"})]})})]}),e.jsxs(f,{as:"label",flexGrow:"1",children:[e.jsx(C,{mb:"1",children:"Jarak"}),e.jsx(Se,{value:c,onChange:u=>i(parseInt(u.target.value)),children:Z.map(u=>e.jsx("option",{value:u.distance,children:u.label},u.distance))})]})]})})})}function ba(){const a=N().format("YYYY-MM-DD"),{isOpen:r,onToggle:o,onClose:t}=E(),{isOpen:s,onToggle:n,onClose:c}=E(),{roleIsNot:i,user:u}=q(),[h,x]=j.useState(a),[p,g]=j.useState({}),[m,k]=j.useState(Z[0].distance),d=j.useRef(),b=r&&p.companyId?{nearCompany:p.companyId,distance:m}:{},S=h===a,{data:l,isLoading:w}=z(we(A+"/reports",{date:h,...b}),Ie),{data:P}=z(s?"/me/companies?all=true":null,Me);return e.jsxs(Q,{maxH:"100%",direction:"row",justify:"space-between",alignItems:"stretch",gap:"4",children:[e.jsx(f,{flex:"3 1 0",mb:"auto",position:"relative",h:"100%",overflowY:"auto",className:"custom-scrollbar",children:e.jsxs(O,{position:"absolute",pr:"3",w:"full",spacing:"3",children:[e.jsx(_e,{w:"full",children:e.jsxs(Ge,{children:[e.jsxs(O,{spacing:"4",children:[e.jsx(Je,{}),e.jsx(ea,{pagination:l==null?void 0:l.pagination,dateState:[h,x]}),i("regular")&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{w:"full",justify:"space-between",children:[e.jsx(C,{fontWeight:"500",alignSelf:"start",children:"Tampilkan Lokasi Usaha"}),e.jsx(U,{onChange:v=>{v.target.checked&&t(),n()},isChecked:s})]}),e.jsxs(y,{w:"full",justify:"space-between",children:[e.jsx(C,{fontWeight:"500",alignSelf:"start",children:"Filter aduan di sekitar usaha Anda"}),e.jsx(U,{onChange:v=>{v.target.checked&&c(),o()},isChecked:r})]})]})]}),i("regular")&&e.jsx(Xe,{isOpen:r,role:u.role,distanceState:[m,k],companyState:[p,g]})]})}),e.jsxs(ie,{boxShadow:"sm",fontSize:"md",rounded:"md",variant:"left-accent",children:[w?e.jsx(le,{thickness:"2px",colorScheme:"blue",boxSize:"20px",mr:"3"}):e.jsx(ce,{}),e.jsx(de,{children:w?"Mengambil Data...":((l==null?void 0:l.result.length)||"Tidak ada")+(S?" aduan di 24 jam terakhir":" aduan pada tanggal "+N(h).format("DD MMM YYYY"))})]}),l==null?void 0:l.result.map((v,J)=>e.jsx(Fe,{data:v,map:d.current},J))]})}),e.jsx($,{flex:"5 1 0",h:"auto",marker:ue,companiesData:s&&P?P:r&&p.companyId?[p]:[],circleBoundaryRadius:r?m:void 0,data:(l==null?void 0:l.result.map(v=>({isReport:!0,...v})))||[],mapRef:d})]})}function ea({pagination:a,dateState:r}){const[o,t]=r,s=a==null?void 0:a.next,n=a==null?void 0:a.previous,c=a==null?void 0:a.current;return e.jsxs(y,{justify:"space-between",w:"full",children:[e.jsx(Y,{variant:"outline",icon:e.jsx(Re,{}),"aria-label":"previous",isDisabled:!n,onClick:()=>n?t(n):null}),e.jsx(V,{variant:"outline",onFocus:i=>i.target.showPicker(),type:"date",textAlign:"center",max:N().format("YYYY-MM-DD"),onChange:i=>t(i.target.value),value:c||o}),e.jsx(Y,{variant:"outline",icon:e.jsx(Be,{}),"aria-label":"next",isDisabled:!s,onClick:()=>s?t(s):null})]})}export{ba as default};
