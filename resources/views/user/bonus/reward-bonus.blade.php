<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Task center</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-3cbe2e96.30f94eac.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-3cbe2e96.e797acf7.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-bc53a838.26fdd0b0.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-bc53a838.8b13bd3a.1717187934571.chunk.js"></script>
</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-30aca98d="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-30aca98d="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><a href="{{route('user.Mine')}}" style="color:#fff;"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac"> @lang('Task center') </div>
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
                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="container">
                        <div data-v-30aca98d="" data-v-cfc9a7fc="" class="bann"><img data-v-30aca98d=""
                                data-v-cfc9a7fc="" src="{{asset('')}}assets/static/img/leadership.png"></div>
                        <div data-v-30aca98d="" data-v-cfc9a7fc="" class="title flex">
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n">@lang('My Reward')：</div>
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s">{{number_format($teamTurnover,2)}} USDT</div>
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="more"> @lang('Received') </div>
                        </div>
                        <div data-v-30aca98d="" data-v-cfc9a7fc="" class="con">
                           
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="list">
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="title flex" style="border:none;    padding: 0.38rem 0.18rem;">
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n" style="    margin-top: 10px;">1% @lang('turnover') 
                                        <br><br>
                                        <span>@lang('Achieve Goal') : {{currency()}}<?php echo ($teamBusiness>=50000)?50000:$teamBusiness;?></span>
                                        
                                    </div>
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s" style="    margin-top: -12px;    margin-left: -41px;"> +$50000</div>
                                  
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="more"> <?php echo ($teamBusiness>=50000) ? "Achieved" : (($teamBusiness<=0) ? "Pending" : "Running") ?> </div>
                                </div>
                                
                            </div>
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="list">
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="title flex" style="border:none;    padding: 0.38rem 0.18rem;">
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n" style="    margin-top: 10px;">1.5% @lang('turnover') 
                                        <br><br>
                                        <span>@lang('Achieve Goal') : {{currency()}}<?php echo ($teamBusiness >= 100000) ? 100000 : (($teamBusiness <= 0) ? 0 : $teamBusiness);?>
                                        
                                        
                                        </span>
                                        
                                    </div>
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s" style="  margin-left: -22px;   margin-top: -12px;"> +$100000</div>
                                  
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="more"> <?php echo ($teamBusiness>=100000) ? "Achieved" : (($teamBusiness<=0) ? "Pending" : "Running") ?>  </div>
                                </div>
                                
                            </div>
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="list">
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="title flex" style="border:none;    padding: 0.38rem 0.18rem;">
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n" style="    margin-top: 10px;">2% @lang('turnover') 
                                        <br><br>
                                        <span>@lang('Achieve Goal') : {{currency()}}<?php echo ($teamBusiness >= 250000) ? 250000 : (($teamBusiness<= 0) ? 0 : $teamBusiness);?>
                                        
                                        
                                        </span>
                                        
                                    </div>
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s" style="   margin-left: -22px;   margin-top: -12px;"> +$250000</div>
                                  
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="more"> <?php echo ($teamBusiness>=250000) ? "Achieved" : (($teamBusiness<=0) ? "Pending" : "Running") ?>  </div>
                                </div>
                                
                            </div>

                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="list">
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="title flex" style="border:none;    padding: 0.38rem 0.18rem;">
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n" style="    margin-top: 10px;">2.5% @lang('turnover') 
                                        <br><br>
                                        <span>@lang('Achieve Goal') : {{currency()}}<?php echo ($teamBusiness >= 500000) ? 500000 : (($teamBusiness <= 0) ? 0 : $teamBusiness);?>
                                        
                                        
                                        </span>
                                        
                                    </div>
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s" style="   margin-left: -22px;   margin-top: -12px;"> +$500000</div>
                                  
                                    <div data-v-30aca98d="" data-v-cfc9a7fc="" class="more"> <?php echo ($teamBusiness>=500000) ? "Achieved" : (($teamBusiness<=0) ? "Pending" : "Running") ?>  </div>
                                </div>
                                
                            </div>

                        </div>
                        <div data-v-30aca98d="" data-v-cfc9a7fc="" class="dialog" style="display: none;">
                            <div data-v-30aca98d="" data-v-cfc9a7fc="" class="item"><img data-v-30aca98d=""
                                    data-v-cfc9a7fc="" src="{{asset('')}}assets/static/img/icon_13.9e001174.png" class="to_img">
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="t"><img data-v-30aca98d=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAABnRSTlMAX0AQ3yBuGV3eAAAAhElEQVQoz2MYcMCsimAbwRgsaQIwJmOaM5SllpYIExRLS4KyzNLSBGAK01LhemBKxWDSCDZCFsFBSCKUoimEcNEVQvgQGTSlEIVoSsEK0ZUiFCKUQhQSFkRox7SIoJMQjifkTcwAwQw6zEDGFx1hyBGXjC+KTZATgwOMqYxwSJABw0ADALNxM2ew7aV/AAAAAElFTkSuQmCC">
                                </div>
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="n">@lang('Congratulations on the completion of the mission reward')</div>
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="s">0 USDT</div>
                                <div data-v-30aca98d="" data-v-cfc9a7fc="" class="but">@lang('View Rewards') </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner">
                <img data-v-a7d12cfc=""
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
</body>

</html>
