const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function(params) {
  $('#message').fadeOut('slow');
}, 3000);
