
// $('.hero-text__first')[0].innerHTML = "Преимущества разных банков теперь<br>объединены в картах «Билайн»<br>Таким образом рамки и место обучения<br>кадров способствует подготовки<br>и реализации направлений прогрессивного<br>развития.";

// $('.hero-text__second')[0].innerHTML = "Значимость этих проблем настолько<br>очевидна, что начало повседневной работы<br>по формированию позиции позволяет<br>оценить значение модели развития";






$('.add-mobile-header').click(function() {
  if ($(this).hasClass("add-active")){
    $(this).removeClass("add-active");
    $('.hero-text__block').removeClass('hero-text__block-active');
    $('.hero-text__block-mask').removeClass('hero-text__block-mask__active');
    $('.advan').removeClass('advan-active');
    $(this)[0].innerHTML = "Подробнее";
  } else {
    $(this).addClass("add-active");
    $('.hero-text__block').addClass('hero-text__block-active');
    $('.hero-text__block-mask').addClass('hero-text__block-mask__active');
    $('.advan').addClass('advan-active');
    $(this)[0].innerHTML = "Свернуть";
  }
})





/* <p class="hero-text hero-text__first">Преимущества разных банков теперь<br>объединены в картах «Билайн»<br>Таким образом рамки и место обучения<br>кадров способствует подготовки<br>и реализации направлений прогрессивного<br>развития.</p>


<p class="hero-text">Значимость этих проблем настолько<br>очевидна, что начало повседневной работы<br>по формированию позиции позволяет<br>оценить значение модели развития</p>
							
 */



