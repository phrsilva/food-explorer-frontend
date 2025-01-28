import { useNavigate } from "react-router"
import { Logo } from "../../componentes/logo"
import { Container, Formulario } from "./styles"
import { Entrada } from "../../componentes/entrada"
import { Botao } from "../../componentes/botao"
import { BotaoDeTexto } from "../../componentes/botaoDeTexto"
export function Cadastro() {
    const navegar = useNavigate()
    return (
        <Container>
            <div className="logo">
                <Logo />
            </div>
            
            <div className="formulario">

                <span>Crie sua conta</span>

                <Formulario>                
                    <p>Nome</p>
                    <Entrada type="text" placeholder="Informe seu nome" />
                </Formulario>
                <Formulario>
                    <p>Email</p>
                    <Entrada type="email" placeholder="Informe seu email" />
                </Formulario>
                <Formulario>
                    <p>Senha</p>
                    <Entrada type="password" placeholder="Digite sua senha" />
                </Formulario>
                <Formulario>
                    <Botao title="Criar conta"/>
                    <BotaoDeTexto title="Já possuo uma conta" onClick={() => navegar(-1)}/>
                </Formulario>
            </div>


        </Container>
    )
}