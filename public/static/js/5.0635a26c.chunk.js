(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{47:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(49);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},49:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},50:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));var a=n(16);var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},56:function(e,t,n){"use strict";var a=n(10),r=n(47),i=n(0),c=n.n(i),l=n(50),u=(n(57),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],l=n[1],o=e.id,s=e.onInput,d=r.value,p=r.isValid;Object(i.useEffect)((function(){s(o,d,p)}),[o,d,p,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},57:function(e,t,n){},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(49),i=n(47),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},59:function(e,t,n){"use strict";var a=n(10),r=n(0),i=n.n(r),c=n(48);n(60);t.a=function(e){var t=Object(r.useState)(),n=Object(a.a)(t,2),l=n[0],u=n[1],o=Object(r.useState)(),s=Object(a.a)(o,2),d=s[0],p=s[1],f=Object(r.useState)(!1),v=Object(a.a)(f,2),b=v[0],m=v[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,a=b;t.target.files&&1===t.target.files.length?(n=t.target.files[0],u(n),m(!0),a=!0):(m(!1),a=!1),e.onInput(e.id,n,a)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},d&&i.a.createElement("img",{src:d,alt:"Preview"}),!d&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){O.current.click()}},"Pick Image")),!b&&i.a.createElement("p",null,e.errorText))}},60:function(e,t,n){},61:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a),i=n(52),c=n(10),l=n(0),u=n.n(l),o=n(1),s=n(56),d=n(48),p=n(50),f=n(58),v=n(55),b=n(11),m=n(54),O=n(15),j=n(59);n(61);t.default=function(){var e=Object(l.useContext)(b.a),t=Object(v.a)(),n=t.isLoading,a=t.error,y=t.sendRequest,E=t.clearError,h=Object(f.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(c.a)(h,2),T=g[0],w=g[1],I=Object(o.g)(),V=function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",T.inputs.title.value),a.append("description",T.inputs.description.value),a.append("address",T.inputs.address.value),a.append("image",T.inputs.image.value),t.next=9,y("https://kev-mern.herokuapp.com/api","POST",a,{Authorization:"Bearer "+e.token});case 9:I.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{error:a,onClear:E}),u.a.createElement("form",{className:"place-form",onSubmit:V},n&&u.a.createElement(O.a,{asOverlay:!0}),u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(p.c)()],errorText:"Please enter a valid Title",onInput:w}),u.a.createElement(s.a,{id:"description",element:"textarea",type:"text",label:"Description",validators:[Object(p.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:w}),u.a.createElement(s.a,{id:"address",element:"input",label:"Address",validators:[Object(p.c)()],errorText:"Please enter a valid address.",onInput:w}),u.a.createElement(j.a,{id:"image",onInput:w,errorText:"Please provide an image."}),u.a.createElement(d.a,{type:"submit",disabled:!T.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.0635a26c.chunk.js.map