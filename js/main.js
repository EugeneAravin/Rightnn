AOS.init();

$(function() {

    $('.sl__block').before('<img src="img/photo-slider.png" />');

});

// Slider
$('.sl').slick({
  arrows: false
})

$('.left').click(function(){
  $('.sl').slick('slickPrev');
})

$('.right').click(function(){
  $('.sl').slick('slickNext');
})

// Slider-sectificate
$('.sl__certificate').slick({
  arrows: false,
  dots: true,
  customPaging : function(slider, i) {
        return '<a href="#"><img src="img/dot.png" /><img src="img/dot_active.png" /></a>';
    },
})

$('.left_certificate').click(function(){
  $('.sl__certificate').slick('slickPrev');
})

$('.right_certificate').click(function(){
  $('.sl__certificate').slick('slickNext');
})