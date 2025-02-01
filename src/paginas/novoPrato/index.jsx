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

import { useState } from "react"


export function NovoPrato() {

    const [ingredientes, setIngredientes] = useState([]);

    function salvarPrato() {
        console.log("Ingredientes enviados:", ingredientes);
        // Aqui você pode enviar `ingredientes` para o backend via API
    }
    return (
        <Container>
            <BarraDeNavegacao/>
            
            <Formulario>
                <BotaoDeTexto title="voltar" Icon={FiChevronLeft} className="voltar"/>
                <h2>Novo Prato</h2>

                <span>Imagem do prato</span>
                <Entrada type="file" placeholder="Nome do prato" />

                <div className="ImagemNomeCategoria">
                    <span>Nome</span>
                    <Entrada type="text" placeholder="Nome do prato" />

                    <span>Categoria</span>
                    {/* Input type select */}
                    <Selecao/>
                </div>

                <div className="IngredientesPreco">

                    <span>Ingredientes </span>
                    <Ingredientes onChange={setIngredientes} onKeyDown={salvarPrato} />

                    <span>Preço</span>
                    <Entrada type="" placeholder="R$ 0,00" />
                
                </div>

                <span>Descrição</span>
                <AreaDeTexto placeholder="Descrição do Prato" />


                <Botao title="Salvar Prato"/>


            </Formulario>
            
            <Rodape/>
        
        </Container>
    )
}