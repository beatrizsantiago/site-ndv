const links = document.querySelectorAll("#nav-bar ul a")

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop

    scroll({
        top: offsetTop - 60,
        behavior: "smooth"
    })
}

$(document).ready(function () {
    $('.carousel-events').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

