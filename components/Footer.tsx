import React from 'react';
import styles from '../app/page.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 RealEstateCo. <span className={styles.text_12}>Created By Shahzaib Nadeem</span> All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
