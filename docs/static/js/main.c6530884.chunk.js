(this["webpackJsonpwd-6"]=this["webpackJsonpwd-6"]||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(17),s=n.n(o),r=(n(22),n(8)),i=n(4),l=n(3),u=n.n(l),d=(n(41),n(0)),h="https://getpantry.cloud/apiv1/pantry/ecf03d36-db58-4d1f-b2d2-be3de4515084/basket/",j=function(){return String.fromCharCode(Math.floor(97+26*Math.random()))};var b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(-1),s=Object(i.a)(o,2),l=s[0],b=s[1],O=Object(c.useState)([]),f=Object(i.a)(O,2),m=f[0],g=f[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),v=p[0],y=p[1],C=Object(c.useState)([]),N=Object(i.a)(C,2),S=N[0],k=N[1],w=function(e){return function(){u.a.delete(h+m[e].name).then((function(){for(var t=[],n=0;n<m.length;n++)n!==e&&t.push(m[n]);g(t),b(-1),a("")})).catch((function(e){return console.log(e)}))}};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"header",children:"Secrets Locker"}),Object(d.jsx)("p",{className:"description",children:"This is a shared secrets locker. Anyone else can come to this page and access a secret given the secret name. Only you can edit your secrets as long as you are on this page. Secrets remain unless you delete them manually."}),Object(d.jsx)("h2",{className:"header",children:"Get data:"}),Object(d.jsx)("textarea",{placeholder:"Name",value:v,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){u.a.get(h+v).then((function(e){console.log(e),k(e.data),console.log(S),console.log(S.name),console.log(S.body)})).catch((function(){console.log("No Results!"),k([])}))},children:"Search"}),0===S.length?"No Results":Object(d.jsxs)("div",{className:"secret container",children:[Object(d.jsx)("h4",{children:S.name}),Object(d.jsx)("p",{children:S.body})]}),Object(d.jsx)("h2",{className:"header",children:"Manage data:"}),Object(d.jsx)("h3",{className:"header",children:l<0?"Create New:":"Edit secret '".concat(m[l].name,"':")}),Object(d.jsx)("textarea",{placeholder:"Data",value:n,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){l<0?function(){var e=j()+j()+j()+j(),t={name:e,body:n};u.a.post(h+e,t).then((function(){g([].concat(Object(r.a)(m),[t])),a("")})).catch((function(){return console.log("create failure")}))}():function(){var e={name:m[l].name,body:n};u.a.put(h+m[l].name,e).then((function(){m[l].body=n,g(Object(r.a)(m)),b(-1),a("")})).catch((function(){return console.log("edit failure")}))}()},children:"Save"}),l>=0&&Object(d.jsx)("button",{onClick:function(){b(-1),a("")},children:"Cancel edit"}),Object(d.jsx)("h3",{className:"header",children:"Update/Delete:"}),m.map((function(e,t){return Object(d.jsxs)("div",{className:"secret container",children:[Object(d.jsx)("h4",{children:e.name}),Object(d.jsx)("p",{children:e.body}),Object(d.jsx)("button",{onClick:(n=t,function(){b(n)}),children:"Edit"}),Object(d.jsx)("button",{onClick:w(t),children:"Delete"})]},e.name);var n}))]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.c6530884.chunk.js.map