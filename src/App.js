import React from 'react'
import './style.css'
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import InputForm from './Components/InputForm'
import Footer from './Components/Footer'
import About  from './pages/About'
import Developer from './pages/Developer'
const App = () => {
  return (
    <>
    <Header heading = "TextAnalyzer."/>
    <Routes>
        <Route path="/" element={ <InputForm/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/developer" element={ <Developer/> } />
      </Routes> 
    <Footer/>
    </>
  )
}

export default App
