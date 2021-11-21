(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"Form_form___TDiq",label:"Form_label__sCdyb",input:"Form_input__1nJNG",button:"Form_button__GfTEW"}},,,function(e,t,n){e.exports={list:"ContactList_list__3Tgcf",item:"ContactList_item__3HdVG",button:"ContactList_button__1WnxS"}},,,function(e,t,n){e.exports={section:"Section_section__TIGxk",title:"Section_title__2txlq"}},function(e,t,n){e.exports={label:"Filter_label__rUwjr",input:"Filter_input__2c_BR"}},,function(e,t,n){e.exports={container:"Container_container__aAQYl"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(17),n(12)),s=n(3),u=n(21),l=n(11),b=n.n(l),m=n(0);var j=function(e){var t=e.children;return Object(m.jsx)("div",{className:b.a.container,children:t})},d=n(8),f=n.n(d);var O=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{className:f.a.section,children:[t&&Object(m.jsx)("h2",{className:f.a.title,children:t}),n]})},_=n(5),h=n.n(_),p=function(e){var t=e.name,n=e.number,a=e.onClick;return Object(m.jsxs)("li",{className:h.a.item,children:[Object(m.jsxs)("p",{children:[t,": ",n]}),Object(m.jsx)("button",{type:"button",className:h.a.button,onClick:a,children:"Delete"})]})},x=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsx)(p,{name:a,number:c,onClick:function(){return n(t)}},t)}))})},v=n(2),C=n.n(v);function N(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],b=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":b(a);break;default:return}},d=function(){i(""),b("")};return Object(m.jsxs)("form",{className:C.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),d()},children:[Object(m.jsxs)("label",{className:C.a.label,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",className:C.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j})]}),Object(m.jsxs)("label",{className:C.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",className:C.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:j})]}),Object(m.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}var g=n(9),S=n.n(g);var k=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",className:S.a.input,value:t,onChange:n})]})};function y(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(m.jsxs)(j,{children:[Object(m.jsx)(O,{title:"Phonebook",children:Object(m.jsx)(N,{onSubmit:function(e){var t=e.name,n=e.number,a={id:Object(u.a)(),name:t,number:n};c((function(e){return e.some((function(e){return e.name===t}))?(alert("".concat(t," is already in contacts!")),e):[a].concat(Object(o.a)(e))}))}})}),Object(m.jsxs)(O,{title:"Contacts",children:[Object(m.jsx)(k,{value:l,onChange:function(e){b(e.target.value)}}),Object(m.jsx)(x,{contacts:d,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e7301449.chunk.js.map