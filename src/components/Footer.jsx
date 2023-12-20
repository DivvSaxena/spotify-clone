import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import "../styles/footer.css"


const Footer = () => {
  return (
    <>
      
      <div className='footer-section'>
        <div className='footer'>
          <div className='container-footer-one'>
            <ul>
              <li><b>Company</b></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Jobs</a></li>
              <li><a href=''>For the Record</a></li>
            </ul>
            <ul>
              <li><b>Communities</b></li>
              <li><a href=''>For Artists</a></li>
              <li><a href=''>Developer</a></li>
              <li><a href=''>Advertising</a></li>
              <li><a href=''>Investors</a></li>
              <li><a href=''>Vendors</a></li>
            </ul>
            
            <ul>
              <li><b>Useful links</b></li>
              <li><a href=''>Support</a></li>
              <li><a href=''>Free Mobile App</a></li>
            </ul>
          </div>
          <div className='container-footer-two'>
            <a href='https://www.instagram.com/divvsaxena/'><AiOutlineInstagram className='container-footer-two-icon'/></a>
            <a href='https://twitter.com/Divvstwt'><SlSocialTwitter className='container-footer-two-icon'/></a>
            <a href='#'><BsFacebook className='container-footer-two-icon'/></a>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className='container-footer-last'>
          <p>© 2023 Divv Saxena</p>
        </div>
      </div>
    </>
  )
}

export default Footer