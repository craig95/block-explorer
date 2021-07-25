import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import useRecursiveTimeout from '../../../hooks/useRecursiveTimeout';
import {
    BitcoinCashIcon,
    BitcoinIcon,
    EthereumIcon,
} from '../../../common-components/crypto-icons';
import { getTickerValuesForCurrencies } from '../../../reducers/ticker-reducer/ticker.actions';

const currencies = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        Icon: BitcoinIcon,
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        Icon: EthereumIcon,
    },
    {
        name: 'Bitcoin Cash',
        symbol: 'BCH',
        Icon: BitcoinCashIcon,
    },
];
const defaultFiatCurrencyIsoSymbol = 'USD';
const defaultFiatCurrencySymbol = '$';

const TickerItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0.6rem 0 0.6rem 0;

    @media screen and (max-width: 992px) {
        flex-direction: row;
    }
`;

const TickerItemInfoWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 0.6rem;
`;

const TickerItemTitle = styled.p`
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
`;

const TickerItemValue = styled.p`
    margin: 0;
    font-size: 0.9rem;
`;

const TickerWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 992px) {
        flex-direction: row;
        justify-content: space-around;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

const TickerItem = ({ name, Icon, values }) => (
    <TickerItemWrapper>
        <Icon />
        <TickerItemInfoWrapper>
            <TickerItemTitle>{name}</TickerItemTitle>
            <TickerItemValue>
                {defaultFiatCurrencySymbol}{' '}
                {_.get(values, `${defaultFiatCurrencyIsoSymbol}.15m`)}
            </TickerItemValue>
        </TickerItemInfoWrapper>
    </TickerItemWrapper>
);

TickerItem.propTypes = {
    name: PropTypes.string.isRequired,
    Icon: PropTypes.node.isRequired,
    values: PropTypes.shape({}).isRequired,
};

const Ticker = () => {
    const dispatch = useDispatch();
    const { tickerValues } = useSelector((state) => state.tickerReducer);

    const currencySymbols = useMemo(
        () => _.map(currencies, (currency) => currency.symbol),
        []
    );

    useRecursiveTimeout(
        async () => dispatch(getTickerValuesForCurrencies(currencySymbols)),
        60000
    );

    return (
        <TickerWrapper>
            {_.map(currencies, ({ name, symbol, Icon }) => (
                <TickerItem
                    name={name}
                    symbol={symbol}
                    Icon={Icon}
                    values={_.get(tickerValues, symbol)}
                />
            ))}
        </TickerWrapper>
    );
};

export default Ticker;
