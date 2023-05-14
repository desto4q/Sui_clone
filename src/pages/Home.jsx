import React from 'react'
import Hero from '../components/Hero'
import Community from '../components/Community'
import Product from '../components/Product'
import GetStarted from '../components/GetStarted'
import Contacts from '../components/Contacts'

function Home() {
  return (
    <div className="home">
      <Hero/>

      <div className='header'>
      Sui is an innovative, decentralized Layer 1 blockchain that redefines asset ownership.
      </div>
      <Community/>
      <Product/>
      <GetStarted/>
      <Contacts/>
    </div>
  )
}

export default Home