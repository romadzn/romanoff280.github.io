// intro slider https://kenwheeler.github.io/slick/
let introSlider = $("#intro_slider");

introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

$(function() {
    /*fixed header*/
    var header = $("#header"),
        introH = $("#intro").innerHeight();
    scrollOffset = $(window).scrollTop();
    // save current scroll
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    // check scroll
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this);
        (blockId = $(this).data("scroll")),
            (blockOffset = $(blockId).offset().top);
        $("html, body").animate(
            {
                scrollTop: blockOffset
            },
            500
        );
    });

    // nav - toggle

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});
