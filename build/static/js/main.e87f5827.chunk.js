(this.webpackJsonplab=this.webpackJsonplab||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),j=(n(10),n(2)),r=n(3),l="https://lab4and5.herokuapp.com/",o=(n(11),n(0));var b=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(r.a)(s,2),b=(i[0],i[1]),u=Object(c.useState)({name:"",address:"",email:"",phone:""}),d=Object(r.a)(u,2),h=d[0],m=d[1],O=Object(c.useState)(),p=Object(r.a)(O,2),f=p[0],x=p[1];Object(c.useEffect)((function(){fetch("".concat(l,"emp")).then((function(e){return e.json()})).then((function(e){return a(e)})),fetch("".concat(l,"file")).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]);var v=function(e,t){"name"===t&&m(Object(j.a)(Object(j.a)({},h),{},{name:e.target.value})),"address"===t&&m(Object(j.a)(Object(j.a)({},h),{},{address:e.target.value})),"email"===t&&m(Object(j.a)(Object(j.a)({},h),{},{email:e.target.value})),"phone"===t&&m(Object(j.a)(Object(j.a)({},h),{},{phone:e.target.value}))},N=n.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("p",{children:["\u0418\u043c\u044f: ",e.name]}),Object(o.jsxs)("p",{children:["\u041f\u043e\u0447\u0442\u0430: ",e.email]}),Object(o.jsxs)("p",{children:["\u0410\u0434\u0440\u0435\u0441: ",e.address]}),Object(o.jsxs)("p",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",e.phone]})]},e.id)}));return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("h2",{children:"\u041b\u044e\u0434\u0438"}),N]}),Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("h2",{children:"\u0424\u0430\u0439\u043b\u044b"}),"rfhn"]})]}),Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsxs)("form",{className:"form",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("h6",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(o.jsx)("input",{className:"input",type:"text",value:h.name,onChange:function(e){return v(e,"name")}})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("h6",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"}),Object(o.jsx)("input",{className:"input",type:"text",value:h.address,onChange:function(e){return v(e,"address")}})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("h6",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"}),Object(o.jsx)("input",{className:"input",type:"email",value:h.email,onChange:function(e){return v(e,"email")}})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("h6",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(o.jsx)("input",{className:"input",type:"text",value:h.phone,onChange:function(e){return v(e,"phone")}})]}),Object(o.jsx)("button",{className:"button",type:"button",onClick:function(){var e;h.name&&(e=h,fetch("".concat(l,"add_emp"),{method:"POST",body:JSON.stringify(e)})).then((function(e){return console.log(e)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442"})]}),Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)("h6",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0444\u0430\u0439\u043b"}),Object(o.jsx)("input",{className:"input",type:"file",onChange:function(e){x({document:e.target.files[0],name:e.target.files[0].name})}}),Object(o.jsx)("button",{className:"button",type:"button",onClick:function(){if(f){var e=new FormData;e.append("data",f.document),e.append("file_name",f.name),e.append("extencion",".".concat(f.name.split(".").pop())),t=e,fetch("".concat(l,"add_file"),{method:"POST",body:t})}var t},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b"})]})]})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e87f5827.chunk.js.map