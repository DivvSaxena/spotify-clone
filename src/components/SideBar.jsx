import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HeaderSideBarTwo from './HeaderSideBarTwo';
import { GoGlobe } from "react-icons/go";
import "../styles/sidebar.css"


const SideBar = () => {
  return (
    <>
      <div className='side-pannel'>
        <div className='container-sidebar-one'>
          <div className='subcontainer-sidebar-one'>
            <FaSpotify className='subcontainer-sidebar-icon'/>
          <h2>Spotify</h2>
          </div>
          <div className='subcontainer-sidebar-two'>
            <GoHomeFill className='subcontainer-sidebar-icon'/>
            <h2>Home</h2>
          </div>
          <div className='subcontainer-sidebar-two-glass'>
            <FaMagnifyingGlass className='subcontainer-sidebar-icon-glass'/>
            <h2>Search</h2>
          </div>
        </div>

        <div className='container-sidebar-two'>
          <HeaderSideBarTwo />
          <div className='twosubcontainer-sidebar-two'>
            <h3>Create your first playlist</h3>
            <p>It's easy, we'll help you</p>
            <a>Create playlist</a>
          </div>
          <div className='container-sidebar-three'>
            <ul>
              <li><a>Legal</a></li>
              <li><a>Privacy Center</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Cookies</a></li>
              <li><a>About Ads</a></li>
              <li><a>Accessibility</a></li>
              <li><a>Notice at Collection</a></li>
              <li><a>Your Privacy Choices</a></li>
              <li><a href='' className='cookies'>Cookies</a></li>
            </ul>
          </div>

          <div className='container-sidebar-four'>
            <GoGlobe />
            <h3>English</h3>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default SideBar