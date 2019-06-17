$('.owl-carousel').owlCarousel({
  loop:true,
  center: true,
  nav: true,
  dots: false,
  responsiveClass:true,
  items: 1

})
$( ".owl-prev").html('<img src="img/phibiLight/arrow-left-deactive.png" alt="">');
$( ".owl-next").html('<img src="img/phibiLight/arrow-right-deactive.png" alt="">');

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



$( '.menu' ).mouseenter( function() {
  $('svg .svg').attr('fill','#ffa401');
});
$( '.menu' ).mouseleave( function() {
  $('svg .svg').attr('fill','#000');
});
