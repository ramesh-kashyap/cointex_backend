<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Team data overview</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover">
    <link rel="icon" href="/logo1.ico" type="image/x-icon">
    <link rel="manifest" href="/manifest.json">
    <meta name="renderer" content="webkit">
    <meta name="robots" content="noindex, nofollow">
    <meta name="google" content="notranslate">
    <script>
        window.addEventListener("error", function (event) {
            if (event.message.indexOf("Unexpected token '<'") > -1) {
                location.reload();
            }
        });
        window.onload = function () {
            document.addEventListener("touchstart", function (event) {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            });
            var lastTouchEnd = 0;
            document.addEventListener(
                "touchend",
                function (event) {
                    var now = new Date().getTime();
                    if (now - lastTouchEnd <= 300) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                },
                false
            );
            document.addEventListener("gesturestart", function (event) {
                event.preventDefault();
            });
        };

        if ("standalone" in window.navigator && window.navigator.standalone) {
            var noddy,
                remotes = false;
            document.addEventListener(
                "click",
                function (event) {
                    noddy = event.target;
                    while (noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
                        noddy = noddy.parentNode;
                    }
                    if (
                        "href" in noddy &&
                        noddy.href.indexOf("http") !== -1 &&
                        (noddy.href.indexOf(document.location.host) !== -1 || remotes)
                    ) {
                        event.preventDefault();
                        document.location.href = noddy.href;
                    }
                },
                false
            );
        }

    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            background-color: #000;
        }

    </style>
    <link href="{{asset('')}}assets/static/js/app.83a7756d.1717187934571.js" rel="preload" as="script">
    <link href="{{asset('')}}assets/static/js/chunk-echarts.eba990db.1717187934571.chunk.js" rel="preload" as="script">
    <link href="{{asset('')}}assets/static/js/chunk-vant.9e1db231.1717187934571.chunk.js" rel="preload" as="script">
    <link href="{{asset('')}}assets/static/js/chunk-vendors.24e8c7cc.1717187934571.chunk.js" rel="preload" as="script">
    <link href="{{asset('')}}assets/static/js/chunk-vue.2deea45a.1717187934571.chunk.js" rel="preload" as="script">
    <link href="{{asset('')}}assets/static/css/app.23ae5dc0.css" rel="preload" as="style">
    <link href="{{asset('')}}assets/static/css/chunk-vant.d14f5539.css" rel="preload" as="style">
    <link href="{{asset('')}}assets/static/css/chunk-vendors.794edbf9.css" rel="preload" as="style">
    <link href="{{asset('')}}assets/static/css/chunk-vant.d14f5539.css" rel="stylesheet">
    <link href="{{asset('')}}assets/static/css/chunk-vendors.794edbf9.css" rel="stylesheet">
    <link href="{{asset('')}}assets/static/css/app.23ae5dc0.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-55f99183.7fd6d71d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-55f99183.e36ebbe6.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a0b1332.9f52f39a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a0b1332.0436ba68.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8e2ce82.4965c1ba.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8e2ce82.8a913baf.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-aef56f2a.f587d975.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-aef56f2a.b3c068cc.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-21a2b91c.0ed7b871.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-21a2b91c.12695023.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-17b291de.e7b989c3.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-17b291de.8772eeeb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-93492616.436323ed.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-93492616.2e0d86fe.1717187934571.chunk.js"></script>
</head>

<body class="main_en">
    <div id="app" class="applang">
        <div data-v-273cf854="" class="home">
            <div data-v-cfc9a7fc="" data-v-273cf854="" class="page">
                <div data-v-cfc9a7fc="" class="headers">
                    <div data-v-397da544="" data-v-273cf854="" class="head" data-v-cfc9a7fc="">
                        <div data-v-397da544="" class="container flex">
                            <div data-v-397da544="" class="back"><i data-v-397da544=""
                                    class="van-icon van-icon-arrow-left">
                                    <!----></i></div>
                            <!---->
                            <div data-v-397da544="" class="name tac"> Team data overview </div>
                            <div data-v-397da544="" class="flex1"></div>
                            <!---->
                            <!---->
                            <!---->
                            <div data-v-397da544="" class="head_right"></div>
                        </div>
                    </div>
                </div>
                <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                    <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="container">
                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="income">
                                <div data-v-273cf854="" data-v-cfc9a7fc="" class="name"><span data-v-273cf854=""
                                        data-v-cfc9a7fc="">clearly indicate：</span>Community teams with 100 or more
                                    members can apply for community team building funds </div>
                                <ul data-v-273cf854="" data-v-cfc9a7fc="" class="db">
                                    <li data-v-273cf854="" data-v-cfc9a7fc="">
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">10%</div>
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">1st Generation Member
                                            Rebate</div>
                                    </li>
                                    <li data-v-273cf854="" data-v-cfc9a7fc="">
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">5%</div>
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">2nd Generation Member
                                            Rebate</div>
                                    </li>
                                    <li data-v-273cf854="" data-v-cfc9a7fc="">
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">2%</div>
                                        <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">3rd Generation Member
                                            Rebate</div>
                                    </li>
                                </ul>
                            </div>
                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="tame">
                                <div data-v-273cf854="" data-v-cfc9a7fc="" class="tab"> Three generations data </div>
                                <div data-v-273cf854="" data-v-cfc9a7fc="" class="it">
                                    <div data-v-273cf854="" data-v-cfc9a7fc="" class="name"> First generation data<img
                                            data-v-273cf854="" data-v-cfc9a7fc=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAAP1BMVEWl/30AAACm/3+d/3il/32m/32l/3ym/32k/4Cm/32i/3qm/36f/3yo/32o/4Oi/3ym/3um/3yl/3ym/36m/30ryM4pAAAAFHRSTlMzAC0HmeYcTUzyElkgHykpWfKzjNPafGcAAADBSURBVDjLhZPtDoMgDEUvVHAyPtzm+z/rMDEWiqH3J+cQmtLCKGmFEIsFbEnhSSBvwUkkBQ8R3wlkMcQSC8xHA5JL4xSYS+MURH3r8uorhSG0ccf2BoeqkITQGb4K6LIKwyBgagQkTI2IjKlRcDVhXzjfg42mepFNE9zdzuth8YS7G/pYJPOCOOUVB8H3T8srNnbGYSCm0fU8jt/dcdA4ML+We23kSBtabey1xVFWj+TypvZ2xeP6U0jZVphjID79A9E2Cgajy8nQAAAAAElFTkSuQmCC">
                                    </div>
                                    <!---->
                                    <!---->
                                    <ul data-v-273cf854="" data-v-cfc9a7fc="" class="db">
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Number of users</div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative recharge
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s"> 0 </div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative withdrawal
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative earnings
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-273cf854="" data-v-cfc9a7fc="" class="it">
                                    <!---->
                                    <div data-v-273cf854="" data-v-cfc9a7fc="" class="name"> Second generation data<img
                                            data-v-273cf854="" data-v-cfc9a7fc=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAAP1BMVEWl/30AAACm/3+d/3il/32m/32l/3ym/32k/4Cm/32i/3qm/36f/3yo/32o/4Oi/3ym/3um/3yl/3ym/36m/30ryM4pAAAAFHRSTlMzAC0HmeYcTUzyElkgHykpWfKzjNPafGcAAADBSURBVDjLhZPtDoMgDEUvVHAyPtzm+z/rMDEWiqH3J+cQmtLCKGmFEIsFbEnhSSBvwUkkBQ8R3wlkMcQSC8xHA5JL4xSYS+MURH3r8uorhSG0ccf2BoeqkITQGb4K6LIKwyBgagQkTI2IjKlRcDVhXzjfg42mepFNE9zdzuth8YS7G/pYJPOCOOUVB8H3T8srNnbGYSCm0fU8jt/dcdA4ML+We23kSBtabey1xVFWj+TypvZ2xeP6U0jZVphjID79A9E2Cgajy8nQAAAAAElFTkSuQmCC">
                                    </div>
                                    <!---->
                                    <ul data-v-273cf854="" data-v-cfc9a7fc="" class="db">
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Number of users</div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative recharge
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s"> 0 </div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative withdrawal
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative earnings
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div data-v-273cf854="" data-v-cfc9a7fc="" class="it">
                                    <!---->
                                    <!---->
                                    <div data-v-273cf854="" data-v-cfc9a7fc="" class="name"> Third generation data<img
                                            data-v-273cf854="" data-v-cfc9a7fc=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAAP1BMVEWl/30AAACm/3+d/3il/32m/32l/3ym/32k/4Cm/32i/3qm/36f/3yo/32o/4Oi/3ym/3um/3yl/3ym/36m/30ryM4pAAAAFHRSTlMzAC0HmeYcTUzyElkgHykpWfKzjNPafGcAAADBSURBVDjLhZPtDoMgDEUvVHAyPtzm+z/rMDEWiqH3J+cQmtLCKGmFEIsFbEnhSSBvwUkkBQ8R3wlkMcQSC8xHA5JL4xSYS+MURH3r8uorhSG0ccf2BoeqkITQGb4K6LIKwyBgagQkTI2IjKlRcDVhXzjfg42mepFNE9zdzuth8YS7G/pYJPOCOOUVB8H3T8srNnbGYSCm0fU8jt/dcdA4ML+We23kSBtabey1xVFWj+TypvZ2xeP6U0jZVphjID79A9E2Cgajy8nQAAAAAElFTkSuQmCC">
                                    </div>
                                    <ul data-v-273cf854="" data-v-cfc9a7fc="" class="db">
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Number of users</div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative recharge
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s"> 0 </div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative withdrawal
                                            </div>
                                        </li>
                                        <li data-v-273cf854="" data-v-cfc9a7fc="">
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="s">0</div>
                                            <div data-v-273cf854="" data-v-cfc9a7fc="" class="n">Cumulative earnings
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @include('layouts.upnl.footer')