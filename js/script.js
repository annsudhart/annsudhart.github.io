$(document).ready(function() {
  if ( $(this).scrollTop() > $('.ham').height() ) {
    $('.ham').addClass('blue');
    $('.ham').removeClass('white');
  } else {
    $('.ham').addClass('white');
    $('.ham').removeClass('blue');
  }
    
  $('#arrow').click(function() {
    $('html, body').animate({
      scrollTop: $("#container").offset().top
    }, 800); 
  });
  
  $('#internal-link li a').not('.hamburger').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800); 
  });
  
  $(document).scroll(function() {
    if ( $(this).scrollTop() > $('.ham').height() ) {
      $('.ham').addClass('blue');
      $('.ham').removeClass('white');
    } else {
      $('.ham').addClass('white');
      $('.ham').removeClass('blue');
    }
  });
  
  $('.hamburger').click(function() {
    $('#links').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.bottom').toggleClass('ham-hidden');
  });
  
});