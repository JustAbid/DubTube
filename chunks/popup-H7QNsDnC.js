var Ui = Object.defineProperty;
var zi = (e, t, n) =>
  t in e
    ? Ui(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Cn = (e, t, n) => (zi(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = n(r);
    fetch(r.href, a);
  }
})();
function Ws(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const Pe = {},
  Qt = [],
  at = () => {},
  Ki = () => !1,
  Jn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  qs = (e) => e.startsWith("onUpdate:"),
  Ye = Object.assign,
  Js = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Bi = Object.prototype.hasOwnProperty,
  ge = (e, t) => Bi.call(e, t),
  Q = Array.isArray,
  en = (e) => Sn(e) === "[object Map]",
  Zn = (e) => Sn(e) === "[object Set]",
  Or = (e) => Sn(e) === "[object Date]",
  le = (e) => typeof e == "function",
  Ue = (e) => typeof e == "string",
  kt = (e) => typeof e == "symbol",
  Oe = (e) => e !== null && typeof e == "object",
  ma = (e) => (Oe(e) || le(e)) && le(e.then) && le(e.catch),
  da = Object.prototype.toString,
  Sn = (e) => da.call(e),
  Gi = (e) => Sn(e).slice(8, -1),
  ha = (e) => Sn(e) === "[object Object]",
  Zs = (e) =>
    Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Rn = Ws(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  $n = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Yi = /-(\w)/g,
  ht = $n((e) => e.replace(Yi, (t, n) => (n ? n.toUpperCase() : ""))),
  Wi = /\B([A-Z])/g,
  Yt = $n((e) => e.replace(Wi, "-$1").toLowerCase()),
  Xn = $n((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ys = $n((e) => (e ? `on${Xn(e)}` : "")),
  Lt = (e, t) => !Object.is(e, t),
  Hn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Un = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  ga = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ir;
const pa = () =>
  Ir ||
  (Ir =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Qn(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Ue(s) ? $i(s) : Qn(s);
      if (r) for (const a in r) t[a] = r[a];
    }
    return t;
  } else if (Ue(e) || Oe(e)) return e;
}
const qi = /;(?![^(]*\))/g,
  Ji = /:([^]+)/,
  Zi = /\/\*[^]*?\*\//g;
function $i(e) {
  const t = {};
  return (
    e
      .replace(Zi, "")
      .split(qi)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ji);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function dt(e) {
  let t = "";
  if (Ue(e)) t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = dt(e[n]);
      s && (t += s + " ");
    }
  else if (Oe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Qi = Ws(Xi);
function ba(e) {
  return !!e || e === "";
}
function eo(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = es(e[s], t[s]);
  return n;
}
function es(e, t) {
  if (e === t) return !0;
  let n = Or(e),
    s = Or(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = kt(e)), (s = kt(t)), n || s)) return e === t;
  if (((n = Q(e)), (s = Q(t)), n || s)) return n && s ? eo(e, t) : !1;
  if (((n = Oe(e)), (s = Oe(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      a = Object.keys(t).length;
    if (r !== a) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        m = t.hasOwnProperty(o);
      if ((l && !m) || (!l && m) || !es(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function to(e, t) {
  return e.findIndex((n) => es(n, t));
}
const we = (e) =>
    Ue(e)
      ? e
      : e == null
      ? ""
      : Q(e) || (Oe(e) && (e.toString === da || !le(e.toString)))
      ? JSON.stringify(e, va, 2)
      : String(e),
  va = (e, t) =>
    t && t.__v_isRef
      ? va(e, t.value)
      : en(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], a) => ((n[Ss(s, a) + " =>"] = r), n),
            {}
          ),
        }
      : Zn(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ss(n)) }
      : kt(t)
      ? Ss(t)
      : Oe(t) && !Q(t) && !ha(t)
      ? String(t)
      : t,
  Ss = (e, t = "") => {
    var n;
    return kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let ct;
class no {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ct),
      !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ct;
      try {
        return (ct = this), t();
      } finally {
        ct = n;
      }
    }
  }
  on() {
    ct = this;
  }
  off() {
    ct = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function so(e, t = ct) {
  t && t.active && t.effects.push(e);
}
let Kt;
class $s {
  constructor(t, n, s, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 3),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._queryings = 0),
      (this._depsLength = 0),
      so(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      (this._dirtyLevel = 0), this._queryings++, Wt();
      for (const t of this.deps)
        if (t.computed && (ro(t.computed), this._dirtyLevel >= 2)) break;
      qt(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Ot,
      n = Kt;
    try {
      return (Ot = !0), (Kt = this), this._runnings++, kr(this), this.fn();
    } finally {
      Lr(this), this._runnings--, (Kt = n), (Ot = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (kr(this),
      Lr(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function ro(e) {
  return e.value;
}
function kr(e) {
  e._trackId++, (e._depsLength = 0);
}
function Lr(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) xa(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function xa(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Ot = !0,
  Is = 0;
const Aa = [];
function Wt() {
  Aa.push(Ot), (Ot = !1);
}
function qt() {
  const e = Aa.pop();
  Ot = e === void 0 ? !0 : e;
}
function Xs() {
  Is++;
}
function Qs() {
  for (Is--; !Is && ks.length; ) ks.shift()();
}
function ya(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && xa(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const ks = [];
function Sa(e, t, n) {
  Xs();
  for (const s of e.keys())
    if (
      !(!s.allowRecurse && s._runnings) &&
      s._dirtyLevel < t &&
      (!s._runnings || t !== 2)
    ) {
      const r = s._dirtyLevel;
      (s._dirtyLevel = t),
        r === 0 &&
          (!s._queryings || t !== 2) &&
          (s.trigger(), s.scheduler && ks.push(s.scheduler));
    }
  Qs();
}
const _a = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  zn = new WeakMap(),
  Bt = Symbol(""),
  Ls = Symbol("");
function st(e, t, n) {
  if (Ot && Kt) {
    let s = zn.get(e);
    s || zn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = _a(() => s.delete(n)))), ya(Kt, r);
  }
}
function _t(e, t, n, s, r, a) {
  const o = zn.get(e);
  if (!o) return;
  let l = [];
  if (t === "clear") l = [...o.values()];
  else if (n === "length" && Q(e)) {
    const m = Number(s);
    o.forEach((d, b) => {
      (b === "length" || (!kt(b) && b >= m)) && l.push(d);
    });
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case "add":
        Q(e)
          ? Zs(n) && l.push(o.get("length"))
          : (l.push(o.get(Bt)), en(e) && l.push(o.get(Ls)));
        break;
      case "delete":
        Q(e) || (l.push(o.get(Bt)), en(e) && l.push(o.get(Ls)));
        break;
      case "set":
        en(e) && l.push(o.get(Bt));
        break;
    }
  Xs();
  for (const m of l) m && Sa(m, 3);
  Qs();
}
function ao(e, t) {
  var n;
  return (n = zn.get(e)) == null ? void 0 : n.get(t);
}
const io = Ws("__proto__,__v_isRef,__isVue"),
  wa = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(kt)
  ),
  Vr = oo();
function oo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = xe(this);
        for (let a = 0, o = this.length; a < o; a++) st(s, "get", a + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(xe)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Wt(), Xs();
        const s = xe(this)[t].apply(this, n);
        return Qs(), qt(), s;
      };
    }),
    e
  );
}
function lo(e) {
  const t = xe(this);
  return st(t, "has", e), t.hasOwnProperty(e);
}
class Ea {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      a = this._shallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw")
      return s === (r ? (a ? So : Ta) : a ? Ca : Ma).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = Q(t);
    if (!r) {
      if (o && ge(Vr, n)) return Reflect.get(Vr, n, s);
      if (n === "hasOwnProperty") return lo;
    }
    const l = Reflect.get(t, n, s);
    return (kt(n) ? wa.has(n) : io(n)) || (r || st(t, "get", n), a)
      ? l
      : Qe(l)
      ? o && Zs(n)
        ? l
        : l.value
      : Oe(l)
      ? r
        ? Pa(l)
        : nr(l)
      : l;
  }
}
class Na extends Ea {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let a = t[n];
    if (!this._shallow) {
      const m = sn(a);
      if (
        (!Kn(s) && !sn(s) && ((a = xe(a)), (s = xe(s))),
        !Q(t) && Qe(a) && !Qe(s))
      )
        return m ? !1 : ((a.value = s), !0);
    }
    const o = Q(t) && Zs(n) ? Number(n) < t.length : ge(t, n),
      l = Reflect.set(t, n, s, r);
    return (
      t === xe(r) && (o ? Lt(s, a) && _t(t, "set", n, s) : _t(t, "add", n, s)),
      l
    );
  }
  deleteProperty(t, n) {
    const s = ge(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && _t(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!kt(n) || !wa.has(n)) && st(t, "has", n), s;
  }
  ownKeys(t) {
    return st(t, "iterate", Q(t) ? "length" : Bt), Reflect.ownKeys(t);
  }
}
class uo extends Ea {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const co = new Na(),
  fo = new uo(),
  mo = new Na(!0),
  er = (e) => e,
  ts = (e) => Reflect.getPrototypeOf(e);
function Tn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = xe(e),
    a = xe(t);
  n || (Lt(t, a) && st(r, "get", t), st(r, "get", a));
  const { has: o } = ts(r),
    l = s ? er : n ? rr : vn;
  if (o.call(r, t)) return l(e.get(t));
  if (o.call(r, a)) return l(e.get(a));
  e !== r && e.get(t);
}
function Pn(e, t = !1) {
  const n = this.__v_raw,
    s = xe(n),
    r = xe(e);
  return (
    t || (Lt(e, r) && st(s, "has", e), st(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function On(e, t = !1) {
  return (
    (e = e.__v_raw), !t && st(xe(e), "iterate", Bt), Reflect.get(e, "size", e)
  );
}
function Rr(e) {
  e = xe(e);
  const t = xe(this);
  return ts(t).has.call(t, e) || (t.add(e), _t(t, "add", e, e)), this;
}
function Hr(e, t) {
  t = xe(t);
  const n = xe(this),
    { has: s, get: r } = ts(n);
  let a = s.call(n, e);
  a || ((e = xe(e)), (a = s.call(n, e)));
  const o = r.call(n, e);
  return (
    n.set(e, t), a ? Lt(t, o) && _t(n, "set", e, t) : _t(n, "add", e, t), this
  );
}
function Fr(e) {
  const t = xe(this),
    { has: n, get: s } = ts(t);
  let r = n.call(t, e);
  r || ((e = xe(e)), (r = n.call(t, e))), s && s.call(t, e);
  const a = t.delete(e);
  return r && _t(t, "delete", e, void 0), a;
}
function Dr() {
  const e = xe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && _t(e, "clear", void 0, void 0), n;
}
function In(e, t) {
  return function (s, r) {
    const a = this,
      o = a.__v_raw,
      l = xe(o),
      m = t ? er : e ? rr : vn;
    return (
      !e && st(l, "iterate", Bt), o.forEach((d, b) => s.call(r, m(d), m(b), a))
    );
  };
}
function kn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      a = xe(r),
      o = en(a),
      l = e === "entries" || (e === Symbol.iterator && o),
      m = e === "keys" && o,
      d = r[e](...s),
      b = n ? er : t ? rr : vn;
    return (
      !t && st(a, "iterate", m ? Ls : Bt),
      {
        next() {
          const { value: x, done: A } = d.next();
          return A
            ? { value: x, done: A }
            : { value: l ? [b(x[0]), b(x[1])] : b(x), done: A };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Nt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ho() {
  const e = {
      get(a) {
        return Tn(this, a);
      },
      get size() {
        return On(this);
      },
      has: Pn,
      add: Rr,
      set: Hr,
      delete: Fr,
      clear: Dr,
      forEach: In(!1, !1),
    },
    t = {
      get(a) {
        return Tn(this, a, !1, !0);
      },
      get size() {
        return On(this);
      },
      has: Pn,
      add: Rr,
      set: Hr,
      delete: Fr,
      clear: Dr,
      forEach: In(!1, !0),
    },
    n = {
      get(a) {
        return Tn(this, a, !0);
      },
      get size() {
        return On(this, !0);
      },
      has(a) {
        return Pn.call(this, a, !0);
      },
      add: Nt("add"),
      set: Nt("set"),
      delete: Nt("delete"),
      clear: Nt("clear"),
      forEach: In(!0, !1),
    },
    s = {
      get(a) {
        return Tn(this, a, !0, !0);
      },
      get size() {
        return On(this, !0);
      },
      has(a) {
        return Pn.call(this, a, !0);
      },
      add: Nt("add"),
      set: Nt("set"),
      delete: Nt("delete"),
      clear: Nt("clear"),
      forEach: In(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      (e[a] = kn(a, !1, !1)),
        (n[a] = kn(a, !0, !1)),
        (t[a] = kn(a, !1, !0)),
        (s[a] = kn(a, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [go, po, bo, vo] = ho();
function tr(e, t) {
  const n = t ? (e ? vo : bo) : e ? po : go;
  return (s, r, a) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(ge(n, r) && r in s ? n : s, r, a);
}
const xo = { get: tr(!1, !1) },
  Ao = { get: tr(!1, !0) },
  yo = { get: tr(!0, !1) },
  Ma = new WeakMap(),
  Ca = new WeakMap(),
  Ta = new WeakMap(),
  So = new WeakMap();
function _o(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _o(Gi(e));
}
function nr(e) {
  return sn(e) ? e : sr(e, !1, co, xo, Ma);
}
function Eo(e) {
  return sr(e, !1, mo, Ao, Ca);
}
function Pa(e) {
  return sr(e, !0, fo, yo, Ta);
}
function sr(e, t, n, s, r) {
  if (!Oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const a = r.get(e);
  if (a) return a;
  const o = wo(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function tn(e) {
  return sn(e) ? tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sn(e) {
  return !!(e && e.__v_isReadonly);
}
function Kn(e) {
  return !!(e && e.__v_isShallow);
}
function Oa(e) {
  return tn(e) || sn(e);
}
function xe(e) {
  const t = e && e.__v_raw;
  return t ? xe(t) : e;
}
function Ia(e) {
  return Un(e, "__v_skip", !0), e;
}
const vn = (e) => (Oe(e) ? nr(e) : e),
  rr = (e) => (Oe(e) ? Pa(e) : e);
class ka {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new $s(
        () => t(this._value),
        () => Vs(this, 1)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = xe(this);
    return (
      La(t),
      (!t._cacheable || t.effect.dirty) &&
        Lt(t._value, (t._value = t.effect.run())) &&
        Vs(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function No(e, t, n = !1) {
  let s, r;
  const a = le(e);
  return (
    a ? ((s = e), (r = at)) : ((s = e.get), (r = e.set)),
    new ka(s, r, a || !r, n)
  );
}
function La(e) {
  Ot &&
    Kt &&
    ((e = xe(e)),
    ya(
      Kt,
      e.dep ||
        (e.dep = _a(() => (e.dep = void 0), e instanceof ka ? e : void 0))
    ));
}
function Vs(e, t = 3, n) {
  e = xe(e);
  const s = e.dep;
  s && Sa(s, t);
}
function Qe(e) {
  return !!(e && e.__v_isRef === !0);
}
function St(e) {
  return Mo(e, !1);
}
function Mo(e, t) {
  return Qe(e) ? e : new Co(e, t);
}
class Co {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : xe(t)),
      (this._value = n ? t : vn(t));
  }
  get value() {
    return La(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Kn(t) || sn(t);
    (t = n ? t : xe(t)),
      Lt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : vn(t)), Vs(this, 3));
  }
}
function To(e) {
  return Qe(e) ? e.value : e;
}
const Po = {
  get: (e, t, n) => To(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return Qe(r) && !Qe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Va(e) {
  return tn(e) ? e : new Proxy(e, Po);
}
function Pt(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Io(e, n);
  return t;
}
class Oo {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ao(xe(this._object), this._key);
  }
}
function Io(e, t, n) {
  const s = e[t];
  return Qe(s) ? s : new Oo(e, t, n);
}
function It(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (a) {
    ns(a, t, n);
  }
  return r;
}
function ot(e, t, n, s) {
  if (le(e)) {
    const a = It(e, t, n, s);
    return (
      a &&
        ma(a) &&
        a.catch((o) => {
          ns(o, t, n);
        }),
      a
    );
  }
  const r = [];
  for (let a = 0; a < e.length; a++) r.push(ot(e[a], t, n, s));
  return r;
}
function ns(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const o = t.proxy,
      l = `https://vuejs.org/errors/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let b = 0; b < d.length; b++) if (d[b](e, o, l) === !1) return;
      }
      a = a.parent;
    }
    const m = t.appContext.config.errorHandler;
    if (m) {
      It(m, null, 10, [e, o, l]);
      return;
    }
  }
  ko(e, n, r, s);
}
function ko(e, t, n, s = !0) {
  console.error(e);
}
let xn = !1,
  Rs = !1;
const qe = [];
let mt = 0;
const nn = [];
let yt = null,
  Ut = 0;
const Ra = Promise.resolve();
let ar = null;
function Lo(e) {
  const t = ar || Ra;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vo(e) {
  let t = mt + 1,
    n = qe.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = qe[s],
      a = An(r);
    a < e || (a === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ir(e) {
  (!qe.length || !qe.includes(e, xn && e.allowRecurse ? mt + 1 : mt)) &&
    (e.id == null ? qe.push(e) : qe.splice(Vo(e.id), 0, e), Ha());
}
function Ha() {
  !xn && !Rs && ((Rs = !0), (ar = Ra.then(Da)));
}
function Ro(e) {
  const t = qe.indexOf(e);
  t > mt && qe.splice(t, 1);
}
function Ho(e) {
  Q(e)
    ? nn.push(...e)
    : (!yt || !yt.includes(e, e.allowRecurse ? Ut + 1 : Ut)) && nn.push(e),
    Ha();
}
function jr(e, t, n = xn ? mt + 1 : 0) {
  for (; n < qe.length; n++) {
    const s = qe[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      qe.splice(n, 1), n--, s();
    }
  }
}
function Fa(e) {
  if (nn.length) {
    const t = [...new Set(nn)];
    if (((nn.length = 0), yt)) {
      yt.push(...t);
      return;
    }
    for (yt = t, yt.sort((n, s) => An(n) - An(s)), Ut = 0; Ut < yt.length; Ut++)
      yt[Ut]();
    (yt = null), (Ut = 0);
  }
}
const An = (e) => (e.id == null ? 1 / 0 : e.id),
  Fo = (e, t) => {
    const n = An(e) - An(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Da(e) {
  (Rs = !1), (xn = !0), qe.sort(Fo);
  try {
    for (mt = 0; mt < qe.length; mt++) {
      const t = qe[mt];
      t && t.active !== !1 && It(t, null, 14);
    }
  } finally {
    (mt = 0),
      (qe.length = 0),
      Fa(),
      (xn = !1),
      (ar = null),
      (qe.length || nn.length) && Da();
  }
}
function Do(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Pe;
  let r = n;
  const a = t.startsWith("update:"),
    o = a && t.slice(7);
  if (o && o in s) {
    const b = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: x, trim: A } = s[b] || Pe;
    A && (r = n.map((j) => (Ue(j) ? j.trim() : j))), x && (r = n.map(ga));
  }
  let l,
    m = s[(l = ys(t))] || s[(l = ys(ht(t)))];
  !m && a && (m = s[(l = ys(Yt(t)))]), m && ot(m, e, 6, r);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ot(d, e, 6, r);
  }
}
function ja(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const a = e.emits;
  let o = {},
    l = !1;
  if (!le(e)) {
    const m = (d) => {
      const b = ja(d, t, !0);
      b && ((l = !0), Ye(o, b));
    };
    !n && t.mixins.length && t.mixins.forEach(m),
      e.extends && m(e.extends),
      e.mixins && e.mixins.forEach(m);
  }
  return !a && !l
    ? (Oe(e) && s.set(e, null), null)
    : (Q(a) ? a.forEach((m) => (o[m] = null)) : Ye(o, a),
      Oe(e) && s.set(e, o),
      o);
}
function ss(e, t) {
  return !e || !Jn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Yt(t)) || ge(e, t));
}
let Ze = null,
  Ua = null;
function Bn(e) {
  const t = Ze;
  return (Ze = e), (Ua = (e && e.type.__scopeId) || null), t;
}
function jo(e, t = Ze, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && $r(-1);
    const a = Bn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bn(a), s._d && $r(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function _s(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: a,
    propsOptions: [o],
    slots: l,
    attrs: m,
    emit: d,
    render: b,
    renderCache: x,
    data: A,
    setupState: j,
    ctx: y,
    inheritAttrs: T,
  } = e;
  let k, W;
  const te = Bn(e);
  try {
    if (n.shapeFlag & 4) {
      const he = r || s,
        B = he;
      (k = ft(b.call(B, he, x, a, j, A, y))), (W = m);
    } else {
      const he = t;
      (k = ft(
        he.length > 1 ? he(a, { attrs: m, slots: l, emit: d }) : he(a, null)
      )),
        (W = t.props ? m : Uo(m));
    }
  } catch (he) {
    (pn.length = 0), ns(he, e, 1), (k = Ge(Vt));
  }
  let se = k;
  if (W && T !== !1) {
    const he = Object.keys(W),
      { shapeFlag: B } = se;
    he.length &&
      B & 7 &&
      (o && he.some(qs) && (W = zo(W, o)), (se = rn(se, W)));
  }
  return (
    n.dirs &&
      ((se = rn(se)), (se.dirs = se.dirs ? se.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (se.transition = n.transition),
    (k = se),
    Bn(te),
    k
  );
}
const Uo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Jn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  zo = (e, t) => {
    const n = {};
    for (const s in e) (!qs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ko(e, t, n) {
  const { props: s, children: r, component: a } = e,
    { props: o, children: l, patchFlag: m } = t,
    d = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && m >= 0) {
    if (m & 1024) return !0;
    if (m & 16) return s ? Ur(s, o, d) : !!o;
    if (m & 8) {
      const b = t.dynamicProps;
      for (let x = 0; x < b.length; x++) {
        const A = b[x];
        if (o[A] !== s[A] && !ss(d, A)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Ur(s, o, d)
        : !0
      : !!o;
  return !1;
}
function Ur(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    if (t[a] !== e[a] && !ss(n, a)) return !0;
  }
  return !1;
}
function Bo({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const s = t.subTree;
      if (
        (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      )
        ((e = t.vnode).el = n), (t = t.parent);
      else break;
    }
}
const za = "components";
function ws(e, t) {
  return Yo(za, e, !0, t) || e;
}
const Go = Symbol.for("v-ndc");
function Yo(e, t, n = !0, s = !1) {
  const r = Ze || Je;
  if (r) {
    const a = r.type;
    if (e === za) {
      const l = Dl(a, !1);
      if (l && (l === t || l === ht(t) || l === Xn(ht(t)))) return a;
    }
    const o = zr(r[e] || a[e], t) || zr(r.appContext[e], t);
    return !o && s ? a : o;
  }
}
function zr(e, t) {
  return e && (e[t] || e[ht(t)] || e[Xn(ht(t))]);
}
const Wo = (e) => e.__isSuspense;
function qo(e, t) {
  t && t.pendingBranch
    ? Q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ho(e);
}
const Jo = Symbol.for("v-scx"),
  Zo = () => Fn(Jo),
  Ln = {};
function We(e, t, n) {
  return Ka(e, t, n);
}
function Ka(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: a, onTrack: o, onTrigger: l } = Pe
) {
  if (t && a) {
    const B = t;
    t = (...Ee) => {
      B(...Ee), he();
    };
  }
  const m = Je,
    d = (B) => (s === !0 ? B : zt(B, s === !1 ? 1 : void 0));
  let b,
    x = !1,
    A = !1;
  if (
    (Qe(e)
      ? ((b = () => e.value), (x = Kn(e)))
      : tn(e)
      ? ((b = () => d(e)), (x = !0))
      : Q(e)
      ? ((A = !0),
        (x = e.some((B) => tn(B) || Kn(B))),
        (b = () =>
          e.map((B) => {
            if (Qe(B)) return B.value;
            if (tn(B)) return d(B);
            if (le(B)) return It(B, m, 2);
          })))
      : le(e)
      ? t
        ? (b = () => It(e, m, 2))
        : (b = () => (j && j(), ot(e, m, 3, [y])))
      : (b = at),
    t && s)
  ) {
    const B = b;
    b = () => zt(B());
  }
  let j,
    y = (B) => {
      j = se.onStop = () => {
        It(B, m, 4), (j = se.onStop = void 0);
      };
    },
    T;
  if (os)
    if (
      ((y = at),
      t ? n && ot(t, m, 3, [b(), A ? [] : void 0, y]) : b(),
      r === "sync")
    ) {
      const B = Zo();
      T = B.__watcherHandles || (B.__watcherHandles = []);
    } else return at;
  let k = A ? new Array(e.length).fill(Ln) : Ln;
  const W = () => {
    if (!(!se.active || !se.dirty))
      if (t) {
        const B = se.run();
        (s || x || (A ? B.some((Ee, pe) => Lt(Ee, k[pe])) : Lt(B, k))) &&
          (j && j(),
          ot(t, m, 3, [B, k === Ln ? void 0 : A && k[0] === Ln ? [] : k, y]),
          (k = B));
      } else se.run();
  };
  W.allowRecurse = !!t;
  let te;
  r === "sync"
    ? (te = W)
    : r === "post"
    ? (te = () => tt(W, m && m.suspense))
    : ((W.pre = !0), m && (W.id = m.uid), (te = () => ir(W)));
  const se = new $s(b, at, te),
    he = () => {
      se.stop(), m && m.scope && Js(m.scope.effects, se);
    };
  return (
    t
      ? n
        ? W()
        : (k = se.run())
      : r === "post"
      ? tt(se.run.bind(se), m && m.suspense)
      : se.run(),
    T && T.push(he),
    he
  );
}
function $o(e, t, n) {
  const s = this.proxy,
    r = Ue(e) ? (e.includes(".") ? Ba(s, e) : () => s[e]) : e.bind(s, s);
  let a;
  le(t) ? (a = t) : ((a = t.handler), (n = t));
  const o = Je;
  an(this);
  const l = Ka(r, a.bind(s), n);
  return o ? an(o) : Gt(), l;
}
function Ba(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function zt(e, t, n = 0, s) {
  if (!Oe(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((s = s || new Set()), s.has(e))) return e;
  if ((s.add(e), Qe(e))) zt(e.value, t, n, s);
  else if (Q(e)) for (let r = 0; r < e.length; r++) zt(e[r], t, n, s);
  else if (Zn(e) || en(e))
    e.forEach((r) => {
      zt(r, t, n, s);
    });
  else if (ha(e)) for (const r in e) zt(e[r], t, n, s);
  return e;
}
function $t(e, t) {
  const n = Ze;
  if (n === null) return e;
  const s = ls(n) || n.proxy,
    r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, l, m, d = Pe] = t[a];
    o &&
      (le(o) && (o = { mounted: o, updated: o }),
      o.deep && zt(l),
      r.push({
        dir: o,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: m,
        modifiers: d,
      }));
  }
  return e;
}
function Ft(e, t, n, s) {
  const r = e.dirs,
    a = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    a && (l.oldValue = a[o].value);
    let m = l.dir[s];
    m && (Wt(), ot(m, n, 8, [e.el, l, e, t]), qt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Xo(e, t) {
  return le(e) ? Ye({ name: e.name }, t, { setup: e }) : e;
}
const hn = (e) => !!e.type.__asyncLoader,
  Ga = (e) => e.type.__isKeepAlive;
function Qo(e, t) {
  Ya(e, "a", t);
}
function el(e, t) {
  Ya(e, "da", t);
}
function Ya(e, t, n = Je) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((rs(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Ga(r.parent.vnode) && tl(s, t, n, r), (r = r.parent);
  }
}
function tl(e, t, n, s) {
  const r = rs(t, e, s, !0);
  or(() => {
    Js(s[t], r);
  }, n);
}
function rs(e, t, n = Je, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          Wt(), an(n);
          const l = ot(t, n, e, o);
          return Gt(), qt(), l;
        });
    return s ? r.unshift(a) : r.push(a), a;
  }
}
const wt =
    (e) =>
    (t, n = Je) =>
      (!os || e === "sp") && rs(e, (...s) => t(...s), n),
  nl = wt("bm"),
  Wa = wt("m"),
  sl = wt("bu"),
  rl = wt("u"),
  al = wt("bum"),
  or = wt("um"),
  il = wt("sp"),
  ol = wt("rtg"),
  ll = wt("rtc");
function ul(e, t = Je) {
  rs("ec", e, t);
}
function qa(e, t, n, s) {
  let r;
  const a = n && n[s];
  if (Q(e) || Ue(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, a && a[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, a && a[o]);
  } else if (Oe(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, a && a[l]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, m = o.length; l < m; l++) {
        const d = o[l];
        r[l] = t(e[d], d, l, a && a[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function Ja(e, t, n = {}, s, r) {
  if (Ze.isCE || (Ze.parent && hn(Ze.parent) && Ze.parent.isCE))
    return t !== "default" && (n.name = t), Ge("slot", n, s && s());
  let a = e[t];
  a && a._c && (a._d = !1), je();
  const o = a && Za(a(n)),
    l = oi(
      nt,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    );
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    l
  );
}
function Za(e) {
  return e.some((t) =>
    li(t) ? !(t.type === Vt || (t.type === nt && !Za(t.children))) : !0
  )
    ? e
    : null;
}
const Hs = (e) => (e ? (fi(e) ? ls(e) || e.proxy : Hs(e.parent)) : null),
  gn = Ye(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hs(e.parent),
    $root: (e) => Hs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => lr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), ir(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Lo.bind(e.proxy)),
    $watch: (e) => $o.bind(e),
  }),
  Es = (e, t) => e !== Pe && !e.__isScriptSetup && ge(e, t),
  cl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: a,
        accessCache: o,
        type: l,
        appContext: m,
      } = e;
      let d;
      if (t[0] !== "$") {
        const j = o[t];
        if (j !== void 0)
          switch (j) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return a[t];
          }
        else {
          if (Es(s, t)) return (o[t] = 1), s[t];
          if (r !== Pe && ge(r, t)) return (o[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && ge(d, t)) return (o[t] = 3), a[t];
          if (n !== Pe && ge(n, t)) return (o[t] = 4), n[t];
          Fs && (o[t] = 0);
        }
      }
      const b = gn[t];
      let x, A;
      if (b) return t === "$attrs" && st(e, "get", t), b(e);
      if ((x = l.__cssModules) && (x = x[t])) return x;
      if (n !== Pe && ge(n, t)) return (o[t] = 4), n[t];
      if (((A = m.config.globalProperties), ge(A, t))) return A[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: a } = e;
      return Es(r, t)
        ? ((r[t] = n), !0)
        : s !== Pe && ge(s, t)
        ? ((s[t] = n), !0)
        : ge(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((a[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: a,
        },
      },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== Pe && ge(e, o)) ||
        Es(t, o) ||
        ((l = a[0]) && ge(l, o)) ||
        ge(s, o) ||
        ge(gn, o) ||
        ge(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ge(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Kr(e) {
  return Q(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Fs = !0;
function fl(e) {
  const t = lr(e),
    n = e.proxy,
    s = e.ctx;
  (Fs = !1), t.beforeCreate && Br(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: a,
    methods: o,
    watch: l,
    provide: m,
    inject: d,
    created: b,
    beforeMount: x,
    mounted: A,
    beforeUpdate: j,
    updated: y,
    activated: T,
    deactivated: k,
    beforeDestroy: W,
    beforeUnmount: te,
    destroyed: se,
    unmounted: he,
    render: B,
    renderTracked: Ee,
    renderTriggered: pe,
    errorCaptured: I,
    serverPrefetch: M,
    expose: Z,
    inheritAttrs: Y,
    components: ce,
    directives: be,
    filters: de,
  } = t;
  if ((d && ml(d, s, null), o))
    for (const X in o) {
      const ae = o[X];
      le(ae) && (s[X] = ae.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    Oe(X) && (e.data = nr(X));
  }
  if (((Fs = !0), a))
    for (const X in a) {
      const ae = a[X],
        Ae = le(ae) ? ae.bind(n, n) : le(ae.get) ? ae.get.bind(n, n) : at,
        me = !le(ae) && le(ae.set) ? ae.set.bind(n) : at,
        Ce = rt({ get: Ae, set: me });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (Ve) => (Ce.value = Ve),
      });
    }
  if (l) for (const X in l) $a(l[X], s, n, X);
  if (m) {
    const X = le(m) ? m.call(n) : m;
    Reflect.ownKeys(X).forEach((ae) => {
      vl(ae, X[ae]);
    });
  }
  b && Br(b, e, "c");
  function ee(X, ae) {
    Q(ae) ? ae.forEach((Ae) => X(Ae.bind(n))) : ae && X(ae.bind(n));
  }
  if (
    (ee(nl, x),
    ee(Wa, A),
    ee(sl, j),
    ee(rl, y),
    ee(Qo, T),
    ee(el, k),
    ee(ul, I),
    ee(ll, Ee),
    ee(ol, pe),
    ee(al, te),
    ee(or, he),
    ee(il, M),
    Q(Z))
  )
    if (Z.length) {
      const X = e.exposed || (e.exposed = {});
      Z.forEach((ae) => {
        Object.defineProperty(X, ae, {
          get: () => n[ae],
          set: (Ae) => (n[ae] = Ae),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === at && (e.render = B),
    Y != null && (e.inheritAttrs = Y),
    ce && (e.components = ce),
    be && (e.directives = be);
}
function ml(e, t, n = at) {
  Q(e) && (e = Ds(e));
  for (const s in e) {
    const r = e[s];
    let a;
    Oe(r)
      ? "default" in r
        ? (a = Fn(r.from || s, r.default, !0))
        : (a = Fn(r.from || s))
      : (a = Fn(r)),
      Qe(a)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (o) => (a.value = o),
          })
        : (t[s] = a);
  }
}
function Br(e, t, n) {
  ot(Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $a(e, t, n, s) {
  const r = s.includes(".") ? Ba(n, s) : () => n[s];
  if (Ue(e)) {
    const a = t[e];
    le(a) && We(r, a);
  } else if (le(e)) We(r, e.bind(n));
  else if (Oe(e))
    if (Q(e)) e.forEach((a) => $a(a, t, n, s));
    else {
      const a = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(a) && We(r, a, e);
    }
}
function lr(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: a,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = a.get(t);
  let m;
  return (
    l
      ? (m = l)
      : !r.length && !n && !s
      ? (m = t)
      : ((m = {}), r.length && r.forEach((d) => Gn(m, d, o, !0)), Gn(m, t, o)),
    Oe(t) && a.set(t, m),
    m
  );
}
function Gn(e, t, n, s = !1) {
  const { mixins: r, extends: a } = t;
  a && Gn(e, a, n, !0), r && r.forEach((o) => Gn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = dl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const dl = {
  data: Gr,
  props: Yr,
  emits: Yr,
  methods: dn,
  computed: dn,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: dn,
  directives: dn,
  watch: gl,
  provide: Gr,
  inject: hl,
};
function Gr(e, t) {
  return t
    ? e
      ? function () {
          return Ye(
            le(e) ? e.call(this, this) : e,
            le(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function hl(e, t) {
  return dn(Ds(e), Ds(t));
}
function Ds(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function dn(e, t) {
  return e ? Ye(Object.create(null), e, t) : t;
}
function Yr(e, t) {
  return e
    ? Q(e) && Q(t)
      ? [...new Set([...e, ...t])]
      : Ye(Object.create(null), Kr(e), Kr(t ?? {}))
    : t;
}
function gl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ye(Object.create(null), e);
  for (const s in t) n[s] = Xe(e[s], t[s]);
  return n;
}
function Xa() {
  return {
    app: null,
    config: {
      isNativeTag: Ki,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let pl = 0;
function bl(e, t) {
  return function (s, r = null) {
    le(s) || (s = Ye({}, s)), r != null && !Oe(r) && (r = null);
    const a = Xa(),
      o = new WeakSet();
    let l = !1;
    const m = (a.app = {
      _uid: pl++,
      _component: s,
      _props: r,
      _container: null,
      _context: a,
      _instance: null,
      version: Ul,
      get config() {
        return a.config;
      },
      set config(d) {},
      use(d, ...b) {
        return (
          o.has(d) ||
            (d && le(d.install)
              ? (o.add(d), d.install(m, ...b))
              : le(d) && (o.add(d), d(m, ...b))),
          m
        );
      },
      mixin(d) {
        return a.mixins.includes(d) || a.mixins.push(d), m;
      },
      component(d, b) {
        return b ? ((a.components[d] = b), m) : a.components[d];
      },
      directive(d, b) {
        return b ? ((a.directives[d] = b), m) : a.directives[d];
      },
      mount(d, b, x) {
        if (!l) {
          const A = Ge(s, r);
          return (
            (A.appContext = a),
            x === !0 ? (x = "svg") : x === !1 && (x = void 0),
            b && t ? t(A, d) : e(A, d, x),
            (l = !0),
            (m._container = d),
            (d.__vue_app__ = m),
            ls(A.component) || A.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, m._container), delete m._container.__vue_app__);
      },
      provide(d, b) {
        return (a.provides[d] = b), m;
      },
      runWithContext(d) {
        Yn = m;
        try {
          return d();
        } finally {
          Yn = null;
        }
      },
    });
    return m;
  };
}
let Yn = null;
function vl(e, t) {
  if (Je) {
    let n = Je.provides;
    const s = Je.parent && Je.parent.provides;
    s === n && (n = Je.provides = Object.create(s)), (n[e] = t);
  }
}
function Fn(e, t, n = !1) {
  const s = Je || Ze;
  if (s || Yn) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Yn._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && le(t) ? t.call(s && s.proxy) : t;
  }
}
function xl(e, t, n, s = !1) {
  const r = {},
    a = {};
  Un(a, is, 1), (e.propsDefaults = Object.create(null)), Qa(e, t, r, a);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : Eo(r)) : e.type.props ? (e.props = r) : (e.props = a),
    (e.attrs = a);
}
function Al(e, t, n, s) {
  const {
      props: r,
      attrs: a,
      vnode: { patchFlag: o },
    } = e,
    l = xe(r),
    [m] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const b = e.vnode.dynamicProps;
      for (let x = 0; x < b.length; x++) {
        let A = b[x];
        if (ss(e.emitsOptions, A)) continue;
        const j = t[A];
        if (m)
          if (ge(a, A)) j !== a[A] && ((a[A] = j), (d = !0));
          else {
            const y = ht(A);
            r[y] = js(m, l, y, j, e, !1);
          }
        else j !== a[A] && ((a[A] = j), (d = !0));
      }
    }
  } else {
    Qa(e, t, r, a) && (d = !0);
    let b;
    for (const x in l)
      (!t || (!ge(t, x) && ((b = Yt(x)) === x || !ge(t, b)))) &&
        (m
          ? n &&
            (n[x] !== void 0 || n[b] !== void 0) &&
            (r[x] = js(m, l, x, void 0, e, !0))
          : delete r[x]);
    if (a !== l)
      for (const x in a) (!t || !ge(t, x)) && (delete a[x], (d = !0));
  }
  d && _t(e, "set", "$attrs");
}
function Qa(e, t, n, s) {
  const [r, a] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let m in t) {
      if (Rn(m)) continue;
      const d = t[m];
      let b;
      r && ge(r, (b = ht(m)))
        ? !a || !a.includes(b)
          ? (n[b] = d)
          : ((l || (l = {}))[b] = d)
        : ss(e.emitsOptions, m) ||
          ((!(m in s) || d !== s[m]) && ((s[m] = d), (o = !0)));
    }
  if (a) {
    const m = xe(n),
      d = l || Pe;
    for (let b = 0; b < a.length; b++) {
      const x = a[b];
      n[x] = js(r, m, x, d[x], e, !ge(d, x));
    }
  }
  return o;
}
function js(e, t, n, s, r, a) {
  const o = e[n];
  if (o != null) {
    const l = ge(o, "default");
    if (l && s === void 0) {
      const m = o.default;
      if (o.type !== Function && !o.skipFactory && le(m)) {
        const { propsDefaults: d } = r;
        n in d ? (s = d[n]) : (an(r), (s = d[n] = m.call(null, t)), Gt());
      } else s = m;
    }
    o[0] &&
      (a && !l ? (s = !1) : o[1] && (s === "" || s === Yt(n)) && (s = !0));
  }
  return s;
}
function ei(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const a = e.props,
    o = {},
    l = [];
  let m = !1;
  if (!le(e)) {
    const b = (x) => {
      m = !0;
      const [A, j] = ei(x, t, !0);
      Ye(o, A), j && l.push(...j);
    };
    !n && t.mixins.length && t.mixins.forEach(b),
      e.extends && b(e.extends),
      e.mixins && e.mixins.forEach(b);
  }
  if (!a && !m) return Oe(e) && s.set(e, Qt), Qt;
  if (Q(a))
    for (let b = 0; b < a.length; b++) {
      const x = ht(a[b]);
      Wr(x) && (o[x] = Pe);
    }
  else if (a)
    for (const b in a) {
      const x = ht(b);
      if (Wr(x)) {
        const A = a[b],
          j = (o[x] = Q(A) || le(A) ? { type: A } : Ye({}, A));
        if (j) {
          const y = Zr(Boolean, j.type),
            T = Zr(String, j.type);
          (j[0] = y > -1),
            (j[1] = T < 0 || y < T),
            (y > -1 || ge(j, "default")) && l.push(x);
        }
      }
    }
  const d = [o, l];
  return Oe(e) && s.set(e, d), d;
}
function Wr(e) {
  return e[0] !== "$";
}
function qr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Jr(e, t) {
  return qr(e) === qr(t);
}
function Zr(e, t) {
  return Q(t) ? t.findIndex((n) => Jr(n, e)) : le(t) && Jr(t, e) ? 0 : -1;
}
const ti = (e) => e[0] === "_" || e === "$stable",
  ur = (e) => (Q(e) ? e.map(ft) : [ft(e)]),
  yl = (e, t, n) => {
    if (t._n) return t;
    const s = jo((...r) => ur(t(...r)), n);
    return (s._c = !1), s;
  },
  ni = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ti(r)) continue;
      const a = e[r];
      if (le(a)) t[r] = yl(r, a, s);
      else if (a != null) {
        const o = ur(a);
        t[r] = () => o;
      }
    }
  },
  si = (e, t) => {
    const n = ur(t);
    e.slots.default = () => n;
  },
  Sl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = xe(t)), Un(t, "_", n)) : ni(t, (e.slots = {}));
    } else (e.slots = {}), t && si(e, t);
    Un(e.slots, is, 1);
  },
  _l = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let a = !0,
      o = Pe;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (a = !1)
          : (Ye(r, t), !n && l === 1 && delete r._)
        : ((a = !t.$stable), ni(t, r)),
        (o = t);
    } else t && (si(e, t), (o = { default: 1 }));
    if (a) for (const l in r) !ti(l) && o[l] == null && delete r[l];
  };
function Us(e, t, n, s, r = !1) {
  if (Q(e)) {
    e.forEach((A, j) => Us(A, t && (Q(t) ? t[j] : t), n, s, r));
    return;
  }
  if (hn(s) && !r) return;
  const a = s.shapeFlag & 4 ? ls(s.component) || s.component.proxy : s.el,
    o = r ? null : a,
    { i: l, r: m } = e,
    d = t && t.r,
    b = l.refs === Pe ? (l.refs = {}) : l.refs,
    x = l.setupState;
  if (
    (d != null &&
      d !== m &&
      (Ue(d)
        ? ((b[d] = null), ge(x, d) && (x[d] = null))
        : Qe(d) && (d.value = null)),
    le(m))
  )
    It(m, l, 12, [o, b]);
  else {
    const A = Ue(m),
      j = Qe(m);
    if (A || j) {
      const y = () => {
        if (e.f) {
          const T = A ? (ge(x, m) ? x[m] : b[m]) : m.value;
          r
            ? Q(T) && Js(T, a)
            : Q(T)
            ? T.includes(a) || T.push(a)
            : A
            ? ((b[m] = [a]), ge(x, m) && (x[m] = b[m]))
            : ((m.value = [a]), e.k && (b[e.k] = m.value));
        } else
          A
            ? ((b[m] = o), ge(x, m) && (x[m] = o))
            : j && ((m.value = o), e.k && (b[e.k] = o));
      };
      o ? ((y.id = -1), tt(y, n)) : y();
    }
  }
}
const tt = qo;
function wl(e) {
  return El(e);
}
function El(e, t) {
  const n = pa();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: a,
      createElement: o,
      createText: l,
      createComment: m,
      setText: d,
      setElementText: b,
      parentNode: x,
      nextSibling: A,
      setScopeId: j = at,
      insertStaticContent: y,
    } = e,
    T = (
      c,
      h,
      v,
      S = null,
      _ = null,
      O = null,
      F = void 0,
      P = null,
      L = !!h.dynamicChildren
    ) => {
      if (c === h) return;
      c && !fn(c, h) && ((S = _e(c)), Ve(c, _, O, !0), (c = null)),
        h.patchFlag === -2 && ((L = !1), (h.dynamicChildren = null));
      const { type: N, ref: U, shapeFlag: $ } = h;
      switch (N) {
        case as:
          k(c, h, v, S);
          break;
        case Vt:
          W(c, h, v, S);
          break;
        case Ms:
          c == null && te(h, v, S, F);
          break;
        case nt:
          ce(c, h, v, S, _, O, F, P, L);
          break;
        default:
          $ & 1
            ? B(c, h, v, S, _, O, F, P, L)
            : $ & 6
            ? be(c, h, v, S, _, O, F, P, L)
            : ($ & 64 || $ & 128) && N.process(c, h, v, S, _, O, F, P, L, Et);
      }
      U != null && _ && Us(U, c && c.ref, O, h || c, !h);
    },
    k = (c, h, v, S) => {
      if (c == null) s((h.el = l(h.children)), v, S);
      else {
        const _ = (h.el = c.el);
        h.children !== c.children && d(_, h.children);
      }
    },
    W = (c, h, v, S) => {
      c == null ? s((h.el = m(h.children || "")), v, S) : (h.el = c.el);
    },
    te = (c, h, v, S) => {
      [c.el, c.anchor] = y(c.children, h, v, S, c.el, c.anchor);
    },
    se = ({ el: c, anchor: h }, v, S) => {
      let _;
      for (; c && c !== h; ) (_ = A(c)), s(c, v, S), (c = _);
      s(h, v, S);
    },
    he = ({ el: c, anchor: h }) => {
      let v;
      for (; c && c !== h; ) (v = A(c)), r(c), (c = v);
      r(h);
    },
    B = (c, h, v, S, _, O, F, P, L) => {
      h.type === "svg" ? (F = "svg") : h.type === "math" && (F = "mathml"),
        c == null ? Ee(h, v, S, _, O, F, P, L) : M(c, h, _, O, F, P, L);
    },
    Ee = (c, h, v, S, _, O, F, P) => {
      let L, N;
      const { props: U, shapeFlag: $, transition: q, dirs: ne } = c;
      if (
        ((L = c.el = o(c.type, O, U && U.is, U)),
        $ & 8
          ? b(L, c.children)
          : $ & 16 && I(c.children, L, null, S, _, Ns(c, O), F, P),
        ne && Ft(c, null, S, "created"),
        pe(L, c, c.scopeId, F, S),
        U)
      ) {
        for (const ye in U)
          ye !== "value" &&
            !Rn(ye) &&
            a(L, ye, null, U[ye], O, c.children, S, _, G);
        "value" in U && a(L, "value", null, U.value, O),
          (N = U.onVnodeBeforeMount) && ut(N, S, c);
      }
      ne && Ft(c, null, S, "beforeMount");
      const fe = Nl(_, q);
      fe && q.beforeEnter(L),
        s(L, h, v),
        ((N = U && U.onVnodeMounted) || fe || ne) &&
          tt(() => {
            N && ut(N, S, c), fe && q.enter(L), ne && Ft(c, null, S, "mounted");
          }, _);
    },
    pe = (c, h, v, S, _) => {
      if ((v && j(c, v), S)) for (let O = 0; O < S.length; O++) j(c, S[O]);
      if (_) {
        let O = _.subTree;
        if (h === O) {
          const F = _.vnode;
          pe(c, F, F.scopeId, F.slotScopeIds, _.parent);
        }
      }
    },
    I = (c, h, v, S, _, O, F, P, L = 0) => {
      for (let N = L; N < c.length; N++) {
        const U = (c[N] = P ? Ct(c[N]) : ft(c[N]));
        T(null, U, h, v, S, _, O, F, P);
      }
    },
    M = (c, h, v, S, _, O, F) => {
      const P = (h.el = c.el);
      let { patchFlag: L, dynamicChildren: N, dirs: U } = h;
      L |= c.patchFlag & 16;
      const $ = c.props || Pe,
        q = h.props || Pe;
      let ne;
      if (
        (v && Dt(v, !1),
        (ne = q.onVnodeBeforeUpdate) && ut(ne, v, h, c),
        U && Ft(h, c, v, "beforeUpdate"),
        v && Dt(v, !0),
        N
          ? Z(c.dynamicChildren, N, P, v, S, Ns(h, _), O)
          : F || ae(c, h, P, null, v, S, Ns(h, _), O, !1),
        L > 0)
      ) {
        if (L & 16) Y(P, h, $, q, v, S, _);
        else if (
          (L & 2 && $.class !== q.class && a(P, "class", null, q.class, _),
          L & 4 && a(P, "style", $.style, q.style, _),
          L & 8)
        ) {
          const fe = h.dynamicProps;
          for (let ye = 0; ye < fe.length; ye++) {
            const Ne = fe[ye],
              u = $[Ne],
              i = q[Ne];
            (i !== u || Ne === "value") &&
              a(P, Ne, u, i, _, c.children, v, S, G);
          }
        }
        L & 1 && c.children !== h.children && b(P, h.children);
      } else !F && N == null && Y(P, h, $, q, v, S, _);
      ((ne = q.onVnodeUpdated) || U) &&
        tt(() => {
          ne && ut(ne, v, h, c), U && Ft(h, c, v, "updated");
        }, S);
    },
    Z = (c, h, v, S, _, O, F) => {
      for (let P = 0; P < h.length; P++) {
        const L = c[P],
          N = h[P],
          U =
            L.el && (L.type === nt || !fn(L, N) || L.shapeFlag & 70)
              ? x(L.el)
              : v;
        T(L, N, U, null, S, _, O, F, !0);
      }
    },
    Y = (c, h, v, S, _, O, F) => {
      if (v !== S) {
        if (v !== Pe)
          for (const P in v)
            !Rn(P) && !(P in S) && a(c, P, v[P], null, F, h.children, _, O, G);
        for (const P in S) {
          if (Rn(P)) continue;
          const L = S[P],
            N = v[P];
          L !== N && P !== "value" && a(c, P, N, L, F, h.children, _, O, G);
        }
        "value" in S && a(c, "value", v.value, S.value, F);
      }
    },
    ce = (c, h, v, S, _, O, F, P, L) => {
      const N = (h.el = c ? c.el : l("")),
        U = (h.anchor = c ? c.anchor : l(""));
      let { patchFlag: $, dynamicChildren: q, slotScopeIds: ne } = h;
      ne && (P = P ? P.concat(ne) : ne),
        c == null
          ? (s(N, v, S), s(U, v, S), I(h.children, v, U, _, O, F, P, L))
          : $ > 0 && $ & 64 && q && c.dynamicChildren
          ? (Z(c.dynamicChildren, q, v, _, O, F, P),
            (h.key != null || (_ && h === _.subTree)) && ri(c, h, !0))
          : ae(c, h, v, U, _, O, F, P, L);
    },
    be = (c, h, v, S, _, O, F, P, L) => {
      (h.slotScopeIds = P),
        c == null
          ? h.shapeFlag & 512
            ? _.ctx.activate(h, v, S, F, L)
            : de(h, v, S, _, O, F, L)
          : R(c, h, L);
    },
    de = (c, h, v, S, _, O, F) => {
      const P = (c.component = Ll(c, S, _));
      if ((Ga(c) && (P.ctx.renderer = Et), Vl(P), P.asyncDep)) {
        if ((_ && _.registerDep(P, ee), !c.el)) {
          const L = (P.subTree = Ge(Vt));
          W(null, L, h, v);
        }
      } else ee(P, c, h, v, _, O, F);
    },
    R = (c, h, v) => {
      const S = (h.component = c.component);
      if (Ko(c, h, v))
        if (S.asyncDep && !S.asyncResolved) {
          X(S, h, v);
          return;
        } else (S.next = h), Ro(S.update), (S.effect.dirty = !0), S.update();
      else (h.el = c.el), (S.vnode = h);
    },
    ee = (c, h, v, S, _, O, F) => {
      const P = () => {
          if (c.isMounted) {
            let { next: U, bu: $, u: q, parent: ne, vnode: fe } = c;
            {
              const C = ai(c);
              if (C) {
                U && ((U.el = fe.el), X(c, U, F)),
                  C.asyncDep.then(() => {
                    c.isUnmounted || P();
                  });
                return;
              }
            }
            let ye = U,
              Ne;
            Dt(c, !1),
              U ? ((U.el = fe.el), X(c, U, F)) : (U = fe),
              $ && Hn($),
              (Ne = U.props && U.props.onVnodeBeforeUpdate) &&
                ut(Ne, ne, U, fe),
              Dt(c, !0);
            const u = _s(c),
              i = c.subTree;
            (c.subTree = u),
              T(i, u, x(i.el), _e(i), c, _, O),
              (U.el = u.el),
              ye === null && Bo(c, u.el),
              q && tt(q, _),
              (Ne = U.props && U.props.onVnodeUpdated) &&
                tt(() => ut(Ne, ne, U, fe), _);
          } else {
            let U;
            const { el: $, props: q } = h,
              { bm: ne, m: fe, parent: ye } = c,
              Ne = hn(h);
            if (
              (Dt(c, !1),
              ne && Hn(ne),
              !Ne && (U = q && q.onVnodeBeforeMount) && ut(U, ye, h),
              Dt(c, !0),
              $ && un)
            ) {
              const u = () => {
                (c.subTree = _s(c)), un($, c.subTree, c, _, null);
              };
              Ne
                ? h.type.__asyncLoader().then(() => !c.isUnmounted && u())
                : u();
            } else {
              const u = (c.subTree = _s(c));
              T(null, u, v, S, c, _, O), (h.el = u.el);
            }
            if ((fe && tt(fe, _), !Ne && (U = q && q.onVnodeMounted))) {
              const u = h;
              tt(() => ut(U, ye, u), _);
            }
            (h.shapeFlag & 256 ||
              (ye && hn(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              c.a &&
              tt(c.a, _),
              (c.isMounted = !0),
              (h = v = S = null);
          }
        },
        L = (c.effect = new $s(P, at, () => ir(N), c.scope)),
        N = (c.update = () => {
          L.dirty && L.run();
        });
      (N.id = c.uid), Dt(c, !0), N();
    },
    X = (c, h, v) => {
      h.component = c;
      const S = c.vnode.props;
      (c.vnode = h),
        (c.next = null),
        Al(c, h.props, S, v),
        _l(c, h.children, v),
        Wt(),
        jr(c),
        qt();
    },
    ae = (c, h, v, S, _, O, F, P, L = !1) => {
      const N = c && c.children,
        U = c ? c.shapeFlag : 0,
        $ = h.children,
        { patchFlag: q, shapeFlag: ne } = h;
      if (q > 0) {
        if (q & 128) {
          me(N, $, v, S, _, O, F, P, L);
          return;
        } else if (q & 256) {
          Ae(N, $, v, S, _, O, F, P, L);
          return;
        }
      }
      ne & 8
        ? (U & 16 && G(N, _, O), $ !== N && b(v, $))
        : U & 16
        ? ne & 16
          ? me(N, $, v, S, _, O, F, P, L)
          : G(N, _, O, !0)
        : (U & 8 && b(v, ""), ne & 16 && I($, v, S, _, O, F, P, L));
    },
    Ae = (c, h, v, S, _, O, F, P, L) => {
      (c = c || Qt), (h = h || Qt);
      const N = c.length,
        U = h.length,
        $ = Math.min(N, U);
      let q;
      for (q = 0; q < $; q++) {
        const ne = (h[q] = L ? Ct(h[q]) : ft(h[q]));
        T(c[q], ne, v, null, _, O, F, P, L);
      }
      N > U ? G(c, _, O, !0, !1, $) : I(h, v, S, _, O, F, P, L, $);
    },
    me = (c, h, v, S, _, O, F, P, L) => {
      let N = 0;
      const U = h.length;
      let $ = c.length - 1,
        q = U - 1;
      for (; N <= $ && N <= q; ) {
        const ne = c[N],
          fe = (h[N] = L ? Ct(h[N]) : ft(h[N]));
        if (fn(ne, fe)) T(ne, fe, v, null, _, O, F, P, L);
        else break;
        N++;
      }
      for (; N <= $ && N <= q; ) {
        const ne = c[$],
          fe = (h[q] = L ? Ct(h[q]) : ft(h[q]));
        if (fn(ne, fe)) T(ne, fe, v, null, _, O, F, P, L);
        else break;
        $--, q--;
      }
      if (N > $) {
        if (N <= q) {
          const ne = q + 1,
            fe = ne < U ? h[ne].el : S;
          for (; N <= q; )
            T(null, (h[N] = L ? Ct(h[N]) : ft(h[N])), v, fe, _, O, F, P, L),
              N++;
        }
      } else if (N > q) for (; N <= $; ) Ve(c[N], _, O, !0), N++;
      else {
        const ne = N,
          fe = N,
          ye = new Map();
        for (N = fe; N <= q; N++) {
          const ie = (h[N] = L ? Ct(h[N]) : ft(h[N]));
          ie.key != null && ye.set(ie.key, N);
        }
        let Ne,
          u = 0;
        const i = q - fe + 1;
        let C = !1,
          K = 0;
        const V = new Array(i);
        for (N = 0; N < i; N++) V[N] = 0;
        for (N = ne; N <= $; N++) {
          const ie = c[N];
          if (u >= i) {
            Ve(ie, _, O, !0);
            continue;
          }
          let ve;
          if (ie.key != null) ve = ye.get(ie.key);
          else
            for (Ne = fe; Ne <= q; Ne++)
              if (V[Ne - fe] === 0 && fn(ie, h[Ne])) {
                ve = Ne;
                break;
              }
          ve === void 0
            ? Ve(ie, _, O, !0)
            : ((V[ve - fe] = N + 1),
              ve >= K ? (K = ve) : (C = !0),
              T(ie, h[ve], v, null, _, O, F, P, L),
              u++);
        }
        const J = C ? Ml(V) : Qt;
        for (Ne = J.length - 1, N = i - 1; N >= 0; N--) {
          const ie = fe + N,
            ve = h[ie],
            Te = ie + 1 < U ? h[ie + 1].el : S;
          V[N] === 0
            ? T(null, ve, v, Te, _, O, F, P, L)
            : C && (Ne < 0 || N !== J[Ne] ? Ce(ve, v, Te, 2) : Ne--);
        }
      }
    },
    Ce = (c, h, v, S, _ = null) => {
      const { el: O, type: F, transition: P, children: L, shapeFlag: N } = c;
      if (N & 6) {
        Ce(c.component.subTree, h, v, S);
        return;
      }
      if (N & 128) {
        c.suspense.move(h, v, S);
        return;
      }
      if (N & 64) {
        F.move(c, h, v, Et);
        return;
      }
      if (F === nt) {
        s(O, h, v);
        for (let $ = 0; $ < L.length; $++) Ce(L[$], h, v, S);
        s(c.anchor, h, v);
        return;
      }
      if (F === Ms) {
        se(c, h, v);
        return;
      }
      if (S !== 2 && N & 1 && P)
        if (S === 0) P.beforeEnter(O), s(O, h, v), tt(() => P.enter(O), _);
        else {
          const { leave: $, delayLeave: q, afterLeave: ne } = P,
            fe = () => s(O, h, v),
            ye = () => {
              $(O, () => {
                fe(), ne && ne();
              });
            };
          q ? q(O, fe, ye) : ye();
        }
      else s(O, h, v);
    },
    Ve = (c, h, v, S = !1, _ = !1) => {
      const {
        type: O,
        props: F,
        ref: P,
        children: L,
        dynamicChildren: N,
        shapeFlag: U,
        patchFlag: $,
        dirs: q,
      } = c;
      if ((P != null && Us(P, null, v, c, !0), U & 256)) {
        h.ctx.deactivate(c);
        return;
      }
      const ne = U & 1 && q,
        fe = !hn(c);
      let ye;
      if ((fe && (ye = F && F.onVnodeBeforeUnmount) && ut(ye, h, c), U & 6))
        De(c.component, v, S);
      else {
        if (U & 128) {
          c.suspense.unmount(v, S);
          return;
        }
        ne && Ft(c, null, h, "beforeUnmount"),
          U & 64
            ? c.type.remove(c, h, v, _, Et, S)
            : N && (O !== nt || ($ > 0 && $ & 64))
            ? G(N, h, v, !1, !0)
            : ((O === nt && $ & 384) || (!_ && U & 16)) && G(L, h, v),
          S && lt(c);
      }
      ((fe && (ye = F && F.onVnodeUnmounted)) || ne) &&
        tt(() => {
          ye && ut(ye, h, c), ne && Ft(c, null, h, "unmounted");
        }, v);
    },
    lt = (c) => {
      const { type: h, el: v, anchor: S, transition: _ } = c;
      if (h === nt) {
        gt(v, S);
        return;
      }
      if (h === Ms) {
        he(c);
        return;
      }
      const O = () => {
        r(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (c.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: F, delayLeave: P } = _,
          L = () => F(v, O);
        P ? P(c.el, O, L) : L();
      } else O();
    },
    gt = (c, h) => {
      let v;
      for (; c !== h; ) (v = A(c)), r(c), (c = v);
      r(h);
    },
    De = (c, h, v) => {
      const { bum: S, scope: _, update: O, subTree: F, um: P } = c;
      S && Hn(S),
        _.stop(),
        O && ((O.active = !1), Ve(F, c, h, v)),
        P && tt(P, h),
        tt(() => {
          c.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    G = (c, h, v, S = !1, _ = !1, O = 0) => {
      for (let F = O; F < c.length; F++) Ve(c[F], h, v, S, _);
    },
    _e = (c) =>
      c.shapeFlag & 6
        ? _e(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : A(c.anchor || c.el),
    on = (c, h, v) => {
      c == null
        ? h._vnode && Ve(h._vnode, null, null, !0)
        : T(h._vnode || null, c, h, null, null, null, v),
        jr(),
        Fa(),
        (h._vnode = c);
    },
    Et = {
      p: T,
      um: Ve,
      m: Ce,
      r: lt,
      mt: de,
      mc: I,
      pc: ae,
      pbc: Z,
      n: _e,
      o: e,
    };
  let ln, un;
  return (
    t && ([ln, un] = t(Et)), { render: on, hydrate: ln, createApp: bl(on, ln) }
  );
}
function Ns({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Dt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ri(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (Q(s) && Q(r))
    for (let a = 0; a < s.length; a++) {
      const o = s[a];
      let l = r[a];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[a] = Ct(r[a])), (l.el = o.el)),
        n || ri(o, l)),
        l.type === as && (l.el = o.el);
    }
}
function Ml(e) {
  const t = e.slice(),
    n = [0];
  let s, r, a, o, l;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; )
        (l = (a + o) >> 1), e[n[l]] < d ? (a = l + 1) : (o = l);
      d < e[n[a]] && (a > 0 && (t[s] = n[a - 1]), (n[a] = s));
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) (n[a] = o), (o = t[o]);
  return n;
}
function ai(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ai(t);
}
const Cl = (e) => e.__isTeleport,
  nt = Symbol.for("v-fgt"),
  as = Symbol.for("v-txt"),
  Vt = Symbol.for("v-cmt"),
  Ms = Symbol.for("v-stc"),
  pn = [];
let it = null;
function je(e = !1) {
  pn.push((it = e ? null : []));
}
function Tl() {
  pn.pop(), (it = pn[pn.length - 1] || null);
}
let yn = 1;
function $r(e) {
  yn += e;
}
function ii(e) {
  return (
    (e.dynamicChildren = yn > 0 ? it || Qt : null),
    Tl(),
    yn > 0 && it && it.push(e),
    e
  );
}
function Be(e, t, n, s, r, a) {
  return ii(E(e, t, n, s, r, a, !0));
}
function oi(e, t, n, s, r) {
  return ii(Ge(e, t, n, s, r, !0));
}
function li(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const is = "__vInternal",
  ui = ({ key: e }) => e ?? null,
  Dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Ue(e) || Qe(e) || le(e)
        ? { i: Ze, r: e, k: t, f: !!n }
        : e
      : null
  );
function E(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  a = e === nt ? 0 : 1,
  o = !1,
  l = !1
) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ui(t),
    ref: t && Dn(t),
    scopeId: Ua,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ze,
  };
  return (
    l
      ? (cr(m, n), a & 128 && e.normalize(m))
      : n && (m.shapeFlag |= Ue(n) ? 8 : 16),
    yn > 0 &&
      !o &&
      it &&
      (m.patchFlag > 0 || a & 6) &&
      m.patchFlag !== 32 &&
      it.push(m),
    m
  );
}
const Ge = Pl;
function Pl(e, t = null, n = null, s = 0, r = null, a = !1) {
  if (((!e || e === Go) && (e = Vt), li(e))) {
    const l = rn(e, t, !0);
    return (
      n && cr(l, n),
      yn > 0 &&
        !a &&
        it &&
        (l.shapeFlag & 6 ? (it[it.indexOf(e)] = l) : it.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((jl(e) && (e = e.__vccOpts), t)) {
    t = Ol(t);
    let { class: l, style: m } = t;
    l && !Ue(l) && (t.class = dt(l)),
      Oe(m) && (Oa(m) && !Q(m) && (m = Ye({}, m)), (t.style = Qn(m)));
  }
  const o = Ue(e) ? 1 : Wo(e) ? 128 : Cl(e) ? 64 : Oe(e) ? 4 : le(e) ? 2 : 0;
  return E(e, t, n, s, r, o, a, !0);
}
function Ol(e) {
  return e ? (Oa(e) || is in e ? Ye({}, e) : e) : null;
}
function rn(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: a, children: o } = e,
    l = t ? fr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ui(l),
    ref:
      t && t.ref ? (n && r ? (Q(r) ? r.concat(Dn(t)) : [r, Dn(t)]) : Dn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== nt ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ci(e = " ", t = 0) {
  return Ge(as, null, e, t);
}
function Mt(e = "", t = !1) {
  return t ? (je(), oi(Vt, null, e)) : Ge(Vt, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean"
    ? Ge(Vt)
    : Q(e)
    ? Ge(nt, null, e.slice())
    : typeof e == "object"
    ? Ct(e)
    : Ge(as, null, String(e));
}
function Ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rn(e);
}
function cr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (Q(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), cr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(is in t)
        ? (t._ctx = Ze)
        : r === 3 &&
          Ze &&
          (Ze.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    le(t)
      ? ((t = { default: t, _ctx: Ze }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ci(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function fr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = dt([t.class, s.class]));
      else if (r === "style") t.style = Qn([t.style, s.style]);
      else if (Jn(r)) {
        const a = t[r],
          o = s[r];
        o &&
          a !== o &&
          !(Q(a) && a.includes(o)) &&
          (t[r] = a ? [].concat(a, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ut(e, t, n, s = null) {
  ot(e, t, 7, [n, s]);
}
const Il = Xa();
let kl = 0;
function Ll(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Il,
    a = {
      uid: kl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new no(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ei(s, r),
      emitsOptions: ja(s, r),
      emit: null,
      emitted: null,
      propsDefaults: Pe,
      inheritAttrs: s.inheritAttrs,
      ctx: Pe,
      data: Pe,
      props: Pe,
      attrs: Pe,
      slots: Pe,
      refs: Pe,
      setupState: Pe,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (a.ctx = { _: a }),
    (a.root = t ? t.root : a),
    (a.emit = Do.bind(null, a)),
    e.ce && e.ce(a),
    a
  );
}
let Je = null,
  mr,
  zs;
{
  const e = pa(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (a) => {
          r.length > 1 ? r.forEach((o) => o(a)) : r[0](a);
        }
      );
    };
  (mr = t("__VUE_INSTANCE_SETTERS__", (n) => (Je = n))),
    (zs = t("__VUE_SSR_SETTERS__", (n) => (os = n)));
}
const an = (e) => {
    mr(e), e.scope.on();
  },
  Gt = () => {
    Je && Je.scope.off(), mr(null);
  };
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let os = !1;
function Vl(e, t = !1) {
  t && zs(t);
  const { props: n, children: s } = e.vnode,
    r = fi(e);
  xl(e, n, r, t), Sl(e, s);
  const a = r ? Rl(e, t) : void 0;
  return t && zs(!1), a;
}
function Rl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Ia(new Proxy(e.ctx, cl)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Fl(e) : null);
    an(e), Wt();
    const a = It(s, e, 0, [e.props, r]);
    if ((qt(), Gt(), ma(a))) {
      if ((a.then(Gt, Gt), t))
        return a
          .then((o) => {
            Xr(e, o, t);
          })
          .catch((o) => {
            ns(o, e, 0);
          });
      e.asyncDep = a;
    } else Xr(e, a, t);
  } else mi(e, t);
}
function Xr(e, t, n) {
  le(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Oe(t) && (e.setupState = Va(t)),
    mi(e, n);
}
let Qr;
function mi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Qr && !s.render) {
      const r = s.template || lr(e).template;
      if (r) {
        const { isCustomElement: a, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: m } = s,
          d = Ye(Ye({ isCustomElement: a, delimiters: l }, o), m);
        s.render = Qr(r, d);
      }
    }
    e.render = s.render || at;
  }
  {
    an(e), Wt();
    try {
      fl(e);
    } finally {
      qt(), Gt();
    }
  }
}
function Hl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return st(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Fl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Hl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ls(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Va(Ia(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in gn) return gn[n](e);
        },
        has(t, n) {
          return n in t || n in gn;
        },
      }))
    );
}
function Dl(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function jl(e) {
  return le(e) && "__vccOpts" in e;
}
const rt = (e, t) => No(e, t, os),
  Ul = "3.4.4",
  zl = "http://www.w3.org/2000/svg",
  Kl = "http://www.w3.org/1998/Math/MathML",
  Tt = typeof document < "u" ? document : null,
  ea = Tt && Tt.createElement("template"),
  Bl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? Tt.createElementNS(zl, e)
          : t === "mathml"
          ? Tt.createElementNS(Kl, e)
          : Tt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Tt.createTextNode(e),
    createComment: (e) => Tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Tt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, a) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === a || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === a || !(r = r.nextSibling));

        );
      else {
        ea.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e;
        const l = ea.content;
        if (s === "svg" || s === "mathml") {
          const m = l.firstChild;
          for (; m.firstChild; ) l.appendChild(m.firstChild);
          l.removeChild(m);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Gl = Symbol("_vtc");
function Yl(e, t, n) {
  const s = e[Gl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const dr = Symbol("_vod"),
  Ks = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[dr] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : mn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), mn(e, !0), s.enter(e))
            : s.leave(e, () => {
                mn(e, !1);
              })
          : mn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      mn(e, t);
    },
  };
function mn(e, t) {
  e.style.display = t ? e[dr] : "none";
}
const Wl = Symbol("");
function ql(e, t, n) {
  const s = e.style,
    r = Ue(n);
  if (n && !r) {
    if (t && !Ue(t)) for (const a in t) n[a] == null && Bs(s, a, "");
    for (const a in n) Bs(s, a, n[a]);
  } else {
    const a = s.display;
    if (r) {
      if (t !== n) {
        const o = s[Wl];
        o && (n += ";" + o), (s.cssText = n);
      }
    } else t && e.removeAttribute("style");
    dr in e && (s.display = a);
  }
}
const ta = /\s*!important$/;
function Bs(e, t, n) {
  if (Q(n)) n.forEach((s) => Bs(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Jl(e, t);
    ta.test(n)
      ? e.setProperty(Yt(s), n.replace(ta, ""), "important")
      : (e[s] = n);
  }
}
const na = ["Webkit", "Moz", "ms"],
  Cs = {};
function Jl(e, t) {
  const n = Cs[t];
  if (n) return n;
  let s = ht(t);
  if (s !== "filter" && s in e) return (Cs[t] = s);
  s = Xn(s);
  for (let r = 0; r < na.length; r++) {
    const a = na[r] + s;
    if (a in e) return (Cs[t] = a);
  }
  return t;
}
const sa = "http://www.w3.org/1999/xlink";
function Zl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(sa, t.slice(6, t.length))
      : e.setAttributeNS(sa, t, n);
  else {
    const a = Qi(t);
    n == null || (a && !ba(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n);
  }
}
function $l(e, t, n, s, r, a, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, a), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = n;
    const d = l === "OPTION" ? e.getAttribute("value") : e.value,
      b = n ?? "";
    d !== b && (e.value = b), n == null && e.removeAttribute(t);
    return;
  }
  let m = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (n = ba(n))
      : n == null && d === "string"
      ? ((n = ""), (m = !0))
      : d === "number" && ((n = 0), (m = !0));
  }
  try {
    e[t] = n;
  } catch {}
  m && e.removeAttribute(t);
}
function di(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Xl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ra = Symbol("_vei");
function Ql(e, t, n, s, r = null) {
  const a = e[ra] || (e[ra] = {}),
    o = a[t];
  if (s && o) o.value = s;
  else {
    const [l, m] = eu(t);
    if (s) {
      const d = (a[t] = su(s, r));
      di(e, l, d, m);
    } else o && (Xl(e, l, o, m), (a[t] = void 0));
  }
}
const aa = /(?:Once|Passive|Capture)$/;
function eu(e) {
  let t;
  if (aa.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(aa)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Yt(e.slice(2)), t];
}
let Ts = 0;
const tu = Promise.resolve(),
  nu = () => Ts || (tu.then(() => (Ts = 0)), (Ts = Date.now()));
function su(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ot(ru(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = nu()), n;
}
function ru(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const ia = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  au = (e, t, n, s, r, a, o, l, m) => {
    const d = r === "svg";
    t === "class"
      ? Yl(e, s, d)
      : t === "style"
      ? ql(e, n, s)
      : Jn(t)
      ? qs(t) || Ql(e, t, n, s, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : iu(e, t, s, d)
        )
      ? $l(e, t, s, a, o, l, m)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Zl(e, t, s, d));
  };
function iu(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ia(t) && le(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ia(t) && Ue(n) ? !1 : t in e;
}
const oa = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Q(t) ? (n) => Hn(t, n) : t;
  },
  Ps = Symbol("_assign"),
  Os = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const r = Zn(t);
      di(e, "change", () => {
        const a = Array.prototype.filter
          .call(e.options, (o) => o.selected)
          .map((o) => (n ? ga(Wn(o)) : Wn(o)));
        e[Ps](e.multiple ? (r ? new Set(a) : a) : a[0]);
      }),
        (e[Ps] = oa(s));
    },
    mounted(e, { value: t }) {
      la(e, t);
    },
    beforeUpdate(e, t, n) {
      e[Ps] = oa(n);
    },
    updated(e, { value: t }) {
      la(e, t);
    },
  };
function la(e, t) {
  const n = e.multiple;
  if (!(n && !Q(t) && !Zn(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const a = e.options[s],
        o = Wn(a);
      if (n) Q(t) ? (a.selected = to(t, o) > -1) : (a.selected = t.has(o));
      else if (es(Wn(a), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Wn(e) {
  return "_value" in e ? e._value : e.value;
}
const ou = ["ctrl", "shift", "alt", "meta"],
  lu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => ou.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Xt = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...a) => {
        for (let o = 0; o < t.length; o++) {
          const l = lu[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...a);
      })
    );
  },
  uu = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  jt = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const a = Yt(r.key);
        if (t.some((o) => o === a || uu[o] === a)) return e(r);
      })
    );
  },
  cu = Ye({ patchProp: au }, Bl);
let ua;
function fu() {
  return ua || (ua = wl(cu));
}
const mu = (...e) => {
  const t = fu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = hu(s);
      if (!r) return;
      const a = t._component;
      !le(a) && !a.render && !a.template && (a.template = r.innerHTML),
        (r.innerHTML = "");
      const o = n(r, !1, du(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function du(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hu(e) {
  return Ue(e) ? document.querySelector(e) : e;
}
const At = {
  openOptions(e) {
    e.$refs.input.focus(), (e.showMenu = !0), (e.mousedownState = !1);
  },
  blurInput(e) {
    e.mousedownState || ((e.searchText = ""), e.closeOptions()),
      e.$emit("blur");
  },
  closeOptions(e) {
    e.$refs.input.blur(), (e.showMenu = !1);
  },
  prevItem(e) {
    const t = e.pointer - 1,
      n = e.$el.offsetHeight * t;
    t >= 0 && (e.pointer = t), (e.$refs.menu.scrollTop = n);
  },
  nextItem(e) {
    const t = e.pointer + 1,
      n = e.$el.offsetHeight * t;
    t <= e.filteredOptions.length - 1 && (e.pointer = t);
    const s = e.$refs.menu.offsetHeight,
      r = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / s),
      a = Math.ceil(n / s);
    r !== a && (e.$refs.menu.scrollTop = (a - 1) * e.$refs.menu.offsetHeight);
  },
  enterItem(e) {
    const t = e.filteredOptions[e.pointer],
      n = t.disabled;
    t && !n && e.selectItem(t);
  },
  pointerSet(e, t) {
    e.pointer = t;
  },
  pointerAdjust(e) {
    e.pointer >= e.filteredOptions.length - 1 &&
      (e.pointer = e.filteredOptions.length ? e.filteredOptions.length - 1 : 0);
  },
  mousedownItem(e) {
    e.mousedownState = !0;
  },
};
function gu(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const pu = {
    props: {
      id: { default: null },
      name: { type: String, default: "" },
      isError: { type: Boolean, default: !1 },
      customAttr: { type: Function, default: () => "" },
      isDisabled: { type: Boolean, default: !1 },
      placeholder: { type: String, default: "" },
      filterPredicate: { type: Function, default: (e, t) => e.match(gu(t)) },
    },
  },
  bu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  vu = {
    name: "ModelSelect",
    mixins: [pu],
    emits: ["blur", "searchchange", "update:modelValue"],
    props: {
      modelValue: { type: [String, Number, Object, Boolean] },
      customAttr: { type: Function, default: () => "" },
      options: { type: Array },
    },
    data() {
      return { showMenu: !1, searchText: "", mousedownState: !1, pointer: -1 };
    },
    watch: {
      value(e) {
        this.pointer = this.filteredOptions.findIndex(
          (t) => t.value === this.optionValue(e)
        );
      },
      filteredOptions() {
        this.pointerAdjust();
      },
      searchText() {
        this.$emit("searchchange", this.searchText);
      },
    },
    computed: {
      searchTextCustomAttr() {
        return this.selectedOption && this.selectedOption.value
          ? this.customAttr(this.selectedOption)
          : "";
      },
      inputText() {
        if (this.searchText) return "";
        {
          let e = this.placeholder;
          return this.selectedOption && (e = this.selectedOption.text), e;
        }
      },
      customAttrs() {
        try {
          if (Array.isArray(this.options))
            return this.options.map((e) => this.customAttr(e));
        } catch {}
        return [];
      },
      textClass() {
        return !this.selectedOption && this.placeholder ? "default" : "";
      },
      menuClass() {
        return { visible: this.showMenu, hidden: !this.showMenu };
      },
      menuStyle() {
        return { display: this.showMenu ? "block" : "none" };
      },
      filteredOptions() {
        return this.searchText
          ? this.options.filter((e) => {
              try {
                return this.filterPredicate(e.text, this.searchText);
              } catch {
                return !0;
              }
            })
          : this.options;
      },
      selectedOption() {
        return this.options.find(
          (e) => e.value === this.optionValue(this.modelValue)
        );
      },
    },
    methods: {
      deleteTextOrItem() {
        !this.searchText &&
          this.modelValue &&
          (this.selectItem({}), this.openOptions());
      },
      openOptions() {
        At.openOptions(this);
      },
      blurInput() {
        At.blurInput(this);
      },
      closeOptions() {
        At.closeOptions(this);
      },
      prevItem() {
        At.prevItem(this);
      },
      nextItem() {
        At.nextItem(this);
      },
      enterItem() {
        At.enterItem(this);
      },
      pointerSet(e) {
        At.pointerSet(this, e);
      },
      pointerAdjust() {
        At.pointerAdjust(this);
      },
      mousedownItem() {
        At.mousedownItem(this);
      },
      selectItem(e) {
        (this.searchText = ""),
          this.closeOptions(),
          typeof this.modelValue == "object" && this.modelValue
            ? this.$emit("update:modelValue", e)
            : (this.$emit("update:modelValue", e.value),
              e.value !== void 0 &&
                e.value === e.text &&
                (this.searchText = e.value));
      },
      optionValue(e) {
        return typeof e == "object" && e !== null ? e.value : e;
      },
    },
  },
  xu = E("i", { class: "dropdown icon" }, null, -1),
  Au = ["disabled", "tabindex", "id", "name", "value"],
  yu = ["data-vss-custom-attr"],
  Su = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function _u(e, t, n, s, r, a) {
  return (
    je(),
    Be(
      "div",
      {
        class: dt([
          "ui fluid search selection dropdown",
          {
            "active visible": r.showMenu,
            error: e.isError,
            disabled: e.isDisabled,
          },
        ]),
        onClick:
          t[11] || (t[11] = (...o) => a.openOptions && a.openOptions(...o)),
        onFocus:
          t[12] || (t[12] = (...o) => a.openOptions && a.openOptions(...o)),
      },
      [
        xu,
        E(
          "input",
          {
            class: "search",
            autocomplete: "off",
            disabled: e.isDisabled,
            tabindex: e.isDisabled ? -1 : 0,
            id: e.id,
            name: e.name,
            value: r.searchText,
            onInput: t[0] || (t[0] = (o) => (r.searchText = o.target.value)),
            ref: "input",
            onFocus:
              t[1] ||
              (t[1] = Xt(
                (...o) => a.openOptions && a.openOptions(...o),
                ["prevent"]
              )),
            onKeyup: [
              t[2] ||
                (t[2] = jt(
                  (...o) => a.closeOptions && a.closeOptions(...o),
                  ["esc"]
                )),
              t[7] ||
                (t[7] = jt(
                  Xt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]),
                  ["enter"]
                )),
            ],
            onBlur: t[3] || (t[3] = (...o) => a.blurInput && a.blurInput(...o)),
            onKeydown: [
              t[4] ||
                (t[4] = jt((...o) => a.prevItem && a.prevItem(...o), ["up"])),
              t[5] ||
                (t[5] = jt((...o) => a.nextItem && a.nextItem(...o), ["down"])),
              t[6] ||
                (t[6] = jt(
                  Xt(() => {}, ["prevent"]),
                  ["enter"]
                )),
              t[8] ||
                (t[8] = jt(
                  (...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o),
                  ["delete"]
                )),
            ],
          },
          null,
          40,
          Au
        ),
        E(
          "div",
          {
            class: dt(["text", a.textClass]),
            "data-vss-custom-attr": a.searchTextCustomAttr,
          },
          we(a.inputText),
          11,
          yu
        ),
        E(
          "div",
          {
            class: dt(["menu", a.menuClass]),
            ref: "menu",
            onMousedown: t[10] || (t[10] = Xt(() => {}, ["prevent"])),
            style: Qn(a.menuStyle),
            tabindex: "-1",
          },
          [
            (je(!0),
            Be(
              nt,
              null,
              qa(
                a.filteredOptions,
                (o, l) => (
                  je(),
                  Be(
                    "div",
                    {
                      key: l,
                      class: dt([
                        "item",
                        {
                          selected: o.selected || r.pointer === l,
                          disabled: o.disabled,
                        },
                      ]),
                      "data-vss-custom-attr": a.customAttrs[l]
                        ? a.customAttrs[l]
                        : "",
                      onClick: Xt((m) => a.selectItem(o), ["stop"]),
                      onMousedown:
                        t[9] ||
                        (t[9] = (...m) =>
                          a.mousedownItem && a.mousedownItem(...m)),
                      onMouseenter: (m) => a.pointerSet(l),
                    },
                    [
                      Ja(e.$slots, "default", { option: o, idx: l }, () => [
                        ci(we(o.text), 1),
                      ]),
                    ],
                    42,
                    Su
                  )
                )
              ),
              128
            )),
          ],
          38
        ),
      ],
      34
    )
  );
}
const wu = bu(vu, [["render", _u]]);
function Vn(e) {
  return [null, void 0, !1].indexOf(e) !== -1;
}
function Eu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function hi(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var ca = hi(function (e, t) {
    e.exports = (function () {
      var n = [
        "decimals",
        "thousand",
        "mark",
        "prefix",
        "suffix",
        "encoder",
        "decoder",
        "negativeBefore",
        "negative",
        "edit",
        "undo",
      ];
      function s(y) {
        return y.split("").reverse().join("");
      }
      function r(y, T) {
        return y.substring(0, T.length) === T;
      }
      function a(y, T) {
        return y.slice(-1 * T.length) === T;
      }
      function o(y, T, k) {
        if ((y[T] || y[k]) && y[T] === y[k]) throw new Error(T);
      }
      function l(y) {
        return typeof y == "number" && isFinite(y);
      }
      function m(y, T) {
        return (
          (y = y.toString().split("e")),
          (+(
            (y = (y = Math.round(+(y[0] + "e" + (y[1] ? +y[1] + T : T))))
              .toString()
              .split("e"))[0] +
            "e" +
            (y[1] ? +y[1] - T : -T)
          )).toFixed(T)
        );
      }
      function d(y, T, k, W, te, se, he, B, Ee, pe, I, M) {
        var Z,
          Y,
          ce,
          be = M,
          de = "",
          R = "";
        return (
          se && (M = se(M)),
          !!l(M) &&
            (y !== !1 && parseFloat(M.toFixed(y)) === 0 && (M = 0),
            M < 0 && ((Z = !0), (M = Math.abs(M))),
            y !== !1 && (M = m(M, y)),
            (M = M.toString()).indexOf(".") !== -1
              ? ((ce = (Y = M.split("."))[0]), k && (de = k + Y[1]))
              : (ce = M),
            T && ((ce = s(ce).match(/.{1,3}/g)), (ce = s(ce.join(s(T))))),
            Z && B && (R += B),
            W && (R += W),
            Z && Ee && (R += Ee),
            (R += ce),
            (R += de),
            te && (R += te),
            pe && (R = pe(R, be)),
            R)
        );
      }
      function b(y, T, k, W, te, se, he, B, Ee, pe, I, M) {
        var Z,
          Y = "";
        return (
          I && (M = I(M)),
          !(!M || typeof M != "string") &&
            (B && r(M, B) && ((M = M.replace(B, "")), (Z = !0)),
            W && r(M, W) && (M = M.replace(W, "")),
            Ee && r(M, Ee) && ((M = M.replace(Ee, "")), (Z = !0)),
            te && a(M, te) && (M = M.slice(0, -1 * te.length)),
            T && (M = M.split(T).join("")),
            k && (M = M.replace(k, ".")),
            Z && (Y += "-"),
            (Y = (Y += M).replace(/[^0-9\.\-.]/g, "")) !== "" &&
              ((Y = Number(Y)), he && (Y = he(Y)), !!l(Y) && Y))
        );
      }
      function x(y) {
        var T,
          k,
          W,
          te = {};
        for (
          y.suffix === void 0 && (y.suffix = y.postfix), T = 0;
          T < n.length;
          T += 1
        )
          if ((W = y[(k = n[T])]) === void 0)
            k !== "negative" || te.negativeBefore
              ? k === "mark" && te.thousand !== "."
                ? (te[k] = ".")
                : (te[k] = !1)
              : (te[k] = "-");
          else if (k === "decimals") {
            if (!(W >= 0 && W < 8)) throw new Error(k);
            te[k] = W;
          } else if (
            k === "encoder" ||
            k === "decoder" ||
            k === "edit" ||
            k === "undo"
          ) {
            if (typeof W != "function") throw new Error(k);
            te[k] = W;
          } else {
            if (typeof W != "string") throw new Error(k);
            te[k] = W;
          }
        return (
          o(te, "mark", "thousand"),
          o(te, "prefix", "negative"),
          o(te, "prefix", "negativeBefore"),
          te
        );
      }
      function A(y, T, k) {
        var W,
          te = [];
        for (W = 0; W < n.length; W += 1) te.push(y[n[W]]);
        return te.push(k), T.apply("", te);
      }
      function j(y) {
        if (!(this instanceof j)) return new j(y);
        typeof y == "object" &&
          ((y = x(y)),
          (this.to = function (T) {
            return A(y, d, T);
          }),
          (this.from = function (T) {
            return A(y, b, T);
          }));
      }
      return j;
    })();
  }),
  Nu = Eu(
    hi(function (e, t) {
      (function (n) {
        function s(u) {
          return r(u) && typeof u.from == "function";
        }
        function r(u) {
          return typeof u == "object" && typeof u.to == "function";
        }
        function a(u) {
          u.parentElement.removeChild(u);
        }
        function o(u) {
          return u != null;
        }
        function l(u) {
          u.preventDefault();
        }
        function m(u) {
          return u.filter(function (i) {
            return !this[i] && (this[i] = !0);
          }, {});
        }
        function d(u, i) {
          return Math.round(u / i) * i;
        }
        function b(u, i) {
          var C = u.getBoundingClientRect(),
            K = u.ownerDocument,
            V = K.documentElement,
            J = se(K);
          return (
            /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (J.x = 0),
            i ? C.top + J.y - V.clientTop : C.left + J.x - V.clientLeft
          );
        }
        function x(u) {
          return typeof u == "number" && !isNaN(u) && isFinite(u);
        }
        function A(u, i, C) {
          C > 0 &&
            (k(u, i),
            setTimeout(function () {
              W(u, i);
            }, C));
        }
        function j(u) {
          return Math.max(Math.min(u, 100), 0);
        }
        function y(u) {
          return Array.isArray(u) ? u : [u];
        }
        function T(u) {
          var i = (u = String(u)).split(".");
          return i.length > 1 ? i[1].length : 0;
        }
        function k(u, i) {
          u.classList && !/\s/.test(i)
            ? u.classList.add(i)
            : (u.className += " " + i);
        }
        function W(u, i) {
          u.classList && !/\s/.test(i)
            ? u.classList.remove(i)
            : (u.className = u.className.replace(
                new RegExp(
                  "(^|\\b)" + i.split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              ));
        }
        function te(u, i) {
          return u.classList
            ? u.classList.contains(i)
            : new RegExp("\\b" + i + "\\b").test(u.className);
        }
        function se(u) {
          var i = window.pageXOffset !== void 0,
            C = (u.compatMode || "") === "CSS1Compat";
          return {
            x: i
              ? window.pageXOffset
              : C
              ? u.documentElement.scrollLeft
              : u.body.scrollLeft,
            y: i
              ? window.pageYOffset
              : C
              ? u.documentElement.scrollTop
              : u.body.scrollTop,
          };
        }
        function he() {
          return window.navigator.pointerEnabled
            ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
            : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
              }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
              };
        }
        function B() {
          var u = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                u = !0;
              },
            });
            window.addEventListener("test", null, i);
          } catch {}
          return u;
        }
        function Ee() {
          return (
            window.CSS && CSS.supports && CSS.supports("touch-action", "none")
          );
        }
        function pe(u, i) {
          return 100 / (i - u);
        }
        function I(u, i, C) {
          return (100 * i) / (u[C + 1] - u[C]);
        }
        function M(u, i) {
          return I(u, u[0] < 0 ? i + Math.abs(u[0]) : i - u[0], 0);
        }
        function Z(u, i) {
          return (i * (u[1] - u[0])) / 100 + u[0];
        }
        function Y(u, i) {
          for (var C = 1; u >= i[C]; ) C += 1;
          return C;
        }
        function ce(u, i, C) {
          if (C >= u.slice(-1)[0]) return 100;
          var K = Y(C, u),
            V = u[K - 1],
            J = u[K],
            ie = i[K - 1],
            ve = i[K];
          return ie + M([V, J], C) / pe(ie, ve);
        }
        function be(u, i, C) {
          if (C >= 100) return u.slice(-1)[0];
          var K = Y(C, i),
            V = u[K - 1],
            J = u[K],
            ie = i[K - 1];
          return Z([V, J], (C - ie) * pe(ie, i[K]));
        }
        function de(u, i, C, K) {
          if (K === 100) return K;
          var V = Y(K, u),
            J = u[V - 1],
            ie = u[V];
          return C
            ? K - J > (ie - J) / 2
              ? ie
              : J
            : i[V - 1]
            ? u[V - 1] + d(K - u[V - 1], i[V - 1])
            : K;
        }
        var R, ee;
        (n.PipsMode = void 0),
          ((ee = n.PipsMode || (n.PipsMode = {})).Range = "range"),
          (ee.Steps = "steps"),
          (ee.Positions = "positions"),
          (ee.Count = "count"),
          (ee.Values = "values"),
          (n.PipsType = void 0),
          ((R = n.PipsType || (n.PipsType = {}))[(R.None = -1)] = "None"),
          (R[(R.NoValue = 0)] = "NoValue"),
          (R[(R.LargeValue = 1)] = "LargeValue"),
          (R[(R.SmallValue = 2)] = "SmallValue");
        var X = (function () {
            function u(i, C, K) {
              var V;
              (this.xPct = []),
                (this.xVal = []),
                (this.xSteps = []),
                (this.xNumSteps = []),
                (this.xHighestCompleteStep = []),
                (this.xSteps = [K || !1]),
                (this.xNumSteps = [!1]),
                (this.snap = C);
              var J = [];
              for (
                Object.keys(i).forEach(function (ie) {
                  J.push([y(i[ie]), ie]);
                }),
                  J.sort(function (ie, ve) {
                    return ie[0][0] - ve[0][0];
                  }),
                  V = 0;
                V < J.length;
                V++
              )
                this.handleEntryPoint(J[V][1], J[V][0]);
              for (
                this.xNumSteps = this.xSteps.slice(0), V = 0;
                V < this.xNumSteps.length;
                V++
              )
                this.handleStepPoint(V, this.xNumSteps[V]);
            }
            return (
              (u.prototype.getDistance = function (i) {
                for (var C = [], K = 0; K < this.xNumSteps.length - 1; K++)
                  C[K] = I(this.xVal, i, K);
                return C;
              }),
              (u.prototype.getAbsoluteDistance = function (i, C, K) {
                var V,
                  J = 0;
                if (i < this.xPct[this.xPct.length - 1])
                  for (; i > this.xPct[J + 1]; ) J++;
                else
                  i === this.xPct[this.xPct.length - 1] &&
                    (J = this.xPct.length - 2);
                K || i !== this.xPct[J + 1] || J++, C === null && (C = []);
                var ie = 1,
                  ve = C[J],
                  Te = 0,
                  pt = 0,
                  ze = 0,
                  re = 0;
                for (
                  V = K
                    ? (i - this.xPct[J]) / (this.xPct[J + 1] - this.xPct[J])
                    : (this.xPct[J + 1] - i) /
                      (this.xPct[J + 1] - this.xPct[J]);
                  ve > 0;

                )
                  (Te = this.xPct[J + 1 + re] - this.xPct[J + re]),
                    C[J + re] * ie + 100 - 100 * V > 100
                      ? ((pt = Te * V),
                        (ie = (ve - 100 * V) / C[J + re]),
                        (V = 1))
                      : ((pt = ((C[J + re] * Te) / 100) * ie), (ie = 0)),
                    K
                      ? ((ze -= pt), this.xPct.length + re >= 1 && re--)
                      : ((ze += pt), this.xPct.length - re >= 1 && re++),
                    (ve = C[J + re] * ie);
                return i + ze;
              }),
              (u.prototype.toStepping = function (i) {
                return (i = ce(this.xVal, this.xPct, i));
              }),
              (u.prototype.fromStepping = function (i) {
                return be(this.xVal, this.xPct, i);
              }),
              (u.prototype.getStep = function (i) {
                return (i = de(this.xPct, this.xSteps, this.snap, i));
              }),
              (u.prototype.getDefaultStep = function (i, C, K) {
                var V = Y(i, this.xPct);
                return (
                  (i === 100 || (C && i === this.xPct[V - 1])) &&
                    (V = Math.max(V - 1, 1)),
                  (this.xVal[V] - this.xVal[V - 1]) / K
                );
              }),
              (u.prototype.getNearbySteps = function (i) {
                var C = Y(i, this.xPct);
                return {
                  stepBefore: {
                    startValue: this.xVal[C - 2],
                    step: this.xNumSteps[C - 2],
                    highestStep: this.xHighestCompleteStep[C - 2],
                  },
                  thisStep: {
                    startValue: this.xVal[C - 1],
                    step: this.xNumSteps[C - 1],
                    highestStep: this.xHighestCompleteStep[C - 1],
                  },
                  stepAfter: {
                    startValue: this.xVal[C],
                    step: this.xNumSteps[C],
                    highestStep: this.xHighestCompleteStep[C],
                  },
                };
              }),
              (u.prototype.countStepDecimals = function () {
                var i = this.xNumSteps.map(T);
                return Math.max.apply(null, i);
              }),
              (u.prototype.hasNoSize = function () {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
              }),
              (u.prototype.convert = function (i) {
                return this.getStep(this.toStepping(i));
              }),
              (u.prototype.handleEntryPoint = function (i, C) {
                var K;
                if (
                  !x(
                    (K = i === "min" ? 0 : i === "max" ? 100 : parseFloat(i))
                  ) ||
                  !x(C[0])
                )
                  throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(K), this.xVal.push(C[0]);
                var V = Number(C[1]);
                K
                  ? this.xSteps.push(!isNaN(V) && V)
                  : isNaN(V) || (this.xSteps[0] = V),
                  this.xHighestCompleteStep.push(0);
              }),
              (u.prototype.handleStepPoint = function (i, C) {
                if (C)
                  if (this.xVal[i] !== this.xVal[i + 1]) {
                    this.xSteps[i] =
                      I([this.xVal[i], this.xVal[i + 1]], C, 0) /
                      pe(this.xPct[i], this.xPct[i + 1]);
                    var K =
                        (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i],
                      V = Math.ceil(Number(K.toFixed(3)) - 1),
                      J = this.xVal[i] + this.xNumSteps[i] * V;
                    this.xHighestCompleteStep[i] = J;
                  } else
                    this.xSteps[i] = this.xHighestCompleteStep[i] =
                      this.xVal[i];
              }),
              u
            );
          })(),
          ae = {
            to: function (u) {
              return u === void 0 ? "" : u.toFixed(2);
            },
            from: Number,
          },
          Ae = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub",
          },
          me = { tooltips: ".__tooltips", aria: ".__aria" };
        function Ce(u, i) {
          if (!x(i)) throw new Error("noUiSlider: 'step' is not numeric.");
          u.singleStep = i;
        }
        function Ve(u, i) {
          if (!x(i))
            throw new Error(
              "noUiSlider: 'keyboardPageMultiplier' is not numeric."
            );
          u.keyboardPageMultiplier = i;
        }
        function lt(u, i) {
          if (!x(i))
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
          u.keyboardMultiplier = i;
        }
        function gt(u, i) {
          if (!x(i))
            throw new Error(
              "noUiSlider: 'keyboardDefaultStep' is not numeric."
            );
          u.keyboardDefaultStep = i;
        }
        function De(u, i) {
          if (typeof i != "object" || Array.isArray(i))
            throw new Error("noUiSlider: 'range' is not an object.");
          if (i.min === void 0 || i.max === void 0)
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
          u.spectrum = new X(i, u.snap || !1, u.singleStep);
        }
        function G(u, i) {
          if (((i = y(i)), !Array.isArray(i) || !i.length))
            throw new Error("noUiSlider: 'start' option is incorrect.");
          (u.handles = i.length), (u.start = i);
        }
        function _e(u, i) {
          if (typeof i != "boolean")
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
          u.snap = i;
        }
        function on(u, i) {
          if (typeof i != "boolean")
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
          u.animate = i;
        }
        function Et(u, i) {
          if (typeof i != "number")
            throw new Error(
              "noUiSlider: 'animationDuration' option must be a number."
            );
          u.animationDuration = i;
        }
        function ln(u, i) {
          var C,
            K = [!1];
          if (
            (i === "lower" ? (i = [!0, !1]) : i === "upper" && (i = [!1, !0]),
            i === !0 || i === !1)
          ) {
            for (C = 1; C < u.handles; C++) K.push(i);
            K.push(!1);
          } else {
            if (!Array.isArray(i) || !i.length || i.length !== u.handles + 1)
              throw new Error(
                "noUiSlider: 'connect' option doesn't match handle count."
              );
            K = i;
          }
          u.connect = K;
        }
        function un(u, i) {
          switch (i) {
            case "horizontal":
              u.ort = 0;
              break;
            case "vertical":
              u.ort = 1;
              break;
            default:
              throw new Error("noUiSlider: 'orientation' option is invalid.");
          }
        }
        function c(u, i) {
          if (!x(i))
            throw new Error("noUiSlider: 'margin' option must be numeric.");
          i !== 0 && (u.margin = u.spectrum.getDistance(i));
        }
        function h(u, i) {
          if (!x(i))
            throw new Error("noUiSlider: 'limit' option must be numeric.");
          if (
            ((u.limit = u.spectrum.getDistance(i)), !u.limit || u.handles < 2)
          )
            throw new Error(
              "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
        function v(u, i) {
          var C;
          if (!x(i) && !Array.isArray(i))
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
            );
          if (Array.isArray(i) && i.length !== 2 && !x(i[0]) && !x(i[1]))
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
            );
          if (i !== 0) {
            for (
              Array.isArray(i) || (i = [i, i]),
                u.padding = [
                  u.spectrum.getDistance(i[0]),
                  u.spectrum.getDistance(i[1]),
                ],
                C = 0;
              C < u.spectrum.xNumSteps.length - 1;
              C++
            )
              if (u.padding[0][C] < 0 || u.padding[1][C] < 0)
                throw new Error(
                  "noUiSlider: 'padding' option must be a positive number(s)."
                );
            var K = i[0] + i[1],
              V = u.spectrum.xVal[0];
            if (K / (u.spectrum.xVal[u.spectrum.xVal.length - 1] - V) > 1)
              throw new Error(
                "noUiSlider: 'padding' option must not exceed 100% of the range."
              );
          }
        }
        function S(u, i) {
          switch (i) {
            case "ltr":
              u.dir = 0;
              break;
            case "rtl":
              u.dir = 1;
              break;
            default:
              throw new Error(
                "noUiSlider: 'direction' option was not recognized."
              );
          }
        }
        function _(u, i) {
          if (typeof i != "string")
            throw new Error(
              "noUiSlider: 'behaviour' must be a string containing options."
            );
          var C = i.indexOf("tap") >= 0,
            K = i.indexOf("drag") >= 0,
            V = i.indexOf("fixed") >= 0,
            J = i.indexOf("snap") >= 0,
            ie = i.indexOf("hover") >= 0,
            ve = i.indexOf("unconstrained") >= 0,
            Te = i.indexOf("drag-all") >= 0,
            pt = i.indexOf("smooth-steps") >= 0;
          if (V) {
            if (u.handles !== 2)
              throw new Error(
                "noUiSlider: 'fixed' behaviour must be used with 2 handles"
              );
            c(u, u.start[1] - u.start[0]);
          }
          if (ve && (u.margin || u.limit))
            throw new Error(
              "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
            );
          u.events = {
            tap: C || J,
            drag: K,
            dragAll: Te,
            smoothSteps: pt,
            fixed: V,
            snap: J,
            hover: ie,
            unconstrained: ve,
          };
        }
        function O(u, i) {
          if (i !== !1)
            if (i === !0 || r(i)) {
              u.tooltips = [];
              for (var C = 0; C < u.handles; C++) u.tooltips.push(i);
            } else {
              if ((i = y(i)).length !== u.handles)
                throw new Error(
                  "noUiSlider: must pass a formatter for all handles."
                );
              i.forEach(function (K) {
                if (typeof K != "boolean" && !r(K))
                  throw new Error(
                    "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                  );
              }),
                (u.tooltips = i);
            }
        }
        function F(u, i) {
          if (i.length !== u.handles)
            throw new Error(
              "noUiSlider: must pass a attributes for all handles."
            );
          u.handleAttributes = i;
        }
        function P(u, i) {
          if (!r(i))
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
          u.ariaFormat = i;
        }
        function L(u, i) {
          if (!s(i))
            throw new Error(
              "noUiSlider: 'format' requires 'to' and 'from' methods."
            );
          u.format = i;
        }
        function N(u, i) {
          if (typeof i != "boolean")
            throw new Error(
              "noUiSlider: 'keyboardSupport' option must be a boolean."
            );
          u.keyboardSupport = i;
        }
        function U(u, i) {
          u.documentElement = i;
        }
        function $(u, i) {
          if (typeof i != "string" && i !== !1)
            throw new Error(
              "noUiSlider: 'cssPrefix' must be a string or `false`."
            );
          u.cssPrefix = i;
        }
        function q(u, i) {
          if (typeof i != "object")
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
          typeof u.cssPrefix == "string"
            ? ((u.cssClasses = {}),
              Object.keys(i).forEach(function (C) {
                u.cssClasses[C] = u.cssPrefix + i[C];
              }))
            : (u.cssClasses = i);
        }
        function ne(u) {
          var i = {
              margin: null,
              limit: null,
              padding: null,
              animate: !0,
              animationDuration: 300,
              ariaFormat: ae,
              format: ae,
            },
            C = {
              step: { r: !1, t: Ce },
              keyboardPageMultiplier: { r: !1, t: Ve },
              keyboardMultiplier: { r: !1, t: lt },
              keyboardDefaultStep: { r: !1, t: gt },
              start: { r: !0, t: G },
              connect: { r: !0, t: ln },
              direction: { r: !0, t: S },
              snap: { r: !1, t: _e },
              animate: { r: !1, t: on },
              animationDuration: { r: !1, t: Et },
              range: { r: !0, t: De },
              orientation: { r: !1, t: un },
              margin: { r: !1, t: c },
              limit: { r: !1, t: h },
              padding: { r: !1, t: v },
              behaviour: { r: !0, t: _ },
              ariaFormat: { r: !1, t: P },
              format: { r: !1, t: L },
              tooltips: { r: !1, t: O },
              keyboardSupport: { r: !0, t: N },
              documentElement: { r: !1, t: U },
              cssPrefix: { r: !0, t: $ },
              cssClasses: { r: !0, t: q },
              handleAttributes: { r: !1, t: F },
            },
            K = {
              connect: !1,
              direction: "ltr",
              behaviour: "tap",
              orientation: "horizontal",
              keyboardSupport: !0,
              cssPrefix: "noUi-",
              cssClasses: Ae,
              keyboardPageMultiplier: 5,
              keyboardMultiplier: 1,
              keyboardDefaultStep: 10,
            };
          u.format && !u.ariaFormat && (u.ariaFormat = u.format),
            Object.keys(C).forEach(function (Te) {
              if (o(u[Te]) || K[Te] !== void 0)
                C[Te].t(i, o(u[Te]) ? u[Te] : K[Te]);
              else if (C[Te].r)
                throw new Error("noUiSlider: '" + Te + "' is required.");
            }),
            (i.pips = u.pips);
          var V = document.createElement("div"),
            J = V.style.msTransform !== void 0,
            ie = V.style.transform !== void 0;
          i.transformRule = ie
            ? "transform"
            : J
            ? "msTransform"
            : "webkitTransform";
          var ve = [
            ["left", "top"],
            ["right", "bottom"],
          ];
          return (i.style = ve[i.dir][i.ort]), i;
        }
        function fe(u, i, C) {
          var K,
            V,
            J,
            ie,
            ve,
            Te = he(),
            pt = Ee() && B(),
            ze = u,
            re = i.spectrum,
            bt = [],
            ke = [],
            et = [],
            us = 0,
            vt = {},
            Jt = u.ownerDocument,
            _n = i.documentElement || Jt.documentElement,
            wn = Jt.body,
            pi = Jt.dir === "rtl" || i.ort === 1 ? 0 : 100;
          function xt(f, g) {
            var p = Jt.createElement("div");
            return g && k(p, g), f.appendChild(p), p;
          }
          function bi(f, g) {
            var p = xt(f, i.cssClasses.origin),
              w = xt(p, i.cssClasses.handle);
            if (
              (xt(w, i.cssClasses.touchArea),
              w.setAttribute("data-handle", String(g)),
              i.keyboardSupport &&
                (w.setAttribute("tabindex", "0"),
                w.addEventListener("keydown", function (H) {
                  return Oi(H, g);
                })),
              i.handleAttributes !== void 0)
            ) {
              var D = i.handleAttributes[g];
              Object.keys(D).forEach(function (H) {
                w.setAttribute(H, D[H]);
              });
            }
            return (
              w.setAttribute("role", "slider"),
              w.setAttribute(
                "aria-orientation",
                i.ort ? "vertical" : "horizontal"
              ),
              g === 0
                ? k(w, i.cssClasses.handleLower)
                : g === i.handles - 1 && k(w, i.cssClasses.handleUpper),
              p
            );
          }
          function hr(f, g) {
            return !!g && xt(f, i.cssClasses.connect);
          }
          function vi(f, g) {
            var p = xt(g, i.cssClasses.connects);
            (V = []), (J = []).push(hr(p, f[0]));
            for (var w = 0; w < i.handles; w++)
              V.push(bi(g, w)), (et[w] = w), J.push(hr(p, f[w + 1]));
          }
          function xi(f) {
            return (
              k(f, i.cssClasses.target),
              i.dir === 0 ? k(f, i.cssClasses.ltr) : k(f, i.cssClasses.rtl),
              i.ort === 0
                ? k(f, i.cssClasses.horizontal)
                : k(f, i.cssClasses.vertical),
              k(
                f,
                getComputedStyle(f).direction === "rtl"
                  ? i.cssClasses.textDirectionRtl
                  : i.cssClasses.textDirectionLtr
              ),
              xt(f, i.cssClasses.base)
            );
          }
          function Ai(f, g) {
            return (
              !(!i.tooltips || !i.tooltips[g]) &&
              xt(f.firstChild, i.cssClasses.tooltip)
            );
          }
          function gr() {
            return ze.hasAttribute("disabled");
          }
          function cs(f) {
            return V[f].hasAttribute("disabled");
          }
          function fs() {
            ve &&
              (cn("update" + me.tooltips),
              ve.forEach(function (f) {
                f && a(f);
              }),
              (ve = null));
          }
          function pr() {
            fs(),
              (ve = V.map(Ai)),
              ps("update" + me.tooltips, function (f, g, p) {
                if (ve && i.tooltips && ve[g] !== !1) {
                  var w = f[g];
                  i.tooltips[g] !== !0 && (w = i.tooltips[g].to(p[g])),
                    (ve[g].innerHTML = w);
                }
              });
          }
          function yi() {
            cn("update" + me.aria),
              ps("update" + me.aria, function (f, g, p, w, D) {
                et.forEach(function (H) {
                  var oe = V[H],
                    z = En(ke, H, 0, !0, !0, !0),
                    He = En(ke, H, 100, !0, !0, !0),
                    Le = D[H],
                    Me = String(i.ariaFormat.to(p[H]));
                  (z = re.fromStepping(z).toFixed(1)),
                    (He = re.fromStepping(He).toFixed(1)),
                    (Le = re.fromStepping(Le).toFixed(1)),
                    oe.children[0].setAttribute("aria-valuemin", z),
                    oe.children[0].setAttribute("aria-valuemax", He),
                    oe.children[0].setAttribute("aria-valuenow", Le),
                    oe.children[0].setAttribute("aria-valuetext", Me);
                });
              });
          }
          function Si(f) {
            if (f.mode === n.PipsMode.Range || f.mode === n.PipsMode.Steps)
              return re.xVal;
            if (f.mode === n.PipsMode.Count) {
              if (f.values < 2)
                throw new Error(
                  "noUiSlider: 'values' (>= 2) required for mode 'count'."
                );
              for (var g = f.values - 1, p = 100 / g, w = []; g--; )
                w[g] = g * p;
              return w.push(100), br(w, f.stepped);
            }
            return f.mode === n.PipsMode.Positions
              ? br(f.values, f.stepped)
              : f.mode === n.PipsMode.Values
              ? f.stepped
                ? f.values.map(function (D) {
                    return re.fromStepping(re.getStep(re.toStepping(D)));
                  })
                : f.values
              : [];
          }
          function br(f, g) {
            return f.map(function (p) {
              return re.fromStepping(g ? re.getStep(p) : p);
            });
          }
          function _i(f) {
            function g(Le, Me) {
              return Number((Le + Me).toFixed(7));
            }
            var p = Si(f),
              w = {},
              D = re.xVal[0],
              H = re.xVal[re.xVal.length - 1],
              oe = !1,
              z = !1,
              He = 0;
            return (
              (p = m(
                p.slice().sort(function (Le, Me) {
                  return Le - Me;
                })
              ))[0] !== D && (p.unshift(D), (oe = !0)),
              p[p.length - 1] !== H && (p.push(H), (z = !0)),
              p.forEach(function (Le, Me) {
                var Ie,
                  Se,
                  Ke,
                  $e,
                  Fe,
                  Nr,
                  xs,
                  Mr,
                  Cr,
                  Tr,
                  As = Le,
                  Zt = p[Me + 1],
                  Pr = f.mode === n.PipsMode.Steps;
                for (
                  Pr && (Ie = re.xNumSteps[Me]),
                    Ie || (Ie = Zt - As),
                    Zt === void 0 && (Zt = As),
                    Ie = Math.max(Ie, 1e-7),
                    Se = As;
                  Se <= Zt;
                  Se = g(Se, Ie)
                ) {
                  for (
                    Mr =
                      (Fe = ($e = re.toStepping(Se)) - He) / (f.density || 1),
                      Tr = Fe / (Cr = Math.round(Mr)),
                      Ke = 1;
                    Ke <= Cr;
                    Ke += 1
                  )
                    w[(Nr = He + Ke * Tr).toFixed(5)] = [
                      re.fromStepping(Nr),
                      0,
                    ];
                  (xs =
                    p.indexOf(Se) > -1
                      ? n.PipsType.LargeValue
                      : Pr
                      ? n.PipsType.SmallValue
                      : n.PipsType.NoValue),
                    !Me && oe && Se !== Zt && (xs = 0),
                    (Se === Zt && z) || (w[$e.toFixed(5)] = [Se, xs]),
                    (He = $e);
                }
              }),
              w
            );
          }
          function wi(f, g, p) {
            var w,
              D,
              H = Jt.createElement("div"),
              oe =
                (((w = {})[n.PipsType.None] = ""),
                (w[n.PipsType.NoValue] = i.cssClasses.valueNormal),
                (w[n.PipsType.LargeValue] = i.cssClasses.valueLarge),
                (w[n.PipsType.SmallValue] = i.cssClasses.valueSub),
                w),
              z =
                (((D = {})[n.PipsType.None] = ""),
                (D[n.PipsType.NoValue] = i.cssClasses.markerNormal),
                (D[n.PipsType.LargeValue] = i.cssClasses.markerLarge),
                (D[n.PipsType.SmallValue] = i.cssClasses.markerSub),
                D),
              He = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
              Le = [i.cssClasses.markerHorizontal, i.cssClasses.markerVertical];
            function Me(Se, Ke) {
              var $e = Ke === i.cssClasses.value,
                Fe = $e ? oe : z;
              return Ke + " " + ($e ? He : Le)[i.ort] + " " + Fe[Se];
            }
            function Ie(Se, Ke, $e) {
              if (($e = g ? g(Ke, $e) : $e) !== n.PipsType.None) {
                var Fe = xt(H, !1);
                (Fe.className = Me($e, i.cssClasses.marker)),
                  (Fe.style[i.style] = Se + "%"),
                  $e > n.PipsType.NoValue &&
                    (((Fe = xt(H, !1)).className = Me($e, i.cssClasses.value)),
                    Fe.setAttribute("data-value", String(Ke)),
                    (Fe.style[i.style] = Se + "%"),
                    (Fe.innerHTML = String(p.to(Ke))));
              }
            }
            return (
              k(H, i.cssClasses.pips),
              k(
                H,
                i.ort === 0
                  ? i.cssClasses.pipsHorizontal
                  : i.cssClasses.pipsVertical
              ),
              Object.keys(f).forEach(function (Se) {
                Ie(Se, f[Se][0], f[Se][1]);
              }),
              H
            );
          }
          function ms() {
            ie && (a(ie), (ie = null));
          }
          function ds(f) {
            ms();
            var g = _i(f),
              p = f.filter,
              w = f.format || {
                to: function (D) {
                  return String(Math.round(D));
                },
              };
            return (ie = ze.appendChild(wi(g, p, w)));
          }
          function vr() {
            var f = K.getBoundingClientRect(),
              g = "offset" + ["Width", "Height"][i.ort];
            return i.ort === 0 ? f.width || K[g] : f.height || K[g];
          }
          function Rt(f, g, p, w) {
            var D = function (oe) {
                var z = Ei(oe, w.pageOffset, w.target || g);
                return (
                  !!z &&
                  !(gr() && !w.doNotReject) &&
                  !(te(ze, i.cssClasses.tap) && !w.doNotReject) &&
                  !(f === Te.start && z.buttons !== void 0 && z.buttons > 1) &&
                  (!w.hover || !z.buttons) &&
                  (pt || z.preventDefault(),
                  (z.calcPoint = z.points[i.ort]),
                  void p(z, w))
                );
              },
              H = [];
            return (
              f.split(" ").forEach(function (oe) {
                g.addEventListener(oe, D, !!pt && { passive: !0 }),
                  H.push([oe, D]);
              }),
              H
            );
          }
          function Ei(f, g, p) {
            var w = f.type.indexOf("touch") === 0,
              D = f.type.indexOf("mouse") === 0,
              H = f.type.indexOf("pointer") === 0,
              oe = 0,
              z = 0;
            if (
              (f.type.indexOf("MSPointer") === 0 && (H = !0),
              f.type === "mousedown" && !f.buttons && !f.touches)
            )
              return !1;
            if (w) {
              var He = function (Ie) {
                var Se = Ie.target;
                return (
                  Se === p ||
                  p.contains(Se) ||
                  (f.composed && f.composedPath().shift() === p)
                );
              };
              if (f.type === "touchstart") {
                var Le = Array.prototype.filter.call(f.touches, He);
                if (Le.length > 1) return !1;
                (oe = Le[0].pageX), (z = Le[0].pageY);
              } else {
                var Me = Array.prototype.find.call(f.changedTouches, He);
                if (!Me) return !1;
                (oe = Me.pageX), (z = Me.pageY);
              }
            }
            return (
              (g = g || se(Jt)),
              (D || H) && ((oe = f.clientX + g.x), (z = f.clientY + g.y)),
              (f.pageOffset = g),
              (f.points = [oe, z]),
              (f.cursor = D || H),
              f
            );
          }
          function xr(f) {
            var g = (100 * (f - b(K, i.ort))) / vr();
            return (g = j(g)), i.dir ? 100 - g : g;
          }
          function Ni(f) {
            var g = 100,
              p = !1;
            return (
              V.forEach(function (w, D) {
                if (!cs(D)) {
                  var H = ke[D],
                    oe = Math.abs(H - f);
                  (oe < g || (oe <= g && f > H) || (oe === 100 && g === 100)) &&
                    ((p = D), (g = oe));
                }
              }),
              p
            );
          }
          function Mi(f, g) {
            f.type === "mouseout" &&
              f.target.nodeName === "HTML" &&
              f.relatedTarget === null &&
              hs(f, g);
          }
          function Ci(f, g) {
            if (
              navigator.appVersion.indexOf("MSIE 9") === -1 &&
              f.buttons === 0 &&
              g.buttonsProperty !== 0
            )
              return hs(f, g);
            var p = (i.dir ? -1 : 1) * (f.calcPoint - g.startCalcPoint);
            Ar(
              p > 0,
              (100 * p) / g.baseSize,
              g.locations,
              g.handleNumbers,
              g.connect
            );
          }
          function hs(f, g) {
            g.handle && (W(g.handle, i.cssClasses.active), (us -= 1)),
              g.listeners.forEach(function (p) {
                _n.removeEventListener(p[0], p[1]);
              }),
              us === 0 &&
                (W(ze, i.cssClasses.drag),
                vs(),
                f.cursor &&
                  ((wn.style.cursor = ""),
                  wn.removeEventListener("selectstart", l))),
              i.events.smoothSteps &&
                (g.handleNumbers.forEach(function (p) {
                  Ht(p, ke[p], !0, !0, !1, !1);
                }),
                g.handleNumbers.forEach(function (p) {
                  Re("update", p);
                })),
              g.handleNumbers.forEach(function (p) {
                Re("change", p), Re("set", p), Re("end", p);
              });
          }
          function gs(f, g) {
            if (!g.handleNumbers.some(cs)) {
              var p;
              g.handleNumbers.length === 1 &&
                ((p = V[g.handleNumbers[0]].children[0]),
                (us += 1),
                k(p, i.cssClasses.active)),
                f.stopPropagation();
              var w = [],
                D = Rt(Te.move, _n, Ci, {
                  target: f.target,
                  handle: p,
                  connect: g.connect,
                  listeners: w,
                  startCalcPoint: f.calcPoint,
                  baseSize: vr(),
                  pageOffset: f.pageOffset,
                  handleNumbers: g.handleNumbers,
                  buttonsProperty: f.buttons,
                  locations: ke.slice(),
                }),
                H = Rt(Te.end, _n, hs, {
                  target: f.target,
                  handle: p,
                  listeners: w,
                  doNotReject: !0,
                  handleNumbers: g.handleNumbers,
                }),
                oe = Rt("mouseout", _n, Mi, {
                  target: f.target,
                  handle: p,
                  listeners: w,
                  doNotReject: !0,
                  handleNumbers: g.handleNumbers,
                });
              w.push.apply(w, D.concat(H, oe)),
                f.cursor &&
                  ((wn.style.cursor = getComputedStyle(f.target).cursor),
                  V.length > 1 && k(ze, i.cssClasses.drag),
                  wn.addEventListener("selectstart", l, !1)),
                g.handleNumbers.forEach(function (z) {
                  Re("start", z);
                });
            }
          }
          function Ti(f) {
            f.stopPropagation();
            var g = xr(f.calcPoint),
              p = Ni(g);
            p !== !1 &&
              (i.events.snap || A(ze, i.cssClasses.tap, i.animationDuration),
              Ht(p, g, !0, !0),
              vs(),
              Re("slide", p, !0),
              Re("update", p, !0),
              i.events.snap
                ? gs(f, { handleNumbers: [p] })
                : (Re("change", p, !0), Re("set", p, !0)));
          }
          function Pi(f) {
            var g = xr(f.calcPoint),
              p = re.getStep(g),
              w = re.fromStepping(p);
            Object.keys(vt).forEach(function (D) {
              D.split(".")[0] === "hover" &&
                vt[D].forEach(function (H) {
                  H.call(Mn, w);
                });
            });
          }
          function Oi(f, g) {
            if (gr() || cs(g)) return !1;
            var p = ["Left", "Right"],
              w = ["Down", "Up"],
              D = ["PageDown", "PageUp"],
              H = ["Home", "End"];
            i.dir && !i.ort
              ? p.reverse()
              : i.ort && !i.dir && (w.reverse(), D.reverse());
            var oe,
              z = f.key.replace("Arrow", ""),
              He = z === D[0],
              Le = z === D[1],
              Me = z === w[0] || z === p[0] || He,
              Ie = z === w[1] || z === p[1] || Le,
              Se = z === H[0],
              Ke = z === H[1];
            if (!(Me || Ie || Se || Ke)) return !0;
            if ((f.preventDefault(), Ie || Me)) {
              var $e = Me ? 0 : 1,
                Fe = Er(g)[$e];
              if (Fe === null) return !1;
              Fe === !1 &&
                (Fe = re.getDefaultStep(ke[g], Me, i.keyboardDefaultStep)),
                (Fe *=
                  Le || He ? i.keyboardPageMultiplier : i.keyboardMultiplier),
                (Fe = Math.max(Fe, 1e-7)),
                (Fe *= Me ? -1 : 1),
                (oe = bt[g] + Fe);
            } else oe = Ke ? i.spectrum.xVal[i.spectrum.xVal.length - 1] : i.spectrum.xVal[0];
            return (
              Ht(g, re.toStepping(oe), !0, !0),
              Re("slide", g),
              Re("update", g),
              Re("change", g),
              Re("set", g),
              !1
            );
          }
          function Ii(f) {
            f.fixed ||
              V.forEach(function (g, p) {
                Rt(Te.start, g.children[0], gs, { handleNumbers: [p] });
              }),
              f.tap && Rt(Te.start, K, Ti, {}),
              f.hover && Rt(Te.move, K, Pi, { hover: !0 }),
              f.drag &&
                J.forEach(function (g, p) {
                  if (g !== !1 && p !== 0 && p !== J.length - 1) {
                    var w = V[p - 1],
                      D = V[p],
                      H = [g],
                      oe = [w, D],
                      z = [p - 1, p];
                    k(g, i.cssClasses.draggable),
                      f.fixed && (H.push(w.children[0]), H.push(D.children[0])),
                      f.dragAll && ((oe = V), (z = et)),
                      H.forEach(function (He) {
                        Rt(Te.start, He, gs, {
                          handles: oe,
                          handleNumbers: z,
                          connect: g,
                        });
                      });
                  }
                });
          }
          function ps(f, g) {
            (vt[f] = vt[f] || []),
              vt[f].push(g),
              f.split(".")[0] === "update" &&
                V.forEach(function (p, w) {
                  Re("update", w);
                });
          }
          function ki(f) {
            return f === me.aria || f === me.tooltips;
          }
          function cn(f) {
            var g = f && f.split(".")[0],
              p = g ? f.substring(g.length) : f;
            Object.keys(vt).forEach(function (w) {
              var D = w.split(".")[0],
                H = w.substring(D.length);
              (g && g !== D) ||
                (p && p !== H) ||
                (ki(H) && p !== H) ||
                delete vt[w];
            });
          }
          function Re(f, g, p) {
            Object.keys(vt).forEach(function (w) {
              var D = w.split(".")[0];
              f === D &&
                vt[w].forEach(function (H) {
                  H.call(
                    Mn,
                    bt.map(i.format.to),
                    g,
                    bt.slice(),
                    p || !1,
                    ke.slice(),
                    Mn
                  );
                });
            });
          }
          function En(f, g, p, w, D, H, oe) {
            var z;
            return (
              V.length > 1 &&
                !i.events.unconstrained &&
                (w &&
                  g > 0 &&
                  ((z = re.getAbsoluteDistance(f[g - 1], i.margin, !1)),
                  (p = Math.max(p, z))),
                D &&
                  g < V.length - 1 &&
                  ((z = re.getAbsoluteDistance(f[g + 1], i.margin, !0)),
                  (p = Math.min(p, z)))),
              V.length > 1 &&
                i.limit &&
                (w &&
                  g > 0 &&
                  ((z = re.getAbsoluteDistance(f[g - 1], i.limit, !1)),
                  (p = Math.min(p, z))),
                D &&
                  g < V.length - 1 &&
                  ((z = re.getAbsoluteDistance(f[g + 1], i.limit, !0)),
                  (p = Math.max(p, z)))),
              i.padding &&
                (g === 0 &&
                  ((z = re.getAbsoluteDistance(0, i.padding[0], !1)),
                  (p = Math.max(p, z))),
                g === V.length - 1 &&
                  ((z = re.getAbsoluteDistance(100, i.padding[1], !0)),
                  (p = Math.min(p, z)))),
              oe || (p = re.getStep(p)),
              !((p = j(p)) === f[g] && !H) && p
            );
          }
          function bs(f, g) {
            var p = i.ort;
            return (p ? g : f) + ", " + (p ? f : g);
          }
          function Ar(f, g, p, w, D) {
            var H = p.slice(),
              oe = w[0],
              z = i.events.smoothSteps,
              He = [!f, f],
              Le = [f, !f];
            (w = w.slice()),
              f && w.reverse(),
              w.length > 1
                ? w.forEach(function (Ie, Se) {
                    var Ke = En(H, Ie, H[Ie] + g, He[Se], Le[Se], !1, z);
                    Ke === !1 ? (g = 0) : ((g = Ke - H[Ie]), (H[Ie] = Ke));
                  })
                : (He = Le = [!0]);
            var Me = !1;
            w.forEach(function (Ie, Se) {
              Me = Ht(Ie, p[Ie] + g, He[Se], Le[Se], !1, z) || Me;
            }),
              Me &&
                (w.forEach(function (Ie) {
                  Re("update", Ie), Re("slide", Ie);
                }),
                D != null && Re("drag", oe));
          }
          function yr(f, g) {
            return i.dir ? 100 - f - g : f;
          }
          function Li(f, g) {
            (ke[f] = g), (bt[f] = re.fromStepping(g));
            var p = "translate(" + bs(yr(g, 0) - pi + "%", "0") + ")";
            (V[f].style[i.transformRule] = p), Sr(f), Sr(f + 1);
          }
          function vs() {
            et.forEach(function (f) {
              var g = ke[f] > 50 ? -1 : 1,
                p = 3 + (V.length + g * f);
              V[f].style.zIndex = String(p);
            });
          }
          function Ht(f, g, p, w, D, H) {
            return (
              D || (g = En(ke, f, g, p, w, !1, H)), g !== !1 && (Li(f, g), !0)
            );
          }
          function Sr(f) {
            if (J[f]) {
              var g = 0,
                p = 100;
              f !== 0 && (g = ke[f - 1]), f !== J.length - 1 && (p = ke[f]);
              var w = p - g,
                D = "translate(" + bs(yr(g, w) + "%", "0") + ")",
                H = "scale(" + bs(w / 100, "1") + ")";
              J[f].style[i.transformRule] = D + " " + H;
            }
          }
          function _r(f, g) {
            return f === null || f === !1 || f === void 0
              ? ke[g]
              : (typeof f == "number" && (f = String(f)),
                (f = i.format.from(f)) !== !1 && (f = re.toStepping(f)),
                f === !1 || isNaN(f) ? ke[g] : f);
          }
          function Nn(f, g, p) {
            var w = y(f),
              D = ke[0] === void 0;
            (g = g === void 0 || g),
              i.animate && !D && A(ze, i.cssClasses.tap, i.animationDuration),
              et.forEach(function (z) {
                Ht(z, _r(w[z], z), !0, !1, p);
              });
            var H = et.length === 1 ? 0 : 1;
            if (D && re.hasNoSize() && ((p = !0), (ke[0] = 0), et.length > 1)) {
              var oe = 100 / (et.length - 1);
              et.forEach(function (z) {
                ke[z] = z * oe;
              });
            }
            for (; H < et.length; ++H)
              et.forEach(function (z) {
                Ht(z, ke[z], !0, !0, p);
              });
            vs(),
              et.forEach(function (z) {
                Re("update", z), w[z] !== null && g && Re("set", z);
              });
          }
          function Vi(f) {
            Nn(i.start, f);
          }
          function Ri(f, g, p, w) {
            if (!((f = Number(f)) >= 0 && f < et.length))
              throw new Error("noUiSlider: invalid handle number, got: " + f);
            Ht(f, _r(g, f), !0, !0, w), Re("update", f), p && Re("set", f);
          }
          function wr(f) {
            if ((f === void 0 && (f = !1), f))
              return bt.length === 1 ? bt[0] : bt.slice(0);
            var g = bt.map(i.format.to);
            return g.length === 1 ? g[0] : g;
          }
          function Hi() {
            for (
              cn(me.aria),
                cn(me.tooltips),
                Object.keys(i.cssClasses).forEach(function (f) {
                  W(ze, i.cssClasses[f]);
                });
              ze.firstChild;

            )
              ze.removeChild(ze.firstChild);
            delete ze.noUiSlider;
          }
          function Er(f) {
            var g = ke[f],
              p = re.getNearbySteps(g),
              w = bt[f],
              D = p.thisStep.step,
              H = null;
            if (i.snap)
              return [
                w - p.stepBefore.startValue || null,
                p.stepAfter.startValue - w || null,
              ];
            D !== !1 &&
              w + D > p.stepAfter.startValue &&
              (D = p.stepAfter.startValue - w),
              (H =
                w > p.thisStep.startValue
                  ? p.thisStep.step
                  : p.stepBefore.step !== !1 && w - p.stepBefore.highestStep),
              g === 100 ? (D = null) : g === 0 && (H = null);
            var oe = re.countStepDecimals();
            return (
              D !== null && D !== !1 && (D = Number(D.toFixed(oe))),
              H !== null && H !== !1 && (H = Number(H.toFixed(oe))),
              [H, D]
            );
          }
          function Fi() {
            return et.map(Er);
          }
          function Di(f, g) {
            var p = wr(),
              w = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
              ];
            w.forEach(function (H) {
              f[H] !== void 0 && (C[H] = f[H]);
            });
            var D = ne(C);
            w.forEach(function (H) {
              f[H] !== void 0 && (i[H] = D[H]);
            }),
              (re = D.spectrum),
              (i.margin = D.margin),
              (i.limit = D.limit),
              (i.padding = D.padding),
              i.pips ? ds(i.pips) : ms(),
              i.tooltips ? pr() : fs(),
              (ke = []),
              Nn(o(f.start) ? f.start : p, g);
          }
          function ji() {
            (K = xi(ze)),
              vi(i.connect, K),
              Ii(i.events),
              Nn(i.start),
              i.pips && ds(i.pips),
              i.tooltips && pr(),
              yi();
          }
          ji();
          var Mn = {
            destroy: Hi,
            steps: Fi,
            on: ps,
            off: cn,
            get: wr,
            set: Nn,
            setHandle: Ri,
            reset: Vi,
            __moveHandles: function (f, g, p) {
              Ar(f, g, ke, p);
            },
            options: C,
            updateOptions: Di,
            target: ze,
            removePips: ms,
            removeTooltips: fs,
            getPositions: function () {
              return ke.slice();
            },
            getTooltips: function () {
              return ve;
            },
            getOrigins: function () {
              return V;
            },
            pips: ds,
          };
          return Mn;
        }
        function ye(u, i) {
          if (!u || !u.nodeName)
            throw new Error(
              "noUiSlider: create requires a single element, got: " + u
            );
          if (u.noUiSlider)
            throw new Error("noUiSlider: Slider was already initialized.");
          var C = fe(u, ne(i), i);
          return (u.noUiSlider = C), C;
        }
        var Ne = { __spectrum: X, cssClasses: Ae, create: ye };
        (n.create = ye),
          (n.cssClasses = Ae),
          (n.default = Ne),
          Object.defineProperty(n, "__esModule", { value: !0 });
      })(t);
    })
  );
function fa(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t)) return !1;
  const n = t.slice().sort();
  return (
    e.length === t.length &&
    e
      .slice()
      .sort()
      .every(function (s, r) {
        return s === n[r];
      })
  );
}
var Gs = {
  name: "Slider",
  emits: [
    "input",
    "update:modelValue",
    "start",
    "slide",
    "drag",
    "update",
    "change",
    "set",
    "end",
  ],
  props: {
    value: {
      validator: function (e) {
        return (t) =>
          typeof t == "number" || t instanceof Array || t == null || t === !1;
      },
      required: !1,
    },
    modelValue: {
      validator: function (e) {
        return (t) =>
          typeof t == "number" || t instanceof Array || t == null || t === !1;
      },
      required: !1,
    },
    id: { type: [String, Number], required: !1 },
    disabled: { type: Boolean, required: !1, default: !1 },
    min: { type: Number, required: !1, default: 0 },
    max: { type: Number, required: !1, default: 100 },
    step: { type: Number, required: !1, default: 1 },
    orientation: { type: String, required: !1, default: "horizontal" },
    direction: { type: String, required: !1, default: "ltr" },
    tooltips: { type: Boolean, required: !1, default: !0 },
    options: { type: Object, required: !1, default: () => ({}) },
    merge: { type: Number, required: !1, default: -1 },
    format: { type: [Object, Function, Boolean], required: !1, default: null },
    classes: { type: Object, required: !1, default: () => ({}) },
    showTooltip: { type: String, required: !1, default: "always" },
    tooltipPosition: { type: String, required: !1, default: null },
    lazy: { type: Boolean, required: !1, default: !0 },
    ariaLabelledby: { type: String, required: !1, default: void 0 },
    aria: { required: !1, type: Object, default: () => ({}) },
  },
  setup(e, t) {
    const n = (function (o, l, m) {
        const { value: d, modelValue: b, min: x } = Pt(o);
        let A = b && b.value !== void 0 ? b : d;
        const j = St(A.value);
        if (
          (Vn(A.value) && (A = St(x.value)),
          Array.isArray(A.value) && A.value.length == 0)
        )
          throw new Error("Slider v-model must not be an empty array");
        return { value: A, initialValue: j };
      })(e),
      s = (function (o, l, m) {
        const {
            classes: d,
            showTooltip: b,
            tooltipPosition: x,
            orientation: A,
          } = Pt(o),
          j = rt(() => ({
            target: "slider-target",
            focused: "slider-focused",
            tooltipFocus: "slider-tooltip-focus",
            tooltipDrag: "slider-tooltip-drag",
            ltr: "slider-ltr",
            rtl: "slider-rtl",
            horizontal: "slider-horizontal",
            vertical: "slider-vertical",
            textDirectionRtl: "slider-txt-dir-rtl",
            textDirectionLtr: "slider-txt-dir-ltr",
            base: "slider-base",
            connects: "slider-connects",
            connect: "slider-connect",
            origin: "slider-origin",
            handle: "slider-handle",
            handleLower: "slider-handle-lower",
            handleUpper: "slider-handle-upper",
            touchArea: "slider-touch-area",
            tooltip: "slider-tooltip",
            tooltipTop: "slider-tooltip-top",
            tooltipBottom: "slider-tooltip-bottom",
            tooltipLeft: "slider-tooltip-left",
            tooltipRight: "slider-tooltip-right",
            tooltipHidden: "slider-tooltip-hidden",
            active: "slider-active",
            draggable: "slider-draggable",
            tap: "slider-state-tap",
            drag: "slider-state-drag",
            pips: "slider-pips",
            pipsHorizontal: "slider-pips-horizontal",
            pipsVertical: "slider-pips-vertical",
            marker: "slider-marker",
            markerHorizontal: "slider-marker-horizontal",
            markerVertical: "slider-marker-vertical",
            markerNormal: "slider-marker-normal",
            markerLarge: "slider-marker-large",
            markerSub: "slider-marker-sub",
            value: "slider-value",
            valueHorizontal: "slider-value-horizontal",
            valueVertical: "slider-value-vertical",
            valueNormal: "slider-value-normal",
            valueLarge: "slider-value-large",
            valueSub: "slider-value-sub",
            ...d.value,
          }));
        return {
          classList: rt(() => {
            const y = { ...j.value };
            return (
              Object.keys(y).forEach((T) => {
                y[T] = Array.isArray(y[T])
                  ? y[T].filter((k) => k !== null).join(" ")
                  : y[T];
              }),
              b.value !== "always" &&
                (y.target += ` ${
                  b.value === "drag" ? y.tooltipDrag : y.tooltipFocus
                }`),
              A.value === "horizontal" &&
                (y.tooltip +=
                  x.value === "bottom"
                    ? ` ${y.tooltipBottom}`
                    : ` ${y.tooltipTop}`),
              A.value === "vertical" &&
                (y.tooltip +=
                  x.value === "right"
                    ? ` ${y.tooltipRight}`
                    : ` ${y.tooltipLeft}`),
              y
            );
          }),
        };
      })(e),
      r = (function (o, l, m) {
        const { format: d, step: b } = Pt(o),
          x = m.value,
          A = m.classList,
          j = rt(() =>
            d && d.value
              ? typeof d.value == "function"
                ? { to: d.value }
                : ca({ ...d.value })
              : ca({ decimals: b.value >= 0 ? 0 : 2 })
          ),
          y = rt(() =>
            Array.isArray(x.value) ? x.value.map((T) => j.value) : j.value
          );
        return {
          tooltipFormat: j,
          tooltipsFormat: y,
          tooltipsMerge: (T, k, W) => {
            var te = getComputedStyle(T).direction === "rtl",
              se = T.noUiSlider.options.direction === "rtl",
              he = T.noUiSlider.options.orientation === "vertical",
              B = T.noUiSlider.getTooltips(),
              Ee = T.noUiSlider.getOrigins();
            B.forEach(function (pe, I) {
              pe && Ee[I].appendChild(pe);
            }),
              T.noUiSlider.on("update", function (pe, I, M, Z, Y) {
                var ce = [[]],
                  be = [[]],
                  de = [[]],
                  R = 0;
                B[0] &&
                  ((ce[0][0] = 0),
                  (be[0][0] = Y[0]),
                  (de[0][0] = j.value.to(parseFloat(pe[0]))));
                for (var ee = 1; ee < pe.length; ee++)
                  (!B[ee] || pe[ee] - pe[ee - 1] > k) &&
                    ((ce[++R] = []), (de[R] = []), (be[R] = [])),
                    B[ee] &&
                      (ce[R].push(ee),
                      de[R].push(j.value.to(parseFloat(pe[ee]))),
                      be[R].push(Y[ee]));
                ce.forEach(function (X, ae) {
                  for (var Ae = X.length, me = 0; me < Ae; me++) {
                    var Ce = X[me];
                    if (me === Ae - 1) {
                      var Ve = 0;
                      be[ae].forEach(function (G) {
                        Ve += 1e3 - G;
                      });
                      var lt = he ? "bottom" : "right",
                        gt = se ? 0 : Ae - 1,
                        De = 1e3 - be[ae][gt];
                      (Ve = (te && !he ? 100 : 0) + Ve / Ae - De),
                        (B[Ce].innerHTML = de[ae].join(W)),
                        (B[Ce].style.display = "block"),
                        (B[Ce].style[lt] = Ve + "%"),
                        A.value.tooltipHidden.split(" ").forEach((G) => {
                          B[Ce].classList.contains(G) &&
                            B[Ce].classList.remove(G);
                        });
                    } else
                      (B[Ce].style.display = "none"),
                        A.value.tooltipHidden.split(" ").forEach((G) => {
                          B[Ce].classList.add(G);
                        });
                  }
                });
              });
          },
        };
      })(e, 0, { value: n.value, classList: s.classList }),
      a = (function (o, l, m) {
        const {
            orientation: d,
            direction: b,
            tooltips: x,
            step: A,
            min: j,
            max: y,
            merge: T,
            id: k,
            disabled: W,
            options: te,
            classes: se,
            format: he,
            lazy: B,
            ariaLabelledby: Ee,
            aria: pe,
          } = Pt(o),
          I = m.value,
          M = m.initialValue,
          Z = m.tooltipsFormat,
          Y = m.tooltipsMerge,
          ce = m.tooltipFormat,
          be = m.classList,
          de = St(null),
          R = St(null),
          ee = St(!1),
          X = rt(() => {
            let G = {
              cssPrefix: "",
              cssClasses: be.value,
              orientation: d.value,
              direction: b.value,
              tooltips: !!x.value && Z.value,
              connect: "lower",
              start: Vn(I.value) ? j.value : I.value,
              range: { min: j.value, max: y.value },
            };
            if (
              (A.value > 0 && (G.step = A.value),
              Array.isArray(I.value) && (G.connect = !0),
              (Ee && Ee.value) || (pe && Object.keys(pe.value).length))
            ) {
              let _e = Array.isArray(I.value) ? I.value : [I.value];
              G.handleAttributes = _e.map((on) =>
                Object.assign(
                  {},
                  pe.value,
                  Ee && Ee.value ? { "aria-labelledby": Ee.value } : {}
                )
              );
            }
            return he.value && (G.ariaFormat = ce.value), G;
          }),
          ae = rt(() => {
            let G = { id: k && k.value ? k.value : void 0 };
            return W.value && (G.disabled = !0), G;
          }),
          Ae = rt(() => Array.isArray(I.value)),
          me = () => {
            let G = R.value.get();
            return Array.isArray(G)
              ? G.map((_e) => parseFloat(_e))
              : parseFloat(G);
          },
          Ce = function (G) {
            let _e =
              !(arguments.length > 1 && arguments[1] !== void 0) ||
              arguments[1];
            R.value.set(G, _e);
          },
          Ve = (G) => {
            l.emit("input", G),
              l.emit("update:modelValue", G),
              l.emit("update", G);
          },
          lt = () => {
            (R.value = Nu.create(
              de.value,
              Object.assign({}, X.value, te.value)
            )),
              x.value &&
                Ae.value &&
                T.value >= 0 &&
                Y(de.value, T.value, " - "),
              R.value.on("set", () => {
                const G = me();
                l.emit("change", G), l.emit("set", G), B.value && Ve(G);
              }),
              R.value.on("update", () => {
                if (!ee.value) return;
                const G = me();
                (Ae.value && fa(I.value, G)) || (!Ae.value && I.value == G)
                  ? l.emit("update", G)
                  : B.value || Ve(G);
              }),
              R.value.on("start", () => {
                l.emit("start", me());
              }),
              R.value.on("end", () => {
                l.emit("end", me());
              }),
              R.value.on("slide", () => {
                l.emit("slide", me());
              }),
              R.value.on("drag", () => {
                l.emit("drag", me());
              }),
              de.value.querySelectorAll("[data-handle]").forEach((G) => {
                (G.onblur = () => {
                  de.value &&
                    be.value.focused.split(" ").forEach((_e) => {
                      de.value.classList.remove(_e);
                    });
                }),
                  (G.onfocus = () => {
                    be.value.focused.split(" ").forEach((_e) => {
                      de.value.classList.add(_e);
                    });
                  });
              }),
              (ee.value = !0);
          },
          gt = () => {
            R.value.off(), R.value.destroy(), (R.value = null);
          },
          De = (G, _e) => {
            (ee.value = !1), gt(), lt();
          };
        return (
          Wa(lt),
          or(gt),
          We(Ae, De, { immediate: !1 }),
          We(j, De, { immediate: !1 }),
          We(y, De, { immediate: !1 }),
          We(A, De, { immediate: !1 }),
          We(d, De, { immediate: !1 }),
          We(b, De, { immediate: !1 }),
          We(x, De, { immediate: !1 }),
          We(T, De, { immediate: !1 }),
          We(he, De, { immediate: !1, deep: !0 }),
          We(te, De, { immediate: !1, deep: !0 }),
          We(se, De, { immediate: !1, deep: !0 }),
          We(
            I,
            (G, _e) => {
              _e &&
                ((typeof _e == "object" &&
                  typeof G == "object" &&
                  G &&
                  Object.keys(_e) > Object.keys(G)) ||
                  (typeof _e == "object" && typeof G != "object") ||
                  Vn(G)) &&
                De();
            },
            { immediate: !1 }
          ),
          We(
            I,
            (G) => {
              if (Vn(G)) return void Ce(j.value, !1);
              let _e = me();
              Ae.value && !Array.isArray(_e) && (_e = [_e]),
                ((Ae.value && !fa(G, _e)) || (!Ae.value && G != _e)) &&
                  Ce(G, !1);
            },
            { deep: !0 }
          ),
          {
            slider: de,
            slider$: R,
            isRange: Ae,
            sliderProps: ae,
            init: lt,
            destroy: gt,
            refresh: De,
            update: Ce,
            reset: () => {
              Ve(M.value);
            },
          }
        );
      })(e, t, {
        value: n.value,
        initialValue: n.initialValue,
        tooltipFormat: r.tooltipFormat,
        tooltipsFormat: r.tooltipsFormat,
        tooltipsMerge: r.tooltipsMerge,
        classList: s.classList,
      });
    return { ...s, ...r, ...a };
  },
};
(Gs.render = function (e, t, n, s, r, a) {
  return je(), Be("div", fr(e.sliderProps, { ref: "slider" }), null, 16);
}),
  (Gs.__file = "src/Slider.vue");
var Mu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gi = { exports: {} };
(function (e, t) {
  (function (n, s) {
    s(e);
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Mu,
    function (n) {
      var s, r;
      if (
        !(
          (r = (s = globalThis.chrome) == null ? void 0 : s.runtime) != null &&
          r.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension."
        );
      if (
        typeof globalThis.browser > "u" ||
        Object.getPrototypeOf(globalThis.browser) !== Object.prototype
      ) {
        const a = "The message port closed before a response was received.",
          o = (l) => {
            const m = {
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
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
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
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
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
            if (Object.keys(m).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill"
              );
            class d extends WeakMap {
              constructor(M, Z = void 0) {
                super(Z), (this.createItem = M);
              }
              get(M) {
                return (
                  this.has(M) || this.set(M, this.createItem(M)), super.get(M)
                );
              }
            }
            const b = (I) =>
                I && typeof I == "object" && typeof I.then == "function",
              x =
                (I, M) =>
                (...Z) => {
                  l.runtime.lastError
                    ? I.reject(new Error(l.runtime.lastError.message))
                    : M.singleCallbackArg ||
                      (Z.length <= 1 && M.singleCallbackArg !== !1)
                    ? I.resolve(Z[0])
                    : I.resolve(Z);
                },
              A = (I) => (I == 1 ? "argument" : "arguments"),
              j = (I, M) =>
                function (Y, ...ce) {
                  if (ce.length < M.minArgs)
                    throw new Error(
                      `Expected at least ${M.minArgs} ${A(
                        M.minArgs
                      )} for ${I}(), got ${ce.length}`
                    );
                  if (ce.length > M.maxArgs)
                    throw new Error(
                      `Expected at most ${M.maxArgs} ${A(
                        M.maxArgs
                      )} for ${I}(), got ${ce.length}`
                    );
                  return new Promise((be, de) => {
                    if (M.fallbackToNoCallback)
                      try {
                        Y[I](...ce, x({ resolve: be, reject: de }, M));
                      } catch (R) {
                        console.warn(
                          `${I} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          R
                        ),
                          Y[I](...ce),
                          (M.fallbackToNoCallback = !1),
                          (M.noCallback = !0),
                          be();
                      }
                    else
                      M.noCallback
                        ? (Y[I](...ce), be())
                        : Y[I](...ce, x({ resolve: be, reject: de }, M));
                  });
                },
              y = (I, M, Z) =>
                new Proxy(M, {
                  apply(Y, ce, be) {
                    return Z.call(ce, I, ...be);
                  },
                });
            let T = Function.call.bind(Object.prototype.hasOwnProperty);
            const k = (I, M = {}, Z = {}) => {
                let Y = Object.create(null),
                  ce = {
                    has(de, R) {
                      return R in I || R in Y;
                    },
                    get(de, R, ee) {
                      if (R in Y) return Y[R];
                      if (!(R in I)) return;
                      let X = I[R];
                      if (typeof X == "function")
                        if (typeof M[R] == "function") X = y(I, I[R], M[R]);
                        else if (T(Z, R)) {
                          let ae = j(R, Z[R]);
                          X = y(I, I[R], ae);
                        } else X = X.bind(I);
                      else if (
                        typeof X == "object" &&
                        X !== null &&
                        (T(M, R) || T(Z, R))
                      )
                        X = k(X, M[R], Z[R]);
                      else if (T(Z, "*")) X = k(X, M[R], Z["*"]);
                      else
                        return (
                          Object.defineProperty(Y, R, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return I[R];
                            },
                            set(ae) {
                              I[R] = ae;
                            },
                          }),
                          X
                        );
                      return (Y[R] = X), X;
                    },
                    set(de, R, ee, X) {
                      return R in Y ? (Y[R] = ee) : (I[R] = ee), !0;
                    },
                    defineProperty(de, R, ee) {
                      return Reflect.defineProperty(Y, R, ee);
                    },
                    deleteProperty(de, R) {
                      return Reflect.deleteProperty(Y, R);
                    },
                  },
                  be = Object.create(I);
                return new Proxy(be, ce);
              },
              W = (I) => ({
                addListener(M, Z, ...Y) {
                  M.addListener(I.get(Z), ...Y);
                },
                hasListener(M, Z) {
                  return M.hasListener(I.get(Z));
                },
                removeListener(M, Z) {
                  M.removeListener(I.get(Z));
                },
              }),
              te = new d((I) =>
                typeof I != "function"
                  ? I
                  : function (Z) {
                      const Y = k(
                        Z,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } }
                      );
                      I(Y);
                    }
              ),
              se = new d((I) =>
                typeof I != "function"
                  ? I
                  : function (Z, Y, ce) {
                      let be = !1,
                        de,
                        R = new Promise((Ae) => {
                          de = function (me) {
                            (be = !0), Ae(me);
                          };
                        }),
                        ee;
                      try {
                        ee = I(Z, Y, de);
                      } catch (Ae) {
                        ee = Promise.reject(Ae);
                      }
                      const X = ee !== !0 && b(ee);
                      if (ee !== !0 && !X && !be) return !1;
                      const ae = (Ae) => {
                        Ae.then(
                          (me) => {
                            ce(me);
                          },
                          (me) => {
                            let Ce;
                            me &&
                            (me instanceof Error ||
                              typeof me.message == "string")
                              ? (Ce = me.message)
                              : (Ce = "An unexpected error occurred"),
                              ce({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: Ce,
                              });
                          }
                        ).catch((me) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            me
                          );
                        });
                      };
                      return ae(X ? ee : R), !0;
                    }
              ),
              he = ({ reject: I, resolve: M }, Z) => {
                l.runtime.lastError
                  ? l.runtime.lastError.message === a
                    ? M()
                    : I(new Error(l.runtime.lastError.message))
                  : Z && Z.__mozWebExtensionPolyfillReject__
                  ? I(new Error(Z.message))
                  : M(Z);
              },
              B = (I, M, Z, ...Y) => {
                if (Y.length < M.minArgs)
                  throw new Error(
                    `Expected at least ${M.minArgs} ${A(
                      M.minArgs
                    )} for ${I}(), got ${Y.length}`
                  );
                if (Y.length > M.maxArgs)
                  throw new Error(
                    `Expected at most ${M.maxArgs} ${A(
                      M.maxArgs
                    )} for ${I}(), got ${Y.length}`
                  );
                return new Promise((ce, be) => {
                  const de = he.bind(null, { resolve: ce, reject: be });
                  Y.push(de), Z.sendMessage(...Y);
                });
              },
              Ee = {
                devtools: { network: { onRequestFinished: W(te) } },
                runtime: {
                  onMessage: W(se),
                  onMessageExternal: W(se),
                  sendMessage: B.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: B.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              pe = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (m.privacy = {
                network: { "*": pe },
                services: { "*": pe },
                websites: { "*": pe },
              }),
              k(l, Ee, m)
            );
          };
        n.exports = o(chrome);
      } else n.exports = globalThis.browser;
    }
  );
})(gi);
var Tu = gi.exports;
const Pu = Cu(Tu);
var ue = Pu;
class qn {
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
      ? qn.isYouTubeMobile()
      : qn.isMobile();
  }
  static isMobile() {
    return "ontouchstart" in document.documentElement;
  }
  static isFirefoxMobile() {
    return this.isMobile() && !1;
  }
}
var Ys = {
  name: "Toggle",
  emits: ["input", "update:modelValue", "change"],
  props: {
    value: {
      validator: function (e) {
        return (t) =>
          ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
      },
      required: !1,
    },
    modelValue: {
      validator: function (e) {
        return (t) =>
          ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
      },
      required: !1,
    },
    id: { type: [String, Number], required: !1, default: "toggle" },
    name: { type: [String, Number], required: !1, default: "toggle" },
    disabled: { type: Boolean, required: !1, default: !1 },
    required: { type: Boolean, required: !1, default: !1 },
    falseValue: { type: [String, Number, Boolean], required: !1, default: !1 },
    trueValue: { type: [String, Number, Boolean], required: !1, default: !0 },
    onLabel: { type: [String, Object], required: !1, default: "" },
    offLabel: { type: [String, Object], required: !1, default: "" },
    classes: { type: Object, required: !1, default: () => ({}) },
    labelledby: { type: String, required: !1 },
    describedby: { type: String, required: !1 },
    aria: { required: !1, type: Object, default: () => ({}) },
  },
  setup(e, t) {
    const n = (function (o, l, m) {
        const {
            value: d,
            modelValue: b,
            falseValue: x,
            trueValue: A,
            disabled: j,
          } = Pt(o),
          y = b && b.value !== void 0 ? b : d,
          T = rt(() => y.value === A.value),
          k = (se) => {
            l.emit("input", se),
              l.emit("update:modelValue", se),
              l.emit("change", se);
          },
          W = () => {
            k(A.value);
          },
          te = () => {
            k(x.value);
          };
        return (
          [null, void 0, !1, 0, "0", "off"].indexOf(y.value) !== -1 &&
            [x.value, A.value].indexOf(y.value) === -1 &&
            te(),
          [!0, 1, "1", "on"].indexOf(y.value) !== -1 &&
            [x.value, A.value].indexOf(y.value) === -1 &&
            W(),
          {
            externalValue: y,
            checked: T,
            update: k,
            check: W,
            uncheck: te,
            handleInput: (se) => {
              k(se.target.checked ? A.value : x.value);
            },
            handleClick: () => {
              j.value || (T.value ? te() : W());
            },
          }
        );
      })(e, t),
      s = (function (o, l, m) {
        const { trueValue: d, falseValue: b, onLabel: x, offLabel: A } = Pt(o),
          j = m.checked,
          y = m.update;
        return {
          label: rt(() => {
            let T = j.value ? x.value : A.value;
            return T || (T = "&nbsp;"), T;
          }),
          toggle: () => {
            y(j.value ? b.value : d.value);
          },
          on: () => {
            y(d.value);
          },
          off: () => {
            y(b.value);
          },
        };
      })(e, 0, { checked: n.checked, update: n.update }),
      r = (function (o, l, m) {
        const d = Pt(o),
          b = d.disabled,
          x = m.checked,
          A = rt(() => ({
            container: "toggle-container",
            toggle: "toggle",
            toggleOn: "toggle-on",
            toggleOff: "toggle-off",
            toggleOnDisabled: "toggle-on-disabled",
            toggleOffDisabled: "toggle-off-disabled",
            handle: "toggle-handle",
            handleOn: "toggle-handle-on",
            handleOff: "toggle-handle-off",
            handleOnDisabled: "toggle-handle-on-disabled",
            handleOffDisabled: "toggle-handle-off-disabled",
            label: "toggle-label",
            ...d.classes.value,
          }));
        return {
          classList: rt(() => ({
            container: A.value.container,
            toggle: [
              A.value.toggle,
              b.value
                ? x.value
                  ? A.value.toggleOnDisabled
                  : A.value.toggleOffDisabled
                : x.value
                ? A.value.toggleOn
                : A.value.toggleOff,
            ],
            handle: [
              A.value.handle,
              b.value
                ? x.value
                  ? A.value.handleOnDisabled
                  : A.value.handleOffDisabled
                : x.value
                ? A.value.handleOn
                : A.value.handleOff,
            ],
            label: A.value.label,
          })),
        };
      })(e, 0, { checked: n.checked }),
      a = (function (o, l, m) {
        const { disabled: d } = Pt(o),
          b = m.check,
          x = m.uncheck,
          A = m.checked;
        return {
          handleSpace: () => {
            d.value || (A.value ? x() : b());
          },
        };
      })(e, 0, { check: n.check, uncheck: n.uncheck, checked: n.checked });
    return { ...n, ...r, ...s, ...a };
  },
};
const Ou = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"],
  Iu = ["id", "name", "value", "checked", "disabled"],
  ku = ["innerHTML"],
  Lu = ["checked"];
(Ys.render = function (e, t, n, s, r, a) {
  return (
    je(),
    Be(
      "div",
      fr(
        {
          class: e.classList.container,
          tabindex: n.disabled ? void 0 : 0,
          "aria-checked": e.checked,
          "aria-describedby": n.describedby,
          "aria-labelledby": n.labelledby,
          role: "switch",
        },
        n.aria,
        {
          onKeypress:
            t[1] ||
            (t[1] = jt(
              Xt((...o) => e.handleSpace && e.handleSpace(...o), ["prevent"]),
              ["space"]
            )),
        }
      ),
      [
        $t(
          E(
            "input",
            {
              type: "checkbox",
              id: n.id,
              name: n.name,
              value: n.trueValue,
              checked: e.checked,
              disabled: n.disabled,
            },
            null,
            8,
            Iu
          ),
          [[Ks, !1]]
        ),
        E(
          "div",
          {
            class: dt(e.classList.toggle),
            onClick:
              t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o)),
          },
          [
            E("span", { class: dt(e.classList.handle) }, null, 2),
            Ja(
              e.$slots,
              "label",
              { checked: e.checked, classList: e.classList },
              () => [
                E(
                  "span",
                  { class: dt(e.classList.label), innerHTML: e.label },
                  null,
                  10,
                  ku
                ),
              ]
            ),
            n.required
              ? (je(),
                Be(
                  "input",
                  {
                    key: 0,
                    type: "checkbox",
                    style: {
                      appearance: "none",
                      height: "1px",
                      margin: "0",
                      padding: "0",
                      fontSize: "0",
                      background: "transparent",
                      position: "absolute",
                      width: "100%",
                      bottom: "0",
                      outline: "none",
                    },
                    checked: e.checked,
                    "aria-hidden": "true",
                    tabindex: "-1",
                    required: "",
                  },
                  null,
                  8,
                  Lu
                ))
              : Mt("v-if", !0),
          ],
          2
        ),
      ],
      16,
      Ou
    )
  );
}),
  (Ys.__file = "src/Toggle.vue");
const Vu = {
    "en-IE": { 0: ["Emily"], 1: ["Connor"] },
    "ar-KW": { 0: ["Noura"], 1: ["Fahed"]},
    "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"]},
    "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
    "en-IN": {
      0: ["Neerja", "NeerjaExpressive"],
      1: ["Prabhat"]
    },
    "es-BO": { 0: ["Sofia"], 1: ["Marcelo"]},
    "ar-SY": { 0: ["Amany"], 1: ["Laith"]},
    "en-ZA": { 0: ["Leah"], 1: ["Luke"]},
    "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"]},
    "el-GR": { 0: ["Athina"], 1: ["Nestoras"]},
    "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"]},
    "zu-ZA": { 0: ["Thando"], 1: ["Themba"]},
    "ar-LB": { 0: ["Layla"], 1: ["Rami"]},
    "en-AU": { 0: ["Natasha"], 1: ["William"]},
    "he-IL": { 0: ["Hila"], 1: ["Avri"]},
    "mk-MK": { 0: ["Marija"], 1: ["Aleksandar"]},
    "ar-TN": { 0: ["Reem"], 1: ["Hedi"] },
    "ar-LY": { 0: ["Iman"], 1: ["Omar"] },
    "hu-HU": { 0: ["Noemi"], 1: ["Tamas"] },
    "ml-IN": { 0: ["Sobhana"], 1: ["Midhun"] },
    "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"]},
    "es-CR": { 0: ["Maria"], 1: ["Juan"]},
    "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
    "fr-CA": { 0: ["Sylvie"], 1: ["Antoine", "Jean"] },
    "es-CO": { 0: ["Salome"], 1: ["Gonzalo"]},
    "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
    "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
    "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
    "ar-EG": { 0: ["Salma"], 1: ["Shakir"] },
    "es-CU": { 0: ["Belkys"], 1: ["Manuel"]},
    "fr-BE": { 0: ["Charline"], 1: ["Gerard"]},
    "ga-IE": { 0: ["Orla"], 1: ["Colm"] },
    "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
    "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
    "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
    "ar-MA": { 0: ["Mouna"], 1: ["Jamal"] },
    "fil-PH": { 0: ["Blessica"], 1: ["Angelo"] },
    "ta-SG": { 0: ["Venba"], 1: ["Anbu"] },
    "en-KE": { 0: ["Asilia"], 1: ["Chilemba"]},
    "es-HN": { 0: ["Karla"], 1: ["Carlos"] },
    "nb-NO": { 0: ["Pernille"], 1: ["Finn"]},
    "hr-HR": { 0: ["Gabrijela"], 1: ["Srecko"]},
    "es-PR": { 0: ["Karina"], 1: ["Victor"] },
    "af-ZA": { 0: ["Adri"], 1: ["Willem"] },
    "gl-ES": { 0: ["Sabela"], 1: ["Roi"] },
    "es-PY": { 0: ["Tania"], 1: ["Mario"]},
    "de-AT": { 0: ["Ingrid"], 1: ["Jonas"] },
    "ta-LK": { 0: ["Saranya"], 1: ["Kumar"] },
    "is-IS": { 0: ["Gudrun"], 1: ["Gunnar"] },
    "my-MM": { 0: ["Nilar"], 1: ["Thiha"] },
    "bg-BG": { 0: ["Kalina"], 1: ["Borislav"] },
    "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"]},
    "en-PH": { 0: ["Rosa"], 1: ["James"] },
    "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
    "zh-TW": {
      0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
      1: ["zh-TW-YunJheNeural"]
    },
    "en-HK": { 0: ["Yan"], 1: ["Sam"]},
    "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
    "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"]},
    "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"]},
    "ar-OM": { 0: ["Aysha"], 1: ["Abdullah"]},
    "ru-RU": { 0: ["Svetlana"], 1: ["Dmitry"]},
    "sq-AL": { 0: ["Anila"], 1: ["Ilir"]},
    "es-AR": { 0: ["Elena"], 1: ["Tomas"]},
    "sv-SE": { 0: ["Sofie"], 1: ["Mattias"]},
    "am-ET": { 0: ["Mekdes"], 1: ["Ameha"] },
    "mr-IN": { 0: ["Aarohi"], 1: ["Manohar"]},
    "da-DK": { 0: ["Christel"], 1: ["Jeppe"]},
    "mn-MN": { 0: ["Yesui"], 1: ["Bataa"]},
    "uk-UA": { 0: ["Polina"], 1: ["Ostap"] },
    "en-US": {
      0: ["Michelle", "Ana", "Aria", "Jenny"],
      1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"]
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
    "te-IN": { 0: ["Shruti"], 1: ["Mohan"]},
    "hi-IN": { 0: ["Swara"], 1: ["Madhur"] },
    "en-NG": { 0: ["Ezinne"], 1: ["Abeo"] },
    "de-CH": { 0: ["Leni"], 1: ["Jan"] },
    "ja-JP": { 0: ["Nanami"], 1: ["Keita"] },
    "bs-BA": { 0: ["Vesna"], 1: ["Goran"] },
    "ar-YE": { 0: ["Maryam"], 1: ["Saleh"] },
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
      1: ["Thomas", "Ryan"]
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
    "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"]},
    "es-EC": { 0: ["Andrea"], 1: ["Luis"]},
    "es-US": { 0: ["Paloma"], 1: ["Alonso"] },
    "kn-IN": { 0: ["Sapna"], 1: ["Gagan"]},
    "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"]},
    "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"]},
    "ca-ES": { 0: ["Joana"], 1: ["Enric"] },
    "de-DE": { 0: ["Katja", "Amala"], 1: ["Conrad", "Killian"]},
    "zh-HK": {
      0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
      1: ["zh-HK-WanLungNeural"]
    },
    "pt-BR": { 0: ["Francisca"], 1: ["Antonio"]},
    "sr-RS": { 0: ["Sophie"], 1: ["Nicholas"] },
    "es-UY": { 0: ["Valentina"], 1: ["Mateo"] },
    "sw-KE": { 0: ["Zuri"], 1: ["Rafiki"]},
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
    "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
    "es-NI": { 0: ["Yolanda"], 1: ["Federico"]},
    "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
  },
  Ru = {
    "en-IE": { 0: ["Emily"], 1: ["Connor"]},
    "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
    "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"]},
    "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
    "en-IN": {
      0: ["Neerja", "NeerjaExpressive"],
      1: ["Prabhat"]
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
    "es-SV": { 0: ["Lorena"], 1: ["Rodrigo"]},
    "es-CR": { 0: ["Maria"], 1: ["Juan"] },
    "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"] },
    "fr-CA": {
      0: ["Sylvie"],
      1: ["Antoine", "Jean"]
    },
    "es-CO": { 0: ["Salome"], 1: ["Gonzalo"] },
    "jv-ID": { 0: ["Siti"], 1: ["Dimas"] },
    "pl-PL": { 0: ["Zofia"], 1: ["Marek"] },
    "pt-PT": { 0: ["Raquel"], 1: ["Duarte"] },
    "ar-EG": { 0: ["Salma"], 1: ["Shakir"] },
    "es-CU": { 0: ["Belkys"], 1: ["Manuel"] },
    "fr-BE": { 0: ["Charline"], 1: ["Gerard"]},
    "ga-IE": { 0: ["Orla"], 1: ["Colm"] },
    "cy-GB": { 0: ["Nia"], 1: ["Aled"] },
    "ar-DZ": { 0: ["Amina"], 1: ["Ismael"] },
    "en-SG": { 0: ["Luna"], 1: ["Wayne"] },
    "ar-MA": { 0: ["Mouna"], 1: ["Jamal"]},
    "fil-PH": {
      0: ["Blessica"],
      1: ["Angelo"]
    },
    "ta-SG": { 0: ["Venba"], 1: ["Anbu"]},
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
    "en-PH": { 0: ["Rosa"], 1: ["James"]},
    "uz-UZ": { 0: ["Madina"], 1: ["Sardor"] },
    "zh-TW": {
      0: ["zh-TW-HsiaoYuNeural", "zh-TW-HsiaoChenNeural"],
      1: ["zh-TW-YunJheNeural"]
    },
    "en-HK": { 0: ["Yan"], 1: ["Sam"]},
    "ko-KR": { 0: ["SunHi"], 1: ["InJoon"] },
    "sk-SK": { 0: ["Viktoria"], 1: ["Lukas"]},
    "ps-AF": { 0: ["Latifa"], 1: ["GulNawaz"]},
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
      1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"]
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
      ]
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
    "ar-QA": { 0: ["Amal"], 1: ["Moaz"]},
    "es-GT": { 0: ["Marta"], 1: ["Andres"] },
    "es-GQ": { 0: ["Teresa"], 1: ["Javier"] },
    "es-PE": { 0: ["Camila"], 1: ["Alex"] },
    "en-NZ": { 0: ["Molly"], 1: ["Mitchell"]},
    "fa-IR": { 0: ["Dilara"], 1: ["Farid"] },
    "es-PA": { 0: ["Margarita"], 1: ["Roberto"] },
    "ro-RO": { 0: ["Alina"], 1: ["Emil"] },
    "mt-MT": { 0: ["Grace"], 1: ["Joseph"] },
    "et-EE": { 0: ["Anu"], 1: ["Kert"] },
    "tr-TR": { 0: ["Emel"], 1: ["Ahmet"] },
    "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"]},
    "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"] },
    "en-GB": {
      0: ["Maisie", "Libby", "Sonia"],
      1: ["Thomas", "Ryan"]
    },
    "km-KH": { 0: ["Sreymom"], 1: ["Piseth"]},
    "fi-FI": { 0: ["Noora"], 1: ["Harri"] },
    "az-AZ": { 0: ["Banu"], 1: ["Babek"] },
    "en-CA": { 0: ["Clara"], 1: ["Liam"] },
    "lt-LT": { 0: ["Ona"], 1: ["Leonas"]},
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
      1: ["Conrad", "Killian"]
    },
    "zh-HK": {
      0: ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural"],
      1: ["zh-HK-WanLungNeural"]
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
    "th-TH": { 0: ["Premwadee"], 1: ["Niwat"]},
  },
  Hu = {
    "en-IE": { 0: ["Emily"], 1: ["Connor"]},
    "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
    "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"]},
    "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
    "en-IN": {
      0: ["Neerja", "NeerjaExpressive"],
      1: ["Prabhat"],
  
    },
    "es-BO": { 0: ["Sofia"], 1: ["Marcelo"]},
    "ar-SY": { 0: ["Amany"], 1: ["Laith"] },
    "en-ZA": { 0: ["Leah"], 1: ["Luke"]},
    "ta-IN": { 0: ["Pallavi"], 1: ["Valluvar"] },
    "el-GR": { 0: ["Athina"], 1: ["Nestoras"] },
    "nl-NL": { 0: ["Fenna", "Colette"], 1: ["Maarten"] },
    "zu-ZA": { 0: ["Thando"], 1: ["Themba"]},
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
    "es-CL": { 0: ["Catalina"], 1: ["Lorenzo"]},
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
    "cs-CZ": { 0: ["Vlasta"], 1: ["Antonin"]},
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
    "hi-IN": { 0: ["Swara"], 1: ["Madhur"]},
    "en-NG": { 0: ["Ezinne"], 1: ["Abeo"] },
    "de-CH": { 0: ["Leni"], 1: ["Jan"] },
    "ja-JP": { 0: ["Nanami"], 1: ["Keita"] },
    "bs-BA": { 0: ["Vesna"], 1: ["Goran"]},
    "ar-YE": { 0: ["Maryam"], 1: ["Saleh"] },
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
    "tr-TR": { 0: ["Emel"], 1: ["Ahmet"]},
    "fr-FR": { 0: ["Denise", "Eloise"], 1: ["Henri"] },
    "vi-VN": { 0: ["HoaiMy"], 1: ["NamMinh"] },
    "en-GB": {
      0: ["Maisie", "Libby", "Sonia"],
      1: ["Thomas", "Ryan"],
      
    },
    "km-KH": { 0: ["Sreymom"], 1: ["Piseth"]},
    "fi-FI": { 0: ["Noora"], 1: ["Harri"] },
    "az-AZ": { 0: ["Banu"], 1: ["Babek"] },
    "en-CA": { 0: ["Clara"], 1: ["Liam"] },
    "lt-LT": { 0: ["Ona"], 1: ["Leonas"] },
    "ar-AE": { 0: ["Fatima"], 1: ["Hamdan"]},
    "sl-SI": { 0: ["Petra"], 1: ["Rok"] },
    "es-DO": { 0: ["Ramona"], 1: ["Emilio"] },
    "ar-IQ": { 0: ["Rana"], 1: ["Bassel"] },
    "bn-IN": { 0: ["Tanishaa"], 1: ["Bashkar"] },
    "si-LK": { 0: ["Thilini"], 1: ["Sameera"] },
    "fr-CH": { 0: ["Ariane"], 1: ["Fabrice"] },
    "es-EC": { 0: ["Andrea"], 1: ["Luis"]},
    "es-US": { 0: ["Paloma"], 1: ["Alonso"] },
    "kn-IN": { 0: ["Sapna"], 1: ["Gagan"] },
    "lo-LA": { 0: ["Keomany"], 1: ["Chanthavong"] },
    "ar-SA": { 0: ["Zariyah"], 1: ["Hamed"] },
    "ca-ES": { 0: ["Joana"], 1: ["Enric"] },
    "de-DE": { 0: ["Katja", "Amala"], 1: ["Conrad", "Killian"] },
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
    "su-ID": { 0: ["Tuti"], 1: ["Jajang"]},
    "es-MX": { 0: ["Dalia"], 1: ["Jorge"] },
    "it-IT": { 0: ["Elsa", "Isabella"], 1: ["Diego"] },
    "ur-IN": { 0: ["Gul"], 1: ["Salman"] },
    "bn-BD": { 0: ["Nabanita"], 1: ["Pradeep"] },
    "id-ID": { 0: ["Gadis"], 1: ["Ardi"] },
    "es-NI": { 0: ["Yolanda"], 1: ["Federico"] },
    "th-TH": { 0: ["Premwadee"], 1: ["Niwat"] },
  },
  Fu = {
    "en-IE": { 0: ["Emily"], 1: ["Connor"] },
    "ar-KW": { 0: ["Noura"], 1: ["Fahed"] },
    "sw-TZ": { 0: ["Rehema"], 1: ["Daudi"] },
    "ms-MY": { 0: ["Yasmin"], 1: ["Osman"] },
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
    "fr-CA": { 0: ["Sylvie"], 1: ["Antoine", "Jean"], name: "Canada(French)" },
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
    "fil-PH": { 0: ["Blessica"], 1: ["Angelo"], name: "Philippines(Filipino)" },
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
class Du {
  constructor() {
    Cn(this, "_toLanguage");
    Cn(this, "_voice");
    Cn(this, "_voiceMap");
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
    const t = ue.i18n.getMessage("@@ui_locale");
    return t.startsWith("zh") ? Vu : t === "ja" ? Ru : t === "ko" ? Hu : Fu;
  }
  initDefaultTargetLanguage() {
    const t = ue.i18n.getMessage("@@ui_locale").replace("_", "-");
    console.log("ui_locale: " + t);
    const n = this._voiceMap[t];
    if ((console.log("voiceEntry: " + JSON.stringify(n)), n)) return t;
    for (let s in this._voiceMap) if (s.startsWith(t)) return s;
    return "en-US";
  }
  initDefaultSelectedVoice() {
    return this._voiceMap[this._toLanguage][1][0];
  }
}
const jn = new Du(),
  bn = jn.voiceMap,
  ju = {
    "zh-TW-HsiaoYuNeural": "",
    "zh-TW-HsiaoChenNeural": "",
    "zh-TW-YunJheNeural": "",
    "zh-HK-HiuGaaiNeural": "",
    "zh-HK-HiuMaanNeural": "",
    "zh-HK-WanLungNeural": "",
    "zh-CN-XiaoyiNeural": "",
    "zh-CN-XiaoxiaoNeural": "",
    "zh-CN-YunyangNeural": "",
    "zh-CN-YunxiaNeural": "",
    "zh-CN-YunxiNeural": "",
    "zh-CN-YunjianNeural": "",
  };
function Uu() {
  const e = [];
  for (let t in bn) e.push({ text: bn[t].name, value: t });
  return e;
}
const zu = { name: "youtube-dubbing-user", url: "https://yd.transduck.com/" },
  Ku = { name: "SESSION", url: "https://yd.transduck.com/" };
function Bu(e) {
  return e === null || e === "0" ? !0 : e === "1" ? !1 : JSON.parse(e);
}
function Gu(e) {
  return JSON.parse(e);
}
const Yu = {
    components: { ModelSelect: wu, Slider: Gs, Toggle: Ys },
    data() {
      return {
        options: Uu(),
        defaultLanguage: jn.toLanguage,
        fromSelectedOption: localStorage.getItem("fromLanguage") || "en-US",
        toSelectedOption: localStorage.getItem("language") || jn.toLanguage,
        selectedSex: localStorage.getItem("gender") || "1",
        originVolume: localStorage.getItem("originalVolume")
          ? Number(localStorage.getItem("originalVolume"))
          : 0,
        targetVolume: localStorage.getItem("translationVolume")
          ? Number(localStorage.getItem("translationVolume"))
          : 100,
        translateEngine: localStorage.getItem("translateEngine") ?? "google",
        selectedVoice: localStorage.getItem("voice") || jn.voice,
        selectedPauseVideo: Gu(localStorage.getItem("pauseVideo")) || !1,
        adjustmentModel: Bu(localStorage.getItem("adjustmentModel")),
        sourceLanguagesText: ue.i18n.getMessage("source_languages"),
        targetLanguagesText: ue.i18n.getMessage("target_languages"),
        sexText: ue.i18n.getMessage("sex"),
        voicesText: ue.i18n.getMessage("voices"),
        originalVolumeText: ue.i18n.getMessage("originalVolume"),
        targetVolumeText: ue.i18n.getMessage("targetVolume"),
        pageSwitchPauseText: ue.i18n.getMessage("pageSwitchPause"),
        manText: ue.i18n.getMessage("man"),
        womanText: ue.i18n.getMessage("woman"),
        inviteForPointsText: ue.i18n.getMessage("inviteForPoints"),
        pointsForMembershipText: ue.i18n.getMessage("pointsForMembership"),
        expirationDateText: ue.i18n.getMessage("expirationDate"),
        payText: ue.i18n.getMessage("pay"),
        membershipUpgradeText: ue.i18n.getMessage("membershipUpgrade"),
        userStatusText: ue.i18n.getMessage("userStatus"),
        memberUserText: ue.i18n.getMessage("memberUser"),
        regularUserText: ue.i18n.getMessage("regularUser"),
        welcomeText: ue.i18n.getMessage("welcome"),
        loginText: ue.i18n.getMessage("login"),
        logoutText: ue.i18n.getMessage("logout"),
        saveSettingsText: ue.i18n.getMessage("save_settings"),
        speedAdjustmentModeText: ue.i18n.getMessage("speedAdjustmentMode"),
        videoAudioAdjustmentText: ue.i18n.getMessage("videoAudioAdjustment"),
        audioSingleAdjustmentText: ue.i18n.getMessage("audioSingleAdjustment"),
        translateServiceText: ue.i18n.getMessage("translateService"),
        rechargeLimitText: ue.i18n.getMessage("rechargeLimit"),
        accountBalanceText: ue.i18n.getMessage("accountBalance"),
      };
    },
    setup() {
      const e = St(!1),
        t = St(null),
        n = St(null),
        s = St(null);
      return (
        ue.runtime.sendMessage({ method: "getPopupInfo" }).then((r) => {
          (t.value = r.username !== void 0 ? r.username : null),
            t.value !== null && (e.value = !0),
            (s.value = r),
            (n.value = r.balance);
        }),
        { usernameRef: t, membershipRef: s, balanceRef: n, showSettings: e }
      );
    },
    watch: {
      toSelectedOption(e, t) {
        const n = bn[this.toSelectedOption][this.selectedSex];
        this.selectedVoice = n[0];
      },
    },
    computed: {
      BrowserUtils() {
        return qn;
      },
      reloadVoices() {
        const e = bn[this.toSelectedOption][this.selectedSex],
          t = [];
        for (let n of e) t.push({ value: n, text: ju[n] || n });
        return t;
      },
      userRole() {
        return this.membershipRef === null
          ? ""
          : this.membershipRef.exists
          ? this.memberUserText
          : this.regularUserText;
      },
    },
    methods: {
      openInvitePage() {
        window.open(
          "https://yd.transduck.com/admin/settings/invite-dashboard",
          "_blank"
        );
      },
      openLoginPage() {
        window.open("https://yd.transduck.com/admin/signin", "_blank");
      },
      openPlanPage() {
        window.open("https://yd.transduck.com/admin/settings/plans", "_blank");
      },
      changeSex() {
        const e = bn[this.toSelectedOption][this.selectedSex];
        this.selectedVoice = e[0];
      },
      saveSettings() {
        localStorage.setItem("fromLanguage", this.fromSelectedOption),
          localStorage.setItem("language", this.toSelectedOption),
          localStorage.setItem("gender", this.selectedSex),
          localStorage.setItem("voice", this.selectedVoice),
          localStorage.setItem("pauseVideo", String(this.selectedPauseVideo)),
          localStorage.setItem("adjustmentModel", String(this.adjustmentModel)),
          localStorage.setItem("translateEngine", this.translateEngine);
        let e = this.selectedVoice;
        e.startsWith("zh-") || (e = this.toSelectedOption + "-" + e + "Neural");
        let t = {
          fromLanguage: this.fromSelectedOption,
          toLanguage: this.toSelectedOption,
          gender: this.selectedSex,
          voice: e,
          pauseVideo: this.selectedPauseVideo,
          adjustmentModel: this.adjustmentModel,
          translateEngine: this.translateEngine,
        };
        ue.storage.local.set({ settings: t }),
          ue.tabs.query({ active: !0, currentWindow: !0 }).then((n) => {
            n &&
              n.length > 0 &&
              (ue.tabs.sendMessage(n[0].id, {
                method: "reloadSettings",
                data: t,
              }),
              window.close());
          });
      },
      updateOriginVolume() {
        localStorage.setItem("originalVolume", String(this.originVolume));
        let e = { originalVolume: this.originVolume };
        ue.storage.local.set(e),
          ue.tabs.query({ active: !0, currentWindow: !0 }).then((t) => {
            t &&
              t.length > 0 &&
              ue.tabs.sendMessage(t[0].id, {
                method: "updateOriginVolume",
                data: e,
              });
          });
      },
      updateTargetVolume() {
        localStorage.setItem("translationVolume", String(this.targetVolume));
        let e = { translationVolume: this.targetVolume };
        ue.storage.local.set(e),
          ue.tabs.query({ active: !0, currentWindow: !0 }).then((t) => {
            t &&
              t.length > 0 &&
              ue.tabs.sendMessage(t[0].id, {
                method: "updateTargetVolume",
                data: e,
              });
          });
      },
      logout() {
        ue.cookies.remove(Ku),
          ue.cookies.remove(zu),
          this.usernameRef && (this.usernameRef = null);
      },
    },
  },
  Wu = "/assets/16-ZirygNa3.png",
  qu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Ju = { class: "bg-purple-200" },
  Zu = { class: "bg-purple-500 shadow-md" },
  $u = { class: "relative flex h-10 items-center" },
  Xu = E(
    "div",
    { class: "flex items-center" },
    [
      E("div", { class: "flex items-center ml-2" }, [
        E("img", { class: "h-8 w-auto", src: Wu, alt: "Your Company" }),
        E("label", { class: "ml-5 text-white" }, "YouTube Dubbing"),
      ]),
    ],
    -1
  ),
  Qu = { class: "ml-auto flex items-center" },
  ec = E("span", { class: "absolute -inset-1.5" }, null, -1),
  tc = E("span", { class: "sr-only" }, "View notifications", -1),
  nc = E(
    "svg",
    {
      t: "1712566225363",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2943",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "24",
      height: "24",
    },
    [
      E("path", {
        d: "M899.5 413.4h-85c-23.8 0-35.7-28.7-18.9-45.5l60.1-60.1c10.4-10.4 10.4-27.3 0-37.7L754 168.3c-5.2-5.2-12-7.8-18.9-7.8-6.8 0-13.7 2.6-18.9 7.8l-60.1 60.1c-5.4 5.4-12.1 7.9-18.7 7.9-13.7 0-26.9-10.6-26.9-26.7v-85c0.1-14.8-11.8-26.7-26.6-26.7H440.1c-14.7 0-26.7 11.9-26.7 26.7v85c0 16.1-13.2 26.7-26.9 26.7-6.6 0-13.2-2.4-18.7-7.9l-60.1-60.1c-5.2-5.2-12-7.8-18.9-7.8-6.9 0-13.7 2.6-18.9 7.8L168.3 270c-10.4 10.4-10.4 27.3 0 37.7l60.1 60.1c16.8 16.8 4.9 45.5-18.9 45.5h-85c-14.7 0-26.7 11.9-26.7 26.7v143.9c0 14.7 11.9 26.7 26.7 26.7h85c23.8 0 35.7 28.7 18.9 45.5l-60.1 60.1c-10.4 10.4-10.4 27.3 0 37.7L270 855.7c5.2 5.2 12 7.8 18.9 7.8 6.9 0 13.7-2.6 18.9-7.8l60.1-60.1c5.4-5.4 12.1-7.9 18.7-7.9 13.7 0 26.9 10.6 26.9 26.7v85c0 14.7 11.9 26.7 26.7 26.7h143.9c14.7 0 26.7-11.9 26.7-26.7v-85c0-16.1 13.2-26.7 26.9-26.7 6.6 0 13.2 2.4 18.7 7.9l60.1 60.1c5.2 5.2 12 7.8 18.9 7.8 6.8 0 13.7-2.6 18.9-7.8L855.7 754c10.4-10.4 10.4-27.3 0-37.7l-60.1-60.1c-16.8-16.8-4.9-45.5 18.9-45.5h85c14.7 0 26.7-11.9 26.7-26.7V440.1c0-14.7-11.9-26.7-26.7-26.7z m-12.8 157.8h-72.2c-26.8 0-50.8 16-61.1 40.8s-4.6 53.1 14.3 72.1l51.1 51.1-83.7 83.7-51.1-51.2c-12.5-12.5-29.1-19.4-46.6-19.4-16.9 0-33.1 6.4-45.5 18-13.4 12.5-20.8 29.7-20.8 48.2v72.2H452.8v-72.2c0-18.6-7.4-35.7-20.8-48.2-12.4-11.6-28.6-18-45.5-18-17.5 0-34 6.9-46.6 19.4l-51.1 51.1-83.7-83.7 51.1-51.1c19-19 24.6-47.3 14.3-72.1s-34.2-40.8-61.1-40.8h-72.2V452.8h72.2c26.8 0 50.8-16 61.1-40.8 10.3-24.8 4.6-53.1-14.3-72.1l-51.1-51.1 83.7-83.7 51.1 51.1c12.5 12.5 29.1 19.4 46.6 19.4 16.9 0 33.1-6.4 45.5-18 13.4-12.5 20.8-29.7 20.8-48.2v-72.2h118.4v72.3c0 18.6 7.4 35.7 20.8 48.2 12.4 11.6 28.6 18 45.5 18 17.5 0 34-6.9 46.6-19.4l51.1-51.1 83.7 83.7-51.2 51.1c-19 19-24.6 47.3-14.3 72.1s34.2 40.8 61.1 40.8h72.2v118.3z",
        "p-id": "2944",
      }),
      E("path", {
        d: "M512 354.2c-87.1 0-157.8 70.6-157.8 157.8 0 87.1 70.6 157.8 157.8 157.8 87.1 0 157.8-70.6 157.8-157.8 0-87.1-70.7-157.8-157.8-157.8z m83.7 241.6c-22.4 22.4-52.1 34.7-83.7 34.7s-61.3-12.3-83.7-34.7c-22.3-22.3-34.7-52.1-34.7-83.7s12.3-61.3 34.7-83.7 52.1-34.7 83.7-34.7 61.3 12.3 83.7 34.7c22.3 22.3 34.7 52.1 34.7 83.7s-12.3 61.3-34.7 83.7z",
        "p-id": "2945",
      }),
      E("path", {
        d: "M512 314.8c-108.9 0-197.2 88.3-197.2 197.2S403.1 709.2 512 709.2 709.2 620.9 709.2 512 620.9 314.8 512 314.8z m125.5 322.7c-33.5 33.5-78.1 52-125.5 52s-92-18.5-125.5-52-52-78.1-52-125.5 18.5-92 52-125.5 78.1-52 125.5-52c47.4 0 92 18.5 125.5 52s52 78.1 52 125.5-18.5 92-52 125.5z",
        "p-id": "2946",
      }),
    ],
    -1
  ),
  sc = [ec, tc, nc],
  rc = { class: "relative ml-3" },
  ac = E("span", { class: "absolute -inset-1.5" }, null, -1),
  ic = E("span", { class: "sr-only" }, "Open user menu", -1),
  oc = E(
    "svg",
    {
      t: "1712565434179",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6816",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "24",
      height: "24",
    },
    [
      E("path", {
        d: "M829.7 750.9L661 682.1s-32.2-13-44.7-25.9c-8-8.3-7.4-27.8-0.4-52.6 7.1-24.9 93.5-126 93.5-217.9 0-141.9-89.1-256.9-199.1-256.9s-199.1 115-199.1 256.9c0 88 77 192.9 86.6 212 9.5 19 7.2 48.1-0.3 56.9-11.3 13.2-52.5 26.5-52.5 26.5l-152 70.8c-35.5 13.3-63.3 48.4-63.3 88v18.7c0 43.2 33.5 69.6 74.7 69.6h614c41.2 0 74.7-26.4 74.7-69.6v-18.7c0-39.5-27.9-75.7-63.4-89z m0 0",
        fill: "#666666",
        "p-id": "6817",
      }),
    ],
    -1
  ),
  lc = [ac, ic, oc],
  uc = { class: "flex flex-row text-base m-2 leading-loose" },
  cc = { class: "basis-1/2 ml-2" },
  fc = { for: "fromLanguage", class: "text-left font-medium text-gray-900" },
  mc = { class: "basis-1/2 ml-2" },
  dc = { for: "language", class: "text-left font-medium text-gray-900" },
  hc = { class: "flex flex-row text-base m-2 leading-loose" },
  gc = { class: "basis-1/2" },
  pc = { for: "gender", class: "text-left font-medium text-gray-900 ml-2" },
  bc = { value: "1" },
  vc = { value: "0" },
  xc = { class: "basis-1/2" },
  Ac = { for: "voice", class: "text-left font-medium text-gray-900 ml-2" },
  yc = ["value"],
  Sc = { class: "flex flex-row text-base m-2 items-center leading-loose" },
  _c = { class: "basis-1/4" },
  wc = { class: "text-left font-medium text-gray-900 ml-2" },
  Ec = { class: "basis-3/4" },
  Nc = E("option", { value: "google" }, "google", -1),
  Mc = { value: "openai" },
  Cc = { key: 0 },
  Tc = { class: "flex flex-row text-base m-2 items-center leading-loose" },
  Pc = { class: "basis-1/4" },
  Oc = {
    for: "originalVolume",
    class: "text-left font-medium text-gray-900 ml-2",
  },
  Ic = { class: "basis-3/4" },
  kc = { class: "flex flex-row text-base m-2 items-center leading-loose" },
  Lc = { class: "basis-1/4" },
  Vc = {
    for: "translationVolume",
    class: "text-left font-medium text-gray-900 ml-2",
  },
  Rc = { class: "basis-3/4" },
  Hc = { class: "flex flex-row text-base m-2 leading-loose" },
  Fc = { class: "basis-1/2" },
  Dc = { for: "gender", class: "text-left font-medium text-gray-900 ml-2" },
  jc = { class: "basis-1/2 flex justify-end" },
  Uc = { class: "flex flex-row text-base m-2 leading-loose" },
  zc = { class: "basis-1/2" },
  Kc = { for: "gender", class: "text-left font-medium text-gray-900 ml-2" },
  Bc = { class: "basis-1/2 flex justify-end" },
  Gc = { class: "flex flex-row text-base m-2 leading-loose" },
  Yc = { key: 0 },
  Wc = { class: "flex flex-row text-base m-2 leading-loose" },
  qc = { class: "basis-1/4" },
  Jc = { for: "username", class: "text-left font-medium text-gray-900 ml-2" },
  Zc = { class: "basis-1/4 flex justify-start" },
  $c = { class: "basis-1/2 flex justify-end" },
  Xc = { class: "flex flex-row text-base m-2 leading-loose" },
  Qc = { class: "rounded-lg border border-purple-500 w-full" },
  ef = { class: "flex flex-row" },
  tf = { class: "flex justify-end w-1/2" },
  nf = { for: "username", class: "font-medium text-gray-900" },
  sf = { class: "flex justify-start w-1/2" },
  rf = { key: 0, class: "flex flex-row" },
  af = { for: "memberExpireTime", class: "font-medium text-gray-900 ml-2" },
  of = { id: "memberExpireTime", class: "ml-2" },
  lf = { class: "flex flex-row" },
  uf = { for: "memberExpireTime", class: "font-medium text-gray-900 ml-2" },
  cf = { id: "memberExpireTime", class: "ml-2" },
  ff = { key: 1, class: "flex flex-row w-full" },
  mf = { key: 2, class: "flex flex-row justify-items-center w-full" },
  df = { key: 0 },
  hf = { class: "flex flex-row text-base m-2 leading-loose" },
  gf = E(
    "div",
    { class: "flex flex-row text-gray-600 text-sm ml-2leading-loose" },
    [
      E(
        "div",
        { class: "ml-2" },
        " "
      ),
    ],
    -1
  ),
  pf = { key: 1 },
  bf = { class: "flex flex-row text-base m-2 leading-loose" };
function vf(e, t, n, s, r, a) {
  const o = ws("model-select"),
    l = ws("Slider"),
    m = ws("Toggle");
  return (
    je(),
    Be("div", Ju, [
      E("nav", Zu, [
        E("div", $u, [
          Xu,
          E("div", Qu, [
            E(
              "button",
              {
                type: "button",
                onClick: t[0] || (t[0] = (d) => (s.showSettings = !0)),
              },
              sc
            ),
            Mt(" Profile dropdown "),
            E("div", rc, [
              E("div", null, [
                E(
                  "button",
                  {
                    type: "button",
                    id: "user-menu-button",
                    "aria-expanded": "false",
                    "aria-haspopup": "true",
                    onClick: t[1] || (t[1] = (d) => (s.showSettings = !1)),
                  },
                  lc
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      $t(
        E(
          "div",
          null,
          [
            E("div", uc, [
              E("div", cc, [
                E("label", fc, we(r.sourceLanguagesText), 1),
                Ge(
                  o,
                  {
                    options: r.options,
                    "option-value": "value",
                    "option-text": "text",
                    modelValue: r.fromSelectedOption,
                    "onUpdate:modelValue":
                      t[2] || (t[2] = (d) => (r.fromSelectedOption = d)),
                  },
                  null,
                  8,
                  ["options", "modelValue"]
                ),
              ]),
              E("div", mc, [
                E("label", dc, we(r.targetLanguagesText), 1),
                Ge(
                  o,
                  {
                    options: r.options,
                    "option-value": "value",
                    "option-text": "text",
                    modelValue: r.toSelectedOption,
                    "onUpdate:modelValue":
                      t[3] || (t[3] = (d) => (r.toSelectedOption = d)),
                  },
                  null,
                  8,
                  ["options", "modelValue"]
                ),
              ]),
            ]),
            E("div", hc, [
              E("div", gc, [
                E("label", pc, we(r.sexText), 1),
                $t(
                  E(
                    "select",
                    {
                      id: "gender",
                      "onUpdate:modelValue":
                        t[4] || (t[4] = (d) => (r.selectedSex = d)),
                      onChange:
                        t[5] ||
                        (t[5] = (...d) => a.changeSex && a.changeSex(...d)),
                      class:
                        "shadow appearance-none border rounded w-[175px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2",
                    },
                    [
                      E("option", bc, we(r.manText), 1),
                      E("option", vc, we(r.womanText), 1),
                    ],
                    544
                  ),
                  [[Os, r.selectedSex]]
                ),
              ]),
              E("div", xc, [
                E("label", Ac, we(r.voicesText), 1),
                $t(
                  E(
                    "select",
                    {
                      id: "voice",
                      "onUpdate:modelValue":
                        t[6] || (t[6] = (d) => (r.selectedVoice = d)),
                      class:
                        "shadow appearance-none border rounded w-[175px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2",
                    },
                    [
                      (je(!0),
                      Be(
                        nt,
                        null,
                        qa(
                          a.reloadVoices,
                          (d) => (
                            je(),
                            Be("option", { value: d.value }, we(d.text), 9, yc)
                          )
                        ),
                        256
                      )),
                    ],
                    512
                  ),
                  [[Os, r.selectedVoice]]
                ),
              ]),
            ]),
            E("div", Sc, [
              E("div", _c, [E("label", wc, we(r.translateServiceText), 1)]),
              E("div", Ec, [
                $t(
                  E(
                    "select",
                    {
                      "onUpdate:modelValue":
                        t[7] || (t[7] = (d) => (r.translateEngine = d)),
                      class:
                        "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    },
                    [
                      Nc,
                      E(
                        "option",
                        Mc,
                        "OpenAi (" + we(r.rechargeLimitText) + ")",
                        1
                      ),
                    ],
                    512
                  ),
                  [[Os, r.translateEngine]]
                ),
              ]),
            ]),
            a.BrowserUtils.isIos()
              ? Mt("v-if", !0)
              : (je(),
                Be("div", Cc, [
                  E("div", Tc, [
                    E("div", Pc, [E("label", Oc, we(r.originalVolumeText), 1)]),
                    E("div", Ic, [
                      Ge(
                        l,
                        {
                          modelValue: r.originVolume,
                          "onUpdate:modelValue":
                            t[8] || (t[8] = (d) => (r.originVolume = d)),
                          showTooltip: "drag",
                          lazy: !1,
                          onUpdate: a.updateOriginVolume,
                        },
                        null,
                        8,
                        ["modelValue", "onUpdate"]
                      ),
                    ]),
                  ]),
                  E("div", kc, [
                    E("div", Lc, [E("label", Vc, we(r.targetVolumeText), 1)]),
                    E("div", Rc, [
                      Ge(
                        l,
                        {
                          modelValue: r.targetVolume,
                          "onUpdate:modelValue":
                            t[9] || (t[9] = (d) => (r.targetVolume = d)),
                          class: "ml-1",
                          showTooltip: "drag",
                          lazy: !1,
                          onUpdate: a.updateTargetVolume,
                        },
                        null,
                        8,
                        ["modelValue", "onUpdate"]
                      ),
                    ]),
                  ]),
                ])),
            E("div", Hc, [
              E("div", Fc, [E("label", Dc, we(r.pageSwitchPauseText), 1)]),
              E("div", jc, [
                Ge(
                  m,
                  {
                    modelValue: r.selectedPauseVideo,
                    "onUpdate:modelValue":
                      t[10] || (t[10] = (d) => (r.selectedPauseVideo = d)),
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
            ]),
            E("div", Uc, [
              E("div", zc, [E("label", Kc, we(r.speedAdjustmentModeText), 1)]),
              E("div", Bc, [
                Ge(
                  m,
                  {
                    modelValue: r.adjustmentModel,
                    "onUpdate:modelValue":
                      t[11] || (t[11] = (d) => (r.adjustmentModel = d)),
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
              ]),
            ]),
            E("div", Gc, [
              E(
                "button",
                {
                  id: "save-settings",
                  class:
                    "w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                  onClick:
                    t[12] ||
                    (t[12] = (...d) => a.saveSettings && a.saveSettings(...d)),
                },
                we(r.saveSettingsText),
                1
              ),
            ]),
          ],
          512
        ),
        [[Ks, s.showSettings]]
      ),
      $t(
        E(
          "div",
          null,
          [
            s.usernameRef !== null
              ? (je(),
                Be("div", Yc, [
                  E("div", Wc, [
                    E("div", qc, [E("label", Jc, we(r.welcomeText), 1)]),
                    E("div", Zc, we(s.usernameRef), 1),
                    E("div", $c, [
                      E(
                        "button",
                        {
                          class:
                            "bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline",
                          onClick:
                            t[13] ||
                            (t[13] = (...d) => a.logout && a.logout(...d)),
                        },
                        we(r.logoutText),
                        1
                      ),
                    ]),
                  ]),
                  E("div", Xc, [
                    E("div", Qc, [
                      E("div", ef, [
                        E("div", tf, [E("label", nf, we(r.userStatusText), 1)]),
                        E("div", sf, we(a.userRole), 1),
                      ]),
                      a.userRole === r.memberUserText
                        ? (je(),
                          Be("div", rf, [
                            E("label", af, we(r.expirationDateText), 1),
                            E(
                              "div",
                              of,
                              we(
                                s.membershipRef.membership.expire.replace(
                                  "T",
                                  " "
                                )
                              ),
                              1
                            ),
                          ]))
                        : Mt("v-if", !0),
                      E("div", lf, [
                        E("label", uf, we(r.accountBalanceText), 1),
                        E("div", cf, "$" + we(s.balanceRef), 1),
                      ]),
                      a.userRole === r.memberUserText
                        ? (je(),
                          Be("div", ff, [
                            E(
                              "button",
                              {
                                class:
                                  "w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                onClick:
                                  t[14] ||
                                  (t[14] = (...d) =>
                                    a.openPlanPage && a.openPlanPage(...d)),
                              },
                              we(r.payText),
                              1
                            ),
                          ]))
                        : Mt("v-if", !0),
                      a.userRole === r.regularUserText
                        ? (je(),
                          Be("div", mf, [
                            E(
                              "button",
                              {
                                class:
                                  "w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                onClick:
                                  t[15] ||
                                  (t[15] = (...d) =>
                                    a.openPlanPage && a.openPlanPage(...d)),
                              },
                              we(r.payText),
                              1
                            ),
                          ]))
                        : Mt("v-if", !0),
                    ]),
                  ]),
                  r.defaultLanguage.toLowerCase().startsWith("zh")
                    ? (je(),
                      Be("div", df, [
                        E("div", hf, [
                          E(
                            "button",
                            {
                              class:
                                "w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                              onClick:
                                t[16] ||
                                (t[16] = (...d) =>
                                  a.openInvitePage && a.openInvitePage(...d)),
                            },
                            "邀请赚积分(可换钱)"
                          ),
                        ]),
                        gf,
                      ]))
                    : Mt("v-if", !0),
                ]))
              : (je(),
                Be("div", pf, [
                  E("div", bf, [
                    E(
                      "button",
                      {
                        id: "login",
                        class:
                          "w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        onClick:
                          t[17] ||
                          (t[17] = (...d) =>
                            a.openLoginPage && a.openLoginPage(...d)),
                      },
                      we(r.loginText),
                      1
                    ),
                  ]),
                ])),
          ],
          512
        ),
        [[Ks, !s.showSettings]]
      ),
    ])
  );
}
const xf = qu(Yu, [["render", vf]]),
  Af = Xo({
    __name: "App",
    setup(e) {
      return (t, n) => (
        je(), Be(nt, null, [Mt(" <Settings></Settings> "), Ge(xf)], 2112)
      );
    },
  });
mu(Af).mount("#app");
