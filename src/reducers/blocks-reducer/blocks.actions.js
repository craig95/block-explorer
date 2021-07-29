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
    getErrorMessage,
} from '../../helpers';

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

            dispatch(setBlocksFetchError(null));
            dispatch(setBlocks(blocks));
        } catch (error) {
            dispatch(
                setBlocksFetchError(
                    `An error occurred while loading the blocks. ${_.get(
                        error,
                        'response.data.message',
                        'Unknown Error'
                    )}`
                )
            );
        } finally {
            dispatch(setIsLoading(false));
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

            dispatch(setBlocksFetchError(null));
            dispatch(setSelectedBlock(updatedBlock));
        } catch (error) {
            dispatch(setSelectedBlockFetchError(getErrorMessage(error, hash)));
        } finally {
            dispatch(setIsLoading(false));
        }
    };
}
