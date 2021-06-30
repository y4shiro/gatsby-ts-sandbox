import React from 'react';
import 'normalize.css';

import Header from '../components/Header';
import MainVisual from '../components/MainVisual';
import About from '../components/About';
import Works from '../components/Works';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Works />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
