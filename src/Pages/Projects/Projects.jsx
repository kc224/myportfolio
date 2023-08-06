import './Projects.scss'
import pomodoro from "../../assets/pomodoro.png"
import laugh from "../../assets/laugh.png"
import stash from "../../assets/stash.png"
import portfolio from "../../assets/portfolio.png"




const Projects = () => {
  return (
    <div className="content">

      <div className="project">
        <div className="project-img pomodoro">
            <img src={pomodoro} alt="" />
        </div>
        <div className="buttons">
          <button className="lang">Web Dev.</button>
        </div>
      </div>

      <div className="project">
        <div className="project-img stash">
            <img src={stash} alt="" />
        </div>
        <div className="buttons">
          <button className="lang">React</button>
          <button className="lang">Case Study</button>

        </div>

      </div>


      <div className="project">
        <div className="project-img laugh">
            <img src={laugh} alt="" />
        </div>
        <div className="buttons">
          <button className="lang">Web Dev.</button>
          <button className="lang">API</button>

        </div>
      </div>



      <div className="project">
        <div className="project-img portfolio">
            <img src={portfolio} alt="" />
        </div>
        <div className="buttons">
          <button className="lang">React</button>
        </div>

      </div>


    </div>
  )
}

export default Projects