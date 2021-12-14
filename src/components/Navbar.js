import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a className="brand-logo left">SheddyFx</a>
                <ul className="right">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)