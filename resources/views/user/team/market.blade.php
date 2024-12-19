<html lang="en" style="font-size: 50px;" class="pc">

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

        .orderList .list>li ul li .s[data-v-167ffb9b] {
    font-size: .25rem !important;
    font-weight: 100 !important;
    line-height: 135%;
}


/* cube */
/* From Uiverse.io by andrew-demchenk0 */ 
.cube-loader {
  position: relative;
/* u can choose any size */
  width: 75px;
  height: 75px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotateX(-30deg) rotateY(0);
  }

  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
}

.cube-loader .cube-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0; */
  transform-style: preserve-3d;
}

.cube-loader .cube-wrapper .cube-span {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0; */
                                     /* width 75px / 2 = 37.5px */
  transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
  background: linear-gradient(
    to bottom,
    hsl(330, 3.13%, 25.1%) 0%,
    hsl(177.27, 21.71%, 32.06%) 5.5%,
    hsl(176.67, 34.1%, 36.88%) 12.1%,
    hsl(176.61, 42.28%, 40.7%) 19.6%,
    hsl(176.63, 48.32%, 43.88%) 27.9%,
    hsl(176.66, 53.07%, 46.58%) 36.6%,
    hsl(176.7, 56.94%, 48.91%) 45.6%,
    hsl(176.74, 62.39%, 50.91%) 54.6%,
    hsl(176.77, 69.86%, 52.62%) 63.4%,
    hsl(176.8, 76.78%, 54.08%) 71.7%,
    hsl(176.83, 83.02%, 55.29%) 79.4%,
    hsl(176.85, 88.44%, 56.28%) 86.2%,
    hsl(176.86, 92.9%, 57.04%) 91.9%,
    hsl(176.88, 96.24%, 57.59%) 96.3%,
    hsl(176.88, 98.34%, 57.93%) 99%,
    hsl(176.89, 99.07%, 58.04%) 100%
  );
}

.cube-top {
  position: absolute;
  width: 75px;
  height: 75px;
  background: hsl(330, 3.13%, 25.1%) 0%;
                      /* width 75px / 2 = 37.5px */
  transform: rotateX(90deg) translateZ(37.5px);
  transform-style: preserve-3d;
}

.cube-top::before {
  content: '';
  position: absolute;
/* u can choose any size */
  width: 75px;
  height: 75px;
  background: hsl(176.61, 42.28%, 40.7%) 19.6%;
  transform: translateZ(-90px);
  filter: blur(10px);
  box-shadow: 0 0 10px #323232,
              0 0 20px hsl(176.61, 42.28%, 40.7%) 19.6%,
              0 0 30px #323232,
              0 0 40px hsl(176.61, 42.28%, 40.7%) 19.6%;
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-04a90ad1.aa2f317d.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-04a90ad1.28c21b1a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a0b1332.9f52f39a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a0b1332.0436ba68.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8e2ce82.4965c1ba.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8e2ce82.8a913baf.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-21a2b91c.0ed7b871.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-21a2b91c.12695023.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-6072d8a4.6ac11efd.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-6072d8a4.290faf4b.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-79aa18e0.f843b761.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-79aa18e0.e3404a41.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-5109cffc.e3562785.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-5109cffc.3f1196fb.1717187934571.chunk.js"></script>
</head>

<style>
    .popBox .cllist li .img[data-v-167ffb9b] {
    height: 1.28rem;
    position: absolute;
    right: .28rem;
    bottom: 26px;
}
.popBox .cllist li .mini[data-v-167ffb9b] {
    opacity: .8;
    margin-bottom: .38rem;
    margin-top: .1rem;
}
.para{
    line-height: normal;
    font-size: 12px;
    padding: 0px;
   /* Adjust to increase left space */
    }
    .pa{
        margin: 11px;
    }
    .totalBox1 ul[data-v-167ffb9b] {
    display: flex;
    /* border-top: .02rem solid #4e4b66; */
    padding-top: -1.68rem;
    margin-top: 0.16rem;
    justify-content: space-between;
}
.totalBox1[data-v-167ffb9b] {
    background: url(../../images/1.png) no-repeat;
    background-size: 100% 100%;
    padding: .28rem;
}

.title{
    font-size: 13px;
    font-weight: bold;
}
.t{
    font-size: 11px;
    line-height: normal;
}

.tab {
    padding: 33px 0 .24rem 0;
    font-size: 14px;
    font-weight: 300;
    display: inline-block;
    margin-right: 60px;
}
.btn3{
    height: 33px;
    border-radius: .2rem;
    background: #55b2c2 ;
    color: #000;
    font-weight: 300;
    font-size: 14px;
    width: 115%;
    border: 0;
}
.btn4{
    height: 33px;
    border-radius: .2rem;
    background: #55b2c2 ;
    color: #000;
    font-weight: 300;
    font-size: 14px;
    width: 115%;
    border: 0;
}
.earn{
    display: inline-block;
    padding-top: 20px; /* Consistent padding */
    margin-right: 25px; /* Space between buttons */
   
}
.investment-amount{
   font-size: 14px;
}
.ft-l{
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 30px 0;
        margin-bottom: 9px;
}
.title{
    color: #170529d9;
        text-align: left;
        font-family: PingFang SC;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 0;
}
.til{
    color: #ffffffd9;
        text-align: left;
        font-family: PingFang SC;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 0;
}
.ftw-r-img{position: absolute;
        top: 0;
        right: 0;
        width: 175px;
        height: auto;
    }
    .content-container{
        position: relative; 
    }

   .mini {
    font-size: 14px;
    font-weight: 300;
}

.timer  {
                                        padding-top: 5px;
                                        text-align: center;
                                        opacity: 0.9;
                                    }

.times{
    position: relative;
    bottom: 24px;
    color: white; /* White text color */
    text-shadow: 
        -1px -1px 0 black, /* Top left shadow */
         1px -1px 0 black, /* Top right shadow */
        -1px  1px 0 black, /* Bottom left shadow */
         1px  1px 0 black; /* Bottom right shadow */
}                                    
</style>
<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-167ffb9b="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-167ffb9b="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">

                        <!-- <div data-v-397da544="" class="left_title">@lang('Subscribe') </div> -->

                        <div data-v-397da544="" class="flex1"></div>
                        <p style="color:#fff">Details</p>
                        <div data-v-397da544="" class="head_right">
                        
                            <a href="{{ route('user.recharge') }}">
                                
                                <!-- <img data-v-167ffb9b="" data-v-397da544="" src="/assets/images/list.png" class="record_icon"> -->
                                
                                <img data-v-167ffb9b="" data-v-397da544="" class="record_icon"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAABra2v4+PgAAAAAAAAAAADk5OQAAADd3d2goKAAAADy8vL///+hq0BzAAAAEnRSTlMzACwYLwYdTOUoIRKzDKZmD9OK32BQAAABUklEQVRYw7WX0XKEIAxFLwlJC9TW+v8f2yk7O26tGE12z3uOERBzkQZI01oIAKhUniUN2BdMSthAOp0WcMYu1MQW9PIhWcUSrOWjLg4FUmBCMhZwxgkyjwSKk/C+QHGauicouED5L1Bcom4FjIvoXwHjMvwokIzLZHkQEByUVdDggu8CIbjId4HCCd8EkuEk3wQNbrgLCG7yr2BCgCnBXMLP5fvt4EDDeoOvZVnehwZKEFiCQ4NghsHHoaGBETIoKkKGioKQoYAQMtBo77dsDObW7fP5CkH4FcKLGN7G+EHSUD0YLVSPOfw5Ry+U6JVWn3Gppgw31P8LDDetC/wtZOkCfwuausDdAkkX+Fto64hT4IDCQ9bTxryOOuu7oFMjo2582O7UwLh/cSX1RZHn5Mxa5DD2NbIebwVP0WyUm9FXGlnldviuofDdkZnX+K9N0oAfKgMTw/lKDHwAAAAASUVORK5CYII=">
                                 
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                  

                        <style>
                            .Progress {
                                    margin-top: .32rem;
                                }
                             .Progress .van-slider {
                                background: hsla(0, 0%, 100%, .1) !important;
                            }
                            
                            .van-slider {
                                position: relative;
                                width: 100%;
                                height: .03448rem;
                                background-color: #ebedf0;
                                border-radius: 17.22414rem;
                                cursor: pointer;
                            }
                            .van-slider:before {
                                position: absolute;
                                top: -.13793rem;
                                right: 0;
                                bottom: -.13793rem;
                                left: 0;
                                content: "";
                            }
                            .Progress .van-slider__bar {
                                background: #55b2c2 !important;
                            }
                            
                            .van-slider__bar {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                background-color: #1989fa;
                                border-radius: inherit;
                                -webkit-transition: all .2s;
                                transition: all .2s;
                            }
                            .van-slider__button-wrapper, .van-slider__button-wrapper-right {
                                position: absolute;
                                top: 50%;
                                right: 0;
                                -webkit-transform: translate3d(50%, -50%, 0);
                                transform: translate3d(50%, -50%, 0);
                                cursor: grab;
                            }
                            .Progress .van-slider__button {
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAgCAMAAABabbp1AAAAtFBMVEUAAAD///////////////////////////////////////////+f6pSP5Y2H44qB4Yic6pOs7pqV55Cq7pmF4ol734Wo7ZiR5o6a6ZKD4YmJ5IuT549+4Iez8Z2x8JyY6JGM5Iy28p6l7Jav75um7Zeh65Wj7Jbz/fJ43oSu75rG8cnu++/f+dT4/vbw+/Ha+NDK9bm68qO978LA8rOk6aea5qO08KKI4pDT9seu67TA86qa6ZT+kNadAAAAC3RSTlMA3yDvkBDQYKCfMLC2wLEAAAHvSURBVDjLlZTZWsJADEYrZYA6Uugi2EUFpVRBlE0Wff/3MssYmKrwmQuuznf4M03iHEo1vYarK+U2vKZyflatbqFWebUKrOr6ZNVt9YU+UxdHf3DJ9Gyy/kwH7X4/C8P7m+7VVTF+CFZvJfOXtnu6ThI/BbwN+L3Bx6NeFMxLy0/0ZJskcewTHpK9i/ZeFAXPmxfiFdHU5TLPO4nP9naWkR3xEfKPd2/Sb43c13mnA3YJI3YIA/gt+TFOC3MngEMY3x8IfsN2gy9K1isNtb9GO2V/fYWnCcsSw5Ql4L3gGfDhHDBXOU2UPxEeY3it8SG1xjBao53x4QzAJmWZME5htG4TDmFsHLv1nAb8vguepoJ3Ce8ZnNM0HBys3IQBO+Eh47b9A8M7GuqJcPpMnD2j7IXWY3p3wodICo52n+2VViMOs0CSwmxPZI8YHxLu2q3GVXwk2blVesgl4jnZB3arPAQUBsfAo880E7u8u7wM46Av6TMpF9N8Z6chyLKjIYiMfaehFM/vNDFhrIksCnjH4xHzZIARj2UiZT3G3KoMsKwHhkkMLvNecKt3sh5Qyiwftyo40mwPzPLZq72nVg9hZD1WstrW4ZhO1v0U9GxnfLPazeRw/PcsSZ07eqp6Ult/sm5d1NbBbv12sFvHB/sLfD5h+WOezsEAAAAASUVORK5CYII=) no-repeat;
                                background-size: 100% 100%;
                                width: .38rem;
                                height: .24rem;
                                border-radius: .1rem;
                            }
                            
                            .van-slider__button {
                                width: .41379rem;
                                height: .41379rem;
                                background-color: #b5cff8;
                                border-radius: 50%;
                                box-shadow: 0 .01724rem .03448rem rgba(0, 0, 0, .5);
                            }
                            .Progress .ul {
                                margin-top: .16rem;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                color: #6b7285;
                                font-size: .26rem;
                                font-weight: 300;
                            }
                            .image-container {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
    /* height: 100vh; Adjust based on your layout */
}

.no-data {
    margin-top: 10px; /* Space between image and text */
    font-size: 18px; /* Adjust font size as needed */
    color: #666; /* Text color */
    text-align: center;
}
                            </style>


                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="orderList" style="display: block;" id="orderList">
                            {{-- <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="cname">@lang('My Strategy')</div> --}}
                            {{-- <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="list">
                                

                                @foreach($recharges as $recharge)
                                
                                @php
                                     $planDetail = \DB::table('plans')->where('id',$recharge->plan)->first(); 
                                     $todayEarning = \DB::table('incomes')->where('invest_id',$recharge->id)->where('ttime',Date("Y-m-d"))->sum('comm'); 

                                @endphp

                                
                                <?php 
                                $endDate= date("Y-m-d H:i:s");                                  
                                $date1 = $recharge->created_at;
                                $startDate=$recharge->created_at;
                                $date1 = strtotime($date1);
                                $date1 = strtotime(" + ".($planDetail?$planDetail->days:0)." days", $date1);
                                $new_date1= date('Y-m-d H:i:s', $date1);
                                $process = 100/($planDetail?$planDetail->days:0);
                                $days = (strtotime($endDate) - strtotime($startDate)) / (60 * 60 * 24);
                                $processBar = $process*$days;
                                ?>

                                <script>
                                var x = setInterval(function() {
                                    
                                    var countDownDate = new Date("{{$new_date1}}").getTime();
                                 
                                    

                                     var now =  new Date(new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}))

                                     var distance = countDownDate - now;
                                     
                                     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                     
                                     
                                 
                                     
                                     document.getElementById("countdown-{{ $recharge->id }}").innerHTML = "<span>" + days + ":</span><span>" + "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>";
                                        
                                     if (distance < 0) {
                                     clearInterval(timer);
                                         document.getElementById("countdown-{{ $recharge->id }}").innerHTML = "EXPIRED";
                                     }
                              
                                 },1000);
                                </script>

                                 


                                <li data-v-167ffb9b="" data-v-cfc9a7fc="" style="background:none;border-radius:10px">
                                    <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex">
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="ico">
                                            <img data-v-167ffb9b="" data-v-cfc9a7fc=""
                                                data-src="/assets/static/image/image_2024_06_22T06_06_48_469Z.png"
                                                src="/assets/static/image/image_2024_06_22T06_06_48_469Z.png"
                                                lazy="loaded"></div>
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex1">
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n1 flex">
                                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">
                                                    {{ $recharge->plan == 1 ? "VIP 1" : ($recharge->plan == 2 ? "ServerCore Prime" : ($recharge->plan == 3 ? "VIP 3" : "VIP 4")) }}
                                                </div>
                                                                                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="status">
                                                    <span data-v-167ffb9b="" data-v-cfc9a7fc="">{{ $recharge->roiCandition==0?"Running":"Completed" }}</span></div>
                                            </div>
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n2 flex">
                                                <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="sun"><img
                                                        data-v-167ffb9b="" data-v-cfc9a7fc=""
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAMAAACrZuH4AAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAYJ/fMCDvEHBAwJCvgFDP9KY6pgAAAJNJREFUOMvNktEOwyAIRVUUUdvu/v/XLjFZxOLWZH3peSBijkpA91Aiy4XhEW4YAZpXNsKBmX19vc7+NBJR7OGr4THC2sjEqYcbdQwEzQ4ErJpE8M5QQfFjbyBnSYQBR2eJ2iC/EBgkqS/zUQFZvNFUpTtQzOy3KW+oJwNIU575dEkxRxrk4vMJgjV+7pTRZbXzKN5DrAf2kOJR1wAAAABJRU5ErkJggg==">
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div><img src="{{ asset('')}}assets/static/img/strategy.png" style="padding:8px"></div>
                                    <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex">
                                        <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">@lang('Running amount')</div>
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> {{ $recharge->amount }} <span>
                                        </li>
                                        
                                        <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">@lang('Yield')</div>
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> {{ $planDetail?$planDetail->profit:0   }} % </div>
                                        </li>
                                    </ul>
                                    <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex">
                                       
                                        <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">Today's executable amount</div>
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> {{ number_format($todayEarning,2)  }} 
                                               
                                                </div>
                                        </li>
                                        <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">@lang('Level')</div>
                                            <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> 2 </div>
                                        </li>
                                    </ul>

                                    <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="flex">

                                    <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">@lang('Running Time')</div>
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s"> 1 hour
                                           
                                            </div>
                                    </li>
                                    <li data-v-167ffb9b="" data-v-cfc9a7fc="">
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="n">Number of times that can be run today</div>
                                        <div data-v-167ffb9b="" data-v-cfc9a7fc="" class="s" style="text-align: end;"> 1 times</div>
                                    </li>
                                </ul>
                                    
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="Progress" style=""><div data-v-1fa86597="" data-v-cfc9a7fc="" class="cons"><div data-v-1fa86597="" class="van-slider" data-v-cfc9a7fc="" style="height: 10px;"><div class="van-slider__bar" style="background: rgb(0, 0, 0); width: 69%;"><div role="slider" tabindex="0" aria-valuemin="0" aria-valuenow="50" aria-valuemax="50" aria-orientation="horizontal" class="van-slider__button-wrapper"><div class="van-slider__button"></div></div></div></div></div><div data-v-1fa86597="" data-v-cfc9a7fc="" class="ul"><div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 0% </div><div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 25% </div><div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 50% </div><div data-v-1fa86597="" data-v-cfc9a7fc="" class="li"> 75% </div><div data-v-1fa86597="" data-v-cfc9a7fc="" class="li active"> 100% </div></div></div>
                                    <div data-v-7bab1ac4="" data-v-cfc9a7fc="" class="item" style="margin:8px"><button data-v-7bab1ac4=""
                                        data-v-cfc9a7fc="" class="btn2" type="submit"> Run </button></div>
                                </li>
                                @endforeach
                            </ul> --}}
                           
                            @if($recharges->isNotEmpty())
                            @foreach($recharges as $investment)
                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="container">
                                <div data-v-cc3ce6d2="" data-v-1fa86597="" class="levelBox" data-v-cfc9a7fc=""><img
                                        data-v-cc3ce6d2="" src="{{asset('')}}assets/static/image/cubebg.png" class="leve-bg">
                                    <div data-v-cc3ce6d2="" class="levelBox-head">
                                        <div data-v-cc3ce6d2="" class="left">{{ 
    $investment->amount == 30 ? "Core" : 
    ($investment->amount == 120 ? "Prime" : 
    ($investment->amount == 300 ? "Plus" :
    ($investment->amount == 1200 ? "Max" :
    ($investment->amount == 3600 ? "Pro" :
    ($investment->amount == 6000 ? "Edge" :
    ($investment->amount == 15000 ? "Hub" : "")))))) 
}}
</div>
                                        {{-- <div data-v-cc3ce6d2="" class="more">
                                            <a href="{{route('user.recharge')}}">
                                           @lang('Package list')<img data-v-cc3ce6d2=""
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAgECgUJBwE7RqWgAAAFBJREFUKM9joBtgcoAQcKBeCCHgwL1cAELAAGN5IYSAA3GQrDhpSlhBsqzISsxBsuZISpjLy8AEpgCmFkxDMa1FOIywAgzv4w4gJgUIQUcAAPJCHQUHfZ8eAAAAAElFTkSuQmCC">
                                            </a>
                                        </div> --}}
                                    </div>
                                    <div style="margin-left:150px">
                                    <div class="cube-loader">
  <div class="cube-top"></div>
  <div class="cube-wrapper">
    <span style="--i:0" class="cube-span"></span>
    <span style="--i:1" class="cube-span"></span>
    <span style="--i:2" class="cube-span"></span>
    <span style="--i:3" class="cube-span"></span>
  </div>
</div>
</div>
                                    <div data-v-cc3ce6d2="" class="bann">
                                       <div>
                                        <!-- <img data-v-cc3ce6d2="" src="{{ asset('')}}assets/static/img/vip7.png"> -->
                                        
                                    </div>
                                        
                                                
                                        <div data-v-cc3ce6d2="" class="cur-level" style="display:none">
                                            
                                            @php
                                            $package=["ServerCore","ServerCore Prime","ServerCore Plus","ServerCore Max","ServerCore Pro","ServerCore Edge","ServerCore Hub"]
        
                                           @endphp
                                            
                                        <span data-v-cc3ce6d2="">{{$package[1]}}
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
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Running Node Power Amount</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                                
                                            ${{ $investment->amount }}
        
                                            </div>
                                        </li>
                                        <li data-v-1fa86597="" data-v-cfc9a7fc="">                                           
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Estimated Node Power Reward</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                               
                                               ${{ $investment->plan }}
                                            </div>
                                        </li>
                                        <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                        @php
    $created_at = \Carbon\Carbon::parse($investment->created_at);
    $remaining_days = 60 - $created_at->diffInDays(now());
@endphp
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">@lang('Node Power Duration')</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> {{ $remaining_days > 0 ? $remaining_days : 0 }}</div>
                                        </li>
                                        <!-- <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Total Reward</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                                
        
                                            </div>
                                        </li> -->
                                        <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Today's executable limit</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                                1 hour
        
                                            </div>
                                        </li>
                                        <li data-v-1fa86597="" data-v-cfc9a7fc="">
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="n">Running Time</div>
                                            <div data-v-1fa86597="" data-v-cfc9a7fc="" class="s"> 
                                                1 
                                            </div>
                                        </li>
                                    </ul>
                                    <p style="font-weight:300; font-size:10px;color:gray">The Node power Subscription  needs to be clicked and run for 1 hour every day to obtain rewards. If you do not click on it, there will be no reward on the day. After the operation is completed, the proceeds will be distributed to the  Assets balance.
                                    </p>
                                    @if($button == 1)
                                    <!-- Button to start the task -->
                                    <form method="post" name="add" action="{{ route('user.generate_roi', ['invest_id' => $investment->id]) }}" onsubmit="return validateForm()">
                                        {{ csrf_field() }}
                                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="conf">
                                            <button data-v-1fa86597="" data-v-cfc9a7fc="" class="btn2" type="submit">@lang('Run Node Power')</button>
                                        </div>
                                    </form>
                                    @elseif($button == 2)
                                    <!-- Progress bar and countdown for 1 hour -->
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="Progress">
                                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="cons">
                                            <div data-v-1fa86597="" class="van-slider" data-v-cfc9a7fc="" style="height: 25px;">
                                                <div class="van-slider__bar" id="progress-bar-1h" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%)!important; width: 0%;">
                                                    <div role="slider" tabindex="0" class="van-slider__button-wrapper">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="times">
                                            <p id="timer-1h" class="timer">You will be rewarded in: 1:00:00</p>
                                        </div>
                                    </div>
                                    @else
                                    <!-- Progress bar and countdown for 24 hours -->
                                    <div data-v-1fa86597="" data-v-cfc9a7fc="" class="Progress">
                                        <div data-v-1fa86597="" data-v-cfc9a7fc="" class="cons">
                                            <div data-v-1fa86597="" class="van-slider" data-v-cfc9a7fc="" style="height: 25px;">
                                                <div class="van-slider__bar" id="progress-bar-24h" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%)!important; width: 0%;">
                                                    <div role="slider" tabindex="0" class="van-slider__button-wrapper">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="times">
                                            <p id="timer-24h" class="timer">Next task will be unlocked in: 24:00:00</p>
                                        </div>
                                    </div>
                                    @endif


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
                            
                            @endforeach
                            @else
                            <div style="margin: 5px" class="image-container">
                                <img src="{{ asset('') }}assets/static/img/nodata.png" style="max-width: 70%;
   ">
                                
                            </div>
                            <p class="no-data">No Data</p>
                          @endif

                            <ul data-v-167ffb9b="" data-v-cfc9a7fc="" class="list" style="display: none;"></ul>
                        </div>
                        
                  

                    <div data-v-167ffb9b="" 
                       >
                       <!-- <div data-v-167ffb9b="" class="popBox" style="background: none;" id="popBox">
                        
                            
                           
                            <ul data-v-167ffb9b="" class="cllist" style="scroll:none">
                                <li class="serverCoreItem" data-id="1" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%); color: #000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore</div>
                                    <div data-v-167ffb9b="" class="mini" style="font-size:15px; font-weight:bold">$30</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom: 5px;">
                                            <span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$1</span> Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top: 5px;justify-content: space-between">
                                            <div><span style="font-size: 11px;">1 times</span></div>
                                            <div style="font-size: 11px;">1 hour</div>
                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv">
                                        <img data-v-167ffb9b="" src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv">
                                        <img data-v-167ffb9b="" src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('') }}assets/static/img/vip1.png" style="padding: 8px; bottom: 43px;" class="img">
                                    <div class="flex" style="opacity: 0.7;justify-content: space-between">
                                        <div>Daily Run Times</div>
                                        <div>Running time</div>
                                    </div>
                                </li>                                
                                <li class="serverCoreItem" data-id="2" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Prime</div>
                                    <div data-v-167ffb9b="" class="mini" style="font-size:15px; font-weight:bold">$120</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$4</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px;">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip2.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div >  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                                <li class="serverCoreItem" data-id="3" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Plus</div>
                                    <div data-v-167ffb9b="" class="mini"style="font-size:15px; font-weight:bold">$300</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$10</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip3.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div>  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                                <li class="serverCoreItem" data-id="4" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Max</div>
                                    <div data-v-167ffb9b="" class="mini"style="font-size:15px; font-weight:bold">$1200</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$40</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px;">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip4.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div>  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                                <li class="serverCoreItem" data-id="5" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Pro</div>
                                    <div data-v-167ffb9b="" class="mini"style="font-size:15px; font-weight:bold">$3600</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$120</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px;">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip5.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div>  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                                <li class="serverCoreItem" data-id="6" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Edge</div>
                                    <div data-v-167ffb9b="" class="mini"style="font-size:15px; font-weight:bold">$6000</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$200</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip6.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div>  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                                <li class="serverCoreItem" data-id="7" data-v-167ffb9b="" style="background: linear-gradient(92deg, #55B2C2 1.36%, #fff 103.37%);color:#000;">
                                    <div data-v-167ffb9b="" class="title">ServerCore Hub</div>
                                    <div data-v-167ffb9b="" class="mini"style="font-size:15px; font-weight:bold">$15000</div>
                                    <div data-v-167ffb9b="" class="rate">
                                        <div data-v-167ffb9b="" class="s" style="padding-bottom:5px"><span style="color: #170529d9; font-size:12px" data-v-167ffb9b="">$500</span>
                                            Daily Reward
                                        </div>
                                        <div data-v-167ffb9b="" class="n flex" style="padding-top:5px;justify-content: space-between"> <div><span  style="font-size:11px">1 times</span>
                                           </div>
                                         
                                            <div style="font-size:11px">1 hour</div>

                                        </div>
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/unlock.png"> Unlock
                                    </div>
                                    <div data-v-167ffb9b="" class="lv"><img data-v-167ffb9b="" 
                                        src="{{ asset('') }}assets/static/img/lock.png"> Lock
                                    </div>
                                    <img data-v-167ffb9b="" src="{{ asset('')}}assets/static/img/vip7.png" style="padding:8px;bottom:43"class="img">
                                        <div class="flex" style="opacity:0.7;justify-content: space-between">
                                        <div>  Daily Run Times</div>
                                        <div> Running time</div>
                                        </div>

                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com//jquery-3.3.1.min.js"> </script>
            <script>
                $(".open-model").click(function () {
                    // alert("hi");
                    // $(".van-overlay").toggleClass("van-overlay-active");
                    $('.van-popup--bottom').toggle().css('display', 'block');

                });
                $(".close-btn").click(function () {
                    // alert("hi");
                    // $(".van-overlay").toggleClass("van-overlay-active");
                    $('.van-popup--bottom').toggle().css('display', 'none');

                });

            </script>
            <script>
                // Get the elements
                const tab1 = document.getElementById('tab1');
                const tab2 = document.getElementById('tab2');
                const orderList = document.getElementById('orderList');
                const popBox = document.getElementById('popBox');
              
                // Function to handle the click event for My Computing Power tab
                tab2.addEventListener('click', () => {
                  // Change the colors of the tabs
                  tab2.style.color = 'white'; // Set clicked tab to black
                  tab1.style.color = 'grey';  // Set other tab to grey
              
                  // Show the orderList and hide the popBox
                  orderList.style.display = 'block'; // Show orderList
                  popBox.style.display = 'none';     // Hide popBox
                });
              
                // Function to handle the click event for Computing Power Rental tab
                tab1.addEventListener('click', () => {
                  // Change the colors of the tabs
                  tab1.style.color = 'white'; // Set clicked tab to black
                  tab2.style.color = 'grey';  // Set other tab to grey
              
                  // Show the popBox and hide the orderList
                  popBox.style.display = 'block'; // Show popBox
                  orderList.style.display = 'none'; // Hide orderList
                });

                document.querySelectorAll('.serverCoreItem').forEach(function(item) {
    item.addEventListener('click', function() {
        // Check if the element contains the unlocked image
        var isUnlocked = item.querySelector('.lv img[src*="unlock.png"]');

        if (isUnlocked) {
            // Get the data-id value for dynamic redirection
            var dataId = item.getAttribute('data-id');
            // Redirect to the corresponding page using the data-id
            window.location.href = `/user/confirm-node/${dataId}`;
        } else {
            // Optionally show a message or prevent action
            alert('This item is locked.');
        }
    });
});

              </script>
               <script>
    // Function to calculate and display remaining time for both 1-hour and 24-hour timers
    document.addEventListener("DOMContentLoaded", function() {
        @if($last_trade)
            var lastTradeTime = new Date('{{ $last_trade }}'); // Server time of last trade
            var currentTime = new Date(); // Current time
            var diffInSeconds = Math.floor((currentTime - lastTradeTime) / 1000); // Time difference in seconds

            @if($button == 2)
                // Timer for 1 hour
                var secondsLeft = Math.max(0, 3600 - diffInSeconds); // Time left until 1 hour is complete
                startCountdown(secondsLeft, 'timer-1h', 'progress-bar-1h', 3600); // Start the 1-hour countdown
            @elseif($button == 3)
                // Timer for 24 hours
                var secondsLeft = Math.max(0, 86400 - diffInSeconds); // Time left until 24 hours is complete
                startCountdown(secondsLeft, 'timer-24h', 'progress-bar-24h', 86400); // Start the 24-hour countdown
            @else
                // Case for button == 1, you can handle it differently if needed
                console.log("No timer to display as no recent trades.");
            @endif
        @else
            console.log("Last trade time not available.");
        @endif
    });

    // Function to start a countdown timer and update progress bar
    function startCountdown(secondsLeft, timerId, progressBarId, totalSeconds) {
        var timerElement = document.getElementById(timerId);
        var progressBarElement = document.getElementById(progressBarId);

        function updateTimer() {
            var hours = Math.floor(secondsLeft / 3600);
            var minutes = Math.floor((secondsLeft % 3600) / 60);
            var seconds = secondsLeft % 60;

            // Update the timer display
            timerElement.textContent = `${timerId === 'timer-24h' ? 'Next task will be available in:' : 'You will be rewarded in:'} ${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            // Update the progress bar
            var percentage = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
            progressBarElement.style.width = percentage + "%";

            // Check if time is left
            if (secondsLeft > 0) {
                secondsLeft--;
                setTimeout(updateTimer, 1000);
            } else {
                // Timer is done, reload the page
                location.reload();
            }
        }

        updateTimer(); // Start the timer
    }
</script>

            
          
            
          

            @include('layouts.upnl.footer')
