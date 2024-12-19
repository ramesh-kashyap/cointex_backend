import {
    _ as F,
    a as O
} from "./index-CIhV0COS.js";
import {
    g as j,
    q as a,
    A as l,
    F as C,
    H as E,
    D as i,
    y as d,
    x,
    z as B,
    r as n,
    c as W,
    m as q,
    t as X,
    v as z,
    I as A,
    j as D
} from "./vant-3s7b3naM.js";
import {
    a as Y,
    u as Z
} from "./vuerouter-7dy5tY0D.js";
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
const ee = {
        class: "list"
    },
    te = {
        class: "left"
    },
    ae = {
        class: "right"
    },
    se = {
        class: "text"
    },
    oe = {
        class: "title overflow3"
    },
    ne = {
        class: "time"
    },
    le = ["onClick"],
    ie = {
        key: 1,
        class: "btn disable"
    },
    ce = {
        key: 2,
        class: "btn disable"
    },
    de = {
        __name: "CardList",
        props: {
            list: Array,
            type: Number,
            speedPackageType: Number
        },
        emits: ["use"],
        setup(_, {
            emit: T
        }) {
            j();
            const P = T;
            return (r, b) => (a(), l("div", ee, [(a(!0), l(C, null, E(_.list, s => (a(), l("div", {
                class: "item",
                key: s.recordId
            }, [i("div", te, [i("h3", null, d(s.rate * 100) + "%", 1)]), i("div", ae, [i("div", se, [i("div", oe, [_.speedPackageType === 1 ? (a(), l(C, {
                key: 0
            }, [x(d(r.$t("card.doc10", {
                n: s.duration
            })), 1)], 64)) : _.speedPackageType === 2 ? (a(), l(C, {
                key: 1
            }, [x(d(r.$t("card.doc11", {
                n: s.duration
            })), 1)], 64)) : B("", !0)]), i("div", ne, d(s.expireTime), 1)]), s.status === 1 ? (a(), l("div", {
                key: 0,
                class: "btn",
                onClick: o => P("use", s.recordId)
            }, d(r.$t("card.doc3")), 9, le)) : s.status === 2 ? (a(), l("div", ie, d(r.$t("card.doc4")), 1)) : s.status === 3 ? (a(), l("div", ce, d(r.$t("card.doc5")), 1)) : B("", !0)])]))), 128))]))
        }
    },
    re = F(de, [
        ["__scopeId", "data-v-e5183d41"]
    ]),
    ue = {
        class: "title_container title_heand"
    },
    ve = {
        class: "quantify-cards"
    },
    pe = {
        class: "tabs"
    },
    fe = ["onClick"],
    ge = {
        key: 0
    },
    _e = {
        __name: "index",
        setup(_) {
            const {
                _getSpeedPackageRecord: T,
                _getSpeedPackageView: P,
                _speedPackageUse: r
            } = O, b = Y(), s = Z(), {
                proxy: o
            } = j(), p = n(1), y = n(1), f = n([{
                name: o.$t("card.doc1"),
                type: 1
            }, {
                name: o.$t("card.doc2"),
                type: 2
            }]), c = W(() => f.value.findIndex(e => e.type === y.value));

            function H(e) {
                y.value = e, V()
            }
            const v = n([]),
                h = n(!1),
                m = n(!1),
                L = n(!1),
                g = n(!1),
                k = n(0);

            function Q() {
                k.value = 1, g.value = !0, S()
            }

            function N() {
                L.value || m.value || (h.value = !0, k.value++, S())
            }
            async function S() {
                L.value = !0;
                const e = await T({
                    type: y.value,
                    speedPackageType: p.value,
                    page: k.value,
                    pageSize: 10
                }).finally(() => {
                    L.value = !1
                });
                if (e.code == 0) {
                    g.value && (v.value = [], g.value = !1);
                    const t = e.data.list;
                    v.value.push(...t), h.value = !1;
                    const {
                        index: R,
                        totalPage: U
                    } = e.data.page;
                    m.value = R >= U
                } else o.$toast(e.message)
            }
            const I = n(0);
            async function G() {
                const e = await P({
                    speedPackageType: p.value
                });
                e.code === 0 && (I.value = e.data.rate)
            }

            function J(e) {
                let t = I.value > 0 ? o.$t("card.doc7") : o.$t("card.doc9");
                p.value === 1 && (t = I.value > 0 ? o.$t("card.doc6") : o.$t("card.doc9")), o.$dialog({
                    message: t,
                    showCancelButton: !0,
                    confirmButtonText: o.$t("task.doc7"),
                    showConfirmButton: !0
                }).then(() => {
                    K(e)
                })
            }
            const w = n(!1);
            async function K(e) {
                if (w.value) return;
                w.value = !0;
                const t = await r({
                    recordId: e
                }).finally(() => {
                    w.value = !1
                });
                o.$toast(t.message), t.code === 0 && setTimeout(() => {
                    s.go(-1)
                }, 1e3)
            }

            function V() {
                m.value = !1, v.value = [], k.value = 0, N()
            }

            function M() {
                b.query.type && (p.value = Number(b.query.type)), G(), V()
            }
            return (e, t) => {
                const R = q("ComList"),
                    U = q("PageScroll");
                return a(), X(U, {
                    type: "inside",
                    title: e.$t("title.doc34"),
                    onReady: M
                }, {
                    default: z(() => [i("div", ue, d(e.$t("title.doc34")), 1), i("div", ve, [i("div", pe, [(a(!0), l(C, null, E(f.value, (u, $) => (a(), l("div", {
                        class: A(["tab", {
                            first: c.value === 0 && $ === c.value,
                            last: c.value === f.value.length - 1 && $ === c.value,
                            on: $ === c.value && c.value !== 0 && c.value !== f.value.length - 1
                        }]),
                        key: u.type,
                        onClick: ye => H(u.type)
                    }, [i("span", null, [x(d(u.name), 1), $ == c.value ? (a(), l("span", ge, "(" + d(v.value.length) + ")", 1)) : B("", !0)])], 10, fe))), 128))]), i("div", {
                        class: A(["cards-con", {
                            first: c.value === 0,
                            last: c.value === f.value.length - 1
                        }])
                    }, [D(R, {
                        finishedText: e.$t("load.no_more"),
                        finished: m.value,
                        check: !1,
                        list: v.value,
                        refreshing: g.value,
                        "onUpdate:refreshing": t[0] || (t[0] = u => g.value = u),
                        loading: h.value,
                        "onUpdate:loading": t[1] || (t[1] = u => h.value = u),
                        onLoad: N,
                        onRefresh: Q
                    }, {
                        default: z(() => [D(re, {
                            list: v.value,
                            type: y.value,
                            speedPackageType: p.value,
                            onUse: J
                        }, null, 8, ["list", "type", "speedPackageType"])]),
                        _: 1
                    }, 8, ["finishedText", "finished", "list", "refreshing", "loading"])], 2)])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Ne = F(_e, [
        ["__scopeId", "data-v-abf6ffdd"]
    ]);
export {
    Ne as
    default
};
