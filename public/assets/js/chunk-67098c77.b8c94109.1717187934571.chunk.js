(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-67098c77"], {
        "19ed": function (t, e, a) {
            "use strict";
            a("3765")
        },
        3765: function (t, e, a) {},
        f642: function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tabs-con"
                    }, [e("van-tabs", {
                        attrs: {
                            "before-change": t.handleChange,
                            "swipe-threshold": "1"
                        }
                    }, t._l(t.tabs, (function (t) {
                        return e("van-tab", {
                            key: t.id,
                            attrs: {
                                title: t.name,
                                name: t.id
                            }
                        })
                    })), 1)], 1)
                },
                i = [],
                s = {
                    props: {
                        tabs: Array,
                        active: [Number, String],
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        text: String,
                        disable: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        _active: {
                            get() {
                                return this.active
                            },
                            set(t) {
                                this.$emit("update:active", t)
                            }
                        }
                    },
                    methods: {
                        handleChange(t) {
                            return !this.loading && (this.$emit("change", t), !this.disable || !this.text || (this.$toast(this.text), !1))
                        }
                    }
                },
                c = s,
                r = (a("19ed"), a("0c7c")),
                o = Object(r["a"])(c, n, i, !1, null, "83cbb658", null);
            e["default"] = o.exports
        }
    }
]);
//# sourceMappingURL=chunk-67098c77.b8c94109.1717187934571.chunk.js.map
