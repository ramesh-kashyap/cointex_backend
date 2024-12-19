import {
    c as m,
    r as k,
    m as u,
    N as I,
    q as n,
    A as r,
    D as t,
    x as p,
    F as i,
    y as N,
    j as d,
    J as b,
    O as D
} from "./vant-3s7b3naM.js";
import {
    u as P
} from "./vuex-MbEfqX8_.js";
import {
    _ as S
} from "./index-CIhV0COS.js";
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
const V = {
        class: "inp-con"
    },
    A = {
        class: "inp"
    },
    B = ["placeholder"],
    C = {
        __name: "PhoneInp",
        props: {
            account: [Number, String]
        },
        emits: ["update:account"],
        setup(v, {
            emit: _
        }) {
            const f = P(),
                c = m(() => f.state.global.areaId),
                h = v,
                w = _,
                l = m({
                    get() {
                        return h.account
                    },
                    set(a) {
                        w("update:account", a)
                    }
                }),
                s = k(!1);
            return (a, e) => {
                const y = u("van-icon"),
                    x = u("AreaPopup"),
                    g = I("number-only");
                return n(), r(i, null, [t("div", V, [t("div", A, [t("div", {
                    class: "set_area",
                    onClick: e[0] || (e[0] = o => s.value = !0)
                }, [p(" + "), c.value ? (n(), r(i, {
                    key: 0
                }, [p(N(c.value), 1)], 64)) : (n(), r(i, {
                    key: 1
                }, [p("--")], 64)), d(y, {
                    name: "arrow-down",
                    class: "icon"
                })]), b(t("input", {
                    type: "text",
                    placeholder: a.$t("user.doc4"),
                    "onUpdate:modelValue": e[1] || (e[1] = o => l.value = o)
                }, null, 8, B), [
                    [D, l.value],
                    [g]
                ])])]), d(x, {
                    show: s.value,
                    "onUpdate:show": e[2] || (e[2] = o => s.value = o)
                }, null, 8, ["show"])], 64)
            }
        }
    },
    Q = S(C, [
        ["__scopeId", "data-v-3976fdc1"]
    ]);
export {
    Q as
    default
};
