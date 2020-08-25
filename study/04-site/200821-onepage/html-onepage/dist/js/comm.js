$(document).ready(function () {

  // slide-main
  $('.slide-main').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
  });

  // slide-festival
  $('.slide-festival').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // $(function () {
  //   $.scrollUp();
  // });

});