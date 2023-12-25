import React, { useState } from 'react';
import data from '../data';
import data2 from '../data2';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import "../styles/section.css";

const Section = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handleCardClick = (index) => {
    // Stop the currently playing song
    setCurrentSongIndex(index === currentSongIndex ? null : index);
  };

  const cards = data.map((item, index) => (
    <Card
      key={index}
      item={item}
      isPlaying={index === currentSongIndex}
      onClick={() => handleCardClick(index)}
    />
  ));

  const cardtwo = data2.map((item, index) => {
    return (
      <Card
        key={index}
        item={item}
        isPlaying={index === currentSongIndex}
        onClick={() => handleCardClick(index)}
    />
    )
  })

  return (
    <>
      <div className='section-container'>
        <Header />
        <h1>Zzzzzz</h1>
        <div className='container-section-one'>{cards}</div>
        <h1>Sleep</h1>
        <div className='container-section-one'>{cardtwo} </div>
        <Footer />
      </div>
    </>
  );
};

export default Section;
