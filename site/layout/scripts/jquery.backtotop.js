$("#backtotop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 600);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $("#backtotop").addClass("visible");
    } else {
        $("#backtotop").removeClass("visible");
    }
});

$(document).ready(function() {
    $('[data-href]').each(function(idx, el) {
        $(el).addClass('cp');        
        $(el).on('click', function() {
            window.location.href = $(el).data('href');
        });
    });
})