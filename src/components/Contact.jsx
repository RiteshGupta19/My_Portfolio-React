import React, { useState } from "react";
import { FaInstagram, FaGithubSquare, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/ritesh_gupta.19/" target="_blank" rel="noopener noreferrer" className="items">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/riteshgupta19/" target="_blank" rel="noopener noreferrer" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/RiteshGupta19" target="_blank" rel="noopener noreferrer" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:riteshgupta0968@gmail.com" target="_blank" rel="noopener noreferrer" className="items">
          <SiGmail className="icons" />
        </a>
        <a href="#!" onClick={handlePhoneClick} className="items">
          <FaPhoneAlt className="icons" />
        </a>
        {showPhoneNumber && (
          <div className="phone-number">+91 9172486340</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
