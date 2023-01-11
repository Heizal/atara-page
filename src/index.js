import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './HeroSection/hero.js';
import MidSection from './MidSection/midSection.js';
import SignUp from './SignUpSection/signUp.js'
import Footer from './Footer/footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <MidSection/>
    <SignUp/>
    <Footer/>
  </React.StrictMode>
);
