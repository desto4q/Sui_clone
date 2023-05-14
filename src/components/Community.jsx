import React from 'react'
import Card from './Card'

function Community() {
  let cardItems = [
    {
      icon: "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/645c33ef6df474f881908a02_polymedia.png",
      text: "Sui Move feels like a paradigm change in web3 development. Treating objects as 1st class citizens brings composability to a whole new level.",
      link: "PolyMedia",
    },
    {
      icon: "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/645c340f67b17be8ed5a02be_KeepSake.png",
      text: "We are thrilled to be building on Sui. Its capacity to facilitate on-chain experiences that keep players fully engaged and to create dynamic, composable, and innovative on-chain assets that resemble in-game items is truly game-changing.",
      link: "KeepSake" ,
    },
  ]
  return (
    <div className="community">
        <div className='communityInfo'>
            {cardItems.map(({icon,text,link},key)=>{
              return(
                <Card key={key} icon={icon} info={text} link={link}/>
              )
            })}
        </div>
        <div className='iFrame'>
            <video autoPlay muted loop>
              <source  src='https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/643652b4ec653a05c178a0c2_-2393330798549273605homepage_community-transcode.mp4'/>
            </video>
            <div className="iFrameInfo">
              Meet the Sui<br></br>
              Community
            </div>
        </div>
    </div>
  )
}

export default Community