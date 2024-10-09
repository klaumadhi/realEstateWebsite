import { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open , setOpen]= useState(false)
  return (
    <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img  src="/logo.png" alt="logo" />
            <span>MadhiEstate</span> 
          </Link>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
        </div>
        <div className="right">
        <Link to="/">Sing in</Link>
        <Link to="/" className="register">Sing up</Link>
      <div className="menuIcon">
        <img src="/menu.png" alt="" onClick={()=> setOpen(prev => !prev)}/>
      </div>
    <div className={open ? "menu active": "menu"}>
           <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/">Sing in</Link>
          <Link to="/">Sing up</Link>
    </div>
        </div>
    </nav>
  )
}
