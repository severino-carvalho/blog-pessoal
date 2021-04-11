// Script JS

function ajusteTela() {

    function breadcrumb() {
        let global = document.querySelector("#posts");

        if (window.innerWidth < 992) {
            global.classList.remove("container");
        } else if (window.innerWidth >= 992) {
            global.classList.add("container");
        }

        if (window.innerWidth < 650) {
            let $title_nav = document.querySelector("#title-nav"); 
            global.classList.add("ml-3");
            $title_nav.classList.add("ml-3");
        } else {
            let $title_nav = document.querySelector("#title-nav"); 
            
            global.classList.remove("ml-3");
            $title_nav.classList.remove("ml-3");
        }
    }

    function conhecimentos() {
        let global = document.querySelector("#col-frames");

        if (window.innerWidth < 992) {
            global.classList.add("mt-3");
        }
        if (window.innerWidth >= 992) {
            global.classList.remove("mt-3");
            onload();
        }
    }

    breadcrumb();
    conhecimentos();
}

window.addEventListener("resize", ajusteTela);
window.addEventListener("load", ajusteTela);

