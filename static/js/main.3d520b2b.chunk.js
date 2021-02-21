(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{19:function(e,t,c){},35:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(29),n=c.n(a),i=c(8),r=c(2),l=(c(35),c(0)),j=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(i.b,{className:"logo",to:"/",children:"TechNews"}),Object(l.jsxs)("div",{className:"search__bar",children:[Object(l.jsx)("input",{placeholder:"Search news",type:"text",className:"search__input"}),Object(l.jsx)("button",{className:"search__icon",children:"Search"})]}),Object(l.jsxs)("ul",{className:"nav__list",children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(i.b,{exact:!0,activeClassName:"nav__active",className:"nav__link",to:"/",children:"Top News"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/technology",children:"Technology"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/bussiness",children:"Bussiness"})})]})]})},d=c(12),o=(c(42),function(e){return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("h1",{className:"banner__heading",children:e.bannerHeading}),Object(l.jsx)("img",{className:"banner__img",src:e.bannerImg,alt:""})]})}),b=(c(43),function(e){return Object(l.jsxs)("div",{className:"sidebar__detail",children:[Object(l.jsx)("img",{className:"sidebar__detail__img",src:e.bbcImg,alt:""}),Object(l.jsx)("h1",{className:"sidebar__detail__heading",children:e.bbcHeading})]})}),h=(c(44),function(e){return Object(l.jsxs)("div",{className:"weather__section",children:[Object(l.jsx)("h1",{className:"weather__heading",children:"Today's weather brodcast"}),Object(l.jsxs)("div",{className:"weather__detail__section",children:[Object(l.jsxs)("div",{className:"weather__detail",children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsx)("p",{children:e.temp}),Object(l.jsx)("p",{children:e.description})]}),Object(l.jsx)("img",{src:e.icon,alt:""})]})]})}),m=(c(45),function(e){return Object(l.jsxs)("div",{className:"news__card",children:[Object(l.jsx)("img",{className:"news__img",src:e.topImg,alt:""}),Object(l.jsxs)("div",{className:"news__detail",children:[Object(l.jsx)("h1",{children:e.topHeading}),Object(l.jsx)("p",{children:e.topDetail})]})]})}),_=(c(46),c(19),c.p+"static/media/topBanner.0d270e1b.svg"),p=c(11),u=c.n(p),O=c(17),x=(c(69),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({name:"",temp:"",description:"",icon:""}),i=Object(d.a)(n,2),r=i[0],j=i[1],p=Object(s.useState)([]),x=Object(d.a)(p,2),g=x[0],N=x[1],f=Object(s.useState)([]),v=Object(d.a)(f,2),w=v[0],y=v[1];Object(s.useEffect)((function(){u.a.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){a(e.data.articles)}))}),[]);var T=c.map((function(e,t){return Object(l.jsx)(b,{bbcImg:e.urlToImage,bbcHeading:e.title},t)}));Object(s.useEffect)((function(){u.a.get("https://api.openweathermap.org/data/2.5/weather?q=malda&appid=142edd739fe653be18bd7941f7adf3ca&units=metric").then((function(e){j({name:e.data.name,temp:"".concat(e.data.main.temp,"\xb0 celsius"),description:e.data.weather[0].description,icon:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png")})}))}),[]),Object(s.useEffect)((function(){u.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){var t=e.data.articles.slice(0,5);N(t)}))}),[]);var I=g.map((function(e,t){return Object(l.jsx)(O.SplideSlide,{className:"carousel__detail",children:Object(l.jsxs)("a",{className:"carousel__link",href:e.url,children:[Object(l.jsx)("img",{style:{cursor:"pointer"},src:e.urlToImage,alt:""}),Object(l.jsx)("h1",{style:{cursor:"pointer"},children:e.title})]})},t)}));Object(s.useEffect)((function(){u.a.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){y(e.data.articles)}))}),[]);var S=w.map((function(e,t){return Object(l.jsx)(m,{topImg:e.urlToImage,topHeading:e.title,topDetail:e.description},t)}));return Object(l.jsxs)("div",{className:"section__width",children:[Object(l.jsx)(o,{bannerHeading:"Welcome to TechNew's Top News section.",bannerImg:_}),Object(l.jsxs)("div",{className:"sidebar__weather__section",children:[Object(l.jsxs)("div",{className:"sidebar__news",children:[Object(l.jsx)("h1",{className:"sidebar__news__heading",children:"BBC Shorts:"}),T]}),Object(l.jsx)(h,{name:r.name,temp:r.temp,description:r.description,icon:r.icon})]}),Object(l.jsxs)("div",{className:"news__section",children:[Object(l.jsx)("h1",{className:"news__section__heading",children:"Today's Top News"}),Object(l.jsx)(O.Splide,{className:"carousel",children:I}),Object(l.jsx)("div",{className:"main__news__section",children:S})]})]})}),g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{exact:!0,path:"/",component:x}),Object(l.jsx)(r.b,{path:"/technology",component:x}),Object(l.jsx)(r.b,{path:"/bussiness",component:x}),Object(l.jsx)(r.a,{to:"/"})]})]})};n.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.3d520b2b.chunk.js.map