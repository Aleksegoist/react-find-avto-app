import React from 'react';
import styles from './Footer.module.css';
import Logo_footer from '../../images/logo_footer.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo_footer} alt='/' />

        <span>© 2022 All Right Reserved</span>

        <button>Share a Car</button>
      </div>
    </div>
  );
};

export default Footer;
