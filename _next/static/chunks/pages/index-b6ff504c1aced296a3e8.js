(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1487:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(2322),i=n(2784),a=n(3668),s=n(7729),o=n(5070),u=n.n(o);function c(){var e=(0,i.useState)(""),t=e[0],n=e[1],o=(0,i.useState)(""),c=o[0],l=o[1];return(0,i.useEffect)((function(){var e=new Blob([(0,a.getAvatar)(t)],{type:"image/svg+xml"}),n=URL.createObjectURL(e);l(n)}),[t]),(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Pixavatar"}),(0,r.jsx)("meta",{name:"description",content:"Github like avatar generator based on text"}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsxs)("main",{className:u().main,children:[(0,r.jsx)("h1",{className:u().title,children:"Pixavatar"}),(0,r.jsx)("p",{className:u().description,children:(0,r.jsx)("input",{type:"text",placeholder:"Your username",value:t,onChange:function(e){return n(e.target.value)},className:u().input})}),(0,r.jsx)("p",{className:u().description,children:(0,r.jsx)("img",{src:c,width:"100",height:"100"})})]})]})}},8738:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1487)}])},5070:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",title:"Home_title__3DjR7",description:"Home_description__17Z4F",input:"Home_input__2_zyB"}},4951:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.COLORS=void 0;t.COLORS=["#66B032","#0247FE","#FEFE33","#FE2712","#8601AF","#FB9902"]},3668:function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getAvatar=void 0;var a=i(n(9065)),s=n(4951);t.getAvatar=function(e){var t=function(e){var t=e.substr(0,14),n=e.substr(14).match(/.{2}/g);if(null===n)throw new Error("Invalid hash length");var i=s.COLORS[parseInt(t,16)%s.COLORS.length],a=n.map((function(e){return Boolean(parseInt(e,16)%2)}));return r([i],a)}(function(e){return a.default("sha256").update(e).digest("hex")}(e));return function(e,t){return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">'+t.map((function(t,n){return'<rect width="20" height="20" x="'+n%5*20+'" y="'+20*Math.floor(n/5)+'" fill="'+(Boolean(t)?e:"transparent")+'" />'})).join("")+"</svg>"}(t[0],t.slice(1))}}},function(e){e.O(0,[566,774,888,179],(function(){return t=8738,e(e.s=t);var t}));var t=e.O();_N_E=t}]);