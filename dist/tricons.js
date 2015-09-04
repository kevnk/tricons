(function ($) {

  $.fn.tricon = function(options) {
    return this.each(function(){
      var $el = $(this);

      // Add animate class on
      if($el.is('[class*=loading')) {
        if($el.is('[class*=loading-')) {
          $el.addClass('animate');
        }
        $el.parent().on('click', function(){
          if ($el.is('.animate')) {
            $el.removeClass('animate');
          } else {
            setTimeout(function(){
              $el.addClass('animate');
            }, 200)
          }
        });
      }

      // if($el.filter('[data-tricon-show]')) {
      //   var $target = $($el.attr('href')).find('[data-tricon]');
      //   console.log("%c $target -->", 'color:#F80', $target)
      //   $el.on('click', function(){
      //     $target.attr('data-tricon', $el.data('tricon'));
      //   });
      // }

    });
  };

  // Initialize tricons
  $('.tricon').tricon();

})(jQuery);
