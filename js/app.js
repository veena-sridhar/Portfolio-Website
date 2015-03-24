$(document).ready(function() {

	$('.fa-bars').click(function() {
		$('.navbar-opened').slideDown("slow", function() {
			$('.fa-bars').hide();
			$('.fa-times').show();
		});
	});

	$('.fa-times').click(function() {
		$('.navbar-opened').slideUp("slow", function() {
			$('.fa-bars').show();
			$('.fa-times').hide();
		});

	});

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

});