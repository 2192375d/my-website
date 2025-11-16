import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar'
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import Games from './pages/games'
import './App.css'


function App() {

  return (
    <>
      <p></p>
      <div className="hcontainer">
        <NavBar />
        <div className="main_page">

          <div className="vcontainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/games" element={<Games />} />
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
