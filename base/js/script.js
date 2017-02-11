$(function() {

	// Improving the Pokedex
    // Retrieving Pokemon Data from The PokeAPI (or Star Wars)
    var pokeapiURL = "http://pokeapi.co/api/v2/generation/1/";
    var pokeapByName = "http://pokeapi.co/api/v2/pokemon/";

    $.getJSON(pokeapiURL).done(function(data) {
        console.log(data);
        $.each(data.pokemon_species, function(index, pokemon) {
             var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
             var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
             var par = $("<p>").html("Pokemon species no. " + (index+1) + " is ").append(link);

             link.click(function(event) {
               $.getJSON(pokeapByName + pokemon.name).done(function(details) {
                   console.log(details);
                   var pokemonDiv = $("#pokemon-details");
                   pokemonDiv.empty();
                   pokemonDiv.append("<h2>" + name + "</h2>");
                   pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
                   pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
                   pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
                   pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
               });
               event.preventDefault();
             })

             par.appendTo("#pokemon")
        });
    }).fail(function() {
    	console.log("Request to PokeAPI failed.");
    }).always(function() {
    	console.log("Pokemon is awesome.")
    });

	// Retrieving Flickr Images Through the Flickr API (+Understanding JSON)
	// JSON, $.getJSON()
	// var flickerApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

 //    $.getJSON(flickerApiUrl, {
 //    	 tags: "sun, beach",
 //    	 tagmode: "any",
 //    	 format: "json"
 //    }).done(function(data) {
 //        console.log(data);
 //        $.each(data.items, function(index, item){
 //        	console.log(item);
 //        	$("<img>").attr("src", item.media.m).appendTo("#flicker");

 //        	if(index == 3) {
 //                return false;
 //        	}
 //        });
 //    }).fail(function() {
 //    	alert("Ajax call failed");
 //    });

	// Ajax
	// $.get(), $.post(), $ajax(), $.getJSON

	// Fetching a Server File with JQuery
	// $.load()
	$("#code").load("js/script.js");

    $("#code").load("js/script.js", function(response, status) {
    	if (status == "error") {
            alert("Could not find file.");
    	}
    	// console.log(response);
    });

	// Fast Feedback Form
	// var form = $("#form");
 //    enableFastFeedback(form);


	// For Validation on Submit
     // $("#form").submit(function() {
     //    var name = $('#name').val();
     //    var password = $('#password').val();
     //    var message = $('#message').val();
     //    var checked = $('#checkbox').is(":checked");

     //    validateNameField(name, event);
     //    validatePassword(password, event);
     //    validateMessage(message, event);
     //    validateChecked(checked, event)

     // });

	// Handling the Submit Event
	// $("#form").submit(function(event) {
	//    console.log("yeah");
 //       var textarea = $("#message");
 //       if (textarea.val().trim() == "") {
 //       	   console.log("box-shadow");
 //           textarea.css("box-shadow", "0 0 4px #811");
 //           event.preventDefault();
 //       } else {
 //       };
	// });

	// Using the Change Event
	// $("#checkbox").change(function() {
	// 	var isChecked = $(this).is(":checked");  // prop("checked")
	// 	if(isChecked) {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
	// 	} else {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
	// 	}
	// });

	// $("#selection").change(function() {
	// 	var selectedOption = $(this).find(":selected").text();
	// 	alert(selectedOption);

	// });

	// The Focus & Blur Events
	// var inputFields = $("input:text, input:password, textarea");
	// inputFields.focus(function() {
	// 	$(this).css("box-shadow", "0 0 4px #666")
	// });

 //    inputFields.blur(function() {
 //        $(this).css("box-shadow", "none")
 //    });

 //    $("#name").blur(function() {
 //       var text = $(this).val();
 //       if(text.length < 3) {
 //           $(this).css("box-shadow", "0 0 8px #811");
 //       } else {
 //           $(this).css("box-shadow", "0 0 8px #181");
 //       }
 //    });

	// Handling KeyDown & KeyUp Events
	// keypress() - EVIl
	// $("html").keydown(function(event) {
	// 	console.log(event.which);
	// });

 //    var ARROW_RIGHT = 39;
	// $("html").keydown(function(event) {
	// 	if(event.which === ARROW_RIGHT) {
 //            $(".blue-box").stop().animate({
 //                 marginLeft: "+=20px"
 //            }, 50)
	// 	}
	// 	console.log(event.which);
	// });


	// Coding Activity: Creating an Image Gallery with Lightbox
	// var galleryItems = $(".gallery").find("img");
	// galleryItems.css("width", "33%").css("opacity", "0.7");

	// galleryItems.mouseenter(function() {
 //        $(this).stop().fadeTo(500, 1);
	// });

	// galleryItems.mouseleave(function() {
 //        $(this).stop().fadeTo(500, 0.7);
	// });

	// galleryItems.click(function() {
	// 	var source = $(this).attr("src");
	// 	var image = $("<img>").attr("src", source).css("width", "100%");
	// 	$(".lightbox").empty().append(image).stop().fadeIn(2000);
	// })

	// $(".lightbox").click(function() {
	// 	$(this).stop().fadeOut(2000);
	// })

	// Passing Additional Data to Events
	// $("#btn-click").click({
	// 	user: "John",
	// 	domain: "Fit.com"
	// }, function(event) {
 //         greetUser(event.data);
	// });

 //    function greetUser(userdata) {
 //        username = userdata.user || "Anonymous";
 //        domain = userdata.domain || "example.com";

 //        alert("Welcome back " + username + "!" + " from " + domain);
 //    };

	// Delegated Events
 //    $("#content").on("click", "p", function() {
	// 	$(this).slideUp();
	// });
	// $("#content").append("<p>This is a dynamically added paragraph.</p>");

	// $("body").on("mouseenter", "li", function() {
	// 	$(this).css("color", "green");
	// });

	// $("p").click(function() {
	// 	$(this).slideUp();
	// });
	// $("#content").append("<p>This is a dynamically added paragraph.</p>");

	// Modularizing Event Handlers (No More Inline Functi..
	// function logEvent() {
 //       console.log("Mouse was click or key was pressed.");
	// }

 //    $("html").on("click keydown", logEvent);

 //    function switchToNextImage() {
 //    	i = (i + 1) % images.length;
 //    	$(this).fadeOut(function() {
 //    		$(this).attr("src", images[i]).fadeIn()
 //    	});
 //    }

 //    var images = [
 //         "images/laptop-mobile_small.jpg",
 //         "images/laptop-on-table_small.jpg",
 //         "images/people-office-group-team_small.jpg"
 //    ];
 //    var i = 0;
 //    var galleryImage = $(".gallery").find("img");
 //    galleryImage.on("click", switchToNextImage);

	// Adding the Same Handler for Multiple Events
	// .on("click", function() {...});
    // $("html").on("click keydown", function() {
    // 	console.log("Mouse was click or key was pressed.");
    // })

    // $(".gallery img").on("click", function() {
    // 	$(this).attr( "src", "images/laptop-on-table_small.jpg" );
    // })

    // var images = [
    //      "images/laptop-mobile_small.jpg",
    //      "images/laptop-on-table_small.jpg",
    //      "images/people-office-group-team_small.jpg"
    // ];

    // var i = 0;
    // $(".gallery").find("img").on("click", function() {
    // 	i = (i + 1) % images.length;
    // 	$(this).fadeOut(function() {
    // 		$(this).attr("src", images[i]).fadeIn()
    // 	});
    // })

	// Adding MouseEnter & MouseLeave Handlers
	// var blueBox = $(".blue-box");

	// $(blueBox).mouseenter(function(){
 //        $(this).stop().fadeTo(500, 0.7)
	// });

	// $(blueBox).mouseleave(function(){
 //        $(this).stop().fadeTo(500, 1.0);
	// });

	// hover(handlerIn, handlerOut)
	// blueBox.hover(function() {
	// 	$(this).stop().fadeTo(500, 0.7)
	// }, function() {
	// 	$(this).stop().fadeTo(500, 1.0);
	// });

	// Adding Hover Handlers
	// :hover 
	// $("#btn-hover").hover(function(){
 //        alert("Hover");
	// });

	// $(".green-box").hover(function(){
 //        $(this).text("I was hovered.");
	// });

	// Adding Click Handlers
	// $("#btn-click").click(function(event) {
	// 	console.log(event);
	// 	alert("Button was clicked.");
	// });

	// $(".red-box").click(function() {
	// 	$(this).fadeTo(500, 0.5)
	// });
	// $(".red-box").click();

	// Retieving and Changing the Content of an Element
	//  text(), html()
	// var firstPar = $("p:first");
	// console.log( firstPar.text() );
	// console.log( firstPar.html() );
	// console.log( $("p").html() );

	// firstPar.text("<strong>Hello</strong> World");
	// firstPar.html("<strong>Hello</strong> World");

    // firstPar.html( firstPar.html() + " This was just appended." );

	// Changing Data of 
	// var gallery = $(".gallery")
 //    var images = [
 //         "images/laptop-mobile_small.jpg",
 //         "images/laptop-on-table_small.jpg",
 //         "images/people-office-group-team_small.jpg"
 //    ];

 //    gallery.data("availableImages", images);
 //    console.log(gallery.data("availableImages"));
 //    gallery.data("name", "The Awesome Gallery");
 //    console.log(gallery.data());
 //    gallery.removeData("name");
 //    console.log(gallery.data("name"));

 //    var firstPar = $("p:first");
 //    console.log(firstPar.data("mydata"));

	// Add and Remove CSS Classes
    // $("a").addClass("fancy-link");
    // $("p:first").addClass("large emphasize");

    // $("li li").addClass(function(index) {
    // 	$(this).addClass("item-"+ index);
    // });

    // $("div").addClass(function(index, currentClass) {
    // 	if(currentClass === "dummy") {
    // 	    $(this).addClass("red-box");	
    // 	}
    // });

    // $(".red-box").removeClass("red-box").addClass("blue-box");

    // $(".dummy").removeClass("blue-box").addClass("green-box");

	// Changing CSS Properties of Elements
    // var redBox = $(".red-box");
    // console.log(redBox.css("width"));
    // console.log(redBox.width());

    // redBox.css("background-color", "pink");
    // $('p').css("font-size", "18px");
    // redBox.css("width", "+=20px");
    
    // var properties = $("p").css(["font-size", "line-height", "color"])
    // console.log(properties);
    // console.log(properties["font-size"]);

    // redBox.css("user-select", "none");

    // redBox.css("user-select", function() {
    // 	return "none";
    // });

	// //Image Slide Show
    // $(".gallery").css("display", "none");

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


// Form Functions
function validateNameField(name, event) {
    if(!isValidName(name)) {
        $("#name-feedback").text("Please at least two haracters.");
        event.preventDefault();
    } else {
    	$("#name-feedback").text("");
    }
} 

function isValidName(name) {
    return name.length >= 2;
}

function validatePassword(password, event) {
    if(!isValidPassword(password)) {
        $("#password-feedback").text("Please at least six characters and contain a number.");
        event.preventDefault();
    } else {
    	$("#password-feedback").text("");
    }
} 

function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
}

function validateMessage(message, event) {
    if(!isValidMessage(message)) {
        $("#message-feedback").text("Please at least ten characters.");
        event.preventDefault();
    } else {
    	$("#message-feedback").text("");
    }
} 

function isValidMessage(message) {
    return message.length >= 10;
}

function validateChecked(checked, event) {
    if(!isValidChecked(checked)) {
        $("#checkbox-feedback").text("Please check box.");
        event.preventDefault();
    } else {
    	$("#checkbox-feedback").text("");
    }
} 

function isValidChecked(checked) {
    return checked
}

// Fast Form Functions
function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkInput = formElement.find("#checkbox");

    nameInput.blur(function(event) {
        var name = $(this).val();
        validateNameField(name, event);

        if (!isValidName(name)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"
            });
        } else {
        	$(this).css({"box-shadow": "0 0 8px #181", "border": "1px solid #060"
            });
        }
    });

    passwordInput.blur(function(event) {
        var password = $(this).val();
        validatePassword(password, event);

        if (!isValidPassword(password)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"
            });
        } else {
        	$(this).css({"box-shadow": "0 0 8px #181", "border": "1px solid #060"
            });
        }
    });

    messageInput.blur(function(event) {
        var message = $(this).val();
        validateMessage(message, event);

        if (!isValidMessage(message)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"
            });
        } else {
        	$(this).css({"box-shadow": "0 0 8px #181", "border": "1px solid #060"
            });
        }
    });

    checkInput.change(function(event) {
        var isChecked = $(this).is(":checked");
        validateChecked(isChecked, event);

        if (!isValidChecked(isChecked)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"
            });
        } else {
        	$(this).css({"box-shadow": "0 0 8px #181", "border": "1px solid #060"
            });
        }
    });
}