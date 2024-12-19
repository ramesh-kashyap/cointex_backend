import {
    d as gt,
    h as rn,
    g as xe,
    e as Vn,
    i as $n,
    o as Hn,
    a as Gn,
    s as ln,
    r as ke,
    c as se,
    b as Yn,
    w as rt,
    F as sn,
    f as xn,
    j as jn,
    T as Kn
} from "./vant-3s7b3naM.js";
/*!
 * shared v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const qe = typeof window < "u",
    ge = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    Xn = (e, t, n) => Bn({
        l: e,
        k: t,
        s: n
    }),
    Bn = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Y = e => typeof e == "number" && isFinite(e),
    Jn = e => on(e) === "[object Date]",
    Ee = e => on(e) === "[object RegExp]",
    ze = e => F(e) && Object.keys(e).length === 0,
    B = Object.assign;
let pt;
const fe = () => pt || (pt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function vt(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Qn = Object.prototype.hasOwnProperty;

function Ze(e, t) {
    return Qn.call(e, t)
}
const H = Array.isArray,
    $ = e => typeof e == "function",
    O = e => typeof e == "string",
    M = e => typeof e == "boolean",
    W = e => e !== null && typeof e == "object",
    qn = e => W(e) && $(e.then) && $(e.catch),
    cn = Object.prototype.toString,
    on = e => cn.call(e),
    F = e => {
        if (!W(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object
    },
    Zn = e => e == null ? "" : H(e) || F(e) && e.toString === cn ? JSON.stringify(e, null, 2) : String(e);

function zn(e, t = "") {
    return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}

function Lt(e) {
    let t = e;
    return () => ++t
}

function ea(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Je = e => !W(e) || H(e);

function Qe(e, t) {
    if (Je(e) || Je(t)) throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length;) {
        const {
            src: r,
            des: s
        } = n.pop();
        Object.keys(r).forEach(a => {
            Je(r[a]) || Je(s[a]) ? s[a] = r[a] : n.push({
                src: r[a],
                des: s[a]
            })
        })
    }
}
/*!
 * message-compiler v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function ta(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}

function lt(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n), r
}
const na = /\{([0-9a-zA-Z]+)\}/g;

function aa(e, ...t) {
    return t.length === 1 && ra(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(na, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}
const un = Object.assign,
    Ct = e => typeof e == "string",
    ra = e => e !== null && typeof e == "object";

function fn(e, t = "") {
    return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}
const S = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        UNHANDLED_CODEGEN_NODE_TYPE: 15,
        UNHANDLED_MINIFIER_NODE_TYPE: 16,
        __EXTEND_POINT__: 17
    },
    la = {
        [S.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [S.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [S.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [S.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [S.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [S.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [S.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [S.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [S.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [S.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [S.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [S.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [S.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [S.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
        [S.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
        [S.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
    };

function Me(e, t, n = {}) {
    const {
        domain: r,
        messages: s,
        args: a
    } = n, c = aa((s || la)[e] || "", ...a || []), i = new SyntaxError(String(c));
    return i.code = e, t && (i.location = t), i.domain = r, i
}

function sa(e) {
    throw e
}
const ie = " ",
    ca = "\r",
    Q = `
`,
    oa = "\u2028",
    ia = "\u2029";

function ua(e) {
    const t = e;
    let n = 0,
        r = 1,
        s = 1,
        a = 0;
    const c = R => t[R] === ca && t[R + 1] === Q,
        i = R => t[R] === Q,
        u = R => t[R] === ia,
        m = R => t[R] === oa,
        b = R => c(R) || i(R) || u(R) || m(R),
        N = () => n,
        g = () => r,
        h = () => s,
        k = () => a,
        y = R => c(R) || u(R) || m(R) ? Q : t[R],
        P = () => y(n),
        f = () => y(n + a);

    function L() {
        return a = 0, b(n) && (r++, s = 0), c(n) && n++, n++, s++, t[n]
    }

    function I() {
        return c(n + a) && a++, a++, t[n + a]
    }

    function E() {
        n = 0, r = 1, s = 1, a = 0
    }

    function p(R = 0) {
        a = R
    }

    function v() {
        const R = n + a;
        for (; R !== n;) L();
        a = 0
    }
    return {
        index: N,
        line: g,
        column: h,
        peekOffset: k,
        charAt: y,
        currentChar: P,
        currentPeek: f,
        next: L,
        peek: I,
        reset: E,
        resetPeek: p,
        skipToPeek: v
    }
}
const de = void 0,
    fa = ".",
    At = "'",
    _a = "tokenizer";

function ma(e, t = {}) {
    const n = t.location !== !1,
        r = ua(e),
        s = () => r.index(),
        a = () => ta(r.line(), r.column(), r.index()),
        c = a(),
        i = s(),
        u = {
            currentType: 14,
            offset: i,
            startLoc: c,
            endLoc: c,
            lastType: 14,
            lastOffset: i,
            lastStartLoc: c,
            lastEndLoc: c,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        m = () => u,
        {
            onError: b
        } = t;

    function N(o, l, _, ...C) {
        const D = m();
        if (l.column += _, l.offset += _, b) {
            const U = n ? lt(D.startLoc, l) : null,
                re = Me(o, U, {
                    domain: _a,
                    args: C
                });
            b(re)
        }
    }

    function g(o, l, _) {
        o.endLoc = a(), o.currentType = l;
        const C = {
            type: l
        };
        return n && (C.loc = lt(o.startLoc, o.endLoc)), _ != null && (C.value = _), C
    }
    const h = o => g(o, 14);

    function k(o, l) {
        return o.currentChar() === l ? (o.next(), l) : (N(S.EXPECTED_TOKEN, a(), 0, l), "")
    }

    function y(o) {
        let l = "";
        for (; o.currentPeek() === ie || o.currentPeek() === Q;) l += o.currentPeek(), o.peek();
        return l
    }

    function P(o) {
        const l = y(o);
        return o.skipToPeek(), l
    }

    function f(o) {
        if (o === de) return !1;
        const l = o.charCodeAt(0);
        return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l === 95
    }

    function L(o) {
        if (o === de) return !1;
        const l = o.charCodeAt(0);
        return l >= 48 && l <= 57
    }

    function I(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 2) return !1;
        y(o);
        const C = f(o.currentPeek());
        return o.resetPeek(), C
    }

    function E(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 2) return !1;
        y(o);
        const C = o.currentPeek() === "-" ? o.peek() : o.currentPeek(),
            D = L(C);
        return o.resetPeek(), D
    }

    function p(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 2) return !1;
        y(o);
        const C = o.currentPeek() === At;
        return o.resetPeek(), C
    }

    function v(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 8) return !1;
        y(o);
        const C = o.currentPeek() === ".";
        return o.resetPeek(), C
    }

    function R(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 9) return !1;
        y(o);
        const C = f(o.currentPeek());
        return o.resetPeek(), C
    }

    function w(o, l) {
        const {
            currentType: _
        } = l;
        if (!(_ === 8 || _ === 12)) return !1;
        y(o);
        const C = o.currentPeek() === ":";
        return o.resetPeek(), C
    }

    function A(o, l) {
        const {
            currentType: _
        } = l;
        if (_ !== 10) return !1;
        const C = () => {
                const U = o.currentPeek();
                return U === "{" ? f(o.peek()) : U === "@" || U === "%" || U === "|" || U === ":" || U === "." || U === ie || !U ? !1 : U === Q ? (o.peek(), C()) : f(U)
            },
            D = C();
        return o.resetPeek(), D
    }

    function J(o) {
        y(o);
        const l = o.currentPeek() === "|";
        return o.resetPeek(), l
    }

    function ee(o) {
        const l = y(o),
            _ = o.currentPeek() === "%" && o.peek() === "{";
        return o.resetPeek(), {
            isModulo: _,
            hasSpace: l.length > 0
        }
    }

    function X(o, l = !0) {
        const _ = (D = !1, U = "", re = !1) => {
                const oe = o.currentPeek();
                return oe === "{" ? U === "%" ? !1 : D : oe === "@" || !oe ? U === "%" ? !0 : D : oe === "%" ? (o.peek(), _(D, "%", !0)) : oe === "|" ? U === "%" || re ? !0 : !(U === ie || U === Q) : oe === ie ? (o.peek(), _(!0, ie, re)) : oe === Q ? (o.peek(), _(!0, Q, re)) : !0
            },
            C = _();
        return l && o.resetPeek(), C
    }

    function Z(o, l) {
        const _ = o.currentChar();
        return _ === de ? de : l(_) ? (o.next(), _) : null
    }

    function he(o) {
        return Z(o, _ => {
            const C = _.charCodeAt(0);
            return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36
        })
    }

    function we(o) {
        return Z(o, _ => {
            const C = _.charCodeAt(0);
            return C >= 48 && C <= 57
        })
    }

    function ae(o) {
        return Z(o, _ => {
            const C = _.charCodeAt(0);
            return C >= 48 && C <= 57 || C >= 65 && C <= 70 || C >= 97 && C <= 102
        })
    }

    function Oe(o) {
        let l = "",
            _ = "";
        for (; l = we(o);) _ += l;
        return _
    }

    function Ue(o) {
        P(o);
        const l = o.currentChar();
        return l !== "%" && N(S.EXPECTED_TOKEN, a(), 0, l), o.next(), "%"
    }

    function pe(o) {
        let l = "";
        for (;;) {
            const _ = o.currentChar();
            if (_ === "{" || _ === "}" || _ === "@" || _ === "|" || !_) break;
            if (_ === "%")
                if (X(o)) l += _, o.next();
                else break;
            else if (_ === ie || _ === Q)
                if (X(o)) l += _, o.next();
                else {
                    if (J(o)) break;
                    l += _, o.next()
                }
            else l += _, o.next()
        }
        return l
    }

    function We(o) {
        P(o);
        let l = "",
            _ = "";
        for (; l = he(o);) _ += l;
        return o.currentChar() === de && N(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _
    }

    function te(o) {
        P(o);
        let l = "";
        return o.currentChar() === "-" ? (o.next(), l += `-${Oe(o)}`) : l += Oe(o), o.currentChar() === de && N(S.UNTERMINATED_CLOSING_BRACE, a(), 0), l
    }

    function ve(o) {
        P(o), k(o, "'");
        let l = "",
            _ = "";
        const C = U => U !== At && U !== Q;
        for (; l = Z(o, C);) l === "\\" ? _ += Ve(o) : _ += l;
        const D = o.currentChar();
        return D === Q || D === de ? (N(S.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), D === Q && (o.next(), k(o, "'")), _) : (k(o, "'"), _)
    }

    function Ve(o) {
        const l = o.currentChar();
        switch (l) {
            case "\\":
            case "'":
                return o.next(), `\\${l}`;
            case "u":
                return Ce(o, l, 4);
            case "U":
                return Ce(o, l, 6);
            default:
                return N(S.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, l), ""
        }
    }

    function Ce(o, l, _) {
        k(o, l);
        let C = "";
        for (let D = 0; D < _; D++) {
            const U = ae(o);
            if (!U) {
                N(S.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${l}${C}${o.currentChar()}`);
                break
            }
            C += U
        }
        return `\\${l}${C}`
    }

    function $e(o) {
        P(o);
        let l = "",
            _ = "";
        const C = D => D !== "{" && D !== "}" && D !== ie && D !== Q;
        for (; l = Z(o, C);) _ += l;
        return _
    }

    function He(o) {
        let l = "",
            _ = "";
        for (; l = he(o);) _ += l;
        return _
    }

    function Xe(o) {
        const l = (_ = !1, C) => {
            const D = o.currentChar();
            return D === "{" || D === "%" || D === "@" || D === "|" || D === "(" || D === ")" || !D || D === ie ? C : D === Q || D === fa ? (C += D, o.next(), l(_, C)) : (C += D, o.next(), l(!0, C))
        };
        return l(!1, "")
    }

    function Ne(o) {
        P(o);
        const l = k(o, "|");
        return P(o), l
    }

    function Te(o, l) {
        let _ = null;
        switch (o.currentChar()) {
            case "{":
                return l.braceNest >= 1 && N(S.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), o.next(), _ = g(l, 2, "{"), P(o), l.braceNest++, _;
            case "}":
                return l.braceNest > 0 && l.currentType === 2 && N(S.EMPTY_PLACEHOLDER, a(), 0), o.next(), _ = g(l, 3, "}"), l.braceNest--, l.braceNest > 0 && P(o), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), _;
            case "@":
                return l.braceNest > 0 && N(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _ = _e(o, l) || h(l), l.braceNest = 0, _;
            default: {
                let D = !0,
                    U = !0,
                    re = !0;
                if (J(o)) return l.braceNest > 0 && N(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _ = g(l, 1, Ne(o)), l.braceNest = 0, l.inLinked = !1, _;
                if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7)) return N(S.UNTERMINATED_CLOSING_BRACE, a(), 0), l.braceNest = 0, be(o, l);
                if (D = I(o, l)) return _ = g(l, 5, We(o)), P(o), _;
                if (U = E(o, l)) return _ = g(l, 6, te(o)), P(o), _;
                if (re = p(o, l)) return _ = g(l, 7, ve(o)), P(o), _;
                if (!D && !U && !re) return _ = g(l, 13, $e(o)), N(S.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, _.value), P(o), _;
                break
            }
        }
        return _
    }

    function _e(o, l) {
        const {
            currentType: _
        } = l;
        let C = null;
        const D = o.currentChar();
        switch ((_ === 8 || _ === 9 || _ === 12 || _ === 10) && (D === Q || D === ie) && N(S.INVALID_LINKED_FORMAT, a(), 0), D) {
            case "@":
                return o.next(), C = g(l, 8, "@"), l.inLinked = !0, C;
            case ".":
                return P(o), o.next(), g(l, 9, ".");
            case ":":
                return P(o), o.next(), g(l, 10, ":");
            default:
                return J(o) ? (C = g(l, 1, Ne(o)), l.braceNest = 0, l.inLinked = !1, C) : v(o, l) || w(o, l) ? (P(o), _e(o, l)) : R(o, l) ? (P(o), g(l, 12, He(o))) : A(o, l) ? (P(o), D === "{" ? Te(o, l) || C : g(l, 11, Xe(o))) : (_ === 8 && N(S.INVALID_LINKED_FORMAT, a(), 0), l.braceNest = 0, l.inLinked = !1, be(o, l))
        }
    }

    function be(o, l) {
        let _ = {
            type: 14
        };
        if (l.braceNest > 0) return Te(o, l) || h(l);
        if (l.inLinked) return _e(o, l) || h(l);
        switch (o.currentChar()) {
            case "{":
                return Te(o, l) || h(l);
            case "}":
                return N(S.UNBALANCED_CLOSING_BRACE, a(), 0), o.next(), g(l, 3, "}");
            case "@":
                return _e(o, l) || h(l);
            default: {
                if (J(o)) return _ = g(l, 1, Ne(o)), l.braceNest = 0, l.inLinked = !1, _;
                const {
                    isModulo: D,
                    hasSpace: U
                } = ee(o);
                if (D) return U ? g(l, 0, pe(o)) : g(l, 4, Ue(o));
                if (X(o)) return g(l, 0, pe(o));
                break
            }
        }
        return _
    }

    function Ge() {
        const {
            currentType: o,
            offset: l,
            startLoc: _,
            endLoc: C
        } = u;
        return u.lastType = o, u.lastOffset = l, u.lastStartLoc = _, u.lastEndLoc = C, u.offset = s(), u.startLoc = a(), r.currentChar() === de ? g(u, 14) : be(r, u)
    }
    return {
        nextToken: Ge,
        currentOffset: s,
        currentPosition: a,
        context: m
    }
}
const da = "parser",
    Ea = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function ga(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default: {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "ï¿½"
        }
    }
}

function La(e = {}) {
    const t = e.location !== !1,
        {
            onError: n
        } = e;

    function r(f, L, I, E, ...p) {
        const v = f.currentPosition();
        if (v.offset += E, v.column += E, n) {
            const R = t ? lt(I, v) : null,
                w = Me(L, R, {
                    domain: da,
                    args: p
                });
            n(w)
        }
    }

    function s(f, L, I) {
        const E = {
            type: f
        };
        return t && (E.start = L, E.end = L, E.loc = {
            start: I,
            end: I
        }), E
    }

    function a(f, L, I, E) {
        E && (f.type = E), t && (f.end = L, f.loc && (f.loc.end = I))
    }

    function c(f, L) {
        const I = f.context(),
            E = s(3, I.offset, I.startLoc);
        return E.value = L, a(E, f.currentOffset(), f.currentPosition()), E
    }

    function i(f, L) {
        const I = f.context(),
            {
                lastOffset: E,
                lastStartLoc: p
            } = I,
            v = s(5, E, p);
        return v.index = parseInt(L, 10), f.nextToken(), a(v, f.currentOffset(), f.currentPosition()), v
    }

    function u(f, L) {
        const I = f.context(),
            {
                lastOffset: E,
                lastStartLoc: p
            } = I,
            v = s(4, E, p);
        return v.key = L, f.nextToken(), a(v, f.currentOffset(), f.currentPosition()), v
    }

    function m(f, L) {
        const I = f.context(),
            {
                lastOffset: E,
                lastStartLoc: p
            } = I,
            v = s(9, E, p);
        return v.value = L.replace(Ea, ga), f.nextToken(), a(v, f.currentOffset(), f.currentPosition()), v
    }

    function b(f) {
        const L = f.nextToken(),
            I = f.context(),
            {
                lastOffset: E,
                lastStartLoc: p
            } = I,
            v = s(8, E, p);
        return L.type !== 12 ? (r(f, S.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), v.value = "", a(v, E, p), {
            nextConsumeToken: L,
            node: v
        }) : (L.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, le(L)), v.value = L.value || "", a(v, f.currentOffset(), f.currentPosition()), {
            node: v
        })
    }

    function N(f, L) {
        const I = f.context(),
            E = s(7, I.offset, I.startLoc);
        return E.value = L, a(E, f.currentOffset(), f.currentPosition()), E
    }

    function g(f) {
        const L = f.context(),
            I = s(6, L.offset, L.startLoc);
        let E = f.nextToken();
        if (E.type === 9) {
            const p = b(f);
            I.modifier = p.node, E = p.nextConsumeToken || f.nextToken()
        }
        switch (E.type !== 10 && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(E)), E = f.nextToken(), E.type === 2 && (E = f.nextToken()), E.type) {
            case 11:
                E.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(E)), I.key = N(f, E.value || "");
                break;
            case 5:
                E.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(E)), I.key = u(f, E.value || "");
                break;
            case 6:
                E.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(E)), I.key = i(f, E.value || "");
                break;
            case 7:
                E.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(E)), I.key = m(f, E.value || "");
                break;
            default: {
                r(f, S.UNEXPECTED_EMPTY_LINKED_KEY, L.lastStartLoc, 0);
                const p = f.context(),
                    v = s(7, p.offset, p.startLoc);
                return v.value = "", a(v, p.offset, p.startLoc), I.key = v, a(I, p.offset, p.startLoc), {
                    nextConsumeToken: E,
                    node: I
                }
            }
        }
        return a(I, f.currentOffset(), f.currentPosition()), {
            node: I
        }
    }

    function h(f) {
        const L = f.context(),
            I = L.currentType === 1 ? f.currentOffset() : L.offset,
            E = L.currentType === 1 ? L.endLoc : L.startLoc,
            p = s(2, I, E);
        p.items = [];
        let v = null;
        do {
            const A = v || f.nextToken();
            switch (v = null, A.type) {
                case 0:
                    A.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(A)), p.items.push(c(f, A.value || ""));
                    break;
                case 6:
                    A.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(A)), p.items.push(i(f, A.value || ""));
                    break;
                case 5:
                    A.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(A)), p.items.push(u(f, A.value || ""));
                    break;
                case 7:
                    A.value == null && r(f, S.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, le(A)), p.items.push(m(f, A.value || ""));
                    break;
                case 8: {
                    const J = g(f);
                    p.items.push(J.node), v = J.nextConsumeToken || null;
                    break
                }
            }
        } while (L.currentType !== 14 && L.currentType !== 1);
        const R = L.currentType === 1 ? L.lastOffset : f.currentOffset(),
            w = L.currentType === 1 ? L.lastEndLoc : f.currentPosition();
        return a(p, R, w), p
    }

    function k(f, L, I, E) {
        const p = f.context();
        let v = E.items.length === 0;
        const R = s(1, L, I);
        R.cases = [], R.cases.push(E);
        do {
            const w = h(f);
            v || (v = w.items.length === 0), R.cases.push(w)
        } while (p.currentType !== 14);
        return v && r(f, S.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(R, f.currentOffset(), f.currentPosition()), R
    }

    function y(f) {
        const L = f.context(),
            {
                offset: I,
                startLoc: E
            } = L,
            p = h(f);
        return L.currentType === 14 ? p : k(f, I, E, p)
    }

    function P(f) {
        const L = ma(f, un({}, e)),
            I = L.context(),
            E = s(0, I.offset, I.startLoc);
        return t && E.loc && (E.loc.source = f), E.body = y(L), e.onCacheKey && (E.cacheKey = e.onCacheKey(f)), I.currentType !== 14 && r(L, S.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, f[I.offset] || ""), a(E, L.currentOffset(), L.currentPosition()), E
    }
    return {
        parse: P
    }
}

function le(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "â€¦" : t
}

function Na(e, t = {}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: a => (n.helpers.add(a), a)
    }
}

function Pt(e, t) {
    for (let n = 0; n < e.length; n++) Nt(e[n], t)
}

function Nt(e, t) {
    switch (e.type) {
        case 1:
            Pt(e.cases, t), t.helper("plural");
            break;
        case 2:
            Pt(e.items, t);
            break;
        case 6: {
            Nt(e.key, t), t.helper("linked"), t.helper("type");
            break
        }
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function Ta(e, t = {}) {
    const n = Na(e);
    n.helper("normalize"), e.body && Nt(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function ba(e) {
    const t = e.body;
    return t.type === 2 ? kt(t) : t.cases.forEach(n => kt(n)), e
}

function kt(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null) break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = fn(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
const Ia = "minifier";

function ye(e) {
    switch (e.t = e.type, e.type) {
        case 0: {
            const t = e;
            ye(t.body), t.b = t.body, delete t.body;
            break
        }
        case 1: {
            const t = e,
                n = t.cases;
            for (let r = 0; r < n.length; r++) ye(n[r]);
            t.c = n, delete t.cases;
            break
        }
        case 2: {
            const t = e,
                n = t.items;
            for (let r = 0; r < n.length; r++) ye(n[r]);
            t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
            break
        }
        case 3:
        case 9:
        case 8:
        case 7: {
            const t = e;
            t.value && (t.v = t.value, delete t.value);
            break
        }
        case 6: {
            const t = e;
            ye(t.key), t.k = t.key, delete t.key, t.modifier && (ye(t.modifier), t.m = t.modifier, delete t.modifier);
            break
        }
        case 5: {
            const t = e;
            t.i = t.index, delete t.index;
            break
        }
        case 4: {
            const t = e;
            t.k = t.key, delete t.key;
            break
        }
        default:
            throw Me(S.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                domain: Ia,
                args: [e.type]
            })
    }
    delete e.type
}
const ha = "parser";

function Oa(e, t) {
    const {
        sourceMap: n,
        filename: r,
        breakLineCode: s,
        needIndent: a
    } = t, c = t.location !== !1, i = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: s,
        needIndent: a,
        indentLevel: 0
    };
    c && e.loc && (i.source = e.loc.source);
    const u = () => i;

    function m(P, f) {
        i.code += P
    }

    function b(P, f = !0) {
        const L = f ? s : "";
        m(a ? L + "  ".repeat(P) : L)
    }

    function N(P = !0) {
        const f = ++i.indentLevel;
        P && b(f)
    }

    function g(P = !0) {
        const f = --i.indentLevel;
        P && b(f)
    }

    function h() {
        b(i.indentLevel)
    }
    return {
        context: u,
        push: m,
        indent: N,
        deindent: g,
        newline: h,
        helper: P => `_${P}`,
        needIndent: () => i.needIndent
    }
}

function pa(e, t) {
    const {
        helper: n
    } = e;
    e.push(`${n("linked")}(`), Re(e, t.key), t.modifier ? (e.push(", "), Re(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function va(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const s = t.items.length;
    for (let a = 0; a < s && (Re(e, t.items[a]), a !== s - 1); a++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function Ca(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const s = t.cases.length;
        for (let a = 0; a < s && (Re(e, t.cases[a]), a !== s - 1); a++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function Aa(e, t) {
    t.body ? Re(e, t.body) : e.push("null")
}

function Re(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            Aa(e, t);
            break;
        case 1:
            Ca(e, t);
            break;
        case 2:
            va(e, t);
            break;
        case 6:
            pa(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
        default:
            throw Me(S.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                domain: ha,
                args: [t.type]
            })
    }
}
const Pa = (e, t = {}) => {
    const n = Ct(t.mode) ? t.mode : "normal",
        r = Ct(t.filename) ? t.filename : "message.intl",
        s = !!t.sourceMap,
        a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
        c = t.needIndent ? t.needIndent : n !== "arrow",
        i = e.helpers || [],
        u = Oa(e, {
            mode: n,
            filename: r,
            sourceMap: s,
            breakLineCode: a,
            needIndent: c
        });
    u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(c), i.length > 0 && (u.push(`const { ${fn(i.map(N=>`${N}: _${N}`),", ")} } = ctx`), u.newline()), u.push("return "), Re(u, e), u.deindent(c), u.push("}"), delete e.helpers;
    const {
        code: m,
        map: b
    } = u.context();
    return {
        ast: e,
        code: m,
        map: b ? b.toJSON() : void 0
    }
};

function ka(e, t = {}) {
    const n = un({}, t),
        r = !!n.jit,
        s = !!n.minify,
        a = n.optimize == null ? !0 : n.optimize,
        i = La(n).parse(e);
    return r ? (a && ba(i), s && ye(i), {
        ast: i,
        code: ""
    }) : (Ta(i, n), Pa(i, n))
}
/*!
 * core-base v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function ya() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (fe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
const Le = [];
Le[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Le[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Le[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Le[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Le[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Le[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Le[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Sa = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Ra(e) {
    return Sa.test(e)
}

function Da(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function Fa(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Ma(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ra(t) ? Da(t) : "*" + t
}

function wa(e) {
    const t = [];
    let n = -1,
        r = 0,
        s = 0,
        a, c, i, u, m, b, N;
    const g = [];
    g[0] = () => {
        c === void 0 ? c = i : c += i
    }, g[1] = () => {
        c !== void 0 && (t.push(c), c = void 0)
    }, g[2] = () => {
        g[0](), s++
    }, g[3] = () => {
        if (s > 0) s--, r = 4, g[0]();
        else {
            if (s = 0, c === void 0 || (c = Ma(c), c === !1)) return !1;
            g[1]()
        }
    };

    function h() {
        const k = e[n + 1];
        if (r === 5 && k === "'" || r === 6 && k === '"') return n++, i = "\\" + k, g[0](), !0
    }
    for (; r !== null;)
        if (n++, a = e[n], !(a === "\\" && h())) {
            if (u = Fa(a), N = Le[r], m = N[u] || N.l || 8, m === 8 || (r = m[0], m[1] !== void 0 && (b = g[m[1]], b && (i = a, b() === !1)))) return;
            if (r === 7) return t
        }
}
const yt = new Map;

function Ua(e, t) {
    return W(e) ? e[t] : null
}

function Wa(e, t) {
    if (!W(e)) return null;
    let n = yt.get(t);
    if (n || (n = wa(t), n && yt.set(t, n)), !n) return null;
    const r = n.length;
    let s = e,
        a = 0;
    for (; a < r;) {
        const c = s[n[a]];
        if (c === void 0 || $(s)) return null;
        s = c, a++
    }
    return s
}
const Va = e => e,
    $a = e => "",
    Ha = "text",
    Ga = e => e.length === 0 ? "" : zn(e),
    Ya = Zn;

function St(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function xa(e) {
    const t = Y(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Y(e.named.count) || Y(e.named.n)) ? Y(e.named.count) ? e.named.count : Y(e.named.n) ? e.named.n : t : t
}

function ja(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function Ka(e = {}) {
    const t = e.locale,
        n = xa(e),
        r = W(e.pluralRules) && O(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : St,
        s = W(e.pluralRules) && O(t) && $(e.pluralRules[t]) ? St : void 0,
        a = f => f[r(n, f.length, s)],
        c = e.list || [],
        i = f => c[f],
        u = e.named || {};
    Y(e.pluralIndex) && ja(n, u);
    const m = f => u[f];

    function b(f) {
        const L = $(e.messages) ? e.messages(f) : W(e.messages) ? e.messages[f] : !1;
        return L || (e.parent ? e.parent.message(f) : $a)
    }
    const N = f => e.modifiers ? e.modifiers[f] : Va,
        g = F(e.processor) && $(e.processor.normalize) ? e.processor.normalize : Ga,
        h = F(e.processor) && $(e.processor.interpolate) ? e.processor.interpolate : Ya,
        k = F(e.processor) && O(e.processor.type) ? e.processor.type : Ha,
        P = {
            list: i,
            named: m,
            plural: a,
            linked: (f, ...L) => {
                const [I, E] = L;
                let p = "text",
                    v = "";
                L.length === 1 ? W(I) ? (v = I.modifier || v, p = I.type || p) : O(I) && (v = I || v) : L.length === 2 && (O(I) && (v = I || v), O(E) && (p = E || p));
                const R = b(f)(P),
                    w = p === "vnode" && H(R) && v ? R[0] : R;
                return v ? N(v)(w, p) : w
            },
            message: b,
            type: k,
            interpolate: h,
            normalize: g,
            values: B({}, c, u)
        };
    return P
}
let je = null;

function Xa(e) {
    je = e
}

function Ba(e, t, n) {
    je && je.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const Ja = Qa("function:translate");

function Qa(e) {
    return t => je && je.emit(e, t)
}
const qa = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
        __EXTEND_POINT__: 8
    },
    _n = S.__EXTEND_POINT__,
    Ie = Lt(_n),
    ne = {
        INVALID_ARGUMENT: _n,
        INVALID_DATE_ARGUMENT: Ie(),
        INVALID_ISO_DATE_ARGUMENT: Ie(),
        NOT_SUPPORT_NON_STRING_MESSAGE: Ie(),
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ie(),
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ie(),
        NOT_SUPPORT_LOCALE_TYPE: Ie(),
        __EXTEND_POINT__: Ie()
    };

function ce(e) {
    return Me(e, null, void 0)
}

function Tt(e, t) {
    return t.locale != null ? Rt(t.locale) : Rt(e.locale)
}
let nt;

function Rt(e) {
    if (O(e)) return e;
    if ($(e)) {
        if (e.resolvedOnce && nt != null) return nt;
        if (e.constructor.name === "Function") {
            const t = e();
            if (qn(t)) throw ce(ne.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return nt = t
        } else throw ce(ne.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else throw ce(ne.NOT_SUPPORT_LOCALE_TYPE)
}

function Za(e, t, n) {
    return [...new Set([n, ...H(t) ? t : W(t) ? Object.keys(t) : O(t) ? [t] : [n]])]
}

function mn(e, t, n) {
    const r = O(n) ? n : De,
        s = e;
    s.__localeChainCache || (s.__localeChainCache = new Map);
    let a = s.__localeChainCache.get(r);
    if (!a) {
        a = [];
        let c = [n];
        for (; H(c);) c = Dt(a, c, t);
        const i = H(t) || !F(t) ? t : t.default ? t.default : null;
        c = O(i) ? [i] : i, H(c) && Dt(a, c, !1), s.__localeChainCache.set(r, a)
    }
    return a
}

function Dt(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && M(r); s++) {
        const a = t[s];
        O(a) && (r = za(e, t[s], n))
    }
    return r
}

function za(e, t, n) {
    let r;
    const s = t.split("-");
    do {
        const a = s.join("-");
        r = er(e, a, n), s.splice(-1, 1)
    } while (s.length && r === !0);
    return r
}

function er(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const s = t.replace(/!/g, "");
        e.push(s), (H(n) || F(n)) && n[s] && (r = n[s])
    }
    return r
}
const tr = "9.10.2",
    et = -1,
    De = "en-US",
    Ft = "",
    Mt = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function nr() {
    return {
        upper: (e, t) => t === "text" && O(e) ? e.toUpperCase() : t === "vnode" && W(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && O(e) ? e.toLowerCase() : t === "vnode" && W(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && O(e) ? Mt(e) : t === "vnode" && W(e) && "__v_isVNode" in e ? Mt(e.children) : e
    }
}
let dn;

function wt(e) {
    dn = e
}
let En;

function ar(e) {
    En = e
}
let gn;

function rr(e) {
    gn = e
}
let Ln = null;
const lr = e => {
        Ln = e
    },
    sr = () => Ln;
let Nn = null;
const Ut = e => {
        Nn = e
    },
    cr = () => Nn;
let Wt = 0;

function or(e = {}) {
    const t = $(e.onWarn) ? e.onWarn : ea,
        n = O(e.version) ? e.version : tr,
        r = O(e.locale) || $(e.locale) ? e.locale : De,
        s = $(r) ? De : r,
        a = H(e.fallbackLocale) || F(e.fallbackLocale) || O(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
        c = F(e.messages) ? e.messages : {
            [s]: {}
        },
        i = F(e.datetimeFormats) ? e.datetimeFormats : {
            [s]: {}
        },
        u = F(e.numberFormats) ? e.numberFormats : {
            [s]: {}
        },
        m = B({}, e.modifiers || {}, nr()),
        b = e.pluralRules || {},
        N = $(e.missing) ? e.missing : null,
        g = M(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : !0,
        h = M(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : !0,
        k = !!e.fallbackFormat,
        y = !!e.unresolving,
        P = $(e.postTranslation) ? e.postTranslation : null,
        f = F(e.processor) ? e.processor : null,
        L = M(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        I = !!e.escapeParameter,
        E = $(e.messageCompiler) ? e.messageCompiler : dn,
        p = $(e.messageResolver) ? e.messageResolver : En || Ua,
        v = $(e.localeFallbacker) ? e.localeFallbacker : gn || Za,
        R = W(e.fallbackContext) ? e.fallbackContext : void 0,
        w = e,
        A = W(w.__datetimeFormatters) ? w.__datetimeFormatters : new Map,
        J = W(w.__numberFormatters) ? w.__numberFormatters : new Map,
        ee = W(w.__meta) ? w.__meta : {};
    Wt++;
    const X = {
        version: n,
        cid: Wt,
        locale: r,
        fallbackLocale: a,
        messages: c,
        modifiers: m,
        pluralRules: b,
        missing: N,
        missingWarn: g,
        fallbackWarn: h,
        fallbackFormat: k,
        unresolving: y,
        postTranslation: P,
        processor: f,
        warnHtmlMessage: L,
        escapeParameter: I,
        messageCompiler: E,
        messageResolver: p,
        localeFallbacker: v,
        fallbackContext: R,
        onWarn: t,
        __meta: ee
    };
    return X.datetimeFormats = i, X.numberFormats = u, X.__datetimeFormatters = A, X.__numberFormatters = J, __INTLIFY_PROD_DEVTOOLS__ && Ba(X, n, ee), X
}

function bt(e, t, n, r, s) {
    const {
        missing: a,
        onWarn: c
    } = e;
    if (a !== null) {
        const i = a(e, n, t, s);
        return O(i) ? i : t
    } else return t
}

function Ye(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function at(e) {
    return n => ir(n, e)
}

function ir(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n,
            s = r.c || r.cases;
        return e.plural(s.reduce((a, c) => [...a, Vt(e, c)], []))
    } else return Vt(e, n)
}

function Vt(e, t) {
    const n = t.s || t.static;
    if (n) return e.type === "text" ? n : e.normalize([n]); {
        const r = (t.i || t.items).reduce((s, a) => [...s, st(e, a)], []);
        return e.normalize(r)
    }
}

function st(e, t) {
    const n = t.t || t.type;
    switch (n) {
        case 3: {
            const r = t;
            return r.v || r.value
        }
        case 9: {
            const r = t;
            return r.v || r.value
        }
        case 4: {
            const r = t;
            return e.interpolate(e.named(r.k || r.key))
        }
        case 5: {
            const r = t;
            return e.interpolate(e.list(r.i != null ? r.i : r.index))
        }
        case 6: {
            const r = t,
                s = r.m || r.modifier;
            return e.linked(st(e, r.k || r.key), s ? st(e, s) : void 0, e.type)
        }
        case 7: {
            const r = t;
            return r.v || r.value
        }
        case 8: {
            const r = t;
            return r.v || r.value
        }
        default:
            throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const Tn = e => e;
let Se = Object.create(null);
const Fe = e => W(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);

function bn(e, t = {}) {
    let n = !1;
    const r = t.onError || sa;
    return t.onError = s => {
        n = !0, r(s)
    }, {
        ...ka(e, t),
        detectError: n
    }
}
const ur = (e, t) => {
    if (!O(e)) throw ce(ne.NOT_SUPPORT_NON_STRING_MESSAGE); {
        M(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || Tn)(e),
            s = Se[r];
        if (s) return s;
        const {
            code: a,
            detectError: c
        } = bn(e, t), i = new Function(`return ${a}`)();
        return c ? i : Se[r] = i
    }
};

function fr(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && O(e)) {
        M(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || Tn)(e),
            s = Se[r];
        if (s) return s;
        const {
            ast: a,
            detectError: c
        } = bn(e, {
            ...t,
            location: !1,
            jit: !0
        }), i = at(a);
        return c ? i : Se[r] = i
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Se[n];
            return r || (Se[n] = at(e))
        } else return at(e)
    }
}
const $t = () => "",
    z = e => $(e);

function Ht(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: s,
        messageCompiler: a,
        fallbackLocale: c,
        messages: i
    } = e, [u, m] = ct(...t), b = M(m.missingWarn) ? m.missingWarn : e.missingWarn, N = M(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, g = M(m.escapeParameter) ? m.escapeParameter : e.escapeParameter, h = !!m.resolvedMessage, k = O(m.default) || M(m.default) ? M(m.default) ? a ? u : () => u : m.default : n ? a ? u : () => u : "", y = n || k !== "", P = Tt(e, m);
    g && _r(m);
    let [f, L, I] = h ? [u, P, i[P] || {}] : In(e, u, P, c, N, b), E = f, p = u;
    if (!h && !(O(E) || Fe(E) || z(E)) && y && (E = k, p = E), !h && (!(O(E) || Fe(E) || z(E)) || !O(L))) return s ? et : u;
    let v = !1;
    const R = () => {
            v = !0
        },
        w = z(E) ? E : hn(e, u, L, E, p, R);
    if (v) return E;
    const A = Er(e, L, I, m),
        J = Ka(A),
        ee = mr(e, w, J),
        X = r ? r(ee, u) : ee;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: O(u) ? u : z(E) ? E.key : "",
            locale: L || (z(E) ? E.locale : ""),
            format: O(E) ? E : z(E) ? E.source : "",
            message: X
        };
        Z.meta = B({}, e.__meta, sr() || {}), Ja(Z)
    }
    return X
}

function _r(e) {
    H(e.list) ? e.list = e.list.map(t => O(t) ? vt(t) : t) : W(e.named) && Object.keys(e.named).forEach(t => {
        O(e.named[t]) && (e.named[t] = vt(e.named[t]))
    })
}

function In(e, t, n, r, s, a) {
    const {
        messages: c,
        onWarn: i,
        messageResolver: u,
        localeFallbacker: m
    } = e, b = m(e, r, n);
    let N = {},
        g, h = null;
    const k = "translate";
    for (let y = 0; y < b.length && (g = b[y], N = c[g] || {}, (h = u(N, t)) === null && (h = N[t]), !(O(h) || Fe(h) || z(h))); y++) {
        const P = bt(e, t, g, a, k);
        P !== t && (h = P)
    }
    return [h, g, N]
}

function hn(e, t, n, r, s, a) {
    const {
        messageCompiler: c,
        warnHtmlMessage: i
    } = e;
    if (z(r)) {
        const m = r;
        return m.locale = m.locale || n, m.key = m.key || t, m
    }
    if (c == null) {
        const m = () => r;
        return m.locale = n, m.key = t, m
    }
    const u = c(r, dr(e, n, s, r, i, a));
    return u.locale = n, u.key = t, u.source = r, u
}

function mr(e, t, n) {
    return t(n)
}

function ct(...e) {
    const [t, n, r] = e, s = {};
    if (!O(t) && !Y(t) && !z(t) && !Fe(t)) throw ce(ne.INVALID_ARGUMENT);
    const a = Y(t) ? String(t) : (z(t), t);
    return Y(n) ? s.plural = n : O(n) ? s.default = n : F(n) && !ze(n) ? s.named = n : H(n) && (s.list = n), Y(r) ? s.plural = r : O(r) ? s.default = r : F(r) && B(s, r), [a, s]
}

function dr(e, t, n, r, s, a) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: s,
        onError: c => {
            throw a && a(c), c
        },
        onCacheKey: c => Xn(t, n, c)
    }
}

function Er(e, t, n, r) {
    const {
        modifiers: s,
        pluralRules: a,
        messageResolver: c,
        fallbackLocale: i,
        fallbackWarn: u,
        missingWarn: m,
        fallbackContext: b
    } = e, g = {
        locale: t,
        modifiers: s,
        pluralRules: a,
        messages: h => {
            let k = c(n, h);
            if (k == null && b) {
                const [, , y] = In(b, h, t, i, u, m);
                k = c(y, h)
            }
            if (O(k) || Fe(k)) {
                let y = !1;
                const f = hn(e, h, t, k, h, () => {
                    y = !0
                });
                return y ? $t : f
            } else return z(k) ? k : $t
        }
    };
    return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), Y(r.plural) && (g.pluralIndex = r.plural), g
}

function Gt(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: a,
        localeFallbacker: c
    } = e, {
        __datetimeFormatters: i
    } = e, [u, m, b, N] = ot(...t), g = M(b.missingWarn) ? b.missingWarn : e.missingWarn;
    M(b.fallbackWarn) ? b.fallbackWarn : e.fallbackWarn;
    const h = !!b.part,
        k = Tt(e, b),
        y = c(e, s, k);
    if (!O(u) || u === "") return new Intl.DateTimeFormat(k, N).format(m);
    let P = {},
        f, L = null;
    const I = "datetime format";
    for (let v = 0; v < y.length && (f = y[v], P = n[f] || {}, L = P[u], !F(L)); v++) bt(e, u, f, g, I);
    if (!F(L) || !O(f)) return r ? et : u;
    let E = `${f}__${u}`;
    ze(N) || (E = `${E}__${JSON.stringify(N)}`);
    let p = i.get(E);
    return p || (p = new Intl.DateTimeFormat(f, B({}, L, N)), i.set(E, p)), h ? p.formatToParts(m) : p.format(m)
}
const On = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ot(...e) {
    const [t, n, r, s] = e, a = {};
    let c = {},
        i;
    if (O(t)) {
        const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!u) throw ce(ne.INVALID_ISO_DATE_ARGUMENT);
        const m = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
        i = new Date(m);
        try {
            i.toISOString()
        } catch {
            throw ce(ne.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Jn(t)) {
        if (isNaN(t.getTime())) throw ce(ne.INVALID_DATE_ARGUMENT);
        i = t
    } else if (Y(t)) i = t;
    else throw ce(ne.INVALID_ARGUMENT);
    return O(n) ? a.key = n : F(n) && Object.keys(n).forEach(u => {
        On.includes(u) ? c[u] = n[u] : a[u] = n[u]
    }), O(r) ? a.locale = r : F(r) && (c = r), F(s) && (c = s), [a.key || "", i, a, c]
}

function Yt(e, t, n) {
    const r = e;
    for (const s in n) {
        const a = `${t}__${s}`;
        r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a)
    }
}

function xt(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: a,
        localeFallbacker: c
    } = e, {
        __numberFormatters: i
    } = e, [u, m, b, N] = it(...t), g = M(b.missingWarn) ? b.missingWarn : e.missingWarn;
    M(b.fallbackWarn) ? b.fallbackWarn : e.fallbackWarn;
    const h = !!b.part,
        k = Tt(e, b),
        y = c(e, s, k);
    if (!O(u) || u === "") return new Intl.NumberFormat(k, N).format(m);
    let P = {},
        f, L = null;
    const I = "number format";
    for (let v = 0; v < y.length && (f = y[v], P = n[f] || {}, L = P[u], !F(L)); v++) bt(e, u, f, g, I);
    if (!F(L) || !O(f)) return r ? et : u;
    let E = `${f}__${u}`;
    ze(N) || (E = `${E}__${JSON.stringify(N)}`);
    let p = i.get(E);
    return p || (p = new Intl.NumberFormat(f, B({}, L, N)), i.set(E, p)), h ? p.formatToParts(m) : p.format(m)
}
const pn = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function it(...e) {
    const [t, n, r, s] = e, a = {};
    let c = {};
    if (!Y(t)) throw ce(ne.INVALID_ARGUMENT);
    const i = t;
    return O(n) ? a.key = n : F(n) && Object.keys(n).forEach(u => {
        pn.includes(u) ? c[u] = n[u] : a[u] = n[u]
    }), O(r) ? a.locale = r : F(r) && (c = r), F(s) && (c = s), [a.key || "", i, a, c]
}

function jt(e, t, n) {
    const r = e;
    for (const s in n) {
        const a = `${t}__${s}`;
        r.__numberFormatters.has(a) && r.__numberFormatters.delete(a)
    }
}
ya();

function gr() {
    return vn().__VUE_DEVTOOLS_GLOBAL_HOOK__
}

function vn() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {}
}
const Lr = typeof Proxy == "function",
    Nr = "devtools-plugin:setup",
    Tr = "plugin:settings:set";
let Pe, ut;

function br() {
    var e;
    return Pe !== void 0 || (typeof window < "u" && window.performance ? (Pe = !0, ut = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Pe = !0, ut = globalThis.perf_hooks.performance) : Pe = !1), Pe
}

function Ir() {
    return br() ? ut.now() : Date.now()
}
class hr {
    constructor(t, n) {
        this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
        const r = {};
        if (t.settings)
            for (const c in t.settings) {
                const i = t.settings[c];
                r[c] = i.defaultValue
            }
        const s = `__vue-devtools-plugin-settings__${t.id}`;
        let a = Object.assign({}, r);
        try {
            const c = localStorage.getItem(s),
                i = JSON.parse(c);
            Object.assign(a, i)
        } catch {}
        this.fallbacks = {
            getSettings() {
                return a
            },
            setSettings(c) {
                try {
                    localStorage.setItem(s, JSON.stringify(c))
                } catch {}
                a = c
            },
            now() {
                return Ir()
            }
        }, n && n.on(Tr, (c, i) => {
            c === this.plugin.id && this.fallbacks.setSettings(i)
        }), this.proxiedOn = new Proxy({}, {
            get: (c, i) => this.target ? this.target.on[i] : (...u) => {
                this.onQueue.push({
                    method: i,
                    args: u
                })
            }
        }), this.proxiedTarget = new Proxy({}, {
            get: (c, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...u) => (this.targetQueue.push({
                method: i,
                args: u,
                resolve: () => {}
            }), this.fallbacks[i](...u)) : (...u) => new Promise(m => {
                this.targetQueue.push({
                    method: i,
                    args: u,
                    resolve: m
                })
            })
        })
    }
    async setRealTarget(t) {
        this.target = t;
        for (const n of this.onQueue) this.target.on[n.method](...n.args);
        for (const n of this.targetQueue) n.resolve(await this.target[n.method](...n.args))
    }
}

function Qr(e, t) {
    const n = e,
        r = vn(),
        s = gr(),
        a = Lr && n.enableEarlyProxy;
    if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) s.emit(Nr, e, t);
    else {
        const c = a ? new hr(n, s) : null;
        (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: n,
            setupFn: t,
            proxy: c
        }), c && t(c.proxiedTarget)
    }
}
/*!
 * vue-i18n v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Or = "9.10.2";

function pr() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (fe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (fe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (fe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fe().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Cn = qa.__EXTEND_POINT__,
    ue = Lt(Cn);
ue(), ue(), ue(), ue(), ue(), ue(), ue(), ue(), ue();
const An = ne.__EXTEND_POINT__,
    q = Lt(An),
    x = {
        UNEXPECTED_RETURN_TYPE: An,
        INVALID_ARGUMENT: q(),
        MUST_BE_CALL_SETUP_TOP: q(),
        NOT_INSTALLED: q(),
        NOT_AVAILABLE_IN_LEGACY_MODE: q(),
        REQUIRED_VALUE: q(),
        INVALID_VALUE: q(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: q(),
        NOT_INSTALLED_WITH_PROVIDE: q(),
        UNEXPECTED_ERROR: q(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: q(),
        BRIDGE_SUPPORT_VUE_2_ONLY: q(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: q(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: q(),
        __EXTEND_POINT__: q()
    };

function K(e, ...t) {
    return Me(e, null, void 0)
}
const ft = ge("__translateVNode"),
    _t = ge("__datetimeParts"),
    mt = ge("__numberParts"),
    Pn = ge("__setPluralRules"),
    kn = ge("__injectWithOption"),
    dt = ge("__dispose");

function Ke(e) {
    if (!W(e)) return e;
    for (const t in e)
        if (Ze(e, t))
            if (!t.includes(".")) W(e[t]) && Ke(e[t]);
            else {
                const n = t.split("."),
                    r = n.length - 1;
                let s = e,
                    a = !1;
                for (let c = 0; c < r; c++) {
                    if (n[c] in s || (s[n[c]] = {}), !W(s[n[c]])) {
                        a = !0;
                        break
                    }
                    s = s[n[c]]
                }
                a || (s[n[r]] = e[t], delete e[t]), W(s[n[r]]) && Ke(s[n[r]])
            } return e
}

function tt(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: s,
        flatJson: a
    } = t, c = F(n) ? n : H(r) ? {} : {
        [e]: {}
    };
    if (H(r) && r.forEach(i => {
            if ("locale" in i && "resource" in i) {
                const {
                    locale: u,
                    resource: m
                } = i;
                u ? (c[u] = c[u] || {}, Qe(m, c[u])) : Qe(m, c)
            } else O(i) && Qe(JSON.parse(i), c)
        }), s == null && a)
        for (const i in c) Ze(c, i) && Ke(c[i]);
    return c
}

function yn(e) {
    return e.type
}

function Sn(e, t, n) {
    let r = W(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = tt(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const s = Object.keys(r);
    s.length && s.forEach(a => {
        e.mergeLocaleMessage(a, r[a])
    }); {
        if (W(t.datetimeFormats)) {
            const a = Object.keys(t.datetimeFormats);
            a.length && a.forEach(c => {
                e.mergeDateTimeFormat(c, t.datetimeFormats[c])
            })
        }
        if (W(t.numberFormats)) {
            const a = Object.keys(t.numberFormats);
            a.length && a.forEach(c => {
                e.mergeNumberFormat(c, t.numberFormats[c])
            })
        }
    }
}

function Kt(e) {
    return jn(Kn, null, e, 0)
}
const Xt = "__INTLIFY_META__",
    Bt = () => [],
    vr = () => !1;
let Jt = 0;

function Qt(e) {
    return (t, n, r, s) => e(n, r, xe() || void 0, s)
}
const Cr = () => {
    const e = xe();
    let t = null;
    return e && (t = yn(e)[Xt]) ? {
        [Xt]: t
    } : null
};

function It(e = {}, t) {
    const {
        __root: n,
        __injectWithOption: r
    } = e, s = n === void 0, a = e.flatJson, c = qe ? ke : ln, i = !!e.translateExistCompatible;
    let u = M(e.inheritLocale) ? e.inheritLocale : !0;
    const m = c(n && u ? n.locale.value : O(e.locale) ? e.locale : De),
        b = c(n && u ? n.fallbackLocale.value : O(e.fallbackLocale) || H(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : m.value),
        N = c(tt(m.value, e)),
        g = c(F(e.datetimeFormats) ? e.datetimeFormats : {
            [m.value]: {}
        }),
        h = c(F(e.numberFormats) ? e.numberFormats : {
            [m.value]: {}
        });
    let k = n ? n.missingWarn : M(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : !0,
        y = n ? n.fallbackWarn : M(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : !0,
        P = n ? n.fallbackRoot : M(e.fallbackRoot) ? e.fallbackRoot : !0,
        f = !!e.fallbackFormat,
        L = $(e.missing) ? e.missing : null,
        I = $(e.missing) ? Qt(e.missing) : null,
        E = $(e.postTranslation) ? e.postTranslation : null,
        p = n ? n.warnHtmlMessage : M(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        v = !!e.escapeParameter;
    const R = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
    let w = e.pluralRules || n && n.pluralRules,
        A;
    A = (() => {
        s && Ut(null);
        const d = {
            version: Or,
            locale: m.value,
            fallbackLocale: b.value,
            messages: N.value,
            modifiers: R,
            pluralRules: w,
            missing: I === null ? void 0 : I,
            missingWarn: k,
            fallbackWarn: y,
            fallbackFormat: f,
            unresolving: !0,
            postTranslation: E === null ? void 0 : E,
            warnHtmlMessage: p,
            escapeParameter: v,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        d.datetimeFormats = g.value, d.numberFormats = h.value, d.__datetimeFormatters = F(A) ? A.__datetimeFormatters : void 0, d.__numberFormatters = F(A) ? A.__numberFormatters : void 0;
        const T = or(d);
        return s && Ut(T), T
    })(), Ye(A, m.value, b.value);

    function ee() {
        return [m.value, b.value, N.value, g.value, h.value]
    }
    const X = se({
            get: () => m.value,
            set: d => {
                m.value = d, A.locale = m.value
            }
        }),
        Z = se({
            get: () => b.value,
            set: d => {
                b.value = d, A.fallbackLocale = b.value, Ye(A, m.value, d)
            }
        }),
        he = se(() => N.value),
        we = se(() => g.value),
        ae = se(() => h.value);

    function Oe() {
        return $(E) ? E : null
    }

    function Ue(d) {
        E = d, A.postTranslation = d
    }

    function pe() {
        return L
    }

    function We(d) {
        d !== null && (I = Qt(d)), L = d, A.missing = I
    }
    const te = (d, T, V, G, me, Be) => {
        ee();
        let Ae;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            s || (A.fallbackContext = n ? cr() : void 0),
            Ae = d(A)
        }
        finally {
            __INTLIFY_PROD_DEVTOOLS__,
            s || (A.fallbackContext = void 0)
        }
        if (V !== "translate exists" && Y(Ae) && Ae === et || V === "translate exists" && !Ae) {
            const [Wn, Br] = T();
            return n && P ? G(n) : me(Wn)
        } else {
            if (Be(Ae)) return Ae;
            throw K(x.UNEXPECTED_RETURN_TYPE)
        }
    };

    function ve(...d) {
        return te(T => Reflect.apply(Ht, null, [T, ...d]), () => ct(...d), "translate", T => Reflect.apply(T.t, T, [...d]), T => T, T => O(T))
    }

    function Ve(...d) {
        const [T, V, G] = d;
        if (G && !W(G)) throw K(x.INVALID_ARGUMENT);
        return ve(T, V, B({
            resolvedMessage: !0
        }, G || {}))
    }

    function Ce(...d) {
        return te(T => Reflect.apply(Gt, null, [T, ...d]), () => ot(...d), "datetime format", T => Reflect.apply(T.d, T, [...d]), () => Ft, T => O(T))
    }

    function $e(...d) {
        return te(T => Reflect.apply(xt, null, [T, ...d]), () => it(...d), "number format", T => Reflect.apply(T.n, T, [...d]), () => Ft, T => O(T))
    }

    function He(d) {
        return d.map(T => O(T) || Y(T) || M(T) ? Kt(String(T)) : T)
    }
    const Ne = {
        normalize: He,
        interpolate: d => d,
        type: "vnode"
    };

    function Te(...d) {
        return te(T => {
            let V;
            const G = T;
            try {
                G.processor = Ne, V = Reflect.apply(Ht, null, [G, ...d])
            } finally {
                G.processor = null
            }
            return V
        }, () => ct(...d), "translate", T => T[ft](...d), T => [Kt(T)], T => H(T))
    }

    function _e(...d) {
        return te(T => Reflect.apply(xt, null, [T, ...d]), () => it(...d), "number format", T => T[mt](...d), Bt, T => O(T) || H(T))
    }

    function be(...d) {
        return te(T => Reflect.apply(Gt, null, [T, ...d]), () => ot(...d), "datetime format", T => T[_t](...d), Bt, T => O(T) || H(T))
    }

    function Ge(d) {
        w = d, A.pluralRules = w
    }

    function o(d, T) {
        return te(() => {
            if (!d) return !1;
            const V = O(T) ? T : m.value,
                G = C(V),
                me = A.messageResolver(G, d);
            return i ? me != null : Fe(me) || z(me) || O(me)
        }, () => [d], "translate exists", V => Reflect.apply(V.te, V, [d, T]), vr, V => M(V))
    }

    function l(d) {
        let T = null;
        const V = mn(A, b.value, m.value);
        for (let G = 0; G < V.length; G++) {
            const me = N.value[V[G]] || {},
                Be = A.messageResolver(me, d);
            if (Be != null) {
                T = Be;
                break
            }
        }
        return T
    }

    function _(d) {
        const T = l(d);
        return T || (n ? n.tm(d) || {} : {});
    }
    

    function C(d) {
        return N.value[d] || {}
    }

    function D(d, T) {
        if (a) {
            const V = {
                [d]: T
            };
            for (const G in V) Ze(V, G) && Ke(V[G]);
            T = V[d]
        }
        N.value[d] = T, A.messages = N.value
    }

    function U(d, T) {
        N.value[d] = N.value[d] || {};
        const V = {
            [d]: T
        };
        if (a)
            for (const G in V) Ze(V, G) && Ke(V[G]);
        T = V[d], Qe(T, N.value[d]), A.messages = N.value
    }

    function re(d) {
        return g.value[d] || {}
    }

    function oe(d, T) {
        g.value[d] = T, A.datetimeFormats = g.value, Yt(A, d, T)
    }

    function Fn(d, T) {
        g.value[d] = B(g.value[d] || {}, T), A.datetimeFormats = g.value, Yt(A, d, T)
    }

    function Mn(d) {
        return h.value[d] || {}
    }

    function wn(d, T) {
        h.value[d] = T, A.numberFormats = h.value, jt(A, d, T)
    }

    function Un(d, T) {
        h.value[d] = B(h.value[d] || {}, T), A.numberFormats = h.value, jt(A, d, T)
    }
    Jt++, n && qe && (rt(n.locale, d => {
        u && (m.value = d, A.locale = d, Ye(A, m.value, b.value))
    }), rt(n.fallbackLocale, d => {
        u && (b.value = d, A.fallbackLocale = d, Ye(A, m.value, b.value))
    }));
    const j = {
        id: Jt,
        locale: X,
        fallbackLocale: Z,
        get inheritLocale() {
            return u
        },
        set inheritLocale(d) {
            u = d, d && n && (m.value = n.locale.value, b.value = n.fallbackLocale.value, Ye(A, m.value, b.value))
        },
        get availableLocales() {
            return Object.keys(N.value).sort()
        },
        messages: he,
        get modifiers() {
            return R
        },
        get pluralRules() {
            return w || {}
        },
        get isGlobal() {
            return s
        },
        get missingWarn() {
            return k
        },
        set missingWarn(d) {
            k = d, A.missingWarn = k
        },
        get fallbackWarn() {
            return y
        },
        set fallbackWarn(d) {
            y = d, A.fallbackWarn = y
        },
        get fallbackRoot() {
            return P
        },
        set fallbackRoot(d) {
            P = d
        },
        get fallbackFormat() {
            return f
        },
        set fallbackFormat(d) {
            f = d, A.fallbackFormat = f
        },
        get warnHtmlMessage() {
            return p
        },
        set warnHtmlMessage(d) {
            p = d, A.warnHtmlMessage = d
        },
        get escapeParameter() {
            return v
        },
        set escapeParameter(d) {
            v = d, A.escapeParameter = d
        },
        t: ve,
        getLocaleMessage: C,
        setLocaleMessage: D,
        mergeLocaleMessage: U,
        getPostTranslationHandler: Oe,
        setPostTranslationHandler: Ue,
        getMissingHandler: pe,
        setMissingHandler: We,
        [Pn]: Ge
    };
    return j.datetimeFormats = we, j.numberFormats = ae, j.rt = Ve, j.te = o, j.tm = _, j.d = Ce, j.n = $e, j.getDateTimeFormat = re, j.setDateTimeFormat = oe, j.mergeDateTimeFormat = Fn, j.getNumberFormat = Mn, j.setNumberFormat = wn, j.mergeNumberFormat = Un, j[kn] = r, j[ft] = Te, j[_t] = be, j[mt] = _e, j
}

function Ar(e) {
    const t = O(e.locale) ? e.locale : De,
        n = O(e.fallbackLocale) || H(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
        r = $(e.missing) ? e.missing : void 0,
        s = M(e.silentTranslationWarn) || Ee(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
        a = M(e.silentFallbackWarn) || Ee(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
        c = M(e.fallbackRoot) ? e.fallbackRoot : !0,
        i = !!e.formatFallbackMessages,
        u = F(e.modifiers) ? e.modifiers : {},
        m = e.pluralizationRules,
        b = $(e.postTranslation) ? e.postTranslation : void 0,
        N = O(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
        g = !!e.escapeParameterHtml,
        h = M(e.sync) ? e.sync : !0;
    let k = e.messages;
    if (F(e.sharedMessages)) {
        const v = e.sharedMessages;
        k = Object.keys(v).reduce((w, A) => {
            const J = w[A] || (w[A] = {});
            return B(J, v[A]), w
        }, k || {})
    }
    const {
        __i18n: y,
        __root: P,
        __injectWithOption: f
    } = e, L = e.datetimeFormats, I = e.numberFormats, E = e.flatJson, p = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: k,
        flatJson: E,
        datetimeFormats: L,
        numberFormats: I,
        missing: r,
        missingWarn: s,
        fallbackWarn: a,
        fallbackRoot: c,
        fallbackFormat: i,
        modifiers: u,
        pluralRules: m,
        postTranslation: b,
        warnHtmlMessage: N,
        escapeParameter: g,
        messageResolver: e.messageResolver,
        inheritLocale: h,
        translateExistCompatible: p,
        __i18n: y,
        __root: P,
        __injectWithOption: f
    }
}

function Et(e = {}, t) {
    {
        const n = It(Ar(e)),
            {
                __extender: r
            } = e,
            s = {
                id: n.id,
                get locale() {
                    return n.locale.value
                },
                set locale(a) {
                    n.locale.value = a
                },
                get fallbackLocale() {
                    return n.fallbackLocale.value
                },
                set fallbackLocale(a) {
                    n.fallbackLocale.value = a
                },
                get messages() {
                    return n.messages.value
                },
                get datetimeFormats() {
                    return n.datetimeFormats.value
                },
                get numberFormats() {
                    return n.numberFormats.value
                },
                get availableLocales() {
                    return n.availableLocales
                },
                get formatter() {
                    return {
                        interpolate() {
                            return []
                        }
                    }
                },
                set formatter(a) {},
                get missing() {
                    return n.getMissingHandler()
                },
                set missing(a) {
                    n.setMissingHandler(a)
                },
                get silentTranslationWarn() {
                    return M(n.missingWarn) ? !n.missingWarn : n.missingWarn
                },
                set silentTranslationWarn(a) {
                    n.missingWarn = M(a) ? !a : a
                },
                get silentFallbackWarn() {
                    return M(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
                },
                set silentFallbackWarn(a) {
                    n.fallbackWarn = M(a) ? !a : a
                },
                get modifiers() {
                    return n.modifiers
                },
                get formatFallbackMessages() {
                    return n.fallbackFormat
                },
                set formatFallbackMessages(a) {
                    n.fallbackFormat = a
                },
                get postTranslation() {
                    return n.getPostTranslationHandler()
                },
                set postTranslation(a) {
                    n.setPostTranslationHandler(a)
                },
                get sync() {
                    return n.inheritLocale
                },
                set sync(a) {
                    n.inheritLocale = a
                },
                get warnHtmlInMessage() {
                    return n.warnHtmlMessage ? "warn" : "off"
                },
                set warnHtmlInMessage(a) {
                    n.warnHtmlMessage = a !== "off"
                },
                get escapeParameterHtml() {
                    return n.escapeParameter
                },
                set escapeParameterHtml(a) {
                    n.escapeParameter = a
                },
                get preserveDirectiveContent() {
                    return !0
                },
                set preserveDirectiveContent(a) {},
                get pluralizationRules() {
                    return n.pluralRules || {}
                },
                __composer: n,
                t(...a) {
                    const [c, i, u] = a, m = {};
                    let b = null,
                        N = null;
                    if (!O(c)) throw K(x.INVALID_ARGUMENT);
                    const g = c;
                    return O(i) ? m.locale = i : H(i) ? b = i : F(i) && (N = i), H(u) ? b = u : F(u) && (N = u), Reflect.apply(n.t, n, [g, b || N || {}, m])
                },
                rt(...a) {
                    return Reflect.apply(n.rt, n, [...a])
                },
                tc(...a) {
                    const [c, i, u] = a, m = {
                        plural: 1
                    };
                    let b = null,
                        N = null;
                    if (!O(c)) throw K(x.INVALID_ARGUMENT);
                    const g = c;
                    return O(i) ? m.locale = i : Y(i) ? m.plural = i : H(i) ? b = i : F(i) && (N = i), O(u) ? m.locale = u : H(u) ? b = u : F(u) && (N = u), Reflect.apply(n.t, n, [g, b || N || {}, m])
                },
                te(a, c) {
                    return n.te(a, c)
                },
                tm(a) {
                    return n.tm(a)
                },
                getLocaleMessage(a) {
                    return n.getLocaleMessage(a)
                },
                setLocaleMessage(a, c) {
                    n.setLocaleMessage(a, c)
                },
                mergeLocaleMessage(a, c) {
                    n.mergeLocaleMessage(a, c)
                },
                d(...a) {
                    return Reflect.apply(n.d, n, [...a])
                },
                getDateTimeFormat(a) {
                    return n.getDateTimeFormat(a)
                },
                setDateTimeFormat(a, c) {
                    n.setDateTimeFormat(a, c)
                },
                mergeDateTimeFormat(a, c) {
                    n.mergeDateTimeFormat(a, c)
                },
                n(...a) {
                    return Reflect.apply(n.n, n, [...a])
                },
                getNumberFormat(a) {
                    return n.getNumberFormat(a)
                },
                setNumberFormat(a, c) {
                    n.setNumberFormat(a, c)
                },
                mergeNumberFormat(a, c) {
                    n.mergeNumberFormat(a, c)
                },
                getChoiceIndex(a, c) {
                    return -1
                }
            };
        return s.__extender = r, s
    }
}
const ht = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function Pr({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [...r, ...s.type === sn ? s.children : [s]], []) : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n
    }, {})
}

function Rn(e) {
    return sn
}
const kr = gt({
        name: "i18n-t",
        props: B({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Y(e) || !isNaN(e)
            }
        }, ht),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, s = e.i18n || Ot({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const a = Object.keys(n).filter(N => N !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = O(e.plural) ? +e.plural : e.plural);
                const i = Pr(t, a),
                    u = s[ft](e.keypath, i, c),
                    m = B({}, r),
                    b = O(e.tag) || W(e.tag) ? e.tag : Rn();
                return rn(b, m, u)
            }
        }
    }),
    qt = kr;

function yr(e) {
    return H(e) && !O(e[0])
}

function Dn(e, t, n, r) {
    const {
        slots: s,
        attrs: a
    } = t;
    return () => {
        const c = {
            part: !0
        };
        let i = {};
        e.locale && (c.locale = e.locale), O(e.format) ? c.key = e.format : W(e.format) && (O(e.format.key) && (c.key = e.format.key), i = Object.keys(e.format).reduce((g, h) => n.includes(h) ? B({}, g, {
            [h]: e.format[h]
        }) : g, {}));
        const u = r(e.value, c, i);
        let m = [c.key];
        H(u) ? m = u.map((g, h) => {
            const k = s[g.type],
                y = k ? k({
                    [g.type]: g.value,
                    index: h,
                    parts: u
                }) : [g.value];
            return yr(y) && (y[0].key = `${g.type}-${h}`), y
        }) : O(u) && (m = [u]);
        const b = B({}, a),
            N = O(e.tag) || W(e.tag) ? e.tag : Rn();
        return rn(N, b, m)
    }
}
const Sr = gt({
        name: "i18n-n",
        props: B({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, ht),
        setup(e, t) {
            const n = e.i18n || Ot({
                useScope: "parent",
                __useComponent: !0
            });
            return Dn(e, t, pn, (...r) => n[mt](...r))
        }
    }),
    Zt = Sr,
    Rr = gt({
        name: "i18n-d",
        props: B({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, ht),
        setup(e, t) {
            const n = e.i18n || Ot({
                useScope: "parent",
                __useComponent: !0
            });
            return Dn(e, t, On, (...r) => n[_t](...r))
        }
    }),
    zt = Rr;

function Dr(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global; {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function Fr(e) {
    const t = c => {
        const {
            instance: i,
            modifiers: u,
            value: m
        } = c;
        if (!i || !i.$) throw K(x.UNEXPECTED_ERROR);
        const b = Dr(e, i.$),
            N = en(m);
        return [Reflect.apply(b.t, b, [...tn(N)]), b]
    };
    return {
        created: (c, i) => {
            const [u, m] = t(i);
            qe && e.global === m && (c.__i18nWatcher = rt(m.locale, () => {
                i.instance && i.instance.$forceUpdate()
            })), c.__composer = m, c.textContent = u
        },
        unmounted: c => {
            qe && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
        },
        beforeUpdate: (c, {
            value: i
        }) => {
            if (c.__composer) {
                const u = c.__composer,
                    m = en(i);
                c.textContent = Reflect.apply(u.t, u, [...tn(m)])
            }
        },
        getSSRProps: c => {
            const [i] = t(c);
            return {
                textContent: i
            }
        }
    }
}

function en(e) {
    if (O(e)) return {
        path: e
    };
    if (F(e)) {
        if (!("path" in e)) throw K(x.REQUIRED_VALUE, "path");
        return e
    } else throw K(x.INVALID_VALUE)
}

function tn(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: s,
        plural: a
    } = e, c = {}, i = r || {};
    return O(n) && (c.locale = n), Y(s) && (c.plural = s), Y(a) && (c.plural = a), [t, i, c]
}

function Mr(e, t, ...n) {
    const r = F(n[0]) ? n[0] : {},
        s = !!r.useI18nComponentName;
    (M(r.globalInstall) ? r.globalInstall : !0) && ([s ? "i18n" : qt.name, "I18nT"].forEach(c => e.component(c, qt)), [Zt.name, "I18nN"].forEach(c => e.component(c, Zt)), [zt.name, "I18nD"].forEach(c => e.component(c, zt))), e.directive("t", Fr(t))
}

function wr(e, t, n) {
    return {
        beforeCreate() {
            const r = xe();
            if (!r) throw K(x.UNEXPECTED_ERROR);
            const s = this.$options;
            if (s.i18n) {
                const a = s.i18n;
                if (s.__i18n && (a.__i18n = s.__i18n), a.__root = t, this === this.$root) this.$i18n = nn(e, a);
                else {
                    a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = Et(a);
                    const c = this.$i18n;
                    c.__extender && (c.__disposer = c.__extender(this.$i18n))
                }
            } else if (s.__i18n)
                if (this === this.$root) this.$i18n = nn(e, s);
                else {
                    this.$i18n = Et({
                        __i18n: s.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const a = this.$i18n;
                    a.__extender && (a.__disposer = a.__extender(this.$i18n))
                }
            else this.$i18n = e;
            s.__i18nGlobal && Sn(t, s, s), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, c) => this.$i18n.te(a, c), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = a => this.$i18n.tm(a), n.__setInstance(r, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const r = xe();
            if (!r) throw K(x.UNEXPECTED_ERROR);
            const s = this.$i18n;
            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n
        }
    }
}

function nn(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Pn](t.pluralizationRules || e.pluralizationRules);
    const n = tt(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}
const Ur = ge("global-vue-i18n");

function qr(e = {}, t) {
    const n = __VUE_I18N_LEGACY_API__ && M(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
        r = M(e.globalInjection) ? e.globalInjection : !0,
        s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0,
        a = new Map,
        [c, i] = Wr(e, n),
        u = ge("");

    function m(g) {
        return a.get(g) || null
    }

    function b(g, h) {
        a.set(g, h)
    }

    function N(g) {
        a.delete(g)
    } {
        const g = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return s
            },
            async install(h, ...k) {
                if (h.__VUE_I18N_SYMBOL__ = u, h.provide(h.__VUE_I18N_SYMBOL__, g), F(k[0])) {
                    const f = k[0];
                    g.__composerExtend = f.__composerExtend, g.__vueI18nExtend = f.__vueI18nExtend
                }
                let y = null;
                !n && r && (y = Xr(h, g.global)), __VUE_I18N_FULL_INSTALL__ && Mr(h, g, ...k), __VUE_I18N_LEGACY_API__ && n && h.mixin(wr(i, i.__composer, g));
                const P = h.unmount;
                h.unmount = () => {
                    y && y(), g.dispose(), P()
                }
            },
            get global() {
                return i
            },
            dispose() {
                c.stop()
            },
            __instances: a,
            __getInstance: m,
            __setInstance: b,
            __deleteInstance: N
        };
        return g
    }
}

function Ot(e = {}) {
    const t = xe();
    if (t == null) throw K(x.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw K(x.NOT_INSTALLED);
    const n = Vr(t),
        r = Hr(n),
        s = yn(t),
        a = $r(e, s);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition) throw K(x.NOT_AVAILABLE_IN_LEGACY_MODE);
        return jr(t, a, r, e)
    }
    if (a === "global") return Sn(r, e, s), r;
    if (a === "parent") {
        let u = Gr(n, t, e.__useComponent);
        return u == null && (u = r), u
    }
    const c = n;
    let i = c.__getInstance(t);
    if (i == null) {
        const u = B({}, e);
        "__i18n" in s && (u.__i18n = s.__i18n), r && (u.__root = r), i = It(u), c.__composerExtend && (i[dt] = c.__composerExtend(i)), xr(c, t, i), c.__setInstance(t, i)
    }
    return i
}

function Wr(e, t, n) {
    const r = Vn(); {
        const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Et(e)) : r.run(() => It(e));
        if (s == null) throw K(x.UNEXPECTED_ERROR);
        return [r, s]
    }
}

function Vr(e) {
    {
        const t = $n(e.isCE ? Ur : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw K(e.isCE ? x.NOT_INSTALLED_WITH_PROVIDE : x.UNEXPECTED_ERROR);
        return t
    }
}

function $r(e, t) {
    return ze(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function Hr(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function Gr(e, t, n = !1) {
    let r = null;
    const s = t.root;
    let a = Yr(t, n);
    for (; a != null;) {
        const c = e;
        if (e.mode === "composition") r = c.__getInstance(a);
        else if (__VUE_I18N_LEGACY_API__) {
            const i = c.__getInstance(a);
            i != null && (r = i.__composer, n && r && !r[kn] && (r = null))
        }
        if (r != null || s === a) break;
        a = a.parent
    }
    return r
}

function Yr(e, t = !1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}

function xr(e, t, n) {
    Hn(() => {}, t), Gn(() => {
        const r = n;
        e.__deleteInstance(t);
        const s = r[dt];
        s && (s(), delete r[dt])
    }, t)
}

function jr(e, t, n, r = {}) {
    const s = t === "local",
        a = ln(null);
    if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw K(x.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const c = M(r.inheritLocale) ? r.inheritLocale : !O(r.locale),
        i = ke(!s || c ? n.locale.value : O(r.locale) ? r.locale : De),
        u = ke(!s || c ? n.fallbackLocale.value : O(r.fallbackLocale) || H(r.fallbackLocale) || F(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value),
        m = ke(tt(i.value, r)),
        b = ke(F(r.datetimeFormats) ? r.datetimeFormats : {
            [i.value]: {}
        }),
        N = ke(F(r.numberFormats) ? r.numberFormats : {
            [i.value]: {}
        }),
        g = s ? n.missingWarn : M(r.missingWarn) || Ee(r.missingWarn) ? r.missingWarn : !0,
        h = s ? n.fallbackWarn : M(r.fallbackWarn) || Ee(r.fallbackWarn) ? r.fallbackWarn : !0,
        k = s ? n.fallbackRoot : M(r.fallbackRoot) ? r.fallbackRoot : !0,
        y = !!r.fallbackFormat,
        P = $(r.missing) ? r.missing : null,
        f = $(r.postTranslation) ? r.postTranslation : null,
        L = s ? n.warnHtmlMessage : M(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
        I = !!r.escapeParameter,
        E = s ? n.modifiers : F(r.modifiers) ? r.modifiers : {},
        p = r.pluralRules || s && n.pluralRules;

    function v() {
        return [i.value, u.value, m.value, b.value, N.value]
    }
    const R = se({
            get: () => a.value ? a.value.locale.value : i.value,
            set: l => {
                a.value && (a.value.locale.value = l), i.value = l
            }
        }),
        w = se({
            get: () => a.value ? a.value.fallbackLocale.value : u.value,
            set: l => {
                a.value && (a.value.fallbackLocale.value = l), u.value = l
            }
        }),
        A = se(() => a.value ? a.value.messages.value : m.value),
        J = se(() => b.value),
        ee = se(() => N.value);

    function X() {
        return a.value ? a.value.getPostTranslationHandler() : f
    }

    function Z(l) {
        a.value && a.value.setPostTranslationHandler(l)
    }

    function he() {
        return a.value ? a.value.getMissingHandler() : P
    }

    function we(l) {
        a.value && a.value.setMissingHandler(l)
    }

    function ae(l) {
        return v(), l()
    }

    function Oe(...l) {
        return a.value ? ae(() => Reflect.apply(a.value.t, null, [...l])) : ae(() => "")
    }

    function Ue(...l) {
        return a.value ? Reflect.apply(a.value.rt, null, [...l]) : ""
    }

    function pe(...l) {
        return a.value ? ae(() => Reflect.apply(a.value.d, null, [...l])) : ae(() => "")
    }

    function We(...l) {
        return a.value ? ae(() => Reflect.apply(a.value.n, null, [...l])) : ae(() => "")
    }

    function te(l) {
        return a.value ? a.value.tm(l) : {}
    }

    function ve(l, _) {
        return a.value ? a.value.te(l, _) : !1
    }

    function Ve(l) {
        return a.value ? a.value.getLocaleMessage(l) : {}
    }

    function Ce(l, _) {
        a.value && (a.value.setLocaleMessage(l, _), m.value[l] = _)
    }

    function $e(l, _) {
        a.value && a.value.mergeLocaleMessage(l, _)
    }

    function He(l) {
        return a.value ? a.value.getDateTimeFormat(l) : {}
    }

    function Xe(l, _) {
        a.value && (a.value.setDateTimeFormat(l, _), b.value[l] = _)
    }

    function Ne(l, _) {
        a.value && a.value.mergeDateTimeFormat(l, _)
    }

    function Te(l) {
        return a.value ? a.value.getNumberFormat(l) : {}
    }

    function _e(l, _) {
        a.value && (a.value.setNumberFormat(l, _), N.value[l] = _)
    }

    function be(l, _) {
        a.value && a.value.mergeNumberFormat(l, _)
    }
    const Ge = {
        get id() {
            return a.value ? a.value.id : -1
        },
        locale: R,
        fallbackLocale: w,
        messages: A,
        datetimeFormats: J,
        numberFormats: ee,
        get inheritLocale() {
            return a.value ? a.value.inheritLocale : c
        },
        set inheritLocale(l) {
            a.value && (a.value.inheritLocale = l)
        },
        get availableLocales() {
            return a.value ? a.value.availableLocales : Object.keys(m.value)
        },
        get modifiers() {
            return a.value ? a.value.modifiers : E
        },
        get pluralRules() {
            return a.value ? a.value.pluralRules : p
        },
        get isGlobal() {
            return a.value ? a.value.isGlobal : !1
        },
        get missingWarn() {
            return a.value ? a.value.missingWarn : g
        },
        set missingWarn(l) {
            a.value && (a.value.missingWarn = l)
        },
        get fallbackWarn() {
            return a.value ? a.value.fallbackWarn : h
        },
        set fallbackWarn(l) {
            a.value && (a.value.missingWarn = l)
        },
        get fallbackRoot() {
            return a.value ? a.value.fallbackRoot : k
        },
        set fallbackRoot(l) {
            a.value && (a.value.fallbackRoot = l)
        },
        get fallbackFormat() {
            return a.value ? a.value.fallbackFormat : y
        },
        set fallbackFormat(l) {
            a.value && (a.value.fallbackFormat = l)
        },
        get warnHtmlMessage() {
            return a.value ? a.value.warnHtmlMessage : L
        },
        set warnHtmlMessage(l) {
            a.value && (a.value.warnHtmlMessage = l)
        },
        get escapeParameter() {
            return a.value ? a.value.escapeParameter : I
        },
        set escapeParameter(l) {
            a.value && (a.value.escapeParameter = l)
        },
        t: Oe,
        getPostTranslationHandler: X,
        setPostTranslationHandler: Z,
        getMissingHandler: he,
        setMissingHandler: we,
        rt: Ue,
        d: pe,
        n: We,
        tm: te,
        te: ve,
        getLocaleMessage: Ve,
        setLocaleMessage: Ce,
        mergeLocaleMessage: $e,
        getDateTimeFormat: He,
        setDateTimeFormat: Xe,
        mergeDateTimeFormat: Ne,
        getNumberFormat: Te,
        setNumberFormat: _e,
        mergeNumberFormat: be
    };

    function o(l) {
        l.locale.value = i.value, l.fallbackLocale.value = u.value, Object.keys(m.value).forEach(_ => {
            l.mergeLocaleMessage(_, m.value[_])
        }), Object.keys(b.value).forEach(_ => {
            l.mergeDateTimeFormat(_, b.value[_])
        }), Object.keys(N.value).forEach(_ => {
            l.mergeNumberFormat(_, N.value[_])
        }), l.escapeParameter = I, l.fallbackFormat = y, l.fallbackRoot = k, l.fallbackWarn = h, l.missingWarn = g, l.warnHtmlMessage = L
    }
    return Yn(() => {
        if (e.proxy == null || e.proxy.$i18n == null) throw K(x.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const l = a.value = e.proxy.$i18n.__composer;
        t === "global" ? (i.value = l.locale.value, u.value = l.fallbackLocale.value, m.value = l.messages.value, b.value = l.datetimeFormats.value, N.value = l.numberFormats.value) : s && o(l)
    }), Ge
}
const Kr = ["locale", "fallbackLocale", "availableLocales"],
    an = ["t", "rt", "d", "n", "tm", "te"];

function Xr(e, t) {
    const n = Object.create(null);
    return Kr.forEach(s => {
        const a = Object.getOwnPropertyDescriptor(t, s);
        if (!a) throw K(x.UNEXPECTED_ERROR);
        const c = xn(a.value) ? {
            get() {
                return a.value.value
            },
            set(i) {
                a.value.value = i
            }
        } : {
            get() {
                return a.get && a.get()
            }
        };
        Object.defineProperty(n, s, c)
    }), e.config.globalProperties.$i18n = n, an.forEach(s => {
        const a = Object.getOwnPropertyDescriptor(t, s);
        if (!a || !a.value) throw K(x.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, a)
    }), () => {
        delete e.config.globalProperties.$i18n, an.forEach(s => {
            delete e.config.globalProperties[`$${s}`]
        })
    }
}
pr();
__INTLIFY_JIT_COMPILATION__ ? wt(fr) : wt(ur);
ar(Wa);
rr(mn);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = fe();
    e.__INTLIFY__ = !0, Xa(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
export {
    qr as c, Qr as s
};
