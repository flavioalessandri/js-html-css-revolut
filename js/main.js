$(document).ready(function(){ //open jquery library when DOM is fully loaded

$('#navbar-info-wrapper').show();
$('#navbar-link .link').show();

  var window_size = window.matchMedia('max-width:1025px').matches;
if (window_size == window.matchMedia('min-width:1025px').matches ){ //doesen't work
    $('#navbar-info-wrapper').show();
    $('#navbar-link .link').show();
    alert("show");
}
// Mediaquery max-width 1025px
// use the hamburger menu to show the dropdown items

$('#hamburger-menu').click(function() {//when mouse over the class parent_dropdown
    $('#navbar-info-wrapper').toggle();
    $('#navbar-link-wrapper').toggle();
    $("#hamb-line01").toggleClass("anim1");
    $("#hamb-line02").toggleClass("anim2");
});

// Mediaquery max-width 1025px
// use the arrow to show the dropdown menu on click

  $('#navbar-link .parent_dropdown > i').click(function() {//when mouse over the class parent_dropdown
    // if ($(window).width()<1025) { //doesn't work
      $(this).toggleClass('fa-chevron-up'); //arrow change the position to up after click
      $(this).next().toggle(400);
    // }
  });

  // Mediaquery min-width 1026px

  // var for container of dropdown list
  var parent_dropdown =  $('#navbar-content .link .parent_dropdown');
  console.log(parent_dropdown);

  // var for  dropdown list
  var dropdown= $('#navbar-content ul.dropdown' );
  console.log(dropdown);

  // var for  windows eidth - doesn't work
  var width = $(window).width();


  // function when mouse enter on the parent-dropdown
  parent_dropdown.on('mouseenter', function() {//when mouse over the class parent_dropdown
    // if (width>1025) { //doesn't work
      $(this).children('span').addClass('color');
      $(this).children('.dropdown').addClass('active');
      $(this).children('.dropdown').removeClass('hidden'); //make the dropdown of this element visible
    // }
  });

// function when mouse leave the parent-dropdown
  parent_dropdown.on('mouseleave', function() {//when mouse over the class parent_dropdown
    if ($(window).width()>1025) {
      $(this).children('span').removeClass('color');
      $(this).children('.dropdown').removeClass('active');
      $(this).children('.dropdown').addClass('hidden'); //make the dropdown of this element visible
    }else{}
  });

});
