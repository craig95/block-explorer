import _ from 'lodash';

import networkService from '../netowrk-service/network.service';
import blocksUrls from './blocks-service-urls';

function getLatestBlock(includeTransactions) {
    const url = blocksUrls.getLatestBlockUrl();
    const config = {
        baseURL: 'https://api.blockchain.info/',
        params: {
            notx: !includeTransactions,
        },
    };
    return networkService.makeGet(url, config);
}

function getBlocksByHeight(heights, includeTransactions) {
    const url = blocksUrls.getBlocksByHeightUrl();
    const config = {
        baseURL: 'https://api.blockchain.info/',
        params: {
            heights: _.toString(heights),
            notx: !includeTransactions,
        },
    };
    return networkService.makeGet(url, config);
}

function getBlockByHash(hash, includeTransactions) {
    const url = blocksUrls.getBlockByHashUrl(hash);
    const config = {
        baseURL: 'https://api.blockchain.info/',
        params: {
            notx: !includeTransactions,
        },
    };
    return networkService.makeGet(url, config);
}

export default {
    getLatestBlock,
    getBlocksByHeight,
    getBlockByHash,
};
