(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(9),u=a(11),o=a(18),m=a(19),h=a(23),s=a(20),d=a(10),E=a(24),p=function(){return fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()})},f=a(6),v=a(7),g=a.n(v),F=(a(32),function(e){var t=e.inputType,a=e.name,n=e.onChangeFilter,l=e.valueFilter;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:a},a.toUpperCase()," "),r.a.createElement("input",{type:t,name:a,id:a,onChange:n,value:l}))});a(33);F.propTypes={onChangeFilter:g.a.func.isRequired,valueFilter:g.a.string.isRequired};var C=function(e){var t=e.onChangeFilter,a=e.valueFilter;return r.a.createElement("div",null,r.a.createElement("h2",null,"Filters"),r.a.createElement("form",null,r.a.createElement(F,{inputType:"text",name:"name",valueFilter:a,onChangeFilter:t})))},b=a(5),A=(a(34),function(e){var t=e.character,a=t.id,n=t.name,l=t.image,c=t.house;return r.a.createElement("div",null,r.a.createElement("img",{src:l,alt:n}),r.a.createElement("h3",null,n),r.a.createElement("p",null,c),r.a.createElement(b.b,{to:"/character/".concat(a)}," P\xe1gina detalle "))}),O=(a(41),function(e){var t=e.dataArr,a=e.valueFilter;return r.a.createElement("div",null,r.a.createElement("h2",null,"Characters collection"),r.a.createElement("ul",null,t.filter(function(e){return!a||e.name.toUpperCase().includes(a.toUpperCase())}).map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(A,{character:e}))})))}),j=(a(42),function(e){var t=e.isFetching,a=e.dataArr,n=e.onChangeFilter,l=e.valueFilter;return r.a.createElement("div",null,r.a.createElement("h2",null,"Characters List"),t?r.a.createElement("main",null,r.a.createElement("p",null,"Loading...")):r.a.createElement("main",null,r.a.createElement(C,{dataArr:a,onChangeFilter:n,valueFilter:l}),r.a.createElement(O,{dataArr:a,valueFilter:l})))}),y=(a(43),function(e){var t=e.dataArr[e.match.params.characterId];console.log(t);var a=t.name,n=t.image,l=t.house,c=t.dateOfBith,i=t.patronus,u=t.alive;return r.a.createElement("div",null,r.a.createElement("h2",null,"P\xe1gina de detalle"),r.a.createElement("img",{src:n,alt:a}),r.a.createElement("h3",null,a),r.a.createElement("p",null,"House: ",l||"No data"),r.a.createElement("p",null,"Date of Birth: ",c||"No data"),r.a.createElement("p",null,"Patronus: ",i||"No data"),r.a.createElement("p",null,"Alive: ",u?"ALIVE":"DEAD"),r.a.createElement(b.b,{to:"/"}," Home "))}),k=(a(44),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={data:{dataArr:[],isFetching:!0},filters:{}},a.handleFilterOnChange=a.handleFilterOnChange.bind(Object(d.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p().then(function(t){e.setState(function(e,a){return{data:{isFetching:!1,dataArr:t.map(function(e,t){return Object(u.a)({},e,{id:t})})}}})})}},{key:"handleFilterOnChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(function(e){return{filters:Object(u.a)({},e.filters,Object(i.a)({},a,n))}})}},{key:"render",value:function(){var e=this.state.data,t=e.dataArr,a=e.isFetching,n=this.handleFilterOnChange,l=this.state.filters.name;return r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{isFetching:a,dataArr:t,onChangeFilter:n,valueFilter:l})}}),r.a.createElement(f.a,{exact:!0,path:"/character/:characterId",render:function(e){return r.a.createElement(y,{dataArr:t,match:e.match})}})))}}]),t}(r.a.Component));a(45);c.a.render(r.a.createElement(b.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7a17fe0d.chunk.js.map