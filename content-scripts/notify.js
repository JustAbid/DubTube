var ki = Object.defineProperty;
var Ni = (te, ee, re) =>
  ee in te
    ? ki(te, ee, { enumerable: !0, configurable: !0, writable: !0, value: re })
    : (te[ee] = re);
var vn = (te, ee, re) => (Ni(te, typeof ee != "symbol" ? ee + "" : ee, re), re),
  xn = (te, ee, re) => {
    if (!ee.has(te)) throw TypeError("Cannot " + re);
  };
var Ct = (te, ee, re) => (
    xn(te, ee, "read from private field"), re ? re.call(te) : ee.get(te)
  ),
  ft = (te, ee, re) => {
    if (ee.has(te))
      throw TypeError("Cannot add the same private member more than once");
    ee instanceof WeakSet ? ee.add(te) : ee.set(te, re);
  },
  ur = (te, ee, re, St) => (
    xn(te, ee, "write to private field"),
    St ? St.call(te, re) : ee.set(te, re),
    re
  );
var bn = (te, ee, re) => (xn(te, ee, "access private method"), re);
(function () {
  "use strict";
  var Je, Ve, jt, Ke, Pt, Lt, fr, Mt, lr;
  var te =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function ee(T) {
    return T &&
      T.__esModule &&
      Object.prototype.hasOwnProperty.call(T, "default")
      ? T.default
      : T;
  }
  var re = { exports: {} };
  (function (T, x) {
    (function (E, k) {
      k(T);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : te,
      function (E) {
        var k, U;
        if (
          !(
            (U = (k = globalThis.chrome) == null ? void 0 : k.runtime) !=
              null && U.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const K = "The message port closed before a response was received.",
            ve = (ie) => {
              const Q = {
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
              if (Object.keys(Q).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class ue extends WeakMap {
                constructor(w, V = void 0) {
                  super(V), (this.createItem = w);
                }
                get(w) {
                  return (
                    this.has(w) || this.set(w, this.createItem(w)), super.get(w)
                  );
                }
              }
              const de = (j) =>
                  j && typeof j == "object" && typeof j.then == "function",
                be =
                  (j, w) =>
                  (...V) => {
                    ie.runtime.lastError
                      ? j.reject(new Error(ie.runtime.lastError.message))
                      : w.singleCallbackArg ||
                        (V.length <= 1 && w.singleCallbackArg !== !1)
                      ? j.resolve(V[0])
                      : j.resolve(V);
                  },
                Ie = (j) => (j == 1 ? "argument" : "arguments"),
                Vt = (j, w) =>
                  function (G, ...se) {
                    if (se.length < w.minArgs)
                      throw new Error(
                        `Expected at least ${w.minArgs} ${Ie(
                          w.minArgs
                        )} for ${j}(), got ${se.length}`
                      );
                    if (se.length > w.maxArgs)
                      throw new Error(
                        `Expected at most ${w.maxArgs} ${Ie(
                          w.maxArgs
                        )} for ${j}(), got ${se.length}`
                      );
                    return new Promise((H, ae) => {
                      if (w.fallbackToNoCallback)
                        try {
                          G[j](...se, be({ resolve: H, reject: ae }, w));
                        } catch (F) {
                          console.warn(
                            `${j} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            F
                          ),
                            G[j](...se),
                            (w.fallbackToNoCallback = !1),
                            (w.noCallback = !0),
                            H();
                        }
                      else
                        w.noCallback
                          ? (G[j](...se), H())
                          : G[j](...se, be({ resolve: H, reject: ae }, w));
                    });
                  },
                R = (j, w, V) =>
                  new Proxy(w, {
                    apply(G, se, H) {
                      return V.call(se, j, ...H);
                    },
                  });
              let O = Function.call.bind(Object.prototype.hasOwnProperty);
              const Se = (j, w = {}, V = {}) => {
                  let G = Object.create(null),
                    se = {
                      has(ae, F) {
                        return F in j || F in G;
                      },
                      get(ae, F, pe) {
                        if (F in G) return G[F];
                        if (!(F in j)) return;
                        let J = j[F];
                        if (typeof J == "function")
                          if (typeof w[F] == "function") J = R(j, j[F], w[F]);
                          else if (O(V, F)) {
                            let Ne = Vt(F, V[F]);
                            J = R(j, j[F], Ne);
                          } else J = J.bind(j);
                        else if (
                          typeof J == "object" &&
                          J !== null &&
                          (O(w, F) || O(V, F))
                        )
                          J = Se(J, w[F], V[F]);
                        else if (O(V, "*")) J = Se(J, w[F], V["*"]);
                        else
                          return (
                            Object.defineProperty(G, F, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return j[F];
                              },
                              set(Ne) {
                                j[F] = Ne;
                              },
                            }),
                            J
                          );
                        return (G[F] = J), J;
                      },
                      set(ae, F, pe, J) {
                        return F in G ? (G[F] = pe) : (j[F] = pe), !0;
                      },
                      defineProperty(ae, F, pe) {
                        return Reflect.defineProperty(G, F, pe);
                      },
                      deleteProperty(ae, F) {
                        return Reflect.deleteProperty(G, F);
                      },
                    },
                    H = Object.create(j);
                  return new Proxy(H, se);
                },
                M = (j) => ({
                  addListener(w, V, ...G) {
                    w.addListener(j.get(V), ...G);
                  },
                  hasListener(w, V) {
                    return w.hasListener(j.get(V));
                  },
                  removeListener(w, V) {
                    w.removeListener(j.get(V));
                  },
                }),
                zt = new ue((j) =>
                  typeof j != "function"
                    ? j
                    : function (V) {
                        const G = Se(
                          V,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        j(G);
                      }
                ),
                ct = new ue((j) =>
                  typeof j != "function"
                    ? j
                    : function (V, G, se) {
                        let H = !1,
                          ae,
                          F = new Promise((Ae) => {
                            ae = function (xe) {
                              (H = !0), Ae(xe);
                            };
                          }),
                          pe;
                        try {
                          pe = j(V, G, ae);
                        } catch (Ae) {
                          pe = Promise.reject(Ae);
                        }
                        const J = pe !== !0 && de(pe);
                        if (pe !== !0 && !J && !H) return !1;
                        const Ne = (Ae) => {
                          Ae.then(
                            (xe) => {
                              se(xe);
                            },
                            (xe) => {
                              let Ze;
                              xe &&
                              (xe instanceof Error ||
                                typeof xe.message == "string")
                                ? (Ze = xe.message)
                                : (Ze = "An unexpected error occurred"),
                                se({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: Ze,
                                });
                            }
                          ).catch((xe) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              xe
                            );
                          });
                        };
                        return Ne(J ? pe : F), !0;
                      }
                ),
                We = ({ reject: j, resolve: w }, V) => {
                  ie.runtime.lastError
                    ? ie.runtime.lastError.message === K
                      ? w()
                      : j(new Error(ie.runtime.lastError.message))
                    : V && V.__mozWebExtensionPolyfillReject__
                    ? j(new Error(V.message))
                    : w(V);
                },
                dt = (j, w, V, ...G) => {
                  if (G.length < w.minArgs)
                    throw new Error(
                      `Expected at least ${w.minArgs} ${Ie(
                        w.minArgs
                      )} for ${j}(), got ${G.length}`
                    );
                  if (G.length > w.maxArgs)
                    throw new Error(
                      `Expected at most ${w.maxArgs} ${Ie(
                        w.maxArgs
                      )} for ${j}(), got ${G.length}`
                    );
                  return new Promise((se, H) => {
                    const ae = We.bind(null, { resolve: se, reject: H });
                    G.push(ae), V.sendMessage(...G);
                  });
                },
                Xt = {
                  devtools: { network: { onRequestFinished: M(zt) } },
                  runtime: {
                    onMessage: M(ct),
                    onMessageExternal: M(ct),
                    sendMessage: dt.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: dt.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                i = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (Q.privacy = {
                  network: { "*": i },
                  services: { "*": i },
                  websites: { "*": i },
                }),
                Se(ie, Xt, Q)
              );
            };
          E.exports = ve(chrome);
        } else E.exports = globalThis.browser;
      }
    );
  })(re);
  var St = re.exports,
    Et = ee(St),
    cr = (T, x, E) =>
      new Promise((k, U) => {
        var K = (Q) => {
            try {
              ie(E.next(Q));
            } catch (ue) {
              U(ue);
            }
          },
          ve = (Q) => {
            try {
              ie(E.throw(Q));
            } catch (ue) {
              U(ue);
            }
          },
          ie = (Q) =>
            Q.done ? k(Q.value) : Promise.resolve(Q.value).then(K, ve);
        ie((E = E.apply(T, x)).next());
      });
  function dr(T) {
    return cr(this, null, function* () {
      const { name: x, mode: E = "closed", css: k, isolateEvents: U = !1 } = T,
        K = document.createElement(x),
        ve = K.attachShadow({ mode: E }),
        ie = document.createElement("html"),
        Q = document.createElement("body"),
        ue = document.createElement("head");
      if (k) {
        const de = document.createElement("style");
        "url" in k
          ? (de.textContent = yield fetch(k.url).then((be) => be.text()))
          : (de.textContent = k.textContent),
          ue.appendChild(de);
      }
      return (
        ie.appendChild(ue),
        ie.appendChild(Q),
        ve.appendChild(ie),
        U &&
          (Array.isArray(U) ? U : ["keydown", "keyup", "keypress"]).forEach(
            (be) => {
              Q.addEventListener(be, (Ie) => Ie.stopPropagation());
            }
          ),
        { parentElement: K, shadow: ve, isolatedElement: Q }
      );
    });
  }
  var pr = {
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
    ENTRYPOINT: "notify",
  };
  function kt(T, ...x) {}
  var An = {
      debug: (...T) => kt(console.debug, ...T),
      log: (...T) => kt(console.log, ...T),
      warn: (...T) => kt(console.warn, ...T),
      error: (...T) => kt(console.error, ...T),
    },
    hr =
      ((Je = class extends Event {
        constructor(x, E) {
          super(Je.EVENT_NAME, {}), (this.newUrl = x), (this.oldUrl = E);
        }
      }),
      vn(Je, "EVENT_NAME", wn("wxt:locationchange")),
      Je);
  function wn(T) {
    const x = typeof pr > "u" ? "build" : "notify";
    return `${Et.runtime.id}:${x}:${T}`;
  }
  function gr(T) {
    let x, E;
    return {
      run() {
        x == null &&
          ((E = new URL(location.href)),
          (x = T.setInterval(() => {
            let k = new URL(location.href);
            k.href !== E.href && (window.dispatchEvent(new hr(k, E)), (E = k));
          }, 1e3)));
      },
    };
  }
  var mr =
    ((Ve = class {
      constructor(x, E) {
        ft(this, Lt);
        ft(this, Mt);
        ft(this, jt, window.self === window.top);
        ft(this, Ke, void 0);
        ft(this, Pt, gr(this));
        (this.contentScriptName = x),
          (this.options = E),
          ur(this, Ke, new AbortController()),
          Ct(this, jt) && bn(this, Lt, fr).call(this),
          this.setTimeout(() => {
            bn(this, Mt, lr).call(this);
          });
      }
      get signal() {
        return Ct(this, Ke).signal;
      }
      abort(x) {
        return Ct(this, Ke).abort(x);
      }
      get isInvalid() {
        return (
          Et.runtime.id == null && this.notifyInvalidated(), this.signal.aborted
        );
      }
      get isValid() {
        return !this.isInvalid;
      }
      onInvalidated(x) {
        return (
          this.signal.addEventListener("abort", x),
          () => this.signal.removeEventListener("abort", x)
        );
      }
      block() {
        return new Promise(() => {});
      }
      setInterval(x, E) {
        const k = setInterval(() => {
          this.isValid && x();
        }, E);
        return this.onInvalidated(() => clearInterval(k)), k;
      }
      setTimeout(x, E) {
        const k = setTimeout(() => {
          this.isValid && x();
        }, E);
        return this.onInvalidated(() => clearTimeout(k)), k;
      }
      requestAnimationFrame(x) {
        const E = requestAnimationFrame((...k) => {
          this.isValid && x(...k);
        });
        return this.onInvalidated(() => cancelAnimationFrame(E)), E;
      }
      requestIdleCallback(x, E) {
        const k = requestIdleCallback((...U) => {
          this.signal.aborted || x(...U);
        }, E);
        return this.onInvalidated(() => cancelIdleCallback(k)), k;
      }
      addEventListener(x, E, k, U) {
        var K;
        E === "wxt:locationchange" && this.isValid && Ct(this, Pt).run(),
          (K = x.addEventListener) == null ||
            K.call(x, E.startsWith("wxt:") ? wn(E) : E, k, {
              ...U,
              signal: this.signal,
            });
      }
      notifyInvalidated() {
        this.abort("Content script context invalidated"),
          An.debug(
            `Content script "${this.contentScriptName}" context invalidated`
          );
      }
    }),
    (jt = new WeakMap()),
    (Ke = new WeakMap()),
    (Pt = new WeakMap()),
    (Lt = new WeakSet()),
    (fr = function () {
      window.postMessage(
        {
          event: Ve.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
        },
        "*"
      );
    }),
    (Mt = new WeakSet()),
    (lr = function () {
      const x = (E) => {
        var k, U;
        ((k = E.data) == null ? void 0 : k.type) ===
          Ve.SCRIPT_STARTED_MESSAGE_TYPE &&
          ((U = E.data) == null ? void 0 : U.contentScriptName) ===
            this.contentScriptName &&
          this.notifyInvalidated();
      };
      addEventListener("message", x),
        this.onInvalidated(() => removeEventListener("message", x));
    }),
    vn(Ve, "SCRIPT_STARTED_MESSAGE_TYPE", "wxt:content-script-started"),
    Ve);
  async function yr(T, x) {
    var ue;
    const E = [x.css ?? ""];
    if (((ue = T.options) == null ? void 0 : ue.cssInjectionMode) === "ui") {
      const de = await Ar();
      E.push(de.replaceAll(":root", ":host"));
    }
    const {
      isolatedElement: k,
      parentElement: U,
      shadow: K,
    } = await dr({
      name: x.name,
      css: {
        textContent: E.join(
          `
`
        ).trim(),
      },
      mode: x.mode ?? "open",
      isolateEvents: x.isolateEvents,
    });
    U.setAttribute("data-wxt-shadow-root", "");
    let ve;
    const ie = () => {
        br(U, x), vr(U, K.querySelector("html"), x), (ve = x.onMount(k, K, U));
      },
      Q = () => {
        var de;
        for (
          (de = x.onRemove) == null || de.call(x, ve), U.remove();
          k.lastChild;

        )
          k.removeChild(k.lastChild);
      };
    return (
      T.onInvalidated(Q),
      {
        shadow: K,
        shadowHost: U,
        uiContainer: k,
        mount: ie,
        remove: Q,
        mounted: ve,
      }
    );
  }
  function vr(T, x, E) {
    var k, U;
    E.position !== "inline" &&
      (E.zIndex != null && (T.style.zIndex = String(E.zIndex)),
      (T.style.overflow = "visible"),
      (T.style.position = "relative"),
      (T.style.width = "0"),
      (T.style.height = "0"),
      (T.style.display = "block"),
      x &&
        (E.position === "overlay"
          ? ((x.style.position = "absolute"),
            (k = E.alignment) != null && k.startsWith("bottom-")
              ? (x.style.bottom = "0")
              : (x.style.top = "0"),
            (U = E.alignment) != null && U.endsWith("-right")
              ? (x.style.right = "0")
              : (x.style.left = "0"))
          : ((x.style.position = "fixed"),
            (x.style.top = "0"),
            (x.style.bottom = "0"),
            (x.style.left = "0"),
            (x.style.right = "0"))));
  }
  function xr(T) {
    if (T.anchor == null) return document.body;
    let x = typeof T.anchor == "function" ? T.anchor() : T.anchor;
    return typeof x == "string"
      ? document.querySelector(x) ?? void 0
      : x ?? void 0;
  }
  function br(T, x) {
    var k, U;
    const E = xr(x);
    if (E == null)
      throw Error(
        "Failed to mount content script UI: could not find anchor element"
      );
    switch (x.append) {
      case void 0:
      case "last":
        E.append(T);
        break;
      case "first":
        E.prepend(T);
        break;
      case "replace":
        E.replaceWith(T);
        break;
      case "after":
        (k = E.parentElement) == null ||
          k.insertBefore(T, E.nextElementSibling);
        break;
      case "before":
        (U = E.parentElement) == null || U.insertBefore(T, E);
        break;
      default:
        x.append(E, T);
        break;
    }
  }
  async function Ar() {
    const T = Et.runtime.getURL("/content-scripts/notify.css");
    try {
      return await (await fetch(T)).text();
    } catch (x) {
      return (
        An.warn(
          `Failed to load styles @ ${T}. Did you forget to import the stylesheet in your entrypoint?`,
          x
        ),
        ""
      );
    }
  }
  function ji(T) {
    return T;
  }
  var Tn = { exports: {} };
  /*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   
   */ (function (T) {
    (function (x, E) {
      T.exports = x.document
        ? E(x, !0)
        : function (k) {
            if (!k.document)
              throw new Error("jQuery requires a window with a document");
            return E(k);
          };
    })(typeof window < "u" ? window : te, function (x, E) {
      var k = [],
        U = Object.getPrototypeOf,
        K = k.slice,
        ve = k.flat
          ? function (e) {
              return k.flat.call(e);
            }
          : function (e) {
              return k.concat.apply([], e);
            },
        ie = k.push,
        Q = k.indexOf,
        ue = {},
        de = ue.toString,
        be = ue.hasOwnProperty,
        Ie = be.toString,
        Vt = Ie.call(Object),
        R = {},
        O = function (t) {
          return (
            typeof t == "function" &&
            typeof t.nodeType != "number" &&
            typeof t.item != "function"
          );
        },
        Se = function (t) {
          return t != null && t === t.window;
        },
        M = x.document,
        zt = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function ct(e, t, n) {
        n = n || M;
        var r,
          s,
          o = n.createElement("script");
        if (((o.text = e), t))
          for (r in zt)
            (s = t[r] || (t.getAttribute && t.getAttribute(r))),
              s && o.setAttribute(r, s);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function We(e) {
        return e == null
          ? e + ""
          : typeof e == "object" || typeof e == "function"
          ? ue[de.call(e)] || "object"
          : typeof e;
      }
      var dt = "3.7.1",
        Xt = /HTML$/i,
        i = function (e, t) {
          return new i.fn.init(e, t);
        };
      (i.fn = i.prototype =
        {
          jquery: dt,
          constructor: i,
          length: 0,
          toArray: function () {
            return K.call(this);
          },
          get: function (e) {
            return e == null
              ? K.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = i.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return i.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              i.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(K.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              i.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              i.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ie,
          sort: k.sort,
          splice: k.splice,
        }),
        (i.extend = i.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              s,
              o,
              a = arguments[0] || {},
              l = 1,
              f = arguments.length,
              d = !1;
            for (
              typeof a == "boolean" && ((d = a), (a = arguments[l] || {}), l++),
                typeof a != "object" && !O(a) && (a = {}),
                l === f && ((a = this), l--);
              l < f;
              l++
            )
              if ((e = arguments[l]) != null)
                for (t in e)
                  (r = e[t]),
                    !(t === "__proto__" || a === r) &&
                      (d && r && (i.isPlainObject(r) || (s = Array.isArray(r)))
                        ? ((n = a[t]),
                          s && !Array.isArray(n)
                            ? (o = [])
                            : !s && !i.isPlainObject(n)
                            ? (o = {})
                            : (o = n),
                          (s = !1),
                          (a[t] = i.extend(d, o, r)))
                        : r !== void 0 && (a[t] = r));
            return a;
          }),
        i.extend({
          expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !e || de.call(e) !== "[object Object]"
              ? !1
              : ((t = U(e)),
                t
                  ? ((n = be.call(t, "constructor") && t.constructor),
                    typeof n == "function" && Ie.call(n) === Vt)
                  : !0);
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            ct(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (j(e))
              for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
            return e;
          },
          text: function (e) {
            var t,
              n = "",
              r = 0,
              s = e.nodeType;
            if (!s) for (; (t = e[r++]); ) n += i.text(t);
            return s === 1 || s === 11
              ? e.textContent
              : s === 9
              ? e.documentElement.textContent
              : s === 3 || s === 4
              ? e.nodeValue
              : n;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              e != null &&
                (j(Object(e))
                  ? i.merge(n, typeof e == "string" ? [e] : e)
                  : ie.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return t == null ? -1 : Q.call(t, e, n);
          },
          isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !Xt.test(t || (n && n.nodeName) || "HTML");
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, s = e.length; r < n; r++)
              e[s++] = t[r];
            return (e.length = s), e;
          },
          grep: function (e, t, n) {
            for (var r, s = [], o = 0, a = e.length, l = !n; o < a; o++)
              (r = !t(e[o], o)), r !== l && s.push(e[o]);
            return s;
          },
          map: function (e, t, n) {
            var r,
              s,
              o = 0,
              a = [];
            if (j(e))
              for (r = e.length; o < r; o++)
                (s = t(e[o], o, n)), s != null && a.push(s);
            else for (o in e) (s = t(e[o], o, n)), s != null && a.push(s);
            return ve(a);
          },
          guid: 1,
          support: R,
        }),
        typeof Symbol == "function" &&
          (i.fn[Symbol.iterator] = k[Symbol.iterator]),
        i.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            ue["[object " + t + "]"] = t.toLowerCase();
          }
        );
      function j(e) {
        var t = !!e && "length" in e && e.length,
          n = We(e);
        return O(e) || Se(e)
          ? !1
          : n === "array" ||
              t === 0 ||
              (typeof t == "number" && t > 0 && t - 1 in e);
      }
      function w(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var V = k.pop,
        G = k.sort,
        se = k.splice,
        H = "[\\x20\\t\\r\\n\\f]",
        ae = new RegExp(
          "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
          "g"
        );
      i.contains = function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !!(
            n &&
            n.nodeType === 1 &&
            (e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16)
          )
        );
      };
      var F = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function pe(e, t) {
        return t
          ? e === "\0"
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      i.escapeSelector = function (e) {
        return (e + "").replace(F, pe);
      };
      var J = M,
        Ne = ie;
      (function () {
        var e,
          t,
          n,
          r,
          s,
          o = Ne,
          a,
          l,
          f,
          d,
          m,
          v = i.expando,
          h = 0,
          b = 0,
          q = Wt(),
          z = Wt(),
          _ = Wt(),
          fe = Wt(),
          oe = function (u, c) {
            return u === c && (s = !0), 0;
          },
          Pe =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          Le =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            H +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          B =
            "\\[" +
            H +
            "*(" +
            Le +
            ")(?:" +
            H +
            "*([*^$|!~]?=)" +
            H +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Le +
            "))|)" +
            H +
            "*\\]",
          Ye =
            ":(" +
            Le +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            B +
            ")*)|.*)\\)|)",
          X = new RegExp(H + "+", "g"),
          ne = new RegExp("^" + H + "*," + H + "*"),
          At = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          cn = new RegExp(H + "|>"),
          Me = new RegExp(Ye),
          wt = new RegExp("^" + Le + "$"),
          Oe = {
            ID: new RegExp("^#(" + Le + ")"),
            CLASS: new RegExp("^\\.(" + Le + ")"),
            TAG: new RegExp("^(" + Le + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + Ye),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                H +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                H +
                "*(?:([+-]|)" +
                H +
                "*(\\d+)|))" +
                H +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + Pe + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                H +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                H +
                "*((?:-\\d)?\\d*)" +
                H +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          $e = /^(?:input|select|textarea|button)$/i,
          Be = /^h\d$/i,
          Te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          dn = /[+~]/,
          _e = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Fe = function (u, c) {
            var p = "0x" + u.slice(1) - 65536;
            return (
              c ||
              (p < 0
                ? String.fromCharCode(p + 65536)
                : String.fromCharCode((p >> 10) | 55296, (p & 1023) | 56320))
            );
          },
          bi = function () {
            Ue();
          },
          Ai = Bt(
            function (u) {
              return u.disabled === !0 && w(u, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        function wi() {
          try {
            return a.activeElement;
          } catch {}
        }
        try {
          o.apply((k = K.call(J.childNodes)), J.childNodes),
            k[J.childNodes.length].nodeType;
        } catch {
          o = {
            apply: function (c, p) {
              Ne.apply(c, K.call(p));
            },
            call: function (c) {
              Ne.apply(c, K.call(arguments, 1));
            },
          };
        }
        function Y(u, c, p, g) {
          var y,
            A,
            C,
            N,
            S,
            W,
            L,
            I = c && c.ownerDocument,
            $ = c ? c.nodeType : 9;
          if (
            ((p = p || []),
            typeof u != "string" || !u || ($ !== 1 && $ !== 9 && $ !== 11))
          )
            return p;
          if (!g && (Ue(c), (c = c || a), f)) {
            if ($ !== 11 && (S = Te.exec(u)))
              if ((y = S[1])) {
                if ($ === 9)
                  if ((C = c.getElementById(y))) {
                    if (C.id === y) return o.call(p, C), p;
                  } else return p;
                else if (
                  I &&
                  (C = I.getElementById(y)) &&
                  Y.contains(c, C) &&
                  C.id === y
                )
                  return o.call(p, C), p;
              } else {
                if (S[2]) return o.apply(p, c.getElementsByTagName(u)), p;
                if ((y = S[3]) && c.getElementsByClassName)
                  return o.apply(p, c.getElementsByClassName(y)), p;
              }
            if (!fe[u + " "] && (!d || !d.test(u))) {
              if (((L = u), (I = c), $ === 1 && (cn.test(u) || At.test(u)))) {
                for (
                  I = (dn.test(u) && pn(c.parentNode)) || c,
                    (I != c || !R.scope) &&
                      ((N = c.getAttribute("id"))
                        ? (N = i.escapeSelector(N))
                        : c.setAttribute("id", (N = v))),
                    W = Tt(u),
                    A = W.length;
                  A--;

                )
                  W[A] = (N ? "#" + N : ":scope") + " " + $t(W[A]);
                L = W.join(",");
              }
              try {
                return o.apply(p, I.querySelectorAll(L)), p;
              } catch {
                fe(u, !0);
              } finally {
                N === v && c.removeAttribute("id");
              }
            }
          }
          return ar(u.replace(ae, "$1"), c, p, g);
        }
        function Wt() {
          var u = [];
          function c(p, g) {
            return (
              u.push(p + " ") > t.cacheLength && delete c[u.shift()],
              (c[p + " "] = g)
            );
          }
          return c;
        }
        function ke(u) {
          return (u[v] = !0), u;
        }
        function at(u) {
          var c = a.createElement("fieldset");
          try {
            return !!u(c);
          } catch {
            return !1;
          } finally {
            c.parentNode && c.parentNode.removeChild(c), (c = null);
          }
        }
        function Ti(u) {
          return function (c) {
            return w(c, "input") && c.type === u;
          };
        }
        function Ci(u) {
          return function (c) {
            return (w(c, "input") || w(c, "button")) && c.type === u;
          };
        }
        function sr(u) {
          return function (c) {
            return "form" in c
              ? c.parentNode && c.disabled === !1
                ? "label" in c
                  ? "label" in c.parentNode
                    ? c.parentNode.disabled === u
                    : c.disabled === u
                  : c.isDisabled === u || (c.isDisabled !== !u && Ai(c) === u)
                : c.disabled === u
              : "label" in c
              ? c.disabled === u
              : !1;
          };
        }
        function Qe(u) {
          return ke(function (c) {
            return (
              (c = +c),
              ke(function (p, g) {
                for (var y, A = u([], p.length, c), C = A.length; C--; )
                  p[(y = A[C])] && (p[y] = !(g[y] = p[y]));
              })
            );
          });
        }
        function pn(u) {
          return u && typeof u.getElementsByTagName < "u" && u;
        }
        function Ue(u) {
          var c,
            p = u ? u.ownerDocument || u : J;
          return (
            p == a ||
              p.nodeType !== 9 ||
              !p.documentElement ||
              ((a = p),
              (l = a.documentElement),
              (f = !i.isXMLDoc(a)),
              (m = l.matches || l.webkitMatchesSelector || l.msMatchesSelector),
              l.msMatchesSelector &&
                J != a &&
                (c = a.defaultView) &&
                c.top !== c &&
                c.addEventListener("unload", bi),
              (R.getById = at(function (g) {
                return (
                  (l.appendChild(g).id = i.expando),
                  !a.getElementsByName || !a.getElementsByName(i.expando).length
                );
              })),
              (R.disconnectedMatch = at(function (g) {
                return m.call(g, "*");
              })),
              (R.scope = at(function () {
                return a.querySelectorAll(":scope");
              })),
              (R.cssHas = at(function () {
                try {
                  return a.querySelector(":has(*,:jqfake)"), !1;
                } catch {
                  return !0;
                }
              })),
              R.getById
                ? ((t.filter.ID = function (g) {
                    var y = g.replace(_e, Fe);
                    return function (A) {
                      return A.getAttribute("id") === y;
                    };
                  }),
                  (t.find.ID = function (g, y) {
                    if (typeof y.getElementById < "u" && f) {
                      var A = y.getElementById(g);
                      return A ? [A] : [];
                    }
                  }))
                : ((t.filter.ID = function (g) {
                    var y = g.replace(_e, Fe);
                    return function (A) {
                      var C =
                        typeof A.getAttributeNode < "u" &&
                        A.getAttributeNode("id");
                      return C && C.value === y;
                    };
                  }),
                  (t.find.ID = function (g, y) {
                    if (typeof y.getElementById < "u" && f) {
                      var A,
                        C,
                        N,
                        S = y.getElementById(g);
                      if (S) {
                        if (
                          ((A = S.getAttributeNode("id")), A && A.value === g)
                        )
                          return [S];
                        for (N = y.getElementsByName(g), C = 0; (S = N[C++]); )
                          if (
                            ((A = S.getAttributeNode("id")), A && A.value === g)
                          )
                            return [S];
                      }
                      return [];
                    }
                  })),
              (t.find.TAG = function (g, y) {
                return typeof y.getElementsByTagName < "u"
                  ? y.getElementsByTagName(g)
                  : y.querySelectorAll(g);
              }),
              (t.find.CLASS = function (g, y) {
                if (typeof y.getElementsByClassName < "u" && f)
                  return y.getElementsByClassName(g);
              }),
              (d = []),
              at(function (g) {
                var y;
                (l.appendChild(g).innerHTML =
                  "<a id='" +
                  v +
                  "' href='' disabled='disabled'></a><select id='" +
                  v +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  g.querySelectorAll("[selected]").length ||
                    d.push("\\[" + H + "*(?:value|" + Pe + ")"),
                  g.querySelectorAll("[id~=" + v + "-]").length || d.push("~="),
                  g.querySelectorAll("a#" + v + "+*").length ||
                    d.push(".#.+[+~]"),
                  g.querySelectorAll(":checked").length || d.push(":checked"),
                  (y = a.createElement("input")),
                  y.setAttribute("type", "hidden"),
                  g.appendChild(y).setAttribute("name", "D"),
                  (l.appendChild(g).disabled = !0),
                  g.querySelectorAll(":disabled").length !== 2 &&
                    d.push(":enabled", ":disabled"),
                  (y = a.createElement("input")),
                  y.setAttribute("name", ""),
                  g.appendChild(y),
                  g.querySelectorAll("[name='']").length ||
                    d.push("\\[" + H + "*name" + H + "*=" + H + `*(?:''|"")`);
              }),
              R.cssHas || d.push(":has"),
              (d = d.length && new RegExp(d.join("|"))),
              (oe = function (g, y) {
                if (g === y) return (s = !0), 0;
                var A = !g.compareDocumentPosition - !y.compareDocumentPosition;
                return (
                  A ||
                  ((A =
                    (g.ownerDocument || g) == (y.ownerDocument || y)
                      ? g.compareDocumentPosition(y)
                      : 1),
                  A & 1 ||
                  (!R.sortDetached && y.compareDocumentPosition(g) === A)
                    ? g === a || (g.ownerDocument == J && Y.contains(J, g))
                      ? -1
                      : y === a || (y.ownerDocument == J && Y.contains(J, y))
                      ? 1
                      : r
                      ? Q.call(r, g) - Q.call(r, y)
                      : 0
                    : A & 4
                    ? -1
                    : 1)
                );
              })),
            a
          );
        }
        (Y.matches = function (u, c) {
          return Y(u, null, null, c);
        }),
          (Y.matchesSelector = function (u, c) {
            if ((Ue(u), f && !fe[c + " "] && (!d || !d.test(c))))
              try {
                var p = m.call(u, c);
                if (
                  p ||
                  R.disconnectedMatch ||
                  (u.document && u.document.nodeType !== 11)
                )
                  return p;
              } catch {
                fe(c, !0);
              }
            return Y(c, a, null, [u]).length > 0;
          }),
          (Y.contains = function (u, c) {
            return (u.ownerDocument || u) != a && Ue(u), i.contains(u, c);
          }),
          (Y.attr = function (u, c) {
            (u.ownerDocument || u) != a && Ue(u);
            var p = t.attrHandle[c.toLowerCase()],
              g =
                p && be.call(t.attrHandle, c.toLowerCase())
                  ? p(u, c, !f)
                  : void 0;
            return g !== void 0 ? g : u.getAttribute(c);
          }),
          (Y.error = function (u) {
            throw new Error("Syntax error, unrecognized expression: " + u);
          }),
          (i.uniqueSort = function (u) {
            var c,
              p = [],
              g = 0,
              y = 0;
            if (
              ((s = !R.sortStable),
              (r = !R.sortStable && K.call(u, 0)),
              G.call(u, oe),
              s)
            ) {
              for (; (c = u[y++]); ) c === u[y] && (g = p.push(y));
              for (; g--; ) se.call(u, p[g], 1);
            }
            return (r = null), u;
          }),
          (i.fn.uniqueSort = function () {
            return this.pushStack(i.uniqueSort(K.apply(this)));
          }),
          (t = i.expr =
            {
              cacheLength: 50,
              createPseudo: ke,
              match: Oe,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (u) {
                  return (
                    (u[1] = u[1].replace(_e, Fe)),
                    (u[3] = (u[3] || u[4] || u[5] || "").replace(_e, Fe)),
                    u[2] === "~=" && (u[3] = " " + u[3] + " "),
                    u.slice(0, 4)
                  );
                },
                CHILD: function (u) {
                  return (
                    (u[1] = u[1].toLowerCase()),
                    u[1].slice(0, 3) === "nth"
                      ? (u[3] || Y.error(u[0]),
                        (u[4] = +(u[4]
                          ? u[5] + (u[6] || 1)
                          : 2 * (u[3] === "even" || u[3] === "odd"))),
                        (u[5] = +(u[7] + u[8] || u[3] === "odd")))
                      : u[3] && Y.error(u[0]),
                    u
                  );
                },
                PSEUDO: function (u) {
                  var c,
                    p = !u[6] && u[2];
                  return Oe.CHILD.test(u[0])
                    ? null
                    : (u[3]
                        ? (u[2] = u[4] || u[5] || "")
                        : p &&
                          Me.test(p) &&
                          (c = Tt(p, !0)) &&
                          (c = p.indexOf(")", p.length - c) - p.length) &&
                          ((u[0] = u[0].slice(0, c)), (u[2] = p.slice(0, c))),
                      u.slice(0, 3));
                },
              },
              filter: {
                TAG: function (u) {
                  var c = u.replace(_e, Fe).toLowerCase();
                  return u === "*"
                    ? function () {
                        return !0;
                      }
                    : function (p) {
                        return w(p, c);
                      };
                },
                CLASS: function (u) {
                  var c = q[u + " "];
                  return (
                    c ||
                    ((c = new RegExp("(^|" + H + ")" + u + "(" + H + "|$)")) &&
                      q(u, function (p) {
                        return c.test(
                          (typeof p.className == "string" && p.className) ||
                            (typeof p.getAttribute < "u" &&
                              p.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (u, c, p) {
                  return function (g) {
                    var y = Y.attr(g, u);
                    return y == null
                      ? c === "!="
                      : c
                      ? ((y += ""),
                        c === "="
                          ? y === p
                          : c === "!="
                          ? y !== p
                          : c === "^="
                          ? p && y.indexOf(p) === 0
                          : c === "*="
                          ? p && y.indexOf(p) > -1
                          : c === "$="
                          ? p && y.slice(-p.length) === p
                          : c === "~="
                          ? (" " + y.replace(X, " ") + " ").indexOf(p) > -1
                          : c === "|="
                          ? y === p || y.slice(0, p.length + 1) === p + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (u, c, p, g, y) {
                  var A = u.slice(0, 3) !== "nth",
                    C = u.slice(-4) !== "last",
                    N = c === "of-type";
                  return g === 1 && y === 0
                    ? function (S) {
                        return !!S.parentNode;
                      }
                    : function (S, W, L) {
                        var I,
                          $,
                          P,
                          Z,
                          ye,
                          le = A !== C ? "nextSibling" : "previousSibling",
                          Ce = S.parentNode,
                          qe = N && S.nodeName.toLowerCase(),
                          ut = !L && !N,
                          ce = !1;
                        if (Ce) {
                          if (A) {
                            for (; le; ) {
                              for (P = S; (P = P[le]); )
                                if (N ? w(P, qe) : P.nodeType === 1) return !1;
                              ye = le = u === "only" && !ye && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((ye = [C ? Ce.firstChild : Ce.lastChild]), C && ut)
                          ) {
                            for (
                              $ = Ce[v] || (Ce[v] = {}),
                                I = $[u] || [],
                                Z = I[0] === h && I[1],
                                ce = Z && I[2],
                                P = Z && Ce.childNodes[Z];
                              (P =
                                (++Z && P && P[le]) ||
                                (ce = Z = 0) ||
                                ye.pop());

                            )
                              if (P.nodeType === 1 && ++ce && P === S) {
                                $[u] = [h, Z, ce];
                                break;
                              }
                          } else if (
                            (ut &&
                              (($ = S[v] || (S[v] = {})),
                              (I = $[u] || []),
                              (Z = I[0] === h && I[1]),
                              (ce = Z)),
                            ce === !1)
                          )
                            for (
                              ;
                              (P =
                                (++Z && P && P[le]) ||
                                (ce = Z = 0) ||
                                ye.pop()) &&
                              !(
                                (N ? w(P, qe) : P.nodeType === 1) &&
                                ++ce &&
                                (ut &&
                                  (($ = P[v] || (P[v] = {})), ($[u] = [h, ce])),
                                P === S)
                              );

                            );
                          return (
                            (ce -= y), ce === g || (ce % g === 0 && ce / g >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (u, c) {
                  var p,
                    g =
                      t.pseudos[u] ||
                      t.setFilters[u.toLowerCase()] ||
                      Y.error("unsupported pseudo: " + u);
                  return g[v]
                    ? g(c)
                    : g.length > 1
                    ? ((p = [u, u, "", c]),
                      t.setFilters.hasOwnProperty(u.toLowerCase())
                        ? ke(function (y, A) {
                            for (var C, N = g(y, c), S = N.length; S--; )
                              (C = Q.call(y, N[S])), (y[C] = !(A[C] = N[S]));
                          })
                        : function (y) {
                            return g(y, 0, p);
                          })
                    : g;
                },
              },
              pseudos: {
                not: ke(function (u) {
                  var c = [],
                    p = [],
                    g = yn(u.replace(ae, "$1"));
                  return g[v]
                    ? ke(function (y, A, C, N) {
                        for (var S, W = g(y, null, N, []), L = y.length; L--; )
                          (S = W[L]) && (y[L] = !(A[L] = S));
                      })
                    : function (y, A, C) {
                        return (
                          (c[0] = y), g(c, null, C, p), (c[0] = null), !p.pop()
                        );
                      };
                }),
                has: ke(function (u) {
                  return function (c) {
                    return Y(u, c).length > 0;
                  };
                }),
                contains: ke(function (u) {
                  return (
                    (u = u.replace(_e, Fe)),
                    function (c) {
                      return (c.textContent || i.text(c)).indexOf(u) > -1;
                    }
                  );
                }),
                lang: ke(function (u) {
                  return (
                    wt.test(u || "") || Y.error("unsupported lang: " + u),
                    (u = u.replace(_e, Fe).toLowerCase()),
                    function (c) {
                      var p;
                      do
                        if (
                          (p = f
                            ? c.lang
                            : c.getAttribute("xml:lang") ||
                              c.getAttribute("lang"))
                        )
                          return (
                            (p = p.toLowerCase()),
                            p === u || p.indexOf(u + "-") === 0
                          );
                      while ((c = c.parentNode) && c.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (u) {
                  var c = x.location && x.location.hash;
                  return c && c.slice(1) === u.id;
                },
                root: function (u) {
                  return u === l;
                },
                focus: function (u) {
                  return (
                    u === wi() &&
                    a.hasFocus() &&
                    !!(u.type || u.href || ~u.tabIndex)
                  );
                },
                enabled: sr(!1),
                disabled: sr(!0),
                checked: function (u) {
                  return (
                    (w(u, "input") && !!u.checked) ||
                    (w(u, "option") && !!u.selected)
                  );
                },
                selected: function (u) {
                  return (
                    u.parentNode && u.parentNode.selectedIndex,
                    u.selected === !0
                  );
                },
                empty: function (u) {
                  for (u = u.firstChild; u; u = u.nextSibling)
                    if (u.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (u) {
                  return !t.pseudos.empty(u);
                },
                header: function (u) {
                  return Be.test(u.nodeName);
                },
                input: function (u) {
                  return $e.test(u.nodeName);
                },
                button: function (u) {
                  return (
                    (w(u, "input") && u.type === "button") || w(u, "button")
                  );
                },
                text: function (u) {
                  var c;
                  return (
                    w(u, "input") &&
                    u.type === "text" &&
                    ((c = u.getAttribute("type")) == null ||
                      c.toLowerCase() === "text")
                  );
                },
                first: Qe(function () {
                  return [0];
                }),
                last: Qe(function (u, c) {
                  return [c - 1];
                }),
                eq: Qe(function (u, c, p) {
                  return [p < 0 ? p + c : p];
                }),
                even: Qe(function (u, c) {
                  for (var p = 0; p < c; p += 2) u.push(p);
                  return u;
                }),
                odd: Qe(function (u, c) {
                  for (var p = 1; p < c; p += 2) u.push(p);
                  return u;
                }),
                lt: Qe(function (u, c, p) {
                  var g;
                  for (
                    p < 0 ? (g = p + c) : p > c ? (g = c) : (g = p);
                    --g >= 0;

                  )
                    u.push(g);
                  return u;
                }),
                gt: Qe(function (u, c, p) {
                  for (var g = p < 0 ? p + c : p; ++g < c; ) u.push(g);
                  return u;
                }),
              },
            }),
          (t.pseudos.nth = t.pseudos.eq);
        for (e in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          t.pseudos[e] = Ti(e);
        for (e in { submit: !0, reset: !0 }) t.pseudos[e] = Ci(e);
        function or() {}
        (or.prototype = t.filters = t.pseudos), (t.setFilters = new or());
        function Tt(u, c) {
          var p,
            g,
            y,
            A,
            C,
            N,
            S,
            W = z[u + " "];
          if (W) return c ? 0 : W.slice(0);
          for (C = u, N = [], S = t.preFilter; C; ) {
            (!p || (g = ne.exec(C))) &&
              (g && (C = C.slice(g[0].length) || C), N.push((y = []))),
              (p = !1),
              (g = At.exec(C)) &&
                ((p = g.shift()),
                y.push({ value: p, type: g[0].replace(ae, " ") }),
                (C = C.slice(p.length)));
            for (A in t.filter)
              (g = Oe[A].exec(C)) &&
                (!S[A] || (g = S[A](g))) &&
                ((p = g.shift()),
                y.push({ value: p, type: A, matches: g }),
                (C = C.slice(p.length)));
            if (!p) break;
          }
          return c ? C.length : C ? Y.error(u) : z(u, N).slice(0);
        }
        function $t(u) {
          for (var c = 0, p = u.length, g = ""; c < p; c++) g += u[c].value;
          return g;
        }
        function Bt(u, c, p) {
          var g = c.dir,
            y = c.next,
            A = y || g,
            C = p && A === "parentNode",
            N = b++;
          return c.first
            ? function (S, W, L) {
                for (; (S = S[g]); )
                  if (S.nodeType === 1 || C) return u(S, W, L);
                return !1;
              }
            : function (S, W, L) {
                var I,
                  $,
                  P = [h, N];
                if (L) {
                  for (; (S = S[g]); )
                    if ((S.nodeType === 1 || C) && u(S, W, L)) return !0;
                } else
                  for (; (S = S[g]); )
                    if (S.nodeType === 1 || C)
                      if ((($ = S[v] || (S[v] = {})), y && w(S, y)))
                        S = S[g] || S;
                      else {
                        if ((I = $[A]) && I[0] === h && I[1] === N)
                          return (P[2] = I[2]);
                        if ((($[A] = P), (P[2] = u(S, W, L)))) return !0;
                      }
                return !1;
              };
        }
        function hn(u) {
          return u.length > 1
            ? function (c, p, g) {
                for (var y = u.length; y--; ) if (!u[y](c, p, g)) return !1;
                return !0;
              }
            : u[0];
        }
        function Si(u, c, p) {
          for (var g = 0, y = c.length; g < y; g++) Y(u, c[g], p);
          return p;
        }
        function Ut(u, c, p, g, y) {
          for (var A, C = [], N = 0, S = u.length, W = c != null; N < S; N++)
            (A = u[N]) && (!p || p(A, g, y)) && (C.push(A), W && c.push(N));
          return C;
        }
        function gn(u, c, p, g, y, A) {
          return (
            g && !g[v] && (g = gn(g)),
            y && !y[v] && (y = gn(y, A)),
            ke(function (C, N, S, W) {
              var L,
                I,
                $,
                P,
                Z = [],
                ye = [],
                le = N.length,
                Ce = C || Si(c || "*", S.nodeType ? [S] : S, []),
                qe = u && (C || !c) ? Ut(Ce, Z, u, S, W) : Ce;
              if (
                (p
                  ? ((P = y || (C ? u : le || g) ? [] : N), p(qe, P, S, W))
                  : (P = qe),
                g)
              )
                for (L = Ut(P, ye), g(L, [], S, W), I = L.length; I--; )
                  ($ = L[I]) && (P[ye[I]] = !(qe[ye[I]] = $));
              if (C) {
                if (y || u) {
                  if (y) {
                    for (L = [], I = P.length; I--; )
                      ($ = P[I]) && L.push((qe[I] = $));
                    y(null, (P = []), L, W);
                  }
                  for (I = P.length; I--; )
                    ($ = P[I]) &&
                      (L = y ? Q.call(C, $) : Z[I]) > -1 &&
                      (C[L] = !(N[L] = $));
                }
              } else (P = Ut(P === N ? P.splice(le, P.length) : P)), y ? y(null, N, P, W) : o.apply(N, P);
            })
          );
        }
        function mn(u) {
          for (
            var c,
              p,
              g,
              y = u.length,
              A = t.relative[u[0].type],
              C = A || t.relative[" "],
              N = A ? 1 : 0,
              S = Bt(
                function (I) {
                  return I === c;
                },
                C,
                !0
              ),
              W = Bt(
                function (I) {
                  return Q.call(c, I) > -1;
                },
                C,
                !0
              ),
              L = [
                function (I, $, P) {
                  var Z =
                    (!A && (P || $ != n)) ||
                    ((c = $).nodeType ? S(I, $, P) : W(I, $, P));
                  return (c = null), Z;
                },
              ];
            N < y;
            N++
          )
            if ((p = t.relative[u[N].type])) L = [Bt(hn(L), p)];
            else {
              if (((p = t.filter[u[N].type].apply(null, u[N].matches)), p[v])) {
                for (g = ++N; g < y && !t.relative[u[g].type]; g++);
                return gn(
                  N > 1 && hn(L),
                  N > 1 &&
                    $t(
                      u
                        .slice(0, N - 1)
                        .concat({ value: u[N - 2].type === " " ? "*" : "" })
                    ).replace(ae, "$1"),
                  p,
                  N < g && mn(u.slice(N, g)),
                  g < y && mn((u = u.slice(g))),
                  g < y && $t(u)
                );
              }
              L.push(p);
            }
          return hn(L);
        }
        function Ei(u, c) {
          var p = c.length > 0,
            g = u.length > 0,
            y = function (A, C, N, S, W) {
              var L,
                I,
                $,
                P = 0,
                Z = "0",
                ye = A && [],
                le = [],
                Ce = n,
                qe = A || (g && t.find.TAG("*", W)),
                ut = (h += Ce == null ? 1 : Math.random() || 0.1),
                ce = qe.length;
              for (
                W && (n = C == a || C || W);
                Z !== ce && (L = qe[Z]) != null;
                Z++
              ) {
                if (g && L) {
                  for (
                    I = 0, !C && L.ownerDocument != a && (Ue(L), (N = !f));
                    ($ = u[I++]);

                  )
                    if ($(L, C || a, N)) {
                      o.call(S, L);
                      break;
                    }
                  W && (h = ut);
                }
                p && ((L = !$ && L) && P--, A && ye.push(L));
              }
              if (((P += Z), p && Z !== P)) {
                for (I = 0; ($ = c[I++]); ) $(ye, le, C, N);
                if (A) {
                  if (P > 0)
                    for (; Z--; ) ye[Z] || le[Z] || (le[Z] = V.call(S));
                  le = Ut(le);
                }
                o.apply(S, le),
                  W &&
                    !A &&
                    le.length > 0 &&
                    P + c.length > 1 &&
                    i.uniqueSort(S);
              }
              return W && ((h = ut), (n = Ce)), ye;
            };
          return p ? ke(y) : y;
        }
        function yn(u, c) {
          var p,
            g = [],
            y = [],
            A = _[u + " "];
          if (!A) {
            for (c || (c = Tt(u)), p = c.length; p--; )
              (A = mn(c[p])), A[v] ? g.push(A) : y.push(A);
            (A = _(u, Ei(y, g))), (A.selector = u);
          }
          return A;
        }
        function ar(u, c, p, g) {
          var y,
            A,
            C,
            N,
            S,
            W = typeof u == "function" && u,
            L = !g && Tt((u = W.selector || u));
          if (((p = p || []), L.length === 1)) {
            if (
              ((A = L[0] = L[0].slice(0)),
              A.length > 2 &&
                (C = A[0]).type === "ID" &&
                c.nodeType === 9 &&
                f &&
                t.relative[A[1].type])
            ) {
              if (
                ((c = (t.find.ID(C.matches[0].replace(_e, Fe), c) || [])[0]), c)
              )
                W && (c = c.parentNode);
              else return p;
              u = u.slice(A.shift().value.length);
            }
            for (
              y = Oe.needsContext.test(u) ? 0 : A.length;
              y-- && ((C = A[y]), !t.relative[(N = C.type)]);

            )
              if (
                (S = t.find[N]) &&
                (g = S(
                  C.matches[0].replace(_e, Fe),
                  (dn.test(A[0].type) && pn(c.parentNode)) || c
                ))
              ) {
                if ((A.splice(y, 1), (u = g.length && $t(A)), !u))
                  return o.apply(p, g), p;
                break;
              }
          }
          return (
            (W || yn(u, L))(
              g,
              c,
              !f,
              p,
              !c || (dn.test(u) && pn(c.parentNode)) || c
            ),
            p
          );
        }
        (R.sortStable = v.split("").sort(oe).join("") === v),
          Ue(),
          (R.sortDetached = at(function (u) {
            return u.compareDocumentPosition(a.createElement("fieldset")) & 1;
          })),
          (i.find = Y),
          (i.expr[":"] = i.expr.pseudos),
          (i.unique = i.uniqueSort),
          (Y.compile = yn),
          (Y.select = ar),
          (Y.setDocument = Ue),
          (Y.tokenize = Tt),
          (Y.escape = i.escapeSelector),
          (Y.getText = i.text),
          (Y.isXML = i.isXMLDoc),
          (Y.selectors = i.expr),
          (Y.support = i.support),
          (Y.uniqueSort = i.uniqueSort);
      })();
      var Ae = function (e, t, n) {
          for (var r = [], s = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
            if (e.nodeType === 1) {
              if (s && i(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        xe = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            e.nodeType === 1 && e !== t && n.push(e);
          return n;
        },
        Ze = i.expr.match.needsContext,
        Cn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Gt(e, t, n) {
        return O(t)
          ? i.grep(e, function (r, s) {
              return !!t.call(r, s, r) !== n;
            })
          : t.nodeType
          ? i.grep(e, function (r) {
              return (r === t) !== n;
            })
          : typeof t != "string"
          ? i.grep(e, function (r) {
              return Q.call(t, r) > -1 !== n;
            })
          : i.filter(t, e, n);
      }
      (i.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          t.length === 1 && r.nodeType === 1
            ? i.find.matchesSelector(r, e)
              ? [r]
              : []
            : i.find.matches(
                e,
                i.grep(t, function (s) {
                  return s.nodeType === 1;
                })
              )
        );
      }),
        i.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              s = this;
            if (typeof e != "string")
              return this.pushStack(
                i(e).filter(function () {
                  for (t = 0; t < r; t++) if (i.contains(s[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, s[t], n);
            return r > 1 ? i.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(Gt(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(Gt(this, e || [], !0));
          },
          is: function (e) {
            return !!Gt(
              this,
              typeof e == "string" && Ze.test(e) ? i(e) : e || [],
              !1
            ).length;
          },
        });
      var Sn,
        Er = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        kr = (i.fn.init = function (e, t, n) {
          var r, s;
          if (!e) return this;
          if (((n = n || Sn), typeof e == "string"))
            if (
              (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                ? (r = [null, e, null])
                : (r = Er.exec(e)),
              r && (r[1] || !t))
            )
              if (r[1]) {
                if (
                  ((t = t instanceof i ? t[0] : t),
                  i.merge(
                    this,
                    i.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : M,
                      !0
                    )
                  ),
                  Cn.test(r[1]) && i.isPlainObject(t))
                )
                  for (r in t) O(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              } else
                return (
                  (s = M.getElementById(r[2])),
                  s && ((this[0] = s), (this.length = 1)),
                  this
                );
            else
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
          else {
            if (e.nodeType) return (this[0] = e), (this.length = 1), this;
            if (O(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
          }
          return i.makeArray(e, this);
        });
      (kr.prototype = i.fn), (Sn = i(M));
      var Nr = /^(?:parents|prev(?:Until|All))/,
        Dr = { children: !0, contents: !0, next: !0, prev: !0 };
      i.fn.extend({
        has: function (e) {
          var t = i(e, this),
            n = t.length;
          return this.filter(function () {
            for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            s = this.length,
            o = [],
            a = typeof e != "string" && i(e);
          if (!Ze.test(e)) {
            for (; r < s; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : n.nodeType === 1 && i.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          }
          return this.pushStack(o.length > 1 ? i.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? typeof e == "string"
              ? Q.call(i(e), this[0])
              : Q.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
        },
        addBack: function (e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        },
      });
      function En(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; );
        return e;
      }
      i.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
          },
          parents: function (e) {
            return Ae(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Ae(e, "parentNode", n);
          },
          next: function (e) {
            return En(e, "nextSibling");
          },
          prev: function (e) {
            return En(e, "previousSibling");
          },
          nextAll: function (e) {
            return Ae(e, "nextSibling");
          },
          prevAll: function (e) {
            return Ae(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Ae(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Ae(e, "previousSibling", n);
          },
          siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return xe(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument != null && U(e.contentDocument)
              ? e.contentDocument
              : (w(e, "template") && (e = e.content || e),
                i.merge([], e.childNodes));
          },
        },
        function (e, t) {
          i.fn[e] = function (n, r) {
            var s = i.map(this, t, n);
            return (
              e.slice(-5) !== "Until" && (r = n),
              r && typeof r == "string" && (s = i.filter(r, s)),
              this.length > 1 &&
                (Dr[e] || i.uniqueSort(s), Nr.test(e) && s.reverse()),
              this.pushStack(s)
            );
          };
        }
      );
      var De = /[^\x20\t\r\n\f]+/g;
      function jr(e) {
        var t = {};
        return (
          i.each(e.match(De) || [], function (n, r) {
            t[r] = !0;
          }),
          t
        );
      }
      i.Callbacks = function (e) {
        e = typeof e == "string" ? jr(e) : i.extend({}, e);
        var t,
          n,
          r,
          s,
          o = [],
          a = [],
          l = -1,
          f = function () {
            for (s = s || e.once, r = t = !0; a.length; l = -1)
              for (n = a.shift(); ++l < o.length; )
                o[l].apply(n[0], n[1]) === !1 &&
                  e.stopOnFalse &&
                  ((l = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), s && (n ? (o = []) : (o = ""));
          },
          d = {
            add: function () {
              return (
                o &&
                  (n && !t && ((l = o.length - 1), a.push(n)),
                  (function m(v) {
                    i.each(v, function (h, b) {
                      O(b)
                        ? (!e.unique || !d.has(b)) && o.push(b)
                        : b && b.length && We(b) !== "string" && m(b);
                    });
                  })(arguments),
                  n && !t && f()),
                this
              );
            },
            remove: function () {
              return (
                i.each(arguments, function (m, v) {
                  for (var h; (h = i.inArray(v, o, h)) > -1; )
                    o.splice(h, 1), h <= l && l--;
                }),
                this
              );
            },
            has: function (m) {
              return m ? i.inArray(m, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (s = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (s = a = []), !n && !t && (o = n = ""), this;
            },
            locked: function () {
              return !!s;
            },
            fireWith: function (m, v) {
              return (
                s ||
                  ((v = v || []),
                  (v = [m, v.slice ? v.slice() : v]),
                  a.push(v),
                  t || f()),
                this
              );
            },
            fire: function () {
              return d.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return d;
      };
      function et(e) {
        return e;
      }
      function Ot(e) {
        throw e;
      }
      function kn(e, t, n, r) {
        var s;
        try {
          e && O((s = e.promise))
            ? s.call(e).done(t).fail(n)
            : e && O((s = e.then))
            ? s.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (o) {
          n.apply(void 0, [o]);
        }
      }
      i.extend({
        Deferred: function (e) {
          var t = [
              [
                "notify",
                "progress",
                i.Callbacks("memory"),
                i.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                i.Callbacks("once memory"),
                i.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                i.Callbacks("once memory"),
                i.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (o) {
                return r.then(null, o);
              },
              pipe: function () {
                var o = arguments;
                return i
                  .Deferred(function (a) {
                    i.each(t, function (l, f) {
                      var d = O(o[f[4]]) && o[f[4]];
                      s[f[1]](function () {
                        var m = d && d.apply(this, arguments);
                        m && O(m.promise)
                          ? m
                              .promise()
                              .progress(a.notify)
                              .done(a.resolve)
                              .fail(a.reject)
                          : a[f[0] + "With"](this, d ? [m] : arguments);
                      });
                    }),
                      (o = null);
                  })
                  .promise();
              },
              then: function (o, a, l) {
                var f = 0;
                function d(m, v, h, b) {
                  return function () {
                    var q = this,
                      z = arguments,
                      _ = function () {
                        var oe, Pe;
                        if (!(m < f)) {
                          if (((oe = h.apply(q, z)), oe === v.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (Pe =
                            oe &&
                            (typeof oe == "object" ||
                              typeof oe == "function") &&
                            oe.then),
                            O(Pe)
                              ? b
                                ? Pe.call(oe, d(f, v, et, b), d(f, v, Ot, b))
                                : (f++,
                                  Pe.call(
                                    oe,
                                    d(f, v, et, b),
                                    d(f, v, Ot, b),
                                    d(f, v, et, v.notifyWith)
                                  ))
                              : (h !== et && ((q = void 0), (z = [oe])),
                                (b || v.resolveWith)(q, z));
                        }
                      },
                      fe = b
                        ? _
                        : function () {
                            try {
                              _();
                            } catch (oe) {
                              i.Deferred.exceptionHook &&
                                i.Deferred.exceptionHook(oe, fe.error),
                                m + 1 >= f &&
                                  (h !== Ot && ((q = void 0), (z = [oe])),
                                  v.rejectWith(q, z));
                            }
                          };
                    m
                      ? fe()
                      : (i.Deferred.getErrorHook
                          ? (fe.error = i.Deferred.getErrorHook())
                          : i.Deferred.getStackHook &&
                            (fe.error = i.Deferred.getStackHook()),
                        x.setTimeout(fe));
                  };
                }
                return i
                  .Deferred(function (m) {
                    t[0][3].add(d(0, m, O(l) ? l : et, m.notifyWith)),
                      t[1][3].add(d(0, m, O(o) ? o : et)),
                      t[2][3].add(d(0, m, O(a) ? a : Ot));
                  })
                  .promise();
              },
              promise: function (o) {
                return o != null ? i.extend(o, r) : r;
              },
            },
            s = {};
          return (
            i.each(t, function (o, a) {
              var l = a[2],
                f = a[5];
              (r[a[1]] = l.add),
                f &&
                  l.add(
                    function () {
                      n = f;
                    },
                    t[3 - o][2].disable,
                    t[3 - o][3].disable,
                    t[0][2].lock,
                    t[0][3].lock
                  ),
                l.add(a[3].fire),
                (s[a[0]] = function () {
                  return (
                    s[a[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                  );
                }),
                (s[a[0] + "With"] = l.fireWith);
            }),
            r.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            s = K.call(arguments),
            o = i.Deferred(),
            a = function (l) {
              return function (f) {
                (r[l] = this),
                  (s[l] = arguments.length > 1 ? K.call(arguments) : f),
                  --t || o.resolveWith(r, s);
              };
            };
          if (
            t <= 1 &&
            (kn(e, o.done(a(n)).resolve, o.reject, !t),
            o.state() === "pending" || O(s[n] && s[n].then))
          )
            return o.then();
          for (; n--; ) kn(s[n], a(n), o.reject);
          return o.promise();
        },
      });
      var Pr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (i.Deferred.exceptionHook = function (e, t) {
        x.console &&
          x.console.warn &&
          e &&
          Pr.test(e.name) &&
          x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (i.readyException = function (e) {
          x.setTimeout(function () {
            throw e;
          });
        });
      var Yt = i.Deferred();
      (i.fn.ready = function (e) {
        return (
          Yt.then(e).catch(function (t) {
            i.readyException(t);
          }),
          this
        );
      }),
        i.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (e === !0 ? --i.readyWait : i.isReady) ||
              ((i.isReady = !0),
              !(e !== !0 && --i.readyWait > 0) && Yt.resolveWith(M, [i]));
          },
        }),
        (i.ready.then = Yt.then);
      function qt() {
        M.removeEventListener("DOMContentLoaded", qt),
          x.removeEventListener("load", qt),
          i.ready();
      }
      M.readyState === "complete" ||
      (M.readyState !== "loading" && !M.documentElement.doScroll)
        ? x.setTimeout(i.ready)
        : (M.addEventListener("DOMContentLoaded", qt),
          x.addEventListener("load", qt));
      var Re = function (e, t, n, r, s, o, a) {
          var l = 0,
            f = e.length,
            d = n == null;
          if (We(n) === "object") {
            s = !0;
            for (l in n) Re(e, t, l, n[l], !0, o, a);
          } else if (
            r !== void 0 &&
            ((s = !0),
            O(r) || (a = !0),
            d &&
              (a
                ? (t.call(e, r), (t = null))
                : ((d = t),
                  (t = function (m, v, h) {
                    return d.call(i(m), h);
                  }))),
            t)
          )
            for (; l < f; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
          return s ? e : d ? t.call(e) : f ? t(e[0], n) : o;
        },
        Lr = /^-ms-/,
        Mr = /-([a-z])/g;
      function Or(e, t) {
        return t.toUpperCase();
      }
      function je(e) {
        return e.replace(Lr, "ms-").replace(Mr, Or);
      }
      var pt = function (e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function ht() {
        this.expando = i.expando + ht.uid++;
      }
      (ht.uid = 1),
        (ht.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                pt(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              s = this.cache(e);
            if (typeof t == "string") s[je(t)] = n;
            else for (r in t) s[je(r)] = t[r];
            return s;
          },
          get: function (e, t) {
            return t === void 0
              ? this.cache(e)
              : e[this.expando] && e[this.expando][je(t)];
          },
          access: function (e, t, n) {
            return t === void 0 || (t && typeof t == "string" && n === void 0)
              ? this.get(e, t)
              : (this.set(e, t, n), n !== void 0 ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (r !== void 0) {
              if (t !== void 0)
                for (
                  Array.isArray(t)
                    ? (t = t.map(je))
                    : ((t = je(t)), (t = (t in r) ? [t] : t.match(De) || [])),
                    n = t.length;
                  n--;

                )
                  delete r[t[n]];
              (t === void 0 || i.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return t !== void 0 && !i.isEmptyObject(t);
          },
        });
      var D = new ht(),
        he = new ht(),
        qr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ir = /[A-Z]/g;
      function Rr(e) {
        return e === "true"
          ? !0
          : e === "false"
          ? !1
          : e === "null"
          ? null
          : e === +e + ""
          ? +e
          : qr.test(e)
          ? JSON.parse(e)
          : e;
      }
      function Nn(e, t, n) {
        var r;
        if (n === void 0 && e.nodeType === 1)
          if (
            ((r = "data-" + t.replace(Ir, "-$&").toLowerCase()),
            (n = e.getAttribute(r)),
            typeof n == "string")
          ) {
            try {
              n = Rr(n);
            } catch {}
            he.set(e, t, n);
          } else n = void 0;
        return n;
      }
      i.extend({
        hasData: function (e) {
          return he.hasData(e) || D.hasData(e);
        },
        data: function (e, t, n) {
          return he.access(e, t, n);
        },
        removeData: function (e, t) {
          he.remove(e, t);
        },
        _data: function (e, t, n) {
          return D.access(e, t, n);
        },
        _removeData: function (e, t) {
          D.remove(e, t);
        },
      }),
        i.fn.extend({
          data: function (e, t) {
            var n,
              r,
              s,
              o = this[0],
              a = o && o.attributes;
            if (e === void 0) {
              if (
                this.length &&
                ((s = he.get(o)), o.nodeType === 1 && !D.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((r = a[n].name),
                    r.indexOf("data-") === 0 &&
                      ((r = je(r.slice(5))), Nn(o, r, s[r])));
                D.set(o, "hasDataAttrs", !0);
              }
              return s;
            }
            return typeof e == "object"
              ? this.each(function () {
                  he.set(this, e);
                })
              : Re(
                  this,
                  function (l) {
                    var f;
                    if (o && l === void 0)
                      return (
                        (f = he.get(o, e)),
                        f !== void 0 || ((f = Nn(o, e)), f !== void 0)
                          ? f
                          : void 0
                      );
                    this.each(function () {
                      he.set(this, e, l);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              he.remove(this, e);
            });
          },
        }),
        i.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = D.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = D.access(e, t, i.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = i.queue(e, t),
              r = n.length,
              s = n.shift(),
              o = i._queueHooks(e, t),
              a = function () {
                i.dequeue(e, t);
              };
            s === "inprogress" && ((s = n.shift()), r--),
              s &&
                (t === "fx" && n.unshift("inprogress"),
                delete o.stop,
                s.call(e, a, o)),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              D.get(e, n) ||
              D.access(e, n, {
                empty: i.Callbacks("once memory").add(function () {
                  D.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        i.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              typeof e != "string" && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? i.queue(this[0], e)
                : t === void 0
                ? this
                : this.each(function () {
                    var r = i.queue(this, e, t);
                    i._queueHooks(this, e),
                      e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              i.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              s = i.Deferred(),
              o = this,
              a = this.length,
              l = function () {
                --r || s.resolveWith(o, [o]);
              };
            for (
              typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = D.get(o[a], e + "queueHooks")),
                n && n.empty && (r++, n.empty.add(l));
            return l(), s.promise(t);
          },
        });
      var Dn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        gt = new RegExp("^(?:([+-])=|)(" + Dn + ")([a-z%]*)$", "i"),
        He = ["Top", "Right", "Bottom", "Left"],
        ze = M.documentElement,
        tt = function (e) {
          return i.contains(e.ownerDocument, e);
        },
        Hr = { composed: !0 };
      ze.getRootNode &&
        (tt = function (e) {
          return (
            i.contains(e.ownerDocument, e) ||
            e.getRootNode(Hr) === e.ownerDocument
          );
        });
      var It = function (e, t) {
        return (
          (e = t || e),
          e.style.display === "none" ||
            (e.style.display === "" && tt(e) && i.css(e, "display") === "none")
        );
      };
      function jn(e, t, n, r) {
        var s,
          o,
          a = 20,
          l = r
            ? function () {
                return r.cur();
              }
            : function () {
                return i.css(e, t, "");
              },
          f = l(),
          d = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
          m =
            e.nodeType &&
            (i.cssNumber[t] || (d !== "px" && +f)) &&
            gt.exec(i.css(e, t));
        if (m && m[3] !== d) {
          for (f = f / 2, d = d || m[3], m = +f || 1; a--; )
            i.style(e, t, m + d),
              (1 - o) * (1 - (o = l() / f || 0.5)) <= 0 && (a = 0),
              (m = m / o);
          (m = m * 2), i.style(e, t, m + d), (n = n || []);
        }
        return (
          n &&
            ((m = +m || +f || 0),
            (s = n[1] ? m + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = d), (r.start = m), (r.end = s))),
          s
        );
      }
      var Pn = {};
      function _r(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          s = Pn[r];
        return (
          s ||
          ((t = n.body.appendChild(n.createElement(r))),
          (s = i.css(t, "display")),
          t.parentNode.removeChild(t),
          s === "none" && (s = "block"),
          (Pn[r] = s),
          s)
        );
      }
      function nt(e, t) {
        for (var n, r, s = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]),
            r.style &&
              ((n = r.style.display),
              t
                ? (n === "none" &&
                    ((s[o] = D.get(r, "display") || null),
                    s[o] || (r.style.display = "")),
                  r.style.display === "" && It(r) && (s[o] = _r(r)))
                : n !== "none" && ((s[o] = "none"), D.set(r, "display", n)));
        for (o = 0; o < a; o++) s[o] != null && (e[o].style.display = s[o]);
        return e;
      }
      i.fn.extend({
        show: function () {
          return nt(this, !0);
        },
        hide: function () {
          return nt(this);
        },
        toggle: function (e) {
          return typeof e == "boolean"
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                It(this) ? i(this).show() : i(this).hide();
              });
        },
      });
      var mt = /^(?:checkbox|radio)$/i,
        Ln = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Mn = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var e = M.createDocumentFragment(),
          t = e.appendChild(M.createElement("div")),
          n = M.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (R.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (R.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
          (t.innerHTML = "<option></option>"),
          (R.option = !!t.lastChild);
      })();
      var we = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
        (we.th = we.td),
        R.option ||
          (we.optgroup = we.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      function ge(e, t) {
        var n;
        return (
          typeof e.getElementsByTagName < "u"
            ? (n = e.getElementsByTagName(t || "*"))
            : typeof e.querySelectorAll < "u"
            ? (n = e.querySelectorAll(t || "*"))
            : (n = []),
          t === void 0 || (t && w(e, t)) ? i.merge([e], n) : n
        );
      }
      function Qt(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          D.set(e[n], "globalEval", !t || D.get(t[n], "globalEval"));
      }
      var Fr = /<|&#?\w+;/;
      function On(e, t, n, r, s) {
        for (
          var o,
            a,
            l,
            f,
            d,
            m,
            v = t.createDocumentFragment(),
            h = [],
            b = 0,
            q = e.length;
          b < q;
          b++
        )
          if (((o = e[b]), o || o === 0))
            if (We(o) === "object") i.merge(h, o.nodeType ? [o] : o);
            else if (!Fr.test(o)) h.push(t.createTextNode(o));
            else {
              for (
                a = a || v.appendChild(t.createElement("div")),
                  l = (Ln.exec(o) || ["", ""])[1].toLowerCase(),
                  f = we[l] || we._default,
                  a.innerHTML = f[1] + i.htmlPrefilter(o) + f[2],
                  m = f[0];
                m--;

              )
                a = a.lastChild;
              i.merge(h, a.childNodes),
                (a = v.firstChild),
                (a.textContent = "");
            }
        for (v.textContent = "", b = 0; (o = h[b++]); ) {
          if (r && i.inArray(o, r) > -1) {
            s && s.push(o);
            continue;
          }
          if (
            ((d = tt(o)), (a = ge(v.appendChild(o), "script")), d && Qt(a), n)
          )
            for (m = 0; (o = a[m++]); ) Mn.test(o.type || "") && n.push(o);
        }
        return v;
      }
      var qn = /^([^.]*)(?:\.(.+)|)/;
      function rt() {
        return !0;
      }
      function it() {
        return !1;
      }
      function Jt(e, t, n, r, s, o) {
        var a, l;
        if (typeof t == "object") {
          typeof n != "string" && ((r = r || n), (n = void 0));
          for (l in t) Jt(e, l, n, r, t[l], o);
          return e;
        }
        if (
          (r == null && s == null
            ? ((s = n), (r = n = void 0))
            : s == null &&
              (typeof n == "string"
                ? ((s = r), (r = void 0))
                : ((s = r), (r = n), (n = void 0))),
          s === !1)
        )
          s = it;
        else if (!s) return e;
        return (
          o === 1 &&
            ((a = s),
            (s = function (f) {
              return i().off(f), a.apply(this, arguments);
            }),
            (s.guid = a.guid || (a.guid = i.guid++))),
          e.each(function () {
            i.event.add(this, t, s, r, n);
          })
        );
      }
      i.event = {
        global: {},
        add: function (e, t, n, r, s) {
          var o,
            a,
            l,
            f,
            d,
            m,
            v,
            h,
            b,
            q,
            z,
            _ = D.get(e);
          if (pt(e))
            for (
              n.handler && ((o = n), (n = o.handler), (s = o.selector)),
                s && i.find.matchesSelector(ze, s),
                n.guid || (n.guid = i.guid++),
                (f = _.events) || (f = _.events = Object.create(null)),
                (a = _.handle) ||
                  (a = _.handle =
                    function (fe) {
                      return typeof i < "u" && i.event.triggered !== fe.type
                        ? i.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                t = (t || "").match(De) || [""],
                d = t.length;
              d--;

            )
              (l = qn.exec(t[d]) || []),
                (b = z = l[1]),
                (q = (l[2] || "").split(".").sort()),
                b &&
                  ((v = i.event.special[b] || {}),
                  (b = (s ? v.delegateType : v.bindType) || b),
                  (v = i.event.special[b] || {}),
                  (m = i.extend(
                    {
                      type: b,
                      origType: z,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: s,
                      needsContext: s && i.expr.match.needsContext.test(s),
                      namespace: q.join("."),
                    },
                    o
                  )),
                  (h = f[b]) ||
                    ((h = f[b] = []),
                    (h.delegateCount = 0),
                    (!v.setup || v.setup.call(e, r, q, a) === !1) &&
                      e.addEventListener &&
                      e.addEventListener(b, a)),
                  v.add &&
                    (v.add.call(e, m),
                    m.handler.guid || (m.handler.guid = n.guid)),
                  s ? h.splice(h.delegateCount++, 0, m) : h.push(m),
                  (i.event.global[b] = !0));
        },
        remove: function (e, t, n, r, s) {
          var o,
            a,
            l,
            f,
            d,
            m,
            v,
            h,
            b,
            q,
            z,
            _ = D.hasData(e) && D.get(e);
          if (!(!_ || !(f = _.events))) {
            for (t = (t || "").match(De) || [""], d = t.length; d--; ) {
              if (
                ((l = qn.exec(t[d]) || []),
                (b = z = l[1]),
                (q = (l[2] || "").split(".").sort()),
                !b)
              ) {
                for (b in f) i.event.remove(e, b + t[d], n, r, !0);
                continue;
              }
              for (
                v = i.event.special[b] || {},
                  b = (r ? v.delegateType : v.bindType) || b,
                  h = f[b] || [],
                  l =
                    l[2] &&
                    new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = o = h.length;
                o--;

              )
                (m = h[o]),
                  (s || z === m.origType) &&
                    (!n || n.guid === m.guid) &&
                    (!l || l.test(m.namespace)) &&
                    (!r || r === m.selector || (r === "**" && m.selector)) &&
                    (h.splice(o, 1),
                    m.selector && h.delegateCount--,
                    v.remove && v.remove.call(e, m));
              a &&
                !h.length &&
                ((!v.teardown || v.teardown.call(e, q, _.handle) === !1) &&
                  i.removeEvent(e, b, _.handle),
                delete f[b]);
            }
            i.isEmptyObject(f) && D.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            s,
            o,
            a,
            l = new Array(arguments.length),
            f = i.event.fix(e),
            d = (D.get(this, "events") || Object.create(null))[f.type] || [],
            m = i.event.special[f.type] || {};
          for (l[0] = f, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((f.delegateTarget = this),
            !(m.preDispatch && m.preDispatch.call(this, f) === !1))
          ) {
            for (
              a = i.event.handlers.call(this, f, d), t = 0;
              (s = a[t++]) && !f.isPropagationStopped();

            )
              for (
                f.currentTarget = s.elem, n = 0;
                (o = s.handlers[n++]) && !f.isImmediatePropagationStopped();

              )
                (!f.rnamespace ||
                  o.namespace === !1 ||
                  f.rnamespace.test(o.namespace)) &&
                  ((f.handleObj = o),
                  (f.data = o.data),
                  (r = (
                    (i.event.special[o.origType] || {}).handle || o.handler
                  ).apply(s.elem, l)),
                  r !== void 0 &&
                    (f.result = r) === !1 &&
                    (f.preventDefault(), f.stopPropagation()));
            return m.postDispatch && m.postDispatch.call(this, f), f.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            s,
            o,
            a,
            l = [],
            f = t.delegateCount,
            d = e.target;
          if (f && d.nodeType && !(e.type === "click" && e.button >= 1)) {
            for (; d !== this; d = d.parentNode || this)
              if (
                d.nodeType === 1 &&
                !(e.type === "click" && d.disabled === !0)
              ) {
                for (o = [], a = {}, n = 0; n < f; n++)
                  (r = t[n]),
                    (s = r.selector + " "),
                    a[s] === void 0 &&
                      (a[s] = r.needsContext
                        ? i(s, this).index(d) > -1
                        : i.find(s, this, null, [d]).length),
                    a[s] && o.push(r);
                o.length && l.push({ elem: d, handlers: o });
              }
          }
          return (
            (d = this),
            f < t.length && l.push({ elem: d, handlers: t.slice(f) }),
            l
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(i.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: O(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (n) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
            },
          });
        },
        fix: function (e) {
          return e[i.expando] ? e : new i.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                mt.test(t.type) &&
                  t.click &&
                  w(t, "input") &&
                  Rt(t, "click", !0),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                mt.test(t.type) && t.click && w(t, "input") && Rt(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (mt.test(t.type) &&
                  t.click &&
                  w(t, "input") &&
                  D.get(t, "click")) ||
                w(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              e.result !== void 0 &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      };
      function Rt(e, t, n) {
        if (!n) {
          D.get(e, t) === void 0 && i.event.add(e, t, rt);
          return;
        }
        D.set(e, t, !1),
          i.event.add(e, t, {
            namespace: !1,
            handler: function (r) {
              var s,
                o = D.get(this, t);
              if (r.isTrigger & 1 && this[t]) {
                if (o)
                  (i.event.special[t] || {}).delegateType &&
                    r.stopPropagation();
                else if (
                  ((o = K.call(arguments)),
                  D.set(this, t, o),
                  this[t](),
                  (s = D.get(this, t)),
                  D.set(this, t, !1),
                  o !== s)
                )
                  return r.stopImmediatePropagation(), r.preventDefault(), s;
              } else
                o &&
                  (D.set(this, t, i.event.trigger(o[0], o.slice(1), this)),
                  r.stopPropagation(),
                  (r.isImmediatePropagationStopped = rt));
            },
          });
      }
      (i.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
        (i.Event = function (e, t) {
          if (!(this instanceof i.Event)) return new i.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (e.defaultPrevented === void 0 && e.returnValue === !1)
                  ? rt
                  : it),
              (this.target =
                e.target && e.target.nodeType === 3
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && i.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[i.expando] = !0);
        }),
        (i.Event.prototype = {
          constructor: i.Event,
          isDefaultPrevented: it,
          isPropagationStopped: it,
          isImmediatePropagationStopped: it,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = rt),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = rt),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = rt),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        i.each(
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
          i.event.addProp
        ),
        i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          function n(r) {
            if (M.documentMode) {
              var s = D.get(this, "handle"),
                o = i.event.fix(r);
              (o.type = r.type === "focusin" ? "focus" : "blur"),
                (o.isSimulated = !0),
                s(r),
                o.target === o.currentTarget && s(o);
            } else i.event.simulate(t, r.target, i.event.fix(r));
          }
          (i.event.special[e] = {
            setup: function () {
              var r;
              if ((Rt(this, e, !0), M.documentMode))
                (r = D.get(this, t)),
                  r || this.addEventListener(t, n),
                  D.set(this, t, (r || 0) + 1);
              else return !1;
            },
            trigger: function () {
              return Rt(this, e), !0;
            },
            teardown: function () {
              var r;
              if (M.documentMode)
                (r = D.get(this, t) - 1),
                  r
                    ? D.set(this, t, r)
                    : (this.removeEventListener(t, n), D.remove(this, t));
              else return !1;
            },
            _default: function (r) {
              return D.get(r.target, e);
            },
            delegateType: t,
          }),
            (i.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  s = M.documentMode ? this : r,
                  o = D.get(s, t);
                o ||
                  (M.documentMode
                    ? this.addEventListener(t, n)
                    : r.addEventListener(e, n, !0)),
                  D.set(s, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  s = M.documentMode ? this : r,
                  o = D.get(s, t) - 1;
                o
                  ? D.set(s, t, o)
                  : (M.documentMode
                      ? this.removeEventListener(t, n)
                      : r.removeEventListener(e, n, !0),
                    D.remove(s, t));
              },
            });
        }),
        i.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            i.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (n) {
                var r,
                  s = this,
                  o = n.relatedTarget,
                  a = n.handleObj;
                return (
                  (!o || (o !== s && !i.contains(s, o))) &&
                    ((n.type = a.origType),
                    (r = a.handler.apply(this, arguments)),
                    (n.type = t)),
                  r
                );
              },
            };
          }
        ),
        i.fn.extend({
          on: function (e, t, n, r) {
            return Jt(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Jt(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, s;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                i(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if (typeof e == "object") {
              for (s in e) this.off(s, t, e[s]);
              return this;
            }
            return (
              (t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
              n === !1 && (n = it),
              this.each(function () {
                i.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Wr = /<script|<style|<link/i,
        $r = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Br = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function In(e, t) {
        return (
          (w(e, "table") &&
            w(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
            i(e).children("tbody")[0]) ||
          e
        );
      }
      function Ur(e) {
        return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
      }
      function Vr(e) {
        return (
          (e.type || "").slice(0, 5) === "true/"
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Rn(e, t) {
        var n, r, s, o, a, l, f;
        if (t.nodeType === 1) {
          if (D.hasData(e) && ((o = D.get(e)), (f = o.events), f)) {
            D.remove(t, "handle events");
            for (s in f)
              for (n = 0, r = f[s].length; n < r; n++)
                i.event.add(t, s, f[s][n]);
          }
          he.hasData(e) &&
            ((a = he.access(e)), (l = i.extend({}, a)), he.set(t, l));
        }
      }
      function zr(e, t) {
        var n = t.nodeName.toLowerCase();
        n === "input" && mt.test(e.type)
          ? (t.checked = e.checked)
          : (n === "input" || n === "textarea") &&
            (t.defaultValue = e.defaultValue);
      }
      function st(e, t, n, r) {
        t = ve(t);
        var s,
          o,
          a,
          l,
          f,
          d,
          m = 0,
          v = e.length,
          h = v - 1,
          b = t[0],
          q = O(b);
        if (q || (v > 1 && typeof b == "string" && !R.checkClone && $r.test(b)))
          return e.each(function (z) {
            var _ = e.eq(z);
            q && (t[0] = b.call(this, z, _.html())), st(_, t, n, r);
          });
        if (
          v &&
          ((s = On(t, e[0].ownerDocument, !1, e, r)),
          (o = s.firstChild),
          s.childNodes.length === 1 && (s = o),
          o || r)
        ) {
          for (a = i.map(ge(s, "script"), Ur), l = a.length; m < v; m++)
            (f = s),
              m !== h &&
                ((f = i.clone(f, !0, !0)), l && i.merge(a, ge(f, "script"))),
              n.call(e[m], f, m);
          if (l)
            for (
              d = a[a.length - 1].ownerDocument, i.map(a, Vr), m = 0;
              m < l;
              m++
            )
              (f = a[m]),
                Mn.test(f.type || "") &&
                  !D.access(f, "globalEval") &&
                  i.contains(d, f) &&
                  (f.src && (f.type || "").toLowerCase() !== "module"
                    ? i._evalUrl &&
                      !f.noModule &&
                      i._evalUrl(
                        f.src,
                        { nonce: f.nonce || f.getAttribute("nonce") },
                        d
                      )
                    : ct(f.textContent.replace(Br, ""), f, d));
        }
        return e;
      }
      function Hn(e, t, n) {
        for (var r, s = t ? i.filter(t, e) : e, o = 0; (r = s[o]) != null; o++)
          !n && r.nodeType === 1 && i.cleanData(ge(r)),
            r.parentNode &&
              (n && tt(r) && Qt(ge(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      i.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            s,
            o,
            a,
            l = e.cloneNode(!0),
            f = tt(e);
          if (
            !R.noCloneChecked &&
            (e.nodeType === 1 || e.nodeType === 11) &&
            !i.isXMLDoc(e)
          )
            for (a = ge(l), o = ge(e), r = 0, s = o.length; r < s; r++)
              zr(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || ge(e), a = a || ge(l), r = 0, s = o.length;
                r < s;
                r++
              )
                Rn(o[r], a[r]);
            else Rn(e, l);
          return (
            (a = ge(l, "script")),
            a.length > 0 && Qt(a, !f && ge(e, "script")),
            l
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, s = i.event.special, o = 0;
            (n = e[o]) !== void 0;
            o++
          )
            if (pt(n)) {
              if ((t = n[D.expando])) {
                if (t.events)
                  for (r in t.events)
                    s[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
                n[D.expando] = void 0;
              }
              n[he.expando] && (n[he.expando] = void 0);
            }
        },
      }),
        i.fn.extend({
          detach: function (e) {
            return Hn(this, e, !0);
          },
          remove: function (e) {
            return Hn(this, e);
          },
          text: function (e) {
            return Re(
              this,
              function (t) {
                return t === void 0
                  ? i.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = t);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return st(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = In(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return st(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = In(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return st(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return st(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; (e = this[t]) != null; t++)
              e.nodeType === 1 &&
                (i.cleanData(ge(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = e ?? !1),
              (t = t ?? e),
              this.map(function () {
                return i.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return Re(
              this,
              function (t) {
                var n = this[0] || {},
                  r = 0,
                  s = this.length;
                if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                if (
                  typeof t == "string" &&
                  !Wr.test(t) &&
                  !we[(Ln.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = i.htmlPrefilter(t);
                  try {
                    for (; r < s; r++)
                      (n = this[r] || {}),
                        n.nodeType === 1 &&
                          (i.cleanData(ge(n, !1)), (n.innerHTML = t));
                    n = 0;
                  } catch {}
                }
                n && this.empty().append(t);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return st(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                i.inArray(this, e) < 0 &&
                  (i.cleanData(ge(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        i.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            i.fn[e] = function (n) {
              for (
                var r, s = [], o = i(n), a = o.length - 1, l = 0;
                l <= a;
                l++
              )
                (r = l === a ? this : this.clone(!0)),
                  i(o[l])[t](r),
                  ie.apply(s, r.get());
              return this.pushStack(s);
            };
          }
        );
      var Kt = new RegExp("^(" + Dn + ")(?!px)[a-z%]+$", "i"),
        Zt = /^--/,
        Ht = function (e) {
          var t = e.ownerDocument.defaultView;
          return (!t || !t.opener) && (t = x), t.getComputedStyle(e);
        },
        _n = function (e, t, n) {
          var r,
            s,
            o = {};
          for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
          r = n.call(e);
          for (s in t) e.style[s] = o[s];
          return r;
        },
        Xr = new RegExp(He.join("|"), "i");
      (function () {
        function e() {
          if (d) {
            (f.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (d.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ze.appendChild(f).appendChild(d);
            var m = x.getComputedStyle(d);
            (n = m.top !== "1%"),
              (l = t(m.marginLeft) === 12),
              (d.style.right = "60%"),
              (o = t(m.right) === 36),
              (r = t(m.width) === 36),
              (d.style.position = "absolute"),
              (s = t(d.offsetWidth / 3) === 12),
              ze.removeChild(f),
              (d = null);
          }
        }
        function t(m) {
          return Math.round(parseFloat(m));
        }
        var n,
          r,
          s,
          o,
          a,
          l,
          f = M.createElement("div"),
          d = M.createElement("div");
        d.style &&
          ((d.style.backgroundClip = "content-box"),
          (d.cloneNode(!0).style.backgroundClip = ""),
          (R.clearCloneStyle = d.style.backgroundClip === "content-box"),
          i.extend(R, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), o;
            },
            pixelPosition: function () {
              return e(), n;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), s;
            },
            reliableTrDimensions: function () {
              var m, v, h, b;
              return (
                a == null &&
                  ((m = M.createElement("table")),
                  (v = M.createElement("tr")),
                  (h = M.createElement("div")),
                  (m.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (v.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (v.style.height = "1px"),
                  (h.style.height = "9px"),
                  (h.style.display = "block"),
                  ze.appendChild(m).appendChild(v).appendChild(h),
                  (b = x.getComputedStyle(v)),
                  (a =
                    parseInt(b.height, 10) +
                      parseInt(b.borderTopWidth, 10) +
                      parseInt(b.borderBottomWidth, 10) ===
                    v.offsetHeight),
                  ze.removeChild(m)),
                a
              );
            },
          }));
      })();
      function yt(e, t, n) {
        var r,
          s,
          o,
          a,
          l = Zt.test(t),
          f = e.style;
        return (
          (n = n || Ht(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            l && a && (a = a.replace(ae, "$1") || void 0),
            a === "" && !tt(e) && (a = i.style(e, t)),
            !R.pixelBoxStyles() &&
              Kt.test(a) &&
              Xr.test(t) &&
              ((r = f.width),
              (s = f.minWidth),
              (o = f.maxWidth),
              (f.minWidth = f.maxWidth = f.width = a),
              (a = n.width),
              (f.width = r),
              (f.minWidth = s),
              (f.maxWidth = o))),
          a !== void 0 ? a + "" : a
        );
      }
      function Fn(e, t) {
        return {
          get: function () {
            if (e()) {
              delete this.get;
              return;
            }
            return (this.get = t).apply(this, arguments);
          },
        };
      }
      var Wn = ["Webkit", "Moz", "ms"],
        $n = M.createElement("div").style,
        Bn = {};
      function Gr(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Wn.length; n--; )
          if (((e = Wn[n] + t), e in $n)) return e;
      }
      function en(e) {
        var t = i.cssProps[e] || Bn[e];
        return t || (e in $n ? e : (Bn[e] = Gr(e) || e));
      }
      var Yr = /^(none|table(?!-c[ea]).+)/,
        Qr = { position: "absolute", visibility: "hidden", display: "block" },
        Un = { letterSpacing: "0", fontWeight: "400" };
      function Vn(e, t, n) {
        var r = gt.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function tn(e, t, n, r, s, o) {
        var a = t === "width" ? 1 : 0,
          l = 0,
          f = 0,
          d = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          n === "margin" && (d += i.css(e, n + He[a], !0, s)),
            r
              ? (n === "content" && (f -= i.css(e, "padding" + He[a], !0, s)),
                n !== "margin" &&
                  (f -= i.css(e, "border" + He[a] + "Width", !0, s)))
              : ((f += i.css(e, "padding" + He[a], !0, s)),
                n !== "padding"
                  ? (f += i.css(e, "border" + He[a] + "Width", !0, s))
                  : (l += i.css(e, "border" + He[a] + "Width", !0, s)));
        return (
          !r &&
            o >= 0 &&
            (f +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    f -
                    l -
                    0.5
                )
              ) || 0),
          f + d
        );
      }
      function zn(e, t, n) {
        var r = Ht(e),
          s = !R.boxSizingReliable() || n,
          o = s && i.css(e, "boxSizing", !1, r) === "border-box",
          a = o,
          l = yt(e, t, r),
          f = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Kt.test(l)) {
          if (!n) return l;
          l = "auto";
        }
        return (
          ((!R.boxSizingReliable() && o) ||
            (!R.reliableTrDimensions() && w(e, "tr")) ||
            l === "auto" ||
            (!parseFloat(l) && i.css(e, "display", !1, r) === "inline")) &&
            e.getClientRects().length &&
            ((o = i.css(e, "boxSizing", !1, r) === "border-box"),
            (a = f in e),
            a && (l = e[f])),
          (l = parseFloat(l) || 0),
          l + tn(e, t, n || (o ? "border" : "content"), a, r, l) + "px"
        );
      }
      i.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = yt(e, "opacity");
                return n === "" ? "1" : n;
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
        style: function (e, t, n, r) {
          if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
            var s,
              o,
              a,
              l = je(t),
              f = Zt.test(t),
              d = e.style;
            if (
              (f || (t = en(l)),
              (a = i.cssHooks[t] || i.cssHooks[l]),
              n !== void 0)
            ) {
              if (
                ((o = typeof n),
                o === "string" &&
                  (s = gt.exec(n)) &&
                  s[1] &&
                  ((n = jn(e, t, s)), (o = "number")),
                n == null || n !== n)
              )
                return;
              o === "number" &&
                !f &&
                (n += (s && s[3]) || (i.cssNumber[l] ? "" : "px")),
                !R.clearCloneStyle &&
                  n === "" &&
                  t.indexOf("background") === 0 &&
                  (d[t] = "inherit"),
                (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) &&
                  (f ? d.setProperty(t, n) : (d[t] = n));
            } else
              return a && "get" in a && (s = a.get(e, !1, r)) !== void 0
                ? s
                : d[t];
          }
        },
        css: function (e, t, n, r) {
          var s,
            o,
            a,
            l = je(t),
            f = Zt.test(t);
          return (
            f || (t = en(l)),
            (a = i.cssHooks[t] || i.cssHooks[l]),
            a && "get" in a && (s = a.get(e, !0, n)),
            s === void 0 && (s = yt(e, t, r)),
            s === "normal" && t in Un && (s = Un[t]),
            n === "" || n
              ? ((o = parseFloat(s)), n === !0 || isFinite(o) ? o || 0 : s)
              : s
          );
        },
      }),
        i.each(["height", "width"], function (e, t) {
          i.cssHooks[t] = {
            get: function (n, r, s) {
              if (r)
                return Yr.test(i.css(n, "display")) &&
                  (!n.getClientRects().length ||
                    !n.getBoundingClientRect().width)
                  ? _n(n, Qr, function () {
                      return zn(n, t, s);
                    })
                  : zn(n, t, s);
            },
            set: function (n, r, s) {
              var o,
                a = Ht(n),
                l = !R.scrollboxSize() && a.position === "absolute",
                f = l || s,
                d = f && i.css(n, "boxSizing", !1, a) === "border-box",
                m = s ? tn(n, t, s, d, a) : 0;
              return (
                d &&
                  l &&
                  (m -= Math.ceil(
                    n["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(a[t]) -
                      tn(n, t, "border", !1, a) -
                      0.5
                  )),
                m &&
                  (o = gt.exec(r)) &&
                  (o[3] || "px") !== "px" &&
                  ((n.style[t] = r), (r = i.css(n, t))),
                Vn(n, r, m)
              );
            },
          };
        }),
        (i.cssHooks.marginLeft = Fn(R.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(yt(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  _n(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        i.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (i.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  s = {},
                  o = typeof n == "string" ? n.split(" ") : [n];
                r < 4;
                r++
              )
                s[e + He[r] + t] = o[r] || o[r - 2] || o[0];
              return s;
            },
          }),
            e !== "margin" && (i.cssHooks[e + t].set = Vn);
        }),
        i.fn.extend({
          css: function (e, t) {
            return Re(
              this,
              function (n, r, s) {
                var o,
                  a,
                  l = {},
                  f = 0;
                if (Array.isArray(r)) {
                  for (o = Ht(n), a = r.length; f < a; f++)
                    l[r[f]] = i.css(n, r[f], !1, o);
                  return l;
                }
                return s !== void 0 ? i.style(n, r, s) : i.css(n, r);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        });
      function me(e, t, n, r, s) {
        return new me.prototype.init(e, t, n, r, s);
      }
      (i.Tween = me),
        (me.prototype = {
          constructor: me,
          init: function (e, t, n, r, s, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = s || i.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (i.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = me.propHooks[this.prop];
            return e && e.get ? e.get(this) : me.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = me.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    i.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : me.propHooks._default.set(this),
              this
            );
          },
        }),
        (me.prototype.init.prototype = me.prototype),
        (me.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return e.elem.nodeType !== 1 ||
                (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                ? e.elem[e.prop]
                : ((t = i.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
            },
            set: function (e) {
              i.fx.step[e.prop]
                ? i.fx.step[e.prop](e)
                : e.elem.nodeType === 1 &&
                  (i.cssHooks[e.prop] || e.elem.style[en(e.prop)] != null)
                ? i.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        (me.propHooks.scrollTop = me.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (i.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (i.fx = me.prototype.init),
        (i.fx.step = {});
      var ot,
        _t,
        Jr = /^(?:toggle|show|hide)$/,
        Kr = /queueHooks$/;
      function nn() {
        _t &&
          (M.hidden === !1 && x.requestAnimationFrame
            ? x.requestAnimationFrame(nn)
            : x.setTimeout(nn, i.fx.interval),
          i.fx.tick());
      }
      function Xn() {
        return (
          x.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function Ft(e, t) {
        var n,
          r = 0,
          s = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          (n = He[r]), (s["margin" + n] = s["padding" + n] = e);
        return t && (s.opacity = s.width = e), s;
      }
      function Gn(e, t, n) {
        for (
          var r,
            s = (Ee.tweeners[t] || []).concat(Ee.tweeners["*"]),
            o = 0,
            a = s.length;
          o < a;
          o++
        )
          if ((r = s[o].call(n, t, e))) return r;
      }
      function Zr(e, t, n) {
        var r,
          s,
          o,
          a,
          l,
          f,
          d,
          m,
          v = "width" in t || "height" in t,
          h = this,
          b = {},
          q = e.style,
          z = e.nodeType && It(e),
          _ = D.get(e, "fxshow");
        n.queue ||
          ((a = i._queueHooks(e, "fx")),
          a.unqueued == null &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l();
            })),
          a.unqueued++,
          h.always(function () {
            h.always(function () {
              a.unqueued--, i.queue(e, "fx").length || a.empty.fire();
            });
          }));
        for (r in t)
          if (((s = t[r]), Jr.test(s))) {
            if (
              (delete t[r],
              (o = o || s === "toggle"),
              s === (z ? "hide" : "show"))
            )
              if (s === "show" && _ && _[r] !== void 0) z = !0;
              else continue;
            b[r] = (_ && _[r]) || i.style(e, r);
          }
        if (((f = !i.isEmptyObject(t)), !(!f && i.isEmptyObject(b)))) {
          v &&
            e.nodeType === 1 &&
            ((n.overflow = [q.overflow, q.overflowX, q.overflowY]),
            (d = _ && _.display),
            d == null && (d = D.get(e, "display")),
            (m = i.css(e, "display")),
            m === "none" &&
              (d
                ? (m = d)
                : (nt([e], !0),
                  (d = e.style.display || d),
                  (m = i.css(e, "display")),
                  nt([e]))),
            (m === "inline" || (m === "inline-block" && d != null)) &&
              i.css(e, "float") === "none" &&
              (f ||
                (h.done(function () {
                  q.display = d;
                }),
                d == null && ((m = q.display), (d = m === "none" ? "" : m))),
              (q.display = "inline-block"))),
            n.overflow &&
              ((q.overflow = "hidden"),
              h.always(function () {
                (q.overflow = n.overflow[0]),
                  (q.overflowX = n.overflow[1]),
                  (q.overflowY = n.overflow[2]);
              })),
            (f = !1);
          for (r in b)
            f ||
              (_
                ? "hidden" in _ && (z = _.hidden)
                : (_ = D.access(e, "fxshow", { display: d })),
              o && (_.hidden = !z),
              z && nt([e], !0),
              h.done(function () {
                z || nt([e]), D.remove(e, "fxshow");
                for (r in b) i.style(e, r, b[r]);
              })),
              (f = Gn(z ? _[r] : 0, r, h)),
              r in _ ||
                ((_[r] = f.start), z && ((f.end = f.start), (f.start = 0)));
        }
      }
      function ei(e, t) {
        var n, r, s, o, a;
        for (n in e)
          if (
            ((r = je(n)),
            (s = t[r]),
            (o = e[n]),
            Array.isArray(o) && ((s = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = i.cssHooks[r]),
            a && "expand" in a)
          ) {
            (o = a.expand(o)), delete e[r];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = s));
          } else t[r] = s;
      }
      function Ee(e, t, n) {
        var r,
          s,
          o = 0,
          a = Ee.prefilters.length,
          l = i.Deferred().always(function () {
            delete f.elem;
          }),
          f = function () {
            if (s) return !1;
            for (
              var v = ot || Xn(),
                h = Math.max(0, d.startTime + d.duration - v),
                b = h / d.duration || 0,
                q = 1 - b,
                z = 0,
                _ = d.tweens.length;
              z < _;
              z++
            )
              d.tweens[z].run(q);
            return (
              l.notifyWith(e, [d, q, h]),
              q < 1 && _
                ? h
                : (_ || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
            );
          },
          d = l.promise({
            elem: e,
            props: i.extend({}, t),
            opts: i.extend(
              !0,
              { specialEasing: {}, easing: i.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || Xn(),
            duration: n.duration,
            tweens: [],
            createTween: function (v, h) {
              var b = i.Tween(
                e,
                d.opts,
                v,
                h,
                d.opts.specialEasing[v] || d.opts.easing
              );
              return d.tweens.push(b), b;
            },
            stop: function (v) {
              var h = 0,
                b = v ? d.tweens.length : 0;
              if (s) return this;
              for (s = !0; h < b; h++) d.tweens[h].run(1);
              return (
                v
                  ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, v]))
                  : l.rejectWith(e, [d, v]),
                this
              );
            },
          }),
          m = d.props;
        for (ei(m, d.opts.specialEasing); o < a; o++)
          if (((r = Ee.prefilters[o].call(d, e, m, d.opts)), r))
            return (
              O(r.stop) &&
                (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          i.map(m, Gn, d),
          O(d.opts.start) && d.opts.start.call(e, d),
          d
            .progress(d.opts.progress)
            .done(d.opts.done, d.opts.complete)
            .fail(d.opts.fail)
            .always(d.opts.always),
          i.fx.timer(i.extend(f, { elem: e, anim: d, queue: d.opts.queue })),
          d
        );
      }
      (i.Animation = i.extend(Ee, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return jn(n.elem, e, gt.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          O(e) ? ((t = e), (e = ["*"])) : (e = e.match(De));
          for (var n, r = 0, s = e.length; r < s; r++)
            (n = e[r]),
              (Ee.tweeners[n] = Ee.tweeners[n] || []),
              Ee.tweeners[n].unshift(t);
        },
        prefilters: [Zr],
        prefilter: function (e, t) {
          t ? Ee.prefilters.unshift(e) : Ee.prefilters.push(e);
        },
      })),
        (i.speed = function (e, t, n) {
          var r =
            e && typeof e == "object"
              ? i.extend({}, e)
              : {
                  complete: n || (!n && t) || (O(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !O(t) && t),
                };
          return (
            i.fx.off
              ? (r.duration = 0)
              : typeof r.duration != "number" &&
                (r.duration in i.fx.speeds
                  ? (r.duration = i.fx.speeds[r.duration])
                  : (r.duration = i.fx.speeds._default)),
            (r.queue == null || r.queue === !0) && (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              O(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
            }),
            r
          );
        }),
        i.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(It)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var s = i.isEmptyObject(e),
              o = i.speed(t, n, r),
              a = function () {
                var l = Ee(this, i.extend({}, e), o);
                (s || D.get(this, "finish")) && l.stop(!0);
              };
            return (
              (a.finish = a),
              s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (s) {
              var o = s.stop;
              delete s.stop, o(n);
            };
            return (
              typeof e != "string" && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var s = !0,
                  o = e != null && e + "queueHooks",
                  a = i.timers,
                  l = D.get(this);
                if (o) l[o] && l[o].stop && r(l[o]);
                else for (o in l) l[o] && l[o].stop && Kr.test(o) && r(l[o]);
                for (o = a.length; o--; )
                  a[o].elem === this &&
                    (e == null || a[o].queue === e) &&
                    (a[o].anim.stop(n), (s = !1), a.splice(o, 1));
                (s || !n) && i.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              e !== !1 && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = D.get(this),
                  r = n[e + "queue"],
                  s = n[e + "queueHooks"],
                  o = i.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    i.queue(this, e, []),
                    s && s.stop && s.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        i.each(["toggle", "show", "hide"], function (e, t) {
          var n = i.fn[t];
          i.fn[t] = function (r, s, o) {
            return r == null || typeof r == "boolean"
              ? n.apply(this, arguments)
              : this.animate(Ft(t, !0), r, s, o);
          };
        }),
        i.each(
          {
            slideDown: Ft("show"),
            slideUp: Ft("hide"),
            slideToggle: Ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            i.fn[e] = function (n, r, s) {
              return this.animate(t, n, r, s);
            };
          }
        ),
        (i.timers = []),
        (i.fx.tick = function () {
          var e,
            t = 0,
            n = i.timers;
          for (ot = Date.now(); t < n.length; t++)
            (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
          n.length || i.fx.stop(), (ot = void 0);
        }),
        (i.fx.timer = function (e) {
          i.timers.push(e), i.fx.start();
        }),
        (i.fx.interval = 13),
        (i.fx.start = function () {
          _t || ((_t = !0), nn());
        }),
        (i.fx.stop = function () {
          _t = null;
        }),
        (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (i.fn.delay = function (e, t) {
          return (
            (e = (i.fx && i.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (n, r) {
              var s = x.setTimeout(n, e);
              r.stop = function () {
                x.clearTimeout(s);
              };
            })
          );
        }),
        (function () {
          var e = M.createElement("input"),
            t = M.createElement("select"),
            n = t.appendChild(M.createElement("option"));
          (e.type = "checkbox"),
            (R.checkOn = e.value !== ""),
            (R.optSelected = n.selected),
            (e = M.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (R.radioValue = e.value === "t");
        })();
      var Yn,
        vt = i.expr.attrHandle;
      i.fn.extend({
        attr: function (e, t) {
          return Re(this, i.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            i.removeAttr(this, e);
          });
        },
      }),
        i.extend({
          attr: function (e, t, n) {
            var r,
              s,
              o = e.nodeType;
            if (!(o === 3 || o === 8 || o === 2)) {
              if (typeof e.getAttribute > "u") return i.prop(e, t, n);
              if (
                ((o !== 1 || !i.isXMLDoc(e)) &&
                  (s =
                    i.attrHooks[t.toLowerCase()] ||
                    (i.expr.match.bool.test(t) ? Yn : void 0)),
                n !== void 0)
              ) {
                if (n === null) {
                  i.removeAttr(e, t);
                  return;
                }
                return s && "set" in s && (r = s.set(e, n, t)) !== void 0
                  ? r
                  : (e.setAttribute(t, n + ""), n);
              }
              return s && "get" in s && (r = s.get(e, t)) !== null
                ? r
                : ((r = i.find.attr(e, t)), r ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!R.radioValue && t === "radio" && w(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              s = t && t.match(De);
            if (s && e.nodeType === 1)
              for (; (n = s[r++]); ) e.removeAttribute(n);
          },
        }),
        (Yn = {
          set: function (e, t, n) {
            return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = vt[t] || i.find.attr;
          vt[t] = function (r, s, o) {
            var a,
              l,
              f = s.toLowerCase();
            return (
              o ||
                ((l = vt[f]),
                (vt[f] = a),
                (a = n(r, s, o) != null ? f : null),
                (vt[f] = l)),
              a
            );
          };
        });
      var ti = /^(?:input|select|textarea|button)$/i,
        ni = /^(?:a|area)$/i;
      i.fn.extend({
        prop: function (e, t) {
          return Re(this, i.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[i.propFix[e] || e];
          });
        },
      }),
        i.extend({
          prop: function (e, t, n) {
            var r,
              s,
              o = e.nodeType;
            if (!(o === 3 || o === 8 || o === 2))
              return (
                (o !== 1 || !i.isXMLDoc(e)) &&
                  ((t = i.propFix[t] || t), (s = i.propHooks[t])),
                n !== void 0
                  ? s && "set" in s && (r = s.set(e, n, t)) !== void 0
                    ? r
                    : (e[t] = n)
                  : s && "get" in s && (r = s.get(e, t)) !== null
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = i.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ti.test(e.nodeName) || (ni.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        R.optSelected ||
          (i.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        i.each(
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
            i.propFix[this.toLowerCase()] = this;
          }
        );
      function Xe(e) {
        var t = e.match(De) || [];
        return t.join(" ");
      }
      function Ge(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function rn(e) {
        return Array.isArray(e)
          ? e
          : typeof e == "string"
          ? e.match(De) || []
          : [];
      }
      i.fn.extend({
        addClass: function (e) {
          var t, n, r, s, o, a;
          return O(e)
            ? this.each(function (l) {
                i(this).addClass(e.call(this, l, Ge(this)));
              })
            : ((t = rn(e)),
              t.length
                ? this.each(function () {
                    if (
                      ((r = Ge(this)),
                      (n = this.nodeType === 1 && " " + Xe(r) + " "),
                      n)
                    ) {
                      for (o = 0; o < t.length; o++)
                        (s = t[o]),
                          n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                      (a = Xe(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                : this);
        },
        removeClass: function (e) {
          var t, n, r, s, o, a;
          return O(e)
            ? this.each(function (l) {
                i(this).removeClass(e.call(this, l, Ge(this)));
              })
            : arguments.length
            ? ((t = rn(e)),
              t.length
                ? this.each(function () {
                    if (
                      ((r = Ge(this)),
                      (n = this.nodeType === 1 && " " + Xe(r) + " "),
                      n)
                    ) {
                      for (o = 0; o < t.length; o++)
                        for (s = t[o]; n.indexOf(" " + s + " ") > -1; )
                          n = n.replace(" " + s + " ", " ");
                      (a = Xe(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                : this)
            : this.attr("class", "");
        },
        toggleClass: function (e, t) {
          var n,
            r,
            s,
            o,
            a = typeof e,
            l = a === "string" || Array.isArray(e);
          return O(e)
            ? this.each(function (f) {
                i(this).toggleClass(e.call(this, f, Ge(this), t), t);
              })
            : typeof t == "boolean" && l
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ((n = rn(e)),
              this.each(function () {
                if (l)
                  for (o = i(this), s = 0; s < n.length; s++)
                    (r = n[s]),
                      o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (e === void 0 || a === "boolean") &&
                    ((r = Ge(this)),
                    r && D.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || e === !1 ? "" : D.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          for (t = " " + e + " "; (n = this[r++]); )
            if (n.nodeType === 1 && (" " + Xe(Ge(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
      var ri = /\r/g;
      i.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            s = this[0];
          return arguments.length
            ? ((r = O(e)),
              this.each(function (o) {
                var a;
                this.nodeType === 1 &&
                  (r ? (a = e.call(this, o, i(this).val())) : (a = e),
                  a == null
                    ? (a = "")
                    : typeof a == "number"
                    ? (a += "")
                    : Array.isArray(a) &&
                      (a = i.map(a, function (l) {
                        return l == null ? "" : l + "";
                      })),
                  (t =
                    i.valHooks[this.type] ||
                    i.valHooks[this.nodeName.toLowerCase()]),
                  (!t || !("set" in t) || t.set(this, a, "value") === void 0) &&
                    (this.value = a));
              }))
            : s
            ? ((t = i.valHooks[s.type] || i.valHooks[s.nodeName.toLowerCase()]),
              t && "get" in t && (n = t.get(s, "value")) !== void 0
                ? n
                : ((n = s.value),
                  typeof n == "string" ? n.replace(ri, "") : n ?? ""))
            : void 0;
        },
      }),
        i.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = i.find.attr(e, "value");
                return t ?? Xe(i.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  s = e.options,
                  o = e.selectedIndex,
                  a = e.type === "select-one",
                  l = a ? null : [],
                  f = a ? o + 1 : s.length;
                for (o < 0 ? (r = f) : (r = a ? o : 0); r < f; r++)
                  if (
                    ((n = s[r]),
                    (n.selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !w(n.parentNode, "optgroup")))
                  ) {
                    if (((t = i(n).val()), a)) return t;
                    l.push(t);
                  }
                return l;
              },
              set: function (e, t) {
                for (
                  var n, r, s = e.options, o = i.makeArray(t), a = s.length;
                  a--;

                )
                  (r = s[a]),
                    (r.selected =
                      i.inArray(i.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        i.each(["radio", "checkbox"], function () {
          (i.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = i.inArray(i(e).val(), t) > -1);
            },
          }),
            R.checkOn ||
              (i.valHooks[this].get = function (e) {
                return e.getAttribute("value") === null ? "on" : e.value;
              });
        });
      var xt = x.location,
        Qn = { guid: Date.now() },
        sn = /\?/;
      i.parseXML = function (e) {
        var t, n;
        if (!e || typeof e != "string") return null;
        try {
          t = new x.DOMParser().parseFromString(e, "text/xml");
        } catch {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (!t || n) &&
            i.error(
              "Invalid XML: " +
                (n
                  ? i.map(n.childNodes, function (r) {
                      return r.textContent;
                    }).join(`
`)
                  : e)
            ),
          t
        );
      };
      var Jn = /^(?:focusinfocus|focusoutblur)$/,
        Kn = function (e) {
          e.stopPropagation();
        };
      i.extend(i.event, {
        trigger: function (e, t, n, r) {
          var s,
            o,
            a,
            l,
            f,
            d,
            m,
            v,
            h = [n || M],
            b = be.call(e, "type") ? e.type : e,
            q = be.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((o = v = a = n = n || M),
            !(n.nodeType === 3 || n.nodeType === 8) &&
              !Jn.test(b + i.event.triggered) &&
              (b.indexOf(".") > -1 &&
                ((q = b.split(".")), (b = q.shift()), q.sort()),
              (f = b.indexOf(":") < 0 && "on" + b),
              (e = e[i.expando]
                ? e
                : new i.Event(b, typeof e == "object" && e)),
              (e.isTrigger = r ? 2 : 3),
              (e.namespace = q.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = n),
              (t = t == null ? [e] : i.makeArray(t, [e])),
              (m = i.event.special[b] || {}),
              !(!r && m.trigger && m.trigger.apply(n, t) === !1)))
          ) {
            if (!r && !m.noBubble && !Se(n)) {
              for (
                l = m.delegateType || b, Jn.test(l + b) || (o = o.parentNode);
                o;
                o = o.parentNode
              )
                h.push(o), (a = o);
              a === (n.ownerDocument || M) &&
                h.push(a.defaultView || a.parentWindow || x);
            }
            for (s = 0; (o = h[s++]) && !e.isPropagationStopped(); )
              (v = o),
                (e.type = s > 1 ? l : m.bindType || b),
                (d =
                  (D.get(o, "events") || Object.create(null))[e.type] &&
                  D.get(o, "handle")),
                d && d.apply(o, t),
                (d = f && o[f]),
                d &&
                  d.apply &&
                  pt(o) &&
                  ((e.result = d.apply(o, t)),
                  e.result === !1 && e.preventDefault());
            return (
              (e.type = b),
              !r &&
                !e.isDefaultPrevented() &&
                (!m._default || m._default.apply(h.pop(), t) === !1) &&
                pt(n) &&
                f &&
                O(n[b]) &&
                !Se(n) &&
                ((a = n[f]),
                a && (n[f] = null),
                (i.event.triggered = b),
                e.isPropagationStopped() && v.addEventListener(b, Kn),
                n[b](),
                e.isPropagationStopped() && v.removeEventListener(b, Kn),
                (i.event.triggered = void 0),
                a && (n[f] = a)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
          i.event.trigger(r, null, t);
        },
      }),
        i.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              i.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return i.event.trigger(e, t, n, !0);
          },
        });
      var ii = /\[\]$/,
        Zn = /\r?\n/g,
        si = /^(?:submit|button|image|reset|file)$/i,
        oi = /^(?:input|select|textarea|keygen)/i;
      function on(e, t, n, r) {
        var s;
        if (Array.isArray(t))
          i.each(t, function (o, a) {
            n || ii.test(e)
              ? r(e, a)
              : on(
                  e + "[" + (typeof a == "object" && a != null ? o : "") + "]",
                  a,
                  n,
                  r
                );
          });
        else if (!n && We(t) === "object")
          for (s in t) on(e + "[" + s + "]", t[s], n, r);
        else r(e, t);
      }
      (i.param = function (e, t) {
        var n,
          r = [],
          s = function (o, a) {
            var l = O(a) ? a() : a;
            r[r.length] =
              encodeURIComponent(o) + "=" + encodeURIComponent(l ?? "");
          };
        if (e == null) return "";
        if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
          i.each(e, function () {
            s(this.name, this.value);
          });
        else for (n in e) on(n, e[n], t, s);
        return r.join("&");
      }),
        i.fn.extend({
          serialize: function () {
            return i.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = i.prop(this, "elements");
              return e ? i.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !i(this).is(":disabled") &&
                  oi.test(this.nodeName) &&
                  !si.test(e) &&
                  (this.checked || !mt.test(e))
                );
              })
              .map(function (e, t) {
                var n = i(this).val();
                return n == null
                  ? null
                  : Array.isArray(n)
                  ? i.map(n, function (r) {
                      return {
                        name: t.name,
                        value: r.replace(
                          Zn,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(
                        Zn,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var ai = /%20/g,
        ui = /#.*$/,
        fi = /([?&])_=[^&]*/,
        li = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ci = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        di = /^(?:GET|HEAD)$/,
        pi = /^\/\//,
        er = {},
        an = {},
        tr = "*/".concat("*"),
        un = M.createElement("a");
      un.href = xt.href;
      function nr(e) {
        return function (t, n) {
          typeof t != "string" && ((n = t), (t = "*"));
          var r,
            s = 0,
            o = t.toLowerCase().match(De) || [];
          if (O(n))
            for (; (r = o[s++]); )
              r[0] === "+"
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function rr(e, t, n, r) {
        var s = {},
          o = e === an;
        function a(l) {
          var f;
          return (
            (s[l] = !0),
            i.each(e[l] || [], function (d, m) {
              var v = m(t, n, r);
              if (typeof v == "string" && !o && !s[v])
                return t.dataTypes.unshift(v), a(v), !1;
              if (o) return !(f = v);
            }),
            f
          );
        }
        return a(t.dataTypes[0]) || (!s["*"] && a("*"));
      }
      function fn(e, t) {
        var n,
          r,
          s = i.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== void 0 && ((s[n] ? e : r || (r = {}))[n] = t[n]);
        return r && i.extend(!0, e, r), e;
      }
      function hi(e, t, n) {
        for (var r, s, o, a, l = e.contents, f = e.dataTypes; f[0] === "*"; )
          f.shift(),
            r === void 0 &&
              (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) {
          for (s in l)
            if (l[s] && l[s].test(r)) {
              f.unshift(s);
              break;
            }
        }
        if (f[0] in n) o = f[0];
        else {
          for (s in n) {
            if (!f[0] || e.converters[s + " " + f[0]]) {
              o = s;
              break;
            }
            a || (a = s);
          }
          o = o || a;
        }
        if (o) return o !== f[0] && f.unshift(o), n[o];
      }
      function gi(e, t, n, r) {
        var s,
          o,
          a,
          l,
          f,
          d = {},
          m = e.dataTypes.slice();
        if (m[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
        for (o = m.shift(); o; )
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (f = o),
            (o = m.shift()),
            o)
          ) {
            if (o === "*") o = f;
            else if (f !== "*" && f !== o) {
              if (((a = d[f + " " + o] || d["* " + o]), !a)) {
                for (s in d)
                  if (
                    ((l = s.split(" ")),
                    l[1] === o &&
                      ((a = d[f + " " + l[0]] || d["* " + l[0]]), a))
                  ) {
                    a === !0
                      ? (a = d[s])
                      : d[s] !== !0 && ((o = l[0]), m.unshift(l[1]));
                    break;
                  }
              }
              if (a !== !0)
                if (a && e.throws) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (v) {
                    return {
                      state: "parsererror",
                      error: a ? v : "No conversion from " + f + " to " + o,
                    };
                  }
            }
          }
        return { state: "success", data: t };
      }
      i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: xt.href,
          type: "GET",
          isLocal: ci.test(xt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": tr,
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
            "text xml": i.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? fn(fn(e, i.ajaxSettings), t) : fn(i.ajaxSettings, e);
        },
        ajaxPrefilter: nr(er),
        ajaxTransport: nr(an),
        ajax: function (e, t) {
          typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
          var n,
            r,
            s,
            o,
            a,
            l,
            f,
            d,
            m,
            v,
            h = i.ajaxSetup({}, t),
            b = h.context || h,
            q = h.context && (b.nodeType || b.jquery) ? i(b) : i.event,
            z = i.Deferred(),
            _ = i.Callbacks("once memory"),
            fe = h.statusCode || {},
            oe = {},
            Pe = {},
            Le = "canceled",
            B = {
              readyState: 0,
              getResponseHeader: function (X) {
                var ne;
                if (f) {
                  if (!o)
                    for (o = {}; (ne = li.exec(s)); )
                      o[ne[1].toLowerCase() + " "] = (
                        o[ne[1].toLowerCase() + " "] || []
                      ).concat(ne[2]);
                  ne = o[X.toLowerCase() + " "];
                }
                return ne == null ? null : ne.join(", ");
              },
              getAllResponseHeaders: function () {
                return f ? s : null;
              },
              setRequestHeader: function (X, ne) {
                return (
                  f == null &&
                    ((X = Pe[X.toLowerCase()] = Pe[X.toLowerCase()] || X),
                    (oe[X] = ne)),
                  this
                );
              },
              overrideMimeType: function (X) {
                return f == null && (h.mimeType = X), this;
              },
              statusCode: function (X) {
                var ne;
                if (X)
                  if (f) B.always(X[B.status]);
                  else for (ne in X) fe[ne] = [fe[ne], X[ne]];
                return this;
              },
              abort: function (X) {
                var ne = X || Le;
                return n && n.abort(ne), Ye(0, ne), this;
              },
            };
          if (
            (z.promise(B),
            (h.url = ((e || h.url || xt.href) + "").replace(
              pi,
              xt.protocol + "//"
            )),
            (h.type = t.method || t.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""]),
            h.crossDomain == null)
          ) {
            l = M.createElement("a");
            try {
              (l.href = h.url),
                (l.href = l.href),
                (h.crossDomain =
                  un.protocol + "//" + un.host != l.protocol + "//" + l.host);
            } catch {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              typeof h.data != "string" &&
              (h.data = i.param(h.data, h.traditional)),
            rr(er, h, t, B),
            f)
          )
            return B;
          (d = i.event && h.global),
            d && i.active++ === 0 && i.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !di.test(h.type)),
            (r = h.url.replace(ui, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (h.data = h.data.replace(ai, "+"))
              : ((v = h.url.slice(r.length)),
                h.data &&
                  (h.processData || typeof h.data == "string") &&
                  ((r += (sn.test(r) ? "&" : "?") + h.data), delete h.data),
                h.cache === !1 &&
                  ((r = r.replace(fi, "$1")),
                  (v = (sn.test(r) ? "&" : "?") + "_=" + Qn.guid++ + v)),
                (h.url = r + v)),
            h.ifModified &&
              (i.lastModified[r] &&
                B.setRequestHeader("If-Modified-Since", i.lastModified[r]),
              i.etag[r] && B.setRequestHeader("If-None-Match", i.etag[r])),
            ((h.data && h.hasContent && h.contentType !== !1) ||
              t.contentType) &&
              B.setRequestHeader("Content-Type", h.contentType),
            B.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    (h.dataTypes[0] !== "*" ? ", " + tr + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (m in h.headers) B.setRequestHeader(m, h.headers[m]);
          if (h.beforeSend && (h.beforeSend.call(b, B, h) === !1 || f))
            return B.abort();
          if (
            ((Le = "abort"),
            _.add(h.complete),
            B.done(h.success),
            B.fail(h.error),
            (n = rr(an, h, t, B)),
            !n)
          )
            Ye(-1, "No Transport");
          else {
            if (((B.readyState = 1), d && q.trigger("ajaxSend", [B, h]), f))
              return B;
            h.async &&
              h.timeout > 0 &&
              (a = x.setTimeout(function () {
                B.abort("timeout");
              }, h.timeout));
            try {
              (f = !1), n.send(oe, Ye);
            } catch (X) {
              if (f) throw X;
              Ye(-1, X);
            }
          }
          function Ye(X, ne, At, cn) {
            var Me,
              wt,
              Oe,
              $e,
              Be,
              Te = ne;
            f ||
              ((f = !0),
              a && x.clearTimeout(a),
              (n = void 0),
              (s = cn || ""),
              (B.readyState = X > 0 ? 4 : 0),
              (Me = (X >= 200 && X < 300) || X === 304),
              At && ($e = hi(h, B, At)),
              !Me &&
                i.inArray("script", h.dataTypes) > -1 &&
                i.inArray("json", h.dataTypes) < 0 &&
                (h.converters["text script"] = function () {}),
              ($e = gi(h, $e, B, Me)),
              Me
                ? (h.ifModified &&
                    ((Be = B.getResponseHeader("Last-Modified")),
                    Be && (i.lastModified[r] = Be),
                    (Be = B.getResponseHeader("etag")),
                    Be && (i.etag[r] = Be)),
                  X === 204 || h.type === "HEAD"
                    ? (Te = "nocontent")
                    : X === 304
                    ? (Te = "notmodified")
                    : ((Te = $e.state),
                      (wt = $e.data),
                      (Oe = $e.error),
                      (Me = !Oe)))
                : ((Oe = Te), (X || !Te) && ((Te = "error"), X < 0 && (X = 0))),
              (B.status = X),
              (B.statusText = (ne || Te) + ""),
              Me ? z.resolveWith(b, [wt, Te, B]) : z.rejectWith(b, [B, Te, Oe]),
              B.statusCode(fe),
              (fe = void 0),
              d &&
                q.trigger(Me ? "ajaxSuccess" : "ajaxError", [
                  B,
                  h,
                  Me ? wt : Oe,
                ]),
              _.fireWith(b, [B, Te]),
              d &&
                (q.trigger("ajaxComplete", [B, h]),
                --i.active || i.event.trigger("ajaxStop")));
          }
          return B;
        },
        getJSON: function (e, t, n) {
          return i.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return i.get(e, void 0, t, "script");
        },
      }),
        i.each(["get", "post"], function (e, t) {
          i[t] = function (n, r, s, o) {
            return (
              O(r) && ((o = o || s), (s = r), (r = void 0)),
              i.ajax(
                i.extend(
                  { url: n, type: t, dataType: o, data: r, success: s },
                  i.isPlainObject(n) && n
                )
              )
            );
          };
        }),
        i.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            t.toLowerCase() === "content-type" &&
              (e.contentType = e.headers[t] || "");
        }),
        (i._evalUrl = function (e, t, n) {
          return i.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (r) {
              i.globalEval(r, t, n);
            },
          });
        }),
        i.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (O(e) && (e = e.call(this[0])),
                (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var n = this; n.firstElementChild; )
                      n = n.firstElementChild;
                    return n;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return O(e)
              ? this.each(function (t) {
                  i(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = i(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = O(e);
            return this.each(function (n) {
              i(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  i(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (i.expr.pseudos.hidden = function (e) {
          return !i.expr.pseudos.visible(e);
        }),
        (i.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (i.ajaxSettings.xhr = function () {
          try {
            return new x.XMLHttpRequest();
          } catch {}
        });
      var mi = { 0: 200, 1223: 204 },
        bt = i.ajaxSettings.xhr();
      (R.cors = !!bt && "withCredentials" in bt),
        (R.ajax = bt = !!bt),
        i.ajaxTransport(function (e) {
          var t, n;
          if (R.cors || (bt && !e.crossDomain))
            return {
              send: function (r, s) {
                var o,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                  !e.crossDomain &&
                    !r["X-Requested-With"] &&
                    (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                (t = function (l) {
                  return function () {
                    t &&
                      ((t =
                        n =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      l === "abort"
                        ? a.abort()
                        : l === "error"
                        ? typeof a.status != "number"
                          ? s(0, "error")
                          : s(a.status, a.statusText)
                        : s(
                            mi[a.status] || a.status,
                            a.statusText,
                            (a.responseType || "text") !== "text" ||
                              typeof a.responseText != "string"
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (n = a.onerror = a.ontimeout = t("error")),
                  a.onabort !== void 0
                    ? (a.onabort = n)
                    : (a.onreadystatechange = function () {
                        a.readyState === 4 &&
                          x.setTimeout(function () {
                            t && n();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (l) {
                  if (t) throw l;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        i.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        i.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return i.globalEval(e), e;
            },
          },
        }),
        i.ajaxPrefilter("script", function (e) {
          e.cache === void 0 && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        i.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (r, s) {
                (t = i("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (o) {
                      t.remove(),
                        (n = null),
                        o && s(o.type === "error" ? 404 : 200, o.type);
                    })
                  )),
                  M.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var ir = [],
        ln = /(=)\?(?=&|$)|\?\?/;
      i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = ir.pop() || i.expando + "_" + Qn.guid++;
          return (this[e] = !0), e;
        },
      }),
        i.ajaxPrefilter("json jsonp", function (e, t, n) {
          var r,
            s,
            o,
            a =
              e.jsonp !== !1 &&
              (ln.test(e.url)
                ? "url"
                : typeof e.data == "string" &&
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  ln.test(e.data) &&
                  "data");
          if (a || e.dataTypes[0] === "jsonp")
            return (
              (r = e.jsonpCallback =
                O(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(ln, "$1" + r))
                : e.jsonp !== !1 &&
                  (e.url += (sn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return o || i.error(r + " was not called"), o[0];
              }),
              (e.dataTypes[0] = "json"),
              (s = x[r]),
              (x[r] = function () {
                o = arguments;
              }),
              n.always(function () {
                s === void 0 ? i(x).removeProp(r) : (x[r] = s),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), ir.push(r)),
                  o && O(s) && s(o[0]),
                  (o = s = void 0);
              }),
              "script"
            );
        }),
        (R.createHTMLDocument = (function () {
          var e = M.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            e.childNodes.length === 2
          );
        })()),
        (i.parseHTML = function (e, t, n) {
          if (typeof e != "string") return [];
          typeof t == "boolean" && ((n = t), (t = !1));
          var r, s, o;
          return (
            t ||
              (R.createHTMLDocument
                ? ((t = M.implementation.createHTMLDocument("")),
                  (r = t.createElement("base")),
                  (r.href = M.location.href),
                  t.head.appendChild(r))
                : (t = M)),
            (s = Cn.exec(e)),
            (o = !n && []),
            s
              ? [t.createElement(s[1])]
              : ((s = On([e], t, o)),
                o && o.length && i(o).remove(),
                i.merge([], s.childNodes))
          );
        }),
        (i.fn.load = function (e, t, n) {
          var r,
            s,
            o,
            a = this,
            l = e.indexOf(" ");
          return (
            l > -1 && ((r = Xe(e.slice(l))), (e = e.slice(0, l))),
            O(t)
              ? ((n = t), (t = void 0))
              : t && typeof t == "object" && (s = "POST"),
            a.length > 0 &&
              i
                .ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                .done(function (f) {
                  (o = arguments),
                    a.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f);
                })
                .always(
                  n &&
                    function (f, d) {
                      a.each(function () {
                        n.apply(this, o || [f.responseText, d, f]);
                      });
                    }
                ),
            this
          );
        }),
        (i.expr.pseudos.animated = function (e) {
          return i.grep(i.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (i.offset = {
          setOffset: function (e, t, n) {
            var r,
              s,
              o,
              a,
              l,
              f,
              d,
              m = i.css(e, "position"),
              v = i(e),
              h = {};
            m === "static" && (e.style.position = "relative"),
              (l = v.offset()),
              (o = i.css(e, "top")),
              (f = i.css(e, "left")),
              (d =
                (m === "absolute" || m === "fixed") &&
                (o + f).indexOf("auto") > -1),
              d
                ? ((r = v.position()), (a = r.top), (s = r.left))
                : ((a = parseFloat(o) || 0), (s = parseFloat(f) || 0)),
              O(t) && (t = t.call(e, n, i.extend({}, l))),
              t.top != null && (h.top = t.top - l.top + a),
              t.left != null && (h.left = t.left - l.left + s),
              "using" in t ? t.using.call(e, h) : v.css(h);
          },
        }),
        i.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return e === void 0
                ? this
                : this.each(function (s) {
                    i.offset.setOffset(this, e, s);
                  });
            var t,
              n,
              r = this[0];
            if (r)
              return r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                s = { top: 0, left: 0 };
              if (i.css(r, "position") === "fixed")
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  i.css(e, "position") === "static";

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  e.nodeType === 1 &&
                  ((s = i(e).offset()),
                  (s.top += i.css(e, "borderTopWidth", !0)),
                  (s.left += i.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - s.top - i.css(r, "marginTop", !0),
                left: t.left - s.left - i.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && i.css(e, "position") === "static";

              )
                e = e.offsetParent;
              return e || ze;
            });
          },
        }),
        i.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = t === "pageYOffset";
            i.fn[e] = function (r) {
              return Re(
                this,
                function (s, o, a) {
                  var l;
                  if (
                    (Se(s) ? (l = s) : s.nodeType === 9 && (l = s.defaultView),
                    a === void 0)
                  )
                    return l ? l[t] : s[o];
                  l
                    ? l.scrollTo(n ? l.pageXOffset : a, n ? a : l.pageYOffset)
                    : (s[o] = a);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        i.each(["top", "left"], function (e, t) {
          i.cssHooks[t] = Fn(R.pixelPosition, function (n, r) {
            if (r)
              return (r = yt(n, t)), Kt.test(r) ? i(n).position()[t] + "px" : r;
          });
        }),
        i.each({ Height: "height", Width: "width" }, function (e, t) {
          i.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              i.fn[r] = function (s, o) {
                var a = arguments.length && (n || typeof s != "boolean"),
                  l = n || (s === !0 || o === !0 ? "margin" : "border");
                return Re(
                  this,
                  function (f, d, m) {
                    var v;
                    return Se(f)
                      ? r.indexOf("outer") === 0
                        ? f["inner" + e]
                        : f.document.documentElement["client" + e]
                      : f.nodeType === 9
                      ? ((v = f.documentElement),
                        Math.max(
                          f.body["scroll" + e],
                          v["scroll" + e],
                          f.body["offset" + e],
                          v["offset" + e],
                          v["client" + e]
                        ))
                      : m === void 0
                      ? i.css(f, d, l)
                      : i.style(f, d, m, l);
                  },
                  t,
                  a ? s : void 0,
                  a
                );
              };
            }
          );
        }),
        i.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            i.fn[t] = function (n) {
              return this.on(t, n);
            };
          }
        ),
        i.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return arguments.length === 1
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        i.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            i.fn[t] = function (n, r) {
              return arguments.length > 0
                ? this.on(t, null, n, r)
                : this.trigger(t);
            };
          }
        );
      var yi = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (i.proxy = function (e, t) {
        var n, r, s;
        if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!O(e)))
          return (
            (r = K.call(arguments, 2)),
            (s = function () {
              return e.apply(t || this, r.concat(K.call(arguments)));
            }),
            (s.guid = e.guid = e.guid || i.guid++),
            s
          );
      }),
        (i.holdReady = function (e) {
          e ? i.readyWait++ : i.ready(!0);
        }),
        (i.isArray = Array.isArray),
        (i.parseJSON = JSON.parse),
        (i.nodeName = w),
        (i.isFunction = O),
        (i.isWindow = Se),
        (i.camelCase = je),
        (i.type = We),
        (i.now = Date.now),
        (i.isNumeric = function (e) {
          var t = i.type(e);
          return (
            (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
          );
        }),
        (i.trim = function (e) {
          return e == null ? "" : (e + "").replace(yi, "$1");
        });
      var vi = x.jQuery,
        xi = x.$;
      return (
        (i.noConflict = function (e) {
          return (
            x.$ === i && (x.$ = xi), e && x.jQuery === i && (x.jQuery = vi), i
          );
        }),
        typeof E > "u" && (x.jQuery = x.$ = i),
        i
      );
    });
  })(Tn);
  var wr = Tn.exports;
  const lt = ee(wr);
  class Nt {
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
        ? Nt.isYouTubeMobile()
        : Nt.isMobile();
    }
    static isMobile() {
      return "ontouchstart" in document.documentElement;
    }
    static isFirefoxMobile() {
      return this.isMobile() && !1;
    }
  }
  async function Tr(T, x) {
    T.hide(),
      (
        await yr(x, {
          name: "youtube-dubbing-ui",
          anchor: T[0],
          append: "last",
          position: "inline",
          onMount(k) {
            let U = Et.runtime.getURL("/images/default_play_btn.png");
            lt(k).prepend(`
                                <div class="DIV-ycx6amby4s">
                                    <div class="DIV-1xza9n1iwr">
                                        <h3 class="H3-d9191i41re"><img src="${U}" style="width: 24px;height: 24px" /> <span id="youtube-dubbing-notify-title"></span></h3>
                                        <div class="DIV-pycdde59tf">
                                            <p class="P-f987fk4r6w" id="youtube-dubbing-notify-content">
                                        
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            `);
          },
        })
      ).mount();
  }
  const Cr = {
    matches: ["*://*/*"],
    cssInjectionMode: "ui",
    runAt: "document_start",
    async main(T) {
      window.location.href.includes("youtube.com") &&
        (Nt.isYouTubeMobile() ||
          lt(document).on("yt-update-title", async () => {
            const x = lt("#above-the-fold");
            if (
              x.length === 0 ||
              lt("#youtube-dubbing-notifiy-panel").length > 0
            )
              return;
            x.prepend(
              '<div id="youtube-dubbing-notifiy-panel" class="style-scope ytd-watch-metadata"></div>'
            );
            const E = lt("#youtube-dubbing-notifiy-panel");
            await Tr(E, T);
          }));
    },
  };
  function Dt(T, ...x) {}
  var Sr = {
    debug: (...T) => Dt(console.debug, ...T),
    log: (...T) => Dt(console.log, ...T),
    warn: (...T) => Dt(console.warn, ...T),
    error: (...T) => Dt(console.error, ...T),
  };
  (async () => {
    try {
      const { main: T, ...x } = Cr,
        E = new mr("notify", x);
      await T(E);
    } catch (T) {
      Sr.error('The content script "notify" crashed on startup!', T);
    }
  })();
})();
