// Script JS

const apiURL = "http://127.0.0.1:63912/json/posts.json";

$(document).ready(function () {

    function consultaJquery() {
        $.getJSON(apiURL, (dados) => console.log(dados));
    }
    consultaJquery();


    function carregarResumoPost(posts, indiceInicio, quantidade) {
        posts.map((post) => post.text = post.text.slice(0, 300));
        post.reverse();
    }

    carregarResumoPost();

});


