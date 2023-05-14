import React from 'react'

function Ccard({header,content}) {
  return (
    <div className='cCard'>
        <h2>{header}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Ccard