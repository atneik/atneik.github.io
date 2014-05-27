jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	var flag = 2;
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
	/*
	if( windowWidth <= 767 && flag != 1){
		$('#work .page-thumb-title').removeClass('page-thumb-title').addClass('page-play-thumb-title');
		$('#work .page-thumb-subtitle').removeClass('page-thumb-subtitle').addClass('page-play-thumb-subtitle');
		flag = 1;
	}else if(flag != 0){
		$('#work .page-play-thumb-title').removeClass('page-play-thumb-title').addClass('page-thumb-title');
		$('#work .page-play-thumb-subtitle').removeClass('page-play-thumb-subtitle').addClass('page-thumb-subtitle');
		flag = 0;
	}
	*/

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
	Nav Shadow hide/show
================================================== */

BRUSHED.showNavShadow = function(){

	$(function() {
    	$(window).scroll(function() {
        	var top = $(document).scrollTop();
        	var $navbar = $('div.sticky-nav.stuck');
        	console.log(top);
        		if (top >30) {
        			$navbar.css({'-webkit-box-shadow': '0 3px 5px rgba(125, 125, 125, 0.9)',
	'-moz-box-shadow': '0 3px 5px rgba(125, 125, 125, 0.9)',
	'box-shadow': '0 3px 5px rgba(0, 0, 0, 0.4)'});  		
        		}
        		else{
	        		$navbar.css({'-webkit-box-shadow':'', '-moz-box-shadow':'', 'box-shadow':''});
        		}
        }).triggerHandler("scroll");
    });	
}

/* ==================================================
	Init
================================================== */

$(document).ready(function(){
	
	
	// Preload the page with jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
		}
	});
	
	$('body').scrollspy({ target: '#menu' });

	BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	BRUSHED.fancyBox();
	BRUSHED.showNavShadow();
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

$('#pageTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

});
