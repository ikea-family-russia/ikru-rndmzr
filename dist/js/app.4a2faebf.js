(function(t){function n(n){for(var r,a,c=n[0],o=n[1],l=n[2],f=0,p=[];f<c.length;f++)a=c[f],i[a]&&p.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(n);while(p.length)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(r=!1)}r&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={app:0},s=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"0d02":function(t,n,e){},"1fb3":function(t,n,e){"use strict";var r=e("6d54"),i=e.n(r);i.a},"4c19":function(t,n,e){"use strict";var r=e("0d02"),i=e.n(r);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("div",{staticClass:"main-container"},[t._m(0),e("Rndmzr")],1)])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"http://ikea.ru",target:"_blank"}},[e("img",{attrs:{width:"100",src:"https://www.ikea.com/ext/ikeagateway/statics/logo.svg"}})])}],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[0==t.participants.length?e("div",[t._m(0),t._m(1),e("input",{staticStyle:{display:"none"},attrs:{id:"file",accept:".csv",type:"file"},on:{change:t.onFileChange}}),e("br"),t._m(2)]):t._e(),t.participants.length>0&&0==t.winners.length?e("div",[e("br"),e("br"),e("div",{staticClass:"title"},[t._v("\n      ВСЕГО УЧАСТНИКОВ\n    ")]),e("div",{staticClass:"subtitle"},[t._v("\n      "+t._s(t.participants.length)+"\n    ")]),e("br"),e("br"),e("div",{staticClass:"title"},[t._v("\n      ПОБЕДИТЕЛЕЙ\n    ")]),e("div",{staticClass:"subtitle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{min:"1",id:"number",type:"number"},domProps:{value:t.number},on:{input:function(n){n.target.composing||(t.number=n.target.value)}}})]),e("div",{staticClass:"circle-container",on:{click:function(n){return t.generateWinners()}}},[e("div",{staticClass:"outer-ring blue"}),t._m(3)])]):t._e(),0!=t.winners.length?e("div",[e("br"),e("div",{staticClass:"title"},[t._v("ПОБЕДИТЕЛИ")]),e("br"),e("br"),e("ul",{staticClass:"winners"},t._l(t.formattedWinners,function(n){return e("li",{key:n},[t._v("\n        "+t._s(n)+"\n      ")])}),0),t.winners.length>0?e("Firework"):t._e(),0==t.showFullWinners?e("a",{staticStyle:{color:"#fff",cursor:"pointer",margin:"2em 0"},on:{click:t.showWinners}},[t._v("Показать полный список")]):t._e(),1==t.showFullWinners?e("div",t._l(t.winners,function(n){return e("div",{key:n},[t._v(t._s(n))])}),0):t._e()],1):t._e()])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"disclaimer"},[t._v("\n        Приложение разработано компанией IKEA для случайного выбора победителей среди участников конкурсов, проводимых комппанией IKEA"),e("br"),t._v(" \n        Исходный код приложения находится по адресу \n        "),e("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/ikea-family-russia/ikea-rndmzr"}},[t._v("https://github.com/ikea-family-russia/ikea-rndmzr")])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("label",{staticClass:"circle-container",attrs:{for:"file"}},[r("div",{staticClass:"outer-ring"}),r("div",{staticClass:"circle"},[r("div",{staticClass:"front"},[r("p",[r("b",[t._v("Выбрать файл")])])]),r("div",{staticClass:"back"},[r("img",{staticClass:"back-logo",attrs:{src:e("cc36")}})])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticStyle:{width:"50%","margin-left":"auto","margin-right":"auto",opacity:"0.6"}},[e("small",[t._v("\n        Выбранный файл должен иметь формат .csv и содержать список мобильных телефонов в формате 79ХХХХХХХХХ. Каждый номер телефона начинается с новой строки\n      ")])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"circle"},[r("div",{staticClass:"front blue"},[r("p",{staticStyle:{"margin-top":"3.2em"}},[r("b",[t._v("Определить победителей")])])]),r("div",{staticClass:"back blue"},[r("img",{staticClass:"back-logo",attrs:{src:e("95e9")}})])])}],o=(e("28a5"),function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pyro"},[e("div",{staticClass:"before"}),e("div",{staticClass:"after"})])}],u={name:"Firework"},f=u,p=(e("1fb3"),e("2877")),d=Object(p["a"])(f,o,l,!1,null,null,null),v=d.exports,m={name:"Rndmzr",components:{Firework:v},data:function(){return{participants:[],winners:[],formattedWinners:[],number:1,showFullWinners:!1}},methods:{onFileChange:function(t){var n=this,e=t.target.files[0],r=new FileReader;r.onload=function(t){n.setParticipants(t.target.result)},r.readAsText(e)},setParticipants:function(t){this.participants=t.split("\n")},shuffle:function(t){var n=t.split("\n");return n},generateWinners:function(){for(var t=0;t<this.number;t++){var n=this.randomInt(0,this.participants.length-1),e=this.participants[n];this.winners.push(e);var r="+".concat(e.substr(0,1)," (").concat(e.substr(1,3),") ***-").concat(e.substr(7,2),"-").concat(e.substr(9,2));this.formattedWinners.push(r),this.participants.splice(n,1)}},randomInt:function(t,n){return Math.floor(Math.random()*(n-t))+t},showWinners:function(){this.showFullWinners=!0}}},h=m,b=(e("4c19"),Object(p["a"])(h,a,c,!1,null,"5fe6a8ea",null)),_=b.exports,g={name:"app",components:{Rndmzr:_}},w=g,y=(e("034f"),Object(p["a"])(w,i,s,!1,null,null,null)),C=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,n,e){},"6d54":function(t,n,e){},"95e9":function(t,n,e){t.exports=e.p+"img/trophy.dafc9014.png"},cc36:function(t,n,e){t.exports=e.p+"img/csv.c0777cc4.png"}});
//# sourceMappingURL=app.4a2faebf.js.map