import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
    <div className="footerContainer">
        <div className="footerLeft">
            <div className="main">  
                <img className="logo" src="./assets/logo.svg" alt="LOGO" />
                <h2>ForgeMuscles</h2>
            </div>
            <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <div className="icon">
            <InstagramIcon className="InstagramIcon"/>
            <FacebookIcon className="FacebookIcon"/>
            <LinkedInIcon className="LinkedInIcon"/>
            </div>
            <h4>Privacy Policy | © 2024 ForgeMuscles<br />
            Design by BHANU</h4>
            <div className="line"></div>
        </div>
        <div className="footerCenter">
            <h2>Our Classes</h2>
            <div className="l2"></div>
            <ul>
                <li>Fitness Classes</li>
                <li>Aerobic Classes</li>
                <li>Power Yoga</li>
                <li>Learn Machines</li>
                <li>Full-Body Strngth</li>
            </ul>
        </div>
        <div className="footerRight">
            <h2>Working Hours</h2>
            <div className="l2"></div>
            <ul>
                <li>Monday - Friday:</li>
                <li><span>7:00am - 21:00pm</span></li>
                <li>Saturday</li>
                <li><span>7:00am - 19:00pm</span></li>
                <li>Sunday - Closed</li>
            </ul>
        </div>
    </div>
      
    </>
  )
}

export default Footer
