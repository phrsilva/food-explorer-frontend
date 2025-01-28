import { Routes, Route } from "react-router-dom";
import {Prato} from "../paginas/prato"

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<Prato />} />            
        </Routes>
    );
}