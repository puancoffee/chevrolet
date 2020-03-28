$(document)
    .ready(function () {
        $('.owl-carousel').owlCarousel({loop: true, smartSpeed: 900, autoWidth: true, center: true, nav: false});
        $('.fa-chevron-left').click(function () {
            $('.owl-carousel').trigger('next.owl.carousel');
        });
        $('.fa-chevron-right').click(function () {
            $('.owl-carousel').trigger('prev.owl.carousel');
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) { 
                $('.navbar .navbar-brand img').attr('src','./logo.png');
            }
            if ($(this).scrollTop() < 1000) { 
                $('.navbar .navbar-brand img').attr('src','./logo.webp');
            }
        })
    });

