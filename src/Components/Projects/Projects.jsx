import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import React, { useState } from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (work) => {
        setSelectedProject(work); 
    };

    const closePopup = () => {
        setSelectedProject(null); 
    };

    return(
        <div id ="projects" className="myprojects">
            <div className="myprojects-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="myprojects-container">
                {mywork_data.map((work, index) => (
                    <img
                        key={index}
                        src={work.w_img}
                        alt={work.title}
                        style={{ width: '320px', height: '170px' }}
                        onClick={() => handleProjectClick(work)}
                    />
                ))}
            </div>

            <div className="myprojects-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>

            {selectedProject && (
                <div className="project-popup">
                    <div className="popup-card">
                        <span className="close-button" onClick={closePopup}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                       
                        <p>{selectedProject.description}</p>

                        {selectedProject.github_link ? (
                            <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        ) : (
                            <p>This project is stored locally and not available on GitHub.</p>
                        )}

                      
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
