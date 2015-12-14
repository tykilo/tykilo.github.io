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

$(function(){
	jQuery(document).ready(function() {
		$('body').backstretch([
			"images/tm-bg-slide-1.jpg",
			"images/tm-bg-slide-2.jpg",
			"images/tm-bg-slide-3.jpg"
		], 	{duration: 3200, fade: 1300});
	});
})