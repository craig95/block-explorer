import _ from 'lodash';

const MINER_DISPLAY_NAMES = {
    '12dRugNcdxK39288NjcDV4GX7rMsKCGn6B': 'AntPool',
    bc1qx9t2l3pyny2spqpqlye8svce70nppwtaxwdrp4: 'Binance Pool',
    '17HzvxMhoke5K3oavLzPGkLy4zd35KjWEb': 'Poolin',
    '1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY': 'F2Pool',
    '18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX': 'ViaBTC',
    '1Bf9sZvBHPFGVPX71WX2njhd1NXKv5y7v5': 'BTC.com',
    '19dENFt4wVwos6xtgwStA6n8bbA57WCS58': 'Foundry USA',
    '1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE': 'SlushPool',
    '35y82tEPDa2wm6tzkEacMG8GPPW7zbMj83': 'Rawpool',
    bc1qppsntrhcfe8m48dszxzjq9tfdd4ccpua0hqej2: 'SBI Crypto',
    '3DPNFXGoe8QGiEXEApQ3QtHb8wM15VCQU3': 'OKExPool',
    '1BDbsWi3Mrcjp1wdop3PWFNCNZtu4R7Hjy': 'EMCDPool',
    '1EepjXgvWUoRyNvuLSAxjiqZ1QqKGDANLW': 'Huobi.pool',
    '16JHXJ7M2MubWNX9grnqbjUqJ5PHwcCWw2': 'OKKONG',
    '3D72db1KMCnj7FL7MBsmxTw81z2bVu4UN5': 'MARA Pool',
    '12cKiMNhCtBhZRUBCnYXo8A4WQzMUtYjmR': 'sigmapool.com',
    '12dHcSW5MzgBeoPqt6HyVcAMBVbTd3Vfrm': '1THash',
    '125m2H43pwKpSZjLhMQHneuTwTJN5qRyYu': 'SpiderPool',
    default: 'Unknown',
};

function generateArrayOfHeights(startingHeight, size) {
    return _.map(new Array(size), (value, index) => startingHeight - index);
}

function generateArrayOfTransactionIds(blocks) {
    return _.map(blocks, (block) => _.get(block, 'tx[0]'));
}

function getMinerDisplayName(minerAddress) {
    return MINER_DISPLAY_NAMES[minerAddress] || MINER_DISPLAY_NAMES.default;
}

function setMinerDetailsForBlock(coinbaseTransactions, blocks) {
    _.forEach(coinbaseTransactions, (transaction) => {
        const block = _.find(blocks, {
            height: _.get(transaction, 'block.height'),
        });
        const minerAddress = _.get(transaction, 'outputs[0].address', 0);

        block.minerAddress = minerAddress;
        block.minerName = getMinerDisplayName(minerAddress);
    });

    return blocks;
}

export {
    generateArrayOfHeights,
    generateArrayOfTransactionIds,
    setMinerDetailsForBlock,
};
