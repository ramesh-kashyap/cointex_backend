import {
    u as g
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as D
} from "./index-CrXrt6Gs.js";
import {
    g as k,
    r as V,
    m as a,
    q as c,
    t as x,
    v as r,
    D as o,
    y as i,
    j as d,
    A as y,
    H as $,
    F as w
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
const C = {
        class: "container"
    },
    S = {
        class: "title_heand"
    },
    b = {
        class: "box"
    },
    N = ["onClick"],
    B = {
        class: "flex"
    },
    U = {
        class: "flex1"
    },
    R = {
        class: "str"
    },
    T = {
        class: "go"
    },
    F = {
        class: "container"
    },
    I = {
        __name: "index",
        setup(P) {
            const {
                proxy: l
            } = k(), _ = g(), p = [{
                name: l.$t("wallet.doc38"),
                cid: "USDT"
            }, {
                name: l.$t("wallet.doc39"),
                cid: "VND"
            }], s = V("USDT");

            function m() {
                let t = "";
                s.value === "USDT" ? t = "/wallet/deposit" : s.value === "VND" && (t = "/wallet/deposit_VND"), _.push(t)
            }

            function u() {}
            return (t, n) => {
                const v = a("van-radio"),
                    f = a("van-radio-group"),
                    h = a("PageScroll");
                return c(), x(h, {
                    type: "inside",
                    title: t.$t("title.doc11"),
                    onReady: u
                }, {
                    default: r(() => [o("div", C, [o("div", S, i(t.$t("wallet.doc41")), 1), o("div", b, [d(f, {
                        modelValue: s.value,
                        "onUpdate:modelValue": n[0] || (n[0] = e => s.value = e)
                    }, {
                        default: r(() => [(c(), y(w, null, $(p, e => o("div", {
                            class: "it",
                            key: e.cid,
                            onClick: j => s.value = e.cid
                        }, [o("div", B, [o("div", U, i(e.name), 1), o("div", R, [d(v, {
                            name: e.cid,
                            "checked-color": "#000"
                        }, null, 8, ["name"])])])], 8, N)), 64))]),
                        _: 1
                    }, 8, ["modelValue"])])]), o("div", T, [o("div", F, [o("button", {
                        class: "btn2",
                        onClick: n[1] || (n[1] = e => m())
                    }, i(t.$t("common.doc3")), 1)])])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    Z = D(I, [
        ["__scopeId", "data-v-05e814bd"]
    ]);
export {
    Z as
    default
};
