import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const ContextoDeAutenticacao = createContext({});

export function ProvedorDeAutenticacao({ children }) {
    const [data, setData] = useState({});

    async function entrar({email, senha}) {
        try {
            const response = await api.post("/sessao", {email, senha});
            const { usuario , token} = response.data;
            localStorage.setItem("@foodexplorer:usuario", JSON.stringify(usuario));
            localStorage.setItem("@foodexplorer:token", token);
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData(usuario, token);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar. Tente novamente");
            }
        }
    }

    return (
        <ContextoDeAutenticacao.Provider value={{ entrar, usuario: data.usuario }}>
            {children}
        </ContextoDeAutenticacao.Provider>
    );
    

}

export function usarAutenticacao() {
    const contexto = useContext(ContextoDeAutenticacao);
    return contexto;
}