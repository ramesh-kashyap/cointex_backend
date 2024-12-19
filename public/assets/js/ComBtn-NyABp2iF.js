import {
    _ as a
} from "./index-CrXrt6Gs.js";
import {
    m as e,
    q as i,
    t as n,
    v as r,
    x as m,
    y as s
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
const p = {
        __name: "ComBtn",
        props: {
            text: String,
            loading: Boolean,
            loadingText: String,
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            return (d, l) => {
                const o = e("van-button");
                return i(), n(o, {
                    class: "com-btn",
                    disabled: t.disabled,
                    loading: t.loading
                }, {
                    default: r(() => [m(s(t.text), 1)]),
                    _: 1
                }, 8, ["disabled", "loading"])
            }
        }
    },
    q = a(p, [
        ["__scopeId", "data-v-359df9df"]
    ]);
export {
    q as
    default
};
