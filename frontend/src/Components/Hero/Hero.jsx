import React from 'react'
import './Hero.css'
import hand_icon from '../../../src/assets/Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from './../../assets/Assets/Frontend_Assets/arrow.png'
import hero_image from '../../assets/images/he.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrival only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero
