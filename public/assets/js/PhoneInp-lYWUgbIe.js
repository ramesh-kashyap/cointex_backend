import {c as m, r as x, q as u, O as I, t as n, v as r, C as t, N as p, F as i, D as N, j as d, J as P, P as b} from "./vant-CKdp23cx.js";
import {u as D} from "./vuex-Bs0GV8-d.js";
import {_ as S} from "./index-H65jKJPy.js";
import "./vuei18n-CuXg3buO.js";
import "./corejs-C4iS2aBk.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./vuerouter-CVr71rqU.js";
import "./axios-Cm0UX6qg.js";
import "./cryptojs-BILcvZe1.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const V = {
    class: "inp-con"
}
  , B = {
    class: "inp"
}
  , C = ["placeholder"]
  , A = {
    __name: "PhoneInp",
    props: {
        account: [Number, String]
    },
    emits: ["update:account"],
    setup(v, {emit: _}) {
        const f = D()
          , c = m(()=>f.state.global.areaId)
          , h = v
          , w = _
          , l = m({
            get() {
                return h.account
            },
            set(a) {
                w("update:account", a)
            }
        })
          , s = x(!1);
        return (a,e)=>{
            const y = u("van-icon")
              , g = u("AreaPopup")
              , k = I("number-only");
            return n(),
            r(i, null, [t("div", V, [t("div", B, [t("div", {
                class: "set_area",
                onClick: e[0] || (e[0] = o=>s.value = !0)
            }, [p(" + "), c.value ? (n(),
            r(i, {
                key: 0
            }, [p(N(c.value), 1)], 64)) : (n(),
            r(i, {
                key: 1
            }, [p("--")], 64)), d(y, {
                name: "arrow-down",
                class: "icon"
            })]), P(t("input", {
                type: "text",
                placeholder: a.$t("user.doc4"),
                "onUpdate:modelValue": e[1] || (e[1] = o=>l.value = o)
            }, null, 8, C), [[b, l.value], [k]])])]), d(g, {
                show: s.value,
                "onUpdate:show": e[2] || (e[2] = o=>s.value = o)
            }, null, 8, ["show"])], 64)
        }
    }
}
  , Q = S(A, [["__scopeId", "data-v-3976fdc1"]]);
export {Q as default};
