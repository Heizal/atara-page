import React from 'react';
// import logo from './assets/atara-black.png';
import './hero.css';

function Hero () {
    return (
        // Hero of site
        <nav className="hero-section"> 
            {/* Logo comes here */}
            <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/BQY7TcNn/atata-white.png' border='0' alt='atata-white' className='logo'/></a>
            {/* Nav links */}
            <div className='navLinks'>
                <ul>
                    <li>About us</li>
                                
                </ul>
                <ul>
                    <li>Test Now</li>
                </ul>
                <ul>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Add Hero Images here */}
            {/* <a href='https://postimg.cc/1gnNpVvZ' target='_blank'><img src='https://i.postimg.cc/1gnNpVvZ/Draw-Kit-Vector-Illustration-Ecology-Environment-6.png' border='0' alt='Draw-Kit-Vector-Illustration-Ecology-Environment-6'className='heroOne'/></a> */}

            {/* Hero labels */}
            <div className='heroLabels'>
                <h1 className='hero-title'>Learn <br /> with ATARA</h1>
                <h2 className='hero-subtitle'>AI Powered Climate Education</h2>
                <button className='hero-btn'>Join Waitlist</button>
            </div>


        </nav>
    )
};


export default Hero;