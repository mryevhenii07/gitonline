(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[2],{124:function(e,a,t){"use strict";var i=t(7),s=t(0),c=t(17),r=t(31),n=t(125),o=t.n(n),l=t(47),j=t(1);a.a=function(){var e=Object(s.useState)([]),a=Object(i.a)(e,2),t=a[0],n=a[1],d=Object(s.useState)([]),b=Object(i.a)(d,2),m=b[0],u=b[1];return Object(s.useEffect)((function(){Object(r.f)().then(n)}),[]),Object(s.useEffect)((function(){Object(r.g)().then(u)}),[]),Object(j.jsxs)("div",{className:o.a.wrapWrap,children:[Object(j.jsxs)("div",{className:o.a.wrapRegistration,children:[Object(j.jsx)(c.b,{to:"/login",children:"Login"}),Object(j.jsx)(c.b,{to:"/register",children:"Register"})]}),Object(j.jsxs)("h3",{className:o.a.featuredMovies,children:["Featured Movies ",Object(j.jsx)("span",{className:o.a.arrow,children:"\u27a4"})]}),Object(j.jsx)("div",{className:o.a.wrapWrapListFilm,children:Object(j.jsx)("div",{className:o.a.wrapListFilm,children:Object(j.jsx)("ul",{className:o.a.listFilms,children:t.map((function(e){var a=e.original_title,t=e.id,i=e.poster_path;return Object(j.jsxs)(c.b,{to:"movies/".concat(t),className:o.a.itemFilm,children:[Object(j.jsx)("img",{src:i?"".concat(r.b).concat(i):l.a,alt:"sidebar img",width:"100%"}),Object(j.jsxs)("h3",{className:o.a.titleFilm,children:[" ",a]})]},t)}))})})}),Object(j.jsxs)("h3",{className:o.a.featuredMovies,children:["Featured Series ",Object(j.jsx)("span",{className:o.a.arrow,children:"\u27a4"})]}),Object(j.jsx)("div",{className:o.a.wrapWrapListFilm,children:Object(j.jsx)("div",{className:o.a.wrapListFilm,children:Object(j.jsx)("ul",{className:o.a.listFilms,children:m.map((function(e){var a=e.original_title,t=e.id,i=e.poster_path;return Object(j.jsxs)(c.b,{to:"movies/".concat(t),className:o.a.itemFilm,children:[Object(j.jsx)("img",{src:"".concat(r.b).concat(i),alt:"sidebar img",width:"100%"}),Object(j.jsxs)("h3",{className:o.a.titleFilm,children:[" ",a]})]},t)}))})})})]})}},125:function(e,a,t){e.exports={wrapWrap:"SideBar_wrapWrap__3e3-3",wrapRegistration:"SideBar_wrapRegistration__3Hv-g",featuredMovies:"SideBar_featuredMovies__1CdV-",arrow:"SideBar_arrow__3FmWZ",listFilms:"SideBar_listFilms__11gWH",itemFilm:"SideBar_itemFilm__227t_",titleFilm:"SideBar_titleFilm__2DR98"}},134:function(e,a,t){e.exports={form:"RegisterForm_form__2mJ43",title:"RegisterForm_title__1mMbQ",wrapCheckButtonReg:"RegisterForm_wrapCheckButtonReg__20OnV",checkbox:"RegisterForm_checkbox__SvN0T",checkboxSpan:"RegisterForm_checkboxSpan__OqRuU",formLink:"RegisterForm_formLink__3uw4d",wrapBtn:"RegisterForm_wrapBtn__2QK3u",wrapLinkRegister:"RegisterForm_wrapLinkRegister__QlaOR",registerLink:"RegisterForm_registerLink__1jn9R"}},158:function(e,a,t){e.exports={pagination:"Pagination_pagination__3k2_9",item:"Pagination_item__q6UFe",pageLink:"Pagination_pageLink__2vOsv",nextLink:"Pagination_nextLink__1H2Ph",previousLink:"Pagination_previousLink__3qZ99",activeLink:"Pagination_activeLink__1VaNE"}},159:function(e,a,t){e.exports={item:"Home_item__3raXz",list:"Home_list__39qKC",publicity:"Home_publicity__12_aE",wrap:"Home_wrap__2aggh",wrap__info:"Home_wrap__info__2Bavo",year:"Home_year__2RkAX",title:"Home_title__1T2uE"}},160:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a),t.d(a,"Movies",(function(){return s}));t(0);var i=t(1),s=function(){return Object(i.jsx)("div",{children:"Movies"})};a.default=s},227:function(e,a,t){"use strict";t.r(a);var i=t(7),s=t(0),c=t(17),r=t(163),n=t(3),o=t(31),l=t(2),j=t(157),d=t.n(j),b=t(158),m=t.n(b),u=t(1),O=function(e){var a,t=e.onChangePage;return Object(u.jsx)(d.a,(a={className:m.a,breakLabel:"...",nextLabel:" >",onPageChange:function(e){return t(e.selected+1)},pageRangeDisplayed:20,pageCount:7,previousLabel:"< ",renderOnZeroPageCount:null},Object(l.a)(a,"className",m.a.pagination),Object(l.a)(a,"pageLinkClassName",m.a.pageLink),Object(l.a)(a,"pageClassName",m.a.item),Object(l.a)(a,"activeLinkClassName",m.a.activeLink),Object(l.a)(a,"nextLinkClassName",m.a.nextLink),Object(l.a)(a,"previousLinkClassName",m.a.previousLink),a))},h=t(159),p=t.n(h),x=t(124),_=t(225),g=t(202),f=t(160),v=t.n(f),w=function(e){var a=e.star.toFixed(1)-3;return Object(u.jsx)(g.a,{spacing:1,children:Object(u.jsx)(_.a,{className:v.a.rating,name:"customized-10",defaultValue:Number(a),max:7,precision:.5,readOnly:!0})})},k=t(61),N=t(47),L=t(36);a.default=function(){var e=Object(L.a)().isAuth,a=Object(n.g)(),t=Object(s.useState)(1),l=Object(i.a)(t,2),j=l[0],d=l[1],b=Object(s.useState)([]),m=Object(i.a)(b,2),h=m[0],_=m[1],g=Object(s.useState)([]),f=Object(i.a)(g,2),v=f[0],F=f[1],R=Object(s.useContext)(k.a).searchValue;Object(s.useEffect)((function(){Object(o.e)(R).then(F)}),[R]),Object(s.useEffect)((function(){Object(o.h)(j).then((function(e){return e.data.results})).then(_),window.scrollTo(0,0)}),[j]);var S=new r.a(v,{includeScore:!0,keys:["title","original_title"]}).search(R),C=R?S.map((function(e){return e.item})):h;return e?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:p.a.wrap,children:[Object(u.jsx)("ul",{className:p.a.list,children:C.map((function(e){var a=e.id,t=e.original_title,i=e.poster_path,s=e.vote_average,r=e.release_date;return Object(u.jsxs)(c.b,{to:"movies/".concat(a),className:p.a.item,children:[Object(u.jsx)("img",{src:i?"".concat(o.b).concat(i):N.a,alt:"dd",width:"100%",height:"405"}),Object(u.jsx)("h4",{className:p.a.title,children:t}),Object(u.jsxs)("div",{className:p.a.wrap__info,children:[Object(u.jsx)("p",{children:Object(u.jsx)(w,{star:s})}),Object(u.jsx)("p",{className:p.a.year,children:r})]})]},a)}))}),Object(u.jsx)("div",{className:p.a.publicity,children:Object(u.jsx)(x.a,{})})]}),Object(u.jsx)(O,{onChangePage:function(e){return d(e)}})]}):Object(u.jsx)("div",{children:a("/login")})}},229:function(e,a,t){"use strict";t.r(a);t(0);var i=t(42),s=t(130),c=t(23),r=t(3),n=t(137),o=t(17),l=t(34),j=t(134),d=t.n(j),b=t(202),m=t(228),u=t(231),O=t(221),h=t(223),p=t(1),x=function(){var e=Object(r.g)(),a=Object(c.b)(),t=Object(s.a)(),j=t.register,x=t.handleSubmit;t.watch,t.formState.errors;return Object(p.jsxs)(u.a,{onSubmit:x((function(t){var i=t.email,s=t.password,c=Object(n.b)();Object(n.c)(c,i,s).then((function(t){var i=t.user;console.log(i),a(Object(l.c)({email:i.email,id:i.uid,token:i.accessToken})),e("/")})).catch(console.error)})),className:d.a.form,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"40ch"}},noValidate:!0,autoComplete:"off",children:[Object(p.jsx)("h1",{className:d.a.title,children:"Login"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(O.a,Object(i.a)(Object(i.a)({},j("email",{required:!0})),{},{type:"text",id:"standard-helperText",label:"Email",variant:"standard"})),Object(p.jsx)(O.a,Object(i.a)(Object(i.a)({},j("password",{required:!0})),{},{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}))]}),Object(p.jsxs)("div",{className:d.a.wrapCheckButtonReg,children:[Object(p.jsxs)("div",{className:d.a.checkbox,children:[Object(p.jsx)(h.a,Object(i.a)({},{inputProps:{"aria-label":"Checkbox demo"}})),"I have read and agree to the",Object(p.jsx)("span",{className:d.a.checkboxSpan,children:Object(p.jsxs)("a",{href:"#",className:d.a.formLink,children:[" ","privacy police"]})}),",",Object(p.jsx)("span",{className:d.a.checkboxSpan,children:Object(p.jsx)("a",{href:"#",className:d.a.formLink,children:"terms of servise."})})]}),Object(p.jsx)(b.a,{spacing:2,direction:"row",className:d.a.wrapBtn,children:Object(p.jsx)(m.a,{type:"submit",variant:"contained",children:"Sing In"})}),Object(p.jsxs)("p",{className:d.a.wrapLinkRegister,children:["Or"," ",Object(p.jsx)(o.b,{className:d.a.registerLink,to:"/register",children:"Register"})]})]})]})};a.default=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(x,{})})}},230:function(e,a,t){"use strict";t.r(a);t(0);var i=t(42),s=t(130),c=t(23),r=t(3),n=t(137),o=t(17),l=t(34),j=t(134),d=t.n(j),b=t(202),m=t(228),u=t(231),O=t(221),h=t(223),p=t(1),x=function(){var e=Object(r.g)(),a=Object(c.b)(),t=Object(s.a)(),j=t.register,x=t.handleSubmit;t.watch,t.formState.errors;return Object(p.jsxs)(u.a,{onSubmit:x((function(t){var i=t.email,s=t.password,c=Object(n.b)();Object(n.a)(c,i,s).then((function(t){var i=t.user;console.log(i),a(Object(l.c)({email:i.email,id:i.uid,token:i.accessToken})),e("/")})).catch(console.error)})),className:d.a.form,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"40ch"}},noValidate:!0,autoComplete:"off",children:[Object(p.jsx)("h1",{className:d.a.title,children:"Registration"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(O.a,Object(i.a)(Object(i.a)({},j("email",{required:!0})),{},{type:"text",id:"standard-helperText",label:"Email",variant:"standard"})),Object(p.jsx)(O.a,Object(i.a)(Object(i.a)({},j("password",{required:!0})),{},{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}))]}),Object(p.jsxs)("div",{className:d.a.wrapCheckButtonReg,children:[Object(p.jsxs)("div",{className:d.a.checkbox,children:[Object(p.jsx)(h.a,Object(i.a)({},{inputProps:{"aria-label":"Checkbox demo"}})),"I have read and agree to the",Object(p.jsx)("span",{className:d.a.checkboxSpan,children:Object(p.jsxs)("a",{href:"#",className:d.a.formLink,children:[" ","privacy police"]})}),",",Object(p.jsx)("span",{className:d.a.checkboxSpan,children:Object(p.jsx)("a",{href:"#",className:d.a.formLink,children:"terms of servise."})})]}),Object(p.jsx)(b.a,{spacing:2,direction:"row",className:d.a.wrapBtn,children:Object(p.jsx)(m.a,{type:"submit",variant:"contained",children:"Sing Up"})}),Object(p.jsxs)("p",{className:d.a.wrapLinkRegister,children:["I have an account"," ",Object(p.jsx)(o.b,{className:d.a.registerLink,to:"/login",children:"Login"})]})]})]})};a.default=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(x,{})})}}}]);
//# sourceMappingURL=home.42744e84.chunk.js.map