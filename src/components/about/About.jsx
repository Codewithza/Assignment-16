import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>
                About Me
            </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className=" about-right">
                <div className=" about-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet facere harum placeat laborum recusandae nesciunt laudantium ratione facilis ad quidem. Perferendis!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quo. Temporibus iusto vel deserunt vero libero totam accusamus perferendis.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>7+</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>60+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About