var s = skrollr.init() //初始化

$(document).on('click','a',function(evt){
  var target = $(this).attr("href")
  $('html,body').animate({
    scrollTop: $(target).offset().top - 60
  },500)
})