
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages

import About from "./Components/about"
import Portfolio from "./Components/portfolio"


import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="about" element={<About />} />
          <Route exact path="portfolio" element={<Portfolio />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="portfolio">Portfolio</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;