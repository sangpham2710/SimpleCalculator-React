(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(c,t,n){},19:function(c,t,n){"use strict";n.r(t);var e=n(1),a=n.n(e),r=n(5),_=n.n(r),l=(n(13),n(8)),o=n(6),s=n.n(o),i=n(7),u=n.n(i),b=n(0),j=function(c){return Object(b.jsx)("div",{className:u.a.calc__screen,children:c.children})},d=n(2),h=n.n(d),m=function(c){return Object(b.jsx)("button",{type:"button",name:c.name,className:"".concat(h.a.calc__btn," ").concat("C"===c.name?h.a["calc__btn--AC"]:"D"===c.name?h.a["calc__btn--DEL"]:"="===c.name?h.a["calc__btn--EQ"]:""),onClick:c.onClick,children:c.children})},p=n(4),f=n.n(p),C=["AC","DEL","%","/","1","2","3","*","4","5","6","+","7","8","9","-",".","0","="],x={AC:"C",DEL:"D","%":"%","/":"/",1:"1",2:"2",3:"3","*":"*",4:"4",5:"5",6:"6","+":"+",7:"7",8:"8",9:"9","-":"-",".":".",0:"0","=":"="},E=function(c,t){return(Math.round(Number(c)*Math.pow(10,t))/Math.pow(10,t)).toString()};var k=function(){var c=Object(e.useState)(""),t=Object(l.a)(c,2),n=t[0],a=t[1],r=function(c){var t=c.target.getAttribute("name"),e=n;try{switch(t){case"C":e="";break;case"D":e=e.toString().slice(0,-1);break;case"%":e=f.a.eval(e),e=E(e*=.01,10);break;case"=":e=f.a.eval(e),e=E(e,10);break;default:e+=t}}catch(r){console.error(r)}a(e)};return Object(b.jsxs)("div",{className:s.a.calc,children:[Object(b.jsx)(j,{children:n}),C.map((function(c){return Object(b.jsx)(m,{name:x[c],onClick:r,children:c},x[c])}))]})};_.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},2:function(c,t,n){c.exports={calc__btn:"Button_calc__btn__223-A","calc__btn--AC":"Button_calc__btn--AC__10vgC","calc__btn--EQ":"Button_calc__btn--EQ__q27rQ","calc__btn--DEL":"Button_calc__btn--DEL__2gwjT"}},6:function(c,t,n){c.exports={calc:"App_calc__33J6g"}},7:function(c,t,n){c.exports={calc__screen:"Screen_calc__screen__Emp_S"}}},[[19,1,2]]]);
//# sourceMappingURL=main.78908254.chunk.js.map