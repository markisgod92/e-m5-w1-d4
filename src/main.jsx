import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookContextProvider } from './context/BookContext.jsx'
import { ThemeContextProvider } from './context/Theme.jsx'
import { CommentContextProvider } from './context/CommentContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <BookContextProvider>
                <CommentContextProvider>
                    <App />
                </CommentContextProvider>
            </BookContextProvider>
        </ThemeContextProvider>
    </StrictMode>
)
