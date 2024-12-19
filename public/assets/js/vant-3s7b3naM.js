/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function zr(e, t) {
    const n = new Set(e.split(","));
    return t ? o => n.has(o.toLowerCase()) : o => n.has(o)
}
const ke = {},
    Rn = [],
    ct = () => {},
    cu = () => !1,
    xi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Hr = e => e.startsWith("onUpdate:"),
    He = Object.assign,
    jr = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    uu = Object.prototype.hasOwnProperty,
    pe = (e, t) => uu.call(e, t),
    ne = Array.isArray,
    Mn = e => Xn(e) === "[object Map]",
    Gn = e => Xn(e) === "[object Set]",
    Il = e => Xn(e) === "[object Date]",
    fu = e => Xn(e) === "[object RegExp]",
    he = e => typeof e == "function",
    Ie = e => typeof e == "string",
    tn = e => typeof e == "symbol",
    Oe = e => e !== null && typeof e == "object",
    oa = e => (Oe(e) || he(e)) && he(e.then) && he(e.catch),
    ia = Object.prototype.toString,
    Xn = e => ia.call(e),
    du = e => Xn(e).slice(8, -1),
    ra = e => Xn(e) === "[object Object]",
    Ur = e => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    fo = zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Si = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    hu = /-(\w)/g,
    Tt = Si(e => e.replace(hu, (t, n) => n ? n.toUpperCase() : "")),
    gu = /\B([A-Z])/g,
    sn = Si(e => e.replace(gu, "-$1").toLowerCase()),
    Ci = Si(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ji = Si(e => e ? `on${Ci(e)}` : ""),
    nn = (e, t) => !Object.is(e, t),
    Fn = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    si = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    po = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    vu = e => {
        const t = Ie(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Dl;
const la = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function _i(e) {
    if (ne(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                r = Ie(o) ? pu(o) : _i(o);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    } else if (Ie(e) || Oe(e)) return e
}
const mu = /;(?![^(]*\))/g,
    yu = /:([^]+)/,
    bu = /\/\*[^]*?\*\//g;

function pu(e) {
    const t = {};
    return e.replace(bu, "").split(mu).forEach(n => {
        if (n) {
            const o = n.split(yu);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }), t
}

function wu(e) {
    let t = "";
    if (!e || Ie(e)) return t;
    for (const n in e) {
        const o = e[n],
            r = n.startsWith("--") ? n : sn(n);
        (Ie(o) || typeof o == "number") && (t += `${r}:${o};`)
    }
    return t
}

function Ti(e) {
    let t = "";
    if (Ie(e)) t = e;
    else if (ne(e))
        for (let n = 0; n < e.length; n++) {
            const o = Ti(e[n]);
            o && (t += o + " ")
        } else if (Oe(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const xu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Su = zr(xu);

function sa(e) {
    return !!e || e === ""
}

function Cu(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let o = 0; n && o < e.length; o++) n = Cn(e[o], t[o]);
    return n
}

function Cn(e, t) {
    if (e === t) return !0;
    let n = Il(e),
        o = Il(t);
    if (n || o) return n && o ? e.getTime() === t.getTime() : !1;
    if (n = tn(e), o = tn(t), n || o) return e === t;
    if (n = ne(e), o = ne(t), n || o) return n && o ? Cu(e, t) : !1;
    if (n = Oe(e), o = Oe(t), n || o) {
        if (!n || !o) return !1;
        const r = Object.keys(e).length,
            i = Object.keys(t).length;
        if (r !== i) return !1;
        for (const l in e) {
            const s = e.hasOwnProperty(l),
                a = t.hasOwnProperty(l);
            if (s && !a || !s && a || !Cn(e[l], t[l])) return !1
        }
    }
    return String(e) === String(t)
}

function Wr(e, t) {
    return e.findIndex(n => Cn(n, t))
}
const Sb = e => Ie(e) ? e : e == null ? "" : ne(e) || Oe(e) && (e.toString === ia || !he(e.toString)) ? JSON.stringify(e, aa, 2) : String(e),
    aa = (e, t) => t && t.__v_isRef ? aa(e, t.value) : Mn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r], i) => (n[Ui(o, i) + " =>"] = r, n), {})
    } : Gn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Ui(n))
    } : tn(t) ? Ui(t) : Oe(t) && !ne(t) && !ra(t) ? String(t) : t,
    Ui = (e, t = "") => {
        var n;
        return tn(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let yt;
class ca {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = yt, !t && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = yt;
            try {
                return yt = this, t()
            } finally {
                yt = n
            }
        }
    }
    on() {
        yt = this
    }
    off() {
        yt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Cb(e) {
    return new ca(e)
}

function _u(e, t = yt) {
    t && t.active && t.effects.push(e)
}

function Tu() {
    return yt
}
let wn;
class Kr {
    constructor(t, n, o, r) {
        this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, _u(this, r)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, _n();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Eu(n.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), Tn()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = Jt,
            n = wn;
        try {
            return Jt = !0, wn = this, this._runnings++, Pl(this), this.fn()
        } finally {
            Al(this), this._runnings--, wn = n, Jt = t
        }
    }
    stop() {
        var t;
        this.active && (Pl(this), Al(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function Eu(e) {
    return e.value
}

function Pl(e) {
    e._trackId++, e._depsLength = 0
}

function Al(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) ua(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function ua(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Jt = !0,
    dr = 0;
const fa = [];

function _n() {
    fa.push(Jt), Jt = !1
}

function Tn() {
    const e = fa.pop();
    Jt = e === void 0 ? !0 : e
}

function Yr() {
    dr++
}

function qr() {
    for (dr--; !dr && hr.length;) hr.shift()()
}

function da(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const o = e.deps[e._depsLength];
        o !== t ? (o && ua(o, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const hr = [];

function ha(e, t, n) {
    Yr();
    for (const o of e.keys()) {
        let r;
        o._dirtyLevel < t && (r ?? (r = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (r ?? (r = e.get(o) === o._trackId)) && (o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && hr.push(o.scheduler)))
    }
    qr()
}
const ga = (e, t) => {
        const n = new Map;
        return n.cleanup = e, n.computed = t, n
    },
    gr = new WeakMap,
    xn = Symbol(""),
    vr = Symbol("");

function tt(e, t, n) {
    if (Jt && wn) {
        let o = gr.get(e);
        o || gr.set(e, o = new Map);
        let r = o.get(n);
        r || o.set(n, r = ga(() => o.delete(n))), da(wn, r)
    }
}

function Dt(e, t, n, o, r, i) {
    const l = gr.get(e);
    if (!l) return;
    let s = [];
    if (t === "clear") s = [...l.values()];
    else if (n === "length" && ne(e)) {
        const a = Number(o);
        l.forEach((c, u) => {
            (u === "length" || !tn(u) && u >= a) && s.push(c)
        })
    } else switch (n !== void 0 && s.push(l.get(n)), t) {
        case "add":
            ne(e) ? Ur(n) && s.push(l.get("length")) : (s.push(l.get(xn)), Mn(e) && s.push(l.get(vr)));
            break;
        case "delete":
            ne(e) || (s.push(l.get(xn)), Mn(e) && s.push(l.get(vr)));
            break;
        case "set":
            Mn(e) && s.push(l.get(xn));
            break
    }
    Yr();
    for (const a of s) a && ha(a, 4);
    qr()
}
const Ou = zr("__proto__,__v_isRef,__isVue"),
    va = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(tn)),
    Bl = ku();

function ku() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const o = xe(this);
            for (let i = 0, l = this.length; i < l; i++) tt(o, "get", i + "");
            const r = o[t](...n);
            return r === -1 || r === !1 ? o[t](...n.map(xe)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            _n(), Yr();
            const o = xe(this)[t].apply(this, n);
            return qr(), Tn(), o
        }
    }), e
}

function Iu(e) {
    const t = xe(this);
    return tt(t, "has", e), t.hasOwnProperty(e)
}
class ma {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, o) {
        const r = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return o === (r ? i ? Hu : wa : i ? pa : ba).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const l = ne(t);
        if (!r) {
            if (l && pe(Bl, n)) return Reflect.get(Bl, n, o);
            if (n === "hasOwnProperty") return Iu
        }
        const s = Reflect.get(t, n, o);
        return (tn(n) ? va.has(n) : Ou(n)) || (r || tt(t, "get", n), i) ? s : Qe(s) ? l && Ur(n) ? s : s.value : Oe(s) ? r ? xa(s) : Ke(s) : s
    }
}
class ya extends ma {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, o, r) {
        let i = t[n];
        if (!this._isShallow) {
            const a = Hn(i);
            if (!ai(o) && !Hn(o) && (i = xe(i), o = xe(o)), !ne(t) && Qe(i) && !Qe(o)) return a ? !1 : (i.value = o, !0)
        }
        const l = ne(t) && Ur(n) ? Number(n) < t.length : pe(t, n),
            s = Reflect.set(t, n, o, r);
        return t === xe(r) && (l ? nn(o, i) && Dt(t, "set", n, o) : Dt(t, "add", n, o)), s
    }
    deleteProperty(t, n) {
        const o = pe(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && o && Dt(t, "delete", n, void 0), r
    }
    has(t, n) {
        const o = Reflect.has(t, n);
        return (!tn(n) || !va.has(n)) && tt(t, "has", n), o
    }
    ownKeys(t) {
        return tt(t, "iterate", ne(t) ? "length" : xn), Reflect.ownKeys(t)
    }
}
class Du extends ma {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Pu = new ya,
    Au = new Du,
    Bu = new ya(!0),
    Gr = e => e,
    Ei = e => Reflect.getPrototypeOf(e);

function Lo(e, t, n = !1, o = !1) {
    e = e.__v_raw;
    const r = xe(e),
        i = xe(t);
    n || (nn(t, i) && tt(r, "get", t), tt(r, "get", i));
    const {
        has: l
    } = Ei(r), s = o ? Gr : n ? Jr : wo;
    if (l.call(r, t)) return s(e.get(t));
    if (l.call(r, i)) return s(e.get(i));
    e !== r && e.get(t)
}

function Vo(e, t = !1) {
    const n = this.__v_raw,
        o = xe(n),
        r = xe(e);
    return t || (nn(e, r) && tt(o, "has", e), tt(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
}

function No(e, t = !1) {
    return e = e.__v_raw, !t && tt(xe(e), "iterate", xn), Reflect.get(e, "size", e)
}

function $l(e) {
    e = xe(e);
    const t = xe(this);
    return Ei(t).has.call(t, e) || (t.add(e), Dt(t, "add", e, e)), this
}

function Rl(e, t) {
    t = xe(t);
    const n = xe(this),
        {
            has: o,
            get: r
        } = Ei(n);
    let i = o.call(n, e);
    i || (e = xe(e), i = o.call(n, e));
    const l = r.call(n, e);
    return n.set(e, t), i ? nn(t, l) && Dt(n, "set", e, t) : Dt(n, "add", e, t), this
}

function Ml(e) {
    const t = xe(this),
        {
            has: n,
            get: o
        } = Ei(t);
    let r = n.call(t, e);
    r || (e = xe(e), r = n.call(t, e)), o && o.call(t, e);
    const i = t.delete(e);
    return r && Dt(t, "delete", e, void 0), i
}

function Fl() {
    const e = xe(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Dt(e, "clear", void 0, void 0), n
}

function zo(e, t) {
    return function (o, r) {
        const i = this,
            l = i.__v_raw,
            s = xe(l),
            a = t ? Gr : e ? Jr : wo;
        return !e && tt(s, "iterate", xn), l.forEach((c, u) => o.call(r, a(c), a(u), i))
    }
}

function Ho(e, t, n) {
    return function (...o) {
        const r = this.__v_raw,
            i = xe(r),
            l = Mn(i),
            s = e === "entries" || e === Symbol.iterator && l,
            a = e === "keys" && l,
            c = r[e](...o),
            u = n ? Gr : t ? Jr : wo;
        return !t && tt(i, "iterate", a ? vr : xn), {
            next() {
                const {
                    value: d,
                    done: h
                } = c.next();
                return h ? {
                    value: d,
                    done: h
                } : {
                    value: s ? [u(d[0]), u(d[1])] : u(d),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function zt(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function $u() {
    const e = {
            get(i) {
                return Lo(this, i)
            },
            get size() {
                return No(this)
            },
            has: Vo,
            add: $l,
            set: Rl,
            delete: Ml,
            clear: Fl,
            forEach: zo(!1, !1)
        },
        t = {
            get(i) {
                return Lo(this, i, !1, !0)
            },
            get size() {
                return No(this)
            },
            has: Vo,
            add: $l,
            set: Rl,
            delete: Ml,
            clear: Fl,
            forEach: zo(!1, !0)
        },
        n = {
            get(i) {
                return Lo(this, i, !0)
            },
            get size() {
                return No(this, !0)
            },
            has(i) {
                return Vo.call(this, i, !0)
            },
            add: zt("add"),
            set: zt("set"),
            delete: zt("delete"),
            clear: zt("clear"),
            forEach: zo(!0, !1)
        },
        o = {
            get(i) {
                return Lo(this, i, !0, !0)
            },
            get size() {
                return No(this, !0)
            },
            has(i) {
                return Vo.call(this, i, !0)
            },
            add: zt("add"),
            set: zt("set"),
            delete: zt("delete"),
            clear: zt("clear"),
            forEach: zo(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        e[i] = Ho(i, !1, !1), n[i] = Ho(i, !0, !1), t[i] = Ho(i, !1, !0), o[i] = Ho(i, !0, !0)
    }), [e, n, t, o]
}
const [Ru, Mu, Fu, Lu] = $u();

function Xr(e, t) {
    const n = t ? e ? Lu : Fu : e ? Mu : Ru;
    return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(pe(n, r) && r in o ? n : o, r, i)
}
const Vu = {
        get: Xr(!1, !1)
    },
    Nu = {
        get: Xr(!1, !0)
    },
    zu = {
        get: Xr(!0, !1)
    },
    ba = new WeakMap,
    pa = new WeakMap,
    wa = new WeakMap,
    Hu = new WeakMap;

function ju(e) {
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
            return 0
    }
}

function Uu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ju(du(e))
}

function Ke(e) {
    return Hn(e) ? e : Zr(e, !1, Pu, Vu, ba)
}

function Wu(e) {
    return Zr(e, !1, Bu, Nu, pa)
}

function xa(e) {
    return Zr(e, !0, Au, zu, wa)
}

function Zr(e, t, n, o, r) {
    if (!Oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = r.get(e);
    if (i) return i;
    const l = Uu(e);
    if (l === 0) return e;
    const s = new Proxy(e, l === 2 ? o : n);
    return r.set(e, s), s
}

function Ln(e) {
    return Hn(e) ? Ln(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Hn(e) {
    return !!(e && e.__v_isReadonly)
}

function ai(e) {
    return !!(e && e.__v_isShallow)
}

function Sa(e) {
    return Ln(e) || Hn(e)
}

function xe(e) {
    const t = e && e.__v_raw;
    return t ? xe(t) : e
}

function Ca(e) {
    return Object.isExtensible(e) && si(e, "__v_skip", !0), e
}
const wo = e => Oe(e) ? Ke(e) : e,
    Jr = e => Oe(e) ? xa(e) : e;
class _a {
    constructor(t, n, o, r) {
        this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Kr(() => t(this._value), () => ti(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o
    }
    get value() {
        const t = xe(this);
        return (!t._cacheable || t.effect.dirty) && nn(t._value, t._value = t.effect.run()) && ti(t, 4), Ta(t), t.effect._dirtyLevel >= 2 && ti(t, 2), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function Ku(e, t, n = !1) {
    let o, r;
    const i = he(e);
    return i ? (o = e, r = ct) : (o = e.get, r = e.set), new _a(o, r, i || !r, n)
}

function Ta(e) {
    var t;
    Jt && wn && (e = xe(e), da(wn, (t = e.dep) != null ? t : e.dep = ga(() => e.dep = void 0, e instanceof _a ? e : void 0)))
}

function ti(e, t = 4, n) {
    e = xe(e);
    const o = e.dep;
    o && ha(o, t)
}

function Qe(e) {
    return !!(e && e.__v_isRef === !0)
}

function H(e) {
    return Ea(e, !1)
}

function _b(e) {
    return Ea(e, !0)
}

function Ea(e, t) {
    return Qe(e) ? e : new Yu(e, t)
}
class Yu {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : xe(t), this._value = n ? t : wo(t)
    }
    get value() {
        return Ta(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ai(t) || Hn(t);
        t = n ? t : xe(t), nn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : wo(t), ti(this, 4))
    }
}

function jn(e) {
    return Qe(e) ? e.value : e
}
const qu = {
    get: (e, t, n) => jn(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
        const r = e[t];
        return Qe(r) && !Qe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o)
    }
};

function Oa(e) {
    return Ln(e) ? e : new Proxy(e, qu)
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Qt(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (r) {
        Oo(r, t, n)
    }
}

function ut(e, t, n, o) {
    if (he(e)) {
        const i = Qt(e, t, n, o);
        return i && oa(i) && i.catch(l => {
            Oo(l, t, n)
        }), i
    }
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(ut(e[i], t, n, o));
    return r
}

function Oo(e, t, n, o = !0) {
    const r = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const l = t.proxy,
            s = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; i;) {
            const c = i.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, l, s) === !1) return
            }
            i = i.parent
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            Qt(a, null, 10, [e, l, s]);
            return
        }
    }
    Gu(e, n, r, o)
}

function Gu(e, t, n, o = !0) {
    console.error(e)
}
let xo = !1,
    mr = !1;
const Xe = [];
let _t = 0;
const Vn = [];
let Kt = null,
    yn = 0;
const ka = Promise.resolve();
let Qr = null;

function Te(e) {
    const t = Qr || ka;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Xu(e) {
    let t = _t + 1,
        n = Xe.length;
    for (; t < n;) {
        const o = t + n >>> 1,
            r = Xe[o],
            i = So(r);
        i < e || i === e && r.pre ? t = o + 1 : n = o
    }
    return t
}

function Oi(e) {
    (!Xe.length || !Xe.includes(e, xo && e.allowRecurse ? _t + 1 : _t)) && (e.id == null ? Xe.push(e) : Xe.splice(Xu(e.id), 0, e), Ia())
}

function Ia() {
    !xo && !mr && (mr = !0, Qr = ka.then(Pa))
}

function Zu(e) {
    const t = Xe.indexOf(e);
    t > _t && Xe.splice(t, 1)
}

function Ju(e) {
    ne(e) ? Vn.push(...e) : (!Kt || !Kt.includes(e, e.allowRecurse ? yn + 1 : yn)) && Vn.push(e), Ia()
}

function Ll(e, t, n = xo ? _t + 1 : 0) {
    for (; n < Xe.length; n++) {
        const o = Xe[n];
        if (o && o.pre) {
            if (e && o.id !== e.uid) continue;
            Xe.splice(n, 1), n--, o()
        }
    }
}

function Da(e) {
    if (Vn.length) {
        const t = [...new Set(Vn)].sort((n, o) => So(n) - So(o));
        if (Vn.length = 0, Kt) {
            Kt.push(...t);
            return
        }
        for (Kt = t, yn = 0; yn < Kt.length; yn++) Kt[yn]();
        Kt = null, yn = 0
    }
}
const So = e => e.id == null ? 1 / 0 : e.id,
    Qu = (e, t) => {
        const n = So(e) - So(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function Pa(e) {
    mr = !1, xo = !0, Xe.sort(Qu);
    try {
        for (_t = 0; _t < Xe.length; _t++) {
            const t = Xe[_t];
            t && t.active !== !1 && Qt(t, null, 14)
        }
    } finally {
        _t = 0, Xe.length = 0, Da(), xo = !1, Qr = null, (Xe.length || Vn.length) && Pa()
    }
}

function ef(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || ke;
    let r = n;
    const i = t.startsWith("update:"),
        l = i && t.slice(7);
    if (l && l in o) {
        const u = `${l==="modelValue"?"model":l}Modifiers`,
            {
                number: d,
                trim: h
            } = o[u] || ke;
        h && (r = n.map(y => Ie(y) ? y.trim() : y)), d && (r = n.map(po))
    }
    let s, a = o[s = ji(t)] || o[s = ji(Tt(t))];
    !a && i && (a = o[s = ji(sn(t))]), a && ut(a, e, 6, r);
    const c = o[s + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[s]) return;
        e.emitted[s] = !0, ut(c, e, 6, r)
    }
}

function Aa(e, t, n = !1) {
    const o = t.emitsCache,
        r = o.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let l = {},
        s = !1;
    if (!he(e)) {
        const a = c => {
            const u = Aa(c, t, !0);
            u && (s = !0, He(l, u))
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !i && !s ? (Oe(e) && o.set(e, null), null) : (ne(i) ? i.forEach(a => l[a] = null) : He(l, i), Oe(e) && o.set(e, l), l)
}

function ki(e, t) {
    return !e || !xi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, sn(t)) || pe(e, t))
}
let Ne = null,
    Ii = null;

function ci(e) {
    const t = Ne;
    return Ne = e, Ii = e && e.type.__scopeId || null, t
}

function Tb(e) {
    Ii = e
}

function Eb() {
    Ii = null
}

function tf(e, t = Ne, n) {
    if (!t || e._n) return e;
    const o = (...r) => {
        o._d && Jl(-1);
        const i = ci(t);
        let l;
        try {
            l = e(...r)
        } finally {
            ci(i), o._d && Jl(1)
        }
        return l
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}

function Wi(e) {
    const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: r,
        props: i,
        propsOptions: [l],
        slots: s,
        attrs: a,
        emit: c,
        render: u,
        renderCache: d,
        data: h,
        setupState: y,
        ctx: b,
        inheritAttrs: C
    } = e;
    let v, x;
    const m = ci(e);
    try {
        if (n.shapeFlag & 4) {
            const S = r || o,
                T = S;
            v = Ct(u.call(T, S, d, i, y, h, b)), x = a
        } else {
            const S = t;
            v = Ct(S.length > 1 ? S(i, {
                attrs: a,
                slots: s,
                emit: c
            }) : S(i, null)), x = t.props ? a : nf(a)
        }
    } catch (S) {
        mo.length = 0, Oo(S, e, 1), v = f(ft)
    }
    let w = v;
    if (x && C !== !1) {
        const S = Object.keys(x),
            {
                shapeFlag: T
            } = w;
        S.length && T & 7 && (l && S.some(Hr) && (x = of (x, l)), w = Rt(w, x))
    }
    return n.dirs && (w = Rt(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (w.transition = n.transition), v = w, ci(m), v
}
const nf = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || xi(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    of = (e, t) => {
        const n = {};
        for (const o in e)(!Hr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
        return n
    };

function rf(e, t, n) {
    const {
        props: o,
        children: r,
        component: i
    } = e, {
        props: l,
        children: s,
        patchFlag: a
    } = t, c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return o ? Vl(o, l, c) : !!l;
        if (a & 8) {
            const u = t.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                const h = u[d];
                if (l[h] !== o[h] && !ki(c, h)) return !0
            }
        }
    } else return (r || s) && (!s || !s.$stable) ? !0 : o === l ? !1 : o ? l ? Vl(o, l, c) : !0 : !!l;
    return !1
}

function Vl(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < o.length; r++) {
        const i = o[r];
        if (t[i] !== e[i] && !ki(n, i)) return !0
    }
    return !1
}

function lf({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const el = "components",
    sf = "directives";

function Ob(e, t) {
    return tl(el, e, !0, t) || e
}
const Ba = Symbol.for("v-ndc");

function kb(e) {
    return Ie(e) ? tl(el, e, !1) || e : e || Ba
}

function af(e) {
    return tl(sf, e)
}

function tl(e, t, n = !0, o = !1) {
    const r = Ne || Ue;
    if (r) {
        const i = r.type;
        if (e === el) {
            const s = Tr(i, !1);
            if (s && (s === t || s === Tt(t) || s === Ci(Tt(t)))) return i
        }
        const l = Nl(r[e] || i[e], t) || Nl(r.appContext[e], t);
        return !l && o ? i : l
    }
}

function Nl(e, t) {
    return e && (e[t] || e[Tt(t)] || e[Ci(Tt(t))])
}
const $a = e => e.__isSuspense;

function cf(e, t) {
    t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Ju(e)
}
const uf = Symbol.for("v-scx"),
    ff = () => Pt(uf);

function Di(e, t) {
    return nl(e, null, t)
}
const jo = {};

function ee(e, t, n) {
    return nl(e, t, n)
}

function nl(e, t, {
    immediate: n,
    deep: o,
    flush: r,
    once: i,
    onTrack: l,
    onTrigger: s
} = ke) {
    if (t && i) {
        const O = t;
        t = (...U) => {
            O(...U), T()
        }
    }
    const a = Ue,
        c = O => o === !0 ? O : bn(O, o === !1 ? 1 : void 0);
    let u, d = !1,
        h = !1;
    if (Qe(e) ? (u = () => e.value, d = ai(e)) : Ln(e) ? (u = () => c(e), d = !0) : ne(e) ? (h = !0, d = e.some(O => Ln(O) || ai(O)), u = () => e.map(O => {
            if (Qe(O)) return O.value;
            if (Ln(O)) return c(O);
            if (he(O)) return Qt(O, a, 2)
        })) : he(e) ? t ? u = () => Qt(e, a, 2) : u = () => (y && y(), ut(e, a, 3, [b])) : u = ct, t && o) {
        const O = u;
        u = () => bn(O())
    }
    let y, b = O => {
            y = w.onStop = () => {
                Qt(O, a, 4), y = w.onStop = void 0
            }
        },
        C;
    if (Po)
        if (b = ct, t ? n && ut(t, a, 3, [u(), h ? [] : void 0, b]) : u(), r === "sync") {
            const O = ff();
            C = O.__watcherHandles || (O.__watcherHandles = [])
        } else return ct;
    let v = h ? new Array(e.length).fill(jo) : jo;
    const x = () => {
        if (!(!w.active || !w.dirty))
            if (t) {
                const O = w.run();
                (o || d || (h ? O.some((U, I) => nn(U, v[I])) : nn(O, v))) && (y && y(), ut(t, a, 3, [O, v === jo ? void 0 : h && v[0] === jo ? [] : v, b]), v = O)
            } else w.run()
    };
    x.allowRecurse = !!t;
    let m;
    r === "sync" ? m = x : r === "post" ? m = () => Ye(x, a && a.suspense) : (x.pre = !0, a && (x.id = a.uid), m = () => Oi(x));
    const w = new Kr(u, ct, m),
        S = Tu(),
        T = () => {
            w.stop(), S && jr(S.effects, w)
        };
    return t ? n ? x() : v = w.run() : r === "post" ? Ye(w.run.bind(w), a && a.suspense) : w.run(), C && C.push(T), T
}

function df(e, t, n) {
    const o = this.proxy,
        r = Ie(e) ? e.includes(".") ? Ra(o, e) : () => o[e] : e.bind(o, o);
    let i;
    he(t) ? i = t : (i = t.handler, n = t);
    const l = Do(this),
        s = nl(r, i.bind(o), n);
    return l(), s
}

function Ra(e, t) {
    const n = t.split(".");
    return () => {
        let o = e;
        for (let r = 0; r < n.length && o; r++) o = o[n[r]];
        return o
    }
}

function bn(e, t, n = 0, o) {
    if (!Oe(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (n >= t) return e;
        n++
    }
    if (o = o || new Set, o.has(e)) return e;
    if (o.add(e), Qe(e)) bn(e.value, t, n, o);
    else if (ne(e))
        for (let r = 0; r < e.length; r++) bn(e[r], t, n, o);
    else if (Gn(e) || Mn(e)) e.forEach(r => {
        bn(r, t, n, o)
    });
    else if (ra(e))
        for (const r in e) bn(e[r], t, n, o);
    return e
}

function $t(e, t) {
    if (Ne === null) return e;
    const n = $i(Ne) || Ne.proxy,
        o = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, l, s, a = ke] = t[r];
        i && (he(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && bn(l), o.push({
            dir: i,
            instance: n,
            value: l,
            oldValue: void 0,
            arg: s,
            modifiers: a
        }))
    }
    return e
}

function fn(e, t, n, o) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let l = 0; l < r.length; l++) {
        const s = r[l];
        i && (s.oldValue = i[l].value);
        let a = s.dir[o];
        a && (_n(), ut(a, n, 8, [e.el, s, e, t]), Tn())
    }
}
const Yt = Symbol("_leaveCb"),
    Uo = Symbol("_enterCb");

function hf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ge(() => {
        e.isMounted = !0
    }), wt(() => {
        e.isUnmounting = !0
    }), e
}
const lt = [Function, Array],
    Ma = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: lt,
        onEnter: lt,
        onAfterEnter: lt,
        onEnterCancelled: lt,
        onBeforeLeave: lt,
        onLeave: lt,
        onAfterLeave: lt,
        onLeaveCancelled: lt,
        onBeforeAppear: lt,
        onAppear: lt,
        onAfterAppear: lt,
        onAppearCancelled: lt
    },
    gf = {
        name: "BaseTransition",
        props: Ma,
        setup(e, {
            slots: t
        }) {
            const n = gt(),
                o = hf();
            return () => {
                const r = t.default && La(t.default(), !0);
                if (!r || !r.length) return;
                let i = r[0];
                if (r.length > 1) {
                    for (const h of r)
                        if (h.type !== ft) {
                            i = h;
                            break
                        }
                }
                const l = xe(e),
                    {
                        mode: s
                    } = l;
                if (o.isLeaving) return Ki(i);
                const a = zl(i);
                if (!a) return Ki(i);
                const c = yr(a, l, o, n);
                ui(a, c);
                const u = n.subTree,
                    d = u && zl(u);
                if (d && d.type !== ft && !Xt(a, d)) {
                    const h = yr(d, l, o, n);
                    if (ui(d, h), s === "out-in") return o.isLeaving = !0, h.afterLeave = () => {
                        o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update())
                    }, Ki(i);
                    s === "in-out" && a.type !== ft && (h.delayLeave = (y, b, C) => {
                        const v = Fa(o, d);
                        v[String(d.key)] = d, y[Yt] = () => {
                            b(), y[Yt] = void 0, delete c.delayedLeave
                        }, c.delayedLeave = C
                    })
                }
                return i
            }
        }
    },
    vf = gf;

function Fa(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null), n.set(t.type, o)), o
}

function yr(e, t, n, o) {
    const {
        appear: r,
        mode: i,
        persisted: l = !1,
        onBeforeEnter: s,
        onEnter: a,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: y,
        onLeaveCancelled: b,
        onBeforeAppear: C,
        onAppear: v,
        onAfterAppear: x,
        onAppearCancelled: m
    } = t, w = String(e.key), S = Fa(n, e), T = (I, L) => {
        I && ut(I, o, 9, L)
    }, O = (I, L) => {
        const k = L[1];
        T(I, L), ne(I) ? I.every(_ => _.length <= 1) && k() : I.length <= 1 && k()
    }, U = {
        mode: i,
        persisted: l,
        beforeEnter(I) {
            let L = s;
            if (!n.isMounted)
                if (r) L = C || s;
                else return;
            I[Yt] && I[Yt](!0);
            const k = S[w];
            k && Xt(e, k) && k.el[Yt] && k.el[Yt](), T(L, [I])
        },
        enter(I) {
            let L = a,
                k = c,
                _ = u;
            if (!n.isMounted)
                if (r) L = v || a, k = x || c, _ = m || u;
                else return;
            let E = !1;
            const B = I[Uo] = ie => {
                E || (E = !0, ie ? T(_, [I]) : T(k, [I]), U.delayedLeave && U.delayedLeave(), I[Uo] = void 0)
            };
            L ? O(L, [I, B]) : B()
        },
        leave(I, L) {
            const k = String(e.key);
            if (I[Uo] && I[Uo](!0), n.isUnmounting) return L();
            T(d, [I]);
            let _ = !1;
            const E = I[Yt] = B => {
                _ || (_ = !0, L(), B ? T(b, [I]) : T(y, [I]), I[Yt] = void 0, S[k] === e && delete S[k])
            };
            S[k] = e, h ? O(h, [I, E]) : E()
        },
        clone(I) {
            return yr(I, t, n, o)
        }
    };
    return U
}

function Ki(e) {
    if (ko(e)) return e = Rt(e), e.children = null, e
}

function zl(e) {
    return ko(e) ? e.children ? e.children[0] : void 0 : e
}

function ui(e, t) {
    e.shapeFlag & 6 && e.component ? ui(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function La(e, t = !1, n) {
    let o = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let l = e[i];
        const s = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
        l.type === Je ? (l.patchFlag & 128 && r++, o = o.concat(La(l.children, t, s))) : (t || l.type !== ft) && o.push(s != null ? Rt(l, {
            key: s
        }) : l)
    }
    if (r > 1)
        for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
    return o
} /*! #__NO_SIDE_EFFECTS__ */
function oe(e, t) {
    return he(e) ? He({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Nn = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Ib(e) {
    he(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: o,
        delay: r = 200,
        timeout: i,
        suspensible: l = !0,
        onError: s
    } = e;
    let a = null,
        c, u = 0;
    const d = () => (u++, a = null, h()),
        h = () => {
            let y;
            return a || (y = a = t().catch(b => {
                if (b = b instanceof Error ? b : new Error(String(b)), s) return new Promise((C, v) => {
                    s(b, () => C(d()), () => v(b), u + 1)
                });
                throw b
            }).then(b => y !== a && a ? a : (b && (b.__esModule || b[Symbol.toStringTag] === "Module") && (b = b.default), c = b, b)))
        };
    return oe({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        get __asyncResolved() {
            return c
        },
        setup() {
            const y = Ue;
            if (c) return () => Yi(c, y);
            const b = m => {
                a = null, Oo(m, y, 13, !o)
            };
            if (l && y.suspense || Po) return h().then(m => () => Yi(m, y)).catch(m => (b(m), () => o ? f(o, {
                error: m
            }) : null));
            const C = H(!1),
                v = H(),
                x = H(!!r);
            return r && setTimeout(() => {
                x.value = !1
            }, r), i != null && setTimeout(() => {
                if (!C.value && !v.value) {
                    const m = new Error(`Async component timed out after ${i}ms.`);
                    b(m), v.value = m
                }
            }, i), h().then(() => {
                C.value = !0, y.parent && ko(y.parent.vnode) && (y.parent.effect.dirty = !0, Oi(y.parent.update))
            }).catch(m => {
                b(m), v.value = m
            }), () => {
                if (C.value && c) return Yi(c, y);
                if (v.value && o) return f(o, {
                    error: v.value
                });
                if (n && !x.value) return f(n)
            }
        }
    })
}

function Yi(e, t) {
    const {
        ref: n,
        props: o,
        children: r,
        ce: i
    } = t.vnode, l = f(e, o, r);
    return l.ref = n, l.ce = i, delete t.vnode.ce, l
}
const ko = e => e.type.__isKeepAlive,
    mf = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = gt(),
                o = n.ctx;
            if (!o.renderer) return () => {
                const m = t.default && t.default();
                return m && m.length === 1 ? m[0] : m
            };
            const r = new Map,
                i = new Set;
            let l = null;
            const s = n.suspense,
                {
                    renderer: {
                        p: a,
                        m: c,
                        um: u,
                        o: {
                            createElement: d
                        }
                    }
                } = o,
                h = d("div");
            o.activate = (m, w, S, T, O) => {
                const U = m.component;
                c(m, w, S, 0, s), a(U.vnode, m, w, S, U, s, T, m.slotScopeIds, O), Ye(() => {
                    U.isDeactivated = !1, U.a && Fn(U.a);
                    const I = m.props && m.props.onVnodeMounted;
                    I && at(I, U.parent, m)
                }, s)
            }, o.deactivate = m => {
                const w = m.component;
                c(m, h, null, 1, s), Ye(() => {
                    w.da && Fn(w.da);
                    const S = m.props && m.props.onVnodeUnmounted;
                    S && at(S, w.parent, m), w.isDeactivated = !0
                }, s)
            };

            function y(m) {
                qi(m), u(m, n, s, !0)
            }

            function b(m) {
                r.forEach((w, S) => {
                    const T = Tr(w.type);
                    T && (!m || !m(T)) && C(S)
                })
            }

            function C(m) {
                const w = r.get(m);
                !l || !Xt(w, l) ? y(w) : l && qi(l), r.delete(m), i.delete(m)
            }
            ee(() => [e.include, e.exclude], ([m, w]) => {
                m && b(S => co(m, S)), w && b(S => !co(w, S))
            }, {
                flush: "post",
                deep: !0
            });
            let v = null;
            const x = () => {
                v != null && r.set(v, Gi(n.subTree))
            };
            return Ge(x), ol(x), wt(() => {
                r.forEach(m => {
                    const {
                        subTree: w,
                        suspense: S
                    } = n, T = Gi(w);
                    if (m.type === T.type && m.key === T.key) {
                        qi(T);
                        const O = T.component.da;
                        O && Ye(O, S);
                        return
                    }
                    y(m)
                })
            }), () => {
                if (v = null, !t.default) return null;
                const m = t.default(),
                    w = m[0];
                if (m.length > 1) return l = null, m;
                if (!Un(w) || !(w.shapeFlag & 4) && !(w.shapeFlag & 128)) return l = null, w;
                let S = Gi(w);
                const T = S.type,
                    O = Tr(Nn(S) ? S.type.__asyncResolved || {} : T),
                    {
                        include: U,
                        exclude: I,
                        max: L
                    } = e;
                if (U && (!O || !co(U, O)) || I && O && co(I, O)) return l = S, w;
                const k = S.key == null ? T : S.key,
                    _ = r.get(k);
                return S.el && (S = Rt(S), w.shapeFlag & 128 && (w.ssContent = S)), v = k, _ ? (S.el = _.el, S.component = _.component, S.transition && ui(S, S.transition), S.shapeFlag |= 512, i.delete(k), i.add(k)) : (i.add(k), L && i.size > parseInt(L, 10) && C(i.values().next().value)), S.shapeFlag |= 256, l = S, $a(w.type) ? w : S
            }
        }
    },
    Db = mf;

function co(e, t) {
    return ne(e) ? e.some(n => co(n, t)) : Ie(e) ? e.split(",").includes(t) : fu(e) ? e.test(t) : !1
}

function an(e, t) {
    Va(e, "a", t)
}

function Lt(e, t) {
    Va(e, "da", t)
}

function Va(e, t, n = Ue) {
    const o = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (Pi(t, o, n), n) {
        let r = n.parent;
        for (; r && r.parent;) ko(r.parent.vnode) && yf(o, t, n, r), r = r.parent
    }
}

function yf(e, t, n, o) {
    const r = Pi(t, e, o, !0);
    Io(() => {
        jr(o[t], r)
    }, n)
}

function qi(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Gi(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Pi(e, t, n = Ue, o = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...l) => {
                if (n.isUnmounted) return;
                _n();
                const s = Do(n),
                    a = ut(t, n, e, l);
                return s(), Tn(), a
            });
        return o ? r.unshift(i) : r.push(i), i
    }
}
const Vt = e => (t, n = Ue) => (!Po || e === "sp") && Pi(e, (...o) => t(...o), n),
    bf = Vt("bm"),
    Ge = Vt("m"),
    Na = Vt("bu"),
    ol = Vt("u"),
    wt = Vt("bum"),
    Io = Vt("um"),
    pf = Vt("sp"),
    wf = Vt("rtg"),
    xf = Vt("rtc");

function Sf(e, t = Ue) {
    Pi("ec", e, t)
}

function Pb(e, t, n, o) {
    let r;
    const i = n && n[o];
    if (ne(e) || Ie(e)) {
        r = new Array(e.length);
        for (let l = 0, s = e.length; l < s; l++) r[l] = t(e[l], l, void 0, i && i[l])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i && i[l])
    } else if (Oe(e))
        if (e[Symbol.iterator]) r = Array.from(e, (l, s) => t(l, s, void 0, i && i[s]));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let s = 0, a = l.length; s < a; s++) {
                const c = l[s];
                r[s] = t(e[c], c, s, i && i[s])
            }
        }
    else r = [];
    return n && (n[o] = r), r
}

function Ab(e, t, n = {}, o, r) {
    if (Ne.isCE || Ne.parent && Nn(Ne.parent) && Ne.parent.isCE) return t !== "default" && (n.name = t), f("slot", n, o && o());
    let i = e[t];
    i && i._c && (i._d = !1), Za();
    const l = i && za(i(n)),
        s = Qa(Je, {
            key: n.key || l && l.key || `_${t}`
        }, l || (o ? o() : []), l && e._ === 1 ? 64 : -2);
    return !r && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s
}

function za(e) {
    return e.some(t => Un(t) ? !(t.type === ft || t.type === Je && !za(t.children)) : !0) ? e : null
}
const br = e => e ? oc(e) ? $i(e) || e.proxy : br(e.parent) : null,
    ho = He(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => br(e.parent),
        $root: e => br(e.root),
        $emit: e => e.emit,
        $options: e => il(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, Oi(e.update)
        }),
        $nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
        $watch: e => df.bind(e)
    }),
    Xi = (e, t) => e !== ke && !e.__isScriptSetup && pe(e, t),
    Cf = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: o,
                data: r,
                props: i,
                accessCache: l,
                type: s,
                appContext: a
            } = e;
            let c;
            if (t[0] !== "$") {
                const y = l[t];
                if (y !== void 0) switch (y) {
                    case 1:
                        return o[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (Xi(o, t)) return l[t] = 1, o[t];
                    if (r !== ke && pe(r, t)) return l[t] = 2, r[t];
                    if ((c = e.propsOptions[0]) && pe(c, t)) return l[t] = 3, i[t];
                    if (n !== ke && pe(n, t)) return l[t] = 4, n[t];
                    pr && (l[t] = 0)
                }
            }
            const u = ho[t];
            let d, h;
            if (u) return t === "$attrs" && tt(e, "get", t), u(e);
            if ((d = s.__cssModules) && (d = d[t])) return d;
            if (n !== ke && pe(n, t)) return l[t] = 4, n[t];
            if (h = a.config.globalProperties, pe(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: o,
                setupState: r,
                ctx: i
            } = e;
            return Xi(r, t) ? (r[t] = n, !0) : o !== ke && pe(o, t) ? (o[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: o,
                appContext: r,
                propsOptions: i
            }
        }, l) {
            let s;
            return !!n[l] || e !== ke && pe(e, l) || Xi(t, l) || (s = i[0]) && pe(s, l) || pe(o, l) || pe(ho, l) || pe(r.config.globalProperties, l)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function Bb() {
    return _f().slots
}

function _f() {
    const e = gt();
    return e.setupContext || (e.setupContext = rc(e))
}

function Hl(e) {
    return ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let pr = !0;

function Tf(e) {
    const t = il(e),
        n = e.proxy,
        o = e.ctx;
    pr = !1, t.beforeCreate && jl(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: i,
        methods: l,
        watch: s,
        provide: a,
        inject: c,
        created: u,
        beforeMount: d,
        mounted: h,
        beforeUpdate: y,
        updated: b,
        activated: C,
        deactivated: v,
        beforeDestroy: x,
        beforeUnmount: m,
        destroyed: w,
        unmounted: S,
        render: T,
        renderTracked: O,
        renderTriggered: U,
        errorCaptured: I,
        serverPrefetch: L,
        expose: k,
        inheritAttrs: _,
        components: E,
        directives: B,
        filters: ie
    } = t;
    if (c && Ef(c, o, null), l)
        for (const M in l) {
            const V = l[M];
            he(V) && (o[M] = V.bind(n))
        }
    if (r) {
        const M = r.call(n, n);
        Oe(M) && (e.data = Ke(M))
    }
    if (pr = !0, i)
        for (const M in i) {
            const V = i[M],
                fe = he(V) ? V.bind(n, n) : he(V.get) ? V.get.bind(n, n) : ct,
                ve = !he(V) && he(V.set) ? V.set.bind(n) : ct,
                K = Y({
                    get: fe,
                    set: ve
                });
            Object.defineProperty(o, M, {
                enumerable: !0,
                configurable: !0,
                get: () => K.value,
                set: Q => K.value = Q
            })
        }
    if (s)
        for (const M in s) Ha(s[M], o, n, M);
    if (a) {
        const M = he(a) ? a.call(n) : a;
        Reflect.ownKeys(M).forEach(V => {
            Zn(V, M[V])
        })
    }
    u && jl(u, e, "c");

    function P(M, V) {
        ne(V) ? V.forEach(fe => M(fe.bind(n))) : V && M(V.bind(n))
    }
    if (P(bf, d), P(Ge, h), P(Na, y), P(ol, b), P(an, C), P(Lt, v), P(Sf, I), P(xf, O), P(wf, U), P(wt, m), P(Io, S), P(pf, L), ne(k))
        if (k.length) {
            const M = e.exposed || (e.exposed = {});
            k.forEach(V => {
                Object.defineProperty(M, V, {
                    get: () => n[V],
                    set: fe => n[V] = fe
                })
            })
        } else e.exposed || (e.exposed = {});
    T && e.render === ct && (e.render = T), _ != null && (e.inheritAttrs = _), E && (e.components = E), B && (e.directives = B)
}

function Ef(e, t, n = ct) {
    ne(e) && (e = wr(e));
    for (const o in e) {
        const r = e[o];
        let i;
        Oe(r) ? "default" in r ? i = Pt(r.from || o, r.default, !0) : i = Pt(r.from || o) : i = Pt(r), Qe(i) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: l => i.value = l
        }) : t[o] = i
    }
}

function jl(e, t, n) {
    ut(ne(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Ha(e, t, n, o) {
    const r = o.includes(".") ? Ra(n, o) : () => n[o];
    if (Ie(e)) {
        const i = t[e];
        he(i) && ee(r, i)
    } else if (he(e)) ee(r, e.bind(n));
    else if (Oe(e))
        if (ne(e)) e.forEach(i => Ha(i, t, n, o));
        else {
            const i = he(e.handler) ? e.handler.bind(n) : t[e.handler];
            he(i) && ee(r, i, e)
        }
}

function il(e) {
    const t = e.type,
        {
            mixins: n,
            extends: o
        } = t,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: l
            }
        } = e.appContext,
        s = i.get(t);
    let a;
    return s ? a = s : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(c => fi(a, c, l, !0)), fi(a, t, l)), Oe(t) && i.set(t, a), a
}

function fi(e, t, n, o = !1) {
    const {
        mixins: r,
        extends: i
    } = t;
    i && fi(e, i, n, !0), r && r.forEach(l => fi(e, l, n, !0));
    for (const l in t)
        if (!(o && l === "expose")) {
            const s = Of[l] || n && n[l];
            e[l] = s ? s(e[l], t[l]) : t[l]
        } return e
}
const Of = {
    data: Ul,
    props: Wl,
    emits: Wl,
    methods: uo,
    computed: uo,
    beforeCreate: Ze,
    created: Ze,
    beforeMount: Ze,
    mounted: Ze,
    beforeUpdate: Ze,
    updated: Ze,
    beforeDestroy: Ze,
    beforeUnmount: Ze,
    destroyed: Ze,
    unmounted: Ze,
    activated: Ze,
    deactivated: Ze,
    errorCaptured: Ze,
    serverPrefetch: Ze,
    components: uo,
    directives: uo,
    watch: If,
    provide: Ul,
    inject: kf
};

function Ul(e, t) {
    return t ? e ? function () {
        return He(he(e) ? e.call(this, this) : e, he(t) ? t.call(this, this) : t)
    } : t : e
}

function kf(e, t) {
    return uo(wr(e), wr(t))
}

function wr(e) {
    if (ne(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Ze(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function uo(e, t) {
    return e ? He(Object.create(null), e, t) : t
}

function Wl(e, t) {
    return e ? ne(e) && ne(t) ? [...new Set([...e, ...t])] : He(Object.create(null), Hl(e), Hl(t ?? {})) : t
}

function If(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = He(Object.create(null), e);
    for (const o in t) n[o] = Ze(e[o], t[o]);
    return n
}

function ja() {
    return {
        app: null,
        config: {
            isNativeTag: cu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Df = 0;

function Pf(e, t) {
    return function (o, r = null) {
        he(o) || (o = He({}, o)), r != null && !Oe(r) && (r = null);
        const i = ja(),
            l = new WeakSet;
        let s = !1;
        const a = i.app = {
            _uid: Df++,
            _component: o,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: td,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...u) {
                return l.has(c) || (c && he(c.install) ? (l.add(c), c.install(a, ...u)) : he(c) && (l.add(c), c(a, ...u))), a
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), a
            },
            component(c, u) {
                return u ? (i.components[c] = u, a) : i.components[c]
            },
            directive(c, u) {
                return u ? (i.directives[c] = u, a) : i.directives[c]
            },
            mount(c, u, d) {
                if (!s) {
                    const h = f(o, r);
                    return h.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(h, c) : e(h, c, d), s = !0, a._container = c, c.__vue_app__ = a, $i(h.component) || h.component.proxy
                }
            },
            unmount() {
                s && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(c, u) {
                return i.provides[c] = u, a
            },
            runWithContext(c) {
                const u = go;
                go = a;
                try {
                    return c()
                } finally {
                    go = u
                }
            }
        };
        return a
    }
}
let go = null;

function Zn(e, t) {
    if (Ue) {
        let n = Ue.provides;
        const o = Ue.parent && Ue.parent.provides;
        o === n && (n = Ue.provides = Object.create(o)), n[e] = t
    }
}

function Pt(e, t, n = !1) {
    const o = Ue || Ne;
    if (o || go) {
        const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : go._context.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && he(t) ? t.call(o && o.proxy) : t
    }
}

function Af(e, t, n, o = !1) {
    const r = {},
        i = {};
    si(i, Bi, 1), e.propsDefaults = Object.create(null), Ua(e, t, r, i);
    for (const l in e.propsOptions[0]) l in r || (r[l] = void 0);
    n ? e.props = o ? r : Wu(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function Bf(e, t, n, o) {
    const {
        props: r,
        attrs: i,
        vnode: {
            patchFlag: l
        }
    } = e, s = xe(r), [a] = e.propsOptions;
    let c = !1;
    if ((o || l > 0) && !(l & 16)) {
        if (l & 8) {
            const u = e.vnode.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                let h = u[d];
                if (ki(e.emitsOptions, h)) continue;
                const y = t[h];
                if (a)
                    if (pe(i, h)) y !== i[h] && (i[h] = y, c = !0);
                    else {
                        const b = Tt(h);
                        r[b] = xr(a, s, b, y, e, !1)
                    }
                else y !== i[h] && (i[h] = y, c = !0)
            }
        }
    } else {
        Ua(e, t, r, i) && (c = !0);
        let u;
        for (const d in s)(!t || !pe(t, d) && ((u = sn(d)) === d || !pe(t, u))) && (a ? n && (n[d] !== void 0 || n[u] !== void 0) && (r[d] = xr(a, s, d, void 0, e, !0)) : delete r[d]);
        if (i !== s)
            for (const d in i)(!t || !pe(t, d)) && (delete i[d], c = !0)
    }
    c && Dt(e, "set", "$attrs")
}

function Ua(e, t, n, o) {
    const [r, i] = e.propsOptions;
    let l = !1,
        s;
    if (t)
        for (let a in t) {
            if (fo(a)) continue;
            const c = t[a];
            let u;
            r && pe(r, u = Tt(a)) ? !i || !i.includes(u) ? n[u] = c : (s || (s = {}))[u] = c : ki(e.emitsOptions, a) || (!(a in o) || c !== o[a]) && (o[a] = c, l = !0)
        }
    if (i) {
        const a = xe(n),
            c = s || ke;
        for (let u = 0; u < i.length; u++) {
            const d = i[u];
            n[d] = xr(r, a, d, c[d], e, !pe(c, d))
        }
    }
    return l
}

function xr(e, t, n, o, r, i) {
    const l = e[n];
    if (l != null) {
        const s = pe(l, "default");
        if (s && o === void 0) {
            const a = l.default;
            if (l.type !== Function && !l.skipFactory && he(a)) {
                const {
                    propsDefaults: c
                } = r;
                if (n in c) o = c[n];
                else {
                    const u = Do(r);
                    o = c[n] = a.call(null, t), u()
                }
            } else o = a
        }
        l[0] && (i && !s ? o = !1 : l[1] && (o === "" || o === sn(n)) && (o = !0))
    }
    return o
}

function Wa(e, t, n = !1) {
    const o = t.propsCache,
        r = o.get(e);
    if (r) return r;
    const i = e.props,
        l = {},
        s = [];
    let a = !1;
    if (!he(e)) {
        const u = d => {
            a = !0;
            const [h, y] = Wa(d, t, !0);
            He(l, h), y && s.push(...y)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!i && !a) return Oe(e) && o.set(e, Rn), Rn;
    if (ne(i))
        for (let u = 0; u < i.length; u++) {
            const d = Tt(i[u]);
            Kl(d) && (l[d] = ke)
        } else if (i)
            for (const u in i) {
                const d = Tt(u);
                if (Kl(d)) {
                    const h = i[u],
                        y = l[d] = ne(h) || he(h) ? {
                            type: h
                        } : He({}, h);
                    if (y) {
                        const b = Gl(Boolean, y.type),
                            C = Gl(String, y.type);
                        y[0] = b > -1, y[1] = C < 0 || b < C, (b > -1 || pe(y, "default")) && s.push(d)
                    }
                }
            }
    const c = [l, s];
    return Oe(e) && o.set(e, c), c
}

function Kl(e) {
    return e[0] !== "$" && !fo(e)
}

function Yl(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function ql(e, t) {
    return Yl(e) === Yl(t)
}

function Gl(e, t) {
    return ne(t) ? t.findIndex(n => ql(n, e)) : he(t) && ql(t, e) ? 0 : -1
}
const Ka = e => e[0] === "_" || e === "$stable",
    rl = e => ne(e) ? e.map(Ct) : [Ct(e)],
    $f = (e, t, n) => {
        if (t._n) return t;
        const o = tf((...r) => rl(t(...r)), n);
        return o._c = !1, o
    },
    Ya = (e, t, n) => {
        const o = e._ctx;
        for (const r in e) {
            if (Ka(r)) continue;
            const i = e[r];
            if (he(i)) t[r] = $f(r, i, o);
            else if (i != null) {
                const l = rl(i);
                t[r] = () => l
            }
        }
    },
    qa = (e, t) => {
        const n = rl(t);
        e.slots.default = () => n
    },
    Rf = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = xe(t), si(t, "_", n)) : Ya(t, e.slots = {})
        } else e.slots = {}, t && qa(e, t);
        si(e.slots, Bi, 1)
    },
    Mf = (e, t, n) => {
        const {
            vnode: o,
            slots: r
        } = e;
        let i = !0,
            l = ke;
        if (o.shapeFlag & 32) {
            const s = t._;
            s ? n && s === 1 ? i = !1 : (He(r, t), !n && s === 1 && delete r._) : (i = !t.$stable, Ya(t, r)), l = t
        } else t && (qa(e, t), l = {
            default: 1
        });
        if (i)
            for (const s in r) !Ka(s) && l[s] == null && delete r[s]
    };

function Sr(e, t, n, o, r = !1) {
    if (ne(e)) {
        e.forEach((h, y) => Sr(h, t && (ne(t) ? t[y] : t), n, o, r));
        return
    }
    if (Nn(o) && !r) return;
    const i = o.shapeFlag & 4 ? $i(o.component) || o.component.proxy : o.el,
        l = r ? null : i,
        {
            i: s,
            r: a
        } = e,
        c = t && t.r,
        u = s.refs === ke ? s.refs = {} : s.refs,
        d = s.setupState;
    if (c != null && c !== a && (Ie(c) ? (u[c] = null, pe(d, c) && (d[c] = null)) : Qe(c) && (c.value = null)), he(a)) Qt(a, s, 12, [l, u]);
    else {
        const h = Ie(a),
            y = Qe(a);
        if (h || y) {
            const b = () => {
                if (e.f) {
                    const C = h ? pe(d, a) ? d[a] : u[a] : a.value;
                    r ? ne(C) && jr(C, i) : ne(C) ? C.includes(i) || C.push(i) : h ? (u[a] = [i], pe(d, a) && (d[a] = u[a])) : (a.value = [i], e.k && (u[e.k] = a.value))
                } else h ? (u[a] = l, pe(d, a) && (d[a] = l)) : y && (a.value = l, e.k && (u[e.k] = l))
            };
            l ? (b.id = -1, Ye(b, n)) : b()
        }
    }
}
const Ye = cf;

function Ff(e) {
    return Lf(e)
}

function Lf(e, t) {
    const n = la();
    n.__VUE__ = !0;
    const {
        insert: o,
        remove: r,
        patchProp: i,
        createElement: l,
        createText: s,
        createComment: a,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: h,
        setScopeId: y = ct,
        insertStaticContent: b
    } = e, C = (g, p, A, $ = null, R = null, j = null, q = void 0, z = null, W = !!p.dynamicChildren) => {
        if (g === p) return;
        g && !Xt(g, p) && ($ = D(g), Q(g, R, j, !0), g = null), p.patchFlag === -2 && (W = !1, p.dynamicChildren = null);
        const {
            type: F,
            ref: X,
            shapeFlag: ce
        } = p;
        switch (F) {
            case Ai:
                v(g, p, A, $);
                break;
            case ft:
                x(g, p, A, $);
                break;
            case Ji:
                g == null && m(p, A, $, q);
                break;
            case Je:
                E(g, p, A, $, R, j, q, z, W);
                break;
            default:
                ce & 1 ? T(g, p, A, $, R, j, q, z, W) : ce & 6 ? B(g, p, A, $, R, j, q, z, W) : (ce & 64 || ce & 128) && F.process(g, p, A, $, R, j, q, z, W, ye)
        }
        X != null && R && Sr(X, g && g.ref, j, p || g, !p)
    }, v = (g, p, A, $) => {
        if (g == null) o(p.el = s(p.children), A, $);
        else {
            const R = p.el = g.el;
            p.children !== g.children && c(R, p.children)
        }
    }, x = (g, p, A, $) => {
        g == null ? o(p.el = a(p.children || ""), A, $) : p.el = g.el
    }, m = (g, p, A, $) => {
        [g.el, g.anchor] = b(g.children, p, A, $, g.el, g.anchor)
    }, w = ({
        el: g,
        anchor: p
    }, A, $) => {
        let R;
        for (; g && g !== p;) R = h(g), o(g, A, $), g = R;
        o(p, A, $)
    }, S = ({
        el: g,
        anchor: p
    }) => {
        let A;
        for (; g && g !== p;) A = h(g), r(g), g = A;
        r(p)
    }, T = (g, p, A, $, R, j, q, z, W) => {
        p.type === "svg" ? q = "svg" : p.type === "math" && (q = "mathml"), g == null ? O(p, A, $, R, j, q, z, W) : L(g, p, R, j, q, z, W)
    }, O = (g, p, A, $, R, j, q, z) => {
        let W, F;
        const {
            props: X,
            shapeFlag: ce,
            transition: te,
            dirs: de
        } = g;
        if (W = g.el = l(g.type, j, X && X.is, X), ce & 8 ? u(W, g.children) : ce & 16 && I(g.children, W, null, $, R, Zi(g, j), q, z), de && fn(g, null, $, "created"), U(W, g, g.scopeId, q, $), X) {
            for (const Ee in X) Ee !== "value" && !fo(Ee) && i(W, Ee, null, X[Ee], j, g.children, $, R, ae);
            "value" in X && i(W, "value", null, X.value, j), (F = X.onVnodeBeforeMount) && at(F, $, g)
        }
        de && fn(g, null, $, "beforeMount");
        const be = Vf(R, te);
        be && te.beforeEnter(W), o(W, p, A), ((F = X && X.onVnodeMounted) || be || de) && Ye(() => {
            F && at(F, $, g), be && te.enter(W), de && fn(g, null, $, "mounted")
        }, R)
    }, U = (g, p, A, $, R) => {
        if (A && y(g, A), $)
            for (let j = 0; j < $.length; j++) y(g, $[j]);
        if (R) {
            let j = R.subTree;
            if (p === j) {
                const q = R.vnode;
                U(g, q, q.scopeId, q.slotScopeIds, R.parent)
            }
        }
    }, I = (g, p, A, $, R, j, q, z, W = 0) => {
        for (let F = W; F < g.length; F++) {
            const X = g[F] = z ? qt(g[F]) : Ct(g[F]);
            C(null, X, p, A, $, R, j, q, z)
        }
    }, L = (g, p, A, $, R, j, q) => {
        const z = p.el = g.el;
        let {
            patchFlag: W,
            dynamicChildren: F,
            dirs: X
        } = p;
        W |= g.patchFlag & 16;
        const ce = g.props || ke,
            te = p.props || ke;
        let de;
        if (A && dn(A, !1), (de = te.onVnodeBeforeUpdate) && at(de, A, p, g), X && fn(p, g, A, "beforeUpdate"), A && dn(A, !0), F ? k(g.dynamicChildren, F, z, A, $, Zi(p, R), j) : q || V(g, p, z, null, A, $, Zi(p, R), j, !1), W > 0) {
            if (W & 16) _(z, p, ce, te, A, $, R);
            else if (W & 2 && ce.class !== te.class && i(z, "class", null, te.class, R), W & 4 && i(z, "style", ce.style, te.style, R), W & 8) {
                const be = p.dynamicProps;
                for (let Ee = 0; Ee < be.length; Ee++) {
                    const De = be[Ee],
                        je = ce[De],
                        vt = te[De];
                    (vt !== je || De === "value") && i(z, De, je, vt, R, g.children, A, $, ae)
                }
            }
            W & 1 && g.children !== p.children && u(z, p.children)
        } else !q && F == null && _(z, p, ce, te, A, $, R);
        ((de = te.onVnodeUpdated) || X) && Ye(() => {
            de && at(de, A, p, g), X && fn(p, g, A, "updated")
        }, $)
    }, k = (g, p, A, $, R, j, q) => {
        for (let z = 0; z < p.length; z++) {
            const W = g[z],
                F = p[z],
                X = W.el && (W.type === Je || !Xt(W, F) || W.shapeFlag & 70) ? d(W.el) : A;
            C(W, F, X, null, $, R, j, q, !0)
        }
    }, _ = (g, p, A, $, R, j, q) => {
        if (A !== $) {
            if (A !== ke)
                for (const z in A) !fo(z) && !(z in $) && i(g, z, A[z], null, q, p.children, R, j, ae);
            for (const z in $) {
                if (fo(z)) continue;
                const W = $[z],
                    F = A[z];
                W !== F && z !== "value" && i(g, z, F, W, q, p.children, R, j, ae)
            }
            "value" in $ && i(g, "value", A.value, $.value, q)
        }
    }, E = (g, p, A, $, R, j, q, z, W) => {
        const F = p.el = g ? g.el : s(""),
            X = p.anchor = g ? g.anchor : s("");
        let {
            patchFlag: ce,
            dynamicChildren: te,
            slotScopeIds: de
        } = p;
        de && (z = z ? z.concat(de) : de), g == null ? (o(F, A, $), o(X, A, $), I(p.children || [], A, X, R, j, q, z, W)) : ce > 0 && ce & 64 && te && g.dynamicChildren ? (k(g.dynamicChildren, te, A, R, j, q, z), (p.key != null || R && p === R.subTree) && ll(g, p, !0)) : V(g, p, A, X, R, j, q, z, W)
    }, B = (g, p, A, $, R, j, q, z, W) => {
        p.slotScopeIds = z, g == null ? p.shapeFlag & 512 ? R.ctx.activate(p, A, $, q, W) : ie(p, A, $, R, j, q, W) : N(g, p, W)
    }, ie = (g, p, A, $, R, j, q) => {
        const z = g.component = Gf(g, $, R);
        if (ko(g) && (z.ctx.renderer = ye), Xf(z), z.asyncDep) {
            if (R && R.registerDep(z, P), !g.el) {
                const W = z.subTree = f(ft);
                x(null, W, p, A)
            }
        } else P(z, g, p, A, R, j, q)
    }, N = (g, p, A) => {
        const $ = p.component = g.component;
        if (rf(g, p, A))
            if ($.asyncDep && !$.asyncResolved) {
                M($, p, A);
                return
            } else $.next = p, Zu($.update), $.effect.dirty = !0, $.update();
        else p.el = g.el, $.vnode = p
    }, P = (g, p, A, $, R, j, q) => {
        const z = () => {
                if (g.isMounted) {
                    let {
                        next: X,
                        bu: ce,
                        u: te,
                        parent: de,
                        vnode: be
                    } = g; {
                        const kn = Ga(g);
                        if (kn) {
                            X && (X.el = be.el, M(g, X, q)), kn.asyncDep.then(() => {
                                g.isUnmounted || z()
                            });
                            return
                        }
                    }
                    let Ee = X,
                        De;
                    dn(g, !1), X ? (X.el = be.el, M(g, X, q)) : X = be, ce && Fn(ce), (De = X.props && X.props.onVnodeBeforeUpdate) && at(De, de, X, be), dn(g, !0);
                    const je = Wi(g),
                        vt = g.subTree;
                    g.subTree = je, C(vt, je, d(vt.el), D(vt), g, R, j), X.el = je.el, Ee === null && lf(g, je.el), te && Ye(te, R), (De = X.props && X.props.onVnodeUpdated) && Ye(() => at(De, de, X, be), R)
                } else {
                    let X;
                    const {
                        el: ce,
                        props: te
                    } = p, {
                        bm: de,
                        m: be,
                        parent: Ee
                    } = g, De = Nn(p);
                    if (dn(g, !1), de && Fn(de), !De && (X = te && te.onVnodeBeforeMount) && at(X, Ee, p), dn(g, !0), ce && Ae) {
                        const je = () => {
                            g.subTree = Wi(g), Ae(ce, g.subTree, g, R, null)
                        };
                        De ? p.type.__asyncLoader().then(() => !g.isUnmounted && je()) : je()
                    } else {
                        const je = g.subTree = Wi(g);
                        C(null, je, A, $, g, R, j), p.el = je.el
                    }
                    if (be && Ye(be, R), !De && (X = te && te.onVnodeMounted)) {
                        const je = p;
                        Ye(() => at(X, Ee, je), R)
                    }(p.shapeFlag & 256 || Ee && Nn(Ee.vnode) && Ee.vnode.shapeFlag & 256) && g.a && Ye(g.a, R), g.isMounted = !0, p = A = $ = null
                }
            },
            W = g.effect = new Kr(z, ct, () => Oi(F), g.scope),
            F = g.update = () => {
                W.dirty && W.run()
            };
        F.id = g.uid, dn(g, !0), F()
    }, M = (g, p, A) => {
        p.component = g;
        const $ = g.vnode.props;
        g.vnode = p, g.next = null, Bf(g, p.props, $, A), Mf(g, p.children, A), _n(), Ll(g), Tn()
    }, V = (g, p, A, $, R, j, q, z, W = !1) => {
        const F = g && g.children,
            X = g ? g.shapeFlag : 0,
            ce = p.children,
            {
                patchFlag: te,
                shapeFlag: de
            } = p;
        if (te > 0) {
            if (te & 128) {
                ve(F, ce, A, $, R, j, q, z, W);
                return
            } else if (te & 256) {
                fe(F, ce, A, $, R, j, q, z, W);
                return
            }
        }
        de & 8 ? (X & 16 && ae(F, R, j), ce !== F && u(A, ce)) : X & 16 ? de & 16 ? ve(F, ce, A, $, R, j, q, z, W) : ae(F, R, j, !0) : (X & 8 && u(A, ""), de & 16 && I(ce, A, $, R, j, q, z, W))
    }, fe = (g, p, A, $, R, j, q, z, W) => {
        g = g || Rn, p = p || Rn;
        const F = g.length,
            X = p.length,
            ce = Math.min(F, X);
        let te;
        for (te = 0; te < ce; te++) {
            const de = p[te] = W ? qt(p[te]) : Ct(p[te]);
            C(g[te], de, A, null, R, j, q, z, W)
        }
        F > X ? ae(g, R, j, !0, !1, ce) : I(p, A, $, R, j, q, z, W, ce)
    }, ve = (g, p, A, $, R, j, q, z, W) => {
        let F = 0;
        const X = p.length;
        let ce = g.length - 1,
            te = X - 1;
        for (; F <= ce && F <= te;) {
            const de = g[F],
                be = p[F] = W ? qt(p[F]) : Ct(p[F]);
            if (Xt(de, be)) C(de, be, A, null, R, j, q, z, W);
            else break;
            F++
        }
        for (; F <= ce && F <= te;) {
            const de = g[ce],
                be = p[te] = W ? qt(p[te]) : Ct(p[te]);
            if (Xt(de, be)) C(de, be, A, null, R, j, q, z, W);
            else break;
            ce--, te--
        }
        if (F > ce) {
            if (F <= te) {
                const de = te + 1,
                    be = de < X ? p[de].el : $;
                for (; F <= te;) C(null, p[F] = W ? qt(p[F]) : Ct(p[F]), A, be, R, j, q, z, W), F++
            }
        } else if (F > te)
            for (; F <= ce;) Q(g[F], R, j, !0), F++;
        else {
            const de = F,
                be = F,
                Ee = new Map;
            for (F = be; F <= te; F++) {
                const ot = p[F] = W ? qt(p[F]) : Ct(p[F]);
                ot.key != null && Ee.set(ot.key, F)
            }
            let De, je = 0;
            const vt = te - be + 1;
            let kn = !1,
                El = 0;
            const eo = new Array(vt);
            for (F = 0; F < vt; F++) eo[F] = 0;
            for (F = de; F <= ce; F++) {
                const ot = g[F];
                if (je >= vt) {
                    Q(ot, R, j, !0);
                    continue
                }
                let St;
                if (ot.key != null) St = Ee.get(ot.key);
                else
                    for (De = be; De <= te; De++)
                        if (eo[De - be] === 0 && Xt(ot, p[De])) {
                            St = De;
                            break
                        } St === void 0 ? Q(ot, R, j, !0) : (eo[St - be] = F + 1, St >= El ? El = St : kn = !0, C(ot, p[St], A, null, R, j, q, z, W), je++)
            }
            const Ol = kn ? Nf(eo) : Rn;
            for (De = Ol.length - 1, F = vt - 1; F >= 0; F--) {
                const ot = be + F,
                    St = p[ot],
                    kl = ot + 1 < X ? p[ot + 1].el : $;
                eo[F] === 0 ? C(null, St, A, kl, R, j, q, z, W) : kn && (De < 0 || F !== Ol[De] ? K(St, A, kl, 2) : De--)
            }
        }
    }, K = (g, p, A, $, R = null) => {
        const {
            el: j,
            type: q,
            transition: z,
            children: W,
            shapeFlag: F
        } = g;
        if (F & 6) {
            K(g.component.subTree, p, A, $);
            return
        }
        if (F & 128) {
            g.suspense.move(p, A, $);
            return
        }
        if (F & 64) {
            q.move(g, p, A, ye);
            return
        }
        if (q === Je) {
            o(j, p, A);
            for (let ce = 0; ce < W.length; ce++) K(W[ce], p, A, $);
            o(g.anchor, p, A);
            return
        }
        if (q === Ji) {
            w(g, p, A);
            return
        }
        if ($ !== 2 && F & 1 && z)
            if ($ === 0) z.beforeEnter(j), o(j, p, A), Ye(() => z.enter(j), R);
            else {
                const {
                    leave: ce,
                    delayLeave: te,
                    afterLeave: de
                } = z, be = () => o(j, p, A), Ee = () => {
                    ce(j, () => {
                        be(), de && de()
                    })
                };
                te ? te(j, be, Ee) : Ee()
            }
        else o(j, p, A)
    }, Q = (g, p, A, $ = !1, R = !1) => {
        const {
            type: j,
            props: q,
            ref: z,
            children: W,
            dynamicChildren: F,
            shapeFlag: X,
            patchFlag: ce,
            dirs: te
        } = g;
        if (z != null && Sr(z, null, A, g, !0), X & 256) {
            p.ctx.deactivate(g);
            return
        }
        const de = X & 1 && te,
            be = !Nn(g);
        let Ee;
        if (be && (Ee = q && q.onVnodeBeforeUnmount) && at(Ee, p, g), X & 6) G(g.component, A, $);
        else {
            if (X & 128) {
                g.suspense.unmount(A, $);
                return
            }
            de && fn(g, null, p, "beforeUnmount"), X & 64 ? g.type.remove(g, p, A, R, ye, $) : F && (j !== Je || ce > 0 && ce & 64) ? ae(F, p, A, !1, !0) : (j === Je && ce & 384 || !R && X & 16) && ae(W, p, A), $ && me(g)
        }(be && (Ee = q && q.onVnodeUnmounted) || de) && Ye(() => {
            Ee && at(Ee, p, g), de && fn(g, null, p, "unmounted")
        }, A)
    }, me = g => {
        const {
            type: p,
            el: A,
            anchor: $,
            transition: R
        } = g;
        if (p === Je) {
            $e(A, $);
            return
        }
        if (p === Ji) {
            S(g);
            return
        }
        const j = () => {
            r(A), R && !R.persisted && R.afterLeave && R.afterLeave()
        };
        if (g.shapeFlag & 1 && R && !R.persisted) {
            const {
                leave: q,
                delayLeave: z
            } = R, W = () => q(A, j);
            z ? z(g.el, j, W) : W()
        } else j()
    }, $e = (g, p) => {
        let A;
        for (; g !== p;) A = h(g), r(g), g = A;
        r(p)
    }, G = (g, p, A) => {
        const {
            bum: $,
            scope: R,
            update: j,
            subTree: q,
            um: z
        } = g;
        $ && Fn($), R.stop(), j && (j.active = !1, Q(q, g, p, A)), z && Ye(z, p), Ye(() => {
            g.isUnmounted = !0
        }, p), p && p.pendingBranch && !p.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
    }, ae = (g, p, A, $ = !1, R = !1, j = 0) => {
        for (let q = j; q < g.length; q++) Q(g[q], p, A, $, R)
    }, D = g => g.shapeFlag & 6 ? D(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : h(g.anchor || g.el);
    let re = !1;
    const le = (g, p, A) => {
            g == null ? p._vnode && Q(p._vnode, null, null, !0) : C(p._vnode || null, g, p, null, null, null, A), re || (re = !0, Ll(), Da(), re = !1), p._vnode = g
        },
        ye = {
            p: C,
            um: Q,
            m: K,
            r: me,
            mt: ie,
            mc: I,
            pc: V,
            pbc: k,
            n: D,
            o: e
        };
    let Ce, Ae;
    return t && ([Ce, Ae] = t(ye)), {
        render: le,
        hydrate: Ce,
        createApp: Pf(le, Ce)
    }
}

function Zi({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function dn({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function Vf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function ll(e, t, n = !1) {
    const o = e.children,
        r = t.children;
    if (ne(o) && ne(r))
        for (let i = 0; i < o.length; i++) {
            const l = o[i];
            let s = r[i];
            s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = r[i] = qt(r[i]), s.el = l.el), n || ll(l, s)), s.type === Ai && (s.el = l.el)
        }
}

function Nf(e) {
    const t = e.slice(),
        n = [0];
    let o, r, i, l, s;
    const a = e.length;
    for (o = 0; o < a; o++) {
        const c = e[o];
        if (c !== 0) {
            if (r = n[n.length - 1], e[r] < c) {
                t[o] = r, n.push(o);
                continue
            }
            for (i = 0, l = n.length - 1; i < l;) s = i + l >> 1, e[n[s]] < c ? i = s + 1 : l = s;
            c < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o)
        }
    }
    for (i = n.length, l = n[i - 1]; i-- > 0;) n[i] = l, l = t[l];
    return n
}

function Ga(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ga(t)
}
const zf = e => e.__isTeleport,
    vo = e => e && (e.disabled || e.disabled === ""),
    Xl = e => typeof SVGElement < "u" && e instanceof SVGElement,
    Zl = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    Cr = (e, t) => {
        const n = e && e.to;
        return Ie(n) ? t ? t(n) : null : n
    },
    Hf = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, o, r, i, l, s, a, c) {
            const {
                mc: u,
                pc: d,
                pbc: h,
                o: {
                    insert: y,
                    querySelector: b,
                    createText: C,
                    createComment: v
                }
            } = c, x = vo(t.props);
            let {
                shapeFlag: m,
                children: w,
                dynamicChildren: S
            } = t;
            if (e == null) {
                const T = t.el = C(""),
                    O = t.anchor = C("");
                y(T, n, o), y(O, n, o);
                const U = t.target = Cr(t.props, b),
                    I = t.targetAnchor = C("");
                U && (y(I, U), l === "svg" || Xl(U) ? l = "svg" : (l === "mathml" || Zl(U)) && (l = "mathml"));
                const L = (k, _) => {
                    m & 16 && u(w, k, _, r, i, l, s, a)
                };
                x ? L(n, O) : U && L(U, I)
            } else {
                t.el = e.el;
                const T = t.anchor = e.anchor,
                    O = t.target = e.target,
                    U = t.targetAnchor = e.targetAnchor,
                    I = vo(e.props),
                    L = I ? n : O,
                    k = I ? T : U;
                if (l === "svg" || Xl(O) ? l = "svg" : (l === "mathml" || Zl(O)) && (l = "mathml"), S ? (h(e.dynamicChildren, S, L, r, i, l, s), ll(e, t, !0)) : a || d(e, t, L, k, r, i, l, s, !1), x) I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Wo(t, n, T, c, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const _ = t.target = Cr(t.props, b);
                    _ && Wo(t, _, null, c, 0)
                } else I && Wo(t, O, U, c, 1)
            }
            Xa(t)
        },
        remove(e, t, n, o, {
            um: r,
            o: {
                remove: i
            }
        }, l) {
            const {
                shapeFlag: s,
                children: a,
                anchor: c,
                targetAnchor: u,
                target: d,
                props: h
            } = e;
            if (d && i(u), l && i(c), s & 16) {
                const y = l || !vo(h);
                for (let b = 0; b < a.length; b++) {
                    const C = a[b];
                    r(C, t, n, y, !!C.dynamicChildren)
                }
            }
        },
        move: Wo,
        hydrate: jf
    };

function Wo(e, t, n, {
    o: {
        insert: o
    },
    m: r
}, i = 2) {
    i === 0 && o(e.targetAnchor, t, n);
    const {
        el: l,
        anchor: s,
        shapeFlag: a,
        children: c,
        props: u
    } = e, d = i === 2;
    if (d && o(l, t, n), (!d || vo(u)) && a & 16)
        for (let h = 0; h < c.length; h++) r(c[h], t, n, 2);
    d && o(s, t, n)
}

function jf(e, t, n, o, r, i, {
    o: {
        nextSibling: l,
        parentNode: s,
        querySelector: a
    }
}, c) {
    const u = t.target = Cr(t.props, a);
    if (u) {
        const d = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (vo(t.props)) t.anchor = c(l(e), t, s(e), n, o, r, i), t.targetAnchor = d;
            else {
                t.anchor = l(e);
                let h = d;
                for (; h;)
                    if (h = l(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
                        t.targetAnchor = h, u._lpa = t.targetAnchor && l(t.targetAnchor);
                        break
                    } c(d, t, u, n, o, r, i)
            } Xa(t)
    }
    return t.anchor && l(t.anchor)
}
const sl = Hf;

function Xa(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}
const Je = Symbol.for("v-fgt"),
    Ai = Symbol.for("v-txt"),
    ft = Symbol.for("v-cmt"),
    Ji = Symbol.for("v-stc"),
    mo = [];
let bt = null;

function Za(e = !1) {
    mo.push(bt = e ? null : [])
}

function Uf() {
    mo.pop(), bt = mo[mo.length - 1] || null
}
let Co = 1;

function Jl(e) {
    Co += e
}

function Ja(e) {
    return e.dynamicChildren = Co > 0 ? bt || Rn : null, Uf(), Co > 0 && bt && bt.push(e), e
}

function $b(e, t, n, o, r, i) {
    return Ja(tc(e, t, n, o, r, i, !0))
}

function Qa(e, t, n, o, r) {
    return Ja(f(e, t, n, o, r, !0))
}

function Un(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Xt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Bi = "__vInternal",
    ec = ({
        key: e
    }) => e ?? null,
    ni = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || Qe(e) || he(e) ? {
        i: Ne,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function tc(e, t = null, n = null, o = 0, r = null, i = e === Je ? 0 : 1, l = !1, s = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ec(t),
        ref: t && ni(t),
        scopeId: Ii,
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
        shapeFlag: i,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Ne
    };
    return s ? (al(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ie(n) ? 8 : 16), Co > 0 && !l && bt && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && bt.push(a), a
}
const f = Wf;

function Wf(e, t = null, n = null, o = 0, r = null, i = !1) {
    if ((!e || e === Ba) && (e = ft), Un(e)) {
        const s = Rt(e, t, !0);
        return n && al(s, n), Co > 0 && !i && bt && (s.shapeFlag & 6 ? bt[bt.indexOf(e)] = s : bt.push(s)), s.patchFlag |= -2, s
    }
    if (Qf(e) && (e = e.__vccOpts), t) {
        t = Kf(t);
        let {
            class: s,
            style: a
        } = t;
        s && !Ie(s) && (t.class = Ti(s)), Oe(a) && (Sa(a) && !ne(a) && (a = He({}, a)), t.style = _i(a))
    }
    const l = Ie(e) ? 1 : $a(e) ? 128 : zf(e) ? 64 : Oe(e) ? 4 : he(e) ? 2 : 0;
    return tc(e, t, n, o, r, l, i, !0)
}

function Kf(e) {
    return e ? Sa(e) || Bi in e ? He({}, e) : e : null
}

function Rt(e, t, n = !1) {
    const {
        props: o,
        ref: r,
        patchFlag: i,
        children: l
    } = e, s = t ? Be(o || {}, t) : o;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: s,
        key: s && ec(s),
        ref: t && t.ref ? n && r ? ne(r) ? r.concat(ni(t)) : [r, ni(t)] : ni(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Je ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Rt(e.ssContent),
        ssFallback: e.ssFallback && Rt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function nc(e = " ", t = 0) {
    return f(Ai, null, e, t)
}

function Rb(e = "", t = !1) {
    return t ? (Za(), Qa(ft, null, e)) : f(ft, null, e)
}

function Ct(e) {
    return e == null || typeof e == "boolean" ? f(ft) : ne(e) ? f(Je, null, e.slice()) : typeof e == "object" ? qt(e) : f(Ai, null, String(e))
}

function qt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e)
}

function al(e, t) {
    let n = 0;
    const {
        shapeFlag: o
    } = e;
    if (t == null) t = null;
    else if (ne(t)) n = 16;
    else if (typeof t == "object")
        if (o & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), al(e, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !(Bi in t) ? t._ctx = Ne : r === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else he(t) ? (t = {
        default: t,
        _ctx: Ne
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [nc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Be(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const r in o)
            if (r === "class") t.class !== o.class && (t.class = Ti([t.class, o.class]));
            else if (r === "style") t.style = _i([t.style, o.style]);
        else if (xi(r)) {
            const i = t[r],
                l = o[r];
            l && i !== l && !(ne(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l)
        } else r !== "" && (t[r] = o[r])
    }
    return t
}

function at(e, t, n, o = null) {
    ut(e, t, 7, [n, o])
}
const Yf = ja();
let qf = 0;

function Gf(e, t, n) {
    const o = e.type,
        r = (t ? t.appContext : e.appContext) || Yf,
        i = {
            uid: qf++,
            vnode: e,
            type: o,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new ca(!0),
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
            propsOptions: Wa(o, r),
            emitsOptions: Aa(o, r),
            emit: null,
            emitted: null,
            propsDefaults: ke,
            inheritAttrs: o.inheritAttrs,
            ctx: ke,
            data: ke,
            props: ke,
            attrs: ke,
            slots: ke,
            refs: ke,
            setupState: ke,
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
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = ef.bind(null, i), e.ce && e.ce(i), i
}
let Ue = null;
const gt = () => Ue || Ne;
let di, _r; {
    const e = la(),
        t = (n, o) => {
            let r;
            return (r = e[n]) || (r = e[n] = []), r.push(o), i => {
                r.length > 1 ? r.forEach(l => l(i)) : r[0](i)
            }
        };
    di = t("__VUE_INSTANCE_SETTERS__", n => Ue = n), _r = t("__VUE_SSR_SETTERS__", n => Po = n)
}
const Do = e => {
        const t = Ue;
        return di(e), e.scope.on(), () => {
            e.scope.off(), di(t)
        }
    },
    Ql = () => {
        Ue && Ue.scope.off(), di(null)
    };

function oc(e) {
    return e.vnode.shapeFlag & 4
}
let Po = !1;

function Xf(e, t = !1) {
    t && _r(t);
    const {
        props: n,
        children: o
    } = e.vnode, r = oc(e);
    Af(e, n, r, t), Rf(e, o);
    const i = r ? Zf(e, t) : void 0;
    return t && _r(!1), i
}

function Zf(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Ca(new Proxy(e.ctx, Cf));
    const {
        setup: o
    } = n;
    if (o) {
        const r = e.setupContext = o.length > 1 ? rc(e) : null,
            i = Do(e);
        _n();
        const l = Qt(o, e, 0, [e.props, r]);
        if (Tn(), i(), oa(l)) {
            if (l.then(Ql, Ql), t) return l.then(s => {
                es(e, s, t)
            }).catch(s => {
                Oo(s, e, 0)
            });
            e.asyncDep = l
        } else es(e, l, t)
    } else ic(e, t)
}

function es(e, t, n) {
    he(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Oe(t) && (e.setupState = Oa(t)), ic(e, n)
}
let ts;

function ic(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && ts && !o.render) {
            const r = o.template || il(e).template;
            if (r) {
                const {
                    isCustomElement: i,
                    compilerOptions: l
                } = e.appContext.config, {
                    delimiters: s,
                    compilerOptions: a
                } = o, c = He(He({
                    isCustomElement: i,
                    delimiters: s
                }, l), a);
                o.render = ts(r, c)
            }
        }
        e.render = o.render || ct
    } {
        const r = Do(e);
        _n();
        try {
            Tf(e)
        } finally {
            Tn(), r()
        }
    }
}

function Jf(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return tt(e, "get", "$attrs"), t[n]
        }
    }))
}

function rc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return Jf(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function $i(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Oa(Ca(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in ho) return ho[n](e)
        },
        has(t, n) {
            return n in t || n in ho
        }
    }))
}

function Tr(e, t = !0) {
    return he(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Qf(e) {
    return he(e) && "__vccOpts" in e
}
const Y = (e, t) => Ku(e, t, Po);

function ed(e, t, n) {
    const o = arguments.length;
    return o === 2 ? Oe(t) && !ne(t) ? Un(t) ? f(e, null, [t]) : f(e, t) : f(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Un(n) && (n = [n]), f(e, t, n))
}
const td = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const nd = "http://www.w3.org/2000/svg",
    od = "http://www.w3.org/1998/Math/MathML",
    Gt = typeof document < "u" ? document : null,
    ns = Gt && Gt.createElement("template"),
    id = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, o) => {
            const r = t === "svg" ? Gt.createElementNS(nd, e) : t === "mathml" ? Gt.createElementNS(od, e) : Gt.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r
        },
        createText: e => Gt.createTextNode(e),
        createComment: e => Gt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Gt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, r, i) {
            const l = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                ns.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
                const s = ns.content;
                if (o === "svg" || o === "mathml") {
                    const a = s.firstChild;
                    for (; a.firstChild;) s.appendChild(a.firstChild);
                    s.removeChild(a)
                }
                t.insertBefore(s, n)
            }
            return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Ht = "transition",
    to = "animation",
    _o = Symbol("_vtc"),
    Ao = (e, {
        slots: t
    }) => ed(vf, rd(e), t);
Ao.displayName = "Transition";
const lc = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Ao.props = He({}, Ma, lc);
const hn = (e, t = []) => {
        ne(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    os = e => e ? ne(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function rd(e) {
    const t = {};
    for (const E in e) E in lc || (t[E] = e[E]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: o,
        duration: r,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: l = `${n}-enter-active`,
        enterToClass: s = `${n}-enter-to`,
        appearFromClass: a = i,
        appearActiveClass: c = l,
        appearToClass: u = s,
        leaveFromClass: d = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: y = `${n}-leave-to`
    } = e, b = ld(r), C = b && b[0], v = b && b[1], {
        onBeforeEnter: x,
        onEnter: m,
        onEnterCancelled: w,
        onLeave: S,
        onLeaveCancelled: T,
        onBeforeAppear: O = x,
        onAppear: U = m,
        onAppearCancelled: I = w
    } = t, L = (E, B, ie) => {
        gn(E, B ? u : s), gn(E, B ? c : l), ie && ie()
    }, k = (E, B) => {
        E._isLeaving = !1, gn(E, d), gn(E, y), gn(E, h), B && B()
    }, _ = E => (B, ie) => {
        const N = E ? U : m,
            P = () => L(B, E, ie);
        hn(N, [B, P]), is(() => {
            gn(B, E ? a : i), jt(B, E ? u : s), os(N) || rs(B, o, C, P)
        })
    };
    return He(t, {
        onBeforeEnter(E) {
            hn(x, [E]), jt(E, i), jt(E, l)
        },
        onBeforeAppear(E) {
            hn(O, [E]), jt(E, a), jt(E, c)
        },
        onEnter: _(!1),
        onAppear: _(!0),
        onLeave(E, B) {
            E._isLeaving = !0;
            const ie = () => k(E, B);
            jt(E, d), cd(), jt(E, h), is(() => {
                E._isLeaving && (gn(E, d), jt(E, y), os(S) || rs(E, o, v, ie))
            }), hn(S, [E, ie])
        },
        onEnterCancelled(E) {
            L(E, !1), hn(w, [E])
        },
        onAppearCancelled(E) {
            L(E, !0), hn(I, [E])
        },
        onLeaveCancelled(E) {
            k(E), hn(T, [E])
        }
    })
}

function ld(e) {
    if (e == null) return null;
    if (Oe(e)) return [Qi(e.enter), Qi(e.leave)]; {
        const t = Qi(e);
        return [t, t]
    }
}

function Qi(e) {
    return vu(e)
}

function jt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[_o] || (e[_o] = new Set)).add(t)
}

function gn(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const n = e[_o];
    n && (n.delete(t), n.size || (e[_o] = void 0))
}

function is(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let sd = 0;

function rs(e, t, n, o) {
    const r = e._endId = ++sd,
        i = () => {
            r === e._endId && o()
        };
    if (n) return setTimeout(i, n);
    const {
        type: l,
        timeout: s,
        propCount: a
    } = ad(e, t);
    if (!l) return o();
    const c = l + "end";
    let u = 0;
    const d = () => {
            e.removeEventListener(c, h), i()
        },
        h = y => {
            y.target === e && ++u >= a && d()
        };
    setTimeout(() => {
        u < a && d()
    }, s + 1), e.addEventListener(c, h)
}

function ad(e, t) {
    const n = window.getComputedStyle(e),
        o = b => (n[b] || "").split(", "),
        r = o(`${Ht}Delay`),
        i = o(`${Ht}Duration`),
        l = ls(r, i),
        s = o(`${to}Delay`),
        a = o(`${to}Duration`),
        c = ls(s, a);
    let u = null,
        d = 0,
        h = 0;
    t === Ht ? l > 0 && (u = Ht, d = l, h = i.length) : t === to ? c > 0 && (u = to, d = c, h = a.length) : (d = Math.max(l, c), u = d > 0 ? l > c ? Ht : to : null, h = u ? u === Ht ? i.length : a.length : 0);
    const y = u === Ht && /\b(transform|all)(,|$)/.test(o(`${Ht}Property`).toString());
    return {
        type: u,
        timeout: d,
        propCount: h,
        hasTransform: y
    }
}

function ls(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, o) => ss(n) + ss(e[o])))
}

function ss(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function cd() {
    return document.body.offsetHeight
}

function ud(e, t, n) {
    const o = e[_o];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const hi = Symbol("_vod"),
    sc = Symbol("_vsh"),
    on = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[hi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : no(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: o
        }) {
            !t != !n && (o ? t ? (o.beforeEnter(e), no(e, !0), o.enter(e)) : o.leave(e, () => {
                no(e, !1)
            }) : no(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            no(e, t)
        }
    };

function no(e, t) {
    e.style.display = t ? e[hi] : "none", e[sc] = !t
}
const fd = Symbol(""),
    dd = /(^|;)\s*display\s*:/;

function hd(e, t, n) {
    const o = e.style,
        r = Ie(n);
    let i = !1;
    if (n && !r) {
        if (t)
            if (Ie(t))
                for (const l of t.split(";")) {
                    const s = l.slice(0, l.indexOf(":")).trim();
                    n[s] == null && oi(o, s, "")
                } else
                    for (const l in t) n[l] == null && oi(o, l, "");
        for (const l in n) l === "display" && (i = !0), oi(o, l, n[l])
    } else if (r) {
        if (t !== n) {
            const l = o[fd];
            l && (n += ";" + l), o.cssText = n, i = dd.test(n)
        }
    } else t && e.removeAttribute("style");
    hi in e && (e[hi] = i ? o.display : "", e[sc] && (o.display = "none"))
}
const as = /\s*!important$/;

function oi(e, t, n) {
    if (ne(n)) n.forEach(o => oi(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const o = gd(e, t);
        as.test(n) ? e.setProperty(sn(o), n.replace(as, ""), "important") : e[o] = n
    }
}
const cs = ["Webkit", "Moz", "ms"],
    er = {};

function gd(e, t) {
    const n = er[t];
    if (n) return n;
    let o = Tt(t);
    if (o !== "filter" && o in e) return er[t] = o;
    o = Ci(o);
    for (let r = 0; r < cs.length; r++) {
        const i = cs[r] + o;
        if (i in e) return er[t] = i
    }
    return t
}
const us = "http://www.w3.org/1999/xlink";

function vd(e, t, n, o, r) {
    if (o && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(us, t.slice(6, t.length)) : e.setAttributeNS(us, t, n);
    else {
        const i = Su(t);
        n == null || i && !sa(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
    }
}

function md(e, t, n, o, r, i, l) {
    if (t === "innerHTML" || t === "textContent") {
        o && l(o, r, i), e[t] = n ?? "";
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
            u = n ?? "";
        (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = sa(n) : n == null && c === "string" ? (n = "", a = !0) : c === "number" && (n = 0, a = !0)
    }
    try {
        e[t] = n
    } catch {}
    a && e.removeAttribute(t)
}

function kt(e, t, n, o) {
    e.addEventListener(t, n, o)
}

function yd(e, t, n, o) {
    e.removeEventListener(t, n, o)
}
const fs = Symbol("_vei");

function bd(e, t, n, o, r = null) {
    const i = e[fs] || (e[fs] = {}),
        l = i[t];
    if (o && l) l.value = o;
    else {
        const [s, a] = pd(t);
        if (o) {
            const c = i[t] = Sd(o, r);
            kt(e, s, c, a)
        } else l && (yd(e, s, l, a), i[t] = void 0)
    }
}
const ds = /(?:Once|Passive|Capture)$/;

function pd(e) {
    let t;
    if (ds.test(e)) {
        t = {};
        let o;
        for (; o = e.match(ds);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : sn(e.slice(2)), t]
}
let tr = 0;
const wd = Promise.resolve(),
    xd = () => tr || (wd.then(() => tr = 0), tr = Date.now());

function Sd(e, t) {
    const n = o => {
        if (!o._vts) o._vts = Date.now();
        else if (o._vts <= n.attached) return;
        ut(Cd(o, n.value), t, 5, [o])
    };
    return n.value = e, n.attached = xd(), n
}

function Cd(e, t) {
    if (ne(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(o => r => !r._stopped && o && o(r))
    } else return t
}
const hs = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    _d = (e, t, n, o, r, i, l, s, a) => {
        const c = r === "svg";
        t === "class" ? ud(e, o, c) : t === "style" ? hd(e, n, o) : xi(t) ? Hr(t) || bd(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Td(e, t, o, c)) ? md(e, t, o, i, l, s, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), vd(e, t, o, c))
    };

function Td(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && hs(t) && he(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return hs(t) && Ie(n) ? !1 : t in e
}
const rn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ne(t) ? n => Fn(t, n) : t
};

function Ed(e) {
    e.target.composing = !0
}

function gs(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const dt = Symbol("_assign"),
    vs = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: o
            }
        }, r) {
            e[dt] = rn(r);
            const i = o || r.props && r.props.type === "number";
            kt(e, t ? "change" : "input", l => {
                if (l.target.composing) return;
                let s = e.value;
                n && (s = s.trim()), i && (s = po(s)), e[dt](s)
            }), n && kt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (kt(e, "compositionstart", Ed), kt(e, "compositionend", gs), kt(e, "change", gs))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: n,
                trim: o,
                number: r
            }
        }, i) {
            if (e[dt] = rn(i), e.composing) return;
            const l = r || e.type === "number" ? po(e.value) : e.value,
                s = t ?? "";
            l !== s && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === s) || (e.value = s))
        }
    },
    Od = {
        deep: !0,
        created(e, t, n) {
            e[dt] = rn(n), kt(e, "change", () => {
                const o = e._modelValue,
                    r = Wn(e),
                    i = e.checked,
                    l = e[dt];
                if (ne(o)) {
                    const s = Wr(o, r),
                        a = s !== -1;
                    if (i && !a) l(o.concat(r));
                    else if (!i && a) {
                        const c = [...o];
                        c.splice(s, 1), l(c)
                    }
                } else if (Gn(o)) {
                    const s = new Set(o);
                    i ? s.add(r) : s.delete(r), l(s)
                } else l(ac(e, i))
            })
        },
        mounted: ms,
        beforeUpdate(e, t, n) {
            e[dt] = rn(n), ms(e, t, n)
        }
    };

function ms(e, {
    value: t,
    oldValue: n
}, o) {
    e._modelValue = t, ne(t) ? e.checked = Wr(t, o.props.value) > -1 : Gn(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Cn(t, ac(e, !0)))
}
const kd = {
        created(e, {
            value: t
        }, n) {
            e.checked = Cn(t, n.props.value), e[dt] = rn(n), kt(e, "change", () => {
                e[dt](Wn(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, o) {
            e[dt] = rn(o), t !== n && (e.checked = Cn(t, o.props.value))
        }
    },
    Id = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, o) {
            const r = Gn(t);
            kt(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, l => l.selected).map(l => n ? po(Wn(l)) : Wn(l));
                e[dt](e.multiple ? r ? new Set(i) : i : i[0]), e._assigning = !0, Te(() => {
                    e._assigning = !1
                })
            }), e[dt] = rn(o)
        },
        mounted(e, {
            value: t,
            modifiers: {
                number: n
            }
        }) {
            ys(e, t, n)
        },
        beforeUpdate(e, t, n) {
            e[dt] = rn(n)
        },
        updated(e, {
            value: t,
            modifiers: {
                number: n
            }
        }) {
            e._assigning || ys(e, t, n)
        }
    };

function ys(e, t, n) {
    const o = e.multiple,
        r = ne(t);
    if (!(o && !r && !Gn(t))) {
        for (let i = 0, l = e.options.length; i < l; i++) {
            const s = e.options[i],
                a = Wn(s);
            if (o)
                if (r) {
                    const c = typeof a;
                    c === "string" || c === "number" ? s.selected = t.includes(n ? po(a) : a) : s.selected = Wr(t, a) > -1
                } else s.selected = t.has(a);
            else if (Cn(Wn(s), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return
            }
        }!o && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function Wn(e) {
    return "_value" in e ? e._value : e.value
}

function ac(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const Mb = {
    created(e, t, n) {
        Ko(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Ko(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, o) {
        Ko(e, t, n, o, "beforeUpdate")
    },
    updated(e, t, n, o) {
        Ko(e, t, n, o, "updated")
    }
};

function Dd(e, t) {
    switch (e) {
        case "SELECT":
            return Id;
        case "TEXTAREA":
            return vs;
        default:
            switch (t) {
                case "checkbox":
                    return Od;
                case "radio":
                    return kd;
                default:
                    return vs
            }
    }
}

function Ko(e, t, n, o, r) {
    const l = Dd(e.tagName, n.props && n.props.type)[r];
    l && l(e, t, n, o)
}
const Pd = ["ctrl", "shift", "alt", "meta"],
    Ad = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Pd.some(n => e[`${n}Key`] && !t.includes(n))
    },
    Fb = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            o = t.join(".");
        return n[o] || (n[o] = (r, ...i) => {
            for (let l = 0; l < t.length; l++) {
                const s = Ad[t[l]];
                if (s && s(r, t)) return
            }
            return e(r, ...i)
        })
    },
    Bd = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    $d = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            o = t.join(".");
        return n[o] || (n[o] = r => {
            if (!("key" in r)) return;
            const i = sn(r.key);
            if (t.some(l => l === i || Bd[l] === i)) return e(r)
        })
    },
    Rd = He({
        patchProp: _d
    }, id);
let bs;

function Md() {
    return bs || (bs = Ff(Rd))
}
const Fd = (...e) => {
    const t = Md().createApp(...e),
        {
            mount: n
        } = t;
    return t.mount = o => {
        const r = Vd(o);
        if (!r) return;
        const i = t._component;
        !he(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
        const l = n(r, !1, Ld(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l
    }, t
};

function Ld(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Vd(e) {
    return Ie(e) ? document.querySelector(e) : e
}

function Er() {}
const we = Object.assign,
    Et = typeof window < "u",
    Bo = e => e !== null && typeof e == "object",
    Pe = e => e != null,
    Kn = e => typeof e == "function",
    cl = e => Bo(e) && Kn(e.then) && Kn(e.catch),
    Or = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()),
    cc = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
    Nd = () => Et ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function ps(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(r => {
        var i;
        o = Bo(o) && (i = o[r]) != null ? i : ""
    }), o
}

function Re(e, t, n) {
    return t.reduce((o, r) => ((!n || e[r] !== void 0) && (o[r] = e[r]), o), {})
}
const nr = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    gi = e => Array.isArray(e) ? e : [e],
    ze = null,
    J = [Number, String],
    Z = {
        type: Boolean,
        default: !0
    },
    qe = e => ({
        type: e,
        required: !0
    }),
    ln = () => ({
        type: Array,
        default: () => []
    }),
    ul = e => ({
        type: Number,
        default: e
    }),
    Se = e => ({
        type: J,
        default: e
    }),
    ue = e => ({
        type: String,
        default: e
    });
var cn = typeof window < "u";

function ht(e) {
    return cn ? requestAnimationFrame(e) : -1
}

function fl(e) {
    cn && cancelAnimationFrame(e)
}

function pn(e) {
    ht(() => ht(e))
}
var zd = e => e === window,
    ws = (e, t) => ({
        top: 0,
        left: 0,
        right: e,
        bottom: t,
        width: e,
        height: t
    }),
    We = e => {
        const t = jn(e);
        if (zd(t)) {
            const n = t.innerWidth,
                o = t.innerHeight;
            return ws(n, o)
        }
        return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : ws(0, 0)
    };

function Hd(e = !1) {
    const t = H(e);
    return [t, (o = !t.value) => {
        t.value = o
    }]
}

function un(e) {
    const t = Pt(e, null);
    if (t) {
        const n = gt(),
            {
                link: o,
                unlink: r,
                internalChildren: i
            } = t;
        o(n), Io(() => r(n));
        const l = Y(() => i.indexOf(n));
        return {
            parent: t,
            index: l
        }
    }
    return {
        parent: null,
        index: H(-1)
    }
}

function jd(e) {
    const t = [],
        n = o => {
            Array.isArray(o) && o.forEach(r => {
                var i;
                Un(r) && (t.push(r), (i = r.component) != null && i.subTree && (t.push(r.component.subTree), n(r.component.subTree.children)), r.children && n(r.children))
            })
        };
    return n(e), t
}
var xs = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function Ud(e, t, n) {
    const o = jd(e.subTree.children);
    n.sort((i, l) => xs(o, i.vnode) - xs(o, l.vnode));
    const r = n.map(i => i.proxy);
    t.sort((i, l) => {
        const s = r.indexOf(i),
            a = r.indexOf(l);
        return s - a
    })
}

function $o(e) {
    const t = Ke([]),
        n = Ke([]),
        o = gt();
    return {
        children: t,
        linkChildren: i => {
            Zn(e, Object.assign({
                link: a => {
                    a.proxy && (n.push(a), t.push(a.proxy), Ud(o, t, n))
                },
                unlink: a => {
                    const c = n.indexOf(a);
                    t.splice(c, 1), n.splice(c, 1)
                },
                children: t,
                internalChildren: n
            }, i))
        }
    }
}
var kr = 1e3,
    Ir = 60 * kr,
    Dr = 60 * Ir,
    Ss = 24 * Dr;

function Wd(e) {
    const t = Math.floor(e / Ss),
        n = Math.floor(e % Ss / Dr),
        o = Math.floor(e % Dr / Ir),
        r = Math.floor(e % Ir / kr),
        i = Math.floor(e % kr);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: r,
        milliseconds: i
    }
}

function Kd(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function Yd(e) {
    let t, n, o, r;
    const i = H(e.time),
        l = Y(() => Wd(i.value)),
        s = () => {
            o = !1, fl(t)
        },
        a = () => Math.max(n - Date.now(), 0),
        c = C => {
            var v, x;
            i.value = C, (v = e.onChange) == null || v.call(e, l.value), C === 0 && (s(), (x = e.onFinish) == null || x.call(e))
        },
        u = () => {
            t = ht(() => {
                o && (c(a()), i.value > 0 && u())
            })
        },
        d = () => {
            t = ht(() => {
                if (o) {
                    const C = a();
                    (!Kd(C, i.value) || C === 0) && c(C), i.value > 0 && d()
                }
            })
        },
        h = () => {
            cn && (e.millisecond ? u() : d())
        },
        y = () => {
            o || (n = Date.now() + i.value, o = !0, h())
        },
        b = (C = e.time) => {
            s(), i.value = C
        };
    return wt(s), an(() => {
        r && (o = !0, r = !1, h())
    }), Lt(() => {
        o && (s(), r = !0)
    }), {
        start: y,
        pause: s,
        reset: b,
        current: l
    }
}

function Jn(e) {
    let t;
    Ge(() => {
        e(), Te(() => {
            t = !0
        })
    }), an(() => {
        t && e()
    })
}

function nt(e, t, n = {}) {
    if (!cn) return;
    const {
        target: o = window,
        passive: r = !1,
        capture: i = !1
    } = n;
    let l = !1,
        s;
    const a = d => {
            if (l) return;
            const h = jn(d);
            h && !s && (h.addEventListener(e, t, {
                capture: i,
                passive: r
            }), s = !0)
        },
        c = d => {
            if (l) return;
            const h = jn(d);
            h && s && (h.removeEventListener(e, t, i), s = !1)
        };
    Io(() => c(o)), Lt(() => c(o)), Jn(() => a(o));
    let u;
    return Qe(o) && (u = ee(o, (d, h) => {
        c(h), a(d)
    })), () => {
        u == null || u(), c(o), l = !0
    }
}

function uc(e, t, n = {}) {
    if (!cn) return;
    const {
        eventName: o = "click"
    } = n;
    nt(o, i => {
        (Array.isArray(e) ? e : [e]).every(a => {
            const c = jn(a);
            return c && !c.contains(i.target)
        }) && t(i)
    }, {
        target: document
    })
}
var Yo, or;

function qd() {
    if (!Yo && (Yo = H(0), or = H(0), cn)) {
        const e = () => {
            Yo.value = window.innerWidth, or.value = window.innerHeight
        };
        e(), window.addEventListener("resize", e, {
            passive: !0
        }), window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: Yo,
        height: or
    }
}
var Gd = /scroll|auto|overlay/i,
    fc = cn ? window : void 0;

function Xd(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function dc(e, t = fc) {
    let n = e;
    for (; n && n !== t && Xd(n);) {
        const {
            overflowY: o
        } = window.getComputedStyle(n);
        if (Gd.test(o)) return n;
        n = n.parentNode
    }
    return t
}

function Ri(e, t = fc) {
    const n = H();
    return Ge(() => {
        e.value && (n.value = dc(e.value, t))
    }), n
}
var qo;

function Zd() {
    if (!qo && (qo = H("visible"), cn)) {
        const e = () => {
            qo.value = document.hidden ? "hidden" : "visible"
        };
        e(), window.addEventListener("visibilitychange", e)
    }
    return qo
}
var hc = Symbol("van-field");

function Mi(e) {
    const t = Pt(hc, null);
    t && !t.customValue.value && (t.customValue.value = e, ee(e, () => {
        t.resetValidation(), t.validateWithTrigger("onChange")
    }))
}

function Ro(e) {
    const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}

function vi(e, t) {
    "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}

function dl() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function hl(e) {
    vi(window, e), vi(document.body, e)
}

function Cs(e, t) {
    if (e === window) return 0;
    const n = t ? Ro(t) : dl();
    return We(e).top + n
}
const Jd = Nd();

function Qd() {
    Jd && hl(dl())
}
const gc = e => e.stopPropagation();

function et(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && gc(e)
}

function Yn(e) {
    const t = jn(e);
    if (!t) return !1;
    const n = window.getComputedStyle(t),
        o = n.display === "none",
        r = t.offsetParent === null && n.position !== "fixed";
    return o || r
}
const {
    width: At,
    height: en
} = qd();

function _e(e) {
    if (Pe(e)) return cc(e) ? `${e}px` : String(e)
}

function Qn(e) {
    if (Pe(e)) {
        if (Array.isArray(e)) return {
            width: _e(e[0]),
            height: _e(e[1])
        };
        const t = _e(e);
        return {
            width: t,
            height: t
        }
    }
}

function gl(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e), t
}
let ir;

function eh() {
    if (!ir) {
        const e = document.documentElement,
            t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        ir = parseFloat(t)
    }
    return ir
}

function th(e) {
    return e = e.replace(/rem/g, ""), +e * eh()
}

function nh(e) {
    return e = e.replace(/vw/g, ""), +e * At.value / 100
}

function oh(e) {
    return e = e.replace(/vh/g, ""), +e * en.value / 100
}

function vl(e) {
    if (typeof e == "number") return e;
    if (Et) {
        if (e.includes("rem")) return th(e);
        if (e.includes("vw")) return nh(e);
        if (e.includes("vh")) return oh(e)
    }
    return parseFloat(e)
}
const ih = /-(\w)/g,
    vc = e => e.replace(ih, (t, n) => n.toUpperCase()),
    rh = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function oo(e, t = 2) {
    let n = e + "";
    for (; n.length < t;) n = "0" + n;
    return n
}
const it = (e, t, n) => Math.min(Math.max(e, t), n);

function _s(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function lh(e, t = !0, n = !0) {
    t ? e = _s(e, ".", /\./g) : e = e.split(".")[0], n ? e = _s(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}
const {
    hasOwnProperty: sh
} = Object.prototype;

function ah(e, t, n) {
    const o = t[n];
    Pe(o) && (!sh.call(e, n) || !Bo(o) ? e[n] = o : e[n] = mc(Object(e[n]), o))
}

function mc(e, t) {
    return Object.keys(t).forEach(n => {
        ah(e, t, n)
    }), e
}
var ch = {
    name: "å§“å",
    tel: "ç”µè¯",
    save: "ä¿å­˜",
    clear: "æ¸…ç©º",
    cancel: "å–æ¶ˆ",
    confirm: "ç¡®è®¤",
    delete: "åˆ é™¤",
    loading: "åŠ è½½ä¸­...",
    noCoupon: "æš‚æ— ä¼˜æƒ åˆ¸",
    nameEmpty: "è¯·å¡«å†™å§“å",
    addContact: "æ·»åŠ è”ç³»äºº",
    telInvalid: "è¯·å¡«å†™æ­£ç¡®çš„ç”µè¯",
    vanCalendar: {
        end: "ç»“æŸ",
        start: "å¼€å§‹",
        title: "æ—¥æœŸé€‰æ‹©",
        weekdays: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
        monthTitle: (e, t) => `${e}å¹´${t}æœˆ`,
        rangePrompt: e => `æœ€å¤šé€‰æ‹© ${e} å¤©`
    },
    vanCascader: {
        select: "è¯·é€‰æ‹©"
    },
    vanPagination: {
        prev: "ä¸Šä¸€é¡µ",
        next: "ä¸‹ä¸€é¡µ"
    },
    vanPullRefresh: {
        pulling: "ä¸‹æ‹‰å³å¯åˆ·æ–°...",
        loosing: "é‡Šæ”¾å³å¯åˆ·æ–°..."
    },
    vanSubmitBar: {
        label: "åˆè®¡:"
    },
    vanCoupon: {
        unlimited: "æ— é—¨æ§›",
        discount: e => `${e}æŠ˜`,
        condition: e => `æ»¡${e}å…ƒå¯ç”¨`
    },
    vanCouponCell: {
        title: "ä¼˜æƒ åˆ¸",
        count: e => `${e}å¼ å¯ç”¨`
    },
    vanCouponList: {
        exchange: "å…‘æ¢",
        close: "ä¸ä½¿ç”¨",
        enable: "å¯ç”¨",
        disabled: "ä¸å¯ç”¨",
        placeholder: "è¾“å…¥ä¼˜æƒ ç "
    },
    vanAddressEdit: {
        area: "åœ°åŒº",
        areaEmpty: "è¯·é€‰æ‹©åœ°åŒº",
        addressEmpty: "è¯·å¡«å†™è¯¦ç»†åœ°å€",
        addressDetail: "è¯¦ç»†åœ°å€",
        defaultAddress: "è®¾ä¸ºé»˜è®¤æ”¶è´§åœ°å€"
    },
    vanAddressList: {
        add: "æ–°å¢žåœ°å€"
    }
};
const Ts = H("zh-CN"),
    Es = Ke({
        "zh-CN": ch
    }),
    uh = {
        messages() {
            return Es[Ts.value]
        },
        use(e, t) {
            Ts.value = e, this.add({
                [e]: t
            })
        },
        add(e = {}) {
            mc(Es, e)
        }
    };
var fh = uh;

function dh(e) {
    const t = vc(e) + ".";
    return (n, ...o) => {
        const r = fh.messages(),
            i = ps(r, t + n) || ps(r, n);
        return Kn(i) ? i(...o) : i
    }
}

function Pr(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + Pr(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? Pr(e, o) : ""), "") : ""
}

function hh(e) {
    return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Pr(t,n)}`)
}

function se(e) {
    const t = `van-${e}`;
    return [t, hh(t), dh(t)]
}
const En = "van-hairline",
    gh = `${En}--top`,
    yc = `${En}--left`,
    vh = `${En}--right`,
    mh = `${En}--bottom`,
    bc = `${En}--surround`,
    yh = `${En}--top-bottom`,
    bh = `${En}-unset--top-bottom`,
    To = "van-haptics-feedback",
    ph = Symbol("van-form"),
    wh = 500,
    Os = 5;

function Mo(e, {
    args: t = [],
    done: n,
    canceled: o,
    error: r
}) {
    if (e) {
        const i = e.apply(null, t);
        cl(i) ? i.then(l => {
            l ? n() : o && o()
        }).catch(r || Er) : i ? n() : o && o()
    } else n()
}

function ge(e) {
    return e.install = t => {
        const {
            name: n
        } = e;
        n && (t.component(n, e), t.component(vc(`-${n}`), e))
    }, e
}

function ks(e, t) {
    return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const pc = Symbol();

function Fi(e) {
    const t = Pt(pc, null);
    t && ee(t, n => {
        n && e()
    })
}
const wc = (e, t) => {
    const n = H(),
        o = () => {
            n.value = We(e).height
        };
    return Ge(() => {
        if (Te(o), t)
            for (let r = 1; r <= 3; r++) setTimeout(o, 100 * r)
    }), Fi(() => Te(o)), ee([At, en], o), n
};

function xh(e, t) {
    const n = wc(e, !0);
    return o => f("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [o()])
}
const [xc, Is] = se("action-bar"), Sc = Symbol(xc), Sh = {
    placeholder: Boolean,
    safeAreaInsetBottom: Z
};
var Ch = oe({
    name: xc,
    props: Sh,
    setup(e, {
        slots: t
    }) {
        const n = H(),
            o = xh(n, Is),
            {
                linkChildren: r
            } = $o(Sc);
        r();
        const i = () => {
            var l;
            return f("div", {
                ref: n,
                class: [Is(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        };
        return () => e.placeholder ? o(i) : i()
    }
});
const _h = ge(Ch);

function Fe(e) {
    const t = gt();
    t && we(t.proxy, e)
}
const Li = {
    to: [String, Object],
    url: String,
    replace: Boolean
};

function Cc({
    to: e,
    url: t,
    replace: n,
    $router: o
}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function ml() {
    const e = gt().proxy;
    return () => Cc(e)
}
const [Th, Ds] = se("badge"), Eh = {
    dot: Boolean,
    max: J,
    tag: ue("div"),
    color: String,
    offset: Array,
    content: J,
    showZero: Z,
    position: ue("top-right")
};
var Oh = oe({
    name: Th,
    props: Eh,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                if (t.content) return !0;
                const {
                    content: s,
                    showZero: a
                } = e;
                return Pe(s) && s !== "" && (a || s !== 0 && s !== "0")
            },
            o = () => {
                const {
                    dot: s,
                    max: a,
                    content: c
                } = e;
                if (!s && n()) return t.content ? t.content() : Pe(a) && cc(c) && +c > +a ? `${a}+` : c
            },
            r = s => s.startsWith("-") ? s.replace("-", "") : `-${s}`,
            i = Y(() => {
                const s = {
                    background: e.color
                };
                if (e.offset) {
                    const [a, c] = e.offset, {
                        position: u
                    } = e, [d, h] = u.split("-");
                    t.default ? (typeof c == "number" ? s[d] = _e(d === "top" ? c : -c) : s[d] = d === "top" ? _e(c) : r(c), typeof a == "number" ? s[h] = _e(h === "left" ? a : -a) : s[h] = h === "left" ? _e(a) : r(a)) : (s.marginTop = _e(c), s.marginLeft = _e(a))
                }
                return s
            }),
            l = () => {
                if (n() || e.dot) return f("div", {
                    class: Ds([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: i.value
                }, [o()])
            };
        return () => {
            if (t.default) {
                const {
                    tag: s
                } = e;
                return f(s, {
                    class: Ds("wrapper")
                }, {
                    default: () => [t.default(), l()]
                })
            }
            return l()
        }
    }
});
const _c = ge(Oh);
let Tc = 2e3;
const kh = () => ++Tc,
    Ih = e => {
        Tc = e
    },
    [Ec, Dh] = se("config-provider"),
    Oc = Symbol(Ec),
    Ph = {
        tag: ue("div"),
        theme: ue("light"),
        zIndex: Number,
        themeVars: Object,
        themeVarsDark: Object,
        themeVarsLight: Object,
        themeVarsScope: ue("local"),
        iconPrefix: String
    };

function Ah(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}

function Bh(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const o = Ah(rh(n));
        t[`--van-${o}`] = e[n]
    }), t
}

function Go(e = {}, t = {}) {
    Object.keys(e).forEach(n => {
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }), Object.keys(t).forEach(n => {
        e[n] || document.documentElement.style.removeProperty(n)
    })
}
var $h = oe({
    name: Ec,
    props: Ph,
    setup(e, {
        slots: t
    }) {
        const n = Y(() => Bh(we({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (Et) {
            const o = () => {
                    document.documentElement.classList.add(`van-theme-${e.theme}`)
                },
                r = (i = e.theme) => {
                    document.documentElement.classList.remove(`van-theme-${i}`)
                };
            ee(() => e.theme, (i, l) => {
                l && r(l), o()
            }, {
                immediate: !0
            }), an(o), Lt(r), wt(r), ee(n, (i, l) => {
                e.themeVarsScope === "global" && Go(i, l)
            }), ee(() => e.themeVarsScope, (i, l) => {
                l === "global" && Go({}, n.value), i === "global" && Go(n.value, {})
            }), e.themeVarsScope === "global" && Go(n.value, {})
        }
        return Zn(Oc, e), Di(() => {
            e.zIndex !== void 0 && Ih(e.zIndex)
        }), () => f(e.tag, {
            class: Dh(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: () => {
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [Rh, Ps] = se("icon"), Mh = e => e == null ? void 0 : e.includes("/"), Fh = {
    dot: Boolean,
    tag: ue("i"),
    name: String,
    size: J,
    badge: J,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var Lh = oe({
    name: Rh,
    props: Fh,
    setup(e, {
        slots: t
    }) {
        const n = Pt(Oc, null),
            o = Y(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Ps());
        return () => {
            const {
                tag: r,
                dot: i,
                name: l,
                size: s,
                badge: a,
                color: c
            } = e, u = Mh(l);
            return f(_c, Be({
                dot: i,
                tag: r,
                class: [o.value, u ? "" : `${o.value}-${l}`],
                style: {
                    color: c,
                    fontSize: _e(s)
                },
                content: a
            }, e.badgeProps), {
                default: () => {
                    var d;
                    return [(d = t.default) == null ? void 0 : d.call(t), u && f("img", {
                        class: Ps("image"),
                        src: l
                    }, null)]
                }
            })
        }
    }
});
const Me = ge(Lh);
var Vh = Me;
const [Nh, yo] = se("loading"), zh = Array(12).fill(null).map((e, t) => f("i", {
    class: yo("line", String(t + 1))
}, null)), Hh = f("svg", {
    class: yo("circular"),
    viewBox: "25 25 50 50"
}, [f("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)]), jh = {
    size: J,
    type: ue("circular"),
    color: String,
    vertical: Boolean,
    textSize: J,
    textColor: String
};
var Uh = oe({
    name: Nh,
    props: jh,
    setup(e, {
        slots: t
    }) {
        const n = Y(() => we({
                color: e.color
            }, Qn(e.size))),
            o = () => {
                const i = e.type === "spinner" ? zh : Hh;
                return f("span", {
                    class: yo("spinner", e.type),
                    style: n.value
                }, [t.icon ? t.icon() : i])
            },
            r = () => {
                var i;
                if (t.default) return f("span", {
                    class: yo("text"),
                    style: {
                        fontSize: _e(e.textSize),
                        color: (i = e.textColor) != null ? i : e.color
                    }
                }, [t.default()])
            };
        return () => {
            const {
                type: i,
                vertical: l
            } = e;
            return f("div", {
                class: yo([i, {
                    vertical: l
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), r()])
        }
    }
});
const Nt = ge(Uh),
    [Wh, In] = se("button"),
    Kh = we({}, Li, {
        tag: ue("button"),
        text: String,
        icon: String,
        type: ue("default"),
        size: ue("normal"),
        color: String,
        block: Boolean,
        plain: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        iconPrefix: String,
        nativeType: ue("button"),
        loadingSize: J,
        loadingText: String,
        loadingType: String,
        iconPosition: ue("left")
    });
var Yh = oe({
    name: Wh,
    props: Kh,
    emits: ["click"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = ml(),
            r = () => n.loading ? n.loading() : f(Nt, {
                size: e.loadingSize,
                type: e.loadingType,
                class: In("loading")
            }, null),
            i = () => {
                if (e.loading) return r();
                if (n.icon) return f("div", {
                    class: In("icon")
                }, [n.icon()]);
                if (e.icon) return f(Me, {
                    name: e.icon,
                    class: In("icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            l = () => {
                let c;
                if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text, c) return f("span", {
                    class: In("text")
                }, [c])
            },
            s = () => {
                const {
                    color: c,
                    plain: u
                } = e;
                if (c) {
                    const d = {
                        color: u ? c : "white"
                    };
                    return u || (d.background = c), c.includes("gradient") ? d.border = 0 : d.borderColor = c, d
                }
            },
            a = c => {
                e.loading ? et(c) : e.disabled || (t("click", c), o())
            };
        return () => {
            const {
                tag: c,
                type: u,
                size: d,
                block: h,
                round: y,
                plain: b,
                square: C,
                loading: v,
                disabled: x,
                hairline: m,
                nativeType: w,
                iconPosition: S
            } = e, T = [In([u, d, {
                plain: b,
                block: h,
                round: y,
                square: C,
                loading: v,
                disabled: x,
                hairline: m
            }]), {
                [bc]: m
            }];
            return f(c, {
                type: w,
                class: T,
                style: s(),
                disabled: x,
                onClick: a
            }, {
                default: () => [f("div", {
                    class: In("content")
                }, [S === "left" && i(), l(), S === "right" && i()])]
            })
        }
    }
});
const mi = ge(Yh),
    [qh, Gh] = se("action-bar-button"),
    Xh = we({}, Li, {
        type: String,
        text: String,
        icon: String,
        color: String,
        loading: Boolean,
        disabled: Boolean
    });
var Zh = oe({
    name: qh,
    props: Xh,
    setup(e, {
        slots: t
    }) {
        const n = ml(),
            {
                parent: o,
                index: r
            } = un(Sc),
            i = Y(() => {
                if (o) {
                    const s = o.children[r.value - 1];
                    return !(s && "isButton" in s)
                }
            }),
            l = Y(() => {
                if (o) {
                    const s = o.children[r.value + 1];
                    return !(s && "isButton" in s)
                }
            });
        return Fe({
            isButton: !0
        }), () => {
            const {
                type: s,
                icon: a,
                text: c,
                color: u,
                loading: d,
                disabled: h
            } = e;
            return f(mi, {
                class: Gh([s, {
                    last: l.value,
                    first: i.value
                }]),
                size: "large",
                type: s,
                icon: a,
                color: u,
                loading: d,
                disabled: h,
                onClick: n
            }, {
                default: () => [t.default ? t.default() : c]
            })
        }
    }
});
const As = ge(Zh),
    yl = {
        show: Boolean,
        zIndex: J,
        overlay: Z,
        duration: J,
        teleport: [String, Object],
        lockScroll: Z,
        lazyRender: Z,
        beforeClose: Function,
        overlayStyle: Object,
        overlayClass: ze,
        transitionAppear: Boolean,
        closeOnClickOverlay: Z
    },
    Jh = Object.keys(yl);

function Qh(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}

function On() {
    const e = H(0),
        t = H(0),
        n = H(0),
        o = H(0),
        r = H(0),
        i = H(0),
        l = H(""),
        s = H(!0),
        a = () => l.value === "vertical",
        c = () => l.value === "horizontal",
        u = () => {
            n.value = 0, o.value = 0, r.value = 0, i.value = 0, l.value = "", s.value = !0
        };
    return {
        move: y => {
            const b = y.touches[0];
            n.value = (b.clientX < 0 ? 0 : b.clientX) - e.value, o.value = b.clientY - t.value, r.value = Math.abs(n.value), i.value = Math.abs(o.value);
            const C = 10;
            (!l.value || r.value < C && i.value < C) && (l.value = Qh(r.value, i.value)), s.value && (r.value > Os || i.value > Os) && (s.value = !1)
        },
        start: y => {
            u(), e.value = y.touches[0].clientX, t.value = y.touches[0].clientY
        },
        reset: u,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: r,
        offsetY: i,
        direction: l,
        isVertical: a,
        isHorizontal: c,
        isTap: s
    }
}
let io = 0;
const Bs = "van-overflow-hidden";

function eg(e, t) {
    const n = On(),
        o = "01",
        r = "10",
        i = u => {
            n.move(u);
            const d = n.deltaY.value > 0 ? r : o,
                h = dc(u.target, e.value),
                {
                    scrollHeight: y,
                    offsetHeight: b,
                    scrollTop: C
                } = h;
            let v = "11";
            C === 0 ? v = b >= y ? "00" : "01" : C + b >= y && (v = "10"), v !== "11" && n.isVertical() && !(parseInt(v, 2) & parseInt(d, 2)) && et(u, !0)
        },
        l = () => {
            document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", i, {
                passive: !1
            }), io || document.body.classList.add(Bs), io++
        },
        s = () => {
            io && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", i), io--, io || document.body.classList.remove(Bs))
        },
        a = () => t() && l(),
        c = () => t() && s();
    Jn(a), Lt(c), wt(c), ee(t, u => {
        u ? l() : s()
    })
}

function kc(e) {
    const t = H(!1);
    return ee(e, n => {
        n && (t.value = n)
    }, {
        immediate: !0
    }), n => () => t.value ? n() : null
}
const Ar = () => {
        var e;
        const {
            scopeId: t
        } = ((e = gt()) == null ? void 0 : e.vnode) || {};
        return t ? {
            [t]: ""
        } : null
    },
    [tg, ng] = se("overlay"),
    og = {
        show: Boolean,
        zIndex: J,
        duration: J,
        className: ze,
        lockScroll: Z,
        lazyRender: Z,
        customStyle: Object
    };
var ig = oe({
    name: tg,
    props: og,
    setup(e, {
        slots: t
    }) {
        const n = H(),
            o = kc(() => e.show || !e.lazyRender),
            r = l => {
                e.lockScroll && et(l, !0)
            },
            i = o(() => {
                var l;
                const s = we(gl(e.zIndex), e.customStyle);
                return Pe(e.duration) && (s.animationDuration = `${e.duration}s`), $t(f("div", {
                    ref: n,
                    style: s,
                    class: [ng(), e.className]
                }, [(l = t.default) == null ? void 0 : l.call(t)]), [
                    [on, e.show]
                ])
            });
        return nt("touchmove", r, {
            target: n
        }), () => f(Ao, {
            name: "van-fade",
            appear: !0
        }, {
            default: i
        })
    }
});
const rg = ge(ig),
    lg = we({}, yl, {
        round: Boolean,
        position: ue("center"),
        closeIcon: ue("cross"),
        closeable: Boolean,
        transition: String,
        iconPrefix: String,
        closeOnPopstate: Boolean,
        closeIconPosition: ue("top-right"),
        safeAreaInsetTop: Boolean,
        safeAreaInsetBottom: Boolean
    }),
    [sg, $s] = se("popup");
var ag = oe({
    name: sg,
    inheritAttrs: !1,
    props: lg,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {
        emit: t,
        attrs: n,
        slots: o
    }) {
        let r, i;
        const l = H(),
            s = H(),
            a = kc(() => e.show || !e.lazyRender),
            c = Y(() => {
                const O = {
                    zIndex: l.value
                };
                if (Pe(e.duration)) {
                    const U = e.position === "center" ? "animationDuration" : "transitionDuration";
                    O[U] = `${e.duration}s`
                }
                return O
            }),
            u = () => {
                r || (r = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : kh(), t("open"))
            },
            d = () => {
                r && Mo(e.beforeClose, {
                    done() {
                        r = !1, t("close"), t("update:show", !1)
                    }
                })
            },
            h = O => {
                t("clickOverlay", O), e.closeOnClickOverlay && d()
            },
            y = () => {
                if (e.overlay) return f(rg, Be({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: l.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, Ar(), {
                    onClick: h
                }), {
                    default: o["overlay-content"]
                })
            },
            b = O => {
                t("clickCloseIcon", O), d()
            },
            C = () => {
                if (e.closeable) return f(Me, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [$s("close-icon", e.closeIconPosition), To],
                    classPrefix: e.iconPrefix,
                    onClick: b
                }, null)
            };
        let v;
        const x = () => {
                v && clearTimeout(v), v = setTimeout(() => {
                    t("opened")
                })
            },
            m = () => t("closed"),
            w = O => t("keydown", O),
            S = a(() => {
                var O;
                const {
                    round: U,
                    position: I,
                    safeAreaInsetTop: L,
                    safeAreaInsetBottom: k
                } = e;
                return $t(f("div", Be({
                    ref: s,
                    style: c.value,
                    role: "dialog",
                    tabindex: 0,
                    class: [$s({
                        round: U,
                        [I]: I
                    }), {
                        "van-safe-area-top": L,
                        "van-safe-area-bottom": k
                    }],
                    onKeydown: w
                }, n, Ar()), [(O = o.default) == null ? void 0 : O.call(o), C()]), [
                    [on, e.show]
                ])
            }),
            T = () => {
                const {
                    position: O,
                    transition: U,
                    transitionAppear: I
                } = e, L = O === "center" ? "van-fade" : `van-popup-slide-${O}`;
                return f(Ao, {
                    name: U || L,
                    appear: I,
                    onAfterEnter: x,
                    onAfterLeave: m
                }, {
                    default: S
                })
            };
        return ee(() => e.show, O => {
            O && !r && (u(), n.tabindex === 0 && Te(() => {
                var U;
                (U = s.value) == null || U.focus()
            })), !O && r && (r = !1, t("close"))
        }), Fe({
            popupRef: s
        }), eg(s, () => e.show && e.lockScroll), nt("popstate", () => {
            e.closeOnPopstate && (d(), i = !1)
        }), Ge(() => {
            e.show && u()
        }), an(() => {
            i && (t("update:show", !0), i = !1)
        }), Lt(() => {
            e.show && e.teleport && (d(), i = !0)
        }), Zn(pc, () => e.show), () => e.teleport ? f(sl, {
            to: e.teleport
        }, {
            default: () => [y(), T()]
        }) : f(Je, null, [y(), T()])
    }
});
const Fo = ge(ag),
    [cg, It, Rs] = se("picker"),
    Ic = e => e.find(t => !t.disabled) || e[0];

function ug(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n)) return "multiple";
        if (t.children in n) return "cascade"
    }
    return "default"
}

function ii(e, t) {
    t = it(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled) return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled) return n;
    return 0
}
const Ms = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function Br(e, t, n) {
    const o = e.findIndex(i => i[n.value] === t),
        r = ii(e, o);
    return e[r]
}

function fg(e, t, n) {
    const o = [];
    let r = {
            [t.children]: e
        },
        i = 0;
    for (; r && r[t.children];) {
        const l = r[t.children],
            s = n.value[i];
        if (r = Pe(s) ? Br(l, s, t) : void 0, !r && l.length) {
            const a = Ic(l)[t.value];
            r = Br(l, a, t)
        }
        i++, o.push(l)
    }
    return o
}

function dg(e) {
    const {
        transform: t
    } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}

function hg(e) {
    return we({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const Fs = 200,
    Ls = 300,
    gg = 15,
    [Dc, rr] = se("picker-column"),
    Pc = Symbol(Dc);
var vg = oe({
    name: Dc,
    props: {
        value: J,
        fields: qe(Object),
        options: ln(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: qe(Number),
        swipeDuration: qe(J),
        visibleOptionNum: qe(J)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, r, i, l, s;
        const a = H(),
            c = H(),
            u = H(0),
            d = H(0),
            h = On(),
            y = () => e.options.length,
            b = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
            C = k => {
                let _ = ii(e.options, k);
                const E = -_ * e.optionHeight,
                    B = () => {
                        _ > y() - 1 && (_ = ii(e.options, k));
                        const ie = e.options[_][e.fields.value];
                        ie !== e.value && t("change", ie)
                    };
                o && E !== u.value ? s = B : B(), u.value = E
            },
            v = () => e.readonly || !e.options.length,
            x = k => {
                o || v() || (s = null, d.value = Fs, C(k), t("clickOption", e.options[k]))
            },
            m = k => it(Math.round(-k / e.optionHeight), 0, y() - 1),
            w = Y(() => m(u.value)),
            S = (k, _) => {
                const E = Math.abs(k / _);
                k = u.value + E / .003 * (k < 0 ? -1 : 1);
                const B = m(k);
                d.value = +e.swipeDuration, C(B)
            },
            T = () => {
                o = !1, d.value = 0, s && (s(), s = null)
            },
            O = k => {
                if (!v()) {
                    if (h.start(k), o) {
                        const _ = dg(c.value);
                        u.value = Math.min(0, _ - b())
                    }
                    d.value = 0, r = u.value, i = Date.now(), l = r, s = null
                }
            },
            U = k => {
                if (v()) return;
                h.move(k), h.isVertical() && (o = !0, et(k, !0));
                const _ = it(r + h.deltaY.value, -(y() * e.optionHeight), e.optionHeight),
                    E = m(_);
                E !== w.value && t("scrollInto", e.options[E]), u.value = _;
                const B = Date.now();
                B - i > Ls && (i = B, l = _)
            },
            I = () => {
                if (v()) return;
                const k = u.value - l,
                    _ = Date.now() - i;
                if (_ < Ls && Math.abs(k) > gg) {
                    S(k, _);
                    return
                }
                const B = m(u.value);
                d.value = Fs, C(B), setTimeout(() => {
                    o = !1
                }, 0)
            },
            L = () => {
                const k = {
                    height: `${e.optionHeight}px`
                };
                return e.options.map((_, E) => {
                    const B = _[e.fields.text],
                        {
                            disabled: ie
                        } = _,
                        N = _[e.fields.value],
                        P = {
                            role: "button",
                            style: k,
                            tabindex: ie ? -1 : 0,
                            class: [rr("item", {
                                disabled: ie,
                                selected: N === e.value
                            }), _.className],
                            onClick: () => x(E)
                        },
                        M = {
                            class: "van-ellipsis",
                            [e.allowHtml ? "innerHTML" : "textContent"]: B
                        };
                    return f("li", P, [n.option ? n.option(_, E) : f("div", M, null)])
                })
            };
        return un(Pc), Fe({
            stopMomentum: T
        }), Di(() => {
            const k = o ? Math.floor(-u.value / e.optionHeight) : e.options.findIndex(B => B[e.fields.value] === e.value),
                _ = ii(e.options, k),
                E = -_ * e.optionHeight;
            o && _ < k && T(), u.value = E
        }), nt("touchmove", U, {
            target: a
        }), () => f("div", {
            ref: a,
            class: rr(),
            onTouchstartPassive: O,
            onTouchend: I,
            onTouchcancel: I
        }, [f("ul", {
            ref: c,
            style: {
                transform: `translate3d(0, ${u.value+b()}px, 0)`,
                transitionDuration: `${d.value}ms`,
                transitionProperty: d.value ? "all" : "none"
            },
            class: rr("wrapper"),
            onTransitionend: T
        }, [L()])])
    }
});
const [mg] = se("picker-toolbar"), Vi = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}, yg = ["cancel", "confirm", "title", "toolbar"], bg = Object.keys(Vi);
var pg = oe({
    name: mg,
    props: Vi,
    emits: ["confirm", "cancel"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                if (n.title) return n.title();
                if (e.title) return f("div", {
                    class: [It("title"), "van-ellipsis"]
                }, [e.title])
            },
            r = () => t("cancel"),
            i = () => t("confirm"),
            l = () => {
                var a;
                const c = (a = e.cancelButtonText) != null ? a : Rs("cancel");
                if (!(!n.cancel && !c)) return f("button", {
                    type: "button",
                    class: [It("cancel"), To],
                    onClick: r
                }, [n.cancel ? n.cancel() : c])
            },
            s = () => {
                var a;
                const c = (a = e.confirmButtonText) != null ? a : Rs("confirm");
                if (!(!n.confirm && !c)) return f("button", {
                    type: "button",
                    class: [It("confirm"), To],
                    onClick: i
                }, [n.confirm ? n.confirm() : c])
            };
        return () => f("div", {
            class: It("toolbar")
        }, [n.toolbar ? n.toolbar() : [l(), o(), s()]])
    }
});
const wg = (e, t) => {
    const n = H(e());
    return ee(e, o => {
        o !== n.value && (n.value = o)
    }), ee(n, o => {
        o !== e() && t(o)
    }), n
};

function xg(e, t, n) {
    let o, r = 0;
    const i = e.scrollLeft,
        l = n === 0 ? 1 : Math.round(n * 1e3 / 16);

    function s() {
        fl(o)
    }

    function a() {
        e.scrollLeft += (t - i) / l, ++r < l && (o = ht(a))
    }
    return a(), s
}

function Sg(e, t, n, o) {
    let r, i = Ro(e);
    const l = i < t,
        s = n === 0 ? 1 : Math.round(n * 1e3 / 16),
        a = (t - i) / s;

    function c() {
        fl(r)
    }

    function u() {
        i += a, (l && i > t || !l && i < t) && (i = t), vi(e, i), l && i < t || !l && i > t ? r = ht(u) : o && (r = ht(o))
    }
    return u(), c
}
let Cg = 0;

function Ni() {
    const e = gt(),
        {
            name: t = "unknown"
        } = (e == null ? void 0 : e.type) || {};
    return `${t}-${++Cg}`
}

function Ac() {
    const e = H([]),
        t = [];
    return Na(() => {
        e.value = []
    }), [e, o => (t[o] || (t[o] = r => {
        e.value[o] = r
    }), t[o])]
}

function Bc(e, t) {
    if (!Et || !window.IntersectionObserver) return;
    const n = new IntersectionObserver(i => {
            t(i[0].intersectionRatio > 0)
        }, {
            root: document.body
        }),
        o = () => {
            e.value && n.observe(e.value)
        },
        r = () => {
            e.value && n.unobserve(e.value)
        };
    Lt(r), wt(r), Jn(o)
}
const [_g, Tg] = se("sticky"), Eg = {
    zIndex: J,
    position: ue("top"),
    container: Object,
    offsetTop: Se(0),
    offsetBottom: Se(0)
};
var Og = oe({
    name: _g,
    props: Eg,
    emits: ["scroll", "change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = Ri(o),
            i = Ke({
                fixed: !1,
                width: 0,
                height: 0,
                transform: 0
            }),
            l = H(!1),
            s = Y(() => vl(e.position === "top" ? e.offsetTop : e.offsetBottom)),
            a = Y(() => {
                if (l.value) return;
                const {
                    fixed: h,
                    height: y,
                    width: b
                } = i;
                if (h) return {
                    width: `${b}px`,
                    height: `${y}px`
                }
            }),
            c = Y(() => {
                if (!i.fixed || l.value) return;
                const h = we(gl(e.zIndex), {
                    width: `${i.width}px`,
                    height: `${i.height}px`,
                    [e.position]: `${s.value}px`
                });
                return i.transform && (h.transform = `translate3d(0, ${i.transform}px, 0)`), h
            }),
            u = h => t("scroll", {
                scrollTop: h,
                isFixed: i.fixed
            }),
            d = () => {
                if (!o.value || Yn(o)) return;
                const {
                    container: h,
                    position: y
                } = e, b = We(o), C = Ro(window);
                if (i.width = b.width, i.height = b.height, y === "top")
                    if (h) {
                        const v = We(h),
                            x = v.bottom - s.value - i.height;
                        i.fixed = s.value > b.top && v.bottom > 0, i.transform = x < 0 ? x : 0
                    } else i.fixed = s.value > b.top;
                else {
                    const {
                        clientHeight: v
                    } = document.documentElement;
                    if (h) {
                        const x = We(h),
                            m = v - x.top - s.value - i.height;
                        i.fixed = v - s.value < b.bottom && v > x.top, i.transform = m < 0 ? -m : 0
                    } else i.fixed = v - s.value < b.bottom
                }
                u(C)
            };
        return ee(() => i.fixed, h => t("change", h)), nt("scroll", d, {
            target: r,
            passive: !0
        }), Bc(o, d), ee([At, en], () => {
            !o.value || Yn(o) || !i.fixed || (l.value = !0, Te(() => {
                const h = We(o);
                i.width = h.width, i.height = h.height, l.value = !1
            }))
        }), () => {
            var h;
            return f("div", {
                ref: o,
                style: a.value
            }, [f("div", {
                class: Tg({
                    fixed: i.fixed && !l.value
                }),
                style: c.value
            }, [(h = n.default) == null ? void 0 : h.call(n)])])
        }
    }
});
const kg = ge(Og),
    [$c, Xo] = se("swipe"),
    Ig = {
        loop: Z,
        width: J,
        height: J,
        vertical: Boolean,
        autoplay: Se(0),
        duration: Se(500),
        touchable: Z,
        lazyRender: Boolean,
        initialSwipe: Se(0),
        indicatorColor: String,
        showIndicators: Z,
        stopPropagation: Z
    },
    Rc = Symbol($c);
var Dg = oe({
    name: $c,
    props: Ig,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = H(),
            i = Ke({
                rect: null,
                width: 0,
                height: 0,
                offset: 0,
                active: 0,
                swiping: !1
            });
        let l = !1;
        const s = On(),
            {
                children: a,
                linkChildren: c
            } = $o(Rc),
            u = Y(() => a.length),
            d = Y(() => i[e.vertical ? "height" : "width"]),
            h = Y(() => e.vertical ? s.deltaY.value : s.deltaX.value),
            y = Y(() => i.rect ? (e.vertical ? i.rect.height : i.rect.width) - d.value * u.value : 0),
            b = Y(() => d.value ? Math.ceil(Math.abs(y.value) / d.value) : u.value),
            C = Y(() => u.value * d.value),
            v = Y(() => (i.active + u.value) % u.value),
            x = Y(() => {
                const K = e.vertical ? "vertical" : "horizontal";
                return s.direction.value === K
            }),
            m = Y(() => {
                const K = {
                    transitionDuration: `${i.swiping?0:e.duration}ms`,
                    transform: `translate${e.vertical?"Y":"X"}(${+i.offset.toFixed(2)}px)`
                };
                if (d.value) {
                    const Q = e.vertical ? "height" : "width",
                        me = e.vertical ? "width" : "height";
                    K[Q] = `${C.value}px`, K[me] = e[me] ? `${e[me]}px` : ""
                }
                return K
            }),
            w = K => {
                const {
                    active: Q
                } = i;
                return K ? e.loop ? it(Q + K, -1, u.value) : it(Q + K, 0, b.value) : Q
            },
            S = (K, Q = 0) => {
                let me = K * d.value;
                e.loop || (me = Math.min(me, -y.value));
                let $e = Q - me;
                return e.loop || ($e = it($e, y.value, 0)), $e
            },
            T = ({
                pace: K = 0,
                offset: Q = 0,
                emitChange: me
            }) => {
                if (u.value <= 1) return;
                const {
                    active: $e
                } = i, G = w(K), ae = S(G, Q);
                if (e.loop) {
                    if (a[0] && ae !== y.value) {
                        const D = ae < y.value;
                        a[0].setOffset(D ? C.value : 0)
                    }
                    if (a[u.value - 1] && ae !== 0) {
                        const D = ae > 0;
                        a[u.value - 1].setOffset(D ? -C.value : 0)
                    }
                }
                i.active = G, i.offset = ae, me && G !== $e && t("change", v.value)
            },
            O = () => {
                i.swiping = !0, i.active <= -1 ? T({
                    pace: u.value
                }) : i.active >= u.value && T({
                    pace: -u.value
                })
            },
            U = () => {
                O(), s.reset(), pn(() => {
                    i.swiping = !1, T({
                        pace: -1,
                        emitChange: !0
                    })
                })
            },
            I = () => {
                O(), s.reset(), pn(() => {
                    i.swiping = !1, T({
                        pace: 1,
                        emitChange: !0
                    })
                })
            };
        let L;
        const k = () => clearTimeout(L),
            _ = () => {
                k(), +e.autoplay > 0 && u.value > 1 && (L = setTimeout(() => {
                    I(), _()
                }, +e.autoplay))
            },
            E = (K = +e.initialSwipe) => {
                if (!o.value) return;
                const Q = () => {
                    var me, $e;
                    if (!Yn(o)) {
                        const G = {
                            width: o.value.offsetWidth,
                            height: o.value.offsetHeight
                        };
                        i.rect = G, i.width = +((me = e.width) != null ? me : G.width), i.height = +(($e = e.height) != null ? $e : G.height)
                    }
                    u.value && (K = Math.min(u.value - 1, K), K === -1 && (K = u.value - 1)), i.active = K, i.swiping = !0, i.offset = S(K), a.forEach(G => {
                        G.setOffset(0)
                    }), _()
                };
                Yn(o) ? Te().then(Q) : Q()
            },
            B = () => E(i.active);
        let ie;
        const N = K => {
                !e.touchable || K.touches.length > 1 || (s.start(K), l = !1, ie = Date.now(), k(), O())
            },
            P = K => {
                e.touchable && i.swiping && (s.move(K), x.value && (!e.loop && (i.active === 0 && h.value > 0 || i.active === u.value - 1 && h.value < 0) || (et(K, e.stopPropagation), T({
                    offset: h.value
                }), l || (t("dragStart", {
                    index: v.value
                }), l = !0))))
            },
            M = () => {
                if (!e.touchable || !i.swiping) return;
                const K = Date.now() - ie,
                    Q = h.value / K;
                if ((Math.abs(Q) > .25 || Math.abs(h.value) > d.value / 2) && x.value) {
                    const $e = e.vertical ? s.offsetY.value : s.offsetX.value;
                    let G = 0;
                    e.loop ? G = $e > 0 ? h.value > 0 ? -1 : 1 : 0 : G = -Math[h.value > 0 ? "ceil" : "floor"](h.value / d.value), T({
                        pace: G,
                        emitChange: !0
                    })
                } else h.value && T({
                    pace: 0
                });
                l = !1, i.swiping = !1, t("dragEnd", {
                    index: v.value
                }), _()
            },
            V = (K, Q = {}) => {
                O(), s.reset(), pn(() => {
                    let me;
                    e.loop && K === u.value ? me = i.active === 0 ? 0 : K : me = K % u.value, Q.immediate ? pn(() => {
                        i.swiping = !1
                    }) : i.swiping = !1, T({
                        pace: me - i.active,
                        emitChange: !0
                    })
                })
            },
            fe = (K, Q) => {
                const me = Q === v.value,
                    $e = me ? {
                        backgroundColor: e.indicatorColor
                    } : void 0;
                return f("i", {
                    style: $e,
                    class: Xo("indicator", {
                        active: me
                    })
                }, null)
            },
            ve = () => {
                if (n.indicator) return n.indicator({
                    active: v.value,
                    total: u.value
                });
                if (e.showIndicators && u.value > 1) return f("div", {
                    class: Xo("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(u.value).fill("").map(fe)])
            };
        return Fe({
            prev: U,
            next: I,
            state: i,
            resize: B,
            swipeTo: V
        }), c({
            size: d,
            props: e,
            count: u,
            activeIndicator: v
        }), ee(() => e.initialSwipe, K => E(+K)), ee(u, () => E(i.active)), ee(() => e.autoplay, _), ee([At, en, () => e.width, () => e.height], B), ee(Zd(), K => {
            K === "visible" ? _() : k()
        }), Ge(E), an(() => E(i.active)), Fi(() => E(i.active)), Lt(k), wt(k), nt("touchmove", P, {
            target: r
        }), () => {
            var K;
            return f("div", {
                ref: o,
                class: Xo()
            }, [f("div", {
                ref: r,
                style: m.value,
                class: Xo("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: N,
                onTouchend: M,
                onTouchcancel: M
            }, [(K = n.default) == null ? void 0 : K.call(n)]), ve()])
        }
    }
});
const Mc = ge(Dg),
    [Pg, Vs] = se("tabs");
var Ag = oe({
    name: Pg,
    props: {
        count: qe(Number),
        inited: Boolean,
        animated: Boolean,
        duration: qe(J),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: qe(Number)
    },
    emits: ["change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = s => t("change", s),
            i = () => {
                var s;
                const a = (s = n.default) == null ? void 0 : s.call(n);
                return e.animated || e.swipeable ? f(Mc, {
                    ref: o,
                    loop: !1,
                    class: Vs("track"),
                    duration: +e.duration * 1e3,
                    touchable: e.swipeable,
                    lazyRender: e.lazyRender,
                    showIndicators: !1,
                    onChange: r
                }, {
                    default: () => [a]
                }) : a
            },
            l = s => {
                const a = o.value;
                a && a.state.active !== s && a.swipeTo(s, {
                    immediate: !e.inited
                })
            };
        return ee(() => e.currentIndex, l), Ge(() => {
            l(e.currentIndex)
        }), Fe({
            swipeRef: o
        }), () => f("div", {
            class: Vs("content", {
                animated: e.animated || e.swipeable
            })
        }, [i()])
    }
});
const [Fc, Zo] = se("tabs"), Bg = {
    type: ue("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: Se(0),
    duration: Se(.3),
    animated: Boolean,
    ellipsis: Z,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: Se(0),
    background: String,
    lazyRender: Z,
    showHeader: Z,
    lineWidth: J,
    lineHeight: J,
    beforeChange: Function,
    swipeThreshold: Se(5),
    titleActiveColor: String,
    titleInactiveColor: String
}, Lc = Symbol(Fc);
var $g = oe({
    name: Fc,
    props: Bg,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, r, i, l, s;
        const a = H(),
            c = H(),
            u = H(),
            d = H(),
            h = Ni(),
            y = Ri(a),
            [b, C] = Ac(),
            {
                children: v,
                linkChildren: x
            } = $o(Lc),
            m = Ke({
                inited: !1,
                position: "",
                lineStyle: {},
                currentIndex: -1
            }),
            w = Y(() => v.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
            S = Y(() => ({
                borderColor: e.color,
                background: e.background
            })),
            T = (G, ae) => {
                var D;
                return (D = G.name) != null ? D : ae
            },
            O = Y(() => {
                const G = v[m.currentIndex];
                if (G) return T(G, m.currentIndex)
            }),
            U = Y(() => vl(e.offsetTop)),
            I = Y(() => e.sticky ? U.value + o : 0),
            L = G => {
                const ae = c.value,
                    D = b.value;
                if (!w.value || !ae || !D || !D[m.currentIndex]) return;
                const re = D[m.currentIndex].$el,
                    le = re.offsetLeft - (ae.offsetWidth - re.offsetWidth) / 2;
                l && l(), l = xg(ae, le, G ? 0 : +e.duration)
            },
            k = () => {
                const G = m.inited;
                Te(() => {
                    const ae = b.value;
                    if (!ae || !ae[m.currentIndex] || e.type !== "line" || Yn(a.value)) return;
                    const D = ae[m.currentIndex].$el,
                        {
                            lineWidth: re,
                            lineHeight: le
                        } = e,
                        ye = D.offsetLeft + D.offsetWidth / 2,
                        Ce = {
                            width: _e(re),
                            backgroundColor: e.color,
                            transform: `translateX(${ye}px) translateX(-50%)`
                        };
                    if (G && (Ce.transitionDuration = `${e.duration}s`), Pe(le)) {
                        const Ae = _e(le);
                        Ce.height = Ae, Ce.borderRadius = Ae
                    }
                    m.lineStyle = Ce
                })
            },
            _ = G => {
                const ae = G < m.currentIndex ? -1 : 1;
                for (; G >= 0 && G < v.length;) {
                    if (!v[G].disabled) return G;
                    G += ae
                }
            },
            E = (G, ae) => {
                const D = _(G);
                if (!Pe(D)) return;
                const re = v[D],
                    le = T(re, D),
                    ye = m.currentIndex !== null;
                m.currentIndex !== D && (m.currentIndex = D, ae || L(), k()), le !== e.active && (t("update:active", le), ye && t("change", le, re.title)), i && !e.scrollspy && hl(Math.ceil(Cs(a.value) - U.value))
            },
            B = (G, ae) => {
                const D = v.find((le, ye) => T(le, ye) === G),
                    re = D ? v.indexOf(D) : 0;
                E(re, ae)
            },
            ie = (G = !1) => {
                if (e.scrollspy) {
                    const ae = v[m.currentIndex].$el;
                    if (ae && y.value) {
                        const D = Cs(ae, y.value) - I.value;
                        r = !0, s && s(), s = Sg(y.value, D, G ? 0 : +e.duration, () => {
                            r = !1
                        })
                    }
                }
            },
            N = (G, ae, D) => {
                const {
                    title: re,
                    disabled: le
                } = v[ae], ye = T(v[ae], ae);
                le || (Mo(e.beforeChange, {
                    args: [ye],
                    done: () => {
                        E(ae), ie()
                    }
                }), Cc(G)), t("clickTab", {
                    name: ye,
                    title: re,
                    event: D,
                    disabled: le
                })
            },
            P = G => {
                i = G.isFixed, t("scroll", G)
            },
            M = G => {
                Te(() => {
                    B(G), ie(!0)
                })
            },
            V = () => {
                for (let G = 0; G < v.length; G++) {
                    const {
                        top: ae
                    } = We(v[G].$el);
                    if (ae > I.value) return G === 0 ? 0 : G - 1
                }
                return v.length - 1
            },
            fe = () => {
                if (e.scrollspy && !r) {
                    const G = V();
                    E(G)
                }
            },
            ve = () => {
                if (e.type === "line" && v.length) return f("div", {
                    class: Zo("line"),
                    style: m.lineStyle
                }, null)
            },
            K = () => {
                var G, ae, D;
                const {
                    type: re,
                    border: le,
                    sticky: ye
                } = e, Ce = [f("div", {
                    ref: ye ? void 0 : u,
                    class: [Zo("wrap"), {
                        [yh]: re === "line" && le
                    }]
                }, [f("div", {
                    ref: c,
                    role: "tablist",
                    class: Zo("nav", [re, {
                        shrink: e.shrink,
                        complete: w.value
                    }]),
                    style: S.value,
                    "aria-orientation": "horizontal"
                }, [(G = n["nav-left"]) == null ? void 0 : G.call(n), v.map(Ae => Ae.renderTitle(N)), ve(), (ae = n["nav-right"]) == null ? void 0 : ae.call(n)])]), (D = n["nav-bottom"]) == null ? void 0 : D.call(n)];
                return ye ? f("div", {
                    ref: u
                }, [Ce]) : Ce
            },
            Q = () => {
                k(), Te(() => {
                    var G, ae;
                    L(!0), (ae = (G = d.value) == null ? void 0 : G.swipeRef.value) == null || ae.resize()
                })
            };
        ee(() => [e.color, e.duration, e.lineWidth, e.lineHeight], k), ee(At, Q), ee(() => e.active, G => {
            G !== O.value && B(G)
        }), ee(() => v.length, () => {
            m.inited && (B(e.active), k(), Te(() => {
                L(!0)
            }))
        });
        const me = () => {
                B(e.active, !0), Te(() => {
                    m.inited = !0, u.value && (o = We(u.value).height), L(!0)
                })
            },
            $e = (G, ae) => t("rendered", G, ae);
        return Fe({
            resize: Q,
            scrollTo: M
        }), an(k), Fi(k), Jn(me), Bc(a, k), nt("scroll", fe, {
            target: y,
            passive: !0
        }), x({
            id: h,
            props: e,
            setLine: k,
            scrollable: w,
            onRendered: $e,
            currentName: O,
            setTitleRefs: C,
            scrollIntoView: L
        }), () => f("div", {
            ref: a,
            class: Zo([e.type])
        }, [e.showHeader ? e.sticky ? f(kg, {
            container: a.value,
            offsetTop: U.value,
            onScroll: P
        }, {
            default: () => [K()]
        }) : K() : null, f(Ag, {
            ref: d,
            count: v.length,
            inited: m.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: m.currentIndex,
            onChange: E
        }, {
            default: () => {
                var G;
                return [(G = n.default) == null ? void 0 : G.call(n)]
            }
        })])
    }
});
const Vc = Symbol(),
    Rg = () => Pt(Vc, null),
    [Mg, Ns] = se("tab"),
    Fg = oe({
        name: Mg,
        props: {
            id: String,
            dot: Boolean,
            type: String,
            color: String,
            title: String,
            badge: J,
            shrink: Boolean,
            isActive: Boolean,
            disabled: Boolean,
            controls: String,
            scrollable: Boolean,
            activeColor: String,
            inactiveColor: String,
            showZeroBadge: Z
        },
        setup(e, {
            slots: t
        }) {
            const n = Y(() => {
                    const r = {},
                        {
                            type: i,
                            color: l,
                            disabled: s,
                            isActive: a,
                            activeColor: c,
                            inactiveColor: u
                        } = e;
                    l && i === "card" && (r.borderColor = l, s || (a ? r.backgroundColor = l : r.color = l));
                    const h = a ? c : u;
                    return h && (r.color = h), r
                }),
                o = () => {
                    const r = f("span", {
                        class: Ns("text", {
                            ellipsis: !e.scrollable
                        })
                    }, [t.title ? t.title() : e.title]);
                    return e.dot || Pe(e.badge) && e.badge !== "" ? f(_c, {
                        dot: e.dot,
                        content: e.badge,
                        showZero: e.showZeroBadge
                    }, {
                        default: () => [r]
                    }) : r
                };
            return () => f("div", {
                id: e.id,
                role: "tab",
                class: [Ns([e.type, {
                    grow: e.scrollable && !e.shrink,
                    shrink: e.shrink,
                    active: e.isActive,
                    disabled: e.disabled
                }])],
                style: n.value,
                tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
                "aria-selected": e.isActive,
                "aria-disabled": e.disabled || void 0,
                "aria-controls": e.controls
            }, [o()])
        }
    }),
    [Lg, Vg] = se("swipe-item");
var Ng = oe({
    name: Lg,
    setup(e, {
        slots: t
    }) {
        let n;
        const o = Ke({
                offset: 0,
                inited: !1,
                mounted: !1
            }),
            {
                parent: r,
                index: i
            } = un(Rc);
        if (!r) return;
        const l = Y(() => {
                const c = {},
                    {
                        vertical: u
                    } = r.props;
                return r.size.value && (c[u ? "height" : "width"] = `${r.size.value}px`), o.offset && (c.transform = `translate${u?"Y":"X"}(${o.offset}px)`), c
            }),
            s = Y(() => {
                const {
                    loop: c,
                    lazyRender: u
                } = r.props;
                if (!u || n) return !0;
                if (!o.mounted) return !1;
                const d = r.activeIndicator.value,
                    h = r.count.value - 1,
                    y = d === 0 && c ? h : d - 1,
                    b = d === h && c ? 0 : d + 1;
                return n = i.value === d || i.value === y || i.value === b, n
            }),
            a = c => {
                o.offset = c
            };
        return Ge(() => {
            Te(() => {
                o.mounted = !0
            })
        }), Fe({
            setOffset: a
        }), () => {
            var c;
            return f("div", {
                class: Vg(),
                style: l.value
            }, [s.value ? (c = t.default) == null ? void 0 : c.call(t) : null])
        }
    }
});
const Nc = ge(Ng),
    [zg, lr] = se("tab"),
    Hg = we({}, Li, {
        dot: Boolean,
        name: J,
        badge: J,
        title: String,
        disabled: Boolean,
        titleClass: ze,
        titleStyle: [String, Object],
        showZeroBadge: Z
    });
var jg = oe({
    name: zg,
    props: Hg,
    setup(e, {
        slots: t
    }) {
        const n = Ni(),
            o = H(!1),
            r = gt(),
            {
                parent: i,
                index: l
            } = un(Lc);
        if (!i) return;
        const s = () => {
                var b;
                return (b = e.name) != null ? b : l.value
            },
            a = () => {
                o.value = !0, i.props.lazyRender && Te(() => {
                    i.onRendered(s(), e.title)
                })
            },
            c = Y(() => {
                const b = s() === i.currentName.value;
                return b && !o.value && a(), b
            }),
            u = H(""),
            d = H("");
        Di(() => {
            const {
                titleClass: b,
                titleStyle: C
            } = e;
            u.value = b ? Ti(b) : "", d.value = C && typeof C != "string" ? wu(_i(C)) : C
        });
        const h = b => f(Fg, Be({
                key: n,
                id: `${i.id}-${l.value}`,
                ref: i.setTitleRefs(l.value),
                style: d.value,
                class: u.value,
                isActive: c.value,
                controls: n,
                scrollable: i.scrollable.value,
                activeColor: i.props.titleActiveColor,
                inactiveColor: i.props.titleInactiveColor,
                onClick: C => b(r.proxy, l.value, C)
            }, Re(i.props, ["type", "color", "shrink"]), Re(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
                title: t.title
            }),
            y = H(!c.value);
        return ee(c, b => {
            b ? y.value = !1 : pn(() => {
                y.value = !0
            })
        }), ee(() => e.title, () => {
            i.setLine(), i.scrollIntoView()
        }), Zn(Vc, c), Fe({
            id: n,
            renderTitle: h
        }), () => {
            var b;
            const C = `${i.id}-${l.value}`,
                {
                    animated: v,
                    swipeable: x,
                    scrollspy: m,
                    lazyRender: w
                } = i.props;
            if (!t.default && !v) return;
            const S = m || c.value;
            if (v || x) return f(Nc, {
                id: n,
                role: "tabpanel",
                class: lr("panel-wrapper", {
                    inactive: y.value
                }),
                tabindex: c.value ? 0 : -1,
                "aria-hidden": !c.value,
                "aria-labelledby": C
            }, {
                default: () => {
                    var U;
                    return [f("div", {
                        class: lr("panel")
                    }, [(U = t.default) == null ? void 0 : U.call(t)])]
                }
            });
            const O = o.value || m || !w ? (b = t.default) == null ? void 0 : b.call(t) : null;
            return $t(f("div", {
                id: n,
                role: "tabpanel",
                class: lr("panel"),
                tabindex: S ? 0 : -1,
                "aria-labelledby": C
            }, [O]), [
                [on, S]
            ])
        }
    }
});
const Lb = ge(jg),
    Vb = ge($g),
    [Ug, Nb] = se("picker-group"),
    Wg = Symbol(Ug);
we({
    tabs: ln(),
    activeTab: Se(0),
    nextStepText: String
}, Vi);
const zc = we({
        loading: Boolean,
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: Se(44),
        showToolbar: Z,
        swipeDuration: Se(1e3),
        visibleOptionNum: Se(6)
    }, Vi),
    Kg = we({}, zc, {
        columns: ln(),
        modelValue: ln(),
        toolbarPosition: ue("top"),
        columnsFieldNames: Object
    });
var Yg = oe({
    name: cg,
    props: Kg,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = H(e.modelValue.slice(0)),
            {
                parent: i
            } = un(Wg),
            {
                children: l,
                linkChildren: s
            } = $o(Pc);
        s();
        const a = Y(() => hg(e.columnsFieldNames)),
            c = Y(() => vl(e.optionHeight)),
            u = Y(() => ug(e.columns, a.value)),
            d = Y(() => {
                const {
                    columns: _
                } = e;
                switch (u.value) {
                    case "multiple":
                        return _;
                    case "cascade":
                        return fg(_, a.value, r);
                    default:
                        return [_]
                }
            }),
            h = Y(() => d.value.some(_ => _.length)),
            y = Y(() => d.value.map((_, E) => Br(_, r.value[E], a.value))),
            b = Y(() => d.value.map((_, E) => _.findIndex(B => B[a.value.value] === r.value[E]))),
            C = (_, E) => {
                if (r.value[_] !== E) {
                    const B = r.value.slice(0);
                    B[_] = E, r.value = B
                }
            },
            v = () => ({
                selectedValues: r.value.slice(0),
                selectedOptions: y.value,
                selectedIndexes: b.value
            }),
            x = (_, E) => {
                C(E, _), u.value === "cascade" && r.value.forEach((B, ie) => {
                    const N = d.value[ie];
                    Ms(N, B, a.value) || C(ie, N.length ? N[0][a.value.value] : void 0)
                }), Te(() => {
                    t("change", we({
                        columnIndex: E
                    }, v()))
                })
            },
            m = (_, E) => {
                const B = {
                    columnIndex: E,
                    currentOption: _
                };
                t("clickOption", we(v(), B)), t("scrollInto", B)
            },
            w = () => {
                l.forEach(E => E.stopMomentum());
                const _ = v();
                return Te(() => {
                    t("confirm", _)
                }), _
            },
            S = () => t("cancel", v()),
            T = () => d.value.map((_, E) => f(vg, {
                value: r.value[E],
                fields: a.value,
                options: _,
                readonly: e.readonly,
                allowHtml: e.allowHtml,
                optionHeight: c.value,
                swipeDuration: e.swipeDuration,
                visibleOptionNum: e.visibleOptionNum,
                onChange: B => x(B, E),
                onClickOption: B => m(B, E),
                onScrollInto: B => {
                    t("scrollInto", {
                        currentOption: B,
                        columnIndex: E
                    })
                }
            }, {
                option: n.option
            })),
            O = _ => {
                if (h.value) {
                    const E = {
                            height: `${c.value}px`
                        },
                        B = {
                            backgroundSize: `100% ${(_-c.value)/2}px`
                        };
                    return [f("div", {
                        class: It("mask"),
                        style: B
                    }, null), f("div", {
                        class: [bh, It("frame")],
                        style: E
                    }, null)]
                }
            },
            U = () => {
                const _ = c.value * +e.visibleOptionNum,
                    E = {
                        height: `${_}px`
                    };
                return f("div", {
                    ref: o,
                    class: It("columns"),
                    style: E
                }, [T(), O(_)])
            },
            I = () => {
                if (e.showToolbar && !i) return f(pg, Be(Re(e, bg), {
                    onConfirm: w,
                    onCancel: S
                }), Re(n, yg))
            };
        ee(d, _ => {
            _.forEach((E, B) => {
                E.length && !Ms(E, r.value[B], a.value) && C(B, Ic(E)[a.value.value])
            })
        }, {
            immediate: !0
        });
        let L;
        return ee(() => e.modelValue, _ => {
            !nr(_, r.value) && !nr(_, L) && (r.value = _.slice(0), L = _.slice(0))
        }, {
            deep: !0
        }), ee(r, _ => {
            nr(_, e.modelValue) || (L = _.slice(0), t("update:modelValue", L))
        }, {
            immediate: !0
        }), nt("touchmove", et, {
            target: o
        }), Fe({
            confirm: w,
            getSelectedOptions: () => y.value
        }), () => {
            var _, E;
            return f("div", {
                class: It()
            }, [e.toolbarPosition === "top" ? I() : null, e.loading ? f(Nt, {
                class: It("loading")
            }, null) : null, (_ = n["columns-top"]) == null ? void 0 : _.call(n), U(), (E = n["columns-bottom"]) == null ? void 0 : E.call(n), e.toolbarPosition === "bottom" ? I() : null])
        }
    }
});
const zb = ge(Yg),
    [qg, Dn] = se("cell"),
    Hc = {
        tag: ue("div"),
        icon: String,
        size: String,
        title: J,
        value: J,
        label: J,
        center: Boolean,
        isLink: Boolean,
        border: Z,
        iconPrefix: String,
        valueClass: ze,
        labelClass: ze,
        titleClass: ze,
        titleStyle: null,
        arrowDirection: String,
        required: {
            type: [Boolean, String],
            default: null
        },
        clickable: {
            type: Boolean,
            default: null
        }
    },
    Gg = we({}, Hc, Li);
var Xg = oe({
    name: qg,
    props: Gg,
    setup(e, {
        slots: t
    }) {
        const n = ml(),
            o = () => {
                if (t.label || Pe(e.label)) return f("div", {
                    class: [Dn("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
            },
            r = () => {
                var a;
                if (t.title || Pe(e.title)) {
                    const c = (a = t.title) == null ? void 0 : a.call(t);
                    return Array.isArray(c) && c.length === 0 ? void 0 : f("div", {
                        class: [Dn("title"), e.titleClass],
                        style: e.titleStyle
                    }, [c || f("span", null, [e.title]), o()])
                }
            },
            i = () => {
                const a = t.value || t.default;
                if (a || Pe(e.value)) return f("div", {
                    class: [Dn("value"), e.valueClass]
                }, [a ? a() : f("span", null, [e.value])])
            },
            l = () => {
                if (t.icon) return t.icon();
                if (e.icon) return f(Me, {
                    name: e.icon,
                    class: Dn("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            s = () => {
                if (t["right-icon"]) return t["right-icon"]();
                if (e.isLink) {
                    const a = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                    return f(Me, {
                        name: a,
                        class: Dn("right-icon")
                    }, null)
                }
            };
        return () => {
            var a;
            const {
                tag: c,
                size: u,
                center: d,
                border: h,
                isLink: y,
                required: b
            } = e, C = (a = e.clickable) != null ? a : y, v = {
                center: d,
                required: !!b,
                clickable: C,
                borderless: !h
            };
            return u && (v[u] = !!u), f(c, {
                class: Dn(v),
                role: C ? "button" : void 0,
                tabindex: C ? 0 : void 0,
                onClick: n
            }, {
                default: () => {
                    var x;
                    return [l(), r(), i(), s(), (x = t.extra) == null ? void 0 : x.call(t)]
                }
            })
        }
    }
});
const Zg = ge(Xg);

function jc(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function Jg(e, t) {
    if (jc(e)) {
        if (t.required) return !1;
        if (t.validateEmpty === !1) return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}

function Qg(e, t) {
    return new Promise(n => {
        const o = t.validator(e, t);
        if (cl(o)) {
            o.then(n);
            return
        }
        n(o)
    })
}

function zs(e, t) {
    const {
        message: n
    } = t;
    return Kn(n) ? n(e, t) : n || ""
}

function ev({
    target: e
}) {
    e.composing = !0
}

function Hs({
    target: e
}) {
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function tv(e, t) {
    const n = dl();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (Bo(t)) {
        const {
            maxHeight: r,
            minHeight: i
        } = t;
        r !== void 0 && (o = Math.min(o, r)), i !== void 0 && (o = Math.max(o, i))
    }
    o && (e.style.height = `${o}px`, hl(n))
}

function nv(e) {
    return e === "number" ? {
        type: "text",
        inputmode: "decimal"
    } : e === "digit" ? {
        type: "tel",
        inputmode: "numeric"
    } : {
        type: e
    }
}

function Ot(e) {
    return [...e].length
}

function sr(e, t) {
    return [...e].slice(0, t).join("")
}
const [ov, st] = se("field"), iv = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: J,
    formatter: Function,
    clearIcon: ue("clear"),
    modelValue: Se(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: ue("focus"),
    formatTrigger: ue("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    }
}, rv = we({}, Hc, iv, {
    rows: J,
    type: ue("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: J,
    labelClass: ze,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var lv = oe({
    name: ov,
    props: rv,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Ni(),
            r = Ke({
                status: "unvalidated",
                focused: !1,
                validateMessage: ""
            }),
            i = H(),
            l = H(),
            s = H(),
            {
                parent: a
            } = un(ph),
            c = () => {
                var D;
                return String((D = e.modelValue) != null ? D : "")
            },
            u = D => {
                if (Pe(e[D])) return e[D];
                if (a && Pe(a.props[D])) return a.props[D]
            },
            d = Y(() => {
                const D = u("readonly");
                if (e.clearable && !D) {
                    const re = c() !== "",
                        le = e.clearTrigger === "always" || e.clearTrigger === "focus" && r.focused;
                    return re && le
                }
                return !1
            }),
            h = Y(() => s.value && n.input ? s.value() : e.modelValue),
            y = Y(() => {
                var D;
                const re = u("required");
                return re === "auto" ? (D = e.rules) == null ? void 0 : D.some(le => le.required) : re
            }),
            b = D => D.reduce((re, le) => re.then(() => {
                if (r.status === "failed") return;
                let {
                    value: ye
                } = h;
                if (le.formatter && (ye = le.formatter(ye, le)), !Jg(ye, le)) {
                    r.status = "failed", r.validateMessage = zs(ye, le);
                    return
                }
                if (le.validator) return jc(ye) && le.validateEmpty === !1 ? void 0 : Qg(ye, le).then(Ce => {
                    Ce && typeof Ce == "string" ? (r.status = "failed", r.validateMessage = Ce) : Ce === !1 && (r.status = "failed", r.validateMessage = zs(ye, le))
                })
            }), Promise.resolve()),
            C = () => {
                r.status = "unvalidated", r.validateMessage = ""
            },
            v = () => t("endValidate", {
                status: r.status,
                message: r.validateMessage
            }),
            x = (D = e.rules) => new Promise(re => {
                C(), D ? (t("startValidate"), b(D).then(() => {
                    r.status === "failed" ? (re({
                        name: e.name,
                        message: r.validateMessage
                    }), v()) : (r.status = "passed", re(), v())
                })) : re()
            }),
            m = D => {
                if (a && e.rules) {
                    const {
                        validateTrigger: re
                    } = a.props, le = gi(re).includes(D), ye = e.rules.filter(Ce => Ce.trigger ? gi(Ce.trigger).includes(D) : le);
                    ye.length && x(ye)
                }
            },
            w = D => {
                var re;
                const {
                    maxlength: le
                } = e;
                if (Pe(le) && Ot(D) > +le) {
                    const ye = c();
                    if (ye && Ot(ye) === +le) return ye;
                    const Ce = (re = i.value) == null ? void 0 : re.selectionEnd;
                    if (r.focused && Ce) {
                        const Ae = [...D],
                            g = Ae.length - +le;
                        return Ae.splice(Ce - g, g), Ae.join("")
                    }
                    return sr(D, +le)
                }
                return D
            },
            S = (D, re = "onChange") => {
                const le = D;
                D = w(D);
                const ye = Ot(le) - Ot(D);
                if (e.type === "number" || e.type === "digit") {
                    const Ae = e.type === "number";
                    D = lh(D, Ae, Ae)
                }
                let Ce = 0;
                if (e.formatter && re === e.formatTrigger) {
                    const {
                        formatter: Ae,
                        maxlength: g
                    } = e;
                    if (D = Ae(D), Pe(g) && Ot(D) > +g && (D = sr(D, +g)), i.value && r.focused) {
                        const {
                            selectionEnd: p
                        } = i.value, A = sr(le, p);
                        Ce = Ot(Ae(A)) - Ot(A)
                    }
                }
                if (i.value && i.value.value !== D)
                    if (r.focused) {
                        let {
                            selectionStart: Ae,
                            selectionEnd: g
                        } = i.value;
                        if (i.value.value = D, Pe(Ae) && Pe(g)) {
                            const p = Ot(D);
                            ye ? (Ae -= ye, g -= ye) : Ce && (Ae += Ce, g += Ce), i.value.setSelectionRange(Math.min(Ae, p), Math.min(g, p))
                        }
                    } else i.value.value = D;
                D !== e.modelValue && t("update:modelValue", D)
            },
            T = D => {
                D.target.composing || S(D.target.value)
            },
            O = () => {
                var D;
                return (D = i.value) == null ? void 0 : D.blur()
            },
            U = () => {
                var D;
                return (D = i.value) == null ? void 0 : D.focus()
            },
            I = () => {
                const D = i.value;
                e.type === "textarea" && e.autosize && D && tv(D, e.autosize)
            },
            L = D => {
                r.focused = !0, t("focus", D), Te(I), u("readonly") && O()
            },
            k = D => {
                r.focused = !1, S(c(), "onBlur"), t("blur", D), !u("readonly") && (m("onBlur"), Te(I), Qd())
            },
            _ = D => t("clickInput", D),
            E = D => t("clickLeftIcon", D),
            B = D => t("clickRightIcon", D),
            ie = D => {
                et(D), t("update:modelValue", ""), t("clear", D)
            },
            N = Y(() => {
                if (typeof e.error == "boolean") return e.error;
                if (a && a.props.showError && r.status === "failed") return !0
            }),
            P = Y(() => {
                const D = u("labelWidth"),
                    re = u("labelAlign");
                if (D && re !== "top") return {
                    width: _e(D)
                }
            }),
            M = D => {
                D.keyCode === 13 && (!(a && a.props.submitOnEnter) && e.type !== "textarea" && et(D), e.type === "search" && O()), t("keypress", D)
            },
            V = () => e.id || `${o}-input`,
            fe = () => r.status,
            ve = () => {
                const D = st("control", [u("inputAlign"), {
                    error: N.value,
                    custom: !!n.input,
                    "min-height": e.type === "textarea" && !e.autosize
                }]);
                if (n.input) return f("div", {
                    class: D,
                    onClick: _
                }, [n.input()]);
                const re = {
                    id: V(),
                    ref: i,
                    name: e.name,
                    rows: e.rows !== void 0 ? +e.rows : void 0,
                    class: D,
                    disabled: u("disabled"),
                    readonly: u("readonly"),
                    autofocus: e.autofocus,
                    placeholder: e.placeholder,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    enterkeyhint: e.enterkeyhint,
                    spellcheck: e.spellcheck,
                    "aria-labelledby": e.label ? `${o}-label` : void 0,
                    onBlur: k,
                    onFocus: L,
                    onInput: T,
                    onClick: _,
                    onChange: Hs,
                    onKeypress: M,
                    onCompositionend: Hs,
                    onCompositionstart: ev
                };
                return e.type === "textarea" ? f("textarea", re, null) : f("input", Be(nv(e.type), re), null)
            },
            K = () => {
                const D = n["left-icon"];
                if (e.leftIcon || D) return f("div", {
                    class: st("left-icon"),
                    onClick: E
                }, [D ? D() : f(Me, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            Q = () => {
                const D = n["right-icon"];
                if (e.rightIcon || D) return f("div", {
                    class: st("right-icon"),
                    onClick: B
                }, [D ? D() : f(Me, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            me = () => {
                if (e.showWordLimit && e.maxlength) {
                    const D = Ot(c());
                    return f("div", {
                        class: st("word-limit")
                    }, [f("span", {
                        class: st("word-num")
                    }, [D]), nc("/"), e.maxlength])
                }
            },
            $e = () => {
                if (a && a.props.showErrorMessage === !1) return;
                const D = e.errorMessage || r.validateMessage;
                if (D) {
                    const re = n["error-message"],
                        le = u("errorMessageAlign");
                    return f("div", {
                        class: st("error-message", le)
                    }, [re ? re({
                        message: D
                    }) : D])
                }
            },
            G = () => {
                const D = u("labelWidth"),
                    re = u("labelAlign"),
                    le = u("colon") ? ":" : "";
                if (n.label) return [n.label(), le];
                if (e.label) return f("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : V(),
                    onClick: ye => {
                        et(ye), U()
                    },
                    style: re === "top" && D ? {
                        width: _e(D)
                    } : void 0
                }, [e.label + le])
            },
            ae = () => [f("div", {
                class: st("body")
            }, [ve(), d.value && f(Me, {
                ref: l,
                name: e.clearIcon,
                class: st("clear")
            }, null), Q(), n.button && f("div", {
                class: st("button")
            }, [n.button()])]), me(), $e()];
        return Fe({
            blur: O,
            focus: U,
            validate: x,
            formValue: h,
            resetValidation: C,
            getValidationStatus: fe
        }), Zn(hc, {
            customValue: s,
            resetValidation: C,
            validateWithTrigger: m
        }), ee(() => e.modelValue, () => {
            S(c()), C(), m("onChange"), Te(I)
        }), Ge(() => {
            S(c(), e.formatTrigger), Te(I)
        }), nt("touchstart", ie, {
            target: Y(() => {
                var D;
                return (D = l.value) == null ? void 0 : D.$el
            })
        }), () => {
            const D = u("disabled"),
                re = u("labelAlign"),
                le = K(),
                ye = () => {
                    const Ce = G();
                    return re === "top" ? [le, Ce].filter(Boolean) : Ce || []
                };
            return f(Zg, {
                size: e.size,
                class: st({
                    error: N.value,
                    disabled: D,
                    [`label-${re}`]: re
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: P.value,
                valueClass: st("value"),
                titleClass: [st("label", [re, {
                    required: y.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: le && re !== "top" ? () => le : null,
                title: ye,
                value: ae,
                extra: n.extra
            })
        }
    }
});
const Hb = ge(lv);
let ro = 0;

function sv(e) {
    e ? (ro || document.body.classList.add("van-toast--unclickable"), ro++) : ro && (ro--, ro || document.body.classList.remove("van-toast--unclickable"))
}
const [av, Pn] = se("toast"), cv = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], uv = {
    icon: String,
    show: Boolean,
    type: ue("text"),
    overlay: Boolean,
    message: J,
    iconSize: J,
    duration: ul(2e3),
    position: ue("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: ze,
    iconPrefix: String,
    transition: ue("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: ze,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: J
};
var Uc = oe({
    name: av,
    props: uv,
    emits: ["update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, r = !1;
        const i = () => {
                const d = e.show && e.forbidClick;
                r !== d && (r = d, sv(r))
            },
            l = d => t("update:show", d),
            s = () => {
                e.closeOnClick && l(!1)
            },
            a = () => clearTimeout(o),
            c = () => {
                const {
                    icon: d,
                    type: h,
                    iconSize: y,
                    iconPrefix: b,
                    loadingType: C
                } = e;
                if (d || h === "success" || h === "fail") return f(Me, {
                    name: d || h,
                    size: y,
                    class: Pn("icon"),
                    classPrefix: b
                }, null);
                if (h === "loading") return f(Nt, {
                    class: Pn("loading"),
                    size: y,
                    type: C
                }, null)
            },
            u = () => {
                const {
                    type: d,
                    message: h
                } = e;
                if (n.message) return f("div", {
                    class: Pn("text")
                }, [n.message()]);
                if (Pe(h) && h !== "") return d === "html" ? f("div", {
                    key: 0,
                    class: Pn("text"),
                    innerHTML: String(h)
                }, null) : f("div", {
                    class: Pn("text")
                }, [h])
            };
        return ee(() => [e.show, e.forbidClick], i), ee(() => [e.show, e.type, e.message, e.duration], () => {
            a(), e.show && e.duration > 0 && (o = setTimeout(() => {
                l(!1)
            }, e.duration))
        }), Ge(i), Io(i), () => f(Fo, Be({
            class: [Pn([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: s,
            onClosed: a,
            "onUpdate:show": l
        }, Re(e, cv)), {
            default: () => [c(), u()]
        })
    }
});

function bl() {
    const e = Ke({
            show: !1
        }),
        t = r => {
            e.show = r
        },
        n = r => {
            we(e, r, {
                transitionAppear: !0
            }), t(!0)
        },
        o = () => t(!1);
    return Fe({
        open: n,
        close: o,
        toggle: t
    }), {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}

function pl(e) {
    const t = Fd(e),
        n = document.createElement("div");
    return document.body.appendChild(n), {
        instance: t.mount(n),
        unmount() {
            t.unmount(), document.body.removeChild(n)
        }
    }
}
const fv = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let Zt = [],
    dv = !1,
    js = we({}, fv);
const hv = new Map;

function Wc(e) {
    return Bo(e) ? e : {
        message: e
    }
}

function gv() {
    const {
        instance: e,
        unmount: t
    } = pl({
        setup() {
            const n = H(""),
                {
                    open: o,
                    state: r,
                    close: i,
                    toggle: l
                } = bl(),
                s = () => {},
                a = () => f(Uc, Be(r, {
                    onClosed: s,
                    "onUpdate:show": l
                }), null);
            return ee(n, c => {
                r.message = c
            }), gt().render = a, {
                open: o,
                close: i,
                message: n
            }
        }
    });
    return e
}

function vv() {
    if (!Zt.length || dv) {
        const e = gv();
        Zt.push(e)
    }
    return Zt[Zt.length - 1]
}

function $r(e = {}) {
    if (!Et) return {};
    const t = vv(),
        n = Wc(e);
    return t.open(we({}, js, hv.get(n.type || js.type), n)), t
}
const mv = e => t => $r(we({
        type: e
    }, Wc(t))),
    jb = mv("loading"),
    Ub = e => {
        Zt.length && (e ? (Zt.forEach(t => {
            t.close()
        }), Zt = []) : Zt[0].close())
    },
    Wb = ge(Uc),
    [yv, ar] = se("switch"),
    bv = {
        size: J,
        loading: Boolean,
        disabled: Boolean,
        modelValue: ze,
        activeColor: String,
        inactiveColor: String,
        activeValue: {
            type: ze,
            default: !0
        },
        inactiveValue: {
            type: ze,
            default: !1
        }
    };
var pv = oe({
    name: yv,
    props: bv,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => e.modelValue === e.activeValue,
            r = () => {
                if (!e.disabled && !e.loading) {
                    const l = o() ? e.inactiveValue : e.activeValue;
                    t("update:modelValue", l), t("change", l)
                }
            },
            i = () => {
                if (e.loading) {
                    const l = o() ? e.activeColor : e.inactiveColor;
                    return f(Nt, {
                        class: ar("loading"),
                        color: l
                    }, null)
                }
                if (n.node) return n.node()
            };
        return Mi(() => e.modelValue), () => {
            var l;
            const {
                size: s,
                loading: a,
                disabled: c,
                activeColor: u,
                inactiveColor: d
            } = e, h = o(), y = {
                fontSize: _e(s),
                backgroundColor: h ? u : d
            };
            return f("div", {
                role: "switch",
                class: ar({
                    on: h,
                    loading: a,
                    disabled: c
                }),
                style: y,
                tabindex: c ? void 0 : 0,
                "aria-checked": h,
                onClick: r
            }, [f("div", {
                class: ar("node")
            }, [i()]), (l = n.background) == null ? void 0 : l.call(n)])
        }
    }
});
const Kb = ge(pv),
    [Kc, wv] = se("radio-group"),
    xv = {
        shape: String,
        disabled: Boolean,
        iconSize: J,
        direction: String,
        modelValue: ze,
        checkedColor: String
    },
    Yc = Symbol(Kc);
var Sv = oe({
    name: Kc,
    props: xv,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            linkChildren: o
        } = $o(Yc), r = i => t("update:modelValue", i);
        return ee(() => e.modelValue, i => t("change", i)), o({
            props: e,
            updateValue: r
        }), Mi(() => e.modelValue), () => {
            var i;
            return f("div", {
                class: wv([e.direction]),
                role: "radiogroup"
            }, [(i = n.default) == null ? void 0 : i.call(n)])
        }
    }
});
const Yb = ge(Sv),
    wl = {
        name: ze,
        disabled: Boolean,
        iconSize: J,
        modelValue: ze,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean
    };
var qc = oe({
    props: we({}, wl, {
        bem: qe(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: Z,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = h => {
                if (e.parent && e.bindGroup) return e.parent.props[h]
            },
            i = Y(() => {
                if (e.parent && e.bindGroup) {
                    const h = r("disabled") || e.disabled;
                    if (e.role === "checkbox") {
                        const y = r("modelValue").length,
                            b = r("max"),
                            C = b && y >= +b;
                        return h || C && !e.checked
                    }
                    return h
                }
                return e.disabled
            }),
            l = Y(() => r("direction")),
            s = Y(() => {
                const h = e.checkedColor || r("checkedColor");
                if (h && e.checked && !i.value) return {
                    borderColor: h,
                    backgroundColor: h
                }
            }),
            a = Y(() => e.shape || r("shape") || "round"),
            c = h => {
                const {
                    target: y
                } = h, b = o.value, C = b === y || (b == null ? void 0 : b.contains(y));
                !i.value && (C || !e.labelDisabled) && t("toggle"), t("click", h)
            },
            u = () => {
                var h, y;
                const {
                    bem: b,
                    checked: C,
                    indeterminate: v
                } = e, x = e.iconSize || r("iconSize");
                return f("div", {
                    ref: o,
                    class: b("icon", [a.value, {
                        disabled: i.value,
                        checked: C,
                        indeterminate: v
                    }]),
                    style: a.value !== "dot" ? {
                        fontSize: _e(x)
                    } : {
                        width: _e(x),
                        height: _e(x),
                        borderColor: (h = s.value) == null ? void 0 : h.borderColor
                    }
                }, [n.icon ? n.icon({
                    checked: C,
                    disabled: i.value
                }) : a.value !== "dot" ? f(Me, {
                    name: v ? "minus" : "success",
                    style: s.value
                }, null) : f("div", {
                    class: b("icon--dot__icon"),
                    style: {
                        backgroundColor: (y = s.value) == null ? void 0 : y.backgroundColor
                    }
                }, null)])
            },
            d = () => {
                const {
                    checked: h
                } = e;
                if (n.default) return f("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: i.value
                    }])
                }, [n.default({
                    checked: h,
                    disabled: i.value
                })])
            };
        return () => {
            const h = e.labelPosition === "left" ? [d(), u()] : [u(), d()];
            return f("div", {
                role: e.role,
                class: e.bem([{
                    disabled: i.value,
                    "label-disabled": e.labelDisabled
                }, l.value]),
                tabindex: i.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: c
            }, [h])
        }
    }
});
const Cv = we({}, wl, {
        shape: String
    }),
    [_v, Tv] = se("radio");
var Ev = oe({
    name: _v,
    props: Cv,
    emits: ["update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = un(Yc), r = () => (o ? o.props.modelValue : e.modelValue) === e.name, i = () => {
            o ? o.updateValue(e.name) : t("update:modelValue", e.name)
        };
        return () => f(qc, Be({
            bem: Tv,
            role: "radio",
            parent: o,
            checked: r(),
            onToggle: i
        }, e), Re(n, ["default", "icon"]))
    }
});
const qb = ge(Ev),
    [Ov, Ve, Bt] = se("calendar"),
    kv = e => Bt("monthTitle", e.getFullYear(), e.getMonth() + 1);

function Rr(e, t) {
    const n = e.getFullYear(),
        o = t.getFullYear();
    if (n === o) {
        const r = e.getMonth(),
            i = t.getMonth();
        return r === i ? 0 : r > i ? 1 : -1
    }
    return n > o ? 1 : -1
}

function rt(e, t) {
    const n = Rr(e, t);
    if (n === 0) {
        const o = e.getDate(),
            r = t.getDate();
        return o === r ? 0 : o > r ? 1 : -1
    }
    return n
}
const yi = e => new Date(e),
    Us = e => Array.isArray(e) ? e.map(yi) : yi(e);

function xl(e, t) {
    const n = yi(e);
    return n.setDate(n.getDate() + t), n
}
const Mr = e => xl(e, -1),
    Gc = e => xl(e, 1),
    Fr = () => {
        const e = new Date;
        return e.setHours(0, 0, 0, 0), e
    };

function Iv(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
we({}, zc, {
    modelValue: ln(),
    filter: Function,
    formatter: {
        type: Function,
        default: (e, t) => t
    }
});
const Dv = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
    [Pv] = se("calendar-day");
var Av = oe({
    name: Pv,
    props: {
        item: qe(Object),
        color: String,
        index: Number,
        offset: ul(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Y(() => {
                var a;
                const {
                    item: c,
                    index: u,
                    color: d,
                    offset: h,
                    rowHeight: y
                } = e, b = {
                    height: y
                };
                if (c.type === "placeholder") return b.width = "100%", b;
                if (u === 0 && (b.marginLeft = `${100*h/7}%`), d) switch (c.type) {
                    case "end":
                    case "start":
                    case "start-end":
                    case "multiple-middle":
                    case "multiple-selected":
                        b.background = d;
                        break;
                    case "middle":
                        b.color = d;
                        break
                }
                return h + (((a = c.date) == null ? void 0 : a.getDate()) || 1) > 28 && (b.marginBottom = 0), b
            }),
            r = () => {
                e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
            },
            i = () => {
                const {
                    topInfo: a
                } = e.item;
                if (a || n["top-info"]) return f("div", {
                    class: Ve("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : a])
            },
            l = () => {
                const {
                    bottomInfo: a
                } = e.item;
                if (a || n["bottom-info"]) return f("div", {
                    class: Ve("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : a])
            },
            s = () => {
                const {
                    item: a,
                    color: c,
                    rowHeight: u
                } = e, {
                    type: d,
                    text: h
                } = a, y = [i(), h, l()];
                return d === "selected" ? f("div", {
                    class: Ve("selected-day"),
                    style: {
                        width: u,
                        height: u,
                        background: c
                    }
                }, [y]) : y
            };
        return () => {
            const {
                type: a,
                className: c
            } = e.item;
            return a === "placeholder" ? f("div", {
                class: Ve("day"),
                style: o.value
            }, null) : f("div", {
                role: "gridcell",
                style: o.value,
                class: [Ve("day", a), c],
                tabindex: a === "disabled" ? void 0 : -1,
                onClick: r
            }, [s()])
        }
    }
});
const [Bv] = se("calendar-month"), $v = {
    date: qe(Date),
    type: String,
    color: String,
    minDate: qe(Date),
    maxDate: qe(Date),
    showMark: Boolean,
    rowHeight: J,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var Rv = oe({
    name: Bv,
    props: $v,
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const [o, r] = Hd(), i = H(), l = H(), s = wc(l), a = Y(() => kv(e.date)), c = Y(() => _e(e.rowHeight)), u = Y(() => {
            const k = e.date.getDay();
            return e.firstDayOfWeek ? (k + 7 - e.firstDayOfWeek) % 7 : k
        }), d = Y(() => Dv(e.date.getFullYear(), e.date.getMonth() + 1)), h = Y(() => o.value || !e.lazyRender), y = () => a.value, b = k => {
            const _ = E => e.currentDate.some(B => rt(B, E) === 0);
            if (_(k)) {
                const E = Mr(k),
                    B = Gc(k),
                    ie = _(E),
                    N = _(B);
                return ie && N ? "multiple-middle" : ie ? "end" : N ? "start" : "multiple-selected"
            }
            return ""
        }, C = k => {
            const [_, E] = e.currentDate;
            if (!_) return "";
            const B = rt(k, _);
            if (!E) return B === 0 ? "start" : "";
            const ie = rt(k, E);
            return e.allowSameDay && B === 0 && ie === 0 ? "start-end" : B === 0 ? "start" : ie === 0 ? "end" : B > 0 && ie < 0 ? "middle" : ""
        }, v = k => {
            const {
                type: _,
                minDate: E,
                maxDate: B,
                currentDate: ie
            } = e;
            if (rt(k, E) < 0 || rt(k, B) > 0) return "disabled";
            if (ie === null) return "";
            if (Array.isArray(ie)) {
                if (_ === "multiple") return b(k);
                if (_ === "range") return C(k)
            } else if (_ === "single") return rt(k, ie) === 0 ? "selected" : "";
            return ""
        }, x = k => {
            if (e.type === "range") {
                if (k === "start" || k === "end") return Bt(k);
                if (k === "start-end") return `${Bt("start")}/${Bt("end")}`
            }
        }, m = () => {
            if (e.showMonthTitle) return f("div", {
                class: Ve("month-title")
            }, [n["month-title"] ? n["month-title"]({
                date: e.date,
                text: a.value
            }) : a.value])
        }, w = () => {
            if (e.showMark && h.value) return f("div", {
                class: Ve("month-mark")
            }, [e.date.getMonth() + 1])
        }, S = Y(() => {
            const k = Math.ceil((d.value + u.value) / 7);
            return Array(k).fill({
                type: "placeholder"
            })
        }), T = Y(() => {
            const k = [],
                _ = e.date.getFullYear(),
                E = e.date.getMonth();
            for (let B = 1; B <= d.value; B++) {
                const ie = new Date(_, E, B),
                    N = v(ie);
                let P = {
                    date: ie,
                    type: N,
                    text: B,
                    bottomInfo: x(N)
                };
                e.formatter && (P = e.formatter(P)), k.push(P)
            }
            return k
        }), O = Y(() => T.value.filter(k => k.type === "disabled")), U = (k, _) => {
            if (i.value) {
                const E = We(i.value),
                    B = S.value.length,
                    N = (Math.ceil((_.getDate() + u.value) / 7) - 1) * E.height / B;
                vi(k, E.top + N + k.scrollTop - We(k).top)
            }
        }, I = (k, _) => f(Av, {
            item: k,
            index: _,
            color: e.color,
            offset: u.value,
            rowHeight: c.value,
            onClick: E => t("click", E),
            onClickDisabledDate: E => t("clickDisabledDate", E)
        }, Re(n, ["top-info", "bottom-info"])), L = () => f("div", {
            ref: i,
            role: "grid",
            class: Ve("days")
        }, [w(), (h.value ? T : S).value.map(I)]);
        return Fe({
            getTitle: y,
            getHeight: () => s.value,
            setVisible: r,
            scrollToDate: U,
            disabledDays: O
        }), () => f("div", {
            class: Ve("month"),
            ref: l
        }, [m(), L()])
    }
});
const [Mv] = se("calendar-header");
var Fv = oe({
    name: Mv,
    props: {
        date: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number
    },
    emits: ["clickSubtitle"],
    setup(e, {
        slots: t,
        emit: n
    }) {
        const o = () => {
                if (e.showTitle) {
                    const s = e.title || Bt("title"),
                        a = t.title ? t.title() : s;
                    return f("div", {
                        class: Ve("header-title")
                    }, [a])
                }
            },
            r = s => n("clickSubtitle", s),
            i = () => {
                if (e.showSubtitle) {
                    const s = t.subtitle ? t.subtitle({
                        date: e.date,
                        text: e.subtitle
                    }) : e.subtitle;
                    return f("div", {
                        class: Ve("header-subtitle"),
                        onClick: r
                    }, [s])
                }
            },
            l = () => {
                const {
                    firstDayOfWeek: s
                } = e, a = Bt("weekdays"), c = [...a.slice(s, 7), ...a.slice(0, s)];
                return f("div", {
                    class: Ve("weekdays")
                }, [c.map(u => f("span", {
                    class: Ve("weekday")
                }, [u]))])
            };
        return () => f("div", {
            class: Ve("header")
        }, [o(), i(), l()])
    }
});
const Lv = {
    show: Boolean,
    type: ue("single"),
    title: String,
    color: String,
    round: Z,
    readonly: Boolean,
    poppable: Z,
    maxRange: Se(null),
    position: ue("bottom"),
    teleport: [String, Object],
    showMark: Z,
    showTitle: Z,
    formatter: Function,
    rowHeight: J,
    confirmText: String,
    rangePrompt: String,
    lazyRender: Z,
    showConfirm: Z,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Z,
    closeOnPopstate: Z,
    showRangePrompt: Z,
    confirmDisabledText: String,
    closeOnClickOverlay: Z,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Z,
    minDate: {
        type: Date,
        validator: Or,
        default: Fr
    },
    maxDate: {
        type: Date,
        validator: Or,
        default: () => {
            const e = Fr();
            return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate())
        }
    },
    firstDayOfWeek: {
        type: J,
        default: 0,
        validator: e => e >= 0 && e <= 6
    }
};
var Vv = oe({
    name: Ov,
    props: Lv,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = (N, P = e.minDate, M = e.maxDate) => rt(N, P) === -1 ? P : rt(N, M) === 1 ? M : N,
            r = (N = e.defaultDate) => {
                const {
                    type: P,
                    minDate: M,
                    maxDate: V,
                    allowSameDay: fe
                } = e;
                if (N === null) return N;
                const ve = Fr();
                if (P === "range") {
                    Array.isArray(N) || (N = []);
                    const K = o(N[0] || ve, M, fe ? V : Mr(V)),
                        Q = o(N[1] || ve, fe ? M : Gc(M));
                    return [K, Q]
                }
                return P === "multiple" ? Array.isArray(N) ? N.map(K => o(K)) : [o(ve)] : ((!N || Array.isArray(N)) && (N = ve), o(N))
            };
        let i;
        const l = H(),
            s = H({
                textFn: () => "",
                date: void 0
            }),
            a = H(r()),
            [c, u] = Ac(),
            d = Y(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
            h = Y(() => {
                const N = [],
                    P = new Date(e.minDate);
                P.setDate(1);
                do N.push(new Date(P)), P.setMonth(P.getMonth() + 1); while (Rr(P, e.maxDate) !== 1);
                return N
            }),
            y = Y(() => {
                if (a.value) {
                    if (e.type === "range") return !a.value[0] || !a.value[1];
                    if (e.type === "multiple") return !a.value.length
                }
                return !a.value
            }),
            b = () => a.value,
            C = () => {
                const N = Ro(l.value),
                    P = N + i,
                    M = h.value.map((Q, me) => c.value[me].getHeight()),
                    V = M.reduce((Q, me) => Q + me, 0);
                if (P > V && N > 0) return;
                let fe = 0,
                    ve;
                const K = [-1, -1];
                for (let Q = 0; Q < h.value.length; Q++) {
                    const me = c.value[Q];
                    fe <= P && fe + M[Q] >= N && (K[1] = Q, ve || (ve = me, K[0] = Q), c.value[Q].showed || (c.value[Q].showed = !0, t("monthShow", {
                        date: me.date,
                        title: me.getTitle()
                    }))), fe += M[Q]
                }
                h.value.forEach((Q, me) => {
                    const $e = me >= K[0] - 1 && me <= K[1] + 1;
                    c.value[me].setVisible($e)
                }), ve && (s.value = {
                    textFn: ve.getTitle,
                    date: ve.date
                })
            },
            v = N => {
                ht(() => {
                    h.value.some((P, M) => Rr(P, N) === 0 ? (l.value && c.value[M].scrollToDate(l.value, N), !0) : !1), C()
                })
            },
            x = () => {
                if (!(e.poppable && !e.show))
                    if (a.value) {
                        const N = e.type === "single" ? a.value : a.value[0];
                        Or(N) && v(N)
                    } else ht(C)
            },
            m = () => {
                e.poppable && !e.show || (ht(() => {
                    i = Math.floor(We(l).height)
                }), x())
            },
            w = (N = r()) => {
                a.value = N, x()
            },
            S = N => {
                const {
                    maxRange: P,
                    rangePrompt: M,
                    showRangePrompt: V
                } = e;
                return P && Iv(N) > +P ? (V && $r(M || Bt("rangePrompt", P)), t("overRange"), !1) : !0
            },
            T = () => {
                var N;
                return t("confirm", (N = a.value) != null ? N : Us(a.value))
            },
            O = (N, P) => {
                const M = V => {
                    a.value = V, t("select", Us(V))
                };
                if (P && e.type === "range" && !S(N)) {
                    M([N[0], xl(N[0], +e.maxRange - 1)]);
                    return
                }
                M(N), P && !e.showConfirm && T()
            },
            U = (N, P, M) => {
                var V;
                return (V = N.find(fe => rt(P, fe.date) === -1 && rt(fe.date, M) === -1)) == null ? void 0 : V.date
            },
            I = Y(() => c.value.reduce((N, P) => {
                var M, V;
                return N.push(...(V = (M = P.disabledDays) == null ? void 0 : M.value) != null ? V : []), N
            }, [])),
            L = N => {
                if (e.readonly || !N.date) return;
                const {
                    date: P
                } = N, {
                    type: M
                } = e;
                if (M === "range") {
                    if (!a.value) {
                        O([P]);
                        return
                    }
                    const [V, fe] = a.value;
                    if (V && !fe) {
                        const ve = rt(P, V);
                        if (ve === 1) {
                            const K = U(I.value, V, P);
                            if (K) {
                                const Q = Mr(K);
                                rt(V, Q) === -1 ? O([V, Q]) : O([P])
                            } else O([V, P], !0)
                        } else ve === -1 ? O([P]) : e.allowSameDay && O([P, P], !0)
                    } else O([P])
                } else if (M === "multiple") {
                    if (!a.value) {
                        O([P]);
                        return
                    }
                    const V = a.value,
                        fe = V.findIndex(ve => rt(ve, P) === 0);
                    if (fe !== -1) {
                        const [ve] = V.splice(fe, 1);
                        t("unselect", yi(ve))
                    } else e.maxRange && V.length >= +e.maxRange ? $r(e.rangePrompt || Bt("rangePrompt", e.maxRange)) : O([...V, P])
                } else O(P, !0)
            },
            k = N => t("update:show", N),
            _ = (N, P) => {
                const M = P !== 0 || !e.showSubtitle;
                return f(Rv, Be({
                    ref: u(P),
                    date: N,
                    currentDate: a.value,
                    showMonthTitle: M,
                    firstDayOfWeek: d.value
                }, Re(e, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
                    onClick: L,
                    onClickDisabledDate: V => t("clickDisabledDate", V)
                }), Re(n, ["top-info", "bottom-info", "month-title"]))
            },
            E = () => {
                if (n.footer) return n.footer();
                if (e.showConfirm) {
                    const N = n["confirm-text"],
                        P = y.value,
                        M = P ? e.confirmDisabledText : e.confirmText;
                    return f(mi, {
                        round: !0,
                        block: !0,
                        type: "primary",
                        color: e.color,
                        class: Ve("confirm"),
                        disabled: P,
                        nativeType: "button",
                        onClick: T
                    }, {
                        default: () => [N ? N({
                            disabled: P
                        }) : M || Bt("confirm")]
                    })
                }
            },
            B = () => f("div", {
                class: [Ve("footer"), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [E()]),
            ie = () => {
                const N = s.value.textFn();
                return f("div", {
                    class: Ve()
                }, [f(Fv, {
                    date: s.value.date,
                    title: e.title,
                    subtitle: N,
                    showTitle: e.showTitle,
                    showSubtitle: e.showSubtitle,
                    firstDayOfWeek: d.value,
                    onClickSubtitle: P => t("clickSubtitle", P)
                }, Re(n, ["title", "subtitle"])), f("div", {
                    ref: l,
                    class: Ve("body"),
                    onScroll: C
                }, [h.value.map(_)]), B()])
            };
        return ee(() => e.show, m), ee(() => [e.type, e.minDate, e.maxDate], () => w(r(a.value))), ee(() => e.defaultDate, (N = null) => {
            a.value = N, x()
        }), Fe({
            reset: w,
            scrollToDate: v,
            getSelectedDate: b
        }), Jn(m), () => e.poppable ? f(Fo, {
            show: e.show,
            class: Ve("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            "onUpdate:show": k
        }, {
            default: ie
        }) : ie()
    }
});
const Gb = ge(Vv),
    [Nv, An] = se("image"),
    zv = {
        src: String,
        alt: String,
        fit: String,
        position: String,
        round: Boolean,
        block: Boolean,
        width: J,
        height: J,
        radius: J,
        lazyLoad: Boolean,
        iconSize: J,
        showError: Z,
        errorIcon: ue("photo-fail"),
        iconPrefix: String,
        showLoading: Z,
        loadingIcon: ue("photo"),
        crossorigin: String,
        referrerpolicy: String
    };
var Hv = oe({
    name: Nv,
    props: zv,
    emits: ["load", "error"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(!1),
            r = H(!0),
            i = H(),
            {
                $Lazyload: l
            } = gt().proxy,
            s = Y(() => {
                const v = {
                    width: _e(e.width),
                    height: _e(e.height)
                };
                return Pe(e.radius) && (v.overflow = "hidden", v.borderRadius = _e(e.radius)), v
            });
        ee(() => e.src, () => {
            o.value = !1, r.value = !0
        });
        const a = v => {
                r.value && (r.value = !1, t("load", v))
            },
            c = () => {
                const v = new Event("load");
                Object.defineProperty(v, "target", {
                    value: i.value,
                    enumerable: !0
                }), a(v)
            },
            u = v => {
                o.value = !0, r.value = !1, t("error", v)
            },
            d = (v, x, m) => m ? m() : f(Me, {
                name: v,
                size: e.iconSize,
                class: x,
                classPrefix: e.iconPrefix
            }, null),
            h = () => {
                if (r.value && e.showLoading) return f("div", {
                    class: An("loading")
                }, [d(e.loadingIcon, An("loading-icon"), n.loading)]);
                if (o.value && e.showError) return f("div", {
                    class: An("error")
                }, [d(e.errorIcon, An("error-icon"), n.error)])
            },
            y = () => {
                if (o.value || !e.src) return;
                const v = {
                    alt: e.alt,
                    class: An("img"),
                    style: {
                        objectFit: e.fit,
                        objectPosition: e.position
                    },
                    crossorigin: e.crossorigin,
                    referrerpolicy: e.referrerpolicy
                };
                return e.lazyLoad ? $t(f("img", Be({
                    ref: i
                }, v), null), [
                    [af("lazy"), e.src]
                ]) : f("img", Be({
                    ref: i,
                    src: e.src,
                    onLoad: a,
                    onError: u
                }, v), null)
            },
            b = ({
                el: v
            }) => {
                const x = () => {
                    v === i.value && r.value && c()
                };
                i.value ? x() : Te(x)
            },
            C = ({
                el: v
            }) => {
                v === i.value && !o.value && u()
            };
        return l && Et && (l.$on("loaded", b), l.$on("error", C), wt(() => {
            l.$off("loaded", b), l.$off("error", C)
        })), Ge(() => {
            Te(() => {
                var v;
                (v = i.value) != null && v.complete && !e.lazyLoad && c()
            })
        }), () => {
            var v;
            return f("div", {
                class: An({
                    round: e.round,
                    block: e.block
                }),
                style: s.value
            }, [y(), h(), (v = n.default) == null ? void 0 : v.call(n)])
        }
    }
});
const Xc = ge(Hv),
    [jv, Xb] = se("checkbox-group"),
    Uv = Symbol(jv),
    [Wv, Kv] = se("checkbox"),
    Yv = we({}, wl, {
        shape: String,
        bindGroup: Z,
        indeterminate: {
            type: Boolean,
            default: null
        }
    });
var qv = oe({
    name: Wv,
    props: Yv,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = un(Uv), r = s => {
            const {
                name: a
            } = e, {
                max: c,
                modelValue: u
            } = o.props, d = u.slice();
            if (s) !(c && d.length >= +c) && !d.includes(a) && (d.push(a), e.bindGroup && o.updateValue(d));
            else {
                const h = d.indexOf(a);
                h !== -1 && (d.splice(h, 1), e.bindGroup && o.updateValue(d))
            }
        }, i = Y(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), l = (s = !i.value) => {
            o && e.bindGroup ? r(s) : t("update:modelValue", s), e.indeterminate !== null && t("change", s)
        };
        return ee(() => e.modelValue, s => {
            e.indeterminate === null && t("change", s)
        }), Fe({
            toggle: l,
            props: e,
            checked: i
        }), Mi(() => e.modelValue), () => f(qc, Be({
            bem: Kv,
            role: "checkbox",
            parent: o,
            checked: i.value,
            onToggle: l
        }, e), Re(n, ["default", "icon"]))
    }
});
const Zb = ge(qv),
    Jb = ge($h);

function Gv(e, t) {
    const {
        days: n
    } = t;
    let {
        hours: o,
        minutes: r,
        seconds: i,
        milliseconds: l
    } = t;
    if (e.includes("DD") ? e = e.replace("DD", oo(n)) : o += n * 24, e.includes("HH") ? e = e.replace("HH", oo(o)) : r += o * 60, e.includes("mm") ? e = e.replace("mm", oo(r)) : i += r * 60, e.includes("ss") ? e = e.replace("ss", oo(i)) : l += i * 1e3, e.includes("S")) {
        const s = oo(l, 3);
        e.includes("SSS") ? e = e.replace("SSS", s) : e.includes("SS") ? e = e.replace("SS", s.slice(0, 2)) : e = e.replace("S", s.charAt(0))
    }
    return e
}
const [Xv, Zv] = se("count-down"), Jv = {
    time: Se(0),
    format: ue("HH:mm:ss"),
    autoStart: Z,
    millisecond: Boolean
};
var Qv = oe({
    name: Xv,
    props: Jv,
    emits: ["change", "finish"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            start: o,
            pause: r,
            reset: i,
            current: l
        } = Yd({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: c => t("change", c),
            onFinish: () => t("finish")
        }), s = Y(() => Gv(e.format, l.value)), a = () => {
            i(+e.time), e.autoStart && o()
        };
        return ee(() => e.time, a, {
            immediate: !0
        }), Fe({
            start: o,
            pause: r,
            reset: a
        }), () => f("div", {
            role: "timer",
            class: Zv()
        }, [n.default ? n.default(l.value) : s.value])
    }
});
const Qb = ge(Qv),
    [em, Jo] = se("empty"),
    tm = {
        image: ue("default"),
        imageSize: [Number, String, Array],
        description: String
    };
var nm = oe({
    name: em,
    props: tm,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                const x = t.description ? t.description() : e.description;
                if (x) return f("p", {
                    class: Jo("description")
                }, [x])
            },
            o = () => {
                if (t.default) return f("div", {
                    class: Jo("bottom")
                }, [t.default()])
            },
            r = Ni(),
            i = x => `${r}-${x}`,
            l = x => `url(#${i(x)})`,
            s = (x, m, w) => f("stop", {
                "stop-color": x,
                offset: `${m}%`,
                "stop-opacity": w
            }, null),
            a = (x, m) => [s(x, 0), s(m, 100)],
            c = x => [f("defs", null, [f("radialGradient", {
                id: i(x),
                cx: "50%",
                cy: "54%",
                fx: "50%",
                fy: "54%",
                r: "297%",
                gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)"
            }, [s("#EBEDF0", 0), s("#F2F3F5", 100, .3)])]), f("ellipse", {
                fill: l(x),
                opacity: ".8",
                cx: "80",
                cy: "140",
                rx: "46",
                ry: "8"
            }, null)],
            u = () => [f("defs", null, [f("linearGradient", {
                id: i("a"),
                x1: "64%",
                y1: "100%",
                x2: "64%"
            }, [s("#FFF", 0, .5), s("#F2F3F5", 100)])]), f("g", {
                opacity: ".8"
            }, [f("path", {
                d: "M36 131V53H16v20H2v58h34z",
                fill: l("a")
            }, null), f("path", {
                d: "M123 15h22v14h9v77h-31V15z",
                fill: l("a")
            }, null)])],
            d = () => [f("defs", null, [f("linearGradient", {
                id: i("b"),
                x1: "64%",
                y1: "97%",
                x2: "64%",
                y2: "0%"
            }, [s("#F2F3F5", 0, .3), s("#F2F3F5", 100)])]), f("g", {
                opacity: ".8"
            }, [f("path", {
                d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
                fill: l("b")
            }, null), f("path", {
                d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
                fill: l("b")
            }, null)])],
            h = () => f("svg", {
                viewBox: "0 0 160 160"
            }, [f("defs", null, [f("linearGradient", {
                id: i(1),
                x1: "64%",
                y1: "100%",
                x2: "64%"
            }, [s("#FFF", 0, .5), s("#F2F3F5", 100)]), f("linearGradient", {
                id: i(2),
                x1: "50%",
                x2: "50%",
                y2: "84%"
            }, [s("#EBEDF0", 0), s("#DCDEE0", 100, 0)]), f("linearGradient", {
                id: i(3),
                x1: "100%",
                x2: "100%",
                y2: "100%"
            }, [a("#EAEDF0", "#DCDEE0")]), f("radialGradient", {
                id: i(4),
                cx: "50%",
                cy: "0%",
                fx: "50%",
                fy: "0%",
                r: "100%",
                gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
            }, [s("#EBEDF0", 0), s("#FFF", 100, 0)])]), f("g", {
                fill: "none"
            }, [u(), f("path", {
                fill: l(4),
                d: "M0 139h160v21H0z"
            }, null), f("path", {
                d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
                fill: l(2)
            }, null), f("g", {
                opacity: ".6",
                "stroke-linecap": "round",
                "stroke-width": "7"
            }, [f("path", {
                d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
                stroke: l(3)
            }, null), f("path", {
                d: "M53 36a34 34 0 0 0 0 48",
                stroke: l(3)
            }, null), f("path", {
                d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
                stroke: l(3)
            }, null), f("path", {
                d: "M106 84a34 34 0 0 0 0-48",
                stroke: l(3)
            }, null)]), f("g", {
                transform: "translate(31 105)"
            }, [f("rect", {
                fill: "#EBEDF0",
                width: "98",
                height: "34",
                rx: "2"
            }, null), f("rect", {
                fill: "#FFF",
                x: "9",
                y: "8",
                width: "80",
                height: "18",
                rx: "1.1"
            }, null), f("rect", {
                fill: "#EBEDF0",
                x: "15",
                y: "12",
                width: "18",
                height: "6",
                rx: "1.1"
            }, null)])])]),
            y = () => f("svg", {
                viewBox: "0 0 160 160"
            }, [f("defs", null, [f("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: i(5)
            }, [a("#F2F3F5", "#DCDEE0")]), f("linearGradient", {
                x1: "95%",
                y1: "48%",
                x2: "5.5%",
                y2: "51%",
                id: i(6)
            }, [a("#EAEDF1", "#DCDEE0")]), f("linearGradient", {
                y1: "45%",
                x2: "100%",
                y2: "54%",
                id: i(7)
            }, [a("#EAEDF1", "#DCDEE0")])]), u(), d(), f("g", {
                transform: "translate(36 50)",
                fill: "none"
            }, [f("g", {
                transform: "translate(8)"
            }, [f("rect", {
                fill: "#EBEDF0",
                opacity: ".6",
                x: "38",
                y: "13",
                width: "36",
                height: "53",
                rx: "2"
            }, null), f("rect", {
                fill: l(5),
                width: "64",
                height: "66",
                rx: "2"
            }, null), f("rect", {
                fill: "#FFF",
                x: "6",
                y: "6",
                width: "52",
                height: "55",
                rx: "1"
            }, null), f("g", {
                transform: "translate(15 17)",
                fill: l(6)
            }, [f("rect", {
                width: "34",
                height: "6",
                rx: "1"
            }, null), f("path", {
                d: "M0 14h34v6H0z"
            }, null), f("rect", {
                y: "28",
                width: "34",
                height: "6",
                rx: "1"
            }, null)])]), f("rect", {
                fill: l(7),
                y: "61",
                width: "88",
                height: "28",
                rx: "1"
            }, null), f("rect", {
                fill: "#F7F8FA",
                x: "29",
                y: "72",
                width: "30",
                height: "6",
                rx: "1"
            }, null)])]),
            b = () => f("svg", {
                viewBox: "0 0 160 160"
            }, [f("defs", null, [f("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: i(8)
            }, [a("#EAEDF1", "#DCDEE0")])]), u(), d(), c("c"), f("path", {
                d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
                fill: l(8)
            }, null)]),
            C = () => f("svg", {
                viewBox: "0 0 160 160"
            }, [f("defs", null, [f("linearGradient", {
                x1: "50%",
                y1: "100%",
                x2: "50%",
                id: i(9)
            }, [a("#EEE", "#D8D8D8")]), f("linearGradient", {
                x1: "100%",
                y1: "50%",
                y2: "50%",
                id: i(10)
            }, [a("#F2F3F5", "#DCDEE0")]), f("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: i(11)
            }, [a("#F2F3F5", "#DCDEE0")]), f("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: i(12)
            }, [a("#FFF", "#F7F8FA")])]), u(), d(), c("d"), f("g", {
                transform: "rotate(-45 113 -4)",
                fill: "none"
            }, [f("rect", {
                fill: l(9),
                x: "24",
                y: "52.8",
                width: "5.8",
                height: "19",
                rx: "1"
            }, null), f("rect", {
                fill: l(10),
                x: "22.1",
                y: "67.3",
                width: "9.9",
                height: "28",
                rx: "1"
            }, null), f("circle", {
                stroke: l(11),
                "stroke-width": "8",
                cx: "27",
                cy: "27",
                r: "27"
            }, null), f("circle", {
                fill: l(12),
                cx: "27",
                cy: "27",
                r: "16"
            }, null), f("path", {
                d: "M37 7c-8 0-15 5-16 12",
                stroke: l(11),
                "stroke-width": "3",
                opacity: ".5",
                "stroke-linecap": "round",
                transform: "rotate(45 29 13)"
            }, null)])]),
            v = () => {
                var x;
                if (t.image) return t.image();
                const m = {
                    error: b,
                    search: C,
                    network: h,
                    default: y
                };
                return ((x = m[e.image]) == null ? void 0 : x.call(m)) || f("img", {
                    src: e.image
                }, null)
            };
        return () => f("div", {
            class: Jo()
        }, [f("div", {
            class: Jo("image"),
            style: Qn(e.imageSize)
        }, [v()]), n(), o()])
    }
});
const ep = ge(nm),
    [om, mt, Qo] = se("dialog"),
    im = we({}, yl, {
        title: String,
        theme: String,
        width: J,
        message: [String, Function],
        callback: Function,
        allowHtml: Boolean,
        className: ze,
        transition: ue("van-dialog-bounce"),
        messageAlign: String,
        closeOnPopstate: Z,
        showCancelButton: Boolean,
        cancelButtonText: String,
        cancelButtonColor: String,
        cancelButtonDisabled: Boolean,
        confirmButtonText: String,
        confirmButtonColor: String,
        confirmButtonDisabled: Boolean,
        showConfirmButton: Z,
        closeOnClickOverlay: Boolean
    }),
    rm = [...Jh, "transition", "closeOnPopstate"];
var Zc = oe({
    name: om,
    props: im,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = Ke({
                confirm: !1,
                cancel: !1
            }),
            i = x => t("update:show", x),
            l = x => {
                var m;
                i(!1), (m = e.callback) == null || m.call(e, x)
            },
            s = x => () => {
                e.show && (t(x), e.beforeClose ? (r[x] = !0, Mo(e.beforeClose, {
                    args: [x],
                    done() {
                        l(x), r[x] = !1
                    },
                    canceled() {
                        r[x] = !1
                    }
                })) : l(x))
            },
            a = s("cancel"),
            c = s("confirm"),
            u = $d(x => {
                var m, w;
                if (x.target !== ((w = (m = o.value) == null ? void 0 : m.popupRef) == null ? void 0 : w.value)) return;
                ({
                    Enter: e.showConfirmButton ? c : Er,
                    Escape: e.showCancelButton ? a : Er
                })[x.key](), t("keydown", x)
            }, ["enter", "esc"]),
            d = () => {
                const x = n.title ? n.title() : e.title;
                if (x) return f("div", {
                    class: mt("header", {
                        isolated: !e.message && !n.default
                    })
                }, [x])
            },
            h = x => {
                const {
                    message: m,
                    allowHtml: w,
                    messageAlign: S
                } = e, T = mt("message", {
                    "has-title": x,
                    [S]: S
                }), O = Kn(m) ? m() : m;
                return w && typeof O == "string" ? f("div", {
                    class: T,
                    innerHTML: O
                }, null) : f("div", {
                    class: T
                }, [O])
            },
            y = () => {
                if (n.default) return f("div", {
                    class: mt("content")
                }, [n.default()]);
                const {
                    title: x,
                    message: m,
                    allowHtml: w
                } = e;
                if (m) {
                    const S = !!(x || n.title);
                    return f("div", {
                        key: w ? 1 : 0,
                        class: mt("content", {
                            isolated: !S
                        })
                    }, [h(S)])
                }
            },
            b = () => f("div", {
                class: [gh, mt("footer")]
            }, [e.showCancelButton && f(mi, {
                size: "large",
                text: e.cancelButtonText || Qo("cancel"),
                class: mt("cancel"),
                style: {
                    color: e.cancelButtonColor
                },
                loading: r.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: a
            }, null), e.showConfirmButton && f(mi, {
                size: "large",
                text: e.confirmButtonText || Qo("confirm"),
                class: [mt("confirm"), {
                    [yc]: e.showCancelButton
                }],
                style: {
                    color: e.confirmButtonColor
                },
                loading: r.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: c
            }, null)]),
            C = () => f(_h, {
                class: mt("footer")
            }, {
                default: () => [e.showCancelButton && f(As, {
                    type: "warning",
                    text: e.cancelButtonText || Qo("cancel"),
                    class: mt("cancel"),
                    color: e.cancelButtonColor,
                    loading: r.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: a
                }, null), e.showConfirmButton && f(As, {
                    type: "danger",
                    text: e.confirmButtonText || Qo("confirm"),
                    class: mt("confirm"),
                    color: e.confirmButtonColor,
                    loading: r.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: c
                }, null)]
            }),
            v = () => n.footer ? n.footer() : e.theme === "round-button" ? C() : b();
        return () => {
            const {
                width: x,
                title: m,
                theme: w,
                message: S,
                className: T
            } = e;
            return f(Fo, Be({
                ref: o,
                role: "dialog",
                class: [mt([w]), T],
                style: {
                    width: _e(x)
                },
                tabindex: 0,
                "aria-labelledby": m || S,
                onKeydown: u,
                "onUpdate:show": i
            }, Re(e, rm)), {
                default: () => [d(), y(), v()]
            })
        }
    }
});
let Lr;
const lm = {
    title: "",
    width: "",
    theme: null,
    message: "",
    overlay: !0,
    callback: null,
    teleport: "body",
    className: "",
    allowHtml: !1,
    lockScroll: !0,
    transition: void 0,
    beforeClose: null,
    overlayClass: "",
    overlayStyle: void 0,
    messageAlign: "",
    cancelButtonText: "",
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: "",
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1
};
let sm = we({}, lm);

function am() {
    ({
        instance: Lr
    } = pl({
        setup() {
            const {
                state: t,
                toggle: n
            } = bl();
            return () => f(Zc, Be(t, {
                "onUpdate:show": n
            }), null)
        }
    }))
}

function tp(e) {
    return Et ? new Promise((t, n) => {
        Lr || am(), Lr.open(we({}, sm, e, {
            callback: o => {
                (o === "confirm" ? t : n)(o)
            }
        }))
    }) : Promise.resolve(void 0)
}
ge(Zc);
const cm = {
        gap: ul(24),
        icon: String,
        axis: ue("y"),
        magnetic: String,
        offset: {
            type: Object,
            default: () => ({
                x: -1,
                y: -1
            })
        },
        teleport: {
            type: [String, Object],
            default: "body"
        }
    },
    [um, Ws] = se("floating-bubble");
var fm = oe({
    name: um,
    inheritAttrs: !1,
    props: cm,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {
        slots: t,
        emit: n,
        attrs: o
    }) {
        const r = H(),
            i = H({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }),
            l = Y(() => ({
                top: e.gap,
                right: At.value - i.value.width - e.gap,
                bottom: en.value - i.value.height - e.gap,
                left: e.gap
            })),
            s = H(!1);
        let a = !1;
        const c = Y(() => {
                const w = {},
                    S = _e(i.value.x),
                    T = _e(i.value.y);
                return w.transform = `translate3d(${S}, ${T}, 0)`, (s.value || !a) && (w.transition = "none"), w
            }),
            u = () => {
                if (!m.value) return;
                const {
                    width: w,
                    height: S
                } = We(r.value), {
                    offset: T
                } = e;
                i.value = {
                    x: T.x > -1 ? T.x : At.value - w - e.gap,
                    y: T.y > -1 ? T.y : en.value - S - e.gap,
                    width: w,
                    height: S
                }
            },
            d = On();
        let h = 0,
            y = 0;
        const b = w => {
            d.start(w), s.value = !0, h = i.value.x, y = i.value.y
        };
        nt("touchmove", w => {
            if (w.preventDefault(), d.move(w), e.axis !== "lock" && !d.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let T = h + d.deltaX.value;
                    T < l.value.left && (T = l.value.left), T > l.value.right && (T = l.value.right), i.value.x = T
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let T = y + d.deltaY.value;
                    T < l.value.top && (T = l.value.top), T > l.value.bottom && (T = l.value.bottom), i.value.y = T
                }
                const S = Re(i.value, ["x", "y"]);
                n("update:offset", S)
            }
        }, {
            target: r
        });
        const v = () => {
                s.value = !1, Te(() => {
                    if (e.magnetic === "x") {
                        const w = ks([l.value.left, l.value.right], i.value.x);
                        i.value.x = w
                    }
                    if (e.magnetic === "y") {
                        const w = ks([l.value.top, l.value.bottom], i.value.y);
                        i.value.y = w
                    }
                    if (!d.isTap.value) {
                        const w = Re(i.value, ["x", "y"]);
                        n("update:offset", w), (h !== w.x || y !== w.y) && n("offsetChange", w)
                    }
                })
            },
            x = w => {
                d.isTap.value ? n("click", w) : w.stopPropagation()
            };
        Ge(() => {
            u(), Te(() => {
                a = !0
            })
        }), ee([At, en, () => e.gap, () => e.offset], u);
        const m = H(!0);
        return an(() => {
            m.value = !0
        }), Lt(() => {
            e.teleport && (m.value = !1)
        }), () => {
            const w = $t(f("div", Be({
                class: Ws(),
                ref: r,
                onTouchstartPassive: b,
                onTouchend: v,
                onTouchcancel: v,
                onClickCapture: x,
                style: c.value
            }, o), [t.default ? t.default() : f(Vh, {
                name: e.icon,
                class: Ws("icon")
            }, null)]), [
                [on, m.value]
            ]);
            return e.teleport ? f(sl, {
                to: e.teleport
            }, {
                default: () => [w]
            }) : w
        }
    }
});
const np = ge(fm),
    Ks = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
    dm = e => ({
        x: (e[0].clientX + e[1].clientX) / 2,
        y: (e[0].clientY + e[1].clientY) / 2
    }),
    cr = se("image-preview")[1],
    Ys = 2.6,
    hm = {
        src: String,
        show: Boolean,
        active: Number,
        minZoom: qe(J),
        maxZoom: qe(J),
        rootWidth: qe(Number),
        rootHeight: qe(Number),
        disableZoom: Boolean,
        doubleScale: Boolean,
        closeOnClickImage: Boolean,
        closeOnClickOverlay: Boolean
    };
var gm = oe({
    props: hm,
    emits: ["scale", "close", "longPress"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Ke({
                scale: 1,
                moveX: 0,
                moveY: 0,
                moving: !1,
                zooming: !1,
                initializing: !1,
                imageRatio: 0
            }),
            r = On(),
            i = H(),
            l = H(),
            s = H(!1),
            a = H(!1);
        let c = 0;
        const u = Y(() => {
                const {
                    scale: P,
                    moveX: M,
                    moveY: V,
                    moving: fe,
                    zooming: ve,
                    initializing: K
                } = o, Q = {
                    transitionDuration: ve || fe || K ? "0s" : ".3s"
                };
                return (P !== 1 || a.value) && (Q.transform = `matrix(${P}, 0, 0, ${P}, ${M}, ${V})`), Q
            }),
            d = Y(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: P,
                        rootHeight: M
                    } = e, V = s.value ? M / o.imageRatio : P;
                    return Math.max(0, (o.scale * V - P) / 2)
                }
                return 0
            }),
            h = Y(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: P,
                        rootHeight: M
                    } = e, V = s.value ? M : P * o.imageRatio;
                    return Math.max(0, (o.scale * V - M) / 2)
                }
                return 0
            }),
            y = (P, M) => {
                var V;
                if (P = it(P, +e.minZoom, +e.maxZoom + 1), P !== o.scale) {
                    const fe = P / o.scale;
                    if (o.scale = P, M) {
                        const ve = We((V = i.value) == null ? void 0 : V.$el),
                            K = {
                                x: ve.width * .5,
                                y: ve.height * .5
                            },
                            Q = o.moveX - (M.x - ve.left - K.x) * (fe - 1),
                            me = o.moveY - (M.y - ve.top - K.y) * (fe - 1);
                        o.moveX = it(Q, -d.value, d.value), o.moveY = it(me, -h.value, h.value)
                    } else o.moveX = 0, o.moveY = a.value ? c : 0;
                    t("scale", {
                        scale: P,
                        index: e.active
                    })
                }
            },
            b = () => {
                y(1)
            },
            C = () => {
                const P = o.scale > 1 ? 1 : 2;
                y(P, P === 2 || a.value ? {
                    x: r.startX.value,
                    y: r.startY.value
                } : void 0)
            };
        let v, x, m, w, S, T, O, U, I = !1;
        const L = P => {
                const {
                    touches: M
                } = P;
                if (v = M.length, v === 2 && e.disableZoom) return;
                const {
                    offsetX: V
                } = r;
                r.start(P), x = o.moveX, m = o.moveY, U = Date.now(), I = !1, o.moving = v === 1 && (o.scale !== 1 || a.value), o.zooming = v === 2 && !V.value, o.zooming && (w = o.scale, S = Ks(M))
            },
            k = P => {
                const {
                    touches: M
                } = P;
                if (r.move(P), o.moving) {
                    const {
                        deltaX: V,
                        deltaY: fe
                    } = r, ve = V.value + x, K = fe.value + m;
                    if ((ve > d.value || ve < -d.value) && !I && r.isHorizontal()) {
                        o.moving = !1;
                        return
                    }
                    I = !0, et(P, !0), o.moveX = it(ve, -d.value, d.value), o.moveY = it(K, -h.value, h.value)
                }
                if (o.zooming && (et(P, !0), M.length === 2)) {
                    const V = Ks(M),
                        fe = w * V / S;
                    T = dm(M), y(fe, T)
                }
            },
            _ = P => {
                var M;
                const V = (M = l.value) == null ? void 0 : M.$el,
                    fe = V.firstElementChild,
                    ve = P.target === V,
                    K = fe == null ? void 0 : fe.contains(P.target);
                !e.closeOnClickImage && K || !e.closeOnClickOverlay && ve || t("close")
            },
            E = P => {
                if (v > 1) return;
                const M = Date.now() - U,
                    V = 250;
                r.isTap.value && (M < V ? e.doubleScale ? O ? (clearTimeout(O), O = null, C()) : O = setTimeout(() => {
                    _(P), O = null
                }, V) : _(P) : M > wh && t("longPress"))
            },
            B = P => {
                let M = !1;
                if ((o.moving || o.zooming) && (M = !0, o.moving && x === o.moveX && m === o.moveY && (M = !1), !P.touches.length)) {
                    o.zooming && (o.moveX = it(o.moveX, -d.value, d.value), o.moveY = it(o.moveY, -h.value, h.value), o.zooming = !1), o.moving = !1, x = 0, m = 0, w = 1, o.scale < 1 && b();
                    const V = +e.maxZoom;
                    o.scale > V && y(V, T)
                }
                et(P, M), E(P), r.reset()
            },
            ie = () => {
                const {
                    rootWidth: P,
                    rootHeight: M
                } = e, V = M / P, {
                    imageRatio: fe
                } = o;
                s.value = o.imageRatio > V && fe < Ys, a.value = o.imageRatio > V && fe >= Ys, a.value && (c = (fe * P - M) / 2, o.moveY = c, o.initializing = !0, ht(() => {
                    o.initializing = !1
                })), b()
            },
            N = P => {
                const {
                    naturalWidth: M,
                    naturalHeight: V
                } = P.target;
                o.imageRatio = V / M, ie()
            };
        return ee(() => e.active, b), ee(() => e.show, P => {
            P || b()
        }), ee(() => [e.rootWidth, e.rootHeight], ie), nt("touchmove", k, {
            target: Y(() => {
                var P;
                return (P = l.value) == null ? void 0 : P.$el
            })
        }), Fe({
            resetScale: b
        }), () => {
            const P = {
                loading: () => f(Nt, {
                    type: "spinner"
                }, null)
            };
            return f(Nc, {
                ref: l,
                class: cr("swipe-item"),
                onTouchstartPassive: L,
                onTouchend: B,
                onTouchcancel: B
            }, {
                default: () => [n.image ? f("div", {
                    class: cr("image-wrap")
                }, [n.image({
                    src: e.src
                })]) : f(Xc, {
                    ref: i,
                    src: e.src,
                    fit: "contain",
                    class: cr("image", {
                        vertical: s.value
                    }),
                    style: u.value,
                    onLoad: N
                }, P)]
            })
        }
    }
});
const [vm, Bn] = se("image-preview"), mm = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"], ym = {
    show: Boolean,
    loop: Z,
    images: ln(),
    minZoom: Se(1 / 3),
    maxZoom: Se(3),
    overlay: Z,
    closeable: Boolean,
    showIndex: Z,
    className: ze,
    closeIcon: ue("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: Z,
    overlayClass: ze,
    overlayStyle: Object,
    swipeDuration: Se(300),
    startPosition: Se(0),
    showIndicators: Boolean,
    closeOnPopstate: Z,
    closeOnClickImage: Z,
    closeOnClickOverlay: Z,
    closeIconPosition: ue("top-right"),
    teleport: [String, Object]
};
var Jc = oe({
    name: vm,
    props: ym,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = H(),
            i = Ke({
                active: 0,
                rootWidth: 0,
                rootHeight: 0,
                disableZoom: !1
            }),
            l = () => {
                if (o.value) {
                    const w = We(o.value.$el);
                    i.rootWidth = w.width, i.rootHeight = w.height, o.value.resize()
                }
            },
            s = w => t("scale", w),
            a = w => t("update:show", w),
            c = () => {
                Mo(e.beforeClose, {
                    args: [i.active],
                    done: () => a(!1)
                })
            },
            u = w => {
                w !== i.active && (i.active = w, t("change", w))
            },
            d = () => {
                if (e.showIndex) return f("div", {
                    class: Bn("index")
                }, [n.index ? n.index({
                    index: i.active
                }) : `${i.active+1} / ${e.images.length}`])
            },
            h = () => {
                if (n.cover) return f("div", {
                    class: Bn("cover")
                }, [n.cover()])
            },
            y = () => {
                i.disableZoom = !0
            },
            b = () => {
                i.disableZoom = !1
            },
            C = () => f(Mc, {
                ref: o,
                lazyRender: !0,
                loop: e.loop,
                class: Bn("swipe"),
                duration: e.swipeDuration,
                initialSwipe: e.startPosition,
                showIndicators: e.showIndicators,
                indicatorColor: "white",
                onChange: u,
                onDragEnd: b,
                onDragStart: y
            }, {
                default: () => [e.images.map((w, S) => f(gm, {
                    ref: T => {
                        S === i.active && (r.value = T)
                    },
                    src: w,
                    show: e.show,
                    active: i.active,
                    maxZoom: e.maxZoom,
                    minZoom: e.minZoom,
                    rootWidth: i.rootWidth,
                    rootHeight: i.rootHeight,
                    disableZoom: i.disableZoom,
                    doubleScale: e.doubleScale,
                    closeOnClickImage: e.closeOnClickImage,
                    closeOnClickOverlay: e.closeOnClickOverlay,
                    onScale: s,
                    onClose: c,
                    onLongPress: () => t("longPress", {
                        index: S
                    })
                }, {
                    image: n.image
                }))]
            }),
            v = () => {
                if (e.closeable) return f(Me, {
                    role: "button",
                    name: e.closeIcon,
                    class: [Bn("close-icon", e.closeIconPosition), To],
                    onClick: c
                }, null)
            },
            x = () => t("closed"),
            m = (w, S) => {
                var T;
                return (T = o.value) == null ? void 0 : T.swipeTo(w, S)
            };
        return Fe({
            resetScale: () => {
                var w;
                (w = r.value) == null || w.resetScale()
            },
            swipeTo: m
        }), Ge(l), ee([At, en], l), ee(() => e.startPosition, w => u(+w)), ee(() => e.show, w => {
            const {
                images: S,
                startPosition: T
            } = e;
            w ? (u(+T), Te(() => {
                l(), m(+T, {
                    immediate: !0
                })
            })) : t("close", {
                index: i.active,
                url: S[i.active]
            })
        }), () => f(Fo, Be({
            class: [Bn(), e.className],
            overlayClass: [Bn("overlay"), e.overlayClass],
            onClosed: x,
            "onUpdate:show": a
        }, Re(e, mm)), {
            default: () => [v(), C(), d(), h()]
        })
    }
});
let ri;
const bm = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};

function pm() {
    ({
        instance: ri
    } = pl({
        setup() {
            const {
                state: e,
                toggle: t
            } = bl(), n = () => {
                e.images = []
            };
            return () => f(Jc, Be(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const wm = (e, t = 0) => {
    if (Et) return ri || pm(), e = Array.isArray(e) ? {
        images: e,
        startPosition: t
    } : e, ri.open(we({}, bm, e)), ri
};
ge(Jc);
const [xm, $n, Sm] = se("list"), Cm = {
    error: Boolean,
    offset: Se(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: ue("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: Z
};
var _m = oe({
    name: xm,
    props: Cm,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(e.loading),
            r = H(),
            i = H(),
            l = Rg(),
            s = Ri(r),
            a = Y(() => e.scroller || s.value),
            c = () => {
                Te(() => {
                    if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
                    const {
                        direction: b
                    } = e, C = +e.offset, v = We(a);
                    if (!v.height || Yn(r)) return;
                    let x = !1;
                    const m = We(i);
                    b === "up" ? x = v.top - m.top <= C : x = m.bottom - v.bottom <= C, x && (o.value = !0, t("update:loading", !0), t("load"))
                })
            },
            u = () => {
                if (e.finished) {
                    const b = n.finished ? n.finished() : e.finishedText;
                    if (b) return f("div", {
                        class: $n("finished-text")
                    }, [b])
                }
            },
            d = () => {
                t("update:error", !1), c()
            },
            h = () => {
                if (e.error) {
                    const b = n.error ? n.error() : e.errorText;
                    if (b) return f("div", {
                        role: "button",
                        class: $n("error-text"),
                        tabindex: 0,
                        onClick: d
                    }, [b])
                }
            },
            y = () => {
                if (o.value && !e.finished && !e.disabled) return f("div", {
                    class: $n("loading")
                }, [n.loading ? n.loading() : f(Nt, {
                    class: $n("loading-icon")
                }, {
                    default: () => [e.loadingText || Sm("loading")]
                })])
            };
        return ee(() => [e.loading, e.finished, e.error], c), l && ee(l, b => {
            b && c()
        }), ol(() => {
            o.value = e.loading
        }), Ge(() => {
            e.immediateCheck && c()
        }), Fe({
            check: c
        }), nt("scroll", c, {
            target: a,
            passive: !0
        }), () => {
            var b;
            const C = (b = n.default) == null ? void 0 : b.call(n),
                v = f("div", {
                    ref: i,
                    class: $n("placeholder")
                }, null);
            return f("div", {
                ref: r,
                role: "feed",
                class: $n(),
                "aria-busy": o.value
            }, [e.direction === "down" ? C : v, y(), u(), h(), e.direction === "up" ? C : v])
        }
    }
});
const op = ge(_m),
    [Tm, lo] = se("notice-bar"),
    Em = {
        text: String,
        mode: String,
        color: String,
        delay: Se(1),
        speed: Se(60),
        leftIcon: String,
        wrapable: Boolean,
        background: String,
        scrollable: {
            type: Boolean,
            default: null
        }
    };
var Om = oe({
    name: Tm,
    props: Em,
    emits: ["close", "replay"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o = 0,
            r = 0,
            i;
        const l = H(),
            s = H(),
            a = Ke({
                show: !0,
                offset: 0,
                duration: 0
            }),
            c = () => {
                if (n["left-icon"]) return n["left-icon"]();
                if (e.leftIcon) return f(Me, {
                    class: lo("left-icon"),
                    name: e.leftIcon
                }, null)
            },
            u = () => {
                if (e.mode === "closeable") return "cross";
                if (e.mode === "link") return "arrow"
            },
            d = v => {
                e.mode === "closeable" && (a.show = !1, t("close", v))
            },
            h = () => {
                if (n["right-icon"]) return n["right-icon"]();
                const v = u();
                if (v) return f(Me, {
                    name: v,
                    class: lo("right-icon"),
                    onClick: d
                }, null)
            },
            y = () => {
                a.offset = o, a.duration = 0, ht(() => {
                    pn(() => {
                        a.offset = -r, a.duration = (r + o) / +e.speed, t("replay")
                    })
                })
            },
            b = () => {
                const v = e.scrollable === !1 && !e.wrapable,
                    x = {
                        transform: a.offset ? `translateX(${a.offset}px)` : "",
                        transitionDuration: `${a.duration}s`
                    };
                return f("div", {
                    ref: l,
                    role: "marquee",
                    class: lo("wrap")
                }, [f("div", {
                    ref: s,
                    style: x,
                    class: [lo("content"), {
                        "van-ellipsis": v
                    }],
                    onTransitionend: y
                }, [n.default ? n.default() : e.text])])
            },
            C = () => {
                const {
                    delay: v,
                    speed: x,
                    scrollable: m
                } = e, w = Pe(v) ? +v * 1e3 : 0;
                o = 0, r = 0, a.offset = 0, a.duration = 0, clearTimeout(i), i = setTimeout(() => {
                    if (!l.value || !s.value || m === !1) return;
                    const S = We(l).width,
                        T = We(s).width;
                    (m || T > S) && pn(() => {
                        o = S, r = T, a.offset = -r, a.duration = r / +x
                    })
                }, w)
            };
        return Fi(C), Jn(C), nt("pageshow", C), Fe({
            reset: C
        }), ee(() => [e.text, e.scrollable], C), () => {
            const {
                color: v,
                wrapable: x,
                background: m
            } = e;
            return $t(f("div", {
                role: "alert",
                class: lo({
                    wrapable: x
                }),
                style: {
                    color: v,
                    background: m
                }
            }, [c(), b(), h()]), [
                [on, a.show]
            ])
        }
    }
});
const ip = ge(Om),
    [km, bo] = se("key"),
    Im = f("svg", {
        class: bo("collapse-icon"),
        viewBox: "0 0 30 24"
    }, [f("path", {
        d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
        fill: "currentColor"
    }, null)]),
    Dm = f("svg", {
        class: bo("delete-icon"),
        viewBox: "0 0 32 22"
    }, [f("path", {
        d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
        fill: "currentColor"
    }, null)]);
var ur = oe({
    name: km,
    props: {
        type: String,
        text: J,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(!1),
            r = On(),
            i = c => {
                r.start(c), o.value = !0
            },
            l = c => {
                r.move(c), r.direction.value && (o.value = !1)
            },
            s = c => {
                o.value && (n.default || et(c), o.value = !1, t("press", e.text, e.type))
            },
            a = () => {
                if (e.loading) return f(Nt, {
                    class: bo("loading-icon")
                }, null);
                const c = n.default ? n.default() : e.text;
                switch (e.type) {
                    case "delete":
                        return c || Dm;
                    case "extra":
                        return c || Im;
                    default:
                        return c
                }
            };
        return () => f("div", {
            class: bo("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: i,
            onTouchmovePassive: l,
            onTouchend: s,
            onTouchcancel: s
        }, [f("div", {
            role: "button",
            tabindex: 0,
            class: bo([e.color, {
                large: e.large,
                active: o.value,
                delete: e.type === "delete"
            }])
        }, [a()])])
    }
});
const [Pm, Ut] = se("number-keyboard"), Am = {
    show: Boolean,
    title: String,
    theme: ue("default"),
    zIndex: J,
    teleport: [String, Object],
    maxlength: Se(1 / 0),
    modelValue: ue(""),
    transition: Z,
    blurOnClose: Z,
    showDeleteKey: Z,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: Z,
    safeAreaInsetBottom: Z,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};

function Bm(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1)),
            o = e[t];
        e[t] = e[n], e[n] = o
    }
    return e
}
var $m = oe({
    name: Pm,
    inheritAttrs: !1,
    props: Am,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        const r = H(),
            i = () => {
                const v = Array(9).fill("").map((x, m) => ({
                    text: m + 1
                }));
                return e.randomKeyOrder && Bm(v), v
            },
            l = () => [...i(), {
                text: e.extraKey,
                type: "extra"
            }, {
                text: 0
            }, {
                text: e.showDeleteKey ? e.deleteButtonText : "",
                type: e.showDeleteKey ? "delete" : ""
            }],
            s = () => {
                const v = i(),
                    {
                        extraKey: x
                    } = e,
                    m = Array.isArray(x) ? x : [x];
                return m.length === 1 ? v.push({
                    text: 0,
                    wider: !0
                }, {
                    text: m[0],
                    type: "extra"
                }) : m.length === 2 && v.push({
                    text: m[0],
                    type: "extra"
                }, {
                    text: 0
                }, {
                    text: m[1],
                    type: "extra"
                }), v
            },
            a = Y(() => e.theme === "custom" ? s() : l()),
            c = () => {
                e.show && t("blur")
            },
            u = () => {
                t("close"), e.blurOnClose && c()
            },
            d = () => t(e.show ? "show" : "hide"),
            h = (v, x) => {
                if (v === "") {
                    x === "extra" && c();
                    return
                }
                const m = e.modelValue;
                x === "delete" ? (t("delete"), t("update:modelValue", m.slice(0, m.length - 1))) : x === "close" ? u() : m.length < +e.maxlength && (t("input", v), t("update:modelValue", m + v))
            },
            y = () => {
                const {
                    title: v,
                    theme: x,
                    closeButtonText: m
                } = e, w = n["title-left"], S = m && x === "default";
                if (v || S || w) return f("div", {
                    class: Ut("header")
                }, [w && f("span", {
                    class: Ut("title-left")
                }, [w()]), v && f("h2", {
                    class: Ut("title")
                }, [v]), S && f("button", {
                    type: "button",
                    class: [Ut("close"), To],
                    onClick: u
                }, [m])])
            },
            b = () => a.value.map(v => {
                const x = {};
                return v.type === "delete" && (x.default = n.delete), v.type === "extra" && (x.default = n["extra-key"]), f(ur, {
                    key: v.text,
                    text: v.text,
                    type: v.type,
                    wider: v.wider,
                    color: v.color,
                    onPress: h
                }, x)
            }),
            C = () => {
                if (e.theme === "custom") return f("div", {
                    class: Ut("sidebar")
                }, [e.showDeleteKey && f(ur, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h
                }, {
                    default: n.delete
                }), f(ur, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: h
                }, null)])
            };
        return ee(() => e.show, v => {
            e.transition || t(v ? "show" : "hide")
        }), e.hideOnClickOutside && uc(r, c, {
            eventName: "touchstart"
        }), () => {
            const v = y(),
                x = f(Ao, {
                    name: e.transition ? "van-slide-up" : ""
                }, {
                    default: () => [$t(f("div", Be({
                        ref: r,
                        style: gl(e.zIndex),
                        class: Ut({
                            unfit: !e.safeAreaInsetBottom,
                            "with-title": !!v
                        }),
                        onAnimationend: d,
                        onTouchstartPassive: gc
                    }, o), [v, f("div", {
                        class: Ut("body")
                    }, [f("div", {
                        class: Ut("keys")
                    }, [b()]), C()])]), [
                        [on, e.show]
                    ])]
                });
            return e.teleport ? f(sl, {
                to: e.teleport
            }, {
                default: () => [x]
            }) : x
        }
    }
});
const rp = ge($m),
    [Rm, so] = se("password-input"),
    Mm = {
        info: String,
        mask: Z,
        value: ue(""),
        gutter: J,
        length: Se(6),
        focused: Boolean,
        errorInfo: String
    };
var Fm = oe({
    name: Rm,
    props: Mm,
    emits: ["focus"],
    setup(e, {
        emit: t
    }) {
        const n = r => {
                r.stopPropagation(), t("focus", r)
            },
            o = () => {
                const r = [],
                    {
                        mask: i,
                        value: l,
                        gutter: s,
                        focused: a
                    } = e,
                    c = +e.length;
                for (let u = 0; u < c; u++) {
                    const d = l[u],
                        h = u !== 0 && !s,
                        y = a && u === l.length;
                    let b;
                    u !== 0 && s && (b = {
                        marginLeft: _e(s)
                    }), r.push(f("li", {
                        class: [{
                            [yc]: h
                        }, so("item", {
                            focus: y
                        })],
                        style: b
                    }, [i ? f("i", {
                        style: {
                            visibility: d ? "visible" : "hidden"
                        }
                    }, null) : d, y && f("div", {
                        class: so("cursor")
                    }, null)]))
                }
                return r
            };
        return () => {
            const r = e.errorInfo || e.info;
            return f("div", {
                class: so()
            }, [f("ul", {
                class: [so("security"), {
                    [bc]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [o()]), r && f("div", {
                class: so(e.errorInfo ? "error-info" : "info")
            }, [r])])
        }
    }
});
const lp = ge(Fm);

function xt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Sl(e) {
    var t = xt(e).Element;
    return e instanceof t || e instanceof Element
}

function pt(e) {
    var t = xt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Qc(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = xt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var qn = Math.round;

function Vr() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function (t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Lm() {
    return !/^((?!chrome|android).)*safari/i.test(Vr())
}

function bi(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var o = e.getBoundingClientRect(),
        r = 1,
        i = 1;
    t && pt(e) && (r = e.offsetWidth > 0 && qn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && qn(o.height) / e.offsetHeight || 1);
    var l = Sl(e) ? xt(e) : window,
        s = l.visualViewport,
        a = !Lm() && n,
        c = (o.left + (a && s ? s.offsetLeft : 0)) / r,
        u = (o.top + (a && s ? s.offsetTop : 0)) / i,
        d = o.width / r,
        h = o.height / i;
    return {
        width: d,
        height: h,
        top: u,
        right: c + d,
        bottom: u + h,
        left: c,
        x: c,
        y: u
    }
}

function eu(e) {
    var t = xt(e),
        n = t.pageXOffset,
        o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}

function Vm(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Nm(e) {
    return e === xt(e) || !pt(e) ? eu(e) : Vm(e)
}

function Mt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function zi(e) {
    return ((Sl(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function zm(e) {
    return bi(zi(e)).left + eu(e).scrollLeft
}

function Ft(e) {
    return xt(e).getComputedStyle(e)
}

function Cl(e) {
    var t = Ft(e),
        n = t.overflow,
        o = t.overflowX,
        r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o)
}

function Hm(e) {
    var t = e.getBoundingClientRect(),
        n = qn(t.width) / e.offsetWidth || 1,
        o = qn(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}

function jm(e, t, n) {
    n === void 0 && (n = !1);
    var o = pt(t),
        r = pt(t) && Hm(t),
        i = zi(t),
        l = bi(e, r, n),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        a = {
            x: 0,
            y: 0
        };
    return (o || !o && !n) && ((Mt(t) !== "body" || Cl(i)) && (s = Nm(t)), pt(t) ? (a = bi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = zm(i))), {
        x: l.left + s.scrollLeft - a.x,
        y: l.top + s.scrollTop - a.y,
        width: l.width,
        height: l.height
    }
}

function Um(e) {
    var t = bi(e),
        n = e.offsetWidth,
        o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}

function _l(e) {
    return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qc(e) ? e.host : null) || zi(e)
}

function tu(e) {
    return ["html", "body", "#document"].indexOf(Mt(e)) >= 0 ? e.ownerDocument.body : pt(e) && Cl(e) ? e : tu(_l(e))
}

function li(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = tu(e),
        r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = xt(o),
        l = r ? [i].concat(i.visualViewport || [], Cl(o) ? o : []) : o,
        s = t.concat(l);
    return r ? s : s.concat(li(_l(l)))
}

function Wm(e) {
    return ["table", "td", "th"].indexOf(Mt(e)) >= 0
}

function qs(e) {
    return !pt(e) || Ft(e).position === "fixed" ? null : e.offsetParent
}

function Km(e) {
    var t = /firefox/i.test(Vr()),
        n = /Trident/i.test(Vr());
    if (n && pt(e)) {
        var o = Ft(e);
        if (o.position === "fixed") return null
    }
    var r = _l(e);
    for (Qc(r) && (r = r.host); pt(r) && ["html", "body"].indexOf(Mt(r)) < 0;) {
        var i = Ft(r);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
        r = r.parentNode
    }
    return null
}

function nu(e) {
    for (var t = xt(e), n = qs(e); n && Wm(n) && Ft(n).position === "static";) n = qs(n);
    return n && (Mt(n) === "html" || Mt(n) === "body" && Ft(n).position === "static") ? t : n || Km(e) || t
}
var zn = "top",
    pi = "bottom",
    Eo = "right",
    Sn = "left",
    ou = "auto",
    Ym = [zn, pi, Eo, Sn],
    iu = "start",
    wi = "end",
    qm = [].concat(Ym, [ou]).reduce(function (e, t) {
        return e.concat([t, t + "-" + iu, t + "-" + wi])
    }, []),
    Gm = "beforeRead",
    Xm = "read",
    Zm = "afterRead",
    Jm = "beforeMain",
    Qm = "main",
    ey = "afterMain",
    ty = "beforeWrite",
    ny = "write",
    oy = "afterWrite",
    Nr = [Gm, Xm, Zm, Jm, Qm, ey, ty, ny, oy];

function iy(e) {
    var t = new Map,
        n = new Set,
        o = [];
    e.forEach(function (i) {
        t.set(i.name, i)
    });

    function r(i) {
        n.add(i.name);
        var l = [].concat(i.requires || [], i.requiresIfExists || []);
        l.forEach(function (s) {
            if (!n.has(s)) {
                var a = t.get(s);
                a && r(a)
            }
        }), o.push(i)
    }
    return e.forEach(function (i) {
        n.has(i.name) || r(i)
    }), o
}

function ry(e) {
    var t = iy(e);
    return Nr.reduce(function (n, o) {
        return n.concat(t.filter(function (r) {
            return r.phase === o
        }))
    }, [])
}

function ly(e) {
    var t;
    return function () {
        return t || (t = new Promise(function (n) {
            Promise.resolve().then(function () {
                t = void 0, n(e())
            })
        })), t
    }
}

function Wt(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    return [].concat(n).reduce(function (r, i) {
        return r.replace(/%s/, i)
    }, e)
}
var vn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    sy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
    Gs = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function ay(e) {
    e.forEach(function (t) {
        [].concat(Object.keys(t), Gs).filter(function (n, o, r) {
            return r.indexOf(n) === o
        }).forEach(function (n) {
            switch (n) {
                case "name":
                    typeof t.name != "string" && console.error(Wt(vn, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                    break;
                case "enabled":
                    typeof t.enabled != "boolean" && console.error(Wt(vn, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                    break;
                case "phase":
                    Nr.indexOf(t.phase) < 0 && console.error(Wt(vn, t.name, '"phase"', "either " + Nr.join(", "), '"' + String(t.phase) + '"'));
                    break;
                case "fn":
                    typeof t.fn != "function" && console.error(Wt(vn, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "effect":
                    t.effect != null && typeof t.effect != "function" && console.error(Wt(vn, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "requires":
                    t.requires != null && !Array.isArray(t.requires) && console.error(Wt(vn, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                    break;
                case "requiresIfExists":
                    Array.isArray(t.requiresIfExists) || console.error(Wt(vn, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Gs.map(function (o) {
                        return '"' + o + '"'
                    }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function (o) {
                e.find(function (r) {
                    return r.name === o
                }) == null && console.error(Wt(sy, String(t.name), o, o))
            })
        })
    })
}

function cy(e, t) {
    var n = new Set;
    return e.filter(function (o) {
        var r = t(o);
        if (!n.has(r)) return n.add(r), !0
    })
}

function Hi(e) {
    return e.split("-")[0]
}

function uy(e) {
    var t = e.reduce(function (n, o) {
        var r = n[o.name];
        return n[o.name] = r ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data)
        }) : o, n
    }, {});
    return Object.keys(t).map(function (n) {
        return t[n]
    })
}

function ru(e) {
    return e.split("-")[1]
}

function fy(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function dy(e) {
    var t = e.reference,
        n = e.element,
        o = e.placement,
        r = o ? Hi(o) : null,
        i = o ? ru(o) : null,
        l = t.x + t.width / 2 - n.width / 2,
        s = t.y + t.height / 2 - n.height / 2,
        a;
    switch (r) {
        case zn:
            a = {
                x: l,
                y: t.y - n.height
            };
            break;
        case pi:
            a = {
                x: l,
                y: t.y + t.height
            };
            break;
        case Eo:
            a = {
                x: t.x + t.width,
                y: s
            };
            break;
        case Sn:
            a = {
                x: t.x - n.width,
                y: s
            };
            break;
        default:
            a = {
                x: t.x,
                y: t.y
            }
    }
    var c = r ? fy(r) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (i) {
            case iu:
                a[c] = a[c] - (t[u] / 2 - n[u] / 2);
                break;
            case wi:
                a[c] = a[c] + (t[u] / 2 - n[u] / 2);
                break
        }
    }
    return a
}
var Xs = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
    hy = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
    Zs = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

function Js() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}

function gy(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        o = n === void 0 ? [] : n,
        r = t.defaultOptions,
        i = r === void 0 ? Zs : r;
    return function (s, a, c) {
        c === void 0 && (c = i);
        var u = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Zs, i),
                modifiersData: {},
                elements: {
                    reference: s,
                    popper: a
                },
                attributes: {},
                styles: {}
            },
            d = [],
            h = !1,
            y = {
                state: u,
                setOptions: function (x) {
                    var m = typeof x == "function" ? x(u.options) : x;
                    C(), u.options = Object.assign({}, i, u.options, m), u.scrollParents = {
                        reference: Sl(s) ? li(s) : s.contextElement ? li(s.contextElement) : [],
                        popper: li(a)
                    };
                    var w = ry(uy([].concat(o, u.options.modifiers)));
                    u.orderedModifiers = w.filter(function (_) {
                        return _.enabled
                    }); {
                        var S = cy([].concat(w, u.options.modifiers), function (_) {
                            var E = _.name;
                            return E
                        });
                        if (ay(S), Hi(u.options.placement) === ou) {
                            var T = u.orderedModifiers.find(function (_) {
                                var E = _.name;
                                return E === "flip"
                            });
                            T || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                        }
                        var O = Ft(a),
                            U = O.marginTop,
                            I = O.marginRight,
                            L = O.marginBottom,
                            k = O.marginLeft;
                        [U, I, L, k].some(function (_) {
                            return parseFloat(_)
                        }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                    }
                    return b(), y.update()
                },
                forceUpdate: function () {
                    if (!h) {
                        var x = u.elements,
                            m = x.reference,
                            w = x.popper;
                        if (!Js(m, w)) {
                            console.error(Xs);
                            return
                        }
                        u.rects = {
                            reference: jm(m, nu(w), u.options.strategy === "fixed"),
                            popper: Um(w)
                        }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function (_) {
                            return u.modifiersData[_.name] = Object.assign({}, _.data)
                        });
                        for (var S = 0, T = 0; T < u.orderedModifiers.length; T++) {
                            if (S += 1, S > 100) {
                                console.error(hy);
                                break
                            }
                            if (u.reset === !0) {
                                u.reset = !1, T = -1;
                                continue
                            }
                            var O = u.orderedModifiers[T],
                                U = O.fn,
                                I = O.options,
                                L = I === void 0 ? {} : I,
                                k = O.name;
                            typeof U == "function" && (u = U({
                                state: u,
                                options: L,
                                name: k,
                                instance: y
                            }) || u)
                        }
                    }
                },
                update: ly(function () {
                    return new Promise(function (v) {
                        y.forceUpdate(), v(u)
                    })
                }),
                destroy: function () {
                    C(), h = !0
                }
            };
        if (!Js(s, a)) return console.error(Xs), y;
        y.setOptions(c).then(function (v) {
            !h && c.onFirstUpdate && c.onFirstUpdate(v)
        });

        function b() {
            u.orderedModifiers.forEach(function (v) {
                var x = v.name,
                    m = v.options,
                    w = m === void 0 ? {} : m,
                    S = v.effect;
                if (typeof S == "function") {
                    var T = S({
                            state: u,
                            name: x,
                            instance: y,
                            options: w
                        }),
                        O = function () {};
                    d.push(T || O)
                }
            })
        }

        function C() {
            d.forEach(function (v) {
                return v()
            }), d = []
        }
        return y
    }
}
var ei = {
    passive: !0
};

function vy(e) {
    var t = e.state,
        n = e.instance,
        o = e.options,
        r = o.scroll,
        i = r === void 0 ? !0 : r,
        l = o.resize,
        s = l === void 0 ? !0 : l,
        a = xt(t.elements.popper),
        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function (u) {
            u.addEventListener("scroll", n.update, ei)
        }), s && a.addEventListener("resize", n.update, ei),
        function () {
            i && c.forEach(function (u) {
                u.removeEventListener("scroll", n.update, ei)
            }), s && a.removeEventListener("resize", n.update, ei)
        }
}
var my = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: vy,
    data: {}
};

function yy(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = dy({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var by = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: yy,
        data: {}
    },
    py = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

function wy(e) {
    var t = e.x,
        n = e.y,
        o = window,
        r = o.devicePixelRatio || 1;
    return {
        x: qn(t * r) / r || 0,
        y: qn(n * r) / r || 0
    }
}

function Qs(e) {
    var t, n = e.popper,
        o = e.popperRect,
        r = e.placement,
        i = e.variation,
        l = e.offsets,
        s = e.position,
        a = e.gpuAcceleration,
        c = e.adaptive,
        u = e.roundOffsets,
        d = e.isFixed,
        h = l.x,
        y = h === void 0 ? 0 : h,
        b = l.y,
        C = b === void 0 ? 0 : b,
        v = typeof u == "function" ? u({
            x: y,
            y: C
        }) : {
            x: y,
            y: C
        };
    y = v.x, C = v.y;
    var x = l.hasOwnProperty("x"),
        m = l.hasOwnProperty("y"),
        w = Sn,
        S = zn,
        T = window;
    if (c) {
        var O = nu(n),
            U = "clientHeight",
            I = "clientWidth";
        if (O === xt(n) && (O = zi(n), Ft(O).position !== "static" && s === "absolute" && (U = "scrollHeight", I = "scrollWidth")), O = O, r === zn || (r === Sn || r === Eo) && i === wi) {
            S = pi;
            var L = d && O === T && T.visualViewport ? T.visualViewport.height : O[U];
            C -= L - o.height, C *= a ? 1 : -1
        }
        if (r === Sn || (r === zn || r === pi) && i === wi) {
            w = Eo;
            var k = d && O === T && T.visualViewport ? T.visualViewport.width : O[I];
            y -= k - o.width, y *= a ? 1 : -1
        }
    }
    var _ = Object.assign({
            position: s
        }, c && py),
        E = u === !0 ? wy({
            x: y,
            y: C
        }) : {
            x: y,
            y: C
        };
    if (y = E.x, C = E.y, a) {
        var B;
        return Object.assign({}, _, (B = {}, B[S] = m ? "0" : "", B[w] = x ? "0" : "", B.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + C + "px)" : "translate3d(" + y + "px, " + C + "px, 0)", B))
    }
    return Object.assign({}, _, (t = {}, t[S] = m ? C + "px" : "", t[w] = x ? y + "px" : "", t.transform = "", t))
}

function xy(e) {
    var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        r = o === void 0 ? !0 : o,
        i = n.adaptive,
        l = i === void 0 ? !0 : i,
        s = n.roundOffsets,
        a = s === void 0 ? !0 : s; {
        var c = Ft(t.elements.popper).transitionProperty || "";
        l && ["transform", "top", "right", "bottom", "left"].some(function (d) {
            return c.indexOf(d) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var u = {
        placement: Hi(t.placement),
        variation: ru(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: r,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var Sy = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: xy,
    data: {}
};

function Cy(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
        var o = t.styles[n] || {},
            r = t.attributes[n] || {},
            i = t.elements[n];
        !pt(i) || !Mt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function (l) {
            var s = r[l];
            s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s)
        }))
    })
}

function _y(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
            Object.keys(t.elements).forEach(function (o) {
                var r = t.elements[o],
                    i = t.attributes[o] || {},
                    l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
                    s = l.reduce(function (a, c) {
                        return a[c] = "", a
                    }, {});
                !pt(r) || !Mt(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function (a) {
                    r.removeAttribute(a)
                }))
            })
        }
}
var Ty = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: Cy,
        effect: _y,
        requires: ["computeStyles"]
    },
    Ey = [my, by, Sy, Ty],
    Oy = gy({
        defaultModifiers: Ey
    });

function ky(e, t, n) {
    var o = Hi(e),
        r = [Sn, zn].indexOf(o) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        l = i[0],
        s = i[1];
    return l = l || 0, s = (s || 0) * r, [Sn, Eo].indexOf(o) >= 0 ? {
        x: s,
        y: l
    } : {
        x: l,
        y: s
    }
}

function Iy(e) {
    var t = e.state,
        n = e.options,
        o = e.name,
        r = n.offset,
        i = r === void 0 ? [0, 0] : r,
        l = qm.reduce(function (u, d) {
            return u[d] = ky(d, t.rects, i), u
        }, {}),
        s = l[t.placement],
        a = s.x,
        c = s.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = l
}
var Dy = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Iy
};
const [Py, mn] = se("popover"), Ay = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"], By = {
    show: Boolean,
    theme: ue("light"),
    overlay: Boolean,
    actions: ln(),
    actionsDirection: ue("vertical"),
    trigger: ue("click"),
    duration: J,
    showArrow: Z,
    placement: ue("bottom"),
    iconPrefix: String,
    overlayClass: ze,
    overlayStyle: Object,
    closeOnClickAction: Z,
    closeOnClickOverlay: Z,
    closeOnClickOutside: Z,
    offset: {
        type: Array,
        default: () => [0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var $y = oe({
    name: Py,
    props: By,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        let r;
        const i = H(),
            l = H(),
            s = H(),
            a = wg(() => e.show, m => t("update:show", m)),
            c = () => ({
                placement: e.placement,
                modifiers: [{
                    name: "computeStyles",
                    options: {
                        adaptive: !1,
                        gpuAcceleration: !1
                    }
                }, we({}, Dy, {
                    options: {
                        offset: e.offset
                    }
                })]
            }),
            u = () => l.value && s.value ? Oy(l.value, s.value.popupRef.value, c()) : null,
            d = () => {
                Te(() => {
                    a.value && (r ? r.setOptions(c()) : (r = u(), Et && (window.addEventListener("animationend", d), window.addEventListener("transitionend", d))))
                })
            },
            h = m => {
                a.value = m
            },
            y = () => {
                e.trigger === "click" && (a.value = !a.value)
            },
            b = (m, w) => {
                m.disabled || (t("select", m, w), e.closeOnClickAction && (a.value = !1))
            },
            C = () => {
                a.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (a.value = !1)
            },
            v = (m, w) => n.action ? n.action({
                action: m,
                index: w
            }) : [m.icon && f(Me, {
                name: m.icon,
                classPrefix: e.iconPrefix,
                class: mn("action-icon")
            }, null), f("div", {
                class: [mn("action-text"), {
                    [mh]: e.actionsDirection === "vertical"
                }]
            }, [m.text])],
            x = (m, w) => {
                const {
                    icon: S,
                    color: T,
                    disabled: O,
                    className: U
                } = m;
                return f("div", {
                    role: "menuitem",
                    class: [mn("action", {
                        disabled: O,
                        "with-icon": S
                    }), {
                        [vh]: e.actionsDirection === "horizontal"
                    }, U],
                    style: {
                        color: T
                    },
                    tabindex: O ? void 0 : 0,
                    "aria-disabled": O || void 0,
                    onClick: () => b(m, w)
                }, [v(m, w)])
            };
        return Ge(() => {
            d(), Di(() => {
                var m;
                i.value = (m = s.value) == null ? void 0 : m.popupRef.value
            })
        }), wt(() => {
            r && (Et && (window.removeEventListener("animationend", d), window.removeEventListener("transitionend", d)), r.destroy(), r = null)
        }), ee(() => [a.value, e.offset, e.placement], d), uc([l, i], C, {
            eventName: "touchstart"
        }), () => {
            var m;
            return f(Je, null, [f("span", {
                ref: l,
                class: mn("wrapper"),
                onClick: y
            }, [(m = n.reference) == null ? void 0 : m.call(n)]), f(Fo, Be({
                ref: s,
                show: a.value,
                class: mn([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h
            }, o, Ar(), Re(e, Ay)), {
                default: () => [e.showArrow && f("div", {
                    class: mn("arrow")
                }, null), f("div", {
                    role: "menu",
                    class: mn("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(x)])]
            })])
        }
    }
});
const sp = ge($y),
    [Ry, fr] = se("progress"),
    My = {
        color: String,
        inactive: Boolean,
        pivotText: String,
        textColor: String,
        showPivot: Z,
        pivotColor: String,
        trackColor: String,
        strokeWidth: J,
        percentage: {
            type: J,
            default: 0,
            validator: e => +e >= 0 && +e <= 100
        }
    };
var Fy = oe({
    name: Ry,
    props: My,
    setup(e) {
        const t = Y(() => e.inactive ? void 0 : e.color),
            n = () => {
                const {
                    textColor: o,
                    pivotText: r,
                    pivotColor: i,
                    percentage: l
                } = e, s = r ?? `${l}%`;
                if (e.showPivot && s) {
                    const a = {
                        color: o,
                        left: `${+l}%`,
                        transform: `translate(-${+l}%,-50%)`,
                        background: i || t.value
                    };
                    return f("span", {
                        style: a,
                        class: fr("pivot", {
                            inactive: e.inactive
                        })
                    }, [s])
                }
            };
        return () => {
            const {
                trackColor: o,
                percentage: r,
                strokeWidth: i
            } = e, l = {
                background: o,
                height: _e(i)
            }, s = {
                width: `${r}%`,
                background: t.value
            };
            return f("div", {
                class: fr(),
                style: l
            }, [f("span", {
                class: fr("portion", {
                    inactive: e.inactive
                }),
                style: s
            }, null), n()])
        }
    }
});
const ap = ge(Fy),
    [Ly, ao, Vy] = se("pull-refresh"),
    lu = 50,
    Ny = ["pulling", "loosing", "success"],
    zy = {
        disabled: Boolean,
        modelValue: Boolean,
        headHeight: Se(lu),
        successText: String,
        pullingText: String,
        loosingText: String,
        loadingText: String,
        pullDistance: J,
        successDuration: Se(500),
        animationDuration: Se(300)
    };
var Hy = oe({
    name: Ly,
    props: zy,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o;
        const r = H(),
            i = H(),
            l = Ri(r),
            s = Ke({
                status: "normal",
                distance: 0,
                duration: 0
            }),
            a = On(),
            c = () => {
                if (e.headHeight !== lu) return {
                    height: `${e.headHeight}px`
                }
            },
            u = () => s.status !== "loading" && s.status !== "success" && !e.disabled,
            d = S => {
                const T = +(e.pullDistance || e.headHeight);
                return S > T && (S < T * 2 ? S = T + (S - T) / 2 : S = T * 1.5 + (S - T * 2) / 4), Math.round(S)
            },
            h = (S, T) => {
                const O = +(e.pullDistance || e.headHeight);
                s.distance = S, T ? s.status = "loading" : S === 0 ? s.status = "normal" : S < O ? s.status = "pulling" : s.status = "loosing", t("change", {
                    status: s.status,
                    distance: S
                })
            },
            y = () => {
                const {
                    status: S
                } = s;
                return S === "normal" ? "" : e[`${S}Text`] || Vy(S)
            },
            b = () => {
                const {
                    status: S,
                    distance: T
                } = s;
                if (n[S]) return n[S]({
                    distance: T
                });
                const O = [];
                return Ny.includes(S) && O.push(f("div", {
                    class: ao("text")
                }, [y()])), S === "loading" && O.push(f(Nt, {
                    class: ao("loading")
                }, {
                    default: y
                })), O
            },
            C = () => {
                s.status = "success", setTimeout(() => {
                    h(0)
                }, +e.successDuration)
            },
            v = S => {
                o = Ro(l.value) === 0, o && (s.duration = 0, a.start(S))
            },
            x = S => {
                u() && v(S)
            },
            m = S => {
                if (u()) {
                    o || v(S);
                    const {
                        deltaY: T
                    } = a;
                    a.move(S), o && T.value >= 0 && a.isVertical() && (et(S), h(d(T.value)))
                }
            },
            w = () => {
                o && a.deltaY.value && u() && (s.duration = +e.animationDuration, s.status === "loosing" ? (h(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : h(0))
            };
        return ee(() => e.modelValue, S => {
            s.duration = +e.animationDuration, S ? h(+e.headHeight, !0) : n.success || e.successText ? C() : h(0, !1)
        }), nt("touchmove", m, {
            target: i
        }), () => {
            var S;
            const T = {
                transitionDuration: `${s.duration}ms`,
                transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : ""
            };
            return f("div", {
                ref: r,
                class: ao()
            }, [f("div", {
                ref: i,
                class: ao("track"),
                style: T,
                onTouchstartPassive: x,
                onTouchend: w,
                onTouchcancel: w
            }, [f("div", {
                class: ao("head"),
                style: c()
            }, [b()]), (S = n.default) == null ? void 0 : S.call(n)])])
        }
    }
});
const cp = ge(Hy),
    [jy, Uy] = se("skeleton-title"),
    Wy = {
        round: Boolean,
        titleWidth: J
    };
var Ky = oe({
    name: jy,
    props: Wy,
    setup(e) {
        return () => f("h3", {
            class: Uy([{
                round: e.round
            }]),
            style: {
                width: _e(e.titleWidth)
            }
        }, null)
    }
});
const Yy = ge(Ky);
var qy = Yy;
const [Gy, Xy] = se("skeleton-avatar"), Zy = {
    avatarSize: J,
    avatarShape: ue("round")
};
var Jy = oe({
    name: Gy,
    props: Zy,
    setup(e) {
        return () => f("div", {
            class: Xy([e.avatarShape]),
            style: Qn(e.avatarSize)
        }, null)
    }
});
const Qy = ge(Jy);
var eb = Qy;
const Tl = "100%",
    tb = {
        round: Boolean,
        rowWidth: {
            type: J,
            default: Tl
        }
    },
    [nb, ob] = se("skeleton-paragraph");
var ib = oe({
    name: nb,
    props: tb,
    setup(e) {
        return () => f("div", {
            class: ob([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const rb = ge(ib);
var lb = rb;
const [sb, ea] = se("skeleton"), ab = "60%", cb = {
    row: Se(0),
    round: Boolean,
    title: Boolean,
    titleWidth: J,
    avatar: Boolean,
    avatarSize: J,
    avatarShape: ue("round"),
    loading: Z,
    animate: Z,
    rowWidth: {
        type: [Number, String, Array],
        default: Tl
    }
};
var ub = oe({
    name: sb,
    inheritAttrs: !1,
    props: cb,
    setup(e, {
        slots: t,
        attrs: n
    }) {
        const o = () => {
                if (e.avatar) return f(eb, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
            },
            r = () => {
                if (e.title) return f(qy, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
            },
            i = a => {
                const {
                    rowWidth: c
                } = e;
                return c === Tl && a === +e.row - 1 ? ab : Array.isArray(c) ? c[a] : c
            },
            l = () => Array(+e.row).fill("").map((a, c) => f(lb, {
                key: c,
                round: e.round,
                rowWidth: _e(i(c))
            }, null)),
            s = () => t.template ? t.template() : f(Je, null, [o(), f("div", {
                class: ea("content")
            }, [r(), l()])]);
        return () => {
            var a;
            return e.loading ? f("div", Be({
                class: ea({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [s()]) : (a = t.default) == null ? void 0 : a.call(t)
        }
    }
});
const up = ge(ub),
    [fb, ta] = se("skeleton-image"),
    db = {
        imageSize: J,
        imageShape: ue("square")
    };
var hb = oe({
    name: fb,
    props: db,
    setup(e) {
        return () => f("div", {
            class: ta([e.imageShape]),
            style: Qn(e.imageSize)
        }, [f(Me, {
            name: "photo",
            class: ta("icon")
        }, null)])
    }
});
const fp = ge(hb),
    [gb, Le, vb] = se("uploader");

function na(e, t) {
    return new Promise(n => {
        if (t === "file") {
            n();
            return
        }
        const o = new FileReader;
        o.onload = r => {
            n(r.target.result)
        }, t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
    })
}

function su(e, t) {
    return gi(e).some(n => n.file ? Kn(t) ? t(n.file) : n.file.size > +t : !1)
}

function mb(e, t) {
    const n = [],
        o = [];
    return e.forEach(r => {
        su(r, t) ? o.push(r) : n.push(r)
    }), {
        valid: n,
        invalid: o
    }
}
const yb = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
    bb = e => yb.test(e);

function au(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? bb(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var pb = oe({
    props: {
        name: J,
        item: qe(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                const {
                    status: u,
                    message: d
                } = e.item;
                if (u === "uploading" || u === "failed") {
                    const h = u === "failed" ? f(Me, {
                            name: "close",
                            class: Le("mask-icon")
                        }, null) : f(Nt, {
                            class: Le("loading")
                        }, null),
                        y = Pe(d) && d !== "";
                    return f("div", {
                        class: Le("mask")
                    }, [h, y && f("div", {
                        class: Le("mask-message")
                    }, [d])])
                }
            },
            r = u => {
                const {
                    name: d,
                    item: h,
                    index: y,
                    beforeDelete: b
                } = e;
                u.stopPropagation(), Mo(b, {
                    args: [h, {
                        name: d,
                        index: y
                    }],
                    done: () => t("delete")
                })
            },
            i = () => t("preview"),
            l = () => t("reupload"),
            s = () => {
                if (e.deletable && e.item.status !== "uploading") {
                    const u = n["preview-delete"];
                    return f("div", {
                        role: "button",
                        class: Le("preview-delete", {
                            shadow: !u
                        }),
                        tabindex: 0,
                        "aria-label": vb("delete"),
                        onClick: r
                    }, [u ? u() : f(Me, {
                        name: "cross",
                        class: Le("preview-delete-icon")
                    }, null)])
                }
            },
            a = () => {
                if (n["preview-cover"]) {
                    const {
                        index: u,
                        item: d
                    } = e;
                    return f("div", {
                        class: Le("preview-cover")
                    }, [n["preview-cover"](we({
                        index: u
                    }, d))])
                }
            },
            c = () => {
                const {
                    item: u,
                    lazyLoad: d,
                    imageFit: h,
                    previewSize: y,
                    reupload: b
                } = e;
                return au(u) ? f(Xc, {
                    fit: h,
                    src: u.objectUrl || u.content || u.url,
                    class: Le("preview-image"),
                    width: Array.isArray(y) ? y[0] : y,
                    height: Array.isArray(y) ? y[1] : y,
                    lazyLoad: d,
                    onClick: b ? l : i
                }, {
                    default: a
                }) : f("div", {
                    class: Le("file"),
                    style: Qn(e.previewSize)
                }, [f(Me, {
                    class: Le("file-icon"),
                    name: "description"
                }, null), f("div", {
                    class: [Le("file-name"), "van-ellipsis"]
                }, [u.file ? u.file.name : u.url]), a()])
            };
        return () => f("div", {
            class: Le("preview")
        }, [c(), o(), s()])
    }
});
const wb = {
    name: Se(""),
    accept: ue("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: Se(1 / 0),
    imageFit: ue("cover"),
    resultType: ue("dataUrl"),
    uploadIcon: ue("photograph"),
    uploadText: String,
    deletable: Z,
    reupload: Boolean,
    afterRead: Function,
    showUpload: Z,
    modelValue: ln(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: Z,
    previewOptions: Object,
    previewFullImage: Z,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var xb = oe({
    name: gb,
    props: wb,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            r = [],
            i = H(-1),
            l = H(!1),
            s = (I = e.modelValue.length) => ({
                name: e.name,
                index: I
            }),
            a = () => {
                o.value && (o.value.value = "")
            },
            c = I => {
                if (a(), su(I, e.maxSize))
                    if (Array.isArray(I)) {
                        const L = mb(I, e.maxSize);
                        if (I = L.valid, t("oversize", L.invalid, s()), !I.length) return
                    } else {
                        t("oversize", I, s());
                        return
                    } if (I = Ke(I), i.value > -1) {
                    const L = [...e.modelValue];
                    L.splice(i.value, 1, I), t("update:modelValue", L), i.value = -1
                } else t("update:modelValue", [...e.modelValue, ...gi(I)]);
                e.afterRead && e.afterRead(I, s())
            },
            u = I => {
                const {
                    maxCount: L,
                    modelValue: k,
                    resultType: _
                } = e;
                if (Array.isArray(I)) {
                    const E = +L - k.length;
                    I.length > E && (I = I.slice(0, E)), Promise.all(I.map(B => na(B, _))).then(B => {
                        const ie = I.map((N, P) => {
                            const M = {
                                file: N,
                                status: "",
                                message: "",
                                objectUrl: URL.createObjectURL(N)
                            };
                            return B[P] && (M.content = B[P]), M
                        });
                        c(ie)
                    })
                } else na(I, _).then(E => {
                    const B = {
                        file: I,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(I)
                    };
                    E && (B.content = E), c(B)
                })
            },
            d = I => {
                const {
                    files: L
                } = I.target;
                if (e.disabled || !L || !L.length) return;
                const k = L.length === 1 ? L[0] : [].slice.call(L);
                if (e.beforeRead) {
                    const _ = e.beforeRead(k, s());
                    if (!_) {
                        a();
                        return
                    }
                    if (cl(_)) {
                        _.then(E => {
                            u(E || k)
                        }).catch(a);
                        return
                    }
                }
                u(k)
            };
        let h;
        const y = () => t("closePreview"),
            b = I => {
                if (e.previewFullImage) {
                    const L = e.modelValue.filter(au),
                        k = L.map(_ => (_.objectUrl && !_.url && _.status !== "failed" && (_.url = _.objectUrl, r.push(_.url)), _.url)).filter(Boolean);
                    h = wm(we({
                        images: k,
                        startPosition: L.indexOf(I),
                        onClose: y
                    }, e.previewOptions))
                }
            },
            C = () => {
                h && h.close()
            },
            v = (I, L) => {
                const k = e.modelValue.slice(0);
                k.splice(L, 1), t("update:modelValue", k), t("delete", I, s(L))
            },
            x = I => {
                l.value = !0, i.value = I, Te(() => U())
            },
            m = () => {
                l.value || (i.value = -1), l.value = !1
            },
            w = (I, L) => {
                const k = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
                    _ = we(Re(e, k), Re(I, k, !0));
                return f(pb, Be({
                    item: I,
                    index: L,
                    onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", I, s(L)),
                    onDelete: () => v(I, L),
                    onPreview: () => b(I),
                    onReupload: () => x(L)
                }, Re(e, ["name", "lazyLoad"]), _), Re(n, ["preview-cover", "preview-delete"]))
            },
            S = () => {
                if (e.previewImage) return e.modelValue.map(w)
            },
            T = I => t("clickUpload", I),
            O = () => {
                if (e.modelValue.length >= +e.maxCount && !e.reupload) return;
                const I = e.modelValue.length >= +e.maxCount && e.reupload,
                    L = e.readonly ? null : f("input", {
                        ref: o,
                        type: "file",
                        class: Le("input"),
                        accept: e.accept,
                        capture: e.capture,
                        multiple: e.multiple && i.value === -1,
                        disabled: e.disabled,
                        onChange: d,
                        onClick: m
                    }, null);
                return n.default ? $t(f("div", {
                    class: Le("input-wrapper"),
                    onClick: T
                }, [n.default(), L]), [
                    [on, !I]
                ]) : $t(f("div", {
                    class: Le("upload", {
                        readonly: e.readonly
                    }),
                    style: Qn(e.previewSize),
                    onClick: T
                }, [f(Me, {
                    name: e.uploadIcon,
                    class: Le("upload-icon")
                }, null), e.uploadText && f("span", {
                    class: Le("upload-text")
                }, [e.uploadText]), L]), [
                    [on, e.showUpload && !I]
                ])
            },
            U = () => {
                o.value && !e.disabled && o.value.click()
            };
        return wt(() => {
            r.forEach(I => URL.revokeObjectURL(I))
        }), Fe({
            chooseFile: U,
            closeImagePreview: C
        }), Mi(() => e.modelValue), () => f("div", {
            class: Le()
        }, [f("div", {
            class: Le("wrapper", {
                disabled: e.disabled
            })
        }, [S(), O()])])
    }
});
const dp = ge(xb);
export {
    _c as $, $b as A, Ao as B, kb as C, tc as D, Tb as E, Je as F, Eb as G, Pb as H, Ti as I, $t as J, Db as K, uh as L, on as M, af as N, vs as O, mi as P, Fo as Q, Me as R, Xc as S, Ai as T, Nt as U, op as V, sp as W, Hb as X, Kb as Y, Qb as Z, Zb as _, Io as a, Lb as a0, Vb as a1, rg as a2, cp as a3, dp as a4, zb as a5, Jb as a6, ep as a7, lp as a8, rp as a9, sl as aA, Fb as aB, Mb as aC, Gb as aa, kg as ab, np as ac, up as ad, Yy as ae, fp as af, Qy as ag, rb as ah, Wb as ai, Yb as aj, qb as ak, ip as al, ap as am, jb as an, Ub as ao, tp as ap, ol as aq, wt as ar, Na as as, Ib as at, Fd as au, Bb as av, an as aw, Lt as ax, Ab as ay, _i as az, bf as b, Y as c, oe as d, Cb as e, Qe as f, gt as g, ed as h, Pt as i, f as j, Wu as k, Ke as l, Ob as m, Te as n, Ge as o, Zn as p, Za as q, H as r, _b as s, Qa as t, jn as u, tf as v, ee as w, nc as x, Sb as y, Rb as z
};
