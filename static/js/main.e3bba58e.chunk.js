(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(65),r=n.n(a),i=(n(71),n(72),n(24)),o=n(8),l=n(121),j=n(25),d=n(16),u=n(0),h=function(e){var t=e.todo,n=e.pending,c=e.setPending,s=e.todos,a=e.setTodos,r=(e.displayTask,function(e){return s.findIndex((function(t){return t.key===e}))});return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:j.container,children:[Object(u.jsx)("input",{type:"radio",value:t.done,name:t.id,onChange:function(e){var o=r(t.key);s.splice(o,1,{task:t.task,key:t.key,done:!0}),a(Object(i.a)(s)),console.log(s),c(n=n-1>=0?n-1:0)},checked:t.done}),Object(u.jsxs)("span",{className:"".concat(j.taskname,"  ").concat(!0===t.done?j.taskdone:""," "),children:[" ",t.task," "]}),Object(u.jsxs)("span",{className:j.cancel,onClick:function(){console.log("remove task clicked...");var e=r(t.key);s.splice(e,1),a(Object(i.a)(s)),!1===t.done&&c(n=n-1>=0?n-1:0)},children:[" ",Object(u.jsx)(d.d,{})," "]})]})})};h.defaultProps={todo:{},pending:0,setPending:function(){},todos:[],setTodos:function(){},displayTask:!0};var b=h,O=n(17),p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(o.a)(a,2),j=r[0],d=r[1],h=Object(c.useState)(!1),p=Object(o.a)(h,2),x=p[0],f=p[1],m=Object(c.useState)(!1),v=Object(o.a)(m,2),_=v[0],g=v[1],k=Object(c.useState)(!0),y=Object(o.a)(k,2),N=y[0],P=y[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:O.header,children:"todos"}),Object(u.jsx)("div",{className:O.container,children:Object(u.jsx)("input",{id:O.enter,type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){if("Enter"===e.key){if(""===e.target.value)return;s([].concat(Object(i.a)(n),[{task:e.target.value,done:!1,key:Object(l.a)(),active:!0,completed:!1}])),d(j+1),e.target.value=""}}})}),Object(u.jsxs)("div",{children:[n.length>0&&n.map((function(e,t){return N||x&&e.active||_&&e.done?Object(u.jsx)(b,{todo:e,pending:j,setPending:d,todos:n,setTodo:s},e.key):null}))," "]}),Object(u.jsxs)("div",{className:O.summary,children:[Object(u.jsxs)("div",{className:O.lhs,children:[j,"  ",1===j?"item left":"items left"]}),Object(u.jsxs)("div",{className:O.rhs,children:[Object(u.jsx)("button",{onClick:function(){f(!1),P(!0),g(!1)},children:" All "}),Object(u.jsx)("button",{onClick:function(){f(!0),P(!1),g(!1)},children:" Active "}),Object(u.jsx)("button",{onClick:function(){f(!1),P(!1),g(!0)},children:" Completed "})]})]})]})},x=function(){return Object(u.jsx)("div",{children:"Selected Photo"})};x.defaultProps={};var f=x,m=n(12),v=n.n(m),_=n(23),g=n(18),k=function(e){var t=n(75),s=Object(c.useState)([]),a=Object(o.a)(s,2),r=a[0],i=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:g.title,children:[Object(u.jsx)("h3",{children:" Search for music by your favorite KPOP artist "}),Object(u.jsx)("h6",{children:"Powered by iTunes "})]}),Object(u.jsx)("div",{className:g.searchbar,children:Object(u.jsx)("input",{id:g.enter,type:"text",placeholder:"Whose music are you looking for?",onKeyDown:function(e){var n={term:e.target.value,entity:"allArtist",attribute:"allArtistTerms",country:"KR"};function c(){return(c=Object(_.a)(v.a.mark((function e(c){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.searchItunes(n);case 2:s=e.sent,console.log(s),i(s.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"Enter"===e.key&&(console.log("Make search GET"),function(e){c.apply(this,arguments)}(e.target.value.split(" ").join("+")),e.target.value="")}})}),Object(u.jsx)("div",{className:g.results,children:r.length>0&&r.map((function(e){return Object(u.jsxs)("div",{className:g.album,children:[" ",Object(u.jsxs)("a",{href:e.raw.artistLinkUrl,children:["  ",e.artistName," ",e.raw.primaryGenreName]})]})}))})]})};k.defaultProps={};var y=k,N=(n(113),function(){return Object(u.jsx)("div",{className:"container",children:"Jyotika Banerjee - Projects"})});N.defaultProps={};var P=N,w=n(2);n(114);function S(e){return C.apply(this,arguments)}function C(){return(C=Object(_.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(o.a)(a,2),i=r[0],l=r[1],j=Object(c.useState)({}),h=Object(o.a)(j,2),b=h[0],O=h[1],p=Object(w.g)();console.log(p.path);Object(w.f)();Object(c.useEffect)((function(){function e(){return(e=Object(_.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("https://picsum.photos/v2/list?limit=200");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("HTTP Error!! Status: ".concat(t.status));case 5:return e.next=7,t.json();case 7:n=e.sent,console.log(n),s(n),O(n[0]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=function(e){console.log(e.target.id),l(e.target.id),O(n[e.target.id])};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"parent",children:[Object(u.jsxs)("div",{className:"imgViewer",children:[Object(u.jsxs)("span",{className:"leftIcon",onClick:function(){(i-=1)<0&&(i=n.length-1),l(i),O(n[i])},children:[" ",Object(u.jsx)(d.b,{})," "]}),n.length>0&&Object(u.jsx)("img",{src:b.download_url,alt:b.author,id:i,onClick:x},i),Object(u.jsxs)("span",{className:"rightIcon",onClick:function(){(i+=1)>=n.length&&(i=0),l(i),O(n[i])},children:[" ",Object(u.jsx)(d.c,{})," "]})]}),Object(u.jsx)("section",{className:"allImgContainer",children:n.length>0&&n.map((function(e,t){return Object(u.jsx)("img",{src:e.download_url,alt:e.author,id:t,onClick:x},e.id)}))})]}),Object(u.jsx)(w.c,{children:Object(u.jsx)(w.a,{path:"".concat(p.path,"/:id}")})})]})};T.defaultProps={};var E=T,I=n(15),A=n(4);var D=function(){return Object(A.a)().listen((function(e,t){console.log(t,e.pathname,e.state)})),Object(u.jsx)("div",{className:"parent",children:Object(u.jsxs)(I.a,{children:[Object(u.jsxs)("ul",{className:"App-header",children:[Object(u.jsx)("li",{children:Object(u.jsx)(I.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(I.b,{to:"/react-todos",children:" Todos "})}),Object(u.jsx)("li",{children:Object(u.jsx)(I.b,{to:"/react-photos",children:" Photos "})}),Object(u.jsx)("li",{children:Object(u.jsx)(I.b,{to:"/react-search",children:" Search "})})]}),Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{path:"/react-todos",children:Object(u.jsx)(p,{})}),Object(u.jsx)(w.a,{path:"/react-photos",children:Object(u.jsx)(E,{})}),Object(u.jsx)(w.a,{path:"/react-photos/:id",children:Object(u.jsx)(f,{})}),Object(u.jsx)(w.a,{path:"/react-search",children:Object(u.jsx)(y,{})}),Object(u.jsx)(w.a,{path:"/",children:Object(u.jsx)(P,{})})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),F()},17:function(e,t,n){e.exports={header:"main_header__SMm6z",container:"main_container__16tOB",enter:"main_enter__2RlJA",summary:"main_summary__2EWPY",lhs:"main_lhs__3_zGG",rhs:"main_rhs__1eHoe"}},18:function(e,t,n){e.exports={title:"search_title__3FKP3",searchbar:"search_searchbar__Df4Fa",enter:"search_enter__3zv_k",results:"search_results__2jD0g",album:"search_album__6L195"}},25:function(e,t,n){e.exports={container:"items_container__1EJfD",taskname:"items_taskname__jMYlv",taskdone:"items_taskdone__1car-",cancel:"items_cancel__3UdNj"}},71:function(e,t,n){},72:function(e,t,n){},80:function(e,t){},82:function(e,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.e3bba58e.chunk.js.map