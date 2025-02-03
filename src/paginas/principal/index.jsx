import { useEffect, useState } from "react";
import { api } from "../../services/api"; 
import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao";
import { Container } from "./styles";
import { Rodape } from "../../componentes/rodape";
import { Banner } from "../../componentes/banner";
import { Secao } from "../../componentes/secao";
import { CartaoPrato } from "../../componentes/cartaoPrato";
import { Swiper, SwiperSlide } from "swiper/react"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Principal() {
    const [pratos, setPratos] = useState({});
    
    // Buscar pratos do backend quando o componente for montado
    useEffect(() => {
        async function buscarPratos() {
            try {
                const response = await api.get("/pratos"); 
                const pratosRecebidos = response.data;

                const pratosOrganizados = pratosRecebidos.reduce((acc, prato) => {
                    if (!acc[prato.categoria]) {
                        acc[prato.categoria] = [];
                    }
                    acc[prato.categoria].push(prato);
                    return acc;
                }, {});

                setPratos(pratosOrganizados);
            } catch (error) {
                console.error("Erro ao buscar pratos:", error);
            }
        }

        buscarPratos();
    }, []);

    return (
        <Container>
            <BarraDeNavegacao />
            <Banner />

            {Object.keys(pratos).map((categoria) => (
                <Secao key={categoria} title={categoria}>
                    <Swiper spaceBetween={20} slidesPerView="auto" loop={true}>
                        {pratos[categoria].map((prato) => (
                            <SwiperSlide key={prato.id} style={{ width: "auto" }}>
                                <CartaoPrato 
                                    nome={prato.nome} 
                                    foto={prato.foto} 
                                    preco={prato.preco} 
                                    id={prato.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Secao>
            ))}

            <Rodape />
        </Container>
    );
}
