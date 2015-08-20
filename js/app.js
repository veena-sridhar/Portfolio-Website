$(document).ready(function() {

	$('header').css({ 'height': $(window).height() });
   	$(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });

   	$('#home').css({ 'height': $(window).height() });

	$(".typed-text").typed({
  	strings: ["Front-End Web Developer", "Designer", "Swimming Enthusiast"],
  	typeSpeed: 60,
  	backDelay: 1000,
  	loop: true
  	});

  /*navBehavior ();
  
  function navBehavior () {
    if (location.href is ('#home')) {
      $('#home').addClass('.active').removeClass('.inactive');
    } else if (location.href is ('#portfolio')) {
      $('#portfolio').addClass('.active').removeClass('.inactive');
    } else if (location.href is ('#about')) {
      $('#about').addClass('.active').removeClass('.inactive');
    } else if (location.href is ('#contact')) {
      $('#contact').addClass('.active').removeClass('.inactive');
    } else {
      return;
    }
  }; */

});








