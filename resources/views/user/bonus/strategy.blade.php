<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>BitGrid</title>
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
        .van-overlay-active
        {
        display:block !important;
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-3cbe2e96.30f94eac.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-3cbe2e96.e797acf7.1717187934571.chunk.js"></script>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-04a90ad1.aa2f317d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-04a90ad1.28c21b1a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-17b291de.e7b989c3.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-17b291de.8772eeeb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-64987b26.5bff7a5a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-64987b26.1b0de86e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-e10718e8.75cf843d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-e10718e8.c28f8d4c.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8870696.ba836efa.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8870696.d3c72f4a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-8ea63dfa.b7fc1269.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-8ea63dfa.a6b9af6e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-5109cffc.e3562785.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-5109cffc.3f1196fb.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-8c0c3ac6.27e1c228.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-8c0c3ac6.576dd3c7.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-158583d7.f20000e6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-158583d7.5e00ec93.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-198acc81.38a789e9.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-198acc81.12c44c37.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-65aadf8b.a4cef8a6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-65aadf8b.59fb6a2e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-43a21247.c7b442a8.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-43a21247.bd486532.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-66c4c188.61a42d60.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-66c4c188.806de089.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-44d5009e.eddfa31e.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-44d5009e.527e1714.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-73ab94aa.2e0ec155.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-73ab94aa.70e0e268.1717187934571.chunk.js"></script>
</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-167ffb9b="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-167ffb9b="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <!---->
                        <div data-v-397da544="" class="left_title"> Strategy </div>
                        <!---->
                        <div data-v-397da544="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-397da544="" class="head_right"><img data-v-167ffb9b="" data-v-397da544=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAv8Ag30Bg76AQMHDPkICwn1DQSxq5iQAAAYFJREFUSMfdlUG2gyAMRdUYIyBi6/73+oOk5KDA+ZNO+iZV8m4IQcrwQzLuGBvyWPHb+ezoMA8/nV1tdyDmp6mudyT20r/w0GiGhpA4WxkNPAJDUzvnKxc+nucUO2XxppQFGFhqQKVT2ANsraE9wDxmEJ/hh1etJHgtN6Gs+r0PT6Cv7wDo/OEdmv8B4Cm3ChoALCzQ3WUp0m4rRnQT5/z5hfbGLey/fJODa9opvpCtlLSlXPK1uxx+zTL+WDSwpH6Nfyocm12C7OfS4jyyPGwBa/7WPJNyhmWKKjBn2ypPkgXqAF4TKKCjrg44DtkHMBBvXx3wDOQ6tP+behS4p91PIcTTnIHk0WxCNABdA5SErCH0u6REkI3Y64ChtEdKeNkHVKD4uw1FzPiYGEhbITgUNc23cxlynWqxRXQrCB8N5YFg0Zzkze37hysMak9HTGXT/XJgiu0kB7Eg1lMFnxuM+Iaj9JT9irhVhPEtKK8L7GqZ9IZzfavOGfiKWx0Ov6Y/i5cqRP3WDagAAAAASUVORK5CYII="
                                class="record_icon"></div>
                    </div>
                </div>
            </div>
            <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="container">
                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="totalBox">
                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="name flex">
                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex1">Total Balance</div>
                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> My Wallet<img data-v-167ffb9b=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEXS/9IAAADS/9LU/9TU/9TV/9XQ/9DA/Kyr/HvU/9TT/9Pa/9qu+4Kv+4S5/Zus+3ut+36q+3jdZBpaAAAAEXRSTlMzAC0GFCEZTeUoHA6zpmbZzB36ToMAAAFKSURBVFjDtZdLdsMgDEUf+rWIpq33v9mmg5wkjkHGcu5c9wASIKF0YHGthCtU1RqXDtuC5oQVpG2vgA3bkPAOARsGOEcCwRiSoYArQoj7AsEeSHoCx05sW6DYjW4JKiaorwLFFLoWGCbxZ4FgGnkUMOYhfhAQDlDvAsEh5CZgAnB0EwgqMKxIBCcYLgHBCYRLwCAFMfQvaEjQCsJLcFl+PgYFjWgH38uyfHYNVMCIBEMDoyHga2gQGFIGhyJlUFSkDBWElIF6uV+zMoSp2+byDkF6C+lDTKcxX0ieiodBUvFo6eucf1CKhzXx242HnvGoFiSf9WI4jJzytSWW4LfvPbGAUxqMKxUHoGSTBU62efbcaPp0fLbVTTfb57f7MxXpuZEHNhi6CCGVx2NfpLBw8PQoPB59haLwePjWFwd5MHyv4Wb38d+FS4c/ZqkSYvi2fKYAAAAASUVORK5CYII=">
                                </div>
                            </div>
                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="amount"> 6.1642 <span data-v-167ffb9b=""
                                    data-v-cfc9a7fc="">USDT</span></div>
                            <ul data-v-167ffb9b="" data-v-cfc9a7fc="">
                                <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">Today's earnings</div>
                                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> 0 <span data-v-167ffb9b=""
                                            data-v-cfc9a7fc="">U</span></div>
                                </li>
                                <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">Total revenue</div>
                                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> 6.1642 <span
                                            data-v-167ffb9b="" data-v-cfc9a7fc="">U</span></div>
                                </li>
                            </ul>
                        </div>
                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="orderList">
                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="cname">My Strategy</div>
                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="rel">
                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="empty"><img data-v-167ffb9b=""
                                        data-v-cfc9a7fc="" src="{{asset('')}}assets/static/img/none.fe897b1e.png">
                                    <p data-v-167ffb9b="" data-v-cfc9a7fc="">No record yet</p>
                                </div>
                            </div>
                            <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="list" style="display: none;"></ul>
                        </div>
                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="add"><button data-v-167ffb9b=""
                                data-v-cfc9a7fc="" class="btn2"><img data-v-167ffb9b="" data-v-cfc9a7fc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxAQMAAACmkLhhAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABpJREFUGNNjIAqwP6Anxf4fCB4QQdHZZSQAALGHOjODQZQ0AAAAAElFTkSuQmCC">
                                Add strategy </button></div>
                    </div>
                    <div class="van-overlay" style="z-index: 2001;"></div>
                    <div data-v-167ffb9b="" class="van-popup van-popup--bottom"
                        style="/* background: none; */z-index: 2002;">
                        <div data-v-167ffb9b="" class="popBox">
                            <div data-v-167ffb9b="" class="cname"> Add strategy <img data-v-167ffb9b=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEX///8AAAD///////////////////////////////////////////////////////9PNSPeAAAAD3RSTlMZAKgVDtOpJwRuCYxv8eL5+dI9AAABKUlEQVQ4y43VMUoDYRAF4Gc2CIqIiymCla1VErCwTLCxtPMQFvEKQQ/gDdQbeBPvsmAhkkz+3fx5gc3bmbzqh8fX7LAzKOtc3aOV26+maOo3iDxs6wFkZpt6ONZ1sWjqV3TkLtXEkqO8RGcmqZ521/0SQzhZYODVM1x49QSfXn2KqVf3Mfbqgq+TazA3+/VHxWfP3pFDbEY+sj/kEJtVxLbH50Y+Ss/HVn1siRP/vkDyjJ8AzYk1J9acWHNiyVfEmhNLTiw5scx5apcCc1T88iI9q1M5mFzjpeYc1VxyjopzlxjQnKMil5hcY3KJu/hPxpl/t+oz4pr/A23e4MyJd5wYeMZhKYLfP1gewerxF9dRsPaCpemv3GBhB+s+PhbkAruHKj5zwZFcA76M1d2Br6D2AAAAAElFTkSuQmCC">
                            </div>
                            <div data-v-83cbb658="" data-v-167ffb9b="" class="tabs-con">
                                <div data-v-83cbb658="" class="van-tabs van-tabs--line">
                                    <div class="van-tabs__wrap van-tabs__wrap--scrollable">
                                        <div role="tablist"
                                            class="van-tabs__nav van-tabs__nav--line van-tabs__nav--complete">
                                            <div role="tab" aria-selected="true" class="van-tab van-tab--active"><span
                                                    class="van-tab__text">Strategy</span></div>
                                            <div role="tab" class="van-tab"><span
                                                    class="van-tab__text">Investment</span></div>
                                            <div role="tab" class="van-tab"><span class="van-tab__text">Pledge</span>
                                            </div>
                                            <div role="tab" class="van-tab"><span class="van-tab__text">Exchange</span>
                                            </div>
                                            <div class="van-tabs__line"
                                                style="transform: translateX(53.5px) translateX(-50%); transition-duration: 0.3s;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="van-tabs__content">
                                        <!---->
                                        <!---->
                                        <!---->
                                        <!---->
                                    </div>
                                </div>
                            </div>
                            <ul data-v-167ffb9b="" class="cllist">
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP1</div>
                                    <div data-v-167ffb9b="" class="mini">$50 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">1.8-2%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+4
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.1
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240319/3dc7be2d187bdf6ff56095aa33e5de43.png"
                                        class="img">
                                </li>
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP2</div>
                                    <div data-v-167ffb9b="" class="mini">$300 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">2.2-2.4%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+5
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.2
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240320/9d1631e4b7ca54f0a8e1dc684a6d0b71.png"
                                        class="img">
                                </li>
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP3</div>
                                    <div data-v-167ffb9b="" class="mini">$600 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">2.6-2.8%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+7
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.3
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240320/2fc893a4514324919cd7eb46efd3c9a9.png"
                                        class="img">
                                </li>
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP4</div>
                                    <div data-v-167ffb9b="" class="mini">$1200 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">3-3.3%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+9
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.4
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240320/d76bc0ee51f50e119c486b84b0ee1e07.png"
                                        class="img">
                                </li>
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP5</div>
                                    <div data-v-167ffb9b="" class="mini">$3000 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">3.4-3.8%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+11
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.5
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240320/04c0ac8fd9183ba52c66ea44aeaa7b22.png"
                                        class="img">
                                </li>
                                <li data-v-167ffb9b="">
                                    <div data-v-167ffb9b="" class="title">VIP6</div>
                                    <div data-v-167ffb9b="" class="mini">$5000 [Mini]</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s"><span data-v-167ffb9b="">4-4.6%</span><img
                                                data-v-167ffb9b=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAB71BMVEUAAAD////////////////////////////////7yY34mir////////////////////4p0b5oTf////////////6tWL6w4H++/b4lBr6sFb806Tkz6H4myr5qUnNrHDizJv3myn4minQtHvPsnn7wHj6v3j3kxr///9ifurlz5/kzp3jzZviy5nhyZjgyJbawIrZv4jVuYH2+P7+8uPXvIXexZLdxI/cw47bwYzYvYfWuoNshut1ju3fx5T+/Pj9+vWwvvSnt/P++fGTpvH95MX6wn/Ttn3QsnfRs3nPsHT5pD7//vzx59Dm067816rfxpPUt37StXv6u274oTfY3/ro2Lrq27n927Ll0aX80Jv4njG6xvZ/lu7w5Mrt3r7NrnH6tWH3liHj6Pz+9Of48ub07Nz94b7p2LP806ThzaL6xIT6tmX4ojv4oDX1kx3s7/z79/GJnu/+793z6tbv4sXo1av8y5H7x4j6vnPF0Pixv/WdrvJ6ku727+H+7Nf96tP+58zw5Mvl1bXn06b5s135rlL5rE75qUjs7/3BzPearfKdrvFviOz59Or96dL95cft4Mbr3cL837reyZ78zpfTtoHxrV/qpVr4mCTr7/3O1/iFm+5wiexog+v92Kzzzqflzp7bxJr1wILynz3xmTFSpJKxAAAAJnRSTlMA71CwkBDf0L/+/cBwIIB//vrgYED9+vn38fDv6OXg3/T07+/q6uLdKcsAAATKSURBVEjHhZdnVxNBFIZZAikUBXvv7huRmkUUEpOQYktRAymERCNFilIEaQqCVHvvvf1QZ3aT7MyG8n7JmcmZ59w6czdPo8L8Ap1eAASDsSC/cMP1etpmFMBKt9E6f01Uvh6Ap217eZEoFpWlTB4QWdrdNqvZbE24na0gsvsjC7GKiljPNX8XAP3WVVGlRsBl2icyutQvAR02c0a2+4+A57HKkycrKk4Qjd11AIbSXFaJAJd3l6jRYEiCpdmsiuDsdxWaLIITSrSszcCeQ+IqagkCToZmmwIeMrSxbmBzDssrrqF+nmZuZmhUSULjWTt3i2vqo4OnJSyEVklovxRaj52llQD7ueM3eNoHoJml3QHuVjLGRYCSbB4F7OBZL6OXuA0vLDbeU3uMpSUhZHJqQFDktASUxTtv3lZ3etFqZtWOriqWNgqjwtoKaSB7aiDVIooTmBUX4WOsi7vgZmFWCyKEEYudUGgLdijNoEdIPRUCRqIj6BXb8JJ3dMjMO6roWtq2JPRyE0FiDr2DrM43Etq4MLpwh6NZ0rCMp3ZsIzAdjrGnbo8jLendALNv0kTNmYbRwFGYn0atECgXuYYE4JjzybiUuv0XFisXtTQsk4YFCIXES4/I6RaAm+Kn0AMQLan7Hj4F5lbM+P3+QDapXSQFBTDxsDYAE+S3iNKi7P5jTXX4L5+trq7K0EZRkGdEioe9ALCsRAmYZS0emmZhbnSfunz2LKFVybRr0JGKLcsJmSS3U5T6y2QGFq5DbRiuIrRqYlwl7dQxUhwCijjYJIhe9PZ73wBgK7AIvsduPgOBSM/rvoyreyHkASKnH2B0k70ngSfOZwwNON3QcCrSXaXQDgIENsjBRgBMTnjk0ugVWQGJaR52htACvoBsG4Vp3YwDcNHQBQFwiS6C5RtfaPa+nuTzmZ504KibW1CeW2VUcicwvV6Gju93mLpNwD76KlB9uuGUktQxGEg3bVfv+0V642NCWWgSkEJH+1euNGZqas6cOU1p1LgIivMKmIYOQtZS1kYsss3Z8YRvzmRtrUKTjUuigG2nuAOy5sZvLa94JRANsO00ZeXbKdBYW0OMS9NoOxUKyD68K5NRCayibM1imq9Z1DQ2qrb1AWT0MMLE31sjPqQltah//MEXM6unGK2vl2kKLgIdHVbgYh7yFeD2Jx88c52ds+Ns0UiaS2MIsSaG1jCs3Nt6eNlu6hSXgbg4yD93IXzWGDZc19TUlKWFoVeGH7gOqznzRcV+PMgZEiTc5yI2hEBdXV1TPTGuluCqhpEeh4zYw9waLWIvglpYEB2cYVPoOneF0giO2uaHQX2E+UEjHteOG7mPcN85ldYYhlDKjAe7xXX0UTMeJID5C1cJ7YpCewswY9Um7Ny/NuuDA/e4UcOC8PkLKq3Pjk0EwtCwYy2WFzyrGQhfPE9pV2VaGJSloQUHVkP9+8mzrO2URWAK7Vz9K5XFjqFSKAc16HXxY2izBY7A9esXKY7S5tUxlFWpAZCOl3OPi8kFtNpUq5wWoPv9dSKZ9j7sAIppHnO1VR7dTakyOrqXb29TRnenO0FHd5u7vRVEjvnfjUcPHDjS9PZ1NwD9Ol8COrASijdab9MStJ87xQYBELboyOfMhmte/wHeciG5fv//ZgAAAABJRU5ErkJggg==">+13
                                        </div>
                                        <div data-v-167ffb9b="" class="n">Annualized rate</div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b=""
                                            src="data:image/png;base64,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">LV.6
                                    </div><img data-v-167ffb9b=""
                                        src="https://bitgrid-all.s3.ap-southeast-1.amazonaws.com/upload/20240320/bd13af51ea1d7d1adb9db64ac1ed70b0.png"
                                        class="img">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-cfc9a7fc="" class="footer">
                <div data-v-6049d237="" data-v-167ffb9b="" class="footers-con" data-v-cfc9a7fc="">
                    <div data-v-6049d237="" class="footers-h"></div>
                    <div data-v-6049d237="" class="footers grid">
                        <div data-v-6049d237="" class="item item_active">
                            <div data-v-6049d237="" class="on">
                                <div data-v-6049d237="" class="icon"><img data-v-6049d237=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAAC08p2G44md6ZOX6JFz3IK886CX6JG8859y3YFy3YKv7pq+86G78qCJ44yn65iK44uH4oyl7Jao7Zh13IKX55G38Z6G4oqa6JJ43oRy3IK78qCU5pB23YN03IKx75yr7pmp7ZiJ44uD4Ymn7Ji58p+18Z2u75ql7JeB4Ih+4Id834Z63oW986Gi65aP5Y6M5Iyf6pSc6ZOS5o+y8Jy+jCqxAAAAFXRSTlMAHx9f7+/f32Bf3/3v7+/f32Dv7t+L2p6QAAABdElEQVRIx+2QjVKCUBCFVVT8KX8qiwSxVCgrJcX3f7bO3p177y4Ngw/gJ9w9fOuZYWjduJ5hbykYDWucZ5SmS/xSvpc9ck8pYEXACVbpCvjTOOAtnOS1Qo3z/IAOxw7lGuf5BirXOMcXULnGOfZAZ572ldgJtsDlPeetB2arCy9AZFPAIO2GKmxYqPIE0lzMTBdANc9nG8Fkrgq/QOUaRKHwhaIoGgsFULmJEthvXiZl2VhIkqRMLEjkgm4iCANVWGhMIdSuqwrdaBEZHUU0Q3IwBrtShSCMBN2AXHRGxGFpNXEGbY5tyo2FE1C5iSNw+XQ6Xl/QmQkePgXTgBwlu99x9kx3ikdyFGiqbHmvYJ3cq8JbBevkXhU+gP3mlNmNMZkxO88aiMyFtf8T1FoXLqIA/GSw1oUc2Fei/N9dcl14BjnfBDkTcqvgHLzMMnfwEg+43EIX7uMsBhlOom8cnoxkDycY9OP4EB+Y+G5gnVPkblzNHyFAXOWxuwKYAAAAAElFTkSuQmCC"
                                        alt=""></div><span data-v-6049d237="">AI Strategy</span>
                            </div>
                        </div>
                        <div data-v-6049d237="" class="item">
                            <div data-v-6049d237="" class="">
                                <div data-v-6049d237="" class="icon"><img data-v-6049d237=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwBAMAAABK7o+KAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAEHRSTlMAgHAQXzAgeGhIUDhAKAgY868QGAAAAM9JREFUOMtjGADA6igSgF1moqCgDHYtgkCQgE2GAyTjgE2GUVA4UVAZh8xFQcG1WGQ2CoKBlgG6G18JQoGEI6ob+RVBolIgEs2N2wUFKx1LEtgWQWQckM2SMACzQgRBblRANmselG0IcqMCLLymCwqWwlSxIEybCHaRAWoowVgQs7arwUMWEV6iIJagENT0EoijGWFuYQbKYIQXpgzCLegyCLegyyDcApeBuxHhFoQMml6EDDOtZLar4ZKBsjBlmIeZDEOhBAYNBUFlGPTgBgBIoCyCCX0TdgAAAABJRU5ErkJggg=="
                                        alt=""></div><span data-v-6049d237="">Market</span>
                            </div>
                        </div>
                        <div data-v-6049d237="" class="item">
                            <div data-v-6049d237="" class="">
                                <div data-v-6049d237="" class="icon"><img data-v-6049d237=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAEHRSTlMAgEAfcBAIMHhgUFhIOChorzhHYAAAATlJREFUOMvlk6FPw0AUxi/tKIaJj1TcWBbGCQymJPwDFUySCjQ0WBAjkEyXhGAIAYFHkipmQNegGX/BBP/AHJL2XS7v1qsg2dw+0+++X+7uvZerWERnv/KjKW9nAJ7dPChQKowccArSZj33Y8hdfwx81sAEOBTCA8JkLr8Aumn5/QGO7HxtBvTJxJVhHQAP1lZuwTp6hy7jFt7t8obcglX+sV7pC+VUsArghUyLTmV5QI/MpamDa5QUPNFOu6sMNEvAlMq3fGnAkemlv0og+FZKRQ1gQi8xccA6SAMHtDToOWAfN0rtodsAHoXw0fkfSGug0CBGZANKppoP5kEbSPTp2wkDanWLWt4AOnk+xlsFZJ6/ArcEghlIw9JmxpLOaRGmZmC4M2O+hvnFvcrd8wM8GY2u2KViufoDH3dJdNaCAGAAAAAASUVORK5CYII="
                                        alt=""></div><span data-v-6049d237="">Home</span>
                            </div>
                        </div>
                        <div data-v-6049d237="" class="item">
                            <div data-v-6049d237="" class="">
                                <div data-v-6049d237="" class="icon"><img data-v-6049d237=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADXRSTlMAgHgQYD9wSCAIUDBoFctLawAAAL1JREFUOMtjoBVgjjllgE2cw1FQMBmHuKA4pjg3SFxQDEN8qiJQ2FVQEKu4BwOGhDlEHEOiBSgsVMwAksAUj2TAkNgCEceQaAOKi2xgwJBgFUQDKlBFhoLoQAwSYAsFMUAmWOIgpoQo1L7FqJ6yEhSBShigxYqgEKbToSKDTIJVqQC7RKGgKHYJRUEhEiUCBcWxS7ArBQzCIEEWUcQVtY64EkMgZvKRBktMw5RIgBiZiCOJMnA7oSXqSAb6AADSxiaTuz9TTgAAAABJRU5ErkJggg=="
                                        alt=""></div><span data-v-6049d237="">Funds</span>
                            </div>
                        </div>
                        <div data-v-6049d237="" class="item">
                            <div data-v-6049d237="" class="">
                                <div data-v-6049d237="" class="icon"><img data-v-6049d237=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAEHRSTlMAgHAQCDB4YEBIOCBQGFgocCNyLgAAASNJREFUOMtjoCtgWacoVGqARbxNEAgkMCWMBMFAGV2cWREiIYRuGJOgYIYBb5CgoAqaRKOgjAPQoonotjALCk4A0TyCYg4oEqyCQmABlkTBBSgS7IKiMCMfoNktC2EYCiqgSDAKCsAZ+CUQRglDGBfRjOKDuT9QsABFggvqfhZFwQC4INT9B0A0p6CgAXqQSIKC5CBGwDsJCqpeYAbGiQLOYCccUQhbgCDDAVOCOVxR6BVYnP6AeU1RoqD61Avo4jsToR48jCq+XRAOStHEEaAYIe4J5IpVfXZgub0cZOIE5AAU3wJNYIVIAbkNKL4BruqgoGA+VBFQzQaEufxA/QHQ+BecAqIRNkKTpaKgFHoEiIHpRKBO9BQOpoNSkQRhIoMUAAD/bDMrgZ8aDAAAAABJRU5ErkJggg=="
                                        alt=""></div><span data-v-6049d237="">Mine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAMAAAA0X5qLAAAAh1BMVEUAAAAAv44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av46sPT54AAAALHRSTlMA+wXZ+J87JB7ux4lDNRQPCvLq39PNp5BpWRmxgnAvvrnlw5RhT0sqwHRxeP/zXbkAAAGcSURBVDjLjZTXcqtAEAVnyUGIJBAKKFqS7dv//30XsHFJxrD0C0XRxc45TCEDvFsdrvfhxnGWMk1S7c70nI+bZFxdXFC8YG5GVNemxTdte7+3yxUdq4MMMaocsMza6CeSqLRo2A3dffvguPh1WEiDcuWFeN24mSNDdjS85Exs4OLJX7wpyOWJT8A25G+iFMyn2za1jOIAV+kxIU9knDUQ9d8C/EimyH9OXgawNiblrepfXSn8WKax+4wnCEWDC6ptNk5RC9GxgqqNZ1EstXL1tSP/oBQtS1DN5Qp7vbz1sdwu30b0pNAkPIOrd4131E2kAEf0rDqtaJvTY3YDvM+aOS5IH91KrWdUl2LGIhsI9PIDLm2DFmmslT++FyiDu7a5ANV1FoKpkw/gfwUFddDIO7Cl4wqBMf1iRRZJxxb86d5OYCf9fyS/TaYrFcqVeYQK6nmqEQLFPNc7AuZ2lrtYAcEs936kdZdjE97rSAxDEvG8j8wC/E8Zo1Yo/CAv0oyOYKKzN55QWTm9B9WpyGiwyMvFnLbih+M5xjDWf6S2MlzIf04ZAAAAAElFTkSuQmCC"
                    alt=""></div>
        </div>
        <div data-v-e73e51fc="" class="start-page" style="display: none;"><img data-v-e73e51fc=""
                src="{{asset('')}}assets/static/img/start.0aabcda5.gif"></div>
    </div>
    <script src="https://code.jquery.com//jquery-3.3.1.min.js"> </script> 
        <script>
        $(".btn2").click(function()
        {
            alert("hi");
        $(".van-overlay").toggleClass("van-overlay-active");
        });
        </script>
    <script src="https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vue.2deea45a.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-echarts.eba990db.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vant.9e1db231.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vendors.24e8c7cc.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/app.83a7756d.1717187934571.js"></script>
    <div class="van-toast van-toast--middle van-toast--text" style="z-index: 2011; display: none;">
        <div class="van-toast__text">Please look forward to</div>
    </div>
</body>

</html>
