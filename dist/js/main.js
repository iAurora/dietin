svg4everybody({polyfill:!0}),function(e){function s(){var s=e(this).scrollTop();Math.abs(n-s)<=t||(s>n&&s>l?e(".js-header").removeClass("js-header-down").addClass("js-header-up"):s+e(window).height()<e(document).height()&&e(".js-header").removeClass("js-header-up").addClass("js-header-down"),n=s)}var o,n=0,t=5,l=e(".js-header").outerHeight();e(window).scroll(function(e){o=!0}),setInterval(function(){o&&(s(),o=!1)},250)}(jQuery),function(e){function s(e){c.toggleClass("is-open"),g.toggleClass("is-open")}function o(e){r.toggleClass("is-open"),u.toggleClass("is-open")}function n(e){h.toggleClass("is-open"),d.toggleClass("is-open"),v.toggle()}function t(s){e(s.target).closest(g).length||e(s.target).closest(c).length||(c.removeClass("is-open"),g.removeClass("is-open"))}function l(s){e(s.target).closest(u).length||e(s.target).closest(r).length||(r.removeClass("is-open"),u.removeClass("is-open"))}function i(s){e(s.target).closest(d).length||e(s.target).closest(h).length||(h.removeClass("is-open"),d.removeClass("is-open"))}var a=e("html"),c=e(".js-dropdown-btn"),g=e(".js-dropdown"),r=e(".js-search-btn"),u=e(".js-search"),h=e(".js-mobile-nav-btn"),d=e(".js-mobile-nav"),v=e(".js-mobile-nav-overlay");e(document).ready(function(){c.on("click",s),r.on("click",o),h.on("click",n),a.on("click",t),a.on("click",l),a.on("click",i),v.click(function(){v.toggle(),h.toggleClass("is-open"),d.toggleClass("is-open")})})}(jQuery),function(e){e(function(){e(".js-mobile-nav").on("click",".js-mobile-subnav-btn",function(){e(this).siblings(".js-mobile-subnav").toggle(),e(this).children(".js-subnav-down").toggle(),e(this).children(".js-subnav-up").toggle()})})}(jQuery);
//# sourceMappingURL=main.js.map
