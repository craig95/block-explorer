import networkService from '../netowrk-service/network.service';
import tickerUrls from './ticker-service-urls';

function getTickerForCurrency(currencySymbol) {
    const url = tickerUrls.getTickerForCurrencyUrl();
    const config = { params: { base: currencySymbol } };
    return networkService.makeGet(url, config);
}

export default {
    getTickerForCurrency,
};
