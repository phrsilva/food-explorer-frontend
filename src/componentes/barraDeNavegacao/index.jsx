import { Container, LogoNavegacao, BotaoPedidos, Overlay } from "./styles";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useState } from "react";
import { MenuLateral } from "../menuLateral";


export function BarraDeNavegacao() {

    const [menuAberto, setMenuAberto] = useState(false)

    function abrirMenu() {
        setMenuAberto(true)
        document.body.style.overflow = "hidden"
    }

    function fecharMenu() {
        setMenuAberto(false)
        document.body.style.overflow = "auto"
    }

    
    return (
        <>
            {!menuAberto && (
                <Container>
                    <FiMenu onClick={abrirMenu} />
                    <LogoNavegacao/>
                    <PiReceipt  />
                    <BotaoPedidos title={"0"}/>
                </Container>
            )}

            {menuAberto && <MenuLateral fecharMenu={fecharMenu} />}
        </>
    )
}