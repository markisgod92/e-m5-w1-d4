import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { MyNav } from './components/navbar/MyNav'
import { Welcome } from './components/hero/Welcome'
import { Main } from './components/Main/Main'
import { MyFooter } from './components/footer/MyFooter'

function App() {
    return (
        <>
            <MyNav />
            <Welcome />
            <Main />
            <MyFooter />
        </>
    )
}

export default App
