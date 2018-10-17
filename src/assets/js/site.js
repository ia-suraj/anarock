$(document).ready(function() {
  $("header .hamburger").click(function() {
    $(this).toggleClass("active");
    $("header nav .secondNav ul.mobileNav").toggleClass("open");
  });

  $("header .plusWrap").click(function() {
    $(this).toggleClass("minusWrap");

    if ($("header .innerNav").is(":visible")) {
      $("header .innerNav").slideUp(500);
      $("header .plusWrap").removeClass("minusWrap");
    }
    if (
      $(this)
        .next("header .innerNav")
        .is(":visible")
    ) {
      $(this)
        .next("header .innerNav")
        .slideUp(500);
      $(this).removeClass("minusWrap");
    } else {
      $(this)
        .next("header .innerNav")
        .slideDown(500);
      $(this).addClass("minusWrap");
    }
  });

  $(".topBanner .topBannerSlider").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });

  $(".big_featured_News .bigNews_Slider").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
  });

  $(
    ".servicesWrap .innerServiceWrap .servicesList .innerList ul li.showSingle"
  ).click(function() {
    $(
      ".servicesWrap .innerServiceWrap .servicesList .innerList ul li.showSingle"
    ).removeClass("active");
    $(this).addClass("active");
    $(".servicesWrap .innerServiceWrap .servicesColumn").removeClass("active");
    $("#div" + $(this).attr("target")).addClass("active");
  });

  $(".researchInsights .researchInsights_Main .researchInsights_Slider").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
  });

  $(
    ".partners_testimonials .testimonials .testimonialsWrap .testimonials_Slider"
  ).slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
  });

  /* $(".twitData").mCustomScrollbar({
         
    }); */

  $(".socialFeed_LifeAt .lifeAt .video_Main .playIcon").click(function() {
    $(".videoPopupWrapper").addClass("active");
    event.preventDefault();
    var videoUrl = $(this).attr("href");
    $(".videoPopupWrapper .popupVideo #iframeVideo").html(
      '<iframe src="https://www.youtube.com/embed/' +
        videoUrl +
        '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>'
    );
  });

  $(".videoPopupWrapper .popupVideo .closeVideo").click(function() {
    $(".videoPopupWrapper").removeClass("active");
    $(".videoPopupWrapper .popupVideo #iframeVideo").html("");
  });
});
