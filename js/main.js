$(window).on("load", function () {
	$(".intro-text, .button, .social-container").hide();
	$(".experience-text1").hide();
	$(".experience-text2").hide();
	$(".experience-text3").hide();
	$(".intro").width("0%");
	$(".intro").animate({width:"50%"},700,"swing");
	$("h1.intro-text").delay(700).fadeIn(700);
	$(".inner-container").width("0%");
	$(".inner-container").animate({width:"100%"},1500,"swing");
	$("p.intro-text").delay(1000).fadeIn(700);
	$(".button").delay(1300).fadeTo(1000,100, "swing");
	$(".social-container").delay(1700).fadeTo(500, 1.0, "swing");

	/*-------Start Experience Clicking Functions-------*/
	$(".content-inner-container").first().on("click", function() {
		$(".experience-text1").slideToggle(400);
		$("#expand1").slideToggle(400);
	});
	$(".content-inner-container").first().next().on("click", function() {
		$(".experience-text2").slideToggle(400);
		$("#expand2").slideToggle(400);
	});
	$(".content-inner-container").first().next().next().on("click", function() {
		$(".experience-text3").slideToggle(400);
		$("#expand3").slideToggle(400);
	});
});