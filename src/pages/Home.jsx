import React from 'react'
import Hero from '../components/Hero'
import Community from '../components/Community'

function Home() {
  return (
    <div className="home">
      <Hero/>

      <div className='header'>
      Sui is an innovative, decentralized Layer 1 blockchain that redefines asset ownership.
      </div>
      <Community/>
    </div>
  )
}

export default Home