/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */

/*
 * ** Pineapple Object **
 * loglevel
 * navFadeValue
 * ajax
 * pageLoader
 * showPage
 * countdown
 * Smooth Scroller
 * Slideanim
 * Nav Fade
 */

const pineapple = {
  // Constants
  // loglevel: 1,
  navFadeValue: 500,

  /**
   * TODO: rework logging and re-include in the library in a future release
   *   -  Log Levels  -
   * 0 = none, (set to 0 for release)
   * 1 = Errors only,
   * 2 = 1 + Warnings,
   * 3 = 2 + Logs,
   * 4 = 3 + Info (Default for Dev)
   **/

  // log: {
  //   info: function (value) {
  //     if (pineapple.loglevel === 4) {
  //       console.info(value)
  //     }
  //   },
  //   log: function (value) {
  //     if (pineapple.loglevel >= 3) {
  //       console.log(value)
  //     }
  //   },
  //   warn: function (value) {
  //     if (pineapple.loglevel >= 2) {
  //       console.warn(value)
  //       console.trace()
  //     }
  //   },
  //   error: function (value) {
  //     if (pineapple.loglevel >= 1) {
  //       console.error(value)
  //       console.trace()
  //     }
  //   },
  //   test: function () {
  //     console.log('Log level is set to ' + pineapple.loglevel)
  //     pineapple.log.info('info')
  //     pineapple.log.log('log')
  //     pineapple.log.warn('warning')
  //     pineapple.log.error('error')
  //     return 'Done with log test'
  //   }
  // },

  /* Ajax Onclick
    Replace a container's contents with another HTML file with an onclick event
    Syntax: <script>pineapple.ajax('ajax.html', '#ajax-onclick-id', '#ajax-content-id')</script>
  */
  ajax: function (content, onclickSelector = '#pa-ajax-toggle', contentSelector = '#pa-ajax-content') {
    // pineapple.log.info(onclickSelector)
    // pineapple.log.info(contentSelector)

    $(onclickSelector).on('click', function (event) {
      $.get(content, function (content) {
        $(contentSelector).html(content)
      })
    })

    return pineapple
  },

  /* Page Loader
    Source: https:/www.w3schools.com/howto/howto_css_loader.asp
    Syntax: <script>pineapple.pageLoader(1500);</script>
  */
  pageLoader: function (interval = 1500) {
    pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval)

    return pineapple
  },

  showPage: function () {
    $('#pa-loader').css('display', 'none')
    $('#pa-loader-div').css('display', 'block')

    return pineapple
  },

  /* Countdown Timer
    Source: https://www.w3schools.com/howto/howto_js_countdown.asp
    Syntax: <script>pineapple.countdown.init('2018-12-15', 'timer', 'Timer has expired');</script>
  */
  countdown: {
    init: function (timestamp, elementId, message) {
      // Set the date we're counting down to
      pineapple.countdown.date = new Date(timestamp).getTime()

      // Update the countdown every 1 second
      const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime()

        // Find the timeDifference between now and the countdown date
        const timeDifference = pineapple.countdown.date - now

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        // Display the result in the element with id='demo'
        document.getElementById(elementId).innerHTML = '' +
          days + ' days,&nbsp; ' +
          hours + ' hours,&nbsp; ' +
          minutes + ' minutes,&nbsp; ' +
          seconds + ' seconds '

        // If the count down is finished, write some text
        if (timeDifference < 0) {
          clearInterval(x)
          document.getElementById(elementId).innerHTML = message
        }
      }, 1000)

      return pineapple.countdown
    }
  }
}

$(document).ready(function () {
  /* Smooth Scroller
    Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
  */
  pineapple.scrollOffset = $('body').data('offset') - 1 || $('.navbar').height()
  // Add smooth scrolling to all links in the body
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (
      this.hash !== '' &&
      this.pathname === location.pathname &&
      (
        $(this).hasClass('pa-scroll') ||
        $(this).hasClass('nav-link') ||
        $(this).hasClass('btn') ||
        $(this).is('button') ||
        $(this).find('button').length > 0
      ) && !$(this).hasClass('pa-noscroll')
    ) {
      // Prevent default anchor click behavior (jump to top of screen)
      event.preventDefault()

      // Store hash
      const hash = this.hash
      // pineapple.log.info(hash)

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - pineapple.scrollOffset
      }, 900, function () {
        // Don't jump to the anchor point after scrolling to the offset
        if (history.pushState) {
          history.pushState(null, null, hash)
        } else {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      })
    }
  })

  /* Slideanim
    Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
  */
  $(window).scroll(function () {
    $('.pa-slideanim').each(function () {
      const pos = $(this).offset().top
      const h = window.innerHeight
      const winTop = $(window).scrollTop()
      if (pos < winTop + h - 40) {
        $(this).addClass('pa-slide')
      }
    })
  })

  /* Nav Fade on Scroll
    Source: https://stackoverflow.com/questions/23976498/fading-bootstrap-navbar-on-scrolldown-while-changing-text-color
  */
  $(window).scroll(function () {
    if ($(this).scrollTop() > pineapple.navFadeValue) {
      $('.pa-nav-fade').addClass('opaque')
      $('.pa-nav-fade a').addClass('opaque')
    } else {
      $('.pa-nav-fade').removeClass('opaque')
      $('.pa-nav-fade a').removeClass('opaque')
    }
  })
})

// Export the module for items such as Webpack
module.exports = pineapple
