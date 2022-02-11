/* Making the menu mobile */
let btn = document.getElementById('btn-mobile');

btn.addEventListener('click', () => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active')
})