(this.webpackJsonpnetfleech=this.webpackJsonpnetfleech||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/netf.61f12706.svg"},28:function(e,t,a){e.exports=a.p+"static/media/leech.b5ad0c82.svg"},35:function(e,t,a){e.exports=a(53)},46:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),s=a(33),o=a(9),i=a(23),m=a(31),u=a(10),h=a(55),p=a(26),f=a(34),d=a(32),E=a(11),g=a(24),v=function(){function e(){Object(E.a)(this,e),this.digits=void 0,this.digitsMap=void 0;this.digits="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ+-".split(""),this.digitsMap=new Map;for(var t=0;t<this.digits.length;t++)this.digitsMap.set(this.digits[t],t)}return Object(g.a)(e,[{key:"fromInt",value:function(e,t){for(var a="";a=this.digits[63&e]+a,0!==(e>>>=6););return t&&(a=a.padStart(t,this.digits[0])),a}},{key:"toInt",value:function(e){for(var t=0,a=0;a<e.length;a++)t=(t<<6)+(this.digitsMap.get(e[a])||0);return t}}]),e}(),w=[new function e(){Object(E.a)(this,e),this.name="Netflix",this.startDate=new Date("2013-08-01"),this.pricePerPersonInEur=2.798},new function e(){Object(E.a)(this,e),this.name="Spotify",this.startDate=new Date("2014-10-01"),this.pricePerPersonInEur=7.99/6}];var y=new v,b=function(e){var t=e.result,a=Object(n.useState)(),c=Object(u.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){try{s(function(e){if(!e)throw new Error("result params is empty!");if(e.length%3!==0)throw new Error("result param length is invalid - not multiple of ".concat(3));for(var t=e.length/3,a=[],n=0;n<t;n++){var r=3*n,c=e.substr(r,3);try{var l=N(c);a.push(l)}catch(s){console.log("Couldn't parse item: ".concat(c),s)}}return console.log("parsedItems",a),a}(t))}catch(e){console.log("Result error",e)}}),[t]),r.a.createElement("div",{className:"App row p-3"},r.a.createElement("div",{className:"col App-header"},r.a.createElement("p",null,"Result:"),l&&l.map((function(e){return r.a.createElement("div",{key:e.encoded},r.a.createElement("pre",{style:{textAlign:"left",backgroundColor:"gray",borderRadius:"25px",padding:"10px"}},JSON.stringify(e,null,2)))}))))};function N(e){var t=e.charAt(0),a=e.substr(1,2),n=y.toInt(t),r=y.toInt(a);console.log("Decode params:",{serviceTypeX64:t,serviceTypeId:n,monthsElapsedX64:a,monthsElapsed:r});var c=function(e){var t=w[e];if(!t)throw new Error("ServiceType not found by ID: ".concat(e));return t}(n);return{encoded:e,serviceTypeId:n,serviceType:c,monthsElapsed:r,price:r*c.pricePerPersonInEur,startDate:O(r)}}function O(e){var t=new Date;return t.setMonth(-e),t.setHours(0,0,0,0),t}a(45),a(46);var j=new v,x=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(function(){var e=new Date;return e.setDate(0),e.setHours(0,0,0,0),e.setMonth(e.getMonth()-6),e}()),s=Object(u.a)(l,2),o=s[0],i=s[1],m=Object(n.useState)(),E=Object(u.a)(m,2),g=E[0],v=E[1];return Object(n.useEffect)((function(){v(function(){if(console.log("generateUrl()",{type:a,fromDate:o}),"undefined"!==typeof a&&o){var e=j.fromInt(a),t=j.fromInt(function(e){if(!e)return 0;var t=new Date(e),a=new Date;return a.getMonth()-t.getMonth()+12*(a.getFullYear()-t.getFullYear())}(o),2);return"".concat(e).concat(t)}return""}())}),[a,o]),r.a.createElement("div",{className:"create "+w[a].name},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{className:"create-form col-md-4 offset-md-1",noValidate:!0},r.a.createElement(p.a,{className:"row"},r.a.createElement(f.a,{className:"col-sm-4"},"Type"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(h.a.Control,{as:"select",custom:!0,onChange:function(e){console.log("type changed",e.currentTarget.value),c(e.currentTarget.value)}},w.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.name)}))))),r.a.createElement(p.a,{className:"row"},r.a.createElement(f.a,{className:"col-sm-4"},"From"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(d.a,{view:"year",value:o,onClickMonth:function(e){console.log("month changed",{date:e}),Array.isArray(e)?e&&e.length>0&&i(e[0]):i(e)},maxDate:new Date,showNeighboringMonth:!0}))),r.a.createElement(p.a,{className:"row"},r.a.createElement(f.a,{className:"col-sm-4"},"Url value"),r.a.createElement("pre",{className:"col-sm-8"},g))),r.a.createElement("div",{className:"col-md-4 offset-md-1"},g&&function(){if(g&&g.length>=3)return r.a.createElement(b,{result:g})}())))};var D=function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"center"},"build: \u201c","13e0dcf0","\u201c"),r.a.createElement("p",null,r.a.createElement("span",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@wesleyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Wesley Tingey")," on ",r.a.createElement("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))),r.a.createElement("p",null,r.a.createElement("span",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@zarakvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Zarak Khan")," on ",r.a.createElement("a",{href:"https://unsplash.com/s/photos/spotify-streaming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))))},I=a(27),k=a.n(I),M=a(28),T=a.n(M),C=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo center"},r.a.createElement("img",{src:k.a,className:"netf",alt:"netf"}),r.a.createElement("img",{src:T.a,className:"leech",alt:"leech"}),r.a.createElement("p",{className:"header-text"},"Free streaming budget calculator")))};a(48);var _=function(){return r.a.createElement(s.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"body"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/:result([\\w+-]{3,})",component:function(e){var t,a;return r.a.createElement(b,{result:null===(t=e.match)||void 0===t||null===(a=t.params)||void 0===a?void 0:a.result})}}),r.a.createElement(o.a,{path:"/"},r.a.createElement("div",{className:"home row d-flex justify-content-center"},r.a.createElement("p",{className:"col-md-5"},"Ever wondered how much you ",r.a.createElement("span",{className:"highlight"},"spent")," on streaming?"),r.a.createElement("div",{className:"w-100"}),r.a.createElement("p",{className:"col-md-6"},"Calculate for free your Netflix, Spotify, HBO Go or other streaming service ",r.a.createElement("span",{className:"highlight"},"budgets")," with ",r.a.createElement("br",null)," Netfleech."),r.a.createElement("div",{className:"w-100"}),r.a.createElement("p",{className:"col-md-12"},r.a.createElement("button",{className:"btn btn-primary btn-lg hiw-btn"},"How it works?")),r.a.createElement("p",{className:"calculate-btn-div"},r.a.createElement("button",{className:"btn btn-outline-primary btn-lg cff-btn"},"Calculate for free!"),r.a.createElement("br",null),r.a.createElement(i.a,{icon:m.a,className:"chevron-down"}))),r.a.createElement(x,null)))),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51),a(52);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.12933937.chunk.js.map