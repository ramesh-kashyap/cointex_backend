import {
    g as H,
    r as n,
    i as P,
    c as b,
    m as c,
    q as p,
    t as Y,
    v,
    D as o,
    y as a,
    j as d,
    J as q,
    O as z,
    x as G,
    A as $,
    H as J,
    F as M,
    I as O,
    E as K,
    G as Q
} from "./vant-3s7b3naM.js";
import {
    _ as X
} from "./icon_tips-BV3W61Vo.js";
import {
    u as Z
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as tt,
    a as ot
} from "./index-CrXrt6Gs.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
import "./vuex-MbEfqX8_.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./axios-Cm0UX6qg.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const C = r => (K("data-v-ab1e4d37"), r = r(), Q(), r),
    et = {
        class: "container"
    },
    st = {
        class: "title_heand"
    },
    at = {
        class: "boxs"
    },
    nt = {
        class: "box"
    },
    lt = {
        class: "title"
    },
    it = {
        class: "inp"
    },
    ct = {
        class: "name"
    },
    dt = {
        class: "str"
    },
    rt = {
        class: "box"
    },
    ut = {
        class: "title"
    },
    _t = {
        class: "inp-con"
    },
    pt = {
        class: "inp"
    },
    vt = ["placeholder"],
    mt = C(() => o("div", {
        class: "str"
    }, "USDT", -1)),
    ht = {
        class: "tip1"
    },
    ft = {
        class: "flex"
    },
    wt = {
        class: "n"
    },
    gt = {
        class: "val"
    },
    yt = {
        class: "flex"
    },
    bt = {
        class: "n"
    },
    $t = {
        class: "val"
    },
    Ct = {
        class: "btn"
    },
    St = {
        class: "tips"
    },
    kt = {
        class: "tip-title"
    },
    Bt = C(() => o("img", {
        src: X
    }, null, -1)),
    Dt = {
        class: "tip-desc"
    },
    Ut = {
        class: "pop_type"
    },
    It = {
        class: "name"
    },
    Vt = ["onClick"],
    Nt = {
        class: "n"
    },
    Tt = {
        class: "ico"
    },
    xt = {
        class: "esc"
    },
    At = {
        __name: "deposit_VND",
        setup(r) {
            const {
                _getWalletCash: S,
                _getWalletCashList: k,
                _getWalletCashBuy: B
            } = ot, {
                proxy: m
            } = H(), D = Z();
            n(""), P("reload"), n(!1), n(!1);
            const {
                sub: U,
                mul: I,
                div: Et,
                decal: h
            } = m.$math, l = n(null), i = n(""), u = n(!1), f = n([]), _ = n([]), V = n([]), w = b(() => {
                if (!l.value) return 0;
                if (_.value.feeRate) {
                    let t = I(Number(l.value), Number(_.value.feeRate));
                    return h(t, 4)
                } else return 0
            }), N = b(() => {
                if (!l.value) return 0;
                const t = U(Number(l.value), w.value);
                return h(t, 4)
            });

            function T(t, e) {
                this.biShow = !1, this.currency = t.code, this.getConfig()
            }
            async function x() {
                const t = await S({
                    currency: i.value,
                    type: "BUY"
                });
                t.code === 0 && (_.value = t.data)
            }
            async function A() {
                const t = await k({
                    type: "BUY"
                });
                t.code === 0 && (i.value = t.data[0].code, V.value = t.data, t.data.forEach(e => {
                    f.value.push({
                        name: e.code,
                        code: e.code
                    })
                }), x())
            }
            A();
            async function E() {
                const t = await B({
                    amount: l.value,
                    currency: i.value
                });
                t.code === 0 ? /^(f|ht)tps?:\/\//i.test(t.data.paymentUrl) ? window.location.href = t.data.paymentUrl : D.push("/wallet/deposit_H5?id=h5&bi=" + i.value + "&amount=" + l.value) : m.$toast(t.message)
            }
            return (t, e) => {
                const L = c("van-icon"),
                    g = c("ComBtn"),
                    R = c("van-radio"),
                    W = c("van-radio-group"),
                    j = c("van-popup"),
                    F = c("PageScroll");
                return p(), Y(F, {
                    type: "inside",
                    title: t.$t("wallet.doc39")
                }, {
                    default: v(() => [o("div", et, [o("div", st, a(t.$t("wallet.doc39")), 1), o("div", at, [o("div", nt, [o("div", lt, a(t.$t("wallet.doc42")), 1), o("div", {
                        class: "inp-con",
                        onClick: e[0] || (e[0] = s => u.value = !0)
                    }, [o("div", it, [o("div", ct, a(i.value), 1), o("div", dt, [d(L, {
                        name: "arrow-down"
                    })])])])]), o("div", rt, [o("div", ut, a(t.$t("wallet.doc34")), 1), o("div", _t, [o("div", pt, [q(o("input", {
                        type: "text",
                        placeholder: t.$t("wallet.doc40"),
                        "onUpdate:modelValue": e[1] || (e[1] = s => l.value = s),
                        onInput: e[2] || (e[2] = (...s) => t.oninput && t.oninput(...s))
                    }, null, 40, vt), [
                        [z, l.value]
                    ]), mt])])])]), o("div", ht, [o("div", ft, [o("div", wt, a(t.$t("wallet.doc15")), 1), o("div", gt, a(N.value) + " USDT", 1)]), o("div", yt, [o("div", bt, a(t.$t("wallet.doc16")), 1), o("div", $t, a(w.value) + " USDT", 1)])]), o("div", Ct, [d(g, {
                        class: "on",
                        text: t.$t("common.doc3"),
                        onClick: E
                    }, null, 8, ["text"])]), o("div", St, [o("div", kt, [Bt, G(a(t.$t("common.doc23")), 1)]), o("div", Dt, a(t.$t("wallet.doc43")), 1)])]), d(j, {
                        show: u.value,
                        "onUpdate:show": e[5] || (e[5] = s => u.value = s),
                        round: "",
                        position: "bottom",
                        closeable: ""
                    }, {
                        default: v(() => [o("div", Ut, [o("div", It, a(t.$t("common.doc6")), 1), d(W, {
                            modelValue: i.value,
                            "onUpdate:modelValue": e[3] || (e[3] = s => i.value = s)
                        }, {
                            default: v(() => [(p(!0), $(M, null, J(f.value, (s, y) => (p(), $("div", {
                                class: O(["item", {
                                    on: s.code == i.value
                                }]),
                                onClick: Lt => T(s, y),
                                key: y
                            }, [o("div", Nt, a(s.name), 1), o("div", Tt, [d(R, {
                                name: s.name,
                                "checked-color": "#222222"
                            }, null, 8, ["name"])])], 10, Vt))), 128))]),
                            _: 1
                        }, 8, ["modelValue"]), o("div", xt, [d(g, {
                            class: "on",
                            text: t.$t("common.doc3"),
                            onClick: e[4] || (e[4] = s => u.value = !1)
                        }, null, 8, ["text"])])])]),
                        _: 1
                    }, 8, ["show"])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Zt = tt(At, [
        ["__scopeId", "data-v-ab1e4d37"]
    ]);
export {
    Zt as
    default
};
