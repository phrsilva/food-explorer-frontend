import { Container, Logo } from "./styles"
import { BsHexagonFill } from "react-icons/bs"

export function Rodape() {
    return (
        <Container>
           
            <Logo>
                <BsHexagonFill size={18} color="#4D585E" />
                <p>food explorer</p>

            </Logo>

            
            <p>© 2025 - Todos os direitos reservados</p>
        </Container>
    )
}