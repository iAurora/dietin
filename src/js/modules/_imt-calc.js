(function ($) {

  $(function (){

    $calcResultBtn = $('.js-calc-btn');
    $calcResult = $('.js-calc-result');
    $calcRange = $('.js-calc-range');

    $calcResultBtn.on('click', function() {

      var height = $('#calcHeight').val();
      var weight = $('#calcWeight').val();
      var calc = weight / (height * height / 10000);
      var result = Math.round( calc  * 10 ) / 10;
      var range;

      if ( result < 16 ) range = 'Выраженный дефицит массы тела';
      else if ( result >= 16 && result < 18.5 ) range = 'Недостаточный вес';
      else if ( result >= 18.5 && result < 25 ) range = 'Нормальный вес';
      else if ( result >= 25 && result < 30 ) range = 'Избыточный вес (предожирение)';
      else if ( result >= 30 && result < 35 ) range = 'Ожирение I степени';
      else if ( result >= 35 && result < 40 ) range = 'Ожирение II степени';
      else if ( result >= 40 ) range = 'Ожирение III степени (морбидное)';

      $calcResult.text(result);
      $calcRange.text(range);

		});

  });

})(jQuery);