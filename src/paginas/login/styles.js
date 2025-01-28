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

    // Esconde o span em exibições para dispositivos movéis 
    span {
        display: none;
    }

    @media (min-width: ${PontoDeQuebra}) {
        /* A partir de 768px, exibir logo no lado direito e formulario no lado esquerdo */
        width: 100%;
        max-width: 100vh;

        
        
        display: grid;
        grid-template-areas: "logo formulario";
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        margin: 14.2rem auto;

        .logo {

        }

        .formulario {
            padding: 2rem;
            border-radius: 1.6rem;
            background-color: ${({theme}) => theme.ESCURO.ESCURO_700};

            > span {
                color: ${({theme}) => theme.CLARO.CLARO_100};
                font-family: 'Poppins', sans-serif;
                font-size: 3.2rem;
                margin-bottom: 1.6rem;

                display: flex;
                align-items: center;
                justify-content: center;

                
            }
            
        }
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

    @media (min-width: ${PontoDeQuebra}) {
        margin: 0 auto;
        margin-top: 3.2rem;
    }

   
    

`;