import styled from "styled-components";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";

export const Container = styled.section`

    display: flex;
    flex-direction: column;
    margin: auto 2.4rem;

    @media (min-width: ${PontoDeQuebra}) {
        max-width: 112rem;
        margin: 0 auto;
    }
`;
