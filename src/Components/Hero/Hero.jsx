import "./Hero.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

// eslint-disable-next-line react/prop-types
const Card = ({icon,heading,detail}) => (
    <div className="card">
        <h1>{icon}</h1>
        <h2>{heading}</h2>
        <p>{detail}</p>
    </div>
)

const Hero = () => {
    const data = [
        {
            icon:<DirectionsRunIcon />,
            heading: "PROGRESSION",
            detail:  " Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
        },
        {
            icon:<FitnessCenterIcon />,
            heading:"WORKOUT",
            detail:"With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
        },
        {
            icon:<EventAvailableIcon/>,
            heading: "NUTRITIONS",
            detail:"Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
        }
    ]

  return (
    <>

    <div className="container">
      <div className="heroContainer">
        <div className="heroLeft">
            <InstagramIcon className="InstagramIcon"/>
            <FacebookIcon className="FacebookIcon"/>
            <LinkedInIcon className="LinkedInIcon"/>
             <span className="line"></span>
            <span className="share">SHARE</span>
        </div>
        <div className="heroRight">
            <h3 >Find Your Energy</h3>
            <h1>MAKE YOUR BODY</h1>
            <h2>Fit & Perfect</h2>
            <div className="heroBtn">
            <h1>Our Classes</h1>
            <ArrowForwardIcon className="ArrowForwardIcon"/>
            </div>
        </div>
      </div>
      <div className="cardContainer">
        {data.map((data,i) => (
            <Card key={i} icon={data.icon} heading={data.heading} detail={data.detail}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Hero
