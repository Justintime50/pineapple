/*
 * Pineapple v3.2.0 (https://github.com/justintime50/pineapple)
 * CSS and Javascript web development library
 * Licensed under MIT (https://github.com/justintime50/pineapple/blob/main/LICENSE)
 */
const pineapple = {
    disableSmoothScrolling: false,
    navFadeThreshold: 500,
    slideanimThreshold: 40,
    ajax: (content, contentSelector = "pa-ajax-content") => {
        fetch(content).then(response => response.text()).then(data => document.getElementById(contentSelector).innerHTML = data).catch(error => console.error(error));
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
    if (!pineapple.disableSmoothScrolling) {
        pineapple.scrollOffset = pineapple.scrollOffset = document.querySelector(".navbar") ? document.querySelector(".navbar").offsetTop : document.body.offsetTop;
        document.querySelectorAll("a").forEach(element => {
            element.addEventListener("click", function(event) {
                if (this.hash !== "" && this.pathname === location.pathname && (element.classList.contains("pa-scroll") || element.classList.contains("nav-link") || element.classList.contains("navbar-brand") || element.classList.contains("btn")) && !element.classList.contains("pa-noscroll")) {
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
    }
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

!function() {
    "use strict";
    function o() {
        var o = window, t = document;
        if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
            var l, e = o.HTMLElement || o.Element, r = 468, i = {
                scroll: o.scroll || o.scrollTo,
                scrollBy: o.scrollBy,
                elementScroll: e.prototype.scroll || n,
                scrollIntoView: e.prototype.scrollIntoView
            }, s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now, c = (l = o.navigator.userAgent, 
            new RegExp([ "MSIE ", "Trident/", "Edge/" ].join("|")).test(l) ? 1 : 0);
            o.scroll = o.scrollTo = function() {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset));
            }, o.scrollBy = function() {
                void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)));
            }, e.prototype.scroll = e.prototype.scrollTo = function() {
                if (void 0 !== arguments[0]) if (!0 !== f(arguments[0])) {
                    var o = arguments[0].left, t = arguments[0].top;
                    h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t);
                } else {
                    if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                    i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                }
            }, e.prototype.scrollBy = function() {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
            }, e.prototype.scrollIntoView = function() {
                if (!0 !== f(arguments[0])) {
                    var l = function(o) {
                        for (;o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), 
                        r = p(l, "X") && a(l, "X"), e || r); ) o = o.parentNode || o.host;
                        var l, e, r;
                        return o;
                    }(this), e = l.getBoundingClientRect(), r = this.getBoundingClientRect();
                    l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), 
                    "fixed" !== o.getComputedStyle(l).position && o.scrollBy({
                        left: e.left,
                        top: e.top,
                        behavior: "smooth"
                    })) : o.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    });
                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
            };
        }
        function n(o, t) {
            this.scrollLeft = o, this.scrollTop = t;
        }
        function f(o) {
            if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0;
            if ("object" == typeof o && "smooth" === o.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }
        function p(o, t) {
            return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0;
        }
        function a(t, l) {
            var e = o.getComputedStyle(t, null)["overflow" + l];
            return "auto" === e || "scroll" === e;
        }
        function d(t) {
            var l, e, i, c, n = (s() - t.startTime) / r;
            c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, 
            i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), 
            e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t));
        }
        function h(l, e, r) {
            var c, f, p, a, h = s();
            l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, 
            a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({
                scrollable: c,
                method: a,
                startTime: h,
                startX: f,
                startY: p,
                x: e,
                y: r
            });
        }
    }
    "object" == typeof exports && "undefined" != typeof module ? module.exports = {
        polyfill: o
    } : o();
}();