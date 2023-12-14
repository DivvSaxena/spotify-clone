import React from 'react'
import "../styles/card.css"

const Card = (prop) => {
  return (
    <>
      <div className='container-card'>
        <img src={prop.item.imgUrl} className='container-card-img'/>
        <div className='container-text'>
          <h3>{prop.item.title}</h3>
          <p>{prop.item.description}</p>
        </div>
      </div>
    </>
  )
}

export default Card