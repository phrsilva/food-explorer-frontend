import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 40rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    `;

export const Input = styled.input`
    color: ${({theme}) => theme.CLARO.CLARO_100};
    background: ${({theme}) => theme.ESCURO.ESCURO_900};
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: .5rem;
    font-size: 1.6rem;
`;

export const ListaSugestoes = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${({theme}) => theme.ESCURO.ESCURO_900};
    border-top: none;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

export const ItemSugestao = styled.li`
    padding: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.CLARO.CLARO_900};

    cursor: pointer;
    font-size: 1.4rem;
    &:hover {
        background: ${({theme}) => theme.COR.AZUL_100};
    }
`;
