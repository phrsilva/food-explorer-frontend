import logoImg from '../../assets/polygon.svg'
import {Container} from "./styles";


export function LogoDoLogin({className}) {


    return (
        <Container className={className}>
            <img src={logoImg} alt="Logo" />
            <h1>food explorer</h1>
           
        </Container>
    )
}

