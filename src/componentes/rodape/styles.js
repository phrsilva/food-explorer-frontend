import styled from "styled-components";

export const Container = styled.div`

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 7rem;
    /* position at the bottom */
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${({theme}) => theme.ESCURO.ESCURO_900};
    gap: .8rem;

    color: ${({theme}) => theme.CLARO.CLARO_100};

    img {
        
    }

    p {
        color: ${({theme}) => theme.CLARO.CLARO_400};
        
    }

    p:last-child {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        
    }

    

  
  
`;