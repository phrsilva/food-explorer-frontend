import imgBanner from '../../assets/banner.png'
import { Container } from "./styles";

export function Banner() {
    return (
        <Container>
           
                <img src={imgBanner} alt="Banner" />
            
            <div>
                <h2>Sabores Inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecioandos</p>
            </div>
        </Container>
    )
}