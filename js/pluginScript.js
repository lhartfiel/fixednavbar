$.fn.navBar = function(options){
	var settings = $.extend({
		slideDown: 1500,
		scrollTop: 1500
	},options);

	$(this).on('click', function(e){
		e.preventDefault();
		$('.navText').slideUp();	
	});	
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		//removes the 'focus' color
		$('.active').children().removeClass('currentState');
		//removes the active class and slides up any open nav bars
		$('a[href^="#"]').removeClass('active')
			.next('.navText')
			.slideUp();
		//add a class of active and triggers a slideDown on the class called navText	
		$(this).addClass('active')
			.next('.navText')
			.slideDown(settings.slideDown);
		//find anything with class of active, target it's children and add a class of currentState
		$('.active').children().addClass('currentState');
	
		//animate the scrolling of the main body by selecting the div id
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, settings.scrollTop);	
	});	

}