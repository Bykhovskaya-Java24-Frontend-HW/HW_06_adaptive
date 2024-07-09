//star rating
$(function () {
  $("#rateYo").rateYo({
    starWidth: "30px",
    ratedFill: "rgb(255,187,0)",
  });
});

//slick slider
$(".product-right--first").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  asNavFor: ".product-right__list",
});
$(".product-right__list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".product-right--first",
  centerMode: true,
  focusOnSelect: true,
  prevArrow:
    '<button type="button" class="slick-prev"><img src="img/icon/arrow-left.svg" alt="Scroll to the left" style="width: 20px; height: 20px;"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt="Scroll to the right" style="width: 20px; height: 20px;"></button>',
});
