import {
    _ as F,
    c as st,
    a as nt
} from "./index-CIhV0COS.js";
import {
    u as E
} from "./vuerouter-7dy5tY0D.js";
import {
    g as L,
    c as H,
    m as I,
    q as b,
    A as w,
    D as t,
    y as e,
    x as S,
    j as y,
    u as g,
    I as it,
    F as A,
    w as W,
    n as J,
    r as m,
    H as ct,
    t as dt,
    v as x
} from "./vant-3s7b3naM.js";
import "./index-DTz0zoMQ.js";
import {
    i as K
} from "./echartsCharts-RcjN-jxb.js";
import {
    u as lt
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
const rt = {
        class: "box"
    },
    mt = {
        class: "total"
    },
    ut = {
        class: "total-head"
    },
    vt = {
        class: "title"
    },
    ht = {
        class: "total-con"
    },
    _t = {
        class: "item"
    },
    $t = {
        class: "val"
    },
    ft = {
        class: "name"
    },
    yt = {
        class: "item"
    },
    pt = {
        class: "val"
    },
    gt = {
        class: "name"
    },
    Ct = {
        class: "card"
    },
    bt = {
        class: "name"
    },
    Dt = {
        __name: "TeamStatistics",
        props: {
            info: Object,
            dayList: Array,
            days: Number,
            rate: [Number, String]
        },
        emits: ["tab"],
        setup(d, {
            emit: h
        }) {
            const C = E(),
                {
                    proxy: u
                } = L(),
                {
                    decal: f
                } = u.$math,
                o = d,
                _ = h,
                r = H(() => {
                    try {
                        return o.dayList.find(i => i.value === o.days).text
                    } catch {
                        return "--"
                    }
                });
            return (i, s) => {
                const p = I("van-icon");
                return b(), w("div", rt, [t("div", mt, [t("div", ut, [t("div", vt, e(i.$t("team.doc1")), 1), t("div", {
                    class: "time",
                    onClick: s[0] || (s[0] = c => _("tab"))
                }, [S(e(r.value), 1), y(p, {
                    name: "play",
                    class: "icon"
                })])]), t("div", ht, [t("div", _t, [t("div", $t, e(d.info.teamCount), 1), t("div", ft, e(i.$t("team.doc2")), 1)]), t("div", yt, [t("div", pt, e(g(f)(d.info.incomeAmount, 4)), 1), t("div", gt, e(i.$t("team.doc3")), 1)])])]), t("div", Ct, [t("div", bt, e(i.$t("team.doc4")), 1), t("div", {
                    class: it(["val", {
                        on: d.rate && Number(d.rate) > 0
                    }]),
                    onClick: s[1] || (s[1] = c => g(C).push("/cards?type=2"))
                }, [d.rate && Number(d.rate) > 0 ? (b(), w(A, {
                    key: 0
                }, [S(e(i.$t("card.doc12", {
                    n: `${d.rate*100}%`
                })), 1)], 64)) : (b(), w(A, {
                    key: 1
                }, [S(e(i.$t("card.doc13")), 1)], 64)), y(p, {
                    name: "arrow",
                    color: "#0C0C0C"
                })], 2)])])
            }
        }
    },
    wt = F(Dt, [
        ["__scopeId", "data-v-d0749d68"]
    ]),
    It = {
        class: "top-head"
    },
    kt = {
        class: "title"
    },
    Tt = {
        class: "team-income"
    },
    St = {
        class: "income-top"
    },
    At = {
        class: "chart-dom"
    },
    xt = {
        class: "income-center"
    },
    Ft = {
        class: "num"
    },
    Lt = {
        class: "income-bot"
    },
    Nt = {
        class: "item"
    },
    Rt = {
        class: "val"
    },
    Pt = {
        class: "name"
    },
    Bt = {
        class: "item"
    },
    Gt = {
        class: "val"
    },
    Et = {
        class: "name"
    },
    Ht = {
        class: "item"
    },
    Ot = {
        class: "val"
    },
    Ut = {
        class: "name"
    },
    Vt = {
        __name: "TeamIncome",
        props: {
            incomeData: Array,
            teamData: Object,
            dayList: Array,
            days: Number
        },
        emits: ["tab"],
        setup(d, {
            emit: h
        }) {
            const C = E(),
                {
                    proxy: u
                } = L(),
                {
                    decal: f
                } = u.$math,
                o = d,
                _ = h,
                r = H(() => {
                    try {
                        return o.dayList.find(c => c.value === o.days).text
                    } catch {
                        return "--"
                    }
                });
            W(() => o.incomeData, c => {
                J(() => {
                    p()
                })
            }, {
                immediate: !0
            });
            const i = m(null);
            let s = null;

            function p() {
                s && s.dispose(), s = K(i.value);
                const c = {
                    color: ["#6296FB", "#C5E24F", "#FFA72C"],
                    tooltip: {
                        trigger: "item",
                        backgroundColor: "rgba(0, 0, 0, 0.80)",
                        borderRadius: 8,
                        padding: 12,
                        border: "none",
                        confine: !0,
                        formatter: $ => {
                            const {
                                name: n,
                                value: l
                            } = $;
                            return `${n}: ${l}`
                        },
                        textStyle: {
                            width: 100,
                            height: 80,
                            color: "#fff"
                        }
                    },
                    legend: {
                        orient: "vertical",
                        top: "15%",
                        right: 0,
                        textStyle: {
                            width: 100,
                            height: 80,
                            color: "#1D2631",
                            overflow: "breakAll"
                        }
                    },
                    series: [{
                        type: "pie",
                        top: 0,
                        radius: "90%",
                        center: ["25%", "50%"],
                        label: {
                            show: !1,
                            position: "center"
                        },
                        data: o.incomeData
                    }]
                };
                c && s.setOption(c)
            }
            return (c, $) => {
                const n = I("van-icon");
                return b(), w(A, null, [t("div", It, [t("div", kt, e(c.$t("team.doc5")), 1), t("div", {
                    class: "time",
                    onClick: $[0] || ($[0] = l => _("tab"))
                }, [S(e(r.value), 1), y(n, {
                    name: "play",
                    class: "icon"
                })])]), t("div", Tt, [t("div", St, [t("div", At, [t("div", {
                    ref_key: "incomeChartDom",
                    ref: i,
                    style: {
                        width: "100%",
                        height: "3rem"
                    }
                }, null, 512)])]), t("div", xt, [t("div", Ft, [S(e(c.$t("team.doc9")) + ": ", 1), t("div", null, e(d.teamData.teamCount), 1)]), t("div", {
                    class: "path",
                    onClick: $[1] || ($[1] = l => g(C).push("/team/list"))
                }, e(c.$t("team.doc10")), 1)]), t("div", Lt, [t("div", Nt, [t("div", Rt, e(g(f)(d.teamData.incomeAmount, 4)), 1), t("div", Pt, e(c.$t("team.doc11")), 1)]), t("div", Bt, [t("div", Gt, e(g(f)(d.teamData.rechargeAmount, 4)), 1), t("div", Et, e(c.$t("team.doc12")), 1)]), t("div", Ht, [t("div", Ot, e(g(f)(d.teamData.withdrawAmount, 4)), 1), t("div", Ut, e(c.$t("team.doc13")), 1)])])])], 64)
            }
        }
    },
    jt = F(Vt, [
        ["__scopeId", "data-v-55773a97"]
    ]),
    zt = {
        class: "title_top"
    },
    Mt = {
        class: "team-generations"
    },
    qt = {
        class: "generations-chart"
    },
    Qt = {
        class: "generations-data"
    },
    Wt = {
        class: "title"
    },
    Jt = {
        class: "data-list"
    },
    Kt = {
        class: "tr-title"
    },
    Xt = {
        class: "tr-con"
    },
    Yt = {
        class: "td"
    },
    Zt = {
        class: "val effective"
    },
    te = {
        class: "name"
    },
    ee = {
        class: "td"
    },
    ae = {
        class: "val"
    },
    oe = {
        class: "name"
    },
    se = {
        class: "td"
    },
    ne = {
        class: "val"
    },
    ie = {
        class: "name"
    },
    ce = {
        __name: "TeamGenerations",
        props: {
            list: Array
        },
        setup(d) {
            const {
                proxy: h
            } = L(), {
                decal: C
            } = h.$math, u = d;
            W(() => u.list, r => {
                J(i => {
                    _()
                })
            }, {
                immediate: !0
            });
            const f = m(null);
            let o = null;

            function _() {
                var p, c, $;
                const r = u.list.map(n => ({
                    name: h.$t("team.doc25", {
                        n: n.generations
                    }),
                    value: [n.teamCount, n.effectiveCount, C(n.myIncome, 4)]
                }));
                o && o.dispose(), o = K(f.value);
                const i = [{
                        name: h.$t("team.doc9"),
                        max: u.list.reduce((n, l) => l.teamCount > n ? l.teamCount : n, (p = u.list[0]) == null ? void 0 : p.teamCount)
                    }, {
                        name: h.$t("team.doc20"),
                        max: u.list.reduce((n, l) => l.effectiveCount > n ? l.effectiveCount : n, (c = u.list[0]) == null ? void 0 : c.effectiveCount)
                    }, {
                        name: h.$t("team.doc11"),
                        max: u.list.reduce((n, l) => Number(l.myIncome) > n ? Number(l.myIncome) : n, Number(($ = u.list[0]) == null ? void 0 : $.myIncome))
                    }],
                    s = {
                        color: ["#6296FB", "#C5E24F", "#FFA72C"],
                        radar: {
                            indicator: i,
                            radius: 75,
                            center: ["50%", "75%"],
                            axisNameGap: 10,
                            axisLabel: {
                                fontSize: 12,
                                color: "#000"
                            }
                        },
                        tooltip: {
                            trigger: "item",
                            backgroundColor: "rgba(0, 0, 0, 0.80)",
                            borderRadius: 16,
                            padding: 12,
                            border: "none",
                            confine: !0,
                            formatter: n => {
                                const {
                                    name: l,
                                    value: D
                                } = n;
                                return `${l}: <br/>
        ${i[0].name}: ${D[0]}<br/>
        ${i[1].name}: ${D[1]}<br/>
        ${i[2].name}: ${D[2]}`
                            },
                            textStyle: {
                                width: 100,
                                height: 80,
                                color: "#fff"
                            }
                        },
                        legend: {
                            top: 0,
                            left: 0,
                            padding: 10,
                            backgroundColor: "#F5F5F5",
                            borderRadius: 5,
                            itemWidth: 14,
                            itemHeigh: 12,
                            textStyle: {
                                width: 100,
                                height: 80,
                                color: "#848E9C",
                                overflow: "truncate"
                            }
                        },
                        series: [{
                            type: "radar",
                            data: r,
                            areaStyle: {
                                opacity: .5
                            }
                        }]
                    };
                s && o.setOption(s)
            }
            return (r, i) => (b(), w(A, null, [t("div", zt, e(r.$t("team.doc19")), 1), t("div", Mt, [t("div", qt, [t("div", {
                ref_key: "generationsChartDom",
                ref: f,
                style: {
                    width: "100%",
                    height: "4.6rem"
                }
            }, null, 512)]), t("div", Qt, [t("div", Wt, e(r.$t("team.doc26")), 1), t("div", Jt, [(b(!0), w(A, null, ct(d.list, s => (b(), w("div", {
                class: "tr",
                key: s.id
            }, [t("div", Kt, e(r.$t("team.doc25", {
                n: s.generations
            })), 1), t("div", Xt, [t("div", Yt, [t("div", Zt, e(s.effectiveCount) + "/" + e(s.teamCount), 1), t("div", te, e(r.$t("team.doc20")), 1)]), t("div", ee, [t("div", ae, e(s.commissionRate) + "%", 1), t("div", oe, e(r.$t("team.doc27")), 1)]), t("div", se, [t("div", ne, e(g(C)(s.myIncome, 4)), 1), t("div", ie, e(r.$t("team.doc11")), 1)])])]))), 128))])])])], 64))
        }
    },
    de = F(ce, [
        ["__scopeId", "data-v-6e0a804a"]
    ]),
    le = ["src"],
    re = {
        class: "team container"
    },
    me = {
        class: "title_heand"
    },
    ue = {
        __name: "index",
        setup(d) {
            const {
                _getTeamData: h,
                _getIncomeData: C,
                _getGenerationsData: u,
                _getSpeedPackageView: f
            } = nt, {
                proxy: o
            } = L(), {
                decal: _
            } = o.$math, r = E(), i = lt(), s = m([{
                text: o.$t("common.doc7"),
                value: 0
            }, {
                text: o.$t("common.doc27"),
                value: 1
            }, {
                text: o.$t("common.doc28"),
                value: 7
            }, {
                text: o.$t("common.doc29"),
                value: 30
            }, {
                text: o.$t("common.doc30"),
                value: 60
            }]), p = H(() => i.getters.unReadCount), c = m(0), $ = m(0), n = m([]), l = m(!1), D = m(1), O = m([]);

            function X(a) {
                D.value = a, U()
            }
            async function U() {
                const a = await C({
                    days: D.value
                });
                if (a.code == 0) {
                    const {
                        taskIncome: v,
                        quantifyIncome: B,
                        recommendQuantifyIncome: G
                    } = a.data;
                    O.value = [{
                        name: o.$t("team.doc16"),
                        value: _(v, 2)
                    }, {
                        name: o.$t("team.doc17"),
                        value: _(B, 2)
                    }, {
                        name: o.$t("team.doc18"),
                        value: _(G, 2)
                    }]
                }
            }
            const V = m({});
            async function Y() {
                const a = await h({
                    days: 0
                });
                a.code === 0 ? V.value = a.data : o.$toast(a.message)
            }
            async function Z() {
                const a = await u({
                    generations: ""
                });
                a.code == 0 && (n.value = a.data, c.value = _(o.$math.add(o.$math.add(a.data[0].totalIncome, a.data[1].totalIncome), a.data[2].totalIncome), 2), $.value = _(o.$math.add(o.$math.add(a.data[0].todayIncome, a.data[1].todayIncome), a.data[2].todayIncome), 2))
            }
            const N = m(!1),
                R = m(1),
                j = m({});

            function tt(a) {
                R.value = a, z()
            }
            async function z() {
                const a = await h({
                    days: R.value
                });
                a.code === 0 ? j.value = a.data : o.$toast(a.message)
            }
            const M = m({});
            async function et() {
                const a = await f({
                    speedPackageType: 2
                });
                a.code === 0 && (M.value = a.data)
            }
            const P = m(!1);
            async function q() {
                await Promise.all([z(), U(), Z(), Y(), et()]).finally(() => {
                    P.value = !1
                })
            }

            function at() {
                q()
            }
            return (a, v) => {
                const B = I("van-badge"),
                    G = I("MainHeader"),
                    Q = I("ComPicker"),
                    ot = I("PageScroll");
                return b(), dt(ot, {
                    footerShow: !0,
                    refresh: P.value,
                    "onUpdate:refresh": v[5] || (v[5] = k => P.value = k),
                    onRefresh: q,
                    onReady: at
                }, {
                    header: x(() => [y(G, {
                        title: a.$t("title.doc21")
                    }, {
                        default: x(() => [t("div", {
                            class: "header-right",
                            onClick: v[0] || (v[0] = k => g(r).push("/information"))
                        }, [y(B, {
                            content: p.value,
                            max: "99",
                            "show-zero": !1
                        }, {
                            default: x(() => [t("img", {
                                src: g(st)
                            }, null, 8, le)]),
                            _: 1
                        }, 8, ["content"])])]),
                        _: 1
                    }, 8, ["title"])]),
                    default: x(() => {
                        var k;
                        return [t("div", re, [t("div", me, e(a.$t("title.doc21")), 1), y(wt, {
                            info: j.value,
                            dayList: s.value,
                            days: R.value,
                            rate: (k = M.value) == null ? void 0 : k.rate,
                            onTab: v[1] || (v[1] = T => N.value = !0)
                        }, null, 8, ["info", "dayList", "days", "rate"]), y(jt, {
                            incomeData: O.value,
                            teamData: V.value,
                            dayList: s.value,
                            days: D.value,
                            onTab: v[2] || (v[2] = T => l.value = !0)
                        }, null, 8, ["incomeData", "teamData", "dayList", "days"]), y(de, {
                            list: n.value
                        }, null, 8, ["list"])]), y(Q, {
                            title: "",
                            columns: s.value,
                            show: N.value,
                            "onUpdate:show": v[3] || (v[3] = T => N.value = T),
                            onConfirm: tt
                        }, null, 8, ["columns", "show"]), y(Q, {
                            title: "",
                            columns: s.value,
                            show: l.value,
                            "onUpdate:show": v[4] || (v[4] = T => l.value = T),
                            onConfirm: X
                        }, null, 8, ["columns", "show"])]
                    }),
                    _: 1
                }, 8, ["refresh"])
            }
        }
    },
    xe = F(ue, [
        ["__scopeId", "data-v-c6ff3471"]
    ]);
export {
    xe as
    default
};
