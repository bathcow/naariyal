

let screen = document.getElementById('burger-screen');

$('#burger').on('click', function(){
  $(this).toggleClass('header-burger_active');
  $('#burger-screen').toggleClass('header-mobile_active');
});


$('.recipies-wrapper__item').on('click', function(){
  window.location = 'http://ibatkov.ru/naariyal/recipe.html';
})

$('.recipies-button_filter').on('click', function(){
  $('.recipies-filter').toggleClass('recipies-filter_active');
});


recipies-button_filter