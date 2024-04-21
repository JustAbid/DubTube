(function () {
  "use strict";
  function p(o) {
    return typeof o == "function" ? { main: o } : o;
  }
  class c {
    static isIos() {
      return (
        this.isMobile() && navigator.userAgent.toLowerCase().includes("safari")
      );
    }
    static isYouTubeMobile() {
      return window.location.href.includes("m.youtube.com");
    }
    static isMobileSite() {
      return window.location.href.includes("youtube.com")
        ? c.isYouTubeMobile()
        : c.isMobile();
    }
    static isMobile() {
      return "ontouchstart" in document.documentElement;
    }
    static isFirefoxMobile() {
      return this.isMobile() && !1;
    }
  }
  class u {
    deepClone(e) {
      return JSON.parse(JSON.stringify(e));
    }
    monitorUrlChange(e) {
      let t = window.location.href;
      setInterval(() => {
        const n = window.location.href;
        n !== t &&
          ((t = n),
          console.log("curr url == " + n),
          document.dispatchEvent(new CustomEvent(e)));
      }, 60);
    }
    createFetchInterceptor(e, t) {
      const n = window.fetch;
      window.fetch = async (...s) =>
        s[0] instanceof Request && e(s[0])
          ? (console.log("Intercepted request:", s[0]),
            n(...s).then(
              (i) => (
                i
                  .clone()
                  .json()
                  .then((l) => {
                    console.log("Intercepted response data:", l), t(l);
                  }),
                i
              )
            ))
          : n(...s);
    }
    createXHRInterceptor(e, t) {
      const n = window.XMLHttpRequest;
      function s() {
        const i = new n(),
          d = i.open;
        i.open = function (h, r, v = !0, b, R) {
          return (
            (this._url = typeof r == "string" ? r : r.toString()),
            d.apply(this, arguments)
          );
        };
        const l = i.send;
        return (
          (i.send = function (...h) {
            return (
              e(this._url) &&
                (console.log("Intercepted request:", this._url),
                this.addEventListener("readystatechange", () => {
                  if (this.readyState === 4 && this.status === 200)
                    try {
                      const r = JSON.parse(this.responseText);
                      console.log("Intercepted response data:", r), t(r, this._url);
                    } catch (r) {
                      console.error("Error occurred while parsing response data", r);
                    }
                })),
              l.apply(this, h)
            );
          }),
          i
        );
      }
      window.XMLHttpRequest = s;
    }
    dispatchDataFetchedEvent(e, t) {
      const n = new CustomEvent(e, { detail: t });
      document.dispatchEvent(n);
    }
  }
  class f extends u {
    start() {
      const e = HTMLMediaElement.prototype.addEventListener;
      (HTMLMediaElement.prototype.addEventListener = function (t, n, s) {
        if (t === "volumechange") {
          console.log("volumechange!!");
          return;
        }
        e.call(this, t, n, s);
      }),
        window.location.href.includes("/watch") &&
          document.addEventListener("DOMContentLoaded", () => {
            this.dispatchPlayerInfoResponseFetchedEvent(
              window.ytInitialPlayerResponse
            );
          }),
        this.monitorUrlChange("yt-navigate-finish"),
        this.createFetchInterceptor(
          (t) => t.url.includes("/youtubei/v1/player?") && t.method === "POST",
          (t) => this.dispatchPlayerInfoResponseFetchedEvent(t)
        );
    }
    modifyCaptionTrackBaseUrl(e) {
      let t = this.deepClone(e);
      if (t.captions)
        for (let n of t.captions.playerCaptionsTracklistRenderer.captionTracks)
          n.baseUrl = "https://m.youtube.com" + n.baseUrl;
      return t;
    }
    dispatchPlayerInfoResponseFetchedEvent(e) {
      this.dispatchDataFetchedEvent("yt-page-data-fetched", {
        pageData: {
          url: new URL(window.location.href).pathname + "?",
          playerResponse: this.modifyCaptionTrackBaseUrl(e),
        },
      });
    }
  }
  class m {
    static getQueryParam(e, t) {
      return new URLSearchParams(new URL(e).search).get(t);
    }
    static checkFormat(e, t) {
      return e.test(t);
    }
    static isVideoDetailsPage() {
      if (window.location.href.includes("youtube.com"))
        return window.location.href.includes("/watch?");
      if (window.location.href.includes("udemy.com")) {
        const e = /^\/course\/.+\/learn\/lecture\/\d+$/,
          t = new URL(window.location.href).pathname;
        return e.test(t);
      }
      return !1;
    }
  }
  class w extends u {
    start() {
      this.isLogin() &&
        this.createXHRInterceptor(
          (e) => {
            const t = e.startsWith("http") ? new URL(e).pathname : e;
            try {
              return m.checkFormat(
                /^\/api-2\.0\/users\/me\/subscribed-courses\/\d+\/lectures\/\d+\/$/,
                t
              );
            } catch (n) {
              return console.log("request == " + e, n), !1;
            }
          },
          (e, t) => {
            e.asset.asset_type === "Video" &&
              this.dispatchDataFetchedEvent("udemy-page-data-fetched", {
                courseId: this.extractCourseId(new URL(t).pathname),
                data: e,
              });
          }
        ),
        this.monitorUrlChange("udemy-navigate-finish");
    }
    isLogin() {
      const e = document.cookie.split(";");
      for (let t of e) {
        let n = t.trim();
        if (n.startsWith("ud_cache_logged_in="))
          return n === "ud_cache_logged_in=1";
      }
      return !1;
    }
    extractCourseId(e) {
      const t =
          /\/api-2\.0\/users\/me\/subscribed-courses\/(\d+)\/lectures\/\d+\//,
        n = e.match(t);
      return n ? Number.parseInt(n[1]) : void 0;
    }
  }
  const g = p(() => {
    c.isYouTubeMobile()
      ? new f().start()
      : window.location.href.includes("udemy.com") && new w().start();
  });
  function a(o, ...e) {}
  var y = {
    debug: (...o) => a(console.debug, ...o),
    log: (...o) => a(console.log, ...o),
    warn: (...o) => a(console.warn, ...o),
    error: (...o) => a(console.error, ...o),
  };
  (async () => {
    try {
      await g.main();
    } catch (o) {
      y.error('The unlisted script "injectedScript" crashed on startup!', o);
    }
  })();
})();
