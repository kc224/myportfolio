import './Header.scss';
import logo from "../../assets/astronaut3.png"
import { useEffect } from "react";

const Header = () => {

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li")
    const indicator = document.querySelector("nav .indicator")

    function update(){
      let width = navLinks[0].offsetWidth, 
          left = navLinks[0].offsetLeft;

      indicator.style.width = `${width + 26}px`
      indicator.style.left = `${left}px`
    }

    update();

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(link => {
          link.classList.remove("active")
        })
        let width = link.offsetWidth, 
            left = link.offsetLeft;

        indicator.style.left = left + "px"
        indicator.style.width = `${width + 30}px`

        link.classList.add("active")
      })
    })

  }, [])
  return ( <>
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>INA CHUN</h1>

      </div>


      <nav>
        <ul>
          <div className="indicator"></div>

          <li className = "active"><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experiences">Experiences</a></li>
        </ul>
      </nav>

    </header>
  </>
    
  )
}

export default Header 