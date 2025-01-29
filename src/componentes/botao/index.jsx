import { Container } from "./styles.js"

export function Botao({title, className, loading = false, ...rest}) {
    return (
        <Container 
        type="button"
        disabled ={loading}
        className={className}
        {...rest}

        >
            
            {title}

        </Container>
    )
}           

