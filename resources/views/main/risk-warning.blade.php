
        

@include('layouts.mainsite.header')
<div class="greettingsPage">
    <div class="container">
        <div class="wrapIn">
            <h2 class="cap">Инвесторам</h2>
            <span class="desr">Начните зарабатывать прямо сейчас!</span>
            <div class="clockBl">
                <span class="iconBl icon-wall-clock-11"></span>
                <span id="time"></span>
                <span id="date"></span>
            </div>
        </div>
        <div class="picture" style="background-image: url({{asset('')}}assets/c20a81c4/img/bginvest.png);"></div>
    </div>
</div>
<div class="investPage">
    <div class="textInvest">
        <div class="container">
            <div class="wrapIn">
                <span class="tit">CryptoSolex - это профессиональная инвестиционная платформа. Мы  работаем, чтобы помочь вам добиться финансового успеха. Мы  гарантируем нашим партнерам высокую доходность за счет высокоэффективного, чистого майнинга и экспоненциального роста спроса на криптовалюту.</span>
                <div class="textBlock">
                    <p>Наш бизнес полностью прозрачен. У нас опытная команда. Мы имеем все необходимые разрешения и лицензии для  инвестиционной деятельности в Великобритании, что позволяет нам  работать с партнерами по всему миру. </p>
                    <p>Мы предлагаем несколько инвестиционных решений на любой бюджет и  степень готовности к риску. Планы отличаются по уровню доходности, в зависимости от размера вклада и срока инвестирования.</p>
                </div>
                <div class="textBlock">
                    <p>Все привлеченные средства, инвестируются в открытие новых ферм, модернизацию и обслуживание оборудования, разработку новых технологий. Прибыль от майнинга, распределяется между нашими инвесторами.</p>
                    <p>Ниже представлена подробная информация о линейке наших инвестиционных планов и рекомендации по работе с платформой.<br>Присоединяйтесь к CryptoSolex! Начните зарабатывать с нами уже сегодня!</p>
                </div>
            </div>
        </div>
    </div>
    <div class="investCalc">
        <div class="grettingsMain">
            <div class="container">
                <div class="wrapIn">
                    <div class="left">
                        <div class="titleBl"><h2 class="cap">Инвестиционные <span class="colorTxt">планы</span></h2></div>
                        <div class="sliderPlans">
                                                            <div class="item">
                                    <input type="radio" name="plan" id="plan1" checked data-percent="1.6" data-term="15" data-min="50" data-max="1000">
                                    <label for="plan1">
                                        <div class="prBl">
                                            <div class="pr">1.6%</div>
                                            <span class="txt">
                                                <span class="txtDay">в день</span>
                                                15 календарных дней                                            </span>
                                        </div>
                                        <ul>
                                            <li>
                                                <span class="tit">Сумма депозита:</span>
                                                <span class="val">$50-1000</span>
                                            </li>
                                            <li>
                                                <span class="tit">Доходность:</span>
                                                <span class="val">24%</span>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                                                            <div class="item">
                                    <input type="radio" name="plan" id="plan2" data-percent="2" data-term="21" data-min="500" data-max="5000">
                                    <label for="plan2">
                                        <div class="prBl">
                                            <div class="pr">2%</div>
                                            <span class="txt">
                                                <span class="txtDay">в день</span>
                                                21 календарных дней                                            </span>
                                        </div>
                                        <ul>
                                            <li>
                                                <span class="tit">Сумма депозита:</span>
                                                <span class="val">$500-5000</span>
                                            </li>
                                            <li>
                                                <span class="tit">Доходность:</span>
                                                <span class="val">42%</span>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                                                            <div class="item">
                                    <input type="radio" name="plan" id="plan3" data-percent="2.5" data-term="28" data-min="2500" data-max="15000">
                                    <label for="plan3">
                                        <div class="prBl">
                                            <div class="pr">2.5%</div>
                                            <span class="txt">
                                                <span class="txtDay">в день</span>
                                                28 календарных дней                                            </span>
                                        </div>
                                        <ul>
                                            <li>
                                                <span class="tit">Сумма депозита:</span>
                                                <span class="val">$2500-15000</span>
                                            </li>
                                            <li>
                                                <span class="tit">Доходность:</span>
                                                <span class="val">70%</span>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                                                            <div class="item">
                                    <input type="radio" name="plan" id="plan4" data-percent="3.4" data-term="35" data-min="5000" data-max="100000">
                                    <label for="plan4">
                                        <div class="prBl">
                                            <div class="pr">3.4%</div>
                                            <span class="txt">
                                                <span class="txtDay">в день</span>
                                                35 календарных дней                                            </span>
                                        </div>
                                        <ul>
                                            <li>
                                                <span class="tit">Сумма депозита:</span>
                                                <span class="val">$5000-100000</span>
                                            </li>
                                            <li>
                                                <span class="tit">Доходность:</span>
                                                <span class="val">119%</span>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                                                    </div>
                    </div>
                    <div class="right">
                        <div class="calcBl">
                            <div class="titleBl">
                                <h2 class="cap">Рассчитайте <span class="colorTxt">свою прибыль</span></h2>
                            </div>
                            <form action="" onsubmit="return calc();">
    <div class="form">
        <div class="inputLine">
            <label for="">Сумма:</label>
            <input type="number" lang="en" step="any" name="amount" id="calc_amount" class="summ">
        </div>
        <div class="rangeBl">
            <input type="text" class="range" id="calc_range">
        </div>
        <ul class="inf">
            <li>
                <span class="iconBl icon-coins-1"></span>
                <span class="tit">Прибыль за день: </span>
                <span class="val" id="info_profit_period"></span>
            </li>
            <li>
                <span class="iconBl icon-coins-1"></span>
                <span class="tit">Всего прибыли:</span>
                <span class="val" id="info_profit_total"></span>
            </li>
        </ul>
        <button class="btn btnWhite">Инвестировать</button>
    </div>
    <input type="submit" id="calc_btn" style="display: none;">
</form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="startProfit">
        <div class="container">
            <div class="wrapIn">
                <div class="titleBl">
                    <h2 class="cap">Как начать зарабатывать <span class="colorTxt">прямо сейчас</span> </h2>
                </div>
                <div class="list">
                    <div class="item">
                                <span class="numer">
                                    <span class="num"><span class="zero">0</span>1</span>
                                </span>
                        <span class="name">Зарегистрируйтесь
                                    на сайте</span>
                        <span class="txt">Получите доступ к нашей платформе.</span>
                    </div>
                    <div class="item">
                                <span class="numer">
                                    <span class="num"><span class="zero">0</span>2</span>
                                </span>
                        <span class="name">Выберите план инвестирования</span>
                        <span class="txt">Подберите сбалансированный тариф и сделайте вклад.</span>
                    </div>
                    <div class="item">
                                <span class="numer">
                                    <span class="num"><span class="zero">0</span>3</span>
                                </span>
                        <span class="name">Получайте доход</span>
                        <span class="txt">Компания начисляет до 3,4% прибыли на баланс ежедневно.</span>
                    </div>
                    <div class="item">
                                <span class="numer">
                                    <span class="num"><span class="zero">0</span>4</span>
                                </span>
                        <span class="name">Выводите прибыль</span>
                        <span class="txt">Заказывайте вывод средств и получайте быстрые выплаты. </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('layouts.mainsite.footer')