import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { userContext } from '../context/Context'

function Nav() {

    let [transform,setTransform] = useState(0)
    let {ham,screen,setHam} = useContext(userContext)

    useEffect(()=>{
        let Prev = scrollY

        document.onscroll = (e) => {
            if ((scrollY > Prev)) {
                Prev = scrollY
                setTransform(120)
                setHam(false)
            }
            if ( scrollY < Prev) {
                Prev = scrollY
                setTransform(0)
            }
        }
    },[])

  return (
    <nav style={{transform: `translateY(-${transform}%)`}}>
        <div className="alert">
            <h2>Mainnet is live!</h2>
        </div>
        <div className="container">
            <span className="logo">
                <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/6439ab96e20cad137a4c80d0_TopNavLogo.svg" alt="" />
            </span>
            <span>
                <span >
                    <Link to={"/"}>Build</Link>
                    <Link to={"/"}>Learn</Link>
                    <Link to={"/"}>Connect</Link>
                </span>
                <Link className='special' to={"/"}>Start    Building
                </Link> 
                {screen == "wide" ? null : <Hamburger/>}

            </span>

            
        </div>
        {ham == true  ?  <div className="hammenu">
            <Link to={"/"}>Build</Link>
            <Link to={"/"}>Learn</Link>
            <Link to={"/"}>Connect</Link>
        </div> : null}
    </nav>
  )
}

export default Nav