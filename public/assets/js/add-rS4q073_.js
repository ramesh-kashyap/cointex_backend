import {
    g as C,
    r as p,
    c as D,
    m as n,
    N as I,
    q as V,
    t as w,
    v as B,
    D as t,
    y as i,
    J as m,
    O as u,
    j as _,
    x as E,
    E as N,
    G as T
} from "./vant-3s7b3naM.js";
import {
    _ as U
} from "./icon_tips-BV3W61Vo.js";
import {
    u as k
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as P,
    a as j
} from "./index-CrXrt6Gs.js";
import {
    u as q
} from "./vuex-MbEfqX8_.js";
import "./vuei18n-CA58nVJV.js";
import "./corejs-C4iS2aBk.js";
import "./cryptojs-BILcvZe1.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./axios-Cm0UX6qg.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const G = l => (N("data-v-8ad3dd38"), l = l(), T(), l),
    J = {
        class: "container"
    },
    M = {
        class: "title_heand"
    },
    O = {
        class: "boxs"
    },
    R = {
        class: "box"
    },
    z = {
        class: "title"
    },
    A = {
        class: "inp-con"
    },
    F = {
        class: "box"
    },
    H = {
        class: "title"
    },
    K = {
        class: "inp-con"
    },
    L = ["placeholder"],
    Q = {
        class: "box"
    },
    W = {
        class: "title"
    },
    X = {
        class: "tips"
    },
    Y = {
        class: "tip-title"
    },
    Z = G(() => t("img", {
        src: U
    }, null, -1)),
    tt = {
        class: "tip-desc"
    },
    ot = {
        class: "bot"
    },
    et = {
        __name: "add",
        setup(l) {
            const {
                _getUserData: v,
                _addEmail: h
            } = j, {
                proxy: e
            } = C(), f = q(), $ = k(), s = p(""), r = D(() => f.state.user.userData), c = p("");
            async function y() {
                if (e.$validator.isEmail(s.value)) {
                    if (!c.value) {
                        e.$toast(e.$t("email.doc6"));
                        return
                    }
                } else {
                    e.$toast(e.$t("email.doc11"));
                    return
                }
                const o = await h({
                    accountType: 1,
                    account: s.value,
                    code: c.value
                });
                o.code == 0 && (s.value = "", c.value = "", v(), $.go("-1")), e.$toast(o.message)
            }
            return (o, a) => {
                const g = n("EmailVerify"),
                    S = n("ComBtn"),
                    b = n("PageScroll"),
                    x = I("no-space");
                return V(), w(b, {
                    csShow: !0,
                    type: "inside",
                    bgColor: "#fff",
                    title: o.$t("title.doc39")
                }, {
                    default: B(() => [t("div", J, [t("div", M, i(o.$t("title.doc40")), 1), t("div", O, [t("div", R, [t("div", z, i(o.$t("profile.doc1")), 1), t("div", A, [m(t("input", {
                        class: "inp",
                        type: "text",
                        readonly: "",
                        "onUpdate:modelValue": a[0] || (a[0] = d => r.value.userId = d)
                    }, null, 512), [
                        [u, r.value.userId]
                    ])])]), t("div", F, [t("div", H, i(o.$t("email.doc3")), 1), t("div", K, [m(t("input", {
                        class: "inp",
                        type: "text",
                        placeholder: o.$t("email.doc5"),
                        "onUpdate:modelValue": a[1] || (a[1] = d => s.value = d)
                    }, null, 8, L), [
                        [x],
                        [u, s.value]
                    ])])]), t("div", Q, [t("div", W, i(o.$t("email.doc4")), 1), _(g, {
                        email: s.value,
                        accountType: 1,
                        type: 5,
                        code: c.value,
                        "onUpdate:code": a[2] || (a[2] = d => c.value = d)
                    }, null, 8, ["email", "code"])]), t("div", X, [t("div", Y, [Z, E(" " + i(o.$t("common.doc23")), 1)]), t("div", tt, i(o.$t("email.doc10")), 1)]), t("div", ot, [_(S, {
                        class: "on",
                        text: o.$t("common.doc3"),
                        onClick: y
                    }, null, 8, ["text"])])])])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    yt = P(et, [
        ["__scopeId", "data-v-8ad3dd38"]
    ]);
export {
    yt as
    default
};
