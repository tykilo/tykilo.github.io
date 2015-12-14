// activate progress-bar
	$(document).ready(function () {
		$('.progress .progress-bar').progressbar({display_text: 'center'});
	});

$(window).load(function(){
	$('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
});

// HOME BACKGROUND SLIDESHOW
$(function(){
	jQuery(document).ready(function() {
		$('body').backstretch([

			"images/2.jpg",

			"images/4.jpg",

			"images/6.jpg",

			"images/bg2.jpg",
			"images/bg3.jpg"

		], 	{duration: 3200, fade: 1300});
	});
});

$(document).ready(function() {

	$('#skill-progress .progress-bar').each(function () {
		var $pb = $(this);
		$pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
		$pb.progressbar({display_text: 'center'});
	});
});