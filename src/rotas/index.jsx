import {BrowserRouter} from 'react-router-dom'
import { RotasDeAutenticacao } from './aut.routes'

export function Rotas(){
    return(
        <BrowserRouter>
            <RotasDeAutenticacao/>
        </BrowserRouter>
    )
}