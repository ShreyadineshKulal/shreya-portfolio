import certificate1_img from '../assets/certificate_1.png';
import certificate2_img from '../assets/certificate_2.png';
import certificate3_img from '../assets/certificate_3.png';
import certificate4_img from '../assets/certificate_4.png';
import certificate5_img from '../assets/certificate_5.png';
import certificate6_img from '../assets/certificate_6.png';
import comp_logo1 from '../assets/comp_logo1.png'; 
import comp_logo2 from '../assets/comp_logo2.png'; 
import comp_logo3 from '../assets/comp_logo3.png'; 
import comp_logo4 from '../assets/comp_logo4.png'; 
import comp_logo5 from '../assets/comp_logo5.png'; 
import comp_logo6 from '../assets/comp_logo6.png'; 
import comp_logo7 from '../assets/comp_logo7.png'; 

const certifications = [
    {
        c_no: 1,
        c_name: "Accenture Data Analytics and Visualization Job Simulation",
        company: "Accenture North America",
        company_logo: comp_logo1, 
        credential_url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_RKeqavA5oqr9gTfBY_1726911366807_completion_certificate.pdf",
        c_img: certificate1_img
    },
    {
        c_no: 2,
        c_name: "SQL For Data Science",
        company: "University of California, Davis",
        company_logo: comp_logo2, // Adding company logo
        credential_url: "https://coursera.org/share/5bbb16bcc52a62c8bbdc5b88c29e0649",
        c_img: certificate2_img
    },
    {
        c_no: 3,
        c_name: "Freedom With AI",
        company: "Freedom With AI",
        company_logo: comp_logo3, // Example, using Coursera's logo for Stanford courses
        credential_url: "",
        c_img: certificate3_img
    },
    {
        c_no: 4,
        c_name: "Cloud Computing Law: Data Protection and Cybersecurity",
        company: "Queen Mary University of London",
        company_logo: comp_logo4, // Path to Udemy logo
        credential_url: "https://www.coursera.org/account/accomplishments/records/BH3LH5ZR94UX",
        c_img: certificate4_img
    },

    {
        c_no: 5,
        c_name: "Web Development in React.js: Development Basics ",
        company: "Coursera",
        company_logo: comp_logo5, // Path to Udemy logo
        credential_url: "https://www.coursera.org/account/accomplishments/records/RZTQJAHJYVYF",
        c_img: certificate5_img
    },

    {
        c_no: 6,
        c_name: "React.Js",
        company: "Great Learning",
        company_logo: comp_logo6, // Path to Udemy logo
        credential_url: "https://www.coursera.org/account/accomplishments/records/BH3LH5ZR94UX",
        c_img: certificate6_img
    }
];

export default certifications;
