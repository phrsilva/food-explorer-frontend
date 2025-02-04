import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Input, ListaSugestoes, ItemSugestao } from "./styles"; // Adapte para seu estilo

export function Pesquisa() {
    const [termo, setTermo] = useState("");
    const [sugestoes, setSugestoes] = useState([]);
    const navigate = useNavigate();

    // Efeito para buscar pratos conforme o usuário digita
    useEffect(() => {
        if (termo.length > 1) { // Apenas busca se houver mais de 1 caractere
            async function buscarSugestoes() {
                try {
                    const response = await api.get(`/pratos/busca?termo=${termo}`);
                    setSugestoes(response.data);
                } catch (error) {
                    console.error("Erro ao buscar pratos:", error);
                }
            }
            buscarSugestoes();
        } else {
            setSugestoes([]); // Limpa sugestões quando não há termo
        }
    }, [termo]);

    // Navegar para a página do prato ao clicar em uma sugestão
    function selecionarPrato(id) {
        navigate(`/prato/${id}`);
        setSugestoes([]); // Limpa sugestões ao selecionar
    }

    return (
        <Container>
            <Input 
                type="text" 
                placeholder="Busque por pratos ou ingredientes"
                value={termo}
                onChange={(e) => setTermo(e.target.value)}
            />

            {sugestoes.length > 0 && (
                <ListaSugestoes>
                    {sugestoes.map((prato) => (
                        <ItemSugestao key={prato.id} onClick={() => selecionarPrato(prato.id)}>
                            {prato.nome}
                        </ItemSugestao>
                    ))}
                </ListaSugestoes>
            )}
        </Container>
    );
}
