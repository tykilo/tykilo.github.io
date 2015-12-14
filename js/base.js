jQuery(document).ready(function($) {
// preloader
	$(window).load(function() {
		$('#spinner').fadeOut(200);
		$('#preloader').delay(200).fadeOut('slow');
		$('.wrapper').fadeIn(200);
		$('#custumize-style').fadeIn(200);
	});


// activate progress-bar 
	$(document).ready(function () {
		$('.progress .progress-bar').progressbar({display_text: 'center'});
	});
});