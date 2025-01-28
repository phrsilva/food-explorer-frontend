import logoImg from '../../assets/polygon.svg'
import {Container} from "./styles";

export function Logo() {
    return (
        <Container>
            <img src={logoImg} alt="Logo" />
            <h1>food explorer</h1>
        </Container>
    )
}

