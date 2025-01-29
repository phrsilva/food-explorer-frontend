import styled from "styled-components";
import { Botao } from "../../componentes/botao";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

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

    @media (min-width: ${PontoDeQuebra}) {
        display: grid;
        grid-template-areas: 
        "navegacao navegacao"
        "voltar vazio"
        "prato titulo"
        "prato descricao"
        "prato tags"
        "prato preco"
        "rodape rodape";
        grid-template-columns: 50% 50%;
        

        margin: 2.4rem 12rem;
        gap: 2.4rem;
        align-items: center;
        justify-content: center;

        img {
            grid-area: prato;
        }

        div:first-child {
            grid-area: voltar;
        }

        button {
            align-self: flex-start;
            grid-area: voltar;
        }

        h2 {
            grid-area: titulo;
            font-family: 'Poppins', sans-serif;
            font-size: 2.4rem;
        }

        p {
            grid-area: descricao;
            font-family: 'Poppins', sans-serif;
            text-align: left;
        }

        div:nth-child(5) {
            grid-area: tags;
        }

        div:nth-child(6) {
            grid-area: preco;
        }

       
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

    @media (min-width: ${PontoDeQuebra}) {
    display: flex;
    justify-content: flex-start;
    }

`;

export const Pedido = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    font-size: 2.2rem;
    color: ${({theme}) => theme.CLARO.CLARO_300};

    margin-bottom: 2rem;

    :hover {
        cursor: pointer;
    }

    @media (min-width: ${PontoDeQuebra}) {
    justify-content: flex-start;
    }

`;

export const BotaoPedido = styled(Botao)`
    margin: 1.2rem auto;
    font-family: 'Poppins', sans-serif;
    font-size: .9rem;
`;
