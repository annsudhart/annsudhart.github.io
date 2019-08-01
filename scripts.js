$(document).scroll(function() {

    if ( $(this).scrollTop() > $('.splash .row div').height()/8 ) {
      // console.log('turning blue');
      $('.splash .row div h1').addClass('blue');
      $('.splash .row div h1').removeClass('white');
    } else {
      $('.splash .row div h1').addClass('white');
      $('.splash .row div h1').removeClass('blue');
    }

    if( $(this).scrollTop() < $('#about-me')[0].offsetTop ) {
      $('.navbar-item').removeClass('selected');
      $('.navbar-brand').addClass('selected');
    } else if( $(this).scrollTop() >= $('#about-me')[0].offsetTop  && $(this).scrollTop() < $('.moreDivider')[0].offsetTop - $('nav').height() - 1 ) {
      // console.log('resume');
      // select projects
      
      $('.navbar-item').removeClass('selected');
      $('.navbar-list:nth-child(1)').addClass('selected');
    } else if( $(this).scrollTop() >= $('.moreDivider')[0].offsetTop - $('nav').height() - 1  && $(this).scrollTop() < $('.contact h2')[0].offsetTop - $('body').height() ) {
      // select about me
      $('.navbar-item').removeClass('selected');
      $('.navbar-list:nth-child(2)').addClass('selected');
    } else if( $(this).scrollTop() >= $('.contact h2')[0].offsetTop - $('body').height() ) {
      // select contact
      $('.navbar-item').removeClass('selected');
      $('.navbar-list:nth-child(3)').addClass('selected');
    }

});

$(document).ready(function() {
  $('#arrow').click(function() {
      // console.log('wassup'); 
      $('html, body').animate({
        scrollTop: $("#about-me").offset().top
      }, 800);
  });

  $('.navbar-brand').click(function() {
    // console.log('wassup'); 
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.navbar-list:nth-child(1)').click(function() {
      // console.log('wassup'); 
      $('html, body').animate({
        scrollTop: $("#about-me").offset().top
      }, 800);
  });

  $('.navbar-list:nth-child(2)').click(function() {
    // console.log('wassup'); 
    $('html, body').animate({
      scrollTop: $(".moreDivider").offset().top - $('nav').height()
    }, 800);
  });

  $('.navbar-list:nth-child(3)').click(function() {
    // console.log('wassup'); 
    $('html, body').animate({
      scrollTop: $('.contact h2')[0].offsetTop
    }, 800);
  });

});