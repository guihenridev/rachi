$(window).scroll(function(event) {

    var yOffset = window.pageYOffset;
    var breakpoint = 80;
    if (yOffset > breakpoint) {
        $("#go-top").addClass('active-go');
    } else {
        $("#go-top").removeClass('active-go');
    }

});