import React from 'react'
import SideBar from './SideBar'
import PannelOne from './PannelOne'
import "../styles/joiner.css"

const Joiner = () => {
  return (
    <div className='joiner-flexer'>
      <SideBar className='sidebar-joiner'/>
      <PannelOne className='pannelone-joiner'/>
    </div>
  )
}

export default Joiner