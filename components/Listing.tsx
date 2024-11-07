import React from 'react';
import styles from '../app/page.module.css';
import Image from 'next/image';

const Listings: React.FC = () => {
  return (
    <section className={styles.listings} id="listings">
      <h2 >Property <span className={styles.property2} >Listings</span> </h2>
      <div className={styles.listingCard}>
        <h3>Luxury Villa</h3>
        <Image className={styles.yourClassName} src="/images/f3.png.jpg" alt='cardimage' width={400} height={300}/>
        <p>Location: Karachi, Pakistan</p>
        <p>Price: $500,000</p>
        <br />
        <button className={styles.heroButton}>Buy Property</button>
      </div>
      <div className={styles.listingCard}>
        <h3>Modern Apartment</h3>
        <Image className={styles.yourClassName} src="/images/f5.png.jpg" alt='cardimage' width={400} height={300}/>
        <p>Location: Lahore, Pakistan</p>
        <p>Price: $300,000</p>
        <br />
        <button className={styles.heroButton}>Buy Property</button>
      </div>
      <div className={styles.listingCard}>
        <h3>Beachfront House</h3>
        <Image className={styles.yourClassName} src="/images/f1.png.jpg" alt='cardimage' width={400} height={300}/>
        <p>Location: Lahore, Pakistan</p>
        <p>Price: $350,000</p>
        <br />
        <button className={styles.heroButton}>Buy Property</button>
      </div>
      <div className={styles.listingCard}>
        <h3>City Penthouse</h3>
        <Image className={styles.yourClassName} src="/images/f4.png.jpg" alt='cardimage' width={400} height={300}/>
        <p>Location: Karachi, Pakistan</p>
        <p>Price: $200,000</p>
        <br />
        <button className={styles.heroButton}>Buy Property</button>
      </div>
    </section>
  );
};

export default Listings;