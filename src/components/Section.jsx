import React from 'react'
import data from '../data'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
import "../styles/section.css"


const Section = () => {
  
  const cards = data.map(item => {
    return (
      <Card 
        item={item}
      />
    )
  })
  const cardtwo = data.slice(0, 2).map(item => {
    return (
      <Card 
        item={item}
      />
    )
  })

  return (
    <>
      <div className='section-container'>
        <Header />
        <h1>Zzzzzz</h1>
        <div className='container-section-one'>
          {cards}
        </div>
        <h1>Sleep</h1>
        <div className='container-section-one'>
          {cardtwo}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Section