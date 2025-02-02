import { useNavigate } from "react-router"
import { Logo } from "../../componentes/logo"
import { Container, Formulario } from "./styles"
import { Entrada } from "../../componentes/entrada"
import { Botao } from "../../componentes/botao"
import { BotaoDeTexto } from "../../componentes/botaoDeTexto"

import { useState } from "react"
import { api } from "../../services/api"




export function Cadastro() {
    const navegar = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function criarConta() {
        if (!nome || !email || !senha) {
            alert("Preencha todos os campos");
            return;
        }
        api.post("/usuarios", {nome, email, senha}).then(() => {
            alert("Conta criada com sucesso");
            navegar(-1);
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao criar conta. Tente novamente");
            }
        });
    }
    return (
        <Container>
            <div className="logo">
                <Logo />
            </div>
            
            <div className="formulario">

                <span>Crie sua conta</span>

                <Formulario>                
                    <p>Nome</p>
                    <Entrada type="text" placeholder="Informe seu nome" onChange={e => setNome(e.target.value)} />
                </Formulario>
                <Formulario>
                    <p>Email</p>
                    <Entrada type="email" placeholder="Informe seu email" onChange={e => setEmail(e.target.value)} />
                </Formulario>
                <Formulario>
                    <p>Senha</p>
                    <Entrada type="password" placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} />
                </Formulario>
                <Formulario>
                    <Botao title="Criar conta" onClick={criarConta}/>
                    <BotaoDeTexto title="Já possuo uma conta" onClick={() => navegar(-1)}/>
                </Formulario>
            </div>


        </Container>
    )
}