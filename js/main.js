// window.onscroll = function() {
//   let scrolled = window.pageYOffset;
//   console.log( 'Позиция скрола: '+scrolled  );
// };




// var dop = 1;
const scrolledBlock = document.querySelector('#scroll');
window.addEventListener('scroll', translate)



function translate(event) {
  let scrolled = window.pageYOffset;
  scrolledBlock.style.transform = 'translateY('+-scrolled+'px)'
  // console.log(scrolled);

  if (scrolled <= 71) {
    $('.bar').removeClass('bar-active');
  }
  if (scrolled <100) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step1').find('.bar-step__circle').addClass('bar-step__circle-active');
  }
  if (scrolled > 480) {
    $('.bar').addClass('bar-active');
  }
  if ((scrolled > 530) && (scrolled <1200)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step2').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').addClass('color1');
    $('.scroll-mask').removeClass('color2');
    $('.scroll-mask').removeClass('color3');
    $('.scroll-mask').removeClass('color4');
    $('.scroll-mask').removeClass('color6');
  }
  if ((scrolled > 1230) && (scrolled <1630)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step3').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').addClass('color2');
    $('.scroll-mask').removeClass('color1');
    $('.scroll-mask').removeClass('color3');
    $('.scroll-mask').removeClass('color4');
    $('.scroll-mask').removeClass('color6');
  }
  if ((scrolled > 1750) && (scrolled <2180)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step3').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').removeClass('color1');
    $('.scroll-mask').addClass('color3');
    $('.scroll-mask').removeClass('color2');
    $('.scroll-mask').removeClass('color4');
    $('.scroll-mask').removeClass('color6');
  }
  if ((scrolled > 2270) && (scrolled <2745)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step3').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').removeClass('color1');
    $('.scroll-mask').addClass('color4');
    $('.scroll-mask').removeClass('color2');
    $('.scroll-mask').removeClass('color3');
    $('.scroll-mask').removeClass('color6');
  }
  if ((scrolled > 2980) && (scrolled <3310)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step3').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').removeClass('color1');
    $('.scroll-mask').addClass('color2');
    $('.scroll-mask').removeClass('color3');
    $('.scroll-mask').removeClass('color4');
    $('.scroll-mask').removeClass('color6');
  }
  if ((scrolled > 3380) && (scrolled <3530)) {
    $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
    $('.bar').find('.bar-step-step4').find('.bar-step__circle').addClass('bar-step__circle-active');
    $('.scroll-mask').removeClass('color1');
    $('.scroll-mask').addClass('color6');
    $('.scroll-mask').removeClass('color3');
    $('.scroll-mask').removeClass('color4');
    $('.scroll-mask').removeClass('color2');
  }
}


$('.bar-step-step1').click(function(){
  $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
  $(this).find('.bar-step__circle').addClass('bar-step__circle-active');
  $('.bar').find('.bar-step').addClass('disable');
  setTimeout(function() {$('.bar').find('.bar-step').removeClass('disable')}, 1000);
    scrollUp1();
    
})

$('.bar-step-step2').click(function(){
  $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
  $(this).find('.bar-step__circle').addClass('bar-step__circle-active');
  $('.bar').find('.bar-step').addClass('disable');
  setTimeout(function() {$('.bar').find('.bar-step').removeClass('disable')}, 700);
  if (window.pageYOffset < 900) {
    scrollDown2();
  } else {
    scrollUp2();
  }
})

$('.bar-step-step3').click(function(){
  $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
  $(this).find('.bar-step__circle').addClass('bar-step__circle-active');
  $('.bar').find('.bar-step').addClass('disable');
  setTimeout(function() {$('.bar').find('.bar-step').removeClass('disable')}, 700);
  if (window.pageYOffset < 1450) {
    scrollDown3();
  } else {
    scrollUp3();
  }
})

$('.bar-step-step4').click(function(){
  $('.bar').find('.bar-step__circle').removeClass('bar-step__circle-active');
  $(this).find('.bar-step__circle').addClass('bar-step__circle-active');
  $('.bar').find('.bar-step').addClass('disable');
  setTimeout(function() {$('.bar').find('.bar-step').removeClass('disable')}, 1000);
  if (window.pageYOffset < 3845) {
    scrollDown4();
  } else {
    scrollUp4();
  }
})


function scrollUp1() {
  (function scroll() {
    if ((window.pageYOffset > 0) && (window.pageYOffset <= 1200)) {
      window.scrollBy(0, -20);
      
      setTimeout(scroll, 0);
      
      
    }
    if (window.pageYOffset > 1200) {
      window.scrollBy(0, -45);
      setTimeout(scroll, 0);
    }
  })();
}

function scrollUp2() {
  (function scroll() {
    if (window.pageYOffset >= 900) {
      window.scrollBy(0, -20);
      setTimeout(scroll, 0);
    }
  })();
}


  function scrollDown2() {
    (function scroll() {
      if (window.pageYOffset < 900) {
        window.scrollBy(0, 15);
        setTimeout(scroll, 0);
      }
    })();
  }


  function scrollUp3() {
    (function scroll() {
      if (window.pageYOffset >= 1450) {
        window.scrollBy(0, -20);
        setTimeout(scroll, 0);
      }
    })();
  }
  
  
    function scrollDown3() {
      (function scroll() {
        if (window.pageYOffset < 1450) {
          window.scrollBy(0, 15);
          setTimeout(scroll, 0);
        }
      })();
    }

    function scrollUp4() {
      (function scroll() {
        if (window.pageYOffset >= 3845) {
          window.scrollBy(0, -20);
          setTimeout(scroll, 0);
        }
      })();
    }
    
    
      function scrollDown4() {
        (function scroll() {
          if (window.pageYOffset < 3845) {
            window.scrollBy(0, 45);
            setTimeout(scroll, 0);
          }
        })();
      }