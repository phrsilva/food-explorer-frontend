import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: ${({theme}) => theme.CLARO.CLARO_100};

    cursor: pointer;

    /* Margin top. Funciona na tela de login. Pode causar problemas em outras interfaces */
    margin-top: 3.2rem;
    
    
    
`;