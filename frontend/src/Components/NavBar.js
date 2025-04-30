import React from 'react'
import './css/Style.css'; 

function NavBar() {
  return (
    <div>
      <nav className="title">
        <div className="logo"><img src="/img/logoo.png" alt="logo" /></div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/myplants">My Plants</a></li>
        </ul>
        <div className="profile-menu">
          <img src="/img/settings.png" alt="Profile" className="profile-img" />
          <ul className="dropdown-content">
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
