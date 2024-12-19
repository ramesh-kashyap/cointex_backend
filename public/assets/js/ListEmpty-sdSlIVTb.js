import {
    _ as o
} from "./index-CIhV0COS.js";
import {
    m as i,
    q as s,
    A as r,
    j as n,
    u as c
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
const a = "/assets/empty-D_AeuTry.png",
    p = {
        class: "empty"
    },
    d = {
        __name: "ListEmpty",
        props: {
            desc: String,
            src: String,
            size: String
        },
        setup(t) {
            return (e, g) => {
                const m = i("van-empty");
                return s(), r("div", p, [n(m, {
                    class: "custom-image",
                    "image-size": t.size ? t.size : "2.2rem",
                    image: t.src ? t.src : c(a),
                    description: t.desc ? t.desc : e.$t("common.doc5")
                }, null, 8, ["image-size", "image", "description"])])
            }
        }
    },
    j = o(d, [
        ["__scopeId", "data-v-e6d916d4"]
    ]);
export {
    j as
    default
};
