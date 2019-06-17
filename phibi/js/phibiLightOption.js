$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    dots: true
})
});

function openNav() {    
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.opacity = "1";
  $('body, html').css('overflow', 'hidden');
    
}
function get_back_scroll() {
    $('body, html').css('overflow', 'auto');
}
function hide_scroll() {
    $('body, html').css('overflow', 'hidden');
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  get_back_scroll();
}

$('.specifications__choice_item').on( 'click', function (event) {

  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");

});


$(document).ready(function(){
	
	$('.tabs div').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs div').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});


$( '.menu' ).mouseenter( function() {
  $('svg .svg').attr('fill','#ffa401');
});
$( '.menu' ).mouseleave( function() {
  $('svg .svg').attr('fill','#000');
});
