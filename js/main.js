$(document).ready(function(){ //open jquery library when DOM is fully loaded

  // For Mediaquery max-width 1025px
  // use the hamburger menu to show the dropdown items
  hamburgerDropdown();

  // use the arrow to show the dropdown menu on click
  onClickDropdown();

  // function when mouse enter on the parent-dropdown
  mouseEnterDropdown();

// function when mouse leave the parent-dropdown
  mouseLeaveDropdown();


});

// My Function--------------------------

function hamburgerDropdown() {
  var hamburger_menu = $('#hamburger-menu');
  var hamburger_lineup = $("#hamb-line01");
  var hamburger_linedwn = $("#hamb-line02");
  var navbar_info_wrapper =$('#navbar-info-wrapper');
  var navbar_link_wrapper =$('#navbar-link-wrapper');
  var parent_dropdown_wrapper = $('#navbar-link .link ');

  hamburger_menu.click(function() {
    $(this).toggleClass('hamb-position-fixed');
    navbar_info_wrapper.toggleClass('visible');
    navbar_link_wrapper.toggleClass('visible');
    parent_dropdown_wrapper.toggleClass('visible');
    hamburger_lineup.toggleClass("hamb-anim1");
    hamburger_linedwn.toggleClass("hamb-anim2");
  });
}

// end of function......................

function onClickDropdown(){
  var arrow_dropdown =   $('#navbar-link .parent_dropdown > i');
  arrow_dropdown.click(function() {//when mouse over the class parent_dropdown
      $(this).toggleClass('fa-chevron-up'); //arrow change the position to up after click
      $(this).next().toggleClass('visible');
  });
}

// end of function......................

function mouseEnterDropdown(){
  var parent_dropdown =  $('#navbar-content .link .parent_dropdown');

  // function when mouse enter on the parent-dropdown
  parent_dropdown.on('mouseenter', function() {//when mouse over the class parent_dropdown
      $(this).children('span').addClass('color');
      $(this).children('.dropdown').addClass('active');
      $(this).children('.dropdown').removeClass('hidden'); //make the dropdown of this element visible
  });
}

// end of function......................

function mouseLeaveDropdown(){
  var parent_dropdown =  $('#navbar-content .link .parent_dropdown');

  // function when mouse leave the parent-dropdown
    parent_dropdown.on('mouseleave', function() {//when mouse over the class parent_dropdown
        $(this).children('span').removeClass('color');
        $(this).children('.dropdown').removeClass('active');
        $(this).children('.dropdown').addClass('hidden'); //make the dropdown of this element visible
    });
  }

// end of function......................
