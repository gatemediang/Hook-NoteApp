(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(19),r=n.n(c),l=n(7),i=n(3),u=function(e){var t=e.todo,n=t.completed,c=t.id,r=t.title;return Object(o.useEffect)((function(){return function(){alert("Item about to be deleted!")}}),[]),a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.handleChangeProps(c)}}),a.a.createElement("button",{onClick:function(){return e.deleteTodoProps(c)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))},d=function(e){return a.a.createElement("div",null,e.todos.map((function(t){return a.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps})})))},m=function(e){var t=Object(o.useRef)(!0);return console.log(t),Object(o.useEffect)((function(){var e="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";t.current?t.current=!1:(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.backgroundColor=e)}),[e.headerSpan]),a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",textAlign:"center",marginBottom:"15px",color:"#038203"}},"Hook NoteApp ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",{style:{fontSize:"19px",fontStyle:"italic",textAlign:"center",color:"#038203"}},"Please add to-dos item(s) through the input field"))},p=n(5),s=n(6),f=function(e){var t=Object(o.useState)({title:""}),n=Object(i.a)(t,2),c=n[0],r=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodoProps(c.title),r({title:""})},className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:c.title,name:"title",onChange:function(e){r(Object(s.a)(Object(s.a)({},c),{},Object(p.a)({},e.target.name,e.target.value)))}}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))},h=n(20),b=n.n(h),E=n(21),g=n.n(E),j=function(e){var t=Object(o.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],u=Object(o.useState)(!1),p=Object(i.a)(u,2),s=p[0],h=p[1];return Object(o.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return r(e.data)}))}),[]),a.a.createElement("div",{className:"container"},a.a.createElement(m,{headerSpan:s}),a.a.createElement(f,{addTodoProps:function(e){var t={id:g.a.v4(),title:e,completed:!1};r([].concat(Object(l.a)(c),[t]))}}),a.a.createElement(d,{todos:c,handleChangeProps:function(e){r(c.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))),h(!s)},deleteTodoProps:function(e){r(Object(l.a)(c.filter((function(t){return t.id!==e}))))}}))};n(46);r.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.518bca3a.chunk.js.map