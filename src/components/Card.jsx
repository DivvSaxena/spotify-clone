import React, { useState, useEffect } from 'react';
import "../styles/card.css";
import useSound from 'use-sound';
import { IoIosPlay } from "react-icons/io";
import { GiPauseButton } from "react-icons/gi";

const Card = ({ item, isPlaying, onClick }) => {
  const [play, { stop }] = useSound(item.songUrl);

  // Stop the song when the isPlaying prop changes
  useEffect(() => {
    if (!isPlaying) {
      stop();
    }
  }, [isPlaying, stop]);

  const handleClick = () => {
    onClick();
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <>
      <div className='container-card'>
        <img src={item.imgUrl} className='container-card-img' />
        <div className='container-text'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={handleClick}>
            {isPlaying ? (
              <div className='stop-btn'><GiPauseButton className='stop-btn-icon' /></div>
            ) : (
              <div className='play-btn'><IoIosPlay size={30} className='play-btn-icon' /></div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
