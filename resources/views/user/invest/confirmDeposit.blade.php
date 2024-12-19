<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>@lang('Deposit')</title>
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
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-65aadf8b.a4cef8a6.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-65aadf8b.59fb6a2e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-2a0b1332.9f52f39a.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-2a0b1332.0436ba68.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-f8e2ce82.4965c1ba.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-f8e2ce82.8a913baf.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-21a2b91c.0ed7b871.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-21a2b91c.12695023.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-67098c77.8b942857.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-67098c77.b8c94109.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-198acc81.38a789e9.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-198acc81.12c44c37.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-273ce16e.debfb5de.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-273ce16e.6f3f099a.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-494d233b.50573298.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-494d233b.77bc554e.1717187934571.chunk.js"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('')}}assets/static/css/chunk-0830ec22.59462d6e.css">
    <script charset="utf-8" src="{{asset('')}}assets/static/js/chunk-0830ec22.94ec9a30.1717187934571.chunk.js"></script>
</head>

<body class="mein_cn">
    <div id="app" class="applang">
        <div data-v-cfc9a7fc="" data-v-b3422e30="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-b3422e30="" class="head" title1="Recharge Details" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><a href="{{route('user.strategy')}}" style="color:white;"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac">@lang('Deposit') </div>
                        <div data-v-397da544="" class="flex1"></div>
                        <!---->
                        <!---->
                        <!---->
                        <div data-v-397da544="" class="head_right"></div>
                    </div>
                </div>
            </div>
            <form method="post" action="{{ route('user.fundActivation') }}" name="balance/oper_frm" data-v-56930b78="" class="container">
            {{ csrf_field() }}
            <input name="paymentMode" value="{{$paymentMode}}" type="hidden">
                        <input name="amount" value="{{$amount}}" type="hidden">
                        <input name="orderId" value="{{$orderId}}" id="orderId" type="hidden">
                        <input name="transaction_id" value="{{$transaction_id}}" type="hidden">
            <div data-v-cfc9a7fc="" id="scroll" class="content-container">
                <div data-v-cfc9a7fc="" id="content" class="content-scroll">
                    <div data-v-b3422e30="" data-v-cfc9a7fc="" class="container">
                        <div data-v-b3422e30="" data-v-cfc9a7fc="" class="itemBox">
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="cname">Send @lang('Amount') {{$paymentMode}}</div> 
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="val flex">
                                    
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" class="flex1"><input name="oID" value="{{$invoice_total_sum}} " readonly></div>
                               
                            </div>
                        </div>
                        <div data-v-b3422e30="" data-v-cfc9a7fc="" class="itemBox">
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="cname">@lang('Payment Mode')</div>
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="val flex">
                                    
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" class="flex1">
                                    <input  value="<?php if($paymentMode=="USDT_TRX"){echo "USDT (TRC20)";}elseif($paymentMode=="USDT_BSC"){echo "USDT (BEP20)";}elseif($paymentMode=="LTC"){echo "Litecoin";}elseif($paymentMode=="DOGE"){echo "Dogecoin";}elseif($paymentMode=="BCH"){echo "Bitcoin Cash";}elseif($paymentMode=="ETC"){echo "Ethereum Classic	";}?>" readonly>
                                    <input type="hidden" name="paymentMode" value="{{$paymentMode}} " readonly>
                                    
                                    
                                    </div>
                                <input name="orderId" value="{{$orderId}}" id="orderId" type="hidden">
                            </div>
                        </div>
                        <div data-v-b3422e30="" data-v-cfc9a7fc="" class="itemBox">
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="cname">@lang('Transaction Id')</div>
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="val flex">
                                    
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" class="flex1"><input style="width: 100%;" name="transactionId" value="{{$transaction_id}} " readonly></div>
                            </div>
                        </div>
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="mbox">
                                <p data-v-b3422e30="" data-v-cfc9a7fc="">@lang('Scan this QR code or Save pictures locally')</p>
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" id="qrcode"
                                    title="{{$walletAddress}}"><canvas width="185" height="185"
                                        style="display: none;"></canvas><img alt="Scan me!"
                                        src="{{$qr_code}}"
                                        style="display: block;"></div></div>
                            </div>
                        </div>
                        <div data-v-b3422e30="" data-v-cfc9a7fc="" class="address_box">
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="text" id="clipboardright">{{$walletAddress}}</div>
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="copy" id="copy-button"><img data-v-b3422e30=""
                                    data-v-cfc9a7fc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAn2DfgCAQ78+/sJCPUIWfNBMAAACISURBVCjPY6AekHv37vExJD7jOyB4iaLAUHDxO4VcJAUCDKzvBOwcYAoeAwUY3gkASagCU5gAzAQnFAEWoA0wAYSdDigCSkpKDCgCQIIOAgEgihUuwPTOShAIxN8pwPwy7x0YvGCACWTbgfjP3aACCMAKF1AUFISaAhUAaoCaAgX7gByIKdQBAOGIZAwmCV4kAAAAAElFTkSuQmCC">
                            </div>
                        </div>
                        <div data-v-b3422e30="" data-v-cfc9a7fc="" class="itemBox">
                            <div data-v-b3422e30="" data-v-cfc9a7fc="" class="tips">
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" class="n">@lang('Note')</div>
                                <div data-v-b3422e30="" data-v-cfc9a7fc="" class="p">
                                    <p><span style="color:#ffffff"><span style="font-size:11pt"><span
                                                    style="font-family:Arial,sans-serif">1,@lang('lowest Deposit amount'): 10
                                                    USDT</span></span></span></p>

                                    <p><span style="color:#ffffff"><span style="font-size:11pt"><span
                                                    style="font-family:Arial,sans-serif">2.@lang('Deposit network'):USDT-TRON,USDT-BEP20,Litecoin,Dogecoin,Bitcoin Cash,Ethereum Classic
                                                </span></span></span></p>

                                    <p><span style="color:#ffffff"><span style="font-size:11pt"><span
                                                    style="font-family:Arial,sans-serif">3,@lang('only USDT recharge is
                                                    supported. Recharge other assets will not be
                                                    retrieved')</span></span></span></p>

                                    <p><span style="color:#ffffff"><span style="font-size:11pt"><span
                                                    style="font-family:Arial,sans-serif">4,@lang('recharge requires confirmation by the node on the chain , please wait patiently')</span></span></span></p>

                                    <p> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-4c14e1cc="" data-v-b3422e30="" data-v-cfc9a7fc="">
                        <!---->
                    </div>
                    <div data-v-4c14e1cc="" data-v-b3422e30="" data-v-cfc9a7fc="">
                        <!---->
                    </div>
                </div>
            </div>
    </form>
            <div data-v-cfc9a7fc="" class="footer"></div>
        </div>
        <div data-v-a7d12cfc="" class="global-loading default" style="display: none;">
            <div data-v-a7d12cfc="" class="global-spinner"><img data-v-a7d12cfc=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAMAAAA0X5qLAAAAh1BMVEUAAAAAv44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av44Av46sPT54AAAALHRSTlMA+wXZ+J87JB7ux4lDNRQPCvLq39PNp5BpWRmxgnAvvrnlw5RhT0sqwHRxeP/zXbkAAAGcSURBVDjLjZTXcqtAEAVnyUGIJBAKKFqS7dv//30XsHFJxrD0C0XRxc45TCEDvFsdrvfhxnGWMk1S7c70nI+bZFxdXFC8YG5GVNemxTdte7+3yxUdq4MMMaocsMza6CeSqLRo2A3dffvguPh1WEiDcuWFeN24mSNDdjS85Exs4OLJX7wpyOWJT8A25G+iFMyn2za1jOIAV+kxIU9knDUQ9d8C/EimyH9OXgawNiblrepfXSn8WKax+4wnCEWDC6ptNk5RC9GxgqqNZ1EstXL1tSP/oBQtS1DN5Qp7vbz1sdwu30b0pNAkPIOrd4131E2kAEf0rDqtaJvTY3YDvM+aOS5IH91KrWdUl2LGIhsI9PIDLm2DFmmslT++FyiDu7a5ANV1FoKpkw/gfwUFddDIO7Cl4wqBMf1iRRZJxxb86d5OYCf9fyS/TaYrFcqVeYQK6nmqEQLFPNc7AuZ2lrtYAcEs936kdZdjE97rSAxDEvG8j8wC/E8Zo1Yo/CAv0oyOYKKzN55QWTm9B9WpyGiwyMvFnLbih+M5xjDWf6S2MlzIf04ZAAAAAElFTkSuQmCC"
                    alt=""></div>
        </div>
        <div data-v-e73e51fc="" class="start-page" style="display: none;"><img data-v-e73e51fc=""
                src="/static/img/start.0aabcda5.gif"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script>
        
        
        
        function storeTransaction() {
            
                var orderId = $('#orderId').val();
        
        $.ajax({
                    type: "post",
                    url: "https://syntheticventure.com/user/checkPaymentStatus",
                    data: {"orderId":orderId,"_token": "{{ csrf_token() }}"},
                    success: function (response) 
                    {
                     console.log(response);  
                     
                     if(response==1)
                     {
                      
                      iziToast.success({
            			message: 'Deposit Successfully',
            			position: "Center"
            		});
                    console.log("Deposit Successfully");  

             
                      window.setTimeout(function() {
                        window.location.href = 'https://syntheticventure.com/user/strategy';
                    }, 3000);
        
                     }
                    }
                    });
          
        }
        
        // Set the interval to 5 minutes (300,000 milliseconds)
        const interval = 2000;
        
        // Call the function immediately and then at the specified interval
        storeTransaction(); // Call the function immediately
        setInterval(storeTransaction, interval);
        
        </script>


     @include('partials.notify')
   
       <script>
           $(document).ready(function() {
           $('#copy-button').click(function() {
               var textToCopy = $('#clipboardright').text();
               var tempTextarea = $('<textarea>');
               $('body').append(tempTextarea);
               tempTextarea.val(textToCopy).select();
               document.execCommand('copy');
               tempTextarea.remove();
               iziToast.success({
                       message: 'Copied Successfully',
                       position: "center"
                   });
   
           });



           });
       </script>

    <script src="{{asset('')}}assets/static/js/chunk-vue.2deea45a.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-echarts.eba990db.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vant.9e1db231.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/chunk-vendors.24e8c7cc.1717187934571.chunk.js"></script>
    <script src="{{asset('')}}assets/static/js/app.83a7756d.1717187934571.js"></script>
</body>

</html>
