import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

const ContextoDeAutenticacao = createContext({});

export function ProvedorDeAutenticacao({ children }) {
    const [data, setData] = useState({});

    async function entrar({email, senha}) {
        try {
            const response = await api.post("/", {email, senha});
            const { user } = response.data;
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            setData(user);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar. Tente novamente");
            }
        }
    }

}

export function usarAutenticacao() {
    const contexto = useContext(ContextoDeAutenticacao);
    return contexto;
}