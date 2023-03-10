"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{8123:function(n,e,t){t.d(e,{HC:function(){return d},JS:function(){return o},cI:function(){return p},kh:function(){return l},ts:function(){return u}});var r=t(5861),i=t(4687),a=t.n(i),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="f68110fe6010762197ab45abbadc1a08",o=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s,page:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,r=e.page,n.next=3,c.Z.get("/search/movie",{params:{api_key:s,query:t,page:r,include_adult:!1}});case 3:return i=n.sent,o=i.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4290:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(1327),i=t(3239),a=t(184),c=function(n){var e=n.open;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},open:e,children:(0,a.jsx)(i.Z,{color:"inherit"})})})}},76:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,i,a,c,s,o,d,u,p,l,x,h,m,f,v=t(5861),g=t(9439),w=t(4687),j=t.n(w),Z=t(2791),b=t(7689),y=t(8123),k=t(4290),_=t(1319),z=t(5096),S=t(168),I=t(4709),F=t(1087),O=I.Z.div(r||(r=(0,S.Z)(["\n  color: var(--color-text-dark);\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    column-gap: 50px;\n  }\n\n  @media screen and (min-width: 1280px) {\n  }\n"]))),W=I.Z.div(i||(i=(0,S.Z)(["\n  overflow: hidden;\n  border-radius: 5px;\n\n  @media screen and (max-width: 768px) {\n    width: 240px;\n    height: 357px;\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n    height: auto;\n  }\n"]))),C=I.Z.div(a||(a=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc(100% - 350px - 50px);\n  }\n"]))),R=I.Z.h2(c||(c=(0,S.Z)(["\n  font-size: 20px;\n  line-height: 1.17;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 30px;\n  }\n"]))),V=I.Z.table(s||(s=(0,S.Z)(["\n  border-spacing: 0 8px;\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 400px;\n  }\n"]))),q=I.Z.td(o||(o=(0,S.Z)(["\n  vertical-align: top;\n  min-width: 108px;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  line-height: 1.33;\n\n  @media screen and (min-width: 1280px) {\n    min-width: 152px;\n    font-size: 16px;\n  }\n"]))),D=I.Z.td(d||(d=(0,S.Z)(["\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 500;\n  color: var(--color-text-dark);\n\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),H=I.Z.span(u||(u=(0,S.Z)(["\n  display: inline-block;\n  text-align: center;\n  border-radius: 5px;\n  width: 36px;\n  height: 16px;\n  background-color: var(--color-accent);\n  color: var(--color-text-light);\n  margin-right: 4px;\n\n  @media screen and (min-width: 1280px) {\n    width: 40px;\n    height: 20px;\n  }\n"]))),T=I.Z.span(p||(p=(0,S.Z)(["\n  display: inline-block;\n  text-align: center;\n  border-radius: 5px;\n  width: 36px;\n  height: 16px;\n  background-color: #f7f7f7;\n  margin-left: 4px;\n\n  @media screen and (min-width: 1280px) {\n    width: 40px;\n    height: 20px;\n  }\n"]))),A=I.Z.div(l||(l=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 264px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 100%;\n  }\n"]))),M=I.Z.div(x||(x=(0,S.Z)(["\n  font-size: 12px;\n  line-height: 1.33;\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),P=I.Z.p(h||(h=(0,S.Z)(["\n  font-size: 12px;\n  line-height: 1.67;\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),U=I.Z.ul(m||(m=(0,S.Z)(["\n  padding-top: 10px;\n  display: flex;\n  gap: 20px;\n"]))),B=(0,I.Z)(F.rU)(f||(f=(0,S.Z)(["\n  color: var(--color-card__text);\n"]))),E=t(184),G=function(n){var e=n.movie,t=(0,b.UO)().movieId,r=(0,b.TH)(),i=e.poster_path,a=e.title,c=e.original_title,s=e.vote_average,o=e.vote_count,d=e.popularity,u=e.overview,p=e.genres,l=(0,z.dk)(i),x=(0,z.WQ)(p),h=(0,z.Bs)(s),m=(0,z.Bs)(d);return(0,E.jsxs)(O,{children:[(0,E.jsx)(W,{className:"img_wrap",children:(0,E.jsx)("img",{src:l,alt:a})}),(0,E.jsxs)(C,{children:[(0,E.jsx)(R,{children:a}),(0,E.jsx)(V,{children:(0,E.jsxs)("tbody",{children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)(q,{children:"Vote / Votes"}),(0,E.jsxs)(D,{children:[(0,E.jsx)(H,{children:h})," /",(0,E.jsx)(T,{children:o})]})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)(q,{children:"Popularity"}),(0,E.jsx)(D,{children:m})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)(q,{children:"Original Title"}),(0,E.jsx)(D,{children:c})]}),p.length>0&&(0,E.jsxs)("tr",{children:[(0,E.jsx)(q,{children:"Genre"}),(0,E.jsx)(D,{children:x})]})]})}),u&&(0,E.jsxs)(A,{children:[(0,E.jsx)(M,{children:"OVERVIEW "}),(0,E.jsx)(P,{children:u})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{children:"Additional information"}),(0,E.jsxs)(U,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(B,{to:"/movies/".concat(t,"/cast"),state:r.state,children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(B,{to:"/movies/".concat(t,"/reviews"),state:r.state,children:"Reviews"})})]})]})]})]})},J=t(9126),N=t(9983),Q=t(231),X=function(){var n,e,t=null!==(n=null===(e=(0,b.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",r=(0,b.UO)().movieId,i=(0,Z.useState)(null),a=(0,g.Z)(i,2),c=a[0],s=a[1],o=(0,Z.useState)(!1),d=(0,g.Z)(o,2),u=d[0],p=d[1],l=(0,Z.useState)(null),x=(0,g.Z)(l,2),h=x[0],m=x[1];return(0,Z.useEffect)((function(){m(null);var n=function(){var n=(0,v.Z)(j().mark((function n(e){var t;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,y.ts)(e);case 4:t=n.sent,s(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(r)}),[r]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q.q5,{children:(0,E.jsx)(Q.W2,{children:(0,E.jsxs)(Q.II,{to:t,children:[(0,E.jsx)(N.Pd.Provider,{value:{size:"1.4em"},children:(0,E.jsx)(J.RVs,{})}),(0,E.jsx)("span",{children:"Go back"})]})})}),(0,E.jsx)(Q.cf,{children:(0,E.jsxs)(Q.W2,{children:[!u&&!h&&c&&(0,E.jsx)(G,{movie:c}),u&&(0,E.jsx)(k.a,{open:u}),h&&(0,E.jsx)(_.j,{children:"Sorry, something went wrong..."})]})}),(0,E.jsx)(Z.Suspense,{fallback:(0,E.jsx)(_.j,{children:"Magic is happening, please wait!"}),children:(0,E.jsx)(b.j3,{})})]})}},5096:function(n,e,t){t.d(e,{RG:function(){return s},Bs:function(){return p},Pc:function(){return c},D$:function(){return o},zl:function(){return u},WQ:function(){return d},dk:function(){return a}});var r=t(9439),i=JSON.parse('{"X":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}'),a=function(n){return n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://ik.imagekit.io/blsadqwgu/comingSoon.webp"},c=function(n){return n?"".concat("https://image.tmdb.org/t/p/w200").concat(n):"https://ik.imagekit.io/blsadqwgu/no-person-200x300.png"},s=function(n){if(n.length<=34)return n;var e=n.slice(0,14),t=n.slice(-14);return"".concat(e,"...").concat(t)},o=function(n){return new Date(n||new Date).getFullYear()},d=function(n){var e=n.map((function(n){return n.name}));return e.length<=2?e.join(" "):"".concat(e.slice(0,2).join(", "),", Other")},u=function(n){var e=i.X,t=n.map((function(n){var t=e.filter((function(e){return e.id===n}));return(0,r.Z)(t,1)[0].name}));return t.length<=2?t.join(" "):"".concat(t.slice(0,2).join(", "),", Other")},p=function(n){return n?n.toFixed(1):"0.0"}}}]);
//# sourceMappingURL=76.895fd0b0.chunk.js.map