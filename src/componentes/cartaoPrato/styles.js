import styled from "styled-components";
import { BotaoDeTexto } from "../botaoDeTexto";
import { Botao } from "../botao";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({theme}) => theme.ESCURO.ESCURO_500};

    border-radius: .8rem;
    padding: 1.2rem;
    margin: 1.6rem 0;
    width: 21rem;
    height: 29.2rem;

    img {
        width: 80%;
        border-radius: .8rem;
        margin: 0 auto;
    }

    svg:first-child {
        align-self: flex-end;
        font-size: 2.4rem;
    }

    .quantidadePedido {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        font-size: 1.4rem;

        > svg {
            cursor: pointer;
            font-size: 1.4rem;

            &:hover {
                filter: brightness(1.1);
                transform: scale(1.1);
            }


        }
    }

    .preco {
        font-size: 1.6rem;
        color: ${({theme}) => theme.COR.AZUL_200};

    }

    @media (min-width: ${PontoDeQuebra}) {
        width: 30.4rem;
        height: 46.2rem;
    }
`;

export const BotaoPrato = styled(BotaoDeTexto)``;

export const BotaoAdicionar = styled(Botao)`
    max-width: 16.2rem;
`;