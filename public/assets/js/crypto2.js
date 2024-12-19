$(document).ready(function () {
    const apiUrl = "https://api.binance.com/api/v3/ticker/24hr";
    const cryptoSymbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "XRPUSDT", "LTCUSDT","LINKUSDT","BCHUSDT","DOTUSDT","DOGEUSDT"]; // Add more symbols as needed


    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function (data) {
            const filteredData = data.filter(crypto => cryptoSymbols.includes(crypto.symbol));
            displayCryptoData(filteredData);
        },
        error: function (error) {
            console.error("Error fetching data: ", error);
        }
    });
    

    function displayCryptoData(data) {
        const container = $("#crypto-container");
        container.empty(); // Clear the container before adding new data
        data.forEach(crypto => {
            const changeClass = crypto.priceChangePercent >= 0 ? 'off' : 'on';
            var base_url = location.origin;
            const cryptoCard = `
              
                <tr data-v-c079ad96="" data-v-cfc9a7fc="">
                <td data-v-c079ad96="" data-v-cfc9a7fc=""
                    style="display: flex; align-items: center;"><img data-v-c079ad96=""
                        data-v-cfc9a7fc=""
                        src="${base_url}/assets/static/upload/${crypto.symbol}.png" ><span
                        data-v-c079ad96="" data-v-cfc9a7fc="" class="buyCoinName"
                        style="display: inline-block;">${crypto.symbol}<br data-v-c079ad96=""
                            data-v-cfc9a7fc=""><span data-v-c079ad96="" data-v-cfc9a7fc=""
                            class="sellCoinName"
                            style="color: rgba(255, 255, 255, 0.7);">USDT</span></span></td>
                <td data-v-c079ad96="" data-v-cfc9a7fc="">$${parseFloat(crypto.lastPrice).toFixed(2)}</td>
                <td data-v-c079ad96="" data-v-cfc9a7fc=""><var data-v-c079ad96=""
                        data-v-cfc9a7fc="" class="${changeClass}">${parseFloat(crypto.priceChangePercent).toFixed(2)}%</var></td>
            </tr>
            `;
            container.append(cryptoCard);
        });
    }
});
