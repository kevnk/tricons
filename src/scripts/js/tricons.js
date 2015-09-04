/**
 * Change the icon of an tricons
 * @param  {jQuery Object} $tricon      the element that has [data-tricon]
 * @param  {string} lastIcon        the last icon used
 * @param  {string} newIcon         the new icon to change it to
 * @return {null}
 */
function animateTricon($tricon, lastIcon, newIcon) {
  console.log("%c $tricon, lastIcon, newIcon -->", 'color:#F80', $tricon, lastIcon, newIcon)
  // Change the data-icon attribute and
  // Add/remove .animate class for loading icon
  if(lastIcon == 'loading') {
    $tricon.removeClass('animate');
    setTimeout(function(){
      $tricon.attr('data-tricon', newIcon);
    }, 50);
  } else {
    $tricon.attr('data-tricon', newIcon);
  }
  if(newIcon == 'loading') {
    $tricon.addClass('animate');
  }
}

var $triconToggles = $('[data-tricon-toggle]');

$triconToggles.each(function(){
  var $tricon = $(this);
  $tricon.on('click', function(){
    var origAttr = $tricon.attr('data-tricon-orig')
    var hasTriconOrig = (typeof origAttr !== typeof undefined && origAttr !== false);
    var origIcon = hasTriconOrig ? origAttr : $tricon.attr('data-tricon');
    $tricon.attr('data-tricon-orig', origIcon);
    var toggleIcon = $tricon.data('tricon-toggle');
    var lastIcon = $tricon.attr('data-tricon');
    var newIcon = lastIcon === origIcon ? toggleIcon : origIcon;
    animateTricon($tricon, lastIcon, newIcon);
  });
});

var $triconSubmits = $('[data-tricon-submit]')
$triconSubmits.each(function(){
  var $tricon = $(this);
  var $form = $tricon.parents('form').first();
  if ($form.size()) {
    var lastIcon = $tricon.attr('data-tricon');
    var submitIcon = $tricon.attr('data-tricon-submit');
    $form.on('submit', function(){
      animateTricon($tricon, lastIcon, submitIcon);
    });
    var completeIcon = $tricon.attr('data-tricon-complete');
    if (completeIcon) {
      var lastIcon = submitIcon || lastIcon;
      $form.on('tricon.complete', function(){
        console.log('complete');
        animateTricon($tricon, lastIcon, completeIcon);
      });
    }
  }
});


// Animate directly to another icon
$triconLinks = $('[data-to-tricon]');
$triconLinks.each(function(){
  var $link = $(this);
  var $targetTricon = $($link.attr('href'));
  $link.on('click', function(e){
    e.preventDefault();
    var newIcon = $link.attr('data-to-tricon');
    var lastIcon = $targetTricon.attr('data-tricon');
    animateTricon($targetTricon, lastIcon, newIcon);
    return false;
  });
});