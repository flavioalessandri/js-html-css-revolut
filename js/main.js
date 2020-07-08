$(document).ready(function(){ //open jquery library when DOM is fully loaded

// Mediaquery max-width 1025px
// use the hamburger menu to show the dropdown items

var hamburger_menu = $('#hamburger-menu');
hamburger_menu.click(function() {//when mouse over the class parent_dropdown

    $(this).toggleClass('hamb-position-fixed');
    $('#navbar-info-wrapper').toggleClass('invisibile');
    $('#navbar-link-wrapper').toggleClass('invisibile');
    $('#navbar-link .link ').toggleClass('invisibile');
    $("#hamb-line01").toggleClass("anim1");
    $("#hamb-line02").toggleClass("anim2");
});

// Mediaquery max-width 1025px
// use the arrow to show the dropdown menu on click

  $('#navbar-link .parent_dropdown > i').click(function() {//when mouse over the class parent_dropdown

      $(this).toggleClass('fa-chevron-up'); //arrow change the position to up after click
      $(this).next().toggleClass('invisibile');
      // $('#navbar-link .parent_dropdown > i').next().removeClass('hidden');

  });

  // var for container of dropdown list
  var parent_dropdown =  $('#navbar-content .link .parent_dropdown');
  console.log(parent_dropdown);

  // var for  dropdown list
  var dropdown= $('#navbar-content ul.dropdown' );
  console.log(dropdown);

  // function when mouse enter on the parent-dropdown
  parent_dropdown.on('mouseenter', function() {//when mouse over the class parent_dropdown

      $(this).children('span').addClass('color');
      $(this).children('.dropdown').addClass('active');
      $(this).children('.dropdown').removeClass('hidden'); //make the dropdown of this element visible

  });

// function when mouse leave the parent-dropdown
  parent_dropdown.on('mouseleave', function() {//when mouse over the class parent_dropdown

      $(this).children('span').removeClass('color');
      $(this).children('.dropdown').removeClass('active');
      $(this).children('.dropdown').addClass('hidden'); //make the dropdown of this element visible

  });



});
