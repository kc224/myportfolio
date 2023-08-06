import './About.scss'
import stanford from "../../assets/stanford.jpg"
import me from "../../assets/me.png"



const About = () => {
  return (
    <div className = "content2">

      <div className="chunk2">
        <div className="AboutMe">
          <h1 className = "txt">About Me!</h1>
          <div className="stanford about-img">
            <img src={stanford} alt="" />
          </div>
        </div>

        <div className = "bios">
          <p>I'm a <b>developer</b> & <b>engineer</b> studying Computer Science + Art History <span> @ Stanford University 🌲</span></p>
          <p>... and a <b>SWE + Product Intern</b> @ <a href="https://www.nowadays.ai/">Nowadays</a> (YC S23)—building an AI copilot for organizing corporate events 📆</p>
          <p>... and also an <b>Investor</b> @ <a href=""></a>Picus Capital, exploring the opposite side of the entrepreneurship coin. 👩‍💻 </p>
        </div>
      </div>


      <div className="chunk2">
        <div className="AboutMe">
          <h1 className = "txt">Outside of work...</h1>
          <div className="stanford about-img">
            <img src={me} alt="" />
          </div>
        </div>

        <div className = "bios">
          <p>I'm a <b>drone pilot</b> licensed by the Federal Aviation Administration! 👩‍✈️</p>
          <p>I also love to make delicious coffee (as an <b>ex-barista</b>) ☕</p>
          <p>... and travel to the coolest parts of the world. 🌎</p>
        </div>
      </div>



      <hr />

      <div className="coursework">

        <h1 className="txt">Relevant Coursework</h1>
        <p>CS 106B: Programming Abstractions</p>
        <p>CS 103: Mathematical Foundations of Computing</p>
        <p>CS 109: Intro to Probability for Computer Scientists</p>
        <p>CME 193: Intro to Scientific Python</p>
        <p>CS 106L: Standard C++ Programming Lab</p>
        <p>Math 51: Linear Algebra, Multivariable Calculus</p>
        <p>Med 279: Stanford Healthcare Consulting Group</p>
        <p>MS&E 140: Accounting for Managers and Entrepreneurs</p>
        
      </div>

      

    </div>
  )
}

export default About