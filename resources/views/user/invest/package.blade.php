<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-aef56f2a.f587d975.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-aef56f2a.b3c068cc.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a0b1332.9f52f39a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a0b1332.0436ba68.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8e2ce82.4965c1ba.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8e2ce82.8a913baf.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-21a2b91c.0ed7b871.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-21a2b91c.12695023.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-8ea63dfa.b7fc1269.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-8ea63dfa.a6b9af6e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-5109cffc.e3562785.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-5109cffc.3f1196fb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-17b291de.e7b989c3.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-17b291de.8772eeeb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-8c0c3ac6.27e1c228.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-8c0c3ac6.576dd3c7.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-158583d7.f20000e6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-158583d7.5e00ec93.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-198acc81.38a789e9.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-198acc81.12c44c37.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8870696.ba836efa.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8870696.d3c72f4a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-04a90ad1.aa2f317d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-04a90ad1.28c21b1a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-65aadf8b.a4cef8a6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-65aadf8b.59fb6a2e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-43a21247.c7b442a8.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-43a21247.bd486532.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-494d233b.50573298.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-494d233b.77bc554e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a326f81.d6e1e630.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a326f81.29676938.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-6072d8a4.6ac11efd.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-6072d8a4.290faf4b.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-79aa18e0.f843b761.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-79aa18e0.e3404a41.1717187934571.chunk.js"></script>
</head>

<body class="main_en">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-1fa86597="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-1fa86597="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></div>
                        <!---->
                        <div data-v-397da544="" class="name tac"> VIP1 </div>
                        <div data-v-397da544="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-397da544="" class="head_right"><img data-v-1fa86597="" data-v-397da544=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAv8Ag30Bg76AQMHDPkICwn1DQSxq5iQAAAYFJREFUSMfdlUG2gyAMRdUYIyBi6/73+oOk5KDA+ZNO+iZV8m4IQcrwQzLuGBvyWPHb+ezoMA8/nV1tdyDmp6mudyT20r/w0GiGhpA4WxkNPAJDUzvnKxc+nucUO2XxppQFGFhqQKVT2ANsraE9wDxmEJ/hh1etJHgtN6Gs+r0PT6Cv7wDo/OEdmv8B4Cm3ChoALCzQ3WUp0m4rRnQT5/z5hfbGLey/fJODa9opvpCtlLSlXPK1uxx+zTL+WDSwpH6Nfyocm12C7OfS4jyyPGwBa/7WPJNyhmWKKjBn2ypPkgXqAF4TKKCjrg44DtkHMBBvXx3wDOQ6tP+behS4p91PIcTTnIHk0WxCNABdA5SErCH0u6REkI3Y64ChtEdKeNkHVKD4uw1FzPiYGEhbITgUNc23cxlynWqxRXQrCB8N5YFg0Zzkze37hysMak9HTGXT/XJgiu0kB7Eg1lMFnxuM+Iaj9JT9irhVhPEtKK8L7GqZ9IZzfavOGfiKWx0Ov6Y/i5cqRP3WDagAAAAASUVORK5CYII="
                                class="record_icon"></div>
                    </div>
                </div>
            </div>
            <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="container">
                        <div data-v-cc3ce6d2="" data-v-1fa86597="" class="levelBox" data-v-cfc9a7fc=""><img
                                data-v-cc3ce6d2="" src="{{asset('')}}assets/static/img/lv1.0c323966.png" class="leve-bg">
                            <div data-v-cc3ce6d2="" class="levelBox-head">
                                <div data-v-cc3ce6d2="" class="left"><img data-v-cc3ce6d2=""
                                        src="{{asset('')}}assets/static/img/v1.7b83cd44.png" style="pointer-events: none;"></div>
                                <div data-v-cc3ce6d2="" class="more"> Teamlist<img data-v-cc3ce6d2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAgECgUJBwE7RqWgAAAFBJREFUKM9joBtgcoAQcKBeCCHgwL1cAELAAGN5IYSAA3GQrDhpSlhBsqzISsxBsuZISpjLy8AEpgCmFkxDMa1FOIywAgzv4w4gJgUIQUcAAPJCHQUHfZ8eAAAAAElFTkSuQmCC">
                                </div>
                            </div>
                            <div data-v-cc3ce6d2="" class="bann">
                                <div data-v-cc3ce6d2=""
                                    class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-autoheight">
                                    <div class="swiper-wrapper"
                                        style="height: 160px; transform: translate3d(0px, 0px, 0px);">
                                        <div data-v-cc3ce6d2="" class="swiper-slide swiper-slide-active"
                                            style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv1.0c323966.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide swiper-slide-next"
                                            style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv2.a931375e.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide" style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv3.6365482c.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide" style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv4.22669802.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide" style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv5.f80e388c.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide" style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv6.dbc20bb9.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                    </div> <span class="swiper-notification" aria-live="assertive"
                                        aria-atomic="true"></span>
                                </div>
                                <div data-v-cc3ce6d2="" class="swiper-next" tabindex="0" role="button"
                                    aria-label="Next slide" aria-disabled="false"><img data-v-cc3ce6d2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAABNVBMVEUAAAD////////////////////////////////////////////////////+//7////////////////////9//3////+//75/fr////+//73/fj////+//75/vrr+u3Y9dzP89TF8czA78fm+em878S27L77//vs+u3u++/3/fjt++/q+uzT9dnb9t7X9dvT9NjI8s+57cHF8cvA8Mjs+fD4//jD8Mvt/O/W9dv0/PXy/PPv/PHv+/Di9+bi9+Tc9+Db9t/N8tLK8dDI8c/Q89ax67q57cHr/e/1/fb+//7z/PTx+/Pf9+Lm+enh9+XS89ff9+Pe9+LK8dG98MWs6rW37b/m9+j1/Pb+//75/vrn+enx+/Pd9uPy/PPj+Obh+ObO8tP5//v9/f2v7Lq768K067zI8sy7MG6gAAAAZ3RSTlMABwoEDA4QEhYUGhgfJR0gJyEcIjAjKT0rLjos+/TZt6iVjdGGez8zJtHCurCknZeGgYB4NzYzKSXr5+Pfy8nAvqKenJBzcC/t1MrIxbKvrqypjnNraC3t4drSz8XEt7WIfnNgS0E8Y/EC1QAAAzdJREFUSMeN1mV36kAQBuBbKAnRTQLBbr0UaEuFGtRdbt2vu/z/n3BndnYrpzB0vuY8553V7Jv2lUwme55UEuvxazeUkKVld4aEqpdgd0dRKKBSqV6ExHilTArKMAyEyr1KGVCmiVA7XhECYmGBhEBw2CajCIFJY/l/l0zMI8ZmpSAJkOM4duv37W3LVHGdVI9SFiLbtqPa3f7+PsUxjBT0ByhyXbd5MDY2dpe2DIPS2A4l8l0h7ucb5fKBjywl0xhlmqAAhZnDuZGRkfnQSVumapJRFiohMnF1dnh4eK4WEUPVjuk5BOW6mdirXu/s7Mw2XWCmoRivRMbzFmaGhob2cq5vO1Z7Rh3iMpMKYy9YmL64qM8UYiFZh2VLgqOBKVWaGhwcnC56IdsjhtHU275Ul5ubm1PZIA6pRx32skk1sEh4Xi7/fWNj4zIbeB70yITJDWzIFjNekJ8cHR09W8wFXkw9UtjLNDky2aLwcpWJgYGBycUCsNC10xaGJdruEDkyCgsqx6urqxOlt8CwRzaMeoSwuDK+vLx8UioC82IRORazHYHhhMDkVz729/eP57NZZBm3C0soVvnQ19f3DhSkBcDkPOLIePaLFDKcER8ZhXVkFrCf1CKwQiGAneWk9eZnWXH8/dHRMTX5LI2dEj/Mf15ZWflagjS9bMzYaN3Sju/G+ZO1tbUJWABiDndEk0+WO0+bhGYyesXgME7EHm7JT2eLuG7Cxy47OnXa9Fb+tr6+fg4HIA5dfW6YLtXZhuN2/uX09AocnFJ9cDqdN31MRQbc1dbW1lRRd0ms471lmOAiAdfWgrwUDoHpS6E9U46u1hDcdL1en8kJ7BLWgBkdDc/C2z+Ey1VeeE1gDrAUXSb89RrhVV7d297e/lHj7klkD9OCeb4QYfV6d3d3tmbT4KjLtnm6TzlAVxzKn0Do0I+KWDcXAbyXvxyfWTnd56Ozo8htzpfL5RsaGzj2100OIFTtptFo/OMZOcqTEKoFv+ElAxn7DlLPEgMC6YXR+rOkw1Dxjp4zSE1TZkn2uieXfjxpBYx3GlKh4hlBciixEkp1ZQC1TCikw3hIjiQhVN3dizf2c/YfUshakhni7aYAAAAASUVORK5CYII=">
                                </div>
                                <div data-v-cc3ce6d2="" class="swiper-prev swiper-button-disabled" tabindex="0"
                                    role="button" aria-label="Previous slide" aria-disabled="true"><img
                                        data-v-cc3ce6d2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAABNVBMVEUAAAD////////////////////////////////////////////////////+//7////////////////////9//3////+//75/fr////+//73/fj////+//75/vrr+u3Y9dzP89TF8czA78fm+em878S27L77//vs+u3u++/3/fjt++/q+uzT9dnb9t7X9dvT9NjI8s+57cHF8cvA8Mjs+fD4//jD8Mvt/O/W9dv0/PXy/PPv/PHv+/Di9+bi9+Tc9+Db9t/N8tLK8dDI8c/Q89ax67q57cHr/e/1/fb+//7z/PTx+/Pf9+Lm+enh9+XS89ff9+Pe9+LK8dG98MWs6rW37b/m9+j1/Pb+//75/vrn+enx+/Pd9uPy/PPj+Obh+ObO8tP5//v9/f2v7Lq768K067zI8sy7MG6gAAAAZ3RSTlMABwoEDA4QEhYUGhgfJR0gJyEcIjAjKT0rLjos+/TZt6iVjdGGez8zJtHCurCknZeGgYB4NzYzKSXr5+Pfy8nAvqKenJBzcC/t1MrIxbKvrqypjnNraC3t4drSz8XEt7WIfnNgS0E8Y/EC1QAAAzdJREFUSMeN1mV36kAQBuBbKAnRTQLBbr0UaEuFGtRdbt2vu/z/n3BndnYrpzB0vuY8553V7Jv2lUwme55UEuvxazeUkKVld4aEqpdgd0dRKKBSqV6ExHilTArKMAyEyr1KGVCmiVA7XhECYmGBhEBw2CajCIFJY/l/l0zMI8ZmpSAJkOM4duv37W3LVHGdVI9SFiLbtqPa3f7+PsUxjBT0ByhyXbd5MDY2dpe2DIPS2A4l8l0h7ucb5fKBjywl0xhlmqAAhZnDuZGRkfnQSVumapJRFiohMnF1dnh4eK4WEUPVjuk5BOW6mdirXu/s7Mw2XWCmoRivRMbzFmaGhob2cq5vO1Z7Rh3iMpMKYy9YmL64qM8UYiFZh2VLgqOBKVWaGhwcnC56IdsjhtHU275Ul5ubm1PZIA6pRx32skk1sEh4Xi7/fWNj4zIbeB70yITJDWzIFjNekJ8cHR09W8wFXkw9UtjLNDky2aLwcpWJgYGBycUCsNC10xaGJdruEDkyCgsqx6urqxOlt8CwRzaMeoSwuDK+vLx8UioC82IRORazHYHhhMDkVz729/eP57NZZBm3C0soVvnQ19f3DhSkBcDkPOLIePaLFDKcER8ZhXVkFrCf1CKwQiGAneWk9eZnWXH8/dHRMTX5LI2dEj/Mf15ZWflagjS9bMzYaN3Sju/G+ZO1tbUJWABiDndEk0+WO0+bhGYyesXgME7EHm7JT2eLuG7Cxy47OnXa9Fb+tr6+fg4HIA5dfW6YLtXZhuN2/uX09AocnFJ9cDqdN31MRQbc1dbW1lRRd0ms471lmOAiAdfWgrwUDoHpS6E9U46u1hDcdL1en8kJ7BLWgBkdDc/C2z+Ey1VeeE1gDrAUXSb89RrhVV7d297e/lHj7klkD9OCeb4QYfV6d3d3tmbT4KjLtnm6TzlAVxzKn0Do0I+KWDcXAbyXvxyfWTnd56Ozo8htzpfL5RsaGzj2100OIFTtptFo/OMZOcqTEKoFv+ElAxn7DlLPEgMC6YXR+rOkw1Dxjp4zSE1TZkn2uieXfjxpBYx3GlKh4hlBciixEkp1ZQC1TCikw3hIjiQhVN3dizf2c/YfUshakhni7aYAAAAASUVORK5CYII=">
                                </div>
                                <div data-v-cc3ce6d2=""
                                    class="pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                                        class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                        role="button" aria-label="Go to slide 1"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet"
                                        tabindex="0" role="button" aria-label="Go to slide 3"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet"
                                        tabindex="0" role="button" aria-label="Go to slide 5"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 6"></span></div>
                                <div data-v-cc3ce6d2="" class="cur-level"><span data-v-cc3ce6d2="">Current level:
                                        LV1</span></div>
                            </div>
                            <ul data-v-cc3ce6d2="">
                                <li data-v-cc3ce6d2="">
                                    <div data-v-cc3ce6d2="" class="flex1">Earnings range</div>
                                    <div data-v-cc3ce6d2="" class="s"> 1.8%-2% </div>
                                </li>
                                <li data-v-cc3ce6d2="">
                                    <div data-v-cc3ce6d2="" class="flex1">Team rewards</div>
                                    <div data-v-cc3ce6d2="" class="s">10% | 5% | 2%</div>
                                </li>
                                <li data-v-cc3ce6d2="" class="next-level">
                                    <div data-v-cc3ce6d2="" class="flex1">Next Level</div>
                                    <div data-v-cc3ce6d2="" class="s">
                                        <div data-v-cc3ce6d2="" class="teamCount">
                                            <div data-v-cc3ce6d2=""> A: 0 People 0/5 <img data-v-cc3ce6d2=""
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAOVBMVEX///8AAAAODg7////////////h4eH///////////+FhYUsLCxqamr///////////+lpaWVlZVKSko8tlaaAAAAE3RSTlOAAIBwEAiAeFBIgICAaDAYgICAwZP9dQAAAMtJREFUOMuV1NEWgyAIBmAyCVzTtr3/w06XR1h4sv6bbr7DoYBgasHEkQAocsJJpREfCCTsDcEAhwT8J34Gk9lrsonQZhMiNUydSrAJY7AS6dQk7MTDSfyP8BkJhSD08nztT8JMUlc4V03KhPvCPeokMomnAmImbXjL0hFAmTSxrosSLYp8nCtGhBBqVYoxgmq7YkSodhm0UUJeOoEyWsinQ9LmKADLGAMo8z4IvrIM45UaL+Z4vcdHMj61Owdb4xkkFMzZj38eNjfJF4TTBjZGDKh+AAAAAElFTkSuQmCC">
                                            </div>
                                            <div data-v-cc3ce6d2="" style="display: none;"> B: 0 People 0/0 <img
                                                    data-v-cc3ce6d2=""
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAS1BMVEUAAACj/3ym/32m/3ym/36m/32l/3yf/4Cf/3Cl/3um/32m/3ym/32l/32n/3qm/30NDQ1ZhUUgKxtGaDeT4W+T4G9tpFNjlEwzSSmgfRuoAAAAD3RSTlMAIO+g39+QEBBg0M+PMGAvI4cvAAAA4ElEQVQ4y63TS5KDMAwEUJCIP3ymPQyT5P4nDSbEVpBxZZFev2oJSm5ynOeBABrYu6aU1hByuFXAjThkdIeKC1Qub0VTFNpMqqPS45JQ5rXPiNOM+xhU8hzFNWKisCjl74otFLfxRRHCbnyao0T4xRZeyVAV6FdC2LMsBQFaSRLzvGgBCHIPYTVKQAz6n6NRgvZ1s8lCrMuQRoj80R7CSJF/nSVpjgLbORgIczsI/vQYGlO/hRjbnYnOpvPuTkQrHklXFFMCqUd3yFijNrX62TNyyIgK2eS5J4B6/rHN1/MAcuUvL+WPD1EAAAAASUVORK5CYII=">
                                            </div>
                                            <div data-v-cc3ce6d2="" style="display: none;"> C: 0 People 0/0 <img
                                                    data-v-cc3ce6d2=""
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAS1BMVEUAAACj/3ym/32m/3ym/36m/32l/3yf/4Cf/3Cl/3um/32m/3ym/32l/32n/3qm/30NDQ1ZhUUgKxtGaDeT4W+T4G9tpFNjlEwzSSmgfRuoAAAAD3RSTlMAIO+g39+QEBBg0M+PMGAvI4cvAAAA4ElEQVQ4y63TS5KDMAwEUJCIP3ymPQyT5P4nDSbEVpBxZZFev2oJSm5ynOeBABrYu6aU1hByuFXAjThkdIeKC1Qub0VTFNpMqqPS45JQ5rXPiNOM+xhU8hzFNWKisCjl74otFLfxRRHCbnyao0T4xRZeyVAV6FdC2LMsBQFaSRLzvGgBCHIPYTVKQAz6n6NRgvZ1s8lCrMuQRoj80R7CSJF/nSVpjgLbORgIczsI/vQYGlO/hRjbnYnOpvPuTkQrHklXFFMCqUd3yFijNrX62TNyyIgK2eS5J4B6/rHN1/MAcuUvL+WPD1EAAAAASUVORK5CYII=">
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2=""> balance: 67.3519/300U <img data-v-cc3ce6d2=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAOVBMVEX///8AAAAODg7////////////h4eH///////////+FhYUsLCxqamr///////////+lpaWVlZVKSko8tlaaAAAAE3RSTlOAAIBwEAiAeFBIgICAaDAYgICAwZP9dQAAAMtJREFUOMuV1NEWgyAIBmAyCVzTtr3/w06XR1h4sv6bbr7DoYBgasHEkQAocsJJpREfCCTsDcEAhwT8J34Gk9lrsonQZhMiNUydSrAJY7AS6dQk7MTDSfyP8BkJhSD08nztT8JMUlc4V03KhPvCPeokMomnAmImbXjL0hFAmTSxrosSLYp8nCtGhBBqVYoxgmq7YkSodhm0UUJeOoEyWsinQ9LmKADLGAMo8z4IvrIM45UaL+Z4vcdHMj61Owdb4xkkFMzZj38eNjfJF4TTBjZGDKh+AAAAAElFTkSuQmCC">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="buySeting">
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="title flex"><img data-v-1fa86597=""
                                    data-v-cfc9a7fc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACtVBMVEUAAAAuMSw0Sh8uLywuMSowNCw4QDBSfyguNClekS56vTJYhypekCouMCo0QShqqC4tLytCWSlony1ZhCh7yjBFZTA4SSk1QSkrLCouMSktLitAWScvMylYhyovMypNcSkwMC47UCh0uDJVgChwsTA5SSlspjAwOCs4SCgxMS2oraORpH1mb102SiJEYCo+Uio9Uyk8UClCXyhHZSdCXSdSeCswMyozPygwNytZhS5GYys6TClPdic3QStIayZqojBwrzJlmi5AWycuMCyCzTWAyjVAWihhkTAhJR0gIx4iJx0pNxokLRwfIR0vMCwfIhsqOhorPBogJBsiLRf///8vMisqLCgoNRsmLxwhKxgtLyswNyosLiorLCopLSYgJBwsPhoiKR0tQBohJxofJRlDYSYvNCogJxglMhcyOykkKh4iKRoqMSMnMhwkMBc0PyktOCEmLSApOxgsNSIjKxweIRogKRgpLiMtOiEoNBwnNhhCXiYpLyMvQB8oMx4oORhBWycoKyVBXyQrMyEvPSAlKyAnMB81QigrMCY/WyI4UB8xQx8eIBweIxklNBc+Uyg2RCgpKydEZCU5UyArPRg8UChAWCc3RicxPiYkJyI9VyE7VSElMBokLhooNhknNxf8//jd/7ovNik4SSgvOSYzRSArOB4vQRwnMxrKzsfW/63Q/6JASTc6TCgtNCdCYiRBYCRAXSI0Sh8zRx4vRBr1/+vv/982PS9Odig+VSc6TScyQSM+WiE3Th82TR/o/9Li/8aHnnNYYk9GUTw6QzJKbyVHaiTAxLzF0rjT/6fP/5+jqZ7M/5iLmXtPWEQzOS1GZCg7Tyby8/L3/+3a3NjY2tbp/tPj/8bH0b3K3rXY/rLY/7HC55zI/pK7546SnoeIjoGcuX91fW12iGRxhV1ZhixJaCoJqt4TAAAASHRSTlMA/v7vYCAQ749/IN/FwIB/f38gHxAQ7+/f38+4sKifiICAf2BfX1BQIB/+/v7+7+/v7+7g4N/f39DPz8/Pv76fkJCPgGBgYF8qWml3AAAFBElEQVRIx32T90MSARiGr7Js77333nvvwVKUCigRU7QMLSEwgQwik4CGqZgjR7kampVaWrb33nvvv6P3u+7EtHp/fp573w/umAbpvHh+n1a+1dU/WrVesKQl89+AHtj6hnvXrl1bt+7YscOkq3k8Y3DL/+HtfFPLK4qKwEMwmXQ6nSHj57x/KgN9L1xs3LiioohvMEEwJCQ8bvFXvGVrl/sCjHI0UIVXiK6Z0rEhP9j3QKrbjYbyXYHiyI3Lly/PUVoNOgOM6Oj4sUPr8+1uHDiQmuq+0PgwaMJXrVq1efO6KAcKIMTva1GPv5nFCpV5e/eSgECAER6lZ4X4nX8YQ2+ez4Lh9uRZSOANCOvCwzXxMOLi0pd5+Y6+rvMwygNtedQQGendBCFcpifBPq5TrdDq1CmXK+vipk02Gwm1R0RB0ISH79mTCEFtn8nzLW5u3+46796E2PIsFjJoEoSodVSxB4YzTq129uMGVZ/cfsqVFebhhEiq4Bo4IVaqdqrV6q5dWKHPCRIqPRACbJZcy5HIyOyNOTnsERoNBJlUGhtChr0D8Z2qSXCHrfF4INgsELKzs3NgYJIGR8hke2JjYzPVSDeqGJQCwVUZtmZNYAArKI4orIgyR0INdLQUghS83EkVs1NORGxPBe8JDAyw5VoUCvPno8g9hyQKFRoZJmHTblQkJ8/BohvUUBlGDZsCxLm5uQrT0xWUBIeRBNwgI0GolsvlQc2wKCUiwhUGwUOCOFdsKmX5F4UOoxECeKrYvduulifLhzD9wGMRBCwiodg0mhVuFWITBPDUgE1oSG7OzCWh3CuIizO+En/w3nqD3hgq4gUpCcHJvZlJERERWyoO0wm8MJL407c/PXhQahRpBCHsJD8/oRzpwaSQUMkVQFDoMm4Rf+bS5UPvRum1XIMfooLQhCF+Cwo4QaHQxTzn+GPHrsWFigSyECkr7MYkuZwBT4J3kSmG5+9cyY/TimQhITDA+wUjcmYi+G2HeV4hVpiuHnx25uWrQ8dK3peW6bUiAQTwEFTBcgiTt2zbBiGQExRWXenR17ffgC/59siZKEIDN0moQkN3phf4/RV8Ad4LXWHV9dKrh0ruf6laG5coEghChFKpEEImTWrDLAS/fwzPm81Wq64w5vrVt/fvPkRBqIAWCYn3s1NDc2Yp+LNP+Ocf2bDBak0oXP/wzocrVdwFAiECQa5SBat8mC7gzyZtDRAjZjMEpdKRkH/t7seqoHhcIECIpxMgBDdlmF5nk5KSisRUQHy2EobhWsn3oDJ9KMcjtAjpie+hA/i0J8XEA89WSiQSZfT1K0Fl+A/QgE3EC4XBqyH4QGg2Pikt7VwN8bRHgugd0WVO/ELsIvAk2FerYIxgkAFpEI4Xm83gSSADSdSC5wRkNaUvcFRMAH883WwlngSjRJKYqCWe8ptXEU8FbAX4goIa7vkQtKFabaiorpDsT0J7hsusgoKC9PSMOgJwr0A8Cd0ZPsO7gt+3L8MhYRcZia81ON7fv0lTpjZDgO/buRPG7+f/0ZAJmDKMqZO2xO+MicFnXHcQxe6/shHx/YHVNYhHCg1sAc9n2lc38m9EwiKmXoZ1I349kh+Nl45iVztXrgQOoYkP0yDDpwFHgtisRVYiEFDRk7+33qxaPj/fy+Pnwfy/p2lf8MCDOBw88PbN/sWT4jMdcygc34bD/+s0bzMVfJMevZv7NKR/AeLp+3tiYvKBAAAAAElFTkSuQmCC">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="flex1"> Arbitrage parameters </div>
                            </div>
                            <ul data-v-1fa86597="" data-v-cfc9a7fc="" class="com-1">
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Daily arbitrage earnings</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> +2% </div>
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Investment range</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 50 - 500 </div>
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Daily execution</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 1 times </div>
                                </li>
                            </ul>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="prices">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="inp"><input data-v-1fa86597=""
                                        data-v-cfc9a7fc="" type="text"></div><button data-v-1fa86597=""
                                    data-v-cfc9a7fc="" class="n"> Max </button>
                            </div>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="Progress" style="">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="cons">
                                    <div data-v-1fa86597="" class="van-slider" data-v-cfc9a7fc="" style="height: 10px;">
                                        <div class="van-slider__bar" style="background: rgb(0, 0, 0); width: 0%;">
                                            <div role="slider" tabindex="0" aria-valuemin="0" aria-valuenow="0"
                                                aria-valuemax="67.3519" aria-orientation="horizontal"
                                                class="van-slider__button-wrapper">
                                                <div class="van-slider__button"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="ul">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="li active"> 0% </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 25% </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 50% </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 75% </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 100% </div>
                                </div>
                            </div>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="prompt">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Available investment amount</div>
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"><span data-v-1fa86597=""
                                        data-v-cfc9a7fc="">0</span>/ 67.3519 </div>
                            </div>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="fot">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="flex">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Pending release details</div>
                                    <img data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAMAAADEfo0+AAAAPFBMVEUAAAC+vr69vb23t7e9vb28vLy9vb2/v7+/v7+7u7u+vr68vLy8vLy/v7+8vLy9vb28vLy8vLy5ubm9vb0vD2FiAAAAE3RSTlMA3+8gj3CAIBBAv7CgMM+vn29Qy54UlQAAAGNJREFUGNONkEkKgDAQBM2+uff//+oIQnqCiH2rgqRCpve5/dCiAV6JGUBgkY2YwiZZwDo2BYDJbIKYOvE8xlT9mWLhRBjm+8hCYn0u5WwkjsIb8dmf3gNpDHx9UFMBWfLMehdSXwVxnLXHTQAAAABJRU5ErkJggg==">
                                </div>
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="flex">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Order records</div><img
                                        data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAMAAADEfo0+AAAAPFBMVEUAAAC+vr69vb23t7e9vb28vLy9vb2/v7+/v7+7u7u+vr68vLy8vLy/v7+8vLy9vb28vLy8vLy5ubm9vb0vD2FiAAAAE3RSTlMA3+8gj3CAIBBAv7CgMM+vn29Qy54UlQAAAGNJREFUGNONkEkKgDAQBM2+uff//+oIQnqCiH2rgqRCpve5/dCiAV6JGUBgkY2YwiZZwDo2BYDJbIKYOvE8xlT9mWLhRBjm+8hCYn0u5WwkjsIb8dmf3gNpDHx9UFMBWfLMehdSXwVxnLXHTQAAAABJRU5ErkJggg==">
                                </div>
                            </div>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="conf"><button data-v-1fa86597=""
                                    data-v-cfc9a7fc="" class="btn2"> Create </button></div>
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="check">
                                <div data-v-1fa86597="" role="checkbox" tabindex="0" aria-checked="true"
                                    class="van-checkbox" data-v-cfc9a7fc="">
                                    <div
                                        class="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked">
                                        <i class="van-icon van-icon-success"
                                            style="border-color: rgb(122, 222, 133); background-color: rgb(122, 222, 133);">
                                            <!----></i></div><span class="van-checkbox__label">
                                        <div data-v-1fa86597=""> Creating a policy means agreeing to <span
                                                data-v-1fa86597="">[the Fund Agreement]</span></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="arcList">
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="cname">Strategy includes strategies</div>
                            <ul data-v-1fa86597="" data-v-cfc9a7fc="">
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="ico"><img data-v-1fa86597=""
                                            data-v-cfc9a7fc=""
                                            src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240319/848c7f5604a34a54494ac281cb6ad948.png">
                                    </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Spot Grid</div><img
                                        data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240304/eb8efa21009c40364f790b0fff9763f9.png"
                                        class="kimageUrl">
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="ico"><img data-v-1fa86597=""
                                            data-v-cfc9a7fc=""
                                            src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240319/a2676d23a66645f52ecf7292fa040164.png">
                                    </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Martingale</div><img
                                        data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240304/84d52ad9bd37687470cd78b7581e106b.png"
                                        class="kimageUrl">
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="ico"><img data-v-1fa86597=""
                                            data-v-cfc9a7fc=""
                                            src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240319/0e082935ea46d96dcf2df1b31a099ab2.png">
                                    </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Contract Grid</div><img
                                        data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240304/b65770384d7807fcb22691682fa31832.png"
                                        class="kimageUrl">
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="ico"><img data-v-1fa86597=""
                                            data-v-cfc9a7fc=""
                                            src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240319/ade106f86322db554a19a20424e91ff7.png">
                                    </div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Infinite Grid</div><img
                                        data-v-1fa86597="" data-v-cfc9a7fc=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240401/dd31dffb566324b6f1d8496bbcf13242.png"
                                        class="kimageUrl">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!---->
                    <!---->
                </div>
            </div>
         
            @include('layouts.upnl.footer')