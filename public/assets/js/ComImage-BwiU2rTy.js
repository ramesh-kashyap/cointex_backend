import {
    _ as i
} from "./index-CrXrt6Gs.js";
import {
    m as c,
    q as m,
    A as p,
    j as n,
    v as t,
    E as _,
    G as l,
    D as r
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
const s = "/assets/logo-CM020i6D.png",
    e = o => (_("data-v-5f911827"), o = o(), l(), o),
    d = {
        class: "com-image"
    },
    g = e(() => r("img", {
        class: "error",
        src: s
    }, null, -1)),
    f = e(() => r("img", {
        class: "error",
        src: s
    }, null, -1)),
    u = {
        __name: "ComImage",
        props: {
            src: String,
            fit: {
                type: String,
                default: "cover"
            }
        },
        setup(o) {
            return (v, h) => {
                const a = c("van-image");
                return m(), p("div", d, [n(a, {
                    class: "image",
                    fit: o.fit,
                    src: o.src
                }, {
                    loading: t(() => [g]),
                    error: t(() => [f]),
                    _: 1
                }, 8, ["fit", "src"])])
            }
        }
    },
    G = i(u, [
        ["__scopeId", "data-v-5f911827"]
    ]);
export {
    G as
    default
};
