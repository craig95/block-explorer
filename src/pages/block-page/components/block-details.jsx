import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { addThousandsSeparators } from '../../../helpers';
import Spinner from '../../../common-components/spinner';
import Error from '../../../common-components/error';

const SpinnerWrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 576px) {
        height: 500px;
    }
`;

const BlockDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const DetailItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgb(223, 227, 235);
`;

const DetailItemTitleWrapper = styled.div`
    width: 50%;
    padding: 0.8rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
`;

const DetailItemTitle = styled.p`
    height: auto;
    margin: 0;
    color: rgb(103, 113, 133);
    font-family: Inter, Helvetica, sans-serif;
    font-feature-settings: 'calt' 0;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
`;

const DetailItemValue = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: rgb(53, 63, 82);
    font-family: Inter, Helvetica, sans-serif;
    font-feature-settings: 'calt' 0;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
`;

const BlockDetails = () => {
    const { isLoading, selectedBlock, selectedBlockFetchError } = useSelector(
        (state) => state.blocksReducer
    );

    if ((isLoading || !selectedBlock) && !selectedBlockFetchError) {
        return (
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        );
    }

    if (selectedBlockFetchError) {
        return <Error>{selectedBlockFetchError}</Error>;
    }

    return (
        <BlockDetailsWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Hash</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>{selectedBlock.hash}</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Confirmations</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>-</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Timestamp</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {moment(selectedBlock.time * 1000).format(
                        'YYYY-MM-DD HH:mm'
                    )}
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Height</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>{selectedBlock.height}</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Miner</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>{selectedBlock.minerName}</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Number of Transactions</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {addThousandsSeparators(selectedBlock.tx.length)}
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Difficulty</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>-</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Merkle Root</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>{selectedBlock.merkle}</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Version</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>{selectedBlock.version}</DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Bits</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {addThousandsSeparators(selectedBlock.bits)}
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Weight</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {addThousandsSeparators(selectedBlock.weight)} WU
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Size</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {addThousandsSeparators(selectedBlock.size)} bytes
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Nonce</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {addThousandsSeparators(selectedBlock.nonce)}
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Transaction Volume</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {selectedBlock.outputs / 100000000} BTC
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Block Reward</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {(selectedBlock.subsidy / 100000000).toFixed(8)} BTC
                </DetailItemValue>
            </DetailItemWrapper>
            <DetailItemWrapper>
                <DetailItemTitleWrapper>
                    <DetailItemTitle>Fee Reward</DetailItemTitle>
                </DetailItemTitleWrapper>
                <DetailItemValue>
                    {selectedBlock.fees / 100000000} BTC
                </DetailItemValue>
            </DetailItemWrapper>
        </BlockDetailsWrapper>
    );
};

export default BlockDetails;
