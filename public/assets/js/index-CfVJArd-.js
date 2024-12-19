import {
    u as Y
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as U,
    a as X
} from "./index-WOgA1gKg.js";
import {
    g as j,
    m as P,
    q as _,
    A as g,
    D as e,
    y as s,
    u as v,
    I as oe,
    F,
    x as K,
    j as C,
    c as O,
    r as n,
    w as ne,
    aw as ie,
    o as ce,
    J,
    M as W,
    H as le,
    z as ue,
    t as re,
    v as D
} from "./vant-3s7b3naM.js";
import {
    u as Z
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
const de = {
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
    ge = {
        class: "name"
    },
    pe = {
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
    be = {
        class: "info-bot"
    },
    Ve = {
        class: "name"
    },
    De = {
        __name: "QuantifyInfo",
        props: {
            info: Object,
            incomeInfo: Object,
            time: String,
            rate: [Number, String]
        },
        setup(o) {
            const k = Y(),
                {
                    proxy: q
                } = j(),
                {
                    decal: r
                } = q.$math;
            return (i, d) => {
                const h = P("van-icon");
                return _(), g("div", de, [e("div", me, [e("div", fe, [e("div", ve, [e("div", _e, [e("div", he, s(i.$t("quantify.doc6")), 1), e("div", ye, s(v(r)(o.incomeInfo.totalIncomeAmount, 4)), 1)]), e("div", ge, [e("div", pe, s(i.$t("common.doc38")), 1), e("div", $e, s(v(r)(o.incomeInfo.todayTeamIncomeAmount, 4)), 1)]), e("div", we, [e("div", Ie, s(i.$t("common.doc39")), 1), e("div", Te, s(v(r)(o.incomeInfo.totalTeamIncomeAmount, 4)), 1)])])]), e("div", Se, [e("div", Ce, [e("div", ke, s(v(r)(o.info.totalBalance, 2)) + " / " + s(v(r)(o.info.todayCanBalance, 2)), 1), e("div", qe, s(i.$t("quantify.doc3")), 1)]), e("div", Le, [e("div", Ee, s(v(r)(o.info.todayIncome, 2)), 1), e("div", Ne, s(i.$t("quantify.doc4")), 1)]), e("div", Pe, [e("div", xe, s(o.info.remainingCount) + "/" + s(o.info.todayCanCount), 1), e("div", Me, s(i.$t("quantify.doc5")), 1)])])]), e("div", be, [e("div", Ve, s(i.$t("quantify.doc7")), 1), e("div", {
                    class: oe(["val", {
                        on: o.rate && Number(o.rate) > 0
                    }]),
                    onClick: d[0] || (d[0] = x => v(k).push("/cards?type=1"))
                }, [o.rate && Number(o.rate) > 0 ? (_(), g(F, {
                    key: 0
                }, [K(s(i.$t("card.doc12", {
                    n: `${o.rate*100}%`
                })), 1)], 64)) : (_(), g(F, {
                    key: 1
                }, [K(s(i.$t("card.doc13")), 1)], 64)), C(h, {
                    name: "arrow"
                })], 2)])])
            }
        }
    },
    Re = U(De, [
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
    He = {
        key: 0
    },
    Fe = {
        __name: "QuantifyExecute",
        props: {
            localTimestamp: Number
        },
        emits: ["finished"],
        setup(o, {
            emit: k
        }) {
            const {
                _quantifyExecute: q,
                _quantifyConsole: r,
                _quantifyInterest: i
            } = X, {
                proxy: d
            } = j(), h = Z(), x = o, p = k, M = O(() => h.state.user.userData.totalRecharge), R = O(() => {
                var a;
                return ((a = h.state.user.userData.email) == null ? void 0 : a.length) > 0
            }), m = n([]);
            async function L() {
                const a = await r();
                a.code == 0 ? (u.value = a.data.hasExecute, m.value = a.data.textList) : (u.value = !1, d.$toast(a.message))
            }
            const u = n(!1),
                E = n(!1);
            async function b() {
                if (!R.value && Number(M.value) > 0) {
                    d.$toast(d.$t("email.doc14"));
                    return
                }
                if (E.value) return;
                E.value = !0, m.value = [];
                const a = await q().finally(() => {
                    E.value = !1
                });
                a.code === 0 || a.code === 12001 ? (u.value = !0, L()) : (u.value = !1, d.$toast(a.message))
            }
            const $ = n(!1);
            async function w() {
                var f;
                if ($.value) return;
                $.value = !0, (f = (await i().finally(() => {
                    $.value = !1
                })).data) != null && f.hasExecute ? L() : u.value = !1
            }
            return ne(() => x.localTimestamp, a => {
                !$.value && u.value && m.value.length > 1 && a > m.value[m.value.length - 1].consoleTimestamp * 1e3 + 3e3 && (p("finished"), w())
            }), ie(() => {
                w()
            }), ce(() => {
                w()
            }), (a, f) => (_(), g("div", Qe, [J(e("div", {
                class: "start-btn",
                onClick: b
            }, s(a.$t("quantify.doc9")), 513), [
                [W, !u.value]
            ]), J(e("div", Ae, [e("div", Be, s(a.$t("quantify.doc10")), 1), (_(!0), g(F, null, le(m.value, (N, Q) => (_(), g("div", {
                class: "item",
                key: N.consoleTimestamp
            }, [o.localTimestamp >= N.consoleTimestamp * 1e3 || Q === 0 ? (_(), g("p", He, s(N.consoleText), 1)) : ue("", !0)]))), 128))], 512), [
                [W, u.value]
            ])]))
        }
    },
    Oe = U(Fe, [
        ["__scopeId", "data-v-f02e0afc"]
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
        setup(o) {
            const {
                _quantifyView: k,
                _getLevelInfo: q,
                _getSpeedPackageView: r,
                _getIncomeTotalView: i,
                _messageList: d
            } = X, h = Z(), x = Y(), {
                proxy: p
            } = j(), M = n({});
            async function R() {
                const t = await r({
                    speedPackageType: 1
                });
                t.code === 0 && (M.value = t.data)
            }
            const m = n({});
            async function L() {
                const t = await k();
                t.code == 0 && (m.value = t.data)
            }
            const u = n({});
            async function E() {
                const t = await i();
                t.code === 0 ? u.value = t.data : p.$toast(t.message)
            }
            const b = n(null);
            async function $() {
                const t = await q();
                t.code === 0 ? b.value = t.data : p.$toast(t.message)
            }
            window.serviceTimer = null;
            const w = n(null),
                a = n(0),
                f = n(0);

            function N() {
                a.value = p.$common.getServerTime().getTime(), f.value = new Date().getTime(), window.serviceTimer && clearInterval(window.serviceTimer), window.serviceTimer = setInterval(() => {
                    a.value = a.value + 1e3, f.value = f.value + 1e3, w.value = Q(a.value)
                }, 1e3)
            }

            function Q(t) {
                const c = new Date(t),
                    H = c.getFullYear();
                let I = c.getMonth() + 1,
                    T = c.getDate(),
                    S = c.getHours(),
                    l = c.getMinutes(),
                    y = c.getSeconds();
                return I < 10 && (I = `0${I}`), T < 10 && (T = `0${T}`), S < 10 && (S = `0${S}`), l < 10 && (l = `0${l}`), y < 10 && (y = `0${y}`), `${I}-${T}-${H} ${S}:${l}:${y}`
            }
            const V = n({}),
                A = n(!1),
                ee = O(() => h.state.user.siteMsgPopupLock);
            async function te() {
                if (ee.value) return;
                const t = await d({
                    groupKey: "WITHIN_MESSAGE",
                    page: 1,
                    pageSize: 1
                });
                t.code == 0 ? t.data.list.length > 0 && (V.value = t.data.list[0], A.value = !0, h.commit("SET_SITE_MSG_POPUP_LOCK", !0)) : p.$toast(t.message)
            }
            const B = n(!1);
            async function z() {
                await Promise.all([te(), N(), L(), E(), $(), R()]).finally(() => {
                    B.value = !1
                })
            }

            function ae() {
                z()
            }
            return (t, c) => {
                const H = P("MainHeader"),
                    I = P("LevelInfo"),
                    T = P("NoticePopup"),
                    S = P("PageScroll");
                return _(), re(S, {
                    footerShow: !0,
                    refresh: B.value,
                    "onUpdate:refresh": c[2] || (c[2] = l => B.value = l),
                    onRefresh: z,
                    onReady: ae
                }, {
                    header: D(() => [C(H, {
                        title: t.$t("title.doc1")
                    }, {
                        default: D(() => [e("div", {
                            class: "header-right",
                            onClick: c[0] || (c[0] = l => v(x).push("/quantify/record"))
                        }, s(t.$t("title.doc33")), 1)]),
                        _: 1
                    }, 8, ["title"])]),
                    popop: D(() => {
                        var l, y, G;
                        return [C(T, {
                            show: A.value,
                            "onUpdate:show": c[1] || (c[1] = se => A.value = se),
                            title: (l = V.value) == null ? void 0 : l.title,
                            desc: (y = V.value) == null ? void 0 : y.richText,
                            time: (G = V.value) == null ? void 0 : G.date,
                            countdown: !0
                        }, null, 8, ["show", "title", "desc", "time"])]
                    }),
                    default: D(() => {
                        var l;
                        return [e("div", Ue, [e("div", je, [e("div", ze, s(t.$t("title.doc1")), 1), C(Re, {
                            info: m.value,
                            incomeInfo: u.value,
                            time: w.value,
                            rate: (l = M.value) == null ? void 0 : l.rate
                        }, null, 8, ["info", "incomeInfo", "time", "rate"]), C(Oe, {
                            localTimestamp: f.value,
                            onChanges: L
                        }, null, 8, ["localTimestamp"])]), C(I, {
                            info: b.value,
                            levelshow: !0
                        }, null, 8, ["info"])])]
                    }),
                    _: 1
                }, 8, ["refresh"])
            }
        }
    },
    ut = U(Ge, [
        ["__scopeId", "data-v-5a91a60a"]
    ]);
export {
    ut as
    default
};
