import "./whoWeAre.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WhoWeAre = () => {

  return (
    <>
        <div className="mainContainer">
            <div className="subContainer">
                <div className="subleft">
                    <h1>Take Your Health And Body To Next Level</h1>
                    <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                    <div className="dis">
                        <div className="dis1">
                            <img src="./assets/weightlifter.png" alt="" />
                            <h2>Professional Trainer</h2>
                        </div>
                        <div className="dis1 dis2">
                            <img src="./assets/equpments.png" alt="" />
                            <h2>Modern Equipments</h2>
                        </div>
                        <div className="dis1">
                            <img src="./assets/gymMachine.png" alt="" />
                            <h2>Gym Machines</h2>
                        </div>
                    </div>
                    <button><h3>Take A Tour</h3><ArrowForwardIcon className="ArrowForwardIcon"/></button>
                </div>
                <div className="subRight">
                    <img src="./assets/girl-runningbg.png" alt="Running" />
                    <img id="girlbg" src="./assets/girl-runbg.svg" alt="background" />
                    <img id="girl" src="./assets/girl-run.png" alt="RUNNING GIRL" />
                    <img id="design" src="./assets/deisgn.png" alt="design" />
                </div>
            </div>
        </div> 
    </>
  )
}

export default WhoWeAre
