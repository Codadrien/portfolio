export function ActivePicFullHeight(picFullHeight) {
    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach(cardLink => {
        cardLink.addEventListener("click", (e) => {
            e.preventDefault();
            picFullHeight.classList.add("active-js-pic-full-height")
        })
    });
}

export function closePicFullHeight(picFullHeight) {
    const close = document.querySelector(".close");
    close.addEventListener("click", (e) => {
        e.preventDefault();
        picFullHeight.classList.remove("active-js-pic-full-height")
    })
}

export function init() {
    const picFullHeight = document.querySelector(".js-pic-full-height");
    ActivePicFullHeight(picFullHeight)
    closePicFullHeight(picFullHeight)
}

init();