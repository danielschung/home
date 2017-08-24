$(window).on("load", function (loaded) {
	$("body").hide();
	$("body-container1").hide();
	$("body").fadeIn(100);
	$("body-container").fadeIn(100);
	$(".intro-text, .button, .social-container").hide();
	$(".experience-text1").hide();
	$(".experience-text2").hide();
	$(".experience-text3").hide();
	$(".content-container").hide();
	$(".intro").width("0%");
	$(".intro").animate({width:"50%"},500,"swing");
	$("h1.intro-text").delay(700).fadeIn(300);
	$(".inner-container").width("0%");
	$(".inner-container").animate({width:"100%"},1000,"swing");
	$("p.intro-text").delay(1000).fadeIn(300);
	$(".button").delay(1300).fadeTo(1000,100, "swing");
	$(".social-container").delay(1700).fadeTo(500, 1.0, "swing", function (contentLoad) {
		$(".content-text, .header-content-text").hide();
		$(".content-container").show().animate({top:"-7px"}, 300, "swing");
		$(".content-text, .header-content-text").fadeIn(300);
	});


	/*-------Start Experience Clicking Functions-------*/
	$(".content-inner-container").first().on("click", function() {
		$(".experience-text1").slideToggle(200);
		$("#expand1").slideToggle(200);
	});
	$(".content-inner-container").first().next().on("click", function() {
		$(".experience-text2").slideToggle(200);
		$("#expand2").slideToggle(200);
	});
	$(".content-inner-container").first().next().next().on("click", function() {
		$(".experience-text3").slideToggle(200);
		$("#expand3").slideToggle(200);
	});
});

/*Refresh on Resize rules*/
$(window).resize(function() {
	location.reload();

	var forceTop = $(document).ready(function() {
		$(this).scrollTop(0);

	forceTop();

	});
});