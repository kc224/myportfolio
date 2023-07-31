import "./Home.scss"
import profile2 from "../../assets/profile2.png"

const Home = () => {
  return <div className = "home">
      <div className="details">
        <span className="intro">Hi, I'm</span>

        <div className="name">
          <div>
            <h1 className = "txt">Ina</h1>
          </div>

          <div className="stack">
            WEBSITE CURRENTLY <b>UNDER CONSTRUCTION</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile2} alt="" />
      </div>
    </div>
}

export default Home