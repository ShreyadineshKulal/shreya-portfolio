import React, { useState } from "react";
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import project_img from '../../assets/project_thumbnail.png'; 
import company_logo1 from '../../assets/company_logo.png'; 
import arrow_icon from '../../assets/arrow_icon.svg';
import report_pdf from '../../assets/Shreya_Dinesh_Kulal_220970078_Final_Report_MCA_complete.pdf'; 
import notepad from '../../assets/notepad.pdf';

const experiences = [
    {
        e_no: 1,
        name: "HealthCare Connect System",
        description: "Developed a full-stack healthcare management system...",
        company: "Softionik Solutions Private Limited",
        company_logo: company_logo1,
        project_url: "https://github.com/ShreyadineshKulal/Internship.git",
        about_url: notepad,
        image: project_img
    }
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
    };

    const closePopup = () => {
        setSelectedExperience(null);
    };

    return (
        <div id ="experience" className="myexperience">
            <div className="myexperience-title">
                <h1>Experience</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="myexperience-container">
                {experiences.map((experience) => (
                    <div key={experience.e_no} className="experience-card-container" onClick={() => handleExperienceClick(experience)}>
                        <img
                            src={experience.image}
                            alt={experience.name}
                            className="experience-thumbnail"
                        />
                        {/* <div>
                            <h3>{experience.name}</h3>
                            <p>{experience.company}</p>
                        </div> */}
                    </div>
                ))}
            </div>

            {selectedExperience && (
                <div className="experience-popup">
                    <div className="experience-card">
                        <span className="close-button" onClick={closePopup}>&times;</span>
                        <div className="experience-details">
                            <img
                                src={selectedExperience.image}
                                alt={selectedExperience.name}
                                className="experience-image"
                            />
                            <h2>{selectedExperience.name}</h2>
                            <p>{selectedExperience.description}</p>
                            <div className="button-group">
                                <a
                                    href={selectedExperience.project_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-github"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href={report_pdf}
                                    download
                                    className="download-report"
                                >
                                    Download Project Report
                                </a>

                                <a
        href={selectedExperience.about_url} // Button for About the Project
        target="_blank"
        rel="noopener noreferrer"
        className="about-project"
    >
        About the Project & Company
    </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
