import { useState, useEffect } from "react";
import { Container, LogoNavegacao, BotaoPedidos, BotaoPedidosDesktop } from "./styles";
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";
import { MenuLateral } from "../menuLateral";
import { Entrada } from "../entrada";
import { Pesquisa } from "../pesquisa";

export function BarraDeNavegacao() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [telaGrande, setTelaGrande] = useState(window.innerWidth >= Number(PontoDeQuebra.replace("px", "")));

    function abrirMenu() {
        setMenuAberto(true);
        document.body.style.overflow = "hidden";
    }

    function fecharMenu() {
        setMenuAberto(false);
        document.body.style.overflow = "auto";
    }

        useEffect(() => {
        function verificarTamanho() {
            setTelaGrande(window.innerWidth >= Number(PontoDeQuebra.replace("px", "")));
        }

        window.addEventListener("resize", verificarTamanho);
        return () => window.removeEventListener("resize", verificarTamanho);
    }, []);

    return (
        <>
            {!menuAberto && (
                <Container>
                    {!telaGrande && <FiMenu onClick={abrirMenu} className="iconeMovel" />}
                    <LogoNavegacao />
                    {telaGrande && <Pesquisa icon={FiSearch} type="text" placeholder="Busque por pratos ou ingredientes" className="iconeDesktop" />}
                    {telaGrande && <BotaoPedidosDesktop title="Meus pedidos (0)" Icon={PiReceipt} className="iconeDesktop" />}
                    {telaGrande && <RxExit className="iconeDesktop" />}
                    {!telaGrande && <PiReceipt className="iconeMovel" />}
                    {!telaGrande && <BotaoPedidos title={"0"} />}
                </Container>
            )}

            {menuAberto && <MenuLateral fecharMenu={fecharMenu} />}
        </>
    );
}
