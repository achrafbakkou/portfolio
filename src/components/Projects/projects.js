import React from 'react';
import './projects.css';
import Projects1 from '../../AIMGGGG/Untitled design.png';
import Projects2 from '../../AIMGGGG/7076bec3fa6d8b9f6869752e74e807f7.png';
import Projects3 from '../../AIMGGGG/4b0b5e890c8eb2f311e90cdcd332c622.png';
import Projects4 from '../../AIMGGGG/192f55cadf822776ce9ab784d7d8d71e.jpg';
import Projects5 from '../../AIMGGGG/Untitled design (1).png';
import Projects6 from '../../AIMGGGG/mockup_new_4x.jpg';

const projects = () => {
  return (
    <section id='projects'>
        <h2 className="projectstitle">My Projects</h2>
        <span className="projectsDesc">Develop innovative and responsive websites using the latest technologies, to ensure a smooth user experience and outstanding performance. Projects include designing and developing commercial websites, blogs, and e-stores. Creative designs focus on aesthetics and functionality, including logos, visual identities and promotional materials, with the goal of reflecting the client's vision and inspiring the target audience.</span>
        <div className="ProjectsImgs">
            <img src={Projects1} alt="" className="projectsImg" />
            <img src={Projects2} alt="" className="projectsImg" />
            <img src={Projects3} alt="" className="projectsImg" />
            <img src={Projects4} alt="" className="projectsImg" />
            <img src={Projects5} alt="" className="projectsImg" />
            <img src={Projects6} alt="" className="projectsImg" />
        </div>
        <button className="projectsBtn">See More</button>
    </section>
  );
}

export default projects;