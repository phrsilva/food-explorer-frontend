import { Container, BotaoPrato, BotaoAdicionar } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus, FiHeart, FiChevronRight } from "react-icons/fi";
import imgPrato from "../../assets/prato.png";

export function CartaoPrato({children}) {
    let [quantidade, setQuantidade] = useState(1);

    function aumentarQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuirQuantidade() {
        setQuantidade(quantidade - 1);
    }

    return (
        <Container>
            {children}
            <FiHeart />
            <img src={imgPrato} alt="Prato" />
            <BotaoPrato title="Salada Ravanello" Icon={FiChevronRight}/>
            <span className="preco">R$ 25,00</span>
            <div className="quantidadePedido">
                <FiMinus onClick={diminuirQuantidade} />
                <span>{quantidade}</span>
                <FiPlus onClick={aumentarQuantidade}/>
            </div>
            <BotaoAdicionar title="incluir"/>
        </Container>
    );
}

