import { Container } from "./styles";

export function AreaDeTexto({value, ...rest}) {
    return (
        <Container {...rest}>
            {value}


        </Container>    
    );
}