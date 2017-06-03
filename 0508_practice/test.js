/// Scroll fade in when 100px from the top 
$(window).scroll(function() {
  if ($(this).scrollTop()> 20) {
    $('nav').fadeIn();
   } else {
    $('nav').fadeOut();
   }
});

/// Scroll back to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});