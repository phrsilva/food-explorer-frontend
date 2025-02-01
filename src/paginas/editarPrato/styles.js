import styled from "styled-components";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    min-height: 100vh;
`;

export const Formulario = styled.form`
    margin: 0 3.2rem;
    
    .voltar {
        align-self: flex-start;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        margin: 1.6rem 0;
    }

    span {
        color: ${({theme}) => theme.CLARO.CLARO_400};
        font-size: 1.6rem;
        display: block;
        margin-bottom: 0.5rem; /* Ajuste para reduzir o espaço entre o span e o input */
    }

    input, textarea, select {
        margin: 0 0 1.6rem 0; /* Margem apenas na parte inferior */
        width: 100%;
    }

    .botoes {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        button:first-child {
            background-color: ${({theme}) => theme.ESCURO.ESCURO_1000};
        }
    }

    @media (min-width: ${PontoDeQuebra}) {
        margin: auto 12.5rem;

        
    }
`;