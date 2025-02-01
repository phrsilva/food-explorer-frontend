import { useState, useRef } from "react";
import { Container, TagsContainer, Tag, InputStyled } from "./styles";
import { FiX } from "react-icons/fi";

export function Ingredientes({ onChange }) {
    const [ingredientes, setIngredientes] = useState([]);
    const [inputAtual, setInputAtual] = useState("");
    const inputRef = useRef(null);

    function adicionarIngrediente(event) {
        const valor = event.target.value;
        const tecla = event.key;

        // Detecta vírgula, Enter ou Tab
        if (tecla === "," || tecla === "Enter" || tecla === "Tab") {
            event.preventDefault(); // Impede a quebra de linha no input
            salvarIngrediente(valor);
        }
    }

    function salvarIngrediente(valor) {
        const novosIngredientes = valor
            .split(",") // Divide por vírgulas caso o usuário insira múltiplos ingredientes
            .map(ing => ing.trim()) // Remove espaços extras
            .filter(ing => ing !== ""); // Evita strings vazias

        if (novosIngredientes.length > 0) {
            const listaAtualizada = [...ingredientes, ...novosIngredientes];
            setIngredientes(listaAtualizada);
            onChange(listaAtualizada);
        }

        setInputAtual("");
    }

    function removerIngrediente(index) {
        const novaLista = ingredientes.filter((_, i) => i !== index);
        setIngredientes(novaLista);
        onChange(novaLista);
    }

    return (
        <Container onClick={() => inputRef.current.focus()}>
            <TagsContainer>
                {ingredientes.map((ingrediente, index) => (
                    <Tag key={index}>
                        {ingrediente}
                        <FiX size={14} onClick={() => removerIngrediente(index)} />
                    </Tag>
                ))}
                <InputStyled
                    ref={inputRef}
                    type="text"
                    value={inputAtual}
                    onChange={(e) => setInputAtual(e.target.value)}
                    onKeyDown={adicionarIngrediente} // Agora também detecta Enter e Tab
                    placeholder="separados por vírgula, enter ou tab"
                />
            </TagsContainer>
        </Container>
    );
}
