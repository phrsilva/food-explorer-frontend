import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ProvedorDeAutenticacao } from './hooks/aut'
import tema from './estilos/tema'
import GlobalStyles from './estilos/global'

import {Rotas} from './rotas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <ProvedorDeAutenticacao> 
        <Rotas />
      </ProvedorDeAutenticacao>
    </ThemeProvider>
  </StrictMode>,
)
