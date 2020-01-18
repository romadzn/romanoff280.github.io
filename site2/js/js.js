// intro slider https://kenwheeler.github.io/slick/
let introSlider = $("#intro_slider");

introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true
});
