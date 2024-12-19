(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-494d233b"], {
        2050: function (t, s, e) {
            "use strict";
            var i = function () {
                    var t = this,
                        s = t._self._c;
                    return s("div", [s("van-popup", {
                        staticStyle: {
                            background: "none"
                        },
                        style: {
                            position: t.isPC ? "relative" : ""
                        },
                        attrs: {
                            round: "",
                            position: "bottom"
                        },
                        model: {
                            value: t.isShowPay,
                            callback: function (s) {
                                t.isShowPay = s
                            },
                            expression: "isShowPay"
                        }
                    }, [s("div", {
                        staticClass: "password_pop",
                        class: {
                            center: t.isPC
                        }
                    }, [s("div", {
                        staticClass: "pass",
                        class: {
                            po_center: t.isPC
                        }
                    }, [s("div", {
                        staticClass: "jbox_03"
                    }, [s("div", {
                        staticClass: "jt"
                    }), s("div", {
                        staticClass: "jc c"
                    }, [s("div", {
                        staticClass: "b"
                    }, [s("div", {
                        staticClass: "title rel tac"
                    }, [t._v(" " + t._s(t.title || t.$t("page.doc39")) + " "), s("div", {
                        staticClass: "abs",
                        on: {
                            click: function (s) {
                                return t.$emit("close")
                            }
                        }
                    }, [s("van-icon", {
                        attrs: {
                            name: "cross"
                        }
                    })], 1)]), s("div", {
                        staticClass: "box"
                    }, [s("van-password-input", {
                        attrs: {
                            gutter: 20,
                            value: t.password,
                            focused: t.showKeyboard
                        },
                        on: {
                            focus: function (s) {
                                t.showKeyboard = !0
                            }
                        }
                    })], 1), s("button", {
                        staticClass: "btn2",
                        style: t.btnStyleObj,
                        attrs: {
                            disabled: t.isDisable
                        },
                        on: {
                            click: t.getBtn
                        }
                    }, [t._v(" " + t._s(t.btnText) + " ")])])]), s("div", {
                        staticClass: "jb"
                    })])]), t.isPC ? t._e() : s("div", {
                        staticClass: "jianpan"
                    }, [s("p", [t._v(t._s(t.$t("page.doc41")))]), s("van-number-keyboard", {
                        attrs: {
                            maxlength: t.maxlength,
                            show: t.showKeyboard
                        },
                        on: {
                            blur: function (s) {
                                t.showKeyboard = !0
                            }
                        },
                        model: {
                            value: t.password,
                            callback: function (s) {
                                t.password = s
                            },
                            expression: "password"
                        }
                    })], 1)])])], 1)
                },
                a = [],
                o = {
                    props: {
                        isShow: {
                            type: Boolean,
                            default: !1
                        },
                        title: {
                            type: String
                        },
                        btnText: {
                            type: String
                        },
                        btnStyleObj: {
                            type: Object
                        },
                        maxlength: {
                            type: Number,
                            default: 6
                        }
                    },
                    data() {
                        return {
                            password: "",
                            showKeyboard: !0,
                            isDisable: !1,
                            isPC: !1
                        }
                    },
                    created() {
                        this.isPC = -1 !== navigator.userAgent.indexOf("Windows NT") || -1 !== navigator.userAgent.indexOf("Macintosh"), window.addEventListener("resize", this.destroyEventListener)
                    },
                    beforeDestroy() {
                        window.removeEventListener("resize", this.destroyEventListener)
                    },
                    methods: {
                        destroyEventListener() {
                            this.isPC = -1 !== navigator.userAgent.indexOf("Windows NT") || -1 !== navigator.userAgent.indexOf("Macintosh")
                        },
                        getBtn() {
                            let {
                                password: t,
                                maxlength: s
                            } = this;
                            t.length < s || (this.$emit("getPassword", t), this.$emit("close"))
                        },
                        listenerKeydown(t) {
                            t.key >= "0" && t.key <= "9" && this.password.length < this.maxlength ? this.password += String(t.key) : "Backspace" === t.key && this.password.length > 0 && (this.password = this.password.slice(0, -1))
                        }
                    },
                    watch: {
                        isShow(t) {
                            if (t) return addEventListener("keyup", this.listenerKeydown);
                            removeEventListener("keyup", this.listenerKeydown)
                        }
                    },
                    computed: {
                        isShowPay: {
                            get(t) {
                                return this.password = "", this.isShow
                            },
                            set() {
                                this.$emit("close")
                            }
                        }
                    }
                },
                n = o,
                c = (e("7a6f"), e("0c7c")),
                l = Object(c["a"])(n, i, a, !1, null, "2ca52d3c", null);
            s["a"] = l.exports
        },
        "2e24": function (t, s) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzN+8gE8AAAAFXRSTlMADPJTry0F3PiRhXzY6qSK1EAivHMIRShbAAABFklEQVQ4y82U7W6EIBBF5RsVXXW97/+qjSCF9lLSbLLJnj8Sc3KFkZnhXZhxk2ggt9FUmh3RYbTf3hNdntm88vQuhgZi11fmvT8A8/AnMwCTA/XQQefIDdh74g5scSEB0RMFIOMCQHxOHhV+ymIU6qf8VetafCWR+QTRIfxPPM6DTl3Oy3AdJTu9RKvWIGVYla1FRjncONUTH6h41CJ7y2yEMPOSzLaoAGiR1kIDUG3ROkD/uOLOJpEDlytvklPMXFIki+vdbR4+99faFANg6k0ZIJBYd1Eq45G6prxm0UfzTGJpV/705GNi/HQeAHyYRDlMHilcnkgpDw+pdsFp7Lmj/Qt5kJ6tS0GjOSXyNSO6F5dptcIXKRkngMelsuwAAAAASUVORK5CYII="
        },
        "5a7c": function (t, s, e) {},
        "6b47": function (t, s, e) {
            "use strict";
            e.r(s);
            var i = function () {
                    var t = this,
                        s = t._self._c;
                    return s("page-scroll", {
                        attrs: {
                            footer: !1
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function () {
                                return [s("gltitle", {
                                    attrs: {
                                        title: t.title,
                                        "is-name": !0,
                                        "is-back": !0,
                                        "is-my": !1,
                                        "is-notice": !1,
                                        "is-lang": !1
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "content",
                            fn: function () {
                                return [s("div", {
                                    staticClass: "container"
                                }, [s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc43")))]), s("div", {
                                    staticClass: "val flex",
                                    on: {
                                        click: function (s) {
                                            t.newShow = !0
                                        }
                                    }
                                }, [s("img", {
                                    staticClass: "coinIcon",
                                    attrs: {
                                        src: t.coinIcon
                                    }
                                }), s("div", {
                                    staticClass: "flex1"
                                }, [t._v(t._s(t.tokenType))]), s("van-icon", {
                                    attrs: {
                                        name: "arrow"
                                    }
                                })], 1)]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc44")))]), s("div", {
                                    staticClass: "val flex set",
                                    on: {
                                        click: function (s) {
                                            t.bi_show = !0
                                        }
                                    }
                                }, [s("img", {
                                    staticClass: "coinIcon",
                                    attrs: {
                                        src: t.coinIcon
                                    }
                                }), s("div", {
                                    staticClass: "name name1 flex1"
                                }, [t._v(t._s(t.bi_name))]), s("van-icon", {
                                    attrs: {
                                        name: "arrow"
                                    }
                                })], 1)]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc45")))]), s("div", {
                                    staticClass: "val flex"
                                }, [s("div", {
                                    staticClass: "flex1"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.address,
                                        expression: "address"
                                    }],
                                    attrs: {
                                        type: "text",
                                        placeholder: t.$t("page.doc51"),
                                        readonly: !!t.configInfo.address
                                    },
                                    domProps: {
                                        value: t.address
                                    },
                                    on: {
                                        input: function (s) {
                                            s.target.composing || (t.address = s.target.value)
                                        }
                                    }
                                })])])]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc46")))]), s("div", {
                                    staticClass: "val flex"
                                }, [s("div", {
                                    staticClass: "flex1"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.amount,
                                        expression: "amount"
                                    }],
                                    attrs: {
                                        type: "text",
                                        placeholder: t.$t("page.doc47"),
                                        oninput: "value=value.replace(/[^\\d]/g,'')"
                                    },
                                    domProps: {
                                        value: t.amount
                                    },
                                    on: {
                                        input: [function (s) {
                                            s.target.composing || (t.amount = s.target.value)
                                        }, t.oninput]
                                    }
                                })]), s("div", {
                                    staticClass: "str",
                                    on: {
                                        click: t.getAll
                                    }
                                }, [t._v(" " + t._s(t.$t("page.doc48")) + " ")])])]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "tips"
                                }, [s("ul", [s("li", {
                                    staticClass: "wrap bet"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(t._s(t.$t("page4.doc17")))]), s("div", {
                                    staticClass: "s blue"
                                }, [s("span", [t._v(t._s(t.common.decal4(t.am)) + " USDT")])])]), s("li", {
                                    staticClass: "wrap bet"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(" " + t._s(t.$t("page4.doc18")) + " "), t._v(" " + t._s(t.common.accMul(t.feeRateLeve, 100)) + " % ")]), s("div", {
                                    staticClass: "s"
                                }, [t._v(t._s(t.fee) + " USDT")])]), t._e(), s("li", {
                                    staticClass: "wrap bet"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(t._s(t.$t("new.doc192")))]), s("div", {
                                    staticClass: "s"
                                }, [t._v(t._s(t.configInfo.chainFee) + " USDT")])]), s("li", {
                                    staticClass: "wrap bet"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(t._s(t.$t("page4.doc21")))]), s("div", {
                                    staticClass: "s"
                                }, [t._v(t._s(t.levelDatas.minWithdrawAmount) + " USDT")])]), s("li", {
                                    staticClass: "wrap bet"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(t._s(t.$t("page4.doc22")))]), s("div", {
                                    staticClass: "s"
                                }, [s("span", [t._v(t._s(t.levelDatas.maxWithdrawAmount) + " USDT")])])])])])]), s("div", {
                                    staticClass: "item"
                                }, [s("button", {
                                    staticClass: "btn2",
                                    on: {
                                        click: t.getGo
                                    }
                                }, [t._v(" " + t._s(t.$t("page.doc36")) + " ")])]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "tipss"
                                }, [s("div", {
                                    staticClass: "n"
                                }, [t._v(t._s(t.$t("page.doc71")))]), s("div", {
                                    staticClass: "p",
                                    domProps: {
                                        innerHTML: t._s(t.datas.description)
                                    }
                                })])])]), s("my-popup", {
                                    attrs: {
                                        active: t.activeIndex,
                                        list: t.biData
                                    },
                                    on: {
                                        "update:active": function (s) {
                                            t.activeIndex = s
                                        },
                                        confirm: t.onSet
                                    },
                                    model: {
                                        value: t.bi_show,
                                        callback: function (s) {
                                            t.bi_show = s
                                        },
                                        expression: "bi_show"
                                    }
                                }), s("pay-keyboard", {
                                    attrs: {
                                        title: t.$t("page.doc39"),
                                        btnText: t.$t("page2.doc157"),
                                        btnStyleObj: t.btnStyleObj,
                                        isShow: t.isShowPay,
                                        maxlength: 6
                                    },
                                    on: {
                                        close: function (s) {
                                            t.isShowPay = !1
                                        },
                                        getPassword: t.getBtn
                                    }
                                }), s("van-popup", {
                                    attrs: {
                                        round: "",
                                        position: "bottom",
                                        closeable: ""
                                    },
                                    model: {
                                        value: t.isShowPays,
                                        callback: function (s) {
                                            t.isShowPays = s
                                        },
                                        expression: "isShowPays"
                                    }
                                }, [s("div", {
                                    staticClass: "pop_types"
                                }, [s("div", {
                                    staticClass: "top"
                                }, [s("div", {
                                    staticClass: "title"
                                }, [t._v(t._s(t.$t("page3.doc2")))])]), s("div", {
                                    staticClass: "con"
                                }, [s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "name"
                                }, [t._v(t._s(t.$t("page.doc200")))]), s("div", {
                                    staticClass: "val"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.code,
                                        expression: "code"
                                    }],
                                    attrs: {
                                        type: "password",
                                        placeholder: t.$t("page.doc39")
                                    },
                                    domProps: {
                                        value: t.code
                                    },
                                    on: {
                                        input: function (s) {
                                            s.target.composing || (t.code = s.target.value)
                                        }
                                    }
                                })])]), s("div", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.googShow,
                                        expression: "googShow"
                                    }],
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "name"
                                }, [t._v(t._s(t.$t("page3.doc3")))]), s("div", {
                                    staticClass: "val"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.googleCode,
                                        expression: "googleCode"
                                    }],
                                    attrs: {
                                        type: "text",
                                        placeholder: t.$t("page3.doc4")
                                    },
                                    domProps: {
                                        value: t.googleCode
                                    },
                                    on: {
                                        input: function (s) {
                                            s.target.composing || (t.googleCode = s.target.value)
                                        }
                                    }
                                })])])]), s("button", {
                                    staticClass: "btn2",
                                    on: {
                                        click: t.googleCodeClick
                                    }
                                }, [t._v(" " + t._s(t.$t("page.doc36")) + " ")])])]), s("my-popup", {
                                    attrs: {
                                        active: t.newIndex,
                                        list: t.newData
                                    },
                                    on: {
                                        "update:active": function (s) {
                                            t.newIndex = s
                                        },
                                        confirm: t.onSetNew
                                    },
                                    model: {
                                        value: t.newShow,
                                        callback: function (s) {
                                            t.newShow = s
                                        },
                                        expression: "newShow"
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })
                },
                a = [],
                o = (e("14d9"), e("d044"), e("751a"), e("4b90"));
            e("701d");
            let {
                member: n
            } = o["a"];
            var c = e("2050"),
                l = e("9748"),
                d = {
                    components: {
                        MyPopup: l["a"],
                        PayKeyboard: c["a"]
                    },
                    data() {
                        return {
                            title: this.$t("title.doc11"),
                            titleRight: "<img src=" + e("2e24") + ">",
                            bi_name: "",
                            bi_show: !1,
                            address: "",
                            coinId: "",
                            activeIndex: 0,
                            chainName: "",
                            tokenType: "",
                            biData: [],
                            tabData: [],
                            coInData: [],
                            userData: this.$store.state.userData,
                            amount: "",
                            configInfo: [],
                            fee: 0,
                            am: 0,
                            password: "",
                            showKeyboard: !0,
                            password_show: !1,
                            isDisable: !1,
                            areaId: "",
                            areaData: [],
                            if_area: !1,
                            soAreaId: "",
                            phone: "",
                            ifgo: !0,
                            isBindPhone: !1,
                            isShowPay: !1,
                            isShowPays: !1,
                            btnStyleObj: {
                                backgroundColor: "var(--CObackgroundLinear2)",
                                color: "var(--COcolor4)",
                                fontSize: ".28rem"
                            },
                            code: "",
                            googleCode: "",
                            time: "",
                            levelList: {},
                            googShow: !1,
                            datas: [],
                            levels: 0,
                            levelDatas: {},
                            feeRateLeve: 0,
                            coinIcon: "",
                            newShow: !1,
                            newIndex: 0,
                            newData: []
                        }
                    },
                    activated() {
                        this.googShow = this.$store.state.userData.hasOpenGoogleAuth;
                        let t = this.$store.state.userData;
                        t.hasSetPassword ? (this.bi_show = !1, this.newShow = !1, this.levelLists(), this.getBilist(0), this.homeArticle()) : this.$router.replace("/my/password_trade")
                    },
                    filters: {
                        Svalues(t) {
                            if (t) return Math.ceil(t)
                        }
                    },
                    methods: {
                        homeArticle() {
                            this.$post(this.URL.home.article, {
                                categoryType: "WITHDRAWAL_RULES"
                            }).then(t => {
                                0 == t.code ? this.datas = t.data : this.$toast(t.message)
                            })
                        },
                        finish() {
                            this.configInfo.freeFeeDays = 0
                        },
                        oninput() {
                            let t = this;
                            t.feeRateLeve = 0;
                            const s = this.configInfo.globalFeeConfig;
                            for (const [e, i] of Object.entries(s)) {
                                let s = this.extractNumberAfterAt(e);
                                if (t.amount < s) return t.feeRateLeve = i, t.amount = this.common.amountFloat(this.amount), void("" !== t.amount ? t.getFee() : (t.fee = 0, t.am = 0));
                                t.feeRateLeve = 0
                            }
                        },
                        getAll() {
                            0 != this.configInfo.balance ? (this.amount = this.configInfo.balance >> 0, this.getFee(1)) : this.amount = 0
                        },
                        getFee(t) {
                            let s = 0;
                            if (this.configInfo.hasFee) {
                                let t = this.common.accMul(this.amount, this.configInfo.coinPrice),
                                    e = this.common.accMul(t, this.feeRateLeve),
                                    i = this.common.accDiv(e, this.configInfo.feeCoinPrice);
                                s = i, s < this.configInfo.feeMin && (s = this.configInfo.feeMin)
                            }
                            if (1 == t) {
                                this.fee = s;
                                let t = this.amount * this.configInfo.taxRate;
                                return this.am = this.common.accSub(this.amount, s), this.am = this.common.accSub(this.am, t), void(this.am = this.am < 0 ? 0 : this.am)
                            }
                            this.fee = s;
                            let e = this.amount * this.configInfo.taxRate;
                            this.am = this.common.accSub(this.amount, s), this.am = this.common.accSub(this.am, e), this.am = this.am < 0 ? 0 : this.common.accSub(this.am, this.configInfo.chainFee)
                        },
                        getConfig() {
                            this.$post(this.URL.user.wallet_config, {
                                coinId: this.coinId,
                                chainName: this.chainName
                            }).then(t => {
                                if (0 == t.code) {
                                    this.configInfo = t.data;
                                    let s = t.data.freeFeeTime - (new Date).getTime();
                                    if (this.time = s, !this.configInfo.bindAddress) return void this.$router.replace({
                                        path: "/my/biAddress"
                                    });
                                    if (this.configInfo.hasCheckIdentity && 1 !== this.$store.state.userData.identityStatus && (this.$toast(this.$t("page2.doc37")), this.$router.replace({
                                            path: "/my/info"
                                        })), !this.configInfo.googleSetting) return void this.$router.replace("/my/googleView");
                                    this.address = this.configInfo.bindAddress, this.areaId = this.configInfo.withdrawMobilePrefix || "", this.phone = this.configInfo.withdrawMobile, this.configInfo.withdrawMobile && (this.isBindPhone = !0);
                                    let {
                                        G2: e,
                                        G3: i,
                                        G4: a,
                                        G5: o,
                                        G6: n,
                                        G7: c
                                    } = this.levelList;
                                    this.configInfo.infoTextList = [this.$t("page2.doc203"), "br", this.$t("page2.doc204"), this.$t("page2.doc205") + this.configInfo.feeMin + this.$t("page2.doc206"), this.$t("page2.doc207"), "br", this.$t("page2.doc208"), `G3${this.$t("page4.doc77")} ${1e3*e/10}%`, `G6${this.$t("page4.doc77")} ${1e3*i/10}%`, `G9${this.$t("page4.doc77")} ${1e3*a/10}%`, `G12${this.$t("page4.doc77")} ${1e3*o/10}%`, `G15${this.$t("page4.doc77")} ${1e3*n/10}%`, `G18${this.$t("page4.doc77")} ${1e3*c/10}%`]
                                }
                            })
                        },
                        extractNumberBeforeAt(t) {
                            const s = t.match(/^(\d+)-/);
                            return s ? s[1] : null
                        },
                        extractNumberAfterAt(t) {
                            const s = t.match(/-\d+/);
                            if (s) return parseInt(s[0].slice(1), 10)
                        },
                        levelLists() {
                            this.$post(this.URL.member.personal, {}).then(t => {
                                if (0 == t.code) {
                                    this.personalLevel = t.data.level;
                                    let s = this.personalLevel;
                                    s = -1 == s ? 0 : s, this.levels = s, this.$post(this.URL.level.list, {}).then(t => {
                                        if (0 == t.code) {
                                            let s = [],
                                                e = {};
                                            t.data.forEach((t, i) => {
                                                this.levels == t.level && (this.levelDatas = t), e["G" + (i + 1)] = t.withdrawFeeRate, s.push(e)
                                            }), this.levelList = s[0]
                                        }
                                    })
                                }
                            })
                        },
                        getBilist(t) {
                            this.newData = [], this.biData = [], this.$post(this.URL.wallet.coinList, {
                                type: 2
                            }).then(s => {
                                0 == s.code && (this.coinId = s.data[t].coinId, this.coinIcon = s.data[t].coinIcon, this.bi_name = s.data[t].coinName, this.tabData = s.data[t].multiChainData, this.chainName = s.data[t].multiChainData[0].chainName, this.tokenType = s.data[t].multiChainData[0].tokenType, this.coInData = s.data, s.data.forEach(t => {
                                    this.biData.push({
                                        name: t.coinName,
                                        code: t.coinId
                                    })
                                }), s.data[t].multiChainData.forEach(t => {
                                    this.newData.push({
                                        name: t.tokenType,
                                        code: t.chainName
                                    })
                                }), this.getConfig())
                            })
                        },
                        onSetNew({
                            item: t,
                            index: s
                        }) {
                            this.newShow = !1, this.chainName = t.code, this.tokenType = t.name, this.address = "", this.getConfig()
                        },
                        onCopy(t) {
                            this.$toast(this.$t("page.doc52"))
                        },
                        onTab(t, s) {
                            this.chainName = t.chainName, this.tokenType = t.tokenType, this.address = "", this.getConfig()
                        },
                        onSet({
                            item: t,
                            index: s
                        }) {
                            this.bi_show = !1, this.coinId = t.code, this.bi_name = t.name, this.coInData[s].multiChainData.forEach(t => {
                                this.newData.push({
                                    name: t.tokenType,
                                    code: t.chainName
                                })
                            }), this.getConfig()
                        },
                        getGo() {
                            if (this.ifgo) {
                                if (this.amount = this.common.amountFloat(this.amount), !this.$store.state.userData.hasSetPassword) return this.path_url("/user/forget_password1?id=0"), void this.$toast(this.$t("page.doc42"));
                                "" != this.address ? "" != this.amount ? this.isShowPays = !0 : this.$toast(this.$t("page.doc47")) : this.$toast(this.$t("page.doc51"))
                            }
                        },
                        googleCodeClick() {
                            this.getBtn(this.code)
                        },
                        getBtn(t) {
                            this.isDisable = !0, setTimeout(() => {
                                this.isDisable = !1
                            }, 1e3), this.isDisable && (this.ifgo = !1, this.$post(this.URL.user.wallet_btn, {
                                amount: this.amount,
                                password: this.$md5(t),
                                coinId: this.coinId,
                                chainName: this.chainName,
                                toAddress: this.address,
                                remark: "",
                                googleCode: this.googleCode
                            }).then(t => {
                                if (this.ifgo = !0, 0 == t.code) this.amount = "", this.password = "", this.googleCode = "", this.code = "", this.fee = 0, this.am = 0, this.isShowPays = !1, this.$toast(t.message), this.configInfo.address || this.getConfig(), this.path_url("/wallet/index");
                                else {
                                    if (10087 == t.code) return void this.$toast(t.message);
                                    this.$toast(t.message)
                                }
                                this.password_show = !1
                            }))
                        },
                        path_url(t) {
                            this.$router.push({
                                path: t,
                                query: {}
                            })
                        }
                    }
                },
                r = d,
                h = (e("9d32"), e("0c7c")),
                u = Object(h["a"])(r, i, a, !1, null, "7bab1ac4", null);
            s["default"] = u.exports
        },
        "701d": function (t, s, e) {
            "use strict";
            s["a"] = async function (t) {
                let s = await t.catch(t => ({
                        data: void 0,
                        error: t
                    })),
                    {
                        data: e,
                        error: i
                    } = s;
                var a;
                if (i) return console.warn("æŽ¥å£è¯·æ±‚å¤±è´¥ï¼Œè¯·æ£€æŸ¥æŽ¥å£åœ°å€æ˜¯å¦æ­£ç¡®", null === (a = i.config) || void 0 === a ? void 0 : a.url), {
                    err: i
                };
                if (0 === (null === e || void 0 === e ? void 0 : e.code)) return {
                    data: e.data
                };
                let o = (null === e || void 0 === e ? void 0 : e.error) || (null === e || void 0 === e ? void 0 : e.message) || !0;
                return {
                    err: o
                }
            }
        },
        "7a6f": function (t, s, e) {
            "use strict";
            e("5a7c")
        },
        "8d85": function (t, s, e) {},
        9748: function (t, s, e) {
            "use strict";
            var i = function () {
                    var t = this,
                        s = t._self._c;
                    return s("div", [s("van-popup", {
                        staticStyle: {
                            background: "none"
                        },
                        attrs: {
                            round: "",
                            position: "bottom"
                        },
                        model: {
                            value: t.isShow,
                            callback: function (s) {
                                t.isShow = s
                            },
                            expression: "isShow"
                        }
                    }, [s("div", {
                        staticClass: "popup_box"
                    }, [s("div", {
                        staticClass: "scroll"
                    }, [s("div", {
                        staticClass: "ul"
                    }, t._l(t.list, (function (e, i) {
                        return s("div", {
                            key: i,
                            on: {
                                click: function (s) {
                                    return t.confirm(e, i)
                                }
                            }
                        }, [s("div", {
                            staticClass: "item",
                            class: {
                                active: t.active === i
                            }
                        }, [t._v(" " + t._s(e.name || e.text || e) + " ")])])
                    })), 0)]), s("div", {
                        staticClass: "esc",
                        on: {
                            click: function (s) {
                                t.isShow = !1
                            }
                        }
                    }, [t._v(t._s(t.$t("page.doc50")))])])])], 1)
                },
                a = [],
                o = {
                    props: {
                        value: {
                            type: Boolean,
                            default: !1
                        },
                        value1: {
                            type: String
                        },
                        list: {
                            type: Array,
                            default: []
                        },
                        active: {
                            type: [Number, String],
                            default: 0
                        }
                    },
                    data() {
                        return {}
                    },
                    methods: {
                        confirm(t, s) {
                            this.isShow = !1, this.$emit("confirm", {
                                item: t,
                                index: s
                            }), this.$emit("update:active", s)
                        }
                    },
                    computed: {
                        isShow: {
                            get() {
                                return this.value
                            },
                            set(t) {
                                this.$emit("input", t)
                            }
                        }
                    }
                },
                n = o,
                c = (e("c720"), e("0c7c")),
                l = Object(c["a"])(n, i, a, !1, null, "4c14e1cc", null);
            s["a"] = l.exports
        },
        "9d32": function (t, s, e) {
            "use strict";
            e("8d85")
        },
        bf0b: function (t, s, e) {},
        c720: function (t, s, e) {
            "use strict";
            e("bf0b")
        }
    }
]);
//# sourceMappingURL=chunk-494d233b.77bc554e.1717187934571.chunk.js.map
