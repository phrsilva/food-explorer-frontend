import { Container, LogoNavegacao, BotaoPedidos } from "./styles";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

export function BarraDeNavegacao() {
    return (
        <Container>
            <FiMenu />
            <LogoNavegacao/>
            <PiReceipt  />
            <BotaoPedidos title={"0"}/>



        </Container>
    )
}