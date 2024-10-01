import { createContext, useContext } from 'react'
import { MyNav } from '../components/navbar/MyNav'
import { MyFooter } from '../components/footer/MyFooter'

export const NavAndFooterContext = createContext()

export const NavAndFooterProvider = ({ children }) => {
    return (
        <NavAndFooterContext.Provider value={''}>
            <MyNav />
            {children}
            <MyFooter />
        </NavAndFooterContext.Provider>
    )
}
