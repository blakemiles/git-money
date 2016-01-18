/* ---------------------------------------------------------------------- */
/*	LOADER
/* ---------------------------------------------------------------------- */
$(window).load(function() {
	"use strict";
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	$("#part1").attr('class', 'fadein_1');
	$("#part2").attr('class', 'fadein_2');
	$("#part2_1").attr('class', 'fadein_2_1');
	$("#part2_2").attr('class', 'fadein_2_2');
	$("#part3").attr('class', 'fadein_3');
	$("#cookies-message").attr('class', 'fadein_1');
});

$(document).ready(function(){
	"use strict";
	/* ---------------------------------------------------------------------- */
	/*	DIV HOME POSITION
	/* ---------------------------------------------------------------------- */
	
	var windowHeight = $(window).height();
	var homepageHeight = $('#home').height();
	
	if (windowHeight >= homepageHeight){
		$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);
	}	

	$(window).resize(function() {		
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);			
		}	
	});
	
	/* ---------------------------------------------------------------------- */
	/*	MAP HEIGHT & CANVAS
	/* ---------------------------------------------------------------------- */
	
	if (windowHeight >= homepageHeight){
		$('.map-content').css("height", (windowHeight));
		$('.map-content').css("margin-top", (windowHeight));
		$('#canvas').css("height", (windowHeight));
	} else{
		$('.map-content').css("height", (homepageHeight+50));
		$('.map-content').css("margin-top", (homepageHeight+50));
		$('#canvas').css("height", (homepageHeight+50));
	}
	
	$(window).resize(function() {
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('.map-content').css("height", (windowHeight));
			$('.map-content').css("margin-top", (windowHeight));
			$('#canvas').css("height", (windowHeight));
		} else{
			$('.map-content').css("height", (homepageHeight+50));
			$('.map-content').css("margin-top", (homepageHeight+50));
			$('#canvas').css("height", (homepageHeight+50));
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*  DIV CONTACTFORM POSITION
	/* ---------------------------------------------------------------------- */
	
	var footerHeight = $('.footer').height();
	var contactHeight = $('.contact').height();
	var windowtWidth = $(window).width();
	var mapContentHeight = $('.map-content').height();
	
	if (windowtWidth >= 478){
		var difference = mapContentHeight - footerHeight;
		$('.contact').css("top", ((difference-contactHeight)/2));
	} else{
		$('.contact').css("top", '0');
	}
	
	$(window).resize(function() {
		var footerHeight = $('.footer').height();
		var contactHeight = $('.contact').height();
		var windowtWidth = $(window).width();
		var mapContentHeight = $('.map-content').height();
		
		if (windowtWidth >= 478){
			var difference = mapContentHeight - footerHeight;
			$('.contact').css("top", ((difference-contactHeight)/2));
		} else{
			$('.contact').css("top", '0');
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL MEET-US
	/* ---------------------------------------------------------------------- */
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	if (windowWidth <= 480){
		$('.meet-us').css("height", (windowHeight-70));
	}
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL PAGE WITH EASING EFFECT
	/* ---------------------------------------------------------------------- */
    
	$('#link-map').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});
	
	$('#home-top').bind('click', function(e) {
		e.preventDefault();
	    $.scrollTo(0, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	})
	
	/* ---------------------------------------------------------------------- */
	/*	CLOSE COOKIES MESSAGE
	/* ---------------------------------------------------------------------- */
	$(".close-cookies").click(function() {
		$("#cookies-message").attr('class','fadeout_1');
	});
	
	/* ---------------------------------------------------------------------- */
	/*	TEXT EFFECTS
	/* ---------------------------------------------------------------------- */
	
	if( !device.tablet() && !device.mobile() ) {
		
		$(window).scroll(function(){
			var windowHeight = $(window).height();
			var homepageHeight = $('#home').height();
			
			  // get the height of #wrap
			  var h = $(window).height();
			  var y = $(window).scrollTop();
			  
			  if (windowHeight >= homepageHeight){
				  var altura1 = h*.15;
			  }else{
				  var altura1 = h*.75;
			  }
			  
			  if ( y > altura1 ){
				  $("#part1").attr('class', 'fadeout_1');
				  $("#part2").attr('class', 'fadeout_2');
				  $("#part2_1").attr('class', 'fadeout_2_1');
				  $("#part3").attr('class', 'fadeout_3');
			  } else{
				  $("#part1").attr('class', 'fadein_1');
				  $("#part2").attr('class', 'fadein_2');
				  $("#part2_1").attr('class', 'fadein_2_1');
				  $("#part3").attr('class', 'fadein_3');
			  } 
			  
			  if ( y < (h*.75) ){
				  $("#part4").attr('class', 'fadeout_4');
				  $("#part5_1").attr('class', 'fadeout_5_1');
				  $("#part5_2").attr('class', 'fadeout_5_2');
				  $("#part5_3").attr('class', 'fadeout_5_3');
				  $("#part5_4").attr('class', 'fadeout_5_4');
				  $("#part6").attr('class', 'fadeout_6');
			  } else{
				  $("#part4").attr('class', 'fadein_4');
				  $("#part5_1").attr('class', 'fadein_5_1');
				  $("#part5_2").attr('class', 'fadein_5_2');
				  $("#part5_3").attr('class', 'fadein_5_3');
				  $("#part5_4").attr('class', 'fadein_5_4');
				  $("#part6").attr('class', 'fadein_6');
			  } 
			 
		 });
	}else{
		$("#part4").attr('class', 'fadein_4');
		$("#part5_1").attr('class', 'fadein_5_1');
		$("#part5_2").attr('class', 'fadein_5_2');
		$("#part5_3").attr('class', 'fadein_5_3');
		$("#part5_4").attr('class', 'fadein_5_4');
		$("#part6").attr('class', 'fadein_6');
	}
		
	/* ---------------------------------------------------------------------- */
	/*	COUNTDOWN
	/* ---------------------------------------------------------------------- */
	var now = new Date();
	var date = new Date('2015','11','31','00','00','00'); // new Date( year , month , day , hour , minutes , seconds)
	var difference = date - now; 
	var countTo = difference + now.valueOf();
	$('.timer').countdown(countTo, function(event) {
		var $this = $(this);
		switch(event.type) {
			case "seconds":
			case "minutes":
			case "hours":
			case "days":
			case "weeks":
			case "daysLeft":
				//$this.find('span.'+event.type).html(event.value+' '+event.type);
				$this.find('span.'+event.type).html(event.value);
				break;
			case "finished":
				$this.fadeOut();
				setTimeout ( function () { //if you want add a text
					$this.text("The countdown is ended!");
					$this.fadeIn();
				},1500 );
				break;
		}
		
	if ( ($('.days').html()) == 1 ){
		$('.daysText').text(" day ");
	}else{
		$('.daysText').text(" days ");
	}
	
	if ( ($('.hours').html()) == 1 ){
		$('.hoursText').text(" hour ");
	}else{
		$('.hoursText').text(" hours ");
	}
	
	if ( ($('.minutes').html()) == 1 ){
		$('.minutesText').text(" minute ");
	}else{
		$('.minutesText').text(" minutes ");
	}
	
	if ( ($('.seconds').html()) == 1 ){
		$('.secondsText').text(" second ");
	}else{
		$('.secondsText').text(" seconds ");
	}
	
	});
	
	/* ---------------------------------------------------------------------- */
	/*	SUSCRIPTION FORM
	/* ---------------------------------------------------------------------- */

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn().delay(3000).fadeOut();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide().delay(3000).fadeIn();
                    $('.subscribe form input').val('');
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn().delay(2000).fadeOut();
                }
            }
        });
        return false;
    });
    
    /* ---------------------------------------------------------------------- */
	/*	CONTACT FORM
	/* ---------------------------------------------------------------------- */
	
    $('.success-message-2').hide();
    $('.error-message-2').hide();
    
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "php/contact.php",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg == 'SEND'){
					$('.error-message-2').hide();
                    $('.success-message-2').hide();
                    $contactform.hide().delay(3000).fadeIn();
                    $('#contactform input').val('');
                    $('#contactform textarea').val('');
                    $('.success-message-2').html('<div class="success-message-2">'+ $success +'</div>');
                    $('.success-message-2').fadeIn().delay(2000).fadeOut();
				}
				else{
					$('.success-message-2').hide();
                    $('.error-message-2').hide();
                    $('.error-message-2').html('<div class="error-message-2">'+ msg +'</div>');
                    $('.error-message-2').fadeIn().delay(3000).fadeOut();
				}
			}
		 });
		return false;
	});	
	
	/* ---------------------------------------------------------------------- */
	/*	GOOGLE MAPS
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $map 				= $('#map'),
		$address 			= 'Paseo de la Castellana, 1, 28046, Madrid'; //Here, you put your adress

		$map.gMap({
			address: $address,
			zoom: 14,
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		
	/* ---------------------------------------------------------------------- */
	/*  TOOLTIP
	/* ---------------------------------------------------------------------- */
	
	$('.footer-social a').tooltip();	
			
});
