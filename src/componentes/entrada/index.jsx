import { Container } from "./styles"

export function Entrada({icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    ) ;
}