var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

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


$(document).ready(function() {

  $(".accordion").on("click", function() {
    if ($('.accordion').hasClass("active")) {
      $('.fa').removeClass("fa-caret-down");
      $('.fa').addClass("fa-caret-up");
    } else  
    $('.fa').removeClass("fa-caret-up");
    $('.fa').addClass("fa-caret-down");
  });
 
});
