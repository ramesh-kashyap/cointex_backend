import {
    _ as x
} from "./index-CIhV0COS.js";
import {
    c as f,
    r as k,
    m as a,
    q as i,
    t as c,
    v as l,
    j as T,
    A as B,
    F as L,
    x as S,
    y as V,
    ay as C
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
const R = {
        __name: "ComList",
        props: {
            list: Array,
            successText: String,
            finishedText: String,
            emptyText: String,
            finished: {
                type: Boolean,
                default: !1
            },
            check: {
                type: Boolean,
                default: !1
            },
            loading: {
                type: Boolean,
                default: !1
            },
            refreshing: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:refreshing", "update:loading", "refresh", "load"],
        setup(e, {
            emit: u
        }) {
            const r = e,
                o = u,
                d = f({
                    get() {
                        return r.loading
                    },
                    set(n) {
                        o("update:loading", n)
                    }
                }),
                m = f({
                    get() {
                        return r.refreshing
                    },
                    set(n) {
                        o("update:refreshing", n)
                    }
                });

            function p() {
                o("refresh")
            }
            const h = k(null);
            return (n, s) => {
                const g = a("ListEmpty"),
                    v = a("van-list"),
                    y = a("van-pull-refresh");
                return i(), c(y, {
                    class: "van-refresh-com",
                    modelValue: m.value,
                    "onUpdate:modelValue": s[2] || (s[2] = t => m.value = t),
                    "success-text": e.successText ? e.successText : "",
                    onRefresh: p,
                    "head-height": "100",
                    ref_key: "vanPullRefreshDom",
                    ref: h
                }, {
                    default: l(() => [T(v, {
                        class: "van-list",
                        loading: d.value,
                        "onUpdate:loading": s[0] || (s[0] = t => d.value = t),
                        finished: e.finished,
                        onLoad: s[1] || (s[1] = t => o("load")),
                        "immediate-check": e.check
                    }, {
                        finished: l(() => {
                            var t;
                            return [((t = e.list) == null ? void 0 : t.length) > 0 ? (i(), B(L, {
                                key: 0
                            }, [S(V(e.finishedText), 1)], 64)) : (i(), c(g, {
                                key: 1,
                                desc: e.emptyText
                            }, null, 8, ["desc"]))]
                        }),
                        default: l(() => [C(n.$slots, "default", {}, void 0, !0)]),
                        _: 3
                    }, 8, ["loading", "finished", "immediate-check"])]),
                    _: 3
                }, 8, ["modelValue", "success-text"])
            }
        }
    },
    G = x(R, [
        ["__scopeId", "data-v-24f31d9d"]
    ]);
export {
    G as
    default
};
