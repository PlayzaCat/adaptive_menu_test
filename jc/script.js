






let content = document.querySelector('.header')
let show = document.querySelector('.menu__open');
let hide = document.querySelector('.menu__close');



hide.addEventListener("click", () => {
    content.style.transform = "translateX(-100%)"
})

show.addEventListener("click", () => {
    content.style.transform = "translateX(0%)"
})





