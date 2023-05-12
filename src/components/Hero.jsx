import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="hero">
        <div className="videoCont">
        <video  autoPlay  muted loop>
            <source src='https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64377ee0d96a223b1d5c6700_01_Homepage_Hero-transcode.mp4' type='video/mp4'/>
        </video>
        </div>
        <div className="heroInfo">
            <h1>Build Beyond</h1>
            <div className='mainInfo'>
                <p>
                    <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/643774c258a9d626c29b1b60_Vectors-Wrapper.svg" alt="" />
                    Exlpore more
                </p>
                <div className='heroLink'>
                    <h2>Unlock the freedom to build powerful on-chain assets</h2>
                    <div className="links">
                        <Link className='special'>Get Started</Link>
                        <Link className='special'> Read docs</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero