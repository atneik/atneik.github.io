jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
}

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(250, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(250, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
}

/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
	$('.sticky-nav').waypoint('sticky');
}

/* ==================================================
   FancyBox
================================================== */

BRUSHED.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
		
		$(".fancybox").fancybox({				
				padding : 0,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	}
}

/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu, #menu-mobile').onePageNav({
		currentClass: 'current',
    	changeHash: false,
    	scrollSpeed: 750,
    	scrollOffset: 100,
    	scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
}

/* ==================================================
	Init
================================================== */

$(document).ready(function(){
	
	/*
	// Preload the page with jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
		}
	});
	*/
	
	BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	BRUSHED.goSection();
	BRUSHED.fancyBox();
	
	if(document.body.getElementsByTagName("header")[0].id == "post"){
		BRUSHED.randomHue();
	}
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

$('#pageTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

});
