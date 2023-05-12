import React from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'

WebFont.load({
    google: {
        families:["Montserrat"]
    }
})

function App() {
  return (
    <div className="app">
        <Router/>
    </div>
  )
}

export default App