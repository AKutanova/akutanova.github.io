const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu__block'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
    overlay.classList.remove('active');
});