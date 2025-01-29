import { Container } from "./styles.js"

export function Botao({title, Icon, className, loading = false, ...rest}) {
    return (
        <Container 
        type="button"
        disabled ={loading}
        className={className}
        {...rest}

        >
            {Icon && <Icon size={20} />}
            {title}

        </Container>
    )
}           

