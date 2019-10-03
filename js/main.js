$(document).ready(function () {

    const menu = document.querySelector('.header');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
        if (menu.className.indexOf('active') === -1) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    })

    if ($(window).width() < 992) {
        $('.nav-link,.nav').click(function () {
            $('.header').removeClass("active")
            $('body').toggleClass("overfollow-fix")
        });
    }
    $('.nav-tgl').click(function () {
        $('body').toggleClass("overfollow-fix")
    });

    if ($(window).width() < 1199) {
        $("img").addClass("img-fluid");
    }


    if ($(window).width() > 992) {
        // $('.clients-cont').removeAttr('id');
        // $('.client').removeAttr('data-depth');
        var scene = $('#scene').get(0);
        var parallaxInstance = new Parallax(scene);
        AOS.init();
    }



    if ($(window).width() < 992) {
        $('div,a').removeAttr('data-aos');
        $('div,a').removeAttr('data-aos-duration');
        $('div,a').removeAttr('data-aos-delay');
        $('.nav').removeClass('col-lg-8');
        $('.nav').removeClass('d-lg-block');
        $('.nav').removeClass('d-none');

    }

    $(window).scroll(function () {

        if ($(this).scrollTop() > 30) {
            $('.header-sec').css("padding-top", "8px");
            $('.nav-tgl').addClass("box");

        } else {
            $('.header-sec').css("padding-top", "43px");
            $('.nav-tgl').removeClass("box");
        }

    });



    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var offset = 70;
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - offset
        }, 1000, 'swing');
    });

    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    });






    if ($(window).width() < 992) {
        $(".clients-cont").addClass("owl-carousel");

        $('.clients-cont').owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,

                },
                480: {
                    items: 3,

                },
                767: {
                    items: 5,
                },

            }
        });


    } else {
        $(".clients-cont").removeClass("owl-carousel");

    }
    if ($(window).width() < 992) {
        $(".partners").addClass("owl-carousel");

        $('.partners').owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 3,
                },

            }
        });


    } else {
        $(".partners").removeClass("owl-carousel");

    }



    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    });

});