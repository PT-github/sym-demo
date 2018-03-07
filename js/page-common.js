$(document).ready(function(){
  $('#pmenu').bind('click',function(){
    $('.menu-container').addClass('menu-active');
  });
  $('.menu-container').bind('click',function(e){
    var target = e.target;
    var box = $('.right-con')[0];
    if(!box.contains(target) && target.className.indexOf('menu') === -1){
      $('.menu-container').removeClass('menu-active');
    }
  })
})