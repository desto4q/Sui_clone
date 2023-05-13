import React from 'react'

function PCard({icon,header,text}) {
  return (
    <div className="pcard">
        <div className="iconCont">
            <img src={icon} alt="" />
        </div>
        <div className="pcardInfo">
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default PCard