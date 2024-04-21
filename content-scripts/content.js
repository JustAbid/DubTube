var B0 = Object.defineProperty;
var k0 = (wt, Ie, gt) =>
  Ie in wt
    ? B0(wt, Ie, { enumerable: !0, configurable: !0, writable: !0, value: gt })
    : (wt[Ie] = gt);
var te = (wt, Ie, gt) => (k0(wt, typeof Ie != "symbol" ? Ie + "" : Ie, gt), gt),
  Vs = (wt, Ie, gt) => {
    if (!Ie.has(wt)) throw TypeError("Cannot " + gt);
  };
var Ra = (wt, Ie, gt) => (
    Vs(wt, Ie, "read from private field"), gt ? gt.call(wt) : Ie.get(wt)
  ),
  ua = (wt, Ie, gt) => {
    if (Ie.has(wt))
      throw TypeError("Cannot add the same private member more than once");
    Ie instanceof WeakSet ? Ie.add(wt) : Ie.set(wt, gt);
  },
  yf = (wt, Ie, gt, aa) => (
    Vs(wt, Ie, "write to private field"),
    aa ? aa.call(wt, gt) : Ie.set(wt, gt),
    gt
  );
var Gs = (wt, Ie, gt) => (Vs(wt, Ie, "access private method"), gt);
(function () {
  "use strict";
  var xu, Gi, za, Cu, ja, Ka, Df, Ya, xf;
  function wt(A) {
    return A;
  }
  var Ie =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function gt(A) {
    return A &&
      A.__esModule &&
      Object.prototype.hasOwnProperty.call(A, "default")
      ? A.default
      : A;
  }
  var aa = { exports: {} };
  /*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   */ (function (A) {
    (function (o, a) {
      A.exports = o.document
        ? a(o, !0)
        : function (v) {
            if (!v.document)
              throw new Error("jQuery requires a window with a document");
            return a(v);
          };
    })(typeof window < "u" ? window : Ie, function (o, a) {
      var v = [],
        C = Object.getPrototypeOf,
        S = v.slice,
        R = v.flat
          ? function (r) {
              return v.flat.call(r);
            }
          : function (r) {
              return v.concat.apply([], r);
            },
        G = v.push,
        J = v.indexOf,
        ee = {},
        De = ee.toString,
        Ve = ee.hasOwnProperty,
        ze = Ve.toString,
        tt = ze.call(Object),
        de = {},
        se = function (u) {
          return (
            typeof u == "function" &&
            typeof u.nodeType != "number" &&
            typeof u.item != "function"
          );
        },
        at = function (u) {
          return u != null && u === u.window;
        },
        pe = o.document,
        _r = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function Tt(r, u, s) {
        s = s || pe;
        var f,
          p,
          m = s.createElement("script");
        if (((m.text = r), u))
          for (f in _r)
            (p = u[f] || (u.getAttribute && u.getAttribute(f))),
              p && m.setAttribute(f, p);
        s.head.appendChild(m).parentNode.removeChild(m);
      }
      function Bt(r) {
        return r == null
          ? r + ""
          : typeof r == "object" || typeof r == "function"
          ? ee[De.call(r)] || "object"
          : typeof r;
      }
      var kt = "3.7.1",
        Lr = /HTML$/i,
        d = function (r, u) {
          return new d.fn.init(r, u);
        };
      (d.fn = d.prototype =
        {
          jquery: kt,
          constructor: d,
          length: 0,
          toArray: function () {
            return S.call(this);
          },
          get: function (r) {
            return r == null
              ? S.call(this)
              : r < 0
              ? this[r + this.length]
              : this[r];
          },
          pushStack: function (r) {
            var u = d.merge(this.constructor(), r);
            return (u.prevObject = this), u;
          },
          each: function (r) {
            return d.each(this, r);
          },
          map: function (r) {
            return this.pushStack(
              d.map(this, function (u, s) {
                return r.call(u, s, u);
              })
            );
          },
          slice: function () {
            return this.pushStack(S.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              d.grep(this, function (r, u) {
                return (u + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              d.grep(this, function (r, u) {
                return u % 2;
              })
            );
          },
          eq: function (r) {
            var u = this.length,
              s = +r + (r < 0 ? u : 0);
            return this.pushStack(s >= 0 && s < u ? [this[s]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: G,
          sort: v.sort,
          splice: v.splice,
        }),
        (d.extend = d.fn.extend =
          function () {
            var r,
              u,
              s,
              f,
              p,
              m,
              w = arguments[0] || {},
              k = 1,
              E = arguments.length,
              P = !1;
            for (
              typeof w == "boolean" && ((P = w), (w = arguments[k] || {}), k++),
                typeof w != "object" && !se(w) && (w = {}),
                k === E && ((w = this), k--);
              k < E;
              k++
            )
              if ((r = arguments[k]) != null)
                for (u in r)
                  (f = r[u]),
                    !(u === "__proto__" || w === f) &&
                      (P && f && (d.isPlainObject(f) || (p = Array.isArray(f)))
                        ? ((s = w[u]),
                          p && !Array.isArray(s)
                            ? (m = [])
                            : !p && !d.isPlainObject(s)
                            ? (m = {})
                            : (m = s),
                          (p = !1),
                          (w[u] = d.extend(P, m, f)))
                        : f !== void 0 && (w[u] = f));
            return w;
          }),
        d.extend({
          expando: "jQuery" + (kt + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (r) {
            throw new Error(r);
          },
          noop: function () {},
          isPlainObject: function (r) {
            var u, s;
            return !r || De.call(r) !== "[object Object]"
              ? !1
              : ((u = C(r)),
                u
                  ? ((s = Ve.call(u, "constructor") && u.constructor),
                    typeof s == "function" && ze.call(s) === tt)
                  : !0);
          },
          isEmptyObject: function (r) {
            var u;
            for (u in r) return !1;
            return !0;
          },
          globalEval: function (r, u, s) {
            Tt(r, { nonce: u && u.nonce }, s);
          },
          each: function (r, u) {
            var s,
              f = 0;
            if (le(r))
              for (s = r.length; f < s && u.call(r[f], f, r[f]) !== !1; f++);
            else for (f in r) if (u.call(r[f], f, r[f]) === !1) break;
            return r;
          },
          text: function (r) {
            var u,
              s = "",
              f = 0,
              p = r.nodeType;
            if (!p) for (; (u = r[f++]); ) s += d.text(u);
            return p === 1 || p === 11
              ? r.textContent
              : p === 9
              ? r.documentElement.textContent
              : p === 3 || p === 4
              ? r.nodeValue
              : s;
          },
          makeArray: function (r, u) {
            var s = u || [];
            return (
              r != null &&
                (le(Object(r))
                  ? d.merge(s, typeof r == "string" ? [r] : r)
                  : G.call(s, r)),
              s
            );
          },
          inArray: function (r, u, s) {
            return u == null ? -1 : J.call(u, r, s);
          },
          isXMLDoc: function (r) {
            var u = r && r.namespaceURI,
              s = r && (r.ownerDocument || r).documentElement;
            return !Lr.test(u || (s && s.nodeName) || "HTML");
          },
          merge: function (r, u) {
            for (var s = +u.length, f = 0, p = r.length; f < s; f++)
              r[p++] = u[f];
            return (r.length = p), r;
          },
          grep: function (r, u, s) {
            for (var f, p = [], m = 0, w = r.length, k = !s; m < w; m++)
              (f = !u(r[m], m)), f !== k && p.push(r[m]);
            return p;
          },
          map: function (r, u, s) {
            var f,
              p,
              m = 0,
              w = [];
            if (le(r))
              for (f = r.length; m < f; m++)
                (p = u(r[m], m, s)), p != null && w.push(p);
            else for (m in r) (p = u(r[m], m, s)), p != null && w.push(p);
            return R(w);
          },
          guid: 1,
          support: de,
        }),
        typeof Symbol == "function" &&
          (d.fn[Symbol.iterator] = v[Symbol.iterator]),
        d.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (r, u) {
            ee["[object " + u + "]"] = u.toLowerCase();
          }
        );
      function le(r) {
        var u = !!r && "length" in r && r.length,
          s = Bt(r);
        return se(r) || at(r)
          ? !1
          : s === "array" ||
              u === 0 ||
              (typeof u == "number" && u > 0 && u - 1 in r);
      }
      function X(r, u) {
        return r.nodeName && r.nodeName.toLowerCase() === u.toLowerCase();
      }
      var Pe = v.pop,
        Ke = v.sort,
        ct = v.splice,
        me = "[\\x20\\t\\r\\n\\f]",
        ot = new RegExp(
          "^" + me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + me + "+$",
          "g"
        );
      d.contains = function (r, u) {
        var s = u && u.parentNode;
        return (
          r === s ||
          !!(
            s &&
            s.nodeType === 1 &&
            (r.contains
              ? r.contains(s)
              : r.compareDocumentPosition && r.compareDocumentPosition(s) & 16)
          )
        );
      };
      var Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function _t(r, u) {
        return u
          ? r === "\0"
            ? "�"
            : r.slice(0, -1) +
              "\\" +
              r.charCodeAt(r.length - 1).toString(16) +
              " "
          : "\\" + r;
      }
      d.escapeSelector = function (r) {
        return (r + "").replace(Ce, _t);
      };
      var _e = pe,
        ft = G;
      (function () {
        var r,
          u,
          s,
          f,
          p,
          m = ft,
          w,
          k,
          E,
          P,
          V,
          W = d.expando,
          O = 0,
          $ = 0,
          ue = Cn(),
          Se = Cn(),
          we = Cn(),
          Dt = Cn(),
          pt = function (x, I) {
            return x === I && (p = !0), 0;
          },
          Pr =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          Cr =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            me +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          Be =
            "\\[" +
            me +
            "*(" +
            Cr +
            ")(?:" +
            me +
            "*([*^$|!~]?=)" +
            me +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Cr +
            "))|)" +
            me +
            "*\\]",
          ln =
            ":(" +
            Cr +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            Be +
            ")*)|.*)\\)|)",
          He = new RegExp(me + "+", "g"),
          et = new RegExp("^" + me + "*," + me + "*"),
          Zn = new RegExp("^" + me + "*([>+~]|" + me + ")" + me + "*"),
          ki = new RegExp(me + "|>"),
          Er = new RegExp(ln),
          xn = new RegExp("^" + Cr + "$"),
          hr = {
            ID: new RegExp("^#(" + Cr + ")"),
            CLASS: new RegExp("^\\.(" + Cr + ")"),
            TAG: new RegExp("^(" + Cr + "|[*])"),
            ATTR: new RegExp("^" + Be),
            PSEUDO: new RegExp("^" + ln),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                me +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                me +
                "*(?:([+-]|)" +
                me +
                "*(\\d+)|))" +
                me +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + Pr + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                me +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                me +
                "*((?:-\\d)?\\d*)" +
                me +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          $r = /^(?:input|select|textarea|button)$/i,
          cn = /^h\d$/i,
          Gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Nn = /[+~]/,
          pr = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + me + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Nr = function (x, I) {
            var M = "0x" + x.slice(1) - 65536;
            return (
              I ||
              (M < 0
                ? String.fromCharCode(M + 65536)
                : String.fromCharCode((M >> 10) | 55296, (M & 1023) | 56320))
            );
          },
          rr = function () {
            Zr();
          },
          ou = fn(
            function (x) {
              return x.disabled === !0 && X(x, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        function qn() {
          try {
            return w.activeElement;
          } catch {}
        }
        try {
          m.apply((v = S.call(_e.childNodes)), _e.childNodes),
            v[_e.childNodes.length].nodeType;
        } catch {
          m = {
            apply: function (I, M) {
              ft.apply(I, S.call(M));
            },
            call: function (I) {
              ft.apply(I, S.call(arguments, 1));
            },
          };
        }
        function Ze(x, I, M, H) {
          var D,
            L,
            _,
            z,
            j,
            ae,
            oe,
            re = I && I.ownerDocument,
            Fe = I ? I.nodeType : 9;
          if (
            ((M = M || []),
            typeof x != "string" || !x || (Fe !== 1 && Fe !== 9 && Fe !== 11))
          )
            return M;
          if (!H && (Zr(I), (I = I || w), E)) {
            if (Fe !== 11 && (j = Gt.exec(x)))
              if ((D = j[1])) {
                if (Fe === 9)
                  if ((_ = I.getElementById(D))) {
                    if (_.id === D) return m.call(M, _), M;
                  } else return M;
                else if (
                  re &&
                  (_ = re.getElementById(D)) &&
                  Ze.contains(I, _) &&
                  _.id === D
                )
                  return m.call(M, _), M;
              } else {
                if (j[2]) return m.apply(M, I.getElementsByTagName(x)), M;
                if ((D = j[3]) && I.getElementsByClassName)
                  return m.apply(M, I.getElementsByClassName(D)), M;
              }
            if (!Dt[x + " "] && (!P || !P.test(x))) {
              if (
                ((oe = x), (re = I), Fe === 1 && (ki.test(x) || Zn.test(x)))
              ) {
                for (
                  re = (Nn.test(x) && Li(I.parentNode)) || I,
                    (re != I || !de.scope) &&
                      ((z = I.getAttribute("id"))
                        ? (z = d.escapeSelector(z))
                        : I.setAttribute("id", (z = W))),
                    ae = Sn(x),
                    L = ae.length;
                  L--;

                )
                  ae[L] = (z ? "#" + z : ":scope") + " " + mr(ae[L]);
                oe = ae.join(",");
              }
              try {
                return m.apply(M, re.querySelectorAll(oe)), M;
              } catch {
                Dt(x, !0);
              } finally {
                z === W && I.removeAttribute("id");
              }
            }
          }
          return lu(x.replace(ot, "$1"), I, M, H);
        }
        function Cn() {
          var x = [];
          function I(M, H) {
            return (
              x.push(M + " ") > u.cacheLength && delete I[x.shift()],
              (I[M + " "] = H)
            );
          }
          return I;
        }
        function gr(x) {
          return (x[W] = !0), x;
        }
        function En(x) {
          var I = w.createElement("fieldset");
          try {
            return !!x(I);
          } catch {
            return !1;
          } finally {
            I.parentNode && I.parentNode.removeChild(I), (I = null);
          }
        }
        function su(x) {
          return function (I) {
            return X(I, "input") && I.type === x;
          };
        }
        function _i(x) {
          return function (I) {
            return (X(I, "input") || X(I, "button")) && I.type === x;
          };
        }
        function Gu(x) {
          return function (I) {
            return "form" in I
              ? I.parentNode && I.disabled === !1
                ? "label" in I
                  ? "label" in I.parentNode
                    ? I.parentNode.disabled === x
                    : I.disabled === x
                  : I.isDisabled === x || (I.isDisabled !== !x && ou(I) === x)
                : I.disabled === x
              : "label" in I
              ? I.disabled === x
              : !1;
          };
        }
        function nr(x) {
          return gr(function (I) {
            return (
              (I = +I),
              gr(function (M, H) {
                for (var D, L = x([], M.length, I), _ = L.length; _--; )
                  M[(D = L[_])] && (M[D] = !(H[D] = M[D]));
              })
            );
          });
        }
        function Li(x) {
          return x && typeof x.getElementsByTagName < "u" && x;
        }
        function Zr(x) {
          var I,
            M = x ? x.ownerDocument || x : _e;
          return (
            M == w ||
              M.nodeType !== 9 ||
              !M.documentElement ||
              ((w = M),
              (k = w.documentElement),
              (E = !d.isXMLDoc(w)),
              (V = k.matches || k.webkitMatchesSelector || k.msMatchesSelector),
              k.msMatchesSelector &&
                _e != w &&
                (I = w.defaultView) &&
                I.top !== I &&
                I.addEventListener("unload", rr),
              (de.getById = En(function (H) {
                return (
                  (k.appendChild(H).id = d.expando),
                  !w.getElementsByName || !w.getElementsByName(d.expando).length
                );
              })),
              (de.disconnectedMatch = En(function (H) {
                return V.call(H, "*");
              })),
              (de.scope = En(function () {
                return w.querySelectorAll(":scope");
              })),
              (de.cssHas = En(function () {
                try {
                  return w.querySelector(":has(*,:jqfake)"), !1;
                } catch {
                  return !0;
                }
              })),
              de.getById
                ? ((u.filter.ID = function (H) {
                    var D = H.replace(pr, Nr);
                    return function (L) {
                      return L.getAttribute("id") === D;
                    };
                  }),
                  (u.find.ID = function (H, D) {
                    if (typeof D.getElementById < "u" && E) {
                      var L = D.getElementById(H);
                      return L ? [L] : [];
                    }
                  }))
                : ((u.filter.ID = function (H) {
                    var D = H.replace(pr, Nr);
                    return function (L) {
                      var _ =
                        typeof L.getAttributeNode < "u" &&
                        L.getAttributeNode("id");
                      return _ && _.value === D;
                    };
                  }),
                  (u.find.ID = function (H, D) {
                    if (typeof D.getElementById < "u" && E) {
                      var L,
                        _,
                        z,
                        j = D.getElementById(H);
                      if (j) {
                        if (
                          ((L = j.getAttributeNode("id")), L && L.value === H)
                        )
                          return [j];
                        for (z = D.getElementsByName(H), _ = 0; (j = z[_++]); )
                          if (
                            ((L = j.getAttributeNode("id")), L && L.value === H)
                          )
                            return [j];
                      }
                      return [];
                    }
                  })),
              (u.find.TAG = function (H, D) {
                return typeof D.getElementsByTagName < "u"
                  ? D.getElementsByTagName(H)
                  : D.querySelectorAll(H);
              }),
              (u.find.CLASS = function (H, D) {
                if (typeof D.getElementsByClassName < "u" && E)
                  return D.getElementsByClassName(H);
              }),
              (P = []),
              En(function (H) {
                var D;
                (k.appendChild(H).innerHTML =
                  "<a id='" +
                  W +
                  "' href='' disabled='disabled'></a><select id='" +
                  W +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  H.querySelectorAll("[selected]").length ||
                    P.push("\\[" + me + "*(?:value|" + Pr + ")"),
                  H.querySelectorAll("[id~=" + W + "-]").length || P.push("~="),
                  H.querySelectorAll("a#" + W + "+*").length ||
                    P.push(".#.+[+~]"),
                  H.querySelectorAll(":checked").length || P.push(":checked"),
                  (D = w.createElement("input")),
                  D.setAttribute("type", "hidden"),
                  H.appendChild(D).setAttribute("name", "D"),
                  (k.appendChild(H).disabled = !0),
                  H.querySelectorAll(":disabled").length !== 2 &&
                    P.push(":enabled", ":disabled"),
                  (D = w.createElement("input")),
                  D.setAttribute("name", ""),
                  H.appendChild(D),
                  H.querySelectorAll("[name='']").length ||
                    P.push(
                      "\\[" + me + "*name" + me + "*=" + me + `*(?:''|"")`
                    );
              }),
              de.cssHas || P.push(":has"),
              (P = P.length && new RegExp(P.join("|"))),
              (pt = function (H, D) {
                if (H === D) return (p = !0), 0;
                var L = !H.compareDocumentPosition - !D.compareDocumentPosition;
                return (
                  L ||
                  ((L =
                    (H.ownerDocument || H) == (D.ownerDocument || D)
                      ? H.compareDocumentPosition(D)
                      : 1),
                  L & 1 ||
                  (!de.sortDetached && D.compareDocumentPosition(H) === L)
                    ? H === w || (H.ownerDocument == _e && Ze.contains(_e, H))
                      ? -1
                      : D === w || (D.ownerDocument == _e && Ze.contains(_e, D))
                      ? 1
                      : f
                      ? J.call(f, H) - J.call(f, D)
                      : 0
                    : L & 4
                    ? -1
                    : 1)
                );
              })),
            w
          );
        }
        (Ze.matches = function (x, I) {
          return Ze(x, null, null, I);
        }),
          (Ze.matchesSelector = function (x, I) {
            if ((Zr(x), E && !Dt[I + " "] && (!P || !P.test(I))))
              try {
                var M = V.call(x, I);
                if (
                  M ||
                  de.disconnectedMatch ||
                  (x.document && x.document.nodeType !== 11)
                )
                  return M;
              } catch {
                Dt(I, !0);
              }
            return Ze(I, w, null, [x]).length > 0;
          }),
          (Ze.contains = function (x, I) {
            return (x.ownerDocument || x) != w && Zr(x), d.contains(x, I);
          }),
          (Ze.attr = function (x, I) {
            (x.ownerDocument || x) != w && Zr(x);
            var M = u.attrHandle[I.toLowerCase()],
              H =
                M && Ve.call(u.attrHandle, I.toLowerCase())
                  ? M(x, I, !E)
                  : void 0;
            return H !== void 0 ? H : x.getAttribute(I);
          }),
          (Ze.error = function (x) {
            throw new Error("Syntax error, unrecognized expression: " + x);
          }),
          (d.uniqueSort = function (x) {
            var I,
              M = [],
              H = 0,
              D = 0;
            if (
              ((p = !de.sortStable),
              (f = !de.sortStable && S.call(x, 0)),
              Ke.call(x, pt),
              p)
            ) {
              for (; (I = x[D++]); ) I === x[D] && (H = M.push(D));
              for (; H--; ) ct.call(x, M[H], 1);
            }
            return (f = null), x;
          }),
          (d.fn.uniqueSort = function () {
            return this.pushStack(d.uniqueSort(S.apply(this)));
          }),
          (u = d.expr =
            {
              cacheLength: 50,
              createPseudo: gr,
              match: hr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (x) {
                  return (
                    (x[1] = x[1].replace(pr, Nr)),
                    (x[3] = (x[3] || x[4] || x[5] || "").replace(pr, Nr)),
                    x[2] === "~=" && (x[3] = " " + x[3] + " "),
                    x.slice(0, 4)
                  );
                },
                CHILD: function (x) {
                  return (
                    (x[1] = x[1].toLowerCase()),
                    x[1].slice(0, 3) === "nth"
                      ? (x[3] || Ze.error(x[0]),
                        (x[4] = +(x[4]
                          ? x[5] + (x[6] || 1)
                          : 2 * (x[3] === "even" || x[3] === "odd"))),
                        (x[5] = +(x[7] + x[8] || x[3] === "odd")))
                      : x[3] && Ze.error(x[0]),
                    x
                  );
                },
                PSEUDO: function (x) {
                  var I,
                    M = !x[6] && x[2];
                  return hr.CHILD.test(x[0])
                    ? null
                    : (x[3]
                        ? (x[2] = x[4] || x[5] || "")
                        : M &&
                          Er.test(M) &&
                          (I = Sn(M, !0)) &&
                          (I = M.indexOf(")", M.length - I) - M.length) &&
                          ((x[0] = x[0].slice(0, I)), (x[2] = M.slice(0, I))),
                      x.slice(0, 3));
                },
              },
              filter: {
                TAG: function (x) {
                  var I = x.replace(pr, Nr).toLowerCase();
                  return x === "*"
                    ? function () {
                        return !0;
                      }
                    : function (M) {
                        return X(M, I);
                      };
                },
                CLASS: function (x) {
                  var I = ue[x + " "];
                  return (
                    I ||
                    ((I = new RegExp(
                      "(^|" + me + ")" + x + "(" + me + "|$)"
                    )) &&
                      ue(x, function (M) {
                        return I.test(
                          (typeof M.className == "string" && M.className) ||
                            (typeof M.getAttribute < "u" &&
                              M.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (x, I, M) {
                  return function (H) {
                    var D = Ze.attr(H, x);
                    return D == null
                      ? I === "!="
                      : I
                      ? ((D += ""),
                        I === "="
                          ? D === M
                          : I === "!="
                          ? D !== M
                          : I === "^="
                          ? M && D.indexOf(M) === 0
                          : I === "*="
                          ? M && D.indexOf(M) > -1
                          : I === "$="
                          ? M && D.slice(-M.length) === M
                          : I === "~="
                          ? (" " + D.replace(He, " ") + " ").indexOf(M) > -1
                          : I === "|="
                          ? D === M || D.slice(0, M.length + 1) === M + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (x, I, M, H, D) {
                  var L = x.slice(0, 3) !== "nth",
                    _ = x.slice(-4) !== "last",
                    z = I === "of-type";
                  return H === 1 && D === 0
                    ? function (j) {
                        return !!j.parentNode;
                      }
                    : function (j, ae, oe) {
                        var re,
                          Fe,
                          ve,
                          Ne,
                          vt,
                          It = L !== _ ? "nextSibling" : "previousSibling",
                          xt = j.parentNode,
                          ur = z && j.nodeName.toLowerCase(),
                          Xr = !oe && !z,
                          xe = !1;
                        if (xt) {
                          if (L) {
                            for (; It; ) {
                              for (ve = j; (ve = ve[It]); )
                                if (z ? X(ve, ur) : ve.nodeType === 1)
                                  return !1;
                              vt = It = x === "only" && !vt && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((vt = [_ ? xt.firstChild : xt.lastChild]), _ && Xr)
                          ) {
                            for (
                              Fe = xt[W] || (xt[W] = {}),
                                re = Fe[x] || [],
                                Ne = re[0] === O && re[1],
                                xe = Ne && re[2],
                                ve = Ne && xt.childNodes[Ne];
                              (ve =
                                (++Ne && ve && ve[It]) ||
                                (xe = Ne = 0) ||
                                vt.pop());

                            )
                              if (ve.nodeType === 1 && ++xe && ve === j) {
                                Fe[x] = [O, Ne, xe];
                                break;
                              }
                          } else if (
                            (Xr &&
                              ((Fe = j[W] || (j[W] = {})),
                              (re = Fe[x] || []),
                              (Ne = re[0] === O && re[1]),
                              (xe = Ne)),
                            xe === !1)
                          )
                            for (
                              ;
                              (ve =
                                (++Ne && ve && ve[It]) ||
                                (xe = Ne = 0) ||
                                vt.pop()) &&
                              !(
                                (z ? X(ve, ur) : ve.nodeType === 1) &&
                                ++xe &&
                                (Xr &&
                                  ((Fe = ve[W] || (ve[W] = {})),
                                  (Fe[x] = [O, xe])),
                                ve === j)
                              );

                            );
                          return (
                            (xe -= D), xe === H || (xe % H === 0 && xe / H >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (x, I) {
                  var M,
                    H =
                      u.pseudos[x] ||
                      u.setFilters[x.toLowerCase()] ||
                      Ze.error("unsupported pseudo: " + x);
                  return H[W]
                    ? H(I)
                    : H.length > 1
                    ? ((M = [x, x, "", I]),
                      u.setFilters.hasOwnProperty(x.toLowerCase())
                        ? gr(function (D, L) {
                            for (var _, z = H(D, I), j = z.length; j--; )
                              (_ = J.call(D, z[j])), (D[_] = !(L[_] = z[j]));
                          })
                        : function (D) {
                            return H(D, 0, M);
                          })
                    : H;
                },
              },
              pseudos: {
                not: gr(function (x) {
                  var I = [],
                    M = [],
                    H = Ri(x.replace(ot, "$1"));
                  return H[W]
                    ? gr(function (D, L, _, z) {
                        for (
                          var j, ae = H(D, null, z, []), oe = D.length;
                          oe--;

                        )
                          (j = ae[oe]) && (D[oe] = !(L[oe] = j));
                      })
                    : function (D, L, _) {
                        return (
                          (I[0] = D), H(I, null, _, M), (I[0] = null), !M.pop()
                        );
                      };
                }),
                has: gr(function (x) {
                  return function (I) {
                    return Ze(x, I).length > 0;
                  };
                }),
                contains: gr(function (x) {
                  return (
                    (x = x.replace(pr, Nr)),
                    function (I) {
                      return (I.textContent || d.text(I)).indexOf(x) > -1;
                    }
                  );
                }),
                lang: gr(function (x) {
                  return (
                    xn.test(x || "") || Ze.error("unsupported lang: " + x),
                    (x = x.replace(pr, Nr).toLowerCase()),
                    function (I) {
                      var M;
                      do
                        if (
                          (M = E
                            ? I.lang
                            : I.getAttribute("xml:lang") ||
                              I.getAttribute("lang"))
                        )
                          return (
                            (M = M.toLowerCase()),
                            M === x || M.indexOf(x + "-") === 0
                          );
                      while ((I = I.parentNode) && I.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (x) {
                  var I = o.location && o.location.hash;
                  return I && I.slice(1) === x.id;
                },
                root: function (x) {
                  return x === k;
                },
                focus: function (x) {
                  return (
                    x === qn() &&
                    w.hasFocus() &&
                    !!(x.type || x.href || ~x.tabIndex)
                  );
                },
                enabled: Gu(!1),
                disabled: Gu(!0),
                checked: function (x) {
                  return (
                    (X(x, "input") && !!x.checked) ||
                    (X(x, "option") && !!x.selected)
                  );
                },
                selected: function (x) {
                  return (
                    x.parentNode && x.parentNode.selectedIndex,
                    x.selected === !0
                  );
                },
                empty: function (x) {
                  for (x = x.firstChild; x; x = x.nextSibling)
                    if (x.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (x) {
                  return !u.pseudos.empty(x);
                },
                header: function (x) {
                  return cn.test(x.nodeName);
                },
                input: function (x) {
                  return $r.test(x.nodeName);
                },
                button: function (x) {
                  return (
                    (X(x, "input") && x.type === "button") || X(x, "button")
                  );
                },
                text: function (x) {
                  var I;
                  return (
                    X(x, "input") &&
                    x.type === "text" &&
                    ((I = x.getAttribute("type")) == null ||
                      I.toLowerCase() === "text")
                  );
                },
                first: nr(function () {
                  return [0];
                }),
                last: nr(function (x, I) {
                  return [I - 1];
                }),
                eq: nr(function (x, I, M) {
                  return [M < 0 ? M + I : M];
                }),
                even: nr(function (x, I) {
                  for (var M = 0; M < I; M += 2) x.push(M);
                  return x;
                }),
                odd: nr(function (x, I) {
                  for (var M = 1; M < I; M += 2) x.push(M);
                  return x;
                }),
                lt: nr(function (x, I, M) {
                  var H;
                  for (
                    M < 0 ? (H = M + I) : M > I ? (H = I) : (H = M);
                    --H >= 0;

                  )
                    x.push(H);
                  return x;
                }),
                gt: nr(function (x, I, M) {
                  for (var H = M < 0 ? M + I : M; ++H < I; ) x.push(H);
                  return x;
                }),
              },
            }),
          (u.pseudos.nth = u.pseudos.eq);
        for (r in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          u.pseudos[r] = su(r);
        for (r in { submit: !0, reset: !0 }) u.pseudos[r] = _i(r);
        function Jn() {}
        (Jn.prototype = u.filters = u.pseudos), (u.setFilters = new Jn());
        function Sn(x, I) {
          var M,
            H,
            D,
            L,
            _,
            z,
            j,
            ae = Se[x + " "];
          if (ae) return I ? 0 : ae.slice(0);
          for (_ = x, z = [], j = u.preFilter; _; ) {
            (!M || (H = et.exec(_))) &&
              (H && (_ = _.slice(H[0].length) || _), z.push((D = []))),
              (M = !1),
              (H = Zn.exec(_)) &&
                ((M = H.shift()),
                D.push({ value: M, type: H[0].replace(ot, " ") }),
                (_ = _.slice(M.length)));
            for (L in u.filter)
              (H = hr[L].exec(_)) &&
                (!j[L] || (H = j[L](H))) &&
                ((M = H.shift()),
                D.push({ value: M, type: L, matches: H }),
                (_ = _.slice(M.length)));
            if (!M) break;
          }
          return I ? _.length : _ ? Ze.error(x) : Se(x, z).slice(0);
        }
        function mr(x) {
          for (var I = 0, M = x.length, H = ""; I < M; I++) H += x[I].value;
          return H;
        }
        function fn(x, I, M) {
          var H = I.dir,
            D = I.next,
            L = D || H,
            _ = M && L === "parentNode",
            z = $++;
          return I.first
            ? function (j, ae, oe) {
                for (; (j = j[H]); )
                  if (j.nodeType === 1 || _) return x(j, ae, oe);
                return !1;
              }
            : function (j, ae, oe) {
                var re,
                  Fe,
                  ve = [O, z];
                if (oe) {
                  for (; (j = j[H]); )
                    if ((j.nodeType === 1 || _) && x(j, ae, oe)) return !0;
                } else
                  for (; (j = j[H]); )
                    if (j.nodeType === 1 || _)
                      if (((Fe = j[W] || (j[W] = {})), D && X(j, D)))
                        j = j[H] || j;
                      else {
                        if ((re = Fe[L]) && re[0] === O && re[1] === z)
                          return (ve[2] = re[2]);
                        if (((Fe[L] = ve), (ve[2] = x(j, ae, oe)))) return !0;
                      }
                return !1;
              };
        }
        function Fi(x) {
          return x.length > 1
            ? function (I, M, H) {
                for (var D = x.length; D--; ) if (!x[D](I, M, H)) return !1;
                return !0;
              }
            : x[0];
        }
        function Wu(x, I, M) {
          for (var H = 0, D = I.length; H < D; H++) Ze(x, I[H], M);
          return M;
        }
        function Jr(x, I, M, H, D) {
          for (var L, _ = [], z = 0, j = x.length, ae = I != null; z < j; z++)
            (L = x[z]) && (!M || M(L, H, D)) && (_.push(L), ae && I.push(z));
          return _;
        }
        function dn(x, I, M, H, D, L) {
          return (
            H && !H[W] && (H = dn(H)),
            D && !D[W] && (D = dn(D, L)),
            gr(function (_, z, j, ae) {
              var oe,
                re,
                Fe,
                ve,
                Ne = [],
                vt = [],
                It = z.length,
                xt = _ || Wu(I || "*", j.nodeType ? [j] : j, []),
                ur = x && (_ || !I) ? Jr(xt, Ne, x, j, ae) : xt;
              if (
                (M
                  ? ((ve = D || (_ ? x : It || H) ? [] : z), M(ur, ve, j, ae))
                  : (ve = ur),
                H)
              )
                for (oe = Jr(ve, vt), H(oe, [], j, ae), re = oe.length; re--; )
                  (Fe = oe[re]) && (ve[vt[re]] = !(ur[vt[re]] = Fe));
              if (_) {
                if (D || x) {
                  if (D) {
                    for (oe = [], re = ve.length; re--; )
                      (Fe = ve[re]) && oe.push((ur[re] = Fe));
                    D(null, (ve = []), oe, ae);
                  }
                  for (re = ve.length; re--; )
                    (Fe = ve[re]) &&
                      (oe = D ? J.call(_, Fe) : Ne[re]) > -1 &&
                      (_[oe] = !(z[oe] = Fe));
                }
              } else (ve = Jr(ve === z ? ve.splice(It, ve.length) : ve)), D ? D(null, z, ve, ae) : m.apply(z, ve);
            })
          );
        }
        function ir(x) {
          for (
            var I,
              M,
              H,
              D = x.length,
              L = u.relative[x[0].type],
              _ = L || u.relative[" "],
              z = L ? 1 : 0,
              j = fn(
                function (re) {
                  return re === I;
                },
                _,
                !0
              ),
              ae = fn(
                function (re) {
                  return J.call(I, re) > -1;
                },
                _,
                !0
              ),
              oe = [
                function (re, Fe, ve) {
                  var Ne =
                    (!L && (ve || Fe != s)) ||
                    ((I = Fe).nodeType ? j(re, Fe, ve) : ae(re, Fe, ve));
                  return (I = null), Ne;
                },
              ];
            z < D;
            z++
          )
            if ((M = u.relative[x[z].type])) oe = [fn(Fi(oe), M)];
            else {
              if (((M = u.filter[x[z].type].apply(null, x[z].matches)), M[W])) {
                for (H = ++z; H < D && !u.relative[x[H].type]; H++);
                return dn(
                  z > 1 && Fi(oe),
                  z > 1 &&
                    mr(
                      x
                        .slice(0, z - 1)
                        .concat({ value: x[z - 2].type === " " ? "*" : "" })
                    ).replace(ot, "$1"),
                  M,
                  z < H && ir(x.slice(z, H)),
                  H < D && ir((x = x.slice(H))),
                  H < D && mr(x)
                );
              }
              oe.push(M);
            }
          return Fi(oe);
        }
        function zu(x, I) {
          var M = I.length > 0,
            H = x.length > 0,
            D = function (L, _, z, j, ae) {
              var oe,
                re,
                Fe,
                ve = 0,
                Ne = "0",
                vt = L && [],
                It = [],
                xt = s,
                ur = L || (H && u.find.TAG("*", ae)),
                Xr = (O += xt == null ? 1 : Math.random() || 0.1),
                xe = ur.length;
              for (
                ae && (s = _ == w || _ || ae);
                Ne !== xe && (oe = ur[Ne]) != null;
                Ne++
              ) {
                if (H && oe) {
                  for (
                    re = 0, !_ && oe.ownerDocument != w && (Zr(oe), (z = !E));
                    (Fe = x[re++]);

                  )
                    if (Fe(oe, _ || w, z)) {
                      m.call(j, oe);
                      break;
                    }
                  ae && (O = Xr);
                }
                M && ((oe = !Fe && oe) && ve--, L && vt.push(oe));
              }
              if (((ve += Ne), M && Ne !== ve)) {
                for (re = 0; (Fe = I[re++]); ) Fe(vt, It, _, z);
                if (L) {
                  if (ve > 0)
                    for (; Ne--; ) vt[Ne] || It[Ne] || (It[Ne] = Pe.call(j));
                  It = Jr(It);
                }
                m.apply(j, It),
                  ae &&
                    !L &&
                    It.length > 0 &&
                    ve + I.length > 1 &&
                    d.uniqueSort(j);
              }
              return ae && ((O = Xr), (s = xt)), vt;
            };
          return M ? gr(D) : D;
        }
        function Ri(x, I) {
          var M,
            H = [],
            D = [],
            L = we[x + " "];
          if (!L) {
            for (I || (I = Sn(x)), M = I.length; M--; )
              (L = ir(I[M])), L[W] ? H.push(L) : D.push(L);
            (L = we(x, zu(D, H))), (L.selector = x);
          }
          return L;
        }
        function lu(x, I, M, H) {
          var D,
            L,
            _,
            z,
            j,
            ae = typeof x == "function" && x,
            oe = !H && Sn((x = ae.selector || x));
          if (((M = M || []), oe.length === 1)) {
            if (
              ((L = oe[0] = oe[0].slice(0)),
              L.length > 2 &&
                (_ = L[0]).type === "ID" &&
                I.nodeType === 9 &&
                E &&
                u.relative[L[1].type])
            ) {
              if (
                ((I = (u.find.ID(_.matches[0].replace(pr, Nr), I) || [])[0]), I)
              )
                ae && (I = I.parentNode);
              else return M;
              x = x.slice(L.shift().value.length);
            }
            for (
              D = hr.needsContext.test(x) ? 0 : L.length;
              D-- && ((_ = L[D]), !u.relative[(z = _.type)]);

            )
              if (
                (j = u.find[z]) &&
                (H = j(
                  _.matches[0].replace(pr, Nr),
                  (Nn.test(L[0].type) && Li(I.parentNode)) || I
                ))
              ) {
                if ((L.splice(D, 1), (x = H.length && mr(L)), !x))
                  return m.apply(M, H), M;
                break;
              }
          }
          return (
            (ae || Ri(x, oe))(
              H,
              I,
              !E,
              M,
              !I || (Nn.test(x) && Li(I.parentNode)) || I
            ),
            M
          );
        }
        (de.sortStable = W.split("").sort(pt).join("") === W),
          Zr(),
          (de.sortDetached = En(function (x) {
            return x.compareDocumentPosition(w.createElement("fieldset")) & 1;
          })),
          (d.find = Ze),
          (d.expr[":"] = d.expr.pseudos),
          (d.unique = d.uniqueSort),
          (Ze.compile = Ri),
          (Ze.select = lu),
          (Ze.setDocument = Zr),
          (Ze.tokenize = Sn),
          (Ze.escape = d.escapeSelector),
          (Ze.getText = d.text),
          (Ze.isXML = d.isXMLDoc),
          (Ze.selectors = d.expr),
          (Ze.support = d.support),
          (Ze.uniqueSort = d.uniqueSort);
      })();
      var ce = function (r, u, s) {
          for (var f = [], p = s !== void 0; (r = r[u]) && r.nodeType !== 9; )
            if (r.nodeType === 1) {
              if (p && d(r).is(s)) break;
              f.push(r);
            }
          return f;
        },
        Q = function (r, u) {
          for (var s = []; r; r = r.nextSibling)
            r.nodeType === 1 && r !== u && s.push(r);
          return s;
        },
        Oe = d.expr.match.needsContext,
        Pt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function or(r, u, s) {
        return se(u)
          ? d.grep(r, function (f, p) {
              return !!u.call(f, p, f) !== s;
            })
          : u.nodeType
          ? d.grep(r, function (f) {
              return (f === u) !== s;
            })
          : typeof u != "string"
          ? d.grep(r, function (f) {
              return J.call(u, f) > -1 !== s;
            })
          : d.filter(u, r, s);
      }
      (d.filter = function (r, u, s) {
        var f = u[0];
        return (
          s && (r = ":not(" + r + ")"),
          u.length === 1 && f.nodeType === 1
            ? d.find.matchesSelector(f, r)
              ? [f]
              : []
            : d.find.matches(
                r,
                d.grep(u, function (p) {
                  return p.nodeType === 1;
                })
              )
        );
      }),
        d.fn.extend({
          find: function (r) {
            var u,
              s,
              f = this.length,
              p = this;
            if (typeof r != "string")
              return this.pushStack(
                d(r).filter(function () {
                  for (u = 0; u < f; u++) if (d.contains(p[u], this)) return !0;
                })
              );
            for (s = this.pushStack([]), u = 0; u < f; u++) d.find(r, p[u], s);
            return f > 1 ? d.uniqueSort(s) : s;
          },
          filter: function (r) {
            return this.pushStack(or(this, r || [], !1));
          },
          not: function (r) {
            return this.pushStack(or(this, r || [], !0));
          },
          is: function (r) {
            return !!or(
              this,
              typeof r == "string" && Oe.test(r) ? d(r) : r || [],
              !1
            ).length;
          },
        });
      var un,
        U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        wr = (d.fn.init = function (r, u, s) {
          var f, p;
          if (!r) return this;
          if (((s = s || un), typeof r == "string"))
            if (
              (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3
                ? (f = [null, r, null])
                : (f = U.exec(r)),
              f && (f[1] || !u))
            )
              if (f[1]) {
                if (
                  ((u = u instanceof d ? u[0] : u),
                  d.merge(
                    this,
                    d.parseHTML(
                      f[1],
                      u && u.nodeType ? u.ownerDocument || u : pe,
                      !0
                    )
                  ),
                  Pt.test(f[1]) && d.isPlainObject(u))
                )
                  for (f in u) se(this[f]) ? this[f](u[f]) : this.attr(f, u[f]);
                return this;
              } else
                return (
                  (p = pe.getElementById(f[2])),
                  p && ((this[0] = p), (this.length = 1)),
                  this
                );
            else
              return !u || u.jquery
                ? (u || s).find(r)
                : this.constructor(u).find(r);
          else {
            if (r.nodeType) return (this[0] = r), (this.length = 1), this;
            if (se(r)) return s.ready !== void 0 ? s.ready(r) : r(d);
          }
          return d.makeArray(r, this);
        });
      (wr.prototype = d.fn), (un = d(pe));
      var dt = /^(?:parents|prev(?:Until|All))/,
        Ar = { children: !0, contents: !0, next: !0, prev: !0 };
      d.fn.extend({
        has: function (r) {
          var u = d(r, this),
            s = u.length;
          return this.filter(function () {
            for (var f = 0; f < s; f++) if (d.contains(this, u[f])) return !0;
          });
        },
        closest: function (r, u) {
          var s,
            f = 0,
            p = this.length,
            m = [],
            w = typeof r != "string" && d(r);
          if (!Oe.test(r)) {
            for (; f < p; f++)
              for (s = this[f]; s && s !== u; s = s.parentNode)
                if (
                  s.nodeType < 11 &&
                  (w
                    ? w.index(s) > -1
                    : s.nodeType === 1 && d.find.matchesSelector(s, r))
                ) {
                  m.push(s);
                  break;
                }
          }
          return this.pushStack(m.length > 1 ? d.uniqueSort(m) : m);
        },
        index: function (r) {
          return r
            ? typeof r == "string"
              ? J.call(d(r), this[0])
              : J.call(this, r.jquery ? r[0] : r)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (r, u) {
          return this.pushStack(d.uniqueSort(d.merge(this.get(), d(r, u))));
        },
        addBack: function (r) {
          return this.add(
            r == null ? this.prevObject : this.prevObject.filter(r)
          );
        },
      });
      function sr(r, u) {
        for (; (r = r[u]) && r.nodeType !== 1; );
        return r;
      }
      d.each(
        {
          parent: function (r) {
            var u = r.parentNode;
            return u && u.nodeType !== 11 ? u : null;
          },
          parents: function (r) {
            return ce(r, "parentNode");
          },
          parentsUntil: function (r, u, s) {
            return ce(r, "parentNode", s);
          },
          next: function (r) {
            return sr(r, "nextSibling");
          },
          prev: function (r) {
            return sr(r, "previousSibling");
          },
          nextAll: function (r) {
            return ce(r, "nextSibling");
          },
          prevAll: function (r) {
            return ce(r, "previousSibling");
          },
          nextUntil: function (r, u, s) {
            return ce(r, "nextSibling", s);
          },
          prevUntil: function (r, u, s) {
            return ce(r, "previousSibling", s);
          },
          siblings: function (r) {
            return Q((r.parentNode || {}).firstChild, r);
          },
          children: function (r) {
            return Q(r.firstChild);
          },
          contents: function (r) {
            return r.contentDocument != null && C(r.contentDocument)
              ? r.contentDocument
              : (X(r, "template") && (r = r.content || r),
                d.merge([], r.childNodes));
          },
        },
        function (r, u) {
          d.fn[r] = function (s, f) {
            var p = d.map(this, u, s);
            return (
              r.slice(-5) !== "Until" && (f = s),
              f && typeof f == "string" && (p = d.filter(f, p)),
              this.length > 1 &&
                (Ar[r] || d.uniqueSort(p), dt.test(r) && p.reverse()),
              this.pushStack(p)
            );
          };
        }
      );
      var rt = /[^\x20\t\r\n\f]+/g;
      function Nt(r) {
        var u = {};
        return (
          d.each(r.match(rt) || [], function (s, f) {
            u[f] = !0;
          }),
          u
        );
      }
      d.Callbacks = function (r) {
        r = typeof r == "string" ? Nt(r) : d.extend({}, r);
        var u,
          s,
          f,
          p,
          m = [],
          w = [],
          k = -1,
          E = function () {
            for (p = p || r.once, f = u = !0; w.length; k = -1)
              for (s = w.shift(); ++k < m.length; )
                m[k].apply(s[0], s[1]) === !1 &&
                  r.stopOnFalse &&
                  ((k = m.length), (s = !1));
            r.memory || (s = !1), (u = !1), p && (s ? (m = []) : (m = ""));
          },
          P = {
            add: function () {
              return (
                m &&
                  (s && !u && ((k = m.length - 1), w.push(s)),
                  (function V(W) {
                    d.each(W, function (O, $) {
                      se($)
                        ? (!r.unique || !P.has($)) && m.push($)
                        : $ && $.length && Bt($) !== "string" && V($);
                    });
                  })(arguments),
                  s && !u && E()),
                this
              );
            },
            remove: function () {
              return (
                d.each(arguments, function (V, W) {
                  for (var O; (O = d.inArray(W, m, O)) > -1; )
                    m.splice(O, 1), O <= k && k--;
                }),
                this
              );
            },
            has: function (V) {
              return V ? d.inArray(V, m) > -1 : m.length > 0;
            },
            empty: function () {
              return m && (m = []), this;
            },
            disable: function () {
              return (p = w = []), (m = s = ""), this;
            },
            disabled: function () {
              return !m;
            },
            lock: function () {
              return (p = w = []), !s && !u && (m = s = ""), this;
            },
            locked: function () {
              return !!p;
            },
            fireWith: function (V, W) {
              return (
                p ||
                  ((W = W || []),
                  (W = [V, W.slice ? W.slice() : W]),
                  w.push(W),
                  u || E()),
                this
              );
            },
            fire: function () {
              return P.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!f;
            },
          };
        return P;
      };
      function qt(r) {
        return r;
      }
      function an(r) {
        throw r;
      }
      function Mt(r, u, s, f) {
        var p;
        try {
          r && se((p = r.promise))
            ? p.call(r).done(u).fail(s)
            : r && se((p = r.then))
            ? p.call(r, u, s)
            : u.apply(void 0, [r].slice(f));
        } catch (m) {
          s.apply(void 0, [m]);
        }
      }
      d.extend({
        Deferred: function (r) {
          var u = [
              [
                "notify",
                "progress",
                d.Callbacks("memory"),
                d.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                d.Callbacks("once memory"),
                d.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                d.Callbacks("once memory"),
                d.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            s = "pending",
            f = {
              state: function () {
                return s;
              },
              always: function () {
                return p.done(arguments).fail(arguments), this;
              },
              catch: function (m) {
                return f.then(null, m);
              },
              pipe: function () {
                var m = arguments;
                return d
                  .Deferred(function (w) {
                    d.each(u, function (k, E) {
                      var P = se(m[E[4]]) && m[E[4]];
                      p[E[1]](function () {
                        var V = P && P.apply(this, arguments);
                        V && se(V.promise)
                          ? V.promise()
                              .progress(w.notify)
                              .done(w.resolve)
                              .fail(w.reject)
                          : w[E[0] + "With"](this, P ? [V] : arguments);
                      });
                    }),
                      (m = null);
                  })
                  .promise();
              },
              then: function (m, w, k) {
                var E = 0;
                function P(V, W, O, $) {
                  return function () {
                    var ue = this,
                      Se = arguments,
                      we = function () {
                        var pt, Pr;
                        if (!(V < E)) {
                          if (((pt = O.apply(ue, Se)), pt === W.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (Pr =
                            pt &&
                            (typeof pt == "object" ||
                              typeof pt == "function") &&
                            pt.then),
                            se(Pr)
                              ? $
                                ? Pr.call(pt, P(E, W, qt, $), P(E, W, an, $))
                                : (E++,
                                  Pr.call(
                                    pt,
                                    P(E, W, qt, $),
                                    P(E, W, an, $),
                                    P(E, W, qt, W.notifyWith)
                                  ))
                              : (O !== qt && ((ue = void 0), (Se = [pt])),
                                ($ || W.resolveWith)(ue, Se));
                        }
                      },
                      Dt = $
                        ? we
                        : function () {
                            try {
                              we();
                            } catch (pt) {
                              d.Deferred.exceptionHook &&
                                d.Deferred.exceptionHook(pt, Dt.error),
                                V + 1 >= E &&
                                  (O !== an && ((ue = void 0), (Se = [pt])),
                                  W.rejectWith(ue, Se));
                            }
                          };
                    V
                      ? Dt()
                      : (d.Deferred.getErrorHook
                          ? (Dt.error = d.Deferred.getErrorHook())
                          : d.Deferred.getStackHook &&
                            (Dt.error = d.Deferred.getStackHook()),
                        o.setTimeout(Dt));
                  };
                }
                return d
                  .Deferred(function (V) {
                    u[0][3].add(P(0, V, se(k) ? k : qt, V.notifyWith)),
                      u[1][3].add(P(0, V, se(m) ? m : qt)),
                      u[2][3].add(P(0, V, se(w) ? w : an));
                  })
                  .promise();
              },
              promise: function (m) {
                return m != null ? d.extend(m, f) : f;
              },
            },
            p = {};
          return (
            d.each(u, function (m, w) {
              var k = w[2],
                E = w[5];
              (f[w[1]] = k.add),
                E &&
                  k.add(
                    function () {
                      s = E;
                    },
                    u[3 - m][2].disable,
                    u[3 - m][3].disable,
                    u[0][2].lock,
                    u[0][3].lock
                  ),
                k.add(w[3].fire),
                (p[w[0]] = function () {
                  return (
                    p[w[0] + "With"](this === p ? void 0 : this, arguments),
                    this
                  );
                }),
                (p[w[0] + "With"] = k.fireWith);
            }),
            f.promise(p),
            r && r.call(p, p),
            p
          );
        },
        when: function (r) {
          var u = arguments.length,
            s = u,
            f = Array(s),
            p = S.call(arguments),
            m = d.Deferred(),
            w = function (k) {
              return function (E) {
                (f[k] = this),
                  (p[k] = arguments.length > 1 ? S.call(arguments) : E),
                  --u || m.resolveWith(f, p);
              };
            };
          if (
            u <= 1 &&
            (Mt(r, m.done(w(s)).resolve, m.reject, !u),
            m.state() === "pending" || se(p[s] && p[s].then))
          )
            return m.then();
          for (; s--; ) Mt(p[s], w(s), m.reject);
          return m.promise();
        },
      });
      var Jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (d.Deferred.exceptionHook = function (r, u) {
        o.console &&
          o.console.warn &&
          r &&
          Jt.test(r.name) &&
          o.console.warn("jQuery.Deferred exception: " + r.message, r.stack, u);
      }),
        (d.readyException = function (r) {
          o.setTimeout(function () {
            throw r;
          });
        });
      var Fr = d.Deferred();
      (d.fn.ready = function (r) {
        return (
          Fr.then(r).catch(function (u) {
            d.readyException(u);
          }),
          this
        );
      }),
        d.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (r) {
            (r === !0 ? --d.readyWait : d.isReady) ||
              ((d.isReady = !0),
              !(r !== !0 && --d.readyWait > 0) && Fr.resolveWith(pe, [d]));
          },
        }),
        (d.ready.then = Fr.then);
      function Lt() {
        pe.removeEventListener("DOMContentLoaded", Lt),
          o.removeEventListener("load", Lt),
          d.ready();
      }
      pe.readyState === "complete" ||
      (pe.readyState !== "loading" && !pe.documentElement.doScroll)
        ? o.setTimeout(d.ready)
        : (pe.addEventListener("DOMContentLoaded", Lt),
          o.addEventListener("load", Lt));
      var lr = function (r, u, s, f, p, m, w) {
          var k = 0,
            E = r.length,
            P = s == null;
          if (Bt(s) === "object") {
            p = !0;
            for (k in s) lr(r, u, k, s[k], !0, m, w);
          } else if (
            f !== void 0 &&
            ((p = !0),
            se(f) || (w = !0),
            P &&
              (w
                ? (u.call(r, f), (u = null))
                : ((P = u),
                  (u = function (V, W, O) {
                    return P.call(d(V), O);
                  }))),
            u)
          )
            for (; k < E; k++) u(r[k], s, w ? f : f.call(r[k], k, u(r[k], s)));
          return p ? r : P ? u.call(r) : E ? u(r[0], s) : m;
        },
        Ot = /^-ms-/,
        Vr = /-([a-z])/g;
      function st(r, u) {
        return u.toUpperCase();
      }
      function Ee(r) {
        return r.replace(Ot, "ms-").replace(Vr, st);
      }
      var cr = function (r) {
        return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
      };
      function Wn() {
        this.expando = d.expando + Wn.uid++;
      }
      (Wn.uid = 1),
        (Wn.prototype = {
          cache: function (r) {
            var u = r[this.expando];
            return (
              u ||
                ((u = {}),
                cr(r) &&
                  (r.nodeType
                    ? (r[this.expando] = u)
                    : Object.defineProperty(r, this.expando, {
                        value: u,
                        configurable: !0,
                      }))),
              u
            );
          },
          set: function (r, u, s) {
            var f,
              p = this.cache(r);
            if (typeof u == "string") p[Ee(u)] = s;
            else for (f in u) p[Ee(f)] = u[f];
            return p;
          },
          get: function (r, u) {
            return u === void 0
              ? this.cache(r)
              : r[this.expando] && r[this.expando][Ee(u)];
          },
          access: function (r, u, s) {
            return u === void 0 || (u && typeof u == "string" && s === void 0)
              ? this.get(r, u)
              : (this.set(r, u, s), s !== void 0 ? s : u);
          },
          remove: function (r, u) {
            var s,
              f = r[this.expando];
            if (f !== void 0) {
              if (u !== void 0)
                for (
                  Array.isArray(u)
                    ? (u = u.map(Ee))
                    : ((u = Ee(u)), (u = (u in f) ? [u] : u.match(rt) || [])),
                    s = u.length;
                  s--;

                )
                  delete f[u[s]];
              (u === void 0 || d.isEmptyObject(f)) &&
                (r.nodeType
                  ? (r[this.expando] = void 0)
                  : delete r[this.expando]);
            }
          },
          hasData: function (r) {
            var u = r[this.expando];
            return u !== void 0 && !d.isEmptyObject(u);
          },
        });
      var fe = new Wn(),
        Ft = new Wn(),
        Rn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        on = /[A-Z]/g;
      function In(r) {
        return r === "true"
          ? !0
          : r === "false"
          ? !1
          : r === "null"
          ? null
          : r === +r + ""
          ? +r
          : Rn.test(r)
          ? JSON.parse(r)
          : r;
      }
      function Xt(r, u, s) {
        var f;
        if (s === void 0 && r.nodeType === 1)
          if (
            ((f = "data-" + u.replace(on, "-$&").toLowerCase()),
            (s = r.getAttribute(f)),
            typeof s == "string")
          ) {
            try {
              s = In(s);
            } catch {}
            Ft.set(r, u, s);
          } else s = void 0;
        return s;
      }
      d.extend({
        hasData: function (r) {
          return Ft.hasData(r) || fe.hasData(r);
        },
        data: function (r, u, s) {
          return Ft.access(r, u, s);
        },
        removeData: function (r, u) {
          Ft.remove(r, u);
        },
        _data: function (r, u, s) {
          return fe.access(r, u, s);
        },
        _removeData: function (r, u) {
          fe.remove(r, u);
        },
      }),
        d.fn.extend({
          data: function (r, u) {
            var s,
              f,
              p,
              m = this[0],
              w = m && m.attributes;
            if (r === void 0) {
              if (
                this.length &&
                ((p = Ft.get(m)),
                m.nodeType === 1 && !fe.get(m, "hasDataAttrs"))
              ) {
                for (s = w.length; s--; )
                  w[s] &&
                    ((f = w[s].name),
                    f.indexOf("data-") === 0 &&
                      ((f = Ee(f.slice(5))), Xt(m, f, p[f])));
                fe.set(m, "hasDataAttrs", !0);
              }
              return p;
            }
            return typeof r == "object"
              ? this.each(function () {
                  Ft.set(this, r);
                })
              : lr(
                  this,
                  function (k) {
                    var E;
                    if (m && k === void 0)
                      return (
                        (E = Ft.get(m, r)),
                        E !== void 0 || ((E = Xt(m, r)), E !== void 0)
                          ? E
                          : void 0
                      );
                    this.each(function () {
                      Ft.set(this, r, k);
                    });
                  },
                  null,
                  u,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (r) {
            return this.each(function () {
              Ft.remove(this, r);
            });
          },
        }),
        d.extend({
          queue: function (r, u, s) {
            var f;
            if (r)
              return (
                (u = (u || "fx") + "queue"),
                (f = fe.get(r, u)),
                s &&
                  (!f || Array.isArray(s)
                    ? (f = fe.access(r, u, d.makeArray(s)))
                    : f.push(s)),
                f || []
              );
          },
          dequeue: function (r, u) {
            u = u || "fx";
            var s = d.queue(r, u),
              f = s.length,
              p = s.shift(),
              m = d._queueHooks(r, u),
              w = function () {
                d.dequeue(r, u);
              };
            p === "inprogress" && ((p = s.shift()), f--),
              p &&
                (u === "fx" && s.unshift("inprogress"),
                delete m.stop,
                p.call(r, w, m)),
              !f && m && m.empty.fire();
          },
          _queueHooks: function (r, u) {
            var s = u + "queueHooks";
            return (
              fe.get(r, s) ||
              fe.access(r, s, {
                empty: d.Callbacks("once memory").add(function () {
                  fe.remove(r, [u + "queue", s]);
                }),
              })
            );
          },
        }),
        d.fn.extend({
          queue: function (r, u) {
            var s = 2;
            return (
              typeof r != "string" && ((u = r), (r = "fx"), s--),
              arguments.length < s
                ? d.queue(this[0], r)
                : u === void 0
                ? this
                : this.each(function () {
                    var f = d.queue(this, r, u);
                    d._queueHooks(this, r),
                      r === "fx" && f[0] !== "inprogress" && d.dequeue(this, r);
                  })
            );
          },
          dequeue: function (r) {
            return this.each(function () {
              d.dequeue(this, r);
            });
          },
          clearQueue: function (r) {
            return this.queue(r || "fx", []);
          },
          promise: function (r, u) {
            var s,
              f = 1,
              p = d.Deferred(),
              m = this,
              w = this.length,
              k = function () {
                --f || p.resolveWith(m, [m]);
              };
            for (
              typeof r != "string" && ((u = r), (r = void 0)), r = r || "fx";
              w--;

            )
              (s = fe.get(m[w], r + "queueHooks")),
                s && s.empty && (f++, s.empty.add(k));
            return k(), p.promise(u);
          },
        });
      var Gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Qt = new RegExp("^(?:([+-])=|)(" + Gr + ")([a-z%]*)$", "i"),
        yr = ["Top", "Right", "Bottom", "Left"],
        Wt = pe.documentElement,
        fr = function (r) {
          return d.contains(r.ownerDocument, r);
        },
        hi = { composed: !0 };
      Wt.getRootNode &&
        (fr = function (r) {
          return (
            d.contains(r.ownerDocument, r) ||
            r.getRootNode(hi) === r.ownerDocument
          );
        });
      var Wr = function (r, u) {
        return (
          (r = u || r),
          r.style.display === "none" ||
            (r.style.display === "" && fr(r) && d.css(r, "display") === "none")
        );
      };
      function pi(r, u, s, f) {
        var p,
          m,
          w = 20,
          k = f
            ? function () {
                return f.cur();
              }
            : function () {
                return d.css(r, u, "");
              },
          E = k(),
          P = (s && s[3]) || (d.cssNumber[u] ? "" : "px"),
          V =
            r.nodeType &&
            (d.cssNumber[u] || (P !== "px" && +E)) &&
            Qt.exec(d.css(r, u));
        if (V && V[3] !== P) {
          for (E = E / 2, P = P || V[3], V = +E || 1; w--; )
            d.style(r, u, V + P),
              (1 - m) * (1 - (m = k() / E || 0.5)) <= 0 && (w = 0),
              (V = V / m);
          (V = V * 2), d.style(r, u, V + P), (s = s || []);
        }
        return (
          s &&
            ((V = +V || +E || 0),
            (p = s[1] ? V + (s[1] + 1) * s[2] : +s[2]),
            f && ((f.unit = P), (f.start = V), (f.end = p))),
          p
        );
      }
      var Eu = {};
      function Wi(r) {
        var u,
          s = r.ownerDocument,
          f = r.nodeName,
          p = Eu[f];
        return (
          p ||
          ((u = s.body.appendChild(s.createElement(f))),
          (p = d.css(u, "display")),
          u.parentNode.removeChild(u),
          p === "none" && (p = "block"),
          (Eu[f] = p),
          p)
        );
      }
      function zr(r, u) {
        for (var s, f, p = [], m = 0, w = r.length; m < w; m++)
          (f = r[m]),
            f.style &&
              ((s = f.style.display),
              u
                ? (s === "none" &&
                    ((p[m] = fe.get(f, "display") || null),
                    p[m] || (f.style.display = "")),
                  f.style.display === "" && Wr(f) && (p[m] = Wi(f)))
                : s !== "none" && ((p[m] = "none"), fe.set(f, "display", s)));
        for (m = 0; m < w; m++) p[m] != null && (r[m].style.display = p[m]);
        return r;
      }
      d.fn.extend({
        show: function () {
          return zr(this, !0);
        },
        hide: function () {
          return zr(this);
        },
        toggle: function (r) {
          return typeof r == "boolean"
            ? r
              ? this.show()
              : this.hide()
            : this.each(function () {
                Wr(this) ? d(this).show() : d(this).hide();
              });
        },
      });
      var jr = /^(?:checkbox|radio)$/i,
        Su = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        zt = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var r = pe.createDocumentFragment(),
          u = r.appendChild(pe.createElement("div")),
          s = pe.createElement("input");
        s.setAttribute("type", "radio"),
          s.setAttribute("checked", "checked"),
          s.setAttribute("name", "t"),
          u.appendChild(s),
          (de.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (u.innerHTML = "<textarea>x</textarea>"),
          (de.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue),
          (u.innerHTML = "<option></option>"),
          (de.option = !!u.lastChild);
      })();
      var mt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead),
        (mt.th = mt.td),
        de.option ||
          (mt.optgroup = mt.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      function jt(r, u) {
        var s;
        return (
          typeof r.getElementsByTagName < "u"
            ? (s = r.getElementsByTagName(u || "*"))
            : typeof r.querySelectorAll < "u"
            ? (s = r.querySelectorAll(u || "*"))
            : (s = []),
          u === void 0 || (u && X(r, u)) ? d.merge([r], s) : s
        );
      }
      function Ht(r, u) {
        for (var s = 0, f = r.length; s < f; s++)
          fe.set(r[s], "globalEval", !u || fe.get(u[s], "globalEval"));
      }
      var gi = /<|&#?\w+;/;
      function zi(r, u, s, f, p) {
        for (
          var m,
            w,
            k,
            E,
            P,
            V,
            W = u.createDocumentFragment(),
            O = [],
            $ = 0,
            ue = r.length;
          $ < ue;
          $++
        )
          if (((m = r[$]), m || m === 0))
            if (Bt(m) === "object") d.merge(O, m.nodeType ? [m] : m);
            else if (!gi.test(m)) O.push(u.createTextNode(m));
            else {
              for (
                w = w || W.appendChild(u.createElement("div")),
                  k = (Su.exec(m) || ["", ""])[1].toLowerCase(),
                  E = mt[k] || mt._default,
                  w.innerHTML = E[1] + d.htmlPrefilter(m) + E[2],
                  V = E[0];
                V--;

              )
                w = w.lastChild;
              d.merge(O, w.childNodes),
                (w = W.firstChild),
                (w.textContent = "");
            }
        for (W.textContent = "", $ = 0; (m = O[$++]); ) {
          if (f && d.inArray(m, f) > -1) {
            p && p.push(m);
            continue;
          }
          if (
            ((P = fr(m)), (w = jt(W.appendChild(m), "script")), P && Ht(w), s)
          )
            for (V = 0; (m = w[V++]); ) zt.test(m.type || "") && s.push(m);
        }
        return W;
      }
      var ji = /^([^.]*)(?:\.(.+)|)/;
      function Le() {
        return !0;
      }
      function Ut() {
        return !1;
      }
      function dr(r, u, s, f, p, m) {
        var w, k;
        if (typeof u == "object") {
          typeof s != "string" && ((f = f || s), (s = void 0));
          for (k in u) dr(r, k, s, f, u[k], m);
          return r;
        }
        if (
          (f == null && p == null
            ? ((p = s), (f = s = void 0))
            : p == null &&
              (typeof s == "string"
                ? ((p = f), (f = void 0))
                : ((p = f), (f = s), (s = void 0))),
          p === !1)
        )
          p = Ut;
        else if (!p) return r;
        return (
          m === 1 &&
            ((w = p),
            (p = function (E) {
              return d().off(E), w.apply(this, arguments);
            }),
            (p.guid = w.guid || (w.guid = d.guid++))),
          r.each(function () {
            d.event.add(this, u, p, f, s);
          })
        );
      }
      d.event = {
        global: {},
        add: function (r, u, s, f, p) {
          var m,
            w,
            k,
            E,
            P,
            V,
            W,
            O,
            $,
            ue,
            Se,
            we = fe.get(r);
          if (cr(r))
            for (
              s.handler && ((m = s), (s = m.handler), (p = m.selector)),
                p && d.find.matchesSelector(Wt, p),
                s.guid || (s.guid = d.guid++),
                (E = we.events) || (E = we.events = Object.create(null)),
                (w = we.handle) ||
                  (w = we.handle =
                    function (Dt) {
                      return typeof d < "u" && d.event.triggered !== Dt.type
                        ? d.event.dispatch.apply(r, arguments)
                        : void 0;
                    }),
                u = (u || "").match(rt) || [""],
                P = u.length;
              P--;

            )
              (k = ji.exec(u[P]) || []),
                ($ = Se = k[1]),
                (ue = (k[2] || "").split(".").sort()),
                $ &&
                  ((W = d.event.special[$] || {}),
                  ($ = (p ? W.delegateType : W.bindType) || $),
                  (W = d.event.special[$] || {}),
                  (V = d.extend(
                    {
                      type: $,
                      origType: Se,
                      data: f,
                      handler: s,
                      guid: s.guid,
                      selector: p,
                      needsContext: p && d.expr.match.needsContext.test(p),
                      namespace: ue.join("."),
                    },
                    m
                  )),
                  (O = E[$]) ||
                    ((O = E[$] = []),
                    (O.delegateCount = 0),
                    (!W.setup || W.setup.call(r, f, ue, w) === !1) &&
                      r.addEventListener &&
                      r.addEventListener($, w)),
                  W.add &&
                    (W.add.call(r, V),
                    V.handler.guid || (V.handler.guid = s.guid)),
                  p ? O.splice(O.delegateCount++, 0, V) : O.push(V),
                  (d.event.global[$] = !0));
        },
        remove: function (r, u, s, f, p) {
          var m,
            w,
            k,
            E,
            P,
            V,
            W,
            O,
            $,
            ue,
            Se,
            we = fe.hasData(r) && fe.get(r);
          if (!(!we || !(E = we.events))) {
            for (u = (u || "").match(rt) || [""], P = u.length; P--; ) {
              if (
                ((k = ji.exec(u[P]) || []),
                ($ = Se = k[1]),
                (ue = (k[2] || "").split(".").sort()),
                !$)
              ) {
                for ($ in E) d.event.remove(r, $ + u[P], s, f, !0);
                continue;
              }
              for (
                W = d.event.special[$] || {},
                  $ = (f ? W.delegateType : W.bindType) || $,
                  O = E[$] || [],
                  k =
                    k[2] &&
                    new RegExp(
                      "(^|\\.)" + ue.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    ),
                  w = m = O.length;
                m--;

              )
                (V = O[m]),
                  (p || Se === V.origType) &&
                    (!s || s.guid === V.guid) &&
                    (!k || k.test(V.namespace)) &&
                    (!f || f === V.selector || (f === "**" && V.selector)) &&
                    (O.splice(m, 1),
                    V.selector && O.delegateCount--,
                    W.remove && W.remove.call(r, V));
              w &&
                !O.length &&
                ((!W.teardown || W.teardown.call(r, ue, we.handle) === !1) &&
                  d.removeEvent(r, $, we.handle),
                delete E[$]);
            }
            d.isEmptyObject(E) && fe.remove(r, "handle events");
          }
        },
        dispatch: function (r) {
          var u,
            s,
            f,
            p,
            m,
            w,
            k = new Array(arguments.length),
            E = d.event.fix(r),
            P = (fe.get(this, "events") || Object.create(null))[E.type] || [],
            V = d.event.special[E.type] || {};
          for (k[0] = E, u = 1; u < arguments.length; u++) k[u] = arguments[u];
          if (
            ((E.delegateTarget = this),
            !(V.preDispatch && V.preDispatch.call(this, E) === !1))
          ) {
            for (
              w = d.event.handlers.call(this, E, P), u = 0;
              (p = w[u++]) && !E.isPropagationStopped();

            )
              for (
                E.currentTarget = p.elem, s = 0;
                (m = p.handlers[s++]) && !E.isImmediatePropagationStopped();

              )
                (!E.rnamespace ||
                  m.namespace === !1 ||
                  E.rnamespace.test(m.namespace)) &&
                  ((E.handleObj = m),
                  (E.data = m.data),
                  (f = (
                    (d.event.special[m.origType] || {}).handle || m.handler
                  ).apply(p.elem, k)),
                  f !== void 0 &&
                    (E.result = f) === !1 &&
                    (E.preventDefault(), E.stopPropagation()));
            return V.postDispatch && V.postDispatch.call(this, E), E.result;
          }
        },
        handlers: function (r, u) {
          var s,
            f,
            p,
            m,
            w,
            k = [],
            E = u.delegateCount,
            P = r.target;
          if (E && P.nodeType && !(r.type === "click" && r.button >= 1)) {
            for (; P !== this; P = P.parentNode || this)
              if (
                P.nodeType === 1 &&
                !(r.type === "click" && P.disabled === !0)
              ) {
                for (m = [], w = {}, s = 0; s < E; s++)
                  (f = u[s]),
                    (p = f.selector + " "),
                    w[p] === void 0 &&
                      (w[p] = f.needsContext
                        ? d(p, this).index(P) > -1
                        : d.find(p, this, null, [P]).length),
                    w[p] && m.push(f);
                m.length && k.push({ elem: P, handlers: m });
              }
          }
          return (
            (P = this),
            E < u.length && k.push({ elem: P, handlers: u.slice(E) }),
            k
          );
        },
        addProp: function (r, u) {
          Object.defineProperty(d.Event.prototype, r, {
            enumerable: !0,
            configurable: !0,
            get: se(u)
              ? function () {
                  if (this.originalEvent) return u(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[r];
                },
            set: function (s) {
              Object.defineProperty(this, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              });
            },
          });
        },
        fix: function (r) {
          return r[d.expando] ? r : new d.Event(r);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (r) {
              var u = this || r;
              return (
                jr.test(u.type) &&
                  u.click &&
                  X(u, "input") &&
                  Rr(u, "click", !0),
                !1
              );
            },
            trigger: function (r) {
              var u = this || r;
              return (
                jr.test(u.type) && u.click && X(u, "input") && Rr(u, "click"),
                !0
              );
            },
            _default: function (r) {
              var u = r.target;
              return (
                (jr.test(u.type) &&
                  u.click &&
                  X(u, "input") &&
                  fe.get(u, "click")) ||
                X(u, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (r) {
              r.result !== void 0 &&
                r.originalEvent &&
                (r.originalEvent.returnValue = r.result);
            },
          },
        },
      };
      function Rr(r, u, s) {
        if (!s) {
          fe.get(r, u) === void 0 && d.event.add(r, u, Le);
          return;
        }
        fe.set(r, u, !1),
          d.event.add(r, u, {
            namespace: !1,
            handler: function (f) {
              var p,
                m = fe.get(this, u);
              if (f.isTrigger & 1 && this[u]) {
                if (m)
                  (d.event.special[u] || {}).delegateType &&
                    f.stopPropagation();
                else if (
                  ((m = S.call(arguments)),
                  fe.set(this, u, m),
                  this[u](),
                  (p = fe.get(this, u)),
                  fe.set(this, u, !1),
                  m !== p)
                )
                  return f.stopImmediatePropagation(), f.preventDefault(), p;
              } else
                m &&
                  (fe.set(this, u, d.event.trigger(m[0], m.slice(1), this)),
                  f.stopPropagation(),
                  (f.isImmediatePropagationStopped = Le));
            },
          });
      }
      (d.removeEvent = function (r, u, s) {
        r.removeEventListener && r.removeEventListener(u, s);
      }),
        (d.Event = function (r, u) {
          if (!(this instanceof d.Event)) return new d.Event(r, u);
          r && r.type
            ? ((this.originalEvent = r),
              (this.type = r.type),
              (this.isDefaultPrevented =
                r.defaultPrevented ||
                (r.defaultPrevented === void 0 && r.returnValue === !1)
                  ? Le
                  : Ut),
              (this.target =
                r.target && r.target.nodeType === 3
                  ? r.target.parentNode
                  : r.target),
              (this.currentTarget = r.currentTarget),
              (this.relatedTarget = r.relatedTarget))
            : (this.type = r),
            u && d.extend(this, u),
            (this.timeStamp = (r && r.timeStamp) || Date.now()),
            (this[d.expando] = !0);
        }),
        (d.Event.prototype = {
          constructor: d.Event,
          isDefaultPrevented: Ut,
          isPropagationStopped: Ut,
          isImmediatePropagationStopped: Ut,
          isSimulated: !1,
          preventDefault: function () {
            var r = this.originalEvent;
            (this.isDefaultPrevented = Le),
              r && !this.isSimulated && r.preventDefault();
          },
          stopPropagation: function () {
            var r = this.originalEvent;
            (this.isPropagationStopped = Le),
              r && !this.isSimulated && r.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var r = this.originalEvent;
            (this.isImmediatePropagationStopped = Le),
              r && !this.isSimulated && r.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        d.each(
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
          d.event.addProp
        ),
        d.each({ focus: "focusin", blur: "focusout" }, function (r, u) {
          function s(f) {
            if (pe.documentMode) {
              var p = fe.get(this, "handle"),
                m = d.event.fix(f);
              (m.type = f.type === "focusin" ? "focus" : "blur"),
                (m.isSimulated = !0),
                p(f),
                m.target === m.currentTarget && p(m);
            } else d.event.simulate(u, f.target, d.event.fix(f));
          }
          (d.event.special[r] = {
            setup: function () {
              var f;
              if ((Rr(this, r, !0), pe.documentMode))
                (f = fe.get(this, u)),
                  f || this.addEventListener(u, s),
                  fe.set(this, u, (f || 0) + 1);
              else return !1;
            },
            trigger: function () {
              return Rr(this, r), !0;
            },
            teardown: function () {
              var f;
              if (pe.documentMode)
                (f = fe.get(this, u) - 1),
                  f
                    ? fe.set(this, u, f)
                    : (this.removeEventListener(u, s), fe.remove(this, u));
              else return !1;
            },
            _default: function (f) {
              return fe.get(f.target, r);
            },
            delegateType: u,
          }),
            (d.event.special[u] = {
              setup: function () {
                var f = this.ownerDocument || this.document || this,
                  p = pe.documentMode ? this : f,
                  m = fe.get(p, u);
                m ||
                  (pe.documentMode
                    ? this.addEventListener(u, s)
                    : f.addEventListener(r, s, !0)),
                  fe.set(p, u, (m || 0) + 1);
              },
              teardown: function () {
                var f = this.ownerDocument || this.document || this,
                  p = pe.documentMode ? this : f,
                  m = fe.get(p, u) - 1;
                m
                  ? fe.set(p, u, m)
                  : (pe.documentMode
                      ? this.removeEventListener(u, s)
                      : f.removeEventListener(r, s, !0),
                    fe.remove(p, u));
              },
            });
        }),
        d.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (r, u) {
            d.event.special[r] = {
              delegateType: u,
              bindType: u,
              handle: function (s) {
                var f,
                  p = this,
                  m = s.relatedTarget,
                  w = s.handleObj;
                return (
                  (!m || (m !== p && !d.contains(p, m))) &&
                    ((s.type = w.origType),
                    (f = w.handler.apply(this, arguments)),
                    (s.type = u)),
                  f
                );
              },
            };
          }
        ),
        d.fn.extend({
          on: function (r, u, s, f) {
            return dr(this, r, u, s, f);
          },
          one: function (r, u, s, f) {
            return dr(this, r, u, s, f, 1);
          },
          off: function (r, u, s) {
            var f, p;
            if (r && r.preventDefault && r.handleObj)
              return (
                (f = r.handleObj),
                d(r.delegateTarget).off(
                  f.namespace ? f.origType + "." + f.namespace : f.origType,
                  f.selector,
                  f.handler
                ),
                this
              );
            if (typeof r == "object") {
              for (p in r) this.off(p, u, r[p]);
              return this;
            }
            return (
              (u === !1 || typeof u == "function") && ((s = u), (u = void 0)),
              s === !1 && (s = Ut),
              this.each(function () {
                d.event.remove(this, r, s, u);
              })
            );
          },
        });
      var At = /<script|<style|<link/i,
        Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ki = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Yi(r, u) {
        return (
          (X(r, "table") &&
            X(u.nodeType !== 11 ? u : u.firstChild, "tr") &&
            d(r).children("tbody")[0]) ||
          r
        );
      }
      function zn(r) {
        return (r.type = (r.getAttribute("type") !== null) + "/" + r.type), r;
      }
      function er(r) {
        return (
          (r.type || "").slice(0, 5) === "true/"
            ? (r.type = r.type.slice(5))
            : r.removeAttribute("type"),
          r
        );
      }
      function Tu(r, u) {
        var s, f, p, m, w, k, E;
        if (u.nodeType === 1) {
          if (fe.hasData(r) && ((m = fe.get(r)), (E = m.events), E)) {
            fe.remove(u, "handle events");
            for (p in E)
              for (s = 0, f = E[p].length; s < f; s++)
                d.event.add(u, p, E[p][s]);
          }
          Ft.hasData(r) &&
            ((w = Ft.access(r)), (k = d.extend({}, w)), Ft.set(u, k));
        }
      }
      function $i(r, u) {
        var s = u.nodeName.toLowerCase();
        s === "input" && jr.test(r.type)
          ? (u.checked = r.checked)
          : (s === "input" || s === "textarea") &&
            (u.defaultValue = r.defaultValue);
      }
      function vn(r, u, s, f) {
        u = R(u);
        var p,
          m,
          w,
          k,
          E,
          P,
          V = 0,
          W = r.length,
          O = W - 1,
          $ = u[0],
          ue = se($);
        if (
          ue ||
          (W > 1 && typeof $ == "string" && !de.checkClone && Rt.test($))
        )
          return r.each(function (Se) {
            var we = r.eq(Se);
            ue && (u[0] = $.call(this, Se, we.html())), vn(we, u, s, f);
          });
        if (
          W &&
          ((p = zi(u, r[0].ownerDocument, !1, r, f)),
          (m = p.firstChild),
          p.childNodes.length === 1 && (p = m),
          m || f)
        ) {
          for (w = d.map(jt(p, "script"), zn), k = w.length; V < W; V++)
            (E = p),
              V !== O &&
                ((E = d.clone(E, !0, !0)), k && d.merge(w, jt(E, "script"))),
              s.call(r[V], E, V);
          if (k)
            for (
              P = w[w.length - 1].ownerDocument, d.map(w, er), V = 0;
              V < k;
              V++
            )
              (E = w[V]),
                zt.test(E.type || "") &&
                  !fe.access(E, "globalEval") &&
                  d.contains(P, E) &&
                  (E.src && (E.type || "").toLowerCase() !== "module"
                    ? d._evalUrl &&
                      !E.noModule &&
                      d._evalUrl(
                        E.src,
                        { nonce: E.nonce || E.getAttribute("nonce") },
                        P
                      )
                    : Tt(E.textContent.replace(Ki, ""), E, P));
        }
        return r;
      }
      function mi(r, u, s) {
        for (var f, p = u ? d.filter(u, r) : r, m = 0; (f = p[m]) != null; m++)
          !s && f.nodeType === 1 && d.cleanData(jt(f)),
            f.parentNode &&
              (s && fr(f) && Ht(jt(f, "script")), f.parentNode.removeChild(f));
        return r;
      }
      d.extend({
        htmlPrefilter: function (r) {
          return r;
        },
        clone: function (r, u, s) {
          var f,
            p,
            m,
            w,
            k = r.cloneNode(!0),
            E = fr(r);
          if (
            !de.noCloneChecked &&
            (r.nodeType === 1 || r.nodeType === 11) &&
            !d.isXMLDoc(r)
          )
            for (w = jt(k), m = jt(r), f = 0, p = m.length; f < p; f++)
              $i(m[f], w[f]);
          if (u)
            if (s)
              for (
                m = m || jt(r), w = w || jt(k), f = 0, p = m.length;
                f < p;
                f++
              )
                Tu(m[f], w[f]);
            else Tu(r, k);
          return (
            (w = jt(k, "script")),
            w.length > 0 && Ht(w, !E && jt(r, "script")),
            k
          );
        },
        cleanData: function (r) {
          for (
            var u, s, f, p = d.event.special, m = 0;
            (s = r[m]) !== void 0;
            m++
          )
            if (cr(s)) {
              if ((u = s[fe.expando])) {
                if (u.events)
                  for (f in u.events)
                    p[f] ? d.event.remove(s, f) : d.removeEvent(s, f, u.handle);
                s[fe.expando] = void 0;
              }
              s[Ft.expando] && (s[Ft.expando] = void 0);
            }
        },
      }),
        d.fn.extend({
          detach: function (r) {
            return mi(this, r, !0);
          },
          remove: function (r) {
            return mi(this, r);
          },
          text: function (r) {
            return lr(
              this,
              function (u) {
                return u === void 0
                  ? d.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = u);
                    });
              },
              null,
              r,
              arguments.length
            );
          },
          append: function () {
            return vn(this, arguments, function (r) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var u = Yi(this, r);
                u.appendChild(r);
              }
            });
          },
          prepend: function () {
            return vn(this, arguments, function (r) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var u = Yi(this, r);
                u.insertBefore(r, u.firstChild);
              }
            });
          },
          before: function () {
            return vn(this, arguments, function (r) {
              this.parentNode && this.parentNode.insertBefore(r, this);
            });
          },
          after: function () {
            return vn(this, arguments, function (r) {
              this.parentNode &&
                this.parentNode.insertBefore(r, this.nextSibling);
            });
          },
          empty: function () {
            for (var r, u = 0; (r = this[u]) != null; u++)
              r.nodeType === 1 &&
                (d.cleanData(jt(r, !1)), (r.textContent = ""));
            return this;
          },
          clone: function (r, u) {
            return (
              (r = r ?? !1),
              (u = u ?? r),
              this.map(function () {
                return d.clone(this, r, u);
              })
            );
          },
          html: function (r) {
            return lr(
              this,
              function (u) {
                var s = this[0] || {},
                  f = 0,
                  p = this.length;
                if (u === void 0 && s.nodeType === 1) return s.innerHTML;
                if (
                  typeof u == "string" &&
                  !At.test(u) &&
                  !mt[(Su.exec(u) || ["", ""])[1].toLowerCase()]
                ) {
                  u = d.htmlPrefilter(u);
                  try {
                    for (; f < p; f++)
                      (s = this[f] || {}),
                        s.nodeType === 1 &&
                          (d.cleanData(jt(s, !1)), (s.innerHTML = u));
                    s = 0;
                  } catch {}
                }
                s && this.empty().append(u);
              },
              null,
              r,
              arguments.length
            );
          },
          replaceWith: function () {
            var r = [];
            return vn(
              this,
              arguments,
              function (u) {
                var s = this.parentNode;
                d.inArray(this, r) < 0 &&
                  (d.cleanData(jt(this)), s && s.replaceChild(u, this));
              },
              r
            );
          },
        }),
        d.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (r, u) {
            d.fn[r] = function (s) {
              for (
                var f, p = [], m = d(s), w = m.length - 1, k = 0;
                k <= w;
                k++
              )
                (f = k === w ? this : this.clone(!0)),
                  d(m[k])[u](f),
                  G.apply(p, f.get());
              return this.pushStack(p);
            };
          }
        );
      var Zi = new RegExp("^(" + Gr + ")(?!px)[a-z%]+$", "i"),
        vi = /^--/,
        bi = function (r) {
          var u = r.ownerDocument.defaultView;
          return (!u || !u.opener) && (u = o), u.getComputedStyle(r);
        },
        Bu = function (r, u, s) {
          var f,
            p,
            m = {};
          for (p in u) (m[p] = r.style[p]), (r.style[p] = u[p]);
          f = s.call(r);
          for (p in u) r.style[p] = m[p];
          return f;
        },
        Ir = new RegExp(yr.join("|"), "i");
      (function () {
        function r() {
          if (P) {
            (E.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (P.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Wt.appendChild(E).appendChild(P);
            var V = o.getComputedStyle(P);
            (s = V.top !== "1%"),
              (k = u(V.marginLeft) === 12),
              (P.style.right = "60%"),
              (m = u(V.right) === 36),
              (f = u(V.width) === 36),
              (P.style.position = "absolute"),
              (p = u(P.offsetWidth / 3) === 12),
              Wt.removeChild(E),
              (P = null);
          }
        }
        function u(V) {
          return Math.round(parseFloat(V));
        }
        var s,
          f,
          p,
          m,
          w,
          k,
          E = pe.createElement("div"),
          P = pe.createElement("div");
        P.style &&
          ((P.style.backgroundClip = "content-box"),
          (P.cloneNode(!0).style.backgroundClip = ""),
          (de.clearCloneStyle = P.style.backgroundClip === "content-box"),
          d.extend(de, {
            boxSizingReliable: function () {
              return r(), f;
            },
            pixelBoxStyles: function () {
              return r(), m;
            },
            pixelPosition: function () {
              return r(), s;
            },
            reliableMarginLeft: function () {
              return r(), k;
            },
            scrollboxSize: function () {
              return r(), p;
            },
            reliableTrDimensions: function () {
              var V, W, O, $;
              return (
                w == null &&
                  ((V = pe.createElement("table")),
                  (W = pe.createElement("tr")),
                  (O = pe.createElement("div")),
                  (V.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (W.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (W.style.height = "1px"),
                  (O.style.height = "9px"),
                  (O.style.display = "block"),
                  Wt.appendChild(V).appendChild(W).appendChild(O),
                  ($ = o.getComputedStyle(W)),
                  (w =
                    parseInt($.height, 10) +
                      parseInt($.borderTopWidth, 10) +
                      parseInt($.borderBottomWidth, 10) ===
                    W.offsetHeight),
                  Wt.removeChild(V)),
                w
              );
            },
          }));
      })();
      function jn(r, u, s) {
        var f,
          p,
          m,
          w,
          k = vi.test(u),
          E = r.style;
        return (
          (s = s || bi(r)),
          s &&
            ((w = s.getPropertyValue(u) || s[u]),
            k && w && (w = w.replace(ot, "$1") || void 0),
            w === "" && !fr(r) && (w = d.style(r, u)),
            !de.pixelBoxStyles() &&
              Zi.test(w) &&
              Ir.test(u) &&
              ((f = E.width),
              (p = E.minWidth),
              (m = E.maxWidth),
              (E.minWidth = E.maxWidth = E.width = w),
              (w = s.width),
              (E.width = f),
              (E.minWidth = p),
              (E.maxWidth = m))),
          w !== void 0 ? w + "" : w
        );
      }
      function Kn(r, u) {
        return {
          get: function () {
            if (r()) {
              delete this.get;
              return;
            }
            return (this.get = u).apply(this, arguments);
          },
        };
      }
      var ku = ["Webkit", "Moz", "ms"],
        _u = pe.createElement("div").style,
        Lu = {};
      function wi(r) {
        for (var u = r[0].toUpperCase() + r.slice(1), s = ku.length; s--; )
          if (((r = ku[s] + u), r in _u)) return r;
      }
      function Ai(r) {
        var u = d.cssProps[r] || Lu[r];
        return u || (r in _u ? r : (Lu[r] = wi(r) || r));
      }
      var Fu = /^(none|table(?!-c[ea]).+)/,
        bn = { position: "absolute", visibility: "hidden", display: "block" },
        Ru = { letterSpacing: "0", fontWeight: "400" };
      function Iu(r, u, s) {
        var f = Qt.exec(u);
        return f ? Math.max(0, f[2] - (s || 0)) + (f[3] || "px") : u;
      }
      function Ji(r, u, s, f, p, m) {
        var w = u === "width" ? 1 : 0,
          k = 0,
          E = 0,
          P = 0;
        if (s === (f ? "border" : "content")) return 0;
        for (; w < 4; w += 2)
          s === "margin" && (P += d.css(r, s + yr[w], !0, p)),
            f
              ? (s === "content" && (E -= d.css(r, "padding" + yr[w], !0, p)),
                s !== "margin" &&
                  (E -= d.css(r, "border" + yr[w] + "Width", !0, p)))
              : ((E += d.css(r, "padding" + yr[w], !0, p)),
                s !== "padding"
                  ? (E += d.css(r, "border" + yr[w] + "Width", !0, p))
                  : (k += d.css(r, "border" + yr[w] + "Width", !0, p)));
        return (
          !f &&
            m >= 0 &&
            (E +=
              Math.max(
                0,
                Math.ceil(
                  r["offset" + u[0].toUpperCase() + u.slice(1)] -
                    m -
                    E -
                    k -
                    0.5
                )
              ) || 0),
          E + P
        );
      }
      function Yn(r, u, s) {
        var f = bi(r),
          p = !de.boxSizingReliable() || s,
          m = p && d.css(r, "boxSizing", !1, f) === "border-box",
          w = m,
          k = jn(r, u, f),
          E = "offset" + u[0].toUpperCase() + u.slice(1);
        if (Zi.test(k)) {
          if (!s) return k;
          k = "auto";
        }
        return (
          ((!de.boxSizingReliable() && m) ||
            (!de.reliableTrDimensions() && X(r, "tr")) ||
            k === "auto" ||
            (!parseFloat(k) && d.css(r, "display", !1, f) === "inline")) &&
            r.getClientRects().length &&
            ((m = d.css(r, "boxSizing", !1, f) === "border-box"),
            (w = E in r),
            w && (k = r[E])),
          (k = parseFloat(k) || 0),
          k + Ji(r, u, s || (m ? "border" : "content"), w, f, k) + "px"
        );
      }
      d.extend({
        cssHooks: {
          opacity: {
            get: function (r, u) {
              if (u) {
                var s = jn(r, "opacity");
                return s === "" ? "1" : s;
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
        style: function (r, u, s, f) {
          if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
            var p,
              m,
              w,
              k = Ee(u),
              E = vi.test(u),
              P = r.style;
            if (
              (E || (u = Ai(k)),
              (w = d.cssHooks[u] || d.cssHooks[k]),
              s !== void 0)
            ) {
              if (
                ((m = typeof s),
                m === "string" &&
                  (p = Qt.exec(s)) &&
                  p[1] &&
                  ((s = pi(r, u, p)), (m = "number")),
                s == null || s !== s)
              )
                return;
              m === "number" &&
                !E &&
                (s += (p && p[3]) || (d.cssNumber[k] ? "" : "px")),
                !de.clearCloneStyle &&
                  s === "" &&
                  u.indexOf("background") === 0 &&
                  (P[u] = "inherit"),
                (!w || !("set" in w) || (s = w.set(r, s, f)) !== void 0) &&
                  (E ? P.setProperty(u, s) : (P[u] = s));
            } else
              return w && "get" in w && (p = w.get(r, !1, f)) !== void 0
                ? p
                : P[u];
          }
        },
        css: function (r, u, s, f) {
          var p,
            m,
            w,
            k = Ee(u),
            E = vi.test(u);
          return (
            E || (u = Ai(k)),
            (w = d.cssHooks[u] || d.cssHooks[k]),
            w && "get" in w && (p = w.get(r, !0, s)),
            p === void 0 && (p = jn(r, u, f)),
            p === "normal" && u in Ru && (p = Ru[u]),
            s === "" || s
              ? ((m = parseFloat(p)), s === !0 || isFinite(m) ? m || 0 : p)
              : p
          );
        },
      }),
        d.each(["height", "width"], function (r, u) {
          d.cssHooks[u] = {
            get: function (s, f, p) {
              if (f)
                return Fu.test(d.css(s, "display")) &&
                  (!s.getClientRects().length ||
                    !s.getBoundingClientRect().width)
                  ? Bu(s, bn, function () {
                      return Yn(s, u, p);
                    })
                  : Yn(s, u, p);
            },
            set: function (s, f, p) {
              var m,
                w = bi(s),
                k = !de.scrollboxSize() && w.position === "absolute",
                E = k || p,
                P = E && d.css(s, "boxSizing", !1, w) === "border-box",
                V = p ? Ji(s, u, p, P, w) : 0;
              return (
                P &&
                  k &&
                  (V -= Math.ceil(
                    s["offset" + u[0].toUpperCase() + u.slice(1)] -
                      parseFloat(w[u]) -
                      Ji(s, u, "border", !1, w) -
                      0.5
                  )),
                V &&
                  (m = Qt.exec(f)) &&
                  (m[3] || "px") !== "px" &&
                  ((s.style[u] = f), (f = d.css(s, u))),
                Iu(s, f, V)
              );
            },
          };
        }),
        (d.cssHooks.marginLeft = Kn(de.reliableMarginLeft, function (r, u) {
          if (u)
            return (
              (parseFloat(jn(r, "marginLeft")) ||
                r.getBoundingClientRect().left -
                  Bu(r, { marginLeft: 0 }, function () {
                    return r.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        d.each({ margin: "", padding: "", border: "Width" }, function (r, u) {
          (d.cssHooks[r + u] = {
            expand: function (s) {
              for (
                var f = 0,
                  p = {},
                  m = typeof s == "string" ? s.split(" ") : [s];
                f < 4;
                f++
              )
                p[r + yr[f] + u] = m[f] || m[f - 2] || m[0];
              return p;
            },
          }),
            r !== "margin" && (d.cssHooks[r + u].set = Iu);
        }),
        d.fn.extend({
          css: function (r, u) {
            return lr(
              this,
              function (s, f, p) {
                var m,
                  w,
                  k = {},
                  E = 0;
                if (Array.isArray(f)) {
                  for (m = bi(s), w = f.length; E < w; E++)
                    k[f[E]] = d.css(s, f[E], !1, m);
                  return k;
                }
                return p !== void 0 ? d.style(s, f, p) : d.css(s, f);
              },
              r,
              u,
              arguments.length > 1
            );
          },
        });
      function Vt(r, u, s, f, p) {
        return new Vt.prototype.init(r, u, s, f, p);
      }
      (d.Tween = Vt),
        (Vt.prototype = {
          constructor: Vt,
          init: function (r, u, s, f, p, m) {
            (this.elem = r),
              (this.prop = s),
              (this.easing = p || d.easing._default),
              (this.options = u),
              (this.start = this.now = this.cur()),
              (this.end = f),
              (this.unit = m || (d.cssNumber[s] ? "" : "px"));
          },
          cur: function () {
            var r = Vt.propHooks[this.prop];
            return r && r.get ? r.get(this) : Vt.propHooks._default.get(this);
          },
          run: function (r) {
            var u,
              s = Vt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = u =
                    d.easing[this.easing](
                      r,
                      this.options.duration * r,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = u = r),
              (this.now = (this.end - this.start) * u + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              s && s.set ? s.set(this) : Vt.propHooks._default.set(this),
              this
            );
          },
        }),
        (Vt.prototype.init.prototype = Vt.prototype),
        (Vt.propHooks = {
          _default: {
            get: function (r) {
              var u;
              return r.elem.nodeType !== 1 ||
                (r.elem[r.prop] != null && r.elem.style[r.prop] == null)
                ? r.elem[r.prop]
                : ((u = d.css(r.elem, r.prop, "")), !u || u === "auto" ? 0 : u);
            },
            set: function (r) {
              d.fx.step[r.prop]
                ? d.fx.step[r.prop](r)
                : r.elem.nodeType === 1 &&
                  (d.cssHooks[r.prop] || r.elem.style[Ai(r.prop)] != null)
                ? d.style(r.elem, r.prop, r.now + r.unit)
                : (r.elem[r.prop] = r.now);
            },
          },
        }),
        (Vt.propHooks.scrollTop = Vt.propHooks.scrollLeft =
          {
            set: function (r) {
              r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
            },
          }),
        (d.easing = {
          linear: function (r) {
            return r;
          },
          swing: function (r) {
            return 0.5 - Math.cos(r * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (d.fx = Vt.prototype.init),
        (d.fx.step = {});
      var wn,
        Pn,
        ca = /^(?:toggle|show|hide)$/,
        Pu = /queueHooks$/;
      function Ye() {
        Pn &&
          (pe.hidden === !1 && o.requestAnimationFrame
            ? o.requestAnimationFrame(Ye)
            : o.setTimeout(Ye, d.fx.interval),
          d.fx.tick());
      }
      function Xi() {
        return (
          o.setTimeout(function () {
            wn = void 0;
          }),
          (wn = Date.now())
        );
      }
      function yi(r, u) {
        var s,
          f = 0,
          p = { height: r };
        for (u = u ? 1 : 0; f < 4; f += 2 - u)
          (s = yr[f]), (p["margin" + s] = p["padding" + s] = r);
        return u && (p.opacity = p.width = r), p;
      }
      function Qi(r, u, s) {
        for (
          var f,
            p = (Dr.tweeners[u] || []).concat(Dr.tweeners["*"]),
            m = 0,
            w = p.length;
          m < w;
          m++
        )
          if ((f = p[m].call(s, u, r))) return f;
      }
      function Nu(r, u, s) {
        var f,
          p,
          m,
          w,
          k,
          E,
          P,
          V,
          W = "width" in u || "height" in u,
          O = this,
          $ = {},
          ue = r.style,
          Se = r.nodeType && Wr(r),
          we = fe.get(r, "fxshow");
        s.queue ||
          ((w = d._queueHooks(r, "fx")),
          w.unqueued == null &&
            ((w.unqueued = 0),
            (k = w.empty.fire),
            (w.empty.fire = function () {
              w.unqueued || k();
            })),
          w.unqueued++,
          O.always(function () {
            O.always(function () {
              w.unqueued--, d.queue(r, "fx").length || w.empty.fire();
            });
          }));
        for (f in u)
          if (((p = u[f]), ca.test(p))) {
            if (
              (delete u[f],
              (m = m || p === "toggle"),
              p === (Se ? "hide" : "show"))
            )
              if (p === "show" && we && we[f] !== void 0) Se = !0;
              else continue;
            $[f] = (we && we[f]) || d.style(r, f);
          }
        if (((E = !d.isEmptyObject(u)), !(!E && d.isEmptyObject($)))) {
          W &&
            r.nodeType === 1 &&
            ((s.overflow = [ue.overflow, ue.overflowX, ue.overflowY]),
            (P = we && we.display),
            P == null && (P = fe.get(r, "display")),
            (V = d.css(r, "display")),
            V === "none" &&
              (P
                ? (V = P)
                : (zr([r], !0),
                  (P = r.style.display || P),
                  (V = d.css(r, "display")),
                  zr([r]))),
            (V === "inline" || (V === "inline-block" && P != null)) &&
              d.css(r, "float") === "none" &&
              (E ||
                (O.done(function () {
                  ue.display = P;
                }),
                P == null && ((V = ue.display), (P = V === "none" ? "" : V))),
              (ue.display = "inline-block"))),
            s.overflow &&
              ((ue.overflow = "hidden"),
              O.always(function () {
                (ue.overflow = s.overflow[0]),
                  (ue.overflowX = s.overflow[1]),
                  (ue.overflowY = s.overflow[2]);
              })),
            (E = !1);
          for (f in $)
            E ||
              (we
                ? "hidden" in we && (Se = we.hidden)
                : (we = fe.access(r, "fxshow", { display: P })),
              m && (we.hidden = !Se),
              Se && zr([r], !0),
              O.done(function () {
                Se || zr([r]), fe.remove(r, "fxshow");
                for (f in $) d.style(r, f, $[f]);
              })),
              (E = Qi(Se ? we[f] : 0, f, O)),
              f in we ||
                ((we[f] = E.start), Se && ((E.end = E.start), (E.start = 0)));
        }
      }
      function eu(r, u) {
        var s, f, p, m, w;
        for (s in r)
          if (
            ((f = Ee(s)),
            (p = u[f]),
            (m = r[s]),
            Array.isArray(m) && ((p = m[1]), (m = r[s] = m[0])),
            s !== f && ((r[f] = m), delete r[s]),
            (w = d.cssHooks[f]),
            w && "expand" in w)
          ) {
            (m = w.expand(m)), delete r[f];
            for (s in m) s in r || ((r[s] = m[s]), (u[s] = p));
          } else u[f] = p;
      }
      function Dr(r, u, s) {
        var f,
          p,
          m = 0,
          w = Dr.prefilters.length,
          k = d.Deferred().always(function () {
            delete E.elem;
          }),
          E = function () {
            if (p) return !1;
            for (
              var W = wn || Xi(),
                O = Math.max(0, P.startTime + P.duration - W),
                $ = O / P.duration || 0,
                ue = 1 - $,
                Se = 0,
                we = P.tweens.length;
              Se < we;
              Se++
            )
              P.tweens[Se].run(ue);
            return (
              k.notifyWith(r, [P, ue, O]),
              ue < 1 && we
                ? O
                : (we || k.notifyWith(r, [P, 1, 0]), k.resolveWith(r, [P]), !1)
            );
          },
          P = k.promise({
            elem: r,
            props: d.extend({}, u),
            opts: d.extend(
              !0,
              { specialEasing: {}, easing: d.easing._default },
              s
            ),
            originalProperties: u,
            originalOptions: s,
            startTime: wn || Xi(),
            duration: s.duration,
            tweens: [],
            createTween: function (W, O) {
              var $ = d.Tween(
                r,
                P.opts,
                W,
                O,
                P.opts.specialEasing[W] || P.opts.easing
              );
              return P.tweens.push($), $;
            },
            stop: function (W) {
              var O = 0,
                $ = W ? P.tweens.length : 0;
              if (p) return this;
              for (p = !0; O < $; O++) P.tweens[O].run(1);
              return (
                W
                  ? (k.notifyWith(r, [P, 1, 0]), k.resolveWith(r, [P, W]))
                  : k.rejectWith(r, [P, W]),
                this
              );
            },
          }),
          V = P.props;
        for (eu(V, P.opts.specialEasing); m < w; m++)
          if (((f = Dr.prefilters[m].call(P, r, V, P.opts)), f))
            return (
              se(f.stop) &&
                (d._queueHooks(P.elem, P.opts.queue).stop = f.stop.bind(f)),
              f
            );
        return (
          d.map(V, Qi, P),
          se(P.opts.start) && P.opts.start.call(r, P),
          P.progress(P.opts.progress)
            .done(P.opts.done, P.opts.complete)
            .fail(P.opts.fail)
            .always(P.opts.always),
          d.fx.timer(d.extend(E, { elem: r, anim: P, queue: P.opts.queue })),
          P
        );
      }
      (d.Animation = d.extend(Dr, {
        tweeners: {
          "*": [
            function (r, u) {
              var s = this.createTween(r, u);
              return pi(s.elem, r, Qt.exec(u), s), s;
            },
          ],
        },
        tweener: function (r, u) {
          se(r) ? ((u = r), (r = ["*"])) : (r = r.match(rt));
          for (var s, f = 0, p = r.length; f < p; f++)
            (s = r[f]),
              (Dr.tweeners[s] = Dr.tweeners[s] || []),
              Dr.tweeners[s].unshift(u);
        },
        prefilters: [Nu],
        prefilter: function (r, u) {
          u ? Dr.prefilters.unshift(r) : Dr.prefilters.push(r);
        },
      })),
        (d.speed = function (r, u, s) {
          var f =
            r && typeof r == "object"
              ? d.extend({}, r)
              : {
                  complete: s || (!s && u) || (se(r) && r),
                  duration: r,
                  easing: (s && u) || (u && !se(u) && u),
                };
          return (
            d.fx.off
              ? (f.duration = 0)
              : typeof f.duration != "number" &&
                (f.duration in d.fx.speeds
                  ? (f.duration = d.fx.speeds[f.duration])
                  : (f.duration = d.fx.speeds._default)),
            (f.queue == null || f.queue === !0) && (f.queue = "fx"),
            (f.old = f.complete),
            (f.complete = function () {
              se(f.old) && f.old.call(this),
                f.queue && d.dequeue(this, f.queue);
            }),
            f
          );
        }),
        d.fn.extend({
          fadeTo: function (r, u, s, f) {
            return this.filter(Wr)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: u }, r, s, f);
          },
          animate: function (r, u, s, f) {
            var p = d.isEmptyObject(r),
              m = d.speed(u, s, f),
              w = function () {
                var k = Dr(this, d.extend({}, r), m);
                (p || fe.get(this, "finish")) && k.stop(!0);
              };
            return (
              (w.finish = w),
              p || m.queue === !1 ? this.each(w) : this.queue(m.queue, w)
            );
          },
          stop: function (r, u, s) {
            var f = function (p) {
              var m = p.stop;
              delete p.stop, m(s);
            };
            return (
              typeof r != "string" && ((s = u), (u = r), (r = void 0)),
              u && this.queue(r || "fx", []),
              this.each(function () {
                var p = !0,
                  m = r != null && r + "queueHooks",
                  w = d.timers,
                  k = fe.get(this);
                if (m) k[m] && k[m].stop && f(k[m]);
                else for (m in k) k[m] && k[m].stop && Pu.test(m) && f(k[m]);
                for (m = w.length; m--; )
                  w[m].elem === this &&
                    (r == null || w[m].queue === r) &&
                    (w[m].anim.stop(s), (p = !1), w.splice(m, 1));
                (p || !s) && d.dequeue(this, r);
              })
            );
          },
          finish: function (r) {
            return (
              r !== !1 && (r = r || "fx"),
              this.each(function () {
                var u,
                  s = fe.get(this),
                  f = s[r + "queue"],
                  p = s[r + "queueHooks"],
                  m = d.timers,
                  w = f ? f.length : 0;
                for (
                  s.finish = !0,
                    d.queue(this, r, []),
                    p && p.stop && p.stop.call(this, !0),
                    u = m.length;
                  u--;

                )
                  m[u].elem === this &&
                    m[u].queue === r &&
                    (m[u].anim.stop(!0), m.splice(u, 1));
                for (u = 0; u < w; u++)
                  f[u] && f[u].finish && f[u].finish.call(this);
                delete s.finish;
              })
            );
          },
        }),
        d.each(["toggle", "show", "hide"], function (r, u) {
          var s = d.fn[u];
          d.fn[u] = function (f, p, m) {
            return f == null || typeof f == "boolean"
              ? s.apply(this, arguments)
              : this.animate(yi(u, !0), f, p, m);
          };
        }),
        d.each(
          {
            slideDown: yi("show"),
            slideUp: yi("hide"),
            slideToggle: yi("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (r, u) {
            d.fn[r] = function (s, f, p) {
              return this.animate(u, s, f, p);
            };
          }
        ),
        (d.timers = []),
        (d.fx.tick = function () {
          var r,
            u = 0,
            s = d.timers;
          for (wn = Date.now(); u < s.length; u++)
            (r = s[u]), !r() && s[u] === r && s.splice(u--, 1);
          s.length || d.fx.stop(), (wn = void 0);
        }),
        (d.fx.timer = function (r) {
          d.timers.push(r), d.fx.start();
        }),
        (d.fx.interval = 13),
        (d.fx.start = function () {
          Pn || ((Pn = !0), Ye());
        }),
        (d.fx.stop = function () {
          Pn = null;
        }),
        (d.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (d.fn.delay = function (r, u) {
          return (
            (r = (d.fx && d.fx.speeds[r]) || r),
            (u = u || "fx"),
            this.queue(u, function (s, f) {
              var p = o.setTimeout(s, r);
              f.stop = function () {
                o.clearTimeout(p);
              };
            })
          );
        }),
        (function () {
          var r = pe.createElement("input"),
            u = pe.createElement("select"),
            s = u.appendChild(pe.createElement("option"));
          (r.type = "checkbox"),
            (de.checkOn = r.value !== ""),
            (de.optSelected = s.selected),
            (r = pe.createElement("input")),
            (r.value = "t"),
            (r.type = "radio"),
            (de.radioValue = r.value === "t");
        })();
      var $n,
        xr = d.expr.attrHandle;
      d.fn.extend({
        attr: function (r, u) {
          return lr(this, d.attr, r, u, arguments.length > 1);
        },
        removeAttr: function (r) {
          return this.each(function () {
            d.removeAttr(this, r);
          });
        },
      }),
        d.extend({
          attr: function (r, u, s) {
            var f,
              p,
              m = r.nodeType;
            if (!(m === 3 || m === 8 || m === 2)) {
              if (typeof r.getAttribute > "u") return d.prop(r, u, s);
              if (
                ((m !== 1 || !d.isXMLDoc(r)) &&
                  (p =
                    d.attrHooks[u.toLowerCase()] ||
                    (d.expr.match.bool.test(u) ? $n : void 0)),
                s !== void 0)
              ) {
                if (s === null) {
                  d.removeAttr(r, u);
                  return;
                }
                return p && "set" in p && (f = p.set(r, s, u)) !== void 0
                  ? f
                  : (r.setAttribute(u, s + ""), s);
              }
              return p && "get" in p && (f = p.get(r, u)) !== null
                ? f
                : ((f = d.find.attr(r, u)), f ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (r, u) {
                if (!de.radioValue && u === "radio" && X(r, "input")) {
                  var s = r.value;
                  return r.setAttribute("type", u), s && (r.value = s), u;
                }
              },
            },
          },
          removeAttr: function (r, u) {
            var s,
              f = 0,
              p = u && u.match(rt);
            if (p && r.nodeType === 1)
              for (; (s = p[f++]); ) r.removeAttribute(s);
          },
        }),
        ($n = {
          set: function (r, u, s) {
            return u === !1 ? d.removeAttr(r, s) : r.setAttribute(s, s), s;
          },
        }),
        d.each(d.expr.match.bool.source.match(/\w+/g), function (r, u) {
          var s = xr[u] || d.find.attr;
          xr[u] = function (f, p, m) {
            var w,
              k,
              E = p.toLowerCase();
            return (
              m ||
                ((k = xr[E]),
                (xr[E] = w),
                (w = s(f, p, m) != null ? E : null),
                (xr[E] = k)),
              w
            );
          };
        });
      var Di = /^(?:input|select|textarea|button)$/i,
        Kr = /^(?:a|area)$/i;
      d.fn.extend({
        prop: function (r, u) {
          return lr(this, d.prop, r, u, arguments.length > 1);
        },
        removeProp: function (r) {
          return this.each(function () {
            delete this[d.propFix[r] || r];
          });
        },
      }),
        d.extend({
          prop: function (r, u, s) {
            var f,
              p,
              m = r.nodeType;
            if (!(m === 3 || m === 8 || m === 2))
              return (
                (m !== 1 || !d.isXMLDoc(r)) &&
                  ((u = d.propFix[u] || u), (p = d.propHooks[u])),
                s !== void 0
                  ? p && "set" in p && (f = p.set(r, s, u)) !== void 0
                    ? f
                    : (r[u] = s)
                  : p && "get" in p && (f = p.get(r, u)) !== null
                  ? f
                  : r[u]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (r) {
                var u = d.find.attr(r, "tabindex");
                return u
                  ? parseInt(u, 10)
                  : Di.test(r.nodeName) || (Kr.test(r.nodeName) && r.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        de.optSelected ||
          (d.propHooks.selected = {
            get: function (r) {
              var u = r.parentNode;
              return u && u.parentNode && u.parentNode.selectedIndex, null;
            },
            set: function (r) {
              var u = r.parentNode;
              u &&
                (u.selectedIndex, u.parentNode && u.parentNode.selectedIndex);
            },
          }),
        d.each(
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
            d.propFix[this.toLowerCase()] = this;
          }
        );
      function Xe(r) {
        var u = r.match(rt) || [];
        return u.join(" ");
      }
      function sn(r) {
        return (r.getAttribute && r.getAttribute("class")) || "";
      }
      function tu(r) {
        return Array.isArray(r)
          ? r
          : typeof r == "string"
          ? r.match(rt) || []
          : [];
      }
      d.fn.extend({
        addClass: function (r) {
          var u, s, f, p, m, w;
          return se(r)
            ? this.each(function (k) {
                d(this).addClass(r.call(this, k, sn(this)));
              })
            : ((u = tu(r)),
              u.length
                ? this.each(function () {
                    if (
                      ((f = sn(this)),
                      (s = this.nodeType === 1 && " " + Xe(f) + " "),
                      s)
                    ) {
                      for (m = 0; m < u.length; m++)
                        (p = u[m]),
                          s.indexOf(" " + p + " ") < 0 && (s += p + " ");
                      (w = Xe(s)), f !== w && this.setAttribute("class", w);
                    }
                  })
                : this);
        },
        removeClass: function (r) {
          var u, s, f, p, m, w;
          return se(r)
            ? this.each(function (k) {
                d(this).removeClass(r.call(this, k, sn(this)));
              })
            : arguments.length
            ? ((u = tu(r)),
              u.length
                ? this.each(function () {
                    if (
                      ((f = sn(this)),
                      (s = this.nodeType === 1 && " " + Xe(f) + " "),
                      s)
                    ) {
                      for (m = 0; m < u.length; m++)
                        for (p = u[m]; s.indexOf(" " + p + " ") > -1; )
                          s = s.replace(" " + p + " ", " ");
                      (w = Xe(s)), f !== w && this.setAttribute("class", w);
                    }
                  })
                : this)
            : this.attr("class", "");
        },
        toggleClass: function (r, u) {
          var s,
            f,
            p,
            m,
            w = typeof r,
            k = w === "string" || Array.isArray(r);
          return se(r)
            ? this.each(function (E) {
                d(this).toggleClass(r.call(this, E, sn(this), u), u);
              })
            : typeof u == "boolean" && k
            ? u
              ? this.addClass(r)
              : this.removeClass(r)
            : ((s = tu(r)),
              this.each(function () {
                if (k)
                  for (m = d(this), p = 0; p < s.length; p++)
                    (f = s[p]),
                      m.hasClass(f) ? m.removeClass(f) : m.addClass(f);
                else
                  (r === void 0 || w === "boolean") &&
                    ((f = sn(this)),
                    f && fe.set(this, "__className__", f),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        f || r === !1 ? "" : fe.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (r) {
          var u,
            s,
            f = 0;
          for (u = " " + r + " "; (s = this[f++]); )
            if (s.nodeType === 1 && (" " + Xe(sn(s)) + " ").indexOf(u) > -1)
              return !0;
          return !1;
        },
      });
      var qu = /\r/g;
      d.fn.extend({
        val: function (r) {
          var u,
            s,
            f,
            p = this[0];
          return arguments.length
            ? ((f = se(r)),
              this.each(function (m) {
                var w;
                this.nodeType === 1 &&
                  (f ? (w = r.call(this, m, d(this).val())) : (w = r),
                  w == null
                    ? (w = "")
                    : typeof w == "number"
                    ? (w += "")
                    : Array.isArray(w) &&
                      (w = d.map(w, function (k) {
                        return k == null ? "" : k + "";
                      })),
                  (u =
                    d.valHooks[this.type] ||
                    d.valHooks[this.nodeName.toLowerCase()]),
                  (!u || !("set" in u) || u.set(this, w, "value") === void 0) &&
                    (this.value = w));
              }))
            : p
            ? ((u = d.valHooks[p.type] || d.valHooks[p.nodeName.toLowerCase()]),
              u && "get" in u && (s = u.get(p, "value")) !== void 0
                ? s
                : ((s = p.value),
                  typeof s == "string" ? s.replace(qu, "") : s ?? ""))
            : void 0;
        },
      }),
        d.extend({
          valHooks: {
            option: {
              get: function (r) {
                var u = d.find.attr(r, "value");
                return u ?? Xe(d.text(r));
              },
            },
            select: {
              get: function (r) {
                var u,
                  s,
                  f,
                  p = r.options,
                  m = r.selectedIndex,
                  w = r.type === "select-one",
                  k = w ? null : [],
                  E = w ? m + 1 : p.length;
                for (m < 0 ? (f = E) : (f = w ? m : 0); f < E; f++)
                  if (
                    ((s = p[f]),
                    (s.selected || f === m) &&
                      !s.disabled &&
                      (!s.parentNode.disabled || !X(s.parentNode, "optgroup")))
                  ) {
                    if (((u = d(s).val()), w)) return u;
                    k.push(u);
                  }
                return k;
              },
              set: function (r, u) {
                for (
                  var s, f, p = r.options, m = d.makeArray(u), w = p.length;
                  w--;

                )
                  (f = p[w]),
                    (f.selected =
                      d.inArray(d.valHooks.option.get(f), m) > -1) && (s = !0);
                return s || (r.selectedIndex = -1), m;
              },
            },
          },
        }),
        d.each(["radio", "checkbox"], function () {
          (d.valHooks[this] = {
            set: function (r, u) {
              if (Array.isArray(u))
                return (r.checked = d.inArray(d(r).val(), u) > -1);
            },
          }),
            de.checkOn ||
              (d.valHooks[this].get = function (r) {
                return r.getAttribute("value") === null ? "on" : r.value;
              });
        });
      var An = o.location,
        ru = { guid: Date.now() },
        xi = /\?/;
      d.parseXML = function (r) {
        var u, s;
        if (!r || typeof r != "string") return null;
        try {
          u = new o.DOMParser().parseFromString(r, "text/xml");
        } catch {}
        return (
          (s = u && u.getElementsByTagName("parsererror")[0]),
          (!u || s) &&
            d.error(
              "Invalid XML: " +
                (s
                  ? d.map(s.childNodes, function (f) {
                      return f.textContent;
                    }).join(`
`)
                  : r)
            ),
          u
        );
      };
      var Mu = /^(?:focusinfocus|focusoutblur)$/,
        nu = function (r) {
          r.stopPropagation();
        };
      d.extend(d.event, {
        trigger: function (r, u, s, f) {
          var p,
            m,
            w,
            k,
            E,
            P,
            V,
            W,
            O = [s || pe],
            $ = Ve.call(r, "type") ? r.type : r,
            ue = Ve.call(r, "namespace") ? r.namespace.split(".") : [];
          if (
            ((m = W = w = s = s || pe),
            !(s.nodeType === 3 || s.nodeType === 8) &&
              !Mu.test($ + d.event.triggered) &&
              ($.indexOf(".") > -1 &&
                ((ue = $.split(".")), ($ = ue.shift()), ue.sort()),
              (E = $.indexOf(":") < 0 && "on" + $),
              (r = r[d.expando]
                ? r
                : new d.Event($, typeof r == "object" && r)),
              (r.isTrigger = f ? 2 : 3),
              (r.namespace = ue.join(".")),
              (r.rnamespace = r.namespace
                ? new RegExp("(^|\\.)" + ue.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (r.result = void 0),
              r.target || (r.target = s),
              (u = u == null ? [r] : d.makeArray(u, [r])),
              (V = d.event.special[$] || {}),
              !(!f && V.trigger && V.trigger.apply(s, u) === !1)))
          ) {
            if (!f && !V.noBubble && !at(s)) {
              for (
                k = V.delegateType || $, Mu.test(k + $) || (m = m.parentNode);
                m;
                m = m.parentNode
              )
                O.push(m), (w = m);
              w === (s.ownerDocument || pe) &&
                O.push(w.defaultView || w.parentWindow || o);
            }
            for (p = 0; (m = O[p++]) && !r.isPropagationStopped(); )
              (W = m),
                (r.type = p > 1 ? k : V.bindType || $),
                (P =
                  (fe.get(m, "events") || Object.create(null))[r.type] &&
                  fe.get(m, "handle")),
                P && P.apply(m, u),
                (P = E && m[E]),
                P &&
                  P.apply &&
                  cr(m) &&
                  ((r.result = P.apply(m, u)),
                  r.result === !1 && r.preventDefault());
            return (
              (r.type = $),
              !f &&
                !r.isDefaultPrevented() &&
                (!V._default || V._default.apply(O.pop(), u) === !1) &&
                cr(s) &&
                E &&
                se(s[$]) &&
                !at(s) &&
                ((w = s[E]),
                w && (s[E] = null),
                (d.event.triggered = $),
                r.isPropagationStopped() && W.addEventListener($, nu),
                s[$](),
                r.isPropagationStopped() && W.removeEventListener($, nu),
                (d.event.triggered = void 0),
                w && (s[E] = w)),
              r.result
            );
          }
        },
        simulate: function (r, u, s) {
          var f = d.extend(new d.Event(), s, { type: r, isSimulated: !0 });
          d.event.trigger(f, null, u);
        },
      }),
        d.fn.extend({
          trigger: function (r, u) {
            return this.each(function () {
              d.event.trigger(r, u, this);
            });
          },
          triggerHandler: function (r, u) {
            var s = this[0];
            if (s) return d.event.trigger(r, u, s, !0);
          },
        });
      var fa = /\[\]$/,
        Ci = /\r?\n/g,
        da = /^(?:submit|button|image|reset|file)$/i,
        ha = /^(?:input|select|textarea|keygen)/i;
      function iu(r, u, s, f) {
        var p;
        if (Array.isArray(u))
          d.each(u, function (m, w) {
            s || fa.test(r)
              ? f(r, w)
              : iu(
                  r + "[" + (typeof w == "object" && w != null ? m : "") + "]",
                  w,
                  s,
                  f
                );
          });
        else if (!s && Bt(u) === "object")
          for (p in u) iu(r + "[" + p + "]", u[p], s, f);
        else f(r, u);
      }
      (d.param = function (r, u) {
        var s,
          f = [],
          p = function (m, w) {
            var k = se(w) ? w() : w;
            f[f.length] =
              encodeURIComponent(m) + "=" + encodeURIComponent(k ?? "");
          };
        if (r == null) return "";
        if (Array.isArray(r) || (r.jquery && !d.isPlainObject(r)))
          d.each(r, function () {
            p(this.name, this.value);
          });
        else for (s in r) iu(s, r[s], u, p);
        return f.join("&");
      }),
        d.fn.extend({
          serialize: function () {
            return d.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var r = d.prop(this, "elements");
              return r ? d.makeArray(r) : this;
            })
              .filter(function () {
                var r = this.type;
                return (
                  this.name &&
                  !d(this).is(":disabled") &&
                  ha.test(this.nodeName) &&
                  !da.test(r) &&
                  (this.checked || !jr.test(r))
                );
              })
              .map(function (r, u) {
                var s = d(this).val();
                return s == null
                  ? null
                  : Array.isArray(s)
                  ? d.map(s, function (f) {
                      return {
                        name: u.name,
                        value: f.replace(
                          Ci,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: u.name,
                      value: s.replace(
                        Ci,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var pa = /%20/g,
        uu = /#.*$/,
        ga = /([?&])_=[^&]*/,
        ma = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ou = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        va = /^(?:GET|HEAD)$/,
        Hu = /^\/\//,
        nt = {},
        Qe = {},
        yn = "*/".concat("*"),
        Ei = pe.createElement("a");
      Ei.href = An.href;
      function Uu(r) {
        return function (u, s) {
          typeof u != "string" && ((s = u), (u = "*"));
          var f,
            p = 0,
            m = u.toLowerCase().match(rt) || [];
          if (se(s))
            for (; (f = m[p++]); )
              f[0] === "+"
                ? ((f = f.slice(1) || "*"), (r[f] = r[f] || []).unshift(s))
                : (r[f] = r[f] || []).push(s);
        };
      }
      function Si(r, u, s, f) {
        var p = {},
          m = r === Qe;
        function w(k) {
          var E;
          return (
            (p[k] = !0),
            d.each(r[k] || [], function (P, V) {
              var W = V(u, s, f);
              if (typeof W == "string" && !m && !p[W])
                return u.dataTypes.unshift(W), w(W), !1;
              if (m) return !(E = W);
            }),
            E
          );
        }
        return w(u.dataTypes[0]) || (!p["*"] && w("*"));
      }
      function Ti(r, u) {
        var s,
          f,
          p = d.ajaxSettings.flatOptions || {};
        for (s in u) u[s] !== void 0 && ((p[s] ? r : f || (f = {}))[s] = u[s]);
        return f && d.extend(!0, r, f), r;
      }
      function ba(r, u, s) {
        for (var f, p, m, w, k = r.contents, E = r.dataTypes; E[0] === "*"; )
          E.shift(),
            f === void 0 &&
              (f = r.mimeType || u.getResponseHeader("Content-Type"));
        if (f) {
          for (p in k)
            if (k[p] && k[p].test(f)) {
              E.unshift(p);
              break;
            }
        }
        if (E[0] in s) m = E[0];
        else {
          for (p in s) {
            if (!E[0] || r.converters[p + " " + E[0]]) {
              m = p;
              break;
            }
            w || (w = p);
          }
          m = m || w;
        }
        if (m) return m !== E[0] && E.unshift(m), s[m];
      }
      function Vu(r, u, s, f) {
        var p,
          m,
          w,
          k,
          E,
          P = {},
          V = r.dataTypes.slice();
        if (V[1]) for (w in r.converters) P[w.toLowerCase()] = r.converters[w];
        for (m = V.shift(); m; )
          if (
            (r.responseFields[m] && (s[r.responseFields[m]] = u),
            !E && f && r.dataFilter && (u = r.dataFilter(u, r.dataType)),
            (E = m),
            (m = V.shift()),
            m)
          ) {
            if (m === "*") m = E;
            else if (E !== "*" && E !== m) {
              if (((w = P[E + " " + m] || P["* " + m]), !w)) {
                for (p in P)
                  if (
                    ((k = p.split(" ")),
                    k[1] === m &&
                      ((w = P[E + " " + k[0]] || P["* " + k[0]]), w))
                  ) {
                    w === !0
                      ? (w = P[p])
                      : P[p] !== !0 && ((m = k[0]), V.unshift(k[1]));
                    break;
                  }
              }
              if (w !== !0)
                if (w && r.throws) u = w(u);
                else
                  try {
                    u = w(u);
                  } catch (W) {
                    return {
                      state: "parsererror",
                      error: w ? W : "No conversion from " + E + " to " + m,
                    };
                  }
            }
          }
        return { state: "success", data: u };
      }
      d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: An.href,
          type: "GET",
          isLocal: Ou.test(An.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": yn,
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
            "text xml": d.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (r, u) {
          return u ? Ti(Ti(r, d.ajaxSettings), u) : Ti(d.ajaxSettings, r);
        },
        ajaxPrefilter: Uu(nt),
        ajaxTransport: Uu(Qe),
        ajax: function (r, u) {
          typeof r == "object" && ((u = r), (r = void 0)), (u = u || {});
          var s,
            f,
            p,
            m,
            w,
            k,
            E,
            P,
            V,
            W,
            O = d.ajaxSetup({}, u),
            $ = O.context || O,
            ue = O.context && ($.nodeType || $.jquery) ? d($) : d.event,
            Se = d.Deferred(),
            we = d.Callbacks("once memory"),
            Dt = O.statusCode || {},
            pt = {},
            Pr = {},
            Cr = "canceled",
            Be = {
              readyState: 0,
              getResponseHeader: function (He) {
                var et;
                if (E) {
                  if (!m)
                    for (m = {}; (et = ma.exec(p)); )
                      m[et[1].toLowerCase() + " "] = (
                        m[et[1].toLowerCase() + " "] || []
                      ).concat(et[2]);
                  et = m[He.toLowerCase() + " "];
                }
                return et == null ? null : et.join(", ");
              },
              getAllResponseHeaders: function () {
                return E ? p : null;
              },
              setRequestHeader: function (He, et) {
                return (
                  E == null &&
                    ((He = Pr[He.toLowerCase()] = Pr[He.toLowerCase()] || He),
                    (pt[He] = et)),
                  this
                );
              },
              overrideMimeType: function (He) {
                return E == null && (O.mimeType = He), this;
              },
              statusCode: function (He) {
                var et;
                if (He)
                  if (E) Be.always(He[Be.status]);
                  else for (et in He) Dt[et] = [Dt[et], He[et]];
                return this;
              },
              abort: function (He) {
                var et = He || Cr;
                return s && s.abort(et), ln(0, et), this;
              },
            };
          if (
            (Se.promise(Be),
            (O.url = ((r || O.url || An.href) + "").replace(
              Hu,
              An.protocol + "//"
            )),
            (O.type = u.method || u.type || O.method || O.type),
            (O.dataTypes = (O.dataType || "*").toLowerCase().match(rt) || [""]),
            O.crossDomain == null)
          ) {
            k = pe.createElement("a");
            try {
              (k.href = O.url),
                (k.href = k.href),
                (O.crossDomain =
                  Ei.protocol + "//" + Ei.host != k.protocol + "//" + k.host);
            } catch {
              O.crossDomain = !0;
            }
          }
          if (
            (O.data &&
              O.processData &&
              typeof O.data != "string" &&
              (O.data = d.param(O.data, O.traditional)),
            Si(nt, O, u, Be),
            E)
          )
            return Be;
          (P = d.event && O.global),
            P && d.active++ === 0 && d.event.trigger("ajaxStart"),
            (O.type = O.type.toUpperCase()),
            (O.hasContent = !va.test(O.type)),
            (f = O.url.replace(uu, "")),
            O.hasContent
              ? O.data &&
                O.processData &&
                (O.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (O.data = O.data.replace(pa, "+"))
              : ((W = O.url.slice(f.length)),
                O.data &&
                  (O.processData || typeof O.data == "string") &&
                  ((f += (xi.test(f) ? "&" : "?") + O.data), delete O.data),
                O.cache === !1 &&
                  ((f = f.replace(ga, "$1")),
                  (W = (xi.test(f) ? "&" : "?") + "_=" + ru.guid++ + W)),
                (O.url = f + W)),
            O.ifModified &&
              (d.lastModified[f] &&
                Be.setRequestHeader("If-Modified-Since", d.lastModified[f]),
              d.etag[f] && Be.setRequestHeader("If-None-Match", d.etag[f])),
            ((O.data && O.hasContent && O.contentType !== !1) ||
              u.contentType) &&
              Be.setRequestHeader("Content-Type", O.contentType),
            Be.setRequestHeader(
              "Accept",
              O.dataTypes[0] && O.accepts[O.dataTypes[0]]
                ? O.accepts[O.dataTypes[0]] +
                    (O.dataTypes[0] !== "*" ? ", " + yn + "; q=0.01" : "")
                : O.accepts["*"]
            );
          for (V in O.headers) Be.setRequestHeader(V, O.headers[V]);
          if (O.beforeSend && (O.beforeSend.call($, Be, O) === !1 || E))
            return Be.abort();
          if (
            ((Cr = "abort"),
            we.add(O.complete),
            Be.done(O.success),
            Be.fail(O.error),
            (s = Si(Qe, O, u, Be)),
            !s)
          )
            ln(-1, "No Transport");
          else {
            if (((Be.readyState = 1), P && ue.trigger("ajaxSend", [Be, O]), E))
              return Be;
            O.async &&
              O.timeout > 0 &&
              (w = o.setTimeout(function () {
                Be.abort("timeout");
              }, O.timeout));
            try {
              (E = !1), s.send(pt, ln);
            } catch (He) {
              if (E) throw He;
              ln(-1, He);
            }
          }
          function ln(He, et, Zn, ki) {
            var Er,
              xn,
              hr,
              $r,
              cn,
              Gt = et;
            E ||
              ((E = !0),
              w && o.clearTimeout(w),
              (s = void 0),
              (p = ki || ""),
              (Be.readyState = He > 0 ? 4 : 0),
              (Er = (He >= 200 && He < 300) || He === 304),
              Zn && ($r = ba(O, Be, Zn)),
              !Er &&
                d.inArray("script", O.dataTypes) > -1 &&
                d.inArray("json", O.dataTypes) < 0 &&
                (O.converters["text script"] = function () {}),
              ($r = Vu(O, $r, Be, Er)),
              Er
                ? (O.ifModified &&
                    ((cn = Be.getResponseHeader("Last-Modified")),
                    cn && (d.lastModified[f] = cn),
                    (cn = Be.getResponseHeader("etag")),
                    cn && (d.etag[f] = cn)),
                  He === 204 || O.type === "HEAD"
                    ? (Gt = "nocontent")
                    : He === 304
                    ? (Gt = "notmodified")
                    : ((Gt = $r.state),
                      (xn = $r.data),
                      (hr = $r.error),
                      (Er = !hr)))
                : ((hr = Gt),
                  (He || !Gt) && ((Gt = "error"), He < 0 && (He = 0))),
              (Be.status = He),
              (Be.statusText = (et || Gt) + ""),
              Er
                ? Se.resolveWith($, [xn, Gt, Be])
                : Se.rejectWith($, [Be, Gt, hr]),
              Be.statusCode(Dt),
              (Dt = void 0),
              P &&
                ue.trigger(Er ? "ajaxSuccess" : "ajaxError", [
                  Be,
                  O,
                  Er ? xn : hr,
                ]),
              we.fireWith($, [Be, Gt]),
              P &&
                (ue.trigger("ajaxComplete", [Be, O]),
                --d.active || d.event.trigger("ajaxStop")));
          }
          return Be;
        },
        getJSON: function (r, u, s) {
          return d.get(r, u, s, "json");
        },
        getScript: function (r, u) {
          return d.get(r, void 0, u, "script");
        },
      }),
        d.each(["get", "post"], function (r, u) {
          d[u] = function (s, f, p, m) {
            return (
              se(f) && ((m = m || p), (p = f), (f = void 0)),
              d.ajax(
                d.extend(
                  { url: s, type: u, dataType: m, data: f, success: p },
                  d.isPlainObject(s) && s
                )
              )
            );
          };
        }),
        d.ajaxPrefilter(function (r) {
          var u;
          for (u in r.headers)
            u.toLowerCase() === "content-type" &&
              (r.contentType = r.headers[u] || "");
        }),
        (d._evalUrl = function (r, u, s) {
          return d.ajax({
            url: r,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (f) {
              d.globalEval(f, u, s);
            },
          });
        }),
        d.fn.extend({
          wrapAll: function (r) {
            var u;
            return (
              this[0] &&
                (se(r) && (r = r.call(this[0])),
                (u = d(r, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && u.insertBefore(this[0]),
                u
                  .map(function () {
                    for (var s = this; s.firstElementChild; )
                      s = s.firstElementChild;
                    return s;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (r) {
            return se(r)
              ? this.each(function (u) {
                  d(this).wrapInner(r.call(this, u));
                })
              : this.each(function () {
                  var u = d(this),
                    s = u.contents();
                  s.length ? s.wrapAll(r) : u.append(r);
                });
          },
          wrap: function (r) {
            var u = se(r);
            return this.each(function (s) {
              d(this).wrapAll(u ? r.call(this, s) : r);
            });
          },
          unwrap: function (r) {
            return (
              this.parent(r)
                .not("body")
                .each(function () {
                  d(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (d.expr.pseudos.hidden = function (r) {
          return !d.expr.pseudos.visible(r);
        }),
        (d.expr.pseudos.visible = function (r) {
          return !!(
            r.offsetWidth ||
            r.offsetHeight ||
            r.getClientRects().length
          );
        }),
        (d.ajaxSettings.xhr = function () {
          try {
            return new o.XMLHttpRequest();
          } catch {}
        });
      var wa = { 0: 200, 1223: 204 },
        ht = d.ajaxSettings.xhr();
      (de.cors = !!ht && "withCredentials" in ht),
        (de.ajax = ht = !!ht),
        d.ajaxTransport(function (r) {
          var u, s;
          if (de.cors || (ht && !r.crossDomain))
            return {
              send: function (f, p) {
                var m,
                  w = r.xhr();
                if (
                  (w.open(r.type, r.url, r.async, r.username, r.password),
                  r.xhrFields)
                )
                  for (m in r.xhrFields) w[m] = r.xhrFields[m];
                r.mimeType &&
                  w.overrideMimeType &&
                  w.overrideMimeType(r.mimeType),
                  !r.crossDomain &&
                    !f["X-Requested-With"] &&
                    (f["X-Requested-With"] = "XMLHttpRequest");
                for (m in f) w.setRequestHeader(m, f[m]);
                (u = function (k) {
                  return function () {
                    u &&
                      ((u =
                        s =
                        w.onload =
                        w.onerror =
                        w.onabort =
                        w.ontimeout =
                        w.onreadystatechange =
                          null),
                      k === "abort"
                        ? w.abort()
                        : k === "error"
                        ? typeof w.status != "number"
                          ? p(0, "error")
                          : p(w.status, w.statusText)
                        : p(
                            wa[w.status] || w.status,
                            w.statusText,
                            (w.responseType || "text") !== "text" ||
                              typeof w.responseText != "string"
                              ? { binary: w.response }
                              : { text: w.responseText },
                            w.getAllResponseHeaders()
                          ));
                  };
                }),
                  (w.onload = u()),
                  (s = w.onerror = w.ontimeout = u("error")),
                  w.onabort !== void 0
                    ? (w.onabort = s)
                    : (w.onreadystatechange = function () {
                        w.readyState === 4 &&
                          o.setTimeout(function () {
                            u && s();
                          });
                      }),
                  (u = u("abort"));
                try {
                  w.send((r.hasContent && r.data) || null);
                } catch (k) {
                  if (u) throw k;
                }
              },
              abort: function () {
                u && u();
              },
            };
        }),
        d.ajaxPrefilter(function (r) {
          r.crossDomain && (r.contents.script = !1);
        }),
        d.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (r) {
              return d.globalEval(r), r;
            },
          },
        }),
        d.ajaxPrefilter("script", function (r) {
          r.cache === void 0 && (r.cache = !1),
            r.crossDomain && (r.type = "GET");
        }),
        d.ajaxTransport("script", function (r) {
          if (r.crossDomain || r.scriptAttrs) {
            var u, s;
            return {
              send: function (f, p) {
                (u = d("<script>")
                  .attr(r.scriptAttrs || {})
                  .prop({ charset: r.scriptCharset, src: r.url })
                  .on(
                    "load error",
                    (s = function (m) {
                      u.remove(),
                        (s = null),
                        m && p(m.type === "error" ? 404 : 200, m.type);
                    })
                  )),
                  pe.head.appendChild(u[0]);
              },
              abort: function () {
                s && s();
              },
            };
          }
        });
      var Bi = [],
        Yr = /(=)\?(?=&|$)|\?\?/;
      d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var r = Bi.pop() || d.expando + "_" + ru.guid++;
          return (this[r] = !0), r;
        },
      }),
        d.ajaxPrefilter("json jsonp", function (r, u, s) {
          var f,
            p,
            m,
            w =
              r.jsonp !== !1 &&
              (Yr.test(r.url)
                ? "url"
                : typeof r.data == "string" &&
                  (r.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  Yr.test(r.data) &&
                  "data");
          if (w || r.dataTypes[0] === "jsonp")
            return (
              (f = r.jsonpCallback =
                se(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
              w
                ? (r[w] = r[w].replace(Yr, "$1" + f))
                : r.jsonp !== !1 &&
                  (r.url += (xi.test(r.url) ? "&" : "?") + r.jsonp + "=" + f),
              (r.converters["script json"] = function () {
                return m || d.error(f + " was not called"), m[0];
              }),
              (r.dataTypes[0] = "json"),
              (p = o[f]),
              (o[f] = function () {
                m = arguments;
              }),
              s.always(function () {
                p === void 0 ? d(o).removeProp(f) : (o[f] = p),
                  r[f] && ((r.jsonpCallback = u.jsonpCallback), Bi.push(f)),
                  m && se(p) && p(m[0]),
                  (m = p = void 0);
              }),
              "script"
            );
        }),
        (de.createHTMLDocument = (function () {
          var r = pe.implementation.createHTMLDocument("").body;
          return (
            (r.innerHTML = "<form></form><form></form>"),
            r.childNodes.length === 2
          );
        })()),
        (d.parseHTML = function (r, u, s) {
          if (typeof r != "string") return [];
          typeof u == "boolean" && ((s = u), (u = !1));
          var f, p, m;
          return (
            u ||
              (de.createHTMLDocument
                ? ((u = pe.implementation.createHTMLDocument("")),
                  (f = u.createElement("base")),
                  (f.href = pe.location.href),
                  u.head.appendChild(f))
                : (u = pe)),
            (p = Pt.exec(r)),
            (m = !s && []),
            p
              ? [u.createElement(p[1])]
              : ((p = zi([r], u, m)),
                m && m.length && d(m).remove(),
                d.merge([], p.childNodes))
          );
        }),
        (d.fn.load = function (r, u, s) {
          var f,
            p,
            m,
            w = this,
            k = r.indexOf(" ");
          return (
            k > -1 && ((f = Xe(r.slice(k))), (r = r.slice(0, k))),
            se(u)
              ? ((s = u), (u = void 0))
              : u && typeof u == "object" && (p = "POST"),
            w.length > 0 &&
              d
                .ajax({ url: r, type: p || "GET", dataType: "html", data: u })
                .done(function (E) {
                  (m = arguments),
                    w.html(f ? d("<div>").append(d.parseHTML(E)).find(f) : E);
                })
                .always(
                  s &&
                    function (E, P) {
                      w.each(function () {
                        s.apply(this, m || [E.responseText, P, E]);
                      });
                    }
                ),
            this
          );
        }),
        (d.expr.pseudos.animated = function (r) {
          return d.grep(d.timers, function (u) {
            return r === u.elem;
          }).length;
        }),
        (d.offset = {
          setOffset: function (r, u, s) {
            var f,
              p,
              m,
              w,
              k,
              E,
              P,
              V = d.css(r, "position"),
              W = d(r),
              O = {};
            V === "static" && (r.style.position = "relative"),
              (k = W.offset()),
              (m = d.css(r, "top")),
              (E = d.css(r, "left")),
              (P =
                (V === "absolute" || V === "fixed") &&
                (m + E).indexOf("auto") > -1),
              P
                ? ((f = W.position()), (w = f.top), (p = f.left))
                : ((w = parseFloat(m) || 0), (p = parseFloat(E) || 0)),
              se(u) && (u = u.call(r, s, d.extend({}, k))),
              u.top != null && (O.top = u.top - k.top + w),
              u.left != null && (O.left = u.left - k.left + p),
              "using" in u ? u.using.call(r, O) : W.css(O);
          },
        }),
        d.fn.extend({
          offset: function (r) {
            if (arguments.length)
              return r === void 0
                ? this
                : this.each(function (p) {
                    d.offset.setOffset(this, r, p);
                  });
            var u,
              s,
              f = this[0];
            if (f)
              return f.getClientRects().length
                ? ((u = f.getBoundingClientRect()),
                  (s = f.ownerDocument.defaultView),
                  { top: u.top + s.pageYOffset, left: u.left + s.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var r,
                u,
                s,
                f = this[0],
                p = { top: 0, left: 0 };
              if (d.css(f, "position") === "fixed")
                u = f.getBoundingClientRect();
              else {
                for (
                  u = this.offset(),
                    s = f.ownerDocument,
                    r = f.offsetParent || s.documentElement;
                  r &&
                  (r === s.body || r === s.documentElement) &&
                  d.css(r, "position") === "static";

                )
                  r = r.parentNode;
                r &&
                  r !== f &&
                  r.nodeType === 1 &&
                  ((p = d(r).offset()),
                  (p.top += d.css(r, "borderTopWidth", !0)),
                  (p.left += d.css(r, "borderLeftWidth", !0)));
              }
              return {
                top: u.top - p.top - d.css(f, "marginTop", !0),
                left: u.left - p.left - d.css(f, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var r = this.offsetParent;
                r && d.css(r, "position") === "static";

              )
                r = r.offsetParent;
              return r || Wt;
            });
          },
        }),
        d.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (r, u) {
            var s = u === "pageYOffset";
            d.fn[r] = function (f) {
              return lr(
                this,
                function (p, m, w) {
                  var k;
                  if (
                    (at(p) ? (k = p) : p.nodeType === 9 && (k = p.defaultView),
                    w === void 0)
                  )
                    return k ? k[u] : p[m];
                  k
                    ? k.scrollTo(s ? k.pageXOffset : w, s ? w : k.pageYOffset)
                    : (p[m] = w);
                },
                r,
                f,
                arguments.length
              );
            };
          }
        ),
        d.each(["top", "left"], function (r, u) {
          d.cssHooks[u] = Kn(de.pixelPosition, function (s, f) {
            if (f)
              return (f = jn(s, u)), Zi.test(f) ? d(s).position()[u] + "px" : f;
          });
        }),
        d.each({ Height: "height", Width: "width" }, function (r, u) {
          d.each(
            { padding: "inner" + r, content: u, "": "outer" + r },
            function (s, f) {
              d.fn[f] = function (p, m) {
                var w = arguments.length && (s || typeof p != "boolean"),
                  k = s || (p === !0 || m === !0 ? "margin" : "border");
                return lr(
                  this,
                  function (E, P, V) {
                    var W;
                    return at(E)
                      ? f.indexOf("outer") === 0
                        ? E["inner" + r]
                        : E.document.documentElement["client" + r]
                      : E.nodeType === 9
                      ? ((W = E.documentElement),
                        Math.max(
                          E.body["scroll" + r],
                          W["scroll" + r],
                          E.body["offset" + r],
                          W["offset" + r],
                          W["client" + r]
                        ))
                      : V === void 0
                      ? d.css(E, P, k)
                      : d.style(E, P, V, k);
                  },
                  u,
                  w ? p : void 0,
                  w
                );
              };
            }
          );
        }),
        d.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (r, u) {
            d.fn[u] = function (s) {
              return this.on(u, s);
            };
          }
        ),
        d.fn.extend({
          bind: function (r, u, s) {
            return this.on(r, null, u, s);
          },
          unbind: function (r, u) {
            return this.off(r, null, u);
          },
          delegate: function (r, u, s, f) {
            return this.on(u, r, s, f);
          },
          undelegate: function (r, u, s) {
            return arguments.length === 1
              ? this.off(r, "**")
              : this.off(u, r || "**", s);
          },
          hover: function (r, u) {
            return this.on("mouseenter", r).on("mouseleave", u || r);
          },
        }),
        d.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (r, u) {
            d.fn[u] = function (s, f) {
              return arguments.length > 0
                ? this.on(u, null, s, f)
                : this.trigger(u);
            };
          }
        );
      var Dn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (d.proxy = function (r, u) {
        var s, f, p;
        if ((typeof u == "string" && ((s = r[u]), (u = r), (r = s)), !!se(r)))
          return (
            (f = S.call(arguments, 2)),
            (p = function () {
              return r.apply(u || this, f.concat(S.call(arguments)));
            }),
            (p.guid = r.guid = r.guid || d.guid++),
            p
          );
      }),
        (d.holdReady = function (r) {
          r ? d.readyWait++ : d.ready(!0);
        }),
        (d.isArray = Array.isArray),
        (d.parseJSON = JSON.parse),
        (d.nodeName = X),
        (d.isFunction = se),
        (d.isWindow = at),
        (d.camelCase = Ee),
        (d.type = Bt),
        (d.now = Date.now),
        (d.isNumeric = function (r) {
          var u = d.type(r);
          return (
            (u === "number" || u === "string") && !isNaN(r - parseFloat(r))
          );
        }),
        (d.trim = function (r) {
          return r == null ? "" : (r + "").replace(Dn, "$1");
        });
      var au = o.jQuery,
        tr = o.$;
      return (
        (d.noConflict = function (r) {
          return (
            o.$ === d && (o.$ = tr), r && o.jQuery === d && (o.jQuery = au), d
          );
        }),
        typeof a > "u" && (o.jQuery = o.$ = d),
        d
      );
    });
  })(aa);
  var Cf = aa.exports;
  const We = gt(Cf);
  class Ef {
    isAdPlaying() {
      return We(".html5-video-player").hasClass("ad-showing");
    }
  }
  const Sf = new Ef();
  class Tf {
    constructor() {
      te(this, "adShowClass", "ad-showing");
      te(this, "observerEnd");
    }
    onAdsEnd(o) {
      let a = We(".html5-video-player");
      const v = a[0],
        C = { attributes: !0, attributeFilter: ["class"] },
        S = (R) => {
          for (let G of R)
            if (
              G.type === "attributes" &&
              G.attributeName === "class" &&
              !a.hasClass(this.adShowClass)
            ) {
              this.terminate(), o();
              break;
            }
        };
      (this.observerEnd = new MutationObserver(S)),
        this.observerEnd.observe(v, C);
    }
    terminate() {
      this.observerEnd &&
        (this.observerEnd.disconnect(), (this.observerEnd = void 0));
    }
  }
  const Bf = new Tf();
  class Ws {
    constructor(o, a) {
      (this.playBtnDivCssSelector = o), (this.observerContentDiv = a);
    }
    ready(o) {
      if (We(this.playBtnDivCssSelector).length === 0) {
        const v = { childList: !0, subtree: !0 },
          C = (R, G) => {
            for (let J of R)
              if (J.addedNodes.length > 0) {
                for (let ee of J.addedNodes)
                  if (this.matchNode(ee)) {
                    G.disconnect(), o();
                    break;
                  }
              }
          };
        new MutationObserver(C).observe(We(this.observerContentDiv)[0], v);
      } else o();
    }
  }
  class kf extends Ws {
    constructor() {
      super(".ytp-right-controls", "#content");
    }
    matchNode(o) {
      return o.nodeType === 1 && o.classList.contains("ytp-right-controls");
    }
  }
  var So = function (A, o) {
    return (
      (So =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, v) {
            a.__proto__ = v;
          }) ||
        function (a, v) {
          for (var C in v)
            Object.prototype.hasOwnProperty.call(v, C) && (a[C] = v[C]);
        }),
      So(A, o)
    );
  };
  function oa(A, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError(
        "Class extends value " + String(o) + " is not a constructor or null"
      );
    So(A, o);
    function a() {
      this.constructor = A;
    }
    A.prototype =
      o === null ? Object.create(o) : ((a.prototype = o.prototype), new a());
  }
  function _f(A, o, a, v) {
    function C(S) {
      return S instanceof a
        ? S
        : new a(function (R) {
            R(S);
          });
    }
    return new (a || (a = Promise))(function (S, R) {
      function G(De) {
        try {
          ee(v.next(De));
        } catch (Ve) {
          R(Ve);
        }
      }
      function J(De) {
        try {
          ee(v.throw(De));
        } catch (Ve) {
          R(Ve);
        }
      }
      function ee(De) {
        De.done ? S(De.value) : C(De.value).then(G, J);
      }
      ee((v = v.apply(A, o || [])).next());
    });
  }
  function zs(A, o) {
    var a = {
        label: 0,
        sent: function () {
          if (S[0] & 1) throw S[1];
          return S[1];
        },
        trys: [],
        ops: [],
      },
      v,
      C,
      S,
      R;
    return (
      (R = { next: G(0), throw: G(1), return: G(2) }),
      typeof Symbol == "function" &&
        (R[Symbol.iterator] = function () {
          return this;
        }),
      R
    );
    function G(ee) {
      return function (De) {
        return J([ee, De]);
      };
    }
    function J(ee) {
      if (v) throw new TypeError("Generator is already executing.");
      for (; R && ((R = 0), ee[0] && (a = 0)), a; )
        try {
          if (
            ((v = 1),
            C &&
              (S =
                ee[0] & 2
                  ? C.return
                  : ee[0]
                  ? C.throw || ((S = C.return) && S.call(C), 0)
                  : C.next) &&
              !(S = S.call(C, ee[1])).done)
          )
            return S;
          switch (((C = 0), S && (ee = [ee[0] & 2, S.value]), ee[0])) {
            case 0:
            case 1:
              S = ee;
              break;
            case 4:
              return a.label++, { value: ee[1], done: !1 };
            case 5:
              a.label++, (C = ee[1]), (ee = [0]);
              continue;
            case 7:
              (ee = a.ops.pop()), a.trys.pop();
              continue;
            default:
              if (
                ((S = a.trys),
                !(S = S.length > 0 && S[S.length - 1]) &&
                  (ee[0] === 6 || ee[0] === 2))
              ) {
                a = 0;
                continue;
              }
              if (ee[0] === 3 && (!S || (ee[1] > S[0] && ee[1] < S[3]))) {
                a.label = ee[1];
                break;
              }
              if (ee[0] === 6 && a.label < S[1]) {
                (a.label = S[1]), (S = ee);
                break;
              }
              if (S && a.label < S[2]) {
                (a.label = S[2]), a.ops.push(ee);
                break;
              }
              S[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          ee = o.call(A, a);
        } catch (De) {
          (ee = [6, De]), (C = 0);
        } finally {
          v = S = 0;
        }
      if (ee[0] & 5) throw ee[1];
      return { value: ee[0] ? ee[1] : void 0, done: !0 };
    }
  }
  function Au(A) {
    var o = typeof Symbol == "function" && Symbol.iterator,
      a = o && A[o],
      v = 0;
    if (a) return a.call(A);
    if (A && typeof A.length == "number")
      return {
        next: function () {
          return (
            A && v >= A.length && (A = void 0), { value: A && A[v++], done: !A }
          );
        },
      };
    throw new TypeError(
      o ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function To(A, o) {
    var a = typeof Symbol == "function" && A[Symbol.iterator];
    if (!a) return A;
    var v = a.call(A),
      C,
      S = [],
      R;
    try {
      for (; (o === void 0 || o-- > 0) && !(C = v.next()).done; )
        S.push(C.value);
    } catch (G) {
      R = { error: G };
    } finally {
      try {
        C && !C.done && (a = v.return) && a.call(v);
      } finally {
        if (R) throw R.error;
      }
    }
    return S;
  }
  function Bo(A, o, a) {
    if (a || arguments.length === 2)
      for (var v = 0, C = o.length, S; v < C; v++)
        (S || !(v in o)) &&
          (S || (S = Array.prototype.slice.call(o, 0, v)), (S[v] = o[v]));
    return A.concat(S || Array.prototype.slice.call(o));
  }
  function yu(A) {
    return this instanceof yu ? ((this.v = A), this) : new yu(A);
  }
  function Lf(A, o, a) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var v = a.apply(A, o || []),
      C,
      S = [];
    return (
      (C = {}),
      R("next"),
      R("throw"),
      R("return"),
      (C[Symbol.asyncIterator] = function () {
        return this;
      }),
      C
    );
    function R(ze) {
      v[ze] &&
        (C[ze] = function (tt) {
          return new Promise(function (de, se) {
            S.push([ze, tt, de, se]) > 1 || G(ze, tt);
          });
        });
    }
    function G(ze, tt) {
      try {
        J(v[ze](tt));
      } catch (de) {
        Ve(S[0][3], de);
      }
    }
    function J(ze) {
      ze.value instanceof yu
        ? Promise.resolve(ze.value.v).then(ee, De)
        : Ve(S[0][2], ze);
    }
    function ee(ze) {
      G("next", ze);
    }
    function De(ze) {
      G("throw", ze);
    }
    function Ve(ze, tt) {
      ze(tt), S.shift(), S.length && G(S[0][0], S[0][1]);
    }
  }
  function Ff(A) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = A[Symbol.asyncIterator],
      a;
    return o
      ? o.call(A)
      : ((A = typeof Au == "function" ? Au(A) : A[Symbol.iterator]()),
        (a = {}),
        v("next"),
        v("throw"),
        v("return"),
        (a[Symbol.asyncIterator] = function () {
          return this;
        }),
        a);
    function v(S) {
      a[S] =
        A[S] &&
        function (R) {
          return new Promise(function (G, J) {
            (R = A[S](R)), C(G, J, R.done, R.value);
          });
        };
    }
    function C(S, R, G, J) {
      Promise.resolve(J).then(function (ee) {
        S({ value: ee, done: G });
      }, R);
    }
  }
  typeof SuppressedError == "function" && SuppressedError;
  var js = function (A) {
    return A && typeof A.length == "number" && typeof A != "function";
  };
  function $t(A) {
    return typeof A == "function";
  }
  function Ks(A) {
    return $t(A == null ? void 0 : A.then);
  }
  function Ys(A) {
    var o = function (v) {
        Error.call(v), (v.stack = new Error().stack);
      },
      a = A(o);
    return (
      (a.prototype = Object.create(Error.prototype)),
      (a.prototype.constructor = a),
      a
    );
  }
  var ko = Ys(function (A) {
    return function (a) {
      A(this),
        (this.message = a
          ? a.length +
            ` errors occurred during unsubscription:
` +
            a.map(function (v, C) {
              return C + 1 + ") " + v.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = a);
    };
  });
  function _o(A, o) {
    if (A) {
      var a = A.indexOf(o);
      0 <= a && A.splice(a, 1);
    }
  }
  var Ia = (function () {
      function A(o) {
        (this.initialTeardown = o),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null);
      }
      return (
        (A.prototype.unsubscribe = function () {
          var o, a, v, C, S;
          if (!this.closed) {
            this.closed = !0;
            var R = this._parentage;
            if (R)
              if (((this._parentage = null), Array.isArray(R)))
                try {
                  for (var G = Au(R), J = G.next(); !J.done; J = G.next()) {
                    var ee = J.value;
                    ee.remove(this);
                  }
                } catch (se) {
                  o = { error: se };
                } finally {
                  try {
                    J && !J.done && (a = G.return) && a.call(G);
                  } finally {
                    if (o) throw o.error;
                  }
                }
              else R.remove(this);
            var De = this.initialTeardown;
            if ($t(De))
              try {
                De();
              } catch (se) {
                S = se instanceof ko ? se.errors : [se];
              }
            var Ve = this._finalizers;
            if (Ve) {
              this._finalizers = null;
              try {
                for (
                  var ze = Au(Ve), tt = ze.next();
                  !tt.done;
                  tt = ze.next()
                ) {
                  var de = tt.value;
                  try {
                    Js(de);
                  } catch (se) {
                    (S = S ?? []),
                      se instanceof ko
                        ? (S = Bo(Bo([], To(S)), To(se.errors)))
                        : S.push(se);
                  }
                }
              } catch (se) {
                v = { error: se };
              } finally {
                try {
                  tt && !tt.done && (C = ze.return) && C.call(ze);
                } finally {
                  if (v) throw v.error;
                }
              }
            }
            if (S) throw new ko(S);
          }
        }),
        (A.prototype.add = function (o) {
          var a;
          if (o && o !== this)
            if (this.closed) Js(o);
            else {
              if (o instanceof A) {
                if (o.closed || o._hasParent(this)) return;
                o._addParent(this);
              }
              (this._finalizers =
                (a = this._finalizers) !== null && a !== void 0 ? a : []).push(
                o
              );
            }
        }),
        (A.prototype._hasParent = function (o) {
          var a = this._parentage;
          return a === o || (Array.isArray(a) && a.includes(o));
        }),
        (A.prototype._addParent = function (o) {
          var a = this._parentage;
          this._parentage = Array.isArray(a) ? (a.push(o), a) : a ? [a, o] : o;
        }),
        (A.prototype._removeParent = function (o) {
          var a = this._parentage;
          a === o ? (this._parentage = null) : Array.isArray(a) && _o(a, o);
        }),
        (A.prototype.remove = function (o) {
          var a = this._finalizers;
          a && _o(a, o), o instanceof A && o._removeParent(this);
        }),
        (A.EMPTY = (function () {
          var o = new A();
          return (o.closed = !0), o;
        })()),
        A
      );
    })(),
    $s = Ia.EMPTY;
  function Zs(A) {
    return (
      A instanceof Ia ||
      (A && "closed" in A && $t(A.remove) && $t(A.add) && $t(A.unsubscribe))
    );
  }
  function Js(A) {
    $t(A) ? A() : A.unsubscribe();
  }
  var Xs = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    Qs = {
      setTimeout: function (A, o) {
        for (var a = [], v = 2; v < arguments.length; v++)
          a[v - 2] = arguments[v];
        return setTimeout.apply(void 0, Bo([A, o], To(a)));
      },
      clearTimeout: function (A) {
        var o = Qs.delegate;
        return ((o == null ? void 0 : o.clearTimeout) || clearTimeout)(A);
      },
      delegate: void 0,
    };
  function el(A) {
    Qs.setTimeout(function () {
      throw A;
    });
  }
  function tl() {}
  function Pa(A) {
    A();
  }
  var Lo = (function (A) {
      oa(o, A);
      function o(a) {
        var v = A.call(this) || this;
        return (
          (v.isStopped = !1),
          a ? ((v.destination = a), Zs(a) && a.add(v)) : (v.destination = Nf),
          v
        );
      }
      return (
        (o.create = function (a, v, C) {
          return new Ro(a, v, C);
        }),
        (o.prototype.next = function (a) {
          this.isStopped || this._next(a);
        }),
        (o.prototype.error = function (a) {
          this.isStopped || ((this.isStopped = !0), this._error(a));
        }),
        (o.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (o.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0),
            A.prototype.unsubscribe.call(this),
            (this.destination = null));
        }),
        (o.prototype._next = function (a) {
          this.destination.next(a);
        }),
        (o.prototype._error = function (a) {
          try {
            this.destination.error(a);
          } finally {
            this.unsubscribe();
          }
        }),
        (o.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        o
      );
    })(Ia),
    Rf = Function.prototype.bind;
  function Fo(A, o) {
    return Rf.call(A, o);
  }
  var If = (function () {
      function A(o) {
        this.partialObserver = o;
      }
      return (
        (A.prototype.next = function (o) {
          var a = this.partialObserver;
          if (a.next)
            try {
              a.next(o);
            } catch (v) {
              Na(v);
            }
        }),
        (A.prototype.error = function (o) {
          var a = this.partialObserver;
          if (a.error)
            try {
              a.error(o);
            } catch (v) {
              Na(v);
            }
          else Na(o);
        }),
        (A.prototype.complete = function () {
          var o = this.partialObserver;
          if (o.complete)
            try {
              o.complete();
            } catch (a) {
              Na(a);
            }
        }),
        A
      );
    })(),
    Ro = (function (A) {
      oa(o, A);
      function o(a, v, C) {
        var S = A.call(this) || this,
          R;
        if ($t(a) || !a)
          R = { next: a ?? void 0, error: v ?? void 0, complete: C ?? void 0 };
        else {
          var G;
          S && Xs.useDeprecatedNextContext
            ? ((G = Object.create(a)),
              (G.unsubscribe = function () {
                return S.unsubscribe();
              }),
              (R = {
                next: a.next && Fo(a.next, G),
                error: a.error && Fo(a.error, G),
                complete: a.complete && Fo(a.complete, G),
              }))
            : (R = a);
        }
        return (S.destination = new If(R)), S;
      }
      return o;
    })(Lo);
  function Na(A) {
    el(A);
  }
  function Pf(A) {
    throw A;
  }
  var Nf = { closed: !0, next: tl, error: Pf, complete: tl },
    Io = (function () {
      return (
        (typeof Symbol == "function" && Symbol.observable) || "@@observable"
      );
    })();
  function rl(A) {
    return A;
  }
  function qf(A) {
    return A.length === 0
      ? rl
      : A.length === 1
      ? A[0]
      : function (a) {
          return A.reduce(function (v, C) {
            return C(v);
          }, a);
        };
  }
  var nn = (function () {
    function A(o) {
      o && (this._subscribe = o);
    }
    return (
      (A.prototype.lift = function (o) {
        var a = new A();
        return (a.source = this), (a.operator = o), a;
      }),
      (A.prototype.subscribe = function (o, a, v) {
        var C = this,
          S = Of(o) ? o : new Ro(o, a, v);
        return (
          Pa(function () {
            var R = C,
              G = R.operator,
              J = R.source;
            S.add(G ? G.call(S, J) : J ? C._subscribe(S) : C._trySubscribe(S));
          }),
          S
        );
      }),
      (A.prototype._trySubscribe = function (o) {
        try {
          return this._subscribe(o);
        } catch (a) {
          o.error(a);
        }
      }),
      (A.prototype.forEach = function (o, a) {
        var v = this;
        return (
          (a = nl(a)),
          new a(function (C, S) {
            var R = new Ro({
              next: function (G) {
                try {
                  o(G);
                } catch (J) {
                  S(J), R.unsubscribe();
                }
              },
              error: S,
              complete: C,
            });
            v.subscribe(R);
          })
        );
      }),
      (A.prototype._subscribe = function (o) {
        var a;
        return (a = this.source) === null || a === void 0
          ? void 0
          : a.subscribe(o);
      }),
      (A.prototype[Io] = function () {
        return this;
      }),
      (A.prototype.pipe = function () {
        for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
        return qf(o)(this);
      }),
      (A.prototype.toPromise = function (o) {
        var a = this;
        return (
          (o = nl(o)),
          new o(function (v, C) {
            var S;
            a.subscribe(
              function (R) {
                return (S = R);
              },
              function (R) {
                return C(R);
              },
              function () {
                return v(S);
              }
            );
          })
        );
      }),
      (A.create = function (o) {
        return new A(o);
      }),
      A
    );
  })();
  function nl(A) {
    var o;
    return (o = A ?? Xs.Promise) !== null && o !== void 0 ? o : Promise;
  }
  function Mf(A) {
    return A && $t(A.next) && $t(A.error) && $t(A.complete);
  }
  function Of(A) {
    return (A && A instanceof Lo) || (Mf(A) && Zs(A));
  }
  function il(A) {
    return $t(A[Io]);
  }
  function ul(A) {
    return (
      Symbol.asyncIterator && $t(A == null ? void 0 : A[Symbol.asyncIterator])
    );
  }
  function al(A) {
    return new TypeError(
      "You provided " +
        (A !== null && typeof A == "object"
          ? "an invalid object"
          : "'" + A + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function Hf() {
    return typeof Symbol != "function" || !Symbol.iterator
      ? "@@iterator"
      : Symbol.iterator;
  }
  var ol = Hf();
  function sl(A) {
    return $t(A == null ? void 0 : A[ol]);
  }
  function ll(A) {
    return Lf(this, arguments, function () {
      var a, v, C, S;
      return zs(this, function (R) {
        switch (R.label) {
          case 0:
            (a = A.getReader()), (R.label = 1);
          case 1:
            R.trys.push([1, , 9, 10]), (R.label = 2);
          case 2:
            return [4, yu(a.read())];
          case 3:
            return (
              (v = R.sent()),
              (C = v.value),
              (S = v.done),
              S ? [4, yu(void 0)] : [3, 5]
            );
          case 4:
            return [2, R.sent()];
          case 5:
            return [4, yu(C)];
          case 6:
            return [4, R.sent()];
          case 7:
            return R.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return a.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function cl(A) {
    return $t(A == null ? void 0 : A.getReader);
  }
  function qa(A) {
    if (A instanceof nn) return A;
    if (A != null) {
      if (il(A)) return Uf(A);
      if (js(A)) return Vf(A);
      if (Ks(A)) return fl(A);
      if (ul(A)) return dl(A);
      if (sl(A)) return Gf(A);
      if (cl(A)) return Wf(A);
    }
    throw al(A);
  }
  function Uf(A) {
    return new nn(function (o) {
      var a = A[Io]();
      if ($t(a.subscribe)) return a.subscribe(o);
      throw new TypeError(
        "Provided object does not correctly implement Symbol.observable"
      );
    });
  }
  function Vf(A) {
    return new nn(function (o) {
      for (var a = 0; a < A.length && !o.closed; a++) o.next(A[a]);
      o.complete();
    });
  }
  function fl(A) {
    return new nn(function (o) {
      A.then(
        function (a) {
          o.closed || (o.next(a), o.complete());
        },
        function (a) {
          return o.error(a);
        }
      ).then(null, el);
    });
  }
  function Gf(A) {
    return new nn(function (o) {
      var a, v;
      try {
        for (var C = Au(A), S = C.next(); !S.done; S = C.next()) {
          var R = S.value;
          if ((o.next(R), o.closed)) return;
        }
      } catch (G) {
        a = { error: G };
      } finally {
        try {
          S && !S.done && (v = C.return) && v.call(C);
        } finally {
          if (a) throw a.error;
        }
      }
      o.complete();
    });
  }
  function dl(A) {
    return new nn(function (o) {
      zf(A, o).catch(function (a) {
        return o.error(a);
      });
    });
  }
  function Wf(A) {
    return dl(ll(A));
  }
  function zf(A, o) {
    var a, v, C, S;
    return _f(this, void 0, void 0, function () {
      var R, G;
      return zs(this, function (J) {
        switch (J.label) {
          case 0:
            J.trys.push([0, 5, 6, 11]), (a = Ff(A)), (J.label = 1);
          case 1:
            return [4, a.next()];
          case 2:
            if (((v = J.sent()), !!v.done)) return [3, 4];
            if (((R = v.value), o.next(R), o.closed)) return [2];
            J.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (G = J.sent()), (C = { error: G }), [3, 11];
          case 6:
            return (
              J.trys.push([6, , 9, 10]),
              v && !v.done && (S = a.return) ? [4, S.call(a)] : [3, 8]
            );
          case 7:
            J.sent(), (J.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (C) throw C.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return o.complete(), [2];
        }
      });
    });
  }
  var hl = { exports: {} };
  (function (A, o) {
    (function (a, v) {
      v(A);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Ie,
      function (a) {
        var v, C;
        if (
          !(
            (C = (v = globalThis.chrome) == null ? void 0 : v.runtime) !=
              null && C.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          const S = "The message port closed before a response was received.",
            R = (G) => {
              const J = {
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
              if (Object.keys(J).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class ee extends WeakMap {
                constructor(X, Pe = void 0) {
                  super(Pe), (this.createItem = X);
                }
                get(X) {
                  return (
                    this.has(X) || this.set(X, this.createItem(X)), super.get(X)
                  );
                }
              }
              const De = (le) =>
                  le && typeof le == "object" && typeof le.then == "function",
                Ve =
                  (le, X) =>
                  (...Pe) => {
                    G.runtime.lastError
                      ? le.reject(new Error(G.runtime.lastError.message))
                      : X.singleCallbackArg ||
                        (Pe.length <= 1 && X.singleCallbackArg !== !1)
                      ? le.resolve(Pe[0])
                      : le.resolve(Pe);
                  },
                ze = (le) => (le == 1 ? "argument" : "arguments"),
                tt = (le, X) =>
                  function (Ke, ...ct) {
                    if (ct.length < X.minArgs)
                      throw new Error(
                        `Expected at least ${X.minArgs} ${ze(
                          X.minArgs
                        )} for ${le}(), got ${ct.length}`
                      );
                    if (ct.length > X.maxArgs)
                      throw new Error(
                        `Expected at most ${X.maxArgs} ${ze(
                          X.maxArgs
                        )} for ${le}(), got ${ct.length}`
                      );
                    return new Promise((me, ot) => {
                      if (X.fallbackToNoCallback)
                        try {
                          Ke[le](...ct, Ve({ resolve: me, reject: ot }, X));
                        } catch (Ce) {
                          console.warn(
                            `${le} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            Ce
                          ),
                            Ke[le](...ct),
                            (X.fallbackToNoCallback = !1),
                            (X.noCallback = !0),
                            me();
                        }
                      else
                        X.noCallback
                          ? (Ke[le](...ct), me())
                          : Ke[le](...ct, Ve({ resolve: me, reject: ot }, X));
                    });
                  },
                de = (le, X, Pe) =>
                  new Proxy(X, {
                    apply(Ke, ct, me) {
                      return Pe.call(ct, le, ...me);
                    },
                  });
              let se = Function.call.bind(Object.prototype.hasOwnProperty);
              const at = (le, X = {}, Pe = {}) => {
                  let Ke = Object.create(null),
                    ct = {
                      has(ot, Ce) {
                        return Ce in le || Ce in Ke;
                      },
                      get(ot, Ce, _t) {
                        if (Ce in Ke) return Ke[Ce];
                        if (!(Ce in le)) return;
                        let _e = le[Ce];
                        if (typeof _e == "function")
                          if (typeof X[Ce] == "function")
                            _e = de(le, le[Ce], X[Ce]);
                          else if (se(Pe, Ce)) {
                            let ft = tt(Ce, Pe[Ce]);
                            _e = de(le, le[Ce], ft);
                          } else _e = _e.bind(le);
                        else if (
                          typeof _e == "object" &&
                          _e !== null &&
                          (se(X, Ce) || se(Pe, Ce))
                        )
                          _e = at(_e, X[Ce], Pe[Ce]);
                        else if (se(Pe, "*")) _e = at(_e, X[Ce], Pe["*"]);
                        else
                          return (
                            Object.defineProperty(Ke, Ce, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return le[Ce];
                              },
                              set(ft) {
                                le[Ce] = ft;
                              },
                            }),
                            _e
                          );
                        return (Ke[Ce] = _e), _e;
                      },
                      set(ot, Ce, _t, _e) {
                        return Ce in Ke ? (Ke[Ce] = _t) : (le[Ce] = _t), !0;
                      },
                      defineProperty(ot, Ce, _t) {
                        return Reflect.defineProperty(Ke, Ce, _t);
                      },
                      deleteProperty(ot, Ce) {
                        return Reflect.deleteProperty(Ke, Ce);
                      },
                    },
                    me = Object.create(le);
                  return new Proxy(me, ct);
                },
                pe = (le) => ({
                  addListener(X, Pe, ...Ke) {
                    X.addListener(le.get(Pe), ...Ke);
                  },
                  hasListener(X, Pe) {
                    return X.hasListener(le.get(Pe));
                  },
                  removeListener(X, Pe) {
                    X.removeListener(le.get(Pe));
                  },
                }),
                _r = new ee((le) =>
                  typeof le != "function"
                    ? le
                    : function (Pe) {
                        const Ke = at(
                          Pe,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        le(Ke);
                      }
                ),
                Tt = new ee((le) =>
                  typeof le != "function"
                    ? le
                    : function (Pe, Ke, ct) {
                        let me = !1,
                          ot,
                          Ce = new Promise((ce) => {
                            ot = function (Q) {
                              (me = !0), ce(Q);
                            };
                          }),
                          _t;
                        try {
                          _t = le(Pe, Ke, ot);
                        } catch (ce) {
                          _t = Promise.reject(ce);
                        }
                        const _e = _t !== !0 && De(_t);
                        if (_t !== !0 && !_e && !me) return !1;
                        const ft = (ce) => {
                          ce.then(
                            (Q) => {
                              ct(Q);
                            },
                            (Q) => {
                              let Oe;
                              Q &&
                              (Q instanceof Error ||
                                typeof Q.message == "string")
                                ? (Oe = Q.message)
                                : (Oe = "An unexpected error occurred"),
                                ct({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: Oe,
                                });
                            }
                          ).catch((Q) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              Q
                            );
                          });
                        };
                        return ft(_e ? _t : Ce), !0;
                      }
                ),
                Bt = ({ reject: le, resolve: X }, Pe) => {
                  G.runtime.lastError
                    ? G.runtime.lastError.message === S
                      ? X()
                      : le(new Error(G.runtime.lastError.message))
                    : Pe && Pe.__mozWebExtensionPolyfillReject__
                    ? le(new Error(Pe.message))
                    : X(Pe);
                },
                kt = (le, X, Pe, ...Ke) => {
                  if (Ke.length < X.minArgs)
                    throw new Error(
                      `Expected at least ${X.minArgs} ${ze(
                        X.minArgs
                      )} for ${le}(), got ${Ke.length}`
                    );
                  if (Ke.length > X.maxArgs)
                    throw new Error(
                      `Expected at most ${X.maxArgs} ${ze(
                        X.maxArgs
                      )} for ${le}(), got ${Ke.length}`
                    );
                  return new Promise((ct, me) => {
                    const ot = Bt.bind(null, { resolve: ct, reject: me });
                    Ke.push(ot), Pe.sendMessage(...Ke);
                  });
                },
                Lr = {
                  devtools: { network: { onRequestFinished: pe(_r) } },
                  runtime: {
                    onMessage: pe(Tt),
                    onMessageExternal: pe(Tt),
                    sendMessage: kt.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: kt.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                d = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (J.privacy = {
                  network: { "*": d },
                  services: { "*": d },
                  websites: { "*": d },
                }),
                at(G, Lr, J)
              );
            };
          a.exports = R(chrome);
        } else a.exports = globalThis.browser;
      }
    );
  })(hl);
  var jf = hl.exports,
    ge = gt(jf),
    Ma = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   */ Ma.exports,
    (function (A, o) {
      (function () {
        var a,
          v = "4.17.21",
          C = 200,
          S = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
          R = "Expected a function",
          G = "Invalid `variable` option passed into `_.template`",
          J = "__lodash_hash_undefined__",
          ee = 500,
          De = "__lodash_placeholder__",
          Ve = 1,
          ze = 2,
          tt = 4,
          de = 1,
          se = 2,
          at = 1,
          pe = 2,
          _r = 4,
          Tt = 8,
          Bt = 16,
          kt = 32,
          Lr = 64,
          d = 128,
          le = 256,
          X = 512,
          Pe = 30,
          Ke = "...",
          ct = 800,
          me = 16,
          ot = 1,
          Ce = 2,
          _t = 3,
          _e = 1 / 0,
          ft = 9007199254740991,
          ce = 17976931348623157e292,
          Q = NaN,
          Oe = 4294967295,
          Pt = Oe - 1,
          or = Oe >>> 1,
          un = [
            ["ary", d],
            ["bind", at],
            ["bindKey", pe],
            ["curry", Tt],
            ["curryRight", Bt],
            ["flip", X],
            ["partial", kt],
            ["partialRight", Lr],
            ["rearg", le],
          ],
          U = "[object Arguments]",
          wr = "[object Array]",
          dt = "[object AsyncFunction]",
          Ar = "[object Boolean]",
          sr = "[object Date]",
          rt = "[object DOMException]",
          Nt = "[object Error]",
          qt = "[object Function]",
          an = "[object GeneratorFunction]",
          Mt = "[object Map]",
          Jt = "[object Number]",
          Fr = "[object Null]",
          Lt = "[object Object]",
          lr = "[object Promise]",
          Ot = "[object Proxy]",
          Vr = "[object RegExp]",
          st = "[object Set]",
          Ee = "[object String]",
          cr = "[object Symbol]",
          Wn = "[object Undefined]",
          fe = "[object WeakMap]",
          Ft = "[object WeakSet]",
          Rn = "[object ArrayBuffer]",
          on = "[object DataView]",
          In = "[object Float32Array]",
          Xt = "[object Float64Array]",
          Gr = "[object Int8Array]",
          Qt = "[object Int16Array]",
          yr = "[object Int32Array]",
          Wt = "[object Uint8Array]",
          fr = "[object Uint8ClampedArray]",
          hi = "[object Uint16Array]",
          Wr = "[object Uint32Array]",
          pi = /\b__p \+= '';/g,
          Eu = /\b(__p \+=) '' \+/g,
          Wi = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          zr = /&(?:amp|lt|gt|quot|#39);/g,
          jr = /[&<>"']/g,
          Su = RegExp(zr.source),
          zt = RegExp(jr.source),
          mt = /<%-([\s\S]+?)%>/g,
          jt = /<%([\s\S]+?)%>/g,
          Ht = /<%=([\s\S]+?)%>/g,
          gi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          zi = /^\w*$/,
          ji =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Le = /[\\^$.*+?()[\]{}|]/g,
          Ut = RegExp(Le.source),
          dr = /^\s+/,
          Rr = /\s/,
          At = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Rt = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Ki = /,? & /,
          Yi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          zn = /[()=,{}\[\]\/\s]/,
          er = /\\(\\)?/g,
          Tu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          $i = /\w*$/,
          vn = /^[-+]0x[0-9a-f]+$/i,
          mi = /^0b[01]+$/i,
          Zi = /^\[object .+?Constructor\]$/,
          vi = /^0o[0-7]+$/i,
          bi = /^(?:0|[1-9]\d*)$/,
          Bu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Ir = /($^)/,
          jn = /['\n\r\u2028\u2029\\]/g,
          Kn = "\\ud800-\\udfff",
          ku = "\\u0300-\\u036f",
          _u = "\\ufe20-\\ufe2f",
          Lu = "\\u20d0-\\u20ff",
          wi = ku + _u + Lu,
          Ai = "\\u2700-\\u27bf",
          Fu = "a-z\\xdf-\\xf6\\xf8-\\xff",
          bn = "\\xac\\xb1\\xd7\\xf7",
          Ru = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          Iu = "\\u2000-\\u206f",
          Ji =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          Yn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          Vt = "\\ufe0e\\ufe0f",
          wn = bn + Ru + Iu + Ji,
          Pn = "['’]",
          ca = "[" + Kn + "]",
          Pu = "[" + wn + "]",
          Ye = "[" + wi + "]",
          Xi = "\\d+",
          yi = "[" + Ai + "]",
          Qi = "[" + Fu + "]",
          Nu = "[^" + Kn + wn + Xi + Ai + Fu + Yn + "]",
          eu = "\\ud83c[\\udffb-\\udfff]",
          Dr = "(?:" + Ye + "|" + eu + ")",
          $n = "[^" + Kn + "]",
          xr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Di = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Kr = "[" + Yn + "]",
          Xe = "\\u200d",
          sn = "(?:" + Qi + "|" + Nu + ")",
          tu = "(?:" + Kr + "|" + Nu + ")",
          qu = "(?:" + Pn + "(?:d|ll|m|re|s|t|ve))?",
          An = "(?:" + Pn + "(?:D|LL|M|RE|S|T|VE))?",
          ru = Dr + "?",
          xi = "[" + Vt + "]?",
          Mu =
            "(?:" + Xe + "(?:" + [$n, xr, Di].join("|") + ")" + xi + ru + ")*",
          nu = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
          fa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
          Ci = xi + ru + Mu,
          da = "(?:" + [yi, xr, Di].join("|") + ")" + Ci,
          ha = "(?:" + [$n + Ye + "?", Ye, xr, Di, ca].join("|") + ")",
          iu = RegExp(Pn, "g"),
          pa = RegExp(Ye, "g"),
          uu = RegExp(eu + "(?=" + eu + ")|" + ha + Ci, "g"),
          ga = RegExp(
            [
              Kr + "?" + Qi + "+" + qu + "(?=" + [Pu, Kr, "$"].join("|") + ")",
              tu + "+" + An + "(?=" + [Pu, Kr + sn, "$"].join("|") + ")",
              Kr + "?" + sn + "+" + qu,
              Kr + "+" + An,
              fa,
              nu,
              Xi,
              da,
            ].join("|"),
            "g"
          ),
          ma = RegExp("[" + Xe + Kn + wi + Vt + "]"),
          Ou =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          va = [
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
          Hu = -1,
          nt = {};
        (nt[In] =
          nt[Xt] =
          nt[Gr] =
          nt[Qt] =
          nt[yr] =
          nt[Wt] =
          nt[fr] =
          nt[hi] =
          nt[Wr] =
            !0),
          (nt[U] =
            nt[wr] =
            nt[Rn] =
            nt[Ar] =
            nt[on] =
            nt[sr] =
            nt[Nt] =
            nt[qt] =
            nt[Mt] =
            nt[Jt] =
            nt[Lt] =
            nt[Vr] =
            nt[st] =
            nt[Ee] =
            nt[fe] =
              !1);
        var Qe = {};
        (Qe[U] =
          Qe[wr] =
          Qe[Rn] =
          Qe[on] =
          Qe[Ar] =
          Qe[sr] =
          Qe[In] =
          Qe[Xt] =
          Qe[Gr] =
          Qe[Qt] =
          Qe[yr] =
          Qe[Mt] =
          Qe[Jt] =
          Qe[Lt] =
          Qe[Vr] =
          Qe[st] =
          Qe[Ee] =
          Qe[cr] =
          Qe[Wt] =
          Qe[fr] =
          Qe[hi] =
          Qe[Wr] =
            !0),
          (Qe[Nt] = Qe[qt] = Qe[fe] = !1);
        var yn = {
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
          Ei = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          },
          Uu = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          },
          Si = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Ti = parseFloat,
          ba = parseInt,
          Vu = typeof Ie == "object" && Ie && Ie.Object === Object && Ie,
          wa =
            typeof self == "object" && self && self.Object === Object && self,
          ht = Vu || wa || Function("return this")(),
          Bi = o && !o.nodeType && o,
          Yr = Bi && !0 && A && !A.nodeType && A,
          Dn = Yr && Yr.exports === Bi,
          au = Dn && Vu.process,
          tr = (function () {
            try {
              var D = Yr && Yr.require && Yr.require("util").types;
              return D || (au && au.binding && au.binding("util"));
            } catch {}
          })(),
          r = tr && tr.isArrayBuffer,
          u = tr && tr.isDate,
          s = tr && tr.isMap,
          f = tr && tr.isRegExp,
          p = tr && tr.isSet,
          m = tr && tr.isTypedArray;
        function w(D, L, _) {
          switch (_.length) {
            case 0:
              return D.call(L);
            case 1:
              return D.call(L, _[0]);
            case 2:
              return D.call(L, _[0], _[1]);
            case 3:
              return D.call(L, _[0], _[1], _[2]);
          }
          return D.apply(L, _);
        }
        function k(D, L, _, z) {
          for (var j = -1, ae = D == null ? 0 : D.length; ++j < ae; ) {
            var oe = D[j];
            L(z, oe, _(oe), D);
          }
          return z;
        }
        function E(D, L) {
          for (
            var _ = -1, z = D == null ? 0 : D.length;
            ++_ < z && L(D[_], _, D) !== !1;

          );
          return D;
        }
        function P(D, L) {
          for (var _ = D == null ? 0 : D.length; _-- && L(D[_], _, D) !== !1; );
          return D;
        }
        function V(D, L) {
          for (var _ = -1, z = D == null ? 0 : D.length; ++_ < z; )
            if (!L(D[_], _, D)) return !1;
          return !0;
        }
        function W(D, L) {
          for (
            var _ = -1, z = D == null ? 0 : D.length, j = 0, ae = [];
            ++_ < z;

          ) {
            var oe = D[_];
            L(oe, _, D) && (ae[j++] = oe);
          }
          return ae;
        }
        function O(D, L) {
          var _ = D == null ? 0 : D.length;
          return !!_ && et(D, L, 0) > -1;
        }
        function $(D, L, _) {
          for (var z = -1, j = D == null ? 0 : D.length; ++z < j; )
            if (_(L, D[z])) return !0;
          return !1;
        }
        function ue(D, L) {
          for (
            var _ = -1, z = D == null ? 0 : D.length, j = Array(z);
            ++_ < z;

          )
            j[_] = L(D[_], _, D);
          return j;
        }
        function Se(D, L) {
          for (var _ = -1, z = L.length, j = D.length; ++_ < z; )
            D[j + _] = L[_];
          return D;
        }
        function we(D, L, _, z) {
          var j = -1,
            ae = D == null ? 0 : D.length;
          for (z && ae && (_ = D[++j]); ++j < ae; ) _ = L(_, D[j], j, D);
          return _;
        }
        function Dt(D, L, _, z) {
          var j = D == null ? 0 : D.length;
          for (z && j && (_ = D[--j]); j--; ) _ = L(_, D[j], j, D);
          return _;
        }
        function pt(D, L) {
          for (var _ = -1, z = D == null ? 0 : D.length; ++_ < z; )
            if (L(D[_], _, D)) return !0;
          return !1;
        }
        var Pr = xn("length");
        function Cr(D) {
          return D.split("");
        }
        function Be(D) {
          return D.match(Yi) || [];
        }
        function ln(D, L, _) {
          var z;
          return (
            _(D, function (j, ae, oe) {
              if (L(j, ae, oe)) return (z = ae), !1;
            }),
            z
          );
        }
        function He(D, L, _, z) {
          for (var j = D.length, ae = _ + (z ? 1 : -1); z ? ae-- : ++ae < j; )
            if (L(D[ae], ae, D)) return ae;
          return -1;
        }
        function et(D, L, _) {
          return L === L ? Wu(D, L, _) : He(D, ki, _);
        }
        function Zn(D, L, _, z) {
          for (var j = _ - 1, ae = D.length; ++j < ae; )
            if (z(D[j], L)) return j;
          return -1;
        }
        function ki(D) {
          return D !== D;
        }
        function Er(D, L) {
          var _ = D == null ? 0 : D.length;
          return _ ? Gt(D, L) / _ : Q;
        }
        function xn(D) {
          return function (L) {
            return L == null ? a : L[D];
          };
        }
        function hr(D) {
          return function (L) {
            return D == null ? a : D[L];
          };
        }
        function $r(D, L, _, z, j) {
          return (
            j(D, function (ae, oe, re) {
              _ = z ? ((z = !1), ae) : L(_, ae, oe, re);
            }),
            _
          );
        }
        function cn(D, L) {
          var _ = D.length;
          for (D.sort(L); _--; ) D[_] = D[_].value;
          return D;
        }
        function Gt(D, L) {
          for (var _, z = -1, j = D.length; ++z < j; ) {
            var ae = L(D[z]);
            ae !== a && (_ = _ === a ? ae : _ + ae);
          }
          return _;
        }
        function Nn(D, L) {
          for (var _ = -1, z = Array(D); ++_ < D; ) z[_] = L(_);
          return z;
        }
        function pr(D, L) {
          return ue(L, function (_) {
            return [_, D[_]];
          });
        }
        function Nr(D) {
          return D && D.slice(0, zu(D) + 1).replace(dr, "");
        }
        function rr(D) {
          return function (L) {
            return D(L);
          };
        }
        function ou(D, L) {
          return ue(L, function (_) {
            return D[_];
          });
        }
        function qn(D, L) {
          return D.has(L);
        }
        function Ze(D, L) {
          for (var _ = -1, z = D.length; ++_ < z && et(L, D[_], 0) > -1; );
          return _;
        }
        function Cn(D, L) {
          for (var _ = D.length; _-- && et(L, D[_], 0) > -1; );
          return _;
        }
        function gr(D, L) {
          for (var _ = D.length, z = 0; _--; ) D[_] === L && ++z;
          return z;
        }
        var En = hr(yn),
          su = hr(Ei);
        function _i(D) {
          return "\\" + Si[D];
        }
        function Gu(D, L) {
          return D == null ? a : D[L];
        }
        function nr(D) {
          return ma.test(D);
        }
        function Li(D) {
          return Ou.test(D);
        }
        function Zr(D) {
          for (var L, _ = []; !(L = D.next()).done; ) _.push(L.value);
          return _;
        }
        function Jn(D) {
          var L = -1,
            _ = Array(D.size);
          return (
            D.forEach(function (z, j) {
              _[++L] = [j, z];
            }),
            _
          );
        }
        function Sn(D, L) {
          return function (_) {
            return D(L(_));
          };
        }
        function mr(D, L) {
          for (var _ = -1, z = D.length, j = 0, ae = []; ++_ < z; ) {
            var oe = D[_];
            (oe === L || oe === De) && ((D[_] = De), (ae[j++] = _));
          }
          return ae;
        }
        function fn(D) {
          var L = -1,
            _ = Array(D.size);
          return (
            D.forEach(function (z) {
              _[++L] = z;
            }),
            _
          );
        }
        function Fi(D) {
          var L = -1,
            _ = Array(D.size);
          return (
            D.forEach(function (z) {
              _[++L] = [z, z];
            }),
            _
          );
        }
        function Wu(D, L, _) {
          for (var z = _ - 1, j = D.length; ++z < j; ) if (D[z] === L) return z;
          return -1;
        }
        function Jr(D, L, _) {
          for (var z = _ + 1; z--; ) if (D[z] === L) return z;
          return z;
        }
        function dn(D) {
          return nr(D) ? lu(D) : Pr(D);
        }
        function ir(D) {
          return nr(D) ? x(D) : Cr(D);
        }
        function zu(D) {
          for (var L = D.length; L-- && Rr.test(D.charAt(L)); );
          return L;
        }
        var Ri = hr(Uu);
        function lu(D) {
          for (var L = (uu.lastIndex = 0); uu.test(D); ) ++L;
          return L;
        }
        function x(D) {
          return D.match(uu) || [];
        }
        function I(D) {
          return D.match(ga) || [];
        }
        var M = function D(L) {
            L = L == null ? ht : H.defaults(ht.Object(), L, H.pick(ht, va));
            var _ = L.Array,
              z = L.Date,
              j = L.Error,
              ae = L.Function,
              oe = L.Math,
              re = L.Object,
              Fe = L.RegExp,
              ve = L.String,
              Ne = L.TypeError,
              vt = _.prototype,
              It = ae.prototype,
              xt = re.prototype,
              ur = L["__core-js_shared__"],
              Xr = It.toString,
              xe = xt.hasOwnProperty,
              Mo = 0,
              $a = (function () {
                var e = /[^.]+$/.exec(
                  (ur && ur.keys && ur.keys.IE_PROTO) || ""
                );
                return e ? "Symbol(src)_1." + e : "";
              })(),
              ju = xt.toString,
              Oo = Xr.call(re),
              Za = ht._,
              Ja = Fe(
                "^" +
                  Xr.call(xe)
                    .replace(Le, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              Ku = Dn ? L.Buffer : a,
              Mn = L.Symbol,
              Yu = L.Uint8Array,
              Aa = Ku ? Ku.allocUnsafe : a,
              Ii = Sn(re.getPrototypeOf, re),
              Xa = re.create,
              Qa = xt.propertyIsEnumerable,
              $u = vt.splice,
              eo = Mn ? Mn.isConcatSpreadable : a,
              Pi = Mn ? Mn.iterator : a,
              Xn = Mn ? Mn.toStringTag : a,
              Zu = (function () {
                try {
                  var e = vu(re, "defineProperty");
                  return e({}, "", {}), e;
                } catch {}
              })(),
              Ho = L.clearTimeout !== ht.clearTimeout && L.clearTimeout,
              Uo = z && z.now !== ht.Date.now && z.now,
              Vo = L.setTimeout !== ht.setTimeout && L.setTimeout,
              Ju = oe.ceil,
              Xu = oe.floor,
              ya = re.getOwnPropertySymbols,
              Go = Ku ? Ku.isBuffer : a,
              On = L.isFinite,
              to = vt.join,
              Wo = Sn(re.keys, re),
              Ct = oe.max,
              Kt = oe.min,
              zo = z.now,
              jo = L.parseInt,
              Da = oe.random,
              Ko = vt.reverse,
              xa = vu(L, "DataView"),
              cu = vu(L, "Map"),
              qr = vu(L, "Promise"),
              Tn = vu(L, "Set"),
              lt = vu(L, "WeakMap"),
              fu = vu(re, "create"),
              Qu = lt && new lt(),
              Ni = {},
              Yo = bu(xa),
              $o = bu(cu),
              Zo = bu(qr),
              Jo = bu(Tn),
              ro = bu(lt),
              du = Mn ? Mn.prototype : a,
              Hn = du ? du.valueOf : a,
              g = du ? du.toString : a;
            function n(e) {
              if (yt(e) && !Re(e) && !(e instanceof q)) {
                if (e instanceof T) return e;
                if (xe.call(e, "__wrapped__")) return Oc(e);
              }
              return new T(e);
            }
            var l = (function () {
              function e() {}
              return function (t) {
                if (!bt(t)) return {};
                if (Xa) return Xa(t);
                e.prototype = t;
                var i = new e();
                return (e.prototype = a), i;
              };
            })();
            function h() {}
            function T(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = a);
            }
            (n.templateSettings = {
              escape: mt,
              evaluate: jt,
              interpolate: Ht,
              variable: "",
              imports: { _: n },
            }),
              (n.prototype = h.prototype),
              (n.prototype.constructor = n),
              (T.prototype = l(h.prototype)),
              (T.prototype.constructor = T);
            function q(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = Oe),
                (this.__views__ = []);
            }
            function ie() {
              var e = new q(this.__wrapped__);
              return (
                (e.__actions__ = Mr(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = Mr(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = Mr(this.__views__)),
                e
              );
            }
            function Te() {
              if (this.__filtered__) {
                var e = new q(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()), (e.__dir__ *= -1);
              return e;
            }
            function qe() {
              var e = this.__wrapped__.value(),
                t = this.__dir__,
                i = Re(e),
                c = t < 0,
                b = i ? e.length : 0,
                y = th(0, b, this.__views__),
                B = y.start,
                F = y.end,
                N = F - B,
                K = c ? F : B - 1,
                Y = this.__iteratees__,
                Z = Y.length,
                ne = 0,
                he = Kt(N, this.__takeCount__);
              if (!i || (!c && b == N && he == N))
                return sc(e, this.__actions__);
              var Ae = [];
              e: for (; N-- && ne < he; ) {
                K += t;
                for (var Ue = -1, ye = e[K]; ++Ue < Z; ) {
                  var je = Y[Ue],
                    $e = je.iteratee,
                    tn = je.type,
                    Br = $e(ye);
                  if (tn == Ce) ye = Br;
                  else if (!Br) {
                    if (tn == ot) continue e;
                    break e;
                  }
                }
                Ae[ne++] = ye;
              }
              return Ae;
            }
            (q.prototype = l(h.prototype)), (q.prototype.constructor = q);
            function Je(e) {
              var t = -1,
                i = e == null ? 0 : e.length;
              for (this.clear(); ++t < i; ) {
                var c = e[t];
                this.set(c[0], c[1]);
              }
            }
            function hu() {
              (this.__data__ = fu ? fu(null) : {}), (this.size = 0);
            }
            function zd(e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }
            function jd(e) {
              var t = this.__data__;
              if (fu) {
                var i = t[e];
                return i === J ? a : i;
              }
              return xe.call(t, e) ? t[e] : a;
            }
            function Kd(e) {
              var t = this.__data__;
              return fu ? t[e] !== a : xe.call(t, e);
            }
            function Yd(e, t) {
              var i = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (i[e] = fu && t === a ? J : t),
                this
              );
            }
            (Je.prototype.clear = hu),
              (Je.prototype.delete = zd),
              (Je.prototype.get = jd),
              (Je.prototype.has = Kd),
              (Je.prototype.set = Yd);
            function Qn(e) {
              var t = -1,
                i = e == null ? 0 : e.length;
              for (this.clear(); ++t < i; ) {
                var c = e[t];
                this.set(c[0], c[1]);
              }
            }
            function $d() {
              (this.__data__ = []), (this.size = 0);
            }
            function Zd(e) {
              var t = this.__data__,
                i = no(t, e);
              if (i < 0) return !1;
              var c = t.length - 1;
              return i == c ? t.pop() : $u.call(t, i, 1), --this.size, !0;
            }
            function Jd(e) {
              var t = this.__data__,
                i = no(t, e);
              return i < 0 ? a : t[i][1];
            }
            function Xd(e) {
              return no(this.__data__, e) > -1;
            }
            function Qd(e, t) {
              var i = this.__data__,
                c = no(i, e);
              return (
                c < 0 ? (++this.size, i.push([e, t])) : (i[c][1] = t), this
              );
            }
            (Qn.prototype.clear = $d),
              (Qn.prototype.delete = Zd),
              (Qn.prototype.get = Jd),
              (Qn.prototype.has = Xd),
              (Qn.prototype.set = Qd);
            function ei(e) {
              var t = -1,
                i = e == null ? 0 : e.length;
              for (this.clear(); ++t < i; ) {
                var c = e[t];
                this.set(c[0], c[1]);
              }
            }
            function e2() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Je(),
                  map: new (cu || Qn)(),
                  string: new Je(),
                });
            }
            function t2(e) {
              var t = mo(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }
            function r2(e) {
              return mo(this, e).get(e);
            }
            function n2(e) {
              return mo(this, e).has(e);
            }
            function i2(e, t) {
              var i = mo(this, e),
                c = i.size;
              return i.set(e, t), (this.size += i.size == c ? 0 : 1), this;
            }
            (ei.prototype.clear = e2),
              (ei.prototype.delete = t2),
              (ei.prototype.get = r2),
              (ei.prototype.has = n2),
              (ei.prototype.set = i2);
            function pu(e) {
              var t = -1,
                i = e == null ? 0 : e.length;
              for (this.__data__ = new ei(); ++t < i; ) this.add(e[t]);
            }
            function u2(e) {
              return this.__data__.set(e, J), this;
            }
            function a2(e) {
              return this.__data__.has(e);
            }
            (pu.prototype.add = pu.prototype.push = u2),
              (pu.prototype.has = a2);
            function Bn(e) {
              var t = (this.__data__ = new Qn(e));
              this.size = t.size;
            }
            function o2() {
              (this.__data__ = new Qn()), (this.size = 0);
            }
            function s2(e) {
              var t = this.__data__,
                i = t.delete(e);
              return (this.size = t.size), i;
            }
            function l2(e) {
              return this.__data__.get(e);
            }
            function c2(e) {
              return this.__data__.has(e);
            }
            function f2(e, t) {
              var i = this.__data__;
              if (i instanceof Qn) {
                var c = i.__data__;
                if (!cu || c.length < C - 1)
                  return c.push([e, t]), (this.size = ++i.size), this;
                i = this.__data__ = new ei(c);
              }
              return i.set(e, t), (this.size = i.size), this;
            }
            (Bn.prototype.clear = o2),
              (Bn.prototype.delete = s2),
              (Bn.prototype.get = l2),
              (Bn.prototype.has = c2),
              (Bn.prototype.set = f2);
            function Ol(e, t) {
              var i = Re(e),
                c = !i && wu(e),
                b = !i && !c && Ui(e),
                y = !i && !c && !b && na(e),
                B = i || c || b || y,
                F = B ? Nn(e.length, ve) : [],
                N = F.length;
              for (var K in e)
                (t || xe.call(e, K)) &&
                  !(
                    B &&
                    (K == "length" ||
                      (b && (K == "offset" || K == "parent")) ||
                      (y &&
                        (K == "buffer" ||
                          K == "byteLength" ||
                          K == "byteOffset")) ||
                      ii(K, N))
                  ) &&
                  F.push(K);
              return F;
            }
            function Hl(e) {
              var t = e.length;
              return t ? e[ss(0, t - 1)] : a;
            }
            function d2(e, t) {
              return vo(Mr(e), gu(t, 0, e.length));
            }
            function h2(e) {
              return vo(Mr(e));
            }
            function Xo(e, t, i) {
              ((i !== a && !kn(e[t], i)) || (i === a && !(t in e))) &&
                ti(e, t, i);
            }
            function Ca(e, t, i) {
              var c = e[t];
              (!(xe.call(e, t) && kn(c, i)) || (i === a && !(t in e))) &&
                ti(e, t, i);
            }
            function no(e, t) {
              for (var i = e.length; i--; ) if (kn(e[i][0], t)) return i;
              return -1;
            }
            function p2(e, t, i, c) {
              return (
                qi(e, function (b, y, B) {
                  t(c, b, i(b), B);
                }),
                c
              );
            }
            function Ul(e, t) {
              return e && Vn(t, Yt(t), e);
            }
            function g2(e, t) {
              return e && Vn(t, Hr(t), e);
            }
            function ti(e, t, i) {
              t == "__proto__" && Zu
                ? Zu(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0,
                  })
                : (e[t] = i);
            }
            function Qo(e, t) {
              for (var i = -1, c = t.length, b = _(c), y = e == null; ++i < c; )
                b[i] = y ? a : Rs(e, t[i]);
              return b;
            }
            function gu(e, t, i) {
              return (
                e === e &&
                  (i !== a && (e = e <= i ? e : i),
                  t !== a && (e = e >= t ? e : t)),
                e
              );
            }
            function hn(e, t, i, c, b, y) {
              var B,
                F = t & Ve,
                N = t & ze,
                K = t & tt;
              if ((i && (B = b ? i(e, c, b, y) : i(e)), B !== a)) return B;
              if (!bt(e)) return e;
              var Y = Re(e);
              if (Y) {
                if (((B = nh(e)), !F)) return Mr(e, B);
              } else {
                var Z = vr(e),
                  ne = Z == qt || Z == an;
                if (Ui(e)) return fc(e, F);
                if (Z == Lt || Z == U || (ne && !b)) {
                  if (((B = N || ne ? {} : _c(e)), !F))
                    return N ? j2(e, g2(B, e)) : z2(e, Ul(B, e));
                } else {
                  if (!Qe[Z]) return b ? e : {};
                  B = ih(e, Z, F);
                }
              }
              y || (y = new Bn());
              var he = y.get(e);
              if (he) return he;
              y.set(e, B),
                af(e)
                  ? e.forEach(function (ye) {
                      B.add(hn(ye, t, i, ye, e, y));
                    })
                  : nf(e) &&
                    e.forEach(function (ye, je) {
                      B.set(je, hn(ye, t, i, je, e, y));
                    });
              var Ae = K ? (N ? ws : bs) : N ? Hr : Yt,
                Ue = Y ? a : Ae(e);
              return (
                E(Ue || e, function (ye, je) {
                  Ue && ((je = ye), (ye = e[je])),
                    Ca(B, je, hn(ye, t, i, je, e, y));
                }),
                B
              );
            }
            function m2(e) {
              var t = Yt(e);
              return function (i) {
                return Vl(i, e, t);
              };
            }
            function Vl(e, t, i) {
              var c = i.length;
              if (e == null) return !c;
              for (e = re(e); c--; ) {
                var b = i[c],
                  y = t[b],
                  B = e[b];
                if ((B === a && !(b in e)) || !y(B)) return !1;
              }
              return !0;
            }
            function Gl(e, t, i) {
              if (typeof e != "function") throw new Ne(R);
              return La(function () {
                e.apply(a, i);
              }, t);
            }
            function Ea(e, t, i, c) {
              var b = -1,
                y = O,
                B = !0,
                F = e.length,
                N = [],
                K = t.length;
              if (!F) return N;
              i && (t = ue(t, rr(i))),
                c
                  ? ((y = $), (B = !1))
                  : t.length >= C && ((y = qn), (B = !1), (t = new pu(t)));
              e: for (; ++b < F; ) {
                var Y = e[b],
                  Z = i == null ? Y : i(Y);
                if (((Y = c || Y !== 0 ? Y : 0), B && Z === Z)) {
                  for (var ne = K; ne--; ) if (t[ne] === Z) continue e;
                  N.push(Y);
                } else y(t, Z, c) || N.push(Y);
              }
              return N;
            }
            var qi = mc(Un),
              Wl = mc(ts, !0);
            function v2(e, t) {
              var i = !0;
              return (
                qi(e, function (c, b, y) {
                  return (i = !!t(c, b, y)), i;
                }),
                i
              );
            }
            function io(e, t, i) {
              for (var c = -1, b = e.length; ++c < b; ) {
                var y = e[c],
                  B = t(y);
                if (B != null && (F === a ? B === B && !en(B) : i(B, F)))
                  var F = B,
                    N = y;
              }
              return N;
            }
            function b2(e, t, i, c) {
              var b = e.length;
              for (
                i = Me(i),
                  i < 0 && (i = -i > b ? 0 : b + i),
                  c = c === a || c > b ? b : Me(c),
                  c < 0 && (c += b),
                  c = i > c ? 0 : sf(c);
                i < c;

              )
                e[i++] = t;
              return e;
            }
            function zl(e, t) {
              var i = [];
              return (
                qi(e, function (c, b, y) {
                  t(c, b, y) && i.push(c);
                }),
                i
              );
            }
            function ar(e, t, i, c, b) {
              var y = -1,
                B = e.length;
              for (i || (i = ah), b || (b = []); ++y < B; ) {
                var F = e[y];
                t > 0 && i(F)
                  ? t > 1
                    ? ar(F, t - 1, i, c, b)
                    : Se(b, F)
                  : c || (b[b.length] = F);
              }
              return b;
            }
            var es = vc(),
              jl = vc(!0);
            function Un(e, t) {
              return e && es(e, t, Yt);
            }
            function ts(e, t) {
              return e && jl(e, t, Yt);
            }
            function uo(e, t) {
              return W(t, function (i) {
                return ui(e[i]);
              });
            }
            function mu(e, t) {
              t = Oi(t, e);
              for (var i = 0, c = t.length; e != null && i < c; )
                e = e[Gn(t[i++])];
              return i && i == c ? e : a;
            }
            function Kl(e, t, i) {
              var c = t(e);
              return Re(e) ? c : Se(c, i(e));
            }
            function Sr(e) {
              return e == null
                ? e === a
                  ? Wn
                  : Fr
                : Xn && Xn in re(e)
                ? eh(e)
                : hh(e);
            }
            function rs(e, t) {
              return e > t;
            }
            function w2(e, t) {
              return e != null && xe.call(e, t);
            }
            function A2(e, t) {
              return e != null && t in re(e);
            }
            function y2(e, t, i) {
              return e >= Kt(t, i) && e < Ct(t, i);
            }
            function ns(e, t, i) {
              for (
                var c = i ? $ : O,
                  b = e[0].length,
                  y = e.length,
                  B = y,
                  F = _(y),
                  N = 1 / 0,
                  K = [];
                B--;

              ) {
                var Y = e[B];
                B && t && (Y = ue(Y, rr(t))),
                  (N = Kt(Y.length, N)),
                  (F[B] =
                    !i && (t || (b >= 120 && Y.length >= 120))
                      ? new pu(B && Y)
                      : a);
              }
              Y = e[0];
              var Z = -1,
                ne = F[0];
              e: for (; ++Z < b && K.length < N; ) {
                var he = Y[Z],
                  Ae = t ? t(he) : he;
                if (
                  ((he = i || he !== 0 ? he : 0),
                  !(ne ? qn(ne, Ae) : c(K, Ae, i)))
                ) {
                  for (B = y; --B; ) {
                    var Ue = F[B];
                    if (!(Ue ? qn(Ue, Ae) : c(e[B], Ae, i))) continue e;
                  }
                  ne && ne.push(Ae), K.push(he);
                }
              }
              return K;
            }
            function D2(e, t, i, c) {
              return (
                Un(e, function (b, y, B) {
                  t(c, i(b), y, B);
                }),
                c
              );
            }
            function Sa(e, t, i) {
              (t = Oi(t, e)), (e = Ic(e, t));
              var c = e == null ? e : e[Gn(gn(t))];
              return c == null ? a : w(c, e, i);
            }
            function Yl(e) {
              return yt(e) && Sr(e) == U;
            }
            function x2(e) {
              return yt(e) && Sr(e) == Rn;
            }
            function C2(e) {
              return yt(e) && Sr(e) == sr;
            }
            function Ta(e, t, i, c, b) {
              return e === t
                ? !0
                : e == null || t == null || (!yt(e) && !yt(t))
                ? e !== e && t !== t
                : E2(e, t, i, c, Ta, b);
            }
            function E2(e, t, i, c, b, y) {
              var B = Re(e),
                F = Re(t),
                N = B ? wr : vr(e),
                K = F ? wr : vr(t);
              (N = N == U ? Lt : N), (K = K == U ? Lt : K);
              var Y = N == Lt,
                Z = K == Lt,
                ne = N == K;
              if (ne && Ui(e)) {
                if (!Ui(t)) return !1;
                (B = !0), (Y = !1);
              }
              if (ne && !Y)
                return (
                  y || (y = new Bn()),
                  B || na(e) ? Tc(e, t, i, c, b, y) : X2(e, t, N, i, c, b, y)
                );
              if (!(i & de)) {
                var he = Y && xe.call(e, "__wrapped__"),
                  Ae = Z && xe.call(t, "__wrapped__");
                if (he || Ae) {
                  var Ue = he ? e.value() : e,
                    ye = Ae ? t.value() : t;
                  return y || (y = new Bn()), b(Ue, ye, i, c, y);
                }
              }
              return ne ? (y || (y = new Bn()), Q2(e, t, i, c, b, y)) : !1;
            }
            function S2(e) {
              return yt(e) && vr(e) == Mt;
            }
            function is(e, t, i, c) {
              var b = i.length,
                y = b,
                B = !c;
              if (e == null) return !y;
              for (e = re(e); b--; ) {
                var F = i[b];
                if (B && F[2] ? F[1] !== e[F[0]] : !(F[0] in e)) return !1;
              }
              for (; ++b < y; ) {
                F = i[b];
                var N = F[0],
                  K = e[N],
                  Y = F[1];
                if (B && F[2]) {
                  if (K === a && !(N in e)) return !1;
                } else {
                  var Z = new Bn();
                  if (c) var ne = c(K, Y, N, e, t, Z);
                  if (!(ne === a ? Ta(Y, K, de | se, c, Z) : ne)) return !1;
                }
              }
              return !0;
            }
            function $l(e) {
              if (!bt(e) || sh(e)) return !1;
              var t = ui(e) ? Ja : Zi;
              return t.test(bu(e));
            }
            function T2(e) {
              return yt(e) && Sr(e) == Vr;
            }
            function B2(e) {
              return yt(e) && vr(e) == st;
            }
            function k2(e) {
              return yt(e) && xo(e.length) && !!nt[Sr(e)];
            }
            function Zl(e) {
              return typeof e == "function"
                ? e
                : e == null
                ? Ur
                : typeof e == "object"
                ? Re(e)
                  ? Ql(e[0], e[1])
                  : Xl(e)
                : wf(e);
            }
            function us(e) {
              if (!_a(e)) return Wo(e);
              var t = [];
              for (var i in re(e))
                xe.call(e, i) && i != "constructor" && t.push(i);
              return t;
            }
            function _2(e) {
              if (!bt(e)) return dh(e);
              var t = _a(e),
                i = [];
              for (var c in e)
                (c == "constructor" && (t || !xe.call(e, c))) || i.push(c);
              return i;
            }
            function as(e, t) {
              return e < t;
            }
            function Jl(e, t) {
              var i = -1,
                c = Or(e) ? _(e.length) : [];
              return (
                qi(e, function (b, y, B) {
                  c[++i] = t(b, y, B);
                }),
                c
              );
            }
            function Xl(e) {
              var t = ys(e);
              return t.length == 1 && t[0][2]
                ? Fc(t[0][0], t[0][1])
                : function (i) {
                    return i === e || is(i, e, t);
                  };
            }
            function Ql(e, t) {
              return xs(e) && Lc(t)
                ? Fc(Gn(e), t)
                : function (i) {
                    var c = Rs(i, e);
                    return c === a && c === t ? Is(i, e) : Ta(t, c, de | se);
                  };
            }
            function ao(e, t, i, c, b) {
              e !== t &&
                es(
                  t,
                  function (y, B) {
                    if ((b || (b = new Bn()), bt(y))) L2(e, t, B, i, ao, c, b);
                    else {
                      var F = c ? c(Es(e, B), y, B + "", e, t, b) : a;
                      F === a && (F = y), Xo(e, B, F);
                    }
                  },
                  Hr
                );
            }
            function L2(e, t, i, c, b, y, B) {
              var F = Es(e, i),
                N = Es(t, i),
                K = B.get(N);
              if (K) {
                Xo(e, i, K);
                return;
              }
              var Y = y ? y(F, N, i + "", e, t, B) : a,
                Z = Y === a;
              if (Z) {
                var ne = Re(N),
                  he = !ne && Ui(N),
                  Ae = !ne && !he && na(N);
                (Y = N),
                  ne || he || Ae
                    ? Re(F)
                      ? (Y = F)
                      : Et(F)
                      ? (Y = Mr(F))
                      : he
                      ? ((Z = !1), (Y = fc(N, !0)))
                      : Ae
                      ? ((Z = !1), (Y = dc(N, !0)))
                      : (Y = [])
                    : Fa(N) || wu(N)
                    ? ((Y = F),
                      wu(F) ? (Y = lf(F)) : (!bt(F) || ui(F)) && (Y = _c(N)))
                    : (Z = !1);
              }
              Z && (B.set(N, Y), b(Y, N, c, y, B), B.delete(N)), Xo(e, i, Y);
            }
            function ec(e, t) {
              var i = e.length;
              if (i) return (t += t < 0 ? i : 0), ii(t, i) ? e[t] : a;
            }
            function tc(e, t, i) {
              t.length
                ? (t = ue(t, function (y) {
                    return Re(y)
                      ? function (B) {
                          return mu(B, y.length === 1 ? y[0] : y);
                        }
                      : y;
                  }))
                : (t = [Ur]);
              var c = -1;
              t = ue(t, rr(be()));
              var b = Jl(e, function (y, B, F) {
                var N = ue(t, function (K) {
                  return K(y);
                });
                return { criteria: N, index: ++c, value: y };
              });
              return cn(b, function (y, B) {
                return W2(y, B, i);
              });
            }
            function F2(e, t) {
              return rc(e, t, function (i, c) {
                return Is(e, c);
              });
            }
            function rc(e, t, i) {
              for (var c = -1, b = t.length, y = {}; ++c < b; ) {
                var B = t[c],
                  F = mu(e, B);
                i(F, B) && Ba(y, Oi(B, e), F);
              }
              return y;
            }
            function R2(e) {
              return function (t) {
                return mu(t, e);
              };
            }
            function os(e, t, i, c) {
              var b = c ? Zn : et,
                y = -1,
                B = t.length,
                F = e;
              for (e === t && (t = Mr(t)), i && (F = ue(e, rr(i))); ++y < B; )
                for (
                  var N = 0, K = t[y], Y = i ? i(K) : K;
                  (N = b(F, Y, N, c)) > -1;

                )
                  F !== e && $u.call(F, N, 1), $u.call(e, N, 1);
              return e;
            }
            function nc(e, t) {
              for (var i = e ? t.length : 0, c = i - 1; i--; ) {
                var b = t[i];
                if (i == c || b !== y) {
                  var y = b;
                  ii(b) ? $u.call(e, b, 1) : fs(e, b);
                }
              }
              return e;
            }
            function ss(e, t) {
              return e + Xu(Da() * (t - e + 1));
            }
            function I2(e, t, i, c) {
              for (
                var b = -1, y = Ct(Ju((t - e) / (i || 1)), 0), B = _(y);
                y--;

              )
                (B[c ? y : ++b] = e), (e += i);
              return B;
            }
            function ls(e, t) {
              var i = "";
              if (!e || t < 1 || t > ft) return i;
              do t % 2 && (i += e), (t = Xu(t / 2)), t && (e += e);
              while (t);
              return i;
            }
            function Ge(e, t) {
              return Ss(Rc(e, t, Ur), e + "");
            }
            function P2(e) {
              return Hl(ia(e));
            }
            function N2(e, t) {
              var i = ia(e);
              return vo(i, gu(t, 0, i.length));
            }
            function Ba(e, t, i, c) {
              if (!bt(e)) return e;
              t = Oi(t, e);
              for (
                var b = -1, y = t.length, B = y - 1, F = e;
                F != null && ++b < y;

              ) {
                var N = Gn(t[b]),
                  K = i;
                if (
                  N === "__proto__" ||
                  N === "constructor" ||
                  N === "prototype"
                )
                  return e;
                if (b != B) {
                  var Y = F[N];
                  (K = c ? c(Y, N, F) : a),
                    K === a && (K = bt(Y) ? Y : ii(t[b + 1]) ? [] : {});
                }
                Ca(F, N, K), (F = F[N]);
              }
              return e;
            }
            var ic = Qu
                ? function (e, t) {
                    return Qu.set(e, t), e;
                  }
                : Ur,
              q2 = Zu
                ? function (e, t) {
                    return Zu(e, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: Ns(t),
                      writable: !0,
                    });
                  }
                : Ur;
            function M2(e) {
              return vo(ia(e));
            }
            function pn(e, t, i) {
              var c = -1,
                b = e.length;
              t < 0 && (t = -t > b ? 0 : b + t),
                (i = i > b ? b : i),
                i < 0 && (i += b),
                (b = t > i ? 0 : (i - t) >>> 0),
                (t >>>= 0);
              for (var y = _(b); ++c < b; ) y[c] = e[c + t];
              return y;
            }
            function O2(e, t) {
              var i;
              return (
                qi(e, function (c, b, y) {
                  return (i = t(c, b, y)), !i;
                }),
                !!i
              );
            }
            function oo(e, t, i) {
              var c = 0,
                b = e == null ? c : e.length;
              if (typeof t == "number" && t === t && b <= or) {
                for (; c < b; ) {
                  var y = (c + b) >>> 1,
                    B = e[y];
                  B !== null && !en(B) && (i ? B <= t : B < t)
                    ? (c = y + 1)
                    : (b = y);
                }
                return b;
              }
              return cs(e, t, Ur, i);
            }
            function cs(e, t, i, c) {
              var b = 0,
                y = e == null ? 0 : e.length;
              if (y === 0) return 0;
              t = i(t);
              for (
                var B = t !== t, F = t === null, N = en(t), K = t === a;
                b < y;

              ) {
                var Y = Xu((b + y) / 2),
                  Z = i(e[Y]),
                  ne = Z !== a,
                  he = Z === null,
                  Ae = Z === Z,
                  Ue = en(Z);
                if (B) var ye = c || Ae;
                else
                  K
                    ? (ye = Ae && (c || ne))
                    : F
                    ? (ye = Ae && ne && (c || !he))
                    : N
                    ? (ye = Ae && ne && !he && (c || !Ue))
                    : he || Ue
                    ? (ye = !1)
                    : (ye = c ? Z <= t : Z < t);
                ye ? (b = Y + 1) : (y = Y);
              }
              return Kt(y, Pt);
            }
            function uc(e, t) {
              for (var i = -1, c = e.length, b = 0, y = []; ++i < c; ) {
                var B = e[i],
                  F = t ? t(B) : B;
                if (!i || !kn(F, N)) {
                  var N = F;
                  y[b++] = B === 0 ? 0 : B;
                }
              }
              return y;
            }
            function ac(e) {
              return typeof e == "number" ? e : en(e) ? Q : +e;
            }
            function Qr(e) {
              if (typeof e == "string") return e;
              if (Re(e)) return ue(e, Qr) + "";
              if (en(e)) return g ? g.call(e) : "";
              var t = e + "";
              return t == "0" && 1 / e == -_e ? "-0" : t;
            }
            function Mi(e, t, i) {
              var c = -1,
                b = O,
                y = e.length,
                B = !0,
                F = [],
                N = F;
              if (i) (B = !1), (b = $);
              else if (y >= C) {
                var K = t ? null : Z2(e);
                if (K) return fn(K);
                (B = !1), (b = qn), (N = new pu());
              } else N = t ? [] : F;
              e: for (; ++c < y; ) {
                var Y = e[c],
                  Z = t ? t(Y) : Y;
                if (((Y = i || Y !== 0 ? Y : 0), B && Z === Z)) {
                  for (var ne = N.length; ne--; ) if (N[ne] === Z) continue e;
                  t && N.push(Z), F.push(Y);
                } else b(N, Z, i) || (N !== F && N.push(Z), F.push(Y));
              }
              return F;
            }
            function fs(e, t) {
              return (
                (t = Oi(t, e)), (e = Ic(e, t)), e == null || delete e[Gn(gn(t))]
              );
            }
            function oc(e, t, i, c) {
              return Ba(e, t, i(mu(e, t)), c);
            }
            function so(e, t, i, c) {
              for (
                var b = e.length, y = c ? b : -1;
                (c ? y-- : ++y < b) && t(e[y], y, e);

              );
              return i
                ? pn(e, c ? 0 : y, c ? y + 1 : b)
                : pn(e, c ? y + 1 : 0, c ? b : y);
            }
            function sc(e, t) {
              var i = e;
              return (
                i instanceof q && (i = i.value()),
                we(
                  t,
                  function (c, b) {
                    return b.func.apply(b.thisArg, Se([c], b.args));
                  },
                  i
                )
              );
            }
            function ds(e, t, i) {
              var c = e.length;
              if (c < 2) return c ? Mi(e[0]) : [];
              for (var b = -1, y = _(c); ++b < c; )
                for (var B = e[b], F = -1; ++F < c; )
                  F != b && (y[b] = Ea(y[b] || B, e[F], t, i));
              return Mi(ar(y, 1), t, i);
            }
            function lc(e, t, i) {
              for (var c = -1, b = e.length, y = t.length, B = {}; ++c < b; ) {
                var F = c < y ? t[c] : a;
                i(B, e[c], F);
              }
              return B;
            }
            function hs(e) {
              return Et(e) ? e : [];
            }
            function ps(e) {
              return typeof e == "function" ? e : Ur;
            }
            function Oi(e, t) {
              return Re(e) ? e : xs(e, t) ? [e] : Mc(it(e));
            }
            var H2 = Ge;
            function Hi(e, t, i) {
              var c = e.length;
              return (i = i === a ? c : i), !t && i >= c ? e : pn(e, t, i);
            }
            var cc =
              Ho ||
              function (e) {
                return ht.clearTimeout(e);
              };
            function fc(e, t) {
              if (t) return e.slice();
              var i = e.length,
                c = Aa ? Aa(i) : new e.constructor(i);
              return e.copy(c), c;
            }
            function gs(e) {
              var t = new e.constructor(e.byteLength);
              return new Yu(t).set(new Yu(e)), t;
            }
            function U2(e, t) {
              var i = t ? gs(e.buffer) : e.buffer;
              return new e.constructor(i, e.byteOffset, e.byteLength);
            }
            function V2(e) {
              var t = new e.constructor(e.source, $i.exec(e));
              return (t.lastIndex = e.lastIndex), t;
            }
            function G2(e) {
              return Hn ? re(Hn.call(e)) : {};
            }
            function dc(e, t) {
              var i = t ? gs(e.buffer) : e.buffer;
              return new e.constructor(i, e.byteOffset, e.length);
            }
            function hc(e, t) {
              if (e !== t) {
                var i = e !== a,
                  c = e === null,
                  b = e === e,
                  y = en(e),
                  B = t !== a,
                  F = t === null,
                  N = t === t,
                  K = en(t);
                if (
                  (!F && !K && !y && e > t) ||
                  (y && B && N && !F && !K) ||
                  (c && B && N) ||
                  (!i && N) ||
                  !b
                )
                  return 1;
                if (
                  (!c && !y && !K && e < t) ||
                  (K && i && b && !c && !y) ||
                  (F && i && b) ||
                  (!B && b) ||
                  !N
                )
                  return -1;
              }
              return 0;
            }
            function W2(e, t, i) {
              for (
                var c = -1,
                  b = e.criteria,
                  y = t.criteria,
                  B = b.length,
                  F = i.length;
                ++c < B;

              ) {
                var N = hc(b[c], y[c]);
                if (N) {
                  if (c >= F) return N;
                  var K = i[c];
                  return N * (K == "desc" ? -1 : 1);
                }
              }
              return e.index - t.index;
            }
            function pc(e, t, i, c) {
              for (
                var b = -1,
                  y = e.length,
                  B = i.length,
                  F = -1,
                  N = t.length,
                  K = Ct(y - B, 0),
                  Y = _(N + K),
                  Z = !c;
                ++F < N;

              )
                Y[F] = t[F];
              for (; ++b < B; ) (Z || b < y) && (Y[i[b]] = e[b]);
              for (; K--; ) Y[F++] = e[b++];
              return Y;
            }
            function gc(e, t, i, c) {
              for (
                var b = -1,
                  y = e.length,
                  B = -1,
                  F = i.length,
                  N = -1,
                  K = t.length,
                  Y = Ct(y - F, 0),
                  Z = _(Y + K),
                  ne = !c;
                ++b < Y;

              )
                Z[b] = e[b];
              for (var he = b; ++N < K; ) Z[he + N] = t[N];
              for (; ++B < F; ) (ne || b < y) && (Z[he + i[B]] = e[b++]);
              return Z;
            }
            function Mr(e, t) {
              var i = -1,
                c = e.length;
              for (t || (t = _(c)); ++i < c; ) t[i] = e[i];
              return t;
            }
            function Vn(e, t, i, c) {
              var b = !i;
              i || (i = {});
              for (var y = -1, B = t.length; ++y < B; ) {
                var F = t[y],
                  N = c ? c(i[F], e[F], F, i, e) : a;
                N === a && (N = e[F]), b ? ti(i, F, N) : Ca(i, F, N);
              }
              return i;
            }
            function z2(e, t) {
              return Vn(e, Ds(e), t);
            }
            function j2(e, t) {
              return Vn(e, Bc(e), t);
            }
            function lo(e, t) {
              return function (i, c) {
                var b = Re(i) ? k : p2,
                  y = t ? t() : {};
                return b(i, e, be(c, 2), y);
              };
            }
            function ea(e) {
              return Ge(function (t, i) {
                var c = -1,
                  b = i.length,
                  y = b > 1 ? i[b - 1] : a,
                  B = b > 2 ? i[2] : a;
                for (
                  y = e.length > 3 && typeof y == "function" ? (b--, y) : a,
                    B && Tr(i[0], i[1], B) && ((y = b < 3 ? a : y), (b = 1)),
                    t = re(t);
                  ++c < b;

                ) {
                  var F = i[c];
                  F && e(t, F, c, y);
                }
                return t;
              });
            }
            function mc(e, t) {
              return function (i, c) {
                if (i == null) return i;
                if (!Or(i)) return e(i, c);
                for (
                  var b = i.length, y = t ? b : -1, B = re(i);
                  (t ? y-- : ++y < b) && c(B[y], y, B) !== !1;

                );
                return i;
              };
            }
            function vc(e) {
              return function (t, i, c) {
                for (var b = -1, y = re(t), B = c(t), F = B.length; F--; ) {
                  var N = B[e ? F : ++b];
                  if (i(y[N], N, y) === !1) break;
                }
                return t;
              };
            }
            function K2(e, t, i) {
              var c = t & at,
                b = ka(e);
              function y() {
                var B = this && this !== ht && this instanceof y ? b : e;
                return B.apply(c ? i : this, arguments);
              }
              return y;
            }
            function bc(e) {
              return function (t) {
                t = it(t);
                var i = nr(t) ? ir(t) : a,
                  c = i ? i[0] : t.charAt(0),
                  b = i ? Hi(i, 1).join("") : t.slice(1);
                return c[e]() + b;
              };
            }
            function ta(e) {
              return function (t) {
                return we(vf(mf(t).replace(iu, "")), e, "");
              };
            }
            function ka(e) {
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(t[0]);
                  case 2:
                    return new e(t[0], t[1]);
                  case 3:
                    return new e(t[0], t[1], t[2]);
                  case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                  case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                  case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                  case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                }
                var i = l(e.prototype),
                  c = e.apply(i, t);
                return bt(c) ? c : i;
              };
            }
            function Y2(e, t, i) {
              var c = ka(e);
              function b() {
                for (
                  var y = arguments.length, B = _(y), F = y, N = ra(b);
                  F--;

                )
                  B[F] = arguments[F];
                var K = y < 3 && B[0] !== N && B[y - 1] !== N ? [] : mr(B, N);
                if (((y -= K.length), y < i))
                  return xc(e, t, co, b.placeholder, a, B, K, a, a, i - y);
                var Y = this && this !== ht && this instanceof b ? c : e;
                return w(Y, this, B);
              }
              return b;
            }
            function wc(e) {
              return function (t, i, c) {
                var b = re(t);
                if (!Or(t)) {
                  var y = be(i, 3);
                  (t = Yt(t)),
                    (i = function (F) {
                      return y(b[F], F, b);
                    });
                }
                var B = e(t, i, c);
                return B > -1 ? b[y ? t[B] : B] : a;
              };
            }
            function Ac(e) {
              return ni(function (t) {
                var i = t.length,
                  c = i,
                  b = T.prototype.thru;
                for (e && t.reverse(); c--; ) {
                  var y = t[c];
                  if (typeof y != "function") throw new Ne(R);
                  if (b && !B && go(y) == "wrapper") var B = new T([], !0);
                }
                for (c = B ? c : i; ++c < i; ) {
                  y = t[c];
                  var F = go(y),
                    N = F == "wrapper" ? As(y) : a;
                  N &&
                  Cs(N[0]) &&
                  N[1] == (d | Tt | kt | le) &&
                  !N[4].length &&
                  N[9] == 1
                    ? (B = B[go(N[0])].apply(B, N[3]))
                    : (B = y.length == 1 && Cs(y) ? B[F]() : B.thru(y));
                }
                return function () {
                  var K = arguments,
                    Y = K[0];
                  if (B && K.length == 1 && Re(Y)) return B.plant(Y).value();
                  for (var Z = 0, ne = i ? t[Z].apply(this, K) : Y; ++Z < i; )
                    ne = t[Z].call(this, ne);
                  return ne;
                };
              });
            }
            function co(e, t, i, c, b, y, B, F, N, K) {
              var Y = t & d,
                Z = t & at,
                ne = t & pe,
                he = t & (Tt | Bt),
                Ae = t & X,
                Ue = ne ? a : ka(e);
              function ye() {
                for (var je = arguments.length, $e = _(je), tn = je; tn--; )
                  $e[tn] = arguments[tn];
                if (he)
                  var Br = ra(ye),
                    rn = gr($e, Br);
                if (
                  (c && ($e = pc($e, c, b, he)),
                  y && ($e = gc($e, y, B, he)),
                  (je -= rn),
                  he && je < K)
                ) {
                  var St = mr($e, Br);
                  return xc(e, t, co, ye.placeholder, i, $e, St, F, N, K - je);
                }
                var _n = Z ? i : this,
                  oi = ne ? _n[e] : e;
                return (
                  (je = $e.length),
                  F ? ($e = ph($e, F)) : Ae && je > 1 && $e.reverse(),
                  Y && N < je && ($e.length = N),
                  this &&
                    this !== ht &&
                    this instanceof ye &&
                    (oi = Ue || ka(oi)),
                  oi.apply(_n, $e)
                );
              }
              return ye;
            }
            function yc(e, t) {
              return function (i, c) {
                return D2(i, e, t(c), {});
              };
            }
            function fo(e, t) {
              return function (i, c) {
                var b;
                if (i === a && c === a) return t;
                if ((i !== a && (b = i), c !== a)) {
                  if (b === a) return c;
                  typeof i == "string" || typeof c == "string"
                    ? ((i = Qr(i)), (c = Qr(c)))
                    : ((i = ac(i)), (c = ac(c))),
                    (b = e(i, c));
                }
                return b;
              };
            }
            function ms(e) {
              return ni(function (t) {
                return (
                  (t = ue(t, rr(be()))),
                  Ge(function (i) {
                    var c = this;
                    return e(t, function (b) {
                      return w(b, c, i);
                    });
                  })
                );
              });
            }
            function ho(e, t) {
              t = t === a ? " " : Qr(t);
              var i = t.length;
              if (i < 2) return i ? ls(t, e) : t;
              var c = ls(t, Ju(e / dn(t)));
              return nr(t) ? Hi(ir(c), 0, e).join("") : c.slice(0, e);
            }
            function $2(e, t, i, c) {
              var b = t & at,
                y = ka(e);
              function B() {
                for (
                  var F = -1,
                    N = arguments.length,
                    K = -1,
                    Y = c.length,
                    Z = _(Y + N),
                    ne = this && this !== ht && this instanceof B ? y : e;
                  ++K < Y;

                )
                  Z[K] = c[K];
                for (; N--; ) Z[K++] = arguments[++F];
                return w(ne, b ? i : this, Z);
              }
              return B;
            }
            function Dc(e) {
              return function (t, i, c) {
                return (
                  c && typeof c != "number" && Tr(t, i, c) && (i = c = a),
                  (t = ai(t)),
                  i === a ? ((i = t), (t = 0)) : (i = ai(i)),
                  (c = c === a ? (t < i ? 1 : -1) : ai(c)),
                  I2(t, i, c, e)
                );
              };
            }
            function po(e) {
              return function (t, i) {
                return (
                  (typeof t == "string" && typeof i == "string") ||
                    ((t = mn(t)), (i = mn(i))),
                  e(t, i)
                );
              };
            }
            function xc(e, t, i, c, b, y, B, F, N, K) {
              var Y = t & Tt,
                Z = Y ? B : a,
                ne = Y ? a : B,
                he = Y ? y : a,
                Ae = Y ? a : y;
              (t |= Y ? kt : Lr),
                (t &= ~(Y ? Lr : kt)),
                t & _r || (t &= ~(at | pe));
              var Ue = [e, t, b, he, Z, Ae, ne, F, N, K],
                ye = i.apply(a, Ue);
              return Cs(e) && Pc(ye, Ue), (ye.placeholder = c), Nc(ye, e, t);
            }
            function vs(e) {
              var t = oe[e];
              return function (i, c) {
                if (
                  ((i = mn(i)),
                  (c = c == null ? 0 : Kt(Me(c), 292)),
                  c && On(i))
                ) {
                  var b = (it(i) + "e").split("e"),
                    y = t(b[0] + "e" + (+b[1] + c));
                  return (
                    (b = (it(y) + "e").split("e")), +(b[0] + "e" + (+b[1] - c))
                  );
                }
                return t(i);
              };
            }
            var Z2 =
              Tn && 1 / fn(new Tn([, -0]))[1] == _e
                ? function (e) {
                    return new Tn(e);
                  }
                : Os;
            function Cc(e) {
              return function (t) {
                var i = vr(t);
                return i == Mt ? Jn(t) : i == st ? Fi(t) : pr(t, e(t));
              };
            }
            function ri(e, t, i, c, b, y, B, F) {
              var N = t & pe;
              if (!N && typeof e != "function") throw new Ne(R);
              var K = c ? c.length : 0;
              if (
                (K || ((t &= ~(kt | Lr)), (c = b = a)),
                (B = B === a ? B : Ct(Me(B), 0)),
                (F = F === a ? F : Me(F)),
                (K -= b ? b.length : 0),
                t & Lr)
              ) {
                var Y = c,
                  Z = b;
                c = b = a;
              }
              var ne = N ? a : As(e),
                he = [e, t, i, c, b, Y, Z, y, B, F];
              if (
                (ne && fh(he, ne),
                (e = he[0]),
                (t = he[1]),
                (i = he[2]),
                (c = he[3]),
                (b = he[4]),
                (F = he[9] =
                  he[9] === a ? (N ? 0 : e.length) : Ct(he[9] - K, 0)),
                !F && t & (Tt | Bt) && (t &= ~(Tt | Bt)),
                !t || t == at)
              )
                var Ae = K2(e, t, i);
              else
                t == Tt || t == Bt
                  ? (Ae = Y2(e, t, F))
                  : (t == kt || t == (at | kt)) && !b.length
                  ? (Ae = $2(e, t, i, c))
                  : (Ae = co.apply(a, he));
              var Ue = ne ? ic : Pc;
              return Nc(Ue(Ae, he), e, t);
            }
            function Ec(e, t, i, c) {
              return e === a || (kn(e, xt[i]) && !xe.call(c, i)) ? t : e;
            }
            function Sc(e, t, i, c, b, y) {
              return (
                bt(e) &&
                  bt(t) &&
                  (y.set(t, e), ao(e, t, a, Sc, y), y.delete(t)),
                e
              );
            }
            function J2(e) {
              return Fa(e) ? a : e;
            }
            function Tc(e, t, i, c, b, y) {
              var B = i & de,
                F = e.length,
                N = t.length;
              if (F != N && !(B && N > F)) return !1;
              var K = y.get(e),
                Y = y.get(t);
              if (K && Y) return K == t && Y == e;
              var Z = -1,
                ne = !0,
                he = i & se ? new pu() : a;
              for (y.set(e, t), y.set(t, e); ++Z < F; ) {
                var Ae = e[Z],
                  Ue = t[Z];
                if (c)
                  var ye = B ? c(Ue, Ae, Z, t, e, y) : c(Ae, Ue, Z, e, t, y);
                if (ye !== a) {
                  if (ye) continue;
                  ne = !1;
                  break;
                }
                if (he) {
                  if (
                    !pt(t, function (je, $e) {
                      if (!qn(he, $e) && (Ae === je || b(Ae, je, i, c, y)))
                        return he.push($e);
                    })
                  ) {
                    ne = !1;
                    break;
                  }
                } else if (!(Ae === Ue || b(Ae, Ue, i, c, y))) {
                  ne = !1;
                  break;
                }
              }
              return y.delete(e), y.delete(t), ne;
            }
            function X2(e, t, i, c, b, y, B) {
              switch (i) {
                case on:
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    return !1;
                  (e = e.buffer), (t = t.buffer);
                case Rn:
                  return !(
                    e.byteLength != t.byteLength || !y(new Yu(e), new Yu(t))
                  );
                case Ar:
                case sr:
                case Jt:
                  return kn(+e, +t);
                case Nt:
                  return e.name == t.name && e.message == t.message;
                case Vr:
                case Ee:
                  return e == t + "";
                case Mt:
                  var F = Jn;
                case st:
                  var N = c & de;
                  if ((F || (F = fn), e.size != t.size && !N)) return !1;
                  var K = B.get(e);
                  if (K) return K == t;
                  (c |= se), B.set(e, t);
                  var Y = Tc(F(e), F(t), c, b, y, B);
                  return B.delete(e), Y;
                case cr:
                  if (Hn) return Hn.call(e) == Hn.call(t);
              }
              return !1;
            }
            function Q2(e, t, i, c, b, y) {
              var B = i & de,
                F = bs(e),
                N = F.length,
                K = bs(t),
                Y = K.length;
              if (N != Y && !B) return !1;
              for (var Z = N; Z--; ) {
                var ne = F[Z];
                if (!(B ? ne in t : xe.call(t, ne))) return !1;
              }
              var he = y.get(e),
                Ae = y.get(t);
              if (he && Ae) return he == t && Ae == e;
              var Ue = !0;
              y.set(e, t), y.set(t, e);
              for (var ye = B; ++Z < N; ) {
                ne = F[Z];
                var je = e[ne],
                  $e = t[ne];
                if (c)
                  var tn = B ? c($e, je, ne, t, e, y) : c(je, $e, ne, e, t, y);
                if (!(tn === a ? je === $e || b(je, $e, i, c, y) : tn)) {
                  Ue = !1;
                  break;
                }
                ye || (ye = ne == "constructor");
              }
              if (Ue && !ye) {
                var Br = e.constructor,
                  rn = t.constructor;
                Br != rn &&
                  "constructor" in e &&
                  "constructor" in t &&
                  !(
                    typeof Br == "function" &&
                    Br instanceof Br &&
                    typeof rn == "function" &&
                    rn instanceof rn
                  ) &&
                  (Ue = !1);
              }
              return y.delete(e), y.delete(t), Ue;
            }
            function ni(e) {
              return Ss(Rc(e, a, Vc), e + "");
            }
            function bs(e) {
              return Kl(e, Yt, Ds);
            }
            function ws(e) {
              return Kl(e, Hr, Bc);
            }
            var As = Qu
              ? function (e) {
                  return Qu.get(e);
                }
              : Os;
            function go(e) {
              for (
                var t = e.name + "",
                  i = Ni[t],
                  c = xe.call(Ni, t) ? i.length : 0;
                c--;

              ) {
                var b = i[c],
                  y = b.func;
                if (y == null || y == e) return b.name;
              }
              return t;
            }
            function ra(e) {
              var t = xe.call(n, "placeholder") ? n : e;
              return t.placeholder;
            }
            function be() {
              var e = n.iteratee || qs;
              return (
                (e = e === qs ? Zl : e),
                arguments.length ? e(arguments[0], arguments[1]) : e
              );
            }
            function mo(e, t) {
              var i = e.__data__;
              return oh(t)
                ? i[typeof t == "string" ? "string" : "hash"]
                : i.map;
            }
            function ys(e) {
              for (var t = Yt(e), i = t.length; i--; ) {
                var c = t[i],
                  b = e[c];
                t[i] = [c, b, Lc(b)];
              }
              return t;
            }
            function vu(e, t) {
              var i = Gu(e, t);
              return $l(i) ? i : a;
            }
            function eh(e) {
              var t = xe.call(e, Xn),
                i = e[Xn];
              try {
                e[Xn] = a;
                var c = !0;
              } catch {}
              var b = ju.call(e);
              return c && (t ? (e[Xn] = i) : delete e[Xn]), b;
            }
            var Ds = ya
                ? function (e) {
                    return e == null
                      ? []
                      : ((e = re(e)),
                        W(ya(e), function (t) {
                          return Qa.call(e, t);
                        }));
                  }
                : Hs,
              Bc = ya
                ? function (e) {
                    for (var t = []; e; ) Se(t, Ds(e)), (e = Ii(e));
                    return t;
                  }
                : Hs,
              vr = Sr;
            ((xa && vr(new xa(new ArrayBuffer(1))) != on) ||
              (cu && vr(new cu()) != Mt) ||
              (qr && vr(qr.resolve()) != lr) ||
              (Tn && vr(new Tn()) != st) ||
              (lt && vr(new lt()) != fe)) &&
              (vr = function (e) {
                var t = Sr(e),
                  i = t == Lt ? e.constructor : a,
                  c = i ? bu(i) : "";
                if (c)
                  switch (c) {
                    case Yo:
                      return on;
                    case $o:
                      return Mt;
                    case Zo:
                      return lr;
                    case Jo:
                      return st;
                    case ro:
                      return fe;
                  }
                return t;
              });
            function th(e, t, i) {
              for (var c = -1, b = i.length; ++c < b; ) {
                var y = i[c],
                  B = y.size;
                switch (y.type) {
                  case "drop":
                    e += B;
                    break;
                  case "dropRight":
                    t -= B;
                    break;
                  case "take":
                    t = Kt(t, e + B);
                    break;
                  case "takeRight":
                    e = Ct(e, t - B);
                    break;
                }
              }
              return { start: e, end: t };
            }
            function rh(e) {
              var t = e.match(Rt);
              return t ? t[1].split(Ki) : [];
            }
            function kc(e, t, i) {
              t = Oi(t, e);
              for (var c = -1, b = t.length, y = !1; ++c < b; ) {
                var B = Gn(t[c]);
                if (!(y = e != null && i(e, B))) break;
                e = e[B];
              }
              return y || ++c != b
                ? y
                : ((b = e == null ? 0 : e.length),
                  !!b && xo(b) && ii(B, b) && (Re(e) || wu(e)));
            }
            function nh(e) {
              var t = e.length,
                i = new e.constructor(t);
              return (
                t &&
                  typeof e[0] == "string" &&
                  xe.call(e, "index") &&
                  ((i.index = e.index), (i.input = e.input)),
                i
              );
            }
            function _c(e) {
              return typeof e.constructor == "function" && !_a(e)
                ? l(Ii(e))
                : {};
            }
            function ih(e, t, i) {
              var c = e.constructor;
              switch (t) {
                case Rn:
                  return gs(e);
                case Ar:
                case sr:
                  return new c(+e);
                case on:
                  return U2(e, i);
                case In:
                case Xt:
                case Gr:
                case Qt:
                case yr:
                case Wt:
                case fr:
                case hi:
                case Wr:
                  return dc(e, i);
                case Mt:
                  return new c();
                case Jt:
                case Ee:
                  return new c(e);
                case Vr:
                  return V2(e);
                case st:
                  return new c();
                case cr:
                  return G2(e);
              }
            }
            function uh(e, t) {
              var i = t.length;
              if (!i) return e;
              var c = i - 1;
              return (
                (t[c] = (i > 1 ? "& " : "") + t[c]),
                (t = t.join(i > 2 ? ", " : " ")),
                e.replace(
                  At,
                  `{
/* [wrapped with ` +
                    t +
                    `] */
`
                )
              );
            }
            function ah(e) {
              return Re(e) || wu(e) || !!(eo && e && e[eo]);
            }
            function ii(e, t) {
              var i = typeof e;
              return (
                (t = t ?? ft),
                !!t &&
                  (i == "number" || (i != "symbol" && bi.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
              );
            }
            function Tr(e, t, i) {
              if (!bt(i)) return !1;
              var c = typeof t;
              return (
                c == "number"
                  ? Or(i) && ii(t, i.length)
                  : c == "string" && t in i
              )
                ? kn(i[t], e)
                : !1;
            }
            function xs(e, t) {
              if (Re(e)) return !1;
              var i = typeof e;
              return i == "number" ||
                i == "symbol" ||
                i == "boolean" ||
                e == null ||
                en(e)
                ? !0
                : zi.test(e) || !gi.test(e) || (t != null && e in re(t));
            }
            function oh(e) {
              var t = typeof e;
              return t == "string" ||
                t == "number" ||
                t == "symbol" ||
                t == "boolean"
                ? e !== "__proto__"
                : e === null;
            }
            function Cs(e) {
              var t = go(e),
                i = n[t];
              if (typeof i != "function" || !(t in q.prototype)) return !1;
              if (e === i) return !0;
              var c = As(i);
              return !!c && e === c[0];
            }
            function sh(e) {
              return !!$a && $a in e;
            }
            var lh = ur ? ui : Us;
            function _a(e) {
              var t = e && e.constructor,
                i = (typeof t == "function" && t.prototype) || xt;
              return e === i;
            }
            function Lc(e) {
              return e === e && !bt(e);
            }
            function Fc(e, t) {
              return function (i) {
                return i == null ? !1 : i[e] === t && (t !== a || e in re(i));
              };
            }
            function ch(e) {
              var t = yo(e, function (c) {
                  return i.size === ee && i.clear(), c;
                }),
                i = t.cache;
              return t;
            }
            function fh(e, t) {
              var i = e[1],
                c = t[1],
                b = i | c,
                y = b < (at | pe | d),
                B =
                  (c == d && i == Tt) ||
                  (c == d && i == le && e[7].length <= t[8]) ||
                  (c == (d | le) && t[7].length <= t[8] && i == Tt);
              if (!(y || B)) return e;
              c & at && ((e[2] = t[2]), (b |= i & at ? 0 : _r));
              var F = t[3];
              if (F) {
                var N = e[3];
                (e[3] = N ? pc(N, F, t[4]) : F),
                  (e[4] = N ? mr(e[3], De) : t[4]);
              }
              return (
                (F = t[5]),
                F &&
                  ((N = e[5]),
                  (e[5] = N ? gc(N, F, t[6]) : F),
                  (e[6] = N ? mr(e[5], De) : t[6])),
                (F = t[7]),
                F && (e[7] = F),
                c & d && (e[8] = e[8] == null ? t[8] : Kt(e[8], t[8])),
                e[9] == null && (e[9] = t[9]),
                (e[0] = t[0]),
                (e[1] = b),
                e
              );
            }
            function dh(e) {
              var t = [];
              if (e != null) for (var i in re(e)) t.push(i);
              return t;
            }
            function hh(e) {
              return ju.call(e);
            }
            function Rc(e, t, i) {
              return (
                (t = Ct(t === a ? e.length - 1 : t, 0)),
                function () {
                  for (
                    var c = arguments,
                      b = -1,
                      y = Ct(c.length - t, 0),
                      B = _(y);
                    ++b < y;

                  )
                    B[b] = c[t + b];
                  b = -1;
                  for (var F = _(t + 1); ++b < t; ) F[b] = c[b];
                  return (F[t] = i(B)), w(e, this, F);
                }
              );
            }
            function Ic(e, t) {
              return t.length < 2 ? e : mu(e, pn(t, 0, -1));
            }
            function ph(e, t) {
              for (var i = e.length, c = Kt(t.length, i), b = Mr(e); c--; ) {
                var y = t[c];
                e[c] = ii(y, i) ? b[y] : a;
              }
              return e;
            }
            function Es(e, t) {
              if (
                !(t === "constructor" && typeof e[t] == "function") &&
                t != "__proto__"
              )
                return e[t];
            }
            var Pc = qc(ic),
              La =
                Vo ||
                function (e, t) {
                  return ht.setTimeout(e, t);
                },
              Ss = qc(q2);
            function Nc(e, t, i) {
              var c = t + "";
              return Ss(e, uh(c, gh(rh(c), i)));
            }
            function qc(e) {
              var t = 0,
                i = 0;
              return function () {
                var c = zo(),
                  b = me - (c - i);
                if (((i = c), b > 0)) {
                  if (++t >= ct) return arguments[0];
                } else t = 0;
                return e.apply(a, arguments);
              };
            }
            function vo(e, t) {
              var i = -1,
                c = e.length,
                b = c - 1;
              for (t = t === a ? c : t; ++i < t; ) {
                var y = ss(i, b),
                  B = e[y];
                (e[y] = e[i]), (e[i] = B);
              }
              return (e.length = t), e;
            }
            var Mc = ch(function (e) {
              var t = [];
              return (
                e.charCodeAt(0) === 46 && t.push(""),
                e.replace(ji, function (i, c, b, y) {
                  t.push(b ? y.replace(er, "$1") : c || i);
                }),
                t
              );
            });
            function Gn(e) {
              if (typeof e == "string" || en(e)) return e;
              var t = e + "";
              return t == "0" && 1 / e == -_e ? "-0" : t;
            }
            function bu(e) {
              if (e != null) {
                try {
                  return Xr.call(e);
                } catch {}
                try {
                  return e + "";
                } catch {}
              }
              return "";
            }
            function gh(e, t) {
              return (
                E(un, function (i) {
                  var c = "_." + i[0];
                  t & i[1] && !O(e, c) && e.push(c);
                }),
                e.sort()
              );
            }
            function Oc(e) {
              if (e instanceof q) return e.clone();
              var t = new T(e.__wrapped__, e.__chain__);
              return (
                (t.__actions__ = Mr(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
              );
            }
            function mh(e, t, i) {
              (i ? Tr(e, t, i) : t === a) ? (t = 1) : (t = Ct(Me(t), 0));
              var c = e == null ? 0 : e.length;
              if (!c || t < 1) return [];
              for (var b = 0, y = 0, B = _(Ju(c / t)); b < c; )
                B[y++] = pn(e, b, (b += t));
              return B;
            }
            function vh(e) {
              for (
                var t = -1, i = e == null ? 0 : e.length, c = 0, b = [];
                ++t < i;

              ) {
                var y = e[t];
                y && (b[c++] = y);
              }
              return b;
            }
            function bh() {
              var e = arguments.length;
              if (!e) return [];
              for (var t = _(e - 1), i = arguments[0], c = e; c--; )
                t[c - 1] = arguments[c];
              return Se(Re(i) ? Mr(i) : [i], ar(t, 1));
            }
            var wh = Ge(function (e, t) {
                return Et(e) ? Ea(e, ar(t, 1, Et, !0)) : [];
              }),
              Ah = Ge(function (e, t) {
                var i = gn(t);
                return (
                  Et(i) && (i = a),
                  Et(e) ? Ea(e, ar(t, 1, Et, !0), be(i, 2)) : []
                );
              }),
              yh = Ge(function (e, t) {
                var i = gn(t);
                return (
                  Et(i) && (i = a), Et(e) ? Ea(e, ar(t, 1, Et, !0), a, i) : []
                );
              });
            function Dh(e, t, i) {
              var c = e == null ? 0 : e.length;
              return c
                ? ((t = i || t === a ? 1 : Me(t)), pn(e, t < 0 ? 0 : t, c))
                : [];
            }
            function xh(e, t, i) {
              var c = e == null ? 0 : e.length;
              return c
                ? ((t = i || t === a ? 1 : Me(t)),
                  (t = c - t),
                  pn(e, 0, t < 0 ? 0 : t))
                : [];
            }
            function Ch(e, t) {
              return e && e.length ? so(e, be(t, 3), !0, !0) : [];
            }
            function Eh(e, t) {
              return e && e.length ? so(e, be(t, 3), !0) : [];
            }
            function Sh(e, t, i, c) {
              var b = e == null ? 0 : e.length;
              return b
                ? (i &&
                    typeof i != "number" &&
                    Tr(e, t, i) &&
                    ((i = 0), (c = b)),
                  b2(e, t, i, c))
                : [];
            }
            function Hc(e, t, i) {
              var c = e == null ? 0 : e.length;
              if (!c) return -1;
              var b = i == null ? 0 : Me(i);
              return b < 0 && (b = Ct(c + b, 0)), He(e, be(t, 3), b);
            }
            function Uc(e, t, i) {
              var c = e == null ? 0 : e.length;
              if (!c) return -1;
              var b = c - 1;
              return (
                i !== a &&
                  ((b = Me(i)), (b = i < 0 ? Ct(c + b, 0) : Kt(b, c - 1))),
                He(e, be(t, 3), b, !0)
              );
            }
            function Vc(e) {
              var t = e == null ? 0 : e.length;
              return t ? ar(e, 1) : [];
            }
            function Th(e) {
              var t = e == null ? 0 : e.length;
              return t ? ar(e, _e) : [];
            }
            function Bh(e, t) {
              var i = e == null ? 0 : e.length;
              return i ? ((t = t === a ? 1 : Me(t)), ar(e, t)) : [];
            }
            function kh(e) {
              for (
                var t = -1, i = e == null ? 0 : e.length, c = {};
                ++t < i;

              ) {
                var b = e[t];
                c[b[0]] = b[1];
              }
              return c;
            }
            function Gc(e) {
              return e && e.length ? e[0] : a;
            }
            function _h(e, t, i) {
              var c = e == null ? 0 : e.length;
              if (!c) return -1;
              var b = i == null ? 0 : Me(i);
              return b < 0 && (b = Ct(c + b, 0)), et(e, t, b);
            }
            function Lh(e) {
              var t = e == null ? 0 : e.length;
              return t ? pn(e, 0, -1) : [];
            }
            var Fh = Ge(function (e) {
                var t = ue(e, hs);
                return t.length && t[0] === e[0] ? ns(t) : [];
              }),
              Rh = Ge(function (e) {
                var t = gn(e),
                  i = ue(e, hs);
                return (
                  t === gn(i) ? (t = a) : i.pop(),
                  i.length && i[0] === e[0] ? ns(i, be(t, 2)) : []
                );
              }),
              Ih = Ge(function (e) {
                var t = gn(e),
                  i = ue(e, hs);
                return (
                  (t = typeof t == "function" ? t : a),
                  t && i.pop(),
                  i.length && i[0] === e[0] ? ns(i, a, t) : []
                );
              });
            function Ph(e, t) {
              return e == null ? "" : to.call(e, t);
            }
            function gn(e) {
              var t = e == null ? 0 : e.length;
              return t ? e[t - 1] : a;
            }
            function Nh(e, t, i) {
              var c = e == null ? 0 : e.length;
              if (!c) return -1;
              var b = c;
              return (
                i !== a &&
                  ((b = Me(i)), (b = b < 0 ? Ct(c + b, 0) : Kt(b, c - 1))),
                t === t ? Jr(e, t, b) : He(e, ki, b, !0)
              );
            }
            function qh(e, t) {
              return e && e.length ? ec(e, Me(t)) : a;
            }
            var Mh = Ge(Wc);
            function Wc(e, t) {
              return e && e.length && t && t.length ? os(e, t) : e;
            }
            function Oh(e, t, i) {
              return e && e.length && t && t.length ? os(e, t, be(i, 2)) : e;
            }
            function Hh(e, t, i) {
              return e && e.length && t && t.length ? os(e, t, a, i) : e;
            }
            var Uh = ni(function (e, t) {
              var i = e == null ? 0 : e.length,
                c = Qo(e, t);
              return (
                nc(
                  e,
                  ue(t, function (b) {
                    return ii(b, i) ? +b : b;
                  }).sort(hc)
                ),
                c
              );
            });
            function Vh(e, t) {
              var i = [];
              if (!(e && e.length)) return i;
              var c = -1,
                b = [],
                y = e.length;
              for (t = be(t, 3); ++c < y; ) {
                var B = e[c];
                t(B, c, e) && (i.push(B), b.push(c));
              }
              return nc(e, b), i;
            }
            function Ts(e) {
              return e == null ? e : Ko.call(e);
            }
            function Gh(e, t, i) {
              var c = e == null ? 0 : e.length;
              return c
                ? (i && typeof i != "number" && Tr(e, t, i)
                    ? ((t = 0), (i = c))
                    : ((t = t == null ? 0 : Me(t)), (i = i === a ? c : Me(i))),
                  pn(e, t, i))
                : [];
            }
            function Wh(e, t) {
              return oo(e, t);
            }
            function zh(e, t, i) {
              return cs(e, t, be(i, 2));
            }
            function jh(e, t) {
              var i = e == null ? 0 : e.length;
              if (i) {
                var c = oo(e, t);
                if (c < i && kn(e[c], t)) return c;
              }
              return -1;
            }
            function Kh(e, t) {
              return oo(e, t, !0);
            }
            function Yh(e, t, i) {
              return cs(e, t, be(i, 2), !0);
            }
            function $h(e, t) {
              var i = e == null ? 0 : e.length;
              if (i) {
                var c = oo(e, t, !0) - 1;
                if (kn(e[c], t)) return c;
              }
              return -1;
            }
            function Zh(e) {
              return e && e.length ? uc(e) : [];
            }
            function Jh(e, t) {
              return e && e.length ? uc(e, be(t, 2)) : [];
            }
            function Xh(e) {
              var t = e == null ? 0 : e.length;
              return t ? pn(e, 1, t) : [];
            }
            function Qh(e, t, i) {
              return e && e.length
                ? ((t = i || t === a ? 1 : Me(t)), pn(e, 0, t < 0 ? 0 : t))
                : [];
            }
            function ep(e, t, i) {
              var c = e == null ? 0 : e.length;
              return c
                ? ((t = i || t === a ? 1 : Me(t)),
                  (t = c - t),
                  pn(e, t < 0 ? 0 : t, c))
                : [];
            }
            function tp(e, t) {
              return e && e.length ? so(e, be(t, 3), !1, !0) : [];
            }
            function rp(e, t) {
              return e && e.length ? so(e, be(t, 3)) : [];
            }
            var np = Ge(function (e) {
                return Mi(ar(e, 1, Et, !0));
              }),
              ip = Ge(function (e) {
                var t = gn(e);
                return Et(t) && (t = a), Mi(ar(e, 1, Et, !0), be(t, 2));
              }),
              up = Ge(function (e) {
                var t = gn(e);
                return (
                  (t = typeof t == "function" ? t : a),
                  Mi(ar(e, 1, Et, !0), a, t)
                );
              });
            function ap(e) {
              return e && e.length ? Mi(e) : [];
            }
            function op(e, t) {
              return e && e.length ? Mi(e, be(t, 2)) : [];
            }
            function sp(e, t) {
              return (
                (t = typeof t == "function" ? t : a),
                e && e.length ? Mi(e, a, t) : []
              );
            }
            function Bs(e) {
              if (!(e && e.length)) return [];
              var t = 0;
              return (
                (e = W(e, function (i) {
                  if (Et(i)) return (t = Ct(i.length, t)), !0;
                })),
                Nn(t, function (i) {
                  return ue(e, xn(i));
                })
              );
            }
            function zc(e, t) {
              if (!(e && e.length)) return [];
              var i = Bs(e);
              return t == null
                ? i
                : ue(i, function (c) {
                    return w(t, a, c);
                  });
            }
            var lp = Ge(function (e, t) {
                return Et(e) ? Ea(e, t) : [];
              }),
              cp = Ge(function (e) {
                return ds(W(e, Et));
              }),
              fp = Ge(function (e) {
                var t = gn(e);
                return Et(t) && (t = a), ds(W(e, Et), be(t, 2));
              }),
              dp = Ge(function (e) {
                var t = gn(e);
                return (t = typeof t == "function" ? t : a), ds(W(e, Et), a, t);
              }),
              hp = Ge(Bs);
            function pp(e, t) {
              return lc(e || [], t || [], Ca);
            }
            function gp(e, t) {
              return lc(e || [], t || [], Ba);
            }
            var mp = Ge(function (e) {
              var t = e.length,
                i = t > 1 ? e[t - 1] : a;
              return (i = typeof i == "function" ? (e.pop(), i) : a), zc(e, i);
            });
            function jc(e) {
              var t = n(e);
              return (t.__chain__ = !0), t;
            }
            function vp(e, t) {
              return t(e), e;
            }
            function bo(e, t) {
              return t(e);
            }
            var bp = ni(function (e) {
              var t = e.length,
                i = t ? e[0] : 0,
                c = this.__wrapped__,
                b = function (y) {
                  return Qo(y, e);
                };
              return t > 1 ||
                this.__actions__.length ||
                !(c instanceof q) ||
                !ii(i)
                ? this.thru(b)
                : ((c = c.slice(i, +i + (t ? 1 : 0))),
                  c.__actions__.push({ func: bo, args: [b], thisArg: a }),
                  new T(c, this.__chain__).thru(function (y) {
                    return t && !y.length && y.push(a), y;
                  }));
            });
            function wp() {
              return jc(this);
            }
            function Ap() {
              return new T(this.value(), this.__chain__);
            }
            function yp() {
              this.__values__ === a && (this.__values__ = of(this.value()));
              var e = this.__index__ >= this.__values__.length,
                t = e ? a : this.__values__[this.__index__++];
              return { done: e, value: t };
            }
            function Dp() {
              return this;
            }
            function xp(e) {
              for (var t, i = this; i instanceof h; ) {
                var c = Oc(i);
                (c.__index__ = 0),
                  (c.__values__ = a),
                  t ? (b.__wrapped__ = c) : (t = c);
                var b = c;
                i = i.__wrapped__;
              }
              return (b.__wrapped__ = e), t;
            }
            function Cp() {
              var e = this.__wrapped__;
              if (e instanceof q) {
                var t = e;
                return (
                  this.__actions__.length && (t = new q(this)),
                  (t = t.reverse()),
                  t.__actions__.push({ func: bo, args: [Ts], thisArg: a }),
                  new T(t, this.__chain__)
                );
              }
              return this.thru(Ts);
            }
            function Ep() {
              return sc(this.__wrapped__, this.__actions__);
            }
            var Sp = lo(function (e, t, i) {
              xe.call(e, i) ? ++e[i] : ti(e, i, 1);
            });
            function Tp(e, t, i) {
              var c = Re(e) ? V : v2;
              return i && Tr(e, t, i) && (t = a), c(e, be(t, 3));
            }
            function Bp(e, t) {
              var i = Re(e) ? W : zl;
              return i(e, be(t, 3));
            }
            var kp = wc(Hc),
              _p = wc(Uc);
            function Lp(e, t) {
              return ar(wo(e, t), 1);
            }
            function Fp(e, t) {
              return ar(wo(e, t), _e);
            }
            function Rp(e, t, i) {
              return (i = i === a ? 1 : Me(i)), ar(wo(e, t), i);
            }
            function Kc(e, t) {
              var i = Re(e) ? E : qi;
              return i(e, be(t, 3));
            }
            function Yc(e, t) {
              var i = Re(e) ? P : Wl;
              return i(e, be(t, 3));
            }
            var Ip = lo(function (e, t, i) {
              xe.call(e, i) ? e[i].push(t) : ti(e, i, [t]);
            });
            function Pp(e, t, i, c) {
              (e = Or(e) ? e : ia(e)), (i = i && !c ? Me(i) : 0);
              var b = e.length;
              return (
                i < 0 && (i = Ct(b + i, 0)),
                Co(e) ? i <= b && e.indexOf(t, i) > -1 : !!b && et(e, t, i) > -1
              );
            }
            var Np = Ge(function (e, t, i) {
                var c = -1,
                  b = typeof t == "function",
                  y = Or(e) ? _(e.length) : [];
                return (
                  qi(e, function (B) {
                    y[++c] = b ? w(t, B, i) : Sa(B, t, i);
                  }),
                  y
                );
              }),
              qp = lo(function (e, t, i) {
                ti(e, i, t);
              });
            function wo(e, t) {
              var i = Re(e) ? ue : Jl;
              return i(e, be(t, 3));
            }
            function Mp(e, t, i, c) {
              return e == null
                ? []
                : (Re(t) || (t = t == null ? [] : [t]),
                  (i = c ? a : i),
                  Re(i) || (i = i == null ? [] : [i]),
                  tc(e, t, i));
            }
            var Op = lo(
              function (e, t, i) {
                e[i ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            );
            function Hp(e, t, i) {
              var c = Re(e) ? we : $r,
                b = arguments.length < 3;
              return c(e, be(t, 4), i, b, qi);
            }
            function Up(e, t, i) {
              var c = Re(e) ? Dt : $r,
                b = arguments.length < 3;
              return c(e, be(t, 4), i, b, Wl);
            }
            function Vp(e, t) {
              var i = Re(e) ? W : zl;
              return i(e, Do(be(t, 3)));
            }
            function Gp(e) {
              var t = Re(e) ? Hl : P2;
              return t(e);
            }
            function Wp(e, t, i) {
              (i ? Tr(e, t, i) : t === a) ? (t = 1) : (t = Me(t));
              var c = Re(e) ? d2 : N2;
              return c(e, t);
            }
            function zp(e) {
              var t = Re(e) ? h2 : M2;
              return t(e);
            }
            function jp(e) {
              if (e == null) return 0;
              if (Or(e)) return Co(e) ? dn(e) : e.length;
              var t = vr(e);
              return t == Mt || t == st ? e.size : us(e).length;
            }
            function Kp(e, t, i) {
              var c = Re(e) ? pt : O2;
              return i && Tr(e, t, i) && (t = a), c(e, be(t, 3));
            }
            var Yp = Ge(function (e, t) {
                if (e == null) return [];
                var i = t.length;
                return (
                  i > 1 && Tr(e, t[0], t[1])
                    ? (t = [])
                    : i > 2 && Tr(t[0], t[1], t[2]) && (t = [t[0]]),
                  tc(e, ar(t, 1), [])
                );
              }),
              Ao =
                Uo ||
                function () {
                  return ht.Date.now();
                };
            function $p(e, t) {
              if (typeof t != "function") throw new Ne(R);
              return (
                (e = Me(e)),
                function () {
                  if (--e < 1) return t.apply(this, arguments);
                }
              );
            }
            function $c(e, t, i) {
              return (
                (t = i ? a : t),
                (t = e && t == null ? e.length : t),
                ri(e, d, a, a, a, a, t)
              );
            }
            function Zc(e, t) {
              var i;
              if (typeof t != "function") throw new Ne(R);
              return (
                (e = Me(e)),
                function () {
                  return (
                    --e > 0 && (i = t.apply(this, arguments)),
                    e <= 1 && (t = a),
                    i
                  );
                }
              );
            }
            var ks = Ge(function (e, t, i) {
                var c = at;
                if (i.length) {
                  var b = mr(i, ra(ks));
                  c |= kt;
                }
                return ri(e, c, t, i, b);
              }),
              Jc = Ge(function (e, t, i) {
                var c = at | pe;
                if (i.length) {
                  var b = mr(i, ra(Jc));
                  c |= kt;
                }
                return ri(t, c, e, i, b);
              });
            function Xc(e, t, i) {
              t = i ? a : t;
              var c = ri(e, Tt, a, a, a, a, a, t);
              return (c.placeholder = Xc.placeholder), c;
            }
            function Qc(e, t, i) {
              t = i ? a : t;
              var c = ri(e, Bt, a, a, a, a, a, t);
              return (c.placeholder = Qc.placeholder), c;
            }
            function ef(e, t, i) {
              var c,
                b,
                y,
                B,
                F,
                N,
                K = 0,
                Y = !1,
                Z = !1,
                ne = !0;
              if (typeof e != "function") throw new Ne(R);
              (t = mn(t) || 0),
                bt(i) &&
                  ((Y = !!i.leading),
                  (Z = "maxWait" in i),
                  (y = Z ? Ct(mn(i.maxWait) || 0, t) : y),
                  (ne = "trailing" in i ? !!i.trailing : ne));
              function he(St) {
                var _n = c,
                  oi = b;
                return (c = b = a), (K = St), (B = e.apply(oi, _n)), B;
              }
              function Ae(St) {
                return (K = St), (F = La(je, t)), Y ? he(St) : B;
              }
              function Ue(St) {
                var _n = St - N,
                  oi = St - K,
                  Af = t - _n;
                return Z ? Kt(Af, y - oi) : Af;
              }
              function ye(St) {
                var _n = St - N,
                  oi = St - K;
                return N === a || _n >= t || _n < 0 || (Z && oi >= y);
              }
              function je() {
                var St = Ao();
                if (ye(St)) return $e(St);
                F = La(je, Ue(St));
              }
              function $e(St) {
                return (F = a), ne && c ? he(St) : ((c = b = a), B);
              }
              function tn() {
                F !== a && cc(F), (K = 0), (c = N = b = F = a);
              }
              function Br() {
                return F === a ? B : $e(Ao());
              }
              function rn() {
                var St = Ao(),
                  _n = ye(St);
                if (((c = arguments), (b = this), (N = St), _n)) {
                  if (F === a) return Ae(N);
                  if (Z) return cc(F), (F = La(je, t)), he(N);
                }
                return F === a && (F = La(je, t)), B;
              }
              return (rn.cancel = tn), (rn.flush = Br), rn;
            }
            var Zp = Ge(function (e, t) {
                return Gl(e, 1, t);
              }),
              Jp = Ge(function (e, t, i) {
                return Gl(e, mn(t) || 0, i);
              });
            function Xp(e) {
              return ri(e, X);
            }
            function yo(e, t) {
              if (
                typeof e != "function" ||
                (t != null && typeof t != "function")
              )
                throw new Ne(R);
              var i = function () {
                var c = arguments,
                  b = t ? t.apply(this, c) : c[0],
                  y = i.cache;
                if (y.has(b)) return y.get(b);
                var B = e.apply(this, c);
                return (i.cache = y.set(b, B) || y), B;
              };
              return (i.cache = new (yo.Cache || ei)()), i;
            }
            yo.Cache = ei;
            function Do(e) {
              if (typeof e != "function") throw new Ne(R);
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, t[0]);
                  case 2:
                    return !e.call(this, t[0], t[1]);
                  case 3:
                    return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
              };
            }
            function Qp(e) {
              return Zc(2, e);
            }
            var eg = H2(function (e, t) {
                t =
                  t.length == 1 && Re(t[0])
                    ? ue(t[0], rr(be()))
                    : ue(ar(t, 1), rr(be()));
                var i = t.length;
                return Ge(function (c) {
                  for (var b = -1, y = Kt(c.length, i); ++b < y; )
                    c[b] = t[b].call(this, c[b]);
                  return w(e, this, c);
                });
              }),
              _s = Ge(function (e, t) {
                var i = mr(t, ra(_s));
                return ri(e, kt, a, t, i);
              }),
              tf = Ge(function (e, t) {
                var i = mr(t, ra(tf));
                return ri(e, Lr, a, t, i);
              }),
              tg = ni(function (e, t) {
                return ri(e, le, a, a, a, t);
              });
            function rg(e, t) {
              if (typeof e != "function") throw new Ne(R);
              return (t = t === a ? t : Me(t)), Ge(e, t);
            }
            function ng(e, t) {
              if (typeof e != "function") throw new Ne(R);
              return (
                (t = t == null ? 0 : Ct(Me(t), 0)),
                Ge(function (i) {
                  var c = i[t],
                    b = Hi(i, 0, t);
                  return c && Se(b, c), w(e, this, b);
                })
              );
            }
            function ig(e, t, i) {
              var c = !0,
                b = !0;
              if (typeof e != "function") throw new Ne(R);
              return (
                bt(i) &&
                  ((c = "leading" in i ? !!i.leading : c),
                  (b = "trailing" in i ? !!i.trailing : b)),
                ef(e, t, { leading: c, maxWait: t, trailing: b })
              );
            }
            function ug(e) {
              return $c(e, 1);
            }
            function ag(e, t) {
              return _s(ps(t), e);
            }
            function og() {
              if (!arguments.length) return [];
              var e = arguments[0];
              return Re(e) ? e : [e];
            }
            function sg(e) {
              return hn(e, tt);
            }
            function lg(e, t) {
              return (t = typeof t == "function" ? t : a), hn(e, tt, t);
            }
            function cg(e) {
              return hn(e, Ve | tt);
            }
            function fg(e, t) {
              return (t = typeof t == "function" ? t : a), hn(e, Ve | tt, t);
            }
            function dg(e, t) {
              return t == null || Vl(e, t, Yt(t));
            }
            function kn(e, t) {
              return e === t || (e !== e && t !== t);
            }
            var hg = po(rs),
              pg = po(function (e, t) {
                return e >= t;
              }),
              wu = Yl(
                (function () {
                  return arguments;
                })()
              )
                ? Yl
                : function (e) {
                    return (
                      yt(e) && xe.call(e, "callee") && !Qa.call(e, "callee")
                    );
                  },
              Re = _.isArray,
              gg = r ? rr(r) : x2;
            function Or(e) {
              return e != null && xo(e.length) && !ui(e);
            }
            function Et(e) {
              return yt(e) && Or(e);
            }
            function mg(e) {
              return e === !0 || e === !1 || (yt(e) && Sr(e) == Ar);
            }
            var Ui = Go || Us,
              vg = u ? rr(u) : C2;
            function bg(e) {
              return yt(e) && e.nodeType === 1 && !Fa(e);
            }
            function wg(e) {
              if (e == null) return !0;
              if (
                Or(e) &&
                (Re(e) ||
                  typeof e == "string" ||
                  typeof e.splice == "function" ||
                  Ui(e) ||
                  na(e) ||
                  wu(e))
              )
                return !e.length;
              var t = vr(e);
              if (t == Mt || t == st) return !e.size;
              if (_a(e)) return !us(e).length;
              for (var i in e) if (xe.call(e, i)) return !1;
              return !0;
            }
            function Ag(e, t) {
              return Ta(e, t);
            }
            function yg(e, t, i) {
              i = typeof i == "function" ? i : a;
              var c = i ? i(e, t) : a;
              return c === a ? Ta(e, t, a, i) : !!c;
            }
            function Ls(e) {
              if (!yt(e)) return !1;
              var t = Sr(e);
              return (
                t == Nt ||
                t == rt ||
                (typeof e.message == "string" &&
                  typeof e.name == "string" &&
                  !Fa(e))
              );
            }
            function Dg(e) {
              return typeof e == "number" && On(e);
            }
            function ui(e) {
              if (!bt(e)) return !1;
              var t = Sr(e);
              return t == qt || t == an || t == dt || t == Ot;
            }
            function rf(e) {
              return typeof e == "number" && e == Me(e);
            }
            function xo(e) {
              return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ft;
            }
            function bt(e) {
              var t = typeof e;
              return e != null && (t == "object" || t == "function");
            }
            function yt(e) {
              return e != null && typeof e == "object";
            }
            var nf = s ? rr(s) : S2;
            function xg(e, t) {
              return e === t || is(e, t, ys(t));
            }
            function Cg(e, t, i) {
              return (i = typeof i == "function" ? i : a), is(e, t, ys(t), i);
            }
            function Eg(e) {
              return uf(e) && e != +e;
            }
            function Sg(e) {
              if (lh(e)) throw new j(S);
              return $l(e);
            }
            function Tg(e) {
              return e === null;
            }
            function Bg(e) {
              return e == null;
            }
            function uf(e) {
              return typeof e == "number" || (yt(e) && Sr(e) == Jt);
            }
            function Fa(e) {
              if (!yt(e) || Sr(e) != Lt) return !1;
              var t = Ii(e);
              if (t === null) return !0;
              var i = xe.call(t, "constructor") && t.constructor;
              return (
                typeof i == "function" && i instanceof i && Xr.call(i) == Oo
              );
            }
            var Fs = f ? rr(f) : T2;
            function kg(e) {
              return rf(e) && e >= -ft && e <= ft;
            }
            var af = p ? rr(p) : B2;
            function Co(e) {
              return typeof e == "string" || (!Re(e) && yt(e) && Sr(e) == Ee);
            }
            function en(e) {
              return typeof e == "symbol" || (yt(e) && Sr(e) == cr);
            }
            var na = m ? rr(m) : k2;
            function _g(e) {
              return e === a;
            }
            function Lg(e) {
              return yt(e) && vr(e) == fe;
            }
            function Fg(e) {
              return yt(e) && Sr(e) == Ft;
            }
            var Rg = po(as),
              Ig = po(function (e, t) {
                return e <= t;
              });
            function of(e) {
              if (!e) return [];
              if (Or(e)) return Co(e) ? ir(e) : Mr(e);
              if (Pi && e[Pi]) return Zr(e[Pi]());
              var t = vr(e),
                i = t == Mt ? Jn : t == st ? fn : ia;
              return i(e);
            }
            function ai(e) {
              if (!e) return e === 0 ? e : 0;
              if (((e = mn(e)), e === _e || e === -_e)) {
                var t = e < 0 ? -1 : 1;
                return t * ce;
              }
              return e === e ? e : 0;
            }
            function Me(e) {
              var t = ai(e),
                i = t % 1;
              return t === t ? (i ? t - i : t) : 0;
            }
            function sf(e) {
              return e ? gu(Me(e), 0, Oe) : 0;
            }
            function mn(e) {
              if (typeof e == "number") return e;
              if (en(e)) return Q;
              if (bt(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = bt(t) ? t + "" : t;
              }
              if (typeof e != "string") return e === 0 ? e : +e;
              e = Nr(e);
              var i = mi.test(e);
              return i || vi.test(e)
                ? ba(e.slice(2), i ? 2 : 8)
                : vn.test(e)
                ? Q
                : +e;
            }
            function lf(e) {
              return Vn(e, Hr(e));
            }
            function Pg(e) {
              return e ? gu(Me(e), -ft, ft) : e === 0 ? e : 0;
            }
            function it(e) {
              return e == null ? "" : Qr(e);
            }
            var Ng = ea(function (e, t) {
                if (_a(t) || Or(t)) {
                  Vn(t, Yt(t), e);
                  return;
                }
                for (var i in t) xe.call(t, i) && Ca(e, i, t[i]);
              }),
              cf = ea(function (e, t) {
                Vn(t, Hr(t), e);
              }),
              Eo = ea(function (e, t, i, c) {
                Vn(t, Hr(t), e, c);
              }),
              qg = ea(function (e, t, i, c) {
                Vn(t, Yt(t), e, c);
              }),
              Mg = ni(Qo);
            function Og(e, t) {
              var i = l(e);
              return t == null ? i : Ul(i, t);
            }
            var Hg = Ge(function (e, t) {
                e = re(e);
                var i = -1,
                  c = t.length,
                  b = c > 2 ? t[2] : a;
                for (b && Tr(t[0], t[1], b) && (c = 1); ++i < c; )
                  for (
                    var y = t[i], B = Hr(y), F = -1, N = B.length;
                    ++F < N;

                  ) {
                    var K = B[F],
                      Y = e[K];
                    (Y === a || (kn(Y, xt[K]) && !xe.call(e, K))) &&
                      (e[K] = y[K]);
                  }
                return e;
              }),
              Ug = Ge(function (e) {
                return e.push(a, Sc), w(ff, a, e);
              });
            function Vg(e, t) {
              return ln(e, be(t, 3), Un);
            }
            function Gg(e, t) {
              return ln(e, be(t, 3), ts);
            }
            function Wg(e, t) {
              return e == null ? e : es(e, be(t, 3), Hr);
            }
            function zg(e, t) {
              return e == null ? e : jl(e, be(t, 3), Hr);
            }
            function jg(e, t) {
              return e && Un(e, be(t, 3));
            }
            function Kg(e, t) {
              return e && ts(e, be(t, 3));
            }
            function Yg(e) {
              return e == null ? [] : uo(e, Yt(e));
            }
            function $g(e) {
              return e == null ? [] : uo(e, Hr(e));
            }
            function Rs(e, t, i) {
              var c = e == null ? a : mu(e, t);
              return c === a ? i : c;
            }
            function Zg(e, t) {
              return e != null && kc(e, t, w2);
            }
            function Is(e, t) {
              return e != null && kc(e, t, A2);
            }
            var Jg = yc(function (e, t, i) {
                t != null &&
                  typeof t.toString != "function" &&
                  (t = ju.call(t)),
                  (e[t] = i);
              }, Ns(Ur)),
              Xg = yc(function (e, t, i) {
                t != null &&
                  typeof t.toString != "function" &&
                  (t = ju.call(t)),
                  xe.call(e, t) ? e[t].push(i) : (e[t] = [i]);
              }, be),
              Qg = Ge(Sa);
            function Yt(e) {
              return Or(e) ? Ol(e) : us(e);
            }
            function Hr(e) {
              return Or(e) ? Ol(e, !0) : _2(e);
            }
            function em(e, t) {
              var i = {};
              return (
                (t = be(t, 3)),
                Un(e, function (c, b, y) {
                  ti(i, t(c, b, y), c);
                }),
                i
              );
            }
            function tm(e, t) {
              var i = {};
              return (
                (t = be(t, 3)),
                Un(e, function (c, b, y) {
                  ti(i, b, t(c, b, y));
                }),
                i
              );
            }
            var rm = ea(function (e, t, i) {
                ao(e, t, i);
              }),
              ff = ea(function (e, t, i, c) {
                ao(e, t, i, c);
              }),
              nm = ni(function (e, t) {
                var i = {};
                if (e == null) return i;
                var c = !1;
                (t = ue(t, function (y) {
                  return (y = Oi(y, e)), c || (c = y.length > 1), y;
                })),
                  Vn(e, ws(e), i),
                  c && (i = hn(i, Ve | ze | tt, J2));
                for (var b = t.length; b--; ) fs(i, t[b]);
                return i;
              });
            function im(e, t) {
              return df(e, Do(be(t)));
            }
            var um = ni(function (e, t) {
              return e == null ? {} : F2(e, t);
            });
            function df(e, t) {
              if (e == null) return {};
              var i = ue(ws(e), function (c) {
                return [c];
              });
              return (
                (t = be(t)),
                rc(e, i, function (c, b) {
                  return t(c, b[0]);
                })
              );
            }
            function am(e, t, i) {
              t = Oi(t, e);
              var c = -1,
                b = t.length;
              for (b || ((b = 1), (e = a)); ++c < b; ) {
                var y = e == null ? a : e[Gn(t[c])];
                y === a && ((c = b), (y = i)), (e = ui(y) ? y.call(e) : y);
              }
              return e;
            }
            function om(e, t, i) {
              return e == null ? e : Ba(e, t, i);
            }
            function sm(e, t, i, c) {
              return (
                (c = typeof c == "function" ? c : a),
                e == null ? e : Ba(e, t, i, c)
              );
            }
            var hf = Cc(Yt),
              pf = Cc(Hr);
            function lm(e, t, i) {
              var c = Re(e),
                b = c || Ui(e) || na(e);
              if (((t = be(t, 4)), i == null)) {
                var y = e && e.constructor;
                b
                  ? (i = c ? new y() : [])
                  : bt(e)
                  ? (i = ui(y) ? l(Ii(e)) : {})
                  : (i = {});
              }
              return (
                (b ? E : Un)(e, function (B, F, N) {
                  return t(i, B, F, N);
                }),
                i
              );
            }
            function cm(e, t) {
              return e == null ? !0 : fs(e, t);
            }
            function fm(e, t, i) {
              return e == null ? e : oc(e, t, ps(i));
            }
            function dm(e, t, i, c) {
              return (
                (c = typeof c == "function" ? c : a),
                e == null ? e : oc(e, t, ps(i), c)
              );
            }
            function ia(e) {
              return e == null ? [] : ou(e, Yt(e));
            }
            function hm(e) {
              return e == null ? [] : ou(e, Hr(e));
            }
            function pm(e, t, i) {
              return (
                i === a && ((i = t), (t = a)),
                i !== a && ((i = mn(i)), (i = i === i ? i : 0)),
                t !== a && ((t = mn(t)), (t = t === t ? t : 0)),
                gu(mn(e), t, i)
              );
            }
            function gm(e, t, i) {
              return (
                (t = ai(t)),
                i === a ? ((i = t), (t = 0)) : (i = ai(i)),
                (e = mn(e)),
                y2(e, t, i)
              );
            }
            function mm(e, t, i) {
              if (
                (i && typeof i != "boolean" && Tr(e, t, i) && (t = i = a),
                i === a &&
                  (typeof t == "boolean"
                    ? ((i = t), (t = a))
                    : typeof e == "boolean" && ((i = e), (e = a))),
                e === a && t === a
                  ? ((e = 0), (t = 1))
                  : ((e = ai(e)), t === a ? ((t = e), (e = 0)) : (t = ai(t))),
                e > t)
              ) {
                var c = e;
                (e = t), (t = c);
              }
              if (i || e % 1 || t % 1) {
                var b = Da();
                return Kt(
                  e + b * (t - e + Ti("1e-" + ((b + "").length - 1))),
                  t
                );
              }
              return ss(e, t);
            }
            var vm = ta(function (e, t, i) {
              return (t = t.toLowerCase()), e + (i ? gf(t) : t);
            });
            function gf(e) {
              return Ps(it(e).toLowerCase());
            }
            function mf(e) {
              return (e = it(e)), e && e.replace(Bu, En).replace(pa, "");
            }
            function bm(e, t, i) {
              (e = it(e)), (t = Qr(t));
              var c = e.length;
              i = i === a ? c : gu(Me(i), 0, c);
              var b = i;
              return (i -= t.length), i >= 0 && e.slice(i, b) == t;
            }
            function wm(e) {
              return (e = it(e)), e && zt.test(e) ? e.replace(jr, su) : e;
            }
            function Am(e) {
              return (e = it(e)), e && Ut.test(e) ? e.replace(Le, "\\$&") : e;
            }
            var ym = ta(function (e, t, i) {
                return e + (i ? "-" : "") + t.toLowerCase();
              }),
              Dm = ta(function (e, t, i) {
                return e + (i ? " " : "") + t.toLowerCase();
              }),
              xm = bc("toLowerCase");
            function Cm(e, t, i) {
              (e = it(e)), (t = Me(t));
              var c = t ? dn(e) : 0;
              if (!t || c >= t) return e;
              var b = (t - c) / 2;
              return ho(Xu(b), i) + e + ho(Ju(b), i);
            }
            function Em(e, t, i) {
              (e = it(e)), (t = Me(t));
              var c = t ? dn(e) : 0;
              return t && c < t ? e + ho(t - c, i) : e;
            }
            function Sm(e, t, i) {
              (e = it(e)), (t = Me(t));
              var c = t ? dn(e) : 0;
              return t && c < t ? ho(t - c, i) + e : e;
            }
            function Tm(e, t, i) {
              return (
                i || t == null ? (t = 0) : t && (t = +t),
                jo(it(e).replace(dr, ""), t || 0)
              );
            }
            function Bm(e, t, i) {
              return (
                (i ? Tr(e, t, i) : t === a) ? (t = 1) : (t = Me(t)),
                ls(it(e), t)
              );
            }
            function km() {
              var e = arguments,
                t = it(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }
            var _m = ta(function (e, t, i) {
              return e + (i ? "_" : "") + t.toLowerCase();
            });
            function Lm(e, t, i) {
              return (
                i && typeof i != "number" && Tr(e, t, i) && (t = i = a),
                (i = i === a ? Oe : i >>> 0),
                i
                  ? ((e = it(e)),
                    e &&
                    (typeof t == "string" || (t != null && !Fs(t))) &&
                    ((t = Qr(t)), !t && nr(e))
                      ? Hi(ir(e), 0, i)
                      : e.split(t, i))
                  : []
              );
            }
            var Fm = ta(function (e, t, i) {
              return e + (i ? " " : "") + Ps(t);
            });
            function Rm(e, t, i) {
              return (
                (e = it(e)),
                (i = i == null ? 0 : gu(Me(i), 0, e.length)),
                (t = Qr(t)),
                e.slice(i, i + t.length) == t
              );
            }
            function Im(e, t, i) {
              var c = n.templateSettings;
              i && Tr(e, t, i) && (t = a), (e = it(e)), (t = Eo({}, t, c, Ec));
              var b = Eo({}, t.imports, c.imports, Ec),
                y = Yt(b),
                B = ou(b, y),
                F,
                N,
                K = 0,
                Y = t.interpolate || Ir,
                Z = "__p += '",
                ne = Fe(
                  (t.escape || Ir).source +
                    "|" +
                    Y.source +
                    "|" +
                    (Y === Ht ? Tu : Ir).source +
                    "|" +
                    (t.evaluate || Ir).source +
                    "|$",
                  "g"
                ),
                he =
                  "//# sourceURL=" +
                  (xe.call(t, "sourceURL")
                    ? (t.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++Hu + "]") +
                  `
`;
              e.replace(ne, function (ye, je, $e, tn, Br, rn) {
                return (
                  $e || ($e = tn),
                  (Z += e.slice(K, rn).replace(jn, _i)),
                  je &&
                    ((F = !0),
                    (Z +=
                      `' +
__e(` +
                      je +
                      `) +
'`)),
                  Br &&
                    ((N = !0),
                    (Z +=
                      `';
` +
                      Br +
                      `;
__p += '`)),
                  $e &&
                    (Z +=
                      `' +
((__t = (` +
                      $e +
                      `)) == null ? '' : __t) +
'`),
                  (K = rn + ye.length),
                  ye
                );
              }),
                (Z += `';
`);
              var Ae = xe.call(t, "variable") && t.variable;
              if (!Ae)
                Z =
                  `with (obj) {
` +
                  Z +
                  `
}
`;
              else if (zn.test(Ae)) throw new j(G);
              (Z = (N ? Z.replace(pi, "") : Z)
                .replace(Eu, "$1")
                .replace(Wi, "$1;")),
                (Z =
                  "function(" +
                  (Ae || "obj") +
                  `) {
` +
                  (Ae
                    ? ""
                    : `obj || (obj = {});
`) +
                  "var __t, __p = ''" +
                  (F ? ", __e = _.escape" : "") +
                  (N
                    ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                    : `;
`) +
                  Z +
                  `return __p
}`);
              var Ue = bf(function () {
                return ae(y, he + "return " + Z).apply(a, B);
              });
              if (((Ue.source = Z), Ls(Ue))) throw Ue;
              return Ue;
            }
            function Pm(e) {
              return it(e).toLowerCase();
            }
            function Nm(e) {
              return it(e).toUpperCase();
            }
            function qm(e, t, i) {
              if (((e = it(e)), e && (i || t === a))) return Nr(e);
              if (!e || !(t = Qr(t))) return e;
              var c = ir(e),
                b = ir(t),
                y = Ze(c, b),
                B = Cn(c, b) + 1;
              return Hi(c, y, B).join("");
            }
            function Mm(e, t, i) {
              if (((e = it(e)), e && (i || t === a)))
                return e.slice(0, zu(e) + 1);
              if (!e || !(t = Qr(t))) return e;
              var c = ir(e),
                b = Cn(c, ir(t)) + 1;
              return Hi(c, 0, b).join("");
            }
            function Om(e, t, i) {
              if (((e = it(e)), e && (i || t === a))) return e.replace(dr, "");
              if (!e || !(t = Qr(t))) return e;
              var c = ir(e),
                b = Ze(c, ir(t));
              return Hi(c, b).join("");
            }
            function Hm(e, t) {
              var i = Pe,
                c = Ke;
              if (bt(t)) {
                var b = "separator" in t ? t.separator : b;
                (i = "length" in t ? Me(t.length) : i),
                  (c = "omission" in t ? Qr(t.omission) : c);
              }
              e = it(e);
              var y = e.length;
              if (nr(e)) {
                var B = ir(e);
                y = B.length;
              }
              if (i >= y) return e;
              var F = i - dn(c);
              if (F < 1) return c;
              var N = B ? Hi(B, 0, F).join("") : e.slice(0, F);
              if (b === a) return N + c;
              if ((B && (F += N.length - F), Fs(b))) {
                if (e.slice(F).search(b)) {
                  var K,
                    Y = N;
                  for (
                    b.global || (b = Fe(b.source, it($i.exec(b)) + "g")),
                      b.lastIndex = 0;
                    (K = b.exec(Y));

                  )
                    var Z = K.index;
                  N = N.slice(0, Z === a ? F : Z);
                }
              } else if (e.indexOf(Qr(b), F) != F) {
                var ne = N.lastIndexOf(b);
                ne > -1 && (N = N.slice(0, ne));
              }
              return N + c;
            }
            function Um(e) {
              return (e = it(e)), e && Su.test(e) ? e.replace(zr, Ri) : e;
            }
            var Vm = ta(function (e, t, i) {
                return e + (i ? " " : "") + t.toUpperCase();
              }),
              Ps = bc("toUpperCase");
            function vf(e, t, i) {
              return (
                (e = it(e)),
                (t = i ? a : t),
                t === a ? (Li(e) ? I(e) : Be(e)) : e.match(t) || []
              );
            }
            var bf = Ge(function (e, t) {
                try {
                  return w(e, a, t);
                } catch (i) {
                  return Ls(i) ? i : new j(i);
                }
              }),
              Gm = ni(function (e, t) {
                return (
                  E(t, function (i) {
                    (i = Gn(i)), ti(e, i, ks(e[i], e));
                  }),
                  e
                );
              });
            function Wm(e) {
              var t = e == null ? 0 : e.length,
                i = be();
              return (
                (e = t
                  ? ue(e, function (c) {
                      if (typeof c[1] != "function") throw new Ne(R);
                      return [i(c[0]), c[1]];
                    })
                  : []),
                Ge(function (c) {
                  for (var b = -1; ++b < t; ) {
                    var y = e[b];
                    if (w(y[0], this, c)) return w(y[1], this, c);
                  }
                })
              );
            }
            function zm(e) {
              return m2(hn(e, Ve));
            }
            function Ns(e) {
              return function () {
                return e;
              };
            }
            function jm(e, t) {
              return e == null || e !== e ? t : e;
            }
            var Km = Ac(),
              Ym = Ac(!0);
            function Ur(e) {
              return e;
            }
            function qs(e) {
              return Zl(typeof e == "function" ? e : hn(e, Ve));
            }
            function $m(e) {
              return Xl(hn(e, Ve));
            }
            function Zm(e, t) {
              return Ql(e, hn(t, Ve));
            }
            var Jm = Ge(function (e, t) {
                return function (i) {
                  return Sa(i, e, t);
                };
              }),
              Xm = Ge(function (e, t) {
                return function (i) {
                  return Sa(e, i, t);
                };
              });
            function Ms(e, t, i) {
              var c = Yt(t),
                b = uo(t, c);
              i == null &&
                !(bt(t) && (b.length || !c.length)) &&
                ((i = t), (t = e), (e = this), (b = uo(t, Yt(t))));
              var y = !(bt(i) && "chain" in i) || !!i.chain,
                B = ui(e);
              return (
                E(b, function (F) {
                  var N = t[F];
                  (e[F] = N),
                    B &&
                      (e.prototype[F] = function () {
                        var K = this.__chain__;
                        if (y || K) {
                          var Y = e(this.__wrapped__),
                            Z = (Y.__actions__ = Mr(this.__actions__));
                          return (
                            Z.push({ func: N, args: arguments, thisArg: e }),
                            (Y.__chain__ = K),
                            Y
                          );
                        }
                        return N.apply(e, Se([this.value()], arguments));
                      });
                }),
                e
              );
            }
            function Qm() {
              return ht._ === this && (ht._ = Za), this;
            }
            function Os() {}
            function e0(e) {
              return (
                (e = Me(e)),
                Ge(function (t) {
                  return ec(t, e);
                })
              );
            }
            var t0 = ms(ue),
              r0 = ms(V),
              n0 = ms(pt);
            function wf(e) {
              return xs(e) ? xn(Gn(e)) : R2(e);
            }
            function i0(e) {
              return function (t) {
                return e == null ? a : mu(e, t);
              };
            }
            var u0 = Dc(),
              a0 = Dc(!0);
            function Hs() {
              return [];
            }
            function Us() {
              return !1;
            }
            function o0() {
              return {};
            }
            function s0() {
              return "";
            }
            function l0() {
              return !0;
            }
            function c0(e, t) {
              if (((e = Me(e)), e < 1 || e > ft)) return [];
              var i = Oe,
                c = Kt(e, Oe);
              (t = be(t)), (e -= Oe);
              for (var b = Nn(c, t); ++i < e; ) t(i);
              return b;
            }
            function f0(e) {
              return Re(e) ? ue(e, Gn) : en(e) ? [e] : Mr(Mc(it(e)));
            }
            function d0(e) {
              var t = ++Mo;
              return it(e) + t;
            }
            var h0 = fo(function (e, t) {
                return e + t;
              }, 0),
              p0 = vs("ceil"),
              g0 = fo(function (e, t) {
                return e / t;
              }, 1),
              m0 = vs("floor");
            function v0(e) {
              return e && e.length ? io(e, Ur, rs) : a;
            }
            function b0(e, t) {
              return e && e.length ? io(e, be(t, 2), rs) : a;
            }
            function w0(e) {
              return Er(e, Ur);
            }
            function A0(e, t) {
              return Er(e, be(t, 2));
            }
            function y0(e) {
              return e && e.length ? io(e, Ur, as) : a;
            }
            function D0(e, t) {
              return e && e.length ? io(e, be(t, 2), as) : a;
            }
            var x0 = fo(function (e, t) {
                return e * t;
              }, 1),
              C0 = vs("round"),
              E0 = fo(function (e, t) {
                return e - t;
              }, 0);
            function S0(e) {
              return e && e.length ? Gt(e, Ur) : 0;
            }
            function T0(e, t) {
              return e && e.length ? Gt(e, be(t, 2)) : 0;
            }
            return (
              (n.after = $p),
              (n.ary = $c),
              (n.assign = Ng),
              (n.assignIn = cf),
              (n.assignInWith = Eo),
              (n.assignWith = qg),
              (n.at = Mg),
              (n.before = Zc),
              (n.bind = ks),
              (n.bindAll = Gm),
              (n.bindKey = Jc),
              (n.castArray = og),
              (n.chain = jc),
              (n.chunk = mh),
              (n.compact = vh),
              (n.concat = bh),
              (n.cond = Wm),
              (n.conforms = zm),
              (n.constant = Ns),
              (n.countBy = Sp),
              (n.create = Og),
              (n.curry = Xc),
              (n.curryRight = Qc),
              (n.debounce = ef),
              (n.defaults = Hg),
              (n.defaultsDeep = Ug),
              (n.defer = Zp),
              (n.delay = Jp),
              (n.difference = wh),
              (n.differenceBy = Ah),
              (n.differenceWith = yh),
              (n.drop = Dh),
              (n.dropRight = xh),
              (n.dropRightWhile = Ch),
              (n.dropWhile = Eh),
              (n.fill = Sh),
              (n.filter = Bp),
              (n.flatMap = Lp),
              (n.flatMapDeep = Fp),
              (n.flatMapDepth = Rp),
              (n.flatten = Vc),
              (n.flattenDeep = Th),
              (n.flattenDepth = Bh),
              (n.flip = Xp),
              (n.flow = Km),
              (n.flowRight = Ym),
              (n.fromPairs = kh),
              (n.functions = Yg),
              (n.functionsIn = $g),
              (n.groupBy = Ip),
              (n.initial = Lh),
              (n.intersection = Fh),
              (n.intersectionBy = Rh),
              (n.intersectionWith = Ih),
              (n.invert = Jg),
              (n.invertBy = Xg),
              (n.invokeMap = Np),
              (n.iteratee = qs),
              (n.keyBy = qp),
              (n.keys = Yt),
              (n.keysIn = Hr),
              (n.map = wo),
              (n.mapKeys = em),
              (n.mapValues = tm),
              (n.matches = $m),
              (n.matchesProperty = Zm),
              (n.memoize = yo),
              (n.merge = rm),
              (n.mergeWith = ff),
              (n.method = Jm),
              (n.methodOf = Xm),
              (n.mixin = Ms),
              (n.negate = Do),
              (n.nthArg = e0),
              (n.omit = nm),
              (n.omitBy = im),
              (n.once = Qp),
              (n.orderBy = Mp),
              (n.over = t0),
              (n.overArgs = eg),
              (n.overEvery = r0),
              (n.overSome = n0),
              (n.partial = _s),
              (n.partialRight = tf),
              (n.partition = Op),
              (n.pick = um),
              (n.pickBy = df),
              (n.property = wf),
              (n.propertyOf = i0),
              (n.pull = Mh),
              (n.pullAll = Wc),
              (n.pullAllBy = Oh),
              (n.pullAllWith = Hh),
              (n.pullAt = Uh),
              (n.range = u0),
              (n.rangeRight = a0),
              (n.rearg = tg),
              (n.reject = Vp),
              (n.remove = Vh),
              (n.rest = rg),
              (n.reverse = Ts),
              (n.sampleSize = Wp),
              (n.set = om),
              (n.setWith = sm),
              (n.shuffle = zp),
              (n.slice = Gh),
              (n.sortBy = Yp),
              (n.sortedUniq = Zh),
              (n.sortedUniqBy = Jh),
              (n.split = Lm),
              (n.spread = ng),
              (n.tail = Xh),
              (n.take = Qh),
              (n.takeRight = ep),
              (n.takeRightWhile = tp),
              (n.takeWhile = rp),
              (n.tap = vp),
              (n.throttle = ig),
              (n.thru = bo),
              (n.toArray = of),
              (n.toPairs = hf),
              (n.toPairsIn = pf),
              (n.toPath = f0),
              (n.toPlainObject = lf),
              (n.transform = lm),
              (n.unary = ug),
              (n.union = np),
              (n.unionBy = ip),
              (n.unionWith = up),
              (n.uniq = ap),
              (n.uniqBy = op),
              (n.uniqWith = sp),
              (n.unset = cm),
              (n.unzip = Bs),
              (n.unzipWith = zc),
              (n.update = fm),
              (n.updateWith = dm),
              (n.values = ia),
              (n.valuesIn = hm),
              (n.without = lp),
              (n.words = vf),
              (n.wrap = ag),
              (n.xor = cp),
              (n.xorBy = fp),
              (n.xorWith = dp),
              (n.zip = hp),
              (n.zipObject = pp),
              (n.zipObjectDeep = gp),
              (n.zipWith = mp),
              (n.entries = hf),
              (n.entriesIn = pf),
              (n.extend = cf),
              (n.extendWith = Eo),
              Ms(n, n),
              (n.add = h0),
              (n.attempt = bf),
              (n.camelCase = vm),
              (n.capitalize = gf),
              (n.ceil = p0),
              (n.clamp = pm),
              (n.clone = sg),
              (n.cloneDeep = cg),
              (n.cloneDeepWith = fg),
              (n.cloneWith = lg),
              (n.conformsTo = dg),
              (n.deburr = mf),
              (n.defaultTo = jm),
              (n.divide = g0),
              (n.endsWith = bm),
              (n.eq = kn),
              (n.escape = wm),
              (n.escapeRegExp = Am),
              (n.every = Tp),
              (n.find = kp),
              (n.findIndex = Hc),
              (n.findKey = Vg),
              (n.findLast = _p),
              (n.findLastIndex = Uc),
              (n.findLastKey = Gg),
              (n.floor = m0),
              (n.forEach = Kc),
              (n.forEachRight = Yc),
              (n.forIn = Wg),
              (n.forInRight = zg),
              (n.forOwn = jg),
              (n.forOwnRight = Kg),
              (n.get = Rs),
              (n.gt = hg),
              (n.gte = pg),
              (n.has = Zg),
              (n.hasIn = Is),
              (n.head = Gc),
              (n.identity = Ur),
              (n.includes = Pp),
              (n.indexOf = _h),
              (n.inRange = gm),
              (n.invoke = Qg),
              (n.isArguments = wu),
              (n.isArray = Re),
              (n.isArrayBuffer = gg),
              (n.isArrayLike = Or),
              (n.isArrayLikeObject = Et),
              (n.isBoolean = mg),
              (n.isBuffer = Ui),
              (n.isDate = vg),
              (n.isElement = bg),
              (n.isEmpty = wg),
              (n.isEqual = Ag),
              (n.isEqualWith = yg),
              (n.isError = Ls),
              (n.isFinite = Dg),
              (n.isFunction = ui),
              (n.isInteger = rf),
              (n.isLength = xo),
              (n.isMap = nf),
              (n.isMatch = xg),
              (n.isMatchWith = Cg),
              (n.isNaN = Eg),
              (n.isNative = Sg),
              (n.isNil = Bg),
              (n.isNull = Tg),
              (n.isNumber = uf),
              (n.isObject = bt),
              (n.isObjectLike = yt),
              (n.isPlainObject = Fa),
              (n.isRegExp = Fs),
              (n.isSafeInteger = kg),
              (n.isSet = af),
              (n.isString = Co),
              (n.isSymbol = en),
              (n.isTypedArray = na),
              (n.isUndefined = _g),
              (n.isWeakMap = Lg),
              (n.isWeakSet = Fg),
              (n.join = Ph),
              (n.kebabCase = ym),
              (n.last = gn),
              (n.lastIndexOf = Nh),
              (n.lowerCase = Dm),
              (n.lowerFirst = xm),
              (n.lt = Rg),
              (n.lte = Ig),
              (n.max = v0),
              (n.maxBy = b0),
              (n.mean = w0),
              (n.meanBy = A0),
              (n.min = y0),
              (n.minBy = D0),
              (n.stubArray = Hs),
              (n.stubFalse = Us),
              (n.stubObject = o0),
              (n.stubString = s0),
              (n.stubTrue = l0),
              (n.multiply = x0),
              (n.nth = qh),
              (n.noConflict = Qm),
              (n.noop = Os),
              (n.now = Ao),
              (n.pad = Cm),
              (n.padEnd = Em),
              (n.padStart = Sm),
              (n.parseInt = Tm),
              (n.random = mm),
              (n.reduce = Hp),
              (n.reduceRight = Up),
              (n.repeat = Bm),
              (n.replace = km),
              (n.result = am),
              (n.round = C0),
              (n.runInContext = D),
              (n.sample = Gp),
              (n.size = jp),
              (n.snakeCase = _m),
              (n.some = Kp),
              (n.sortedIndex = Wh),
              (n.sortedIndexBy = zh),
              (n.sortedIndexOf = jh),
              (n.sortedLastIndex = Kh),
              (n.sortedLastIndexBy = Yh),
              (n.sortedLastIndexOf = $h),
              (n.startCase = Fm),
              (n.startsWith = Rm),
              (n.subtract = E0),
              (n.sum = S0),
              (n.sumBy = T0),
              (n.template = Im),
              (n.times = c0),
              (n.toFinite = ai),
              (n.toInteger = Me),
              (n.toLength = sf),
              (n.toLower = Pm),
              (n.toNumber = mn),
              (n.toSafeInteger = Pg),
              (n.toString = it),
              (n.toUpper = Nm),
              (n.trim = qm),
              (n.trimEnd = Mm),
              (n.trimStart = Om),
              (n.truncate = Hm),
              (n.unescape = Um),
              (n.uniqueId = d0),
              (n.upperCase = Vm),
              (n.upperFirst = Ps),
              (n.each = Kc),
              (n.eachRight = Yc),
              (n.first = Gc),
              Ms(
                n,
                (function () {
                  var e = {};
                  return (
                    Un(n, function (t, i) {
                      xe.call(n.prototype, i) || (e[i] = t);
                    }),
                    e
                  );
                })(),
                { chain: !1 }
              ),
              (n.VERSION = v),
              E(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  n[e].placeholder = n;
                }
              ),
              E(["drop", "take"], function (e, t) {
                (q.prototype[e] = function (i) {
                  i = i === a ? 1 : Ct(Me(i), 0);
                  var c = this.__filtered__ && !t ? new q(this) : this.clone();
                  return (
                    c.__filtered__
                      ? (c.__takeCount__ = Kt(i, c.__takeCount__))
                      : c.__views__.push({
                          size: Kt(i, Oe),
                          type: e + (c.__dir__ < 0 ? "Right" : ""),
                        }),
                    c
                  );
                }),
                  (q.prototype[e + "Right"] = function (i) {
                    return this.reverse()[e](i).reverse();
                  });
              }),
              E(["filter", "map", "takeWhile"], function (e, t) {
                var i = t + 1,
                  c = i == ot || i == _t;
                q.prototype[e] = function (b) {
                  var y = this.clone();
                  return (
                    y.__iteratees__.push({ iteratee: be(b, 3), type: i }),
                    (y.__filtered__ = y.__filtered__ || c),
                    y
                  );
                };
              }),
              E(["head", "last"], function (e, t) {
                var i = "take" + (t ? "Right" : "");
                q.prototype[e] = function () {
                  return this[i](1).value()[0];
                };
              }),
              E(["initial", "tail"], function (e, t) {
                var i = "drop" + (t ? "" : "Right");
                q.prototype[e] = function () {
                  return this.__filtered__ ? new q(this) : this[i](1);
                };
              }),
              (q.prototype.compact = function () {
                return this.filter(Ur);
              }),
              (q.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (q.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (q.prototype.invokeMap = Ge(function (e, t) {
                return typeof e == "function"
                  ? new q(this)
                  : this.map(function (i) {
                      return Sa(i, e, t);
                    });
              })),
              (q.prototype.reject = function (e) {
                return this.filter(Do(be(e)));
              }),
              (q.prototype.slice = function (e, t) {
                e = Me(e);
                var i = this;
                return i.__filtered__ && (e > 0 || t < 0)
                  ? new q(i)
                  : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)),
                    t !== a &&
                      ((t = Me(t)),
                      (i = t < 0 ? i.dropRight(-t) : i.take(t - e))),
                    i);
              }),
              (q.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (q.prototype.toArray = function () {
                return this.take(Oe);
              }),
              Un(q.prototype, function (e, t) {
                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                  c = /^(?:head|last)$/.test(t),
                  b = n[c ? "take" + (t == "last" ? "Right" : "") : t],
                  y = c || /^find/.test(t);
                b &&
                  (n.prototype[t] = function () {
                    var B = this.__wrapped__,
                      F = c ? [1] : arguments,
                      N = B instanceof q,
                      K = F[0],
                      Y = N || Re(B),
                      Z = function (je) {
                        var $e = b.apply(n, Se([je], F));
                        return c && ne ? $e[0] : $e;
                      };
                    Y &&
                      i &&
                      typeof K == "function" &&
                      K.length != 1 &&
                      (N = Y = !1);
                    var ne = this.__chain__,
                      he = !!this.__actions__.length,
                      Ae = y && !ne,
                      Ue = N && !he;
                    if (!y && Y) {
                      B = Ue ? B : new q(this);
                      var ye = e.apply(B, F);
                      return (
                        ye.__actions__.push({
                          func: bo,
                          args: [Z],
                          thisArg: a,
                        }),
                        new T(ye, ne)
                      );
                    }
                    return Ae && Ue
                      ? e.apply(this, F)
                      : ((ye = this.thru(Z)),
                        Ae ? (c ? ye.value()[0] : ye.value()) : ye);
                  });
              }),
              E(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var t = vt[e],
                    i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    c = /^(?:pop|shift)$/.test(e);
                  n.prototype[e] = function () {
                    var b = arguments;
                    if (c && !this.__chain__) {
                      var y = this.value();
                      return t.apply(Re(y) ? y : [], b);
                    }
                    return this[i](function (B) {
                      return t.apply(Re(B) ? B : [], b);
                    });
                  };
                }
              ),
              Un(q.prototype, function (e, t) {
                var i = n[t];
                if (i) {
                  var c = i.name + "";
                  xe.call(Ni, c) || (Ni[c] = []),
                    Ni[c].push({ name: t, func: i });
                }
              }),
              (Ni[co(a, pe).name] = [{ name: "wrapper", func: a }]),
              (q.prototype.clone = ie),
              (q.prototype.reverse = Te),
              (q.prototype.value = qe),
              (n.prototype.at = bp),
              (n.prototype.chain = wp),
              (n.prototype.commit = Ap),
              (n.prototype.next = yp),
              (n.prototype.plant = xp),
              (n.prototype.reverse = Cp),
              (n.prototype.toJSON =
                n.prototype.valueOf =
                n.prototype.value =
                  Ep),
              (n.prototype.first = n.prototype.head),
              Pi && (n.prototype[Pi] = Dp),
              n
            );
          },
          H = M();
        Yr ? (((Yr.exports = H)._ = H), (Bi._ = H)) : (ht._ = H);
      }).call(Ie);
    })(Ma, Ma.exports);
  var Kf = Ma.exports;
  const ut = gt(Kf);
  class Yf {}
  class $f {}
  const pl = [".", "。", ";", "；", "?", "？", "!", "！", ",", "，"],
    Zf = pl.reduce((A, o) => ((A[o] = !0), A), new Yf()),
    Jf = /[\p{P}\p{S}\p{Z}\p{C}]/gu;
  class br {
    static isSubtitleEndsWithPunctuation(o, a = (v) => v.getSubtitleText()) {
      const v = a(o),
        C = v.charAt(v.length - 1);
      return this.isPunctuation(C);
    }
    static isPunctuation(o) {
      return Zf[o] === !0;
    }
    static findPunctuationIndex(o) {
      let a = o.getSubtitleText(),
        v = new $f(),
        C = 0;
      for (const R of a) {
        if (this.isPunctuation(R)) {
          if (R === "." || R === "。") return C;
          ut.isNumber(v[R]) || (v[R] = C);
        }
        C++;
      }
      const S = ut.find(pl, (R) => ut.isNumber(v[R]), 1);
      return S ? v[S] : -1;
    }
    static calculateTextMs(o, a) {
      return this.calculateCharMs(o) * this.calculateLength(a);
    }
    static calculateCharMs(o, a = (v) => v.getSubtitleText()) {
      return (
        (o.getSubtitleTimeRange().getDuration() * 1e3) /
        this.calculateLength(a(o))
      );
    }
    static calculateLength(o) {
      return ut.replace(o, Jf, "").length;
    }
    static mergeSubtitle(o, a) {
      o.setSubtitleText(o.getSubtitleText() + " " + a.getSubtitleText());
      const v = o.getSubtitleTimeRange();
      v.setDuration(a.getSubtitleTimeRange().getEndTime() - v.getStartTime());
    }
    static mergeSubtitleGoogleTranslateResult(o, a) {
      o.setGoogleTranslation(
        o.getGoogleTranslation() + " " + a.getGoogleTranslation()
      );
      const v = o.getSubtitleTimeRange();
      v.setDuration(a.getSubtitleTimeRange().getEndTime() - v.getStartTime());
    }
    static isPunctuationWithStr(o) {
      return (o = o.trim()), o.length === 1 && this.isPunctuation(o);
    }
    static findMatchingElements(o, a, v, C) {
      const S = [];
      for (let R = 0; R < v; R++) {
        let G = ut.findIndex(o, C, a);
        if (G >= 0) (a = G + 1), S.push(G);
        else break;
      }
      return S;
    }
  }
  function Xf(A) {
    return $t(A == null ? void 0 : A.lift);
  }
  function Du(A) {
    return function (o) {
      if (Xf(o))
        return o.lift(function (a) {
          try {
            return A(a, this);
          } catch (v) {
            this.error(v);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function sa(A, o, a, v, C) {
    return new Qf(A, o, a, v, C);
  }
  var Qf = (function (A) {
      oa(o, A);
      function o(a, v, C, S, R, G) {
        var J = A.call(this, a) || this;
        return (
          (J.onFinalize = R),
          (J.shouldUnsubscribe = G),
          (J._next = v
            ? function (ee) {
                try {
                  v(ee);
                } catch (De) {
                  a.error(De);
                }
              }
            : A.prototype._next),
          (J._error = S
            ? function (ee) {
                try {
                  S(ee);
                } catch (De) {
                  a.error(De);
                } finally {
                  this.unsubscribe();
                }
              }
            : A.prototype._error),
          (J._complete = C
            ? function () {
                try {
                  C();
                } catch (ee) {
                  a.error(ee);
                } finally {
                  this.unsubscribe();
                }
              }
            : A.prototype._complete),
          J
        );
      }
      return (
        (o.prototype.unsubscribe = function () {
          var a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var v = this.closed;
            A.prototype.unsubscribe.call(this),
              !v &&
                ((a = this.onFinalize) === null ||
                  a === void 0 ||
                  a.call(this));
          }
        }),
        o
      );
    })(Lo),
    ed = Ys(function (A) {
      return function () {
        A(this),
          (this.name = "ObjectUnsubscribedError"),
          (this.message = "object unsubscribed");
      };
    }),
    Po = (function (A) {
      oa(o, A);
      function o() {
        var a = A.call(this) || this;
        return (
          (a.closed = !1),
          (a.currentObservers = null),
          (a.observers = []),
          (a.isStopped = !1),
          (a.hasError = !1),
          (a.thrownError = null),
          a
        );
      }
      return (
        (o.prototype.lift = function (a) {
          var v = new gl(this, this);
          return (v.operator = a), v;
        }),
        (o.prototype._throwIfClosed = function () {
          if (this.closed) throw new ed();
        }),
        (o.prototype.next = function (a) {
          var v = this;
          Pa(function () {
            var C, S;
            if ((v._throwIfClosed(), !v.isStopped)) {
              v.currentObservers ||
                (v.currentObservers = Array.from(v.observers));
              try {
                for (
                  var R = Au(v.currentObservers), G = R.next();
                  !G.done;
                  G = R.next()
                ) {
                  var J = G.value;
                  J.next(a);
                }
              } catch (ee) {
                C = { error: ee };
              } finally {
                try {
                  G && !G.done && (S = R.return) && S.call(R);
                } finally {
                  if (C) throw C.error;
                }
              }
            }
          });
        }),
        (o.prototype.error = function (a) {
          var v = this;
          Pa(function () {
            if ((v._throwIfClosed(), !v.isStopped)) {
              (v.hasError = v.isStopped = !0), (v.thrownError = a);
              for (var C = v.observers; C.length; ) C.shift().error(a);
            }
          });
        }),
        (o.prototype.complete = function () {
          var a = this;
          Pa(function () {
            if ((a._throwIfClosed(), !a.isStopped)) {
              a.isStopped = !0;
              for (var v = a.observers; v.length; ) v.shift().complete();
            }
          });
        }),
        (o.prototype.unsubscribe = function () {
          (this.isStopped = this.closed = !0),
            (this.observers = this.currentObservers = null);
        }),
        Object.defineProperty(o.prototype, "observed", {
          get: function () {
            var a;
            return (
              ((a = this.observers) === null || a === void 0
                ? void 0
                : a.length) > 0
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (o.prototype._trySubscribe = function (a) {
          return this._throwIfClosed(), A.prototype._trySubscribe.call(this, a);
        }),
        (o.prototype._subscribe = function (a) {
          return (
            this._throwIfClosed(),
            this._checkFinalizedStatuses(a),
            this._innerSubscribe(a)
          );
        }),
        (o.prototype._innerSubscribe = function (a) {
          var v = this,
            C = this,
            S = C.hasError,
            R = C.isStopped,
            G = C.observers;
          return S || R
            ? $s
            : ((this.currentObservers = null),
              G.push(a),
              new Ia(function () {
                (v.currentObservers = null), _o(G, a);
              }));
        }),
        (o.prototype._checkFinalizedStatuses = function (a) {
          var v = this,
            C = v.hasError,
            S = v.thrownError,
            R = v.isStopped;
          C ? a.error(S) : R && a.complete();
        }),
        (o.prototype.asObservable = function () {
          var a = new nn();
          return (a.source = this), a;
        }),
        (o.create = function (a, v) {
          return new gl(a, v);
        }),
        o
      );
    })(nn),
    gl = (function (A) {
      oa(o, A);
      function o(a, v) {
        var C = A.call(this) || this;
        return (C.destination = a), (C.source = v), C;
      }
      return (
        (o.prototype.next = function (a) {
          var v, C;
          (C =
            (v = this.destination) === null || v === void 0
              ? void 0
              : v.next) === null ||
            C === void 0 ||
            C.call(v, a);
        }),
        (o.prototype.error = function (a) {
          var v, C;
          (C =
            (v = this.destination) === null || v === void 0
              ? void 0
              : v.error) === null ||
            C === void 0 ||
            C.call(v, a);
        }),
        (o.prototype.complete = function () {
          var a, v;
          (v =
            (a = this.destination) === null || a === void 0
              ? void 0
              : a.complete) === null ||
            v === void 0 ||
            v.call(a);
        }),
        (o.prototype._subscribe = function (a) {
          var v, C;
          return (C =
            (v = this.source) === null || v === void 0
              ? void 0
              : v.subscribe(a)) !== null && C !== void 0
            ? C
            : $s;
        }),
        o
      );
    })(Po);
  function Vi(A, o, a, v, C) {
    v === void 0 && (v = 0), C === void 0 && (C = !1);
    var S = o.schedule(function () {
      a(), C ? A.add(this.schedule(null, v)) : this.unsubscribe();
    }, v);
    if ((A.add(S), !C)) return S;
  }
  function ml(A, o) {
    return (
      o === void 0 && (o = 0),
      Du(function (a, v) {
        a.subscribe(
          sa(
            v,
            function (C) {
              return Vi(
                v,
                A,
                function () {
                  return v.next(C);
                },
                o
              );
            },
            function () {
              return Vi(
                v,
                A,
                function () {
                  return v.complete();
                },
                o
              );
            },
            function (C) {
              return Vi(
                v,
                A,
                function () {
                  return v.error(C);
                },
                o
              );
            }
          )
        );
      })
    );
  }
  function vl(A, o) {
    return (
      o === void 0 && (o = 0),
      Du(function (a, v) {
        v.add(
          A.schedule(function () {
            return a.subscribe(v);
          }, o)
        );
      })
    );
  }
  function td(A, o) {
    return qa(A).pipe(vl(o), ml(o));
  }
  function rd(A, o) {
    return qa(A).pipe(vl(o), ml(o));
  }
  function nd(A, o) {
    return new nn(function (a) {
      var v = 0;
      return o.schedule(function () {
        v === A.length
          ? a.complete()
          : (a.next(A[v++]), a.closed || this.schedule());
      });
    });
  }
  function id(A, o) {
    return new nn(function (a) {
      var v;
      return (
        Vi(a, o, function () {
          (v = A[ol]()),
            Vi(
              a,
              o,
              function () {
                var C, S, R;
                try {
                  (C = v.next()), (S = C.value), (R = C.done);
                } catch (G) {
                  a.error(G);
                  return;
                }
                R ? a.complete() : a.next(S);
              },
              0,
              !0
            );
        }),
        function () {
          return $t(v == null ? void 0 : v.return) && v.return();
        }
      );
    });
  }
  function bl(A, o) {
    if (!A) throw new Error("Iterable cannot be null");
    return new nn(function (a) {
      Vi(a, o, function () {
        var v = A[Symbol.asyncIterator]();
        Vi(
          a,
          o,
          function () {
            v.next().then(function (C) {
              C.done ? a.complete() : a.next(C.value);
            });
          },
          0,
          !0
        );
      });
    });
  }
  function ud(A, o) {
    return bl(ll(A), o);
  }
  function ad(A, o) {
    if (A != null) {
      if (il(A)) return td(A, o);
      if (js(A)) return nd(A, o);
      if (Ks(A)) return rd(A, o);
      if (ul(A)) return bl(A, o);
      if (sl(A)) return id(A, o);
      if (cl(A)) return ud(A, o);
    }
    throw al(A);
  }
  function od(A, o) {
    return o ? ad(A, o) : qa(A);
  }
  function sd(A, o) {
    return Du(function (a, v) {
      var C = 0;
      a.subscribe(
        sa(v, function (S) {
          v.next(A.call(o, S, C++));
        })
      );
    });
  }
  function ld(A, o) {
    return (
      o === void 0 && (o = rl),
      (A = A ?? cd),
      Du(function (a, v) {
        var C,
          S = !0;
        a.subscribe(
          sa(v, function (R) {
            var G = o(R);
            (S || !A(C, G)) && ((S = !1), (C = G), v.next(R));
          })
        );
      })
    );
  }
  function cd(A, o) {
    return A === o;
  }
  function fd(A) {
    return Du(function (o, a) {
      try {
        o.subscribe(a);
      } finally {
        a.add(A);
      }
    });
  }
  function dd(A, o) {
    return Du(function (a, v) {
      var C = null,
        S = 0,
        R = !1,
        G = function () {
          return R && !C && v.complete();
        };
      a.subscribe(
        sa(
          v,
          function (J) {
            C == null || C.unsubscribe();
            var ee = 0,
              De = S++;
            qa(A(J, De)).subscribe(
              (C = sa(
                v,
                function (Ve) {
                  return v.next(o ? o(J, Ve, De, ee++) : Ve);
                },
                function () {
                  (C = null), G();
                }
              ))
            );
          },
          function () {
            (R = !0), G();
          }
        )
      );
    });
  }
  const hd = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"] },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"]},
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
      "en-AU": { 0: ["Natasha"], 1: ["William"]},
      "he-IL": { 0: ["Hila"], 1: ["Avri"] },
      "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"] },
      "ar-TN": { 0: ["Reem"], 1: ["Hedi"] },
      "ar-LY": { 0: ["Iman"], 1: ["Omar"] },
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"] },
      "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"] },
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"] },
      "es-CR": { 0: ["Maria"], 1: ["Juan"] },
      "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
      "fr-CA": { 0: ["Sylvie"], 1: ["Antoine", "Jean"] },
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"] },
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"]},
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"] },
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"] },
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"] },
      "ga-IE": { 0: ["Orla"], 1: ["Colm"] },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"]},
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"] },
      "fil-PH": { 0: ["Blessica"], 1: ["Angelo"] },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"] },
      "es-HN": { 0: ["Karla"], 1: ["Carlos"] },
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"] },
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"] },
      "es-PR": { 0: ["Karina"], 1: ["Victor"] },
      "af-ZA": { 0: ["Adri"], 1: ["Willem"] },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"] },
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"]},
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
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"] },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"] },
      "es-AR": { 0: ["Elena"], 1: ["Tomas"] },
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"] },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"] },
      "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"] },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"] },
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"] },
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"] },
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
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"] },
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"] },
      "de-CH": { 0: ["Leni"], 1: ["Jan"] },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"]},
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"] },
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"] },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"]},
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"] },
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
      "kk-KZ": { 0: ["Aigul"], 1: ["Daulet"] },
      "ar-JO": { 0: ["Sana"], 1: ["Taim"] },
      "es-VE": { 0: ["Paola"], 1: ["Sebastian"] },
      "so-SO": { 0: ["Ubax"], 1: ["Muuse"] },
      "en-TZ": { 0: ["Imani"], 1: ["Elimu"] },
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"] },
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"] },
      "ur-IN": { 0: ["Gul"], 1: ["Salman"]},
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
      "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
    },
    pd = {
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
      "es-CO": { 0: ["Salome"], 1: ["Gonzalo"] },
      "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
      "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
      "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
      "ar-EG": { 0: ["Salma"], 1: ["Shakir"] },
      "es-CU": { 0: ["Belkys"], 1: ["Manuel"]},
      "fr-BE": { 0: ["Charline"], 1: ["Gerard"] },
      "ga-IE": {
        0: ["Orla"],
        1: ["Colm"],
        
      },
      "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
      "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
      "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
      "ar-MA": { 0: ["Mouna"], 1: ["Jamal"] },
      "fil-PH": {
        0: ["Blessica"],
        1: ["Angelo"],
        
      },
      "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
      "en-KE": { 0: ["Asilia"], 1: ["Chilemba"] },
      "es-HN": { 0: ["Karla"], 1: ["Carlos"] },
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"] },
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"]},
      "es-PR": { 0: ["Karina"], 1: ["Victor"] },
      "af-ZA": {
        0: ["Adri"],
        1: ["Willem"],
    
      },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"] },
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"] },
      "en-PH": { 0: ["Rosa"], 1: ["James"] },
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"] },
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"] },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"] },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"] },
      "es-AR": { 0: ["Elena"], 1: ["Tomas"]},
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"] },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"]},
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
      "lv-LV": { 0: ["Everita"], 1: ["Nils"]},
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
      "de-CH": { 0: ["Leni"], 1: ["Jan"]},
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"]},
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"]},
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"] },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"] },
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"] },
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
      "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"] },
      "sl-SI": { 0: ["Petra"], 1: ["Rok"] },
      "es-DO": { 0: ["Ramona"], 1: ["Emilio"]},
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
      "id-ID": {
        0: ["Gadis"],
        1: ["Ardi"],
       
      },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
    },
    gd = {
      "en-IE": { 0: ["Emily"], 1: ["Connor"] },
      "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
      "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"] },
      "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
      "en-IN": {
        0: ["Neerja", "NeerjaExpressive"],
        1: ["Prabhat"],
        
      },
      "es-BO": { 0: ["Sofia"], 1: ["Marcelo"] },
      "ar-SY": { 0: ["Amany"], 1: ["Laith"]},
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
      "hu-HU": { 0: ["Noemi"], 1: ["Tamas"] },
      "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"] },
      "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"] },
      "es-CR": { 0: ["Maria"], 1: ["Juan"] },
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
      "nb-NO": { 0: ["Pernille"], 1: ["Finn"] },
      "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"] },
      "es-PR": { 0: ["Karina"], 1: ["Victor"] },
      "af-ZA": { 0: ["Adri"], 1: ["Willem"] },
      "gl-ES": { 0: ["Sabela"], 1: ["Roi"] },
      "es-PY": { 0: ["Tania"], 1: ["Mario"] },
      "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
      "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
      "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
      "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
      "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
      "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"] },
      "en-PH": { 0: ["Rosa"], 1: ["James"] },
      "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
      "zh-TW": {
        0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
        1: ["zh-TW-YunJheNeural"],
        
      },
      "en-HK": { 0: ["Yan"], 1: ["Sam"] },
      "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
      "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"] },
      "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"] },
      "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"] },
      "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"] },
      "sq-AL": { 0: ["Anila"], 1: ["Ilir"] },
      "es-AR": { 0: ["Elena"], 1: ["Tomas"] },
      "sv-SE": { 0: ["Sofie"], 1: ["Mattias"] },
      "am-ET": { 0: ["Mekdes"], 1: ["Ameha"] },
      "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"] },
      "da-DK": { 0: ["Christel"], 1: ["Jeppe"] },
      "mn-MN": { 0: ["Yesui"], 1: ["Bataa"]},
      "uk-UA": { 0: ["Polina"], 1: ["Ostap"] },
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
      "hi-IN": { 0: ["Swara"], 1: ["Madhur"] },
      "en-NG": { 0: ["Ezinne"], 1: ["Abeo"] },
      "de-CH": { 0: ["Leni"], 1: ["Jan"] },
      "ja-JP": { 0: ["Nanami"], 1: ["Keita"] },
      "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
      "ar-YE": { 0: ["Maryam"], 1: ["Saleh"] },
      "ne-NP": { 0: ["Hemkala"], 1: ["Sagar"] },
      "ka-GE": { 0: ["Eka"], 1: ["Giorgi"] },
      "ar-QA": { 0: ["Amal"], 1: ["Moaz"] },
      "es-GT": { 0: ["Marta"], 1: ["Andres"]},
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
      "su-ID": { 0: ["Tuti"], 1: ["Jajang"] },
      "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
      "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"]},
      "ur-IN": { 0: ["Gul"], 1: ["Salman"] },
      "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
      "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
      "es-NI": { 0: ["Yolanda"], 1: ["Federico"]},
      "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
    },
    md = {
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
  class vd {
    constructor() {
      te(this, "_toLanguage");
      te(this, "_voice");
      te(this, "_voiceMap");
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
      const o = ge.i18n.getMessage("@@ui_locale");
      return o.startsWith("zh") ? hd : o === "ja" ? pd : o === "ko" ? gd : md;
    }
    initDefaultTargetLanguage() {
      const o = ge.i18n.getMessage("@@ui_locale").replace("_", "-");
      console.log("ui_locale: " + o);
      const a = this._voiceMap[o];
      if ((console.log("voiceEntry: " + JSON.stringify(a)), a)) return o;
      for (let v in this._voiceMap) if (v.startsWith(o)) return v;
      return "en-US";
    }
    initDefaultSelectedVoice() {
      return this._voiceMap[this._toLanguage][1][0];
    }
  }
  const wl = new vd();
  class ke {
    static get fromLanguage() {
      return this._fromLanguage;
    }
    static set fromLanguage(o) {
      this._fromLanguage = o;
    }
    static get toLanguage() {
      return this._toLanguage;
    }
    static set toLanguage(o) {
      this._toLanguage = o;
    }
    static get gender() {
      return this._gender;
    }
    static set gender(o) {
      this._gender = o;
    }
    static get voice() {
      return this._voice;
    }
    static set voice(o) {
      this._voice = o;
    }
    static get pauseVideo() {
      return this._pauseVideo;
    }
    static set pauseVideo(o) {
      this._pauseVideo = o;
    }
    static get originalVolume() {
      return this._originalVolume;
    }
    static set originalVolume(o) {
      this._originalVolume = o;
    }
    static get translationVolume() {
      return this._translationVolume;
    }
    static set translationVolume(o) {
      this._translationVolume = o;
    }
    static get adjustmentModel() {
      return this._adjustmentModel;
    }
    static set adjustmentModel(o) {
      this._adjustmentModel = o;
    }
    static get loadingContainerDiv() {
      return this._loadingContainerDiv;
    }
    static set loadingContainerDiv(o) {
      this._loadingContainerDiv = o;
    }
    static get translateEngine() {
      return this._translateEngine;
    }
    static set translateEngine(o) {
      this._translateEngine = o;
    }
  }
  te(ke, "_fromLanguage", "en-US"),
    te(ke, "_toLanguage", wl.toLanguage),
    te(ke, "_gender", "1"),
    te(ke, "_voice", wl.getDefaultVoiceValue()),
    te(ke, "_pauseVideo", !1),
    te(ke, "_originalVolume", 0),
    te(ke, "_translationVolume", 1),
    te(ke, "_adjustmentModel", !0),
    te(ke, "_loadingContainerDiv"),
    te(ke, "_translateEngine", "google");
  class Ln {
    static show() {
      We(`#${this.LOADING_ID}`).length > 0 ||
        We(ke.loadingContainerDiv).append(
          `<div id="${this.LOADING_ID}" class="ld ld-hourglass ld-spin-fast loading-centered" style="font-size:64px;color:#8da;position: absolute"></div>`
        );
    }
    static remove() {
      We(`#${this.LOADING_ID}`).remove();
    }
  }
  te(Ln, "LOADING_ID", "youtube-dubbing-loading");
  class Al {
    getMediaPlaybackDuration(o, a, v) {
      let C = o.getSubtitleTimeRange().getEndTime() - a.currentTime;
      return C < 0.1 && (C = 0.1), [C, v.duration];
    }
  }
  class yl {
    getMediaPlaybackDuration(o, a, v) {
      const C = o.getSubtitleTimeRange().getEndTime() - a.currentTime,
        S = o.getSubtitleTimeRange().getDuration() / v.duration,
        R = C / S;
      return (
        console.log(`segment video dur == ${C} , audio dur == ${R}`), [C, R]
      );
    }
  }
  class Dl {
    constructor(o) {
      this.mediaDurationCalculator = o;
    }
    adjusterPlaybackRate(o, a, v, C) {
      let [S, R] = this.mediaDurationCalculator.getMediaPlaybackDuration(
        o,
        a,
        v
      );
      if (((S = S / C), (R = R / C), S > R)) {
        let G = (S - R) / 2,
          J = S / (S - G),
          ee = R / (R + G);
        (a.playbackRate = this.clampVideo(J) * C),
          (v.playbackRate = this.clampAudio(ee) * C),
          console.log(
            `1. video playback rate == ${a.playbackRate} , audio playback rate == ${v.playbackRate}`
          );
      } else if (S < R) {
        let G = (R - S) / 2,
          J = S / (S + G),
          ee = R / (R - G);
        (a.playbackRate = this.clampVideo(J) * C),
          (v.playbackRate = this.clampAudio(ee) * C),
          console.log(
            `2. video playback rate == ${a.playbackRate} , audio playback rate == ${v.playbackRate}`
          );
      } else
        (a.playbackRate = C),
          (v.playbackRate = C),
          console.log(
            `3. video playback rate == ${a.playbackRate} , audio playback rate == ${v.playbackRate}`
          );
    }
    clampVideo(o) {
      if (o < 0.55) return 0.551;
      const a = Math.min(o, 1.251);
      return a === o && a.toString().length <= 4 ? a + 0.001 : a;
    }
    clampAudio(o) {
      return o < 0.9 ? 0.9 : Math.min(o, 1.5);
    }
  }
  class bd extends Dl {
    constructor() {
      super(new Al());
    }
  }
  class wd extends Dl {
    constructor() {
      super(new yl());
    }
  }
  class xl {
    constructor(o) {
      this.mediaDurationCalculator = o;
    }
    adjusterPlaybackRate(o, a, v, C) {
      const [S, R] = this.mediaDurationCalculator.getMediaPlaybackDuration(
        o,
        a,
        v
      );
      if (S == R) v.playbackRate = a.playbackRate;
      else {
        const G = S / a.playbackRate;
        (v.playbackRate = this.clampAudio(R / G)),
          (v.playbackRate === 0.5 || v.playbackRate === 4) &&
            console.log(
              "video dur == " +
                S +
                ",video.rate" +
                a.playbackRate +
                ",audio dur == " +
                R
            );
      }
    }
    clampAudio(o) {
      return o < 0.5 ? 0.5 : Math.min(o, 4);
    }
  }
  class Ad extends xl {
    constructor() {
      super(new Al());
    }
  }
  class yd extends xl {
    constructor() {
      super(new yl());
    }
  }
  class Zt {
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
        ? Zt.isYouTubeMobile()
        : Zt.isMobile();
    }
    static isMobile() {
      return "ontouchstart" in document.documentElement;
    }
    static isFirefoxMobile() {
      return this.isMobile() && !1;
    }
  }
  class Dd {
    constructor(o, a, v, C) {
      (this.text = o), (this.start = a), (this.end = v), (this.index = C);
    }
  }
  var si = ((A) => (
      (A[(A.GREEN = 0)] = "GREEN"),
      (A[(A.YELLOW = 1)] = "YELLOW"),
      (A[(A.RED = 2)] = "RED"),
      A
    ))(si || {}),
    Cl = { exports: {} };
  /*!
   * sweetalert
   * Released under the MIT License.
   */ (function (A, o) {
    (function (a, v) {
      A.exports = v();
    })(Ie, function () {
      function a(g, n) {
        var l =
          g == null
            ? null
            : (typeof Symbol < "u" && g[Symbol.iterator]) || g["@@iterator"];
        if (l != null) {
          var h,
            T,
            q,
            ie,
            Te = [],
            qe = !0,
            Je = !1;
          try {
            if (((q = (l = l.call(g)).next), n === 0)) {
              if (Object(l) !== l) return;
              qe = !1;
            } else
              for (
                ;
                !(qe = (h = q.call(l)).done) &&
                (Te.push(h.value), Te.length !== n);
                qe = !0
              );
          } catch (hu) {
            (Je = !0), (T = hu);
          } finally {
            try {
              if (
                !qe &&
                l.return != null &&
                ((ie = l.return()), Object(ie) !== ie)
              )
                return;
            } finally {
              if (Je) throw T;
            }
          }
          return Te;
        }
      }
      function v(g, n) {
        if (typeof g != "object" || !g) return g;
        var l = g[Symbol.toPrimitive];
        if (l !== void 0) {
          var h = l.call(g, n || "default");
          if (typeof h != "object") return h;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(g);
      }
      function C(g) {
        var n = v(g, "string");
        return typeof n == "symbol" ? n : String(n);
      }
      function S(g) {
        "@babel/helpers - typeof";
        return (
          (S =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    typeof Symbol == "function" &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          S(g)
        );
      }
      function R(g, n) {
        if (!(g instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function G(g, n) {
        for (var l = 0; l < n.length; l++) {
          var h = n[l];
          (h.enumerable = h.enumerable || !1),
            (h.configurable = !0),
            "value" in h && (h.writable = !0),
            Object.defineProperty(g, C(h.key), h);
        }
      }
      function J(g, n, l) {
        return (
          n && G(g.prototype, n),
          l && G(g, l),
          Object.defineProperty(g, "prototype", { writable: !1 }),
          g
        );
      }
      function ee(g, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (g.prototype = Object.create(n && n.prototype, {
          constructor: { value: g, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(g, "prototype", { writable: !1 }),
          n && Ve(g, n);
      }
      function De(g) {
        return (
          (De = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (l) {
                return l.__proto__ || Object.getPrototypeOf(l);
              }),
          De(g)
        );
      }
      function Ve(g, n) {
        return (
          (Ve = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (h, T) {
                return (h.__proto__ = T), h;
              }),
          Ve(g, n)
        );
      }
      function ze() {
        if (
          typeof Reflect > "u" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch {
          return !1;
        }
      }
      function tt(g, n, l) {
        return (
          ze()
            ? (tt = Reflect.construct.bind())
            : (tt = function (T, q, ie) {
                var Te = [null];
                Te.push.apply(Te, q);
                var qe = Function.bind.apply(T, Te),
                  Je = new qe();
                return ie && Ve(Je, ie.prototype), Je;
              }),
          tt.apply(null, arguments)
        );
      }
      function de(g) {
        if (g === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return g;
      }
      function se(g, n) {
        if (n && (typeof n == "object" || typeof n == "function")) return n;
        if (n !== void 0)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return de(g);
      }
      function at(g) {
        var n = ze();
        return function () {
          var h = De(g),
            T;
          if (n) {
            var q = De(this).constructor;
            T = Reflect.construct(h, arguments, q);
          } else T = h.apply(this, arguments);
          return se(this, T);
        };
      }
      function pe(g, n) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(g, n) &&
          ((g = De(g)), g !== null);

        );
        return g;
      }
      function _r() {
        return (
          typeof Reflect < "u" && Reflect.get
            ? (_r = Reflect.get.bind())
            : (_r = function (n, l, h) {
                var T = pe(n, l);
                if (T) {
                  var q = Object.getOwnPropertyDescriptor(T, l);
                  return q.get
                    ? q.get.call(arguments.length < 3 ? n : h)
                    : q.value;
                }
              }),
          _r.apply(this, arguments)
        );
      }
      function Tt(g, n) {
        return Lr(g) || a(g, n) || le(g, n) || Ke();
      }
      function Bt(g) {
        return kt(g) || d(g) || le(g) || Pe();
      }
      function kt(g) {
        if (Array.isArray(g)) return X(g);
      }
      function Lr(g) {
        if (Array.isArray(g)) return g;
      }
      function d(g) {
        if (
          (typeof Symbol < "u" && g[Symbol.iterator] != null) ||
          g["@@iterator"] != null
        )
          return Array.from(g);
      }
      function le(g, n) {
        if (g) {
          if (typeof g == "string") return X(g, n);
          var l = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (l === "Object" && g.constructor && (l = g.constructor.name),
            l === "Map" || l === "Set")
          )
            return Array.from(g);
          if (
            l === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return X(g, n);
        }
      }
      function X(g, n) {
        (n == null || n > g.length) && (n = g.length);
        for (var l = 0, h = new Array(n); l < n; l++) h[l] = g[l];
        return h;
      }
      function Pe() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ke() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ct(g, n) {
        var l = ot(g, n, "get");
        return Ce(g, l);
      }
      function me(g, n, l) {
        var h = ot(g, n, "set");
        return _t(g, h, l), l;
      }
      function ot(g, n, l) {
        if (!n.has(g))
          throw new TypeError(
            "attempted to " + l + " private field on non-instance"
          );
        return n.get(g);
      }
      function Ce(g, n) {
        return n.get ? n.get.call(g) : n.value;
      }
      function _t(g, n, l) {
        if (n.set) n.set.call(g, l);
        else {
          if (!n.writable)
            throw new TypeError("attempted to set read only private field");
          n.value = l;
        }
      }
      function _e(g, n) {
        if (n.has(g))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      }
      function ft(g, n, l) {
        _e(g, n), n.set(g, l);
      }
      var ce = 100,
        Q = {},
        Oe = function () {
          Q.previousActiveElement instanceof HTMLElement
            ? (Q.previousActiveElement.focus(),
              (Q.previousActiveElement = null))
            : document.body && document.body.focus();
        },
        Pt = function (n) {
          return new Promise(function (l) {
            if (!n) return l();
            var h = window.scrollX,
              T = window.scrollY;
            (Q.restoreFocusTimeout = setTimeout(function () {
              Oe(), l();
            }, ce)),
              window.scrollTo(h, T);
          });
        },
        or = "swal2-",
        un = [
          "container",
          "shown",
          "height-auto",
          "iosfix",
          "popup",
          "modal",
          "no-backdrop",
          "no-transition",
          "toast",
          "toast-shown",
          "show",
          "hide",
          "close",
          "title",
          "html-container",
          "actions",
          "confirm",
          "deny",
          "cancel",
          "default-outline",
          "footer",
          "icon",
          "icon-content",
          "image",
          "input",
          "file",
          "range",
          "select",
          "radio",
          "checkbox",
          "label",
          "textarea",
          "inputerror",
          "input-label",
          "validation-message",
          "progress-steps",
          "active-progress-step",
          "progress-step",
          "progress-step-line",
          "loader",
          "loading",
          "styled",
          "top",
          "top-start",
          "top-end",
          "top-left",
          "top-right",
          "center",
          "center-start",
          "center-end",
          "center-left",
          "center-right",
          "bottom",
          "bottom-start",
          "bottom-end",
          "bottom-left",
          "bottom-right",
          "grow-row",
          "grow-column",
          "grow-fullscreen",
          "rtl",
          "timer-progress-bar",
          "timer-progress-bar-container",
          "scrollbar-measure",
          "icon-success",
          "icon-warning",
          "icon-info",
          "icon-question",
          "icon-error",
        ],
        U = un.reduce(function (g, n) {
          return (g[n] = or + n), g;
        }, {}),
        wr = ["success", "warning", "info", "question", "error"],
        dt = wr.reduce(function (g, n) {
          return (g[n] = or + n), g;
        }, {}),
        Ar = "SweetAlert2:",
        sr = function (n) {
          return n.charAt(0).toUpperCase() + n.slice(1);
        },
        rt = function (n) {
          console.warn(
            "".concat(Ar, " ").concat(S(n) === "object" ? n.join(" ") : n)
          );
        },
        Nt = function (n) {
          console.error("".concat(Ar, " ").concat(n));
        },
        qt = [],
        an = function (n) {
          qt.includes(n) || (qt.push(n), rt(n));
        },
        Mt = function (n, l) {
          an(
            '"'
              .concat(
                n,
                '" is deprecated and will be removed in the next major release. Please use "'
              )
              .concat(l, '" instead.')
          );
        },
        Jt = function (n) {
          return typeof n == "function" ? n() : n;
        },
        Fr = function (n) {
          return n && typeof n.toPromise == "function";
        },
        Lt = function (n) {
          return Fr(n) ? n.toPromise() : Promise.resolve(n);
        },
        lr = function (n) {
          return n && Promise.resolve(n) === n;
        },
        Ot = function () {
          return document.body.querySelector(".".concat(U.container));
        },
        Vr = function (n) {
          var l = Ot();
          return l ? l.querySelector(n) : null;
        },
        st = function (n) {
          return Vr(".".concat(n));
        },
        Ee = function () {
          return st(U.popup);
        },
        cr = function () {
          return st(U.icon);
        },
        Wn = function () {
          return st(U["icon-content"]);
        },
        fe = function () {
          return st(U.title);
        },
        Ft = function () {
          return st(U["html-container"]);
        },
        Rn = function () {
          return st(U.image);
        },
        on = function () {
          return st(U["progress-steps"]);
        },
        In = function () {
          return st(U["validation-message"]);
        },
        Xt = function () {
          return Vr(".".concat(U.actions, " .").concat(U.confirm));
        },
        Gr = function () {
          return Vr(".".concat(U.actions, " .").concat(U.cancel));
        },
        Qt = function () {
          return Vr(".".concat(U.actions, " .").concat(U.deny));
        },
        yr = function () {
          return st(U["input-label"]);
        },
        Wt = function () {
          return Vr(".".concat(U.loader));
        },
        fr = function () {
          return st(U.actions);
        },
        hi = function () {
          return st(U.footer);
        },
        Wr = function () {
          return st(U["timer-progress-bar"]);
        },
        pi = function () {
          return st(U.close);
        },
        Eu = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
        Wi = function () {
          var n = Ee();
          if (!n) return [];
          var l = n.querySelectorAll(
              '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
            ),
            h = Array.from(l).sort(function (ie, Te) {
              var qe = parseInt(ie.getAttribute("tabindex") || "0"),
                Je = parseInt(Te.getAttribute("tabindex") || "0");
              return qe > Je ? 1 : qe < Je ? -1 : 0;
            }),
            T = n.querySelectorAll(Eu),
            q = Array.from(T).filter(function (ie) {
              return ie.getAttribute("tabindex") !== "-1";
            });
          return Bt(new Set(h.concat(q))).filter(function (ie) {
            return er(ie);
          });
        },
        zr = function () {
          return (
            mt(document.body, U.shown) &&
            !mt(document.body, U["toast-shown"]) &&
            !mt(document.body, U["no-backdrop"])
          );
        },
        jr = function () {
          var n = Ee();
          return n ? mt(n, U.toast) : !1;
        },
        Su = function () {
          var n = Ee();
          return n ? n.hasAttribute("data-loading") : !1;
        },
        zt = function (n, l) {
          if (((n.textContent = ""), l)) {
            var h = new DOMParser(),
              T = h.parseFromString(l, "text/html"),
              q = T.querySelector("head");
            q &&
              Array.from(q.childNodes).forEach(function (Te) {
                n.appendChild(Te);
              });
            var ie = T.querySelector("body");
            ie &&
              Array.from(ie.childNodes).forEach(function (Te) {
                Te instanceof HTMLVideoElement || Te instanceof HTMLAudioElement
                  ? n.appendChild(Te.cloneNode(!0))
                  : n.appendChild(Te);
              });
          }
        },
        mt = function (n, l) {
          if (!l) return !1;
          for (var h = l.split(/\s+/), T = 0; T < h.length; T++)
            if (!n.classList.contains(h[T])) return !1;
          return !0;
        },
        jt = function (n, l) {
          Array.from(n.classList).forEach(function (h) {
            !Object.values(U).includes(h) &&
              !Object.values(dt).includes(h) &&
              !Object.values(l.showClass || {}).includes(h) &&
              n.classList.remove(h);
          });
        },
        Ht = function (n, l, h) {
          if ((jt(n, l), l.customClass && l.customClass[h])) {
            if (
              typeof l.customClass[h] != "string" &&
              !l.customClass[h].forEach
            ) {
              rt(
                "Invalid type of customClass."
                  .concat(h, '! Expected string or iterable object, got "')
                  .concat(S(l.customClass[h]), '"')
              );
              return;
            }
            Le(n, l.customClass[h]);
          }
        },
        gi = function (n, l) {
          if (!l) return null;
          switch (l) {
            case "select":
            case "textarea":
            case "file":
              return n.querySelector(".".concat(U.popup, " > .").concat(U[l]));
            case "checkbox":
              return n.querySelector(
                ".".concat(U.popup, " > .").concat(U.checkbox, " input")
              );
            case "radio":
              return (
                n.querySelector(
                  ".".concat(U.popup, " > .").concat(U.radio, " input:checked")
                ) ||
                n.querySelector(
                  "."
                    .concat(U.popup, " > .")
                    .concat(U.radio, " input:first-child")
                )
              );
            case "range":
              return n.querySelector(
                ".".concat(U.popup, " > .").concat(U.range, " input")
              );
            default:
              return n.querySelector(
                ".".concat(U.popup, " > .").concat(U.input)
              );
          }
        },
        zi = function (n) {
          if ((n.focus(), n.type !== "file")) {
            var l = n.value;
            (n.value = ""), (n.value = l);
          }
        },
        ji = function (n, l, h) {
          !n ||
            !l ||
            (typeof l == "string" && (l = l.split(/\s+/).filter(Boolean)),
            l.forEach(function (T) {
              Array.isArray(n)
                ? n.forEach(function (q) {
                    h ? q.classList.add(T) : q.classList.remove(T);
                  })
                : h
                ? n.classList.add(T)
                : n.classList.remove(T);
            }));
        },
        Le = function (n, l) {
          ji(n, l, !0);
        },
        Ut = function (n, l) {
          ji(n, l, !1);
        },
        dr = function (n, l) {
          for (var h = Array.from(n.children), T = 0; T < h.length; T++) {
            var q = h[T];
            if (q instanceof HTMLElement && mt(q, l)) return q;
          }
        },
        Rr = function (n, l, h) {
          h === "".concat(parseInt(h)) && (h = parseInt(h)),
            h || parseInt(h) === 0
              ? n.style.setProperty(
                  l,
                  typeof h == "number" ? "".concat(h, "px") : h
                )
              : n.style.removeProperty(l);
        },
        At = function (n) {
          var l =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : "flex";
          n && (n.style.display = l);
        },
        Rt = function (n) {
          n && (n.style.display = "none");
        },
        Ki = function (n) {
          var l =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : "block";
          n &&
            new MutationObserver(function () {
              zn(n, n.innerHTML, l);
            }).observe(n, { childList: !0, subtree: !0 });
        },
        Yi = function (n, l, h, T) {
          var q = n.querySelector(l);
          q && q.style.setProperty(h, T);
        },
        zn = function (n, l) {
          var h =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : "flex";
          l ? At(n, h) : Rt(n);
        },
        er = function (n) {
          return !!(
            n &&
            (n.offsetWidth || n.offsetHeight || n.getClientRects().length)
          );
        },
        Tu = function () {
          return !er(Xt()) && !er(Qt()) && !er(Gr());
        },
        $i = function (n) {
          return n.scrollHeight > n.clientHeight;
        },
        vn = function (n) {
          var l = window.getComputedStyle(n),
            h = parseFloat(l.getPropertyValue("animation-duration") || "0"),
            T = parseFloat(l.getPropertyValue("transition-duration") || "0");
          return h > 0 || T > 0;
        },
        mi = function (n) {
          var l =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            h = Wr();
          h &&
            er(h) &&
            (l && ((h.style.transition = "none"), (h.style.width = "100%")),
            setTimeout(function () {
              (h.style.transition = "width ".concat(n / 1e3, "s linear")),
                (h.style.width = "0%");
            }, 10));
        },
        Zi = function () {
          var n = Wr();
          if (n) {
            var l = parseInt(window.getComputedStyle(n).width);
            n.style.removeProperty("transition"), (n.style.width = "100%");
            var h = parseInt(window.getComputedStyle(n).width),
              T = (l / h) * 100;
            n.style.width = "".concat(T, "%");
          }
        },
        vi = function () {
          return typeof window > "u" || typeof document > "u";
        },
        bi = `
 <div aria-labelledby="`
          .concat(U.title, '" aria-describedby="')
          .concat(U["html-container"], '" class="')
          .concat(
            U.popup,
            `" tabindex="-1">
   <button type="button" class="`
          )
          .concat(
            U.close,
            `"></button>
   <ul class="`
          )
          .concat(
            U["progress-steps"],
            `"></ul>
   <div class="`
          )
          .concat(
            U.icon,
            `"></div>
   <img class="`
          )
          .concat(
            U.image,
            `" />
   <h2 class="`
          )
          .concat(U.title, '" id="')
          .concat(
            U.title,
            `"></h2>
   <div class="`
          )
          .concat(U["html-container"], '" id="')
          .concat(
            U["html-container"],
            `"></div>
   <input class="`
          )
          .concat(U.input, '" id="')
          .concat(
            U.input,
            `" />
   <input type="file" class="`
          )
          .concat(
            U.file,
            `" />
   <div class="`
          )
          .concat(
            U.range,
            `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`
          )
          .concat(U.select, '" id="')
          .concat(
            U.select,
            `"></select>
   <div class="`
          )
          .concat(
            U.radio,
            `"></div>
   <label class="`
          )
          .concat(
            U.checkbox,
            `">
     <input type="checkbox" id="`
          )
          .concat(
            U.checkbox,
            `" />
     <span class="`
          )
          .concat(
            U.label,
            `"></span>
   </label>
   <textarea class="`
          )
          .concat(U.textarea, '" id="')
          .concat(
            U.textarea,
            `"></textarea>
   <div class="`
          )
          .concat(U["validation-message"], '" id="')
          .concat(
            U["validation-message"],
            `"></div>
   <div class="`
          )
          .concat(
            U.actions,
            `">
     <div class="`
          )
          .concat(
            U.loader,
            `"></div>
     <button type="button" class="`
          )
          .concat(
            U.confirm,
            `"></button>
     <button type="button" class="`
          )
          .concat(
            U.deny,
            `"></button>
     <button type="button" class="`
          )
          .concat(
            U.cancel,
            `"></button>
   </div>
   <div class="`
          )
          .concat(
            U.footer,
            `"></div>
   <div class="`
          )
          .concat(
            U["timer-progress-bar-container"],
            `">
     <div class="`
          )
          .concat(
            U["timer-progress-bar"],
            `"></div>
   </div>
 </div>
`
          )
          .replace(/(^|\n)\s*/g, ""),
        Bu = function () {
          var n = Ot();
          return n
            ? (n.remove(),
              Ut(
                [document.documentElement, document.body],
                [U["no-backdrop"], U["toast-shown"], U["has-column"]]
              ),
              !0)
            : !1;
        },
        Ir = function () {
          Q.currentInstance.resetValidationMessage();
        },
        jn = function () {
          var n = Ee(),
            l = dr(n, U.input),
            h = dr(n, U.file),
            T = n.querySelector(".".concat(U.range, " input")),
            q = n.querySelector(".".concat(U.range, " output")),
            ie = dr(n, U.select),
            Te = n.querySelector(".".concat(U.checkbox, " input")),
            qe = dr(n, U.textarea);
          (l.oninput = Ir),
            (h.onchange = Ir),
            (ie.onchange = Ir),
            (Te.onchange = Ir),
            (qe.oninput = Ir),
            (T.oninput = function () {
              Ir(), (q.value = T.value);
            }),
            (T.onchange = function () {
              Ir(), (q.value = T.value);
            });
        },
        Kn = function (n) {
          return typeof n == "string" ? document.querySelector(n) : n;
        },
        ku = function (n) {
          var l = Ee();
          l.setAttribute("role", n.toast ? "alert" : "dialog"),
            l.setAttribute("aria-live", n.toast ? "polite" : "assertive"),
            n.toast || l.setAttribute("aria-modal", "true");
        },
        _u = function (n) {
          window.getComputedStyle(n).direction === "rtl" && Le(Ot(), U.rtl);
        },
        Lu = function (n) {
          var l = Bu();
          if (vi()) {
            Nt("SweetAlert2 requires document to initialize");
            return;
          }
          var h = document.createElement("div");
          (h.className = U.container),
            l && Le(h, U["no-transition"]),
            zt(h, bi);
          var T = Kn(n.target);
          T.appendChild(h), ku(n), _u(T), jn();
        },
        wi = function (n, l) {
          n instanceof HTMLElement
            ? l.appendChild(n)
            : S(n) === "object"
            ? Ai(n, l)
            : n && zt(l, n);
        },
        Ai = function (n, l) {
          n.jquery ? Fu(l, n) : zt(l, n.toString());
        },
        Fu = function (n, l) {
          if (((n.textContent = ""), 0 in l))
            for (var h = 0; h in l; h++) n.appendChild(l[h].cloneNode(!0));
          else n.appendChild(l.cloneNode(!0));
        },
        bn = (function () {
          if (vi()) return !1;
          var g = document.createElement("div");
          return typeof g.style.webkitAnimation < "u"
            ? "webkitAnimationEnd"
            : typeof g.style.animation < "u"
            ? "animationend"
            : !1;
        })(),
        Ru = function (n, l) {
          var h = fr(),
            T = Wt();
          !h ||
            !T ||
            (!l.showConfirmButton && !l.showDenyButton && !l.showCancelButton
              ? Rt(h)
              : At(h),
            Ht(h, l, "actions"),
            Iu(h, T, l),
            zt(T, l.loaderHtml || ""),
            Ht(T, l, "loader"));
        };
      function Iu(g, n, l) {
        var h = Xt(),
          T = Qt(),
          q = Gr();
        !h ||
          !T ||
          !q ||
          (Yn(h, "confirm", l),
          Yn(T, "deny", l),
          Yn(q, "cancel", l),
          Ji(h, T, q, l),
          l.reverseButtons &&
            (l.toast
              ? (g.insertBefore(q, h), g.insertBefore(T, h))
              : (g.insertBefore(q, n),
                g.insertBefore(T, n),
                g.insertBefore(h, n))));
      }
      function Ji(g, n, l, h) {
        if (!h.buttonsStyling) {
          Ut([g, n, l], U.styled);
          return;
        }
        Le([g, n, l], U.styled),
          h.confirmButtonColor &&
            ((g.style.backgroundColor = h.confirmButtonColor),
            Le(g, U["default-outline"])),
          h.denyButtonColor &&
            ((n.style.backgroundColor = h.denyButtonColor),
            Le(n, U["default-outline"])),
          h.cancelButtonColor &&
            ((l.style.backgroundColor = h.cancelButtonColor),
            Le(l, U["default-outline"]));
      }
      function Yn(g, n, l) {
        var h = sr(n);
        zn(g, l["show".concat(h, "Button")], "inline-block"),
          zt(g, l["".concat(n, "ButtonText")] || ""),
          g.setAttribute(
            "aria-label",
            l["".concat(n, "ButtonAriaLabel")] || ""
          ),
          (g.className = U[n]),
          Ht(g, l, "".concat(n, "Button"));
      }
      var Vt = function (n, l) {
          var h = pi();
          h &&
            (zt(h, l.closeButtonHtml || ""),
            Ht(h, l, "closeButton"),
            zn(h, l.showCloseButton),
            h.setAttribute("aria-label", l.closeButtonAriaLabel || ""));
        },
        wn = function (n, l) {
          var h = Ot();
          h &&
            (Pn(h, l.backdrop),
            ca(h, l.position),
            Pu(h, l.grow),
            Ht(h, l, "container"));
        };
      function Pn(g, n) {
        typeof n == "string"
          ? (g.style.background = n)
          : n ||
            Le([document.documentElement, document.body], U["no-backdrop"]);
      }
      function ca(g, n) {
        n &&
          (n in U
            ? Le(g, U[n])
            : (rt(
                'The "position" parameter is not valid, defaulting to "center"'
              ),
              Le(g, U.center)));
      }
      function Pu(g, n) {
        n && Le(g, U["grow-".concat(n)]);
      }
      var Ye = { innerParams: new WeakMap(), domCache: new WeakMap() },
        Xi = [
          "input",
          "file",
          "range",
          "select",
          "radio",
          "checkbox",
          "textarea",
        ],
        yi = function (n, l) {
          var h = Ee();
          if (h) {
            var T = Ye.innerParams.get(n),
              q = !T || l.input !== T.input;
            Xi.forEach(function (ie) {
              var Te = dr(h, U[ie]);
              Te &&
                (eu(ie, l.inputAttributes),
                (Te.className = U[ie]),
                q && Rt(Te));
            }),
              l.input && (q && Qi(l), Dr(l));
          }
        },
        Qi = function (n) {
          if (n.input) {
            if (!Xe[n.input]) {
              Nt(
                "Unexpected type of input! Expected "
                  .concat(Object.keys(Xe).join(" | "), ', got "')
                  .concat(n.input, '"')
              );
              return;
            }
            var l = Di(n.input),
              h = Xe[n.input](l, n);
            At(l),
              n.inputAutoFocus &&
                setTimeout(function () {
                  zi(h);
                });
          }
        },
        Nu = function (n) {
          for (var l = 0; l < n.attributes.length; l++) {
            var h = n.attributes[l].name;
            ["id", "type", "value", "style"].includes(h) ||
              n.removeAttribute(h);
          }
        },
        eu = function (n, l) {
          var h = gi(Ee(), n);
          if (h) {
            Nu(h);
            for (var T in l) h.setAttribute(T, l[T]);
          }
        },
        Dr = function (n) {
          var l = Di(n.input);
          S(n.customClass) === "object" && Le(l, n.customClass.input);
        },
        $n = function (n, l) {
          (!n.placeholder || l.inputPlaceholder) &&
            (n.placeholder = l.inputPlaceholder);
        },
        xr = function (n, l, h) {
          if (h.inputLabel) {
            var T = document.createElement("label"),
              q = U["input-label"];
            T.setAttribute("for", n.id),
              (T.className = q),
              S(h.customClass) === "object" && Le(T, h.customClass.inputLabel),
              (T.innerText = h.inputLabel),
              l.insertAdjacentElement("beforebegin", T);
          }
        },
        Di = function (n) {
          return dr(Ee(), U[n] || U.input);
        },
        Kr = function (n, l) {
          ["string", "number"].includes(S(l))
            ? (n.value = "".concat(l))
            : lr(l) ||
              rt(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  S(l),
                  '"'
                )
              );
        },
        Xe = {};
      (Xe.text =
        Xe.email =
        Xe.password =
        Xe.number =
        Xe.tel =
        Xe.url =
        Xe.search =
        Xe.date =
        Xe["datetime-local"] =
        Xe.time =
        Xe.week =
        Xe.month =
          function (g, n) {
            return (
              Kr(g, n.inputValue), xr(g, g, n), $n(g, n), (g.type = n.input), g
            );
          }),
        (Xe.file = function (g, n) {
          return xr(g, g, n), $n(g, n), g;
        }),
        (Xe.range = function (g, n) {
          var l = g.querySelector("input"),
            h = g.querySelector("output");
          return (
            Kr(l, n.inputValue),
            (l.type = n.input),
            Kr(h, n.inputValue),
            xr(l, g, n),
            g
          );
        }),
        (Xe.select = function (g, n) {
          if (((g.textContent = ""), n.inputPlaceholder)) {
            var l = document.createElement("option");
            zt(l, n.inputPlaceholder),
              (l.value = ""),
              (l.disabled = !0),
              (l.selected = !0),
              g.appendChild(l);
          }
          return xr(g, g, n), g;
        }),
        (Xe.radio = function (g) {
          return (g.textContent = ""), g;
        }),
        (Xe.checkbox = function (g, n) {
          var l = gi(Ee(), "checkbox");
          (l.value = "1"), (l.checked = !!n.inputValue);
          var h = g.querySelector("span");
          return zt(h, n.inputPlaceholder), l;
        }),
        (Xe.textarea = function (g, n) {
          Kr(g, n.inputValue), $n(g, n), xr(g, g, n);
          var l = function (T) {
            return (
              parseInt(window.getComputedStyle(T).marginLeft) +
              parseInt(window.getComputedStyle(T).marginRight)
            );
          };
          return (
            setTimeout(function () {
              if ("MutationObserver" in window) {
                var h = parseInt(window.getComputedStyle(Ee()).width),
                  T = function () {
                    if (document.body.contains(g)) {
                      var ie = g.offsetWidth + l(g);
                      ie > h
                        ? (Ee().style.width = "".concat(ie, "px"))
                        : Rr(Ee(), "width", n.width);
                    }
                  };
                new MutationObserver(T).observe(g, {
                  attributes: !0,
                  attributeFilter: ["style"],
                });
              }
            }),
            g
          );
        });
      var sn = function (n, l) {
          var h = Ft();
          h &&
            (Ki(h),
            Ht(h, l, "htmlContainer"),
            l.html
              ? (wi(l.html, h), At(h, "block"))
              : l.text
              ? ((h.textContent = l.text), At(h, "block"))
              : Rt(h),
            yi(n, l));
        },
        tu = function (n, l) {
          var h = hi();
          h &&
            (Ki(h),
            zn(h, l.footer, "block"),
            l.footer && wi(l.footer, h),
            Ht(h, l, "footer"));
        },
        qu = function (n, l) {
          var h = Ye.innerParams.get(n),
            T = cr();
          if (T) {
            if (h && l.icon === h.icon) {
              nu(T, l), An(T, l);
              return;
            }
            if (!l.icon && !l.iconHtml) {
              Rt(T);
              return;
            }
            if (l.icon && Object.keys(dt).indexOf(l.icon) === -1) {
              Nt(
                'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                  l.icon,
                  '"'
                )
              ),
                Rt(T);
              return;
            }
            At(T), nu(T, l), An(T, l), Le(T, l.showClass && l.showClass.icon);
          }
        },
        An = function (n, l) {
          for (var h = 0, T = Object.entries(dt); h < T.length; h++) {
            var q = Tt(T[h], 2),
              ie = q[0],
              Te = q[1];
            l.icon !== ie && Ut(n, Te);
          }
          Le(n, l.icon && dt[l.icon]), fa(n, l), ru(), Ht(n, l, "icon");
        },
        ru = function () {
          var n = Ee();
          if (n)
            for (
              var l = window
                  .getComputedStyle(n)
                  .getPropertyValue("background-color"),
                h = n.querySelectorAll(
                  "[class^=swal2-success-circular-line], .swal2-success-fix"
                ),
                T = 0;
              T < h.length;
              T++
            )
              h[T].style.backgroundColor = l;
        },
        xi = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
        Mu = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
        nu = function (n, l) {
          if (!(!l.icon && !l.iconHtml)) {
            var h = n.innerHTML,
              T = "";
            if (l.iconHtml) T = Ci(l.iconHtml);
            else if (l.icon === "success")
              (T = xi), (h = h.replace(/ style=".*?"/g, ""));
            else if (l.icon === "error") T = Mu;
            else if (l.icon) {
              var q = { question: "?", warning: "!", info: "i" };
              T = Ci(q[l.icon]);
            }
            h.trim() !== T.trim() && zt(n, T);
          }
        },
        fa = function (n, l) {
          if (l.iconColor) {
            (n.style.color = l.iconColor), (n.style.borderColor = l.iconColor);
            for (
              var h = 0,
                T = [
                  ".swal2-success-line-tip",
                  ".swal2-success-line-long",
                  ".swal2-x-mark-line-left",
                  ".swal2-x-mark-line-right",
                ];
              h < T.length;
              h++
            ) {
              var q = T[h];
              Yi(n, q, "backgroundColor", l.iconColor);
            }
            Yi(n, ".swal2-success-ring", "borderColor", l.iconColor);
          }
        },
        Ci = function (n) {
          return '<div class="'
            .concat(U["icon-content"], '">')
            .concat(n, "</div>");
        },
        da = function (n, l) {
          var h = Rn();
          if (h) {
            if (!l.imageUrl) {
              Rt(h);
              return;
            }
            At(h, ""),
              h.setAttribute("src", l.imageUrl),
              h.setAttribute("alt", l.imageAlt || ""),
              Rr(h, "width", l.imageWidth),
              Rr(h, "height", l.imageHeight),
              (h.className = U.image),
              Ht(h, l, "image");
          }
        },
        ha = function (n, l) {
          var h = Ot(),
            T = Ee();
          if (!(!h || !T)) {
            if (l.toast) {
              Rr(h, "width", l.width), (T.style.width = "100%");
              var q = Wt();
              q && T.insertBefore(q, cr());
            } else Rr(T, "width", l.width);
            Rr(T, "padding", l.padding),
              l.color && (T.style.color = l.color),
              l.background && (T.style.background = l.background),
              Rt(In()),
              iu(T, l);
          }
        },
        iu = function (n, l) {
          var h = l.showClass || {};
          (n.className = "".concat(U.popup, " ").concat(er(n) ? h.popup : "")),
            l.toast
              ? (Le(
                  [document.documentElement, document.body],
                  U["toast-shown"]
                ),
                Le(n, U.toast))
              : Le(n, U.modal),
            Ht(n, l, "popup"),
            typeof l.customClass == "string" && Le(n, l.customClass),
            l.icon && Le(n, U["icon-".concat(l.icon)]);
        },
        pa = function (n, l) {
          var h = on();
          if (h) {
            var T = l.progressSteps,
              q = l.currentProgressStep;
            if (!T || T.length === 0 || q === void 0) {
              Rt(h);
              return;
            }
            At(h),
              (h.textContent = ""),
              q >= T.length &&
                rt(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              T.forEach(function (ie, Te) {
                var qe = uu(ie);
                if (
                  (h.appendChild(qe),
                  Te === q && Le(qe, U["active-progress-step"]),
                  Te !== T.length - 1)
                ) {
                  var Je = ga(l);
                  h.appendChild(Je);
                }
              });
          }
        },
        uu = function (n) {
          var l = document.createElement("li");
          return Le(l, U["progress-step"]), zt(l, n), l;
        },
        ga = function (n) {
          var l = document.createElement("li");
          return (
            Le(l, U["progress-step-line"]),
            n.progressStepsDistance && Rr(l, "width", n.progressStepsDistance),
            l
          );
        },
        ma = function (n, l) {
          var h = fe();
          h &&
            (Ki(h),
            zn(h, l.title || l.titleText, "block"),
            l.title && wi(l.title, h),
            l.titleText && (h.innerText = l.titleText),
            Ht(h, l, "title"));
        },
        Ou = function (n, l) {
          ha(n, l),
            wn(n, l),
            pa(n, l),
            qu(n, l),
            da(n, l),
            ma(n, l),
            Vt(n, l),
            sn(n, l),
            Ru(n, l),
            tu(n, l);
          var h = Ee();
          typeof l.didRender == "function" && h && l.didRender(h);
        },
        va = function () {
          return er(Ee());
        },
        Hu = function () {
          var n;
          return (n = Xt()) === null || n === void 0 ? void 0 : n.click();
        },
        nt = function () {
          var n;
          return (n = Qt()) === null || n === void 0 ? void 0 : n.click();
        },
        Qe = function () {
          var n;
          return (n = Gr()) === null || n === void 0 ? void 0 : n.click();
        },
        yn = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer",
        }),
        Ei = function (n) {
          n.keydownTarget &&
            n.keydownHandlerAdded &&
            (n.keydownTarget.removeEventListener("keydown", n.keydownHandler, {
              capture: n.keydownListenerCapture,
            }),
            (n.keydownHandlerAdded = !1));
        },
        Uu = function (n, l, h) {
          Ei(n),
            l.toast ||
              ((n.keydownHandler = function (T) {
                return Vu(l, T, h);
              }),
              (n.keydownTarget = l.keydownListenerCapture ? window : Ee()),
              (n.keydownListenerCapture = l.keydownListenerCapture),
              n.keydownTarget.addEventListener("keydown", n.keydownHandler, {
                capture: n.keydownListenerCapture,
              }),
              (n.keydownHandlerAdded = !0));
        },
        Si = function (n, l) {
          var h,
            T = Wi();
          if (T.length) {
            (n = n + l),
              n === T.length ? (n = 0) : n === -1 && (n = T.length - 1),
              T[n].focus();
            return;
          }
          (h = Ee()) === null || h === void 0 || h.focus();
        },
        Ti = ["ArrowRight", "ArrowDown"],
        ba = ["ArrowLeft", "ArrowUp"],
        Vu = function (n, l, h) {
          n &&
            (l.isComposing ||
              l.keyCode === 229 ||
              (n.stopKeydownPropagation && l.stopPropagation(),
              l.key === "Enter"
                ? wa(l, n)
                : l.key === "Tab"
                ? ht(l)
                : [].concat(Ti, ba).includes(l.key)
                ? Bi(l.key)
                : l.key === "Escape" && Yr(l, n, h)));
        },
        wa = function (n, l) {
          if (Jt(l.allowEnterKey)) {
            var h = gi(Ee(), l.input);
            if (
              n.target &&
              h &&
              n.target instanceof HTMLElement &&
              n.target.outerHTML === h.outerHTML
            ) {
              if (["textarea", "file"].includes(l.input)) return;
              Hu(), n.preventDefault();
            }
          }
        },
        ht = function (n) {
          for (var l = n.target, h = Wi(), T = -1, q = 0; q < h.length; q++)
            if (l === h[q]) {
              T = q;
              break;
            }
          n.shiftKey ? Si(T, -1) : Si(T, 1),
            n.stopPropagation(),
            n.preventDefault();
        },
        Bi = function (n) {
          var l = fr(),
            h = Xt(),
            T = Qt(),
            q = Gr();
          if (!(!l || !h || !T || !q)) {
            var ie = [h, T, q];
            if (
              !(
                document.activeElement instanceof HTMLElement &&
                !ie.includes(document.activeElement)
              )
            ) {
              var Te = Ti.includes(n)
                  ? "nextElementSibling"
                  : "previousElementSibling",
                qe = document.activeElement;
              if (qe) {
                for (var Je = 0; Je < l.children.length; Je++) {
                  if (((qe = qe[Te]), !qe)) return;
                  if (qe instanceof HTMLButtonElement && er(qe)) break;
                }
                qe instanceof HTMLButtonElement && qe.focus();
              }
            }
          }
        },
        Yr = function (n, l, h) {
          Jt(l.allowEscapeKey) && (n.preventDefault(), h(yn.esc));
        },
        Dn = {
          swalPromiseResolve: new WeakMap(),
          swalPromiseReject: new WeakMap(),
        },
        au = function () {
          var n = Array.from(document.body.children);
          n.forEach(function (l) {
            l === Ot() ||
              l.contains(Ot()) ||
              (l.hasAttribute("aria-hidden") &&
                l.setAttribute(
                  "data-previous-aria-hidden",
                  l.getAttribute("aria-hidden") || ""
                ),
              l.setAttribute("aria-hidden", "true"));
          });
        },
        tr = function () {
          var n = Array.from(document.body.children);
          n.forEach(function (l) {
            l.hasAttribute("data-previous-aria-hidden")
              ? (l.setAttribute(
                  "aria-hidden",
                  l.getAttribute("data-previous-aria-hidden") || ""
                ),
                l.removeAttribute("data-previous-aria-hidden"))
              : l.removeAttribute("aria-hidden");
          });
        },
        r = typeof window < "u" && !!window.GestureEvent,
        u = function () {
          if (r && !mt(document.body, U.iosfix)) {
            var n = document.body.scrollTop;
            (document.body.style.top = "".concat(n * -1, "px")),
              Le(document.body, U.iosfix),
              s();
          }
        },
        s = function () {
          var n = Ot();
          if (n) {
            var l;
            (n.ontouchstart = function (h) {
              l = f(h);
            }),
              (n.ontouchmove = function (h) {
                l && (h.preventDefault(), h.stopPropagation());
              });
          }
        },
        f = function (n) {
          var l = n.target,
            h = Ot(),
            T = Ft();
          return !h || !T || p(n) || m(n)
            ? !1
            : l === h ||
                (!$i(h) &&
                  l instanceof HTMLElement &&
                  l.tagName !== "INPUT" &&
                  l.tagName !== "TEXTAREA" &&
                  !($i(T) && T.contains(l)));
        },
        p = function (n) {
          return (
            n.touches && n.touches.length && n.touches[0].touchType === "stylus"
          );
        },
        m = function (n) {
          return n.touches && n.touches.length > 1;
        },
        w = function () {
          if (mt(document.body, U.iosfix)) {
            var n = parseInt(document.body.style.top, 10);
            Ut(document.body, U.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = n * -1);
          }
        },
        k = function () {
          var n = document.createElement("div");
          (n.className = U["scrollbar-measure"]), document.body.appendChild(n);
          var l = n.getBoundingClientRect().width - n.clientWidth;
          return document.body.removeChild(n), l;
        },
        E = null,
        P = function (n) {
          E === null &&
            (document.body.scrollHeight > window.innerHeight ||
              n === "scroll") &&
            ((E = parseInt(
              window
                .getComputedStyle(document.body)
                .getPropertyValue("padding-right")
            )),
            (document.body.style.paddingRight = "".concat(E + k(), "px")));
        },
        V = function () {
          E !== null &&
            ((document.body.style.paddingRight = "".concat(E, "px")),
            (E = null));
        };
      function W(g, n, l, h) {
        jr()
          ? Cr(g, h)
          : (Pt(l).then(function () {
              return Cr(g, h);
            }),
            Ei(Q)),
          r
            ? (n.setAttribute("style", "display:none !important"),
              n.removeAttribute("class"),
              (n.innerHTML = ""))
            : n.remove(),
          zr() && (V(), w(), tr()),
          O();
      }
      function O() {
        Ut(
          [document.documentElement, document.body],
          [U.shown, U["height-auto"], U["no-backdrop"], U["toast-shown"]]
        );
      }
      function $(g) {
        g = Dt(g);
        var n = Dn.swalPromiseResolve.get(this),
          l = ue(this);
        this.isAwaitingPromise ? g.isDismissed || (we(this), n(g)) : l && n(g);
      }
      var ue = function (n) {
        var l = Ee();
        if (!l) return !1;
        var h = Ye.innerParams.get(n);
        if (!h || mt(l, h.hideClass.popup)) return !1;
        Ut(l, h.showClass.popup), Le(l, h.hideClass.popup);
        var T = Ot();
        return (
          Ut(T, h.showClass.backdrop),
          Le(T, h.hideClass.backdrop),
          pt(n, l, h),
          !0
        );
      };
      function Se(g) {
        var n = Dn.swalPromiseReject.get(this);
        we(this), n && n(g);
      }
      var we = function (n) {
          n.isAwaitingPromise &&
            (delete n.isAwaitingPromise, Ye.innerParams.get(n) || n._destroy());
        },
        Dt = function (n) {
          return typeof n > "u"
            ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
            : Object.assign(
                { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                n
              );
        },
        pt = function (n, l, h) {
          var T = Ot(),
            q = bn && vn(l);
          typeof h.willClose == "function" && h.willClose(l),
            q
              ? Pr(n, l, T, h.returnFocus, h.didClose)
              : W(n, T, h.returnFocus, h.didClose);
        },
        Pr = function (n, l, h, T, q) {
          bn &&
            ((Q.swalCloseEventFinishedCallback = W.bind(null, n, h, T, q)),
            l.addEventListener(bn, function (ie) {
              ie.target === l &&
                (Q.swalCloseEventFinishedCallback(),
                delete Q.swalCloseEventFinishedCallback);
            }));
        },
        Cr = function (n, l) {
          setTimeout(function () {
            typeof l == "function" && l.bind(n.params)(),
              n._destroy && n._destroy();
          });
        },
        Be = function (n) {
          var l = Ee();
          if ((l || new Hn(), (l = Ee()), !!l)) {
            var h = Wt();
            jr() ? Rt(cr()) : ln(l, n),
              At(h),
              l.setAttribute("data-loading", "true"),
              l.setAttribute("aria-busy", "true"),
              l.focus();
          }
        },
        ln = function (n, l) {
          var h = fr(),
            T = Wt();
          !h ||
            !T ||
            (!l && er(Xt()) && (l = Xt()),
            At(h),
            l &&
              (Rt(l),
              T.setAttribute("data-button-to-replace", l.className),
              h.insertBefore(T, l)),
            Le([n, h], U.loading));
        },
        He = function (n, l) {
          l.input === "select" || l.input === "radio"
            ? xn(n, l)
            : ["text", "email", "number", "tel", "textarea"].some(function (h) {
                return h === l.input;
              }) &&
              (Fr(l.inputValue) || lr(l.inputValue)) &&
              (Be(Xt()), hr(n, l));
        },
        et = function (n, l) {
          var h = n.getInput();
          if (!h) return null;
          switch (l.input) {
            case "checkbox":
              return Zn(h);
            case "radio":
              return ki(h);
            case "file":
              return Er(h);
            default:
              return l.inputAutoTrim ? h.value.trim() : h.value;
          }
        },
        Zn = function (n) {
          return n.checked ? 1 : 0;
        },
        ki = function (n) {
          return n.checked ? n.value : null;
        },
        Er = function (n) {
          return n.files && n.files.length
            ? n.getAttribute("multiple") !== null
              ? n.files
              : n.files[0]
            : null;
        },
        xn = function (n, l) {
          var h = Ee();
          if (h) {
            var T = function (ie) {
              l.input === "select"
                ? $r(h, Gt(ie), l)
                : l.input === "radio" && cn(h, Gt(ie), l);
            };
            Fr(l.inputOptions) || lr(l.inputOptions)
              ? (Be(Xt()),
                Lt(l.inputOptions).then(function (q) {
                  n.hideLoading(), T(q);
                }))
              : S(l.inputOptions) === "object"
              ? T(l.inputOptions)
              : Nt(
                  "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                    S(l.inputOptions)
                  )
                );
          }
        },
        hr = function (n, l) {
          var h = n.getInput();
          h &&
            (Rt(h),
            Lt(l.inputValue)
              .then(function (T) {
                (h.value =
                  l.input === "number"
                    ? "".concat(parseFloat(T) || 0)
                    : "".concat(T)),
                  At(h),
                  h.focus(),
                  n.hideLoading();
              })
              .catch(function (T) {
                Nt("Error in inputValue promise: ".concat(T)),
                  (h.value = ""),
                  At(h),
                  h.focus(),
                  n.hideLoading();
              }));
        };
      function $r(g, n, l) {
        var h = dr(g, U.select);
        if (h) {
          var T = function (ie, Te, qe) {
            var Je = document.createElement("option");
            (Je.value = qe),
              zt(Je, Te),
              (Je.selected = Nn(qe, l.inputValue)),
              ie.appendChild(Je);
          };
          n.forEach(function (q) {
            var ie = q[0],
              Te = q[1];
            if (Array.isArray(Te)) {
              var qe = document.createElement("optgroup");
              (qe.label = ie),
                (qe.disabled = !1),
                h.appendChild(qe),
                Te.forEach(function (Je) {
                  return T(qe, Je[1], Je[0]);
                });
            } else T(h, Te, ie);
          }),
            h.focus();
        }
      }
      function cn(g, n, l) {
        var h = dr(g, U.radio);
        if (h) {
          n.forEach(function (q) {
            var ie = q[0],
              Te = q[1],
              qe = document.createElement("input"),
              Je = document.createElement("label");
            (qe.type = "radio"),
              (qe.name = U.radio),
              (qe.value = ie),
              Nn(ie, l.inputValue) && (qe.checked = !0);
            var hu = document.createElement("span");
            zt(hu, Te),
              (hu.className = U.label),
              Je.appendChild(qe),
              Je.appendChild(hu),
              h.appendChild(Je);
          });
          var T = h.querySelectorAll("input");
          T.length && T[0].focus();
        }
      }
      var Gt = function g(n) {
          var l = [];
          return (
            n instanceof Map
              ? n.forEach(function (h, T) {
                  var q = h;
                  S(q) === "object" && (q = g(q)), l.push([T, q]);
                })
              : Object.keys(n).forEach(function (h) {
                  var T = n[h];
                  S(T) === "object" && (T = g(T)), l.push([h, T]);
                }),
            l
          );
        },
        Nn = function (n, l) {
          return !!l && l.toString() === n.toString();
        },
        pr = void 0,
        Nr = function (n) {
          var l = Ye.innerParams.get(n);
          n.disableButtons(), l.input ? qn(n, "confirm") : su(n, !0);
        },
        rr = function (n) {
          var l = Ye.innerParams.get(n);
          n.disableButtons(),
            l.returnInputValueOnDeny ? qn(n, "deny") : Cn(n, !1);
        },
        ou = function (n, l) {
          n.disableButtons(), l(yn.cancel);
        },
        qn = function (n, l) {
          var h = Ye.innerParams.get(n);
          if (!h.input) {
            Nt(
              'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                sr(l)
              )
            );
            return;
          }
          var T = n.getInput(),
            q = et(n, h);
          h.inputValidator
            ? Ze(n, q, l)
            : T && !T.checkValidity()
            ? (n.enableButtons(), n.showValidationMessage(h.validationMessage))
            : l === "deny"
            ? Cn(n, q)
            : su(n, q);
        },
        Ze = function (n, l, h) {
          var T = Ye.innerParams.get(n);
          n.disableInput();
          var q = Promise.resolve().then(function () {
            return Lt(T.inputValidator(l, T.validationMessage));
          });
          q.then(function (ie) {
            n.enableButtons(),
              n.enableInput(),
              ie
                ? n.showValidationMessage(ie)
                : h === "deny"
                ? Cn(n, l)
                : su(n, l);
          });
        },
        Cn = function (n, l) {
          var h = Ye.innerParams.get(n || pr);
          if ((h.showLoaderOnDeny && Be(Qt()), h.preDeny)) {
            n.isAwaitingPromise = !0;
            var T = Promise.resolve().then(function () {
              return Lt(h.preDeny(l, h.validationMessage));
            });
            T.then(function (q) {
              q === !1
                ? (n.hideLoading(), we(n))
                : n.close({ isDenied: !0, value: typeof q > "u" ? l : q });
            }).catch(function (q) {
              return En(n || pr, q);
            });
          } else n.close({ isDenied: !0, value: l });
        },
        gr = function (n, l) {
          n.close({ isConfirmed: !0, value: l });
        },
        En = function (n, l) {
          n.rejectPromise(l);
        },
        su = function (n, l) {
          var h = Ye.innerParams.get(n || pr);
          if ((h.showLoaderOnConfirm && Be(), h.preConfirm)) {
            n.resetValidationMessage(), (n.isAwaitingPromise = !0);
            var T = Promise.resolve().then(function () {
              return Lt(h.preConfirm(l, h.validationMessage));
            });
            T.then(function (q) {
              er(In()) || q === !1
                ? (n.hideLoading(), we(n))
                : gr(n, typeof q > "u" ? l : q);
            }).catch(function (q) {
              return En(n || pr, q);
            });
          } else gr(n, l);
        };
      function _i() {
        var g = Ye.innerParams.get(this);
        if (g) {
          var n = Ye.domCache.get(this);
          Rt(n.loader),
            jr() ? g.icon && At(cr()) : Gu(n),
            Ut([n.popup, n.actions], U.loading),
            n.popup.removeAttribute("aria-busy"),
            n.popup.removeAttribute("data-loading"),
            (n.confirmButton.disabled = !1),
            (n.denyButton.disabled = !1),
            (n.cancelButton.disabled = !1);
        }
      }
      var Gu = function (n) {
        var l = n.popup.getElementsByClassName(
          n.loader.getAttribute("data-button-to-replace")
        );
        l.length ? At(l[0], "inline-block") : Tu() && Rt(n.actions);
      };
      function nr() {
        var g = Ye.innerParams.get(this),
          n = Ye.domCache.get(this);
        return n ? gi(n.popup, g.input) : null;
      }
      function Li(g, n, l) {
        var h = Ye.domCache.get(g);
        n.forEach(function (T) {
          h[T].disabled = l;
        });
      }
      function Zr(g, n) {
        var l = Ee();
        if (!(!l || !g))
          if (g.type === "radio")
            for (
              var h = l.querySelectorAll('[name="'.concat(U.radio, '"]')),
                T = 0;
              T < h.length;
              T++
            )
              h[T].disabled = n;
          else g.disabled = n;
      }
      function Jn() {
        Li(this, ["confirmButton", "denyButton", "cancelButton"], !1);
      }
      function Sn() {
        Li(this, ["confirmButton", "denyButton", "cancelButton"], !0);
      }
      function mr() {
        Zr(this.getInput(), !1);
      }
      function fn() {
        Zr(this.getInput(), !0);
      }
      function Fi(g) {
        var n = Ye.domCache.get(this),
          l = Ye.innerParams.get(this);
        zt(n.validationMessage, g),
          (n.validationMessage.className = U["validation-message"]),
          l.customClass &&
            l.customClass.validationMessage &&
            Le(n.validationMessage, l.customClass.validationMessage),
          At(n.validationMessage);
        var h = this.getInput();
        h &&
          (h.setAttribute("aria-invalid", "true"),
          h.setAttribute("aria-describedby", U["validation-message"]),
          zi(h),
          Le(h, U.inputerror));
      }
      function Wu() {
        var g = Ye.domCache.get(this);
        g.validationMessage && Rt(g.validationMessage);
        var n = this.getInput();
        n &&
          (n.removeAttribute("aria-invalid"),
          n.removeAttribute("aria-describedby"),
          Ut(n, U.inputerror));
      }
      var Jr = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: !1,
          animation: !0,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
          customClass: {},
          target: "body",
          color: void 0,
          backdrop: !0,
          heightAuto: !0,
          allowOutsideClick: !0,
          allowEscapeKey: !0,
          allowEnterKey: !0,
          stopKeydownPropagation: !0,
          keydownListenerCapture: !1,
          showConfirmButton: !0,
          showDenyButton: !1,
          showCancelButton: !1,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: !0,
          reverseButtons: !1,
          focusConfirm: !0,
          focusDeny: !1,
          focusCancel: !1,
          returnFocus: !0,
          showCloseButton: !1,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: !1,
          showLoaderOnDeny: !1,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: !1,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoFocus: !0,
          inputAutoTrim: !0,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: !1,
          validationMessage: void 0,
          grow: !1,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: !0,
        },
        dn = [
          "allowEscapeKey",
          "allowOutsideClick",
          "background",
          "buttonsStyling",
          "cancelButtonAriaLabel",
          "cancelButtonColor",
          "cancelButtonText",
          "closeButtonAriaLabel",
          "closeButtonHtml",
          "color",
          "confirmButtonAriaLabel",
          "confirmButtonColor",
          "confirmButtonText",
          "currentProgressStep",
          "customClass",
          "denyButtonAriaLabel",
          "denyButtonColor",
          "denyButtonText",
          "didClose",
          "didDestroy",
          "footer",
          "hideClass",
          "html",
          "icon",
          "iconColor",
          "iconHtml",
          "imageAlt",
          "imageHeight",
          "imageUrl",
          "imageWidth",
          "preConfirm",
          "preDeny",
          "progressSteps",
          "returnFocus",
          "reverseButtons",
          "showCancelButton",
          "showCloseButton",
          "showConfirmButton",
          "showDenyButton",
          "text",
          "title",
          "titleText",
          "willClose",
        ],
        ir = {},
        zu = [
          "allowOutsideClick",
          "allowEnterKey",
          "backdrop",
          "focusConfirm",
          "focusDeny",
          "focusCancel",
          "returnFocus",
          "heightAuto",
          "keydownListenerCapture",
        ],
        Ri = function (n) {
          return Object.prototype.hasOwnProperty.call(Jr, n);
        },
        lu = function (n) {
          return dn.indexOf(n) !== -1;
        },
        x = function (n) {
          return ir[n];
        },
        I = function (n) {
          Ri(n) || rt('Unknown parameter "'.concat(n, '"'));
        },
        M = function (n) {
          zu.includes(n) &&
            rt('The parameter "'.concat(n, '" is incompatible with toasts'));
        },
        H = function (n) {
          var l = x(n);
          l && Mt(n, l);
        },
        D = function (n) {
          n.backdrop === !1 &&
            n.allowOutsideClick &&
            rt(
              '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
            );
          for (var l in n) I(l), n.toast && M(l), H(l);
        };
      function L(g) {
        var n = Ee(),
          l = Ye.innerParams.get(this);
        if (!n || mt(n, l.hideClass.popup)) {
          rt(
            "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
          );
          return;
        }
        var h = _(g),
          T = Object.assign({}, l, h);
        Ou(this, T),
          Ye.innerParams.set(this, T),
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, g),
              writable: !1,
              enumerable: !0,
            },
          });
      }
      var _ = function (n) {
        var l = {};
        return (
          Object.keys(n).forEach(function (h) {
            lu(h)
              ? (l[h] = n[h])
              : rt("Invalid parameter to update: ".concat(h));
          }),
          l
        );
      };
      function z() {
        var g = Ye.domCache.get(this),
          n = Ye.innerParams.get(this);
        if (!n) {
          ae(this);
          return;
        }
        g.popup &&
          Q.swalCloseEventFinishedCallback &&
          (Q.swalCloseEventFinishedCallback(),
          delete Q.swalCloseEventFinishedCallback),
          typeof n.didDestroy == "function" && n.didDestroy(),
          j(this);
      }
      var j = function (n) {
          ae(n),
            delete n.params,
            delete Q.keydownHandler,
            delete Q.keydownTarget,
            delete Q.currentInstance;
        },
        ae = function (n) {
          n.isAwaitingPromise
            ? (oe(Ye, n), (n.isAwaitingPromise = !0))
            : (oe(Dn, n),
              oe(Ye, n),
              delete n.isAwaitingPromise,
              delete n.disableButtons,
              delete n.enableButtons,
              delete n.getInput,
              delete n.disableInput,
              delete n.enableInput,
              delete n.hideLoading,
              delete n.disableLoading,
              delete n.showValidationMessage,
              delete n.resetValidationMessage,
              delete n.close,
              delete n.closePopup,
              delete n.closeModal,
              delete n.closeToast,
              delete n.rejectPromise,
              delete n.update,
              delete n._destroy);
        },
        oe = function (n, l) {
          for (var h in n) n[h].delete(l);
        },
        re = Object.freeze({
          __proto__: null,
          _destroy: z,
          close: $,
          closeModal: $,
          closePopup: $,
          closeToast: $,
          disableButtons: Sn,
          disableInput: fn,
          disableLoading: _i,
          enableButtons: Jn,
          enableInput: mr,
          getInput: nr,
          handleAwaitingPromise: we,
          hideLoading: _i,
          rejectPromise: Se,
          resetValidationMessage: Wu,
          showValidationMessage: Fi,
          update: L,
        }),
        Fe = function (n, l, h) {
          n.toast ? ve(n, l, h) : (It(l), xt(l), ur(n, l, h));
        },
        ve = function (n, l, h) {
          l.popup.onclick = function () {
            (n && (Ne(n) || n.timer || n.input)) || h(yn.close);
          };
        },
        Ne = function (n) {
          return !!(
            n.showConfirmButton ||
            n.showDenyButton ||
            n.showCancelButton ||
            n.showCloseButton
          );
        },
        vt = !1,
        It = function (n) {
          n.popup.onmousedown = function () {
            n.container.onmouseup = function (l) {
              (n.container.onmouseup = function () {}),
                l.target === n.container && (vt = !0);
            };
          };
        },
        xt = function (n) {
          n.container.onmousedown = function () {
            n.popup.onmouseup = function (l) {
              (n.popup.onmouseup = function () {}),
                (l.target === n.popup ||
                  (l.target instanceof HTMLElement &&
                    n.popup.contains(l.target))) &&
                  (vt = !0);
            };
          };
        },
        ur = function (n, l, h) {
          l.container.onclick = function (T) {
            if (vt) {
              vt = !1;
              return;
            }
            T.target === l.container &&
              Jt(n.allowOutsideClick) &&
              h(yn.backdrop);
          };
        },
        Xr = function (n) {
          return S(n) === "object" && n.jquery;
        },
        xe = function (n) {
          return n instanceof Element || Xr(n);
        },
        Mo = function (n) {
          var l = {};
          return (
            S(n[0]) === "object" && !xe(n[0])
              ? Object.assign(l, n[0])
              : ["title", "html", "icon"].forEach(function (h, T) {
                  var q = n[T];
                  typeof q == "string" || xe(q)
                    ? (l[h] = q)
                    : q !== void 0 &&
                      Nt(
                        "Unexpected type of "
                          .concat(h, '! Expected "string" or "Element", got ')
                          .concat(S(q))
                      );
                }),
            l
          );
        };
      function $a() {
        for (
          var g = this, n = arguments.length, l = new Array(n), h = 0;
          h < n;
          h++
        )
          l[h] = arguments[h];
        return tt(g, l);
      }
      function ju(g) {
        var n = (function (l) {
          ee(T, l);
          var h = at(T);
          function T() {
            return R(this, T), h.apply(this, arguments);
          }
          return (
            J(T, [
              {
                key: "_main",
                value: function (ie, Te) {
                  return _r(De(T.prototype), "_main", this).call(
                    this,
                    ie,
                    Object.assign({}, g, Te)
                  );
                },
              },
            ]),
            T
          );
        })(this);
        return n;
      }
      var Oo = function () {
          return Q.timeout && Q.timeout.getTimerLeft();
        },
        Za = function () {
          if (Q.timeout) return Zi(), Q.timeout.stop();
        },
        Ja = function () {
          if (Q.timeout) {
            var n = Q.timeout.start();
            return mi(n), n;
          }
        },
        Ku = function () {
          var n = Q.timeout;
          return n && (n.running ? Za() : Ja());
        },
        Mn = function (n) {
          if (Q.timeout) {
            var l = Q.timeout.increase(n);
            return mi(l, !0), l;
          }
        },
        Yu = function () {
          return !!(Q.timeout && Q.timeout.isRunning());
        },
        Aa = !1,
        Ii = {};
      function Xa() {
        var g =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : "data-swal-template";
        (Ii[g] = this),
          Aa || (document.body.addEventListener("click", Qa), (Aa = !0));
      }
      var Qa = function (n) {
          for (var l = n.target; l && l !== document; l = l.parentNode)
            for (var h in Ii) {
              var T = l.getAttribute(h);
              if (T) {
                Ii[h].fire({ template: T });
                return;
              }
            }
        },
        $u = Object.freeze({
          __proto__: null,
          argsToParams: Mo,
          bindClickHandler: Xa,
          clickCancel: Qe,
          clickConfirm: Hu,
          clickDeny: nt,
          enableLoading: Be,
          fire: $a,
          getActions: fr,
          getCancelButton: Gr,
          getCloseButton: pi,
          getConfirmButton: Xt,
          getContainer: Ot,
          getDenyButton: Qt,
          getFocusableElements: Wi,
          getFooter: hi,
          getHtmlContainer: Ft,
          getIcon: cr,
          getIconContent: Wn,
          getImage: Rn,
          getInputLabel: yr,
          getLoader: Wt,
          getPopup: Ee,
          getProgressSteps: on,
          getTimerLeft: Oo,
          getTimerProgressBar: Wr,
          getTitle: fe,
          getValidationMessage: In,
          increaseTimer: Mn,
          isDeprecatedParameter: x,
          isLoading: Su,
          isTimerRunning: Yu,
          isUpdatableParameter: lu,
          isValidParameter: Ri,
          isVisible: va,
          mixin: ju,
          resumeTimer: Ja,
          showLoading: Be,
          stopTimer: Za,
          toggleTimer: Ku,
        }),
        eo = (function () {
          function g(n, l) {
            R(this, g),
              (this.callback = n),
              (this.remaining = l),
              (this.running = !1),
              this.start();
          }
          return (
            J(g, [
              {
                key: "start",
                value: function () {
                  return (
                    this.running ||
                      ((this.running = !0),
                      (this.started = new Date()),
                      (this.id = setTimeout(this.callback, this.remaining))),
                    this.remaining
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  return (
                    this.started &&
                      this.running &&
                      ((this.running = !1),
                      clearTimeout(this.id),
                      (this.remaining -=
                        new Date().getTime() - this.started.getTime())),
                    this.remaining
                  );
                },
              },
              {
                key: "increase",
                value: function (l) {
                  var h = this.running;
                  return (
                    h && this.stop(),
                    (this.remaining += l),
                    h && this.start(),
                    this.remaining
                  );
                },
              },
              {
                key: "getTimerLeft",
                value: function () {
                  return (
                    this.running && (this.stop(), this.start()), this.remaining
                  );
                },
              },
              {
                key: "isRunning",
                value: function () {
                  return this.running;
                },
              },
            ]),
            g
          );
        })(),
        Pi = ["swal-title", "swal-html", "swal-footer"],
        Xn = function (n) {
          var l =
            typeof n.template == "string"
              ? document.querySelector(n.template)
              : n.template;
          if (!l) return {};
          var h = l.content;
          Go(h);
          var T = Object.assign(
            Zu(h),
            Ho(h),
            Uo(h),
            Vo(h),
            Ju(h),
            Xu(h),
            ya(h, Pi)
          );
          return T;
        },
        Zu = function (n) {
          var l = {},
            h = Array.from(n.querySelectorAll("swal-param"));
          return (
            h.forEach(function (T) {
              On(T, ["name", "value"]);
              var q = T.getAttribute("name"),
                ie = T.getAttribute("value");
              typeof Jr[q] == "boolean"
                ? (l[q] = ie !== "false")
                : S(Jr[q]) === "object"
                ? (l[q] = JSON.parse(ie))
                : (l[q] = ie);
            }),
            l
          );
        },
        Ho = function (n) {
          var l = {},
            h = Array.from(n.querySelectorAll("swal-function-param"));
          return (
            h.forEach(function (T) {
              var q = T.getAttribute("name"),
                ie = T.getAttribute("value");
              l[q] = new Function("return ".concat(ie))();
            }),
            l
          );
        },
        Uo = function (n) {
          var l = {},
            h = Array.from(n.querySelectorAll("swal-button"));
          return (
            h.forEach(function (T) {
              On(T, ["type", "color", "aria-label"]);
              var q = T.getAttribute("type");
              (l["".concat(q, "ButtonText")] = T.innerHTML),
                (l["show".concat(sr(q), "Button")] = !0),
                T.hasAttribute("color") &&
                  (l["".concat(q, "ButtonColor")] = T.getAttribute("color")),
                T.hasAttribute("aria-label") &&
                  (l["".concat(q, "ButtonAriaLabel")] =
                    T.getAttribute("aria-label"));
            }),
            l
          );
        },
        Vo = function (n) {
          var l = {},
            h = n.querySelector("swal-image");
          return (
            h &&
              (On(h, ["src", "width", "height", "alt"]),
              h.hasAttribute("src") && (l.imageUrl = h.getAttribute("src")),
              h.hasAttribute("width") &&
                (l.imageWidth = h.getAttribute("width")),
              h.hasAttribute("height") &&
                (l.imageHeight = h.getAttribute("height")),
              h.hasAttribute("alt") && (l.imageAlt = h.getAttribute("alt"))),
            l
          );
        },
        Ju = function (n) {
          var l = {},
            h = n.querySelector("swal-icon");
          return (
            h &&
              (On(h, ["type", "color"]),
              h.hasAttribute("type") && (l.icon = h.getAttribute("type")),
              h.hasAttribute("color") &&
                (l.iconColor = h.getAttribute("color")),
              (l.iconHtml = h.innerHTML)),
            l
          );
        },
        Xu = function (n) {
          var l = {},
            h = n.querySelector("swal-input");
          h &&
            (On(h, ["type", "label", "placeholder", "value"]),
            (l.input = h.getAttribute("type") || "text"),
            h.hasAttribute("label") && (l.inputLabel = h.getAttribute("label")),
            h.hasAttribute("placeholder") &&
              (l.inputPlaceholder = h.getAttribute("placeholder")),
            h.hasAttribute("value") &&
              (l.inputValue = h.getAttribute("value")));
          var T = Array.from(n.querySelectorAll("swal-input-option"));
          return (
            T.length &&
              ((l.inputOptions = {}),
              T.forEach(function (q) {
                On(q, ["value"]);
                var ie = q.getAttribute("value"),
                  Te = q.innerHTML;
                l.inputOptions[ie] = Te;
              })),
            l
          );
        },
        ya = function (n, l) {
          var h = {};
          for (var T in l) {
            var q = l[T],
              ie = n.querySelector(q);
            ie &&
              (On(ie, []), (h[q.replace(/^swal-/, "")] = ie.innerHTML.trim()));
          }
          return h;
        },
        Go = function (n) {
          var l = Pi.concat([
            "swal-param",
            "swal-function-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option",
          ]);
          Array.from(n.children).forEach(function (h) {
            var T = h.tagName.toLowerCase();
            l.includes(T) || rt("Unrecognized element <".concat(T, ">"));
          });
        },
        On = function (n, l) {
          Array.from(n.attributes).forEach(function (h) {
            l.indexOf(h.name) === -1 &&
              rt([
                'Unrecognized attribute "'
                  .concat(h.name, '" on <')
                  .concat(n.tagName.toLowerCase(), ">."),
                "".concat(
                  l.length
                    ? "Allowed attributes are: ".concat(l.join(", "))
                    : "To set the value, use HTML within the element."
                ),
              ]);
          });
        },
        to = 10,
        Wo = function (n) {
          var l = Ot(),
            h = Ee();
          typeof n.willOpen == "function" && n.willOpen(h);
          var T = window.getComputedStyle(document.body),
            q = T.overflowY;
          jo(l, h, n),
            setTimeout(function () {
              Kt(l, h);
            }, to),
            zr() && (zo(l, n.scrollbarPadding, q), au()),
            !jr() &&
              !Q.previousActiveElement &&
              (Q.previousActiveElement = document.activeElement),
            typeof n.didOpen == "function" &&
              setTimeout(function () {
                return n.didOpen(h);
              }),
            Ut(l, U["no-transition"]);
        },
        Ct = function g(n) {
          var l = Ee();
          if (!(n.target !== l || !bn)) {
            var h = Ot();
            l.removeEventListener(bn, g), (h.style.overflowY = "auto");
          }
        },
        Kt = function (n, l) {
          bn && vn(l)
            ? ((n.style.overflowY = "hidden"), l.addEventListener(bn, Ct))
            : (n.style.overflowY = "auto");
        },
        zo = function (n, l, h) {
          u(),
            l && h !== "hidden" && P(h),
            setTimeout(function () {
              n.scrollTop = 0;
            });
        },
        jo = function (n, l, h) {
          Le(n, h.showClass.backdrop),
            h.animation
              ? (l.style.setProperty("opacity", "0", "important"),
                At(l, "grid"),
                setTimeout(function () {
                  Le(l, h.showClass.popup), l.style.removeProperty("opacity");
                }, to))
              : At(l, "grid"),
            Le([document.documentElement, document.body], U.shown),
            h.heightAuto &&
              h.backdrop &&
              !h.toast &&
              Le([document.documentElement, document.body], U["height-auto"]);
        },
        Da = {
          email: function (n, l) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
              n
            )
              ? Promise.resolve()
              : Promise.resolve(l || "Invalid email address");
          },
          url: function (n, l) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
              n
            )
              ? Promise.resolve()
              : Promise.resolve(l || "Invalid URL");
          },
        };
      function Ko(g) {
        g.inputValidator ||
          (g.input === "email" && (g.inputValidator = Da.email),
          g.input === "url" && (g.inputValidator = Da.url));
      }
      function xa(g) {
        (!g.target ||
          (typeof g.target == "string" && !document.querySelector(g.target)) ||
          (typeof g.target != "string" && !g.target.appendChild)) &&
          (rt('Target parameter is not valid, defaulting to "body"'),
          (g.target = "body"));
      }
      function cu(g) {
        Ko(g),
          g.showLoaderOnConfirm &&
            !g.preConfirm &&
            rt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
          xa(g),
          typeof g.title == "string" &&
            (g.title = g.title
              .split(
                `
`
              )
              .join("<br />")),
          Lu(g);
      }
      var qr,
        Tn = new WeakMap(),
        lt = (function () {
          function g() {
            if (
              (R(this, g),
              ft(this, Tn, { writable: !0, value: void 0 }),
              !(typeof window > "u"))
            ) {
              qr = this;
              for (
                var n = arguments.length, l = new Array(n), h = 0;
                h < n;
                h++
              )
                l[h] = arguments[h];
              var T = Object.freeze(this.constructor.argsToParams(l));
              (this.params = T),
                (this.isAwaitingPromise = !1),
                me(this, Tn, this._main(qr.params));
            }
          }
          return (
            J(g, [
              {
                key: "_main",
                value: function (l) {
                  var h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  if ((D(Object.assign({}, h, l)), Q.currentInstance)) {
                    var T = Dn.swalPromiseResolve.get(Q.currentInstance),
                      q = Q.currentInstance.isAwaitingPromise;
                    Q.currentInstance._destroy(),
                      q || T({ isDismissed: !0 }),
                      zr() && tr();
                  }
                  Q.currentInstance = qr;
                  var ie = Qu(l, h);
                  cu(ie),
                    Object.freeze(ie),
                    Q.timeout && (Q.timeout.stop(), delete Q.timeout),
                    clearTimeout(Q.restoreFocusTimeout);
                  var Te = Ni(qr);
                  return Ou(qr, ie), Ye.innerParams.set(qr, ie), fu(qr, Te, ie);
                },
              },
              {
                key: "then",
                value: function (l) {
                  return ct(this, Tn).then(l);
                },
              },
              {
                key: "finally",
                value: function (l) {
                  return ct(this, Tn).finally(l);
                },
              },
            ]),
            g
          );
        })(),
        fu = function (n, l, h) {
          return new Promise(function (T, q) {
            var ie = function (qe) {
              n.close({ isDismissed: !0, dismiss: qe });
            };
            Dn.swalPromiseResolve.set(n, T),
              Dn.swalPromiseReject.set(n, q),
              (l.confirmButton.onclick = function () {
                Nr(n);
              }),
              (l.denyButton.onclick = function () {
                rr(n);
              }),
              (l.cancelButton.onclick = function () {
                ou(n, ie);
              }),
              (l.closeButton.onclick = function () {
                ie(yn.close);
              }),
              Fe(h, l, ie),
              Uu(Q, h, ie),
              He(n, h),
              Wo(h),
              Yo(Q, h, ie),
              $o(l, h),
              setTimeout(function () {
                l.container.scrollTop = 0;
              });
          });
        },
        Qu = function (n, l) {
          var h = Xn(n),
            T = Object.assign({}, Jr, l, h, n);
          return (
            (T.showClass = Object.assign({}, Jr.showClass, T.showClass)),
            (T.hideClass = Object.assign({}, Jr.hideClass, T.hideClass)),
            T.animation === !1 &&
              ((T.showClass = { backdrop: "swal2-noanimation" }),
              (T.hideClass = {})),
            T
          );
        },
        Ni = function (n) {
          var l = {
            popup: Ee(),
            container: Ot(),
            actions: fr(),
            confirmButton: Xt(),
            denyButton: Qt(),
            cancelButton: Gr(),
            loader: Wt(),
            closeButton: pi(),
            validationMessage: In(),
            progressSteps: on(),
          };
          return Ye.domCache.set(n, l), l;
        },
        Yo = function (n, l, h) {
          var T = Wr();
          Rt(T),
            l.timer &&
              ((n.timeout = new eo(function () {
                h("timer"), delete n.timeout;
              }, l.timer)),
              l.timerProgressBar &&
                (At(T),
                Ht(T, l, "timerProgressBar"),
                setTimeout(function () {
                  n.timeout && n.timeout.running && mi(l.timer);
                })));
        },
        $o = function (n, l) {
          if (!l.toast) {
            if (!Jt(l.allowEnterKey)) {
              Jo();
              return;
            }
            Zo(n, l) || Si(-1, 1);
          }
        },
        Zo = function (n, l) {
          return l.focusDeny && er(n.denyButton)
            ? (n.denyButton.focus(), !0)
            : l.focusCancel && er(n.cancelButton)
            ? (n.cancelButton.focus(), !0)
            : l.focusConfirm && er(n.confirmButton)
            ? (n.confirmButton.focus(), !0)
            : !1;
        },
        Jo = function () {
          document.activeElement instanceof HTMLElement &&
            typeof document.activeElement.blur == "function" &&
            document.activeElement.blur();
        };
      if (
        typeof window < "u" &&
        /^ru\b/.test(navigator.language) &&
        location.host.match(/\.(ru|su|by|xn--p1ai)$/)
      ) {
        var ro = new Date(),
          du = localStorage.getItem("swal-initiation");
        du
          ? (ro.getTime() - Date.parse(du)) / (1e3 * 60 * 60 * 24) > 3 &&
            setTimeout(function () {
              document.body.style.pointerEvents = "none";
              var g = document.createElement("audio");
              (g.src =
                "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                (g.loop = !0),
                document.body.appendChild(g),
                setTimeout(function () {
                  g.play().catch(function () {});
                }, 2500);
            }, 500)
          : localStorage.setItem("swal-initiation", "".concat(ro));
      }
      (lt.prototype.disableButtons = Sn),
        (lt.prototype.enableButtons = Jn),
        (lt.prototype.getInput = nr),
        (lt.prototype.disableInput = fn),
        (lt.prototype.enableInput = mr),
        (lt.prototype.hideLoading = _i),
        (lt.prototype.disableLoading = _i),
        (lt.prototype.showValidationMessage = Fi),
        (lt.prototype.resetValidationMessage = Wu),
        (lt.prototype.close = $),
        (lt.prototype.closePopup = $),
        (lt.prototype.closeModal = $),
        (lt.prototype.closeToast = $),
        (lt.prototype.rejectPromise = Se),
        (lt.prototype.update = L),
        (lt.prototype._destroy = z),
        Object.assign(lt, $u),
        Object.keys(re).forEach(function (g) {
          lt[g] = function () {
            if (qr && qr[g]) {
              var n;
              return (n = qr)[g].apply(n, arguments);
            }
            return null;
          };
        }),
        (lt.DismissReason = yn),
        (lt.version = "11.10.2");
      var Hn = lt;
      return (Hn.default = Hn), Hn;
    }),
      typeof Ie < "u" &&
        Ie.Sweetalert2 &&
        (Ie.swal = Ie.sweetAlert = Ie.Swal = Ie.SweetAlert = Ie.Sweetalert2),
      typeof document < "u" &&
        (function (a, v) {
          var C = a.createElement("style");
          if ((a.getElementsByTagName("head")[0].appendChild(C), C.styleSheet))
            C.styleSheet.disabled || (C.styleSheet.cssText = v);
          else
            try {
              C.innerHTML = v;
            } catch {
              C.innerText = v;
            }
        })(
          document,
          '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
        );
  })(Cl);
  var xd = Cl.exports;
  const li = gt(xd);
  class kr {
    static showAutoCloseAlert(o, a) {
      li.fire({
        text: o,
        showCloseButton: !1,
        showConfirmButton: !1,
        showDenyButton: !1,
        timer: a,
      }).then();
    }
    static showAutoCloseAlertWithTitle(o, a, v) {
      li.fire({
        title: v,
        text: o,
        timer: a,
        width: "36em",
        customClass: { title: "red-text" },
      }).then();
    }
    static showNotifyPanel(o, a, v = !1) {
      let C = We("#youtube-dubbing-notifiy-panel youtube-dubbing-ui"),
        S = C !== null && C.length > 0 ? C[0].shadowRoot : null;
      if (S !== null) {
        const R = We(S);
        if ((R.find("#youtube-dubbing-notify-title").text(o), v)) {
          const G = R.find("#appendRuntimeTip");
          if (G.length === 0) {
            const J = R.find("#youtube-dubbing-notify-content").html();
            R.find("#youtube-dubbing-notify-content").html(
              J + "<br/><div id='appendRuntimeTip'>" + a + "</div>"
            );
          } else G.html(a);
        } else R.find("#youtube-dubbing-notify-content").html(a);
        We("#youtube-dubbing-notifiy-panel").slideDown(1e3);
      }
    }
    static clearErrorRuntimeTip() {
      let o = We("#youtube-dubbing-notifiy-panel youtube-dubbing-ui"),
        a = o !== null && o.length > 0 ? o[0].shadowRoot : null;
      if (a !== null) {
        const C = We(a).find("#appendRuntimeTip");
        C.length > 0 && C.html("");
      }
    }
  }
  class El {
    constructor(o, a, v, C, S) {
      te(this, "iterator");
      te(this, "scheduledSubtitleTask");
      te(this, "subtitles", []);
      te(this, "onVideoPauseHandler", this.onVideoPause.bind(this));
      te(this, "onVideoPlayingHandler", this.onVideoPlaying.bind(this));
      te(this, "onVideoSeekedHandler", this.onVideoSeeked.bind(this));
      te(this, "onVideoWaitingHandler", this.onVideoWaiting.bind(this));
      te(
        this,
        "onVideoVolumeChangeHandler",
        this.onVideoVolumeChange.bind(this)
      );
      te(this, "onVideoTimeUpdateHandler", this.onVideoTimeUpdate.bind(this));
      te(this, "onVideoRateChangeHandler", this.onVideoRateChange.bind(this));
      te(this, "currentAudio", new Audio());
      te(this, "prevTaskId", 0);
      te(this, "rateAdjuster");
      te(
        this,
        "initSubsAndTTSLoadCompleteEvent",
        We.Event("InitSubsAndTTSLoadComplete")
      );
      te(this, "isTiggerInitSubsAndTTSLoadComplete", !1);
      te(this, "originPlaybackRate");
      (this.video = o),
        (this.videoId = a),
        (this.title = v),
        (this.subtitleLevel = C),
        (this.subtitleCreator = S),
        We(this.video)
          .on("pause", this.onVideoPauseHandler)
          .on("playing", this.onVideoPlayingHandler)
          .on("seeked", this.onVideoSeekedHandler)
          .on("waiting", this.onVideoWaitingHandler)
          .on("volumechange", this.onVideoVolumeChangeHandler)
          .on("timeupdate", this.onVideoTimeUpdateHandler)
          .on("ratechange", this.onVideoRateChangeHandler),
        (this.originPlaybackRate = this.video.playbackRate);
    }
    onVideoPause() {
      if (this.video.currentTime < this.video.duration) {
        console.log("video event: pause");
        try {
          Ln.show(), this.audioPause();
        } catch (o) {
          console.error("video pause occur error", o);
        } finally {
          console.log("video pause finally");
        }
      }
    }
    async onVideoPlaying() {
      console.log("video event: playing"),
        Ln.remove(),
        this.updateVideoOriginVolume(),
        this.isAudioSrcNotEmpty() && (await this.currentAudio.play());
    }
    onVideoSeeked() {
      console.log("video event: seeked"),
        this.audioStop(),
        this.resetVideoPlaybackRate(),
        this.restartTask();
    }
    onVideoWaiting(o) {
      console.log("video event: waiting", o), Ln.show(), this.audioPause();
    }
    async onVideoTimeUpdate(o) {
      var S, R;
      if (
        !((S = this.iterator) != null && S.hasNext()) ||
        this.isAudioSrcNotEmpty()
      )
        return;
      const a = this.video.currentTime,
        v = (R = this.iterator) == null ? void 0 : R.current();
      v.getSubtitleTimeRange().getStartTime() - a > 1 ||
        (v.getAudioUrl() === void 0
          ? (Ln.show(), console.log("pause 203"), this.video.pause())
          : await this.playAudio(v));
    }
    onVideoVolumeChange(o) {
      console.log("video event: volume-change", o),
        this.updateVideoOriginVolume();
    }
    updateVideoOriginVolume() {
      Zt.isIos()
        ? (this.video.muted = !0)
        : (this.video.volume = ke.originalVolume);
    }
    onVideoRateChange(o) {
      this.isAudioSrcEmpty() ||
        this.rateAdjuster === void 0 ||
        (this.isPlaybackSpeedChangedByUser() &&
          ((this.originPlaybackRate = this.video.playbackRate),
          this.isBiRateModel()
            ? (this.rateAdjuster = new wd())
            : (this.rateAdjuster = new yd()),
          this.rateAdjuster.adjusterPlaybackRate(
            this.iterator.current(),
            this.video,
            this.currentAudio,
            this.originPlaybackRate
          )));
    }
    isPlaybackSpeedChangedByUser() {
      const o = this.video.playbackRate.toString();
      return this.video.playbackRate === 1 || o.length <= 4;
    }
    start(o) {
      (this.subtitles = o),
        (this.iterator = new Sl(
          this.video,
          this.subtitles,
          this.subtitleCreator
        )),
        this.startTask();
    }
    updateVideoVolume(o) {
      this.video.volume = o;
    }
    updateAudioVolume(o) {
      this.isAudioSrcNotEmpty() && (this.currentAudio.volume = o);
    }
    updateVoice() {
      console.log("update voice..."),
        this.audioStop(),
        this.resetVideoPlaybackRate(),
        this.restartTask(this.clearAlreadyLoadTTS.bind(this));
    }
    onFirstPlay() {}
    clearAlreadyLoadTTS() {
      for (let o = 0; o < this.subtitles.length; o++)
        this.subtitles[o].setAudioUrl(void 0);
    }
    videoPause() {
      this.video.paused || (console.log("pause 303"), this.video.pause());
    }
    videoPlay() {
      this.video.paused && this.video.play().then();
    }
    getVideoDuration() {
      return this.video.duration;
    }
    startTask() {
      (this.scheduledSubtitleTask = new la(
        this.subtitles,
        this.iterator.currentIndex,
        this.videoId,
        this.title,
        this.subtitleLevel,
        this.playVideoCallback()
      )),
        this.scheduledSubtitleTask.start();
    }
    restartTask(o) {
      (this.iterator = new Sl(
        this.video,
        this.subtitles,
        this.subtitleCreator
      )),
        this.terminateTask(),
        this.scheduledSubtitleTask.end
          ? (console.log(
              `immediately restart task, video current time == ${this.video.currentTime}`
            ),
            o !== void 0 && o(),
            this.startTask())
          : (console.log("pause 349"),
            this.video.pause(),
            od(this.scheduledSubtitleTask.finallySubject).subscribe((a) => {
              this.video.play().then((v) => {
                console.log(
                  `restart task, video current time == ${this.video.currentTime}`
                ),
                  o !== void 0 && o(),
                  this.startTask();
              });
            }));
    }
    playVideoCallback() {
      if (this.subtitles[this.iterator.currentIndex].getAudioUrl() === void 0)
        return (
          this.isTiggerInitSubsAndTTSLoadComplete ||
            ((this.isTiggerInitSubsAndTTSLoadComplete = !0),
            We(document).trigger(this.initSubsAndTTSLoadCompleteEvent),
            this.onFirstPlay()),
          this.playVideo.bind(this)
        );
    }
    async playVideo() {
      return this.updateVideoOriginVolume(), await this.video.play();
    }
    isBiRateModel() {
      return ke.adjustmentModel;
    }
    async playAudio(o) {
      return (
        (this.currentAudio.src = o.getAudioUrl()),
        this.currentAudio.load(),
        Zt.isIos() || (this.currentAudio.volume = ke.translationVolume),
        We(this.currentAudio).one("loadedmetadata", (a) => {
          this.isAudioSrcEmpty() ||
            (this.isBiRateModel()
              ? ((this.rateAdjuster = new bd()),
                this.rateAdjuster.adjusterPlaybackRate(
                  o,
                  this.video,
                  this.currentAudio,
                  this.originPlaybackRate
                ))
              : ((this.rateAdjuster = new Ad()),
                this.rateAdjuster.adjusterPlaybackRate(
                  o,
                  this.video,
                  this.currentAudio,
                  this.originPlaybackRate
                ),
                console.log(
                  "audio playback rate == " + this.currentAudio.playbackRate
                )),
            (this.currentAudio.currentTime = this.calculateAudioStartTime(o)));
        }),
        We(this.currentAudio).one("ended", () => {
          if (
            o.getSubtitleTimeRange().getStartTime() !==
            this.iterator.current().getSubtitleTimeRange().getStartTime()
          ) {
            console.log("currentAudio already ended event.");
            return;
          }
          console.log(
            "audio end time deviation == " +
              (this.video.currentTime - o.getSubtitleTimeRange().getEndTime()) +
              "s， subtitle == " +
              o.getGoogleTranslation()
          ),
            this.iterator.indexGo(),
            this.resetVideoPlaybackRate(),
            this.iterator.hasNext() && this.playNext();
        }),
        this.currentAudio.play().catch((a) => {
          if (
            a &&
            a
              .toString()
              .toLowerCase()
              .includes(
                "the play() request was interrupted by a call to pause()"
              )
          )
            console.log("ignore play() interrupted error");
          else throw a;
        })
      );
    }
    resetVideoPlaybackRate() {}
    playNext() {
      const o = this.iterator.current();
      o.getSubtitleTimeRange().getStartTime() - this.video.currentTime <= 1
        ? this.playAudio(o).then()
        : this.resetAudio();
    }
    resetAudio() {
      this.currentAudio.removeAttribute("src"),
        console.log("clear src == " + this.currentAudio.src),
        this.currentAudio.load();
    }
    calculateAudioStartTime(o) {
      const a = o.getSubtitleTimeRange(),
        v = this.video.currentTime - a.getStartTime();
      if (la.getId() === this.prevTaskId)
        return console.log("audio start time == 0"), 0;
      if (
        ((this.prevTaskId = la.getId()),
        this.video.currentTime - o.getSubtitleTimeRange().getStartTime() < 1)
      )
        return 0;
      {
        const C =
          (this.currentAudio.duration /
            this.currentAudio.playbackRate /
            a.getDuration()) *
          v;
        return isFinite(C)
          ? C
          : (console.log(
              `this.currentAudio.duration = ${
                this.currentAudio.duration
              } ,this.currentAudio.playbackRate = ${
                this.currentAudio.playbackRate
              },timeRange.getDuration() = ${a.getDuration()},elapsedTime = ${v}  `
            ),
            0);
      }
    }
    audioPause() {
      this.isAudioSrcNotEmpty() &&
        !this.currentAudio.paused &&
        this.currentAudio.pause();
    }
    audioStop() {
      this.isAudioSrcNotEmpty() &&
        (this.currentAudio.paused || this.currentAudio.pause(),
        (this.currentAudio.currentTime = 0),
        this.resetAudio());
    }
    isAudioSrcEmpty() {
      return this.currentAudio.src === "";
    }
    isAudioSrcNotEmpty() {
      return this.currentAudio.src !== "";
    }
    terminate() {
      this.audioStop(), this.terminateTask(), this.unbindEvents();
    }
    unbindEvents() {
      We(this.video)
        .off("pause", this.onVideoPauseHandler)
        .off("playing", this.onVideoPlayingHandler)
        .off("seeked", this.onVideoSeekedHandler)
        .off("waiting", this.onVideoWaitingHandler)
        .off("volumechange", this.onVideoVolumeChangeHandler)
        .off("timeupdate", this.onVideoTimeUpdateHandler)
        .off("ratechange", this.onVideoRateChangeHandler);
    }
    terminateTask() {
      this.scheduledSubtitleTask.terminate();
    }
  }
  const Fn = class Fn {
    constructor(o, a, v, C, S, R) {
      te(this, "_loadTTSSubject", new Po());
      te(this, "_finallySubject", new Po());
      te(this, "_subscription");
      te(this, "_end", !1);
      (this.subtitles = o),
        (this.currentIndex = a),
        (this.videoId = v),
        (this.title = C),
        (this.subtitleLevel = S),
        (this.playVideo = R),
        Fn.id++;
    }
    static getId() {
      return Fn.id;
    }
    get end() {
      return this._end;
    }
    get finallySubject() {
      return this._finallySubject;
    }
    start() {
      (this._subscription = this._loadTTSSubject
        .pipe(
          dd((o) => fl(this.loadSubtitleInfo())),
          fd(() => {
            (this._end = !0), this._finallySubject.next(!0);
          })
        )
        .subscribe()),
        this._loadTTSSubject.next(this.currentIndex);
    }
    terminate() {
      var o;
      (o = this._subscription) == null || o.unsubscribe();
    }
    async loadSubtitleInfo() {
      try {
        await this.loadTTS();
      } catch (o) {
        console.log("load tts error", o);
      }
      ut.isFunction(this.playVideo) &&
        (await this.playVideo(), (this.playVideo = void 0)),
        this.currentIndex < this.subtitles.length &&
          this._loadTTSSubject.next(this.currentIndex);
    }
    async loadTTS() {
      var S;
      let o = br.findMatchingElements(
        this.subtitles,
        this.currentIndex,
        Fn.batchFetchTTSSize,
        (R) => this.isAudioUrlNotLoaded(R)
      );
      if (o.length === 0) {
        console.log("already load all tts, taskId == " + Fn.id),
          (S = this._subscription) == null || S.unsubscribe();
        return;
      }
      let a = [];
      if (ke.translateEngine === "openai" && this.isSupportOpenAi()) {
        let R = await this.translateAiSubtitles(o);
        for (let G = 0; G < o.length; G++)
          this.subtitles[o[G]].setGptTranslation(R[G]), (a[G] = R[G]);
      } else
        ke.translateEngine === "openai" &&
          kr.showNotifyPanel(
            ge.i18n.getMessage("notification"),
            ge.i18n.getMessage("playButtonColor"),
            !0
          ),
          (a = o.map((R) => this.subtitles[R].getGoogleTranslation()));
      const v = await ge.runtime.sendMessage({
        method: "tts",
        data: { textArray: a, voice: ke.voice, videoId: this.videoId },
      });
      for (let R = 0; R < v.length; R++) {
        let G = v[R];
        this.subtitles[o[R]].setAudioUrl(
          URL.createObjectURL(
            new Blob([new Uint8Array(G)], { type: "audio/mp3" })
          )
        );
      }
      const C = ut.last(o);
      (this.currentIndex = C + 1),
        console.log("load tts call end , taskId == " + Fn.id);
    }
    isSupportOpenAi() {
      return this.subtitleLevel === si.GREEN
        ? !0
        : this.subtitleLevel === si.YELLOW
        ? this.subtitles[0].getSubtitleText() !== null &&
          this.subtitles[0].getSubtitleText().length > 0
        : !1;
    }
    async translateAiSubtitles(o) {
      try {
        const a = await ge.runtime.sendMessage({
          method: "translateAiSubtitles",
          data: {
            subtitles: this.convertToOpenAiSubtitleList(o),
            limit: Fn.batchFetchTTSSize,
            videoId: this.videoId,
            toLanguage: ke.toLanguage,
            title: this.title,
            subtitleLevel: this.subtitleLevel,
          },
        });
        return a.code === 0
          ? (kr.clearErrorRuntimeTip(), a.texts)
          : a.code === 1
          ? (kr.showNotifyPanel(
              ge.i18n.getMessage("notification"),
              ge.i18n.getMessage("insufficientBalance"),
              !0
            ),
            this.convertToGoogleTranslatedSubtitleList(o))
          : a.code === 5
          ? (kr.showNotifyPanel(
              ge.i18n.getMessage("notification"),
              ge.i18n.getMessage("membershipRequired"),
              !0
            ),
            this.convertToGoogleTranslatedSubtitleList(o))
          : (kr.showNotifyPanel(
              ge.i18n.getMessage("notification"),
              ge.i18n.getMessage("serviceAbnormal"),
              !0
            ),
            this.convertToGoogleTranslatedSubtitleList(o));
      } catch (a) {
        return (
          console.log("translate ai subtitles error ", a),
          kr.showNotifyPanel(
            ge.i18n.getMessage("notification"),
            ge.i18n.getMessage("openAICallFailed"),
            !0
          ),
          this.convertToGoogleTranslatedSubtitleList(o)
        );
      }
    }
    async convertToGoogleTranslatedSubtitleList(o) {
      return o.map((a) => this.subtitles[a].getGoogleTranslation());
    }
    convertToOpenAiSubtitleList(o) {
      return o.map(
        (a) =>
          new Dd(
            this.subtitles[a].getSubtitleText(),
            this.subtitles[a].getSubtitleTimeRange().getStartTime(),
            this.subtitles[a].getSubtitleTimeRange().getEndTime(),
            a
          )
      );
    }
    isAudioUrlNotLoaded(o) {
      return o.getAudioUrl() === void 0;
    }
  };
  te(Fn, "batchFetchTTSSize", 3), te(Fn, "id", 0);
  let la = Fn;
  class Sl {
    constructor(o, a, v) {
      te(this, "_currentIndex");
      (this.subtitles = a),
        (this.subtitleCreator = v),
        (this._currentIndex = this.findPlaySubtitleIndex(o));
    }
    get currentIndex() {
      return this._currentIndex;
    }
    findPlaySubtitleIndex(o) {
      const a = o.currentTime,
        v = this.subtitleCreator.createOnlyStartTime(a),
        C = ut.sortedIndexBy(this.subtitles, v, (S) =>
          S.getSubtitleTimeRange().getStartTime()
        );
      return C > 0 &&
        a < this.subtitles[C - 1].getSubtitleTimeRange().getEndTime()
        ? C - 1
        : C;
    }
    current() {
      return this.subtitles[this._currentIndex];
    }
    indexGo() {
      return this._currentIndex++, this._currentIndex;
    }
    hasNext() {
      return this._currentIndex < this.subtitles.length;
    }
  }
  var Oa = { exports: {} };
  /*! https://mths.be/he v1.2.0 by @mathias | MIT license */ Oa.exports,
    (function (A, o) {
      (function (a) {
        var v = o,
          C = A && A.exports == v && A,
          S = typeof Ie == "object" && Ie;
        (S.global === S || S.window === S) && (a = S);
        var R = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          G = /[\x01-\x7F]/g,
          J = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
          ee =
            /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
          De = {
            "­": "shy",
            "‌": "zwnj",
            "‍": "zwj",
            "‎": "lrm",
            "⁣": "ic",
            "⁢": "it",
            "⁡": "af",
            "‏": "rlm",
            "​": "ZeroWidthSpace",
            "⁠": "NoBreak",
            "̑": "DownBreve",
            "⃛": "tdot",
            "⃜": "DotDot",
            "	": "Tab",
            "\n": "NewLine",
            " ": "puncsp",
            " ": "MediumSpace",
            " ": "thinsp",
            " ": "hairsp",
            " ": "emsp13",
            " ": "ensp",
            " ": "emsp14",
            " ": "emsp",
            " ": "numsp",
            " ": "nbsp",
            "  ": "ThickSpace",
            "‾": "oline",
            _: "lowbar",
            "‐": "dash",
            "–": "ndash",
            "—": "mdash",
            "―": "horbar",
            ",": "comma",
            ";": "semi",
            "⁏": "bsemi",
            ":": "colon",
            "⩴": "Colone",
            "!": "excl",
            "¡": "iexcl",
            "?": "quest",
            "¿": "iquest",
            ".": "period",
            "‥": "nldr",
            "…": "mldr",
            "·": "middot",
            "'": "apos",
            "‘": "lsquo",
            "’": "rsquo",
            "‚": "sbquo",
            "‹": "lsaquo",
            "›": "rsaquo",
            '"': "quot",
            "“": "ldquo",
            "”": "rdquo",
            "„": "bdquo",
            "«": "laquo",
            "»": "raquo",
            "(": "lpar",
            ")": "rpar",
            "[": "lsqb",
            "]": "rsqb",
            "{": "lcub",
            "}": "rcub",
            "⌈": "lceil",
            "⌉": "rceil",
            "⌊": "lfloor",
            "⌋": "rfloor",
            "⦅": "lopar",
            "⦆": "ropar",
            "⦋": "lbrke",
            "⦌": "rbrke",
            "⦍": "lbrkslu",
            "⦎": "rbrksld",
            "⦏": "lbrksld",
            "⦐": "rbrkslu",
            "⦑": "langd",
            "⦒": "rangd",
            "⦓": "lparlt",
            "⦔": "rpargt",
            "⦕": "gtlPar",
            "⦖": "ltrPar",
            "⟦": "lobrk",
            "⟧": "robrk",
            "⟨": "lang",
            "⟩": "rang",
            "⟪": "Lang",
            "⟫": "Rang",
            "⟬": "loang",
            "⟭": "roang",
            "❲": "lbbrk",
            "❳": "rbbrk",
            "‖": "Vert",
            "§": "sect",
            "¶": "para",
            "@": "commat",
            "*": "ast",
            "/": "sol",
            undefined: null,
            "&": "amp",
            "#": "num",
            "%": "percnt",
            "‰": "permil",
            "‱": "pertenk",
            "†": "dagger",
            "‡": "Dagger",
            "•": "bull",
            "⁃": "hybull",
            "′": "prime",
            "″": "Prime",
            "‴": "tprime",
            "⁗": "qprime",
            "‵": "bprime",
            "⁁": "caret",
            "`": "grave",
            "´": "acute",
            "˜": "tilde",
            "^": "Hat",
            "¯": "macr",
            "˘": "breve",
            "˙": "dot",
            "¨": "die",
            "˚": "ring",
            "˝": "dblac",
            "¸": "cedil",
            "˛": "ogon",
            ˆ: "circ",
            ˇ: "caron",
            "°": "deg",
            "©": "copy",
            "®": "reg",
            "℗": "copysr",
            "℘": "wp",
            "℞": "rx",
            "℧": "mho",
            "℩": "iiota",
            "←": "larr",
            "↚": "nlarr",
            "→": "rarr",
            "↛": "nrarr",
            "↑": "uarr",
            "↓": "darr",
            "↔": "harr",
            "↮": "nharr",
            "↕": "varr",
            "↖": "nwarr",
            "↗": "nearr",
            "↘": "searr",
            "↙": "swarr",
            "↝": "rarrw",
            "↝̸": "nrarrw",
            "↞": "Larr",
            "↟": "Uarr",
            "↠": "Rarr",
            "↡": "Darr",
            "↢": "larrtl",
            "↣": "rarrtl",
            "↤": "mapstoleft",
            "↥": "mapstoup",
            "↦": "map",
            "↧": "mapstodown",
            "↩": "larrhk",
            "↪": "rarrhk",
            "↫": "larrlp",
            "↬": "rarrlp",
            "↭": "harrw",
            "↰": "lsh",
            "↱": "rsh",
            "↲": "ldsh",
            "↳": "rdsh",
            "↵": "crarr",
            "↶": "cularr",
            "↷": "curarr",
            "↺": "olarr",
            "↻": "orarr",
            "↼": "lharu",
            "↽": "lhard",
            "↾": "uharr",
            "↿": "uharl",
            "⇀": "rharu",
            "⇁": "rhard",
            "⇂": "dharr",
            "⇃": "dharl",
            "⇄": "rlarr",
            "⇅": "udarr",
            "⇆": "lrarr",
            "⇇": "llarr",
            "⇈": "uuarr",
            "⇉": "rrarr",
            "⇊": "ddarr",
            "⇋": "lrhar",
            "⇌": "rlhar",
            "⇐": "lArr",
            "⇍": "nlArr",
            "⇑": "uArr",
            "⇒": "rArr",
            "⇏": "nrArr",
            "⇓": "dArr",
            "⇔": "iff",
            "⇎": "nhArr",
            "⇕": "vArr",
            "⇖": "nwArr",
            "⇗": "neArr",
            "⇘": "seArr",
            "⇙": "swArr",
            "⇚": "lAarr",
            "⇛": "rAarr",
            "⇝": "zigrarr",
            "⇤": "larrb",
            "⇥": "rarrb",
            "⇵": "duarr",
            "⇽": "loarr",
            "⇾": "roarr",
            "⇿": "hoarr",
            "∀": "forall",
            "∁": "comp",
            "∂": "part",
            "∂̸": "npart",
            "∃": "exist",
            "∄": "nexist",
            "∅": "empty",
            "∇": "Del",
            "∈": "in",
            "∉": "notin",
            "∋": "ni",
            "∌": "notni",
            "϶": "bepsi",
            "∏": "prod",
            "∐": "coprod",
            "∑": "sum",
            "+": "plus",
            "±": "pm",
            "÷": "div",
            "×": "times",
            "<": "lt",
            "≮": "nlt",
            "<⃒": "nvlt",
            "=": "equals",
            "≠": "ne",
            "=⃥": "bne",
            "⩵": "Equal",
            ">": "gt",
            "≯": "ngt",
            ">⃒": "nvgt",
            "¬": "not",
            "|": "vert",
            "¦": "brvbar",
            "−": "minus",
            "∓": "mp",
            "∔": "plusdo",
            "⁄": "frasl",
            "∖": "setmn",
            "∗": "lowast",
            "∘": "compfn",
            "√": "Sqrt",
            "∝": "prop",
            "∞": "infin",
            "∟": "angrt",
            "∠": "ang",
            "∠⃒": "nang",
            "∡": "angmsd",
            "∢": "angsph",
            "∣": "mid",
            "∤": "nmid",
            "∥": "par",
            "∦": "npar",
            "∧": "and",
            "∨": "or",
            "∩": "cap",
            "∩︀": "caps",
            "∪": "cup",
            "∪︀": "cups",
            "∫": "int",
            "∬": "Int",
            "∭": "tint",
            "⨌": "qint",
            "∮": "oint",
            "∯": "Conint",
            "∰": "Cconint",
            "∱": "cwint",
            "∲": "cwconint",
            "∳": "awconint",
            "∴": "there4",
            "∵": "becaus",
            "∶": "ratio",
            "∷": "Colon",
            "∸": "minusd",
            "∺": "mDDot",
            "∻": "homtht",
            "∼": "sim",
            "≁": "nsim",
            "∼⃒": "nvsim",
            "∽": "bsim",
            "∽̱": "race",
            "∾": "ac",
            "∾̳": "acE",
            "∿": "acd",
            "≀": "wr",
            "≂": "esim",
            "≂̸": "nesim",
            "≃": "sime",
            "≄": "nsime",
            "≅": "cong",
            "≇": "ncong",
            "≆": "simne",
            "≈": "ap",
            "≉": "nap",
            "≊": "ape",
            "≋": "apid",
            "≋̸": "napid",
            "≌": "bcong",
            "≍": "CupCap",
            "≭": "NotCupCap",
            "≍⃒": "nvap",
            "≎": "bump",
            "≎̸": "nbump",
            "≏": "bumpe",
            "≏̸": "nbumpe",
            "≐": "doteq",
            "≐̸": "nedot",
            "≑": "eDot",
            "≒": "efDot",
            "≓": "erDot",
            "≔": "colone",
            "≕": "ecolon",
            "≖": "ecir",
            "≗": "cire",
            "≙": "wedgeq",
            "≚": "veeeq",
            "≜": "trie",
            "≟": "equest",
            "≡": "equiv",
            "≢": "nequiv",
            "≡⃥": "bnequiv",
            "≤": "le",
            "≰": "nle",
            "≤⃒": "nvle",
            "≥": "ge",
            "≱": "nge",
            "≥⃒": "nvge",
            "≦": "lE",
            "≦̸": "nlE",
            "≧": "gE",
            "≧̸": "ngE",
            "≨︀": "lvnE",
            "≨": "lnE",
            "≩": "gnE",
            "≩︀": "gvnE",
            "≪": "ll",
            "≪̸": "nLtv",
            "≪⃒": "nLt",
            "≫": "gg",
            "≫̸": "nGtv",
            "≫⃒": "nGt",
            "≬": "twixt",
            "≲": "lsim",
            "≴": "nlsim",
            "≳": "gsim",
            "≵": "ngsim",
            "≶": "lg",
            "≸": "ntlg",
            "≷": "gl",
            "≹": "ntgl",
            "≺": "pr",
            "⊀": "npr",
            "≻": "sc",
            "⊁": "nsc",
            "≼": "prcue",
            "⋠": "nprcue",
            "≽": "sccue",
            "⋡": "nsccue",
            "≾": "prsim",
            "≿": "scsim",
            "≿̸": "NotSucceedsTilde",
            "⊂": "sub",
            "⊄": "nsub",
            "⊂⃒": "vnsub",
            "⊃": "sup",
            "⊅": "nsup",
            "⊃⃒": "vnsup",
            "⊆": "sube",
            "⊈": "nsube",
            "⊇": "supe",
            "⊉": "nsupe",
            "⊊︀": "vsubne",
            "⊊": "subne",
            "⊋︀": "vsupne",
            "⊋": "supne",
            "⊍": "cupdot",
            "⊎": "uplus",
            "⊏": "sqsub",
            "⊏̸": "NotSquareSubset",
            "⊐": "sqsup",
            "⊐̸": "NotSquareSuperset",
            "⊑": "sqsube",
            "⋢": "nsqsube",
            "⊒": "sqsupe",
            "⋣": "nsqsupe",
            "⊓": "sqcap",
            "⊓︀": "sqcaps",
            "⊔": "sqcup",
            "⊔︀": "sqcups",
            "⊕": "oplus",
            "⊖": "ominus",
            "⊗": "otimes",
            "⊘": "osol",
            "⊙": "odot",
            "⊚": "ocir",
            "⊛": "oast",
            "⊝": "odash",
            "⊞": "plusb",
            "⊟": "minusb",
            "⊠": "timesb",
            "⊡": "sdotb",
            "⊢": "vdash",
            "⊬": "nvdash",
            "⊣": "dashv",
            "⊤": "top",
            "⊥": "bot",
            "⊧": "models",
            "⊨": "vDash",
            "⊭": "nvDash",
            "⊩": "Vdash",
            "⊮": "nVdash",
            "⊪": "Vvdash",
            "⊫": "VDash",
            "⊯": "nVDash",
            "⊰": "prurel",
            "⊲": "vltri",
            "⋪": "nltri",
            "⊳": "vrtri",
            "⋫": "nrtri",
            "⊴": "ltrie",
            "⋬": "nltrie",
            "⊴⃒": "nvltrie",
            "⊵": "rtrie",
            "⋭": "nrtrie",
            "⊵⃒": "nvrtrie",
            "⊶": "origof",
            "⊷": "imof",
            "⊸": "mumap",
            "⊹": "hercon",
            "⊺": "intcal",
            "⊻": "veebar",
            "⊽": "barvee",
            "⊾": "angrtvb",
            "⊿": "lrtri",
            "⋀": "Wedge",
            "⋁": "Vee",
            "⋂": "xcap",
            "⋃": "xcup",
            "⋄": "diam",
            "⋅": "sdot",
            "⋆": "Star",
            "⋇": "divonx",
            "⋈": "bowtie",
            "⋉": "ltimes",
            "⋊": "rtimes",
            "⋋": "lthree",
            "⋌": "rthree",
            "⋍": "bsime",
            "⋎": "cuvee",
            "⋏": "cuwed",
            "⋐": "Sub",
            "⋑": "Sup",
            "⋒": "Cap",
            "⋓": "Cup",
            "⋔": "fork",
            "⋕": "epar",
            "⋖": "ltdot",
            "⋗": "gtdot",
            "⋘": "Ll",
            "⋘̸": "nLl",
            "⋙": "Gg",
            "⋙̸": "nGg",
            "⋚︀": "lesg",
            "⋚": "leg",
            "⋛": "gel",
            "⋛︀": "gesl",
            "⋞": "cuepr",
            "⋟": "cuesc",
            "⋦": "lnsim",
            "⋧": "gnsim",
            "⋨": "prnsim",
            "⋩": "scnsim",
            "⋮": "vellip",
            "⋯": "ctdot",
            "⋰": "utdot",
            "⋱": "dtdot",
            "⋲": "disin",
            "⋳": "isinsv",
            "⋴": "isins",
            "⋵": "isindot",
            "⋵̸": "notindot",
            "⋶": "notinvc",
            "⋷": "notinvb",
            "⋹": "isinE",
            "⋹̸": "notinE",
            "⋺": "nisd",
            "⋻": "xnis",
            "⋼": "nis",
            "⋽": "notnivc",
            "⋾": "notnivb",
            "⌅": "barwed",
            "⌆": "Barwed",
            "⌌": "drcrop",
            "⌍": "dlcrop",
            "⌎": "urcrop",
            "⌏": "ulcrop",
            "⌐": "bnot",
            "⌒": "profline",
            "⌓": "profsurf",
            "⌕": "telrec",
            "⌖": "target",
            "⌜": "ulcorn",
            "⌝": "urcorn",
            "⌞": "dlcorn",
            "⌟": "drcorn",
            "⌢": "frown",
            "⌣": "smile",
            "⌭": "cylcty",
            "⌮": "profalar",
            "⌶": "topbot",
            "⌽": "ovbar",
            "⌿": "solbar",
            "⍼": "angzarr",
            "⎰": "lmoust",
            "⎱": "rmoust",
            "⎴": "tbrk",
            "⎵": "bbrk",
            "⎶": "bbrktbrk",
            "⏜": "OverParenthesis",
            "⏝": "UnderParenthesis",
            "⏞": "OverBrace",
            "⏟": "UnderBrace",
            "⏢": "trpezium",
            "⏧": "elinters",
            "␣": "blank",
            "─": "boxh",
            "│": "boxv",
            "┌": "boxdr",
            "┐": "boxdl",
            "└": "boxur",
            "┘": "boxul",
            "├": "boxvr",
            "┤": "boxvl",
            "┬": "boxhd",
            "┴": "boxhu",
            "┼": "boxvh",
            "═": "boxH",
            "║": "boxV",
            "╒": "boxdR",
            "╓": "boxDr",
            "╔": "boxDR",
            "╕": "boxdL",
            "╖": "boxDl",
            "╗": "boxDL",
            "╘": "boxuR",
            "╙": "boxUr",
            "╚": "boxUR",
            "╛": "boxuL",
            "╜": "boxUl",
            "╝": "boxUL",
            "╞": "boxvR",
            "╟": "boxVr",
            "╠": "boxVR",
            "╡": "boxvL",
            "╢": "boxVl",
            "╣": "boxVL",
            "╤": "boxHd",
            "╥": "boxhD",
            "╦": "boxHD",
            "╧": "boxHu",
            "╨": "boxhU",
            "╩": "boxHU",
            "╪": "boxvH",
            "╫": "boxVh",
            "╬": "boxVH",
            "▀": "uhblk",
            "▄": "lhblk",
            "█": "block",
            "░": "blk14",
            "▒": "blk12",
            "▓": "blk34",
            "□": "squ",
            "▪": "squf",
            "▫": "EmptyVerySmallSquare",
            "▭": "rect",
            "▮": "marker",
            "▱": "fltns",
            "△": "xutri",
            "▴": "utrif",
            "▵": "utri",
            "▸": "rtrif",
            "▹": "rtri",
            "▽": "xdtri",
            "▾": "dtrif",
            "▿": "dtri",
            "◂": "ltrif",
            "◃": "ltri",
            "◊": "loz",
            "○": "cir",
            "◬": "tridot",
            "◯": "xcirc",
            "◸": "ultri",
            "◹": "urtri",
            "◺": "lltri",
            "◻": "EmptySmallSquare",
            "◼": "FilledSmallSquare",
            "★": "starf",
            "☆": "star",
            "☎": "phone",
            "♀": "female",
            "♂": "male",
            "♠": "spades",
            "♣": "clubs",
            "♥": "hearts",
            "♦": "diams",
            "♪": "sung",
            "✓": "check",
            "✗": "cross",
            "✠": "malt",
            "✶": "sext",
            "❘": "VerticalSeparator",
            "⟈": "bsolhsub",
            "⟉": "suphsol",
            "⟵": "xlarr",
            "⟶": "xrarr",
            "⟷": "xharr",
            "⟸": "xlArr",
            "⟹": "xrArr",
            "⟺": "xhArr",
            "⟼": "xmap",
            "⟿": "dzigrarr",
            "⤂": "nvlArr",
            "⤃": "nvrArr",
            "⤄": "nvHarr",
            "⤅": "Map",
            "⤌": "lbarr",
            "⤍": "rbarr",
            "⤎": "lBarr",
            "⤏": "rBarr",
            "⤐": "RBarr",
            "⤑": "DDotrahd",
            "⤒": "UpArrowBar",
            "⤓": "DownArrowBar",
            "⤖": "Rarrtl",
            "⤙": "latail",
            "⤚": "ratail",
            "⤛": "lAtail",
            "⤜": "rAtail",
            "⤝": "larrfs",
            "⤞": "rarrfs",
            "⤟": "larrbfs",
            "⤠": "rarrbfs",
            "⤣": "nwarhk",
            "⤤": "nearhk",
            "⤥": "searhk",
            "⤦": "swarhk",
            "⤧": "nwnear",
            "⤨": "toea",
            "⤩": "tosa",
            "⤪": "swnwar",
            "⤳": "rarrc",
            "⤳̸": "nrarrc",
            "⤵": "cudarrr",
            "⤶": "ldca",
            "⤷": "rdca",
            "⤸": "cudarrl",
            "⤹": "larrpl",
            "⤼": "curarrm",
            "⤽": "cularrp",
            "⥅": "rarrpl",
            "⥈": "harrcir",
            "⥉": "Uarrocir",
            "⥊": "lurdshar",
            "⥋": "ldrushar",
            "⥎": "LeftRightVector",
            "⥏": "RightUpDownVector",
            "⥐": "DownLeftRightVector",
            "⥑": "LeftUpDownVector",
            "⥒": "LeftVectorBar",
            "⥓": "RightVectorBar",
            "⥔": "RightUpVectorBar",
            "⥕": "RightDownVectorBar",
            "⥖": "DownLeftVectorBar",
            "⥗": "DownRightVectorBar",
            "⥘": "LeftUpVectorBar",
            "⥙": "LeftDownVectorBar",
            "⥚": "LeftTeeVector",
            "⥛": "RightTeeVector",
            "⥜": "RightUpTeeVector",
            "⥝": "RightDownTeeVector",
            "⥞": "DownLeftTeeVector",
            "⥟": "DownRightTeeVector",
            "⥠": "LeftUpTeeVector",
            "⥡": "LeftDownTeeVector",
            "⥢": "lHar",
            "⥣": "uHar",
            "⥤": "rHar",
            "⥥": "dHar",
            "⥦": "luruhar",
            "⥧": "ldrdhar",
            "⥨": "ruluhar",
            "⥩": "rdldhar",
            "⥪": "lharul",
            "⥫": "llhard",
            "⥬": "rharul",
            "⥭": "lrhard",
            "⥮": "udhar",
            "⥯": "duhar",
            "⥰": "RoundImplies",
            "⥱": "erarr",
            "⥲": "simrarr",
            "⥳": "larrsim",
            "⥴": "rarrsim",
            "⥵": "rarrap",
            "⥶": "ltlarr",
            "⥸": "gtrarr",
            "⥹": "subrarr",
            "⥻": "suplarr",
            "⥼": "lfisht",
            "⥽": "rfisht",
            "⥾": "ufisht",
            "⥿": "dfisht",
            "⦚": "vzigzag",
            "⦜": "vangrt",
            "⦝": "angrtvbd",
            "⦤": "ange",
            "⦥": "range",
            "⦦": "dwangle",
            "⦧": "uwangle",
            "⦨": "angmsdaa",
            "⦩": "angmsdab",
            "⦪": "angmsdac",
            "⦫": "angmsdad",
            "⦬": "angmsdae",
            "⦭": "angmsdaf",
            "⦮": "angmsdag",
            "⦯": "angmsdah",
            "⦰": "bemptyv",
            "⦱": "demptyv",
            "⦲": "cemptyv",
            "⦳": "raemptyv",
            "⦴": "laemptyv",
            "⦵": "ohbar",
            "⦶": "omid",
            "⦷": "opar",
            "⦹": "operp",
            "⦻": "olcross",
            "⦼": "odsold",
            "⦾": "olcir",
            "⦿": "ofcir",
            "⧀": "olt",
            "⧁": "ogt",
            "⧂": "cirscir",
            "⧃": "cirE",
            "⧄": "solb",
            "⧅": "bsolb",
            "⧉": "boxbox",
            "⧍": "trisb",
            "⧎": "rtriltri",
            "⧏": "LeftTriangleBar",
            "⧏̸": "NotLeftTriangleBar",
            "⧐": "RightTriangleBar",
            "⧐̸": "NotRightTriangleBar",
            "⧜": "iinfin",
            "⧝": "infintie",
            "⧞": "nvinfin",
            "⧣": "eparsl",
            "⧤": "smeparsl",
            "⧥": "eqvparsl",
            "⧫": "lozf",
            "⧴": "RuleDelayed",
            "⧶": "dsol",
            "⨀": "xodot",
            "⨁": "xoplus",
            "⨂": "xotime",
            "⨄": "xuplus",
            "⨆": "xsqcup",
            "⨍": "fpartint",
            "⨐": "cirfnint",
            "⨑": "awint",
            "⨒": "rppolint",
            "⨓": "scpolint",
            "⨔": "npolint",
            "⨕": "pointint",
            "⨖": "quatint",
            "⨗": "intlarhk",
            "⨢": "pluscir",
            "⨣": "plusacir",
            "⨤": "simplus",
            "⨥": "plusdu",
            "⨦": "plussim",
            "⨧": "plustwo",
            "⨩": "mcomma",
            "⨪": "minusdu",
            "⨭": "loplus",
            "⨮": "roplus",
            "⨯": "Cross",
            "⨰": "timesd",
            "⨱": "timesbar",
            "⨳": "smashp",
            "⨴": "lotimes",
            "⨵": "rotimes",
            "⨶": "otimesas",
            "⨷": "Otimes",
            "⨸": "odiv",
            "⨹": "triplus",
            "⨺": "triminus",
            "⨻": "tritime",
            "⨼": "iprod",
            "⨿": "amalg",
            "⩀": "capdot",
            "⩂": "ncup",
            "⩃": "ncap",
            "⩄": "capand",
            "⩅": "cupor",
            "⩆": "cupcap",
            "⩇": "capcup",
            "⩈": "cupbrcap",
            "⩉": "capbrcup",
            "⩊": "cupcup",
            "⩋": "capcap",
            "⩌": "ccups",
            "⩍": "ccaps",
            "⩐": "ccupssm",
            "⩓": "And",
            "⩔": "Or",
            "⩕": "andand",
            "⩖": "oror",
            "⩗": "orslope",
            "⩘": "andslope",
            "⩚": "andv",
            "⩛": "orv",
            "⩜": "andd",
            "⩝": "ord",
            "⩟": "wedbar",
            "⩦": "sdote",
            "⩪": "simdot",
            "⩭": "congdot",
            "⩭̸": "ncongdot",
            "⩮": "easter",
            "⩯": "apacir",
            "⩰": "apE",
            "⩰̸": "napE",
            "⩱": "eplus",
            "⩲": "pluse",
            "⩳": "Esim",
            "⩷": "eDDot",
            "⩸": "equivDD",
            "⩹": "ltcir",
            "⩺": "gtcir",
            "⩻": "ltquest",
            "⩼": "gtquest",
            "⩽": "les",
            "⩽̸": "nles",
            "⩾": "ges",
            "⩾̸": "nges",
            "⩿": "lesdot",
            "⪀": "gesdot",
            "⪁": "lesdoto",
            "⪂": "gesdoto",
            "⪃": "lesdotor",
            "⪄": "gesdotol",
            "⪅": "lap",
            "⪆": "gap",
            "⪇": "lne",
            "⪈": "gne",
            "⪉": "lnap",
            "⪊": "gnap",
            "⪋": "lEg",
            "⪌": "gEl",
            "⪍": "lsime",
            "⪎": "gsime",
            "⪏": "lsimg",
            "⪐": "gsiml",
            "⪑": "lgE",
            "⪒": "glE",
            "⪓": "lesges",
            "⪔": "gesles",
            "⪕": "els",
            "⪖": "egs",
            "⪗": "elsdot",
            "⪘": "egsdot",
            "⪙": "el",
            "⪚": "eg",
            "⪝": "siml",
            "⪞": "simg",
            "⪟": "simlE",
            "⪠": "simgE",
            "⪡": "LessLess",
            "⪡̸": "NotNestedLessLess",
            "⪢": "GreaterGreater",
            "⪢̸": "NotNestedGreaterGreater",
            "⪤": "glj",
            "⪥": "gla",
            "⪦": "ltcc",
            "⪧": "gtcc",
            "⪨": "lescc",
            "⪩": "gescc",
            "⪪": "smt",
            "⪫": "lat",
            "⪬": "smte",
            "⪬︀": "smtes",
            "⪭": "late",
            "⪭︀": "lates",
            "⪮": "bumpE",
            "⪯": "pre",
            "⪯̸": "npre",
            "⪰": "sce",
            "⪰̸": "nsce",
            "⪳": "prE",
            "⪴": "scE",
            "⪵": "prnE",
            "⪶": "scnE",
            "⪷": "prap",
            "⪸": "scap",
            "⪹": "prnap",
            "⪺": "scnap",
            "⪻": "Pr",
            "⪼": "Sc",
            "⪽": "subdot",
            "⪾": "supdot",
            "⪿": "subplus",
            "⫀": "supplus",
            "⫁": "submult",
            "⫂": "supmult",
            "⫃": "subedot",
            "⫄": "supedot",
            "⫅": "subE",
            "⫅̸": "nsubE",
            "⫆": "supE",
            "⫆̸": "nsupE",
            "⫇": "subsim",
            "⫈": "supsim",
            "⫋︀": "vsubnE",
            "⫋": "subnE",
            "⫌︀": "vsupnE",
            "⫌": "supnE",
            "⫏": "csub",
            "⫐": "csup",
            "⫑": "csube",
            "⫒": "csupe",
            "⫓": "subsup",
            "⫔": "supsub",
            "⫕": "subsub",
            "⫖": "supsup",
            "⫗": "suphsub",
            "⫘": "supdsub",
            "⫙": "forkv",
            "⫚": "topfork",
            "⫛": "mlcp",
            "⫤": "Dashv",
            "⫦": "Vdashl",
            "⫧": "Barv",
            "⫨": "vBar",
            "⫩": "vBarv",
            "⫫": "Vbar",
            "⫬": "Not",
            "⫭": "bNot",
            "⫮": "rnmid",
            "⫯": "cirmid",
            "⫰": "midcir",
            "⫱": "topcir",
            "⫲": "nhpar",
            "⫳": "parsim",
            "⫽": "parsl",
            "⫽⃥": "nparsl",
            "♭": "flat",
            "♮": "natur",
            "♯": "sharp",
            "¤": "curren",
            "¢": "cent",
            $: "dollar",
            "£": "pound",
            "¥": "yen",
            "€": "euro",
            "¹": "sup1",
            "½": "half",
            "⅓": "frac13",
            "¼": "frac14",
            "⅕": "frac15",
            "⅙": "frac16",
            "⅛": "frac18",
            "²": "sup2",
            "⅔": "frac23",
            "⅖": "frac25",
            "³": "sup3",
            "¾": "frac34",
            "⅗": "frac35",
            "⅜": "frac38",
            "⅘": "frac45",
            "⅚": "frac56",
            "⅝": "frac58",
            "⅞": "frac78",
            "𝒶": "ascr",
            "𝕒": "aopf",
            "𝔞": "afr",
            "𝔸": "Aopf",
            "𝔄": "Afr",
            "𝒜": "Ascr",
            ª: "ordf",
            á: "aacute",
            Á: "Aacute",
            à: "agrave",
            À: "Agrave",
            ă: "abreve",
            Ă: "Abreve",
            â: "acirc",
            Â: "Acirc",
            å: "aring",
            Å: "angst",
            ä: "auml",
            Ä: "Auml",
            ã: "atilde",
            Ã: "Atilde",
            ą: "aogon",
            Ą: "Aogon",
            ā: "amacr",
            Ā: "Amacr",
            æ: "aelig",
            Æ: "AElig",
            "𝒷": "bscr",
            "𝕓": "bopf",
            "𝔟": "bfr",
            "𝔹": "Bopf",
            ℬ: "Bscr",
            "𝔅": "Bfr",
            "𝔠": "cfr",
            "𝒸": "cscr",
            "𝕔": "copf",
            ℭ: "Cfr",
            "𝒞": "Cscr",
            ℂ: "Copf",
            ć: "cacute",
            Ć: "Cacute",
            ĉ: "ccirc",
            Ĉ: "Ccirc",
            č: "ccaron",
            Č: "Ccaron",
            ċ: "cdot",
            Ċ: "Cdot",
            ç: "ccedil",
            Ç: "Ccedil",
            "℅": "incare",
            "𝔡": "dfr",
            ⅆ: "dd",
            "𝕕": "dopf",
            "𝒹": "dscr",
            "𝒟": "Dscr",
            "𝔇": "Dfr",
            ⅅ: "DD",
            "𝔻": "Dopf",
            ď: "dcaron",
            Ď: "Dcaron",
            đ: "dstrok",
            Đ: "Dstrok",
            ð: "eth",
            Ð: "ETH",
            ⅇ: "ee",
            ℯ: "escr",
            "𝔢": "efr",
            "𝕖": "eopf",
            ℰ: "Escr",
            "𝔈": "Efr",
            "𝔼": "Eopf",
            é: "eacute",
            É: "Eacute",
            è: "egrave",
            È: "Egrave",
            ê: "ecirc",
            Ê: "Ecirc",
            ě: "ecaron",
            Ě: "Ecaron",
            ë: "euml",
            Ë: "Euml",
            ė: "edot",
            Ė: "Edot",
            ę: "eogon",
            Ę: "Eogon",
            ē: "emacr",
            Ē: "Emacr",
            "𝔣": "ffr",
            "𝕗": "fopf",
            "𝒻": "fscr",
            "𝔉": "Ffr",
            "𝔽": "Fopf",
            ℱ: "Fscr",
            ﬀ: "fflig",
            ﬃ: "ffilig",
            ﬄ: "ffllig",
            ﬁ: "filig",
            fj: "fjlig",
            ﬂ: "fllig",
            ƒ: "fnof",
            ℊ: "gscr",
            "𝕘": "gopf",
            "𝔤": "gfr",
            "𝒢": "Gscr",
            "𝔾": "Gopf",
            "𝔊": "Gfr",
            ǵ: "gacute",
            ğ: "gbreve",
            Ğ: "Gbreve",
            ĝ: "gcirc",
            Ĝ: "Gcirc",
            ġ: "gdot",
            Ġ: "Gdot",
            Ģ: "Gcedil",
            "𝔥": "hfr",
            ℎ: "planckh",
            "𝒽": "hscr",
            "𝕙": "hopf",
            ℋ: "Hscr",
            ℌ: "Hfr",
            ℍ: "Hopf",
            ĥ: "hcirc",
            Ĥ: "Hcirc",
            ℏ: "hbar",
            ħ: "hstrok",
            Ħ: "Hstrok",
            "𝕚": "iopf",
            "𝔦": "ifr",
            "𝒾": "iscr",
            ⅈ: "ii",
            "𝕀": "Iopf",
            ℐ: "Iscr",
            ℑ: "Im",
            í: "iacute",
            Í: "Iacute",
            ì: "igrave",
            Ì: "Igrave",
            î: "icirc",
            Î: "Icirc",
            ï: "iuml",
            Ï: "Iuml",
            ĩ: "itilde",
            Ĩ: "Itilde",
            İ: "Idot",
            į: "iogon",
            Į: "Iogon",
            ī: "imacr",
            Ī: "Imacr",
            ĳ: "ijlig",
            Ĳ: "IJlig",
            ı: "imath",
            "𝒿": "jscr",
            "𝕛": "jopf",
            "𝔧": "jfr",
            "𝒥": "Jscr",
            "𝔍": "Jfr",
            "𝕁": "Jopf",
            ĵ: "jcirc",
            Ĵ: "Jcirc",
            ȷ: "jmath",
            "𝕜": "kopf",
            "𝓀": "kscr",
            "𝔨": "kfr",
            "𝒦": "Kscr",
            "𝕂": "Kopf",
            "𝔎": "Kfr",
            ķ: "kcedil",
            Ķ: "Kcedil",
            "𝔩": "lfr",
            "𝓁": "lscr",
            ℓ: "ell",
            "𝕝": "lopf",
            ℒ: "Lscr",
            "𝔏": "Lfr",
            "𝕃": "Lopf",
            ĺ: "lacute",
            Ĺ: "Lacute",
            ľ: "lcaron",
            Ľ: "Lcaron",
            ļ: "lcedil",
            Ļ: "Lcedil",
            ł: "lstrok",
            Ł: "Lstrok",
            ŀ: "lmidot",
            Ŀ: "Lmidot",
            "𝔪": "mfr",
            "𝕞": "mopf",
            "𝓂": "mscr",
            "𝔐": "Mfr",
            "𝕄": "Mopf",
            ℳ: "Mscr",
            "𝔫": "nfr",
            "𝕟": "nopf",
            "𝓃": "nscr",
            ℕ: "Nopf",
            "𝒩": "Nscr",
            "𝔑": "Nfr",
            ń: "nacute",
            Ń: "Nacute",
            ň: "ncaron",
            Ň: "Ncaron",
            ñ: "ntilde",
            Ñ: "Ntilde",
            ņ: "ncedil",
            Ņ: "Ncedil",
            "№": "numero",
            ŋ: "eng",
            Ŋ: "ENG",
            "𝕠": "oopf",
            "𝔬": "ofr",
            ℴ: "oscr",
            "𝒪": "Oscr",
            "𝔒": "Ofr",
            "𝕆": "Oopf",
            º: "ordm",
            ó: "oacute",
            Ó: "Oacute",
            ò: "ograve",
            Ò: "Ograve",
            ô: "ocirc",
            Ô: "Ocirc",
            ö: "ouml",
            Ö: "Ouml",
            ő: "odblac",
            Ő: "Odblac",
            õ: "otilde",
            Õ: "Otilde",
            ø: "oslash",
            Ø: "Oslash",
            ō: "omacr",
            Ō: "Omacr",
            œ: "oelig",
            Œ: "OElig",
            "𝔭": "pfr",
            "𝓅": "pscr",
            "𝕡": "popf",
            ℙ: "Popf",
            "𝔓": "Pfr",
            "𝒫": "Pscr",
            "𝕢": "qopf",
            "𝔮": "qfr",
            "𝓆": "qscr",
            "𝒬": "Qscr",
            "𝔔": "Qfr",
            ℚ: "Qopf",
            ĸ: "kgreen",
            "𝔯": "rfr",
            "𝕣": "ropf",
            "𝓇": "rscr",
            ℛ: "Rscr",
            ℜ: "Re",
            ℝ: "Ropf",
            ŕ: "racute",
            Ŕ: "Racute",
            ř: "rcaron",
            Ř: "Rcaron",
            ŗ: "rcedil",
            Ŗ: "Rcedil",
            "𝕤": "sopf",
            "𝓈": "sscr",
            "𝔰": "sfr",
            "𝕊": "Sopf",
            "𝔖": "Sfr",
            "𝒮": "Sscr",
            "Ⓢ": "oS",
            ś: "sacute",
            Ś: "Sacute",
            ŝ: "scirc",
            Ŝ: "Scirc",
            š: "scaron",
            Š: "Scaron",
            ş: "scedil",
            Ş: "Scedil",
            ß: "szlig",
            "𝔱": "tfr",
            "𝓉": "tscr",
            "𝕥": "topf",
            "𝒯": "Tscr",
            "𝔗": "Tfr",
            "𝕋": "Topf",
            ť: "tcaron",
            Ť: "Tcaron",
            ţ: "tcedil",
            Ţ: "Tcedil",
            "™": "trade",
            ŧ: "tstrok",
            Ŧ: "Tstrok",
            "𝓊": "uscr",
            "𝕦": "uopf",
            "𝔲": "ufr",
            "𝕌": "Uopf",
            "𝔘": "Ufr",
            "𝒰": "Uscr",
            ú: "uacute",
            Ú: "Uacute",
            ù: "ugrave",
            Ù: "Ugrave",
            ŭ: "ubreve",
            Ŭ: "Ubreve",
            û: "ucirc",
            Û: "Ucirc",
            ů: "uring",
            Ů: "Uring",
            ü: "uuml",
            Ü: "Uuml",
            ű: "udblac",
            Ű: "Udblac",
            ũ: "utilde",
            Ũ: "Utilde",
            ų: "uogon",
            Ų: "Uogon",
            ū: "umacr",
            Ū: "Umacr",
            "𝔳": "vfr",
            "𝕧": "vopf",
            "𝓋": "vscr",
            "𝔙": "Vfr",
            "𝕍": "Vopf",
            "𝒱": "Vscr",
            "𝕨": "wopf",
            "𝓌": "wscr",
            "𝔴": "wfr",
            "𝒲": "Wscr",
            "𝕎": "Wopf",
            "𝔚": "Wfr",
            ŵ: "wcirc",
            Ŵ: "Wcirc",
            "𝔵": "xfr",
            "𝓍": "xscr",
            "𝕩": "xopf",
            "𝕏": "Xopf",
            "𝔛": "Xfr",
            "𝒳": "Xscr",
            "𝔶": "yfr",
            "𝓎": "yscr",
            "𝕪": "yopf",
            "𝒴": "Yscr",
            "𝔜": "Yfr",
            "𝕐": "Yopf",
            ý: "yacute",
            Ý: "Yacute",
            ŷ: "ycirc",
            Ŷ: "Ycirc",
            ÿ: "yuml",
            Ÿ: "Yuml",
            "𝓏": "zscr",
            "𝔷": "zfr",
            "𝕫": "zopf",
            ℨ: "Zfr",
            ℤ: "Zopf",
            "𝒵": "Zscr",
            ź: "zacute",
            Ź: "Zacute",
            ž: "zcaron",
            Ž: "Zcaron",
            ż: "zdot",
            Ż: "Zdot",
            Ƶ: "imped",
            þ: "thorn",
            Þ: "THORN",
            ŉ: "napos",
            α: "alpha",
            Α: "Alpha",
            β: "beta",
            Β: "Beta",
            γ: "gamma",
            Γ: "Gamma",
            δ: "delta",
            Δ: "Delta",
            ε: "epsi",
            ϵ: "epsiv",
            Ε: "Epsilon",
            ϝ: "gammad",
            Ϝ: "Gammad",
            ζ: "zeta",
            Ζ: "Zeta",
            η: "eta",
            Η: "Eta",
            θ: "theta",
            ϑ: "thetav",
            Θ: "Theta",
            ι: "iota",
            Ι: "Iota",
            κ: "kappa",
            ϰ: "kappav",
            Κ: "Kappa",
            λ: "lambda",
            Λ: "Lambda",
            μ: "mu",
            µ: "micro",
            Μ: "Mu",
            ν: "nu",
            Ν: "Nu",
            ξ: "xi",
            Ξ: "Xi",
            ο: "omicron",
            Ο: "Omicron",
            π: "pi",
            ϖ: "piv",
            Π: "Pi",
            ρ: "rho",
            ϱ: "rhov",
            Ρ: "Rho",
            σ: "sigma",
            Σ: "Sigma",
            ς: "sigmaf",
            τ: "tau",
            Τ: "Tau",
            υ: "upsi",
            Υ: "Upsilon",
            ϒ: "Upsi",
            φ: "phi",
            ϕ: "phiv",
            Φ: "Phi",
            χ: "chi",
            Χ: "Chi",
            ψ: "psi",
            Ψ: "Psi",
            ω: "omega",
            Ω: "ohm",
            а: "acy",
            А: "Acy",
            б: "bcy",
            Б: "Bcy",
            в: "vcy",
            В: "Vcy",
            г: "gcy",
            Г: "Gcy",
            ѓ: "gjcy",
            Ѓ: "GJcy",
            д: "dcy",
            Д: "Dcy",
            ђ: "djcy",
            Ђ: "DJcy",
            е: "iecy",
            Е: "IEcy",
            ё: "iocy",
            Ё: "IOcy",
            є: "jukcy",
            Є: "Jukcy",
            ж: "zhcy",
            Ж: "ZHcy",
            з: "zcy",
            З: "Zcy",
            ѕ: "dscy",
            Ѕ: "DScy",
            и: "icy",
            И: "Icy",
            і: "iukcy",
            І: "Iukcy",
            ї: "yicy",
            Ї: "YIcy",
            й: "jcy",
            Й: "Jcy",
            ј: "jsercy",
            Ј: "Jsercy",
            к: "kcy",
            К: "Kcy",
            ќ: "kjcy",
            Ќ: "KJcy",
            л: "lcy",
            Л: "Lcy",
            љ: "ljcy",
            Љ: "LJcy",
            м: "mcy",
            М: "Mcy",
            н: "ncy",
            Н: "Ncy",
            њ: "njcy",
            Њ: "NJcy",
            о: "ocy",
            О: "Ocy",
            п: "pcy",
            П: "Pcy",
            р: "rcy",
            Р: "Rcy",
            с: "scy",
            С: "Scy",
            т: "tcy",
            Т: "Tcy",
            ћ: "tshcy",
            Ћ: "TSHcy",
            у: "ucy",
            У: "Ucy",
            ў: "ubrcy",
            Ў: "Ubrcy",
            ф: "fcy",
            Ф: "Fcy",
            х: "khcy",
            Х: "KHcy",
            ц: "tscy",
            Ц: "TScy",
            ч: "chcy",
            Ч: "CHcy",
            џ: "dzcy",
            Џ: "DZcy",
            ш: "shcy",
            Ш: "SHcy",
            щ: "shchcy",
            Щ: "SHCHcy",
            ъ: "hardcy",
            Ъ: "HARDcy",
            ы: "ycy",
            Ы: "Ycy",
            ь: "softcy",
            Ь: "SOFTcy",
            э: "ecy",
            Э: "Ecy",
            ю: "yucy",
            Ю: "YUcy",
            я: "yacy",
            Я: "YAcy",
            ℵ: "aleph",
            ℶ: "beth",
            ℷ: "gimel",
            ℸ: "daleth",
          },
          Ve = /["&'<>`]/g,
          ze = {
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#x27;",
            "<": "&lt;",
            ">": "&gt;",
            "`": "&#x60;",
          },
          tt = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
          de =
            /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
          se =
            /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
          at = {
            aacute: "á",
            Aacute: "Á",
            abreve: "ă",
            Abreve: "Ă",
            ac: "∾",
            acd: "∿",
            acE: "∾̳",
            acirc: "â",
            Acirc: "Â",
            acute: "´",
            acy: "а",
            Acy: "А",
            aelig: "æ",
            AElig: "Æ",
            af: "⁡",
            afr: "𝔞",
            Afr: "𝔄",
            agrave: "à",
            Agrave: "À",
            alefsym: "ℵ",
            aleph: "ℵ",
            alpha: "α",
            Alpha: "Α",
            amacr: "ā",
            Amacr: "Ā",
            amalg: "⨿",
            amp: "&",
            AMP: "&",
            and: "∧",
            And: "⩓",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            aogon: "ą",
            Aogon: "Ą",
            aopf: "𝕒",
            Aopf: "𝔸",
            ap: "≈",
            apacir: "⩯",
            ape: "≊",
            apE: "⩰",
            apid: "≋",
            apos: "'",
            ApplyFunction: "⁡",
            approx: "≈",
            approxeq: "≊",
            aring: "å",
            Aring: "Å",
            ascr: "𝒶",
            Ascr: "𝒜",
            Assign: "≔",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            atilde: "ã",
            Atilde: "Ã",
            auml: "ä",
            Auml: "Ä",
            awconint: "∳",
            awint: "⨑",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            Backslash: "∖",
            Barv: "⫧",
            barvee: "⊽",
            barwed: "⌅",
            Barwed: "⌆",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            bcy: "б",
            Bcy: "Б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            Because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            Bernoullis: "ℬ",
            beta: "β",
            Beta: "Β",
            beth: "ℶ",
            between: "≬",
            bfr: "𝔟",
            Bfr: "𝔅",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bnot: "⌐",
            bNot: "⫭",
            bopf: "𝕓",
            Bopf: "𝔹",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxbox: "⧉",
            boxdl: "┐",
            boxdL: "╕",
            boxDl: "╖",
            boxDL: "╗",
            boxdr: "┌",
            boxdR: "╒",
            boxDr: "╓",
            boxDR: "╔",
            boxh: "─",
            boxH: "═",
            boxhd: "┬",
            boxhD: "╥",
            boxHd: "╤",
            boxHD: "╦",
            boxhu: "┴",
            boxhU: "╨",
            boxHu: "╧",
            boxHU: "╩",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxul: "┘",
            boxuL: "╛",
            boxUl: "╜",
            boxUL: "╝",
            boxur: "└",
            boxuR: "╘",
            boxUr: "╙",
            boxUR: "╚",
            boxv: "│",
            boxV: "║",
            boxvh: "┼",
            boxvH: "╪",
            boxVh: "╫",
            boxVH: "╬",
            boxvl: "┤",
            boxvL: "╡",
            boxVl: "╢",
            boxVL: "╣",
            boxvr: "├",
            boxvR: "╞",
            boxVr: "╟",
            boxVR: "╠",
            bprime: "‵",
            breve: "˘",
            Breve: "˘",
            brvbar: "¦",
            bscr: "𝒷",
            Bscr: "ℬ",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpe: "≏",
            bumpE: "⪮",
            bumpeq: "≏",
            Bumpeq: "≎",
            cacute: "ć",
            Cacute: "Ć",
            cap: "∩",
            Cap: "⋒",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            CapitalDifferentialD: "ⅅ",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            Cayleys: "ℭ",
            ccaps: "⩍",
            ccaron: "č",
            Ccaron: "Č",
            ccedil: "ç",
            Ccedil: "Ç",
            ccirc: "ĉ",
            Ccirc: "Ĉ",
            Cconint: "∰",
            ccups: "⩌",
            ccupssm: "⩐",
            cdot: "ċ",
            Cdot: "Ċ",
            cedil: "¸",
            Cedilla: "¸",
            cemptyv: "⦲",
            cent: "¢",
            centerdot: "·",
            CenterDot: "·",
            cfr: "𝔠",
            Cfr: "ℭ",
            chcy: "ч",
            CHcy: "Ч",
            check: "✓",
            checkmark: "✓",
            chi: "χ",
            Chi: "Χ",
            cir: "○",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            CircleDot: "⊙",
            circledR: "®",
            circledS: "Ⓢ",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            cire: "≗",
            cirE: "⧃",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            Colon: "∷",
            colone: "≔",
            Colone: "⩴",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            Congruent: "≡",
            conint: "∮",
            Conint: "∯",
            ContourIntegral: "∮",
            copf: "𝕔",
            Copf: "ℂ",
            coprod: "∐",
            Coproduct: "∐",
            copy: "©",
            COPY: "©",
            copysr: "℗",
            CounterClockwiseContourIntegral: "∳",
            crarr: "↵",
            cross: "✗",
            Cross: "⨯",
            cscr: "𝒸",
            Cscr: "𝒞",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cup: "∪",
            Cup: "⋓",
            cupbrcap: "⩈",
            cupcap: "⩆",
            CupCap: "≍",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "¤",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dagger: "†",
            Dagger: "‡",
            daleth: "ℸ",
            darr: "↓",
            dArr: "⇓",
            Darr: "↡",
            dash: "‐",
            dashv: "⊣",
            Dashv: "⫤",
            dbkarow: "⤏",
            dblac: "˝",
            dcaron: "ď",
            Dcaron: "Ď",
            dcy: "д",
            Dcy: "Д",
            dd: "ⅆ",
            DD: "ⅅ",
            ddagger: "‡",
            ddarr: "⇊",
            DDotrahd: "⤑",
            ddotseq: "⩷",
            deg: "°",
            Del: "∇",
            delta: "δ",
            Delta: "Δ",
            demptyv: "⦱",
            dfisht: "⥿",
            dfr: "𝔡",
            Dfr: "𝔇",
            dHar: "⥥",
            dharl: "⇃",
            dharr: "⇂",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            diam: "⋄",
            diamond: "⋄",
            Diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            DifferentialD: "ⅆ",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divide: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            djcy: "ђ",
            DJcy: "Ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            dopf: "𝕕",
            Dopf: "𝔻",
            dot: "˙",
            Dot: "¨",
            DotDot: "⃜",
            doteq: "≐",
            doteqdot: "≑",
            DotEqual: "≐",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            downarrow: "↓",
            Downarrow: "⇓",
            DownArrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            dscr: "𝒹",
            Dscr: "𝒟",
            dscy: "ѕ",
            DScy: "Ѕ",
            dsol: "⧶",
            dstrok: "đ",
            Dstrok: "Đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            dzcy: "џ",
            DZcy: "Џ",
            dzigrarr: "⟿",
            eacute: "é",
            Eacute: "É",
            easter: "⩮",
            ecaron: "ě",
            Ecaron: "Ě",
            ecir: "≖",
            ecirc: "ê",
            Ecirc: "Ê",
            ecolon: "≕",
            ecy: "э",
            Ecy: "Э",
            eDDot: "⩷",
            edot: "ė",
            eDot: "≑",
            Edot: "Ė",
            ee: "ⅇ",
            efDot: "≒",
            efr: "𝔢",
            Efr: "𝔈",
            eg: "⪚",
            egrave: "è",
            Egrave: "È",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            Element: "∈",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            emacr: "ē",
            Emacr: "Ē",
            empty: "∅",
            emptyset: "∅",
            EmptySmallSquare: "◻",
            emptyv: "∅",
            EmptyVerySmallSquare: "▫",
            emsp: " ",
            emsp13: " ",
            emsp14: " ",
            eng: "ŋ",
            ENG: "Ŋ",
            ensp: " ",
            eogon: "ę",
            Eogon: "Ę",
            eopf: "𝕖",
            Eopf: "𝔼",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            epsilon: "ε",
            Epsilon: "Ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            Equal: "⩵",
            equals: "=",
            EqualTilde: "≂",
            equest: "≟",
            Equilibrium: "⇌",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erarr: "⥱",
            erDot: "≓",
            escr: "ℯ",
            Escr: "ℰ",
            esdot: "≐",
            esim: "≂",
            Esim: "⩳",
            eta: "η",
            Eta: "Η",
            eth: "ð",
            ETH: "Ð",
            euml: "ë",
            Euml: "Ë",
            euro: "€",
            excl: "!",
            exist: "∃",
            Exists: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            ExponentialE: "ⅇ",
            fallingdotseq: "≒",
            fcy: "ф",
            Fcy: "Ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            ffr: "𝔣",
            Ffr: "𝔉",
            filig: "ﬁ",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            fopf: "𝕗",
            Fopf: "𝔽",
            forall: "∀",
            ForAll: "∀",
            fork: "⋔",
            forkv: "⫙",
            Fouriertrf: "ℱ",
            fpartint: "⨍",
            frac12: "½",
            frac13: "⅓",
            frac14: "¼",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "¾",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "𝒻",
            Fscr: "ℱ",
            gacute: "ǵ",
            gamma: "γ",
            Gamma: "Γ",
            gammad: "ϝ",
            Gammad: "Ϝ",
            gap: "⪆",
            gbreve: "ğ",
            Gbreve: "Ğ",
            Gcedil: "Ģ",
            gcirc: "ĝ",
            Gcirc: "Ĝ",
            gcy: "г",
            Gcy: "Г",
            gdot: "ġ",
            Gdot: "Ġ",
            ge: "≥",
            gE: "≧",
            gel: "⋛",
            gEl: "⪌",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            gfr: "𝔤",
            Gfr: "𝔊",
            gg: "≫",
            Gg: "⋙",
            ggg: "⋙",
            gimel: "ℷ",
            gjcy: "ѓ",
            GJcy: "Ѓ",
            gl: "≷",
            gla: "⪥",
            glE: "⪒",
            glj: "⪤",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gnE: "≩",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            gopf: "𝕘",
            Gopf: "𝔾",
            grave: "`",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            gscr: "ℊ",
            Gscr: "𝒢",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gt: ">",
            Gt: "≫",
            GT: ">",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            Hacek: "ˇ",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            hardcy: "ъ",
            HARDcy: "Ъ",
            harr: "↔",
            hArr: "⇔",
            harrcir: "⥈",
            harrw: "↭",
            Hat: "^",
            hbar: "ℏ",
            hcirc: "ĥ",
            Hcirc: "Ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "𝔥",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "𝕙",
            Hopf: "ℍ",
            horbar: "―",
            HorizontalLine: "─",
            hscr: "𝒽",
            Hscr: "ℋ",
            hslash: "ℏ",
            hstrok: "ħ",
            Hstrok: "Ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            hybull: "⁃",
            hyphen: "‐",
            iacute: "í",
            Iacute: "Í",
            ic: "⁣",
            icirc: "î",
            Icirc: "Î",
            icy: "и",
            Icy: "И",
            Idot: "İ",
            iecy: "е",
            IEcy: "Е",
            iexcl: "¡",
            iff: "⇔",
            ifr: "𝔦",
            Ifr: "ℑ",
            igrave: "ì",
            Igrave: "Ì",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            ijlig: "ĳ",
            IJlig: "Ĳ",
            Im: "ℑ",
            imacr: "ī",
            Imacr: "Ī",
            image: "ℑ",
            ImaginaryI: "ⅈ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            Implies: "⇒",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            int: "∫",
            Int: "∬",
            intcal: "⊺",
            integers: "ℤ",
            Integral: "∫",
            intercal: "⊺",
            Intersection: "⋂",
            intlarhk: "⨗",
            intprod: "⨼",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            iocy: "ё",
            IOcy: "Ё",
            iogon: "į",
            Iogon: "Į",
            iopf: "𝕚",
            Iopf: "𝕀",
            iota: "ι",
            Iota: "Ι",
            iprod: "⨼",
            iquest: "¿",
            iscr: "𝒾",
            Iscr: "ℐ",
            isin: "∈",
            isindot: "⋵",
            isinE: "⋹",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            itilde: "ĩ",
            Itilde: "Ĩ",
            iukcy: "і",
            Iukcy: "І",
            iuml: "ï",
            Iuml: "Ï",
            jcirc: "ĵ",
            Jcirc: "Ĵ",
            jcy: "й",
            Jcy: "Й",
            jfr: "𝔧",
            Jfr: "𝔍",
            jmath: "ȷ",
            jopf: "𝕛",
            Jopf: "𝕁",
            jscr: "𝒿",
            Jscr: "𝒥",
            jsercy: "ј",
            Jsercy: "Ј",
            jukcy: "є",
            Jukcy: "Є",
            kappa: "κ",
            Kappa: "Κ",
            kappav: "ϰ",
            kcedil: "ķ",
            Kcedil: "Ķ",
            kcy: "к",
            Kcy: "К",
            kfr: "𝔨",
            Kfr: "𝔎",
            kgreen: "ĸ",
            khcy: "х",
            KHcy: "Х",
            kjcy: "ќ",
            KJcy: "Ќ",
            kopf: "𝕜",
            Kopf: "𝕂",
            kscr: "𝓀",
            Kscr: "𝒦",
            lAarr: "⇚",
            lacute: "ĺ",
            Lacute: "Ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            lambda: "λ",
            Lambda: "Λ",
            lang: "⟨",
            Lang: "⟪",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            Laplacetrf: "ℒ",
            laquo: "«",
            larr: "←",
            lArr: "⇐",
            Larr: "↞",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            latail: "⤙",
            lAtail: "⤛",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lBarr: "⤎",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            lcaron: "ľ",
            Lcaron: "Ľ",
            lcedil: "ļ",
            Lcedil: "Ļ",
            lceil: "⌈",
            lcub: "{",
            lcy: "л",
            Lcy: "Л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            lE: "≦",
            LeftAngleBracket: "⟨",
            leftarrow: "←",
            Leftarrow: "⇐",
            LeftArrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            leftarrowtail: "↢",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            Leftrightarrow: "⇔",
            LeftRightArrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            leftthreetimes: "⋋",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            leg: "⋚",
            lEg: "⪋",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            lessgtr: "≶",
            LessLess: "⪡",
            lesssim: "≲",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            lfr: "𝔩",
            Lfr: "𝔏",
            lg: "≶",
            lgE: "⪑",
            lHar: "⥢",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            ljcy: "љ",
            LJcy: "Љ",
            ll: "≪",
            Ll: "⋘",
            llarr: "⇇",
            llcorner: "⌞",
            Lleftarrow: "⇚",
            llhard: "⥫",
            lltri: "◺",
            lmidot: "ŀ",
            Lmidot: "Ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lnE: "≨",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            Longleftarrow: "⟸",
            LongLeftArrow: "⟵",
            longleftrightarrow: "⟷",
            Longleftrightarrow: "⟺",
            LongLeftRightArrow: "⟷",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            Longrightarrow: "⟹",
            LongRightArrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            lopf: "𝕝",
            Lopf: "𝕃",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "𝓁",
            Lscr: "ℒ",
            lsh: "↰",
            Lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            lstrok: "ł",
            Lstrok: "Ł",
            lt: "<",
            Lt: "≪",
            LT: "<",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            ltrPar: "⦖",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            macr: "¯",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            map: "↦",
            Map: "⤅",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            mcy: "м",
            Mcy: "М",
            mdash: "—",
            mDDot: "∺",
            measuredangle: "∡",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            mfr: "𝔪",
            Mfr: "𝔐",
            mho: "℧",
            micro: "µ",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            middot: "·",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            MinusPlus: "∓",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            mopf: "𝕞",
            Mopf: "𝕄",
            mp: "∓",
            mscr: "𝓂",
            Mscr: "ℳ",
            mstpos: "∾",
            mu: "μ",
            Mu: "Μ",
            multimap: "⊸",
            mumap: "⊸",
            nabla: "∇",
            nacute: "ń",
            Nacute: "Ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbsp: " ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            ncaron: "ň",
            Ncaron: "Ň",
            ncedil: "ņ",
            Ncedil: "Ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            ncy: "н",
            Ncy: "Н",
            ndash: "–",
            ne: "≠",
            nearhk: "⤤",
            nearr: "↗",
            neArr: "⇗",
            nearrow: "↗",
            nedot: "≐̸",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: `
`,
            nexist: "∄",
            nexists: "∄",
            nfr: "𝔫",
            Nfr: "𝔑",
            nge: "≱",
            ngE: "≧̸",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            nGg: "⋙̸",
            ngsim: "≵",
            ngt: "≯",
            nGt: "≫⃒",
            ngtr: "≯",
            nGtv: "≫̸",
            nharr: "↮",
            nhArr: "⇎",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            njcy: "њ",
            NJcy: "Њ",
            nlarr: "↚",
            nlArr: "⇍",
            nldr: "‥",
            nle: "≰",
            nlE: "≦̸",
            nleftarrow: "↚",
            nLeftarrow: "⇍",
            nleftrightarrow: "↮",
            nLeftrightarrow: "⇎",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nLl: "⋘̸",
            nlsim: "≴",
            nlt: "≮",
            nLt: "≪⃒",
            nltri: "⋪",
            nltrie: "⋬",
            nLtv: "≪̸",
            nmid: "∤",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            nopf: "𝕟",
            Nopf: "ℕ",
            not: "¬",
            Not: "⫬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            notin: "∉",
            notindot: "⋵̸",
            notinE: "⋹̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrarr: "↛",
            nrArr: "⇏",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nRightarrow: "⇏",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            nscr: "𝓃",
            Nscr: "𝒩",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsube: "⊈",
            nsubE: "⫅̸",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupe: "⊉",
            nsupE: "⫆̸",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            ntilde: "ñ",
            Ntilde: "Ñ",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            nu: "ν",
            Nu: "Ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvDash: "⊭",
            nVdash: "⊮",
            nVDash: "⊯",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvHarr: "⤄",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwarhk: "⤣",
            nwarr: "↖",
            nwArr: "⇖",
            nwarrow: "↖",
            nwnear: "⤧",
            oacute: "ó",
            Oacute: "Ó",
            oast: "⊛",
            ocir: "⊚",
            ocirc: "ô",
            Ocirc: "Ô",
            ocy: "о",
            Ocy: "О",
            odash: "⊝",
            odblac: "ő",
            Odblac: "Ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            oelig: "œ",
            OElig: "Œ",
            ofcir: "⦿",
            ofr: "𝔬",
            Ofr: "𝔒",
            ogon: "˛",
            ograve: "ò",
            Ograve: "Ò",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            omacr: "ō",
            Omacr: "Ō",
            omega: "ω",
            Omega: "Ω",
            omicron: "ο",
            Omicron: "Ο",
            omid: "⦶",
            ominus: "⊖",
            oopf: "𝕠",
            Oopf: "𝕆",
            opar: "⦷",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            operp: "⦹",
            oplus: "⊕",
            or: "∨",
            Or: "⩔",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "ª",
            ordm: "º",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oS: "Ⓢ",
            oscr: "ℴ",
            Oscr: "𝒪",
            oslash: "ø",
            Oslash: "Ø",
            osol: "⊘",
            otilde: "õ",
            Otilde: "Õ",
            otimes: "⊗",
            Otimes: "⨷",
            otimesas: "⨶",
            ouml: "ö",
            Ouml: "Ö",
            ovbar: "⌽",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            par: "∥",
            para: "¶",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            PartialD: "∂",
            pcy: "п",
            Pcy: "П",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            pfr: "𝔭",
            Pfr: "𝔓",
            phi: "φ",
            Phi: "Φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            pi: "π",
            Pi: "Π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            PlusMinus: "±",
            plusmn: "±",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            Poincareplane: "ℌ",
            pointint: "⨕",
            popf: "𝕡",
            Popf: "ℙ",
            pound: "£",
            pr: "≺",
            Pr: "⪻",
            prap: "⪷",
            prcue: "≼",
            pre: "⪯",
            prE: "⪳",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            prime: "′",
            Prime: "″",
            primes: "ℙ",
            prnap: "⪹",
            prnE: "⪵",
            prnsim: "⋨",
            prod: "∏",
            Product: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            Proportion: "∷",
            Proportional: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            pscr: "𝓅",
            Pscr: "𝒫",
            psi: "ψ",
            Psi: "Ψ",
            puncsp: " ",
            qfr: "𝔮",
            Qfr: "𝔔",
            qint: "⨌",
            qopf: "𝕢",
            Qopf: "ℚ",
            qprime: "⁗",
            qscr: "𝓆",
            Qscr: "𝒬",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            QUOT: '"',
            rAarr: "⇛",
            race: "∽̱",
            racute: "ŕ",
            Racute: "Ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            Rang: "⟫",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "»",
            rarr: "→",
            rArr: "⇒",
            Rarr: "↠",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            rarrtl: "↣",
            Rarrtl: "⤖",
            rarrw: "↝",
            ratail: "⤚",
            rAtail: "⤜",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rBarr: "⤏",
            RBarr: "⤐",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            rcaron: "ř",
            Rcaron: "Ř",
            rcedil: "ŗ",
            Rcedil: "Ŗ",
            rceil: "⌉",
            rcub: "}",
            rcy: "р",
            Rcy: "Р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            Re: "ℜ",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            reg: "®",
            REG: "®",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "𝔯",
            Rfr: "ℜ",
            rHar: "⥤",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            rho: "ρ",
            Rho: "Ρ",
            rhov: "ϱ",
            RightAngleBracket: "⟩",
            rightarrow: "→",
            Rightarrow: "⇒",
            RightArrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            rightarrowtail: "↣",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            rightthreetimes: "⋌",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "𝕣",
            Ropf: "ℝ",
            roplus: "⨮",
            rotimes: "⨵",
            RoundImplies: "⥰",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            Rrightarrow: "⇛",
            rsaquo: "›",
            rscr: "𝓇",
            Rscr: "ℛ",
            rsh: "↱",
            Rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            RuleDelayed: "⧴",
            ruluhar: "⥨",
            rx: "℞",
            sacute: "ś",
            Sacute: "Ś",
            sbquo: "‚",
            sc: "≻",
            Sc: "⪼",
            scap: "⪸",
            scaron: "š",
            Scaron: "Š",
            sccue: "≽",
            sce: "⪰",
            scE: "⪴",
            scedil: "ş",
            Scedil: "Ş",
            scirc: "ŝ",
            Scirc: "Ŝ",
            scnap: "⪺",
            scnE: "⪶",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            scy: "с",
            Scy: "С",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            searhk: "⤥",
            searr: "↘",
            seArr: "⇘",
            searrow: "↘",
            sect: "§",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            sfr: "𝔰",
            Sfr: "𝔖",
            sfrown: "⌢",
            sharp: "♯",
            shchcy: "щ",
            SHCHcy: "Щ",
            shcy: "ш",
            SHcy: "Ш",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            shortmid: "∣",
            shortparallel: "∥",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            shy: "­",
            sigma: "σ",
            Sigma: "Σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            SmallCircle: "∘",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            softcy: "ь",
            SOFTcy: "Ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            sopf: "𝕤",
            Sopf: "𝕊",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            Sqrt: "√",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            square: "□",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            sscr: "𝓈",
            Sscr: "𝒮",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            star: "☆",
            Star: "⋆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            sub: "⊂",
            Sub: "⋐",
            subdot: "⪽",
            sube: "⊆",
            subE: "⫅",
            subedot: "⫃",
            submult: "⫁",
            subne: "⊊",
            subnE: "⫋",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            Subset: "⋐",
            subseteq: "⊆",
            subseteqq: "⫅",
            SubsetEqual: "⊆",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            SuchThat: "∋",
            sum: "∑",
            Sum: "∑",
            sung: "♪",
            sup: "⊃",
            Sup: "⋑",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            supdot: "⪾",
            supdsub: "⫘",
            supe: "⊇",
            supE: "⫆",
            supedot: "⫄",
            Superset: "⊃",
            SupersetEqual: "⊇",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supne: "⊋",
            supnE: "⫌",
            supplus: "⫀",
            supset: "⊃",
            Supset: "⋑",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swarhk: "⤦",
            swarr: "↙",
            swArr: "⇙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "ß",
            Tab: "	",
            target: "⌖",
            tau: "τ",
            Tau: "Τ",
            tbrk: "⎴",
            tcaron: "ť",
            Tcaron: "Ť",
            tcedil: "ţ",
            Tcedil: "Ţ",
            tcy: "т",
            Tcy: "Т",
            tdot: "⃛",
            telrec: "⌕",
            tfr: "𝔱",
            Tfr: "𝔗",
            there4: "∴",
            therefore: "∴",
            Therefore: "∴",
            theta: "θ",
            Theta: "Θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            ThickSpace: "  ",
            thinsp: " ",
            ThinSpace: " ",
            thkap: "≈",
            thksim: "∼",
            thorn: "þ",
            THORN: "Þ",
            tilde: "˜",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            times: "×",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            topf: "𝕥",
            Topf: "𝕋",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            TRADE: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            TripleDot: "⃛",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            tscr: "𝓉",
            Tscr: "𝒯",
            tscy: "ц",
            TScy: "Ц",
            tshcy: "ћ",
            TSHcy: "Ћ",
            tstrok: "ŧ",
            Tstrok: "Ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            uacute: "ú",
            Uacute: "Ú",
            uarr: "↑",
            uArr: "⇑",
            Uarr: "↟",
            Uarrocir: "⥉",
            ubrcy: "ў",
            Ubrcy: "Ў",
            ubreve: "ŭ",
            Ubreve: "Ŭ",
            ucirc: "û",
            Ucirc: "Û",
            ucy: "у",
            Ucy: "У",
            udarr: "⇅",
            udblac: "ű",
            Udblac: "Ű",
            udhar: "⥮",
            ufisht: "⥾",
            ufr: "𝔲",
            Ufr: "𝔘",
            ugrave: "ù",
            Ugrave: "Ù",
            uHar: "⥣",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            umacr: "ū",
            Umacr: "Ū",
            uml: "¨",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            uogon: "ų",
            Uogon: "Ų",
            uopf: "𝕦",
            Uopf: "𝕌",
            uparrow: "↑",
            Uparrow: "⇑",
            UpArrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            updownarrow: "↕",
            Updownarrow: "⇕",
            UpDownArrow: "↕",
            UpEquilibrium: "⥮",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            upsi: "υ",
            Upsi: "ϒ",
            upsih: "ϒ",
            upsilon: "υ",
            Upsilon: "Υ",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            uring: "ů",
            Uring: "Ů",
            urtri: "◹",
            uscr: "𝓊",
            Uscr: "𝒰",
            utdot: "⋰",
            utilde: "ũ",
            Utilde: "Ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            uuml: "ü",
            Uuml: "Ü",
            uwangle: "⦧",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            vArr: "⇕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vBar: "⫨",
            Vbar: "⫫",
            vBarv: "⫩",
            vcy: "в",
            Vcy: "В",
            vdash: "⊢",
            vDash: "⊨",
            Vdash: "⊩",
            VDash: "⊫",
            Vdashl: "⫦",
            vee: "∨",
            Vee: "⋁",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            Verbar: "‖",
            vert: "|",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            vfr: "𝔳",
            Vfr: "𝔙",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            vopf: "𝕧",
            Vopf: "𝕍",
            vprop: "∝",
            vrtri: "⊳",
            vscr: "𝓋",
            Vscr: "𝒱",
            vsubne: "⊊︀",
            vsubnE: "⫋︀",
            vsupne: "⊋︀",
            vsupnE: "⫌︀",
            Vvdash: "⊪",
            vzigzag: "⦚",
            wcirc: "ŵ",
            Wcirc: "Ŵ",
            wedbar: "⩟",
            wedge: "∧",
            Wedge: "⋀",
            wedgeq: "≙",
            weierp: "℘",
            wfr: "𝔴",
            Wfr: "𝔚",
            wopf: "𝕨",
            Wopf: "𝕎",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            wscr: "𝓌",
            Wscr: "𝒲",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            xfr: "𝔵",
            Xfr: "𝔛",
            xharr: "⟷",
            xhArr: "⟺",
            xi: "ξ",
            Xi: "Ξ",
            xlarr: "⟵",
            xlArr: "⟸",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            xopf: "𝕩",
            Xopf: "𝕏",
            xoplus: "⨁",
            xotime: "⨂",
            xrarr: "⟶",
            xrArr: "⟹",
            xscr: "𝓍",
            Xscr: "𝒳",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            yacute: "ý",
            Yacute: "Ý",
            yacy: "я",
            YAcy: "Я",
            ycirc: "ŷ",
            Ycirc: "Ŷ",
            ycy: "ы",
            Ycy: "Ы",
            yen: "¥",
            yfr: "𝔶",
            Yfr: "𝔜",
            yicy: "ї",
            YIcy: "Ї",
            yopf: "𝕪",
            Yopf: "𝕐",
            yscr: "𝓎",
            Yscr: "𝒴",
            yucy: "ю",
            YUcy: "Ю",
            yuml: "ÿ",
            Yuml: "Ÿ",
            zacute: "ź",
            Zacute: "Ź",
            zcaron: "ž",
            Zcaron: "Ž",
            zcy: "з",
            Zcy: "З",
            zdot: "ż",
            Zdot: "Ż",
            zeetrf: "ℨ",
            ZeroWidthSpace: "​",
            zeta: "ζ",
            Zeta: "Ζ",
            zfr: "𝔷",
            Zfr: "ℨ",
            zhcy: "ж",
            ZHcy: "Ж",
            zigrarr: "⇝",
            zopf: "𝕫",
            Zopf: "ℤ",
            zscr: "𝓏",
            Zscr: "𝒵",
            zwj: "‍",
            zwnj: "‌",
          },
          pe = {
            aacute: "á",
            Aacute: "Á",
            acirc: "â",
            Acirc: "Â",
            acute: "´",
            aelig: "æ",
            AElig: "Æ",
            agrave: "à",
            Agrave: "À",
            amp: "&",
            AMP: "&",
            aring: "å",
            Aring: "Å",
            atilde: "ã",
            Atilde: "Ã",
            auml: "ä",
            Auml: "Ä",
            brvbar: "¦",
            ccedil: "ç",
            Ccedil: "Ç",
            cedil: "¸",
            cent: "¢",
            copy: "©",
            COPY: "©",
            curren: "¤",
            deg: "°",
            divide: "÷",
            eacute: "é",
            Eacute: "É",
            ecirc: "ê",
            Ecirc: "Ê",
            egrave: "è",
            Egrave: "È",
            eth: "ð",
            ETH: "Ð",
            euml: "ë",
            Euml: "Ë",
            frac12: "½",
            frac14: "¼",
            frac34: "¾",
            gt: ">",
            GT: ">",
            iacute: "í",
            Iacute: "Í",
            icirc: "î",
            Icirc: "Î",
            iexcl: "¡",
            igrave: "ì",
            Igrave: "Ì",
            iquest: "¿",
            iuml: "ï",
            Iuml: "Ï",
            laquo: "«",
            lt: "<",
            LT: "<",
            macr: "¯",
            micro: "µ",
            middot: "·",
            nbsp: " ",
            not: "¬",
            ntilde: "ñ",
            Ntilde: "Ñ",
            oacute: "ó",
            Oacute: "Ó",
            ocirc: "ô",
            Ocirc: "Ô",
            ograve: "ò",
            Ograve: "Ò",
            ordf: "ª",
            ordm: "º",
            oslash: "ø",
            Oslash: "Ø",
            otilde: "õ",
            Otilde: "Õ",
            ouml: "ö",
            Ouml: "Ö",
            para: "¶",
            plusmn: "±",
            pound: "£",
            quot: '"',
            QUOT: '"',
            raquo: "»",
            reg: "®",
            REG: "®",
            sect: "§",
            shy: "­",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            szlig: "ß",
            thorn: "þ",
            THORN: "Þ",
            times: "×",
            uacute: "ú",
            Uacute: "Ú",
            ucirc: "û",
            Ucirc: "Û",
            ugrave: "ù",
            Ugrave: "Ù",
            uml: "¨",
            uuml: "ü",
            Uuml: "Ü",
            yacute: "ý",
            Yacute: "Ý",
            yen: "¥",
            yuml: "ÿ",
          },
          _r = {
            0: "�",
            128: "€",
            130: "‚",
            131: "ƒ",
            132: "„",
            133: "…",
            134: "†",
            135: "‡",
            136: "ˆ",
            137: "‰",
            138: "Š",
            139: "‹",
            140: "Œ",
            142: "Ž",
            145: "‘",
            146: "’",
            147: "“",
            148: "”",
            149: "•",
            150: "–",
            151: "—",
            152: "˜",
            153: "™",
            154: "š",
            155: "›",
            156: "œ",
            158: "ž",
            159: "Ÿ",
          },
          Tt = [
            1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
            23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132,
            133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
            146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
            159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984,
            64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993,
            64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003,
            65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606,
            196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750,
            458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894,
            720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038,
            983039, 1048574, 1048575, 1114110, 1114111,
          ],
          Bt = String.fromCharCode,
          kt = {},
          Lr = kt.hasOwnProperty,
          d = function (ce, Q) {
            return Lr.call(ce, Q);
          },
          le = function (ce, Q) {
            for (var Oe = -1, Pt = ce.length; ++Oe < Pt; )
              if (ce[Oe] == Q) return !0;
            return !1;
          },
          X = function (ce, Q) {
            if (!ce) return Q;
            var Oe = {},
              Pt;
            for (Pt in Q) Oe[Pt] = d(ce, Pt) ? ce[Pt] : Q[Pt];
            return Oe;
          },
          Pe = function (ce, Q) {
            var Oe = "";
            return (ce >= 55296 && ce <= 57343) || ce > 1114111
              ? (Q &&
                  me(
                    "character reference outside the permissible Unicode range"
                  ),
                "�")
              : d(_r, ce)
              ? (Q && me("disallowed character reference"), _r[ce])
              : (Q && le(Tt, ce) && me("disallowed character reference"),
                ce > 65535 &&
                  ((ce -= 65536),
                  (Oe += Bt(((ce >>> 10) & 1023) | 55296)),
                  (ce = 56320 | (ce & 1023))),
                (Oe += Bt(ce)),
                Oe);
          },
          Ke = function (ce) {
            return "&#x" + ce.toString(16).toUpperCase() + ";";
          },
          ct = function (ce) {
            return "&#" + ce + ";";
          },
          me = function (ce) {
            throw Error("Parse error: " + ce);
          },
          ot = function (ce, Q) {
            Q = X(Q, ot.options);
            var Oe = Q.strict;
            Oe && de.test(ce) && me("forbidden code point");
            var Pt = Q.encodeEverything,
              or = Q.useNamedReferences,
              un = Q.allowUnsafeSymbols,
              U = Q.decimal ? ct : Ke,
              wr = function (dt) {
                return U(dt.charCodeAt(0));
              };
            return (
              Pt
                ? ((ce = ce.replace(G, function (dt) {
                    return or && d(De, dt) ? "&" + De[dt] + ";" : wr(dt);
                  })),
                  or &&
                    (ce = ce
                      .replace(/&gt;\u20D2/g, "&nvgt;")
                      .replace(/&lt;\u20D2/g, "&nvlt;")
                      .replace(/&#x66;&#x6A;/g, "&fjlig;")),
                  or &&
                    (ce = ce.replace(ee, function (dt) {
                      return "&" + De[dt] + ";";
                    })))
                : or
                ? (un ||
                    (ce = ce.replace(Ve, function (dt) {
                      return "&" + De[dt] + ";";
                    })),
                  (ce = ce
                    .replace(/&gt;\u20D2/g, "&nvgt;")
                    .replace(/&lt;\u20D2/g, "&nvlt;")),
                  (ce = ce.replace(ee, function (dt) {
                    return "&" + De[dt] + ";";
                  })))
                : un || (ce = ce.replace(Ve, wr)),
              ce
                .replace(R, function (dt) {
                  var Ar = dt.charCodeAt(0),
                    sr = dt.charCodeAt(1),
                    rt = (Ar - 55296) * 1024 + sr - 56320 + 65536;
                  return U(rt);
                })
                .replace(J, wr)
            );
          };
        ot.options = {
          allowUnsafeSymbols: !1,
          encodeEverything: !1,
          strict: !1,
          useNamedReferences: !1,
          decimal: !1,
        };
        var Ce = function (ce, Q) {
          Q = X(Q, Ce.options);
          var Oe = Q.strict;
          return (
            Oe && tt.test(ce) && me("malformed character reference"),
            ce.replace(se, function (Pt, or, un, U, wr, dt, Ar, sr, rt) {
              var Nt, qt, an, Mt, Jt, Fr;
              return or
                ? ((Jt = or), at[Jt])
                : un
                ? ((Jt = un),
                  (Fr = U),
                  Fr && Q.isAttributeValue
                    ? (Oe &&
                        Fr == "=" &&
                        me("`&` did not start a character reference"),
                      Pt)
                    : (Oe &&
                        me(
                          "named character reference was not terminated by a semicolon"
                        ),
                      pe[Jt] + (Fr || "")))
                : wr
                ? ((an = wr),
                  (qt = dt),
                  Oe &&
                    !qt &&
                    me("character reference was not terminated by a semicolon"),
                  (Nt = parseInt(an, 10)),
                  Pe(Nt, Oe))
                : Ar
                ? ((Mt = Ar),
                  (qt = sr),
                  Oe &&
                    !qt &&
                    me("character reference was not terminated by a semicolon"),
                  (Nt = parseInt(Mt, 16)),
                  Pe(Nt, Oe))
                : (Oe &&
                    me(
                      "named character reference was not terminated by a semicolon"
                    ),
                  Pt);
            })
          );
        };
        Ce.options = { isAttributeValue: !1, strict: !1 };
        var _t = function (ce) {
            return ce.replace(Ve, function (Q) {
              return ze[Q];
            });
          },
          _e = {
            version: "1.2.0",
            encode: ot,
            decode: Ce,
            escape: _t,
            unescape: Ce,
          };
        if (v && !v.nodeType)
          if (C) C.exports = _e;
          else for (var ft in _e) d(_e, ft) && (v[ft] = _e[ft]);
        else a.he = _e;
      })(Ie);
    })(Oa, Oa.exports);
  var Cd = Oa.exports;
  const Tl = gt(Cd),
    Ed = /\n|\[.*?]|\(.*?\)/g,
    Sd = /\[.*?]|\(.*?\)/g;
  class Bl {
    constructor(o, a) {
      te(this, "_");
      te(this, "audioUrl");
      te(this, "googleTranslation");
      te(this, "deeplTranslation");
      te(this, "gptTranslation");
      a !== null
        ? a
          ? (this._ = Tl.decode(ut.replace(o, Ed, " ")).trim())
          : (this._ = Tl.decode(ut.replace(o, Sd, " ")).trim())
        : (this._ = o);
    }
    getAudioUrl() {
      return this.audioUrl;
    }
    getGoogleTranslation() {
      return this.googleTranslation;
    }
    getDeeplTranslation() {
      return this.deeplTranslation;
    }
    getGptTranslation() {
      return this.gptTranslation;
    }
    setAudioUrl(o) {
      this.audioUrl = o;
    }
    setGoogleTranslation(o) {
      this.googleTranslation = o;
    }
    setDeepTranslation(o) {
      this.deeplTranslation = o;
    }
    setGptTranslation(o) {
      this.gptTranslation = o;
    }
  }
  class kl {
    constructor(o, a) {
      te(this, "start");
      te(this, "dur");
      te(this, "initEndTime");
      typeof o == "string" ? (this.start = Number(o)) : (this.start = o),
        typeof a == "string" ? (this.dur = Number(a)) : (this.dur = a),
        (this.initEndTime = this.start + this.dur);
    }
    getStartTime() {
      return this.start;
    }
    getDuration() {
      return this.dur;
    }
    getEndTime() {
      return this.start + this.dur;
    }
    setStartTime(o) {
      this.start = o;
    }
    setDuration(o) {
      this.dur = o;
    }
    getInitEndTime() {
      return this.initEndTime;
    }
  }
  class _l extends Bl {
    constructor(o, a, v) {
      super(o, v), (this.$ = a);
    }
    getSubtitleText() {
      return this._;
    }
    getSubtitleTimeRange() {
      return this.$;
    }
    setSubtitleText(o) {
      this._ = o;
    }
    setSubtitleTimeRange(o) {
      this.$ = o;
    }
  }
  class Ll {
    createSubtitle(o, a) {
      const v = new _l("", a, null);
      return v.setGoogleTranslation(o), v;
    }
    createTimeRange(o, a) {
      return new kl(o, a);
    }
    createOnlyStartTime(o) {
      return this.createSubtitle("", this.createTimeRange(o, 0));
    }
  }
  class Td extends El {
    constructor(a, v, C, S) {
      super(a, v, C, S, new Ll());
      te(this, "adsObservable");
      te(this, "adShowClass", "ad-showing");
    }
    onVideoPlaying() {
      return this.isAdsShow() ? Promise.resolve() : super.onVideoPlaying();
    }
    watchAds() {
      const a = (R, G) =>
        new nn((J) => {
          const ee = new MutationObserver((De) => {
            J.next(De);
          });
          return (
            ee.observe(R, G),
            () => {
              ee.disconnect();
            }
          );
        });
      let v = We(".html5-video-player");
      const C = v[0],
        S = { attributes: !0, attributeFilter: ["class"] };
      this.adsObservable = a(C, S)
        .pipe(
          sd(() => v.hasClass("ad-showing")),
          ld()
        )
        .subscribe((R) => {
          console.log(`watchAds result === ${R}`),
            R
              ? this.video.paused ||
                (console.log("watchAds start pause"),
                this.onVideoPause(),
                console.log("watchAds end pause"))
              : this.video.paused && this.onVideoPlaying().then();
        });
    }
    isAdsShow() {
      return We(".html5-video-player").hasClass(this.adShowClass);
    }
    disconnectObserver() {
      this.adsObservable && this.adsObservable.unsubscribe();
    }
    terminate() {
      super.terminate(), this.disconnectObserver();
    }
  }
  class ci {
    static addPlayBtn(o, a) {
      let v = ge.runtime.getURL("/images/default_play_btn.png"),
        C = `
                <div class="${a}" id="${this.PLAY_BTN_ID}">
                    <div class="youtube-dubbing-container">
                        <div class="youtube-dubbing-logo">
                            <img src="${v}" alt="youtube-dubbing">
                        </div>
                    </div>
                </div>
            `;
      return o.append(C).children(`#${this.PLAY_BTN_ID}`);
    }
    static changeToGreen() {
      let o = ge.runtime.getURL("/images/green_play_btn.png");
      Zt.isMobileSite()
        ? We(window.playBtn).prop("src", o)
        : We(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", o);
    }
    static changeToYellow() {
      let o = ge.runtime.getURL("/images/yellow_play_btn.png");
      Zt.isMobileSite()
        ? We(window.playBtn).prop("src", o)
        : We(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", o);
    }
    static changeToRed() {
      let o = ge.runtime.getURL("/images/red_play_btn.png");
      Zt.isMobileSite()
        ? We(window.playBtn).prop("src", o)
        : We(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", o);
    }
    static changeToDefault() {
      let o = ge.runtime.getURL("/images/default_play_btn.png");
      Zt.isMobileSite()
        ? We(window.playBtn).prop("src", o)
        : We(`#${this.PLAY_BTN_ID} >div >div > img`).prop("src", o);
    }
    static exists() {
      return We(`#${this.PLAY_BTN_ID}`).length > 0;
    }
  }
  te(ci, "PLAY_BTN_ID", "youtube-dubbing-button");
  class Bd {
    constructor(o, a, v, C, S, R, G, J, ee) {
      (this.username = o),
        (this.videoId = a),
        (this.videoDurationSecs = v),
        (this.subtitle_level = C),
        (this.fromLanguage = S),
        (this.toLanguage = R),
        (this.voice = G),
        (this.originalVolume = J),
        (this.translationVolume = ee);
    }
  }
  class Fl {
    constructor(o, a, v, C) {
      te(this, "metaData");
      te(this, "onPlayBtnClickHandler");
      te(this, "playBtn");
      te(this, "playBtnDivCssSelector");
      te(this, "rightControls");
      te(this, "playBtnClassName");
      te(this, "played", !1);
      te(this, "video");
      (this.metaData = o),
        (this.playBtnDivCssSelector = a),
        (this.rightControls = v),
        (this.playBtnClassName = C),
        ge.storage.local.get(["settings"]).then((S) => {
          S.settings && this.updateConfig(S.settings);
        }),
        ge.runtime.onMessage.addListener(async (S) => {
          var R, G, J;
          if (S.method === "reloadSettings") {
            let ee = S.data.voice !== ke.voice;
            this.updateConfig(S.data),
              ee && ((R = this.getVideo()) == null || R.updateVoice());
          } else
            S.method === "updateOriginVolume"
              ? ((ke.originalVolume = S.data.originalVolume / 100),
                (G = this.getVideo()) == null ||
                  G.updateVideoVolume(ke.originalVolume))
              : S.method === "updateTargetVolume"
              ? ((ke.translationVolume = S.data.translationVolume / 100),
                (J = this.getVideo()) == null ||
                  J.updateAudioVolume(ke.translationVolume))
              : S.method === "runOnClick" && this.onPlayBtnClick().then();
        }),
        We(document).on("InitSubsAndTTSLoadComplete", () => {
          We(document).on(
            "visibilitychange",
            this.onVisibilitychangeHandler.bind(this)
          ),
            this.onInitSubsAndTTSLoadComplete();
        }),
        (this.onPlayBtnClickHandler = this.onPlayBtnClick.bind(this)),
        this.isMobile()
          ? We(window.playBtn).css("display", "block")
          : this.initBtn();
    }
    initBtn() {
      this.rightControls.ready(() => {
        ci.exists() ||
          ((this.playBtn = ci.addPlayBtn(
            We(this.playBtnDivCssSelector),
            this.playBtnClassName
          )),
          this.playBtn.on("click", this.onPlayBtnClickHandler));
      });
    }
    async onPlayBtnClick() {
      const o = We("video")[0];
      return Zt.isFirefoxMobile() && o.paused
        ? (await li.fire(ge.i18n.getMessage("firefoxRestrictions")), !1)
        : (Ln.show(), !0);
    }
    onInitSubsAndTTSLoadComplete() {}
    updateConfig(o) {
      (ke.fromLanguage = o.fromLanguage),
        (ke.toLanguage = o.toLanguage),
        (ke.gender = o.gender),
        (ke.voice = o.voice),
        (ke.pauseVideo = JSON.parse(o.pauseVideo)),
        (ke.adjustmentModel = o.adjustmentModel),
        (ke.translateEngine = o.translateEngine),
        console.log("adjustmentModel == " + ke.adjustmentModel);
    }
    onVisibilitychangeHandler() {
      const o = this.getVideo();
      document.hidden
        ? o && ke.pauseVideo && o.videoPause()
        : o && ke.pauseVideo && o.videoPlay();
    }
    destroy() {
      var o, a, v;
      this.isMobile()
        ? ci.changeToDefault()
        : ((o = this.playBtn) == null ||
            o.off("click", this.onPlayBtnClickHandler),
          (a = this.playBtn) == null || a.remove()),
        (v = this.video) == null || v.terminate(),
        Ln.remove();
    }
    isMobile() {
      return Zt.isMobile();
    }
    getUserName() {
      return ge.runtime.sendMessage({ method: "getUserName" });
    }
    getVideo() {
      return this.video;
    }
    handleLoginSuccessRedirect() {
      window.addEventListener("message", (o) => {
        o.data.action === "loginSuccess" &&
          li
            .fire(ge.i18n.getMessage("postLoginTranslationSettings"))
            .then(() => this.onPlayBtnClick());
      }),
        this.openPopup();
    }
    openPopup() {
      let o = 1e3,
        a = 550;
      const v = screen.width,
        C = screen.height;
      (v < 500 || C < 500) && ((o = v), (a = C));
      const S = (v - o) / 2,
        R = (C - a) / 2;
      window.open(
        "https://yd.transduck.com/admin/signin",
        "popup",
        `left=${S},top=${R},width=${o},height=${a}`
      );
    }
    async saveWatchLog(o, a) {
      const v = new Bd(
        await this.getUserName(),
        o,
        Math.round(this.video.getVideoDuration()),
        a(),
        ke.fromLanguage,
        ke.toLanguage,
        ke.voice,
        ke.originalVolume,
        ke.translationVolume
      );
      return ge.runtime.sendMessage({
        method: "saveWatchLog",
        data: { watchLog: v },
      });
    }
    async handleError(o) {
      o instanceof Error &&
        (o.message === "NoLogin"
          ? Zt.isIos()
            ? await li.fire(ge.i18n.getMessage("loginAndUsePlugin"))
            : this.handleLoginSuccessRedirect()
          : await li.fire(o.message));
    }
    async start() {
      var o;
      try {
        const a = this.metaData.getBestCaption();
        if (!a) {
          await li.fire(ge.i18n.getMessage("noSubtitlesMessage")), Ln.remove();
          return;
        }
        const v = this.metaData.getVideoId();
        if (!v) {
          await li.fire(ge.i18n.getMessage("videoIdFetchFailure")), Ln.remove();
          return;
        }
        if (this.played) return;
        this.played = !0;
        const C = We(this.findCurrentDocument()).find("video")[0];
        C.pause();
        const S = await this.getSubtitleAndPlay(
          v,
          a,
          C,
          this.metaData.getVideoTitle()
        );
        this.saveWatchLog(v, () => S).then(() =>
          console.log("save watch log complete")
        ),
          (o = this.playBtn) == null ||
            o.off("click", this.onPlayBtnClickHandler);
      } catch (a) {
        console.log(a), Ln.remove(), await this.handleError(a);
      }
    }
    findCurrentDocument() {
      return document;
    }
  }
  class Rl {
    static async getMembership() {
      return ge.runtime.sendMessage({ method: "getMembership" });
    }
  }
  const Ga = class Ga {
    constructor(o) {
      this.subtitleCreator = o;
    }
    processSubtitles(o) {
      return ut
        .chain(o)
        .flatMap(this.splitSubtitle.bind(this))
        .filter((a) => !br.isPunctuationWithStr(a.getGoogleTranslation()))
        .value();
    }
    splitSubtitle(o) {
      const a = br.calculateCharMs(o, (v) => v.getGoogleTranslation());
      return (
        br.isSubtitleEndsWithPunctuation(o, (v) => v.getGoogleTranslation()) ||
          o.setGoogleTranslation(o.getGoogleTranslation() + "。"),
        [...o.getGoogleTranslation()]
          .reduce(
            (v, C) => (
              br.isPunctuation(C)
                ? v.appendPunctuation(C, o, a)
                : v.appendChar(C),
              v
            ),
            new kd(this.subtitleCreator, o.getSubtitleTimeRange().getEndTime())
          )
          .subtitleArray.reduce(this.mergeSubtitle.bind(this), [])
      );
    }
    mergeSubtitle(o, a) {
      if (ut.isEmpty(o)) o.push(a);
      else {
        let v = ut.last(o);
        v.getGoogleTranslation().length > Ga.minSubtitleContentLength
          ? o.push(a)
          : br.mergeSubtitleGoogleTranslateResult(v, a);
      }
      return o;
    }
  };
  te(Ga, "minSubtitleContentLength", 10);
  let No = Ga,
    kd = class {
      constructor(o, a) {
        te(this, "_subtitleArray", []);
        te(this, "subtitleContent", "");
        te(this, "prevTimeline", null);
        (this.subtitleCreator = o), (this.subtitleEndTime = a);
      }
      get subtitleArray() {
        return this._subtitleArray;
      }
      appendChar(o) {
        this.subtitleContent += o;
      }
      appendPunctuation(o, a, v) {
        let C = this.createTimeline(a, v);
        (this.prevTimeline = C),
          (this.subtitleContent += o),
          this._subtitleArray.push(
            this.subtitleCreator.createSubtitle(this.subtitleContent, C)
          ),
          (this.subtitleContent = "");
      }
      createTimeline(o, a) {
        let v = (this.subtitleContent.length * a) / 1e3;
        return ut.isEmpty(this._subtitleArray)
          ? this.subtitleCreator.createTimeRange(
              o.getSubtitleTimeRange().getStartTime(),
              this.calculateDur(o.getSubtitleTimeRange().getStartTime(), v)
            )
          : this.subtitleCreator.createTimeRange(
              this.prevTimeline.getEndTime(),
              this.calculateDur(this.prevTimeline.getEndTime(), v)
            );
      }
      calculateDur(o, a) {
        return o + a > this.subtitleEndTime ? this.subtitleEndTime - o : a;
      }
    };
  class Il {
    constructor(o, a, v) {
      (this.caption = o), (this.videoId = a), (this.subtitleCreator = v);
    }
    async translate(o, a, v, C) {
      if (o.length === 0)
        throw new Error(ge.i18n.getMessage("musicVideoTranslationUnavailable"));
      let S = o.map((G) => G.getSubtitleText()),
        R;
      try {
        R = await ge.runtime.sendMessage({
          method: "translate",
          data: { textArray: S, from: a, to: v, videoId: C },
        });
      } catch {
        throw new Error(ge.i18n.getMessage("translationRequestFailure"));
      }
      return this.mergeToSubtitles(o, R);
    }
    mergeToSubtitles(o, a) {
      return (
        ut.zip(o, a).forEach(([v, C]) => {
          v && C && v.setGoogleTranslation(C.text);
        }),
        o
      );
    }
    async processAndTranslateSubtitles(o, a) {
      (o = a.processSubtitles(o)), this.checkSubtitlesAvailability(o);
      const v = this.getSubtitleLanguage() || ke.fromLanguage;
      return (
        (o = await this.translate(o, v, ke.toLanguage, this.videoId)),
        this.checkSubtitlesAvailability(o),
        (this.isAsrCaption() || this.shouldPerformSecondSubtitlesProcess(o)) &&
          (o = new No(this.subtitleCreator).processSubtitles(o)),
        (o = o.filter((C) => {
          var S, R;
          return (
            ((R = (S = C.getGoogleTranslation()) == null ? void 0 : S.trim()) ==
            null
              ? void 0
              : R.length) ?? 0 > 0
          );
        })),
        this.checkSubtitlesAvailability(o),
        o
      );
    }
    isAsrCaption() {
      return !1;
    }
    shouldPerformSecondSubtitlesProcess(o) {
      return ut.findIndex(
        o,
        (v) => v.getSubtitleTimeRange().getDuration() >= 20
      ) >= 0
        ? (console.log("start TranslatedSubtitleProcessor for yellow btn"), !0)
        : !1;
    }
    checkSubtitlesAvailability(o) {
      if (ut.isEmpty(o))
        throw new Error(ge.i18n.getMessage("musicVideoTranslationUnavailable"));
    }
  }
  const Wa = class Wa {
    processSubtitles(o) {
      return o.reduce(this.reduceSubtitle.bind(this), new _d()).subtitles;
    }
    reduceSubtitle(o, a, v, C) {
      if (ut.isEmpty(a.getSubtitleText())) return o;
      if (o.isFirst()) this.processCurrentSubtitle(a, o, C, v);
      else {
        const S = o.popRequest();
        if (!S.shouldSkip()) {
          let R = S.time / 1e3;
          if (S.shouldRemove()) {
            a.setSubtitleText(a.getSubtitleText().substring(S.content.length));
            const G = a.getSubtitleTimeRange();
            G.setStartTime(G.getStartTime() + R),
              G.setDuration(G.getDuration() - R);
          } else {
            a.setSubtitleText(S.content + " " + a.getSubtitleText());
            const G = a.getSubtitleTimeRange();
            G.setStartTime(G.getStartTime() - R),
              G.setDuration(G.getDuration() + R);
          }
          this.processCurrentSubtitle(a, o, C, v);
        }
      }
      return o;
    }
    processCurrentSubtitle(o, a, v, C) {
      if (
        br.isSubtitleEndsWithPunctuation(o) ||
        this.isSubtitleEndOfSentence(o, v, C + 1)
      )
        a.pushSubtitle(o);
      else {
        let S = br.findPunctuationIndex(o);
        S > 0
          ? this.splitCurrentSubtitle(o, a, S)
          : this.mergeCurrentSubtitle(o, a, v, C + 1);
      }
    }
    mergeCurrentSubtitle(o, a, v, C) {
      for (let S = C; S < v.length; S++) {
        let R = v[S];
        if (
          br.isSubtitleEndsWithPunctuation(R) ||
          this.isSubtitleEndOfSentence(R, v, S + 1)
        ) {
          br.mergeSubtitle(o, R), a.pushSubtitleAndProcessRequest(o, fi.skip());
          return;
        } else {
          let G = br.findPunctuationIndex(R);
          if (G > 0) {
            this.mergePartialNextSubtitle(o, R, G, a);
            return;
          } else br.mergeSubtitle(o, R), a.pushProcessRequest(fi.skip());
        }
      }
    }
    mergePartialNextSubtitle(o, a, v, C) {
      const S = a.getSubtitleText().substring(0, v + 1),
        R = br.calculateTextMs(a, S);
      o.setSubtitleText(o.getSubtitleText() + " " + S);
      const G = o.getSubtitleTimeRange();
      G.setDuration(G.getDuration() + R / 1e3),
        C.pushSubtitleAndProcessRequest(o, fi.remove(R, S));
    }
    splitCurrentSubtitle(o, a, v) {
      const C = o.getSubtitleText().substring(v + 1),
        S = br.calculateTextMs(o, C);
      o.setSubtitleText(o.getSubtitleText().substring(0, v + 1));
      const R = o.getSubtitleTimeRange();
      R.setDuration((R.getDuration() * 1e3 - S) / 1e3),
        a.pushSubtitleAndProcessRequest(o, fi.add(S, C));
    }
    isSubtitleEndOfSentence(o, a, v) {
      return v >= a.length
        ? !0
        : a[v].getSubtitleTimeRange().getStartTime() -
            o.getSubtitleTimeRange().getEndTime() >=
            Wa.subtitleGapThreshold;
    }
  };
  te(Wa, "subtitleGapThreshold", 0.15);
  let Ha = Wa,
    _d = class {
      constructor() {
        te(this, "_subtitles", []);
        te(this, "processQueue", []);
      }
      get subtitles() {
        return this._subtitles;
      }
      isFirst() {
        return ut.isEmpty(this.processQueue);
      }
      pushSubtitle(o) {
        this._subtitles.push(o);
      }
      pushProcessRequest(o) {
        this.processQueue.push(o);
      }
      pushSubtitleAndProcessRequest(o, a) {
        this._subtitles.push(o), this.processQueue.push(a);
      }
      popRequest() {
        return this.processQueue.shift();
      }
    };
  class fi {
    constructor(o, a, v) {
      (this.type = o), (this._time = a), (this._content = v);
    }
    get time() {
      return this._time;
    }
    get content() {
      return this._content;
    }
    static skip() {
      return new fi(0, 0, "");
    }
    static remove(o, a) {
      return new fi(1, o, a);
    }
    static add(o, a) {
      return new fi(2, o, a);
    }
    shouldSkip() {
      return this.type === 0;
    }
    shouldRemove() {
      return this.type === 1;
    }
  }
  const di = class di {
    processSubtitles(o) {
      return o
        .reduce(this.reduceSubtitle.bind(this), new Ld())
        .processedSubtitles.reduce(
          this.mergeSubtitlesBasedOnRules.bind(this),
          []
        );
    }
    mergeSubtitlesBasedOnRules(o, a) {
      if (
        ((a = this.formatSubtitleAndFixDur(a)),
        a.getSubtitleText().trim().length === 0)
      )
        return o;
      if (o.length === 0) o.push(a);
      else {
        let v = ut.last(o),
          C = v.getSubtitleTimeRange().getEndTime();
        a.getSubtitleTimeRange().getStartTime() - C > di.subtitleGapThreshold ||
        v.getSubtitleText().length + a.getSubtitleText().length >
          di.maxSubtitleLength
          ? o.push(a)
          : this.mergeToPrevSubtitle(v, a);
      }
      return o;
    }
    mergeToPrevSubtitle(o, a) {
      const v = o.getSubtitleTimeRange();
      v.setDuration(a.getSubtitleTimeRange().getEndTime() - v.getStartTime()),
        o.setSubtitleText(o.getSubtitleText() + " " + a.getSubtitleText());
    }
    reduceSubtitle(o, a) {
      if (o.isEmpty()) o.pushProcessedSubtitle(a);
      else {
        let v = o.getLastSubtitle();
        const C = v.getSubtitleTimeRange(),
          S = a.getSubtitleTimeRange();
        if (C.getInitEndTime() > S.getStartTime()) br.mergeSubtitle(v, a);
        else if (
          S.getDuration() < 0.15 &&
          v.getSubtitleText().includes(a.getSubtitleText())
        )
          C.setDuration(S.getInitEndTime() - C.getStartTime());
        else {
          let G = v.getSubtitleText().split(`
`),
            J = a.getSubtitleText().split(`
`);
          J[0] === ut.last(G) &&
            a.setSubtitleText(
              ut.join(
                ut.slice(J, 1),
                `
`
              )
            ),
            o.pushProcessedSubtitle(a);
        }
      }
      return o;
    }
    formatSubtitleAndFixDur(o) {
      return (
        o.setSubtitleText(ut.replace(o.getSubtitleText(), di.formatReg, " ")),
        o
          .getSubtitleTimeRange()
          .setDuration(
            o.getSubtitleTimeRange().getInitEndTime() -
              o.getSubtitleTimeRange().getStartTime()
          ),
        o
      );
    }
  };
  te(di, "subtitleGapThreshold", 0.15),
    te(di, "maxSubtitleLength", 1e4),
    te(di, "formatReg", /\n/g);
  let qo = di;
  class Ld {
    constructor() {
      te(this, "_processedSubtitles", []);
    }
    get processedSubtitles() {
      return this._processedSubtitles;
    }
    isEmpty() {
      return ut.isEmpty(this._processedSubtitles);
    }
    getLastSubtitle() {
      return ut.last(this._processedSubtitles);
    }
    pushProcessedSubtitle(o) {
      this._processedSubtitles.push(o);
    }
  }
  class Fd {
    static getQueryParam(o, a) {
      return new URLSearchParams(new URL(o).search).get(a);
    }
    static checkFormat(o, a) {
      return o.test(a);
    }
    static isVideoDetailsPage() {
      if (window.location.href.includes("youtube.com"))
        return window.location.href.includes("/watch?");
      if (window.location.href.includes("udemy.com")) {
        const o = /^\/course\/.+\/learn\/lecture\/\d+$/,
          a = new URL(window.location.href).pathname;
        return o.test(a);
      }
      return !1;
    }
  }
  class Rd extends Il {
    constructor(a, v, C) {
      super(v, a, new Ll());
      te(this, "_subtitleLevel");
      this.isPrivate = C;
    }
    get subtitleLevel() {
      if (this._subtitleLevel === void 0)
        throw new Error(ge.i18n.getMessage("subtitleNotInitialized"));
      return this._subtitleLevel;
    }
    async getSubtitles() {
      const a = await Promise.all([
          Rl.getMembership(),
          this.getWhisperSubtitle(),
        ]),
        v = a[0],
        C = this.convertToYouTubeSubtitles(a[1], null);
      if ("error" in v) throw new Error("NoLogin");
      return v.exists
        ? this.getSubtitlesForMembership(C)
        : this.getSubtitlesForNoMembership(C);
    }
    async getSubtitlesForNoMembership(a) {
      return (
        ut.isEmpty(a)
          ? We("video")[0].duration <= 5400 &&
            (this.isPrivate
              ? Zt.isYouTubeMobile()
                ? kr.showAutoCloseAlertWithTitle(
                    ge.i18n.getMessage("videoStatusNotification"),
                    5e3,
                    ge.i18n.getMessage("membershipPromotion")
                  )
                : kr.showNotifyPanel(
                    ge.i18n.getMessage("membershipPromotion"),
                    ge.i18n.getMessage("videoStatusNotification") +
                      "<br/>" +
                      ge.i18n.getMessage("membershipUpgradeLink")
                  )
              : Zt.isYouTubeMobile()
              ? kr.showAutoCloseAlertWithTitle(
                  ge.i18n.getMessage("videoOptimization"),
                  5e3,
                  ge.i18n.getMessage("membershipPromotion")
                )
              : kr.showNotifyPanel(
                  ge.i18n.getMessage("membershipPromotion"),
                  ge.i18n.getMessage("videoOptimization") +
                    "<br/>" +
                    ge.i18n.getMessage("membershipUpgradeLink")
                ))
          : Zt.isYouTubeMobile()
          ? kr.showAutoCloseAlertWithTitle(
              ge.i18n.getMessage("videoEnhancement"),
              5e3,
              ge.i18n.getMessage("membershipPromotion")
            )
          : kr.showNotifyPanel(
              ge.i18n.getMessage("membershipPromotion"),
              ge.i18n.getMessage("videoEnhancement") +
                "<br/>" +
                ge.i18n.getMessage("membershipUpgradeLink")
            ),
        await this.processSubtitles()
      );
    }
    async getSubtitlesForMembership(a) {
      if (ut.isEmpty(a))
        return (
          Zt.isYouTubeMobile()
            ? kr.showAutoCloseAlert(
                ge.i18n.getMessage("subtitleQualityImprovement"),
                3e3
              )
            : kr.showNotifyPanel(
                ge.i18n.getMessage("notification"),
                ge.i18n.getMessage("subtitleQualityImprovement")
              ),
          await this.processSubtitles()
        );
      {
        ci.changeToGreen(), (this._subtitleLevel = si.GREEN);
        const v = await this.translate(
          a,
          ke.fromLanguage,
          ke.toLanguage,
          this.videoId
        );
        return this.checkSubtitlesAvailability(v), v;
      }
    }
    async processSubtitles() {
      let a = await this.getSubtitleArray(),
        v = this.existsPunctuation(a);
      return (
        !this.isAsrCaption() && v
          ? ((this._subtitleLevel = si.YELLOW),
            ci.changeToYellow(),
            (a = await this.processAndTranslateSubtitles(a, new Ha())))
          : ((this._subtitleLevel = si.RED),
            ci.changeToRed(),
            (a = await this.processAndTranslateSubtitles(a, new qo()))),
        a
      );
    }
    async getWhisperSubtitle() {
      return ge.runtime.sendMessage({
        method: "getWhisperSubtitle",
        data: { videoId: this.videoId },
      });
    }
    async getSubtitleArray() {
      const a = await ge.runtime.sendMessage({
        method: "getYouTubeSubtitleXMLContent",
        data: { url: this.caption.baseUrl },
      });
      if (a === void 0)
        throw new Error(ge.i18n.getMessage("youtubeSubtitleError"));
      return this.convertToYouTubeSubtitles(a, !this.isAsrCaption());
    }
    isAsrCaption() {
      return this.caption.kind === "asr";
    }
    getSubtitleLanguage() {
      return Fd.getQueryParam(this.caption.baseUrl, "lang");
    }
    convertToYouTubeSubtitles(a, v) {
      return a.map((C) => new _l(C._, new kl(C.$.start, C.$.dur), v));
    }
    existsPunctuation(a) {
      for (let v of a)
        for (let C of v.getSubtitleText())
          if (C === "." || C === "," || C === "。" || C === "，") return !0;
      return !1;
    }
  }
  class Id extends Fl {
    constructor(a) {
      super(a, ".ytp-right-controls", new kf(), "youtube-dubbing-button");
      te(this, "subtitleLevel");
    }
    async onPlayBtnClick() {
      return this.subtitleLevel !== void 0 ||
        ((ke.loadingContainerDiv = "#player"), !(await super.onPlayBtnClick()))
        ? !1
        : (Sf.isAdPlaying()
            ? Bf.onAdsEnd(this.start.bind(this))
            : await this.start(),
          !0);
    }
    destroy() {
      super.destroy(),
        (this.subtitleLevel = void 0),
        We("#youtube-dubbing-notifiy-panel").hide();
    }
    onInitSubsAndTTSLoadComplete() {
      var a;
      (a = this.video) == null || a.watchAds();
    }
    isMobile() {
      return Zt.isYouTubeMobile();
    }
    findCurrentDocument() {
      return this.metaData.getCurrentDocument();
    }
    async getSubtitleAndPlay(a, v, C, S) {
      const R = this.metaData,
        G = new Rd(a, v, R.isPrivate()),
        J = await G.getSubtitles();
      return (
        (this.subtitleLevel = G.subtitleLevel),
        (this.video = new Td(C, a, S, G.subtitleLevel)),
        this.video.start(J),
        this.subtitleLevel
      );
    }
  }
  class Pd extends Ws {
    constructor() {
      super(
        'div[data-purpose="video-controls"]',
        'div[data-purpose="curriculum-item-viewer-content"]'
      );
    }
    matchNode(o) {
      return (
        o.nodeType === 1 &&
        o.getAttribute("data-purpose") === "video-control-bar"
      );
    }
  }
  class Pl {
    constructor(o, a) {
      te(this, "start");
      te(this, "dur");
      te(this, "initEndTime");
      (this.start = o / 1e3),
        (this.dur = (a - o) / 1e3),
        (this.initEndTime = a / 1e3);
    }
    getDuration() {
      return this.dur;
    }
    getEndTime() {
      return this.initEndTime;
    }
    getInitEndTime() {
      return this.initEndTime;
    }
    getStartTime() {
      return this.start;
    }
    setDuration(o) {
      this.dur = o;
    }
    setStartTime(o) {
      this.start = o;
    }
  }
  class Nl extends Bl {
    constructor(o, a, v) {
      super(o, v), (this.$ = a);
    }
    getSubtitleText() {
      return this._;
    }
    getSubtitleTimeRange() {
      return this.$;
    }
    setSubtitleText(o) {
      this._ = o;
    }
    setSubtitleTimeRange(o) {
      this.$ = o;
    }
  }
  class ql {
    createOnlyStartTime(o) {
      return this.createSubtitle("", this.createTimeRange(o, 0));
    }
    createSubtitle(o, a) {
      const v = new Nl("", a, null);
      return v.setGoogleTranslation(o), v;
    }
    createTimeRange(o, a) {
      return new Pl(o * 1e3, (o + a) * 1e3);
    }
  }
  class Nd extends Il {
    constructor(o, a) {
      super(a, o, new ql());
    }
    async getSubtitles() {
      if ((ci.changeToYellow(), "error" in (await Rl.getMembership())))
        throw new Error("NoLogin");
      this.checkVideoPause();
      let a = await this.getSubtitleArray();
      return (
        this.checkVideoPause(),
        await this.processAndTranslateSubtitles(a, new Ha())
      );
    }
    checkVideoPause() {
      const o = We("video")[0];
      o.paused || o.pause();
    }
    async getSubtitleArray() {
      const o = await ge.runtime.sendMessage({
        method: "getVTTSubtitleArray",
        data: { url: this.caption.url },
      });
      return this.convertToSubtitles(o);
    }
    convertToSubtitles(o) {
      return o.map((a) => new Nl(a.text, new Pl(a.from, a.to), !0));
    }
    getSubtitleLanguage() {
      return this.caption.locale_id;
    }
    checkSubtitlesAvailability(o) {
      super.checkSubtitlesAvailability(o), this.checkVideoPause();
    }
  }
  class qd extends Fl {
    constructor(o) {
      super(
        o,
        'div[data-purpose="video-controls"]',
        new Pd(),
        "udemy-dubbing-button"
      );
    }
    async onPlayBtnClick() {
      return (
        (ke.loadingContainerDiv =
          'div[data-purpose="curriculum-item-viewer-content"]'),
        (await super.onPlayBtnClick()) ? (await this.start(), !0) : !1
      );
    }
    async getSubtitleAndPlay(o, a, v, C) {
      const R = await new Nd(o, a).getSubtitles();
      return (
        (this.video = new El(v, o, C, si.YELLOW, new ql())),
        this.video.start(R),
        si.YELLOW
      );
    }
  }
  const Md = {
    matches: ["*://*/*"],
    runAt: "document_end",
    async main(A) {
      var C;
      const o = [
        { domain: "youtube.com", class: Id },
        { domain: "udemy.com", class: qd },
      ];
      function a(S) {
        var R;
        return (R = S.find((G) => window.location.href.includes(G.domain))) ==
          null
          ? void 0
          : R.class;
      }
      const v = a(o);
      v !== void 0 &&
        (C = window == null ? void 0 : window.videoTransDuck) != null &&
        C.metadata &&
        window.videoTransDuck.metadata.onVideoChange((S) => {
          var R;
          (R = window == null ? void 0 : window.videoTransDuck) != null &&
            R.metadata &&
            (window.videoTransDuck.player &&
              window.videoTransDuck.player.destroy(),
            (window.videoTransDuck.player = new v(
              window.videoTransDuck.metadata
            )));
        });
    },
  };
  var Od = {
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
    ENTRYPOINT: "content",
  };
  function Ua(A, ...o) {}
  var Hd = {
      debug: (...A) => Ua(console.debug, ...A),
      log: (...A) => Ua(console.log, ...A),
      warn: (...A) => Ua(console.warn, ...A),
      error: (...A) => Ua(console.error, ...A),
    },
    Ud =
      ((xu = class extends Event {
        constructor(o, a) {
          super(xu.EVENT_NAME, {}), (this.newUrl = o), (this.oldUrl = a);
        }
      }),
      te(xu, "EVENT_NAME", Ml("wxt:locationchange")),
      xu);
  function Ml(A) {
    const o = typeof Od > "u" ? "build" : "content";
    return `${ge.runtime.id}:${o}:${A}`;
  }
  function Vd(A) {
    let o, a;
    return {
      run() {
        o == null &&
          ((a = new URL(location.href)),
          (o = A.setInterval(() => {
            let v = new URL(location.href);
            v.href !== a.href && (window.dispatchEvent(new Ud(v, a)), (a = v));
          }, 1e3)));
      },
    };
  }
  var Gd =
    ((Gi = class {
      constructor(o, a) {
        ua(this, Ka);
        ua(this, Ya);
        ua(this, za, window.self === window.top);
        ua(this, Cu, void 0);
        ua(this, ja, Vd(this));
        (this.contentScriptName = o),
          (this.options = a),
          yf(this, Cu, new AbortController()),
          Ra(this, za) && Gs(this, Ka, Df).call(this),
          this.setTimeout(() => {
            Gs(this, Ya, xf).call(this);
          });
      }
      get signal() {
        return Ra(this, Cu).signal;
      }
      abort(o) {
        return Ra(this, Cu).abort(o);
      }
      get isInvalid() {
        return (
          ge.runtime.id == null && this.notifyInvalidated(), this.signal.aborted
        );
      }
      get isValid() {
        return !this.isInvalid;
      }
      onInvalidated(o) {
        return (
          this.signal.addEventListener("abort", o),
          () => this.signal.removeEventListener("abort", o)
        );
      }
      block() {
        return new Promise(() => {});
      }
      setInterval(o, a) {
        const v = setInterval(() => {
          this.isValid && o();
        }, a);
        return this.onInvalidated(() => clearInterval(v)), v;
      }
      setTimeout(o, a) {
        const v = setTimeout(() => {
          this.isValid && o();
        }, a);
        return this.onInvalidated(() => clearTimeout(v)), v;
      }
      requestAnimationFrame(o) {
        const a = requestAnimationFrame((...v) => {
          this.isValid && o(...v);
        });
        return this.onInvalidated(() => cancelAnimationFrame(a)), a;
      }
      requestIdleCallback(o, a) {
        const v = requestIdleCallback((...C) => {
          this.signal.aborted || o(...C);
        }, a);
        return this.onInvalidated(() => cancelIdleCallback(v)), v;
      }
      addEventListener(o, a, v, C) {
        var S;
        a === "wxt:locationchange" && this.isValid && Ra(this, ja).run(),
          (S = o.addEventListener) == null ||
            S.call(o, a.startsWith("wxt:") ? Ml(a) : a, v, {
              ...C,
              signal: this.signal,
            });
      }
      notifyInvalidated() {
        this.abort("Content script context invalidated"),
          Hd.debug(
            `Content script "${this.contentScriptName}" context invalidated`
          );
      }
    }),
    (za = new WeakMap()),
    (Cu = new WeakMap()),
    (ja = new WeakMap()),
    (Ka = new WeakSet()),
    (Df = function () {
      window.postMessage(
        {
          event: Gi.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
        },
        "*"
      );
    }),
    (Ya = new WeakSet()),
    (xf = function () {
      const o = (a) => {
        var v, C;
        ((v = a.data) == null ? void 0 : v.type) ===
          Gi.SCRIPT_STARTED_MESSAGE_TYPE &&
          ((C = a.data) == null ? void 0 : C.contentScriptName) ===
            this.contentScriptName &&
          this.notifyInvalidated();
      };
      addEventListener("message", o),
        this.onInvalidated(() => removeEventListener("message", o));
    }),
    te(Gi, "SCRIPT_STARTED_MESSAGE_TYPE", "wxt:content-script-started"),
    Gi);
  function Va(A, ...o) {}
  var Wd = {
    debug: (...A) => Va(console.debug, ...A),
    log: (...A) => Va(console.log, ...A),
    warn: (...A) => Va(console.warn, ...A),
    error: (...A) => Va(console.error, ...A),
  };
  (async () => {
    try {
      const { main: A, ...o } = Md,
        a = new Gd("content", o);
      await A(a);
    } catch (A) {
      Wd.error('The content script "content" crashed on startup!', A);
    }
  })();
})();
