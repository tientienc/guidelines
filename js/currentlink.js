$(function(){
  $('a').each(function() {
 ss   if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});