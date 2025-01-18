import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showAbout, setShowAbout] = useState(false); // State to toggle the About Us section

  const toggleAbout = () => {
    setShowAbout(!showAbout); // Toggle the About Us visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
          <li>
            <a href="#about" onClick={toggleAbout}>About Us</a>
          </li>
      </div>

      {/* About Us Section that appears when toggled */}
      {showAbout && (
        <div className="about-us">
          <div className="about-us-content">
            <h3>About the Creator</h3>
            <p><strong>Name:</strong> Priyanshu Kumar</p>
            <p><strong>Bio:</strong> Priyanshu Kumar is a passionate software developer and an MCA student. With expertise in Java, machine learning, and full-stack development, he strives to create innovative solutions. He has a keen interest in building real-time applications, solving complex problems, and exploring new technologies.</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/PriYanahsu" target="_blank" rel="noopener noreferrer">PriYanahsu</a></p>
          </div>
          <div className="close-button" onClick={toggleAbout}>X</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
