(function ($) {
    "use strict";
    $(document).ready(function () {

        $(".sh-see-more").click(function(e){
            e.preventDefault();
            var that = $(this);
            that.prev(".sh-see-more-details").toggleClass("is-active");
        });

        $(".hide-show").click(function(e){
            e.preventDefault();
            var that = $(this);
            var plusSign = that.children("a").text();
            if( "+" == plusSign ) {
                that.children("a").text("-");
            } else {
                that.children("a").text("+");
            }
            var faq = that.next(".sh-faq-answer").toggleClass("faq-active");;
        });

        $(".sh-mobile-calculator-icon").click(function() {
            $(".sh-calculator").addClass("show-calculator");
            $(".show-filter").show();
            $(".show-filter a").click(function() {
                $(".sh-calculator").removeClass("show-calculator");
            });
        });

    });
})(jQuery);