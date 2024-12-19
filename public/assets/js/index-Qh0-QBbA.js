import {
    _ as A,
    a as J
} from "./index-CrXrt6Gs.js";
import {
    g as I,
    c as K,
    m as f,
    q as g,
    A as N,
    D as e,
    y as t,
    j as u,
    F as M,
    H as O,
    u as S,
    r as i,
    t as Q,
    v as x
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
const W = {
        class: "select-head container"
    },
    X = {
        class: "title_heand"
    },
    Y = {
        class: "bott"
    },
    Z = {
        class: "name"
    },
    ee = {
        class: "s"
    },
    te = {
        class: "val"
    },
    oe = {
        class: "name"
    },
    se = {
        class: "s"
    },
    ne = {
        class: "val"
    },
    ae = {
        __name: "SelectHead",
        props: {
            coinName: [String, Number],
            coinList: Array,
            startTime: String,
            endTime: String
        },
        emits: ["coinChange", "timeChange"],
        setup(d, {
            emit: _
        }) {
            const {
                proxy: m
            } = I(), s = d, v = _, n = K(() => {
                try {
                    return s.coinList.find(r => r.value === s.coinName).text
                } catch {
                    return m.$t("common.doc7")
                }
            });
            return (l, r) => {
                const y = f("van-icon");
                return g(), N("div", W, [e("div", X, t(l.$t("title.doc33")), 1), e("div", Y, [e("div", {
                    class: "coin",
                    onClick: r[0] || (r[0] = k => v("coinChange"))
                }, [e("div", Z, t(l.$t("common.doc8")), 1), e("div", ee, [e("div", te, t(n.value), 1), u(y, {
                    name: "arrow-down",
                    color: "#000"
                })])]), e("div", {
                    class: "date",
                    onClick: r[1] || (r[1] = k => v("timeChange"))
                }, [e("div", oe, t(l.$t("common.doc9")), 1), e("div", se, [e("div", ne, t(d.startTime ? d.startTime : l.$t("common.doc10")) + " - " + t(d.endTime ? d.endTime : l.$t("common.doc11")), 1), u(y, {
                    name: "arrow-down",
                    color: "#000"
                })])])])])
            }
        }
    },
    ie = A(ae, [
        ["__scopeId", "data-v-ad2799de"]
    ]),
    le = {
        class: "list"
    },
    ce = {
        class: "item-info"
    },
    de = {
        class: "name"
    },
    me = {
        class: "val"
    },
    re = {
        class: "item-info"
    },
    ue = {
        class: "name"
    },
    ve = {
        class: "val"
    },
    fe = {
        class: "item-info"
    },
    _e = {
        class: "name"
    },
    he = {
        class: "val"
    },
    pe = {
        class: "item-info"
    },
    $e = {
        class: "name"
    },
    ge = {
        class: "val"
    },
    ye = {
        class: "item-info"
    },
    Ce = {
        class: "name"
    },
    Te = {
        class: "val"
    },
    we = {
        class: "item-info"
    },
    Le = {
        class: "name"
    },
    Se = {
        class: "val"
    },
    Ne = {
        class: "item-info"
    },
    ke = {
        class: "name"
    },
    qe = {
        class: "val"
    },
    Pe = {
        class: "item-info"
    },
    be = {
        class: "name"
    },
    De = {
        class: "val"
    },
    Re = {
        __name: "RecordList",
        props: {
            list: Array
        },
        setup(d) {
            const {
                proxy: _
            } = I(), {
                decal: m
            } = _.$math;
            return (s, v) => (g(), N("div", le, [(g(!0), N(M, null, O(d.list, n => (g(), N("div", {
                class: "item",
                key: n.id
            }, [e("div", ce, [e("div", de, t(s.$t("quantify.doc19")), 1), e("div", me, t(S(m)(n.orderAmount, 4)), 1)]), e("div", re, [e("div", ue, t(s.$t("quantify.doc20")), 1), e("div", ve, t(S(m)(n.incomeAmount, 4)), 1)]), e("div", fe, [e("div", _e, t(s.$t("quantify.doc21")), 1), e("div", he, t(n.buyPlatform), 1)]), e("div", pe, [e("div", $e, t(s.$t("quantify.doc22")), 1), e("div", ge, t(n.sellPlatform), 1)]), e("div", ye, [e("div", Ce, t(s.$t("quantify.doc23")), 1), e("div", Te, t(S(m)(n.buyPrice, 4)) + t(n.incomeCoinName), 1)]), e("div", we, [e("div", Le, t(s.$t("quantify.doc24")), 1), e("div", Se, t(S(m)(n.sellPrice, 4)) + t(n.incomeCoinName), 1)]), e("div", Ne, [e("div", ke, t(s.$t("quantify.doc25")), 1), e("div", qe, t(n.coinName), 1)]), e("div", Pe, [e("div", be, t(s.$t("quantify.doc26")), 1), e("div", De, t(n.time), 1)])]))), 128))]))
        }
    },
    xe = A(Re, [
        ["__scopeId", "data-v-4232bd2c"]
    ]),
    Ae = {
        __name: "index",
        setup(d) {
            const {
                _quantifyRecord: _,
                _quantifyCoinlist: m
            } = J, {
                proxy: s
            } = I(), v = i(!1), n = i([]), l = i("");
            async function r() {
                const a = await m();
                a.code === 0 ? n.value = [{
                    text: s.$t("common.doc7"),
                    value: ""
                }, ...a.data.map(o => ({
                    text: o,
                    value: o
                }))] : s.$toast(a.message)
            }

            function y(a) {
                l.value = a, D()
            }
            const k = i(new Date(2020, 0, 1)),
                H = i(s.$common.getServerTime()),
                C = i(!1),
                q = i(""),
                P = i("");

            function F(a) {
                const [o, $] = a;
                C.value = !1, q.value = `${s.$common.formatDate(o)}`, P.value = `${s.$common.formatDate($)}`, D()
            }
            const h = i([]),
                T = i(!1),
                w = i(!1),
                b = i(!1),
                p = i(!1),
                L = i(0);

            function V() {
                L.value = 1, p.value = !0, U()
            }

            function B() {
                b.value || w.value || (T.value = !0, L.value++, U())
            }
            async function U() {
                b.value = !0;
                const a = await _({
                    coinName: l.value,
                    startTime: q.value,
                    endTime: P.value,
                    page: L.value,
                    pageSize: 10
                }).finally(() => {
                    b.value = !1
                });
                if (a.code == 0) {
                    p.value && (h.value = [], p.value = !1);
                    const o = a.data.list;
                    h.value.push(...o), T.value = !1;
                    const {
                        index: $,
                        totalPage: R
                    } = a.data.page;
                    w.value = $ >= R
                } else s.$toast(a.message)
            }

            function D() {
                w.value = !1, h.value = [], L.value = 0, B()
            }

            function j() {
                r(), D()
            }
            return (a, o) => {
                const $ = f("ComSticky"),
                    R = f("ComList"),
                    z = f("ComPicker"),
                    E = f("van-calendar"),
                    G = f("PageScroll");
                return g(), Q(G, {
                    type: "inside",
                    title: a.$t("title.doc33"),
                    onReady: j
                }, {
                    default: x(() => [u($, null, {
                        default: x(() => [u(ie, {
                            coinName: l.value,
                            coinList: n.value,
                            startTime: q.value,
                            endTime: P.value,
                            onCoinChange: o[0] || (o[0] = c => v.value = !0),
                            onTimeChange: o[1] || (o[1] = c => C.value = !0)
                        }, null, 8, ["coinName", "coinList", "startTime", "endTime"])]),
                        _: 1
                    }), u(R, {
                        class: "container",
                        emptyText: a.$t("common.doc31"),
                        finishedText: a.$t("load.no_more"),
                        finished: w.value,
                        check: !1,
                        list: h.value,
                        refreshing: p.value,
                        "onUpdate:refreshing": o[2] || (o[2] = c => p.value = c),
                        loading: T.value,
                        "onUpdate:loading": o[3] || (o[3] = c => T.value = c),
                        onLoad: B,
                        onRefresh: V
                    }, {
                        default: x(() => [u(xe, {
                            list: h.value
                        }, null, 8, ["list"])]),
                        _: 1
                    }, 8, ["emptyText", "finishedText", "finished", "list", "refreshing", "loading"]), u(z, {
                        title: a.$t("common.doc6"),
                        columns: n.value,
                        show: v.value,
                        "onUpdate:show": o[4] || (o[4] = c => v.value = c),
                        onConfirm: y
                    }, null, 8, ["title", "columns", "show"]), u(E, {
                        show: C.value,
                        "onUpdate:show": o[5] || (o[5] = c => C.value = c),
                        color: "#000",
                        type: "range",
                        "min-date": k.value,
                        "max-date": H.value,
                        "show-confirm": !1,
                        onConfirm: F
                    }, null, 8, ["show", "min-date", "max-date"])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    We = A(Ae, [
        ["__scopeId", "data-v-541b9065"]
    ]);
export {
    We as
    default
};
