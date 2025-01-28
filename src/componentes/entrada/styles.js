import styled from "styled-components";

export const Container = styled.div`

width: 100%;

display: flex;
align-items: center;

margin-bottom: .8rem;
border-radius: 1rem;

> input {
    height: 4.8rem;
    width: 100%;
    margin-top: .8rem;

    border-radius: .8rem;

    padding: 1.2rem;
    background: ${({theme}) => theme.ESCURO.ESCURO_900};
    border: none;

    &::placeholder {
    }

}

`;

