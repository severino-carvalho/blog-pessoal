// Script JS

const apiURL = "https://oh-netin.github.io/blog-pessoal/json/posts.json";
const postID = new URLSearchParams(window.location.search).get("id");

function requisicaoPost() {
    $.getJSON(apiURL, (dados) => {
        if (Number(postID) > dados.length) {
            alert("Seu corno hacker!")
        } else {
            carregarPost(dados);
        }
    });
}

function carregarPost(dados) {
    let id = Number(dados[postID - 1].id) - 1;

    document.title = "Conteúdo - " + dados[id].title;

    $("#postAtivo").text(dados[id].title);

    $("#postTitulo").text(dados[id].title);

    $("#postSubTitulo").text(dados[id].title);

    $("#postImage").attr("src", "../" + dados[id].image);

    $("#postDataPublicacao").text("Postado em " + dados[id].datapost);

    $("#postConteudo").append("<p>" + dados[id].text + "</p>");
}

function requisicaoLink() {
    $.getJSON(apiURL, (dados) => {
        if (Number(postID) > dados.length) {
            alert("Seu corno hacker!")
        } else {
            carregarLinks(dados);
        }
    });
}

function carregarLinks(dados) {
    var tagLinks = $(".addLink").toArray();
    console.log(tagLinks);

    $(tagLinks).each(function (index, link) {
        $(link).attr("href", "posts.html?id=" + dados[index].id);
    });
}

$(document).ready(function () {
    $("#header-categoria").click(function () {
        $("#body-categoria").slideToggle(700);
    });

    $("#header-autor").click(function () {
        $("#body-autor").slideToggle(1000);
    });

    requisicaoLink();

    requisicaoPost();
});
