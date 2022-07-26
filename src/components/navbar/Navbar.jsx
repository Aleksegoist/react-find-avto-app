import React from 'react';
import styles from './Navbar.module.css';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import Logo from '../../images/logo1.png';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='logo' />
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href='/'>Learn more</a>
          </li>
          <li>
            <a href='/'>Log in</a>
          </li>
          <li>
            <a href='/'>Sign up</a>
          </li>
          <li>
            <AiOutlineSearch />
          </li>
          <li>
            <AiOutlineUser />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
