import {
    a as c
} from "./index-CrXrt6Gs.js";
import {
    g as m,
    r as p,
    m as o,
    q as f,
    t as _,
    v as d,
    D as u,
    y as g,
    j as v
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
const y = {
        class: "title_container title_heand",
        style: {
            "margin-bottom": "0rem"
        }
    },
    q = {
        __name: "index",
        setup(I) {
            const {
                _getLevelInfo: n
            } = c, {
                proxy: a
            } = m(), e = p(null);
            async function i() {
                const t = await n();
                t.code === 0 ? e.value = t.data : a.$toast(t.message)
            }

            function r() {
                i()
            }
            return (t, h) => {
                const s = o("LevelInfo"),
                    l = o("PageScroll");
                return f(), _(l, {
                    type: "inside",
                    title: t.$t("title.doc47"),
                    onReady: r
                }, {
                    default: d(() => [u("div", y, g(t.$t("title.doc47")), 1), v(s, {
                        info: e.value
                    }, null, 8, ["info"])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    };
export {
    q as
    default
};
