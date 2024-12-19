(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-f8e2ce82"], {
        4280: function (e, t, o) {
            "use strict";
            o("d7ad")
        },
        "9b23": function (e, t, o) {
            "use strict";
            o.r(t);
            var s = function () {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "page",
                        style: {
                            background: e.bgColor
                        }
                    }, [e._t("bg"), !e.$route.query.isApp && e.header ? t("div", {
                        ref: "header",
                        staticClass: "headers"
                    }, [e._t("header")], 2) : e._e(), t("div", {
                        staticClass: "content-container",
                        attrs: {
                            id: "scroll"
                        }
                    }, [t("div", {
                        staticClass: "content-scroll",
                        attrs: {
                            id: "content"
                        }
                    }, [e._t("content")], 2)]), e.footer ? t("div", {
                        ref: "footers",
                        staticClass: "footer"
                    }, [e._t("footer")], 2) : e._e(), e._t("default")], 2)
                },
                r = [],
                a = {
                    name: "PageScroll",
                    props: {
                        header: {
                            type: Boolean,
                            default: !0
                        },
                        headerFixed: {
                            type: Boolean,
                            default: !1
                        },
                        bgColor: {
                            type: String
                        },
                        footer: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            isIOS: !1,
                            backTop: !1,
                            head_height: "",
                            footer_height: ""
                        }
                    },
                    activated() {
                        this.$emit("onReady"), window.onresize = () => (() => {
                            this.head_height = this.$refs.header.offsetHeight, this.$refs.footer && (this.footer_height = this.$refs.footer.offsetHeight)
                        })();
                        let e = null,
                            t = this;
                        e = setInterval((function () {
                            var o;
                            let s = null === (o = t.$refs.header) || void 0 === o ? void 0 : o.offsetHeight;
                            s && (t.head_height = s), void 0 != t.$refs.footers && (t.footer_height = t.$refs.footers.offsetHeight), window.clearInterval(e)
                        }), 300)
                    },
                    methods: {}
                },
                i = a,
                n = (o("4280"), o("0c7c")),
                f = Object(n["a"])(i, s, r, !1, null, "cfc9a7fc", null);
            t["default"] = f.exports
        },
        d7ad: function (e, t, o) {}
    }
]);
//# sourceMappingURL=chunk-f8e2ce82.8a913baf.1717187934571.chunk.js.map
