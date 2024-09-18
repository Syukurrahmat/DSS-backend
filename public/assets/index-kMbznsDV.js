import{N as he,j as e,S as W,T as R,U as d,H as U,I as f,a0 as g,W as I,X as H,V as j,Y as i,r as Me,ab as pe,Z as me,ae as We,J as Ue}from"./font-CsN-AIjb.js";import{C as He,S as Ne}from"./CardEventLog-By_xpZEN.js";import{y as Ae,T as C,u as B,z as Oe,F as N,C as Fe,B as Le,D as _,q as k,E as Ge,G as te,l as A,H as Ke,b as Ye,f as Ee,L as Re}from"./app-ZJ9y3HmT.js";import{r as V,g as O,b as Y,d as E}from"./common.utils-DYrrUfov.js";import{I as Be}from"./IconNotebookOff-Dnfr8O3k.js";import{M as _e,a as ie}from"./index-CQsnPMS7.js";import{T as oe}from"./TagWithIcon-C05UC_Yt.js";import{t as Ve}from"./dateFormating-CL_6fhtq.js";import{I as $e}from"./IconCalendar-BvckuZYV.js";import{B as Xe,d as je,M as le,S as ge,I as qe}from"./ISPUChart-ClAlCBRU.js";import{B as w}from"./logo-white-DQaj3O9T.js";import{a as Ze}from"./ReportCard-Byn6zZRj.js";import{N as de}from"./AddNodeSubscription-DFPxYqJ7.js";import{G as fe,M as be,T as ye,a as Se,b as ve,c as z,U as Je}from"./MyLineChart-Cpu3DGL_.js";import{T as $,a as T}from"./chunk-IAXSQ4X2-BmVLbxok.js";import{T as X,a as q,b as M}from"./chunk-4YMKQ5D4-D-4vDhio.js";import{I as Qe}from"./IconDatabaseX-BLJYuJwl.js";import{G as ea}from"./chunk-JARCRF6W-D2tXc9db.js";import{D as aa}from"./logo-dqb-qIY4.js";import{I as ce}from"./IconCirclePlus-D7eqtt7O.js";import{I as sa}from"./IconBuilding-Cuip56dr.js";import{I as xe}from"./IconTrees-BLhwJJob.js";import"./IconMapPin-D36jdrOH.js";import"./IconTrash-D67_KFCL.js";import"./IconEdit-ySyhhWg0.js";import"./chunk-4FCEGNGT-C-BMRY63.js";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var na=he("outline","circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var F=he("outline","history","IconHistory",[["path",{d:"M12 8l0 4l2 2",key:"svg-0"}],["path",{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5",key:"svg-1"}]]);function ra({data:r,...s}){return e.jsxs(W,{size:V,...s,children:[e.jsxs(R,{pb:"0",as:d,children:[e.jsx(U,{border:"2px solid",borderColor:"orange.200",color:"orange.500",rounded:"md",p:"1",boxSize:"45px",children:e.jsx(f,{as:Ae,boxSize:"28px"})}),e.jsxs(g,{ml:"1",children:[e.jsx(I,{size:"md",children:"Kegiatan terkini"}),e.jsxs(C,{mt:"1",children:[r.length," Kegiatan Terkini"]})]})]}),e.jsx(H,{children:e.jsx(j,{align:"stretch",children:r.length?e.jsx(e.Fragment,{children:r.map(a=>e.jsx(He,{event:a},a.eventLogId))}):e.jsxs(d,{justify:"center",color:"gray.500",py:"3",children:[e.jsx(Be,{stroke:"1.2",size:"40"}),e.jsx(i,{fontWeight:"500",fontSize:"lg",children:"Tidak ada Kegiatan Berlangsung"})]})})})]})}const K=(r,s)=>({base:r,lg:s});function ta({data:r}){var Q,ee;const{dashboardInfo:s,nodes:a}=r,{name:n,type:t,coordinate:o,countNodes:l,companyId:c,userId:m,createdAt:x}=s,[u,h]=Me.useState(null),{roleIsNot:y,roleIs:Z,user:ke}=B(),J=Oe(),L=(S="outdoor")=>{var v,P,ae,se,ne;return[{name:"ISPU",currentData:(v=a[S])==null?void 0:v.map(p=>{var re;const b=(re=p.latestData)==null?void 0:re.ispu;if(!b)return{...p,data:{name:"ISPU"}};const{datetime:D,value:G}=b;if(!G||!G[0])return{...p,data:{name:"ISPU"}};const{ispu:ze,category:Te}=G[0];return{...p,data:{name:"ISPU",datetime:D,value:ze,color:O(Te).colorScheme}}})},{name:"PM2.5",currentData:(P=a[S])==null?void 0:P.map(p=>{var b;return{...p,data:{name:"PM2.5",...(b=p.latestData)==null?void 0:b.pm25}}})},{name:"PM10",currentData:(ae=a[S])==null?void 0:ae.map(p=>{var b;return{...p,data:{name:"PM10",...(b=p.latestData)==null?void 0:b.pm100}}})},{name:"CH4",currentData:(se=a[S])==null?void 0:se.map(p=>{if(!p.latestData)return{...p,data:{name:"CH4"}};const{datetime:b,value:D}=p.latestData.ch4;return{...p,data:{name:"CH4",datetime:b,value:D.value,color:""}}})},{name:"CO2",currentData:(ne=a[S])==null?void 0:ne.map(p=>{if(!p.latestData)return{...p,data:{name:"CO2"}};const{datetime:b,value:D}=p.latestData.co2;return{...p,data:{name:"CO2",datetime:b,value:D.value,color:""}}})}]},De={name:n,type:t,coordinate:o,companyId:c,indoorNodeValue:u!==null?L("indoor")[u].currentData:null},we=u!==null?L()[u].currentData:a.outdoor,Pe=n||"Dasbor "+(Z(["admin","gov"])?(ee=(Q=ke.view)==null?void 0:Q.user)==null?void 0:ee.name:"Anda");return e.jsx(W,{size:"sm",w:"full",rounded:"md",children:e.jsxs(H,{as:N,flexDir:K("column","row"),gap:2,children:[e.jsx(_e,{minH:"275px",h:"275px",flex:"4 1 0",companiesData:c?[De]:[],marker:u===null?ie.DetailNodesMarker:ie.ValueMarker,data:we||[]}),e.jsxs(j,{flex:"3 1 0",align:"start",p:K("xs","2"),mt:K("4","0"),children:[e.jsxs(d,{children:[e.jsx(Fe,{type:t}),e.jsx(I,{size:"md",fontWeight:"600",children:Pe})]}),e.jsxs(d,{flexWrap:"wrap",mt:"2",children:[!!x&&e.jsx(e.Fragment,{children:e.jsx(oe,{icon:$e,colorScheme:"blue",children:`Dibuat pada ${Ve(x)}`})}),t!=="regular"&&e.jsx(Le,{value:t}),e.jsx(oe,{icon:_,children:l+" Node"})]}),e.jsx(k,{}),l>0?e.jsxs(g,{children:[e.jsx(i,{children:"Tampilkan nilai dari parameter : "}),e.jsx(Xe,{colorScheme:"teal",isAttached:!0,size:"sm",variant:"outline",flexWrap:"wrap",mt:"1",rowGap:"2",children:L().map((S,v)=>e.jsx(w,{border:"1px solid",borderColor:"teal.400",sx:u==v?{bg:"teal.500",color:"white",_hover:{bg:"teal.600"}}:{},onClick:()=>h(P=>P!=v?v:null),children:S.name},v))})]}):e.jsx(pe,{fontSize:"md",status:"warning",rounded:"md",children:e.jsxs(i,{children:["Tidak ada node yang dapat dianalisis.",e.jsx("br",{}),"Tambahkan node untuk memulai memantau kualitas udara"]})}),e.jsxs(d,{justify:"end",flexWrap:"wrap-reverse",w:"full",mt:"2",children:[y("regular")&&e.jsx(Ge,{colorScheme:"blue",flex:"0 0 175px",selectCompanyOnly:y(["admin","gov"]),children:"Ganti Dashboard"}),Z(["admin","gov"])&&t=="regular"&&e.jsx(w,{colorScheme:"blue",flex:"0 0 175px",onClick:()=>J(`/users/${m}`),children:"Detail Pengguna"}),!!c&&e.jsx(w,{colorScheme:"blue",onClick:()=>J(`/companies/${c}`),children:"Detail Perusahaan"})]})]})]})})}function ia({data:r,...s}){return e.jsxs(W,{size:V,...s,children:[e.jsxs(R,{pb:"0",as:d,children:[e.jsx(U,{border:"2px solid",borderColor:"yellow.200",color:"yellow.500",rounded:"md",p:"1",boxSize:"45px",children:e.jsx(f,{as:te,boxSize:"28px"})}),e.jsxs(g,{ml:"1",children:[e.jsx(I,{size:"md",children:"Aduan terkini"}),e.jsxs(C,{mt:"1",children:[r.length," Aduan terkini"]})]})]}),e.jsxs(H,{children:[e.jsx(i,{mb:"4",children:"Aduan dalam radius 250 meter dari lokasi perusahaan Anda dalam 24 jam terakhir"}),e.jsx(j,{align:"stretch",children:r.length?r.map(a=>e.jsx(Ze,{showSeeInMap:!1,border:"1px solid",rounded:"lg",borderColor:"gray.200",size:"sm",data:a},a.reportId)):e.jsxs(d,{justify:"center",color:"gray.500",py:"3",children:[e.jsx(te,{stroke:"1.2",size:"40"}),e.jsx(i,{fontWeight:"500",fontSize:"lg",children:"Tidak ada Aduan di sekitar"})]})})]})]})}const oa="/assets/opss-BHGvqmEc.png";function la({CH4data:r,CO2data:s}){const a=[{symbol:"CO2",name:"Karbondioksida",max:be,threshold:ye,data:s},{symbol:"CH4",name:"Metana",threshold:Se,max:ve,data:r}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{w:"full",justify:"space-evenly",px:"2",py:"3",border:"1px solid",borderColor:"gray.300",rounded:"5",spacing:"6",wrap:"wrap",justifyItems:"start",children:a.map(({symbol:n,name:t,threshold:o,data:l,max:c},m)=>{const{value:x,category:u}=l.average.data.value,{colorScheme:h}=n=="CO2"?Y(u):E(u);return e.jsxs(j,{spacing:"1",children:[e.jsxs(d,{color:"gray.600",alignSelf:"start",fontSize:"xl",spacing:"1",children:[e.jsxs(i,{fontWeight:"600",children:[n.slice(0,2),e.jsx("sub",{children:n[2]})]}),e.jsx(i,{fontWeight:"600",children:t})]}),e.jsxs(d,{spacing:{base:"10",md:"4"},children:[e.jsxs(g,{children:[e.jsx(i,{fontSize:"xl",fontWeight:"600",children:x+" PPM"}),e.jsx(C,{w:"full",fontSize:"md",justifyContent:"center",colorScheme:h,children:u})]}),e.jsx(je,{style:{width:"125px"},arcsLength:o,colors:fe,percent:x>=c?1:x/c,arcPadding:.02,hideText:!0})]})]},m)})}),e.jsx(d,{wrap:"wrap",w:"full",rowGap:4,children:a.map(({symbol:n,data:t},o)=>e.jsx(j,{flex:"1 1 0px",border:"1px solid",borderColor:"gray.300",rounded:"5",py:"2",px:"4",children:[t.highest,t.lowest].map(({name:l,data:{value:c}},m)=>e.jsxs(d,{spacing:"1",w:"full",justify:"space-between",children:[e.jsxs(g,{children:[e.jsxs(d,{color:"gray.700",spacing:"1",fontWeight:"600",children:[e.jsxs(i,{children:[n.slice(0,2),e.jsx("sub",{children:n[2]})]}),e.jsx(i,{children:m?"Terendah":"Tertinggi"})]}),e.jsx(d,{color:"gray.600",mt:"1",children:e.jsx(i,{fontSize:"sm",children:l})})]}),e.jsxs(j,{spacing:"0",children:[e.jsx(i,{fontSize:"lg",fontWeight:"600",children:c.value+" PPM"}),e.jsx(C,{fontSize:"md",w:"full",justifyContent:"center",colorScheme:(n=="CO2"?Y(c.category):E(c.category)).colorScheme,children:c.category})]})]},m))},o))}),e.jsx(k,{}),e.jsxs(d,{justify:"end",w:"full",children:[e.jsx(f,{as:F,boxSize:"18px"}),e.jsxs(i,{children:["Data diperbarui pada"," ",A(r.average.data.datetime).format("HH:mm DD MMM YYYY")]})]})]})}function da({CO2data:r,CH4data:s}){const a=[{symbol:"CH4",name:"Metana",threshold:Se,max:ve,data:s},{symbol:"CO2",name:"Karbondioksida",max:be,threshold:ye,data:r}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{w:"full",justify:"space-evenly",px:"2",h:"calc(168px + 1em)",border:"1px solid",borderColor:"gray.300",rounded:"5",children:a.map(({symbol:n,name:t,threshold:o,data:l,max:c},m)=>{const{value:x,category:u}=l.latestData.value,{colorScheme:h}=n=="CO2"?Y(u):E(u);return e.jsxs(j,{spacing:"1",children:[e.jsxs(d,{color:"gray.600",fontSize:"lg",children:[e.jsxs(i,{fontWeight:"600",children:[n.slice(0,2),e.jsx("sub",{children:n[2]})]}),e.jsx(i,{fontWeight:"500",children:t})]}),e.jsx(je,{style:{maxWidth:"125px",width:"100%"},arcsLength:o,colors:fe,percent:x>c?1:x/c,arcPadding:.02,hideText:!0}),e.jsx(i,{fontSize:"2xl",fontWeight:"600",children:x+" PPM"}),e.jsx(C,{w:"full",fontSize:"md",py:"1",justifyContent:"center",colorScheme:h,children:u})]},m)})}),e.jsxs(X,{w:"full",children:[e.jsx($,{children:e.jsx(T,{_active:{bg:"initial"},children:"Tren Gas Emisi Rumah Kaca"})}),e.jsx(q,{children:e.jsxs(M,{children:[e.jsxs(g,{h:"110px",w:"full",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren Gas Metana (CH4)"}),e.jsx(z,{simple:!0,data:s.tren,gasType:"CH4",dataKeyTypeAndFunc:{func:n=>n.value}})]}),e.jsxs(g,{mt:"8",h:"110px",w:"full",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren Karbondioksida (CO2)"}),e.jsx(z,{simple:!0,gasType:"CO2",data:r.tren,dataKeyTypeAndFunc:{func:n=>n.value}})]})]})})]}),e.jsx(k,{}),e.jsxs(d,{justify:"end",w:"full",children:[e.jsx(f,{as:F,boxSize:"18px"}),e.jsxs(i,{children:["Data diperbarui pada"," ",A(s.latestData.datetime).format("HH:mm DD MMM YYYY")]})]})]})}function ca({data:r}){const{latestData:{datetime:s,value:a},tren:n}=r;return e.jsxs(e.Fragment,{children:[a?e.jsxs(e.Fragment,{children:[e.jsx(Ie,{value:a[0]}),e.jsx(d,{justify:"space-evenly",align:"start",wrap:"wrap",w:"full",children:a.map((t,o)=>e.jsx(xa,{flex:"1 1 180px",maxW:"180px",value:t},o))})]}):e.jsx(Ce,{}),e.jsxs(X,{w:"full",children:[e.jsxs($,{children:[e.jsx(T,{children:"Tren ISPU"}),e.jsx(T,{children:"Tren Pencemar"})]}),e.jsxs(q,{children:[e.jsxs(M,{px:"0",children:[e.jsxs(g,{h:"110px",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren ISPU PM2.5"}),e.jsx(le,{data:n,simple:!0,tooltipLabel:"ISPU PM2.5",dataKeyTypeAndFunc:{func:t=>(t.value||[]).find(o=>o.pollutant=="PM25")}})]}),e.jsxs(g,{mt:"8",h:"110px",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren ISPU PM10"}),e.jsx(le,{data:n,tooltipLabel:"ISPU PM10",simple:!0,dataKeyTypeAndFunc:{func:t=>(t.value||[]).find(o=>o.pollutant=="PM100")}})]})]}),e.jsxs(M,{px:"0",children:[e.jsxs(g,{h:"110px",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren Pencemar PM2.5"}),e.jsx(z,{simple:!0,gasType:"PM2.5",data:n,dataKeyTypeAndFunc:{func:t=>(t.value||[]).find(o=>o.pollutant=="PM25")}})]}),e.jsxs(g,{mt:"8",h:"110px",children:[e.jsx(i,{fontWeight:"600",mb:"2",children:"Tren Pencemar PM10"}),e.jsx(z,{simple:!0,gasType:"PM10",data:n,dataKeyTypeAndFunc:{func:t=>(t.value||[]).find(o=>o.pollutant=="PM100")}})]})]})]})]}),e.jsx(k,{}),!!a&&e.jsxs(d,{justify:"end",w:"full",children:[e.jsx(f,{as:F,boxSize:"18px"}),e.jsxs(i,{children:["ISPU Pukul ",A(s).format("HH:mm DD MMM YYYY")]})]})]})}function xa({value:r,...s}){const{category:a,ispu:n,pollutant:t,pollutantValue:o}=r,{colorScheme:l}=O(a);return e.jsxs(d,{as:N,bg:l+".100",py:"6px",h:"59px",px:"4",rounded:"md",spacing:"4",divider:e.jsx(ge,{borderColor:l+".200"}),...s,children:[e.jsx(i,{fontSize:"xl",fontWeight:"600",children:t}),e.jsxs(g,{children:[e.jsx(i,{fontSize:"2xl",fontWeight:"600",children:n<=300?n:"300+"}),e.jsxs(i,{fontSize:"sm",mt:"-1",noOfLines:1,children:[o.toFixed(2)," ",Je]})]})]})}function Ie({value:r,...s}){const{category:a,ispu:n,pollutant:t}=r,{colorScheme:o,icon:l}=O(a);return e.jsxs(d,{w:"full",spacing:"4",p:"2",bg:o+".100",rounded:"5",...s,children:[e.jsxs(j,{rounded:"3",align:"start",boxSize:{base:"80px",md:"95px"},p:"2",spacing:"0",bg:o+".200",children:[e.jsx(i,{fontStyle:"italic",children:"ISPU"}),e.jsx(k,{}),e.jsx(i,{textAlign:"center",w:"full",fontSize:"4xl",fontWeight:"600",children:n<=300?n:"300+"})]}),e.jsxs(j,{align:"start",spacing:"2",flex:"1 0 0",children:[e.jsx(I,{as:"p",size:"lg",children:a}),e.jsx(C,{colorScheme:o,variant:"outline",children:e.jsxs(i,{lineHeight:"1.5em",children:["Polutan Utama : ",e.jsxs(i,{fontWeight:"600",as:"span",children:[" ",t]})]})})]}),e.jsx(f,{boxSize:{base:"70px",md:"90px"},strokeWidth:"1.5px",color:o+".400",as:l})]})}function Ce(){return e.jsxs(d,{flexGrow:"1",w:"full",spacing:"4",px:"2",py:"8",rounded:"5",color:"gray.500",children:[e.jsx(f,{boxSize:"60px",strokeWidth:"1.5px",as:Qe}),e.jsxs(g,{children:[e.jsx(i,{fontWeight:"600",fontSize:"xl",color:"gray.600",children:"ISPU Terkini tidak dapat dikalkulasi"}),e.jsxs(i,{children:["Data tidak mencukupi, tunggu sensor mengirimkan data tambahan."," "]})]})]})}function ua({data:r}){var x,u;const{highest:s,lowest:a,average:n}=r,t=(x=s.data.value)==null?void 0:x[0],o=(u=a.data.value)==null?void 0:u[0],{value:l,datetime:c}=n.data;if(!l||!t||!o)return e.jsx(Ce,{});const m=[{nodeName:s.name,ispuData:t},{nodeName:a.name,ispuData:o}];return e.jsxs(e.Fragment,{children:[e.jsx(Ie,{value:l[0]}),e.jsx(me,{wrap:"wrap",direction:"row",spacing:"4",align:"stretch",w:"full",justifyContent:"space-evenly",children:m.map((h,y)=>e.jsx(ha,{data:h,label:y?"Terendah":"Tertinggi"},y))}),e.jsx(k,{}),e.jsxs(d,{justify:"end",w:"full",children:[e.jsx(f,{as:F,boxSize:"18px"}),e.jsxs(i,{children:["ISPU Pukul ",A(c).format("HH:mm DD MMM YYYY")]})]})]})}function ha({data:r,label:s}){const{category:a,ispu:n}=r.ispuData,{colorScheme:t}=O(a);return e.jsxs(j,{minW:"200px",spacing:"0",rounded:"md",align:"start",px:"4",py:"3",justify:"center",bg:t+".100",children:[e.jsx(i,{fontWeight:"500",children:s}),e.jsxs(d,{w:"full",justify:"space-between",children:[e.jsx(i,{fontSize:"2xl",fontWeight:700,children:n<=300?n:"300+"}),e.jsx(C,{bg:t+".300",children:a})]}),e.jsxs(d,{spacing:"1",children:[e.jsx(_,{size:"16"}),e.jsx(i,{w:"full",noOfLines:1,fontSize:"sm",children:r.nodeName})]})]})}function pa({data:r,type:s,isSingleNode:a}){var c,m,x,u;const n=a?(m=(c=r.ispu)==null?void 0:c.latestData.value)==null?void 0:m[0].recomendation:(u=(x=r.ispu)==null?void 0:x.average.data.value)==null?void 0:u[0].recomendation,t=a?r.ch4.latestData.value.recomendation:r.ch4.average.data.value.recomendation,o=a?r.co2.latestData.value.recomendation:r.co2.average.data.value.recomendation,l=[{label:"Kualitas Udara",recomendation:n},{label:"Emisi Karbon dioksida",recomendation:o},{label:"Emisi Metana",recomendation:t}].filter(h=>h.recomendation);return e.jsxs(pe,{mt:"6",status:"info",variant:"left-accent",rounded:"sm",bg:"blue.50",alignItems:"start",children:[e.jsx(f,{as:qe,boxSize:"7",color:"blue.600",mt:"1"}),e.jsxs(X,{ml:"3",variant:"soft-rounded",colorScheme:"blue",children:[e.jsxs($,{as:d,wrap:"wrap",children:[e.jsx(We,{fontWeight:"600",children:"Rekomendasi"}),e.jsx(k,{}),e.jsx(d,{wrap:"wrap",children:l.map((h,y)=>e.jsx(T,{rounded:"lg",py:"1",children:h.label},y))})]}),e.jsx(aa,{borderColor:"blue.200",mt:"2"}),e.jsx(q,{pb:"2",children:l.map(({recomendation:h},y)=>e.jsx(M,{px:"0",py:"2",as:j,align:"start",children:e.jsxs(ea,{gap:"6",templateColumns:"repeat(auto-fit, minmax(250px, 1fr))",children:[e.jsx(i,{textIndent:"2em",fontSize:"md",textAlign:"justify",children:h==null?void 0:h.info}),e.jsxs(i,{fontSize:"md",textAlign:"justify",children:[e.jsxs(i,{fontWeight:"600",as:"span",children:["Saran :"," "]}),s=="indoor"?h==null?void 0:h.company:h==null?void 0:h.public]})]})},y))})]})]})}function ue({data:r,type:s}){const{data:a,countNodes:n,analiysisDataType:t}=r,o={indoor:{icon:sa,color:"blue",title:"Udara di perusahaan"},outdoor:{icon:xe,color:"green",title:"Udara di sekitar perusahaan"},arround:{icon:xe,color:"green",title:"Udara di sekitar"}},l=t=="single",c=n.all-n.active,{icon:m,color:x,title:u}=o[s];return e.jsxs(W,{size:V,children:[e.jsx(R,{pb:"1",children:e.jsxs(d,{children:[e.jsx(U,{border:"2px solid",borderColor:x+".200",color:x+".500",rounded:"md",p:"1",boxSize:"45px",children:e.jsx(f,{as:m,boxSize:"28px"})}),e.jsxs(g,{children:[e.jsx(I,{size:"md",fontWeight:"600",children:u}),!!a&&e.jsxs(d,{rowGap:"1",color:"dimmed",columnGap:"4",wrap:"wrap",children:[e.jsxs(d,{children:[e.jsx(f,{as:_}),e.jsx(i,{children:l?a.node.name:`Rerata dari ${n.active} node`})]}),!!c&&e.jsxs(d,{children:[e.jsx(f,{as:na}),e.jsxs(i,{children:[c," Node Tidak Aktif"]})]})]})]})]})}),e.jsx(H,{children:n.active&&a?e.jsxs(e.Fragment,{children:[e.jsxs(me,{divider:e.jsx(ge,{borderColor:"gray.200"}),direction:{base:"column",lg:"row"},spacing:"4",children:[e.jsx(j,{flex:"1 1 0px",align:"start",spacing:"4",children:l?e.jsx(ca,{data:a.ispu}):e.jsx(ua,{data:a.ispu})}),e.jsx(j,{flex:"1 1 0px",align:"start",spacing:"4",children:l?e.jsx(da,{CO2data:a.co2,CH4data:a.ch4}):e.jsx(la,{CH4data:a.ch4,CO2data:a.co2})})]}),e.jsx(pa,{type:s,isSingleNode:l,data:a})]}):e.jsx(ma,{data:r,type:s})})]})}function ma({data:r,type:s}){var c,m,x;const{all:a,active:n}=r.countNodes,{user:t,roleIs:o}=B(),l=a-n;return e.jsxs(N,{align:"center",flexWrap:"wrap",justify:"center",px:"3",py:"6",children:[e.jsx(Ue,{src:oa,h:"140px"}),e.jsx(j,{align:"start",spacing:"1",children:a?e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"md",children:"Tidak dapat menampilkan data"}),e.jsx(i,{color:"gray.500",fontStyle:"italic",children:"Tidak ada node yang aktif"}),e.jsxs(d,{mt:"3",spacing:"4",children:[e.jsx(U,{boxSize:"40px",border:"2px solid",borderColor:"orange.300",p:"2",rounded:"md",children:e.jsx(f,{as:Ke,color:"orange.500",boxSize:"full"})}),e.jsx(i,{fontWeight:"600",fontSize:"lg",children:`Data pada ${l} node tidak mutakhir `})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(I,{size:"md",mb:"2",children:["Belum Menambahkan Node ",s=="arround"?"":s]}),!o("gov")&&e.jsx(e.Fragment,{children:s=="arround"?e.jsx(de,{subsInfo:{type:"user",userId:((m=(c=t.view)==null?void 0:c.user)==null?void 0:m.userId)||t.userId},children:e.jsx(w,{colorScheme:"blue",leftIcon:e.jsx(ce,{size:"18"}),children:"Tambahkan Node"})}):e.jsx(de,{subsInfo:{type:"company",companyData:(x=t.view)==null?void 0:x.company},children:e.jsx(w,{colorScheme:"blue",leftIcon:e.jsx(ce,{size:"18"}),children:"Tambahkan Node"})})})]})})]})}function Ea(){const{user:r,roleIs:s,roleIsNot:a}=B(),{id:n,type:t}=ja(r);if(!t&&s(["admin","gov"]))return e.jsx(Ne,{selectCompanyOnly:!1});const o=n&&t?`${t==="company"?"/companies/":"/users/"}${n}/dashboard`:null,{data:l,isLoading:c}=Ye(o,Ee);return c||!l?e.jsx(Re,{}):e.jsxs(j,{spacing:"4",align:"stretch",children:[e.jsx(ta,{data:l}),l.indoor&&e.jsx(ue,{data:l.indoor,type:"indoor"}),e.jsx(ue,{data:l.outdoor,type:l.dashboardInfo.type=="regular"?"arround":"outdoor"}),a("regular")&&e.jsxs(N,{flexDir:{base:"column",lg:"row"},w:"full",gap:"4",children:[e.jsx(ra,{flex:"1 1 0 ",data:l.currentEventLogs}),e.jsx(ia,{flex:"1 1 0 ",data:l.nearReports})]})]})}function ja(r){const{view:s}=r;return s!=null&&s.company&&s.company.companyId?{type:"company",id:s.company.companyId}:s!=null&&s.user&&s.user.userId&&s.user.role=="regular"?{type:"user",id:s.user.userId}:{type:void 0,id:void 0}}export{Ea as default};