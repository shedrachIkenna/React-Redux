import React from 'react'

const Navbar = () => {
    return(
        <navbar className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">SheddyFx</a>
                <ul className="right">
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                </ul>
            </div>
        </navbar>
    )
}

export default Navbar