import { Routes, Route } from "react-router-dom";
import {Principal} from "../paginas/principal"

export function RotasDeAplicacao() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />            
        </Routes>
    );
}