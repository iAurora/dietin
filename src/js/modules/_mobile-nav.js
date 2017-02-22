(function($) {

	// DOM ready
	$(function() {

		// Dynamic binding to on 'click'
      $('.js-mobile-nav').on('click', '.js-mobile-subnav-btn', function() {

        // Toggle the nested nav
        $(this).siblings('.js-mobile-subnav').toggle();
        $(this).children('.js-subnav-down').toggle();
        $(this).children('.js-subnav-up').toggle();

		});

	});

})(jQuery);