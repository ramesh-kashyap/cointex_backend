import {
    _ as f
} from "./icon_copy-BwRkM0m9.js";
import {
    u as C
} from "./vuex-MbEfqX8_.js";
import {
    _ as $
} from "./index-CrXrt6Gs.js";
import {
    g as y,
    c as b,
    r,
    m as _,
    q as x,
    t as B,
    v as D,
    D as t,
    y as s,
    j as S,
    E as k,
    G as I
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
const w = "/assets/bg-BBx5Cgsb.png",
    R = "/assets/in_logo-DZl4eLgV.png",
    p = e => (k("data-v-19974f11"), e = e(), I(), e),
    U = {
        class: "container"
    },
    V = {
        class: "title_heand"
    },
    q = {
        class: "code-box"
    },
    L = p(() => t("img", {
        class: "bg",
        src: w
    }, null, -1)),
    N = {
        class: "content"
    },
    P = p(() => t("div", {
        class: "top_img"
    }, [t("img", {
        src: R
    })], -1)),
    j = {
        class: "qr-con"
    },
    E = {
        class: "code-con"
    },
    G = {
        class: "left"
    },
    H = {
        class: "title"
    },
    M = {
        class: "code"
    },
    Q = {
        class: "right"
    },
    T = {
        class: "url-box"
    },
    Z = {
        class: "box-title"
    },
    z = {
        class: "url"
    },
    A = {
        __name: "index",
        setup(e) {
            const m = C(),
                {
                    proxy: l
                } = y(),
                c = b(() => m.state.user.userData),
                i = r("http://"),
                a = r(null);

            function v() {
                i.value = `${location.origin}/user/reg?inviteCode=${c.value.inviteCode}`, a.value.innerHTML = "", l.$common.QRCode({
                    dom: a.value,
                    text: i.value,
                    width: 130,
                    height: 130
                })
            }

            function d(o) {
                l.$common.copy(o)
            }
            return (o, n) => {
                const u = _("ComBtn"),
                    h = _("PageScroll");
                return x(), B(h, {
                    type: "inside",
                    title: o.$t("title.doc25"),
                    onReady: v
                }, {
                    default: D(() => [t("div", U, [t("div", V, s(o.$t("title.doc25")), 1), t("div", q, [L, t("div", N, [P, t("p", null, s(o.$t("invite.doc13")), 1), t("div", j, [t("div", {
                        ref_key: "inviteUrlDom",
                        ref: a
                    }, null, 512)]), t("div", E, [t("div", G, [t("div", H, s(o.$t("invite.doc14")), 1), t("div", M, s(c.value.inviteCode), 1)]), t("div", Q, [t("img", {
                        class: "code-btn",
                        src: f,
                        onClick: n[0] || (n[0] = g => d(c.value.inviteCode))
                    })])])])]), t("div", T, [t("div", Z, s(o.$t("invite.doc11")), 1), t("div", z, s(i.value), 1)]), S(u, {
                        class: "on url-btn",
                        onClick: n[1] || (n[1] = g => d(i.value)),
                        text: o.$t("invite.doc12")
                    }, null, 8, ["text"])])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    dt = $(A, [
        ["__scopeId", "data-v-19974f11"]
    ]);
export {
    dt as
    default
};
