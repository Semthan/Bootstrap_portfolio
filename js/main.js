$(document).ready(function(){
	/* Every time the window is scrolled ... */   	
	$(window).scroll(function(){
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });		

	//pause slide (carousel)
	$('.carousel').carousel('pause');
	 
	//hide menu after click
	$('button.navbar-toggle').focusout(function(){
			$(".navbar-collapse").collapse('hide');
		}); 
});

    //smooth scroll
	var scroll = new SmoothScroll('a[href*="#"]', {
	});

	

