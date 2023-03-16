import React from 'react'
import {HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Home/Footer'

const App = () => {
  return (
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App