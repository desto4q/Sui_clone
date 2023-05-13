import React from 'react'

function Card({icon,info,link}) {
  return (
    <div className='card'>
        <img src={icon} alt="" />
        <div className="cardInfo">
            <p>{info}</p>
            <a href="#">{link}</a>
        </div>
    </div>
  )
}

export default Card