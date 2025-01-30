import styled from "styled-components";
import {Logo} from "../../componentes/logo";
import {Botao} from "../../componentes/botao";
import {PontoDeQuebra} from "../../estilos/pontoDeQuebra";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
    gap: 1rem;
    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};

    

    > svg {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-size: 2.4rem;
        cursor: pointer;

        
    }

    input {
        display: flex;
        background-color: ${({theme}) => theme.ESCURO.ESCURO_1000};
        text-align: center;
        max-width: 58rem;
        margin: 0 auto;
    }

    @media (min-width: ${PontoDeQuebra}) {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 2.4rem;
        }



        .iconeMovel {
            visibility: hidden;
            width: 0;
            height: 0;
            overflow: hidden
        }

        .iconeDesktop {
            visibility: visible;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
           
        }
    }

    


`;

export const LogoNavegacao = styled(Logo)`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    h1 {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-size: 2.4rem;
        margin-bottom: 0;

    }

    img {
        margin-bottom: 0;
    }

    


`;

export const BotaoPedidos = styled(Botao)`

    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    padding: 0;
    
    position: absolute;
    top: 2.2rem;
    right: 1.5rem;



`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;  // Garante que fique acima do conteúdo
`;