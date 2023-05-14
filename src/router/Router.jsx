import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from '../components/Nav'
import Home from '../pages/Home'
import Footer from '../components/Footer'
function Router() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
            <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router