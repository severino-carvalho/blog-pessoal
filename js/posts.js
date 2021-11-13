// Script JS

const apiURL = "https://severino-carvalho.github.io/blog-pessoal/json/posts.json";
//const apiURL = "http://127.0.0.1:50749//json/posts.json"
const postID = new URLSearchParams(window.location.search).get("id");

// Faz as requisições dos posts usando JQuery
function requisicaoPost() {
    $.getJSON(apiURL, (dados) => {
        if (Number(postID) > dados.length) {
            alert("Seu corno hacker!")
        } else {
            carregarPost(dados);
        }
    });
}

// Faz a manipulação de DOM no hmtl, usando JQuery
function carregarPost(dados) {
    // ID recebe o id dos dados recebidos na requisição
    let id = Number(dados[postID - 1].id) - 1;

    // A parti daqui só tem manipulações de DOM
    document.title = "Conteúdo - " + dados[id].title;

    $("#postAtivo").text(dados[id].title);

    $("#postTitulo").text(dados[id].title);

    $("#postSubTitulo").text(dados[id].title);

    $("#postImage").attr("src", "../" + dados[id].image);

    $("#postDataPublicacao").text("Postado em " + dados[id].datapost);
    let paragraph = $("<p>");
    $(paragraph).addClass("text-justify");
    $(paragraph).html(dados[id].text);
    $("#postConteudo").append(paragraph);
}

// Faz as requisições dos links usando JQuery
function requisicaoLink() {
    $.getJSON(apiURL, (dados) => {
        if (Number(postID) > dados.length) {
            alert("Seu corno hacker!")
        } else {
            carregarLinks(dados);
        }
    });
}

// Faz a manipulação de DOM no hmtl, usando JQuery
function carregarLinks(dados) {
    var tagLinks = $(".addLink").toArray();

    $(tagLinks).each(function (index, link) {
        $(link).attr("href", "posts.html?id=" + dados[index].id);
    });
}

// Faz a animação da aba categoria
function animaArrowCategoria() {
    $("#arrowCateg").toggleClass("arrowAnimationUp");
    $("#arrowCateg").toggleClass("arrowAnimationDown");
}
// Faz a animação da aba autor
function animaArrowAutor() {
    $("#arrowAutor").toggleClass("arrowAnimationUp");
    $("#arrowAutor").toggleClass("arrowAnimationDown");
}
// Chama a ação da animação da aba categoria
function efeitos() {
    $("#header-categoria").click(function () {
        $("#body-categoria").slideToggle(700);
        animaArrowCategoria();
    });

    $("#header-autor").click(function () {
        $("#body-autor").slideToggle(700);
        animaArrowAutor();
    });
}

// Após o documento carregar, os seguintes métodos criados são execultados;
$(document).ready(function () {
    requisicaoLink();
    efeitos();
    
    requisicaoPost();
});
