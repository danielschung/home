$(document).ready(function (main) {
	$("#hey-im-daniel").css("opacity", 0).fadeTo(2000, 1);
	$("#social-container").hide().delay(100).fadeIn(2000);
	$(".text").css("opacity", 0).delay(500).fadeTo(2000, 1);
	$("h2").css("opacity", 0).delay(500).fadeTo(2000, 1);
	$("#experience-text1").hide();
    $("#experience-text2").hide();
    $("#experience-text3").hide();
    $("#experience-container1").on("click", function () {
        $("#experience-text1").slideToggle();
        $("#expand1").slideToggle();
    });
    $("#experience-container2").on("click", function () {
        $("#experience-text2").slideToggle();
        $("#expand2").slideToggle();
    });
    $("#experience-container3").on("click", function () {
        $("#experience-text3").slideToggle();
        $("#expand3").slideToggle();
    });
    
});