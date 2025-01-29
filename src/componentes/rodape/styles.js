import styled from "styled-components";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";


export const Container = styled.div`

    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 2rem;
    bottom: 0;

    flex-direction: inline;
    justify-content: space-between;
    height: 7rem;
   
    width: 100%;
    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};
    font-size: 1.4rem;
    text-align: left;

    color: ${({theme}) => theme.CLARO.CLARO_300};


    @media (min-width: ${PontoDeQuebra}) {
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        bottom: 0;
        position: fixed;

    }

    


`;

export const Logo = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${({theme}) => theme.CLARO.CLARO_700};
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 1.6rem;

`;

