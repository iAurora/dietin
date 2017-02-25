(function ($) {

  $(function (){

    $toggleLink = $('.js-expand-nutrients');
    $toggledItems = $('.js-hidden-nutrients');

    $toggleLink.on('click', function() {

        $toggledItems.toggleClass('is-open');

        if ($toggledItems.hasClass('is-open')) {
          $toggleLink.html('Свернуть список');
        }
        else {
          $toggleLink.html('Все нутриенты');
        }

		});

  });

})(jQuery);