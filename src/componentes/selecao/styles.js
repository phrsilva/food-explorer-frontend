import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    margin-bottom: .8rem;
    border-radius: 1rem;

    > select {
        height: 4.8rem;
        width: 100%;
        margin-top: .8rem;

        border-radius: .8rem;

        padding: 1.2rem;
        background: ${({theme}) => theme.ESCURO.ESCURO_900};
        color: ${({theme}) => theme.CLARO.CLARO_500};
        border: none;

        &::placeholder {
        }

}

`;

