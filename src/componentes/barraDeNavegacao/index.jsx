import { Container, LogoNavegacao } from "./styles";
import { Logo } from "../../componentes/logo";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

export function BarraDeNavegacao() {
    return (
        <Container>
            <FiMenu />
            <LogoNavegacao/>
            <PiReceipt  />



        </Container>
    )
}