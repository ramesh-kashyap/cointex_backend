import {
    _ as n
} from "./index-BR72YH-E.js";
import {
    c as i,
    m as d,
    q as l,
    t as u,
    v as _,
    ay as k
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
const h = {
        __name: "ComCheckbox",
        props: {
            checked: Boolean
        },
        emits: ["update:checked"],
        setup(r, {
            emit: c
        }) {
            const m = r,
                p = c,
                o = i({
                    get() {
                        return m.checked
                    },
                    set(e) {
                        p("update:checked", e)
                    }
                });
            return (e, t) => {
                const a = d("van-checkbox");
                return l(), u(a, {
                    modelValue: o.value,
                    "onUpdate:modelValue": t[0] || (t[0] = s => o.value = s),
                    shape: "square",
                    "icon-size": "0.36rem",
                    "checked-color": "#222222"
                }, {
                    default: _(() => [k(e.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 8, ["modelValue"])
            }
        }
    },
    $ = n(h, [
        ["__scopeId", "data-v-3db4245c"]
    ]);
export {
    $ as
    default
};
