var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function($) {
  // Mobile sidebars
  $.fn.expandableSidebar = function(expandedClass) {
    var $me = this;

    $me.on('click', function() {
      if(!$me.hasClass(expandedClass)) {
        $me.addClass(expandedClass);
      } else {
        $me.removeClass(expandedClass);
      }
    });
  }

  // Interval loop
  $.fn.intervalLoop = function(condition, action, duration, limit) {
    var counter = 0;
    var looper = setInterval(function(){
      if (counter >= limit || $.fn.checkIfElementExists(condition)) {
        clearInterval(looper);
      } else {
        action();
        counter++;
      }
    }, duration);
  }

  // Check if element exists
  $.fn.checkIfElementExists = function(selector) {
    return $(selector).length;
  }

  var centoController = {
    init: function(opts) {
      var base = this;

      base._addClasses();

      // Move Flyout
      $.fn.intervalLoop('.cento-header #wsite-menus', base._moveFlyout, 100, 15);

      // Move Cart
      $.fn.intervalLoop('.cento-header #wsite-mini-cart', base._moveCart, 300, 8);

      // Check Cart
      $.fn.intervalLoop('body.cart-full', base._checkCartItems, 300, 10);

      // Fixed header
      base._stickyHeader();

      if(!$('body').hasClass('wsite-editor') && $('#wsite-nav-cart-a').length) {
        $('#wsite-nav-cart-a').html($('#wsite-nav-cart-a').html().replace(/[()]/g, ''));
      }

      setTimeout(function(){
        base._attachEvents();
      }, 800);
    },

    _addClasses: function() {
      var base = this;

      // Add fade in class to nav + logo + banner
      $('body').addClass('fade-in');

      // Add class to nav items with subnav
      $('.wsite-menu-default').find('li.wsite-menu-item-wrap').each(function(){
        var $me = $(this);

        if($me.children('.wsite-menu-wrap').length > 0) {
          $me.addClass('has-submenu');
          $('<span class="icon-caret"></span>').insertAfter($me.children('a.wsite-menu-item'));
        }
      });

      // Add class to subnav items with subnav
      $('.wsite-menu').find('li.wsite-menu-subitem-wrap').each(function(){
        var $me = $(this);

        if($me.children('.wsite-menu-wrap').length > 0) {
          $me.addClass('has-submenu');
          $('<span class="icon-caret"></span>').insertAfter($me.children('a.wsite-menu-subitem'));
        }
      });

        // Keep subnav open if submenu item is active
        if ($(window).width() < 1024) {
          $('li.wsite-menu-subitem-wrap.wsite-nav-current').parents('.wsite-menu-wrap').addClass('open');
        }

      // Add placeholder text to inputs
      $('.wsite-form-sublabel').each(function(){
        var sublabel = $(this).text();
        $(this).prev('.wsite-form-input').attr('placeholder', sublabel);
      });
    },

    _checkCartItems: function() {
      var base = this;
      if($('#wsite-mini-cart').find('li.wsite-product-item').length > 0) {
        $('body').addClass('cart-full');
      } else {
        $('body').removeClass('cart-full');
      }
    },

    _moveLogin: function() {
      var loginDetach = $('#member-login').detach();
      $('.mobile-nav .wsite-menu-default > li:last-child').after(loginDetach);
    },

    _moveFlyout: function() {
      var maxheight = $(window).height() - $('.cento-header').outerHeight();
      var anchor = true;

      $('#wsite-menus .wsite-menu-wrap').each(function() {
        if ($(this).outerHeight() > maxheight) {
          anchor = false;
        }
      });

      if (anchor) {
        var move = $("#wsite-menus").detach();
        $(".desktop-nav .container").append(move);
      }
    },

    _moveCart: function() {
      if ($(window).width() > 1024) {
        var move = $("#wsite-mini-cart").detach();
        $(".desktop-nav .container").append(move);
      }
    },

    _stickyHeader: function() {
      if ($(window).width() <= 1024) {
        $('body:not(.wsite-native-mobile-editor, .wsite-checkout-page) .cento-header').waypoint('sticky');
      }
      else {
        $('body:not(.wsite-native-mobile-editor, .wsite-checkout-page) .desktop-nav').waypoint('sticky');
      }
    },

    _attachEvents: function() {
      var base = this;

      $('label.hamburger').on('click', function() {
          if (!$('body').hasClass('nav-open')) {
              $('body').addClass('nav-open');
          } else {
              $('body').removeClass('nav-open');
          }
      });

      base._checkCartItems();
      if($('#wsite-nav-cart-a').length) {
        $('#wsite-nav-cart-a').html($('#wsite-nav-cart-a').html().replace(/[()]/g, ''));
      }

      // Move cart + login
      if ($(window).width() <= 1024) {
        $.fn.intervalLoop('.mobile-nav #member-login', base._moveLogin, 800, 5);
      }

      var resize;

      $(window).on('resize', function(e) {
        clearTimeout(resize);
        resize = setTimeout(function() {
          $('.sticky-wrapper > div').waypoint('unsticky');
          base._stickyHeader();
        }, 800);
      });

      // Subnav toggle
      $('li.has-submenu span.icon-caret').on('click', function() {
          var $me = $(this);

          if($me.siblings('.wsite-menu-wrap').hasClass('open')) {
              $me.siblings('.wsite-menu-wrap').removeClass('open');
          } else {
              $me.siblings('.wsite-menu-wrap').addClass('open');
          }
      });

      // Store category dropdown
      $('.wsite-com-sidebar').expandableSidebar('sidebar-expanded');

      // Search filters dropdown
      $('#wsite-search-sidebar').expandableSidebar('sidebar-expanded');

      // Init fancybox swipe on mobile
      if ('ontouchstart' in window) {
        $('body').on('click', 'a.w-fancybox', function() {
          base._initSwipeGallery();
        });
      }
    },

    _initSwipeGallery: function() {
      var base = this;

      setTimeout(function(){
        var touchGallery = document.getElementsByClassName('fancybox-wrap')[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
          } else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
          }
          base._initSwipeGallery();
        });
      }, 500);
    }
  }

  $(document).ready(function(){
    centoController.init();
  });
});


}
/*
     FILE ARCHIVED ON 13:22:09 Oct 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:32:15 Jan 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 212.167
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.064
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 184.524 (3)
  PetaboxLoader3.resolve: 224.521 (3)
  PetaboxLoader3.datanode: 47.675 (5)
  CDXLines.iter: 17.747 (3)
  load_resource: 192.726
  loaddict: 9.033
*/