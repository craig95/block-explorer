import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SearchIcon } from '../../../common-components/icons';

const FormWrapper = styled.div``;

const Form = styled.form`
    display: flex;
    height: 2.5rem;
    position: relative;
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(223, 227, 235);
    border-radius: 0.5rem;
    padding: 0 0.5rem 0 50px;
    margin-right: 1.5rem;
    width: 100%;
    height: 100%;
    font-family: Inter, Helvetica, sans-serif;
    font-size: 1rem;
    color: rgb(53, 63, 82);

    &:focus-visible {
        border: none;
        border-radius: 0.5rem;
        box-shadow: 0 0 0 1px rgb(18, 29, 51);
        outline: none;
        transition: 0.1s;
    }
`;

const SearchButton = styled.button`
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
    background-color: rgb(14, 130, 140);
    color: rgb(255, 255, 255);
    font-size: 14px;
    width: 100%;
    border-radius: 0.25rem;
    line-height: 1;
    height: 105%;
    text-transform: none;
    text-decoration: none;

    &:active {
        background: rgb(8, 71, 76);
    }

    &:focus {
        background: rgb(8, 71, 76);
    }

    &:hover {
        background: rgb(8, 71, 76);
    }
`;

const SearchBar = () => {
    const history = useHistory();

    const [searchValue, setSearchValue] = useState('');

    const onFormSubmit = () => {
        history.push(`/block/${searchValue}`);
    };

    const onChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <FormWrapper onSubmit={onFormSubmit}>
            <Form>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <Input
                    placeholder="Search for a blocks"
                    value={searchValue}
                    onChange={onChange}
                />
                <div>
                    <SearchButton type="submit">Search</SearchButton>
                </div>
            </Form>
        </FormWrapper>
    );
};

export default SearchBar;
