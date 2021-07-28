import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

const DetailItemWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const DetailItemText = styled.p`
    flex: 1;
`;

const BlockDetails = () => {
    const { isLoading, selectedBlock } = useSelector(
        (state) => state.blocksReducer
    );

    if (isLoading || !selectedBlock) {
        return 'Loading...';
    }

    return (
        <>
            <DetailItemWrapper>
                <DetailItemText>Hash</DetailItemText>
                <DetailItemText>{selectedBlock.hash}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Confirmations</DetailItemText>
                <DetailItemText>-</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Timestamp</DetailItemText>
                <DetailItemText>
                    {moment(selectedBlock.time * 1000).format('YYYY-MM-DD')}
                </DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Height</DetailItemText>
                <DetailItemText>{selectedBlock.height}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Miner</DetailItemText>
                <DetailItemText>{selectedBlock.minerName}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Number of Transactions</DetailItemText>
                <DetailItemText>{selectedBlock.tx.length}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Difficulty</DetailItemText>
                <DetailItemText>-</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Merkle Root</DetailItemText>
                <DetailItemText>{selectedBlock.merkle}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Version</DetailItemText>
                <DetailItemText>{selectedBlock.version}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Bits</DetailItemText>
                <DetailItemText>{selectedBlock.bits}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Weight</DetailItemText>
                <DetailItemText>{selectedBlock.weight} WU</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Size</DetailItemText>
                <DetailItemText>{selectedBlock.size} bytes</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Nonce</DetailItemText>
                <DetailItemText>{selectedBlock.nonce}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Transaction Volume</DetailItemText>
                <DetailItemText>{selectedBlock.outputs} BTC</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Block Reward</DetailItemText>
                <DetailItemText>{selectedBlock.subsidy}</DetailItemText>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemText>Fee Reward</DetailItemText>
                <DetailItemText>{selectedBlock.fees}</DetailItemText>
            </DetailItemWrapper>
        </>
    );
};

export default BlockDetails;
