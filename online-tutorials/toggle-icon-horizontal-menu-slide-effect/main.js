
console.log('JS Loaded!');


$(document).ready(function() {
  $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active');
    $('nav').toggleClass('active');
  });
});
