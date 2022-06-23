$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots',
    });
    var hamberger = document.querySelector('.hamberger');
    var times = document.querySelector('.times');
    var mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
      mobileNav.classList.add('open'); /* in js . use for select class */
    });
    times.addEventListener('click',function(){
      mobileNav.classList.remove('open');
    })
});
