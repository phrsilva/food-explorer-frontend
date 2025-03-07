import styled from "styled-components";
import {Logo} from "../../componentes/logo";
import {Botao} from "../../componentes/botao";
import {PontoDeQuebra} from "../../estilos/pontoDeQuebra";


// A FAZER: CORRIGIR ESTILOS DA BARRA DESKTOP

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
    gap: 1rem;
    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};

     

    svg {
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



        
    }

    


`;

export const LogoNavegacao = styled(Logo)`
    
    display: flex;

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

export const BotaoPedidosDesktop = styled(Botao)`
    max-width: 21rem;
`

