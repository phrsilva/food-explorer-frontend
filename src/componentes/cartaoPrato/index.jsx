import { Container, BotaoPrato, BotaoAdicionar } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus, FiHeart, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function CartaoPrato({id, nome, foto, preco}) {

    const navigate = useNavigate();
    let [quantidade, setQuantidade] = useState(1);

    function aumentarQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuirQuantidade() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);    
        }
    }

    function acessarPrato() {
        navigate(`/prato/${id}`);
    }

    

 

    
    

    return (
        <Container>
            <FiHeart />
            <img src={foto} alt="Prato" />
            <BotaoPrato title={nome} Icon={FiChevronRight} onClick={acessarPrato} />
            <span className="preco">R$ {preco}</span>
            <div className="quantidadePedido">
                <FiMinus onClick={diminuirQuantidade} />
                <span>{quantidade}</span>
                <FiPlus onClick={aumentarQuantidade}/>
            </div>
            <BotaoAdicionar title="incluir"/>
        </Container>
    );
}

