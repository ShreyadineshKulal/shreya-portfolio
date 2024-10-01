import './Certifications.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import certifications from "../../assets/certifications"; 
import arrow_icon from "../../assets/arrow_icon.svg";
import React, { useState } from "react";

const Certifications = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const closePopup = () => {
        setSelectedCertificate(null);
    };

    return (
        <div id ="certifications" className="mycertifications">
            <div className="mycertifications-title">
                <h1>My Certifications</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="mycertifications-container">
                {certifications.map((certificate) => (
                    <img
                        key={certificate.c_no}  // Use unique key
                        src={certificate.c_img}  // Correct certificate image reference
                        alt={certificate.c_name}
                        style={{ width: '320px', height: '170px' }}
                        onClick={() => handleCertificateClick(certificate)}
                    />
                ))}
            </div>

            <div className="mycertifications-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>

            {selectedCertificate && (
                <div className="certificate-popup">
                    <div className="certificate-card">
                        <span className="close-button" onClick={closePopup}>&times;</span>

                        <div className="certificate-details">
                          
                            <img
                                src={selectedCertificate.company_logo}
                                alt={selectedCertificate.company}
                                className="company-logo"
                            />
                            <h2>{selectedCertificate.c_name}</h2>

                          
                            <img
                                src={selectedCertificate.c_img}
                                alt={selectedCertificate.c_name}
                                className="certificate-image"
                            />

                            {/* Credential Link or Local Project */}
                            {selectedCertificate.credential_url ? (
                                <a
                                    href={selectedCertificate.credential_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="credential-link"
                                >
                                    View Credentials
                                </a>
                            ) : (
                                <p className="no-credential">No online credential available.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certifications;
