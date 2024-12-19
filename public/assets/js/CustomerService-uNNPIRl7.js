import {
    u as p
} from "./vuex-MbEfqX8_.js";
import {
    _ as m,
    a as l
} from "./index-BR72YH-E.js";
import {
    c as a,
    r as n,
    o as u,
    q as _,
    A as d,
    z as f,
    E as v,
    G as h,
    D as S
} from "./vant-3s7b3naM.js";
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
const C = "/assets/ico_cs-BzR3ulVw.png",
    g = e => (v("data-v-a1dcde29"), e = e(), h(), e),
    k = g(() => S("img", {
        src: C
    }, null, -1)),
    U = [k],
    B = {
        __name: "CustomerService",
        setup(e) {
            const {
                _getH5Url: s
            } = l, t = p(), c = a(() => t.state.global.h5Url), r = a(() => t.getters.CSUrl), o = n(!1);
            async function i() {
                o.value || (o.value = !0, s().finally(() => {
                    o.value = !1
                }), t.dispatch("getCustomerService"))
            }
            return u(() => {
                c.value.length === 0 && s()
            }), (I, x) => r.value !== "/" && r.value !== "" ? (_(), d("div", {
                key: 0,
                class: "customer-service",
                onClick: i
            }, U)) : f("", !0)
        }
    },
    j = m(B, [
        ["__scopeId", "data-v-a1dcde29"]
    ]);
export {
    j as
    default
};
