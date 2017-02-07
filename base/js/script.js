$(function() {

	// Filter Elements
	//$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");
	//$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8");
	// $("li").filter(function(index) {
    //        return index % 3 === 2;
	// }).css("background-color", "rgba(180, 180, 30, 0.8");
    //$("li").first().css("background-color", "rgba(180, 180, 30, 0.8");
    //$("li").last().css("background-color", "rgba(180, 180, 30, 0.8");
    //$("li").eq(-1).css("background-color", "rgba(180, 180, 30, 0.8");
    //$("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8");
    $("li").not(function(index) {
    	return index % 3 === 2;
    }).css("background-color", "rgba(180, 180, 30, 0.8");

	// Transverse
	//$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");
	//$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8");
    //$("#list").next().css("background-color", "rgba(180, 180, 30, 0.8");

	// Select Elements
	// $("p").css("background-color", "rgba(180, 180, 30, 0.8");
    // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8");
    // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8");
    // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8");
    // $("p:first").css("background-color", "rgba(180, 180, 30, 0.8");
    //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8");
    // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8");

    //$('input:text').css("background-color", "rgba(180, 180, 30, 0.8");


	// Lightbox
	// $(".lightbox").deay(500).fadeIn(1000);

	  // fade out
	  // $(".red-box").fadeTo(1000, 0.25);
	  // $(".green-box").fadeTo(1000, 0);
	  // $(".blue-box").fadeTo(1000, 0.80);

	  // $(".blue-box").fadeToggle();
	  // $(".blue-box").fadeToggle();

	  // $(".blue-box").hide(1000);
	  // $(".blue-box").show(1000);

	  // $(".blue-box").toggle();

	  // $(".blue-box").slideUp(2000);
	  // $(".blue-box").slideDown(2000);

	  // $("p").hide();
	  // $("p").slideDown(2000);

	  // $(".blue-box").slideToggle(2000);

	  // Animation
	  // $(".blue-box").animate({
	  // 	"margin-left": "+=200px"
	  // }, 1000, "linear");

	  // $(".blue-box").animate({
	  // 	"margin-left": "-=200px"
	  // }, 1000, "linear");

		// $(".blue-box").animate({
		//   	"margin-left": "+=200px",
		//   	"opacity": "0",
		//   	"height":"50px",
		//   	"width":"50px",
		//   	"margin-top": "25px"
		//   }, 1000);

		// $("p").animate({
		//   	"font-size": "20px"
		//   }, 2000);

	    // Chain Animation
		// $(".red-box").fadeTo(1000, 0.2);
		// $(".green-box").delay(1000).fadeTo(1000, 0.5);
		// $(".blue-box").delay(2000).fadeTo(1000, 0.80).fadeOut().delay(500).fadeIn();

		// Call Back Function
		// $(".red-box").fadeTo(1000, 0, function() {
	 //       $(".green-box").fadeTo(1000, 0, function() {
	 //       	    $(".blue-box").fadeTo(1000, 0);
	 //       });
		// });

});