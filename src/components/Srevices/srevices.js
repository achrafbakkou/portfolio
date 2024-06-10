import React, { useRef } from 'react';
import './srevices.css';
import adobe from '../../AIMGGGG/294697_adobe_icon.png';
import nodejs from '../../AIMGGGG/pngwing.com 1.png';
import reactjs from '../../AIMGGGG/1174949_js_react js_logo_react_react native_icon.png';
import figma from '../../AIMGGGG/7564187_figma_logo_brand_icon.png';
import facebook from '../../AIMGGGG/5296499_fb_facebook_facebook logo_icon.png';
import instagram from '../../AIMGGGG/3225191_app_instagram_logo_media_popular_icon.png';
import linkedin from '../../AIMGGGG/linkedin.png';
import gethub from '../../AIMGGGG/github.png';
import emailjs from '@emailjs/browser';

const Srevices = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('achraf2002@Bhhhh', 'achrafHh2002@###', form.current, {
            publicKey: 'Wwihwq-1ezsrFNodE',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="srevicesPage">
        <div id="srevices1">
            <h1 className="srevicesPageTitle">My Services</h1>
            <p className="srevicesDesc">
            I provide top-tier services in video editing, web development, and graphic design, utilizing the latest techniques and technologies. My work guarantees high quality and exceptional results tailored to meet your needs. Let's bring your vision to life with creativity and precision.
            </p>
            <div className="srevicesImgs">
                <img src={adobe} alt="framework" className="srevicesImg" />
                <img src={nodejs} alt="framework" className="srevicesImg" />
                <img src={reactjs} alt="framework" className="srevicesImg" />
                <img src={figma} alt="framework" className="srevicesImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="srevicesPageTitle">Contact Me</h1>
            <span className="contactDesc">To request the service or for more information, contact me here.</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Emial' name='your_email' />
                <textarea className='msg' name="message" rows="7" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtnn">Submit</button>
                <div className="links">
                    <img src={facebook} alt="Facebook" className="link" />
                    <img src={instagram} alt="Instagram" className="link" />
                    <img src={linkedin} alt="LinkdIn" className="link" />
                    <img src={gethub} alt="GetHub" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Srevices