const menu = document.querySelector('.menu');
const open = document.querySelector('.menu__open');
const close = document.querySelector('.menu__close');


close.addEventListener('click', () => {
    menu.classList.remove('menu_open');
  });


open.addEventListener('click', () => {
  menu.classList.add('menu_open');
});





let content = document.querySelector(".main_menu")
let show = document.querySelector('.menu__open');
let hide = document.querySelector('.menu__close');



hide.addEventListener("click", () => {
    content.style.display = "none"
})

show.addEventListener("click", () => {
    content.style.display = "flex"
})