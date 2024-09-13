import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { MyNav } from './components/navbar/MyNav';
import { Welcome } from './components/hero/Welcome';
import { MyFooter } from './components/footer/MyFooter';


function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <MyFooter />
    </>
  )
}

export default App
