import { Container } from "./styles.js";

export function BotaoDeTexto({title, ...rest}) {
    return (
        <Container
        type = "button"
        {...rest}
        >
            {title}
        </Container>
    )
}