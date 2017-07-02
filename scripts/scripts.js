function byId(id) {
  return document.getElementById(id);
}
function byClass(className) {
  return document.getElementsByClassName(className);
}
var wHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
function visible(a){
	return (a.top  >= -100);
}
var hero = byId('hero');
var nav = byId('nav');
if(hero){
	var wScroll;
	window.addEventListener('scroll', function(){
	  wScroll = window.pageYOffset;

	  if(visible(hero.getBoundingClientRect())) {
	    nav.classList.remove('active');
	  } else {
			nav.classList.add('active');
  	}
});
}

var total,
		answers,
		questions,
		string,
		submit;
answers = [,,,,,,,,,,,,,,,,,,,,,];

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
	if(window.location.href.indexOf("assessment") > -1) {
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
						break;
					}
				};
				};
			});
			var section1score = $('#section1');
			var section2score = $('#section2');
			var section3score = $('#section3');
			var section4score = $('#section4');
			var totals =$('#totals');
		submit.on('click', function(e){

					var original = $('#results').attr('value');
					var section1 = answers.slice(0, 5);
					var section2= answers.slice(5, 10);
					var section3 = answers.slice(10, 15);
					var section4 = answers.slice(15, 21);
					var s1a = section1.reduce(function(a,b){return a +b;}, 0) / 23;
					var s2a = section2.reduce(function(a,b){return a +b;}, 0) / 20;
					var s3a = section3.reduce(function(a,b){return a +b;}, 0) / 20;
					var s4a = section4.reduce(function(a,b){return a +b;}, 0) / 25;
					$('#results').attr('value', original + '?=' + answers);
					$('#message').attr('value', answers);
					section1score.attr('value', section1);
					section2score.attr('value', section2);
					section3score.attr('value', section3);
					section4score.attr('value', section4);
					totals.attr('value', [s1a, s2a, s3a, s4a])
		})
		var scoring = function(a) {
	}
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
		var s1a = section1.reduce(function(a,b){return a +b;}, 0) / 23;
		var s2a = section2.reduce(function(a,b){return a +b;}, 0) / 20;
		var s3a = section3.reduce(function(a,b){return a +b;}, 0) / 20;
		var s4a = section4.reduce(function(a,b){return a +b;}, 0) / 25;
		var displaytotal = $('#score');
		var section1score = $('#section-1-score');
		var section2score = $('#section-2-score');
		var section3score = $('#section-3-score');
		var section4score = $('#section-4-score');
		total =  answers.reduce(function(a,b){return a + b;}, 0) / 88;

		var action1 = $('#action1');
	var action2 = $('#action2');var action3 = $('#action3');var action4 = $('#action4');
		if (total >= .85) {
			total = "Skilled";
		} else if (total >= .70) {
			total = "Proficient";
		} else if (total >= .60) {
			total = "Competent";
		} else {
			total = "Beginner";
		};
		if (s1a >= .85) {
			s1a = "Skilled";
			action1.html('You sit at a unique stage in your life where you have a lot of experience under your belt. Many could benefit from that, and you could start helping the designers for the new decade shine. We all grow together, and the more people we have like you, the better.')
		} else if (s1a >= .70) {
			s1a = "Proficient";
			action1.html('Open yourself up to helping others who are just starting out find information on ways they could improve. You have a unique advantage where sharing what you know now will help you solidify your skills. Both you and other benefit. Go to local meetups, get in an online community like the <a href="https://compassofdesign.com/community">Compass of Design Community</a>')
		} else if (s1a >= .60) {
			s1a = "Competent";
			action1.html('Get around people in your industry and make some connections. You can do so online like the <a href="https://compassofdesign.com/community">Compass of Design Community</a> or through other channels like local meetups or conferences.')
		} else {
			s1a = "Beginner";
			action1.html('Start getting the information you need to look up design topics. Medium.com, DesignerNews.co, or <a href="https://medium.com/compass-of-design">even our articles</a> can help. Find a few great books, like Michael Beirut\'s \"How to\" book, or Thinking with type by Ellen Lupton. You can even go to the <a href="https://compassofdesign.com/community">Compass of Design Community</a> to get help.')
		};
		if (s2a >= .85) {
			s2a = "Skilled";
			action2.html('You have a lot of these down pat, congrats! That isn\'t the easiest thing to do. Our steps for you are to start understanding the psychology and theories on how design makes people think or act certain ways. Why hospitals are more trustworthy if the walls are white and squeaky clean vs. a dirty / grimy hospital. People have perceptive abilities to learn from what they visually see. It is the same with design. You can do a lot of good in the world with good design.');
		} else if (s2a >= .70) {
			s2a = "Proficient";
			action2.html('Our action step for you is to get some more exposure to how people are solving these problems. Look at design case studies, look through books. You have at least heard of these skills and maybe have started practicing them. But go back to what feels like Elementary school and start doing basic stuff again, but think about why this is making your design great. ');
		} else if (s2a >= .60) {
			s2a = "Competent";
			action2.html('Our action step for you is to get some more exposure to how people are solving these problems. Look at design case studies, look through design books, get a college syllabus off a university site. Google some of these terms. You want to start getting as much exposure to them as you can.');
		} else {
			s2a = "Beginner";
			action2.html('You might not have been aware that some of these even existed as skills for designers. Each one of these is a great tool in our toolbelt that helps us effectively solve the difficult things we come across. No two design challenges are the same. But they can all be tackled with the same tools to make great design. Your action step is to get further knowledge on these. We have a course for this at <a href="https://compassofdesign.com/course">Design with Confidence</a> thta will go over all of these skills in depth. Or you can use the internet to find great resources like "Hack Design", or "Theory Sprints" that will go over some things on this list.');
		};
		if (s3a >= .85) {
			s3a = "Skilled";
			action3.html('You have a good, solid process for getting things done. You have experience with breaking down design briefs and breaking the grid (so to speak). How do you level up from here? You want to tackle higher and more difficult problems, maybe there are challenges at work you can help tackle with your team, or you can search out bigger clients for a more in depth engagement. It\'s up to you.');
		} else if (s3a >= .70) {
			s3a = "Proficient";
			action3.html('These are starting to get easier for you. You have a process in place to help you, but if you don\'t that is my step for you. Get your process down, look at the usual story arc on how people get from client introduction to presented design. People are breaking down their problems into smaller steps and acting on those.');
		} else if (s3a >= .60) {
			s3a = "Competent";
			action3.html('Ok, so you have had some exposure to what these are, how do you get more practice? Well, there are plenty of design briefs that you can practice with on Briefbox.me, if you are going to take the <a href="https://compassofdesign.com/course">Design with Confidence</a> course, there are a few practice briefs in there as well as some other exercises to help get you on track.');
		} else {
			s3a = "Beginner";
			action3.html('Our action step for you is to figure out what a lot of these are and start doing a lot of reading and writing. Keep a journal of the things you are learning along the way. Look up Briefbox.me and look for some practice design briefs. Tackling small things like this will help you grow quicker.');
		};
		if (s4a >= .85) {
			s4a = "Skilled";
			action4.html('You are a wizard. Not many designers have this skill. You have evaluated much of your efforts and how confident you are getting the work out there. How do you grow from where you are now to 10x your current outreach? I don\'t know the answer to this, but know that the work that got you here now is NOT the same effort that will get you to the next step or the one after that. You have a hard game to play if you plan on continuing. Good job. I think we could benefit from people like you in the <a href="https://compassofdesign.com/community">Compass of Design Community</a>');
		} else if (s4a >= .70) {
			s4a = "Proficient";
			action4.html('You have started getting your work out there. Good job, now it comes down to how effective are the efforts. After going through and evaluating what work you have out there that can draw in more people, assess the places you are sharing them. Maybe take some earlier work and change it up and repost it. Being persistent in your output is key. Get some type of maintainable schedule that you can start getting your stuff out in public (online or offline)');
		} else if (s4a >= .60) {
			s4a = "Competent";
			action4.html('You know that you should be marketing yourself. The skills are hard, I won\'t lie, and they take time. Not a single person built a sustainable audience around their work without effort. If you do notice things like that, you are still missing all the time and effort that went before hand. Get something that you made out in the world. You owe it to yourself. Just don\'t take the criticism so hard. We go over this in the Design with Confidence Course');
		} else {
			s4a = "Beginner";
			action4.html('You need to have your work out there somehow. It may look bad now, but as you grow you can pull the old work and replace it with new. You want to get as much of yourself out there as you can. Learn marketing skills or basic things you can from places like youtube to help build your confidence level here');
		};
		displaytotal.append('<span>' + total + ' Designer</span>');
		section1score.append('<span>' + s1a + '</span>');
		section2score.append('<span>' + s2a + '</span>');
		section3score.append('<span>' + s3a + '</span>');
		section4score.append('<span>' + s4a + '</span>');

		};

});
