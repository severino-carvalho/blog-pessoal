// Script JS

$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:63912/json/posts.json",
        type: "GET"
    })
        .done(function (dados) {
            console.log(dados);
            alert(dados[0].title)
        });
});

function carregarPost(objPost, indexInicio, quantidade) {
    for (let i = indexInicio; i < quantidade; i++) {
        var post = objPost[i];

        var mainDiv = $("<div>");
        mainDiv.addClass("card mb-4"); 

        var imgElement = $("<img>");
        imgElement.addClass("card-img-top");
        imgElement.attr("src", "") 
    }
}

carregarPost();
