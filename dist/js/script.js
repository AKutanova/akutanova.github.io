const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('open');
});
