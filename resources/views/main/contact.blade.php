<!DOCTYPE html>
<html>

<head>
    <!-- Google Tag Manager -->


    <!-- End Google Tag Manager -->
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
    <base href="{{asset('')}}" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=1.1">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=1.1">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=1.1">
    <link rel="manifest" href="/favicons/site.webmanifest?v=1.1">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=1.0" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">

    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="x-ua-compatible">

   
    <link rel="stylesheet" href="{{asset('')}}assets/css/libs.css">
    <link rel="stylesheet" href="{{asset('')}}assets/css/app54f9.css?v=1.009995">
    <link rel="stylesheet" href="{{asset('')}}assets/css/customb361.css?v=1.000099999">
    <!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->

</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTC48LN4" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div class="copy-success">
        <svg>
            <use xlink:href="/assets/img/sprite.svg#check"></use>
        </svg>
    </div>
    <div class="wrapper">
        <div class="page-wrap page-wrap_news">
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
                        <div class="col-lg-3 order-2 order-lg-1">
                        @include('layouts.mainsite.header')
                        </div>
                        <div class="col-lg-9 order-1 order-lg-2">
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
                                                </svg>contacts
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">


                                        <div class="page-soc">
                                            <p>follow us</p>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/inst.svg" alt="inst"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#"
                                                target="_blank">
                                                <img src="/assets/img/fb.svg" alt="fb"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/tw.svg" alt="tw"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/medium.svg" alt="medium"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#"
                                                target="_blank">
                                                <img src="/assets/img/yt.svg" alt="yt"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/ad.svg" alt="ad"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/dis.svg" alt="dis"
                                                    style="max-width:15px" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/tg.svg" alt="tg" />
                                                <span>channel</span>
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/assets/img/tg.svg" alt="tg" />
                                                <span>support</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__top"><span>support</span></div>
                                        <div class="main-title__text">contact
                                            <p>us<span>:</span></p>
                                        </div>
                                    </div>
                                    <div class="main-text">
                                        <p>Please read the registration details, our contacts and other information in
                                            this section of the company's website.</p>
                                    </div>
                                    <div class="contacts-links">
                                        <div class="contacts-links__item">
                                            <h3>offices</h3><a href="https://goo.gl/maps/bfMuhV1PPfZoZGrv9"
                                                target="_blank">32 London Bridge St, London SE1 9SG, United Kingdom -
                                                The Shard</a><a href="https://goo.gl/maps/GCdCSsQ7E4RUTWLT8"
                                                target="_blank">57JC+F3G - Business Bay - Dubai - United Arab Emirates
                                                - Balhab Tower</a>
                                        </div>
                                        <div class="contacts-links__item">
                                            <h3>email</h3><a
                                                href="mailto:support@etriton.co">support@etriton.co</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <form class="contacts-form" action="contacts" name="message/support_frm"
                                        method="post">
                                        <div class="contacts-form__head"> <img src="/assets/img/contacts-form-img.png"
                                                alt="contacts-form-img" />Ask support about your question
                                        </div>
                                        <div class="contacts-form__inputs">

                                            <label class="contacts-form__input">
                                                <input type="email" name="Mail"
                                                    value="" placeholder="Your email">
                                            </label>
                                            <label class="contacts-form__input">
                                                <input type="text" name="Topic" value=""
                                                    placeholder="Topic">
                                            </label>
                                            <label class="contacts-form__input">
                                                <textarea name="Message" placeholder="message"></textarea>
                                            </label>
                                            <input name="__Cert" value="2944f941" type="hidden">
                                            <style>
                                                .contacts-form__input_icon img {
                                                    position: absolute;
                                                    top: 50%;
                                                    right: 70px;
                                                    -webkit-transform: translate(50%, -50%);
                                                    -moz-transform: translate(50%, -50%);
                                                    -ms-transform: translate(50%, -50%);
                                                    transform: translate(50%, -50%);
                                                }
                                            </style>
                                        </div>

                                        <button name="message/support_frm_btn" class="main-btn main-btn_gray"
                                            type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        @include('layouts.mainsite.footer')