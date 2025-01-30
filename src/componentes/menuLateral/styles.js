import styled from "styled-components";
import { Rodape } from "../rodape";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    height: 100vh;

`
export const Cabecalho = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};
    padding: 2.4rem;
    
    svg {

        font-size: 1.8rem;
        cursor: pointer;


        &:hover {
            transform: scale(1.2);
        }
    }

`


export const Corpo = styled.div`

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    gap: 1rem;
    padding: 2.4rem;

    button {
        align-self: flex-start;
    }

    span {
        border: 1px solid ${({theme}) => theme.CLARO.CLARO_600};
    }
`

export const RodapeMenu = styled(Rodape)`
    width: 100%;
    text-align: center ;
    padding: 1rem;

`
