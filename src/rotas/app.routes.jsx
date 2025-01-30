import { Routes, Route } from "react-router-dom";
import {Prato} from "../paginas/prato"
import {MenuLateral} from "../componentes/menuLateral"

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<MenuLateral />} />            
        </Routes>
    );
}