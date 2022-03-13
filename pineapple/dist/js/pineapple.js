/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */
const pineapple = {
    navFadeThreshold: 500,
    slideanimThreshold: 40,
    ajax: (content, contentSelector = "pa-ajax-content") => {
        fetch(content).then(response => response.text()).then(data => document.getElementById(contentSelector).innerHTML = data);
        return pineapple;
    },
    pageLoader: (interval = 1500) => {
        pineapple.pageLoaderInput = setTimeout(pineapple.showPage, interval);
        return pineapple;
    },
    showPage: () => {
        document.getElementById("pa-loader").style.display = "none";
        document.getElementById("pa-loader-div").style.display = "block";
        return pineapple;
    },
    countdown: {
        init: (timestamp, elementId, message) => {
            pineapple.countdown.date = new Date(timestamp).getTime();
            const oneSecondMilliseconds = 1e3;
            let secondsInMinute, secondsInHour;
            secondsInMinute = secondsInHour = 60;
            const hoursInDay = 24;
            const x = setInterval(() => {
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

function domReady(callback) {
    if (document.readyState != "loading") callback(); else document.addEventListener("DOMContentLoaded", callback);
}

domReady(() => {
    pineapple.scrollOffset = document.querySelector(".navbar").offsetTop || document.body.offsetTop;
    document.querySelectorAll("a").forEach(element => {
        element.addEventListener("click", function(event) {
            if (this.hash !== "" && this.pathname === location.pathname && (element.classList.contains("pa-scroll") || element.classList.contains("nav-link") || element.classList.contains("btn") || element.nodeName == "BUTTON" || document.getElementById("button")) && !element.classList.contains("pa-noscroll")) {
                event.preventDefault();
                const hash = this.hash;
                const hashHeight = document.getElementById(hash.replace("#", "")).offsetTop;
                window.scrollTo({
                    top: hashHeight - pineapple.scrollOffset,
                    behavior: "smooth"
                });
                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    window.location.hash = hash;
                }
                navFade();
            }
        });
    });
});

function navFade() {
    const navFadeValue = pineapple.navFadeThreshold != 500 ? pineapple.navFadeThreshold : document.getElementsByClassName("pa-banner")[0] ? document.getElementsByClassName("pa-banner")[0].offsetHeight : pineapple.navFadeThreshold;
    if (window.pageYOffset >= navFadeValue) {
        document.querySelectorAll(".pa-nav-fade").forEach(element => element.classList.add("opaque"));
        document.querySelectorAll(".pa-nav-fade a").forEach(element => element.classList.add("opaque"));
    } else {
        document.querySelectorAll(".pa-nav-fade").forEach(element => element.classList.remove("opaque"));
        document.querySelectorAll(".pa-nav-fade a").forEach(element => element.classList.remove("opaque"));
    }
}

const topOfWindow = document.body.scrollTop;

const windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
    document.body.querySelectorAll(".pa-slideanim").forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < topOfWindow + windowHeight - pineapple.slideanimThreshold) {
            element.classList.add("pa-slide");
        }
    });
    navFade();
});

if (typeof window === "undefined") {
    module.exports = pineapple;
}