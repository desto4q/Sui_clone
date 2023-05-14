import React from 'react'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div className="getStarted">
        <div className="videoCont">
        <video  autoPlay  muted loop>
            <source src='https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64377eef160cb44e527145c6_02_Homepage_BuildWithConfidence-transcode.mp4' type='video/mp4'/>
        </video>
        </div>
        <div className="getStartedInfo">
            <h1>Build with Confidence</h1>
            <div className='content'>
                <p>Sui simplifies the smart contract development process with Move, a user-friendly programming language that’s both safe and expressive.</p>

                <Link className='special'>Get Started <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/6430c4f3554dad1f5f147a74_Vectors-Wrapper.svg" alt="" /> </Link>
            </div>
        </div>
    </div>
  )
}

export default GetStarted