import React from 'react'
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import "../styles/headersidebartwo.css"

const HeaderSideBarTwo = () => {
  return (
    <div className='header-sidebar-two'>
      <div className='header-sub-sidebar-two'>
        <VscLibrary className='header-sidebar-two-icon'/>
        <h2>Your Library</h2>
      </div>
      <FaPlus className='header-sidebar-two-icon-plus'/>
    </div>
  )
}

export default HeaderSideBarTwo