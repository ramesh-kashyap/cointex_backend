/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Js = function (e, t) {
    return Js = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (r, n) {
        r.__proto__ = n
    } || function (r, n) {
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a])
    }, Js(e, t)
};

function G(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Js(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var Jg = function () {
        function e() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
        }
        return e
    }(),
    jg = function () {
        function e() {
            this.browser = new Jg, this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u"
        }
        return e
    }(),
    et = new jg;
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (et.wxa = !0, et.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? et.worker = !0 : typeof navigator > "u" || navigator.userAgent.indexOf("Node.js") === 0 ? (et.node = !0, et.svgSupported = !0) : t0(navigator.userAgent, et);

function t0(e, t) {
    var r = t.browser,
        n = e.match(/Firefox\/([\d.]+)/),
        a = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/),
        i = e.match(/Edge?\/([\d.]+)/),
        o = /micromessenger/i.test(e);
    n && (r.firefox = !0, r.version = n[1]), a && (r.ie = !0, r.version = a[1]), i && (r.edge = !0, r.version = i[1], r.newEdge = +i[1].split(".")[0] > 18), o && (r.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, t.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11), t.domSupported = typeof document < "u";
    var s = document.documentElement.style;
    t.transform3dSupported = (r.ie && "transition" in s || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || r.ie && +r.version >= 9
}
var qu = 12,
    e0 = "sans-serif",
    Wr = qu + "px " + e0,
    r0 = 20,
    n0 = 100,
    a0 = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";

function i0(e) {
    var t = {};
    if (typeof JSON > "u") return t;
    for (var r = 0; r < e.length; r++) {
        var n = String.fromCharCode(r + 32),
            a = (e.charCodeAt(r) - r0) / n0;
        t[n] = a
    }
    return t
}
var o0 = i0(a0),
    Ra = {
        createCanvas: function () {
            return typeof document < "u" && document.createElement("canvas")
        },
        measureText: function () {
            var e, t;
            return function (r, n) {
                if (!e) {
                    var a = Ra.createCanvas();
                    e = a && a.getContext("2d")
                }
                if (e) return t !== n && (t = e.font = n || Wr), e.measureText(r);
                r = r || "", n = n || Wr;
                var i = /(\d+)px/.exec(n),
                    o = i && +i[1] || qu,
                    s = 0;
                if (n.indexOf("mono") >= 0) s = o * r.length;
                else
                    for (var u = 0; u < r.length; u++) {
                        var l = o0[r[u]];
                        s += l == null ? o : l * o
                    }
                return {
                    width: s
                }
            }
        }(),
        loadImage: function (e, t, r) {
            var n = new Image;
            return n.onload = t, n.onerror = r, n.src = e, n
        }
    },
    rc = ur(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function (e, t) {
        return e["[object " + t + "]"] = !0, e
    }, {}),
    nc = ur(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function (e, t) {
        return e["[object " + t + "Array]"] = !0, e
    }, {}),
    An = Object.prototype.toString,
    co = Array.prototype,
    s0 = co.forEach,
    u0 = co.filter,
    Zu = co.slice,
    l0 = co.map,
    Ql = (function () {}).constructor,
    za = Ql ? Ql.prototype : null,
    Ku = "__proto__",
    f0 = 2311;

function ac() {
    return f0++
}

function ic() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    typeof console < "u" && console.error.apply(console, e)
}

function J(e) {
    if (e == null || typeof e != "object") return e;
    var t = e,
        r = An.call(e);
    if (r === "[object Array]") {
        if (!fa(e)) {
            t = [];
            for (var n = 0, a = e.length; n < a; n++) t[n] = J(e[n])
        }
    } else if (nc[r]) {
        if (!fa(e)) {
            var i = e.constructor;
            if (i.from) t = i.from(e);
            else {
                t = new i(e.length);
                for (var n = 0, a = e.length; n < a; n++) t[n] = e[n]
            }
        }
    } else if (!rc[r] && !fa(e) && !tu(e)) {
        t = {};
        for (var o in e) e.hasOwnProperty(o) && o !== Ku && (t[o] = J(e[o]))
    }
    return t
}

function ut(e, t, r) {
    if (!Y(t) || !Y(e)) return r ? J(t) : e;
    for (var n in t)
        if (t.hasOwnProperty(n) && n !== Ku) {
            var a = e[n],
                i = t[n];
            Y(i) && Y(a) && !B(i) && !B(a) && !tu(i) && !tu(a) && !Jl(i) && !Jl(a) && !fa(i) && !fa(a) ? ut(a, i, r) : (r || !(n in e)) && (e[n] = J(t[n]))
        } return e
}

function Lx(e, t) {
    for (var r = e[0], n = 1, a = e.length; n < a; n++) r = ut(r, e[n], t);
    return r
}

function O(e, t) {
    if (Object.assign) Object.assign(e, t);
    else
        for (var r in t) t.hasOwnProperty(r) && r !== Ku && (e[r] = t[r]);
    return e
}

function j(e, t, r) {
    for (var n = lt(t), a = 0; a < n.length; a++) {
        var i = n[a];
        (r ? t[i] != null : e[i] == null) && (e[i] = t[i])
    }
    return e
}

function ct(e, t) {
    if (e) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r
    }
    return -1
}

function h0(e, t) {
    var r = e.prototype;

    function n() {}
    n.prototype = t.prototype, e.prototype = new n;
    for (var a in r) r.hasOwnProperty(a) && (e.prototype[a] = r[a]);
    e.prototype.constructor = e, e.superClass = t
}

function ke(e, t, r) {
    if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
        for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
            var i = n[a];
            i !== "constructor" && (r ? t[i] != null : e[i] == null) && (e[i] = t[i])
        } else j(e, t, r)
}

function Bt(e) {
    return !e || typeof e == "string" ? !1 : typeof e.length == "number"
}

function A(e, t, r) {
    if (e && t)
        if (e.forEach && e.forEach === s0) e.forEach(t, r);
        else if (e.length === +e.length)
        for (var n = 0, a = e.length; n < a; n++) t.call(r, e[n], n, e);
    else
        for (var i in e) e.hasOwnProperty(i) && t.call(r, e[i], i, e)
}

function V(e, t, r) {
    if (!e) return [];
    if (!t) return Ju(e);
    if (e.map && e.map === l0) return e.map(t, r);
    for (var n = [], a = 0, i = e.length; a < i; a++) n.push(t.call(r, e[a], a, e));
    return n
}

function ur(e, t, r, n) {
    if (e && t) {
        for (var a = 0, i = e.length; a < i; a++) r = t.call(n, r, e[a], a, e);
        return r
    }
}

function Wt(e, t, r) {
    if (!e) return [];
    if (!t) return Ju(e);
    if (e.filter && e.filter === u0) return e.filter(t, r);
    for (var n = [], a = 0, i = e.length; a < i; a++) t.call(r, e[a], a, e) && n.push(e[a]);
    return n
}

function v0(e, t, r) {
    if (e && t) {
        for (var n = 0, a = e.length; n < a; n++)
            if (t.call(r, e[n], n, e)) return e[n]
    }
}

function lt(e) {
    if (!e) return [];
    if (Object.keys) return Object.keys(e);
    var t = [];
    for (var r in e) e.hasOwnProperty(r) && t.push(r);
    return t
}

function c0(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    return function () {
        return e.apply(t, r.concat(Zu.call(arguments)))
    }
}
var _t = za && Q(za.bind) ? za.call.bind(za.bind) : c0;

function Xr(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return function () {
        return e.apply(this, t.concat(Zu.call(arguments)))
    }
}

function B(e) {
    return Array.isArray ? Array.isArray(e) : An.call(e) === "[object Array]"
}

function Q(e) {
    return typeof e == "function"
}

function U(e) {
    return typeof e == "string"
}

function js(e) {
    return An.call(e) === "[object String]"
}

function it(e) {
    return typeof e == "number"
}

function Y(e) {
    var t = typeof e;
    return t === "function" || !!e && t === "object"
}

function Jl(e) {
    return !!rc[An.call(e)]
}

function zt(e) {
    return !!nc[An.call(e)]
}

function tu(e) {
    return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object"
}

function Qu(e) {
    return e.colorStops != null
}

function Ix(e) {
    return e.image != null
}

function Px(e) {
    return An.call(e) === "[object RegExp]"
}

function Fi(e) {
    return e !== e
}

function Bi() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    for (var r = 0, n = e.length; r < n; r++)
        if (e[r] != null) return e[r]
}

function X(e, t) {
    return e ? ? t
}

function la(e, t, r) {
    return e ? ? t ? ? r
}

function Ju(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return Zu.apply(e, t)
}

function oc(e) {
    if (typeof e == "number") return [e, e, e, e];
    var t = e.length;
    return t === 2 ? [e[0], e[1], e[0], e[1]] : t === 3 ? [e[0], e[1], e[2], e[1]] : e
}

function Re(e, t) {
    if (!e) throw new Error(t)
}

function Ve(e) {
    return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}
var sc = "__ec_primitive__";

function zi(e) {
    e[sc] = !0
}

function fa(e) {
    return e[sc]
}
var d0 = function () {
        function e() {
            this.data = {}
        }
        return e.prototype.delete = function (t) {
            var r = this.has(t);
            return r && delete this.data[t], r
        }, e.prototype.has = function (t) {
            return this.data.hasOwnProperty(t)
        }, e.prototype.get = function (t) {
            return this.data[t]
        }, e.prototype.set = function (t, r) {
            return this.data[t] = r, this
        }, e.prototype.keys = function () {
            return lt(this.data)
        }, e.prototype.forEach = function (t) {
            var r = this.data;
            for (var n in r) r.hasOwnProperty(n) && t(r[n], n)
        }, e
    }(),
    uc = typeof Map == "function";

function p0() {
    return uc ? new Map : new d0
}
var g0 = function () {
    function e(t) {
        var r = B(t);
        this.data = p0();
        var n = this;
        t instanceof e ? t.each(a) : t && A(t, a);

        function a(i, o) {
            r ? n.set(i, o) : n.set(o, i)
        }
    }
    return e.prototype.hasKey = function (t) {
        return this.data.has(t)
    }, e.prototype.get = function (t) {
        return this.data.get(t)
    }, e.prototype.set = function (t, r) {
        return this.data.set(t, r), r
    }, e.prototype.each = function (t, r) {
        this.data.forEach(function (n, a) {
            t.call(r, n, a)
        })
    }, e.prototype.keys = function () {
        var t = this.data.keys();
        return uc ? Array.from(t) : t
    }, e.prototype.removeKey = function (t) {
        this.data.delete(t)
    }, e
}();

function K(e) {
    return new g0(e)
}

function y0(e, t) {
    for (var r = new e.constructor(e.length + t.length), n = 0; n < e.length; n++) r[n] = e[n];
    for (var a = e.length, n = 0; n < t.length; n++) r[n + a] = t[n];
    return r
}

function po(e, t) {
    var r;
    if (Object.create) r = Object.create(e);
    else {
        var n = function () {};
        n.prototype = e, r = new n
    }
    return t && O(r, t), r
}

function Rx(e) {
    var t = e.style;
    t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none"
}

function Ur(e, t) {
    return e.hasOwnProperty(t)
}

function ee() {}
var Mi = 180 / Math.PI;

function Ln(e, t) {
    return e == null && (e = 0), t == null && (t = 0), [e, t]
}

function Ex(e, t) {
    return e[0] = t[0], e[1] = t[1], e
}

function m0(e) {
    return [e[0], e[1]]
}

function kx(e, t, r) {
    return e[0] = t, e[1] = r, e
}

function jl(e, t, r) {
    return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
}

function Ox(e, t, r, n) {
    return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e
}

function _0(e, t, r) {
    return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
}

function S0(e) {
    return Math.sqrt(w0(e))
}

function w0(e) {
    return e[0] * e[0] + e[1] * e[1]
}

function Vo(e, t, r) {
    return e[0] = t[0] * r, e[1] = t[1] * r, e
}

function b0(e, t) {
    var r = S0(t);
    return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e
}

function eu(e, t) {
    return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
}
var ru = eu;

function T0(e, t) {
    return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
}
var Sn = T0;

function Go(e, t, r, n) {
    return e[0] = t[0] + n * (r[0] - t[0]), e[1] = t[1] + n * (r[1] - t[1]), e
}

function Pe(e, t, r) {
    var n = t[0],
        a = t[1];
    return e[0] = r[0] * n + r[2] * a + r[4], e[1] = r[1] * n + r[3] * a + r[5], e
}

function gn(e, t, r) {
    return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e
}

function yn(e, t, r) {
    return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e
}
var tn = function () {
        function e(t, r) {
            this.target = t, this.topTarget = r && r.topTarget
        }
        return e
    }(),
    M0 = function () {
        function e(t) {
            this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
        }
        return e.prototype._dragStart = function (t) {
            for (var r = t.target; r && !r.draggable;) r = r.parent || r.__hostTarget;
            r && (this._draggingTarget = r, r.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new tn(r, t), "dragstart", t.event))
        }, e.prototype._drag = function (t) {
            var r = this._draggingTarget;
            if (r) {
                var n = t.offsetX,
                    a = t.offsetY,
                    i = n - this._x,
                    o = a - this._y;
                this._x = n, this._y = a, r.drift(i, o, t), this.handler.dispatchToElement(new tn(r, t), "drag", t.event);
                var s = this.handler.findHover(n, a, r).target,
                    u = this._dropTarget;
                this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new tn(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new tn(s, t), "dragenter", t.event))
            }
        }, e.prototype._dragEnd = function (t) {
            var r = this._draggingTarget;
            r && (r.dragging = !1), this.handler.dispatchToElement(new tn(r, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new tn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }, e
    }(),
    x0 = function () {
        function e(t) {
            t && (this._$eventProcessor = t)
        }
        return e.prototype.on = function (t, r, n, a) {
            this._$handlers || (this._$handlers = {});
            var i = this._$handlers;
            if (typeof r == "function" && (a = n, n = r, r = null), !n || !t) return this;
            var o = this._$eventProcessor;
            r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), i[t] || (i[t] = []);
            for (var s = 0; s < i[t].length; s++)
                if (i[t][s].h === n) return this;
            var u = {
                    h: n,
                    query: r,
                    ctx: a || this,
                    callAtLast: n.zrEventfulCallAtLast
                },
                l = i[t].length - 1,
                f = i[t][l];
            return f && f.callAtLast ? i[t].splice(l, 0, u) : i[t].push(u), this
        }, e.prototype.isSilent = function (t) {
            var r = this._$handlers;
            return !r || !r[t] || !r[t].length
        }, e.prototype.off = function (t, r) {
            var n = this._$handlers;
            if (!n) return this;
            if (!t) return this._$handlers = {}, this;
            if (r) {
                if (n[t]) {
                    for (var a = [], i = 0, o = n[t].length; i < o; i++) n[t][i].h !== r && a.push(n[t][i]);
                    n[t] = a
                }
                n[t] && n[t].length === 0 && delete n[t]
            } else delete n[t];
            return this
        }, e.prototype.trigger = function (t) {
            for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
            if (!this._$handlers) return this;
            var a = this._$handlers[t],
                i = this._$eventProcessor;
            if (a)
                for (var o = r.length, s = a.length, u = 0; u < s; u++) {
                    var l = a[u];
                    if (!(i && i.filter && l.query != null && !i.filter(t, l.query))) switch (o) {
                        case 0:
                            l.h.call(l.ctx);
                            break;
                        case 1:
                            l.h.call(l.ctx, r[0]);
                            break;
                        case 2:
                            l.h.call(l.ctx, r[0], r[1]);
                            break;
                        default:
                            l.h.apply(l.ctx, r);
                            break
                    }
                }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }, e.prototype.triggerWithContext = function (t) {
            for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
            if (!this._$handlers) return this;
            var a = this._$handlers[t],
                i = this._$eventProcessor;
            if (a)
                for (var o = r.length, s = r[o - 1], u = a.length, l = 0; l < u; l++) {
                    var f = a[l];
                    if (!(i && i.filter && f.query != null && !i.filter(t, f.query))) switch (o) {
                        case 0:
                            f.h.call(s);
                            break;
                        case 1:
                            f.h.call(s, r[0]);
                            break;
                        case 2:
                            f.h.call(s, r[0], r[1]);
                            break;
                        default:
                            f.h.apply(s, r.slice(1, o - 1));
                            break
                    }
                }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }, e
    }();
const Ue = x0;
var D0 = Math.log(2);

function nu(e, t, r, n, a, i) {
    var o = n + "-" + a,
        s = e.length;
    if (i.hasOwnProperty(o)) return i[o];
    if (t === 1) {
        var u = Math.round(Math.log((1 << s) - 1 & ~a) / D0);
        return e[r][u]
    }
    for (var l = n | 1 << r, f = r + 1; n & 1 << f;) f++;
    for (var h = 0, c = 0, v = 0; c < s; c++) {
        var d = 1 << c;
        d & a || (h += (v % 2 ? -1 : 1) * e[r][c] * nu(e, t - 1, f, l, a | d, i), v++)
    }
    return i[o] = h, h
}

function tf(e, t) {
    var r = [
            [e[0], e[1], 1, 0, 0, 0, -t[0] * e[0], -t[0] * e[1]],
            [0, 0, 0, e[0], e[1], 1, -t[1] * e[0], -t[1] * e[1]],
            [e[2], e[3], 1, 0, 0, 0, -t[2] * e[2], -t[2] * e[3]],
            [0, 0, 0, e[2], e[3], 1, -t[3] * e[2], -t[3] * e[3]],
            [e[4], e[5], 1, 0, 0, 0, -t[4] * e[4], -t[4] * e[5]],
            [0, 0, 0, e[4], e[5], 1, -t[5] * e[4], -t[5] * e[5]],
            [e[6], e[7], 1, 0, 0, 0, -t[6] * e[6], -t[6] * e[7]],
            [0, 0, 0, e[6], e[7], 1, -t[7] * e[6], -t[7] * e[7]]
        ],
        n = {},
        a = nu(r, 8, 0, 0, 0, n);
    if (a !== 0) {
        for (var i = [], o = 0; o < 8; o++)
            for (var s = 0; s < 8; s++) i[s] == null && (i[s] = 0), i[s] += ((o + s) % 2 ? -1 : 1) * nu(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / a * t[o];
        return function (u, l, f) {
            var h = l * i[6] + f * i[7] + 1;
            u[0] = (l * i[0] + f * i[1] + i[2]) / h, u[1] = (l * i[3] + f * i[4] + i[5]) / h
        }
    }
}
var ef = "___zrEVENTSAVED",
    Ho = [];

function Nx(e, t, r, n, a) {
    return au(Ho, t, n, a, !0) && au(e, r, Ho[0], Ho[1])
}

function au(e, t, r, n, a) {
    if (t.getBoundingClientRect && et.domSupported && !lc(t)) {
        var i = t[ef] || (t[ef] = {}),
            o = C0(t, i),
            s = A0(o, i, a);
        if (s) return s(e, r, n), !0
    }
    return !1
}

function C0(e, t) {
    var r = t.markers;
    if (r) return r;
    r = t.markers = [];
    for (var n = ["left", "right"], a = ["top", "bottom"], i = 0; i < 4; i++) {
        var o = document.createElement("div"),
            s = o.style,
            u = i % 2,
            l = (i >> 1) % 2;
        s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[u] + ":0", a[l] + ":0", n[1 - u] + ":auto", a[1 - l] + ":auto", ""].join("!important;"), e.appendChild(o), r.push(o)
    }
    return r
}

function A0(e, t, r) {
    for (var n = r ? "invTrans" : "trans", a = t[n], i = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
        var f = e[l].getBoundingClientRect(),
            h = 2 * l,
            c = f.left,
            v = f.top;
        o.push(c, v), u = u && i && c === i[h] && v === i[h + 1], s.push(e[l].offsetLeft, e[l].offsetTop)
    }
    return u && a ? a : (t.srcCoords = o, t[n] = r ? tf(s, o) : tf(o, s))
}

function lc(e) {
    return e.nodeName.toUpperCase() === "CANVAS"
}
var L0 = /([&<>"'])/g,
    I0 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

function Ut(e) {
    return e == null ? "" : (e + "").replace(L0, function (t, r) {
        return I0[r]
    })
}
var P0 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Wo = [],
    R0 = et.browser.firefox && +et.browser.version.split(".")[0] < 39;

function iu(e, t, r, n) {
    return r = r || {}, n ? rf(e, t, r) : R0 && t.layerX != null && t.layerX !== t.offsetX ? (r.zrX = t.layerX, r.zrY = t.layerY) : t.offsetX != null ? (r.zrX = t.offsetX, r.zrY = t.offsetY) : rf(e, t, r), r
}

function rf(e, t, r) {
    if (et.domSupported && e.getBoundingClientRect) {
        var n = t.clientX,
            a = t.clientY;
        if (lc(e)) {
            var i = e.getBoundingClientRect();
            r.zrX = n - i.left, r.zrY = a - i.top;
            return
        } else if (au(Wo, e, n, a)) {
            r.zrX = Wo[0], r.zrY = Wo[1];
            return
        }
    }
    r.zrX = r.zrY = 0
}

function ju(e) {
    return e || window.event
}

function ue(e, t, r) {
    if (t = ju(t), t.zrX != null) return t;
    var n = t.type,
        a = n && n.indexOf("touch") >= 0;
    if (a) {
        var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
        o && iu(e, o, t, r)
    } else {
        iu(e, t, t, r);
        var i = E0(t);
        t.zrDelta = i ? i / 120 : -(t.detail || 0) / 3
    }
    var s = t.button;
    return t.which == null && s !== void 0 && P0.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t
}

function E0(e) {
    var t = e.wheelDelta;
    if (t) return t;
    var r = e.deltaX,
        n = e.deltaY;
    if (r == null || n == null) return t;
    var a = Math.abs(n !== 0 ? n : r),
        i = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
    return 3 * a * i
}

function k0(e, t, r, n) {
    e.addEventListener(t, r, n)
}

function O0(e, t, r, n) {
    e.removeEventListener(t, r, n)
}
var N0 = function (e) {
    e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0
};

function Fx(e) {
    return e.which === 2 || e.which === 3
}
var F0 = function () {
    function e() {
        this._track = []
    }
    return e.prototype.recognize = function (t, r, n) {
        return this._doTrack(t, r, n), this._recognize(t)
    }, e.prototype.clear = function () {
        return this._track.length = 0, this
    }, e.prototype._doTrack = function (t, r, n) {
        var a = t.touches;
        if (a) {
            for (var i = {
                    points: [],
                    touches: [],
                    target: r,
                    event: t
                }, o = 0, s = a.length; o < s; o++) {
                var u = a[o],
                    l = iu(n, u, {});
                i.points.push([l.zrX, l.zrY]), i.touches.push(u)
            }
            this._track.push(i)
        }
    }, e.prototype._recognize = function (t) {
        for (var r in Uo)
            if (Uo.hasOwnProperty(r)) {
                var n = Uo[r](this._track, t);
                if (n) return n
            }
    }, e
}();

function nf(e) {
    var t = e[1][0] - e[0][0],
        r = e[1][1] - e[0][1];
    return Math.sqrt(t * t + r * r)
}

function B0(e) {
    return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
}
var Uo = {
    pinch: function (e, t) {
        var r = e.length;
        if (r) {
            var n = (e[r - 1] || {}).points,
                a = (e[r - 2] || {}).points || n;
            if (a && a.length > 1 && n && n.length > 1) {
                var i = nf(n) / nf(a);
                !isFinite(i) && (i = 1), t.pinchScale = i;
                var o = B0(n);
                return t.pinchX = o[0], t.pinchY = o[1], {
                    type: "pinch",
                    target: e[0].target,
                    event: t
                }
            }
        }
    }
};

function wn() {
    return [1, 0, 0, 1, 0, 0]
}

function tl(e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
}

function fc(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
}

function bn(e, t, r) {
    var n = t[0] * r[0] + t[2] * r[1],
        a = t[1] * r[0] + t[3] * r[1],
        i = t[0] * r[2] + t[2] * r[3],
        o = t[1] * r[2] + t[3] * r[3],
        s = t[0] * r[4] + t[2] * r[5] + t[4],
        u = t[1] * r[4] + t[3] * r[5] + t[5];
    return e[0] = n, e[1] = a, e[2] = i, e[3] = o, e[4] = s, e[5] = u, e
}

function af(e, t, r) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e
}

function hc(e, t, r, n) {
    n === void 0 && (n = [0, 0]);
    var a = t[0],
        i = t[2],
        o = t[4],
        s = t[1],
        u = t[3],
        l = t[5],
        f = Math.sin(r),
        h = Math.cos(r);
    return e[0] = a * h + s * f, e[1] = -a * f + s * h, e[2] = i * h + u * f, e[3] = -i * f + h * u, e[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], e[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], e
}

function z0(e, t, r) {
    var n = r[0],
        a = r[1];
    return e[0] = t[0] * n, e[1] = t[1] * a, e[2] = t[2] * n, e[3] = t[3] * a, e[4] = t[4] * n, e[5] = t[5] * a, e
}

function el(e, t) {
    var r = t[0],
        n = t[2],
        a = t[4],
        i = t[1],
        o = t[3],
        s = t[5],
        u = r * o - i * n;
    return u ? (u = 1 / u, e[0] = o * u, e[1] = -i * u, e[2] = -n * u, e[3] = r * u, e[4] = (n * s - o * a) * u, e[5] = (i * a - r * s) * u, e) : null
}

function Bx(e) {
    var t = wn();
    return fc(t, e), t
}
var W = function () {
        function e(t, r) {
            this.x = t || 0, this.y = r || 0
        }
        return e.prototype.copy = function (t) {
            return this.x = t.x, this.y = t.y, this
        }, e.prototype.clone = function () {
            return new e(this.x, this.y)
        }, e.prototype.set = function (t, r) {
            return this.x = t, this.y = r, this
        }, e.prototype.equal = function (t) {
            return t.x === this.x && t.y === this.y
        }, e.prototype.add = function (t) {
            return this.x += t.x, this.y += t.y, this
        }, e.prototype.scale = function (t) {
            this.x *= t, this.y *= t
        }, e.prototype.scaleAndAdd = function (t, r) {
            this.x += t.x * r, this.y += t.y * r
        }, e.prototype.sub = function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, e.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y
        }, e.prototype.len = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, e.prototype.lenSquare = function () {
            return this.x * this.x + this.y * this.y
        }, e.prototype.normalize = function () {
            var t = this.len();
            return this.x /= t, this.y /= t, this
        }, e.prototype.distance = function (t) {
            var r = this.x - t.x,
                n = this.y - t.y;
            return Math.sqrt(r * r + n * n)
        }, e.prototype.distanceSquare = function (t) {
            var r = this.x - t.x,
                n = this.y - t.y;
            return r * r + n * n
        }, e.prototype.negate = function () {
            return this.x = -this.x, this.y = -this.y, this
        }, e.prototype.transform = function (t) {
            if (t) {
                var r = this.x,
                    n = this.y;
                return this.x = t[0] * r + t[2] * n + t[4], this.y = t[1] * r + t[3] * n + t[5], this
            }
        }, e.prototype.toArray = function (t) {
            return t[0] = this.x, t[1] = this.y, t
        }, e.prototype.fromArray = function (t) {
            this.x = t[0], this.y = t[1]
        }, e.set = function (t, r, n) {
            t.x = r, t.y = n
        }, e.copy = function (t, r) {
            t.x = r.x, t.y = r.y
        }, e.len = function (t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }, e.lenSquare = function (t) {
            return t.x * t.x + t.y * t.y
        }, e.dot = function (t, r) {
            return t.x * r.x + t.y * r.y
        }, e.add = function (t, r, n) {
            t.x = r.x + n.x, t.y = r.y + n.y
        }, e.sub = function (t, r, n) {
            t.x = r.x - n.x, t.y = r.y - n.y
        }, e.scale = function (t, r, n) {
            t.x = r.x * n, t.y = r.y * n
        }, e.scaleAndAdd = function (t, r, n, a) {
            t.x = r.x + n.x * a, t.y = r.y + n.y * a
        }, e.lerp = function (t, r, n, a) {
            var i = 1 - a;
            t.x = i * r.x + a * n.x, t.y = i * r.y + a * n.y
        }, e
    }(),
    Va = Math.min,
    Ga = Math.max,
    cr = new W,
    dr = new W,
    pr = new W,
    gr = new W,
    Nn = new W,
    Fn = new W,
    V0 = function () {
        function e(t, r, n, a) {
            n < 0 && (t = t + n, n = -n), a < 0 && (r = r + a, a = -a), this.x = t, this.y = r, this.width = n, this.height = a
        }
        return e.prototype.union = function (t) {
            var r = Va(t.x, this.x),
                n = Va(t.y, this.y);
            isFinite(this.x) && isFinite(this.width) ? this.width = Ga(t.x + t.width, this.x + this.width) - r : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Ga(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = r, this.y = n
        }, e.prototype.applyTransform = function (t) {
            e.applyTransform(this, this, t)
        }, e.prototype.calculateTransform = function (t) {
            var r = this,
                n = t.width / r.width,
                a = t.height / r.height,
                i = wn();
            return af(i, i, [-r.x, -r.y]), z0(i, i, [n, a]), af(i, i, [t.x, t.y]), i
        }, e.prototype.intersect = function (t, r) {
            if (!t) return !1;
            t instanceof e || (t = e.create(t));
            var n = this,
                a = n.x,
                i = n.x + n.width,
                o = n.y,
                s = n.y + n.height,
                u = t.x,
                l = t.x + t.width,
                f = t.y,
                h = t.y + t.height,
                c = !(i < u || l < a || s < f || h < o);
            if (r) {
                var v = 1 / 0,
                    d = 0,
                    y = Math.abs(i - u),
                    p = Math.abs(l - a),
                    g = Math.abs(s - f),
                    m = Math.abs(h - o),
                    _ = Math.min(y, p),
                    S = Math.min(g, m);
                i < u || l < a ? _ > d && (d = _, y < p ? W.set(Fn, -y, 0) : W.set(Fn, p, 0)) : _ < v && (v = _, y < p ? W.set(Nn, y, 0) : W.set(Nn, -p, 0)), s < f || h < o ? S > d && (d = S, g < m ? W.set(Fn, 0, -g) : W.set(Fn, 0, m)) : _ < v && (v = _, g < m ? W.set(Nn, 0, g) : W.set(Nn, 0, -m))
            }
            return r && W.copy(r, c ? Nn : Fn), c
        }, e.prototype.contain = function (t, r) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && r >= n.y && r <= n.y + n.height
        }, e.prototype.clone = function () {
            return new e(this.x, this.y, this.width, this.height)
        }, e.prototype.copy = function (t) {
            e.copy(this, t)
        }, e.prototype.plain = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }, e.prototype.isFinite = function () {
            return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
        }, e.prototype.isZero = function () {
            return this.width === 0 || this.height === 0
        }, e.create = function (t) {
            return new e(t.x, t.y, t.width, t.height)
        }, e.copy = function (t, r) {
            t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height
        }, e.applyTransform = function (t, r, n) {
            if (!n) {
                t !== r && e.copy(t, r);
                return
            }
            if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
                var a = n[0],
                    i = n[3],
                    o = n[4],
                    s = n[5];
                t.x = r.x * a + o, t.y = r.y * i + s, t.width = r.width * a, t.height = r.height * i, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
                return
            }
            cr.x = pr.x = r.x, cr.y = gr.y = r.y, dr.x = gr.x = r.x + r.width, dr.y = pr.y = r.y + r.height, cr.transform(n), gr.transform(n), dr.transform(n), pr.transform(n), t.x = Va(cr.x, dr.x, pr.x, gr.x), t.y = Va(cr.y, dr.y, pr.y, gr.y);
            var u = Ga(cr.x, dr.x, pr.x, gr.x),
                l = Ga(cr.y, dr.y, pr.y, gr.y);
            t.width = u - t.x, t.height = l - t.y
        }, e
    }();
const ot = V0;
var vc = "silent";

function G0(e, t, r) {
    return {
        type: e,
        event: r,
        target: t.target,
        topTarget: t.topTarget,
        cancelBubble: !1,
        offsetX: r.zrX,
        offsetY: r.zrY,
        gestureEvent: r.gestureEvent,
        pinchX: r.pinchX,
        pinchY: r.pinchY,
        pinchScale: r.pinchScale,
        wheelDelta: r.zrDelta,
        zrByTouch: r.zrByTouch,
        which: r.which,
        stop: H0
    }
}

function H0() {
    N0(this.event)
}
var W0 = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.handler = null, r
        }
        return t.prototype.dispose = function () {}, t.prototype.setCursor = function () {}, t
    }(Ue),
    Bn = function () {
        function e(t, r) {
            this.x = t, this.y = r
        }
        return e
    }(),
    U0 = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Yo = new ot(0, 0, 0, 0),
    cc = function (e) {
        G(t, e);

        function t(r, n, a, i, o) {
            var s = e.call(this) || this;
            return s._hovered = new Bn(0, 0), s.storage = r, s.painter = n, s.painterRoot = i, s._pointerSize = o, a = a || new W0, s.proxy = null, s.setHandlerProxy(a), s._draggingMgr = new M0(s), s
        }
        return t.prototype.setHandlerProxy = function (r) {
            this.proxy && this.proxy.dispose(), r && (A(U0, function (n) {
                r.on && r.on(n, this[n], this)
            }, this), r.handler = this), this.proxy = r
        }, t.prototype.mousemove = function (r) {
            var n = r.zrX,
                a = r.zrY,
                i = dc(this, n, a),
                o = this._hovered,
                s = o.target;
            s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
            var u = this._hovered = i ? new Bn(n, a) : this.findHover(n, a),
                l = u.target,
                f = this.proxy;
            f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r)
        }, t.prototype.mouseout = function (r) {
            var n = r.zrEventControl;
            n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", {
                type: "globalout",
                event: r
            })
        }, t.prototype.resize = function () {
            this._hovered = new Bn(0, 0)
        }, t.prototype.dispatch = function (r, n) {
            var a = this[r];
            a && a.call(this, n)
        }, t.prototype.dispose = function () {
            this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
        }, t.prototype.setCursorStyle = function (r) {
            var n = this.proxy;
            n.setCursor && n.setCursor(r)
        }, t.prototype.dispatchToElement = function (r, n, a) {
            r = r || {};
            var i = r.target;
            if (!(i && i.silent)) {
                for (var o = "on" + n, s = G0(n, r, a); i && (i[o] && (s.cancelBubble = !!i[o].call(i, s)), i.trigger(n, s), i = i.__hostTarget ? i.__hostTarget : i.parent, !s.cancelBubble););
                s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function (u) {
                    typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s)
                }))
            }
        }, t.prototype.findHover = function (r, n, a) {
            var i = this.storage.getDisplayList(),
                o = new Bn(r, n);
            if ( of (i, o, r, n, a), this._pointerSize && !o.target) {
                for (var s = [], u = this._pointerSize, l = u / 2, f = new ot(r - l, n - l, u, u), h = i.length - 1; h >= 0; h--) {
                    var c = i[h];
                    c !== a && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Yo.copy(c.getBoundingRect()), c.transform && Yo.applyTransform(c.transform), Yo.intersect(f) && s.push(c))
                }
                if (s.length)
                    for (var v = 4, d = Math.PI / 12, y = Math.PI * 2, p = 0; p < l; p += v)
                        for (var g = 0; g < y; g += d) {
                            var m = r + p * Math.cos(g),
                                _ = n + p * Math.sin(g);
                            if ( of (s, o, m, _, a), o.target) return o
                        }
            }
            return o
        }, t.prototype.processGesture = function (r, n) {
            this._gestureMgr || (this._gestureMgr = new F0);
            var a = this._gestureMgr;
            n === "start" && a.clear();
            var i = a.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
            if (n === "end" && a.clear(), i) {
                var o = i.type;
                r.gestureEvent = o;
                var s = new Bn;
                s.target = i.target, this.dispatchToElement(s, o, i.event)
            }
        }, t
    }(Ue);
A(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (e) {
    cc.prototype[e] = function (t) {
        var r = t.zrX,
            n = t.zrY,
            a = dc(this, r, n),
            i, o;
        if ((e !== "mouseup" || !a) && (i = this.findHover(r, n), o = i.target), e === "mousedown") this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
        else if (e === "mouseup") this._upEl = o;
        else if (e === "click") {
            if (this._downEl !== this._upEl || !this._downPoint || ru(this._downPoint, [t.zrX, t.zrY]) > 4) return;
            this._downPoint = null
        }
        this.dispatchToElement(i, e, t)
    }
});

function Y0(e, t, r) {
    if (e[e.rectHover ? "rectContain" : "contain"](t, r)) {
        for (var n = e, a = void 0, i = !1; n;) {
            if (n.ignoreClip && (i = !0), !i) {
                var o = n.getClipPath();
                if (o && !o.contain(t, r)) return !1
            }
            n.silent && (a = !0);
            var s = n.__hostTarget;
            n = s || n.parent
        }
        return a ? vc : !0
    }
    return !1
}

function of (e, t, r, n, a) {
    for (var i = e.length - 1; i >= 0; i--) {
        var o = e[i],
            s = void 0;
        if (o !== a && !o.ignore && (s = Y0(o, r, n)) && (!t.topTarget && (t.topTarget = o), s !== vc)) {
            t.target = o;
            break
        }
    }
}

function dc(e, t, r) {
    var n = e.painter;
    return t < 0 || t > n.getWidth() || r < 0 || r > n.getHeight()
}
const $0 = cc;
var pc = 32,
    zn = 7;

function X0(e) {
    for (var t = 0; e >= pc;) t |= e & 1, e >>= 1;
    return e + t
}

function sf(e, t, r, n) {
    var a = t + 1;
    if (a === r) return 1;
    if (n(e[a++], e[t]) < 0) {
        for (; a < r && n(e[a], e[a - 1]) < 0;) a++;
        q0(e, t, a)
    } else
        for (; a < r && n(e[a], e[a - 1]) >= 0;) a++;
    return a - t
}

function q0(e, t, r) {
    for (r--; t < r;) {
        var n = e[t];
        e[t++] = e[r], e[r--] = n
    }
}

function uf(e, t, r, n, a) {
    for (n === t && n++; n < r; n++) {
        for (var i = e[n], o = t, s = n, u; o < s;) u = o + s >>> 1, a(i, e[u]) < 0 ? s = u : o = u + 1;
        var l = n - o;
        switch (l) {
            case 3:
                e[o + 3] = e[o + 2];
            case 2:
                e[o + 2] = e[o + 1];
            case 1:
                e[o + 1] = e[o];
                break;
            default:
                for (; l > 0;) e[o + l] = e[o + l - 1], l--
        }
        e[o] = i
    }
}

function $o(e, t, r, n, a, i) {
    var o = 0,
        s = 0,
        u = 1;
    if (i(e, t[r + a]) > 0) {
        for (s = n - a; u < s && i(e, t[r + a + u]) > 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s), o += a, u += a
    } else {
        for (s = a + 1; u < s && i(e, t[r + a - u]) <= 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s);
        var l = o;
        o = a - u, u = a - l
    }
    for (o++; o < u;) {
        var f = o + (u - o >>> 1);
        i(e, t[r + f]) > 0 ? o = f + 1 : u = f
    }
    return u
}

function Xo(e, t, r, n, a, i) {
    var o = 0,
        s = 0,
        u = 1;
    if (i(e, t[r + a]) < 0) {
        for (s = a + 1; u < s && i(e, t[r + a - u]) < 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s);
        var l = o;
        o = a - u, u = a - l
    } else {
        for (s = n - a; u < s && i(e, t[r + a + u]) >= 0;) o = u, u = (u << 1) + 1, u <= 0 && (u = s);
        u > s && (u = s), o += a, u += a
    }
    for (o++; o < u;) {
        var f = o + (u - o >>> 1);
        i(e, t[r + f]) < 0 ? u = f : o = f + 1
    }
    return u
}

function Z0(e, t) {
    var r = zn,
        n, a, i = 0,
        o = [];
    n = [], a = [];

    function s(v, d) {
        n[i] = v, a[i] = d, i += 1
    }

    function u() {
        for (; i > 1;) {
            var v = i - 2;
            if (v >= 1 && a[v - 1] <= a[v] + a[v + 1] || v >= 2 && a[v - 2] <= a[v] + a[v - 1]) a[v - 1] < a[v + 1] && v--;
            else if (a[v] > a[v + 1]) break;
            f(v)
        }
    }

    function l() {
        for (; i > 1;) {
            var v = i - 2;
            v > 0 && a[v - 1] < a[v + 1] && v--, f(v)
        }
    }

    function f(v) {
        var d = n[v],
            y = a[v],
            p = n[v + 1],
            g = a[v + 1];
        a[v] = y + g, v === i - 3 && (n[v + 1] = n[v + 2], a[v + 1] = a[v + 2]), i--;
        var m = Xo(e[p], e, d, y, 0, t);
        d += m, y -= m, y !== 0 && (g = $o(e[d + y - 1], e, p, g, g - 1, t), g !== 0 && (y <= g ? h(d, y, p, g) : c(d, y, p, g)))
    }

    function h(v, d, y, p) {
        var g = 0;
        for (g = 0; g < d; g++) o[g] = e[v + g];
        var m = 0,
            _ = y,
            S = v;
        if (e[S++] = e[_++], --p === 0) {
            for (g = 0; g < d; g++) e[S + g] = o[m + g];
            return
        }
        if (d === 1) {
            for (g = 0; g < p; g++) e[S + g] = e[_ + g];
            e[S + p] = o[m];
            return
        }
        for (var b = r, w, x, T;;) {
            w = 0, x = 0, T = !1;
            do
                if (t(e[_], o[m]) < 0) {
                    if (e[S++] = e[_++], x++, w = 0, --p === 0) {
                        T = !0;
                        break
                    }
                } else if (e[S++] = o[m++], w++, x = 0, --d === 1) {
                T = !0;
                break
            } while ((w | x) < b);
            if (T) break;
            do {
                if (w = Xo(e[_], o, m, d, 0, t), w !== 0) {
                    for (g = 0; g < w; g++) e[S + g] = o[m + g];
                    if (S += w, m += w, d -= w, d <= 1) {
                        T = !0;
                        break
                    }
                }
                if (e[S++] = e[_++], --p === 0) {
                    T = !0;
                    break
                }
                if (x = $o(o[m], e, _, p, 0, t), x !== 0) {
                    for (g = 0; g < x; g++) e[S + g] = e[_ + g];
                    if (S += x, _ += x, p -= x, p === 0) {
                        T = !0;
                        break
                    }
                }
                if (e[S++] = o[m++], --d === 1) {
                    T = !0;
                    break
                }
                b--
            } while (w >= zn || x >= zn);
            if (T) break;
            b < 0 && (b = 0), b += 2
        }
        if (r = b, r < 1 && (r = 1), d === 1) {
            for (g = 0; g < p; g++) e[S + g] = e[_ + g];
            e[S + p] = o[m]
        } else {
            if (d === 0) throw new Error;
            for (g = 0; g < d; g++) e[S + g] = o[m + g]
        }
    }

    function c(v, d, y, p) {
        var g = 0;
        for (g = 0; g < p; g++) o[g] = e[y + g];
        var m = v + d - 1,
            _ = p - 1,
            S = y + p - 1,
            b = 0,
            w = 0;
        if (e[S--] = e[m--], --d === 0) {
            for (b = S - (p - 1), g = 0; g < p; g++) e[b + g] = o[g];
            return
        }
        if (p === 1) {
            for (S -= d, m -= d, w = S + 1, b = m + 1, g = d - 1; g >= 0; g--) e[w + g] = e[b + g];
            e[S] = o[_];
            return
        }
        for (var x = r;;) {
            var T = 0,
                D = 0,
                C = !1;
            do
                if (t(o[_], e[m]) < 0) {
                    if (e[S--] = e[m--], T++, D = 0, --d === 0) {
                        C = !0;
                        break
                    }
                } else if (e[S--] = o[_--], D++, T = 0, --p === 1) {
                C = !0;
                break
            } while ((T | D) < x);
            if (C) break;
            do {
                if (T = d - Xo(o[_], e, v, d, d - 1, t), T !== 0) {
                    for (S -= T, m -= T, d -= T, w = S + 1, b = m + 1, g = T - 1; g >= 0; g--) e[w + g] = e[b + g];
                    if (d === 0) {
                        C = !0;
                        break
                    }
                }
                if (e[S--] = o[_--], --p === 1) {
                    C = !0;
                    break
                }
                if (D = p - $o(e[m], o, 0, p, p - 1, t), D !== 0) {
                    for (S -= D, _ -= D, p -= D, w = S + 1, b = _ + 1, g = 0; g < D; g++) e[w + g] = o[b + g];
                    if (p <= 1) {
                        C = !0;
                        break
                    }
                }
                if (e[S--] = e[m--], --d === 0) {
                    C = !0;
                    break
                }
                x--
            } while (T >= zn || D >= zn);
            if (C) break;
            x < 0 && (x = 0), x += 2
        }
        if (r = x, r < 1 && (r = 1), p === 1) {
            for (S -= d, m -= d, w = S + 1, b = m + 1, g = d - 1; g >= 0; g--) e[w + g] = e[b + g];
            e[S] = o[_]
        } else {
            if (p === 0) throw new Error;
            for (b = S - (p - 1), g = 0; g < p; g++) e[b + g] = o[g]
        }
    }
    return {
        mergeRuns: u,
        forceMergeRuns: l,
        pushRun: s
    }
}

function xi(e, t, r, n) {
    r || (r = 0), n || (n = e.length);
    var a = n - r;
    if (!(a < 2)) {
        var i = 0;
        if (a < pc) {
            i = sf(e, r, n, t), uf(e, r, n, r + i, t);
            return
        }
        var o = Z0(e, t),
            s = X0(a);
        do {
            if (i = sf(e, r, n, t), i < s) {
                var u = a;
                u > s && (u = s), uf(e, r, r + u, r + i, t), i = u
            }
            o.pushRun(r, i), o.mergeRuns(), a -= i, r += i
        } while (a !== 0);
        o.forceMergeRuns()
    }
}
var De = 1,
    ra = 2,
    dn = 4,
    lf = !1;

function qo() {
    lf || (lf = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
}

function ff(e, t) {
    return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel
}
var K0 = function () {
        function e() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = ff
        }
        return e.prototype.traverse = function (t, r) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, r)
        }, e.prototype.getDisplayList = function (t, r) {
            r = r || !1;
            var n = this._displayList;
            return (t || !n.length) && this.updateDisplayList(r), n
        }, e.prototype.updateDisplayList = function (t) {
            this._displayListLen = 0;
            for (var r = this._roots, n = this._displayList, a = 0, i = r.length; a < i; a++) this._updateAndAddDisplayable(r[a], null, t);
            n.length = this._displayListLen, xi(n, ff)
        }, e.prototype._updateAndAddDisplayable = function (t, r, n) {
            if (!(t.ignore && !n)) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var a = t.getClipPath();
                if (t.ignoreClip) r = null;
                else if (a) {
                    r ? r = r.slice() : r = [];
                    for (var i = a, o = t; i;) i.parent = o, i.updateTransform(), r.push(i), o = i, i = i.getClipPath()
                }
                if (t.childrenRef) {
                    for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
                        var l = s[u];
                        t.__dirty && (l.__dirty |= De), this._updateAndAddDisplayable(l, r, n)
                    }
                    t.__dirty = 0
                } else {
                    var f = t;
                    r && r.length ? f.__clipPaths = r : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (qo(), f.z = 0), isNaN(f.z2) && (qo(), f.z2 = 0), isNaN(f.zlevel) && (qo(), f.zlevel = 0), this._displayList[this._displayListLen++] = f
                }
                var h = t.getDecalElement && t.getDecalElement();
                h && this._updateAndAddDisplayable(h, r, n);
                var c = t.getTextGuideLine();
                c && this._updateAndAddDisplayable(c, r, n);
                var v = t.getTextContent();
                v && this._updateAndAddDisplayable(v, r, n)
            }
        }, e.prototype.addRoot = function (t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t)
        }, e.prototype.delRoot = function (t) {
            if (t instanceof Array) {
                for (var r = 0, n = t.length; r < n; r++) this.delRoot(t[r]);
                return
            }
            var a = ct(this._roots, t);
            a >= 0 && this._roots.splice(a, 1)
        }, e.prototype.delAllRoots = function () {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        }, e.prototype.getRoots = function () {
            return this._roots
        }, e.prototype.dispose = function () {
            this._displayList = null, this._roots = null
        }, e
    }(),
    gc;
gc = et.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (e) {
    return setTimeout(e, 16)
};
const hf = gc;
var ha = {
        linear: function (e) {
            return e
        },
        quadraticIn: function (e) {
            return e * e
        },
        quadraticOut: function (e) {
            return e * (2 - e)
        },
        quadraticInOut: function (e) {
            return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        },
        cubicIn: function (e) {
            return e * e * e
        },
        cubicOut: function (e) {
            return --e * e * e + 1
        },
        cubicInOut: function (e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        quarticIn: function (e) {
            return e * e * e * e
        },
        quarticOut: function (e) {
            return 1 - --e * e * e * e
        },
        quarticInOut: function (e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        },
        quinticIn: function (e) {
            return e * e * e * e * e
        },
        quinticOut: function (e) {
            return --e * e * e * e * e + 1
        },
        quinticInOut: function (e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        sinusoidalIn: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        sinusoidalOut: function (e) {
            return Math.sin(e * Math.PI / 2)
        },
        sinusoidalInOut: function (e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        },
        exponentialIn: function (e) {
            return e === 0 ? 0 : Math.pow(1024, e - 1)
        },
        exponentialOut: function (e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
        },
        exponentialInOut: function (e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
        },
        circularIn: function (e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        circularOut: function (e) {
            return Math.sqrt(1 - --e * e)
        },
        circularInOut: function (e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        elasticIn: function (e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
        },
        elasticOut: function (e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
        },
        elasticInOut: function (e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
        },
        backIn: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        backOut: function (e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        },
        backInOut: function (e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        },
        bounceIn: function (e) {
            return 1 - ha.bounceOut(1 - e)
        },
        bounceOut: function (e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        bounceInOut: function (e) {
            return e < .5 ? ha.bounceIn(e * 2) * .5 : ha.bounceOut(e * 2 - 1) * .5 + .5
        }
    },
    Ha = Math.pow,
    ir = Math.sqrt,
    Vi = 1e-8,
    yc = 1e-4,
    vf = ir(3),
    Wa = 1 / 3,
    Ce = Ln(),
    jt = Ln(),
    Tn = Ln();

function er(e) {
    return e > -Vi && e < Vi
}

function mc(e) {
    return e > Vi || e < -Vi
}

function bt(e, t, r, n, a) {
    var i = 1 - a;
    return i * i * (i * e + 3 * a * t) + a * a * (a * n + 3 * i * r)
}

function cf(e, t, r, n, a) {
    var i = 1 - a;
    return 3 * (((t - e) * i + 2 * (r - t) * a) * i + (n - r) * a * a)
}

function _c(e, t, r, n, a, i) {
    var o = n + 3 * (t - r) - e,
        s = 3 * (r - t * 2 + e),
        u = 3 * (t - e),
        l = e - a,
        f = s * s - 3 * o * u,
        h = s * u - 9 * o * l,
        c = u * u - 3 * s * l,
        v = 0;
    if (er(f) && er(h))
        if (er(s)) i[0] = 0;
        else {
            var d = -u / s;
            d >= 0 && d <= 1 && (i[v++] = d)
        }
    else {
        var y = h * h - 4 * f * c;
        if (er(y)) {
            var p = h / f,
                d = -s / o + p,
                g = -p / 2;
            d >= 0 && d <= 1 && (i[v++] = d), g >= 0 && g <= 1 && (i[v++] = g)
        } else if (y > 0) {
            var m = ir(y),
                _ = f * s + 1.5 * o * (-h + m),
                S = f * s + 1.5 * o * (-h - m);
            _ < 0 ? _ = -Ha(-_, Wa) : _ = Ha(_, Wa), S < 0 ? S = -Ha(-S, Wa) : S = Ha(S, Wa);
            var d = (-s - (_ + S)) / (3 * o);
            d >= 0 && d <= 1 && (i[v++] = d)
        } else {
            var b = (2 * f * s - 3 * o * h) / (2 * ir(f * f * f)),
                w = Math.acos(b) / 3,
                x = ir(f),
                T = Math.cos(w),
                d = (-s - 2 * x * T) / (3 * o),
                g = (-s + x * (T + vf * Math.sin(w))) / (3 * o),
                D = (-s + x * (T - vf * Math.sin(w))) / (3 * o);
            d >= 0 && d <= 1 && (i[v++] = d), g >= 0 && g <= 1 && (i[v++] = g), D >= 0 && D <= 1 && (i[v++] = D)
        }
    }
    return v
}

function Sc(e, t, r, n, a) {
    var i = 6 * r - 12 * t + 6 * e,
        o = 9 * t + 3 * n - 3 * e - 9 * r,
        s = 3 * t - 3 * e,
        u = 0;
    if (er(o)) {
        if (mc(i)) {
            var l = -s / i;
            l >= 0 && l <= 1 && (a[u++] = l)
        }
    } else {
        var f = i * i - 4 * o * s;
        if (er(f)) a[0] = -i / (2 * o);
        else if (f > 0) {
            var h = ir(f),
                l = (-i + h) / (2 * o),
                c = (-i - h) / (2 * o);
            l >= 0 && l <= 1 && (a[u++] = l), c >= 0 && c <= 1 && (a[u++] = c)
        }
    }
    return u
}

function Gi(e, t, r, n, a, i) {
    var o = (t - e) * a + e,
        s = (r - t) * a + t,
        u = (n - r) * a + r,
        l = (s - o) * a + o,
        f = (u - s) * a + s,
        h = (f - l) * a + l;
    i[0] = e, i[1] = o, i[2] = l, i[3] = h, i[4] = h, i[5] = f, i[6] = u, i[7] = n
}

function wc(e, t, r, n, a, i, o, s, u, l, f) {
    var h, c = .005,
        v = 1 / 0,
        d, y, p, g;
    Ce[0] = u, Ce[1] = l;
    for (var m = 0; m < 1; m += .05) jt[0] = bt(e, r, a, o, m), jt[1] = bt(t, n, i, s, m), p = Sn(Ce, jt), p < v && (h = m, v = p);
    v = 1 / 0;
    for (var _ = 0; _ < 32 && !(c < yc); _++) d = h - c, y = h + c, jt[0] = bt(e, r, a, o, d), jt[1] = bt(t, n, i, s, d), p = Sn(jt, Ce), d >= 0 && p < v ? (h = d, v = p) : (Tn[0] = bt(e, r, a, o, y), Tn[1] = bt(t, n, i, s, y), g = Sn(Tn, Ce), y <= 1 && g < v ? (h = y, v = g) : c *= .5);
    return f && (f[0] = bt(e, r, a, o, h), f[1] = bt(t, n, i, s, h)), ir(v)
}

function Q0(e, t, r, n, a, i, o, s, u) {
    for (var l = e, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
        var d = v * c,
            y = bt(e, r, a, o, d),
            p = bt(t, n, i, s, d),
            g = y - l,
            m = p - f;
        h += Math.sqrt(g * g + m * m), l = y, f = p
    }
    return h
}

function Dt(e, t, r, n) {
    var a = 1 - n;
    return a * (a * e + 2 * n * t) + n * n * r
}

function df(e, t, r, n) {
    return 2 * ((1 - n) * (t - e) + n * (r - t))
}

function J0(e, t, r, n, a) {
    var i = e - 2 * t + r,
        o = 2 * (t - e),
        s = e - n,
        u = 0;
    if (er(i)) {
        if (mc(o)) {
            var l = -s / o;
            l >= 0 && l <= 1 && (a[u++] = l)
        }
    } else {
        var f = o * o - 4 * i * s;
        if (er(f)) {
            var l = -o / (2 * i);
            l >= 0 && l <= 1 && (a[u++] = l)
        } else if (f > 0) {
            var h = ir(f),
                l = (-o + h) / (2 * i),
                c = (-o - h) / (2 * i);
            l >= 0 && l <= 1 && (a[u++] = l), c >= 0 && c <= 1 && (a[u++] = c)
        }
    }
    return u
}

function bc(e, t, r) {
    var n = e + r - 2 * t;
    return n === 0 ? .5 : (e - t) / n
}

function Hi(e, t, r, n, a) {
    var i = (t - e) * n + e,
        o = (r - t) * n + t,
        s = (o - i) * n + i;
    a[0] = e, a[1] = i, a[2] = s, a[3] = s, a[4] = o, a[5] = r
}

function Tc(e, t, r, n, a, i, o, s, u) {
    var l, f = .005,
        h = 1 / 0;
    Ce[0] = o, Ce[1] = s;
    for (var c = 0; c < 1; c += .05) {
        jt[0] = Dt(e, r, a, c), jt[1] = Dt(t, n, i, c);
        var v = Sn(Ce, jt);
        v < h && (l = c, h = v)
    }
    h = 1 / 0;
    for (var d = 0; d < 32 && !(f < yc); d++) {
        var y = l - f,
            p = l + f;
        jt[0] = Dt(e, r, a, y), jt[1] = Dt(t, n, i, y);
        var v = Sn(jt, Ce);
        if (y >= 0 && v < h) l = y, h = v;
        else {
            Tn[0] = Dt(e, r, a, p), Tn[1] = Dt(t, n, i, p);
            var g = Sn(Tn, Ce);
            p <= 1 && g < h ? (l = p, h = g) : f *= .5
        }
    }
    return u && (u[0] = Dt(e, r, a, l), u[1] = Dt(t, n, i, l)), ir(h)
}

function j0(e, t, r, n, a, i, o) {
    for (var s = e, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
        var c = h * f,
            v = Dt(e, r, a, c),
            d = Dt(t, n, i, c),
            y = v - s,
            p = d - u;
        l += Math.sqrt(y * y + p * p), s = v, u = d
    }
    return l
}
var ty = /cubic-bezier\(([0-9,\.e ]+)\)/;

function Mc(e) {
    var t = e && ty.exec(e);
    if (t) {
        var r = t[1].split(","),
            n = +Ve(r[0]),
            a = +Ve(r[1]),
            i = +Ve(r[2]),
            o = +Ve(r[3]);
        if (isNaN(n + a + i + o)) return;
        var s = [];
        return function (u) {
            return u <= 0 ? 0 : u >= 1 ? 1 : _c(0, n, i, 1, u, s) && bt(0, a, o, 1, s[0])
        }
    }
}
var ey = function () {
    function e(t) {
        this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || ee, this.ondestroy = t.ondestroy || ee, this.onrestart = t.onrestart || ee, t.easing && this.setEasing(t.easing)
    }
    return e.prototype.step = function (t, r) {
        if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
            this._pausedTime += r;
            return
        }
        var n = this._life,
            a = t - this._startTime - this._pausedTime,
            i = a / n;
        i < 0 && (i = 0), i = Math.min(i, 1);
        var o = this.easingFunc,
            s = o ? o(i) : i;
        if (this.onframe(s), i === 1)
            if (this.loop) {
                var u = a % n;
                this._startTime = t - u, this._pausedTime = 0, this.onrestart()
            } else return !0;
        return !1
    }, e.prototype.pause = function () {
        this._paused = !0
    }, e.prototype.resume = function () {
        this._paused = !1
    }, e.prototype.setEasing = function (t) {
        this.easing = t, this.easingFunc = Q(t) ? t : ha[t] || Mc(t)
    }, e
}();
const ry = ey;
var xc = function () {
        function e(t) {
            this.value = t
        }
        return e
    }(),
    ny = function () {
        function e() {
            this._len = 0
        }
        return e.prototype.insert = function (t) {
            var r = new xc(t);
            return this.insertEntry(r), r
        }, e.prototype.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, e.prototype.remove = function (t) {
            var r = t.prev,
                n = t.next;
            r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, t.next = t.prev = null, this._len--
        }, e.prototype.len = function () {
            return this._len
        }, e.prototype.clear = function () {
            this.head = this.tail = null, this._len = 0
        }, e
    }(),
    Ea = function () {
        function e(t) {
            this._list = new ny, this._maxSize = 10, this._map = {}, this._maxSize = t
        }
        return e.prototype.put = function (t, r) {
            var n = this._list,
                a = this._map,
                i = null;
            if (a[t] == null) {
                var o = n.len(),
                    s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var u = n.head;
                    n.remove(u), delete a[u.key], i = u.value, this._lastRemovedEntry = u
                }
                s ? s.value = r : s = new xc(r), s.key = t, n.insertEntry(s), a[t] = s
            }
            return i
        }, e.prototype.get = function (t) {
            var r = this._map[t],
                n = this._list;
            if (r != null) return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value
        }, e.prototype.clear = function () {
            this._list.clear(), this._map = {}
        }, e.prototype.len = function () {
            return this._list.len()
        }, e
    }(),
    pf = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    };

function ce(e) {
    return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
}

function ay(e) {
    return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e
}

function ba(e) {
    return e < 0 ? 0 : e > 1 ? 1 : e
}

function Zo(e) {
    var t = e;
    return t.length && t.charAt(t.length - 1) === "%" ? ce(parseFloat(t) / 100 * 255) : ce(parseInt(t, 10))
}

function zr(e) {
    var t = e;
    return t.length && t.charAt(t.length - 1) === "%" ? ba(parseFloat(t) / 100) : ba(parseFloat(t))
}

function Ko(e, t, r) {
    return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? e + (t - e) * r * 6 : r * 2 < 1 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function rr(e, t, r) {
    return e + (t - e) * r
}

function Kt(e, t, r, n, a) {
    return e[0] = t, e[1] = r, e[2] = n, e[3] = a, e
}

function ou(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
}
var Dc = new Ea(20),
    Ua = null;

function en(e, t) {
    Ua && ou(Ua, t), Ua = Dc.put(e, Ua || t.slice())
}

function de(e, t) {
    if (e) {
        t = t || [];
        var r = Dc.get(e);
        if (r) return ou(t, r);
        e = e + "";
        var n = e.replace(/ /g, "").toLowerCase();
        if (n in pf) return ou(t, pf[n]), en(e, t), t;
        var a = n.length;
        if (n.charAt(0) === "#") {
            if (a === 4 || a === 5) {
                var i = parseInt(n.slice(1, 4), 16);
                if (!(i >= 0 && i <= 4095)) {
                    Kt(t, 0, 0, 0, 1);
                    return
                }
                return Kt(t, (i & 3840) >> 4 | (i & 3840) >> 8, i & 240 | (i & 240) >> 4, i & 15 | (i & 15) << 4, a === 5 ? parseInt(n.slice(4), 16) / 15 : 1), en(e, t), t
            } else if (a === 7 || a === 9) {
                var i = parseInt(n.slice(1, 7), 16);
                if (!(i >= 0 && i <= 16777215)) {
                    Kt(t, 0, 0, 0, 1);
                    return
                }
                return Kt(t, (i & 16711680) >> 16, (i & 65280) >> 8, i & 255, a === 9 ? parseInt(n.slice(7), 16) / 255 : 1), en(e, t), t
            }
            return
        }
        var o = n.indexOf("("),
            s = n.indexOf(")");
        if (o !== -1 && s + 1 === a) {
            var u = n.substr(0, o),
                l = n.substr(o + 1, s - (o + 1)).split(","),
                f = 1;
            switch (u) {
                case "rgba":
                    if (l.length !== 4) return l.length === 3 ? Kt(t, +l[0], +l[1], +l[2], 1) : Kt(t, 0, 0, 0, 1);
                    f = zr(l.pop());
                case "rgb":
                    if (l.length >= 3) return Kt(t, Zo(l[0]), Zo(l[1]), Zo(l[2]), l.length === 3 ? f : zr(l[3])), en(e, t), t;
                    Kt(t, 0, 0, 0, 1);
                    return;
                case "hsla":
                    if (l.length !== 4) {
                        Kt(t, 0, 0, 0, 1);
                        return
                    }
                    return l[3] = zr(l[3]), su(l, t), en(e, t), t;
                case "hsl":
                    if (l.length !== 3) {
                        Kt(t, 0, 0, 0, 1);
                        return
                    }
                    return su(l, t), en(e, t), t;
                default:
                    return
            }
        }
        Kt(t, 0, 0, 0, 1)
    }
}

function su(e, t) {
    var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
        n = zr(e[1]),
        a = zr(e[2]),
        i = a <= .5 ? a * (n + 1) : a + n - a * n,
        o = a * 2 - i;
    return t = t || [], Kt(t, ce(Ko(o, i, r + 1 / 3) * 255), ce(Ko(o, i, r) * 255), ce(Ko(o, i, r - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t
}

function iy(e) {
    if (e) {
        var t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            a = Math.min(t, r, n),
            i = Math.max(t, r, n),
            o = i - a,
            s = (i + a) / 2,
            u, l;
        if (o === 0) u = 0, l = 0;
        else {
            s < .5 ? l = o / (i + a) : l = o / (2 - i - a);
            var f = ((i - t) / 6 + o / 2) / o,
                h = ((i - r) / 6 + o / 2) / o,
                c = ((i - n) / 6 + o / 2) / o;
            t === i ? u = c - h : r === i ? u = 1 / 3 + f - c : n === i && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1)
        }
        var v = [u * 360, l, s];
        return e[3] != null && v.push(e[3]), v
    }
}

function gf(e, t) {
    var r = de(e);
    if (r) {
        for (var n = 0; n < 3; n++) t < 0 ? r[n] = r[n] * (1 - t) | 0 : r[n] = (255 - r[n]) * t + r[n] | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
        return ka(r, r.length === 4 ? "rgba" : "rgb")
    }
}

function zx(e, t, r) {
    if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
        r = r || [];
        var n = e * (t.length - 1),
            a = Math.floor(n),
            i = Math.ceil(n),
            o = t[a],
            s = t[i],
            u = n - a;
        return r[0] = ce(rr(o[0], s[0], u)), r[1] = ce(rr(o[1], s[1], u)), r[2] = ce(rr(o[2], s[2], u)), r[3] = ba(rr(o[3], s[3], u)), r
    }
}

function Vx(e, t, r) {
    if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
        var n = e * (t.length - 1),
            a = Math.floor(n),
            i = Math.ceil(n),
            o = de(t[a]),
            s = de(t[i]),
            u = n - a,
            l = ka([ce(rr(o[0], s[0], u)), ce(rr(o[1], s[1], u)), ce(rr(o[2], s[2], u)), ba(rr(o[3], s[3], u))], "rgba");
        return r ? {
            color: l,
            leftIndex: a,
            rightIndex: i,
            value: n
        } : l
    }
}

function Gx(e, t, r, n) {
    var a = de(e);
    if (e) return a = iy(a), t != null && (a[0] = ay(t)), r != null && (a[1] = zr(r)), n != null && (a[2] = zr(n)), ka(su(a), "rgba")
}

function Hx(e, t) {
    var r = de(e);
    if (r && t != null) return r[3] = ba(t), ka(r, "rgba")
}

function ka(e, t) {
    if (!(!e || !e.length)) {
        var r = e[0] + "," + e[1] + "," + e[2];
        return (t === "rgba" || t === "hsva" || t === "hsla") && (r += "," + e[3]), t + "(" + r + ")"
    }
}

function Wi(e, t) {
    var r = de(e);
    return r ? (.299 * r[0] + .587 * r[1] + .114 * r[2]) * r[3] / 255 + (1 - r[3]) * t : 0
}
var yf = new Ea(100);

function mf(e) {
    if (U(e)) {
        var t = yf.get(e);
        return t || (t = gf(e, -.1), yf.put(e, t)), t
    } else if (Qu(e)) {
        var r = O({}, e);
        return r.colorStops = V(e.colorStops, function (n) {
            return {
                offset: n.offset,
                color: gf(n.color, -.1)
            }
        }), r
    }
    return e
}
var Ui = Math.round;

function Wx(e) {
    var t;
    if (!e || e === "transparent") e = "none";
    else if (typeof e == "string" && e.indexOf("rgba") > -1) {
        var r = de(e);
        r && (e = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")", t = r[3])
    }
    return {
        color: e,
        opacity: t ? ? 1
    }
}
var _f = 1e-4;

function Ux(e) {
    return e < _f && e > -_f
}

function Ya(e) {
    return Ui(e * 1e3) / 1e3
}

function Sf(e) {
    return Ui(e * 1e4) / 1e4
}

function Yx(e) {
    return "matrix(" + Ya(e[0]) + "," + Ya(e[1]) + "," + Ya(e[2]) + "," + Ya(e[3]) + "," + Sf(e[4]) + "," + Sf(e[5]) + ")"
}
var $x = {
    left: "start",
    right: "end",
    center: "middle",
    middle: "middle"
};

function Xx(e, t, r) {
    return r === "top" ? e += t / 2 : r === "bottom" && (e -= t / 2), e
}

function qx(e) {
    return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY)
}

function Zx(e) {
    var t = e.style,
        r = e.getGlobalScale();
    return [t.shadowColor, (t.shadowBlur || 0).toFixed(2), (t.shadowOffsetX || 0).toFixed(2), (t.shadowOffsetY || 0).toFixed(2), r[0], r[1]].join(",")
}

function oy(e) {
    return e && !!e.image
}

function sy(e) {
    return e && !!e.svgElement
}

function Kx(e) {
    return oy(e) || sy(e)
}

function uy(e) {
    return e.type === "linear"
}

function ly(e) {
    return e.type === "radial"
}

function Qx(e) {
    return e && (e.type === "linear" || e.type === "radial")
}

function Jx(e) {
    return "url(#" + e + ")"
}

function jx(e) {
    var t = e.getGlobalScale(),
        r = Math.max(t[0], t[1]);
    return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1)
}

function tD(e) {
    var t = e.x || 0,
        r = e.y || 0,
        n = (e.rotation || 0) * Mi,
        a = X(e.scaleX, 1),
        i = X(e.scaleY, 1),
        o = e.skewX || 0,
        s = e.skewY || 0,
        u = [];
    return (t || r) && u.push("translate(" + t + "px," + r + "px)"), n && u.push("rotate(" + n + ")"), (a !== 1 || i !== 1) && u.push("scale(" + a + "," + i + ")"), (o || s) && u.push("skew(" + Ui(o * Mi) + "deg, " + Ui(s * Mi) + "deg)"), u.join(" ")
}
var eD = function () {
        return et.hasGlobalWindow && Q(window.btoa) ? function (e) {
            return window.btoa(unescape(encodeURIComponent(e)))
        } : typeof Buffer < "u" ? function (e) {
            return Buffer.from(e).toString("base64")
        } : function (e) {
            return null
        }
    }(),
    uu = Array.prototype.slice;

function ze(e, t, r) {
    return (t - e) * r + e
}

function Qo(e, t, r, n) {
    for (var a = t.length, i = 0; i < a; i++) e[i] = ze(t[i], r[i], n);
    return e
}

function fy(e, t, r, n) {
    for (var a = t.length, i = a && t[0].length, o = 0; o < a; o++) {
        e[o] || (e[o] = []);
        for (var s = 0; s < i; s++) e[o][s] = ze(t[o][s], r[o][s], n)
    }
    return e
}

function $a(e, t, r, n) {
    for (var a = t.length, i = 0; i < a; i++) e[i] = t[i] + r[i] * n;
    return e
}

function wf(e, t, r, n) {
    for (var a = t.length, i = a && t[0].length, o = 0; o < a; o++) {
        e[o] || (e[o] = []);
        for (var s = 0; s < i; s++) e[o][s] = t[o][s] + r[o][s] * n
    }
    return e
}

function hy(e, t) {
    for (var r = e.length, n = t.length, a = r > n ? t : e, i = Math.min(r, n), o = a[i - 1] || {
            color: [0, 0, 0, 0],
            offset: 0
        }, s = i; s < Math.max(r, n); s++) a.push({
        offset: o.offset,
        color: o.color.slice()
    })
}

function vy(e, t, r) {
    var n = e,
        a = t;
    if (!(!n.push || !a.push)) {
        var i = n.length,
            o = a.length;
        if (i !== o) {
            var s = i > o;
            if (s) n.length = o;
            else
                for (var u = i; u < o; u++) n.push(r === 1 ? a[u] : uu.call(a[u]))
        }
        for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
            if (r === 1) isNaN(n[u]) && (n[u] = a[u]);
            else
                for (var f = 0; f < l; f++) isNaN(n[u][f]) && (n[u][f] = a[u][f])
    }
}

function Di(e) {
    if (Bt(e)) {
        var t = e.length;
        if (Bt(e[0])) {
            for (var r = [], n = 0; n < t; n++) r.push(uu.call(e[n]));
            return r
        }
        return uu.call(e)
    }
    return e
}

function Ci(e) {
    return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")"
}

function cy(e) {
    return Bt(e && e[0]) ? 2 : 1
}
var Xa = 0,
    Ai = 1,
    Cc = 2,
    na = 3,
    lu = 4,
    fu = 5,
    bf = 6;

function Tf(e) {
    return e === lu || e === fu
}

function qa(e) {
    return e === Ai || e === Cc
}
var Vn = [0, 0, 0, 0],
    dy = function () {
        function e(t) {
            this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t
        }
        return e.prototype.isFinished = function () {
            return this._finished
        }, e.prototype.setFinished = function () {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
        }, e.prototype.needsAnimate = function () {
            return this.keyframes.length >= 1
        }, e.prototype.getAdditiveTrack = function () {
            return this._additiveTrack
        }, e.prototype.addKeyframe = function (t, r, n) {
            this._needsSort = !0;
            var a = this.keyframes,
                i = a.length,
                o = !1,
                s = bf,
                u = r;
            if (Bt(r)) {
                var l = cy(r);
                s = l, (l === 1 && !it(r[0]) || l === 2 && !it(r[0][0])) && (o = !0)
            } else if (it(r) && !Fi(r)) s = Xa;
            else if (U(r))
                if (!isNaN(+r)) s = Xa;
                else {
                    var f = de(r);
                    f && (u = f, s = na)
                }
            else if (Qu(r)) {
                var h = O({}, u);
                h.colorStops = V(r.colorStops, function (v) {
                    return {
                        offset: v.offset,
                        color: de(v.color)
                    }
                }), uy(r) ? s = lu : ly(r) && (s = fu), u = h
            }
            i === 0 ? this.valType = s : (s !== this.valType || s === bf) && (o = !0), this.discrete = this.discrete || o;
            var c = {
                time: t,
                value: u,
                rawValue: r,
                percent: 0
            };
            return n && (c.easing = n, c.easingFunc = Q(n) ? n : ha[n] || Mc(n)), a.push(c), c
        }, e.prototype.prepare = function (t, r) {
            var n = this.keyframes;
            this._needsSort && n.sort(function (y, p) {
                return y.time - p.time
            });
            for (var a = this.valType, i = n.length, o = n[i - 1], s = this.discrete, u = qa(a), l = Tf(a), f = 0; f < i; f++) {
                var h = n[f],
                    c = h.value,
                    v = o.value;
                h.percent = h.time / t, s || (u && f !== i - 1 ? vy(c, v, a) : l && hy(c.colorStops, v.colorStops))
            }
            if (!s && a !== fu && r && this.needsAnimate() && r.needsAnimate() && a === r.valType && !r._finished) {
                this._additiveTrack = r;
                for (var d = n[0].value, f = 0; f < i; f++) a === Xa ? n[f].additiveValue = n[f].value - d : a === na ? n[f].additiveValue = $a([], n[f].value, d, -1) : qa(a) && (n[f].additiveValue = a === Ai ? $a([], n[f].value, d, -1) : wf([], n[f].value, d, -1))
            }
        }, e.prototype.step = function (t, r) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var n = this._additiveTrack != null,
                    a = n ? "additiveValue" : "value",
                    i = this.valType,
                    o = this.keyframes,
                    s = o.length,
                    u = this.propName,
                    l = i === na,
                    f, h = this._lastFr,
                    c = Math.min,
                    v, d;
                if (s === 1) v = d = o[0];
                else {
                    if (r < 0) f = 0;
                    else if (r < this._lastFrP) {
                        var y = c(h + 1, s - 1);
                        for (f = y; f >= 0 && !(o[f].percent <= r); f--);
                        f = c(f, s - 2)
                    } else {
                        for (f = h; f < s && !(o[f].percent > r); f++);
                        f = c(f - 1, s - 2)
                    }
                    d = o[f + 1], v = o[f]
                }
                if (v && d) {
                    this._lastFr = f, this._lastFrP = r;
                    var p = d.percent - v.percent,
                        g = p === 0 ? 1 : c((r - v.percent) / p, 1);
                    d.easingFunc && (g = d.easingFunc(g));
                    var m = n ? this._additiveValue : l ? Vn : t[u];
                    if ((qa(i) || l) && !m && (m = this._additiveValue = []), this.discrete) t[u] = g < 1 ? v.rawValue : d.rawValue;
                    else if (qa(i)) i === Ai ? Qo(m, v[a], d[a], g) : fy(m, v[a], d[a], g);
                    else if (Tf(i)) {
                        var _ = v[a],
                            S = d[a],
                            b = i === lu;
                        t[u] = {
                            type: b ? "linear" : "radial",
                            x: ze(_.x, S.x, g),
                            y: ze(_.y, S.y, g),
                            colorStops: V(_.colorStops, function (x, T) {
                                var D = S.colorStops[T];
                                return {
                                    offset: ze(x.offset, D.offset, g),
                                    color: Ci(Qo([], x.color, D.color, g))
                                }
                            }),
                            global: S.global
                        }, b ? (t[u].x2 = ze(_.x2, S.x2, g), t[u].y2 = ze(_.y2, S.y2, g)) : t[u].r = ze(_.r, S.r, g)
                    } else if (l) Qo(m, v[a], d[a], g), n || (t[u] = Ci(m));
                    else {
                        var w = ze(v[a], d[a], g);
                        n ? this._additiveValue = w : t[u] = w
                    }
                    n && this._addToTarget(t)
                }
            }
        }, e.prototype._addToTarget = function (t) {
            var r = this.valType,
                n = this.propName,
                a = this._additiveValue;
            r === Xa ? t[n] = t[n] + a : r === na ? (de(t[n], Vn), $a(Vn, Vn, a, 1), t[n] = Ci(Vn)) : r === Ai ? $a(t[n], t[n], a, 1) : r === Cc && wf(t[n], t[n], a, 1)
        }, e
    }(),
    rl = function () {
        function e(t, r, n, a) {
            if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = r, r && a) {
                ic("Can' use additive animation on looped animation.");
                return
            }
            this._additiveAnimators = a, this._allowDiscrete = n
        }
        return e.prototype.getMaxTime = function () {
            return this._maxTime
        }, e.prototype.getDelay = function () {
            return this._delay
        }, e.prototype.getLoop = function () {
            return this._loop
        }, e.prototype.getTarget = function () {
            return this._target
        }, e.prototype.changeTarget = function (t) {
            this._target = t
        }, e.prototype.when = function (t, r, n) {
            return this.whenWithKeys(t, r, lt(r), n)
        }, e.prototype.whenWithKeys = function (t, r, n, a) {
            for (var i = this._tracks, o = 0; o < n.length; o++) {
                var s = n[o],
                    u = i[s];
                if (!u) {
                    u = i[s] = new dy(s);
                    var l = void 0,
                        f = this._getAdditiveTrack(s);
                    if (f) {
                        var h = f.keyframes,
                            c = h[h.length - 1];
                        l = c && c.value, f.valType === na && l && (l = Ci(l))
                    } else l = this._target[s];
                    if (l == null) continue;
                    t > 0 && u.addKeyframe(0, Di(l), a), this._trackKeys.push(s)
                }
                u.addKeyframe(t, Di(r[s]), a)
            }
            return this._maxTime = Math.max(this._maxTime, t), this
        }, e.prototype.pause = function () {
            this._clip.pause(), this._paused = !0
        }, e.prototype.resume = function () {
            this._clip.resume(), this._paused = !1
        }, e.prototype.isPaused = function () {
            return !!this._paused
        }, e.prototype.duration = function (t) {
            return this._maxTime = t, this._force = !0, this
        }, e.prototype._doneCallback = function () {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneCbs;
            if (t)
                for (var r = t.length, n = 0; n < r; n++) t[n].call(this)
        }, e.prototype._abortedCallback = function () {
            this._setTracksFinished();
            var t = this.animation,
                r = this._abortedCbs;
            if (t && t.removeClip(this._clip), this._clip = null, r)
                for (var n = 0; n < r.length; n++) r[n].call(this)
        }, e.prototype._setTracksFinished = function () {
            for (var t = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++) t[r[n]].setFinished()
        }, e.prototype._getAdditiveTrack = function (t) {
            var r, n = this._additiveAnimators;
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var i = n[a].getTrack(t);
                    i && (r = i)
                }
            return r
        }, e.prototype.start = function (t) {
            if (!(this._started > 0)) {
                this._started = 1;
                for (var r = this, n = [], a = this._maxTime || 0, i = 0; i < this._trackKeys.length; i++) {
                    var o = this._trackKeys[i],
                        s = this._tracks[o],
                        u = this._getAdditiveTrack(o),
                        l = s.keyframes,
                        f = l.length;
                    if (s.prepare(a, u), s.needsAnimate())
                        if (!this._allowDiscrete && s.discrete) {
                            var h = l[f - 1];
                            h && (r._target[s.propName] = h.rawValue), s.setFinished()
                        } else n.push(s)
                }
                if (n.length || this._force) {
                    var c = new ry({
                        life: a,
                        loop: this._loop,
                        delay: this._delay || 0,
                        onframe: function (v) {
                            r._started = 2;
                            var d = r._additiveAnimators;
                            if (d) {
                                for (var y = !1, p = 0; p < d.length; p++)
                                    if (d[p]._clip) {
                                        y = !0;
                                        break
                                    } y || (r._additiveAnimators = null)
                            }
                            for (var p = 0; p < n.length; p++) n[p].step(r._target, v);
                            var g = r._onframeCbs;
                            if (g)
                                for (var p = 0; p < g.length; p++) g[p](r._target, v)
                        },
                        ondestroy: function () {
                            r._doneCallback()
                        }
                    });
                    this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t)
                } else this._doneCallback();
                return this
            }
        }, e.prototype.stop = function (t) {
            if (this._clip) {
                var r = this._clip;
                t && r.onframe(1), this._abortedCallback()
            }
        }, e.prototype.delay = function (t) {
            return this._delay = t, this
        }, e.prototype.during = function (t) {
            return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this
        }, e.prototype.done = function (t) {
            return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this
        }, e.prototype.aborted = function (t) {
            return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this
        }, e.prototype.getClip = function () {
            return this._clip
        }, e.prototype.getTrack = function (t) {
            return this._tracks[t]
        }, e.prototype.getTracks = function () {
            var t = this;
            return V(this._trackKeys, function (r) {
                return t._tracks[r]
            })
        }, e.prototype.stopTracks = function (t, r) {
            if (!t.length || !this._clip) return !0;
            for (var n = this._tracks, a = this._trackKeys, i = 0; i < t.length; i++) {
                var o = n[t[i]];
                o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished())
            }
            for (var s = !0, i = 0; i < a.length; i++)
                if (!n[a[i]].isFinished()) {
                    s = !1;
                    break
                } return s && this._abortedCallback(), s
        }, e.prototype.saveTo = function (t, r, n) {
            if (t) {
                r = r || this._trackKeys;
                for (var a = 0; a < r.length; a++) {
                    var i = r[a],
                        o = this._tracks[i];
                    if (!(!o || o.isFinished())) {
                        var s = o.keyframes,
                            u = s[n ? 0 : s.length - 1];
                        u && (t[i] = Di(u.rawValue))
                    }
                }
            }
        }, e.prototype.__changeFinalValue = function (t, r) {
            r = r || lt(t);
            for (var n = 0; n < r.length; n++) {
                var a = r[n],
                    i = this._tracks[a];
                if (i) {
                    var o = i.keyframes;
                    if (o.length > 1) {
                        var s = o.pop();
                        i.addKeyframe(s.time, t[a]), i.prepare(this._maxTime, i.getAdditiveTrack())
                    }
                }
            }
        }, e
    }();

function mn() {
    return new Date().getTime()
}
var py = function (e) {
        G(t, e);

        function t(r) {
            var n = e.call(this) || this;
            return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n
        }
        return t.prototype.addClip = function (r) {
            r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this
        }, t.prototype.addAnimator = function (r) {
            r.animation = this;
            var n = r.getClip();
            n && this.addClip(n)
        }, t.prototype.removeClip = function (r) {
            if (r.animation) {
                var n = r.prev,
                    a = r.next;
                n ? n.next = a : this._head = a, a ? a.prev = n : this._tail = n, r.next = r.prev = r.animation = null
            }
        }, t.prototype.removeAnimator = function (r) {
            var n = r.getClip();
            n && this.removeClip(n), r.animation = null
        }, t.prototype.update = function (r) {
            for (var n = mn() - this._pausedTime, a = n - this._time, i = this._head; i;) {
                var o = i.next,
                    s = i.step(n, a);
                s && (i.ondestroy(), this.removeClip(i)), i = o
            }
            this._time = n, r || (this.trigger("frame", a), this.stage.update && this.stage.update())
        }, t.prototype._startLoop = function () {
            var r = this;
            this._running = !0;

            function n() {
                r._running && (hf(n), !r._paused && r.update())
            }
            hf(n)
        }, t.prototype.start = function () {
            this._running || (this._time = mn(), this._pausedTime = 0, this._startLoop())
        }, t.prototype.stop = function () {
            this._running = !1
        }, t.prototype.pause = function () {
            this._paused || (this._pauseStart = mn(), this._paused = !0)
        }, t.prototype.resume = function () {
            this._paused && (this._pausedTime += mn() - this._pauseStart, this._paused = !1)
        }, t.prototype.clear = function () {
            for (var r = this._head; r;) {
                var n = r.next;
                r.prev = r.next = r.animation = null, r = n
            }
            this._head = this._tail = null
        }, t.prototype.isFinished = function () {
            return this._head == null
        }, t.prototype.animate = function (r, n) {
            n = n || {}, this.start();
            var a = new rl(r, n.loop);
            return this.addAnimator(a), a
        }, t
    }(Ue),
    gy = 300,
    Jo = et.domSupported,
    jo = function () {
        var e = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            t = ["touchstart", "touchend", "touchmove"],
            r = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            },
            n = V(e, function (a) {
                var i = a.replace("mouse", "pointer");
                return r.hasOwnProperty(i) ? i : a
            });
        return {
            mouse: e,
            touch: t,
            pointer: n
        }
    }(),
    Mf = {
        mouse: ["mousemove", "mouseup"],
        pointer: ["pointermove", "pointerup"]
    },
    xf = !1;

function hu(e) {
    var t = e.pointerType;
    return t === "pen" || t === "touch"
}

function yy(e) {
    e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function () {
        e.touching = !1, e.touchTimer = null
    }, 700)
}

function ts(e) {
    e && (e.zrByTouch = !0)
}

function my(e, t) {
    return ue(e.dom, new _y(e, t), !0)
}

function Ac(e, t) {
    for (var r = t, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== t && r === e.painterRoot);) r = r.parentNode;
    return n
}
var _y = function () {
        function e(t, r) {
            this.stopPropagation = ee, this.stopImmediatePropagation = ee, this.preventDefault = ee, this.type = r.type, this.target = this.currentTarget = t.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY
        }
        return e
    }(),
    le = {
        mousedown: function (e) {
            e = ue(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e)
        },
        mousemove: function (e) {
            e = ue(this.dom, e);
            var t = this.__mayPointerCapture;
            t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e)
        },
        mouseup: function (e) {
            e = ue(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e)
        },
        mouseout: function (e) {
            e = ue(this.dom, e);
            var t = e.toElement || e.relatedTarget;
            Ac(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e))
        },
        wheel: function (e) {
            xf = !0, e = ue(this.dom, e), this.trigger("mousewheel", e)
        },
        mousewheel: function (e) {
            xf || (e = ue(this.dom, e), this.trigger("mousewheel", e))
        },
        touchstart: function (e) {
            e = ue(this.dom, e), ts(e), this.__lastTouchMoment = new Date, this.handler.processGesture(e, "start"), le.mousemove.call(this, e), le.mousedown.call(this, e)
        },
        touchmove: function (e) {
            e = ue(this.dom, e), ts(e), this.handler.processGesture(e, "change"), le.mousemove.call(this, e)
        },
        touchend: function (e) {
            e = ue(this.dom, e), ts(e), this.handler.processGesture(e, "end"), le.mouseup.call(this, e), +new Date - +this.__lastTouchMoment < gy && le.click.call(this, e)
        },
        pointerdown: function (e) {
            le.mousedown.call(this, e)
        },
        pointermove: function (e) {
            hu(e) || le.mousemove.call(this, e)
        },
        pointerup: function (e) {
            le.mouseup.call(this, e)
        },
        pointerout: function (e) {
            hu(e) || le.mouseout.call(this, e)
        }
    };
A(["click", "dblclick", "contextmenu"], function (e) {
    le[e] = function (t) {
        t = ue(this.dom, t), this.trigger(e, t)
    }
});
var vu = {
    pointermove: function (e) {
        hu(e) || vu.mousemove.call(this, e)
    },
    pointerup: function (e) {
        vu.mouseup.call(this, e)
    },
    mousemove: function (e) {
        this.trigger("mousemove", e)
    },
    mouseup: function (e) {
        var t = this.__pointerCapturing;
        this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e))
    }
};

function Sy(e, t) {
    var r = t.domHandlers;
    et.pointerEventsSupported ? A(jo.pointer, function (n) {
        Li(t, n, function (a) {
            r[n].call(e, a)
        })
    }) : (et.touchEventsSupported && A(jo.touch, function (n) {
        Li(t, n, function (a) {
            r[n].call(e, a), yy(t)
        })
    }), A(jo.mouse, function (n) {
        Li(t, n, function (a) {
            a = ju(a), t.touching || r[n].call(e, a)
        })
    }))
}

function wy(e, t) {
    et.pointerEventsSupported ? A(Mf.pointer, r) : et.touchEventsSupported || A(Mf.mouse, r);

    function r(n) {
        function a(i) {
            i = ju(i), Ac(e, i.target) || (i = my(e, i), t.domHandlers[n].call(e, i))
        }
        Li(t, n, a, {
            capture: !0
        })
    }
}

function Li(e, t, r, n) {
    e.mounted[t] = r, e.listenerOpts[t] = n, k0(e.domTarget, t, r, n)
}

function es(e) {
    var t = e.mounted;
    for (var r in t) t.hasOwnProperty(r) && O0(e.domTarget, r, t[r], e.listenerOpts[r]);
    e.mounted = {}
}
var Df = function () {
        function e(t, r) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = r
        }
        return e
    }(),
    by = function (e) {
        G(t, e);

        function t(r, n) {
            var a = e.call(this) || this;
            return a.__pointerCapturing = !1, a.dom = r, a.painterRoot = n, a._localHandlerScope = new Df(r, le), Jo && (a._globalHandlerScope = new Df(document, vu)), Sy(a, a._localHandlerScope), a
        }
        return t.prototype.dispose = function () {
            es(this._localHandlerScope), Jo && es(this._globalHandlerScope)
        }, t.prototype.setCursor = function (r) {
            this.dom.style && (this.dom.style.cursor = r || "default")
        }, t.prototype.__togglePointerCapture = function (r) {
            if (this.__mayPointerCapture = null, Jo && +this.__pointerCapturing ^ +r) {
                this.__pointerCapturing = r;
                var n = this._globalHandlerScope;
                r ? wy(this, n) : es(n)
            }
        }, t
    }(Ue);
const Ty = by;
var Lc = 1;
et.hasGlobalWindow && (Lc = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Cf = Lc,
    cu = .4,
    du = "#333",
    pu = "#ccc",
    My = "#eee",
    Af = tl,
    Lf = 5e-5;

function yr(e) {
    return e > Lf || e < -Lf
}
var mr = [],
    rn = [],
    rs = wn(),
    ns = Math.abs,
    nl = function () {
        function e() {}
        return e.prototype.getLocalTransform = function (t) {
            return e.getLocalTransform(this, t)
        }, e.prototype.setPosition = function (t) {
            this.x = t[0], this.y = t[1]
        }, e.prototype.setScale = function (t) {
            this.scaleX = t[0], this.scaleY = t[1]
        }, e.prototype.setSkew = function (t) {
            this.skewX = t[0], this.skewY = t[1]
        }, e.prototype.setOrigin = function (t) {
            this.originX = t[0], this.originY = t[1]
        }, e.prototype.needLocalTransform = function () {
            return yr(this.rotation) || yr(this.x) || yr(this.y) || yr(this.scaleX - 1) || yr(this.scaleY - 1) || yr(this.skewX) || yr(this.skewY)
        }, e.prototype.updateTransform = function () {
            var t = this.parent && this.parent.transform,
                r = this.needLocalTransform(),
                n = this.transform;
            if (!(r || t)) {
                n && (Af(n), this.invTransform = null);
                return
            }
            n = n || wn(), r ? this.getLocalTransform(n) : Af(n), t && (r ? bn(n, t, n) : fc(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n)
        }, e.prototype._resolveGlobalScaleRatio = function (t) {
            var r = this.globalScaleRatio;
            if (r != null && r !== 1) {
                this.getGlobalScale(mr);
                var n = mr[0] < 0 ? -1 : 1,
                    a = mr[1] < 0 ? -1 : 1,
                    i = ((mr[0] - n) * r + n) / mr[0] || 0,
                    o = ((mr[1] - a) * r + a) / mr[1] || 0;
                t[0] *= i, t[1] *= i, t[2] *= o, t[3] *= o
            }
            this.invTransform = this.invTransform || wn(), el(this.invTransform, t)
        }, e.prototype.getComputedTransform = function () {
            for (var t = this, r = []; t;) r.push(t), t = t.parent;
            for (; t = r.pop();) t.updateTransform();
            return this.transform
        }, e.prototype.setLocalTransform = function (t) {
            if (t) {
                var r = t[0] * t[0] + t[1] * t[1],
                    n = t[2] * t[2] + t[3] * t[3],
                    a = Math.atan2(t[1], t[0]),
                    i = Math.PI / 2 + a - Math.atan2(t[3], t[2]);
                n = Math.sqrt(n) * Math.cos(i), r = Math.sqrt(r), this.skewX = i, this.skewY = 0, this.rotation = -a, this.x = +t[4], this.y = +t[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0
            }
        }, e.prototype.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    r = this.transform;
                t && t.transform && (t.invTransform = t.invTransform || wn(), bn(rn, t.invTransform, r), r = rn);
                var n = this.originX,
                    a = this.originY;
                (n || a) && (rs[4] = n, rs[5] = a, bn(rn, r, rs), rn[4] -= n, rn[5] -= a, r = rn), this.setLocalTransform(r)
            }
        }, e.prototype.getGlobalScale = function (t) {
            var r = this.transform;
            return t = t || [], r ? (t[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), t[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (t[0] = -t[0]), r[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
        }, e.prototype.transformCoordToLocal = function (t, r) {
            var n = [t, r],
                a = this.invTransform;
            return a && Pe(n, n, a), n
        }, e.prototype.transformCoordToGlobal = function (t, r) {
            var n = [t, r],
                a = this.transform;
            return a && Pe(n, n, a), n
        }, e.prototype.getLineScale = function () {
            var t = this.transform;
            return t && ns(t[0] - 1) > 1e-10 && ns(t[3] - 1) > 1e-10 ? Math.sqrt(ns(t[0] * t[3] - t[2] * t[1])) : 1
        }, e.prototype.copyTransform = function (t) {
            xy(this, t)
        }, e.getLocalTransform = function (t, r) {
            r = r || [];
            var n = t.originX || 0,
                a = t.originY || 0,
                i = t.scaleX,
                o = t.scaleY,
                s = t.anchorX,
                u = t.anchorY,
                l = t.rotation || 0,
                f = t.x,
                h = t.y,
                c = t.skewX ? Math.tan(t.skewX) : 0,
                v = t.skewY ? Math.tan(-t.skewY) : 0;
            if (n || a || s || u) {
                var d = n + s,
                    y = a + u;
                r[4] = -d * i - c * y * o, r[5] = -y * o - v * d * i
            } else r[4] = r[5] = 0;
            return r[0] = i, r[3] = o, r[1] = v * i, r[2] = c * o, l && hc(r, r, l), r[4] += n + f, r[5] += a + h, r
        }, e.initDefaultProps = function () {
            var t = e.prototype;
            t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0
        }(), e
    }(),
    Ta = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];

function xy(e, t) {
    for (var r = 0; r < Ta.length; r++) {
        var n = Ta[r];
        e[n] = t[n]
    }
}
var If = {};

function Yt(e, t) {
    t = t || Wr;
    var r = If[t];
    r || (r = If[t] = new Ea(500));
    var n = r.get(e);
    return n == null && (n = Ra.measureText(e, t).width, r.put(e, n)), n
}

function Pf(e, t, r, n) {
    var a = Yt(e, t),
        i = al(t),
        o = aa(0, a, r),
        s = pn(0, i, n),
        u = new ot(o, s, a, i);
    return u
}

function Ic(e, t, r, n) {
    var a = ((e || "") + "").split(`
`),
        i = a.length;
    if (i === 1) return Pf(a[0], t, r, n);
    for (var o = new ot(0, 0, 0, 0), s = 0; s < a.length; s++) {
        var u = Pf(a[s], t, r, n);
        s === 0 ? o.copy(u) : o.union(u)
    }
    return o
}

function aa(e, t, r) {
    return r === "right" ? e -= t : r === "center" && (e -= t / 2), e
}

function pn(e, t, r) {
    return r === "middle" ? e -= t / 2 : r === "bottom" && (e -= t), e
}

function al(e) {
    return Yt("å›½", e)
}

function lr(e, t) {
    return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e
}

function Yi(e, t, r) {
    var n = t.position || "inside",
        a = t.distance != null ? t.distance : 5,
        i = r.height,
        o = r.width,
        s = i / 2,
        u = r.x,
        l = r.y,
        f = "left",
        h = "top";
    if (n instanceof Array) u += lr(n[0], r.width), l += lr(n[1], r.height), f = null, h = null;
    else switch (n) {
        case "left":
            u -= a, l += s, f = "right", h = "middle";
            break;
        case "right":
            u += a + o, l += s, h = "middle";
            break;
        case "top":
            u += o / 2, l -= a, f = "center", h = "bottom";
            break;
        case "bottom":
            u += o / 2, l += i + a, f = "center";
            break;
        case "inside":
            u += o / 2, l += s, f = "center", h = "middle";
            break;
        case "insideLeft":
            u += a, l += s, h = "middle";
            break;
        case "insideRight":
            u += o - a, l += s, f = "right", h = "middle";
            break;
        case "insideTop":
            u += o / 2, l += a, f = "center";
            break;
        case "insideBottom":
            u += o / 2, l += i - a, f = "center", h = "bottom";
            break;
        case "insideTopLeft":
            u += a, l += a;
            break;
        case "insideTopRight":
            u += o - a, l += a, f = "right";
            break;
        case "insideBottomLeft":
            u += a, l += i - a, h = "bottom";
            break;
        case "insideBottomRight":
            u += o - a, l += i - a, f = "right", h = "bottom";
            break
    }
    return e = e || {}, e.x = u, e.y = l, e.align = f, e.verticalAlign = h, e
}
var as = "__zr_normal__",
    is = Ta.concat(["ignore"]),
    Dy = ur(Ta, function (e, t) {
        return e[t] = !0, e
    }, {
        ignore: !1
    }),
    nn = {},
    Cy = new ot(0, 0, 0, 0),
    il = function () {
        function e(t) {
            this.id = ac(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
        }
        return e.prototype._init = function (t) {
            this.attr(t)
        }, e.prototype.drift = function (t, r, n) {
            switch (this.draggable) {
                case "horizontal":
                    r = 0;
                    break;
                case "vertical":
                    t = 0;
                    break
            }
            var a = this.transform;
            a || (a = this.transform = [1, 0, 0, 1, 0, 0]), a[4] += t, a[5] += r, this.decomposeTransform(), this.markRedraw()
        }, e.prototype.beforeUpdate = function () {}, e.prototype.afterUpdate = function () {}, e.prototype.update = function () {
            this.updateTransform(), this.__dirty && this.updateInnerText()
        }, e.prototype.updateInnerText = function (t) {
            var r = this._textContent;
            if (r && (!r.ignore || t)) {
                this.textConfig || (this.textConfig = {});
                var n = this.textConfig,
                    a = n.local,
                    i = r.innerTransformable,
                    o = void 0,
                    s = void 0,
                    u = !1;
                i.parent = a ? this : null;
                var l = !1;
                if (i.copyTransform(r), n.position != null) {
                    var f = Cy;
                    n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), a || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(nn, n, f) : Yi(nn, n, f), i.x = nn.x, i.y = nn.y, o = nn.align, s = nn.verticalAlign;
                    var h = n.origin;
                    if (h && n.rotation != null) {
                        var c = void 0,
                            v = void 0;
                        h === "center" ? (c = f.width * .5, v = f.height * .5) : (c = lr(h[0], f.width), v = lr(h[1], f.height)), l = !0, i.originX = -i.x + c + (a ? 0 : f.x), i.originY = -i.y + v + (a ? 0 : f.y)
                    }
                }
                n.rotation != null && (i.rotation = n.rotation);
                var d = n.offset;
                d && (i.x += d[0], i.y += d[1], l || (i.originX = -d[0], i.originY = -d[1]));
                var y = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside,
                    p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
                    g = void 0,
                    m = void 0,
                    _ = void 0;
                y && this.canBeInsideText() ? (g = n.insideFill, m = n.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(g), _ = !0)) : (g = n.outsideFill, m = n.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(g), _ = !0)), g = g || "#000", (g !== p.fill || m !== p.stroke || _ !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = m, p.autoStroke = _, p.align = o, p.verticalAlign = s, r.setDefaultTextStyle(p)), r.__dirty |= De, u && r.dirtyStyle(!0)
            }
        }, e.prototype.canBeInsideText = function () {
            return !0
        }, e.prototype.getInsideTextFill = function () {
            return "#fff"
        }, e.prototype.getInsideTextStroke = function (t) {
            return "#000"
        }, e.prototype.getOutsideFill = function () {
            return this.__zr && this.__zr.isDarkMode() ? pu : du
        }, e.prototype.getOutsideStroke = function (t) {
            var r = this.__zr && this.__zr.getBackgroundColor(),
                n = typeof r == "string" && de(r);
            n || (n = [255, 255, 255, 1]);
            for (var a = n[3], i = this.__zr.isDarkMode(), o = 0; o < 3; o++) n[o] = n[o] * a + (i ? 0 : 255) * (1 - a);
            return n[3] = 1, ka(n, "rgba")
        }, e.prototype.traverse = function (t, r) {}, e.prototype.attrKV = function (t, r) {
            t === "textConfig" ? this.setTextConfig(r) : t === "textContent" ? this.setTextContent(r) : t === "clipPath" ? this.setClipPath(r) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, r)) : this[t] = r
        }, e.prototype.hide = function () {
            this.ignore = !0, this.markRedraw()
        }, e.prototype.show = function () {
            this.ignore = !1, this.markRedraw()
        }, e.prototype.attr = function (t, r) {
            if (typeof t == "string") this.attrKV(t, r);
            else if (Y(t))
                for (var n = t, a = lt(n), i = 0; i < a.length; i++) {
                    var o = a[i];
                    this.attrKV(o, t[o])
                }
            return this.markRedraw(), this
        }, e.prototype.saveCurrentToNormalState = function (t) {
            this._innerSaveToNormal(t);
            for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
                var a = this.animators[n],
                    i = a.__fromStateTransition;
                if (!(a.getLoop() || i && i !== as)) {
                    var o = a.targetName,
                        s = o ? r[o] : r;
                    a.saveTo(s)
                }
            }
        }, e.prototype._innerSaveToNormal = function (t) {
            var r = this._normalState;
            r || (r = this._normalState = {}), t.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(t, r, is)
        }, e.prototype._savePrimaryToNormal = function (t, r, n) {
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                t[i] != null && !(i in r) && (r[i] = this[i])
            }
        }, e.prototype.hasState = function () {
            return this.currentStates.length > 0
        }, e.prototype.getState = function (t) {
            return this.states[t]
        }, e.prototype.ensureState = function (t) {
            var r = this.states;
            return r[t] || (r[t] = {}), r[t]
        }, e.prototype.clearStates = function (t) {
            this.useState(as, !1, t)
        }, e.prototype.useState = function (t, r, n, a) {
            var i = t === as,
                o = this.hasState();
            if (!(!o && i)) {
                var s = this.currentStates,
                    u = this.stateTransition;
                if (!(ct(s, t) >= 0 && (r || s.length === 1))) {
                    var l;
                    if (this.stateProxy && !i && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !i) {
                        ic("State " + t + " not exists.");
                        return
                    }
                    i || this.saveCurrentToNormalState(l);
                    var f = !!(l && l.hoverLayer || a);
                    f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, r, !n && !this.__inHover && u && u.duration > 0, u);
                    var h = this._textContent,
                        c = this._textGuide;
                    return h && h.useState(t, r, n, f), c && c.useState(t, r, n, f), i ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~De), l
                }
            }
        }, e.prototype.useStates = function (t, r, n) {
            if (!t.length) this.clearStates();
            else {
                var a = [],
                    i = this.currentStates,
                    o = t.length,
                    s = o === i.length;
                if (s) {
                    for (var u = 0; u < o; u++)
                        if (t[u] !== i[u]) {
                            s = !1;
                            break
                        }
                }
                if (s) return;
                for (var u = 0; u < o; u++) {
                    var l = t[u],
                        f = void 0;
                    this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && a.push(f)
                }
                var h = a[o - 1],
                    c = !!(h && h.hoverLayer || n);
                c && this._toggleHoverLayerFlag(!0);
                var v = this._mergeStates(a),
                    d = this.stateTransition;
                this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !r && !this.__inHover && d && d.duration > 0, d);
                var y = this._textContent,
                    p = this._textGuide;
                y && y.useStates(t, r, c), p && p.useStates(t, r, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~De)
            }
        }, e.prototype.isSilent = function () {
            for (var t = this.silent, r = this.parent; !t && r;) {
                if (r.silent) {
                    t = !0;
                    break
                }
                r = r.parent
            }
            return t
        }, e.prototype._updateAnimationTargets = function () {
            for (var t = 0; t < this.animators.length; t++) {
                var r = this.animators[t];
                r.targetName && r.changeTarget(this[r.targetName])
            }
        }, e.prototype.removeState = function (t) {
            var r = ct(this.currentStates, t);
            if (r >= 0) {
                var n = this.currentStates.slice();
                n.splice(r, 1), this.useStates(n)
            }
        }, e.prototype.replaceState = function (t, r, n) {
            var a = this.currentStates.slice(),
                i = ct(a, t),
                o = ct(a, r) >= 0;
            i >= 0 ? o ? a.splice(i, 1) : a[i] = r : n && !o && a.push(r), this.useStates(a)
        }, e.prototype.toggleState = function (t, r) {
            r ? this.useState(t, !0) : this.removeState(t)
        }, e.prototype._mergeStates = function (t) {
            for (var r = {}, n, a = 0; a < t.length; a++) {
                var i = t[a];
                O(r, i), i.textConfig && (n = n || {}, O(n, i.textConfig))
            }
            return n && (r.textConfig = n), r
        }, e.prototype._applyStateObj = function (t, r, n, a, i, o) {
            var s = !(r && a);
            r && r.textConfig ? (this.textConfig = O({}, a ? this.textConfig : n.textConfig), O(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
            for (var u = {}, l = !1, f = 0; f < is.length; f++) {
                var h = is[f],
                    c = i && Dy[h];
                r && r[h] != null ? c ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && n[h] != null && (c ? (l = !0, u[h] = n[h]) : this[h] = n[h])
            }
            if (!i)
                for (var f = 0; f < this.animators.length; f++) {
                    var v = this.animators[f],
                        d = v.targetName;
                    v.getLoop() || v.__changeFinalValue(d ? (r || n)[d] : r || n)
                }
            l && this._transitionState(t, u, o)
        }, e.prototype._attachComponent = function (t) {
            if (!(t.__zr && !t.__hostTarget) && t !== this) {
                var r = this.__zr;
                r && t.addSelfToZr(r), t.__zr = r, t.__hostTarget = this
            }
        }, e.prototype._detachComponent = function (t) {
            t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
        }, e.prototype.getClipPath = function () {
            return this._clipPath
        }, e.prototype.setClipPath = function (t) {
            this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
        }, e.prototype.removeClipPath = function () {
            var t = this._clipPath;
            t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
        }, e.prototype.getTextContent = function () {
            return this._textContent
        }, e.prototype.setTextContent = function (t) {
            var r = this._textContent;
            r !== t && (r && r !== t && this.removeTextContent(), t.innerTransformable = new nl, this._attachComponent(t), this._textContent = t, this.markRedraw())
        }, e.prototype.setTextConfig = function (t) {
            this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw()
        }, e.prototype.removeTextConfig = function () {
            this.textConfig = null, this.markRedraw()
        }, e.prototype.removeTextContent = function () {
            var t = this._textContent;
            t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
        }, e.prototype.getTextGuideLine = function () {
            return this._textGuide
        }, e.prototype.setTextGuideLine = function (t) {
            this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
        }, e.prototype.removeTextGuideLine = function () {
            var t = this._textGuide;
            t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
        }, e.prototype.markRedraw = function () {
            this.__dirty |= De;
            var t = this.__zr;
            t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
        }, e.prototype.dirty = function () {
            this.markRedraw()
        }, e.prototype._toggleHoverLayerFlag = function (t) {
            this.__inHover = t;
            var r = this._textContent,
                n = this._textGuide;
            r && (r.__inHover = t), n && (n.__inHover = t)
        }, e.prototype.addSelfToZr = function (t) {
            if (this.__zr !== t) {
                this.__zr = t;
                var r = this.animators;
                if (r)
                    for (var n = 0; n < r.length; n++) t.animation.addAnimator(r[n]);
                this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
            }
        }, e.prototype.removeSelfFromZr = function (t) {
            if (this.__zr) {
                this.__zr = null;
                var r = this.animators;
                if (r)
                    for (var n = 0; n < r.length; n++) t.animation.removeAnimator(r[n]);
                this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
            }
        }, e.prototype.animate = function (t, r, n) {
            var a = t ? this[t] : this,
                i = new rl(a, r, n);
            return t && (i.targetName = t), this.addAnimator(i, t), i
        }, e.prototype.addAnimator = function (t, r) {
            var n = this.__zr,
                a = this;
            t.during(function () {
                a.updateDuringAnimation(r)
            }).done(function () {
                var i = a.animators,
                    o = ct(i, t);
                o >= 0 && i.splice(o, 1)
            }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp()
        }, e.prototype.updateDuringAnimation = function (t) {
            this.markRedraw()
        }, e.prototype.stopAnimation = function (t, r) {
            for (var n = this.animators, a = n.length, i = [], o = 0; o < a; o++) {
                var s = n[o];
                !t || t === s.scope ? s.stop(r) : i.push(s)
            }
            return this.animators = i, this
        }, e.prototype.animateTo = function (t, r, n) {
            os(this, t, r, n)
        }, e.prototype.animateFrom = function (t, r, n) {
            os(this, t, r, n, !0)
        }, e.prototype._transitionState = function (t, r, n, a) {
            for (var i = os(this, r, n, a), o = 0; o < i.length; o++) i[o].__fromStateTransition = t
        }, e.prototype.getBoundingRect = function () {
            return null
        }, e.prototype.getPaintRect = function () {
            return null
        }, e.initDefaultProps = function () {
            var t = e.prototype;
            t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = De;

            function r(n, a, i, o) {
                Object.defineProperty(t, n, {
                    get: function () {
                        if (!this[a]) {
                            var u = this[a] = [];
                            s(this, u)
                        }
                        return this[a]
                    },
                    set: function (u) {
                        this[i] = u[0], this[o] = u[1], this[a] = u, s(this, u)
                    }
                });

                function s(u, l) {
                    Object.defineProperty(l, 0, {
                        get: function () {
                            return u[i]
                        },
                        set: function (f) {
                            u[i] = f
                        }
                    }), Object.defineProperty(l, 1, {
                        get: function () {
                            return u[o]
                        },
                        set: function (f) {
                            u[o] = f
                        }
                    })
                }
            }
            Object.defineProperty && (r("position", "_legacyPos", "x", "y"), r("scale", "_legacyScale", "scaleX", "scaleY"), r("origin", "_legacyOrigin", "originX", "originY"))
        }(), e
    }();
ke(il, Ue);
ke(il, nl);

function os(e, t, r, n, a) {
    r = r || {};
    var i = [];
    Pc(e, "", e, t, r, n, i, a);
    var o = i.length,
        s = !1,
        u = r.done,
        l = r.aborted,
        f = function () {
            s = !0, o--, o <= 0 && (s ? u && u() : l && l())
        },
        h = function () {
            o--, o <= 0 && (s ? u && u() : l && l())
        };
    o || u && u(), i.length > 0 && r.during && i[0].during(function (d, y) {
        r.during(y)
    });
    for (var c = 0; c < i.length; c++) {
        var v = i[c];
        f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing)
    }
    return i
}

function ss(e, t, r) {
    for (var n = 0; n < r; n++) e[n] = t[n]
}

function Ay(e) {
    return Bt(e[0])
}

function Ly(e, t, r) {
    if (Bt(t[r]))
        if (Bt(e[r]) || (e[r] = []), zt(t[r])) {
            var n = t[r].length;
            e[r].length !== n && (e[r] = new t[r].constructor(n), ss(e[r], t[r], n))
        } else {
            var a = t[r],
                i = e[r],
                o = a.length;
            if (Ay(a))
                for (var s = a[0].length, u = 0; u < o; u++) i[u] ? ss(i[u], a[u], s) : i[u] = Array.prototype.slice.call(a[u]);
            else ss(i, a, o);
            i.length = a.length
        }
    else e[r] = t[r]
}

function Iy(e, t) {
    return e === t || Bt(e) && Bt(t) && Py(e, t)
}

function Py(e, t) {
    var r = e.length;
    if (r !== t.length) return !1;
    for (var n = 0; n < r; n++)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Pc(e, t, r, n, a, i, o, s) {
    for (var u = lt(n), l = a.duration, f = a.delay, h = a.additive, c = a.setToFinal, v = !Y(i), d = e.animators, y = [], p = 0; p < u.length; p++) {
        var g = u[p],
            m = n[g];
        if (m != null && r[g] != null && (v || i[g]))
            if (Y(m) && !Bt(m) && !Qu(m)) {
                if (t) {
                    s || (r[g] = m, e.updateDuringAnimation(t));
                    continue
                }
                Pc(e, g, r[g], m, a, i && i[g], o, s)
            } else y.push(g);
        else s || (r[g] = m, e.updateDuringAnimation(t), y.push(g))
    }
    var _ = y.length;
    if (!h && _)
        for (var S = 0; S < d.length; S++) {
            var b = d[S];
            if (b.targetName === t) {
                var w = b.stopTracks(y);
                if (w) {
                    var x = ct(d, b);
                    d.splice(x, 1)
                }
            }
        }
    if (a.force || (y = Wt(y, function (M) {
            return !Iy(n[M], r[M])
        }), _ = y.length), _ > 0 || a.force && !o.length) {
        var T = void 0,
            D = void 0,
            C = void 0;
        if (s) {
            D = {}, c && (T = {});
            for (var S = 0; S < _; S++) {
                var g = y[S];
                D[g] = r[g], c ? T[g] = n[g] : r[g] = n[g]
            }
        } else if (c) {
            C = {};
            for (var S = 0; S < _; S++) {
                var g = y[S];
                C[g] = Di(r[g]), Ly(r, n, g)
            }
        }
        var b = new rl(r, !1, !1, h ? Wt(d, function (L) {
            return L.targetName === t
        }) : null);
        b.targetName = t, a.scope && (b.scope = a.scope), c && T && b.whenWithKeys(0, T, y), C && b.whenWithKeys(0, C, y), b.whenWithKeys(l ? ? 500, s ? D : n, y).delay(f || 0), e.addAnimator(b, t), o.push(b)
    }
}
const Rc = il;
var ye = function (e) {
    G(t, e);

    function t(r) {
        var n = e.call(this) || this;
        return n.isGroup = !0, n._children = [], n.attr(r), n
    }
    return t.prototype.childrenRef = function () {
        return this._children
    }, t.prototype.children = function () {
        return this._children.slice()
    }, t.prototype.childAt = function (r) {
        return this._children[r]
    }, t.prototype.childOfName = function (r) {
        for (var n = this._children, a = 0; a < n.length; a++)
            if (n[a].name === r) return n[a]
    }, t.prototype.childCount = function () {
        return this._children.length
    }, t.prototype.add = function (r) {
        return r && r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), this
    }, t.prototype.addBefore = function (r, n) {
        if (r && r !== this && r.parent !== this && n && n.parent === this) {
            var a = this._children,
                i = a.indexOf(n);
            i >= 0 && (a.splice(i, 0, r), this._doAdd(r))
        }
        return this
    }, t.prototype.replace = function (r, n) {
        var a = ct(this._children, r);
        return a >= 0 && this.replaceAt(n, a), this
    }, t.prototype.replaceAt = function (r, n) {
        var a = this._children,
            i = a[n];
        if (r && r !== this && r.parent !== this && r !== i) {
            a[n] = r, i.parent = null;
            var o = this.__zr;
            o && i.removeSelfFromZr(o), this._doAdd(r)
        }
        return this
    }, t.prototype._doAdd = function (r) {
        r.parent && r.parent.remove(r), r.parent = this;
        var n = this.__zr;
        n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh()
    }, t.prototype.remove = function (r) {
        var n = this.__zr,
            a = this._children,
            i = ct(a, r);
        return i < 0 ? this : (a.splice(i, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this)
    }, t.prototype.removeAll = function () {
        for (var r = this._children, n = this.__zr, a = 0; a < r.length; a++) {
            var i = r[a];
            n && i.removeSelfFromZr(n), i.parent = null
        }
        return r.length = 0, this
    }, t.prototype.eachChild = function (r, n) {
        for (var a = this._children, i = 0; i < a.length; i++) {
            var o = a[i];
            r.call(n, o, i)
        }
        return this
    }, t.prototype.traverse = function (r, n) {
        for (var a = 0; a < this._children.length; a++) {
            var i = this._children[a],
                o = r.call(n, i);
            i.isGroup && !o && i.traverse(r, n)
        }
        return this
    }, t.prototype.addSelfToZr = function (r) {
        e.prototype.addSelfToZr.call(this, r);
        for (var n = 0; n < this._children.length; n++) {
            var a = this._children[n];
            a.addSelfToZr(r)
        }
    }, t.prototype.removeSelfFromZr = function (r) {
        e.prototype.removeSelfFromZr.call(this, r);
        for (var n = 0; n < this._children.length; n++) {
            var a = this._children[n];
            a.removeSelfFromZr(r)
        }
    }, t.prototype.getBoundingRect = function (r) {
        for (var n = new ot(0, 0, 0, 0), a = r || this._children, i = [], o = null, s = 0; s < a.length; s++) {
            var u = a[s];
            if (!(u.ignore || u.invisible)) {
                var l = u.getBoundingRect(),
                    f = u.getLocalTransform(i);
                f ? (ot.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l))
            }
        }
        return o || n
    }, t
}(Rc);
ye.prototype.type = "group";
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */
var Ii = {},
    Ec = {};

function Ry(e) {
    delete Ec[e]
}

function Ey(e) {
    if (!e) return !1;
    if (typeof e == "string") return Wi(e, 1) < cu;
    if (e.colorStops) {
        for (var t = e.colorStops, r = 0, n = t.length, a = 0; a < n; a++) r += Wi(t[a].color, 1);
        return r /= n, r < cu
    }
    return !1
}
var ky = function () {
    function e(t, r, n) {
        var a = this;
        this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = r, this.id = t;
        var i = new K0,
            o = n.renderer || "canvas";
        Ii[o] || (o = lt(Ii)[0]), n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
        var s = new Ii[o](r, i, n, t),
            u = n.ssr || s.ssrOnly;
        this.storage = i, this.painter = s;
        var l = !et.node && !et.worker && !u ? new Ty(s.getViewportRoot(), s.root) : null,
            f = n.useCoarsePointer,
            h = f == null || f === "auto" ? et.touchEventsSupported : !!f,
            c = 44,
            v;
        h && (v = X(n.pointerSize, c)), this.handler = new $0(i, s, l, s.root, v), this.animation = new py({
            stage: {
                update: u ? null : function () {
                    return a._flush(!0)
                }
            }
        }), u || this.animation.start()
    }
    return e.prototype.add = function (t) {
        this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
    }, e.prototype.remove = function (t) {
        this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }, e.prototype.configLayer = function (t, r) {
        this._disposed || (this.painter.configLayer && this.painter.configLayer(t, r), this.refresh())
    }, e.prototype.setBackgroundColor = function (t) {
        this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = Ey(t))
    }, e.prototype.getBackgroundColor = function () {
        return this._backgroundColor
    }, e.prototype.setDarkMode = function (t) {
        this._darkMode = t
    }, e.prototype.isDarkMode = function () {
        return this._darkMode
    }, e.prototype.refreshImmediately = function (t) {
        this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1)
    }, e.prototype.refresh = function () {
        this._disposed || (this._needsRefresh = !0, this.animation.start())
    }, e.prototype.flush = function () {
        this._disposed || this._flush(!1)
    }, e.prototype._flush = function (t) {
        var r, n = mn();
        this._needsRefresh && (r = !0, this.refreshImmediately(t)), this._needsRefreshHover && (r = !0, this.refreshHoverImmediately());
        var a = mn();
        r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
            elapsedTime: a - n
        })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
    }, e.prototype.setSleepAfterStill = function (t) {
        this._sleepAfterStill = t
    }, e.prototype.wakeUp = function () {
        this._disposed || (this.animation.start(), this._stillFrameAccum = 0)
    }, e.prototype.refreshHover = function () {
        this._needsRefreshHover = !0
    }, e.prototype.refreshHoverImmediately = function () {
        this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover())
    }, e.prototype.resize = function (t) {
        this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize())
    }, e.prototype.clearAnimation = function () {
        this._disposed || this.animation.clear()
    }, e.prototype.getWidth = function () {
        if (!this._disposed) return this.painter.getWidth()
    }, e.prototype.getHeight = function () {
        if (!this._disposed) return this.painter.getHeight()
    }, e.prototype.setCursorStyle = function (t) {
        this._disposed || this.handler.setCursorStyle(t)
    }, e.prototype.findHover = function (t, r) {
        if (!this._disposed) return this.handler.findHover(t, r)
    }, e.prototype.on = function (t, r, n) {
        return this._disposed || this.handler.on(t, r, n), this
    }, e.prototype.off = function (t, r) {
        this._disposed || this.handler.off(t, r)
    }, e.prototype.trigger = function (t, r) {
        this._disposed || this.handler.trigger(t, r)
    }, e.prototype.clear = function () {
        if (!this._disposed) {
            for (var t = this.storage.getRoots(), r = 0; r < t.length; r++) t[r] instanceof ye && t[r].removeSelfFromZr(this);
            this.storage.delAllRoots(), this.painter.clear()
        }
    }, e.prototype.dispose = function () {
        this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, Ry(this.id))
    }, e
}();

function Rf(e, t) {
    var r = new ky(ac(), e, t);
    return Ec[r.id] = r, r
}

function Oy(e, t) {
    Ii[e] = t
}
var gu;

function rD(e) {
    if (typeof gu == "function") return gu(e)
}

function Ny(e) {
    gu = e
}
var Ef = 1e-4,
    kc = 20;

function Fy(e) {
    return e.replace(/^\s+|\s+$/g, "")
}

function yu(e, t, r, n) {
    var a = t[0],
        i = t[1],
        o = r[0],
        s = r[1],
        u = i - a,
        l = s - o;
    if (u === 0) return l === 0 ? o : (o + s) / 2;
    if (n)
        if (u > 0) {
            if (e <= a) return o;
            if (e >= i) return s
        } else {
            if (e >= a) return o;
            if (e <= i) return s
        }
    else {
        if (e === a) return o;
        if (e === i) return s
    }
    return (e - a) / u * l + o
}

function rt(e, t) {
    switch (e) {
        case "center":
        case "middle":
            e = "50%";
            break;
        case "left":
        case "top":
            e = "0%";
            break;
        case "right":
        case "bottom":
            e = "100%";
            break
    }
    return U(e) ? Fy(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e == null ? NaN : +e
}

function dt(e, t, r) {
    return t == null && (t = 10), t = Math.min(Math.max(0, t), kc), e = (+e).toFixed(t), r ? e : +e
}

function nD(e) {
    return e.sort(function (t, r) {
        return t - r
    }), e
}

function Ge(e) {
    if (e = +e, isNaN(e)) return 0;
    if (e > 1e-14) {
        for (var t = 1, r = 0; r < 15; r++, t *= 10)
            if (Math.round(e * t) / t === e) return r
    }
    return By(e)
}

function By(e) {
    var t = e.toString().toLowerCase(),
        r = t.indexOf("e"),
        n = r > 0 ? +t.slice(r + 1) : 0,
        a = r > 0 ? r : t.length,
        i = t.indexOf("."),
        o = i < 0 ? 0 : a - 1 - i;
    return Math.max(0, o - n)
}

function zy(e, t) {
    var r = Math.log,
        n = Math.LN10,
        a = Math.floor(r(e[1] - e[0]) / n),
        i = Math.round(r(Math.abs(t[1] - t[0])) / n),
        o = Math.min(Math.max(-a + i, 0), 20);
    return isFinite(o) ? o : 20
}

function Vy(e, t) {
    var r = ur(e, function (v, d) {
        return v + (isNaN(d) ? 0 : d)
    }, 0);
    if (r === 0) return [];
    for (var n = Math.pow(10, t), a = V(e, function (v) {
            return (isNaN(v) ? 0 : v) / r * n * 100
        }), i = n * 100, o = V(a, function (v) {
            return Math.floor(v)
        }), s = ur(o, function (v, d) {
            return v + d
        }, 0), u = V(a, function (v, d) {
            return v - o[d]
        }); s < i;) {
        for (var l = Number.NEGATIVE_INFINITY, f = null, h = 0, c = u.length; h < c; ++h) u[h] > l && (l = u[h], f = h);
        ++o[f], u[f] = 0, ++s
    }
    return V(o, function (v) {
        return v / n
    })
}

function Gy(e, t) {
    var r = Math.max(Ge(e), Ge(t)),
        n = e + t;
    return r > kc ? n : dt(n, r)
}
var aD = 9007199254740991;

function Oc(e) {
    var t = Math.PI * 2;
    return (e % t + t) % t
}

function $i(e) {
    return e > -Ef && e < Ef
}
var Hy = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;

function We(e) {
    if (e instanceof Date) return e;
    if (U(e)) {
        var t = Hy.exec(e);
        if (!t) return new Date(NaN);
        if (t[8]) {
            var r = +t[4] || 0;
            return t[8].toUpperCase() !== "Z" && (r -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0))
        } else return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0)
    } else if (e == null) return new Date(NaN);
    return new Date(Math.round(e))
}

function Wy(e) {
    return Math.pow(10, ol(e))
}

function ol(e) {
    if (e === 0) return 0;
    var t = Math.floor(Math.log(e) / Math.LN10);
    return e / Math.pow(10, t) >= 10 && t++, t
}

function Nc(e, t) {
    var r = ol(e),
        n = Math.pow(10, r),
        a = e / n,
        i;
    return t ? a < 1.5 ? i = 1 : a < 2.5 ? i = 2 : a < 4 ? i = 3 : a < 7 ? i = 5 : i = 10 : a < 1 ? i = 1 : a < 2 ? i = 2 : a < 3 ? i = 3 : a < 5 ? i = 5 : i = 10, e = i * n, r >= -20 ? +e.toFixed(r < 0 ? -r : 0) : e
}

function iD(e, t) {
    var r = (e.length - 1) * t + 1,
        n = Math.floor(r),
        a = +e[n - 1],
        i = r - n;
    return i ? a + i * (e[n] - a) : a
}

function oD(e) {
    e.sort(function (u, l) {
        return s(u, l, 0) ? -1 : 1
    });
    for (var t = -1 / 0, r = 1, n = 0; n < e.length;) {
        for (var a = e[n].interval, i = e[n].close, o = 0; o < 2; o++) a[o] <= t && (a[o] = t, i[o] = o ? 1 : 1 - r), t = a[o], r = i[o];
        a[0] === a[1] && i[0] * i[1] !== 1 ? e.splice(n, 1) : n++
    }
    return e;

    function s(u, l, f) {
        return u.interval[f] < l.interval[f] || u.interval[f] === l.interval[f] && (u.close[f] - l.close[f] === (f ? -1 : 1) || !f && s(u, l, 1))
    }
}

function fr(e) {
    var t = parseFloat(e);
    return t == e && (t !== 0 || !U(e) || e.indexOf("x") <= 0) ? t : NaN
}

function Uy(e) {
    return !isNaN(fr(e))
}

function Fc() {
    return Math.round(Math.random() * 9)
}

function Bc(e, t) {
    return t === 0 ? e : Bc(t, e % t)
}

function kf(e, t) {
    return e == null ? t : t == null ? e : e * t / Bc(e, t)
}
var Yy = "[ECharts] ",
    Of = {},
    $y = typeof console < "u" && console.warn && console.log;

function Xy(e, t, r) {
    if ($y) {
        if (r) {
            if (Of[t]) return;
            Of[t] = !0
        }
        console[e](Yy + t)
    }
}

function sD(e, t) {
    Xy("warn", e, t)
}

function kt(e) {
    throw new Error(e)
}

function Nf(e, t, r) {
    return (t - e) * r + e
}
var zc = "series\0",
    Vc = "\0_ec_\0";

function Tt(e) {
    return e instanceof Array ? e : e == null ? [] : [e]
}

function mu(e, t, r) {
    if (e) {
        e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
        for (var n = 0, a = r.length; n < a; n++) {
            var i = r[n];
            !e.emphasis[t].hasOwnProperty(i) && e[t].hasOwnProperty(i) && (e.emphasis[t][i] = e[t][i])
        }
    }
}
var Ff = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];

function Oa(e) {
    return Y(e) && !B(e) && !(e instanceof Date) ? e.value : e
}

function qy(e) {
    return Y(e) && !(e instanceof Array)
}

function Zy(e, t, r) {
    var n = r === "normalMerge",
        a = r === "replaceMerge",
        i = r === "replaceAll";
    e = e || [], t = (t || []).slice();
    var o = K();
    A(t, function (u, l) {
        if (!Y(u)) {
            t[l] = null;
            return
        }
    });
    var s = Ky(e, o, r);
    return (n || a) && Qy(s, e, o, t), n && Jy(s, t), n || a ? jy(s, t, a) : i && tm(s, t), em(s), s
}

function Ky(e, t, r) {
    var n = [];
    if (r === "replaceAll") return n;
    for (var a = 0; a < e.length; a++) {
        var i = e[a];
        i && i.id != null && t.set(i.id, a), n.push({
            existing: r === "replaceMerge" || Ma(i) ? null : i,
            newOption: null,
            keyInfo: null,
            brandNew: null
        })
    }
    return n
}

function Qy(e, t, r, n) {
    A(n, function (a, i) {
        if (!(!a || a.id == null)) {
            var o = va(a.id),
                s = r.get(o);
            if (s != null) {
                var u = e[s];
                Re(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = a, u.existing = t[s], n[i] = null
            }
        }
    })
}

function Jy(e, t) {
    A(t, function (r, n) {
        if (!(!r || r.name == null))
            for (var a = 0; a < e.length; a++) {
                var i = e[a].existing;
                if (!e[a].newOption && i && (i.id == null || r.id == null) && !Ma(r) && !Ma(i) && Gc("name", i, r)) {
                    e[a].newOption = r, t[n] = null;
                    return
                }
            }
    })
}

function jy(e, t, r) {
    A(t, function (n) {
        if (n) {
            for (var a, i = 0;
                (a = e[i]) && (a.newOption || Ma(a.existing) || a.existing && n.id != null && !Gc("id", n, a.existing));) i++;
            a ? (a.newOption = n, a.brandNew = r) : e.push({
                newOption: n,
                brandNew: r,
                existing: null,
                keyInfo: null
            }), i++
        }
    })
}

function tm(e, t) {
    A(t, function (r) {
        e.push({
            newOption: r,
            brandNew: !0,
            existing: null,
            keyInfo: null
        })
    })
}

function em(e) {
    var t = K();
    A(e, function (r) {
        var n = r.existing;
        n && t.set(n.id, r)
    }), A(e, function (r) {
        var n = r.newOption;
        Re(!n || n.id == null || !t.get(n.id) || t.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, r), !r.keyInfo && (r.keyInfo = {})
    }), A(e, function (r, n) {
        var a = r.existing,
            i = r.newOption,
            o = r.keyInfo;
        if (Y(i)) {
            if (o.name = i.name != null ? va(i.name) : a ? a.name : zc + n, a) o.id = va(a.id);
            else if (i.id != null) o.id = va(i.id);
            else {
                var s = 0;
                do o.id = "\0" + o.name + "\0" + s++; while (t.get(o.id))
            }
            t.set(o.id, r)
        }
    })
}

function Gc(e, t, r) {
    var n = pe(t[e], null),
        a = pe(r[e], null);
    return n != null && a != null && n === a
}

function va(e) {
    return pe(e, "")
}

function pe(e, t) {
    return e == null ? t : U(e) ? e : it(e) || js(e) ? e + "" : t
}

function Hc(e) {
    var t = e.name;
    return !!(t && t.indexOf(zc))
}

function Ma(e) {
    return e && e.id != null && va(e.id).indexOf(Vc) === 0
}

function uD(e) {
    return Vc + e
}

function rm(e, t, r) {
    A(e, function (n) {
        var a = n.newOption;
        Y(a) && (n.keyInfo.mainType = t, n.keyInfo.subType = nm(t, a, n.existing, r))
    })
}

function nm(e, t, r, n) {
    var a = t.type ? t.type : r ? r.subType : n.determineSubType(e, t);
    return a
}

function lD(e, t) {
    var r = {},
        n = {};
    return a(e || [], r), a(t || [], n, r), [i(r), i(n)];

    function a(o, s, u) {
        for (var l = 0, f = o.length; l < f; l++) {
            var h = pe(o[l].seriesId, null);
            if (h == null) return;
            for (var c = Tt(o[l].dataIndex), v = u && u[h], d = 0, y = c.length; d < y; d++) {
                var p = c[d];
                v && v[p] ? v[p] = null : (s[h] || (s[h] = {}))[p] = 1
            }
        }
    }

    function i(o, s) {
        var u = [];
        for (var l in o)
            if (o.hasOwnProperty(l) && o[l] != null)
                if (s) u.push(+l);
                else {
                    var f = i(o[l], !0);
                    f.length && u.push({
                        seriesId: l,
                        dataIndex: f
                    })
                } return u
    }
}

function go(e, t) {
    if (t.dataIndexInside != null) return t.dataIndexInside;
    if (t.dataIndex != null) return B(t.dataIndex) ? V(t.dataIndex, function (r) {
        return e.indexOfRawIndex(r)
    }) : e.indexOfRawIndex(t.dataIndex);
    if (t.name != null) return B(t.name) ? V(t.name, function (r) {
        return e.indexOfName(r)
    }) : e.indexOfName(t.name)
}

function At() {
    var e = "__ec_inner_" + am++;
    return function (t) {
        return t[e] || (t[e] = {})
    }
}
var am = Fc();

function us(e, t, r) {
    var n = Wc(t, r),
        a = n.mainTypeSpecified,
        i = n.queryOptionMap,
        o = n.others,
        s = o,
        u = r ? r.defaultMainType : null;
    return !a && u && i.set(u, {}), i.each(function (l, f) {
        var h = yo(e, f, l, {
            useDefault: u === f,
            enableAll: r && r.enableAll != null ? r.enableAll : !0,
            enableNone: r && r.enableNone != null ? r.enableNone : !0
        });
        s[f + "Models"] = h.models, s[f + "Model"] = h.models[0]
    }), s
}

function Wc(e, t) {
    var r;
    if (U(e)) {
        var n = {};
        n[e + "Index"] = 0, r = n
    } else r = e;
    var a = K(),
        i = {},
        o = !1;
    return A(r, function (s, u) {
        if (u === "dataIndex" || u === "dataIndexInside") {
            i[u] = s;
            return
        }
        var l = u.match(/^(\w+)(Index|Id|Name)$/) || [],
            f = l[1],
            h = (l[2] || "").toLowerCase();
        if (!(!f || !h || t && t.includeMainTypes && ct(t.includeMainTypes, f) < 0)) {
            o = o || !!f;
            var c = a.get(f) || a.set(f, {});
            c[h] = s
        }
    }), {
        mainTypeSpecified: o,
        queryOptionMap: a,
        others: i
    }
}
var Or = {
        useDefault: !0,
        enableAll: !1,
        enableNone: !1
    },
    fD = {
        useDefault: !1,
        enableAll: !0,
        enableNone: !0
    };

function yo(e, t, r, n) {
    n = n || Or;
    var a = r.index,
        i = r.id,
        o = r.name,
        s = {
            models: null,
            specified: a != null || i != null || o != null
        };
    if (!s.specified) {
        var u = void 0;
        return s.models = n.useDefault && (u = e.getComponent(t)) ? [u] : [], s
    }
    return a === "none" || a === !1 ? (Re(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (a === "all" && (Re(n.enableAll, '`"all"` is not a valid value on index option.'), a = i = o = null), s.models = e.queryComponents({
        mainType: t,
        index: a,
        id: i,
        name: o
    }), s)
}

function Uc(e, t, r) {
    e.setAttribute ? e.setAttribute(t, r) : e[t] = r
}

function im(e, t) {
    return e.getAttribute ? e.getAttribute(t) : e[t]
}

function hD(e) {
    return e === "auto" ? et.domSupported ? "html" : "richText" : e || "html"
}

function vD(e, t) {
    var r = K(),
        n = [];
    return A(e, function (a) {
        var i = t(a);
        (r.get(i) || (n.push(i), r.set(i, []))).push(a)
    }), {
        keys: n,
        buckets: r
    }
}

function om(e, t, r, n, a) {
    var i = t == null || t === "auto";
    if (n == null) return n;
    if (it(n)) {
        var o = Nf(r || 0, n, a);
        return dt(o, i ? Math.max(Ge(r || 0), Ge(n)) : t)
    } else {
        if (U(n)) return a < 1 ? r : n;
        for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
            var c = e.getDimensionInfo(h);
            if (c && c.type === "ordinal") s[h] = (a < 1 && u ? u : l)[h];
            else {
                var v = u && u[h] ? u[h] : 0,
                    d = l[h],
                    o = Nf(v, d, a);
                s[h] = dt(o, i ? Math.max(Ge(v), Ge(d)) : t)
            }
        }
        return s
    }
}
var sm = ".",
    _r = "___EC__COMPONENT__CONTAINER___",
    Yc = "___EC__EXTENDED_CLASS___";

function Le(e) {
    var t = {
        main: "",
        sub: ""
    };
    if (e) {
        var r = e.split(sm);
        t.main = r[0] || "", t.sub = r[1] || ""
    }
    return t
}

function um(e) {
    Re(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal')
}

function lm(e) {
    return !!(e && e[Yc])
}

function sl(e, t) {
    e.$constructor = e, e.extend = function (r) {
        var n = this,
            a;
        return fm(n) ? a = function (i) {
            G(o, i);

            function o() {
                return i.apply(this, arguments) || this
            }
            return o
        }(n) : (a = function () {
            (r.$constructor || n).apply(this, arguments)
        }, h0(a, this)), O(a.prototype, r), a[Yc] = !0, a.extend = this.extend, a.superCall = cm, a.superApply = dm, a.superClass = n, a
    }
}

function fm(e) {
    return Q(e) && /^class\s/.test(Function.prototype.toString.call(e))
}

function $c(e, t) {
    e.extend = t.extend
}
var hm = Math.round(Math.random() * 10);

function vm(e) {
    var t = ["__\0is_clz", hm++].join("_");
    e.prototype[t] = !0, e.isInstance = function (r) {
        return !!(r && r[t])
    }
}

function cm(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    return this.superClass.prototype[t].apply(e, r)
}

function dm(e, t, r) {
    return this.superClass.prototype[t].apply(e, r)
}

function mo(e) {
    var t = {};
    e.registerClass = function (n) {
        var a = n.type || n.prototype.type;
        if (a) {
            um(a), n.prototype.type = a;
            var i = Le(a);
            if (!i.sub) t[i.main] = n;
            else if (i.sub !== _r) {
                var o = r(i);
                o[i.sub] = n
            }
        }
        return n
    }, e.getClass = function (n, a, i) {
        var o = t[n];
        if (o && o[_r] && (o = a ? o[a] : null), i && !o) throw new Error(a ? "Component " + n + "." + (a || "") + " is used but not imported." : n + ".type should be specified.");
        return o
    }, e.getClassesByMainType = function (n) {
        var a = Le(n),
            i = [],
            o = t[a.main];
        return o && o[_r] ? A(o, function (s, u) {
            u !== _r && i.push(s)
        }) : i.push(o), i
    }, e.hasClass = function (n) {
        var a = Le(n);
        return !!t[a.main]
    }, e.getAllClassMainTypes = function () {
        var n = [];
        return A(t, function (a, i) {
            n.push(i)
        }), n
    }, e.hasSubTypes = function (n) {
        var a = Le(n),
            i = t[a.main];
        return i && i[_r]
    };

    function r(n) {
        var a = t[n.main];
        return (!a || !a[_r]) && (a = t[n.main] = {}, a[_r] = !0), a
    }
}

function xa(e, t) {
    for (var r = 0; r < e.length; r++) e[r][1] || (e[r][1] = e[r][0]);
    return t = t || !1,
        function (n, a, i) {
            for (var o = {}, s = 0; s < e.length; s++) {
                var u = e[s][1];
                if (!(a && ct(a, u) >= 0 || i && ct(i, u) < 0)) {
                    var l = n.getShallow(u, t);
                    l != null && (o[e[s][0]] = l)
                }
            }
            return o
        }
}
var pm = [
        ["fill", "color"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["opacity"],
        ["shadowColor"]
    ],
    gm = xa(pm),
    ym = function () {
        function e() {}
        return e.prototype.getAreaStyle = function (t, r) {
            return gm(this, t, r)
        }, e
    }(),
    _u = new Ea(50);

function mm(e) {
    if (typeof e == "string") {
        var t = _u.get(e);
        return t && t.image
    } else return e
}

function Xc(e, t, r, n, a) {
    if (e)
        if (typeof e == "string") {
            if (t && t.__zrImageSrc === e || !r) return t;
            var i = _u.get(e),
                o = {
                    hostEl: r,
                    cb: n,
                    cbPayload: a
                };
            return i ? (t = i.image, !_o(t) && i.pending.push(o)) : (t = Ra.loadImage(e, Bf, Bf), t.__zrImageSrc = e, _u.put(e, t.__cachedImgObj = {
                image: t,
                pending: [o]
            })), t
        } else return e;
    else return t
}

function Bf() {
    var e = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var t = 0; t < e.pending.length; t++) {
        var r = e.pending[t],
            n = r.cb;
        n && n(this, r.cbPayload), r.hostEl.dirty()
    }
    e.pending.length = 0
}

function _o(e) {
    return e && e.width && e.height
}
var ls = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;

function _m(e, t, r, n, a) {
    if (!t) return "";
    var i = (e + "").split(`
`);
    a = qc(t, r, n, a);
    for (var o = 0, s = i.length; o < s; o++) i[o] = Zc(i[o], a);
    return i.join(`
`)
}

function qc(e, t, r, n) {
    n = n || {};
    var a = O({}, n);
    a.font = t, r = X(r, "..."), a.maxIterations = X(n.maxIterations, 2);
    var i = a.minChar = X(n.minChar, 0);
    a.cnCharWidth = Yt("å›½", t);
    var o = a.ascCharWidth = Yt("a", t);
    a.placeholder = X(n.placeholder, "");
    for (var s = e = Math.max(0, e - 1), u = 0; u < i && s >= o; u++) s -= o;
    var l = Yt(r, t);
    return l > s && (r = "", l = 0), s = e - l, a.ellipsis = r, a.ellipsisWidth = l, a.contentWidth = s, a.containerWidth = e, a
}

function Zc(e, t) {
    var r = t.containerWidth,
        n = t.font,
        a = t.contentWidth;
    if (!r) return "";
    var i = Yt(e, n);
    if (i <= r) return e;
    for (var o = 0;; o++) {
        if (i <= a || o >= t.maxIterations) {
            e += t.ellipsis;
            break
        }
        var s = o === 0 ? Sm(e, a, t.ascCharWidth, t.cnCharWidth) : i > 0 ? Math.floor(e.length * a / i) : 0;
        e = e.substr(0, s), i = Yt(e, n)
    }
    return e === "" && (e = t.placeholder), e
}

function Sm(e, t, r, n) {
    for (var a = 0, i = 0, o = e.length; i < o && a < t; i++) {
        var s = e.charCodeAt(i);
        a += 0 <= s && s <= 127 ? r : n
    }
    return i
}

function wm(e, t) {
    e != null && (e += "");
    var r = t.overflow,
        n = t.padding,
        a = t.font,
        i = r === "truncate",
        o = al(a),
        s = X(t.lineHeight, o),
        u = !!t.backgroundColor,
        l = t.lineOverflow === "truncate",
        f = t.width,
        h;
    f != null && (r === "break" || r === "breakAll") ? h = e ? Kc(e, t.font, f, r === "breakAll", 0).lines : [] : h = e ? e.split(`
`) : [];
    var c = h.length * s,
        v = X(t.height, c);
    if (c > v && l) {
        var d = Math.floor(v / s);
        h = h.slice(0, d)
    }
    if (e && i && f != null)
        for (var y = qc(f, a, t.ellipsis, {
                minChar: t.truncateMinChar,
                placeholder: t.placeholder
            }), p = 0; p < h.length; p++) h[p] = Zc(h[p], y);
    for (var g = v, m = 0, p = 0; p < h.length; p++) m = Math.max(Yt(h[p], a), m);
    f == null && (f = m);
    var _ = m;
    return n && (g += n[0] + n[2], _ += n[1] + n[3], f += n[1] + n[3]), u && (_ = f), {
        lines: h,
        height: v,
        outerWidth: _,
        outerHeight: g,
        lineHeight: s,
        calculatedLineHeight: o,
        contentWidth: m,
        contentHeight: c,
        width: f
    }
}
var bm = function () {
        function e() {}
        return e
    }(),
    zf = function () {
        function e(t) {
            this.tokens = [], t && (this.tokens = t)
        }
        return e
    }(),
    Tm = function () {
        function e() {
            this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = []
        }
        return e
    }();

function Mm(e, t) {
    var r = new Tm;
    if (e != null && (e += ""), !e) return r;
    for (var n = t.width, a = t.height, i = t.overflow, o = (i === "break" || i === "breakAll") && n != null ? {
            width: n,
            accumWidth: 0,
            breakAll: i === "breakAll"
        } : null, s = ls.lastIndex = 0, u;
        (u = ls.exec(e)) != null;) {
        var l = u.index;
        l > s && fs(r, e.substring(s, l), t, o), fs(r, u[2], t, o, u[1]), s = ls.lastIndex
    }
    s < e.length && fs(r, e.substring(s, e.length), t, o);
    var f = [],
        h = 0,
        c = 0,
        v = t.padding,
        d = i === "truncate",
        y = t.lineOverflow === "truncate";

    function p(k, N, F) {
        k.width = N, k.lineHeight = F, h += F, c = Math.max(c, N)
    }
    t: for (var g = 0; g < r.lines.length; g++) {
        for (var m = r.lines[g], _ = 0, S = 0, b = 0; b < m.tokens.length; b++) {
            var w = m.tokens[b],
                x = w.styleName && t.rich[w.styleName] || {},
                T = w.textPadding = x.padding,
                D = T ? T[1] + T[3] : 0,
                C = w.font = x.font || t.font;
            w.contentHeight = al(C);
            var M = X(x.height, w.contentHeight);
            if (w.innerHeight = M, T && (M += T[0] + T[2]), w.height = M, w.lineHeight = la(x.lineHeight, t.lineHeight, M), w.align = x && x.align || t.align, w.verticalAlign = x && x.verticalAlign || "middle", y && a != null && h + w.lineHeight > a) {
                b > 0 ? (m.tokens = m.tokens.slice(0, b), p(m, S, _), r.lines = r.lines.slice(0, g + 1)) : r.lines = r.lines.slice(0, g);
                break t
            }
            var L = x.width,
                P = L == null || L === "auto";
            if (typeof L == "string" && L.charAt(L.length - 1) === "%") w.percentWidth = L, f.push(w), w.contentWidth = Yt(w.text, C);
            else {
                if (P) {
                    var I = x.backgroundColor,
                        R = I && I.image;
                    R && (R = mm(R), _o(R) && (w.width = Math.max(w.width, R.width * M / R.height)))
                }
                var E = d && n != null ? n - S : null;
                E != null && E < w.width ? !P || E < D ? (w.text = "", w.width = w.contentWidth = 0) : (w.text = _m(w.text, E - D, C, t.ellipsis, {
                    minChar: t.truncateMinChar
                }), w.width = w.contentWidth = Yt(w.text, C)) : w.contentWidth = Yt(w.text, C)
            }
            w.width += D, S += w.width, x && (_ = Math.max(_, w.lineHeight))
        }
        p(m, S, _)
    }
    r.outerWidth = r.width = X(n, c), r.outerHeight = r.height = X(a, h), r.contentHeight = h, r.contentWidth = c, v && (r.outerWidth += v[1] + v[3], r.outerHeight += v[0] + v[2]);
    for (var g = 0; g < f.length; g++) {
        var w = f[g],
            z = w.percentWidth;
        w.width = parseInt(z, 10) / 100 * r.width
    }
    return r
}

function fs(e, t, r, n, a) {
    var i = t === "",
        o = a && r.rich[a] || {},
        s = e.lines,
        u = o.font || r.font,
        l = !1,
        f, h;
    if (n) {
        var c = o.padding,
            v = c ? c[1] + c[3] : 0;
        if (o.width != null && o.width !== "auto") {
            var d = lr(o.width, n.width) + v;
            s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d
        } else {
            var y = Kc(t, u, n.width, n.breakAll, n.accumWidth);
            n.accumWidth = y.accumWidth + v, h = y.linesWidths, f = y.lines
        }
    } else f = t.split(`
`);
    for (var p = 0; p < f.length; p++) {
        var g = f[p],
            m = new bm;
        if (m.styleName = a, m.text = g, m.isLineHolder = !g && !i, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[p] : Yt(g, u), !p && !l) {
            var _ = (s[s.length - 1] || (s[0] = new zf)).tokens,
                S = _.length;
            S === 1 && _[0].isLineHolder ? _[0] = m : (g || !S || i) && _.push(m)
        } else s.push(new zf([m]))
    }
}

function xm(e) {
    var t = e.charCodeAt(0);
    return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303
}
var Dm = ur(",&?/;] ".split(""), function (e, t) {
    return e[t] = !0, e
}, {});

function Cm(e) {
    return xm(e) ? !!Dm[e] : !0
}

function Kc(e, t, r, n, a) {
    for (var i = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < e.length; h++) {
        var c = e.charAt(h);
        if (c === `
`) {
            u && (s += u, f += l), i.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
            continue
        }
        var v = Yt(c, t),
            d = n ? !1 : !Cm(c);
        if (i.length ? f + v > r : a + f + v > r) {
            f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), i.push(s), o.push(f - l), u += c, l += v, s = "", f = l) : (u && (s += u, u = "", l = 0), i.push(s), o.push(f), s = c, f = v)) : d ? (i.push(u), o.push(l), u = c, l = v) : (i.push(c), o.push(v));
            continue
        }
        f += v, d ? (u += c, l += v) : (u && (s += u, u = "", l = 0), s += c)
    }
    return !i.length && !s && (s = e, u = "", l = 0), u && (s += u), s && (i.push(s), o.push(f)), i.length === 1 && (f += a), {
        accumWidth: f,
        lines: i,
        linesWidths: o
    }
}
var Su = "__zr_style_" + Math.round(Math.random() * 10),
    Vr = {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: "#000",
        opacity: 1,
        blend: "source-over"
    },
    So = {
        style: {
            shadowBlur: !0,
            shadowOffsetX: !0,
            shadowOffsetY: !0,
            shadowColor: !0,
            opacity: !0
        }
    };
Vr[Su] = !0;
var Vf = ["z", "z2", "invisible"],
    Am = ["invisible"],
    Na = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype._init = function (r) {
            for (var n = lt(r), a = 0; a < n.length; a++) {
                var i = n[a];
                i === "style" ? this.useStyle(r[i]) : e.prototype.attrKV.call(this, i, r[i])
            }
            this.style || this.useStyle({})
        }, t.prototype.beforeBrush = function () {}, t.prototype.afterBrush = function () {}, t.prototype.innerBeforeBrush = function () {}, t.prototype.innerAfterBrush = function () {}, t.prototype.shouldBePainted = function (r, n, a, i) {
            var o = this.transform;
            if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && Lm(this, r, n) || o && !o[0] && !o[3]) return !1;
            if (a && this.__clipPaths) {
                for (var s = 0; s < this.__clipPaths.length; ++s)
                    if (this.__clipPaths[s].isZeroArea()) return !1
            }
            if (i && this.parent)
                for (var u = this.parent; u;) {
                    if (u.ignore) return !1;
                    u = u.parent
                }
            return !0
        }, t.prototype.contain = function (r, n) {
            return this.rectContain(r, n)
        }, t.prototype.traverse = function (r, n) {
            r.call(n, this)
        }, t.prototype.rectContain = function (r, n) {
            var a = this.transformCoordToLocal(r, n),
                i = this.getBoundingRect();
            return i.contain(a[0], a[1])
        }, t.prototype.getPaintRect = function () {
            var r = this._paintRect;
            if (!this._paintRect || this.__dirty) {
                var n = this.transform,
                    a = this.getBoundingRect(),
                    i = this.style,
                    o = i.shadowBlur || 0,
                    s = i.shadowOffsetX || 0,
                    u = i.shadowOffsetY || 0;
                r = this._paintRect || (this._paintRect = new ot(0, 0, 0, 0)), n ? ot.applyTransform(r, a, n) : r.copy(a), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
                var l = this.dirtyRectTolerance;
                r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2))
            }
            return r
        }, t.prototype.setPrevPaintRect = function (r) {
            r ? (this._prevPaintRect = this._prevPaintRect || new ot(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null
        }, t.prototype.getPrevPaintRect = function () {
            return this._prevPaintRect
        }, t.prototype.animateStyle = function (r) {
            return this.animate("style", r)
        }, t.prototype.updateDuringAnimation = function (r) {
            r === "style" ? this.dirtyStyle() : this.markRedraw()
        }, t.prototype.attrKV = function (r, n) {
            r !== "style" ? e.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n)
        }, t.prototype.setStyle = function (r, n) {
            return typeof r == "string" ? this.style[r] = n : O(this.style, r), this.dirtyStyle(), this
        }, t.prototype.dirtyStyle = function (r) {
            r || this.markRedraw(), this.__dirty |= ra, this._rect && (this._rect = null)
        }, t.prototype.dirty = function () {
            this.dirtyStyle()
        }, t.prototype.styleChanged = function () {
            return !!(this.__dirty & ra)
        }, t.prototype.styleUpdated = function () {
            this.__dirty &= ~ra
        }, t.prototype.createStyle = function (r) {
            return po(Vr, r)
        }, t.prototype.useStyle = function (r) {
            r[Su] || (r = this.createStyle(r)), this.__inHover ? this.__hoverStyle = r : this.style = r, this.dirtyStyle()
        }, t.prototype.isStyleObject = function (r) {
            return r[Su]
        }, t.prototype._innerSaveToNormal = function (r) {
            e.prototype._innerSaveToNormal.call(this, r);
            var n = this._normalState;
            r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, Vf)
        }, t.prototype._applyStateObj = function (r, n, a, i, o, s) {
            e.prototype._applyStateObj.call(this, r, n, a, i, o, s);
            var u = !(n && i),
                l;
            if (n && n.style ? o ? i ? l = n.style : (l = this._mergeStyle(this.createStyle(), a.style), this._mergeStyle(l, n.style)) : (l = this._mergeStyle(this.createStyle(), i ? this.style : a.style), this._mergeStyle(l, n.style)) : u && (l = a.style), l)
                if (o) {
                    var f = this.style;
                    if (this.style = this.createStyle(u ? {} : f), u)
                        for (var h = lt(f), c = 0; c < h.length; c++) {
                            var v = h[c];
                            v in l && (l[v] = l[v], this.style[v] = f[v])
                        }
                    for (var d = lt(l), c = 0; c < d.length; c++) {
                        var v = d[c];
                        this.style[v] = this.style[v]
                    }
                    this._transitionState(r, {
                        style: l
                    }, s, this.getAnimationStyleProps())
                } else this.useStyle(l);
            for (var y = this.__inHover ? Am : Vf, c = 0; c < y.length; c++) {
                var v = y[c];
                n && n[v] != null ? this[v] = n[v] : u && a[v] != null && (this[v] = a[v])
            }
        }, t.prototype._mergeStates = function (r) {
            for (var n = e.prototype._mergeStates.call(this, r), a, i = 0; i < r.length; i++) {
                var o = r[i];
                o.style && (a = a || {}, this._mergeStyle(a, o.style))
            }
            return a && (n.style = a), n
        }, t.prototype._mergeStyle = function (r, n) {
            return O(r, n), r
        }, t.prototype.getAnimationStyleProps = function () {
            return So
        }, t.initDefaultProps = function () {
            var r = t.prototype;
            r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = !1, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = De | ra
        }(), t
    }(Rc),
    hs = new ot(0, 0, 0, 0),
    vs = new ot(0, 0, 0, 0);

function Lm(e, t, r) {
    return hs.copy(e.getBoundingRect()), e.transform && hs.applyTransform(e.transform), vs.width = t, vs.height = r, !hs.intersect(vs)
}
var Ot = Math.min,
    Nt = Math.max,
    cs = Math.sin,
    ds = Math.cos,
    Sr = Math.PI * 2,
    Za = Ln(),
    Ka = Ln(),
    Qa = Ln();

function cD(e, t, r) {
    if (e.length !== 0) {
        for (var n = e[0], a = n[0], i = n[0], o = n[1], s = n[1], u = 1; u < e.length; u++) n = e[u], a = Ot(a, n[0]), i = Nt(i, n[0]), o = Ot(o, n[1]), s = Nt(s, n[1]);
        t[0] = a, t[1] = o, r[0] = i, r[1] = s
    }
}

function Gf(e, t, r, n, a, i) {
    a[0] = Ot(e, r), a[1] = Ot(t, n), i[0] = Nt(e, r), i[1] = Nt(t, n)
}
var Hf = [],
    Wf = [];

function Im(e, t, r, n, a, i, o, s, u, l) {
    var f = Sc,
        h = bt,
        c = f(e, r, a, o, Hf);
    u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
    for (var v = 0; v < c; v++) {
        var d = h(e, r, a, o, Hf[v]);
        u[0] = Ot(d, u[0]), l[0] = Nt(d, l[0])
    }
    c = f(t, n, i, s, Wf);
    for (var v = 0; v < c; v++) {
        var y = h(t, n, i, s, Wf[v]);
        u[1] = Ot(y, u[1]), l[1] = Nt(y, l[1])
    }
    u[0] = Ot(e, u[0]), l[0] = Nt(e, l[0]), u[0] = Ot(o, u[0]), l[0] = Nt(o, l[0]), u[1] = Ot(t, u[1]), l[1] = Nt(t, l[1]), u[1] = Ot(s, u[1]), l[1] = Nt(s, l[1])
}

function Pm(e, t, r, n, a, i, o, s) {
    var u = bc,
        l = Dt,
        f = Nt(Ot(u(e, r, a), 1), 0),
        h = Nt(Ot(u(t, n, i), 1), 0),
        c = l(e, r, a, f),
        v = l(t, n, i, h);
    o[0] = Ot(e, a, c), o[1] = Ot(t, i, v), s[0] = Nt(e, a, c), s[1] = Nt(t, i, v)
}

function Rm(e, t, r, n, a, i, o, s, u) {
    var l = gn,
        f = yn,
        h = Math.abs(a - i);
    if (h % Sr < 1e-4 && h > 1e-4) {
        s[0] = e - r, s[1] = t - n, u[0] = e + r, u[1] = t + n;
        return
    }
    if (Za[0] = ds(a) * r + e, Za[1] = cs(a) * n + t, Ka[0] = ds(i) * r + e, Ka[1] = cs(i) * n + t, l(s, Za, Ka), f(u, Za, Ka), a = a % Sr, a < 0 && (a = a + Sr), i = i % Sr, i < 0 && (i = i + Sr), a > i && !o ? i += Sr : a < i && o && (a += Sr), o) {
        var c = i;
        i = a, a = c
    }
    for (var v = 0; v < i; v += Math.PI / 2) v > a && (Qa[0] = ds(v) * r + e, Qa[1] = cs(v) * n + t, l(s, Qa, s), f(u, Qa, u))
}
var tt = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    },
    wr = [],
    br = [],
    be = [],
    qe = [],
    Te = [],
    Me = [],
    ps = Math.min,
    gs = Math.max,
    Tr = Math.cos,
    Mr = Math.sin,
    Fe = Math.abs,
    wu = Math.PI,
    tr = wu * 2,
    ys = typeof Float32Array < "u",
    Gn = [];

function ms(e) {
    var t = Math.round(e / wu * 1e8) / 1e8;
    return t % 2 * wu
}

function Qc(e, t) {
    var r = ms(e[0]);
    r < 0 && (r += tr);
    var n = r - e[0],
        a = e[1];
    a += n, !t && a - r >= tr ? a = r + tr : t && r - a >= tr ? a = r - tr : !t && r > a ? a = r + (tr - ms(r - a)) : t && r < a && (a = r - (tr - ms(a - r))), e[0] = r, e[1] = a
}
var Yr = function () {
    function e(t) {
        this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
    }
    return e.prototype.increaseVersion = function () {
        this._version++
    }, e.prototype.getVersion = function () {
        return this._version
    }, e.prototype.setScale = function (t, r, n) {
        n = n || 0, n > 0 && (this._ux = Fe(n / Cf / t) || 0, this._uy = Fe(n / Cf / r) || 0)
    }, e.prototype.setDPR = function (t) {
        this.dpr = t
    }, e.prototype.setContext = function (t) {
        this._ctx = t
    }, e.prototype.getContext = function () {
        return this._ctx
    }, e.prototype.beginPath = function () {
        return this._ctx && this._ctx.beginPath(), this.reset(), this
    }, e.prototype.reset = function () {
        this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
    }, e.prototype.moveTo = function (t, r) {
        return this._drawPendingPt(), this.addData(tt.M, t, r), this._ctx && this._ctx.moveTo(t, r), this._x0 = t, this._y0 = r, this._xi = t, this._yi = r, this
    }, e.prototype.lineTo = function (t, r) {
        var n = Fe(t - this._xi),
            a = Fe(r - this._yi),
            i = n > this._ux || a > this._uy;
        if (this.addData(tt.L, t, r), this._ctx && i && this._ctx.lineTo(t, r), i) this._xi = t, this._yi = r, this._pendingPtDist = 0;
        else {
            var o = n * n + a * a;
            o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = r, this._pendingPtDist = o)
        }
        return this
    }, e.prototype.bezierCurveTo = function (t, r, n, a, i, o) {
        return this._drawPendingPt(), this.addData(tt.C, t, r, n, a, i, o), this._ctx && this._ctx.bezierCurveTo(t, r, n, a, i, o), this._xi = i, this._yi = o, this
    }, e.prototype.quadraticCurveTo = function (t, r, n, a) {
        return this._drawPendingPt(), this.addData(tt.Q, t, r, n, a), this._ctx && this._ctx.quadraticCurveTo(t, r, n, a), this._xi = n, this._yi = a, this
    }, e.prototype.arc = function (t, r, n, a, i, o) {
        this._drawPendingPt(), Gn[0] = a, Gn[1] = i, Qc(Gn, o), a = Gn[0], i = Gn[1];
        var s = i - a;
        return this.addData(tt.A, t, r, n, n, a, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, r, n, a, i, o), this._xi = Tr(i) * n + t, this._yi = Mr(i) * n + r, this
    }, e.prototype.arcTo = function (t, r, n, a, i) {
        return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, r, n, a, i), this
    }, e.prototype.rect = function (t, r, n, a) {
        return this._drawPendingPt(), this._ctx && this._ctx.rect(t, r, n, a), this.addData(tt.R, t, r, n, a), this
    }, e.prototype.closePath = function () {
        this._drawPendingPt(), this.addData(tt.Z);
        var t = this._ctx,
            r = this._x0,
            n = this._y0;
        return t && t.closePath(), this._xi = r, this._yi = n, this
    }, e.prototype.fill = function (t) {
        t && t.fill(), this.toStatic()
    }, e.prototype.stroke = function (t) {
        t && t.stroke(), this.toStatic()
    }, e.prototype.len = function () {
        return this._len
    }, e.prototype.setData = function (t) {
        var r = t.length;
        !(this.data && this.data.length === r) && ys && (this.data = new Float32Array(r));
        for (var n = 0; n < r; n++) this.data[n] = t[n];
        this._len = r
    }, e.prototype.appendPath = function (t) {
        t instanceof Array || (t = [t]);
        for (var r = t.length, n = 0, a = this._len, i = 0; i < r; i++) n += t[i].len();
        ys && this.data instanceof Float32Array && (this.data = new Float32Array(a + n));
        for (var i = 0; i < r; i++)
            for (var o = t[i].data, s = 0; s < o.length; s++) this.data[a++] = o[s];
        this._len = a
    }, e.prototype.addData = function (t, r, n, a, i, o, s, u, l) {
        if (this._saveData) {
            var f = this.data;
            this._len + arguments.length > f.length && (this._expandData(), f = this.data);
            for (var h = 0; h < arguments.length; h++) f[this._len++] = arguments[h]
        }
    }, e.prototype._drawPendingPt = function () {
        this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0)
    }, e.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
            for (var t = [], r = 0; r < this._len; r++) t[r] = this.data[r];
            this.data = t
        }
    }, e.prototype.toStatic = function () {
        if (this._saveData) {
            this._drawPendingPt();
            var t = this.data;
            t instanceof Array && (t.length = this._len, ys && this._len > 11 && (this.data = new Float32Array(t)))
        }
    }, e.prototype.getBoundingRect = function () {
        be[0] = be[1] = Te[0] = Te[1] = Number.MAX_VALUE, qe[0] = qe[1] = Me[0] = Me[1] = -Number.MAX_VALUE;
        var t = this.data,
            r = 0,
            n = 0,
            a = 0,
            i = 0,
            o;
        for (o = 0; o < this._len;) {
            var s = t[o++],
                u = o === 1;
            switch (u && (r = t[o], n = t[o + 1], a = r, i = n), s) {
                case tt.M:
                    r = a = t[o++], n = i = t[o++], Te[0] = a, Te[1] = i, Me[0] = a, Me[1] = i;
                    break;
                case tt.L:
                    Gf(r, n, t[o], t[o + 1], Te, Me), r = t[o++], n = t[o++];
                    break;
                case tt.C:
                    Im(r, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Te, Me), r = t[o++], n = t[o++];
                    break;
                case tt.Q:
                    Pm(r, n, t[o++], t[o++], t[o], t[o + 1], Te, Me), r = t[o++], n = t[o++];
                    break;
                case tt.A:
                    var l = t[o++],
                        f = t[o++],
                        h = t[o++],
                        c = t[o++],
                        v = t[o++],
                        d = t[o++] + v;
                    o += 1;
                    var y = !t[o++];
                    u && (a = Tr(v) * h + l, i = Mr(v) * c + f), Rm(l, f, h, c, v, d, y, Te, Me), r = Tr(d) * h + l, n = Mr(d) * c + f;
                    break;
                case tt.R:
                    a = r = t[o++], i = n = t[o++];
                    var p = t[o++],
                        g = t[o++];
                    Gf(a, i, a + p, i + g, Te, Me);
                    break;
                case tt.Z:
                    r = a, n = i;
                    break
            }
            gn(be, be, Te), yn(qe, qe, Me)
        }
        return o === 0 && (be[0] = be[1] = qe[0] = qe[1] = 0), new ot(be[0], be[1], qe[0] - be[0], qe[1] - be[1])
    }, e.prototype._calculateLength = function () {
        var t = this.data,
            r = this._len,
            n = this._ux,
            a = this._uy,
            i = 0,
            o = 0,
            s = 0,
            u = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r;) {
            var v = t[c++],
                d = c === 1;
            d && (i = t[c], o = t[c + 1], s = i, u = o);
            var y = -1;
            switch (v) {
                case tt.M:
                    i = s = t[c++], o = u = t[c++];
                    break;
                case tt.L: {
                    var p = t[c++],
                        g = t[c++],
                        m = p - i,
                        _ = g - o;
                    (Fe(m) > n || Fe(_) > a || c === r - 1) && (y = Math.sqrt(m * m + _ * _), i = p, o = g);
                    break
                }
                case tt.C: {
                    var S = t[c++],
                        b = t[c++],
                        p = t[c++],
                        g = t[c++],
                        w = t[c++],
                        x = t[c++];
                    y = Q0(i, o, S, b, p, g, w, x, 10), i = w, o = x;
                    break
                }
                case tt.Q: {
                    var S = t[c++],
                        b = t[c++],
                        p = t[c++],
                        g = t[c++];
                    y = j0(i, o, S, b, p, g, 10), i = p, o = g;
                    break
                }
                case tt.A:
                    var T = t[c++],
                        D = t[c++],
                        C = t[c++],
                        M = t[c++],
                        L = t[c++],
                        P = t[c++],
                        I = P + L;
                    c += 1, d && (s = Tr(L) * C + T, u = Mr(L) * M + D), y = gs(C, M) * ps(tr, Math.abs(P)), i = Tr(I) * C + T, o = Mr(I) * M + D;
                    break;
                case tt.R: {
                    s = i = t[c++], u = o = t[c++];
                    var R = t[c++],
                        E = t[c++];
                    y = R * 2 + E * 2;
                    break
                }
                case tt.Z: {
                    var m = s - i,
                        _ = u - o;
                    y = Math.sqrt(m * m + _ * _), i = s, o = u;
                    break
                }
            }
            y >= 0 && (l[h++] = y, f += y)
        }
        return this._pathLen = f, f
    }, e.prototype.rebuildPath = function (t, r) {
        var n = this.data,
            a = this._ux,
            i = this._uy,
            o = this._len,
            s, u, l, f, h, c, v = r < 1,
            d, y, p = 0,
            g = 0,
            m, _ = 0,
            S, b;
        if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, y = this._pathLen, m = r * y, !m))) t: for (var w = 0; w < o;) {
            var x = n[w++],
                T = w === 1;
            switch (T && (l = n[w], f = n[w + 1], s = l, u = f), x !== tt.L && _ > 0 && (t.lineTo(S, b), _ = 0), x) {
                case tt.M:
                    s = l = n[w++], u = f = n[w++], t.moveTo(l, f);
                    break;
                case tt.L: {
                    h = n[w++], c = n[w++];
                    var D = Fe(h - l),
                        C = Fe(c - f);
                    if (D > a || C > i) {
                        if (v) {
                            var M = d[g++];
                            if (p + M > m) {
                                var L = (m - p) / M;
                                t.lineTo(l * (1 - L) + h * L, f * (1 - L) + c * L);
                                break t
                            }
                            p += M
                        }
                        t.lineTo(h, c), l = h, f = c, _ = 0
                    } else {
                        var P = D * D + C * C;
                        P > _ && (S = h, b = c, _ = P)
                    }
                    break
                }
                case tt.C: {
                    var I = n[w++],
                        R = n[w++],
                        E = n[w++],
                        z = n[w++],
                        k = n[w++],
                        N = n[w++];
                    if (v) {
                        var M = d[g++];
                        if (p + M > m) {
                            var L = (m - p) / M;
                            Gi(l, I, E, k, L, wr), Gi(f, R, z, N, L, br), t.bezierCurveTo(wr[1], br[1], wr[2], br[2], wr[3], br[3]);
                            break t
                        }
                        p += M
                    }
                    t.bezierCurveTo(I, R, E, z, k, N), l = k, f = N;
                    break
                }
                case tt.Q: {
                    var I = n[w++],
                        R = n[w++],
                        E = n[w++],
                        z = n[w++];
                    if (v) {
                        var M = d[g++];
                        if (p + M > m) {
                            var L = (m - p) / M;
                            Hi(l, I, E, L, wr), Hi(f, R, z, L, br), t.quadraticCurveTo(wr[1], br[1], wr[2], br[2]);
                            break t
                        }
                        p += M
                    }
                    t.quadraticCurveTo(I, R, E, z), l = E, f = z;
                    break
                }
                case tt.A:
                    var F = n[w++],
                        $ = n[w++],
                        q = n[w++],
                        st = n[w++],
                        yt = n[w++],
                        Gt = n[w++],
                        Se = n[w++],
                        Xt = !n[w++],
                        Ht = q > st ? q : st,
                        St = Fe(q - st) > .001,
                        ht = yt + Gt,
                        H = !1;
                    if (v) {
                        var M = d[g++];
                        p + M > m && (ht = yt + Gt * (m - p) / M, H = !0), p += M
                    }
                    if (St && t.ellipse ? t.ellipse(F, $, q, st, Se, yt, ht, Xt) : t.arc(F, $, Ht, yt, ht, Xt), H) break t;
                    T && (s = Tr(yt) * q + F, u = Mr(yt) * st + $), l = Tr(ht) * q + F, f = Mr(ht) * st + $;
                    break;
                case tt.R:
                    s = l = n[w], u = f = n[w + 1], h = n[w++], c = n[w++];
                    var Z = n[w++],
                        we = n[w++];
                    if (v) {
                        var M = d[g++];
                        if (p + M > m) {
                            var mt = m - p;
                            t.moveTo(h, c), t.lineTo(h + ps(mt, Z), c), mt -= Z, mt > 0 && t.lineTo(h + Z, c + ps(mt, we)), mt -= we, mt > 0 && t.lineTo(h + gs(Z - mt, 0), c + we), mt -= Z, mt > 0 && t.lineTo(h, c + gs(we - mt, 0));
                            break t
                        }
                        p += M
                    }
                    t.rect(h, c, Z, we);
                    break;
                case tt.Z:
                    if (v) {
                        var M = d[g++];
                        if (p + M > m) {
                            var L = (m - p) / M;
                            t.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                            break t
                        }
                        p += M
                    }
                    t.closePath(), l = s, f = u
            }
        }
    }, e.prototype.clone = function () {
        var t = new e,
            r = this.data;
        return t.data = r.slice ? r.slice() : Array.prototype.slice.call(r), t._len = this._len, t
    }, e.CMD = tt, e.initDefaultProps = function () {
        var t = e.prototype;
        t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0
    }(), e
}();

function an(e, t, r, n, a, i, o) {
    if (a === 0) return !1;
    var s = a,
        u = 0,
        l = e;
    if (o > t + s && o > n + s || o < t - s && o < n - s || i > e + s && i > r + s || i < e - s && i < r - s) return !1;
    if (e !== r) u = (t - n) / (e - r), l = (e * n - r * t) / (e - r);
    else return Math.abs(i - e) <= s / 2;
    var f = u * i - o + l,
        h = f * f / (u * u + 1);
    return h <= s / 2 * s / 2
}

function Em(e, t, r, n, a, i, o, s, u, l, f) {
    if (u === 0) return !1;
    var h = u;
    if (f > t + h && f > n + h && f > i + h && f > s + h || f < t - h && f < n - h && f < i - h && f < s - h || l > e + h && l > r + h && l > a + h && l > o + h || l < e - h && l < r - h && l < a - h && l < o - h) return !1;
    var c = wc(e, t, r, n, a, i, o, s, l, f, null);
    return c <= h / 2
}

function km(e, t, r, n, a, i, o, s, u) {
    if (o === 0) return !1;
    var l = o;
    if (u > t + l && u > n + l && u > i + l || u < t - l && u < n - l && u < i - l || s > e + l && s > r + l && s > a + l || s < e - l && s < r - l && s < a - l) return !1;
    var f = Tc(e, t, r, n, a, i, s, u, null);
    return f <= l / 2
}
var Uf = Math.PI * 2;

function nr(e) {
    return e %= Uf, e < 0 && (e += Uf), e
}
var Hn = Math.PI * 2;

function Om(e, t, r, n, a, i, o, s, u) {
    if (o === 0) return !1;
    var l = o;
    s -= e, u -= t;
    var f = Math.sqrt(s * s + u * u);
    if (f - l > r || f + l < r) return !1;
    if (Math.abs(n - a) % Hn < 1e-4) return !0;
    if (i) {
        var h = n;
        n = nr(a), a = nr(h)
    } else n = nr(n), a = nr(a);
    n > a && (a += Hn);
    var c = Math.atan2(u, s);
    return c < 0 && (c += Hn), c >= n && c <= a || c + Hn >= n && c + Hn <= a
}

function xr(e, t, r, n, a, i) {
    if (i > t && i > n || i < t && i < n || n === t) return 0;
    var o = (i - t) / (n - t),
        s = n < t ? 1 : -1;
    (o === 1 || o === 0) && (s = n < t ? .5 : -.5);
    var u = o * (r - e) + e;
    return u === a ? 1 / 0 : u > a ? s : 0
}
var Ze = Yr.CMD,
    Dr = Math.PI * 2,
    Nm = 1e-4;

function Fm(e, t) {
    return Math.abs(e - t) < Nm
}
var It = [-1, -1, -1],
    Jt = [-1, -1];

function Bm() {
    var e = Jt[0];
    Jt[0] = Jt[1], Jt[1] = e
}

function zm(e, t, r, n, a, i, o, s, u, l) {
    if (l > t && l > n && l > i && l > s || l < t && l < n && l < i && l < s) return 0;
    var f = _c(t, n, i, s, l, It);
    if (f === 0) return 0;
    for (var h = 0, c = -1, v = void 0, d = void 0, y = 0; y < f; y++) {
        var p = It[y],
            g = p === 0 || p === 1 ? .5 : 1,
            m = bt(e, r, a, o, p);
        m < u || (c < 0 && (c = Sc(t, n, i, s, Jt), Jt[1] < Jt[0] && c > 1 && Bm(), v = bt(t, n, i, s, Jt[0]), c > 1 && (d = bt(t, n, i, s, Jt[1]))), c === 2 ? p < Jt[0] ? h += v < t ? g : -g : p < Jt[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < Jt[0] ? h += v < t ? g : -g : h += s < v ? g : -g)
    }
    return h
}

function Vm(e, t, r, n, a, i, o, s) {
    if (s > t && s > n && s > i || s < t && s < n && s < i) return 0;
    var u = J0(t, n, i, s, It);
    if (u === 0) return 0;
    var l = bc(t, n, i);
    if (l >= 0 && l <= 1) {
        for (var f = 0, h = Dt(t, n, i, l), c = 0; c < u; c++) {
            var v = It[c] === 0 || It[c] === 1 ? .5 : 1,
                d = Dt(e, r, a, It[c]);
            d < o || (It[c] < l ? f += h < t ? v : -v : f += i < h ? v : -v)
        }
        return f
    } else {
        var v = It[0] === 0 || It[0] === 1 ? .5 : 1,
            d = Dt(e, r, a, It[0]);
        return d < o ? 0 : i < t ? v : -v
    }
}

function Gm(e, t, r, n, a, i, o, s) {
    if (s -= t, s > r || s < -r) return 0;
    var u = Math.sqrt(r * r - s * s);
    It[0] = -u, It[1] = u;
    var l = Math.abs(n - a);
    if (l < 1e-4) return 0;
    if (l >= Dr - 1e-4) {
        n = 0, a = Dr;
        var f = i ? 1 : -1;
        return o >= It[0] + e && o <= It[1] + e ? f : 0
    }
    if (n > a) {
        var h = n;
        n = a, a = h
    }
    n < 0 && (n += Dr, a += Dr);
    for (var c = 0, v = 0; v < 2; v++) {
        var d = It[v];
        if (d + e > o) {
            var y = Math.atan2(s, d),
                f = i ? 1 : -1;
            y < 0 && (y = Dr + y), (y >= n && y <= a || y + Dr >= n && y + Dr <= a) && (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), c += f)
        }
    }
    return c
}

function Jc(e, t, r, n, a) {
    for (var i = e.data, o = e.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o;) {
        var y = i[d++],
            p = d === 1;
        switch (y === Ze.M && d > 1 && (r || (s += xr(u, l, f, h, n, a))), p && (u = i[d], l = i[d + 1], f = u, h = l), y) {
            case Ze.M:
                f = i[d++], h = i[d++], u = f, l = h;
                break;
            case Ze.L:
                if (r) {
                    if (an(u, l, i[d], i[d + 1], t, n, a)) return !0
                } else s += xr(u, l, i[d], i[d + 1], n, a) || 0;
                u = i[d++], l = i[d++];
                break;
            case Ze.C:
                if (r) {
                    if (Em(u, l, i[d++], i[d++], i[d++], i[d++], i[d], i[d + 1], t, n, a)) return !0
                } else s += zm(u, l, i[d++], i[d++], i[d++], i[d++], i[d], i[d + 1], n, a) || 0;
                u = i[d++], l = i[d++];
                break;
            case Ze.Q:
                if (r) {
                    if (km(u, l, i[d++], i[d++], i[d], i[d + 1], t, n, a)) return !0
                } else s += Vm(u, l, i[d++], i[d++], i[d], i[d + 1], n, a) || 0;
                u = i[d++], l = i[d++];
                break;
            case Ze.A:
                var g = i[d++],
                    m = i[d++],
                    _ = i[d++],
                    S = i[d++],
                    b = i[d++],
                    w = i[d++];
                d += 1;
                var x = !!(1 - i[d++]);
                c = Math.cos(b) * _ + g, v = Math.sin(b) * S + m, p ? (f = c, h = v) : s += xr(u, l, c, v, n, a);
                var T = (n - g) * S / _ + g;
                if (r) {
                    if (Om(g, m, S, b, b + w, x, t, T, a)) return !0
                } else s += Gm(g, m, S, b, b + w, x, T, a);
                u = Math.cos(b + w) * _ + g, l = Math.sin(b + w) * S + m;
                break;
            case Ze.R:
                f = u = i[d++], h = l = i[d++];
                var D = i[d++],
                    C = i[d++];
                if (c = f + D, v = h + C, r) {
                    if (an(f, h, c, h, t, n, a) || an(c, h, c, v, t, n, a) || an(c, v, f, v, t, n, a) || an(f, v, f, h, t, n, a)) return !0
                } else s += xr(c, h, c, v, n, a), s += xr(f, v, f, h, n, a);
                break;
            case Ze.Z:
                if (r) {
                    if (an(u, l, f, h, t, n, a)) return !0
                } else s += xr(u, l, f, h, n, a);
                u = f, l = h;
                break
        }
    }
    return !r && !Fm(l, h) && (s += xr(u, l, f, h, n, a) || 0), s !== 0
}

function Hm(e, t, r) {
    return Jc(e, 0, !1, t, r)
}

function Wm(e, t, r, n) {
    return Jc(e, t, !0, r, n)
}
var jc = j({
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1
    }, Vr),
    Um = {
        style: j({
            fill: !0,
            stroke: !0,
            strokePercent: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineDashOffset: !0,
            lineWidth: !0,
            miterLimit: !0
        }, So.style)
    },
    _s = Ta.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    Ym = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.update = function () {
            var r = this;
            e.prototype.update.call(this);
            var n = this.style;
            if (n.decal) {
                var a = this._decalEl = this._decalEl || new t;
                a.buildPath === t.prototype.buildPath && (a.buildPath = function (u) {
                    r.buildPath(u, r.shape)
                }), a.silent = !0;
                var i = a.style;
                for (var o in n) i[o] !== n[o] && (i[o] = n[o]);
                i.fill = n.fill ? n.decal : null, i.decal = null, i.shadowColor = null, n.strokeFirst && (i.stroke = null);
                for (var s = 0; s < _s.length; ++s) a[_s[s]] = this[_s[s]];
                a.__dirty |= De
            } else this._decalEl && (this._decalEl = null)
        }, t.prototype.getDecalElement = function () {
            return this._decalEl
        }, t.prototype._init = function (r) {
            var n = lt(r);
            this.shape = this.getDefaultShape();
            var a = this.getDefaultStyle();
            a && this.useStyle(a);
            for (var i = 0; i < n.length; i++) {
                var o = n[i],
                    s = r[o];
                o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : e.prototype.attrKV.call(this, o, s)
            }
            this.style || this.useStyle({})
        }, t.prototype.getDefaultStyle = function () {
            return null
        }, t.prototype.getDefaultShape = function () {
            return {}
        }, t.prototype.canBeInsideText = function () {
            return this.hasFill()
        }, t.prototype.getInsideTextFill = function () {
            var r = this.style.fill;
            if (r !== "none") {
                if (U(r)) {
                    var n = Wi(r, 0);
                    return n > .5 ? du : n > .2 ? My : pu
                } else if (r) return pu
            }
            return du
        }, t.prototype.getInsideTextStroke = function (r) {
            var n = this.style.fill;
            if (U(n)) {
                var a = this.__zr,
                    i = !!(a && a.isDarkMode()),
                    o = Wi(r, 0) < cu;
                if (i === o) return n
            }
        }, t.prototype.buildPath = function (r, n, a) {}, t.prototype.pathUpdated = function () {
            this.__dirty &= ~dn
        }, t.prototype.getUpdatedPathProxy = function (r) {
            return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path
        }, t.prototype.createPathProxy = function () {
            this.path = new Yr(!1)
        }, t.prototype.hasStroke = function () {
            var r = this.style,
                n = r.stroke;
            return !(n == null || n === "none" || !(r.lineWidth > 0))
        }, t.prototype.hasFill = function () {
            var r = this.style,
                n = r.fill;
            return n != null && n !== "none"
        }, t.prototype.getBoundingRect = function () {
            var r = this._rect,
                n = this.style,
                a = !r;
            if (a) {
                var i = !1;
                this.path || (i = !0, this.createPathProxy());
                var o = this.path;
                (i || this.__dirty & dn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect()
            }
            if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
                var s = this._rectStroke || (this._rectStroke = r.clone());
                if (this.__dirty || a) {
                    s.copy(r);
                    var u = n.strokeNoScale ? this.getLineScale() : 1,
                        l = n.lineWidth;
                    if (!this.hasFill()) {
                        var f = this.strokeContainThreshold;
                        l = Math.max(l, f ? ? 4)
                    }
                    u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2)
                }
                return s
            }
            return r
        }, t.prototype.contain = function (r, n) {
            var a = this.transformCoordToLocal(r, n),
                i = this.getBoundingRect(),
                o = this.style;
            if (r = a[0], n = a[1], i.contain(r, n)) {
                var s = this.path;
                if (this.hasStroke()) {
                    var u = o.lineWidth,
                        l = o.strokeNoScale ? this.getLineScale() : 1;
                    if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Wm(s, u / l, r, n))) return !0
                }
                if (this.hasFill()) return Hm(s, r, n)
            }
            return !1
        }, t.prototype.dirtyShape = function () {
            this.__dirty |= dn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
        }, t.prototype.dirty = function () {
            this.dirtyStyle(), this.dirtyShape()
        }, t.prototype.animateShape = function (r) {
            return this.animate("shape", r)
        }, t.prototype.updateDuringAnimation = function (r) {
            r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw()
        }, t.prototype.attrKV = function (r, n) {
            r === "shape" ? this.setShape(n) : e.prototype.attrKV.call(this, r, n)
        }, t.prototype.setShape = function (r, n) {
            var a = this.shape;
            return a || (a = this.shape = {}), typeof r == "string" ? a[r] = n : O(a, r), this.dirtyShape(), this
        }, t.prototype.shapeChanged = function () {
            return !!(this.__dirty & dn)
        }, t.prototype.createStyle = function (r) {
            return po(jc, r)
        }, t.prototype._innerSaveToNormal = function (r) {
            e.prototype._innerSaveToNormal.call(this, r);
            var n = this._normalState;
            r.shape && !n.shape && (n.shape = O({}, this.shape))
        }, t.prototype._applyStateObj = function (r, n, a, i, o, s) {
            e.prototype._applyStateObj.call(this, r, n, a, i, o, s);
            var u = !(n && i),
                l;
            if (n && n.shape ? o ? i ? l = n.shape : (l = O({}, a.shape), O(l, n.shape)) : (l = O({}, i ? this.shape : a.shape), O(l, n.shape)) : u && (l = a.shape), l)
                if (o) {
                    this.shape = O({}, this.shape);
                    for (var f = {}, h = lt(l), c = 0; c < h.length; c++) {
                        var v = h[c];
                        typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v]
                    }
                    this._transitionState(r, {
                        shape: f
                    }, s)
                } else this.shape = l, this.dirtyShape()
        }, t.prototype._mergeStates = function (r) {
            for (var n = e.prototype._mergeStates.call(this, r), a, i = 0; i < r.length; i++) {
                var o = r[i];
                o.shape && (a = a || {}, this._mergeStyle(a, o.shape))
            }
            return a && (n.shape = a), n
        }, t.prototype.getAnimationStyleProps = function () {
            return Um
        }, t.prototype.isZeroArea = function () {
            return !1
        }, t.extend = function (r) {
            var n = function (i) {
                G(o, i);

                function o(s) {
                    var u = i.call(this, s) || this;
                    return r.init && r.init.call(u, s), u
                }
                return o.prototype.getDefaultStyle = function () {
                    return J(r.style)
                }, o.prototype.getDefaultShape = function () {
                    return J(r.shape)
                }, o
            }(t);
            for (var a in r) typeof r[a] == "function" && (n.prototype[a] = r[a]);
            return n
        }, t.initDefaultProps = function () {
            var r = t.prototype;
            r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = De | ra | dn
        }(), t
    }(Na);
const at = Ym;
var $m = j({
        strokeFirst: !0,
        font: Wr,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2
    }, jc),
    td = function (e) {
        G(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.hasStroke = function () {
            var r = this.style,
                n = r.stroke;
            return n != null && n !== "none" && r.lineWidth > 0
        }, t.prototype.hasFill = function () {
            var r = this.style,
                n = r.fill;
            return n != null && n !== "none"
        }, t.prototype.createStyle = function (r) {
            return po($m, r)
        }, t.prototype.setBoundingRect = function (r) {
            this._rect = r
        }, t.prototype.getBoundingRect = function () {
            var r = this.style;
            if (!this._rect) {
                var n = r.text;
                n != null ? n += "" : n = "";
                var a = Ic(n, r.font, r.textAlign, r.textBaseline);
                if (a.x += r.x || 0, a.y += r.y || 0, this.hasStroke()) {
                    var i = r.lineWidth;
                    a.x -= i / 2, a.y -= i / 2, a.width += i, a.height += i
                }
                this._rect = a
            }
            return this._rect
        }, t.initDefaultProps = function () {
            var r = t.prototype;
            r.dirtyRectTolerance = 10
        }(), t
    }(Na);
td.prototype.type = "tspan";
const bu = td;
var Xm = j({
        x: 0,
        y: 0
    }, Vr),
    qm = {
        style: j({
            x: !0,
            y: !0,
            width: !0,
            height: !0,
            sx: !0,
            sy: !0,
            sWidth: !0,
            sHeight: !0
        }, So.style)
    };

function Zm(e) {
    return !!(e && typeof e != "string" && e.width && e.height)
}
var ed = function (e) {
    G(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.createStyle = function (r) {
        return po(Xm, r)
    }, t.prototype._getSize = function (r) {
        var n = this.style,
            a = n[r];
        if (a != null) return a;
        var i = Zm(n.image) ? n.image : this.__image;
        if (!i) return 0;
        var o = r === "width" ? "height" : "width",
            s = n[o];
        return s == null ? i[r] : i[r] / i[o] * s
    }, t.prototype.getWidth = function () {
        return this._getSize("width")
    }, t.prototype.getHeight = function () {
        return this._getSize("height")
    }, t.prototype.getAnimationStyleProps = function () {
        return qm
    }, t.prototype.getBoundingRect = function () {
        var r = this.style;
        return this._rect || (this._rect = new ot(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect
    }, t
}(Na);
ed.prototype.type = "image";
const qr = ed;

function Km(e, t) {
    var r = t.x,
        n = t.y,
        a = t.width,
        i = t.height,
        o = t.r,
        s, u, l, f;
    a < 0 && (r = r + a, a = -a), i < 0 && (n = n + i, i = -i), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
    var h;
    s + u > a && (h = s + u, s *= a / h, u *= a / h), l + f > a && (h = l + f, l *= a / h, f *= a / h), u + l > i && (h = u + l, u *= i / h, l *= i / h), s + f > i && (h = s + f, s *= i / h, f *= i / h), e.moveTo(r + s, n), e.lineTo(r + a - u, n), u !== 0 && e.arc(r + a - u, n + u, u, -Math.PI / 2, 0), e.lineTo(r + a, n + i - l), l !== 0 && e.arc(r + a - l, n + i - l, l, 0, Math.PI / 2), e.lineTo(r + f, n + i), f !== 0 && e.arc(r + f, n + i - f, f, Math.PI / 2, Math.PI), e.lineTo(r, n + s), s !== 0 && e.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5)
}
var _n = Math.round;

function rd(e, t, r) {
    if (t) {
        var n = t.x1,
            a = t.x2,
            i = t.y1,
            o = t.y2;
        e.x1 = n, e.x2 = a, e.y1 = i, e.y2 = o;
        var s = r && r.lineWidth;
        return s && (_n(n * 2) === _n(a * 2) && (e.x1 = e.x2 = Nr(n, s, !0)), _n(i * 2) === _n(o * 2) && (e.y1 = e.y2 = Nr(i, s, !0))), e
    }
}

function nd(e, t, r) {
    if (t) {
        var n = t.x,
            a = t.y,
            i = t.width,
            o = t.height;
        e.x = n, e.y = a, e.width = i, e.height = o;
        var s = r && r.lineWidth;
        return s && (e.x = Nr(n, s, !0), e.y = Nr(a, s, !0), e.width = Math.max(Nr(n + i, s, !1) - e.x, i === 0 ? 0 : 1), e.height = Math.max(Nr(a + o, s, !1) - e.y, o === 0 ? 0 : 1)), e
    }
}

function Nr(e, t, r) {
    if (!t) return e;
    var n = _n(e * 2);
    return (n + _n(t)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2
}
var Qm = function () {
        function e() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0
        }
        return e
    }(),
    Jm = {},
    ad = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new Qm
        }, t.prototype.buildPath = function (r, n) {
            var a, i, o, s;
            if (this.subPixelOptimize) {
                var u = nd(Jm, n, this.style);
                a = u.x, i = u.y, o = u.width, s = u.height, u.r = n.r, n = u
            } else a = n.x, i = n.y, o = n.width, s = n.height;
            n.r ? Km(r, n) : r.rect(a, i, o, s)
        }, t.prototype.isZeroArea = function () {
            return !this.shape.width || !this.shape.height
        }, t
    }(at);
ad.prototype.type = "rect";
const re = ad;
var Yf = {
        fill: "#000"
    },
    $f = 2,
    jm = {
        style: j({
            fill: !0,
            stroke: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineWidth: !0,
            fontSize: !0,
            lineHeight: !0,
            width: !0,
            height: !0,
            textShadowColor: !0,
            textShadowBlur: !0,
            textShadowOffsetX: !0,
            textShadowOffsetY: !0,
            backgroundColor: !0,
            padding: !0,
            borderColor: !0,
            borderWidth: !0,
            borderRadius: !0
        }, So.style)
    },
    id = function (e) {
        G(t, e);

        function t(r) {
            var n = e.call(this) || this;
            return n.type = "text", n._children = [], n._defaultStyle = Yf, n.attr(r), n
        }
        return t.prototype.childrenRef = function () {
            return this._children
        }, t.prototype.update = function () {
            e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
            for (var r = 0; r < this._children.length; r++) {
                var n = this._children[r];
                n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible
            }
        }, t.prototype.updateTransform = function () {
            var r = this.innerTransformable;
            r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : e.prototype.updateTransform.call(this)
        }, t.prototype.getLocalTransform = function (r) {
            var n = this.innerTransformable;
            return n ? n.getLocalTransform(r) : e.prototype.getLocalTransform.call(this, r)
        }, t.prototype.getComputedTransform = function () {
            return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this)
        }, t.prototype._updateSubTexts = function () {
            this._childCursor = 0, a_(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
        }, t.prototype.addSelfToZr = function (r) {
            e.prototype.addSelfToZr.call(this, r);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = r
        }, t.prototype.removeSelfFromZr = function (r) {
            e.prototype.removeSelfFromZr.call(this, r);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null
        }, t.prototype.getBoundingRect = function () {
            if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                for (var r = new ot(0, 0, 0, 0), n = this._children, a = [], i = null, o = 0; o < n.length; o++) {
                    var s = n[o],
                        u = s.getBoundingRect(),
                        l = s.getLocalTransform(a);
                    l ? (r.copy(u), r.applyTransform(l), i = i || r.clone(), i.union(r)) : (i = i || u.clone(), i.union(u))
                }
                this._rect = i || r
            }
            return this._rect
        }, t.prototype.setDefaultTextStyle = function (r) {
            this._defaultStyle = r || Yf
        }, t.prototype.setTextContent = function (r) {}, t.prototype._mergeStyle = function (r, n) {
            if (!n) return r;
            var a = n.rich,
                i = r.rich || a && {};
            return O(r, n), a && i ? (this._mergeRich(i, a), r.rich = i) : i && (r.rich = i), r
        }, t.prototype._mergeRich = function (r, n) {
            for (var a = lt(n), i = 0; i < a.length; i++) {
                var o = a[i];
                r[o] = r[o] || {}, O(r[o], n[o])
            }
        }, t.prototype.getAnimationStyleProps = function () {
            return jm
        }, t.prototype._getOrCreateChild = function (r) {
            var n = this._children[this._childCursor];
            return (!n || !(n instanceof r)) && (n = new r), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n
        }, t.prototype._updatePlainTexts = function () {
            var r = this.style,
                n = r.font || Wr,
                a = r.padding,
                i = jf(r),
                o = wm(i, r),
                s = Ss(r),
                u = !!r.backgroundColor,
                l = o.outerHeight,
                f = o.outerWidth,
                h = o.contentWidth,
                c = o.lines,
                v = o.lineHeight,
                d = this._defaultStyle,
                y = r.x || 0,
                p = r.y || 0,
                g = r.align || d.align || "left",
                m = r.verticalAlign || d.verticalAlign || "top",
                _ = y,
                S = pn(p, o.contentHeight, m);
            if (s || a) {
                var b = aa(y, f, g),
                    w = pn(p, l, m);
                s && this._renderBackground(r, r, b, w, f, l)
            }
            S += v / 2, a && (_ = Jf(y, g, a), m === "top" ? S += a[0] : m === "bottom" && (S -= a[2]));
            for (var x = 0, T = !1, D = Qf("fill" in r ? r.fill : (T = !0, d.fill)), C = Kf("stroke" in r ? r.stroke : !u && (!d.autoStroke || T) ? (x = $f, d.stroke) : null), M = r.textShadowBlur > 0, L = r.width != null && (r.overflow === "truncate" || r.overflow === "break" || r.overflow === "breakAll"), P = o.calculatedLineHeight, I = 0; I < c.length; I++) {
                var R = this._getOrCreateChild(bu),
                    E = R.createStyle();
                R.useStyle(E), E.text = c[I], E.x = _, E.y = S, g && (E.textAlign = g), E.textBaseline = "middle", E.opacity = r.opacity, E.strokeFirst = !0, M && (E.shadowBlur = r.textShadowBlur || 0, E.shadowColor = r.textShadowColor || "transparent", E.shadowOffsetX = r.textShadowOffsetX || 0, E.shadowOffsetY = r.textShadowOffsetY || 0), E.stroke = C, E.fill = D, C && (E.lineWidth = r.lineWidth || x, E.lineDash = r.lineDash, E.lineDashOffset = r.lineDashOffset || 0), E.font = n, qf(E, r), S += v, L && R.setBoundingRect(new ot(aa(E.x, r.width, E.textAlign), pn(E.y, P, E.textBaseline), h, P))
            }
        }, t.prototype._updateRichTexts = function () {
            var r = this.style,
                n = jf(r),
                a = Mm(n, r),
                i = a.width,
                o = a.outerWidth,
                s = a.outerHeight,
                u = r.padding,
                l = r.x || 0,
                f = r.y || 0,
                h = this._defaultStyle,
                c = r.align || h.align,
                v = r.verticalAlign || h.verticalAlign,
                d = aa(l, o, c),
                y = pn(f, s, v),
                p = d,
                g = y;
            u && (p += u[3], g += u[0]);
            var m = p + i;
            Ss(r) && this._renderBackground(r, r, d, y, o, s);
            for (var _ = !!r.backgroundColor, S = 0; S < a.lines.length; S++) {
                for (var b = a.lines[S], w = b.tokens, x = w.length, T = b.lineHeight, D = b.width, C = 0, M = p, L = m, P = x - 1, I = void 0; C < x && (I = w[C], !I.align || I.align === "left");) this._placeToken(I, r, T, g, M, "left", _), D -= I.width, M += I.width, C++;
                for (; P >= 0 && (I = w[P], I.align === "right");) this._placeToken(I, r, T, g, L, "right", _), D -= I.width, L -= I.width, P--;
                for (M += (i - (M - p) - (m - L) - D) / 2; C <= P;) I = w[C], this._placeToken(I, r, T, g, M + I.width / 2, "center", _), M += I.width, C++;
                g += T
            }
        }, t.prototype._placeToken = function (r, n, a, i, o, s, u) {
            var l = n.rich[r.styleName] || {};
            l.text = r.text;
            var f = r.verticalAlign,
                h = i + a / 2;
            f === "top" ? h = i + r.height / 2 : f === "bottom" && (h = i + a - r.height / 2);
            var c = !r.isLineHolder && Ss(l);
            c && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
            var v = !!l.backgroundColor,
                d = r.textPadding;
            d && (o = Jf(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
            var y = this._getOrCreateChild(bu),
                p = y.createStyle();
            y.useStyle(p);
            var g = this._defaultStyle,
                m = !1,
                _ = 0,
                S = Qf("fill" in l ? l.fill : "fill" in n ? n.fill : (m = !0, g.fill)),
                b = Kf("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!g.autoStroke || m) ? (_ = $f, g.stroke) : null),
                w = l.textShadowBlur > 0 || n.textShadowBlur > 0;
            p.text = r.text, p.x = o, p.y = h, w && (p.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = r.font || Wr, p.opacity = la(l.opacity, n.opacity, 1), qf(p, l), b && (p.lineWidth = la(l.lineWidth, n.lineWidth, _), p.lineDash = X(l.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = b), S && (p.fill = S);
            var x = r.contentWidth,
                T = r.contentHeight;
            y.setBoundingRect(new ot(aa(p.x, x, p.textAlign), pn(p.y, T, p.textBaseline), x, T))
        }, t.prototype._renderBackground = function (r, n, a, i, o, s) {
            var u = r.backgroundColor,
                l = r.borderWidth,
                f = r.borderColor,
                h = u && u.image,
                c = u && !h,
                v = r.borderRadius,
                d = this,
                y, p;
            if (c || r.lineHeight || l && f) {
                y = this._getOrCreateChild(re), y.useStyle(y.createStyle()), y.style.fill = null;
                var g = y.shape;
                g.x = a, g.y = i, g.width = o, g.height = s, g.r = v, y.dirtyShape()
            }
            if (c) {
                var m = y.style;
                m.fill = u || null, m.fillOpacity = X(r.fillOpacity, 1)
            } else if (h) {
                p = this._getOrCreateChild(qr), p.onload = function () {
                    d.dirtyStyle()
                };
                var _ = p.style;
                _.image = u.image, _.x = a, _.y = i, _.width = o, _.height = s
            }
            if (l && f) {
                var m = y.style;
                m.lineWidth = l, m.stroke = f, m.strokeOpacity = X(r.strokeOpacity, 1), m.lineDash = r.borderDash, m.lineDashOffset = r.borderDashOffset || 0, y.strokeContainThreshold = 0, y.hasFill() && y.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2)
            }
            var S = (y || p).style;
            S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = la(r.opacity, n.opacity, 1)
        }, t.makeFont = function (r) {
            var n = "";
            return n_(r) && (n = [r.fontStyle, r.fontWeight, r_(r.fontSize), r.fontFamily || "sans-serif"].join(" ")), n && Ve(n) || r.textFont || r.font
        }, t
    }(Na),
    t_ = {
        left: !0,
        right: 1,
        center: 1
    },
    e_ = {
        top: 1,
        bottom: 1,
        middle: 1
    },
    Xf = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];

function r_(e) {
    return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? qu + "px" : e + "px"
}

function qf(e, t) {
    for (var r = 0; r < Xf.length; r++) {
        var n = Xf[r],
            a = t[n];
        a != null && (e[n] = a)
    }
}

function n_(e) {
    return e.fontSize != null || e.fontFamily || e.fontWeight
}

function a_(e) {
    return Zf(e), A(e.rich, Zf), e
}

function Zf(e) {
    if (e) {
        e.font = id.makeFont(e);
        var t = e.align;
        t === "middle" && (t = "center"), e.align = t == null || t_[t] ? t : "left";
        var r = e.verticalAlign;
        r === "center" && (r = "middle"), e.verticalAlign = r == null || e_[r] ? r : "top";
        var n = e.padding;
        n && (e.padding = oc(e.padding))
    }
}

function Kf(e, t) {
    return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e
}

function Qf(e) {
    return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e
}

function Jf(e, t, r) {
    return t === "right" ? e - r[1] : t === "center" ? e + r[3] / 2 - r[1] / 2 : e + r[3]
}

function jf(e) {
    var t = e.text;
    return t != null && (t += ""), t
}

function Ss(e) {
    return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor)
}
const hr = id;
var gt = At(),
    i_ = function (e, t, r, n) {
        if (n) {
            var a = gt(n);
            a.dataIndex = r, a.dataType = t, a.seriesIndex = e, a.ssrType = "chart", n.type === "group" && n.traverse(function (i) {
                var o = gt(i);
                o.seriesIndex = e, o.dataIndex = r, o.dataType = t, o.ssrType = "chart"
            })
        }
    },
    th = 1,
    eh = {},
    od = At(),
    ul = At(),
    ll = 0,
    wo = 1,
    bo = 2,
    Ee = ["emphasis", "blur", "select"],
    Xi = ["normal", "emphasis", "blur", "select"],
    o_ = 10,
    s_ = 9,
    Gr = "highlight",
    Pi = "downplay",
    ca = "select",
    Ri = "unselect",
    da = "toggleSelect";

function on(e) {
    return e != null && e !== "none"
}

function To(e, t, r) {
    e.onHoverStateChange && (e.hoverState || 0) !== r && e.onHoverStateChange(t), e.hoverState = r
}

function sd(e) {
    To(e, "emphasis", bo)
}

function ud(e) {
    e.hoverState === bo && To(e, "normal", ll)
}

function fl(e) {
    To(e, "blur", wo)
}

function ld(e) {
    e.hoverState === wo && To(e, "normal", ll)
}

function u_(e) {
    e.selected = !0
}

function l_(e) {
    e.selected = !1
}

function rh(e, t, r) {
    t(e, r)
}

function Ye(e, t, r) {
    rh(e, t, r), e.isGroup && e.traverse(function (n) {
        rh(n, t, r)
    })
}

function dD(e, t) {
    switch (t) {
        case "emphasis":
            e.hoverState = bo;
            break;
        case "normal":
            e.hoverState = ll;
            break;
        case "blur":
            e.hoverState = wo;
            break;
        case "select":
            e.selected = !0
    }
}

function f_(e, t, r, n) {
    for (var a = e.style, i = {}, o = 0; o < t.length; o++) {
        var s = t[o],
            u = a[s];
        i[s] = u ? ? (n && n[s])
    }
    for (var o = 0; o < e.animators.length; o++) {
        var l = e.animators[o];
        l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(i, t)
    }
    return i
}

function h_(e, t, r, n) {
    var a = r && ct(r, "select") >= 0,
        i = !1;
    if (e instanceof at) {
        var o = od(e),
            s = a && o.selectFill || o.normalFill,
            u = a && o.selectStroke || o.normalStroke;
        if (on(s) || on(u)) {
            n = n || {};
            var l = n.style || {};
            l.fill === "inherit" ? (i = !0, n = O({}, n), l = O({}, l), l.fill = s) : !on(l.fill) && on(s) ? (i = !0, n = O({}, n), l = O({}, l), l.fill = mf(s)) : !on(l.stroke) && on(u) && (i || (n = O({}, n), l = O({}, l)), l.stroke = mf(u)), n.style = l
        }
    }
    if (n && n.z2 == null) {
        i || (n = O({}, n));
        var f = e.z2EmphasisLift;
        n.z2 = e.z2 + (f ? ? o_)
    }
    return n
}

function v_(e, t, r) {
    if (r && r.z2 == null) {
        r = O({}, r);
        var n = e.z2SelectLift;
        r.z2 = e.z2 + (n ? ? s_)
    }
    return r
}

function c_(e, t, r) {
    var n = ct(e.currentStates, t) >= 0,
        a = e.style.opacity,
        i = n ? null : f_(e, ["opacity"], t, {
            opacity: 1
        });
    r = r || {};
    var o = r.style || {};
    return o.opacity == null && (r = O({}, r), o = O({
        opacity: n ? a : i.opacity * .1
    }, o), r.style = o), r
}

function ws(e, t) {
    var r = this.states[e];
    if (this.style) {
        if (e === "emphasis") return h_(this, e, t, r);
        if (e === "blur") return c_(this, e, r);
        if (e === "select") return v_(this, e, r)
    }
    return r
}

function d_(e) {
    e.stateProxy = ws;
    var t = e.getTextContent(),
        r = e.getTextGuideLine();
    t && (t.stateProxy = ws), r && (r.stateProxy = ws)
}

function nh(e, t) {
    !cd(e, t) && !e.__highByOuter && Ye(e, sd)
}

function ah(e, t) {
    !cd(e, t) && !e.__highByOuter && Ye(e, ud)
}

function Tu(e, t) {
    e.__highByOuter |= 1 << (t || 0), Ye(e, sd)
}

function Mu(e, t) {
    !(e.__highByOuter &= ~(1 << (t || 0))) && Ye(e, ud)
}

function p_(e) {
    Ye(e, fl)
}

function fd(e) {
    Ye(e, ld)
}

function hd(e) {
    Ye(e, u_)
}

function vd(e) {
    Ye(e, l_)
}

function cd(e, t) {
    return e.__highDownSilentOnTouch && t.zrByTouch
}

function dd(e) {
    var t = e.getModel(),
        r = [],
        n = [];
    t.eachComponent(function (a, i) {
        var o = ul(i),
            s = a === "series",
            u = s ? e.getViewOfSeriesModel(i) : e.getViewOfComponentModel(i);
        !s && n.push(u), o.isBlured && (u.group.traverse(function (l) {
            ld(l)
        }), s && r.push(i)), o.isBlured = !1
    }), A(n, function (a) {
        a && a.toggleBlurSeries && a.toggleBlurSeries(r, !1, t)
    })
}

function xu(e, t, r, n) {
    var a = n.getModel();
    r = r || "coordinateSystem";

    function i(l, f) {
        for (var h = 0; h < f.length; h++) {
            var c = l.getItemGraphicEl(f[h]);
            c && fd(c)
        }
    }
    if (e != null && !(!t || t === "none")) {
        var o = a.getSeriesByIndex(e),
            s = o.coordinateSystem;
        s && s.master && (s = s.master);
        var u = [];
        a.eachSeries(function (l) {
            var f = o === l,
                h = l.coordinateSystem;
            h && h.master && (h = h.master);
            var c = h && s ? h === s : f;
            if (!(r === "series" && !f || r === "coordinateSystem" && !c || t === "series" && f)) {
                var v = n.getViewOfSeriesModel(l);
                if (v.group.traverse(function (p) {
                        p.__highByOuter && f && t === "self" || fl(p)
                    }), Bt(t)) i(l.getData(), t);
                else if (Y(t))
                    for (var d = lt(t), y = 0; y < d.length; y++) i(l.getData(d[y]), t[d[y]]);
                u.push(l), ul(l).isBlured = !0
            }
        }), a.eachComponent(function (l, f) {
            if (l !== "series") {
                var h = n.getViewOfComponentModel(f);
                h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, a)
            }
        })
    }
}

function Du(e, t, r) {
    if (!(e == null || t == null)) {
        var n = r.getModel().getComponent(e, t);
        if (n) {
            ul(n).isBlured = !0;
            var a = r.getViewOfComponentModel(n);
            !a || !a.focusBlurEnabled || a.group.traverse(function (i) {
                fl(i)
            })
        }
    }
}

function g_(e, t, r) {
    var n = e.seriesIndex,
        a = e.getData(t.dataType);
    if (a) {
        var i = go(a, t);
        i = (B(i) ? i[0] : i) || 0;
        var o = a.getItemGraphicEl(i);
        if (!o)
            for (var s = a.count(), u = 0; !o && u < s;) o = a.getItemGraphicEl(u++);
        if (o) {
            var l = gt(o);
            xu(n, l.focus, l.blurScope, r)
        } else {
            var f = e.get(["emphasis", "focus"]),
                h = e.get(["emphasis", "blurScope"]);
            f != null && xu(n, f, h, r)
        }
    }
}

function hl(e, t, r, n) {
    var a = {
        focusSelf: !1,
        dispatchers: null
    };
    if (e == null || e === "series" || t == null || r == null) return a;
    var i = n.getModel().getComponent(e, t);
    if (!i) return a;
    var o = n.getViewOfComponentModel(i);
    if (!o || !o.findHighDownDispatchers) return a;
    for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
        if (gt(s[l]).focus === "self") {
            u = !0;
            break
        } return {
        focusSelf: u,
        dispatchers: s
    }
}

function y_(e, t, r) {
    var n = gt(e),
        a = hl(n.componentMainType, n.componentIndex, n.componentHighDownName, r),
        i = a.dispatchers,
        o = a.focusSelf;
    i ? (o && Du(n.componentMainType, n.componentIndex, r), A(i, function (s) {
        return nh(s, t)
    })) : (xu(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && Du(n.componentMainType, n.componentIndex, r), nh(e, t))
}

function m_(e, t, r) {
    dd(r);
    var n = gt(e),
        a = hl(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
    a ? A(a, function (i) {
        return ah(i, t)
    }) : ah(e, t)
}

function __(e, t, r) {
    if (Au(t)) {
        var n = t.dataType,
            a = e.getData(n),
            i = go(a, t);
        B(i) || (i = [i]), e[t.type === da ? "toggleSelect" : t.type === ca ? "select" : "unselect"](i, n)
    }
}

function ih(e) {
    var t = e.getAllData();
    A(t, function (r) {
        var n = r.data,
            a = r.type;
        n.eachItemGraphicEl(function (i, o) {
            e.isSelected(o, a) ? hd(i) : vd(i)
        })
    })
}

function S_(e) {
    var t = [];
    return e.eachSeries(function (r) {
        var n = r.getAllData();
        A(n, function (a) {
            a.data;
            var i = a.type,
                o = r.getSelectedDataIndices();
            if (o.length > 0) {
                var s = {
                    dataIndex: o,
                    seriesIndex: r.seriesIndex
                };
                i != null && (s.dataType = i), t.push(s)
            }
        })
    }), t
}

function w_(e, t, r) {
    pd(e, !0), Ye(e, d_), T_(e, t, r)
}

function b_(e) {
    pd(e, !1)
}

function vl(e, t, r, n) {
    n ? b_(e) : w_(e, t, r)
}

function T_(e, t, r) {
    var n = gt(e);
    t != null ? (n.focus = t, n.blurScope = r) : n.focus && (n.focus = null)
}
var oh = ["emphasis", "blur", "select"],
    M_ = {
        itemStyle: "getItemStyle",
        lineStyle: "getLineStyle",
        areaStyle: "getAreaStyle"
    };

function qi(e, t, r, n) {
    r = r || "itemStyle";
    for (var a = 0; a < oh.length; a++) {
        var i = oh[a],
            o = t.getModel([i, r]),
            s = e.ensureState(i);
        s.style = n ? n(o) : o[M_[r]]()
    }
}

function pd(e, t) {
    var r = t === !1,
        n = e;
    e.highDownSilentOnTouch && (n.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r)
}

function Cu(e) {
    return !!(e && e.__highDownDispatcher)
}

function pD(e, t, r) {
    var n = gt(e);
    n.componentMainType = t.mainType, n.componentIndex = t.componentIndex, n.componentHighDownName = r
}

function x_(e) {
    var t = eh[e];
    return t == null && th <= 32 && (t = eh[e] = th++), t
}

function Au(e) {
    var t = e.type;
    return t === ca || t === Ri || t === da
}

function sh(e) {
    var t = e.type;
    return t === Gr || t === Pi
}

function D_(e) {
    var t = od(e);
    t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
    var r = e.states.select || {};
    t.selectFill = r.style && r.style.fill || null, t.selectStroke = r.style && r.style.stroke || null
}
var sn = Yr.CMD,
    C_ = [
        [],
        [],
        []
    ],
    uh = Math.sqrt,
    A_ = Math.atan2;

function gd(e, t) {
    if (t) {
        var r = e.data,
            n = e.len(),
            a, i, o, s, u, l, f = sn.M,
            h = sn.C,
            c = sn.L,
            v = sn.R,
            d = sn.A,
            y = sn.Q;
        for (o = 0, s = 0; o < n;) {
            switch (a = r[o++], s = o, i = 0, a) {
                case f:
                    i = 1;
                    break;
                case c:
                    i = 1;
                    break;
                case h:
                    i = 3;
                    break;
                case y:
                    i = 2;
                    break;
                case d:
                    var p = t[4],
                        g = t[5],
                        m = uh(t[0] * t[0] + t[1] * t[1]),
                        _ = uh(t[2] * t[2] + t[3] * t[3]),
                        S = A_(-t[1] / _, t[0] / m);
                    r[o] *= m, r[o++] += p, r[o] *= _, r[o++] += g, r[o++] *= m, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
                    break;
                case v:
                    l[0] = r[o++], l[1] = r[o++], Pe(l, l, t), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Pe(l, l, t), r[s++] = l[0], r[s++] = l[1]
            }
            for (u = 0; u < i; u++) {
                var b = C_[u];
                b[0] = r[o++], b[1] = r[o++], Pe(b, b, t), r[s++] = b[0], r[s++] = b[1]
            }
        }
        e.increaseVersion()
    }
}
var bs = Math.sqrt,
    Ja = Math.sin,
    ja = Math.cos,
    Wn = Math.PI;

function lh(e) {
    return Math.sqrt(e[0] * e[0] + e[1] * e[1])
}

function Lu(e, t) {
    return (e[0] * t[0] + e[1] * t[1]) / (lh(e) * lh(t))
}

function fh(e, t) {
    return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(Lu(e, t))
}

function hh(e, t, r, n, a, i, o, s, u, l, f) {
    var h = u * (Wn / 180),
        c = ja(h) * (e - r) / 2 + Ja(h) * (t - n) / 2,
        v = -1 * Ja(h) * (e - r) / 2 + ja(h) * (t - n) / 2,
        d = c * c / (o * o) + v * v / (s * s);
    d > 1 && (o *= bs(d), s *= bs(d));
    var y = (a === i ? -1 : 1) * bs((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0,
        p = y * o * v / s,
        g = y * -s * c / o,
        m = (e + r) / 2 + ja(h) * p - Ja(h) * g,
        _ = (t + n) / 2 + Ja(h) * p + ja(h) * g,
        S = fh([1, 0], [(c - p) / o, (v - g) / s]),
        b = [(c - p) / o, (v - g) / s],
        w = [(-1 * c - p) / o, (-1 * v - g) / s],
        x = fh(b, w);
    if (Lu(b, w) <= -1 && (x = Wn), Lu(b, w) >= 1 && (x = 0), x < 0) {
        var T = Math.round(x / Wn * 1e6) / 1e6;
        x = Wn * 2 + T % 2 * Wn
    }
    f.addData(l, m, _, o, s, S, x, h, i)
}
var L_ = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig,
    I_ = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;

function P_(e) {
    var t = new Yr;
    if (!e) return t;
    var r = 0,
        n = 0,
        a = r,
        i = n,
        o, s = Yr.CMD,
        u = e.match(L_);
    if (!u) return t;
    for (var l = 0; l < u.length; l++) {
        for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(I_) || [], d = v.length, y = 0; y < d; y++) v[y] = parseFloat(v[y]);
        for (var p = 0; p < d;) {
            var g = void 0,
                m = void 0,
                _ = void 0,
                S = void 0,
                b = void 0,
                w = void 0,
                x = void 0,
                T = r,
                D = n,
                C = void 0,
                M = void 0;
            switch (h) {
                case "l":
                    r += v[p++], n += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "L":
                    r = v[p++], n = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "m":
                    r += v[p++], n += v[p++], c = s.M, t.addData(c, r, n), a = r, i = n, h = "l";
                    break;
                case "M":
                    r = v[p++], n = v[p++], c = s.M, t.addData(c, r, n), a = r, i = n, h = "L";
                    break;
                case "h":
                    r += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "H":
                    r = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "v":
                    n += v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "V":
                    n = v[p++], c = s.L, t.addData(c, r, n);
                    break;
                case "C":
                    c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), r = v[p - 2], n = v[p - 1];
                    break;
                case "c":
                    c = s.C, t.addData(c, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n, v[p++] + r, v[p++] + n), r += v[p - 2], n += v[p - 1];
                    break;
                case "S":
                    g = r, m = n, C = t.len(), M = t.data, o === s.C && (g += r - M[C - 4], m += n - M[C - 3]), c = s.C, T = v[p++], D = v[p++], r = v[p++], n = v[p++], t.addData(c, g, m, T, D, r, n);
                    break;
                case "s":
                    g = r, m = n, C = t.len(), M = t.data, o === s.C && (g += r - M[C - 4], m += n - M[C - 3]), c = s.C, T = r + v[p++], D = n + v[p++], r += v[p++], n += v[p++], t.addData(c, g, m, T, D, r, n);
                    break;
                case "Q":
                    T = v[p++], D = v[p++], r = v[p++], n = v[p++], c = s.Q, t.addData(c, T, D, r, n);
                    break;
                case "q":
                    T = v[p++] + r, D = v[p++] + n, r += v[p++], n += v[p++], c = s.Q, t.addData(c, T, D, r, n);
                    break;
                case "T":
                    g = r, m = n, C = t.len(), M = t.data, o === s.Q && (g += r - M[C - 4], m += n - M[C - 3]), r = v[p++], n = v[p++], c = s.Q, t.addData(c, g, m, r, n);
                    break;
                case "t":
                    g = r, m = n, C = t.len(), M = t.data, o === s.Q && (g += r - M[C - 4], m += n - M[C - 3]), r += v[p++], n += v[p++], c = s.Q, t.addData(c, g, m, r, n);
                    break;
                case "A":
                    _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = r, D = n, r = v[p++], n = v[p++], c = s.A, hh(T, D, r, n, w, x, _, S, b, c, t);
                    break;
                case "a":
                    _ = v[p++], S = v[p++], b = v[p++], w = v[p++], x = v[p++], T = r, D = n, r += v[p++], n += v[p++], c = s.A, hh(T, D, r, n, w, x, _, S, b, c, t);
                    break
            }
        }(h === "z" || h === "Z") && (c = s.Z, t.addData(c), r = a, n = i), o = c
    }
    return t.toStatic(), t
}
var yd = function (e) {
    G(t, e);

    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.prototype.applyTransform = function (r) {}, t
}(at);

function md(e) {
    return e.setData != null
}

function _d(e, t) {
    var r = P_(e),
        n = O({}, t);
    return n.buildPath = function (a) {
        if (md(a)) {
            a.setData(r.data);
            var i = a.getContext();
            i && a.rebuildPath(i, 1)
        } else {
            var i = a;
            r.rebuildPath(i, 1)
        }
    }, n.applyTransform = function (a) {
        gd(r, a), this.dirtyShape()
    }, n
}

function R_(e, t) {
    return new yd(_d(e, t))
}

function E_(e, t) {
    var r = _d(e, t),
        n = function (a) {
            G(i, a);

            function i(o) {
                var s = a.call(this, o) || this;
                return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s
            }
            return i
        }(yd);
    return n
}

function k_(e, t) {
    for (var r = [], n = e.length, a = 0; a < n; a++) {
        var i = e[a];
        r.push(i.getUpdatedPathProxy(!0))
    }
    var o = new at(t);
    return o.createPathProxy(), o.buildPath = function (s) {
        if (md(s)) {
            s.appendPath(r);
            var u = s.getContext();
            u && s.rebuildPath(u, 1)
        }
    }, o
}

function gD(e, t) {
    t = t || {};
    var r = new at;
    return e.shape && r.setShape(e.shape), r.setStyle(e.style), t.bakeTransform ? gd(r.path, e.getComputedTransform()) : t.toLocal ? r.setLocalTransform(e.getComputedTransform()) : r.copyTransform(e), r.buildPath = e.buildPath, r.applyTransform = r.applyTransform, r.z = e.z, r.z2 = e.z2, r.zlevel = e.zlevel, r
}
var O_ = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0
        }
        return e
    }(),
    Sd = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new O_
        }, t.prototype.buildPath = function (r, n) {
            r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2)
        }, t
    }(at);
Sd.prototype.type = "circle";
const Mo = Sd;
var N_ = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
        }
        return e
    }(),
    wd = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new N_
        }, t.prototype.buildPath = function (r, n) {
            var a = .5522848,
                i = n.cx,
                o = n.cy,
                s = n.rx,
                u = n.ry,
                l = s * a,
                f = u * a;
            r.moveTo(i - s, o), r.bezierCurveTo(i - s, o - f, i - l, o - u, i, o - u), r.bezierCurveTo(i + l, o - u, i + s, o - f, i + s, o), r.bezierCurveTo(i + s, o + f, i + l, o + u, i, o + u), r.bezierCurveTo(i - l, o + u, i - s, o + f, i - s, o), r.closePath()
        }, t
    }(at);
wd.prototype.type = "ellipse";
const bd = wd;
var Td = Math.PI,
    Ts = Td * 2,
    Cr = Math.sin,
    un = Math.cos,
    F_ = Math.acos,
    Mt = Math.atan2,
    vh = Math.abs,
    pa = Math.sqrt,
    ia = Math.max,
    xe = Math.min,
    se = 1e-4;

function B_(e, t, r, n, a, i, o, s) {
    var u = r - e,
        l = n - t,
        f = o - a,
        h = s - i,
        c = h * u - f * l;
    if (!(c * c < se)) return c = (f * (t - i) - h * (e - a)) / c, [e + c * u, t + c * l]
}

function ti(e, t, r, n, a, i, o) {
    var s = e - r,
        u = t - n,
        l = (o ? i : -i) / pa(s * s + u * u),
        f = l * u,
        h = -l * s,
        c = e + f,
        v = t + h,
        d = r + f,
        y = n + h,
        p = (c + d) / 2,
        g = (v + y) / 2,
        m = d - c,
        _ = y - v,
        S = m * m + _ * _,
        b = a - i,
        w = c * y - d * v,
        x = (_ < 0 ? -1 : 1) * pa(ia(0, b * b * S - w * w)),
        T = (w * _ - m * x) / S,
        D = (-w * m - _ * x) / S,
        C = (w * _ + m * x) / S,
        M = (-w * m + _ * x) / S,
        L = T - p,
        P = D - g,
        I = C - p,
        R = M - g;
    return L * L + P * P > I * I + R * R && (T = C, D = M), {
        cx: T,
        cy: D,
        x0: -f,
        y0: -h,
        x1: T * (a / b - 1),
        y1: D * (a / b - 1)
    }
}

function z_(e) {
    var t;
    if (B(e)) {
        var r = e.length;
        if (!r) return e;
        r === 1 ? t = [e[0], e[0], 0, 0] : r === 2 ? t = [e[0], e[0], e[1], e[1]] : r === 3 ? t = e.concat(e[2]) : t = e
    } else t = [e, e, e, e];
    return t
}

function V_(e, t) {
    var r, n = ia(t.r, 0),
        a = ia(t.r0 || 0, 0),
        i = n > 0,
        o = a > 0;
    if (!(!i && !o)) {
        if (i || (n = a, a = 0), a > n) {
            var s = n;
            n = a, a = s
        }
        var u = t.startAngle,
            l = t.endAngle;
        if (!(isNaN(u) || isNaN(l))) {
            var f = t.cx,
                h = t.cy,
                c = !!t.clockwise,
                v = vh(l - u),
                d = v > Ts && v % Ts;
            if (d > se && (v = d), !(n > se)) e.moveTo(f, h);
            else if (v > Ts - se) e.moveTo(f + n * un(u), h + n * Cr(u)), e.arc(f, h, n, u, l, !c), a > se && (e.moveTo(f + a * un(l), h + a * Cr(l)), e.arc(f, h, a, l, u, c));
            else {
                var y = void 0,
                    p = void 0,
                    g = void 0,
                    m = void 0,
                    _ = void 0,
                    S = void 0,
                    b = void 0,
                    w = void 0,
                    x = void 0,
                    T = void 0,
                    D = void 0,
                    C = void 0,
                    M = void 0,
                    L = void 0,
                    P = void 0,
                    I = void 0,
                    R = n * un(u),
                    E = n * Cr(u),
                    z = a * un(l),
                    k = a * Cr(l),
                    N = v > se;
                if (N) {
                    var F = t.cornerRadius;
                    F && (r = z_(F), y = r[0], p = r[1], g = r[2], m = r[3]);
                    var $ = vh(n - a) / 2;
                    if (_ = xe($, g), S = xe($, m), b = xe($, y), w = xe($, p), D = x = ia(_, S), C = T = ia(b, w), (x > se || T > se) && (M = n * un(l), L = n * Cr(l), P = a * un(u), I = a * Cr(u), v < Td)) {
                        var q = B_(R, E, P, I, M, L, z, k);
                        if (q) {
                            var st = R - q[0],
                                yt = E - q[1],
                                Gt = M - q[0],
                                Se = L - q[1],
                                Xt = 1 / Cr(F_((st * Gt + yt * Se) / (pa(st * st + yt * yt) * pa(Gt * Gt + Se * Se))) / 2),
                                Ht = pa(q[0] * q[0] + q[1] * q[1]);
                            D = xe(x, (n - Ht) / (Xt + 1)), C = xe(T, (a - Ht) / (Xt - 1))
                        }
                    }
                }
                if (!N) e.moveTo(f + R, h + E);
                else if (D > se) {
                    var St = xe(g, D),
                        ht = xe(m, D),
                        H = ti(P, I, R, E, n, St, c),
                        Z = ti(M, L, z, k, n, ht, c);
                    e.moveTo(f + H.cx + H.x0, h + H.cy + H.y0), D < x && St === ht ? e.arc(f + H.cx, h + H.cy, D, Mt(H.y0, H.x0), Mt(Z.y0, Z.x0), !c) : (St > 0 && e.arc(f + H.cx, h + H.cy, St, Mt(H.y0, H.x0), Mt(H.y1, H.x1), !c), e.arc(f, h, n, Mt(H.cy + H.y1, H.cx + H.x1), Mt(Z.cy + Z.y1, Z.cx + Z.x1), !c), ht > 0 && e.arc(f + Z.cx, h + Z.cy, ht, Mt(Z.y1, Z.x1), Mt(Z.y0, Z.x0), !c))
                } else e.moveTo(f + R, h + E), e.arc(f, h, n, u, l, !c);
                if (!(a > se) || !N) e.lineTo(f + z, h + k);
                else if (C > se) {
                    var St = xe(y, C),
                        ht = xe(p, C),
                        H = ti(z, k, M, L, a, -ht, c),
                        Z = ti(R, E, P, I, a, -St, c);
                    e.lineTo(f + H.cx + H.x0, h + H.cy + H.y0), C < T && St === ht ? e.arc(f + H.cx, h + H.cy, C, Mt(H.y0, H.x0), Mt(Z.y0, Z.x0), !c) : (ht > 0 && e.arc(f + H.cx, h + H.cy, ht, Mt(H.y0, H.x0), Mt(H.y1, H.x1), !c), e.arc(f, h, a, Mt(H.cy + H.y1, H.cx + H.x1), Mt(Z.cy + Z.y1, Z.cx + Z.x1), c), St > 0 && e.arc(f + Z.cx, h + Z.cy, St, Mt(Z.y1, Z.x1), Mt(Z.y0, Z.x0), !c))
                } else e.lineTo(f + z, h + k), e.arc(f, h, a, l, u, c)
            }
            e.closePath()
        }
    }
}
var G_ = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0
        }
        return e
    }(),
    Md = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new G_
        }, t.prototype.buildPath = function (r, n) {
            V_(r, n)
        }, t.prototype.isZeroArea = function () {
            return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
        }, t
    }(at);
Md.prototype.type = "sector";
const Zr = Md;
var H_ = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
        }
        return e
    }(),
    xd = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new H_
        }, t.prototype.buildPath = function (r, n) {
            var a = n.cx,
                i = n.cy,
                o = Math.PI * 2;
            r.moveTo(a + n.r, i), r.arc(a, i, n.r, 0, o, !1), r.moveTo(a + n.r0, i), r.arc(a, i, n.r0, 0, o, !0)
        }, t
    }(at);
xd.prototype.type = "ring";
const cl = xd;

function W_(e, t, r, n) {
    var a = [],
        i = [],
        o = [],
        s = [],
        u, l, f, h;
    if (n) {
        f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
        for (var c = 0, v = e.length; c < v; c++) gn(f, f, e[c]), yn(h, h, e[c]);
        gn(f, f, n[0]), yn(h, h, n[1])
    }
    for (var c = 0, v = e.length; c < v; c++) {
        var d = e[c];
        if (r) u = e[c ? c - 1 : v - 1], l = e[(c + 1) % v];
        else if (c === 0 || c === v - 1) {
            a.push(m0(e[c]));
            continue
        } else u = e[c - 1], l = e[c + 1];
        _0(i, l, u), Vo(i, i, t);
        var y = eu(d, u),
            p = eu(d, l),
            g = y + p;
        g !== 0 && (y /= g, p /= g), Vo(o, i, -y), Vo(s, i, p);
        var m = jl([], d, o),
            _ = jl([], d, s);
        n && (yn(m, m, f), gn(m, m, h), yn(_, _, f), gn(_, _, h)), a.push(m), a.push(_)
    }
    return r && a.push(a.shift()), a
}

function Dd(e, t, r) {
    var n = t.smooth,
        a = t.points;
    if (a && a.length >= 2) {
        if (n) {
            var i = W_(a, n, r, t.smoothConstraint);
            e.moveTo(a[0][0], a[0][1]);
            for (var o = a.length, s = 0; s < (r ? o : o - 1); s++) {
                var u = i[s * 2],
                    l = i[s * 2 + 1],
                    f = a[(s + 1) % o];
                e.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1])
            }
        } else {
            e.moveTo(a[0][0], a[0][1]);
            for (var s = 1, h = a.length; s < h; s++) e.lineTo(a[s][0], a[s][1])
        }
        r && e.closePath()
    }
}
var U_ = function () {
        function e() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null
        }
        return e
    }(),
    Fa = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new U_
        }, t.prototype.buildPath = function (r, n) {
            Dd(r, n, !0)
        }, t
    }(at);
Fa.prototype.type = "polygon";
var Y_ = function () {
        function e() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
        }
        return e
    }(),
    Kr = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new Y_
        }, t.prototype.buildPath = function (r, n) {
            Dd(r, n, !1)
        }, t
    }(at);
Kr.prototype.type = "polyline";
var $_ = {},
    X_ = function () {
        function e() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
        }
        return e
    }(),
    In = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new X_
        }, t.prototype.buildPath = function (r, n) {
            var a, i, o, s;
            if (this.subPixelOptimize) {
                var u = rd($_, n, this.style);
                a = u.x1, i = u.y1, o = u.x2, s = u.y2
            } else a = n.x1, i = n.y1, o = n.x2, s = n.y2;
            var l = n.percent;
            l !== 0 && (r.moveTo(a, i), l < 1 && (o = a * (1 - l) + o * l, s = i * (1 - l) + s * l), r.lineTo(o, s))
        }, t.prototype.pointAt = function (r) {
            var n = this.shape;
            return [n.x1 * (1 - r) + n.x2 * r, n.y1 * (1 - r) + n.y2 * r]
        }, t
    }(at);
In.prototype.type = "line";
var Rt = [],
    q_ = function () {
        function e() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
        }
        return e
    }();

function ch(e, t, r) {
    var n = e.cpx2,
        a = e.cpy2;
    return n != null || a != null ? [(r ? cf : bt)(e.x1, e.cpx1, e.cpx2, e.x2, t), (r ? cf : bt)(e.y1, e.cpy1, e.cpy2, e.y2, t)] : [(r ? df : Dt)(e.x1, e.cpx1, e.x2, t), (r ? df : Dt)(e.y1, e.cpy1, e.y2, t)]
}
var Cd = function (e) {
    G(t, e);

    function t(r) {
        return e.call(this, r) || this
    }
    return t.prototype.getDefaultStyle = function () {
        return {
            stroke: "#000",
            fill: null
        }
    }, t.prototype.getDefaultShape = function () {
        return new q_
    }, t.prototype.buildPath = function (r, n) {
        var a = n.x1,
            i = n.y1,
            o = n.x2,
            s = n.y2,
            u = n.cpx1,
            l = n.cpy1,
            f = n.cpx2,
            h = n.cpy2,
            c = n.percent;
        c !== 0 && (r.moveTo(a, i), f == null || h == null ? (c < 1 && (Hi(a, u, o, c, Rt), u = Rt[1], o = Rt[2], Hi(i, l, s, c, Rt), l = Rt[1], s = Rt[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && (Gi(a, u, f, o, c, Rt), u = Rt[1], f = Rt[2], o = Rt[3], Gi(i, l, h, s, c, Rt), l = Rt[1], h = Rt[2], s = Rt[3]), r.bezierCurveTo(u, l, f, h, o, s)))
    }, t.prototype.pointAt = function (r) {
        return ch(this.shape, r, !1)
    }, t.prototype.tangentAt = function (r) {
        var n = ch(this.shape, r, !0);
        return b0(n, n)
    }, t
}(at);
Cd.prototype.type = "bezier-curve";
const Ad = Cd;
var Z_ = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0
        }
        return e
    }(),
    Ld = function (e) {
        G(t, e);

        function t(r) {
            return e.call(this, r) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new Z_
        }, t.prototype.buildPath = function (r, n) {
            var a = n.cx,
                i = n.cy,
                o = Math.max(n.r, 0),
                s = n.startAngle,
                u = n.endAngle,
                l = n.clockwise,
                f = Math.cos(s),
                h = Math.sin(s);
            r.moveTo(f * o + a, h * o + i), r.arc(a, i, o, s, u, !l)
        }, t
    }(at);
Ld.prototype.type = "arc";
const dl = Ld;
var K_ = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = "compound", r
    }
    return t.prototype._updatePathDirty = function () {
        for (var r = this.shape.paths, n = this.shapeChanged(), a = 0; a < r.length; a++) n = n || r[a].shapeChanged();
        n && this.dirtyShape()
    }, t.prototype.beforeBrush = function () {
        this._updatePathDirty();
        for (var r = this.shape.paths || [], n = this.getGlobalScale(), a = 0; a < r.length; a++) r[a].path || r[a].createPathProxy(), r[a].path.setScale(n[0], n[1], r[a].segmentIgnoreThreshold)
    }, t.prototype.buildPath = function (r, n) {
        for (var a = n.paths || [], i = 0; i < a.length; i++) a[i].buildPath(r, a[i].shape, !0)
    }, t.prototype.afterBrush = function () {
        for (var r = this.shape.paths || [], n = 0; n < r.length; n++) r[n].pathUpdated()
    }, t.prototype.getBoundingRect = function () {
        return this._updatePathDirty.call(this), at.prototype.getBoundingRect.call(this)
    }, t
}(at);
const Q_ = K_;
var J_ = function () {
    function e(t) {
        this.colorStops = t || []
    }
    return e.prototype.addColorStop = function (t, r) {
        this.colorStops.push({
            offset: t,
            color: r
        })
    }, e
}();
const Id = J_;
var j_ = function (e) {
        G(t, e);

        function t(r, n, a, i, o, s) {
            var u = e.call(this, o) || this;
            return u.x = r ? ? 0, u.y = n ? ? 0, u.x2 = a ? ? 1, u.y2 = i ? ? 0, u.type = "linear", u.global = s || !1, u
        }
        return t
    }(Id),
    t1 = function (e) {
        G(t, e);

        function t(r, n, a, i, o) {
            var s = e.call(this, i) || this;
            return s.x = r ? ? .5, s.y = n ? ? .5, s.r = a ? ? .5, s.type = "radial", s.global = o || !1, s
        }
        return t
    }(Id);
const e1 = t1;
var Ar = [0, 0],
    Lr = [0, 0],
    ei = new W,
    ri = new W,
    r1 = function () {
        function e(t, r) {
            this._corners = [], this._axes = [], this._origin = [0, 0];
            for (var n = 0; n < 4; n++) this._corners[n] = new W;
            for (var n = 0; n < 2; n++) this._axes[n] = new W;
            t && this.fromBoundingRect(t, r)
        }
        return e.prototype.fromBoundingRect = function (t, r) {
            var n = this._corners,
                a = this._axes,
                i = t.x,
                o = t.y,
                s = i + t.width,
                u = o + t.height;
            if (n[0].set(i, o), n[1].set(s, o), n[2].set(s, u), n[3].set(i, u), r)
                for (var l = 0; l < 4; l++) n[l].transform(r);
            W.sub(a[0], n[1], n[0]), W.sub(a[1], n[3], n[0]), a[0].normalize(), a[1].normalize();
            for (var l = 0; l < 2; l++) this._origin[l] = a[l].dot(n[0])
        }, e.prototype.intersect = function (t, r) {
            var n = !0,
                a = !r;
            return ei.set(1 / 0, 1 / 0), ri.set(0, 0), !this._intersectCheckOneSide(this, t, ei, ri, a, 1) && (n = !1, a) || !this._intersectCheckOneSide(t, this, ei, ri, a, -1) && (n = !1, a) || a || W.copy(r, n ? ei : ri), n
        }, e.prototype._intersectCheckOneSide = function (t, r, n, a, i, o) {
            for (var s = !0, u = 0; u < 2; u++) {
                var l = this._axes[u];
                if (this._getProjMinMaxOnAxis(u, t._corners, Ar), this._getProjMinMaxOnAxis(u, r._corners, Lr), Ar[1] < Lr[0] || Ar[0] > Lr[1]) {
                    if (s = !1, i) return s;
                    var f = Math.abs(Lr[0] - Ar[1]),
                        h = Math.abs(Ar[0] - Lr[1]);
                    Math.min(f, h) > a.len() && (f < h ? W.scale(a, l, -f * o) : W.scale(a, l, h * o))
                } else if (n) {
                    var f = Math.abs(Lr[0] - Ar[1]),
                        h = Math.abs(Ar[0] - Lr[1]);
                    Math.min(f, h) < n.len() && (f < h ? W.scale(n, l, f * o) : W.scale(n, l, -h * o))
                }
            }
            return s
        }, e.prototype._getProjMinMaxOnAxis = function (t, r, n) {
            for (var a = this._axes[t], i = this._origin, o = r[0].dot(a) + i[t], s = o, u = o, l = 1; l < r.length; l++) {
                var f = r[l].dot(a) + i[t];
                s = Math.min(f, s), u = Math.max(f, u)
            }
            n[0] = s, n[1] = u
        }, e
    }();
const Zi = r1;
var n1 = [],
    a1 = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.notClear = !0, r.incremental = !0, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r
        }
        return t.prototype.traverse = function (r, n) {
            r.call(n, this)
        }, t.prototype.useStyle = function () {
            this.style = {}
        }, t.prototype.getCursor = function () {
            return this._cursor
        }, t.prototype.innerAfterBrush = function () {
            this._cursor = this._displayables.length
        }, t.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
        }, t.prototype.clearTemporalDisplayables = function () {
            this._temporaryDisplayables = []
        }, t.prototype.addDisplayable = function (r, n) {
            n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw()
        }, t.prototype.addDisplayables = function (r, n) {
            n = n || !1;
            for (var a = 0; a < r.length; a++) this.addDisplayable(r[a], n)
        }, t.prototype.getDisplayables = function () {
            return this._displayables
        }, t.prototype.getTemporalDisplayables = function () {
            return this._temporaryDisplayables
        }, t.prototype.eachPendingDisplayable = function (r) {
            for (var n = this._cursor; n < this._displayables.length; n++) r && r(this._displayables[n]);
            for (var n = 0; n < this._temporaryDisplayables.length; n++) r && r(this._temporaryDisplayables[n])
        }, t.prototype.update = function () {
            this.updateTransform();
            for (var r = this._cursor; r < this._displayables.length; r++) {
                var n = this._displayables[r];
                n.parent = this, n.update(), n.parent = null
            }
            for (var r = 0; r < this._temporaryDisplayables.length; r++) {
                var n = this._temporaryDisplayables[r];
                n.parent = this, n.update(), n.parent = null
            }
        }, t.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var r = new ot(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
                    var a = this._displayables[n],
                        i = a.getBoundingRect().clone();
                    a.needLocalTransform() && i.applyTransform(a.getLocalTransform(n1)), r.union(i)
                }
                this._rect = r
            }
            return this._rect
        }, t.prototype.contain = function (r, n) {
            var a = this.transformCoordToLocal(r, n),
                i = this.getBoundingRect();
            if (i.contain(a[0], a[1]))
                for (var o = 0; o < this._displayables.length; o++) {
                    var s = this._displayables[o];
                    if (s.contain(r, n)) return !0
                }
            return !1
        }, t
    }(Na);
const i1 = a1;
var Pd = At();

function o1(e, t, r, n, a) {
    var i;
    if (t && t.ecModel) {
        var o = t.ecModel.getUpdatePayload();
        i = o && o.animation
    }
    var s = t && t.isAnimationEnabled(),
        u = e === "update";
    if (s) {
        var l = void 0,
            f = void 0,
            h = void 0;
        n ? (l = X(n.duration, 200), f = X(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), i && (i.duration != null && (l = i.duration), i.easing != null && (f = i.easing), i.delay != null && (h = i.delay)), Q(h) && (h = h(r, a)), Q(l) && (l = l(r));
        var c = {
            duration: l || 0,
            delay: h,
            easing: f
        };
        return c
    } else return null
}

function pl(e, t, r, n, a, i, o) {
    var s = !1,
        u;
    Q(a) ? (o = i, i = a, a = null) : Y(a) && (i = a.cb, o = a.during, s = a.isFrom, u = a.removeOpt, a = a.dataIndex);
    var l = e === "leave";
    l || t.stopAnimation("leave");
    var f = o1(e, n, a, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, a) : null);
    if (f && f.duration > 0) {
        var h = f.duration,
            c = f.delay,
            v = f.easing,
            d = {
                duration: h,
                delay: c || 0,
                easing: v,
                done: i,
                force: !!i || !!o,
                setToFinal: !l,
                scope: e,
                during: o
            };
        s ? t.animateFrom(r, d) : t.animateTo(r, d)
    } else t.stopAnimation(), !s && t.attr(r), o && o(1), i && i()
}

function ne(e, t, r, n, a, i) {
    pl("update", e, t, r, n, a, i)
}

function $t(e, t, r, n, a, i) {
    pl("enter", e, t, r, n, a, i)
}

function ga(e) {
    if (!e.__zr) return !0;
    for (var t = 0; t < e.animators.length; t++) {
        var r = e.animators[t];
        if (r.scope === "leave") return !0
    }
    return !1
}

function Rd(e, t, r, n, a, i) {
    ga(e) || pl("leave", e, t, r, n, a, i)
}

function dh(e, t, r, n) {
    e.removeTextContent(), e.removeTextGuideLine(), Rd(e, {
        style: {
            opacity: 0
        }
    }, t, r, n)
}

function Ki(e, t, r) {
    function n() {
        e.parent && e.parent.remove(e)
    }
    e.isGroup ? e.traverse(function (a) {
        a.isGroup || dh(a, t, r, n)
    }) : dh(e, t, r, n)
}

function Qi(e) {
    Pd(e).oldStyle = e.style
}

function yD(e) {
    return Pd(e).oldStyle
}
var Ji = Math.max,
    ji = Math.min,
    Iu = {};

function s1(e) {
    return at.extend(e)
}
var u1 = E_;

function l1(e, t) {
    return u1(e, t)
}

function me(e, t) {
    Iu[e] = t
}

function f1(e) {
    if (Iu.hasOwnProperty(e)) return Iu[e]
}

function gl(e, t, r, n) {
    var a = R_(e, t);
    return r && (n === "center" && (r = kd(r, a.getBoundingRect())), Od(a, r)), a
}

function Ed(e, t, r) {
    var n = new qr({
        style: {
            image: e,
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height
        },
        onload: function (a) {
            if (r === "center") {
                var i = {
                    width: a.width,
                    height: a.height
                };
                n.setStyle(kd(t, i))
            }
        }
    });
    return n
}

function kd(e, t) {
    var r = t.width / t.height,
        n = e.height * r,
        a;
    n <= e.width ? a = e.height : (n = e.width, a = n / r);
    var i = e.x + e.width / 2,
        o = e.y + e.height / 2;
    return {
        x: i - n / 2,
        y: o - a / 2,
        width: n,
        height: a
    }
}
var Pu = k_;

function Od(e, t) {
    if (e.applyTransform) {
        var r = e.getBoundingRect(),
            n = r.calculateTransform(t);
        e.applyTransform(n)
    }
}

function yl(e, t) {
    return rd(e, e, {
        lineWidth: t
    }), e
}

function h1(e) {
    return nd(e.shape, e.shape, e.style), e
}
var v1 = Nr;

function c1(e, t) {
    for (var r = tl([]); e && e !== t;) bn(r, e.getLocalTransform(), r), e = e.parent;
    return r
}

function Nd(e, t, r) {
    return t && !Bt(t) && (t = nl.getLocalTransform(t)), r && (t = el([], t)), Pe([], e, t)
}

function d1(e, t, r) {
    var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]),
        a = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]),
        i = [e === "left" ? -n : e === "right" ? n : 0, e === "top" ? -a : e === "bottom" ? a : 0];
    return i = Nd(i, t, r), Math.abs(i[0]) > Math.abs(i[1]) ? i[0] > 0 ? "right" : "left" : i[1] > 0 ? "bottom" : "top"
}

function ph(e) {
    return !e.isGroup
}

function p1(e) {
    return e.shape != null
}

function g1(e, t, r) {
    if (!e || !t) return;

    function n(o) {
        var s = {};
        return o.traverse(function (u) {
            ph(u) && u.anid && (s[u.anid] = u)
        }), s
    }

    function a(o) {
        var s = {
            x: o.x,
            y: o.y,
            rotation: o.rotation
        };
        return p1(o) && (s.shape = O({}, o.shape)), s
    }
    var i = n(e);
    t.traverse(function (o) {
        if (ph(o) && o.anid) {
            var s = i[o.anid];
            if (s) {
                var u = a(o);
                o.attr(a(s)), ne(o, u, r, gt(o).dataIndex)
            }
        }
    })
}

function y1(e, t) {
    return V(e, function (r) {
        var n = r[0];
        n = Ji(n, t.x), n = ji(n, t.x + t.width);
        var a = r[1];
        return a = Ji(a, t.y), a = ji(a, t.y + t.height), [n, a]
    })
}

function m1(e, t) {
    var r = Ji(e.x, t.x),
        n = ji(e.x + e.width, t.x + t.width),
        a = Ji(e.y, t.y),
        i = ji(e.y + e.height, t.y + t.height);
    if (n >= r && i >= a) return {
        x: r,
        y: a,
        width: n - r,
        height: i - a
    }
}

function _1(e, t, r) {
    var n = O({
            rectHover: !0
        }, t),
        a = n.style = {
            strokeNoScale: !0
        };
    if (r = r || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, e) return e.indexOf("image://") === 0 ? (a.image = e.slice(8), j(a, r), new qr(n)) : gl(e.replace("path://", ""), n, r, "center")
}

function S1(e, t, r, n, a) {
    for (var i = 0, o = a[a.length - 1]; i < a.length; i++) {
        var s = a[i];
        if (Fd(e, t, r, n, s[0], s[1], o[0], o[1])) return !0;
        o = s
    }
}

function Fd(e, t, r, n, a, i, o, s) {
    var u = r - e,
        l = n - t,
        f = o - a,
        h = s - i,
        c = Ms(f, h, u, l);
    if (w1(c)) return !1;
    var v = e - a,
        d = t - i,
        y = Ms(v, d, u, l) / c;
    if (y < 0 || y > 1) return !1;
    var p = Ms(v, d, f, h) / c;
    return !(p < 0 || p > 1)
}

function Ms(e, t, r, n) {
    return e * n - r * t
}

function w1(e) {
    return e <= 1e-6 && e >= -1e-6
}

function Bd(e) {
    var t = e.itemTooltipOption,
        r = e.componentModel,
        n = e.itemName,
        a = U(t) ? {
            formatter: t
        } : t,
        i = r.mainType,
        o = r.componentIndex,
        s = {
            componentType: i,
            name: n,
            $vars: ["name"]
        };
    s[i + "Index"] = o;
    var u = e.formatterParamsExtra;
    u && A(lt(u), function (f) {
        Ur(s, f) || (s[f] = u[f], s.$vars.push(f))
    });
    var l = gt(e.el);
    l.componentMainType = i, l.componentIndex = o, l.tooltipConfig = {
        name: n,
        option: j({
            content: n,
            formatterParams: s
        }, a)
    }
}

function gh(e, t) {
    var r;
    e.isGroup && (r = t(e)), r || e.traverse(t)
}

function ml(e, t) {
    if (e)
        if (B(e))
            for (var r = 0; r < e.length; r++) gh(e[r], t);
        else gh(e, t)
}
me("circle", Mo);
me("ellipse", bd);
me("sector", Zr);
me("ring", cl);
me("polygon", Fa);
me("polyline", Kr);
me("rect", re);
me("line", In);
me("bezierCurve", Ad);
me("arc", dl);
const b1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Arc: dl,
    BezierCurve: Ad,
    BoundingRect: ot,
    Circle: Mo,
    CompoundPath: Q_,
    Ellipse: bd,
    Group: ye,
    Image: qr,
    IncrementalDisplayable: i1,
    Line: In,
    LinearGradient: j_,
    OrientedBoundingRect: Zi,
    Path: at,
    Point: W,
    Polygon: Fa,
    Polyline: Kr,
    RadialGradient: e1,
    Rect: re,
    Ring: cl,
    Sector: Zr,
    Text: hr,
    applyTransform: Nd,
    clipPointsByRect: y1,
    clipRectByRect: m1,
    createIcon: _1,
    extendPath: l1,
    extendShape: s1,
    getShapeClass: f1,
    getTransform: c1,
    groupTransition: g1,
    initProps: $t,
    isElementRemoved: ga,
    lineLineIntersect: Fd,
    linePolygonIntersect: S1,
    makeImage: Ed,
    makePath: gl,
    mergePath: Pu,
    registerShape: me,
    removeElement: Rd,
    removeElementWithFadeOut: Ki,
    resizePath: Od,
    setTooltipConfig: Bd,
    subPixelOptimize: v1,
    subPixelOptimizeLine: yl,
    subPixelOptimizeRect: h1,
    transformDirection: d1,
    traverseElements: ml,
    updateProps: ne
}, Symbol.toStringTag, {
    value: "Module"
}));
var xo = {};

function zd(e, t) {
    for (var r = 0; r < Ee.length; r++) {
        var n = Ee[r],
            a = t[n],
            i = e.ensureState(n);
        i.style = i.style || {}, i.style.text = a
    }
    var o = e.currentStates.slice();
    e.clearStates(!0), e.setStyle({
        text: t.normal
    }), e.useStates(o, !0)
}

function Ru(e, t, r) {
    var n = e.labelFetcher,
        a = e.labelDataIndex,
        i = e.labelDimIndex,
        o = t.normal,
        s;
    n && (s = n.getFormattedLabel(a, "normal", null, i, o && o.get("formatter"), r != null ? {
        interpolatedValue: r
    } : null)), s == null && (s = Q(e.defaultText) ? e.defaultText(a, e, r) : e.defaultText);
    for (var u = {
            normal: s
        }, l = 0; l < Ee.length; l++) {
        var f = Ee[l],
            h = t[f];
        u[f] = X(n ? n.getFormattedLabel(a, f, null, i, h && h.get("formatter")) : null, s)
    }
    return u
}

function _l(e, t, r, n) {
    r = r || xo;
    for (var a = e instanceof hr, i = !1, o = 0; o < Xi.length; o++) {
        var s = t[Xi[o]];
        if (s && s.getShallow("show")) {
            i = !0;
            break
        }
    }
    var u = a ? e : e.getTextContent();
    if (i) {
        a || (u || (u = new hr, e.setTextContent(u)), e.stateProxy && (u.stateProxy = e.stateProxy));
        var l = Ru(r, t),
            f = t.normal,
            h = !!f.getShallow("show"),
            c = to(f, n && n.normal, r, !1, !a);
        c.text = l.normal, a || e.setTextConfig(yh(f, r, !1));
        for (var o = 0; o < Ee.length; o++) {
            var v = Ee[o],
                s = t[v];
            if (s) {
                var d = u.ensureState(v),
                    y = !!X(s.getShallow("show"), h);
                if (y !== h && (d.ignore = !y), d.style = to(s, n && n[v], r, !0, !a), d.style.text = l[v], !a) {
                    var p = e.ensureState(v);
                    p.textConfig = yh(s, r, !0)
                }
            }
        }
        u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (Do(u).setLabelText = function (g) {
            var m = Ru(r, t, g);
            zd(u, m)
        })
    } else u && (u.ignore = !0);
    e.dirty()
}

function Sl(e, t) {
    t = t || "label";
    for (var r = {
            normal: e.getModel(t)
        }, n = 0; n < Ee.length; n++) {
        var a = Ee[n];
        r[a] = e.getModel([a, t])
    }
    return r
}

function to(e, t, r, n, a) {
    var i = {};
    return T1(i, e, r, n, a), t && O(i, t), i
}

function yh(e, t, r) {
    t = t || {};
    var n = {},
        a, i = e.getShallow("rotate"),
        o = X(e.getShallow("distance"), r ? null : 5),
        s = e.getShallow("offset");
    return a = e.getShallow("position") || (r ? null : "inside"), a === "outside" && (a = t.defaultOutsidePosition || "top"), a != null && (n.position = a), s != null && (n.offset = s), i != null && (i *= Math.PI / 180, n.rotation = i), o != null && (n.distance = o), n.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", n
}

function T1(e, t, r, n, a) {
    r = r || xo;
    var i = t.ecModel,
        o = i && i.option.textStyle,
        s = M1(t),
        u;
    if (s) {
        u = {};
        for (var l in s)
            if (s.hasOwnProperty(l)) {
                var f = t.getModel(["rich", l]);
                wh(u[l] = {}, f, o, r, n, a, !1, !0)
            }
    }
    u && (e.rich = u);
    var h = t.get("overflow");
    h && (e.overflow = h);
    var c = t.get("minMargin");
    c != null && (e.margin = c), wh(e, t, o, r, n, a, !0, !1)
}

function M1(e) {
    for (var t; e && e !== e.ecModel;) {
        var r = (e.option || xo).rich;
        if (r) {
            t = t || {};
            for (var n = lt(r), a = 0; a < n.length; a++) {
                var i = n[a];
                t[i] = 1
            }
        }
        e = e.parentModel
    }
    return t
}
var mh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
    _h = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"],
    Sh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];

function wh(e, t, r, n, a, i, o, s) {
    r = !a && r || xo;
    var u = n && n.inheritColor,
        l = t.getShallow("color"),
        f = t.getShallow("textBorderColor"),
        h = X(t.getShallow("opacity"), r.opacity);
    (l === "inherit" || l === "auto") && (u ? l = u : l = null), (f === "inherit" || f === "auto") && (u ? f = u : f = null), i || (l = l || r.color, f = f || r.textBorderColor), l != null && (e.fill = l), f != null && (e.stroke = f);
    var c = X(t.getShallow("textBorderWidth"), r.textBorderWidth);
    c != null && (e.lineWidth = c);
    var v = X(t.getShallow("textBorderType"), r.textBorderType);
    v != null && (e.lineDash = v);
    var d = X(t.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
    d != null && (e.lineDashOffset = d), !a && h == null && !s && (h = n && n.defaultOpacity), h != null && (e.opacity = h), !a && !i && e.fill == null && n.inheritColor && (e.fill = n.inheritColor);
    for (var y = 0; y < mh.length; y++) {
        var p = mh[y],
            g = X(t.getShallow(p), r[p]);
        g != null && (e[p] = g)
    }
    for (var y = 0; y < _h.length; y++) {
        var p = _h[y],
            g = t.getShallow(p);
        g != null && (e[p] = g)
    }
    if (e.verticalAlign == null) {
        var m = t.getShallow("baseline");
        m != null && (e.verticalAlign = m)
    }
    if (!o || !n.disableBox) {
        for (var y = 0; y < Sh.length; y++) {
            var p = Sh[y],
                g = t.getShallow(p);
            g != null && (e[p] = g)
        }
        var _ = t.getShallow("borderType");
        _ != null && (e.borderDash = _), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && u && (e.backgroundColor = u), (e.borderColor === "auto" || e.borderColor === "inherit") && u && (e.borderColor = u)
    }
}

function x1(e, t) {
    var r = t && t.getModel("textStyle");
    return Ve([e.fontStyle || r && r.getShallow("fontStyle") || "", e.fontWeight || r && r.getShallow("fontWeight") || "", (e.fontSize || r && r.getShallow("fontSize") || 12) + "px", e.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"].join(" "))
}
var Do = At();

function D1(e, t, r, n) {
    if (e) {
        var a = Do(e);
        a.prevValue = a.value, a.value = r;
        var i = t.normal;
        a.valueAnimation = i.get("valueAnimation"), a.valueAnimation && (a.precision = i.get("precision"), a.defaultInterpolatedText = n, a.statesModels = t)
    }
}

function mD(e, t, r, n, a) {
    var i = Do(e);
    if (!i.valueAnimation || i.prevValue === i.value) return;
    var o = i.defaultInterpolatedText,
        s = X(i.interpolatedValue, i.prevValue),
        u = i.value;

    function l(f) {
        var h = om(r, i.precision, s, u, f);
        i.interpolatedValue = f === 1 ? null : h;
        var c = Ru({
            labelDataIndex: t,
            labelFetcher: a,
            defaultText: o ? o(h) : h + ""
        }, i.statesModels, h);
        zd(e, c)
    }
    e.percent = 0, (i.prevValue == null ? $t : ne)(e, {
        percent: 1
    }, n, t, null, l)
}
var C1 = ["textStyle", "color"],
    xs = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"],
    Ds = new hr,
    A1 = function () {
        function e() {}
        return e.prototype.getTextColor = function (t) {
            var r = this.ecModel;
            return this.getShallow("color") || (!t && r ? r.get(C1) : null)
        }, e.prototype.getFont = function () {
            return x1({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        }, e.prototype.getTextRect = function (t) {
            for (var r = {
                    text: t,
                    verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
                }, n = 0; n < xs.length; n++) r[xs[n]] = this.getShallow(xs[n]);
            return Ds.useStyle(r), Ds.update(), Ds.getBoundingRect()
        }, e
    }();
const L1 = A1;
var Vd = [
        ["lineWidth", "width"],
        ["stroke", "color"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "type"],
        ["lineDashOffset", "dashOffset"],
        ["lineCap", "cap"],
        ["lineJoin", "join"],
        ["miterLimit"]
    ],
    I1 = xa(Vd),
    P1 = function () {
        function e() {}
        return e.prototype.getLineStyle = function (t) {
            return I1(this, t)
        }, e
    }(),
    Gd = [
        ["fill", "color"],
        ["stroke", "borderColor"],
        ["lineWidth", "borderWidth"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "borderType"],
        ["lineDashOffset", "borderDashOffset"],
        ["lineCap", "borderCap"],
        ["lineJoin", "borderJoin"],
        ["miterLimit", "borderMiterLimit"]
    ],
    R1 = xa(Gd),
    E1 = function () {
        function e() {}
        return e.prototype.getItemStyle = function (t, r) {
            return R1(this, t, r)
        }, e
    }(),
    Qr = function () {
        function e(t, r, n) {
            this.parentModel = r, this.ecModel = n, this.option = t
        }
        return e.prototype.init = function (t, r, n) {}, e.prototype.mergeOption = function (t, r) {
            ut(this.option, t, !0)
        }, e.prototype.get = function (t, r) {
            return t == null ? this.option : this._doGet(this.parsePath(t), !r && this.parentModel)
        }, e.prototype.getShallow = function (t, r) {
            var n = this.option,
                a = n == null ? n : n[t];
            if (a == null && !r) {
                var i = this.parentModel;
                i && (a = i.getShallow(t))
            }
            return a
        }, e.prototype.getModel = function (t, r) {
            var n = t != null,
                a = n ? this.parsePath(t) : null,
                i = n ? this._doGet(a) : this.option;
            return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(a)), new e(i, r, this.ecModel)
        }, e.prototype.isEmpty = function () {
            return this.option == null
        }, e.prototype.restoreData = function () {}, e.prototype.clone = function () {
            var t = this.constructor;
            return new t(J(this.option))
        }, e.prototype.parsePath = function (t) {
            return typeof t == "string" ? t.split(".") : t
        }, e.prototype.resolveParentPath = function (t) {
            return t
        }, e.prototype.isAnimationEnabled = function () {
            if (!et.node && this.option) {
                if (this.option.animation != null) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }, e.prototype._doGet = function (t, r) {
            var n = this.option;
            if (!t) return n;
            for (var a = 0; a < t.length && !(t[a] && (n = n && typeof n == "object" ? n[t[a]] : null, n == null)); a++);
            return n == null && r && (n = r._doGet(this.resolveParentPath(t), r.parentModel)), n
        }, e
    }();
sl(Qr);
vm(Qr);
ke(Qr, P1);
ke(Qr, E1);
ke(Qr, ym);
ke(Qr, L1);
const ge = Qr;
var k1 = Math.round(Math.random() * 10);

function Co(e) {
    return [e || "", k1++].join("_")
}

function O1(e) {
    var t = {};
    e.registerSubTypeDefaulter = function (r, n) {
        var a = Le(r);
        t[a.main] = n
    }, e.determineSubType = function (r, n) {
        var a = n.type;
        if (!a) {
            var i = Le(r).main;
            e.hasSubTypes(r) && t[i] && (a = t[i](n))
        }
        return a
    }
}

function N1(e, t) {
    e.topologicalTravel = function (i, o, s, u) {
        if (!i.length) return;
        var l = r(o),
            f = l.graph,
            h = l.noEntryList,
            c = {};
        for (A(i, function (m) {
                c[m] = !0
            }); h.length;) {
            var v = h.pop(),
                d = f[v],
                y = !!c[v];
            y && (s.call(u, v, d.originalDeps.slice()), delete c[v]), A(d.successor, y ? g : p)
        }
        A(c, function () {
            var m = "";
            throw new Error(m)
        });

        function p(m) {
            f[m].entryCount--, f[m].entryCount === 0 && h.push(m)
        }

        function g(m) {
            c[m] = !0, p(m)
        }
    };

    function r(i) {
        var o = {},
            s = [];
        return A(i, function (u) {
            var l = n(o, u),
                f = l.originalDeps = t(u),
                h = a(f, i);
            l.entryCount = h.length, l.entryCount === 0 && s.push(u), A(h, function (c) {
                ct(l.predecessor, c) < 0 && l.predecessor.push(c);
                var v = n(o, c);
                ct(v.successor, c) < 0 && v.successor.push(u)
            })
        }), {
            graph: o,
            noEntryList: s
        }
    }

    function n(i, o) {
        return i[o] || (i[o] = {
            predecessor: [],
            successor: []
        }), i[o]
    }

    function a(i, o) {
        var s = [];
        return A(i, function (u) {
            ct(o, u) >= 0 && s.push(u)
        }), s
    }
}

function F1(e, t) {
    return ut(ut({}, e, !0), t, !0)
}
const B1 = {
        time: {
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        legend: {
            selector: {
                all: "All",
                inverse: "Inv"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {
                title: "Data View",
                lang: ["Data View", "Close", "Refresh"]
            },
            dataZoom: {
                title: {
                    zoom: "Zoom",
                    back: "Zoom Reset"
                }
            },
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {
                title: "Restore"
            },
            saveAsImage: {
                title: "Save as Image",
                lang: ["Right Click to Save Image"]
            }
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Gauge",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst",
                custom: "Custom chart",
                chart: "Chart"
            }
        },
        aria: {
            general: {
                withTitle: 'This is a chart about "{title}"',
                withoutTitle: "This is a chart"
            },
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {
                        middle: "",
                        end: ""
                    }
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {
                    middle: ", ",
                    end: ". "
                }
            }
        }
    },
    z1 = {
        time: {
            month: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
            monthAbbr: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
            dayOfWeek: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"],
            dayOfWeekAbbr: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"]
        },
        legend: {
            selector: {
                all: "å…¨é€‰",
                inverse: "åé€‰"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "çŸ©å½¢é€‰æ‹©",
                    polygon: "åœˆé€‰",
                    lineX: "æ¨ªå‘é€‰æ‹©",
                    lineY: "çºµå‘é€‰æ‹©",
                    keep: "ä¿æŒé€‰æ‹©",
                    clear: "æ¸…é™¤é€‰æ‹©"
                }
            },
            dataView: {
                title: "æ•°æ®è§†å›¾",
                lang: ["æ•°æ®è§†å›¾", "å…³é—­", "åˆ·æ–°"]
            },
            dataZoom: {
                title: {
                    zoom: "åŒºåŸŸç¼©æ”¾",
                    back: "åŒºåŸŸç¼©æ”¾è¿˜åŽŸ"
                }
            },
            magicType: {
                title: {
                    line: "åˆ‡æ¢ä¸ºæŠ˜çº¿å›¾",
                    bar: "åˆ‡æ¢ä¸ºæŸ±çŠ¶å›¾",
                    stack: "åˆ‡æ¢ä¸ºå †å ",
                    tiled: "åˆ‡æ¢ä¸ºå¹³é“º"
                }
            },
            restore: {
                title: "è¿˜åŽŸ"
            },
            saveAsImage: {
                title: "ä¿å­˜ä¸ºå›¾ç‰‡",
                lang: ["å³é”®å¦å­˜ä¸ºå›¾ç‰‡"]
            }
        },
        series: {
            typeNames: {
                pie: "é¥¼å›¾",
                bar: "æŸ±çŠ¶å›¾",
                line: "æŠ˜çº¿å›¾",
                scatter: "æ•£ç‚¹å›¾",
                effectScatter: "æ¶Ÿæ¼ªæ•£ç‚¹å›¾",
                radar: "é›·è¾¾å›¾",
                tree: "æ ‘å›¾",
                treemap: "çŸ©å½¢æ ‘å›¾",
                boxplot: "ç®±åž‹å›¾",
                candlestick: "Kçº¿å›¾",
                k: "Kçº¿å›¾",
                heatmap: "çƒ­åŠ›å›¾",
                map: "åœ°å›¾",
                parallel: "å¹³è¡Œåæ ‡å›¾",
                lines: "çº¿å›¾",
                graph: "å…³ç³»å›¾",
                sankey: "æ¡‘åŸºå›¾",
                funnel: "æ¼æ–—å›¾",
                gauge: "ä»ªè¡¨ç›˜å›¾",
                pictorialBar: "è±¡å½¢æŸ±å›¾",
                themeRiver: "ä¸»é¢˜æ²³æµå›¾",
                sunburst: "æ—­æ—¥å›¾",
                custom: "è‡ªå®šä¹‰å›¾è¡¨",
                chart: "å›¾è¡¨"
            }
        },
        aria: {
            general: {
                withTitle: "è¿™æ˜¯ä¸€ä¸ªå…³äºŽâ€œ{title}â€çš„å›¾è¡¨ã€‚",
                withoutTitle: "è¿™æ˜¯ä¸€ä¸ªå›¾è¡¨ï¼Œ"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "å›¾è¡¨ç±»åž‹æ˜¯{seriesType}ï¼Œè¡¨ç¤º{seriesName}ã€‚",
                    withoutName: "å›¾è¡¨ç±»åž‹æ˜¯{seriesType}ã€‚"
                },
                multiple: {
                    prefix: "å®ƒç”±{seriesCount}ä¸ªå›¾è¡¨ç³»åˆ—ç»„æˆã€‚",
                    withName: "ç¬¬{seriesId}ä¸ªç³»åˆ—æ˜¯ä¸€ä¸ªè¡¨ç¤º{seriesName}çš„{seriesType}ï¼Œ",
                    withoutName: "ç¬¬{seriesId}ä¸ªç³»åˆ—æ˜¯ä¸€ä¸ª{seriesType}ï¼Œ",
                    separator: {
                        middle: "ï¼›",
                        end: "ã€‚"
                    }
                }
            },
            data: {
                allData: "å…¶æ•°æ®æ˜¯â€”â€”",
                partialData: "å…¶ä¸­ï¼Œå‰{displayCnt}é¡¹æ˜¯â€”â€”",
                withName: "{name}çš„æ•°æ®æ˜¯{value}",
                withoutName: "{value}",
                separator: {
                    middle: "ï¼Œ",
                    end: ""
                }
            }
        }
    };
var eo = "ZH",
    wl = "EN",
    Mn = wl,
    Ei = {},
    bl = {},
    Hd = et.domSupported ? function () {
        var e = (document.documentElement.lang || navigator.language || navigator.browserLanguage || Mn).toUpperCase();
        return e.indexOf(eo) > -1 ? eo : Mn
    }() : Mn;

function Wd(e, t) {
    e = e.toUpperCase(), bl[e] = new ge(t), Ei[e] = t
}

function V1(e) {
    if (U(e)) {
        var t = Ei[e.toUpperCase()] || {};
        return e === eo || e === wl ? J(t) : ut(J(t), J(Ei[Mn]), !1)
    } else return ut(J(e), J(Ei[Mn]), !1)
}

function G1(e) {
    return bl[e]
}

function H1() {
    return bl[Mn]
}
Wd(wl, B1);
Wd(eo, z1);
var Tl = 1e3,
    Ml = Tl * 60,
    ya = Ml * 60,
    te = ya * 24,
    bh = te * 365,
    oa = {
        year: "{yyyy}",
        month: "{MMM}",
        day: "{d}",
        hour: "{HH}:{mm}",
        minute: "{HH}:{mm}",
        second: "{HH}:{mm}:{ss}",
        millisecond: "{HH}:{mm}:{ss} {SSS}",
        none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
    },
    ni = "{yyyy}-{MM}-{dd}",
    Th = {
        year: "{yyyy}",
        month: "{yyyy}-{MM}",
        day: ni,
        hour: ni + " " + oa.hour,
        minute: ni + " " + oa.minute,
        second: ni + " " + oa.second,
        millisecond: oa.none
    },
    Cs = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    Ud = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];

function Ke(e, t) {
    return e += "", "0000".substr(0, t - e.length) + e
}

function xn(e) {
    switch (e) {
        case "half-year":
        case "quarter":
            return "month";
        case "week":
        case "half-week":
            return "day";
        case "half-day":
        case "quarter-day":
            return "hour";
        default:
            return e
    }
}

function W1(e) {
    return e === xn(e)
}

function U1(e) {
    switch (e) {
        case "year":
        case "month":
            return "day";
        case "millisecond":
            return "millisecond";
        default:
            return "second"
    }
}

function xl(e, t, r, n) {
    var a = We(e),
        i = a[Dl(r)](),
        o = a[Dn(r)]() + 1,
        s = Math.floor((o - 1) / 3) + 1,
        u = a[Ao(r)](),
        l = a["get" + (r ? "UTC" : "") + "Day"](),
        f = a[Da(r)](),
        h = (f - 1) % 12 + 1,
        c = a[Lo(r)](),
        v = a[Io(r)](),
        d = a[Po(r)](),
        y = n instanceof ge ? n : G1(n || Hd) || H1(),
        p = y.getModel("time"),
        g = p.get("month"),
        m = p.get("monthAbbr"),
        _ = p.get("dayOfWeek"),
        S = p.get("dayOfWeekAbbr");
    return (t || "").replace(/{yyyy}/g, i + "").replace(/{yy}/g, Ke(i % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, g[o - 1]).replace(/{MMM}/g, m[o - 1]).replace(/{MM}/g, Ke(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Ke(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, _[l]).replace(/{ee}/g, S[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Ke(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Ke(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Ke(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Ke(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Ke(d, 3)).replace(/{S}/g, d + "")
}

function Y1(e, t, r, n, a) {
    var i = null;
    if (U(r)) i = r;
    else if (Q(r)) i = r(e.value, t, {
        level: e.level
    });
    else {
        var o = O({}, oa);
        if (e.level > 0)
            for (var s = 0; s < Cs.length; ++s) o[Cs[s]] = "{primary|" + o[Cs[s]] + "}";
        var u = r ? r.inherit === !1 ? r : j(r, o) : o,
            l = Yd(e.value, a);
        if (u[l]) i = u[l];
        else if (u.inherit) {
            for (var f = Ud.indexOf(l), s = f - 1; s >= 0; --s)
                if (u[l]) {
                    i = u[l];
                    break
                } i = i || o.none
        }
        if (B(i)) {
            var h = e.level == null ? 0 : e.level >= 0 ? e.level : i.length + e.level;
            h = Math.min(h, i.length - 1), i = i[h]
        }
    }
    return xl(new Date(e.value), i, a, n)
}

function Yd(e, t) {
    var r = We(e),
        n = r[Dn(t)]() + 1,
        a = r[Ao(t)](),
        i = r[Da(t)](),
        o = r[Lo(t)](),
        s = r[Io(t)](),
        u = r[Po(t)](),
        l = u === 0,
        f = l && s === 0,
        h = f && o === 0,
        c = h && i === 0,
        v = c && a === 1,
        d = v && n === 1;
    return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond"
}

function Mh(e, t, r) {
    var n = it(e) ? We(e) : e;
    switch (t = t || Yd(e, r), t) {
        case "year":
            return n[Dl(r)]();
        case "half-year":
            return n[Dn(r)]() >= 6 ? 1 : 0;
        case "quarter":
            return Math.floor((n[Dn(r)]() + 1) / 4);
        case "month":
            return n[Dn(r)]();
        case "day":
            return n[Ao(r)]();
        case "half-day":
            return n[Da(r)]() / 24;
        case "hour":
            return n[Da(r)]();
        case "minute":
            return n[Lo(r)]();
        case "second":
            return n[Io(r)]();
        case "millisecond":
            return n[Po(r)]()
    }
}

function Dl(e) {
    return e ? "getUTCFullYear" : "getFullYear"
}

function Dn(e) {
    return e ? "getUTCMonth" : "getMonth"
}

function Ao(e) {
    return e ? "getUTCDate" : "getDate"
}

function Da(e) {
    return e ? "getUTCHours" : "getHours"
}

function Lo(e) {
    return e ? "getUTCMinutes" : "getMinutes"
}

function Io(e) {
    return e ? "getUTCSeconds" : "getSeconds"
}

function Po(e) {
    return e ? "getUTCMilliseconds" : "getMilliseconds"
}

function $1(e) {
    return e ? "setUTCFullYear" : "setFullYear"
}

function $d(e) {
    return e ? "setUTCMonth" : "setMonth"
}

function Xd(e) {
    return e ? "setUTCDate" : "setDate"
}

function qd(e) {
    return e ? "setUTCHours" : "setHours"
}

function Zd(e) {
    return e ? "setUTCMinutes" : "setMinutes"
}

function Kd(e) {
    return e ? "setUTCSeconds" : "setSeconds"
}

function Qd(e) {
    return e ? "setUTCMilliseconds" : "setMilliseconds"
}

function Jd(e) {
    if (!Uy(e)) return U(e) ? e : "-";
    var t = (e + "").split(".");
    return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
}

function _D(e, t) {
    return e = (e || "").toLowerCase().replace(/-(.)/g, function (r, n) {
        return n.toUpperCase()
    }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e
}
var jd = oc;

function Eu(e, t, r) {
    var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";

    function a(f) {
        return f && Ve(f) ? f : "-"
    }

    function i(f) {
        return !!(f != null && !isNaN(f) && isFinite(f))
    }
    var o = t === "time",
        s = e instanceof Date;
    if (o || s) {
        var u = o ? We(e) : e;
        if (isNaN(+u)) {
            if (s) return "-"
        } else return xl(u, n, r)
    }
    if (t === "ordinal") return js(e) ? a(e) : it(e) && i(e) ? e + "" : "-";
    var l = fr(e);
    return i(l) ? Jd(l) : js(e) ? a(e) : typeof e == "boolean" ? e + "" : "-"
}
var xh = ["a", "b", "c", "d", "e", "f", "g"],
    As = function (e, t) {
        return "{" + e + (t ? ? "") + "}"
    };

function X1(e, t, r) {
    B(t) || (t = [t]);
    var n = t.length;
    if (!n) return "";
    for (var a = t[0].$vars || [], i = 0; i < a.length; i++) {
        var o = xh[i];
        e = e.replace(As(o), As(o, 0))
    }
    for (var s = 0; s < n; s++)
        for (var u = 0; u < a.length; u++) {
            var l = t[s][a[u]];
            e = e.replace(As(xh[u], s), r ? Ut(l) : l)
        }
    return e
}

function SD(e, t, r) {
    return A(t, function (n, a) {
        e = e.replace("{" + a + "}", r ? Ut(n) : n)
    }), e
}

function q1(e, t) {
    var r = U(e) ? {
            color: e,
            extraCssText: t
        } : e || {},
        n = r.color,
        a = r.type;
    t = r.extraCssText;
    var i = r.renderMode || "html";
    if (!n) return "";
    if (i === "html") return a === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ut(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Ut(n) + ";" + (t || "") + '"></span>';
    var o = r.markerId || "markerX";
    return {
        renderMode: i,
        content: "{" + o + "|}  ",
        style: a === "subItem" ? {
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: n
        } : {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: n
        }
    }
}

function Z1(e, t) {
    return t = t || "transparent", U(e) ? e : Y(e) && e.colorStops && (e.colorStops[0] || {}).color || t
}

function wD(e, t) {
    if (t === "_blank" || t === "blank") {
        var r = window.open();
        r.opener = null, r.location.href = e
    } else window.open(e, t)
}
var ki = A,
    K1 = ["left", "right", "top", "bottom", "width", "height"],
    Fr = [
        ["width", "left", "right"],
        ["height", "top", "bottom"]
    ];

function Cl(e, t, r, n, a) {
    var i = 0,
        o = 0;
    n == null && (n = 1 / 0), a == null && (a = 1 / 0);
    var s = 0;
    t.eachChild(function (u, l) {
        var f = u.getBoundingRect(),
            h = t.childAt(l + 1),
            c = h && h.getBoundingRect(),
            v, d;
        if (e === "horizontal") {
            var y = f.width + (c ? -c.x + f.x : 0);
            v = i + y, v > n || u.newline ? (i = 0, v = y, o += s + r, s = f.height) : s = Math.max(s, f.height)
        } else {
            var p = f.height + (c ? -c.y + f.y : 0);
            d = o + p, d > a || u.newline ? (i += s + r, o = 0, d = p, s = f.width) : s = Math.max(s, f.width)
        }
        u.newline || (u.x = i, u.y = o, u.markRedraw(), e === "horizontal" ? i = v + r : o = d + r)
    })
}
var bD = Cl;
Xr(Cl, "vertical");
Xr(Cl, "horizontal");

function TD(e, t, r) {
    var n = t.width,
        a = t.height,
        i = rt(e.left, n),
        o = rt(e.top, a),
        s = rt(e.right, n),
        u = rt(e.bottom, a);
    return (isNaN(i) || isNaN(parseFloat(e.left))) && (i = 0), (isNaN(s) || isNaN(parseFloat(e.right))) && (s = n), (isNaN(o) || isNaN(parseFloat(e.top))) && (o = 0), (isNaN(u) || isNaN(parseFloat(e.bottom))) && (u = a), r = jd(r || 0), {
        width: Math.max(s - i - r[1] - r[3], 0),
        height: Math.max(u - o - r[0] - r[2], 0)
    }
}

function tp(e, t, r) {
    r = jd(r || 0);
    var n = t.width,
        a = t.height,
        i = rt(e.left, n),
        o = rt(e.top, a),
        s = rt(e.right, n),
        u = rt(e.bottom, a),
        l = rt(e.width, n),
        f = rt(e.height, a),
        h = r[2] + r[0],
        c = r[1] + r[3],
        v = e.aspect;
    switch (isNaN(l) && (l = n - s - c - i), isNaN(f) && (f = a - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > n / a ? l = n * .8 : f = a * .8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(i) && (i = n - s - l - c), isNaN(o) && (o = a - u - f - h), e.left || e.right) {
        case "center":
            i = n / 2 - l / 2 - r[3];
            break;
        case "right":
            i = n - l - c;
            break
    }
    switch (e.top || e.bottom) {
        case "middle":
        case "center":
            o = a / 2 - f / 2 - r[0];
            break;
        case "bottom":
            o = a - f - h;
            break
    }
    i = i || 0, o = o || 0, isNaN(l) && (l = n - c - i - (s || 0)), isNaN(f) && (f = a - h - o - (u || 0));
    var d = new ot(i + r[3], o + r[0], l, f);
    return d.margin = r, d
}

function MD(e, t, r, n, a, i) {
    var o = !a || !a.hv || a.hv[0],
        s = !a || !a.hv || a.hv[1],
        u = a && a.boundingMode || "all";
    if (i = i || e, i.x = e.x, i.y = e.y, !o && !s) return !1;
    var l;
    if (u === "raw") l = e.type === "group" ? new ot(0, 0, +t.width || 0, +t.height || 0) : e.getBoundingRect();
    else if (l = e.getBoundingRect(), e.needLocalTransform()) {
        var f = e.getLocalTransform();
        l = l.clone(), l.applyTransform(f)
    }
    var h = tp(j({
            width: l.width,
            height: l.height
        }, t), r, n),
        c = o ? h.x - l.x : 0,
        v = s ? h.y - l.y : 0;
    return u === "raw" ? (i.x = c, i.y = v) : (i.x += c, i.y += v), i === e && e.markRedraw(), !0
}

function xD(e, t) {
    return e[Fr[t][0]] != null || e[Fr[t][1]] != null && e[Fr[t][2]] != null
}

function ro(e) {
    var t = e.layoutMode || e.constructor.layoutMode;
    return Y(t) ? t : t ? {
        type: t
    } : null
}

function no(e, t, r) {
    var n = r && r.ignoreSize;
    !B(n) && (n = [n, n]);
    var a = o(Fr[0], 0),
        i = o(Fr[1], 1);
    l(Fr[0], e, a), l(Fr[1], e, i);

    function o(f, h) {
        var c = {},
            v = 0,
            d = {},
            y = 0,
            p = 2;
        if (ki(f, function (_) {
                d[_] = e[_]
            }), ki(f, function (_) {
                s(t, _) && (c[_] = d[_] = t[_]), u(c, _) && v++, u(d, _) && y++
            }), n[h]) return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
        if (y === p || !v) return d;
        if (v >= p) return c;
        for (var g = 0; g < f.length; g++) {
            var m = f[g];
            if (!s(c, m) && s(e, m)) {
                c[m] = e[m];
                break
            }
        }
        return c
    }

    function s(f, h) {
        return f.hasOwnProperty(h)
    }

    function u(f, h) {
        return f[h] != null && f[h] !== "auto"
    }

    function l(f, h, c) {
        ki(f, function (v) {
            h[v] = c[v]
        })
    }
}

function ep(e) {
    return Q1({}, e)
}

function Q1(e, t) {
    return t && e && ki(K1, function (r) {
        t.hasOwnProperty(r) && (e[r] = t[r])
    }), e
}
var J1 = At(),
    Pn = function (e) {
        G(t, e);

        function t(r, n, a) {
            var i = e.call(this, r, n, a) || this;
            return i.uid = Co("ec_cpt_model"), i
        }
        return t.prototype.init = function (r, n, a) {
            this.mergeDefaultAndTheme(r, a)
        }, t.prototype.mergeDefaultAndTheme = function (r, n) {
            var a = ro(this),
                i = a ? ep(r) : {},
                o = n.getTheme();
            ut(r, o.get(this.mainType)), ut(r, this.getDefaultOption()), a && no(r, i, a)
        }, t.prototype.mergeOption = function (r, n) {
            ut(this.option, r, !0);
            var a = ro(this);
            a && no(this.option, r, a)
        }, t.prototype.optionUpdated = function (r, n) {}, t.prototype.getDefaultOption = function () {
            var r = this.constructor;
            if (!lm(r)) return r.defaultOption;
            var n = J1(this);
            if (!n.defaultOption) {
                for (var a = [], i = r; i;) {
                    var o = i.prototype.defaultOption;
                    o && a.push(o), i = i.superClass
                }
                for (var s = {}, u = a.length - 1; u >= 0; u--) s = ut(s, a[u], !0);
                n.defaultOption = s
            }
            return n.defaultOption
        }, t.prototype.getReferringComponents = function (r, n) {
            var a = r + "Index",
                i = r + "Id";
            return yo(this.ecModel, r, {
                index: this.get(a, !0),
                id: this.get(i, !0)
            }, n)
        }, t.prototype.getBoxLayoutParams = function () {
            var r = this;
            return {
                left: r.get("left"),
                top: r.get("top"),
                right: r.get("right"),
                bottom: r.get("bottom"),
                width: r.get("width"),
                height: r.get("height")
            }
        }, t.prototype.getZLevelKey = function () {
            return ""
        }, t.prototype.setZLevel = function (r) {
            this.option.zlevel = r
        }, t.protoInitialize = function () {
            var r = t.prototype;
            r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0
        }(), t
    }(ge);
$c(Pn, ge);
mo(Pn);
O1(Pn);
N1(Pn, j1);

function j1(e) {
    var t = [];
    return A(Pn.getClassesByMainType(e), function (r) {
        t = t.concat(r.dependencies || r.prototype.dependencies || [])
    }), t = V(t, function (r) {
        return Le(r).main
    }), e !== "dataset" && ct(t, "dataset") <= 0 && t.unshift("dataset"), t
}
const pt = Pn;
var rp = "";
typeof navigator < "u" && (rp = navigator.platform || "");
var ln = "rgba(0, 0, 0, 0.2)";
const tS = {
    darkMode: "auto",
    colorBy: "series",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
        decal: {
            decals: [{
                color: ln,
                dashArrayX: [1, 0],
                dashArrayY: [2, 5],
                symbolSize: 1,
                rotation: Math.PI / 6
            }, {
                color: ln,
                symbol: "circle",
                dashArrayX: [
                    [8, 8],
                    [0, 8, 8, 0]
                ],
                dashArrayY: [6, 0],
                symbolSize: .8
            }, {
                color: ln,
                dashArrayX: [1, 0],
                dashArrayY: [4, 3],
                rotation: -Math.PI / 4
            }, {
                color: ln,
                dashArrayX: [
                    [6, 6],
                    [0, 6, 6, 0]
                ],
                dashArrayY: [6, 0]
            }, {
                color: ln,
                dashArrayX: [
                    [1, 0],
                    [1, 6]
                ],
                dashArrayY: [1, 0, 6, 0],
                rotation: Math.PI / 4
            }, {
                color: ln,
                symbol: "triangle",
                dashArrayX: [
                    [9, 9],
                    [0, 9, 9, 0]
                ],
                dashArrayY: [7, 2],
                symbolSize: .75
            }]
        }
    },
    textStyle: {
        fontFamily: rp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
    },
    blendMode: null,
    stateAnimation: {
        duration: 300,
        easing: "cubicOut"
    },
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut",
    animationEasingUpdate: "cubicInOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
};
var np = K(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]),
    ae = "original",
    Vt = "arrayRows",
    _e = "objectRows",
    Oe = "keyedColumns",
    or = "typedArray",
    ap = "unknown",
    He = "column",
    Rn = "row",
    wt = {
        Must: 1,
        Might: 2,
        Not: 3
    },
    ip = At();

function eS(e) {
    ip(e).datasetMap = K()
}

function rS(e, t, r) {
    var n = {},
        a = Al(t);
    if (!a || !e) return n;
    var i = [],
        o = [],
        s = t.ecModel,
        u = ip(s).datasetMap,
        l = a.uid + "_" + r.seriesLayoutBy,
        f, h;
    e = e.slice(), A(e, function (y, p) {
        var g = Y(y) ? y : e[p] = {
            name: y
        };
        g.type === "ordinal" && f == null && (f = p, h = d(g)), n[g.name] = []
    });
    var c = u.get(l) || u.set(l, {
        categoryWayDim: h,
        valueWayDim: 0
    });
    A(e, function (y, p) {
        var g = y.name,
            m = d(y);
        if (f == null) {
            var _ = c.valueWayDim;
            v(n[g], _, m), v(o, _, m), c.valueWayDim += m
        } else if (f === p) v(n[g], 0, m), v(i, 0, m);
        else {
            var _ = c.categoryWayDim;
            v(n[g], _, m), v(o, _, m), c.categoryWayDim += m
        }
    });

    function v(y, p, g) {
        for (var m = 0; m < g; m++) y.push(p + m)
    }

    function d(y) {
        var p = y.dimsDef;
        return p ? p.length : 1
    }
    return i.length && (n.itemName = i), o.length && (n.seriesName = o), n
}

function nS(e, t, r) {
    var n = {},
        a = Al(e);
    if (!a) return n;
    var i = t.sourceFormat,
        o = t.dimensionsDefine,
        s;
    (i === _e || i === Oe) && A(o, function (f, h) {
        (Y(f) ? f.name : f) === "name" && (s = h)
    });
    var u = function () {
        for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, r); v < d; v++) {
            var y = sp(t.data, i, t.seriesLayoutBy, o, t.startIndex, v);
            c.push(y);
            var p = y === wt.Not;
            if (p && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !p && c[f.n] === wt.Not) && (f.n = v), g(f) && c[f.n] !== wt.Not) return f;
            p || (y === wt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v))
        }

        function g(m) {
            return m.v != null && m.n != null
        }
        return g(f) ? f : g(h) ? h : null
    }();
    if (u) {
        n.value = [u.v];
        var l = s ? ? u.n;
        n.itemName = [l], n.seriesName = [l]
    }
    return n
}

function Al(e) {
    var t = e.get("data", !0);
    if (!t) return yo(e.ecModel, "dataset", {
        index: e.get("datasetIndex", !0),
        id: e.get("datasetId", !0)
    }, Or).models[0]
}

function aS(e) {
    return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : yo(e.ecModel, "dataset", {
        index: e.get("fromDatasetIndex", !0),
        id: e.get("fromDatasetId", !0)
    }, Or).models
}

function op(e, t) {
    return sp(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t)
}

function sp(e, t, r, n, a, i) {
    var o, s = 5;
    if (zt(e)) return wt.Not;
    var u, l;
    if (n) {
        var f = n[i];
        Y(f) ? (u = f.name, l = f.type) : U(f) && (u = f)
    }
    if (l != null) return l === "ordinal" ? wt.Must : wt.Not;
    if (t === Vt) {
        var h = e;
        if (r === Rn) {
            for (var c = h[i], v = 0; v < (c || []).length && v < s; v++)
                if ((o = S(c[a + v])) != null) return o
        } else
            for (var v = 0; v < h.length && v < s; v++) {
                var d = h[a + v];
                if (d && (o = S(d[i])) != null) return o
            }
    } else if (t === _e) {
        var y = e;
        if (!u) return wt.Not;
        for (var v = 0; v < y.length && v < s; v++) {
            var p = y[v];
            if (p && (o = S(p[u])) != null) return o
        }
    } else if (t === Oe) {
        var g = e;
        if (!u) return wt.Not;
        var c = g[u];
        if (!c || zt(c)) return wt.Not;
        for (var v = 0; v < c.length && v < s; v++)
            if ((o = S(c[v])) != null) return o
    } else if (t === ae)
        for (var m = e, v = 0; v < m.length && v < s; v++) {
            var p = m[v],
                _ = Oa(p);
            if (!B(_)) return wt.Not;
            if ((o = S(_[i])) != null) return o
        }

    function S(b) {
        var w = U(b);
        if (b != null && isFinite(b) && b !== "") return w ? wt.Might : wt.Not;
        if (w && b !== "-") return wt.Must
    }
    return wt.Not
}
var ku = K();

function DD(e, t) {
    Re(ku.get(e) == null && t), ku.set(e, t)
}

function iS(e, t, r) {
    var n = ku.get(t);
    if (!n) return r;
    var a = n(e);
    return a ? r.concat(a) : r
}
var Dh = At(),
    oS = At(),
    Ll = function () {
        function e() {}
        return e.prototype.getColorFromPalette = function (t, r, n) {
            var a = Tt(this.get("color", !0)),
                i = this.get("colorLayer", !0);
            return up(this, Dh, a, i, t, r, n)
        }, e.prototype.clearColorPalette = function () {
            uS(this, Dh)
        }, e
    }();

function CD(e, t, r, n) {
    var a = Tt(e.get(["aria", "decal", "decals"]));
    return up(e, oS, a, null, t, r, n)
}

function sS(e, t) {
    for (var r = e.length, n = 0; n < r; n++)
        if (e[n].length > t) return e[n];
    return e[r - 1]
}

function up(e, t, r, n, a, i, o) {
    i = i || e;
    var s = t(i),
        u = s.paletteIdx || 0,
        l = s.paletteNameMap = s.paletteNameMap || {};
    if (l.hasOwnProperty(a)) return l[a];
    var f = o == null || !n ? r : sS(n, o);
    if (f = f || r, !(!f || !f.length)) {
        var h = f[u];
        return a && (l[a] = h), s.paletteIdx = (u + 1) % f.length, h
    }
}

function uS(e, t) {
    t(e).paletteIdx = 0, t(e).paletteNameMap = {}
}
var ai, Un, Ch, Ah = "\0_ec_inner",
    lS = 1,
    Il = function (e) {
        G(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.init = function (r, n, a, i, o, s) {
            i = i || {}, this.option = null, this._theme = new ge(i), this._locale = new ge(o), this._optionManager = s
        }, t.prototype.setOption = function (r, n, a) {
            var i = Ph(n);
            this._optionManager.setOption(r, a, i), this._resetOption(null, i)
        }, t.prototype.resetOption = function (r, n) {
            return this._resetOption(r, Ph(n))
        }, t.prototype._resetOption = function (r, n) {
            var a = !1,
                i = this._optionManager;
            if (!r || r === "recreate") {
                var o = i.mountOption(r === "recreate");
                !this.option || r === "recreate" ? Ch(this, o) : (this.restoreData(), this._mergeOption(o, n)), a = !0
            }
            if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
                var s = i.getTimelineOption(this);
                s && (a = !0, this._mergeOption(s, n))
            }
            if (!r || r === "recreate" || r === "media") {
                var u = i.getMediaOption(this);
                u.length && A(u, function (l) {
                    a = !0, this._mergeOption(l, n)
                }, this)
            }
            return a
        }, t.prototype.mergeOption = function (r) {
            this._mergeOption(r, null)
        }, t.prototype._mergeOption = function (r, n) {
            var a = this.option,
                i = this._componentsMap,
                o = this._componentsCount,
                s = [],
                u = K(),
                l = n && n.replaceMergeMainTypeMap;
            eS(this), A(r, function (h, c) {
                h != null && (pt.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : a[c] = a[c] == null ? J(h) : ut(a[c], h, !0))
            }), l && l.each(function (h, c) {
                pt.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0))
            }), pt.topologicalTravel(s, pt.getAllClassMainTypes(), f, this);

            function f(h) {
                var c = iS(this, h, Tt(r[h])),
                    v = i.get(h),
                    d = v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll",
                    y = Zy(v, c, d);
                rm(y, h, pt), a[h] = null, i.set(h, null), o.set(h, 0);
                var p = [],
                    g = [],
                    m = 0,
                    _;
                A(y, function (S, b) {
                    var w = S.existing,
                        x = S.newOption;
                    if (!x) w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
                    else {
                        var T = h === "series",
                            D = pt.getClass(h, S.keyInfo.subType, !T);
                        if (!D) return;
                        if (h === "tooltip") {
                            if (_) return;
                            _ = !0
                        }
                        if (w && w.constructor === D) w.name = S.keyInfo.name, w.mergeOption(x, this), w.optionUpdated(x, !1);
                        else {
                            var C = O({
                                componentIndex: b
                            }, S.keyInfo);
                            w = new D(x, this, this, C), O(w, C), S.brandNew && (w.__requireNewView = !0), w.init(x, this, this), w.optionUpdated(null, !0)
                        }
                    }
                    w ? (p.push(w.option), g.push(w), m++) : (p.push(void 0), g.push(void 0))
                }, this), a[h] = p, i.set(h, g), o.set(h, m), h === "series" && ai(this)
            }
            this._seriesIndices || ai(this)
        }, t.prototype.getOption = function () {
            var r = J(this.option);
            return A(r, function (n, a) {
                if (pt.hasClass(a)) {
                    for (var i = Tt(n), o = i.length, s = !1, u = o - 1; u >= 0; u--) i[u] && !Ma(i[u]) ? s = !0 : (i[u] = null, !s && o--);
                    i.length = o, r[a] = i
                }
            }), delete r[Ah], r
        }, t.prototype.getTheme = function () {
            return this._theme
        }, t.prototype.getLocaleModel = function () {
            return this._locale
        }, t.prototype.setUpdatePayload = function (r) {
            this._payload = r
        }, t.prototype.getUpdatePayload = function () {
            return this._payload
        }, t.prototype.getComponent = function (r, n) {
            var a = this._componentsMap.get(r);
            if (a) {
                var i = a[n || 0];
                if (i) return i;
                if (n == null) {
                    for (var o = 0; o < a.length; o++)
                        if (a[o]) return a[o]
                }
            }
        }, t.prototype.queryComponents = function (r) {
            var n = r.mainType;
            if (!n) return [];
            var a = r.index,
                i = r.id,
                o = r.name,
                s = this._componentsMap.get(n);
            if (!s || !s.length) return [];
            var u;
            return a != null ? (u = [], A(Tt(a), function (l) {
                s[l] && u.push(s[l])
            })) : i != null ? u = Lh("id", i, s) : o != null ? u = Lh("name", o, s) : u = Wt(s, function (l) {
                return !!l
            }), Ih(u, r)
        }, t.prototype.findComponents = function (r) {
            var n = r.query,
                a = r.mainType,
                i = s(n),
                o = i ? this.queryComponents(i) : Wt(this._componentsMap.get(a), function (l) {
                    return !!l
                });
            return u(Ih(o, r));

            function s(l) {
                var f = a + "Index",
                    h = a + "Id",
                    c = a + "Name";
                return l && (l[f] != null || l[h] != null || l[c] != null) ? {
                    mainType: a,
                    index: l[f],
                    id: l[h],
                    name: l[c]
                } : null
            }

            function u(l) {
                return r.filter ? Wt(l, r.filter) : l
            }
        }, t.prototype.eachComponent = function (r, n, a) {
            var i = this._componentsMap;
            if (Q(r)) {
                var o = n,
                    s = r;
                i.each(function (h, c) {
                    for (var v = 0; h && v < h.length; v++) {
                        var d = h[v];
                        d && s.call(o, c, d, d.componentIndex)
                    }
                })
            } else
                for (var u = U(r) ? i.get(r) : Y(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
                    var f = u[l];
                    f && n.call(a, f, f.componentIndex)
                }
        }, t.prototype.getSeriesByName = function (r) {
            var n = pe(r, null);
            return Wt(this._componentsMap.get("series"), function (a) {
                return !!a && n != null && a.name === n
            })
        }, t.prototype.getSeriesByIndex = function (r) {
            return this._componentsMap.get("series")[r]
        }, t.prototype.getSeriesByType = function (r) {
            return Wt(this._componentsMap.get("series"), function (n) {
                return !!n && n.subType === r
            })
        }, t.prototype.getSeries = function () {
            return Wt(this._componentsMap.get("series"), function (r) {
                return !!r
            })
        }, t.prototype.getSeriesCount = function () {
            return this._componentsCount.get("series")
        }, t.prototype.eachSeries = function (r, n) {
            Un(this), A(this._seriesIndices, function (a) {
                var i = this._componentsMap.get("series")[a];
                r.call(n, i, a)
            }, this)
        }, t.prototype.eachRawSeries = function (r, n) {
            A(this._componentsMap.get("series"), function (a) {
                a && r.call(n, a, a.componentIndex)
            })
        }, t.prototype.eachSeriesByType = function (r, n, a) {
            Un(this), A(this._seriesIndices, function (i) {
                var o = this._componentsMap.get("series")[i];
                o.subType === r && n.call(a, o, i)
            }, this)
        }, t.prototype.eachRawSeriesByType = function (r, n, a) {
            return A(this.getSeriesByType(r), n, a)
        }, t.prototype.isSeriesFiltered = function (r) {
            return Un(this), this._seriesIndicesMap.get(r.componentIndex) == null
        }, t.prototype.getCurrentSeriesIndices = function () {
            return (this._seriesIndices || []).slice()
        }, t.prototype.filterSeries = function (r, n) {
            Un(this);
            var a = [];
            A(this._seriesIndices, function (i) {
                var o = this._componentsMap.get("series")[i];
                r.call(n, o, i) && a.push(i)
            }, this), this._seriesIndices = a, this._seriesIndicesMap = K(a)
        }, t.prototype.restoreData = function (r) {
            ai(this);
            var n = this._componentsMap,
                a = [];
            n.each(function (i, o) {
                pt.hasClass(o) && a.push(o)
            }), pt.topologicalTravel(a, pt.getAllClassMainTypes(), function (i) {
                A(n.get(i), function (o) {
                    o && (i !== "series" || !fS(o, r)) && o.restoreData()
                })
            })
        }, t.internalField = function () {
            ai = function (r) {
                var n = r._seriesIndices = [];
                A(r._componentsMap.get("series"), function (a) {
                    a && n.push(a.componentIndex)
                }), r._seriesIndicesMap = K(n)
            }, Un = function (r) {}, Ch = function (r, n) {
                r.option = {}, r.option[Ah] = lS, r._componentsMap = K({
                    series: []
                }), r._componentsCount = K();
                var a = n.aria;
                Y(a) && a.enabled == null && (a.enabled = !0), hS(n, r._theme.option), ut(n, tS, !1), r._mergeOption(n, null)
            }
        }(), t
    }(ge);

function fS(e, t) {
    if (t) {
        var r = t.seriesIndex,
            n = t.seriesId,
            a = t.seriesName;
        return r != null && e.componentIndex !== r || n != null && e.id !== n || a != null && e.name !== a
    }
}

function hS(e, t) {
    var r = e.color && !e.colorLayer;
    A(t, function (n, a) {
        a === "colorLayer" && r || pt.hasClass(a) || (typeof n == "object" ? e[a] = e[a] ? ut(e[a], n, !1) : J(n) : e[a] == null && (e[a] = n))
    })
}

function Lh(e, t, r) {
    if (B(t)) {
        var n = K();
        return A(t, function (i) {
            if (i != null) {
                var o = pe(i, null);
                o != null && n.set(i, !0)
            }
        }), Wt(r, function (i) {
            return i && n.get(i[e])
        })
    } else {
        var a = pe(t, null);
        return Wt(r, function (i) {
            return i && a != null && i[e] === a
        })
    }
}

function Ih(e, t) {
    return t.hasOwnProperty("subType") ? Wt(e, function (r) {
        return r && r.subType === t.subType
    }) : e
}

function Ph(e) {
    var t = K();
    return e && A(Tt(e.replaceMerge), function (r) {
        t.set(r, !0)
    }), {
        replaceMergeMainTypeMap: t
    }
}
ke(Il, Ll);
var vS = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
    cS = function () {
        function e(t) {
            A(vS, function (r) {
                this[r] = _t(t[r], t)
            }, this)
        }
        return e
    }();
const lp = cS;
var Ls = {},
    Pl = function () {
        function e() {
            this._coordinateSystems = []
        }
        return e.prototype.create = function (t, r) {
            var n = [];
            A(Ls, function (a, i) {
                var o = a.create(t, r);
                n = n.concat(o || [])
            }), this._coordinateSystems = n
        }, e.prototype.update = function (t, r) {
            A(this._coordinateSystems, function (n) {
                n.update && n.update(t, r)
            })
        }, e.prototype.getCoordinateSystems = function () {
            return this._coordinateSystems.slice()
        }, e.register = function (t, r) {
            Ls[t] = r
        }, e.get = function (t) {
            return Ls[t]
        }, e
    }(),
    dS = /^(min|max)?(.+)$/,
    pS = function () {
        function e(t) {
            this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
        }
        return e.prototype.setOption = function (t, r, n) {
            t && (A(Tt(t.series), function (o) {
                o && o.data && zt(o.data) && zi(o.data)
            }), A(Tt(t.dataset), function (o) {
                o && o.source && zt(o.source) && zi(o.source)
            })), t = J(t);
            var a = this._optionBackup,
                i = gS(t, r, !a);
            this._newBaseOption = i.baseOption, a ? (i.timelineOptions.length && (a.timelineOptions = i.timelineOptions), i.mediaList.length && (a.mediaList = i.mediaList), i.mediaDefault && (a.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, e.prototype.mountOption = function (t) {
            var r = this._optionBackup;
            return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], J(t ? r.baseOption : this._newBaseOption)
        }, e.prototype.getTimelineOption = function (t) {
            var r, n = this._timelineOptions;
            if (n.length) {
                var a = t.getComponent("timeline");
                a && (r = J(n[a.getCurrentIndex()]))
            }
            return r
        }, e.prototype.getMediaOption = function (t) {
            var r = this._api.getWidth(),
                n = this._api.getHeight(),
                a = this._mediaList,
                i = this._mediaDefault,
                o = [],
                s = [];
            if (!a.length && !i) return s;
            for (var u = 0, l = a.length; u < l; u++) yS(a[u].query, r, n) && o.push(u);
            return !o.length && i && (o = [-1]), o.length && !_S(o, this._currentMediaIndices) && (s = V(o, function (f) {
                return J(f === -1 ? i.option : a[f].option)
            })), this._currentMediaIndices = o, s
        }, e
    }();

function gS(e, t, r) {
    var n = [],
        a, i, o = e.baseOption,
        s = e.timeline,
        u = e.options,
        l = e.media,
        f = !!e.media,
        h = !!(u || s || o && o.timeline);
    o ? (i = o, i.timeline || (i.timeline = s)) : ((h || f) && (e.options = e.media = null), i = e), f && B(l) && A(l, function (v) {
        v && v.option && (v.query ? n.push(v) : a || (a = v))
    }), c(i), A(u, function (v) {
        return c(v)
    }), A(n, function (v) {
        return c(v.option)
    });

    function c(v) {
        A(t, function (d) {
            d(v, r)
        })
    }
    return {
        baseOption: i,
        timelineOptions: u || [],
        mediaDefault: a,
        mediaList: n
    }
}

function yS(e, t, r) {
    var n = {
            width: t,
            height: r,
            aspectratio: t / r
        },
        a = !0;
    return A(e, function (i, o) {
        var s = o.match(dS);
        if (!(!s || !s[1] || !s[2])) {
            var u = s[1],
                l = s[2].toLowerCase();
            mS(n[l], i, u) || (a = !1)
        }
    }), a
}

function mS(e, t, r) {
    return r === "min" ? e >= t : r === "max" ? e <= t : e === t
}

function _S(e, t) {
    return e.join(",") === t.join(",")
}
const SS = pS;
var ie = A,
    Ca = Y,
    Rh = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];

function Is(e) {
    var t = e && e.itemStyle;
    if (t)
        for (var r = 0, n = Rh.length; r < n; r++) {
            var a = Rh[r],
                i = t.normal,
                o = t.emphasis;
            i && i[a] && (e[a] = e[a] || {}, e[a].normal ? ut(e[a].normal, i[a]) : e[a].normal = i[a], i[a] = null), o && o[a] && (e[a] = e[a] || {}, e[a].emphasis ? ut(e[a].emphasis, o[a]) : e[a].emphasis = o[a], o[a] = null)
        }
}

function Ct(e, t, r) {
    if (e && e[t] && (e[t].normal || e[t].emphasis)) {
        var n = e[t].normal,
            a = e[t].emphasis;
        n && (r ? (e[t].normal = e[t].emphasis = null, j(e[t], n)) : e[t] = n), a && (e.emphasis = e.emphasis || {}, e.emphasis[t] = a, a.focus && (e.emphasis.focus = a.focus), a.blurScope && (e.emphasis.blurScope = a.blurScope))
    }
}

function sa(e) {
    Ct(e, "itemStyle"), Ct(e, "lineStyle"), Ct(e, "areaStyle"), Ct(e, "label"), Ct(e, "labelLine"), Ct(e, "upperLabel"), Ct(e, "edgeLabel")
}

function vt(e, t) {
    var r = Ca(e) && e[t],
        n = Ca(r) && r.textStyle;
    if (n)
        for (var a = 0, i = Ff.length; a < i; a++) {
            var o = Ff[a];
            n.hasOwnProperty(o) && (r[o] = n[o])
        }
}

function Qt(e) {
    e && (sa(e), vt(e, "label"), e.emphasis && vt(e.emphasis, "label"))
}

function wS(e) {
    if (Ca(e)) {
        Is(e), sa(e), vt(e, "label"), vt(e, "upperLabel"), vt(e, "edgeLabel"), e.emphasis && (vt(e.emphasis, "label"), vt(e.emphasis, "upperLabel"), vt(e.emphasis, "edgeLabel"));
        var t = e.markPoint;
        t && (Is(t), Qt(t));
        var r = e.markLine;
        r && (Is(r), Qt(r));
        var n = e.markArea;
        n && Qt(n);
        var a = e.data;
        if (e.type === "graph") {
            a = a || e.nodes;
            var i = e.links || e.edges;
            if (i && !zt(i))
                for (var o = 0; o < i.length; o++) Qt(i[o]);
            A(e.categories, function (l) {
                sa(l)
            })
        }
        if (a && !zt(a))
            for (var o = 0; o < a.length; o++) Qt(a[o]);
        if (t = e.markPoint, t && t.data)
            for (var s = t.data, o = 0; o < s.length; o++) Qt(s[o]);
        if (r = e.markLine, r && r.data)
            for (var u = r.data, o = 0; o < u.length; o++) B(u[o]) ? (Qt(u[o][0]), Qt(u[o][1])) : Qt(u[o]);
        e.type === "gauge" ? (vt(e, "axisLabel"), vt(e, "title"), vt(e, "detail")) : e.type === "treemap" ? (Ct(e.breadcrumb, "itemStyle"), A(e.levels, function (l) {
            sa(l)
        })) : e.type === "tree" && sa(e.leaves)
    }
}

function Be(e) {
    return B(e) ? e : e ? [e] : []
}

function Eh(e) {
    return (B(e) ? e[0] : e) || {}
}

function bS(e, t) {
    ie(Be(e.series), function (n) {
        Ca(n) && wS(n)
    });
    var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    t && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ie(r, function (n) {
        ie(Be(e[n]), function (a) {
            a && (vt(a, "axisLabel"), vt(a.axisPointer, "label"))
        })
    }), ie(Be(e.parallel), function (n) {
        var a = n && n.parallelAxisDefault;
        vt(a, "axisLabel"), vt(a && a.axisPointer, "label")
    }), ie(Be(e.calendar), function (n) {
        Ct(n, "itemStyle"), vt(n, "dayLabel"), vt(n, "monthLabel"), vt(n, "yearLabel")
    }), ie(Be(e.radar), function (n) {
        vt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap)
    }), ie(Be(e.geo), function (n) {
        Ca(n) && (Qt(n), ie(Be(n.regions), function (a) {
            Qt(a)
        }))
    }), ie(Be(e.timeline), function (n) {
        Qt(n), Ct(n, "label"), Ct(n, "itemStyle"), Ct(n, "controlStyle", !0);
        var a = n.data;
        B(a) && A(a, function (i) {
            Y(i) && (Ct(i, "label"), Ct(i, "itemStyle"))
        })
    }), ie(Be(e.toolbox), function (n) {
        Ct(n, "iconStyle"), ie(n.feature, function (a) {
            Ct(a, "iconStyle")
        })
    }), vt(Eh(e.axisPointer), "label"), vt(Eh(e.tooltip).axisPointer, "label")
}

function TS(e, t) {
    for (var r = t.split(","), n = e, a = 0; a < r.length && (n = n && n[r[a]], n != null); a++);
    return n
}

function MS(e, t, r, n) {
    for (var a = t.split(","), i = e, o, s = 0; s < a.length - 1; s++) o = a[s], i[o] == null && (i[o] = {}), i = i[o];
    (n || i[a[s]] == null) && (i[a[s]] = r)
}

function kh(e) {
    e && A(xS, function (t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]])
    })
}
var xS = [
        ["x", "left"],
        ["y", "top"],
        ["x2", "right"],
        ["y2", "bottom"]
    ],
    DS = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    Ps = [
        ["borderRadius", "barBorderRadius"],
        ["borderColor", "barBorderColor"],
        ["borderWidth", "barBorderWidth"]
    ];

function Yn(e) {
    var t = e && e.itemStyle;
    if (t)
        for (var r = 0; r < Ps.length; r++) {
            var n = Ps[r][1],
                a = Ps[r][0];
            t[n] != null && (t[a] = t[n])
        }
}

function Oh(e) {
    e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (e.edgeDistance = e.margin)
}

function Nh(e) {
    e && e.downplay && !e.blur && (e.blur = e.downplay)
}

function CS(e) {
    e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus == null && (e.emphasis.focus = "adjacency"))
}

function fp(e, t) {
    if (e)
        for (var r = 0; r < e.length; r++) t(e[r]), e[r] && fp(e[r].children, t)
}

function hp(e, t) {
    bS(e, t), e.series = Tt(e.series), A(e.series, function (r) {
        if (Y(r)) {
            var n = r.type;
            if (n === "line") r.clipOverflow != null && (r.clip = r.clipOverflow);
            else if (n === "pie" || n === "gauge") {
                r.clockWise != null && (r.clockwise = r.clockWise), Oh(r.label);
                var a = r.data;
                if (a && !zt(a))
                    for (var i = 0; i < a.length; i++) Oh(a[i]);
                r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (r.emphasis.scaleSize = r.hoverOffset))
            } else if (n === "gauge") {
                var o = TS(r, "pointer.color");
                o != null && MS(r, "itemStyle.color", o)
            } else if (n === "bar") {
                Yn(r), Yn(r.backgroundStyle), Yn(r.emphasis);
                var a = r.data;
                if (a && !zt(a))
                    for (var i = 0; i < a.length; i++) typeof a[i] == "object" && (Yn(a[i]), Yn(a[i] && a[i].emphasis))
            } else if (n === "sunburst") {
                var s = r.highlightPolicy;
                s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s)), Nh(r), fp(r.data, Nh)
            } else n === "graph" || n === "sankey" ? CS(r) : n === "map" && (r.mapType && !r.map && (r.map = r.mapType), r.mapLocation && j(r, r.mapLocation));
            r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (r.emphasis.scale = r.hoverAnimation)), kh(r)
        }
    }), e.dataRange && (e.visualMap = e.dataRange), A(DS, function (r) {
        var n = e[r];
        n && (B(n) || (n = [n]), A(n, function (a) {
            kh(a)
        }))
    })
}

function AS(e) {
    var t = K();
    e.eachSeries(function (r) {
        var n = r.get("stack");
        if (n) {
            var a = t.get(n) || t.set(n, []),
                i = r.getData(),
                o = {
                    stackResultDimension: i.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: i.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: i.getCalculationInfo("stackedDimension"),
                    stackedByDimension: i.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: i.getCalculationInfo("isStackedByIndex"),
                    data: i,
                    seriesModel: r
                };
            if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension)) return;
            a.length && i.setCalculationInfo("stackedOnSeries", a[a.length - 1].seriesModel), a.push(o)
        }
    }), t.each(LS)
}

function LS(e) {
    A(e, function (t, r) {
        var n = [],
            a = [NaN, NaN],
            i = [t.stackResultDimension, t.stackedOverDimension],
            o = t.data,
            s = t.isStackedByIndex,
            u = t.seriesModel.get("stackStrategy") || "samesign";
        o.modify(i, function (l, f, h) {
            var c = o.get(t.stackedDimension, h);
            if (isNaN(c)) return a;
            var v, d;
            s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
            for (var y = NaN, p = r - 1; p >= 0; p--) {
                var g = e[p];
                if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
                    var m = g.data.getByRawIndex(g.stackResultDimension, d);
                    if (u === "all" || u === "positive" && m > 0 || u === "negative" && m < 0 || u === "samesign" && c >= 0 && m > 0 || u === "samesign" && c <= 0 && m < 0) {
                        c = Gy(c, m), y = m;
                        break
                    }
                }
            }
            return n[0] = c, n[1] = y, n
        })
    })
}
var Ro = function () {
    function e(t) {
        this.data = t.data || (t.sourceFormat === Oe ? {} : []), this.sourceFormat = t.sourceFormat || ap, this.seriesLayoutBy = t.seriesLayoutBy || He, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var r = this.dimensionsDefine = t.dimensionsDefine;
        if (r)
            for (var n = 0; n < r.length; n++) {
                var a = r[n];
                a.type == null && op(this, n) === wt.Must && (a.type = "ordinal")
            }
    }
    return e
}();

function Rl(e) {
    return e instanceof Ro
}

function Ou(e, t, r) {
    r = r || vp(e);
    var n = t.seriesLayoutBy,
        a = PS(e, r, n, t.sourceHeader, t.dimensions),
        i = new Ro({
            data: e,
            sourceFormat: r,
            seriesLayoutBy: n,
            dimensionsDefine: a.dimensionsDefine,
            startIndex: a.startIndex,
            dimensionsDetectedCount: a.dimensionsDetectedCount,
            metaRawOption: J(t)
        });
    return i
}

function El(e) {
    return new Ro({
        data: e,
        sourceFormat: zt(e) ? or : ae
    })
}

function IS(e) {
    return new Ro({
        data: e.data,
        sourceFormat: e.sourceFormat,
        seriesLayoutBy: e.seriesLayoutBy,
        dimensionsDefine: J(e.dimensionsDefine),
        startIndex: e.startIndex,
        dimensionsDetectedCount: e.dimensionsDetectedCount
    })
}

function vp(e) {
    var t = ap;
    if (zt(e)) t = or;
    else if (B(e)) {
        e.length === 0 && (t = Vt);
        for (var r = 0, n = e.length; r < n; r++) {
            var a = e[r];
            if (a != null) {
                if (B(a) || zt(a)) {
                    t = Vt;
                    break
                } else if (Y(a)) {
                    t = _e;
                    break
                }
            }
        }
    } else if (Y(e)) {
        for (var i in e)
            if (Ur(e, i) && Bt(e[i])) {
                t = Oe;
                break
            }
    }
    return t
}

function PS(e, t, r, n, a) {
    var i, o;
    if (!e) return {
        dimensionsDefine: Fh(a),
        startIndex: o,
        dimensionsDetectedCount: i
    };
    if (t === Vt) {
        var s = e;
        n === "auto" || n == null ? Bh(function (l) {
            l != null && l !== "-" && (U(l) ? o == null && (o = 1) : o = 0)
        }, r, s, 10) : o = it(n) ? n : n ? 1 : 0, !a && o === 1 && (a = [], Bh(function (l, f) {
            a[f] = l != null ? l + "" : ""
        }, r, s, 1 / 0)), i = a ? a.length : r === Rn ? s.length : s[0] ? s[0].length : null
    } else if (t === _e) a || (a = RS(e));
    else if (t === Oe) a || (a = [], A(e, function (l, f) {
        a.push(f)
    }));
    else if (t === ae) {
        var u = Oa(e[0]);
        i = B(u) && u.length || 1
    }
    return {
        startIndex: o,
        dimensionsDefine: Fh(a),
        dimensionsDetectedCount: i
    }
}

function RS(e) {
    for (var t = 0, r; t < e.length && !(r = e[t++]););
    if (r) return lt(r)
}

function Fh(e) {
    if (e) {
        var t = K();
        return V(e, function (r, n) {
            r = Y(r) ? r : {
                name: r
            };
            var a = {
                name: r.name,
                displayName: r.displayName,
                type: r.type
            };
            if (a.name == null) return a;
            a.name += "", a.displayName == null && (a.displayName = a.name);
            var i = t.get(a.name);
            return i ? a.name += "-" + i.count++ : t.set(a.name, {
                count: 1
            }), a
        })
    }
}

function Bh(e, t, r, n) {
    if (t === Rn)
        for (var a = 0; a < r.length && a < n; a++) e(r[a] ? r[a][0] : null, a);
    else
        for (var i = r[0] || [], a = 0; a < i.length && a < n; a++) e(i[a], a)
}

function cp(e) {
    var t = e.sourceFormat;
    return t === _e || t === Oe
}
var Ir, Pr, Rr, zh, Vh, dp = function () {
        function e(t, r) {
            var n = Rl(t) ? t : El(t);
            this._source = n;
            var a = this._data = n.data;
            n.sourceFormat === or && (this._offset = 0, this._dimSize = r, this._data = a), Vh(this, a, n)
        }
        return e.prototype.getSource = function () {
            return this._source
        }, e.prototype.count = function () {
            return 0
        }, e.prototype.getItem = function (t, r) {}, e.prototype.appendData = function (t) {}, e.prototype.clean = function () {}, e.protoInitialize = function () {
            var t = e.prototype;
            t.pure = !1, t.persistent = !0
        }(), e.internalField = function () {
            var t;
            Vh = function (o, s, u) {
                var l = u.sourceFormat,
                    f = u.seriesLayoutBy,
                    h = u.startIndex,
                    c = u.dimensionsDefine,
                    v = zh[kl(l, f)];
                if (O(o, v), l === or) o.getItem = r, o.count = a, o.fillStorage = n;
                else {
                    var d = pp(l, f);
                    o.getItem = _t(d, null, s, h, c);
                    var y = gp(l, f);
                    o.count = _t(y, null, s, h, c)
                }
            };
            var r = function (o, s) {
                    o = o - this._offset, s = s || [];
                    for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++) s[h] = u[f + h];
                    return s
                },
                n = function (o, s, u, l) {
                    for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
                        for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], y = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], m = 0; m < p; m++) {
                            var _ = f[m * h + c];
                            g[o + m] = _, _ < d && (d = _), _ > y && (y = _)
                        }
                        v[0] = d, v[1] = y
                    }
                },
                a = function () {
                    return this._data ? this._data.length / this._dimSize : 0
                };
            zh = (t = {}, t[Vt + "_" + He] = {
                pure: !0,
                appendData: i
            }, t[Vt + "_" + Rn] = {
                pure: !0,
                appendData: function () {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                }
            }, t[_e] = {
                pure: !0,
                appendData: i
            }, t[Oe] = {
                pure: !0,
                appendData: function (o) {
                    var s = this._data;
                    A(o, function (u, l) {
                        for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++) f.push(u[h])
                    })
                }
            }, t[ae] = {
                appendData: i
            }, t[or] = {
                persistent: !1,
                pure: !0,
                appendData: function (o) {
                    this._data = o
                },
                clean: function () {
                    this._offset += this.count(), this._data = null
                }
            }, t);

            function i(o) {
                for (var s = 0; s < o.length; s++) this._data.push(o[s])
            }
        }(), e
    }(),
    Gh = function (e, t, r, n) {
        return e[n]
    },
    ES = (Ir = {}, Ir[Vt + "_" + He] = function (e, t, r, n) {
        return e[n + t]
    }, Ir[Vt + "_" + Rn] = function (e, t, r, n, a) {
        n += t;
        for (var i = a || [], o = e, s = 0; s < o.length; s++) {
            var u = o[s];
            i[s] = u ? u[n] : null
        }
        return i
    }, Ir[_e] = Gh, Ir[Oe] = function (e, t, r, n, a) {
        for (var i = a || [], o = 0; o < r.length; o++) {
            var s = r[o].name,
                u = e[s];
            i[o] = u ? u[n] : null
        }
        return i
    }, Ir[ae] = Gh, Ir);

function pp(e, t) {
    var r = ES[kl(e, t)];
    return r
}
var Hh = function (e, t, r) {
        return e.length
    },
    kS = (Pr = {}, Pr[Vt + "_" + He] = function (e, t, r) {
        return Math.max(0, e.length - t)
    }, Pr[Vt + "_" + Rn] = function (e, t, r) {
        var n = e[0];
        return n ? Math.max(0, n.length - t) : 0
    }, Pr[_e] = Hh, Pr[Oe] = function (e, t, r) {
        var n = r[0].name,
            a = e[n];
        return a ? a.length : 0
    }, Pr[ae] = Hh, Pr);

function gp(e, t) {
    var r = kS[kl(e, t)];
    return r
}
var Rs = function (e, t, r) {
        return e[t]
    },
    OS = (Rr = {}, Rr[Vt] = Rs, Rr[_e] = function (e, t, r) {
        return e[r]
    }, Rr[Oe] = Rs, Rr[ae] = function (e, t, r) {
        var n = Oa(e);
        return n instanceof Array ? n[t] : n
    }, Rr[or] = Rs, Rr);

function yp(e) {
    var t = OS[e];
    return t
}

function kl(e, t) {
    return e === Vt ? e + "_" + t : e
}

function Cn(e, t, r) {
    if (e) {
        var n = e.getRawDataItem(t);
        if (n != null) {
            var a = e.getStore(),
                i = a.getSource().sourceFormat;
            if (r != null) {
                var o = e.getDimensionIndex(r),
                    s = a.getDimensionProperty(o);
                return yp(i)(n, o, s)
            } else {
                var u = n;
                return i === ae && (u = Oa(n)), u
            }
        }
    }
}
var NS = /\{@(.+?)\}/g,
    FS = function () {
        function e() {}
        return e.prototype.getDataParams = function (t, r) {
            var n = this.getData(r),
                a = this.getRawValue(t, r),
                i = n.getRawIndex(t),
                o = n.getName(t),
                s = n.getRawDataItem(t),
                u = n.getItemVisual(t, "style"),
                l = u && u[n.getItemVisual(t, "drawType") || "fill"],
                f = u && u.stroke,
                h = this.mainType,
                c = h === "series",
                v = n.userOutput && n.userOutput.get();
            return {
                componentType: h,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: i,
                data: s,
                dataType: r,
                value: a,
                color: l,
                borderColor: f,
                dimensionNames: v ? v.fullDimensions : null,
                encode: v ? v.encode : null,
                $vars: ["seriesName", "name", "value"]
            }
        }, e.prototype.getFormattedLabel = function (t, r, n, a, i, o) {
            r = r || "normal";
            var s = this.getData(n),
                u = this.getDataParams(t, n);
            if (o && (u.value = o.interpolatedValue), a != null && B(u.value) && (u.value = u.value[a]), !i) {
                var l = s.getItemModel(t);
                i = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"])
            }
            if (Q(i)) return u.status = r, u.dimensionIndex = a, i(u);
            if (U(i)) {
                var f = X1(i, u);
                return f.replace(NS, function (h, c) {
                    var v = c.length,
                        d = c;
                    d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1));
                    var y = Cn(s, t, d);
                    if (o && B(o.interpolatedValue)) {
                        var p = s.getDimensionIndex(d);
                        p >= 0 && (y = o.interpolatedValue[p])
                    }
                    return y != null ? y + "" : ""
                })
            }
        }, e.prototype.getRawValue = function (t, r) {
            return Cn(this.getData(r), t)
        }, e.prototype.formatTooltip = function (t, r, n) {}, e
    }();

function AD(e) {
    var t, r;
    return Y(e) ? e.type && (r = e) : t = e, {
        text: t,
        frag: r
    }
}

function ma(e) {
    return new BS(e)
}
var BS = function () {
        function e(t) {
            t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
        }
        return e.prototype.perform = function (t) {
            var r = this._upstream,
                n = t && t.skip;
            if (this._dirty && r) {
                var a = this.context;
                a.data = a.outputData = r.context.outputData
            }
            this.__pipeline && (this.__pipeline.currentTask = this);
            var i;
            this._plan && !n && (i = this._plan(this.context));
            var o = f(this._modBy),
                s = this._modDataCount || 0,
                u = f(t && t.modBy),
                l = t && t.modDataCount || 0;
            (o !== u || s !== l) && (i = "reset");

            function f(m) {
                return !(m >= 1) && (m = 1), m
            }
            var h;
            (this._dirty || i === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
            var c = t && t.step;
            if (r ? this._dueEnd = r._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
                var v = this._dueIndex,
                    d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
                if (!n && (h || v < d)) {
                    var y = this._progress;
                    if (B(y))
                        for (var p = 0; p < y.length; p++) this._doProgress(y[p], v, d, u, l);
                    else this._doProgress(y, v, d, u, l)
                }
                this._dueIndex = d;
                var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
                this._outputDueEnd = g
            } else this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished()
        }, e.prototype.dirty = function () {
            this._dirty = !0, this._onDirty && this._onDirty(this.context)
        }, e.prototype._doProgress = function (t, r, n, a, i) {
            Wh.reset(r, n, a, i), this._callingProgress = t, this._callingProgress({
                start: r,
                end: n,
                count: n - r,
                next: Wh.next
            }, this.context)
        }, e.prototype._doReset = function (t) {
            this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
            var r, n;
            !t && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), B(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
            var a = this._downstream;
            return a && a.dirty(), n
        }, e.prototype.unfinished = function () {
            return this._progress && this._dueIndex < this._dueEnd
        }, e.prototype.pipe = function (t) {
            (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
        }, e.prototype.dispose = function () {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
        }, e.prototype.getUpstream = function () {
            return this._upstream
        }, e.prototype.getDownstream = function () {
            return this._downstream
        }, e.prototype.setOutputEnd = function (t) {
            this._outputDueEnd = this._settedOutputEnd = t
        }, e
    }(),
    Wh = function () {
        var e, t, r, n, a, i = {
            reset: function (u, l, f, h) {
                t = u, e = l, r = f, n = h, a = Math.ceil(n / r), i.next = r > 1 && n > 0 ? s : o
            }
        };
        return i;

        function o() {
            return t < e ? t++ : null
        }

        function s() {
            var u = t % a * r + Math.ceil(t / a),
                l = t >= e ? null : u < n ? u : t;
            return t++, l
        }
    }();

function Oi(e, t) {
    var r = t && t.type;
    return r === "ordinal" ? e : (r === "time" && !it(e) && e != null && e !== "-" && (e = +We(e)), e == null || e === "" ? NaN : +e)
}
var zS = K({
    number: function (e) {
        return parseFloat(e)
    },
    time: function (e) {
        return +We(e)
    },
    trim: function (e) {
        return U(e) ? Ve(e) : e
    }
});

function LD(e) {
    return zS.get(e)
}
var mp = {
        lt: function (e, t) {
            return e < t
        },
        lte: function (e, t) {
            return e <= t
        },
        gt: function (e, t) {
            return e > t
        },
        gte: function (e, t) {
            return e >= t
        }
    },
    VS = function () {
        function e(t, r) {
            if (!it(r)) {
                var n = "";
                kt(n)
            }
            this._opFn = mp[t], this._rvalFloat = fr(r)
        }
        return e.prototype.evaluate = function (t) {
            return it(t) ? this._opFn(t, this._rvalFloat) : this._opFn(fr(t), this._rvalFloat)
        }, e
    }(),
    GS = function () {
        function e(t, r) {
            var n = t === "desc";
            this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0
        }
        return e.prototype.evaluate = function (t, r) {
            var n = it(t) ? t : fr(t),
                a = it(r) ? r : fr(r),
                i = isNaN(n),
                o = isNaN(a);
            if (i && (n = this._incomparable), o && (a = this._incomparable), i && o) {
                var s = U(t),
                    u = U(r);
                s && (n = u ? t : 0), u && (a = s ? r : 0)
            }
            return n < a ? this._resultLT : n > a ? -this._resultLT : 0
        }, e
    }(),
    HS = function () {
        function e(t, r) {
            this._rval = r, this._isEQ = t, this._rvalTypeof = typeof r, this._rvalFloat = fr(r)
        }
        return e.prototype.evaluate = function (t) {
            var r = t === this._rval;
            if (!r) {
                var n = typeof t;
                n !== this._rvalTypeof && (n === "number" || this._rvalTypeof === "number") && (r = fr(t) === this._rvalFloat)
            }
            return this._isEQ ? r : !r
        }, e
    }();

function ID(e, t) {
    return e === "eq" || e === "ne" ? new HS(e === "eq", t) : Ur(mp, e) ? new VS(e, t) : null
}
var WS = function () {
    function e() {}
    return e.prototype.getRawData = function () {
        throw new Error("not supported")
    }, e.prototype.getRawDataItem = function (t) {
        throw new Error("not supported")
    }, e.prototype.cloneRawData = function () {}, e.prototype.getDimensionInfo = function (t) {}, e.prototype.cloneAllDimensionInfo = function () {}, e.prototype.count = function () {}, e.prototype.retrieveValue = function (t, r) {}, e.prototype.retrieveValueFromItem = function (t, r) {}, e.prototype.convertValue = function (t, r) {
        return Oi(t, r)
    }, e
}();

function US(e, t) {
    var r = new WS,
        n = e.data,
        a = r.sourceFormat = e.sourceFormat,
        i = e.startIndex,
        o = "";
    e.seriesLayoutBy !== He && kt(o);
    var s = [],
        u = {},
        l = e.dimensionsDefine;
    if (l) A(l, function (y, p) {
        var g = y.name,
            m = {
                index: p,
                name: g,
                displayName: y.displayName
            };
        if (s.push(m), g != null) {
            var _ = "";
            Ur(u, g) && kt(_), u[g] = m
        }
    });
    else
        for (var f = 0; f < e.dimensionsDetectedCount; f++) s.push({
            index: f
        });
    var h = pp(a, He);
    t.__isBuiltIn && (r.getRawDataItem = function (y) {
        return h(n, i, s, y)
    }, r.getRawData = _t(YS, null, e)), r.cloneRawData = _t($S, null, e);
    var c = gp(a, He);
    r.count = _t(c, null, n, i, s);
    var v = yp(a);
    r.retrieveValue = function (y, p) {
        var g = h(n, i, s, y);
        return d(g, p)
    };
    var d = r.retrieveValueFromItem = function (y, p) {
        if (y != null) {
            var g = s[p];
            if (g) return v(y, p, g.name)
        }
    };
    return r.getDimensionInfo = _t(XS, null, s, u), r.cloneAllDimensionInfo = _t(qS, null, s), r
}

function YS(e) {
    var t = e.sourceFormat;
    if (!Ol(t)) {
        var r = "";
        kt(r)
    }
    return e.data
}

function $S(e) {
    var t = e.sourceFormat,
        r = e.data;
    if (!Ol(t)) {
        var n = "";
        kt(n)
    }
    if (t === Vt) {
        for (var a = [], i = 0, o = r.length; i < o; i++) a.push(r[i].slice());
        return a
    } else if (t === _e) {
        for (var a = [], i = 0, o = r.length; i < o; i++) a.push(O({}, r[i]));
        return a
    }
}

function XS(e, t, r) {
    if (r != null) {
        if (it(r) || !isNaN(r) && !Ur(t, r)) return e[r];
        if (Ur(t, r)) return t[r]
    }
}

function qS(e) {
    return J(e)
}
var _p = K();

function ZS(e) {
    e = J(e);
    var t = e.type,
        r = "";
    t || kt(r);
    var n = t.split(":");
    n.length !== 2 && kt(r);
    var a = !1;
    n[0] === "echarts" && (t = n[1], a = !0), e.__isBuiltIn = a, _p.set(t, e)
}

function KS(e, t, r) {
    var n = Tt(e),
        a = n.length,
        i = "";
    a || kt(i);
    for (var o = 0, s = a; o < s; o++) {
        var u = n[o];
        t = QS(u, t), o !== s - 1 && (t.length = Math.max(t.length, 1))
    }
    return t
}

function QS(e, t, r, n) {
    var a = "";
    t.length || kt(a), Y(e) || kt(a);
    var i = e.type,
        o = _p.get(i);
    o || kt(a);
    var s = V(t, function (l) {
            return US(l, o)
        }),
        u = Tt(o.transform({
            upstream: s[0],
            upstreamList: s,
            config: J(e.config)
        }));
    return V(u, function (l, f) {
        var h = "";
        Y(l) || kt(h), l.data || kt(h);
        var c = vp(l.data);
        Ol(c) || kt(h);
        var v, d = t[0];
        if (d && f === 0 && !l.dimensions) {
            var y = d.startIndex;
            y && (l.data = d.data.slice(0, y).concat(l.data)), v = {
                seriesLayoutBy: He,
                sourceHeader: y,
                dimensions: d.metaRawOption.dimensions
            }
        } else v = {
            seriesLayoutBy: He,
            sourceHeader: 0,
            dimensions: l.dimensions
        };
        return Ou(l.data, v, null)
    })
}

function Ol(e) {
    return e === Vt || e === _e
}
var Eo = "undefined",
    JS = typeof Uint32Array === Eo ? Array : Uint32Array,
    jS = typeof Uint16Array === Eo ? Array : Uint16Array,
    Sp = typeof Int32Array === Eo ? Array : Int32Array,
    Uh = typeof Float64Array === Eo ? Array : Float64Array,
    wp = {
        float: Uh,
        int: Sp,
        ordinal: Array,
        number: Array,
        time: Uh
    },
    Es;

function $n(e) {
    return e > 65535 ? JS : jS
}

function fn() {
    return [1 / 0, -1 / 0]
}

function tw(e) {
    var t = e.constructor;
    return t === Array ? e.slice() : new t(e)
}

function Yh(e, t, r, n, a) {
    var i = wp[r || "float"];
    if (a) {
        var o = e[t],
            s = o && o.length;
        if (s !== n) {
            for (var u = new i(n), l = 0; l < s; l++) u[l] = o[l];
            e[t] = u
        }
    } else e[t] = new i(n)
}
var Nu = function () {
        function e() {
            this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = K()
        }
        return e.prototype.initData = function (t, r, n) {
            this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
            var a = t.getSource(),
                i = this.defaultDimValueGetter = Es[a.sourceFormat];
            this._dimValueGetter = n || i, this._rawExtent = [], cp(a), this._dimensions = V(r, function (o) {
                return {
                    type: o.type,
                    property: o.property
                }
            }), this._initDataFromProvider(0, t.count())
        }, e.prototype.getProvider = function () {
            return this._provider
        }, e.prototype.getSource = function () {
            return this._provider.getSource()
        }, e.prototype.ensureCalculationDimension = function (t, r) {
            var n = this._calcDimNameToIdx,
                a = this._dimensions,
                i = n.get(t);
            if (i != null) {
                if (a[i].type === r) return i
            } else i = a.length;
            return a[i] = {
                type: r
            }, n.set(t, i), this._chunks[i] = new wp[r || "float"](this._rawCount), this._rawExtent[i] = fn(), i
        }, e.prototype.collectOrdinalMeta = function (t, r) {
            var n = this._chunks[t],
                a = this._dimensions[t],
                i = this._rawExtent,
                o = a.ordinalOffset || 0,
                s = n.length;
            o === 0 && (i[t] = fn());
            for (var u = i[t], l = o; l < s; l++) {
                var f = n[l] = r.parseAndCollect(n[l]);
                isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]))
            }
            a.ordinalMeta = r, a.ordinalOffset = s, a.type = "ordinal"
        }, e.prototype.getOrdinalMeta = function (t) {
            var r = this._dimensions[t],
                n = r.ordinalMeta;
            return n
        }, e.prototype.getDimensionProperty = function (t) {
            var r = this._dimensions[t];
            return r && r.property
        }, e.prototype.appendData = function (t) {
            var r = this._provider,
                n = this.count();
            r.appendData(t);
            var a = r.count();
            return r.persistent || (a += n), n < a && this._initDataFromProvider(n, a, !0), [n, a]
        }, e.prototype.appendValues = function (t, r) {
            for (var n = this._chunks, a = this._dimensions, i = a.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, r || 0), l = 0; l < i; l++) {
                var f = a[l];
                Yh(n, l, f.type, u, !0)
            }
            for (var h = [], c = s; c < u; c++)
                for (var v = c - s, d = 0; d < i; d++) {
                    var f = a[d],
                        y = Es.arrayRows.call(this, t[v] || h, f.property, v, d);
                    n[d][c] = y;
                    var p = o[d];
                    y < p[0] && (p[0] = y), y > p[1] && (p[1] = y)
                }
            return this._rawCount = this._count = u, {
                start: s,
                end: u
            }
        }, e.prototype._initDataFromProvider = function (t, r, n) {
            for (var a = this._provider, i = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = V(o, function (m) {
                    return m.property
                }), f = 0; f < s; f++) {
                var h = o[f];
                u[f] || (u[f] = fn()), Yh(i, f, h.type, r, n)
            }
            if (a.fillStorage) a.fillStorage(t, r, i, u);
            else
                for (var c = [], v = t; v < r; v++) {
                    c = a.getItem(v, c);
                    for (var d = 0; d < s; d++) {
                        var y = i[d],
                            p = this._dimValueGetter(c, l[d], v, d);
                        y[v] = p;
                        var g = u[d];
                        p < g[0] && (g[0] = p), p > g[1] && (g[1] = p)
                    }
                }!a.persistent && a.clean && a.clean(), this._rawCount = this._count = r, this._extent = []
        }, e.prototype.count = function () {
            return this._count
        }, e.prototype.get = function (t, r) {
            if (!(r >= 0 && r < this._count)) return NaN;
            var n = this._chunks[t];
            return n ? n[this.getRawIndex(r)] : NaN
        }, e.prototype.getValues = function (t, r) {
            var n = [],
                a = [];
            if (r == null) {
                r = t, t = [];
                for (var i = 0; i < this._dimensions.length; i++) a.push(i)
            } else a = t;
            for (var i = 0, o = a.length; i < o; i++) n.push(this.get(a[i], r));
            return n
        }, e.prototype.getByRawIndex = function (t, r) {
            if (!(r >= 0 && r < this._rawCount)) return NaN;
            var n = this._chunks[t];
            return n ? n[r] : NaN
        }, e.prototype.getSum = function (t) {
            var r = this._chunks[t],
                n = 0;
            if (r)
                for (var a = 0, i = this.count(); a < i; a++) {
                    var o = this.get(t, a);
                    isNaN(o) || (n += o)
                }
            return n
        }, e.prototype.getMedian = function (t) {
            var r = [];
            this.each([t], function (i) {
                isNaN(i) || r.push(i)
            });
            var n = r.sort(function (i, o) {
                    return i - o
                }),
                a = this.count();
            return a === 0 ? 0 : a % 2 === 1 ? n[(a - 1) / 2] : (n[a / 2] + n[a / 2 - 1]) / 2
        }, e.prototype.indexOfRawIndex = function (t) {
            if (t >= this._rawCount || t < 0) return -1;
            if (!this._indices) return t;
            var r = this._indices,
                n = r[t];
            if (n != null && n < this._count && n === t) return t;
            for (var a = 0, i = this._count - 1; a <= i;) {
                var o = (a + i) / 2 | 0;
                if (r[o] < t) a = o + 1;
                else if (r[o] > t) i = o - 1;
                else return o
            }
            return -1
        }, e.prototype.indicesOfNearest = function (t, r, n) {
            var a = this._chunks,
                i = a[t],
                o = [];
            if (!i) return o;
            n == null && (n = 1 / 0);
            for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
                var c = this.getRawIndex(f),
                    v = r - i[c],
                    d = Math.abs(v);
                d <= n && ((d < s || d === s && v >= 0 && u < 0) && (s = d, u = v, l = 0), v === u && (o[l++] = f))
            }
            return o.length = l, o
        }, e.prototype.getIndices = function () {
            var t, r = this._indices;
            if (r) {
                var n = r.constructor,
                    a = this._count;
                if (n === Array) {
                    t = new n(a);
                    for (var i = 0; i < a; i++) t[i] = r[i]
                } else t = new n(r.buffer, 0, a)
            } else {
                var n = $n(this._rawCount);
                t = new n(this.count());
                for (var i = 0; i < t.length; i++) t[i] = i
            }
            return t
        }, e.prototype.filter = function (t, r) {
            if (!this._count) return this;
            for (var n = this.clone(), a = n.count(), i = $n(n._rawCount), o = new i(a), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, c = 0; c < a; c++) {
                var v = void 0,
                    d = n.getRawIndex(c);
                if (u === 0) v = r(c);
                else if (u === 1) {
                    var y = h[f][d];
                    v = r(y, c)
                } else {
                    for (var p = 0; p < u; p++) s[p] = h[t[p]][d];
                    s[p] = c, v = r.apply(null, s)
                }
                v && (o[l++] = d)
            }
            return l < a && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n
        }, e.prototype.selectRange = function (t) {
            var r = this.clone(),
                n = r._count;
            if (!n) return this;
            var a = lt(t),
                i = a.length;
            if (!i) return this;
            var o = r.count(),
                s = $n(r._rawCount),
                u = new s(o),
                l = 0,
                f = a[0],
                h = t[f][0],
                c = t[f][1],
                v = r._chunks,
                d = !1;
            if (!r._indices) {
                var y = 0;
                if (i === 1) {
                    for (var p = v[a[0]], g = 0; g < n; g++) {
                        var m = p[g];
                        (m >= h && m <= c || isNaN(m)) && (u[l++] = y), y++
                    }
                    d = !0
                } else if (i === 2) {
                    for (var p = v[a[0]], _ = v[a[1]], S = t[a[1]][0], b = t[a[1]][1], g = 0; g < n; g++) {
                        var m = p[g],
                            w = _[g];
                        (m >= h && m <= c || isNaN(m)) && (w >= S && w <= b || isNaN(w)) && (u[l++] = y), y++
                    }
                    d = !0
                }
            }
            if (!d)
                if (i === 1)
                    for (var g = 0; g < o; g++) {
                        var x = r.getRawIndex(g),
                            m = v[a[0]][x];
                        (m >= h && m <= c || isNaN(m)) && (u[l++] = x)
                    } else
                        for (var g = 0; g < o; g++) {
                            for (var T = !0, x = r.getRawIndex(g), D = 0; D < i; D++) {
                                var C = a[D],
                                    m = v[C][x];
                                (m < t[C][0] || m > t[C][1]) && (T = !1)
                            }
                            T && (u[l++] = r.getRawIndex(g))
                        }
            return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r
        }, e.prototype.map = function (t, r) {
            var n = this.clone(t);
            return this._updateDims(n, t, r), n
        }, e.prototype.modify = function (t, r) {
            this._updateDims(this, t, r)
        }, e.prototype._updateDims = function (t, r, n) {
            for (var a = t._chunks, i = [], o = r.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < r.length; f++) l[r[f]] = fn();
            for (var h = 0; h < s; h++) {
                for (var c = t.getRawIndex(h), v = 0; v < o; v++) u[v] = a[r[v]][c];
                u[o] = h;
                var d = n && n.apply(null, u);
                if (d != null) {
                    typeof d != "object" && (i[0] = d, d = i);
                    for (var f = 0; f < d.length; f++) {
                        var y = r[f],
                            p = d[f],
                            g = l[y],
                            m = a[y];
                        m && (m[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p)
                    }
                }
            }
        }, e.prototype.lttbDownSample = function (t, r) {
            var n = this.clone([t], !0),
                a = n._chunks,
                i = a[t],
                o = this.count(),
                s = 0,
                u = Math.floor(1 / r),
                l = this.getRawIndex(0),
                f, h, c, v = new($n(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
            v[s++] = l;
            for (var d = 1; d < o - 1; d += u) {
                for (var y = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + y) / 2, m = 0, _ = y; _ < p; _++) {
                    var S = this.getRawIndex(_),
                        b = i[S];
                    isNaN(b) || (m += b)
                }
                m /= p - y;
                var w = d,
                    x = Math.min(d + u, o),
                    T = d - 1,
                    D = i[l];
                f = -1, c = w;
                for (var C = -1, M = 0, _ = w; _ < x; _++) {
                    var S = this.getRawIndex(_),
                        b = i[S];
                    if (isNaN(b)) {
                        M++, C < 0 && (C = S);
                        continue
                    }
                    h = Math.abs((T - g) * (b - D) - (T - _) * (m - D)), h > f && (f = h, c = S)
                }
                M > 0 && M < x - w && (v[s++] = Math.min(C, c), c = Math.max(C, c)), v[s++] = c, l = c
            }
            return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n
        }, e.prototype.downSample = function (t, r, n, a) {
            for (var i = this.clone([t], !0), o = i._chunks, s = [], u = Math.floor(1 / r), l = o[t], f = this.count(), h = i._rawExtent[t] = fn(), c = new($n(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
                u > f - d && (u = f - d, s.length = u);
                for (var y = 0; y < u; y++) {
                    var p = this.getRawIndex(d + y);
                    s[y] = l[p]
                }
                var g = n(s),
                    m = this.getRawIndex(Math.min(d + a(s, g) || 0, f - 1));
                l[m] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = m
            }
            return i._count = v, i._indices = c, i._updateGetRawIdx(), i
        }, e.prototype.each = function (t, r) {
            if (this._count)
                for (var n = t.length, a = this._chunks, i = 0, o = this.count(); i < o; i++) {
                    var s = this.getRawIndex(i);
                    switch (n) {
                        case 0:
                            r(i);
                            break;
                        case 1:
                            r(a[t[0]][s], i);
                            break;
                        case 2:
                            r(a[t[0]][s], a[t[1]][s], i);
                            break;
                        default:
                            for (var u = 0, l = []; u < n; u++) l[u] = a[t[u]][s];
                            l[u] = i, r.apply(null, l)
                    }
                }
        }, e.prototype.getDataExtent = function (t) {
            var r = this._chunks[t],
                n = fn();
            if (!r) return n;
            var a = this.count(),
                i = !this._indices,
                o;
            if (i) return this._rawExtent[t].slice();
            if (o = this._extent[t], o) return o.slice();
            o = n;
            for (var s = o[0], u = o[1], l = 0; l < a; l++) {
                var f = this.getRawIndex(l),
                    h = r[f];
                h < s && (s = h), h > u && (u = h)
            }
            return o = [s, u], this._extent[t] = o, o
        }, e.prototype.getRawDataItem = function (t) {
            var r = this.getRawIndex(t);
            if (this._provider.persistent) return this._provider.getItem(r);
            for (var n = [], a = this._chunks, i = 0; i < a.length; i++) n.push(a[i][r]);
            return n
        }, e.prototype.clone = function (t, r) {
            var n = new e,
                a = this._chunks,
                i = t && ur(t, function (s, u) {
                    return s[u] = !0, s
                }, {});
            if (i)
                for (var o = 0; o < a.length; o++) n._chunks[o] = i[o] ? tw(a[o]) : a[o];
            else n._chunks = a;
            return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n
        }, e.prototype._copyCommonProps = function (t) {
            t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = J(this._extent), t._rawExtent = J(this._rawExtent)
        }, e.prototype._cloneIndices = function () {
            if (this._indices) {
                var t = this._indices.constructor,
                    r = void 0;
                if (t === Array) {
                    var n = this._indices.length;
                    r = new t(n);
                    for (var a = 0; a < n; a++) r[a] = this._indices[a]
                } else r = new t(this._indices);
                return r
            }
            return null
        }, e.prototype._getRawIdxIdentity = function (t) {
            return t
        }, e.prototype._getRawIdx = function (t) {
            return t < this._count && t >= 0 ? this._indices[t] : -1
        }, e.prototype._updateGetRawIdx = function () {
            this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity
        }, e.internalField = function () {
            function t(r, n, a, i) {
                return Oi(r[i], this._dimensions[i])
            }
            Es = {
                arrayRows: t,
                objectRows: function (r, n, a, i) {
                    return Oi(r[n], this._dimensions[i])
                },
                keyedColumns: t,
                original: function (r, n, a, i) {
                    var o = r && (r.value == null ? r : r.value);
                    return Oi(o instanceof Array ? o[i] : o, this._dimensions[i])
                },
                typedArray: function (r, n, a, i) {
                    return r[i]
                }
            }
        }(), e
    }(),
    ew = function () {
        function e(t) {
            this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t
        }
        return e.prototype.dirty = function () {
            this._setLocalSource([], []), this._storeList = [], this._dirty = !0
        }, e.prototype._setLocalSource = function (t, r) {
            this._sourceList = t, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
        }, e.prototype._getVersionSign = function () {
            return this._sourceHost.uid + "_" + this._versionSignBase
        }, e.prototype.prepareSource = function () {
            this._isDirty() && (this._createSource(), this._dirty = !1)
        }, e.prototype._createSource = function () {
            this._setLocalSource([], []);
            var t = this._sourceHost,
                r = this._getUpstreamSourceManagers(),
                n = !!r.length,
                a, i;
            if (ii(t)) {
                var o = t,
                    s = void 0,
                    u = void 0,
                    l = void 0;
                if (n) {
                    var f = r[0];
                    f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, i = [f._getVersionSign()]
                } else s = o.get("data", !0), u = zt(s) ? or : ae, i = [];
                var h = this._getSourceMetaRawOption() || {},
                    c = l && l.metaRawOption || {},
                    v = X(h.seriesLayoutBy, c.seriesLayoutBy) || null,
                    d = X(h.sourceHeader, c.sourceHeader),
                    y = X(h.dimensions, c.dimensions),
                    p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || y;
                a = p ? [Ou(s, {
                    seriesLayoutBy: v,
                    sourceHeader: d,
                    dimensions: y
                }, u)] : []
            } else {
                var g = t;
                if (n) {
                    var m = this._applyTransform(r);
                    a = m.sourceList, i = m.upstreamSignList
                } else {
                    var _ = g.get("source", !0);
                    a = [Ou(_, this._getSourceMetaRawOption(), null)], i = []
                }
            }
            this._setLocalSource(a, i)
        }, e.prototype._applyTransform = function (t) {
            var r = this._sourceHost,
                n = r.get("transform", !0),
                a = r.get("fromTransformResult", !0);
            if (a != null) {
                var i = "";
                t.length !== 1 && $h(i)
            }
            var o, s = [],
                u = [];
            return A(t, function (l) {
                l.prepareSource();
                var f = l.getSource(a || 0),
                    h = "";
                a != null && !f && $h(h), s.push(f), u.push(l._getVersionSign())
            }), n ? o = KS(n, s, {
                datasetIndex: r.componentIndex
            }) : a != null && (o = [IS(s[0])]), {
                sourceList: o,
                upstreamSignList: u
            }
        }, e.prototype._isDirty = function () {
            if (this._dirty) return !0;
            for (var t = this._getUpstreamSourceManagers(), r = 0; r < t.length; r++) {
                var n = t[r];
                if (n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()) return !0
            }
        }, e.prototype.getSource = function (t) {
            t = t || 0;
            var r = this._sourceList[t];
            if (!r) {
                var n = this._getUpstreamSourceManagers();
                return n[0] && n[0].getSource(t)
            }
            return r
        }, e.prototype.getSharedDataStore = function (t) {
            var r = t.makeStoreSchema();
            return this._innerGetDataStore(r.dimensions, t.source, r.hash)
        }, e.prototype._innerGetDataStore = function (t, r, n) {
            var a = 0,
                i = this._storeList,
                o = i[a];
            o || (o = i[a] = {});
            var s = o[n];
            if (!s) {
                var u = this._getUpstreamSourceManagers()[0];
                ii(this._sourceHost) && u ? s = u._innerGetDataStore(t, r, n) : (s = new Nu, s.initData(new dp(r, t.length), t)), o[n] = s
            }
            return s
        }, e.prototype._getUpstreamSourceManagers = function () {
            var t = this._sourceHost;
            if (ii(t)) {
                var r = Al(t);
                return r ? [r.getSourceManager()] : []
            } else return V(aS(t), function (n) {
                return n.getSourceManager()
            })
        }, e.prototype._getSourceMetaRawOption = function () {
            var t = this._sourceHost,
                r, n, a;
            if (ii(t)) r = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), a = t.get("dimensions", !0);
            else if (!this._getUpstreamSourceManagers().length) {
                var i = t;
                r = i.get("seriesLayoutBy", !0), n = i.get("sourceHeader", !0), a = i.get("dimensions", !0)
            }
            return {
                seriesLayoutBy: r,
                sourceHeader: n,
                dimensions: a
            }
        }, e
    }();

function PD(e) {
    var t = e.option.transform;
    t && zi(e.option.transform)
}

function ii(e) {
    return e.mainType === "series"
}

function $h(e) {
    throw new Error(e)
}
var bp = "line-height:1";

function Tp(e, t) {
    var r = e.color || "#6e7079",
        n = e.fontSize || 12,
        a = e.fontWeight || "400",
        i = e.color || "#464646",
        o = e.fontSize || 14,
        s = e.fontWeight || "900";
    return t === "html" ? {
        nameStyle: "font-size:" + Ut(n + "") + "px;color:" + Ut(r) + ";font-weight:" + Ut(a + ""),
        valueStyle: "font-size:" + Ut(o + "") + "px;color:" + Ut(i) + ";font-weight:" + Ut(s + "")
    } : {
        nameStyle: {
            fontSize: n,
            fill: r,
            fontWeight: a
        },
        valueStyle: {
            fontSize: o,
            fill: i,
            fontWeight: s
        }
    }
}
var rw = [0, 10, 20, 30],
    nw = ["", `
`, `

`, `


`];

function Aa(e, t) {
    return t.type = e, t
}

function Fu(e) {
    return e.type === "section"
}

function Mp(e) {
    return Fu(e) ? aw : iw
}

function xp(e) {
    if (Fu(e)) {
        var t = 0,
            r = e.blocks.length,
            n = r > 1 || r > 0 && !e.noHeader;
        return A(e.blocks, function (a) {
            var i = xp(a);
            i >= t && (t = i + +(n && (!i || Fu(a) && !a.noHeader)))
        }), t
    }
    return 0
}

function aw(e, t, r, n) {
    var a = t.noHeader,
        i = ow(xp(t)),
        o = [],
        s = t.blocks || [];
    Re(!s || B(s)), s = s || [];
    var u = e.orderMode;
    if (t.sortBlocks && u) {
        s = s.slice();
        var l = {
            valueAsc: "asc",
            valueDesc: "desc"
        };
        if (Ur(l, u)) {
            var f = new GS(l[u], null);
            s.sort(function (d, y) {
                return f.evaluate(d.sortParam, y.sortParam)
            })
        } else u === "seriesDesc" && s.reverse()
    }
    A(s, function (d, y) {
        var p = t.valueFormatter,
            g = Mp(d)(p ? O(O({}, e), {
                valueFormatter: p
            }) : e, d, y > 0 ? i.html : 0, n);
        g != null && o.push(g)
    });
    var h = e.renderMode === "richText" ? o.join(i.richText) : Bu(o.join(""), a ? r : i.html);
    if (a) return h;
    var c = Eu(t.header, "ordinal", e.useUTC),
        v = Tp(n, e.renderMode).nameStyle;
    return e.renderMode === "richText" ? Dp(e, c, v) + i.richText + h : Bu('<div style="' + v + ";" + bp + ';">' + Ut(c) + "</div>" + h, r)
}

function iw(e, t, r, n) {
    var a = e.renderMode,
        i = t.noName,
        o = t.noValue,
        s = !t.markerType,
        u = t.name,
        l = e.useUTC,
        f = t.valueFormatter || e.valueFormatter || function (S) {
            return S = B(S) ? S : [S], V(S, function (b, w) {
                return Eu(b, B(v) ? v[w] : v, l)
            })
        };
    if (!(i && o)) {
        var h = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", a),
            c = i ? "" : Eu(u, "ordinal", l),
            v = t.valueType,
            d = o ? [] : f(t.value, t.dataIndex),
            y = !s || !i,
            p = !s && i,
            g = Tp(n, a),
            m = g.nameStyle,
            _ = g.valueStyle;
        return a === "richText" ? (s ? "" : h) + (i ? "" : Dp(e, c, m)) + (o ? "" : lw(e, d, y, p, _)) : Bu((s ? "" : h) + (i ? "" : sw(c, !s, m)) + (o ? "" : uw(d, y, p, _)), r)
    }
}

function RD(e, t, r, n, a, i) {
    if (e) {
        var o = Mp(e),
            s = {
                useUTC: a,
                renderMode: r,
                orderMode: n,
                markupStyleCreator: t,
                valueFormatter: e.valueFormatter
            };
        return o(s, e, 0, i)
    }
}

function ow(e) {
    return {
        html: rw[e],
        richText: nw[e]
    }
}

function Bu(e, t) {
    var r = '<div style="clear:both"></div>',
        n = "margin: " + t + "px 0 0";
    return '<div style="' + n + ";" + bp + ';">' + e + r + "</div>"
}

function sw(e, t, r) {
    var n = t ? "margin-left:2px" : "";
    return '<span style="' + r + ";" + n + '">' + Ut(e) + "</span>"
}

function uw(e, t, r, n) {
    var a = r ? "10px" : "20px",
        i = t ? "float:right;margin-left:" + a : "";
    return e = B(e) ? e : [e], '<span style="' + i + ";" + n + '">' + V(e, function (o) {
        return Ut(o)
    }).join("&nbsp;&nbsp;") + "</span>"
}

function Dp(e, t, r) {
    return e.markupStyleCreator.wrapRichTextStyle(t, r)
}

function lw(e, t, r, n, a) {
    var i = [a],
        o = n ? 10 : 20;
    return r && i.push({
        padding: [0, 0, 0, o],
        align: "right"
    }), e.markupStyleCreator.wrapRichTextStyle(B(t) ? t.join("  ") : t, i)
}

function Cp(e, t) {
    var r = e.getData().getItemVisual(t, "style"),
        n = r[e.visualDrawType];
    return Z1(n)
}

function ED(e, t) {
    var r = e.get("padding");
    return r ? ? (t === "richText" ? [8, 10] : 10)
}
var kD = function () {
    function e() {
        this.richTextStyles = {}, this._nextStyleNameId = Fc()
    }
    return e.prototype._generateStyleName = function () {
        return "__EC_aUTo_" + this._nextStyleNameId++
    }, e.prototype.makeTooltipMarker = function (t, r, n) {
        var a = n === "richText" ? this._generateStyleName() : null,
            i = q1({
                color: r,
                type: t,
                renderMode: n,
                markerId: a
            });
        return U(i) ? i : (this.richTextStyles[a] = i.style, i.content)
    }, e.prototype.wrapRichTextStyle = function (t, r) {
        var n = {};
        B(r) ? A(r, function (i) {
            return O(n, i)
        }) : O(n, r);
        var a = this._generateStyleName();
        return this.richTextStyles[a] = n, "{" + a + "|" + t + "}"
    }, e
}();

function fw(e) {
    var t = e.series,
        r = e.dataIndex,
        n = e.multipleSeries,
        a = t.getData(),
        i = a.mapDimensionsAll("defaultedTooltip"),
        o = i.length,
        s = t.getRawValue(r),
        u = B(s),
        l = Cp(t, r),
        f, h, c, v;
    if (o > 1 || u && !o) {
        var d = hw(s, t, r, i, l);
        f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0]
    } else if (o) {
        var y = a.getDimensionInfo(i[0]);
        v = f = Cn(a, r, i[0]), h = y.type
    } else v = f = u ? s[0] : s;
    var p = Hc(t),
        g = p && t.name || "",
        m = a.getName(r),
        _ = n ? g : m;
    return Aa("section", {
        header: g,
        noHeader: n || !p,
        sortParam: v,
        blocks: [Aa("nameValue", {
            markerType: "item",
            markerColor: l,
            name: _,
            noName: !Ve(_),
            value: f,
            valueType: h,
            dataIndex: r
        })].concat(c || [])
    })
}

function hw(e, t, r, n, a) {
    var i = t.getData(),
        o = ur(e, function (h, c, v) {
            var d = i.getDimensionInfo(v);
            return h = h || d && d.tooltip !== !1 && d.displayName != null
        }, !1),
        s = [],
        u = [],
        l = [];
    n.length ? A(n, function (h) {
        f(Cn(i, r, h), h)
    }) : A(e, f);

    function f(h, c) {
        var v = i.getDimensionInfo(c);
        !v || v.otherDims.tooltip === !1 || (o ? l.push(Aa("nameValue", {
            markerType: "subItem",
            markerColor: a,
            name: v.displayName,
            value: h,
            valueType: v.type
        })) : (s.push(h), u.push(v.type)))
    }
    return {
        inlineValues: s,
        inlineValueTypes: u,
        blocks: l
    }
}
var Qe = At();

function oi(e, t) {
    return e.getName(t) || e.getId(t)
}
var vw = "__universalTransitionEnabled",
    ko = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r._selectedDataIndicesMap = {}, r
        }
        return t.prototype.init = function (r, n, a) {
            this.seriesIndex = this.componentIndex, this.dataTask = ma({
                count: dw,
                reset: pw
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(r, a);
            var i = Qe(this).sourceManager = new ew(this);
            i.prepareSource();
            var o = this.getInitialData(r, a);
            qh(o, this), this.dataTask.context.data = o, Qe(this).dataBeforeProcessed = o, Xh(this), this._initSelectedMapFromData(o)
        }, t.prototype.mergeDefaultAndTheme = function (r, n) {
            var a = ro(this),
                i = a ? ep(r) : {},
                o = this.subType;
            pt.hasClass(o) && (o += "Series"), ut(r, n.getTheme().get(this.subType)), ut(r, this.getDefaultOption()), mu(r, "label", ["show"]), this.fillDataTextStyle(r.data), a && no(r, i, a)
        }, t.prototype.mergeOption = function (r, n) {
            r = ut(this.option, r, !0), this.fillDataTextStyle(r.data);
            var a = ro(this);
            a && no(this.option, r, a);
            var i = Qe(this).sourceManager;
            i.dirty(), i.prepareSource();
            var o = this.getInitialData(r, n);
            qh(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Qe(this).dataBeforeProcessed = o, Xh(this), this._initSelectedMapFromData(o)
        }, t.prototype.fillDataTextStyle = function (r) {
            if (r && !zt(r))
                for (var n = ["show"], a = 0; a < r.length; a++) r[a] && r[a].label && mu(r[a], "label", n)
        }, t.prototype.getInitialData = function (r, n) {}, t.prototype.appendData = function (r) {
            var n = this.getRawData();
            n.appendData(r.data)
        }, t.prototype.getData = function (r) {
            var n = zu(this);
            if (n) {
                var a = n.context.data;
                return r == null ? a : a.getLinkedData(r)
            } else return Qe(this).data
        }, t.prototype.getAllData = function () {
            var r = this.getData();
            return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
                data: r
            }]
        }, t.prototype.setData = function (r) {
            var n = zu(this);
            if (n) {
                var a = n.context;
                a.outputData = r, n !== this.dataTask && (a.data = r)
            }
            Qe(this).data = r
        }, t.prototype.getEncode = function () {
            var r = this.get("encode", !0);
            if (r) return K(r)
        }, t.prototype.getSourceManager = function () {
            return Qe(this).sourceManager
        }, t.prototype.getSource = function () {
            return this.getSourceManager().getSource()
        }, t.prototype.getRawData = function () {
            return Qe(this).dataBeforeProcessed
        }, t.prototype.getColorBy = function () {
            var r = this.get("colorBy");
            return r || "series"
        }, t.prototype.isColorBySeries = function () {
            return this.getColorBy() === "series"
        }, t.prototype.getBaseAxis = function () {
            var r = this.coordinateSystem;
            return r && r.getBaseAxis && r.getBaseAxis()
        }, t.prototype.formatTooltip = function (r, n, a) {
            return fw({
                series: this,
                dataIndex: r,
                multipleSeries: n
            })
        }, t.prototype.isAnimationEnabled = function () {
            var r = this.ecModel;
            if (et.node && !(r && r.ssr)) return !1;
            var n = this.getShallow("animation");
            return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n
        }, t.prototype.restoreData = function () {
            this.dataTask.dirty()
        }, t.prototype.getColorFromPalette = function (r, n, a) {
            var i = this.ecModel,
                o = Ll.prototype.getColorFromPalette.call(this, r, n, a);
            return o || (o = i.getColorFromPalette(r, n, a)), o
        }, t.prototype.coordDimToDataDim = function (r) {
            return this.getRawData().mapDimensionsAll(r)
        }, t.prototype.getProgressive = function () {
            return this.get("progressive")
        }, t.prototype.getProgressiveThreshold = function () {
            return this.get("progressiveThreshold")
        }, t.prototype.select = function (r, n) {
            this._innerSelect(this.getData(n), r)
        }, t.prototype.unselect = function (r, n) {
            var a = this.option.selectedMap;
            if (a) {
                var i = this.option.selectedMode,
                    o = this.getData(n);
                if (i === "series" || a === "all") {
                    this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
                    return
                }
                for (var s = 0; s < r.length; s++) {
                    var u = r[s],
                        l = oi(o, u);
                    a[l] = !1, this._selectedDataIndicesMap[l] = -1
                }
            }
        }, t.prototype.toggleSelect = function (r, n) {
            for (var a = [], i = 0; i < r.length; i++) a[0] = r[i], this.isSelected(r[i], n) ? this.unselect(a, n) : this.select(a, n)
        }, t.prototype.getSelectedDataIndices = function () {
            if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
            for (var r = this._selectedDataIndicesMap, n = lt(r), a = [], i = 0; i < n.length; i++) {
                var o = r[n[i]];
                o >= 0 && a.push(o)
            }
            return a
        }, t.prototype.isSelected = function (r, n) {
            var a = this.option.selectedMap;
            if (!a) return !1;
            var i = this.getData(n);
            return (a === "all" || a[oi(i, r)]) && !i.getItemModel(r).get(["select", "disabled"])
        }, t.prototype.isUniversalTransitionEnabled = function () {
            if (this[vw]) return !0;
            var r = this.option.universalTransition;
            return r ? r === !0 ? !0 : r && r.enabled : !1
        }, t.prototype._innerSelect = function (r, n) {
            var a, i, o = this.option,
                s = o.selectedMode,
                u = n.length;
            if (!(!s || !u)) {
                if (s === "series") o.selectedMap = "all";
                else if (s === "multiple") {
                    Y(o.selectedMap) || (o.selectedMap = {});
                    for (var l = o.selectedMap, f = 0; f < u; f++) {
                        var h = n[f],
                            c = oi(r, h);
                        l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h)
                    }
                } else if (s === "single" || s === !0) {
                    var v = n[u - 1],
                        c = oi(r, v);
                    o.selectedMap = (a = {}, a[c] = !0, a), this._selectedDataIndicesMap = (i = {}, i[c] = r.getRawIndex(v), i)
                }
            }
        }, t.prototype._initSelectedMapFromData = function (r) {
            if (!this.option.selectedMap) {
                var n = [];
                r.hasItemOption && r.each(function (a) {
                    var i = r.getRawDataItem(a);
                    i && i.selected && n.push(a)
                }), n.length > 0 && this._innerSelect(r, n)
            }
        }, t.registerClass = function (r) {
            return pt.registerClass(r)
        }, t.protoInitialize = function () {
            var r = t.prototype;
            r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill"
        }(), t
    }(pt);
ke(ko, FS);
ke(ko, Ll);
$c(ko, pt);

function Xh(e) {
    var t = e.name;
    Hc(e) || (e.name = cw(e) || t)
}

function cw(e) {
    var t = e.getRawData(),
        r = t.mapDimensionsAll("seriesName"),
        n = [];
    return A(r, function (a) {
        var i = t.getDimensionInfo(a);
        i.displayName && n.push(i.displayName)
    }), n.join(" ")
}

function dw(e) {
    return e.model.getRawData().count()
}

function pw(e) {
    var t = e.model;
    return t.setData(t.getRawData().cloneShallow()), gw
}

function gw(e, t) {
    t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData)
}

function qh(e, t) {
    A(y0(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function (r) {
        e.wrapMethod(r, Xr(yw, t))
    })
}

function yw(e, t) {
    var r = zu(e);
    return r && r.setOutputEnd((t || this).count()), t
}

function zu(e) {
    var t = (e.ecModel || {}).scheduler,
        r = t && t.getPipeline(e.uid);
    if (r) {
        var n = r.currentTask;
        if (n) {
            var a = n.agentStubMap;
            a && (n = a.get(e.uid))
        }
        return n
    }
}
const vr = ko;
var Nl = function () {
    function e() {
        this.group = new ye, this.uid = Co("viewComponent")
    }
    return e.prototype.init = function (t, r) {}, e.prototype.render = function (t, r, n, a) {}, e.prototype.dispose = function (t, r) {}, e.prototype.updateView = function (t, r, n, a) {}, e.prototype.updateLayout = function (t, r, n, a) {}, e.prototype.updateVisual = function (t, r, n, a) {}, e.prototype.toggleBlurSeries = function (t, r, n) {}, e.prototype.eachRendered = function (t) {
        var r = this.group;
        r && r.traverse(t)
    }, e
}();
sl(Nl);
mo(Nl);
const ao = Nl;

function Ap() {
    var e = At();
    return function (t) {
        var r = e(t),
            n = t.pipelineContext,
            a = !!r.large,
            i = !!r.progressiveRender,
            o = r.large = !!(n && n.large),
            s = r.progressiveRender = !!(n && n.progressiveRender);
        return (a !== o || i !== s) && "reset"
    }
}
var Lp = At(),
    mw = Ap(),
    Fl = function () {
        function e() {
            this.group = new ye, this.uid = Co("viewChart"), this.renderTask = ma({
                plan: _w,
                reset: Sw
            }), this.renderTask.context = {
                view: this
            }
        }
        return e.prototype.init = function (t, r) {}, e.prototype.render = function (t, r, n, a) {}, e.prototype.highlight = function (t, r, n, a) {
            var i = t.getData(a && a.dataType);
            i && Kh(i, a, "emphasis")
        }, e.prototype.downplay = function (t, r, n, a) {
            var i = t.getData(a && a.dataType);
            i && Kh(i, a, "normal")
        }, e.prototype.remove = function (t, r) {
            this.group.removeAll()
        }, e.prototype.dispose = function (t, r) {}, e.prototype.updateView = function (t, r, n, a) {
            this.render(t, r, n, a)
        }, e.prototype.updateLayout = function (t, r, n, a) {
            this.render(t, r, n, a)
        }, e.prototype.updateVisual = function (t, r, n, a) {
            this.render(t, r, n, a)
        }, e.prototype.eachRendered = function (t) {
            ml(this.group, t)
        }, e.markUpdateMethod = function (t, r) {
            Lp(t).updateMethod = r
        }, e.protoInitialize = function () {
            var t = e.prototype;
            t.type = "chart"
        }(), e
    }();

function Zh(e, t, r) {
    e && Cu(e) && (t === "emphasis" ? Tu : Mu)(e, r)
}

function Kh(e, t, r) {
    var n = go(e, t),
        a = t && t.highlightKey != null ? x_(t.highlightKey) : null;
    n != null ? A(Tt(n), function (i) {
        Zh(e.getItemGraphicEl(i), r, a)
    }) : e.eachItemGraphicEl(function (i) {
        Zh(i, r, a)
    })
}
sl(Fl);
mo(Fl);

function _w(e) {
    return mw(e.model)
}

function Sw(e) {
    var t = e.model,
        r = e.ecModel,
        n = e.api,
        a = e.payload,
        i = t.pipelineContext.progressiveRender,
        o = e.view,
        s = a && Lp(a).updateMethod,
        u = i ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return u !== "render" && o[u](t, r, n, a), ww[u]
}
var ww = {
    incrementalPrepareRender: {
        progress: function (e, t) {
            t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload)
        }
    },
    render: {
        forceFirstProgress: !0,
        progress: function (e, t) {
            t.view.render(t.model, t.ecModel, t.api, t.payload)
        }
    }
};
const sr = Fl;
var io = "\0__throttleOriginMethod",
    Qh = "\0__throttleRate",
    Jh = "\0__throttleType";

function Bl(e, t, r) {
    var n, a = 0,
        i = 0,
        o = null,
        s, u, l, f;
    t = t || 0;

    function h() {
        i = new Date().getTime(), o = null, e.apply(u, l || [])
    }
    var c = function () {
        for (var v = [], d = 0; d < arguments.length; d++) v[d] = arguments[d];
        n = new Date().getTime(), u = this, l = v;
        var y = f || t,
            p = f || r;
        f = null, s = n - (p ? a : i) - y, clearTimeout(o), p ? o = setTimeout(h, y) : s >= 0 ? h() : o = setTimeout(h, -s), a = n
    };
    return c.clear = function () {
        o && (clearTimeout(o), o = null)
    }, c.debounceNextCall = function (v) {
        f = v
    }, c
}

function OD(e, t, r, n) {
    var a = e[t];
    if (a) {
        var i = a[io] || a,
            o = a[Jh],
            s = a[Qh];
        if (s !== r || o !== n) {
            if (r == null || !n) return e[t] = i;
            a = e[t] = Bl(i, r, n === "debounce"), a[io] = i, a[Jh] = n, a[Qh] = r
        }
        return a
    }
}

function ND(e, t) {
    var r = e[t];
    r && r[io] && (r.clear && r.clear(), e[t] = r[io])
}
var jh = At(),
    tv = {
        itemStyle: xa(Gd, !0),
        lineStyle: xa(Vd, !0)
    },
    bw = {
        lineStyle: "stroke",
        itemStyle: "fill"
    };

function Ip(e, t) {
    var r = e.visualStyleMapper || tv[t];
    return r || (console.warn("Unknown style type '" + t + "'."), tv.itemStyle)
}

function Pp(e, t) {
    var r = e.visualDrawType || bw[t];
    return r || (console.warn("Unknown style type '" + t + "'."), "fill")
}
var Tw = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (e, t) {
            var r = e.getData(),
                n = e.visualStyleAccessPath || "itemStyle",
                a = e.getModel(n),
                i = Ip(e, n),
                o = i(a),
                s = a.getShallow("decal");
            s && (r.setVisual("decal", s), s.dirty = !0);
            var u = Pp(e, n),
                l = o[u],
                f = Q(l) ? l : null,
                h = o.fill === "auto" || o.stroke === "auto";
            if (!o[u] || f || h) {
                var c = e.getColorFromPalette(e.name, null, t.getSeriesCount());
                o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Q(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || Q(o.stroke) ? c : o.stroke
            }
            if (r.setVisual("style", o), r.setVisual("drawType", u), !t.isSeriesFiltered(e) && f) return r.setVisual("colorFromPalette", !1), {
                dataEach: function (v, d) {
                    var y = e.getDataParams(d),
                        p = O({}, o);
                    p[u] = f(y), v.setItemVisual(d, "style", p)
                }
            }
        }
    },
    Xn = new ge,
    Mw = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (e, t) {
            if (!(e.ignoreStyleOnData || t.isSeriesFiltered(e))) {
                var r = e.getData(),
                    n = e.visualStyleAccessPath || "itemStyle",
                    a = Ip(e, n),
                    i = r.getVisual("drawType");
                return {
                    dataEach: r.hasItemOption ? function (o, s) {
                        var u = o.getRawDataItem(s);
                        if (u && u[n]) {
                            Xn.option = u[n];
                            var l = a(Xn),
                                f = o.ensureUniqueItemVisual(s, "style");
                            O(f, l), Xn.option.decal && (o.setItemVisual(s, "decal", Xn.option.decal), Xn.option.decal.dirty = !0), i in l && o.setItemVisual(s, "colorFromPalette", !1)
                        }
                    } : null
                }
            }
        }
    },
    xw = {
        performRawSeries: !0,
        overallReset: function (e) {
            var t = K();
            e.eachSeries(function (r) {
                var n = r.getColorBy();
                if (!r.isColorBySeries()) {
                    var a = r.type + "-" + n,
                        i = t.get(a);
                    i || (i = {}, t.set(a, i)), jh(r).scope = i
                }
            }), e.eachSeries(function (r) {
                if (!(r.isColorBySeries() || e.isSeriesFiltered(r))) {
                    var n = r.getRawData(),
                        a = {},
                        i = r.getData(),
                        o = jh(r).scope,
                        s = r.visualStyleAccessPath || "itemStyle",
                        u = Pp(r, s);
                    i.each(function (l) {
                        var f = i.getRawIndex(l);
                        a[f] = l
                    }), n.each(function (l) {
                        var f = a[l],
                            h = i.getItemVisual(f, "colorFromPalette");
                        if (h) {
                            var c = i.ensureUniqueItemVisual(f, "style"),
                                v = n.getName(l) || l + "",
                                d = n.count();
                            c[u] = r.getColorFromPalette(v, o, d)
                        }
                    })
                }
            })
        }
    },
    si = Math.PI;

function Dw(e, t) {
    t = t || {}, j(t, {
        text: "loading",
        textColor: "#000",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        fontFamily: "sans-serif",
        maskColor: "rgba(255, 255, 255, 0.8)",
        showSpinner: !0,
        color: "#5470c6",
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0
    });
    var r = new ye,
        n = new re({
            style: {
                fill: t.maskColor
            },
            zlevel: t.zlevel,
            z: 1e4
        });
    r.add(n);
    var a = new hr({
            style: {
                text: t.text,
                fill: t.textColor,
                fontSize: t.fontSize,
                fontWeight: t.fontWeight,
                fontStyle: t.fontStyle,
                fontFamily: t.fontFamily
            },
            zlevel: t.zlevel,
            z: 10001
        }),
        i = new re({
            style: {
                fill: "none"
            },
            textContent: a,
            textConfig: {
                position: "right",
                distance: 10
            },
            zlevel: t.zlevel,
            z: 10001
        });
    r.add(i);
    var o;
    return t.showSpinner && (o = new dl({
        shape: {
            startAngle: -si / 2,
            endAngle: -si / 2 + .1,
            r: t.spinnerRadius
        },
        style: {
            stroke: t.color,
            lineCap: "round",
            lineWidth: t.lineWidth
        },
        zlevel: t.zlevel,
        z: 10001
    }), o.animateShape(!0).when(1e3, {
        endAngle: si * 3 / 2
    }).start("circularInOut"), o.animateShape(!0).when(1e3, {
        startAngle: si * 3 / 2
    }).delay(300).start("circularInOut"), r.add(o)), r.resize = function () {
        var s = a.getBoundingRect().width,
            u = t.showSpinner ? t.spinnerRadius : 0,
            l = (e.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u),
            f = e.getHeight() / 2;
        t.showSpinner && o.setShape({
            cx: l,
            cy: f
        }), i.setShape({
            x: l - u,
            y: f - u,
            width: u * 2,
            height: u * 2
        }), n.setShape({
            x: 0,
            y: 0,
            width: e.getWidth(),
            height: e.getHeight()
        })
    }, r.resize(), r
}
var Rp = function () {
    function e(t, r, n, a) {
        this._stageTaskMap = K(), this.ecInstance = t, this.api = r, n = this._dataProcessorHandlers = n.slice(), a = this._visualHandlers = a.slice(), this._allHandlers = n.concat(a)
    }
    return e.prototype.restoreData = function (t, r) {
        t.restoreData(r), this._stageTaskMap.each(function (n) {
            var a = n.overallTask;
            a && a.dirty()
        })
    }, e.prototype.getPerformArgs = function (t, r) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
                a = n.context,
                i = !r && n.progressiveEnabled && (!a || a.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                o = i ? n.step : null,
                s = a && a.modDataCount,
                u = s != null ? Math.ceil(s / o) : null;
            return {
                step: o,
                modBy: u,
                modDataCount: s
            }
        }
    }, e.prototype.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, e.prototype.updateStreamModes = function (t, r) {
        var n = this._pipelineMap.get(t.uid),
            a = t.getData(),
            i = a.count(),
            o = n.progressiveEnabled && r.incrementalPrepareRender && i >= n.threshold,
            s = t.get("large") && i >= t.get("largeThreshold"),
            u = t.get("progressiveChunkMode") === "mod" ? i : null;
        t.pipelineContext = n.context = {
            progressiveRender: o,
            modDataCount: u,
            large: s
        }
    }, e.prototype.restorePipelines = function (t) {
        var r = this,
            n = r._pipelineMap = K();
        t.eachSeries(function (a) {
            var i = a.getProgressive(),
                o = a.uid;
            n.set(o, {
                id: o,
                head: null,
                tail: null,
                threshold: a.getProgressiveThreshold(),
                progressiveEnabled: i && !(a.preventIncremental && a.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), r._pipe(a, a.dataTask)
        })
    }, e.prototype.prepareStageTasks = function () {
        var t = this._stageTaskMap,
            r = this.api.getModel(),
            n = this.api;
        A(this._allHandlers, function (a) {
            var i = t.get(a.uid) || t.set(a.uid, {}),
                o = "";
            Re(!(a.reset && a.overallReset), o), a.reset && this._createSeriesStageTask(a, i, r, n), a.overallReset && this._createOverallStageTask(a, i, r, n)
        }, this)
    }, e.prototype.prepareView = function (t, r, n, a) {
        var i = t.renderTask,
            o = i.context;
        o.model = r, o.ecModel = n, o.api = a, i.__block = !t.incrementalPrepareRender, this._pipe(r, i)
    }, e.prototype.performDataProcessorTasks = function (t, r) {
        this._performStageTasks(this._dataProcessorHandlers, t, r, {
            block: !0
        })
    }, e.prototype.performVisualTasks = function (t, r, n) {
        this._performStageTasks(this._visualHandlers, t, r, n)
    }, e.prototype._performStageTasks = function (t, r, n, a) {
        a = a || {};
        var i = !1,
            o = this;
        A(t, function (u, l) {
            if (!(a.visualType && a.visualType !== u.visualType)) {
                var f = o._stageTaskMap.get(u.uid),
                    h = f.seriesTaskMap,
                    c = f.overallTask;
                if (c) {
                    var v, d = c.agentStubMap;
                    d.each(function (p) {
                        s(a, p) && (p.dirty(), v = !0)
                    }), v && c.dirty(), o.updatePayload(c, n);
                    var y = o.getPerformArgs(c, a.block);
                    d.each(function (p) {
                        p.perform(y)
                    }), c.perform(y) && (i = !0)
                } else h && h.each(function (p, g) {
                    s(a, p) && p.dirty();
                    var m = o.getPerformArgs(p, a.block);
                    m.skip = !u.performRawSeries && r.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(m) && (i = !0)
                })
            }
        });

        function s(u, l) {
            return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id))
        }
        this.unfinished = i || this.unfinished
    }, e.prototype.performSeriesTasks = function (t) {
        var r;
        t.eachSeries(function (n) {
            r = n.dataTask.perform() || r
        }), this.unfinished = r || this.unfinished
    }, e.prototype.plan = function () {
        this._pipelineMap.each(function (t) {
            var r = t.tail;
            do {
                if (r.__block) {
                    t.blockIndex = r.__idxInPipeline;
                    break
                }
                r = r.getUpstream()
            } while (r)
        })
    }, e.prototype.updatePayload = function (t, r) {
        r !== "remain" && (t.context.payload = r)
    }, e.prototype._createSeriesStageTask = function (t, r, n, a) {
        var i = this,
            o = r.seriesTaskMap,
            s = r.seriesTaskMap = K(),
            u = t.seriesType,
            l = t.getTargetSeries;
        t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, a).each(f);

        function f(h) {
            var c = h.uid,
                v = s.set(c, o && o.get(c) || ma({
                    plan: Pw,
                    reset: Rw,
                    count: kw
                }));
            v.context = {
                model: h,
                ecModel: n,
                api: a,
                useClearVisual: t.isVisual && !t.isLayout,
                plan: t.plan,
                reset: t.reset,
                scheduler: i
            }, i._pipe(h, v)
        }
    }, e.prototype._createOverallStageTask = function (t, r, n, a) {
        var i = this,
            o = r.overallTask = r.overallTask || ma({
                reset: Cw
            });
        o.context = {
            ecModel: n,
            api: a,
            overallReset: t.overallReset,
            scheduler: i
        };
        var s = o.agentStubMap,
            u = o.agentStubMap = K(),
            l = t.seriesType,
            f = t.getTargetSeries,
            h = !0,
            c = !1,
            v = "";
        Re(!t.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, a).each(d) : (h = !1, A(n.getSeries(), d));

        function d(y) {
            var p = y.uid,
                g = u.set(p, s && s.get(p) || (c = !0, ma({
                    reset: Aw,
                    onDirty: Iw
                })));
            g.context = {
                model: y,
                overallProgress: h
            }, g.agent = o, g.__block = h, i._pipe(y, g)
        }
        c && o.dirty()
    }, e.prototype._pipe = function (t, r) {
        var n = t.uid,
            a = this._pipelineMap.get(n);
        !a.head && (a.head = r), a.tail && a.tail.pipe(r), a.tail = r, r.__idxInPipeline = a.count++, r.__pipeline = a
    }, e.wrapStageHandler = function (t, r) {
        return Q(t) && (t = {
            overallReset: t,
            seriesType: Ow(t)
        }), t.uid = Co("stageHandler"), r && (t.visualType = r), t
    }, e
}();

function Cw(e) {
    e.overallReset(e.ecModel, e.api, e.payload)
}

function Aw(e) {
    return e.overallProgress && Lw
}

function Lw() {
    this.agent.dirty(), this.getDownstream().dirty()
}

function Iw() {
    this.agent && this.agent.dirty()
}

function Pw(e) {
    return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null
}

function Rw(e) {
    e.useClearVisual && e.data.clearAllVisual();
    var t = e.resetDefines = Tt(e.reset(e.model, e.ecModel, e.api, e.payload));
    return t.length > 1 ? V(t, function (r, n) {
        return Ep(n)
    }) : Ew
}
var Ew = Ep(0);

function Ep(e) {
    return function (t, r) {
        var n = r.data,
            a = r.resetDefines[e];
        if (a && a.dataEach)
            for (var i = t.start; i < t.end; i++) a.dataEach(n, i);
        else a && a.progress && a.progress(t, n)
    }
}

function kw(e) {
    return e.data.count()
}

function Ow(e) {
    oo = null;
    try {
        e(La, kp)
    } catch {}
    return oo
}
var La = {},
    kp = {},
    oo;
Op(La, Il);
Op(kp, lp);
La.eachSeriesByType = La.eachRawSeriesByType = function (e) {
    oo = e
};
La.eachComponent = function (e) {
    e.mainType === "series" && e.subType && (oo = e.subType)
};

function Op(e, t) {
    for (var r in t.prototype) e[r] = ee
}
var ev = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Nw = {
    color: ev,
    colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], ev
    ]
};
var Lt = "#B9B8CE",
    rv = "#100C2A",
    ui = function () {
        return {
            axisLine: {
                lineStyle: {
                    color: Lt
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#484753"
                }
            },
            splitArea: {
                areaStyle: {
                    color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
                }
            },
            minorSplitLine: {
                lineStyle: {
                    color: "#20203B"
                }
            }
        }
    },
    nv = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"],
    Np = {
        darkMode: !0,
        color: nv,
        backgroundColor: rv,
        axisPointer: {
            lineStyle: {
                color: "#817f91"
            },
            crossStyle: {
                color: "#817f91"
            },
            label: {
                color: "#fff"
            }
        },
        legend: {
            textStyle: {
                color: Lt
            }
        },
        textStyle: {
            color: Lt
        },
        title: {
            textStyle: {
                color: "#EEF1FA"
            },
            subtextStyle: {
                color: "#B9B8CE"
            }
        },
        toolbox: {
            iconStyle: {
                borderColor: Lt
            }
        },
        dataZoom: {
            borderColor: "#71708A",
            textStyle: {
                color: Lt
            },
            brushStyle: {
                color: "rgba(135,163,206,0.3)"
            },
            handleStyle: {
                color: "#353450",
                borderColor: "#C5CBE3"
            },
            moveHandleStyle: {
                color: "#B0B6C3",
                opacity: .3
            },
            fillerColor: "rgba(135,163,206,0.2)",
            emphasis: {
                handleStyle: {
                    borderColor: "#91B7F2",
                    color: "#4D587D"
                },
                moveHandleStyle: {
                    color: "#636D9A",
                    opacity: .7
                }
            },
            dataBackground: {
                lineStyle: {
                    color: "#71708A",
                    width: 1
                },
                areaStyle: {
                    color: "#71708A"
                }
            },
            selectedDataBackground: {
                lineStyle: {
                    color: "#87A3CE"
                },
                areaStyle: {
                    color: "#87A3CE"
                }
            }
        },
        visualMap: {
            textStyle: {
                color: Lt
            }
        },
        timeline: {
            lineStyle: {
                color: Lt
            },
            label: {
                color: Lt
            },
            controlStyle: {
                color: Lt,
                borderColor: Lt
            }
        },
        calendar: {
            itemStyle: {
                color: rv
            },
            dayLabel: {
                color: Lt
            },
            monthLabel: {
                color: Lt
            },
            yearLabel: {
                color: Lt
            }
        },
        timeAxis: ui(),
        logAxis: ui(),
        valueAxis: ui(),
        categoryAxis: ui(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: nv
        },
        gauge: {
            title: {
                color: Lt
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, "rgba(207,212,219,0.2)"]
                    ]
                }
            },
            axisLabel: {
                color: Lt
            },
            detail: {
                color: "#EEF1FA"
            }
        },
        candlestick: {
            itemStyle: {
                color: "#f64e56",
                color0: "#54ea92",
                borderColor: "#f64e56",
                borderColor0: "#54ea92"
            }
        }
    };
Np.categoryAxis.splitLine.show = !1;
const Fw = Np;
var Bw = function () {
        function e() {}
        return e.prototype.normalizeQuery = function (t) {
            var r = {},
                n = {},
                a = {};
            if (U(t)) {
                var i = Le(t);
                r.mainType = i.main || null, r.subType = i.sub || null
            } else {
                var o = ["Index", "Name", "Id"],
                    s = {
                        name: 1,
                        dataIndex: 1,
                        dataType: 1
                    };
                A(t, function (u, l) {
                    for (var f = !1, h = 0; h < o.length; h++) {
                        var c = o[h],
                            v = l.lastIndexOf(c);
                        if (v > 0 && v === l.length - c.length) {
                            var d = l.slice(0, v);
                            d !== "data" && (r.mainType = d, r[c.toLowerCase()] = u, f = !0)
                        }
                    }
                    s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (a[l] = u)
                })
            }
            return {
                cptQuery: r,
                dataQuery: n,
                otherQuery: a
            }
        }, e.prototype.filter = function (t, r) {
            var n = this.eventInfo;
            if (!n) return !0;
            var a = n.targetEl,
                i = n.packedEvent,
                o = n.model,
                s = n.view;
            if (!o || !s) return !0;
            var u = r.cptQuery,
                l = r.dataQuery;
            return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, i, "name") && f(l, i, "dataIndex") && f(l, i, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, r.otherQuery, a, i));

            function f(h, c, v, d) {
                return h[v] == null || c[d || v] === h[v]
            }
        }, e.prototype.afterTrigger = function () {
            this.eventInfo = null
        }, e
    }(),
    Vu = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    av = Vu.concat(["symbolKeepAspect"]),
    zw = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (e, t) {
            var r = e.getData();
            if (e.legendIcon && r.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual) return;
            for (var n = {}, a = {}, i = !1, o = 0; o < Vu.length; o++) {
                var s = Vu[o],
                    u = e.get(s);
                Q(u) ? (i = !0, a[s] = u) : n[s] = u
            }
            if (n.symbol = n.symbol || e.defaultSymbol, r.setVisual(O({
                    legendIcon: e.legendIcon || n.symbol,
                    symbolKeepAspect: e.get("symbolKeepAspect")
                }, n)), t.isSeriesFiltered(e)) return;
            var l = lt(a);

            function f(h, c) {
                for (var v = e.getRawValue(c), d = e.getDataParams(c), y = 0; y < l.length; y++) {
                    var p = l[y];
                    h.setItemVisual(c, p, a[p](v, d))
                }
            }
            return {
                dataEach: i ? f : null
            }
        }
    },
    Vw = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (e, t) {
            if (!e.hasSymbolVisual || t.isSeriesFiltered(e)) return;
            var r = e.getData();

            function n(a, i) {
                for (var o = a.getItemModel(i), s = 0; s < av.length; s++) {
                    var u = av[s],
                        l = o.getShallow(u, !0);
                    l != null && a.setItemVisual(i, u, l)
                }
            }
            return {
                dataEach: r.hasItemOption ? n : null
            }
        }
    };

function Gw(e, t, r) {
    switch (r) {
        case "color":
            var n = e.getItemVisual(t, "style");
            return n[e.getVisual("drawType")];
        case "opacity":
            return e.getItemVisual(t, "style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return e.getItemVisual(t, r)
    }
}

function Hw(e, t) {
    switch (t) {
        case "color":
            var r = e.getVisual("style");
            return r[e.getVisual("drawType")];
        case "opacity":
            return e.getVisual("style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return e.getVisual(t)
    }
}

function FD(e, t, r, n) {
    switch (r) {
        case "color":
            var a = e.ensureUniqueItemVisual(t, "style");
            a[e.getVisual("drawType")] = n, e.setItemVisual(t, "colorFromPalette", !1);
            break;
        case "opacity":
            e.ensureUniqueItemVisual(t, "style").opacity = n;
            break;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            e.setItemVisual(t, r, n);
            break
    }
}

function Ww(e, t) {
    function r(n, a) {
        var i = [];
        return n.eachComponent({
            mainType: "series",
            subType: e,
            query: a
        }, function (o) {
            i.push(o.seriesIndex)
        }), i
    }
    A([
        [e + "ToggleSelect", "toggleSelect"],
        [e + "Select", "select"],
        [e + "UnSelect", "unselect"]
    ], function (n) {
        t(n[0], function (a, i, o) {
            a = O({}, a), o.dispatchAction(O(a, {
                type: n[1],
                seriesIndex: r(i, a)
            }))
        })
    })
}

function hn(e, t, r, n, a) {
    var i = e + t;
    r.isSilent(i) || n.eachComponent({
        mainType: "series",
        subType: "pie"
    }, function (o) {
        for (var s = o.seriesIndex, u = o.option.selectedMap, l = a.selected, f = 0; f < l.length; f++)
            if (l[f].seriesIndex === s) {
                var h = o.getData(),
                    c = go(h, a.fromActionPayload);
                r.trigger(i, {
                    type: i,
                    seriesId: o.id,
                    name: B(c) ? h.getName(c[0]) : h.getName(c),
                    selected: U(u) ? u : O({}, u)
                })
            }
    })
}

function Uw(e, t, r) {
    e.on("selectchanged", function (n) {
        var a = r.getModel();
        n.isFromClick ? (hn("map", "selectchanged", t, a, n), hn("pie", "selectchanged", t, a, n)) : n.fromAction === "select" ? (hn("map", "selected", t, a, n), hn("pie", "selected", t, a, n)) : n.fromAction === "unselect" && (hn("map", "unselected", t, a, n), hn("pie", "unselected", t, a, n))
    })
}

function li(e, t, r) {
    for (var n; e && !(t(e) && (n = e, r));) e = e.__hostTarget || e.parent;
    return n
}
var Yw = Math.round(Math.random() * 9),
    $w = typeof Object.defineProperty == "function",
    Xw = function () {
        function e() {
            this._id = "__ec_inner_" + Yw++
        }
        return e.prototype.get = function (t) {
            return this._guard(t)[this._id]
        }, e.prototype.set = function (t, r) {
            var n = this._guard(t);
            return $w ? Object.defineProperty(n, this._id, {
                value: r,
                enumerable: !1,
                configurable: !0
            }) : n[this._id] = r, this
        }, e.prototype.delete = function (t) {
            return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
        }, e.prototype.has = function (t) {
            return !!this._guard(t)[this._id]
        }, e.prototype._guard = function (t) {
            if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
            return t
        }, e
    }(),
    qw = at.extend({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function (e, t) {
            var r = t.cx,
                n = t.cy,
                a = t.width / 2,
                i = t.height / 2;
            e.moveTo(r, n - i), e.lineTo(r + a, n + i), e.lineTo(r - a, n + i), e.closePath()
        }
    }),
    Zw = at.extend({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function (e, t) {
            var r = t.cx,
                n = t.cy,
                a = t.width / 2,
                i = t.height / 2;
            e.moveTo(r, n - i), e.lineTo(r + a, n), e.lineTo(r, n + i), e.lineTo(r - a, n), e.closePath()
        }
    }),
    Kw = at.extend({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function (e, t) {
            var r = t.x,
                n = t.y,
                a = t.width / 5 * 3,
                i = Math.max(a, t.height),
                o = a / 2,
                s = o * o / (i - o),
                u = n - i + o + s,
                l = Math.asin(s / o),
                f = Math.cos(l) * o,
                h = Math.sin(l),
                c = Math.cos(l),
                v = o * .6,
                d = o * .7;
            e.moveTo(r - f, u + s), e.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(r + f - h * v, u + s + c * v, r, n - d, r, n), e.bezierCurveTo(r, n - d, r - f + h * v, u + s + c * v, r - f, u + s), e.closePath()
        }
    }),
    Qw = at.extend({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function (e, t) {
            var r = t.height,
                n = t.width,
                a = t.x,
                i = t.y,
                o = n / 3 * 2;
            e.moveTo(a, i), e.lineTo(a + o, i + r), e.lineTo(a, i + r / 4 * 3), e.lineTo(a - o, i + r), e.lineTo(a, i), e.closePath()
        }
    }),
    Jw = {
        line: In,
        rect: re,
        roundRect: re,
        square: re,
        circle: Mo,
        diamond: Zw,
        pin: Kw,
        arrow: Qw,
        triangle: qw
    },
    jw = {
        line: function (e, t, r, n, a) {
            a.x1 = e, a.y1 = t + n / 2, a.x2 = e + r, a.y2 = t + n / 2
        },
        rect: function (e, t, r, n, a) {
            a.x = e, a.y = t, a.width = r, a.height = n
        },
        roundRect: function (e, t, r, n, a) {
            a.x = e, a.y = t, a.width = r, a.height = n, a.r = Math.min(r, n) / 4
        },
        square: function (e, t, r, n, a) {
            var i = Math.min(r, n);
            a.x = e, a.y = t, a.width = i, a.height = i
        },
        circle: function (e, t, r, n, a) {
            a.cx = e + r / 2, a.cy = t + n / 2, a.r = Math.min(r, n) / 2
        },
        diamond: function (e, t, r, n, a) {
            a.cx = e + r / 2, a.cy = t + n / 2, a.width = r, a.height = n
        },
        pin: function (e, t, r, n, a) {
            a.x = e + r / 2, a.y = t + n / 2, a.width = r, a.height = n
        },
        arrow: function (e, t, r, n, a) {
            a.x = e + r / 2, a.y = t + n / 2, a.width = r, a.height = n
        },
        triangle: function (e, t, r, n, a) {
            a.cx = e + r / 2, a.cy = t + n / 2, a.width = r, a.height = n
        }
    },
    Gu = {};
A(Jw, function (e, t) {
    Gu[t] = new e
});
var tb = at.extend({
    type: "symbol",
    shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    calculateTextPosition: function (e, t, r) {
        var n = Yi(e, t, r),
            a = this.shape;
        return a && a.symbolType === "pin" && t.position === "inside" && (n.y = r.y + r.height * .4), n
    },
    buildPath: function (e, t, r) {
        var n = t.symbolType;
        if (n !== "none") {
            var a = Gu[n];
            a || (n = "rect", a = Gu[n]), jw[n](t.x, t.y, t.width, t.height, a.shape), a.buildPath(e, a.shape, r)
        }
    }
});

function eb(e, t) {
    if (this.type !== "image") {
        var r = this.style;
        this.__isEmptyBrush ? (r.stroke = e, r.fill = t || "#fff", r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = e : r.fill = e, this.markRedraw()
    }
}

function zl(e, t, r, n, a, i, o) {
    var s = e.indexOf("empty") === 0;
    s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
    var u;
    return e.indexOf("image://") === 0 ? u = Ed(e.slice(8), new ot(t, r, n, a), o ? "center" : "cover") : e.indexOf("path://") === 0 ? u = gl(e.slice(7), {}, new ot(t, r, n, a), o ? "center" : "cover") : u = new tb({
        shape: {
            symbolType: e,
            x: t,
            y: r,
            width: n,
            height: a
        }
    }), u.__isEmptyBrush = s, u.setColor = eb, i && u.setColor(i), u
}

function rb(e) {
    return B(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0]
}

function nb(e, t) {
    if (e != null) return B(e) || (e = [e, e]), [rt(e[0], t[0]) || 0, rt(X(e[1], e[0]), t[1]) || 0]
}

function Br(e) {
    return isFinite(e)
}

function ab(e, t, r) {
    var n = t.x == null ? 0 : t.x,
        a = t.x2 == null ? 1 : t.x2,
        i = t.y == null ? 0 : t.y,
        o = t.y2 == null ? 0 : t.y2;
    t.global || (n = n * r.width + r.x, a = a * r.width + r.x, i = i * r.height + r.y, o = o * r.height + r.y), n = Br(n) ? n : 0, a = Br(a) ? a : 1, i = Br(i) ? i : 0, o = Br(o) ? o : 0;
    var s = e.createLinearGradient(n, i, a, o);
    return s
}

function ib(e, t, r) {
    var n = r.width,
        a = r.height,
        i = Math.min(n, a),
        o = t.x == null ? .5 : t.x,
        s = t.y == null ? .5 : t.y,
        u = t.r == null ? .5 : t.r;
    t.global || (o = o * n + r.x, s = s * a + r.y, u = u * i), o = Br(o) ? o : .5, s = Br(s) ? s : .5, u = u >= 0 && Br(u) ? u : .5;
    var l = e.createRadialGradient(o, s, 0, o, s, u);
    return l
}

function iv(e, t, r) {
    for (var n = t.type === "radial" ? ib(e, t, r) : ab(e, t, r), a = t.colorStops, i = 0; i < a.length; i++) n.addColorStop(a[i].offset, a[i].color);
    return n
}

function ob(e, t) {
    if (e === t || !e && !t) return !1;
    if (!e || !t || e.length !== t.length) return !0;
    for (var r = 0; r < e.length; r++)
        if (e[r] !== t[r]) return !0;
    return !1
}

function fi(e) {
    return parseInt(e, 10)
}

function BD(e, t, r) {
    var n = ["width", "height"][t],
        a = ["clientWidth", "clientHeight"][t],
        i = ["paddingLeft", "paddingTop"][t],
        o = ["paddingRight", "paddingBottom"][t];
    if (r[n] != null && r[n] !== "auto") return parseFloat(r[n]);
    var s = document.defaultView.getComputedStyle(e);
    return (e[a] || fi(s[n]) || fi(e.style[n])) - (fi(s[i]) || 0) - (fi(s[o]) || 0) | 0
}

function sb(e, t) {
    return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : it(e) ? [e] : B(e) ? e : null
}

function Fp(e) {
    var t = e.style,
        r = t.lineDash && t.lineWidth > 0 && sb(t.lineDash, t.lineWidth),
        n = t.lineDashOffset;
    if (r) {
        var a = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
        a && a !== 1 && (r = V(r, function (i) {
            return i / a
        }), n /= a)
    }
    return [r, n]
}
var ub = new Yr(!0);

function so(e) {
    var t = e.stroke;
    return !(t == null || t === "none" || !(e.lineWidth > 0))
}

function ov(e) {
    return typeof e == "string" && e !== "none"
}

function uo(e) {
    var t = e.fill;
    return t != null && t !== "none"
}

function sv(e, t) {
    if (t.fillOpacity != null && t.fillOpacity !== 1) {
        var r = e.globalAlpha;
        e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = r
    } else e.fill()
}

function uv(e, t) {
    if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
        var r = e.globalAlpha;
        e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = r
    } else e.stroke()
}

function lv(e, t, r) {
    var n = Xc(t.image, t.__image, r);
    if (_o(n)) {
        var a = e.createPattern(n, t.repeat || "repeat");
        if (typeof DOMMatrix == "function" && a && a.setTransform) {
            var i = new DOMMatrix;
            i.translateSelf(t.x || 0, t.y || 0), i.rotateSelf(0, 0, (t.rotation || 0) * Mi), i.scaleSelf(t.scaleX || 1, t.scaleY || 1), a.setTransform(i)
        }
        return a
    }
}

function lb(e, t, r, n) {
    var a, i = so(r),
        o = uo(r),
        s = r.strokePercent,
        u = s < 1,
        l = !t.path;
    (!t.silent || u) && l && t.createPathProxy();
    var f = t.path || ub,
        h = t.__dirty;
    if (!n) {
        var c = r.fill,
            v = r.stroke,
            d = o && !!c.colorStops,
            y = i && !!v.colorStops,
            p = o && !!c.image,
            g = i && !!v.image,
            m = void 0,
            _ = void 0,
            S = void 0,
            b = void 0,
            w = void 0;
        (d || y) && (w = t.getBoundingRect()), d && (m = h ? iv(e, c, w) : t.__canvasFillGradient, t.__canvasFillGradient = m), y && (_ = h ? iv(e, v, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), p && (S = h || !t.__canvasFillPattern ? lv(e, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), g && (b = h || !t.__canvasStrokePattern ? lv(e, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? e.fillStyle = m : p && (S ? e.fillStyle = S : o = !1), y ? e.strokeStyle = _ : g && (b ? e.strokeStyle = b : i = !1)
    }
    var x = t.getGlobalScale();
    f.setScale(x[0], x[1], t.segmentIgnoreThreshold);
    var T, D;
    e.setLineDash && r.lineDash && (a = Fp(t), T = a[0], D = a[1]);
    var C = !0;
    (l || h & dn) && (f.setDPR(e.dpr), u ? f.setContext(null) : (f.setContext(e), C = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), C && f.rebuildPath(e, u ? s : 1), T && (e.setLineDash(T), e.lineDashOffset = D), n || (r.strokeFirst ? (i && uv(e, r), o && sv(e, r)) : (o && sv(e, r), i && uv(e, r))), T && e.setLineDash([])
}

function fb(e, t, r) {
    var n = t.__image = Xc(r.image, t.__image, t, t.onload);
    if (!(!n || !_o(n))) {
        var a = r.x || 0,
            i = r.y || 0,
            o = t.getWidth(),
            s = t.getHeight(),
            u = n.width / n.height;
        if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
            var l = r.sx || 0,
                f = r.sy || 0;
            e.drawImage(n, l, f, r.sWidth, r.sHeight, a, i, o, s)
        } else if (r.sx && r.sy) {
            var l = r.sx,
                f = r.sy,
                h = o - l,
                c = s - f;
            e.drawImage(n, l, f, h, c, a, i, o, s)
        } else e.drawImage(n, a, i, o, s)
    }
}

function hb(e, t, r) {
    var n, a = r.text;
    if (a != null && (a += ""), a) {
        e.font = r.font || Wr, e.textAlign = r.textAlign, e.textBaseline = r.textBaseline;
        var i = void 0,
            o = void 0;
        e.setLineDash && r.lineDash && (n = Fp(t), i = n[0], o = n[1]), i && (e.setLineDash(i), e.lineDashOffset = o), r.strokeFirst ? (so(r) && e.strokeText(a, r.x, r.y), uo(r) && e.fillText(a, r.x, r.y)) : (uo(r) && e.fillText(a, r.x, r.y), so(r) && e.strokeText(a, r.x, r.y)), i && e.setLineDash([])
    }
}
var fv = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    hv = [
        ["lineCap", "butt"],
        ["lineJoin", "miter"],
        ["miterLimit", 10]
    ];

function Bp(e, t, r, n, a) {
    var i = !1;
    if (!n && (r = r || {}, t === r)) return !1;
    if (n || t.opacity !== r.opacity) {
        Ft(e, a), i = !0;
        var o = Math.max(Math.min(t.opacity, 1), 0);
        e.globalAlpha = isNaN(o) ? Vr.opacity : o
    }(n || t.blend !== r.blend) && (i || (Ft(e, a), i = !0), e.globalCompositeOperation = t.blend || Vr.blend);
    for (var s = 0; s < fv.length; s++) {
        var u = fv[s];
        (n || t[u] !== r[u]) && (i || (Ft(e, a), i = !0), e[u] = e.dpr * (t[u] || 0))
    }
    return (n || t.shadowColor !== r.shadowColor) && (i || (Ft(e, a), i = !0), e.shadowColor = t.shadowColor || Vr.shadowColor), i
}

function vv(e, t, r, n, a) {
    var i = Ia(t, a.inHover),
        o = n ? null : r && Ia(r, a.inHover) || {};
    if (i === o) return !1;
    var s = Bp(e, i, o, n, a);
    if ((n || i.fill !== o.fill) && (s || (Ft(e, a), s = !0), ov(i.fill) && (e.fillStyle = i.fill)), (n || i.stroke !== o.stroke) && (s || (Ft(e, a), s = !0), ov(i.stroke) && (e.strokeStyle = i.stroke)), (n || i.opacity !== o.opacity) && (s || (Ft(e, a), s = !0), e.globalAlpha = i.opacity == null ? 1 : i.opacity), t.hasStroke()) {
        var u = i.lineWidth,
            l = u / (i.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
        e.lineWidth !== l && (s || (Ft(e, a), s = !0), e.lineWidth = l)
    }
    for (var f = 0; f < hv.length; f++) {
        var h = hv[f],
            c = h[0];
        (n || i[c] !== o[c]) && (s || (Ft(e, a), s = !0), e[c] = i[c] || h[1])
    }
    return s
}

function vb(e, t, r, n, a) {
    return Bp(e, Ia(t, a.inHover), r && Ia(r, a.inHover), n, a)
}

function zp(e, t) {
    var r = t.transform,
        n = e.dpr || 1;
    r ? e.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : e.setTransform(n, 0, 0, n, 0, 0)
}

function cb(e, t, r) {
    for (var n = !1, a = 0; a < e.length; a++) {
        var i = e[a];
        n = n || i.isZeroArea(), zp(t, i), t.beginPath(), i.buildPath(t, i.shape), t.clip()
    }
    r.allClipped = n
}

function db(e, t) {
    return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t)
}
var cv = 1,
    dv = 2,
    pv = 3,
    gv = 4;

function pb(e) {
    var t = uo(e),
        r = so(e);
    return !(e.lineDash || !(+t ^ +r) || t && typeof e.fill != "string" || r && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1)
}

function Ft(e, t) {
    t.batchFill && e.fill(), t.batchStroke && e.stroke(), t.batchFill = "", t.batchStroke = ""
}

function Ia(e, t) {
    return t && e.__hoverStyle || e.style
}

function gb(e, t) {
    Hu(e, t, {
        inHover: !1,
        viewWidth: 0,
        viewHeight: 0
    }, !0)
}

function Hu(e, t, r, n) {
    var a = t.transform;
    if (!t.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
        t.__dirty &= ~De, t.__isRendered = !1;
        return
    }
    var i = t.__clipPaths,
        o = r.prevElClipPaths,
        s = !1,
        u = !1;
    if ((!o || ob(i, o)) && (o && o.length && (Ft(e, r), e.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), i && i.length && (Ft(e, r), e.save(), cb(i, e, r), s = !0), r.prevElClipPaths = i), r.allClipped) {
        t.__isRendered = !1;
        return
    }
    t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
    var l = r.prevEl;
    l || (u = s = !0);
    var f = t instanceof at && t.autoBatch && pb(t.style);
    s || db(a, l.transform) ? (Ft(e, r), zp(e, t)) : f || Ft(e, r);
    var h = Ia(t, r.inHover);
    t instanceof at ? (r.lastDrawType !== cv && (u = !0, r.lastDrawType = cv), vv(e, t, l, u, r), (!f || !r.batchFill && !r.batchStroke) && e.beginPath(), lb(e, t, h, f), f && (r.batchFill = h.fill || "", r.batchStroke = h.stroke || "")) : t instanceof bu ? (r.lastDrawType !== pv && (u = !0, r.lastDrawType = pv), vv(e, t, l, u, r), hb(e, t, h)) : t instanceof qr ? (r.lastDrawType !== dv && (u = !0, r.lastDrawType = dv), vb(e, t, l, u, r), fb(e, t, h)) : t.getTemporalDisplayables && (r.lastDrawType !== gv && (u = !0, r.lastDrawType = gv), yb(e, t, r)), f && n && Ft(e, r), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), r.prevEl = t, t.__dirty = 0, t.__isRendered = !0
}

function yb(e, t, r) {
    var n = t.getDisplayables(),
        a = t.getTemporalDisplayables();
    e.save();
    var i = {
            prevElClipPaths: null,
            prevEl: null,
            allClipped: !1,
            viewWidth: r.viewWidth,
            viewHeight: r.viewHeight,
            inHover: r.inHover
        },
        o, s;
    for (o = t.getCursor(), s = n.length; o < s; o++) {
        var u = n[o];
        u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Hu(e, u, i, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), i.prevEl = u
    }
    for (var l = 0, f = a.length; l < f; l++) {
        var u = a[l];
        u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Hu(e, u, i, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), i.prevEl = u
    }
    t.clearTemporalDisplayables(), t.notClear = !0, e.restore()
}
var ks = new Xw,
    yv = new Ea(100),
    mv = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];

function _v(e, t) {
    if (e === "none") return null;
    var r = t.getDevicePixelRatio(),
        n = t.getZr(),
        a = n.painter.type === "svg";
    e.dirty && ks.delete(e);
    var i = ks.get(e);
    if (i) return i;
    var o = j(e, {
        symbol: "rect",
        symbolSize: 1,
        symbolKeepAspect: !0,
        color: "rgba(0, 0, 0, 0.2)",
        backgroundColor: null,
        dashArrayX: 5,
        dashArrayY: 5,
        rotation: 0,
        maxTileWidth: 512,
        maxTileHeight: 512
    });
    o.backgroundColor === "none" && (o.backgroundColor = null);
    var s = {
        repeat: "repeat"
    };
    return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = a ? 1 : 1 / r, ks.set(e, s), e.dirty = !1, s;

    function u(l) {
        for (var f = [r], h = !0, c = 0; c < mv.length; ++c) {
            var v = o[mv[c]];
            if (v != null && !B(v) && !U(v) && !it(v) && typeof v != "boolean") {
                h = !1;
                break
            }
            f.push(v)
        }
        var d;
        if (h) {
            d = f.join(",") + (a ? "-svg" : "");
            var y = yv.get(d);
            y && (a ? l.svgElement = y : l.image = y)
        }
        var p = Gp(o.dashArrayX),
            g = mb(o.dashArrayY),
            m = Vp(o.symbol),
            _ = _b(p),
            S = Hp(g),
            b = !a && Ra.createCanvas(),
            w = a && {
                tag: "g",
                attrs: {},
                key: "dcl",
                children: []
            },
            x = D(),
            T;
        b && (b.width = x.width * r, b.height = x.height * r, T = b.getContext("2d")), C(), h && yv.put(d, b || w), l.image = b, l.svgElement = w, l.svgWidth = x.width, l.svgHeight = x.height;

        function D() {
            for (var M = 1, L = 0, P = _.length; L < P; ++L) M = kf(M, _[L]);
            for (var I = 1, L = 0, P = m.length; L < P; ++L) I = kf(I, m[L].length);
            M *= I;
            var R = S * _.length * m.length;
            return {
                width: Math.max(1, Math.min(M, o.maxTileWidth)),
                height: Math.max(1, Math.min(R, o.maxTileHeight))
            }
        }

        function C() {
            T && (T.clearRect(0, 0, b.width, b.height), o.backgroundColor && (T.fillStyle = o.backgroundColor, T.fillRect(0, 0, b.width, b.height)));
            for (var M = 0, L = 0; L < g.length; ++L) M += g[L];
            if (M <= 0) return;
            for (var P = -S, I = 0, R = 0, E = 0; P < x.height;) {
                if (I % 2 === 0) {
                    for (var z = R / 2 % m.length, k = 0, N = 0, F = 0; k < x.width * 2;) {
                        for (var $ = 0, L = 0; L < p[E].length; ++L) $ += p[E][L];
                        if ($ <= 0) break;
                        if (N % 2 === 0) {
                            var q = (1 - o.symbolSize) * .5,
                                st = k + p[E][N] * q,
                                yt = P + g[I] * q,
                                Gt = p[E][N] * o.symbolSize,
                                Se = g[I] * o.symbolSize,
                                Xt = F / 2 % m[z].length;
                            Ht(st, yt, Gt, Se, m[z][Xt])
                        }
                        k += p[E][N], ++F, ++N, N === p[E].length && (N = 0)
                    }++E, E === p.length && (E = 0)
                }
                P += g[I], ++R, ++I, I === g.length && (I = 0)
            }

            function Ht(St, ht, H, Z, we) {
                var mt = a ? 1 : r,
                    Xe = zl(we, St * mt, ht * mt, H * mt, Z * mt, o.color, o.symbolKeepAspect);
                if (a) {
                    var Ne = n.painter.renderOneToVNode(Xe);
                    Ne && w.children.push(Ne)
                } else gb(T, Xe)
            }
        }
    }
}

function Vp(e) {
    if (!e || e.length === 0) return [
        ["rect"]
    ];
    if (U(e)) return [
        [e]
    ];
    for (var t = !0, r = 0; r < e.length; ++r)
        if (!U(e[r])) {
            t = !1;
            break
        } if (t) return Vp([e]);
    for (var n = [], r = 0; r < e.length; ++r) U(e[r]) ? n.push([e[r]]) : n.push(e[r]);
    return n
}

function Gp(e) {
    if (!e || e.length === 0) return [
        [0, 0]
    ];
    if (it(e)) {
        var t = Math.ceil(e);
        return [
            [t, t]
        ]
    }
    for (var r = !0, n = 0; n < e.length; ++n)
        if (!it(e[n])) {
            r = !1;
            break
        } if (r) return Gp([e]);
    for (var a = [], n = 0; n < e.length; ++n)
        if (it(e[n])) {
            var t = Math.ceil(e[n]);
            a.push([t, t])
        } else {
            var t = V(e[n], function (s) {
                return Math.ceil(s)
            });
            t.length % 2 === 1 ? a.push(t.concat(t)) : a.push(t)
        } return a
}

function mb(e) {
    if (!e || typeof e == "object" && e.length === 0) return [0, 0];
    if (it(e)) {
        var t = Math.ceil(e);
        return [t, t]
    }
    var r = V(e, function (n) {
        return Math.ceil(n)
    });
    return e.length % 2 ? r.concat(r) : r
}

function _b(e) {
    return V(e, function (t) {
        return Hp(t)
    })
}

function Hp(e) {
    for (var t = 0, r = 0; r < e.length; ++r) t += e[r];
    return e.length % 2 === 1 ? t * 2 : t
}

function Sb(e, t) {
    e.eachRawSeries(function (r) {
        if (!e.isSeriesFiltered(r)) {
            var n = r.getData();
            n.hasItemVisual() && n.each(function (o) {
                var s = n.getItemVisual(o, "decal");
                if (s) {
                    var u = n.ensureUniqueItemVisual(o, "style");
                    u.decal = _v(s, t)
                }
            });
            var a = n.getVisual("decal");
            if (a) {
                var i = n.getVisual("style");
                i.decal = _v(a, t)
            }
        }
    })
}
var wb = new Ue;
const fe = wb;
var Wp = {};

function bb(e, t) {
    Wp[e] = t
}

function Tb(e) {
    return Wp[e]
}
var Mb = 1,
    xb = 800,
    Db = 900,
    Cb = 1e3,
    Ab = 2e3,
    Lb = 5e3,
    Up = 1e3,
    Ib = 1100,
    Vl = 2e3,
    Yp = 3e3,
    Pb = 4e3,
    Oo = 4500,
    Rb = 4600,
    Eb = 5e3,
    kb = 6e3,
    $p = 7e3,
    Ob = {
        PROCESSOR: {
            FILTER: Cb,
            SERIES_FILTER: xb,
            STATISTIC: Lb
        },
        VISUAL: {
            LAYOUT: Up,
            PROGRESSIVE_LAYOUT: Ib,
            GLOBAL: Vl,
            CHART: Yp,
            POST_CHART_LAYOUT: Rb,
            COMPONENT: Pb,
            BRUSH: Eb,
            CHART_ITEM: Oo,
            ARIA: kb,
            DECAL: $p
        }
    },
    xt = "__flagInMainProcess",
    Et = "__pendingUpdate",
    Os = "__needsUpdateStatus",
    Sv = /^[a-zA-Z0-9_]+$/,
    Ns = "__connectUpdateStatus",
    wv = 0,
    Nb = 1,
    Fb = 2;

function Xp(e) {
    return function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        if (this.isDisposed()) {
            this.id;
            return
        }
        return Zp(this, e, t)
    }
}

function qp(e) {
    return function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return Zp(this, e, t)
    }
}

function Zp(e, t, r) {
    return r[0] = r[0] && r[0].toLowerCase(), Ue.prototype[t].apply(e, r)
}
var Kp = function (e) {
        G(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t
    }(Ue),
    Qp = Kp.prototype;
Qp.on = qp("on");
Qp.off = qp("off");
var vn, Fs, hi, Je, Bs, zs, Vs, qn, Zn, bv, Tv, Gs, Mv, vi, xv, Jp, qt, Dv, jp = function (e) {
        G(t, e);

        function t(r, n, a) {
            var i = e.call(this, new Bw) || this;
            i._chartsViews = [], i._chartsMap = {}, i._componentsViews = [], i._componentsMap = {}, i._pendingActions = [], a = a || {}, U(n) && (n = tg[n]), i._dom = r;
            var o = "canvas",
                s = "auto",
                u = !1;
            a.ssr && Ny(function (c) {
                var v = gt(c),
                    d = v.dataIndex;
                if (d != null) {
                    var y = K();
                    return y.set("series_index", v.seriesIndex), y.set("data_index", d), v.ssrType && y.set("ssr_type", v.ssrType), y
                }
            });
            var l = i._zr = Rf(r, {
                renderer: a.renderer || o,
                devicePixelRatio: a.devicePixelRatio,
                width: a.width,
                height: a.height,
                ssr: a.ssr,
                useDirtyRect: X(a.useDirtyRect, u),
                useCoarsePointer: X(a.useCoarsePointer, s),
                pointerSize: a.pointerSize
            });
            i._ssr = a.ssr, i._throttledZrFlush = Bl(_t(l.flush, l), 17), n = J(n), n && hp(n, !0), i._theme = n, i._locale = V1(a.locale || Hd), i._coordSysMgr = new Pl;
            var f = i._api = xv(i);

            function h(c, v) {
                return c.__prio - v.__prio
            }
            return xi(fo, h), xi(Wu, h), i._scheduler = new Rp(i, f, Wu, fo), i._messageCenter = new Kp, i._initEvents(), i.resize = _t(i.resize, i), l.animation.on("frame", i._onframe, i), bv(l, i), Tv(l, i), zi(i), i
        }
        return t.prototype._onframe = function () {
            if (!this._disposed) {
                Dv(this);
                var r = this._scheduler;
                if (this[Et]) {
                    var n = this[Et].silent;
                    this[xt] = !0;
                    try {
                        vn(this), Je.update.call(this, null, this[Et].updateParams)
                    } catch (u) {
                        throw this[xt] = !1, this[Et] = null, u
                    }
                    this._zr.flush(), this[xt] = !1, this[Et] = null, qn.call(this, n), Zn.call(this, n)
                } else if (r.unfinished) {
                    var a = Mb,
                        i = this._model,
                        o = this._api;
                    r.unfinished = !1;
                    do {
                        var s = +new Date;
                        r.performSeriesTasks(i), r.performDataProcessorTasks(i), zs(this, i), r.performVisualTasks(i), vi(this, this._model, o, "remain", {}), a -= +new Date - s
                    } while (a > 0 && r.unfinished);
                    r.unfinished || this._zr.flush()
                }
            }
        }, t.prototype.getDom = function () {
            return this._dom
        }, t.prototype.getId = function () {
            return this.id
        }, t.prototype.getZr = function () {
            return this._zr
        }, t.prototype.isSSR = function () {
            return this._ssr
        }, t.prototype.setOption = function (r, n, a) {
            if (!this[xt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                var i, o, s;
                if (Y(n) && (a = n.lazyUpdate, i = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[xt] = !0, !this._model || n) {
                    var u = new SS(this._api),
                        l = this._theme,
                        f = this._model = new Il;
                    f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u)
                }
                this._model.setOption(r, {
                    replaceMerge: o
                }, Uu);
                var h = {
                    seriesTransition: s,
                    optionChanged: !0
                };
                if (a) this[Et] = {
                    silent: i,
                    updateParams: h
                }, this[xt] = !1, this.getZr().wakeUp();
                else {
                    try {
                        vn(this), Je.update.call(this, null, h)
                    } catch (c) {
                        throw this[Et] = null, this[xt] = !1, c
                    }
                    this._ssr || this._zr.flush(), this[Et] = null, this[xt] = !1, qn.call(this, i), Zn.call(this, i)
                }
            }
        }, t.prototype.setTheme = function () {}, t.prototype.getModel = function () {
            return this._model
        }, t.prototype.getOption = function () {
            return this._model && this._model.getOption()
        }, t.prototype.getWidth = function () {
            return this._zr.getWidth()
        }, t.prototype.getHeight = function () {
            return this._zr.getHeight()
        }, t.prototype.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || et.hasGlobalWindow && window.devicePixelRatio || 1
        }, t.prototype.getRenderedCanvas = function (r) {
            return this.renderToCanvas(r)
        }, t.prototype.renderToCanvas = function (r) {
            r = r || {};
            var n = this._zr.painter;
            return n.getRenderedCanvas({
                backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
            })
        }, t.prototype.renderToSVGString = function (r) {
            r = r || {};
            var n = this._zr.painter;
            return n.renderToString({
                useViewBox: r.useViewBox
            })
        }, t.prototype.getSvgDataURL = function () {
            if (et.svgSupported) {
                var r = this._zr,
                    n = r.storage.getDisplayList();
                return A(n, function (a) {
                    a.stopAnimation(null, !0)
                }), r.painter.toDataURL()
            }
        }, t.prototype.getDataURL = function (r) {
            if (this._disposed) {
                this.id;
                return
            }
            r = r || {};
            var n = r.excludeComponents,
                a = this._model,
                i = [],
                o = this;
            A(n, function (u) {
                a.eachComponent({
                    mainType: u
                }, function (l) {
                    var f = o._componentsMap[l.__viewId];
                    f.group.ignore || (i.push(f), f.group.ignore = !0)
                })
            });
            var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
            return A(i, function (u) {
                u.group.ignore = !1
            }), s
        }, t.prototype.getConnectedDataURL = function (r) {
            if (this._disposed) {
                this.id;
                return
            }
            var n = r.type === "svg",
                a = this.group,
                i = Math.min,
                o = Math.max,
                s = 1 / 0;
            if (Cv[a]) {
                var u = s,
                    l = s,
                    f = -s,
                    h = -s,
                    c = [],
                    v = r && r.pixelRatio || this.getDevicePixelRatio();
                A(Sa, function (_, S) {
                    if (_.group === a) {
                        var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(J(r)),
                            w = _.getDom().getBoundingClientRect();
                        u = i(w.left, u), l = i(w.top, l), f = o(w.right, f), h = o(w.bottom, h), c.push({
                            dom: b,
                            left: w.left,
                            top: w.top
                        })
                    }
                }), u *= v, l *= v, f *= v, h *= v;
                var d = f - u,
                    y = h - l,
                    p = Ra.createCanvas(),
                    g = Rf(p, {
                        renderer: n ? "svg" : "canvas"
                    });
                if (g.resize({
                        width: d,
                        height: y
                    }), n) {
                    var m = "";
                    return A(c, function (_) {
                        var S = _.left - u,
                            b = _.top - l;
                        m += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>"
                    }), g.painter.getSvgRoot().innerHTML = m, r.connectedBackgroundColor && g.painter.setBackgroundColor(r.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL()
                } else return r.connectedBackgroundColor && g.add(new re({
                    shape: {
                        x: 0,
                        y: 0,
                        width: d,
                        height: y
                    },
                    style: {
                        fill: r.connectedBackgroundColor
                    }
                })), A(c, function (_) {
                    var S = new qr({
                        style: {
                            x: _.left * v - u,
                            y: _.top * v - l,
                            image: _.dom
                        }
                    });
                    g.add(S)
                }), g.refreshImmediately(), p.toDataURL("image/" + (r && r.type || "png"))
            } else return this.getDataURL(r)
        }, t.prototype.convertToPixel = function (r, n) {
            return Bs(this, "convertToPixel", r, n)
        }, t.prototype.convertFromPixel = function (r, n) {
            return Bs(this, "convertFromPixel", r, n)
        }, t.prototype.containPixel = function (r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            var a = this._model,
                i, o = us(a, r);
            return A(o, function (s, u) {
                u.indexOf("Models") >= 0 && A(s, function (l) {
                    var f = l.coordinateSystem;
                    if (f && f.containPoint) i = i || !!f.containPoint(n);
                    else if (u === "seriesModels") {
                        var h = this._chartsMap[l.__viewId];
                        h && h.containPoint && (i = i || h.containPoint(n, l))
                    }
                }, this)
            }, this), !!i
        }, t.prototype.getVisual = function (r, n) {
            var a = this._model,
                i = us(a, r, {
                    defaultMainType: "series"
                }),
                o = i.seriesModel,
                s = o.getData(),
                u = i.hasOwnProperty("dataIndexInside") ? i.dataIndexInside : i.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(i.dataIndex) : null;
            return u != null ? Gw(s, u, n) : Hw(s, n)
        }, t.prototype.getViewOfComponentModel = function (r) {
            return this._componentsMap[r.__viewId]
        }, t.prototype.getViewOfSeriesModel = function (r) {
            return this._chartsMap[r.__viewId]
        }, t.prototype._initEvents = function () {
            var r = this;
            A(Bb, function (n) {
                var a = function (i) {
                    var o = r.getModel(),
                        s = i.target,
                        u, l = n === "globalout";
                    if (l ? u = {} : s && li(s, function (d) {
                            var y = gt(d);
                            if (y && y.dataIndex != null) {
                                var p = y.dataModel || o.getSeriesByIndex(y.seriesIndex);
                                return u = p && p.getDataParams(y.dataIndex, y.dataType, s) || {}, !0
                            } else if (y.eventData) return u = O({}, y.eventData), !0
                        }, !0), u) {
                        var f = u.componentType,
                            h = u.componentIndex;
                        (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
                        var c = f && h != null && o.getComponent(f, h),
                            v = c && r[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
                        u.event = i, u.type = n, r._$eventProcessor.eventInfo = {
                            targetEl: s,
                            packedEvent: u,
                            model: c,
                            view: v
                        }, r.trigger(n, u)
                    }
                };
                a.zrEventfulCallAtLast = !0, r._zr.on(n, a, r)
            }), A(_a, function (n, a) {
                r._messageCenter.on(a, function (i) {
                    this.trigger(a, i)
                }, r)
            }), A(["selectchanged"], function (n) {
                r._messageCenter.on(n, function (a) {
                    this.trigger(n, a)
                }, r)
            }), Uw(this._messageCenter, this, this._api)
        }, t.prototype.isDisposed = function () {
            return this._disposed
        }, t.prototype.clear = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this.setOption({
                series: []
            }, !0)
        }, t.prototype.dispose = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this._disposed = !0;
            var r = this.getDom();
            r && Uc(this.getDom(), Hl, "");
            var n = this,
                a = n._api,
                i = n._model;
            A(n._componentsViews, function (o) {
                o.dispose(i, a)
            }), A(n._chartsViews, function (o) {
                o.dispose(i, a)
            }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Sa[n.id]
        }, t.prototype.resize = function (r) {
            if (!this[xt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                this._zr.resize(r);
                var n = this._model;
                if (this._loadingFX && this._loadingFX.resize(), !!n) {
                    var a = n.resetOption("media"),
                        i = r && r.silent;
                    this[Et] && (i == null && (i = this[Et].silent), a = !0, this[Et] = null), this[xt] = !0;
                    try {
                        a && vn(this), Je.update.call(this, {
                            type: "resize",
                            animation: O({
                                duration: 0
                            }, r && r.animation)
                        })
                    } catch (o) {
                        throw this[xt] = !1, o
                    }
                    this[xt] = !1, qn.call(this, i), Zn.call(this, i)
                }
            }
        }, t.prototype.showLoading = function (r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            if (Y(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !!Yu[r]) {
                var a = Yu[r](this._api, n),
                    i = this._zr;
                this._loadingFX = a, i.add(a)
            }
        }, t.prototype.hideLoading = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, t.prototype.makeActionFromEvent = function (r) {
            var n = O({}, r);
            return n.type = _a[r.type], n
        }, t.prototype.dispatchAction = function (r, n) {
            if (this._disposed) {
                this.id;
                return
            }
            if (Y(n) || (n = {
                    silent: !!n
                }), !!lo[r.type] && this._model) {
                if (this[xt]) {
                    this._pendingActions.push(r);
                    return
                }
                var a = n.silent;
                Vs.call(this, r, a);
                var i = n.flush;
                i ? this._zr.flush() : i !== !1 && et.browser.weChat && this._throttledZrFlush(), qn.call(this, a), Zn.call(this, a)
            }
        }, t.prototype.updateLabelLayout = function () {
            fe.trigger("series:layoutlabels", this._model, this._api, {
                updatedSeries: []
            })
        }, t.prototype.appendData = function (r) {
            if (this._disposed) {
                this.id;
                return
            }
            var n = r.seriesIndex,
                a = this.getModel(),
                i = a.getSeriesByIndex(n);
            i.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp()
        }, t.internalField = function () {
            vn = function (h) {
                var c = h._scheduler;
                c.restorePipelines(h._model), c.prepareStageTasks(), Fs(h, !0), Fs(h, !1), c.plan()
            }, Fs = function (h, c) {
                for (var v = h._model, d = h._scheduler, y = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, m = h._api, _ = 0; _ < y.length; _++) y[_].__alive = !1;
                c ? v.eachComponent(function (w, x) {
                    w !== "series" && S(x)
                }) : v.eachSeries(S);

                function S(w) {
                    var x = w.__requireNewView;
                    w.__requireNewView = !1;
                    var T = "_ec_" + w.id + "_" + w.type,
                        D = !x && p[T];
                    if (!D) {
                        var C = Le(w.type),
                            M = c ? ao.getClass(C.main, C.sub) : sr.getClass(C.sub);
                        D = new M, D.init(v, m), p[T] = D, y.push(D), g.add(D.group)
                    }
                    w.__viewId = D.__id = T, D.__alive = !0, D.__model = w, D.group.__ecComponentInfo = {
                        mainType: w.mainType,
                        index: w.componentIndex
                    }, !c && d.prepareView(D, w, v, m)
                }
                for (var _ = 0; _ < y.length;) {
                    var b = y[_];
                    b.__alive ? _++ : (!c && b.renderTask.dispose(), g.remove(b.group), b.dispose(v, m), y.splice(_, 1), p[b.__id] === b && delete p[b.__id], b.__id = b.group.__ecComponentInfo = null)
                }
            }, hi = function (h, c, v, d, y) {
                var p = h._model;
                if (p.setUpdatePayload(v), !d) {
                    A([].concat(h._componentsViews).concat(h._chartsViews), b);
                    return
                }
                var g = {};
                g[d + "Id"] = v[d + "Id"], g[d + "Index"] = v[d + "Index"], g[d + "Name"] = v[d + "Name"];
                var m = {
                    mainType: d,
                    query: g
                };
                y && (m.subType = y);
                var _ = v.excludeSeriesId,
                    S;
                _ != null && (S = K(), A(Tt(_), function (w) {
                    var x = pe(w, null);
                    x != null && S.set(x, !0)
                })), p && p.eachComponent(m, function (w) {
                    var x = S && S.get(w.id) != null;
                    if (!x)
                        if (sh(v))
                            if (w instanceof vr) v.type === Gr && !v.notBlur && !w.get(["emphasis", "disabled"]) && g_(w, v, h._api);
                            else {
                                var T = hl(w.mainType, w.componentIndex, v.name, h._api),
                                    D = T.focusSelf,
                                    C = T.dispatchers;
                                v.type === Gr && D && !v.notBlur && Du(w.mainType, w.componentIndex, h._api), C && A(C, function (M) {
                                    v.type === Gr ? Tu(M) : Mu(M)
                                })
                            }
                    else Au(v) && w instanceof vr && (__(w, v, h._api), ih(w), qt(h))
                }, h), p && p.eachComponent(m, function (w) {
                    var x = S && S.get(w.id) != null;
                    x || b(h[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId])
                }, h);

                function b(w) {
                    w && w.__alive && w[c] && w[c](w.__model, p, h._api, v)
                }
            }, Je = {
                prepareAndUpdate: function (h) {
                    vn(this), Je.update.call(this, h, {
                        optionChanged: h.newOption != null
                    })
                },
                update: function (h, c) {
                    var v = this._model,
                        d = this._api,
                        y = this._zr,
                        p = this._coordSysMgr,
                        g = this._scheduler;
                    if (v) {
                        v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), zs(this, v), p.update(v, d), r(v), g.performVisualTasks(v, h), Gs(this, v, d, h, c);
                        var m = v.get("backgroundColor") || "transparent",
                            _ = v.get("darkMode");
                        y.setBackgroundColor(m), _ != null && _ !== "auto" && y.setDarkMode(_), fe.trigger("afterupdate", v, d)
                    }
                },
                updateTransform: function (h) {
                    var c = this,
                        v = this._model,
                        d = this._api;
                    if (v) {
                        v.setUpdatePayload(h);
                        var y = [];
                        v.eachComponent(function (g, m) {
                            if (g !== "series") {
                                var _ = c.getViewOfComponentModel(m);
                                if (_ && _.__alive)
                                    if (_.updateTransform) {
                                        var S = _.updateTransform(m, v, d, h);
                                        S && S.update && y.push(_)
                                    } else y.push(_)
                            }
                        });
                        var p = K();
                        v.eachSeries(function (g) {
                            var m = c._chartsMap[g.__viewId];
                            if (m.updateTransform) {
                                var _ = m.updateTransform(g, v, d, h);
                                _ && _.update && p.set(g.uid, 1)
                            } else p.set(g.uid, 1)
                        }), r(v), this._scheduler.performVisualTasks(v, h, {
                            setDirty: !0,
                            dirtyMap: p
                        }), vi(this, v, d, h, {}, p), fe.trigger("afterupdate", v, d)
                    }
                },
                updateView: function (h) {
                    var c = this._model;
                    c && (c.setUpdatePayload(h), sr.markUpdateMethod(h, "updateView"), r(c), this._scheduler.performVisualTasks(c, h, {
                        setDirty: !0
                    }), Gs(this, c, this._api, h, {}), fe.trigger("afterupdate", c, this._api))
                },
                updateVisual: function (h) {
                    var c = this,
                        v = this._model;
                    v && (v.setUpdatePayload(h), v.eachSeries(function (d) {
                        d.getData().clearAllVisual()
                    }), sr.markUpdateMethod(h, "updateVisual"), r(v), this._scheduler.performVisualTasks(v, h, {
                        visualType: "visual",
                        setDirty: !0
                    }), v.eachComponent(function (d, y) {
                        if (d !== "series") {
                            var p = c.getViewOfComponentModel(y);
                            p && p.__alive && p.updateVisual(y, v, c._api, h)
                        }
                    }), v.eachSeries(function (d) {
                        var y = c._chartsMap[d.__viewId];
                        y.updateVisual(d, v, c._api, h)
                    }), fe.trigger("afterupdate", v, this._api))
                },
                updateLayout: function (h) {
                    Je.update.call(this, h)
                }
            }, Bs = function (h, c, v, d) {
                if (h._disposed) {
                    h.id;
                    return
                }
                for (var y = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, m = us(y, v), _ = 0; _ < p.length; _++) {
                    var S = p[_];
                    if (S[c] && (g = S[c](y, m, d)) != null) return g
                }
            }, zs = function (h, c) {
                var v = h._chartsMap,
                    d = h._scheduler;
                c.eachSeries(function (y) {
                    d.updateStreamModes(y, v[y.__viewId])
                })
            }, Vs = function (h, c) {
                var v = this,
                    d = this.getModel(),
                    y = h.type,
                    p = h.escapeConnect,
                    g = lo[y],
                    m = g.actionInfo,
                    _ = (m.update || "update").split(":"),
                    S = _.pop(),
                    b = _[0] != null && Le(_[0]);
                this[xt] = !0;
                var w = [h],
                    x = !1;
                h.batch && (x = !0, w = V(h.batch, function (I) {
                    return I = j(O({}, I), h), I.batch = null, I
                }));
                var T = [],
                    D, C = Au(h),
                    M = sh(h);
                if (M && dd(this._api), A(w, function (I) {
                        if (D = g.action(I, v._model, v._api), D = D || O({}, I), D.type = m.event || D.type, T.push(D), M) {
                            var R = Wc(h),
                                E = R.queryOptionMap,
                                z = R.mainTypeSpecified,
                                k = z ? E.keys()[0] : "series";
                            hi(v, S, I, k), qt(v)
                        } else C ? (hi(v, S, I, "series"), qt(v)) : b && hi(v, S, I, b.main, b.sub)
                    }), S !== "none" && !M && !C && !b) try {
                    this[Et] ? (vn(this), Je.update.call(this, h), this[Et] = null) : Je[S].call(this, h)
                } catch (I) {
                    throw this[xt] = !1, I
                }
                if (x ? D = {
                        type: m.event || y,
                        escapeConnect: p,
                        batch: T
                    } : D = T[0], this[xt] = !1, !c) {
                    var L = this._messageCenter;
                    if (L.trigger(D.type, D), C) {
                        var P = {
                            type: "selectchanged",
                            escapeConnect: p,
                            selected: S_(d),
                            isFromClick: h.isFromClick || !1,
                            fromAction: h.type,
                            fromActionPayload: h
                        };
                        L.trigger(P.type, P)
                    }
                }
            }, qn = function (h) {
                for (var c = this._pendingActions; c.length;) {
                    var v = c.shift();
                    Vs.call(this, v, h)
                }
            }, Zn = function (h) {
                !h && this.trigger("updated")
            }, bv = function (h, c) {
                h.on("rendered", function (v) {
                    c.trigger("rendered", v), h.animation.isFinished() && !c[Et] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished")
                })
            }, Tv = function (h, c) {
                h.on("mouseover", function (v) {
                    var d = v.target,
                        y = li(d, Cu);
                    y && (y_(y, v, c._api), qt(c))
                }).on("mouseout", function (v) {
                    var d = v.target,
                        y = li(d, Cu);
                    y && (m_(y, v, c._api), qt(c))
                }).on("click", function (v) {
                    var d = v.target,
                        y = li(d, function (m) {
                            return gt(m).dataIndex != null
                        }, !0);
                    if (y) {
                        var p = y.selected ? "unselect" : "select",
                            g = gt(y);
                        c._api.dispatchAction({
                            type: p,
                            dataType: g.dataType,
                            dataIndexInside: g.dataIndex,
                            seriesIndex: g.seriesIndex,
                            isFromClick: !0
                        })
                    }
                })
            };

            function r(h) {
                h.clearColorPalette(), h.eachSeries(function (c) {
                    c.clearColorPalette()
                })
            }

            function n(h) {
                var c = [],
                    v = [],
                    d = !1;
                if (h.eachComponent(function (m, _) {
                        var S = _.get("zlevel") || 0,
                            b = _.get("z") || 0,
                            w = _.getZLevelKey();
                        d = d || !!w, (m === "series" ? v : c).push({
                            zlevel: S,
                            z: b,
                            idx: _.componentIndex,
                            type: m,
                            key: w
                        })
                    }), d) {
                    var y = c.concat(v),
                        p, g;
                    xi(y, function (m, _) {
                        return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel
                    }), A(y, function (m) {
                        var _ = h.getComponent(m.type, m.idx),
                            S = m.zlevel,
                            b = m.key;
                        p != null && (S = Math.max(p, S)), b ? (S === p && b !== g && S++, g = b) : g && (S === p && S++, g = ""), p = S, _.setZLevel(S)
                    })
                }
            }
            Gs = function (h, c, v, d, y) {
                n(c), Mv(h, c, v, d, y), A(h._chartsViews, function (p) {
                    p.__alive = !1
                }), vi(h, c, v, d, y), A(h._chartsViews, function (p) {
                    p.__alive || p.remove(c, v)
                })
            }, Mv = function (h, c, v, d, y, p) {
                A(p || h._componentsViews, function (g) {
                    var m = g.__model;
                    l(m, g), g.render(m, c, v, d), s(m, g), f(m, g)
                })
            }, vi = function (h, c, v, d, y, p) {
                var g = h._scheduler;
                y = O(y || {}, {
                    updatedSeries: c.getSeries()
                }), fe.trigger("series:beforeupdate", c, v, y);
                var m = !1;
                c.eachSeries(function (_) {
                    var S = h._chartsMap[_.__viewId];
                    S.__alive = !0;
                    var b = S.renderTask;
                    g.updatePayload(b, d), l(_, S), p && p.get(_.uid) && b.dirty(), b.perform(g.getPerformArgs(b)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), ih(_)
                }), g.unfinished = m || g.unfinished, fe.trigger("series:layoutlabels", c, v, y), fe.trigger("series:transition", c, v, y), c.eachSeries(function (_) {
                    var S = h._chartsMap[_.__viewId];
                    s(_, S), f(_, S)
                }), i(h, c), fe.trigger("series:afterupdate", c, v, y)
            }, qt = function (h) {
                h[Os] = !0, h.getZr().wakeUp()
            }, Dv = function (h) {
                h[Os] && (h.getZr().storage.traverse(function (c) {
                    ga(c) || a(c)
                }), h[Os] = !1)
            };

            function a(h) {
                for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
                    var y = v[d];
                    y === "emphasis" || y === "blur" || y === "select" || c.push(y)
                }
                h.selected && h.states.select && c.push("select"), h.hoverState === bo && h.states.emphasis ? c.push("emphasis") : h.hoverState === wo && h.states.blur && c.push("blur"), h.useStates(c)
            }

            function i(h, c) {
                var v = h._zr,
                    d = v.storage,
                    y = 0;
                d.traverse(function (p) {
                    p.isGroup || y++
                }), y > c.get("hoverLayerThreshold") && !et.node && !et.worker && c.eachSeries(function (p) {
                    if (!p.preventUsingHoverLayer) {
                        var g = h._chartsMap[p.__viewId];
                        g.__alive && g.eachRendered(function (m) {
                            m.states.emphasis && (m.states.emphasis.hoverLayer = !0)
                        })
                    }
                })
            }

            function o(h, c) {
                var v = h.get("blendMode") || null;
                c.eachRendered(function (d) {
                    d.isGroup || (d.style.blend = v)
                })
            }

            function s(h, c) {
                if (!h.preventAutoZ) {
                    var v = h.get("z") || 0,
                        d = h.get("zlevel") || 0;
                    c.eachRendered(function (y) {
                        return u(y, v, d, -1 / 0), !0
                    })
                }
            }

            function u(h, c, v, d) {
                var y = h.getTextContent(),
                    p = h.getTextGuideLine(),
                    g = h.isGroup;
                if (g)
                    for (var m = h.childrenRef(), _ = 0; _ < m.length; _++) d = Math.max(u(m[_], c, v, d), d);
                else h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
                if (y && (y.z = c, y.zlevel = v, isFinite(d) && (y.z2 = d + 2)), p) {
                    var S = h.textGuideLineConfig;
                    p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (S && S.showAbove ? 1 : -1))
                }
                return d
            }

            function l(h, c) {
                c.eachRendered(function (v) {
                    if (!ga(v)) {
                        var d = v.getTextContent(),
                            y = v.getTextGuideLine();
                        v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), y && y.stateTransition && (y.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null)
                    }
                })
            }

            function f(h, c) {
                var v = h.getModel("stateAnimation"),
                    d = h.isAnimationEnabled(),
                    y = v.get("duration"),
                    p = y > 0 ? {
                        duration: y,
                        delay: v.get("delay"),
                        easing: v.get("easing")
                    } : null;
                c.eachRendered(function (g) {
                    if (g.states && g.states.emphasis) {
                        if (ga(g)) return;
                        if (g instanceof at && D_(g), g.__dirty) {
                            var m = g.prevStates;
                            m && g.useStates(m)
                        }
                        if (d) {
                            g.stateTransition = p;
                            var _ = g.getTextContent(),
                                S = g.getTextGuideLine();
                            _ && (_.stateTransition = p), S && (S.stateTransition = p)
                        }
                        g.__dirty && a(g)
                    }
                })
            }
            xv = function (h) {
                return new(function (c) {
                    G(v, c);

                    function v() {
                        return c !== null && c.apply(this, arguments) || this
                    }
                    return v.prototype.getCoordinateSystems = function () {
                        return h._coordSysMgr.getCoordinateSystems()
                    }, v.prototype.getComponentByElement = function (d) {
                        for (; d;) {
                            var y = d.__ecComponentInfo;
                            if (y != null) return h._model.getComponent(y.mainType, y.index);
                            d = d.parent
                        }
                    }, v.prototype.enterEmphasis = function (d, y) {
                        Tu(d, y), qt(h)
                    }, v.prototype.leaveEmphasis = function (d, y) {
                        Mu(d, y), qt(h)
                    }, v.prototype.enterBlur = function (d) {
                        p_(d), qt(h)
                    }, v.prototype.leaveBlur = function (d) {
                        fd(d), qt(h)
                    }, v.prototype.enterSelect = function (d) {
                        hd(d), qt(h)
                    }, v.prototype.leaveSelect = function (d) {
                        vd(d), qt(h)
                    }, v.prototype.getModel = function () {
                        return h.getModel()
                    }, v.prototype.getViewOfComponentModel = function (d) {
                        return h.getViewOfComponentModel(d)
                    }, v.prototype.getViewOfSeriesModel = function (d) {
                        return h.getViewOfSeriesModel(d)
                    }, v
                }(lp))(h)
            }, Jp = function (h) {
                function c(v, d) {
                    for (var y = 0; y < v.length; y++) {
                        var p = v[y];
                        p[Ns] = d
                    }
                }
                A(_a, function (v, d) {
                    h._messageCenter.on(d, function (y) {
                        if (Cv[h.group] && h[Ns] !== wv) {
                            if (y && y.escapeConnect) return;
                            var p = h.makeActionFromEvent(y),
                                g = [];
                            A(Sa, function (m) {
                                m !== h && m.group === h.group && g.push(m)
                            }), c(g, wv), A(g, function (m) {
                                m[Ns] !== Nb && m.dispatchAction(p)
                            }), c(g, Fb)
                        }
                    })
                })
            }
        }(), t
    }(Ue),
    Gl = jp.prototype;
Gl.on = Xp("on");
Gl.off = Xp("off");
Gl.one = function (e, t, r) {
    var n = this;

    function a() {
        for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        t && t.apply && t.apply(this, i), n.off(e, a)
    }
    this.on.call(this, e, a, r)
};
var Bb = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var lo = {},
    _a = {},
    Wu = [],
    Uu = [],
    fo = [],
    tg = {},
    Yu = {},
    Sa = {},
    Cv = {},
    zb = +new Date - 0,
    Hl = "_echarts_instance_";

function zD(e, t, r) {
    var n = !(r && r.ssr);
    if (n) {
        var a = Vb(e);
        if (a) return a
    }
    var i = new jp(e, t, r);
    return i.id = "ec_" + zb++, Sa[i.id] = i, n && Uc(e, Hl, i.id), Jp(i), fe.trigger("afterinit", i), i
}

function Vb(e) {
    return Sa[im(e, Hl)]
}

function eg(e, t) {
    tg[e] = t
}

function rg(e) {
    ct(Uu, e) < 0 && Uu.push(e)
}

function ng(e, t) {
    Ul(Wu, e, t, Ab)
}

function Gb(e) {
    Wl("afterinit", e)
}

function Hb(e) {
    Wl("afterupdate", e)
}

function Wl(e, t) {
    fe.on(e, t)
}

function En(e, t, r) {
    Q(t) && (r = t, t = "");
    var n = Y(e) ? e.type : [e, e = {
        event: t
    }][0];
    e.event = (e.event || n).toLowerCase(), t = e.event, !_a[t] && (Re(Sv.test(n) && Sv.test(t)), lo[n] || (lo[n] = {
        action: r,
        actionInfo: e
    }), _a[t] = n)
}

function Wb(e, t) {
    Pl.register(e, t)
}

function Ub(e, t) {
    Ul(fo, e, t, Up, "layout")
}

function Jr(e, t) {
    Ul(fo, e, t, Yp, "visual")
}
var Av = [];

function Ul(e, t, r, n, a) {
    if ((Q(t) || Y(t)) && (r = t, t = n), !(ct(Av, r) >= 0)) {
        Av.push(r);
        var i = Rp.wrapStageHandler(r, a);
        i.__prio = t, i.__raw = r, e.push(i)
    }
}

function ag(e, t) {
    Yu[e] = t
}

function Yb(e, t, r) {
    var n = Tb("registerMap");
    n && n(e, t, r)
}
var $b = ZS;
Jr(Vl, Tw);
Jr(Oo, Mw);
Jr(Oo, xw);
Jr(Vl, zw);
Jr(Oo, Vw);
Jr($p, Sb);
rg(hp);
ng(Db, AS);
ag("default", Dw);
En({
    type: Gr,
    event: Gr,
    update: Gr
}, ee);
En({
    type: Pi,
    event: Pi,
    update: Pi
}, ee);
En({
    type: ca,
    event: ca,
    update: ca
}, ee);
En({
    type: Ri,
    event: Ri,
    update: Ri
}, ee);
En({
    type: da,
    event: da,
    update: da
}, ee);
eg("light", Nw);
eg("dark", Fw);
var Lv = [],
    Xb = {
        registerPreprocessor: rg,
        registerProcessor: ng,
        registerPostInit: Gb,
        registerPostUpdate: Hb,
        registerUpdateLifecycle: Wl,
        registerAction: En,
        registerCoordinateSystem: Wb,
        registerLayout: Ub,
        registerVisual: Jr,
        registerTransform: $b,
        registerLoading: ag,
        registerMap: Yb,
        registerImpl: bb,
        PRIORITY: Ob,
        ComponentModel: pt,
        ComponentView: ao,
        SeriesModel: vr,
        ChartView: sr,
        registerComponentModel: function (e) {
            pt.registerClass(e)
        },
        registerComponentView: function (e) {
            ao.registerClass(e)
        },
        registerSeriesModel: function (e) {
            vr.registerClass(e)
        },
        registerChartView: function (e) {
            sr.registerClass(e)
        },
        registerSubTypeDefaulter: function (e, t) {
            pt.registerSubTypeDefaulter(e, t)
        },
        registerPainter: function (e, t) {
            Oy(e, t)
        }
    };

function ig(e) {
    if (B(e)) {
        A(e, function (t) {
            ig(t)
        });
        return
    }
    ct(Lv, e) >= 0 || (Lv.push(e), Q(e) && (e = {
        install: e
    }), e.install(Xb))
}

function Kn(e) {
    return e == null ? 0 : e.length || 1
}

function Iv(e) {
    return e
}
var qb = function () {
    function e(t, r, n, a, i, o) {
        this._old = t, this._new = r, this._oldKeyGetter = n || Iv, this._newKeyGetter = a || Iv, this.context = i, this._diffModeMultiple = o === "multiple"
    }
    return e.prototype.add = function (t) {
        return this._add = t, this
    }, e.prototype.update = function (t) {
        return this._update = t, this
    }, e.prototype.updateManyToOne = function (t) {
        return this._updateManyToOne = t, this
    }, e.prototype.updateOneToMany = function (t) {
        return this._updateOneToMany = t, this
    }, e.prototype.updateManyToMany = function (t) {
        return this._updateManyToMany = t, this
    }, e.prototype.remove = function (t) {
        return this._remove = t, this
    }, e.prototype.execute = function () {
        this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
    }, e.prototype._executeOneToOne = function () {
        var t = this._old,
            r = this._new,
            n = {},
            a = new Array(t.length),
            i = new Array(r.length);
        this._initIndexMap(t, null, a, "_oldKeyGetter"), this._initIndexMap(r, n, i, "_newKeyGetter");
        for (var o = 0; o < t.length; o++) {
            var s = a[o],
                u = n[s],
                l = Kn(u);
            if (l > 1) {
                var f = u.shift();
                u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o)
            } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o)
        }
        this._performRestAdd(i, n)
    }, e.prototype._executeMultiple = function () {
        var t = this._old,
            r = this._new,
            n = {},
            a = {},
            i = [],
            o = [];
        this._initIndexMap(t, n, i, "_oldKeyGetter"), this._initIndexMap(r, a, o, "_newKeyGetter");
        for (var s = 0; s < i.length; s++) {
            var u = i[s],
                l = n[u],
                f = a[u],
                h = Kn(l),
                c = Kn(f);
            if (h > 1 && c === 1) this._updateManyToOne && this._updateManyToOne(f, l), a[u] = null;
            else if (h === 1 && c > 1) this._updateOneToMany && this._updateOneToMany(f, l), a[u] = null;
            else if (h === 1 && c === 1) this._update && this._update(f, l), a[u] = null;
            else if (h > 1 && c > 1) this._updateManyToMany && this._updateManyToMany(f, l), a[u] = null;
            else if (h > 1)
                for (var v = 0; v < h; v++) this._remove && this._remove(l[v]);
            else this._remove && this._remove(l)
        }
        this._performRestAdd(o, a)
    }, e.prototype._performRestAdd = function (t, r) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n],
                i = r[a],
                o = Kn(i);
            if (o > 1)
                for (var s = 0; s < o; s++) this._add && this._add(i[s]);
            else o === 1 && this._add && this._add(i);
            r[a] = null
        }
    }, e.prototype._initIndexMap = function (t, r, n, a) {
        for (var i = this._diffModeMultiple, o = 0; o < t.length; o++) {
            var s = "_ec_" + this[a](t[o], o);
            if (i || (n[o] = s), !!r) {
                var u = r[s],
                    l = Kn(u);
                l === 0 ? (r[s] = o, i && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o)
            }
        }
    }, e
}();
const Zb = qb;
var Kb = function () {
    function e(t, r) {
        this._encode = t, this._schema = r
    }
    return e.prototype.get = function () {
        return {
            fullDimensions: this._getFullDimensionNames(),
            encode: this._encode
        }
    }, e.prototype._getFullDimensionNames = function () {
        return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames
    }, e
}();

function Qb(e, t) {
    var r = {},
        n = r.encode = {},
        a = K(),
        i = [],
        o = [],
        s = {};
    A(e.dimensions, function (c) {
        var v = e.getDimensionInfo(c),
            d = v.coordDim;
        if (d) {
            var y = v.coordDimIndex;
            Hs(n, d)[y] = c, v.isExtraCoord || (a.set(d, 1), jb(v.type) && (i[0] = c), Hs(s, d)[y] = e.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c)
        }
        np.each(function (p, g) {
            var m = Hs(n, g),
                _ = v.otherDims[g];
            _ != null && _ !== !1 && (m[_] = v.name)
        })
    });
    var u = [],
        l = {};
    a.each(function (c, v) {
        var d = n[v];
        l[v] = d[0], u = u.concat(d)
    }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = V(u, function (c) {
        return e.getDimensionInfo(c).storeDimIndex
    }), r.encodeFirstDimNotExtra = l;
    var f = n.label;
    f && f.length && (i = f.slice());
    var h = n.tooltip;
    return h && h.length ? o = h.slice() : o.length || (o = i.slice()), n.defaultedLabel = i, n.defaultedTooltip = o, r.userOutput = new Kb(s, t), r
}

function Hs(e, t) {
    return e.hasOwnProperty(t) || (e[t] = []), e[t]
}

function Jb(e) {
    return e === "category" ? "ordinal" : e === "time" ? "time" : "float"
}

function jb(e) {
    return !(e === "ordinal" || e === "time")
}
var Ni = function () {
        function e(t) {
            this.otherDims = {}, t != null && O(this, t)
        }
        return e
    }(),
    tT = At(),
    eT = {
        float: "f",
        int: "i",
        ordinal: "o",
        number: "n",
        time: "t"
    },
    og = function () {
        function e(t) {
            this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted)
        }
        return e.prototype.isDimensionOmitted = function () {
            return this._dimOmitted
        }, e.prototype._updateDimOmitted = function (t) {
            this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = lg(this.source)))
        }, e.prototype.getSourceDimensionIndex = function (t) {
            return X(this._dimNameMap.get(t), -1)
        }, e.prototype.getSourceDimension = function (t) {
            var r = this.source.dimensionsDefine;
            if (r) return r[t]
        }, e.prototype.makeStoreSchema = function () {
            for (var t = this._fullDimCount, r = cp(this.source), n = !fg(t), a = "", i = [], o = 0, s = 0; o < t; o++) {
                var u = void 0,
                    l = void 0,
                    f = void 0,
                    h = this.dimensions[s];
                if (h && h.storeDimIndex === o) u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
                else {
                    var c = this.getSourceDimension(o);
                    c && (u = r ? c.name : null, l = c.type)
                }
                i.push({
                    property: u,
                    type: l,
                    ordinalMeta: f
                }), r && u != null && (!h || !h.isCalculationCoord) && (a += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), a += "$", a += eT[l] || "f", f && (a += f.uid), a += "$"
            }
            var v = this.source,
                d = [v.seriesLayoutBy, v.startIndex, a].join("$$");
            return {
                dimensions: i,
                hash: d
            }
        }, e.prototype.makeOutputDimensionNames = function () {
            for (var t = [], r = 0, n = 0; r < this._fullDimCount; r++) {
                var a = void 0,
                    i = this.dimensions[n];
                if (i && i.storeDimIndex === r) i.isCalculationCoord || (a = i.name), n++;
                else {
                    var o = this.getSourceDimension(r);
                    o && (a = o.name)
                }
                t.push(a)
            }
            return t
        }, e.prototype.appendCalculationDimension = function (t) {
            this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0)
        }, e
    }();

function sg(e) {
    return e instanceof og
}

function ug(e) {
    for (var t = K(), r = 0; r < (e || []).length; r++) {
        var n = e[r],
            a = Y(n) ? n.name : n;
        a != null && t.get(a) == null && t.set(a, r)
    }
    return t
}

function lg(e) {
    var t = tT(e);
    return t.dimNameMap || (t.dimNameMap = ug(e.dimensionsDefine))
}

function fg(e) {
    return e > 30
}
var Qn = Y,
    je = V,
    rT = typeof Int32Array > "u" ? Array : Int32Array,
    nT = "e\0\0",
    Pv = -1,
    aT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
    iT = ["_approximateExtent"],
    Rv, ci, Jn, jn, Ws, di, Us, hg = function () {
        function e(t, r) {
            this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
            var n, a = !1;
            sg(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (a = !0, n = t), n = n || ["x", "y"];
            for (var i = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
                var h = n[f],
                    c = U(h) ? new Ni({
                        name: h
                    }) : h instanceof Ni ? h : new Ni(h),
                    v = c.name;
                c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
                var d = c.otherDims = c.otherDims || {};
                o.push(v), i[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), a && (c.storeDimIndex = f)
            }
            if (this.dimensions = o, this._dimInfos = i, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
                var y = this._dimIdxToName = K();
                A(o, function (p) {
                    y.set(i[p].storeDimIndex, p)
                })
            }
        }
        return e.prototype.getDimension = function (t) {
            var r = this._recognizeDimIndex(t);
            if (r == null) return t;
            if (r = t, !this._dimOmitted) return this.dimensions[r];
            var n = this._dimIdxToName.get(r);
            if (n != null) return n;
            var a = this._schema.getSourceDimension(r);
            if (a) return a.name
        }, e.prototype.getDimensionIndex = function (t) {
            var r = this._recognizeDimIndex(t);
            if (r != null) return r;
            if (t == null) return -1;
            var n = this._getDimInfo(t);
            return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1
        }, e.prototype._recognizeDimIndex = function (t) {
            if (it(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0)) return +t
        }, e.prototype._getStoreDimIndex = function (t) {
            var r = this.getDimensionIndex(t);
            return r
        }, e.prototype.getDimensionInfo = function (t) {
            return this._getDimInfo(this.getDimension(t))
        }, e.prototype._initGetDimensionInfo = function (t) {
            var r = this._dimInfos;
            this._getDimInfo = t ? function (n) {
                return r.hasOwnProperty(n) ? r[n] : void 0
            } : function (n) {
                return r[n]
            }
        }, e.prototype.getDimensionsOnCoord = function () {
            return this._dimSummary.dataDimsOnCoord.slice()
        }, e.prototype.mapDimension = function (t, r) {
            var n = this._dimSummary;
            if (r == null) return n.encodeFirstDimNotExtra[t];
            var a = n.encode[t];
            return a ? a[r] : null
        }, e.prototype.mapDimensionsAll = function (t) {
            var r = this._dimSummary,
                n = r.encode[t];
            return (n || []).slice()
        }, e.prototype.getStore = function () {
            return this._store
        }, e.prototype.initData = function (t, r, n) {
            var a = this,
                i;
            if (t instanceof Nu && (i = t), !i) {
                var o = this.dimensions,
                    s = Rl(t) || Bt(t) ? new dp(t, o.length) : t;
                i = new Nu;
                var u = je(o, function (l) {
                    return {
                        type: a._dimInfos[l].type,
                        property: l
                    }
                });
                i.initData(s, u, n)
            }
            this._store = i, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = Qb(this, this._schema), this.userOutput = this._dimSummary.userOutput
        }, e.prototype.appendData = function (t) {
            var r = this._store.appendData(t);
            this._doInit(r[0], r[1])
        }, e.prototype.appendValues = function (t, r) {
            var n = this._store.appendValues(t, r.length),
                a = n.start,
                i = n.end,
                o = this._shouldMakeIdFromName();
            if (this._updateOrdinalMeta(), r)
                for (var s = a; s < i; s++) {
                    var u = s - a;
                    this._nameList[s] = r[u], o && Us(this, s)
                }
        }, e.prototype._updateOrdinalMeta = function () {
            for (var t = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
                var a = this._dimInfos[r[n]];
                a.ordinalMeta && t.collectOrdinalMeta(a.storeDimIndex, a.ordinalMeta)
            }
        }, e.prototype._shouldMakeIdFromName = function () {
            var t = this._store.getProvider();
            return this._idDimIdx == null && t.getSource().sourceFormat !== or && !t.fillStorage
        }, e.prototype._doInit = function (t, r) {
            if (!(t >= r)) {
                var n = this._store,
                    a = n.getProvider();
                this._updateOrdinalMeta();
                var i = this._nameList,
                    o = this._idList,
                    s = a.getSource().sourceFormat,
                    u = s === ae;
                if (u && !a.pure)
                    for (var l = [], f = t; f < r; f++) {
                        var h = a.getItem(f, l);
                        if (!this.hasItemOption && qy(h) && (this.hasItemOption = !0), h) {
                            var c = h.name;
                            i[f] == null && c != null && (i[f] = pe(c, null));
                            var v = h.id;
                            o[f] == null && v != null && (o[f] = pe(v, null))
                        }
                    }
                if (this._shouldMakeIdFromName())
                    for (var f = t; f < r; f++) Us(this, f);
                Rv(this)
            }
        }, e.prototype.getApproximateExtent = function (t) {
            return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t))
        }, e.prototype.setApproximateExtent = function (t, r) {
            r = this.getDimension(r), this._approximateExtent[r] = t.slice()
        }, e.prototype.getCalculationInfo = function (t) {
            return this._calculationInfo[t]
        }, e.prototype.setCalculationInfo = function (t, r) {
            Qn(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = r
        }, e.prototype.getName = function (t) {
            var r = this.getRawIndex(t),
                n = this._nameList[r];
            return n == null && this._nameDimIdx != null && (n = Jn(this, this._nameDimIdx, r)), n == null && (n = ""), n
        }, e.prototype._getCategory = function (t, r) {
            var n = this._store.get(t, r),
                a = this._store.getOrdinalMeta(t);
            return a ? a.categories[n] : n
        }, e.prototype.getId = function (t) {
            return ci(this, this.getRawIndex(t))
        }, e.prototype.count = function () {
            return this._store.count()
        }, e.prototype.get = function (t, r) {
            var n = this._store,
                a = this._dimInfos[t];
            if (a) return n.get(a.storeDimIndex, r)
        }, e.prototype.getByRawIndex = function (t, r) {
            var n = this._store,
                a = this._dimInfos[t];
            if (a) return n.getByRawIndex(a.storeDimIndex, r)
        }, e.prototype.getIndices = function () {
            return this._store.getIndices()
        }, e.prototype.getDataExtent = function (t) {
            return this._store.getDataExtent(this._getStoreDimIndex(t))
        }, e.prototype.getSum = function (t) {
            return this._store.getSum(this._getStoreDimIndex(t))
        }, e.prototype.getMedian = function (t) {
            return this._store.getMedian(this._getStoreDimIndex(t))
        }, e.prototype.getValues = function (t, r) {
            var n = this,
                a = this._store;
            return B(t) ? a.getValues(je(t, function (i) {
                return n._getStoreDimIndex(i)
            }), r) : a.getValues(t)
        }, e.prototype.hasValue = function (t) {
            for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, a = r.length; n < a; n++)
                if (isNaN(this._store.get(r[n], t))) return !1;
            return !0
        }, e.prototype.indexOfName = function (t) {
            for (var r = 0, n = this._store.count(); r < n; r++)
                if (this.getName(r) === t) return r;
            return -1
        }, e.prototype.getRawIndex = function (t) {
            return this._store.getRawIndex(t)
        }, e.prototype.indexOfRawIndex = function (t) {
            return this._store.indexOfRawIndex(t)
        }, e.prototype.rawIndexOf = function (t, r) {
            var n = t && this._invertedIndicesMap[t],
                a = n[r];
            return a == null || isNaN(a) ? Pv : a
        }, e.prototype.indicesOfNearest = function (t, r, n) {
            return this._store.indicesOfNearest(this._getStoreDimIndex(t), r, n)
        }, e.prototype.each = function (t, r, n) {
            Q(t) && (n = r, r = t, t = []);
            var a = n || this,
                i = je(jn(t), this._getStoreDimIndex, this);
            this._store.each(i, a ? _t(r, a) : r)
        }, e.prototype.filterSelf = function (t, r, n) {
            Q(t) && (n = r, r = t, t = []);
            var a = n || this,
                i = je(jn(t), this._getStoreDimIndex, this);
            return this._store = this._store.filter(i, a ? _t(r, a) : r), this
        }, e.prototype.selectRange = function (t) {
            var r = this,
                n = {},
                a = lt(t);
            return A(a, function (i) {
                var o = r._getStoreDimIndex(i);
                n[o] = t[i]
            }), this._store = this._store.selectRange(n), this
        }, e.prototype.mapArray = function (t, r, n) {
            Q(t) && (n = r, r = t, t = []), n = n || this;
            var a = [];
            return this.each(t, function () {
                a.push(r && r.apply(this, arguments))
            }, n), a
        }, e.prototype.map = function (t, r, n, a) {
            var i = n || a || this,
                o = je(jn(t), this._getStoreDimIndex, this),
                s = di(this);
            return s._store = this._store.map(o, i ? _t(r, i) : r), s
        }, e.prototype.modify = function (t, r, n, a) {
            var i = n || a || this,
                o = je(jn(t), this._getStoreDimIndex, this);
            this._store.modify(o, i ? _t(r, i) : r)
        }, e.prototype.downSample = function (t, r, n, a) {
            var i = di(this);
            return i._store = this._store.downSample(this._getStoreDimIndex(t), r, n, a), i
        }, e.prototype.lttbDownSample = function (t, r) {
            var n = di(this);
            return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), r), n
        }, e.prototype.getRawDataItem = function (t) {
            return this._store.getRawDataItem(t)
        }, e.prototype.getItemModel = function (t) {
            var r = this.hostModel,
                n = this.getRawDataItem(t);
            return new ge(n, r, r && r.ecModel)
        }, e.prototype.diff = function (t) {
            var r = this;
            return new Zb(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function (n) {
                return ci(t, n)
            }, function (n) {
                return ci(r, n)
            })
        }, e.prototype.getVisual = function (t) {
            var r = this._visual;
            return r && r[t]
        }, e.prototype.setVisual = function (t, r) {
            this._visual = this._visual || {}, Qn(t) ? O(this._visual, t) : this._visual[t] = r
        }, e.prototype.getItemVisual = function (t, r) {
            var n = this._itemVisuals[t],
                a = n && n[r];
            return a ? ? this.getVisual(r)
        }, e.prototype.hasItemVisual = function () {
            return this._itemVisuals.length > 0
        }, e.prototype.ensureUniqueItemVisual = function (t, r) {
            var n = this._itemVisuals,
                a = n[t];
            a || (a = n[t] = {});
            var i = a[r];
            return i == null && (i = this.getVisual(r), B(i) ? i = i.slice() : Qn(i) && (i = O({}, i)), a[r] = i), i
        }, e.prototype.setItemVisual = function (t, r, n) {
            var a = this._itemVisuals[t] || {};
            this._itemVisuals[t] = a, Qn(r) ? O(a, r) : a[r] = n
        }, e.prototype.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = []
        }, e.prototype.setLayout = function (t, r) {
            Qn(t) ? O(this._layout, t) : this._layout[t] = r
        }, e.prototype.getLayout = function (t) {
            return this._layout[t]
        }, e.prototype.getItemLayout = function (t) {
            return this._itemLayouts[t]
        }, e.prototype.setItemLayout = function (t, r, n) {
            this._itemLayouts[t] = n ? O(this._itemLayouts[t] || {}, r) : r
        }, e.prototype.clearItemLayouts = function () {
            this._itemLayouts.length = 0
        }, e.prototype.setItemGraphicEl = function (t, r) {
            var n = this.hostModel && this.hostModel.seriesIndex;
            i_(n, this.dataType, t, r), this._graphicEls[t] = r
        }, e.prototype.getItemGraphicEl = function (t) {
            return this._graphicEls[t]
        }, e.prototype.eachItemGraphicEl = function (t, r) {
            A(this._graphicEls, function (n, a) {
                n && t && t.call(r, n, a)
            })
        }, e.prototype.cloneShallow = function (t) {
            return t || (t = new e(this._schema ? this._schema : je(this.dimensions, this._getDimInfo, this), this.hostModel)), Ws(t, this), t._store = this._store, t
        }, e.prototype.wrapMethod = function (t, r) {
            var n = this[t];
            Q(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                var a = n.apply(this, arguments);
                return r.apply(this, [a].concat(Ju(arguments)))
            })
        }, e.internalField = function () {
            Rv = function (t) {
                var r = t._invertedIndicesMap;
                A(r, function (n, a) {
                    var i = t._dimInfos[a],
                        o = i.ordinalMeta,
                        s = t._store;
                    if (o) {
                        n = r[a] = new rT(o.categories.length);
                        for (var u = 0; u < n.length; u++) n[u] = Pv;
                        for (var u = 0; u < s.count(); u++) n[s.get(i.storeDimIndex, u)] = u
                    }
                })
            }, Jn = function (t, r, n) {
                return pe(t._getCategory(r, n), null)
            }, ci = function (t, r) {
                var n = t._idList[r];
                return n == null && t._idDimIdx != null && (n = Jn(t, t._idDimIdx, r)), n == null && (n = nT + r), n
            }, jn = function (t) {
                return B(t) || (t = t != null ? [t] : []), t
            }, di = function (t) {
                var r = new e(t._schema ? t._schema : je(t.dimensions, t._getDimInfo, t), t.hostModel);
                return Ws(r, t), r
            }, Ws = function (t, r) {
                A(aT.concat(r.__wrappedMethods || []), function (n) {
                    r.hasOwnProperty(n) && (t[n] = r[n])
                }), t.__wrappedMethods = r.__wrappedMethods, A(iT, function (n) {
                    t[n] = J(r[n])
                }), t._calculationInfo = O({}, r._calculationInfo)
            }, Us = function (t, r) {
                var n = t._nameList,
                    a = t._idList,
                    i = t._nameDimIdx,
                    o = t._idDimIdx,
                    s = n[r],
                    u = a[r];
                if (s == null && i != null && (n[r] = s = Jn(t, i, r)), u == null && o != null && (a[r] = u = Jn(t, o, r)), u == null && s != null) {
                    var l = t._nameRepeatCount,
                        f = l[s] = (l[s] || 0) + 1;
                    u = s, f > 1 && (u += "__ec__" + f), a[r] = u
                }
            }
        }(), e
    }();

function vg(e, t) {
    Rl(e) || (e = El(e)), t = t || {};
    var r = t.coordDimensions || [],
        n = t.dimensionsDefine || e.dimensionsDefine || [],
        a = K(),
        i = [],
        o = sT(e, r, n, t.dimensionsCount),
        s = t.canOmitUnusedDimensions && fg(o),
        u = n === e.dimensionsDefine,
        l = u ? lg(e) : ug(n),
        f = t.encodeDefine;
    !f && t.encodeDefaulter && (f = t.encodeDefaulter(e, o));
    for (var h = K(f), c = new Sp(o), v = 0; v < c.length; v++) c[v] = -1;

    function d(D) {
        var C = c[D];
        if (C < 0) {
            var M = n[D],
                L = Y(M) ? M : {
                    name: M
                },
                P = new Ni,
                I = L.name;
            I != null && l.get(I) != null && (P.name = P.displayName = I), L.type != null && (P.type = L.type), L.displayName != null && (P.displayName = L.displayName);
            var R = i.length;
            return c[D] = R, P.storeDimIndex = D, i.push(P), P
        }
        return i[C]
    }
    if (!s)
        for (var v = 0; v < o; v++) d(v);
    h.each(function (D, C) {
        var M = Tt(D).slice();
        if (M.length === 1 && !U(M[0]) && M[0] < 0) {
            h.set(C, !1);
            return
        }
        var L = h.set(C, []);
        A(M, function (P, I) {
            var R = U(P) ? l.get(P) : P;
            R != null && R < o && (L[I] = R, p(d(R), C, I))
        })
    });
    var y = 0;
    A(r, function (D) {
        var C, M, L, P;
        if (U(D)) C = D, P = {};
        else {
            P = D, C = P.name;
            var I = P.ordinalMeta;
            P.ordinalMeta = null, P = O({}, P), P.ordinalMeta = I, M = P.dimsDef, L = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null
        }
        var R = h.get(C);
        if (R !== !1) {
            if (R = Tt(R), !R.length)
                for (var E = 0; E < (M && M.length || 1); E++) {
                    for (; y < o && d(y).coordDim != null;) y++;
                    y < o && R.push(y++)
                }
            A(R, function (z, k) {
                var N = d(z);
                if (u && P.type != null && (N.type = P.type), p(j(N, P), C, k), N.name == null && M) {
                    var F = M[k];
                    !Y(F) && (F = {
                        name: F
                    }), N.name = N.displayName = F.name, N.defaultTooltip = F.defaultTooltip
                }
                L && j(N.otherDims, L)
            })
        }
    });

    function p(D, C, M) {
        np.get(C) != null ? D.otherDims[C] = M : (D.coordDim = C, D.coordDimIndex = M, a.set(C, !0))
    }
    var g = t.generateCoord,
        m = t.generateCoordCount,
        _ = m != null;
    m = g ? m || 1 : 0;
    var S = g || "value";

    function b(D) {
        D.name == null && (D.name = D.coordDim)
    }
    if (s) A(i, function (D) {
        b(D)
    }), i.sort(function (D, C) {
        return D.storeDimIndex - C.storeDimIndex
    });
    else
        for (var w = 0; w < o; w++) {
            var x = d(w),
                T = x.coordDim;
            T == null && (x.coordDim = uT(S, a, _), x.coordDimIndex = 0, (!g || m <= 0) && (x.isExtraCoord = !0), m--), b(x), x.type == null && (op(e, w) === wt.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal")
        }
    return oT(i), new og({
        source: e,
        dimensions: i,
        fullDimensionCount: o,
        dimensionOmitted: s
    })
}

function oT(e) {
    for (var t = K(), r = 0; r < e.length; r++) {
        var n = e[r],
            a = n.name,
            i = t.get(a) || 0;
        i > 0 && (n.name = a + (i - 1)), i++, t.set(a, i)
    }
}

function sT(e, t, r, n) {
    var a = Math.max(e.dimensionsDetectedCount || 1, t.length, r.length, n || 0);
    return A(t, function (i) {
        var o;
        Y(i) && (o = i.dimsDef) && (a = Math.max(a, o.length))
    }), a
}

function uT(e, t, r) {
    if (r || t.hasKey(e)) {
        for (var n = 0; t.hasKey(e + n);) n++;
        e += n
    }
    return t.set(e, !0), e
}
var lT = function () {
    function e(t) {
        this.coordSysDims = [], this.axisMap = K(), this.categoryAxisMap = K(), this.coordSysName = t
    }
    return e
}();

function fT(e) {
    var t = e.get("coordinateSystem"),
        r = new lT(t),
        n = hT[t];
    if (n) return n(e, r, r.axisMap, r.categoryAxisMap), r
}
var hT = {
    cartesian2d: function (e, t, r, n) {
        var a = e.getReferringComponents("xAxis", Or).models[0],
            i = e.getReferringComponents("yAxis", Or).models[0];
        t.coordSysDims = ["x", "y"], r.set("x", a), r.set("y", i), cn(a) && (n.set("x", a), t.firstCategoryDimIndex = 0), cn(i) && (n.set("y", i), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1))
    },
    singleAxis: function (e, t, r, n) {
        var a = e.getReferringComponents("singleAxis", Or).models[0];
        t.coordSysDims = ["single"], r.set("single", a), cn(a) && (n.set("single", a), t.firstCategoryDimIndex = 0)
    },
    polar: function (e, t, r, n) {
        var a = e.getReferringComponents("polar", Or).models[0],
            i = a.findAxisModel("radiusAxis"),
            o = a.findAxisModel("angleAxis");
        t.coordSysDims = ["radius", "angle"], r.set("radius", i), r.set("angle", o), cn(i) && (n.set("radius", i), t.firstCategoryDimIndex = 0), cn(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1))
    },
    geo: function (e, t, r, n) {
        t.coordSysDims = ["lng", "lat"]
    },
    parallel: function (e, t, r, n) {
        var a = e.ecModel,
            i = a.getComponent("parallel", e.get("parallelIndex")),
            o = t.coordSysDims = i.dimensions.slice();
        A(i.parallelAxisIndex, function (s, u) {
            var l = a.getComponent("parallelAxis", s),
                f = o[u];
            r.set(f, l), cn(l) && (n.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u))
        })
    }
};

function cn(e) {
    return e.get("type") === "category"
}

function vT(e, t, r) {
    r = r || {};
    var n = r.byIndex,
        a = r.stackedCoordDimension,
        i, o, s;
    cT(t) ? i = t : (o = t.schema, i = o.dimensions, s = t.store);
    var u = !!(e && e.get("stack")),
        l, f, h, c;
    if (A(i, function (m, _) {
            U(m) && (i[_] = m = {
                name: m
            }), u && !m.isExtraCoord && (!n && !l && m.ordinalMeta && (l = m), !f && m.type !== "ordinal" && m.type !== "time" && (!a || a === m.coordDim) && (f = m))
        }), f && !n && !l && (n = !0), f) {
        h = "__\0ecstackresult_" + e.id, c = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
        var v = f.coordDim,
            d = f.type,
            y = 0;
        A(i, function (m) {
            m.coordDim === v && y++
        });
        var p = {
                name: h,
                coordDim: v,
                coordDimIndex: y,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length
            },
            g = {
                name: c,
                coordDim: c,
                coordDimIndex: y + 1,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length + 1
            };
        o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(c, d), g.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(g)) : (i.push(p), i.push(g))
    }
    return {
        stackedDimension: f && f.name,
        stackedByDimension: l && l.name,
        isStackedByIndex: n,
        stackedOverDimension: c,
        stackResultDimension: h
    }
}

function cT(e) {
    return !sg(e.schema)
}

function cg(e, t) {
    return !!t && t === e.getCalculationInfo("stackedDimension")
}

function dT(e, t) {
    return cg(e, t) ? e.getCalculationInfo("stackResultDimension") : t
}

function pT(e, t) {
    var r = e.get("coordinateSystem"),
        n = Pl.get(r),
        a;
    return t && t.coordSysDims && (a = V(t.coordSysDims, function (i) {
        var o = {
                name: i
            },
            s = t.axisMap.get(i);
        if (s) {
            var u = s.get("type");
            o.type = Jb(u)
        }
        return o
    })), a || (a = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), a
}

function gT(e, t, r) {
    var n, a;
    return r && A(e, function (i, o) {
        var s = i.coordDim,
            u = r.categoryAxisMap.get(s);
        u && (n == null && (n = o), i.ordinalMeta = u.getOrdinalMeta(), t && (i.createInvertedIndices = !0)), i.otherDims.itemName != null && (a = !0)
    }), !a && n != null && (e[n].otherDims.itemName = 0), n
}

function dg(e, t, r) {
    r = r || {};
    var n = t.getSourceManager(),
        a, i = !1;
    e ? (i = !0, a = El(e)) : (a = n.getSource(), i = a.sourceFormat === ae);
    var o = fT(t),
        s = pT(t, o),
        u = r.useEncodeDefaulter,
        l = Q(u) ? u : u ? Xr(rS, s, t) : null,
        f = {
            coordDimensions: s,
            generateCoord: r.generateCoord,
            encodeDefine: t.getEncode(),
            encodeDefaulter: l,
            canOmitUnusedDimensions: !i
        },
        h = vg(a, f),
        c = gT(h.dimensions, r.createInvertedIndices, o),
        v = i ? null : n.getSharedDataStore(h),
        d = vT(t, {
            schema: h,
            store: v
        }),
        y = new hg(h, t);
    y.setCalculationInfo(d);
    var p = c != null && yT(a) ? function (g, m, _, S) {
        return S === c ? _ : this.defaultDimValueGetter(g, m, _, S)
    } : null;
    return y.hasItemOption = !1, y.initData(i ? a : v, null, p), y
}

function yT(e) {
    if (e.sourceFormat === ae) {
        var t = mT(e.data || []);
        return !B(Oa(t))
    }
}

function mT(e) {
    for (var t = 0; t < e.length && e[t] == null;) t++;
    return e[t]
}
var pg = function () {
    function e(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0]
    }
    return e.prototype.getSetting = function (t) {
        return this._setting[t]
    }, e.prototype.unionExtent = function (t) {
        var r = this._extent;
        t[0] < r[0] && (r[0] = t[0]), t[1] > r[1] && (r[1] = t[1])
    }, e.prototype.unionExtentFromData = function (t, r) {
        this.unionExtent(t.getApproximateExtent(r))
    }, e.prototype.getExtent = function () {
        return this._extent.slice()
    }, e.prototype.setExtent = function (t, r) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(r) || (n[1] = r)
    }, e.prototype.isInExtentRange = function (t) {
        return this._extent[0] <= t && this._extent[1] >= t
    }, e.prototype.isBlank = function () {
        return this._isBlank
    }, e.prototype.setBlank = function (t) {
        this._isBlank = t
    }, e
}();
mo(pg);
const $e = pg;
var _T = 0,
    Ev = function () {
        function e(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++_T
        }
        return e.createByAxisModel = function (t) {
            var r = t.option,
                n = r.data,
                a = n && V(n, ST);
            return new e({
                categories: a,
                needCollect: !a,
                deduplication: r.dedplication !== !1
            })
        }, e.prototype.getOrdinal = function (t) {
            return this._getOrCreateMap().get(t)
        }, e.prototype.parseAndCollect = function (t) {
            var r, n = this._needCollect;
            if (!U(t) && !n) return t;
            if (n && !this._deduplication) return r = this.categories.length, this.categories[r] = t, r;
            var a = this._getOrCreateMap();
            return r = a.get(t), r == null && (n ? (r = this.categories.length, this.categories[r] = t, a.set(t, r)) : r = NaN), r
        }, e.prototype._getOrCreateMap = function () {
            return this._map || (this._map = K(this.categories))
        }, e
    }();

function ST(e) {
    return Y(e) && e.value != null ? e.value : e + ""
}

function VD(e) {
    return e.type === "interval" || e.type === "log"
}

function wT(e, t, r, n) {
    var a = {},
        i = e[1] - e[0],
        o = a.interval = Nc(i / t, !0);
    r != null && o < r && (o = a.interval = r), n != null && o > n && (o = a.interval = n);
    var s = a.intervalPrecision = gg(o),
        u = a.niceTickExtent = [dt(Math.ceil(e[0] / o) * o, s), dt(Math.floor(e[1] / o) * o, s)];
    return bT(u, e), a
}

function Ys(e) {
    var t = Math.pow(10, ol(e)),
        r = e / t;
    return r ? r === 2 ? r = 3 : r === 3 ? r = 5 : r *= 2 : r = 1, dt(r * t)
}

function gg(e) {
    return Ge(e) + 2
}

function kv(e, t, r) {
    e[t] = Math.max(Math.min(e[t], r[1]), r[0])
}

function bT(e, t) {
    !isFinite(e[0]) && (e[0] = t[0]), !isFinite(e[1]) && (e[1] = t[1]), kv(e, 0, t), kv(e, 1, t), e[0] > e[1] && (e[0] = e[1])
}

function No(e, t) {
    return e >= t[0] && e <= t[1]
}

function Fo(e, t) {
    return t[1] === t[0] ? .5 : (e - t[0]) / (t[1] - t[0])
}

function Bo(e, t) {
    return e * (t[1] - t[0]) + t[0]
}
var yg = function (e) {
    G(t, e);

    function t(r) {
        var n = e.call(this, r) || this;
        n.type = "ordinal";
        var a = n.getSetting("ordinalMeta");
        return a || (a = new Ev({})), B(a) && (a = new Ev({
            categories: V(a, function (i) {
                return Y(i) ? i.value : i
            })
        })), n._ordinalMeta = a, n._extent = n.getSetting("extent") || [0, a.categories.length - 1], n
    }
    return t.prototype.parse = function (r) {
        return r == null ? NaN : U(r) ? this._ordinalMeta.getOrdinal(r) : Math.round(r)
    }, t.prototype.contain = function (r) {
        return r = this.parse(r), No(r, this._extent) && this._ordinalMeta.categories[r] != null
    }, t.prototype.normalize = function (r) {
        return r = this._getTickNumber(this.parse(r)), Fo(r, this._extent)
    }, t.prototype.scale = function (r) {
        return r = Math.round(Bo(r, this._extent)), this.getRawOrdinalNumber(r)
    }, t.prototype.getTicks = function () {
        for (var r = [], n = this._extent, a = n[0]; a <= n[1];) r.push({
            value: a
        }), a++;
        return r
    }, t.prototype.getMinorTicks = function (r) {}, t.prototype.setSortInfo = function (r) {
        if (r == null) {
            this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
            return
        }
        for (var n = r.ordinalNumbers, a = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = Math.min(s, n.length); o < u; ++o) {
            var l = n[o];
            a[o] = l, i[l] = o
        }
        for (var f = 0; o < s; ++o) {
            for (; i[f] != null;) f++;
            a.push(f), i[f] = o
        }
    }, t.prototype._getTickNumber = function (r) {
        var n = this._ticksByOrdinalNumber;
        return n && r >= 0 && r < n.length ? n[r] : r
    }, t.prototype.getRawOrdinalNumber = function (r) {
        var n = this._ordinalNumbersByTick;
        return n && r >= 0 && r < n.length ? n[r] : r
    }, t.prototype.getLabel = function (r) {
        if (!this.isBlank()) {
            var n = this.getRawOrdinalNumber(r.value),
                a = this._ordinalMeta.categories[n];
            return a == null ? "" : a + ""
        }
    }, t.prototype.count = function () {
        return this._extent[1] - this._extent[0] + 1
    }, t.prototype.unionExtentFromData = function (r, n) {
        this.unionExtent(r.getApproximateExtent(n))
    }, t.prototype.isInExtentRange = function (r) {
        return r = this._getTickNumber(r), this._extent[0] <= r && this._extent[1] >= r
    }, t.prototype.getOrdinalMeta = function () {
        return this._ordinalMeta
    }, t.prototype.calcNiceTicks = function () {}, t.prototype.calcNiceExtent = function () {}, t.type = "ordinal", t
}($e);
$e.registerClass(yg);
const mg = yg;
var Er = dt,
    _g = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.type = "interval", r._interval = 0, r._intervalPrecision = 2, r
        }
        return t.prototype.parse = function (r) {
            return r
        }, t.prototype.contain = function (r) {
            return No(r, this._extent)
        }, t.prototype.normalize = function (r) {
            return Fo(r, this._extent)
        }, t.prototype.scale = function (r) {
            return Bo(r, this._extent)
        }, t.prototype.setExtent = function (r, n) {
            var a = this._extent;
            isNaN(r) || (a[0] = parseFloat(r)), isNaN(n) || (a[1] = parseFloat(n))
        }, t.prototype.unionExtent = function (r) {
            var n = this._extent;
            r[0] < n[0] && (n[0] = r[0]), r[1] > n[1] && (n[1] = r[1]), this.setExtent(n[0], n[1])
        }, t.prototype.getInterval = function () {
            return this._interval
        }, t.prototype.setInterval = function (r) {
            this._interval = r, this._niceExtent = this._extent.slice(), this._intervalPrecision = gg(r)
        }, t.prototype.getTicks = function (r) {
            var n = this._interval,
                a = this._extent,
                i = this._niceExtent,
                o = this._intervalPrecision,
                s = [];
            if (!n) return s;
            var u = 1e4;
            a[0] < i[0] && (r ? s.push({
                value: Er(i[0] - n, o)
            }) : s.push({
                value: a[0]
            }));
            for (var l = i[0]; l <= i[1] && (s.push({
                    value: l
                }), l = Er(l + n, o), l !== s[s.length - 1].value);)
                if (s.length > u) return [];
            var f = s.length ? s[s.length - 1].value : i[1];
            return a[1] > f && (r ? s.push({
                value: Er(f + n, o)
            }) : s.push({
                value: a[1]
            })), s
        }, t.prototype.getMinorTicks = function (r) {
            for (var n = this.getTicks(!0), a = [], i = this.getExtent(), o = 1; o < n.length; o++) {
                for (var s = n[o], u = n[o - 1], l = 0, f = [], h = s.value - u.value, c = h / r; l < r - 1;) {
                    var v = Er(u.value + (l + 1) * c);
                    v > i[0] && v < i[1] && f.push(v), l++
                }
                a.push(f)
            }
            return a
        }, t.prototype.getLabel = function (r, n) {
            if (r == null) return "";
            var a = n && n.precision;
            a == null ? a = Ge(r.value) || 0 : a === "auto" && (a = this._intervalPrecision);
            var i = Er(r.value, a, !0);
            return Jd(i)
        }, t.prototype.calcNiceTicks = function (r, n, a) {
            r = r || 5;
            var i = this._extent,
                o = i[1] - i[0];
            if (isFinite(o)) {
                o < 0 && (o = -o, i.reverse());
                var s = wT(i, r, n, a);
                this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent
            }
        }, t.prototype.calcNiceExtent = function (r) {
            var n = this._extent;
            if (n[0] === n[1])
                if (n[0] !== 0) {
                    var a = Math.abs(n[0]);
                    r.fixMax || (n[1] += a / 2), n[0] -= a / 2
                } else n[1] = 1;
            var i = n[1] - n[0];
            isFinite(i) || (n[0] = 0, n[1] = 1), this.calcNiceTicks(r.splitNumber, r.minInterval, r.maxInterval);
            var o = this._interval;
            r.fixMin || (n[0] = Er(Math.floor(n[0] / o) * o)), r.fixMax || (n[1] = Er(Math.ceil(n[1] / o) * o))
        }, t.prototype.setNiceExtent = function (r, n) {
            this._niceExtent = [r, n]
        }, t.type = "interval", t
    }($e);
$e.registerClass(_g);
const $r = _g;
var Sg = typeof Float32Array < "u",
    TT = Sg ? Float32Array : Array;

function $s(e) {
    return B(e) ? Sg ? new Float32Array(e) : e : new TT(e)
}
var $u = "__ec_stack_";

function Yl(e) {
    return e.get("stack") || $u + e.seriesIndex
}

function $l(e) {
    return e.dim + e.index
}

function GD(e) {
    var t = [],
        r = e.axis,
        n = "axis0";
    if (r.type === "category") {
        for (var a = r.getBandWidth(), i = 0; i < e.count; i++) t.push(j({
            bandWidth: a,
            axisKey: n,
            stackId: $u + i
        }, e));
        for (var o = Tg(t), s = [], i = 0; i < e.count; i++) {
            var u = o[n][$u + i];
            u.offsetCenter = u.offset + u.width / 2, s.push(u)
        }
        return s
    }
}

function wg(e, t) {
    var r = [];
    return t.eachSeriesByType(e, function (n) {
        Mg(n) && r.push(n)
    }), r
}

function MT(e) {
    var t = {};
    A(e, function (u) {
        var l = u.coordinateSystem,
            f = l.getBaseAxis();
        if (!(f.type !== "time" && f.type !== "value"))
            for (var h = u.getData(), c = f.dim + "_" + f.index, v = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), y = 0, p = d.count(); y < p; ++y) {
                var g = d.get(v, y);
                t[c] ? t[c].push(g) : t[c] = [g]
            }
    });
    var r = {};
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var a = t[n];
            if (a) {
                a.sort(function (u, l) {
                    return u - l
                });
                for (var i = null, o = 1; o < a.length; ++o) {
                    var s = a[o] - a[o - 1];
                    s > 0 && (i = i === null ? s : Math.min(i, s))
                }
                r[n] = i
            }
        } return r
}

function bg(e) {
    var t = MT(e),
        r = [];
    return A(e, function (n) {
        var a = n.coordinateSystem,
            i = a.getBaseAxis(),
            o = i.getExtent(),
            s;
        if (i.type === "category") s = i.getBandWidth();
        else if (i.type === "value" || i.type === "time") {
            var u = i.dim + "_" + i.index,
                l = t[u],
                f = Math.abs(o[1] - o[0]),
                h = i.scale.getExtent(),
                c = Math.abs(h[1] - h[0]);
            s = l ? f / c * l : f
        } else {
            var v = n.getData();
            s = Math.abs(o[1] - o[0]) / v.count()
        }
        var d = rt(n.get("barWidth"), s),
            y = rt(n.get("barMaxWidth"), s),
            p = rt(n.get("barMinWidth") || (xg(n) ? .5 : 1), s),
            g = n.get("barGap"),
            m = n.get("barCategoryGap");
        r.push({
            bandWidth: s,
            barWidth: d,
            barMaxWidth: y,
            barMinWidth: p,
            barGap: g,
            barCategoryGap: m,
            axisKey: $l(i),
            stackId: Yl(n)
        })
    }), Tg(r)
}

function Tg(e) {
    var t = {};
    A(e, function (n, a) {
        var i = n.axisKey,
            o = n.bandWidth,
            s = t[i] || {
                bandWidth: o,
                remainedWidth: o,
                autoWidthCount: 0,
                categoryGap: null,
                gap: "20%",
                stacks: {}
            },
            u = s.stacks;
        t[i] = s;
        var l = n.stackId;
        u[l] || s.autoWidthCount++, u[l] = u[l] || {
            width: 0,
            maxWidth: 0
        };
        var f = n.barWidth;
        f && !u[l].width && (u[l].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
        var h = n.barMaxWidth;
        h && (u[l].maxWidth = h);
        var c = n.barMinWidth;
        c && (u[l].minWidth = c);
        var v = n.barGap;
        v != null && (s.gap = v);
        var d = n.barCategoryGap;
        d != null && (s.categoryGap = d)
    });
    var r = {};
    return A(t, function (n, a) {
        r[a] = {};
        var i = n.stacks,
            o = n.bandWidth,
            s = n.categoryGap;
        if (s == null) {
            var u = lt(i).length;
            s = Math.max(35 - u * 4, 15) + "%"
        }
        var l = rt(s, o),
            f = rt(n.gap, 1),
            h = n.remainedWidth,
            c = n.autoWidthCount,
            v = (h - l) / (c + (c - 1) * f);
        v = Math.max(v, 0), A(i, function (g) {
            var m = g.maxWidth,
                _ = g.minWidth;
            if (g.width) {
                var S = g.width;
                m && (S = Math.min(S, m)), _ && (S = Math.max(S, _)), g.width = S, h -= S + f * S, c--
            } else {
                var S = v;
                m && m < S && (S = Math.min(m, h)), _ && _ > S && (S = _), S !== v && (g.width = S, h -= S + f * S, c--)
            }
        }), v = (h - l) / (c + (c - 1) * f), v = Math.max(v, 0);
        var d = 0,
            y;
        A(i, function (g, m) {
            g.width || (g.width = v), y = g, d += g.width * (1 + f)
        }), y && (d -= y.width * f);
        var p = -d / 2;
        A(i, function (g, m) {
            r[a][m] = r[a][m] || {
                bandWidth: o,
                offset: p,
                width: g.width
            }, p += g.width * (1 + f)
        })
    }), r
}

function xT(e, t, r) {
    if (e && t) {
        var n = e[$l(t)];
        return n != null && r != null ? n[Yl(r)] : n
    }
}

function DT(e, t) {
    var r = wg(e, t),
        n = bg(r);
    A(r, function (a) {
        var i = a.getData(),
            o = a.coordinateSystem,
            s = o.getBaseAxis(),
            u = Yl(a),
            l = n[$l(s)][u],
            f = l.offset,
            h = l.width;
        i.setLayout({
            bandWidth: l.bandWidth,
            offset: f,
            size: h
        })
    })
}

function CT(e) {
    return {
        seriesType: e,
        plan: Ap(),
        reset: function (t) {
            if (Mg(t)) {
                var r = t.getData(),
                    n = t.coordinateSystem,
                    a = n.getBaseAxis(),
                    i = n.getOtherAxis(a),
                    o = r.getDimensionIndex(r.mapDimension(i.dim)),
                    s = r.getDimensionIndex(r.mapDimension(a.dim)),
                    u = t.get("showBackground", !0),
                    l = r.mapDimension(i.dim),
                    f = r.getCalculationInfo("stackResultDimension"),
                    h = cg(r, l) && !!r.getCalculationInfo("stackedOnSeries"),
                    c = i.isHorizontal(),
                    v = AT(a, i),
                    d = xg(t),
                    y = t.get("barMinHeight") || 0,
                    p = f && r.getDimensionIndex(f),
                    g = r.getLayout("size"),
                    m = r.getLayout("offset");
                return {
                    progress: function (_, S) {
                        for (var b = _.count, w = d && $s(b * 3), x = d && u && $s(b * 3), T = d && $s(b), D = n.master.getRect(), C = c ? D.width : D.height, M, L = S.getStore(), P = 0;
                            (M = _.next()) != null;) {
                            var I = L.get(h ? p : o, M),
                                R = L.get(s, M),
                                E = v,
                                z = void 0;
                            h && (z = +I - L.get(o, M));
                            var k = void 0,
                                N = void 0,
                                F = void 0,
                                $ = void 0;
                            if (c) {
                                var q = n.dataToPoint([I, R]);
                                if (h) {
                                    var st = n.dataToPoint([z, R]);
                                    E = st[0]
                                }
                                k = E, N = q[1] + m, F = q[0] - E, $ = g, Math.abs(F) < y && (F = (F < 0 ? -1 : 1) * y)
                            } else {
                                var q = n.dataToPoint([R, I]);
                                if (h) {
                                    var st = n.dataToPoint([R, z]);
                                    E = st[1]
                                }
                                k = q[0] + m, N = E, F = g, $ = q[1] - E, Math.abs($) < y && ($ = ($ <= 0 ? -1 : 1) * y)
                            }
                            d ? (w[P] = k, w[P + 1] = N, w[P + 2] = c ? F : $, x && (x[P] = c ? D.x : k, x[P + 1] = c ? N : D.y, x[P + 2] = C), T[M] = M) : S.setItemLayout(M, {
                                x: k,
                                y: N,
                                width: F,
                                height: $
                            }), P += 3
                        }
                        d && S.setLayout({
                            largePoints: w,
                            largeDataIndices: T,
                            largeBackgroundPoints: x,
                            valueAxisHorizontal: c
                        })
                    }
                }
            }
        }
    }
}

function Mg(e) {
    return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d"
}

function xg(e) {
    return e.pipelineContext && e.pipelineContext.large
}

function AT(e, t) {
    return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0))
}
var LT = function (e, t, r, n) {
        for (; r < n;) {
            var a = r + n >>> 1;
            e[a][1] < t ? r = a + 1 : n = a
        }
        return r
    },
    Dg = function (e) {
        G(t, e);

        function t(r) {
            var n = e.call(this, r) || this;
            return n.type = "time", n
        }
        return t.prototype.getLabel = function (r) {
            var n = this.getSetting("useUTC");
            return xl(r.value, Th[U1(xn(this._minLevelUnit))] || Th.second, n, this.getSetting("locale"))
        }, t.prototype.getFormattedLabel = function (r, n, a) {
            var i = this.getSetting("useUTC"),
                o = this.getSetting("locale");
            return Y1(r, n, a, o, i)
        }, t.prototype.getTicks = function () {
            var r = this._interval,
                n = this._extent,
                a = [];
            if (!r) return a;
            a.push({
                value: n[0],
                level: 0
            });
            var i = this.getSetting("useUTC"),
                o = NT(this._minLevelUnit, this._approxInterval, i, n);
            return a = a.concat(o), a.push({
                value: n[1],
                level: 0
            }), a
        }, t.prototype.calcNiceExtent = function (r) {
            var n = this._extent;
            if (n[0] === n[1] && (n[0] -= te, n[1] += te), n[1] === -1 / 0 && n[0] === 1 / 0) {
                var a = new Date;
                n[1] = +new Date(a.getFullYear(), a.getMonth(), a.getDate()), n[0] = n[1] - te
            }
            this.calcNiceTicks(r.splitNumber, r.minInterval, r.maxInterval)
        }, t.prototype.calcNiceTicks = function (r, n, a) {
            r = r || 10;
            var i = this._extent,
                o = i[1] - i[0];
            this._approxInterval = o / r, n != null && this._approxInterval < n && (this._approxInterval = n), a != null && this._approxInterval > a && (this._approxInterval = a);
            var s = pi.length,
                u = Math.min(LT(pi, this._approxInterval, 0, s), s - 1);
            this._interval = pi[u][1], this._minLevelUnit = pi[Math.max(u - 1, 0)][0]
        }, t.prototype.parse = function (r) {
            return it(r) ? r : +We(r)
        }, t.prototype.contain = function (r) {
            return No(this.parse(r), this._extent)
        }, t.prototype.normalize = function (r) {
            return Fo(this.parse(r), this._extent)
        }, t.prototype.scale = function (r) {
            return Bo(r, this._extent)
        }, t.type = "time", t
    }($r),
    pi = [
        ["second", Tl],
        ["minute", Ml],
        ["hour", ya],
        ["quarter-day", ya * 6],
        ["half-day", ya * 12],
        ["day", te * 1.2],
        ["half-week", te * 3.5],
        ["week", te * 7],
        ["month", te * 31],
        ["quarter", te * 95],
        ["half-year", bh / 2],
        ["year", bh]
    ];

function IT(e, t, r, n) {
    var a = We(t),
        i = We(r),
        o = function (d) {
            return Mh(a, d, n) === Mh(i, d, n)
        },
        s = function () {
            return o("year")
        },
        u = function () {
            return s() && o("month")
        },
        l = function () {
            return u() && o("day")
        },
        f = function () {
            return l() && o("hour")
        },
        h = function () {
            return f() && o("minute")
        },
        c = function () {
            return h() && o("second")
        },
        v = function () {
            return c() && o("millisecond")
        };
    switch (e) {
        case "year":
            return s();
        case "month":
            return u();
        case "day":
            return l();
        case "hour":
            return f();
        case "minute":
            return h();
        case "second":
            return c();
        case "millisecond":
            return v()
    }
}

function PT(e, t) {
    return e /= te, e > 16 ? 16 : e > 7.5 ? 7 : e > 3.5 ? 4 : e > 1.5 ? 2 : 1
}

function RT(e) {
    var t = 30 * te;
    return e /= t, e > 6 ? 6 : e > 3 ? 3 : e > 2 ? 2 : 1
}

function ET(e) {
    return e /= ya, e > 12 ? 12 : e > 6 ? 6 : e > 3.5 ? 4 : e > 2 ? 2 : 1
}

function Ov(e, t) {
    return e /= t ? Ml : Tl, e > 30 ? 30 : e > 20 ? 20 : e > 15 ? 15 : e > 10 ? 10 : e > 5 ? 5 : e > 2 ? 2 : 1
}

function kT(e) {
    return Nc(e, !0)
}

function OT(e, t, r) {
    var n = new Date(e);
    switch (xn(t)) {
        case "year":
        case "month":
            n[$d(r)](0);
        case "day":
            n[Xd(r)](1);
        case "hour":
            n[qd(r)](0);
        case "minute":
            n[Zd(r)](0);
        case "second":
            n[Kd(r)](0), n[Qd(r)](0)
    }
    return n.getTime()
}

function NT(e, t, r, n) {
    var a = 1e4,
        i = Ud,
        o = 0;

    function s(C, M, L, P, I, R, E) {
        for (var z = new Date(M), k = M, N = z[P](); k < L && k <= n[1];) E.push({
            value: k
        }), N += C, z[I](N), k = z.getTime();
        E.push({
            value: k,
            notAdd: !0
        })
    }

    function u(C, M, L) {
        var P = [],
            I = !M.length;
        if (!IT(xn(C), n[0], n[1], r)) {
            I && (M = [{
                value: OT(new Date(n[0]), C, r)
            }, {
                value: n[1]
            }]);
            for (var R = 0; R < M.length - 1; R++) {
                var E = M[R].value,
                    z = M[R + 1].value;
                if (E !== z) {
                    var k = void 0,
                        N = void 0,
                        F = void 0,
                        $ = !1;
                    switch (C) {
                        case "year":
                            k = Math.max(1, Math.round(t / te / 365)), N = Dl(r), F = $1(r);
                            break;
                        case "half-year":
                        case "quarter":
                        case "month":
                            k = RT(t), N = Dn(r), F = $d(r);
                            break;
                        case "week":
                        case "half-week":
                        case "day":
                            k = PT(t), N = Ao(r), F = Xd(r), $ = !0;
                            break;
                        case "half-day":
                        case "quarter-day":
                        case "hour":
                            k = ET(t), N = Da(r), F = qd(r);
                            break;
                        case "minute":
                            k = Ov(t, !0), N = Lo(r), F = Zd(r);
                            break;
                        case "second":
                            k = Ov(t, !1), N = Io(r), F = Kd(r);
                            break;
                        case "millisecond":
                            k = kT(t), N = Po(r), F = Qd(r);
                            break
                    }
                    s(k, E, z, N, F, $, P), C === "year" && L.length > 1 && R === 0 && L.unshift({
                        value: L[0].value - k
                    })
                }
            }
            for (var R = 0; R < P.length; R++) L.push(P[R]);
            return P
        }
    }
    for (var l = [], f = [], h = 0, c = 0, v = 0; v < i.length && o++ < a; ++v) {
        var d = xn(i[v]);
        if (W1(i[v])) {
            u(i[v], l[l.length - 1] || [], f);
            var y = i[v + 1] ? xn(i[v + 1]) : null;
            if (d !== y) {
                if (f.length) {
                    c = h, f.sort(function (C, M) {
                        return C.value - M.value
                    });
                    for (var p = [], g = 0; g < f.length; ++g) {
                        var m = f[g].value;
                        (g === 0 || f[g - 1].value !== m) && (p.push(f[g]), m >= n[0] && m <= n[1] && h++)
                    }
                    var _ = (n[1] - n[0]) / t;
                    if (h > _ * 1.5 && c > _ / 1.5 || (l.push(p), h > _ || e === i[v])) break
                }
                f = []
            }
        }
    }
    for (var S = Wt(V(l, function (C) {
            return Wt(C, function (M) {
                return M.value >= n[0] && M.value <= n[1] && !M.notAdd
            })
        }), function (C) {
            return C.length > 0
        }), b = [], w = S.length - 1, v = 0; v < S.length; ++v)
        for (var x = S[v], T = 0; T < x.length; ++T) b.push({
            value: x[T].value,
            level: w - v
        });
    b.sort(function (C, M) {
        return C.value - M.value
    });
    for (var D = [], v = 0; v < b.length; ++v)(v === 0 || b[v].value !== b[v - 1].value) && D.push(b[v]);
    return D
}
$e.registerClass(Dg);
const FT = Dg;
var Nv = $e.prototype,
    wa = $r.prototype,
    BT = dt,
    zT = Math.floor,
    VT = Math.ceil,
    gi = Math.pow,
    oe = Math.log,
    Xl = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.type = "log", r.base = 10, r._originalScale = new $r, r._interval = 0, r
        }
        return t.prototype.getTicks = function (r) {
            var n = this._originalScale,
                a = this._extent,
                i = n.getExtent(),
                o = wa.getTicks.call(this, r);
            return V(o, function (s) {
                var u = s.value,
                    l = dt(gi(this.base, u));
                return l = u === a[0] && this._fixMin ? yi(l, i[0]) : l, l = u === a[1] && this._fixMax ? yi(l, i[1]) : l, {
                    value: l
                }
            }, this)
        }, t.prototype.setExtent = function (r, n) {
            var a = oe(this.base);
            r = oe(Math.max(0, r)) / a, n = oe(Math.max(0, n)) / a, wa.setExtent.call(this, r, n)
        }, t.prototype.getExtent = function () {
            var r = this.base,
                n = Nv.getExtent.call(this);
            n[0] = gi(r, n[0]), n[1] = gi(r, n[1]);
            var a = this._originalScale,
                i = a.getExtent();
            return this._fixMin && (n[0] = yi(n[0], i[0])), this._fixMax && (n[1] = yi(n[1], i[1])), n
        }, t.prototype.unionExtent = function (r) {
            this._originalScale.unionExtent(r);
            var n = this.base;
            r[0] = oe(r[0]) / oe(n), r[1] = oe(r[1]) / oe(n), Nv.unionExtent.call(this, r)
        }, t.prototype.unionExtentFromData = function (r, n) {
            this.unionExtent(r.getApproximateExtent(n))
        }, t.prototype.calcNiceTicks = function (r) {
            r = r || 10;
            var n = this._extent,
                a = n[1] - n[0];
            if (!(a === 1 / 0 || a <= 0)) {
                var i = Wy(a),
                    o = r / a * i;
                for (o <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                var s = [dt(VT(n[0] / i) * i), dt(zT(n[1] / i) * i)];
                this._interval = i, this._niceExtent = s
            }
        }, t.prototype.calcNiceExtent = function (r) {
            wa.calcNiceExtent.call(this, r), this._fixMin = r.fixMin, this._fixMax = r.fixMax
        }, t.prototype.parse = function (r) {
            return r
        }, t.prototype.contain = function (r) {
            return r = oe(r) / oe(this.base), No(r, this._extent)
        }, t.prototype.normalize = function (r) {
            return r = oe(r) / oe(this.base), Fo(r, this._extent)
        }, t.prototype.scale = function (r) {
            return r = Bo(r, this._extent), gi(this.base, r)
        }, t.type = "log", t
    }($e),
    Cg = Xl.prototype;
Cg.getMinorTicks = wa.getMinorTicks;
Cg.getLabel = wa.getLabel;

function yi(e, t) {
    return BT(e, Ge(t))
}
$e.registerClass(Xl);
const GT = Xl;
var HT = function () {
        function e(t, r, n) {
            this._prepareParams(t, r, n)
        }
        return e.prototype._prepareParams = function (t, r, n) {
            n[1] < n[0] && (n = [NaN, NaN]), this._dataMin = n[0], this._dataMax = n[1];
            var a = this._isOrdinal = t.type === "ordinal";
            this._needCrossZero = t.type === "interval" && r.getNeedCrossZero && r.getNeedCrossZero();
            var i = this._modelMinRaw = r.get("min", !0);
            Q(i) ? this._modelMinNum = mi(t, i({
                min: n[0],
                max: n[1]
            })) : i !== "dataMin" && (this._modelMinNum = mi(t, i));
            var o = this._modelMaxRaw = r.get("max", !0);
            if (Q(o) ? this._modelMaxNum = mi(t, o({
                    min: n[0],
                    max: n[1]
                })) : o !== "dataMax" && (this._modelMaxNum = mi(t, o)), a) this._axisDataLen = r.getCategories().length;
            else {
                var s = r.get("boundaryGap"),
                    u = B(s) ? s : [s || 0, s || 0];
                typeof u[0] == "boolean" || typeof u[1] == "boolean" ? this._boundaryGapInner = [0, 0] : this._boundaryGapInner = [lr(u[0], 1), lr(u[1], 1)]
            }
        }, e.prototype.calculate = function () {
            var t = this._isOrdinal,
                r = this._dataMin,
                n = this._dataMax,
                a = this._axisDataLen,
                i = this._boundaryGapInner,
                o = t ? null : n - r || Math.abs(r),
                s = this._modelMinRaw === "dataMin" ? r : this._modelMinNum,
                u = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum,
                l = s != null,
                f = u != null;
            s == null && (s = t ? a ? 0 : NaN : r - i[0] * o), u == null && (u = t ? a ? a - 1 : NaN : n + i[1] * o), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN);
            var h = Fi(s) || Fi(u) || t && !a;
            this._needCrossZero && (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
            var c = this._determinedMin,
                v = this._determinedMax;
            return c != null && (s = c, l = !0), v != null && (u = v, f = !0), {
                min: s,
                max: u,
                minFixed: l,
                maxFixed: f,
                isBlank: h
            }
        }, e.prototype.modifyDataMinMax = function (t, r) {
            this[UT[t]] = r
        }, e.prototype.setDeterminedMinMax = function (t, r) {
            var n = WT[t];
            this[n] = r
        }, e.prototype.freeze = function () {
            this.frozen = !0
        }, e
    }(),
    WT = {
        min: "_determinedMin",
        max: "_determinedMax"
    },
    UT = {
        min: "_dataMin",
        max: "_dataMax"
    };

function YT(e, t, r) {
    var n = e.rawExtentInfo;
    return n || (n = new HT(e, t, r), e.rawExtentInfo = n, n)
}

function mi(e, t) {
    return t == null ? null : Fi(t) ? NaN : e.parse(t)
}

function Ag(e, t) {
    var r = e.type,
        n = YT(e, t, e.getExtent()).calculate();
    e.setBlank(n.isBlank);
    var a = n.min,
        i = n.max,
        o = t.ecModel;
    if (o && r === "time") {
        var s = wg("bar", o),
            u = !1;
        if (A(s, function (h) {
                u = u || h.getBaseAxis() === t.axis
            }), u) {
            var l = bg(s),
                f = $T(a, i, t, l);
            a = f.min, i = f.max
        }
    }
    return {
        extent: [a, i],
        fixMin: n.minFixed,
        fixMax: n.maxFixed
    }
}

function $T(e, t, r, n) {
    var a = r.axis.getExtent(),
        i = a[1] - a[0],
        o = xT(n, r.axis);
    if (o === void 0) return {
        min: e,
        max: t
    };
    var s = 1 / 0;
    A(o, function (v) {
        s = Math.min(v.offset, s)
    });
    var u = -1 / 0;
    A(o, function (v) {
        u = Math.max(v.offset + v.width, u)
    }), s = Math.abs(s), u = Math.abs(u);
    var l = s + u,
        f = t - e,
        h = 1 - (s + u) / i,
        c = f / h - f;
    return t += c * (u / l), e -= c * (s / l), {
        min: e,
        max: t
    }
}

function HD(e, t) {
    var r = t,
        n = Ag(e, r),
        a = n.extent,
        i = r.get("splitNumber");
    e instanceof GT && (e.base = r.get("logBase"));
    var o = e.type,
        s = r.get("interval"),
        u = o === "interval" || o === "time";
    e.setExtent(a[0], a[1]), e.calcNiceExtent({
        splitNumber: i,
        fixMin: n.fixMin,
        fixMax: n.fixMax,
        minInterval: u ? r.get("minInterval") : null,
        maxInterval: u ? r.get("maxInterval") : null
    }), s != null && e.setInterval && e.setInterval(s)
}

function WD(e, t) {
    if (t = t || e.get("type"), t) switch (t) {
        case "category":
            return new mg({
                ordinalMeta: e.getOrdinalMeta ? e.getOrdinalMeta() : e.getCategories(),
                extent: [1 / 0, -1 / 0]
            });
        case "time":
            return new FT({
                locale: e.ecModel.getLocaleModel(),
                useUTC: e.ecModel.get("useUTC")
            });
        default:
            return new($e.getClass(t) || $r)
    }
}

function UD(e) {
    var t = e.scale.getExtent(),
        r = t[0],
        n = t[1];
    return !(r > 0 && n > 0 || r < 0 && n < 0)
}

function Ba(e) {
    var t = e.getLabelModel().get("formatter"),
        r = e.type === "category" ? e.scale.getExtent()[0] : null;
    return e.scale.type === "time" ? function (n) {
        return function (a, i) {
            return e.scale.getFormattedLabel(a, i, n)
        }
    }(t) : U(t) ? function (n) {
        return function (a) {
            var i = e.scale.getLabel(a),
                o = n.replace("{value}", i ? ? "");
            return o
        }
    }(t) : Q(t) ? function (n) {
        return function (a, i) {
            return r != null && (i = a.value - r), n(XT(e, a), i, a.level != null ? {
                level: a.level
            } : null)
        }
    }(t) : function (n) {
        return e.scale.getLabel(n)
    }
}

function XT(e, t) {
    return e.type === "category" ? e.scale.getLabel(t) : t.value
}

function YD(e) {
    var t = e.model,
        r = e.scale;
    if (!(!t.get(["axisLabel", "show"]) || r.isBlank())) {
        var n, a, i = r.getExtent();
        r instanceof mg ? a = r.count() : (n = r.getTicks(), a = n.length);
        var o = e.getLabelModel(),
            s = Ba(e),
            u, l = 1;
        a > 40 && (l = Math.ceil(a / 40));
        for (var f = 0; f < a; f += l) {
            var h = n ? n[f] : {
                    value: i[0] + f
                },
                c = s(h, f),
                v = o.getTextRect(c),
                d = qT(v, o.get("rotate") || 0);
            u ? u.union(d) : u = d
        }
        return u
    }
}

function qT(e, t) {
    var r = t * Math.PI / 180,
        n = e.width,
        a = e.height,
        i = n * Math.abs(Math.cos(r)) + Math.abs(a * Math.sin(r)),
        o = n * Math.abs(Math.sin(r)) + Math.abs(a * Math.cos(r)),
        s = new ot(e.x, e.y, i, o);
    return s
}

function ql(e) {
    var t = e.get("interval");
    return t ? ? "auto"
}

function Lg(e) {
    return e.type === "category" && ql(e.getLabelModel()) === 0
}

function ZT(e, t) {
    var r = {};
    return A(e.mapDimensionsAll(t), function (n) {
        r[dT(e, n)] = !0
    }), lt(r)
}

function $D(e, t, r) {
    t && A(ZT(t, r), function (n) {
        var a = t.getApproximateExtent(n);
        a[0] < e[0] && (e[0] = a[0]), a[1] > e[1] && (e[1] = a[1])
    })
}
var KT = function () {
        function e() {}
        return e.prototype.getNeedCrossZero = function () {
            var t = this.option;
            return !t.scale
        }, e.prototype.getCoordSysModel = function () {}, e
    }(),
    Pa = At();

function QT(e) {
    return e.type === "category" ? jT(e) : eM(e)
}

function JT(e, t) {
    return e.type === "category" ? tM(e, t) : {
        ticks: V(e.scale.getTicks(), function (r) {
            return r.value
        })
    }
}

function jT(e) {
    var t = e.getLabelModel(),
        r = Ig(e, t);
    return !t.get("show") || e.scale.isBlank() ? {
        labels: [],
        labelCategoryInterval: r.labelCategoryInterval
    } : r
}

function Ig(e, t) {
    var r = Pg(e, "labels"),
        n = ql(t),
        a = Rg(r, n);
    if (a) return a;
    var i, o;
    return Q(n) ? i = Og(e, n) : (o = n === "auto" ? rM(e) : n, i = kg(e, o)), Eg(r, n, {
        labels: i,
        labelCategoryInterval: o
    })
}

function tM(e, t) {
    var r = Pg(e, "ticks"),
        n = ql(t),
        a = Rg(r, n);
    if (a) return a;
    var i, o;
    if ((!t.get("show") || e.scale.isBlank()) && (i = []), Q(n)) i = Og(e, n, !0);
    else if (n === "auto") {
        var s = Ig(e, e.getLabelModel());
        o = s.labelCategoryInterval, i = V(s.labels, function (u) {
            return u.tickValue
        })
    } else o = n, i = kg(e, o, !0);
    return Eg(r, n, {
        ticks: i,
        tickCategoryInterval: o
    })
}

function eM(e) {
    var t = e.scale.getTicks(),
        r = Ba(e);
    return {
        labels: V(t, function (n, a) {
            return {
                level: n.level,
                formattedLabel: r(n, a),
                rawLabel: e.scale.getLabel(n),
                tickValue: n.value
            }
        })
    }
}

function Pg(e, t) {
    return Pa(e)[t] || (Pa(e)[t] = [])
}

function Rg(e, t) {
    for (var r = 0; r < e.length; r++)
        if (e[r].key === t) return e[r].value
}

function Eg(e, t, r) {
    return e.push({
        key: t,
        value: r
    }), r
}

function rM(e) {
    var t = Pa(e).autoInterval;
    return t ? ? (Pa(e).autoInterval = e.calculateCategoryInterval())
}

function nM(e) {
    var t = aM(e),
        r = Ba(e),
        n = (t.axisRotate - t.labelRotate) / 180 * Math.PI,
        a = e.scale,
        i = a.getExtent(),
        o = a.count();
    if (i[1] - i[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var u = i[0], l = e.dataToCoord(u + 1) - e.dataToCoord(u), f = Math.abs(l * Math.cos(n)), h = Math.abs(l * Math.sin(n)), c = 0, v = 0; u <= i[1]; u += s) {
        var d = 0,
            y = 0,
            p = Ic(r({
                value: u
            }), t.font, "center", "top");
        d = p.width * 1.3, y = p.height * 1.3, c = Math.max(c, d, 7), v = Math.max(v, y, 7)
    }
    var g = c / f,
        m = v / h;
    isNaN(g) && (g = 1 / 0), isNaN(m) && (m = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(g, m))),
        S = Pa(e.model),
        b = e.getExtent(),
        w = S.lastAutoInterval,
        x = S.lastTickCount;
    return w != null && x != null && Math.abs(w - _) <= 1 && Math.abs(x - o) <= 1 && w > _ && S.axisExtent0 === b[0] && S.axisExtent1 === b[1] ? _ = w : (S.lastTickCount = o, S.lastAutoInterval = _, S.axisExtent0 = b[0], S.axisExtent1 = b[1]), _
}

function aM(e) {
    var t = e.getLabelModel();
    return {
        axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
        labelRotate: t.get("rotate") || 0,
        font: t.getFont()
    }
}

function kg(e, t, r) {
    var n = Ba(e),
        a = e.scale,
        i = a.getExtent(),
        o = e.getLabelModel(),
        s = [],
        u = Math.max((t || 0) + 1, 1),
        l = i[0],
        f = a.count();
    l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
    var h = Lg(e),
        c = o.get("showMinLabel") || h,
        v = o.get("showMaxLabel") || h;
    c && l !== i[0] && y(i[0]);
    for (var d = l; d <= i[1]; d += u) y(d);
    v && d - u !== i[1] && y(i[1]);

    function y(p) {
        var g = {
            value: p
        };
        s.push(r ? p : {
            formattedLabel: n(g),
            rawLabel: a.getLabel(g),
            tickValue: p
        })
    }
    return s
}

function Og(e, t, r) {
    var n = e.scale,
        a = Ba(e),
        i = [];
    return A(n.getTicks(), function (o) {
        var s = n.getLabel(o),
            u = o.value;
        t(o.value, s) && i.push(r ? u : {
            formattedLabel: a(o),
            rawLabel: s,
            tickValue: u
        })
    }), i
}
var Fv = [0, 1],
    iM = function () {
        function e(t, r, n) {
            this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = r, this._extent = n || [0, 0]
        }
        return e.prototype.contain = function (t) {
            var r = this._extent,
                n = Math.min(r[0], r[1]),
                a = Math.max(r[0], r[1]);
            return t >= n && t <= a
        }, e.prototype.containData = function (t) {
            return this.scale.contain(t)
        }, e.prototype.getExtent = function () {
            return this._extent.slice()
        }, e.prototype.getPixelPrecision = function (t) {
            return zy(t || this.scale.getExtent(), this._extent)
        }, e.prototype.setExtent = function (t, r) {
            var n = this._extent;
            n[0] = t, n[1] = r
        }, e.prototype.dataToCoord = function (t, r) {
            var n = this._extent,
                a = this.scale;
            return t = a.normalize(t), this.onBand && a.type === "ordinal" && (n = n.slice(), Bv(n, a.count())), yu(t, Fv, n, r)
        }, e.prototype.coordToData = function (t, r) {
            var n = this._extent,
                a = this.scale;
            this.onBand && a.type === "ordinal" && (n = n.slice(), Bv(n, a.count()));
            var i = yu(t, n, Fv, r);
            return this.scale.scale(i)
        }, e.prototype.pointToData = function (t, r) {}, e.prototype.getTicksCoords = function (t) {
            t = t || {};
            var r = t.tickModel || this.getTickModel(),
                n = JT(this, r),
                a = n.ticks,
                i = V(a, function (s) {
                    return {
                        coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
                        tickValue: s
                    }
                }, this),
                o = r.get("alignWithLabel");
            return oM(this, i, o, t.clamp), i
        }, e.prototype.getMinorTicksCoords = function () {
            if (this.scale.type === "ordinal") return [];
            var t = this.model.getModel("minorTick"),
                r = t.get("splitNumber");
            r > 0 && r < 100 || (r = 5);
            var n = this.scale.getMinorTicks(r),
                a = V(n, function (i) {
                    return V(i, function (o) {
                        return {
                            coord: this.dataToCoord(o),
                            tickValue: o
                        }
                    }, this)
                }, this);
            return a
        }, e.prototype.getViewLabels = function () {
            return QT(this).labels
        }, e.prototype.getLabelModel = function () {
            return this.model.getModel("axisLabel")
        }, e.prototype.getTickModel = function () {
            return this.model.getModel("axisTick")
        }, e.prototype.getBandWidth = function () {
            var t = this._extent,
                r = this.scale.getExtent(),
                n = r[1] - r[0] + (this.onBand ? 1 : 0);
            n === 0 && (n = 1);
            var a = Math.abs(t[1] - t[0]);
            return Math.abs(a) / n
        }, e.prototype.calculateCategoryInterval = function () {
            return nM(this)
        }, e
    }();

function Bv(e, t) {
    var r = e[1] - e[0],
        n = t,
        a = r / n / 2;
    e[0] += a, e[1] -= a
}

function oM(e, t, r, n) {
    var a = t.length;
    if (!e.onBand || r || !a) return;
    var i = e.getExtent(),
        o, s;
    if (a === 1) t[0].coord = i[0], o = t[1] = {
        coord: i[1]
    };
    else {
        var u = t[a - 1].tickValue - t[0].tickValue,
            l = (t[a - 1].coord - t[0].coord) / u;
        A(t, function (v) {
            v.coord -= l / 2
        });
        var f = e.scale.getExtent();
        s = 1 + f[1] - t[a - 1].tickValue, o = {
            coord: t[a - 1].coord + l * s
        }, t.push(o)
    }
    var h = i[0] > i[1];
    c(t[0].coord, i[0]) && (n ? t[0].coord = i[0] : t.shift()), n && c(i[0], t[0].coord) && t.unshift({
        coord: i[0]
    }), c(i[1], o.coord) && (n ? o.coord = i[1] : t.pop()), n && c(o.coord, i[1]) && t.push({
        coord: i[1]
    });

    function c(v, d) {
        return v = dt(v), d = dt(d), h ? v > d : v < d
    }
}
const sM = iM;
var ta = Math.PI * 2,
    kr = Yr.CMD,
    uM = ["top", "right", "bottom", "left"];

function lM(e, t, r, n, a) {
    var i = r.width,
        o = r.height;
    switch (e) {
        case "top":
            n.set(r.x + i / 2, r.y - t), a.set(0, -1);
            break;
        case "bottom":
            n.set(r.x + i / 2, r.y + o + t), a.set(0, 1);
            break;
        case "left":
            n.set(r.x - t, r.y + o / 2), a.set(-1, 0);
            break;
        case "right":
            n.set(r.x + i + t, r.y + o / 2), a.set(1, 0);
            break
    }
}

function fM(e, t, r, n, a, i, o, s, u) {
    o -= e, s -= t;
    var l = Math.sqrt(o * o + s * s);
    o /= l, s /= l;
    var f = o * r + e,
        h = s * r + t;
    if (Math.abs(n - a) % ta < 1e-4) return u[0] = f, u[1] = h, l - r;
    if (i) {
        var c = n;
        n = nr(a), a = nr(c)
    } else n = nr(n), a = nr(a);
    n > a && (a += ta);
    var v = Math.atan2(s, o);
    if (v < 0 && (v += ta), v >= n && v <= a || v + ta >= n && v + ta <= a) return u[0] = f, u[1] = h, l - r;
    var d = r * Math.cos(n) + e,
        y = r * Math.sin(n) + t,
        p = r * Math.cos(a) + e,
        g = r * Math.sin(a) + t,
        m = (d - o) * (d - o) + (y - s) * (y - s),
        _ = (p - o) * (p - o) + (g - s) * (g - s);
    return m < _ ? (u[0] = d, u[1] = y, Math.sqrt(m)) : (u[0] = p, u[1] = g, Math.sqrt(_))
}

function ho(e, t, r, n, a, i, o, s) {
    var u = a - e,
        l = i - t,
        f = r - e,
        h = n - t,
        c = Math.sqrt(f * f + h * h);
    f /= c, h /= c;
    var v = u * f + l * h,
        d = v / c;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
    var y = o[0] = e + d * f,
        p = o[1] = t + d * h;
    return Math.sqrt((y - a) * (y - a) + (p - i) * (p - i))
}

function Ng(e, t, r, n, a, i, o) {
    r < 0 && (e = e + r, r = -r), n < 0 && (t = t + n, n = -n);
    var s = e + r,
        u = t + n,
        l = o[0] = Math.min(Math.max(a, e), s),
        f = o[1] = Math.min(Math.max(i, t), u);
    return Math.sqrt((l - a) * (l - a) + (f - i) * (f - i))
}
var he = [];

function hM(e, t, r) {
    var n = Ng(t.x, t.y, t.width, t.height, e.x, e.y, he);
    return r.set(he[0], he[1]), n
}

function vM(e, t, r) {
    for (var n = 0, a = 0, i = 0, o = 0, s, u, l = 1 / 0, f = t.data, h = e.x, c = e.y, v = 0; v < f.length;) {
        var d = f[v++];
        v === 1 && (n = f[v], a = f[v + 1], i = n, o = a);
        var y = l;
        switch (d) {
            case kr.M:
                i = f[v++], o = f[v++], n = i, a = o;
                break;
            case kr.L:
                y = ho(n, a, f[v], f[v + 1], h, c, he, !0), n = f[v++], a = f[v++];
                break;
            case kr.C:
                y = wc(n, a, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, he), n = f[v++], a = f[v++];
                break;
            case kr.Q:
                y = Tc(n, a, f[v++], f[v++], f[v], f[v + 1], h, c, he), n = f[v++], a = f[v++];
                break;
            case kr.A:
                var p = f[v++],
                    g = f[v++],
                    m = f[v++],
                    _ = f[v++],
                    S = f[v++],
                    b = f[v++];
                v += 1;
                var w = !!(1 - f[v++]);
                s = Math.cos(S) * m + p, u = Math.sin(S) * _ + g, v <= 1 && (i = s, o = u);
                var x = (h - p) * _ / m + p;
                y = fM(p, g, _, S, S + b, w, x, c, he), n = Math.cos(S + b) * m + p, a = Math.sin(S + b) * _ + g;
                break;
            case kr.R:
                i = n = f[v++], o = a = f[v++];
                var T = f[v++],
                    D = f[v++];
                y = Ng(i, o, T, D, h, c, he);
                break;
            case kr.Z:
                y = ho(n, a, i, o, h, c, he, !0), n = i, a = o;
                break
        }
        y < l && (l = y, r.set(he[0], he[1]))
    }
    return l
}
var ve = new W,
    nt = new W,
    ft = new W,
    Ie = new W,
    Ae = new W;

function XD(e, t) {
    if (e) {
        var r = e.getTextGuideLine(),
            n = e.getTextContent();
        if (n && r) {
            var a = e.textGuideLineConfig || {},
                i = [
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ],
                o = a.candidates || uM,
                s = n.getBoundingRect().clone();
            s.applyTransform(n.getComputedTransform());
            var u = 1 / 0,
                l = a.anchor,
                f = e.getComputedTransform(),
                h = f && el([], f),
                c = t.get("length2") || 0;
            l && ft.copy(l);
            for (var v = 0; v < o.length; v++) {
                var d = o[v];
                lM(d, 0, s, ve, Ie), W.scaleAndAdd(nt, ve, Ie, c), nt.transform(h);
                var y = e.getBoundingRect(),
                    p = l ? l.distance(nt) : e instanceof at ? vM(nt, e.path, ft) : hM(nt, y, ft);
                p < u && (u = p, nt.transform(f), ft.transform(f), ft.toArray(i[0]), nt.toArray(i[1]), ve.toArray(i[2]))
            }
            Fg(i, t.get("minTurnAngle")), r.setShape({
                points: i
            })
        }
    }
}
var vo = [],
    Pt = new W;

function Fg(e, t) {
    if (t <= 180 && t > 0) {
        t = t / 180 * Math.PI, ve.fromArray(e[0]), nt.fromArray(e[1]), ft.fromArray(e[2]), W.sub(Ie, ve, nt), W.sub(Ae, ft, nt);
        var r = Ie.len(),
            n = Ae.len();
        if (!(r < .001 || n < .001)) {
            Ie.scale(1 / r), Ae.scale(1 / n);
            var a = Ie.dot(Ae),
                i = Math.cos(t);
            if (i < a) {
                var o = ho(nt.x, nt.y, ft.x, ft.y, ve.x, ve.y, vo, !1);
                Pt.fromArray(vo), Pt.scaleAndAdd(Ae, o / Math.tan(Math.PI - t));
                var s = ft.x !== nt.x ? (Pt.x - nt.x) / (ft.x - nt.x) : (Pt.y - nt.y) / (ft.y - nt.y);
                if (isNaN(s)) return;
                s < 0 ? W.copy(Pt, nt) : s > 1 && W.copy(Pt, ft), Pt.toArray(e[1])
            }
        }
    }
}

function cM(e, t, r) {
    if (r <= 180 && r > 0) {
        r = r / 180 * Math.PI, ve.fromArray(e[0]), nt.fromArray(e[1]), ft.fromArray(e[2]), W.sub(Ie, nt, ve), W.sub(Ae, ft, nt);
        var n = Ie.len(),
            a = Ae.len();
        if (!(n < .001 || a < .001)) {
            Ie.scale(1 / n), Ae.scale(1 / a);
            var i = Ie.dot(t),
                o = Math.cos(r);
            if (i < o) {
                var s = ho(nt.x, nt.y, ft.x, ft.y, ve.x, ve.y, vo, !1);
                Pt.fromArray(vo);
                var u = Math.PI / 2,
                    l = Math.acos(Ae.dot(t)),
                    f = u + l - r;
                if (f >= u) W.copy(Pt, ft);
                else {
                    Pt.scaleAndAdd(Ae, s / Math.tan(Math.PI / 2 - f));
                    var h = ft.x !== nt.x ? (Pt.x - nt.x) / (ft.x - nt.x) : (Pt.y - nt.y) / (ft.y - nt.y);
                    if (isNaN(h)) return;
                    h < 0 ? W.copy(Pt, nt) : h > 1 && W.copy(Pt, ft)
                }
                Pt.toArray(e[1])
            }
        }
    }
}

function Xs(e, t, r, n) {
    var a = r === "normal",
        i = a ? e : e.ensureState(r);
    i.ignore = t;
    var o = n.get("smooth");
    o && o === !0 && (o = .3), i.shape = i.shape || {}, o > 0 && (i.shape.smooth = o);
    var s = n.getModel("lineStyle").getLineStyle();
    a ? e.useStyle(s) : i.style = s
}

function dM(e, t) {
    var r = t.smooth,
        n = t.points;
    if (n)
        if (e.moveTo(n[0][0], n[0][1]), r > 0 && n.length >= 3) {
            var a = ru(n[0], n[1]),
                i = ru(n[1], n[2]);
            if (!a || !i) {
                e.lineTo(n[1][0], n[1][1]), e.lineTo(n[2][0], n[2][1]);
                return
            }
            var o = Math.min(a, i) * r,
                s = Go([], n[1], n[0], o / a),
                u = Go([], n[1], n[2], o / i),
                l = Go([], s, u, .5);
            e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1])
        } else
            for (var f = 1; f < n.length; f++) e.lineTo(n[f][0], n[f][1])
}

function pM(e, t, r) {
    var n = e.getTextGuideLine(),
        a = e.getTextContent();
    if (!a) {
        n && e.removeTextGuideLine();
        return
    }
    for (var i = t.normal, o = i.get("show"), s = a.ignore, u = 0; u < Xi.length; u++) {
        var l = Xi[u],
            f = t[l],
            h = l === "normal";
        if (f) {
            var c = f.get("show"),
                v = h ? s : X(a.states[l] && a.states[l].ignore, s);
            if (v || !X(c, o)) {
                var d = h ? n : n && n.states[l];
                d && (d.ignore = !0), n && Xs(n, !0, l, f);
                continue
            }
            n || (n = new Kr, e.setTextGuideLine(n), !h && (s || !o) && Xs(n, !0, "normal", t.normal), e.stateProxy && (n.stateProxy = e.stateProxy)), Xs(n, !1, l, f)
        }
    }
    if (n) {
        j(n.style, r), n.style.fill = null;
        var y = i.get("showAbove"),
            p = e.textGuideLineConfig = e.textGuideLineConfig || {};
        p.showAbove = y || !1, n.buildPath = dM
    }
}

function gM(e, t) {
    t = t || "labelLine";
    for (var r = {
            normal: e.getModel(t)
        }, n = 0; n < Ee.length; n++) {
        var a = Ee[n];
        r[a] = e.getModel([a, t])
    }
    return r
}

function yM(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r];
        if (!n.defaultAttr.ignore) {
            var a = n.label,
                i = a.getComputedTransform(),
                o = a.getBoundingRect(),
                s = !i || i[1] < 1e-5 && i[2] < 1e-5,
                u = a.style.margin || 0,
                l = o.clone();
            l.applyTransform(i), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
            var f = s ? new Zi(o, i) : null;
            t.push({
                label: a,
                labelLine: n.labelLine,
                rect: l,
                localRect: o,
                obb: f,
                priority: n.priority,
                defaultAttr: n.defaultAttr,
                layoutOption: n.computedLayoutOption,
                axisAligned: s,
                transform: i
            })
        }
    }
    return t
}

function Bg(e, t, r, n, a, i) {
    var o = e.length;
    if (o < 2) return;
    e.sort(function (T, D) {
        return T.rect[t] - D.rect[t]
    });
    for (var s = 0, u, l = !1, f = 0, h = 0; h < o; h++) {
        var c = e[h],
            v = c.rect;
        u = v[t] - s, u < 0 && (v[t] -= u, c.label[t] -= u, l = !0);
        var d = Math.max(-u, 0);
        f += d, s = v[t] + v[r]
    }
    f > 0 && i && b(-f / o, 0, o);
    var y = e[0],
        p = e[o - 1],
        g, m;
    _(), g < 0 && w(-g, .8), m < 0 && w(m, .8), _(), S(g, m, 1), S(m, g, -1), _(), g < 0 && x(-g), m < 0 && x(m);

    function _() {
        g = y.rect[t] - n, m = a - p.rect[t] - p.rect[r]
    }

    function S(T, D, C) {
        if (T < 0) {
            var M = Math.min(D, -T);
            if (M > 0) {
                b(M * C, 0, o);
                var L = M + T;
                L < 0 && w(-L * C, 1)
            } else w(-T * C, 1)
        }
    }

    function b(T, D, C) {
        T !== 0 && (l = !0);
        for (var M = D; M < C; M++) {
            var L = e[M],
                P = L.rect;
            P[t] += T, L.label[t] += T
        }
    }

    function w(T, D) {
        for (var C = [], M = 0, L = 1; L < o; L++) {
            var P = e[L - 1].rect,
                I = Math.max(e[L].rect[t] - P[t] - P[r], 0);
            C.push(I), M += I
        }
        if (M) {
            var R = Math.min(Math.abs(T) / M, D);
            if (T > 0)
                for (var L = 0; L < o - 1; L++) {
                    var E = C[L] * R;
                    b(E, 0, L + 1)
                } else
                    for (var L = o - 1; L > 0; L--) {
                        var E = C[L - 1] * R;
                        b(-E, L, o)
                    }
        }
    }

    function x(T) {
        var D = T < 0 ? -1 : 1;
        T = Math.abs(T);
        for (var C = Math.ceil(T / (o - 1)), M = 0; M < o - 1; M++)
            if (D > 0 ? b(C, 0, M + 1) : b(-C, o - M - 1, o), T -= C, T <= 0) return
    }
    return l
}

function qD(e, t, r, n) {
    return Bg(e, "x", "width", t, r, n)
}

function mM(e, t, r, n) {
    return Bg(e, "y", "height", t, r, n)
}

function _M(e) {
    var t = [];
    e.sort(function (y, p) {
        return p.priority - y.priority
    });
    var r = new ot(0, 0, 0, 0);

    function n(y) {
        if (!y.ignore) {
            var p = y.ensureState("emphasis");
            p.ignore == null && (p.ignore = !1)
        }
        y.ignore = !0
    }
    for (var a = 0; a < e.length; a++) {
        var i = e[a],
            o = i.axisAligned,
            s = i.localRect,
            u = i.transform,
            l = i.label,
            f = i.labelLine;
        r.copy(i.rect), r.width -= .1, r.height -= .1, r.x += .05, r.y += .05;
        for (var h = i.obb, c = !1, v = 0; v < t.length; v++) {
            var d = t[v];
            if (r.intersect(d.rect)) {
                if (o && d.axisAligned) {
                    c = !0;
                    break
                }
                if (d.obb || (d.obb = new Zi(d.localRect, d.transform)), h || (h = new Zi(s, u)), h.intersect(d.obb)) {
                    c = !0;
                    break
                }
            }
        }
        c ? (n(l), f && n(f)) : (l.attr("ignore", i.defaultAttr.ignore), f && f.attr("ignore", i.defaultAttr.labelGuideIgnore), t.push(i))
    }
}

function SM(e, t) {
    var r = e.mapDimensionsAll("defaultedLabel"),
        n = r.length;
    if (n === 1) {
        var a = Cn(e, t, r[0]);
        return a != null ? a + "" : null
    } else if (n) {
        for (var i = [], o = 0; o < r.length; o++) i.push(Cn(e, t, r[o]));
        return i.join(" ")
    }
}

function wM(e, t) {
    var r = e.mapDimensionsAll("defaultedLabel");
    if (!B(t)) return t + "";
    for (var n = [], a = 0; a < r.length; a++) {
        var i = e.getDimensionIndex(r[a]);
        i >= 0 && n.push(t[i])
    }
    return n.join(" ")
}

function bM(e, t, r, n, a) {
    var i = e.getArea(),
        o = i.x,
        s = i.y,
        u = i.width,
        l = i.height,
        f = r.get(["lineStyle", "width"]) || 2;
    o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
    var h = new re({
        shape: {
            x: o,
            y: s,
            width: u,
            height: l
        }
    });
    if (t) {
        var c = e.getBaseAxis(),
            v = c.isHorizontal(),
            d = c.inverse;
        v ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
        var y = Q(a) ? function (p) {
            a(p, h)
        } : null;
        $t(h, {
            shape: {
                width: u,
                height: l,
                x: o,
                y: s
            }
        }, r, null, n, y)
    }
    return h
}

function TM(e, t, r) {
    var n = e.getArea(),
        a = dt(n.r0, 1),
        i = dt(n.r, 1),
        o = new Zr({
            shape: {
                cx: dt(e.cx, 1),
                cy: dt(e.cy, 1),
                r0: a,
                r: i,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                clockwise: n.clockwise
            }
        });
    if (t) {
        var s = e.getBaseAxis().dim === "angle";
        s ? o.shape.endAngle = n.startAngle : o.shape.r = a, $t(o, {
            shape: {
                endAngle: n.endAngle,
                r: i
            }
        }, r)
    }
    return o
}

function MM(e, t, r, n, a) {
    if (e) {
        if (e.type === "polar") return TM(e, t, r);
        if (e.type === "cartesian2d") return bM(e, t, r, n, a)
    } else return null;
    return null
}

function zg(e, t) {
    return e.type === t
}
var xM = {
        average: function (e) {
            for (var t = 0, r = 0, n = 0; n < e.length; n++) isNaN(e[n]) || (t += e[n], r++);
            return r === 0 ? NaN : t / r
        },
        sum: function (e) {
            for (var t = 0, r = 0; r < e.length; r++) t += e[r] || 0;
            return t
        },
        max: function (e) {
            for (var t = -1 / 0, r = 0; r < e.length; r++) e[r] > t && (t = e[r]);
            return isFinite(t) ? t : NaN
        },
        min: function (e) {
            for (var t = 1 / 0, r = 0; r < e.length; r++) e[r] < t && (t = e[r]);
            return isFinite(t) ? t : NaN
        },
        minmax: function (e) {
            for (var t = -1 / 0, r = -1 / 0, n = 0; n < e.length; n++) {
                var a = e[n],
                    i = Math.abs(a);
                i > t && (t = i, r = a)
            }
            return isFinite(r) ? r : NaN
        },
        nearest: function (e) {
            return e[0]
        }
    },
    DM = function (e) {
        return Math.round(e.length / 2)
    };

function CM(e) {
    return {
        seriesType: e,
        reset: function (t, r, n) {
            var a = t.getData(),
                i = t.get("sampling"),
                o = t.coordinateSystem,
                s = a.count();
            if (s > 10 && o.type === "cartesian2d" && i) {
                var u = o.getBaseAxis(),
                    l = o.getOtherAxis(u),
                    f = u.getExtent(),
                    h = n.getDevicePixelRatio(),
                    c = Math.abs(f[1] - f[0]) * (h || 1),
                    v = Math.round(s / c);
                if (isFinite(v) && v > 1) {
                    i === "lttb" && t.setData(a.lttbDownSample(a.mapDimension(l.dim), 1 / v));
                    var d = void 0;
                    U(i) ? d = xM[i] : Q(i) && (d = i), d && t.setData(a.downSample(a.mapDimension(l.dim), 1 / v, d, DM))
                }
            }
        }
    }
}
var Xu = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = t.type, r
    }
    return t.prototype.getInitialData = function (r, n) {
        return dg(null, this, {
            useEncodeDefaulter: !0
        })
    }, t.prototype.getMarkerPosition = function (r, n, a) {
        var i = this.coordinateSystem;
        if (i && i.clampData) {
            var o = i.clampData(r),
                s = i.dataToPoint(o);
            if (a) A(i.getAxes(), function (c, v) {
                if (c.type === "category" && n != null) {
                    var d = c.getTicksCoords(),
                        y = c.getTickModel().get("alignWithLabel"),
                        p = o[v],
                        g = n[v] === "x1" || n[v] === "y1";
                    if (g && !y && (p += 1), d.length < 2) return;
                    if (d.length === 2) {
                        s[v] = c.toGlobalCoord(c.getExtent()[g ? 1 : 0]);
                        return
                    }
                    for (var m = void 0, _ = void 0, S = 1, b = 0; b < d.length; b++) {
                        var w = d[b].coord,
                            x = b === d.length - 1 ? d[b - 1].tickValue + S : d[b].tickValue;
                        if (x === p) {
                            _ = w;
                            break
                        } else if (x < p) m = w;
                        else if (m != null && x > p) {
                            _ = (w + m) / 2;
                            break
                        }
                        b === 1 && (S = x - d[0].tickValue)
                    }
                    _ == null && (m ? m && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[v] = c.toGlobalCoord(_)
                }
            });
            else {
                var u = this.getData(),
                    l = u.getLayout("offset"),
                    f = u.getLayout("size"),
                    h = i.getBaseAxis().isHorizontal() ? 0 : 1;
                s[h] += l + f / 2
            }
            return s
        }
        return [NaN, NaN]
    }, t.type = "series.__base_bar__", t.defaultOption = {
        z: 2,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        barMinHeight: 0,
        barMinAngle: 0,
        large: !1,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: "mod"
    }, t
}(vr);
vr.registerClass(Xu);
var AM = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = t.type, r
    }
    return t.prototype.getInitialData = function () {
        return dg(null, this, {
            useEncodeDefaulter: !0,
            createInvertedIndices: !!this.get("realtimeSort", !0) || null
        })
    }, t.prototype.getProgressive = function () {
        return this.get("large") ? this.get("progressive") : !1
    }, t.prototype.getProgressiveThreshold = function () {
        var r = this.get("progressiveThreshold"),
            n = this.get("largeThreshold");
        return n > r && (r = n), r
    }, t.prototype.brushSelector = function (r, n, a) {
        return a.rect(n.getItemLayout(r))
    }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = F1(Xu.defaultOption, {
        clip: !0,
        roundCap: !1,
        showBackground: !1,
        backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
            borderColor: null,
            borderWidth: 0,
            borderType: "solid",
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1
        },
        select: {
            itemStyle: {
                borderColor: "#212121"
            }
        },
        realtimeSort: !1
    }), t
}(Xu);
const LM = AM;
var IM = function () {
        function e() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0
        }
        return e
    }(),
    zv = function (e) {
        G(t, e);

        function t(r) {
            var n = e.call(this, r) || this;
            return n.type = "sausage", n
        }
        return t.prototype.getDefaultShape = function () {
            return new IM
        }, t.prototype.buildPath = function (r, n) {
            var a = n.cx,
                i = n.cy,
                o = Math.max(n.r0 || 0, 0),
                s = Math.max(n.r, 0),
                u = (s - o) * .5,
                l = o + u,
                f = n.startAngle,
                h = n.endAngle,
                c = n.clockwise,
                v = Math.PI * 2,
                d = c ? h - f < v : f - h < v;
            d || (f = h - (c ? v : -v));
            var y = Math.cos(f),
                p = Math.sin(f),
                g = Math.cos(h),
                m = Math.sin(h);
            d ? (r.moveTo(y * o + a, p * o + i), r.arc(y * l + a, p * l + i, u, -Math.PI + f, f, !c)) : r.moveTo(y * s + a, p * s + i), r.arc(a, i, s, f, h, !c), r.arc(g * l + a, m * l + i, u, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && r.arc(a, i, o, h, f, c)
        }, t
    }(at);

function PM(e, t) {
    t = t || {};
    var r = t.isRoundCap;
    return function (n, a, i) {
        var o = a.position;
        if (!o || o instanceof Array) return Yi(n, a, i);
        var s = e(o),
            u = a.distance != null ? a.distance : 5,
            l = this.shape,
            f = l.cx,
            h = l.cy,
            c = l.r,
            v = l.r0,
            d = (c + v) / 2,
            y = l.startAngle,
            p = l.endAngle,
            g = (y + p) / 2,
            m = r ? Math.abs(c - v) / 2 : 0,
            _ = Math.cos,
            S = Math.sin,
            b = f + c * _(y),
            w = h + c * S(y),
            x = "left",
            T = "top";
        switch (s) {
            case "startArc":
                b = f + (v - u) * _(g), w = h + (v - u) * S(g), x = "center", T = "top";
                break;
            case "insideStartArc":
                b = f + (v + u) * _(g), w = h + (v + u) * S(g), x = "center", T = "bottom";
                break;
            case "startAngle":
                b = f + d * _(y) + _i(y, u + m, !1), w = h + d * S(y) + Si(y, u + m, !1), x = "right", T = "middle";
                break;
            case "insideStartAngle":
                b = f + d * _(y) + _i(y, -u + m, !1), w = h + d * S(y) + Si(y, -u + m, !1), x = "left", T = "middle";
                break;
            case "middle":
                b = f + d * _(g), w = h + d * S(g), x = "center", T = "middle";
                break;
            case "endArc":
                b = f + (c + u) * _(g), w = h + (c + u) * S(g), x = "center", T = "bottom";
                break;
            case "insideEndArc":
                b = f + (c - u) * _(g), w = h + (c - u) * S(g), x = "center", T = "top";
                break;
            case "endAngle":
                b = f + d * _(p) + _i(p, u + m, !0), w = h + d * S(p) + Si(p, u + m, !0), x = "left", T = "middle";
                break;
            case "insideEndAngle":
                b = f + d * _(p) + _i(p, -u + m, !0), w = h + d * S(p) + Si(p, -u + m, !0), x = "right", T = "middle";
                break;
            default:
                return Yi(n, a, i)
        }
        return n = n || {}, n.x = b, n.y = w, n.align = x, n.verticalAlign = T, n
    }
}

function RM(e, t, r, n) {
    if (it(n)) {
        e.setTextConfig({
            rotation: n
        });
        return
    } else if (B(t)) {
        e.setTextConfig({
            rotation: 0
        });
        return
    }
    var a = e.shape,
        i = a.clockwise ? a.startAngle : a.endAngle,
        o = a.clockwise ? a.endAngle : a.startAngle,
        s = (i + o) / 2,
        u, l = r(t);
    switch (l) {
        case "startArc":
        case "insideStartArc":
        case "middle":
        case "insideEndArc":
        case "endArc":
            u = s;
            break;
        case "startAngle":
        case "insideStartAngle":
            u = i;
            break;
        case "endAngle":
        case "insideEndAngle":
            u = o;
            break;
        default:
            e.setTextConfig({
                rotation: 0
            });
            return
    }
    var f = Math.PI * 1.5 - u;
    l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), e.setTextConfig({
        rotation: f
    })
}

function _i(e, t, r) {
    return t * Math.sin(e) * (r ? -1 : 1)
}

function Si(e, t, r) {
    return t * Math.cos(e) * (r ? 1 : -1)
}

function ua(e, t, r) {
    var n = e.get("borderRadius");
    if (n == null) return r ? {
        cornerRadius: 0
    } : null;
    B(n) || (n = [n, n, n, n]);
    var a = Math.abs(t.r || 0 - t.r0 || 0);
    return {
        cornerRadius: V(n, function (i) {
            return lr(i, a)
        })
    }
}
var qs = Math.max,
    Zs = Math.min;

function EM(e, t) {
    var r = e.getArea && e.getArea();
    if (zg(e, "cartesian2d")) {
        var n = e.getBaseAxis();
        if (n.type !== "category" || !n.onBand) {
            var a = t.getLayout("bandWidth");
            n.isHorizontal() ? (r.x -= a, r.width += a * 2) : (r.y -= a, r.height += a * 2)
        }
    }
    return r
}
var kM = function (e) {
        G(t, e);

        function t() {
            var r = e.call(this) || this;
            return r.type = t.type, r._isFirstFrame = !0, r
        }
        return t.prototype.render = function (r, n, a, i) {
            this._model = r, this._removeOnRenderedListener(a), this._updateDrawMode(r);
            var o = r.get("coordinateSystem");
            (o === "cartesian2d" || o === "polar") && (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(r, n, a) : this._renderNormal(r, n, a, i))
        }, t.prototype.incrementalPrepareRender = function (r) {
            this._clear(), this._updateDrawMode(r), this._updateLargeClip(r)
        }, t.prototype.incrementalRender = function (r, n) {
            this._progressiveEls = [], this._incrementalRenderLarge(r, n)
        }, t.prototype.eachRendered = function (r) {
            ml(this._progressiveEls || this.group, r)
        }, t.prototype._updateDrawMode = function (r) {
            var n = r.pipelineContext.large;
            (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear())
        }, t.prototype._renderNormal = function (r, n, a, i) {
            var o = this.group,
                s = r.getData(),
                u = this._data,
                l = r.coordinateSystem,
                f = l.getBaseAxis(),
                h;
            l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
            var c = r.isAnimationEnabled() ? r : null,
                v = OM(r, l);
            v && this._enableRealtimeSort(v, s, a);
            var d = r.get("clip", !0) || v,
                y = EM(l, s);
            o.removeClipPath();
            var p = r.get("roundCap", !0),
                g = r.get("showBackground", !0),
                m = r.getModel("backgroundStyle"),
                _ = m.get("borderRadius") || 0,
                S = [],
                b = this._backgroundEls,
                w = i && i.isInitSort,
                x = i && i.type === "changeAxisOrder";

            function T(M) {
                var L = wi[l.type](s, M),
                    P = HM(l, h, L);
                return P.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? P.setShape("r", _) : P.setShape("cornerRadius", _), S[M] = P, P
            }
            s.diff(u).add(function (M) {
                var L = s.getItemModel(M),
                    P = wi[l.type](s, M, L);
                if (g && T(M), !(!s.hasValue(M) || !Uv[l.type](P))) {
                    var I = !1;
                    d && (I = Vv[l.type](y, P));
                    var R = Gv[l.type](r, s, M, P, h, c, f.model, !1, p);
                    v && (R.forceLabelAnimation = !0), Yv(R, s, M, L, P, r, h, l.type === "polar"), w ? R.attr({
                        shape: P
                    }) : v ? Hv(v, c, R, P, M, h, !1, !1) : $t(R, {
                        shape: P
                    }, r, M), s.setItemGraphicEl(M, R), o.add(R), R.ignore = I
                }
            }).update(function (M, L) {
                var P = s.getItemModel(M),
                    I = wi[l.type](s, M, P);
                if (g) {
                    var R = void 0;
                    b.length === 0 ? R = T(L) : (R = b[L], R.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? R.setShape("r", _) : R.setShape("cornerRadius", _), S[M] = R);
                    var E = wi[l.type](s, M),
                        z = Gg(h, E, l);
                    ne(R, {
                        shape: z
                    }, c, M)
                }
                var k = u.getItemGraphicEl(L);
                if (!s.hasValue(M) || !Uv[l.type](I)) {
                    o.remove(k);
                    return
                }
                var N = !1;
                if (d && (N = Vv[l.type](y, I), N && o.remove(k)), k ? Qi(k) : k = Gv[l.type](r, s, M, I, h, c, f.model, !!k, p), v && (k.forceLabelAnimation = !0), x) {
                    var F = k.getTextContent();
                    if (F) {
                        var $ = Do(F);
                        $.prevValue != null && ($.prevValue = $.value)
                    }
                } else Yv(k, s, M, P, I, r, h, l.type === "polar");
                w ? k.attr({
                    shape: I
                }) : v ? Hv(v, c, k, I, M, h, !0, x) : ne(k, {
                    shape: I
                }, r, M, null), s.setItemGraphicEl(M, k), k.ignore = N, o.add(k)
            }).remove(function (M) {
                var L = u.getItemGraphicEl(M);
                L && Ki(L, r, M)
            }).execute();
            var D = this._backgroundGroup || (this._backgroundGroup = new ye);
            D.removeAll();
            for (var C = 0; C < S.length; ++C) D.add(S[C]);
            o.add(D), this._backgroundEls = S, this._data = s
        }, t.prototype._renderLarge = function (r, n, a) {
            this._clear(), Xv(r, this.group), this._updateLargeClip(r)
        }, t.prototype._incrementalRenderLarge = function (r, n) {
            this._removeBackground(), Xv(n, this.group, this._progressiveEls, !0)
        }, t.prototype._updateLargeClip = function (r) {
            var n = r.get("clip", !0) && MM(r.coordinateSystem, !1, r),
                a = this.group;
            n ? a.setClipPath(n) : a.removeClipPath()
        }, t.prototype._enableRealtimeSort = function (r, n, a) {
            var i = this;
            if (n.count()) {
                var o = r.baseAxis;
                if (this._isFirstFrame) this._dispatchInitSort(n, r, a), this._isFirstFrame = !1;
                else {
                    var s = function (u) {
                        var l = n.getItemGraphicEl(u),
                            f = l && l.shape;
                        return f && Math.abs(o.isHorizontal() ? f.height : f.width) || 0
                    };
                    this._onRendered = function () {
                        i._updateSortWithinSameData(n, s, o, a)
                    }, a.getZr().on("rendered", this._onRendered)
                }
            }
        }, t.prototype._dataSort = function (r, n, a) {
            var i = [];
            return r.each(r.mapDimension(n.dim), function (o, s) {
                var u = a(s);
                u = u ? ? NaN, i.push({
                    dataIndex: s,
                    mappedValue: u,
                    ordinalNumber: o
                })
            }), i.sort(function (o, s) {
                return s.mappedValue - o.mappedValue
            }), {
                ordinalNumbers: V(i, function (o) {
                    return o.ordinalNumber
                })
            }
        }, t.prototype._isOrderChangedWithinSameData = function (r, n, a) {
            for (var i = a.scale, o = r.mapDimension(a.dim), s = Number.MAX_VALUE, u = 0, l = i.getOrdinalMeta().categories.length; u < l; ++u) {
                var f = r.rawIndexOf(o, i.getRawOrdinalNumber(u)),
                    h = f < 0 ? Number.MIN_VALUE : n(r.indexOfRawIndex(f));
                if (h > s) return !0;
                s = h
            }
            return !1
        }, t.prototype._isOrderDifferentInView = function (r, n) {
            for (var a = n.scale, i = a.getExtent(), o = Math.max(0, i[0]), s = Math.min(i[1], a.getOrdinalMeta().categories.length - 1); o <= s; ++o)
                if (r.ordinalNumbers[o] !== a.getRawOrdinalNumber(o)) return !0
        }, t.prototype._updateSortWithinSameData = function (r, n, a, i) {
            if (this._isOrderChangedWithinSameData(r, n, a)) {
                var o = this._dataSort(r, a, n);
                this._isOrderDifferentInView(o, a) && (this._removeOnRenderedListener(i), i.dispatchAction({
                    type: "changeAxisOrder",
                    componentType: a.dim + "Axis",
                    axisId: a.index,
                    sortInfo: o
                }))
            }
        }, t.prototype._dispatchInitSort = function (r, n, a) {
            var i = n.baseAxis,
                o = this._dataSort(r, i, function (s) {
                    return r.get(r.mapDimension(n.otherAxis.dim), s)
                });
            a.dispatchAction({
                type: "changeAxisOrder",
                componentType: i.dim + "Axis",
                isInitSort: !0,
                axisId: i.index,
                sortInfo: o
            })
        }, t.prototype.remove = function (r, n) {
            this._clear(this._model), this._removeOnRenderedListener(n)
        }, t.prototype.dispose = function (r, n) {
            this._removeOnRenderedListener(n)
        }, t.prototype._removeOnRenderedListener = function (r) {
            this._onRendered && (r.getZr().off("rendered", this._onRendered), this._onRendered = null)
        }, t.prototype._clear = function (r) {
            var n = this.group,
                a = this._data;
            r && r.isAnimationEnabled() && a && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], a.eachItemGraphicEl(function (i) {
                Ki(i, r, gt(i).dataIndex)
            })) : n.removeAll(), this._data = null, this._isFirstFrame = !0
        }, t.prototype._removeBackground = function () {
            this.group.remove(this._backgroundGroup), this._backgroundGroup = null
        }, t.type = "bar", t
    }(sr),
    Vv = {
        cartesian2d: function (e, t) {
            var r = t.width < 0 ? -1 : 1,
                n = t.height < 0 ? -1 : 1;
            r < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
            var a = e.x + e.width,
                i = e.y + e.height,
                o = qs(t.x, e.x),
                s = Zs(t.x + t.width, a),
                u = qs(t.y, e.y),
                l = Zs(t.y + t.height, i),
                f = s < o,
                h = l < u;
            return t.x = f && o > a ? s : o, t.y = h && u > i ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, r < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h
        },
        polar: function (e, t) {
            var r = t.r0 <= t.r ? 1 : -1;
            if (r < 0) {
                var n = t.r;
                t.r = t.r0, t.r0 = n
            }
            var a = Zs(t.r, e.r),
                i = qs(t.r0, e.r0);
            t.r = a, t.r0 = i;
            var o = a - i < 0;
            if (r < 0) {
                var n = t.r;
                t.r = t.r0, t.r0 = n
            }
            return o
        }
    },
    Gv = {
        cartesian2d: function (e, t, r, n, a, i, o, s, u) {
            var l = new re({
                shape: O({}, n),
                z2: 1
            });
            if (l.__dataIndex = r, l.name = "item", i) {
                var f = l.shape,
                    h = a ? "height" : "width";
                f[h] = 0
            }
            return l
        },
        polar: function (e, t, r, n, a, i, o, s, u) {
            var l = !a && u ? zv : Zr,
                f = new l({
                    shape: n,
                    z2: 1
                });
            f.name = "item";
            var h = Vg(a);
            if (f.calculateTextPosition = PM(h, {
                    isRoundCap: l === zv
                }), i) {
                var c = f.shape,
                    v = a ? "r" : "endAngle",
                    d = {};
                c[v] = a ? n.r0 : n.startAngle, d[v] = n[v], (s ? ne : $t)(f, {
                    shape: d
                }, i)
            }
            return f
        }
    };

function OM(e, t) {
    var r = e.get("realtimeSort", !0),
        n = t.getBaseAxis();
    if (r && n.type === "category" && t.type === "cartesian2d") return {
        baseAxis: n,
        otherAxis: t.getOtherAxis(n)
    }
}

function Hv(e, t, r, n, a, i, o, s) {
    var u, l;
    i ? (l = {
        x: n.x,
        width: n.width
    }, u = {
        y: n.y,
        height: n.height
    }) : (l = {
        y: n.y,
        height: n.height
    }, u = {
        x: n.x,
        width: n.width
    }), s || (o ? ne : $t)(r, {
        shape: u
    }, t, a, null);
    var f = t ? e.baseAxis.model : null;
    (o ? ne : $t)(r, {
        shape: l
    }, f, a)
}

function Wv(e, t) {
    for (var r = 0; r < t.length; r++)
        if (!isFinite(e[t[r]])) return !0;
    return !1
}
var NM = ["x", "y", "width", "height"],
    FM = ["cx", "cy", "r", "startAngle", "endAngle"],
    Uv = {
        cartesian2d: function (e) {
            return !Wv(e, NM)
        },
        polar: function (e) {
            return !Wv(e, FM)
        }
    },
    wi = {
        cartesian2d: function (e, t, r) {
            var n = e.getItemLayout(t),
                a = r ? zM(r, n) : 0,
                i = n.width > 0 ? 1 : -1,
                o = n.height > 0 ? 1 : -1;
            return {
                x: n.x + i * a / 2,
                y: n.y + o * a / 2,
                width: n.width - i * a,
                height: n.height - o * a
            }
        },
        polar: function (e, t, r) {
            var n = e.getItemLayout(t);
            return {
                cx: n.cx,
                cy: n.cy,
                r0: n.r0,
                r: n.r,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                clockwise: n.clockwise
            }
        }
    };

function BM(e) {
    return e.startAngle != null && e.endAngle != null && e.startAngle === e.endAngle
}

function Vg(e) {
    return function (t) {
        var r = t ? "Arc" : "Angle";
        return function (n) {
            switch (n) {
                case "start":
                case "insideStart":
                case "end":
                case "insideEnd":
                    return n + r;
                default:
                    return n
            }
        }
    }(e)
}

function Yv(e, t, r, n, a, i, o, s) {
    var u = t.getItemVisual(r, "style");
    if (s) {
        if (!i.get("roundCap")) {
            var f = e.shape,
                h = ua(n.getModel("itemStyle"), f, !0);
            O(f, h), e.setShape(f)
        }
    } else {
        var l = n.get(["itemStyle", "borderRadius"]) || 0;
        e.setShape("r", l)
    }
    e.useStyle(u);
    var c = n.getShallow("cursor");
    c && e.attr("cursor", c);
    var v = s ? o ? a.r >= a.r0 ? "endArc" : "startArc" : a.endAngle >= a.startAngle ? "endAngle" : "startAngle" : o ? a.height >= 0 ? "bottom" : "top" : a.width >= 0 ? "right" : "left",
        d = Sl(n);
    _l(e, d, {
        labelFetcher: i,
        labelDataIndex: r,
        defaultText: SM(i.getData(), r),
        inheritColor: u.fill,
        defaultOpacity: u.opacity,
        defaultOutsidePosition: v
    });
    var y = e.getTextContent();
    if (s && y) {
        var p = n.get(["label", "position"]);
        e.textConfig.inside = p === "middle" ? !0 : null, RM(e, p === "outside" ? v : p, Vg(o), n.get(["label", "rotate"]))
    }
    D1(y, d, i.getRawValue(r), function (m) {
        return wM(t, m)
    });
    var g = n.getModel(["emphasis"]);
    vl(e, g.get("focus"), g.get("blurScope"), g.get("disabled")), qi(e, n), BM(a) && (e.style.fill = "none", e.style.stroke = "none", A(e.states, function (m) {
        m.style && (m.style.fill = m.style.stroke = "none")
    }))
}

function zM(e, t) {
    var r = e.get(["itemStyle", "borderColor"]);
    if (!r || r === "none") return 0;
    var n = e.get(["itemStyle", "borderWidth"]) || 0,
        a = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width),
        i = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
    return Math.min(n, a, i)
}
var VM = function () {
        function e() {}
        return e
    }(),
    $v = function (e) {
        G(t, e);

        function t(r) {
            var n = e.call(this, r) || this;
            return n.type = "largeBar", n
        }
        return t.prototype.getDefaultShape = function () {
            return new VM
        }, t.prototype.buildPath = function (r, n) {
            for (var a = n.points, i = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < a.length; f += 3) u[i] = l, u[o] = a[f + 2], s[i] = a[f + i], s[o] = a[f + o], r.rect(s[0], s[1], u[0], u[1])
        }, t
    }(at);

function Xv(e, t, r, n) {
    var a = e.getData(),
        i = a.getLayout("valueAxisHorizontal") ? 1 : 0,
        o = a.getLayout("largeDataIndices"),
        s = a.getLayout("size"),
        u = e.getModel("backgroundStyle"),
        l = a.getLayout("largeBackgroundPoints");
    if (l) {
        var f = new $v({
            shape: {
                points: l
            },
            incremental: !!n,
            silent: !0,
            z2: 0
        });
        f.baseDimIdx = i, f.largeDataIndices = o, f.barWidth = s, f.useStyle(u.getItemStyle()), t.add(f), r && r.push(f)
    }
    var h = new $v({
        shape: {
            points: a.getLayout("largePoints")
        },
        incremental: !!n,
        ignoreCoarsePointer: !0,
        z2: 1
    });
    h.baseDimIdx = i, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(a.getVisual("style")), gt(h).seriesIndex = e.seriesIndex, e.get("silent") || (h.on("mousedown", qv), h.on("mousemove", qv)), r && r.push(h)
}
var qv = Bl(function (e) {
    var t = this,
        r = GM(t, e.offsetX, e.offsetY);
    gt(t).dataIndex = r >= 0 ? r : null
}, 30, !1);

function GM(e, t, r) {
    for (var n = e.baseDimIdx, a = 1 - n, i = e.shape.points, o = e.largeDataIndices, s = [], u = [], l = e.barWidth, f = 0, h = i.length / 3; f < h; f++) {
        var c = f * 3;
        if (u[n] = l, u[a] = i[c + 2], s[n] = i[c + n], s[a] = i[c + a], u[a] < 0 && (s[a] += u[a], u[a] = -u[a]), t >= s[0] && t <= s[0] + u[0] && r >= s[1] && r <= s[1] + u[1]) return o[f]
    }
    return -1
}

function Gg(e, t, r) {
    if (zg(r, "cartesian2d")) {
        var n = t,
            a = r.getArea();
        return {
            x: e ? n.x : a.x,
            y: e ? a.y : n.y,
            width: e ? n.width : a.width,
            height: e ? a.height : n.height
        }
    } else {
        var a = r.getArea(),
            i = t;
        return {
            cx: a.cx,
            cy: a.cy,
            r0: e ? a.r0 : i.r0,
            r: e ? a.r : i.r,
            startAngle: e ? i.startAngle : 0,
            endAngle: e ? i.endAngle : Math.PI * 2
        }
    }
}

function HM(e, t, r) {
    var n = e.type === "polar" ? Zr : re;
    return new n({
        shape: Gg(t, r, e),
        silent: !0,
        z2: 0
    })
}
const WM = kM;

function ZD(e) {
    e.registerChartView(WM), e.registerSeriesModel(LM), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, Xr(DT, "bar")), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, CT("bar")), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, CM("bar")), e.registerAction({
        type: "changeAxisOrder",
        event: "changeAxisOrder",
        update: "update"
    }, function (t, r) {
        var n = t.componentType || "series";
        r.eachComponent({
            mainType: n,
            query: t
        }, function (a) {
            t.sortInfo && a.axis.setCategorySortInfo(t.sortInfo)
        })
    })
}
var Zv = Math.PI * 2,
    bi = Math.PI / 180;

function Hg(e, t) {
    return tp(e.getBoxLayoutParams(), {
        width: t.getWidth(),
        height: t.getHeight()
    })
}

function Wg(e, t) {
    var r = Hg(e, t),
        n = e.get("center"),
        a = e.get("radius");
    B(a) || (a = [0, a]);
    var i = rt(r.width, t.getWidth()),
        o = rt(r.height, t.getHeight()),
        s = Math.min(i, o),
        u = rt(a[0], s / 2),
        l = rt(a[1], s / 2),
        f, h, c = e.coordinateSystem;
    if (c) {
        var v = c.dataToPoint(n);
        f = v[0] || 0, h = v[1] || 0
    } else B(n) || (n = [n, n]), f = rt(n[0], i) + r.x, h = rt(n[1], o) + r.y;
    return {
        cx: f,
        cy: h,
        r0: u,
        r: l
    }
}

function UM(e, t, r) {
    t.eachSeriesByType(e, function (n) {
        var a = n.getData(),
            i = a.mapDimension("value"),
            o = Hg(n, r),
            s = Wg(n, r),
            u = s.cx,
            l = s.cy,
            f = s.r,
            h = s.r0,
            c = -n.get("startAngle") * bi,
            v = n.get("endAngle"),
            d = n.get("padAngle") * bi;
        v = v === "auto" ? c - Zv : -v * bi;
        var y = n.get("minAngle") * bi,
            p = y + d,
            g = 0;
        a.each(i, function (E) {
            !isNaN(E) && g++
        });
        var m = a.getSum(i),
            _ = Math.PI / (m || g) * 2,
            S = n.get("clockwise"),
            b = n.get("roseType"),
            w = n.get("stillShowZeroSum"),
            x = a.getDataExtent(i);
        x[0] = 0;
        var T = S ? 1 : -1,
            D = [c, v],
            C = T * d / 2;
        Qc(D, !S), c = D[0], v = D[1];
        var M = Math.abs(v - c),
            L = M,
            P = 0,
            I = c;
        if (a.setLayout({
                viewRect: o,
                r: f
            }), a.each(i, function (E, z) {
                var k;
                if (isNaN(E)) {
                    a.setItemLayout(z, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: S,
                        cx: u,
                        cy: l,
                        r0: h,
                        r: b ? NaN : f
                    });
                    return
                }
                b !== "area" ? k = m === 0 && w ? _ : E * _ : k = M / g, k < p ? (k = p, L -= p) : P += E;
                var N = I + T * k,
                    F = 0,
                    $ = 0;
                d > k ? (F = I + T * k / 2, $ = F) : (F = I + C, $ = N - C), a.setItemLayout(z, {
                    angle: k,
                    startAngle: F,
                    endAngle: $,
                    clockwise: S,
                    cx: u,
                    cy: l,
                    r0: h,
                    r: b ? yu(E, x, [h, f]) : f
                }), I = N
            }), L < Zv && g)
            if (L <= .001) {
                var R = M / g;
                a.each(i, function (E, z) {
                    if (!isNaN(E)) {
                        var k = a.getItemLayout(z);
                        k.angle = R;
                        var N = 0,
                            F = 0;
                        R < d ? (N = c + T * (z + 1 / 2) * R, F = N) : (N = c + T * z * R + C, F = c + T * (z + 1) * R - C), k.startAngle = N, k.endAngle = F
                    }
                })
            } else _ = L / P, I = c, a.each(i, function (E, z) {
                if (!isNaN(E)) {
                    var k = a.getItemLayout(z),
                        N = k.angle === p ? p : E * _,
                        F = 0,
                        $ = 0;
                    N < d ? (F = I + T * N / 2, $ = F) : (F = I + C, $ = I + T * N - C), k.startAngle = F, k.endAngle = $, I += T * N
                }
            })
    })
}

function Ug(e) {
    return {
        seriesType: e,
        reset: function (t, r) {
            var n = r.findComponents({
                mainType: "legend"
            });
            if (!(!n || !n.length)) {
                var a = t.getData();
                a.filterSelf(function (i) {
                    for (var o = a.getName(i), s = 0; s < n.length; s++)
                        if (!n[s].isSelected(o)) return !1;
                    return !0
                })
            }
        }
    }
}
var YM = Math.PI / 180;

function Kv(e, t, r, n, a, i, o, s, u, l) {
    if (e.length < 2) return;

    function f(y) {
        for (var p = y.rB, g = p * p, m = 0; m < y.list.length; m++) {
            var _ = y.list[m],
                S = Math.abs(_.label.y - r),
                b = n + _.len,
                w = b * b,
                x = Math.sqrt((1 - Math.abs(S * S / g)) * w),
                T = t + (x + _.len2) * a,
                D = T - _.label.x,
                C = _.targetTextWidth - D * a;
            Yg(_, C, !0), _.label.x = T
        }
    }

    function h(y) {
        for (var p = {
                list: [],
                maxY: 0
            }, g = {
                list: [],
                maxY: 0
            }, m = 0; m < y.length; m++)
            if (y[m].labelAlignTo === "none") {
                var _ = y[m],
                    S = _.label.y > r ? g : p,
                    b = Math.abs(_.label.y - r);
                if (b >= S.maxY) {
                    var w = _.label.x - t - _.len2 * a,
                        x = n + _.len,
                        T = Math.abs(w) < x ? Math.sqrt(b * b / (1 - w * w / x / x)) : x;
                    S.rB = T, S.maxY = b
                }
                S.list.push(_)
            } f(p), f(g)
    }
    for (var c = e.length, v = 0; v < c; v++)
        if (e[v].position === "outer" && e[v].labelAlignTo === "labelLine") {
            var d = e[v].label.x - l;
            e[v].linePoints[1][0] += d, e[v].label.x = l
        } mM(e, u, u + o) && h(e)
}

function $M(e, t, r, n, a, i, o, s) {
    for (var u = [], l = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < e.length; c++) {
        var v = e[c].label;
        Ks(e[c]) || (v.x < t ? (f = Math.min(f, v.x), u.push(e[c])) : (h = Math.max(h, v.x), l.push(e[c])))
    }
    for (var c = 0; c < e.length; c++) {
        var d = e[c];
        if (!Ks(d) && d.linePoints) {
            if (d.labelStyleWidth != null) continue;
            var v = d.label,
                y = d.linePoints,
                p = void 0;
            d.labelAlignTo === "edge" ? v.x < t ? p = y[2][0] - d.labelDistance - o - d.edgeDistance : p = o + a - d.edgeDistance - y[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? p = f - o - d.bleedMargin : p = o + a - h - d.bleedMargin : v.x < t ? p = v.x - o - d.bleedMargin : p = o + a - v.x - d.bleedMargin, d.targetTextWidth = p, Yg(d, p)
        }
    }
    Kv(l, t, r, n, 1, a, i, o, s, h), Kv(u, t, r, n, -1, a, i, o, s, f);
    for (var c = 0; c < e.length; c++) {
        var d = e[c];
        if (!Ks(d) && d.linePoints) {
            var v = d.label,
                y = d.linePoints,
                g = d.labelAlignTo === "edge",
                m = v.style.padding,
                _ = m ? m[1] + m[3] : 0,
                S = v.style.backgroundColor ? 0 : _,
                b = d.rect.width + S,
                w = y[1][0] - y[2][0];
            g ? v.x < t ? y[2][0] = o + d.edgeDistance + b + d.labelDistance : y[2][0] = o + a - d.edgeDistance - b - d.labelDistance : (v.x < t ? y[2][0] = v.x + d.labelDistance : y[2][0] = v.x - d.labelDistance, y[1][0] = y[2][0] + w), y[1][1] = y[2][1] = v.y
        }
    }
}

function Yg(e, t, r) {
    if (r === void 0 && (r = !1), e.labelStyleWidth == null) {
        var n = e.label,
            a = n.style,
            i = e.rect,
            o = a.backgroundColor,
            s = a.padding,
            u = s ? s[1] + s[3] : 0,
            l = a.overflow,
            f = i.width + (o ? 0 : u);
        if (t < f || r) {
            var h = i.height;
            if (l && l.match("break")) {
                n.setStyle("backgroundColor", null), n.setStyle("width", t - u);
                var c = n.getBoundingRect();
                n.setStyle("width", Math.ceil(c.width)), n.setStyle("backgroundColor", o)
            } else {
                var v = t - u,
                    d = t < f ? v : r ? v > e.unconstrainedWidth ? null : v : null;
                n.setStyle("width", d)
            }
            var y = n.getBoundingRect();
            i.width = y.width;
            var p = (n.style.margin || 0) + 2.1;
            i.height = y.height + p, i.y -= (i.height - h) / 2
        }
    }
}

function Ks(e) {
    return e.position === "center"
}

function XM(e) {
    var t = e.getData(),
        r = [],
        n, a, i = !1,
        o = (e.get("minShowLabelAngle") || 0) * YM,
        s = t.getLayout("viewRect"),
        u = t.getLayout("r"),
        l = s.width,
        f = s.x,
        h = s.y,
        c = s.height;

    function v(w) {
        w.ignore = !0
    }

    function d(w) {
        if (!w.ignore) return !0;
        for (var x in w.states)
            if (w.states[x].ignore === !1) return !0;
        return !1
    }
    t.each(function (w) {
        var x = t.getItemGraphicEl(w),
            T = x.shape,
            D = x.getTextContent(),
            C = x.getTextGuideLine(),
            M = t.getItemModel(w),
            L = M.getModel("label"),
            P = L.get("position") || M.get(["emphasis", "label", "position"]),
            I = L.get("distanceToLabelLine"),
            R = L.get("alignTo"),
            E = rt(L.get("edgeDistance"), l),
            z = L.get("bleedMargin"),
            k = M.getModel("labelLine"),
            N = k.get("length");
        N = rt(N, l);
        var F = k.get("length2");
        if (F = rt(F, l), Math.abs(T.endAngle - T.startAngle) < o) {
            A(D.states, v), D.ignore = !0, C && (A(C.states, v), C.ignore = !0);
            return
        }
        if (d(D)) {
            var $ = (T.startAngle + T.endAngle) / 2,
                q = Math.cos($),
                st = Math.sin($),
                yt, Gt, Se, Xt;
            n = T.cx, a = T.cy;
            var Ht = P === "inside" || P === "inner";
            if (P === "center") yt = T.cx, Gt = T.cy, Xt = "center";
            else {
                var St = (Ht ? (T.r + T.r0) / 2 * q : T.r * q) + n,
                    ht = (Ht ? (T.r + T.r0) / 2 * st : T.r * st) + a;
                if (yt = St + q * 3, Gt = ht + st * 3, !Ht) {
                    var H = St + q * (N + u - T.r),
                        Z = ht + st * (N + u - T.r),
                        we = H + (q < 0 ? -1 : 1) * F,
                        mt = Z;
                    R === "edge" ? yt = q < 0 ? f + E : f + l - E : yt = we + (q < 0 ? -I : I), Gt = mt, Se = [
                        [St, ht],
                        [H, Z],
                        [we, mt]
                    ]
                }
                Xt = Ht ? "center" : R === "edge" ? q > 0 ? "right" : "left" : q > 0 ? "left" : "right"
            }
            var Xe = Math.PI,
                Ne = 0,
                kn = L.get("rotate");
            if (it(kn)) Ne = kn * (Xe / 180);
            else if (P === "center") Ne = 0;
            else if (kn === "radial" || kn === !0) {
                var Kg = q < 0 ? -$ + Xe : -$;
                Ne = Kg
            } else if (kn === "tangential" && P !== "outside" && P !== "outer") {
                var jr = Math.atan2(q, st);
                jr < 0 && (jr = Xe * 2 + jr);
                var Qg = st > 0;
                Qg && (jr = Xe + jr), Ne = jr - Xe
            }
            if (i = !!Ne, D.x = yt, D.y = Gt, D.rotation = Ne, D.setStyle({
                    verticalAlign: "middle"
                }), Ht) {
                D.setStyle({
                    align: Xt
                });
                var zo = D.states.select;
                zo && (zo.x += D.x, zo.y += D.y)
            } else {
                var On = D.getBoundingRect().clone();
                On.applyTransform(D.getComputedTransform());
                var Kl = (D.style.margin || 0) + 2.1;
                On.y -= Kl / 2, On.height += Kl, r.push({
                    label: D,
                    labelLine: C,
                    position: P,
                    len: N,
                    len2: F,
                    minTurnAngle: k.get("minTurnAngle"),
                    maxSurfaceAngle: k.get("maxSurfaceAngle"),
                    surfaceNormal: new W(q, st),
                    linePoints: Se,
                    textAlign: Xt,
                    labelDistance: I,
                    labelAlignTo: R,
                    edgeDistance: E,
                    bleedMargin: z,
                    rect: On,
                    unconstrainedWidth: On.width,
                    labelStyleWidth: D.style.width
                })
            }
            x.setTextConfig({
                inside: Ht
            })
        }
    }), !i && e.get("avoidLabelOverlap") && $M(r, n, a, u, l, c, f, h);
    for (var y = 0; y < r.length; y++) {
        var p = r[y],
            g = p.label,
            m = p.labelLine,
            _ = isNaN(g.x) || isNaN(g.y);
        if (g) {
            g.setStyle({
                align: p.textAlign
            }), _ && (A(g.states, v), g.ignore = !0);
            var S = g.states.select;
            S && (S.x += g.x, S.y += g.y)
        }
        if (m) {
            var b = p.linePoints;
            _ || !b ? (A(m.states, v), m.ignore = !0) : (Fg(b, p.minTurnAngle), cM(b, p.surfaceNormal, p.maxSurfaceAngle), m.setShape({
                points: b
            }), g.__hostTarget.textGuideLineConfig = {
                anchor: new W(b[0][0], b[0][1])
            })
        }
    }
}
var qM = function (e) {
        G(t, e);

        function t(r, n, a) {
            var i = e.call(this) || this;
            i.z2 = 2;
            var o = new hr;
            return i.setTextContent(o), i.updateData(r, n, a, !0), i
        }
        return t.prototype.updateData = function (r, n, a, i) {
            var o = this,
                s = r.hostModel,
                u = r.getItemModel(n),
                l = u.getModel("emphasis"),
                f = r.getItemLayout(n),
                h = O(ua(u.getModel("itemStyle"), f, !0), f);
            if (isNaN(h.startAngle)) {
                o.setShape(h);
                return
            }
            if (i) {
                o.setShape(h);
                var c = s.getShallow("animationType");
                s.ecModel.ssr ? ($t(o, {
                    scaleX: 0,
                    scaleY: 0
                }, s, {
                    dataIndex: n,
                    isFrom: !0
                }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, $t(o, {
                    shape: {
                        r: f.r
                    }
                }, s, n)) : a != null ? (o.setShape({
                    startAngle: a,
                    endAngle: a
                }), $t(o, {
                    shape: {
                        startAngle: f.startAngle,
                        endAngle: f.endAngle
                    }
                }, s, n)) : (o.shape.endAngle = f.startAngle, ne(o, {
                    shape: {
                        endAngle: f.endAngle
                    }
                }, s, n))
            } else Qi(o), ne(o, {
                shape: h
            }, s, n);
            o.useStyle(r.getItemVisual(n, "style")), qi(o, u);
            var v = (f.startAngle + f.endAngle) / 2,
                d = s.get("selectedOffset"),
                y = Math.cos(v) * d,
                p = Math.sin(v) * d,
                g = u.getShallow("cursor");
            g && o.attr("cursor", g), this._updateLabel(s, r, n), o.ensureState("emphasis").shape = O({
                r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
            }, ua(l.getModel("itemStyle"), f)), O(o.ensureState("select"), {
                x: y,
                y: p,
                shape: ua(u.getModel(["select", "itemStyle"]), f)
            }), O(o.ensureState("blur"), {
                shape: ua(u.getModel(["blur", "itemStyle"]), f)
            });
            var m = o.getTextGuideLine(),
                _ = o.getTextContent();
            m && O(m.ensureState("select"), {
                x: y,
                y: p
            }), O(_.ensureState("select"), {
                x: y,
                y: p
            }), vl(this, l.get("focus"), l.get("blurScope"), l.get("disabled"))
        }, t.prototype._updateLabel = function (r, n, a) {
            var i = this,
                o = n.getItemModel(a),
                s = o.getModel("labelLine"),
                u = n.getItemVisual(a, "style"),
                l = u && u.fill,
                f = u && u.opacity;
            _l(i, Sl(o), {
                labelFetcher: n.hostModel,
                labelDataIndex: a,
                inheritColor: l,
                defaultOpacity: f,
                defaultText: r.getFormattedLabel(a, "normal") || n.getName(a)
            });
            var h = i.getTextContent();
            i.setTextConfig({
                position: null,
                rotation: null
            }), h.attr({
                z2: 10
            });
            var c = r.get(["label", "position"]);
            if (c !== "outside" && c !== "outer") i.removeTextGuideLine();
            else {
                var v = this.getTextGuideLine();
                v || (v = new Kr, this.setTextGuideLine(v)), pM(this, gM(o), {
                    stroke: l,
                    opacity: la(s.get(["lineStyle", "opacity"]), f, 1)
                })
            }
        }, t
    }(Zr),
    ZM = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.ignoreLabelLineUpdate = !0, r
        }
        return t.prototype.render = function (r, n, a, i) {
            var o = r.getData(),
                s = this._data,
                u = this.group,
                l;
            if (!s && o.count() > 0) {
                for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h) f = o.getItemLayout(h);
                f && (l = f.startAngle)
            }
            if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && r.get("showEmptyCircle")) {
                var c = new Zr({
                    shape: Wg(r, a)
                });
                c.useStyle(r.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, u.add(c)
            }
            o.diff(s).add(function (v) {
                var d = new qM(o, v, l);
                o.setItemGraphicEl(v, d), u.add(d)
            }).update(function (v, d) {
                var y = s.getItemGraphicEl(d);
                y.updateData(o, v, l), y.off("click"), u.add(y), o.setItemGraphicEl(v, y)
            }).remove(function (v) {
                var d = s.getItemGraphicEl(v);
                Ki(d, r, v)
            }).execute(), XM(r), r.get("animationTypeUpdate") !== "expansion" && (this._data = o)
        }, t.prototype.dispose = function () {}, t.prototype.containPoint = function (r, n) {
            var a = n.getData(),
                i = a.getItemLayout(0);
            if (i) {
                var o = r[0] - i.cx,
                    s = r[1] - i.cy,
                    u = Math.sqrt(o * o + s * s);
                return u <= i.r && u >= i.r0
            }
        }, t.type = "pie", t
    }(sr);
const KM = ZM;

function $g(e, t, r) {
    t = B(t) && {
        coordDimensions: t
    } || O({
        encodeDefine: e.getEncode()
    }, t);
    var n = e.getSource(),
        a = vg(n, t).dimensions,
        i = new hg(a, e);
    return i.initData(n, r), i
}
var QM = function () {
    function e(t, r) {
        this._getDataWithEncodedVisual = t, this._getRawData = r
    }
    return e.prototype.getAllNames = function () {
        var t = this._getRawData();
        return t.mapArray(t.getName)
    }, e.prototype.containName = function (t) {
        var r = this._getRawData();
        return r.indexOfName(t) >= 0
    }, e.prototype.indexOfName = function (t) {
        var r = this._getDataWithEncodedVisual();
        return r.indexOfName(t)
    }, e.prototype.getItemVisual = function (t, r) {
        var n = this._getDataWithEncodedVisual();
        return n.getItemVisual(t, r)
    }, e
}();
const Xg = QM;
var JM = At(),
    jM = function (e) {
        G(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.init = function (r) {
            e.prototype.init.apply(this, arguments), this.legendVisualProvider = new Xg(_t(this.getData, this), _t(this.getRawData, this)), this._defaultLabelLine(r)
        }, t.prototype.mergeOption = function () {
            e.prototype.mergeOption.apply(this, arguments)
        }, t.prototype.getInitialData = function () {
            return $g(this, {
                coordDimensions: ["value"],
                encodeDefaulter: Xr(nS, this)
            })
        }, t.prototype.getDataParams = function (r) {
            var n = this.getData(),
                a = JM(n),
                i = a.seats;
            if (!i) {
                var o = [];
                n.each(n.mapDimension("value"), function (u) {
                    o.push(u)
                }), i = a.seats = Vy(o, n.hostModel.get("percentPrecision"))
            }
            var s = e.prototype.getDataParams.call(this, r);
            return s.percent = i[r] || 0, s.$vars.push("percent"), s
        }, t.prototype._defaultLabelLine = function (r) {
            mu(r, "labelLine", ["show"]);
            var n = r.labelLine,
                a = r.emphasis.labelLine;
            n.show = n.show && r.label.show, a.show = a.show && r.emphasis.label.show
        }, t.type = "series.pie", t.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            endAngle: "auto",
            padAngle: 0,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1,
                borderJoin: "round"
            },
            showEmptyCircle: !0,
            emptyCircleStyle: {
                color: "lightgray",
                opacity: 1
            },
            labelLayout: {
                hideOverlap: !0
            },
            emphasis: {
                scale: !0,
                scaleSize: 5
            },
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, t
    }(vr);
const tx = jM;

function ex(e) {
    return {
        seriesType: e,
        reset: function (t, r) {
            var n = t.getData();
            n.filterSelf(function (a) {
                var i = n.mapDimension("value"),
                    o = n.get(i, a);
                return !(it(o) && !isNaN(o) && o < 0)
            })
        }
    }
}

function KD(e) {
    e.registerChartView(KM), e.registerSeriesModel(tx), Ww("pie", e.registerAction), e.registerLayout(Xr(UM, "pie")), e.registerProcessor(Ug("pie")), e.registerProcessor(ex("pie"))
}
var qg = {
        show: !0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#6E7079",
                width: 1,
                type: "solid"
            },
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#E0E6F1"],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
            }
        }
    },
    rx = ut({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, qg),
    Zl = ut({
        boundaryGap: [0, 0],
        axisLine: {
            show: "auto"
        },
        axisTick: {
            show: "auto"
        },
        splitNumber: 5,
        minorTick: {
            show: !1,
            splitNumber: 5,
            length: 3,
            lineStyle: {}
        },
        minorSplitLine: {
            show: !1,
            lineStyle: {
                color: "#F4F7FD",
                width: 1
            }
        }
    }, qg),
    nx = ut({
        splitNumber: 6,
        axisLabel: {
            showMinLabel: !1,
            showMaxLabel: !1,
            rich: {
                primary: {
                    fontWeight: "bold"
                }
            }
        },
        splitLine: {
            show: !1
        }
    }, Zl),
    ax = j({
        logBase: 10
    }, Zl);
const ix = {
    category: rx,
    value: Zl,
    time: nx,
    log: ax
};
var Qs = Math.log;

function ox(e, t, r) {
    var n = $r.prototype,
        a = n.getTicks.call(r),
        i = n.getTicks.call(r, !0),
        o = a.length - 1,
        s = n.getInterval.call(r),
        u = Ag(e, t),
        l = u.extent,
        f = u.fixMin,
        h = u.fixMax;
    if (e.type === "log") {
        var c = Qs(e.base);
        l = [Qs(l[0]) / c, Qs(l[1]) / c]
    }
    e.setExtent(l[0], l[1]), e.calcNiceExtent({
        splitNumber: o,
        fixMin: f,
        fixMax: h
    });
    var v = n.getExtent.call(e);
    f && (l[0] = v[0]), h && (l[1] = v[1]);
    var d = n.getInterval.call(e),
        y = l[0],
        p = l[1];
    if (f && h) d = (p - y) / o;
    else if (f)
        for (p = l[0] + d * o; p < l[1] && isFinite(p) && isFinite(l[1]);) d = Ys(d), p = l[0] + d * o;
    else if (h)
        for (y = l[1] - d * o; y > l[0] && isFinite(y) && isFinite(l[0]);) d = Ys(d), y = l[1] - d * o;
    else {
        var g = e.getTicks().length - 1;
        g > o && (d = Ys(d));
        var m = d * o;
        p = Math.ceil(l[1] / d) * d, y = dt(p - m), y < 0 && l[0] >= 0 ? (y = 0, p = dt(m)) : p > 0 && l[1] <= 0 && (p = 0, y = -dt(m))
    }
    var _ = (a[0].value - i[0].value) / s,
        S = (a[o].value - i[o].value) / s;
    n.setExtent.call(e, y + d * _, p + d * S), n.setInterval.call(e, d), (_ || S) && n.setNiceExtent.call(e, y + d, p - d)
}
var ar = Math.PI,
    Hr = function () {
        function e(t, r) {
            this.group = new ye, this.opt = r, this.axisModel = t, j(r, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0,
                handleAutoShown: function () {
                    return !0
                }
            });
            var n = new ye({
                x: r.position[0],
                y: r.position[1],
                rotation: r.rotation
            });
            n.updateTransform(), this._transformGroup = n
        }
        return e.prototype.hasBuilder = function (t) {
            return !!Qv[t]
        }, e.prototype.add = function (t) {
            Qv[t](this.opt, this.axisModel, this.group, this._transformGroup)
        }, e.prototype.getGroup = function () {
            return this.group
        }, e.innerTextLayout = function (t, r, n) {
            var a = Oc(r - t),
                i, o;
            return $i(a) ? (o = n > 0 ? "top" : "bottom", i = "center") : $i(a - ar) ? (o = n > 0 ? "bottom" : "top", i = "center") : (o = "middle", a > 0 && a < ar ? i = n > 0 ? "right" : "left" : i = n > 0 ? "left" : "right"), {
                rotation: a,
                textAlign: i,
                textVerticalAlign: o
            }
        }, e.makeAxisEventDataBase = function (t) {
            var r = {
                componentType: t.mainType,
                componentIndex: t.componentIndex
            };
            return r[t.mainType + "Index"] = t.componentIndex, r
        }, e.isLabelSilent = function (t) {
            var r = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || r && r.show)
        }, e
    }(),
    Qv = {
        axisLine: function (e, t, r, n) {
            var a = t.get(["axisLine", "show"]);
            if (a === "auto" && e.handleAutoShown && (a = e.handleAutoShown("axisLine")), !!a) {
                var i = t.axis.getExtent(),
                    o = n.transform,
                    s = [i[0], 0],
                    u = [i[1], 0],
                    l = s[0] > u[0];
                o && (Pe(s, s, o), Pe(u, u, o));
                var f = O({
                        lineCap: "round"
                    }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()),
                    h = new In({
                        shape: {
                            x1: s[0],
                            y1: s[1],
                            x2: u[0],
                            y2: u[1]
                        },
                        style: f,
                        strokeContainThreshold: e.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    });
                yl(h.shape, h.style.lineWidth), h.anid = "line", r.add(h);
                var c = t.get(["axisLine", "symbol"]);
                if (c != null) {
                    var v = t.get(["axisLine", "symbolSize"]);
                    U(c) && (c = [c, c]), (U(v) || it(v)) && (v = [v, v]);
                    var d = nb(t.get(["axisLine", "symbolOffset"]) || 0, v),
                        y = v[0],
                        p = v[1];
                    A([{
                        rotate: e.rotation + Math.PI / 2,
                        offset: d[0],
                        r: 0
                    }, {
                        rotate: e.rotation - Math.PI / 2,
                        offset: d[1],
                        r: Math.sqrt((s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1]))
                    }], function (g, m) {
                        if (c[m] !== "none" && c[m] != null) {
                            var _ = zl(c[m], -y / 2, -p / 2, y, p, f.stroke, !0),
                                S = g.r + g.offset,
                                b = l ? u : s;
                            _.attr({
                                rotation: g.rotate,
                                x: b[0] + S * Math.cos(e.rotation),
                                y: b[1] - S * Math.sin(e.rotation),
                                silent: !0,
                                z2: 11
                            }), r.add(_)
                        }
                    })
                }
            }
        },
        axisTickLabel: function (e, t, r, n) {
            var a = lx(r, n, t, e),
                i = hx(r, n, t, e);
            if (ux(t, i, a), fx(r, n, t, e.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
                var o = yM(V(i, function (s) {
                    return {
                        label: s,
                        priority: s.z2,
                        defaultAttr: {
                            ignore: s.ignore
                        }
                    }
                }));
                _M(o)
            }
        },
        axisName: function (e, t, r, n) {
            var a = Bi(e.axisName, t.get("name"));
            if (a) {
                var i = t.get("nameLocation"),
                    o = e.nameDirection,
                    s = t.getModel("nameTextStyle"),
                    u = t.get("nameGap") || 0,
                    l = t.axis.getExtent(),
                    f = l[0] > l[1] ? -1 : 1,
                    h = [i === "start" ? l[0] - f * u : i === "end" ? l[1] + f * u : (l[0] + l[1]) / 2, jv(i) ? e.labelOffset + o * u : 0],
                    c, v = t.get("nameRotate");
                v != null && (v = v * ar / 180);
                var d;
                jv(i) ? c = Hr.innerTextLayout(e.rotation, v ? ? e.rotation, o) : (c = sx(e.rotation, i, v || 0, l), d = e.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
                var y = s.getFont(),
                    p = t.get("nameTruncate", !0) || {},
                    g = p.ellipsis,
                    m = Bi(e.nameTruncateMaxWidth, p.maxWidth, d),
                    _ = new hr({
                        x: h[0],
                        y: h[1],
                        rotation: c.rotation,
                        silent: Hr.isLabelSilent(t),
                        style: to(s, {
                            text: a,
                            font: y,
                            overflow: "truncate",
                            width: m,
                            ellipsis: g,
                            fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
                            align: s.get("align") || c.textAlign,
                            verticalAlign: s.get("verticalAlign") || c.textVerticalAlign
                        }),
                        z2: 1
                    });
                if (Bd({
                        el: _,
                        componentModel: t,
                        itemName: a
                    }), _.__fullText = a, _.anid = "name", t.get("triggerEvent")) {
                    var S = Hr.makeAxisEventDataBase(t);
                    S.targetType = "axisName", S.name = a, gt(_).eventData = S
                }
                n.add(_), _.updateTransform(), r.add(_), _.decomposeTransform()
            }
        }
    };

function sx(e, t, r, n) {
    var a = Oc(r - e),
        i, o, s = n[0] > n[1],
        u = t === "start" && !s || t !== "start" && s;
    return $i(a - ar / 2) ? (o = u ? "bottom" : "top", i = "center") : $i(a - ar * 1.5) ? (o = u ? "top" : "bottom", i = "center") : (o = "middle", a < ar * 1.5 && a > ar / 2 ? i = u ? "left" : "right" : i = u ? "right" : "left"), {
        rotation: a,
        textAlign: i,
        textVerticalAlign: o
    }
}

function ux(e, t, r) {
    if (!Lg(e.axis)) {
        var n = e.get(["axisLabel", "showMinLabel"]),
            a = e.get(["axisLabel", "showMaxLabel"]);
        t = t || [], r = r || [];
        var i = t[0],
            o = t[1],
            s = t[t.length - 1],
            u = t[t.length - 2],
            l = r[0],
            f = r[1],
            h = r[r.length - 1],
            c = r[r.length - 2];
        n === !1 ? (Zt(i), Zt(l)) : Jv(i, o) && (n ? (Zt(o), Zt(f)) : (Zt(i), Zt(l))), a === !1 ? (Zt(s), Zt(h)) : Jv(u, s) && (a ? (Zt(u), Zt(c)) : (Zt(s), Zt(h)))
    }
}

function Zt(e) {
    e && (e.ignore = !0)
}

function Jv(e, t) {
    var r = e && e.getBoundingRect().clone(),
        n = t && t.getBoundingRect().clone();
    if (!(!r || !n)) {
        var a = tl([]);
        return hc(a, a, -e.rotation), r.applyTransform(bn([], a, e.getLocalTransform())), n.applyTransform(bn([], a, t.getLocalTransform())), r.intersect(n)
    }
}

function jv(e) {
    return e === "middle" || e === "center"
}

function Zg(e, t, r, n, a) {
    for (var i = [], o = [], s = [], u = 0; u < e.length; u++) {
        var l = e[u].coord;
        o[0] = l, o[1] = 0, s[0] = l, s[1] = r, t && (Pe(o, o, t), Pe(s, s, t));
        var f = new In({
            shape: {
                x1: o[0],
                y1: o[1],
                x2: s[0],
                y2: s[1]
            },
            style: n,
            z2: 2,
            autoBatch: !0,
            silent: !0
        });
        yl(f.shape, f.style.lineWidth), f.anid = a + "_" + e[u].tickValue, i.push(f)
    }
    return i
}

function lx(e, t, r, n) {
    var a = r.axis,
        i = r.getModel("axisTick"),
        o = i.get("show");
    if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || a.scale.isBlank())) {
        for (var s = i.getModel("lineStyle"), u = n.tickDirection * i.get("length"), l = a.getTicksCoords(), f = Zg(l, t.transform, u, j(s.getLineStyle(), {
                stroke: r.get(["axisLine", "lineStyle", "color"])
            }), "ticks"), h = 0; h < f.length; h++) e.add(f[h]);
        return f
    }
}

function fx(e, t, r, n) {
    var a = r.axis,
        i = r.getModel("minorTick");
    if (!(!i.get("show") || a.scale.isBlank())) {
        var o = a.getMinorTicksCoords();
        if (o.length)
            for (var s = i.getModel("lineStyle"), u = n * i.get("length"), l = j(s.getLineStyle(), j(r.getModel("axisTick").getLineStyle(), {
                    stroke: r.get(["axisLine", "lineStyle", "color"])
                })), f = 0; f < o.length; f++)
                for (var h = Zg(o[f], t.transform, u, l, "minorticks_" + f), c = 0; c < h.length; c++) e.add(h[c])
    }
}

function hx(e, t, r, n) {
    var a = r.axis,
        i = Bi(n.axisLabelShow, r.get(["axisLabel", "show"]));
    if (!(!i || a.scale.isBlank())) {
        var o = r.getModel("axisLabel"),
            s = o.get("margin"),
            u = a.getViewLabels(),
            l = (Bi(n.labelRotate, o.get("rotate")) || 0) * ar / 180,
            f = Hr.innerTextLayout(n.rotation, l, n.labelDirection),
            h = r.getCategories && r.getCategories(!0),
            c = [],
            v = Hr.isLabelSilent(r),
            d = r.get("triggerEvent");
        return A(u, function (y, p) {
            var g = a.scale.type === "ordinal" ? a.scale.getRawOrdinalNumber(y.tickValue) : y.tickValue,
                m = y.formattedLabel,
                _ = y.rawLabel,
                S = o;
            if (h && h[g]) {
                var b = h[g];
                Y(b) && b.textStyle && (S = new ge(b.textStyle, o, r.ecModel))
            }
            var w = S.getTextColor() || r.get(["axisLine", "lineStyle", "color"]),
                x = a.dataToCoord(g),
                T = S.getShallow("align", !0) || f.textAlign,
                D = X(S.getShallow("alignMinLabel", !0), T),
                C = X(S.getShallow("alignMaxLabel", !0), T),
                M = S.getShallow("verticalAlign", !0) || S.getShallow("baseline", !0) || f.textVerticalAlign,
                L = X(S.getShallow("verticalAlignMinLabel", !0), M),
                P = X(S.getShallow("verticalAlignMaxLabel", !0), M),
                I = new hr({
                    x,
                    y: n.labelOffset + n.labelDirection * s,
                    rotation: f.rotation,
                    silent: v,
                    z2: 10 + (y.level || 0),
                    style: to(S, {
                        text: m,
                        align: p === 0 ? D : p === u.length - 1 ? C : T,
                        verticalAlign: p === 0 ? L : p === u.length - 1 ? P : M,
                        fill: Q(w) ? w(a.type === "category" ? _ : a.type === "value" ? g + "" : g, p) : w
                    })
                });
            if (I.anid = "label_" + g, d) {
                var R = Hr.makeAxisEventDataBase(r);
                R.targetType = "axisLabel", R.value = _, R.tickIndex = p, a.type === "category" && (R.dataIndex = g), gt(I).eventData = R
            }
            t.add(I), I.updateTransform(), c.push(I), e.add(I), I.decomposeTransform()
        }), c
    }
}

function vx(e) {
    e.eachSeriesByType("radar", function (t) {
        var r = t.getData(),
            n = [],
            a = t.coordinateSystem;
        if (a) {
            var i = a.getIndicatorAxes();
            A(i, function (o, s) {
                r.each(r.mapDimension(i[s].dim), function (u, l) {
                    n[l] = n[l] || [];
                    var f = a.dataToPoint(u, s);
                    n[l][s] = tc(f) ? f : ec(a)
                })
            }), r.each(function (o) {
                var s = v0(n[o], function (u) {
                    return tc(u)
                }) || ec(a);
                n[o].push(s.slice()), r.setItemLayout(o, n[o])
            })
        }
    })
}

function tc(e) {
    return !isNaN(e[0]) && !isNaN(e[1])
}

function ec(e) {
    return [e.cx, e.cy]
}

function cx(e) {
    var t = e.polar;
    if (t) {
        B(t) || (t = [t]);
        var r = [];
        A(t, function (n, a) {
            n.indicator ? (n.type && !n.shape && (n.shape = n.type), e.radar = e.radar || [], B(e.radar) || (e.radar = [e.radar]), e.radar.push(n)) : r.push(n)
        }), e.polar = r
    }
    A(e.series, function (n) {
        n && n.type === "radar" && n.polarIndex && (n.radarIndex = n.polarIndex)
    })
}
var dx = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = t.type, r
    }
    return t.prototype.render = function (r, n, a) {
        var i = r.coordinateSystem,
            o = this.group,
            s = r.getData(),
            u = this._data;

        function l(c, v) {
            var d = c.getItemVisual(v, "symbol") || "circle";
            if (d !== "none") {
                var y = rb(c.getItemVisual(v, "symbolSize")),
                    p = zl(d, -1, -1, 2, 2),
                    g = c.getItemVisual(v, "symbolRotate") || 0;
                return p.attr({
                    style: {
                        strokeNoScale: !0
                    },
                    z2: 100,
                    scaleX: y[0] / 2,
                    scaleY: y[1] / 2,
                    rotation: g * Math.PI / 180 || 0
                }), p
            }
        }

        function f(c, v, d, y, p, g) {
            d.removeAll();
            for (var m = 0; m < v.length - 1; m++) {
                var _ = l(y, p);
                _ && (_.__dimIdx = m, c[m] ? (_.setPosition(c[m]), b1[g ? "initProps" : "updateProps"](_, {
                    x: v[m][0],
                    y: v[m][1]
                }, r, p)) : _.setPosition(v[m]), d.add(_))
            }
        }

        function h(c) {
            return V(c, function (v) {
                return [i.cx, i.cy]
            })
        }
        s.diff(u).add(function (c) {
            var v = s.getItemLayout(c);
            if (v) {
                var d = new Fa,
                    y = new Kr,
                    p = {
                        shape: {
                            points: v
                        }
                    };
                d.shape.points = h(v), y.shape.points = h(v), $t(d, p, r, c), $t(y, p, r, c);
                var g = new ye,
                    m = new ye;
                g.add(y), g.add(d), g.add(m), f(y.shape.points, v, m, s, c, !0), s.setItemGraphicEl(c, g)
            }
        }).update(function (c, v) {
            var d = u.getItemGraphicEl(v),
                y = d.childAt(0),
                p = d.childAt(1),
                g = d.childAt(2),
                m = {
                    shape: {
                        points: s.getItemLayout(c)
                    }
                };
            m.shape.points && (f(y.shape.points, m.shape.points, g, s, c, !1), Qi(p), Qi(y), ne(y, m, r), ne(p, m, r), s.setItemGraphicEl(c, d))
        }).remove(function (c) {
            o.remove(u.getItemGraphicEl(c))
        }).execute(), s.eachItemGraphicEl(function (c, v) {
            var d = s.getItemModel(v),
                y = c.childAt(0),
                p = c.childAt(1),
                g = c.childAt(2),
                m = s.getItemVisual(v, "style"),
                _ = m.fill;
            o.add(c), y.useStyle(j(d.getModel("lineStyle").getLineStyle(), {
                fill: "none",
                stroke: _
            })), qi(y, d, "lineStyle"), qi(p, d, "areaStyle");
            var S = d.getModel("areaStyle"),
                b = S.isEmpty() && S.parentModel.isEmpty();
            p.ignore = b, A(["emphasis", "select", "blur"], function (T) {
                var D = d.getModel([T, "areaStyle"]),
                    C = D.isEmpty() && D.parentModel.isEmpty();
                p.ensureState(T).ignore = C && b
            }), p.useStyle(j(S.getAreaStyle(), {
                fill: _,
                opacity: .7,
                decal: m.decal
            }));
            var w = d.getModel("emphasis"),
                x = w.getModel("itemStyle").getItemStyle();
            g.eachChild(function (T) {
                if (T instanceof qr) {
                    var D = T.style;
                    T.useStyle(O({
                        image: D.image,
                        x: D.x,
                        y: D.y,
                        width: D.width,
                        height: D.height
                    }, m))
                } else T.useStyle(m), T.setColor(_), T.style.strokeNoScale = !0;
                var C = T.ensureState("emphasis");
                C.style = J(x);
                var M = s.getStore().get(s.getDimensionIndex(T.__dimIdx), v);
                (M == null || isNaN(M)) && (M = ""), _l(T, Sl(d), {
                    labelFetcher: s.hostModel,
                    labelDataIndex: v,
                    labelDimIndex: T.__dimIdx,
                    defaultText: M,
                    inheritColor: _,
                    defaultOpacity: m.opacity
                })
            }), vl(c, w.get("focus"), w.get("blurScope"), w.get("disabled"))
        }), this._data = s
    }, t.prototype.remove = function () {
        this.group.removeAll(), this._data = null
    }, t.type = "radar", t
}(sr);
const px = dx;
var gx = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = t.type, r.hasSymbolVisual = !0, r
    }
    return t.prototype.init = function (r) {
        e.prototype.init.apply(this, arguments), this.legendVisualProvider = new Xg(_t(this.getData, this), _t(this.getRawData, this))
    }, t.prototype.getInitialData = function (r, n) {
        return $g(this, {
            generateCoord: "indicator_",
            generateCoordCount: 1 / 0
        })
    }, t.prototype.formatTooltip = function (r, n, a) {
        var i = this.getData(),
            o = this.coordinateSystem,
            s = o.getIndicatorAxes(),
            u = this.getData().getName(r),
            l = u === "" ? this.name : u,
            f = Cp(this, r);
        return Aa("section", {
            header: l,
            sortBlocks: !0,
            blocks: V(s, function (h) {
                var c = i.get(i.mapDimension(h.dim), r);
                return Aa("nameValue", {
                    markerType: "subItem",
                    markerColor: f,
                    name: h.name,
                    value: c,
                    sortParam: c
                })
            })
        })
    }, t.prototype.getTooltipPosition = function (r) {
        if (r != null) {
            for (var n = this.getData(), a = this.coordinateSystem, i = n.getValues(V(a.dimensions, function (l) {
                    return n.mapDimension(l)
                }), r), o = 0, s = i.length; o < s; o++)
                if (!isNaN(i[o])) {
                    var u = a.getIndicatorAxes();
                    return a.coordToPoint(u[o].dataToCoord(i[o]), o)
                }
        }
    }, t.type = "series.radar", t.dependencies = ["radar"], t.defaultOption = {
        z: 2,
        colorBy: "data",
        coordinateSystem: "radar",
        legendHoverLink: !0,
        radarIndex: 0,
        lineStyle: {
            width: 2,
            type: "solid",
            join: "round"
        },
        label: {
            position: "top"
        },
        symbolSize: 8
    }, t
}(vr);
const yx = gx;
var ea = ix.value;

function Ti(e, t) {
    return j({
        show: t
    }, e)
}
var mx = function (e) {
    G(t, e);

    function t() {
        var r = e !== null && e.apply(this, arguments) || this;
        return r.type = t.type, r
    }
    return t.prototype.optionUpdated = function () {
        var r = this.get("boundaryGap"),
            n = this.get("splitNumber"),
            a = this.get("scale"),
            i = this.get("axisLine"),
            o = this.get("axisTick"),
            s = this.get("axisLabel"),
            u = this.get("axisName"),
            l = this.get(["axisName", "show"]),
            f = this.get(["axisName", "formatter"]),
            h = this.get("axisNameGap"),
            c = this.get("triggerEvent"),
            v = V(this.get("indicator") || [], function (d) {
                d.max != null && d.max > 0 && !d.min ? d.min = 0 : d.min != null && d.min < 0 && !d.max && (d.max = 0);
                var y = u;
                d.color != null && (y = j({
                    color: d.color
                }, u));
                var p = ut(J(d), {
                    boundaryGap: r,
                    splitNumber: n,
                    scale: a,
                    axisLine: i,
                    axisTick: o,
                    axisLabel: s,
                    name: d.text,
                    showName: l,
                    nameLocation: "end",
                    nameGap: h,
                    nameTextStyle: y,
                    triggerEvent: c
                }, !1);
                if (U(f)) {
                    var g = p.name;
                    p.name = f.replace("{value}", g ? ? "")
                } else Q(f) && (p.name = f(p.name, p));
                var m = new ge(p, null, this.ecModel);
                return ke(m, KT.prototype), m.mainType = "radar", m.componentIndex = this.componentIndex, m
            }, this);
        this._indicatorModels = v
    }, t.prototype.getIndicatorModels = function () {
        return this._indicatorModels
    }, t.type = "radar", t.defaultOption = {
        z: 0,
        center: ["50%", "50%"],
        radius: "75%",
        startAngle: 90,
        axisName: {
            show: !0
        },
        boundaryGap: [0, 0],
        splitNumber: 5,
        axisNameGap: 15,
        scale: !1,
        shape: "polygon",
        axisLine: ut({
            lineStyle: {
                color: "#bbb"
            }
        }, ea.axisLine),
        axisLabel: Ti(ea.axisLabel, !1),
        axisTick: Ti(ea.axisTick, !1),
        splitLine: Ti(ea.splitLine, !0),
        splitArea: Ti(ea.splitArea, !0),
        indicator: []
    }, t
}(pt);
const _x = mx;
var Sx = ["axisLine", "axisTickLabel", "axisName"],
    bx = function (e) {
        G(t, e);

        function t() {
            var r = e !== null && e.apply(this, arguments) || this;
            return r.type = t.type, r
        }
        return t.prototype.render = function (r, n, a) {
            var i = this.group;
            i.removeAll(), this._buildAxes(r), this._buildSplitLineAndArea(r)
        }, t.prototype._buildAxes = function (r) {
            var n = r.coordinateSystem,
                a = n.getIndicatorAxes(),
                i = V(a, function (o) {
                    var s = o.model.get("showName") ? o.name : "",
                        u = new Hr(o.model, {
                            axisName: s,
                            position: [n.cx, n.cy],
                            rotation: o.angle,
                            labelDirection: -1,
                            tickDirection: -1,
                            nameDirection: 1
                        });
                    return u
                });
            A(i, function (o) {
                A(Sx, o.add, o), this.group.add(o.getGroup())
            }, this)
        }, t.prototype._buildSplitLineAndArea = function (r) {
            var n = r.coordinateSystem,
                a = n.getIndicatorAxes();
            if (!a.length) return;
            var i = r.get("shape"),
                o = r.getModel("splitLine"),
                s = r.getModel("splitArea"),
                u = o.getModel("lineStyle"),
                l = s.getModel("areaStyle"),
                f = o.get("show"),
                h = s.get("show"),
                c = u.get("color"),
                v = l.get("color"),
                d = B(c) ? c : [c],
                y = B(v) ? v : [v],
                p = [],
                g = [];

            function m(R, E, z) {
                var k = z % E.length;
                return R[k] = R[k] || [], k
            }
            if (i === "circle")
                for (var _ = a[0].getTicksCoords(), S = n.cx, b = n.cy, w = 0; w < _.length; w++) {
                    if (f) {
                        var x = m(p, d, w);
                        p[x].push(new Mo({
                            shape: {
                                cx: S,
                                cy: b,
                                r: _[w].coord
                            }
                        }))
                    }
                    if (h && w < _.length - 1) {
                        var x = m(g, y, w);
                        g[x].push(new cl({
                            shape: {
                                cx: S,
                                cy: b,
                                r0: _[w].coord,
                                r: _[w + 1].coord
                            }
                        }))
                    }
                } else
                    for (var T, D = V(a, function (R, E) {
                            var z = R.getTicksCoords();
                            return T = T == null ? z.length - 1 : Math.min(z.length - 1, T), V(z, function (k) {
                                return n.coordToPoint(k.coord, E)
                            })
                        }), C = [], w = 0; w <= T; w++) {
                        for (var M = [], L = 0; L < a.length; L++) M.push(D[L][w]);
                        if (M[0] && M.push(M[0].slice()), f) {
                            var x = m(p, d, w);
                            p[x].push(new Kr({
                                shape: {
                                    points: M
                                }
                            }))
                        }
                        if (h && C) {
                            var x = m(g, y, w - 1);
                            g[x].push(new Fa({
                                shape: {
                                    points: M.concat(C)
                                }
                            }))
                        }
                        C = M.slice().reverse()
                    }
            var P = u.getLineStyle(),
                I = l.getAreaStyle();
            A(g, function (R, E) {
                this.group.add(Pu(R, {
                    style: j({
                        stroke: "none",
                        fill: y[E % y.length]
                    }, I),
                    silent: !0
                }))
            }, this), A(p, function (R, E) {
                this.group.add(Pu(R, {
                    style: j({
                        fill: "none",
                        stroke: d[E % d.length]
                    }, P),
                    silent: !0
                }))
            }, this)
        }, t.type = "radar", t
    }(ao);
const Tx = bx;
var Mx = function (e) {
    G(t, e);

    function t(r, n, a) {
        var i = e.call(this, r, n, a) || this;
        return i.type = "value", i.angle = 0, i.name = "", i
    }
    return t
}(sM);
const xx = Mx;
var Dx = function () {
    function e(t, r, n) {
        this.dimensions = [], this._model = t, this._indicatorAxes = V(t.getIndicatorModels(), function (a, i) {
            var o = "indicator_" + i,
                s = new xx(o, new $r);
            return s.name = a.get("name"), s.model = a, a.axis = s, this.dimensions.push(o), s
        }, this), this.resize(t, n)
    }
    return e.prototype.getIndicatorAxes = function () {
        return this._indicatorAxes
    }, e.prototype.dataToPoint = function (t, r) {
        var n = this._indicatorAxes[r];
        return this.coordToPoint(n.dataToCoord(t), r)
    }, e.prototype.coordToPoint = function (t, r) {
        var n = this._indicatorAxes[r],
            a = n.angle,
            i = this.cx + t * Math.cos(a),
            o = this.cy - t * Math.sin(a);
        return [i, o]
    }, e.prototype.pointToData = function (t) {
        var r = t[0] - this.cx,
            n = t[1] - this.cy,
            a = Math.sqrt(r * r + n * n);
        r /= a, n /= a;
        for (var i = Math.atan2(-n, r), o = 1 / 0, s, u = -1, l = 0; l < this._indicatorAxes.length; l++) {
            var f = this._indicatorAxes[l],
                h = Math.abs(i - f.angle);
            h < o && (s = f, u = l, o = h)
        }
        return [u, +(s && s.coordToData(a))]
    }, e.prototype.resize = function (t, r) {
        var n = t.get("center"),
            a = r.getWidth(),
            i = r.getHeight(),
            o = Math.min(a, i) / 2;
        this.cx = rt(n[0], a), this.cy = rt(n[1], i), this.startAngle = t.get("startAngle") * Math.PI / 180;
        var s = t.get("radius");
        (U(s) || it(s)) && (s = [0, s]), this.r0 = rt(s[0], o), this.r = rt(s[1], o), A(this._indicatorAxes, function (u, l) {
            u.setExtent(this.r0, this.r);
            var f = this.startAngle + l * Math.PI * 2 / this._indicatorAxes.length;
            f = Math.atan2(Math.sin(f), Math.cos(f)), u.angle = f
        }, this)
    }, e.prototype.update = function (t, r) {
        var n = this._indicatorAxes,
            a = this._model;
        A(n, function (s) {
            s.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeriesByType("radar", function (s, u) {
            if (!(s.get("coordinateSystem") !== "radar" || t.getComponent("radar", s.get("radarIndex")) !== a)) {
                var l = s.getData();
                A(n, function (f) {
                    f.scale.unionExtentFromData(l, l.mapDimension(f.dim))
                })
            }
        }, this);
        var i = a.get("splitNumber"),
            o = new $r;
        o.setExtent(0, i), o.setInterval(1), A(n, function (s, u) {
            ox(s.scale, s.model, o)
        })
    }, e.prototype.convertToPixel = function (t, r, n) {
        return console.warn("Not implemented."), null
    }, e.prototype.convertFromPixel = function (t, r, n) {
        return console.warn("Not implemented."), null
    }, e.prototype.containPoint = function (t) {
        return console.warn("Not implemented."), !1
    }, e.create = function (t, r) {
        var n = [];
        return t.eachComponent("radar", function (a) {
            var i = new e(a, t, r);
            n.push(i), a.coordinateSystem = i
        }), t.eachSeriesByType("radar", function (a) {
            a.get("coordinateSystem") === "radar" && (a.coordinateSystem = n[a.get("radarIndex") || 0])
        }), n
    }, e.dimensions = [], e
}();
const Cx = Dx;

function Ax(e) {
    e.registerCoordinateSystem("radar", Cx), e.registerComponentModel(_x), e.registerComponentView(Tx), e.registerVisual({
        seriesType: "radar",
        reset: function (t) {
            var r = t.getData();
            r.each(function (n) {
                r.setItemVisual(n, "legendIcon", "roundRect")
            }), r.setVisual("legendIcon", "roundRect")
        }
    })
}

function QD(e) {
    ig(Ax), e.registerChartView(px), e.registerSeriesModel(yx), e.registerLayout(vx), e.registerProcessor(Ug("radar")), e.registerPreprocessor(cx)
}
export {
    ly as $, $t as A, ot as B, ct as C, ne as D, mD as E, At as F, Ux as G, Wx as H, Fp as I, jc as J, Ut as K, Q_ as L, U as M, Mc as N, xy as O, O as P, tD as Q, jx as R, it as S, nl as T, Yr as U, mf as V, at as W, bu as X, uy as Y, qr as Z, G as _, tl as a, dD as a$, Sf as a0, Jx as a1, oy as a2, Re as a3, Xc as a4, J as a5, Wr as a6, Xx as a7, al as a8, $x as a9, et as aA, ut as aB, ic as aC, dg as aD, ye as aE, zl as aF, vr as aG, Tu as aH, Mu as aI, Qi as aJ, Sl as aK, nb as aL, _l as aM, SM as aN, vl as aO, Rd as aP, rb as aQ, ml as aR, cg as aS, $s as aT, _c as aU, bt as aV, Z1 as aW, j as aX, qi as aY, go as aZ, sr as a_, n_ as aa, r_ as ab, e0 as ac, Qx as ad, Kx as ae, rD as af, Yx as ag, qx as ah, Zx as ai, B as aj, Y as ak, BD as al, eD as am, ee as an, Rx as ao, De as ap, Ue as aq, Ra as ar, Cf as as, Qu as at, iv as au, Ix as av, lv as aw, Hu as ax, gb as ay, hf as az, el as b, $g as b$, hr as b0, wM as b1, om as b2, j_ as b3, Ee as b4, zg as b5, bM as b6, TM as b7, Vx as b8, Ap as b9, g1 as bA, In as bB, yl as bC, ig as bD, En as bE, _t as bF, Fx as bG, N0 as bH, Ur as bI, Mo as bJ, bd as bK, Fa as bL, Kr as bM, R_ as bN, e1 as bO, Ve as bP, hc as bQ, z0 as bR, af as bS, wn as bT, Co as bU, Na as bV, d_ as bW, _v as bX, Bd as bY, pD as bZ, o_ as b_, CM as ba, pt as bb, Or as bc, ke as bd, KT as be, ix as bf, ro as bg, ep as bh, no as bi, Ev as bj, sM as bk, Bi as bl, tp as bm, YD as bn, WD as bo, ZT as bp, UD as bq, VD as br, HD as bs, ox as bt, Xr as bu, ge as bv, ao as bw, K as bx, re as by, Hr as bz, Pe as c, ND as c$, nS as c0, Aa as c1, fc as c2, Ex as c3, Lx as c4, mu as c5, ur as c6, li as c7, Ww as c8, cD as c9, la as cA, m0 as cB, b0 as cC, Vo as cD, Ln as cE, _0 as cF, S0 as cG, kx as cH, Ox as cI, dt as cJ, Hi as cK, Dt as cL, Sn as cM, Pl as cN, Xg as cO, fw as cP, Qc as cQ, i_ as cR, D1 as cS, zv as cT, Zr as cU, W as cV, Ki as cW, Ug as cX, fr as cY, Fi as cZ, OD as c_, y0 as ca, wo as cb, Ad as cc, pe as cd, vg as ce, hg as cf, CD as cg, Tt as ch, MD as ci, TD as cj, to as ck, xa as cl, Zb as cm, wD as cn, Cu as co, pd as cp, T_ as cq, oc as cr, zx as cs, ka as ct, yu as cu, de as cv, sD as cw, Gx as cx, Hx as cy, aD as cz, gn as d, ED as d$, Nd as d0, nD as d1, d1 as d2, c1 as d3, y1 as d4, vD as d5, Jb as d6, rS as d7, b1 as d8, iD as d9, gl as dA, f1 as dB, _1 as dC, jd as dD, Ic as dE, XT as dF, cl as dG, Pu as dH, xD as dI, SD as dJ, G1 as dK, We as dL, Zy as dM, Q1 as dN, K1 as dO, fD as dP, zy as dQ, $D as dR, YT as dS, bD as dT, tu as dU, k0 as dV, us as dW, DD as dX, uD as dY, _D as dZ, ue as d_, Vt as da, kt as db, MM as dc, v1 as dd, Bx as de, ru as df, df as dg, an as dh, km as di, Uy as dj, F1 as dk, Xu as dl, CT as dm, DT as dn, ua as dp, Xi as dq, $i as dr, gf as ds, Ta as dt, Di as du, Bt as dv, o1 as dw, yh as dx, GD as dy, x1 as dz, A as e, Nx as e0, hD as e1, AD as e2, RD as e3, xl as e4, X1 as e5, Wc as e6, yo as e7, kD as e8, Gw as e9, He as eA, Gi as eB, gD as eC, Go as eD, vw as eE, yD as eF, ZD as eG, KD as eH, QD as eI, FD as ea, S1 as eb, Oa as ec, FS as ed, w_ as ee, lr as ef, $r as eg, FT as eh, mg as ei, Ge as ej, Oi as ek, p_ as el, fd as em, Hw as en, dT as eo, Hc as ep, Gu as eq, lD as er, oD as es, LD as et, ID as eu, Px as ev, GS as ew, _e as ex, ew as ey, PD as ez, yn as f, V as g, Wt as h, zD as i, Q as j, lt as k, gt as l, bn as m, nr as n, yM as o, rt as p, mM as q, _M as r, qD as s, pM as t, gM as u, XD as v, xr as w, ga as x, Do as y, X as z
};
