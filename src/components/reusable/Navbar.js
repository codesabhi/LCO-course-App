import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"
import { BsCardText } from "react-icons/bs"

export default function Navbar() {
  const [state, setState] = useState(false)
  const [menuState, setMenuState] = useState([
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    { id: 2, url: "/about/", text: "About" },
    { id: 3, url: "/Services", text: "Services" },
    { id: 4, url: "/contact/", text: "Contact Us" },
  ])
  const [navbarState, navbarClass] = useState("collapse navbar-collapse")
  const toggleMenu = () => {
    state
      ? setState(false) || navbarClass("collapse navbar-collapse")
      : setState(true) || navbarClass("collapse navbar-collapse show")
  }

  return (
    <nav className="navbar navbar-expand-sm bg-theme text-white">
      <Link to="/" className="navbar-brand ml-5">
        <img src={logo} alt="logo goes here" width="40px" />
      </Link>
      <button onClick={toggleMenu} className="navbar-toggler" type="button">
        {/* <span className="text-white">Menu</span> */}

        <BsCardText className="dash-icon" />
      </button>
      <div className={navbarState}>
        <ul className="navbar-nav ml-auto mr-5">
        {menuState.map((menu) => {
          return (
            <li className="nav-item">
            <Link key = {menu.id} to= {menu.url} className="nav-link text-white">
              {menu.text}
            </Link>
          </li>
          )
        })}
          
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <FaCartArrowDown className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
