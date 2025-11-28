import { Routes, Route, useLocation } from "react-router-dom";
import PostsNavBar from './components/postsNavBar'
import NavBar from './components/navBar'
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
// import Games from './pages/games'
import './App.css'


function App() {
  const { pathname } = useLocation();
  const inPostsPage = (pathname == "/posts")


  return (
    <>
      <div className="hcontainer">
        <div className="navColumn">
          <NavBar />
          <br />
          {inPostsPage && <PostsNavBar />}
        </div>
        <div className="main_page">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            {/* <Route path="/games" element={<Games />} /> */}
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </div >
    </>
  )
}

export default App
