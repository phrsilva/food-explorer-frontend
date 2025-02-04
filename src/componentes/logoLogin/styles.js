import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1 {
        color: ${({theme}) => theme.CLARO.CLARO_100};
        font-size: 3.2rem;
        margin-bottom: 1.6rem;
    }

    img {
        margin-bottom: 1.6rem;
    }

    
`;