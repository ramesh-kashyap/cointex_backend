import {
    _ as W
} from "./icon_copy_min-DeS-a5w4.js";
import {
    u as U
} from "./vuex-MbEfqX8_.js";
import {
    u as w
} from "./vuerouter-7dy5tY0D.js";
import {
    _ as f,
    a as L
} from "./index-WOgA1gKg.js";
import {
    g as H,
    c as m,
    m as h,
    q as r,
    A as u,
    j as B,
    D as A,
    y as s,
    x as S,
    u as v,
    E as Q,
    G as J,
    F as E,
    H as K,
    J as X,
    M as k,
    z as b,
    r as P,
    t as I,
    v as N
} from "./vant-3s7b3naM.js";
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
const T = n => (Q("data-v-d4bb14ac"), n = n(), J(), n),
    V = {
        class: "head"
    },
    Z = {
        class: "info"
    },
    D = {
        class: "name overflow1"
    },
    M = T(() => A("img", {
        src: W
    }, null, -1)),
    x = {
        __name: "ProfileHead",
        setup(n) {
            const {
                proxy: a
            } = H(), d = U(), o = w(), t = m(() => d.state.user.userData), i = m(() => t.value.avatar);

            function c(e) {
                a.$common.copy(e)
            }
            return (e, g) => {
                const p = h("ComImage"),
                    l = h("van-icon");
                return r(), u("div", V, [B(p, {
                    src: i.value,
                    class: "img"
                }, null, 8, ["src"]), A("div", Z, [A("div", D, s(t.value.userId), 1), A("div", {
                    class: "invite",
                    onClick: g[0] || (g[0] = C => c(t.value.inviteCode))
                }, [S(s(e.$t("user.doc13")) + ": ", 1), A("span", null, s(t.value.inviteCode), 1), M])]), A("div", {
                    class: "icon",
                    onClick: g[1] || (g[1] = C => v(o).push("/profile/info"))
                }, [B(l, {
                    name: "arrow",
                    color: "#000"
                })])])
            }
        }
    },
    O = f(x, [
        ["__scopeId", "data-v-d4bb14ac"]
    ]),
    G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgBvVbbbdtQDCWvZBdF6zbZwAEKFPlLNmg2UN0B6myQDepOYHQCpwM01gZVJrD7lY/EsDJBU/SjgJ1LlpQf0dOKlNjnw5e6D54jkuI1Qk1csddukvmp9mxGJ4cv/RBqAKEGVuQM0F46CeuKMFARaXKF2u4LHI7Y24OKcPVHD76emy4ZCt+7vl+0Wfc12RkycDu9hoxHLca+mKebzr+y4CGZvXtLvkYsikDrHnvoQN9BM5zQx9HVP6+d56DFZsDMR1CM7jV3+nkL13PvwxsyI4NmoFwNF890PpMCljdpNM30xnYGcSETdczgQQmQ4Ez2foHYW+tZNMm0ocG3OkYpkPCFnPXVFSFdOdyLhIljeCRkb2/Kn8KZtX9cMv048QpEcLsWwAbDqJQKnEENWOJzSWmBVxGANNYxSoHj2AB2DElVGI2rCcn5FHJCtSXcvXMu9tV4KELGMewKzGuutQAkvoRdgeFXRsCiEDci/Gtof27oQO0cp6cSVgTibyV+wCIHGQFzx25OAcL4GP27Q/RDEXGSEKHk7sX5wmQfSrAqwIXbGCa281s+m8J+7hjsHuCP72rrndDQ25Dh64o8757IQxSpJRKdULpgsOmgftvSYD6rrZGQlBxXJReSIP6YbMVMt1CCuAhNSSXyiOOhALMC0ATwCMRFVCKHKMphoYDSQkyJuKHOUMhHXKWBLVvw+jG9XlaIT0W8ABXZ6xh5ax0xz3f2L5lNFslzAnPafUYAbTECxHBZKqDhgI/w/CKkQ47tnIL0/H8atjHYPElPdwAAAABJRU5ErkJggg==",
    j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBrVaBcYMwDPzmOgCdoIyQTlBGYIN4g9IJoBOQTkA2IBu0mSDdADagG7RWMVchbGMIf/c5B8mSIssfAD8izVyz0fwxvGpWmjE2xkGzY4kkyZZhI7x4EkkecCNijH8ZtTNB315CinGLO2ZbhUokswWLRNICN+DKAqUev0QUthr8fHyIFvgGJ5w7m8UJd5ZnLVvv7dv+CikxTU7HUWsqLEAB/9DQufruJ9+rEIBIBKyZrQxIJJkjAArT88kxVZoCY4nbm72N8C3h+GUU9MNSpSzghHGrFcbtI9tR7BldsdhS1cBK2I5wd0MJ2wkORbIl60zwDP4hKuBWHDkP2c5UFTOnN80HQ0r2LGzfCAf5vrPvyR36uzPct1dMW8btT5pfokgqKDHrT82LWbfoW0p+DXs2qyxyWhXCr4SSMaTSLGnXKtwH+LT4b98j+jYB4S3l8kjHMWmZRA33FAL+KSUoZj/vMI8LW9Orx5J/90FMBpzpg9+T2LGJ+1TCruC++Fx7h0m1StkcS8xLWwX7xE5emkLZmCB8KChWbolXQIAc6xVJQyiFZDEU3EIvtTjFhlDou8Lf8hrzjDTYOs2/FVQq9DAn9tQAAAAASUVORK5CYII=",
    y = n => (Q("data-v-04b742f2"), n = n(), J(), n),
    z = {
        class: "invite-level"
    },
    q = {
        class: "left"
    },
    _ = {
        class: "title"
    },
    $ = y(() => A("img", {
        src: G
    }, null, -1)),
    AA = {
        class: "name"
    },
    tA = {
        class: "vip"
    },
    sA = {
        class: "btn"
    },
    oA = {
        class: "left"
    },
    eA = y(() => A("img", {
        src: j
    }, null, -1)),
    iA = {
        __name: "InviteLevel",
        setup(n) {
            const a = w(),
                d = U(),
                o = m(() => d.state.user.userData);
            return (t, i) => {
                const c = h("van-icon");
                return r(), u("div", z, [A("div", {
                    class: "level",
                    onClick: i[0] || (i[0] = e => v(a).push("/profile/level"))
                }, [A("div", q, [A("div", _, [$, A("div", AA, s(t.$t("level.doc11")), 1)]), A("div", tA, s(o.value.levelName), 1)]), A("div", sA, s(t.$t("level.doc12")), 1)]), A("div", {
                    class: "invite",
                    onClick: i[1] || (i[1] = e => v(a).push("/profile/invite"))
                }, [A("div", oA, [eA, S(" " + s(t.$t("invite.doc1")), 1)]), B(c, {
                    name: "arrow",
                    color: "#000000"
                })])])
            }
        }
    },
    nA = f(iA, [
        ["__scopeId", "data-v-04b742f2"]
    ]),
    aA = {
        class: "assets"
    },
    cA = {
        class: "total"
    },
    lA = {
        class: "name"
    },
    rA = {
        class: "val"
    },
    dA = {
        class: "assets-box"
    },
    uA = {
        class: "box-info"
    },
    vA = {
        class: "info-item"
    },
    gA = {
        class: "val"
    },
    pA = {
        class: "name"
    },
    BA = {
        class: "val"
    },
    CA = {
        class: "name"
    },
    mA = {
        class: "box-info"
    },
    hA = {
        class: "info-item"
    },
    wA = {
        class: "val"
    },
    fA = {
        class: "name"
    },
    UA = {
        class: "info-item"
    },
    HA = {
        class: "val"
    },
    SA = {
        class: "name"
    },
    QA = {
        class: "info-item"
    },
    JA = {
        class: "val"
    },
    RA = {
        class: "name"
    },
    YA = {
        __name: "ProfileAsset",
        setup(n) {
            const a = w(),
                d = U(),
                {
                    proxy: o
                } = H(),
                {
                    decal: t
                } = o.$math,
                i = m(() => d.state.user.userData);
            return (c, e) => {
                const g = h("van-icon");
                return r(), u("div", aA, [A("div", cA, [A("div", lA, s(c.$t("wallet.doc3")) + ":", 1), A("div", rA, s(v(t)(i.value.totalBalance, 4)) + " USDT", 1)]), A("div", dA, [A("div", uA, [A("div", vA, [A("div", gA, s(v(t)(i.value.flexibleAmount, 4)), 1), A("div", pA, s(c.$t("wallet.doc4")), 1)]), A("div", {
                    class: "info-item",
                    onClick: e[0] || (e[0] = p => v(a).push("/wallet/pendings"))
                }, [A("div", BA, s(v(t)(i.value.pendingAmount, 4)), 1), A("div", CA, [S(s(c.$t("wallet.doc5")) + " ", 1), B(g, {
                    name: "arrow"
                })])])]), A("div", mA, [A("div", hA, [A("div", wA, s(v(t)(i.value.totalIncome, 4)), 1), A("div", fA, s(c.$t("team.doc11")), 1)]), A("div", UA, [A("div", HA, s(v(t)(i.value.totalWithdraw, 4)), 1), A("div", SA, s(c.$t("team.doc13")), 1)]), A("div", QA, [A("div", JA, s(v(t)(i.value.teamCount, 4)), 1), A("div", RA, s(c.$t("team.doc14")), 1)])])])])
            }
        }
    },
    FA = f(YA, [
        ["__scopeId", "data-v-29c31dce"]
    ]),
    EA = "/assets/challenge-D6PgA2Mh.png",
    bA = n => (Q("data-v-b03ff25b"), n = n(), J(), n),
    yA = {
        class: "text"
    },
    WA = bA(() => A("img", {
        class: "img",
        src: EA
    }, null, -1)),
    LA = {
        __name: "ProfileChallenge",
        setup(n) {
            const a = w();
            return (d, o) => (r(), u("div", {
                class: "challenge",
                onClick: o[0] || (o[0] = t => v(a).push("/profile/challenge"))
            }, [A("div", yA, [A("h3", null, s(d.$t("invite.doc2")), 1), A("p", null, s(d.$t("invite.doc3")), 1)]), WA]))
        }
    },
    KA = f(LA, [
        ["__scopeId", "data-v-b03ff25b"]
    ]),
    XA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVfSURBVHgB7Zs9bFtVFMfPvXYiAc0HEgxQUByRVEoHkrZIFQON04DUpTRxxgyknWCJGwaYSpPShQ5tkompdYaw1UkkBiRI44SBVqIiYWgk6lAXURhAwk2jDkl8D+dceI7tvtjOfe+l9kt/ku3n9/33Offcc67vE2DI3Y2eMKDsEEHoBIQOAdCI9AIPoHOnlcCUAJHCDCwBqERrzXQCDBA72fkn7GmsBxkFBWe9ElcudOMpuofExroaaXtuOrWD40rzv9DzSEKhMomVK7yk4HvYF1UKh5+2RUvBFs8gjBwIxmMl9tueFYxcqWCr2oISRltFfGi77baC2YXrUEwBijBUIShwcU1g1yExnS7cJu0OqMfAXLWKZQSKDm0wG54QrN0YsQOqHTLYXdJSuDrPpX/Z7BmQQl4DH0HBdqg1EB+1vmcFL2NPqFbJOdohBP4i/UiqZqs9Z126RlE/6z+xTOM+yiGsL9rCbF0SfA98DFn5RbaytjBbF3zOvk2p8wktmMwcBp8jJET1J1c9Qso52AOgUl1kYRmGvQKVs0EhRLvurRywmt6A+MR9+D31GFYfroOb1DfUQltHAxztfBleCz0PjpAYJsEQciI3NpaEsQvL8IhEe83gZ20weL4NTJFk3CBZNwSGjI8swziJ3S2sa5mK5hJXJDMRIwPfSvwF/d3fZ78f7XwJ3jv1KtQ31oCbcHO5Rl704P7j7LrJG+9oFzfBWPCHkR/gu5k/9fK7p16BL+Nvg5fkXo9/3Mkbx8AECYbcmv87u3zucjt4TTTHjZeXHoIpxoJzg9R+p9GzDNrat0aYVh0ESGPBuXxy5kfdJXkFn7v/+AK4gSuC4xO/QfiNb3TUdhO2JJ/z5JHZvCbkBFcEW3C30UnCr1MS4pRvZ/6Ak4dn9Tnd7ONdEby/aasNPyD3+/TMbe2CJm5+hwISH/tR5GZeV8SR2Q1cETz/6wn44uqRPOHsguzm5bZvdt+LQz/D+4fz3beO+nU+t2k3VIhrLt33QRN8RTc1EG3JW8/tu797oaibc3rKTSE2nsxbzxnVwsoJfW63ME48WgLx7DKdI28bu/XnHy9lEwUL7r4mZ49liwDO1riNFgYkdt9LV996orsrds1yCYIH8I1y5sVW5ShrtUX+IdjNWRC7cGECwcddIvc1TRvLwdUoXQi7IrfvwmSfLZorltsp7/P17W5PxTKeCrbgsm6e2mLEpi1yHs5CeZ86lwsPOzxxaTssdz13+U3qetJa3OtNL+yKyFx2TbAFC/TabYuxKy5dSTwT7HeMBecGm+VF84K8XHLTUyfDSMaCD7Y3ZJfHL9wBr7lImZuFk6BnPog3T4N4x7cG8bjbOT3Y4skgHpeKuemno0G8lUzkH9MZOpwHu130l4IzMk5SDEkHSSz/UWwk2LrwbojmmMEDeQODLWAK8my+5GbfFAjsAQdwUXCTXJyDl9t/tTAHaQCP83KnWRkizoiV9chZDMAV2AOgghGphFqEPYNK6CkPTgJXFZGiAYRm3Q8rBWPgfxL8pgUHg2oUfA7PtuVPLbiZ5zAp9LOVY9bU4mxqGQjisPivT/YbKcu6TFYwW1llYAR8hkLImzieVzy01sZHfeXapKVwwrjtfOmk6q3q6cMMCrHYKq8fKlxvWx4GBPYKgdWbkCAm1kSmy25T0UcAkhu9oyBFFKoJcuOWmqltH1soOgDABypUp2kxBZVPGjMwVEwsU3LE40BwOrYhVZdCnIBKhazKc6J10C3Bjh7U4mnGgYwYlkJ0wtOfW52m6mdsjbJEu4c5tmNHgnPRj+KBDAsB7RTgQggiBN4VIGn9QlgkkfNAFZ7po3j/AseyPyHtxrzVAAAAAElFTkSuQmCC",
    kA = "data:image/png;base64,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",
    PA = "data:image/png;base64,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",
    IA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUXSURBVHgB7ZvPbxtFFMffrJ1KoDY1Ej1AETgiqeQeSCohARfihOaI6iTHHtryBySkBzgU2gR64tCmvcCJOpU4xkkLB0SK4sCJQ4ndQyNRR3WiBA6A6rZRDjiex3tDd2Ob9a94ZmsvfCTHu57xyt+8tzPvzbwVsEfu5WNRQKtPBKEfEPoEQAjpBQaga+ekwKwAkcUCpAFksqdjPgl7QDTSeRljoU6wxkHC+6bE1Qv98Cz9hmT+LzkVeWY+28D3avNE6AUkodCaxOsVXlPwfRwdlxInn7ZFa8EWLyBMHQkm4jX6VWYVRy63sFVdQQume0RiolK7q2B24QMo5gBFFNoQFJjaEjhwTMznytssty90YmCxXcUyAkWfMpgL/xKs3BixD9odMtg90lL+cYlL/7ITO20J6xr4CBpsJ3oCiWn73BG8grHwPmktUocw+IvcY0t22fez49IdkuZZ/4llQvsphrBPlIXZuiT4PvgYsvJzbGVlYbYu+Jz9O5aKJ5RgMnMUfI6wYFy9c9YjLGsRPOBRLg+3bvwKG9ltdR7pPQiRvhC8FH4WvAClHAiSkaNgGBZ68ewdSMysubaPnHoZxs4fNS+c09nMzugchSYxMARb8+TgD7C5tl2132ES+9X3bxsVTQHVDbFaGF1GMBNZuYl9o/95cuUQdIY64Kel3+n1h9PGor+5/Q4coDYTcEZFLo1hMMTVT1YcsSzii8SbJPhQUY8ILNA9/cF7t+Exuf0m/YM+PZuGz758HUzAKa7IFEYQDMDWjb76rXP+OYkdOvGia1+29MnBH53z5T/fNWZlCwyxkt7NzNiNK4n9p/2Q6mPzHVndFOYEpx46x6Vu7A7f1zab2W0whTHBjdJpyIXLaRnBXvGfExwEzdxNP4REfA0Wbu4OPLPX19RIXI2Norma+3N0dnq8W3sgonVaujq1ouZenYydj8DYhQjoQptLmxCrrkvX5GvrQouFy4MMnlPZHZsZea9dyVBm9Ztz/vXPgyVT117Rcg/H6cfZHD/xAoWQb0Gz8NzNcbgdayfi63DucosILo6qzpBlq8HecOtJJHWcoq9qgxJ7iS34bjoHOtA+SlejOFFgOEeuFmN3HtQfjHg6D1+cuOOIdT4j0V7iqWC3RQCTcbMbngouzohshmiQ8xJPBXNizwt3Nnz80aVe8BJPBfMSTvEAxceHPVqxtPk/W/I7ngsudmGv3ZnRHng8erBTtX301Cuux15hcdEXNElxUL9wc7NmfxZaj9jZ6+vOsSZvyFmoQfBQbHcuTcysq3Ruo4mAQm3NTJRuzejwBuRqPl1bLR9SjDxbYe+oWXjvScfiPG+1WELiEmjg3KXXVGqoG47OPtYVnKBIad8uZSuzK/LaVnmiUC+863CUorCROu/1euHtUlXysFoYedDqpYUayHYHEl1qHpYSroD/SfIfJTgYlNPgc7jalt+V4C6uYZLoZyvH7dJiJ7QMBHFSRxDSgmRt6zKOYLayLMAU+AyJUFI4XpI89OxLTPvKtUlLecG4a710Rg63dfkwg0KkeqzZY+Wfu6aHAYHDQmAK2hXE5JYoDLg1VX0EIJMfnqZ8ahzaCXLj7o65io8tVF0A4C9KlGfoMAutTw4LMFFNLFNzxeNIcD6et+SARJyBVoWsyjXRatCtQUMPanGZcaAgJi0h+uHp11bnkELiLYoS3R7mqERDgotRj+KBFRUCemmACyOIMJhLQHLqhZAikUsgZGqvj+L9DcEmF003wmtCAAAAAElFTkSuQmCC",
    NA = "data:image/png;base64,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",
    TA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASFSURBVHgB3Zs/bBtVHMe/79mpBGqCkWABBI5UVwpLXBhgahz+jAjH2WAofyaWhjDARhPExILpxATpwhbHldigxGEiQ4XDQCSaqq5EylAkDI0Y6vj9+n5PsXt2znbu+c53vo/k+N+d8z76vbv7vfd+J2DJjUY+B5JZkcQcCFkBpEg/EAD6t+tKUE1A1KiJHUBVMhPlCiwQXjb+lfKpKcglKHwYlNxJ0Q2v6TZUGvfV6swj5ZqH/QZzJHqJtCiiydpJxQcK36LFJaVoJeyIDoIj3iSsnk2W1gZs15ubVPgywlF1hSSKGVFa7vW9qzB34UkSGyCRwxhCgqoHgubPiXK9+zvptsMUJTbHVZYRJLImYC4cEzbdmCiLcUcH7IZ26f64o0v/cZh/Rwr5LWKEPtkuZxKlYut9W3iX8ulTSm7qDdKIF/V7Uk23jud2l55Q+jobP1kmdVrnEK03JsIcXS18CzFGR/lxjrKJMEcXMef0oTT5hBHWYc4h5giJJfPMox4h5SZ84L96Az9evYM/a//DK0+nH8Xihef6brN+5bZ5HrRdL0ip+aQOcg5DwqKff/QbSkcNGoZeMpdXd3H5s92B2/VFD2eTQohZc7WyhKP59is/Y/+296ielG5ZayTltDDStrpusi/NPYGZ2RSmUhPwQq8u3S178dKMdZeWOri6S1MalnBDWrKTWvDr0sta+En4hZvsxU9nYAsPcaXtOJej6zxmv/jmxUjLHpGSsGR35+HIi7vx628+Bb8ISNZgL1z9t/16DCLbxlo4CIKWZSIjPApZJhLCJ5XlTGt9yOQmiZDxIvvJe9fb762vxQgRL91435Gf79fss7rQhEd1zHYTinBYsszIhcOUZUYqHLYsMzLhKMgyIxGOiiwTuHCUZJlAhaMmywQmHEVZJhBhTgOjKMsEfgxHSZbxZfBwT0/TOnEm9rZJflBYCz+jZxlb/L5zbKHdd9Htrbvt1zwraot1l37NMYe1vfV3R4P85ofyHfM/WjyffQy2SC76ggU871xwRPGDwi+6YX/Bb7Yrd/Hx+w/HwYULz5o5bEvqYq9Z4GXSNCzgJZY3Xrh2bCLej0k9/m2eGXVGlkW/u3beWpiLXcTe4eIGBOVhCQ/G3wp4qYUZVpYhoqtSKNrCEJiG/HS+o3v7DXfj76+/OpSsgUTV1+VSjjafsZ1z1sPAVwKe4J/0uE7VC14uNSUPN5uFf6JeWugDtTOJ0rS5LCmFrxB/KvzHCCeTqoiYw9W2/GyEp7mGSVGco7zWKi1uZ1qJJK3YJiERp9aKLtMW5iirJlYRMxSho3C8I5fOnCoVY9W1tUt3wbhrvfSeWhjr8mGGhKhm5Pq57s9dR0sJQQtC550YV4gqB6I57/ZV31sA9hoLRT2eWsI4obvxmYmNnrct9B0P846K1Lv6ZQ3Rp05NLPeTZQZOAJxNltcaUs0roiuIKjqqXBNtTroD8HSjFpcZJ5piRQoxh/Brq+ukU+IDnSW63czRC0/CTsyteJA5ITCrT3BpgkgjuAFI3TwIVS25BaGqtrfiPQC54Sltot8ANwAAAABJRU5ErkJggg==",
    VA = "data:image/png;base64,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",
    ZA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARGSURBVHgB7ZvPbxtFFMe/b+xUArXBSHBARYojxZXSA07h0FvjgJB6QTjJEQnafyAmnFGaIDhwqts/gLoHequTShwpcbhxQDg9EIkm1JVAHEDCtFEPOJ7HvBXeOu4mjj2zynrrj+R4f2e//s7OvJl9Q+iT+418DqymKIlpMKYISLH5IATMteuauEagGjexCehKZmStgj6gXg7+ifOpUagCND4OS9xRMTdeM/dQafyrVyZfWKv1cF53/hd6hY1QRJPSUYV3FfyA5wta8/JxO9oNcbzJWDmTLJe6HHcwOzx3NcKuBsIKxQyVFw/aHyhYivApplUw5TCAMHF1l3jmHK3VO/epoBNGObE+qGIFYpryDAvgGcFeMWaewqBjDLtvtHRu3lekf9nLX1KkbiBGmMp2MZMoF1vrvuAtzqdPaLVuDkgjXtQfKz3eep79Ij2iTTsbP7FC6qSJIVornsPirhH8ADHGuPyyuOw5LO4i5pzcU1484Qk2NucQc0ih4H1Lr4eUWoclj+oNlK5t44eNP83nL/TKqdQI3n3/NSwsncXr6RcRBqz1jBE8t2zUWxXp32pP8MHb3+P3h0/ggoWlSSxcmYRrTNdyURFRFpa4FCtc/2wL11e24BzFuSQR0oz+uX3z4T6x4szlhQmviPbCz5t1fLF4z38cRHTreq4w7mZNpcVpWCDPbYtPr77hFcdexQpnsyl8/d0FzH805m9z7bR0cZVtP3dr8x9/ef7DMdjy5VdvhSk6peCQfpwNIkzRTgW7JEi0NHm2RFawIKLPT7/ir0sFaUukBQvttfS3d/6ALUmEjDx7rSamG0EBx/npV/1lieZsCd3ho4rt9dh+CV1wL4FDGOFkJ6EXaa+YLoUv5KhEvtJyzVBw3HnuBEe+HXbNsB12zbAdPmaGtXTcGQqOO04FP3bQX+3kkeNrKkn6ggXtQzA32oZsXVFuG9aZzL4ES+oyTGsp+OmIhAQOMk7twhW5hkRpn39yz992qTABG1iy+bb35ldBnEefyI299+Zdp69agjhtXrBt7FyEDcx8R5HmDVgwasaib5k3BqfHwnnjJ4jYW3cvwBqmqtKkq7DE+/V/vegNqzp4znykfpBw85sf3/H+hz264qU87DTn/o56aqEDahOJ8rjXLGmNa4g/FfnjCU4mdRExR7Jt5dsTPC45TJrj7HKplVrsR1qJJC/bBiERpdZyV/AFi8u6iRXEDM3Ylzi+L5bOnCgXY1W0jZbOhPHAfOltPTvQ6cMCE1Uz6va5zu2BvaUE8SwRWwckxwZzZZeaM0G7Dp0CsN2YLZr+VAGDhCnGEyOrB05bOLQ/LCdq1pfNYg3Rpy6JZ4eJFboOAJxJrpUaSs9o5puIKsZVyYn2Kt0u9DRRS9KME01aVkTTOP7c6jqbkHjXRIlBkzkOoifB7XhT8aByRMiaCi7NoDTC64DUvQ+jakRuwPTw+p2K9x/Ce7ucz0XJRQAAAABJRU5ErkJggg==",
    DA = "data:image/png;base64,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",
    MA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASaSURBVHgB7ZvPbxtVEMdnnp1KoCY1gl4AUUeqK6UH4pZDj3GAA5cKJzlyoPAHYNILF0QT4MIFTLlDgsTRThBcIbY45VDqcGgkmqhuRU4FYWjEAcdvOvOUdTbOOo7f7jr2Nh9p7ef94d2vZ/bNm+dZBEvu1rMZIJXGOEwAQRoBEsQLhAB/d00jVRGwSg1YA9Cl1NByCSzAbna+TdnECKgcaHg/LHFHhS+8ytdQqv+v58eeWq52cVxndoXeIBYK/cnCUYV3FHyPZnJa09xxW7QTYvEGwfyFeHGhw37t2aTpL/rYqp6QgnwKi7PttnsKFhceJlwCwgwMIIRU2UaavITLtdZtyuuAEYqtDKpYAQnTxmAeHBBs3JgoDYMOG+wua2ldvc+lf9/JXlOovoEIwZ3tbCpWzDufm4LXKZs8pdUK75CEaFF7pPSocz83XXpIc5yNnlghcZrHEM4HY2GxLgu+BxGGrfyMWNlYWKwLEef0jjLjCSOYzZyBiIMKcuZdsh5UagV6wGrpIdz8eB3urP0Dj2p1uDLxHEy/fQ5meOkFpPVknI2cgR5wc37diHWzWv7TLFvV/+C9G2MQOpzOKkQch5ApLN4/INaNbFstP4TQUZRhweGHoiILdhD3vf3XVShvvrHPlcUDwobFjuNmY/rvsFO/87Fisy1CX0g+bdr/8n18+dkfTHskMQS/8g8RMjXV6zzXESuISAcR3wMSCp4wnjjBcfBJa2z1g/tebyWomO1LsFdsDYugYra1S3eKrWHhN2ZbW7g1tn74+csw7Op1j8pGY7rjPmJVEVrYPad41nc/nwUbkE9IYEG72BoWQcVsa5d2W3PEwrLd4o7TfmK2teCL42ea7U+ur8Ef7HZhIQK/cvUX0mPbYu3S0nG89eovcBx89vUr1uHJ2sJXJs72JqVrQc7pJxZbW9hBek7psSVGhom4sYiVH9oPvgU7uHvto4Sa4/rOk+Qh6pwIjjongoNEQlbBlWTYrg8S3xMAgtfYVi78g3dvNT87g4Vu1zvI5MJwAGP2QCy8XtmrLBjbHWNvucbWtu0Xz+1lYHfWDlQvWKGk6At8Uvj2QbM9lj4DQfH6m8832wHNW5tpWl+CZU7LPRmQ++giBMXMtZf2zmOmePz9O0FSzbexM7MESFmwQO7dq5d/gq374aWGbmSS4cdbr1nfy0T0vUJNZbDk0+u/9UysIPe25N7WEFaURl0BC+TkxZBDiBfFxQc+poN1yZQ89OL/pT6gytnXqAlLWsOXEH1K8mIEx+M6DxFHqm3l3QgelRomTVG28oJTWtwcacXiNBfEIKQPqTrWFZqCxcq6AfMQMTTBvsLxfWPp1KliPlKuzVpaC8Y966U39NRAlw8LhFhJqcKl1vWe2VIMaQqRrAYkfQFRaRsbk16bDn0EYKM+led8KgeDBLvx+aGlto8tHJoPy4Ga9DvcrEL/U6MGzB4mVug4AXAhvrxQV3pSEy1Cv8JWlZpo0+l2oKsHtaTMONbAOYU4AcdfW10jHhJv8yjR62GOdnQl2I15FA9UBhHGuYNLEmASwktAamYhqLDIMnCGZ/so3mMgjCCUcOPPwgAAAABJRU5ErkJggg==",
    xA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARMSURBVHgB7ZtBbxtFFMf/b+xUompDEHAqUh1IKuXSJOXQW53QSy+VEufIgfYLxIRzRROkHrhQtx+AuEj0RJ0gOPRSYvfGAdX0Eok61JHoCRAmjXrA8Tzem9Zu4q7j2rtO7JV/0np3vbuj/fvNjGfee0Nok0flmSmwmaAo4mBMEDDEsqEDSNklS1wkUJEr+BWw2dGB1SzagFq5+QHPDA3CJGHxaafEvS7y4kV5h2z5P7s09sZqsYXnmvNC6FUWoehO0q8rvKngxzyXtJYXD9uizVCLVxhLp6KZdJP7GrPBietdbFVP2CA1SpmFRtc9BWsVPs60AqYp9CBMnN8mnp6k1VL9NeP1wCBH1npVrEJME85gHrwi2FVj5gn0OmKwR6Kl/us9Vfq3nZlLhswyQoR0tgujkUyqel4TvM4zsSPWrMkNMYSL0lNjh6vtuValB6z8z4ZPrDJ0TMYQ1RNnYbWuCH6MECNWfkut7Cys1kXIObZj3HjCCRYzTyHkkEHS7XXWQ8asIQC2SmWkbxTwc+5P2f6CH8bG38Sl5AjmPjmJoGBrp0VwYlHU+67SfxSf4eOP7uPJ5jMEyYnYUXx77xzek71fZGq5YIhoHAHQCbHKE/0hz9/HU6k9vjE8FSVCjOGPO7c294idvzqGy/MjOD40gHZQcd99s4lrCw/duYpelqai5fpBrDsunRbH4BNtt1WuXD+N+c/H2har6LP6g2k5VbRf8ItOcalQSfg1MEYimdrxg78vNhQbf//uK9Ve22hu44Ln/doJnnn7h9q5vCv8YhAwfixbz2CAZVWJ4gDJ/X4Bh03gFu52+oLDTl9w2OkLDjt9wWGnLzjs9AWHnb7gsNMX3GnU4Tcpbpv4B3fd8UFz4IJvLq07r6R6Iq999hAHTeCCm/mPt/59eb2Z/2srCF90HUaTvuCTs/F3asfLu1y2Xlz56jROnDzqxO52w3qR2VXlNfQSAKUoPxfsKyXpbPzdWizp5hfrztuYkJiQl9dRY0XN4kXVGJWWVUXjTH5hzeYr7MytgHgGPtAXvHjmXkdCLcp+vutWYObvDVnOwSdqyds/nXNVNWhU7G0JpgUCU95YsnkEgLOC+J2//PrDQNqb9gsaS/rxl/Ou7GCwWZfysFFJ/NPtqYUBUJSQ0LD7W7IWNxB+svrhBEejNoWQo9m2uneChzWHyXKYrZyuphbXRlqRKC8GMQjpQopV6yo1wWplW8ESQoZl7Ekc3zOWHj2SSYWqaouW+oRxz3zpgp3t6fRhhYnyo+bOZP33nrOlCPEsEQcyIDkUmLPbVJn2urTvEoBCeTYl86kkegmpxiMDKw2XLew7H9YHLdvLclhE91PSxLP9xCpNHQCnoqvpsrHTlvkWuhWxquZEu063CS0t1NI040iFFg1RHIefW11iGRJvyyjRazFHI1oSvBu3FA9migjj0sHFGBRD5yYgJbcx8iIyB5nhtbsU73++XatyIZBKhAAAAABJRU5ErkJggg==",
    OA = {
        class: "title"
    },
    GA = {
        class: "navs-con"
    },
    jA = ["onClick"],
    zA = {
        class: "item"
    },
    qA = {
        class: "left"
    },
    _A = {
        class: "ico"
    },
    $A = ["src"],
    At = {
        class: "flexs"
    },
    tt = {
        class: "right"
    },
    st = {
        key: 0,
        class: "identity"
    },
    ot = {
        key: 0,
        class: "yellow"
    },
    et = {
        key: 1,
        class: "blue"
    },
    it = {
        key: 2,
        class: "red"
    },
    nt = {
        key: 3,
        class: "red"
    },
    at = {
        __name: "ProfileNavs",
        setup(n) {
            const a = w(),
                d = U(),
                {
                    proxy: o
                } = H(),
                t = m(() => d.state.user.userData),
                i = m(() => [{
                    name: t.value.email ? o.$t("title.doc40") : o.$t("title.doc39"),
                    url: t.value.email ? "/profile/email/update" : "/profile/email/add",
                    img: XA
                }, {
                    name: o.$t("title.doc38"),
                    url: "/profile/google",
                    img: kA
                }, {
                    name: o.$t("identity.doc0"),
                    url: "/profile/identity",
                    img: PA,
                    isNoShow: !t.value.hasCheckIdentity
                }, {
                    name: o.$t("profile.doc3"),
                    url: "/profile/password/login",
                    img: IA
                }, {
                    name: o.$t("profile.doc4"),
                    url: `/profile/password/transfer/${t.value.hasSetPassword?"update":"add"}`,
                    img: NA
                }, {
                    name: o.$t("profile.doc5"),
                    url: "/profile/feedback",
                    img: TA
                }, {
                    name: o.$t("profile.doc6"),
                    url: "/help",
                    img: VA
                }, {
                    name: o.$t("profile.doc7"),
                    url: "/article?categoryType=RULE",
                    img: ZA
                }, {
                    name: o.$t("profile.doc8"),
                    url: "/lang",
                    img: DA
                }, {
                    name: o.$t("profile.doc9"),
                    url: "clear",
                    img: MA
                }, {
                    name: o.$t("profile.doc10"),
                    url: "/download",
                    img: xA
                }]);

            function c(e, g) {
                var p, l;
                if (e === "/profile/identity") {
                    if (((p = t.value) == null ? void 0 : p.identityStatus) === 0) {
                        a.push("/profile/identity/pending");
                        return
                    } else if (((l = t.value) == null ? void 0 : l.identityStatus) === 1) {
                        a.push("/profile/info");
                        return
                    }
                } else if (e == "clear") {
                    window.location.reload(), o.$toast(o.$t("common.doc22"));
                    return
                }
                a.push(e)
            }
            return (e, g) => {
                const p = h("van-icon");
                return r(), u(E, null, [A("div", OA, s(e.$t("common.doc37")), 1), A("div", GA, [(r(!0), u(E, null, K(i.value, l => {
                    var C, R, Y, F;
                    return X((r(), u("div", {
                        class: "item-con",
                        onClick: dt => c(l.url, l.id),
                        key: l.url
                    }, [A("div", zA, [A("div", qA, [A("div", _A, [A("img", {
                        src: l.img
                    }, null, 8, $A)]), A("div", At, s(l.name), 1)]), A("div", tt, [l.url === "/profile/identity" ? (r(), u("div", st, [((C = t.value) == null ? void 0 : C.identityStatus) === 1 ? (r(), u("span", ot, s(e.$t("identity.doc1")), 1)) : ((R = t.value) == null ? void 0 : R.identityStatus) === 0 ? (r(), u("span", et, s(e.$t("identity.doc2")), 1)) : ((Y = t.value) == null ? void 0 : Y.identityStatus) === -2 ? (r(), u("span", it, s(e.$t("identity.doc3")), 1)) : ((F = t.value) == null ? void 0 : F.identityStatus) === -1 ? (r(), u("span", nt, s(e.$t("identity.doc4")), 1)) : b("", !0)])) : b("", !0), B(p, {
                        name: "arrow",
                        class: "icon",
                        color: "#000000"
                    })])])], 8, jA)), [
                        [k, !l.isNoShow]
                    ])
                }), 128))])], 64)
            }
        }
    },
    ct = f(at, [
        ["__scopeId", "data-v-6d0b29d7"]
    ]),
    lt = {
        class: "profile container"
    },
    rt = {
        __name: "index",
        setup(n) {
            const {
                _getUserData: a
            } = L, d = U(), o = w(), {
                proxy: t
            } = H(), i = P(!1);
            async function c() {
                a().finally(() => {
                    i.value = !1
                })
            }

            function e() {
                d.dispatch("logOut"), t.$toast(t.$t("user.doc33")), o.push("/user/login")
            }
            return (g, p) => {
                const l = h("PageScroll");
                return r(), I(l, {
                    headerShow: !1,
                    footerShow: !0,
                    type: "main",
                    refresh: i.value,
                    "onUpdate:refresh": p[0] || (p[0] = C => i.value = C),
                    onRefresh: c
                }, {
                    default: N(() => [A("div", lt, [B(O), B(nA), B(FA), B(KA), B(ct), A("div", {
                        class: "logout-btn",
                        onClick: e
                    }, s(g.$t("user.doc32")), 1)])]),
                    _: 1
                }, 8, ["refresh"])
            }
        }
    },
    Yt = f(rt, [
        ["__scopeId", "data-v-94e64e94"]
    ]);
export {
    Yt as
    default
};
