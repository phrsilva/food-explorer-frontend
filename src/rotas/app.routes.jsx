import { Routes, Route } from "react-router-dom";
import {Principal} from "../paginas/principal"
import { EditarPrato } from "../paginas/editarPrato";

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<EditarPrato />} />            
        </Routes>
    );
}