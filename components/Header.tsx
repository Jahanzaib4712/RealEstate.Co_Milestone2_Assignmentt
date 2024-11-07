import React from 'react';
import styles from '../app/page.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>RealEstateCo</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#listings">Listings</a>
        <a href="#about">AboutUs</a>
        <a href="#about">Contact</a>
      </nav>
    </header>
  );
};

export default Header;