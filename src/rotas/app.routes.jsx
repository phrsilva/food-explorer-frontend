import { Routes, Route } from "react-router-dom";
import {Principal} from "../paginas/principal"
import { EditarPrato } from "../paginas/editarPrato";
import { Prato } from "../paginas/prato";

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/prato/:id" element={<Prato />} />

        </Routes>
    );
}