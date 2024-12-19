<!DOCTYPE html>
<html>

<head>

    <!-- End Google Tag Manager -->
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
    <base href="{{asset('')}}" /> 
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-iconf9e3.png?v=1.1">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32f9e3.png?v=1.1">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16f9e3.png?v=1.1">
    <link rel="manifest" href="/favicons/site.webmanifest?v=1.1">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=1.0" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">

    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="x-ua-compatible">

    <link rel="stylesheet" href="{{asset('')}}assets/css/libs.css">
    <link rel="stylesheet" href="{{asset('')}}assets/css/app54f9.css?v=1.009995">
    <link rel="stylesheet" href="{{asset('')}}assets/css/customb361.css?v=1.000099999">


</head>

<body>

    <div class="copy-success">
        <svg>
            <use xlink:href="/assets/img/sprite.svg#check"></use>
        </svg>
    </div>
    <div class="wrapper">
        <div class="page-wrap page-wrap_team">
            <header class="header header_page">
                <div class="header-top">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <div class="col-lg-3 col-md-5 col-7"><a class="header-logo" href="/"><img style="width: 168px;
                                height: 94px; margin-top: -14px;" src="/assets/img/Clogo.png?v=1.0" alt="logo" /></a></div>
                            <div class="col-lg-9 col-md-7 col-5">
                                <div class="header-nav">
                                    <style>
                                        .header-lang__hide table td div {
                                            background: rgb(194 149 109);
                                            margin: 0 5px;
                                        }

                                        .header-lang__hide table td.inactive div {
                                            padding: 2px 10px;
                                        }

                                        .header-lang__hide table td.empty {
                                            background: none;
                                        }

                                        .header-lang__hide table a {
                                            color: #ffffff;
                                            text-decoration: none;
                                            transition: none;
                                            padding: 2px 10px;
                                        }

                                        .header-lang__hide table td div.active,
                                        .header-lang__hide table td div:hover {
                                            background: #ffffff;
                                            color: #000;
                                        }

                                        .header-lang__hide table td div.active a,
                                        .header-lang__hide table td div:hover a {
                                            color: #000;
                                            opacity: 1;
                                        }

                                        .header-lang:hover .header-lang__hide table td.inactive {
                                            opacity: 0.4;
                                            pointer-events: none !important;
                                            cursor: default;
                                        }

                                        .header-lang__hide table td.inactive div:hover {
                                            background: rgb(194 149 109);
                                            color: #ffffff;
                                        }
                                    </style>
                                    <div class="header-lang">
                                        <div class="header-lang__arrow">
                                            <svg>
                                                <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                            </svg>
                                        </div>
                                        <div class="header-lang__text">
                                            English
                                        </div>
                                        <div class="header-lang__hide">
                                           
                                        </div>
                                    </div>


                                    <div class="header-btns">
                                        <a class="main-btn main-btn_line" href="{{route('login')}}">
                                            <img src="{{asset('')}}assets/img/btn-loginc619.svg?v=1.0" alt="btn-login" />login
                                        </a>
                                        <a class="main-btn" href="{{route('register')}}">
                                            <img src="{{asset('')}}assets/img/btn-signc619.svg?v=1.0" alt="btn-sign" />register
                                        </a>
                                    </div>
                                    <div class="header-burger"> <span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                          @include('layouts.mainsite.header')
                        </div>
                        <div class="col-lg-9">
                            <div class="page-head">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-4">
                                        <div class="page-bread"> <a href="/">
                                                <svg>
                                                    <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                                </svg>home</a>
                                            <a href="#">
                                                <svg>
                                                    <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                                </svg>team
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">


                                        <div class="page-soc">
                                            <p>follow us</p>
                                            <!--<a href="#" target="_blank">-->
                                            <!--    <img src="/assets/img/inst.svg" alt="inst"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <a href="https://www.facebook.com/EtritonAi"
                                                target="_blank">
                                                <img src="/assets/img/fb.svg" alt="fb"
                                                    style="max-width:15px" />
                                            </a>
                                            <!--<a href="#" target="_blank">-->
                                            <!--    <img src="/assets/img/tw.svg" alt="tw"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <!--<a href="#" target="_blank">-->
                                            <!--    <img src="/assets/img/medium.svg" alt="medium"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <!--<a href="#"-->
                                            <!--    target="_blank">-->
                                            <!--    <img src="/assets/img/yt.svg" alt="yt"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <!--<a href="#" target="_blank">-->
                                            <!--    <img src="/assets/img/ad.svg" alt="ad"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <!--<a href="#" target="_blank">-->
                                            <!--    <img src="/assets/img/dis.svg" alt="dis"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
                                            <a href="https://t.me/EtritonAI" target="_blank">
                                                <img src="/assets/img/tg.svg" alt="tg" />
                                                <span>channel</span>
                                            </a>
                                            
                                            <a href="https://t.me/+52BJTYpOc5VjOTYx" target="_blank">
                                                <img src="/assets/img/tg.svg" alt="tg" />
                                                <span>Telegram Chat group</span>
                                            </a>
                                            <a href="https://t.me/Jackjo_AI" target="_blank">
                                                <img src="/assets/img/tg.svg" alt="tg" />
                                                <span>support</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-title main-title_page main-title_center">
                                <div class="main-title__top"><span>leaders</span></div>
                                <div class="main-title__text">Our
                                    <p>team<span>:</span></p>
                                </div>
                            </div>
                            <div class="team-item">
                                <div class="team-item__img"> <img src="/assets/img/team-1.png" alt="team-1" />
                                </div>
                                <div class="team-item__head">
                                    <h3>Everest Cantu</h3>
                                    <p>
                                        Ceo Of Etriton Company</p>
                                </div>
                                <p>She was studying at the National University of Singapore on the graphic designing
                                    faculti. After studying, she worked at the American Domain Studios. The design of
                                    the our products interfaces is precisely her creation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-list">
                        <div class="team-item">
                            <div class="team-item__img"> <img src="/assets/img/team-2.png" alt="team-2" />
                            </div>
                            <div class="team-item__head">
                                <h3>Olivia Wilson</h3>
                                <p>Software Developer Of Etriton Company
                                </p>
                            </div>
                            <p>After graduating from MIT, he worked in one of the largest data centers in the United
                                State, SuperNAP. In our company, it is he who supports a multi-user computing
                                environment and provides the ongoing optimal operating process of all IT services and
                                support.</p>
                        </div>
                        <div class="team-item">
                            <div class="team-item__img"> <img src="/assets/img/team-3.png" alt="team-3" />
                            </div>
                            <div class="team-item__head">
                                <h3>Drew Holloway</h3>
                                <p>General Manager Of Etriton Company</p>
                            </div>
                            <p>A graduate of Yale University, he worked for companies such as JPMorgan and Bank of
                                America. Over the past few years, he has already launched several successful startups in
                                the financial and cryptocurrency areas.</p>
                        </div>
                        <div class="team-item">
                            <div class="team-item__img"> <img src="/assets/img/team-1.png" alt="team-4" />
                            </div>
                            <div class="team-item__head">
                                <h3>Everest Cantu                         </h3>
                                <p>Ceo Of Etriton Company</p>
                            </div>
                            <p>She graduated from UCLA and worked for a number of companies, including Adidas and
                                Cynexis Media, as a specialist on digital products releasing. In many ways, thanks to
                                her work, you see our service as it is.</p>
                        </div>
                     
                    </div>
                </div>
            </header>
       @include('layouts.mainsite.footer')