(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],[,function(t,e,n){t.exports={inputBlockWrap:"InputBlock_inputBlockWrap__2EfyV",inputArea:"InputBlock_inputArea__WHmaP",inputItem:"InputBlock_inputItem__1-4Fp",inputTitle:"InputBlock_inputTitle__3-ks1",input:"InputBlock_input__1OXzP",dec:"InputBlock_dec__16v71",inc:"InputBlock_inc__2DqY0",btn:"InputBlock_btn__m-rAv"}},,,function(t,e,n){t.exports={input:"CounterInput_input__1_aK2",error:"CounterInput_error__wjSrK"}},function(t,e,n){t.exports={counter:"Counter_counter__TPySr",btns:"Counter_btns__2z-pP"}},,function(t,e,n){t.exports={btn:"CounterButton_btn__k13wD"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e),n.d(e,"rerender",(function(){return T}));var a=n(2),c=n.n(a),s=n(6),i=n.n(s),u=(n(12),n(13),n(4)),r=n.n(u),l=n(0),o=function(t){var e=t.count,n=t.maxValue;return Object(l.jsx)("div",{className:"".concat(r.a.input," ").concat(e===n?r.a.error:""),children:e})},d=n(7),p=n.n(d),_=function(t){var e=t.changes,n=t.disabled,a=t.title;return Object(l.jsx)("button",{onClick:e,className:p.a.btn,disabled:n,children:a})},j=n(5),h=n.n(j),b={_state:{maxValue:0,startValue:0,count:0},_render:function(){T()},getState:function(){return this._state},subscribe:function(t){this._render=t},dispatch:function(t){"CHANGE-COUNT"===t.type?(this._state.count=t.newCount+1,this._render()):"RESET-COUNT"===t.type?(this._state.count>0&&(this._state.count=0),this._render()):"INC-SET-MAX-VALUE"===t.type?(this._state.maxValue=t.newValue+1,this._render()):"DEC-SET-MAX-VALUE"===t.type?(this._state.maxValue>0&&(this._state.maxValue=t.newValue-1),this._render()):"INC-SET-START-VALUE"===t.type?(this._state.startValue=t.newValue+1,this._render()):"DEC-SET-START-VALUE"===t.type&&(this._state.startValue>0&&(this._state.startValue=t.newValue-1),this._render())}},x=function(t){var e=t.dispatch,n=t.count,a=t.maxValue;return Object(l.jsxs)("section",{className:h.a.counter,children:[Object(l.jsx)(o,{count:n,maxValue:a}),Object(l.jsxs)("div",{className:h.a.btns,children:[Object(l.jsx)(_,{changes:function(){e({type:"CHANGE-COUNT",newCount:n})},title:"inc",disabled:n>=a}),Object(l.jsx)(_,{title:"reset",changes:function(){e(function(t){return{type:"RESET-COUNT",count:t}}(n))},disabled:0===n})]})]})},V=n(1),m=n.n(V),O=function(t){return Object(l.jsxs)("section",{className:m.a.inputBlockWrap,children:[Object(l.jsxs)("div",{className:m.a.inputArea,children:[Object(l.jsxs)("div",{className:m.a.inputItem,children:[Object(l.jsx)("div",{className:m.a.inputTitle,children:"max value"}),Object(l.jsx)(E,{decHandler:function(){t.dispatch({type:"DEC-SET-MAX-VALUE",newValue:t.maxValue})},incHandler:function(){t.dispatch({type:"INC-SET-MAX-VALUE",newValue:t.maxValue})},newValue:t.maxValue})]}),Object(l.jsxs)("div",{className:m.a.inputItem,children:[Object(l.jsx)("div",{className:m.a.inputTitle,children:"start value"}),Object(l.jsx)(E,{decHandler:function(){t.dispatch({type:"DEC-SET-START-VALUE",newValue:t.startValue})},incHandler:function(){t.dispatch({type:"INC-SET-START-VALUE",newValue:t.startValue})},newValue:t.startValue})]})]}),Object(l.jsx)("div",{className:m.a.btn,children:Object(l.jsx)(_,{changes:function(){alert("Hello!")},title:"set"})})]})},E=function(t){return Object(l.jsxs)("div",{className:m.a.input,children:[Object(l.jsx)("div",{className:m.a.dec,onClick:t.decHandler,children:"-"}),Object(l.jsx)("input",{value:t.newValue,type:"text",placeholder:"Enter your value"}),Object(l.jsx)("div",{className:m.a.inc,onClick:t.incHandler,children:"+"})]})};var f=function(t){var e=t.store.getState();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{maxValue:e.maxValue,startValue:e.startValue,dispatch:t.store.dispatch.bind(t.store)}),Object(l.jsx)(x,{maxValue:e.maxValue,count:e.count,dispatch:t.store.dispatch.bind(t.store)})]})},T=function(){i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{store:b})}),document.getElementById("root"))};b.subscribe(T),T()}],[[15,1,2]]]);
//# sourceMappingURL=main.10555160.chunk.js.map