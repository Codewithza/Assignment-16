import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1>
           <span>I'm Zohaib Akhtar,</span> frontend developer
        </h1>
        <p>
            I am a frontend developer from Pakistan
        </p>
        <div className="div hero-action">
            <div className="div hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with Me
              </AnchorLink>
            </div>
            
            <div className="hero-resume">
            <a href="zaibcv.pdf" download={"Zohaib zaibcv.pdf"}>
                Get Resume
            </a>
            </div>
          
        </div>
    </div>
  )
}

export default Hero