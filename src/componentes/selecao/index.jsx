import { Container } from "./styles";

export function Selecao({ icon: Icon, ...rest }) {
    const opcoesCategoria = [
        { value: "entrada", label: "Entrada" },
        { value: "principal", label: "Prato Principal" },
        { value: "sobremesa", label: "Sobremesa" },
    ];

    return (
        <Container>
            {Icon && <Icon size={20} />}
            <select {...rest}>
                
                {opcoesCategoria.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}
