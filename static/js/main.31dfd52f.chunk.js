(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[3],{101:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(34),a=n.n(i),s=n(18),l=n(24),o=n(40),j=n(36),d=Object(o.a)({reducer:{user:j.a}}),u=n(63),b=n(66),h=(Object(b.a)({apiKey:"AIzaSyBOY8bUd2kipCLNUFaEEum_RMbsZtRa9io",authDomain:"auth-gitonline.firebaseapp.com",projectId:"auth-gitonline",storageBucket:"auth-gitonline.appspot.com",messagingSenderId:"860379118494",appId:"1:860379118494:web:d2f9826a46433e2089748f"}),n(2));a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(l.a,{store:d,children:Object(h.jsx)(u.b,{})})})}),document.getElementById("root"))},16:function(e,t,n){e.exports={header:"Navigation_header__2RJcS",gidOnline:"Navigation_gidOnline__1w5qY",header__wrap_left_block:"Navigation_header__wrap_left_block__2gGlB",navigation:"Navigation_navigation__2zsIn",navigation_item:"Navigation_navigation_item__VHyLq",navLink:"Navigation_navLink__2Le4Y",login:"Navigation_login__186rU",logout:"Navigation_logout__1U6K0",logoutText:"Navigation_logoutText__NTvR5"}},17:function(e,t,n){e.exports={footer:"Footer_footer__1iLIe",gitOnline:"Footer_gitOnline__1kbCd",linkGit:"Footer_linkGit__1_SjC",wrap__contacts:"Footer_wrap__contacts__sj_lj",item:"Footer_item__aUV7c",itemLink:"Footer_itemLink__1hOKG"}},31:function(e,t,n){e.exports={item:"TrendingDay_item__3duTP",list:"TrendingDay_list__7aULp",publicity:"TrendingDay_publicity__3HES-",wrap:"TrendingDay_wrap__2uYW4",title:"TrendingDay_title__27TRe"}},32:function(e,t,n){e.exports={wrap:"Genres_wrap__Es1yR",tr:"Genres_tr__1OSJt"}},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return j})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var c=n(20),r=n.n(c),i="971b2ef273ae22e8f151e27d46ce7887",a="https://api.themoviedb.org",s="https://image.tmdb.org/t/p/w500/";function l(e){return r.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(i,"&page=").concat(e,"&total_pages=200")).then((function(e){return e})).catch(console.error("rrrrrrrrrrr-fetchTrending"))}function o(){return r.a.get("".concat(a,"/3/trending/movie/day?api_key=").concat(i,"&page=10")).then((function(e){return e.data.results})).catch(console.error("rrrrrrrrrrrr-FetchWhichWatchFilm"))}function j(){return r.a.get("".concat(a,"/3/trending/movie/day?api_key=").concat(i,"&page=1")).then((function(e){return e})).catch(console.error("rrrrrrrrrr-fetchTrendingWeek"))}function d(){return r.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(i,"&page=5")).then((function(e){return e.data.results})).catch(console.error("rrrrrrrrrrr-fetchSidebarFilms"))}function u(){return r.a.get("".concat(a,"/3/trending/movie/week?api_key=").concat(i,"&page=8")).then((function(e){return e.data.results})).catch(console.error("rrrrrrrrrrr-fetchSidebarSerials"))}function b(e){return r.a.get("".concat(a,"/3/movie/").concat(e,"?api_key=").concat(i)).then((function(e){return e.data})).catch(console.error("rrrrrrrrr-fetchInfoFilm"))}function h(e){return r.a.get("".concat(a,"/3/movie/").concat(e,"/credits?api_key=").concat(i,"&include_adult=false&language=en-US")).then((function(e){return e.data.cast})).catch(console.error("rrrrrrrrr-fetchCast"))}function O(e){return r.a.get("".concat(a,"/3/search/movie?api_key=").concat(i,"&include_adult=false&language=en-US&query=").concat(e)).then((function(e){return e.data.results})).catch(console.error("rrrrrrrrrrrr-fetchSearchFilm"))}},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s}));var c=n(40),r=Object(c.b)({name:"user",initialState:{email:null,token:null,id:null,nickName:null,checkbox:null},reducers:{setUser:function(e,t){e.email=t.payload.email,e.token=t.payload.token,e.id=t.payload.id,e.nickName=t.payload.nickName,e.checkbox=t.payload.checkbox},removeUser:function(e){e.email=null,e.token=null,e.id=null,e.nickName=null,e.checkbox=null}}}),i=r.actions,a=i.setUser,s=i.removeUser;t.a=r.reducer},47:function(e,t,n){e.exports={input:"SearchFilm_input__1ej-q",btn:"SearchFilm_btn__m1Wfe"}},48:function(e,t,n){"use strict";t.a=n.p+"static/media/default.ae67bd1e.jpg"},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(24);function r(){var e=Object(c.c)((function(e){return e.user})),t=e.email;return{isAuth:!!t,email:t,token:e.token,id:e.id,nickName:e.nickName}}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var c=n(8),r=n(1),i=n(4),a=(n(75),n(76),n(18)),s=n(24),l=n(65),o=n(47),j=n.n(o),d=n(2),u=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(r.useContext)(U).setSearchValue;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),i("")},children:[Object(d.jsx)("label",{htmlFor:"",children:Object(d.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text",name:"",id:"",className:j.a.input,placeholder:"Search film...",value:n})}),Object(d.jsx)("button",{className:j.a.btn,type:"submit",children:"Search"})]})},b=n(16),h=n.n(b),O=n.p+"static/media/gidonline.f0e98dab.jpg",m=n(36),_=function(){var e=Object(s.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:h.a.gidOnline,children:"Git Online"}),Object(d.jsxs)("header",{className:h.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)(a.b,{to:"/",children:Object(d.jsx)("img",{src:O,alt:"gid online"})})}),Object(d.jsxs)("div",{className:h.a.header__wrap_left_block,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{})}),Object(d.jsxs)("ul",{className:h.a.navigation,children:[Object(d.jsx)("li",{className:h.a.navigation_item,children:Object(d.jsx)(a.c,{className:h.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Home"})}),Object(d.jsx)("li",{className:h.a.navigation_item,children:Object(d.jsx)(a.c,{className:h.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Hit"})}),Object(d.jsx)("li",{className:h.a.navigation_item,children:Object(d.jsx)(a.c,{className:h.a.navLink,to:"/",style:function(e){return e.isActive?{color:"rgb(131, 129, 129)"}:{color:"#464545"}},children:"Top"})})]})]}),Object(d.jsxs)("div",{className:h.a.login,children:[Object(d.jsx)("span",{className:h.a.logoutText,children:"LogOut"}),Object(d.jsx)(l.a,{className:h.a.logout,onClick:function(){return e(Object(m.b)())}})]})]})]})},x=n(33),f=n(31),g=n.n(f),p=n(48),v=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){Object(x.i)().then((function(e){return e.data.results})).then(i)}),[]),Object(d.jsx)("div",{className:g.a.wrap,children:Object(d.jsx)("ul",{className:g.a.list,children:n.map((function(e){var t=e.id,n=e.original_title,c=e.poster_path;return Object(d.jsxs)(a.b,{to:"movies/".concat(t),className:g.a.item,children:[Object(d.jsx)("img",{src:c?"".concat(x.b).concat(c):p.a,alt:"dd",width:"151.5",height:"226"}),Object(d.jsx)("h4",{className:g.a.title,children:n})]},t)}))})})},N=n(32),k=n.n(N),y=function(){return Object(d.jsx)("table",{className:k.a.wrap,children:Object(d.jsxs)("tbody",{style:{color:"white"},children:[Object(d.jsxs)("tr",{className:k.a.tr,children:[Object(d.jsx)("td",{children:"WESTERN"}),Object(d.jsx)("td",{children:"BIOGRAPHY"}),Object(d.jsx)("td",{children:"ACTION"}),Object(d.jsx)("td",{children:"MILITARY"}),Object(d.jsx)("td",{children:"DETECTIVE"}),Object(d.jsx)("td",{children:"DRAMA"}),Object(d.jsx)("td",{children:"DOCUMENTARY"})]}),Object(d.jsxs)("tr",{className:k.a.tr,children:[Object(d.jsx)("td",{children:"STORY"}),Object(d.jsx)("td",{children:"COMEDY"}),Object(d.jsx)("td",{children:"CRIME"}),Object(d.jsx)("td",{children:"MELODRAMA"}),Object(d.jsx)("td",{children:"MUSIC"}),Object(d.jsx)("td",{children:"CARTOON"}),Object(d.jsx)("td",{children:"ADVENTURE"})]}),Object(d.jsxs)("tr",{className:k.a.tr,children:[Object(d.jsx)("td",{children:"FAMILY"}),Object(d.jsx)("td",{children:"SERIES"}),Object(d.jsx)("td",{children:"SPORT"}),Object(d.jsx)("td",{children:"THRILLER"}),Object(d.jsx)("td",{children:"HORROR"}),Object(d.jsx)("td",{children:"FANTASY"}),Object(d.jsx)("td",{children:"FICTION"})]})]})})},S=n(17),T=n.n(S),w=function(){return Object(d.jsxs)("footer",{className:T.a.footer,children:[Object(d.jsxs)("div",{className:T.a.gitOnline,children:["GitOnline -",Object(d.jsx)("a",{href:"#",className:T.a.linkGit,children:"your git to the world of cinema"})]}),Object(d.jsxs)("ul",{className:T.a.wrap__contacts,children:[Object(d.jsx)("li",{className:T.a.item,children:Object(d.jsx)("a",{href:"#",className:T.a.itemLink,children:"User"})}),Object(d.jsx)("li",{className:T.a.item,children:Object(d.jsx)("a",{href:"#",className:T.a.itemLink,children:"Ownership"})}),Object(d.jsx)("li",{className:T.a.item,children:Object(d.jsx)("a",{href:"#",className:T.a.itemLink,children:"Contacts"})})]})]})},R=n(49),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,231))})),L=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,233))})),E=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,234))})),A=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,222))})),F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(4)]).then(n.bind(null,228))})),C=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,224))})),U=Object(r.createContext)("");t.b=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(R.a)().isAuth;return Object(d.jsx)("div",{style:{width:1200,margin:" 0 auto"},children:Object(d.jsxs)(U.Provider,{value:{searchValue:n,setSearchValue:a},children:[s&&Object(d.jsx)(_,{}),s&&Object(d.jsx)(v,{}),s&&Object(d.jsx)(y,{}),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/login",element:Object(d.jsx)(L,{})}),Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(I,{})}),Object(d.jsx)(i.b,{path:"/register",element:Object(d.jsx)(E,{})}),Object(d.jsx)(i.b,{path:"movies",element:Object(d.jsx)(A,{})}),Object(d.jsx)(i.b,{path:"movies/:movieId",element:Object(d.jsx)(F,{})}),Object(d.jsx)(i.b,{path:"movies/:movieId/cast",element:Object(d.jsx)(C,{})}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)(i.a,{to:"/login",replace:!0})})]})}),s&&Object(d.jsx)(w,{})]})})}},76:function(e,t,n){}},[[101,6,7]]]);
//# sourceMappingURL=main.31dfd52f.chunk.js.map