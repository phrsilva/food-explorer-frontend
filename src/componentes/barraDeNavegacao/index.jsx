import { useState, useEffect } from "react";
import { Container, LogoNavegacao, BotaoPedidos, BotaoPedidosDesktop } from "./styles";
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { PontoDeQuebra } from "../../estilos/pontoDeQuebra";
import { MenuLateral } from "../menuLateral";
import { Pesquisa } from "../pesquisa";
import { useNavigate } from "react-router-dom";
import { usarAutenticacao } from "../../hooks/aut";

export function BarraDeNavegacao() {
    const navigate = useNavigate();
    const { sair } = usarAutenticacao();
    const { usuario } = usarAutenticacao();

    const [perfil, setPerfil] = useState("cliente");
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

    function sairDaConta() {
        sair()
        navigate("/")
    }

    return (
        <>
            {!menuAberto && (
                <Container>
                    <p>{usuario?.nome}</p>
                    {!telaGrande && <FiMenu onClick={abrirMenu} className="iconeMovel" />}
                    <LogoNavegacao />
                    {telaGrande && <Pesquisa icon={FiSearch} type="text" placeholder="Busque por pratos ou ingredientes" className="iconeDesktop" />}
                    {telaGrande && <BotaoPedidosDesktop title="Meus pedidos (0)" Icon={PiReceipt} className="iconeDesktop" />}
                    {telaGrande && <RxExit className="iconeDesktop" onClick={sairDaConta} />}
                    {!telaGrande && <PiReceipt className="iconeMovel" />}
                    {!telaGrande && <BotaoPedidos title={"0"} />}
                </Container>
            )}

            {menuAberto && <MenuLateral fecharMenu={fecharMenu} />}
        </>
    );
}
