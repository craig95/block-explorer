import styled from 'styled-components';

const Spinner = styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid rgb(18, 29, 51);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Spinner;
