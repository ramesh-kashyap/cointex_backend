(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0830ec22"], {
        "2d7f": function (t, s, e) {
            "use strict";
            e("ab4f")
        },
        "6cd0": function (t, s, e) {
            "use strict";
            e.r(s);
            var i = function () {
                    var t = this,
                        s = t._self._c;
                    return s("page-scroll", {
                        attrs: {
                            footer: !0
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
                                }, [t._v(t._s(t.$t("page.doc111")))]), s("div", {
                                    staticClass: "val"
                                }, [s("input", {
                                    attrs: {
                                        type: "text",
                                        disabled: ""
                                    },
                                    domProps: {
                                        value: t.email
                                    }
                                })])]), 0 == t.isEdit ? s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc115")))]), s("div", {
                                    staticClass: "val flex"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.code,
                                        expression: "code"
                                    }],
                                    staticClass: "flex1",
                                    attrs: {
                                        type: "text",
                                        placeholder: t.$t("page.doc197")
                                    },
                                    domProps: {
                                        value: t.code
                                    },
                                    on: {
                                        input: function (s) {
                                            s.target.composing || (t.code = s.target.value)
                                        }
                                    }
                                }), t.time_show ? t._e() : s("div", {
                                    staticClass: "str",
                                    on: {
                                        click: function (s) {
                                            return t.send_click()
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("page.doc83")) + " ")]), s("div", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.time_show,
                                        expression: "time_show"
                                    }],
                                    staticClass: "str"
                                }, [s("van-count-down", {
                                    ref: "countDown",
                                    attrs: {
                                        time: t.time,
                                        format: "ss"
                                    },
                                    on: {
                                        finish: t.finish_time
                                    },
                                    scopedSlots: t._u([{
                                        key: "default",
                                        fn: function (e) {
                                            return [s("span", {
                                                staticClass: "c-fff"
                                            }, [t._v(t._s(e.seconds) + " "), s("var", [t._v("s")])])]
                                        }
                                    }], null, !1, 535178433)
                                })], 1)])]) : t._e(), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc200")))]), s("div", {
                                    staticClass: "val"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.password,
                                        expression: "password"
                                    }],
                                    attrs: {
                                        type: "password",
                                        placeholder: t.$t("page.doc201"),
                                        maxlength: "6"
                                    },
                                    domProps: {
                                        value: t.password
                                    },
                                    on: {
                                        input: [function (s) {
                                            s.target.composing || (t.password = s.target.value)
                                        }, t.onInput]
                                    }
                                })])]), s("div", {
                                    staticClass: "item"
                                }, [s("div", {
                                    staticClass: "cname"
                                }, [t._v(t._s(t.$t("page.doc113")))]), s("div", {
                                    staticClass: "val inp"
                                }, [s("input", {
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.s_password,
                                        expression: "s_password"
                                    }],
                                    attrs: {
                                        type: "password",
                                        placeholder: t.$t("page.doc202"),
                                        maxlength: "6"
                                    },
                                    domProps: {
                                        value: t.s_password
                                    },
                                    on: {
                                        input: [function (s) {
                                            s.target.composing || (t.s_password = s.target.value)
                                        }, t.onInput]
                                    }
                                })])]), s("div", {
                                    staticClass: "err",
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v(" " + t._s(t.pwTxt) + " ")])])]
                            },
                            proxy: !0
                        }, {
                            key: "footer",
                            fn: function () {
                                return [s("div", {
                                    staticClass: "container"
                                }, [s("div", {
                                    staticClass: "go"
                                }, [s("button", {
                                    staticClass: "btn2",
                                    on: {
                                        click: function (s) {
                                            return t.onBtn()
                                        }
                                    }
                                }, [t._v(t._s(t.$t("page.doc36")))])])])]
                            },
                            proxy: !0
                        }])
                    })
                },
                a = [],
                o = (e("14d9"), e("2f62"));
            const c = /^(\w-*\.*\+*)+@(\w-?)+(\.\w{2,})+$/;
            var d = {
                    data() {
                        return {
                            title: this.$t("title.doc17"),
                            isEdit: this.$route.query.edit,
                            account: this.$store.state.userData.email,
                            password: "",
                            s_password: "",
                            j_password: "",
                            code: "",
                            time: 6e4,
                            time_show: !1,
                            time_status: !1,
                            areaId: this.$store.state.areaId,
                            accountType: "",
                            pwTxt: "",
                            email: ""
                        }
                    },
                    activated() {
                        let {
                            email: t
                        } = this.$store.state.userData;
                        this.email = t, c.test(this.account) ? this.accountType = 1 : this.accountType = 0, 1 == this.isEdit ? this.title = this.$t("new.doc46") : this.title = this.$t("title.doc17"), document.title = this.title
                    },
                    methods: {
                        ...Object(o["b"])(["Get_userData"]),
                        onEdit() {
                            this.isEdit = 0, this.title = this.$t("page.doc206"), document.title = this.$t("page.doc206"), this.$router.replace({
                                path: "/user/forget_password?id=0"
                            })
                        },
                        onInput() {
                            let t = new RegExp(/^\d{6}$/);
                            this.password && (t.test(this.password) ? this.pwTxt = "" : this.pwTxt = this.$t("page.doc208")), this.s_password && (t.test(this.s_password) ? this.s_password !== this.password ? this.pwTxt = this.$t("page.doc101") : this.pwTxt = "" : this.pwTxt = this.$t("page.doc208"))
                        },
                        onBtn() {
                            let t = new RegExp(/^\d{6}$/);
                            if ("" != this.password) {
                                if (this.password) {
                                    if (!t.test(this.password)) return void this.$toast(this.$t("page.doc208"));
                                    if (this.s_password !== this.password) return void this.$toast(this.$t("page.doc101"))
                                } else if (this.s_password) {
                                    if (!t.test(this.s_password)) return void this.$toast(this.$t("page.doc208"));
                                    if (this.s_password !== this.password) return void this.$toast(this.$t("page.doc101"))
                                }
                                this.$post(this.URL.user.jymm, {
                                    accountType: this.accountType,
                                    verifyType: this.isEdit,
                                    code: this.code,
                                    password: this.$md5(this.password)
                                }).then(t => {
                                    0 == t.code ? (this.$toast(t.message), this.Get_userData(), setTimeout(() => {
                                        this.$router.go(-1)
                                    }, 500)) : this.$toast(t.message)
                                })
                            } else this.$toast(this.$t("page.doc39"))
                        },
                        finish_time() {
                            this.time_status = !1, this.time_show = !1
                        },
                        send_click() {
                            this.time_status ? this.$toast.success(this.$t("page.doc96")) : this.send_code()
                        },
                        send_code() {
                            if (void 0 != this.account && "" != this.account && null != this.account || (this.account = this.$store.state.userData.mobile), c.test(this.account) ? this.accountType = 1 : this.accountType = 0, this.time_status) this.$toast.success(this.$t("page.doc96"));
                            else {
                                var t = this.URL.user.code_send,
                                    s = {
                                        accountType: this.accountType,
                                        prefix: this.areaId,
                                        account: this.account,
                                        type: 3,
                                        captchaKey: this.captchaKey,
                                        captchaCode: this.cap
                                    };
                                this.$post(t, s).then(t => {
                                    0 == t.code ? (this.$toast.success(this.$t("page.doc99")), this.time_show = !0, this.time_status = !0, this.$refs.countDown.reset(), this.$refs.countDown.start()) : this.$toast(t.message)
                                })
                            }
                        },
                        path_url(t) {
                            this.$router.push({
                                path: t,
                                query: {}
                            })
                        }
                    }
                },
                n = d,
                r = (e("2d7f"), e("0c7c")),
                p = Object(r["a"])(n, i, a, !1, null, "9d2ee7be", null);
            s["default"] = p.exports
        },
        ab4f: function (t, s, e) {}
    }
]);
//# sourceMappingURL=chunk-0830ec22.94ec9a30.1717187934571.chunk.js.map
