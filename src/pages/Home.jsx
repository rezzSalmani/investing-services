import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import HighViewBlogs from '../components/home/HighViewBlogs';
import LastNews from '../components/home/LastNews';
import Footer from '../components/Footer';
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <>
      <Hero />
      <HighViewBlogs />
      <LastNews />
    </>
  );
};

export default Home;
