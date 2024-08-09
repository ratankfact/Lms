import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure your CSS styles are imported

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">DropSkills LMS</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/courses">Courses</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/courses/amazon">Amazon</Link></li>
              <li><Link to="/courses/website">Website</Link></li>
              <li><Link to="/courses/franchise">Franchise</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/social-media">Social Media Content</Link></li>
        <li><Link to="/updates">Regular Updates</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
