import React from 'react';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div
      style={{
        maxWidth: '64rem',
        margin: '0 auto',
        display: 'grid',
        justifyItems: 'center'
      }}
    >
      <Head title="brettf • engineer" />
      <Nav />
      <Intro />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
