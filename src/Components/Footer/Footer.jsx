import React from "react";
import './Footer.css';
import shreyalogo from '../../assets/shreyalogo.jpg';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={shreyalogo} alt="" style={{width:"50px",height:"50px"}} />
                    <p>I am a Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology. </p>
                </div>
                <div className="footer-top-right">
    <a href="https://www.linkedin.com/in/shreyadineshkulal" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" style={{width:"30px", height:"30px", cursor: "pointer"}} />
    </a>
    <p>Connect with me through LinkedIn too</p>
</div>





                </div>
                <hr style={{ border: '2px solid #ccc', marginTop: '10px' }} />
            </div>

    
    )
}

export default Footer