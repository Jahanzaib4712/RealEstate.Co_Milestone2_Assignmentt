import React from 'react';
import styles from '../app/page.module.css'; // Assuming you have a CSS module named Hero.module.css

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.overlay}>
        <div className={styles.hero1}>
          <h2>Discover Your Dream Home</h2>
          <p>
               Explore our wide range of properties in prime locations. Find the perfect place to call home, whether it's a cozy apartment or a luxurious estate.
          </p>
            <button className={styles.heroButton}>Buy Property</button>

      </div>
      </div>
    </div>
  );
};

export default Hero;