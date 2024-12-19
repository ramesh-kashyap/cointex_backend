import {
    g as ae,
    c as N,
    m as b,
    q as k,
    t as te,
    j as y,
    v as J,
    D as e,
    y as o,
    J as _,
    M as g,
    aA as it,
    r as c,
    N as q,
    A as M,
    O as oe,
    x as V,
    E as Oe,
    G as Me,
    aC as ct,
    u as I,
    F as ut,
    H as dt,
    z as Le,
    I as ee
} from "./vant-3s7b3naM.js";
import {
    _ as rt
} from "./icon_tips-BV3W61Vo.js";
import {
    _ as K,
    a as He
} from "./index-BR72YH-E.js";
import {
    e as vt,
    a as mt
} from "./eye_close-DJdVF6pM.js";
import {
    u as pt
} from "./vuex-MbEfqX8_.js";
import {
    u as _t
} from "./vuerouter-7dy5tY0D.js";
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
const ht = {
        class: "popup-con"
    },
    ft = {
        class: "popup-top"
    },
    wt = {
        class: "popup-title"
    },
    $t = {
        class: "popup-center"
    },
    yt = {
        class: "item"
    },
    Nt = {
        class: "n"
    },
    gt = {
        class: "s"
    },
    bt = ["src"],
    St = {
        class: "con"
    },
    Ct = {
        class: "le"
    },
    Tt = {
        class: "ri"
    },
    It = {
        class: "item"
    },
    Ft = {
        class: "n"
    },
    Ut = {
        class: "s"
    },
    Dt = ["src"],
    Pt = {
        class: "con"
    },
    kt = {
        class: "le"
    },
    At = {
        class: "ri"
    },
    Et = {
        class: "con"
    },
    Wt = {
        class: "le"
    },
    Vt = {
        class: "ri"
    },
    xt = {
        class: "popup-bot"
    },
    Bt = {
        __name: "SwitchPopup",
        props: {
            show: Boolean,
            checked: Boolean,
            coinList: Object,
            amount: [String, Number],
            actualFee: [String, Number],
            actualAmount: [String, Number],
            coinPrice: [String, Number],
            configInfo: Object,
            usdtIcon: String,
            withdrawExtraFee: [String, Number]
        },
        emits: ["update:show", "updateShow"],
        setup(i, {
            emit: A
        }) {
            ae();
            const E = i,
                f = A,
                h = N({
                    get() {
                        return E.show
                    },
                    set(v) {
                        f("update:show", v)
                    }
                });

            function l() {
                f("updateShow")
            }
            return (v, m) => {
                const S = b("van-icon"),
                    d = b("ComBtn"),
                    p = b("van-popup");
                return k(), te(it, {
                    to: "body"
                }, [y(p, {
                    show: h.value,
                    "onUpdate:show": m[1] || (m[1] = w => h.value = w),
                    position: "center",
                    style: {
                        "background-color": "transparent"
                    }
                }, {
                    default: J(() => [e("div", ht, [e("div", ft, [e("div", wt, o(v.$t("wallet.doc48")), 1), e("div", {
                        class: "close",
                        onClick: m[0] || (m[0] = w => h.value = !1)
                    }, [y(S, {
                        name: "cross"
                    })])]), e("div", $t, [e("div", yt, [e("div", Nt, o(v.$t("wallet.doc51")), 1), e("div", gt, [e("img", {
                        src: i.coinList.coinIcon
                    }, null, 8, bt), e("span", null, o(i.amount), 1)]), e("div", St, [e("div", Ct, o(v.$t("wallet.doc24")), 1), e("div", Tt, "1:" + o(i.coinPrice) + " " + o(i.coinList.coinName), 1)])]), e("div", It, [e("div", Ft, o(v.$t("wallet.doc47")), 1), e("div", Ut, [_(e("img", {
                        src: i.usdtIcon
                    }, null, 8, Dt), [
                        [g, i.usdtIcon]
                    ]), e("span", null, o(i.actualAmount), 1)]), e("div", Pt, [e("div", kt, o(v.$t("wallet.doc30")), 1), e("div", At, o(i.actualFee) + " USDT", 1)]), e("div", Et, [e("div", Wt, o(v.$t("common.doc40")), 1), e("div", Vt, o(i.withdrawExtraFee) + " USDT", 1)])])]), e("div", xt, [y(d, {
                        class: "on",
                        onClick: l,
                        text: v.$t("common.doc3")
                    }, null, 8, ["text"])])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    },
    Lt = K(Bt, [
        ["__scopeId", "data-v-fc29887d"]
    ]),
    Ot = i => (Oe("data-v-e1c9eb74"), i = i(), Me(), i),
    Mt = {
        class: "inp-con"
    },
    Ht = ["placeholder"],
    Rt = {
        class: "count-down"
    },
    Gt = Ot(() => e("var", null, "s", -1)),
    jt = {
        __name: "WalletEmailVerify",
        props: {
            accountType: [String, Number],
            type: [String, Number],
            email: [String, Number],
            code: [String, Number]
        },
        emits: ["update:code"],
        setup(i, {
            emit: A
        }) {
            const {
                _sendCode: E
            } = He, {
                proxy: f
            } = ae(), h = i, l = A, v = N({
                get() {
                    return h.code
                },
                set(d) {
                    l("update:code", d)
                }
            }), m = c(0);
            async function S() {
                if (!f.$validator.isEmail(h.email)) {
                    f.$toast(f.$t("email.doc11"));
                    return
                }
                const d = {
                    accountType: h.accountType,
                    account: h.email,
                    type: h.type
                };
                m.value = 6e4;
                const p = await E(d);
                p.code == 0 ? f.$toast(f.$t("email.doc12")) : (f.$toast(p.message), m.value = 0)
            }
            return (d, p) => {
                const w = b("van-count-down"),
                    C = q("no-space");
                return k(), M("div", Mt, [_(e("input", {
                    class: "inp",
                    type: "text",
                    placeholder: d.$t("email.doc6"),
                    "onUpdate:modelValue": p[0] || (p[0] = x => v.value = x)
                }, null, 8, Ht), [
                    [C],
                    [oe, v.value]
                ]), _(e("div", {
                    class: "code-btn",
                    onClick: S
                }, o(d.$t("email.doc7")), 513), [
                    [g, m.value === 0]
                ]), _(e("div", Rt, [y(w, {
                    ref: "countDown",
                    time: m.value,
                    format: "ss",
                    onFinish: p[1] || (p[1] = x => m.value = 0)
                }, {
                    default: J(x => [e("span", null, [V(o(x.seconds), 1), Gt])]),
                    _: 1
                }, 8, ["time"])], 512), [
                    [g, m.value > 0]
                ])])
            }
        }
    },
    zt = K(jt, [
        ["__scopeId", "data-v-e1c9eb74"]
    ]),
    Jt = {
        class: "inp-con"
    },
    qt = ["type", "placeholder"],
    Kt = {
        class: "icon"
    },
    Qt = ["src"],
    Xt = {
        __name: "WalletTransferPsdInp",
        props: {
            password: String
        },
        emits: ["update:password"],
        setup(i, {
            emit: A
        }) {
            const E = i,
                f = A,
                h = N({
                    get() {
                        return E.password
                    },
                    set(v) {
                        f("update:password", v)
                    }
                }),
                l = c("password");
            return (v, m) => {
                const S = q("number-only");
                return k(), M("div", Jt, [_(e("input", {
                    class: "inp",
                    type: l.value,
                    "onUpdate:modelValue": m[0] || (m[0] = d => h.value = d),
                    maxlength: "6",
                    placeholder: v.$t("wallet.doc20")
                }, null, 8, qt), [
                    [ct, h.value],
                    [S]
                ]), e("div", Kt, [V(" ã€€"), e("img", {
                    src: l.value === "text" ? I(vt) : I(mt),
                    onClick: m[1] || (m[1] = d => l.value = l.value === "text" ? "password" : "text")
                }, null, 8, Qt)])])
            }
        }
    },
    Yt = K(Xt, [
        ["__scopeId", "data-v-1de95e13"]
    ]),
    se = i => (Oe("data-v-c654d101"), i = i(), Me(), i),
    Zt = {
        class: "container"
    },
    eo = {
        class: "title_heand"
    },
    to = {
        class: "box-con"
    },
    oo = {
        class: "title"
    },
    ao = {
        class: "inp"
    },
    so = {
        class: "box-con"
    },
    no = {
        class: "title"
    },
    lo = {
        class: "inp-con"
    },
    io = {
        key: 0,
        class: "chainName"
    },
    co = ["onClick"],
    uo = {
        class: "box-con"
    },
    ro = {
        class: "title"
    },
    vo = {
        class: "inp-con"
    },
    mo = {
        class: "box-con"
    },
    po = {
        class: "title"
    },
    _o = {
        class: "inp-con"
    },
    ho = ["placeholder"],
    fo = {
        class: "info-con"
    },
    wo = {
        class: "info-item"
    },
    $o = {
        class: "name"
    },
    yo = {
        class: "val balance"
    },
    No = {
        class: "info-item"
    },
    go = {
        class: "name"
    },
    bo = {
        class: "val"
    },
    So = {
        class: ""
    },
    Co = {
        class: "info-item"
    },
    To = {
        class: "name"
    },
    Io = {
        class: "val"
    },
    Fo = {
        class: ""
    },
    Uo = {
        class: "info-item"
    },
    Do = {
        class: "name"
    },
    Po = {
        class: "coinAmount"
    },
    ko = {
        class: "usdtAmount"
    },
    Ao = se(() => e("i", null, "â‰ˆ", -1)),
    Eo = {
        class: "info-item"
    },
    Wo = {
        class: "name"
    },
    Vo = {
        class: "val"
    },
    xo = {
        class: ""
    },
    Bo = {
        class: "info-item"
    },
    Lo = {
        class: "name"
    },
    Oo = {
        class: "coinAmount"
    },
    Mo = {
        class: "usdtAmount"
    },
    Ho = se(() => e("i", null, "â‰ˆ", -1)),
    Ro = {
        class: "tipsTime"
    },
    Go = {
        class: "box-con"
    },
    jo = {
        class: "title"
    },
    zo = {
        class: "box-con"
    },
    Jo = {
        class: "title"
    },
    qo = {
        class: "box-con"
    },
    Ko = {
        class: "title"
    },
    Qo = {
        class: "inp-con"
    },
    Xo = ["placeholder"],
    Yo = {
        class: "tips-con"
    },
    Zo = {
        class: "title"
    },
    ea = se(() => e("img", {
        src: rt
    }, null, -1)),
    ta = ["innerHTML"],
    oa = {
        __name: "index",
        setup(i) {
            const {
                _getWalletCoinList: A,
                _getWithdrawConfig: E,
                _withdraw: f,
                _getArticleDetail: h
            } = He, {
                proxy: l
            } = ae(), v = pt(), m = _t(), S = c(!1), d = N(() => v.state.user.userData), p = c(null), w = c(null), C = c([]), x = {
                text: "coinName",
                value: "coinId"
            }, Q = c(!1), $ = N(() => {
                try {
                    return C.value.find(t => t.coinId === p.value)
                } catch {
                    return null
                }
            }), F = c([]), Re = () => {
                parseFloat(s.value.balance) > parseFloat(s.value.max) ? r.value = parseFloat(s.value.max) : r.value = parseFloat(s.value.balance)
            };

            function Ge(t) {
                if (p.value === t) return;
                const a = C.value.find(u => u.coinId === t).multiChainData;
                a && a.length > 0 && (F.value = a, p.value = t, w.value = F.value[0].chainName, L())
            }
            const je = t => {
                    w.value = t.chainName, ne.value = t.tokenType, U.value = "", r.value = "", W.value = "", P.value = "", L()
                },
                ze = {
                    text: "tokenType",
                    value: "chainName"
                },
                ne = N(() => {
                    try {
                        return F.value.find(t => t.chainName === w.value).tokenType
                    } catch {
                        return ""
                    }
                }),
                le = c(!1);

            function Je(t) {
                w.value !== t && (w.value = t, L())
            }
            const X = c("");
            async function qe() {
                const t = await A({
                    type: 2
                });
                if (t.code === 0 && t.data) {
                    let a = [],
                        u = t.data.find(T => T.coinId == 1);
                    u && (X.value = u.coinIcon), t.data.forEach(T => {
                        var j, z;
                        T.multiChainData && ((j = T.multiChainData) == null ? void 0 : j.length) > 0 && ((z = T.multiChainData[0]) != null && z.enableWithdraw) && a.push(T)
                    }), C.value = a;
                    let B = C.value.find(T => T.coinName === "USDT");
                    B || (B = C.value[0]), p.value = B.coinId, F.value = B.multiChainData, w.value = F.value[0].chainName, L()
                } else l.$toast(t.message)
            }
            const U = c(""),
                Y = c(!1);

            function Ke(t) {
                return t.replace(/\s/g, "")
            }
            const s = c({}),
                ie = c(""),
                ce = c("");
            async function L() {
                var a, u;
                const t = await E({
                    coinId: p.value,
                    chainName: w.value
                });
                t.code === 0 ? (t.data.address != null ? (U.value = t.data.address, Y.value = !0) : (U.value = "", Y.value = !1), r.value = "", s.value = t.data, ie.value = (a = s.value) == null ? void 0 : a.coinPrice, ce.value = (u = s.value) == null ? void 0 : u.withdrawExtraFee) : l.$toast(t.message)
            }

            function Qe(t) {
                let {
                    days: a,
                    hours: u
                } = t;
                return a > 0 && (u = a * 24 + u), u = u > 9 ? u : `0${u}`, u
            }
            const r = c(null),
                O = c(""),
                {
                    sub: ue,
                    mul: H,
                    div: Xe,
                    decal: D,
                    add: aa
                } = l.$math,
                R = N(() => {
                    try {
                        if (!r.value) return 0;
                        if (s.value.hasFee) {
                            let t = Xe(H(H(Number(r.value), Number(s.value.coinPrice)), Number(s.value.feeRate)), Number(s.value.feeCoinPrice));
                            return t < Number(s.value.feeMin) && (t = Number(s.value.feeMin)), t
                        } else return 0
                    } catch {
                        return 0
                    }
                }),
                de = N(() => {
                    try {
                        return H(Number(R.value), Number(s.value.coinPrice))
                    } catch {
                        return 0
                    }
                }),
                re = N(() => {
                    try {
                        if (!r.value) return 0;
                        let t = ue(H(Number(r.value), Number(s.value.coinPrice)), R.value),
                            a = ve.value * parseFloat(s.value.feeCoinPrice);
                        return a < 0 ? 0 : a
                    } catch {
                        return 0
                    }
                }),
                ve = N(() => {
                    try {
                        if (!r.value) return 0;
                        let a = parseFloat(s.value.withdrawExtraFee) / parseFloat(s.value.coinPrice) + Number(R.value);
                        const u = ue(Number(r.value), Number(a));
                        return u < 0 ? 0 : u
                    } catch {
                        return 0
                    }
                }),
                W = c(""),
                Ye = N(() => {
                    var t, a;
                    return (t = d.value) != null && t.hasOpenGoogleAuth && ((a = d.value) != null && a.hasBindGoogleAuth) ? !U.value || !r.value || !W.value || !P.value || !O.value : !U.value || !r.value || !W.value || !P.value
                });

            function Ze() {
                var t, a;
                if (Number(r.value) < Number(s.value.min)) {
                    l.$toast(`${l.$t("wallet.doc18")}: ${s.value.min}`);
                    return
                } else if (Number(r.value) > Number(s.value.max)) {
                    l.$toast(`${l.$t("wallet.doc19")}: ${s.value.max}`);
                    return
                } else if (W.value) {
                    if (!P.value) {
                        l.$toast(l.$t("wallet.doc20"));
                        return
                    }
                } else {
                    l.$toast(l.$t("email.doc6"));
                    return
                }
                if (!((t = d.value) != null && t.hasSetPassword)) {
                    m.push("/profile/password/transfer/add"), l.$toast(l.$t("wallet.doc23"));
                    return
                }
                if (((a = $.value) == null ? void 0 : a.coinName) !== "USDT") {
                    S.value = !0;
                    return
                }
                me()
            }

            function et() {
                me()
            }
            const P = c(""),
                Z = c(!1);
            async function me() {
                let t = JSON.parse(JSON.stringify(U.value));
                Z.value || (Z.value = !0, f({
                    coinId: p.value,
                    chainName: w.value,
                    googleCode: O.value,
                    amount: r.value,
                    toAddress: t,
                    code: W.value,
                    password: l.$crypt.mdPsd(P.value)
                }).then(a => {
                    a.code == 0 && (r.value = null, P.val = "", O.value = "", S.value = !1, L()), l.$toast(a.message)
                }).finally(() => {
                    Z.value = !1
                }))
            }
            const G = c({});
            async function tt() {
                const t = await h({
                    categoryType: "NOTES_ON_WITHDRAWAL"
                });
                t.code === 0 && (G.value = t.data)
            }

            function ot() {
                G.value = {}, X.value = "", C.value = [], s.value = {}
            }

            function at() {
                ot(), tt(), qe()
            }
            return (t, a) => {
                const u = b("ComImage"),
                    B = b("van-icon"),
                    T = b("van-field"),
                    j = b("van-count-down"),
                    z = b("ComBtn"),
                    pe = b("ComPicker"),
                    st = b("PageScroll"),
                    nt = q("amount"),
                    lt = q("number-only");
                return k(), te(st, {
                    type: "inside",
                    title: t.$t("title.doc17"),
                    onReady: at
                }, {
                    default: J(() => {
                        var _e, he, fe, we, $e, ye, Ne, ge, be, Se, Ce, Te, Ie, Fe, Ue, De, Pe, ke, Ae, Ee, We, Ve, xe, Be;
                        return [e("div", Zt, [e("div", eo, o(t.$t("title.doc17")), 1), e("div", to, [e("div", oo, o(t.$t("common.doc6")), 1), e("div", {
                            class: "inp-con",
                            onClick: a[0] || (a[0] = n => Q.value = !0)
                        }, [e("div", ao, [_(y(u, {
                            class: "img",
                            src: (_e = $.value) == null ? void 0 : _e.coinIcon
                        }, null, 8, ["src"]), [
                            [g, (he = $.value) == null ? void 0 : he.coinIcon]
                        ]), e("span", null, o((fe = $.value) == null ? void 0 : fe.coinName), 1)]), y(B, {
                            name: "arrow"
                        })])]), e("div", so, [e("div", no, o(t.$t("wallet.doc9")), 1), e("div", lo, [F.value ? (k(), M("div", io, [(k(!0), M(ut, null, dt(F.value, n => _((k(), M("div", {
                            key: n.id,
                            class: ee({
                                act: ne.value == n.tokenType
                            }),
                            onClick: sa => je(n)
                        }, o(n.tokenType), 11, co)), [
                            [g, n.enableWithdraw]
                        ])), 128))])) : Le("", !0)])]), e("div", uo, [e("div", ro, o(t.$t("wallet.doc11")), 1), e("div", vo, [y(T, {
                            class: "textarea",
                            modelValue: U.value,
                            "onUpdate:modelValue": a[1] || (a[1] = n => U.value = n),
                            modelModifiers: {
                                trim: !0
                            },
                            readonly: Y.value,
                            rows: "1",
                            autosize: "",
                            type: "textarea",
                            placeholder: t.$t("wallet.doc12"),
                            formatter: Ke
                        }, null, 8, ["modelValue", "readonly", "placeholder"])])]), e("div", mo, [e("div", po, o(t.$t("wallet.doc13")), 1), e("div", _o, [_(e("input", {
                            class: "inp",
                            "onUpdate:modelValue": a[2] || (a[2] = n => r.value = n),
                            placeholder: t.$t("wallet.doc14")
                        }, null, 8, ho), [
                            [nt, 4],
                            [oe, r.value]
                        ]), e("span", {
                            class: "all",
                            onClick: Re
                        }, o(t.$t("common.doc7")), 1)]), e("div", fo, [e("div", wo, [e("div", $o, o(t.$t("wallet.doc17")), 1), e("div", yo, o(I(D)((we = s.value) == null ? void 0 : we.balance, 5)) + " USDT ", 1)]), _(e("div", No, [e("div", go, o(t.$t("wallet.doc49")), 1), e("div", bo, [e("span", So, o(($e = s.value) == null ? void 0 : $e.max) + " " + o((ye = $.value) == null ? void 0 : ye.coinName), 1)])], 512), [
                            [g, ((Ne = $.value) == null ? void 0 : Ne.coinName) !== "USDT"]
                        ]), _(e("div", Co, [e("div", To, o(t.$t("wallet.doc50")), 1), e("div", Io, [e("span", Fo, o((ge = s.value) == null ? void 0 : ge.min) + " " + o((be = $.value) == null ? void 0 : be.coinName), 1)])], 512), [
                            [g, ((Se = $.value) == null ? void 0 : Se.coinName) !== "USDT"]
                        ]), e("div", Uo, [e("div", Do, o(t.$t("wallet.doc16")), 1), e("div", {
                            class: ee(["val", {
                                nonUSDT: ((Ce = $.value) == null ? void 0 : Ce.coinName) !== "USDT"
                            }])
                        }, [e("span", Po, o(I(D)(R.value, 5)) + " " + o((Te = s.value) == null ? void 0 : Te.feeCoinName), 1), e("span", ko, [Ao, V(o(I(D)(de.value, 5)) + " USDT", 1)])], 2)]), _(e("div", Eo, [e("div", Wo, o(t.$t("common.doc40")), 1), e("div", Vo, [e("span", xo, o((Ie = s.value) == null ? void 0 : Ie.withdrawExtraFee) + " USDT", 1)])], 512), [
                            [g, ((Fe = $.value) == null ? void 0 : Fe.coinName) !== "USDT"]
                        ]), e("div", Bo, [e("div", Lo, o(t.$t("wallet.doc15")), 1), e("div", {
                            class: ee(["val", {
                                nonUSDT: ((Ue = $.value) == null ? void 0 : Ue.coinName) !== "USDT"
                            }])
                        }, [e("span", Oo, o(I(D)(ve.value, 5)) + " " + o((De = $.value) == null ? void 0 : De.coinName), 1), e("span", Mo, [Ho, V(o(I(D)(re.value, 5)) + " USDT", 1)])], 2)])]), _(e("div", Ro, [V(o(t.$t("wallet.doc44")) + " ", 1), y(j, {
                            time: ((Pe = s.value) == null ? void 0 : Pe.remindWithdrawTime) * 1e3,
                            format: "HH:mm:ss"
                        }, {
                            default: J(n => [e("span", null, o(Qe(n)) + " " + o(t.$t("common.doc14")), 1), e("span", null, o(n.minutes > 9 ? n.minutes : `0${n.minutes}`) + " " + o(t.$t("common.doc15")), 1), e("span", null, o(n.seconds > 9 ? n.seconds : `0${n.seconds}`) + " " + o(t.$t("common.doc16")), 1)]),
                            _: 1
                        }, 8, ["time"]), V(" " + o(t.$t("wallet.doc45")), 1)], 512), [
                            [g, ((ke = s.value) == null ? void 0 : ke.remindWithdrawTime) != 0]
                        ])]), e("div", Go, [e("div", jo, o(t.$t("email.doc3")) + ": " + o((Ae = d.value) == null ? void 0 : Ae.email), 1), y(zt, {
                            email: (Ee = d.value) == null ? void 0 : Ee.email,
                            accountType: 1,
                            type: 7,
                            code: W.value,
                            "onUpdate:code": a[3] || (a[3] = n => W.value = n)
                        }, null, 8, ["email", "code"])]), e("div", zo, [e("div", Jo, o(t.$t("user.doc36")), 1), y(Yt, {
                            password: P.value,
                            "onUpdate:password": a[4] || (a[4] = n => P.value = n)
                        }, null, 8, ["password"])]), _(e("div", qo, [e("div", Ko, o(t.$t("user.doc30")), 1), e("div", Qo, [_(e("input", {
                            class: "inp",
                            "onUpdate:modelValue": a[5] || (a[5] = n => O.value = n),
                            maxlength: "6",
                            placeholder: t.$t("user.doc31")
                        }, null, 8, Xo), [
                            [oe, O.value],
                            [lt]
                        ])])], 512), [
                            [g, ((We = d.value) == null ? void 0 : We.hasOpenGoogleAuth) && ((Ve = d.value) == null ? void 0 : Ve.hasBindGoogleAuth)]
                        ]), y(z, {
                            class: "on submit-btn",
                            text: t.$t("wallet.doc7"),
                            disabled: Ye.value,
                            onClick: Ze
                        }, null, 8, ["text", "disabled"]), _(e("div", Yo, [e("div", Zo, [ea, V(" " + o(t.$t("common.doc17")), 1)]), e("div", {
                            class: "desc",
                            innerHTML: (xe = G.value) == null ? void 0 : xe.description
                        }, null, 8, ta)], 512), [
                            [g, (Be = G.value) == null ? void 0 : Be.description]
                        ])]), C.value ? (k(), te(pe, {
                            key: 0,
                            title: t.$t("common.doc6"),
                            customFieldName: x,
                            columns: C.value,
                            show: Q.value,
                            "onUpdate:show": a[6] || (a[6] = n => Q.value = n),
                            onConfirm: Ge
                        }, null, 8, ["title", "columns", "show"])) : Le("", !0), y(pe, {
                            title: t.$t("wallet.doc9"),
                            customFieldName: ze,
                            columns: F.value,
                            show: le.value,
                            "onUpdate:show": a[7] || (a[7] = n => le.value = n),
                            onConfirm: Je
                        }, null, 8, ["title", "columns", "show"]), y(Lt, {
                            show: S.value,
                            "onUpdate:show": a[8] || (a[8] = n => S.value = n),
                            coinList: $.value,
                            amount: I(D)(r.value, 2),
                            actualFee: I(D)(de.value, 4),
                            actualAmount: I(D)(re.value, 4),
                            usdtIcon: X.value,
                            configInfo: s.value,
                            coinPrice: ie.value,
                            withdrawExtraFee: ce.value,
                            onUpdateShow: et
                        }, null, 8, ["show", "coinList", "amount", "actualFee", "actualAmount", "usdtIcon", "configInfo", "coinPrice", "withdrawExtraFee"])]
                    }),
                    _: 1
                }, 8, ["title"])
            }
        }
    },
    ga = K(oa, [
        ["__scopeId", "data-v-c654d101"]
    ]);
export {
    ga as
    default
};
