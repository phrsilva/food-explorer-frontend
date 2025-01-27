import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import tema from './estilos/tema'
import GlobalStyles from './estilos/global'

import {Rotas} from './rotas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Rotas />
    </ThemeProvider>
  </StrictMode>,
)
