
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".not-sticky");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('not-sticky').addClass("is-sticky");
        } else {
            header.removeClass("is-sticky").addClass('not-sticky');
        }
    });
});