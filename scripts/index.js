"use strict";

// scroll to top
$(function () {
    // #back-to-top を隠す
    $('#back-to-top').hide();
    // スクロールが十分されたら, #back-to-top を表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top a').click(function () {
        // スムーズスクロールをする
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
})
