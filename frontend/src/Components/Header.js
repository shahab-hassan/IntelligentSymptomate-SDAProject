import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
      if (window.innerWidth > 770) {
        setMenuOpened(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenMenu = () => {
    setMenuOpened(true);
  };

  const handleCloseMenu = () => {
    setMenuOpened(false);
  };

  return (
    <header>
      <div className="logoDiv">
        <img src="./images/logo.png" alt="Error"/>
      </div>
      <nav>
        <div className="nav_container">
          <ul className='ul' style={{ display: isMobile ? (menuOpened ? 'flex' : 'none') : 'flex' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" className='btnSecondary'>Login</Link></li>
            <li><Link to="/register" className='btn'>Register</Link></li>
          </ul>
          {isMobile && (
            <>
              <button 
                id="open_menu_btn" 
                onClick={handleOpenMenu} 
                style={{ display: menuOpened ? 'none' : 'inline-block' }}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <button 
                id="close_menu_btn" 
                onClick={handleCloseMenu} 
                style={{ display: menuOpened ? 'inline-block' : 'none' }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
