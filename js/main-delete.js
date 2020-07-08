$(document).ready(function(){ //open jquery library when DOM is fully loaded

part to make the dropdown menu visible after mouseenter the link;
var parent_dropdown =  $('#navbar-content .link .parent_dropdown');
console.log(parent_dropdown);

var dropdown= $('#navbar-content ul.dropdown' );
console.log(dropdown);

var dropdown_items = $('#navbar-content .dropdown > li').children();
console.log(dropdown_items);

var width = $('header').width();

parent_dropdown.on('mouseenter', function() {//when mouse over the class parent_dropdown
  if (width>1025) {
    $(this).children('.dropdown').addClass('active');
    $(this).children('.dropdown').removeClass('hidden'); //make the dropdown of this element visible
  }
});



parent_dropdown.on('mouseleave', function() {//when mouse over the class parent_dropdown
  if ($(window).width()>1025) {
    $(this).children('.dropdown').removeClass('active');
    $(this).children('.dropdown').addClass('hidden'); //make the dropdown of this element visible
  }else{}
});

$('#hamburger-menu').click(function() {//when mouse over the class parent_dropdown
    $('#navbar-info-wrapper').toggle();
    $('#navbar-link .link').toggle();
    $("#hamb-line01").toggleClass("anim1");
    $("#hamb-line02").toggleClass("anim2");
});

$('#navbar-link .parent_dropdown > i').click(function() {//when mouse over the class parent_dropdown
  if ($(window).width()<1025) {
    $(this).toggleClass('fa-chevron-up');
    $(this).next().toggle(400);
     //make the dropdown of this element visible
  }
})

// part to lead the behaviour of the navbar-wrapper
$(window).scroll(function(){
  if($(this).scrollTop() > 20){
    $('#navbar-wrapper').addClass('fixed');
  }else if($(this).scrollTop() < 20){
    $('#navbar-wrapper').removeClass('fixed');
  }
});


});