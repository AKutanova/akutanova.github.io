const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu__block'),
      overlay = document.querySelector('.menu__overlay'),
      link = document.querySelectorAll('.menu__block a');

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


document.addEventListener("click", event => {
    // console.log(event.target.className);
    if (event.target.className == 'menu__link') {
        menu.classList.remove('active');
        hamburger.classList.remove('open');
        overlay.classList.remove('active');
    }
});

// const modclose = document.querySelector('.modal__close'),
//       modform = document.querySelector('.modal_thanks'),
//       overform = document.querySelector('.overlay');

// modclose.addEventListener('click', () => {
//     modform.classList.remove('active');
//     overform.classList.remove('active');
// });
    



const counters = document.querySelectorAll('.skills__rating__counter'),
      lines = document.querySelectorAll('.skills__rating__linewrapper .skills__rating__line');

// console.log(counters, lines);

counters.forEach((item, i) => {
    lines[i].style.width = item.textContent;
});


$(document).ready(function() {
    //модальные окна

    $('.modal__close').on('click', function() {
        $('.overlay, #thankyou').fadeOut('fast');
    });


    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mailer/ok.php',
            data: $(this).serialize()
        }).done(function(){
        $(this).find('input').val("");
        $('.overlay, #thankyou').fadeIn();
        $('form').trigger('reset');
        });
        return false;
    });
});