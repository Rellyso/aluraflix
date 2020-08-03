/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
    box-sizing: border-box;
    display: inline-block;
    padding: 16px 24px;
    
    border: 1px solid var(--white);
    border-radius: 5px;
    outline: none;

    color: var(--white);
    background: transparent;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;

    transition: opacity .3s;
    cursor: pointer;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default ButtonLink;
