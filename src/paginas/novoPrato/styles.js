import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;


`; 

export const Formulario = styled.form`

    margin: 0 3.2rem;
    
    .voltar {
        align-self: flex-start;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        margin: 1.6rem 0;
    }

    span {
        color: ${({theme}) => theme.CLARO.CLARO_400};
        font-size: 1.6rem;
        margin-bottom: 1.6rem;
    }

    input {
        margin: 1.6rem 0;
    }

    textarea{
        margin: 1.6rem 0;
    }

    select {
        margin: 1.6rem 0;
    }



`; 