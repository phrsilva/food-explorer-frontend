import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    border-radius: 1rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.ESCURO.ESCURO_900};
    color: ${({ theme }) => theme.CLARO.CLARO_400};
    cursor: text;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    overflow-x: auto;
    padding: 0.2rem;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Tag = styled.span`
    background-color: ${({ theme }) => theme.ESCURO.ESCURO_1000};
    padding: 0.6rem 1.2rem;
    border-radius: 0.6rem;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    
    :hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }
    
    svg {
        cursor: pointer;
    }
`;

export const InputStyled = styled.input`
    flex: 1;
    /* height: 2.5rem;
    min-width: 120px; */
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.CLARO.CLARO_400};
    font-size: 1.6rem;

    &::placeholder {
        color: ${({ theme }) => theme.CLARO.CLARO_600};
    }

    &:focus {
        outline: none;
    }
`;
