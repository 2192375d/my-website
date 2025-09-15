import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar'
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import './App.css'


function App() {

  return (
    <>
      {/* <div className="background" aria-hidden="true" /> */}

      {/* <div className="hcontainer" style={{ border: "solid 3px" }}> */}
      <p></p>
      <div className="hcontainer">
        <NavBar />
        <div className="main_page">

          <div className="vcontainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </div>
        </div>
      </div >
      {/* <div> */}
      {/*   <a href="https://vite.dev" target="_blank"> */}
      {/*     <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      {/*   </a> */}
      {/*   <a href="https://react.dev" target="_blank"> */}
      {/*     <img src={reactLogo} className="logo react" alt="React logo" /> */}
      {/*   </a> */}
      {/* </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card"> */}
      {/*   <button onClick={() => setCount((count) => count + 1)}> */}
      {/*     count is {count} */}
      {/*   </button> */}
      {/*   <p> */}
      {/*     Edit <code>src/App.tsx</code> and save to test HMR */}
      {/*   </p> */}
      {/* </div> */}
      {/* <p className="read-the-docs"> */}
      {/*   Click on the Vite and React logos to learn more */}
      {/* </p> */}
    </>
  )
}

export default App
