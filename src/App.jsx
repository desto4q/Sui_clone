import React, { useLayoutEffect } from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
import {  getfetch } from './data/data'

WebFont.load({
    google: {
        families:["Montserrat"]
    }
})


function App() {
  useLayoutEffect(()=>{
    let title = document.querySelector("title")
      getfetch()
    title.innerHTML = "Sui | Unlock the freedom to build powerful on-chain assets"
    console.log(title)
  },[])


  return (
    <div className="app">
        <Router/>
    </div>
  )
}

export default App