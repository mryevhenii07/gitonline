(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[2],{121:function(e,t,a){e.exports={pagination:"Pagination_pagination__3k2_9",item:"Pagination_item__q6UFe",pageLink:"Pagination_pageLink__2vOsv",nextLink:"Pagination_nextLink__1H2Ph",previousLink:"Pagination_previousLink__3qZ99",activeLink:"Pagination_activeLink__1VaNE"}},122:function(e,t,a){e.exports={item:"Home_item__Yzg04",list:"Home_list__THyJa",publicity:"Home_publicity__3TLxJ",wrap:"Home_wrap__a7YBz",wrap__info:"Home_wrap__info__FhG2c",year:"Home_year__TISXW",title:"Home_title__En7xo"}},130:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t),a.d(t,"Movies",(function(){return n}));a(1);var i=a(0),n=function(){return Object(i.jsx)("div",{children:"Movies"})};t.default=n},180:function(e,t,a){"use strict";a.r(t);var i=a(5),n=a(1),s=a(8),c=a(137),r=a(13),l=a(69),o=a(120),d=a.n(o),j=a(121),b=a.n(j),m=a(0),u=function(e){var t,a=e.onChangePage;return Object(m.jsx)(d.a,(t={className:b.a,breakLabel:"...",nextLabel:" >",onPageChange:function(e){return a(e.selected+1)},pageRangeDisplayed:20,pageCount:7,previousLabel:"< ",renderOnZeroPageCount:null},Object(l.a)(t,"className",b.a.pagination),Object(l.a)(t,"pageLinkClassName",b.a.pageLink),Object(l.a)(t,"pageClassName",b.a.item),Object(l.a)(t,"activeLinkClassName",b.a.activeLink),Object(l.a)(t,"nextLinkClassName",b.a.nextLink),Object(l.a)(t,"previousLinkClassName",b.a.previousLink),t))},p=a(122),O=a.n(p),h=a(99),x=a(177),_=a(170),f=a(130),g=a.n(f),v=function(e){var t=e.star.toFixed(1)-3;return Object(m.jsx)(_.a,{spacing:1,children:Object(m.jsx)(x.a,{className:g.a.rating,name:"customized-10",defaultValue:Number(t),max:7,precision:.5,readOnly:!0})})},N=a(32),w=a(20);t.default=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),d=Object(i.a)(o,2),j=d[0],b=d[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),_=x[0],f=x[1],g=Object(n.useContext)(N.a).searchValue;Object(n.useEffect)((function(){Object(r.e)(g).then(f)}),[g]),Object(n.useEffect)((function(){Object(r.h)(a).then((function(e){return e.data.results})).then(b),window.scrollTo(0,0)}),[a]);var L=new c.a(_,{includeScore:!0,keys:["title","original_title"]}).search(g),S=g?L.map((function(e){return e.item})):j;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:O.a.wrap,children:[Object(m.jsx)("ul",{className:O.a.list,children:S.map((function(e){var t=e.id,a=e.original_title,i=e.poster_path,n=e.vote_average,c=e.release_date;return Object(m.jsxs)(s.b,{to:"movies/".concat(t),className:O.a.item,children:[Object(m.jsx)("img",{src:i?"".concat(r.b).concat(i):w.a,alt:"dd",width:"100%",height:"405"}),Object(m.jsx)("h4",{className:O.a.title,children:a}),Object(m.jsxs)("div",{className:O.a.wrap__info,children:[Object(m.jsx)("p",{children:Object(m.jsx)(v,{star:n})}),Object(m.jsx)("p",{className:O.a.year,children:c})]})]},t)}))}),Object(m.jsx)("div",{className:O.a.publicity,children:Object(m.jsx)(h.a,{})})]}),Object(m.jsx)(u,{onChangePage:function(e){return l(e)}})]})}},91:function(e,t,a){e.exports={wrapWrap:"SideBar_wrapWrap__3e3-3",wrapRegistration:"SideBar_wrapRegistration__3Hv-g",featuredMovies:"SideBar_featuredMovies__1CdV-",arrow:"SideBar_arrow__3FmWZ",listFilms:"SideBar_listFilms__11gWH",itemFilm:"SideBar_itemFilm__227t_",titleFilm:"SideBar_titleFilm__2DR98"}},92:function(e,t,a){e.exports={form:"Login_form__3gFQ1",input:"Login_input__36zL1",btnSubmit:"Login_btnSubmit__1aCia"}},93:function(e,t,a){e.exports={text:"ModalLogin_text__7WR0I",login:"ModalLogin_login__3GP1J"}},98:function(e,t,a){e.exports={text:"ModalRegistration_text__2XX1h"}},99:function(e,t,a){"use strict";var i=a(5),n=a(1),s=a(8),c=a(13),r=a(91),l=a.n(r),o=a(181),d=a(176),j=a(182),b=a(175),m=a(78),u=a(81),p=a(92),O=a.n(p),h=a(0),x=function(){var e=Object(u.a)(),t=e.register,a=e.handleSubmit,i=e.watch,n=e.formState.errors;return console.log(i("example")),Object(h.jsxs)("form",{onSubmit:a((function(e){console.log(e)})),className:O.a.form,children:[Object(h.jsx)("input",Object(m.a)(Object(m.a)({type:"text"},t("name")),{},{className:O.a.input,placeholder:"Enter name..."})),Object(h.jsx)("input",Object(m.a)(Object(m.a)({type:"password"},t("password",{required:!0})),{},{className:O.a.input,placeholder:"Enter password..."})),n.exampleRequired&&Object(h.jsx)("p",{children:"This field is required"}),Object(h.jsx)("button",{type:"submit",className:O.a.btnSubmit,children:"Login"})]})},_=a(93),f=a.n(_),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"#222222",border:"2px solid #222",boxShadow:24,p:2},v=function(){var e=n.useState(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{onClick:function(){return s(!0)},className:f.a.login,children:"LOGIN"}),Object(h.jsx)(b.a,{open:a,onClose:function(){return s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(o.a,{sx:g,children:[Object(h.jsx)(j.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:Object(h.jsx)(x,{})}),Object(h.jsx)(j.a,{id:"modal-modal-description",sx:{mt:2},className:f.a.text,children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},N=function(){var e,t,a,i,n=Object(u.a)(),s=n.register,c=n.handleSubmit,r=n.watch,l=n.formState.errors;return console.log(r("example")),Object(h.jsxs)("form",{onSubmit:c((function(e){alert(JSON.stringify(e))})),children:[Object(h.jsxs)("label",{children:["First Name",Object(h.jsx)("input",Object(m.a)({},s("firstName",{required:!0,maxLength:20,pattern:/^[A-Za-z]+$/i}))),"required"===(null===l||void 0===l||null===(e=l.firstName)||void 0===e?void 0:e.type)&&Object(h.jsx)("p",{children:"This field is required"}),"maxLength"===(null===l||void 0===l||null===(t=l.firstName)||void 0===t?void 0:t.type)&&Object(h.jsx)("p",{children:"First name cannot exceed 20 characters"}),"pattern"===(null===l||void 0===l||null===(a=l.firstName)||void 0===a?void 0:a.type)&&Object(h.jsx)("p",{children:"Alphabetical characters only"})]}),Object(h.jsxs)("label",{children:["Laste Name",Object(h.jsx)("input",Object(m.a)({},s("lastName",{pattern:/^[A-Za-z]+$/i}))),"pattern"===(null===l||void 0===l||null===(i=l.lastName)||void 0===i?void 0:i.type)&&Object(h.jsx)("p",{children:"Alphabetical characters only"})]}),Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",Object(m.a)({},s("email"))),l.email&&Object(h.jsx)("p",{children:"You Must be older then 18 and younger then 99 years old"})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",Object(m.a)({},s("Password"))),l.Password&&Object(h.jsx)("p",{children:"You Must be older then 18 and younger then 99 years old"})]}),Object(h.jsx)("input",{type:"submit"})]})},w=a(98),L=a.n(w),S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"#222222",border:"2px solid #222",boxShadow:24,p:2},y=function(){var e=n.useState(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{onClick:function(){return s(!0)},children:"REGISTRATION"}),Object(h.jsx)(b.a,{open:a,onClose:function(){return s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(o.a,{sx:S,children:[Object(h.jsx)(j.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:Object(h.jsx)(N,{})}),Object(h.jsx)(j.a,{id:"modal-modal-description",sx:{mt:2},className:L.a.text,children:"Duis mollis, est non ."})]})})]})},F=a(20);t.a=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),d=Object(i.a)(o,2),j=d[0],b=d[1];return Object(n.useEffect)((function(){Object(c.f)().then(r)}),[]),Object(n.useEffect)((function(){Object(c.g)().then(b)}),[]),Object(h.jsxs)("div",{className:l.a.wrapWrap,children:[Object(h.jsxs)("div",{className:l.a.wrapRegistration,children:[Object(h.jsx)(v,{className:l.a.login}),Object(h.jsx)(y,{className:l.a.registration})]}),Object(h.jsxs)("h3",{className:l.a.featuredMovies,children:["Featured Movies ",Object(h.jsx)("span",{className:l.a.arrow,children:"\u27a4"})]}),Object(h.jsx)("div",{className:l.a.wrapWrapListFilm,children:Object(h.jsx)("div",{className:l.a.wrapListFilm,children:Object(h.jsx)("ul",{className:l.a.listFilms,children:a.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(h.jsxs)(s.b,{to:"movies/".concat(a),className:l.a.itemFilm,children:[Object(h.jsx)("img",{src:i?"".concat(c.b).concat(i):F.a,alt:"sidebar img",width:"100%"}),Object(h.jsxs)("h3",{className:l.a.titleFilm,children:[" ",t]})]},a)}))})})}),Object(h.jsxs)("h3",{className:l.a.featuredMovies,children:["Featured Series ",Object(h.jsx)("span",{className:l.a.arrow,children:"\u27a4"})]}),Object(h.jsx)("div",{className:l.a.wrapWrapListFilm,children:Object(h.jsx)("div",{className:l.a.wrapListFilm,children:Object(h.jsx)("ul",{className:l.a.listFilms,children:j.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(h.jsxs)(s.b,{to:"movies/".concat(a),className:l.a.itemFilm,children:[Object(h.jsx)("img",{src:"".concat(c.b).concat(i),alt:"sidebar img",width:"100%"}),Object(h.jsxs)("h3",{className:l.a.titleFilm,children:[" ",t]})]},a)}))})})})]})}}}]);
//# sourceMappingURL=home.84ccee02.chunk.js.map