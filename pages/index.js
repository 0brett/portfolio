import React from 'react';

import Head from '../components/head';
import Body from '../components/Body';

import '../sass/index.scss';

const Home = () => {
  const currentYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date());

  return (
    <>
      <Head title="brettf • engineer" />
      <Body />
    </>
  );
};

export default Home;
