import styled from 'styled-components';

const Error = styled.p`
    margin: 0;
    color: rgb(238, 75, 75);
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5rem')};
    font-weight: 700;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
`;

export default Error;
