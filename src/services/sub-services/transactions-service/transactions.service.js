import _ from 'lodash';

import networkService from '../netowrk-service/network.service';
import transactionsUrls from './transactions-service-urls';

function getTransactionsByIds(transactionIds) {
    const url = transactionsUrls.getTransactionsByIdsUrl();
    const config = {
        baseURL: 'https://api.blockchain.info/',
        params: {
            txids: _.toString(transactionIds),
        },
    };
    return networkService.makeGet(url, config);
}

export default {
    getTransactionsByIds,
};
