import {
    q as bt,
    A as Ut,
    z as Ht,
    g as _e,
    r as tt,
    c as ee,
    m as Pt,
    t as Ft,
    v as Be,
    D as K,
    y as ft,
    j as Rt,
    H as Te,
    F as Ee,
    x as Se,
    J as Ie,
    I as Le,
    M as Me,
    E as Ne,
    G as Fe
} from "./vant-3s7b3naM.js";
import {
    _ as Re
} from "./icon_copy-BwRkM0m9.js";
import {
    _ as Oe
} from "./icon_tips-BV3W61Vo.js";
import {
    _ as he,
    a as $e
} from "./index-WOgA1gKg.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
import "./vuex-MbEfqX8_.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./vuerouter-7dy5tY0D.js";
import "./axios-Cm0UX6qg.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";

function Ot(i) {
    return i === "" ? i : i === "true" || i == "1"
}

function ze(i, t) {
    return new Promise((e, r) => {
        var n = new XMLHttpRequest;
        n.responseType = "blob", n.onload = function () {
            var o = new FileReader;
            o.onloadend = function () {
                e(o.result)
            }, o.readAsArrayBuffer(n.response)
        }, n.open("GET", i), n.send()
    })
}

function it(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i))
}

function re(i, t) {
    for (var e = "", r = 0, n = -1, o = 0, a, s = 0; s <= i.length; ++s) {
        if (s < i.length) a = i.charCodeAt(s);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(n === s - 1 || o === 1))
                if (n !== s - 1 && o === 2) {
                    if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                        if (e.length > 2) {
                            var l = e.lastIndexOf("/");
                            if (l !== e.length - 1) {
                                l === -1 ? (e = "", r = 0) : (e = e.slice(0, l), r = e.length - 1 - e.lastIndexOf("/")), n = s, o = 0;
                                continue
                            }
                        } else if (e.length === 2 || e.length === 1) {
                            e = "", r = 0, n = s, o = 0;
                            continue
                        }
                    }
                    t && (e.length > 0 ? e += "/.." : e = "..", r = 2)
                } else e.length > 0 ? e += "/" + i.slice(n + 1, s) : e = i.slice(n + 1, s), r = s - n - 1;
            n = s, o = 0
        } else a === 46 && o !== -1 ? ++o : o = -1
    }
    return e
}

function Ge(i, t) {
    var e = t.dir || t.root,
        r = t.base || (t.name || "") + (t.ext || "");
    return e ? e === t.root ? e + r : e + i + r : r
}
var pt = {
    resolve: function () {
        for (var t = "", e = !1, r, n = arguments.length - 1; n >= -1 && !e; n--) {
            var o;
            n >= 0 ? o = arguments[n] : (r === void 0 && (r = process.cwd()), o = r), it(o), o.length !== 0 && (t = o + "/" + t, e = o.charCodeAt(0) === 47)
        }
        return t = re(t, !e), e ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : "."
    },
    normalize: function (t) {
        if (it(t), t.length === 0) return ".";
        var e = t.charCodeAt(0) === 47,
            r = t.charCodeAt(t.length - 1) === 47;
        return t = re(t, !e), t.length === 0 && !e && (t = "."), t.length > 0 && r && (t += "/"), e ? "/" + t : t
    },
    isAbsolute: function (t) {
        return it(t), t.length > 0 && t.charCodeAt(0) === 47
    },
    join: function () {
        if (arguments.length === 0) return ".";
        for (var t, e = 0; e < arguments.length; ++e) {
            var r = arguments[e];
            it(r), r.length > 0 && (t === void 0 ? t = r : t += "/" + r)
        }
        return t === void 0 ? "." : pt.normalize(t)
    },
    relative: function (t, e) {
        if (it(t), it(e), t === e || (t = pt.resolve(t), e = pt.resolve(e), t === e)) return "";
        for (var r = 1; r < t.length && t.charCodeAt(r) === 47; ++r);
        for (var n = t.length, o = n - r, a = 1; a < e.length && e.charCodeAt(a) === 47; ++a);
        for (var s = e.length, l = s - a, c = o < l ? o : l, f = -1, h = 0; h <= c; ++h) {
            if (h === c) {
                if (l > c) {
                    if (e.charCodeAt(a + h) === 47) return e.slice(a + h + 1);
                    if (h === 0) return e.slice(a + h)
                } else o > c && (t.charCodeAt(r + h) === 47 ? f = h : h === 0 && (f = 0));
                break
            }
            var C = t.charCodeAt(r + h),
                A = e.charCodeAt(a + h);
            if (C !== A) break;
            C === 47 && (f = h)
        }
        var D = "";
        for (h = r + f + 1; h <= n; ++h)(h === n || t.charCodeAt(h) === 47) && (D.length === 0 ? D += ".." : D += "/..");
        return D.length > 0 ? D + e.slice(a + f) : (a += f, e.charCodeAt(a) === 47 && ++a, e.slice(a))
    },
    _makeLong: function (t) {
        return t
    },
    dirname: function (t) {
        if (it(t), t.length === 0) return ".";
        for (var e = t.charCodeAt(0), r = e === 47, n = -1, o = !0, a = t.length - 1; a >= 1; --a)
            if (e = t.charCodeAt(a), e === 47) {
                if (!o) {
                    n = a;
                    break
                }
            } else o = !1;
        return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : t.slice(0, n)
    },
    basename: function (t, e) {
        if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
        it(t);
        var r = 0,
            n = -1,
            o = !0,
            a;
        if (e !== void 0 && e.length > 0 && e.length <= t.length) {
            if (e.length === t.length && e === t) return "";
            var s = e.length - 1,
                l = -1;
            for (a = t.length - 1; a >= 0; --a) {
                var c = t.charCodeAt(a);
                if (c === 47) {
                    if (!o) {
                        r = a + 1;
                        break
                    }
                } else l === -1 && (o = !1, l = a + 1), s >= 0 && (c === e.charCodeAt(s) ? --s === -1 && (n = a) : (s = -1, n = l))
            }
            return r === n ? n = l : n === -1 && (n = t.length), t.slice(r, n)
        } else {
            for (a = t.length - 1; a >= 0; --a)
                if (t.charCodeAt(a) === 47) {
                    if (!o) {
                        r = a + 1;
                        break
                    }
                } else n === -1 && (o = !1, n = a + 1);
            return n === -1 ? "" : t.slice(r, n)
        }
    },
    extname: function (t) {
        it(t);
        for (var e = -1, r = 0, n = -1, o = !0, a = 0, s = t.length - 1; s >= 0; --s) {
            var l = t.charCodeAt(s);
            if (l === 47) {
                if (!o) {
                    r = s + 1;
                    break
                }
                continue
            }
            n === -1 && (o = !1, n = s + 1), l === 46 ? e === -1 ? e = s : a !== 1 && (a = 1) : e !== -1 && (a = -1)
        }
        return e === -1 || n === -1 || a === 0 || a === 1 && e === n - 1 && e === r + 1 ? "" : t.slice(e, n)
    },
    format: function (t) {
        if (t === null || typeof t != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
        return Ge("/", t)
    },
    parse: function (t) {
        it(t);
        var e = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (t.length === 0) return e;
        var r = t.charCodeAt(0),
            n = r === 47,
            o;
        n ? (e.root = "/", o = 1) : o = 0;
        for (var a = -1, s = 0, l = -1, c = !0, f = t.length - 1, h = 0; f >= o; --f) {
            if (r = t.charCodeAt(f), r === 47) {
                if (!c) {
                    s = f + 1;
                    break
                }
                continue
            }
            l === -1 && (c = !1, l = f + 1), r === 46 ? a === -1 ? a = f : h !== 1 && (h = 1) : a !== -1 && (h = -1)
        }
        return a === -1 || l === -1 || h === 0 || h === 1 && a === l - 1 && a === s + 1 ? l !== -1 && (s === 0 && n ? e.base = e.name = t.slice(1, l) : e.base = e.name = t.slice(s, l)) : (s === 0 && n ? (e.name = t.slice(1, a), e.base = t.slice(1, l)) : (e.name = t.slice(s, a), e.base = t.slice(s, l)), e.ext = t.slice(a, l)), s > 0 ? e.dir = t.slice(0, s - 1) : n && (e.dir = "/"), e
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
pt.posix = pt;
const je = pt.extname,
    de = pt.basename;
class Ue {
    constructor() {
        let t = typeof global > "u",
            e = "image/png",
            r = "image/jpeg",
            n = "image/jpeg",
            o = "image/webp",
            a = "application/pdf",
            s = "image/svg+xml";
        Object.assign(this, {
            toMime: this.toMime.bind(this),
            fromMime: this.fromMime.bind(this),
            expected: t ? '"png", "jpg", or "webp"' : '"png", "jpg", "pdf", or "svg"',
            formats: t ? {
                png: e,
                jpg: r,
                jpeg: n,
                webp: o
            } : {
                png: e,
                jpg: r,
                jpeg: n,
                pdf: a,
                svg: s
            },
            mimes: t ? {
                [e]: "png",
                [r]: "jpg",
                [o]: "webp"
            } : {
                [e]: "png",
                [r]: "jpg",
                [a]: "pdf",
                [s]: "svg"
            }
        })
    }
    toMime(t) {
        return this.formats[(t || "").replace(/^\./, "").toLowerCase()]
    }
    fromMime(t) {
        return this.mimes[t]
    }
}

function He(i, {
    filename: t = "",
    extension: e = "",
    format: T,
    page: n,
    quality: o,
    matte: a,
    density: s,
    outline: l,
    archive: A
} = {}) {
    var {
        fromMime: f,
        toMime: h,
        expected: C
    } = new Ue, A = A || "canvas", D = T || e.replace(/@\d+x$/i, "") || je(t), T = f(h(D) || D), O = h(T), g = i.length;
    if (!D) throw new Error("Cannot determine image format (use a filename extension or 'format' argument)");
    if (!T) throw new Error(`Unsupported file format "${D}" (expected ${C})`);
    if (!g) throw new RangeError("Canvas has no associated contexts (try calling getContext or newPage first)");
    let m, P, d = t.replace(/{(\d*)}/g, (p, w) => (P = !0, w = parseInt(w, 10), m = isFinite(w) ? w : isFinite(m) ? m : -1, "{}")),
        x = n > 0 ? n - 1 : n < 0 ? g + n : void 0;
    if (isFinite(x) && x < 0 || x >= g) throw new RangeError(g == 1 ? `Canvas only has a â€˜page 1â€™ (${x} is out of bounds)` : `Canvas has pages 1â€“${g} (${x} is out of bounds)`);
    if (i = isFinite(x) ? [i[x]] : P || T == "pdf" ? i : i.slice(-1), o === void 0) o = .92;
    else if (typeof o != "number" || !isFinite(o) || o < 0 || o > 1) throw new TypeError("The quality option must be an number in the 0.0â€“1.0 range");
    if (s === void 0) {
        let p = (e || de(t, D)).match(/@(\d+)x$/i);
        s = p ? parseInt(p[1], 10) : 1
    } else if (typeof s != "number" || !Number.isInteger(s) || s < 1) throw new TypeError("The density option must be a non-negative integer");
    return l === void 0 ? l = !0 : T == "svg" && (l = !!l), {
        filename: t,
        pattern: d,
        format: T,
        mime: O,
        pages: i,
        padding: m,
        quality: o,
        matte: a,
        density: s,
        outline: l,
        archive: A
    }
}
class Tt {
    static
    for (t) {
        return new Tt().append(t).get()
    }
    constructor() {
        this.crc = -1
    }
    get() {
        return ~this.crc
    }
    append(t) {
        for (var e = this.crc | 0, r = this.table, n = 0, o = t.length | 0; n < o; n++) e = e >>> 8 ^ r[(e ^ t[n]) & 255];
        return this.crc = e, this
    }
}
Tt.prototype.table = (() => {
    var i, t, e, r = [];
    for (i = 0; i < 256; i++) {
        for (e = i, t = 0; t < 8; t++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
        r[i] = e
    }
    return r
})();

function $t(i) {
    let t = new Uint8Array(i),
        e = new DataView(t.buffer),
        r = {
            array: t,
            view: e,
            size: i,
            set8(n, o) {
                return e.setUint8(n, o), r
            },
            set16(n, o) {
                return e.setUint16(n, o, !0), r
            },
            set32(n, o) {
                return e.setUint32(n, o, !0), r
            },
            bytes(n, o) {
                return t.set(o, n), r
            }
        };
    return r
}
class Et {
    constructor(t) {
        let e = new Date;
        Object.assign(this, {
            directory: t,
            offset: 0,
            files: [],
            time: (e.getHours() << 6 | e.getMinutes()) << 5 | e.getSeconds() / 2,
            date: (e.getFullYear() - 1980 << 4 | e.getMonth() + 1) << 5 | e.getDate()
        }), this.add(t)
    }
    async add(t, e) {
        let r = !e,
            n = Et.encoder.encode(`${this.directory}/${r?"":t}`),
            o = new Uint8Array(r ? 0 : await e.arrayBuffer()),
            a = 30 + n.length,
            s = a + o.length,
            l = 16,
            {
                offset: c
            } = this,
            f = $t(26).set32(0, 134742036).set16(6, this.time).set16(8, this.date).set32(10, Tt.for(o)).set32(14, o.length).set32(18, o.length).set16(22, n.length);
        c += a;
        let h = $t(a + o.length + l).set32(0, 67324752).bytes(4, f.array).bytes(30, n).bytes(a, o);
        c += o.length, h.set32(s, 134695760).bytes(s + 4, f.array.slice(10, 22)), c += l, this.files.push({
            offset: c,
            folder: r,
            name: n,
            header: f,
            payload: h
        }), this.offset = c
    }
    toBuffer() {
        let t = this.files.reduce((h, {
                name: C
            }) => 46 + C.length + h, 0),
            e = $t(t + 22),
            r = 0;
        for (var {
                offset: n,
                name: o,
                header: a,
                folder: s
            } of this.files) e.set32(r, 33639248).set16(r + 4, 20).bytes(r + 6, a.array).set8(r + 38, s ? 16 : 0).set32(r + 42, n).bytes(r + 46, o), r += 46 + o.length;
        e.set32(r, 101010256).set16(r + 8, this.files.length).set16(r + 10, this.files.length).set32(r + 12, t).set32(r + 16, this.offset);
        let l = new Uint8Array(this.offset + e.size),
            c = 0;
        for (var {
                payload: f
            } of this.files) l.set(f.array, c), c += f.size;
        return l.set(e.array, c), l
    }
    get blob() {
        return new Blob([this.toBuffer()], {
            type: "application/zip"
        })
    }
}
Et.encoder = new TextEncoder;
const Zt = (i, t, e, r) => {
        if (r) {
            let {
                width: n,
                height: o
            } = i, a = Object.assign(document.createElement("canvas"), {
                width: n,
                height: o
            }), s = a.getContext("2d");
            s.fillStyle = r, s.fillRect(0, 0, n, o), s.drawImage(i, 0, 0), i = a
        }
        return new Promise((n, o) => i.toBlob(n, t, e))
    },
    Ke = (...i) => Zt(...i).then(t => t.arrayBuffer()),
    Xe = async (i, t, e, r, n) => {
        ge(n, await Zt(i, t, e, r))
    }, Ze = async (i, t, e, r, n, o, a) => {
        let s = f => o.replace("{}", String(f + 1).padStart(a, "0")),
            l = de(n, ".zip") || "archive",
            c = new Et(l);
        await Promise.all(i.map(async (f, h) => {
            let C = s(h);
            await c.add(C, await Zt(f, t, e, r))
        })), ge(`${l}.zip`, c.blob)
    }, ge = (i, t) => {
        const e = window.URL.createObjectURL(t),
            r = document.createElement("a");
        r.style.display = "none", r.href = e, r.setAttribute("download", i), typeof r.download > "u" && r.setAttribute("target", "_blank"), document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => window.URL.revokeObjectURL(e), 100)
    }, Ve = (i, t, e) => i.map(r => {
        if (t == 1 && !e) return r.canvas;
        let n = document.createElement("canvas"),
            o = n.getContext("2d"),
            a = r.canvas ? r.canvas : r;
        return n.width = a.width * t, n.height = a.height * t, e && (o.fillStyle = e, o.fillRect(0, 0, n.width, n.height)), o.scale(t, t), o.drawImage(a, 0, 0), n
    }), Je = {
        asBuffer: Ke,
        asDownload: Xe,
        asZipDownload: Ze,
        atScale: Ve,
        options: He
    }, {
        asBuffer: zt,
        asDownload: We,
        asZipDownload: qe,
        atScale: Gt,
        options: jt
    } = Je, ne = Symbol.for("toDataURL"), Ye = i => new Promise((t, e) => Object.assign(new pe, {
        crossOrigin: "Anonymous",
        onload: t,
        onerror: e,
        src: i
    }));
let Qe = class {
    constructor(t, e) {
        let r = document.createElement("canvas"),
            n = [];
        Object.defineProperty(r, "async", {
            value: !0,
            writable: !1,
            enumerable: !0
        });
        for (var [o, a] of Object.entries({
                png: () => zt(r, "image/png"),
                jpg: () => zt(r, "image/jpeg"),
                pages: () => n.concat(r).map(s => s.getContext("2d"))
            })) Object.defineProperty(r, o, {
            get: a
        });
        return Object.assign(r, {
            width: t,
            height: e,
            newPage(...s) {
                var {
                    width: c,
                    height: f
                } = r, l = Object.assign(document.createElement("canvas"), {
                    width: c,
                    height: f
                });
                l.getContext("2d").drawImage(r, 0, 0), n.push(l);
                var [c, f] = s.length ? s : [c, f];
                return Object.assign(r, {
                    width: c,
                    height: f
                }).getContext("2d")
            },
            saveAs(s, l) {
                l = typeof l == "number" ? {
                    quality: l
                } : l;
                let c = jt(this.pages, {
                        filename: s,
                        ...l
                    }),
                    {
                        pattern: f,
                        padding: h,
                        mime: C,
                        quality: A,
                        matte: D,
                        density: T,
                        archive: O
                    } = c,
                    g = Gt(c.pages, T);
                return h == null ? We(g[0], C, A, D, s) : qe(g, C, A, D, O, f, h)
            },
            toBuffer(s = "png", l = {}) {
                l = typeof l == "number" ? {
                    quality: l
                } : l;
                let c = jt(this.pages, {
                        extension: s,
                        ...l
                    }),
                    {
                        mime: f,
                        quality: h,
                        matte: C,
                        pages: A,
                        density: D
                    } = c,
                    T = Gt(A, D, C)[0];
                return zt(T, f, h, C)
            },
            [ne]: r.toDataURL.bind(r),
            toDataURL(s = "png", l = {}) {
                l = typeof l == "number" ? {
                    quality: l
                } : l;
                let c = jt(this.pages, {
                        extension: s,
                        ...l
                    }),
                    {
                        mime: f,
                        quality: h,
                        matte: C,
                        pages: A,
                        density: D
                    } = c,
                    T = Gt(A, D, C)[0],
                    O = T[T === r ? ne : "toDataURL"](f, h);
                return Promise.resolve(O)
            }
        })
    }
};
const {
    CanvasRenderingContext2D: tr,
    CanvasGradient: er,
    CanvasPattern: rr,
    Image: pe,
    ImageData: nr,
    Path2D: or,
    DOMMatrix: ir,
    DOMRect: ar,
    DOMPoint: sr
} = window, lr = {
    Canvas: Qe,
    loadImage: Ye,
    CanvasRenderingContext2D: tr,
    CanvasGradient: er,
    CanvasPattern: rr,
    Image: pe,
    ImageData: nr,
    Path2D: or,
    DOMMatrix: ir,
    DOMRect: ar,
    DOMPoint: sr
}, xt = (i, t, e = {}, r = e) => {
    if (Array.isArray(t)) t.forEach(n => xt(i, n, e, r));
    else if (typeof t == "function") t(i, e, r, xt);
    else {
        const n = Object.keys(t)[0];
        Array.isArray(t[n]) ? (r[n] = {}, xt(i, t[n], e, r[n])) : r[n] = t[n](i, e, r, xt)
    }
    return e
}, mt = (i, t) => (e, r, n, o) => {
    t(e, r, n) && o(e, i, r, n)
}, cr = (i, t) => (e, r, n, o) => {
    const a = [];
    let s = e.pos;
    for (; t(e, r, n);) {
        const l = {};
        if (o(e, i, r, l), e.pos === s) break;
        s = e.pos, a.push(l)
    }
    return a
}, ur = i => ({
    data: i,
    pos: 0
}), et = () => i => i.data[i.pos++], me = (i = 0) => t => t.data[t.pos + i], st = i => t => t.data.subarray(t.pos, t.pos += i), St = i => t => t.data.subarray(t.pos, t.pos + i), Kt = i => t => Array.from(st(i)(t)).map(e => String.fromCharCode(e)).join(""), gt = i => t => {
    const e = st(2)(t);
    return i ? (e[1] << 8) + e[0] : (e[0] << 8) + e[1]
}, ve = (i, t) => (e, r, n) => {
    const o = typeof t == "function" ? t(e, r, n) : t,
        a = st(i),
        s = new Array(o);
    for (var l = 0; l < o; l++) s[l] = a(e);
    return s
}, fr = (i, t, e) => {
    for (var r = 0, n = 0; n < e; n++) r += i[t + n] && 2 ** (e - n - 1);
    return r
}, Vt = i => t => {
    const e = et()(t),
        r = new Array(8);
    for (var n = 0; n < 8; n++) r[7 - n] = !!(e & 1 << n);
    return Object.keys(i).reduce((o, a) => {
        const s = i[a];
        return s.length ? o[a] = fr(r, s.index, s.length) : o[a] = r[s.index], o
    }, {})
};
var It = {
    blocks: i => {
        const e = [],
            r = i.data.length;
        for (var n = 0, o = et()(i); o !== 0 && o; o = et()(i)) {
            if (i.pos + o >= r) {
                const c = r - i.pos;
                e.push(st(c)(i)), n += c;
                break
            }
            e.push(st(o)(i)), n += o
        }
        const a = new Uint8Array(n);
        for (var s = 0, l = 0; l < e.length; l++) a.set(e[l], s), s += e[l].length;
        return a
    }
};
const hr = mt({
        gce: [{
            codes: st(2)
        }, {
            byteSize: et()
        }, {
            extras: Vt({
                future: {
                    index: 0,
                    length: 3
                },
                disposal: {
                    index: 3,
                    length: 3
                },
                userInput: {
                    index: 6
                },
                transparentColorGiven: {
                    index: 7
                }
            })
        }, {
            delay: gt(!0)
        }, {
            transparentColorIndex: et()
        }, {
            terminator: et()
        }]
    }, i => {
        var t = St(2)(i);
        return t[0] === 33 && t[1] === 249
    }),
    dr = mt({
        image: [{
            code: et()
        }, {
            descriptor: [{
                left: gt(!0)
            }, {
                top: gt(!0)
            }, {
                width: gt(!0)
            }, {
                height: gt(!0)
            }, {
                lct: Vt({
                    exists: {
                        index: 0
                    },
                    interlaced: {
                        index: 1
                    },
                    sort: {
                        index: 2
                    },
                    future: {
                        index: 3,
                        length: 2
                    },
                    size: {
                        index: 5,
                        length: 3
                    }
                })
            }]
        }, mt({
            lct: ve(3, (i, t, e) => Math.pow(2, e.descriptor.lct.size + 1))
        }, (i, t, e) => e.descriptor.lct.exists), {
            data: [{
                minCodeSize: et()
            }, It]
        }]
    }, i => me()(i) === 44),
    gr = mt({
        text: [{
            codes: st(2)
        }, {
            blockSize: et()
        }, {
            preData: (i, t, e) => st(e.text.blockSize)(i)
        }, It]
    }, i => {
        var t = St(2)(i);
        return t[0] === 33 && t[1] === 1
    }),
    pr = mt({
        application: [{
            codes: st(2)
        }, {
            blockSize: et()
        }, {
            id: (i, t, e) => Kt(e.blockSize)(i)
        }, It]
    }, i => {
        var t = St(2)(i);
        return t[0] === 33 && t[1] === 255
    }),
    mr = mt({
        comment: [{
            codes: st(2)
        }, It]
    }, i => {
        var t = St(2)(i);
        return t[0] === 33 && t[1] === 254
    }),
    vr = [{
        header: [{
            signature: Kt(3)
        }, {
            version: Kt(3)
        }]
    }, {
        lsd: [{
            width: gt(!0)
        }, {
            height: gt(!0)
        }, {
            gct: Vt({
                exists: {
                    index: 0
                },
                resolution: {
                    index: 1,
                    length: 3
                },
                sort: {
                    index: 4
                },
                size: {
                    index: 5,
                    length: 3
                }
            })
        }, {
            backgroundColorIndex: et()
        }, {
            pixelAspectRatio: et()
        }]
    }, mt({
        gct: ve(3, (i, t) => Math.pow(2, t.lsd.gct.size + 1))
    }, (i, t) => t.lsd.gct.exists), {
        frames: cr([hr, pr, mr, dr, gr], i => {
            var t = me()(i);
            return t === 33 || t === 44
        })
    }],
    br = (i, t) => {
        const e = new Array(i.length),
            r = i.length / t,
            n = function (f, h) {
                const C = i.slice(h * t, (h + 1) * t);
                e.splice.apply(e, [f * t, t].concat(C))
            },
            o = [0, 4, 2, 1],
            a = [8, 8, 4, 2];
        for (var s = 0, l = 0; l < 4; l++)
            for (var c = o[l]; c < r; c += a[l]) n(c, s), s++;
        return e
    },
    wr = (i, t, e) => {
        const o = e;
        var a, s, l, c, f, h, C, x, A, D, d, T, p, w, E, k;
        const O = new Array(e),
            g = new Array(4096),
            m = new Array(4096),
            P = new Array(4097);
        for (T = i, s = 1 << T, f = s + 1, a = s + 2, C = -1, c = T + 1, l = (1 << c) - 1, A = 0; A < s; A++) g[A] = 0, m[A] = A;
        var d, x, p, w, k, E;
        for (d = x = p = w = k = E = 0, D = 0; D < o;) {
            if (w === 0) {
                if (x < c) {
                    d += t[E] << x, x += 8, E++;
                    continue
                }
                if (A = d & l, d >>= c, x -= c, A > a || A == f) break;
                if (A == s) {
                    c = T + 1, l = (1 << c) - 1, a = s + 2, C = -1;
                    continue
                }
                if (C == -1) {
                    P[w++] = m[A], C = A, p = A;
                    continue
                }
                for (h = A, A == a && (P[w++] = p, A = C); A > s;) P[w++] = m[A], A = g[A];
                p = m[A] & 255, P[w++] = p, a < 4096 && (g[a] = C, m[a] = p, a++, !(a & l) && a < 4096 && (c++, l += a)), C = h
            }
            w--, O[k++] = P[w], D++
        }
        for (D = k; D < o; D++) O[D] = 0;
        return O
    },
    yr = i => {
        const t = new Uint8Array(i);
        return xt(ur(t), vr)
    },
    Cr = i => {
        const t = i.pixels.length,
            e = new Uint8ClampedArray(t * 4);
        for (var r = 0; r < t; r++) {
            const n = r * 4,
                o = i.pixels[r],
                a = i.colorTable[o];
            e[n] = a[0], e[n + 1] = a[1], e[n + 2] = a[2], e[n + 3] = o !== i.transparentIndex ? 255 : 0
        }
        return e
    },
    xr = (i, t, e) => {
        if (!i.image) {
            console.warn("gif frame does not have associated image.");
            return
        }
        const {
            image: r
        } = i, n = r.descriptor.width * r.descriptor.height;
        var o = wr(r.data.minCodeSize, r.data.blocks, n);
        r.descriptor.lct.interlaced && (o = br(o, r.descriptor.width));
        const a = {
            pixels: o,
            dims: {
                top: i.image.descriptor.top,
                left: i.image.descriptor.left,
                width: i.image.descriptor.width,
                height: i.image.descriptor.height
            }
        };
        return r.descriptor.lct && r.descriptor.lct.exists ? a.colorTable = r.lct : a.colorTable = t, i.gce && (a.delay = (i.gce.delay || 10) * 10, a.disposalType = i.gce.extras.disposal, i.gce.extras.transparentColorGiven && (a.transparentIndex = i.gce.transparentColorIndex)), e && (a.patch = Cr(a)), a
    },
    Ar = (i, t) => i.frames.filter(e => e.image).map(e => xr(e, i.gct, t));

function Pr(i, t, e) {
    const r = be(t),
        n = i - 1;
    let o = 0;
    switch (e) {
        case J.L:
            o = at[n][0];
            break;
        case J.M:
            o = at[n][1];
            break;
        case J.Q:
            o = at[n][2];
            break;
        case J.H:
            o = at[n][3];
            break
    }
    return r <= o
}

function kr(i, t) {
    for (var e = 1, r = be(i), n = 0, o = at.length; n < o; n++) {
        var a = 0;
        switch (t) {
            case J.L:
                a = at[n][0];
                break;
            case J.M:
                a = at[n][1];
                break;
            case J.Q:
                a = at[n][2];
                break;
            case J.H:
                a = at[n][3];
                break
        }
        if (r <= a) break;
        e++
    }
    if (e > at.length) throw new Error("Too long data");
    return e
}

function be(i) {
    var t = encodeURI(i).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return t.length + (t.length != Number(i) ? 3 : 0)
}
class Dr {
    constructor(t) {
        this.mode = Y.MODE_8BIT_BYTE, this.parsedData = [], this.data = t;
        const e = [];
        for (let r = 0, n = this.data.length; r < n; r++) {
            const o = [],
                a = this.data.charCodeAt(r);
            a > 65536 ? (o[0] = 240 | (a & 1835008) >>> 18, o[1] = 128 | (a & 258048) >>> 12, o[2] = 128 | (a & 4032) >>> 6, o[3] = 128 | a & 63) : a > 2048 ? (o[0] = 224 | (a & 61440) >>> 12, o[1] = 128 | (a & 4032) >>> 6, o[2] = 128 | a & 63) : a > 128 ? (o[0] = 192 | (a & 1984) >>> 6, o[1] = 128 | a & 63) : o[0] = a, e.push(o)
        }
        this.parsedData = Array.prototype.concat.apply([], e), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }
    getLength() {
        return this.parsedData.length
    }
    write(t) {
        for (let e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8)
    }
}
class dt {
    constructor(t = -1, e = J.L) {
        this.moduleCount = 0, this.dataList = [], this.typeNumber = t, this.errorCorrectLevel = e, this.moduleCount = 0, this.dataList = []
    }
    addData(t) {
        if (this.typeNumber <= 0) this.typeNumber = kr(t, this.errorCorrectLevel);
        else {
            if (this.typeNumber > 40) throw new Error(`Invalid QR version: ${this.typeNumber}`);
            if (!Pr(this.typeNumber, t, this.errorCorrectLevel)) throw new Error(`Data is too long for QR version: ${this.typeNumber}`)
        }
        const e = new Dr(t);
        this.dataList.push(e), this.dataCache = void 0
    }
    isDark(t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(`${t},${e}`);
        return this.modules[t][e]
    }
    getModuleCount() {
        return this.moduleCount
    }
    make() {
        this.makeImpl(!1, this.getBestMaskPattern())
    }
    makeImpl(t, e) {
        this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
        for (let r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (let n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = dt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
    }
    setupPositionProbePattern(t, e) {
        for (let r = -1; r <= 7; r++)
            if (!(t + r <= -1 || this.moduleCount <= t + r))
                for (let n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[t + r][e + n] = !0 : this.modules[t + r][e + n] = !1)
    }
    getBestMaskPattern() {
        if (Number.isInteger(this.maskPattern) && Object.values(ct).includes(this.maskPattern)) return this.maskPattern;
        let t = 0,
            e = 0;
        for (let r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            const n = F.getLostPoint(this);
            (r == 0 || t > n) && (t = n, e = r)
        }
        return e
    }
    setupTimingPattern() {
        for (let t = 8; t < this.moduleCount - 8; t++) this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
        for (let t = 8; t < this.moduleCount - 8; t++) this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0)
    }
    setupPositionAdjustPattern() {
        const t = F.getPatternPosition(this.typeNumber);
        for (let e = 0; e < t.length; e++)
            for (let r = 0; r < t.length; r++) {
                const n = t[e],
                    o = t[r];
                if (this.modules[n][o] == null)
                    for (let a = -2; a <= 2; a++)
                        for (let s = -2; s <= 2; s++) a == -2 || a == 2 || s == -2 || s == 2 || a == 0 && s == 0 ? this.modules[n + a][o + s] = !0 : this.modules[n + a][o + s] = !1
            }
    }
    setupTypeNumber(t) {
        const e = F.getBCHTypeNumber(this.typeNumber);
        for (var r = 0; r < 18; r++) {
            var n = !t && (e >> r & 1) == 1;
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (var r = 0; r < 18; r++) {
            var n = !t && (e >> r & 1) == 1;
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
        }
    }
    setupTypeInfo(t, e) {
        const r = this.errorCorrectLevel << 3 | e,
            n = F.getBCHTypeInfo(r);
        for (var o = 0; o < 15; o++) {
            var a = !t && (n >> o & 1) == 1;
            o < 6 ? this.modules[o][8] = a : o < 8 ? this.modules[o + 1][8] = a : this.modules[this.moduleCount - 15 + o][8] = a
        }
        for (var o = 0; o < 15; o++) {
            var a = !t && (n >> o & 1) == 1;
            o < 8 ? this.modules[8][this.moduleCount - o - 1] = a : o < 9 ? this.modules[8][15 - o - 1 + 1] = a : this.modules[8][15 - o - 1] = a
        }
        this.modules[this.moduleCount - 8][8] = !t
    }
    mapData(t, e) {
        let r = -1,
            n = this.moduleCount - 1,
            o = 7,
            a = 0;
        for (let s = this.moduleCount - 1; s > 0; s -= 2)
            for (s == 6 && s--;;) {
                for (let l = 0; l < 2; l++)
                    if (this.modules[n][s - l] == null) {
                        let c = !1;
                        a < t.length && (c = (t[a] >>> o & 1) == 1), F.getMask(e, n, s - l) && (c = !c), this.modules[n][s - l] = c, o--, o == -1 && (a++, o = 7)
                    } if (n += r, n < 0 || this.moduleCount <= n) {
                    n -= r, r = -r;
                    break
                }
            }
    }
    static createData(t, e, r) {
        const n = ut.getRSBlocks(t, e),
            o = new _r;
        for (var a = 0; a < r.length; a++) {
            const l = r[a];
            o.put(l.mode, 4), o.put(l.getLength(), F.getLengthInBits(l.mode, t)), l.write(o)
        }
        let s = 0;
        for (var a = 0; a < n.length; a++) s += n[a].dataCount;
        if (o.getLengthInBits() > s * 8) throw new Error(`code length overflow. (${o.getLengthInBits()}>${s*8})`);
        for (o.getLengthInBits() + 4 <= s * 8 && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
        for (; !(o.getLengthInBits() >= s * 8 || (o.put(dt.PAD0, 8), o.getLengthInBits() >= s * 8));) o.put(dt.PAD1, 8);
        return dt.createBytes(o, n)
    }
    static createBytes(t, e) {
        let r = 0,
            n = 0,
            o = 0;
        const a = new Array(e.length),
            s = new Array(e.length);
        for (var l = 0; l < e.length; l++) {
            const A = e[l].dataCount,
                D = e[l].totalCount - A;
            n = Math.max(n, A), o = Math.max(o, D), a[l] = new Array(A);
            for (var c = 0; c < a[l].length; c++) a[l][c] = 255 & t.buffer[c + r];
            r += A;
            const T = F.getErrorCorrectPolynomial(D),
                g = new wt(a[l], T.getLength() - 1).mod(T);
            s[l] = new Array(T.getLength() - 1);
            for (var c = 0; c < s[l].length; c++) {
                const P = c + g.getLength() - s[l].length;
                s[l][c] = P >= 0 ? g.get(P) : 0
            }
        }
        let f = 0;
        for (var c = 0; c < e.length; c++) f += e[c].totalCount;
        const h = new Array(f);
        let C = 0;
        for (var c = 0; c < n; c++)
            for (var l = 0; l < e.length; l++) c < a[l].length && (h[C++] = a[l][c]);
        for (var c = 0; c < o; c++)
            for (var l = 0; l < e.length; l++) c < s[l].length && (h[C++] = s[l][c]);
        return h
    }
}
dt.PAD0 = 236;
dt.PAD1 = 17;
const J = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    Y = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    },
    ct = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
class F {
    static getBCHTypeInfo(t) {
        let e = t << 10;
        for (; F.getBCHDigit(e) - F.getBCHDigit(F.G15) >= 0;) e ^= F.G15 << F.getBCHDigit(e) - F.getBCHDigit(F.G15);
        return (t << 10 | e) ^ F.G15_MASK
    }
    static getBCHTypeNumber(t) {
        let e = t << 12;
        for (; F.getBCHDigit(e) - F.getBCHDigit(F.G18) >= 0;) e ^= F.G18 << F.getBCHDigit(e) - F.getBCHDigit(F.G18);
        return t << 12 | e
    }
    static getBCHDigit(t) {
        let e = 0;
        for (; t != 0;) e++, t >>>= 1;
        return e
    }
    static getPatternPosition(t) {
        return F.PATTERN_POSITION_TABLE[t - 1]
    }
    static getMask(t, e, r) {
        switch (t) {
            case ct.PATTERN000:
                return (e + r) % 2 == 0;
            case ct.PATTERN001:
                return e % 2 == 0;
            case ct.PATTERN010:
                return r % 3 == 0;
            case ct.PATTERN011:
                return (e + r) % 3 == 0;
            case ct.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
            case ct.PATTERN101:
                return e * r % 2 + e * r % 3 == 0;
            case ct.PATTERN110:
                return (e * r % 2 + e * r % 3) % 2 == 0;
            case ct.PATTERN111:
                return (e * r % 3 + (e + r) % 2) % 2 == 0;
            default:
                throw new Error(`bad maskPattern:${t}`)
        }
    }
    static getErrorCorrectPolynomial(t) {
        let e = new wt([1], 0);
        for (let r = 0; r < t; r++) e = e.multiply(new wt([1, H.gexp(r)], 0));
        return e
    }
    static getLengthInBits(t, e) {
        if (1 <= e && e < 10) switch (t) {
            case Y.MODE_NUMBER:
                return 10;
            case Y.MODE_ALPHA_NUM:
                return 9;
            case Y.MODE_8BIT_BYTE:
                return 8;
            case Y.MODE_KANJI:
                return 8;
            default:
                throw new Error(`mode:${t}`)
        } else if (e < 27) switch (t) {
            case Y.MODE_NUMBER:
                return 12;
            case Y.MODE_ALPHA_NUM:
                return 11;
            case Y.MODE_8BIT_BYTE:
                return 16;
            case Y.MODE_KANJI:
                return 10;
            default:
                throw new Error(`mode:${t}`)
        } else if (e < 41) switch (t) {
            case Y.MODE_NUMBER:
                return 14;
            case Y.MODE_ALPHA_NUM:
                return 13;
            case Y.MODE_8BIT_BYTE:
                return 16;
            case Y.MODE_KANJI:
                return 12;
            default:
                throw new Error(`mode:${t}`)
        } else throw new Error(`type:${e}`)
    }
    static getLostPoint(t) {
        const e = t.getModuleCount();
        let r = 0;
        for (var n = 0; n < e; n++)
            for (var o = 0; o < e; o++) {
                let l = 0;
                const c = t.isDark(n, o);
                for (let f = -1; f <= 1; f++)
                    if (!(n + f < 0 || e <= n + f))
                        for (let h = -1; h <= 1; h++) o + h < 0 || e <= o + h || f == 0 && h == 0 || c == t.isDark(n + f, o + h) && l++;
                l > 5 && (r += 3 + l - 5)
            }
        for (var n = 0; n < e - 1; n++)
            for (var o = 0; o < e - 1; o++) {
                let f = 0;
                t.isDark(n, o) && f++, t.isDark(n + 1, o) && f++, t.isDark(n, o + 1) && f++, t.isDark(n + 1, o + 1) && f++, (f == 0 || f == 4) && (r += 3)
            }
        for (var n = 0; n < e; n++)
            for (var o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
        for (var o = 0; o < e; o++)
            for (var n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
        let a = 0;
        for (var o = 0; o < e; o++)
            for (var n = 0; n < e; n++) t.isDark(n, o) && a++;
        const s = Math.abs(100 * a / e / e - 50) / 5;
        return r += s * 10, r
    }
}
F.PATTERN_POSITION_TABLE = [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
];
F.G15 = 1335;
F.G18 = 7973;
F.G15_MASK = 21522;
class H {
    static glog(t) {
        if (t < 1) throw new Error(`glog(${t})`);
        return H.LOG_TABLE[t]
    }
    static gexp(t) {
        for (; t < 0;) t += 255;
        for (; t >= 256;) t -= 255;
        return H.EXP_TABLE[t]
    }
}
H.EXP_TABLE = new Array(256);
H.LOG_TABLE = new Array(256);
H._constructor = function () {
    for (var i = 0; i < 8; i++) H.EXP_TABLE[i] = 1 << i;
    for (var i = 8; i < 256; i++) H.EXP_TABLE[i] = H.EXP_TABLE[i - 4] ^ H.EXP_TABLE[i - 5] ^ H.EXP_TABLE[i - 6] ^ H.EXP_TABLE[i - 8];
    for (var i = 0; i < 255; i++) H.LOG_TABLE[H.EXP_TABLE[i]] = i
}();
class wt {
    constructor(t, e) {
        if (t.length == null) throw new Error(`${t.length}/${e}`);
        let r = 0;
        for (; r < t.length && t[r] == 0;) r++;
        this.num = new Array(t.length - r + e);
        for (let n = 0; n < t.length - r; n++) this.num[n] = t[n + r]
    }
    get(t) {
        return this.num[t]
    }
    getLength() {
        return this.num.length
    }
    multiply(t) {
        const e = new Array(this.getLength() + t.getLength() - 1);
        for (let r = 0; r < this.getLength(); r++)
            for (let n = 0; n < t.getLength(); n++) e[r + n] ^= H.gexp(H.glog(this.get(r)) + H.glog(t.get(n)));
        return new wt(e, 0)
    }
    mod(t) {
        if (this.getLength() - t.getLength() < 0) return this;
        const e = H.glog(this.get(0)) - H.glog(t.get(0)),
            r = new Array(this.getLength());
        for (var n = 0; n < this.getLength(); n++) r[n] = this.get(n);
        for (var n = 0; n < t.getLength(); n++) r[n] ^= H.gexp(H.glog(t.get(n)) + e);
        return new wt(r, 0).mod(t)
    }
}
class ut {
    constructor(t, e) {
        this.totalCount = t, this.dataCount = e
    }
    static getRSBlocks(t, e) {
        const r = ut.getRsBlockTable(t, e);
        if (r == null) throw new Error(`bad rs block @ typeNumber:${t}/errorCorrectLevel:${e}`);
        const n = r.length / 3,
            o = [];
        for (let a = 0; a < n; a++) {
            const s = r[a * 3 + 0],
                l = r[a * 3 + 1],
                c = r[a * 3 + 2];
            for (let f = 0; f < s; f++) o.push(new ut(l, c))
        }
        return o
    }
    static getRsBlockTable(t, e) {
        switch (e) {
            case J.L:
                return ut.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
            case J.M:
                return ut.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
            case J.Q:
                return ut.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
            case J.H:
                return ut.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
            default:
                return
        }
    }
}
ut.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
];
class _r {
    constructor() {
        this.buffer = [], this.length = 0
    }
    get(t) {
        const e = Math.floor(t / 8);
        return (this.buffer[e] >>> 7 - t % 8 & 1) == 1
    }
    put(t, e) {
        for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) == 1)
    }
    getLengthInBits() {
        return this.length
    }
    putBit(t) {
        const e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
    }
}
const at = [
    [17, 14, 11, 7],
    [32, 26, 20, 14],
    [53, 42, 32, 24],
    [78, 62, 46, 34],
    [106, 84, 60, 44],
    [134, 106, 74, 58],
    [154, 122, 86, 64],
    [192, 152, 108, 84],
    [230, 180, 130, 98],
    [271, 213, 151, 119],
    [321, 251, 177, 137],
    [367, 287, 203, 155],
    [425, 331, 241, 177],
    [458, 362, 258, 194],
    [520, 412, 292, 220],
    [586, 450, 322, 250],
    [644, 504, 364, 280],
    [718, 560, 394, 310],
    [792, 624, 442, 338],
    [858, 666, 482, 382],
    [929, 711, 509, 403],
    [1003, 779, 565, 439],
    [1091, 857, 611, 461],
    [1171, 911, 661, 511],
    [1273, 997, 715, 535],
    [1367, 1059, 751, 593],
    [1465, 1125, 805, 625],
    [1528, 1190, 868, 658],
    [1628, 1264, 908, 698],
    [1732, 1370, 982, 742],
    [1840, 1452, 1030, 790],
    [1952, 1538, 1112, 842],
    [2068, 1628, 1168, 898],
    [2188, 1722, 1228, 958],
    [2303, 1809, 1283, 983],
    [2431, 1911, 1351, 1051],
    [2563, 1989, 1423, 1093],
    [2699, 2099, 1499, 1139],
    [2809, 2213, 1579, 1219],
    [2953, 2331, 1663, 1273]
];
var Br = 100,
    Z = 256,
    oe = Z - 1,
    ht = 4,
    we = 16,
    Jt = 1 << we,
    ye = 10,
    Wt = 10,
    Tr = Jt >> Wt,
    Er = Jt << ye - Wt,
    Sr = Z >> 3,
    Xt = 6,
    Ir = 1 << Xt,
    Lr = Sr * Ir,
    Mr = 30,
    Ce = 10,
    kt = 1 << Ce,
    xe = 8,
    ie = 1 << xe,
    Nr = Ce + xe,
    vt = 1 << Nr,
    ae = 499,
    se = 491,
    le = 487,
    Ae = 503,
    Fr = 3 * Ae;

function Rr(i, t) {
    var e, r, n, o, a;

    function s() {
        e = [], r = new Int32Array(256), n = new Int32Array(Z), o = new Int32Array(Z), a = new Int32Array(Z >> 3);
        var g, m;
        for (g = 0; g < Z; g++) m = (g << ht + 8) / Z, e[g] = new Float64Array([m, m, m, 0]), o[g] = Jt / Z, n[g] = 0
    }

    function l() {
        for (var g = 0; g < Z; g++) e[g][0] >>= ht, e[g][1] >>= ht, e[g][2] >>= ht, e[g][3] = g
    }

    function c(g, m, P, d, x) {
        e[m][0] -= g * (e[m][0] - P) / kt, e[m][1] -= g * (e[m][1] - d) / kt, e[m][2] -= g * (e[m][2] - x) / kt
    }

    function f(g, m, P, d, x) {
        for (var p = Math.abs(m - g), w = Math.min(m + g, Z), k = m + 1, E = m - 1, M = 1, u, y; k < w || E > p;) y = a[M++], k < w && (u = e[k++], u[0] -= y * (u[0] - P) / vt, u[1] -= y * (u[1] - d) / vt, u[2] -= y * (u[2] - x) / vt), E > p && (u = e[E--], u[0] -= y * (u[0] - P) / vt, u[1] -= y * (u[1] - d) / vt, u[2] -= y * (u[2] - x) / vt)
    }

    function h(g, m, P) {
        var d = 2147483647,
            x = d,
            p = -1,
            w = p,
            k, E, M, u, y;
        for (k = 0; k < Z; k++) E = e[k], M = Math.abs(E[0] - g) + Math.abs(E[1] - m) + Math.abs(E[2] - P), M < d && (d = M, p = k), u = M - (n[k] >> we - ht), u < x && (x = u, w = k), y = o[k] >> Wt, o[k] -= y, n[k] += y << ye;
        return o[p] += Tr, n[p] -= Er, w
    }

    function C() {
        var g, m, P, d, x, p, w = 0,
            k = 0;
        for (g = 0; g < Z; g++) {
            for (P = e[g], x = g, p = P[1], m = g + 1; m < Z; m++) d = e[m], d[1] < p && (x = m, p = d[1]);
            if (d = e[x], g != x && (m = d[0], d[0] = P[0], P[0] = m, m = d[1], d[1] = P[1], P[1] = m, m = d[2], d[2] = P[2], P[2] = m, m = d[3], d[3] = P[3], P[3] = m), p != w) {
                for (r[w] = k + g >> 1, m = w + 1; m < p; m++) r[m] = g;
                w = p, k = g
            }
        }
        for (r[w] = k + oe >> 1, m = w + 1; m < 256; m++) r[m] = oe
    }

    function A(g, m, P) {
        for (var d, x, p, w = 1e3, k = -1, E = r[m], M = E - 1; E < Z || M >= 0;) E < Z && (x = e[E], p = x[1] - m, p >= w ? E = Z : (E++, p < 0 && (p = -p), d = x[0] - g, d < 0 && (d = -d), p += d, p < w && (d = x[2] - P, d < 0 && (d = -d), p += d, p < w && (w = p, k = x[3])))), M >= 0 && (x = e[M], p = m - x[1], p >= w ? M = -1 : (M--, p < 0 && (p = -p), d = x[0] - g, d < 0 && (d = -d), p += d, p < w && (d = x[2] - P, d < 0 && (d = -d), p += d, p < w && (w = p, k = x[3]))));
        return k
    }

    function D() {
        var g, m = i.length,
            P = 30 + (t - 1) / 3,
            d = m / (3 * t),
            x = ~~(d / Br),
            p = kt,
            w = Lr,
            k = w >> Xt;
        for (k <= 1 && (k = 0), g = 0; g < k; g++) a[g] = p * ((k * k - g * g) * ie / (k * k));
        var E;
        m < Fr ? (t = 1, E = 3) : m % ae !== 0 ? E = 3 * ae : m % se !== 0 ? E = 3 * se : m % le !== 0 ? E = 3 * le : E = 3 * Ae;
        var M, u, y, v, S = 0;
        for (g = 0; g < d;)
            if (M = (i[S] & 255) << ht, u = (i[S + 1] & 255) << ht, y = (i[S + 2] & 255) << ht, v = h(M, u, y), c(p, v, M, u, y), k !== 0 && f(k, v, M, u, y), S += E, S >= m && (S -= m), g++, x === 0 && (x = 1), g % x === 0)
                for (p -= p / P, w -= w / Mr, k = w >> Xt, k <= 1 && (k = 0), v = 0; v < k; v++) a[v] = p * ((k * k - v * v) * ie / (k * k))
    }

    function T() {
        s(), D(), l(), C()
    }
    this.buildColormap = T;

    function O() {
        for (var g = [], m = [], P = 0; P < Z; P++) m[e[P][3]] = P;
        for (var d = 0, x = 0; x < Z; x++) {
            var p = m[x];
            g[d++] = e[p][0], g[d++] = e[p][1], g[d++] = e[p][2]
        }
        return g
    }
    this.getColormap = O, this.lookupRGB = A
}
var ce = -1,
    Dt = 12,
    Ct = 5003,
    Or = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];

function $r(i, t, e, r) {
    var n = Math.max(2, r),
        o = new Uint8Array(256),
        a = new Int32Array(Ct),
        s = new Int32Array(Ct),
        l, c = 0,
        f, h = 0,
        C, A = !1,
        D, T, O, g, m, P;

    function d(v, S) {
        o[f++] = v, f >= 254 && E(S)
    }

    function x(v) {
        p(Ct), h = T + 2, A = !0, y(T, v)
    }

    function p(v) {
        for (var S = 0; S < v; ++S) a[S] = -1
    }

    function w(v, S) {
        var b, ot, $, W, rt, z, j;
        for (D = v, A = !1, P = D, C = M(P), T = 1 << v - 1, O = T + 1, h = T + 2, f = 0, W = u(), j = 0, b = Ct; b < 65536; b *= 2) ++j;
        j = 8 - j, z = Ct, p(z), y(T, S);
        t: for (;
            (ot = u()) != ce;) {
            if (b = (ot << Dt) + W, $ = ot << j ^ W, a[$] === b) {
                W = s[$];
                continue
            } else if (a[$] >= 0) {
                rt = z - $, $ === 0 && (rt = 1);
                do
                    if (($ -= rt) < 0 && ($ += z), a[$] === b) {
                        W = s[$];
                        continue t
                    } while (a[$] >= 0)
            }
            y(W, S), W = ot, h < 1 << Dt ? (s[$] = h++, a[$] = b) : x(S)
        }
        y(W, S), y(O, S)
    }

    function k(v) {
        v.writeByte(n), g = i * t, m = 0, w(n + 1, v), v.writeByte(0)
    }

    function E(v) {
        f > 0 && (v.writeByte(f), v.writeBytes(o, 0, f), f = 0)
    }

    function M(v) {
        return (1 << v) - 1
    }

    function u() {
        if (g === 0) return ce;
        --g;
        var v = e[m++];
        return v & 255
    }

    function y(v, S) {
        for (l &= Or[c], c > 0 ? l |= v << c : l = v, c += P; c >= 8;) d(l & 255, S), l >>= 8, c -= 8;
        if ((h > C || A) && (A ? (C = M(P = D), A = !1) : (++P, P == Dt ? C = 1 << Dt : C = M(P))), v == O) {
            for (; c > 0;) d(l & 255, S), l >>= 8, c -= 8;
            E(S)
        }
    }
    this.encode = k
}

function q() {
    this.page = -1, this.pages = [], this.newPage()
}
q.pageSize = 4096;
q.charMap = {};
for (var _t = 0; _t < 256; _t++) q.charMap[_t] = String.fromCharCode(_t);
q.prototype.newPage = function () {
    this.pages[++this.page] = new Uint8Array(q.pageSize), this.cursor = 0
};
q.prototype.getData = function () {
    for (var i = "", t = 0; t < this.pages.length; t++)
        for (var e = 0; e < q.pageSize; e++) i += q.charMap[this.pages[t][e]];
    return i
};
q.prototype.toFlattenUint8Array = function () {
    const i = [];
    for (var t = 0; t < this.pages.length; t++)
        if (t === this.pages.length - 1) {
            const r = Uint8Array.from(this.pages[t].slice(0, this.cursor));
            i.push(r)
        } else i.push(this.pages[t]);
    const e = new Uint8Array(i.reduce((r, n) => r + n.length, 0));
    return i.reduce((r, n) => (e.set(n, r), r + n.length), 0), e
};
q.prototype.writeByte = function (i) {
    this.cursor >= q.pageSize && this.newPage(), this.pages[this.page][this.cursor++] = i
};
q.prototype.writeUTFBytes = function (i) {
    for (var t = i.length, e = 0; e < t; e++) this.writeByte(i.charCodeAt(e))
};
q.prototype.writeBytes = function (i, t, e) {
    for (var r = e || i.length, n = t || 0; n < r; n++) this.writeByte(i[n])
};

function R(i, t) {
    this.width = ~~i, this.height = ~~t, this.transparent = null, this.transIndex = 0, this.repeat = -1, this.delay = 0, this.image = null, this.pixels = null, this.indexedPixels = null, this.colorDepth = null, this.colorTab = null, this.neuQuant = null, this.usedEntry = new Array, this.palSize = 7, this.dispose = -1, this.firstFrame = !0, this.sample = 10, this.dither = !1, this.globalPalette = !1, this.out = new q
}
R.prototype.setDelay = function (i) {
    this.delay = Math.round(i / 10)
};
R.prototype.setFrameRate = function (i) {
    this.delay = Math.round(100 / i)
};
R.prototype.setDispose = function (i) {
    i >= 0 && (this.dispose = i)
};
R.prototype.setRepeat = function (i) {
    this.repeat = i
};
R.prototype.setTransparent = function (i) {
    this.transparent = i
};
R.prototype.addFrame = function (i) {
    this.image = i, this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null, this.getImagePixels(), this.analyzePixels(), this.globalPalette === !0 && (this.globalPalette = this.colorTab), this.firstFrame && (this.writeHeader(), this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()), this.writeGraphicCtrlExt(), this.writeImageDesc(), !this.firstFrame && !this.globalPalette && this.writePalette(), this.writePixels(), this.firstFrame = !1
};
R.prototype.finish = function () {
    this.out.writeByte(59)
};
R.prototype.setQuality = function (i) {
    i < 1 && (i = 1), this.sample = i
};
R.prototype.setDither = function (i) {
    i === !0 && (i = "FloydSteinberg"), this.dither = i
};
R.prototype.setGlobalPalette = function (i) {
    this.globalPalette = i
};
R.prototype.getGlobalPalette = function () {
    return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette
};
R.prototype.writeHeader = function () {
    this.out.writeUTFBytes("GIF89a")
};
R.prototype.analyzePixels = function () {
    this.colorTab || (this.neuQuant = new Rr(this.pixels, this.sample), this.neuQuant.buildColormap(), this.colorTab = this.neuQuant.getColormap()), this.dither ? this.ditherPixels(this.dither.replace("-serpentine", ""), this.dither.match(/-serpentine/) !== null) : this.indexPixels(), this.pixels = null, this.colorDepth = 8, this.palSize = 7, this.transparent !== null && (this.transIndex = this.findClosest(this.transparent, !0))
};
R.prototype.indexPixels = function (i) {
    var t = this.pixels.length / 3;
    this.indexedPixels = new Uint8Array(t);
    for (var e = 0, r = 0; r < t; r++) {
        var n = this.findClosestRGB(this.pixels[e++] & 255, this.pixels[e++] & 255, this.pixels[e++] & 255);
        this.usedEntry[n] = !0, this.indexedPixels[r] = n
    }
};
R.prototype.ditherPixels = function (i, t) {
    var e = {
        FalseFloydSteinberg: [
            [.375, 1, 0],
            [.375, 0, 1],
            [.25, 1, 1]
        ],
        FloydSteinberg: [
            [.4375, 1, 0],
            [.1875, -1, 1],
            [.3125, 0, 1],
            [.0625, 1, 1]
        ],
        Stucki: [
            [.19047619047619047, 1, 0],
            [.09523809523809523, 2, 0],
            [.047619047619047616, -2, 1],
            [.09523809523809523, -1, 1],
            [.19047619047619047, 0, 1],
            [.09523809523809523, 1, 1],
            [.047619047619047616, 2, 1],
            [.023809523809523808, -2, 2],
            [.047619047619047616, -1, 2],
            [.09523809523809523, 0, 2],
            [.047619047619047616, 1, 2],
            [.023809523809523808, 2, 2]
        ],
        Atkinson: [
            [.125, 1, 0],
            [.125, 2, 0],
            [.125, -1, 1],
            [.125, 0, 1],
            [.125, 1, 1],
            [.125, 0, 2]
        ]
    };
    if (!i || !e[i]) throw "Unknown dithering kernel: " + i;
    var r = e[i],
        n = 0,
        o = this.height,
        a = this.width,
        s = this.pixels,
        l = t ? -1 : 1;
    this.indexedPixels = new Uint8Array(this.pixels.length / 3);
    for (var c = 0; c < o; c++) {
        t && (l = l * -1);
        for (var f = l == 1 ? 0 : a - 1, h = l == 1 ? a : 0; f !== h; f += l) {
            n = c * a + f;
            var C = n * 3,
                A = s[C],
                D = s[C + 1],
                T = s[C + 2];
            C = this.findClosestRGB(A, D, T), this.usedEntry[C] = !0, this.indexedPixels[n] = C, C *= 3;
            for (var O = this.colorTab[C], g = this.colorTab[C + 1], m = this.colorTab[C + 2], P = A - O, d = D - g, x = T - m, p = l == 1 ? 0 : r.length - 1, w = l == 1 ? r.length : 0; p !== w; p += l) {
                var k = r[p][1],
                    E = r[p][2];
                if (k + f >= 0 && k + f < a && E + c >= 0 && E + c < o) {
                    var M = r[p][0];
                    C = n + k + E * a, C *= 3, s[C] = Math.max(0, Math.min(255, s[C] + P * M)), s[C + 1] = Math.max(0, Math.min(255, s[C + 1] + d * M)), s[C + 2] = Math.max(0, Math.min(255, s[C + 2] + x * M))
                }
            }
        }
    }
};
R.prototype.findClosest = function (i, t) {
    return this.findClosestRGB((i & 16711680) >> 16, (i & 65280) >> 8, i & 255, t)
};
R.prototype.findClosestRGB = function (i, t, e, r) {
    if (this.colorTab === null) return -1;
    if (this.neuQuant && !r) return this.neuQuant.lookupRGB(i, t, e);
    for (var n = 0, o = 256 * 256 * 256, a = this.colorTab.length, s = 0, l = 0; s < a; l++) {
        var c = i - (this.colorTab[s++] & 255),
            f = t - (this.colorTab[s++] & 255),
            h = e - (this.colorTab[s++] & 255),
            C = c * c + f * f + h * h;
        (!r || this.usedEntry[l]) && C < o && (o = C, n = l)
    }
    return n
};
R.prototype.getImagePixels = function () {
    var i = this.width,
        t = this.height;
    this.pixels = new Uint8Array(i * t * 3);
    for (var e = this.image, r = 0, n = 0, o = 0; o < t; o++)
        for (var a = 0; a < i; a++) this.pixels[n++] = e[r++], this.pixels[n++] = e[r++], this.pixels[n++] = e[r++], r++
};
R.prototype.writeGraphicCtrlExt = function () {
    this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4);
    var i, t;
    this.transparent === null ? (i = 0, t = 0) : (i = 1, t = 2), this.dispose >= 0 && (t = this.dispose & 7), t <<= 2, this.out.writeByte(0 | t | 0 | i), this.writeShort(this.delay), this.out.writeByte(this.transIndex), this.out.writeByte(0)
};
R.prototype.writeImageDesc = function () {
    this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), this.writeShort(this.height), this.firstFrame || this.globalPalette ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize)
};
R.prototype.writeLSD = function () {
    this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSize), this.out.writeByte(0), this.out.writeByte(0)
};
R.prototype.writeNetscapeExt = function () {
    this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0)
};
R.prototype.writePalette = function () {
    this.out.writeBytes(this.colorTab);
    for (var i = 3 * 256 - this.colorTab.length, t = 0; t < i; t++) this.out.writeByte(0)
};
R.prototype.writeShort = function (i) {
    this.out.writeByte(i & 255), this.out.writeByte(i >> 8 & 255)
};
R.prototype.writePixels = function () {
    var i = new $r(this.width, this.height, this.indexedPixels, this.colorDepth);
    i.encode(this.out)
};
R.prototype.stream = function () {
    return this.out
};
var zr = function (i, t, e, r) {
    function n(o) {
        return o instanceof e ? o : new e(function (a) {
            a(o)
        })
    }
    return new(e || (e = Promise))(function (o, a) {
        function s(f) {
            try {
                c(r.next(f))
            } catch (h) {
                a(h)
            }
        }

        function l(f) {
            try {
                c(r.throw(f))
            } catch (h) {
                a(h)
            }
        }

        function c(f) {
            f.done ? o(f.value) : n(f.value).then(s, l)
        }
        c((r = r.apply(i, t || [])).next())
    })
};
const {
    Canvas: lt
} = lr, Bt = .4;

function ue(i) {
    if (!i) return;

    function t(e) {
        e.onload = null, e.onerror = null
    }
    return new Promise(function (e, r) {
        if (i.slice(0, 4) == "data") {
            let o = new Image;
            o.onload = function () {
                e(o), t(o)
            }, o.onerror = function () {
                r("Image load error"), t(o)
            }, o.src = i;
            return
        }
        let n = new Image;
        n.setAttribute("crossOrigin", "Anonymous"), n.onload = function () {
            e(n)
        }, n.onerror = function () {
            r("Image load error")
        }, n.src = i
    })
}
class N {
    constructor(t) {
        const e = Object.assign({}, t);
        if (Object.keys(N.defaultOptions).forEach(r => {
                r in e || Object.defineProperty(e, r, {
                    value: N.defaultOptions[r],
                    enumerable: !0,
                    writable: !0
                })
            }), e.components ? typeof e.components == "object" && Object.keys(N.defaultComponentOptions).forEach(r => {
                r in e.components ? Object.defineProperty(e.components, r, {
                    value: Object.assign(Object.assign({}, N.defaultComponentOptions[r]), e.components[r]),
                    enumerable: !0,
                    writable: !0
                }) : Object.defineProperty(e.components, r, {
                    value: N.defaultComponentOptions[r],
                    enumerable: !0,
                    writable: !0
                })
            }) : e.components = N.defaultComponentOptions, e.dotScale !== null && e.dotScale !== void 0) {
            if (e.dotScale <= 0 || e.dotScale > 1) throw new Error("dotScale should be in range (0, 1].");
            e.components.data.scale = e.dotScale, e.components.timing.scale = e.dotScale, e.components.alignment.scale = e.dotScale
        }
        this.options = e, this.canvas = new lt(t.size, t.size), this.canvasContext = this.canvas.getContext("2d"), this.qrCode = new dt(-1, this.options.correctLevel), Number.isInteger(this.options.maskPattern) && (this.qrCode.maskPattern = this.options.maskPattern), Number.isInteger(this.options.version) && (this.qrCode.typeNumber = this.options.version), this.qrCode.addData(this.options.text), this.qrCode.make()
    }
    draw() {
        return new Promise(t => this._draw().then(t))
    }
    _clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    static _prepareRoundedCornerClip(t, e, r, n, o, a) {
        t.beginPath(), t.moveTo(e, r), t.arcTo(e + n, r, e + n, r + o, a), t.arcTo(e + n, r + o, e, r + o, a), t.arcTo(e, r + o, e, r, a), t.arcTo(e, r, e + n, r, a), t.closePath()
    }
    static _getAverageRGB(t) {
        const r = {
            r: 0,
            g: 0,
            b: 0
        };
        let n, o, a = -4;
        const s = {
            r: 0,
            g: 0,
            b: 0
        };
        let l = 0;
        o = t.naturalHeight || t.height, n = t.naturalWidth || t.width;
        const f = new lt(n, o).getContext("2d");
        if (!f) return r;
        f.drawImage(t, 0, 0);
        let h;
        try {
            h = f.getImageData(0, 0, n, o)
        } catch {
            return r
        }
        for (;
            (a += 5 * 4) < h.data.length;) h.data[a] > 200 || h.data[a + 1] > 200 || h.data[a + 2] > 200 || (++l, s.r += h.data[a], s.g += h.data[a + 1], s.b += h.data[a + 2]);
        return s.r = ~~(s.r / l), s.g = ~~(s.g / l), s.b = ~~(s.b / l), s
    }
    static _drawDot(t, e, r, n, o = 0, a = 1) {
        t.fillRect((e + o) * n, (r + o) * n, a * n, a * n)
    }
    static _drawAlignProtector(t, e, r, n) {
        t.clearRect((e - 2) * n, (r - 2) * n, 5 * n, 5 * n), t.fillRect((e - 2) * n, (r - 2) * n, 5 * n, 5 * n)
    }
    static _drawAlign(t, e, r, n, o = 0, a = 1, s, l) {
        const c = t.fillStyle;
        t.fillStyle = s, new Array(4).fill(0).map((f, h) => {
            N._drawDot(t, e - 2 + h, r - 2, n, o, a), N._drawDot(t, e + 2, r - 2 + h, n, o, a), N._drawDot(t, e + 2 - h, r + 2, n, o, a), N._drawDot(t, e - 2, r + 2 - h, n, o, a)
        }), N._drawDot(t, e, r, n, o, a), l || (t.fillStyle = "rgba(255, 255, 255, 0.6)", new Array(2).fill(0).map((f, h) => {
            N._drawDot(t, e - 1 + h, r - 1, n, o, a), N._drawDot(t, e + 1, r - 1 + h, n, o, a), N._drawDot(t, e + 1 - h, r + 1, n, o, a), N._drawDot(t, e - 1, r + 1 - h, n, o, a)
        })), t.fillStyle = c
    }
    _draw() {
        var t, e, r, n, o, a, s, l, c, f, h, C, A, D, T, O, g, m, P;
        return zr(this, void 0, void 0, function* () {
            const d = (t = this.qrCode) === null || t === void 0 ? void 0 : t.moduleCount,
                x = this.options.size;
            let p = this.options.margin;
            (p < 0 || p * 2 >= x) && (p = 0);
            const w = Math.ceil(p),
                k = x - 2 * p,
                E = this.options.whiteMargin,
                M = this.options.backgroundDimming,
                u = Math.ceil(k / d),
                y = u * d,
                v = y + 2 * w,
                S = new lt(v, v),
                b = S.getContext("2d");
            this._clear(), b.save(), b.translate(w, w);
            const ot = new lt(v, v),
                $ = ot.getContext("2d");
            let W = null,
                rt = [];
            if (this.options.gifBackground) {
                const _ = yr(this.options.gifBackground);
                if (W = _, rt = Ar(_, !0), this.options.autoColor) {
                    let B = 0,
                        I = 0,
                        L = 0,
                        X = 0;
                    for (let G = 0; G < rt[0].colorTable.length; G++) {
                        const U = rt[0].colorTable[G];
                        U[0] > 200 || U[1] > 200 || U[2] > 200 || U[0] === 0 && U[1] === 0 && U[2] === 0 || (X++, B += U[0], I += U[1], L += U[2])
                    }
                    B = ~~(B / X), I = ~~(I / X), L = ~~(L / X), this.options.colorDark = `rgb(${B},${I},${L})`
                }
            } else if (this.options.backgroundImage) {
                const _ = yield ue(this.options.backgroundImage);
                if (this.options.autoColor) {
                    const B = N._getAverageRGB(_);
                    this.options.colorDark = `rgb(${B.r},${B.g},${B.b})`
                }
                $.drawImage(_, 0, 0, _.width, _.height, 0, 0, v, v), $.rect(0, 0, v, v), $.fillStyle = M, $.fill()
            } else $.rect(0, 0, v, v), $.fillStyle = this.options.colorLight, $.fill();
            const z = F.getPatternPosition(this.qrCode.typeNumber),
                j = ((r = (e = this.options.components) === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.scale) || Bt,
                Lt = (1 - j) * .5;
            for (let _ = 0; _ < d; _++)
                for (let B = 0; B < d; B++) {
                    const I = this.qrCode.isDark(_, B),
                        L = B < 8 && (_ < 8 || _ >= d - 8) || B >= d - 8 && _ < 8,
                        X = _ == 6 && B >= 8 && B <= d - 8 || B == 6 && _ >= 8 && _ <= d - 8;
                    let G = L || X;
                    for (let V = 1; V < z.length - 1; V++) G = G || _ >= z[V] - 2 && _ <= z[V] + 2 && B >= z[V] - 2 && B <= z[V] + 2;
                    const U = B * u + (G ? 0 : Lt * u),
                        nt = _ * u + (G ? 0 : Lt * u);
                    if (b.strokeStyle = I ? this.options.colorDark : this.options.colorLight, b.lineWidth = .5, b.fillStyle = I ? this.options.colorDark : this.options.colorLight, z.length === 0) G || b.fillRect(U, nt, (G ? 1 : j) * u, (G ? 1 : j) * u);
                    else {
                        const V = B < d - 4 && B >= d - 4 - 5 && _ < d - 4 && _ >= d - 4 - 5;
                        !G && !V && b.fillRect(U, nt, (G ? 1 : j) * u, (G ? 1 : j) * u)
                    }
                }
            const Q = z[z.length - 1],
                Pe = this.options.colorLight;
            if (b.fillStyle = Pe, b.fillRect(0, 0, 8 * u, 8 * u), b.fillRect(0, (d - 8) * u, 8 * u, 8 * u), b.fillRect((d - 8) * u, 0, 8 * u, 8 * u), !((o = (n = this.options.components) === null || n === void 0 ? void 0 : n.timing) === null || o === void 0) && o.protectors && (b.fillRect(8 * u, 6 * u, (d - 8 - 8) * u, u), b.fillRect(6 * u, 8 * u, u, (d - 8 - 8) * u)), !((s = (a = this.options.components) === null || a === void 0 ? void 0 : a.cornerAlignment) === null || s === void 0) && s.protectors && N._drawAlignProtector(b, Q, Q, u), !((c = (l = this.options.components) === null || l === void 0 ? void 0 : l.alignment) === null || c === void 0) && c.protectors)
                for (let _ = 0; _ < z.length; _++)
                    for (let B = 0; B < z.length; B++) {
                        const I = z[B],
                            L = z[_];
                        if (!(I === 6 && (L === 6 || L === Q))) {
                            if (L === 6 && (I === 6 || I === Q)) continue;
                            if (I === Q && L === Q) continue;
                            N._drawAlignProtector(b, I, L, u)
                        }
                    }
            b.fillStyle = this.options.colorDark, b.fillRect(0, 0, 7 * u, u), b.fillRect((d - 7) * u, 0, 7 * u, u), b.fillRect(0, 6 * u, 7 * u, u), b.fillRect((d - 7) * u, 6 * u, 7 * u, u), b.fillRect(0, (d - 7) * u, 7 * u, u), b.fillRect(0, (d - 7 + 6) * u, 7 * u, u), b.fillRect(0, 0, u, 7 * u), b.fillRect(6 * u, 0, u, 7 * u), b.fillRect((d - 7) * u, 0, u, 7 * u), b.fillRect((d - 7 + 6) * u, 0, u, 7 * u), b.fillRect(0, (d - 7) * u, u, 7 * u), b.fillRect(6 * u, (d - 7) * u, u, 7 * u), b.fillRect(2 * u, 2 * u, 3 * u, 3 * u), b.fillRect((d - 7 + 2) * u, 2 * u, 3 * u, 3 * u), b.fillRect(2 * u, (d - 7 + 2) * u, 3 * u, 3 * u);
            const Mt = ((h = (f = this.options.components) === null || f === void 0 ? void 0 : f.timing) === null || h === void 0 ? void 0 : h.scale) || Bt,
                qt = (1 - Mt) * .5;
            for (let _ = 0; _ < d - 8; _ += 2) N._drawDot(b, 8 + _, 6, u, qt, Mt), N._drawDot(b, 6, 8 + _, u, qt, Mt);
            const Yt = ((A = (C = this.options.components) === null || C === void 0 ? void 0 : C.cornerAlignment) === null || A === void 0 ? void 0 : A.scale) || Bt,
                ke = (1 - Yt) * .5;
            N._drawAlign(b, Q, Q, u, ke, Yt, this.options.colorDark, ((T = (D = this.options.components) === null || D === void 0 ? void 0 : D.cornerAlignment) === null || T === void 0 ? void 0 : T.protectors) || !1);
            const Qt = ((g = (O = this.options.components) === null || O === void 0 ? void 0 : O.alignment) === null || g === void 0 ? void 0 : g.scale) || Bt,
                De = (1 - Qt) * .5;
            for (let _ = 0; _ < z.length; _++)
                for (let B = 0; B < z.length; B++) {
                    const I = z[B],
                        L = z[_];
                    if (!(I === 6 && (L === 6 || L === Q))) {
                        if (L === 6 && (I === 6 || I === Q)) continue;
                        if (I === Q && L === Q) continue;
                        N._drawAlign(b, I, L, u, De, Qt, this.options.colorDark, ((P = (m = this.options.components) === null || m === void 0 ? void 0 : m.alignment) === null || P === void 0 ? void 0 : P.protectors) || !1)
                    }
                }
            if (E && (b.fillStyle = this.options.backgroundColor, b.fillRect(-w, -w, v, w), b.fillRect(-w, y, v, w), b.fillRect(y, -w, w, v), b.fillRect(-w, -w, w, v)), this.options.logoImage) {
                const _ = yield ue(this.options.logoImage);
                let B = this.options.logoScale,
                    I = this.options.logoMargin,
                    L = this.options.logoCornerRadius;
                (B <= 0 || B >= 1) && (B = .2), I < 0 && (I = 0), L < 0 && (L = 0);
                const X = y * B,
                    G = .5 * (v - X),
                    U = G;
                b.restore(), b.fillStyle = this.options.logoBackgroundColor, b.save(), N._prepareRoundedCornerClip(b, G - I, U - I, X + 2 * I, X + 2 * I, L + I), b.clip();
                const nt = b.globalCompositeOperation;
                b.globalCompositeOperation = "destination-out", b.fill(), b.globalCompositeOperation = nt, b.restore(), b.save(), N._prepareRoundedCornerClip(b, G, U, X, X, L), b.clip(), b.drawImage(_, G, U, X, X), b.restore(), b.save(), b.translate(w, w)
            }
            if (W) {
                let _, B, I, L, X, G;
                if (rt.forEach(function (U) {
                        _ || (_ = new R(x, x), _.setDelay(U.delay), _.setRepeat(0));
                        const {
                            width: nt,
                            height: V
                        } = U.dims;
                        B || (B = new lt(nt, V), I = B.getContext("2d"), I.rect(0, 0, B.width, B.height), I.fillStyle = "#ffffff", I.fill()), (!L || !G || nt !== L.width || V !== L.height) && (L = new lt(nt, V), X = L.getContext("2d"), G = X.createImageData(nt, V)), G.data.set(U.patch), X.putImageData(G, 0, 0), I.drawImage(L.getContext("2d").canvas, U.dims.left, U.dims.top);
                        const At = new lt(v, v),
                            yt = At.getContext("2d");
                        yt.drawImage(B.getContext("2d").canvas, 0, 0, v, v), yt.rect(0, 0, v, v), yt.fillStyle = M, yt.fill(), yt.drawImage(S.getContext("2d").canvas, 0, 0, v, v);
                        const Nt = new lt(x, x),
                            te = Nt.getContext("2d");
                        te.drawImage(At.getContext("2d").canvas, 0, 0, x, x), _.addFrame(te.getImageData(0, 0, Nt.width, Nt.height).data)
                    }), !_) throw new Error("No frames.");
                if (_.finish(), fe(this.canvas)) {
                    const nt = _.stream().toFlattenUint8Array().reduce((V, At) => V + String.fromCharCode(At), "");
                    return Promise.resolve(`data:image/gif;base64,${window.btoa(nt)}`)
                }
                return Promise.resolve(Buffer.from(_.stream().toFlattenUint8Array()))
            } else {
                $.drawImage(S.getContext("2d").canvas, 0, 0, v, v), b.drawImage(ot.getContext("2d").canvas, -w, -w, v, v);
                const _ = new lt(x, x);
                _.getContext("2d").drawImage(S.getContext("2d").canvas, 0, 0, x, x), this.canvas = _;
                const I = this.options.gifBackground ? "gif" : "png";
                return fe(this.canvas) ? Promise.resolve(this.canvas.toDataURL(I)) : Promise.resolve(this.canvas.toBuffer(I))
            }
        })
    }
}
N.CorrectLevel = J;
N.defaultComponentOptions = {
    data: {
        scale: .4
    },
    timing: {
        scale: .5,
        protectors: !1
    },
    alignment: {
        scale: .5,
        protectors: !1
    },
    cornerAlignment: {
        scale: .5,
        protectors: !0
    }
};
N.defaultOptions = {
    text: "",
    size: 400,
    margin: 20,
    colorDark: "#000000",
    colorLight: "rgba(255, 255, 255, 0.6)",
    correctLevel: J.M,
    backgroundImage: void 0,
    backgroundDimming: "rgba(0,0,0,0)",
    logoImage: void 0,
    logoScale: .2,
    logoMargin: 4,
    logoCornerRadius: 8,
    whiteMargin: !0,
    components: N.defaultComponentOptions,
    autoColor: !0,
    logoBackgroundColor: "#ffffff",
    backgroundColor: "#ffffff"
};

function fe(i) {
    try {
        return i instanceof HTMLElement
    } catch {
        return typeof i == "object" && i.nodeType === 1 && typeof i.style == "object" && typeof i.ownerDocument == "object"
    }
}
const Gr = {
        props: {
            text: {
                type: String,
                required: !0
            },
            qid: {
                type: String
            },
            correctLevel: {
                type: Number,
                default: 1
            },
            size: {
                type: Number,
                default: 200
            },
            margin: {
                type: Number,
                default: 20
            },
            colorDark: {
                type: String,
                default: "#000000"
            },
            colorLight: {
                type: String,
                default: "#FFFFFF"
            },
            bgSrc: {
                type: String,
                default: void 0
            },
            background: {
                type: String,
                default: "rgba(0,0,0,0)"
            },
            backgroundDimming: {
                type: String,
                default: "rgba(0,0,0,0)"
            },
            logoSrc: {
                type: String,
                default: void 0
            },
            logoBackgroundColor: {
                type: String,
                default: "rgba(255,255,255,1)"
            },
            gifBgSrc: {
                type: String,
                default: void 0
            },
            logoScale: {
                type: Number,
                default: .2
            },
            logoMargin: {
                type: Number,
                default: 0
            },
            logoCornerRadius: {
                type: Number,
                default: 8
            },
            whiteMargin: {
                type: [Boolean, String],
                default: !0
            },
            dotScale: {
                type: Number,
                default: 1
            },
            autoColor: {
                type: [Boolean, String],
                default: !0
            },
            binarize: {
                type: [Boolean, String],
                default: !1
            },
            binarizeThreshold: {
                type: Number,
                default: 128
            },
            callback: {
                type: Function,
                default: function () {}
            },
            bindElement: {
                type: Boolean,
                default: !0
            },
            backgroundColor: {
                type: String,
                default: "#FFFFFF"
            },
            components: {
                default: function () {
                    return {
                        data: {
                            scale: 1
                        },
                        timing: {
                            scale: 1,
                            protectors: !1
                        },
                        alignment: {
                            scale: 1,
                            protectors: !1
                        },
                        cornerAlignment: {
                            scale: 1,
                            protectors: !0
                        }
                    }
                }
            }
        },
        name: "vue-qr",
        data() {
            return {
                imgUrl: ""
            }
        },
        watch: {
            $props: {
                deep: !0,
                handler() {
                    this.main()
                }
            }
        },
        mounted() {
            this.main()
        },
        methods: {
            async main() {
                if (this.gifBgSrc) {
                    const e = await ze(this.gifBgSrc),
                        r = this.logoSrc;
                    this.render(void 0, r, e);
                    return
                }
                const i = this.bgSrc,
                    t = this.logoSrc;
                this.render(i, t)
            },
            async render(i, t, e) {
                const r = this;
                new N({
                    gifBackground: e,
                    text: r.text,
                    size: r.size,
                    margin: r.margin,
                    colorDark: r.colorDark,
                    colorLight: r.colorLight,
                    backgroundColor: r.backgroundColor,
                    backgroundImage: i,
                    backgroundDimming: r.backgroundDimming,
                    logoImage: t,
                    logoScale: r.logoScale,
                    logoBackgroundColor: r.logoBackgroundColor,
                    correctLevel: r.correctLevel,
                    logoMargin: r.logoMargin,
                    logoCornerRadius: r.logoCornerRadius,
                    whiteMargin: Ot(r.whiteMargin),
                    dotScale: r.dotScale,
                    autoColor: Ot(r.autoColor),
                    binarize: Ot(r.binarize),
                    binarizeThreshold: r.binarizeThreshold,
                    components: r.components
                }).draw().then(n => {
                    this.imgUrl = n, r.callback && r.callback(n, r.qid)
                })
            }
        }
    },
    jr = ["src"];

function Ur(i, t, e, r, n, o) {
    return e.bindElement ? (bt(), Ut("img", {
        key: 0,
        style: {
            display: "inline-block"
        },
        src: n.imgUrl
    }, null, 8, jr)) : Ht("", !0)
}
const Hr = he(Gr, [
        ["render", Ur]
    ]),
    Kr = i => (Ne("data-v-e4f9e96c"), i = i(), Fe(), i),
    Xr = {
        class: "container"
    },
    Zr = {
        class: "title_heand"
    },
    Vr = {
        class: "box-con"
    },
    Jr = {
        class: "title"
    },
    Wr = {
        class: "inp"
    },
    qr = {
        class: "box-con"
    },
    Yr = {
        class: "title"
    },
    Qr = {
        class: "chainName"
    },
    tn = ["onClick"],
    en = {
        class: "box-con"
    },
    rn = {
        class: "qr-con"
    },
    nn = {
        class: "address"
    },
    on = {
        class: "title"
    },
    an = {
        class: "inp-con"
    },
    sn = {
        class: "inp"
    },
    ln = {
        class: "tips-con"
    },
    cn = {
        class: "title"
    },
    un = Kr(() => K("img", {
        src: Oe
    }, null, -1)),
    fn = ["innerHTML"],
    hn = {
        __name: "index",
        setup(i) {
            const {
                _getWalletCoinList: t,
                _getRechargeAddress: e,
                _getArticleDetail: r
            } = $e, {
                proxy: n
            } = _e(), o = tt(null), a = tt(null), s = tt(!1), l = tt([]), c = {
                text: "coinName",
                value: "coinId"
            }, f = tt(!1), h = ee(() => {
                try {
                    return l.value.find(y => y.coinId === o.value)
                } catch {
                    return null
                }
            }), C = tt(""), A = (y, v) => {
                C.value = y
            }, D = tt([]);

            function T(y) {
                if (o.value === y) return;
                const v = l.value.find(S => S.coinId === y).multiChainData;
                v && v.length > 0 && (D.value = v, o.value = y, a.value = D.value[0].chainName, w())
            }
            const O = {
                    text: "tokenType",
                    value: "chainName"
                },
                g = y => {
                    y.chainName != a.value && (p.value = "", a.value = y.chainName, m.value = y.tokenType, w())
                },
                m = ee(() => {
                    try {
                        return D.value.find(y => y.chainName === a.value).tokenType
                    } catch {
                        return ""
                    }
                }),
                P = tt(!1);

            function d(y) {
                a.value !== y && (a.value = y, p.value = "", w())
            }
            async function x() {
                const y = await t({
                    type: 1
                });
                if (y.code === 0) {
                    let v = [];
                    y.data.forEach(b => {
                        b.multiChainData != "" && b.multiChainData[0].enableRecharge && v.push(b)
                    }), l.value = v;
                    let S = l.value.find(b => b.coinName === "USDT");
                    S || (S = l.value[0]), o.value = S.coinId, D.value = S.multiChainData, a.value = D.value[0].chainName, w()
                } else n.$toast(y.message)
            }
            tt(null);
            const p = tt("");
            tt(!1);
            async function w() {
                p.value = "", s.value = !1;
                const y = await e({
                    coinId: o.value,
                    chainName: a.value
                });
                y.code === 0 ? (s.value = !0, p.value = y.data.address) : n.$toast(y.message)
            }

            function k(y) {
                n.$common.copy(y)
            }
            const E = tt({});
            async function M() {
                const y = await r({
                    categoryType: "NOTES_ON_RECHARGING"
                });
                y.code === 0 && (E.value = y.data)
            }

            function u() {
                p.value = "", x(), M()
            }
            return (y, v) => {
                const S = Pt("ComImage"),
                    b = Pt("van-icon"),
                    ot = Pt("ComPicker"),
                    $ = Pt("PageScroll");
                return bt(), Ft($, {
                    type: "inside",
                    title: y.$t("title.doc16"),
                    onReady: u
                }, {
                    default: Be(() => {
                        var W, rt, z;
                        return [K("div", Xr, [K("div", Zr, ft(y.$t("title.doc16")), 1), K("div", Vr, [K("div", Jr, ft(y.$t("common.doc6")), 1), K("div", {
                            class: "inp-con",
                            onClick: v[0] || (v[0] = j => f.value = !0)
                        }, [K("div", Wr, [(W = h.value) != null && W.coinIcon ? (bt(), Ft(S, {
                            key: 0,
                            class: "img",
                            src: (rt = h.value) == null ? void 0 : rt.coinIcon
                        }, null, 8, ["src"])) : Ht("", !0), K("span", null, ft((z = h.value) == null ? void 0 : z.coinName), 1)]), Rt(b, {
                            name: "arrow",
                            color: "#000000"
                        })])]), K("div", qr, [K("div", Yr, ft(y.$t("wallet.doc9")), 1), K("div", Qr, [(bt(!0), Ut(Ee, null, Te(D.value, j => Ie((bt(), Ut("div", {
                            key: j.id,
                            class: Le({
                                act: m.value == j.tokenType
                            }),
                            onClick: Lt => g(j)
                        }, ft(j.tokenType), 11, tn)), [
                            [Me, j.enableRecharge]
                        ])), 128))])]), K("div", en, [K("div", rn, [s.value ? (bt(), Ft(Hr, {
                            key: 0,
                            text: p.value,
                            size: 200,
                            margin: 5,
                            callback: A
                        }, null, 8, ["text"])) : Ht("", !0)]), K("div", nn, [K("div", on, ft(y.$t("wallet.doc10")), 1), K("div", an, [K("div", sn, ft(p.value), 1), K("img", {
                            class: "copy-btn",
                            src: Re,
                            onClick: v[1] || (v[1] = j => k(p.value))
                        })])])]), K("div", ln, [K("div", cn, [un, Se(" " + ft(y.$t("common.doc17")), 1)]), K("div", {
                            class: "desc",
                            innerHTML: E.value.description
                        }, null, 8, fn)])]), Rt(ot, {
                            title: y.$t("common.doc6"),
                            customFieldName: c,
                            columns: l.value,
                            show: f.value,
                            "onUpdate:show": v[2] || (v[2] = j => f.value = j),
                            onConfirm: T
                        }, null, 8, ["title", "columns", "show"]), Rt(ot, {
                            title: y.$t("wallet.doc9"),
                            customFieldName: O,
                            columns: D.value,
                            show: P.value,
                            "onUpdate:show": v[3] || (v[3] = j => P.value = j),
                            onConfirm: d
                        }, null, 8, ["title", "columns", "show"])]
                    }),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Sn = he(hn, [
        ["__scopeId", "data-v-e4f9e96c"]
    ]);
export {
    Sn as
    default
};
