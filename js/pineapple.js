/**
 * PINEAPPLE v1.3
 * Created on the 4.0 Bootstrap framework - getbootstrap.com
 * (c) 2017, Justin Hammond
 * Code licensed under Creative Commons by 3.0. - creativecommons.org/licenses/by/3.0/
 *
 * DO NOT REMOVE THIS HEADER, PERMISSION FOR PUBLIC USE GRANTED
 *
 * ****************
 *
 * PINEAPPLE OBJECT
 * loglevel:
 * navFadeValue
 * testMessage:
 * playgroundMessage
 * pageLoader
 * showPage
 * countdown
 */

var pineapple = {

    /**
     *   -  Log Levels  -
     * 0 = none, (set to 0 for release)
     * 1 = Errors only,
     * 2 = 1 + Warnings,
     * 3 = 2 + logs,
     * 4 = 3 + info (Default for Dev)
     **/

    loglevel:     4,
    navFadeValue: 500,

    testMessage: function () {
      alert('I came from an external script!');
      return pineapple;
    },

    playgroundMessage: function () {
      alert('This playground is meant to test the Pineapple library and is not intended to be functional.');
      pineapple.log.test();
      return pineapple;
    },

    pageLoader: function (interval) {
        interval = interval || 1500; // 1500 makes the parameter optional
        pineapple.padeLoaderInput = setTimeout(pineapple.showPage, interval);
        return pineapple;
    },

    /* AJAX JAVASCRIPT
        original content - Jeffrey Woodward
    */
    ajax: function (page, selector, data){
        selector = selector || "#pa-ajax-content";
        data     = data || null;
        pineapple.log.info(selector);
        $.post(page, data, function(data){
            $(selector).html(data);
        });
        return pineapple;
    },
    /*

    function init(){
    $.post( "page.php", function( data ) {
        $( "#content" ).html( data );
    });
    }

    /* PAGE LOADER
        https:/www.w3schools.com/howto/howto_css_loader.asp
    */

    showPage: function () {
        $("#pa-loader").css('display',"none");
        $("#pa-loaderDiv").css('display',"block");
        return pineapple;
    },

    countdown: {
        init: function (timestamp, elmId, msg) {
            ///////////////////////////
            ///// COUNTDOWN TIMER /////
            // https://www.w3schools.com/howto/howto_js_countdown.asp
            // Syntax: <script>pineapple.countdown.init("2018-12-15","timer","Timer has expired");</script>

            // Set the date we're counting down to
            pineapple.countdown.date = new Date(timestamp).getTime();

            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = pineapple.countdown.date - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                document.getElementById(elmId).innerHTML = ''
                    + days + " days,&nbsp; "
                    + hours + " hours,&nbsp; "
                    + minutes + " minutes,&nbsp; "
                    + seconds + " seconds "
                ;

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById(elmId).innerHTML = msg;
                }
            }, 1000);
            return pineapple.countdown;
        }
    },
    log:{
        info:  function(val){
            if(pineapple.loglevel === 4){
                console.info(val);
            }
        },
        log:  function(val){
            if(pineapple.loglevel >= 3){
                console.log(val);
            }
        },
        warn: function(val){
            if(pineapple.loglevel >= 2){
                console.warn(val);
                console.trace();
            }
        },
        error:function(val){
            if(pineapple.loglevel  >= 1){
                console.error(val);
                console.trace();
            }
       },
       test:function() {
           console.log("Log level is set to " + pineapple.loglevel);
           pineapple.log.info('info');
           pineapple.log.log('log');
           pineapple.log.warn('warning');
           pineapple.log.error('error');
           return "Done with log test";
       }
    }
};

var pa = pineapple;
var PA = pineapple;

/*
    Reverse Compatibility remove in a few versions
*/
function pageLoader(input){
  pineapple.pageLoader(input);
  console.warn('pageLoader() has been moved to pineapple.pageLoader(), pageLoader will be removed in next version');
}

function showPage(){
  pineapple.showPage();
  console.warn('showPage() has been moved to pineapple.showPage(), showPage will be removed in next version');
}

$(document).ready(function(){
    /* SMOOTH SCROLLER
           https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
    */
    pineapple.scrollOffset = $('body').data('offset')-1;
    if(pineapple.scrollOffset === undefined || isNaN(pineapple.scrollOffset)) {
        pineapple.log.warn('data-offset must be defined in order to use smooth scroller');
    }
    else{
        // Add smooth scrolling to all links in the body
        $("a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (
                this.hash !== ""
                && this.pathname === location.pathname
                && (
                    $(this).hasClass('nav-link')
                    || $(this).is('button')
                    || $(this).find('button').length > 0
                    || $(this).hasClass('pa-scroll')
                )
                && !$(this).hasClass('pa-noscroll')
            ) {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;
                pineapple.log.info(hash);

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                try {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - pineapple.scrollOffset
                    }, 900, function () {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                }
                catch(e){
                    pineapple.log.warn('data-offset error:');
                    pineapple.log.warn({error:e});
                }
            } // End if
        });
    }
    /*
    SLIDEANIM EFFECT
        https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
    */
    $(window).scroll(function() {
    $(".pa-slideanim").each(function(){
      var pos = $(this).offset().top;
      var h = window.innerHeight;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h - 40) {
        $(this).addClass("slide");
      }
    });
  });

    /*
    NAV FADE EFFECT ON SCROLL
        https://stackoverflow.com/questions/23976498/fading-bootstrap-navbar-on-scrolldown-while-changing-text-color
        https://www.youtube.com/watch?v=6VZNH1gorws
    */

    $(window).scroll(function() {
        if($(this).scrollTop() > pineapple.navFadeValue) {
            $('.pa-nav-fade').addClass('opaque');
        } else {
            $('.pa-nav-fade').removeClass('opaque');
        }
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > pineapple.navFadeValue) {
            $('.pa-nav-fade a').addClass('opaque');
        } else {
            $('.pa-nav-fade a').removeClass('opaque');
        }
    });
});
