(this.webpackJsonpspotigen=this.webpackJsonpspotigen||[]).push([[0],{92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(7),i=n(11),o=n(2),c=n.p+"static/media/lpimage.7c8aaed5.svg",u=n(100),s=n(135),l=n(136),m=n(5);var d=n(20),v=n(62),f="sessionId";function h(e){var t=localStorage.getItem(f);if(null!==t)return t;var n=v();return localStorage.setItem(f,n),n}var g="https://accounts.spotify.com/authorize?"+String(new URLSearchParams({client_id:"2e53e2a82ee64c4dbf48f4936ae1bb02",response_type:"token",redirect_uri:"https://spotigen.bitvictory.dev",scope:"playlist-modify-private,user-top-read",state:h()}));function p(e){var t=d.a(m.i(m.f(m.i(window.location.hash.slice(1).split("&"),(function(e){return e.split("=")})),(function(e){return 2===e.length})),(function(e){return[e[0],String(e[1])]}))),n=d.b(t,"state");if(void 0!==n&&n===h()){!function(e){var t=window.location.origin;console.log(t),window.history.replaceState(window.history.state,"",t)}();var r=d.b(t,"access_token");return void 0!==r?r:void 0}}var E=c;var _=function(e){return r.createElement("div",{className:"landing"},r.createElement("div",{className:"spacing"},r.createElement("img",{style:{maxWidth:"70%"},alt:"logo",src:E}),r.createElement(u.a,{children:"Welcome to spotigen",className:"spacing",variant:"h4"}),r.createElement("br",void 0),r.createElement(u.a,{children:"Create playlists with recommendations based on your favourite tracks, artists and genres.",className:"spacing",style:{marginBottom:"64px"}}),r.createElement(u.a,{children:null,className:"spacing",style:{marginBottom:"16px"}},"By connecting your Spotify account, you agree to our ",r.createElement(s.a,{children:"privacy policy",href:"https://bitvictory.de/spotigen/privacy.md",target:"_blank"})),r.createElement(l.a,{onClick:function(e){window.location.replace(g)},children:"Login with Spotify",color:"primary",variant:"contained"})))},y=n(146);n(92);var b=function(e){var t=e.name,n=e.image,i=e.item;return r.createElement("div",{className:"person"},void 0!==n?r.createElement(y.a,{alt:t,src:n}):r.createElement(y.a,{children:t[0]}),r.createElement("div",{className:"person-name"},void 0!==i?a.b(i):r.createElement(u.a,{children:t})))};var T=function(e){return r.createElement("div",{className:"footer"},r.createElement(u.a,{children:"Created with \u2764\ufe0f in Mannheim".normalize()}),r.createElement(u.a,{children:null},r.createElement(s.a,{children:"Github",href:"https://github.com/teambitvictory/spotigen",target:"_blank"})," | ",r.createElement(s.a,{children:"Privacy Policy",href:"https://bitvictory.de/spotigen/privacy.md",target:"_blank"})," | ",r.createElement(s.a,{children:"Imprint",href:"https://bitvictory.de/spotigen/imprint.md",target:"_blank"})),r.createElement("div",{style:{margin:"auto",width:"180px"}},r.createElement(b,{name:"Damien Jochim",image:"https://pbs.twimg.com/profile_images/1284521496438874112/LDA9UyiN_400x400.jpg",item:r.createElement(s.a,{children:"@damien_jochim",href:"https://twitter.com/damien_jochim",target:"_blank"})}),r.createElement(b,{name:"Stefan Blamberg",image:"https://pbs.twimg.com/profile_images/1328445229221949442/1uPmXD13_400x400.jpg",item:r.createElement(s.a,{children:"@StefanBlamberg",href:"https://twitter.com/StefanBlamberg",target:"_blank"})})))},A=i.b({key:"userState",default:{id:"guest",name:"Guest",image:""}}),G=i.b({key:"tokenState",default:""});var k=function(e){var t=i.c(G)[1],n=i.d(A);return r.createElement("div",{className:"hbox"},r.createElement(b,{name:n.name,image:n.image,item:r.createElement(u.a,{children:null},n.name+" | ",r.createElement(s.a,{children:"Logout",onClick:function(e){return e.preventDefault(),o.a(t,(function(e){return""}))},href:"#"}))}))};n(93);var S=function(e){var t=e.authenticated;return r.createElement("div",{className:"header"},r.createElement(u.a,{children:"spotigen"}),t?r.createElement(k,{}):null)},w=n(140),C=n(10),N=n(143),P=n(44),L=n(145),B=n(67);function R(e){var t,n=0;switch(0|e.TAG){case 0:case 1:n=1;break;case 2:var r=e._0;t=[r.id,r.name]}if(1===n){var a=e._0;t=[a.id,a.name]}return[e,t[0],t[1]]}var x=n(137),F=n(69),q=n.n(F);n(94);var I=function(e){var t,n=e.item,a=e.showGenreLabel,i=e.control;switch(0|n.TAG){case 0:t=[n._0.name,"",a?"Genre":""];break;case 1:var o=n._0;t=[o.name,o.image,"Artist"];break;case 2:var c=n._0;t=[c.name,c.image,"Track by "+m.e(c.artists,", ",(function(e){return e.name}))]}var s=t[2],l=t[1],d=t[0],v=""===l?r.createElement(y.a,{children:d[0],className:"cover",variant:"square"}):r.createElement("img",{className:"cover",src:l}),f=""===s?null:r.createElement(u.a,{children:s,className:"description"});return r.createElement("div",{className:"item"},v,r.createElement("div",{className:"caption"},r.createElement(u.a,{children:d}),f),i)},U=i.b({key:"selectionState",default:[]}),z=n(68),D=n.n(z);var $=function(e){var t=e.item,n=e.added,a=i.c(U)[1],c=n?r.createElement(x.a,{onClick:function(e){var n=R(t)[1];return o.a(a,(function(e){return m.f(e,(function(e){return R(e)[1]!==n}))}))},children:r.createElement(D.a,{})}):r.createElement(x.a,{onClick:function(e){return o.a(a,(function(e){return m.a(e,[t])}))},children:r.createElement(q.a,{})});return r.createElement(I,{item:t,showGenreLabel:!1,control:c})};var j=function(e){var t=e.items,n=i.d(U);return r.createElement("div",{className:"spacing"},m.i(m.i(t,R),(function(e){var t=e[1],a=m.o(n,(function(e){return R(e)[1]===t}));return r.createElement($,{item:e[0],added:a,key:t})})))},O=n(141),J=n(37);var M=function(e){var t=e.items,n=r.useState((function(){return""})),a=n[1],c=n[0],s=i.d(U);return r.createElement("div",void 0,r.createElement("form",{autoComplete:"off"},r.createElement(O.a,{className:"input",onChange:function(e){return o.a(a,e.target.value)},placeholder:"Search",type:"search",value:J.a.string(c),variant:"outlined"})),r.createElement("div",{className:"spacing"},0!==c.length?m.i(m.f(m.i(t,R),(function(e){return""!==c&&e[2].toLowerCase().includes(c)})),(function(e){var t=e[1],n=m.o(s,(function(e){return R(e)[1]===t}));return r.createElement($,{item:e[0],added:n,key:t})})):r.createElement(u.a,{children:"Enter a search term to select genres",style:{color:"grey"}})))};var W=function(e){var t=e.spotifyClient,n=r.useState((function(){return""})),a=n[1],c=n[0],s=function(e,t){var n=r.useState((function(){return e})),a=n[1];return r.useEffect((function(){var n=setTimeout((function(t){return o.a(a,(function(t){return e}))}),t);return function(e){clearTimeout(n)}}),[e]),n[0]}(c,400),l=r.useState((function(){return[]})),d=l[1],v=l[0],f=i.d(U);return r.useEffect((function(){""===s?o.a(d,(function(e){return[]})):C.b(o.a(t.getSearch,s),(function(e){if(0===e.TAG){var t=e._0;return o.a(d,(function(e){return t}))}console.log(e._0)}))}),[s]),r.createElement("div",void 0,r.createElement("form",{autoComplete:"off"},r.createElement(O.a,{className:"input",onChange:function(e){return o.a(a,e.target.value)},placeholder:"Search",type:"search",value:J.a.string(c),variant:"outlined"})),r.createElement("div",{className:"spacing"},0!==v.length?m.i(v,(function(e){var t=R(e)[1],n=m.o(f,(function(e){return R(e)[1]===t}));return r.createElement($,{item:e,added:n,key:t})})):r.createElement(u.a,{children:"Enter a search term to select items",style:{color:"grey"}})))},Y=n(142),H=n(139),X=n(70),K=n.n(X);var Q=function(e){var t=e.item,n=e.id,a=e.onRemove;return r.createElement(I,{item:t,showGenreLabel:!0,control:r.createElement(x.a,{onClick:function(e){return o.a(a,n)},children:r.createElement(K.a,{})})})};var V=function(e){var t=i.c(U),n=t[1],a=t[0],c=function(e){return o.a(n,(function(t){return m.f(t,(function(t){return R(t)[1]!==e}))}))};return r.createElement("div",{className:"spacing"},0!==a.length?m.i(a,(function(e){var t=R(e)[1];return r.createElement(Q,{item:e,id:t,onRemove:c,key:t})})):r.createElement(u.a,{children:"Select at least one item to generate recommendations",style:{color:"grey"}}))},Z=i.b({key:"recommendationsState",default:[]});var ee=function(e){var t,n=e.spotifyClient,a=e.onSeedTooSmall,c=r.useState((function(){return 0})),s=c[1],m=c[0],d=r.useState((function(){return[]})),v=d[1],f=r.useState((function(){return[]})),h=f[1],g=r.useState((function(){return[]})),p=g[1],E=i.d(U),_=i.c(Z)[1];switch(r.useEffect((function(){C.b(o.a(n.getGenres,void 0),(function(e){if(0===e.TAG){var t=e._0;return o.a(v,(function(e){return t}))}console.log(e._0)})),C.b(o.a(n.getTopTracks,void 0),(function(e){if(0===e.TAG){var t=e._0;return o.a(h,(function(e){return t}))}console.log(e._0)})),C.b(o.a(n.getTopArtists,void 0),(function(e){if(0===e.TAG){var t=e._0;return o.a(p,(function(e){return t}))}console.log(e._0)}))}),[]),m){case 0:t=r.createElement(W,{spotifyClient:n});break;case 1:t=r.createElement(j,{items:f[0]});break;case 2:t=r.createElement(j,{items:g[0]});break;case 3:t=r.createElement(M,{items:d[0]});break;default:t=null}return r.createElement("div",void 0,r.createElement(u.a,{children:"Get started",className:"spacing",variant:"h4"}),r.createElement(u.a,{children:"Choose tracks, genres and artists as a base for your recommendations"}),r.createElement(Y.a,{children:null,className:"spacing",indicatorColor:"primary",onChange:function(e,t){return o.a(s,(function(e){return B.a(t)}))},scrollButtons:"on",textColor:"primary",value:m,variant:"scrollable"},r.createElement(H.a,{label:"Search"}),r.createElement(H.a,{label:"Top tracks"}),r.createElement(H.a,{label:"Top artists"}),r.createElement(H.a,{label:"Genres"})),t,r.createElement(u.a,{children:"Your selection",variant:"h4"}),r.createElement(V,{}),r.createElement(l.a,{onClick:function(e){return C.b(o.a(n.getRecommendation,E),(function(e){if(0===e.TAG){var t=e._0;return 0!==t.length?o.a(_,(function(e){return t})):o.a(a,void 0)}console.log(e._0)}))},children:"Generate recommendations",color:"primary",disabled:0===E.length,variant:"contained"}))},te=n(19),ne=n(22);function re(e){return"Timeout"===e?2:1}function ae(e){var t=m.d(e.images,0);return{id:e.id,name:e.display_name,image:void 0!==t?t.url:""}}function ie(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var t=e.response;return void 0!==t?{TAG:0,_0:ae(t)}:{TAG:1,_0:0}}function oe(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){return C.g(C.e(ne.a("https://api.spotify.com/v1/me",void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0),!0,re),!0,ie)}}function ce(e){return{TAG:0,_0:{id:e,name:e.replace(/\-/g," ").toUpperCase()}}}function ue(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var t=e.response;return void 0===t?{TAG:1,_0:0}:{TAG:0,_0:m.i(t.genres,ce)}}function se(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){return C.g(C.e(ne.a("https://api.spotify.com/v1/recommendations/available-genre-seeds",void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0),!0,re),!0,ue)}}function le(e){var t={url:"",height:999999};return void 0!==e?m.j(e,t,(function(e,t){return e.height<t.height?e:t})):t}function me(e){return{id:e.id,name:e.name,image:le(e.images).url}}function de(e){return{id:e.id,artists:m.i(e.artists,me),name:e.name,image:le(e.album.images).url,uri:e.uri}}function ve(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var t=e.response;if(void 0===t)return{TAG:1,_0:0};var n=m.i(m.i(t.artists.items,me),(function(e){return{TAG:1,_0:e}})),r=m.i(m.i(t.tracks.items,de),(function(e){return{TAG:2,_0:e}})),a=m.d(n,0);return{TAG:0,_0:void 0!==a?m.b([[a],r,m.n(n,1)]):r}}function fe(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){var n=String(new URLSearchParams({q:e,type:"artist,track",limit:5}));return C.g(C.e(ne.a("https://api.spotify.com/v1/search?"+n,void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0),!0,re),!0,ve)}}function he(e){if(201!==e.status)return console.log(e),{TAG:1,_0:{_0:{message:"Failed request to create Playlist"}}};var t=e.response;return void 0!==t?{TAG:0,_0:a.b(t)}:{TAG:1,_0:0}}function ge(e){var t=d.a([]),n=function(e){return m.f(m.i(e,(function(e){switch(0|e.TAG){case 0:case 1:return;case 2:return e._0.uri}})),(function(e){return void 0!==e})).join(",")}(e);return 0!==n.length&&d.c(t,"uris",n),String(new URLSearchParams(d.d(t)))}function pe(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request to add tracks to playlist"}}};var t=e.response;return void 0!==t?{TAG:0,_0:a.b(t)}:{TAG:1,_0:0}}function Ee(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e,n,r){return C.d(C.f(function(e,t,n){var r={};r.name=t,r.public=!1;var i=JSON.stringify(r);return console.log(i),C.g(C.e(ne.a("https://api.spotify.com/v1/users/"+e+"/playlists","POST",5,i,a.a(n),void 0,void 0,void 0,void 0,void 0),!0,re),!0,he)}(e,n,t),!0,(function(e){return function(e,t,n){var r=ge(t);return C.g(C.e(ne.a("https://api.spotify.com/v1/playlists/"+e+"/tracks?"+r,"POST",5,void 0,a.a(n),void 0,void 0,void 0,void 0,void 0),!0,re),!0,pe)}(e.id,r,t)})),!0,(function(e){return""}))}}var _e=n(45);function ye(e,t){return m.f(m.i(e,(function(e){switch(t){case"artist":switch(0|e.TAG){case 1:return e._0.id;case 0:case 2:return""}case"genre":switch(0|e.TAG){case 0:return e._0.id;case 1:case 2:return""}case"track":switch(0|e.TAG){case 0:case 1:return"";case 2:return e._0.id}default:return""}})),(function(e){return 0!==e.length})).join(",")}function be(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){var n=m.l(e),r=m.g(_e.a(n.length/5),(function(e){var r=Math.imul(e,5),i=n.length-r|0,o=i>5?5:i,c=function(e,t){var n=d.a([]);d.c(n,"limit",String(t));var r=ye(e,"artist");0!==r.length&&d.c(n,"seed_artists",r);var a=ye(e,"track");0!==a.length&&d.c(n,"seed_tracks",a);var i=ye(e,"genre");return 0!==i.length&&d.c(n,"seed_genres",i),String(new URLSearchParams(d.d(n)))}(m.m(n,r,o),20);return ne.a("https://api.spotify.com/v1/recommendations?"+c,void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0)}));return C.d(C.a(r),void 0,(function(t){var n=m.i(t,(function(t){return 0===t.TAG?function(e,t){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var n=e.response;if(void 0===n)return{TAG:1,_0:0};var r=_e.a(n.seeds.length/t*n.tracks.length);return{TAG:0,_0:m.m(m.l(m.i(m.i(n.tracks,de),(function(e){return{TAG:2,_0:e}}))),0,r)}}(t._0,e.length):{TAG:1,_0:re(t._0)}})),r=n.find((function(e){return 0!==e.TAG}));return void 0!==r?r:{TAG:0,_0:m.b(m.i(n,(function(e){return 0===e.TAG?e._0:[]})))}}))}}function Te(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var t=e.response;return void 0!==t?{TAG:0,_0:m.i(m.i(t.items,de),(function(e){return{TAG:2,_0:e}}))}:{TAG:1,_0:0}}function Ae(e){if(200!==e.status)return{TAG:1,_0:{_0:{message:"Failed request with $status"}}};var t=e.response;return void 0!==t?{TAG:0,_0:m.i(m.i(t.items,me),(function(e){return{TAG:1,_0:e}}))}:{TAG:1,_0:0}}var Ge=String(new URLSearchParams({limit:10}));function ke(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){return C.g(C.e(ne.a("https://api.spotify.com/v1/me/top/tracks?"+Ge,void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0),!0,re),!0,Te)}}function Se(e){var t=te.b([["Authorization","Bearer "+e]]);return function(e){return C.g(C.e(ne.a("https://api.spotify.com/v1/me/top/artists?"+Ge,void 0,5,void 0,a.a(t),void 0,void 0,void 0,void 0,void 0),!0,re),!0,Ae)}}var we=n(71),Ce=n.n(we);var Ne=function(e){var t=e.spotifyClient,n=e.onPlaylistCreated,a=r.useState((function(){return""})),c=a[1],s=a[0],d=i.c(Z),v=d[1],f=d[0],h=i.d(A);return r.createElement("div",void 0,r.createElement(l.a,{onClick:function(e){return o.a(v,(function(e){return[]}))},children:"Back to selection",startIcon:r.createElement(Ce.a,{})}),r.createElement(u.a,{children:"Recommendations",variant:"h4"}),r.createElement("div",{className:"hbox",style:{margin:"16px auto"}},r.createElement(O.a,{style:{marginRight:"8px",flex:"1"},onChange:function(e){return o.a(c,e.target.value)},placeholder:"Playlist Name",value:J.a.string(s),variant:"outlined"}),r.createElement(l.a,{onClick:function(e){return C.b(o.b(t.createPlaylist,h.id,s,f),(function(e){return o.a(v,(function(e){return[]})),o.a(n,void 0)}))},children:"Save in Spotify",color:"primary",disabled:0===s.length,variant:"contained"})),m.i(f,(function(e){var t=R(e);return r.createElement(I,{item:e,showGenreLabel:!1,control:null,key:t[1]})})))};var Pe=function(e){var t,n=i.d(G),a=i.d(Z),c=i.c(A)[1],u=r.useState((function(){return""})),s=u[1],l=u[0],m=function(e){return{getSearch:fe(e),getGenres:se(e),getRecommendation:be(e),createPlaylist:Ee(e),getUser:oe(e),getTopTracks:ke(e),getTopArtists:Se(e)}}(n);switch(r.useEffect((function(){C.b(o.a(m.getUser,void 0),(function(e){if(0===e.TAG){var t=e._0;return o.a(c,(function(e){return t}))}console.log(e._0)}))}),[]),l){case"NO_CONTENT":t=["Error","More seed items required"];break;case"PLAYLIST_CREATED":t=["Success","Playlist created"];break;default:t=["Error","Unknown error"]}return r.createElement("div",void 0,0!==a.length?r.createElement(Ne,{spotifyClient:m,onPlaylistCreated:function(e){return o.a(s,(function(e){return"PLAYLIST_CREATED"}))}}):r.createElement(ee,{spotifyClient:m,onSeedTooSmall:function(e){return o.a(s,(function(e){return"NO_CONTENT"}))}}),r.createElement(L.a,{autoHideDuration:P.a.$$int(6e3),children:r.createElement(N.a,{children:t[1],onClose:function(e){return o.a(s,(function(e){return""}))},severity:function(){switch(t[0]){case"Error":return"error";case"Info":return"info";case"Success":return"success";case"Warning":return"warning"}}()}),onClose:function(e,t){return o.a(s,(function(e){return""}))},open:0!==l.length}))},Le=n(72);var Be=function(e){var t=i.c(G),n=t[1],a=t[0];return r.useEffect((function(){var e=p();void 0!==e?o.a(n,(function(t){return e})):o.a(n,(function(e){return""}))}),[]),r.createElement("div",{className:"main-container"},r.createElement("div",{className:"content"},r.createElement(S,{authenticated:0!==a.length}),r.createElement(w.a,{children:0!==a.length?r.createElement(Pe,{}):r.createElement(_,{}),maxWidth:Le.a.sm})),r.createElement(T,{}))};n(97);var Re=function(e){return r.createElement(i.a,{children:r.createElement(Be,{})})},xe=n(15);n(98);var Fe=function(e){var t=document.getElementById(e);if(null!=t)return a.a(xe.unstable_createRoot(t))}("root");void 0!==Fe&&a.b(Fe).render(r.createElement(r.StrictMode,{children:r.createElement(Re,{})}));(function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))})()}},[[99,1,2]]]);
//# sourceMappingURL=main.cc207dbd.chunk.js.map