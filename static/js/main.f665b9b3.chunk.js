(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[3],{11:function(e,t,n){e.exports={item:"TrendingDay_item__2j3j3",list:"TrendingDay_list__2eyke",publicity:"TrendingDay_publicity__2zBFY",wrap:"TrendingDay_wrap__ghiGt",title:"TrendingDay_title__3SJXO"}},14:function(e,t,n){e.exports={tr:"Genres_tr__1OSJt"}},15:function(e,t,n){e.exports={footer:"Footer_footer__1iLIe",wrap__contacts:"Footer_wrap__contacts__sj_lj",gitOnline:"Footer_gitOnline__1kbCd"}},16:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var c=n(9),i=n.n(c),r="971b2ef273ae22e8f151e27d46ce7887",a="https://api.themoviedb.org";function s(e){return i.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(r,"&page=").concat(e,"&total_pages=200")).then((function(e){return e})).catch(console.error())}function l(){return i.a.get("".concat(a,"/3/trending/movie/day?api_key=").concat(r,"&page=1")).then((function(e){return e})).catch(console.error())}function j(){return i.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(r,"&page=4")).then((function(e){return e.data.results})).catch(console.error())}function o(){return i.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(r,"&page=6")).then((function(e){return e.data.results})).catch(console.error())}function d(e){return i.a.get("".concat(a,"/3/movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.data}))}function b(e){return i.a.get("".concat(a,"/3/movie/").concat(e,"/credits?api_key=").concat(r,"&include_adult=false&language=en-US&page=1")).then((function(e){return e.data.cast}))}},31:function(e,t,n){e.exports={input:"SearchFilm_input__16DHV"}},37:function(e,t,n){},6:function(e,t,n){e.exports={header:"Navigation_header__2RJcS",gidOnline:"Navigation_gidOnline__1w5qY",header__wrap_left_block:"Navigation_header__wrap_left_block__2gGlB",navigation:"Navigation_navigation__2zsIn",navigation_item:"Navigation_navigation_item__VHyLq",navLink:"Navigation_navLink__2Le4Y"}},63:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(20),a=n.n(r),s=n(7),l=(n(36),n(37),n(2)),j=n(5),o=n(31),d=n.n(o),b=n(16),h=n(0),O=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i("")},children:[Object(h.jsx)("label",{htmlFor:"",children:Object(h.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text",name:"",id:"",className:d.a.input,placeholder:"Search film...",value:n})}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})},u=n(6),x=n.n(u),_=n.p+"static/media/gidonline.f0e98dab.jpg",f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:x.a.gidOnline,children:"Git Online"}),Object(h.jsxs)("header",{className:x.a.header,children:[Object(h.jsx)("div",{children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("img",{src:_,alt:"gid online"})})}),Object(h.jsxs)("div",{className:x.a.header__wrap_left_block,children:[Object(h.jsx)("div",{children:Object(h.jsx)(O,{})}),Object(h.jsxs)("ul",{className:x.a.navigation,children:[Object(h.jsx)("li",{className:x.a.navigation_item,children:Object(h.jsx)(s.c,{className:x.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Home"})}),Object(h.jsx)("li",{className:x.a.navigation_item,children:Object(h.jsx)(s.c,{className:x.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Hit"})}),Object(h.jsx)("li",{className:x.a.navigation_item,children:Object(h.jsx)(s.c,{className:x.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Top"})})]})]})]})]})},m=n(14),g=n.n(m),p=function(){return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{style:{color:"white"},children:[Object(h.jsxs)("tr",{className:g.a.tr,children:[Object(h.jsx)("td",{children:"WESTERN"}),Object(h.jsx)("td",{children:"BIOGRAPHY"}),Object(h.jsx)("td",{children:"ACTION"}),Object(h.jsx)("td",{children:"MILITARY"}),Object(h.jsx)("td",{children:"DETECTIVE"}),Object(h.jsx)("td",{children:"DRAMA"}),Object(h.jsx)("td",{children:"DOCUMENTARY"})]}),Object(h.jsxs)("tr",{className:g.a.tr,children:[Object(h.jsx)("td",{children:"STORY"}),Object(h.jsx)("td",{children:"COMEDY"}),Object(h.jsx)("td",{children:"CRIME"}),Object(h.jsx)("td",{children:"MELODRAMA"}),Object(h.jsx)("td",{children:"MUSIC"}),Object(h.jsx)("td",{children:"CARTOON"}),Object(h.jsx)("td",{children:"ADVENTURE"})]}),Object(h.jsxs)("tr",{className:g.a.tr,children:[Object(h.jsx)("td",{children:"FAMILY"}),Object(h.jsx)("td",{children:"SERIES"}),Object(h.jsx)("td",{children:"SPORT"}),Object(h.jsx)("td",{children:"THRILLER"}),Object(h.jsx)("td",{children:"HORROR"}),Object(h.jsx)("td",{children:"FANTASY"}),Object(h.jsx)("td",{children:"FICTION"})]})]})})},v=n(11),N=n.n(v),y=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){Object(b.f)().then((function(e){return e.data.results})).then(i)}),[]),Object(h.jsx)("div",{className:N.a.wrap,children:Object(h.jsx)("ul",{className:N.a.list,children:n.map((function(e){var t=e.id,n=e.original_title,c=e.poster_path;return Object(h.jsxs)(s.b,{to:"movies/".concat(t),className:N.a.item,children:[Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(c),alt:"dd",width:"151.5",height:"226"}),Object(h.jsx)("h4",{className:N.a.title,children:n})]},t)}))})})},k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(2)]).then(n.bind(null,169))})),w=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(2)]).then(n.bind(null,161))})),S=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,162))})),T=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,170))})),I=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,163))})),R=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,164))})),A=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsx)(y,{}),Object(h.jsx)(p,{}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(k,{})}),Object(h.jsx)(l.a,{path:"movies",element:Object(h.jsx)(w,{})}),Object(h.jsx)(l.a,{path:"movies/:movieId",element:Object(h.jsx)(T,{})}),Object(h.jsx)(l.a,{path:"movies/:movieId/cast",element:Object(h.jsx)(I,{})}),Object(h.jsx)(l.a,{path:"movies/:movieId/reviews",element:Object(h.jsx)(R,{})}),Object(h.jsx)(l.a,{path:"*",element:Object(h.jsx)(S,{})})]})})]})},E=n(15),D=n.n(E),L=function(){return Object(h.jsxs)("footer",{className:D.a.footer,children:[Object(h.jsxs)("div",{className:D.a.gitOnline,children:["GitOnline - ",Object(h.jsx)("a",{href:"#",children:"your git to the world of cinema "})]}),Object(h.jsxs)("ul",{className:D.a.wrap__contacts,children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"User"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Ownership"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Contacts"})})]})]})},C=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{style:{width:1200,margin:" 0 auto"},children:[Object(h.jsx)(A,{}),Object(h.jsx)(L,{})]})})};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(C,{})})}),document.getElementById("root"))}},[[63,7,8]]]);
//# sourceMappingURL=main.f665b9b3.chunk.js.map