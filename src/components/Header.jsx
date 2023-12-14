import React from 'react'
import {  NavLink } from 'react-router-dom'
import { FaCircleChevronRight , FaCircleChevronLeft } from "react-icons/fa6";
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <div className='container'>
        
        <div className='container-icon'>
              <FaCircleChevronLeft className='icon' />
              <FaCircleChevronRight className='icon'/>
        </div>
        {/* <nav>
          <NavLink to="/sign-up">Sign up</NavLink>
          <NavLink to="/log-in">Log in</NavLink>
        </nav> */}
        <div className='container-two'>
          <a href='' className='signup'>Sign up</a>
          <a href='' className='login'>Log in</a>
        </div>
      </div>
    </>
  )
}

export default Header


// const Header = () => {
//   return (
//     <>
//       <div className='container'>
        
        
    
//     </>
//   )
// }

// export default Header