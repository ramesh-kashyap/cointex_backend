<html lang="en" class="pc" style="font-size: 50px;">

<head>
    <meta charset="utf-8">
    <title>@lang('Personal information')</title>
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
        <div data-v-cfc9a7fc="" data-v-636522ac="" class="page">
            <div data-v-cfc9a7fc="" class="headers">
                <div data-v-397da544="" data-v-636522ac="" class="head" data-v-cfc9a7fc="">
                    <div data-v-397da544="" class="container flex">
                        <div data-v-397da544="" class="back"><a href="{{route('user.Mine')}}" style="color:#fff;"><i data-v-397da544="" class="van-icon van-icon-arrow-left">
                                <!----></i></a></div>
                        <!---->
                        <div data-v-397da544="" class="name tac">@lang('Personal information') </div>
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
                    <div data-v-636522ac="" data-v-cfc9a7fc="" class="container">
                        <div data-v-636522ac="" data-v-cfc9a7fc="" class="heads">
                            <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <!-- <div data-v-636522ac="" data-v-cfc9a7fc="" ><img data-v-636522ac=""
                                        data-v-cfc9a7fc=""
                                        src="{{ asset('') }}assets/static/img/logo1.png" style="width:250px;">
                                </div> -->
                                <!-- <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1">
                                    <div data-v-636522ac="" data-v-cfc9a7fc="" class="n"> riteshkk <img
                                            data-v-636522ac="" data-v-cfc9a7fc="" src="{{asset('')}}assets/static/img/lv1.0c323966.png">
                                    </div>
                                    <div data-v-636522ac="" data-v-cfc9a7fc="" class="cid"> UID: <span
                                            data-v-636522ac="" data-v-cfc9a7fc="">119103</span></div>
                                </div> -->
                            </div>
                        </div>
                        <!-- <div data-v-636522ac="" data-v-cfc9a7fc="" class="incomeBox">
                            <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Invitation Code')：</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="right" > <span id="clipboardright">{{Auth::user()->username}}</span><img data-v-636522ac="" id="copy-button" 
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAn2DfgCAQ78+/sJCPUIWfNBMAAACISURBVCjPY6AekHv37vExJD7jOyB4iaLAUHDxO4VcJAUCDKzvBOwcYAoeAwUY3gkASagCU5gAzAQnFAEWoA0wAYSdDigCSkpKDCgCQIIOAgEgihUuwPTOShAIxN8pwPwy7x0YvGCACWTbgfjP3aACCMAKF1AUFISaAhUAaoCaAgX7gByIKdQBAOGIZAwmCV4kAAAAAElFTkSuQmCC">
                                </div>
                            </div>
                        </div> -->
                        <!-- <ul data-v-636522ac="" data-v-cfc9a7fc="" class="list">
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico"><img data-v-636522ac=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEUAAACUmp+Ump+Ul5+UmZ6Pn5+TmZ6UmJ6TmZ2Tmp6Vmp+UmZ+Vl56Ump+UmZ6UmZ6VmZ+fn5+Ump+TmZ6Tmp+Tmp6Vmp+Tmp6SmZ2Ump8Etc8rAAAAGXRSTlMA798gYBCAcECQn48wz7CgfxC/oFDQz8BwJIuJOgAAAYVJREFUSMfdVduSgyAMJeEiWNTa2m75/x9dQWZiDLoz+9jzFDAcTi5E9Z3wnxEhJRhG5//2tndIO2Cvr91vSeDqSAepATRn/pUeJhNnpWZvpkpwa8t5bHzdrAgGy+bDKomhsHfHbbedONGDjQA1NlWZvPtuJkSXuztBw/jlR+BhPDPJacI1HEXp7O8uCpS/28MFqC6AhZCvaz3vAOvlZNMVQP6elrciTtg2R+FZcfrNhFI+aU8ssyMpkgeoTiPrirjrhCDtyNICu6QFAKekbVnUmUm1wXz+f4AkSTQlIQUtQUEPMq1tyLR2VDhlgB79Arjsus3x1rBVXtEqbN4aZdmRea+9R8UyxSQ4WocyvPx67TORUiwmwdKr1XxU6noXPUjihW0n7k5ApAfZ87oA0WlMFT+aTQj5aoe6uUyv1WPyNGYadQrXgywogQeNSjnR30rCDnK42w9uwcyqhVBT05toV+do+swu9fDhLkEyJfQk/QOXI48gY3fCXcK78QWrL+bf7lfiF/96MN/AnTo+AAAAAElFTkSuQmCC">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Avatar')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr"><i data-v-636522ac=""
                                        data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                       </i></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="upimg">
                                    <div data-v-636522ac="" class="van-uploader" data-v-cfc9a7fc="">
                                        <div class="van-uploader__wrapper">
                                            <div class="van-uploader__upload" style="width: 2rem; height: 2rem;"><i
                                                    class="van-icon van-icon-photograph van-uploader__upload-icon">
                                                 </i><input multiple="multiple" type="file" accept="image/*"
                                                    class="van-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico"><img data-v-636522ac=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAACUmp+UmZ+TlZ+Ump+Xl5+Pl5+Pn5+Ump+Ump+WmZ6Tmp+UmJ6Vmp6VmZ+Tmp6VmZ+fn5+Vmp+UmZ+Ump9XDmKGAAAAFHRSTlMA34Aw7yAgEKDPX+9wkK+QUBDPjzBvt/oAAADsSURBVEjH7ZRJDoMwDEW/M0OhY+5/1qqJaqNmIF21C94GGf2HLDsEB/+Ev1DsQsFhgz7FXUiDcRQHMJ6FEIdQLEypntFkzk1xHTMaDXTMfAqmYbhTQ4jkqnmKNUGJUcurQkB6NflipTmPUkBIBgSZ4AU1AefXM4DhFZ1RF3z62gNC7vN+qwrS70eeLFoCbDKWIt8UYM3mkMySbwrQhleuZfsdAdcUc+8DcUVXkEaUSvkF+wJU+Qf0BTEUBgQxzIJRAXZe1+WGMUH4teC/EUhGWCKDmzbVEIEFb0byZMFo6mfLW8uGHYVWi4M/4gk7/jGmJvtjTAAAAABJRU5ErkJggg==">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">
                                    <a href="{{route('user.ChangeMail')}}" style="color:white;"> @lang('Change Email')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1">
                                    <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr"><i data-v-636522ac=""
                                        data-v-cfc9a7fc="" class="van-icon van-icon-arrow" style="color:white;">
                                        </i></div>
                                    </a>
                                </div>
    
                               
                            </li>
                          
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico"><img data-v-636522ac=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAACUmJ6UmZ6Ump+Tl56Xl5+Qn5+Vmp+Ump+UmZ+Ump+Ump+Pl5+UmJ2Ump+Ul5+Tm5+Tmp+UmZ6TmZ+UmZ+SmZ2TmZyUmp9rdcsxAAAAF3RSTlMAYIC/QCAQ3+/foJAgcM8wQO+wUHBwUBLyPPgAAAFGSURBVEjH5VTLdsUgCFRRY8zDvFr//08bhNZ7zj1Rum1ZJCwYZ4BR9bfCxgG0kofOGEZcf2aKU1g/7wwYvQwwYPGFn0newKUM/qyUICrlB6Eoiyc7TISTMoUAY0LE3AXAXfWJCYkCEWB72cfyC0AKdx56gFhOrQsce4DlR/iakaDrQf+9sLnsWrAIYApL/35YpkgoSGQ/IE/4IL0Tjo1qpBRsVKI4+uXVqBdtWto38Ca0BDFRGy68WFzvY4MNqNJmjDjjHovOR7e7gdRoeg00TaI1ZxcIcQaCYDuUpVbjeSEuipBZYef5MwwJSQ+ssINwBQLpziJhpxYCUMG2Ob6FRPLAkUJRYN+Nc7SmW69RRayP013f2lzKpNrWxSNZl6e2XcuJPFX4sFbHPfcN6U2uIXlJ6vhZHeoRQ7h/CWQ5AI5pU/88vgBpTCU42BskqQAAAABJRU5ErkJggg==">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Phone number')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1">{{Auth::user()->phone}}</div>
                               
                            </li>
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico"><a href="{{route('user.ChangePass')}}" style="color:white;"><img data-v-636522ac=""
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAACVmp+VmJ6Ump+Tl5+Tn5+Ump+Tmp+Ump+TmZ6TmZ+Ump+Tmp6VmZ+Ump+VBBQqAAAADnRSTlMA32DvIBDA78+AoJ/Qf3/KEYwAAACxSURBVDjLYxhWQP0dEhBCkpBDlniMJPEOBRAngWDTUkId4gdMCTmIHzAl7EASD7FIKIIkjCh0VWweqqteKEDEWeTeIbsK5AQHsAQjkInsKiAQBUvogZgIV4Gol2CJvndLUS33evcMynJAlWCFcoEUWkQRIWGHLP4QSUIRWcIISQIV0EQiAFWcBSqR924LqkT0uxdget47DPAILBGIKSGAiCgEQEQUA9M5VPFnUxkGKwAA4rZAp3H3Bf8AAAAASUVORK5CYII=">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Change Password')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></a></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr"><i data-v-636522ac=""
                                    data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                    </i></div>
                           
                            </li>
                        </ul> -->

                        <ul data-v-636522ac="" data-v-cfc9a7fc="" class="list">
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('User Name')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">99999999999</div>  
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr">
                                  
                                <i data-v-636522ac=""
                                        data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                        <!----></i></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="upimg">
                                    <div data-v-636522ac="" class="van-uploader" data-v-cfc9a7fc="">
                                        <div class="van-uploader__wrapper">
                                            <div class="van-uploader__upload" style="width: 2rem; height: 2rem;"><i
                                                    class="van-icon van-icon-photograph van-uploader__upload-icon">
                                                    <!----></i><input multiple="multiple" type="file" accept="image/*"
                                                    class="van-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">
                                    <a href="{{route('user.ChangeMail')}}" style="color:white;"> @lang('Account')</div>
                                    
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1">

                                
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">+9999999999</div>  
                                        </a>
                                    </div>
                                    
    
                                <!---->
                                <!---->
                            </li>
                          
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Email')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">123@gmail.com</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr">
                                  
                                  <i data-v-636522ac=""
                                          data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                          <!----></i></div>
                                <!---->
                                <!---->
                            </li>
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Uid')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n"><span id="clipboardright">{{Auth::user()->username}}</span></div>

                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr"><img data-v-636522ac="" id="copy-button" 
                                        data-v-cfc9a7fc=""
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAn2DfgCAQ78+/sJCPUIWfNBMAAACISURBVCjPY6AekHv37vExJD7jOyB4iaLAUHDxO4VcJAUCDKzvBOwcYAoeAwUY3gkASagCU5gAzAQnFAEWoA0wAYSdDigCSkpKDCgCQIIOAgEgihUuwPTOShAIxN8pwPwy7x0YvGCACWTbgfjP3aACCMAKF1AUFISaAhUAaoCaAgX7gByIKdQBAOGIZAwmCV4kAAAAAElFTkSuQmCC">
                                    <!----></i></div>
                                <!---->
                            </li>
                        
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Phone')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">998399999</div>  
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="arr">
                                  
                                <i data-v-636522ac=""
                                        data-v-cfc9a7fc="" class="van-icon van-icon-arrow">
                                        <!----></i></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="upimg">
                                    <div data-v-636522ac="" class="van-uploader" data-v-cfc9a7fc="">
                                        <div class="van-uploader__wrapper">
                                            <div class="van-uploader__upload" style="width: 2rem; height: 2rem;"><i
                                                    class="van-icon van-icon-photograph van-uploader__upload-icon">
                                                    <!----></i><input multiple="multiple" type="file" accept="image/*"
                                                    class="van-uploader__input"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                                     
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Registration Time')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">12-05-2024</div>
                              
                                <!---->
                                <!---->
                            </li>
                            <li data-v-636522ac="" data-v-cfc9a7fc="" class="flex">
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="ico">
                                </div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">@lang('Membership Package')</div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="flex1 overflow1"></div>
                                <div data-v-636522ac="" data-v-cfc9a7fc="" class="n">Upgrade</span></div>

                                
                                <!---->
                            </li>
                      
                          
                            
                        </ul>

                      
                    </div>
                </div>
            </div>
            <!---->
        </div>

     @include('partials.notify')
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
