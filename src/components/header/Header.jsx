import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import Logo from '../../assets/images.jfif';
import data from '../../common/data';
import '../../styles/header.css';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav-container">
      <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
        <img src={Logo} alt="logo" />
        <span>Movies</span>
      </Link>
      <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active-nav' : '')} onClick={() => setIsNavShowing((prev) => !prev)}>{ item.title }</NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
        {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Header;
