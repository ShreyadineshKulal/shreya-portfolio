import React from "react";
import './AboutMe.css';
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_img from '../../../assets/shreya1.jpg'

const AboutMe = () => {
    return(
        <div id ="about" className="aboutme">
            <div className="aboutme-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""/>
            </div>

            <div className="aboutme-sections">
                <div className="aboutme-left">
                    <img src={profile_img} alt="" style={{ width: '240px', height: '300px'}}/>
                </div>
                <div className="aboutme-right">
                    <div className="aboutme-para">
                        <p>I'm a dedicated Full Stack Developer with expertise in building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My passion for coding has led me to create dynamic solutions that solve real-world problems. Through my projects and internship experiences, I've developed strong skills in JavaScript, database management, and frontend/backend development, always striving to improve my craft.</p>
                        <p>Outside of tech, I enjoy exploring new places and practicing yoga, which helps me stay balanced and creative. I believe in the power of teamwork and clear communication, and I’m always excited to collaborate on innovative projects that push boundaries and make a positive impact.</p>
                    </div>
                    <div className="aboutme-skills">
    <h2>Skills</h2>
    <div className="aboutme-skill-columns">
        <div className="aboutme-skill-column">
            <div className="aboutme-skill-group">
                <h3>Programming Languages</h3>
                <div className="aboutme-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                <div className="aboutme-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="aboutme-skill"><p>C/C++</p><hr style={{width:"50%"}}/></div>
            </div>
            <div className="aboutme-skill-group">
                <h3>Frameworks & Libraries</h3>
                <div className="aboutme-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                <div className="aboutme-skill"><p>Node.js</p><hr style={{width:"70%"}}/></div>
                <div className="aboutme-skill"><p>Express.js</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>

        {/* Horizontal Divider */}
        <div className="aboutme-skill-divider"></div>

        <div className="aboutme-skill-column">
            <div className="aboutme-skill-group">
                <h3>Databases</h3>
                <div className="aboutme-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                <div className="aboutme-skill"><p>MySQL</p><hr style={{width:"70%"}}/></div>
                <div className="aboutme-skill"><p>Sql Server</p><hr style={{width:"50%"}}/></div>
                <div className="aboutme-skill"><p>Sqllite</p><hr style={{width:"60%"}}/></div>
            </div>
            <div className="aboutme-skill-group">
                <h3>Tools & Technologies</h3>
                <div className="aboutme-skill"><p>Git</p><hr style={{width:"70%"}}/></div>
                <div className="aboutme-skill"><p>Postman</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
    </div>
</div>


                </div>
            </div>

            <div className="aboutme-achievements">
            <div className="aboutme-achievement">
                    <h1>Skills and Tools Mastery</h1>
                    <p>Proficient in MERN Stack (MongoDB, Express, React, Node.js)</p>
                    <p>Experienced in Database Management (SQL, MongoDB, SQLite)</p>
                    <p>Frontend Development (HTML, CSS, JavaScript)</p>
                </div>
            <div className="aboutme-achievement">
                    <h1>Soft Skills</h1>
                    <p>Effective teamwork, strong communication, and collaboration.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
