import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import PCard from './PCard'
import Card from './Card'

function Product() {
    let props = [
        "Scalability",
        "Possibilities",
    ]


    let productDetails = [
        {
            icon: "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64371f6b1dd1bcf06bdeb72e_01_DemandSpikes.png",
            header: "Demand spikes, fees don't",
            text: "Horizontal scaling keeps fees low and steady even at times of increased demand.",
        },
        {
            icon: "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64371f6b3402d3e493594882_02_FastEnough.png",
            header: "Fast enough for any application",
            text: "Parallel processing allows simple transactions, such as asset transfers, to finalize in real-time, without sacrificing security.",
        },
        {
            icon: "https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64371f6bac74f0c865509311_03_DynamicAssets.png",
            header: "Dynamic assets you actually own",
            text: "Sui's object-centric data model allows digital assets and their attributes to live on-chain and outside of smart contracts.",
        },
    ]
  return (
    <div className="product">
        <div className="typewriter">
            Infinte
            <div className='type'><Typewriter loop={false} words={props}/></div>
        </div>
        <div className="cards">
           {productDetails.map(({icon,text,header},key)=>{
            return (
                <PCard icon={icon} header={header} text={text} key={key}/>
            )
           })}
        </div>
    </div>
  )
}

export default Product