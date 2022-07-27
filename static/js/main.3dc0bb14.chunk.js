(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),l=c(2),r=c(3),i=c.n(r),d=c(1),o=(c(13),c(14),c(0)),j=function(e){var t=e.getInput,c=Object(d.useState)(""),s=Object(l.a)(c,2),a=s[0],n=s[1],r=Object(d.useState)("all"),i=Object(l.a)(r,2),j=i[0],u=i[1];return Object(d.useEffect)((function(){t(a,j)}),[a,j]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:j,onChange:function(e){u(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){n(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n("")}})})]})]})})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=c(4),m=c.n(h),O=function(e){var t=e.todos,c=e.select,s=e.selectTodo;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:!0===e.completed&&Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:m()("has-text",{"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:m()("far fa-eye",{"fa-eye-slash":s===e.id})})})})})]},e.id)}))})]})})},x=function(e){var t=e.todo,c=e.select,s=Object(d.useState)(null),a=Object(l.a)(s,2),r=a[0],j=a[1],h=Object(d.useState)(!0),O=Object(l.a)(h,2),x=O[0],f=O[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,s=t.userId,u("/users/".concat(s));case 3:c=e.sent,j(c),f(!1);case 6:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),r&&!x&&t?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:m()("has-text",{"has-text-danger":!t.completed},{"has-text-success":t.completed}),children:!1===t.completed?"Planned":"Done"})," by ",Object(o.jsx)("a",{href:"".concat(r.email),children:r.name})]})]})]}):Object(o.jsx)(b,{}),";"]})},f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)([]),r=Object(l.a)(a,2),h=r[0],m=r[1],f=Object(d.useState)(0),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(d.useState)(!0),g=Object(l.a)(y,2),k=g[0],w=g[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/todos");case 2:t=e.sent,s(t),w(!1),m(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(e){return N(e)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{getInput:function(e,t){var s=c.filter((function(t){return t.title.toLowerCase().includes(e)}));"active"===t&&(s=c.filter((function(e){return!1===e.completed}))),"completed"===t&&(s=c.filter((function(e){return!0===e.completed}))),m(s)}})}),Object(o.jsx)("div",{className:"block",children:k?Object(o.jsx)(b,{}):Object(o.jsx)(O,{todos:h,select:S,selectTodo:v})}),v>0&&Object(o.jsx)(x,{todo:h.find((function(e){return e.id===v})),select:S})]})})})})};a.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3dc0bb14.chunk.js.map