import React from 'react'
import toggleOpen from '../../../decorators/toggleOpen'

import '../../Nav/Nav.sass'

const Nav = ({isOpen, toggleOpen}) => {
  return (
    <div>
      <div className="wrapper-nav">
        <div className="row">
          <div className="columns">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item"><a href="#info">What is IS "Services"?</a></li>
                <li className="nav__list-item"><a href="#cross-browser">I wanna demo</a></li>
                <li className="nav__list-item"><a href="#help">Any questions?</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="wrapper-nav-sticky">
        <div className="row">
          <div className="columns">
            <nav className="nav-sticky">
              <ul className={`nav__list ${isOpen? "active" : ""}`}>
                <li className="nav__list-item"><a href="#info">What is IS "Services"?</a></li>
                <li className="nav__list-item"><a href="#cross-browser">I wanna demo</a></li>
                <li className="nav__list-item"><a href="#help">Any questions?</a></li>
              </ul>
              <div className="hamburger-wrapper">
                <button onClick={toggleOpen} className={`c-hamburger c-hamburger--htx ${isOpen? "active" : ""}`}><span>toggle men</span></button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default toggleOpen(Nav)
