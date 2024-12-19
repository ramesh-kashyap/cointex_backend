import {
    a as p
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as l,
    a as m
} from "./index-WOgA1gKg.js";
import {
    g as _,
    r as d,
    m as f,
    q as u,
    t as g,
    v,
    D as e,
    y
} from "./vant-3s7b3naM.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
import "./vuex-MbEfqX8_.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./axios-Cm0UX6qg.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const x = {
        class: "container"
    },
    h = ["innerHTML"],
    C = {
        __name: "index",
        setup(B) {
            const {
                _getArticleDetail: a
            } = m, {
                proxy: s
            } = _(), r = p(), o = d([]);
            async function n() {
                const t = await a(r.query);
                t.code == 0 ? o.value = t.data : s.$toast(t.message)
            }

            function i() {
                n()
            }
            return (t, D) => {
                const c = f("PageScroll");
                return u(), g(c, {
                    type: "inside",
                    bgColor: "#fff",
                    onReady: i
                }, {
                    default: v(() => [e("div", x, [e("h1", null, y(o.value.title), 1), e("div", {
                        class: "desc",
                        innerHTML: o.value.description
                    }, null, 8, h)])]),
                    _: 1
                })
            }
        }
    },
    $ = l(C, [
        ["__scopeId", "data-v-4bfacc78"]
    ]);
export {
    $ as
    default
};
