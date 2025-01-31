import { Container, LogoNavegacao, BotaoPedidos, BotaoPedidosDesktop } from "./styles";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

import { useState } from "react";
import { MenuLateral } from "../menuLateral";
import { Entrada } from "../entrada";
import { Botao } from "../botao";


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
                    <FiMenu onClick={abrirMenu} className="iconeMovel" />
                    <LogoNavegacao/>
                    <Entrada type="text" placeholder="Busque por pratos ou ingredientes" className="iconeDesktop"/>
                    <BotaoPedidosDesktop title="Meus pedidos (0)" Icon={PiReceipt} className="iconeDesktop"/>
                    <RxExit className="iconeDesktop"/>
                    <PiReceipt className="iconeMovel" />
                    <BotaoPedidos title={"0"}/>
                </Container>
            )}

            {menuAberto && <MenuLateral fecharMenu={fecharMenu} />}
        </>
    )
}