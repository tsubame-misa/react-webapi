(this["webpackJsonpreact-webapi"]=this["webpackJsonpreact-webapi"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n(2),s=n(1),l=n.n(s),o=n(3),i=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.sprites.front_default,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.url,n=Object(a.useState)(null),c=Object(u.a)(n,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){i(t).then((function(e){l(e)}))})),r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:s,style:{width:"50%"}}))},f=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new String(t),t=n.slice(0,1).toUpperCase()+n.slice(1),e.next=4,fetch("https://gist.githubusercontent.com/PonDad/93922f63c3143489e30c3716d3d176d2/raw/0ea137397f9701828ecd7da7d253168678646488/pokemon.json");case 4:return a=e.sent,e.next=7,a.json();case 7:return e.sent.map((function(e){e.en===t&&(t=e.ja)})),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.name,n=Object(a.useState)(null),c=Object(u.a)(n,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){f(t).then((function(e){l(e)}))})),r.a.createElement("div",null,r.a.createElement("h1",null,s))},d=function(e){var t=e.data;if(null==t)return r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"loading..."));var n=t.forms[0].url,a=t.types;return r.a.createElement("div",null,r.a.createElement(m,{url:n}),r.a.createElement(p,{name:t.name}),r.a.createElement("p",null,"type ...\u2003",a.map((function(e){return e.type.name+"  "}))))},E=function(e){var t=e.id,n=Object(a.useState)(null),c=Object(u.a)(n,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement(d,{data:s})))))},v=function(){for(var e=[32],t=1;t<=32;t++)e[t-1]=t;return r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Pokedex from ",r.a.createElement("a",{href:"https://pokeapi.co/docs/v2"},"PokeAPI"))))),r.a.createElement("div",{className:"columns is-vcentered is-multiline"},e.map((function(e){return r.a.createElement("div",{className:"column is-3"},r.a.createElement(E,{id:e}))}))))};n(12);Object(c.render)(r.a.createElement(v,null),document.querySelector("#content"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.af3bdb51.chunk.js.map