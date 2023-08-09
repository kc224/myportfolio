import "./Home.scss";
import profile2 from "../../assets/profile2.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import Typewriter from 'typewriter-effect';


const Home = () => {
  return <div className = "home">
      <div className="details">
        <span className="intro">Hi, I'm</span >

        <div className="name">
        <h1 className = "txt">Ina</h1>

          {/* <div className="description">
            WEBSITE CURRENTLY <b>UNDER CONSTRUCTION</b>
          </div> */}

          <div className="typewriter">
            <Typewriter
              onInit = {(typewriter) => {
                typewriter
                .typeString("Full-Stack Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Drone Pilot")
                .pauseFor(1000)
                .deleteAll()
                .typeString("CS Undergrad @ Stanford")
                .pauseFor(1000)
                .deleteAll()
                .typeString("inachun@stanford.edu")
                .start();
              }}

            />
          </div>

          <div className="profiles">
            <a href="https://www.linkedin.com/in/inakathleenchun/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/kc224/"><img src={github} alt="" /></a>
            <a href="mailto: inachun@stanford.edu"><img src={email} alt="" /></a>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile2} alt="" />
      </div>
    </div>
}

export default Home