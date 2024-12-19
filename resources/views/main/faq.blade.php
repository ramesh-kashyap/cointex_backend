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
                                                </svg>faq
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-8">


                                        <div class="page-soc">
                                            <p>follow us</p>
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
                                <div class="main-title__top"><span>help</span></div>
                                <div class="main-title__text">frequently asked
                                    <p>questions<span>:</span></p>
                                </div>
                            </div>
                            <div class="faq-tabs" data-tabs-btns="faq">
                                <div class="faq-tabs__item" data-tabs-btn="1"><img src="/assets/img/faq-num-1.png"
                                        alt="faq-num-1" />
                                    <div class="faq-tabs__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#faq-tabs-1"></use>
                                        </svg>
                                    </div><span>Main questions</span>
                                </div>
                                <div class="faq-tabs__item" data-tabs-btn="2"><img src="/assets/img/faq-num-2.png"
                                        alt="faq-num-2" />
                                    <div class="faq-tabs__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#faq-tabs-2"></use>
                                        </svg>
                                    </div><span>Account questions</span>
                                </div>
                                <div class="faq-tabs__item" data-tabs-btn="3"><img src="/assets/img/faq-num-3.png"
                                        alt="faq-num-3" />
                                    <div class="faq-tabs__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#faq-tabs-3"></use>
                                        </svg>
                                    </div><span>Other questions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-content" data-tabs-wrapper="faq">
                        <div class="accordion" data-tabs-item="1">
                            <div class="accordion__item active">
                                <div class="accordion__head" data-num="1">WHAT IS NEEDED TO BECOME AN INVESTOR IN ETRITON AI?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body" style="display: block;">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>To become a company investor, you need to register and create a personal
                                            account. The first step is to fill in the form. Please provide only valid
                                            information.<br><br>We will ask you to provide your login, password, and
                                            e-mail address. After successful registration, go to your personal account.
                                            Here you may specify the payment details, read about investment plans, and
                                            make a deposit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="2">WHAT PAYMENT SYSTEMS DOES THE COMPANY WORK
                                    WITH?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>A Min. and Max deposit$50 - 800$:<br>
                                            <br>
                                          
                                            BNB(BEP20)<br>
                                            Tether (ERC20)<br>
                                            Tether (TRC20) <br>
                                            <br>
                                           
                                      
                                       
                                                                             </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="3">HOW TO MAKE A DEPOSIT?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>After the personal account has been registered, you can proceed to choosing
                                            the investment plan. Compare the total profit percentage, and decide on the
                                            amount and the payment system.<br>
                                            <br>
                                            You can also use referral rewards to create a deposit from your partner’s
                                            account balance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="4">HOW LONG DOES IT TAKE FOR A DEPOSIT TO BE
                                    ACCRUED TO THE BALANCE?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>The deposit is accrued to the balance instantly and starts working
                                            immediately. If the deposit is made using the cryptocurrency, then the funds
                                            will be accrued after the network confirmation.<br>
                                            <br>
                                            If your money has not been accrued to the balance within 24 hours, contact
                                            the support team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="5">HOW THE PROFIT WITHDRAWAL WORKS?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>You can make one daily withdrawal with a minimum amount of $10, and there is a withdrawal fee of 5% <br>
                                          Your withdrawn amount will be credited instantly to your wallet <br>
                                           </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="6">WHAT ARE THE MINIMUM ALLOWABLE AMOUNTS FOR
                                    WITHDRAWAL?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>For deposits in USD, the minimum amount allowable for withdrawal is
                                          TRC20, BEP20, 10$<br>
                                            <br>
                                           
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="7">DOES THE COMPANY HAVE ANY FEES FOR A DEPOSIT
                                    AND WITHDRAWAL OF FUNDS?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>withdrawal fee of 5%.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="8">HOW FAST WILL I RECEIVE FUNDS TO MY WALLET
                                    ONCE I CREATED A WITHDRAWAL REQUEST?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Your withdrawn amount will be credited instantly to your wallet 
                                       
                                            <br>
                                            Referral bonuses are withdrawn to the wallet from which your partner
                                            deposited. Therefore, set up as many payment details as possible in your
                                            personal account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" data-tabs-item="2">
                            <div class="accordion__item active">
                                <div class="accordion__head" data-num="1">IS IT POSSIBLE TO CHANGE THE PERSONAL ACCOUNT
                                    DATA: PASSWORD, LOGIN, PAYMENT DETAILS, E-MAIL?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body" style="display: block;">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Yes, you can change the e-mail or password by yourself in the personal
                                            account settings. The wallet from which the deposit was made or a wallet to
                                            which you will get payments can be changed only via support appeal.<br>
                                            Create a request to change your wallet using any contacts specified on the
                                            website.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="2">CAN I REGISTER SEVERAL ACCOUNTS?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>A user can have only one account. Multi-accounting is prohibited. If this
                                            clause of the rules is violated, then all investor accounts will be frozen:
                                            without the possibility of recovering.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="3">IS MY ACCOUNT AVAILABLE TO ME AT ANY TIME?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Yes, the investor's personal account is available around the clock.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="4">I HAVE FORGOTTEN THE ACCOUNT PASSWORD. WHAT
                                    SHOULD I DO?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>You can recover your password by using the Password Recovery section. Type
                                            the data specified during the registration here. The new password will be
                                            sent to your e-mail.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" data-tabs-item="3">
                            <div class="accordion__item active">
                                <div class="accordion__head" data-num="1">WHAT PARTNER PROGRAM DOES THE COMPANY HAVE?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body" style="display: block;">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>The referral program consists of Direct: 8%. The Leadershiip program
                                            consists of 3 tiers: 5/3/1%. To read the detailed terms, go to our
                                            website and find the partner program section. All the necessary information
                                            is written there.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="2">CAN I GET A REFERRAL BONUS IF A PARTNER IS
                                    INVESTING FROM THE BALANCE?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Yes, for each new deposit from the balance, for your upline will credits a
                                            referral reward.<br>
                                            <br>
                                            Also, for reinvesting from the account balance, you will get 8% to your
                                            deposit amount. In your personal account, you can set up automatic
                                            reinvestment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="3">DO YOU ACCEPT FIAT MONEY FOR STAKING?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Yes, our team converts the received funds into coins for staking choosing the
                                            best offers in the market.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="4">WILL NEW EPS BE ADDED?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>Yes, for the convenience of investors, it is planned to add new electronic
                                            payment systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="5">ARE THERE ANY LIMITS ON THE NUMBER OF
                                    DEPOSITS?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>There are no restrictions. You can create deposits for each investment plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" data-num="6">I STILL HAVE SOME QUESTIONS. HOW TO CONTACT
                                    THE SUPPORT?
                                    <div class="accordion__icon">
                                        <svg>
                                            <use xlink:href="/assets/img/sprite.svg#arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="accordion__body">
                                    <div class="accordion__title">answer</div>
                                    <div class="main-text">
                                        <p>To get some advice, go to the ‘Contacts’ section of the company's website.
                                            Send your question using the feedback form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-text"> <img src="/assets/img/faq-img.png" alt="faq-img" />
                        <h3>Join us</h3>
                        <p>To become an investor in our company, first you need to register using the registration form.
                        </p>
                    </div><a class="main-btn main-btn_orange" href="{{route('register')}}">create an account </a>
                </div>
            </header>
      @include('layouts.mainsite.footer')