import { Link } from "react-router-dom"


export default function navBar() {

  return (
    <div className="navBar">
      <div className="vcontainer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link >
      </div >
    </div >
  )
}
