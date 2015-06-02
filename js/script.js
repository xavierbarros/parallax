$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0, '+ wScroll / 2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0, '+ wScroll / 4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0, -'+ wScroll / 40 +'%)'
  });
});
