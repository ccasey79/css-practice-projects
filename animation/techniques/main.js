console.log("JS has loaded!");


$('#newsletterBtn').on('click', function() {
  $('#emailField').addClass('animated shake');
  $('#emailField').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('#emailField').removeClass('animated shake');
   });
});