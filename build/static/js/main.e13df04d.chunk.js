(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactItem:"contacts_contactItem__2jYVd",delete:"contacts_delete__2CL1K"}},11:function(t,e,n){t.exports={headFilter:"filter_headFilter__pSVYN",inputFilter:"filter_inputFilter__1Mwai"}},2:function(t,e,n){t.exports={form:"form_form__3xB8N",labelForm:"form_labelForm__1iJm3",inputForm:"form_inputForm__3oJoM",buttonForm:"form_buttonForm__3LSzn"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(14),i=n(3),l=n(4),u=n(6),m=n(5),b=n(24),d=n(8),h=n.n(d),j=n(0);function f(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:h.a.section,children:[Object(j.jsx)("h2",{className:h.a.head,children:e}),n]})}var p=n(13),O=n(2),v=n.n(O),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handelChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.formSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:v.a.form,onSubmit:this.formSubmit,children:[Object(j.jsxs)("label",{className:v.a.labelForm,children:["Name",Object(j.jsx)("input",{className:v.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handelChange})]}),Object(j.jsxs)("label",{className:v.a.labelForm,children:["Number",Object(j.jsx)("input",{className:v.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handelChange})]}),Object(j.jsx)("button",{className:v.a.buttonForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=_,C=n(9),g=n.n(C),F=n(10),y=n.n(F);function N(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{id:e,className:y.a.contactItem,children:[a,": ",c,Object(j.jsx)("button",{className:y.a.delete,type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})}N.propTypec={contacts:g.a.array,onDeleteContact:g.a.func};var S=n(11),k=n.n(S);function w(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:[Object(j.jsx)("h3",{className:k.a.headFilter,children:"Find contacts by name"}),Object(j.jsx)("input",{className:k.a.inputFilter,type:"text",value:e,onChange:n})]})}var A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(b.a)(),name:n,number:a};t.state.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.doFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLocaleLowerCase();return a.filter((function(t){return t.name.toLocaleLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{title:"Phonebook",children:Object(j.jsx)(x,{onSubmit:this.addContact})}),Object(j.jsxs)(f,{title:"Contacts",children:[Object(j.jsx)(w,{value:this.state.filter,onChange:this.doFilter}),Object(j.jsx)(N,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),D=A;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={head:"section_head__3Z2l1",section:"section_section__3rwjQ"}}},[[22,1,2]]]);
//# sourceMappingURL=main.e13df04d.chunk.js.map