import { BarraDeNavegacao } from "../../componentes/barraDeNavegacao"
import { Container } from "./styles"
import { Rodape } from "../../componentes/rodape"
import { Banner } from "../../componentes/banner"
import { Secao } from "../../componentes/secao"
import { CartaoPrato } from "../../componentes/cartaoPrato"
import { Swiper, SwiperSlide } from "swiper/react"; // Importação correta
import "swiper/css"; // Importa os estilos básicos do Swiper
import "swiper/css/navigation"; // Para botões de navegação
import "swiper/css/pagination"; // Para paginação (se necessário)

export function Principal() {
    return (
        <Container>
            <BarraDeNavegacao />
            <Banner />
            <Secao title="Entradas">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto" // Exibe múltiplos slides ao mesmo tempo
                    loop={true}
                    >
                        {/* Componentes CartaoPrato dentro dos slides */}
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                </Swiper>
            </Secao>

            <Secao title="Pratos Executivos">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto" // Exibe múltiplos slides ao mesmo tempo
                    loop={true}
                    >
                        {/* Componentes CartaoPrato dentro dos slides */}
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                </Swiper>
            </Secao>

            <Secao title="Sobremesas">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto" // Exibe múltiplos slides ao mesmo tempo
                    loop={true}
                    >
                        {/* Componentes CartaoPrato dentro dos slides */}
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                </Swiper>
            </Secao>

            <Secao title="Entradas">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto" // Exibe múltiplos slides ao mesmo tempo
                    loop={true}
                    >
                        {/* Componentes CartaoPrato dentro dos slides */}
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                        <SwiperSlide style={{ width: "auto" }}><CartaoPrato /></SwiperSlide>
                </Swiper>
            </Secao>




            <Rodape />

        </Container>
    )
}