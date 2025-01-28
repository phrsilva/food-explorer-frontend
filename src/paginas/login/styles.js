import styled from "styled-components";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

export const Container = styled.div`


    margin: 12rem auto;
    width: 100%;
    max-width: 47.6rem;



    
    h1 {

        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-size: 3.2rem;
        margin-bottom: 1.6rem;
    }

    @media (min-width: ${PontoDeQuebra}) {
       
    }

   

` 
export const Formulario = styled.form`

    margin-top: 3.2rem;
    margin-left: 6.5rem;
    margin-right: 4.7rem;
    display: flex;
    flex-direction: column;

    p {
        color: ${({theme}) => theme.CLARO.CLARO_400};
        font-size: 1.6rem;
        
    }

`;