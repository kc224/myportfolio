import './About.scss'
import stanford from "../../assets/stanford.jpg"



const About = () => {
  return (
    <div className = "content">
      <div className="AboutMe">
        <h1 className = "txt">your mom...</h1>
        <div className="stanford-img">
          <img src={stanford} alt="" />
        </div>
      </div>

      <div className = "bios">
        <p>I'm a <b>developer</b> and <b>engineer</b> studying Computer Science + Art History <br /><span> @ Stanford University🌲</span></p>
        <br />
        <p>... and a <b>Product Intern</b> @ <a href="https://www.nowadays.ai/">Nowadays</a> (YC S23)—building an AI copilot for <br /> organizing corporate events 📆</p>
        <br />
        <p>... and also an <b>Investor</b> @ <a href=""></a>Picus Capital, exploring the opposite side of the <br />entrepreneurship coin.👩‍💻 </p>
      </div>

      

    </div>
  )
}

export default About