const blocksBaseUrl = '/haskoin-store/btc/block';

export default {
    getLatestBlockUrl: () => `${blocksBaseUrl}/best`,
    getBlocksByHeightUrl: () => `${blocksBaseUrl}/heights`,
    getBlockByHashUrl: (hash) => `${blocksBaseUrl}/${hash}`,
};
