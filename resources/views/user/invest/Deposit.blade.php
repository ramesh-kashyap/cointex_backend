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
                        <div data-v-397da544="" class="back"><a href="{{route('user.strategy')}}"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac"> Confirm Node</div>
                        <div data-v-397da544="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-397da544="" class="head_right">
                            <!-- <img data-v-1fa86597="" data-v-397da544=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAv8Ag30Bg76AQMHDPkICwn1DQSxq5iQAAAYFJREFUSMfdlUG2gyAMRdUYIyBi6/73+oOk5KDA+ZNO+iZV8m4IQcrwQzLuGBvyWPHb+ezoMA8/nV1tdyDmp6mudyT20r/w0GiGhpA4WxkNPAJDUzvnKxc+nucUO2XxppQFGFhqQKVT2ANsraE9wDxmEJ/hh1etJHgtN6Gs+r0PT6Cv7wDo/OEdmv8B4Cm3ChoALCzQ3WUp0m4rRnQT5/z5hfbGLey/fJODa9opvpCtlLSlXPK1uxx+zTL+WDSwpH6Nfyocm12C7OfS4jyyPGwBa/7WPJNyhmWKKjBn2ypPkgXqAF4TKKCjrg44DtkHMBBvXx3wDOQ6tP+behS4p91PIcTTnIHk0WxCNABdA5SErCH0u6REkI3Y64ChtEdKeNkHVKD4uw1FzPiYGEhbITgUNc23cxlynWqxRXQrCB8N5YFg0Zzkze37hysMak9HTGXT/XJgiu0kB7Eg1lMFnxuM+Iaj9JT9irhVhPEtKK8L7GqZ9IZzfavOGfiKWx0Ov6Y/i5cqRP3WDagAAAAASUVORK5CYII="
                                class="record_icon"> -->
                            </div>
                    </div>
                </div>
            </div>
            <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="container">
                        <div data-v-cc3ce6d2="" data-v-1fa86597="" class="levelBox" data-v-cfc9a7fc=""><img
                                data-v-cc3ce6d2="" src="{{asset('')}}assets/static/img/lv0c323966.png" class="leve-bg">
                            <div data-v-cc3ce6d2="" class="levelBox-head">
                                <div data-v-cc3ce6d2="" class="left">LV {{$id}}</div>
                                {{-- <div data-v-cc3ce6d2="" class="more">
                                    <a href="{{route('user.recharge')}}">
                                   @lang('Package list')<img data-v-cc3ce6d2=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAgECgUJBwE7RqWgAAAFBJREFUKM9joBtgcoAQcKBeCCHgwL1cAELAAGN5IYSAA3GQrDhpSlhBsqzISsxBsuZISpjLy8AEpgCmFkxDMa1FOIywAgzv4w4gJgUIQUcAAPJCHQUHfZ8eAAAAAElFTkSuQmCC">
                                    </a>
                                </div> --}}
                            </div>
                            <div data-v-cc3ce6d2="" class="bann">
                               <div>
                                <img data-v-cc3ce6d2="" src="{{ asset('')}}assets/static/img/vip7.png">
                            </div>
                                
										
                                <div data-v-cc3ce6d2="" class="cur-level">
                                    @php
                                    $package=["ServerCore","ServerCore Prime","ServerCore Plus","ServerCore Max","ServerCore Pro","ServerCore Edge","ServerCore Hub"]

                                   @endphp
									
								<span data-v-cc3ce6d2="">
                                {{$package[0]}}
                                        </span></div>
                            </div>
                          
                        </div>
                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="buySeting" style="background:none">
                            {{-- <div data-v-1fa86597="" data-v-cfc9a7fc="" class="title flex"><img data-v-1fa86597=""
                                    data-v-cfc9a7fc=""
                                    src="data:image/png;base64,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">
                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="flex1"> @lang('Package Information') </div>
                            </div> --}}
                            <ul data-v-1fa86597="" data-v-cfc9a7fc="" class="com-1">
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Subscription Server</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                        @if($id=="1")
                                           $30
                                        @elseif($id=="2")
                                        $120
                                        @elseif($id=="3")
                                        $300
                                        @elseif($id=="4")
                                        $1200
                                        @elseif($id=="5")
                                        $3600
                                        @elseif($id=="6")
                                        $6000
                                        @elseif($id=="7")
                                        $15000
                                        @elseif($id==null)
                                        $0
                                        @endif

                                    </div>
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Daily Node Power Reward</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                        <?php
                                        $plans = [
                                            "1" => 1,
                                            "2" => 4,
                                            "3" => 10,
                                            "4" => 40,
                                            "5" => 120,
                                            "6" => 200,
                                            "7" => 500
                                        ];
                                        
                                        $plan = isset($plans[$id]) ? $plans[$id] : 0; // Default to 0 if $id is not found
                                        ?>
                                        ${{ $plan }}
                                    </div>
                                                                    </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">@lang('Subscription Duration')</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s">  60 @lang('Days')</div>
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Total Reward</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                        <?php
                                        $amounts = [
                                            "1" => 60,
                                            "2" => 240,
                                            "3" => 600,
                                            "4" => 2400,
                                            "5" => 7200,
                                            "6" => 12000,
                                            "7" => 30000
                                        ];
                                        
                                        // Check if the id exists in the amounts array, otherwise default to 0 or another value
                                        $amount = isset($amounts[$id]) ? $amounts[$id] : 0;
                                        ?>
                                        ${{ $amount }}
                                    </div>
                                    
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Run Time</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                        1 hour

                                    </div>
                                </li>
                                <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Maximum Quantity</div>
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                        1 
                                    </div>
                                </li>
                            </ul>
							
                            <form method="post" name="add" action="{{ route('user.confirmDeposit') }}" onsubmit="return validateForm()">
                                {{ csrf_field() }}
                                
                                <input type="hidden" name="Sum" value={{ $amount }}>

                                <p style="font-weight:300; font-size:10px;color:gray"><b>Note:</b> Rewards from completed tasks are credited to the VG CUBE wallet, allowing users to track and withdraw their funds</p>

                                <div data-v-1fa86597="" data-v-cfc9a7fc="" class="conf">
                                    <button data-v-1fa86597="" data-v-cfc9a7fc="" class="btn2" type="submit">@lang('Confirm') </button>
                                </div>
                            </form>
                            
                            {{-- <div data-v-1fa86597="" data-v-cfc9a7fc="" class="check">
                                <div data-v-1fa86597="" role="checkbox" tabindex="0" aria-checked="true"
                                    class="van-checkbox" data-v-cfc9a7fc="">
                                    <div
                                        class="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked">
                                        <i class="van-icon van-icon-success"
                                            style="border-color: rgb(122, 222, 133); background-color: rgb(122, 222, 133);">
                                            <!----></i></div><span class="van-checkbox__label">
                                        <div data-v-1fa86597=""> @lang('Creating a policy means agreeing to') <span
                                                data-v-1fa86597="">[@lang('the Fund Agreement')]</span></div>
                                    </span>
                                </div>
                            </div> --}}
                        </div>
                      
                    </div>
                    
                </div>
            </div>

            {{-- <script>
                function validateForm() {
                    var amount = document.getElementById('amount').value;
                    var minAmount = {{ $profile->min }};
                    var maxAmount = {{ $profile->mix }};
                    if (maxAmount<=0) 
                    {
                        maxAmount = 100000;
                    }
                    if (amount === "") {
                        alert("Amount cannot be empty");
                        return false;
                    }
            
                    amount = parseFloat(amount);
            
                    if (isNaN(amount) || amount < minAmount || amount > maxAmount) {
                        alert("Amount must be between " + minAmount + " and " + maxAmount);
                        return false;
                    }
            
                    return true;
                }
            </script> --}}
         
            @include('layouts.upnl.footer')