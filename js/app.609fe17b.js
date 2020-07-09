(function(t){function e(e){for(var n,a,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(e);while(p.length)p.shift()();return d.push.apply(d,c||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},d=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-todo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"",width:"600"}},[o("v-card-title",[o("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-check ")]),o("span",{staticClass:"title font-weight-light"},[t._v("ToDo's List")])],1),o("span",{staticClass:"float-right pr-3"},[o("b",[t._v(t._s(t.todos.length))]),t._v(" Tasks")]),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"delete-todo":t.deleteTodo}})],1)],1)},d=[],a=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e,n){return o("Todo",{key:n,attrs:{todo:e},on:{"delete-todo":function(o){return t.$emit("delete-todo",e.id)}}})})),1)}),i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-item",{staticClass:"pointer"},[o("v-list-item-action",[o("v-checkbox",{attrs:{color:"primary"},model:{value:t.todo.completed,callback:function(e){t.$set(t.todo,"completed",e)},expression:"todo.completed"}})],1),o("v-list-item-content",{on:{click:t.toggleCompleted}},[o("v-list-item-title",{class:{completed:t.todo.completed}},[t._v(t._s(t.todo.text))])],1),t.todo.completed?o("v-btn",{attrs:{icon:"",ripple:"",color:"red"},on:{click:function(e){return t.$emit("delete-todo",t.todo.id)}}},[o("v-icon",{staticClass:"white--text"},[t._v("close")])],1):t._e()],1)},c=[],s={name:"Todo",props:["todo"],methods:{toggleCompleted:function(){this.todo.completed=!this.todo.completed}}},u=s,p=(o("b7cf"),o("2877")),f=o("6544"),v=o.n(f),m=o("8336"),h=o("ac7c"),b=o("132d"),x=o("da13"),T=o("1800"),_=o("5d23"),g=Object(p["a"])(u,l,c,!1,null,null,null),y=g.exports;v()(g,{VBtn:m["a"],VCheckbox:h["a"],VIcon:b["a"],VListItem:x["a"],VListItemAction:T["a"],VListItemContent:_["a"],VListItemTitle:_["b"]});var O={name:"Todos",props:["todos"],components:{Todo:y}},w=O,j=Object(p["a"])(w,a,i,!1,null,null,null),k=j.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("v-text-field",{staticClass:"pr-5 pl-5",attrs:{label:"What needs to be done?"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])},V=[],$=o("ec26"),P={name:"AddTodo",data:function(){return{text:""}},methods:{addTodo:function(t){if(t.preventDefault(),this.text){var e={id:Object($["a"])(),text:this.text,completed:!1};this.$emit("add-todo",e),this.text=""}}}},A=P,I=o("8654"),L=Object(p["a"])(A,C,V,!1,null,"51f78e36",null),S=L.exports;v()(L,{VTextField:I["a"]});var E={name:"App",components:{Todos:k,AddTodo:S},data:function(){return{todos:[]}},methods:{addTodo:function(t){this.todos.push(t)},deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},M=E,D=o("7496"),J=o("b0af"),B=o("99d9"),F=Object(p["a"])(M,r,d,!1,null,null,null),W=F.exports;v()(F,{VApp:D["a"],VCard:J["a"],VCardTitle:B["a"],VIcon:b["a"]});var q=o("f309");n["a"].use(q["a"]);var z=new q["a"]({});o("d1e78");n["a"].config.productionTip=!1,n["a"].component("Todo",y),new n["a"]({vuetify:z,render:function(t){return t(W)}}).$mount("#app")},b7cf:function(t,e,o){"use strict";var n=o("e0d2"),r=o.n(n);r.a},e0d2:function(t,e,o){}});
//# sourceMappingURL=app.609fe17b.js.map