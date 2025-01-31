import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    height: 4.8rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;
    
    background-color: ${({theme}) => theme.COR.VERMELHO_100};
    color: ${({theme}) => theme.CLARO.CLARO_100};
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    gap: 0.8rem;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    

    &:hover {
        filter: brightness(1.1);
        

        
        
    }

    


`;