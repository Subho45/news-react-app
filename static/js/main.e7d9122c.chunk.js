(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(28),n=c.n(a),i=(c(34),c(8)),r=(c(35),c(0)),l=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(i.b,{className:"logo",to:"/",children:"TechNews"}),Object(r.jsxs)("div",{className:"search__bar",children:[Object(r.jsx)("input",{placeholder:"Search news",type:"text",className:"search__input"}),Object(r.jsx)("button",{className:"search__icon",children:"Search"})]}),Object(r.jsxs)("ul",{className:"nav__list",children:[Object(r.jsx)("li",{className:"nav__item",children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"nav__active",className:"nav__link",to:"/",children:"Top News"})}),Object(r.jsx)("li",{className:"nav__item",children:Object(r.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/technology",children:"Technology"})}),Object(r.jsx)("li",{className:"nav__item",children:Object(r.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/bussiness",children:"Bussiness"})})]})]})},j=c(2),d=c(12),b=(c(42),function(e){return Object(r.jsxs)("div",{className:"banner",children:[Object(r.jsx)("h1",{className:"banner__heading",children:e.bannerHeading}),Object(r.jsx)("img",{className:"banner__img",src:e.bannerImg,alt:""})]})}),o=c.p+"static/media/topBanner.9d3cb134.svg",h=(c(43),c(11)),m=c.n(h),_=(c(62),c(63),function(e){return Object(r.jsxs)("div",{className:"weather__section",children:[Object(r.jsx)("h1",{className:"weather__heading",children:"Today's weather brodcast"}),Object(r.jsxs)("div",{className:"weather__detail__section",children:[Object(r.jsxs)("div",{className:"weather__detail",children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsx)("p",{children:e.temp}),Object(r.jsx)("p",{children:e.description})]}),Object(r.jsx)("img",{src:e.icon,alt:""})]})]})}),p=(c(64),function(e){return Object(r.jsxs)("div",{className:"sidebar__detail",children:[Object(r.jsx)("img",{className:"sidebar__detail__img",src:e.bbcImg,alt:""}),Object(r.jsx)("h1",{className:"sidebar__detail__heading",children:e.bbcHeading})]})}),u=c(17),O=(c(69),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({name:"",temp:"",description:"",icon:""}),i=Object(d.a)(n,2),l=i[0],j=i[1],h=Object(s.useState)([]),O=Object(d.a)(h,2),x=O[0],g=O[1];Object(s.useEffect)((function(){m.a.get("https://api.openweathermap.org/data/2.5/weather?q=malda&appid=142edd739fe653be18bd7941f7adf3ca&units=metric").then((function(e){j({name:e.data.name,temp:"".concat(e.data.main.temp,"\xb0 celsius"),description:e.data.weather[0].description,icon:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png")})}))}),[]),Object(s.useEffect)((function(){m.a.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){a(e.data.articles)}))}),[]);var N=c.map((function(e,t){return Object(r.jsx)(p,{bbcImg:e.urlToImage,bbcHeading:e.title},t)}));Object(s.useEffect)((function(){m.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){var t=e.data.articles.slice(0,5);g(t)}))}),[]);var f=x.map((function(e,t){return Object(r.jsx)(u.SplideSlide,{className:"carousel__detail",children:Object(r.jsxs)("a",{className:"carousel__link",href:e.url,children:[Object(r.jsx)("img",{style:{cursor:"pointer"},src:e.urlToImage,alt:""}),Object(r.jsx)("h1",{style:{cursor:"pointer"},children:e.title})]})},t)}));return Object(r.jsxs)("div",{className:"section__width",children:[Object(r.jsx)(b,{bannerHeading:"Welcome to TechNew's Top News section.",bannerImg:o}),Object(r.jsxs)("div",{className:"sidebar__weather__section",children:[Object(r.jsxs)("div",{className:"sidebar__news",children:[Object(r.jsx)("h1",{className:"sidebar__news__heading",children:"BBC Shorts:"}),N]}),Object(r.jsx)(_,{name:l.name,temp:l.temp,description:l.description,icon:l.icon})]}),Object(r.jsx)("div",{className:"news__section",children:Object(r.jsx)("h1",{className:"news__section__heading",children:"Today's Top News"})}),Object(r.jsx)(u.Splide,{className:"carousel",children:f})]})}),x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",component:O}),Object(r.jsx)(j.b,{path:"/technology",component:O}),Object(r.jsx)(j.b,{path:"/bussiness",component:O}),Object(r.jsx)(j.a,{to:"/"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};n.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[70,1,2]]]);
//# sourceMappingURL=main.e7d9122c.chunk.js.map