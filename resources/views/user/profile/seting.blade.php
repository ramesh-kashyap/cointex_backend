<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>Setting</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-4d56d011.d2239d8d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-4d56d011.55574f9a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-a46085d6.d2823003.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-a46085d6.6a4896cb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-97c0768a.2ab4315e.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-97c0768a.b8196644.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f31ad6d4.2882463c.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f31ad6d4.836d485b.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-0830ec22.59462d6e.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-0830ec22.94ec9a30.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-73ab94aa.2e0ec155.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-73ab94aa.70e0e268.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-65aadf8b.a4cef8a6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-65aadf8b.59fb6a2e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-529a9802.d4a866bb.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-529a9802.18a0309a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a326f81.d6e1e630.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a326f81.29676938.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-04a90ad1.aa2f317d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-04a90ad1.28c21b1a.1717187934571.chunk.js"></script>
</head>

<body class="main_en">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-0e1dae04="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-0e1dae04="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><a href="{{route('user.Mine')}}" style="color:#fff;"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac">@lang('Setting') </div>
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
                    <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="container">
                        <ul data-v-0e1dae04="" data-v-cfc9a7fc="" class="list">
                            <li data-v-0e1dae04="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="ico"><img data-v-0e1dae04=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAACUmp+Ump+Tl5+UmJ6Ump+UmZ+Wn5+Tl56Ul5+Ump+VmZ+Ump+UmZ6Tm5+Ump+TmZ6Ulp2Tmp6TnJ+Ump+24VaTAAAAFHRSTlMA4O8gYKCAEEAwwLCQcEDPUHDQUBNxwWEAAAFKSURBVEjH7ZTLlgIhDERDmmfTL2fy/986QCvVoMdh6cK7IkpSZUikLx+PW6MS4ahpDM1yRw2lLHJhGbr/NsObZHc3R/UjCbaBKBjJtK6mudqdqKAu5ykH7AgEhjaHKjDVevn7legaA873YjoY3LApjAiV5Hgj2ord+f5RwA2fDdbokIRFKfFEkiDQxqbKw8vbhD0FWyeuilAlpHB/ne3OKD5cwkRsElwTnW1ltPX6cp28P8Ud9w+nWr2578AhGRPIecvdaPi+rcd/wzeXYj4VKyeF3AuzfjsamEcQaxOceRbHugG+USEoaVBT9TOvwRG5bb3L2TrJLdqe17eL7dPF7dE/Xn6nXMpAjVdqWPkcTFV8u1ppwSIBrNleEnRTSQqw021F+On/dTQessNiUfsERS9xjp7AaA+zY58HwEKNw/gJYxyKNX35cP4AcHUnVdtny8AAAAAASUVORK5CYII=">
                                </div>
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="n flex1"><a href="{{route('user.Mine')}}" style="color:#fff;">@lang('Configure Profile')</a></div><i
                                    data-v-0e1dae04="" data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                    <!----></i>
                            </li>
                            <li data-v-0e1dae04="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="ico"><img data-v-0e1dae04=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACTl5+Tn5+Vmp+UmJ+Ump+UmZ+Ump+WmZ6UmZ+Ump6TmZ2Ump+Tmp6TmZ+VmZ+Ump/y5Wn0AAAAEHRSTlMAIBDfYM+gwF+vkIDv0IB/HJsz2QAAAKVJREFUSMftlTkOwzAMBMNDlC3n4P9fGyIwRKRbOl3sadTsACK0oG4Xv8Cv5t4UzpP4ByFQEN8RhvLqkw0SWiSNyeLokOABxeQewALH6LDQI7gSr3E0SDCfKJJfMi/VPMH58fB7fzLQnwFfnaQ4ajWvmbfT9GfzyYAEljQWyCDUSLRHf+zLwF/QCntJ8XqnUdxL43/2kh3plRZ7JfUPBUX3vXRxgDeUFBQiIrBegQAAAABJRU5ErkJggg==">
                                </div>
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="n flex1"><a href="{{route('user.lang')}}" style="color:#fff;">@lang('Switch Language')</a></div><i
                                    data-v-0e1dae04="" data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                    </i>
                            </li>
                            <li data-v-0e1dae04="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="ico"><img data-v-0e1dae04=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAACVmp+Sn5+Ump+VmJ6UmZ6UmJ6Ump+Xl5+Pl5+Ump+Tmp+TmZ+Ump+VmZ+TmZ+Tmp6Tmp6Vmp+Ump/GDkY9AAAAE3RSTlMA3xDvYIBwzyAgoO9QwLCA0JAwb2IvQAAAAQ5JREFUSMftlNFugzAMRW/sBJKslG38/78OWyCXWipGlfbU84JafBIn1wIfYlAZlxBjhtDSEiY1AFIfNwh5uUSB9N8JAWpfSyeIVhGCpFYFBHlboJLWy+4tKgxfi8JDTBjs7sTIq26k7IT2UMDk8mQndF2aaGCNB/wUsRPGrRUUfY3bYQt2LemTLB7H+0KS1vfbGgNC2Q6tzx4QiB+OWLEnYSm44O4m3CGkpxR8S0YBDkkkJ1i9DYclwb6lpv/PFfiddeV2cugu+1YoVYyfE0EGI2Mji/1asJwt69cCH9bk8x1uiTN29l+Of/xqEEI0FSaZnYYA1HXwy3KJDLr2uQdQo4ZNT/4OVfM0Ez6E+ANrlT5UQkWl9AAAAABJRU5ErkJggg==">
                                </div>
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="n flex1"><a href="{{route('user.tpassword')}}" style="color:#fff;">@lang('Change Tranction Password')</a></div><i
                                    data-v-0e1dae04="" data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
    </i>
                            
                            <li data-v-0e1dae04="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="ico"><img data-v-0e1dae04=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAACUmp+Tm5+Vmp+TmZ6Ul5+UmZ+Pn5+UmZ+Tl52Ump+UmZ2Tmp+Ump+SmZ6UlZ+VmJ6Tmp6Ump+UmZ+Vmp+fn5+Vmp+Ump+ZwjL7AAAAF3RSTlMAv0DfgCCgEI9A73DvsGAwYFDPcDAQz3vS0vQAAAE5SURBVEjH7VVbbsQgDAxvCIXddHfL/W/aOKkKjjFIlfpTdb4S22PDYMPyNxFiUm+lFCX85qbRTkNshQ3jcF8IhOHjI2Sn0Fz8V/rV5udr/31uVp0W1S3ixOmMr8YoBc84XOvjar4rhuG5TCYdnqvAGawffUE0+Pwljar5KSwwAjWxgrt3SIcKILkpbuDPqADO0JVENP+wg/uwZ/AuApwACSKnpJFudkzIaE2JrIjAoEWAardljLXVff3u/dyRVJxN3yYd9f7WzIikBNAOwUD8kCAwIRaOUKUg+j/OD0qoH5gg/wm/QdgIQcE8aK07k3qYdpdHJ61LhcWE0G0NByWYe1cQAsAo9jFwlhIAUu+IsjudEXwKEeYwBY3xHB4JOEVIZXrViYIwLZBpvBkSIvP6snAJZU9y+Sk+AbtVNBMW8XUdAAAAAElFTkSuQmCC">
                                </div>
                                <div data-v-0e1dae04="" data-v-cfc9a7fc="" class="n flex1"><a href="{{route('user.ChangePass')}}" style="color:#fff;">@lang('Change Login Password')</a></div><i
                                    data-v-0e1dae04="" data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                    </i>
                            </li>
                        </ul>
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
    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2004; display: none;"><i
            class="van-icon van-icon-success van-toast__icon">
            <!----></i>
        <div class="van-toast__text">@lang('Login successful')</div>
    </div>
</body>

</html>
