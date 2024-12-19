import {
    c as d,
    m as l,
    q as f,
    t as v,
    j as m,
    v as w,
    aA as h
} from "./vant-3s7b3naM.js";
const k = {
    __name: "ComPicker",
    props: {
        columns: Array,
        title: String,
        show: Boolean,
        customFieldName: Object
    },
    emits: ["update:show", "confirm"],
    setup(o, {
        emit: c
    }) {
        const i = o,
            s = c,
            e = d({
                get() {
                    return i.show
                },
                set(t) {
                    s("update:show", t)
                }
            });

        function u({
            selectedValues: t
        }) {
            e.value = !1, s("confirm", t[0])
        }
        return (t, n) => {
            const r = l("van-picker"),
                p = l("van-popup");
            return f(), v(h, {
                to: "body"
            }, [m(p, {
                show: e.value,
                "onUpdate:show": n[1] || (n[1] = a => e.value = a),
                position: "bottom"
            }, {
                default: w(() => [m(r, {
                    title: o.title,
                    columns: o.columns,
                    "columns-field-names": o.customFieldName,
                    onConfirm: u,
                    onCancel: n[0] || (n[0] = a => e.value = !1)
                }, null, 8, ["title", "columns", "columns-field-names"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
};
export {
    k as
    default
};
