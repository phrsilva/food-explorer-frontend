import {Container, Cabecalho, Corpo, RodapeMenu} from "./styles"
import { FiX } from "react-icons/fi"
import {Entrada} from "../../componentes/entrada"
import { BotaoDeTexto } from "../botaoDeTexto"

export function MenuLateral({fecharMenu}) {
    return (
        <Container>
            <Cabecalho>
                <FiX onClick={fecharMenu}/>
                <h1>menu</h1>
            </Cabecalho>
            <Corpo>
               <Entrada type="text" placeholder="Busque por pratos ou ingredientes"/>
               <BotaoDeTexto title="Sair" />
               <span></span>
            </Corpo>
            <RodapeMenu/>
        </Container>
    )
}