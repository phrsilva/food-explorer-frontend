import { Container, BotaoPrato, BotaoAdicionar } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus, FiHeart, FiChevronRight } from "react-icons/fi";
import { GiMeal } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { usarAutenticacao } from "../../hooks/aut";

export function CartaoPrato({id, nome, foto, preco}) {

    const { usuario } = usarAutenticacao();

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
            {usuario.perfil === "admin" ? <GiMeal /> : usuario.perfil === "cliente" && <FiHeart />}
            <img src={foto} alt="Prato" />
            <BotaoPrato title={nome} Icon={FiChevronRight} onClick={acessarPrato} />
            <span className="preco">R$ {preco}</span>
            { usuario.perfil === "cliente" &&
                <div className="quantidadePedido">
                <FiMinus onClick={diminuirQuantidade} />
                <span>{quantidade}</span>
                <FiPlus onClick={aumentarQuantidade}/>
                </div>
            }
            <BotaoAdicionar  title="incluir"/>
            {usuario.perfil === "admin" && <BotaoAdicionar title="editar prato"/>}
           
        </Container>
    );
}

