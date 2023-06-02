
$(function(){

  $('.logo-pic img').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    
    $('.logo .content').removeClass('active')
    $('#' + $(this).attr('data-img')).addClass('active')
  })

})