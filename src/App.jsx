import "./App.scss";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
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
          </Routes>
      </Router>

    </div>
  )
}

export default App

