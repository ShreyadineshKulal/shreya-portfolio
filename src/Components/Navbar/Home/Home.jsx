import React from "react";
import './Home.css';
import profile_img from "../../../assets/shreya2.jpg";
import resume from "../../../assets/RESUME-SHREYA-DINESH-KULAL-UPDATED.pdf"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
    return (
        <div id="home" className="home">
            <img src={profile_img} alt="profile_img" style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
            <h1>👋<span> Hello! I'm Shreya Dinesh Kulal </span></h1>
            <p>I am a Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology.</p>
            <div className="home-action">
                <div className="home-connect">
                    <AnchorLink className='anchor-link' offset={50} href="#contact">Connect</AnchorLink>
                </div>
                <div className="home-resume">
                    <a 
                        href={resume} 
                        download="Shreya_Dinesh_Kulal_Resume.pdf" 
                        style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }} 
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
