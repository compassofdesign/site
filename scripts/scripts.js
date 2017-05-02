var total,
		answers,
		questions,
		string,
		submit;
answers = [, , , , , , , , , , , , , , , , , , , ];


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
			for(i = 0; i < answers.length; i++){
				if (thisquestion.attr('id') == questions[i].id){
					answers[i] = thisquestion.attr('value');
					string = string + thisquestion.attr('value');
					console.log(thisquestion.attr('value'),);
					break;
				}
			};
			};
		});
	submit.on('click', function(e){
		var original = $(this).attr('value');
		$(this).attr('value', original + '?=' + answers);
	})

	if(window.location.href.indexOf("results") > -1) {
		var location = window.location.href;
		answers = location.split('=')[1].split(',').map(function(item){
		return parseInt(item, 10);
		});
		var section1 = answers.slice(0, 4);
		var section2= answers.slice(4, 9);
		var section3 = answers.slice(9, 15);
		var section4 = answers.slice(15, 20);
		var s1a = section1.reduce(function(a,b){return a +b;}, 0);
		var s2a = section2.reduce(function(a,b){return a +b;}, 0);
		var s3a = section3.reduce(function(a,b){return a +b;}, 0);
		var s4a = section4.reduce(function(a,b){return a +b;}, 0);
		var displaytotal = $('#score');
		total =  answers.reduce(function(a,b){return a + b;}, 0);

		displaytotal.append('<span>: ' + total + '/ 81 </span>');
		}

});
