import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import Logo from '../../assets/logo.jpg';
import './navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const handleToggle = () => setNavToggle((prev) => !prev);
  return (
    <nav>
      <div className='container nav-container'>
        <h1 className='logo' onClick={() => setNavToggle(false)}>
          <Link to='/'>
            <img src={Logo} alt='RR 필라테스' />
          </Link>
        </h1>
        <ul className={`nav-links ${navToggle ? 'show-nav' : 'hide-nav'}`}>
          {links.map(({ name, path }, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
                onClick={handleToggle}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className='nav-toggle-btn' onClick={handleToggle}>
          {navToggle ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
