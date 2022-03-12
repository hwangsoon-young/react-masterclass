(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),a=t(21),i=t.n(a),o=t(2),s=t(4),l=t(9),d=t(3),j=t(15),b=t(11),p=t(12),h=t.n(p),u=t(1);var x=function(){return Object(u.jsx)("h1",{children:"Price"})};var O,f,m,g,v,y,k,w,C,S=function(){return Object(u.jsx)("h1",{children:"Chart"})},q=o.c.div(O||(O=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),I=o.c.div(f||(f=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),z=o.c.p(m||(m=Object(s.a)(["\n  margin: 20px 0px;\n"]))),L=o.c.div(g||(g=Object(s.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),M=o.c.header(v||(v=Object(s.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),P=o.c.h1(y||(y=Object(s.a)(["\n    font-size: 48px;\n    color:",";\n"])),(function(n){return n.theme.accentColor})),A=o.c.span(k||(k=Object(s.a)(["\n    text-align: center;\n    display: block;\n"]))),E=o.c.div(w||(w=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),T=o.c.span(C||(C=Object(s.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ","\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var _,D,F,H,J,B,N,R=function(){var n=Object(c.useState)(!0),e=Object(b.a)(n,2),t=e[0],r=e[1],a=Object(d.g)().coinId,i=Object(d.f)().state,o=Object(c.useState)(),s=Object(b.a)(o,2),p=s[0],O=s[1],f=Object(c.useState)(),m=Object(b.a)(f,2),g=m[0],v=m[1],y=Object(d.h)("/:coinID/price"),k=Object(d.h)("/:coinID/chart");return Object(c.useEffect)((function(){Object(j.a)(h.a.mark((function n(){var e,t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.coinpaprika.com/v1/coins/".concat(a));case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,console.log(e),n.next=8,fetch("https://api.coinpaprika.com/v1/tickers/".concat(a));case 8:return n.next=10,n.sent.json();case 10:t=n.sent,console.log(t),O(e),v(t),r(!1);case 15:case"end":return n.stop()}}),n)})))()}),[]),Object(u.jsxs)(L,{children:[Object(u.jsx)(M,{children:Object(u.jsx)(P,{children:null!==i&&void 0!==i&&i.name?i.name:t?"Loading...":null===p||void 0===p?void 0:p.name})}),t?Object(u.jsx)(A,{children:"Loading..."}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(q,{children:[Object(u.jsxs)(I,{children:[Object(u.jsx)("span",{children:"Rank:"}),Object(u.jsx)("span",{children:null===p||void 0===p?void 0:p.rank})]}),Object(u.jsxs)(I,{children:[Object(u.jsx)("span",{children:"Symbol:"}),Object(u.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.symbol]})]}),Object(u.jsxs)(I,{children:[Object(u.jsx)("span",{children:"Open Source:"}),Object(u.jsx)("span",{children:null!==p&&void 0!==p&&p.open_source?"Yes":"No"})]})]}),Object(u.jsx)(z,{children:null===p||void 0===p?void 0:p.description}),Object(u.jsxs)(q,{children:[Object(u.jsxs)(I,{children:[Object(u.jsx)("span",{children:"Total Suply:"}),Object(u.jsx)("span",{children:null===g||void 0===g?void 0:g.total_supply})]}),Object(u.jsxs)(I,{children:[Object(u.jsx)("span",{children:"Max Supply:"}),Object(u.jsx)("span",{children:null===g||void 0===g?void 0:g.max_supply})]})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)(T,{isActive:null!==k,children:Object(u.jsx)(l.b,{to:"/".concat(a,"/chart"),children:"Chart"})}),Object(u.jsx)(T,{isActive:null!==y,children:Object(u.jsx)(l.b,{to:"/".concat(a,"/price"),children:"Price"})})]}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/:coinId/price",children:Object(u.jsx)(x,{})}),Object(u.jsx)(d.a,{path:"/:coinId/chart",children:Object(u.jsx)(S,{})})]})]})]})},Y=o.c.div(_||(_=Object(s.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),$=o.c.header(D||(D=Object(s.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),G=o.c.ul(F||(F=Object(s.a)(["\n\n"]))),K=o.c.li(H||(H=Object(s.a)(["\n    background-color: white;\n    color: ",";\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        transition: color 0.2s ease-in;\n    }\n    &:hover {\n        a {\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),Q=o.c.h1(J||(J=Object(s.a)(["\n    font-size: 48px;\n    color:",";\n"])),(function(n){return n.theme.accentColor})),U=o.c.span(B||(B=Object(s.a)(["\n    text-align: center;\n    display: block;\n"]))),V=o.c.img(N||(N=Object(s.a)(["\n    width:35px;\n    height:35px;\n    margin-right: 10px;\n"])));var W=function(){var n=Object(c.useState)([]),e=Object(b.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!0),i=Object(b.a)(a,2),o=i[0],s=i[1];return Object(c.useEffect)((function(){Object(j.a)(h.a.mark((function n(){var e,t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.coinpaprika.com/v1/coins");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,r(t.slice(0,100)),s(!1);case 8:case"end":return n.stop()}}),n)})))()}),[]),Object(u.jsxs)(Y,{children:[Object(u.jsx)($,{children:Object(u.jsx)(Q,{children:"\ucf54\uc778"})}),o?Object(u.jsx)(U,{children:"Loading..."}):Object(u.jsx)(G,{children:t.map((function(n){return Object(u.jsx)(K,{children:Object(u.jsxs)(l.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(u.jsx)(V,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var X,Z=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",children:Object(u.jsx)(W,{})}),Object(u.jsx)(d.a,{path:"/:coinId",children:Object(u.jsx)(R,{})})]})})},nn=Object(o.b)(X||(X=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var en=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(nn,{}),Object(u.jsx)(Z,{})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#4cd137"},children:Object(u.jsx)(en,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.43add9e2.chunk.js.map