import { Container } from "./styles";

export function Secao({title, children, ...rest}) {
    return (
        <Container >
            <h2>{title}</h2>
            {children}
        </Container>
    )
}