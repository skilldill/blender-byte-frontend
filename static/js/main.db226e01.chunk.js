(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/cookie.4491930a.png"},131:function(e,t,a){e.exports=a(239)},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},165:function(e,t,a){},179:function(e,t,a){},231:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n,c,r=a(0),o=a.n(r),s=a(19),l=a.n(s),i=a(40),u=(a(140),a(20)),m=a(21),E=a(31),f=a(242),p=a(41),d=a.n(p),g=a(57),h=a(39),v=a(247),O=a(114),b=a.n(O),S="/blender-byte-frontend",k="/main",_="/shop",y="/book",N="/contacts",T="/basket",j={BASE_URL:"https://blender-byte-soayddqssa-uc.a.run.app/v1.0",TYPES:"/types/",BOOKS_IDS:"/types/:id/",BOOKS:"/types/:id/books/",BOOK:"/books/:id/",COUNT_BOOKS:"/types/:id/count/"},x="LOADING",I="NONE",A=-.03,C=-.01,B=-.009,L={baseURL:j.BASE_URL},R=b.a.create(L),w=a(115),G=new(function(){function e(){Object(h.a)(this,e)}return Object(w.a)(e,[{key:"getBooksIds",value:function(e){var t=j.BOOKS_IDS.replace(":id",e);return R.get(t)}},{key:"getTypes",value:function(){return R.get(j.TYPES)}},{key:"getBook",value:function(e){var t=j.BOOK.replace(":id",e);return R.get(t)}},{key:"getBooksCount",value:function(e){var t=j.COUNT_BOOKS.replace(":id",e);return R.get(t)}},{key:"getBooks",value:function(e){var t=j.BOOKS.replace(":id",e);return R.get(t)}}]),e}()),K=new function e(){var t=this;Object(h.a)(this,e),this.prefix="BOOKS",this.SET_BOOKS="".concat(this.prefix,".SET_BOOKS"),this.SET_LOADING_STATUS="".concat(this.prefix,".SET_LOADING_STATUS"),this.SET_ERROR_MESSAGE="".concat(this.prefix,".SET_ERROR_MESSAGE"),this.setBooks=Object(v.a)(this.SET_BOOKS),this.setLoadingStatus=Object(v.a)(this.SET_LOADING_STATUS),this.setErrorMessage=Object(v.a)(this.SET_ERROR_MESSAGE),this.fetchBooks=function(e){return function(){var a=Object(g.a)(d.a.mark((function a(n){var c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(t.setLoadingStatus(x)),a.prev=1,a.next=4,G.getBooks(e);case 4:c=a.sent,n(t.setBooks(c.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),n(t.setErrorMessage(a.t0.message));case 11:return a.prev=11,n(t.setLoadingStatus(I)),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,8,11,14]])})));return function(e){return a.apply(this,arguments)}}()}},U=new function e(){var t=this;Object(h.a)(this,e),this.prefix="CATEGORIES",this.SET_CATEGORIES="".concat(this.prefix,".SET_CATEGORIES"),this.SELECT_CATEGORIES="".concat(this.prefix,".SELECT_CATEGORIES"),this.SET_LOADING_STATUS="".concat(this.prefix,".SET_LOADING_STATUS"),this.setCategories=Object(v.a)(this.SET_CATEGORIES),this.selectCategories=Object(v.a)(this.SELECT_CATEGORIES),this.setLoadingStatus=Object(v.a)(this.SET_LOADING_STATUS),this.fetchCategories=function(){return function(){var e=Object(g.a)(d.a.mark((function e(a){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(t.setLoadingStatus(x)),e.prev=1,e.next=4,G.getTypes();case 4:n=e.sent,a(t.setCategories(n.data)),c=n.data[0].id,a(K.fetchBooks(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,a(t.setLoadingStatus(I)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()}},z=(n={},Object(m.a)(n,K.SET_BOOKS,(function(e,t){return Object(E.a)({},e,{books:t.payload})})),Object(m.a)(n,K.SET_LOADING_STATUS,(function(e,t){return Object(E.a)({},e,{loading:t.payload})})),n),D=Object(f.a)(z,{books:[],loading:null}),M=U.SET_CATEGORIES,P=U.SET_LOADING_STATUS,Y=U.SELECT_CATEGORIES,F=(c={},Object(m.a)(c,M,(function(e,t){return Object(E.a)({},e,{categories:t.payload})})),Object(m.a)(c,Y,(function(e,t){return Object(E.a)({},e,{currentCategoryId:t.payload})})),Object(m.a)(c,P,(function(e,t){return Object(E.a)({},e,{loading:t.payload})})),c),W=Object(f.a)(F,{categories:[],currentCategoryId:null,loading:null}),X=Object(u.combineReducers)({books:D,categories:W}),q=a(116),J=Object(q.composeWithDevTools)(Object(u.applyMiddleware)((function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){return n instanceof Function?n(t,a):e(n)}}}))),$=Object(u.createStore)(X,J),H=a(17),Q=a(47),V=a(11),Z=(a(158),a(159),a(59)),ee=a.n(Z);function te(e){var t=e.mousePosition,a=t&&{transform:"translateY(".concat(t.x*C,"px)")},n=t&&{transform:"rotate(20deg) translateX(".concat(t.x*B,"px)")},c=t&&{transform:"rotate(-30deg) translateX(".concat(t.x*B,"px)")},r=t&&{transform:"translateY(".concat(t.x*C,"px)")},s=t&&{transform:"rotate(30deg) translate(".concat(t.x*A,"px)")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header_figure circle",style:a}),o.a.createElement("div",{className:"header_figure square",style:n}),o.a.createElement("div",{className:"header_figure rectangle",style:c}),o.a.createElement("div",{className:"header_figure big_circle",style:r}),o.a.createElement("div",{className:"header_figure logo",style:s},o.a.createElement("img",{src:ee.a,alt:"\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430, \u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0437\u0430\u043f\u044f\u0442\u0430\u044f, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430"})))}function ae(e){var t=e.title,a=e.children,n=e.component,c=Object(r.useState)(null),s=Object(V.a)(c,2),l=s[0],i=s[1];return o.a.createElement("header",{className:"header",onMouseMove:function(e){i({x:e.clientX})}},o.a.createElement("h1",{className:"title"},t),a||o.a.createElement(te,{mousePosition:l}),n&&o.a.createElement("div",{className:"component_container"},n))}a(160);a(161),a(245),a(162);var ne=a(129),ce=a(244),re=a(246);a(165);function oe(){var e={width:"200px",margin:"5px",borderRadius:"50px"};return o.a.createElement("div",{className:"loading_categories"},o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(ce.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}))}var se=Object(i.b)((function(e){var t=e.categories;return{categories:t.categories,loading:t.loading===x}}),(function(e){return{fetchCategories:function(){return e(U.fetchCategories())}}}))((function(e){var t=e.categories,a=e.loading,n=e.fetchCategories,c=Object(r.useState)(!1),s=Object(V.a)(c,2),l=s[0],i=s[1];return Object(r.useEffect)((function(){!t.length&&n()}),[n]),o.a.createElement("div",{className:"categories"},a?o.a.createElement(oe,null):function(){if(t.length){var e=[];return e=t.length>10&&!l?t.splice(0,10):Object(ne.a)(t),o.a.createElement("div",{className:"categories_list"},e.map((function(e,t){return o.a.createElement(re.a,{shape:"round",key:"".concat(t,"-").concat(e.id),size:"large",type:"primary"},e.name)})),!l&&o.a.createElement(re.a,{shape:"round",size:"large",type:"primary",onClick:function(){return i(!0)}},"\u0415\u0449\u0451..."),l&&o.a.createElement(re.a,{shape:"round",size:"large",type:"default",onClick:function(){return i(!1)}},"\u0421\u043a\u0440\u044b\u0442\u044c"))}return null}())})),le=a(241),ie=a(81),ue=a.n(ie);a(179);function me(){return o.a.createElement(le.a,{hoverable:!0,style:{width:240,margin:20},cover:o.a.createElement("img",{src:ue.a,alt:"\u043a\u043d\u0438\u0433\u0430"})},o.a.createElement(ce.a.Input,{active:!0,style:{width:190,marginBottom:10}}),o.a.createElement(ce.a.Input,{active:!0,style:{width:190}}))}function Ee(e){var t=e.book,a=Object(r.useState)(!1),n=Object(V.a)(a,2),c=n[0],s=n[1],l=le.a.Meta;return o.a.createElement(le.a,{hoverable:!0,style:{width:240,margin:20},cover:o.a.createElement("img",{src:c?t.Photo:ue.a,alt:"\u043a\u043d\u0438\u0433\u0430",onLoad:function(){return s(!0)}})},o.a.createElement(l,{title:t.FullName,description:t.Author}))}function fe(){return o.a.createElement("div",{className:"books_loading"},o.a.createElement(me,null),o.a.createElement(me,null),o.a.createElement(me,null),o.a.createElement(me,null),o.a.createElement(me,null),o.a.createElement(me,null),o.a.createElement(me,null))}var pe=Object(i.b)((function(e){var t=e.books;return{books:t.books,loading:t.loading===x}}))((function(e){var t=e.books,a=e.loading;return o.a.createElement("div",{className:"books_table"},a?o.a.createElement(fe,null):t&&t.length?o.a.createElement("div",{className:"books_blocks"},t.map((function(e,t){return o.a.createElement(Ee,{key:t,book:e})}))):null)}));a(231);a(233);a(234);function de(){return o.a.createElement("div",{className:"not_found"},o.a.createElement("h1",null,"404"))}var ge=[{path:k,component:function(){var e=Object(r.useState)("book....................................................................................................hacker"),t=Object(V.a)(e,2);return t[0],t[1],o.a.createElement("div",{className:"main"},o.a.createElement(ae,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}))},exact:!0},{path:_,component:function(){return o.a.createElement("div",{className:"shop"},o.a.createElement(ae,{title:"\u041a\u043d\u0438\u0433\u0438"}),o.a.createElement(se,null),o.a.createElement(pe,null))},exact:!0},{path:"".concat(y,"/:bookId"),component:function(){var e=Object(H.g)().bookId;return o.a.createElement("div",{className:"book"},o.a.createElement("h1",null,"\u041a\u043d\u0438\u0433a: ",e))},exact:!0},{path:T,component:function(){return o.a.createElement("div",{className:"basket"},o.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"))},exact:!0},{path:N,component:function(){return o.a.createElement("div",{className:"contacts"},o.a.createElement(ae,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}))},exact:!0}];a(235),a(236);function he(e){var t=e.to,a=e.children,n=Object(r.useState)(!1),c=Object(V.a)(n,2),s=c[0],l=c[1];return o.a.createElement(Q.b,{to:t,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},activeClassName:"active_link"},o.a.createElement("span",null,a),o.a.createElement("div",{className:"inner_link",style:{bottom:s?"0px":"-80px"}}))}function ve(){return o.a.createElement("div",{className:"side_menu"},o.a.createElement("nav",null,o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:ee.a,alt:"\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430, \u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0437\u0430\u043f\u044f\u0442\u0430\u044f, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430",width:40})),o.a.createElement("ul",{className:"menu_items"},o.a.createElement("li",{className:"menu_item"},o.a.createElement(he,{to:k},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),o.a.createElement("li",{className:"menu_item"},o.a.createElement(he,{to:_},"\u041a\u043d\u0438\u0433\u0438")),o.a.createElement("li",{className:"menu_item"},o.a.createElement(he,{to:N},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")))))}a(237);function Oe(){return o.a.createElement("footer",{className:"footer"})}a(238);var be=a(128),Se=a.n(be);function ke(e){var t=Object(r.useState)(!0),a=Object(V.a)(t,2),n=a[0],c=a[1],s=e.onAccept;return o.a.createElement("div",{className:"cookie ".concat(n?"":"hide")},o.a.createElement("img",{src:Se.a,alt:"\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430"}),o.a.createElement("p",null,'\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0444\u0430\u0439\u043b\u044b cookie \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0430\u043d\u044b \u0441 \u044d\u0442\u0438\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041f\u0440\u0438\u043d\u044f\u0442\u044c" \u0438\u043d\u0430\u0447\u0435 \u043f\u0440\u043e\u0441\u0438\u043c \u0432\u0430\u0441 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0441\u0430\u0439\u0442.'),o.a.createElement(re.a,{type:"primary",shape:"round",size:"small",onClick:function(){s&&s(),localStorage.setItem("acceptCookie","true"),c(!1)}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"))}function _e(e){var t=e.children,a=localStorage.getItem("acceptCookie");return o.a.createElement("div",{className:"base_container"},o.a.createElement("div",{className:"menu_container"},o.a.createElement(ve,null)),o.a.createElement("div",{className:"content_container"},t,o.a.createElement(Oe,null)),!a&&o.a.createElement(ke,null))}function ye(){return o.a.createElement(Q.a,{basename:S},o.a.createElement(_e,null,o.a.createElement(H.b,{exact:!0,path:"/"},o.a.createElement(H.a,{to:k})),o.a.createElement(H.d,null,ge.map((function(e,t){return o.a.createElement(H.b,Object.assign({key:t},e))})),o.a.createElement(H.b,{component:de}))))}var Ne=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{store:$},o.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/logo.df8b9341.svg"},81:function(e,t,a){e.exports=a.p+"static/media/book_mock.36c73926.png"}},[[131,1,2]]]);
//# sourceMappingURL=main.db226e01.chunk.js.map