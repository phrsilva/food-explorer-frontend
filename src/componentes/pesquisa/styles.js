import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
`;

export const ListaSugestoes = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    border-top: none;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

export const ItemSugestao = styled.li`
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: #f0f0f0;
    }
`;
