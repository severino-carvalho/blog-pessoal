// Script JS

function ajusteConhecimentos() {
    let global = document.querySelector("#col-frames");

    if (window.innerWidth < 992) {
        global.classList.add("mt-3");
    } 
    if (window.innerWidth >= 992) {
        global.classList.remove("mt-3");
        onload();
    }
}

window.addEventListener("resize", ajusteConhecimentos);
window.addEventListener("load", ajusteConhecimentos);

