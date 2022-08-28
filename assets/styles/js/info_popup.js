(function($) {
    $(document).ready(function() {
        $('.fa-solid').on('click', function() {
            $('#overlay').addClass('overlay-active');
            $(".pop-up").fadeIn("fast", function() {
                $('.pop-up').addClass('pop-up-active');
            });
        });
        $('.btn-close,#overlay').on('click', function() {
            $('#overlay').removeClass('overlay-active');
            $(".pop-up").fadeOut("fast", function() {
                $('.pop-up').removeClass('pop-up-active');
            });
        });
    });
})(jQuery);