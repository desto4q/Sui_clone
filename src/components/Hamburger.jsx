import React, { useContext } from 'react'
import { userContext } from '../context/Context'

function Hamburger() {
    let {ham,setHam} = useContext(userContext)

    if (ham == true) {
        return (
            <div className="hamburger true" onClick={()=>{
                setHam(!ham)
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
  return (
    <div className="hamburger" onClick={()=>{
        setHam(!ham)
    }}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hamburger