import _ from 'lodash';

import { tickerService } from '../../services';
import { setFetchError, setIsLoading, setTickerValues } from './ticker.reducer';

// eslint-disable-next-line import/prefer-default-export
export function getTickerValuesForCurrencies(currencies) {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const tickerValues = {};
            await Promise.all(
                _.map(currencies, async (currency) => {
                    const ticker = await tickerService.getTickerForCurrency(
                        currency
                    );
                    _.set(tickerValues, currency, ticker);
                })
            );
            dispatch(setTickerValues(tickerValues));
        } catch (error) {
            dispatch(setFetchError(error.message));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
}
