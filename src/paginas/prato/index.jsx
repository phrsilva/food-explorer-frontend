import { Container, Conteudo, Tags, Pedido, BotaoPedido} from "./styles"
import { Rodape } from "../../componentes/rodape"
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"
import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao"
import {BotaoDeTexto} from "../../componentes/botaoDeTexto"
import {PiReceipt} from "react-icons/pi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Prato() {

    const navigate = useNavigate()



    return (

        <Container>
            <BarraDeNavegacao/>

            <Conteudo>
                <BotaoDeTexto Icon={FiChevronLeft} title={"Voltar"} onClick={() => navigate(-1)}/>
                <img src="" alt="Prato" />
                <h2>Salada Ravanello</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>

                <Tags>
                    <span>alface</span>
                    <span>cebola</span>
                    <span>tomate</span>
                    <span>pão naan</span>
                    <span>pepino</span>
                    <span>rabanete</span>
                </Tags>

                <Pedido>
                    <FiPlus size={32}/>
                    <span>1</span>
                    <FiMinus size={32}/>
                    <BotaoPedido Icon={PiReceipt} title={"pedir R$ 25,00"}/>
                </Pedido>



            </Conteudo>
            <Rodape/>
        </Container>

        
    )
}