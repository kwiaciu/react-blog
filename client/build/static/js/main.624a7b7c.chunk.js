(this["webpackJsonppersonal-page-client"]=this["webpackJsonppersonal-page-client"]||[]).push([[0],{66:function(e,t,a){e.exports=a(78)},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(59),r=a.n(l),o=(a(71),a(87)),u=a(88),i=a(90),m=a(18),s=a(9),E=(a(72),a(4)),h=a(86),p=function(e){var t=e.match,a=Object(n.useState)(null),l=Object(E.a)(a,2),r=l[0],o=l[1],u=Object(n.useState)(!1),i=Object(E.a)(u,2),s=i[0],p=i[1],d=Object(n.useState)([]),b=Object(E.a)(d,2),g=b[0],f=b[1];return console.log("match url:".concat(t.url)),Object(n.useEffect)((function(){fetch("http://localhost:3000/api/posts").then((function(e){return e.json()})).then((function(e){p(!0),f(e)}),(function(e){p(!0),o(e)}))}),[]),r?c.a.createElement("div",null,"Error: ",r.message):s?c.a.createElement("ul",null,g.map((function(e){return c.a.createElement(h.a,{margin:"4",padding:"2",bg:"gray.100",border:"1px",borderRadius:"md",key:e._id},c.a.createElement(m.b,{to:"".concat(t.url,"posts/").concat(e._id)},c.a.createElement("li",null,c.a.createElement("h2",null,e.title),c.a.createElement("p",null,e.shortContent))))}))):c.a.createElement("div",null,"Loading...")},d=function(e){var t=e.match,a=Object(n.useState)([]),l=Object(E.a)(a,2),r=(l[0],l[1],function(e){var t=Object(n.useState)(null),a=Object(E.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)(!1),o=Object(E.a)(r,2),u=o[0],i=o[1],m=Object(n.useState)([]),s=Object(E.a)(m,2),h=s[0],p=s[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(!0),p(e)}),(function(e){i(!0),l(e)}))}),[]),c?c.message:u?h:"loading"}("http://localhost:3000/api/posts/".concat(t.params._id)));return console.log(r),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{margin:"4",padding:"2",bg:"gray.100",border:"1px",borderRadius:"md"},c.a.createElement("h2",null,r.title),c.a.createElement("h6",null,r.createdAt),c.a.createElement("p",null,r.longContent),c.a.createElement(m.b,{to:"/"},"Back")))};var b=function(){return c.a.createElement(m.a,null,c.a.createElement(o.a,{className:"App"},c.a.createElement(m.b,{to:"/"},c.a.createElement("header",null,c.a.createElement("h1",null,"Greatest react blog ever"))),c.a.createElement(o.a,null,c.a.createElement("nav",null,c.a.createElement(u.a,{spacing:"4"},c.a.createElement(m.b,{to:"/"},c.a.createElement(i.a,{colorScheme:"teal",size:"lg"},"Home")),c.a.createElement(m.b,{to:"/admin"},c.a.createElement(i.a,{colorScheme:"teal",size:"lg"},"Profile"))))),c.a.createElement("main",null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/posts/:_id",component:d}),c.a.createElement(s.a,{exact:!0,path:"/admin"}),c.a.createElement(s.a,{exact:!0,path:"/",component:p})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(89);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,null,c.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.624a7b7c.chunk.js.map