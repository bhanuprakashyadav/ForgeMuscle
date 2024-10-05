import "./AllClasses.css"

const AllClasses = () => {
  return (
    <>
      <div className="classContainer">
        <h1>Our Featured Classes</h1>
        <h2>We Are Offering Best flexible Classes</h2>
        <div className="imgContainer">
            <div className="item1">
                <h2 className="head">Cycling</h2>
                <h3 className="day">Wednesday: 9:00am-10:00am</h3>
            </div>
            <div className="item2">
                <h2 className="head">Karate</h2>
                <h3 className="day">Friday: 10:00am-11:00am</h3>
            </div>
            <div className="item3">
                <h2 className="head">Power</h2>
                <h3 className="day">Saturday: 9:00am-10:00am</h3>
            </div>
            <div className="item4">
                <h2 className="head">Meditation</h2>
                <h3 className="day">Friday: 1:00pm-2:00pm</h3>
            </div>
            <div className="item5">
                <h2 className="head">M.M.A</h2>
                <h3 className="day">Sunday: 6:00pm-7:00pm</h3>
            </div>
            <div className="item6">
                <h2 className="head">Workout</h2>
                <h3 className="day">Everyday: 4:00pm-10:00pm</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default AllClasses
