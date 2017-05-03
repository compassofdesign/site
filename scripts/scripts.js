var total,
		answers,
		questions,
		string,
		submit;
answers = [, , , , , , , , , , , , , , , , , , , , ];


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	submit = $('#submit');
	questions = $('[id^="q"]:not([id*="-"])');
	questions.on('change', function(e){
		var target = $(e.target);
		var thisqestion;
		if(target.attr('type') === 'radio') {
			thisquestion = target.parent().parent().parent().parent().parent();
			thisquestion.attr('value', target.val());
			for(i = 0; i <= answers.length; i++){
				if (thisquestion.attr('id') == questions[i].id){
					answers[i] = thisquestion.attr('value');
					string = string + thisquestion.attr('value');
					console.log(thisquestion.attr('value'));
					break;
				}
			};
			};
		});
	submit.on('click', function(e){
		var original = $('#results').attr('value');
		$('#results').attr('value', original + '?=' + answers);
		$('#message').attr('value', answers);
	})
	var scoring = function(a) {

	};
	if(window.location.href.indexOf("results") > -1) {
		var location = window.location.href;
		answers = location.split('=')[1].split(',').map(function(item){
		return parseInt(item, 10);
		});
		var section1 = answers.slice(0, 4);
		var section2= answers.slice(4, 9);
		var section3 = answers.slice(9, 15);
		var section4 = answers.slice(15, 20);
		var s1a = section1.reduce(function(a,b){return a +b;}, 0) / 17;
		var s2a = section2.reduce(function(a,b){return a +b;}, 0) / 20;
		var s3a = section3.reduce(function(a,b){return a +b;}, 0) / 24;
		var s4a = section4.reduce(function(a,b){return a +b;}, 0) / 20;
		var displaytotal = $('#score');
		var section1score = $('#section-1-score');
		var section2score = $('#section-2-score');
		var section3score = $('#section-3-score');
		var section4score = $('#section-4-score');
		total =  answers.reduce(function(a,b){return a + b;}, 0) / 81;
		if (total >= .85) {
			total = "Skilled";
		} else if (total >= .70) {
			total = "Proficient";
		} else if (total >= .60) {
			total = "Competent";
		} else {
			total = "Beginner";
		}
		if (s1a >= .85) {
			s1a = "Skilled";
		} else if (s1a >= .70) {
			s1a = "Proficient";
		} else if (s1a >= .60) {
			s1a = "Competent";
		} else {
			s1a = "Beginner";
		}
		if (s2a >= .85) {
			s2a = "Skilled";
		} else if (s2a >= .70) {
			s2a = "Proficient";
		} else if (s2a >= .60) {
			s2a = "Competent";
		} else {
			s2a = "Beginner";
		}
		if (s3a >= .85) {
			s3a = "Skilled";
		} else if (s3a >= .70) {
			s3a = "Proficient";
		} else if (s3a >= .60) {
			s3a = "Competent";
		} else {
			s3a = "Beginner";
		}
		if (s4a >= .85) {
			s4a = "Skilled";
		} else if (s4a >= .70) {
			s4a = "Proficient";
		} else if (s4a >= .60) {
			s4a = "Competent";
		} else {
			s4a = "Beginner";
		}
		displaytotal.append('<span>' + total + ' Designer</span>');
		section1score.append('<span>' + s1a + '</span>');
		section2score.append('<span>' + s2a + '</span>');
		section3score.append('<span>' + s3a + '</span>');
		section4score.append('<span>' + s4a + '</span>');
		}

});
