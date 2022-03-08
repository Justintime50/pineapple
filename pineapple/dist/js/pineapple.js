/*
 * Pineapple v2.3.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */
const pineapple = {
    defaultPageLoaderInterval: 1500,
    defaultNavFadeValue: 500,
    pageLoader: function(interval = pineapple.defaultPageLoaderInterval) {
        console.log("hello");
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

module.exports = pineapple;