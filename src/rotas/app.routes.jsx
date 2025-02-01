import { Routes, Route } from "react-router-dom";
import {Principal} from "../paginas/principal"
import { NovoPrato } from "../paginas/novoPrato";

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<NovoPrato />} />            
        </Routes>
    );
}