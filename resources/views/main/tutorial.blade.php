<!DOCTYPE html>
<html>

<head>
    <!-- Google Tag Manager -->


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
    <!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->

</head>

<body>

    <div class="copy-success">
        <svg>
            <use xlink:href="/assets/img/sprite.svg#check"></use>
        </svg>
    </div>
    <div class="wrapper">
        <div class="page-wrap page-wrap_team page-wrap_guide">
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
                                                </svg>Tutorial
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
                                            <a href="https://twitter.com/EtritonAi" target="_blank">
                                                <img src="/assets/img/tw.svg" alt="tw"
                                                    style="max-width:15px" />
                                            </a>
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
                                                <span>support Team</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-title main-title_page main-title_center">
                                <div class="main-title__top"><span>Guide</span></div>
                                <div class="main-title__text">How it
                                    <p>works<span>?</span></p>
                                </div>
                            </div>
                            <div class="main-text">
                                <p>You are now reading the text that will help you to get acquainted with the order of
                                    primary actions: without them, investing and cooperation with the Henbbo company
                                    will not be full-fledged.</p>
                                <p>Here are the step-by-step instructions. Thanks to our experts, the educational
                                    material is simple and understandable even to those users who have never been
                                    acquainted to investment online platforms before.</p>
                                <p>The information is introduced in the form of visual images and thought-out content.
                                    Everybody will understand that easily.</p>
                                <p>We hope we managed to answer all your questions.</p>
                            </div>
                            <div class="invest-tabs invest-tabs_guide" data-tabs-btns="guide">
                                <div class="invest-tabs__item" data-tabs-btn="1">
                                    <p>01</p><span>Registration</span>
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow-left"></use>
                                    </svg>
                                </div>
                                <div class="invest-tabs__item" data-tabs-btn="2">
                                    <p>02</p><span>Make a deposit</span>
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow-left"></use>
                                    </svg>
                                </div>
                                <div class="invest-tabs__item" data-tabs-btn="3">
                                    <p>03</p><span>Withdraw funds</span>
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow-left"></use>
                                    </svg>
                                </div>
                                <div class="invest-tabs__item" data-tabs-btn="4">
                                    <p>04</p><span>Referral and other</span>
                                    <svg>
                                        <use xlink:href="assets/img/sprite.svg#arrow-left"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="guide-wrap gallery" data-tabs-wrapper="guide">
                        <div class="guide-list" data-tabs-item="1">
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>01</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Go to the main page of the website to register on the Henbbo
                                                    platform. Then you need to find the "Register" button in the top
                                                    right corner and click it. The registration window will pop up.</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_1f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_1f9e3.png?v=1.1'
                                                alt='pic_1' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_2f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_2f9e3.png?v=1.1'
                                                alt='pic_2' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>02</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>You need to fill in each line on this webpage. The username should
                                                    contain only letters and digits. Be careful when you enter the data
                                                    since you will need it in the future to work with our company. Enter
                                                    only that e-mail that you have access to.</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="guide-list" data-tabs-item="2">
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>01</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>To create a deposit, you need to log into your account. After that,
                                                    click the "Open Staking" button in your account to make a deposit
                                                    from the payment system. Or you may go to the "Open Staking +1.5"
                                                    section and make an investment from the personal account's balance.
                                                    Also, the \“Staking" button can be found in the main menu as
                                                    well.<br><br>Here a page to open the deposit will appear in front of
                                                    you.</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_3f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_3f9e3.png?v=1.1'
                                                alt='pic_3' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_4f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_4f9e3.png?v=1.1'
                                                alt='pic_4' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>02</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>First, you can see the balance of your account. Then you can choose
                                                    the payment system. A bit below are the investment plans, each of
                                                    them having information about the limits of minimal and maximal
                                                    deposits. Once you have chosen the desired plan, enter the sum of
                                                    the investment in the line below. And the next step of yours is to
                                                    click the button "Create Staking".</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>03</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>If you make a deposit in cryptocurrency, then after clicking the
                                                    button, you will see the window with all the data specified.
                                                    Including the electronic wallet, too. Check all the entered data
                                                    carefully. Copy the address of the wallet if everything is correct.
                                                    Then go to your wallet and transfer the sum specified in the
                                                    application. After successful payment, return to the Henbbo page.
                                                    The status “Prepared” will change, and the deposit will appear on
                                                    your balance.</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_5f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_5f9e3.png?v=1.1'
                                                alt='pic_5' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">

                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>04</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Your deposit will be opened automatically after the Henbbo platform
                                                    receives your funds. The speed of the cryptocurrency transaction
                                                    depends on the blockchain workload. The average ETA is one minute to
                                                    several hours.<br><br>You can check your deposit in the account, in
                                                    the “Deposits” tab.</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="guide-list" data-tabs-item="3">
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>01</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>To withdraw money to your cryptocurrency wallet, click the
                                                    "Withdrawal" button in the menu of your account. This button is
                                                    located near the "Staking" button.<br><br>Also, a big “Withdrawal”
                                                    button can be found under the balance of the account.</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_6f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_6f9e3.png?v=1.1'
                                                alt='pic_6' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_7f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_7f9e3.png?v=1.1'
                                                alt='pic_7' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>02</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Check the available balance for the chosen payment system. Then you
                                                    need to pick the EPS, enter the sum that you want to withdraw and
                                                    click the "Withdrawal" button.<br><br>The funds' withdrawal is
                                                    executed manually, up to 72 hours.</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="guide-list" data-tabs-item="4">
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>01</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Each investor of the company can participate in the Referral program.
                                                    To do that, you need to go to the "Referral" tab, which is located in
                                                    the top right corner of the main page.</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_8f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_8f9e3.png?v=1.1'
                                                alt='pic_8' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">

                                <div class='col-lg-6'>
                                    <a class='news-item news-item_guide' href='/assets/img/guide/pic_9f9e3.png?v=1.1'>
                                        <div class='news-item__img'> <img src='/assets/img/guide/pic_9f9e3.png?v=1.1'
                                                alt='pic_9' />
                                            <div class='news-item__btn'>To open<img src='assets/img/news-arrow.svg'
                                                    alt='news-arrow' />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>02</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Choose the required social media to receive the bonus from Henbbo.
                                                    The company pays every investor who accomplished all the rules. You
                                                    will not receive the bonus if at least one condition has not been
                                                    met.</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="guide-item row d-flex align-items-center">
                                <div class="col-lg-6">
                                    <div class="main-title main-title_page">
                                        <div class="main-title__text">
                                            <p>Step <span>03</span></p>
                                        </div>
                                    </div>
                                    <div class="office-text-line">
                                        <div class="main-text">
                                            <p> <b>Once the task is completed, click the “Send request”
                                                    button.<br><br>Here, you will need to fill in the form: login,
                                                    e-mail and a link to the completed task. Click the "Send" button.
                                                    The bounty bonus will be credited to your account balance.</b></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            @include('layouts.mainsite.footer')
