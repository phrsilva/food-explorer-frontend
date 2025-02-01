import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};
    border-radius: .8rem;
    padding: 1.2rem;
    margin: 4.4rem 1.6rem;

    img {
        z-index: 1;
    }




`;
