const button = document.querySelector('.nav__menu');
const menu = document.querySelector('.aside');
const main = document.querySelector('.main');

button.addEventListener('click', (e) => {
    menu.classList.toggle('aside--active');
    main.classList.toggle('main--menu-active');

    if(menu.classList.contains('aside--active')){
        document.body.style.overflowY = "hidden";
    } else{
        document.body.style.overflowY = "auto";
    }
    
    e.preventDefault();
});