import {
    u as J
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as F,
    a as W
} from "./index-CIhV0COS.js";
import {
    g as O,
    m as P,
    q as h,
    A as g,
    D as e,
    y as s,
    u as _,
    I as ae,
    F as R,
    x as z,
    j as k,
    c as Y,
    r as n,
    w as ne,
    aw as ie,
    o as ce,
    J as G,
    M as K,
    H as le,
    z as ue,
    t as de,
    v as b
} from "./vant-3s7b3naM.js";
import {
    u as X
} from "./vuex-MbEfqX8_.js";
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
const re = {
        class: "quantify-info"
    },
    me = {
        class: "info-card"
    },
    fe = {
        class: "time"
    },
    ve = {
        class: "lists"
    },
    _e = {
        class: "name"
    },
    he = {
        class: "n"
    },
    ye = {
        class: "s"
    },
    pe = {
        class: "name"
    },
    ge = {
        class: "n"
    },
    $e = {
        class: "s"
    },
    we = {
        class: "name"
    },
    Ie = {
        class: "n"
    },
    Te = {
        class: "s"
    },
    Se = {
        class: "card-con"
    },
    Ce = {
        class: "item"
    },
    ke = {
        class: "val"
    },
    qe = {
        class: "name"
    },
    Le = {
        class: "item"
    },
    Ee = {
        class: "val"
    },
    Ne = {
        class: "name"
    },
    Pe = {
        class: "item"
    },
    xe = {
        class: "val"
    },
    Me = {
        class: "name"
    },
    Ve = {
        class: "info-bot"
    },
    be = {
        class: "name"
    },
    He = {
        __name: "QuantifyInfo",
        props: {
            info: Object,
            incomeInfo: Object,
            time: String,
            rate: [Number, String]
        },
        setup(a) {
            const q = J(),
                {
                    proxy: L
                } = O(),
                {
                    decal: d
                } = L.$math;
            return (i, r) => {
                const $ = P("van-icon");
                return h(), g("div", re, [e("div", me, [e("div", fe, [e("div", ve, [e("div", _e, [e("div", he, s(i.$t("quantify.doc6")), 1), e("div", ye, s(_(d)(a.incomeInfo.totalIncomeAmount, 4)), 1)]), e("div", pe, [e("div", ge, s(i.$t("common.doc38")), 1), e("div", $e, s(_(d)(a.incomeInfo.todayTeamIncomeAmount, 4)), 1)]), e("div", we, [e("div", Ie, s(i.$t("common.doc39")), 1), e("div", Te, s(_(d)(a.incomeInfo.totalTeamIncomeAmount, 4)), 1)])])]), e("div", Se, [e("div", Ce, [e("div", ke, s(_(d)(a.info.totalBalance, 2)) + " / " + s(_(d)(a.info.todayCanBalance, 2)), 1), e("div", qe, s(i.$t("quantify.doc3")), 1)]), e("div", Le, [e("div", Ee, s(_(d)(a.info.todayIncome, 2)), 1), e("div", Ne, s(i.$t("quantify.doc4")), 1)]), e("div", Pe, [e("div", xe, s(a.info.remainingCount) + "/" + s(a.info.todayCanCount), 1), e("div", Me, s(i.$t("quantify.doc5")), 1)])])]), e("div", Ve, [e("div", be, s(i.$t("quantify.doc7")), 1), e("div", {
                    class: ae(["val", {
                        on: a.rate && Number(a.rate) > 0
                    }]),
                    onClick: r[0] || (r[0] = x => _(q).push("/cards?type=1"))
                }, [a.rate && Number(a.rate) > 0 ? (h(), g(R, {
                    key: 0
                }, [z(s(i.$t("card.doc12", {
                    n: `${a.rate*100}%`
                })), 1)], 64)) : (h(), g(R, {
                    key: 1
                }, [z(s(i.$t("card.doc13")), 1)], 64)), k($, {
                    name: "arrow"
                })], 2)])])
            }
        }
    },
    De = F(He, [
        ["__scopeId", "data-v-15322fef"]
    ]),
    Qe = {
        class: "quantify-execute"
    },
    Ae = {
        class: "process"
    },
    Be = {
        class: "title"
    },
    Re = {
        key: 0
    },
    Fe = {
        __name: "QuantifyExecute",
        props: {
            localTimestamp: Number
        },
        emits: ["finished"],
        setup(a, {
            emit: q
        }) {
            const {
                _quantifyExecute: L,
                _quantifyConsole: d,
                _quantifyInterest: i
            } = W, {
                proxy: r
            } = O(), $ = X(), x = a, w = q, M = Y(() => {
                var o;
                return ((o = $.state.user.userData.email) == null ? void 0 : o.length) > 0
            }), m = n([]);
            async function E() {
                const o = await d();
                o.code == 0 ? (u.value = o.data.hasExecute, m.value = o.data.textList) : (u.value = !1, r.$toast(o.message))
            }
            const u = n(!1),
                I = n(!1);
            async function H() {
                if (!M.value) {
                    r.$toast(r.$t("email.doc14"));
                    return
                }
                if (I.value) return;
                I.value = !0, m.value = [];
                const o = await L().finally(() => {
                    I.value = !1
                });
                o.code === 0 || o.code === 12001 ? (u.value = !0, E()) : (u.value = !1, r.$toast(o.message))
            }
            const y = n(!1);
            async function N() {
                var f;
                if (y.value) return;
                y.value = !0, (f = (await i().finally(() => {
                    y.value = !1
                })).data) != null && f.hasExecute ? E() : u.value = !1
            }
            return ne(() => x.localTimestamp, o => {
                !y.value && u.value && m.value.length > 1 && o > m.value[m.value.length - 1].consoleTimestamp * 1e3 + 3e3 && (w("finished"), N())
            }), ie(() => {
                N()
            }), ce(() => {
                N()
            }), (o, f) => (h(), g("div", Qe, [G(e("div", {
                class: "start-btn",
                onClick: H
            }, s(o.$t("quantify.doc9")), 513), [
                [K, !u.value]
            ]), G(e("div", Ae, [e("div", Be, s(o.$t("quantify.doc10")), 1), (h(!0), g(R, null, le(m.value, (v, D) => (h(), g("div", {
                class: "item",
                key: v.consoleTimestamp
            }, [a.localTimestamp >= v.consoleTimestamp * 1e3 || D === 0 ? (h(), g("p", Re, s(v.consoleText), 1)) : ue("", !0)]))), 128))], 512), [
                [K, u.value]
            ])]))
        }
    },
    Oe = F(Fe, [
        ["__scopeId", "data-v-511e8366"]
    ]),
    Ue = {
        class: "quantify"
    },
    je = {
        class: "container"
    },
    ze = {
        class: "title_heand"
    },
    Ge = {
        __name: "index",
        setup(a) {
            const {
                _quantifyView: q,
                _getLevelInfo: L,
                _getSpeedPackageView: d,
                _getIncomeTotalView: i,
                _messageList: r
            } = W, $ = X(), x = J(), {
                proxy: w
            } = O(), M = n({});
            async function m() {
                const t = await d({
                    speedPackageType: 1
                });
                t.code === 0 && (M.value = t.data)
            }
            const E = n({});
            async function u() {
                const t = await q();
                t.code == 0 && (E.value = t.data)
            }
            const I = n({});
            async function H() {
                const t = await i();
                t.code === 0 ? I.value = t.data : w.$toast(t.message)
            }
            const y = n(null);
            async function N() {
                const t = await L();
                t.code === 0 ? y.value = t.data : w.$toast(t.message)
            }
            window.serviceTimer = null;
            const o = n(null),
                f = n(0),
                v = n(0);

            function D() {
                f.value = w.$common.getServerTime().getTime(), v.value = new Date().getTime(), window.serviceTimer && clearInterval(window.serviceTimer), window.serviceTimer = setInterval(() => {
                    f.value = f.value + 1e3, v.value = v.value + 1e3, o.value = Z(f.value)
                }, 1e3)
            }

            function Z(t) {
                const c = new Date(t),
                    B = c.getFullYear();
                let T = c.getMonth() + 1,
                    S = c.getDate(),
                    C = c.getHours(),
                    l = c.getMinutes(),
                    p = c.getSeconds();
                return T < 10 && (T = `0${T}`), S < 10 && (S = `0${S}`), C < 10 && (C = `0${C}`), l < 10 && (l = `0${l}`), p < 10 && (p = `0${p}`), `${T}-${S}-${B} ${C}:${l}:${p}`
            }
            const V = n({}),
                Q = n(!1),
                ee = Y(() => $.state.user.siteMsgPopupLock);
            async function te() {
                if (ee.value) return;
                const t = await r({
                    groupKey: "WITHIN_MESSAGE",
                    page: 1,
                    pageSize: 1
                });
                t.code == 0 ? t.data.list.length > 0 && (V.value = t.data.list[0], Q.value = !0, $.commit("SET_SITE_MSG_POPUP_LOCK", !0)) : w.$toast(t.message)
            }
            const A = n(!1);
            async function U() {
                await Promise.all([te(), D(), u(), H(), N(), m()]).finally(() => {
                    A.value = !1
                })
            }

            function se() {
                U()
            }
            return (t, c) => {
                const B = P("MainHeader"),
                    T = P("LevelInfo"),
                    S = P("NoticePopup"),
                    C = P("PageScroll");
                return h(), de(C, {
                    footerShow: !0,
                    refresh: A.value,
                    "onUpdate:refresh": c[2] || (c[2] = l => A.value = l),
                    onRefresh: U,
                    onReady: se,
                    onHide: t.onHide
                }, {
                    header: b(() => [k(B, {
                        title: t.$t("title.doc1")
                    }, {
                        default: b(() => [e("div", {
                            class: "header-right",
                            onClick: c[0] || (c[0] = l => _(x).push("/quantify/record"))
                        }, s(t.$t("title.doc33")), 1)]),
                        _: 1
                    }, 8, ["title"])]),
                    popop: b(() => {
                        var l, p, j;
                        return [k(S, {
                            show: Q.value,
                            "onUpdate:show": c[1] || (c[1] = oe => Q.value = oe),
                            title: (l = V.value) == null ? void 0 : l.title,
                            desc: (p = V.value) == null ? void 0 : p.richText,
                            time: (j = V.value) == null ? void 0 : j.date,
                            countdown: !0
                        }, null, 8, ["show", "title", "desc", "time"])]
                    }),
                    default: b(() => {
                        var l;
                        return [e("div", Ue, [e("div", je, [e("div", ze, s(t.$t("title.doc1")), 1), k(De, {
                            info: E.value,
                            incomeInfo: I.value,
                            time: o.value,
                            rate: (l = M.value) == null ? void 0 : l.rate
                        }, null, 8, ["info", "incomeInfo", "time", "rate"]), k(Oe, {
                            localTimestamp: v.value,
                            onChanges: u
                        }, null, 8, ["localTimestamp"])]), k(T, {
                            info: y.value,
                            levelshow: !0
                        }, null, 8, ["info"])])]
                    }),
                    _: 1
                }, 8, ["refresh", "onHide"])
            }
        }
    },
    ut = F(Ge, [
        ["__scopeId", "data-v-365d94fc"]
    ]);
export {
    ut as
    default
};
