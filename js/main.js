$(document).ready(function(){ //open jquery library when DOM is fully loaded

var parent_dropdown =  $('.link .parent_dropdown');
console.log(parent_dropdown);

var dropdown= $('.dropdown' );
console.log(dropdown);

var dropdown_items = $('.dropdown > li').children();
console.log(dropdown_items);

parent_dropdown.on('mouseover', function() {//when mouse over the class parent_dropdown
  parent_dropdown.removeClass('active'); //remove all .active class from other element with parent_dropdown
  parent_dropdown.children('.dropdown').addClass('hidden'); //make sure all dropdown are hidden
  $(this).addClass('active'); //add active class to this element
  $(this).children('.dropdown').removeClass('hidden'); //make the dropdown of this element visible
});

dropdown.on('mouseout', function() {
  parent_dropdown.removeClass('active');
  $(this).addClass('hidden');
  alert("no");
});

// dropdown_items.on('mouseover', function() {//when mouse over the element of dropdown
//   dropdown_items.removeClass('active');
//   $(this).addClass('active');
// });









  });
