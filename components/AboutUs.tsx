import React from 'react';
import styles from '../app/page.module.css';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <h2>About Us</h2>
      <p>We are a trusted real estate company dedicated to helping you find the perfect property. With over 10 years of experience, our team specializes in residential, commercial, and luxury properties.</p>

      <div className={styles.mission}>
        <h3>Our Mission</h3>
        <p>Our mission is to provide exceptional real estate services that exceed our clients&apos; expectations. We believe in building long-term relationships based on trust, transparency, and outstanding customer service.</p>
      </div>

      <div className={styles.team}>
        <h3>Meet Our Team</h3>
        <ul>
          <li>John Doe - Founder &amp; CEO</li>
          <li>Jane Smith - Senior Property Consultant</li>
          <li>Michael Lee - Sales Director</li>
        </ul>
      </div>

      <div className={styles.contact}>
        <h3>Contact Information</h3>
        <p>If you have any questions or need assistance, feel free to reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:info@realestate.com">info@realestate.com</a></li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Real Estate St., City, Country</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
