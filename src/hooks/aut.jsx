import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ContextoDeAutenticacao = createContext({});


function ProvedorDeAutenticacao({ children }) {
    const [data, setData] = useState({});
    async function entrar({ email, senha }) {
        
        try {
            const response = await api.post("/sessao", { email, senha });
            const { usuario, token } = response.data;

            // Armazenar as informações no localStorage
            localStorage.setItem("@food-explorer:usuario", JSON.stringify(usuario));
            localStorage.setItem("@food-explorer:token", token);
            // Configurar o cabeçalho Authorization para futuras requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Atualizar o estado com o novo usuário e token
            setData({ usuario, token });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar. Tente novamente");
            }
        }
    }

    useEffect(() => {
        // Verificar se existe um token e usuário no localStorage ao inicializar
        const usuario = localStorage.getItem("@foodexplorer:usuario");
        const token = localStorage.getItem("@foodexplorer:token");

        if (usuario && token) {
            // Configurar o cabeçalho Authorization para futuras requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Definir os dados no estado
            setData({ 
                usuario: JSON.parse(usuario), 
                token 
            });
        }
    }, []); // Isso será executado uma vez após o componente ser montado
    
    return (
        <ContextoDeAutenticacao.Provider value={{ entrar, usuario: data.usuario }}>
            {children}
        </ContextoDeAutenticacao.Provider>
    );
}

function usarAutenticacao() {
    const contexto = useContext(ContextoDeAutenticacao);
    return contexto;
}

export { ProvedorDeAutenticacao, usarAutenticacao };
