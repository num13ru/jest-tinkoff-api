import { resolve } from 'path';
import OpenAPI, { MarketInstrument } from '@tinkoff/invest-openapi-js-sdk';
import { SANDBOX_API_URL, SOCKET_URL } from './config';

import { config } from 'dotenv';

config();

const { OPEN_API_SANDBOX_TOKEN } = process.env;

const api = new OpenAPI({
    apiURL: SANDBOX_API_URL,
    secretToken: OPEN_API_SANDBOX_TOKEN!,
    socketURL: SOCKET_URL
});

!(async function run() {
    await api.sandboxClear();

    const marketInstrument = await api.searchOne({ ticker: 'AAPL' }) as MarketInstrument;
    const { figi } = marketInstrument;
    console.log(await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 })); // 1000$ на счет
    console.log(await api.portfolioCurrencies());
    console.log(await api.instrumentPortfolio({ figi })); // В портфеле ничего нет
    console.log(await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 })); // Покупаем AAPL
    console.log(await api.instrumentPortfolio({ figi })); // Сделка прошла моментально
    console.log(await api.orderbookGet({ figi })); // получаем стакан по AAPL

    console.log(
        await api.candlesGet({
            from: '2019-08-19T18:38:33.131642+03:00',
            to: '2019-08-19T18:48:33.131642+03:00',
            figi,
            interval: '1min',
        }) // Получаем свечи за конкретный промежуток времени.
    );

    api.orderbook({ figi, depth: 10 }, (x) => {
        console.log(x.bids);
    });
    api.candle({ figi }, (x) => {
        console.log(x.h);
    });
})();
