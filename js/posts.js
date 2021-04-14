// Script JS

const apiURL = "https://oh-netin.github.io/blog-pessoal/json/posts.json";
const postID = new URLSearchParams(window.location.search).get("id");

function requisicaoPost() {
    $.getJSON(apiURL, (dados) => {
        carregarPost(dados);
    });
}

function carregarPost(dados) {
    let id = Number(dados[postID - 1].id) - 1;
    console.log(id);

    document.title = "Conteúdo - " + dados[id].title;

    $("#postAtivo").text(dados[id].title)

    $("#postTitulo").text(dados[id].title);

    $("#postSubTitulo").text(dados[id].title);

    $("#postImage").attr("src", "../" + dados[id].image);

    $("#postDataPublicacao").text("Postado em " + dados[id].datapost);

    $("#postConteudo").append("<p>" + dados[id].text + "</p>");
}

$(document).ready(function () {
    requisicaoPost();
});
