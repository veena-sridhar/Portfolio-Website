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

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
  });
});








