(this["webpackJsonpreact-webapi"]=this["webpackJsonpreact-webapi"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"ja":"\u30ce\u30fc\u30de\u30eb","en":"normal"},{"ja":"\u307b\u306e\u304a","en":"fire"},{"ja":"\u307f\u305a","en":"water"},{"ja":"\u304f\u3055","en":"grass"},{"ja":"\u3067\u3093\u304d","en":"electric"},{"ja":"\u3053\u304a\u308a","en":"ice"},{"ja":"\u304b\u304f\u3068\u3046","en":"fighting"},{"ja":"\u3069\u304f","en":"poison"},{"ja":"\u3058\u3081\u3093","en":"ground"},{"ja":"\u3072\u3053\u3046","en":"flying"},{"ja":"\u30a8\u30b9\u30d1\u30fc","en":"psychic"},{"ja":"\u3080\u3057","en":"bug"},{"ja":"\u3044\u308f","en":"rock"},{"ja":"\u30b4\u30fc\u30b9\u30c8","en":"ghost"},{"ja":"\u30c9\u30e9\u30b4\u30f3","en":"dragon"},{"ja":"\u3042\u304f","en":"dark"},{"ja":"\u306f\u304c\u306d","en":"steel"},{"ja":"\u30d5\u30a7\u30a2\u30ea\u30fc","en":"fairy"}]')},21:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n(7),o=n(5),u=n.n(o),s=n(8),i=n(19),m=n(6),f=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.sprites.front_default,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.url,n=e.size,c=Object(a.useState)(null),o=Object(l.a)(c,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){f(t).then((function(e){s(e)}))})),r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:u,style:{width:"".concat(n,"%")}}))},v=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new String(t),t=n.slice(0,1).toUpperCase()+n.slice(1),e.next=4,fetch("https://gist.githubusercontent.com/PonDad/93922f63c3143489e30c3716d3d176d2/raw/0ea137397f9701828ecd7da7d253168678646488/pokemon.json");case 4:return a=e.sent,e.next=7,a.json();case 7:return e.sent.map((function(e){e.en===t&&(t=e.ja)})),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.name,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){v(t).then((function(e){u(e)}))})),r.a.createElement("div",{className:"has-text-left"},r.a.createElement("h1",null,o))},E=function(e){var t=e.types;return r.a.createElement("div",null,r.a.createElement("h1",null,"\u30bf\u30a4\u30d7\uff1a",t.map((function(e){return t=e.type.name,i.map((function(e){e.en==t&&(t=e.ja)})),t+" ";var t}))))},h=function(e){var t=e.data;if(null==t)return r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"loading..."));var n=t.forms[0].url;t.types;return r.a.createElement("div",null,r.a.createElement(p,{url:n,size:50}),r.a.createElement(d,{name:t.name}))},b=function(e){var t=e.id,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.json()})).then((function(e){u(e)}))}),[]),r.a.createElement(m.b,{to:"/pokemon_detaile/".concat(t)},r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement(h,{data:o}))))))},j=n(2),O=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.genera[0].genus,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.data.species.url,n=Object(a.useState)(),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){O(t).then((function(e){u(e)}))})),r.a.createElement("div",null,"\u5206\u985e : ",o)},g=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:for(a=e.sent,r=[],c=a.flavor_text_entries.length,l=0;l<c;l++)"ja"===a.flavor_text_entries[l].language.name&&r.push(a.flavor_text_entries[l].flavor_text);return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.data.species.url,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){g(t).then((function(e){u(e)}))})),r.a.createElement("div",null,r.a.createElement("h2",{className:"subtitle"},"\u8aac\u660e",r.a.createElement("br",null)),o)},N=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r,c,l,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=null,l=null,void 0!==r.chain.evolves_to[0].evolves_to[0]&&(c=r.chain.evolves_to[0].evolves_to[0].species.name),void 0!==r.chain.evolves_to[0]&&(l=r.chain.evolves_to[0].species.name),o=r.chain.species.name,s=[o,l,c],e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.data;if(null==t)return r.a.createElement("div",null);var n=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){N(e).then((function(e){c(e)}))})),r}(t.evolution_chain);return r.a.createElement("div",{className:"columns"},n?Object.keys(n).map((function(e){return console.log(n[e]),r.a.createElement("div",{className:"column is-4"},n[e]?r.a.createElement(m.b,{to:"/pokemon_detaile/".concat(n[e])},r.a.createElement("div",null,r.a.createElement(d,{name:n[e]}),r.a.createElement(p,{url:"https://pokeapi.co/api/v2/pokemon-form/".concat(n[e]),size:70}))):r.a.createElement("div",null))})):console.log("null"))},y=function(e){var t=e.id,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t)).then((function(e){return e.json()})).then((function(e){u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"subtitle"},"\u9032\u5316\u7cfb"),r.a.createElement(w,{data:o}))},_=function(e){var t=e.data;if(null==t)return r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"loading..."));console.log(t);var n=t.forms[0].url;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/pokemon_detaile/".concat(t.id-1)},"\u25c0"),r.a.createElement(m.b,{to:"/react-webapi"},r.a.createElement("button",null,"\u56f3\u9451\u306b\u623b\u308b")),r.a.createElement(m.b,{to:"/pokemon_detaile/".concat(t.id+1)},"\u25b6")),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-3"},r.a.createElement(p,{url:n,size:90})),r.a.createElement("div",{className:"column is-4"},r.a.createElement("br",null),r.a.createElement("div",{className:"hero"},r.a.createElement("h1",{className:"title"},r.a.createElement(d,{name:t.name})),r.a.createElement(x,{data:t}),r.a.createElement(E,{types:t.types}),r.a.createElement("p",null,"\u9ad8\u3055 : ",(.1*t.height).toFixed(1),"m"),r.a.createElement("p",null,"\u91cd\u3055 : ",(.1*t.weight).toFixed(1),"Kg"),r.a.createElement("br",null)))),r.a.createElement(k,{data:t}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,{id:t.id}))},S=function(){var e=Object(j.e)().id,t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement(_,{data:c})))))},z=function(){for(var e=[52],t=1;t<=52;t++)e[t-1]=t;return r.a.createElement("div",null,r.a.createElement("div",{className:"columns is-vcentered is-multiline"},e.map((function(e){return r.a.createElement("div",{className:"column is-3"},r.a.createElement(b,{id:e}))}))))},J=function(e){var t=e.to,n=e.children,a=e.exact;return r.a.createElement(j.a,{path:t,exact:a,children:function(e){e.match;return r.a.createElement(m.b,{to:t,style:{color:"#282c34"}},n)}})},P=function(){for(var e=[32],t=1;t<=32;t++)e[t-1]=t;return r.a.createElement(m.a,null,r.a.createElement("header",{style:{backgroundColor:"#f08080"}},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"\u30dd\u30b1\u30e2\u30f3\u56f3\u9451\u2002",r.a.createElement("span",{className:" has-text-white"},"from\u2002"),r.a.createElement("a",{href:"https://pokeapi.co/docs/v2"},"PokeAPI")))))),r.a.createElement(J,{to:"/react-webapi",exact:!0}),r.a.createElement("div",null,r.a.createElement(j.a,{path:"/react-webapi",component:z,exact:!0}),r.a.createElement(j.a,{path:"/pokemon_detaile/:id",component:S})))};n(32);Object(c.render)(r.a.createElement(P,null),document.querySelector("#content"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c160cb7d.chunk.js.map