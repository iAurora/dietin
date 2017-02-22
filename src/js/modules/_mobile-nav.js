(function($) {

	// DOM ready
	$(function() {


		// Click header btn to reveal the nav
		$('.js-mobile-nav-btn').click(function(){
			$('.nav-list').toggle();
		});

		// Dynamic binding to on 'click'
		$('.nav-list').on('click', '.nav-click', function(){

			// Toggle the nested nav
			$(this).siblings('.nav-submenu').toggle();

			// Toggle the arrow using CSS3 transforms
			$(this).children('.nav-arrow').toggleClass('nav-rotate');

		});

	});

})(jQuery);