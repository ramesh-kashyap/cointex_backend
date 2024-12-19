import {
    u as P
} from "./vuex-MbEfqX8_.js";
import {
    _ as W
} from "./index-CrXrt6Gs.js";
import {
    g as x,
    av as A,
    c as C,
    r as s,
    aw as O,
    b as U,
    o as j,
    ax as q,
    a as G,
    m as r,
    q as t,
    A as c,
    ay as a,
    I as F,
    t as i,
    v as f,
    z as d,
    D as J,
    j as K,
    az as Q,
    n as $
} from "./vant-3s7b3naM.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
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
const X = {
        class: "page-container"
    },
    Y = {
        key: 1,
        class: "footer"
    },
    Z = {
        __name: "PageScroll",
        props: {
            title: String,
            headerShow: {
                type: Boolean,
                default: !0
            },
            headerFixed: {
                type: Boolean,
                default: !1
            },
            type: {
                type: String,
                default: "main"
            },
            footerShow: {
                type: Boolean,
                default: !1
            },
            refresh: {
                type: [Boolean, String],
                default: "no set"
            },
            csShow: {
                type: Boolean,
                default: !1
            },
            isWatchScroll: {
                type: Boolean,
                default: !1
            },
            bgColor: {
                type: String,
                default: "#FEFEFB"
            }
        },
        emits: ["beforeReady", "init", "ready", "update:refresh", "refresh", "hide"],
        setup(o, {
            emit: w
        }) {
            const D = P(),
                {
                    proxy: p
                } = x(),
                m = A(),
                h = o,
                n = w,
                v = C({
                    get() {
                        return h.refresh
                    },
                    set(e) {
                        n("update:refresh", e)
                    }
                });

            function E() {
                n("refresh")
            }
            const y = s(!1),
                S = s(!1),
                g = s(!1),
                u = s(null),
                l = s(null),
                _ = C(() => parseFloat(getComputedStyle(document.documentElement).fontSize));

            function R() {
                $(() => {
                    h.refresh === "no set" ? l.value = u.value : l.value = u.value.$el, l.value.addEventListener("scroll", b())
                })
            }

            function b() {
                return p.$common.debounce(() => {
                    const e = l.value.scrollTop;
                    D.commit("SET_SCROLL_TOP", e / _.value)
                }, 50)
            }

            function z() {
                $(() => {
                    n("ready")
                })
            }
            const k = p.$common.throttle(() => {
                z(), S.value = !!m.header, g.value = !!m.footer, y.value = !!m.bg
            }, 1e3);
            return O(() => {
                k()
            }), U(() => {
                n("beforeReady")
            }), j(() => {
                n("init"), h.isWatchScroll ? R() : l.value && l.value.removeEventListener("scroll", b), k()
            }), q(() => {
                n("hide")
            }), G(() => {
                n("hide")
            }), (e, B) => {
                const I = r("MainHeader"),
                    M = r("InsideHeader"),
                    V = r("van-pull-refresh"),
                    H = r("CustomerService"),
                    L = r("FloatingBubble"),
                    T = r("MainFooter");
                return t(), c("div", {
                    class: F(["page", {
                        nobg: y.value
                    }]),
                    style: Q({
                        backgroundColor: o.bgColor
                    })
                }, [a(e.$slots, "bg", {}, void 0, !0), o.headerShow ? (t(), c("div", {
                    key: 0,
                    class: F(["headers", {
                        fixed: o.headerFixed
                    }])
                }, [S.value ? a(e.$slots, "header", {
                    key: 0
                }, void 0, !0) : o.type === "main" ? (t(), i(I, {
                    key: 1
                }, {
                    default: f(() => [a(e.$slots, "headerRight", {}, void 0, !0)]),
                    _: 3
                })) : o.type === "inside" ? (t(), i(M, {
                    key: 2,
                    title: o.title
                }, {
                    default: f(() => [a(e.$slots, "headerRight", {}, void 0, !0)]),
                    _: 3
                }, 8, ["title"])) : d("", !0)], 2)) : d("", !0), J("div", X, [o.refresh === "no set" ? (t(), c("div", {
                    key: 0,
                    class: "scroll",
                    ref_key: "scrollDom",
                    ref: u
                }, [a(e.$slots, "default", {}, void 0, !0)], 512)) : (t(), i(V, {
                    key: 1,
                    modelValue: v.value,
                    "onUpdate:modelValue": B[0] || (B[0] = N => v.value = N),
                    onRefresh: E,
                    class: "scroll",
                    ref_key: "scrollDom",
                    ref: u
                }, {
                    default: f(() => [a(e.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 8, ["modelValue"])), K(L, {
                    init: {
                        top: 1.88,
                        right: .2,
                        bottom: 1.3
                    }
                }, {
                    default: f(() => [o.csShow ? (t(), i(H, {
                        key: 0
                    })) : d("", !0)]),
                    _: 1
                })]), o.footerShow ? (t(), c("div", Y, [g.value ? a(e.$slots, "footer", {
                    key: 0
                }, void 0, !0) : o.type === "main" ? (t(), i(T, {
                    key: 1
                })) : d("", !0)])) : d("", !0), a(e.$slots, "popop", {}, void 0, !0)], 6)
            }
        }
    },
    pe = W(Z, [
        ["__scopeId", "data-v-e85f0186"]
    ]);
export {
    pe as
    default
};
