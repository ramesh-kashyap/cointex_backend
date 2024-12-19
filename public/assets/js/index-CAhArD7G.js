import {
    A as j
} from "./swiper-C1TWdcvt.js";
import {
    _ as L,
    a as q
} from "./index-CrXrt6Gs.js";
import {
    r as i,
    m as C,
    q as t,
    A as o,
    j as m,
    v as y,
    F as T,
    H as S,
    t as V,
    D as a,
    u as D,
    y as n,
    z as E,
    x as G,
    g as H,
    c as M,
    I as P,
    E as J,
    G as Q
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
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const W = {
        class: "swiper-con"
    },
    X = ["onClick"],
    Y = ["src"],
    Z = {
        __name: "TaskSwiper",
        props: {
            list: Array
        },
        setup(r) {
            let h = i([j]),
                f = i({
                    delay: 3e3,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0,
                    reverseDirection: !1
                });

            function d(u) {
                window.location.href = u
            }
            return (u, g) => {
                const e = C("swiper-slide"),
                    p = C("swiper");
                return t(), o("div", W, [m(p, {
                    class: "swiper",
                    modules: D(h),
                    autoplay: D(f)
                }, {
                    default: y(() => [(t(!0), o(T, null, S(r.list, c => (t(), V(e, {
                        key: c.id
                    }, {
                        default: y(() => [a("div", {
                            class: "item",
                            onClick: l => d(c.forwardPath)
                        }, [a("img", {
                            class: "img",
                            src: c.imgUrl
                        }, null, 8, Y)], 8, X)]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 8, ["modules", "autoplay"])])
            }
        }
    },
    ee = L(Z, [
        ["__scopeId", "data-v-d938818c"]
    ]),
    se = {
        class: "list"
    },
    te = {
        class: "item-top"
    },
    ae = {
        class: "left"
    },
    oe = {
        class: "title"
    },
    ne = {
        class: "right"
    },
    le = {
        key: 0,
        class: "btn completed"
    },
    ie = {
        key: 1,
        class: "btn processing"
    },
    ce = ["onClick"],
    re = ["onClick"],
    de = {
        key: 0,
        class: "item-bot"
    },
    ue = {
        class: "progress"
    },
    pe = {
        class: "num"
    },
    ve = {
        key: 0
    },
    _e = {
        key: 1
    },
    fe = {
        __name: "TaskList",
        props: {
            list: Array,
            type: Number
        },
        emits: ["receive"],
        setup(r, {
            emit: h
        }) {
            const f = h;
            return (d, u) => {
                const g = C("van-progress");
                return t(), o("div", se, [(t(!0), o(T, null, S(r.list, e => (t(), o("div", {
                    class: "item",
                    key: e.id
                }, [a("div", te, [a("div", ae, [a("div", oe, n(e.name), 1), a("p", null, n(e.description), 1)]), a("div", ne, [e.hasComplete && !e.hasReceive ? (t(), o("span", le, n(d.$t("task.doc5")), 1)) : !e.hasComplete && !e.hasReceive ? (t(), o("span", ie, n(d.$t("task.doc3")), 1)) : e.canReceiveCount > 0 && e.type === 1 ? (t(), o("span", {
                    key: 2,
                    class: "btn pending",
                    onClick: p => f("receive", e.taskId)
                }, n(d.$t("task.doc6")), 9, ce)) : e.hasReceive && e.type === 2 ? (t(), o("span", {
                    key: 3,
                    class: "btn pending",
                    onClick: p => f("receive", e.taskId)
                }, n(d.$t("task.doc7")), 9, re)) : E("", !0)])]), (!e.hasComplete || e.hasReceive) && e.effectiveCount > 0 && e.type === 2 ? (t(), o("div", de, [a("div", ue, [m(g, {
                    "stroke-width": "0.16rem",
                    color: "#DCFD52",
                    "track-color": "#000",
                    "show-pivot": !1,
                    percentage: 1 / parseInt(e.effectiveCount) * parseInt(e.firstRechargeReachCount) * 100
                }, null, 8, ["percentage"])]), a("div", pe, [e.firstRechargeReachCount > e.effectiveCount ? (t(), o("span", ve, n(e.effectiveCount), 1)) : (t(), o("span", _e, n(e.firstRechargeReachCount), 1)), G(" /" + n(e.effectiveCount), 1)])])) : E("", !0)]))), 128))])
            }
        }
    },
    he = L(fe, [
        ["__scopeId", "data-v-d3d46c3f"]
    ]),
    ge = r => (J("data-v-6a9399e1"), r = r(), Q(), r),
    ke = ge(() => a("div", {
        class: "bg"
    }, null, -1)),
    me = {
        class: "task-page"
    },
    ye = {
        class: "title_heand"
    },
    Ce = {
        class: "task-list-con"
    },
    $e = {
        class: "tabs"
    },
    Re = ["onClick"],
    we = {
        __name: "index",
        setup(r) {
            const {
                _getAdsList: h,
                _getTaskList: f,
                _taskReceive: d
            } = q, {
                proxy: u
            } = H(), g = i([]);
            async function e() {
                const s = await h({
                    positionKey: "TASK_CENTER"
                });
                s.code === 0 && (g.value = s.data)
            }
            const p = i(2),
                c = i([{
                    name: u.$t("task.doc1"),
                    type: 2
                }, {
                    name: u.$t("task.doc2"),
                    type: 1
                }]),
                l = M(() => c.value.findIndex(s => s.type === p.value));
            async function F(s) {
                const v = await d({
                    taskId: s
                });
                v.code == 0 && A(), u.$toast(v.message)
            }

            function O(s) {
                p.value = s, B()
            }
            const $ = i([]),
                R = i(!1),
                w = i(!1),
                I = i(!1),
                k = i(!1);

            function A() {
                k.value = !0, N()
            }

            function x() {
                I.value || w.value || (R.value = !0, N())
            }
            async function N() {
                I.value = !0;
                const s = await f({
                    type: p.value
                }).finally(() => {
                    I.value = !1
                });
                s.code == 0 ? (k.value && (k.value = !1), $.value = s.data, R.value = !1, w.value = !0) : u.$toast(s.message)
            }

            function B() {
                w.value = !1, $.value = [], x()
            }

            function U() {
                e(), B()
            }
            return (s, v) => {
                const z = C("ComList"),
                    K = C("PageScroll");
                return t(), V(K, {
                    type: "inside",
                    title: s.$t("title.doc35"),
                    onReady: U
                }, {
                    bg: y(() => [ke]),
                    default: y(() => [a("div", me, [a("div", ye, n(s.$t("title.doc35")), 1), m(ee, {
                        list: g.value
                    }, null, 8, ["list"]), a("div", Ce, [a("div", $e, [(t(!0), o(T, null, S(c.value, (_, b) => (t(), o("div", {
                        class: P(["tab", {
                            first: l.value === 0 && b === l.value,
                            last: l.value === c.value.length - 1 && b === l.value,
                            on: b === l.value && l.value !== 0 && l.value !== c.value.length - 1
                        }]),
                        key: _.type,
                        onClick: Ie => O(_.type)
                    }, [a("span", null, n(_.name), 1)], 10, Re))), 128))]), a("div", {
                        class: P(["task-con", {
                            first: l.value === 0,
                            last: l.value === c.value.length - 1
                        }])
                    }, [m(z, {
                        finishedText: s.$t("load.no_more"),
                        finished: w.value,
                        check: !1,
                        list: $.value,
                        refreshing: k.value,
                        "onUpdate:refreshing": v[0] || (v[0] = _ => k.value = _),
                        loading: R.value,
                        "onUpdate:loading": v[1] || (v[1] = _ => R.value = _),
                        onLoad: x,
                        onRefresh: A
                    }, {
                        default: y(() => [m(he, {
                            list: $.value,
                            onReceive: F
                        }, null, 8, ["list"])]),
                        _: 1
                    }, 8, ["finishedText", "finished", "list", "refreshing", "loading"])], 2)])])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    ze = L(we, [
        ["__scopeId", "data-v-6a9399e1"]
    ]);
export {
    ze as
    default
};
