import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBlockByHash } from '../../reducers/blocks-reducer/blocks.actions';
import BlockDetails from './components/block-details';
import BlockTransactions from './components/block-transactions';

const BlockPage = () => {
    const dispatch = useDispatch();
    const { blockHash } = useParams();

    useEffect(() => {
        if (!blockHash) {
            return;
        }

        dispatch(getBlockByHash(blockHash));
    }, [blockHash, dispatch]);

    return (
        <>
            <h1>Block Page</h1>
            <BlockDetails />
            <BlockTransactions />
        </>
    );
};

export default BlockPage;
