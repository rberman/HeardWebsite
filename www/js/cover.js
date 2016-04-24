/**
 * Created by rberman on 4/24/16.
 */


$(document).ready(function(){

    // Slide down animation
    // Source: http://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
});