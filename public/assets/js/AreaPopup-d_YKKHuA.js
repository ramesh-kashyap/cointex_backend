import {
    c as w,
    r as A,
    w as L,
    m as u,
    N as R,
    q as _,
    t as G,
    v as M,
    D as a,
    x as U,
    y as h,
    j as f,
    J as p,
    O as T,
    M as g,
    A as S,
    F as j,
    H as F,
    E as N,
    G as Q
} from "./vant-3s7b3naM.js";
import {
    u as W
} from "./vuex-MbEfqX8_.js";
import {
    _ as $,
    a as J
} from "./index-BR72YH-E.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
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
const O = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAC7u7u6urq6urq7u7u8vLy6urq6urq6urq6urq6urq6urq8vLy4uLi/v7/BwcG7u7u8vLy6urriFnokAAAAEnRSTlMAYvn0mgnq4sjHiWlXJBgtS0m6ntQCAAAAt0lEQVQ4y4VTWxKEIAwrCMjLV+9/2F11p7WrTvLhRFIoKS0pYg85eZ9y6JHumMLAgiFMZBGrZwNfzSlz4RvKrPoy8gPGRfarbiPmX/7CLyjnPSq/oh7+PL/C726Dur8RDkRR/jZqJ2m0SmikLpyI3E7cl8iufsnQ9ohTb5ccWfghueOja5kS2wircyJj0v3r7GEATAEvCW3iQmmpVy31pqVGjwWfGzUMbDnUtLDt8eDg0cPDC8f/A+zNMG9Uvh0nAAAAAElFTkSuQmCC",
    E = r => (N("data-v-ea2d01ac"), r = r(), Q(), r),
    z = {
        class: "popup-con"
    },
    K = {
        class: "popup-title"
    },
    Z = {
        class: "search-con"
    },
    H = E(() => a("div", {
        class: "ico"
    }, null, -1)),
    X = ["placeholder"],
    Y = E(() => a("img", {
        src: O
    }, null, -1)),
    oo = [Y],
    eo = {
        class: "list"
    },
    to = ["onClick"],
    so = {
        class: "ico"
    },
    ao = {
        class: "txt"
    },
    no = {
        __name: "AreaPopup",
        props: {
            show: Boolean
        },
        emits: ["update:show"],
        setup(r, {
            emit: x
        }) {
            const {
                _getCountryList: P
            } = J, y = W(), k = r, q = x, C = w(() => y.state.global.countryList), l = w({
                get() {
                    return k.show
                },
                set(e) {
                    q("update:show", e)
                }
            }), n = A(""), i = A([]), c = A([]);
            L(() => C.value, async e => {
                e.length === 0 && await P(), I(C.value)
            }, {
                immediate: !0
            });

            function I(e) {
                const o = e.filter((t, m, d) => m === d.findIndex(v => v.mobilePrefix === t.mobilePrefix));
                c.value = o, i.value = o, i.value.forEach(t => {
                    t.codename = t.name + t.mobilePrefix
                })
            }
            L(() => n.value, b);

            function b() {
                c.value = n.value !== "" ? V(n.value) : i.value
            }

            function V(e) {
                let o = [];
                for (let t = 0; t < i.value.length; t++) i.value[t].codename.indexOf(e) >= 0 && o.push(i.value[t]);
                return o
            }

            function B(e) {
                l.value = !1, y.commit("SET_AREAID", e)
            }
            return (e, o) => {
                const t = u("van-icon"),
                    m = u("ListEmpty"),
                    d = u("ComImage"),
                    v = u("van-popup"),
                    D = R("no-space");
                return _(), G(v, {
                    show: l.value,
                    "onUpdate:show": o[3] || (o[3] = s => l.value = s),
                    position: "bottom",
                    round: ""
                }, {
                    default: M(() => [a("div", z, [a("div", K, [U(h(e.$t("user.doc28")) + " ", 1), a("div", {
                        class: "cross",
                        onClick: o[0] || (o[0] = s => l.value = !1)
                    }, [f(t, {
                        name: "cross"
                    })])]), a("div", Z, [H, p(a("input", {
                        class: "inp",
                        type: "text",
                        placeholder: e.$t("common.doc4"),
                        "onUpdate:modelValue": o[1] || (o[1] = s => n.value = s)
                    }, null, 8, X), [
                        [T, n.value],
                        [D]
                    ]), p(a("div", {
                        class: "closes",
                        onClick: o[2] || (o[2] = s => n.value = "")
                    }, oo, 512), [
                        [g, n.value != ""]
                    ])]), a("div", eo, [p(f(m, {
                        desc: e.$t("user.doc29")
                    }, null, 8, ["desc"]), [
                        [g, c.value.length === 0]
                    ]), (_(!0), S(j, null, F(c.value, s => (_(), S("div", {
                        class: "item",
                        key: s.mobilePrefix,
                        onClick: io => B(s.mobilePrefix)
                    }, [p(a("div", so, [f(d, {
                        class: "img",
                        src: s.iconUrl
                    }, null, 8, ["src"])], 512), [
                        [g, s.iconUrl]
                    ]), a("div", ao, h(s.name) + "ï¼ˆ+" + h(s.mobilePrefix) + "ï¼‰", 1)], 8, to))), 128))])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    },
    Lo = $(no, [
        ["__scopeId", "data-v-ea2d01ac"]
    ]);
export {
    Lo as
    default
};
