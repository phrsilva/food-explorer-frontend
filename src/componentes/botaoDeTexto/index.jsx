import { Container } from "./styles.js";

export function BotaoDeTexto({Icon, title, ...rest}) {
    return (
        <Container
        type = "button"
        {...rest}
        >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}