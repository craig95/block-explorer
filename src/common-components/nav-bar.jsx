import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoIcon from '../assets/images/logo-icon.png';

const NavBarWrapper = styled.div`
    height: 65px;
    display: flex;
    background-color: rgb(18, 29, 51);
    padding: 0 1.5rem;
    justify-content: center;
`;

const NavBarContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;

    @media screen and (min-width: 1024px) {
        max-width: 80rem;
    }
`;

const LogoLinkWrapper = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`;

const Image = styled.img`
    height: 30px;
    width: 30px;
`;

const Logo = styled.h1`
    color: #ffffff;
    font-size: 1.2rem;
    font-family: Inter, Helvetica, sans-serif;
    margin: 0 0 0 0.75rem;
`;

const LogoSpan = styled.span`
    color: #999999;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const BuyBitcoinButton = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 1rem;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease 0s;
    opacity: 1;
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: rgb(12, 108, 242);
    color: rgb(255, 255, 255);
    font-size: 14px;
    width: 100%;
    border-radius: 0.25rem;
    line-height: 1;
    height: 2rem;
    text-transform: none;
    text-decoration: none;

    &:active {
        background: rgb(13, 53, 120);
    }

    &:focus {
        background: rgb(22, 86, 185);
    }

    &:hover {
        background: rgb(20, 70, 153);
    }

    @media screen and (max-width: 400px) {
        visibility: hidden;
    }
`;

const NavBar = () => (
    <NavBarWrapper>
        <NavBarContentWrapper>
            <LogoLinkWrapper to="/">
                <Image src={logoIcon} alt="Logo Icon" />
                <Logo>
                    BlockExplorer<LogoSpan>.co.za</LogoSpan>
                </Logo>
            </LogoLinkWrapper>
            <ButtonWrapper>
                <BuyBitcoinButton href="https://valr.com" target="_blank">
                    Buy Bitcoin
                </BuyBitcoinButton>
            </ButtonWrapper>
        </NavBarContentWrapper>
    </NavBarWrapper>
);

export default NavBar;
