import {Container, Cabecalho, Corpo, RodapeMenu} from "./styles"
import { FiX } from "react-icons/fi"
import {Entrada} from "../../componentes/entrada"
import { BotaoDeTexto } from "../botaoDeTexto"
import { useNavigate } from "react-router-dom";
import { usarAutenticacao } from "../../hooks/aut";

export function MenuLateral({fecharMenu}) {
    const navigate = useNavigate();
    const { sair } = usarAutenticacao();

    function sairDaConta() {
        sair()
        navigate("/")
    }
    return (
        <Container>
            <Cabecalho>
                <FiX onClick={fecharMenu} />
                <h1>menu</h1>
            </Cabecalho>
            <Corpo>
               <Entrada type="text" placeholder="Busque por pratos ou ingredientes"/>
               <BotaoDeTexto title="Sair" onClick={sairDaConta}/>
               <span></span>
            </Corpo>
            <RodapeMenu/>
        </Container>
    )
}