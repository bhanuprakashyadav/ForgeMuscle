import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import AllClasses from "./Components/Allclasses/AllClasses"
import WhyUs from "./Components/WhyChooseUs/WhyUs"
import Footer from "./Components/Footer/Footer"
import WhoWeAre from "./Components/Whoweare/WhoWeAre"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AllClasses />
      <WhyUs/>
      <Footer/>
    </>
  )
}

export default App
