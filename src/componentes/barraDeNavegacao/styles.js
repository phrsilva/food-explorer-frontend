import styled from "styled-components";
import {Logo} from "../../componentes/logo";

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
