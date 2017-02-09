$(function() {

	// Changing CSS Properties of Elements
    $(".gallery").css("display", "none");

    var redBox = $(".red-box");
    console.log(redBox.css("width"));
    console.log(redBox.width());

    redBox.css("background-color", "pink");
    $('p').css("font-size", "18px");
    redBox.css("width", "+=20px");
    
    var properties = $("p").css(["font-size", "line-height", "color"])
    console.log(properties);
    console.log(properties["font-size"]);

    redBox.css("user-select", "none");

    redBox.css("user-select", function() {
    	return "none";
    });

	//Image Slide Show
    // var galleryImage = $(".gallery").find("img").first();
    // var images = [
    //      "images/laptop-mobile_small.jpg",
    //      "images/laptop-on-table_small.jpg",
    //      "images/people-office-group-team_small.jpg"
    // ];

    // var i =0;
    // setInterval(function() {
    //     i=(i + 1) % images.length;  // 0, 1, 2, 0, 1, ...

    //     galleryImage.fadeOut(function() {
    //     	$(this).attr( "src", images[i] );
    //     	$(this).fadeIn();
    //     });
    // }, 2000)

	// Manipulating Attributes and Properties
	// attr(), prop(), val();

    // var specialLink = $("#special-link");
	// console.log( specialLink.attr("href") );
	// console.log( specialLink.attr("href", "http://www.fitz.com/") );

 //    var checkbox = $("input:checkbox");
	// console.log( checkbox.prop("checked") );
	// console.log( checkbox.attr("checked") );

	// var textInput = $("input:text");
	// textInput.val("John Fitz");
 //    console.log( textInput.val() );

 //    var rangeInput = $("input[type='range']");
 //    console.log( rangeInput.val() );


   // Removing Elements and Content
   // $("li").remove();

    // $(function() {
    //    $("li").remove();
    //    $("form").children().not("input:text, textarea, br").remove();
    // });

    // var detachtedListItem = $("li").detach();
    // $("#content").append(detachtedListItem);

    // $("p:first").empty();

    // $(".red-box, .blue-box, .green-box").empty();

   // Replacing Elements
   // $("li").replaceWith("<li>Replaced</li>");

   // $("li").replaceWith(function(){
   // 	return "<li>Replace with function;</li>";
   // });

	// var firstListItem = $("li:first");
	// $("p:first").replaceWith(firstListItem);

	// $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");

   // Add New Elements to page
	// $("ul ul:first").append("<li>I'm gonna be the last sub-item.</li>");

	// $("<li>I'm gonna be the last sub-item.</li>").appendTo($("ul ul:first"));

	// $("ul ul:first").prepend("<li>I'm gonna be the first sub-item.</li>");

	// $("ul ul").prepend("<li>I'm gonna be the all sub-items.</li>");

	// $("<h4>John Fitzpatrick</h4>").prependTo($("#content"));

	// $(".red-box").after("<div class='red-box'>Another Red Box</div>");
	// $(".blue-box").before("<div class='blue-box'>Another Blue Box</div>");

	// $(".blue-box").before( function() {
	// 	return "<div class='blue-box'>Blue 2</div>";
	// });

    // $("p").after( $("#list") );

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
    // $("li").not(function(index) {
    // 	return index % 3 === 2;
    // }).css("background-color", "rgba(180, 180, 30, 0.8");

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