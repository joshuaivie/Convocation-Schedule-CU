var confettiPlayers = [];

function makeItConfetti() {
    var confetti = document.querySelectorAll(".confetti");

    if (!confetti[0].animate) {
        return false;
    }

    for (var i = 0, len = confetti.length; i < len; ++i) {
        var snowball = confetti[i];
        snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
        var scale = Math.random() * 0.8 + 0.2;
        var player = snowball.animate(
            [{
                    transform: "translate3d(" + (i / len) * 100 + "vw,0,0) scale(" + scale + ")",
                    opacity: scale
                },
                {
                    transform: "translate3d(" +
                        ((i / len) * 100 + 10) +
                        "vw,100vh,0) scale(" +
                        scale +
                        ")",
                    opacity: 1
                }
            ], {
                duration: Math.random() * 3000 + 3000,
                iterations: Infinity,
                delay: -(Math.random() * 5000)
            }
        );

        confettiPlayers.push(player);
    }
}
makeItConfetti();

$(function() {
    $(window).scroll(function() {
        $('.hat').each(function() {
            $(this).css('margin-top', -$(window).scrollTop() / parseInt($(this).attr('scrollSpeed')));

        });
    });
})

$(function() {
    $(document).scroll(function() {
        var $nav = $(".header");
        var $decor = $(".side-decor");
        var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 120;
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $nav.toggleClass("scrolled-full", $(this).scrollTop() > vh);
        $decor.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

!(function(e) {
    "use strict";
    e(window).on("load", function() {
            e(".loader-inner").fadeOut(),
                e(".loader")
                .delay(200)
                .fadeOut("slow");
        }),
        e("a.scroll").smoothScroll({ speed: 800, offset: -50 }),
        e(".slider").flexslider({
            animation: "fade",
            slideshow: !0,
            directionNav: !0,
            controlNav: !1,
            pauseOnAction: !1,
            animationSpeed: 500
        }),
        e(".review-slider").flexslider({
            animation: "fade",
            slideshow: !0,
            directionNav: !1,
            controlNav: !0,
            pauseOnAction: !1,
            animationSpeed: 1e3
        });
    var l = e(".mobile-but"),
        t = e(".main-nav ul");
    t.height();
    e(l).on("click", function() {
            return (
                e(".toggle-mobile-but").toggleClass("active"),
                t.slideToggle(),
                e(".main-nav li a").addClass("mobile"), !1
            );
        }),
        e(window).resize(function() {
            e(window).width() > 320 &&
                t.is(":hidden") &&
                (t.removeAttr("style"), e(".main-nav li a").removeClass("mobile"));
        }),
        e(".main-nav li a").on("click", function() {
            e(this).hasClass("mobile") &&
                (t.slideToggle(), e(".toggle-mobile-but").toggleClass("active"));
        }),
        // e(".background-img").each(function() {
        //     var l = e(this)
        //         .children("img")
        //         .attr("src");
        //     e(this)
        //         .css("background-image", 'url("' + l + '")')
        //         .css("background-position", "initial");
        // }),
        e(".countdown").countdown("2019/07/19", function(l) {
            e(this).html(l.strftime("%D days %H:%M:%S"));
        }),
        e(".block-tabs li").on("click", function() {
            if (!e(this).hasClass("active")) {
                var l = e(this).index() + 1;
                e(".block-tabs li.active").removeClass("active"),
                    e(this).addClass("active"),
                    e(".block-tab li.active").removeClass("active"),
                    e(".block-tab li:nth-child(" + l + ")").addClass("active");
            }
        }),

        e.stellar({ horizontalScrolling: !1, verticalOffset: 0 });
})(jQuery);