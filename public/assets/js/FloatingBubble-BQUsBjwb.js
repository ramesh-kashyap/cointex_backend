import {_ as E} from "./index-H65jKJPy.js";
import {c as w, r as o, o as y, a as _, t as x, v as L, aA as b, aB as S} from "./vant-CKdp23cx.js";
import "./vuei18n-CuXg3buO.js";
import "./corejs-C4iS2aBk.js";
import "./qrcodejs2fix-CnmRM6Pf.js";
import "./vueclipboard3-C7DdPEQF.js";
import "./uaParserJs-QZjeYS1Z.js";
import "./vuex-Bs0GV8-d.js";
import "./vuerouter-CVr71rqU.js";
import "./axios-Cm0UX6qg.js";
import "./cryptojs-BILcvZe1.js";
import "./swiper-C1TWdcvt.js";
import "./bignumberjs-DOH-f-tm.js";
import "./validator-DnYg83Z5.js";
import "./vanttouchemulator-Cv_in60N.js";
const B = {
    __name: "FloatingBubble",
    props: {
        init: Object
    },
    setup(g) {
        const n = g
          , s = w(()=>parseFloat(getComputedStyle(document.documentElement).fontSize))
          , m = o(null)
          , c = o(!1)
          , u = o({
            x: 0,
            y: 0
        })
          , i = o({
            x: 0,
            y: 0
        })
          , t = o(0)
          , a = o(0)
          , d = o(0)
          , v = o(0)
          , p = w(()=>{
            let e = v.value / s.value;
            return t.value + e < n.init.top ? e = n.init.top - t.value : a.value && t.value + e > a.value && (e = a.value - t.value),
            e
        }
        );
        function h(e) {
            a.value = window.innerHeight / s.value - m.value.clientHeight / s.value - n.init.top,
            c.value = !0,
            u.value = f(e),
            i.value = u.value
        }
        function l(e) {
            c.value && ((!e.touches || e.touches.length <= 0) && e.preventDefault(),
            i.value = f(e),
            i.value.x - u.value.x,
            v.value = i.value.y - u.value.y)
        }
        function r() {
            c.value = !1,
            t.value = t.value + p.value,
            v.value = 0
        }
        function f(e) {
            return e.touches && e.touches.length > 0 ? {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            } : {
                x: e.clientX,
                y: e.clientY
            }
        }
        return y(()=>{
            t.value = n.init.top,
            d.value = n.init.right,
            window.addEventListener("mousemove", l),
            window.addEventListener("mouseup", r),
            window.addEventListener("touchmove", l),
            window.addEventListener("touchend", r)
        }
        ),
        _(()=>{
            window.removeEventListener("mousemove", l),
            window.removeEventListener("mouseup", r),
            window.removeEventListener("touchmove", l),
            window.removeEventListener("touchend", r)
        }
        ),
        (e,D)=>(x(),
        L("div", {
            class: "touch-move-con",
            onMousedown: h,
            onTouchstart: h,
            ref_key: "touchDom",
            ref: m,
            style: S({
                top: `${t.value + p.value}rem`,
                right: `${d.value}rem`
            })
        }, [b(e.$slots, "default", {}, void 0, !0)], 36))
    }
}
  , U = E(B, [["__scopeId", "data-v-8b363259"]]);
export {U as default};
