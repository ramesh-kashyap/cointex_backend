import {
    g as h,
    c as S,
    r as g,
    m as w,
    N as $,
    q as N,
    A as x,
    D as s,
    J as r,
    O as C,
    M as d,
    y as l,
    j as V,
    v as b,
    x as D,
    E,
    G as I
} from "./vant-3s7b3naM.js";
import {
    _ as T,
    a as k
} from "./index-CrXrt6Gs.js";
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
const B = n => (E("data-v-c7332cfe"), n = n(), I(), n),
    M = {
        class: "inp-con"
    },
    j = {
        class: "inp"
    },
    q = ["placeholder"],
    A = {
        class: "count-down"
    },
    F = B(() => s("var", null, "s", -1)),
    G = {
        __name: "EmailVerify",
        props: {
            accountType: [String, Number],
            type: [String, Number],
            email: [String, Number],
            code: [String, Number]
        },
        emits: ["update:code"],
        setup(n, {
            emit: m
        }) {
            const {
                _sendCode: u
            } = k, {
                proxy: t
            } = h(), i = n, v = m, p = S({
                get() {
                    return i.code
                },
                set(a) {
                    v("update:code", a)
                }
            }), o = g(0);
            async function _() {
                if (!t.$validator.isEmail(i.email)) {
                    t.$toast(t.$t("email.doc11"));
                    return
                }
                const a = {
                    accountType: i.accountType,
                    account: i.email,
                    type: i.type
                };
                o.value = 6e4;
                const e = await u(a);
                e.code == 0 ? t.$toast(t.$t("email.doc12")) : (t.$toast(e.message), o.value = 0)
            }
            return (a, e) => {
                const f = w("van-count-down"),
                    y = $("no-space");
                return N(), x("div", M, [s("div", j, [r(s("input", {
                    type: "text",
                    placeholder: a.$t("email.doc6"),
                    "onUpdate:modelValue": e[0] || (e[0] = c => p.value = c)
                }, null, 8, q), [
                    [y],
                    [C, p.value]
                ]), r(s("div", {
                    class: "code-btn",
                    onClick: _
                }, l(a.$t("email.doc7")), 513), [
                    [d, o.value === 0]
                ]), r(s("div", A, [V(f, {
                    ref: "countDown",
                    time: o.value,
                    format: "ss",
                    onFinish: e[1] || (e[1] = c => o.value = 0)
                }, {
                    default: b(c => [s("span", null, [D(l(c.seconds), 1), F])]),
                    _: 1
                }, 8, ["time"])], 512), [
                    [d, o.value > 0]
                ])])])
            }
        }
    },
    te = T(G, [
        ["__scopeId", "data-v-c7332cfe"]
    ]);
export {
    te as
    default
};
