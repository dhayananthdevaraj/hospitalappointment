import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Neo Hospital Appointment</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            Home
          </li>
          <li className="nav-item">
            About
          </li>
          <li className="nav-item">
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
