import {BrowserRouter} from 'react-router-dom'
import { RotasDeAutenticacao } from './aut.routes'
import { RotasDeAplicacao } from './app.routes'



export function Rotas(){
    const usuario = localStorage.getItem('@foodexplorer:usuario');

    return(
        <BrowserRouter>
            {usuario ? <RotasDeAplicacao /> : <RotasDeAutenticacao />}
        </BrowserRouter>
    )
}