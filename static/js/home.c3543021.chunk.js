(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[2],{116:function(e,t,a){},117:function(e,t,a){e.exports={item:"Home_item__Yzg04",list:"Home_list__THyJa",publicity:"Home_publicity__3TLxJ",wrap:"Home_wrap__a7YBz",wrap__info:"Home_wrap__info__FhG2c",year:"Home_year__TISXW",title:"Home_title__En7xo"}},125:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t),a.d(t,"Movies",(function(){return s}));a(1);var i=a(0),s=function(){return Object(i.jsx)("div",{children:"Movies"})};t.default=s},169:function(e,t,a){"use strict";a.r(t);var i=a(5),s=a(1),c=a(7),n=a(16),r=a(115),l=a.n(r),o=(a(116),a(0)),d=function(e){var t=e.onChangePage;return Object(o.jsx)(l.a,{breakLabel:"...",nextLabel:" >",onPageChange:function(e){return t(e.selected+1)},pageRangeDisplayed:12,pageCount:5,previousLabel:"< ",renderOnZeroPageCount:null})},j=a(117),m=a.n(j),b=a(91),u=a(167),p=a(160),O=a(125),_=a.n(O),h=function(e){var t=e.star.toFixed(1)-3;return console.log(t),Object(o.jsx)(p.a,{spacing:1,children:Object(o.jsx)(u.a,{className:_.a.rating,name:"customized-10",defaultValue:t,max:7,precision:.5,readOnly:!0})})};t.default=function(){var e=Object(s.useState)(1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(s.useState)([]),j=Object(i.a)(l,2),u=j[0],p=j[1];return Object(s.useEffect)((function(){Object(n.e)(a).then((function(e){return e.data.results})).then(p),window.scrollTo(0,0)}),[a]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:m.a.wrap,children:[" ",Object(o.jsx)("ul",{className:m.a.list,children:u.map((function(e){var t=e.id,a=e.original_title,i=e.poster_path,s=e.vote_average,n=e.release_date;return Object(o.jsxs)(c.b,{to:"movies/".concat(t),className:m.a.item,children:[Object(o.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(i),alt:"dd",width:"100%",height:"405"}),Object(o.jsx)("h4",{className:m.a.title,children:a}),Object(o.jsxs)("div",{className:m.a.wrap__info,children:[Object(o.jsx)("p",{children:Object(o.jsx)(h,{star:s})}),Object(o.jsx)("p",{className:m.a.year,children:n})]})]},t)}))}),Object(o.jsx)("div",{className:m.a.publicity,children:Object(o.jsx)(b.a,{})})]}),Object(o.jsx)(d,{onChangePage:function(e){return r(e)}})]})}},83:function(e,t,a){e.exports={wrapRegistration:"SideBar_wrapRegistration__3Hv-g",featuredMovies:"SideBar_featuredMovies__1CdV-",arrow:"SideBar_arrow__3FmWZ",listFilms:"SideBar_listFilms__11gWH",itemFilm:"SideBar_itemFilm__227t_",titleFilm:"SideBar_titleFilm__2DR98",wrapListFilm:"SideBar_wrapListFilm__2Bt-2",wrapWrapListFilm:"SideBar_wrapWrapListFilm__2-yHl"}},85:function(e,t,a){e.exports={form:"Login_form__3YXHo",input:"Login_input__2MUGI",btnSubmit:"Login_btnSubmit__2NsjQ"}},86:function(e,t,a){e.exports={text:"Modal_text__9K_o0"}},91:function(e,t,a){"use strict";var i=a(5),s=a(1),c=a(7),n=a(16),r=a(83),l=a.n(r),o=a(171),d=a(166),j=a(172),m=a(165),b=a(84),u=a(99),p=a(85),O=a.n(p),_=a(0),h=function(){var e=Object(u.a)(),t=e.register,a=e.handleSubmit,i=e.watch,s=e.formState.errors;return console.log(i("example")),Object(_.jsxs)("form",{onSubmit:a((function(e){console.log(e)})),className:O.a.form,children:[Object(_.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},t("name")),{},{className:O.a.input,placeholder:"Enter name..."})),Object(_.jsx)("input",Object(b.a)(Object(b.a)({type:"password"},t("password",{required:!0})),{},{className:O.a.input,placeholder:"Enter password..."})),s.exampleRequired&&Object(_.jsx)("p",{children:"This field is required"}),Object(_.jsx)("button",{type:"submit",className:O.a.btnSubmit,children:"Login"})]})},x=a(86),f=a.n(x),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"#222222",border:"2px solid #222",boxShadow:24,p:2},v=function(){var e=s.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=function(){return c(!0)};return Object(_.jsxs)("div",{children:[Object(_.jsx)(d.a,{onClick:n,children:"REGISTRATION"}),Object(_.jsx)(d.a,{onClick:n,children:"LOGIN"}),Object(_.jsx)(m.a,{open:a,onClose:function(){return c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(_.jsxs)(o.a,{sx:g,children:[Object(_.jsx)(j.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:Object(_.jsx)(h,{})}),Object(_.jsx)(j.a,{id:"modal-modal-description",sx:{mt:2},className:f.a.text,children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},w="https://image.tmdb.org/t/p/w500/";t.a=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(s.useState)([]),d=Object(i.a)(o,2),j=d[0],m=d[1];return Object(s.useEffect)((function(){Object(n.c)().then(r)}),[]),Object(s.useEffect)((function(){Object(n.d)().then(m)}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:l.a.wrapRegistration,children:Object(_.jsx)(v,{})}),Object(_.jsxs)("h3",{className:l.a.featuredMovies,children:["Featured Movies ",Object(_.jsx)("span",{className:l.a.arrow,children:"\u27a4"})]}),Object(_.jsx)("div",{className:l.a.wrapWrapListFilm,children:Object(_.jsx)("div",{className:l.a.wrapListFilm,children:Object(_.jsx)("ul",{className:l.a.listFilms,children:a.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(_.jsxs)(c.b,{to:"movies/".concat(a),className:l.a.itemFilm,children:[Object(_.jsx)("img",{src:"".concat(w).concat(i),alt:"sidebar img",width:"100%"}),Object(_.jsxs)("h3",{className:l.a.titleFilm,children:[" ",t]})]},a)}))})})}),Object(_.jsxs)("h3",{className:l.a.featuredMovies,children:["Featured Series ",Object(_.jsx)("span",{className:l.a.arrow,children:"\u27a4"})]}),Object(_.jsx)("div",{className:l.a.wrapWrapListFilm,children:Object(_.jsx)("div",{className:l.a.wrapListFilm,children:Object(_.jsx)("ul",{className:l.a.listFilms,children:j.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(_.jsxs)(c.b,{to:"movies/".concat(a),className:l.a.itemFilm,children:[Object(_.jsx)("img",{src:"".concat(w).concat(i),alt:"sidebar img",width:"100%"}),Object(_.jsxs)("h3",{className:l.a.titleFilm,children:[" ",t]})]},a)}))})})})]})}}}]);
//# sourceMappingURL=home.c3543021.chunk.js.map