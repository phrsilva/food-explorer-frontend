import logoImg from '../../assets/polygon.svg'
import {Container} from "./styles";
import { usarAutenticacao } from "../../hooks/aut";

export function Logo({className}) {
    const {usuario} = usarAutenticacao();


    return (
        <Container className={className}>
            <img src={logoImg} alt="Logo" />
            <h1>food explorer</h1>
            {
                usuario.perfil === 'admin' &&
                <p>Admin</p>
            }
            
        </Container>
    )
}

