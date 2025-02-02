import {BrowserRouter} from 'react-router-dom'
import { RotasDeAutenticacao } from './aut.routes'
import { RotasDeAplicacao } from './app.routes'


export function Rotas(){
    return(
        <BrowserRouter>
            <RotasDeAutenticacao/>
        </BrowserRouter>
    )
}