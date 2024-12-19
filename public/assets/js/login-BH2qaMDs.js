import {
    u as g
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as w,
    a as h
} from "./index-WOgA1gKg.js";
import {
    g as C,
    r as p,
    m as i,
    q as P,
    t as b,
    v as y,
    D as o,
    y as d,
    j as l
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
const B = {
        class: "title_container title_heand"
    },
    x = {
        class: "container"
    },
    I = {
        class: "boxs"
    },
    S = {
        class: "box"
    },
    k = {
        class: "title"
    },
    U = {
        class: "box"
    },
    D = {
        class: "title"
    },
    N = {
        class: "bot"
    },
    R = {
        __name: "login",
        setup(V) {
            const {
                _loginPsdUpdate: u
            } = h, m = g(), {
                proxy: s
            } = C(), e = p(""), a = p("");
            async function _() {
                if (!s.$validator.isPsd(e.value)) {
                    s.$toast(s.$t("user.doc26"));
                    return
                }
                if (e.value !== a.value) {
                    s.$toast(s.$t("user.doc27"));
                    return
                }
                const t = await u({
                    password: s.$crypt.mdPsd(e.value)
                });
                s.$toast(t.message), t.code == 0 && (m.go(-1), v())
            }

            function v() {
                e.value = "", a.value = ""
            }
            return (t, n) => {
                const c = i("PsdInp"),
                    f = i("ComBtn"),
                    $ = i("PageScroll");
                return P(), b($, {
                    type: "inside",
                    bgColor: "#fff",
                    title: t.$t("title.doc12")
                }, {
                    default: y(() => [o("div", B, d(t.$t("title.doc12")), 1), o("div", x, [o("div", I, [o("div", S, [o("div", k, d(t.$t("user.doc34")), 1), l(c, {
                        password: e.value,
                        "onUpdate:password": n[0] || (n[0] = r => e.value = r)
                    }, null, 8, ["password"])]), o("div", U, [o("div", D, d(t.$t("user.doc15")), 1), l(c, {
                        password: a.value,
                        "onUpdate:password": n[1] || (n[1] = r => a.value = r),
                        place: t.$t("user.doc16")
                    }, null, 8, ["password", "place"])]), o("div", N, [l(f, {
                        class: "on",
                        text: t.$t("common.doc3"),
                        onClick: _
                    }, null, 8, ["text"])])])])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    W = w(R, [
        ["__scopeId", "data-v-e0faf047"]
    ]);
export {
    W as
    default
};
