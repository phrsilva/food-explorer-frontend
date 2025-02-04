import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao"
import { Rodape } from "../../componentes/rodape"
import { BotaoDeTexto } from "../../componentes/botaoDeTexto"

import { FiChevronLeft } from "react-icons/fi"
import { Entrada } from "../../componentes/entrada"
// import { Ingredientes } from "../../componentes/ingredientes"
import { AreaDeTexto } from "../../componentes/areaDeTexto"
import { Botao } from "../../componentes/botao"
import { Selecao } from "../../componentes/selecao"
import { Ingredientes } from "../../componentes/ingredientes"

import {Container, Formulario} from "./styles"

import { useState, useEffect } from "react"
import { useNavigate, useParams	 } from "react-router-dom"

import { api } from "../../services/api"


export function EditarPrato() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState(null);

    // Carrega os dados do prato ao montar o componente
    useEffect(() => {
        async function buscarPrato() {
            try {
                const response = await api.get(`/pratos/${id}`);
                const prato = response.data;

                setNome(prato.nome);
                setCategoria(prato.categoria || "entrada");
                setIngredientes(prato.ingredientes || []);
                setPreco(prato.preco);
                setDescricao(prato.descricao);
            } catch (error) {
                alert("Erro ao carregar o prato.");
                navigate(-1);
            }
        }
        buscarPrato();
    }, [id, navigate]);




    async function salvarPrato() {
        try {
            // 🔹 Atualiza os dados do prato
            await api.put(`/pratos/${id}`, {
                nome,
                ingredientes,
                preco,
                descricao,
                categoria,
            });
    
            if (imagem) {
                const formData = new FormData();
                formData.append("foto", imagem);
    
                await api.patch(`/pratos/${id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
            }
    
            alert("Prato atualizado com sucesso!");
            navigate(-1);
        } catch (error) {
            alert("Erro ao atualizar o prato.");
            console.error(error);
        }
    }
    

    async function excluirPrato() {
        const confirmacao = window.confirm("Tem certeza que deseja excluir este prato?");
        if (confirmacao) {
            try {
                await api.delete(`/pratos/${id}`);
                alert("Prato excluído com sucesso!");
                navigate("/");
            } catch (error) {
                alert("Erro ao excluir o prato.");
            }
        }
    }


    return (
        <Container>
            <BarraDeNavegacao/>
            
            <Formulario>
                <BotaoDeTexto title="voltar" Icon={FiChevronLeft} className="voltar" onClick={() => navigate(-1)}/>
                <h2>Editar Prato</h2>

                <span>Imagem do prato</span>
                <Entrada type="file" onChange={e => setImagem(e.target.files[0])} />

                <div className="ImagemNomeCategoria">
                    <span>Nome</span>
                    <Entrada type="text" placeholder="Nome do prato" value={nome} onChange={e => setNome(e.target.value)}/>

                    <span>Categoria</span>
                    {/* Input type select */}
                    <Selecao value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                </div>

                <div className="IngredientesPreco">

                    <span>Ingredientes </span>
                    <Ingredientes value={ingredientes} onChange={setIngredientes} onKeyDown={salvarPrato} />

                    <span>Preço</span>
                    <Entrada type="text" placeholder="R$ 0,00" value={preco} onChange={e => setPreco(e.target.value)}/>
                
                </div>

                <span>Descrição</span>
                <AreaDeTexto placeholder="Descrição do Prato" defaultValue={descricao} onChange={e => setDescricao(e.target.value)} />

                <div className="botoes">
                    <Botao title="Excluir Prato" onClick={excluirPrato}/>
                    <Botao title="Salvar Prato" onClick={salvarPrato}/>

                </div>


            </Formulario>
            
            <Rodape/>
        
        </Container>
    )
}