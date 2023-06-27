import React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import InputForm from './Components/InputForm'
import Footer from './Components/Footer'
import About  from './Components/About'
const App = () => {
  return (
    <>
    <Header heading = "TextAnalyzer."/>
    <Routes>
        <Route path="/" element={ <InputForm/> } />
        <Route path="/about" element={ <About/> } />
      </Routes> 
    <Footer/>
    </>
  )
}

export default App
