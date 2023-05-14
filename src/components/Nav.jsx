import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    let [transform,setTransform] = useState(0)

    useEffect(()=>{
        let Prev = scrollY

        document.onscroll = (e) => {
            if ((scrollY > Prev)) {
                Prev = scrollY
                console.log("down")
                setTransform(120)
                console.log(transform)
            }
            if ( scrollY < Prev) {
                Prev = scrollY
                setTransform(0)
                console.log(transform)
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
                <Link className='special' to={"/"}>Start Building</Link> 

            </span>
        </div>
    </nav>
  )
}

export default Nav