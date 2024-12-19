<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Upgrade Level</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-73ab94aa.2e0ec155.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-73ab94aa.70e0e268.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-65aadf8b.a4cef8a6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-65aadf8b.59fb6a2e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-3cbe2e96.30f94eac.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-3cbe2e96.e797acf7.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-17b291de.e7b989c3.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-17b291de.8772eeeb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-64987b26.5bff7a5a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-64987b26.1b0de86e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-8ea63dfa.b7fc1269.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-8ea63dfa.a6b9af6e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-5109cffc.e3562785.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-5109cffc.3f1196fb.1717187934571.chunk.js"></script>
</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-1c002adc="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-1c002adc="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><a href="{{route('user.Mine')}}" style="color:#fff;"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac"> Upgrade Level </div>
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
                    <div data-v-1c002adc="" data-v-cfc9a7fc="" class="container">
                        <div data-v-cc3ce6d2="" data-v-1c002adc="" class="levelBox" data-v-cfc9a7fc=""><img
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
                                        style="height: 160px; transform: translate3d(-385px, 0px, 0px); transition-duration: 0ms;">
                                        <div data-v-cc3ce6d2="" class="swiper-slide swiper-slide-prev"
                                            style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv1.0c323966.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide swiper-slide-active"
                                            style="width: 385px;">
                                            <div data-v-cc3ce6d2="" class="item">
                                                <div data-v-cc3ce6d2="" class="has1"><img data-v-cc3ce6d2=""
                                                        src="{{asset('')}}assets/static/img/lv2.a931375e.png"
                                                        style="pointer-events: none;"></div>
                                            </div>
                                        </div>
                                        <div data-v-cc3ce6d2="" class="swiper-slide swiper-slide-next"
                                            style="width: 385px;">
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
                                <div data-v-cc3ce6d2="" class="swiper-prev" tabindex="0" role="button"
                                    aria-label="Previous slide" aria-disabled="false"><img data-v-cc3ce6d2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAABNVBMVEUAAAD////////////////////////////////////////////////////+//7////////////////////9//3////+//75/fr////+//73/fj////+//75/vrr+u3Y9dzP89TF8czA78fm+em878S27L77//vs+u3u++/3/fjt++/q+uzT9dnb9t7X9dvT9NjI8s+57cHF8cvA8Mjs+fD4//jD8Mvt/O/W9dv0/PXy/PPv/PHv+/Di9+bi9+Tc9+Db9t/N8tLK8dDI8c/Q89ax67q57cHr/e/1/fb+//7z/PTx+/Pf9+Lm+enh9+XS89ff9+Pe9+LK8dG98MWs6rW37b/m9+j1/Pb+//75/vrn+enx+/Pd9uPy/PPj+Obh+ObO8tP5//v9/f2v7Lq768K067zI8sy7MG6gAAAAZ3RSTlMABwoEDA4QEhYUGhgfJR0gJyEcIjAjKT0rLjos+/TZt6iVjdGGez8zJtHCurCknZeGgYB4NzYzKSXr5+Pfy8nAvqKenJBzcC/t1MrIxbKvrqypjnNraC3t4drSz8XEt7WIfnNgS0E8Y/EC1QAAAzdJREFUSMeN1mV36kAQBuBbKAnRTQLBbr0UaEuFGtRdbt2vu/z/n3BndnYrpzB0vuY8553V7Jv2lUwme55UEuvxazeUkKVld4aEqpdgd0dRKKBSqV6ExHilTArKMAyEyr1KGVCmiVA7XhECYmGBhEBw2CajCIFJY/l/l0zMI8ZmpSAJkOM4duv37W3LVHGdVI9SFiLbtqPa3f7+PsUxjBT0ByhyXbd5MDY2dpe2DIPS2A4l8l0h7ucb5fKBjywl0xhlmqAAhZnDuZGRkfnQSVumapJRFiohMnF1dnh4eK4WEUPVjuk5BOW6mdirXu/s7Mw2XWCmoRivRMbzFmaGhob2cq5vO1Z7Rh3iMpMKYy9YmL64qM8UYiFZh2VLgqOBKVWaGhwcnC56IdsjhtHU275Ul5ubm1PZIA6pRx32skk1sEh4Xi7/fWNj4zIbeB70yITJDWzIFjNekJ8cHR09W8wFXkw9UtjLNDky2aLwcpWJgYGBycUCsNC10xaGJdruEDkyCgsqx6urqxOlt8CwRzaMeoSwuDK+vLx8UioC82IRORazHYHhhMDkVz729/eP57NZZBm3C0soVvnQ19f3DhSkBcDkPOLIePaLFDKcER8ZhXVkFrCf1CKwQiGAneWk9eZnWXH8/dHRMTX5LI2dEj/Mf15ZWflagjS9bMzYaN3Sju/G+ZO1tbUJWABiDndEk0+WO0+bhGYyesXgME7EHm7JT2eLuG7Cxy47OnXa9Fb+tr6+fg4HIA5dfW6YLtXZhuN2/uX09AocnFJ9cDqdN31MRQbc1dbW1lRRd0ms471lmOAiAdfWgrwUDoHpS6E9U46u1hDcdL1en8kJ7BLWgBkdDc/C2z+Ey1VeeE1gDrAUXSb89RrhVV7d297e/lHj7klkD9OCeb4QYfV6d3d3tmbT4KjLtnm6TzlAVxzKn0Do0I+KWDcXAbyXvxyfWTnd56Ozo8htzpfL5RsaGzj2100OIFTtptFo/OMZOcqTEKoFv+ElAxn7DlLPEgMC6YXR+rOkw1Dxjp4zSE1TZkn2uieXfjxpBYx3GlKh4hlBciixEkp1ZQC1TCikw3hIjiQhVN3dizf2c/YfUshakhni7aYAAAAASUVORK5CYII=">
                                </div>
                                <div data-v-cc3ce6d2=""
                                    class="pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 1"></span><span
                                        class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                        role="button" aria-label="Go to slide 2"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet"
                                        tabindex="0" role="button" aria-label="Go to slide 4"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button"
                                        aria-label="Go to slide 5"></span><span class="swiper-pagination-bullet"
                                        tabindex="0" role="button" aria-label="Go to slide 6"></span></div>
                                <div data-v-cc3ce6d2="" class="cur-level"><span data-v-cc3ce6d2="">Current level:
                                        LV1</span></div>
                            </div>
                            <ul data-v-cc3ce6d2="">
                                <li data-v-cc3ce6d2="" style="">
                                    <div data-v-cc3ce6d2="" class="flex1">Earnings range</div>
                                    <div data-v-cc3ce6d2="" class="s"> 1.8%-2% </div>
                                </li>
                                <li data-v-cc3ce6d2="" style="">
                                    <div data-v-cc3ce6d2="" class="flex1">Team rewards</div>
                                    <div data-v-cc3ce6d2="" class="s">10% | 5% | 2%</div>
                                </li>
                                <li data-v-cc3ce6d2="" class="next-level" style="">
                                    <div data-v-cc3ce6d2="" class="flex1">Next Level</div>
                                    <div data-v-cc3ce6d2="" class="s">
                                        <div data-v-cc3ce6d2="" class="teamCount">
                                            <div data-v-cc3ce6d2="" style=""> A: 0 People 0/5 <img data-v-cc3ce6d2=""
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
                                        <div data-v-cc3ce6d2="" style=""> balance: 67.3519/300U <img data-v-cc3ce6d2=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAOVBMVEX///8AAAAODg7////////////h4eH///////////+FhYUsLCxqamr///////////+lpaWVlZVKSko8tlaaAAAAE3RSTlOAAIBwEAiAeFBIgICAaDAYgICAwZP9dQAAAMtJREFUOMuV1NEWgyAIBmAyCVzTtr3/w06XR1h4sv6bbr7DoYBgasHEkQAocsJJpREfCCTsDcEAhwT8J34Gk9lrsonQZhMiNUydSrAJY7AS6dQk7MTDSfyP8BkJhSD08nztT8JMUlc4V03KhPvCPeokMomnAmImbXjL0hFAmTSxrosSLYp8nCtGhBBqVYoxgmq7YkSodhm0UUJeOoEyWsinQ9LmKADLGAMo8z4IvrIM45UaL+Z4vcdHMj61Owdb4xkkFMzZj38eNjfJF4TTBjZGDKh+AAAAAElFTkSuQmCC">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-v-1c002adc="" data-v-cfc9a7fc="" class="tipsBox">
                            <div data-v-1c002adc="" data-v-cfc9a7fc="" class="n"><img data-v-1c002adc=""
                                    data-v-cfc9a7fc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAABmZmZkZGRlZWVmZmZgYGBmZmZlZWVlZWVlZWVlZWVwcHBnZ2dgYGBmZmb///+CgoJ5eXn19fXGxsa8vLxwcHDs7Oze3t7Pz8+ysrKoqKifn5+Wlpbj/1MOAAAADnRSTlMA3yDvoBDQYJCPMBCQMJXyh6MAAADoSURBVDjLjZPbmoMwCISpCWrbXTBae37/59xme+EMfj38dxDIzBeILGiX22SW2typrGn6ZAu5EUa3FtgqtW9sxQYu+YVzqNhx/5s78HwYsOLpA/0d3A/o9F8A+/1BgUQVybEARXoRNaDUghkSSaUzpBZQopNM8dH9SIksLcUn9xMlWkkUn93PlEhixFTfgQgFF/cLZ4LEzf3GEsHkMI4lmMxGzDPHOTzUME0lPJSiiTK6s4aK9BBe/cGVFHjc91pwD+OWnhdmomlX9PXKfbu0snu/9p8/DjgFf3thmowj+mlkzX75/tD9B98SLCxhKerCAAAAAElFTkSuQmCC">Level
                                Explanation </div>
                            <div data-v-1c002adc="" data-v-cfc9a7fc="" class="p">1. "Automatic downgrade based on the
                                determination of active users.<br>2. Definition of active users: An account balance
                                greater than or equal to $50. For example, if User A is at V2 level and has 5 directly
                                referred active users, and one of the users under A's umbrella is no longer an active
                                user (withdraws or has an account balance below $50 for trading), then V2 will be
                                automatically downgraded. The same principle applies to others."</div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAMAAAA0X5qLAAAAh1BMVEUAAAAAv44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av46sPT54AAAALHRSTlMA+wXZ+J87JB7ux4lDNRQPCvLq39PNp5BpWRmxgnAvvrnlw5RhT0sqwHRxeP/zXbkAAAGcSURBVDjLjZTXcqtAEAVnyUGIJBAKKFqS7dv//30XsHFJxrD0C0XRxc45TCEDvFsdrvfhxnGWMk1S7c70nI+bZFxdXFC8YG5GVNemxTdte7+3yxUdq4MMMaocsMza6CeSqLRo2A3dffvguPh1WEiDcuWFeN24mSNDdjS85Exs4OLJX7wpyOWJT8A25G+iFMyn2za1jOIAV+kxIU9knDUQ9d8C/EimyH9OXgawNiblrepfXSn8WKax+4wnCEWDC6ptNk5RC9GxgqqNZ1EstXL1tSP/oBQtS1DN5Qp7vbz1sdwu30b0pNAkPIOrd4131E2kAEf0rDqtaJvTY3YDvM+aOS5IH91KrWdUl2LGIhsI9PIDLm2DFmmslT++FyiDu7a5ANV1FoKpkw/gfwUFddDIO7Cl4wqBMf1iRRZJxxb86d5OYCf9fyS/TaYrFcqVeYQK6nmqEQLFPNc7AuZ2lrtYAcEs936kdZdjE97rSAxDEvG8j8wC/E8Zo1Yo/CAv0oyOYKKzN55QWTm9B9WpyGiwyMvFnLbih+M5xjDWf6S2MlzIf04ZAAAAAElFTkSuQmCC"
                    alt=""></div>
        </div>
        <div data-v-e73e51fc="" class="start-page" style="display: none;"><img data-v-e73e51fc=""
                src="{{asset('')}}assets/static/img/start.0aabcda5.gif"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vue.2deea45a.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-echarts.eba990db.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vant.9e1db231.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vendors.24e8c7cc.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/app.83a7756d.1717187934571.js"></script>
    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2002; display: none;"><i
            class="van-icon van-icon-success van-toast__icon">
            <!----></i>
        <div class="van-toast__text">Login successful</div>
    </div>
</body>

</html>
