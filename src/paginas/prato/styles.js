import styled from "styled-components";
import { Botao } from "../../componentes/botao";

export const Container = styled.div`
    

`;

export const Conteudo = styled.div`
    width: 31.6rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        align-self: flex-start;

    }
    

    img {
        width: 100%;
        margin-top: .6rem;
        max-width: 26.4rem;
        max-height: 26.4rem;

    }

    h2 {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        margin-bottom: .6rem;
    }

    p {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        margin-bottom: .6rem;
        text-align: center;
        justify-content: center;
    }



`;

export const Tags = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: .8rem;
    justify-content: center;
    margin: 1.2rem auto;

    span {
        background-color: ${({theme}) => theme.ESCURO.ESCURO_1000};
        padding: .6rem 1.2rem;
        border-radius: .6rem;
        font-size: 1.2rem;
    }
`;

export const Pedido = styled.div`
    
`;

