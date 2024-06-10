import React from 'react';
import './skills.css';
import WebDeveloper from '../../AIMGGGG/webdev.png';
import GraphicDesigner from '../../AIMGGGG/graphic-designer.png';
import VideoEditor from '../../AIMGGGG/montage.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">I specialize in video editing, graphic design, and web development. I create engaging videos, stunning visuals, and user-friendly websites, delivering cohesive digital solutions tailored to each project.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDeveloper} alt="WebDeveloper" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>IT DEVELOPER</h2>
                    <p>I can create a website or application for you as per your request.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={GraphicDesigner} alt="GraghicDesiner" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Graphic Designer</h2>
                    <p>The graphic can be designed for you as you like.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={VideoEditor} alt="VideoEditor" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Video Editor</h2>
                    <p>Since I am a professional in video editing, you will get high quality and updates.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;