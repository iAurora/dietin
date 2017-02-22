(function ($) {

  var $toggleMenuBtn = $('.js-dropdown-btn');
  var $toggledMenu = $('.js-dropdown');
  var $toggleSearchBtn = $('.js-search-btn');
  var $toggledSearch = $('.js-search');
  var $toggleMobileBtn = $('.js-mobile-nav-btn');
  var $toggledMobile = $('.js-mobile-nav');

  function toggleMenu (e) {
    $toggleMenuBtn.toggleClass('is-open');
    $toggledMenu.toggleClass('is-open');
  }

  function toggleSearch (e) {
    $toggleSearchBtn.toggleClass('is-open');
    $toggledSearch.toggleClass('is-open');
  }

   function toggleMobile (e) {
    $toggleMobileBtn.toggleClass('is-open');
    $toggledMobile.toggleClass('is-open');
  }

  function hideMenu (e) {
    if (!$(e.target).closest($toggledMenu).length && !$(e.target).closest($toggleMenuBtn).length) {
    $toggleMenuBtn.removeClass('is-open');
    $toggledMenu.removeClass('is-open');
    }
  }

    function hideSearch (e) {
      if (!$(e.target).closest($toggledSearch).length && !$(e.target).closest($toggleSearchBtn).length) {
      $toggleSearchBtn.removeClass('is-open');
      $toggledSearch.removeClass('is-open');
      }
    }

    function hideMobile (e) {
      if (!$(e.target).closest($toggledMobile).length && !$(e.target).closest($toggleMobileBtn).length) {
      $toggleMobileBtn.removeClass('is-open');
      $toggledMobile.removeClass('is-open');
      }
    }

  $(document).ready(function () {
    $toggleMenuBtn.on('click', toggleMenu);
    $toggleSearchBtn.on('click', toggleSearch);
    $toggleMobileBtn.on('click', toggleMobile);
    $('html').on('click', hideMenu);
    $('html').on('click', hideSearch);
    $('html').on('click', hideMobile);
  });

})(jQuery);