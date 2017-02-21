(function ($) {

  var $togglePathologiesBtn = $('.js-dropdown-btn');
  var $toggledPathologies = $('.js-dropdown');
  var $toggleSearchBtn = $('.js-search-btn');
  var $toggledSearch = $('.js-search');

  function togglePathologies (e) {
    $togglePathologiesBtn.toggleClass('is-open');
    $toggledPathologies.toggleClass('is-open');
  }

    function toggleSearch (e) {
    $toggleSearchBtn.toggleClass('is-open');
    $toggledSearch.toggleClass('is-open');
  }


  $(document).ready(function () {
    $togglePathologiesBtn.on('click', togglePathologies);
    $toggleSearchBtn.on('click', toggleSearch);
  });

})(jQuery);