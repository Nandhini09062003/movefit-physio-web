import React, { useState } from 'react';
import logo from '../assets/movefit-logo.jpg';

const navItems = [
  { label: 'HOME', path: '/home' },
  { label: 'CLINICAL SERVICES', path: '/clinical-services' },
  { label: 'REHAB PROGRAMS', path: '/rehab-programs' },
  { label: 'OUR STORY', path: '/our-story' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/home';

  const isActive = (path: string) => {
    if (path === '/home') {
      return currentPath === '/home' || currentPath === '/';
    }

    return currentPath === path;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/home">
          <img src={logo} alt="Movefit Physio Rehab Clinic" height="50" className="d-inline-block me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="movefitNav"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="movefitNav">
          <ul className="navbar-nav ms-auto align-items-center fw-semibold">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <a
                  className={`nav-link px-3${isActive(item.path) ? ' active' : ''}`}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
