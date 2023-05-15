import React from 'react'
import { Link } from 'react-router-dom'

function Build() {
  return (
    <div className="build">
        <h2>Build On Sui</h2>
        <div className="buildInfo">
            <h1>Explore the breadth of projects built on Sui
            </h1>
            <Link className='special'>
                View Ecosystem
                <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/6430da74b4e306b3cb127ad2_Vectors-Wrapper.svg" alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Build