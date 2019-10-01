window.onload = function () {
    $(".boxes").fadeOut(500, function () {
        $(this).parent().hide();
        $('body, html').css("overflow", "visible");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
        $('.main-title').addClass("anim-typewriter");
    });
}
$(document).ready(function () {
    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.header-sec').css("padding-top", "8px");
        } else {
            $('.header-sec').css("padding-top", "43px");
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
    AOS.init();
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