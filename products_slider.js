$(document).ready(function() {
  // в настройки можно передать все стандартные параметры плагина Swiper.js
  $.each($('.js-products-slider'), function(index, el) {
    InitSwiper($(el), {
      roundLengths: true,
      autoLength: true, // автоматически выставить кол-во слайдов исходя из минимальной ширины карточки
      minCartWidth: 280, // Минимальная ширина карточки
      autoResponsive: false // Автоматически расчитать респонсив для слайдера
    })
  });
});
