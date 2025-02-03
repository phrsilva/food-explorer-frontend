import { Routes, Route } from "react-router-dom";
import {Principal} from "../paginas/principal"
import { EditarPrato } from "../paginas/editarPrato";
import { Prato } from "../paginas/prato";
import { NovoPrato } from "../paginas/novoPrato";

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/editar/:id" element={<EditarPrato />} />
            <Route path="/novo" element={<NovoPrato />} />

            <Route path="/:id" element={<Prato />} />

        </Routes>
    );
}