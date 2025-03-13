import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 py-2 px-4 d-none d-lg-block">
        <div className="container mx-auto d-flex flex-wrap justify-content-between align-items-center text-sm">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <MapPin size={16} className="me-2" />
              <span>Plot No.1 ,3rd Floor Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <a href="mailto:info@notioninsurance.com" className="d-flex align-items-center text-decoration-none text-dark hover-gray">
              <Mail size={16} className="me-2" />
              info@notioninsurance.com
            </a>
            <div className="d-flex gap-4">
              <a href="tel:+919302182475" className="d-flex align-items-center text-decoration-none text-dark hover-gray">
                <Phone size={16} className="me-2" />
                91-9302182475
              </a>
              <a href="tel:0755-4911343" className="d-flex align-items-center text-decoration-none text-dark hover-gray">
                <Phone size={16} className="me-2" />
                0755-4911343
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://www.notioninsurance.com/images/broker-logo.png" alt="Notion Insurance" className='h-20' />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item px-3">
                <a className="nav-link hover-gray" href="/">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link hover-gray" href="https://www.notioninsurance.com/about-us">About US</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link hover-gray" href="https://www.notioninsurance.com/make-claim">Make a Claim</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link hover-gray" href="https://www.notioninsurance.com/contact-us">Contact Us</a>
              </li>
              <li className="nav-item px-3">
                <a href="https://www.notioninsurance.com/login"><button className="btn btn-outline-primary">Login</button></a>
              </li>
              <li className="nav-item ps-3">
                <button className="btn btn-primary">Become a Posp</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;