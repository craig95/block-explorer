import _ from 'lodash';

import { blocksService, transactionsService } from '../../services';
import {
    setBlocks,
    setBlocksFetchError,
    setIsLoading,
    setSelectedBlock,
    setSelectedBlockFetchError,
} from './blocks.reducer';
import {
    generateArrayOfHeights,
    generateArrayOfTransactionIds,
    setMinerDetailsForBlock,
} from '../../helpers/generate-array-of-heights';

export function getLatestBlocks(numberOfBlocksToGet) {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const latestBlock = await blocksService.getLatestBlock(false);
            const latestBlockHeight = _.get(latestBlock, 'height');

            const blocks = await blocksService.getBlocksByHeight(
                generateArrayOfHeights(latestBlockHeight, numberOfBlocksToGet),
                false
            );

            const transactionIds = generateArrayOfTransactionIds(blocks);
            const coinbaseTransactions =
                await transactionsService.getTransactionsByIds(transactionIds);

            setMinerDetailsForBlock(coinbaseTransactions, blocks);

            dispatch(setBlocks(blocks));
        } catch (error) {
            dispatch(setBlocksFetchError(error.message));
        } finally {
            setIsLoading(false);
        }
    };
}

export function getBlockByHash(hash) {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const block = await blocksService.getBlockByHash(hash, true);
            const coinbaseTransactions =
                await transactionsService.getTransactionsByIds(
                    _.get(block, 'tx[0]')
                );
            const updatedBlock = _.first(
                setMinerDetailsForBlock(coinbaseTransactions, [block])
            );
            dispatch(setSelectedBlock(updatedBlock));
        } catch (error) {
            dispatch(setSelectedBlockFetchError(error.message));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
}
