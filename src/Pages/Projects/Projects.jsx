import './Projects.scss'
import laugh from "../../assets/laugh.png"
import stash from "../../assets/stash.png"
import portfolio from "../../assets/portfolio.png"
import { Link } from "react-router-dom";





const Projects = () => {
  return (
    <div className="content">

      <div className="project">
        <a className="project-img pomodoro" href="https://personalpomodoro.netlify.app/">\
          <img src= "https://live.staticflickr.com/65535/53102873273_bcdb327a71_o.png" alt="" />
        </a>

        <div className="buttons">
          <button className="lang">Web Dev.</button>
        </div>
      </div>

      <div className="project">

        <Link to="/Stash" className="project-img stash">
            <img src={stash} alt="" />
        </Link>
        <div className="buttons">
          <button className="lang">React</button>
          <button className="lang">Case Study</button>

        </div>

      </div>


      <div className="project">
        <a href="https://laughoftheday.netlify.app/" className="project-img laugh">
            <img src={laugh} alt="" />
        </a>
        <div className="buttons">
          <button className="lang">Web Dev.</button>
          <button className="lang">API</button>

        </div>
      </div>



      <div className="project">
        <a href= "https://inachun.netlify.app/" className="project-img portfolio">
            <img src="https://live.staticflickr.com/65535/53102424291_6186f8fab0_o.png" alt="" />
        </a>
        <div className="buttons">
          <button className="lang">React</button>
        </div>

      </div>


    </div>
  )
}

export default Projects