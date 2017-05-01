
var total, section1, s1answers, section2, s2answers, section3, s3answers, section4, s4answers, questions, submit;
s1answers = [];
s2answers = [];
s3answers = [];
s4answers = [];


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	submit = $('#submit');
	submit.on('click', function(){
		alert('hi');
	})
	questions = $('[id^="q"]:not([id*="-"])');
	questions.on('click', function(e){

	});
});
