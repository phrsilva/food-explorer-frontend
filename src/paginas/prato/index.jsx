import { Container, Conteudo, Tags, Pedido} from "./styles"
import { Rodape } from "../../componentes/rodape"
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"
import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao"
import {BotaoDeTexto} from "../../componentes/botaoDeTexto"
import imgPrato from "../../assets/prato.png"

export function Prato() {
    return (

        <Container>
            <BarraDeNavegacao/>

            <Conteudo>
                <BotaoDeTexto Icon={FiChevronLeft} title={"Voltar"}/>
                <img src={imgPrato} alt="Prato" />
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
                    <BotaoDeTexto Icon={FiPlus} title={"1"}/>
                    <FiMinus/>
                </Pedido>



            </Conteudo>
            <Rodape/>
        </Container>

        
    )
}