import React from 'react';
import './intro.css';
import bg from '../../AIMGGGG/pakkou.png';
import btnImg from '../../AIMGGGG/form.png';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Achraf</span> <br />IT Developer</span>
            <p className="introPara">I'm a passionate IT developer who loves solving complex problems and building <br /> innovative solutions. My hardworking nature ensures I consistently <br /> deliver high-quality, efficient software.</p>
            <button className='btn'><a href='/portfolio.pdf'><img src={btnImg} alt="My Cv" className='btnImg' />MY CV</a></button>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
