import { Routes, Route } from "react-router-dom";
import {Login} from "../paginas/login"
import {Cadastro} from "../paginas/cadastro"

export function RotasDeAutenticacao() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            
        </Routes>
    );
}