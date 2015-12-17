// activate progress-bar

	$(document).ready(function() {
		//$('#h-center-themed-start').click(function() {
		$('#test').waypoint(function(){
			$('#test .progress-bar').each(function () {
				var $pb = $(this);
				$pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
				$pb.progressbar({display_text: 'center'});
			});
		},
		{
			offset:'85%'
		});
	});


$(window).load(function(){
	$('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
});



	function check(){
		var name=document.getElementById('user');//用户名
		var yx=document.getElementById('email');
		var content=document.getElementById('text');
		if(name.value==""){
			alert('please enter your name');
			document.name.focus();
		}else if(Isyx(yx.value)){
			alert('please enter your email');
			document.yx.focus();
		}else if (content.value==""){
			alert('please enter your message');
			document.text.focus();
		}
		else{document.getElementById('baseform').submit();}
	}




function Isyx(yx){
	var reyx= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//使用正则
	return(reyx.test(yx));
}

function reset(){
	var name=document.getElementById('user');//用户名
	var yx=document.getElementById('email');
	var content=document.getElementById('text');
	name.value="";
	yx.value="";
	content.value="";
}


// HOME BACKGROUND SLIDESHOW
/*
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
*/
