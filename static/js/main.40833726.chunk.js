(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/cookie.4491930a.png"},133:function(e,t,a){e.exports=a(242)},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},167:function(e,t,a){},181:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n,c,r=a(0),o=a.n(r),s=a(21),l=a.n(s),i=a(17),u=(a(142),a(22)),m=a(18),E=a(23),f=a(244),d=a(41),p=a.n(d),g=a(60),h=a(27),b=a(248),v=a(115),O=a.n(v),S="/blender-byte-frontend",k="/main",_="/shop",y="/book",N="/contacts",T="/basket",j={BASE_URL:"https://blender-byte-soayddqssa-uc.a.run.app/v1.0",TYPES:"/types/",BOOKS_IDS:"/types/:id/",BOOKS:"/types/:id/books/",BOOK:"/books/:id/",COUNT_BOOKS:"/types/:id/count/"},x="LOADING",B="NONE",I=-.03,C=-.01,A=-.009,R={baseURL:j.BASE_URL},w=O.a.create(R),L=a(116),G=new(function(){function e(){Object(h.a)(this,e)}return Object(L.a)(e,[{key:"getBooksIds",value:function(e){var t=j.BOOKS_IDS.replace(":id",e);return w.get(t)}},{key:"getTypes",value:function(){return w.get(j.TYPES)}},{key:"getBook",value:function(e){var t=j.BOOK.replace(":id",e);return w.get(t)}},{key:"getBooksCount",value:function(e){var t=j.COUNT_BOOKS.replace(":id",e);return w.get(t)}},{key:"getBooks",value:function(e){var t=j.BOOKS.replace(":id",e);return w.get(t)}}]),e}()),K=new function e(){var t=this;Object(h.a)(this,e),this.prefix="BOOKS",this.SET_BOOKS="".concat(this.prefix,".SET_BOOKS"),this.SET_LOADING_STATUS="".concat(this.prefix,".SET_LOADING_STATUS"),this.SET_ERROR_MESSAGE="".concat(this.prefix,".SET_ERROR_MESSAGE"),this.setBooks=Object(b.a)(this.SET_BOOKS),this.setLoadingStatus=Object(b.a)(this.SET_LOADING_STATUS),this.setErrorMessage=Object(b.a)(this.SET_ERROR_MESSAGE),this.fetchBooks=function(e){return function(){var a=Object(g.a)(p.a.mark((function a(n){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(t.setLoadingStatus(x)),a.prev=1,a.next=4,G.getBooks(e);case 4:c=a.sent,n(t.setBooks(c.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),n(t.setErrorMessage(a.t0.message));case 11:return a.prev=11,n(t.setLoadingStatus(B)),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,8,11,14]])})));return function(e){return a.apply(this,arguments)}}()}},z=new function e(){var t=this;Object(h.a)(this,e),this.prefix="CATEGORIES",this.SET_CATEGORIES="".concat(this.prefix,".SET_CATEGORIES"),this.SELECT_CATEGORIES="".concat(this.prefix,".SELECT_CATEGORIES"),this.SET_LOADING_STATUS="".concat(this.prefix,".SET_LOADING_STATUS"),this.setCategories=Object(b.a)(this.SET_CATEGORIES),this.selectCategories=Object(b.a)(this.SELECT_CATEGORIES),this.setLoadingStatus=Object(b.a)(this.SET_LOADING_STATUS),this.fetchCategories=function(){return function(){var e=Object(g.a)(p.a.mark((function e(a){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(t.setLoadingStatus(x)),e.prev=1,e.next=4,G.getTypes();case 4:n=e.sent,a(t.setCategories(n.data)),c=n.data[0].id,a(K.fetchBooks(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,a(t.setLoadingStatus(B)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()}},D=new function e(){Object(h.a)(this,e),this.prefix="BASCKET",this.SET_BOOKS="".concat(this.prefix,".SET_BOOKS"),this.setBooks=Object(b.a)(this.SET_BOOKS)},U=(n={},Object(m.a)(n,K.SET_BOOKS,(function(e,t){return Object(E.a)({},e,{books:t.payload})})),Object(m.a)(n,K.SET_LOADING_STATUS,(function(e,t){return Object(E.a)({},e,{loading:t.payload})})),n),M=Object(f.a)(U,{books:[],loading:null}),J=z.SET_CATEGORIES,P=z.SET_LOADING_STATUS,F=z.SELECT_CATEGORIES,Y=(c={},Object(m.a)(c,J,(function(e,t){return Object(E.a)({},e,{categories:t.payload})})),Object(m.a)(c,F,(function(e,t){return Object(E.a)({},e,{currentCategoryId:t.payload})})),Object(m.a)(c,P,(function(e,t){return Object(E.a)({},e,{loading:t.payload})})),c),W=Object(f.a)(Y,{categories:[],currentCategoryId:null,loading:null}),X=localStorage.getItem("basket");console.log(X);var q={books:X?JSON.parse(X):[]},$=Object(m.a)({},D.SET_BOOKS,(function(e,t){return Object(E.a)({},e,{books:t.payload})})),H=Object(f.a)($,q),Q=Object(u.combineReducers)({books:M,categories:W,bascket:H}),V=a(117),Z=Object(V.composeWithDevTools)(Object(u.applyMiddleware)((function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){return n instanceof Function?n(t,a):e(n)}}}))),ee=Object(u.createStore)(Q,Z),te=a(19),ae=a(48),ne=a(11),ce=(a(160),a(161),a(62)),re=a.n(ce);function oe(e){var t=e.mousePosition,a=t&&{transform:"translateY(".concat(t.x*C,"px)")},n=t&&{transform:"rotate(20deg) translateX(".concat(t.x*A,"px)")},c=t&&{transform:"rotate(-30deg) translateX(".concat(t.x*A,"px)")},r=t&&{transform:"translateY(".concat(t.x*C,"px)")},s=t&&{transform:"rotate(30deg) translate(".concat(t.x*I,"px)")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header_figure circle",style:a}),o.a.createElement("div",{className:"header_figure square",style:n}),o.a.createElement("div",{className:"header_figure rectangle",style:c}),o.a.createElement("div",{className:"header_figure big_circle",style:r}),o.a.createElement("div",{className:"header_figure logo",style:s},o.a.createElement("img",{src:re.a,alt:"\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430, \u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0437\u0430\u043f\u044f\u0442\u0430\u044f, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430"})))}function se(e){var t=e.title,a=e.children,n=e.component,c=Object(r.useState)(null),s=Object(ne.a)(c,2),l=s[0],i=s[1];return o.a.createElement("header",{className:"header",onMouseMove:function(e){i({x:e.clientX})}},o.a.createElement("h1",{className:"title"},t),a||o.a.createElement(oe,{mousePosition:l}),n&&o.a.createElement("div",{className:"component_container"},n))}a(162);a(163),a(249),a(164);var le=a(246),ie=a(247);a(167);function ue(){var e={width:"200px",margin:"5px",borderRadius:"50px"};return o.a.createElement("div",{className:"loading_categories"},o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}),o.a.createElement(le.a.Input,{active:!0,style:e,className:"skeleton",size:"large"}))}function me(e){var t=e.categories,a=e.fetchBooks,n=e.onClose;return o.a.createElement("div",{className:"categories_modal",onClick:function(){return n&&n()}},t.length?o.a.createElement("div",{className:"categories_list"},t.map((function(e,t){return o.a.createElement(ie.a,{shape:"round",key:"".concat(t,"-").concat(e.id),size:"large",type:"primary",onClick:function(){return a(e.id)}},e.name)}))):null)}var Ee=Object(i.b)((function(e){var t=e.categories;return{categories:t.categories,loading:t.loading===x}}),(function(e){return{fetchCategories:function(){return e(z.fetchCategories())},fetchBooks:function(t){return e(K.fetchBooks(t))}}}))((function(e){var t=e.categories,a=e.loading,n=e.fetchCategories,c=e.fetchBooks,s=Object(r.useState)(!1),l=Object(ne.a)(s,2),i=l[0],u=l[1];return Object(r.useEffect)((function(){!t.length&&n()}),[n]),o.a.createElement("div",{className:"categories"},a?o.a.createElement(ue,null):function(){if(t.length){var e=[];return e=t.slice(0,10),o.a.createElement("div",{className:"categories_list"},e.map((function(e,t){return o.a.createElement(ie.a,{shape:"round",key:"".concat(t,"-").concat(e.id),size:"large",type:"default",onClick:function(){return c(e.id)}},e.name)})),!i&&o.a.createElement(ie.a,{shape:"round",size:"large",type:"default",onClick:function(){return u(!0)}},"\u0415\u0449\u0451..."))}return null}(),i&&o.a.createElement(me,{categories:t,fetchBooks:c,onClose:function(){return u(!1)}}))})),fe=a(243),de=a(250),pe=a(51),ge=a.n(pe);a(181);function he(){return o.a.createElement(fe.a,{hoverable:!0,style:{width:240,margin:20},cover:o.a.createElement("img",{src:ge.a,alt:"\u043a\u043d\u0438\u0433\u0430"})},o.a.createElement(le.a.Input,{active:!0,style:{width:190,marginBottom:10}}),o.a.createElement(le.a.Input,{active:!0,style:{width:190}}))}function be(e){var t=e.book,a=e.onAddBascket,n=Object(r.useState)(!1),c=Object(ne.a)(n,2),s=c[0],l=c[1],i=fe.a.Meta;return o.a.createElement(fe.a,{hoverable:!0,style:{width:240,margin:20},onClick:function(){var e=localStorage.getItem("basket");if(e){var n=JSON.parse(e);n.push(t),a&&a(n),localStorage.setItem("basket",JSON.stringify(n))}else a&&a([t]),localStorage.setItem("basket",JSON.stringify([t]))},cover:o.a.createElement("div",{style:{overflow:"hidden",height:"330px"}},o.a.createElement("img",{src:s?t.Photo:ge.a,alt:"\u043a\u043d\u0438\u0433\u0430",width:240,onLoad:function(){return l(!0)}}))},o.a.createElement(i,{title:t.FullName,description:t.Author}),o.a.createElement("div",{style:{display:"flex",marginTop:"5px",justifyContent:"flex-end"}},o.a.createElement(ie.a,{type:"primary",shape:"circle",icon:o.a.createElement(de.a,null),size:"middle"})))}function ve(){return o.a.createElement("div",{className:"books_loading"},o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null),o.a.createElement(he,null))}var Oe=Object(i.b)((function(e){var t=e.books;return{books:t.books,loading:t.loading===x}}),(function(e){return{updateBascket:function(t){return e(D.setBooks(t))}}}))((function(e){var t=e.books,a=e.loading,n=e.updateBascket;return o.a.createElement("div",{className:"books_table"},a?o.a.createElement(ve,null):t&&t.length?o.a.createElement("div",{className:"books_blocks"},t.map((function(e,t){return o.a.createElement(be,{key:t,book:e,onAddBascket:n})}))):null)}));a(233);a(235);var Se=a(130);a(236);function ke(e){var t=Object(r.useState)(!1),a=Object(ne.a)(t,2),n=a[0],c=a[1],s=e.book,l=e.onRemove;return o.a.createElement("div",{className:"book_in_basket"},o.a.createElement("img",{src:n?s.Photo:ge.a,alt:"\u043a\u043d\u0438\u0433\u0430 ".concat(s.FullName),height:215,onLoad:function(){return c(!0)}}),o.a.createElement("div",{className:"description"},o.a.createElement("h2",null,s.FullName,", \u0430\u0432\u0442\u043e\u0440: ",s.Author),o.a.createElement("p",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,a=e.split(" ");if(a.length>t){a=a.splice(0,25);var n="";return a.forEach((function(e){n+="".concat(e," ")})),n+"..."}return e}(s.Description)),o.a.createElement("div",{className:"controls"},o.a.createElement(ie.a,{shape:"round",type:"primary",style:{marginRight:"10px"}},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"),o.a.createElement(ie.a,{shape:"round",type:"default",onClick:function(){return l&&l()}},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"))))}a(237);function _e(){return o.a.createElement("div",{className:"not_found"},o.a.createElement("h1",null,"404"))}var ye=[{path:k,component:function(){var e=Object(r.useState)("book....................................................................................................hacker"),t=Object(ne.a)(e,2);return t[0],t[1],o.a.createElement("div",{className:"main"},o.a.createElement(se,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}))},exact:!0},{path:_,component:function(){return o.a.createElement("div",{className:"shop"},o.a.createElement(se,{title:"\u041a\u043d\u0438\u0433\u0438"}),o.a.createElement(Ee,null),o.a.createElement(Oe,null))},exact:!0},{path:"".concat(y,"/:bookId"),component:function(){var e=Object(te.g)().bookId;return o.a.createElement("div",{className:"book"},o.a.createElement("h1",null,"\u041a\u043d\u0438\u0433a: ",e))},exact:!0},{path:T,component:function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.bascket})).books;return o.a.createElement("div",{className:"basket"},o.a.createElement(se,{title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?o.a.createElement("div",{className:"basket_books"},t.map((function(a,n){return o.a.createElement(ke,{key:n,book:a,onRemove:function(){return function(a){var n=Object(Se.a)(t);n.splice(a,1),localStorage.setItem("basket",JSON.stringify(n)),e(D.setBooks(n))}(n)}})}))):null)},exact:!0},{path:N,component:function(){return o.a.createElement("div",{className:"contacts"},o.a.createElement(se,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}))},exact:!0}];a(238),a(239);function Ne(e){var t=e.to,a=e.children,n=Object(r.useState)(!1),c=Object(ne.a)(n,2),s=c[0],l=c[1];return o.a.createElement(ae.b,{to:t,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},activeClassName:"active_link"},o.a.createElement("span",null,a),o.a.createElement("div",{className:"inner_link",style:{bottom:s?"0px":"-80px"}}))}function Te(){var e=Object(i.d)((function(e){return e.bascket}));return o.a.createElement("div",{className:"side_menu"},o.a.createElement("nav",null,o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:re.a,alt:"\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430, \u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0437\u0430\u043f\u044f\u0442\u0430\u044f, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430",width:40})),o.a.createElement("ul",{className:"menu_items"},o.a.createElement("li",{className:"menu_item"},o.a.createElement(Ne,{to:k},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),o.a.createElement("li",{className:"menu_item"},o.a.createElement(Ne,{to:_},"\u041a\u043d\u0438\u0433\u0438")),o.a.createElement("li",{className:"menu_item"},o.a.createElement(Ne,{to:N},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),o.a.createElement("li",{className:"menu_item"},o.a.createElement(Ne,{to:T},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 ",o.a.createElement("b",null,e.books.length)," \u043a\u043d\u0438\u0433")))))}a(240);function je(){return o.a.createElement("footer",{className:"footer"})}a(241);var xe=a(129),Be=a.n(xe);function Ie(e){var t=Object(r.useState)(!0),a=Object(ne.a)(t,2),n=a[0],c=a[1],s=e.onAccept;return o.a.createElement("div",{className:"cookie ".concat(n?"":"hide")},o.a.createElement("img",{src:Be.a,alt:"\u041f\u0435\u0447\u0435\u043d\u044c\u043a\u0430"}),o.a.createElement("p",null,'\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0444\u0430\u0439\u043b\u044b cookie \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0430\u043d\u044b \u0441 \u044d\u0442\u0438\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041f\u0440\u0438\u043d\u044f\u0442\u044c" \u0438\u043d\u0430\u0447\u0435 \u043f\u0440\u043e\u0441\u0438\u043c \u0432\u0430\u0441 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0441\u0430\u0439\u0442.'),o.a.createElement(ie.a,{type:"primary",shape:"round",size:"small",onClick:function(){s&&s(),localStorage.setItem("acceptCookie","true"),c(!1)}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"))}function Ce(e){var t=e.children,a=localStorage.getItem("acceptCookie");return o.a.createElement("div",{className:"base_container"},o.a.createElement("div",{className:"menu_container"},o.a.createElement(Te,null)),o.a.createElement("div",{className:"content_container"},t,o.a.createElement(je,null)),!a&&o.a.createElement(Ie,null))}function Ae(){return o.a.createElement(ae.a,{basename:S},o.a.createElement(Ce,null,o.a.createElement(te.b,{exact:!0,path:"/"},o.a.createElement(te.a,{to:k})),o.a.createElement(te.d,null,ye.map((function(e,t){return o.a.createElement(te.b,Object.assign({key:t},e))})),o.a.createElement(te.b,{component:_e}))))}var Re=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{store:ee},o.a.createElement(Ae,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){e.exports=a.p+"static/media/book_mock.36c73926.png"},62:function(e,t,a){e.exports=a.p+"static/media/logo.df8b9341.svg"}},[[133,1,2]]]);
//# sourceMappingURL=main.40833726.chunk.js.map