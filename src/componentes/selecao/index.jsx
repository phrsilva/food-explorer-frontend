import { Container } from "./styles";

export function Selecao({ icon: Icon, options = [], ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <select {...rest}>
                <option value="">Selecione uma opção</option>
                {/* {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))} */}
            </select>
        </Container>
    );
}
