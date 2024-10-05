import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="navContainer">
        <div className="navLeft">
            <img className="logo" src="./assets/logo.svg" alt="LOGO" />
            <h3>ForgeMuscles</h3>
        </div>
        <div className="navCentre">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SCHEDULE</li>
                <li>PRICING</li>
                <li>CLASSES</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className="navRight">
            <AccountCircleIcon className='AccountCircleIcon'/>
            <MenuIcon className='MenuIcon'/>
            <div className="joinBtn">
                <AddBoxIcon className='AddBoxIcon'/>
                <h3>Join Classes Now</h3>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navbar
