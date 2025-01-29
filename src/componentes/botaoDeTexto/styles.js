import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: ${({theme}) => theme.CLARO.CLARO_100};

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    /* Margin top. Funciona na tela de login. Pode causar problemas em outras interfaces */
    margin-top: 3.2rem;
    
    > svg {
        /* Animação para o ícone */
        animation: move 2s linear infinite;

        @keyframes move {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(-5px);
            }
            100% {
                transform: translateX(0);
            }
            }
    }
    
    
`;