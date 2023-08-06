import './Projects.scss'
import pomodoro from "../../assets/pomodoro.png"
import laugh from "../../assets/laugh.png"
import stash from "../../assets/stash.png"



const Projects = () => {
  return (
    <div className="content">

      <div className="project">
        <div className="project-img pomodoro">
            
            <img src={pomodoro} alt="" />
        </div>
      </div>

      <div className="project">
        <div className="project-img laugh">
            <img src={laugh} alt="" />
        </div>
      </div>


      <div className="project">
        <div className="project-img stash">
            <img src={stash} alt="" />
        </div>
      </div>


      <div className="project">
        <div className="project-img stash">
            <img src={stash} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Projects