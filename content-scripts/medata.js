var R0 = Object.defineProperty;
var D0 = (ke, Fe, je) =>
  Fe in ke
    ? R0(ke, Fe, { enumerable: !0, configurable: !0, writable: !0, value: je })
    : (ke[Fe] = je);
var Ye = (ke, Fe, je) => (D0(ke, typeof Fe != "symbol" ? Fe + "" : Fe, je), je),
  es = (ke, Fe, je) => {
    if (!Fe.has(ke)) throw TypeError("Cannot " + je);
  };
var Xi = (ke, Fe, je) => (
    es(ke, Fe, "read from private field"), je ? je.call(ke) : Fe.get(ke)
  ),
  oi = (ke, Fe, je) => {
    if (Fe.has(ke))
      throw TypeError("Cannot add the same private member more than once");
    Fe instanceof WeakSet ? Fe.add(ke) : Fe.set(ke, je);
  },
  ml = (ke, Fe, je, Qi) => (
    es(ke, Fe, "write to private field"),
    Qi ? Qi.call(ke, je) : Fe.set(ke, je),
    je
  );
var ns = (ke, Fe, je) => (es(ke, Fe, "access private method"), je);
(function () {
  "use strict";
  var kr, cr, fa, Hr, la, ca, vl, ha, yl;
  var ke =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function Fe(g) {
    return g &&
      g.__esModule &&
      Object.prototype.hasOwnProperty.call(g, "default")
      ? g.default
      : g;
  }
  var je = { exports: {} };
  (function (g, h) {
    (function (u, A) {
      A(g);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ke,
      function (u) {
        var A, N;
        if (
          !(
            (N = (A = globalThis.chrome) == null ? void 0 : A.runtime) !=
              null && N.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const M = "The message port closed before a response was received.",
            U = (z) => {
              const K = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(K).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class Y extends WeakMap {
                constructor(j, Te = void 0) {
                  super(Te), (this.createItem = j);
                }
                get(j) {
                  return (
                    this.has(j) || this.set(j, this.createItem(j)), super.get(j)
                  );
                }
              }
              const ue = (re) =>
                  re && typeof re == "object" && typeof re.then == "function",
                me =
                  (re, j) =>
                  (...Te) => {
                    z.runtime.lastError
                      ? re.reject(new Error(z.runtime.lastError.message))
                      : j.singleCallbackArg ||
                        (Te.length <= 1 && j.singleCallbackArg !== !1)
                      ? re.resolve(Te[0])
                      : re.resolve(Te);
                  },
                de = (re) => (re == 1 ? "argument" : "arguments"),
                De = (re, j) =>
                  function (Me, ...Ve) {
                    if (Ve.length < j.minArgs)
                      throw new Error(
                        `Expected at least ${j.minArgs} ${de(
                          j.minArgs
                        )} for ${re}(), got ${Ve.length}`
                      );
                    if (Ve.length > j.maxArgs)
                      throw new Error(
                        `Expected at most ${j.maxArgs} ${de(
                          j.maxArgs
                        )} for ${re}(), got ${Ve.length}`
                      );
                    return new Promise((ce, Je) => {
                      if (j.fallbackToNoCallback)
                        try {
                          Me[re](...Ve, me({ resolve: ce, reject: Je }, j));
                        } catch (be) {
                          console.warn(
                            `${re} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            be
                          ),
                            Me[re](...Ve),
                            (j.fallbackToNoCallback = !1),
                            (j.noCallback = !0),
                            ce();
                        }
                      else
                        j.noCallback
                          ? (Me[re](...Ve), ce())
                          : Me[re](...Ve, me({ resolve: ce, reject: Je }, j));
                    });
                  },
                ee = (re, j, Te) =>
                  new Proxy(j, {
                    apply(Me, Ve, ce) {
                      return Te.call(Ve, re, ...ce);
                    },
                  });
              let $ = Function.call.bind(Object.prototype.hasOwnProperty);
              const Ie = (re, j = {}, Te = {}) => {
                  let Me = Object.create(null),
                    Ve = {
                      has(Je, be) {
                        return be in re || be in Me;
                      },
                      get(Je, be, dn) {
                        if (be in Me) return Me[be];
                        if (!(be in re)) return;
                        let Ce = re[be];
                        if (typeof Ce == "function")
                          if (typeof j[be] == "function")
                            Ce = ee(re, re[be], j[be]);
                          else if ($(Te, be)) {
                            let Qe = De(be, Te[be]);
                            Ce = ee(re, re[be], Qe);
                          } else Ce = Ce.bind(re);
                        else if (
                          typeof Ce == "object" &&
                          Ce !== null &&
                          ($(j, be) || $(Te, be))
                        )
                          Ce = Ie(Ce, j[be], Te[be]);
                        else if ($(Te, "*")) Ce = Ie(Ce, j[be], Te["*"]);
                        else
                          return (
                            Object.defineProperty(Me, be, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return re[be];
                              },
                              set(Qe) {
                                re[be] = Qe;
                              },
                            }),
                            Ce
                          );
                        return (Me[be] = Ce), Ce;
                      },
                      set(Je, be, dn, Ce) {
                        return be in Me ? (Me[be] = dn) : (re[be] = dn), !0;
                      },
                      defineProperty(Je, be, dn) {
                        return Reflect.defineProperty(Me, be, dn);
                      },
                      deleteProperty(Je, be) {
                        return Reflect.deleteProperty(Me, be);
                      },
                    },
                    ce = Object.create(re);
                  return new Proxy(ce, Ve);
                },
                ne = (re) => ({
                  addListener(j, Te, ...Me) {
                    j.addListener(re.get(Te), ...Me);
                  },
                  hasListener(j, Te) {
                    return j.hasListener(re.get(Te));
                  },
                  removeListener(j, Te) {
                    j.removeListener(re.get(Te));
                  },
                }),
                Wn = new Y((re) =>
                  typeof re != "function"
                    ? re
                    : function (Te) {
                        const Me = Ie(
                          Te,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        re(Me);
                      }
                ),
                ze = new Y((re) =>
                  typeof re != "function"
                    ? re
                    : function (Te, Me, Ve) {
                        let ce = !1,
                          Je,
                          be = new Promise((Cn) => {
                            Je = function (un) {
                              (ce = !0), Cn(un);
                            };
                          }),
                          dn;
                        try {
                          dn = re(Te, Me, Je);
                        } catch (Cn) {
                          dn = Promise.reject(Cn);
                        }
                        const Ce = dn !== !0 && ue(dn);
                        if (dn !== !0 && !Ce && !ce) return !1;
                        const Qe = (Cn) => {
                          Cn.then(
                            (un) => {
                              Ve(un);
                            },
                            (un) => {
                              let fn;
                              un &&
                              (un instanceof Error ||
                                typeof un.message == "string")
                                ? (fn = un.message)
                                : (fn = "An unexpected error occurred"),
                                Ve({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: fn,
                                });
                            }
                          ).catch((un) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              un
                            );
                          });
                        };
                        return Qe(Ce ? dn : be), !0;
                      }
                ),
                an = ({ reject: re, resolve: j }, Te) => {
                  z.runtime.lastError
                    ? z.runtime.lastError.message === M
                      ? j()
                      : re(new Error(z.runtime.lastError.message))
                    : Te && Te.__mozWebExtensionPolyfillReject__
                    ? re(new Error(Te.message))
                    : j(Te);
                },
                $e = (re, j, Te, ...Me) => {
                  if (Me.length < j.minArgs)
                    throw new Error(
                      `Expected at least ${j.minArgs} ${de(
                        j.minArgs
                      )} for ${re}(), got ${Me.length}`
                    );
                  if (Me.length > j.maxArgs)
                    throw new Error(
                      `Expected at most ${j.maxArgs} ${de(
                        j.maxArgs
                      )} for ${re}(), got ${Me.length}`
                    );
                  return new Promise((Ve, ce) => {
                    const Je = an.bind(null, { resolve: Ve, reject: ce });
                    Me.push(Je), Te.sendMessage(...Me);
                  });
                },
                bn = {
                  devtools: { network: { onRequestFinished: ne(Wn) } },
                  runtime: {
                    onMessage: ne(ze),
                    onMessageExternal: ne(ze),
                    sendMessage: $e.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: $e.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                f = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (K.privacy = {
                  network: { "*": f },
                  services: { "*": f },
                  websites: { "*": f },
                }),
                Ie(z, bn, K)
              );
            };
          u.exports = U(chrome);
        } else u.exports = globalThis.browser;
      }
    );
  })(je);
  var Qi = je.exports,
    Bn = Fe(Qi),
    Al = (g, h, u) =>
      new Promise((A, N) => {
        var M = (K) => {
            try {
              z(u.next(K));
            } catch (Y) {
              N(Y);
            }
          },
          U = (K) => {
            try {
              z(u.throw(K));
            } catch (Y) {
              N(Y);
            }
          },
          z = (K) =>
            K.done ? A(K.value) : Promise.resolve(K.value).then(M, U);
        z((u = u.apply(g, h)).next());
      });
  function bl(g) {
    return Al(this, null, function* () {
      const { name: h, mode: u = "closed", css: A, isolateEvents: N = !1 } = g,
        M = document.createElement(h),
        U = M.attachShadow({ mode: u }),
        z = document.createElement("html"),
        K = document.createElement("body"),
        Y = document.createElement("head");
      if (A) {
        const ue = document.createElement("style");
        "url" in A
          ? (ue.textContent = yield fetch(A.url).then((me) => me.text()))
          : (ue.textContent = A.textContent),
          Y.appendChild(ue);
      }
      return (
        z.appendChild(Y),
        z.appendChild(K),
        U.appendChild(z),
        N &&
          (Array.isArray(N) ? N : ["keydown", "keyup", "keypress"]).forEach(
            (me) => {
              K.addEventListener(me, (de) => de.stopPropagation());
            }
          ),
        { parentElement: M, shadow: U, isolatedElement: K }
      );
    });
  }
  var xl = {
    VITE_CJS_IGNORE_WARNING: "true",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    MANIFEST_VERSION: 3,
    BROWSER: "chrome",
    CHROME: !0,
    FIREFOX: !1,
    SAFARI: !1,
    EDGE: !1,
    OPERA: !1,
    COMMAND: "build",
    ENTRYPOINT: "medata",
  };
  function ea(g, ...h) {}
  var ts = {
      debug: (...g) => ea(console.debug, ...g),
      log: (...g) => ea(console.log, ...g),
      warn: (...g) => ea(console.warn, ...g),
      error: (...g) => ea(console.error, ...g),
    },
    _l =
      ((kr = class extends Event {
        constructor(h, u) {
          super(kr.EVENT_NAME, {}), (this.newUrl = h), (this.oldUrl = u);
        }
      }),
      Ye(kr, "EVENT_NAME", rs("wxt:locationchange")),
      kr);
  function rs(g) {
    const h = typeof xl > "u" ? "build" : "medata";
    return `${Bn.runtime.id}:${h}:${g}`;
  }
  function wl(g) {
    let h, u;
    return {
      run() {
        h == null &&
          ((u = new URL(location.href)),
          (h = g.setInterval(() => {
            let A = new URL(location.href);
            A.href !== u.href && (window.dispatchEvent(new _l(A, u)), (u = A));
          }, 1e3)));
      },
    };
  }
  var Sl =
    ((cr = class {
      constructor(h, u) {
        oi(this, ca);
        oi(this, ha);
        oi(this, fa, window.self === window.top);
        oi(this, Hr, void 0);
        oi(this, la, wl(this));
        (this.contentScriptName = h),
          (this.options = u),
          ml(this, Hr, new AbortController()),
          Xi(this, fa) && ns(this, ca, vl).call(this),
          this.setTimeout(() => {
            ns(this, ha, yl).call(this);
          });
      }
      get signal() {
        return Xi(this, Hr).signal;
      }
      abort(h) {
        return Xi(this, Hr).abort(h);
      }
      get isInvalid() {
        return (
          Bn.runtime.id == null && this.notifyInvalidated(), this.signal.aborted
        );
      }
      get isValid() {
        return !this.isInvalid;
      }
      onInvalidated(h) {
        return (
          this.signal.addEventListener("abort", h),
          () => this.signal.removeEventListener("abort", h)
        );
      }
      block() {
        return new Promise(() => {});
      }
      setInterval(h, u) {
        const A = setInterval(() => {
          this.isValid && h();
        }, u);
        return this.onInvalidated(() => clearInterval(A)), A;
      }
      setTimeout(h, u) {
        const A = setTimeout(() => {
          this.isValid && h();
        }, u);
        return this.onInvalidated(() => clearTimeout(A)), A;
      }
      requestAnimationFrame(h) {
        const u = requestAnimationFrame((...A) => {
          this.isValid && h(...A);
        });
        return this.onInvalidated(() => cancelAnimationFrame(u)), u;
      }
      requestIdleCallback(h, u) {
        const A = requestIdleCallback((...N) => {
          this.signal.aborted || h(...N);
        }, u);
        return this.onInvalidated(() => cancelIdleCallback(A)), A;
      }
      addEventListener(h, u, A, N) {
        var M;
        u === "wxt:locationchange" && this.isValid && Xi(this, la).run(),
          (M = h.addEventListener) == null ||
            M.call(h, u.startsWith("wxt:") ? rs(u) : u, A, {
              ...N,
              signal: this.signal,
            });
      }
      notifyInvalidated() {
        this.abort("Content script context invalidated"),
          ts.debug(
            `Content script "${this.contentScriptName}" context invalidated`
          );
      }
    }),
    (fa = new WeakMap()),
    (Hr = new WeakMap()),
    (la = new WeakMap()),
    (ca = new WeakSet()),
    (vl = function () {
      window.postMessage(
        {
          event: cr.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
        },
        "*"
      );
    }),
    (ha = new WeakSet()),
    (yl = function () {
      const h = (u) => {
        var A, N;
        ((A = u.data) == null ? void 0 : A.type) ===
          cr.SCRIPT_STARTED_MESSAGE_TYPE &&
          ((N = u.data) == null ? void 0 : N.contentScriptName) ===
            this.contentScriptName &&
          this.notifyInvalidated();
      };
      addEventListener("message", h),
        this.onInvalidated(() => removeEventListener("message", h));
    }),
    Ye(cr, "SCRIPT_STARTED_MESSAGE_TYPE", "wxt:content-script-started"),
    cr);
  async function El(g, h) {
    var Y;
    const u = [h.css ?? ""];
    if (((Y = g.options) == null ? void 0 : Y.cssInjectionMode) === "ui") {
      const ue = await Ll();
      u.push(ue.replaceAll(":root", ":host"));
    }
    const {
      isolatedElement: A,
      parentElement: N,
      shadow: M,
    } = await bl({
      name: h.name,
      css: {
        textContent: u
          .join(
            `
`
          )
          .trim(),
      },
      mode: h.mode ?? "open",
      isolateEvents: h.isolateEvents,
    });
    N.setAttribute("data-wxt-shadow-root", "");
    let U;
    const z = () => {
        Nl(N, h), Tl(N, M.querySelector("html"), h), (U = h.onMount(A, M, N));
      },
      K = () => {
        var ue;
        for (
          (ue = h.onRemove) == null || ue.call(h, U), N.remove();
          A.lastChild;

        )
          A.removeChild(A.lastChild);
      };
    return (
      g.onInvalidated(K),
      {
        shadow: M,
        shadowHost: N,
        uiContainer: A,
        mount: z,
        remove: K,
        mounted: U,
      }
    );
  }
  function Tl(g, h, u) {
    var A, N;
    u.position !== "inline" &&
      (u.zIndex != null && (g.style.zIndex = String(u.zIndex)),
      (g.style.overflow = "visible"),
      (g.style.position = "relative"),
      (g.style.width = "0"),
      (g.style.height = "0"),
      (g.style.display = "block"),
      h &&
        (u.position === "overlay"
          ? ((h.style.position = "absolute"),
            (A = u.alignment) != null && A.startsWith("bottom-")
              ? (h.style.bottom = "0")
              : (h.style.top = "0"),
            (N = u.alignment) != null && N.endsWith("-right")
              ? (h.style.right = "0")
              : (h.style.left = "0"))
          : ((h.style.position = "fixed"),
            (h.style.top = "0"),
            (h.style.bottom = "0"),
            (h.style.left = "0"),
            (h.style.right = "0"))));
  }
  function Cl(g) {
    if (g.anchor == null) return document.body;
    let h = typeof g.anchor == "function" ? g.anchor() : g.anchor;
    return typeof h == "string"
      ? document.querySelector(h) ?? void 0
      : h ?? void 0;
  }
  function Nl(g, h) {
    var A, N;
    const u = Cl(h);
    if (u == null)
      throw Error(
        "Failed to mount content script UI: could not find anchor element"
      );
    switch (h.append) {
      case void 0:
      case "last":
        u.append(g);
        break;
      case "first":
        u.prepend(g);
        break;
      case "replace":
        u.replaceWith(g);
        break;
      case "after":
        (A = u.parentElement) == null ||
          A.insertBefore(g, u.nextElementSibling);
        break;
      case "before":
        (N = u.parentElement) == null || N.insertBefore(g, u);
        break;
      default:
        h.append(u, g);
        break;
    }
  }
  async function Ll() {
    const g = Bn.runtime.getURL("/content-scripts/medata.css");
    try {
      return await (await fetch(g)).text();
    } catch (h) {
      return (
        ts.warn(
          `Failed to load styles @ ${g}. Did you forget to import the stylesheet in your entrypoint?`,
          h
        ),
        ""
      );
    }
  }
  function O0(g) {
    return g;
  }
  var Eu = function (g, h) {
    return (
      (Eu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (u, A) {
            u.__proto__ = A;
          }) ||
        function (u, A) {
          for (var N in A)
            Object.prototype.hasOwnProperty.call(A, N) && (u[N] = A[N]);
        }),
      Eu(g, h)
    );
  };
  function si(g, h) {
    if (typeof h != "function" && h !== null)
      throw new TypeError(
        "Class extends value " + String(h) + " is not a constructor or null"
      );
    Eu(g, h);
    function u() {
      this.constructor = g;
    }
    g.prototype =
      h === null ? Object.create(h) : ((u.prototype = h.prototype), new u());
  }
  function Il(g, h, u, A) {
    function N(M) {
      return M instanceof u
        ? M
        : new u(function (U) {
            U(M);
          });
    }
    return new (u || (u = Promise))(function (M, U) {
      function z(ue) {
        try {
          Y(A.next(ue));
        } catch (me) {
          U(me);
        }
      }
      function K(ue) {
        try {
          Y(A.throw(ue));
        } catch (me) {
          U(me);
        }
      }
      function Y(ue) {
        ue.done ? M(ue.value) : N(ue.value).then(z, K);
      }
      Y((A = A.apply(g, h || [])).next());
    });
  }
  function is(g, h) {
    var u = {
        label: 0,
        sent: function () {
          if (M[0] & 1) throw M[1];
          return M[1];
        },
        trys: [],
        ops: [],
      },
      A,
      N,
      M,
      U;
    return (
      (U = { next: z(0), throw: z(1), return: z(2) }),
      typeof Symbol == "function" &&
        (U[Symbol.iterator] = function () {
          return this;
        }),
      U
    );
    function z(Y) {
      return function (ue) {
        return K([Y, ue]);
      };
    }
    function K(Y) {
      if (A) throw new TypeError("Generator is already executing.");
      for (; U && ((U = 0), Y[0] && (u = 0)), u; )
        try {
          if (
            ((A = 1),
            N &&
              (M =
                Y[0] & 2
                  ? N.return
                  : Y[0]
                  ? N.throw || ((M = N.return) && M.call(N), 0)
                  : N.next) &&
              !(M = M.call(N, Y[1])).done)
          )
            return M;
          switch (((N = 0), M && (Y = [Y[0] & 2, M.value]), Y[0])) {
            case 0:
            case 1:
              M = Y;
              break;
            case 4:
              return u.label++, { value: Y[1], done: !1 };
            case 5:
              u.label++, (N = Y[1]), (Y = [0]);
              continue;
            case 7:
              (Y = u.ops.pop()), u.trys.pop();
              continue;
            default:
              if (
                ((M = u.trys),
                !(M = M.length > 0 && M[M.length - 1]) &&
                  (Y[0] === 6 || Y[0] === 2))
              ) {
                u = 0;
                continue;
              }
              if (Y[0] === 3 && (!M || (Y[1] > M[0] && Y[1] < M[3]))) {
                u.label = Y[1];
                break;
              }
              if (Y[0] === 6 && u.label < M[1]) {
                (u.label = M[1]), (M = Y);
                break;
              }
              if (M && u.label < M[2]) {
                (u.label = M[2]), u.ops.push(Y);
                break;
              }
              M[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          Y = h.call(g, u);
        } catch (ue) {
          (Y = [6, ue]), (N = 0);
        } finally {
          A = M = 0;
        }
      if (Y[0] & 5) throw Y[1];
      return { value: Y[0] ? Y[1] : void 0, done: !0 };
    }
  }
  function Dr(g) {
    var h = typeof Symbol == "function" && Symbol.iterator,
      u = h && g[h],
      A = 0;
    if (u) return u.call(g);
    if (g && typeof g.length == "number")
      return {
        next: function () {
          return (
            g && A >= g.length && (g = void 0), { value: g && g[A++], done: !g }
          );
        },
      };
    throw new TypeError(
      h ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function Pr(g, h) {
    var u = typeof Symbol == "function" && g[Symbol.iterator];
    if (!u) return g;
    var A = u.call(g),
      N,
      M = [],
      U;
    try {
      for (; (h === void 0 || h-- > 0) && !(N = A.next()).done; )
        M.push(N.value);
    } catch (z) {
      U = { error: z };
    } finally {
      try {
        N && !N.done && (u = A.return) && u.call(A);
      } finally {
        if (U) throw U.error;
      }
    }
    return M;
  }
  function fi(g, h, u) {
    if (u || arguments.length === 2)
      for (var A = 0, N = h.length, M; A < N; A++)
        (M || !(A in h)) &&
          (M || (M = Array.prototype.slice.call(h, 0, A)), (M[A] = h[A]));
    return g.concat(M || Array.prototype.slice.call(h));
  }
  function Or(g) {
    return this instanceof Or ? ((this.v = g), this) : new Or(g);
  }
  function Ml(g, h, u) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var A = u.apply(g, h || []),
      N,
      M = [];
    return (
      (N = {}),
      U("next"),
      U("throw"),
      U("return"),
      (N[Symbol.asyncIterator] = function () {
        return this;
      }),
      N
    );
    function U(de) {
      A[de] &&
        (N[de] = function (De) {
          return new Promise(function (ee, $) {
            M.push([de, De, ee, $]) > 1 || z(de, De);
          });
        });
    }
    function z(de, De) {
      try {
        K(A[de](De));
      } catch (ee) {
        me(M[0][3], ee);
      }
    }
    function K(de) {
      de.value instanceof Or
        ? Promise.resolve(de.value.v).then(Y, ue)
        : me(M[0][2], de);
    }
    function Y(de) {
      z("next", de);
    }
    function ue(de) {
      z("throw", de);
    }
    function me(de, De) {
      de(De), M.shift(), M.length && z(M[0][0], M[0][1]);
    }
  }
  function Rl(g) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var h = g[Symbol.asyncIterator],
      u;
    return h
      ? h.call(g)
      : ((g = typeof Dr == "function" ? Dr(g) : g[Symbol.iterator]()),
        (u = {}),
        A("next"),
        A("throw"),
        A("return"),
        (u[Symbol.asyncIterator] = function () {
          return this;
        }),
        u);
    function A(M) {
      u[M] =
        g[M] &&
        function (U) {
          return new Promise(function (z, K) {
            (U = g[M](U)), N(z, K, U.done, U.value);
          });
        };
    }
    function N(M, U, z, K) {
      Promise.resolve(K).then(function (Y) {
        M({ value: Y, done: z });
      }, U);
    }
  }
  typeof SuppressedError == "function" && SuppressedError;
  function We(g) {
    return typeof g == "function";
  }
  function as(g) {
    var h = function (A) {
        Error.call(A), (A.stack = new Error().stack);
      },
      u = g(h);
    return (
      (u.prototype = Object.create(Error.prototype)),
      (u.prototype.constructor = u),
      u
    );
  }
  var Tu = as(function (g) {
    return function (u) {
      g(this),
        (this.message = u
          ? u.length +
            ` errors occurred during unsubscription:
` +
            u.map(function (A, N) {
              return N + 1 + ") " + A.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = u);
    };
  });
  function Cu(g, h) {
    if (g) {
      var u = g.indexOf(h);
      0 <= u && g.splice(u, 1);
    }
  }
  var na = (function () {
      function g(h) {
        (this.initialTeardown = h),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null);
      }
      return (
        (g.prototype.unsubscribe = function () {
          var h, u, A, N, M;
          if (!this.closed) {
            this.closed = !0;
            var U = this._parentage;
            if (U)
              if (((this._parentage = null), Array.isArray(U)))
                try {
                  for (var z = Dr(U), K = z.next(); !K.done; K = z.next()) {
                    var Y = K.value;
                    Y.remove(this);
                  }
                } catch ($) {
                  h = { error: $ };
                } finally {
                  try {
                    K && !K.done && (u = z.return) && u.call(z);
                  } finally {
                    if (h) throw h.error;
                  }
                }
              else U.remove(this);
            var ue = this.initialTeardown;
            if (We(ue))
              try {
                ue();
              } catch ($) {
                M = $ instanceof Tu ? $.errors : [$];
              }
            var me = this._finalizers;
            if (me) {
              this._finalizers = null;
              try {
                for (
                  var de = Dr(me), De = de.next();
                  !De.done;
                  De = de.next()
                ) {
                  var ee = De.value;
                  try {
                    ss(ee);
                  } catch ($) {
                    (M = M ?? []),
                      $ instanceof Tu
                        ? (M = fi(fi([], Pr(M)), Pr($.errors)))
                        : M.push($);
                  }
                }
              } catch ($) {
                A = { error: $ };
              } finally {
                try {
                  De && !De.done && (N = de.return) && N.call(de);
                } finally {
                  if (A) throw A.error;
                }
              }
            }
            if (M) throw new Tu(M);
          }
        }),
        (g.prototype.add = function (h) {
          var u;
          if (h && h !== this)
            if (this.closed) ss(h);
            else {
              if (h instanceof g) {
                if (h.closed || h._hasParent(this)) return;
                h._addParent(this);
              }
              (this._finalizers =
                (u = this._finalizers) !== null && u !== void 0 ? u : []).push(
                h
              );
            }
        }),
        (g.prototype._hasParent = function (h) {
          var u = this._parentage;
          return u === h || (Array.isArray(u) && u.includes(h));
        }),
        (g.prototype._addParent = function (h) {
          var u = this._parentage;
          this._parentage = Array.isArray(u) ? (u.push(h), u) : u ? [u, h] : h;
        }),
        (g.prototype._removeParent = function (h) {
          var u = this._parentage;
          u === h ? (this._parentage = null) : Array.isArray(u) && Cu(u, h);
        }),
        (g.prototype.remove = function (h) {
          var u = this._finalizers;
          u && Cu(u, h), h instanceof g && h._removeParent(this);
        }),
        (g.EMPTY = (function () {
          var h = new g();
          return (h.closed = !0), h;
        })()),
        g
      );
    })(),
    us = na.EMPTY;
  function os(g) {
    return (
      g instanceof na ||
      (g && "closed" in g && We(g.remove) && We(g.add) && We(g.unsubscribe))
    );
  }
  function ss(g) {
    We(g) ? g() : g.unsubscribe();
  }
  var fs = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    ls = {
      setTimeout: function (g, h) {
        for (var u = [], A = 2; A < arguments.length; A++)
          u[A - 2] = arguments[A];
        return setTimeout.apply(void 0, fi([g, h], Pr(u)));
      },
      clearTimeout: function (g) {
        var h = ls.delegate;
        return ((h == null ? void 0 : h.clearTimeout) || clearTimeout)(g);
      },
      delegate: void 0,
    };
  function cs(g) {
    ls.setTimeout(function () {
      throw g;
    });
  }
  function hs() {}
  function ta(g) {
    g();
  }
  var Nu = (function (g) {
      si(h, g);
      function h(u) {
        var A = g.call(this) || this;
        return (
          (A.isStopped = !1),
          u ? ((A.destination = u), os(u) && u.add(A)) : (A.destination = kl),
          A
        );
      }
      return (
        (h.create = function (u, A, N) {
          return new li(u, A, N);
        }),
        (h.prototype.next = function (u) {
          this.isStopped || this._next(u);
        }),
        (h.prototype.error = function (u) {
          this.isStopped || ((this.isStopped = !0), this._error(u));
        }),
        (h.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (h.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0),
            g.prototype.unsubscribe.call(this),
            (this.destination = null));
        }),
        (h.prototype._next = function (u) {
          this.destination.next(u);
        }),
        (h.prototype._error = function (u) {
          try {
            this.destination.error(u);
          } finally {
            this.unsubscribe();
          }
        }),
        (h.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        h
      );
    })(na),
    Dl = Function.prototype.bind;
  function Lu(g, h) {
    return Dl.call(g, h);
  }
  var Pl = (function () {
      function g(h) {
        this.partialObserver = h;
      }
      return (
        (g.prototype.next = function (h) {
          var u = this.partialObserver;
          if (u.next)
            try {
              u.next(h);
            } catch (A) {
              ra(A);
            }
        }),
        (g.prototype.error = function (h) {
          var u = this.partialObserver;
          if (u.error)
            try {
              u.error(h);
            } catch (A) {
              ra(A);
            }
          else ra(h);
        }),
        (g.prototype.complete = function () {
          var h = this.partialObserver;
          if (h.complete)
            try {
              h.complete();
            } catch (u) {
              ra(u);
            }
        }),
        g
      );
    })(),
    li = (function (g) {
      si(h, g);
      function h(u, A, N) {
        var M = g.call(this) || this,
          U;
        if (We(u) || !u)
          U = { next: u ?? void 0, error: A ?? void 0, complete: N ?? void 0 };
        else {
          var z;
          M && fs.useDeprecatedNextContext
            ? ((z = Object.create(u)),
              (z.unsubscribe = function () {
                return M.unsubscribe();
              }),
              (U = {
                next: u.next && Lu(u.next, z),
                error: u.error && Lu(u.error, z),
                complete: u.complete && Lu(u.complete, z),
              }))
            : (U = u);
        }
        return (M.destination = new Pl(U)), M;
      }
      return h;
    })(Nu);
  function ra(g) {
    cs(g);
  }
  function Ol(g) {
    throw g;
  }
  var kl = { closed: !0, next: hs, error: Ol, complete: hs },
    Iu = (function () {
      return (
        (typeof Symbol == "function" && Symbol.observable) || "@@observable"
      );
    })();
  function Hl(g) {
    return g;
  }
  function Bl(g) {
    return g.length === 0
      ? Hl
      : g.length === 1
      ? g[0]
      : function (u) {
          return g.reduce(function (A, N) {
            return N(A);
          }, u);
        };
  }
  var Lt = (function () {
    function g(h) {
      h && (this._subscribe = h);
    }
    return (
      (g.prototype.lift = function (h) {
        var u = new g();
        return (u.source = this), (u.operator = h), u;
      }),
      (g.prototype.subscribe = function (h, u, A) {
        var N = this,
          M = Wl(h) ? h : new li(h, u, A);
        return (
          ta(function () {
            var U = N,
              z = U.operator,
              K = U.source;
            M.add(z ? z.call(M, K) : K ? N._subscribe(M) : N._trySubscribe(M));
          }),
          M
        );
      }),
      (g.prototype._trySubscribe = function (h) {
        try {
          return this._subscribe(h);
        } catch (u) {
          h.error(u);
        }
      }),
      (g.prototype.forEach = function (h, u) {
        var A = this;
        return (
          (u = ds(u)),
          new u(function (N, M) {
            var U = new li({
              next: function (z) {
                try {
                  h(z);
                } catch (K) {
                  M(K), U.unsubscribe();
                }
              },
              error: M,
              complete: N,
            });
            A.subscribe(U);
          })
        );
      }),
      (g.prototype._subscribe = function (h) {
        var u;
        return (u = this.source) === null || u === void 0
          ? void 0
          : u.subscribe(h);
      }),
      (g.prototype[Iu] = function () {
        return this;
      }),
      (g.prototype.pipe = function () {
        for (var h = [], u = 0; u < arguments.length; u++) h[u] = arguments[u];
        return Bl(h)(this);
      }),
      (g.prototype.toPromise = function (h) {
        var u = this;
        return (
          (h = ds(h)),
          new h(function (A, N) {
            var M;
            u.subscribe(
              function (U) {
                return (M = U);
              },
              function (U) {
                return N(U);
              },
              function () {
                return A(M);
              }
            );
          })
        );
      }),
      (g.create = function (h) {
        return new g(h);
      }),
      g
    );
  })();
  function ds(g) {
    var h;
    return (h = g ?? fs.Promise) !== null && h !== void 0 ? h : Promise;
  }
  function Fl(g) {
    return g && We(g.next) && We(g.error) && We(g.complete);
  }
  function Wl(g) {
    return (g && g instanceof Nu) || (Fl(g) && os(g));
  }
  function Ul(g) {
    return We(g == null ? void 0 : g.lift);
  }
  function ia(g) {
    return function (h) {
      if (Ul(h))
        return h.lift(function (u) {
          try {
            return g(u, this);
          } catch (A) {
            this.error(A);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function aa(g, h, u, A, N) {
    return new Gl(g, h, u, A, N);
  }
  var Gl = (function (g) {
      si(h, g);
      function h(u, A, N, M, U, z) {
        var K = g.call(this, u) || this;
        return (
          (K.onFinalize = U),
          (K.shouldUnsubscribe = z),
          (K._next = A
            ? function (Y) {
                try {
                  A(Y);
                } catch (ue) {
                  u.error(ue);
                }
              }
            : g.prototype._next),
          (K._error = M
            ? function (Y) {
                try {
                  M(Y);
                } catch (ue) {
                  u.error(ue);
                } finally {
                  this.unsubscribe();
                }
              }
            : g.prototype._error),
          (K._complete = N
            ? function () {
                try {
                  N();
                } catch (Y) {
                  u.error(Y);
                } finally {
                  this.unsubscribe();
                }
              }
            : g.prototype._complete),
          K
        );
      }
      return (
        (h.prototype.unsubscribe = function () {
          var u;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var A = this.closed;
            g.prototype.unsubscribe.call(this),
              !A &&
                ((u = this.onFinalize) === null ||
                  u === void 0 ||
                  u.call(this));
          }
        }),
        h
      );
    })(Nu),
    ql = as(function (g) {
      return function () {
        g(this),
          (this.name = "ObjectUnsubscribedError"),
          (this.message = "object unsubscribed");
      };
    }),
    ps = (function (g) {
      si(h, g);
      function h() {
        var u = g.call(this) || this;
        return (
          (u.closed = !1),
          (u.currentObservers = null),
          (u.observers = []),
          (u.isStopped = !1),
          (u.hasError = !1),
          (u.thrownError = null),
          u
        );
      }
      return (
        (h.prototype.lift = function (u) {
          var A = new gs(this, this);
          return (A.operator = u), A;
        }),
        (h.prototype._throwIfClosed = function () {
          if (this.closed) throw new ql();
        }),
        (h.prototype.next = function (u) {
          var A = this;
          ta(function () {
            var N, M;
            if ((A._throwIfClosed(), !A.isStopped)) {
              A.currentObservers ||
                (A.currentObservers = Array.from(A.observers));
              try {
                for (
                  var U = Dr(A.currentObservers), z = U.next();
                  !z.done;
                  z = U.next()
                ) {
                  var K = z.value;
                  K.next(u);
                }
              } catch (Y) {
                N = { error: Y };
              } finally {
                try {
                  z && !z.done && (M = U.return) && M.call(U);
                } finally {
                  if (N) throw N.error;
                }
              }
            }
          });
        }),
        (h.prototype.error = function (u) {
          var A = this;
          ta(function () {
            if ((A._throwIfClosed(), !A.isStopped)) {
              (A.hasError = A.isStopped = !0), (A.thrownError = u);
              for (var N = A.observers; N.length; ) N.shift().error(u);
            }
          });
        }),
        (h.prototype.complete = function () {
          var u = this;
          ta(function () {
            if ((u._throwIfClosed(), !u.isStopped)) {
              u.isStopped = !0;
              for (var A = u.observers; A.length; ) A.shift().complete();
            }
          });
        }),
        (h.prototype.unsubscribe = function () {
          (this.isStopped = this.closed = !0),
            (this.observers = this.currentObservers = null);
        }),
        Object.defineProperty(h.prototype, "observed", {
          get: function () {
            var u;
            return (
              ((u = this.observers) === null || u === void 0
                ? void 0
                : u.length) > 0
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (h.prototype._trySubscribe = function (u) {
          return this._throwIfClosed(), g.prototype._trySubscribe.call(this, u);
        }),
        (h.prototype._subscribe = function (u) {
          return (
            this._throwIfClosed(),
            this._checkFinalizedStatuses(u),
            this._innerSubscribe(u)
          );
        }),
        (h.prototype._innerSubscribe = function (u) {
          var A = this,
            N = this,
            M = N.hasError,
            U = N.isStopped,
            z = N.observers;
          return M || U
            ? us
            : ((this.currentObservers = null),
              z.push(u),
              new na(function () {
                (A.currentObservers = null), Cu(z, u);
              }));
        }),
        (h.prototype._checkFinalizedStatuses = function (u) {
          var A = this,
            N = A.hasError,
            M = A.thrownError,
            U = A.isStopped;
          N ? u.error(M) : U && u.complete();
        }),
        (h.prototype.asObservable = function () {
          var u = new Lt();
          return (u.source = this), u;
        }),
        (h.create = function (u, A) {
          return new gs(u, A);
        }),
        h
      );
    })(Lt),
    gs = (function (g) {
      si(h, g);
      function h(u, A) {
        var N = g.call(this) || this;
        return (N.destination = u), (N.source = A), N;
      }
      return (
        (h.prototype.next = function (u) {
          var A, N;
          (N =
            (A = this.destination) === null || A === void 0
              ? void 0
              : A.next) === null ||
            N === void 0 ||
            N.call(A, u);
        }),
        (h.prototype.error = function (u) {
          var A, N;
          (N =
            (A = this.destination) === null || A === void 0
              ? void 0
              : A.error) === null ||
            N === void 0 ||
            N.call(A, u);
        }),
        (h.prototype.complete = function () {
          var u, A;
          (A =
            (u = this.destination) === null || u === void 0
              ? void 0
              : u.complete) === null ||
            A === void 0 ||
            A.call(u);
        }),
        (h.prototype._subscribe = function (u) {
          var A, N;
          return (N =
            (A = this.source) === null || A === void 0
              ? void 0
              : A.subscribe(u)) !== null && N !== void 0
            ? N
            : us;
        }),
        h
      );
    })(ps),
    ms = function (g) {
      return g && typeof g.length == "number" && typeof g != "function";
    };
  function zl(g) {
    return We(g == null ? void 0 : g.then);
  }
  function Kl(g) {
    return We(g[Iu]);
  }
  function Yl(g) {
    return (
      Symbol.asyncIterator && We(g == null ? void 0 : g[Symbol.asyncIterator])
    );
  }
  function jl(g) {
    return new TypeError(
      "You provided " +
        (g !== null && typeof g == "object"
          ? "an invalid object"
          : "'" + g + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function $l() {
    return typeof Symbol != "function" || !Symbol.iterator
      ? "@@iterator"
      : Symbol.iterator;
  }
  var Vl = $l();
  function Jl(g) {
    return We(g == null ? void 0 : g[Vl]);
  }
  function Zl(g) {
    return Ml(this, arguments, function () {
      var u, A, N, M;
      return is(this, function (U) {
        switch (U.label) {
          case 0:
            (u = g.getReader()), (U.label = 1);
          case 1:
            U.trys.push([1, , 9, 10]), (U.label = 2);
          case 2:
            return [4, Or(u.read())];
          case 3:
            return (
              (A = U.sent()),
              (N = A.value),
              (M = A.done),
              M ? [4, Or(void 0)] : [3, 5]
            );
          case 4:
            return [2, U.sent()];
          case 5:
            return [4, Or(N)];
          case 6:
            return [4, U.sent()];
          case 7:
            return U.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return u.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function Xl(g) {
    return We(g == null ? void 0 : g.getReader);
  }
  function ci(g) {
    if (g instanceof Lt) return g;
    if (g != null) {
      if (Kl(g)) return Ql(g);
      if (ms(g)) return ec(g);
      if (zl(g)) return nc(g);
      if (Yl(g)) return vs(g);
      if (Jl(g)) return tc(g);
      if (Xl(g)) return rc(g);
    }
    throw jl(g);
  }
  function Ql(g) {
    return new Lt(function (h) {
      var u = g[Iu]();
      if (We(u.subscribe)) return u.subscribe(h);
      throw new TypeError(
        "Provided object does not correctly implement Symbol.observable"
      );
    });
  }
  function ec(g) {
    return new Lt(function (h) {
      for (var u = 0; u < g.length && !h.closed; u++) h.next(g[u]);
      h.complete();
    });
  }
  function nc(g) {
    return new Lt(function (h) {
      g.then(
        function (u) {
          h.closed || (h.next(u), h.complete());
        },
        function (u) {
          return h.error(u);
        }
      ).then(null, cs);
    });
  }
  function tc(g) {
    return new Lt(function (h) {
      var u, A;
      try {
        for (var N = Dr(g), M = N.next(); !M.done; M = N.next()) {
          var U = M.value;
          if ((h.next(U), h.closed)) return;
        }
      } catch (z) {
        u = { error: z };
      } finally {
        try {
          M && !M.done && (A = N.return) && A.call(N);
        } finally {
          if (u) throw u.error;
        }
      }
      h.complete();
    });
  }
  function vs(g) {
    return new Lt(function (h) {
      ic(g, h).catch(function (u) {
        return h.error(u);
      });
    });
  }
  function rc(g) {
    return vs(Zl(g));
  }
  function ic(g, h) {
    var u, A, N, M;
    return Il(this, void 0, void 0, function () {
      var U, z;
      return is(this, function (K) {
        switch (K.label) {
          case 0:
            K.trys.push([0, 5, 6, 11]), (u = Rl(g)), (K.label = 1);
          case 1:
            return [4, u.next()];
          case 2:
            if (((A = K.sent()), !!A.done)) return [3, 4];
            if (((U = A.value), h.next(U), h.closed)) return [2];
            K.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (z = K.sent()), (N = { error: z }), [3, 11];
          case 6:
            return (
              K.trys.push([6, , 9, 10]),
              A && !A.done && (M = u.return) ? [4, M.call(u)] : [3, 8]
            );
          case 7:
            K.sent(), (K.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (N) throw N.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return h.complete(), [2];
        }
      });
    });
  }
  function ac(g, h, u, A, N) {
    A === void 0 && (A = 0), N === void 0 && (N = !1);
    var M = h.schedule(function () {
      u(), N ? g.add(this.schedule(null, A)) : this.unsubscribe();
    }, A);
    if ((g.add(M), !N)) return M;
  }
  function ua(g, h) {
    return ia(function (u, A) {
      var N = 0;
      u.subscribe(
        aa(A, function (M) {
          A.next(g.call(h, M, N++));
        })
      );
    });
  }
  var uc = Array.isArray;
  function oc(g, h) {
    return uc(h) ? g.apply(void 0, fi([], Pr(h))) : g(h);
  }
  function sc(g) {
    return ua(function (h) {
      return oc(g, h);
    });
  }
  function fc(g, h, u, A, N, M, U, z) {
    var K = [],
      Y = 0,
      ue = 0,
      me = !1,
      de = function () {
        me && !K.length && !Y && h.complete();
      },
      De = function ($) {
        return Y < A ? ee($) : K.push($);
      },
      ee = function ($) {
        M && h.next($), Y++;
        var Ie = !1;
        ci(u($, ue++)).subscribe(
          aa(
            h,
            function (ne) {
              N == null || N(ne), M ? De(ne) : h.next(ne);
            },
            function () {
              Ie = !0;
            },
            void 0,
            function () {
              if (Ie)
                try {
                  Y--;
                  for (
                    var ne = function () {
                      var Wn = K.shift();
                      U
                        ? ac(h, U, function () {
                            return ee(Wn);
                          })
                        : ee(Wn);
                    };
                    K.length && Y < A;

                  )
                    ne();
                  de();
                } catch (Wn) {
                  h.error(Wn);
                }
            }
          )
        );
      };
    return (
      g.subscribe(
        aa(h, De, function () {
          (me = !0), de();
        })
      ),
      function () {
        z == null || z();
      }
    );
  }
  function ys(g, h, u) {
    return (
      u === void 0 && (u = 1 / 0),
      We(h)
        ? ys(function (A, N) {
            return ua(function (M, U) {
              return h(A, M, N, U);
            })(ci(g(A, N)));
          }, u)
        : (typeof h == "number" && (u = h),
          ia(function (A, N) {
            return fc(A, N, g, u);
          }))
    );
  }
  var lc = ["addListener", "removeListener"],
    cc = ["addEventListener", "removeEventListener"],
    hc = ["on", "off"];
  function lr(g, h, u, A) {
    if ((We(u) && ((A = u), (u = void 0)), A)) return lr(g, h, u).pipe(sc(A));
    var N = Pr(
        gc(g)
          ? cc.map(function (z) {
              return function (K) {
                return g[z](h, K, u);
              };
            })
          : dc(g)
          ? lc.map(As(g, h))
          : pc(g)
          ? hc.map(As(g, h))
          : [],
        2
      ),
      M = N[0],
      U = N[1];
    if (!M && ms(g))
      return ys(function (z) {
        return lr(z, h, u);
      })(ci(g));
    if (!M) throw new TypeError("Invalid event target");
    return new Lt(function (z) {
      var K = function () {
        for (var Y = [], ue = 0; ue < arguments.length; ue++)
          Y[ue] = arguments[ue];
        return z.next(1 < Y.length ? Y : Y[0]);
      };
      return (
        M(K),
        function () {
          return U(K);
        }
      );
    });
  }
  function As(g, h) {
    return function (u) {
      return function (A) {
        return g[u](h, A);
      };
    };
  }
  function dc(g) {
    return We(g.addListener) && We(g.removeListener);
  }
  function pc(g) {
    return We(g.on) && We(g.off);
  }
  function gc(g) {
    return We(g.addEventListener) && We(g.removeEventListener);
  }
  function bs(g, h) {
    return ia(function (u, A) {
      var N = 0;
      u.subscribe(
        aa(A, function (M) {
          return g.call(h, M, N++) && A.next(M);
        })
      );
    });
  }
  function xs(g) {
    g === void 0 && (g = {});
    var h = g.connector,
      u =
        h === void 0
          ? function () {
              return new ps();
            }
          : h,
      A = g.resetOnError,
      N = A === void 0 ? !0 : A,
      M = g.resetOnComplete,
      U = M === void 0 ? !0 : M,
      z = g.resetOnRefCountZero,
      K = z === void 0 ? !0 : z;
    return function (Y) {
      var ue,
        me,
        de,
        De = 0,
        ee = !1,
        $ = !1,
        Ie = function () {
          me == null || me.unsubscribe(), (me = void 0);
        },
        ne = function () {
          Ie(), (ue = de = void 0), (ee = $ = !1);
        },
        Wn = function () {
          var ze = ue;
          ne(), ze == null || ze.unsubscribe();
        };
      return ia(function (ze, an) {
        De++, !$ && !ee && Ie();
        var $e = (de = de ?? u());
        an.add(function () {
          De--, De === 0 && !$ && !ee && (me = Mu(Wn, K));
        }),
          $e.subscribe(an),
          !ue &&
            De > 0 &&
            ((ue = new li({
              next: function (bn) {
                return $e.next(bn);
              },
              error: function (bn) {
                ($ = !0), Ie(), (me = Mu(ne, N, bn)), $e.error(bn);
              },
              complete: function () {
                (ee = !0), Ie(), (me = Mu(ne, U)), $e.complete();
              },
            })),
            ci(ze).subscribe(ue));
      })(Y);
    };
  }
  function Mu(g, h) {
    for (var u = [], A = 2; A < arguments.length; A++) u[A - 2] = arguments[A];
    if (h === !0) {
      g();
      return;
    }
    if (h !== !1) {
      var N = new li({
        next: function () {
          N.unsubscribe(), g();
        },
      });
      return ci(h.apply(void 0, fi([], Pr(u)))).subscribe(N);
    }
  }
  var oa = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ oa.exports,
    (function (g, h) {
      (function () {
        var u,
          A = "4.17.21",
          N = 200,
          M = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
          U = "Expected a function",
          z = "Invalid `variable` option passed into `_.template`",
          K = "__lodash_hash_undefined__",
          Y = 500,
          ue = "__lodash_placeholder__",
          me = 1,
          de = 2,
          De = 4,
          ee = 1,
          $ = 2,
          Ie = 1,
          ne = 2,
          Wn = 4,
          ze = 8,
          an = 16,
          $e = 32,
          bn = 64,
          f = 128,
          re = 256,
          j = 512,
          Te = 30,
          Me = "...",
          Ve = 800,
          ce = 16,
          Je = 1,
          be = 2,
          dn = 3,
          Ce = 1 / 0,
          Qe = 9007199254740991,
          Cn = 17976931348623157e292,
          un = NaN,
          fn = 4294967295,
          da = fn - 1,
          di = fn >>> 1,
          pa = [
            ["ary", f],
            ["bind", Ie],
            ["bindKey", ne],
            ["curry", ze],
            ["curryRight", an],
            ["flip", j],
            ["partial", $e],
            ["partialRight", bn],
            ["rearg", re],
          ],
          Kt = "[object Arguments]",
          Br = "[object Array]",
          Ou = "[object AsyncFunction]",
          hr = "[object Boolean]",
          Yt = "[object Date]",
          Zn = "[object DOMException]",
          Fr = "[object Error]",
          st = "[object Function]",
          dr = "[object GeneratorFunction]",
          Nn = "[object Map]",
          pr = "[object Number]",
          pi = "[object Null]",
          Ln = "[object Object]",
          Xn = "[object Promise]",
          ku = "[object Proxy]",
          gr = "[object RegExp]",
          Un = "[object Set]",
          pn = "[object String]",
          vt = "[object Symbol]",
          mr = "[object Undefined]",
          te = "[object WeakMap]",
          gn = "[object WeakSet]",
          vr = "[object ArrayBuffer]",
          jt = "[object DataView]",
          gi = "[object Float32Array]",
          Wr = "[object Float64Array]",
          Ur = "[object Int8Array]",
          It = "[object Int16Array]",
          Gn = "[object Int32Array]",
          ft = "[object Uint8Array]",
          yt = "[object Uint8ClampedArray]",
          mi = "[object Uint16Array]",
          $t = "[object Uint32Array]",
          ga = /\b__p \+= '';/g,
          ma = /\b(__p \+=) '' \+/g,
          Hu = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          Mt = /&(?:amp|lt|gt|quot|#39);/g,
          Vt = /[&<>"']/g,
          va = RegExp(Mt.source),
          ya = RegExp(Vt.source),
          In = /<%-([\s\S]+?)%>/g,
          mn = /<%([\s\S]+?)%>/g,
          Gr = /<%=([\s\S]+?)%>/g,
          Bu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Aa = /^\w*$/,
          ba =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          At = /[\\^$.*+?()[\]{}|]/g,
          Jt = RegExp(At.source),
          yr = /^\s+/,
          qr = /\s/,
          Fu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Wu = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Uu = /,? & /,
          xa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          Gu = /[()=,{}\[\]\/\s]/,
          qu = /\\(\\)?/g,
          _a = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          wa = /\w*$/,
          Zt = /^[-+]0x[0-9a-f]+$/i,
          Sa = /^0b[01]+$/i,
          vi = /^\[object .+?Constructor\]$/,
          yi = /^0o[0-7]+$/i,
          zr = /^(?:0|[1-9]\d*)$/,
          Ea = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Kr = /($^)/,
          Ar = /['\n\r\u2028\u2029\\]/g,
          br = "\\ud800-\\udfff",
          Ta = "\\u0300-\\u036f",
          Ca = "\\ufe20-\\ufe2f",
          Na = "\\u20d0-\\u20ff",
          La = Ta + Ca + Na,
          Yr = "\\u2700-\\u27bf",
          Ia = "a-z\\xdf-\\xf6\\xf8-\\xff",
          zu = "\\xac\\xb1\\xd7\\xf7",
          Ma = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          Ra = "\\u2000-\\u206f",
          Ai =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          bi = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          ln = "\\ufe0e\\ufe0f",
          Rt = zu + Ma + Ra + Ai,
          Xt = "['’]",
          Ku = "[" + br + "]",
          Da = "[" + Rt + "]",
          Qt = "[" + La + "]",
          xi = "\\d+",
          jr = "[" + Yr + "]",
          _i = "[" + Ia + "]",
          Pa = "[^" + br + Rt + xi + Yr + Ia + bi + "]",
          wi = "\\ud83c[\\udffb-\\udfff]",
          qn = "(?:" + Qt + "|" + wi + ")",
          Si = "[^" + br + "]",
          Dt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Ei = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          er = "[" + bi + "]",
          bt = "\\u200d",
          xt = "(?:" + _i + "|" + Pa + ")",
          Ti = "(?:" + er + "|" + Pa + ")",
          Oa = "(?:" + Xt + "(?:d|ll|m|re|s|t|ve))?",
          nr = "(?:" + Xt + "(?:D|LL|M|RE|S|T|VE))?",
          Ci = qn + "?",
          $r = "[" + ln + "]?",
          ka =
            "(?:" + bt + "(?:" + [Si, Dt, Ei].join("|") + ")" + $r + Ci + ")*",
          Ha = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
          Yu = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
          Ni = $r + Ci + ka,
          ju = "(?:" + [jr, Dt, Ei].join("|") + ")" + Ni,
          $u = "(?:" + [Si + Qt + "?", Qt, Dt, Ei, Ku].join("|") + ")",
          Li = RegExp(Xt, "g"),
          Vu = RegExp(Qt, "g"),
          Ii = RegExp(wi + "(?=" + wi + ")|" + $u + Ni, "g"),
          Ju = RegExp(
            [
              er + "?" + _i + "+" + Oa + "(?=" + [Da, er, "$"].join("|") + ")",
              Ti + "+" + nr + "(?=" + [Da, er + xt, "$"].join("|") + ")",
              er + "?" + xt + "+" + Oa,
              er + "+" + nr,
              Yu,
              Ha,
              xi,
              ju,
            ].join("|"),
            "g"
          ),
          Zu = RegExp("[" + bt + br + La + ln + "]"),
          Xu =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Qu = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          eo = -1,
          Be = {};
        (Be[gi] =
          Be[Wr] =
          Be[Ur] =
          Be[It] =
          Be[Gn] =
          Be[ft] =
          Be[yt] =
          Be[mi] =
          Be[$t] =
            !0),
          (Be[Kt] =
            Be[Br] =
            Be[vr] =
            Be[hr] =
            Be[jt] =
            Be[Yt] =
            Be[Fr] =
            Be[st] =
            Be[Nn] =
            Be[pr] =
            Be[Ln] =
            Be[gr] =
            Be[Un] =
            Be[pn] =
            Be[te] =
              !1);
        var Pe = {};
        (Pe[Kt] =
          Pe[Br] =
          Pe[vr] =
          Pe[jt] =
          Pe[hr] =
          Pe[Yt] =
          Pe[gi] =
          Pe[Wr] =
          Pe[Ur] =
          Pe[It] =
          Pe[Gn] =
          Pe[Nn] =
          Pe[pr] =
          Pe[Ln] =
          Pe[gr] =
          Pe[Un] =
          Pe[pn] =
          Pe[vt] =
          Pe[ft] =
          Pe[yt] =
          Pe[mi] =
          Pe[$t] =
            !0),
          (Pe[Fr] = Pe[st] = Pe[te] = !1);
        var Ba = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          },
          Mi = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          },
          Fa = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          },
          Wa = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Ri = parseFloat,
          no = parseInt,
          Ua = typeof ke == "object" && ke && ke.Object === Object && ke,
          to =
            typeof self == "object" && self && self.Object === Object && self,
          Ue = Ua || to || Function("return this")(),
          Vr = h && !h.nodeType && h,
          lt = Vr && !0 && g && !g.nodeType && g,
          Ga = lt && lt.exports === Vr,
          Di = Ga && Ua.process,
          Mn = (function () {
            try {
              var y = lt && lt.require && lt.require("util").types;
              return y || (Di && Di.binding && Di.binding("util"));
            } catch {}
          })(),
          t = Mn && Mn.isArrayBuffer,
          i = Mn && Mn.isDate,
          a = Mn && Mn.isMap,
          s = Mn && Mn.isRegExp,
          l = Mn && Mn.isSet,
          c = Mn && Mn.isTypedArray;
        function p(y, E, S) {
          switch (S.length) {
            case 0:
              return y.call(E);
            case 1:
              return y.call(E, S[0]);
            case 2:
              return y.call(E, S[0], S[1]);
            case 3:
              return y.call(E, S[0], S[1], S[2]);
          }
          return y.apply(E, S);
        }
        function w(y, E, S, H) {
          for (var B = -1, X = y == null ? 0 : y.length; ++B < X; ) {
            var Q = y[B];
            E(H, Q, S(Q), y);
          }
          return H;
        }
        function x(y, E) {
          for (
            var S = -1, H = y == null ? 0 : y.length;
            ++S < H && E(y[S], S, y) !== !1;

          );
          return y;
        }
        function L(y, E) {
          for (var S = y == null ? 0 : y.length; S-- && E(y[S], S, y) !== !1; );
          return y;
        }
        function O(y, E) {
          for (var S = -1, H = y == null ? 0 : y.length; ++S < H; )
            if (!E(y[S], S, y)) return !1;
          return !0;
        }
        function k(y, E) {
          for (
            var S = -1, H = y == null ? 0 : y.length, B = 0, X = [];
            ++S < H;

          ) {
            var Q = y[S];
            E(Q, S, y) && (X[B++] = Q);
          }
          return X;
        }
        function D(y, E) {
          var S = y == null ? 0 : y.length;
          return !!S && He(y, E, 0) > -1;
        }
        function q(y, E, S) {
          for (var H = -1, B = y == null ? 0 : y.length; ++H < B; )
            if (S(E, y[H])) return !0;
          return !1;
        }
        function Z(y, E) {
          for (
            var S = -1, H = y == null ? 0 : y.length, B = Array(H);
            ++S < H;

          )
            B[S] = E(y[S], S, y);
          return B;
        }
        function pe(y, E) {
          for (var S = -1, H = E.length, B = y.length; ++S < H; )
            y[B + S] = E[S];
          return y;
        }
        function he(y, E, S, H) {
          var B = -1,
            X = y == null ? 0 : y.length;
          for (H && X && (S = y[++B]); ++B < X; ) S = E(S, y[B], B, y);
          return S;
        }
        function en(y, E, S, H) {
          var B = y == null ? 0 : y.length;
          for (H && B && (S = y[--B]); B--; ) S = E(S, y[B], B, y);
          return S;
        }
        function Ge(y, E) {
          for (var S = -1, H = y == null ? 0 : y.length; ++S < H; )
            if (E(y[S], S, y)) return !0;
          return !1;
        }
        var Qn = Pt("length");
        function et(y) {
          return y.split("");
        }
        function we(y) {
          return y.match(xa) || [];
        }
        function _t(y, E, S) {
          var H;
          return (
            S(y, function (B, X, Q) {
              if (E(B, X, Q)) return (H = X), !1;
            }),
            H
          );
        }
        function Se(y, E, S, H) {
          for (var B = y.length, X = S + (H ? 1 : -1); H ? X-- : ++X < B; )
            if (E(y[X], X, y)) return X;
          return -1;
        }
        function He(y, E, S) {
          return E === E ? ao(y, E, S) : Se(y, Jr, S);
        }
        function xr(y, E, S, H) {
          for (var B = S - 1, X = y.length; ++B < X; ) if (H(y[B], E)) return B;
          return -1;
        }
        function Jr(y) {
          return y !== y;
        }
        function zn(y, E) {
          var S = y == null ? 0 : y.length;
          return S ? vn(y, E) / S : un;
        }
        function Pt(y) {
          return function (E) {
            return E == null ? u : E[y];
          };
        }
        function Rn(y) {
          return function (E) {
            return y == null ? u : y[E];
          };
        }
        function ct(y, E, S, H, B) {
          return (
            B(y, function (X, Q, J) {
              S = H ? ((H = !1), X) : E(S, X, Q, J);
            }),
            S
          );
        }
        function wt(y, E) {
          var S = y.length;
          for (y.sort(E); S--; ) y[S] = y[S].value;
          return y;
        }
        function vn(y, E) {
          for (var S, H = -1, B = y.length; ++H < B; ) {
            var X = E(y[H]);
            X !== u && (S = S === u ? X : S + X);
          }
          return S;
        }
        function _r(y, E) {
          for (var S = -1, H = Array(y); ++S < y; ) H[S] = E(S);
          return H;
        }
        function ht(y, E) {
          return Z(E, function (S) {
            return [S, y[S]];
          });
        }
        function nt(y) {
          return y && y.slice(0, za(y) + 1).replace(yr, "");
        }
        function xn(y) {
          return function (E) {
            return y(E);
          };
        }
        function Pi(y, E) {
          return Z(E, function (S) {
            return y[S];
          });
        }
        function wr(y, E) {
          return y.has(E);
        }
        function Re(y, E) {
          for (var S = -1, H = y.length; ++S < H && He(E, y[S], 0) > -1; );
          return S;
        }
        function Sr(y, E) {
          for (var S = y.length; S-- && He(E, y[S], 0) > -1; );
          return S;
        }
        function Kn(y, E) {
          for (var S = y.length, H = 0; S--; ) y[S] === E && ++H;
          return H;
        }
        var tr = Rn(Ba),
          ro = Rn(Mi);
        function io(y) {
          return "\\" + Wa[y];
        }
        function qa(y, E) {
          return y == null ? u : y[E];
        }
        function Dn(y) {
          return Zu.test(y);
        }
        function Oi(y) {
          return Xu.test(y);
        }
        function St(y) {
          for (var E, S = []; !(E = y.next()).done; ) S.push(E.value);
          return S;
        }
        function Zr(y) {
          var E = -1,
            S = Array(y.size);
          return (
            y.forEach(function (H, B) {
              S[++E] = [B, H];
            }),
            S
          );
        }
        function rr(y, E) {
          return function (S) {
            return y(E(S));
          };
        }
        function Yn(y, E) {
          for (var S = -1, H = y.length, B = 0, X = []; ++S < H; ) {
            var Q = y[S];
            (Q === E || Q === ue) && ((y[S] = ue), (X[B++] = S));
          }
          return X;
        }
        function Ot(y) {
          var E = -1,
            S = Array(y.size);
          return (
            y.forEach(function (H) {
              S[++E] = H;
            }),
            S
          );
        }
        function ki(y) {
          var E = -1,
            S = Array(y.size);
          return (
            y.forEach(function (H) {
              S[++E] = [H, H];
            }),
            S
          );
        }
        function ao(y, E, S) {
          for (var H = S - 1, B = y.length; ++H < B; ) if (y[H] === E) return H;
          return -1;
        }
        function Xr(y, E, S) {
          for (var H = S + 1; H--; ) if (y[H] === E) return H;
          return H;
        }
        function Et(y) {
          return Dn(y) ? Ka(y) : Qn(y);
        }
        function _n(y) {
          return Dn(y) ? b(y) : et(y);
        }
        function za(y) {
          for (var E = y.length; E-- && qr.test(y.charAt(E)); );
          return E;
        }
        var Hi = Rn(Fa);
        function Ka(y) {
          for (var E = (Ii.lastIndex = 0); Ii.test(y); ) ++E;
          return E;
        }
        function b(y) {
          return y.match(Ii) || [];
        }
        function C(y) {
          return y.match(Ju) || [];
        }
        var R = function y(E) {
            E = E == null ? Ue : P.defaults(Ue.Object(), E, P.pick(Ue, Qu));
            var S = E.Array,
              H = E.Date,
              B = E.Error,
              X = E.Function,
              Q = E.Math,
              J = E.Object,
              ve = E.RegExp,
              ae = E.String,
              xe = E.TypeError,
              nn = S.prototype,
              on = X.prototype,
              tn = J.prototype,
              wn = E["__core-js_shared__"],
              dt = on.toString,
              le = tn.hasOwnProperty,
              Cc = 0,
              Ts = (function () {
                var e = /[^.]+$/.exec(
                  (wn && wn.keys && wn.keys.IE_PROTO) || ""
                );
                return e ? "Symbol(src)_1." + e : "";
              })(),
              Ya = tn.toString,
              Nc = dt.call(J),
              Lc = Ue._,
              Ic = ve(
                "^" +
                  dt
                    .call(le)
                    .replace(At, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              ja = Ga ? E.Buffer : u,
              ir = E.Symbol,
              $a = E.Uint8Array,
              Cs = ja ? ja.allocUnsafe : u,
              Va = rr(J.getPrototypeOf, J),
              Ns = J.create,
              Ls = tn.propertyIsEnumerable,
              Ja = nn.splice,
              Is = ir ? ir.isConcatSpreadable : u,
              Bi = ir ? ir.iterator : u,
              Er = ir ? ir.toStringTag : u,
              Za = (function () {
                try {
                  var e = Ir(J, "defineProperty");
                  return e({}, "", {}), e;
                } catch {}
              })(),
              Mc = E.clearTimeout !== Ue.clearTimeout && E.clearTimeout,
              Rc = H && H.now !== Ue.Date.now && H.now,
              Dc = E.setTimeout !== Ue.setTimeout && E.setTimeout,
              Xa = Q.ceil,
              Qa = Q.floor,
              uo = J.getOwnPropertySymbols,
              Pc = ja ? ja.isBuffer : u,
              Ms = E.isFinite,
              Oc = nn.join,
              kc = rr(J.keys, J),
              rn = Q.max,
              yn = Q.min,
              Hc = H.now,
              Bc = E.parseInt,
              Rs = Q.random,
              Fc = nn.reverse,
              oo = Ir(E, "DataView"),
              Fi = Ir(E, "Map"),
              so = Ir(E, "Promise"),
              Qr = Ir(E, "Set"),
              Wi = Ir(E, "WeakMap"),
              Ui = Ir(J, "create"),
              eu = Wi && new Wi(),
              ei = {},
              Wc = Mr(oo),
              Uc = Mr(Fi),
              Gc = Mr(so),
              qc = Mr(Qr),
              zc = Mr(Wi),
              nu = ir ? ir.prototype : u,
              Gi = nu ? nu.valueOf : u,
              Ds = nu ? nu.toString : u;
            function m(e) {
              if (Ke(e) && !ge(e) && !(e instanceof Ne)) {
                if (e instanceof tt) return e;
                if (le.call(e, "__wrapped__")) return Of(e);
              }
              return new tt(e);
            }
            var ni = (function () {
              function e() {}
              return function (n) {
                if (!qe(n)) return {};
                if (Ns) return Ns(n);
                e.prototype = n;
                var r = new e();
                return (e.prototype = u), r;
              };
            })();
            function tu() {}
            function tt(e, n) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!n),
                (this.__index__ = 0),
                (this.__values__ = u);
            }
            (m.templateSettings = {
              escape: In,
              evaluate: mn,
              interpolate: Gr,
              variable: "",
              imports: { _: m },
            }),
              (m.prototype = tu.prototype),
              (m.prototype.constructor = m),
              (tt.prototype = ni(tu.prototype)),
              (tt.prototype.constructor = tt);
            function Ne(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = fn),
                (this.__views__ = []);
            }
            function Kc() {
              var e = new Ne(this.__wrapped__);
              return (
                (e.__actions__ = Pn(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = Pn(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = Pn(this.__views__)),
                e
              );
            }
            function Yc() {
              if (this.__filtered__) {
                var e = new Ne(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()), (e.__dir__ *= -1);
              return e;
            }
            function jc() {
              var e = this.__wrapped__.value(),
                n = this.__dir__,
                r = ge(e),
                o = n < 0,
                d = r ? e.length : 0,
                v = ad(0, d, this.__views__),
                _ = v.start,
                T = v.end,
                I = T - _,
                F = o ? T : _ - 1,
                W = this.__iteratees__,
                G = W.length,
                V = 0,
                ie = yn(I, this.__takeCount__);
              if (!r || (!o && d == I && ie == I))
                return rf(e, this.__actions__);
              var se = [];
              e: for (; I-- && V < ie; ) {
                F += n;
                for (var Ae = -1, fe = e[F]; ++Ae < G; ) {
                  var Ee = W[Ae],
                    Le = Ee.iteratee,
                    Vn = Ee.type,
                    Tn = Le(fe);
                  if (Vn == be) fe = Tn;
                  else if (!Tn) {
                    if (Vn == Je) continue e;
                    break e;
                  }
                }
                se[V++] = fe;
              }
              return se;
            }
            (Ne.prototype = ni(tu.prototype)), (Ne.prototype.constructor = Ne);
            function Tr(e) {
              var n = -1,
                r = e == null ? 0 : e.length;
              for (this.clear(); ++n < r; ) {
                var o = e[n];
                this.set(o[0], o[1]);
              }
            }
            function $c() {
              (this.__data__ = Ui ? Ui(null) : {}), (this.size = 0);
            }
            function Vc(e) {
              var n = this.has(e) && delete this.__data__[e];
              return (this.size -= n ? 1 : 0), n;
            }
            function Jc(e) {
              var n = this.__data__;
              if (Ui) {
                var r = n[e];
                return r === K ? u : r;
              }
              return le.call(n, e) ? n[e] : u;
            }
            function Zc(e) {
              var n = this.__data__;
              return Ui ? n[e] !== u : le.call(n, e);
            }
            function Xc(e, n) {
              var r = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (r[e] = Ui && n === u ? K : n),
                this
              );
            }
            (Tr.prototype.clear = $c),
              (Tr.prototype.delete = Vc),
              (Tr.prototype.get = Jc),
              (Tr.prototype.has = Zc),
              (Tr.prototype.set = Xc);
            function kt(e) {
              var n = -1,
                r = e == null ? 0 : e.length;
              for (this.clear(); ++n < r; ) {
                var o = e[n];
                this.set(o[0], o[1]);
              }
            }
            function Qc() {
              (this.__data__ = []), (this.size = 0);
            }
            function eh(e) {
              var n = this.__data__,
                r = ru(n, e);
              if (r < 0) return !1;
              var o = n.length - 1;
              return r == o ? n.pop() : Ja.call(n, r, 1), --this.size, !0;
            }
            function nh(e) {
              var n = this.__data__,
                r = ru(n, e);
              return r < 0 ? u : n[r][1];
            }
            function th(e) {
              return ru(this.__data__, e) > -1;
            }
            function rh(e, n) {
              var r = this.__data__,
                o = ru(r, e);
              return (
                o < 0 ? (++this.size, r.push([e, n])) : (r[o][1] = n), this
              );
            }
            (kt.prototype.clear = Qc),
              (kt.prototype.delete = eh),
              (kt.prototype.get = nh),
              (kt.prototype.has = th),
              (kt.prototype.set = rh);
            function Ht(e) {
              var n = -1,
                r = e == null ? 0 : e.length;
              for (this.clear(); ++n < r; ) {
                var o = e[n];
                this.set(o[0], o[1]);
              }
            }
            function ih() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Tr(),
                  map: new (Fi || kt)(),
                  string: new Tr(),
                });
            }
            function ah(e) {
              var n = gu(this, e).delete(e);
              return (this.size -= n ? 1 : 0), n;
            }
            function uh(e) {
              return gu(this, e).get(e);
            }
            function oh(e) {
              return gu(this, e).has(e);
            }
            function sh(e, n) {
              var r = gu(this, e),
                o = r.size;
              return r.set(e, n), (this.size += r.size == o ? 0 : 1), this;
            }
            (Ht.prototype.clear = ih),
              (Ht.prototype.delete = ah),
              (Ht.prototype.get = uh),
              (Ht.prototype.has = oh),
              (Ht.prototype.set = sh);
            function Cr(e) {
              var n = -1,
                r = e == null ? 0 : e.length;
              for (this.__data__ = new Ht(); ++n < r; ) this.add(e[n]);
            }
            function fh(e) {
              return this.__data__.set(e, K), this;
            }
            function lh(e) {
              return this.__data__.has(e);
            }
            (Cr.prototype.add = Cr.prototype.push = fh),
              (Cr.prototype.has = lh);
            function pt(e) {
              var n = (this.__data__ = new kt(e));
              this.size = n.size;
            }
            function ch() {
              (this.__data__ = new kt()), (this.size = 0);
            }
            function hh(e) {
              var n = this.__data__,
                r = n.delete(e);
              return (this.size = n.size), r;
            }
            function dh(e) {
              return this.__data__.get(e);
            }
            function ph(e) {
              return this.__data__.has(e);
            }
            function gh(e, n) {
              var r = this.__data__;
              if (r instanceof kt) {
                var o = r.__data__;
                if (!Fi || o.length < N - 1)
                  return o.push([e, n]), (this.size = ++r.size), this;
                r = this.__data__ = new Ht(o);
              }
              return r.set(e, n), (this.size = r.size), this;
            }
            (pt.prototype.clear = ch),
              (pt.prototype.delete = hh),
              (pt.prototype.get = dh),
              (pt.prototype.has = ph),
              (pt.prototype.set = gh);
            function Ps(e, n) {
              var r = ge(e),
                o = !r && Rr(e),
                d = !r && !o && fr(e),
                v = !r && !o && !d && ai(e),
                _ = r || o || d || v,
                T = _ ? _r(e.length, ae) : [],
                I = T.length;
              for (var F in e)
                (n || le.call(e, F)) &&
                  !(
                    _ &&
                    (F == "length" ||
                      (d && (F == "offset" || F == "parent")) ||
                      (v &&
                        (F == "buffer" ||
                          F == "byteLength" ||
                          F == "byteOffset")) ||
                      Ut(F, I))
                  ) &&
                  T.push(F);
              return T;
            }
            function Os(e) {
              var n = e.length;
              return n ? e[bo(0, n - 1)] : u;
            }
            function mh(e, n) {
              return mu(Pn(e), Nr(n, 0, e.length));
            }
            function vh(e) {
              return mu(Pn(e));
            }
            function fo(e, n, r) {
              ((r !== u && !gt(e[n], r)) || (r === u && !(n in e))) &&
                Bt(e, n, r);
            }
            function qi(e, n, r) {
              var o = e[n];
              (!(le.call(e, n) && gt(o, r)) || (r === u && !(n in e))) &&
                Bt(e, n, r);
            }
            function ru(e, n) {
              for (var r = e.length; r--; ) if (gt(e[r][0], n)) return r;
              return -1;
            }
            function yh(e, n, r, o) {
              return (
                ar(e, function (d, v, _) {
                  n(o, d, r(d), _);
                }),
                o
              );
            }
            function ks(e, n) {
              return e && Ct(n, sn(n), e);
            }
            function Ah(e, n) {
              return e && Ct(n, kn(n), e);
            }
            function Bt(e, n, r) {
              n == "__proto__" && Za
                ? Za(e, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0,
                  })
                : (e[n] = r);
            }
            function lo(e, n) {
              for (var r = -1, o = n.length, d = S(o), v = e == null; ++r < o; )
                d[r] = v ? u : Ko(e, n[r]);
              return d;
            }
            function Nr(e, n, r) {
              return (
                e === e &&
                  (r !== u && (e = e <= r ? e : r),
                  n !== u && (e = e >= n ? e : n)),
                e
              );
            }
            function rt(e, n, r, o, d, v) {
              var _,
                T = n & me,
                I = n & de,
                F = n & De;
              if ((r && (_ = d ? r(e, o, d, v) : r(e)), _ !== u)) return _;
              if (!qe(e)) return e;
              var W = ge(e);
              if (W) {
                if (((_ = od(e)), !T)) return Pn(e, _);
              } else {
                var G = An(e),
                  V = G == st || G == dr;
                if (fr(e)) return of(e, T);
                if (G == Ln || G == Kt || (V && !d)) {
                  if (((_ = I || V ? {} : Tf(e)), !T))
                    return I ? Jh(e, Ah(_, e)) : Vh(e, ks(_, e));
                } else {
                  if (!Pe[G]) return d ? e : {};
                  _ = sd(e, G, T);
                }
              }
              v || (v = new pt());
              var ie = v.get(e);
              if (ie) return ie;
              v.set(e, _),
                nl(e)
                  ? e.forEach(function (fe) {
                      _.add(rt(fe, n, r, fe, e, v));
                    })
                  : Qf(e) &&
                    e.forEach(function (fe, Ee) {
                      _.set(Ee, rt(fe, n, r, Ee, e, v));
                    });
              var se = F ? (I ? Mo : Io) : I ? kn : sn,
                Ae = W ? u : se(e);
              return (
                x(Ae || e, function (fe, Ee) {
                  Ae && ((Ee = fe), (fe = e[Ee])),
                    qi(_, Ee, rt(fe, n, r, Ee, e, v));
                }),
                _
              );
            }
            function bh(e) {
              var n = sn(e);
              return function (r) {
                return Hs(r, e, n);
              };
            }
            function Hs(e, n, r) {
              var o = r.length;
              if (e == null) return !o;
              for (e = J(e); o--; ) {
                var d = r[o],
                  v = n[d],
                  _ = e[d];
                if ((_ === u && !(d in e)) || !v(_)) return !1;
              }
              return !0;
            }
            function Bs(e, n, r) {
              if (typeof e != "function") throw new xe(U);
              return Ji(function () {
                e.apply(u, r);
              }, n);
            }
            function zi(e, n, r, o) {
              var d = -1,
                v = D,
                _ = !0,
                T = e.length,
                I = [],
                F = n.length;
              if (!T) return I;
              r && (n = Z(n, xn(r))),
                o
                  ? ((v = q), (_ = !1))
                  : n.length >= N && ((v = wr), (_ = !1), (n = new Cr(n)));
              e: for (; ++d < T; ) {
                var W = e[d],
                  G = r == null ? W : r(W);
                if (((W = o || W !== 0 ? W : 0), _ && G === G)) {
                  for (var V = F; V--; ) if (n[V] === G) continue e;
                  I.push(W);
                } else v(n, G, o) || I.push(W);
              }
              return I;
            }
            var ar = hf(Tt),
              Fs = hf(ho, !0);
            function xh(e, n) {
              var r = !0;
              return (
                ar(e, function (o, d, v) {
                  return (r = !!n(o, d, v)), r;
                }),
                r
              );
            }
            function iu(e, n, r) {
              for (var o = -1, d = e.length; ++o < d; ) {
                var v = e[o],
                  _ = n(v);
                if (_ != null && (T === u ? _ === _ && !$n(_) : r(_, T)))
                  var T = _,
                    I = v;
              }
              return I;
            }
            function _h(e, n, r, o) {
              var d = e.length;
              for (
                r = ye(r),
                  r < 0 && (r = -r > d ? 0 : d + r),
                  o = o === u || o > d ? d : ye(o),
                  o < 0 && (o += d),
                  o = r > o ? 0 : rl(o);
                r < o;

              )
                e[r++] = n;
              return e;
            }
            function Ws(e, n) {
              var r = [];
              return (
                ar(e, function (o, d, v) {
                  n(o, d, v) && r.push(o);
                }),
                r
              );
            }
            function cn(e, n, r, o, d) {
              var v = -1,
                _ = e.length;
              for (r || (r = ld), d || (d = []); ++v < _; ) {
                var T = e[v];
                n > 0 && r(T)
                  ? n > 1
                    ? cn(T, n - 1, r, o, d)
                    : pe(d, T)
                  : o || (d[d.length] = T);
              }
              return d;
            }
            var co = df(),
              Us = df(!0);
            function Tt(e, n) {
              return e && co(e, n, sn);
            }
            function ho(e, n) {
              return e && Us(e, n, sn);
            }
            function au(e, n) {
              return k(n, function (r) {
                return Gt(e[r]);
              });
            }
            function Lr(e, n) {
              n = or(n, e);
              for (var r = 0, o = n.length; e != null && r < o; )
                e = e[Nt(n[r++])];
              return r && r == o ? e : u;
            }
            function Gs(e, n, r) {
              var o = n(e);
              return ge(e) ? o : pe(o, r(e));
            }
            function Sn(e) {
              return e == null
                ? e === u
                  ? mr
                  : pi
                : Er && Er in J(e)
                ? id(e)
                : vd(e);
            }
            function po(e, n) {
              return e > n;
            }
            function wh(e, n) {
              return e != null && le.call(e, n);
            }
            function Sh(e, n) {
              return e != null && n in J(e);
            }
            function Eh(e, n, r) {
              return e >= yn(n, r) && e < rn(n, r);
            }
            function go(e, n, r) {
              for (
                var o = r ? q : D,
                  d = e[0].length,
                  v = e.length,
                  _ = v,
                  T = S(v),
                  I = 1 / 0,
                  F = [];
                _--;

              ) {
                var W = e[_];
                _ && n && (W = Z(W, xn(n))),
                  (I = yn(W.length, I)),
                  (T[_] =
                    !r && (n || (d >= 120 && W.length >= 120))
                      ? new Cr(_ && W)
                      : u);
              }
              W = e[0];
              var G = -1,
                V = T[0];
              e: for (; ++G < d && F.length < I; ) {
                var ie = W[G],
                  se = n ? n(ie) : ie;
                if (
                  ((ie = r || ie !== 0 ? ie : 0),
                  !(V ? wr(V, se) : o(F, se, r)))
                ) {
                  for (_ = v; --_; ) {
                    var Ae = T[_];
                    if (!(Ae ? wr(Ae, se) : o(e[_], se, r))) continue e;
                  }
                  V && V.push(se), F.push(ie);
                }
              }
              return F;
            }
            function Th(e, n, r, o) {
              return (
                Tt(e, function (d, v, _) {
                  n(o, r(d), v, _);
                }),
                o
              );
            }
            function Ki(e, n, r) {
              (n = or(n, e)), (e = If(e, n));
              var o = e == null ? e : e[Nt(at(n))];
              return o == null ? u : p(o, e, r);
            }
            function qs(e) {
              return Ke(e) && Sn(e) == Kt;
            }
            function Ch(e) {
              return Ke(e) && Sn(e) == vr;
            }
            function Nh(e) {
              return Ke(e) && Sn(e) == Yt;
            }
            function Yi(e, n, r, o, d) {
              return e === n
                ? !0
                : e == null || n == null || (!Ke(e) && !Ke(n))
                ? e !== e && n !== n
                : Lh(e, n, r, o, Yi, d);
            }
            function Lh(e, n, r, o, d, v) {
              var _ = ge(e),
                T = ge(n),
                I = _ ? Br : An(e),
                F = T ? Br : An(n);
              (I = I == Kt ? Ln : I), (F = F == Kt ? Ln : F);
              var W = I == Ln,
                G = F == Ln,
                V = I == F;
              if (V && fr(e)) {
                if (!fr(n)) return !1;
                (_ = !0), (W = !1);
              }
              if (V && !W)
                return (
                  v || (v = new pt()),
                  _ || ai(e) ? wf(e, n, r, o, d, v) : td(e, n, I, r, o, d, v)
                );
              if (!(r & ee)) {
                var ie = W && le.call(e, "__wrapped__"),
                  se = G && le.call(n, "__wrapped__");
                if (ie || se) {
                  var Ae = ie ? e.value() : e,
                    fe = se ? n.value() : n;
                  return v || (v = new pt()), d(Ae, fe, r, o, v);
                }
              }
              return V ? (v || (v = new pt()), rd(e, n, r, o, d, v)) : !1;
            }
            function Ih(e) {
              return Ke(e) && An(e) == Nn;
            }
            function mo(e, n, r, o) {
              var d = r.length,
                v = d,
                _ = !o;
              if (e == null) return !v;
              for (e = J(e); d--; ) {
                var T = r[d];
                if (_ && T[2] ? T[1] !== e[T[0]] : !(T[0] in e)) return !1;
              }
              for (; ++d < v; ) {
                T = r[d];
                var I = T[0],
                  F = e[I],
                  W = T[1];
                if (_ && T[2]) {
                  if (F === u && !(I in e)) return !1;
                } else {
                  var G = new pt();
                  if (o) var V = o(F, W, I, e, n, G);
                  if (!(V === u ? Yi(W, F, ee | $, o, G) : V)) return !1;
                }
              }
              return !0;
            }
            function zs(e) {
              if (!qe(e) || hd(e)) return !1;
              var n = Gt(e) ? Ic : vi;
              return n.test(Mr(e));
            }
            function Mh(e) {
              return Ke(e) && Sn(e) == gr;
            }
            function Rh(e) {
              return Ke(e) && An(e) == Un;
            }
            function Dh(e) {
              return Ke(e) && _u(e.length) && !!Be[Sn(e)];
            }
            function Ks(e) {
              return typeof e == "function"
                ? e
                : e == null
                ? Hn
                : typeof e == "object"
                ? ge(e)
                  ? $s(e[0], e[1])
                  : js(e)
                : pl(e);
            }
            function vo(e) {
              if (!Vi(e)) return kc(e);
              var n = [];
              for (var r in J(e))
                le.call(e, r) && r != "constructor" && n.push(r);
              return n;
            }
            function Ph(e) {
              if (!qe(e)) return md(e);
              var n = Vi(e),
                r = [];
              for (var o in e)
                (o == "constructor" && (n || !le.call(e, o))) || r.push(o);
              return r;
            }
            function yo(e, n) {
              return e < n;
            }
            function Ys(e, n) {
              var r = -1,
                o = On(e) ? S(e.length) : [];
              return (
                ar(e, function (d, v, _) {
                  o[++r] = n(d, v, _);
                }),
                o
              );
            }
            function js(e) {
              var n = Do(e);
              return n.length == 1 && n[0][2]
                ? Nf(n[0][0], n[0][1])
                : function (r) {
                    return r === e || mo(r, e, n);
                  };
            }
            function $s(e, n) {
              return Oo(e) && Cf(n)
                ? Nf(Nt(e), n)
                : function (r) {
                    var o = Ko(r, e);
                    return o === u && o === n ? Yo(r, e) : Yi(n, o, ee | $);
                  };
            }
            function uu(e, n, r, o, d) {
              e !== n &&
                co(
                  n,
                  function (v, _) {
                    if ((d || (d = new pt()), qe(v))) Oh(e, n, _, r, uu, o, d);
                    else {
                      var T = o ? o(Ho(e, _), v, _ + "", e, n, d) : u;
                      T === u && (T = v), fo(e, _, T);
                    }
                  },
                  kn
                );
            }
            function Oh(e, n, r, o, d, v, _) {
              var T = Ho(e, r),
                I = Ho(n, r),
                F = _.get(I);
              if (F) {
                fo(e, r, F);
                return;
              }
              var W = v ? v(T, I, r + "", e, n, _) : u,
                G = W === u;
              if (G) {
                var V = ge(I),
                  ie = !V && fr(I),
                  se = !V && !ie && ai(I);
                (W = I),
                  V || ie || se
                    ? ge(T)
                      ? (W = T)
                      : Ze(T)
                      ? (W = Pn(T))
                      : ie
                      ? ((G = !1), (W = of(I, !0)))
                      : se
                      ? ((G = !1), (W = sf(I, !0)))
                      : (W = [])
                    : Zi(I) || Rr(I)
                    ? ((W = T),
                      Rr(T) ? (W = il(T)) : (!qe(T) || Gt(T)) && (W = Tf(I)))
                    : (G = !1);
              }
              G && (_.set(I, W), d(W, I, o, v, _), _.delete(I)), fo(e, r, W);
            }
            function Vs(e, n) {
              var r = e.length;
              if (r) return (n += n < 0 ? r : 0), Ut(n, r) ? e[n] : u;
            }
            function Js(e, n, r) {
              n.length
                ? (n = Z(n, function (v) {
                    return ge(v)
                      ? function (_) {
                          return Lr(_, v.length === 1 ? v[0] : v);
                        }
                      : v;
                  }))
                : (n = [Hn]);
              var o = -1;
              n = Z(n, xn(oe()));
              var d = Ys(e, function (v, _, T) {
                var I = Z(n, function (F) {
                  return F(v);
                });
                return { criteria: I, index: ++o, value: v };
              });
              return wt(d, function (v, _) {
                return $h(v, _, r);
              });
            }
            function kh(e, n) {
              return Zs(e, n, function (r, o) {
                return Yo(e, o);
              });
            }
            function Zs(e, n, r) {
              for (var o = -1, d = n.length, v = {}; ++o < d; ) {
                var _ = n[o],
                  T = Lr(e, _);
                r(T, _) && ji(v, or(_, e), T);
              }
              return v;
            }
            function Hh(e) {
              return function (n) {
                return Lr(n, e);
              };
            }
            function Ao(e, n, r, o) {
              var d = o ? xr : He,
                v = -1,
                _ = n.length,
                T = e;
              for (e === n && (n = Pn(n)), r && (T = Z(e, xn(r))); ++v < _; )
                for (
                  var I = 0, F = n[v], W = r ? r(F) : F;
                  (I = d(T, W, I, o)) > -1;

                )
                  T !== e && Ja.call(T, I, 1), Ja.call(e, I, 1);
              return e;
            }
            function Xs(e, n) {
              for (var r = e ? n.length : 0, o = r - 1; r--; ) {
                var d = n[r];
                if (r == o || d !== v) {
                  var v = d;
                  Ut(d) ? Ja.call(e, d, 1) : wo(e, d);
                }
              }
              return e;
            }
            function bo(e, n) {
              return e + Qa(Rs() * (n - e + 1));
            }
            function Bh(e, n, r, o) {
              for (
                var d = -1, v = rn(Xa((n - e) / (r || 1)), 0), _ = S(v);
                v--;

              )
                (_[o ? v : ++d] = e), (e += r);
              return _;
            }
            function xo(e, n) {
              var r = "";
              if (!e || n < 1 || n > Qe) return r;
              do n % 2 && (r += e), (n = Qa(n / 2)), n && (e += e);
              while (n);
              return r;
            }
            function _e(e, n) {
              return Bo(Lf(e, n, Hn), e + "");
            }
            function Fh(e) {
              return Os(ui(e));
            }
            function Wh(e, n) {
              var r = ui(e);
              return mu(r, Nr(n, 0, r.length));
            }
            function ji(e, n, r, o) {
              if (!qe(e)) return e;
              n = or(n, e);
              for (
                var d = -1, v = n.length, _ = v - 1, T = e;
                T != null && ++d < v;

              ) {
                var I = Nt(n[d]),
                  F = r;
                if (
                  I === "__proto__" ||
                  I === "constructor" ||
                  I === "prototype"
                )
                  return e;
                if (d != _) {
                  var W = T[I];
                  (F = o ? o(W, I, T) : u),
                    F === u && (F = qe(W) ? W : Ut(n[d + 1]) ? [] : {});
                }
                qi(T, I, F), (T = T[I]);
              }
              return e;
            }
            var Qs = eu
                ? function (e, n) {
                    return eu.set(e, n), e;
                  }
                : Hn,
              Uh = Za
                ? function (e, n) {
                    return Za(e, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: $o(n),
                      writable: !0,
                    });
                  }
                : Hn;
            function Gh(e) {
              return mu(ui(e));
            }
            function it(e, n, r) {
              var o = -1,
                d = e.length;
              n < 0 && (n = -n > d ? 0 : d + n),
                (r = r > d ? d : r),
                r < 0 && (r += d),
                (d = n > r ? 0 : (r - n) >>> 0),
                (n >>>= 0);
              for (var v = S(d); ++o < d; ) v[o] = e[o + n];
              return v;
            }
            function qh(e, n) {
              var r;
              return (
                ar(e, function (o, d, v) {
                  return (r = n(o, d, v)), !r;
                }),
                !!r
              );
            }
            function ou(e, n, r) {
              var o = 0,
                d = e == null ? o : e.length;
              if (typeof n == "number" && n === n && d <= di) {
                for (; o < d; ) {
                  var v = (o + d) >>> 1,
                    _ = e[v];
                  _ !== null && !$n(_) && (r ? _ <= n : _ < n)
                    ? (o = v + 1)
                    : (d = v);
                }
                return d;
              }
              return _o(e, n, Hn, r);
            }
            function _o(e, n, r, o) {
              var d = 0,
                v = e == null ? 0 : e.length;
              if (v === 0) return 0;
              n = r(n);
              for (
                var _ = n !== n, T = n === null, I = $n(n), F = n === u;
                d < v;

              ) {
                var W = Qa((d + v) / 2),
                  G = r(e[W]),
                  V = G !== u,
                  ie = G === null,
                  se = G === G,
                  Ae = $n(G);
                if (_) var fe = o || se;
                else
                  F
                    ? (fe = se && (o || V))
                    : T
                    ? (fe = se && V && (o || !ie))
                    : I
                    ? (fe = se && V && !ie && (o || !Ae))
                    : ie || Ae
                    ? (fe = !1)
                    : (fe = o ? G <= n : G < n);
                fe ? (d = W + 1) : (v = W);
              }
              return yn(v, da);
            }
            function ef(e, n) {
              for (var r = -1, o = e.length, d = 0, v = []; ++r < o; ) {
                var _ = e[r],
                  T = n ? n(_) : _;
                if (!r || !gt(T, I)) {
                  var I = T;
                  v[d++] = _ === 0 ? 0 : _;
                }
              }
              return v;
            }
            function nf(e) {
              return typeof e == "number" ? e : $n(e) ? un : +e;
            }
            function jn(e) {
              if (typeof e == "string") return e;
              if (ge(e)) return Z(e, jn) + "";
              if ($n(e)) return Ds ? Ds.call(e) : "";
              var n = e + "";
              return n == "0" && 1 / e == -Ce ? "-0" : n;
            }
            function ur(e, n, r) {
              var o = -1,
                d = D,
                v = e.length,
                _ = !0,
                T = [],
                I = T;
              if (r) (_ = !1), (d = q);
              else if (v >= N) {
                var F = n ? null : ed(e);
                if (F) return Ot(F);
                (_ = !1), (d = wr), (I = new Cr());
              } else I = n ? [] : T;
              e: for (; ++o < v; ) {
                var W = e[o],
                  G = n ? n(W) : W;
                if (((W = r || W !== 0 ? W : 0), _ && G === G)) {
                  for (var V = I.length; V--; ) if (I[V] === G) continue e;
                  n && I.push(G), T.push(W);
                } else d(I, G, r) || (I !== T && I.push(G), T.push(W));
              }
              return T;
            }
            function wo(e, n) {
              return (
                (n = or(n, e)), (e = If(e, n)), e == null || delete e[Nt(at(n))]
              );
            }
            function tf(e, n, r, o) {
              return ji(e, n, r(Lr(e, n)), o);
            }
            function su(e, n, r, o) {
              for (
                var d = e.length, v = o ? d : -1;
                (o ? v-- : ++v < d) && n(e[v], v, e);

              );
              return r
                ? it(e, o ? 0 : v, o ? v + 1 : d)
                : it(e, o ? v + 1 : 0, o ? d : v);
            }
            function rf(e, n) {
              var r = e;
              return (
                r instanceof Ne && (r = r.value()),
                he(
                  n,
                  function (o, d) {
                    return d.func.apply(d.thisArg, pe([o], d.args));
                  },
                  r
                )
              );
            }
            function So(e, n, r) {
              var o = e.length;
              if (o < 2) return o ? ur(e[0]) : [];
              for (var d = -1, v = S(o); ++d < o; )
                for (var _ = e[d], T = -1; ++T < o; )
                  T != d && (v[d] = zi(v[d] || _, e[T], n, r));
              return ur(cn(v, 1), n, r);
            }
            function af(e, n, r) {
              for (var o = -1, d = e.length, v = n.length, _ = {}; ++o < d; ) {
                var T = o < v ? n[o] : u;
                r(_, e[o], T);
              }
              return _;
            }
            function Eo(e) {
              return Ze(e) ? e : [];
            }
            function To(e) {
              return typeof e == "function" ? e : Hn;
            }
            function or(e, n) {
              return ge(e) ? e : Oo(e, n) ? [e] : Pf(Oe(e));
            }
            var zh = _e;
            function sr(e, n, r) {
              var o = e.length;
              return (r = r === u ? o : r), !n && r >= o ? e : it(e, n, r);
            }
            var uf =
              Mc ||
              function (e) {
                return Ue.clearTimeout(e);
              };
            function of(e, n) {
              if (n) return e.slice();
              var r = e.length,
                o = Cs ? Cs(r) : new e.constructor(r);
              return e.copy(o), o;
            }
            function Co(e) {
              var n = new e.constructor(e.byteLength);
              return new $a(n).set(new $a(e)), n;
            }
            function Kh(e, n) {
              var r = n ? Co(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.byteLength);
            }
            function Yh(e) {
              var n = new e.constructor(e.source, wa.exec(e));
              return (n.lastIndex = e.lastIndex), n;
            }
            function jh(e) {
              return Gi ? J(Gi.call(e)) : {};
            }
            function sf(e, n) {
              var r = n ? Co(e.buffer) : e.buffer;
              return new e.constructor(r, e.byteOffset, e.length);
            }
            function ff(e, n) {
              if (e !== n) {
                var r = e !== u,
                  o = e === null,
                  d = e === e,
                  v = $n(e),
                  _ = n !== u,
                  T = n === null,
                  I = n === n,
                  F = $n(n);
                if (
                  (!T && !F && !v && e > n) ||
                  (v && _ && I && !T && !F) ||
                  (o && _ && I) ||
                  (!r && I) ||
                  !d
                )
                  return 1;
                if (
                  (!o && !v && !F && e < n) ||
                  (F && r && d && !o && !v) ||
                  (T && r && d) ||
                  (!_ && d) ||
                  !I
                )
                  return -1;
              }
              return 0;
            }
            function $h(e, n, r) {
              for (
                var o = -1,
                  d = e.criteria,
                  v = n.criteria,
                  _ = d.length,
                  T = r.length;
                ++o < _;

              ) {
                var I = ff(d[o], v[o]);
                if (I) {
                  if (o >= T) return I;
                  var F = r[o];
                  return I * (F == "desc" ? -1 : 1);
                }
              }
              return e.index - n.index;
            }
            function lf(e, n, r, o) {
              for (
                var d = -1,
                  v = e.length,
                  _ = r.length,
                  T = -1,
                  I = n.length,
                  F = rn(v - _, 0),
                  W = S(I + F),
                  G = !o;
                ++T < I;

              )
                W[T] = n[T];
              for (; ++d < _; ) (G || d < v) && (W[r[d]] = e[d]);
              for (; F--; ) W[T++] = e[d++];
              return W;
            }
            function cf(e, n, r, o) {
              for (
                var d = -1,
                  v = e.length,
                  _ = -1,
                  T = r.length,
                  I = -1,
                  F = n.length,
                  W = rn(v - T, 0),
                  G = S(W + F),
                  V = !o;
                ++d < W;

              )
                G[d] = e[d];
              for (var ie = d; ++I < F; ) G[ie + I] = n[I];
              for (; ++_ < T; ) (V || d < v) && (G[ie + r[_]] = e[d++]);
              return G;
            }
            function Pn(e, n) {
              var r = -1,
                o = e.length;
              for (n || (n = S(o)); ++r < o; ) n[r] = e[r];
              return n;
            }
            function Ct(e, n, r, o) {
              var d = !r;
              r || (r = {});
              for (var v = -1, _ = n.length; ++v < _; ) {
                var T = n[v],
                  I = o ? o(r[T], e[T], T, r, e) : u;
                I === u && (I = e[T]), d ? Bt(r, T, I) : qi(r, T, I);
              }
              return r;
            }
            function Vh(e, n) {
              return Ct(e, Po(e), n);
            }
            function Jh(e, n) {
              return Ct(e, Sf(e), n);
            }
            function fu(e, n) {
              return function (r, o) {
                var d = ge(r) ? w : yh,
                  v = n ? n() : {};
                return d(r, e, oe(o, 2), v);
              };
            }
            function ti(e) {
              return _e(function (n, r) {
                var o = -1,
                  d = r.length,
                  v = d > 1 ? r[d - 1] : u,
                  _ = d > 2 ? r[2] : u;
                for (
                  v = e.length > 3 && typeof v == "function" ? (d--, v) : u,
                    _ && En(r[0], r[1], _) && ((v = d < 3 ? u : v), (d = 1)),
                    n = J(n);
                  ++o < d;

                ) {
                  var T = r[o];
                  T && e(n, T, o, v);
                }
                return n;
              });
            }
            function hf(e, n) {
              return function (r, o) {
                if (r == null) return r;
                if (!On(r)) return e(r, o);
                for (
                  var d = r.length, v = n ? d : -1, _ = J(r);
                  (n ? v-- : ++v < d) && o(_[v], v, _) !== !1;

                );
                return r;
              };
            }
            function df(e) {
              return function (n, r, o) {
                for (var d = -1, v = J(n), _ = o(n), T = _.length; T--; ) {
                  var I = _[e ? T : ++d];
                  if (r(v[I], I, v) === !1) break;
                }
                return n;
              };
            }
            function Zh(e, n, r) {
              var o = n & Ie,
                d = $i(e);
              function v() {
                var _ = this && this !== Ue && this instanceof v ? d : e;
                return _.apply(o ? r : this, arguments);
              }
              return v;
            }
            function pf(e) {
              return function (n) {
                n = Oe(n);
                var r = Dn(n) ? _n(n) : u,
                  o = r ? r[0] : n.charAt(0),
                  d = r ? sr(r, 1).join("") : n.slice(1);
                return o[e]() + d;
              };
            }
            function ri(e) {
              return function (n) {
                return he(hl(cl(n).replace(Li, "")), e, "");
              };
            }
            function $i(e) {
              return function () {
                var n = arguments;
                switch (n.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(n[0]);
                  case 2:
                    return new e(n[0], n[1]);
                  case 3:
                    return new e(n[0], n[1], n[2]);
                  case 4:
                    return new e(n[0], n[1], n[2], n[3]);
                  case 5:
                    return new e(n[0], n[1], n[2], n[3], n[4]);
                  case 6:
                    return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                  case 7:
                    return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                }
                var r = ni(e.prototype),
                  o = e.apply(r, n);
                return qe(o) ? o : r;
              };
            }
            function Xh(e, n, r) {
              var o = $i(e);
              function d() {
                for (
                  var v = arguments.length, _ = S(v), T = v, I = ii(d);
                  T--;

                )
                  _[T] = arguments[T];
                var F = v < 3 && _[0] !== I && _[v - 1] !== I ? [] : Yn(_, I);
                if (((v -= F.length), v < r))
                  return Af(e, n, lu, d.placeholder, u, _, F, u, u, r - v);
                var W = this && this !== Ue && this instanceof d ? o : e;
                return p(W, this, _);
              }
              return d;
            }
            function gf(e) {
              return function (n, r, o) {
                var d = J(n);
                if (!On(n)) {
                  var v = oe(r, 3);
                  (n = sn(n)),
                    (r = function (T) {
                      return v(d[T], T, d);
                    });
                }
                var _ = e(n, r, o);
                return _ > -1 ? d[v ? n[_] : _] : u;
              };
            }
            function mf(e) {
              return Wt(function (n) {
                var r = n.length,
                  o = r,
                  d = tt.prototype.thru;
                for (e && n.reverse(); o--; ) {
                  var v = n[o];
                  if (typeof v != "function") throw new xe(U);
                  if (d && !_ && pu(v) == "wrapper") var _ = new tt([], !0);
                }
                for (o = _ ? o : r; ++o < r; ) {
                  v = n[o];
                  var T = pu(v),
                    I = T == "wrapper" ? Ro(v) : u;
                  I &&
                  ko(I[0]) &&
                  I[1] == (f | ze | $e | re) &&
                  !I[4].length &&
                  I[9] == 1
                    ? (_ = _[pu(I[0])].apply(_, I[3]))
                    : (_ = v.length == 1 && ko(v) ? _[T]() : _.thru(v));
                }
                return function () {
                  var F = arguments,
                    W = F[0];
                  if (_ && F.length == 1 && ge(W)) return _.plant(W).value();
                  for (var G = 0, V = r ? n[G].apply(this, F) : W; ++G < r; )
                    V = n[G].call(this, V);
                  return V;
                };
              });
            }
            function lu(e, n, r, o, d, v, _, T, I, F) {
              var W = n & f,
                G = n & Ie,
                V = n & ne,
                ie = n & (ze | an),
                se = n & j,
                Ae = V ? u : $i(e);
              function fe() {
                for (var Ee = arguments.length, Le = S(Ee), Vn = Ee; Vn--; )
                  Le[Vn] = arguments[Vn];
                if (ie)
                  var Tn = ii(fe),
                    Jn = Kn(Le, Tn);
                if (
                  (o && (Le = lf(Le, o, d, ie)),
                  v && (Le = cf(Le, v, _, ie)),
                  (Ee -= Jn),
                  ie && Ee < F)
                ) {
                  var Xe = Yn(Le, Tn);
                  return Af(e, n, lu, fe.placeholder, r, Le, Xe, T, I, F - Ee);
                }
                var mt = G ? r : this,
                  zt = V ? mt[e] : e;
                return (
                  (Ee = Le.length),
                  T ? (Le = yd(Le, T)) : se && Ee > 1 && Le.reverse(),
                  W && I < Ee && (Le.length = I),
                  this &&
                    this !== Ue &&
                    this instanceof fe &&
                    (zt = Ae || $i(zt)),
                  zt.apply(mt, Le)
                );
              }
              return fe;
            }
            function vf(e, n) {
              return function (r, o) {
                return Th(r, e, n(o), {});
              };
            }
            function cu(e, n) {
              return function (r, o) {
                var d;
                if (r === u && o === u) return n;
                if ((r !== u && (d = r), o !== u)) {
                  if (d === u) return o;
                  typeof r == "string" || typeof o == "string"
                    ? ((r = jn(r)), (o = jn(o)))
                    : ((r = nf(r)), (o = nf(o))),
                    (d = e(r, o));
                }
                return d;
              };
            }
            function No(e) {
              return Wt(function (n) {
                return (
                  (n = Z(n, xn(oe()))),
                  _e(function (r) {
                    var o = this;
                    return e(n, function (d) {
                      return p(d, o, r);
                    });
                  })
                );
              });
            }
            function hu(e, n) {
              n = n === u ? " " : jn(n);
              var r = n.length;
              if (r < 2) return r ? xo(n, e) : n;
              var o = xo(n, Xa(e / Et(n)));
              return Dn(n) ? sr(_n(o), 0, e).join("") : o.slice(0, e);
            }
            function Qh(e, n, r, o) {
              var d = n & Ie,
                v = $i(e);
              function _() {
                for (
                  var T = -1,
                    I = arguments.length,
                    F = -1,
                    W = o.length,
                    G = S(W + I),
                    V = this && this !== Ue && this instanceof _ ? v : e;
                  ++F < W;

                )
                  G[F] = o[F];
                for (; I--; ) G[F++] = arguments[++T];
                return p(V, d ? r : this, G);
              }
              return _;
            }
            function yf(e) {
              return function (n, r, o) {
                return (
                  o && typeof o != "number" && En(n, r, o) && (r = o = u),
                  (n = qt(n)),
                  r === u ? ((r = n), (n = 0)) : (r = qt(r)),
                  (o = o === u ? (n < r ? 1 : -1) : qt(o)),
                  Bh(n, r, o, e)
                );
              };
            }
            function du(e) {
              return function (n, r) {
                return (
                  (typeof n == "string" && typeof r == "string") ||
                    ((n = ut(n)), (r = ut(r))),
                  e(n, r)
                );
              };
            }
            function Af(e, n, r, o, d, v, _, T, I, F) {
              var W = n & ze,
                G = W ? _ : u,
                V = W ? u : _,
                ie = W ? v : u,
                se = W ? u : v;
              (n |= W ? $e : bn),
                (n &= ~(W ? bn : $e)),
                n & Wn || (n &= ~(Ie | ne));
              var Ae = [e, n, d, ie, G, se, V, T, I, F],
                fe = r.apply(u, Ae);
              return ko(e) && Mf(fe, Ae), (fe.placeholder = o), Rf(fe, e, n);
            }
            function Lo(e) {
              var n = Q[e];
              return function (r, o) {
                if (
                  ((r = ut(r)),
                  (o = o == null ? 0 : yn(ye(o), 292)),
                  o && Ms(r))
                ) {
                  var d = (Oe(r) + "e").split("e"),
                    v = n(d[0] + "e" + (+d[1] + o));
                  return (
                    (d = (Oe(v) + "e").split("e")), +(d[0] + "e" + (+d[1] - o))
                  );
                }
                return n(r);
              };
            }
            var ed =
              Qr && 1 / Ot(new Qr([, -0]))[1] == Ce
                ? function (e) {
                    return new Qr(e);
                  }
                : Zo;
            function bf(e) {
              return function (n) {
                var r = An(n);
                return r == Nn ? Zr(n) : r == Un ? ki(n) : ht(n, e(n));
              };
            }
            function Ft(e, n, r, o, d, v, _, T) {
              var I = n & ne;
              if (!I && typeof e != "function") throw new xe(U);
              var F = o ? o.length : 0;
              if (
                (F || ((n &= ~($e | bn)), (o = d = u)),
                (_ = _ === u ? _ : rn(ye(_), 0)),
                (T = T === u ? T : ye(T)),
                (F -= d ? d.length : 0),
                n & bn)
              ) {
                var W = o,
                  G = d;
                o = d = u;
              }
              var V = I ? u : Ro(e),
                ie = [e, n, r, o, d, W, G, v, _, T];
              if (
                (V && gd(ie, V),
                (e = ie[0]),
                (n = ie[1]),
                (r = ie[2]),
                (o = ie[3]),
                (d = ie[4]),
                (T = ie[9] =
                  ie[9] === u ? (I ? 0 : e.length) : rn(ie[9] - F, 0)),
                !T && n & (ze | an) && (n &= ~(ze | an)),
                !n || n == Ie)
              )
                var se = Zh(e, n, r);
              else
                n == ze || n == an
                  ? (se = Xh(e, n, T))
                  : (n == $e || n == (Ie | $e)) && !d.length
                  ? (se = Qh(e, n, r, o))
                  : (se = lu.apply(u, ie));
              var Ae = V ? Qs : Mf;
              return Rf(Ae(se, ie), e, n);
            }
            function xf(e, n, r, o) {
              return e === u || (gt(e, tn[r]) && !le.call(o, r)) ? n : e;
            }
            function _f(e, n, r, o, d, v) {
              return (
                qe(e) &&
                  qe(n) &&
                  (v.set(n, e), uu(e, n, u, _f, v), v.delete(n)),
                e
              );
            }
            function nd(e) {
              return Zi(e) ? u : e;
            }
            function wf(e, n, r, o, d, v) {
              var _ = r & ee,
                T = e.length,
                I = n.length;
              if (T != I && !(_ && I > T)) return !1;
              var F = v.get(e),
                W = v.get(n);
              if (F && W) return F == n && W == e;
              var G = -1,
                V = !0,
                ie = r & $ ? new Cr() : u;
              for (v.set(e, n), v.set(n, e); ++G < T; ) {
                var se = e[G],
                  Ae = n[G];
                if (o)
                  var fe = _ ? o(Ae, se, G, n, e, v) : o(se, Ae, G, e, n, v);
                if (fe !== u) {
                  if (fe) continue;
                  V = !1;
                  break;
                }
                if (ie) {
                  if (
                    !Ge(n, function (Ee, Le) {
                      if (!wr(ie, Le) && (se === Ee || d(se, Ee, r, o, v)))
                        return ie.push(Le);
                    })
                  ) {
                    V = !1;
                    break;
                  }
                } else if (!(se === Ae || d(se, Ae, r, o, v))) {
                  V = !1;
                  break;
                }
              }
              return v.delete(e), v.delete(n), V;
            }
            function td(e, n, r, o, d, v, _) {
              switch (r) {
                case jt:
                  if (
                    e.byteLength != n.byteLength ||
                    e.byteOffset != n.byteOffset
                  )
                    return !1;
                  (e = e.buffer), (n = n.buffer);
                case vr:
                  return !(
                    e.byteLength != n.byteLength || !v(new $a(e), new $a(n))
                  );
                case hr:
                case Yt:
                case pr:
                  return gt(+e, +n);
                case Fr:
                  return e.name == n.name && e.message == n.message;
                case gr:
                case pn:
                  return e == n + "";
                case Nn:
                  var T = Zr;
                case Un:
                  var I = o & ee;
                  if ((T || (T = Ot), e.size != n.size && !I)) return !1;
                  var F = _.get(e);
                  if (F) return F == n;
                  (o |= $), _.set(e, n);
                  var W = wf(T(e), T(n), o, d, v, _);
                  return _.delete(e), W;
                case vt:
                  if (Gi) return Gi.call(e) == Gi.call(n);
              }
              return !1;
            }
            function rd(e, n, r, o, d, v) {
              var _ = r & ee,
                T = Io(e),
                I = T.length,
                F = Io(n),
                W = F.length;
              if (I != W && !_) return !1;
              for (var G = I; G--; ) {
                var V = T[G];
                if (!(_ ? V in n : le.call(n, V))) return !1;
              }
              var ie = v.get(e),
                se = v.get(n);
              if (ie && se) return ie == n && se == e;
              var Ae = !0;
              v.set(e, n), v.set(n, e);
              for (var fe = _; ++G < I; ) {
                V = T[G];
                var Ee = e[V],
                  Le = n[V];
                if (o)
                  var Vn = _ ? o(Le, Ee, V, n, e, v) : o(Ee, Le, V, e, n, v);
                if (!(Vn === u ? Ee === Le || d(Ee, Le, r, o, v) : Vn)) {
                  Ae = !1;
                  break;
                }
                fe || (fe = V == "constructor");
              }
              if (Ae && !fe) {
                var Tn = e.constructor,
                  Jn = n.constructor;
                Tn != Jn &&
                  "constructor" in e &&
                  "constructor" in n &&
                  !(
                    typeof Tn == "function" &&
                    Tn instanceof Tn &&
                    typeof Jn == "function" &&
                    Jn instanceof Jn
                  ) &&
                  (Ae = !1);
              }
              return v.delete(e), v.delete(n), Ae;
            }
            function Wt(e) {
              return Bo(Lf(e, u, Bf), e + "");
            }
            function Io(e) {
              return Gs(e, sn, Po);
            }
            function Mo(e) {
              return Gs(e, kn, Sf);
            }
            var Ro = eu
              ? function (e) {
                  return eu.get(e);
                }
              : Zo;
            function pu(e) {
              for (
                var n = e.name + "",
                  r = ei[n],
                  o = le.call(ei, n) ? r.length : 0;
                o--;

              ) {
                var d = r[o],
                  v = d.func;
                if (v == null || v == e) return d.name;
              }
              return n;
            }
            function ii(e) {
              var n = le.call(m, "placeholder") ? m : e;
              return n.placeholder;
            }
            function oe() {
              var e = m.iteratee || Vo;
              return (
                (e = e === Vo ? Ks : e),
                arguments.length ? e(arguments[0], arguments[1]) : e
              );
            }
            function gu(e, n) {
              var r = e.__data__;
              return cd(n)
                ? r[typeof n == "string" ? "string" : "hash"]
                : r.map;
            }
            function Do(e) {
              for (var n = sn(e), r = n.length; r--; ) {
                var o = n[r],
                  d = e[o];
                n[r] = [o, d, Cf(d)];
              }
              return n;
            }
            function Ir(e, n) {
              var r = qa(e, n);
              return zs(r) ? r : u;
            }
            function id(e) {
              var n = le.call(e, Er),
                r = e[Er];
              try {
                e[Er] = u;
                var o = !0;
              } catch {}
              var d = Ya.call(e);
              return o && (n ? (e[Er] = r) : delete e[Er]), d;
            }
            var Po = uo
                ? function (e) {
                    return e == null
                      ? []
                      : ((e = J(e)),
                        k(uo(e), function (n) {
                          return Ls.call(e, n);
                        }));
                  }
                : Xo,
              Sf = uo
                ? function (e) {
                    for (var n = []; e; ) pe(n, Po(e)), (e = Va(e));
                    return n;
                  }
                : Xo,
              An = Sn;
            ((oo && An(new oo(new ArrayBuffer(1))) != jt) ||
              (Fi && An(new Fi()) != Nn) ||
              (so && An(so.resolve()) != Xn) ||
              (Qr && An(new Qr()) != Un) ||
              (Wi && An(new Wi()) != te)) &&
              (An = function (e) {
                var n = Sn(e),
                  r = n == Ln ? e.constructor : u,
                  o = r ? Mr(r) : "";
                if (o)
                  switch (o) {
                    case Wc:
                      return jt;
                    case Uc:
                      return Nn;
                    case Gc:
                      return Xn;
                    case qc:
                      return Un;
                    case zc:
                      return te;
                  }
                return n;
              });
            function ad(e, n, r) {
              for (var o = -1, d = r.length; ++o < d; ) {
                var v = r[o],
                  _ = v.size;
                switch (v.type) {
                  case "drop":
                    e += _;
                    break;
                  case "dropRight":
                    n -= _;
                    break;
                  case "take":
                    n = yn(n, e + _);
                    break;
                  case "takeRight":
                    e = rn(e, n - _);
                    break;
                }
              }
              return { start: e, end: n };
            }
            function ud(e) {
              var n = e.match(Wu);
              return n ? n[1].split(Uu) : [];
            }
            function Ef(e, n, r) {
              n = or(n, e);
              for (var o = -1, d = n.length, v = !1; ++o < d; ) {
                var _ = Nt(n[o]);
                if (!(v = e != null && r(e, _))) break;
                e = e[_];
              }
              return v || ++o != d
                ? v
                : ((d = e == null ? 0 : e.length),
                  !!d && _u(d) && Ut(_, d) && (ge(e) || Rr(e)));
            }
            function od(e) {
              var n = e.length,
                r = new e.constructor(n);
              return (
                n &&
                  typeof e[0] == "string" &&
                  le.call(e, "index") &&
                  ((r.index = e.index), (r.input = e.input)),
                r
              );
            }
            function Tf(e) {
              return typeof e.constructor == "function" && !Vi(e)
                ? ni(Va(e))
                : {};
            }
            function sd(e, n, r) {
              var o = e.constructor;
              switch (n) {
                case vr:
                  return Co(e);
                case hr:
                case Yt:
                  return new o(+e);
                case jt:
                  return Kh(e, r);
                case gi:
                case Wr:
                case Ur:
                case It:
                case Gn:
                case ft:
                case yt:
                case mi:
                case $t:
                  return sf(e, r);
                case Nn:
                  return new o();
                case pr:
                case pn:
                  return new o(e);
                case gr:
                  return Yh(e);
                case Un:
                  return new o();
                case vt:
                  return jh(e);
              }
            }
            function fd(e, n) {
              var r = n.length;
              if (!r) return e;
              var o = r - 1;
              return (
                (n[o] = (r > 1 ? "& " : "") + n[o]),
                (n = n.join(r > 2 ? ", " : " ")),
                e.replace(
                  Fu,
                  `{
/* [wrapped with ` +
                    n +
                    `] */
`
                )
              );
            }
            function ld(e) {
              return ge(e) || Rr(e) || !!(Is && e && e[Is]);
            }
            function Ut(e, n) {
              var r = typeof e;
              return (
                (n = n ?? Qe),
                !!n &&
                  (r == "number" || (r != "symbol" && zr.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < n
              );
            }
            function En(e, n, r) {
              if (!qe(r)) return !1;
              var o = typeof n;
              return (
                o == "number"
                  ? On(r) && Ut(n, r.length)
                  : o == "string" && n in r
              )
                ? gt(r[n], e)
                : !1;
            }
            function Oo(e, n) {
              if (ge(e)) return !1;
              var r = typeof e;
              return r == "number" ||
                r == "symbol" ||
                r == "boolean" ||
                e == null ||
                $n(e)
                ? !0
                : Aa.test(e) || !Bu.test(e) || (n != null && e in J(n));
            }
            function cd(e) {
              var n = typeof e;
              return n == "string" ||
                n == "number" ||
                n == "symbol" ||
                n == "boolean"
                ? e !== "__proto__"
                : e === null;
            }
            function ko(e) {
              var n = pu(e),
                r = m[n];
              if (typeof r != "function" || !(n in Ne.prototype)) return !1;
              if (e === r) return !0;
              var o = Ro(r);
              return !!o && e === o[0];
            }
            function hd(e) {
              return !!Ts && Ts in e;
            }
            var dd = wn ? Gt : Qo;
            function Vi(e) {
              var n = e && e.constructor,
                r = (typeof n == "function" && n.prototype) || tn;
              return e === r;
            }
            function Cf(e) {
              return e === e && !qe(e);
            }
            function Nf(e, n) {
              return function (r) {
                return r == null ? !1 : r[e] === n && (n !== u || e in J(r));
              };
            }
            function pd(e) {
              var n = bu(e, function (o) {
                  return r.size === Y && r.clear(), o;
                }),
                r = n.cache;
              return n;
            }
            function gd(e, n) {
              var r = e[1],
                o = n[1],
                d = r | o,
                v = d < (Ie | ne | f),
                _ =
                  (o == f && r == ze) ||
                  (o == f && r == re && e[7].length <= n[8]) ||
                  (o == (f | re) && n[7].length <= n[8] && r == ze);
              if (!(v || _)) return e;
              o & Ie && ((e[2] = n[2]), (d |= r & Ie ? 0 : Wn));
              var T = n[3];
              if (T) {
                var I = e[3];
                (e[3] = I ? lf(I, T, n[4]) : T),
                  (e[4] = I ? Yn(e[3], ue) : n[4]);
              }
              return (
                (T = n[5]),
                T &&
                  ((I = e[5]),
                  (e[5] = I ? cf(I, T, n[6]) : T),
                  (e[6] = I ? Yn(e[5], ue) : n[6])),
                (T = n[7]),
                T && (e[7] = T),
                o & f && (e[8] = e[8] == null ? n[8] : yn(e[8], n[8])),
                e[9] == null && (e[9] = n[9]),
                (e[0] = n[0]),
                (e[1] = d),
                e
              );
            }
            function md(e) {
              var n = [];
              if (e != null) for (var r in J(e)) n.push(r);
              return n;
            }
            function vd(e) {
              return Ya.call(e);
            }
            function Lf(e, n, r) {
              return (
                (n = rn(n === u ? e.length - 1 : n, 0)),
                function () {
                  for (
                    var o = arguments,
                      d = -1,
                      v = rn(o.length - n, 0),
                      _ = S(v);
                    ++d < v;

                  )
                    _[d] = o[n + d];
                  d = -1;
                  for (var T = S(n + 1); ++d < n; ) T[d] = o[d];
                  return (T[n] = r(_)), p(e, this, T);
                }
              );
            }
            function If(e, n) {
              return n.length < 2 ? e : Lr(e, it(n, 0, -1));
            }
            function yd(e, n) {
              for (var r = e.length, o = yn(n.length, r), d = Pn(e); o--; ) {
                var v = n[o];
                e[o] = Ut(v, r) ? d[v] : u;
              }
              return e;
            }
            function Ho(e, n) {
              if (
                !(n === "constructor" && typeof e[n] == "function") &&
                n != "__proto__"
              )
                return e[n];
            }
            var Mf = Df(Qs),
              Ji =
                Dc ||
                function (e, n) {
                  return Ue.setTimeout(e, n);
                },
              Bo = Df(Uh);
            function Rf(e, n, r) {
              var o = n + "";
              return Bo(e, fd(o, Ad(ud(o), r)));
            }
            function Df(e) {
              var n = 0,
                r = 0;
              return function () {
                var o = Hc(),
                  d = ce - (o - r);
                if (((r = o), d > 0)) {
                  if (++n >= Ve) return arguments[0];
                } else n = 0;
                return e.apply(u, arguments);
              };
            }
            function mu(e, n) {
              var r = -1,
                o = e.length,
                d = o - 1;
              for (n = n === u ? o : n; ++r < n; ) {
                var v = bo(r, d),
                  _ = e[v];
                (e[v] = e[r]), (e[r] = _);
              }
              return (e.length = n), e;
            }
            var Pf = pd(function (e) {
              var n = [];
              return (
                e.charCodeAt(0) === 46 && n.push(""),
                e.replace(ba, function (r, o, d, v) {
                  n.push(d ? v.replace(qu, "$1") : o || r);
                }),
                n
              );
            });
            function Nt(e) {
              if (typeof e == "string" || $n(e)) return e;
              var n = e + "";
              return n == "0" && 1 / e == -Ce ? "-0" : n;
            }
            function Mr(e) {
              if (e != null) {
                try {
                  return dt.call(e);
                } catch {}
                try {
                  return e + "";
                } catch {}
              }
              return "";
            }
            function Ad(e, n) {
              return (
                x(pa, function (r) {
                  var o = "_." + r[0];
                  n & r[1] && !D(e, o) && e.push(o);
                }),
                e.sort()
              );
            }
            function Of(e) {
              if (e instanceof Ne) return e.clone();
              var n = new tt(e.__wrapped__, e.__chain__);
              return (
                (n.__actions__ = Pn(e.__actions__)),
                (n.__index__ = e.__index__),
                (n.__values__ = e.__values__),
                n
              );
            }
            function bd(e, n, r) {
              (r ? En(e, n, r) : n === u) ? (n = 1) : (n = rn(ye(n), 0));
              var o = e == null ? 0 : e.length;
              if (!o || n < 1) return [];
              for (var d = 0, v = 0, _ = S(Xa(o / n)); d < o; )
                _[v++] = it(e, d, (d += n));
              return _;
            }
            function xd(e) {
              for (
                var n = -1, r = e == null ? 0 : e.length, o = 0, d = [];
                ++n < r;

              ) {
                var v = e[n];
                v && (d[o++] = v);
              }
              return d;
            }
            function _d() {
              var e = arguments.length;
              if (!e) return [];
              for (var n = S(e - 1), r = arguments[0], o = e; o--; )
                n[o - 1] = arguments[o];
              return pe(ge(r) ? Pn(r) : [r], cn(n, 1));
            }
            var wd = _e(function (e, n) {
                return Ze(e) ? zi(e, cn(n, 1, Ze, !0)) : [];
              }),
              Sd = _e(function (e, n) {
                var r = at(n);
                return (
                  Ze(r) && (r = u),
                  Ze(e) ? zi(e, cn(n, 1, Ze, !0), oe(r, 2)) : []
                );
              }),
              Ed = _e(function (e, n) {
                var r = at(n);
                return (
                  Ze(r) && (r = u), Ze(e) ? zi(e, cn(n, 1, Ze, !0), u, r) : []
                );
              });
            function Td(e, n, r) {
              var o = e == null ? 0 : e.length;
              return o
                ? ((n = r || n === u ? 1 : ye(n)), it(e, n < 0 ? 0 : n, o))
                : [];
            }
            function Cd(e, n, r) {
              var o = e == null ? 0 : e.length;
              return o
                ? ((n = r || n === u ? 1 : ye(n)),
                  (n = o - n),
                  it(e, 0, n < 0 ? 0 : n))
                : [];
            }
            function Nd(e, n) {
              return e && e.length ? su(e, oe(n, 3), !0, !0) : [];
            }
            function Ld(e, n) {
              return e && e.length ? su(e, oe(n, 3), !0) : [];
            }
            function Id(e, n, r, o) {
              var d = e == null ? 0 : e.length;
              return d
                ? (r &&
                    typeof r != "number" &&
                    En(e, n, r) &&
                    ((r = 0), (o = d)),
                  _h(e, n, r, o))
                : [];
            }
            function kf(e, n, r) {
              var o = e == null ? 0 : e.length;
              if (!o) return -1;
              var d = r == null ? 0 : ye(r);
              return d < 0 && (d = rn(o + d, 0)), Se(e, oe(n, 3), d);
            }
            function Hf(e, n, r) {
              var o = e == null ? 0 : e.length;
              if (!o) return -1;
              var d = o - 1;
              return (
                r !== u &&
                  ((d = ye(r)), (d = r < 0 ? rn(o + d, 0) : yn(d, o - 1))),
                Se(e, oe(n, 3), d, !0)
              );
            }
            function Bf(e) {
              var n = e == null ? 0 : e.length;
              return n ? cn(e, 1) : [];
            }
            function Md(e) {
              var n = e == null ? 0 : e.length;
              return n ? cn(e, Ce) : [];
            }
            function Rd(e, n) {
              var r = e == null ? 0 : e.length;
              return r ? ((n = n === u ? 1 : ye(n)), cn(e, n)) : [];
            }
            function Dd(e) {
              for (
                var n = -1, r = e == null ? 0 : e.length, o = {};
                ++n < r;

              ) {
                var d = e[n];
                o[d[0]] = d[1];
              }
              return o;
            }
            function Ff(e) {
              return e && e.length ? e[0] : u;
            }
            function Pd(e, n, r) {
              var o = e == null ? 0 : e.length;
              if (!o) return -1;
              var d = r == null ? 0 : ye(r);
              return d < 0 && (d = rn(o + d, 0)), He(e, n, d);
            }
            function Od(e) {
              var n = e == null ? 0 : e.length;
              return n ? it(e, 0, -1) : [];
            }
            var kd = _e(function (e) {
                var n = Z(e, Eo);
                return n.length && n[0] === e[0] ? go(n) : [];
              }),
              Hd = _e(function (e) {
                var n = at(e),
                  r = Z(e, Eo);
                return (
                  n === at(r) ? (n = u) : r.pop(),
                  r.length && r[0] === e[0] ? go(r, oe(n, 2)) : []
                );
              }),
              Bd = _e(function (e) {
                var n = at(e),
                  r = Z(e, Eo);
                return (
                  (n = typeof n == "function" ? n : u),
                  n && r.pop(),
                  r.length && r[0] === e[0] ? go(r, u, n) : []
                );
              });
            function Fd(e, n) {
              return e == null ? "" : Oc.call(e, n);
            }
            function at(e) {
              var n = e == null ? 0 : e.length;
              return n ? e[n - 1] : u;
            }
            function Wd(e, n, r) {
              var o = e == null ? 0 : e.length;
              if (!o) return -1;
              var d = o;
              return (
                r !== u &&
                  ((d = ye(r)), (d = d < 0 ? rn(o + d, 0) : yn(d, o - 1))),
                n === n ? Xr(e, n, d) : Se(e, Jr, d, !0)
              );
            }
            function Ud(e, n) {
              return e && e.length ? Vs(e, ye(n)) : u;
            }
            var Gd = _e(Wf);
            function Wf(e, n) {
              return e && e.length && n && n.length ? Ao(e, n) : e;
            }
            function qd(e, n, r) {
              return e && e.length && n && n.length ? Ao(e, n, oe(r, 2)) : e;
            }
            function zd(e, n, r) {
              return e && e.length && n && n.length ? Ao(e, n, u, r) : e;
            }
            var Kd = Wt(function (e, n) {
              var r = e == null ? 0 : e.length,
                o = lo(e, n);
              return (
                Xs(
                  e,
                  Z(n, function (d) {
                    return Ut(d, r) ? +d : d;
                  }).sort(ff)
                ),
                o
              );
            });
            function Yd(e, n) {
              var r = [];
              if (!(e && e.length)) return r;
              var o = -1,
                d = [],
                v = e.length;
              for (n = oe(n, 3); ++o < v; ) {
                var _ = e[o];
                n(_, o, e) && (r.push(_), d.push(o));
              }
              return Xs(e, d), r;
            }
            function Fo(e) {
              return e == null ? e : Fc.call(e);
            }
            function jd(e, n, r) {
              var o = e == null ? 0 : e.length;
              return o
                ? (r && typeof r != "number" && En(e, n, r)
                    ? ((n = 0), (r = o))
                    : ((n = n == null ? 0 : ye(n)), (r = r === u ? o : ye(r))),
                  it(e, n, r))
                : [];
            }
            function $d(e, n) {
              return ou(e, n);
            }
            function Vd(e, n, r) {
              return _o(e, n, oe(r, 2));
            }
            function Jd(e, n) {
              var r = e == null ? 0 : e.length;
              if (r) {
                var o = ou(e, n);
                if (o < r && gt(e[o], n)) return o;
              }
              return -1;
            }
            function Zd(e, n) {
              return ou(e, n, !0);
            }
            function Xd(e, n, r) {
              return _o(e, n, oe(r, 2), !0);
            }
            function Qd(e, n) {
              var r = e == null ? 0 : e.length;
              if (r) {
                var o = ou(e, n, !0) - 1;
                if (gt(e[o], n)) return o;
              }
              return -1;
            }
            function ep(e) {
              return e && e.length ? ef(e) : [];
            }
            function np(e, n) {
              return e && e.length ? ef(e, oe(n, 2)) : [];
            }
            function tp(e) {
              var n = e == null ? 0 : e.length;
              return n ? it(e, 1, n) : [];
            }
            function rp(e, n, r) {
              return e && e.length
                ? ((n = r || n === u ? 1 : ye(n)), it(e, 0, n < 0 ? 0 : n))
                : [];
            }
            function ip(e, n, r) {
              var o = e == null ? 0 : e.length;
              return o
                ? ((n = r || n === u ? 1 : ye(n)),
                  (n = o - n),
                  it(e, n < 0 ? 0 : n, o))
                : [];
            }
            function ap(e, n) {
              return e && e.length ? su(e, oe(n, 3), !1, !0) : [];
            }
            function up(e, n) {
              return e && e.length ? su(e, oe(n, 3)) : [];
            }
            var op = _e(function (e) {
                return ur(cn(e, 1, Ze, !0));
              }),
              sp = _e(function (e) {
                var n = at(e);
                return Ze(n) && (n = u), ur(cn(e, 1, Ze, !0), oe(n, 2));
              }),
              fp = _e(function (e) {
                var n = at(e);
                return (
                  (n = typeof n == "function" ? n : u),
                  ur(cn(e, 1, Ze, !0), u, n)
                );
              });
            function lp(e) {
              return e && e.length ? ur(e) : [];
            }
            function cp(e, n) {
              return e && e.length ? ur(e, oe(n, 2)) : [];
            }
            function hp(e, n) {
              return (
                (n = typeof n == "function" ? n : u),
                e && e.length ? ur(e, u, n) : []
              );
            }
            function Wo(e) {
              if (!(e && e.length)) return [];
              var n = 0;
              return (
                (e = k(e, function (r) {
                  if (Ze(r)) return (n = rn(r.length, n)), !0;
                })),
                _r(n, function (r) {
                  return Z(e, Pt(r));
                })
              );
            }
            function Uf(e, n) {
              if (!(e && e.length)) return [];
              var r = Wo(e);
              return n == null
                ? r
                : Z(r, function (o) {
                    return p(n, u, o);
                  });
            }
            var dp = _e(function (e, n) {
                return Ze(e) ? zi(e, n) : [];
              }),
              pp = _e(function (e) {
                return So(k(e, Ze));
              }),
              gp = _e(function (e) {
                var n = at(e);
                return Ze(n) && (n = u), So(k(e, Ze), oe(n, 2));
              }),
              mp = _e(function (e) {
                var n = at(e);
                return (n = typeof n == "function" ? n : u), So(k(e, Ze), u, n);
              }),
              vp = _e(Wo);
            function yp(e, n) {
              return af(e || [], n || [], qi);
            }
            function Ap(e, n) {
              return af(e || [], n || [], ji);
            }
            var bp = _e(function (e) {
              var n = e.length,
                r = n > 1 ? e[n - 1] : u;
              return (r = typeof r == "function" ? (e.pop(), r) : u), Uf(e, r);
            });
            function Gf(e) {
              var n = m(e);
              return (n.__chain__ = !0), n;
            }
            function xp(e, n) {
              return n(e), e;
            }
            function vu(e, n) {
              return n(e);
            }
            var _p = Wt(function (e) {
              var n = e.length,
                r = n ? e[0] : 0,
                o = this.__wrapped__,
                d = function (v) {
                  return lo(v, e);
                };
              return n > 1 ||
                this.__actions__.length ||
                !(o instanceof Ne) ||
                !Ut(r)
                ? this.thru(d)
                : ((o = o.slice(r, +r + (n ? 1 : 0))),
                  o.__actions__.push({ func: vu, args: [d], thisArg: u }),
                  new tt(o, this.__chain__).thru(function (v) {
                    return n && !v.length && v.push(u), v;
                  }));
            });
            function wp() {
              return Gf(this);
            }
            function Sp() {
              return new tt(this.value(), this.__chain__);
            }
            function Ep() {
              this.__values__ === u && (this.__values__ = tl(this.value()));
              var e = this.__index__ >= this.__values__.length,
                n = e ? u : this.__values__[this.__index__++];
              return { done: e, value: n };
            }
            function Tp() {
              return this;
            }
            function Cp(e) {
              for (var n, r = this; r instanceof tu; ) {
                var o = Of(r);
                (o.__index__ = 0),
                  (o.__values__ = u),
                  n ? (d.__wrapped__ = o) : (n = o);
                var d = o;
                r = r.__wrapped__;
              }
              return (d.__wrapped__ = e), n;
            }
            function Np() {
              var e = this.__wrapped__;
              if (e instanceof Ne) {
                var n = e;
                return (
                  this.__actions__.length && (n = new Ne(this)),
                  (n = n.reverse()),
                  n.__actions__.push({ func: vu, args: [Fo], thisArg: u }),
                  new tt(n, this.__chain__)
                );
              }
              return this.thru(Fo);
            }
            function Lp() {
              return rf(this.__wrapped__, this.__actions__);
            }
            var Ip = fu(function (e, n, r) {
              le.call(e, r) ? ++e[r] : Bt(e, r, 1);
            });
            function Mp(e, n, r) {
              var o = ge(e) ? O : xh;
              return r && En(e, n, r) && (n = u), o(e, oe(n, 3));
            }
            function Rp(e, n) {
              var r = ge(e) ? k : Ws;
              return r(e, oe(n, 3));
            }
            var Dp = gf(kf),
              Pp = gf(Hf);
            function Op(e, n) {
              return cn(yu(e, n), 1);
            }
            function kp(e, n) {
              return cn(yu(e, n), Ce);
            }
            function Hp(e, n, r) {
              return (r = r === u ? 1 : ye(r)), cn(yu(e, n), r);
            }
            function qf(e, n) {
              var r = ge(e) ? x : ar;
              return r(e, oe(n, 3));
            }
            function zf(e, n) {
              var r = ge(e) ? L : Fs;
              return r(e, oe(n, 3));
            }
            var Bp = fu(function (e, n, r) {
              le.call(e, r) ? e[r].push(n) : Bt(e, r, [n]);
            });
            function Fp(e, n, r, o) {
              (e = On(e) ? e : ui(e)), (r = r && !o ? ye(r) : 0);
              var d = e.length;
              return (
                r < 0 && (r = rn(d + r, 0)),
                wu(e) ? r <= d && e.indexOf(n, r) > -1 : !!d && He(e, n, r) > -1
              );
            }
            var Wp = _e(function (e, n, r) {
                var o = -1,
                  d = typeof n == "function",
                  v = On(e) ? S(e.length) : [];
                return (
                  ar(e, function (_) {
                    v[++o] = d ? p(n, _, r) : Ki(_, n, r);
                  }),
                  v
                );
              }),
              Up = fu(function (e, n, r) {
                Bt(e, r, n);
              });
            function yu(e, n) {
              var r = ge(e) ? Z : Ys;
              return r(e, oe(n, 3));
            }
            function Gp(e, n, r, o) {
              return e == null
                ? []
                : (ge(n) || (n = n == null ? [] : [n]),
                  (r = o ? u : r),
                  ge(r) || (r = r == null ? [] : [r]),
                  Js(e, n, r));
            }
            var qp = fu(
              function (e, n, r) {
                e[r ? 0 : 1].push(n);
              },
              function () {
                return [[], []];
              }
            );
            function zp(e, n, r) {
              var o = ge(e) ? he : ct,
                d = arguments.length < 3;
              return o(e, oe(n, 4), r, d, ar);
            }
            function Kp(e, n, r) {
              var o = ge(e) ? en : ct,
                d = arguments.length < 3;
              return o(e, oe(n, 4), r, d, Fs);
            }
            function Yp(e, n) {
              var r = ge(e) ? k : Ws;
              return r(e, xu(oe(n, 3)));
            }
            function jp(e) {
              var n = ge(e) ? Os : Fh;
              return n(e);
            }
            function $p(e, n, r) {
              (r ? En(e, n, r) : n === u) ? (n = 1) : (n = ye(n));
              var o = ge(e) ? mh : Wh;
              return o(e, n);
            }
            function Vp(e) {
              var n = ge(e) ? vh : Gh;
              return n(e);
            }
            function Jp(e) {
              if (e == null) return 0;
              if (On(e)) return wu(e) ? Et(e) : e.length;
              var n = An(e);
              return n == Nn || n == Un ? e.size : vo(e).length;
            }
            function Zp(e, n, r) {
              var o = ge(e) ? Ge : qh;
              return r && En(e, n, r) && (n = u), o(e, oe(n, 3));
            }
            var Xp = _e(function (e, n) {
                if (e == null) return [];
                var r = n.length;
                return (
                  r > 1 && En(e, n[0], n[1])
                    ? (n = [])
                    : r > 2 && En(n[0], n[1], n[2]) && (n = [n[0]]),
                  Js(e, cn(n, 1), [])
                );
              }),
              Au =
                Rc ||
                function () {
                  return Ue.Date.now();
                };
            function Qp(e, n) {
              if (typeof n != "function") throw new xe(U);
              return (
                (e = ye(e)),
                function () {
                  if (--e < 1) return n.apply(this, arguments);
                }
              );
            }
            function Kf(e, n, r) {
              return (
                (n = r ? u : n),
                (n = e && n == null ? e.length : n),
                Ft(e, f, u, u, u, u, n)
              );
            }
            function Yf(e, n) {
              var r;
              if (typeof n != "function") throw new xe(U);
              return (
                (e = ye(e)),
                function () {
                  return (
                    --e > 0 && (r = n.apply(this, arguments)),
                    e <= 1 && (n = u),
                    r
                  );
                }
              );
            }
            var Uo = _e(function (e, n, r) {
                var o = Ie;
                if (r.length) {
                  var d = Yn(r, ii(Uo));
                  o |= $e;
                }
                return Ft(e, o, n, r, d);
              }),
              jf = _e(function (e, n, r) {
                var o = Ie | ne;
                if (r.length) {
                  var d = Yn(r, ii(jf));
                  o |= $e;
                }
                return Ft(n, o, e, r, d);
              });
            function $f(e, n, r) {
              n = r ? u : n;
              var o = Ft(e, ze, u, u, u, u, u, n);
              return (o.placeholder = $f.placeholder), o;
            }
            function Vf(e, n, r) {
              n = r ? u : n;
              var o = Ft(e, an, u, u, u, u, u, n);
              return (o.placeholder = Vf.placeholder), o;
            }
            function Jf(e, n, r) {
              var o,
                d,
                v,
                _,
                T,
                I,
                F = 0,
                W = !1,
                G = !1,
                V = !0;
              if (typeof e != "function") throw new xe(U);
              (n = ut(n) || 0),
                qe(r) &&
                  ((W = !!r.leading),
                  (G = "maxWait" in r),
                  (v = G ? rn(ut(r.maxWait) || 0, n) : v),
                  (V = "trailing" in r ? !!r.trailing : V));
              function ie(Xe) {
                var mt = o,
                  zt = d;
                return (o = d = u), (F = Xe), (_ = e.apply(zt, mt)), _;
              }
              function se(Xe) {
                return (F = Xe), (T = Ji(Ee, n)), W ? ie(Xe) : _;
              }
              function Ae(Xe) {
                var mt = Xe - I,
                  zt = Xe - F,
                  gl = n - mt;
                return G ? yn(gl, v - zt) : gl;
              }
              function fe(Xe) {
                var mt = Xe - I,
                  zt = Xe - F;
                return I === u || mt >= n || mt < 0 || (G && zt >= v);
              }
              function Ee() {
                var Xe = Au();
                if (fe(Xe)) return Le(Xe);
                T = Ji(Ee, Ae(Xe));
              }
              function Le(Xe) {
                return (T = u), V && o ? ie(Xe) : ((o = d = u), _);
              }
              function Vn() {
                T !== u && uf(T), (F = 0), (o = I = d = T = u);
              }
              function Tn() {
                return T === u ? _ : Le(Au());
              }
              function Jn() {
                var Xe = Au(),
                  mt = fe(Xe);
                if (((o = arguments), (d = this), (I = Xe), mt)) {
                  if (T === u) return se(I);
                  if (G) return uf(T), (T = Ji(Ee, n)), ie(I);
                }
                return T === u && (T = Ji(Ee, n)), _;
              }
              return (Jn.cancel = Vn), (Jn.flush = Tn), Jn;
            }
            var eg = _e(function (e, n) {
                return Bs(e, 1, n);
              }),
              ng = _e(function (e, n, r) {
                return Bs(e, ut(n) || 0, r);
              });
            function tg(e) {
              return Ft(e, j);
            }
            function bu(e, n) {
              if (
                typeof e != "function" ||
                (n != null && typeof n != "function")
              )
                throw new xe(U);
              var r = function () {
                var o = arguments,
                  d = n ? n.apply(this, o) : o[0],
                  v = r.cache;
                if (v.has(d)) return v.get(d);
                var _ = e.apply(this, o);
                return (r.cache = v.set(d, _) || v), _;
              };
              return (r.cache = new (bu.Cache || Ht)()), r;
            }
            bu.Cache = Ht;
            function xu(e) {
              if (typeof e != "function") throw new xe(U);
              return function () {
                var n = arguments;
                switch (n.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, n[0]);
                  case 2:
                    return !e.call(this, n[0], n[1]);
                  case 3:
                    return !e.call(this, n[0], n[1], n[2]);
                }
                return !e.apply(this, n);
              };
            }
            function rg(e) {
              return Yf(2, e);
            }
            var ig = zh(function (e, n) {
                n =
                  n.length == 1 && ge(n[0])
                    ? Z(n[0], xn(oe()))
                    : Z(cn(n, 1), xn(oe()));
                var r = n.length;
                return _e(function (o) {
                  for (var d = -1, v = yn(o.length, r); ++d < v; )
                    o[d] = n[d].call(this, o[d]);
                  return p(e, this, o);
                });
              }),
              Go = _e(function (e, n) {
                var r = Yn(n, ii(Go));
                return Ft(e, $e, u, n, r);
              }),
              Zf = _e(function (e, n) {
                var r = Yn(n, ii(Zf));
                return Ft(e, bn, u, n, r);
              }),
              ag = Wt(function (e, n) {
                return Ft(e, re, u, u, u, n);
              });
            function ug(e, n) {
              if (typeof e != "function") throw new xe(U);
              return (n = n === u ? n : ye(n)), _e(e, n);
            }
            function og(e, n) {
              if (typeof e != "function") throw new xe(U);
              return (
                (n = n == null ? 0 : rn(ye(n), 0)),
                _e(function (r) {
                  var o = r[n],
                    d = sr(r, 0, n);
                  return o && pe(d, o), p(e, this, d);
                })
              );
            }
            function sg(e, n, r) {
              var o = !0,
                d = !0;
              if (typeof e != "function") throw new xe(U);
              return (
                qe(r) &&
                  ((o = "leading" in r ? !!r.leading : o),
                  (d = "trailing" in r ? !!r.trailing : d)),
                Jf(e, n, { leading: o, maxWait: n, trailing: d })
              );
            }
            function fg(e) {
              return Kf(e, 1);
            }
            function lg(e, n) {
              return Go(To(n), e);
            }
            function cg() {
              if (!arguments.length) return [];
              var e = arguments[0];
              return ge(e) ? e : [e];
            }
            function hg(e) {
              return rt(e, De);
            }
            function dg(e, n) {
              return (n = typeof n == "function" ? n : u), rt(e, De, n);
            }
            function pg(e) {
              return rt(e, me | De);
            }
            function gg(e, n) {
              return (n = typeof n == "function" ? n : u), rt(e, me | De, n);
            }
            function mg(e, n) {
              return n == null || Hs(e, n, sn(n));
            }
            function gt(e, n) {
              return e === n || (e !== e && n !== n);
            }
            var vg = du(po),
              yg = du(function (e, n) {
                return e >= n;
              }),
              Rr = qs(
                (function () {
                  return arguments;
                })()
              )
                ? qs
                : function (e) {
                    return (
                      Ke(e) && le.call(e, "callee") && !Ls.call(e, "callee")
                    );
                  },
              ge = S.isArray,
              Ag = t ? xn(t) : Ch;
            function On(e) {
              return e != null && _u(e.length) && !Gt(e);
            }
            function Ze(e) {
              return Ke(e) && On(e);
            }
            function bg(e) {
              return e === !0 || e === !1 || (Ke(e) && Sn(e) == hr);
            }
            var fr = Pc || Qo,
              xg = i ? xn(i) : Nh;
            function _g(e) {
              return Ke(e) && e.nodeType === 1 && !Zi(e);
            }
            function wg(e) {
              if (e == null) return !0;
              if (
                On(e) &&
                (ge(e) ||
                  typeof e == "string" ||
                  typeof e.splice == "function" ||
                  fr(e) ||
                  ai(e) ||
                  Rr(e))
              )
                return !e.length;
              var n = An(e);
              if (n == Nn || n == Un) return !e.size;
              if (Vi(e)) return !vo(e).length;
              for (var r in e) if (le.call(e, r)) return !1;
              return !0;
            }
            function Sg(e, n) {
              return Yi(e, n);
            }
            function Eg(e, n, r) {
              r = typeof r == "function" ? r : u;
              var o = r ? r(e, n) : u;
              return o === u ? Yi(e, n, u, r) : !!o;
            }
            function qo(e) {
              if (!Ke(e)) return !1;
              var n = Sn(e);
              return (
                n == Fr ||
                n == Zn ||
                (typeof e.message == "string" &&
                  typeof e.name == "string" &&
                  !Zi(e))
              );
            }
            function Tg(e) {
              return typeof e == "number" && Ms(e);
            }
            function Gt(e) {
              if (!qe(e)) return !1;
              var n = Sn(e);
              return n == st || n == dr || n == Ou || n == ku;
            }
            function Xf(e) {
              return typeof e == "number" && e == ye(e);
            }
            function _u(e) {
              return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qe;
            }
            function qe(e) {
              var n = typeof e;
              return e != null && (n == "object" || n == "function");
            }
            function Ke(e) {
              return e != null && typeof e == "object";
            }
            var Qf = a ? xn(a) : Ih;
            function Cg(e, n) {
              return e === n || mo(e, n, Do(n));
            }
            function Ng(e, n, r) {
              return (r = typeof r == "function" ? r : u), mo(e, n, Do(n), r);
            }
            function Lg(e) {
              return el(e) && e != +e;
            }
            function Ig(e) {
              if (dd(e)) throw new B(M);
              return zs(e);
            }
            function Mg(e) {
              return e === null;
            }
            function Rg(e) {
              return e == null;
            }
            function el(e) {
              return typeof e == "number" || (Ke(e) && Sn(e) == pr);
            }
            function Zi(e) {
              if (!Ke(e) || Sn(e) != Ln) return !1;
              var n = Va(e);
              if (n === null) return !0;
              var r = le.call(n, "constructor") && n.constructor;
              return (
                typeof r == "function" && r instanceof r && dt.call(r) == Nc
              );
            }
            var zo = s ? xn(s) : Mh;
            function Dg(e) {
              return Xf(e) && e >= -Qe && e <= Qe;
            }
            var nl = l ? xn(l) : Rh;
            function wu(e) {
              return typeof e == "string" || (!ge(e) && Ke(e) && Sn(e) == pn);
            }
            function $n(e) {
              return typeof e == "symbol" || (Ke(e) && Sn(e) == vt);
            }
            var ai = c ? xn(c) : Dh;
            function Pg(e) {
              return e === u;
            }
            function Og(e) {
              return Ke(e) && An(e) == te;
            }
            function kg(e) {
              return Ke(e) && Sn(e) == gn;
            }
            var Hg = du(yo),
              Bg = du(function (e, n) {
                return e <= n;
              });
            function tl(e) {
              if (!e) return [];
              if (On(e)) return wu(e) ? _n(e) : Pn(e);
              if (Bi && e[Bi]) return St(e[Bi]());
              var n = An(e),
                r = n == Nn ? Zr : n == Un ? Ot : ui;
              return r(e);
            }
            function qt(e) {
              if (!e) return e === 0 ? e : 0;
              if (((e = ut(e)), e === Ce || e === -Ce)) {
                var n = e < 0 ? -1 : 1;
                return n * Cn;
              }
              return e === e ? e : 0;
            }
            function ye(e) {
              var n = qt(e),
                r = n % 1;
              return n === n ? (r ? n - r : n) : 0;
            }
            function rl(e) {
              return e ? Nr(ye(e), 0, fn) : 0;
            }
            function ut(e) {
              if (typeof e == "number") return e;
              if ($n(e)) return un;
              if (qe(e)) {
                var n = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = qe(n) ? n + "" : n;
              }
              if (typeof e != "string") return e === 0 ? e : +e;
              e = nt(e);
              var r = Sa.test(e);
              return r || yi.test(e)
                ? no(e.slice(2), r ? 2 : 8)
                : Zt.test(e)
                ? un
                : +e;
            }
            function il(e) {
              return Ct(e, kn(e));
            }
            function Fg(e) {
              return e ? Nr(ye(e), -Qe, Qe) : e === 0 ? e : 0;
            }
            function Oe(e) {
              return e == null ? "" : jn(e);
            }
            var Wg = ti(function (e, n) {
                if (Vi(n) || On(n)) {
                  Ct(n, sn(n), e);
                  return;
                }
                for (var r in n) le.call(n, r) && qi(e, r, n[r]);
              }),
              al = ti(function (e, n) {
                Ct(n, kn(n), e);
              }),
              Su = ti(function (e, n, r, o) {
                Ct(n, kn(n), e, o);
              }),
              Ug = ti(function (e, n, r, o) {
                Ct(n, sn(n), e, o);
              }),
              Gg = Wt(lo);
            function qg(e, n) {
              var r = ni(e);
              return n == null ? r : ks(r, n);
            }
            var zg = _e(function (e, n) {
                e = J(e);
                var r = -1,
                  o = n.length,
                  d = o > 2 ? n[2] : u;
                for (d && En(n[0], n[1], d) && (o = 1); ++r < o; )
                  for (
                    var v = n[r], _ = kn(v), T = -1, I = _.length;
                    ++T < I;

                  ) {
                    var F = _[T],
                      W = e[F];
                    (W === u || (gt(W, tn[F]) && !le.call(e, F))) &&
                      (e[F] = v[F]);
                  }
                return e;
              }),
              Kg = _e(function (e) {
                return e.push(u, _f), p(ul, u, e);
              });
            function Yg(e, n) {
              return _t(e, oe(n, 3), Tt);
            }
            function jg(e, n) {
              return _t(e, oe(n, 3), ho);
            }
            function $g(e, n) {
              return e == null ? e : co(e, oe(n, 3), kn);
            }
            function Vg(e, n) {
              return e == null ? e : Us(e, oe(n, 3), kn);
            }
            function Jg(e, n) {
              return e && Tt(e, oe(n, 3));
            }
            function Zg(e, n) {
              return e && ho(e, oe(n, 3));
            }
            function Xg(e) {
              return e == null ? [] : au(e, sn(e));
            }
            function Qg(e) {
              return e == null ? [] : au(e, kn(e));
            }
            function Ko(e, n, r) {
              var o = e == null ? u : Lr(e, n);
              return o === u ? r : o;
            }
            function em(e, n) {
              return e != null && Ef(e, n, wh);
            }
            function Yo(e, n) {
              return e != null && Ef(e, n, Sh);
            }
            var nm = vf(function (e, n, r) {
                n != null &&
                  typeof n.toString != "function" &&
                  (n = Ya.call(n)),
                  (e[n] = r);
              }, $o(Hn)),
              tm = vf(function (e, n, r) {
                n != null &&
                  typeof n.toString != "function" &&
                  (n = Ya.call(n)),
                  le.call(e, n) ? e[n].push(r) : (e[n] = [r]);
              }, oe),
              rm = _e(Ki);
            function sn(e) {
              return On(e) ? Ps(e) : vo(e);
            }
            function kn(e) {
              return On(e) ? Ps(e, !0) : Ph(e);
            }
            function im(e, n) {
              var r = {};
              return (
                (n = oe(n, 3)),
                Tt(e, function (o, d, v) {
                  Bt(r, n(o, d, v), o);
                }),
                r
              );
            }
            function am(e, n) {
              var r = {};
              return (
                (n = oe(n, 3)),
                Tt(e, function (o, d, v) {
                  Bt(r, d, n(o, d, v));
                }),
                r
              );
            }
            var um = ti(function (e, n, r) {
                uu(e, n, r);
              }),
              ul = ti(function (e, n, r, o) {
                uu(e, n, r, o);
              }),
              om = Wt(function (e, n) {
                var r = {};
                if (e == null) return r;
                var o = !1;
                (n = Z(n, function (v) {
                  return (v = or(v, e)), o || (o = v.length > 1), v;
                })),
                  Ct(e, Mo(e), r),
                  o && (r = rt(r, me | de | De, nd));
                for (var d = n.length; d--; ) wo(r, n[d]);
                return r;
              });
            function sm(e, n) {
              return ol(e, xu(oe(n)));
            }
            var fm = Wt(function (e, n) {
              return e == null ? {} : kh(e, n);
            });
            function ol(e, n) {
              if (e == null) return {};
              var r = Z(Mo(e), function (o) {
                return [o];
              });
              return (
                (n = oe(n)),
                Zs(e, r, function (o, d) {
                  return n(o, d[0]);
                })
              );
            }
            function lm(e, n, r) {
              n = or(n, e);
              var o = -1,
                d = n.length;
              for (d || ((d = 1), (e = u)); ++o < d; ) {
                var v = e == null ? u : e[Nt(n[o])];
                v === u && ((o = d), (v = r)), (e = Gt(v) ? v.call(e) : v);
              }
              return e;
            }
            function cm(e, n, r) {
              return e == null ? e : ji(e, n, r);
            }
            function hm(e, n, r, o) {
              return (
                (o = typeof o == "function" ? o : u),
                e == null ? e : ji(e, n, r, o)
              );
            }
            var sl = bf(sn),
              fl = bf(kn);
            function dm(e, n, r) {
              var o = ge(e),
                d = o || fr(e) || ai(e);
              if (((n = oe(n, 4)), r == null)) {
                var v = e && e.constructor;
                d
                  ? (r = o ? new v() : [])
                  : qe(e)
                  ? (r = Gt(v) ? ni(Va(e)) : {})
                  : (r = {});
              }
              return (
                (d ? x : Tt)(e, function (_, T, I) {
                  return n(r, _, T, I);
                }),
                r
              );
            }
            function pm(e, n) {
              return e == null ? !0 : wo(e, n);
            }
            function gm(e, n, r) {
              return e == null ? e : tf(e, n, To(r));
            }
            function mm(e, n, r, o) {
              return (
                (o = typeof o == "function" ? o : u),
                e == null ? e : tf(e, n, To(r), o)
              );
            }
            function ui(e) {
              return e == null ? [] : Pi(e, sn(e));
            }
            function vm(e) {
              return e == null ? [] : Pi(e, kn(e));
            }
            function ym(e, n, r) {
              return (
                r === u && ((r = n), (n = u)),
                r !== u && ((r = ut(r)), (r = r === r ? r : 0)),
                n !== u && ((n = ut(n)), (n = n === n ? n : 0)),
                Nr(ut(e), n, r)
              );
            }
            function Am(e, n, r) {
              return (
                (n = qt(n)),
                r === u ? ((r = n), (n = 0)) : (r = qt(r)),
                (e = ut(e)),
                Eh(e, n, r)
              );
            }
            function bm(e, n, r) {
              if (
                (r && typeof r != "boolean" && En(e, n, r) && (n = r = u),
                r === u &&
                  (typeof n == "boolean"
                    ? ((r = n), (n = u))
                    : typeof e == "boolean" && ((r = e), (e = u))),
                e === u && n === u
                  ? ((e = 0), (n = 1))
                  : ((e = qt(e)), n === u ? ((n = e), (e = 0)) : (n = qt(n))),
                e > n)
              ) {
                var o = e;
                (e = n), (n = o);
              }
              if (r || e % 1 || n % 1) {
                var d = Rs();
                return yn(
                  e + d * (n - e + Ri("1e-" + ((d + "").length - 1))),
                  n
                );
              }
              return bo(e, n);
            }
            var xm = ri(function (e, n, r) {
              return (n = n.toLowerCase()), e + (r ? ll(n) : n);
            });
            function ll(e) {
              return jo(Oe(e).toLowerCase());
            }
            function cl(e) {
              return (e = Oe(e)), e && e.replace(Ea, tr).replace(Vu, "");
            }
            function _m(e, n, r) {
              (e = Oe(e)), (n = jn(n));
              var o = e.length;
              r = r === u ? o : Nr(ye(r), 0, o);
              var d = r;
              return (r -= n.length), r >= 0 && e.slice(r, d) == n;
            }
            function wm(e) {
              return (e = Oe(e)), e && ya.test(e) ? e.replace(Vt, ro) : e;
            }
            function Sm(e) {
              return (e = Oe(e)), e && Jt.test(e) ? e.replace(At, "\\$&") : e;
            }
            var Em = ri(function (e, n, r) {
                return e + (r ? "-" : "") + n.toLowerCase();
              }),
              Tm = ri(function (e, n, r) {
                return e + (r ? " " : "") + n.toLowerCase();
              }),
              Cm = pf("toLowerCase");
            function Nm(e, n, r) {
              (e = Oe(e)), (n = ye(n));
              var o = n ? Et(e) : 0;
              if (!n || o >= n) return e;
              var d = (n - o) / 2;
              return hu(Qa(d), r) + e + hu(Xa(d), r);
            }
            function Lm(e, n, r) {
              (e = Oe(e)), (n = ye(n));
              var o = n ? Et(e) : 0;
              return n && o < n ? e + hu(n - o, r) : e;
            }
            function Im(e, n, r) {
              (e = Oe(e)), (n = ye(n));
              var o = n ? Et(e) : 0;
              return n && o < n ? hu(n - o, r) + e : e;
            }
            function Mm(e, n, r) {
              return (
                r || n == null ? (n = 0) : n && (n = +n),
                Bc(Oe(e).replace(yr, ""), n || 0)
              );
            }
            function Rm(e, n, r) {
              return (
                (r ? En(e, n, r) : n === u) ? (n = 1) : (n = ye(n)),
                xo(Oe(e), n)
              );
            }
            function Dm() {
              var e = arguments,
                n = Oe(e[0]);
              return e.length < 3 ? n : n.replace(e[1], e[2]);
            }
            var Pm = ri(function (e, n, r) {
              return e + (r ? "_" : "") + n.toLowerCase();
            });
            function Om(e, n, r) {
              return (
                r && typeof r != "number" && En(e, n, r) && (n = r = u),
                (r = r === u ? fn : r >>> 0),
                r
                  ? ((e = Oe(e)),
                    e &&
                    (typeof n == "string" || (n != null && !zo(n))) &&
                    ((n = jn(n)), !n && Dn(e))
                      ? sr(_n(e), 0, r)
                      : e.split(n, r))
                  : []
              );
            }
            var km = ri(function (e, n, r) {
              return e + (r ? " " : "") + jo(n);
            });
            function Hm(e, n, r) {
              return (
                (e = Oe(e)),
                (r = r == null ? 0 : Nr(ye(r), 0, e.length)),
                (n = jn(n)),
                e.slice(r, r + n.length) == n
              );
            }
            function Bm(e, n, r) {
              var o = m.templateSettings;
              r && En(e, n, r) && (n = u), (e = Oe(e)), (n = Su({}, n, o, xf));
              var d = Su({}, n.imports, o.imports, xf),
                v = sn(d),
                _ = Pi(d, v),
                T,
                I,
                F = 0,
                W = n.interpolate || Kr,
                G = "__p += '",
                V = ve(
                  (n.escape || Kr).source +
                    "|" +
                    W.source +
                    "|" +
                    (W === Gr ? _a : Kr).source +
                    "|" +
                    (n.evaluate || Kr).source +
                    "|$",
                  "g"
                ),
                ie =
                  "//# sourceURL=" +
                  (le.call(n, "sourceURL")
                    ? (n.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++eo + "]") +
                  `
`;
              e.replace(V, function (fe, Ee, Le, Vn, Tn, Jn) {
                return (
                  Le || (Le = Vn),
                  (G += e.slice(F, Jn).replace(Ar, io)),
                  Ee &&
                    ((T = !0),
                    (G +=
                      `' +
__e(` +
                      Ee +
                      `) +
'`)),
                  Tn &&
                    ((I = !0),
                    (G +=
                      `';
` +
                      Tn +
                      `;
__p += '`)),
                  Le &&
                    (G +=
                      `' +
((__t = (` +
                      Le +
                      `)) == null ? '' : __t) +
'`),
                  (F = Jn + fe.length),
                  fe
                );
              }),
                (G += `';
`);
              var se = le.call(n, "variable") && n.variable;
              if (!se)
                G =
                  `with (obj) {
` +
                  G +
                  `
}
`;
              else if (Gu.test(se)) throw new B(z);
              (G = (I ? G.replace(ga, "") : G)
                .replace(ma, "$1")
                .replace(Hu, "$1;")),
                (G =
                  "function(" +
                  (se || "obj") +
                  `) {
` +
                  (se
                    ? ""
                    : `obj || (obj = {});
`) +
                  "var __t, __p = ''" +
                  (T ? ", __e = _.escape" : "") +
                  (I
                    ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                    : `;
`) +
                  G +
                  `return __p
}`);
              var Ae = dl(function () {
                return X(v, ie + "return " + G).apply(u, _);
              });
              if (((Ae.source = G), qo(Ae))) throw Ae;
              return Ae;
            }
            function Fm(e) {
              return Oe(e).toLowerCase();
            }
            function Wm(e) {
              return Oe(e).toUpperCase();
            }
            function Um(e, n, r) {
              if (((e = Oe(e)), e && (r || n === u))) return nt(e);
              if (!e || !(n = jn(n))) return e;
              var o = _n(e),
                d = _n(n),
                v = Re(o, d),
                _ = Sr(o, d) + 1;
              return sr(o, v, _).join("");
            }
            function Gm(e, n, r) {
              if (((e = Oe(e)), e && (r || n === u)))
                return e.slice(0, za(e) + 1);
              if (!e || !(n = jn(n))) return e;
              var o = _n(e),
                d = Sr(o, _n(n)) + 1;
              return sr(o, 0, d).join("");
            }
            function qm(e, n, r) {
              if (((e = Oe(e)), e && (r || n === u))) return e.replace(yr, "");
              if (!e || !(n = jn(n))) return e;
              var o = _n(e),
                d = Re(o, _n(n));
              return sr(o, d).join("");
            }
            function zm(e, n) {
              var r = Te,
                o = Me;
              if (qe(n)) {
                var d = "separator" in n ? n.separator : d;
                (r = "length" in n ? ye(n.length) : r),
                  (o = "omission" in n ? jn(n.omission) : o);
              }
              e = Oe(e);
              var v = e.length;
              if (Dn(e)) {
                var _ = _n(e);
                v = _.length;
              }
              if (r >= v) return e;
              var T = r - Et(o);
              if (T < 1) return o;
              var I = _ ? sr(_, 0, T).join("") : e.slice(0, T);
              if (d === u) return I + o;
              if ((_ && (T += I.length - T), zo(d))) {
                if (e.slice(T).search(d)) {
                  var F,
                    W = I;
                  for (
                    d.global || (d = ve(d.source, Oe(wa.exec(d)) + "g")),
                      d.lastIndex = 0;
                    (F = d.exec(W));

                  )
                    var G = F.index;
                  I = I.slice(0, G === u ? T : G);
                }
              } else if (e.indexOf(jn(d), T) != T) {
                var V = I.lastIndexOf(d);
                V > -1 && (I = I.slice(0, V));
              }
              return I + o;
            }
            function Km(e) {
              return (e = Oe(e)), e && va.test(e) ? e.replace(Mt, Hi) : e;
            }
            var Ym = ri(function (e, n, r) {
                return e + (r ? " " : "") + n.toUpperCase();
              }),
              jo = pf("toUpperCase");
            function hl(e, n, r) {
              return (
                (e = Oe(e)),
                (n = r ? u : n),
                n === u ? (Oi(e) ? C(e) : we(e)) : e.match(n) || []
              );
            }
            var dl = _e(function (e, n) {
                try {
                  return p(e, u, n);
                } catch (r) {
                  return qo(r) ? r : new B(r);
                }
              }),
              jm = Wt(function (e, n) {
                return (
                  x(n, function (r) {
                    (r = Nt(r)), Bt(e, r, Uo(e[r], e));
                  }),
                  e
                );
              });
            function $m(e) {
              var n = e == null ? 0 : e.length,
                r = oe();
              return (
                (e = n
                  ? Z(e, function (o) {
                      if (typeof o[1] != "function") throw new xe(U);
                      return [r(o[0]), o[1]];
                    })
                  : []),
                _e(function (o) {
                  for (var d = -1; ++d < n; ) {
                    var v = e[d];
                    if (p(v[0], this, o)) return p(v[1], this, o);
                  }
                })
              );
            }
            function Vm(e) {
              return bh(rt(e, me));
            }
            function $o(e) {
              return function () {
                return e;
              };
            }
            function Jm(e, n) {
              return e == null || e !== e ? n : e;
            }
            var Zm = mf(),
              Xm = mf(!0);
            function Hn(e) {
              return e;
            }
            function Vo(e) {
              return Ks(typeof e == "function" ? e : rt(e, me));
            }
            function Qm(e) {
              return js(rt(e, me));
            }
            function e0(e, n) {
              return $s(e, rt(n, me));
            }
            var n0 = _e(function (e, n) {
                return function (r) {
                  return Ki(r, e, n);
                };
              }),
              t0 = _e(function (e, n) {
                return function (r) {
                  return Ki(e, r, n);
                };
              });
            function Jo(e, n, r) {
              var o = sn(n),
                d = au(n, o);
              r == null &&
                !(qe(n) && (d.length || !o.length)) &&
                ((r = n), (n = e), (e = this), (d = au(n, sn(n))));
              var v = !(qe(r) && "chain" in r) || !!r.chain,
                _ = Gt(e);
              return (
                x(d, function (T) {
                  var I = n[T];
                  (e[T] = I),
                    _ &&
                      (e.prototype[T] = function () {
                        var F = this.__chain__;
                        if (v || F) {
                          var W = e(this.__wrapped__),
                            G = (W.__actions__ = Pn(this.__actions__));
                          return (
                            G.push({ func: I, args: arguments, thisArg: e }),
                            (W.__chain__ = F),
                            W
                          );
                        }
                        return I.apply(e, pe([this.value()], arguments));
                      });
                }),
                e
              );
            }
            function r0() {
              return Ue._ === this && (Ue._ = Lc), this;
            }
            function Zo() {}
            function i0(e) {
              return (
                (e = ye(e)),
                _e(function (n) {
                  return Vs(n, e);
                })
              );
            }
            var a0 = No(Z),
              u0 = No(O),
              o0 = No(Ge);
            function pl(e) {
              return Oo(e) ? Pt(Nt(e)) : Hh(e);
            }
            function s0(e) {
              return function (n) {
                return e == null ? u : Lr(e, n);
              };
            }
            var f0 = yf(),
              l0 = yf(!0);
            function Xo() {
              return [];
            }
            function Qo() {
              return !1;
            }
            function c0() {
              return {};
            }
            function h0() {
              return "";
            }
            function d0() {
              return !0;
            }
            function p0(e, n) {
              if (((e = ye(e)), e < 1 || e > Qe)) return [];
              var r = fn,
                o = yn(e, fn);
              (n = oe(n)), (e -= fn);
              for (var d = _r(o, n); ++r < e; ) n(r);
              return d;
            }
            function g0(e) {
              return ge(e) ? Z(e, Nt) : $n(e) ? [e] : Pn(Pf(Oe(e)));
            }
            function m0(e) {
              var n = ++Cc;
              return Oe(e) + n;
            }
            var v0 = cu(function (e, n) {
                return e + n;
              }, 0),
              y0 = Lo("ceil"),
              A0 = cu(function (e, n) {
                return e / n;
              }, 1),
              b0 = Lo("floor");
            function x0(e) {
              return e && e.length ? iu(e, Hn, po) : u;
            }
            function _0(e, n) {
              return e && e.length ? iu(e, oe(n, 2), po) : u;
            }
            function w0(e) {
              return zn(e, Hn);
            }
            function S0(e, n) {
              return zn(e, oe(n, 2));
            }
            function E0(e) {
              return e && e.length ? iu(e, Hn, yo) : u;
            }
            function T0(e, n) {
              return e && e.length ? iu(e, oe(n, 2), yo) : u;
            }
            var C0 = cu(function (e, n) {
                return e * n;
              }, 1),
              N0 = Lo("round"),
              L0 = cu(function (e, n) {
                return e - n;
              }, 0);
            function I0(e) {
              return e && e.length ? vn(e, Hn) : 0;
            }
            function M0(e, n) {
              return e && e.length ? vn(e, oe(n, 2)) : 0;
            }
            return (
              (m.after = Qp),
              (m.ary = Kf),
              (m.assign = Wg),
              (m.assignIn = al),
              (m.assignInWith = Su),
              (m.assignWith = Ug),
              (m.at = Gg),
              (m.before = Yf),
              (m.bind = Uo),
              (m.bindAll = jm),
              (m.bindKey = jf),
              (m.castArray = cg),
              (m.chain = Gf),
              (m.chunk = bd),
              (m.compact = xd),
              (m.concat = _d),
              (m.cond = $m),
              (m.conforms = Vm),
              (m.constant = $o),
              (m.countBy = Ip),
              (m.create = qg),
              (m.curry = $f),
              (m.curryRight = Vf),
              (m.debounce = Jf),
              (m.defaults = zg),
              (m.defaultsDeep = Kg),
              (m.defer = eg),
              (m.delay = ng),
              (m.difference = wd),
              (m.differenceBy = Sd),
              (m.differenceWith = Ed),
              (m.drop = Td),
              (m.dropRight = Cd),
              (m.dropRightWhile = Nd),
              (m.dropWhile = Ld),
              (m.fill = Id),
              (m.filter = Rp),
              (m.flatMap = Op),
              (m.flatMapDeep = kp),
              (m.flatMapDepth = Hp),
              (m.flatten = Bf),
              (m.flattenDeep = Md),
              (m.flattenDepth = Rd),
              (m.flip = tg),
              (m.flow = Zm),
              (m.flowRight = Xm),
              (m.fromPairs = Dd),
              (m.functions = Xg),
              (m.functionsIn = Qg),
              (m.groupBy = Bp),
              (m.initial = Od),
              (m.intersection = kd),
              (m.intersectionBy = Hd),
              (m.intersectionWith = Bd),
              (m.invert = nm),
              (m.invertBy = tm),
              (m.invokeMap = Wp),
              (m.iteratee = Vo),
              (m.keyBy = Up),
              (m.keys = sn),
              (m.keysIn = kn),
              (m.map = yu),
              (m.mapKeys = im),
              (m.mapValues = am),
              (m.matches = Qm),
              (m.matchesProperty = e0),
              (m.memoize = bu),
              (m.merge = um),
              (m.mergeWith = ul),
              (m.method = n0),
              (m.methodOf = t0),
              (m.mixin = Jo),
              (m.negate = xu),
              (m.nthArg = i0),
              (m.omit = om),
              (m.omitBy = sm),
              (m.once = rg),
              (m.orderBy = Gp),
              (m.over = a0),
              (m.overArgs = ig),
              (m.overEvery = u0),
              (m.overSome = o0),
              (m.partial = Go),
              (m.partialRight = Zf),
              (m.partition = qp),
              (m.pick = fm),
              (m.pickBy = ol),
              (m.property = pl),
              (m.propertyOf = s0),
              (m.pull = Gd),
              (m.pullAll = Wf),
              (m.pullAllBy = qd),
              (m.pullAllWith = zd),
              (m.pullAt = Kd),
              (m.range = f0),
              (m.rangeRight = l0),
              (m.rearg = ag),
              (m.reject = Yp),
              (m.remove = Yd),
              (m.rest = ug),
              (m.reverse = Fo),
              (m.sampleSize = $p),
              (m.set = cm),
              (m.setWith = hm),
              (m.shuffle = Vp),
              (m.slice = jd),
              (m.sortBy = Xp),
              (m.sortedUniq = ep),
              (m.sortedUniqBy = np),
              (m.split = Om),
              (m.spread = og),
              (m.tail = tp),
              (m.take = rp),
              (m.takeRight = ip),
              (m.takeRightWhile = ap),
              (m.takeWhile = up),
              (m.tap = xp),
              (m.throttle = sg),
              (m.thru = vu),
              (m.toArray = tl),
              (m.toPairs = sl),
              (m.toPairsIn = fl),
              (m.toPath = g0),
              (m.toPlainObject = il),
              (m.transform = dm),
              (m.unary = fg),
              (m.union = op),
              (m.unionBy = sp),
              (m.unionWith = fp),
              (m.uniq = lp),
              (m.uniqBy = cp),
              (m.uniqWith = hp),
              (m.unset = pm),
              (m.unzip = Wo),
              (m.unzipWith = Uf),
              (m.update = gm),
              (m.updateWith = mm),
              (m.values = ui),
              (m.valuesIn = vm),
              (m.without = dp),
              (m.words = hl),
              (m.wrap = lg),
              (m.xor = pp),
              (m.xorBy = gp),
              (m.xorWith = mp),
              (m.zip = vp),
              (m.zipObject = yp),
              (m.zipObjectDeep = Ap),
              (m.zipWith = bp),
              (m.entries = sl),
              (m.entriesIn = fl),
              (m.extend = al),
              (m.extendWith = Su),
              Jo(m, m),
              (m.add = v0),
              (m.attempt = dl),
              (m.camelCase = xm),
              (m.capitalize = ll),
              (m.ceil = y0),
              (m.clamp = ym),
              (m.clone = hg),
              (m.cloneDeep = pg),
              (m.cloneDeepWith = gg),
              (m.cloneWith = dg),
              (m.conformsTo = mg),
              (m.deburr = cl),
              (m.defaultTo = Jm),
              (m.divide = A0),
              (m.endsWith = _m),
              (m.eq = gt),
              (m.escape = wm),
              (m.escapeRegExp = Sm),
              (m.every = Mp),
              (m.find = Dp),
              (m.findIndex = kf),
              (m.findKey = Yg),
              (m.findLast = Pp),
              (m.findLastIndex = Hf),
              (m.findLastKey = jg),
              (m.floor = b0),
              (m.forEach = qf),
              (m.forEachRight = zf),
              (m.forIn = $g),
              (m.forInRight = Vg),
              (m.forOwn = Jg),
              (m.forOwnRight = Zg),
              (m.get = Ko),
              (m.gt = vg),
              (m.gte = yg),
              (m.has = em),
              (m.hasIn = Yo),
              (m.head = Ff),
              (m.identity = Hn),
              (m.includes = Fp),
              (m.indexOf = Pd),
              (m.inRange = Am),
              (m.invoke = rm),
              (m.isArguments = Rr),
              (m.isArray = ge),
              (m.isArrayBuffer = Ag),
              (m.isArrayLike = On),
              (m.isArrayLikeObject = Ze),
              (m.isBoolean = bg),
              (m.isBuffer = fr),
              (m.isDate = xg),
              (m.isElement = _g),
              (m.isEmpty = wg),
              (m.isEqual = Sg),
              (m.isEqualWith = Eg),
              (m.isError = qo),
              (m.isFinite = Tg),
              (m.isFunction = Gt),
              (m.isInteger = Xf),
              (m.isLength = _u),
              (m.isMap = Qf),
              (m.isMatch = Cg),
              (m.isMatchWith = Ng),
              (m.isNaN = Lg),
              (m.isNative = Ig),
              (m.isNil = Rg),
              (m.isNull = Mg),
              (m.isNumber = el),
              (m.isObject = qe),
              (m.isObjectLike = Ke),
              (m.isPlainObject = Zi),
              (m.isRegExp = zo),
              (m.isSafeInteger = Dg),
              (m.isSet = nl),
              (m.isString = wu),
              (m.isSymbol = $n),
              (m.isTypedArray = ai),
              (m.isUndefined = Pg),
              (m.isWeakMap = Og),
              (m.isWeakSet = kg),
              (m.join = Fd),
              (m.kebabCase = Em),
              (m.last = at),
              (m.lastIndexOf = Wd),
              (m.lowerCase = Tm),
              (m.lowerFirst = Cm),
              (m.lt = Hg),
              (m.lte = Bg),
              (m.max = x0),
              (m.maxBy = _0),
              (m.mean = w0),
              (m.meanBy = S0),
              (m.min = E0),
              (m.minBy = T0),
              (m.stubArray = Xo),
              (m.stubFalse = Qo),
              (m.stubObject = c0),
              (m.stubString = h0),
              (m.stubTrue = d0),
              (m.multiply = C0),
              (m.nth = Ud),
              (m.noConflict = r0),
              (m.noop = Zo),
              (m.now = Au),
              (m.pad = Nm),
              (m.padEnd = Lm),
              (m.padStart = Im),
              (m.parseInt = Mm),
              (m.random = bm),
              (m.reduce = zp),
              (m.reduceRight = Kp),
              (m.repeat = Rm),
              (m.replace = Dm),
              (m.result = lm),
              (m.round = N0),
              (m.runInContext = y),
              (m.sample = jp),
              (m.size = Jp),
              (m.snakeCase = Pm),
              (m.some = Zp),
              (m.sortedIndex = $d),
              (m.sortedIndexBy = Vd),
              (m.sortedIndexOf = Jd),
              (m.sortedLastIndex = Zd),
              (m.sortedLastIndexBy = Xd),
              (m.sortedLastIndexOf = Qd),
              (m.startCase = km),
              (m.startsWith = Hm),
              (m.subtract = L0),
              (m.sum = I0),
              (m.sumBy = M0),
              (m.template = Bm),
              (m.times = p0),
              (m.toFinite = qt),
              (m.toInteger = ye),
              (m.toLength = rl),
              (m.toLower = Fm),
              (m.toNumber = ut),
              (m.toSafeInteger = Fg),
              (m.toString = Oe),
              (m.toUpper = Wm),
              (m.trim = Um),
              (m.trimEnd = Gm),
              (m.trimStart = qm),
              (m.truncate = zm),
              (m.unescape = Km),
              (m.uniqueId = m0),
              (m.upperCase = Ym),
              (m.upperFirst = jo),
              (m.each = qf),
              (m.eachRight = zf),
              (m.first = Ff),
              Jo(
                m,
                (function () {
                  var e = {};
                  return (
                    Tt(m, function (n, r) {
                      le.call(m.prototype, r) || (e[r] = n);
                    }),
                    e
                  );
                })(),
                { chain: !1 }
              ),
              (m.VERSION = A),
              x(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  m[e].placeholder = m;
                }
              ),
              x(["drop", "take"], function (e, n) {
                (Ne.prototype[e] = function (r) {
                  r = r === u ? 1 : rn(ye(r), 0);
                  var o = this.__filtered__ && !n ? new Ne(this) : this.clone();
                  return (
                    o.__filtered__
                      ? (o.__takeCount__ = yn(r, o.__takeCount__))
                      : o.__views__.push({
                          size: yn(r, fn),
                          type: e + (o.__dir__ < 0 ? "Right" : ""),
                        }),
                    o
                  );
                }),
                  (Ne.prototype[e + "Right"] = function (r) {
                    return this.reverse()[e](r).reverse();
                  });
              }),
              x(["filter", "map", "takeWhile"], function (e, n) {
                var r = n + 1,
                  o = r == Je || r == dn;
                Ne.prototype[e] = function (d) {
                  var v = this.clone();
                  return (
                    v.__iteratees__.push({ iteratee: oe(d, 3), type: r }),
                    (v.__filtered__ = v.__filtered__ || o),
                    v
                  );
                };
              }),
              x(["head", "last"], function (e, n) {
                var r = "take" + (n ? "Right" : "");
                Ne.prototype[e] = function () {
                  return this[r](1).value()[0];
                };
              }),
              x(["initial", "tail"], function (e, n) {
                var r = "drop" + (n ? "" : "Right");
                Ne.prototype[e] = function () {
                  return this.__filtered__ ? new Ne(this) : this[r](1);
                };
              }),
              (Ne.prototype.compact = function () {
                return this.filter(Hn);
              }),
              (Ne.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (Ne.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (Ne.prototype.invokeMap = _e(function (e, n) {
                return typeof e == "function"
                  ? new Ne(this)
                  : this.map(function (r) {
                      return Ki(r, e, n);
                    });
              })),
              (Ne.prototype.reject = function (e) {
                return this.filter(xu(oe(e)));
              }),
              (Ne.prototype.slice = function (e, n) {
                e = ye(e);
                var r = this;
                return r.__filtered__ && (e > 0 || n < 0)
                  ? new Ne(r)
                  : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                    n !== u &&
                      ((n = ye(n)),
                      (r = n < 0 ? r.dropRight(-n) : r.take(n - e))),
                    r);
              }),
              (Ne.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (Ne.prototype.toArray = function () {
                return this.take(fn);
              }),
              Tt(Ne.prototype, function (e, n) {
                var r = /^(?:filter|find|map|reject)|While$/.test(n),
                  o = /^(?:head|last)$/.test(n),
                  d = m[o ? "take" + (n == "last" ? "Right" : "") : n],
                  v = o || /^find/.test(n);
                d &&
                  (m.prototype[n] = function () {
                    var _ = this.__wrapped__,
                      T = o ? [1] : arguments,
                      I = _ instanceof Ne,
                      F = T[0],
                      W = I || ge(_),
                      G = function (Ee) {
                        var Le = d.apply(m, pe([Ee], T));
                        return o && V ? Le[0] : Le;
                      };
                    W &&
                      r &&
                      typeof F == "function" &&
                      F.length != 1 &&
                      (I = W = !1);
                    var V = this.__chain__,
                      ie = !!this.__actions__.length,
                      se = v && !V,
                      Ae = I && !ie;
                    if (!v && W) {
                      _ = Ae ? _ : new Ne(this);
                      var fe = e.apply(_, T);
                      return (
                        fe.__actions__.push({
                          func: vu,
                          args: [G],
                          thisArg: u,
                        }),
                        new tt(fe, V)
                      );
                    }
                    return se && Ae
                      ? e.apply(this, T)
                      : ((fe = this.thru(G)),
                        se ? (o ? fe.value()[0] : fe.value()) : fe);
                  });
              }),
              x(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var n = nn[e],
                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    o = /^(?:pop|shift)$/.test(e);
                  m.prototype[e] = function () {
                    var d = arguments;
                    if (o && !this.__chain__) {
                      var v = this.value();
                      return n.apply(ge(v) ? v : [], d);
                    }
                    return this[r](function (_) {
                      return n.apply(ge(_) ? _ : [], d);
                    });
                  };
                }
              ),
              Tt(Ne.prototype, function (e, n) {
                var r = m[n];
                if (r) {
                  var o = r.name + "";
                  le.call(ei, o) || (ei[o] = []),
                    ei[o].push({ name: n, func: r });
                }
              }),
              (ei[lu(u, ne).name] = [{ name: "wrapper", func: u }]),
              (Ne.prototype.clone = Kc),
              (Ne.prototype.reverse = Yc),
              (Ne.prototype.value = jc),
              (m.prototype.at = _p),
              (m.prototype.chain = wp),
              (m.prototype.commit = Sp),
              (m.prototype.next = Ep),
              (m.prototype.plant = Cp),
              (m.prototype.reverse = Np),
              (m.prototype.toJSON =
                m.prototype.valueOf =
                m.prototype.value =
                  Lp),
              (m.prototype.first = m.prototype.head),
              Bi && (m.prototype[Bi] = Tp),
              m
            );
          },
          P = R();
        lt ? (((lt.exports = P)._ = P), (Vr._ = P)) : (Ue._ = P);
      }).call(ke);
    })(oa, oa.exports);
  var mc = oa.exports;
  const Ru = Fe(mc);
  var hi = ((g) => ((g.True = "true"), (g.False = "false"), g))(hi || {});
  const vc = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"] },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"] },
      "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
      "en-IN": {
        0: ["Neerja", "NeerjaExpressive"],
        1: ["Prabhat"],
        
      },
      "es-BO": { 0: ["Sofia"], 1: ["Marcelo"] },
      "ar-SY": { 0: ["Amany"], 1: ["Laith"] },
      "en-ZA": { 0: ["Leah"], 1: ["Luke"] },
      "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"] },
      "el-GR": { 0: ["Athina"], 1: ["Nestoras"] },
      "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"] },
      "zu-ZA": { 0: ["Thando"], 1: ["Themba"] },
      "ar-LB": { 0: ["Layla"], 1: ["Rami"] },
      "en-AU": { 0: ["Natasha"], 1: ["William"] },
      "he-IL": { 0: ["Hila"], 1: ["Avri"] },
      "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"] },
      "ar-TN": { 0: ["Reem"], 1: ["Hedi"] },
      "ar-LY": { 0: ["Iman"], 1: ["Omar"] },
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"]},
      "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"] },
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"] },
      "es-CR": { 0: ["Maria"], 1: ["Juan"] },
      "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
      "fr-CA": { 0: ["Sylvie"], 1: ["Antoine", "Jean"] },
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"] },
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"]},
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"] },
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"] },
      "ga-IE": { 0: ["Orla"], 1: ["Colm"] },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"] },
      "fil-PH": { 0: ["Blessica"], 1: ["Angelo"] },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"]},
      "es-HN": { 0: ["Karla"], 1: ["Carlos"]},
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"] },
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"] },
      "es-PR": { 0: ["Karina"], 1: ["Victor"]},
      "af-ZA": { 0: ["Adri"], 1: ["Willem"]},
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"]},
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"] },
      "en-PH": { 0: ["Rosa"], 1: ["James"]},
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"]},
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"]},
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"] },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"] },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"]},
      "es-AR": { 0: ["Elena"], 1: ["Tomas"] },
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"] },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"] },
      "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"] },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"]},
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"] },
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"] },
      "en-US": {
        0: ["Michelle", "Ana", "Aria", "Jenny"],
        1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"],
        
      },
      "ta-MY": { 0: ["Kani"], 1: ["Surya"] },
      "gu-IN": { 0: ["Dhwani"], 1: ["Niranjan"]},
      "lv-LV": { 0: ["Everita"], 1: ["Nils"] },
      "nl-BE": { 0: ["Dena"], 1: ["Arnaud"] },
      "zh-CN": {
        0: ["zh-CN-XiaoyiNeural", "zh-CN-XiaoxiaoNeural"],
        1: [
          "zh-CN-YunyangNeural",
          "zh-CN-YunxiaNeural",
          "zh-CN-YunxiNeural",
          "zh-CN-YunjianNeural",
        ],
        
      },
      "ur-PK": { 0: ["Uzma"], 1: ["Asad"]},
      "te-IN": { 0: ["Shruti"], 1: ["Mohan"]},
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"] },
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"]},
      "de-CH": { 0: ["Leni"], 1: ["Jan"] },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"]},
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"]},
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"]},
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"] },
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"] },
      "es-GT": { 0: ["Marta"], 1: ["Andres"] },
      "es-GQ": { 0: ["Teresa"], 1: ["Javier"] },
      "es-PE": { 0: ["Camila"], 1: ["Alex"] },
      "en-NZ": { 0: ["Molly"], 1: ["Mitchell"]},
      "fa-IR": { 0: ["Dilara"], 1: ["Farid"] },
      "es-PA": { 0: ["Margarita"], 1: ["Roberto"] },
      "ro-RO": { 0: ["Alina"], 1: ["Emil"] },
      "mt-MT": { 0: ["Grace"], 1: ["Joseph"] },
      "et-EE": { 0: ["Anu"], 1: ["Kert"]},
      "tr-TR": { 0: ["Emel"], 1: ["Ahmet"] },
      "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"] },
      "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"] },
      "en-GB": {
        0: ["Maisie", "Libby", "Sonia"],
        1: ["Thomas", "Ryan"],
        
      },
      "km-KH": { 0: ["Sreymom"], 1: ["Piseth"]},
      "fi-FI": { 0: ["Noora"], 1: ["Harri"]},
      "az-AZ": { 0: ["Banu"], 1: ["Babek"] },
      "en-CA": { 0: ["Clara"], 1: ["Liam"] },
      "lt-LT": { 0: ["Ona"], 1: ["Leonas"] },
      "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"] },
      "sl-SI": { 0: ["Petra"], 1: ["Rok"] },
      "es-DO": { 0: ["Ramona"], 1: ["Emilio"] },
      "ar-IQ": { 0: ["Rana"], 1: ["Bassel"] },
      "bn-IN": { 0: ["Tanishaa"], 1: ["Bashkar"] },
      "si-LK": { 0: ["Thilini"], 1: ["Sameera"] },
      "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"] },
      "es-EC": { 0: ["Andrea"], 1: ["Luis"] },
      "es-US": { 0: ["Paloma"], 1: ["Alonso"] },
      "kn-IN": { 0: ["Sapna"], 1: ["Gagan"] },
      "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"] },
      "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"] },
      "ca-ES": { 0: ["Joana"], 1: ["Enric"]},
      "de-DE": {
        0: ["Katja", "Amala"],
        1: ["Conrad", "Killian"],
       
      },
      "zh-HK": {
        0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
        1: ["zh-HK-WanLungNeural"],
        
      },
      "pt-BR": { 0: ["Francisca"], 1: ["Antonio"]},
      "sr-RS": { 0: ["Sophie"], 1: ["Nicholas"] },
      "es-UY": { 0: ["Valentina"], 1: ["Mateo"] },
      "sw-KE": { 0: ["Zuri"], 1: ["Rafiki"] },
      "ar-BH": { 0: ["Laila"], 1: ["Ali"] },
      "es-ES": { 0: ["Elvira"], 1: ["Alvaro"] },
      "kk-KZ": { 0: ["Aigul"], 1: ["Daulet"] },
      "ar-JO": { 0: ["Sana"], 1: ["Taim"] },
      "es-VE": { 0: ["Paola"], 1: ["Sebastian"] },
      "so-SO": { 0: ["Ubax"], 1: ["Muuse"] },
      "en-TZ": { 0: ["Imani"], 1: ["Elimu"] },
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"] },
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"] },
      "ur-IN": { 0: ["Gul"], 1: ["Salman"] },
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
      "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
    },
    yc = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"] },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"] },
      "ms-MY": { 0: ["Yasmin"], 1: ["Osman"]},
      "en-IN": {
        0: ["Neerja", "NeerjaExpressive"],
        1: ["Prabhat"],
      
      },
      "es-BO": { 0: ["Sofia"], 1: ["Marcelo"] },
      "ar-SY": { 0: ["Amany"], 1: ["Laith"] },
      "en-ZA": { 0: ["Leah"], 1: ["Luke"]},
      "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"]},
      "el-GR": { 0: ["Athina"], 1: ["Nestoras"] },
      "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"] },
      "zu-ZA": { 0: ["Thando"], 1: ["Themba"] },
      "ar-LB": { 0: ["Layla"], 1: ["Rami"] },
      "en-AU": { 0: ["Natasha"], 1: ["William"] },
      "he-IL": { 0: ["Hila"], 1: ["Avri"] },
      "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"]},
      "ar-TN": { 0: ["Reem"], 1: ["Hedi"] },
      "ar-LY": { 0: ["Iman"], 1: ["Omar"] },
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"] },
      "ml-IN": {
        0: ["Sobhana"],
        1: ["Midhun"],
        
      },
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"] },
      "es-CR": { 0: ["Maria"], 1: ["Juan"] },
      "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
      "fr-CA": {
        0: ["Sylvie"],
        1: ["Antoine", "Jean"],
        
      },
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"]},
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"]},
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"] },
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"] },
      "ga-IE": {
        0: ["Orla"],
        1: ["Colm"],
        
      },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"]},
      "fil-PH": {
        0: ["Blessica"],
        1: ["Angelo"],
        
      },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"]},
      "es-HN": { 0: ["Karla"], 1: ["Carlos"]},
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"]},
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"] },
      "es-PR": { 0: ["Karina"], 1: ["Victor"]},
      "af-ZA": {
        0: ["Adri"],
        1: ["Willem"],
        
      },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"]},
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"]},
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"] },
      "en-PH": { 0: ["Rosa"], 1: ["James"] },
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"]},
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"] },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"] },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"] },
      "es-AR": { 0: ["Elena"], 1: ["Tomas"]},
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"] },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"] },
      "mr-IN": {
        0: ["Aarohi"],
        1: ["Manohar"],
        
      },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"] },
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"] },
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"] },
      "en-US": {
        0: ["Michelle", "Ana", "Aria", "Jenny"],
        1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"],
        
      },
      "ta-MY": { 0: ["Kani"], 1: ["Surya"] },
      "gu-IN": {
        0: ["Dhwani"],
        1: ["Niranjan"],
        
      },
      "lv-LV": { 0: ["Everita"], 1: ["Nils"] },
      "nl-BE": { 0: ["Dena"], 1: ["Arnaud"] },
      "zh-CN": {
        0: ["zh-CN-XiaoyiNeural", "zh-CN-XiaoxiaoNeural"],
        1: [
          "zh-CN-YunyangNeural",
          "zh-CN-YunxiaNeural",
          "zh-CN-YunxiNeural",
          "zh-CN-YunjianNeural",
        ],
        
      },
      "ur-PK": { 0: ["Uzma"], 1: ["Asad"] },
      "te-IN": { 0: ["Shruti"], 1: ["Mohan"] },
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"] },
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"] },
      "de-CH": { 0: ["Leni"], 1: ["Jan"] },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"]},
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"]},
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"]},
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"] },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"]},
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"]},
      "es-GT": { 0: ["Marta"], 1: ["Andres"] },
      "es-GQ": { 0: ["Teresa"], 1: ["Javier"] },
      "es-PE": { 0: ["Camila"], 1: ["Alex"] },
      "en-NZ": { 0: ["Molly"], 1: ["Mitchell"] },
      "fa-IR": { 0: ["Dilara"], 1: ["Farid"] },
      "es-PA": { 0: ["Margarita"], 1: ["Roberto"] },
      "ro-RO": { 0: ["Alina"], 1: ["Emil"] },
      "mt-MT": { 0: ["Grace"], 1: ["Joseph"] },
      "et-EE": { 0: ["Anu"], 1: ["Kert"] },
      "tr-TR": { 0: ["Emel"], 1: ["Ahmet"] },
      "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"] },
      "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"] },
      "en-GB": {
        0: ["Maisie", "Libby", "Sonia"],
        1: ["Thomas", "Ryan"],
        
      },
      "km-KH": { 0: ["Sreymom"], 1: ["Piseth"] },
      "fi-FI": { 0: ["Noora"], 1: ["Harri"] },
      "az-AZ": { 0: ["Banu"], 1: ["Babek"] },
      "en-CA": { 0: ["Clara"], 1: ["Liam"] },
      "lt-LT": { 0: ["Ona"], 1: ["Leonas"] },
      "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"]},
      "sl-SI": { 0: ["Petra"], 1: ["Rok"] },
      "es-DO": { 0: ["Ramona"], 1: ["Emilio"] },
      "ar-IQ": { 0: ["Rana"], 1: ["Bassel"] },
      "bn-IN": { 0: ["Tanishaa"], 1: ["Bashkar"] },
      "si-LK": {
        0: ["Thilini"],
        1: ["Sameera"],
        
      },
      "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"] },
      "es-EC": { 0: ["Andrea"], 1: ["Luis"] },
      "es-US": { 0: ["Paloma"], 1: ["Alonso"] },
      "kn-IN": { 0: ["Sapna"], 1: ["Gagan"] },
      "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"] },
      "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"] },
      "ca-ES": { 0: ["Joana"], 1: ["Enric"] },
      "de-DE": {
        0: ["Katja", "Amala"],
        1: ["Conrad", "Killian"],
        
      },
      "zh-HK": {
        0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
        1: ["zh-HK-WanLungNeural"],
       
      },
      "pt-BR": { 0: ["Francisca"], 1: ["Antonio"] },
      "sr-RS": { 0: ["Sophie"], 1: ["Nicholas"] },
      "es-UY": { 0: ["Valentina"], 1: ["Mateo"] },
      "sw-KE": { 0: ["Zuri"], 1: ["Rafiki"] },
      "ar-BH": { 0: ["Laila"], 1: ["Ali"] },
      "es-ES": { 0: ["Elvira"], 1: ["Alvaro"] },
      "kk-KZ": { 0: ["Aigul"], 1: ["Daulet"]},
      "ar-JO": { 0: ["Sana"], 1: ["Taim"] },
      "es-VE": { 0: ["Paola"], 1: ["Sebastian"] },
      "so-SO": { 0: ["Ubax"], 1: ["Muuse"] },
      "en-TZ": { 0: ["Imani"], 1: ["Elimu"] },
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"] },
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"] },
      "ur-IN": { 0: ["Gul"], 1: ["Salman"] },
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
      "id-ID": {
        0: ["Gadis"],
        1: ["Ardi"],
        
      },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"]},
    },
    Ac = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"] },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"]},
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"] },
      "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
      "en-IN": {
        0: ["Neerja", "NeerjaExpressive"],
        1: ["Prabhat"],
        
      },
      "es-BO": { 0: ["Sofia"], 1: ["Marcelo"] },
      "ar-SY": { 0: ["Amany"], 1: ["Laith"] },
      "en-ZA": { 0: ["Leah"], 1: ["Luke"] },
      "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"] },
      "el-GR": { 0: ["Athina"], 1: ["Nestoras"] },
      "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"] },
      "zu-ZA": { 0: ["Thando"], 1: ["Themba"] },
      "ar-LB": { 0: ["Layla"], 1: ["Rami"] },
      "en-AU": { 0: ["Natasha"], 1: ["William"] },
      "he-IL": { 0: ["Hila"], 1: ["Avri"] },
      "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"] },
      "ar-TN": { 0: ["Reem"], 1: ["Hedi"] },
      "ar-LY": { 0: ["Iman"], 1: ["Omar"]},
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"]},
      "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"]},
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"]},
      "es-CR": { 0: ["Maria"], 1: ["Juan"]},
      "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
      "fr-CA": {
        0: ["Sylvie"],
        1: ["Antoine", "Jean"],
        
      },
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"] },
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"] },
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"] },
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"] },
      "ga-IE": { 0: ["Orla"], 1: ["Colm"] },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"] },
      "fil-PH": { 0: ["Blessica"], 1: ["Angelo"] },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"] },
      "es-HN": { 0: ["Karla"], 1: ["Carlos"] },
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"]},
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"]},
      "es-PR": { 0: ["Karina"], 1: ["Victor"] },
      "af-ZA": { 0: ["Adri"], 1: ["Willem"] },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"] },
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"]},
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"] },
      "en-PH": { 0: ["Rosa"], 1: ["James"] },
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"]},
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"] },
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"] },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"]},
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"]},
      "es-AR": { 0: ["Elena"], 1: ["Tomas"]},
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"]},
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"]},
      "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"] },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"] },
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"] },
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"]},
      "en-US": {
        0: ["Michelle", "Ana", "Aria", "Jenny"],
        1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"],
        
      },
      "ta-MY": { 0: ["Kani"], 1: ["Surya"] },
      "gu-IN": { 0: ["Dhwani"], 1: ["Niranjan"] },
      "lv-LV": { 0: ["Everita"], 1: ["Nils"] },
      "nl-BE": { 0: ["Dena"], 1: ["Arnaud"] },
      "zh-CN": {
        0: ["zh-CN-XiaoyiNeural", "zh-CN-XiaoxiaoNeural"],
        1: [
          "zh-CN-YunyangNeural",
          "zh-CN-YunxiaNeural",
          "zh-CN-YunxiNeural",
          "zh-CN-YunjianNeural",
        ],
        
      },
      "ur-PK": { 0: ["Uzma"], 1: ["Asad"] },
      "te-IN": { 0: ["Shruti"], 1: ["Mohan"] },
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"]},
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"]},
      "de-CH": { 0: ["Leni"], 1: ["Jan"] },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"] },
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"] },
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"] },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"] },
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"]},
      "es-GT": { 0: ["Marta"], 1: ["Andres"] },
      "es-GQ": { 0: ["Teresa"], 1: ["Javier"]},
      "es-PE": { 0: ["Camila"], 1: ["Alex"] },
      "en-NZ": { 0: ["Molly"], 1: ["Mitchell"] },
      "fa-IR": { 0: ["Dilara"], 1: ["Farid"] },
      "es-PA": { 0: ["Margarita"], 1: ["Roberto"] },
      "ro-RO": { 0: ["Alina"], 1: ["Emil"] },
      "mt-MT": { 0: ["Grace"], 1: ["Joseph"] },
      "et-EE": { 0: ["Anu"], 1: ["Kert"] },
      "tr-TR": { 0: ["Emel"], 1: ["Ahmet"] },
      "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"] },
      "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"] },
      "en-GB": {
        0: ["Maisie", "Libby", "Sonia"],
        1: ["Thomas", "Ryan"],
        
      },
      "km-KH": { 0: ["Sreymom"], 1: ["Piseth"] },
      "fi-FI": { 0: ["Noora"], 1: ["Harri"] },
      "az-AZ": { 0: ["Banu"], 1: ["Babek"] },
      "en-CA": { 0: ["Clara"], 1: ["Liam"] },
      "lt-LT": { 0: ["Ona"], 1: ["Leonas"] },
      "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"] },
      "sl-SI": { 0: ["Petra"], 1: ["Rok"] },
      "es-DO": { 0: ["Ramona"], 1: ["Emilio"] },
      "ar-IQ": { 0: ["Rana"], 1: ["Bassel"] },
      "bn-IN": { 0: ["Tanishaa"], 1: ["Bashkar"] },
      "si-LK": { 0: ["Thilini"], 1: ["Sameera"] },
      "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"] },
      "es-EC": { 0: ["Andrea"], 1: ["Luis"] },
      "es-US": { 0: ["Paloma"], 1: ["Alonso"] },
      "kn-IN": { 0: ["Sapna"], 1: ["Gagan"] },
      "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"] },
      "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"]},
      "ca-ES": { 0: ["Joana"], 1: ["Enric"] },
      "de-DE": {
        0: ["Katja", "Amala"],
        1: ["Conrad", "Killian"],
        
      },
      "zh-HK": {
        0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
        1: ["zh-HK-WanLungNeural"],
        
      },
      "pt-BR": { 0: ["Francisca"], 1: ["Antonio"] },
      "sr-RS": { 0: ["Sophie"], 1: ["Nicholas"] },
      "es-UY": { 0: ["Valentina"], 1: ["Mateo"] },
      "sw-KE": { 0: ["Zuri"], 1: ["Rafiki"] },
      "ar-BH": { 0: ["Laila"], 1: ["Ali"]},
      "es-ES": { 0: ["Elvira"], 1: ["Alvaro"] },
      "kk-KZ": { 0: ["Aigul"], 1: ["Daulet"] },
      "ar-JO": { 0: ["Sana"], 1: ["Taim"] },
      "es-VE": { 0: ["Paola"], 1: ["Sebastian"] },
      "so-SO": { 0: ["Ubax"], 1: ["Muuse"] },
      "en-TZ": { 0: ["Imani"], 1: ["Elimu"] },
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"]},
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"]},
      "ur-IN": { 0: ["Gul"], 1: ["Salman"] },
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
      "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"]},
    },
    bc = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"], name: "Ireland(english)" },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"], name: "Kuwait" },
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"], name: "Tanzania(Swahili)" },
      "ms-MY": { 0: ["Yasmin"], 1: ["Osman"], name: "Malaysia(Malay)" },
      "en-IN": {
        0: ["Neerja", "NeerjaExpressive"],
        1: ["Prabhat"],
        name: "India(English)",
      },
      "es-BO": { 0: ["Sofia"], 1: ["Marcelo"], name: "Bolivia" },
      "ar-SY": { 0: ["Amany"], 1: ["Laith"], name: "Syria" },
      "en-ZA": { 0: ["Leah"], 1: ["Luke"], name: "South Africa(English)" },
      "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"], name: "India(Tamil)" },
      "el-GR": { 0: ["Athina"], 1: ["Nestoras"], name: "Greece" },
      "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"], name: "Netherlands" },
      "zu-ZA": { 0: ["Thando"], 1: ["Themba"], name: "South Africa(Zulu)" },
      "ar-LB": { 0: ["Layla"], 1: ["Rami"], name: "Lebanon" },
      "en-AU": { 0: ["Natasha"], 1: ["William"], name: "Australia" },
      "he-IL": { 0: ["Hila"], 1: ["Avri"], name: "Israel" },
      "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"], name: "North Macedonia" },
      "ar-TN": { 0: ["Reem"], 1: ["Hedi"], name: "Tunisia" },
      "ar-LY": { 0: ["Iman"], 1: ["Omar"], name: "Libya" },
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"], name: "Hungary" },
      "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"], name: "India(Malayalam)" },
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"], name: "El Salvador" },
      "es-CR": { 0: ["Maria"], 1: ["Juan"], name: "Costa Rica" },
      "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"], name: "Chile" },
      "fr-CA": {
        0: ["Sylvie"],
        1: ["Antoine", "Jean"],
        name: "Canada(French)",
      },
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"], name: "Colombia" },
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"], name: "Indonesia(Javanese)" },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"], name: "Poland" },
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"], name: "Portugal" },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"], name: "Egypt" },
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"], name: "Cuba" },
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"], name: "Belgium(French)" },
      "ga-IE": { 0: ["Orla"], 1: ["Colm"], name: "Ireland(Irish)" },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"], name: "United Kingdom(Welsh)" },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"], name: "Algeria" },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"], name: "Singapore(English)" },
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"], name: "Morocco" },
      "fil-PH": {
        0: ["Blessica"],
        1: ["Angelo"],
        name: "Philippines(Filipino)",
      },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"], name: "Singapore(Tamil)" },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"], name: "Kenya(English)" },
      "es-HN": { 0: ["Karla"], 1: ["Carlos"], name: "Honduras" },
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"], name: "Norway" },
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"], name: "Croatia" },
      "es-PR": { 0: ["Karina"], 1: ["Victor"], name: "Puerto Rico" },
      "af-ZA": { 0: ["Adri"], 1: ["Willem"], name: "South Africa(Afrikaans)" },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"], name: "Spain(Galician)" },
      "es-PY": { 0: ["Tania"], 1: ["Mario"], name: "Paraguay" },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"], name: "Austria" },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"], name: "Sri Lanka(Tamil)" },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"], name: "Iceland" },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"], name: "Myanmar" },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"], name: "Bulgaria" },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"], name: "Czech Republic" },
      "en-PH": { 0: ["Rosa"], 1: ["James"], name: "Philippines(English)" },
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"], name: "Uzbekistan" },
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        name: "Taiwan",
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"], name: "Hong Kong(English)" },
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"], name: "South Korea" },
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"], name: "Slovakia" },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"], name: "Afghanistan" },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"], name: "Oman" },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"], name: "Russia" },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"], name: "Albania" },
      "es-AR": { 0: ["Elena"], 1: ["Tomas"], name: "Argentina" },
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"], name: "Sweden" },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"], name: "Ethiopia" },
      "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"], name: "India(Marathi)" },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"], name: "Denmark" },
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"], name: "Mongolia" },
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"], name: "Ukraine" },
      "en-US": {
        0: ["Michelle", "Ana", "Aria", "Jenny"],
        1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"],
        name: "United States(English)",
      },
      "ta-MY": { 0: ["Kani"], 1: ["Surya"], name: "Malaysia(Tamil)" },
      "gu-IN": { 0: ["Dhwani"], 1: ["Niranjan"], name: "India(Gujarati)" },
      "lv-LV": { 0: ["Everita"], 1: ["Nils"], name: "Latvia" },
      "nl-BE": { 0: ["Dena"], 1: ["Arnaud"], name: "Belgium(Dutch)" },
      "zh-CN": {
        0: ["zh-CN-XiaoyiNeural", "zh-CN-XiaoxiaoNeural"],
        1: [
          "zh-CN-YunyangNeural",
          "zh-CN-YunxiaNeural",
          "zh-CN-YunxiNeural",
          "zh-CN-YunjianNeural",
        ],
        name: "China",
      },
      "ur-PK": { 0: ["Uzma"], 1: ["Asad"], name: "Pakistan" },
      "te-IN": { 0: ["Shruti"], 1: ["Mohan"], name: "India(Telugu)" },
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"], name: "India(Hindi)" },
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"], name: "Nigeria" },
      "de-CH": { 0: ["Leni"], 1: ["Jan"], name: "Switzerland(German)" },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"], name: "Japan" },
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"], name: "Bosnia" },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"], name: "Yemen" },
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"], name: "Nepal" },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"], name: "Georgia" },
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"], name: "Qatar" },
      "es-GT": { 0: ["Marta"], 1: ["Andres"], name: "Guatemala" },
      "es-GQ": { 0: ["Teresa"], 1: ["Javier"], name: "Guinea" },
      "es-PE": { 0: ["Camila"], 1: ["Alex"], name: "Peru" },
      "en-NZ": { 0: ["Molly"], 1: ["Mitchell"], name: "New Zealand" },
      "fa-IR": { 0: ["Dilara"], 1: ["Farid"], name: "Iran" },
      "es-PA": { 0: ["Margarita"], 1: ["Roberto"], name: "Iran" },
      "ro-RO": { 0: ["Alina"], 1: ["Emil"], name: "Romania" },
      "mt-MT": { 0: ["Grace"], 1: ["Joseph"], name: "Malta" },
      "et-EE": { 0: ["Anu"], 1: ["Kert"], name: "Estonia" },
      "tr-TR": { 0: ["Emel"], 1: ["Ahmet"], name: "Turkey" },
      "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"], name: "France" },
      "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"], name: "Vietnam" },
      "en-GB": {
        0: ["Maisie", "Libby", "Sonia"],
        1: ["Thomas", "Ryan"],
        name: "United Kingdom",
      },
      "km-KH": { 0: ["Sreymom"], 1: ["Piseth"], name: "Cambodia" },
      "fi-FI": { 0: ["Noora"], 1: ["Harri"], name: "Finland" },
      "az-AZ": { 0: ["Banu"], 1: ["Babek"], name: "Azerbaijan" },
      "en-CA": { 0: ["Clara"], 1: ["Liam"], name: "Canada(English)" },
      "lt-LT": { 0: ["Ona"], 1: ["Leonas"], name: "Lithuania" },
      "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"], name: "United Arab Emirates" },
      "sl-SI": { 0: ["Petra"], 1: ["Rok"], name: "Slovenia" },
      "es-DO": { 0: ["Ramona"], 1: ["Emilio"], name: "Dominica" },
      "ar-IQ": { 0: ["Rana"], 1: ["Bassel"], name: "Iraq" },
      "bn-IN": { 0: ["Tanishaa"], 1: ["Bashkar"], name: "India(Bengali)" },
      "si-LK": { 0: ["Thilini"], 1: ["Sameera"], name: "Sri Lanka(Sinhala)" },
      "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"], name: "Switzerland(French)" },
      "es-EC": { 0: ["Andrea"], 1: ["Luis"], name: "Ecuador" },
      "es-US": { 0: ["Paloma"], 1: ["Alonso"], name: "United States(Spanish)" },
      "kn-IN": { 0: ["Sapna"], 1: ["Gagan"], name: "India(Kannada)" },
      "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"], name: "Laos" },
      "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"], name: "Saudi Arabia" },
      "ca-ES": { 0: ["Joana"], 1: ["Enric"], name: "Spain(Catalan)" },
      "de-DE": {
        0: ["Katja", "Amala"],
        1: ["Conrad", "Killian"],
        name: "Germany",
      },
      "zh-HK": {
        0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
        1: ["zh-HK-WanLungNeural"],
        name: "Hong Kong (Chinese)",
      },
      "pt-BR": { 0: ["Francisca"], 1: ["Antonio"], name: "Brazil" },
      "sr-RS": { 0: ["Sophie"], 1: ["Nicholas"], name: "Serbia" },
      "es-UY": { 0: ["Valentina"], 1: ["Mateo"], name: "Uruguay" },
      "sw-KE": { 0: ["Zuri"], 1: ["Rafiki"], name: "Kenya" },
      "ar-BH": { 0: ["Laila"], 1: ["Ali"], name: "Bahrain" },
      "es-ES": { 0: ["Elvira"], 1: ["Alvaro"], name: "España(Spain)" },
      "kk-KZ": { 0: ["Aigul"], 1: ["Daulet"], name: "Kazakhstan" },
      "ar-JO": { 0: ["Sana"], 1: ["Taim"], name: "Jordan" },
      "es-VE": { 0: ["Paola"], 1: ["Sebastian"], name: "Venezuela" },
      "so-SO": { 0: ["Ubax"], 1: ["Muuse"], name: "Somalia" },
      "en-TZ": { 0: ["Imani"], 1: ["Elimu"], name: "Tanzania(english)" },
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"], name: "Indonesia(Sundanese)" },
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"], name: "Mexico" },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"], name: "Italy" },
      "ur-IN": { 0: ["Gul"], 1: ["Salman"], name: "India(Urdu)" },
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"], name: "Bangladesh" },
      "id-ID": { 0: ["Gadis"], 1: ["Ardi"], name: "Indonesia(Indonesian)" },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"], name: "Nicaragua" },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"], name: "Thailand" },
    };
  class xc {
    constructor() {
      Ye(this, "_toLanguage");
      Ye(this, "_voice");
      Ye(this, "_voiceMap");
      (this._voiceMap = this.initVoiceMap()),
        (this._toLanguage = this.initDefaultTargetLanguage()),
        (this._voice = this.initDefaultSelectedVoice());
    }
    get toLanguage() {
      return this._toLanguage;
    }
    get voice() {
      return this._voice;
    }
    getDefaultVoiceValue() {
      return this._voice.startsWith(this._toLanguage)
        ? this._voice
        : this._toLanguage + "-" + this._voice + "Neural";
    }
    get voiceMap() {
      return this._voiceMap;
    }
    initVoiceMap() {
      const h = Bn.i18n.getMessage("@@ui_locale");
      return h.startsWith("zh") ? vc : h === "ja" ? yc : h === "ko" ? Ac : bc;
    }
    initDefaultTargetLanguage() {
      const h = Bn.i18n.getMessage("@@ui_locale").replace("_", "-");
      console.log("ui_locale: " + h);
      const u = this._voiceMap[h];
      if ((console.log("voiceEntry: " + JSON.stringify(u)), u)) return h;
      for (let A in this._voiceMap) if (A.startsWith(h)) return A;
      return "en-US";
    }
    initDefaultSelectedVoice() {
      return this._voiceMap[this._toLanguage][1][0];
    }
  }
  const _s = new xc();
  class hn {
    static get fromLanguage() {
      return this._fromLanguage;
    }
    static set fromLanguage(h) {
      this._fromLanguage = h;
    }
    static get toLanguage() {
      return this._toLanguage;
    }
    static set toLanguage(h) {
      this._toLanguage = h;
    }
    static get gender() {
      return this._gender;
    }
    static set gender(h) {
      this._gender = h;
    }
    static get voice() {
      return this._voice;
    }
    static set voice(h) {
      this._voice = h;
    }
    static get pauseVideo() {
      return this._pauseVideo;
    }
    static set pauseVideo(h) {
      this._pauseVideo = h;
    }
    static get originalVolume() {
      return this._originalVolume;
    }
    static set originalVolume(h) {
      this._originalVolume = h;
    }
    static get translationVolume() {
      return this._translationVolume;
    }
    static set translationVolume(h) {
      this._translationVolume = h;
    }
    static get adjustmentModel() {
      return this._adjustmentModel;
    }
    static set adjustmentModel(h) {
      this._adjustmentModel = h;
    }
    static get loadingContainerDiv() {
      return this._loadingContainerDiv;
    }
    static set loadingContainerDiv(h) {
      this._loadingContainerDiv = h;
    }
    static get translateEngine() {
      return this._translateEngine;
    }
    static set translateEngine(h) {
      this._translateEngine = h;
    }
  }
  Ye(hn, "_fromLanguage", "en-US"),
    Ye(hn, "_toLanguage", _s.toLanguage),
    Ye(hn, "_gender", "1"),
    Ye(hn, "_voice", _s.getDefaultVoiceValue()),
    Ye(hn, "_pauseVideo", !1),
    Ye(hn, "_originalVolume", 0),
    Ye(hn, "_translationVolume", 1),
    Ye(hn, "_adjustmentModel", !0),
    Ye(hn, "_loadingContainerDiv"),
    Ye(hn, "_translateEngine", "google");
  class ot {
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
        ? ot.isYouTubeMobile()
        : ot.isMobile();
    }
    static isMobile() {
      return "ontouchstart" in document.documentElement;
    }
    static isFirefoxMobile() {
      return this.isMobile() && !1;
    }
  }
  var ws = { exports: {} };
  /*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * 
   */ (function (g) {
    (function (h, u) {
      g.exports = h.document
        ? u(h, !0)
        : function (A) {
            if (!A.document)
              throw new Error("jQuery requires a window with a document");
            return u(A);
          };
    })(typeof window < "u" ? window : ke, function (h, u) {
      var A = [],
        N = Object.getPrototypeOf,
        M = A.slice,
        U = A.flat
          ? function (t) {
              return A.flat.call(t);
            }
          : function (t) {
              return A.concat.apply([], t);
            },
        z = A.push,
        K = A.indexOf,
        Y = {},
        ue = Y.toString,
        me = Y.hasOwnProperty,
        de = me.toString,
        De = de.call(Object),
        ee = {},
        $ = function (i) {
          return (
            typeof i == "function" &&
            typeof i.nodeType != "number" &&
            typeof i.item != "function"
          );
        },
        Ie = function (i) {
          return i != null && i === i.window;
        },
        ne = h.document,
        Wn = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function ze(t, i, a) {
        a = a || ne;
        var s,
          l,
          c = a.createElement("script");
        if (((c.text = t), i))
          for (s in Wn)
            (l = i[s] || (i.getAttribute && i.getAttribute(s))),
              l && c.setAttribute(s, l);
        a.head.appendChild(c).parentNode.removeChild(c);
      }
      function an(t) {
        return t == null
          ? t + ""
          : typeof t == "object" || typeof t == "function"
          ? Y[ue.call(t)] || "object"
          : typeof t;
      }
      var $e = "3.7.1",
        bn = /HTML$/i,
        f = function (t, i) {
          return new f.fn.init(t, i);
        };
      (f.fn = f.prototype =
        {
          jquery: $e,
          constructor: f,
          length: 0,
          toArray: function () {
            return M.call(this);
          },
          get: function (t) {
            return t == null
              ? M.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var i = f.merge(this.constructor(), t);
            return (i.prevObject = this), i;
          },
          each: function (t) {
            return f.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              f.map(this, function (i, a) {
                return t.call(i, a, i);
              })
            );
          },
          slice: function () {
            return this.pushStack(M.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              f.grep(this, function (t, i) {
                return (i + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              f.grep(this, function (t, i) {
                return i % 2;
              })
            );
          },
          eq: function (t) {
            var i = this.length,
              a = +t + (t < 0 ? i : 0);
            return this.pushStack(a >= 0 && a < i ? [this[a]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: z,
          sort: A.sort,
          splice: A.splice,
        }),
        (f.extend = f.fn.extend =
          function () {
            var t,
              i,
              a,
              s,
              l,
              c,
              p = arguments[0] || {},
              w = 1,
              x = arguments.length,
              L = !1;
            for (
              typeof p == "boolean" && ((L = p), (p = arguments[w] || {}), w++),
                typeof p != "object" && !$(p) && (p = {}),
                w === x && ((p = this), w--);
              w < x;
              w++
            )
              if ((t = arguments[w]) != null)
                for (i in t)
                  (s = t[i]),
                    !(i === "__proto__" || p === s) &&
                      (L && s && (f.isPlainObject(s) || (l = Array.isArray(s)))
                        ? ((a = p[i]),
                          l && !Array.isArray(a)
                            ? (c = [])
                            : !l && !f.isPlainObject(a)
                            ? (c = {})
                            : (c = a),
                          (l = !1),
                          (p[i] = f.extend(L, c, s)))
                        : s !== void 0 && (p[i] = s));
            return p;
          }),
        f.extend({
          expando: "jQuery" + ($e + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var i, a;
            return !t || ue.call(t) !== "[object Object]"
              ? !1
              : ((i = N(t)),
                i
                  ? ((a = me.call(i, "constructor") && i.constructor),
                    typeof a == "function" && de.call(a) === De)
                  : !0);
          },
          isEmptyObject: function (t) {
            var i;
            for (i in t) return !1;
            return !0;
          },
          globalEval: function (t, i, a) {
            ze(t, { nonce: i && i.nonce }, a);
          },
          each: function (t, i) {
            var a,
              s = 0;
            if (re(t))
              for (a = t.length; s < a && i.call(t[s], s, t[s]) !== !1; s++);
            else for (s in t) if (i.call(t[s], s, t[s]) === !1) break;
            return t;
          },
          text: function (t) {
            var i,
              a = "",
              s = 0,
              l = t.nodeType;
            if (!l) for (; (i = t[s++]); ) a += f.text(i);
            return l === 1 || l === 11
              ? t.textContent
              : l === 9
              ? t.documentElement.textContent
              : l === 3 || l === 4
              ? t.nodeValue
              : a;
          },
          makeArray: function (t, i) {
            var a = i || [];
            return (
              t != null &&
                (re(Object(t))
                  ? f.merge(a, typeof t == "string" ? [t] : t)
                  : z.call(a, t)),
              a
            );
          },
          inArray: function (t, i, a) {
            return i == null ? -1 : K.call(i, t, a);
          },
          isXMLDoc: function (t) {
            var i = t && t.namespaceURI,
              a = t && (t.ownerDocument || t).documentElement;
            return !bn.test(i || (a && a.nodeName) || "HTML");
          },
          merge: function (t, i) {
            for (var a = +i.length, s = 0, l = t.length; s < a; s++)
              t[l++] = i[s];
            return (t.length = l), t;
          },
          grep: function (t, i, a) {
            for (var s, l = [], c = 0, p = t.length, w = !a; c < p; c++)
              (s = !i(t[c], c)), s !== w && l.push(t[c]);
            return l;
          },
          map: function (t, i, a) {
            var s,
              l,
              c = 0,
              p = [];
            if (re(t))
              for (s = t.length; c < s; c++)
                (l = i(t[c], c, a)), l != null && p.push(l);
            else for (c in t) (l = i(t[c], c, a)), l != null && p.push(l);
            return U(p);
          },
          guid: 1,
          support: ee,
        }),
        typeof Symbol == "function" &&
          (f.fn[Symbol.iterator] = A[Symbol.iterator]),
        f.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, i) {
            Y["[object " + i + "]"] = i.toLowerCase();
          }
        );
      function re(t) {
        var i = !!t && "length" in t && t.length,
          a = an(t);
        return $(t) || Ie(t)
          ? !1
          : a === "array" ||
              i === 0 ||
              (typeof i == "number" && i > 0 && i - 1 in t);
      }
      function j(t, i) {
        return t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase();
      }
      var Te = A.pop,
        Me = A.sort,
        Ve = A.splice,
        ce = "[\\x20\\t\\r\\n\\f]",
        Je = new RegExp(
          "^" + ce + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ce + "+$",
          "g"
        );
      f.contains = function (t, i) {
        var a = i && i.parentNode;
        return (
          t === a ||
          !!(
            a &&
            a.nodeType === 1 &&
            (t.contains
              ? t.contains(a)
              : t.compareDocumentPosition && t.compareDocumentPosition(a) & 16)
          )
        );
      };
      var be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function dn(t, i) {
        return i
          ? t === "\0"
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }
      f.escapeSelector = function (t) {
        return (t + "").replace(be, dn);
      };
      var Ce = ne,
        Qe = z;
      (function () {
        var t,
          i,
          a,
          s,
          l,
          c = Qe,
          p,
          w,
          x,
          L,
          O,
          k = f.expando,
          D = 0,
          q = 0,
          Z = Sr(),
          pe = Sr(),
          he = Sr(),
          en = Sr(),
          Ge = function (b, C) {
            return b === C && (l = !0), 0;
          },
          Qn =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          et =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            ce +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          we =
            "\\[" +
            ce +
            "*(" +
            et +
            ")(?:" +
            ce +
            "*([*^$|!~]?=)" +
            ce +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            et +
            "))|)" +
            ce +
            "*\\]",
          _t =
            ":(" +
            et +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            we +
            ")*)|.*)\\)|)",
          Se = new RegExp(ce + "+", "g"),
          He = new RegExp("^" + ce + "*," + ce + "*"),
          xr = new RegExp("^" + ce + "*([>+~]|" + ce + ")" + ce + "*"),
          Jr = new RegExp(ce + "|>"),
          zn = new RegExp(_t),
          Pt = new RegExp("^" + et + "$"),
          Rn = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + we),
            PSEUDO: new RegExp("^" + _t),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                ce +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                ce +
                "*(?:([+-]|)" +
                ce +
                "*(\\d+)|))" +
                ce +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + Qn + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                ce +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                ce +
                "*((?:-\\d)?\\d*)" +
                ce +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          ct = /^(?:input|select|textarea|button)$/i,
          wt = /^h\d$/i,
          vn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          _r = /[+~]/,
          ht = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + ce + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          nt = function (b, C) {
            var R = "0x" + b.slice(1) - 65536;
            return (
              C ||
              (R < 0
                ? String.fromCharCode(R + 65536)
                : String.fromCharCode((R >> 10) | 55296, (R & 1023) | 56320))
            );
          },
          xn = function () {
            St();
          },
          Pi = Ot(
            function (b) {
              return b.disabled === !0 && j(b, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        function wr() {
          try {
            return p.activeElement;
          } catch {}
        }
        try {
          c.apply((A = M.call(Ce.childNodes)), Ce.childNodes),
            A[Ce.childNodes.length].nodeType;
        } catch {
          c = {
            apply: function (C, R) {
              Qe.apply(C, M.call(R));
            },
            call: function (C) {
              Qe.apply(C, M.call(arguments, 1));
            },
          };
        }
        function Re(b, C, R, P) {
          var y,
            E,
            S,
            H,
            B,
            X,
            Q,
            J = C && C.ownerDocument,
            ve = C ? C.nodeType : 9;
          if (
            ((R = R || []),
            typeof b != "string" || !b || (ve !== 1 && ve !== 9 && ve !== 11))
          )
            return R;
          if (!P && (St(C), (C = C || p), x)) {
            if (ve !== 11 && (B = vn.exec(b)))
              if ((y = B[1])) {
                if (ve === 9)
                  if ((S = C.getElementById(y))) {
                    if (S.id === y) return c.call(R, S), R;
                  } else return R;
                else if (
                  J &&
                  (S = J.getElementById(y)) &&
                  Re.contains(C, S) &&
                  S.id === y
                )
                  return c.call(R, S), R;
              } else {
                if (B[2]) return c.apply(R, C.getElementsByTagName(b)), R;
                if ((y = B[3]) && C.getElementsByClassName)
                  return c.apply(R, C.getElementsByClassName(y)), R;
              }
            if (!en[b + " "] && (!L || !L.test(b))) {
              if (((Q = b), (J = C), ve === 1 && (Jr.test(b) || xr.test(b)))) {
                for (
                  J = (_r.test(b) && Oi(C.parentNode)) || C,
                    (J != C || !ee.scope) &&
                      ((H = C.getAttribute("id"))
                        ? (H = f.escapeSelector(H))
                        : C.setAttribute("id", (H = k))),
                    X = rr(b),
                    E = X.length;
                  E--;

                )
                  X[E] = (H ? "#" + H : ":scope") + " " + Yn(X[E]);
                Q = X.join(",");
              }
              try {
                return c.apply(R, J.querySelectorAll(Q)), R;
              } catch {
                en(b, !0);
              } finally {
                H === k && C.removeAttribute("id");
              }
            }
          }
          return Ka(b.replace(Je, "$1"), C, R, P);
        }
        function Sr() {
          var b = [];
          function C(R, P) {
            return (
              b.push(R + " ") > i.cacheLength && delete C[b.shift()],
              (C[R + " "] = P)
            );
          }
          return C;
        }
        function Kn(b) {
          return (b[k] = !0), b;
        }
        function tr(b) {
          var C = p.createElement("fieldset");
          try {
            return !!b(C);
          } catch {
            return !1;
          } finally {
            C.parentNode && C.parentNode.removeChild(C), (C = null);
          }
        }
        function ro(b) {
          return function (C) {
            return j(C, "input") && C.type === b;
          };
        }
        function io(b) {
          return function (C) {
            return (j(C, "input") || j(C, "button")) && C.type === b;
          };
        }
        function qa(b) {
          return function (C) {
            return "form" in C
              ? C.parentNode && C.disabled === !1
                ? "label" in C
                  ? "label" in C.parentNode
                    ? C.parentNode.disabled === b
                    : C.disabled === b
                  : C.isDisabled === b || (C.isDisabled !== !b && Pi(C) === b)
                : C.disabled === b
              : "label" in C
              ? C.disabled === b
              : !1;
          };
        }
        function Dn(b) {
          return Kn(function (C) {
            return (
              (C = +C),
              Kn(function (R, P) {
                for (var y, E = b([], R.length, C), S = E.length; S--; )
                  R[(y = E[S])] && (R[y] = !(P[y] = R[y]));
              })
            );
          });
        }
        function Oi(b) {
          return b && typeof b.getElementsByTagName < "u" && b;
        }
        function St(b) {
          var C,
            R = b ? b.ownerDocument || b : Ce;
          return (
            R == p ||
              R.nodeType !== 9 ||
              !R.documentElement ||
              ((p = R),
              (w = p.documentElement),
              (x = !f.isXMLDoc(p)),
              (O = w.matches || w.webkitMatchesSelector || w.msMatchesSelector),
              w.msMatchesSelector &&
                Ce != p &&
                (C = p.defaultView) &&
                C.top !== C &&
                C.addEventListener("unload", xn),
              (ee.getById = tr(function (P) {
                return (
                  (w.appendChild(P).id = f.expando),
                  !p.getElementsByName || !p.getElementsByName(f.expando).length
                );
              })),
              (ee.disconnectedMatch = tr(function (P) {
                return O.call(P, "*");
              })),
              (ee.scope = tr(function () {
                return p.querySelectorAll(":scope");
              })),
              (ee.cssHas = tr(function () {
                try {
                  return p.querySelector(":has(*,:jqfake)"), !1;
                } catch {
                  return !0;
                }
              })),
              ee.getById
                ? ((i.filter.ID = function (P) {
                    var y = P.replace(ht, nt);
                    return function (E) {
                      return E.getAttribute("id") === y;
                    };
                  }),
                  (i.find.ID = function (P, y) {
                    if (typeof y.getElementById < "u" && x) {
                      var E = y.getElementById(P);
                      return E ? [E] : [];
                    }
                  }))
                : ((i.filter.ID = function (P) {
                    var y = P.replace(ht, nt);
                    return function (E) {
                      var S =
                        typeof E.getAttributeNode < "u" &&
                        E.getAttributeNode("id");
                      return S && S.value === y;
                    };
                  }),
                  (i.find.ID = function (P, y) {
                    if (typeof y.getElementById < "u" && x) {
                      var E,
                        S,
                        H,
                        B = y.getElementById(P);
                      if (B) {
                        if (
                          ((E = B.getAttributeNode("id")), E && E.value === P)
                        )
                          return [B];
                        for (H = y.getElementsByName(P), S = 0; (B = H[S++]); )
                          if (
                            ((E = B.getAttributeNode("id")), E && E.value === P)
                          )
                            return [B];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = function (P, y) {
                return typeof y.getElementsByTagName < "u"
                  ? y.getElementsByTagName(P)
                  : y.querySelectorAll(P);
              }),
              (i.find.CLASS = function (P, y) {
                if (typeof y.getElementsByClassName < "u" && x)
                  return y.getElementsByClassName(P);
              }),
              (L = []),
              tr(function (P) {
                var y;
                (w.appendChild(P).innerHTML =
                  "<a id='" +
                  k +
                  "' href='' disabled='disabled'></a><select id='" +
                  k +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  P.querySelectorAll("[selected]").length ||
                    L.push("\\[" + ce + "*(?:value|" + Qn + ")"),
                  P.querySelectorAll("[id~=" + k + "-]").length || L.push("~="),
                  P.querySelectorAll("a#" + k + "+*").length ||
                    L.push(".#.+[+~]"),
                  P.querySelectorAll(":checked").length || L.push(":checked"),
                  (y = p.createElement("input")),
                  y.setAttribute("type", "hidden"),
                  P.appendChild(y).setAttribute("name", "D"),
                  (w.appendChild(P).disabled = !0),
                  P.querySelectorAll(":disabled").length !== 2 &&
                    L.push(":enabled", ":disabled"),
                  (y = p.createElement("input")),
                  y.setAttribute("name", ""),
                  P.appendChild(y),
                  P.querySelectorAll("[name='']").length ||
                    L.push(
                      "\\[" + ce + "*name" + ce + "*=" + ce + `*(?:''|"")`
                    );
              }),
              ee.cssHas || L.push(":has"),
              (L = L.length && new RegExp(L.join("|"))),
              (Ge = function (P, y) {
                if (P === y) return (l = !0), 0;
                var E = !P.compareDocumentPosition - !y.compareDocumentPosition;
                return (
                  E ||
                  ((E =
                    (P.ownerDocument || P) == (y.ownerDocument || y)
                      ? P.compareDocumentPosition(y)
                      : 1),
                  E & 1 ||
                  (!ee.sortDetached && y.compareDocumentPosition(P) === E)
                    ? P === p || (P.ownerDocument == Ce && Re.contains(Ce, P))
                      ? -1
                      : y === p || (y.ownerDocument == Ce && Re.contains(Ce, y))
                      ? 1
                      : s
                      ? K.call(s, P) - K.call(s, y)
                      : 0
                    : E & 4
                    ? -1
                    : 1)
                );
              })),
            p
          );
        }
        (Re.matches = function (b, C) {
          return Re(b, null, null, C);
        }),
          (Re.matchesSelector = function (b, C) {
            if ((St(b), x && !en[C + " "] && (!L || !L.test(C))))
              try {
                var R = O.call(b, C);
                if (
                  R ||
                  ee.disconnectedMatch ||
                  (b.document && b.document.nodeType !== 11)
                )
                  return R;
              } catch {
                en(C, !0);
              }
            return Re(C, p, null, [b]).length > 0;
          }),
          (Re.contains = function (b, C) {
            return (b.ownerDocument || b) != p && St(b), f.contains(b, C);
          }),
          (Re.attr = function (b, C) {
            (b.ownerDocument || b) != p && St(b);
            var R = i.attrHandle[C.toLowerCase()],
              P =
                R && me.call(i.attrHandle, C.toLowerCase())
                  ? R(b, C, !x)
                  : void 0;
            return P !== void 0 ? P : b.getAttribute(C);
          }),
          (Re.error = function (b) {
            throw new Error("Syntax error, unrecognized expression: " + b);
          }),
          (f.uniqueSort = function (b) {
            var C,
              R = [],
              P = 0,
              y = 0;
            if (
              ((l = !ee.sortStable),
              (s = !ee.sortStable && M.call(b, 0)),
              Me.call(b, Ge),
              l)
            ) {
              for (; (C = b[y++]); ) C === b[y] && (P = R.push(y));
              for (; P--; ) Ve.call(b, R[P], 1);
            }
            return (s = null), b;
          }),
          (f.fn.uniqueSort = function () {
            return this.pushStack(f.uniqueSort(M.apply(this)));
          }),
          (i = f.expr =
            {
              cacheLength: 50,
              createPseudo: Kn,
              match: Rn,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (b) {
                  return (
                    (b[1] = b[1].replace(ht, nt)),
                    (b[3] = (b[3] || b[4] || b[5] || "").replace(ht, nt)),
                    b[2] === "~=" && (b[3] = " " + b[3] + " "),
                    b.slice(0, 4)
                  );
                },
                CHILD: function (b) {
                  return (
                    (b[1] = b[1].toLowerCase()),
                    b[1].slice(0, 3) === "nth"
                      ? (b[3] || Re.error(b[0]),
                        (b[4] = +(b[4]
                          ? b[5] + (b[6] || 1)
                          : 2 * (b[3] === "even" || b[3] === "odd"))),
                        (b[5] = +(b[7] + b[8] || b[3] === "odd")))
                      : b[3] && Re.error(b[0]),
                    b
                  );
                },
                PSEUDO: function (b) {
                  var C,
                    R = !b[6] && b[2];
                  return Rn.CHILD.test(b[0])
                    ? null
                    : (b[3]
                        ? (b[2] = b[4] || b[5] || "")
                        : R &&
                          zn.test(R) &&
                          (C = rr(R, !0)) &&
                          (C = R.indexOf(")", R.length - C) - R.length) &&
                          ((b[0] = b[0].slice(0, C)), (b[2] = R.slice(0, C))),
                      b.slice(0, 3));
                },
              },
              filter: {
                TAG: function (b) {
                  var C = b.replace(ht, nt).toLowerCase();
                  return b === "*"
                    ? function () {
                        return !0;
                      }
                    : function (R) {
                        return j(R, C);
                      };
                },
                CLASS: function (b) {
                  var C = Z[b + " "];
                  return (
                    C ||
                    ((C = new RegExp(
                      "(^|" + ce + ")" + b + "(" + ce + "|$)"
                    )) &&
                      Z(b, function (R) {
                        return C.test(
                          (typeof R.className == "string" && R.className) ||
                            (typeof R.getAttribute < "u" &&
                              R.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (b, C, R) {
                  return function (P) {
                    var y = Re.attr(P, b);
                    return y == null
                      ? C === "!="
                      : C
                      ? ((y += ""),
                        C === "="
                          ? y === R
                          : C === "!="
                          ? y !== R
                          : C === "^="
                          ? R && y.indexOf(R) === 0
                          : C === "*="
                          ? R && y.indexOf(R) > -1
                          : C === "$="
                          ? R && y.slice(-R.length) === R
                          : C === "~="
                          ? (" " + y.replace(Se, " ") + " ").indexOf(R) > -1
                          : C === "|="
                          ? y === R || y.slice(0, R.length + 1) === R + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (b, C, R, P, y) {
                  var E = b.slice(0, 3) !== "nth",
                    S = b.slice(-4) !== "last",
                    H = C === "of-type";
                  return P === 1 && y === 0
                    ? function (B) {
                        return !!B.parentNode;
                      }
                    : function (B, X, Q) {
                        var J,
                          ve,
                          ae,
                          xe,
                          nn,
                          on = E !== S ? "nextSibling" : "previousSibling",
                          tn = B.parentNode,
                          wn = H && B.nodeName.toLowerCase(),
                          dt = !Q && !H,
                          le = !1;
                        if (tn) {
                          if (E) {
                            for (; on; ) {
                              for (ae = B; (ae = ae[on]); )
                                if (H ? j(ae, wn) : ae.nodeType === 1)
                                  return !1;
                              nn = on = b === "only" && !nn && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((nn = [S ? tn.firstChild : tn.lastChild]), S && dt)
                          ) {
                            for (
                              ve = tn[k] || (tn[k] = {}),
                                J = ve[b] || [],
                                xe = J[0] === D && J[1],
                                le = xe && J[2],
                                ae = xe && tn.childNodes[xe];
                              (ae =
                                (++xe && ae && ae[on]) ||
                                (le = xe = 0) ||
                                nn.pop());

                            )
                              if (ae.nodeType === 1 && ++le && ae === B) {
                                ve[b] = [D, xe, le];
                                break;
                              }
                          } else if (
                            (dt &&
                              ((ve = B[k] || (B[k] = {})),
                              (J = ve[b] || []),
                              (xe = J[0] === D && J[1]),
                              (le = xe)),
                            le === !1)
                          )
                            for (
                              ;
                              (ae =
                                (++xe && ae && ae[on]) ||
                                (le = xe = 0) ||
                                nn.pop()) &&
                              !(
                                (H ? j(ae, wn) : ae.nodeType === 1) &&
                                ++le &&
                                (dt &&
                                  ((ve = ae[k] || (ae[k] = {})),
                                  (ve[b] = [D, le])),
                                ae === B)
                              );

                            );
                          return (
                            (le -= y), le === P || (le % P === 0 && le / P >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (b, C) {
                  var R,
                    P =
                      i.pseudos[b] ||
                      i.setFilters[b.toLowerCase()] ||
                      Re.error("unsupported pseudo: " + b);
                  return P[k]
                    ? P(C)
                    : P.length > 1
                    ? ((R = [b, b, "", C]),
                      i.setFilters.hasOwnProperty(b.toLowerCase())
                        ? Kn(function (y, E) {
                            for (var S, H = P(y, C), B = H.length; B--; )
                              (S = K.call(y, H[B])), (y[S] = !(E[S] = H[B]));
                          })
                        : function (y) {
                            return P(y, 0, R);
                          })
                    : P;
                },
              },
              pseudos: {
                not: Kn(function (b) {
                  var C = [],
                    R = [],
                    P = Hi(b.replace(Je, "$1"));
                  return P[k]
                    ? Kn(function (y, E, S, H) {
                        for (var B, X = P(y, null, H, []), Q = y.length; Q--; )
                          (B = X[Q]) && (y[Q] = !(E[Q] = B));
                      })
                    : function (y, E, S) {
                        return (
                          (C[0] = y), P(C, null, S, R), (C[0] = null), !R.pop()
                        );
                      };
                }),
                has: Kn(function (b) {
                  return function (C) {
                    return Re(b, C).length > 0;
                  };
                }),
                contains: Kn(function (b) {
                  return (
                    (b = b.replace(ht, nt)),
                    function (C) {
                      return (C.textContent || f.text(C)).indexOf(b) > -1;
                    }
                  );
                }),
                lang: Kn(function (b) {
                  return (
                    Pt.test(b || "") || Re.error("unsupported lang: " + b),
                    (b = b.replace(ht, nt).toLowerCase()),
                    function (C) {
                      var R;
                      do
                        if (
                          (R = x
                            ? C.lang
                            : C.getAttribute("xml:lang") ||
                              C.getAttribute("lang"))
                        )
                          return (
                            (R = R.toLowerCase()),
                            R === b || R.indexOf(b + "-") === 0
                          );
                      while ((C = C.parentNode) && C.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (b) {
                  var C = h.location && h.location.hash;
                  return C && C.slice(1) === b.id;
                },
                root: function (b) {
                  return b === w;
                },
                focus: function (b) {
                  return (
                    b === wr() &&
                    p.hasFocus() &&
                    !!(b.type || b.href || ~b.tabIndex)
                  );
                },
                enabled: qa(!1),
                disabled: qa(!0),
                checked: function (b) {
                  return (
                    (j(b, "input") && !!b.checked) ||
                    (j(b, "option") && !!b.selected)
                  );
                },
                selected: function (b) {
                  return (
                    b.parentNode && b.parentNode.selectedIndex,
                    b.selected === !0
                  );
                },
                empty: function (b) {
                  for (b = b.firstChild; b; b = b.nextSibling)
                    if (b.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (b) {
                  return !i.pseudos.empty(b);
                },
                header: function (b) {
                  return wt.test(b.nodeName);
                },
                input: function (b) {
                  return ct.test(b.nodeName);
                },
                button: function (b) {
                  return (
                    (j(b, "input") && b.type === "button") || j(b, "button")
                  );
                },
                text: function (b) {
                  var C;
                  return (
                    j(b, "input") &&
                    b.type === "text" &&
                    ((C = b.getAttribute("type")) == null ||
                      C.toLowerCase() === "text")
                  );
                },
                first: Dn(function () {
                  return [0];
                }),
                last: Dn(function (b, C) {
                  return [C - 1];
                }),
                eq: Dn(function (b, C, R) {
                  return [R < 0 ? R + C : R];
                }),
                even: Dn(function (b, C) {
                  for (var R = 0; R < C; R += 2) b.push(R);
                  return b;
                }),
                odd: Dn(function (b, C) {
                  for (var R = 1; R < C; R += 2) b.push(R);
                  return b;
                }),
                lt: Dn(function (b, C, R) {
                  var P;
                  for (
                    R < 0 ? (P = R + C) : R > C ? (P = C) : (P = R);
                    --P >= 0;

                  )
                    b.push(P);
                  return b;
                }),
                gt: Dn(function (b, C, R) {
                  for (var P = R < 0 ? R + C : R; ++P < C; ) b.push(P);
                  return b;
                }),
              },
            }),
          (i.pseudos.nth = i.pseudos.eq);
        for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          i.pseudos[t] = ro(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = io(t);
        function Zr() {}
        (Zr.prototype = i.filters = i.pseudos), (i.setFilters = new Zr());
        function rr(b, C) {
          var R,
            P,
            y,
            E,
            S,
            H,
            B,
            X = pe[b + " "];
          if (X) return C ? 0 : X.slice(0);
          for (S = b, H = [], B = i.preFilter; S; ) {
            (!R || (P = He.exec(S))) &&
              (P && (S = S.slice(P[0].length) || S), H.push((y = []))),
              (R = !1),
              (P = xr.exec(S)) &&
                ((R = P.shift()),
                y.push({ value: R, type: P[0].replace(Je, " ") }),
                (S = S.slice(R.length)));
            for (E in i.filter)
              (P = Rn[E].exec(S)) &&
                (!B[E] || (P = B[E](P))) &&
                ((R = P.shift()),
                y.push({ value: R, type: E, matches: P }),
                (S = S.slice(R.length)));
            if (!R) break;
          }
          return C ? S.length : S ? Re.error(b) : pe(b, H).slice(0);
        }
        function Yn(b) {
          for (var C = 0, R = b.length, P = ""; C < R; C++) P += b[C].value;
          return P;
        }
        function Ot(b, C, R) {
          var P = C.dir,
            y = C.next,
            E = y || P,
            S = R && E === "parentNode",
            H = q++;
          return C.first
            ? function (B, X, Q) {
                for (; (B = B[P]); )
                  if (B.nodeType === 1 || S) return b(B, X, Q);
                return !1;
              }
            : function (B, X, Q) {
                var J,
                  ve,
                  ae = [D, H];
                if (Q) {
                  for (; (B = B[P]); )
                    if ((B.nodeType === 1 || S) && b(B, X, Q)) return !0;
                } else
                  for (; (B = B[P]); )
                    if (B.nodeType === 1 || S)
                      if (((ve = B[k] || (B[k] = {})), y && j(B, y)))
                        B = B[P] || B;
                      else {
                        if ((J = ve[E]) && J[0] === D && J[1] === H)
                          return (ae[2] = J[2]);
                        if (((ve[E] = ae), (ae[2] = b(B, X, Q)))) return !0;
                      }
                return !1;
              };
        }
        function ki(b) {
          return b.length > 1
            ? function (C, R, P) {
                for (var y = b.length; y--; ) if (!b[y](C, R, P)) return !1;
                return !0;
              }
            : b[0];
        }
        function ao(b, C, R) {
          for (var P = 0, y = C.length; P < y; P++) Re(b, C[P], R);
          return R;
        }
        function Xr(b, C, R, P, y) {
          for (var E, S = [], H = 0, B = b.length, X = C != null; H < B; H++)
            (E = b[H]) && (!R || R(E, P, y)) && (S.push(E), X && C.push(H));
          return S;
        }
        function Et(b, C, R, P, y, E) {
          return (
            P && !P[k] && (P = Et(P)),
            y && !y[k] && (y = Et(y, E)),
            Kn(function (S, H, B, X) {
              var Q,
                J,
                ve,
                ae,
                xe = [],
                nn = [],
                on = H.length,
                tn = S || ao(C || "*", B.nodeType ? [B] : B, []),
                wn = b && (S || !C) ? Xr(tn, xe, b, B, X) : tn;
              if (
                (R
                  ? ((ae = y || (S ? b : on || P) ? [] : H), R(wn, ae, B, X))
                  : (ae = wn),
                P)
              )
                for (Q = Xr(ae, nn), P(Q, [], B, X), J = Q.length; J--; )
                  (ve = Q[J]) && (ae[nn[J]] = !(wn[nn[J]] = ve));
              if (S) {
                if (y || b) {
                  if (y) {
                    for (Q = [], J = ae.length; J--; )
                      (ve = ae[J]) && Q.push((wn[J] = ve));
                    y(null, (ae = []), Q, X);
                  }
                  for (J = ae.length; J--; )
                    (ve = ae[J]) &&
                      (Q = y ? K.call(S, ve) : xe[J]) > -1 &&
                      (S[Q] = !(H[Q] = ve));
                }
              } else (ae = Xr(ae === H ? ae.splice(on, ae.length) : ae)), y ? y(null, H, ae, X) : c.apply(H, ae);
            })
          );
        }
        function _n(b) {
          for (
            var C,
              R,
              P,
              y = b.length,
              E = i.relative[b[0].type],
              S = E || i.relative[" "],
              H = E ? 1 : 0,
              B = Ot(
                function (J) {
                  return J === C;
                },
                S,
                !0
              ),
              X = Ot(
                function (J) {
                  return K.call(C, J) > -1;
                },
                S,
                !0
              ),
              Q = [
                function (J, ve, ae) {
                  var xe =
                    (!E && (ae || ve != a)) ||
                    ((C = ve).nodeType ? B(J, ve, ae) : X(J, ve, ae));
                  return (C = null), xe;
                },
              ];
            H < y;
            H++
          )
            if ((R = i.relative[b[H].type])) Q = [Ot(ki(Q), R)];
            else {
              if (((R = i.filter[b[H].type].apply(null, b[H].matches)), R[k])) {
                for (P = ++H; P < y && !i.relative[b[P].type]; P++);
                return Et(
                  H > 1 && ki(Q),
                  H > 1 &&
                    Yn(
                      b
                        .slice(0, H - 1)
                        .concat({ value: b[H - 2].type === " " ? "*" : "" })
                    ).replace(Je, "$1"),
                  R,
                  H < P && _n(b.slice(H, P)),
                  P < y && _n((b = b.slice(P))),
                  P < y && Yn(b)
                );
              }
              Q.push(R);
            }
          return ki(Q);
        }
        function za(b, C) {
          var R = C.length > 0,
            P = b.length > 0,
            y = function (E, S, H, B, X) {
              var Q,
                J,
                ve,
                ae = 0,
                xe = "0",
                nn = E && [],
                on = [],
                tn = a,
                wn = E || (P && i.find.TAG("*", X)),
                dt = (D += tn == null ? 1 : Math.random() || 0.1),
                le = wn.length;
              for (
                X && (a = S == p || S || X);
                xe !== le && (Q = wn[xe]) != null;
                xe++
              ) {
                if (P && Q) {
                  for (
                    J = 0, !S && Q.ownerDocument != p && (St(Q), (H = !x));
                    (ve = b[J++]);

                  )
                    if (ve(Q, S || p, H)) {
                      c.call(B, Q);
                      break;
                    }
                  X && (D = dt);
                }
                R && ((Q = !ve && Q) && ae--, E && nn.push(Q));
              }
              if (((ae += xe), R && xe !== ae)) {
                for (J = 0; (ve = C[J++]); ) ve(nn, on, S, H);
                if (E) {
                  if (ae > 0)
                    for (; xe--; ) nn[xe] || on[xe] || (on[xe] = Te.call(B));
                  on = Xr(on);
                }
                c.apply(B, on),
                  X &&
                    !E &&
                    on.length > 0 &&
                    ae + C.length > 1 &&
                    f.uniqueSort(B);
              }
              return X && ((D = dt), (a = tn)), nn;
            };
          return R ? Kn(y) : y;
        }
        function Hi(b, C) {
          var R,
            P = [],
            y = [],
            E = he[b + " "];
          if (!E) {
            for (C || (C = rr(b)), R = C.length; R--; )
              (E = _n(C[R])), E[k] ? P.push(E) : y.push(E);
            (E = he(b, za(y, P))), (E.selector = b);
          }
          return E;
        }
        function Ka(b, C, R, P) {
          var y,
            E,
            S,
            H,
            B,
            X = typeof b == "function" && b,
            Q = !P && rr((b = X.selector || b));
          if (((R = R || []), Q.length === 1)) {
            if (
              ((E = Q[0] = Q[0].slice(0)),
              E.length > 2 &&
                (S = E[0]).type === "ID" &&
                C.nodeType === 9 &&
                x &&
                i.relative[E[1].type])
            ) {
              if (
                ((C = (i.find.ID(S.matches[0].replace(ht, nt), C) || [])[0]), C)
              )
                X && (C = C.parentNode);
              else return R;
              b = b.slice(E.shift().value.length);
            }
            for (
              y = Rn.needsContext.test(b) ? 0 : E.length;
              y-- && ((S = E[y]), !i.relative[(H = S.type)]);

            )
              if (
                (B = i.find[H]) &&
                (P = B(
                  S.matches[0].replace(ht, nt),
                  (_r.test(E[0].type) && Oi(C.parentNode)) || C
                ))
              ) {
                if ((E.splice(y, 1), (b = P.length && Yn(E)), !b))
                  return c.apply(R, P), R;
                break;
              }
          }
          return (
            (X || Hi(b, Q))(
              P,
              C,
              !x,
              R,
              !C || (_r.test(b) && Oi(C.parentNode)) || C
            ),
            R
          );
        }
        (ee.sortStable = k.split("").sort(Ge).join("") === k),
          St(),
          (ee.sortDetached = tr(function (b) {
            return b.compareDocumentPosition(p.createElement("fieldset")) & 1;
          })),
          (f.find = Re),
          (f.expr[":"] = f.expr.pseudos),
          (f.unique = f.uniqueSort),
          (Re.compile = Hi),
          (Re.select = Ka),
          (Re.setDocument = St),
          (Re.tokenize = rr),
          (Re.escape = f.escapeSelector),
          (Re.getText = f.text),
          (Re.isXML = f.isXMLDoc),
          (Re.selectors = f.expr),
          (Re.support = f.support),
          (Re.uniqueSort = f.uniqueSort);
      })();
      var Cn = function (t, i, a) {
          for (var s = [], l = a !== void 0; (t = t[i]) && t.nodeType !== 9; )
            if (t.nodeType === 1) {
              if (l && f(t).is(a)) break;
              s.push(t);
            }
          return s;
        },
        un = function (t, i) {
          for (var a = []; t; t = t.nextSibling)
            t.nodeType === 1 && t !== i && a.push(t);
          return a;
        },
        fn = f.expr.match.needsContext,
        da = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function di(t, i, a) {
        return $(i)
          ? f.grep(t, function (s, l) {
              return !!i.call(s, l, s) !== a;
            })
          : i.nodeType
          ? f.grep(t, function (s) {
              return (s === i) !== a;
            })
          : typeof i != "string"
          ? f.grep(t, function (s) {
              return K.call(i, s) > -1 !== a;
            })
          : f.filter(i, t, a);
      }
      (f.filter = function (t, i, a) {
        var s = i[0];
        return (
          a && (t = ":not(" + t + ")"),
          i.length === 1 && s.nodeType === 1
            ? f.find.matchesSelector(s, t)
              ? [s]
              : []
            : f.find.matches(
                t,
                f.grep(i, function (l) {
                  return l.nodeType === 1;
                })
              )
        );
      }),
        f.fn.extend({
          find: function (t) {
            var i,
              a,
              s = this.length,
              l = this;
            if (typeof t != "string")
              return this.pushStack(
                f(t).filter(function () {
                  for (i = 0; i < s; i++) if (f.contains(l[i], this)) return !0;
                })
              );
            for (a = this.pushStack([]), i = 0; i < s; i++) f.find(t, l[i], a);
            return s > 1 ? f.uniqueSort(a) : a;
          },
          filter: function (t) {
            return this.pushStack(di(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(di(this, t || [], !0));
          },
          is: function (t) {
            return !!di(
              this,
              typeof t == "string" && fn.test(t) ? f(t) : t || [],
              !1
            ).length;
          },
        });
      var pa,
        Kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Br = (f.fn.init = function (t, i, a) {
          var s, l;
          if (!t) return this;
          if (((a = a || pa), typeof t == "string"))
            if (
              (t[0] === "<" && t[t.length - 1] === ">" && t.length >= 3
                ? (s = [null, t, null])
                : (s = Kt.exec(t)),
              s && (s[1] || !i))
            )
              if (s[1]) {
                if (
                  ((i = i instanceof f ? i[0] : i),
                  f.merge(
                    this,
                    f.parseHTML(
                      s[1],
                      i && i.nodeType ? i.ownerDocument || i : ne,
                      !0
                    )
                  ),
                  da.test(s[1]) && f.isPlainObject(i))
                )
                  for (s in i) $(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                return this;
              } else
                return (
                  (l = ne.getElementById(s[2])),
                  l && ((this[0] = l), (this.length = 1)),
                  this
                );
            else
              return !i || i.jquery
                ? (i || a).find(t)
                : this.constructor(i).find(t);
          else {
            if (t.nodeType) return (this[0] = t), (this.length = 1), this;
            if ($(t)) return a.ready !== void 0 ? a.ready(t) : t(f);
          }
          return f.makeArray(t, this);
        });
      (Br.prototype = f.fn), (pa = f(ne));
      var Ou = /^(?:parents|prev(?:Until|All))/,
        hr = { children: !0, contents: !0, next: !0, prev: !0 };
      f.fn.extend({
        has: function (t) {
          var i = f(t, this),
            a = i.length;
          return this.filter(function () {
            for (var s = 0; s < a; s++) if (f.contains(this, i[s])) return !0;
          });
        },
        closest: function (t, i) {
          var a,
            s = 0,
            l = this.length,
            c = [],
            p = typeof t != "string" && f(t);
          if (!fn.test(t)) {
            for (; s < l; s++)
              for (a = this[s]; a && a !== i; a = a.parentNode)
                if (
                  a.nodeType < 11 &&
                  (p
                    ? p.index(a) > -1
                    : a.nodeType === 1 && f.find.matchesSelector(a, t))
                ) {
                  c.push(a);
                  break;
                }
          }
          return this.pushStack(c.length > 1 ? f.uniqueSort(c) : c);
        },
        index: function (t) {
          return t
            ? typeof t == "string"
              ? K.call(f(t), this[0])
              : K.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, i) {
          return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, i))));
        },
        addBack: function (t) {
          return this.add(
            t == null ? this.prevObject : this.prevObject.filter(t)
          );
        },
      });
      function Yt(t, i) {
        for (; (t = t[i]) && t.nodeType !== 1; );
        return t;
      }
      f.each(
        {
          parent: function (t) {
            var i = t.parentNode;
            return i && i.nodeType !== 11 ? i : null;
          },
          parents: function (t) {
            return Cn(t, "parentNode");
          },
          parentsUntil: function (t, i, a) {
            return Cn(t, "parentNode", a);
          },
          next: function (t) {
            return Yt(t, "nextSibling");
          },
          prev: function (t) {
            return Yt(t, "previousSibling");
          },
          nextAll: function (t) {
            return Cn(t, "nextSibling");
          },
          prevAll: function (t) {
            return Cn(t, "previousSibling");
          },
          nextUntil: function (t, i, a) {
            return Cn(t, "nextSibling", a);
          },
          prevUntil: function (t, i, a) {
            return Cn(t, "previousSibling", a);
          },
          siblings: function (t) {
            return un((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return un(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument != null && N(t.contentDocument)
              ? t.contentDocument
              : (j(t, "template") && (t = t.content || t),
                f.merge([], t.childNodes));
          },
        },
        function (t, i) {
          f.fn[t] = function (a, s) {
            var l = f.map(this, i, a);
            return (
              t.slice(-5) !== "Until" && (s = a),
              s && typeof s == "string" && (l = f.filter(s, l)),
              this.length > 1 &&
                (hr[t] || f.uniqueSort(l), Ou.test(t) && l.reverse()),
              this.pushStack(l)
            );
          };
        }
      );
      var Zn = /[^\x20\t\r\n\f]+/g;
      function Fr(t) {
        var i = {};
        return (
          f.each(t.match(Zn) || [], function (a, s) {
            i[s] = !0;
          }),
          i
        );
      }
      f.Callbacks = function (t) {
        t = typeof t == "string" ? Fr(t) : f.extend({}, t);
        var i,
          a,
          s,
          l,
          c = [],
          p = [],
          w = -1,
          x = function () {
            for (l = l || t.once, s = i = !0; p.length; w = -1)
              for (a = p.shift(); ++w < c.length; )
                c[w].apply(a[0], a[1]) === !1 &&
                  t.stopOnFalse &&
                  ((w = c.length), (a = !1));
            t.memory || (a = !1), (i = !1), l && (a ? (c = []) : (c = ""));
          },
          L = {
            add: function () {
              return (
                c &&
                  (a && !i && ((w = c.length - 1), p.push(a)),
                  (function O(k) {
                    f.each(k, function (D, q) {
                      $(q)
                        ? (!t.unique || !L.has(q)) && c.push(q)
                        : q && q.length && an(q) !== "string" && O(q);
                    });
                  })(arguments),
                  a && !i && x()),
                this
              );
            },
            remove: function () {
              return (
                f.each(arguments, function (O, k) {
                  for (var D; (D = f.inArray(k, c, D)) > -1; )
                    c.splice(D, 1), D <= w && w--;
                }),
                this
              );
            },
            has: function (O) {
              return O ? f.inArray(O, c) > -1 : c.length > 0;
            },
            empty: function () {
              return c && (c = []), this;
            },
            disable: function () {
              return (l = p = []), (c = a = ""), this;
            },
            disabled: function () {
              return !c;
            },
            lock: function () {
              return (l = p = []), !a && !i && (c = a = ""), this;
            },
            locked: function () {
              return !!l;
            },
            fireWith: function (O, k) {
              return (
                l ||
                  ((k = k || []),
                  (k = [O, k.slice ? k.slice() : k]),
                  p.push(k),
                  i || x()),
                this
              );
            },
            fire: function () {
              return L.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!s;
            },
          };
        return L;
      };
      function st(t) {
        return t;
      }
      function dr(t) {
        throw t;
      }
      function Nn(t, i, a, s) {
        var l;
        try {
          t && $((l = t.promise))
            ? l.call(t).done(i).fail(a)
            : t && $((l = t.then))
            ? l.call(t, i, a)
            : i.apply(void 0, [t].slice(s));
        } catch (c) {
          a.apply(void 0, [c]);
        }
      }
      f.extend({
        Deferred: function (t) {
          var i = [
              [
                "notify",
                "progress",
                f.Callbacks("memory"),
                f.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                f.Callbacks("once memory"),
                f.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                f.Callbacks("once memory"),
                f.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            a = "pending",
            s = {
              state: function () {
                return a;
              },
              always: function () {
                return l.done(arguments).fail(arguments), this;
              },
              catch: function (c) {
                return s.then(null, c);
              },
              pipe: function () {
                var c = arguments;
                return f
                  .Deferred(function (p) {
                    f.each(i, function (w, x) {
                      var L = $(c[x[4]]) && c[x[4]];
                      l[x[1]](function () {
                        var O = L && L.apply(this, arguments);
                        O && $(O.promise)
                          ? O.promise()
                              .progress(p.notify)
                              .done(p.resolve)
                              .fail(p.reject)
                          : p[x[0] + "With"](this, L ? [O] : arguments);
                      });
                    }),
                      (c = null);
                  })
                  .promise();
              },
              then: function (c, p, w) {
                var x = 0;
                function L(O, k, D, q) {
                  return function () {
                    var Z = this,
                      pe = arguments,
                      he = function () {
                        var Ge, Qn;
                        if (!(O < x)) {
                          if (((Ge = D.apply(Z, pe)), Ge === k.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (Qn =
                            Ge &&
                            (typeof Ge == "object" ||
                              typeof Ge == "function") &&
                            Ge.then),
                            $(Qn)
                              ? q
                                ? Qn.call(Ge, L(x, k, st, q), L(x, k, dr, q))
                                : (x++,
                                  Qn.call(
                                    Ge,
                                    L(x, k, st, q),
                                    L(x, k, dr, q),
                                    L(x, k, st, k.notifyWith)
                                  ))
                              : (D !== st && ((Z = void 0), (pe = [Ge])),
                                (q || k.resolveWith)(Z, pe));
                        }
                      },
                      en = q
                        ? he
                        : function () {
                            try {
                              he();
                            } catch (Ge) {
                              f.Deferred.exceptionHook &&
                                f.Deferred.exceptionHook(Ge, en.error),
                                O + 1 >= x &&
                                  (D !== dr && ((Z = void 0), (pe = [Ge])),
                                  k.rejectWith(Z, pe));
                            }
                          };
                    O
                      ? en()
                      : (f.Deferred.getErrorHook
                          ? (en.error = f.Deferred.getErrorHook())
                          : f.Deferred.getStackHook &&
                            (en.error = f.Deferred.getStackHook()),
                        h.setTimeout(en));
                  };
                }
                return f
                  .Deferred(function (O) {
                    i[0][3].add(L(0, O, $(w) ? w : st, O.notifyWith)),
                      i[1][3].add(L(0, O, $(c) ? c : st)),
                      i[2][3].add(L(0, O, $(p) ? p : dr));
                  })
                  .promise();
              },
              promise: function (c) {
                return c != null ? f.extend(c, s) : s;
              },
            },
            l = {};
          return (
            f.each(i, function (c, p) {
              var w = p[2],
                x = p[5];
              (s[p[1]] = w.add),
                x &&
                  w.add(
                    function () {
                      a = x;
                    },
                    i[3 - c][2].disable,
                    i[3 - c][3].disable,
                    i[0][2].lock,
                    i[0][3].lock
                  ),
                w.add(p[3].fire),
                (l[p[0]] = function () {
                  return (
                    l[p[0] + "With"](this === l ? void 0 : this, arguments),
                    this
                  );
                }),
                (l[p[0] + "With"] = w.fireWith);
            }),
            s.promise(l),
            t && t.call(l, l),
            l
          );
        },
        when: function (t) {
          var i = arguments.length,
            a = i,
            s = Array(a),
            l = M.call(arguments),
            c = f.Deferred(),
            p = function (w) {
              return function (x) {
                (s[w] = this),
                  (l[w] = arguments.length > 1 ? M.call(arguments) : x),
                  --i || c.resolveWith(s, l);
              };
            };
          if (
            i <= 1 &&
            (Nn(t, c.done(p(a)).resolve, c.reject, !i),
            c.state() === "pending" || $(l[a] && l[a].then))
          )
            return c.then();
          for (; a--; ) Nn(l[a], p(a), c.reject);
          return c.promise();
        },
      });
      var pr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (f.Deferred.exceptionHook = function (t, i) {
        h.console &&
          h.console.warn &&
          t &&
          pr.test(t.name) &&
          h.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
      }),
        (f.readyException = function (t) {
          h.setTimeout(function () {
            throw t;
          });
        });
      var pi = f.Deferred();
      (f.fn.ready = function (t) {
        return (
          pi.then(t).catch(function (i) {
            f.readyException(i);
          }),
          this
        );
      }),
        f.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (t === !0 ? --f.readyWait : f.isReady) ||
              ((f.isReady = !0),
              !(t !== !0 && --f.readyWait > 0) && pi.resolveWith(ne, [f]));
          },
        }),
        (f.ready.then = pi.then);
      function Ln() {
        ne.removeEventListener("DOMContentLoaded", Ln),
          h.removeEventListener("load", Ln),
          f.ready();
      }
      ne.readyState === "complete" ||
      (ne.readyState !== "loading" && !ne.documentElement.doScroll)
        ? h.setTimeout(f.ready)
        : (ne.addEventListener("DOMContentLoaded", Ln),
          h.addEventListener("load", Ln));
      var Xn = function (t, i, a, s, l, c, p) {
          var w = 0,
            x = t.length,
            L = a == null;
          if (an(a) === "object") {
            l = !0;
            for (w in a) Xn(t, i, w, a[w], !0, c, p);
          } else if (
            s !== void 0 &&
            ((l = !0),
            $(s) || (p = !0),
            L &&
              (p
                ? (i.call(t, s), (i = null))
                : ((L = i),
                  (i = function (O, k, D) {
                    return L.call(f(O), D);
                  }))),
            i)
          )
            for (; w < x; w++) i(t[w], a, p ? s : s.call(t[w], w, i(t[w], a)));
          return l ? t : L ? i.call(t) : x ? i(t[0], a) : c;
        },
        ku = /^-ms-/,
        gr = /-([a-z])/g;
      function Un(t, i) {
        return i.toUpperCase();
      }
      function pn(t) {
        return t.replace(ku, "ms-").replace(gr, Un);
      }
      var vt = function (t) {
        return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType;
      };
      function mr() {
        this.expando = f.expando + mr.uid++;
      }
      (mr.uid = 1),
        (mr.prototype = {
          cache: function (t) {
            var i = t[this.expando];
            return (
              i ||
                ((i = {}),
                vt(t) &&
                  (t.nodeType
                    ? (t[this.expando] = i)
                    : Object.defineProperty(t, this.expando, {
                        value: i,
                        configurable: !0,
                      }))),
              i
            );
          },
          set: function (t, i, a) {
            var s,
              l = this.cache(t);
            if (typeof i == "string") l[pn(i)] = a;
            else for (s in i) l[pn(s)] = i[s];
            return l;
          },
          get: function (t, i) {
            return i === void 0
              ? this.cache(t)
              : t[this.expando] && t[this.expando][pn(i)];
          },
          access: function (t, i, a) {
            return i === void 0 || (i && typeof i == "string" && a === void 0)
              ? this.get(t, i)
              : (this.set(t, i, a), a !== void 0 ? a : i);
          },
          remove: function (t, i) {
            var a,
              s = t[this.expando];
            if (s !== void 0) {
              if (i !== void 0)
                for (
                  Array.isArray(i)
                    ? (i = i.map(pn))
                    : ((i = pn(i)), (i = (i in s) ? [i] : i.match(Zn) || [])),
                    a = i.length;
                  a--;

                )
                  delete s[i[a]];
              (i === void 0 || f.isEmptyObject(s)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var i = t[this.expando];
            return i !== void 0 && !f.isEmptyObject(i);
          },
        });
      var te = new mr(),
        gn = new mr(),
        vr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        jt = /[A-Z]/g;
      function gi(t) {
        return t === "true"
          ? !0
          : t === "false"
          ? !1
          : t === "null"
          ? null
          : t === +t + ""
          ? +t
          : vr.test(t)
          ? JSON.parse(t)
          : t;
      }
      function Wr(t, i, a) {
        var s;
        if (a === void 0 && t.nodeType === 1)
          if (
            ((s = "data-" + i.replace(jt, "-$&").toLowerCase()),
            (a = t.getAttribute(s)),
            typeof a == "string")
          ) {
            try {
              a = gi(a);
            } catch {}
            gn.set(t, i, a);
          } else a = void 0;
        return a;
      }
      f.extend({
        hasData: function (t) {
          return gn.hasData(t) || te.hasData(t);
        },
        data: function (t, i, a) {
          return gn.access(t, i, a);
        },
        removeData: function (t, i) {
          gn.remove(t, i);
        },
        _data: function (t, i, a) {
          return te.access(t, i, a);
        },
        _removeData: function (t, i) {
          te.remove(t, i);
        },
      }),
        f.fn.extend({
          data: function (t, i) {
            var a,
              s,
              l,
              c = this[0],
              p = c && c.attributes;
            if (t === void 0) {
              if (
                this.length &&
                ((l = gn.get(c)),
                c.nodeType === 1 && !te.get(c, "hasDataAttrs"))
              ) {
                for (a = p.length; a--; )
                  p[a] &&
                    ((s = p[a].name),
                    s.indexOf("data-") === 0 &&
                      ((s = pn(s.slice(5))), Wr(c, s, l[s])));
                te.set(c, "hasDataAttrs", !0);
              }
              return l;
            }
            return typeof t == "object"
              ? this.each(function () {
                  gn.set(this, t);
                })
              : Xn(
                  this,
                  function (w) {
                    var x;
                    if (c && w === void 0)
                      return (
                        (x = gn.get(c, t)),
                        x !== void 0 || ((x = Wr(c, t)), x !== void 0)
                          ? x
                          : void 0
                      );
                    this.each(function () {
                      gn.set(this, t, w);
                    });
                  },
                  null,
                  i,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              gn.remove(this, t);
            });
          },
        }),
        f.extend({
          queue: function (t, i, a) {
            var s;
            if (t)
              return (
                (i = (i || "fx") + "queue"),
                (s = te.get(t, i)),
                a &&
                  (!s || Array.isArray(a)
                    ? (s = te.access(t, i, f.makeArray(a)))
                    : s.push(a)),
                s || []
              );
          },
          dequeue: function (t, i) {
            i = i || "fx";
            var a = f.queue(t, i),
              s = a.length,
              l = a.shift(),
              c = f._queueHooks(t, i),
              p = function () {
                f.dequeue(t, i);
              };
            l === "inprogress" && ((l = a.shift()), s--),
              l &&
                (i === "fx" && a.unshift("inprogress"),
                delete c.stop,
                l.call(t, p, c)),
              !s && c && c.empty.fire();
          },
          _queueHooks: function (t, i) {
            var a = i + "queueHooks";
            return (
              te.get(t, a) ||
              te.access(t, a, {
                empty: f.Callbacks("once memory").add(function () {
                  te.remove(t, [i + "queue", a]);
                }),
              })
            );
          },
        }),
        f.fn.extend({
          queue: function (t, i) {
            var a = 2;
            return (
              typeof t != "string" && ((i = t), (t = "fx"), a--),
              arguments.length < a
                ? f.queue(this[0], t)
                : i === void 0
                ? this
                : this.each(function () {
                    var s = f.queue(this, t, i);
                    f._queueHooks(this, t),
                      t === "fx" && s[0] !== "inprogress" && f.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              f.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, i) {
            var a,
              s = 1,
              l = f.Deferred(),
              c = this,
              p = this.length,
              w = function () {
                --s || l.resolveWith(c, [c]);
              };
            for (
              typeof t != "string" && ((i = t), (t = void 0)), t = t || "fx";
              p--;

            )
              (a = te.get(c[p], t + "queueHooks")),
                a && a.empty && (s++, a.empty.add(w));
            return w(), l.promise(i);
          },
        });
      var Ur = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        It = new RegExp("^(?:([+-])=|)(" + Ur + ")([a-z%]*)$", "i"),
        Gn = ["Top", "Right", "Bottom", "Left"],
        ft = ne.documentElement,
        yt = function (t) {
          return f.contains(t.ownerDocument, t);
        },
        mi = { composed: !0 };
      ft.getRootNode &&
        (yt = function (t) {
          return (
            f.contains(t.ownerDocument, t) ||
            t.getRootNode(mi) === t.ownerDocument
          );
        });
      var $t = function (t, i) {
        return (
          (t = i || t),
          t.style.display === "none" ||
            (t.style.display === "" && yt(t) && f.css(t, "display") === "none")
        );
      };
      function ga(t, i, a, s) {
        var l,
          c,
          p = 20,
          w = s
            ? function () {
                return s.cur();
              }
            : function () {
                return f.css(t, i, "");
              },
          x = w(),
          L = (a && a[3]) || (f.cssNumber[i] ? "" : "px"),
          O =
            t.nodeType &&
            (f.cssNumber[i] || (L !== "px" && +x)) &&
            It.exec(f.css(t, i));
        if (O && O[3] !== L) {
          for (x = x / 2, L = L || O[3], O = +x || 1; p--; )
            f.style(t, i, O + L),
              (1 - c) * (1 - (c = w() / x || 0.5)) <= 0 && (p = 0),
              (O = O / c);
          (O = O * 2), f.style(t, i, O + L), (a = a || []);
        }
        return (
          a &&
            ((O = +O || +x || 0),
            (l = a[1] ? O + (a[1] + 1) * a[2] : +a[2]),
            s && ((s.unit = L), (s.start = O), (s.end = l))),
          l
        );
      }
      var ma = {};
      function Hu(t) {
        var i,
          a = t.ownerDocument,
          s = t.nodeName,
          l = ma[s];
        return (
          l ||
          ((i = a.body.appendChild(a.createElement(s))),
          (l = f.css(i, "display")),
          i.parentNode.removeChild(i),
          l === "none" && (l = "block"),
          (ma[s] = l),
          l)
        );
      }
      function Mt(t, i) {
        for (var a, s, l = [], c = 0, p = t.length; c < p; c++)
          (s = t[c]),
            s.style &&
              ((a = s.style.display),
              i
                ? (a === "none" &&
                    ((l[c] = te.get(s, "display") || null),
                    l[c] || (s.style.display = "")),
                  s.style.display === "" && $t(s) && (l[c] = Hu(s)))
                : a !== "none" && ((l[c] = "none"), te.set(s, "display", a)));
        for (c = 0; c < p; c++) l[c] != null && (t[c].style.display = l[c]);
        return t;
      }
      f.fn.extend({
        show: function () {
          return Mt(this, !0);
        },
        hide: function () {
          return Mt(this);
        },
        toggle: function (t) {
          return typeof t == "boolean"
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                $t(this) ? f(this).show() : f(this).hide();
              });
        },
      });
      var Vt = /^(?:checkbox|radio)$/i,
        va = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ya = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var t = ne.createDocumentFragment(),
          i = t.appendChild(ne.createElement("div")),
          a = ne.createElement("input");
        a.setAttribute("type", "radio"),
          a.setAttribute("checked", "checked"),
          a.setAttribute("name", "t"),
          i.appendChild(a),
          (ee.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (i.innerHTML = "<textarea>x</textarea>"),
          (ee.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue),
          (i.innerHTML = "<option></option>"),
          (ee.option = !!i.lastChild);
      })();
      var In = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (In.tbody = In.tfoot = In.colgroup = In.caption = In.thead),
        (In.th = In.td),
        ee.option ||
          (In.optgroup = In.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      function mn(t, i) {
        var a;
        return (
          typeof t.getElementsByTagName < "u"
            ? (a = t.getElementsByTagName(i || "*"))
            : typeof t.querySelectorAll < "u"
            ? (a = t.querySelectorAll(i || "*"))
            : (a = []),
          i === void 0 || (i && j(t, i)) ? f.merge([t], a) : a
        );
      }
      function Gr(t, i) {
        for (var a = 0, s = t.length; a < s; a++)
          te.set(t[a], "globalEval", !i || te.get(i[a], "globalEval"));
      }
      var Bu = /<|&#?\w+;/;
      function Aa(t, i, a, s, l) {
        for (
          var c,
            p,
            w,
            x,
            L,
            O,
            k = i.createDocumentFragment(),
            D = [],
            q = 0,
            Z = t.length;
          q < Z;
          q++
        )
          if (((c = t[q]), c || c === 0))
            if (an(c) === "object") f.merge(D, c.nodeType ? [c] : c);
            else if (!Bu.test(c)) D.push(i.createTextNode(c));
            else {
              for (
                p = p || k.appendChild(i.createElement("div")),
                  w = (va.exec(c) || ["", ""])[1].toLowerCase(),
                  x = In[w] || In._default,
                  p.innerHTML = x[1] + f.htmlPrefilter(c) + x[2],
                  O = x[0];
                O--;

              )
                p = p.lastChild;
              f.merge(D, p.childNodes),
                (p = k.firstChild),
                (p.textContent = "");
            }
        for (k.textContent = "", q = 0; (c = D[q++]); ) {
          if (s && f.inArray(c, s) > -1) {
            l && l.push(c);
            continue;
          }
          if (
            ((L = yt(c)), (p = mn(k.appendChild(c), "script")), L && Gr(p), a)
          )
            for (O = 0; (c = p[O++]); ) ya.test(c.type || "") && a.push(c);
        }
        return k;
      }
      var ba = /^([^.]*)(?:\.(.+)|)/;
      function At() {
        return !0;
      }
      function Jt() {
        return !1;
      }
      function yr(t, i, a, s, l, c) {
        var p, w;
        if (typeof i == "object") {
          typeof a != "string" && ((s = s || a), (a = void 0));
          for (w in i) yr(t, w, a, s, i[w], c);
          return t;
        }
        if (
          (s == null && l == null
            ? ((l = a), (s = a = void 0))
            : l == null &&
              (typeof a == "string"
                ? ((l = s), (s = void 0))
                : ((l = s), (s = a), (a = void 0))),
          l === !1)
        )
          l = Jt;
        else if (!l) return t;
        return (
          c === 1 &&
            ((p = l),
            (l = function (x) {
              return f().off(x), p.apply(this, arguments);
            }),
            (l.guid = p.guid || (p.guid = f.guid++))),
          t.each(function () {
            f.event.add(this, i, l, s, a);
          })
        );
      }
      f.event = {
        global: {},
        add: function (t, i, a, s, l) {
          var c,
            p,
            w,
            x,
            L,
            O,
            k,
            D,
            q,
            Z,
            pe,
            he = te.get(t);
          if (vt(t))
            for (
              a.handler && ((c = a), (a = c.handler), (l = c.selector)),
                l && f.find.matchesSelector(ft, l),
                a.guid || (a.guid = f.guid++),
                (x = he.events) || (x = he.events = Object.create(null)),
                (p = he.handle) ||
                  (p = he.handle =
                    function (en) {
                      return typeof f < "u" && f.event.triggered !== en.type
                        ? f.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                i = (i || "").match(Zn) || [""],
                L = i.length;
              L--;

            )
              (w = ba.exec(i[L]) || []),
                (q = pe = w[1]),
                (Z = (w[2] || "").split(".").sort()),
                q &&
                  ((k = f.event.special[q] || {}),
                  (q = (l ? k.delegateType : k.bindType) || q),
                  (k = f.event.special[q] || {}),
                  (O = f.extend(
                    {
                      type: q,
                      origType: pe,
                      data: s,
                      handler: a,
                      guid: a.guid,
                      selector: l,
                      needsContext: l && f.expr.match.needsContext.test(l),
                      namespace: Z.join("."),
                    },
                    c
                  )),
                  (D = x[q]) ||
                    ((D = x[q] = []),
                    (D.delegateCount = 0),
                    (!k.setup || k.setup.call(t, s, Z, p) === !1) &&
                      t.addEventListener &&
                      t.addEventListener(q, p)),
                  k.add &&
                    (k.add.call(t, O),
                    O.handler.guid || (O.handler.guid = a.guid)),
                  l ? D.splice(D.delegateCount++, 0, O) : D.push(O),
                  (f.event.global[q] = !0));
        },
        remove: function (t, i, a, s, l) {
          var c,
            p,
            w,
            x,
            L,
            O,
            k,
            D,
            q,
            Z,
            pe,
            he = te.hasData(t) && te.get(t);
          if (!(!he || !(x = he.events))) {
            for (i = (i || "").match(Zn) || [""], L = i.length; L--; ) {
              if (
                ((w = ba.exec(i[L]) || []),
                (q = pe = w[1]),
                (Z = (w[2] || "").split(".").sort()),
                !q)
              ) {
                for (q in x) f.event.remove(t, q + i[L], a, s, !0);
                continue;
              }
              for (
                k = f.event.special[q] || {},
                  q = (s ? k.delegateType : k.bindType) || q,
                  D = x[q] || [],
                  w =
                    w[2] &&
                    new RegExp("(^|\\.)" + Z.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  p = c = D.length;
                c--;

              )
                (O = D[c]),
                  (l || pe === O.origType) &&
                    (!a || a.guid === O.guid) &&
                    (!w || w.test(O.namespace)) &&
                    (!s || s === O.selector || (s === "**" && O.selector)) &&
                    (D.splice(c, 1),
                    O.selector && D.delegateCount--,
                    k.remove && k.remove.call(t, O));
              p &&
                !D.length &&
                ((!k.teardown || k.teardown.call(t, Z, he.handle) === !1) &&
                  f.removeEvent(t, q, he.handle),
                delete x[q]);
            }
            f.isEmptyObject(x) && te.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var i,
            a,
            s,
            l,
            c,
            p,
            w = new Array(arguments.length),
            x = f.event.fix(t),
            L = (te.get(this, "events") || Object.create(null))[x.type] || [],
            O = f.event.special[x.type] || {};
          for (w[0] = x, i = 1; i < arguments.length; i++) w[i] = arguments[i];
          if (
            ((x.delegateTarget = this),
            !(O.preDispatch && O.preDispatch.call(this, x) === !1))
          ) {
            for (
              p = f.event.handlers.call(this, x, L), i = 0;
              (l = p[i++]) && !x.isPropagationStopped();

            )
              for (
                x.currentTarget = l.elem, a = 0;
                (c = l.handlers[a++]) && !x.isImmediatePropagationStopped();

              )
                (!x.rnamespace ||
                  c.namespace === !1 ||
                  x.rnamespace.test(c.namespace)) &&
                  ((x.handleObj = c),
                  (x.data = c.data),
                  (s = (
                    (f.event.special[c.origType] || {}).handle || c.handler
                  ).apply(l.elem, w)),
                  s !== void 0 &&
                    (x.result = s) === !1 &&
                    (x.preventDefault(), x.stopPropagation()));
            return O.postDispatch && O.postDispatch.call(this, x), x.result;
          }
        },
        handlers: function (t, i) {
          var a,
            s,
            l,
            c,
            p,
            w = [],
            x = i.delegateCount,
            L = t.target;
          if (x && L.nodeType && !(t.type === "click" && t.button >= 1)) {
            for (; L !== this; L = L.parentNode || this)
              if (
                L.nodeType === 1 &&
                !(t.type === "click" && L.disabled === !0)
              ) {
                for (c = [], p = {}, a = 0; a < x; a++)
                  (s = i[a]),
                    (l = s.selector + " "),
                    p[l] === void 0 &&
                      (p[l] = s.needsContext
                        ? f(l, this).index(L) > -1
                        : f.find(l, this, null, [L]).length),
                    p[l] && c.push(s);
                c.length && w.push({ elem: L, handlers: c });
              }
          }
          return (
            (L = this),
            x < i.length && w.push({ elem: L, handlers: i.slice(x) }),
            w
          );
        },
        addProp: function (t, i) {
          Object.defineProperty(f.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: $(i)
              ? function () {
                  if (this.originalEvent) return i(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (a) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              });
            },
          });
        },
        fix: function (t) {
          return t[f.expando] ? t : new f.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var i = this || t;
              return (
                Vt.test(i.type) &&
                  i.click &&
                  j(i, "input") &&
                  qr(i, "click", !0),
                !1
              );
            },
            trigger: function (t) {
              var i = this || t;
              return (
                Vt.test(i.type) && i.click && j(i, "input") && qr(i, "click"),
                !0
              );
            },
            _default: function (t) {
              var i = t.target;
              return (
                (Vt.test(i.type) &&
                  i.click &&
                  j(i, "input") &&
                  te.get(i, "click")) ||
                j(i, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              t.result !== void 0 &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      };
      function qr(t, i, a) {
        if (!a) {
          te.get(t, i) === void 0 && f.event.add(t, i, At);
          return;
        }
        te.set(t, i, !1),
          f.event.add(t, i, {
            namespace: !1,
            handler: function (s) {
              var l,
                c = te.get(this, i);
              if (s.isTrigger & 1 && this[i]) {
                if (c)
                  (f.event.special[i] || {}).delegateType &&
                    s.stopPropagation();
                else if (
                  ((c = M.call(arguments)),
                  te.set(this, i, c),
                  this[i](),
                  (l = te.get(this, i)),
                  te.set(this, i, !1),
                  c !== l)
                )
                  return s.stopImmediatePropagation(), s.preventDefault(), l;
              } else
                c &&
                  (te.set(this, i, f.event.trigger(c[0], c.slice(1), this)),
                  s.stopPropagation(),
                  (s.isImmediatePropagationStopped = At));
            },
          });
      }
      (f.removeEvent = function (t, i, a) {
        t.removeEventListener && t.removeEventListener(i, a);
      }),
        (f.Event = function (t, i) {
          if (!(this instanceof f.Event)) return new f.Event(t, i);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (t.defaultPrevented === void 0 && t.returnValue === !1)
                  ? At
                  : Jt),
              (this.target =
                t.target && t.target.nodeType === 3
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            i && f.extend(this, i),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[f.expando] = !0);
        }),
        (f.Event.prototype = {
          constructor: f.Event,
          isDefaultPrevented: Jt,
          isPropagationStopped: Jt,
          isImmediatePropagationStopped: Jt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = At),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = At),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = At),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        f.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          f.event.addProp
        ),
        f.each({ focus: "focusin", blur: "focusout" }, function (t, i) {
          function a(s) {
            if (ne.documentMode) {
              var l = te.get(this, "handle"),
                c = f.event.fix(s);
              (c.type = s.type === "focusin" ? "focus" : "blur"),
                (c.isSimulated = !0),
                l(s),
                c.target === c.currentTarget && l(c);
            } else f.event.simulate(i, s.target, f.event.fix(s));
          }
          (f.event.special[t] = {
            setup: function () {
              var s;
              if ((qr(this, t, !0), ne.documentMode))
                (s = te.get(this, i)),
                  s || this.addEventListener(i, a),
                  te.set(this, i, (s || 0) + 1);
              else return !1;
            },
            trigger: function () {
              return qr(this, t), !0;
            },
            teardown: function () {
              var s;
              if (ne.documentMode)
                (s = te.get(this, i) - 1),
                  s
                    ? te.set(this, i, s)
                    : (this.removeEventListener(i, a), te.remove(this, i));
              else return !1;
            },
            _default: function (s) {
              return te.get(s.target, t);
            },
            delegateType: i,
          }),
            (f.event.special[i] = {
              setup: function () {
                var s = this.ownerDocument || this.document || this,
                  l = ne.documentMode ? this : s,
                  c = te.get(l, i);
                c ||
                  (ne.documentMode
                    ? this.addEventListener(i, a)
                    : s.addEventListener(t, a, !0)),
                  te.set(l, i, (c || 0) + 1);
              },
              teardown: function () {
                var s = this.ownerDocument || this.document || this,
                  l = ne.documentMode ? this : s,
                  c = te.get(l, i) - 1;
                c
                  ? te.set(l, i, c)
                  : (ne.documentMode
                      ? this.removeEventListener(i, a)
                      : s.removeEventListener(t, a, !0),
                    te.remove(l, i));
              },
            });
        }),
        f.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, i) {
            f.event.special[t] = {
              delegateType: i,
              bindType: i,
              handle: function (a) {
                var s,
                  l = this,
                  c = a.relatedTarget,
                  p = a.handleObj;
                return (
                  (!c || (c !== l && !f.contains(l, c))) &&
                    ((a.type = p.origType),
                    (s = p.handler.apply(this, arguments)),
                    (a.type = i)),
                  s
                );
              },
            };
          }
        ),
        f.fn.extend({
          on: function (t, i, a, s) {
            return yr(this, t, i, a, s);
          },
          one: function (t, i, a, s) {
            return yr(this, t, i, a, s, 1);
          },
          off: function (t, i, a) {
            var s, l;
            if (t && t.preventDefault && t.handleObj)
              return (
                (s = t.handleObj),
                f(t.delegateTarget).off(
                  s.namespace ? s.origType + "." + s.namespace : s.origType,
                  s.selector,
                  s.handler
                ),
                this
              );
            if (typeof t == "object") {
              for (l in t) this.off(l, i, t[l]);
              return this;
            }
            return (
              (i === !1 || typeof i == "function") && ((a = i), (i = void 0)),
              a === !1 && (a = Jt),
              this.each(function () {
                f.event.remove(this, t, a, i);
              })
            );
          },
        });
      var Fu = /<script|<style|<link/i,
        Wu = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Uu = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function xa(t, i) {
        return (
          (j(t, "table") &&
            j(i.nodeType !== 11 ? i : i.firstChild, "tr") &&
            f(t).children("tbody")[0]) ||
          t
        );
      }
      function Gu(t) {
        return (t.type = (t.getAttribute("type") !== null) + "/" + t.type), t;
      }
      function qu(t) {
        return (
          (t.type || "").slice(0, 5) === "true/"
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function _a(t, i) {
        var a, s, l, c, p, w, x;
        if (i.nodeType === 1) {
          if (te.hasData(t) && ((c = te.get(t)), (x = c.events), x)) {
            te.remove(i, "handle events");
            for (l in x)
              for (a = 0, s = x[l].length; a < s; a++)
                f.event.add(i, l, x[l][a]);
          }
          gn.hasData(t) &&
            ((p = gn.access(t)), (w = f.extend({}, p)), gn.set(i, w));
        }
      }
      function wa(t, i) {
        var a = i.nodeName.toLowerCase();
        a === "input" && Vt.test(t.type)
          ? (i.checked = t.checked)
          : (a === "input" || a === "textarea") &&
            (i.defaultValue = t.defaultValue);
      }
      function Zt(t, i, a, s) {
        i = U(i);
        var l,
          c,
          p,
          w,
          x,
          L,
          O = 0,
          k = t.length,
          D = k - 1,
          q = i[0],
          Z = $(q);
        if (
          Z ||
          (k > 1 && typeof q == "string" && !ee.checkClone && Wu.test(q))
        )
          return t.each(function (pe) {
            var he = t.eq(pe);
            Z && (i[0] = q.call(this, pe, he.html())), Zt(he, i, a, s);
          });
        if (
          k &&
          ((l = Aa(i, t[0].ownerDocument, !1, t, s)),
          (c = l.firstChild),
          l.childNodes.length === 1 && (l = c),
          c || s)
        ) {
          for (p = f.map(mn(l, "script"), Gu), w = p.length; O < k; O++)
            (x = l),
              O !== D &&
                ((x = f.clone(x, !0, !0)), w && f.merge(p, mn(x, "script"))),
              a.call(t[O], x, O);
          if (w)
            for (
              L = p[p.length - 1].ownerDocument, f.map(p, qu), O = 0;
              O < w;
              O++
            )
              (x = p[O]),
                ya.test(x.type || "") &&
                  !te.access(x, "globalEval") &&
                  f.contains(L, x) &&
                  (x.src && (x.type || "").toLowerCase() !== "module"
                    ? f._evalUrl &&
                      !x.noModule &&
                      f._evalUrl(
                        x.src,
                        { nonce: x.nonce || x.getAttribute("nonce") },
                        L
                      )
                    : ze(x.textContent.replace(Uu, ""), x, L));
        }
        return t;
      }
      function Sa(t, i, a) {
        for (var s, l = i ? f.filter(i, t) : t, c = 0; (s = l[c]) != null; c++)
          !a && s.nodeType === 1 && f.cleanData(mn(s)),
            s.parentNode &&
              (a && yt(s) && Gr(mn(s, "script")), s.parentNode.removeChild(s));
        return t;
      }
      f.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, i, a) {
          var s,
            l,
            c,
            p,
            w = t.cloneNode(!0),
            x = yt(t);
          if (
            !ee.noCloneChecked &&
            (t.nodeType === 1 || t.nodeType === 11) &&
            !f.isXMLDoc(t)
          )
            for (p = mn(w), c = mn(t), s = 0, l = c.length; s < l; s++)
              wa(c[s], p[s]);
          if (i)
            if (a)
              for (
                c = c || mn(t), p = p || mn(w), s = 0, l = c.length;
                s < l;
                s++
              )
                _a(c[s], p[s]);
            else _a(t, w);
          return (
            (p = mn(w, "script")),
            p.length > 0 && Gr(p, !x && mn(t, "script")),
            w
          );
        },
        cleanData: function (t) {
          for (
            var i, a, s, l = f.event.special, c = 0;
            (a = t[c]) !== void 0;
            c++
          )
            if (vt(a)) {
              if ((i = a[te.expando])) {
                if (i.events)
                  for (s in i.events)
                    l[s] ? f.event.remove(a, s) : f.removeEvent(a, s, i.handle);
                a[te.expando] = void 0;
              }
              a[gn.expando] && (a[gn.expando] = void 0);
            }
        },
      }),
        f.fn.extend({
          detach: function (t) {
            return Sa(this, t, !0);
          },
          remove: function (t) {
            return Sa(this, t);
          },
          text: function (t) {
            return Xn(
              this,
              function (i) {
                return i === void 0
                  ? f.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = i);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Zt(this, arguments, function (t) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var i = xa(this, t);
                i.appendChild(t);
              }
            });
          },
          prepend: function () {
            return Zt(this, arguments, function (t) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var i = xa(this, t);
                i.insertBefore(t, i.firstChild);
              }
            });
          },
          before: function () {
            return Zt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Zt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, i = 0; (t = this[i]) != null; i++)
              t.nodeType === 1 &&
                (f.cleanData(mn(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, i) {
            return (
              (t = t ?? !1),
              (i = i ?? t),
              this.map(function () {
                return f.clone(this, t, i);
              })
            );
          },
          html: function (t) {
            return Xn(
              this,
              function (i) {
                var a = this[0] || {},
                  s = 0,
                  l = this.length;
                if (i === void 0 && a.nodeType === 1) return a.innerHTML;
                if (
                  typeof i == "string" &&
                  !Fu.test(i) &&
                  !In[(va.exec(i) || ["", ""])[1].toLowerCase()]
                ) {
                  i = f.htmlPrefilter(i);
                  try {
                    for (; s < l; s++)
                      (a = this[s] || {}),
                        a.nodeType === 1 &&
                          (f.cleanData(mn(a, !1)), (a.innerHTML = i));
                    a = 0;
                  } catch {}
                }
                a && this.empty().append(i);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Zt(
              this,
              arguments,
              function (i) {
                var a = this.parentNode;
                f.inArray(this, t) < 0 &&
                  (f.cleanData(mn(this)), a && a.replaceChild(i, this));
              },
              t
            );
          },
        }),
        f.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, i) {
            f.fn[t] = function (a) {
              for (
                var s, l = [], c = f(a), p = c.length - 1, w = 0;
                w <= p;
                w++
              )
                (s = w === p ? this : this.clone(!0)),
                  f(c[w])[i](s),
                  z.apply(l, s.get());
              return this.pushStack(l);
            };
          }
        );
      var vi = new RegExp("^(" + Ur + ")(?!px)[a-z%]+$", "i"),
        yi = /^--/,
        zr = function (t) {
          var i = t.ownerDocument.defaultView;
          return (!i || !i.opener) && (i = h), i.getComputedStyle(t);
        },
        Ea = function (t, i, a) {
          var s,
            l,
            c = {};
          for (l in i) (c[l] = t.style[l]), (t.style[l] = i[l]);
          s = a.call(t);
          for (l in i) t.style[l] = c[l];
          return s;
        },
        Kr = new RegExp(Gn.join("|"), "i");
      (function () {
        function t() {
          if (L) {
            (x.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (L.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ft.appendChild(x).appendChild(L);
            var O = h.getComputedStyle(L);
            (a = O.top !== "1%"),
              (w = i(O.marginLeft) === 12),
              (L.style.right = "60%"),
              (c = i(O.right) === 36),
              (s = i(O.width) === 36),
              (L.style.position = "absolute"),
              (l = i(L.offsetWidth / 3) === 12),
              ft.removeChild(x),
              (L = null);
          }
        }
        function i(O) {
          return Math.round(parseFloat(O));
        }
        var a,
          s,
          l,
          c,
          p,
          w,
          x = ne.createElement("div"),
          L = ne.createElement("div");
        L.style &&
          ((L.style.backgroundClip = "content-box"),
          (L.cloneNode(!0).style.backgroundClip = ""),
          (ee.clearCloneStyle = L.style.backgroundClip === "content-box"),
          f.extend(ee, {
            boxSizingReliable: function () {
              return t(), s;
            },
            pixelBoxStyles: function () {
              return t(), c;
            },
            pixelPosition: function () {
              return t(), a;
            },
            reliableMarginLeft: function () {
              return t(), w;
            },
            scrollboxSize: function () {
              return t(), l;
            },
            reliableTrDimensions: function () {
              var O, k, D, q;
              return (
                p == null &&
                  ((O = ne.createElement("table")),
                  (k = ne.createElement("tr")),
                  (D = ne.createElement("div")),
                  (O.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (k.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (k.style.height = "1px"),
                  (D.style.height = "9px"),
                  (D.style.display = "block"),
                  ft.appendChild(O).appendChild(k).appendChild(D),
                  (q = h.getComputedStyle(k)),
                  (p =
                    parseInt(q.height, 10) +
                      parseInt(q.borderTopWidth, 10) +
                      parseInt(q.borderBottomWidth, 10) ===
                    k.offsetHeight),
                  ft.removeChild(O)),
                p
              );
            },
          }));
      })();
      function Ar(t, i, a) {
        var s,
          l,
          c,
          p,
          w = yi.test(i),
          x = t.style;
        return (
          (a = a || zr(t)),
          a &&
            ((p = a.getPropertyValue(i) || a[i]),
            w && p && (p = p.replace(Je, "$1") || void 0),
            p === "" && !yt(t) && (p = f.style(t, i)),
            !ee.pixelBoxStyles() &&
              vi.test(p) &&
              Kr.test(i) &&
              ((s = x.width),
              (l = x.minWidth),
              (c = x.maxWidth),
              (x.minWidth = x.maxWidth = x.width = p),
              (p = a.width),
              (x.width = s),
              (x.minWidth = l),
              (x.maxWidth = c))),
          p !== void 0 ? p + "" : p
        );
      }
      function br(t, i) {
        return {
          get: function () {
            if (t()) {
              delete this.get;
              return;
            }
            return (this.get = i).apply(this, arguments);
          },
        };
      }
      var Ta = ["Webkit", "Moz", "ms"],
        Ca = ne.createElement("div").style,
        Na = {};
      function La(t) {
        for (var i = t[0].toUpperCase() + t.slice(1), a = Ta.length; a--; )
          if (((t = Ta[a] + i), t in Ca)) return t;
      }
      function Yr(t) {
        var i = f.cssProps[t] || Na[t];
        return i || (t in Ca ? t : (Na[t] = La(t) || t));
      }
      var Ia = /^(none|table(?!-c[ea]).+)/,
        zu = { position: "absolute", visibility: "hidden", display: "block" },
        Ma = { letterSpacing: "0", fontWeight: "400" };
      function Ra(t, i, a) {
        var s = It.exec(i);
        return s ? Math.max(0, s[2] - (a || 0)) + (s[3] || "px") : i;
      }
      function Ai(t, i, a, s, l, c) {
        var p = i === "width" ? 1 : 0,
          w = 0,
          x = 0,
          L = 0;
        if (a === (s ? "border" : "content")) return 0;
        for (; p < 4; p += 2)
          a === "margin" && (L += f.css(t, a + Gn[p], !0, l)),
            s
              ? (a === "content" && (x -= f.css(t, "padding" + Gn[p], !0, l)),
                a !== "margin" &&
                  (x -= f.css(t, "border" + Gn[p] + "Width", !0, l)))
              : ((x += f.css(t, "padding" + Gn[p], !0, l)),
                a !== "padding"
                  ? (x += f.css(t, "border" + Gn[p] + "Width", !0, l))
                  : (w += f.css(t, "border" + Gn[p] + "Width", !0, l)));
        return (
          !s &&
            c >= 0 &&
            (x +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + i[0].toUpperCase() + i.slice(1)] -
                    c -
                    x -
                    w -
                    0.5
                )
              ) || 0),
          x + L
        );
      }
      function bi(t, i, a) {
        var s = zr(t),
          l = !ee.boxSizingReliable() || a,
          c = l && f.css(t, "boxSizing", !1, s) === "border-box",
          p = c,
          w = Ar(t, i, s),
          x = "offset" + i[0].toUpperCase() + i.slice(1);
        if (vi.test(w)) {
          if (!a) return w;
          w = "auto";
        }
        return (
          ((!ee.boxSizingReliable() && c) ||
            (!ee.reliableTrDimensions() && j(t, "tr")) ||
            w === "auto" ||
            (!parseFloat(w) && f.css(t, "display", !1, s) === "inline")) &&
            t.getClientRects().length &&
            ((c = f.css(t, "boxSizing", !1, s) === "border-box"),
            (p = x in t),
            p && (w = t[x])),
          (w = parseFloat(w) || 0),
          w + Ai(t, i, a || (c ? "border" : "content"), p, s, w) + "px"
        );
      }
      f.extend({
        cssHooks: {
          opacity: {
            get: function (t, i) {
              if (i) {
                var a = Ar(t, "opacity");
                return a === "" ? "1" : a;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (t, i, a, s) {
          if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
            var l,
              c,
              p,
              w = pn(i),
              x = yi.test(i),
              L = t.style;
            if (
              (x || (i = Yr(w)),
              (p = f.cssHooks[i] || f.cssHooks[w]),
              a !== void 0)
            ) {
              if (
                ((c = typeof a),
                c === "string" &&
                  (l = It.exec(a)) &&
                  l[1] &&
                  ((a = ga(t, i, l)), (c = "number")),
                a == null || a !== a)
              )
                return;
              c === "number" &&
                !x &&
                (a += (l && l[3]) || (f.cssNumber[w] ? "" : "px")),
                !ee.clearCloneStyle &&
                  a === "" &&
                  i.indexOf("background") === 0 &&
                  (L[i] = "inherit"),
                (!p || !("set" in p) || (a = p.set(t, a, s)) !== void 0) &&
                  (x ? L.setProperty(i, a) : (L[i] = a));
            } else
              return p && "get" in p && (l = p.get(t, !1, s)) !== void 0
                ? l
                : L[i];
          }
        },
        css: function (t, i, a, s) {
          var l,
            c,
            p,
            w = pn(i),
            x = yi.test(i);
          return (
            x || (i = Yr(w)),
            (p = f.cssHooks[i] || f.cssHooks[w]),
            p && "get" in p && (l = p.get(t, !0, a)),
            l === void 0 && (l = Ar(t, i, s)),
            l === "normal" && i in Ma && (l = Ma[i]),
            a === "" || a
              ? ((c = parseFloat(l)), a === !0 || isFinite(c) ? c || 0 : l)
              : l
          );
        },
      }),
        f.each(["height", "width"], function (t, i) {
          f.cssHooks[i] = {
            get: function (a, s, l) {
              if (s)
                return Ia.test(f.css(a, "display")) &&
                  (!a.getClientRects().length ||
                    !a.getBoundingClientRect().width)
                  ? Ea(a, zu, function () {
                      return bi(a, i, l);
                    })
                  : bi(a, i, l);
            },
            set: function (a, s, l) {
              var c,
                p = zr(a),
                w = !ee.scrollboxSize() && p.position === "absolute",
                x = w || l,
                L = x && f.css(a, "boxSizing", !1, p) === "border-box",
                O = l ? Ai(a, i, l, L, p) : 0;
              return (
                L &&
                  w &&
                  (O -= Math.ceil(
                    a["offset" + i[0].toUpperCase() + i.slice(1)] -
                      parseFloat(p[i]) -
                      Ai(a, i, "border", !1, p) -
                      0.5
                  )),
                O &&
                  (c = It.exec(s)) &&
                  (c[3] || "px") !== "px" &&
                  ((a.style[i] = s), (s = f.css(a, i))),
                Ra(a, s, O)
              );
            },
          };
        }),
        (f.cssHooks.marginLeft = br(ee.reliableMarginLeft, function (t, i) {
          if (i)
            return (
              (parseFloat(Ar(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Ea(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        f.each({ margin: "", padding: "", border: "Width" }, function (t, i) {
          (f.cssHooks[t + i] = {
            expand: function (a) {
              for (
                var s = 0,
                  l = {},
                  c = typeof a == "string" ? a.split(" ") : [a];
                s < 4;
                s++
              )
                l[t + Gn[s] + i] = c[s] || c[s - 2] || c[0];
              return l;
            },
          }),
            t !== "margin" && (f.cssHooks[t + i].set = Ra);
        }),
        f.fn.extend({
          css: function (t, i) {
            return Xn(
              this,
              function (a, s, l) {
                var c,
                  p,
                  w = {},
                  x = 0;
                if (Array.isArray(s)) {
                  for (c = zr(a), p = s.length; x < p; x++)
                    w[s[x]] = f.css(a, s[x], !1, c);
                  return w;
                }
                return l !== void 0 ? f.style(a, s, l) : f.css(a, s);
              },
              t,
              i,
              arguments.length > 1
            );
          },
        });
      function ln(t, i, a, s, l) {
        return new ln.prototype.init(t, i, a, s, l);
      }
      (f.Tween = ln),
        (ln.prototype = {
          constructor: ln,
          init: function (t, i, a, s, l, c) {
            (this.elem = t),
              (this.prop = a),
              (this.easing = l || f.easing._default),
              (this.options = i),
              (this.start = this.now = this.cur()),
              (this.end = s),
              (this.unit = c || (f.cssNumber[a] ? "" : "px"));
          },
          cur: function () {
            var t = ln.propHooks[this.prop];
            return t && t.get ? t.get(this) : ln.propHooks._default.get(this);
          },
          run: function (t) {
            var i,
              a = ln.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = i =
                    f.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = i = t),
              (this.now = (this.end - this.start) * i + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              a && a.set ? a.set(this) : ln.propHooks._default.set(this),
              this
            );
          },
        }),
        (ln.prototype.init.prototype = ln.prototype),
        (ln.propHooks = {
          _default: {
            get: function (t) {
              var i;
              return t.elem.nodeType !== 1 ||
                (t.elem[t.prop] != null && t.elem.style[t.prop] == null)
                ? t.elem[t.prop]
                : ((i = f.css(t.elem, t.prop, "")), !i || i === "auto" ? 0 : i);
            },
            set: function (t) {
              f.fx.step[t.prop]
                ? f.fx.step[t.prop](t)
                : t.elem.nodeType === 1 &&
                  (f.cssHooks[t.prop] || t.elem.style[Yr(t.prop)] != null)
                ? f.style(t.elem, t.prop, t.now + t.unit)
                : (t.elem[t.prop] = t.now);
            },
          },
        }),
        (ln.propHooks.scrollTop = ln.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (f.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (f.fx = ln.prototype.init),
        (f.fx.step = {});
      var Rt,
        Xt,
        Ku = /^(?:toggle|show|hide)$/,
        Da = /queueHooks$/;
      function Qt() {
        Xt &&
          (ne.hidden === !1 && h.requestAnimationFrame
            ? h.requestAnimationFrame(Qt)
            : h.setTimeout(Qt, f.fx.interval),
          f.fx.tick());
      }
      function xi() {
        return (
          h.setTimeout(function () {
            Rt = void 0;
          }),
          (Rt = Date.now())
        );
      }
      function jr(t, i) {
        var a,
          s = 0,
          l = { height: t };
        for (i = i ? 1 : 0; s < 4; s += 2 - i)
          (a = Gn[s]), (l["margin" + a] = l["padding" + a] = t);
        return i && (l.opacity = l.width = t), l;
      }
      function _i(t, i, a) {
        for (
          var s,
            l = (qn.tweeners[i] || []).concat(qn.tweeners["*"]),
            c = 0,
            p = l.length;
          c < p;
          c++
        )
          if ((s = l[c].call(a, i, t))) return s;
      }
      function Pa(t, i, a) {
        var s,
          l,
          c,
          p,
          w,
          x,
          L,
          O,
          k = "width" in i || "height" in i,
          D = this,
          q = {},
          Z = t.style,
          pe = t.nodeType && $t(t),
          he = te.get(t, "fxshow");
        a.queue ||
          ((p = f._queueHooks(t, "fx")),
          p.unqueued == null &&
            ((p.unqueued = 0),
            (w = p.empty.fire),
            (p.empty.fire = function () {
              p.unqueued || w();
            })),
          p.unqueued++,
          D.always(function () {
            D.always(function () {
              p.unqueued--, f.queue(t, "fx").length || p.empty.fire();
            });
          }));
        for (s in i)
          if (((l = i[s]), Ku.test(l))) {
            if (
              (delete i[s],
              (c = c || l === "toggle"),
              l === (pe ? "hide" : "show"))
            )
              if (l === "show" && he && he[s] !== void 0) pe = !0;
              else continue;
            q[s] = (he && he[s]) || f.style(t, s);
          }
        if (((x = !f.isEmptyObject(i)), !(!x && f.isEmptyObject(q)))) {
          k &&
            t.nodeType === 1 &&
            ((a.overflow = [Z.overflow, Z.overflowX, Z.overflowY]),
            (L = he && he.display),
            L == null && (L = te.get(t, "display")),
            (O = f.css(t, "display")),
            O === "none" &&
              (L
                ? (O = L)
                : (Mt([t], !0),
                  (L = t.style.display || L),
                  (O = f.css(t, "display")),
                  Mt([t]))),
            (O === "inline" || (O === "inline-block" && L != null)) &&
              f.css(t, "float") === "none" &&
              (x ||
                (D.done(function () {
                  Z.display = L;
                }),
                L == null && ((O = Z.display), (L = O === "none" ? "" : O))),
              (Z.display = "inline-block"))),
            a.overflow &&
              ((Z.overflow = "hidden"),
              D.always(function () {
                (Z.overflow = a.overflow[0]),
                  (Z.overflowX = a.overflow[1]),
                  (Z.overflowY = a.overflow[2]);
              })),
            (x = !1);
          for (s in q)
            x ||
              (he
                ? "hidden" in he && (pe = he.hidden)
                : (he = te.access(t, "fxshow", { display: L })),
              c && (he.hidden = !pe),
              pe && Mt([t], !0),
              D.done(function () {
                pe || Mt([t]), te.remove(t, "fxshow");
                for (s in q) f.style(t, s, q[s]);
              })),
              (x = _i(pe ? he[s] : 0, s, D)),
              s in he ||
                ((he[s] = x.start), pe && ((x.end = x.start), (x.start = 0)));
        }
      }
      function wi(t, i) {
        var a, s, l, c, p;
        for (a in t)
          if (
            ((s = pn(a)),
            (l = i[s]),
            (c = t[a]),
            Array.isArray(c) && ((l = c[1]), (c = t[a] = c[0])),
            a !== s && ((t[s] = c), delete t[a]),
            (p = f.cssHooks[s]),
            p && "expand" in p)
          ) {
            (c = p.expand(c)), delete t[s];
            for (a in c) a in t || ((t[a] = c[a]), (i[a] = l));
          } else i[s] = l;
      }
      function qn(t, i, a) {
        var s,
          l,
          c = 0,
          p = qn.prefilters.length,
          w = f.Deferred().always(function () {
            delete x.elem;
          }),
          x = function () {
            if (l) return !1;
            for (
              var k = Rt || xi(),
                D = Math.max(0, L.startTime + L.duration - k),
                q = D / L.duration || 0,
                Z = 1 - q,
                pe = 0,
                he = L.tweens.length;
              pe < he;
              pe++
            )
              L.tweens[pe].run(Z);
            return (
              w.notifyWith(t, [L, Z, D]),
              Z < 1 && he
                ? D
                : (he || w.notifyWith(t, [L, 1, 0]), w.resolveWith(t, [L]), !1)
            );
          },
          L = w.promise({
            elem: t,
            props: f.extend({}, i),
            opts: f.extend(
              !0,
              { specialEasing: {}, easing: f.easing._default },
              a
            ),
            originalProperties: i,
            originalOptions: a,
            startTime: Rt || xi(),
            duration: a.duration,
            tweens: [],
            createTween: function (k, D) {
              var q = f.Tween(
                t,
                L.opts,
                k,
                D,
                L.opts.specialEasing[k] || L.opts.easing
              );
              return L.tweens.push(q), q;
            },
            stop: function (k) {
              var D = 0,
                q = k ? L.tweens.length : 0;
              if (l) return this;
              for (l = !0; D < q; D++) L.tweens[D].run(1);
              return (
                k
                  ? (w.notifyWith(t, [L, 1, 0]), w.resolveWith(t, [L, k]))
                  : w.rejectWith(t, [L, k]),
                this
              );
            },
          }),
          O = L.props;
        for (wi(O, L.opts.specialEasing); c < p; c++)
          if (((s = qn.prefilters[c].call(L, t, O, L.opts)), s))
            return (
              $(s.stop) &&
                (f._queueHooks(L.elem, L.opts.queue).stop = s.stop.bind(s)),
              s
            );
        return (
          f.map(O, _i, L),
          $(L.opts.start) && L.opts.start.call(t, L),
          L.progress(L.opts.progress)
            .done(L.opts.done, L.opts.complete)
            .fail(L.opts.fail)
            .always(L.opts.always),
          f.fx.timer(f.extend(x, { elem: t, anim: L, queue: L.opts.queue })),
          L
        );
      }
      (f.Animation = f.extend(qn, {
        tweeners: {
          "*": [
            function (t, i) {
              var a = this.createTween(t, i);
              return ga(a.elem, t, It.exec(i), a), a;
            },
          ],
        },
        tweener: function (t, i) {
          $(t) ? ((i = t), (t = ["*"])) : (t = t.match(Zn));
          for (var a, s = 0, l = t.length; s < l; s++)
            (a = t[s]),
              (qn.tweeners[a] = qn.tweeners[a] || []),
              qn.tweeners[a].unshift(i);
        },
        prefilters: [Pa],
        prefilter: function (t, i) {
          i ? qn.prefilters.unshift(t) : qn.prefilters.push(t);
        },
      })),
        (f.speed = function (t, i, a) {
          var s =
            t && typeof t == "object"
              ? f.extend({}, t)
              : {
                  complete: a || (!a && i) || ($(t) && t),
                  duration: t,
                  easing: (a && i) || (i && !$(i) && i),
                };
          return (
            f.fx.off
              ? (s.duration = 0)
              : typeof s.duration != "number" &&
                (s.duration in f.fx.speeds
                  ? (s.duration = f.fx.speeds[s.duration])
                  : (s.duration = f.fx.speeds._default)),
            (s.queue == null || s.queue === !0) && (s.queue = "fx"),
            (s.old = s.complete),
            (s.complete = function () {
              $(s.old) && s.old.call(this), s.queue && f.dequeue(this, s.queue);
            }),
            s
          );
        }),
        f.fn.extend({
          fadeTo: function (t, i, a, s) {
            return this.filter($t)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: i }, t, a, s);
          },
          animate: function (t, i, a, s) {
            var l = f.isEmptyObject(t),
              c = f.speed(i, a, s),
              p = function () {
                var w = qn(this, f.extend({}, t), c);
                (l || te.get(this, "finish")) && w.stop(!0);
              };
            return (
              (p.finish = p),
              l || c.queue === !1 ? this.each(p) : this.queue(c.queue, p)
            );
          },
          stop: function (t, i, a) {
            var s = function (l) {
              var c = l.stop;
              delete l.stop, c(a);
            };
            return (
              typeof t != "string" && ((a = i), (i = t), (t = void 0)),
              i && this.queue(t || "fx", []),
              this.each(function () {
                var l = !0,
                  c = t != null && t + "queueHooks",
                  p = f.timers,
                  w = te.get(this);
                if (c) w[c] && w[c].stop && s(w[c]);
                else for (c in w) w[c] && w[c].stop && Da.test(c) && s(w[c]);
                for (c = p.length; c--; )
                  p[c].elem === this &&
                    (t == null || p[c].queue === t) &&
                    (p[c].anim.stop(a), (l = !1), p.splice(c, 1));
                (l || !a) && f.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              t !== !1 && (t = t || "fx"),
              this.each(function () {
                var i,
                  a = te.get(this),
                  s = a[t + "queue"],
                  l = a[t + "queueHooks"],
                  c = f.timers,
                  p = s ? s.length : 0;
                for (
                  a.finish = !0,
                    f.queue(this, t, []),
                    l && l.stop && l.stop.call(this, !0),
                    i = c.length;
                  i--;

                )
                  c[i].elem === this &&
                    c[i].queue === t &&
                    (c[i].anim.stop(!0), c.splice(i, 1));
                for (i = 0; i < p; i++)
                  s[i] && s[i].finish && s[i].finish.call(this);
                delete a.finish;
              })
            );
          },
        }),
        f.each(["toggle", "show", "hide"], function (t, i) {
          var a = f.fn[i];
          f.fn[i] = function (s, l, c) {
            return s == null || typeof s == "boolean"
              ? a.apply(this, arguments)
              : this.animate(jr(i, !0), s, l, c);
          };
        }),
        f.each(
          {
            slideDown: jr("show"),
            slideUp: jr("hide"),
            slideToggle: jr("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, i) {
            f.fn[t] = function (a, s, l) {
              return this.animate(i, a, s, l);
            };
          }
        ),
        (f.timers = []),
        (f.fx.tick = function () {
          var t,
            i = 0,
            a = f.timers;
          for (Rt = Date.now(); i < a.length; i++)
            (t = a[i]), !t() && a[i] === t && a.splice(i--, 1);
          a.length || f.fx.stop(), (Rt = void 0);
        }),
        (f.fx.timer = function (t) {
          f.timers.push(t), f.fx.start();
        }),
        (f.fx.interval = 13),
        (f.fx.start = function () {
          Xt || ((Xt = !0), Qt());
        }),
        (f.fx.stop = function () {
          Xt = null;
        }),
        (f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (f.fn.delay = function (t, i) {
          return (
            (t = (f.fx && f.fx.speeds[t]) || t),
            (i = i || "fx"),
            this.queue(i, function (a, s) {
              var l = h.setTimeout(a, t);
              s.stop = function () {
                h.clearTimeout(l);
              };
            })
          );
        }),
        (function () {
          var t = ne.createElement("input"),
            i = ne.createElement("select"),
            a = i.appendChild(ne.createElement("option"));
          (t.type = "checkbox"),
            (ee.checkOn = t.value !== ""),
            (ee.optSelected = a.selected),
            (t = ne.createElement("input")),
            (t.value = "t"),
            (t.type = "radio"),
            (ee.radioValue = t.value === "t");
        })();
      var Si,
        Dt = f.expr.attrHandle;
      f.fn.extend({
        attr: function (t, i) {
          return Xn(this, f.attr, t, i, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            f.removeAttr(this, t);
          });
        },
      }),
        f.extend({
          attr: function (t, i, a) {
            var s,
              l,
              c = t.nodeType;
            if (!(c === 3 || c === 8 || c === 2)) {
              if (typeof t.getAttribute > "u") return f.prop(t, i, a);
              if (
                ((c !== 1 || !f.isXMLDoc(t)) &&
                  (l =
                    f.attrHooks[i.toLowerCase()] ||
                    (f.expr.match.bool.test(i) ? Si : void 0)),
                a !== void 0)
              ) {
                if (a === null) {
                  f.removeAttr(t, i);
                  return;
                }
                return l && "set" in l && (s = l.set(t, a, i)) !== void 0
                  ? s
                  : (t.setAttribute(i, a + ""), a);
              }
              return l && "get" in l && (s = l.get(t, i)) !== null
                ? s
                : ((s = f.find.attr(t, i)), s ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (t, i) {
                if (!ee.radioValue && i === "radio" && j(t, "input")) {
                  var a = t.value;
                  return t.setAttribute("type", i), a && (t.value = a), i;
                }
              },
            },
          },
          removeAttr: function (t, i) {
            var a,
              s = 0,
              l = i && i.match(Zn);
            if (l && t.nodeType === 1)
              for (; (a = l[s++]); ) t.removeAttribute(a);
          },
        }),
        (Si = {
          set: function (t, i, a) {
            return i === !1 ? f.removeAttr(t, a) : t.setAttribute(a, a), a;
          },
        }),
        f.each(f.expr.match.bool.source.match(/\w+/g), function (t, i) {
          var a = Dt[i] || f.find.attr;
          Dt[i] = function (s, l, c) {
            var p,
              w,
              x = l.toLowerCase();
            return (
              c ||
                ((w = Dt[x]),
                (Dt[x] = p),
                (p = a(s, l, c) != null ? x : null),
                (Dt[x] = w)),
              p
            );
          };
        });
      var Ei = /^(?:input|select|textarea|button)$/i,
        er = /^(?:a|area)$/i;
      f.fn.extend({
        prop: function (t, i) {
          return Xn(this, f.prop, t, i, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[f.propFix[t] || t];
          });
        },
      }),
        f.extend({
          prop: function (t, i, a) {
            var s,
              l,
              c = t.nodeType;
            if (!(c === 3 || c === 8 || c === 2))
              return (
                (c !== 1 || !f.isXMLDoc(t)) &&
                  ((i = f.propFix[i] || i), (l = f.propHooks[i])),
                a !== void 0
                  ? l && "set" in l && (s = l.set(t, a, i)) !== void 0
                    ? s
                    : (t[i] = a)
                  : l && "get" in l && (s = l.get(t, i)) !== null
                  ? s
                  : t[i]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var i = f.find.attr(t, "tabindex");
                return i
                  ? parseInt(i, 10)
                  : Ei.test(t.nodeName) || (er.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        ee.optSelected ||
          (f.propHooks.selected = {
            get: function (t) {
              var i = t.parentNode;
              return i && i.parentNode && i.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var i = t.parentNode;
              i &&
                (i.selectedIndex, i.parentNode && i.parentNode.selectedIndex);
            },
          }),
        f.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            f.propFix[this.toLowerCase()] = this;
          }
        );
      function bt(t) {
        var i = t.match(Zn) || [];
        return i.join(" ");
      }
      function xt(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function Ti(t) {
        return Array.isArray(t)
          ? t
          : typeof t == "string"
          ? t.match(Zn) || []
          : [];
      }
      f.fn.extend({
        addClass: function (t) {
          var i, a, s, l, c, p;
          return $(t)
            ? this.each(function (w) {
                f(this).addClass(t.call(this, w, xt(this)));
              })
            : ((i = Ti(t)),
              i.length
                ? this.each(function () {
                    if (
                      ((s = xt(this)),
                      (a = this.nodeType === 1 && " " + bt(s) + " "),
                      a)
                    ) {
                      for (c = 0; c < i.length; c++)
                        (l = i[c]),
                          a.indexOf(" " + l + " ") < 0 && (a += l + " ");
                      (p = bt(a)), s !== p && this.setAttribute("class", p);
                    }
                  })
                : this);
        },
        removeClass: function (t) {
          var i, a, s, l, c, p;
          return $(t)
            ? this.each(function (w) {
                f(this).removeClass(t.call(this, w, xt(this)));
              })
            : arguments.length
            ? ((i = Ti(t)),
              i.length
                ? this.each(function () {
                    if (
                      ((s = xt(this)),
                      (a = this.nodeType === 1 && " " + bt(s) + " "),
                      a)
                    ) {
                      for (c = 0; c < i.length; c++)
                        for (l = i[c]; a.indexOf(" " + l + " ") > -1; )
                          a = a.replace(" " + l + " ", " ");
                      (p = bt(a)), s !== p && this.setAttribute("class", p);
                    }
                  })
                : this)
            : this.attr("class", "");
        },
        toggleClass: function (t, i) {
          var a,
            s,
            l,
            c,
            p = typeof t,
            w = p === "string" || Array.isArray(t);
          return $(t)
            ? this.each(function (x) {
                f(this).toggleClass(t.call(this, x, xt(this), i), i);
              })
            : typeof i == "boolean" && w
            ? i
              ? this.addClass(t)
              : this.removeClass(t)
            : ((a = Ti(t)),
              this.each(function () {
                if (w)
                  for (c = f(this), l = 0; l < a.length; l++)
                    (s = a[l]),
                      c.hasClass(s) ? c.removeClass(s) : c.addClass(s);
                else
                  (t === void 0 || p === "boolean") &&
                    ((s = xt(this)),
                    s && te.set(this, "__className__", s),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        s || t === !1 ? "" : te.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (t) {
          var i,
            a,
            s = 0;
          for (i = " " + t + " "; (a = this[s++]); )
            if (a.nodeType === 1 && (" " + bt(xt(a)) + " ").indexOf(i) > -1)
              return !0;
          return !1;
        },
      });
      var Oa = /\r/g;
      f.fn.extend({
        val: function (t) {
          var i,
            a,
            s,
            l = this[0];
          return arguments.length
            ? ((s = $(t)),
              this.each(function (c) {
                var p;
                this.nodeType === 1 &&
                  (s ? (p = t.call(this, c, f(this).val())) : (p = t),
                  p == null
                    ? (p = "")
                    : typeof p == "number"
                    ? (p += "")
                    : Array.isArray(p) &&
                      (p = f.map(p, function (w) {
                        return w == null ? "" : w + "";
                      })),
                  (i =
                    f.valHooks[this.type] ||
                    f.valHooks[this.nodeName.toLowerCase()]),
                  (!i || !("set" in i) || i.set(this, p, "value") === void 0) &&
                    (this.value = p));
              }))
            : l
            ? ((i = f.valHooks[l.type] || f.valHooks[l.nodeName.toLowerCase()]),
              i && "get" in i && (a = i.get(l, "value")) !== void 0
                ? a
                : ((a = l.value),
                  typeof a == "string" ? a.replace(Oa, "") : a ?? ""))
            : void 0;
        },
      }),
        f.extend({
          valHooks: {
            option: {
              get: function (t) {
                var i = f.find.attr(t, "value");
                return i ?? bt(f.text(t));
              },
            },
            select: {
              get: function (t) {
                var i,
                  a,
                  s,
                  l = t.options,
                  c = t.selectedIndex,
                  p = t.type === "select-one",
                  w = p ? null : [],
                  x = p ? c + 1 : l.length;
                for (c < 0 ? (s = x) : (s = p ? c : 0); s < x; s++)
                  if (
                    ((a = l[s]),
                    (a.selected || s === c) &&
                      !a.disabled &&
                      (!a.parentNode.disabled || !j(a.parentNode, "optgroup")))
                  ) {
                    if (((i = f(a).val()), p)) return i;
                    w.push(i);
                  }
                return w;
              },
              set: function (t, i) {
                for (
                  var a, s, l = t.options, c = f.makeArray(i), p = l.length;
                  p--;

                )
                  (s = l[p]),
                    (s.selected =
                      f.inArray(f.valHooks.option.get(s), c) > -1) && (a = !0);
                return a || (t.selectedIndex = -1), c;
              },
            },
          },
        }),
        f.each(["radio", "checkbox"], function () {
          (f.valHooks[this] = {
            set: function (t, i) {
              if (Array.isArray(i))
                return (t.checked = f.inArray(f(t).val(), i) > -1);
            },
          }),
            ee.checkOn ||
              (f.valHooks[this].get = function (t) {
                return t.getAttribute("value") === null ? "on" : t.value;
              });
        });
      var nr = h.location,
        Ci = { guid: Date.now() },
        $r = /\?/;
      f.parseXML = function (t) {
        var i, a;
        if (!t || typeof t != "string") return null;
        try {
          i = new h.DOMParser().parseFromString(t, "text/xml");
        } catch {}
        return (
          (a = i && i.getElementsByTagName("parsererror")[0]),
          (!i || a) &&
            f.error(
              "Invalid XML: " +
                (a
                  ? f.map(a.childNodes, function (s) {
                      return s.textContent;
                    }).join(`
`)
                  : t)
            ),
          i
        );
      };
      var ka = /^(?:focusinfocus|focusoutblur)$/,
        Ha = function (t) {
          t.stopPropagation();
        };
      f.extend(f.event, {
        trigger: function (t, i, a, s) {
          var l,
            c,
            p,
            w,
            x,
            L,
            O,
            k,
            D = [a || ne],
            q = me.call(t, "type") ? t.type : t,
            Z = me.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((c = k = p = a = a || ne),
            !(a.nodeType === 3 || a.nodeType === 8) &&
              !ka.test(q + f.event.triggered) &&
              (q.indexOf(".") > -1 &&
                ((Z = q.split(".")), (q = Z.shift()), Z.sort()),
              (x = q.indexOf(":") < 0 && "on" + q),
              (t = t[f.expando]
                ? t
                : new f.Event(q, typeof t == "object" && t)),
              (t.isTrigger = s ? 2 : 3),
              (t.namespace = Z.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + Z.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = a),
              (i = i == null ? [t] : f.makeArray(i, [t])),
              (O = f.event.special[q] || {}),
              !(!s && O.trigger && O.trigger.apply(a, i) === !1)))
          ) {
            if (!s && !O.noBubble && !Ie(a)) {
              for (
                w = O.delegateType || q, ka.test(w + q) || (c = c.parentNode);
                c;
                c = c.parentNode
              )
                D.push(c), (p = c);
              p === (a.ownerDocument || ne) &&
                D.push(p.defaultView || p.parentWindow || h);
            }
            for (l = 0; (c = D[l++]) && !t.isPropagationStopped(); )
              (k = c),
                (t.type = l > 1 ? w : O.bindType || q),
                (L =
                  (te.get(c, "events") || Object.create(null))[t.type] &&
                  te.get(c, "handle")),
                L && L.apply(c, i),
                (L = x && c[x]),
                L &&
                  L.apply &&
                  vt(c) &&
                  ((t.result = L.apply(c, i)),
                  t.result === !1 && t.preventDefault());
            return (
              (t.type = q),
              !s &&
                !t.isDefaultPrevented() &&
                (!O._default || O._default.apply(D.pop(), i) === !1) &&
                vt(a) &&
                x &&
                $(a[q]) &&
                !Ie(a) &&
                ((p = a[x]),
                p && (a[x] = null),
                (f.event.triggered = q),
                t.isPropagationStopped() && k.addEventListener(q, Ha),
                a[q](),
                t.isPropagationStopped() && k.removeEventListener(q, Ha),
                (f.event.triggered = void 0),
                p && (a[x] = p)),
              t.result
            );
          }
        },
        simulate: function (t, i, a) {
          var s = f.extend(new f.Event(), a, { type: t, isSimulated: !0 });
          f.event.trigger(s, null, i);
        },
      }),
        f.fn.extend({
          trigger: function (t, i) {
            return this.each(function () {
              f.event.trigger(t, i, this);
            });
          },
          triggerHandler: function (t, i) {
            var a = this[0];
            if (a) return f.event.trigger(t, i, a, !0);
          },
        });
      var Yu = /\[\]$/,
        Ni = /\r?\n/g,
        ju = /^(?:submit|button|image|reset|file)$/i,
        $u = /^(?:input|select|textarea|keygen)/i;
      function Li(t, i, a, s) {
        var l;
        if (Array.isArray(i))
          f.each(i, function (c, p) {
            a || Yu.test(t)
              ? s(t, p)
              : Li(
                  t + "[" + (typeof p == "object" && p != null ? c : "") + "]",
                  p,
                  a,
                  s
                );
          });
        else if (!a && an(i) === "object")
          for (l in i) Li(t + "[" + l + "]", i[l], a, s);
        else s(t, i);
      }
      (f.param = function (t, i) {
        var a,
          s = [],
          l = function (c, p) {
            var w = $(p) ? p() : p;
            s[s.length] =
              encodeURIComponent(c) + "=" + encodeURIComponent(w ?? "");
          };
        if (t == null) return "";
        if (Array.isArray(t) || (t.jquery && !f.isPlainObject(t)))
          f.each(t, function () {
            l(this.name, this.value);
          });
        else for (a in t) Li(a, t[a], i, l);
        return s.join("&");
      }),
        f.fn.extend({
          serialize: function () {
            return f.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = f.prop(this, "elements");
              return t ? f.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !f(this).is(":disabled") &&
                  $u.test(this.nodeName) &&
                  !ju.test(t) &&
                  (this.checked || !Vt.test(t))
                );
              })
              .map(function (t, i) {
                var a = f(this).val();
                return a == null
                  ? null
                  : Array.isArray(a)
                  ? f.map(a, function (s) {
                      return {
                        name: i.name,
                        value: s.replace(
                          Ni,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: i.name,
                      value: a.replace(
                        Ni,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var Vu = /%20/g,
        Ii = /#.*$/,
        Ju = /([?&])_=[^&]*/,
        Zu = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xu = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qu = /^(?:GET|HEAD)$/,
        eo = /^\/\//,
        Be = {},
        Pe = {},
        Ba = "*/".concat("*"),
        Mi = ne.createElement("a");
      Mi.href = nr.href;
      function Fa(t) {
        return function (i, a) {
          typeof i != "string" && ((a = i), (i = "*"));
          var s,
            l = 0,
            c = i.toLowerCase().match(Zn) || [];
          if ($(a))
            for (; (s = c[l++]); )
              s[0] === "+"
                ? ((s = s.slice(1) || "*"), (t[s] = t[s] || []).unshift(a))
                : (t[s] = t[s] || []).push(a);
        };
      }
      function Wa(t, i, a, s) {
        var l = {},
          c = t === Pe;
        function p(w) {
          var x;
          return (
            (l[w] = !0),
            f.each(t[w] || [], function (L, O) {
              var k = O(i, a, s);
              if (typeof k == "string" && !c && !l[k])
                return i.dataTypes.unshift(k), p(k), !1;
              if (c) return !(x = k);
            }),
            x
          );
        }
        return p(i.dataTypes[0]) || (!l["*"] && p("*"));
      }
      function Ri(t, i) {
        var a,
          s,
          l = f.ajaxSettings.flatOptions || {};
        for (a in i) i[a] !== void 0 && ((l[a] ? t : s || (s = {}))[a] = i[a]);
        return s && f.extend(!0, t, s), t;
      }
      function no(t, i, a) {
        for (var s, l, c, p, w = t.contents, x = t.dataTypes; x[0] === "*"; )
          x.shift(),
            s === void 0 &&
              (s = t.mimeType || i.getResponseHeader("Content-Type"));
        if (s) {
          for (l in w)
            if (w[l] && w[l].test(s)) {
              x.unshift(l);
              break;
            }
        }
        if (x[0] in a) c = x[0];
        else {
          for (l in a) {
            if (!x[0] || t.converters[l + " " + x[0]]) {
              c = l;
              break;
            }
            p || (p = l);
          }
          c = c || p;
        }
        if (c) return c !== x[0] && x.unshift(c), a[c];
      }
      function Ua(t, i, a, s) {
        var l,
          c,
          p,
          w,
          x,
          L = {},
          O = t.dataTypes.slice();
        if (O[1]) for (p in t.converters) L[p.toLowerCase()] = t.converters[p];
        for (c = O.shift(); c; )
          if (
            (t.responseFields[c] && (a[t.responseFields[c]] = i),
            !x && s && t.dataFilter && (i = t.dataFilter(i, t.dataType)),
            (x = c),
            (c = O.shift()),
            c)
          ) {
            if (c === "*") c = x;
            else if (x !== "*" && x !== c) {
              if (((p = L[x + " " + c] || L["* " + c]), !p)) {
                for (l in L)
                  if (
                    ((w = l.split(" ")),
                    w[1] === c &&
                      ((p = L[x + " " + w[0]] || L["* " + w[0]]), p))
                  ) {
                    p === !0
                      ? (p = L[l])
                      : L[l] !== !0 && ((c = w[0]), O.unshift(w[1]));
                    break;
                  }
              }
              if (p !== !0)
                if (p && t.throws) i = p(i);
                else
                  try {
                    i = p(i);
                  } catch (k) {
                    return {
                      state: "parsererror",
                      error: p ? k : "No conversion from " + x + " to " + c,
                    };
                  }
            }
          }
        return { state: "success", data: i };
      }
      f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: nr.href,
          type: "GET",
          isLocal: Xu.test(nr.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ba,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": f.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, i) {
          return i ? Ri(Ri(t, f.ajaxSettings), i) : Ri(f.ajaxSettings, t);
        },
        ajaxPrefilter: Fa(Be),
        ajaxTransport: Fa(Pe),
        ajax: function (t, i) {
          typeof t == "object" && ((i = t), (t = void 0)), (i = i || {});
          var a,
            s,
            l,
            c,
            p,
            w,
            x,
            L,
            O,
            k,
            D = f.ajaxSetup({}, i),
            q = D.context || D,
            Z = D.context && (q.nodeType || q.jquery) ? f(q) : f.event,
            pe = f.Deferred(),
            he = f.Callbacks("once memory"),
            en = D.statusCode || {},
            Ge = {},
            Qn = {},
            et = "canceled",
            we = {
              readyState: 0,
              getResponseHeader: function (Se) {
                var He;
                if (x) {
                  if (!c)
                    for (c = {}; (He = Zu.exec(l)); )
                      c[He[1].toLowerCase() + " "] = (
                        c[He[1].toLowerCase() + " "] || []
                      ).concat(He[2]);
                  He = c[Se.toLowerCase() + " "];
                }
                return He == null ? null : He.join(", ");
              },
              getAllResponseHeaders: function () {
                return x ? l : null;
              },
              setRequestHeader: function (Se, He) {
                return (
                  x == null &&
                    ((Se = Qn[Se.toLowerCase()] = Qn[Se.toLowerCase()] || Se),
                    (Ge[Se] = He)),
                  this
                );
              },
              overrideMimeType: function (Se) {
                return x == null && (D.mimeType = Se), this;
              },
              statusCode: function (Se) {
                var He;
                if (Se)
                  if (x) we.always(Se[we.status]);
                  else for (He in Se) en[He] = [en[He], Se[He]];
                return this;
              },
              abort: function (Se) {
                var He = Se || et;
                return a && a.abort(He), _t(0, He), this;
              },
            };
          if (
            (pe.promise(we),
            (D.url = ((t || D.url || nr.href) + "").replace(
              eo,
              nr.protocol + "//"
            )),
            (D.type = i.method || i.type || D.method || D.type),
            (D.dataTypes = (D.dataType || "*").toLowerCase().match(Zn) || [""]),
            D.crossDomain == null)
          ) {
            w = ne.createElement("a");
            try {
              (w.href = D.url),
                (w.href = w.href),
                (D.crossDomain =
                  Mi.protocol + "//" + Mi.host != w.protocol + "//" + w.host);
            } catch {
              D.crossDomain = !0;
            }
          }
          if (
            (D.data &&
              D.processData &&
              typeof D.data != "string" &&
              (D.data = f.param(D.data, D.traditional)),
            Wa(Be, D, i, we),
            x)
          )
            return we;
          (L = f.event && D.global),
            L && f.active++ === 0 && f.event.trigger("ajaxStart"),
            (D.type = D.type.toUpperCase()),
            (D.hasContent = !Qu.test(D.type)),
            (s = D.url.replace(Ii, "")),
            D.hasContent
              ? D.data &&
                D.processData &&
                (D.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (D.data = D.data.replace(Vu, "+"))
              : ((k = D.url.slice(s.length)),
                D.data &&
                  (D.processData || typeof D.data == "string") &&
                  ((s += ($r.test(s) ? "&" : "?") + D.data), delete D.data),
                D.cache === !1 &&
                  ((s = s.replace(Ju, "$1")),
                  (k = ($r.test(s) ? "&" : "?") + "_=" + Ci.guid++ + k)),
                (D.url = s + k)),
            D.ifModified &&
              (f.lastModified[s] &&
                we.setRequestHeader("If-Modified-Since", f.lastModified[s]),
              f.etag[s] && we.setRequestHeader("If-None-Match", f.etag[s])),
            ((D.data && D.hasContent && D.contentType !== !1) ||
              i.contentType) &&
              we.setRequestHeader("Content-Type", D.contentType),
            we.setRequestHeader(
              "Accept",
              D.dataTypes[0] && D.accepts[D.dataTypes[0]]
                ? D.accepts[D.dataTypes[0]] +
                    (D.dataTypes[0] !== "*" ? ", " + Ba + "; q=0.01" : "")
                : D.accepts["*"]
            );
          for (O in D.headers) we.setRequestHeader(O, D.headers[O]);
          if (D.beforeSend && (D.beforeSend.call(q, we, D) === !1 || x))
            return we.abort();
          if (
            ((et = "abort"),
            he.add(D.complete),
            we.done(D.success),
            we.fail(D.error),
            (a = Wa(Pe, D, i, we)),
            !a)
          )
            _t(-1, "No Transport");
          else {
            if (((we.readyState = 1), L && Z.trigger("ajaxSend", [we, D]), x))
              return we;
            D.async &&
              D.timeout > 0 &&
              (p = h.setTimeout(function () {
                we.abort("timeout");
              }, D.timeout));
            try {
              (x = !1), a.send(Ge, _t);
            } catch (Se) {
              if (x) throw Se;
              _t(-1, Se);
            }
          }
          function _t(Se, He, xr, Jr) {
            var zn,
              Pt,
              Rn,
              ct,
              wt,
              vn = He;
            x ||
              ((x = !0),
              p && h.clearTimeout(p),
              (a = void 0),
              (l = Jr || ""),
              (we.readyState = Se > 0 ? 4 : 0),
              (zn = (Se >= 200 && Se < 300) || Se === 304),
              xr && (ct = no(D, we, xr)),
              !zn &&
                f.inArray("script", D.dataTypes) > -1 &&
                f.inArray("json", D.dataTypes) < 0 &&
                (D.converters["text script"] = function () {}),
              (ct = Ua(D, ct, we, zn)),
              zn
                ? (D.ifModified &&
                    ((wt = we.getResponseHeader("Last-Modified")),
                    wt && (f.lastModified[s] = wt),
                    (wt = we.getResponseHeader("etag")),
                    wt && (f.etag[s] = wt)),
                  Se === 204 || D.type === "HEAD"
                    ? (vn = "nocontent")
                    : Se === 304
                    ? (vn = "notmodified")
                    : ((vn = ct.state),
                      (Pt = ct.data),
                      (Rn = ct.error),
                      (zn = !Rn)))
                : ((Rn = vn),
                  (Se || !vn) && ((vn = "error"), Se < 0 && (Se = 0))),
              (we.status = Se),
              (we.statusText = (He || vn) + ""),
              zn
                ? pe.resolveWith(q, [Pt, vn, we])
                : pe.rejectWith(q, [we, vn, Rn]),
              we.statusCode(en),
              (en = void 0),
              L &&
                Z.trigger(zn ? "ajaxSuccess" : "ajaxError", [
                  we,
                  D,
                  zn ? Pt : Rn,
                ]),
              he.fireWith(q, [we, vn]),
              L &&
                (Z.trigger("ajaxComplete", [we, D]),
                --f.active || f.event.trigger("ajaxStop")));
          }
          return we;
        },
        getJSON: function (t, i, a) {
          return f.get(t, i, a, "json");
        },
        getScript: function (t, i) {
          return f.get(t, void 0, i, "script");
        },
      }),
        f.each(["get", "post"], function (t, i) {
          f[i] = function (a, s, l, c) {
            return (
              $(s) && ((c = c || l), (l = s), (s = void 0)),
              f.ajax(
                f.extend(
                  { url: a, type: i, dataType: c, data: s, success: l },
                  f.isPlainObject(a) && a
                )
              )
            );
          };
        }),
        f.ajaxPrefilter(function (t) {
          var i;
          for (i in t.headers)
            i.toLowerCase() === "content-type" &&
              (t.contentType = t.headers[i] || "");
        }),
        (f._evalUrl = function (t, i, a) {
          return f.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (s) {
              f.globalEval(s, i, a);
            },
          });
        }),
        f.fn.extend({
          wrapAll: function (t) {
            var i;
            return (
              this[0] &&
                ($(t) && (t = t.call(this[0])),
                (i = f(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && i.insertBefore(this[0]),
                i
                  .map(function () {
                    for (var a = this; a.firstElementChild; )
                      a = a.firstElementChild;
                    return a;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return $(t)
              ? this.each(function (i) {
                  f(this).wrapInner(t.call(this, i));
                })
              : this.each(function () {
                  var i = f(this),
                    a = i.contents();
                  a.length ? a.wrapAll(t) : i.append(t);
                });
          },
          wrap: function (t) {
            var i = $(t);
            return this.each(function (a) {
              f(this).wrapAll(i ? t.call(this, a) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  f(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (f.expr.pseudos.hidden = function (t) {
          return !f.expr.pseudos.visible(t);
        }),
        (f.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (f.ajaxSettings.xhr = function () {
          try {
            return new h.XMLHttpRequest();
          } catch {}
        });
      var to = { 0: 200, 1223: 204 },
        Ue = f.ajaxSettings.xhr();
      (ee.cors = !!Ue && "withCredentials" in Ue),
        (ee.ajax = Ue = !!Ue),
        f.ajaxTransport(function (t) {
          var i, a;
          if (ee.cors || (Ue && !t.crossDomain))
            return {
              send: function (s, l) {
                var c,
                  p = t.xhr();
                if (
                  (p.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (c in t.xhrFields) p[c] = t.xhrFields[c];
                t.mimeType &&
                  p.overrideMimeType &&
                  p.overrideMimeType(t.mimeType),
                  !t.crossDomain &&
                    !s["X-Requested-With"] &&
                    (s["X-Requested-With"] = "XMLHttpRequest");
                for (c in s) p.setRequestHeader(c, s[c]);
                (i = function (w) {
                  return function () {
                    i &&
                      ((i =
                        a =
                        p.onload =
                        p.onerror =
                        p.onabort =
                        p.ontimeout =
                        p.onreadystatechange =
                          null),
                      w === "abort"
                        ? p.abort()
                        : w === "error"
                        ? typeof p.status != "number"
                          ? l(0, "error")
                          : l(p.status, p.statusText)
                        : l(
                            to[p.status] || p.status,
                            p.statusText,
                            (p.responseType || "text") !== "text" ||
                              typeof p.responseText != "string"
                              ? { binary: p.response }
                              : { text: p.responseText },
                            p.getAllResponseHeaders()
                          ));
                  };
                }),
                  (p.onload = i()),
                  (a = p.onerror = p.ontimeout = i("error")),
                  p.onabort !== void 0
                    ? (p.onabort = a)
                    : (p.onreadystatechange = function () {
                        p.readyState === 4 &&
                          h.setTimeout(function () {
                            i && a();
                          });
                      }),
                  (i = i("abort"));
                try {
                  p.send((t.hasContent && t.data) || null);
                } catch (w) {
                  if (i) throw w;
                }
              },
              abort: function () {
                i && i();
              },
            };
        }),
        f.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        f.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return f.globalEval(t), t;
            },
          },
        }),
        f.ajaxPrefilter("script", function (t) {
          t.cache === void 0 && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        f.ajaxTransport("script", function (t) {
          if (t.crossDomain || t.scriptAttrs) {
            var i, a;
            return {
              send: function (s, l) {
                (i = f("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (a = function (c) {
                      i.remove(),
                        (a = null),
                        c && l(c.type === "error" ? 404 : 200, c.type);
                    })
                  )),
                  ne.head.appendChild(i[0]);
              },
              abort: function () {
                a && a();
              },
            };
          }
        });
      var Vr = [],
        lt = /(=)\?(?=&|$)|\?\?/;
      f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Vr.pop() || f.expando + "_" + Ci.guid++;
          return (this[t] = !0), t;
        },
      }),
        f.ajaxPrefilter("json jsonp", function (t, i, a) {
          var s,
            l,
            c,
            p =
              t.jsonp !== !1 &&
              (lt.test(t.url)
                ? "url"
                : typeof t.data == "string" &&
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  lt.test(t.data) &&
                  "data");
          if (p || t.dataTypes[0] === "jsonp")
            return (
              (s = t.jsonpCallback =
                $(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              p
                ? (t[p] = t[p].replace(lt, "$1" + s))
                : t.jsonp !== !1 &&
                  (t.url += ($r.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
              (t.converters["script json"] = function () {
                return c || f.error(s + " was not called"), c[0];
              }),
              (t.dataTypes[0] = "json"),
              (l = h[s]),
              (h[s] = function () {
                c = arguments;
              }),
              a.always(function () {
                l === void 0 ? f(h).removeProp(s) : (h[s] = l),
                  t[s] && ((t.jsonpCallback = i.jsonpCallback), Vr.push(s)),
                  c && $(l) && l(c[0]),
                  (c = l = void 0);
              }),
              "script"
            );
        }),
        (ee.createHTMLDocument = (function () {
          var t = ne.implementation.createHTMLDocument("").body;
          return (
            (t.innerHTML = "<form></form><form></form>"),
            t.childNodes.length === 2
          );
        })()),
        (f.parseHTML = function (t, i, a) {
          if (typeof t != "string") return [];
          typeof i == "boolean" && ((a = i), (i = !1));
          var s, l, c;
          return (
            i ||
              (ee.createHTMLDocument
                ? ((i = ne.implementation.createHTMLDocument("")),
                  (s = i.createElement("base")),
                  (s.href = ne.location.href),
                  i.head.appendChild(s))
                : (i = ne)),
            (l = da.exec(t)),
            (c = !a && []),
            l
              ? [i.createElement(l[1])]
              : ((l = Aa([t], i, c)),
                c && c.length && f(c).remove(),
                f.merge([], l.childNodes))
          );
        }),
        (f.fn.load = function (t, i, a) {
          var s,
            l,
            c,
            p = this,
            w = t.indexOf(" ");
          return (
            w > -1 && ((s = bt(t.slice(w))), (t = t.slice(0, w))),
            $(i)
              ? ((a = i), (i = void 0))
              : i && typeof i == "object" && (l = "POST"),
            p.length > 0 &&
              f
                .ajax({ url: t, type: l || "GET", dataType: "html", data: i })
                .done(function (x) {
                  (c = arguments),
                    p.html(s ? f("<div>").append(f.parseHTML(x)).find(s) : x);
                })
                .always(
                  a &&
                    function (x, L) {
                      p.each(function () {
                        a.apply(this, c || [x.responseText, L, x]);
                      });
                    }
                ),
            this
          );
        }),
        (f.expr.pseudos.animated = function (t) {
          return f.grep(f.timers, function (i) {
            return t === i.elem;
          }).length;
        }),
        (f.offset = {
          setOffset: function (t, i, a) {
            var s,
              l,
              c,
              p,
              w,
              x,
              L,
              O = f.css(t, "position"),
              k = f(t),
              D = {};
            O === "static" && (t.style.position = "relative"),
              (w = k.offset()),
              (c = f.css(t, "top")),
              (x = f.css(t, "left")),
              (L =
                (O === "absolute" || O === "fixed") &&
                (c + x).indexOf("auto") > -1),
              L
                ? ((s = k.position()), (p = s.top), (l = s.left))
                : ((p = parseFloat(c) || 0), (l = parseFloat(x) || 0)),
              $(i) && (i = i.call(t, a, f.extend({}, w))),
              i.top != null && (D.top = i.top - w.top + p),
              i.left != null && (D.left = i.left - w.left + l),
              "using" in i ? i.using.call(t, D) : k.css(D);
          },
        }),
        f.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return t === void 0
                ? this
                : this.each(function (l) {
                    f.offset.setOffset(this, t, l);
                  });
            var i,
              a,
              s = this[0];
            if (s)
              return s.getClientRects().length
                ? ((i = s.getBoundingClientRect()),
                  (a = s.ownerDocument.defaultView),
                  { top: i.top + a.pageYOffset, left: i.left + a.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var t,
                i,
                a,
                s = this[0],
                l = { top: 0, left: 0 };
              if (f.css(s, "position") === "fixed")
                i = s.getBoundingClientRect();
              else {
                for (
                  i = this.offset(),
                    a = s.ownerDocument,
                    t = s.offsetParent || a.documentElement;
                  t &&
                  (t === a.body || t === a.documentElement) &&
                  f.css(t, "position") === "static";

                )
                  t = t.parentNode;
                t &&
                  t !== s &&
                  t.nodeType === 1 &&
                  ((l = f(t).offset()),
                  (l.top += f.css(t, "borderTopWidth", !0)),
                  (l.left += f.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: i.top - l.top - f.css(s, "marginTop", !0),
                left: i.left - l.left - f.css(s, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && f.css(t, "position") === "static";

              )
                t = t.offsetParent;
              return t || ft;
            });
          },
        }),
        f.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, i) {
            var a = i === "pageYOffset";
            f.fn[t] = function (s) {
              return Xn(
                this,
                function (l, c, p) {
                  var w;
                  if (
                    (Ie(l) ? (w = l) : l.nodeType === 9 && (w = l.defaultView),
                    p === void 0)
                  )
                    return w ? w[i] : l[c];
                  w
                    ? w.scrollTo(a ? w.pageXOffset : p, a ? p : w.pageYOffset)
                    : (l[c] = p);
                },
                t,
                s,
                arguments.length
              );
            };
          }
        ),
        f.each(["top", "left"], function (t, i) {
          f.cssHooks[i] = br(ee.pixelPosition, function (a, s) {
            if (s)
              return (s = Ar(a, i)), vi.test(s) ? f(a).position()[i] + "px" : s;
          });
        }),
        f.each({ Height: "height", Width: "width" }, function (t, i) {
          f.each(
            { padding: "inner" + t, content: i, "": "outer" + t },
            function (a, s) {
              f.fn[s] = function (l, c) {
                var p = arguments.length && (a || typeof l != "boolean"),
                  w = a || (l === !0 || c === !0 ? "margin" : "border");
                return Xn(
                  this,
                  function (x, L, O) {
                    var k;
                    return Ie(x)
                      ? s.indexOf("outer") === 0
                        ? x["inner" + t]
                        : x.document.documentElement["client" + t]
                      : x.nodeType === 9
                      ? ((k = x.documentElement),
                        Math.max(
                          x.body["scroll" + t],
                          k["scroll" + t],
                          x.body["offset" + t],
                          k["offset" + t],
                          k["client" + t]
                        ))
                      : O === void 0
                      ? f.css(x, L, w)
                      : f.style(x, L, O, w);
                  },
                  i,
                  p ? l : void 0,
                  p
                );
              };
            }
          );
        }),
        f.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, i) {
            f.fn[i] = function (a) {
              return this.on(i, a);
            };
          }
        ),
        f.fn.extend({
          bind: function (t, i, a) {
            return this.on(t, null, i, a);
          },
          unbind: function (t, i) {
            return this.off(t, null, i);
          },
          delegate: function (t, i, a, s) {
            return this.on(i, t, a, s);
          },
          undelegate: function (t, i, a) {
            return arguments.length === 1
              ? this.off(t, "**")
              : this.off(i, t || "**", a);
          },
          hover: function (t, i) {
            return this.on("mouseenter", t).on("mouseleave", i || t);
          },
        }),
        f.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, i) {
            f.fn[i] = function (a, s) {
              return arguments.length > 0
                ? this.on(i, null, a, s)
                : this.trigger(i);
            };
          }
        );
      var Ga = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (f.proxy = function (t, i) {
        var a, s, l;
        if ((typeof i == "string" && ((a = t[i]), (i = t), (t = a)), !!$(t)))
          return (
            (s = M.call(arguments, 2)),
            (l = function () {
              return t.apply(i || this, s.concat(M.call(arguments)));
            }),
            (l.guid = t.guid = t.guid || f.guid++),
            l
          );
      }),
        (f.holdReady = function (t) {
          t ? f.readyWait++ : f.ready(!0);
        }),
        (f.isArray = Array.isArray),
        (f.parseJSON = JSON.parse),
        (f.nodeName = j),
        (f.isFunction = $),
        (f.isWindow = Ie),
        (f.camelCase = pn),
        (f.type = an),
        (f.now = Date.now),
        (f.isNumeric = function (t) {
          var i = f.type(t);
          return (
            (i === "number" || i === "string") && !isNaN(t - parseFloat(t))
          );
        }),
        (f.trim = function (t) {
          return t == null ? "" : (t + "").replace(Ga, "$1");
        });
      var Di = h.jQuery,
        Mn = h.$;
      return (
        (f.noConflict = function (t) {
          return (
            h.$ === f && (h.$ = Mn), t && h.jQuery === f && (h.jQuery = Di), f
          );
        }),
        typeof u > "u" && (h.jQuery = h.$ = f),
        f
      );
    });
  })(ws);
  var _c = ws.exports;
  const Fn = Fe(_c);
  class Ss {
    constructor() {
      Ye(this, "fetchDataEvent");
      Ye(this, "pageDataObservable");
      (this.pageDataObservable = this.observablePageData()),
        this.pageDataObservable.subscribe(this.onPageDataFetched.bind(this));
    }
    onPageDataFetched(h) {
      this.fetchDataEvent = h;
    }
    onVideoChange(h) {
      this.pageDataObservable.subscribe(h),
        this.fetchDataEvent && h(this.fetchDataEvent);
    }
    getFetchDataEvent() {
      return this.fetchDataEvent;
    }
  }
  class wc extends Ss {
    constructor() {
      super(),
        ot.isYouTubeMobile() &&
          lr(document, "yt-navigate-finish").subscribe(() => {
            window.location.href.includes("youtube.com") &&
            window.location.href.includes("/watch")
              ? Fn(window.playBtn).css("display", "block")
              : Fn(window.playBtn).css("display", "none");
          });
    }
    observablePageData() {
      return lr(document, "yt-page-data-fetched").pipe(
        ua((h) => h),
        bs((h) => h.detail.pageData.url.startsWith("/watch?")),
        xs()
      );
    }
    getBestCaption() {
      var u, A;
      const h =
        (A =
          (u = this.fetchDataEvent) == null
            ? void 0
            : u.detail.pageData.playerResponse.captions) == null
          ? void 0
          : A.playerCaptionsTracklistRenderer.captionTracks;
      return h ? this.selectBestCaption(h) : null;
    }
    getVideoId() {
      var h;
      return (h = this.fetchDataEvent) == null
        ? void 0
        : h.detail.pageData.playerResponse.videoDetails.videoId;
    }
    getVideoTitle() {
      var h;
      return (h = this.fetchDataEvent) == null
        ? void 0
        : h.detail.pageData.playerResponse.videoDetails.title;
    }
    getCurrentDocument() {
      var h;
      return (h = this.fetchDataEvent) == null ? void 0 : h.srcElement;
    }
    isPrivate() {
      if (!this.fetchDataEvent)
        throw new Error("failed to obtain video metadata");
      return this.fetchDataEvent.detail.pageData.playerResponse.videoDetails
        .isPrivate;
    }
    selectBestCaption(h) {
      let u = Ru.groupBy(h, (A) => A.kind === "asr");
      return Ru.isArray(u[hi.False]) && u[hi.False].length > 0
        ? this.selectCaptionByLanguage(u[hi.False])
        : this.selectCaptionByLanguage(u[hi.True]);
    }
    selectCaptionByLanguage(h) {
      if (h.length === 1) return h[0];
      {
        let u = Ru.find(h, (A) => this.matchFromLanguage(A.languageCode));
        return u || h[0];
      }
    }
    matchFromLanguage(h) {
      return h === hn.fromLanguage
        ? !0
        : h.length > hn.fromLanguage.length
        ? h.startsWith(hn.fromLanguage)
        : hn.fromLanguage.startsWith(h);
    }
  }
  class Du {
    static getQueryParam(h, u) {
      return new URLSearchParams(new URL(h).search).get(u);
    }
    static checkFormat(h, u) {
      return h.test(u);
    }
    static isVideoDetailsPage() {
      if (window.location.href.includes("youtube.com"))
        return window.location.href.includes("/watch?");
      if (window.location.href.includes("udemy.com")) {
        const h = /^\/course\/.+\/learn\/lecture\/\d+$/,
          u = new URL(window.location.href).pathname;
        return h.test(u);
      }
      return !1;
    }
  }
  class Pu {
    static addPlayBtn(h, u) {
      let A = Bn.runtime.getURL("/images/default_play_btn.png"),
        N = `
                <div class="${u}" id="${this.PLAY_BTN_ID}">
                    <div class="youtube-dubbing-container">
                        <div class="youtube-dubbing-logo">
                            <img src="${A}" alt="youtube-dubbing">
                        </div>
                    </div>
                </div>
            `;
      return h.append(N).children(`#${this.PLAY_BTN_ID}`);
    }
    static changeToGreen() {
      let h = Bn.runtime.getURL("/images/green_play_btn.png");
      ot.isMobileSite()
        ? Fn(window.playBtn).prop("src", h)
        : Fn(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", h);
    }
    static changeToYellow() {
      let h = Bn.runtime.getURL("/images/yellow_play_btn.png");
      ot.isMobileSite()
        ? Fn(window.playBtn).prop("src", h)
        : Fn(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", h);
    }
    static changeToRed() {
      let h = Bn.runtime.getURL("/images/red_play_btn.png");
      ot.isMobileSite()
        ? Fn(window.playBtn).prop("src", h)
        : Fn(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", h);
    }
    static changeToDefault() {
      let h = Bn.runtime.getURL("/images/default_play_btn.png");
      ot.isMobileSite()
        ? Fn(window.playBtn).prop("src", h)
        : Fn(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", h);
    }
    static exists() {
      return Fn(`#${this.PLAY_BTN_ID}`).length > 0;
    }
  }
  Ye(Pu, "PLAY_BTN_ID", "youtube-dubbing-button");
  class Sc extends Ss {
    constructor() {
      super();
      Ye(this, "fetchDataEventMap", new Map());
      Ye(this, "udemyNavigateFinishObservable");
      Ye(this, "initPlayer", !1);
      (this.udemyNavigateFinishObservable = lr(
        document,
        "udemy-navigate-finish"
      ).pipe(bs((u) => Du.isVideoDetailsPage()))),
        ot.isMobile() &&
          lr(document, "udemy-navigate-finish").subscribe(() => {
            window.location.href.includes("udemy.com") &&
            Du.checkFormat(
              /course\/([^/]+)\/learn\/lecture\/(\d+)/,
              new URL(window.location.href).pathname
            )
              ? Fn(window.playBtn).css("display", "block")
              : Fn(window.playBtn).css("display", "none");
          });
    }
    onPageDataFetched(u) {
      this.fetchDataEventMap.set(u.detail.data.id, u);
    }
    onVideoChange(u) {
      const A = this;
      this.udemyNavigateFinishObservable.subscribe({
        next(M) {
          console.log("navigate start"),
            (A.initPlayer = !1),
            !Pu.exists() && !A.initPlayer && ((A.initPlayer = !0), u(void 0)),
            console.log("navigate end");
        },
      }),
        this.pageDataObservable.subscribe({
          next(M) {
            console.log(
              "page data start, metadata.initPlayer == " + A.initPlayer
            ),
              !Pu.exists() && !A.initPlayer && ((A.initPlayer = !0), u(M)),
              console.log("page data end");
          },
        });
      const N = this.getFetchDataEvent();
      N && !this.initPlayer && ((this.initPlayer = !0), u(N));
    }
    getFetchDataEvent() {
      const u = this.getLectureId();
      return this.fetchDataEventMap.get(u);
    }
    getLectureId() {
      const u = new URL(window.location.href).pathname,
        A = u.substring(u.lastIndexOf("/") + 1);
      return Number.parseInt(A);
    }
    observablePageData() {
      return lr(document, "udemy-page-data-fetched").pipe(
        ua((u) => u),
        xs()
      );
    }
    getBestCaption() {
      var A;
      const u =
        ((A = this.getFetchDataEvent()) == null
          ? void 0
          : A.detail.data.asset.captions) || [];
      for (let N of u)
        if (
          N.locale_id === hn.fromLanguage ||
          N.locale_id.replace("_", "-") === hn.fromLanguage
        )
          return N;
      if (u.length === 1) return u[0];
      if (u.length > 1) {
        for (let N of u) if (N.source !== "auto") return N;
        return u[0];
      }
      return null;
    }
    getVideoId() {
      const u = this.getFetchDataEvent();
      if (u) return "udemy_" + u.detail.courseId + "_" + u.detail.data.id;
    }
    getVideoTitle() {
      return new URL(window.location.href).pathname.split("/")[2];
    }
  }
  async function Es(g) {
    (
      await El(g, {
        name: "youtube-dubbing-ui",
        anchor: document.documentElement,
        append: "last",
        position: "inline",
        onMount(u) {
          const A = document.createElement("div");
          (A.style.display = "flex"),
            (A.style.flexDirection = "column"),
            (A.style.justifyContent = "center"),
            (A.style.alignItems = "flex-end"),
            (A.style.position = "absolute"),
            (A.style.top = "0"),
            (A.style.bottom = "0"),
            (A.style.right = "0"),
            (A.style.left = "0"),
            (A.style.pointerEvents = "none");
          const N = document.createElement("img");
          (N.style.zIndex = "2147483647"),
            (N.id = "youtube-dubbing-mobile"),
            (N.style.maxWidth = "100%"),
            (N.style.maxHeight = "100%"),
            (N.src = Bn.runtime.getURL("/images/default_play_btn.png")),
            (N.hidden = !0),
            (N.style.pointerEvents = "auto"),
            Du.isVideoDetailsPage()
              ? (N.style.display = "block")
              : (N.style.display = "none"),
            A.append(N),
            (window.playBtn = N),
            N.addEventListener("click", () => {
              var M;
              (M = window == null ? void 0 : window.videoTransDuck) != null &&
                M.player &&
                window.videoTransDuck.player.onPlayBtnClick();
            }),
            u.append(A);
        },
      })
    ).mount();
  }
  const Ec = {
    matches: ["*://*/*"],
    cssInjectionMode: "ui",
    runAt: "document_start",
    async main(g) {
      window.videoTransDuck ?? (window.videoTransDuck = {});
      function h(u) {
        let A = document.documentElement,
          N = document.createElement("script");
        N.setAttribute("type", "text/javascript"),
          N.setAttribute("src", u),
          A.appendChild(N);
      }
      window.location.href.includes("youtube.com")
        ? (ot.isYouTubeMobile() &&
            (h(Bn.runtime.getURL("/injectedScript.js")), await Es(g)),
          (window.videoTransDuck.metadata = new wc()))
        : window.location.href.includes("udemy.com") &&
          (h(Bn.runtime.getURL("/injectedScript.js")),
          (window.videoTransDuck.metadata = new Sc()),
          ot.isMobile() && (await Es(g)));
    },
  };
  function sa(g, ...h) {}
  var Tc = {
    debug: (...g) => sa(console.debug, ...g),
    log: (...g) => sa(console.log, ...g),
    warn: (...g) => sa(console.warn, ...g),
    error: (...g) => sa(console.error, ...g),
  };
  (async () => {
    try {
      const { main: g, ...h } = Ec,
        u = new Sl("medata", h);
      await g(u);
    } catch (g) {
      Tc.error('The content script "medata" crashed on startup!', g);
    }
  })();
})();
