import { Container, Conteudo, Tags, Pedido, BotaoPedido} from "./styles"
import { Rodape } from "../../componentes/rodape"
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"
import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao"
import {BotaoDeTexto} from "../../componentes/botaoDeTexto"
import {PiReceipt} from "react-icons/pi"
import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { usarAutenticacao } from "../../hooks/aut"

export function Prato() {
    const { usuario } = usarAutenticacao()
    const navigate = useNavigate()

    const params = useParams()

    const [prato, setPrato] = useState()

    useEffect(() => {
        async function buscarPrato() {
            const response = await api.get(`/pratos/${params.id}`)
            setPrato(response.data)
           

        }
        buscarPrato()
    }, [params.id])

     // Enquanto os dados ainda estão carregando, exibe um indicador de carregamento
     if (!prato) {
        return <p>Carregando...</p>
    }

    return (

        <Container>
            <BarraDeNavegacao/>

            <Conteudo>
                <BotaoDeTexto Icon={FiChevronLeft} title={"Voltar"} onClick={() => navigate(-1)}/>
                <img src={prato.foto} alt="Prato" />
                <h2>{prato.nome} </h2>
                <p>{prato.descricao}</p>

                <Tags>
                    {prato.ingredientes.map((ingrediente) => (
                    <p key={ingrediente.id}>{ingrediente.nome}</p>
                    ))}
                </Tags>


                { usuario.perfil === "cliente" && <Pedido>
                    <FiPlus size={32}/>
                    <span>1</span>
                    <FiMinus size={32}/>
                    <BotaoPedido Icon={PiReceipt} title={`pedir R$ ${prato.preco}`}/>
                </Pedido>}

                <Pedido>
                    <BotaoPedido title={"Editar prato"} onClick={() => navigate(`/editar/${prato.id}`)}/>
                </Pedido>



            </Conteudo>
            <Rodape/>
        </Container>

        
    )
}