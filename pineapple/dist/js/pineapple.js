/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */
const pineapple = {
    navFadeThreshold: 500,
    slideanimThreshold: 40,
    ajax: function(content, onclickSelector = "pa-ajax-toggle", contentSelector = "pa-ajax-content") {
        document.getElementById(onclickSelector).addEventListener("click", function(event) {
            const httpRequest = new XMLHttpRequest();
            httpRequest.open("GET", content);
            httpRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById(contentSelector).innerHTML = this.responseText;
                }
            };
            httpRequest.send();
        });
        return pineapple;
    },
    pageLoader: function(interval = 1500) {
        pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval);
        return pineapple;
    },
    showPage: function() {
        document.getElementById("pa-loader").style.display = "none";
        document.getElementById("pa-loader-div").style.display = "block";
        return pineapple;
    },
    countdown: {
        init: function(timestamp, elementId, message) {
            console.log("hit");
            pineapple.countdown.date = new Date(timestamp).getTime();
            const oneSecondMilliseconds = 1e3;
            let secondsInMinute, secondsInHour;
            secondsInMinute = secondsInHour = 60;
            const hoursInDay = 24;
            const x = setInterval(function() {
                const now = new Date().getTime();
                const timeDifference = pineapple.countdown.date - now;
                const days = Math.floor(timeDifference / (oneSecondMilliseconds * secondsInMinute * secondsInHour * hoursInDay));
                const hours = Math.floor(timeDifference % (oneSecondMilliseconds * secondsInMinute * secondsInHour * hoursInDay) / (oneSecondMilliseconds * secondsInMinute * secondsInHour));
                const minutes = Math.floor(timeDifference % (oneSecondMilliseconds * secondsInMinute * secondsInHour) / (oneSecondMilliseconds * secondsInMinute));
                const seconds = Math.floor(timeDifference % (oneSecondMilliseconds * secondsInMinute) / oneSecondMilliseconds);
                document.getElementById(elementId).innerHTML = "" + days + " days,&nbsp; " + hours + " hours,&nbsp; " + minutes + " minutes,&nbsp; " + seconds + " seconds ";
                if (timeDifference < 0) {
                    clearInterval(x);
                    document.getElementById(elementId).innerHTML = message;
                }
            }, oneSecondMilliseconds);
            return pineapple.countdown;
        }
    }
};

window.addEventListener("scroll", function() {
    const topOfWindow = document.body.scrollTop;
    const windowHeight = window.innerHeight;
    document.body.querySelectorAll(".pa-slideanim").forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        if (position < topOfWindow + windowHeight - pineapple.slideanimThreshold) {
            element.classList.add("pa-slide");
        }
    });
    if (topOfWindow > pineapple.navFadeThreshold) {
        document.getElementsByClassName("pa-nav-fade")[0].classList.add("opaque");
        document.getElementsByClassName("pa-nav-fade a")[0].classList.add("opaque");
    } else {
        document.getElementsByClassName("pa-nav-fade")[0].classList.remove("opaque");
        document.getElementsByClassName("pa-nav-fade a")[0].classList.remove("opaque");
    }
});

module.exports = pineapple;