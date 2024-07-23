$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    margin: 15,
    lazyload: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $;
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $("#navbar1").addClass("navbar-hidden").removeClass("navbar-visible");
    } else {
      $("#navbar1").addClass("navbar-visible").removeClass("navbar-hidden");
    }
  });
});
