import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider'
import { NavProvider } from '@/providers/NavContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <NavProvider>
        <App />
      </NavProvider>
    </Provider>
  </StrictMode>,
)
