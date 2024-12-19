import {
    _ as j
} from "./icon_copy-BwRkM0m9.js";
import {
    _ as B,
    a as q
} from "./index-CrXrt6Gs.js";
import {
    g as U,
    m as u,
    q as _,
    A as y,
    F as w,
    H as x,
    D as t,
    j as h,
    x as z,
    y as s,
    u as S,
    r as i,
    t as D,
    v as g
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
const H = {
        class: "list"
    },
    G = {
        class: "item-top"
    },
    J = {
        class: "right"
    },
    K = {
        class: "name"
    },
    M = {
        class: "time"
    },
    O = ["onClick"],
    Q = {
        class: "item-bot"
    },
    W = {
        class: "item-child"
    },
    X = {
        class: "name"
    },
    Y = {
        class: "val"
    },
    Z = {
        class: "item-child"
    },
    tt = {
        class: "name"
    },
    et = {
        class: "val"
    },
    st = {
        class: "item-child"
    },
    ot = {
        class: "name"
    },
    at = {
        class: "val"
    },
    nt = {
        class: "item-child"
    },
    it = {
        class: "name"
    },
    lt = {
        class: "val"
    },
    ct = {
        class: "item-child"
    },
    dt = {
        class: "name"
    },
    rt = {
        class: "val"
    },
    ut = {
        class: "item-child"
    },
    _t = {
        class: "name"
    },
    vt = {
        class: "val"
    },
    mt = {
        __name: "List",
        props: {
            list: Array
        },
        setup(T) {
            const {
                proxy: p
            } = U(), {
                decal: c
            } = p.$math;

            function C(o) {
                p.$common.copy(o)
            }
            return (o, v) => {
                const d = u("ComImage");
                return _(), y("div", H, [(_(!0), y(w, null, x(T.list, e => (_(), y("div", {
                    class: "item",
                    key: e.id
                }, [t("div", G, [h(d, {
                    class: "avatar",
                    src: e.avatar
                }, null, 8, ["src"]), t("div", J, [t("div", K, [z(s(e.account), 1), t("span", null, "ï¼ˆID: " + s(e.userId) + "ï¼‰ ", 1)]), t("div", M, s(e.registerTime), 1)]), t("img", {
                    class: "copy-btn",
                    src: j,
                    onClick: r => C(e.userId)
                }, null, 8, O)]), t("div", Q, [t("div", W, [t("div", X, s(o.$t("team.doc28")), 1), t("div", Y, s(e.todayUseCount) + "/" + s(e.todayCount), 1)]), t("div", Z, [t("div", tt, s(o.$t("team.doc29")), 1), t("div", et, s(e.rechargeAmount) + " USDT", 1)]), t("div", st, [t("div", ot, s(o.$t("team.doc30")), 1), t("div", at, s(e.withdrawAmount) + " USDT", 1)]), t("div", nt, [t("div", it, s(o.$t("team.doc31")), 1), t("div", lt, s(e.effectiveTeamCount) + "/" + s(e.teamCount), 1)]), t("div", ct, [t("div", dt, s(o.$t("team.doc32")), 1), t("div", rt, s(S(c)(e.total, 4)), 1)]), t("div", ut, [t("div", _t, s(o.$t("team.doc33")), 1), t("div", vt, s(S(c)(e.incomeAmount, 4)), 1)])])]))), 128))])
            }
        }
    },
    ht = B(mt, [
        ["__scopeId", "data-v-74600836"]
    ]),
    pt = {
        class: "tabs-con container"
    },
    ft = {
        class: "title_heand"
    },
    gt = {
        __name: "index",
        setup(T) {
            const {
                _getTeamList: p
            } = q, {
                proxy: c
            } = U(), C = i([{
                title: c.$t("team.doc25", {
                    n: 1
                }),
                name: 1
            }, {
                title: c.$t("team.doc25", {
                    n: 2
                }),
                name: 2
            }, {
                title: c.$t("team.doc25", {
                    n: 3
                }),
                name: 3
            }]), o = i([]), v = i(!1), d = i(!1), e = i(!1), r = i(!1), f = i(0), m = i(1);

            function A(a) {
                if (e.value) return !1;
                if (m.value !== a) return m.value = a, document.documentElement.scrollTop = 0, document.body.scrollTop = document.documentElement.scrollTop = 0, L(), !0
            }

            function F() {
                r.value = !0, f.value = 1, I()
            }

            function k() {
                e.value || d.value || (v.value = !0, f.value++, I())
            }
            const R = i("");
            async function I() {
                e.value = !0;
                const a = await p({
                    userId: R.value,
                    generations: m.value,
                    page: f.value,
                    pageSize: 10
                }).finally(() => {
                    e.value = !1
                });
                if (a.code == 0) {
                    r.value && (o.value = [], r.value = !1);
                    const l = a.data.list;
                    o.value.push(...l), v.value = !1;
                    const {
                        index: $,
                        totalPage: b
                    } = a.data.page;
                    d.value = $ >= b
                } else c.$toast(a.message)
            }

            function L() {
                d.value = !1, o.value = [], f.value = 0, k()
            }

            function E() {
                L()
            }
            return (a, l) => {
                const $ = u("van-tab"),
                    b = u("van-tabs"),
                    N = u("ComSticky"),
                    P = u("ComList"),
                    V = u("PageScroll");
                return _(), D(V, {
                    type: "inside",
                    bgColor: "#FFF",
                    title: a.$t("title.doc22"),
                    onReady: E
                }, {
                    default: g(() => [h(N, null, {
                        default: g(() => [t("div", pt, [t("div", ft, s(a.$t("title.doc22")), 1), h(b, {
                            color: "#DB9C00",
                            background: "none",
                            "swipe-threshold": "1",
                            active: m.value,
                            "onUpdate:active": l[0] || (l[0] = n => m.value = n),
                            "before-change": A
                        }, {
                            default: g(() => [(_(!0), y(w, null, x(C.value, n => (_(), D($, {
                                title: n.title,
                                name: n.name,
                                key: n.name
                            }, null, 8, ["title", "name"]))), 128))]),
                            _: 1
                        }, 8, ["active"])])]),
                        _: 1
                    }), h(P, {
                        class: "container",
                        finishedText: a.$t("load.no_more"),
                        finished: d.value,
                        check: !1,
                        list: o.value,
                        refreshing: r.value,
                        "onUpdate:refreshing": l[1] || (l[1] = n => r.value = n),
                        loading: v.value,
                        "onUpdate:loading": l[2] || (l[2] = n => v.value = n),
                        onLoad: k,
                        onRefresh: F
                    }, {
                        default: g(() => [h(ht, {
                            list: o.value
                        }, null, 8, ["list"])]),
                        _: 1
                    }, 8, ["finishedText", "finished", "list", "refreshing", "loading"])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Rt = B(gt, [
        ["__scopeId", "data-v-6ebc7169"]
    ]);
export {
    Rt as
    default
};
