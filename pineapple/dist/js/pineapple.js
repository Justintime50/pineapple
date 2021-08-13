/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */
const pineapple = {
    navFadeValue: 500,
    ajax: function(content, onclickSelector = "#pa-ajax-toggle", contentSelector = "#pa-ajax-content") {
        $(onclickSelector).on("click", function(event) {
            $.get(content, function(content) {
                $(contentSelector).html(content);
            });
        });
        return pineapple;
    },
    pageLoader: function(interval = 1500) {
        pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval);
        return pineapple;
    },
    showPage: function() {
        $("#pa-loader").css("display", "none");
        $("#pa-loader-div").css("display", "block");
        return pineapple;
    },
    countdown: {
        init: function(timestamp, elementId, message) {
            pineapple.countdown.date = new Date(timestamp).getTime();
            const x = setInterval(function() {
                const now = new Date().getTime();
                const timeDifference = pineapple.countdown.date - now;
                const days = Math.floor(timeDifference / (1e3 * 60 * 60 * 24));
                const hours = Math.floor(timeDifference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
                const minutes = Math.floor(timeDifference % (1e3 * 60 * 60) / (1e3 * 60));
                const seconds = Math.floor(timeDifference % (1e3 * 60) / 1e3);
                document.getElementById(elementId).innerHTML = "" + days + " days,&nbsp; " + hours + " hours,&nbsp; " + minutes + " minutes,&nbsp; " + seconds + " seconds ";
                if (timeDifference < 0) {
                    clearInterval(x);
                    document.getElementById(elementId).innerHTML = message;
                }
            }, 1e3);
            return pineapple.countdown;
        }
    }
};

$(document).ready(function() {
    pineapple.scrollOffset = $("body").data("offset") - 1 || $(".navbar").height();
    $("a").on("click", function(event) {
        if (this.hash !== "" && this.pathname === location.pathname && ($(this).hasClass("pa-scroll") || $(this).hasClass("nav-link") || $(this).hasClass("btn") || $(this).is("button") || $(this).find("button").length > 0) && !$(this).hasClass("pa-noscroll")) {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - pineapple.scrollOffset
            }, 900, function() {
                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    window.location.hash = hash;
                }
            });
        }
    });
    $(window).scroll(function() {
        $(".pa-slideanim").each(function() {
            const pos = $(this).offset().top;
            const h = window.innerHeight;
            const winTop = $(window).scrollTop();
            if (pos < winTop + h - 40) {
                $(this).addClass("pa-slide");
            }
        });
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > pineapple.navFadeValue) {
            $(".pa-nav-fade").addClass("opaque");
            $(".pa-nav-fade a").addClass("opaque");
        } else {
            $(".pa-nav-fade").removeClass("opaque");
            $(".pa-nav-fade a").removeClass("opaque");
        }
    });
});

module.exports = pineapple;