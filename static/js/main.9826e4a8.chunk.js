(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{15:function(e,t,n){e.exports={header:"main_header__SMm6z",container:"main_container__16tOB",enter:"main_enter__2RlJA"}},23:function(e,t,n){e.exports={container:"items_container__1EJfD"}},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(22),s=n.n(a),o=(n(30),n(31),n(25)),i=n(14),j=n(43),u=n(23),l=n(1),d=function(e){var t=e.todo;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:u.container,children:Object(l.jsxs)("span",{children:[" ",t.task," "]})})})};d.defaultProps={todo:{}};var h=d,b=n(15),O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:b.header,children:"todos"}),Object(l.jsx)("div",{className:b.container,children:Object(l.jsx)("input",{id:b.enter,type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){if(e.target.value&&"Enter"===e.key){if(""===e.target.value)return;r([].concat(Object(o.a)(n),[{task:e.target.value,done:!1,key:Object(j.a)()}])),e.target.value=""}},onBlur:function(){}})}),Object(l.jsx)("div",{children:n.length>0&&n.map((function(e){return Object(l.jsx)(h,{todo:e},e.key)}))})]})},f=n(13),p=(n(33),function(e){return Object(f.a)(e),Object(l.jsx)("div",{children:"Jyotika Banerjee - Projects"})});p.defaultProps={};var x=p,v=n(10),m=n.n(v),g=n(18);n(35);function _(e){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("myHTTPGET called"),e.next=3,fetch(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){Object(f.a)(e);var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(g.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("https://picsum.photos/v2/list");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("HTTP Error!! Status: ".concat(t.status));case 5:return e.next=7,t.json();case 7:n=e.sent,console.log("Inside useEffect"),a(n),console.log(r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"container",children:r.length>0&&r.map((function(e){return console.log(e),Object(l.jsx)("img",{src:e.download_url,alt:e.author},e.id)}))})})};y.defaultProps={};var w=y,P=n(11),E=n(2);var T=function(){return Object(l.jsx)("div",{className:"parent",children:Object(l.jsxs)(P.a,{children:[Object(l.jsxs)("ul",{className:"App-header",children:[Object(l.jsx)("li",{children:Object(l.jsx)(P.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(P.b,{to:"/react-todos",children:" Todos "})}),Object(l.jsx)("li",{children:Object(l.jsx)(P.b,{to:"/react-photos",children:" Photos "})})]}),Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{path:"/react-todos",children:Object(l.jsx)(O,{})}),Object(l.jsx)(E.a,{path:"/react-photos",children:Object(l.jsx)(w,{})}),Object(l.jsx)(E.a,{path:"/",children:Object(l.jsx)(x,{})})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.9826e4a8.chunk.js.map