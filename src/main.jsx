import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookContextProvider } from './context/BookContext.jsx'
import { ThemeContextProvider } from './context/Theme.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <BookContextProvider>
                <App />
            </BookContextProvider>
        </ThemeContextProvider>
    </StrictMode>
)
