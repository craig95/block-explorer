import React from 'react';
import { useSelector } from 'react-redux';

const BlockTransactions = () => {
    const { isLoading, selectedBlock } = useSelector(
        (state) => state.blocksReducer
    );

    if (isLoading || !selectedBlock) {
        return null;
    }

    return <h1>Block Transactions</h1>;
};

export default BlockTransactions;
