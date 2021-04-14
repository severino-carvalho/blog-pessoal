// Script JS

//const apiURL = "https://oh-netin.github.io/blog-pessoal/json/posts.json";
const postID = new URLSearchParams(window.location.search).get("id");

console.log(postID);
const apiURL = "http://127.0.0.1:54640//json/posts.json";

function requisicaoPost() {
    $.getJSON(apiURL, (dados) => {
        carregarPost(dados);
    });
}

function carregarPost(dados) {
    let id = Number(dados[postID-1].id)-1;
    console.log(id);

    document.title = "Conteúdo - " + dados[id].title;
    console.log(id);
    $("#postTitulo").text(dados[id].title);
    console.log(id);
    $("#postSubTitulo").text(dados[id].title);
    console.log(id);

    $("#postImage").attr("src", "/" + dados[id].image);
    console.log(id);

    $("#postDataPublicacao").text("Postado em " + dados[id].datapost);
    console.log(id);

    $("#postConteudo").append("<p>" + dados[id].text + "</p>");
    console.log(id);

}

$(document).ready(function () {
    requisicaoPost();
});
