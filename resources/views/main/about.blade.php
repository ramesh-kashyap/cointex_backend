<!DOCTYPE html>
<html>

<head>
    <!-- Google Tag Manager -->

    <!-- End Google Tag Manager -->
    <meta charset="utf-8">
    <title>{{siteName()}}</title>
    <base />
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-iconf9e3.png?v=1.1">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32f9e3.png?v=1.1">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16f9e3.png?v=1.1">
    <link rel="manifest" href="/favicons/site.webmanifest?v=1.1">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=1.0" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">

    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <link rel="stylesheet" href="{{ asset('') }}assets/css/libs.css">
    <link rel="stylesheet" href="{{ asset('') }}assets/css/app54f9.css?v=1.009995">
    <link rel="stylesheet" href="{{ asset('') }}assets/css/customb361.css?v=1.000099999">

</head>

<body>


    <div class="copy-success">
        <svg>
            <use xlink:href="/assets/img/sprite.svg#check"></use>
        </svg>
    </div>
    <div class="wrapper">
        <div class="page-wrap page-wrap_about">
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
                                                </svg>about
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
                                            <!--<a href="#"-->
                                            <!--    target="_blank">-->
                                            <!--    <img src="/assets/img/fb.svg" alt="fb"-->
                                            <!--        style="max-width:15px" />-->
                                            <!--</a>-->
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
                                                <span>Telegram Chat Group</span>
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
                                <div class="main-title__top"><img style="    width: 64px;" src="/assets/img/Clogo.png"
                                        alt="logo-icon" /><span></span>
                                </div>
                                <div class="main-title__text">About our
                                    <p>company<span>:</span></p>
                                </div>
                            </div>
                            <div class="main-text">
                                <p> <b> Founded in 2023, we are a {{siteName()}} company aimed at revolutionizing the world through decentralizing financial technology and providing access to the best market tools for everyone across the globe. Our team works tirelessly to provide the technology, resources, and support for every trader that needs to make confident trading decisions.

</b>
                                </p>
                                <p>Our interaction with investors is based on the use of popular payment systems, ensuring the execution of any payment transactions. Earning passive income is very simple: create a personal account on the Trustees platform, choose a suitable tariff plan, and start your deposit, which will generate profit every day.</p>
                                
                                <p>Our team comprises experienced traders and developers who work tirelessly to ensure that our platform is always up-to-date with the latest market trends and technology. We believe in transparency and strive to maintain a high level of customer support, ensuring that our users have access to the information they need to make informed decisions. Join our platform today and start profiting from the ever-changing market!.</p>
                                <p> <span>In addition, these types of business activity are as much protected from
                                        possible risks as possible, since using a smart contract, launchpad websites
                                        initiate an airdrop option, the main feature of which is the fact that this
                                        guarantees the elimination of any fraud risks and, in addition, invested money
                                        can be return if the startup for some reason did not realized itself to the
                                        extent it declared.</span></p>
                            </div>
                        </div>
                    </div>
                    <!--<div class="row">-->
                    <!--    <div class="col-lg-3 col-md-6">-->
                    <!--        <div class="about-page-box-1">-->
                    <!--            <div class="main-text">-->
                    <!--                <h4> <span>What do you know </span>about launchpad platforms?</h4>-->
                    <!--                <p style="font-size: 14px;">We are talking about decentralized websites that-->
                    <!--                    attract capital for novice cryptocurrency projects. This is crowdsale, which is-->
                    <!--                    run by the exchange and its liquidity pool, trading pairs.</p>-->
                    <!--                <p style="font-size: 14px;">Such platforms gives an opportunity to buy and sell-->
                    <!--                    "young" cryptocurrencies.</p>-->
                    <!--            </div>-->
                    <!--            <a class="main-btn main-btn_orange main-btn_sm" href="/sign_up">Join us</a>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--    <div class="col-lg-3 col-md-6">-->
                    <!--        <div class="about-page-info"-->
                    <!--            style="margin-bottom: 20px;padding-left: 45px;padding-right: 40px;"> <img-->
                    <!--                src="/assets/img/about-page-icon-1.svg" alt="about-page-icon-1" />-->
                    <!--            <h3>The holding development</h3>-->
                    <!--            <p>In 2022, in the UAE, the company took a decisive step towards the development of-->
                    <!--                {{siteName()}}.</p>-->
                    <!--        </div>-->
                    <!--        <div class="about-page-info"-->
                    <!--            style="margin-bottom: 20px;padding-left: 45px;padding-right: 40px;"> <img-->
                    <!--                src="/assets/img/about-page-icon-2.svg" alt="about-page-icon-2" />-->
                    <!--            <h3>New vector of cooperation</h3>-->
                    <!--            <p>The holding decided to reorganize certain business directions. The idea of ​ ​-->
                    <!--                working with ordinary investors around the world by using an online platform.</p>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--    <div class="col-lg-3 offset-lg-3 col-md-6">-->
                    <!--        <div class="about-page-box-2">-->
                    <!--            <div class="main-text">-->
                    <!--                <p> <i>British holding {{siteName()}}, led by ideological mastermind and founder,-->
                    <!--                        Mr. Simon Russel, has taken as its business the trading operations on the-->
                    <!--                        world's largest launchpad platforms, such as:</i></p>-->
                    <!--            </div>-->
                    <!--            <div class="about-page-info-2">-->
                    <!--                <p>CoinList</p>-->
                    <!--                <p>Polkastarter</p>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--</div>-->
                    <!--<div class="row">-->
                    <!--    <div class="col-lg-9">-->
                    <!--        <div class="about-page-stat">-->
                    <!--            <div class="header-stat">-->
                    <!--                <div class="header-stat__item"> <span>4.218<img-->
                    <!--                            src="/assets/img/header-stat-arrow.svg"-->
                    <!--                            alt="header-stat-arrow" /></span>-->
                    <!--                    <p>Stakeholders<br>total</p>-->
                    <!--                </div>-->
                    <!--                <div class="header-stat__item"> <span>72<img-->
                    <!--                            src="/assets/img/header-stat-arrow.svg"-->
                    <!--                            alt="header-stat-arrow" /></span>-->
                    <!--                    <p>Invested<br>startups</p>-->
                    <!--                </div>-->
                    <!--                <div class="header-stat__item"> <span>621.355.000<img-->
                    <!--                            src="/assets/img/header-stat-arrow.svg"-->
                    <!--                            alt="header-stat-arrow" /></span>-->
                    <!--                    <p>Company's<br>investments amount</p>-->
                    <!--                </div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--        <div class="wallets wallets_about">-->
                    <!--            <div class="wallets-slider">-->
                    <!--                <div class="swiper-button-prev">-->
                    <!--                    <svg>-->
                    <!--                        <use xlink:href="/assets/img/sprite.svg#arrow"></use>-->
                    <!--                    </svg>-->
                    <!--                </div>-->
                    <!--                <div class="swiper-button-next">-->
                    <!--                    <svg>-->
                    <!--                        <use xlink:href="/assets/img/sprite.svg#arrow"></use>-->
                    <!--                    </svg>-->
                    <!--                </div>-->
                    <!--                <div class="swiper">-->
                    <!--                    <div class="swiper-wrapper">-->

                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/btc-logo.svg"-->
                    <!--                                    alt="btc-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/bch-logo.svg"-->
                    <!--                                    alt="bch-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/eth-logo.svg"-->
                    <!--                                    alt="eth-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/xrp-logo.svg"-->
                    <!--                                    alt="xrp-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/ltc-logo.svg"-->
                    <!--                                    alt="ltc-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/dash-logo.svg"-->
                    <!--                                    alt="dash-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/doge-logo.svg"-->
                    <!--                                    alt="doge-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/trx-logo.svg"-->
                    <!--                                    alt="trx-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/usdt-logo.svg"-->
                    <!--                                    alt="usdt-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/bnb-logo.svg"-->
                    <!--                                    alt="bnb-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/nix-logo.svg"-->
                    <!--                                    alt="nix-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/advance-logo.svg"-->
                    <!--                                    alt="advance-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/pa-logo.svg"-->
                    <!--                                    alt="pa-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/epc-logo.svg"-->
                    <!--                                    alt="epc-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/atom-logo.svg"-->
                    <!--                                    alt="atom-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/coin98-logo.svg"-->
                    <!--                                    alt="coin98-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/ada-logo.svg"-->
                    <!--                                    alt="ada-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/matic-logo.svg"-->
                    <!--                                    alt="matic-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/dot-logo.svg"-->
                    <!--                                    alt="dot-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/dai-logo.svg"-->
                    <!--                                    alt="dai-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/avax-logo.svg"-->
                    <!--                                    alt="avax-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/link-logo.svg"-->
                    <!--                                    alt="link-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/near-logo.svg"-->
                    <!--                                    alt="near-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/trw-logo.svg"-->
                    <!--                                    alt="trw-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/usdt-logo.svg"-->
                    <!--                                    alt="usdt-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/busd-logo.svg"-->
                    <!--                                    alt="busd-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/usdc-logo.svg"-->
                    <!--                                    alt="usdc-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/btt-logo.svg"-->
                    <!--                                    alt="btt-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/dao-logo.svg"-->
                    <!--                                    alt="dao-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/sol-logo.svg"-->
                    <!--                                    alt="sol-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="swiper-slide">-->
                    <!--                            <div class="wallets-item"> <img src="/assets/img/usdc-logo.svg"-->
                    <!--                                    alt="usdc-logo" />-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                </div>-->
                    <!--            </div>-->
                    <!--        </div>-->
                    <!--    </div>-->
                    <!--</div>-->
                    <div class="main-title main-title_right">
                        <div class="main-title__num"> <span>02</span></div>
                        <div class="main-title__top"><span>registration</span></div>
                        <div class="main-title__text">certificate
                            <p>Etriton<span>:</span></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="about-page-quote"> <img src="/assets/img/quote-1.svg" alt="quote-1" />
                                <p style="font-size: 20px;">If you look at our last 15 solutions, you will see quite
                                    mediocre achievements. There was no hyperactivity, but a sea of ​ ​ patience becomes
                                    visible. You should stick to your principles and capabilities, and when there is a
                                    chance, try to make it to the fullest.</p>
                                <h3>Charlie Munger, <span>lawyer, economist and professional investor</span></h3>
                                <i>Wealth over $1.3 billion.</i>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="about-page-title">Profit from cryptostaking</div>
                                    <div class="main-text main-text_about">
                                        <p> <b> <img src="/assets/img/about-text-icon.svg" alt="about-text-icon" />Our
                                                business relies not only on the purchase of young cryptocurrencies and
                                                tokens.</b></p>
                                        <p>Also, we take into staking both the already proven main altcoins and young
                                            cryptocurrencies.</p>
                                        <p>This is necessary to diversify of the funds invested.</p>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="about-page-num"> <img style="    width: 130px;" src="/assets/img/Clogo.png?v=1.0"
                                            alt="about-page-logo" />
                                        <p>company number:</p><span>765767</span>
                                    </div>
                                    <div class="main-text">
                                        <h4> <span>Business </span>legality</h4>
                                        <p>The company's activities have always met the necessary legal requirements.

                                            We are always open to loyal interaction and dialogue with our partners and
                                            investors.
                                            The legality of the company's activity is confirmed by a certificate: </p>
                                    </div><a class="main-btn main-btn_m main-btn_gray"
                                        href="#"
                                        target="_blank">check </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="about-cert">
                                <div class="about-cert__img"> 
                                </div>
                                <div class="about-cert__title">
                                    <svg>
                                        <use xlink:href="/assets/img/sprite.svg#planet"></use>
                                    </svg>address
                                </div>
                                <p>Half Mile House, Little Chesterton, Bicester, England, OX25 3PD</p>
                                <!--<a class="about-cert__view popup-img"-->
                                <!--    href="/assets/img/henbbo_certificate.png"><span>view certificate</span>-->
                                    <svg>
                                        <use xlink:href="/assets/img/sprite.svg#zoom"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="page-stat">
                        <div class="main-title" data-text="statistics">
                            <div class="main-title__num"><span>03</span></div>
                            <div class="main-title__top"><span>Numbers</span></div>
                            <div class="main-title__text">Statistics
                                <p>Etriton<span>:</span></p>
                            </div>
                        </div>
                        <div class="stat-total">
                            <div class="stat-total__box"> <img src="/assets/img/stat-total.svg" alt="stat-total" />
                                <h3>poll of staking:</h3>
                                <p>{{number_format(generalDetail()->total_fund_invested,2)}}<sup>usd</sup></p>
                            </div>
                        </div>
                        <div class="stat-list">
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-1.svg"
                                    alt="stat-icon-1" /><span>{{currency()}}{{number_format(generalDetail()->total_fund_invested,2)}}</span>
                                <p>Total funds invested</p>
                            </div>
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-2.svg"
                                    alt="stat-icon-2" /><span>{{currency()}}{{number_format(generalDetail()->paid_withdrawal,2)}}</span>
                                <p>Paid</p>
                                <div style="display: none;">16</div>
                            </div>

                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-3.svg"
                                    alt="stat-icon-3" /><span>{{generalDetail()->people_online}}</span>
                                <p>People online</p>
                            </div>
                            <div class="stat-list__item"> <img src="/assets/img/stat-icon-4.svg"
                                    alt="stat-icon-4" /><span>{{generalDetail()->our_investors}}</span>
                                <p>our investors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          

            @include('layouts.mainsite.footer')