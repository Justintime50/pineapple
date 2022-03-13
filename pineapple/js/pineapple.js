/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */

const pineapple = {
  navFadeThreshold: 500, // Number of pixels the navbar must be scrolled before fading
  slideanimThreshold: 40, // Number of pixels a `slideanim` element must scroll before it slides into view

  /** Ajax Onclick
   * Replace a container's contents with another HTML file with an onclick event
   * Syntax: <button onclick="pineapple.ajax('ajax.html', 'ajax-content-id')">Ajax Example</button>
   */
  ajax: (content, contentSelector = 'pa-ajax-content') => {
    fetch(content)
      .then((response) => response.text())
      .then((data) => (document.getElementById(contentSelector).innerHTML = data));

    return pineapple;
  },

  /** Page Loader
   * Source: https:/www.w3schools.com/howto/howto_css_loader.asp
   * Syntax: <script>pineapple.pageLoader(1500);</script>
   */
  pageLoader: (interval = 1500) => {
    pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval);

    return pineapple;
  },

  showPage: () => {
    document.getElementById('pa-loader').style.display = 'none';
    document.getElementById('pa-loader-div').style.display = 'block';

    return pineapple;
  },

  /** Countdown Timer
   * Source: https://www.w3schools.com/howto/howto_js_countdown.asp
   * Syntax: <script>pineapple.countdown.init('2018-12-15', 'timer', 'Timer has expired');</script>
   */
  countdown: {
    init: (timestamp, elementId, message) => {
      // Set the date we're counting down to
      pineapple.countdown.date = new Date(timestamp).getTime();

      const oneSecondMilliseconds = 1000;
      let secondsInMinute, secondsInHour;
      secondsInMinute = secondsInHour = 60;
      const hoursInDay = 24;
      // Update the countdown every 1 second
      const x = setInterval(() => {
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

/**
 * Check if the DOM is ready
 */
function domReady(callback) {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

/**
 * Only run the following wrapped code once the DOM is ready
 */
domReady(() => {
  /* Smooth Scroller
   * Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
   */
  pineapple.scrollOffset = document.querySelector('.navbar').offsetTop || document.body.offsetTop;
  // Add smooth scrolling to all links in the body (buttons must be a tags with the role of a button)
  document.querySelectorAll('a').forEach((element) => {
    element.addEventListener('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      // TODO: A hash of `#` such as the default "home" behavior will not smooth scroll
      if (
        this.hash !== '' &&
        this.pathname === location.pathname &&
        (element.classList.contains('pa-scroll') ||
          element.classList.contains('nav-link') ||
          element.classList.contains('navbar-brand') ||
          element.classList.contains('btn')) &&
        !element.classList.contains('pa-noscroll')
      ) {
        // Prevent default anchor click behavior (jump to top of screen)
        event.preventDefault();

        // Store the URL hash (eg: #footer)
        const hash = this.hash;

        // Add smooth page scrolling to links
        const hashHeight = document.getElementById(hash.replace('#', '')).offsetTop;
        window.scrollTo({
          top: hashHeight - pineapple.scrollOffset,
          behavior: 'smooth', // This behavior is not compatible with Safari and requires the smooth-scroll-pollyfill: https://github.com/iamdustan/smoothscroll
        });

        // Don't jump to the anchor point after scrolling to the offset
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }

        // Update the navbar colors if necessary after a jump
        navFade();
      }
    });
  });
});

/** Nav Fade on Scroll
 * Source: https://stackoverflow.com/questions/23976498/fading-bootstrap-navbar-on-scrolldown-while-changing-text-color
 */
function navFade() {
  const navFadeValue =
    pineapple.navFadeThreshold != 500 // Not the default, user overridden
      ? pineapple.navFadeThreshold
      : document.getElementsByClassName('pa-banner')[0] // If there is a pineapple banner, use that height
      ? document.getElementsByClassName('pa-banner')[0].offsetHeight
      : pineapple.navFadeThreshold; // Fallback to the default
  if (window.pageYOffset >= navFadeValue) {
    document.querySelectorAll('.pa-nav-fade').forEach((element) => element.classList.add('opaque'));
    document.querySelectorAll('.pa-nav-fade a').forEach((element) => element.classList.add('opaque'));
  } else {
    document.querySelectorAll('.pa-nav-fade').forEach((element) => element.classList.remove('opaque'));
    document.querySelectorAll('.pa-nav-fade a').forEach((element) => element.classList.remove('opaque'));
  }
}

/**
 * All logic that requires a `scroll` event should be placed in the following block.
 * NOTE: Be careful as everything inside this block gets run whenever the page moves even 1px
 */
const topOfWindow = document.body.scrollTop;
const windowHeight = window.innerHeight;
// TODO: Look into debouncing these scroll events (if necessary due to performance drains)
window.addEventListener('scroll', () => {
  /** Slideanim
   * Source: https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
   */
  document.body.querySelectorAll('.pa-slideanim').forEach((element) => {
    const position = element.getBoundingClientRect().top;
    if (position < topOfWindow + windowHeight - pineapple.slideanimThreshold) {
      element.classList.add('pa-slide');
    }
  });

  /**
   * Nav Fade on Scroll (called inside this block, defined elsewhere)
   */
  navFade();
});

// Export the module for use in Node (eg: Webpack)
if (typeof window === 'undefined') {
  module.exports = pineapple;
}
