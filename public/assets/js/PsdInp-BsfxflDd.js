import {
    c as m,
    r as u,
    N as v,
    q as _,
    A as f,
    D as s,
    J as w,
    aC as x,
    x as g,
    u as i
} from "./vant-3s7b3naM.js";
import {
    e as y,
    a as h
} from "./eye_close-DJdVF6pM.js";
import {
    _ as D
} from "./index-WOgA1gKg.js";
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
const P = {
        class: "inp-con"
    },
    k = {
        class: "inp"
    },
    B = ["type", "placeholder"],
    C = {
        class: "icon"
    },
    I = ["src"],
    N = {
        __name: "PsdInp",
        props: {
            password: String,
            place: String
        },
        emits: ["update:password"],
        setup(o, {
            emit: n
        }) {
            const c = o,
                d = n,
                r = m({
                    get() {
                        return c.password
                    },
                    set(a) {
                        d("update:password", a)
                    }
                }),
                e = u("password");
            return (a, t) => {
                const l = v("no-space");
                return _(), f("div", P, [s("div", k, [w(s("input", {
                    type: e.value,
                    "onUpdate:modelValue": t[0] || (t[0] = p => r.value = p),
                    placeholder: o.place ? o.place : a.$t("user.doc6")
                }, null, 8, B), [
                    [x, r.value],
                    [l]
                ]), s("div", C, [g(" ã€€"), s("img", {
                    src: e.value === "text" ? i(y) : i(h),
                    onClick: t[1] || (t[1] = p => e.value = e.value === "text" ? "password" : "text")
                }, null, 8, I)])])])
            }
        }
    },
    H = D(N, [
        ["__scopeId", "data-v-0a0a182e"]
    ]);
export {
    H as
    default
};
