(function ($) {
    "use strict";

    function inViewport($el) {
        var elH = $el.outerHeight(),
            H   = $(window).height(),
            r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
        return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
    }

    $(document).ready(function () {

        var height2 = inViewport($(".sh-sidebar-content")) - 130;
        var divPos = $(".sh-sidebar-content").position();

        $(".sh-sidebar-content ul li a").each(function(){
            var chilHeight = $(this).parent().position().top - divPos.top;
            $(this).click(function(){

                var childHeight = $(this).height();
                var upValue = Math.abs( height2 - chilHeight )

                console.log( chilHeight );
                console.log( height2 );
                // console.log( chilHeight > height2 );
                console.log( childHeight );
                if( chilHeight > height2 ) {
                    $(".sh-sidebar-content").scrollTop(upValue + childHeight);
                } 
                // else {
                //     $(".sh-sidebar-content").scrollTop( - upValue );
                // }
            });
        });
    
        $(window).scroll(function () {

            var scrollBar = $(this).scrollTop();
            var navigate = document.querySelector(".sh-body-container div").offsetTop; 
    
            $(".sh-body-container div").each(function (index) {

                var elTop = $(this).offset().top;
                var elHeight = $(this).height();

                var sectionName = $(this).attr('id');
                var navigationMatch = $('.sh-sidebar-content ul li a[href="#' + sectionName + '"]');

                // var navigationMatch2 = $('.sh-sidebar-content ul li');
                // console.log( navigationMatch2.position().top - divPos.top );


                if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop()) &&
                    ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
                    navigationMatch.addClass('active-section');
                } else {
                    navigationMatch.removeClass('active-section');
                }
    
                if (scrollBar >= elTop - navigate && scrollBar < elTop + elHeight) {
                    $(".sh-sidebar-content ul li").eq(index).addClass("sidebarActive").siblings().removeClass("sidebarActive");
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