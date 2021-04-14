// Script JS

// const apiURL = "https://oh-netin.github.io/blog-pessoal/json/posts.json";
const apiURL = "http://127.0.0.1:55595/json/posts.json"
$(document).ready(function () {

    function consultaJquery(indiceInicio, quantidade) {
        $.getJSON(apiURL, (dados) => {
            carregarResumoPost(dados, indiceInicio, quantidade)
        });
    }
    consultaJquery(0, 5);


    function carregarResumoPost(posts, indiceInicio, quantidade) {
        posts.map((post) => post.text = post.text.slice(0, 300));

        for (let i = indiceInicio; i < quantidade; i++) {
            var post = posts[i];

            var mainDiv = $("<div>");
            $(mainDiv).addClass("card mb-4");

            var imgElement = $("<img>");
            $(imgElement).addClass("card-img-top");
            $(imgElement).attr("src", post.image);

            var bodyDiv = $("<div>");
            $(bodyDiv).addClass("card-body");

            var bodyHeader = $("<h2>");
            $(bodyHeader).addClass("card-title");
            $(bodyHeader).text(post.title);

            var bodyParagraph = $("<p>");
            $(bodyParagraph).addClass("card-text");
            $(bodyParagraph).html(post.text + "...");

            var bodyLink = $("<a>");
            $(bodyLink).addClass("btn btn-primary");
            $(bodyLink).html("Leia Mais &rarr;");
            $(bodyLink).attr("href", "html/posts.html?id=" +post.id);

            $(bodyDiv).append(bodyHeader);
            $(bodyDiv).append(bodyParagraph);
            $(bodyDiv).append(bodyLink);

            var footerDiv = $("<div>");
            $(footerDiv).addClass("card-footer text-muted");

            $(footerDiv).text("Postado em " + post.datapost);

            $(mainDiv).append(imgElement);
            $(mainDiv).append(bodyDiv);
            $(mainDiv).append(footerDiv);

            var blogEntries = $("#blogEntries");
            $(blogEntries).append(mainDiv);
        }
        indiceInicio += quantidade
    }
});
