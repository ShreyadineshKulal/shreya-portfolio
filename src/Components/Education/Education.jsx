import React from "react";
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import manipal_logo from '../../assets/manipal_logo.jpeg';
import mgm_logo from '../../assets/mgm_logo.png';
import ppc_logo from '../../assets/ppc_logo.png';
import shanthiniketan_logo from '../../assets/shanthiniketan_logo.png';

const Education = () => {
    return (
        <div id ="education" className="education">
            <div className="education-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt=""/>
            </div>

            <div className="education-container">
                {/* MCA - Manipal Institute of Technology */}
                <div className="education-card">
                    <img src={manipal_logo} alt="Manipal Institute of Technology Logo" className="education-logo"/>
                    <div className="education-details">
                        <h2>Master Of Computer Application (MCA)</h2>
                        <p>Manipal Institute Of Technology, Manipal</p>
                        <p>CGPA: 7.33</p>
                    </div>
                </div>

                {/* BCA - MGM College */}
                <div className="education-card">
                    <img src={mgm_logo} alt="MGM College Logo" className="education-logo"/>
                    <div className="education-details">
                        <h2>Bachelor Of Computer Technology (BCA)</h2>
                        <p>Mahatma Gandhi Memorial College, Udupi</p>
                        <p>Percentage: 84.7%</p>
                    </div>
                </div>

                {/* PCMCs - PoornaPrajna College */}
                <div className="education-card">
                    <img src={ppc_logo} alt="PoornaPrajna College Logo" className="education-logo"/>
                    <div className="education-details">
                        <h2>Pre University Course (PCMCs)</h2>
                        <p>PoornaPrajna Pre University College, Udupi</p>
                        <p>Percentage: 83.16%</p>
                    </div>
                </div>

                {/* SSLC - Shanthiniketan High School */}
                <div className="education-card">
                    <img src={shanthiniketan_logo} alt="Shanthiniketan High School Logo" className="education-logo"/>
                    <div className="education-details">
                        <h2>High School (SSLC)</h2>
                        <p>Shanthinikethan English Medium High School, Udupi</p>
                        <p>Percentage: 81.76%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
