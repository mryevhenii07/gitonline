(this.webpackJsonpgitonline=this.webpackJsonpgitonline||[]).push([[4],{143:function(e,t,a){"use strict";var i=a(14),c=a(4),s=a(27),l=a(42),n=a(144),r=a.n(n),o=a(57),j=a(6);t.a=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],m=Object(c.useState)([]),d=Object(i.a)(m,2),b=d[0],_=d[1];return Object(c.useEffect)((function(){Object(l.f)().then(n)}),[]),Object(c.useEffect)((function(){Object(l.g)().then(_)}),[]),Object(j.jsxs)("div",{className:r.a.wrapWrap,children:[Object(j.jsx)("div",{className:r.a.wrapRegistration}),Object(j.jsxs)("h3",{className:r.a.featuredMovies,children:["Featured Movies ",Object(j.jsx)("span",{className:r.a.arrow,children:"\u27a4"})]}),Object(j.jsx)("div",{className:r.a.wrapWrapListFilm,children:Object(j.jsx)("div",{className:r.a.wrapListFilm,children:Object(j.jsx)("ul",{className:r.a.listFilms,children:a.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(j.jsxs)(s.b,{to:"/movies/".concat(a),className:r.a.itemFilm,children:[Object(j.jsx)("img",{src:i?"".concat(l.b).concat(i):o.a,alt:"sidebar img",width:"100%"}),Object(j.jsxs)("h3",{className:r.a.titleFilm,children:[" ",t]})]},a)}))})})}),Object(j.jsxs)("h3",{className:r.a.featuredMovies,children:["Featured Series ",Object(j.jsx)("span",{className:r.a.arrow,children:"\u27a4"})]}),Object(j.jsx)("div",{className:r.a.wrapWrapListFilm,children:Object(j.jsx)("div",{className:r.a.wrapListFilm,children:Object(j.jsx)("ul",{className:r.a.listFilms,children:b.map((function(e){var t=e.original_title,a=e.id,i=e.poster_path;return Object(j.jsxs)(s.b,{to:"/movies/".concat(a),className:r.a.itemFilm,children:[Object(j.jsx)("img",{src:"".concat(l.b).concat(i),alt:"sidebar img",width:"100%"}),Object(j.jsxs)("h3",{className:r.a.titleFilm,children:[" ",t]})]},a)}))})})})]})}},144:function(e,t,a){e.exports={wrapWrap:"SideBar_wrapWrap__3dmPV",featuredMovies:"SideBar_featuredMovies__Rl08W",arrow:"SideBar_arrow__3azlo",listFilms:"SideBar_listFilms__2Kw1i",itemFilm:"SideBar_itemFilm__9s9XK",titleFilm:"SideBar_titleFilm__3kU81"}},185:function(e,t,a){e.exports={wrap:"RatingDetails_wrap__1A9go",rating:"RatingDetails_rating__1SPN-",wrapInfo:"RatingDetails_wrapInfo__GpNnw",movieRating:"RatingDetails_movieRating__2UE4q",totalVotes:"RatingDetails_totalVotes__38ij3"}},186:function(e,t,a){e.exports={container:"Video_container__1Wav-",video:"Video_video__1tc9p",wrapLink:"Video_wrapLink__Lphse",tellYourFriends:"Video_tellYourFriends__3fg-W",wrapListLink:"Video_wrapListLink__1-yL3",item:"Video_item__2YjNP",telegram:"Video_telegram__1TwJq",viber:"Video_viber__3Jeom",linked:"Video_linked__1wdAr",twitter:"Video_twitter__vQmj1",insta:"Video_insta__JqGUu",face:"Video_face__2mC7x",tik:"Video_tik__1-mq5",link:"Video_link__3iW-W",wrapOriginalTitle:"Video_wrapOriginalTitle__57sbF",wrapTitle:"Video_wrapTitle__2VZCq",wrapTitleText:"Video_wrapTitleText__2rpmS",blockTitle:"Video_blockTitle__Sxyna"}},188:function(e,t,a){e.exports={item:"WhichWatchFilm_item__qbb44",list:"WhichWatchFilm_list__1MiSh",publicity:"WhichWatchFilm_publicity__1LlZl",title:"WhichWatchFilm_title__10U12",titleSee:"WhichWatchFilm_titleSee__mbGDH"}},189:function(e,t,a){e.exports={form:"Comments_form__bTKi7",comments:"Comments_comments__2RmF6",input:"Comments_input__vA3VZ",textarea:"Comments_textarea__1zCXp",button:"Comments_button__1mBjn",clear:"Comments_clear__30jY3",todoWrap:"Comments_todoWrap__3E2uW",name:"Comments_name__2q8DI",nickName:"Comments_nickName__1Czz1",wrapImgText:"Comments_wrapImgText__1Ngv2",img:"Comments_img__3IZqC",text:"Comments_text__2aD5b"}},190:function(e,t,a){e.exports={wrap:"MovieDetails_wrap__2Ezg5",item:"MovieDetails_item__KNqZ4",wrapBlock:"MovieDetails_wrapBlock__1C-WT",blockRi:"MovieDetails_blockRi__PBoGF",blockRiLef:"MovieDetails_blockRiLef__3n-ms",overviewWrap:"MovieDetails_overviewWrap__2eUJJ",overview:"MovieDetails_overview__22PTH",span:"MovieDetails_span__HDEED",title:"MovieDetails_title__1ZndH",info:"MovieDetails_info__1uKVy",reviews:"MovieDetails_reviews__gfolG",cast:"MovieDetails_cast__3j8t_",blockInfoLeft:"MovieDetails_blockInfoLeft__XRJeK",blockInfo:"MovieDetails_blockInfo__309gH",wrapCastReviews:"MovieDetails_wrapCastReviews__1Gxf7"}},242:function(e,t,a){"use strict";a.r(t);var i=a(14),c=a(4),s=a(12),l=a(27),n=a(42),r=a(143),o=a(243),j=a(222),m=a(185),d=a.n(m),b=a(6),_=function(e){var t=e.votes,a=e.rating.toFixed(1);return Object(b.jsxs)("div",{className:d.a.wrap,children:[Object(b.jsx)(j.a,{spacing:1,children:Object(b.jsx)(o.a,{className:d.a.rating,name:"customized-10",defaultValue:a,max:10,precision:.5,readOnly:!0})}),Object(b.jsxs)("div",{className:d.a.wrapInfo,children:[Object(b.jsxs)("div",{className:d.a.movieRating,children:["Movie Rating: ",a]}),Object(b.jsxs)("div",{className:d.a.totalVotes,children:["Total votes: ",t]})]})]})},h=a(187),O=a(186),x=a.n(O),p=function(e){var t=e.title,a=e.originalTitle;return Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsx)("div",{className:x.a.video,children:Object(b.jsx)("iframe",{width:"100%",height:"505",src:"https://www.youtube.com/embed/iDLS7Kj7L7I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(b.jsxs)("div",{className:x.a.wrapLink,children:[Object(b.jsx)("div",{className:x.a.tellYourFriends,children:"Tell your friends"}),Object(b.jsxs)("ul",{className:x.a.wrapListLink,children:[Object(b.jsx)("li",{className:"".concat(x.a.telegram," ").concat(x.a.item),children:Object(b.jsx)("a",{href:"#",className:x.a.link,children:Object(b.jsx)(h.d,{})})}),Object(b.jsx)("li",{className:"".concat(x.a.viber," ").concat(x.a.item),children:Object(b.jsxs)("a",{href:"#",className:x.a.link,children:[" ",Object(b.jsx)(h.g,{})]})}),Object(b.jsx)("li",{className:"".concat(x.a.linked," ").concat(x.a.item),children:Object(b.jsx)("a",{href:"#",className:x.a.link,children:Object(b.jsx)(h.c,{})})}),Object(b.jsx)("li",{className:"".concat(x.a.twitter," ").concat(x.a.item),children:Object(b.jsxs)("a",{href:"#",className:x.a.link,children:[" ",Object(b.jsx)(h.f,{})]})}),Object(b.jsx)("li",{className:"".concat(x.a.face," ").concat(x.a.item),children:Object(b.jsxs)("a",{href:"#",className:x.a.link,children:[" ",Object(b.jsx)(h.a,{})]})}),Object(b.jsx)("li",{className:"".concat(x.a.insta," ").concat(x.a.item),children:Object(b.jsx)("a",{href:"#",className:x.a.link,children:Object(b.jsx)(h.b,{})})}),Object(b.jsx)("li",{className:"".concat(x.a.tik," ").concat(x.a.item),children:Object(b.jsx)("a",{href:"#",className:x.a.link,children:Object(b.jsx)(h.e,{})})})]})]})," ",Object(b.jsxs)("div",{className:x.a.wrapOriginalTitle,children:[Object(b.jsxs)("div",{className:x.a.wrapTitle,children:[Object(b.jsx)("div",{children:"Title"}),Object(b.jsx)("div",{children:"Origin Title"})]}),Object(b.jsxs)("div",{className:x.a.wrapTitleText,children:[Object(b.jsx)("div",{className:x.a.blockTitle,children:t}),Object(b.jsx)("div",{className:x.a.blockTitle,children:a})]})]})]})},u=a(188),v=a.n(u),N=a(57),f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){return Object(n.a)().then(s)}),[]),Object(b.jsxs)("div",{className:v.a.wrap,children:[Object(b.jsx)("p",{className:v.a.titleSee,children:"What else to see"}),Object(b.jsx)("ul",{className:v.a.list,children:a.map((function(e){var t=e.id,a=e.original_title,i=e.poster_path;return Object(b.jsxs)(l.b,{to:"/movies/".concat(t),className:v.a.item,children:[Object(b.jsx)("img",{src:i?"".concat(n.b).concat(i):N.a,alt:"dd",width:"195",height:"320"}),Object(b.jsx)("h4",{className:v.a.title,children:a})]},t)}))})]})},w=a(49),g=a(19),k=a(149),F=a(189),T=a.n(F),W=a.p+"static/media/default-com.4c967ac7.jpg",L=a(78),S=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(200),n=Object(i.a)(l,2),r=(n[0],n[1],Object(c.useState)(200)),o=Object(i.a)(r,2),j=o[0],m=o[1],d=Object(k.a)(),_=d.register,h=d.handleSubmit,O=d.reset,x=d.formState.errors;return Object(b.jsxs)("div",{className:T.a.wrapForm,children:[Object(b.jsxs)("form",{onSubmit:h((function(e){s((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return m(L.a.currentUser.displayName),[].concat(Object(g.a)(t),[e])})),O()})),className:T.a.form,children:[Object(b.jsx)("p",{className:T.a.comments,children:"Comments"}),Object(b.jsx)("label",{htmlFor:"",className:T.a.label,children:Object(b.jsx)("input",Object(w.a)(Object(w.a)({placeholder:"Your name...",type:"text"},_("name",{required:!0})),{},{className:T.a.input}))}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",Object(w.a)({className:T.a.textarea,maxLength:"200",placeholder:"Write comment...",required:!0},_("text"))),x.exampleRequired&&Object(b.jsx)("span",{children:"This field is required"}),Object(b.jsx)("button",{className:T.a.clear,onClick:function(){return O({text:""})},children:"Clear"}),Object(b.jsx)("button",{type:"submit",className:T.a.button,children:"Submit"})]}),Object(b.jsx)("ul",{children:a.map((function(e,t){var a=e.name,i=e.text;return Object(b.jsxs)("li",{className:T.a.todoWrap,children:[Object(b.jsxs)("p",{className:T.a.name,children:["NickName: ",Object(b.jsx)("span",{className:T.a.nickName,children:j})," "]}),Object(b.jsxs)("div",{className:T.a.wrapImgText,children:[Object(b.jsx)("img",{className:T.a.img,src:W,alt:"",width:"100",height:"110"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:T.a.text,children:[" ",a]}),Object(b.jsxs)("p",{className:T.a.text,children:[" ",i]})]})]})]},t)}))})]})},V=a(58),C=a(190),D=a.n(C);t.default=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],j=Object(s.h)().movieId,m=Object(V.a)().isAuth;return Object(c.useEffect)((function(){return Object(n.d)(j).then(o)}),[j]),Object(b.jsx)(b.Fragment,{children:m&&Object(b.jsx)("ul",{className:D.a.wrap,children:a&&Object(b.jsxs)("li",{className:D.a.item,children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:D.a.wrapBlock,children:[Object(b.jsx)("img",{src:a.poster_path?"".concat(n.b).concat(a.poster_path):N.a,alt:a.tagline,width:"350",height:"560"}),Object(b.jsxs)("div",{className:D.a.blockRi,children:[Object(b.jsxs)("div",{className:D.a.blockRiLef,children:[Object(b.jsx)("p",{className:D.a.blockInfo,children:"Film"}),Object(b.jsx)("p",{className:D.a.blockInfoLeft,children:"Year"}),Object(b.jsx)("p",{className:D.a.blockInfo,children:"Country"}),Object(b.jsx)("p",{className:D.a.blockInfoLeft,children:"Genres"}),Object(b.jsx)("p",{className:D.a.blockInfo,children:"Runtime"}),Object(b.jsx)("p",{className:D.a.blockInfoLeft,children:"Status"}),Object(b.jsx)("p",{className:D.a.blockInfo,children:"Vote_average"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:D.a.title,children:a.title}),Object(b.jsxs)("p",{className:D.a.info,children:[" ",a.release_date]}),Object(b.jsx)("p",{className:D.a.title,children:a.production_countries.map((function(e){return e.name})).join(", ")}),Object(b.jsx)("p",{className:D.a.info,children:a.genres.map((function(e){return e.name})).join(", ")}),Object(b.jsxs)("p",{className:D.a.title,children:[a.runtime," min"]}),Object(b.jsx)("p",{className:D.a.info,children:a.status}),Object(b.jsx)("p",{className:D.a.title,children:a.vote_average})]})]})]}),Object(b.jsxs)("div",{className:D.a.overviewWrap,children:[Object(b.jsxs)("p",{className:D.a.overview,children:[Object(b.jsx)("span",{className:D.a.span,children:"About film"}),Object(b.jsx)("br",{}),a.overview]}),Object(b.jsx)("div",{className:D.a.wrapCastReviews,children:Object(b.jsx)("div",{children:Object(b.jsx)(l.b,{to:"/movies/".concat(j,"/cast"),className:D.a.cast,children:"Cast"})})}),Object(b.jsx)(_,{votes:a.vote_count,rating:a.vote_average})]}),Object(b.jsx)(p,{originalTitle:a.original_title,title:a.title}),Object(b.jsx)(f,{}),Object(b.jsx)(S,{})]}),Object(b.jsx)(r.a,{})]},a.id)})})}}}]);
//# sourceMappingURL=movieDetails.b73af2da.chunk.js.map