import logoImg from "../../assets/hexagon.svg"
import { Container } from "./styles"

export function Rodape() {
    return (
        <Container>
            <img src={logoImg} className="logo" alt="Logomarca food explorer" />
            <p>food explorer</p>
            <p>© 2025 - Todos os direitos reservados</p>
        </Container>
    )
}