(this["webpackJsonppolyion-frontend"]=this["webpackJsonppolyion-frontend"]||[]).push([[13],{700:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return pe}));var c,a,r,i,s,o,j,b,u,l,d,p,O=t(29),x=t(0),f=t(2),h=t(34),m=t(107),g=t(112),v=t(4),w=t.n(v),k=t(16),y=t(26),z=t(68),S=t(14),E=t.n(S),B=t(676),C=t(17),I=t(32),F=t(41),G=t(74),R=t(675),N=t(134),L=function(){var e=Object(x.useState)([]),n=Object(y.a)(e,2),t=n[0],c=n[1],a=Object(z.m)().account,r=Object(N.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var n,t,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R.a.map((function(e){return{address:Object(F.d)(),name:"pendingICE",params:[e.pid,a]}})),e.next=3,Object(I.a)(G,n);case 3:t=e.sent,r=R.a.map((function(e,n){return Object(C.a)(Object(C.a)({},e),{},{balance:new E.a(t[n])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),t},P=t(677),T=t(686),A=t(11),D=function(e){var n=e.value,t=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object(T.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),s=i.countUp,o=i.update,j=Object(x.useRef)(o);return Object(x.useEffect)((function(){j.current(n)}),[n,j]),Object(A.jsxs)(h.B,{bold:!0,fontSize:a,children:[r,s]})},H=function(e){var n=e.earningsSum,t=Object(m.a)();return Object(z.m)().account?Object(A.jsx)(D,{value:n}):Object(A.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:t(298,"Locked")})},$=function(e){var n=e.cakeBalance,t=Object(m.a)();return Object(z.m)().account?Object(A.jsx)(D,{value:n,fontSize:"24px"}):Object(A.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:t(298,"Locked")})},Q=t(111),W=t(270),J=t(86),M=t(678),U=function(e){var n=Object(x.useState)(new E.a(0)),t=Object(y.a)(n,2),c=t[0],a=t[1],r=Object(z.m)(),i=r.account,s=r.ethereum,o=Object(N.a)().fastRefresh;return Object(x.useEffect)((function(){i&&s&&function(){var n=Object(k.a)(w.a.mark((function n(){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(M.b)(s,e,i);case 2:t=n.sent,a(new E.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[i,s,e,o]),c},V=function(){var e=Object(x.useState)([]),n=Object(y.a)(e,2),t=n[0],c=n[1],a=Object(z.m)().account,r=Object(N.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R.a.map((function(e){return{address:Object(F.d)(),name:"pendingICE",params:[e.pid,a]}})),e.next=3,Object(I.a)(G,n);case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),t},q=t(666),Y=Object(f.e)(h.h)(c||(c=Object(O.a)(["\nposition: relative;\noverflow: hidden;\nz-index: 2;\n\n&:before {\n  content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0.2;\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n  }\n"]))),_=f.e.div(a||(a=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),K=f.e.img(r||(r=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),X=f.e.div(i||(i=Object(O.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Z=f.e.div(s||(s=Object(O.a)(["\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),ee=Object(F.a)(),ne=function(){var e=Object(x.useState)(!1),n=Object(y.a)(e,2),t=n[0],c=n[1],a=Object(z.m)().account,r=Object(m.a)(),i=L(),s=Object(q.a)(U(Object(F.a)())),o=Object(Q.f)().toNumber(),j=V().reduce((function(e,n){return e+new E.a(n).div(new E.a(10).pow(18)).toNumber()}),0),b=i.filter((function(e){return e.balance.toNumber()>0})),u=Object(B.a)(b.map((function(e){return e.pid}))).onReward,l=Object(x.useCallback)(Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]),d=Object(x.useCallback)(Object(k.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.ethereum)){e.next=11;break}return e.prev=2,e.next=5,n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:ee,symbol:"ICE",decimals:"18",image:"https://www.PolyIce.net/images/egg/3.png"}}});case 5:e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]);return Object(A.jsx)(Y,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(A.jsx)(K,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(A.jsxs)(_,{children:[Object(A.jsx)(X,{children:r(544,"EGG to Harvest")}),Object(A.jsx)(H,{earningsSum:j}),Object(A.jsxs)(X,{children:["~$",(o*j).toFixed(2)]})]}),Object(A.jsxs)(_,{children:[Object(A.jsx)(X,{children:r(546,"EGG in Wallet")}),Object(A.jsx)($,{cakeBalance:s}),Object(A.jsxs)(X,{children:["~$",(o*s).toFixed(2)]})]}),Object(A.jsxs)(Z,{children:[Object(A.jsxs)(h.d,{onClick:d,size:"sm",mb:2,children:["+ Add ICE to ",Object(A.jsx)("img",{style:{marginLeft:8},width:16,src:"https://jaguarswap.com/images/tokens/metamask.png",alt:"metamask logo"})]}),a?Object(A.jsx)(h.d,{id:"harvest-all",disabled:b.length<=0||t,onClick:l,fullWidth:!0,children:t?r(548,"Collecting EGG"):r(999,"Harvest all (".concat(b.length,")"))}):Object(A.jsx)(P.a,{fullWidth:!0})]})]})})},te=t(673),ce=Object(f.e)(h.h)(o||(o=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=f.e.div(j||(j=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),re=function(){var e=Object(m.a)(),n=function(){var e=Object(N.a)().slowRefresh,n=Object(x.useState)(),t=Object(y.a)(n,2),c=t[0],a=t[1];return Object(x.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(J.a)(W,Object(F.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,a(new E.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),t=function(e){var n=Object(x.useState)(new E.a(0)),t=Object(y.a)(n,2),c=t[0],a=t[1],r=Object(N.a)().slowRefresh;return Object(x.useEffect)((function(){!function(){var e=Object(k.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(J.a)(W,Object(F.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,a(new E.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(F.a)()),c=Object(Q.c)(),a=Object(Q.f)(),r=n?n.minus(t):new te.a(0),i=Object(q.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].IcePerBlock&&(o=new te.a(c[0].IcePerBlock).div(new te.a(10).pow(18)).toNumber()),Object(A.jsx)(ce,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:e(534,"Egg Stats")}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(A.jsx)(D,{fontSize:"14px",value:Object(q.a)(s),decimals:0,prefix:"$"})]}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(536,"Total Minted")}),n&&Object(A.jsx)(D,{fontSize:"14px",value:Object(q.a)(n),decimals:0})]}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(A.jsx)(D,{fontSize:"14px",value:Object(q.a)(t),decimals:0})]}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(A.jsx)(D,{fontSize:"14px",value:i,decimals:0})]}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(540,"New EGG/block")}),Object(A.jsx)(h.B,{bold:!0,fontSize:"14px",children:o})]})]})})},ie=Object(f.e)(h.h)(b||(b=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),se=function(){var e=Object(m.a)(),n=Object(Q.g)();return Object(A.jsx)(ie,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(D,{value:n.toNumber(),prefix:"$",decimals:2}),Object(A.jsx)(h.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},oe=t(697),je=t(303),be=Object(f.e)(h.h)(u||(u=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ue=(f.e.div(l||(l=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)(),n=Object(je.a)(),t=n.isDark;n.toggleTheme,n.theme;return Object(A.jsx)(be,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(A.jsx)(oe.a,{dataSource:{sourceType:"profile",screenName:"PolyIceF"},options:{height:"300",chrome:"noheader, nofooter",width:"400",theme:t?"dark":"light"}})]})})}),le=f.e.div(d||(d=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n  position: relative;\n  z-index:2;\n  border-radius: 30px;\n  \n  &:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0.1;\n    background-image: url('/images/egg/3.png');\n    background-repeat: no-repeat;\n    background-position: top center;    \n    border-radius: 30px;\n  }\n\n  "," {\n    \n    padding-top: 0;\n    position: relative;\n    z-index: 2;\n    height: 165px;\n\n    &:before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      opacity: 0.65;\n      background-image: url('/images/egg/vaults-hero.png');\n    background-position: left center, right center;\n    background-repeat: no-repeat;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),de=Object(f.e)(h.b)(p||(p=Object(O.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),pe=function(){var e=Object(m.a)();return Object(A.jsxs)(g.a,{children:[Object(A.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(579,"Yield Farming shas begun")}),Object(A.jsxs)(le,{children:[Object(A.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",children:e(576,"PolyIce Finance")}),Object(A.jsx)(h.B,{children:e(578,"Last generation yield farming based on polygon")})]}),Object(A.jsx)("div",{children:Object(A.jsxs)(de,{children:[Object(A.jsx)(ne,{}),Object(A.jsx)(ue,{}),Object(A.jsx)(re,{}),Object(A.jsx)(se,{})]})})]})}}}]);
//# sourceMappingURL=13.df213e10.chunk.js.map