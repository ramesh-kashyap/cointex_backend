import {
    _ as q
} from "./icon_copy-BwRkM0m9.js";
import {
    _ as O
} from "./icon_tips-BV3W61Vo.js";
import {
    _ as W,
    a as j
} from "./index-CrXrt6Gs.js";
import {
    g as z,
    r as n,
    c as k,
    m as p,
    q as S,
    t as D,
    v as Q,
    D as o,
    y as s,
    z as J,
    j as g,
    x as K,
    E as X,
    G as Y
} from "./vant-3s7b3naM.js";
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
const Z = m => (X("data-v-56930b78"), m = m(), Y(), m),
    ee = {
        class: "container"
    },
    oe = {
        class: "title_heand"
    },
    te = {
        class: "box-con"
    },
    ne = {
        class: "title"
    },
    se = {
        class: "inp"
    },
    ae = {
        class: "box-con"
    },
    ie = {
        class: "title"
    },
    ce = {
        class: "chainName"
    },
    le = {
        class: "box-con"
    },
    de = {
        class: "qr-con"
    },
    re = {
        class: "address"
    },
    ue = {
        class: "title"
    },
    me = {
        class: "inp-con"
    },
    ve = {
        class: "inp"
    },
    pe = {
        class: "tips-con"
    },
    _e = {
        class: "title"
    },
    he = Z(() => o("img", {
        src: O
    }, null, -1)),
    fe = ["innerHTML"],
    Ce = {
        __name: "index",
        setup(m) {
            const {
                _getWalletCoinList: b,
                _getRechargeAddress: x,
                _getArticleDetail: R
            } = j, {
                proxy: v
            } = z(), l = n(null), a = n(null), i = n([]), L = {
                text: "coinName",
                value: "coinId"
            }, _ = n(!1), h = k(() => {
                try {
                    return i.value.find(e => e.coinId === l.value)
                } catch {
                    return null
                }
            }), c = n([]);

            function A(e) {
                if (l.value === e) return;
                const t = i.value.find(r => r.coinId === e).multiChainData;
                t && t.length > 0 && (c.value = t, l.value = e, a.value = c.value[0].chainName, C())
            }
            const F = {
                    text: "tokenType",
                    value: "chainName"
                },
                H = k(() => {
                    try {
                        return c.value.find(e => e.chainName === a.value).tokenType
                    } catch {
                        return ""
                    }
                }),
                y = n(!1);

            function P(e) {
                a.value !== e && (a.value = e, C())
            }
            async function V() {
                const e = await b({
                    filterType: 1
                });
                if (e.code === 0) {
                    i.value = e.data;
                    let t = i.value.find(r => r.coinName === "USDT");
                    t || (t = i.value[0]), l.value = t.coinId, c.value = t.multiChainData, a.value = c.value[0].chainName, C()
                } else v.$toast(e.message)
            }
            const f = n(null),
                d = n("");
            async function C() {
                const e = await x({
                    coinId: l.value,
                    chainName: a.value
                });
                f.value.innerHTML = "", d.value = "", e.code === 0 ? (d.value = e.data.address, v.$common.QRCode({
                    dom: f.value,
                    text: d.value,
                    width: 180,
                    height: 180
                })) : v.$toast(e.message)
            }

            function B(e) {
                v.$common.copy(e)
            }
            const N = n({});
            async function E() {
                const e = await R({
                    categoryType: "NOTES_ON_RECHARGING"
                });
                e.code === 0 && (N.value = e.data)
            }

            function G() {
                V(), E()
            }
            return (e, t) => {
                const r = p("ComImage"),
                    M = p("van-icon"),
                    w = p("ComPicker"),
                    U = p("PageScroll");
                return S(), D(U, {
                    type: "inside",
                    title: e.$t("title.doc16"),
                    onReady: G
                }, {
                    default: Q(() => {
                        var I, $, T;
                        return [o("div", ee, [o("div", oe, s(e.$t("title.doc16")), 1), o("div", te, [o("div", ne, s(e.$t("common.doc6")), 1), o("div", {
                            class: "inp-con",
                            onClick: t[0] || (t[0] = u => _.value = !0)
                        }, [o("div", se, [(I = h.value) != null && I.coinIcon ? (S(), D(r, {
                            key: 0,
                            class: "img",
                            src: ($ = h.value) == null ? void 0 : $.coinIcon
                        }, null, 8, ["src"])) : J("", !0), o("span", null, s((T = h.value) == null ? void 0 : T.coinName), 1)]), g(M, {
                            name: "arrow",
                            color: "#000000"
                        })])]), o("div", ae, [o("div", ie, s(e.$t("wallet.doc9")), 1), o("div", ce, s(H.value), 1)]), o("div", le, [o("div", de, [o("div", {
                            ref_key: "addressDom",
                            ref: f
                        }, null, 512)]), o("div", re, [o("div", ue, s(e.$t("wallet.doc10")), 1), o("div", me, [o("div", ve, s(d.value), 1), o("img", {
                            class: "copy-btn",
                            src: q,
                            onClick: t[1] || (t[1] = u => B(d.value))
                        })])])]), o("div", pe, [o("div", _e, [he, K(" " + s(e.$t("common.doc17")), 1)]), o("div", {
                            class: "desc",
                            innerHTML: N.value.description
                        }, null, 8, fe)])]), g(w, {
                            title: e.$t("common.doc6"),
                            customFieldName: L,
                            columns: i.value,
                            show: _.value,
                            "onUpdate:show": t[2] || (t[2] = u => _.value = u),
                            onConfirm: A
                        }, null, 8, ["title", "columns", "show"]), g(w, {
                            title: e.$t("wallet.doc9"),
                            customFieldName: F,
                            columns: c.value,
                            show: y.value,
                            "onUpdate:show": t[3] || (t[3] = u => y.value = u),
                            onConfirm: P
                        }, null, 8, ["title", "columns", "show"])]
                    }),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Pe = W(Ce, [
        ["__scopeId", "data-v-56930b78"]
    ]);
export {
    Pe as
    default
};
