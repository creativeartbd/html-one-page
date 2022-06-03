(function ($) {
    "use strict";
    $(document).ready(function () {

        $(window).scroll(function () {

            var scrollBar = $(this).scrollTop();
            var navigate = document.querySelector(".sh-body-container div").offsetTop
    
            $(".sh-body-container div").each(function (index) {
                var elTop = $(this).offset().top;
                var elHeight = $(this).height();
    
                if (scrollBar >= elTop - navigate && scrollBar < elTop + elHeight) {
                    $(".sh-body-sidebar ul li").eq(index).addClass("sidebarActive").siblings().removeClass("sidebarActive");
                }
            });
        });

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