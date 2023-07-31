import "./App.scss";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {

  return (
    <div className = "App">
      <Header />

        <main>
          <div className="page" id = "home">
            <Home />
          </div>

          <div className="page" id = "about">
            <About />
          </div>


        </main>
    </div>
  )
}

export default App

