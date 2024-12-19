import {
    _ as s,
    i as a
} from "./index-CrXrt6Gs.js";
import {
    i as c
} from "./icon_back_white-Fd3ZFuzm.js";
import {
    u as n
} from "./vuerouter-7dy5tY0D.js";
import {
    q as p,
    A as m,
    D as t,
    u as o
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
const d = {
        class: "inside-header"
    },
    l = {
        class: "left"
    },
    _ = ["src"],
    u = {
        __name: "InsideHeader",
        props: {
            title: String,
            type: {
                type: String,
                default: "black"
            }
        },
        setup(r) {
            const i = n();
            return (f, e) => (p(), m("div", d, [t("div", l, [t("div", {
                onClick: e[0] || (e[0] = k => o(i).go(-1)),
                class: "back"
            }, [t("img", {
                src: r.type === "white" ? o(c) : o(a),
                class: "icon"
            }, null, 8, _)])])]))
        }
    },
    E = s(u, [
        ["__scopeId", "data-v-54adc729"]
    ]);
export {
    E as
    default
};
