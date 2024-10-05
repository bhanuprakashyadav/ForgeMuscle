import "./WhyUs.css"

const WhyUs = () => {
  return (
    <>
    <div className="chooseHead">
        <h1>We Are Always Providing Best Fitness Service For You</h1>
    </div>
      <div className="chooseContainer">
        <div className="chooseleft">
            <img src="./assets/main-img.png" alt="" />
            <div className="line"></div>
        </div>
        <div className="chooseRight">
            <h1>Why Choose Us</h1>
            <h2>We Can Give A Shape Of Your Body Here!</h2>
            <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
            <div className="item">
                <div className="item1">
                    <img src="./assets/d1.png" alt="" />
                    <h3>Free Fitness Training</h3>
                </div>
                <div className="item1">
                    <img src="./assets/d2.png" alt="" />
                    <h3>Modern Gym Equipments</h3>
                </div>
            </div>
            <div className="item">
                <div className="item1">
                    <img src="./assets/d3.png" alt="" />
                    <h3>Gym Bag Equipments</h3>
                </div>
                <div className="item1">
                    <img src="./assets/d4.png" alt="" />
                    <h3>Fresh Bottle Watter</h3>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs
