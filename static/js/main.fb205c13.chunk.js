(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),i=(c(15),c(10)),n=c(2),r=c(1),l=c.n(r),o=(c(16),c(17),c(18),c(0)),j=l.a.memo((function(e){var t=e.movie;return t&&Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(o.jsx)("br",{})]})]})]})})),d=l.a.memo((function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(j,{movie:e},e.imdbID)}))})})),m=c(9),b=c(6),u=c.n(b),v=c(7),h=c.n(v),O=(c(21),l.a.memo((function(e){var t=e.handleAddMovie,c=e.movies,s=Object(r.useState)(""),a=Object(n.a)(s,2),i=a[0],l=a[1],d=Object(r.useState)(!0),b=Object(n.a)(d,2),v=b[0],O=b[1],x=Object(r.useState)(null),f=Object(n.a)(x,2),p=f[0],N=f[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),w=y[0],k=y[1],S=Object(r.useState)(!1),C=Object(n.a)(S,2),D=C[0],F=C[1],I=function(){var e=Object(m.a)(u.a.mark((function e(t){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),t.preventDefault(),e.prev=2,e.next=5,fetch("https://www.omdbapi.com/?apikey=1c29b9bf&t=".concat(i));case 5:return s=e.sent,e.next=8,s.json();case 8:if(a=e.sent,!c.some((function(e){return e.imdbID===a.imdbID}))){e.next=14;break}return F(!0),k(!1),e.abrupt("return");case 14:if("False"!==a.Response){e.next=18;break}return O(!1),k(!1),e.abrupt("return");case 18:N(a),e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(2),new Error("".concat(e.t0));case 24:return e.prev=24,k(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[2,21,24,27]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){I(e)},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":!v}),value:i,onChange:function(e){l(e.target.value),O(!0),F(!1)}})}),v||Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),D&&Object(o.jsx)("p",{className:"help is-danger",children:"Movie already exists"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:h()("button is-light",{"is-loading":w}),onClick:I,children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button is-primary",onClick:function(e){p&&(t(p),function(e){e.preventDefault(),l(""),N(null)}(e))},children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(j,{movie:p})]})]})}))),x=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useCallback)((function(e){s([].concat(Object(i.a)(c),[e]))}),[c]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(O,{handleAddMovie:a,movies:c})})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb205c13.chunk.js.map