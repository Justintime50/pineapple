/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */

/*
 * ** Pineapple Object **
 * ajax
 * pageLoader
 * showPage
 * countdown
 * Smooth Scroller
 * Slideanim
 * Nav Fade
 */

const pineapple = {
  defaultPageLoaderInterval: 1500,
  defaultNavFadeValue: 500,

  /* Ajax Onclick
    Replace a container's contents with another HTML file with an onclick event
    Syntax: <script>pineapple.ajax('ajax.html', '#ajax-onclick-id', '#ajax-content-id')</script>
  */
  // ajax: function (content, onclickSelector = '#pa-ajax-toggle', contentSelector = '#pa-ajax-content') {
  //   $(onclickSelector).on('click', function (event) {
  //     $.get(content, function (content) {
  //       $(contentSelector).html(content);
  //     });
  //   });

  //   return pineapple;
  // },

  /* Page Loader
    Source: https:/www.w3schools.com/howto/howto_css_loader.asp
    Syntax: <script>pineapple.pageLoader(1500);</script>
  */
  pageLoader: function (interval = pineapple.defaultPageLoaderInterval) {
    console.log('hello');
    pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval);

    return pineapple;
  },

  showPage: function () {
    document.getElementById('pa-loader').style.display = 'none';
    document.getElementById('pa-loader-div').style.display = 'block';

    return pineapple;
  },

  /* Countdown Timer
    Source: https://www.w3schools.com/howto/howto_js_countdown.asp
    Syntax: <script>pineapple.countdown.init('2018-12-15', 'timer', 'Timer has expired');</script>
  */
  countdown: {
    init: function (timestamp, elementId, message) {
      console.log('hit');
      // Set the date we're counting down to
      pineapple.countdown.date = new Date(timestamp).getTime();

      const oneSecondMilliseconds = 1000;
      let secondsInMinute, secondsInHour;
      secondsInMinute = secondsInHour = 60;
      const hoursInDay = 24;
      // Update the countdown every 1 second
      const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the timeDifference between now and the countdown date
        const timeDifference = pineapple.countdown.date - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(
          timeDifference / (oneSecondMilliseconds * secondsInMinute * secondsInHour * hoursInDay)
        );
        const hours = Math.floor(
          (timeDifference % (oneSecondMilliseconds * secondsInMinute * secondsInHour * hoursInDay)) /
            (oneSecondMilliseconds * secondsInMinute * secondsInHour)
        );
        const minutes = Math.floor(
          (timeDifference % (oneSecondMilliseconds * secondsInMinute * secondsInHour)) /
            (oneSecondMilliseconds * secondsInMinute)
        );
        const seconds = Math.floor(
          (timeDifference % (oneSecondMilliseconds * secondsInMinute)) / oneSecondMilliseconds
        );

        // Display the result in the element with id='my_id'
        document.getElementById(elementId).innerHTML =
          '' + days + ' days,&nbsp; ' + hours + ' hours,&nbsp; ' + minutes + ' minutes,&nbsp; ' + seconds + ' seconds ';

        // If the countdown is finished, write some text
        if (timeDifference < 0) {
          clearInterval(x);
          document.getElementById(elementId).innerHTML = message;
        }
      }, oneSecondMilliseconds);

      return pineapple.countdown;
    },
  },
};

// $(document).ready(function () {
//   /* Smooth Scroller
//     Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
//   */
//   pineapple.scrollOffset = $('body').data('offset') - 1 || $('.navbar').height();
//   // Add smooth scrolling to all links in the body
//   $('a').on('click', function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (
//       this.hash !== '' &&
//       this.pathname === location.pathname &&
//       ($(this).hasClass('pa-scroll') ||
//         $(this).hasClass('nav-link') ||
//         $(this).hasClass('btn') ||
//         $(this).is('button') ||
//         $(this).find('button').length > 0) &&
//       !$(this).hasClass('pa-noscroll')
//     ) {
//       // Prevent default anchor click behavior (jump to top of screen)
//       event.preventDefault();

//       // Store hash
//       const hash = this.hash;
//       // pineapple.log.info(hash)

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top - pineapple.scrollOffset,
//         },
//         900,
//         function () {
//           // Don't jump to the anchor point after scrolling to the offset
//           if (history.pushState) {
//             history.pushState(null, null, hash);
//           } else {
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;
//           }
//         }
//       );
//     }
//   });

//   /* Slideanim
//     Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
//   */
//   $(window).scroll(function () {
//     $('.pa-slideanim').each(function () {
//       const pos = $(this).offset().top;
//       const h = window.innerHeight;
//       const winTop = $(window).scrollTop();
//       if (pos < winTop + h - 40) {
//         $(this).addClass('pa-slide');
//       }
//     });
//   });

//   /* Nav Fade on Scroll
//     Source: https://stackoverflow.com/questions/23976498/fading-bootstrap-navbar-on-scrolldown-while-changing-text-color
//   */
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > pineapple.defaultNavFadeValue) {
//       $('.pa-nav-fade').addClass('opaque');
//       $('.pa-nav-fade a').addClass('opaque');
//     } else {
//       $('.pa-nav-fade').removeClass('opaque');
//       $('.pa-nav-fade a').removeClass('opaque');
//     }
//   });
// });

// Export the module for items such as Webpack
module.exports = pineapple;
