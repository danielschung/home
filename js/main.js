$(document).ready(function (main) {
    $("#experience-text1").hide();
    $("#experience-text2").hide();
    $("#experience-text3").hide();
	$("#hey-im-daniel").css("opacity", 0).fadeTo(1000, 1);
	$("h2").css("opacity", 0).delay(700).fadeTo(1000, 1);
    $("#experience-container1").on("click", function () {
        $("#experience-text1").slideToggle(200);
        $("#expand1").slideToggle(200);
    });
    $("#experience-container2").on("click", function () {
        $("#experience-text2").slideToggle(200);
        $("#expand2").slideToggle(200);
    });
    $("#experience-container3").on("click", function () {
        $("#experience-text3").slideToggle(200);
        $("#expand3").slideToggle(200);
    });
    
});