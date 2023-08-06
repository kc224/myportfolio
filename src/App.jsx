import "./App.scss";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className = "App">

      <Router>
        <Header />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "projects" element = {<Projects />} />
          </Routes>
      </Router>

    </div>
  )
}

export default App

