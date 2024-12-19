import {
    c as i,
    r as g,
    m as l,
    N as y,
    q as I,
    A as N,
    D as o,
    x as S,
    J as r,
    M as c,
    y as b,
    j as u,
    O as D,
    F as P
} from "./vant-3s7b3naM.js";
import {
    u as V
} from "./vuex-MbEfqX8_.js";
import {
    _ as k
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
const A = {
        class: "inp-con"
    },
    B = {
        class: "inp"
    },
    C = ["placeholder"],
    F = {
        __name: "PhoneInp",
        props: {
            account: [Number, String]
        },
        emits: ["update:account"],
        setup(m, {
            emit: d
        }) {
            const v = V(),
                a = i(() => v.state.global.areaId),
                _ = m,
                h = d,
                p = i({
                    get() {
                        return _.account
                    },
                    set(n) {
                        h("update:account", n)
                    }
                }),
                s = g(!1);
            return (n, e) => {
                const f = l("van-icon"),
                    w = l("AreaPopup"),
                    x = y("number-only");
                return I(), N(P, null, [o("div", A, [o("div", B, [o("div", {
                    class: "set_area",
                    onClick: e[0] || (e[0] = t => s.value = !0)
                }, [S(" + "), r(o("span", null, b(a.value), 513), [
                    [c, a.value]
                ]), r(o("span", null, "--", 512), [
                    [c, !a.value]
                ]), u(f, {
                    name: "arrow-down",
                    class: "icon"
                })]), r(o("input", {
                    type: "text",
                    placeholder: n.$t("user.doc4"),
                    "onUpdate:modelValue": e[1] || (e[1] = t => p.value = t)
                }, null, 8, C), [
                    [D, p.value],
                    [x]
                ])])]), u(w, {
                    show: s.value,
                    "onUpdate:show": e[2] || (e[2] = t => s.value = t)
                }, null, 8, ["show"])], 64)
            }
        }
    },
    R = k(F, [
        ["__scopeId", "data-v-2728c827"]
    ]);
export {
    R as
    default
};
