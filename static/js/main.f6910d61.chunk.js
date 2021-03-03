(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{20:function(e,t,c){},50:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),a=c.n(s),i=c(14),r=c(4),l=c(3),o=(c(50),c(41)),j=c.n(o),d=c(40),b=c.n(d),h=c(1),u=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(i.b,{className:"logo",to:"/",children:"TechNews"}),Object(h.jsxs)("div",{className:"search__bar",children:[Object(h.jsx)("input",{placeholder:"Search news",type:"text",className:"search__input",onChange:e.getNews}),Object(h.jsx)("button",{className:"search__icon",onClick:e.setNews,children:"Search"})]}),Object(h.jsxs)("ul",{className:s?"nav__list nav__list__active":"nav__list",children:[Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(i.b,{exact:!0,activeClassName:"nav__active",className:"nav__link",to:"/",onClick:function(){a(!s)},children:"Top News"})}),Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/technology",onClick:function(){a(!s)},children:"Technology"})}),Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(i.b,{activeClassName:"nav__active",className:"nav__link",to:"/bussiness",onClick:function(){a(!s)},children:"Bussiness"})})]}),Object(h.jsx)("div",{className:"nav__icon",onClick:function(){a(!s)},children:s?Object(h.jsx)(b.a,{}):Object(h.jsx)(j.a,{})})]})},m=c(15),O=c.n(m),p=(c(67),function(e){return Object(h.jsxs)("div",{className:"banner",children:[Object(h.jsx)("h1",{className:"banner__heading",children:e.bannerHeading}),Object(h.jsx)("img",{className:"banner__img",src:e.bannerImg,alt:""})]})}),_=(c(68),function(e){return Object(h.jsxs)("div",{className:"sidebar__detail",children:[Object(h.jsx)("img",{className:"sidebar__detail__img",src:e.bbcImg,alt:""}),Object(h.jsx)("h1",{className:"sidebar__detail__heading",children:e.bbcHeading})]})}),g=(c(69),function(e){return Object(h.jsxs)("div",{className:"weather__section",children:[Object(h.jsx)("h1",{className:"weather__heading",children:"Today's weather brodcast"}),Object(h.jsxs)("div",{className:"weather__detail__section",children:[Object(h.jsxs)("div",{className:"weather__detail",children:[Object(h.jsx)("p",{children:e.name}),Object(h.jsx)("p",{children:e.temp}),Object(h.jsx)("p",{children:e.description})]}),Object(h.jsx)("img",{src:e.icon,alt:""})]})]})}),x=(c(70),function(e){return Object(h.jsxs)("div",{className:"news__card",onClick:e.fullNews,children:[Object(h.jsx)("img",{className:"news__img",src:e.img,alt:""}),Object(h.jsx)("div",{className:"news__detail",children:Object(h.jsx)("h1",{children:e.heading})})]})}),f=(c(71),c(42)),v=c.n(f),w=c(43),N=c.n(w),y=c(44),T=c.n(y),S=function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)("div",{className:"social__media__link",children:[Object(h.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100008004977942",children:Object(h.jsx)(v.a,{fontSize:"small"})}),Object(h.jsx)("a",{href:"https://twitter.com/debojyotibabai1",children:Object(h.jsx)(N.a,{fontSize:"small"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/debojyoti-ghosh-7003671a4/",children:Object(h.jsx)(T.a,{fontSize:"small"})})]}),Object(h.jsx)("p",{children:"\xa9 Copyright TechNews | All Rights Reserved."})]})},I=(c(72),function(e){return Object(h.jsxs)("div",{className:"full__news",children:[Object(h.jsx)("h1",{children:e.heading}),Object(h.jsx)("img",{src:e.img,alt:""}),Object(h.jsx)("p",{children:e.description}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e.publish}),Object(h.jsxs)("p",{children:["~ ",e.author]})]})]})}),k=(c(73),c(20),c.p+"static/media/topBanner.0d270e1b.svg"),C=c(8),B=c.n(C),K=c(26),A=(c(96),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)({name:"",temp:"",description:"",icon:""}),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(n.useState)([]),d=Object(r.a)(j,2),b=d[0],u=d[1],m=Object(n.useState)([]),f=Object(r.a)(m,2),v=f[0],w=f[1],N=Object(n.useState)(!1),y=Object(r.a)(N,2),T=y[0],C=y[1],A=Object(n.useState)([{title:"",urlToImage:"",description:"",publishedAt:"",author:""}]),E=Object(r.a)(A,2),z=E[0],H=E[1];Object(n.useEffect)((function(){B.a.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){s(e.data.articles)}))}),[]);var R=c.map((function(e,t){return Object(h.jsx)(_,{bbcImg:e.urlToImage,bbcHeading:e.title},t)}));Object(n.useEffect)((function(){B.a.get("https://api.openweathermap.org/data/2.5/weather?q=malda&appid=142edd739fe653be18bd7941f7adf3ca&units=metric").then((function(e){o({name:e.data.name,temp:"".concat(e.data.main.temp,"\xb0 celsius"),description:e.data.weather[0].description,icon:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png")})}))}),[]),Object(n.useEffect)((function(){B.a.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){var t=e.data.articles.slice(0,5);u(t)}))}),[]);var q=b.map((function(e,t){return Object(h.jsx)(K.SplideSlide,{className:"carousel__detail",children:Object(h.jsxs)("div",{className:"carousel__link",children:[Object(h.jsx)("img",{src:e.urlToImage,alt:""}),Object(h.jsx)("h1",{children:e.title})]})},t)}));Object(n.useEffect)((function(){B.a.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){w(e.data.articles)}))}),[]);var F=function(e){B.a.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(t){var c=t.data.articles.slice(e,e+1);H(c)})),C(!T)},W=v.map((function(e,t){return Object(h.jsx)(x,{fullNews:F.bind(undefined,t),img:e.urlToImage,heading:e.title},t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"section__width",children:[Object(h.jsx)(p,{bannerHeading:"Welcome to TechNew's Top section.",bannerImg:k}),Object(h.jsxs)("div",{className:"sidebar__weather__section",children:[Object(h.jsxs)("div",{className:"sidebar__news",children:[Object(h.jsx)("h1",{className:"sidebar__news__heading",children:"BBC Shorts:"}),R]}),Object(h.jsx)(g,{name:l.name,temp:l.temp,description:l.description,icon:l.icon})]}),Object(h.jsxs)("div",{className:"news__section",children:[Object(h.jsx)("h1",{className:"news__section__heading",children:"Today's Top News"}),Object(h.jsx)(K.Splide,{className:"carousel",children:q}),Object(h.jsx)("div",{className:"main__news__section",children:W})]}),Object(h.jsx)(O.a,{style:{overlay:{zIndex:"1",backgroundColor:"rgba(0,0,0,0.5)"},content:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"50px",width:"70%",height:"90%"}},isOpen:T,onRequestClose:function(){C(!T)},children:Object(h.jsx)(I,{heading:z[0].title,img:z[0].urlToImage,description:z[0].description,publish:z[0].publishedAt,author:z[0].author})})]}),Object(h.jsx)(S,{})]})}),E=c.p+"static/media/technologyBanner.963ca765.svg",z=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(n.useState)([{title:"",urlToImage:"",description:"",publishedAt:"",author:""}]),d=Object(r.a)(j,2),b=d[0],u=d[1];Object(n.useEffect)((function(){B.a.get("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){s(e.data.articles)}))}),[]);var m=function(e){B.a.get("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(t){var c=t.data.articles.slice(e,e+1);u(c)})),o(!l)},_=c.map((function(e,t){return Object(h.jsx)(x,{fullNews:m.bind(undefined,t),img:e.urlToImage,heading:e.title},t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"section__width",children:[Object(h.jsx)(p,{bannerHeading:"Welcome to TechNew's Technology section.",bannerImg:E}),Object(h.jsxs)("div",{className:"news__section",children:[Object(h.jsx)("h1",{className:"news__section__heading",children:"Today's Technology News"}),Object(h.jsx)("div",{className:"main__news__section",children:_})]}),Object(h.jsx)(O.a,{style:{overlay:{zIndex:"1",backgroundColor:"rgba(0,0,0,0.5)"},content:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"50px",width:"70%",height:"90%"}},isOpen:l,onRequestClose:function(){o(!l)},children:Object(h.jsx)(I,{heading:b[0].title,img:b[0].urlToImage,description:b[0].description,publish:b[0].publishedAt,author:b[0].author})})]}),Object(h.jsx)(S,{})]})},H=c.p+"static/media/businessBanner.974eb650.svg",R=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(n.useState)([{title:"",urlToImage:"",description:"",publishedAt:"",author:""}]),d=Object(r.a)(j,2),b=d[0],u=d[1];Object(n.useEffect)((function(){B.a.get("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(e){s(e.data.articles)}))}),[]);var m=function(e){B.a.get("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2a2f7c81bb17454e99c1299ee2052e23").then((function(t){var c=t.data.articles.slice(e,e+1);u(c)})),o(!l)},_=c.map((function(e,t){return Object(h.jsx)(x,{fullNews:m.bind(undefined,t),img:e.urlToImage,heading:e.title},t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"section__width",children:[Object(h.jsx)(p,{bannerHeading:"Welcome to TechNew's Business section.",bannerImg:H}),Object(h.jsxs)("div",{className:"news__section",children:[Object(h.jsx)("h1",{className:"news__section__heading",children:"Today's Business News"}),Object(h.jsx)("div",{className:"main__news__section",children:_})]}),Object(h.jsx)(O.a,{style:{overlay:{zIndex:"1",backgroundColor:"rgba(0,0,0,0.5)"},content:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"50px",width:"70%",height:"90%"}},isOpen:l,onRequestClose:function(){o(!l)},children:Object(h.jsx)(I,{heading:b[0].title,img:b[0].urlToImage,description:b[0].description,publish:b[0].publishedAt,author:b[0].author})})]}),Object(h.jsx)(S,{})]})},q=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{getNews:function(e){s(e.target.value)},setNews:function(){},value:c}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:A}),Object(h.jsx)(l.b,{path:"/technology",component:z}),Object(h.jsx)(l.b,{path:"/bussiness",component:R}),Object(h.jsx)(l.a,{to:"/"})]})]})};a.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.f6910d61.chunk.js.map