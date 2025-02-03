import { Logo } from "../../componentes/logo"
import { Container, Formulario } from "./styles"
import { Entrada } from "../../componentes/entrada"
import { Botao } from "../../componentes/botao"
import { BotaoDeTexto } from "../../componentes/botaoDeTexto"
import { useNavigate } from "react-router"
import { useState } from "react"
import { usarAutenticacao } from "../../hooks/aut"


export function Login() {
    const navegar = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { entrar } = usarAutenticacao()

    function logar() {
        if (!email || !senha) {
            alert("Preencha todos os campos");
            return;
        }
        entrar({email, senha})
        
    }


    return (
        <Container>
            <div className="logo">
                <Logo />
            </div>
            
            <div className="formulario">

                <span>Faça seu login</span>

                <Formulario>                
                    <p>Email</p>
                    <Entrada type="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} />
                </Formulario>
                <Formulario>
                    <p>Senha</p>
                    <Entrada type="password" placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} />
                </Formulario>
                <Formulario>
                    <Botao title="Entrar" onClick={logar}/>
                    <BotaoDeTexto title="Criar Conta" onClick={() => navegar("/cadastro")}/>
                </Formulario>
            </div>


        </Container>
    )
}