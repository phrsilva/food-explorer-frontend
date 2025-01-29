import styled from "styled-components";
import {Logo} from "../../componentes/logo";
import {Botao} from "../../componentes/botao";

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


`;

export const LogoNavegacao = styled(Logo)`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

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
    
    position: fixed;
    top: 2.2rem;
    right: 1.5rem;



`;