import styled from "styled-components";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

export const Container = styled.div`


    
    h1 {

        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-size: 3.2rem;
        margin-bottom: 1.6rem;
    }

    @media (max-width: ${PontoDeQuebra}) {
        h1 {
            background-color: ${({theme}) => theme.COR.AMARELO_100};
        }
    }

   

` 