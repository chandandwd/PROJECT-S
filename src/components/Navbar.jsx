import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: '💌 Home' },
  { path: '/sorry', label: '🥺 Sorry' },
  { path: '/reasons', label: '💗 Reasons' },
  { path: '/care', label: '🌷 Care' },
  { path: '/letters', label: '💌 Letters' },
  { path: '/promises', label: '🤍 Promises' },
  { path: '/final', label: '❤️ Final' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentIndex = navItems.findIndex((item) => item.path === location.pathname);
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / navItems.length) * 100 : 0;

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-logo" aria-label="Home">
            <Heart size={22} fill="#e8567f" color="#e8567f" />
            <span>Our World</span>
          </NavLink>

          <div className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Progress bar */}
      <div className="progress-bar-container" aria-hidden="true">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-menu-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;
