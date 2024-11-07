import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Listings from '../components/Listing';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import styles from './page.module.css';
import './globals.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Real Estate Website</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Listings />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;






