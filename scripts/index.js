"use strict";

// scroll to top
$(function () {
    // アンカーへのスクロールをスムーズにする
    $('a[href^="#"]').click(function() {
        var duration = 500;
        var href = $(this).attr('href'); // アンカーを取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, duration, "swing");
		return false;
	});

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
