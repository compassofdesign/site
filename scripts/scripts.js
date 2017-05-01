var total,
		answers,
		questions,
		submit;
answers = [, , , , , , , , , , , , , , , ];


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
					console.log(thisquestion.attr('value'));
					break;
				}
			};
			};
		});
	submit.on('click', function(e){
		var original = $(this).attr('href');
		$(this).attr('href', original + '?=' + answers);
	})

});
