import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao";
import { Rodape } from "../../componentes/rodape";
import { BotaoDeTexto } from "../../componentes/botaoDeTexto";
import { FiChevronLeft } from "react-icons/fi";
import { Entrada } from "../../componentes/entrada";
import { AreaDeTexto } from "../../componentes/areaDeTexto";
import { Botao } from "../../componentes/botao";
import { Selecao } from "../../componentes/selecao";
import { Ingredientes } from "../../componentes/ingredientes";

import { Container, Formulario } from "./styles";

export function NovoPrato() {
    const navegar = useNavigate();

    // ✅ Estados para armazenar os dados do prato
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [imagem, setImagem] = useState(null);

    async function salvarPrato(event) {
        event.preventDefault();

        try {
            // 🔹 1️⃣ Criar o prato (sem a foto)
            const response = await api.post("/pratos", {
                nome,
                descricao,
                categoria,
                preco,
                ingredientes,
            });

            const pratoId = response.data.id; // Pega o ID do prato criado

            // 🔹 2️⃣ Se houver imagem, enviá-la separadamente
            if (imagem) {
                const formData = new FormData();
                formData.append("foto", imagem);

                await api.patch(`/pratos/${pratoId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            }

            alert("Prato criado com sucesso!");
            navegar("/pratos");
        } catch (error) {
            alert("Erro ao criar prato.");
            console.error(error);
        }
    }

    return (
        <Container>
            <BarraDeNavegacao />
            
            <Formulario onSubmit={salvarPrato}>
                <BotaoDeTexto title="voltar" Icon={FiChevronLeft} className="voltar" onClick={() => navegar(-1)} />
                <h2>Novo Prato</h2>

                <span>Imagem do prato</span>
                <Entrada type="file" onChange={e => setImagem(e.target.files[0])} />

                <div className="ImagemNomeCategoria">
                    <span>Nome</span>
                    <Entrada type="text" placeholder="Nome do prato" value={nome} onChange={e => setNome(e.target.value)} />

                    <span>Categoria</span>
                    <Selecao value={categoria} onChange={e => setCategoria(e.target.value)} />
                </div>

                <div className="IngredientesPreco">
                    <span>Ingredientes</span>
                    <Ingredientes value={ingredientes} onChange={setIngredientes} />

                    <span>Preço</span>
                    <Entrada type="number" placeholder="R$ 0,00" value={preco} onChange={e => setPreco(e.target.value)} />
                </div>

                <span>Descrição</span>
                <AreaDeTexto placeholder="Descrição do Prato" defaultValue={descricao} onChange={e => setDescricao(e.target.value)} />

                <Botao title="Salvar Prato" type="submit" />
            </Formulario>
            
            <Rodape />
        </Container>
    );
}
