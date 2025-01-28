import { Logo } from "../../componentes/logo"
import { Container, Formulario } from "./styles"
import { Entrada } from "../../componentes/entrada"
import { Botao } from "../../componentes/botao"
import { BotaoDeTexto } from "../../componentes/botaoDeTexto"
export function Login() {
    return (
        <Container>
            <Logo />
            <Formulario>                
                <p>Email</p>
                <Entrada placeholder="Digite seu email" />
            </Formulario>
            <Formulario>
                <p>Senha</p>
                <Entrada placeholder="Digite sua senha" />
            </Formulario>
            <Formulario>
                <Botao title="Entrar"/>
                <BotaoDeTexto title="Criar Conta"/>
            </Formulario>


        </Container>
    )
}