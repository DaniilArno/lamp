$(document).ready(function(){
  $('.first__btnItems .first__btnItem a').click(function(){
    $('.first__btnItem a').removeClass("actived");
    $(this).addClass("actived");
});
});
$(document).ready(function(){
  $('.channel-type .btn-light').click(function(){
    $('.btn-light').removeClass("activeded");
    $(this).addClass("activeded");
});
});

$(document).ready(function(){
  $('.tabs .tablinks').click(function(){
    $('.tablinks').removeClass("active1");
    $(this).addClass("active1");
});
});
$(document).ready(function(){
  $('.firstBlock__colorLink .firstBlock__item').click(function(){
    $('.firstBlock__item').removeClass("activeWhite");
    $(this).addClass("activeWhite");
});
});
$(document).ready(function(){
  $('.tabs-switch .tabs-switch_link .btn').click(function(){
    $('.tabs-switch_link .btn').removeClass("activ");
    $(this).addClass("activ");
});
});
$('.tabs-switch_link2').click(function(){
  $('.tabs-content1').css("display","none");
  $('.tabs-content2').css("display","block");
});
$('.tabs-switch_link1').click(function(){
  $('.tabs-content1').css("display","block");
  $('.tabs-content2').css("display","none");
});


$(document).ready(function(){
  $('.firstBlockContainer .firstBlock_whitesquare').click(function(){
    $('.firstBlock_whitesquare').removeClass("squareActive");
    $(this).addClass("squareActive");
});
});

$('.firstBlock_whitesquare1').click(function() {
  $('.firstBlockImage1').css("display","block");
  $('.firstBlockImage2').css("display","none");
  $('.firstBlockImage3').css("display","none");
});
$('.firstBlock_whitesquare2').click(function() {
  $('.firstBlockImage1').css("display","none");
  $('.firstBlockImage2').css("display","block");
  $('.firstBlockImage3').css("display","none");
});
$('.firstBlock_whitesquare3').click(function() {
  $('.firstBlockImage1').css("display","none");
  $('.firstBlockImage2').css("display","none");
  $('.firstBlockImage3').css("display","block");
});

