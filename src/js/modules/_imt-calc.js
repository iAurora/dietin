// Temporary fake

(function ($) {

  $(function (){

    $calcResultBtn = $('.js-calc-btn');
    $calcResult = $('.js-calc-result');

    $calcResultBtn.on('click', function() {

        $calcResult.toggle();

		});

  });

})(jQuery);