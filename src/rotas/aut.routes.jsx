import { Routes, Route } from "react-router-dom";
import {Login} from "../paginas/login"

export function RotasDeAutenticacao() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
        </Routes>
    );
}