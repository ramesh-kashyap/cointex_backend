import {
    g as G,
    c as g,
    r as k,
    m as i,
    N as O,
    q as C,
    t as y,
    j as p,
    v as D,
    D as o,
    y as a,
    J as f,
    O as V,
    aA as x,
    M as w,
    u as A,
    x as N
} from "./vant-3s7b3naM.js";
import {
    _ as b,
    a as P
} from "./index-WOgA1gKg.js";
import {
    u as I
} from "./vuex-MbEfqX8_.js";
import {
    u as M
} from "./vuerouter-7dy5tY0D.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./axios-Cm0UX6qg.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const T = {
        class: "popup-con"
    },
    j = {
        class: "popup-top"
    },
    q = {
        class: "popup-title"
    },
    z = {
        class: "popup-center"
    },
    F = {
        class: "title"
    },
    J = ["placeholder"],
    R = {
        class: "popup-bot"
    },
    E = {
        __name: "GoogleSwitchPopup",
        props: {
            show: Boolean,
            checked: Boolean
        },
        emits: ["update:show"],
        setup($, {
            emit: _
        }) {
            const {
                _getUserData: v,
                _googleMake: d
            } = P, {
                proxy: c
            } = G(), l = $, m = _, e = g({
                get() {
                    return l.show
                },
                set(t) {
                    m("update:show", t)
                }
            }), s = k("");
            async function h() {
                if (!s.value) {
                    c.$toast(c.$t("google.doc6"));
                    return
                }
                const t = await d({
                    hasOpen: !l.checked,
                    code: s.value
                });
                c.$toast(t.message), t.code === 0 && (v(), s.value = "", e.value = !1)
            }
            return (t, n) => {
                const r = i("van-icon"),
                    B = i("ComBtn"),
                    S = i("van-popup"),
                    U = O("number-only");
                return C(), y(x, {
                    to: "body"
                }, [p(S, {
                    show: e.value,
                    "onUpdate:show": n[2] || (n[2] = u => e.value = u),
                    position: "bottom",
                    style: {
                        "background-color": "transparent"
                    }
                }, {
                    default: D(() => [o("div", T, [o("div", j, [o("div", q, a(t.$t("google.doc5")), 1), o("div", {
                        class: "close",
                        onClick: n[0] || (n[0] = u => e.value = !1)
                    }, [p(r, {
                        name: "cross"
                    })])]), o("div", z, [o("div", F, a(t.$t("google.doc1")), 1), f(o("input", {
                        class: "inp",
                        type: "text",
                        "onUpdate:modelValue": n[1] || (n[1] = u => s.value = u),
                        placeholder: t.$t("google.doc6")
                    }, null, 8, J), [
                        [U],
                        [V, s.value]
                    ])])]), o("div", R, [p(B, {
                        class: "on",
                        onClick: h,
                        text: t.$t("common.doc3")
                    }, null, 8, ["text"])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    },
    H = b(E, [
        ["__scopeId", "data-v-2f658818"]
    ]),
    K = {
        class: "title_container title_heand"
    },
    L = {
        class: "container"
    },
    Q = {
        class: "item"
    },
    W = {
        class: "left"
    },
    X = {
        class: "right"
    },
    Y = {
        class: "item"
    },
    Z = {
        class: "left"
    },
    oo = {
        class: "right"
    },
    eo = {
        __name: "index",
        setup($) {
            const _ = M(),
                v = I(),
                d = g(() => v.state.user.userData),
                c = g(() => d.value.hasOpenGoogleAuth),
                l = k(!1);

            function m(e) {
                l.value = !0
            }
            return (e, s) => {
                const h = i("van-icon"),
                    t = i("van-switch"),
                    n = i("PageScroll");
                return C(), y(n, {
                    type: "inside",
                    bgColor: "#fff",
                    title: e.$t("title.doc38")
                }, {
                    default: D(() => [o("div", K, a(e.$t("title.doc38")), 1), o("div", L, [o("div", Q, [o("div", W, a(e.$t("google.doc1")), 1), o("div", X, [f(o("span", {
                        class: "checked"
                    }, a(e.$t("google.doc2")), 513), [
                        [w, d.value.hasOpenGoogleAuth]
                    ]), f(o("span", {
                        onClick: s[0] || (s[0] = r => A(_).push("/profile/google/add"))
                    }, [N(a(e.$t("google.doc3")) + " ", 1), p(h, {
                        name: "arrow",
                        class: "icon"
                    })], 512), [
                        [w, !d.value.hasOpenGoogleAuth]
                    ])])]), o("div", Y, [o("div", Z, a(e.$t("google.doc4")), 1), o("div", oo, [p(t, {
                        "active-color": "#DCFD52",
                        "model-value": c.value,
                        "onUpdate:modelValue": m,
                        size: "0.48rem"
                    }, null, 8, ["model-value"])])])]), p(H, {
                        show: l.value,
                        "onUpdate:show": s[1] || (s[1] = r => l.value = r),
                        checked: c.value
                    }, null, 8, ["show", "checked"])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    fo = b(eo, [
        ["__scopeId", "data-v-15dcee51"]
    ]);
export {
    fo as
    default
};
