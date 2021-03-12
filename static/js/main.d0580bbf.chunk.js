(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(3),c=a.n(l),r=(a(15),a(4)),s=a(5),m=a(9),o=a(8),d=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,c=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}),u=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(d,Object.assign({key:e.imdbId},e))})))},h=a(1),p=a(6),v=a.n(p);a(19);var b=function(e){var t=e.onAdd,a=Object(i.useState)({}),l=Object(h.a)(a,2),c=l[0],r=l[1],s=Object(i.useState)(""),m=Object(h.a)(s,2),o=m[0],u=m[1],p=Object(i.useState)(!1),b=Object(h.a)(p,2),g=b[0],f=b[1],w=Object(i.useState)(!0),E=Object(h.a)(w,2),M=E[0],N=E[1],j=function(){if(Object.keys(c).includes("Error")||!Object.keys(c).length)return{};var e=c.Title,t=c.Plot,a=c.Poster,i=c.imdbID;return{title:e,description:t,imgUrl:a,imdbUrl:"https://www.imdb.com/title/".concat(i),imdbId:i}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",value:o,className:v()("input",{"is-danger":g},{"is-primary":!g}),onChange:function(e){u(e.target.value),f(!1)}})),g&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(e){var t;e.preventDefault(),(t=o,fetch("".concat("http://www.omdbapi.com/?apikey=4becbea0&t=").concat(t)).then((function(e){return e.json()}))).then((function(e){JSON.parse(e.Response.toLowerCase())?N(!1):(f(!0),N(!0)),r(e)})),u("")}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(e){t(e,j),r({}),N(!0)},disabled:M},"Add to the list")))),Object.keys(j).length>0&&n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(d,j)))},g=a(7),f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:g},e.addMovie=function(t,a){if(t.preventDefault(),!e.state.movies.some((function(e){return e.imdbId===a.imdbId}))){var i=a;e.setState((function(e){return{movies:e.movies.concat(i)}}))}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(u,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{onAdd:this.addMovie})))}}]),a}(i.Component);c.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d0580bbf.chunk.js.map