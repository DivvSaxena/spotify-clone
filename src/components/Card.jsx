import React, { useState } from 'react'
import "../styles/card.css"
import useSound from 'use-sound'
import { IoIosPlay } from "react-icons/io";
import { GiPauseButton } from "react-icons/gi";




const Card = (prop) => {

  
  const [play, { stop }] = useSound(prop.item.songUrl);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      // If the song is currently playing, stop it
      stop();
    } else {
      // If the song is not playing, start playing it
      play();
    }

    // Toggle the isPlaying state for the next click
    setIsPlaying(!isPlaying);
  };
    
      
    

  return (
    <>
      <div className='container-card'>
      
        <img src= {prop.item.imgUrl} className='container-card-img'/>
        <div className='container-text'>
          <h3>{prop.item.title}</h3>
          <p>{prop.item.description}</p>
          <button onClick={handleClick}>
            {isPlaying ? <div className='stop-btn'><GiPauseButton className='stop-btn-icon'/></div> : <div className='play-btn'><IoIosPlay size={30} className='play-btn-icon'/></div>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Card