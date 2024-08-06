import{K as ue,r as $,R as J,D as he,j as a,C as T,V as me,Z as q,Q as le,y as Fe,a7 as ze,N as ce,H as W,T as de,E as Ve,J as Ne}from"./createReactComponent-m2GCamtz.js";import{H as $e}from"./HeadingWithIcon-DsJVocdS.js";import{S as te}from"./SectionTitle-CXF1AUe9.js";import{b as pe,c as ge,M as fe,d as ve,e as xe,f as ye,g as be,h as we,q as Oe,r as Re,s as He,u as Ke,k as We,p as qe,L as Xe,t as Ye,v as Ge,x as Ze}from"./app-BlQRCkbL.js";import{T as _e}from"./index.tags-vBYpzwqj.js";import{M as Je}from"./DTManagedCompanies-DQO8ttnI.js";import{U as Qe}from"./DTUserSubscribedNodes-3-c4Xb-D.js";import{I as ie}from"./inputPassword-BHECxaMc.js";import{a as Le,c as et}from"./common.utils-BXgvsAbj.js";import{p as tt,n as at,a as nt,b as ot,d as st}from"./validator.utils-BSOb9322.js";import{u as Ee}from"./formik.esm-X4pWCQgU.js";import{c as Te,F as X,b as ae}from"./index.esm-DXWgZSHY.js";import{u as De}from"./useApiResponseToast-CR3ZylCY.js";import{T as Ce}from"./chunk-4IH3O7BJ-BSUfzZnZ.js";import{p as rt}from"./index-CH91JLn2.js";import{I as it}from"./IconInfoCircle-DF-YfKml.js";import{I as lt}from"./IconTrash-CmToVWU0.js";import{I as Ae}from"./IconEdit-DHHo-74T.js";import{A as Ie}from"./chunk-V7PAE35Z-BuEgg6Tf.js";import{M as ct}from"./chunk-4FCEGNGT-DqvOsicM.js";import{L as Me}from"./chunk-K7XRJ7NL-DVxbvYYn.js";import{I as dt,a as ut,b as ht}from"./IconTextCaption-DuaqrD48.js";import{I as ke}from"./IconUsersGroup-D7nlVQeI.js";import{I as Se}from"./IconCirclePlus-D9W8Q483.js";import{T as Pe}from"./dateFormating-CjiM6gKV.js";import"./index-Dt6lv0Jl.js";import"./TagWithIcon-BmQxVHBm.js";import"./IconExternalLink-pP3M5HlB.js";import"./commonColumn-BU8VaRKf.js";/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var mt=ue("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pt=ue("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var gt=ue("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]),ne=function(){return ne=Object.assign||function(d){for(var f,v=1,p=arguments.length;v<p;v++){f=arguments[v];for(var u in f)Object.prototype.hasOwnProperty.call(f,u)&&(d[u]=f[u])}return d},ne.apply(this,arguments)},ft=function(d,f){var v={};for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&f.indexOf(p)<0&&(v[p]=d[p]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,p=Object.getOwnPropertySymbols(d);u<p.length;u++)f.indexOf(p[u])<0&&Object.prototype.propertyIsEnumerable.call(d,p[u])&&(v[p[u]]=d[p[u]]);return v},vt=function(d){var f=d.className,v=d.style,p=d.rules,u=d.value,r=d.valueAgain,I=d.minLength,k=d.maxLength,w=d.rtl,S=d.onChange,j=d.specialCharsRegex,P=j===void 0?/[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/g:j,D=d.messages,M=D===void 0?{}:D,A=ft(d,["className","style","rules","value","valueAgain","minLength","maxLength","rtl","onChange","specialCharsRegex","messages"]),y={minLength:{valid:u.length>=(I||100),message:M.minLength||"Password has at least ".concat(I," characters.")},specialChar:{valid:P.test(u),message:M.specialChar||"Password has special characters."},number:{valid:/\d/g.test(u),message:M.number||"Password has a number."},capital:{valid:function(){var x=0;if(u.length===0)return!1;for(;x<u.length;){var C=u.charAt(x);if(C!=C.toLowerCase()){if(C==C.toUpperCase())return!0}x++}return!1}(),message:M.capital||"Password has a capital letter."},match:{valid:u.length>0&&u===r,message:M.match||"Passwords match."},lowercase:{valid:function(){var x=0;if(u.length===0)return!1;for(;x<u.length;){var C=u.charAt(x);if(C!=C.toUpperCase()){if(C==C.toLowerCase())return!0}x++}return!1}(),message:M.lowercase||"Password has a lowercase letter."},letter:{valid:/[a-zA-Z]/g.test(u),message:M.letter||"Password has a letter."},maxLength:{valid:u.length<=(k||16),message:M.maxLength||"Password has no more than ".concat(k," characters.")},notEmpty:{valid:!!(u.length>0&&r&&r.length>0),message:M.notEmpty||"Password fields are not empty."}},O=$.useMemo(function(){return p.filter(function(x){return!!y[x]})},[p]),U=O.every(function(x){return y[x].valid}),F=$.useMemo(function(){return O.filter(function(x){return!y[x].valid})},[u,r,O]);return $.useEffect(function(){typeof S=="function"&&S(U,F)},[U,F]),w&&(f=f?f+" rtl":"rtl"),J.createElement("ul",{className:f,style:ne({margin:0,padding:0},v)},O.map(function(x){var C=y[x],E=C.message,B=C.valid;return J.createElement(xt,ne({key:x,valid:B,iconSize:18,validColor:"#4BCA81",invalidColor:"#FF0033",rtl:w},A),E)}))},xt=function(d){var f=d.valid,v=d.iconSize,p=d.validColor,u=d.invalidColor,r=d.validTextColor,I=d.invalidTextColor,k=d.iconComponents,w=d.hideIcon,S=d.rtl,j=d.children;return J.createElement("li",{className:f?"valid":"invalid",style:{listStyleType:"none",display:"flex",alignItems:"flex-start",margin:"2px 0"}},w?null:k?f?k.ValidIcon:k.InvalidIcon:J.createElement("svg",{className:"checklist-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:v,height:v,viewBox:"0 0 512 512",style:{marginRight:S?0:5,marginLeft:S?5:0}},J.createElement("path",{fill:f?p:u,d:f?"M432 64l-240 240-112-112-80 80 192 192 320-320z":"M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"})),J.createElement("span",{style:{paddingTop:2,opacity:f?1:I?void 0:.5,flex:1,color:f?r:I}},j))};const yt=vt;function bt({data:d,...f}){const{isOpen:v,onOpen:p,onClose:u}=pe(),{apiResponseToast:r,toast:I}=De(),[k,w]=$.useState(!1),{userId:S}=d,{handleChange:j,handleBlur:P,values:D,touched:M,errors:A,isSubmitting:y,setSubmitting:O,handleSubmit:U,resetForm:F}=Ee({initialValues:{password:"",confirmPassword:"",newPassword:""},validationSchema:Te().shape({password:tt.required("Wajib diisi")}),onSubmit:x=>{if(!k){O(!1),I({title:"Opss",description:"Masukan kata sandi baru sesuai intruksi",status:"warning"});return}const{password:C,newPassword:E}=Le(x);ge.put(`${he}/users/${S}/password`,{password:C,newPassword:E}).then(({data:B})=>{O(!1),r(B,{onSuccess:u})})}});return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:p,...f}),a.jsxs(fe,{size:"lg",autoFocus:!1,isOpen:v,onClose:u,onCloseComplete:F,closeOnOverlayClick:!1,children:[a.jsx(ve,{}),a.jsx(xe,{children:a.jsxs("form",{onSubmit:U,className:"my-form",children:[a.jsx(ye,{children:"Perbarui Kata Sandi"}),a.jsx(be,{children:a.jsxs(me,{mx:"auto",spacing:"2",maxW:"container.sm",children:[a.jsxs(q,{isInvalid:!!A.password&&M.password,children:[a.jsx(X,{children:"Kata sandi"}),a.jsx(ie,{id:"password",name:"password",autoComplete:"password",placeholder:"Masukkan kata sandi saat ini",onChange:j,onBlur:P}),a.jsx(ae,{children:A.password})]}),a.jsxs(q,{children:[a.jsx(X,{children:"Kata sandi Baru"}),a.jsx(ie,{id:"newPassword",name:"newPassword",placeholder:"Masukkan kata sandi",onChange:j})]}),a.jsxs(q,{children:[a.jsx(X,{children:"Konfirmasi Kata Sandi"}),a.jsx(ie,{id:"confirmPassword",name:"confirmPassword",autoComplete:"new-password",placeholder:"Tulis ulang kata sandi anda",onChange:j})]}),a.jsx(yt,{style:{width:"100%",marginTop:"0.5em"},rules:["minLength","number","capital","match"],minLength:8,value:D.newPassword,valueAgain:D.confirmPassword,onChange:w,messages:{minLength:"Kata sandi harus lebih dari 8 karakter",number:"Kata sandi harus mengandung angka",capital:"Kata sandi harus mengandung huruf kapital",match:"Tulis ulang kata sandi"},iconComponents:{ValidIcon:a.jsx(mt,{color:"green",size:"20",style:{margin:"3px 5px 0 0"}}),InvalidIcon:a.jsx(pt,{color:"red",size:"20",style:{margin:"3px 5px 0 0"}})}})]})}),a.jsxs(we,{children:[a.jsx(T,{variant:"ghost",onClick:u,children:"Batal"}),a.jsx(T,{isLoading:y,type:"submit",colorScheme:"blue",ml:3,children:"Submit"})]})]})})]})]})}function wt({data:d,mutate:f,...v}){const{name:p,phone:u,description:r,address:I}=d,k={name:p,phone:u,description:r,address:I},{isOpen:w,onOpen:S,onClose:j}=pe(),{id:P}=Oe(),{apiResponseToast:D,toast:M}=De(),{values:A,errors:y,touched:O,isSubmitting:U,handleSubmit:F,handleBlur:x,resetForm:C,handleChange:E,setSubmitting:B}=Ee({initialValues:k,validationSchema:Te().shape({name:at.required("Wajib diisi"),phone:nt.required("Wajib diisi"),address:ot.required("Wajib diisi"),description:st.nullable()}),onSubmit:Q=>{Le(Q);const ee=et(k,Q);if(Object.keys(ee).length===0){M({title:"Opss !!!",description:"Belum ada yang disunting",status:"warning"}),B(!1);return}ge.put(`${he}/users/${P}/`,{...ee}).then(({data:Y})=>{B(!1),D(Y,{onSuccess(){f(),j()}})})}});return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:S,...v}),a.jsxs(fe,{size:"lg",autoFocus:!1,isOpen:w,onClose:j,closeOnOverlayClick:!1,children:[a.jsx(ve,{}),a.jsx(xe,{children:a.jsxs("form",{onSubmit:F,className:"my-form",children:[a.jsx(ye,{children:"Sunting Profil"}),a.jsx(be,{children:a.jsxs(me,{mx:"auto",spacing:"2",maxW:"container.sm",children:[a.jsxs(q,{isInvalid:!!y.name&&O.name,children:[a.jsx(X,{children:"Nama"}),a.jsx(le,{id:"name",name:"name",placeholder:"Misal : Suparna",onChange:E,onBlur:x,value:A.name}),a.jsx(ae,{children:y.name})]}),a.jsxs(q,{isInvalid:!!y.phone&&O.phone,children:[a.jsx(X,{children:"Nomor Telepon"}),a.jsx(le,{id:"phone",name:"phone",placeholder:"Misal : 087812345678",onChange:E,onBlur:x,value:A.phone}),a.jsx(ae,{children:y.phone})]}),a.jsxs(q,{isInvalid:!!y.address&&O.address,children:[a.jsx(X,{children:"Alamat"}),a.jsx(Ce,{id:"address",name:"address",placeholder:"Masukkan Alamat Tempat tinggal Pengguna",onChange:E,onBlur:x,value:A.address}),a.jsx(ae,{children:y.address})]}),a.jsxs(q,{isInvalid:!!y.description&&O.description,children:[a.jsx(X,{children:"Description"}),a.jsx(Ce,{id:"description",name:"description",placeholder:"Opsional",onChange:E,onBlur:x,value:A.description}),a.jsx(ae,{children:y.description})]})]})}),a.jsxs(we,{children:[a.jsx(T,{variant:"ghost",onClick:()=>{C(),j()},children:"Batal"}),a.jsx(T,{isLoading:U,type:"submit",colorScheme:"blue",ml:3,children:"Submit"})]})]})})]})]})}var Be={exports:{}};(function(d,f){(function(v,p){d.exports=p(rt,$)})(Fe,function(v,p){function u(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var r=u(v),I=u(p);function k(o,c){for(var i=0;i<c.length;i++){var h=c[i];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(o,h.key,h)}}function w(o,c,i){return c in o?Object.defineProperty(o,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[c]=i,o}function S(){return(S=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&(o[h]=i[h])}return o}).apply(this,arguments)}function j(o,c){var i,h=Object.keys(o);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(o),c&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),h.push.apply(h,i)),h}function P(o){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?j(Object(i),!0).forEach(function(h){w(o,h,i[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach(function(h){Object.defineProperty(o,h,Object.getOwnPropertyDescriptor(i,h))})}return o}function D(o){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)})(o)}function M(o,c){return(M=Object.setPrototypeOf||function(i,h){return i.__proto__=h,i})(o,c)}function A(o,c){if(o==null)return{};var i,h=function(n,s){if(n==null)return{};for(var l,m={},g=Object.keys(n),b=0;b<g.length;b++)l=g[b],0<=s.indexOf(l)||(m[l]=n[l]);return m}(o,c);if(Object.getOwnPropertySymbols)for(var e=Object.getOwnPropertySymbols(o),t=0;t<e.length;t++)i=e[t],0<=c.indexOf(i)||Object.prototype.propertyIsEnumerable.call(o,i)&&(h[i]=o[i]);return h}function y(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function O(o){var c=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var i,h,e,t,n=D(o);return h=c?(i=D(this).constructor,Reflect.construct(n,arguments,i)):n.apply(this,arguments),e=this,!(t=h)||typeof t!="object"&&typeof t!="function"?y(e):t}}function U(o,c){return function(i){if(Array.isArray(i))return i}(o)||function(i,h){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var e=[],t=!0,n=!1,s=void 0;try{for(var l,m=i[Symbol.iterator]();!(t=(l=m.next()).done)&&(e.push(l.value),!h||e.length!==h);t=!0);}catch(g){n=!0,s=g}finally{try{t||m.return==null||m.return()}finally{if(n)throw s}}return e}}(o,c)||F(o,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function F(o,c){if(o){if(typeof o=="string")return x(o,c);var i=Object.prototype.toString.call(o).slice(8,-1);return i==="Object"&&o.constructor&&(i=o.constructor.name),i==="Map"||i==="Set"?Array.from(o):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(o,c):void 0}}function x(o,c){(c==null||c>o.length)&&(c=o.length);for(var i=0,h=new Array(c);i<c;i++)h[i]=o[i];return h}function C(o,c){return new Promise(function(i,h){var e,t=new Image;t.onload=function(){return i(t)},t.onerror=h,!((e=o)!==null&&e.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&c&&(t.crossOrigin=c),t.src=o})}var E,B=!(typeof window>"u"||typeof navigator>"u"||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),Q=typeof File<"u",ee={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},Y=B?ee.touch:ee.desktop,G=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,oe={x:.5,y:.5},se=function(){(function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)})(h,I.default.Component);var o,c,i=O(h);function h(e){var t;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,h),w(y(t=i.call(this,e)),"state",{drag:!1,my:null,mx:null,image:oe}),w(y(t),"handleImageReady",function(n){var s=t.getInitialSize(n.width,n.height);s.resource=n,s.x=.5,s.y=.5,s.backgroundColor=t.props.backgroundColor,t.setState({drag:!1,image:s},t.props.onImageReady),t.props.onLoadSuccess(s)}),w(y(t),"clearImage",function(){t.canvas.getContext("2d").clearRect(0,0,t.canvas.width,t.canvas.height),t.setState({image:oe})}),w(y(t),"handleMouseDown",function(n){(n=n||window.event).preventDefault(),t.setState({drag:!0,mx:null,my:null})}),w(y(t),"handleMouseUp",function(){t.state.drag&&(t.setState({drag:!1}),t.props.onMouseUp())}),w(y(t),"handleMouseMove",function(n){var s,l,m,g,b,R,L,z,Z,_,H,V,N,je,re,K;n=n||window.event,t.state.drag!==!1&&(n.preventDefault(),m={mx:s=n.targetTouches?n.targetTouches[0].pageX:n.clientX,my:l=n.targetTouches?n.targetTouches[0].pageY:n.clientY},K=t.props.rotate,K=(K%=360)<0?K+360:K,t.state.mx&&t.state.my&&(g=t.state.mx-s,b=t.state.my-l,R=t.state.image.width*t.props.scale,L=t.state.image.height*t.props.scale,Z=(z=t.getCroppingRect()).x,_=z.y,Z*=R,_*=L,H=function(Ue){return Ue*(Math.PI/180)},V=Math.cos(H(K)),je=_+-g*(N=Math.sin(H(K)))+b*V,re={x:(Z+g*V+b*N)/R+1/t.props.scale*t.getXScale()/2,y:je/L+1/t.props.scale*t.getYScale()/2},t.props.onPositionChange(re),m.image=P(P({},t.state.image),re)),t.setState(m),t.props.onMouseMove(n))}),w(y(t),"setCanvas",function(n){t.canvas=n}),t.canvas=null,t}return o=h,(c=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(G=1);var e,t,n=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(n),document&&(e=!!function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",l,l),window.removeEventListener("test",l,l)}catch{s=!1}return s}()&&{passive:!1},t=Y.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),B&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===oe||this.clearImage();var n=this.canvas.getContext("2d");n.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=Y.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),B&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&e!==void 0?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,n=e.height,s=e.rotate,l=e.border,m={},g=U(this.getBorders(l),2),b=g[0],R=g[1],L=t,z=n;return this.isVertical()?(m.width=z,m.height=L):(m.width=L,m.height=z),m.width+=2*b,m.height+=2*R,{canvas:m,rotate:s,width:t,height:n,border:l}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var n=document.createElement("canvas");this.isVertical()?(n.width=e.height,n.height=e.width):(n.width=e.width,n.height=e.height);var s=n.getContext("2d");return s.translate(n.width/2,n.height/2),s.rotate(this.props.rotate*Math.PI/180),s.translate(-n.width/2,-n.height/2),this.isVertical()&&s.translate((n.width-n.height)/2,(n.height-n.width)/2),t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),s.drawImage(t.resource,-e.x,-e.y),n}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,n=e.height,s=document.createElement("canvas");return this.isVertical()?(s.width=n,s.height=t):(s.width=t,s.height=n),this.paintImage(s.getContext("2d"),this.state.image,0,1),s}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),n=1/this.props.scale*this.getYScale(),s={x:e.x-t/2,y:e.y-n/2,width:t,height:n},l=0,m=1-s.width,g=0,b=1-s.height;return(this.props.disableBoundaryChecks||1<t||1<n)&&(l=-s.width,g=-s.height,b=m=1),P(P({},s),{},{x:Math.max(l,Math.min(s.x,m)),y:Math.max(g,Math.min(s.y,b))})}},{key:"loadImage",value:function(e){var t;Q&&e instanceof File?this.loadingImage=(t=e,new Promise(function(n,s){var l=new FileReader;l.onload=function(m){try{var g=C(m.target.result);n(g)}catch(b){s(b)}},l.readAsDataURL(t)}).then(this.handleImageReady).catch(this.props.onLoadFailure)):typeof e=="string"&&(this.loadingImage=C(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var n,s,l=this.getDimensions();return t/e<l.height/l.width?s=e*((n=this.getDimensions().height)/t):n=t*((s=this.getDimensions().width)/e),{height:n,width:s}}},{key:"paintImage",value:function(e,t,n,s){var l,m=3<arguments.length&&s!==void 0?s:G;t.resource&&(l=this.calculatePosition(t,n),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(m,m),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,l.x,l.y,l.width,l.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(l.x,l.y,l.width,l.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var n=U(this.getBorders(t),2),s=n[0],l=n[1],m=this.getCroppingRect(),g=e.width*this.props.scale,b=e.height*this.props.scale,R=-m.x*g,L=-m.y*b;return this.isVertical()?(R+=l,L+=s):(R+=s,L+=l),{x:R,y:L,height:b,width:g}}},{key:"paint",value:function(e){e.save(),e.scale(G,G),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,n,s,l,m,g,b,R,N=this.props.borderRadius,L=this.getDimensions(),z=U(this.getBorders(L.border),2),Z=z[0],_=z[1],H=L.canvas.height,V=L.canvas.width,N=Math.max(N,0);N=Math.min(N,V/2-Z,H/2-_),e.beginPath(),t=e,l=V-2*(n=Z),m=H-2*(s=_),(g=N)===0?t.rect(n,s,l,m):(b=l-g,R=m-g,t.translate(n,s),t.arc(g,g,g,Math.PI,1.5*Math.PI),t.lineTo(b,0),t.arc(b,g,g,1.5*Math.PI,2*Math.PI),t.lineTo(l,R),t.arc(b,R,g,2*Math.PI,.5*Math.PI),t.lineTo(g,m),t.arc(g,R,g,.5*Math.PI,Math.PI),t.translate(-n,-s)),e.rect(V,0,-V,H),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),n=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,A(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),s=this.getDimensions(),l={width:s.canvas.width,height:s.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},m={width:s.canvas.width*G,height:s.canvas.height*G,style:P(P({},l),t)};return m[Y.react.down]=this.handleMouseDown,B&&(m[Y.react.mouseDown]=this.handleMouseDown),I.default.createElement("canvas",S({ref:this.setCanvas},m,n))}}])&&k(o.prototype,c),h}();return w(se,"propTypes",{scale:r.default.number,rotate:r.default.number,image:r.default.oneOfType([r.default.string].concat(function(o){if(Array.isArray(o))return x(o)}(E=Q?[r.default.instanceOf(File)]:[])||function(o){if(typeof Symbol<"u"&&Symbol.iterator in Object(o))return Array.from(o)}(E)||F(E)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),border:r.default.oneOfType([r.default.number,r.default.arrayOf(r.default.number)]),borderRadius:r.default.number,width:r.default.number,height:r.default.number,position:r.default.shape({x:r.default.number,y:r.default.number}),color:r.default.arrayOf(r.default.number),backgroundColor:r.default.string,crossOrigin:r.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:r.default.func,onLoadSuccess:r.default.func,onImageReady:r.default.func,onImageChange:r.default.func,onMouseUp:r.default.func,onMouseMove:r.default.func,onPositionChange:r.default.func,disableBoundaryChecks:r.default.bool,disableHiDPIScaling:r.default.bool,disableCanvasRotation:r.default.bool}),w(se,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),se})})(Be);var jt=Be.exports;const Ct=ze(jt);function It({name:d,src:f}){const v=$.useRef(),p=$.useRef(),[u,r]=$.useState(null),{isOpen:I,onOpen:k,onClose:w}=pe(),S=async()=>{if(p.current){const j=p.current.getImage().toDataURL();ge.post(he+"/upload",{images:[j]}).then(P=>console.log(P.data))}};return a.jsxs(a.Fragment,{children:[a.jsx(Ie,{rounded:"md",cursor:"pointer",onClick:k,size:"2xl",src:f||void 0,name:d}),a.jsxs(fe,{autoFocus:!1,isOpen:I,onClose:w,onCloseComplete:()=>r(null),closeOnOverlayClick:!1,children:[a.jsx(ve,{}),a.jsxs(xe,{children:[a.jsx(ct,{}),a.jsx(ye,{children:"Foto Profil Kamu"}),a.jsxs(be,{py:"0",as:me,children:[a.jsx(ce,{boxSize:"250px",rounded:"xl",overflow:"hidden",outline:u?"3px solid":"",outlineColor:"yellow.400",children:u?a.jsx(Ct,{ref:p,image:URL.createObjectURL(u),width:250,height:250,border:0,color:[255,255,255,.6],rotate:0}):a.jsx(Ie,{rounded:"0",size:"2xl",mx:"auto",boxSize:"full",aspectRatio:1,src:f||void 0,name:d})}),a.jsxs(W,{alignSelf:"start",children:[a.jsx(it,{size:"18"}),a.jsx(de,{children:u?"Paskan Foto dengan menggesernya":f?"Foto profil anda terlihat keren":"Anda Belum mengatur foto profil, Ayo atur sekarang"})]})]}),a.jsxs(we,{as:W,children:[!!f&&a.jsx(T,{leftIcon:a.jsx(lt,{size:"18"}),colorScheme:"red",children:"Hapus"}),a.jsx(Re,{}),a.jsx(T,{colorScheme:"orange",leftIcon:a.jsx(Ae,{size:"18"}),onClick:()=>{v.current&&v.current.click()},children:"Ubah"}),!!u&&a.jsx(T,{type:"submit",colorScheme:"blue",onClick:S,children:"Simpan"}),a.jsx(le,{ref:v,type:"file",display:"none",accept:"image/*",id:"upload",onChange:j=>j.target.files?r(j.target.files[0]):null})]})]})]})]})}function ea(){const d=He(),{user:f,roleIs:v}=Ke(),p=d.pathname=="/account",u=p?f.userId:Oe().id,{data:r,mutate:I}=We(`/users/${u}`,qe);return r?a.jsxs(ce,{children:[a.jsx($e,{Icon:a.jsx(Ye,{}),text:"Detail Akun"}),a.jsxs(Ve,{mt:"8",maxW:"container.md",children:[a.jsxs(W,{spacing:"6",children:[a.jsx(It,{name:r.name,src:r.profilePicture}),a.jsxs(ce,{children:[a.jsx(_e,{value:r.role}),a.jsx(Ne,{mb:"1",fontSize:"2xl",children:r.name}),a.jsxs(W,{children:[a.jsx(gt,{size:"16"}),a.jsx(Me,{href:"mailto:"+r.email,children:r.email})]}),a.jsxs(W,{children:[a.jsx(dt,{size:"16"}),a.jsx(Me,{href:"tel:"+r.phone,children:r.phone})]})]}),a.jsx(Re,{}),(p||v("admin"))&&a.jsx(wt,{colorScheme:"blue",alignSelf:"start",leftIcon:a.jsx(Ae,{size:"16"}),children:"Sunting Profil",data:r,mutate:I})]}),a.jsx(te,{IconEl:ut,children:"Alamat"}),a.jsx(de,{children:r.address}),a.jsx(te,{IconEl:ht,children:"Deskripsi pengguna"}),a.jsx(de,{fontStyle:r.description?"normal":"italic",color:r.description?"inherit":"gray.500",children:r.description||"Tidak Ada Deskripsi pengguna"}),!p&&a.jsxs(a.Fragment,{children:[r.role=="manager"&&a.jsxs(a.Fragment,{children:[a.jsxs(te,{IconEl:ke,children:["Usaha Anda",a.jsx(Pe,{colorScheme:"blue",ml:"2",children:r.countManagedCompany||0})]}),v("admin")&&a.jsx(Ge,{to:"/companies/create",children:a.jsx(T,{colorScheme:"blue",leftIcon:a.jsx(Se,{size:"18"}),children:"Tambahkan Usaha"})}),a.jsx(Je,{mt:"4",data:r,mutate:I})]}),a.jsxs(te,{IconEl:ke,children:["Node yang Anda Ikuti",a.jsx(Pe,{colorScheme:"blue",ml:"2",children:r.countSubscribedNodes||0})]}),v("admin")&&a.jsx(W,{children:a.jsx(T,{colorScheme:"blue",leftIcon:a.jsx(Se,{size:"18"}),children:"Tambahkan Node"})}),a.jsx(Qe,{mt:"4",data:r,mutate:I})]}),(p||v("admin"))&&a.jsxs(a.Fragment,{children:[a.jsx(te,{IconEl:Ze,children:"Autentikasi"}),a.jsxs(W,{justify:"space-between",children:[a.jsx(bt,{colorScheme:"yellow",data:r,children:"Ganti Kata Sandi"}),a.jsx(T,{colorScheme:"red",children:"Hapus Akun"})]})]})]})]}):a.jsx(Xe,{})}export{ea as default};
